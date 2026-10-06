import { ImageResponse } from "next/og"
import { profile } from "@/data/profile"
import { og, ogFonts, ogImage, ogSize } from "@/lib/site"

// Link preview for the home page (and any page without its own image)
export const alt = `${profile.name} — ${profile.title}`
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
    const [fonts, portrait, elements] = await Promise.all([ogFonts(), ogImage("portrait"), ogImage("elements")])

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: og.background, fontFamily: "Poppins" }}>
                {/* Lilac circle and oblique shapes, as in the hero */}
                <div style={{ position: "absolute", top: -170, right: 230, width: 420, height: 420, borderRadius: 9999, background: og.lilacSoft, opacity: 0.45 }} />
                {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
                <img src={elements} width={340} height={321} style={{ position: "absolute", top: -40, right: -60 }} alt="" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={portrait} width={560} height={477} style={{ position: "absolute", bottom: -30, left: -150 }} alt="" />

                <div style={{ position: "absolute", left: 440, right: 60, top: 210, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 72, fontWeight: 600, color: og.ink, letterSpacing: -1.5, lineHeight: 1.05 }}>{profile.name}</div>
                    <div style={{ width: "100%", height: 5, background: og.lilac, marginTop: 22, marginBottom: 22 }} />
                    <div style={{ fontSize: 40, color: og.ink }}>{profile.title}</div>
                    <div style={{ display: "flex", fontSize: 28, color: og.muted, marginTop: 8 }}>
                        {profile.stack.join("  |  ")}
                    </div>
                </div>
            </div>
        ),
        { ...size, fonts }
    )
}
