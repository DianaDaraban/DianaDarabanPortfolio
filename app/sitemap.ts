import type { MetadataRoute } from "next"
import { getActiveCategories, getProjects } from "@/data/projects"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
    // A project in several categories gets one page per category; list the first as canonical
    const seen = new Set<string>()
    const projectPages = getActiveCategories().flatMap(c =>
        getProjects(c.id)
            .filter(p => !seen.has(p.slug) && seen.add(p.slug))
            .map(p => ({ url: `${siteUrl}/portfolio/${c.id}/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }))
    )

    return [
        { url: siteUrl, changeFrequency: "monthly", priority: 1 },
        ...projectPages,
    ]
}
