import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectList from "@/components/ProjectList"
import SectionHeading from "@/components/SectionHeading"
import { getActiveCategories, getCategory } from "@/data/projects"
import { profile } from "@/data/profile"
import styles from "@/components/portfolio.module.scss"

type Props = { params: Promise<{ category: string }> }

export function generateStaticParams() {
    return getActiveCategories().map(c => ({ category: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const category = getCategory((await params).category)
    if (!category) return {}
    return {
        title: `${category.label} projects`,
        description: category.description,
        alternates: { canonical: `/portfolio/${category.id}` },
        openGraph: { title: `${category.label} projects · ${profile.name}`, description: category.description },
    }
}

// One category's projects on their own page. On phones the home page links here from full-width
// category buttons; on desktop the home page shows the same lists as tabs.
export default async function CategoryPage({ params }: Props) {
    const category = getCategory((await params).category)
    if (!category) notFound()

    return (
        <div className={styles.page}>
            <Link href="/#portfolio" className={styles.back}>← Portfolio</Link>
            <SectionHeading as="h1">{category.label}</SectionHeading>
            <p className={styles.tabDescription}>{category.description}</p>
            <div className={styles.categoryPageList}>
                <ProjectList category={category.id} />
            </div>
        </div>
    )
}
