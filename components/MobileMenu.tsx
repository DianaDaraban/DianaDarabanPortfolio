"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { icons } from "./ContactLinks"
import { profile } from "@/data/profile"
import styles from "./portfolio.module.scss"

// Phone navigation: a burger button opening a full-screen menu (<dialog>: Esc, focus trap and
// scroll lock come from the browser). "Contact" expands the contact details as full-width rows.
export default function MobileMenu() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [open, setOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (open && !dialog.open) dialog.showModal()
        if (!open && dialog.open) dialog.close()
    }, [open])

    const close = () => { setOpen(false); setContactOpen(false) }

    const contacts = [
        { icon: icons.phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
        { icon: icons.email, label: profile.email, href: `mailto:${profile.email}` },
        { icon: icons.github, label: "GitHub", href: profile.github, external: true },
        { icon: icons.linkedin, label: "LinkedIn", href: profile.linkedin, external: true },
    ]

    return (
        <>
            <button type="button" className={styles.burger} onClick={() => setOpen(true)} aria-label="Open menu" aria-haspopup="dialog">
                <span /><span /><span />
            </button>

            <dialog ref={dialogRef} className={styles.mobileMenu} aria-label="Menu" onClose={close}>
                <button type="button" className={styles.mobileMenuClose} onClick={close} aria-label="Close menu">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>

                <nav className={styles.mobileMenuLinks}>
                    {pathname !== "/" && <Link href="/" onClick={close}>Home</Link>}
                    <Link href="/#portfolio" onClick={close}>Portfolio</Link>
                    <Link href="/#about" onClick={close}>About me</Link>
                    <button
                        type="button"
                        onClick={() => setContactOpen(o => !o)}
                        aria-expanded={contactOpen}
                        className={styles.mobileMenuToggle}
                    >
                        Contact
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                    </button>

                    {contactOpen && (
                        <ul className={styles.mobileContacts}>
                            {contacts.map(c => (
                                <li key={c.href}>
                                    <a href={c.href} onClick={close} {...(c.external && { target: "_blank", rel: "noreferrer" })}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true">{c.icon}</svg>
                                        <span>{c.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    <a href={profile.cv} target="_blank" rel="noreferrer" download="Diana_Daraban_CV.pdf" onClick={close} className={styles.mobileMenuCv}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" /></svg>
                        Download CV
                    </a>
                </nav>
            </dialog>
        </>
    )
}
