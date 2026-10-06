import { profile } from "@/data/profile"
import styles from "./portfolio.module.scss"

export const icons = {
    phone: (
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    ),
    email: (
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7.2L20 6H4l8 5.2ZM4 8.3V18h16V8.3l-8 5.2-8-5.2Z" />
    ),
    github: (
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    ),
    linkedin: (
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3v10ZM6.5 7.7a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5ZM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7-1.7 0-1.9 1.3-1.9 2.6v5h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19Z" />
    ),
}

const links = [
    { icon: icons.phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
    { icon: icons.email, label: profile.email, href: `mailto:${profile.email}` },
    { icon: icons.github, label: "GitHub", href: profile.github, external: true },
    { icon: icons.linkedin, label: "LinkedIn", href: profile.linkedin, external: true },
]

export default function ContactLinks() {
    return (
        <ul className={styles.contacts}>
            {links.map(link => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        className={styles.contactLink}
                        {...(link.external && { target: "_blank", rel: "noreferrer" })}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">{link.icon}</svg>
                        <span>{link.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    )
}
