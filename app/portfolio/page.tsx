import { redirect } from "next/navigation"

// The portfolio lives on the home page, under the hero
export default function PortfolioPage() {
    redirect("/#portfolio")
}
