"use client"

import { useEffect, useRef } from "react"
import styles from "./portfolio.module.scss"

// Section title with the lilac underline. The line draws itself when the heading scrolls
// into view (not on page load, when these sections are still below the fold), then keeps
// a slow shine. Without JS the line is simply shown.
export default function SectionHeading({ children }: { children: React.ReactNode }) {
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
            <h2 className={styles.sectionTitle}>{children}</h2>
            <div className={styles.sectionLine} />
        </header>
    )
}
