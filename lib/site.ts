import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Public URL of the site, used for canonical links, Open Graph, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL in the hosting provider when the domain changes.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dianadaraban.netlify.app").replace(/\/$/, "")

export const ogSize = { width: 1200, height: 630 }

// Shared palette for generated social images, matching the site
export const og = {
    ink: "#1f2232",
    muted: "#55525e",
    lilac: "#bc9ec1",
    lilacSoft: "#b4acd5",
    background: "#f4f4f4",
}

const asset = (...p: string[]) => join(process.cwd(), "assets", ...p)

export async function ogFonts() {
    const [regular, semibold] = await Promise.all([
        readFile(asset("fonts", "Poppins-Regular.ttf")),
        readFile(asset("fonts", "Poppins-SemiBold.ttf")),
    ])
    return [
        { name: "Poppins", data: regular, weight: 400 as const, style: "normal" as const },
        { name: "Poppins", data: semibold, weight: 600 as const, style: "normal" as const },
    ]
}

export async function ogImage(name: "portrait" | "elements") {
    const data = await readFile(asset("og", `${name}.png`))
    return `data:image/png;base64,${data.toString("base64")}`
}
