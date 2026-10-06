import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import styles from './layout.module.scss'
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const title = `${profile.name} — ${profile.title}`;
const description =
  "Frontend Developer working with React, TypeScript and JavaScript, with 8 years of graphic design and UI/UX experience. Projects, case studies and CV.";

export const metadata: Metadata = {
  // Absolute base for canonical and Open Graph URLs (see lib/site.ts)
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Diana Dărăban", "Diana Daraban", "Frontend Developer", "React Developer", "TypeScript", "JavaScript",
    "UI/UX Designer", "Next.js", "Web Developer Bucharest", "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title,
    description,
    firstName: "Diana",
    lastName: "Dărăban",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  // Older opt-out read by Samsung Internet and older Android browsers (the viewport colorScheme covers Chrome)
  other: { "supported-color-schemes": "light only" },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f4",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className={styles.main}>
          <div className={styles.wrapper}>
            {/* Animated background (fan lines, waves, lilac circle). Its CSS animations live inside the
            SVG file, so the browser downloads it once and caches it instead of receiving it in every page.
            Phones get their own layout of the same artwork (mesh-mobile.svg); only one of the two is downloaded. */}
            <picture>
              <source media="(max-width: 768px)" srcSet="/img/mesh-mobile.svg" />
              <img src="/img/mesh.svg" alt="" className={styles.mesh} width={730} height={420} fetchPriority="low" />
            </picture>
          </div>
          <nav className={styles.navbar}>
            <Navbar />
          </nav>
          {children}
          <BackToTop />
        </main>

      </body>
    </html>
  );
}
