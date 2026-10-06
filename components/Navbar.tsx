import Link from "next/link"
import { icons } from "./ContactLinks"
import CvButton from "./CvButton"
import HomeLink from "./HomeLink"
import MobileMenu from "./MobileMenu"
import { profile } from "@/data/profile"
import styles from "./portfolio.module.scss"

export default function Navbar() {
    return (
        <div className={styles.nav}>
            {/* Desktop links; on phones they move into the burger menu */}
            <div className={styles.navLinks}>
                <HomeLink />
                <Link href="/#portfolio">Portfolio</Link>
                <Link href="/#about">About me</Link>
                <a href={profile.github} target="_blank" rel="noreferrer" className={styles.navIcon} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" aria-hidden="true">{icons.github}</svg>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.navIcon} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" aria-hidden="true">{icons.linkedin}</svg>
                </a>
                <CvButton />
            </div>
            <MobileMenu />
        </div>
    )
}
