import styles from "./portfolio.module.scss"

// Mouse with a rolling wheel and a bouncing chevron; jumps to the portfolio section
export default function ScrollCue() {
    return (
        <a href="#portfolio" className={styles.scrollCue} aria-label="Scroll to portfolio">
            <span className={styles.mouse}>
                <span className={styles.wheel} />
            </span>
            <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
            </svg>
        </a>
    )
}
