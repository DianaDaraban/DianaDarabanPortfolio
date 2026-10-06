import Link from "next/link"
import Gallery from "./Gallery"
import ProjectCover from "./ProjectCover"
import { categories, Project, ProjectLink } from "@/data/projects"
import styles from "./portfolio.module.scss"

type CategoryInfo = typeof categories[number]

const linkStyles: Record<ProjectLink["kind"], string> = {
    website: styles.websiteLink,
    prototype: styles.prototypeLink,
    code: styles.codeLink,
}

export default function ProjectDetails({ project, category }: { project: Project, category: CategoryInfo }) {
    return (
        <article className={styles.page}>
            <Link href={`/portfolio/${category.id}`} className={styles.back}>← {category.label}</Link>

            <header className={styles.detailHeader}>
                <div className={styles.detailText}>
                    {(project.badge || project.year) && (
                        <div className={styles.projectMeta}>
                            {project.badge && <span className={styles.badge}>{project.badge}</span>}
                            {project.year && <span>{project.year}</span>}
                        </div>
                    )}
                    <h1 className={`${styles.name} ${styles.animate}`}>{project.title}</h1>
                    <div className={styles.nameLine} />
                    <p className={`${styles.title} ${styles.animate}`}>{project.tagline}</p>
                    {project.tech && (
                        <ul className={styles.techList} aria-label="Technologies">
                            {project.tech.map(t => <li key={t}>{t}</li>)}
                        </ul>
                    )}
                    {project.links.length > 0 && <ul className={styles.projectLinks}>
                        {project.links.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={linkStyles[link.kind]}
                                >
                                    {link.label} ↗
                                </a>
                            </li>
                        ))}
                    </ul>}
                </div>
                <div className={styles.detailImage}>
                    <ProjectCover project={project} priority sizes="(max-width: 900px) 100vw, 55vw" />
                </div>
            </header>

            <section className={styles.details}>
                <h2 className={styles.detailTitle}>{project.detailTitle}</h2>
                {project.sections.map(section => (
                    <div key={section.title} className={styles.detailSection}>
                        <h3>{section.title}</h3>
                        {section.intro && <p>{section.intro}</p>}
                        {section.items && (
                            <ul>
                                {section.items.map(item => (
                                    <li key={item.text}>
                                        {item.label && <b>{item.label}</b>} {item.text}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            {project.gallery && (
                <section className={styles.gallery}>
                    <h2 className={styles.detailTitle}>Screenshots</h2>
                    <Gallery images={project.gallery} />
                </section>
            )}
        </article>
    )
}
