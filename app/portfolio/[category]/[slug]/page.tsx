import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetails from "@/components/ProjectDetails"
import { getActiveCategories, getCanonicalPath, getCategory, getProject, getProjects } from "@/data/projects"
import { profile } from "@/data/profile"

export function generateStaticParams() {
    return getActiveCategories().flatMap(c =>
        getProjects(c.id).map(p => ({ category: c.id, slug: p.slug }))
    )
}

type Props = { params: Promise<{ category: string, slug: string }> }

async function resolve(params: Props["params"]) {
    const { category: categoryId, slug } = await params
    const category = getCategory(categoryId)
    return { category, project: category && getProject(category.id, slug) }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { project } = await resolve(params)
    if (!project) return {}
    const canonical = getCanonicalPath(project.slug)
    const title = `${project.title} · ${profile.name}`
    // The preview image comes from the opengraph-image.tsx next to this page
    return {
        title: project.title,
        description: project.tagline,
        keywords: project.tech,
        alternates: { canonical },
        openGraph: { type: "article", url: canonical, title, description: project.tagline },
        twitter: { card: "summary_large_image", title, description: project.tagline },
    }
}

export default async function ProjectPage({ params }: Props) {
    const { category, project } = await resolve(params)
    if (!category || !project) notFound()

    return <ProjectDetails project={project} category={category} />
}
