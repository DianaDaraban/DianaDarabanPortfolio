import { certifications, education, experience, languages, skills, strengths, TimelineEntry } from "@/data/about"
import { profile } from "@/data/profile"
import SectionHeading from "./SectionHeading"
import styles from "./portfolio.module.scss"

function Timeline({ entries }: { entries: TimelineEntry[] }) {
    return (
        <ol className={styles.timeline}>
            {entries.map(entry => (
                <li key={entry.role + entry.org}>
                    <span className={styles.timelinePeriod}>{entry.period}</span>
                    <h4>{entry.role}</h4>
                    <p className={styles.timelineOrg}>{entry.org}</p>
                    <ul>
                        {entry.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                </li>
            ))}
        </ol>
    )
}

// Everything from the CV that the projects alone don't show: experience, skills, education
export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <SectionHeading>About me</SectionHeading>

            {/* Intro on a card, full width like the grid below, so the background lines never cross the text */}
            <div className={`${styles.aboutCard} ${styles.aboutIntro}`}>
                <div className={styles.aboutText}>
                    {profile.summary.map(p => <p key={p}>{p}</p>)}
                </div>
                <ul className={styles.aboutFacts}>
                    <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                        <span><b>Based in</b>{profile.location}</span>
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v12H4zM9 7V5h6v2" /></svg>
                        <span><b>Experience</b>Frontend development + 8 years of design</span>
                    </li>
                    <li>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>
                        <span><b>Focus</b>{profile.stack.join(" · ")}</span>
                    </li>
                </ul>
            </div>

            <div className={styles.aboutGrid}>
                <div className={styles.aboutCard}>
                    <h3>Experience</h3>
                    <Timeline entries={experience} />
                </div>

                <div className={styles.aboutColumn}>
                    <div className={styles.aboutCard}>
                        <h3>Technical skills</h3>
                        {skills.map(s => (
                            <div key={s.group} className={styles.skillGroup}>
                                <h4>{s.group}</h4>
                                <ul className={styles.techList}>
                                    {s.items.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className={styles.aboutCard}>
                        <h3>Education</h3>
                        <Timeline entries={education} />
                    </div>
                </div>
            </div>

            <div className={styles.aboutGridThree}>
                <div className={styles.aboutCard}>
                    <h3>Certifications</h3>
                    <ul className={styles.plainList}>
                        {certifications.map(c => <li key={c}>{c}</li>)}
                    </ul>
                </div>
                <div className={styles.aboutCard}>
                    <h3>Strengths</h3>
                    <ul className={styles.plainList}>
                        {strengths.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>
                <div className={styles.aboutCard}>
                    <h3>Languages</h3>
                    <ul className={styles.plainList}>
                        {languages.map(l => <li key={l}>{l}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
