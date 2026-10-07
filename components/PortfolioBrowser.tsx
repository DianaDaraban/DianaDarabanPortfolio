"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import Link from "next/link"
import ProjectList from "./ProjectList"
import SectionHeading from "./SectionHeading"
import { Category, getActiveCategories, getCategory, getProjects } from "@/data/projects"
import styles from "./portfolio.module.scss"

// The active tab lives in ?tab= so links like /?tab=frontend#portfolio open the right one.
// It is read with useSyncExternalStore instead of useSearchParams: useSearchParams would make
// Next skip rendering this whole section on the server until the JavaScript has loaded.
const TAB_EVENT = "portfolio-tab"

function subscribe(onChange: () => void) {
    window.addEventListener("popstate", onChange)
    window.addEventListener(TAB_EVENT, onChange)
    return () => {
        window.removeEventListener("popstate", onChange)
        window.removeEventListener(TAB_EVENT, onChange)
    }
}

const readTab = () => new URLSearchParams(window.location.search).get("tab")
const serverTab = () => null

export default function PortfolioBrowser() {
    const categories = getActiveCategories()
    const tab = useSyncExternalStore(subscribe, readTab, serverTab)
    const active = getCategory(tab ?? "") ?? categories[0]

    const sectionRef = useRef<HTMLElement>(null)
    const buttonsRef = useRef<HTMLUListElement>(null)

    // Phone category buttons slide in every time they come into view (and again when the menu's
    // Portfolio link is used): data-in "0" parks them off-screen, "1" plays the entrance.
    useEffect(() => {
        const list = buttonsRef.current
        if (!list) return
        const observer = new IntersectionObserver(([entry]) => {
            list.dataset.in = entry.isIntersecting ? "1" : "0"
        }, { threshold: 0.2 })
        observer.observe(list)
        const replay = () => {
            list.dataset.in = "0"
            requestAnimationFrame(() => requestAnimationFrame(() => { list.dataset.in = "1" }))
        }
        window.addEventListener("portfolio-replay", replay)
        return () => {
            observer.disconnect()
            window.removeEventListener("portfolio-replay", replay)
        }
    }, [])

    // Entrance animation. Cards are visible by default; this only hides ("arms") them when JS runs
    // and the section is still below the fold, then reveals them as it scrolls into view — so they
    // can never get stuck invisible. It touches the DOM directly, no React state involved.
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
            section.dataset.reveal = "shown"
            return
        }
        section.dataset.reveal = "armed"
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                section.dataset.reveal = "shown"
                observer.disconnect()
            }
        }, { rootMargin: "0px 0px -20% 0px" })
        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    function selectTab(id: Category) {
        const url = new URL(window.location.href)
        url.searchParams.set("tab", id)
        window.history.replaceState(null, "", url)
        window.dispatchEvent(new Event(TAB_EVENT))
    }

    return (
        <section ref={sectionRef} className={styles.portfolioSection}>
            <SectionHeading>Portfolio</SectionHeading>

            {/* Phones: one full-width button per category, each opening its own page */}
            <ul ref={buttonsRef} className={styles.categoryButtons}>
                {categories.map(c => {
                    const count = getProjects(c.id).length
                    return (
                        <li key={c.id}>
                            <Link href={`/portfolio/${c.id}`}>
                                <span className={styles.categoryButtonText}>
                                    <b>{c.label}</b>
                                    <small>{count ? `${count} project${count > 1 ? "s" : ""}` : "Coming soon"}</small>
                                </span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {/* Desktop: tabs switching the project grid in place */}
            <div className={styles.tabs} role="tablist" aria-label="Portfolio categories">
                {categories.map(c => (
                    <button
                        key={c.id}
                        type="button"
                        role="tab"
                        aria-selected={c.id === active.id}
                        className={`${styles.tab} ${c.id === active.id ? styles.tabActive : ""}`}
                        onClick={() => selectTab(c.id)}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabPanel}>
                <p className={styles.tabDescription}>{active.description}</p>
                <ProjectList key={active.id} category={active.id} />
            </div>
        </section>
    )
}
