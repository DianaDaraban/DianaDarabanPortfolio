import { ImageResponse } from "next/og"
import { og, ogFonts } from "@/lib/site"

// Browser tab icon: "DD" monogram on the hero's lilac circle
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default async function Icon() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, background: og.lilacSoft, fontFamily: "Poppins", fontWeight: 600, fontSize: 30, color: og.ink, letterSpacing: -2 }}>
                DD
            </div>
        ),
        { ...size, fonts: await ogFonts() }
    )
}
