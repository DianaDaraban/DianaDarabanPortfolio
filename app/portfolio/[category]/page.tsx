import { notFound, redirect } from "next/navigation"
import { getActiveCategories, getCategory } from "@/data/projects"

export function generateStaticParams() {
    return getActiveCategories().map(c => ({ category: c.id }))
}

// Category tabs live on the home page; keep shareable links like /portfolio/frontend working
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const category = getCategory((await params).category)
    if (!category) notFound()

    redirect(`/?tab=${category.id}#portfolio`)
}
