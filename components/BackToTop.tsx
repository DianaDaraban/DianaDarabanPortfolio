"use client"

import { useEffect, useState } from "react"
import styles from "./portfolio.module.scss"

// Floating "back to top" button. The site hides its scrollbar, so on long pages this is the
// quick way up; it only appears once the visitor has scrolled past the first screen.
export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <button
            type="button"
            className={`${styles.backToTop} ${visible ? styles.backToTopVisible : ""}`}
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label="Back to top"
            tabIndex={visible ? 0 : -1}
            aria-hidden={!visible}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" /></svg>
        </button>
    )
}
