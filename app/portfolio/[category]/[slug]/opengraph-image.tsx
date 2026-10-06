import { ImageResponse } from "next/og"
import { getActiveCategories, getCategory, getProject, getProjects } from "@/data/projects"
import { profile } from "@/data/profile"
import { og, ogFonts, ogImage, ogSize } from "@/lib/site"

// Link preview for each project page: title, context and tagline on the site's branding.
export const alt = "Project by Diana Dărăban"
export const size = ogSize
export const contentType = "image/png"

// Same params as the page, so every preview is built once at build time
export function generateStaticParams() {
    return getActiveCategories().flatMap(c => getProjects(c.id).map(p => ({ category: c.id, slug: p.slug })))
}

export default async function Image({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category: categoryId, slug } = await params
    const category = getCategory(categoryId)
    const project = category && getProject(category.id, slug)
    const [fonts, elements] = await Promise.all([ogFonts(), ogImage("elements")])

    const meta = [category?.label, project?.badge, project?.year].filter(Boolean).join("  ·  ")
    const tagline = project?.tagline ?? ""

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: og.background, fontFamily: "Poppins" }}>
                <div style={{ position: "absolute", bottom: -260, right: -140, width: 520, height: 520, borderRadius: 9999, background: og.lilacSoft, opacity: 0.4 }} />
                {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
                <img src={elements} width={380} height={359} style={{ position: "absolute", top: -50, right: -70 }} alt="" />

                <div style={{ position: "absolute", left: 80, right: 330, top: 70, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: og.muted, letterSpacing: 1 }}>{meta.toUpperCase()}</div>
                    <div style={{ fontSize: 76, fontWeight: 600, color: og.ink, letterSpacing: -1.5, lineHeight: 1.05, marginTop: 18 }}>
                        {project?.title ?? "Portfolio"}
                    </div>
                    <div style={{ width: 160, height: 5, background: og.lilac, marginTop: 26, marginBottom: 26 }} />
                    <div style={{ fontSize: 28, color: og.ink, lineHeight: 1.4 }}>
                        {tagline.length > 140 ? tagline.slice(0, 137).trimEnd() + "…" : tagline}
                    </div>
                </div>

                <div style={{ position: "absolute", left: 80, bottom: 56, display: "flex", fontSize: 26, color: og.ink }}>
                    <span style={{ fontWeight: 600 }}>{profile.name}</span>
                    <span style={{ color: og.muted, marginLeft: 14 }}>{`· ${profile.title}`}</span>
                </div>
            </div>
        ),
        { ...size, fonts }
    )
}
