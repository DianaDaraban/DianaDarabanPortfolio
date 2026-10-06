import Image from "next/image"
import { Project } from "@/data/projects"
import styles from "./portfolio.module.scss"

// Project screenshot, or a branded cover for projects without public visuals (private platforms)
export default function ProjectCover({ project, sizes, priority }: { project: Project, sizes: string, priority?: boolean }) {
    if (project.image) {
        return <Image src={project.image} alt={`${project.title} preview`} fill sizes={sizes} priority={priority} />
    }

    return (
        <div className={styles.coverFallback} aria-hidden="true">
            <Image src="/img/hero-elements.png" alt="" fill sizes={sizes} className={styles.coverShapes} />
            <span className={styles.coverTitle}>{project.title}</span>
            {project.tech && <span className={styles.coverTech}>{project.tech.slice(0, 3).join(" · ")}</span>}
        </div>
    )
}
