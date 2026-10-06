import Link from "next/link"
import ProjectCover from "./ProjectCover"
import { categories, Category, getProjects } from "@/data/projects"
import styles from "./portfolio.module.scss"

export default function ProjectList({ category }: { category: Category }) {
    const projects = getProjects(category)
    const upcoming = categories.find(c => c.id === category)?.upcoming

    // Tab without projects yet: say what's being built instead of showing an empty grid
    if (projects.length === 0) {
        return upcoming ? (
            <div className={styles.upcoming}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v5.5L4.8 18A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 8.5V3M7.5 14h9" /></svg>
                <div>
                    <h3>Coming soon</h3>
                    <p>{upcoming}</p>
                </div>
            </div>
        ) : null
    }

    return (
        <div className={styles.projectGrid}>
            {projects.map((project, index) => (
                <Link
                    key={project.slug}
                    href={`/portfolio/${category}/${project.slug}`}
                    className={styles.projectCard}
                    style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                >
                    <div className={styles.projectImage}>
                        <ProjectCover project={project} sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    {(project.badge || project.year) && (
                        <div className={styles.projectMeta}>
                            {project.badge && <span className={styles.badge}>{project.badge}</span>}
                            {project.year && <span>{project.year}</span>}
                        </div>
                    )}
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectTagline}>{project.tagline}</p>
                    <span className={styles.more}>View project →</span>
                </Link>
            ))}
        </div>
    )
}
