"use client"

import { useEffect, useRef } from "react"
import styles from "./portfolio.module.scss"

// Section title with the lilac underline. The line draws itself when the heading scrolls
// into view (not on page load, when these sections are still below the fold), then keeps
// a slow shine. Without JS the line is simply shown.
export default function SectionHeading({ children, as: Tag = "h2" }: { children: React.ReactNode, as?: "h1" | "h2" }) {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.dataset.line = "armed"
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.dataset.line = "drawn"
                observer.disconnect()
            }
        }, { rootMargin: "0px 0px -15% 0px" })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <header ref={ref} className={styles.pageHeader}>
            <Tag className={styles.sectionTitle}>{children}</Tag>
            <div className={styles.sectionLine} />
        </header>
    )
}
