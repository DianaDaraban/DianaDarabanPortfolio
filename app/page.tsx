import Image from 'next/image'
import AboutSection from '@/components/AboutSection'
import ContactLinks from '@/components/ContactLinks'
import ContactSection from '@/components/ContactSection'
import PortfolioBrowser from '@/components/PortfolioBrowser'
import ScrollCue from '@/components/ScrollCue'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'
import styles from '@/components/portfolio.module.scss'

// Structured data so search engines connect the name with the role and profiles
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bucharest", addressCountry: "RO" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: profile.stack,
}

export default function Home() {
  return (
    <div className={styles.home}>
      <script
        type="application/ld+json"
        // JSON.stringify output is safe here: all values are our own static strings
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className={styles.hero}>
        <Image
          src="/img/hero-elements.png"
          alt=""
          width={1400}
          height={1322}
          // Decorative and slides in after 1s: let the portrait (the LCP image) take bandwidth first
          fetchPriority="low"
          sizes="(max-width: 768px) 70vw, 40vw"
          className={styles.heroElements}
        />
        <Image
          src={profile.photo}
          alt={profile.name}
          width={1600}
          height={1363}
          priority
          sizes="(max-width: 968px) 90vw, 45vw"
          className={styles.heroPhoto}
        />
        <div className={styles.heroText}>
          <h1 className={`${styles.name} ${styles.animate}`}>{profile.name}</h1>
          <div className={styles.heroLine} />
          <h2 className={`${styles.title} ${styles.animate}`}>
            {profile.title}
            <span className={styles.stack}>
              {profile.stack.map(s => <span key={s}>{s}</span>)}
            </span>
          </h2>
          {/* On phones the contact details live in the menu (Contact) */}
          <div className={styles.heroContacts}>
            <ContactLinks />
          </div>
        </div>
        <ScrollCue />
      </section>

      {/* Rendered on the server, so the projects are in the HTML and /#portfolio links land correctly */}
      <div id="portfolio" className={styles.portfolioAnchor}>
        <PortfolioBrowser />
      </div>

      <div id="about" className={styles.aboutAnchor}>
        <AboutSection />
      </div>

      <div id="contact" className={styles.aboutAnchor}>
        <ContactSection />
      </div>
    </div>
  )
}
