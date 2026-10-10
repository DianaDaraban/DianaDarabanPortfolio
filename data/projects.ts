export type Category = "ui-ux" | "frontend" | "testing" | "fullstack"

// Tab order on the portfolio page. A tab shows once it has a project, or always when it
// has an `upcoming` note (shown in place of the cards until the first project is added).
export type CategoryInfo = { id: Category, label: string, description: string, upcoming?: string }

export const categories: CategoryInfo[] = [
    { id: "ui-ux", label: "UI/UX Design", description: "Case studies, from the first idea to interactive Figma prototypes." },
    { id: "frontend", label: "Frontend", description: "Professional work and websites I built, from my first projects to production." },
    { id: "fullstack", label: "Full-stack", description: "Complete applications: API, database and frontend, deployed and live." },
    {
        id: "testing",
        label: "Test Automation",
        description: "Automated tests for my applications: API tests, end-to-end tests and continuous integration.",
        upcoming: "In progress: an API test suite for DonEat with pytest and Django REST Framework, end-to-end tests with Playwright, all running automatically on every push with GitHub Actions.",
    },
]

export type ProjectLink = {
    label: string
    href: string
    kind: "website" | "prototype" | "code"
}

export type GalleryImage = {
    src: string
    caption: string
}

export type ListItem = {
    label?: string
    text: string
}

export type ProjectSection = {
    title: string
    intro?: string
    items?: ListItem[]
}

export type Project = {
    slug: string
    title: string
    tagline: string
    // Without an image the card shows a branded cover (e.g. private, login-only products)
    image?: string
    year?: string
    // Short context label shown on the card, e.g. "Professional work" or "Early project"
    badge?: string
    categories: Category[]
    links: ProjectLink[]
    tech?: string[]
    gallery?: GalleryImage[]
    detailTitle: string
    sections: ProjectSection[]
}

export const projects: Project[] = [
    {
        slug: "b360",
        title: "B360.ro",
        tagline:
            "Redesign and rebuild for B360, an advertising production company specialised in vehicle wraps, window graphics and signage: from Figma prototype to a Next.js website, moving the brand off WordPress to grow organic traffic. Real client, live preview.",
        image: "/img/projects/b360/site-home.webp",
        year: "2026",
        badge: "Client project · Live preview",
        categories: ["frontend", "ui-ux"],
        links: [
            { label: "Live website", href: "https://b360-two.vercel.app", kind: "website" },
            {
                label: "Mobile prototype",
                href: "https://www.figma.com/proto/CsyefhK1h4QKKwYpPdkbtW/B360.ro?page-id=4%3A148&node-id=4-149&p=f&viewport=216%2C-199%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A149",
                kind: "prototype",
            },
            { label: "Figma design", href: "https://www.figma.com/design/CsyefhK1h4QKKwYpPdkbtW/B360.ro?node-id=4-149", kind: "prototype" },
        ],
        tech: ["Next.js (App Router)", "React", "TypeScript", "CSS Modules", "Resend", "Vercel", "SEO & structured data", "Figma"],
        gallery: [
            { src: "/img/projects/b360/site-home.webp", caption: "Home: photo slideshow under a moving colour wash, title revealed word by word" },
            { src: "/img/projects/b360/site-mobile.webp", caption: "Mobile: home, services and the full-screen menu, with the fixed action bar" },
            { src: "/img/projects/b360/site-services.webp", caption: "Services as long pills closed by peeling photo stickers" },
            { src: "/img/projects/b360/site-clients.webp", caption: "Client sticker carousel and recent work on one screen" },
            { src: "/img/projects/b360/site-service-hero.webp", caption: "Service page hero" },
            { src: "/img/projects/b360/site-service-types.webp", caption: "Service overview: intro beside the kinds of work, each linking to the gallery" },
            { src: "/img/projects/b360/site-compare.webp", caption: "Drag the red line to compare a full and a partial wrap on the same car" },
            { src: "/img/projects/b360/site-benefits.webp", caption: "Benefits and FAQ side by side" },
            { src: "/img/projects/b360/site-gallery.webp", caption: "Portfolio: 220+ photos filtered by category or by client" },
            { src: "/img/projects/b360/site-quote.webp", caption: "Quote request with choice pills, a stepper and a file drop zone" },
            { src: "/img/projects/b360/site-contact.webp", caption: "Contact: fits one screen at any window height" },
            { src: "/img/projects/b360/site-about.webp", caption: "About page with count-up figures" },
            { src: "/img/projects/b360/home.webp", caption: "Starting point: the Figma mobile prototype" },
        ],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "The problem",
                intro:
                    "B360 has produced vehicle wraps and advertising materials since 2012, but its WordPress website brought almost no organic traffic: new clients arrived only while the company paid for ads. Services were scattered across the site, so neither visitors nor search engines got a clear picture of what B360 offers.",
            },
            {
                title: "Goals",
                items: [
                    { label: "Organic growth:", text: "rank on Google for the services clients actually search for, so the business depends less on paid ads." },
                    { label: "Clear service structure:", text: "one dedicated page per service, with content that answers real questions." },
                    { label: "More quote requests:", text: "make it easy to estimate a price and ask for an offer from any page, especially on mobile." },
                ],
            },
            {
                title: "From prototype to code",
                items: [
                    { label: "Design:", text: "information architecture and a mobile-first Figma prototype, then iterated directly in code with the client, page by page." },
                    { label: "Stack:", text: "Next.js App Router with React and TypeScript; every page statically generated, a single server route for the forms, deployed on Vercel." },
                    { label: "Content as data:", text: "services, FAQs, clients and 220+ portfolio photos live in typed data files, so new content does not touch the layout." },
                ],
            },
            {
                title: "Brand language in CSS",
                items: [
                    { label: "Peeling sticker:", text: "the signature detail of a vinyl-wrap company, built with two pseudo-elements and animated CSS custom properties (@property): the corner lifts and folds back in 3D on buttons, client stickers and icons." },
                    { label: "Vinyl-reveal headings:", text: "red blocks sweep over each word like film being applied, with a gloss running over the hero photos." },
                    { label: "Cut icons:", text: "the client's icon set drawn twice and clipped on a diagonal, red corner and a gap, so it adapts to any background colour." },
                ],
            },
            {
                title: "Interaction and UX",
                items: [
                    { label: "Section snapping:", text: "on desktop each page reads as a sequence of full screens, with a side rail showing where you are; gentle enough to never trap the reader." },
                    { label: "Integral vs. partial slider:", text: "an accessible range input over the photo, with a diagonal red divider following the handle." },
                    { label: "Conversion first:", text: "a fixed bottom bar on phones keeps the calculator, the phone call and the quote request one tap away." },
                    { label: "Fit to the window:", text: "the contact page scales its type and fields with the window height, so form and footer always fit one screen." },
                ],
            },
            {
                title: "Forms, legal and SEO",
                items: [
                    { label: "Working forms:", text: "quote, contact and calculator requests are sent by a Next.js route through Resend, with attachments, server-side validation and invisible spam traps." },
                    { label: "GDPR and consumer law:", text: "consent on every form, a privacy policy page and the ANPC dispute-resolution badge required for Romanian businesses." },
                    { label: "SEO:", text: "per-page metadata, sitemap, LocalBusiness, Service and FAQ structured data, and opening hours for Google." },
                    { label: "Quality checks:", text: "every change verified with scripted browser screenshots at desktop and phone sizes, including forced dark mode and no-overflow checks." },
                ],
            },
        ],
    },
    {
        slug: "ioana-gelepu",
        title: "Ioana Gelepu",
        tagline:
            "Presentation website for Ioana Gelepu, a lawyer running a boutique litigation practice.",
        image: "/img/projects/ioana-gelepu/home.webp",
        year: "2023",
        categories: ["frontend"],
        links: [
            { label: "Live website", href: "https://ioana-gelepu.netlify.app/", kind: "website" },
            { label: "Source code on GitHub", href: "https://github.com/DianaDaraban/ioana-gelepu.github.io", kind: "code" },
        ],
        tech: ["React", "Vite", "React Router", "React Bootstrap", "Bootstrap 5", "CSS3", "Responsive design"],
        gallery: [
            { src: "/img/projects/ioana-gelepu/home.webp", caption: "Experience (home page)" },
            { src: "/img/projects/ioana-gelepu/story.webp", caption: "The story" },
            { src: "/img/projects/ioana-gelepu/top10.webp", caption: "Top 10 relevant projects" },
            { src: "/img/projects/ioana-gelepu/mobile.webp", caption: "Mobile layout" },
        ],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "Overview",
                intro:
                    "A multi-page presentation site that introduces the lawyer's experience, team and approach. It has seven sections: Experience, Top 10, Team, The Story, Testimonials, Pro Bono and Contact.",
            },
            {
                title: "Implementation",
                items: [
                    { label: "Routing:", text: "a single-page app with React Router, one route per section." },
                    { label: "Data-driven content:", text: "all texts live in separate data modules, so the pages stay small and the copy can be edited without touching the layout." },
                    { label: "Responsive:", text: "dedicated mobile components and a burger menu, plus media queries for the desktop layout." },
                    { label: "Visual identity:", text: "a banner for each section, the brand logo as a background watermark and the DIN Next LT Pro typeface loaded as a web font." },
                ],
            },
        ],
    },
    {
        slug: "doneat",
        title: "DonEat",
        tagline:
            "A full-stack platform that reduces food waste: shops, restaurants and individuals post surplus food, and people in need reserve it before it expires.",
        image: "/img/projects/doneat/home.webp",
        year: "2026",
        badge: "Django + React",
        categories: ["fullstack"],
        links: [
            { label: "Live demo", href: "https://doneat.vercel.app/", kind: "website" },
            { label: "Source code on GitHub", href: "https://github.com/DianaDaraban/DonEat", kind: "code" },
        ],
        tech: [
            "Python", "Django", "Django REST Framework", "SimpleJWT", "SQLite / PostgreSQL",
            "React", "TypeScript", "Vite", "React Router", "Axios", "Leaflet", "Tailwind CSS", "SCSS Modules",
            "Vercel", "Render",
        ],
        gallery: [
            { src: "/img/projects/doneat/home.webp", caption: "Offers feed with filters, sorting, search and map" },
            { src: "/img/projects/doneat/product.webp", caption: "Product page" },
            { src: "/img/projects/doneat/about.webp", caption: "About page" },
        ],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "Overview",
                intro:
                    "DonEat connects food donors with the people and organisations who need it. Donors publish listings with quantity, price and an expiry date; buyers browse the offers, add them to a cart or wishlist and place orders that the vendor then tracks through to delivery. Listings disappear from the public feed automatically once they expire.",
            },
            {
                title: "Backend (Django REST API)",
                items: [
                    { label: "Three Django apps:", text: "api (products, categories, cart, checkout, orders, wishlist, vendor dashboard, contact), accounts (users, profiles, stores) and notifications." },
                    { label: "Authentication:", text: "JWT access and refresh tokens with SimpleJWT, login by email or username, and a password-reset flow with signed links." },
                    { label: "Roles and permissions:", text: "public endpoints for browsing; buyer endpoints for cart, orders and wishlist; vendor endpoints for managing products, updating order status and reading dashboard statistics." },
                    { label: "Business rules:", text: "the public feed only returns available products whose expiry date is still in the future, with search across product titles and categories." },
                    { label: "Notifications:", text: "Django signals create in-app notifications and send HTML emails (account created, order created, order delivered, wishlist item expiring), with per-user notification settings." },
                    { label: "Deployment:", text: "configuration from environment variables, database URL via dj-database-url, static and media files served with WhiteNoise, backend hosted on Render." },
                ],
            },
            {
                title: "Frontend (React + TypeScript)",
                items: [
                    { label: "Pages:", text: "offers feed, product and store pages, cart, checkout, orders, wishlist, a dashboard for vendors, about and contact." },
                    { label: "State:", text: "React Context for authentication, cart (including a guest cart), wishlist, notifications and dashboard data." },
                    { label: "Discovery:", text: "filtering, sorting, search and a Leaflet map for picking a location." },
                    { label: "Hosting:", text: "built with Vite and deployed on Vercel, talking to the API through Axios." },
                ],
            },
        ],
    },
    {
        slug: "cigar-bar",
        title: "Cigar Bar",
        tagline:
            "A luxury cigar bar website I designed in Figma and then built from scratch with HTML, CSS and JavaScript, including a shop with a working cart.",
        image: "/img/cigar-bar.webp",
        year: "2023",
        badge: "Early project",
        categories: ["ui-ux", "frontend"],
        links: [
            { label: "Cigar Bar desktop website", href: "https://cigar-bar.netlify.app/index.html", kind: "website" },
            {
                label: "Mobile prototype",
                href: "https://www.figma.com/proto/3Cukej3KlVwkekR0iD87LU/Cigar-Bar?page-id=38%3A154&node-id=38-309&viewport=177%2C569%2C0.2&t=ZxYV3Xt6M9RprVnq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=38%3A309",
                kind: "prototype",
            },
            {
                label: "Desktop prototype",
                href: "https://www.figma.com/proto/3Cukej3KlVwkekR0iD87LU/Cigar-Bar?page-id=0%3A1&node-id=1-2&viewport=649%2C270%2C0.1&t=mZrCVEQa2odRH05J-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
                kind: "prototype",
            },
            { label: "Source code on GitHub", href: "https://github.com/DianaDaraban/cigar-bar-app", kind: "code" },
        ],
        tech: ["Figma", "HTML5", "CSS3", "JavaScript (ES modules)", "localStorage", "REST Countries API", "DummyJSON API", "Google Maps embed", "Font Awesome"],
        detailTitle: "Project Presentation: Cigar Bar",
        sections: [
            {
                title: "Challenge",
                intro:
                    "Create an online presence for a cigar bar that feels as elegant and exclusive as the place itself, while keeping information and products easy to reach: the menu of cigars, pricing, reviews and online ordering.",
            },
            {
                title: "Design approach",
                intro: "I designed desktop and mobile versions in Figma, inspired by the ambience of a traditional cigar bar:",
                items: [
                    { label: "Elegant look:", text: "dark tones, smoke imagery and script typography to reflect the brand's sophistication." },
                    { label: "Clear structure:", text: "Home, About Cigars, Cigar Mood, Cigar Shop and Contact, so visitors find what they need quickly." },
                    { label: "Interactivity:", text: "product filters, product pages and reviews to keep visitors exploring." },
                ],
            },
            {
                title: "Implementation",
                items: [
                    { label: "No framework:", text: "a multi-page site in plain HTML, CSS and JavaScript, organised in ES modules with products and content kept in separate data files." },
                    { label: "Shop:", text: "product pages and a shopping cart with counter, item removal and running total, persisted in localStorage." },
                    { label: "APIs:", text: "the country list comes from the REST Countries API and sample reviews from DummyJSON; the location is a Google Maps embed." },
                    { label: "Responsive:", text: "media queries and scroll-based effects." },
                ],
            },
            {
                title: "What I learned",
                intro:
                    "One of my first projects end to end: taking my own design into code taught me DOM manipulation, working with external APIs and keeping state in the browser — the groundwork for the React projects that followed.",
            },
        ],
    },
    {
        slug: "travel-boutique",
        title: "Travel Boutique",
        tagline: "Designing a seamless booking experience for luxury travel",
        image: "/img/travel-boutique.webp",
        categories: ["ui-ux"],
        links: [
            {
                label: "Mobile prototype",
                href: "https://www.figma.com/proto/BWbJ6ZGCKxXtLgwTa1DFDZ/Travel-Boutique?page-id=0%3A1&node-id=11-2199&viewport=483%2C487%2C0.39&t=yovY7DQkXet93LNv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
                kind: "prototype",
            },
        ],
        tech: ["Figma", "Interactive Prototyping", "Mobile UI"],
        detailTitle: "Project Presentation: Travel Boutique",
        sections: [
            {
                title: "Challenge",
                intro: "Rethink how people plan and book a trip on their phone. The design had to solve three problems:",
                items: [
                    { label: "Personalisation:", text: "surface travel suggestions that match each user's preferences." },
                    { label: "Engagement:", text: "make browsing destinations visually appealing and intuitive." },
                    { label: "One booking journey:", text: "bring flights, hotels and activities together in a single, coherent flow." },
                ],
            },
            {
                title: "Design decisions",
                items: [
                    { label: "Personalised content:", text: "screens built around recommendations and saved preferences rather than generic listings." },
                    { label: "Visual language:", text: "high-quality imagery, a vibrant palette and clear typography that capture the excitement of travel." },
                    { label: "Integrated booking flow:", text: "an end-to-end journey from browsing to payment, mapped to remove unnecessary steps." },
                ],
            },
            {
                title: "Outcome",
                intro:
                    "A clickable mobile prototype in Figma covering the full journey, from discovering a destination to confirming the booking.",
            },
        ],
    },
    {
        slug: "festivals-app",
        title: "Festivals App",
        tagline: "A colourful website presenting European music festivals, with ticket purchase.",
        image: "/img/festivals-app.webp",
        year: "2023",
        badge: "Team project",
        categories: ["ui-ux", "frontend"],
        links: [
            {
                label: "Figma prototype",
                href: "https://www.figma.com/proto/diX8Vlrk862Jakfzvn2j82/Festivals-App?page-id=0%3A1&node-id=18-1640&viewport=174%2C133%2C0.39&t=3Zks3Nn1YtSzpN9B-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
                kind: "prototype",
            },
            { label: "Festivals App website", href: "https://festivals-app.netlify.app/index.html", kind: "website" },
            { label: "Source code on GitHub", href: "https://github.com/DianaDaraban/festivals-app", kind: "code" },
        ],
        tech: ["Figma", "HTML5", "CSS3", "JavaScript"],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "Overview",
                intro:
                    "My first larger project, built with a team during the web development course. It presents festivals from across Europe — Untold, Exit, Sziget, Tomorrowland and Glastonbury — each with its own page, plus About, Contact and ticket purchase. The repository keeps the parts I worked on.",
            },
            {
                title: "Challenges",
                items: [
                    { text: "Showcase several festivals in one interface while keeping each one recognisable." },
                    { text: "Keep navigation simple and pages light despite rich imagery." },
                    { text: "Stay responsive across screen sizes." },
                ],
            },
            {
                title: "Approach",
                intro:
                    "A vivid colour palette and dynamic elements to match the energy of music festivals, with consistent layouts so festival details and ticket options are always easy to find.",
            },
        ],
    },
]

export function getProjects(category: Category) {
    return projects.filter(p => p.categories.includes(category))
}

export function getProject(category: Category, slug: string) {
    return getProjects(category).find(p => p.slug === slug)
}

export function getActiveCategories() {
    return categories.filter(c => c.upcoming || getProjects(c.id).length > 0)
}

export function getCategory(id: string) {
    return getActiveCategories().find(c => c.id === id)
}

// A project listed in several tabs has one page per tab; the first tab's page is the canonical one
export function getCanonicalPath(slug: string) {
    const category = getActiveCategories().find(c => getProject(c.id, slug))
    return category ? `/portfolio/${category.id}/${slug}` : undefined
}
