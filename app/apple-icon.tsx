import { ImageResponse } from "next/og"
import { og, ogFonts } from "@/lib/site"

// Home-screen icon on iOS (square; the system rounds the corners)
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: og.background }}>
                <div style={{ width: 150, height: 150, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, background: og.lilacSoft, fontFamily: "Poppins", fontWeight: 600, fontSize: 68, color: og.ink, letterSpacing: -4 }}>
                    DD
                </div>
            </div>
        ),
        { ...size, fonts: await ogFonts() }
    )
}
