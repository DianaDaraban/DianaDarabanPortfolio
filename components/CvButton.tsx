import { profile } from "@/data/profile"
import styles from "./portfolio.module.scss"

// Navbar CV link. Opens the PDF in a new tab (the browser's viewer offers download); `download` names the saved file
export default function CvButton() {
    return (
        <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            download="Diana_Daraban_CV.pdf"
            className={styles.cvButtonCompact}
            aria-label="Download CV (PDF)"
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" />
            </svg>
            CV
        </a>
    )
}
