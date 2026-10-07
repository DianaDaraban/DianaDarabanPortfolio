import { icons } from "./ContactLinks"
import SectionHeading from "./SectionHeading"
import { profile } from "@/data/profile"
import styles from "./portfolio.module.scss"

// Contact block at the end of the home page, after About me: one full-width row per channel
// on phones, two columns on wider screens, plus the CV download.
export default function ContactSection() {
    const rows = [
        { icon: icons.phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
        { icon: icons.email, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
        { icon: icons.github, label: "GitHub", value: "github.com/DianaDaraban", href: profile.github, external: true },
        { icon: icons.linkedin, label: "LinkedIn", value: "Diana Dărăban", href: profile.linkedin, external: true },
    ]

    return (
        <section className={styles.contactSection}>
            <SectionHeading>Contact</SectionHeading>
            <p className={styles.contactIntro}>Open to frontend and full-stack roles. The quickest way to reach me is by email or phone.</p>
            <ul className={styles.contactRows}>
                {rows.map(r => (
                    <li key={r.label}>
                        <a href={r.href} {...(r.external && { target: "_blank", rel: "noreferrer" })}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">{r.icon}</svg>
                            <span>
                                <small>{r.label}</small>
                                {r.value}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <a href={profile.cv} target="_blank" rel="noreferrer" download="Diana_Daraban_CV.pdf" className={styles.contactCv}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" /></svg>
                Download CV
            </a>
        </section>
    )
}
