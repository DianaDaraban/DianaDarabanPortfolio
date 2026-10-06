"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// "Home" in the navbar only where it's useful: on project pages, not on the home page itself
export default function HomeLink() {
    return usePathname() === "/" ? null : <Link href="/">Home</Link>
}
