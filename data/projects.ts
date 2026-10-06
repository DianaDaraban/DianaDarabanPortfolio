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
            "Redesign and rebuild for B360, an advertising production company specialised in vehicle wraps, window graphics and signage — moving from WordPress to Next.js to grow organic traffic. Real client, currently in prototyping.",
        image: "/img/projects/b360/cover.webp",
        year: "2026",
        badge: "Client project · In progress",
        categories: ["ui-ux"],
        links: [
            {
                label: "Mobile prototype",
                href: "https://www.figma.com/proto/CsyefhK1h4QKKwYpPdkbtW/B360.ro?page-id=4%3A148&node-id=4-149&p=f&viewport=216%2C-199%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A149",
                kind: "prototype",
            },
            { label: "Figma design", href: "https://www.figma.com/design/CsyefhK1h4QKKwYpPdkbtW/B360.ro?node-id=4-149", kind: "prototype" },
        ],
        tech: ["Figma", "Mobile-first UI", "Information Architecture", "SEO", "Next.js (planned)"],
        gallery: [
            { src: "/img/projects/b360/home.webp", caption: "Home: services, loyal clients and recent work, with the fixed action bar" },
            { src: "/img/projects/b360/menu.webp", caption: "Full-screen menu with custom icons" },
        ],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "The problem",
                intro:
                    "B360 has produced vehicle wraps and advertising materials since 2012, but its current WordPress website brings almost no organic traffic: new clients arrive only while the company pays for ads. Services are scattered across the site, so neither visitors nor search engines get a clear picture of what B360 offers.",
            },
            {
                title: "Goals",
                items: [
                    { label: "Organic growth:", text: "rank on Google for the services clients actually search for, so the business depends less on paid ads." },
                    { label: "Clear service structure:", text: "one dedicated page per service, grouped logically, with content that answers real questions." },
                    { label: "More quote requests:", text: "make it easy to estimate a price and ask for an offer from any page, especially on mobile." },
                ],
            },
            {
                title: "Approach",
                items: [
                    { label: "Information architecture first:", text: "regrouped the offer into clear service categories — full and partial vehicle wraps, stickers and custom lettering, window graphics, indoor and outdoor print — each with its own landing page." },
                    { label: "SEO-driven content:", text: "every service page has a focused heading structure, benefits, a fleet-branding section and an FAQ written around common customer questions." },
                    { label: "Next.js rebuild (next phase):", text: "statically generated, fast-loading pages with proper metadata, sitemap and structured data, replacing the WordPress theme." },
                ],
            },
            {
                title: "Key screens",
                items: [
                    { label: "Home:", text: "services, loyal clients, recent work and client reviews." },
                    { label: "Wrap cost calculator:", text: "pick service, vehicle and film type, select the areas on a vehicle blueprint and get an instant price estimate." },
                    { label: "Service pages:", text: "full and partial wraps, stickers and window graphics, with benefits, fleet branding and an FAQ." },
                    { label: "Quote request form:", text: "contact details and project details, with inline validation and file upload for existing artwork." },
                    { label: "About and menu:", text: "company story, values and a full-screen navigation with custom icons." },
                ],
            },
            {
                title: "Design decisions",
                items: [
                    { label: "Conversion first:", text: "a fixed bottom bar keeps the calculator, the phone call and the quote request one tap away on every screen." },
                    { label: "Brand language:", text: "the red of the B360 logo and a recurring peeled-sticker corner on buttons and badges, echoing the client's product." },
                ],
            },
        ],
    },
    {
        slug: "curiofreak",
        title: "CurioFreak",
        tagline:
            "An AI-powered micro-learning app for curious minds: ask what you want to learn, get a bite-sized lesson, then test yourself with a quick quiz. “Stay weird. Stay curious.”",
        image: "/img/projects/curiofreak/cover.webp",
        year: "2026",
        badge: "Concept · In progress",
        categories: ["ui-ux"],
        links: [
            {
                label: "Interactive prototype",
                href: "https://www.figma.com/proto/Oojhokr6X6gTovN6jWp1sc/CurioFreak?node-id=0-1&scaling=scale-down&content-scaling=fixed",
                kind: "prototype",
            },
            { label: "Figma design", href: "https://www.figma.com/design/Oojhokr6X6gTovN6jWp1sc/CurioFreak?node-id=0-1", kind: "prototype" },
        ],
        tech: ["Figma", "Branding", "Design System", "Mobile UI", "Interactive Prototyping", "AI-assisted UX"],
        gallery: [
            { src: "/img/projects/curiofreak/onboarding.webp", caption: "Onboarding and home: ask anything, trending topics, continue learning" },
            { src: "/img/projects/curiofreak/ask-ai.webp", caption: "Ask a question and let AI generate a quick lesson" },
            { src: "/img/projects/curiofreak/quiz.webp", caption: "Bite-sized lesson cards, then a quiz to check what stuck" },
        ],
        detailTitle: "Project Overview",
        sections: [
            {
                title: "Overview",
                intro:
                    "CurioFreak is my own product concept: a micro-learning app that turns curiosity into short lessons. You type what you want to learn — or let AI surprise you — and get a lesson split into small cards: the basics, why it matters, an everyday example and how it works. A short quiz closes the loop. I started with UI/UX — brand, design system and the full set of screens — and will build the frontend next, taking the project from idea to working app.",
            },
            {
                title: "What I designed",
                items: [
                    { label: "Brand identity:", text: "the CurioFreak logo, the “Stay weird. Stay curious.” tagline, hand-drawn accents and a teal, coral and lavender palette that feels playful without being childish." },
                    { label: "Learning flow:", text: "onboarding, a home screen with free-text search, “Let AI surprise me”, trending topics and continue-learning progress; AI-generated lessons with “Mark as done” on every card; and a step-by-step quiz." },
                    { label: "Navigation and progress:", text: "a bottom bar for lessons, wishlist and progress, with a friendly AI assistant always one tap away." },
                    { label: "Design system:", text: "a custom icon set, colour and type styles and reusable components, prepared so the screens translate directly into frontend components." },
                ],
            },
            {
                title: "Next step: frontend",
                intro:
                    "Building the app from this design, using the components and styles defined in Figma as the base of the component library — the same design-to-code workflow I use in my day-to-day frontend work.",
            },
        ],
    },
    {
        slug: "cbn-agro-tech",
        title: "Silo Monitoring Platform",
        tagline:
            "Frontend Developer at CBN Agro Tech: interfaces and modules for a platform that monitors grain temperature in silos and warehouses and controls ventilation remotely.",
        image: "/img/projects/cbn/dashboard.webp",
        year: "2023 – 2024",
        badge: "Professional work",
        categories: ["frontend"],
        links: [],
        tech: ["JavaScript", "Lit (Web Components)", "Polymer", "REST APIs", "Data visualisation", "Google App Engine", "Agile / Scrum", "JIRA"],
        gallery: [
            { src: "/img/projects/cbn/dashboard.webp", caption: "Dashboard: live temperature matrix for every silo and warehouse, colour-coded by threshold" },
            { src: "/img/projects/cbn/silo-preview.webp", caption: "Silo preview: site layout with stored crop, sensor cables, fans and current temperature and humidity" },
            { src: "/img/projects/cbn/silo-matrix.webp", caption: "Silo detail, Matrix view: sensor readings per cable and level, with the temperature history chart" },
            { src: "/img/projects/cbn/silo-chart.webp", caption: "Chart view: per-sensor trends and variation over a selected period" },
            { src: "/img/projects/cbn/silo-3d.webp", caption: "Silo 3D: the sensor cables inside the grain, with readings in place" },
            { src: "/img/projects/cbn/warehouse-3d.webp", caption: "Warehouse 3D view with the sensor grid" },
            { src: "/img/projects/cbn/settings.webp", caption: "Settings: alert thresholds, ventilation autopilot, temperature colour scale and interface options" },
            { src: "/img/projects/cbn/reports.webp", caption: "Reports: notification preferences and Excel / Word exports" },
        ],
        detailTitle: "My Role at CBN Agro Tech",
        sections: [
            {
                title: "Overview",
                intro:
                    "CBN Agro Tech builds software for agricultural businesses. Its platform lets farmers and storage operators follow the temperature and humidity of stored grain in real time, sensor by sensor, and run the ventilation remotely or on autopilot to prevent spoilage. I worked in an Agile team of 4 engineers on the frontend. The application requires a client login; the screenshots come from the demo account.",
            },
            {
                title: "What I delivered",
                items: [
                    { label: "15+ reusable components", text: "built with JavaScript and Lit Web Components and shared across the platform." },
                    { label: "4 functional modules:", text: "temperature monitoring, remote device management, automated ventilation and reporting tools." },
                    { label: "Interface improvements:", text: "I reworked the screens shown here — silo preview, dashboard, silo detail (Matrix, Stored, Chart, 3D), settings and reports — for clearer reading of the data and more consistent controls." },
                    { label: "Data and performance:", text: "integrated server-side sensor data and optimised UI performance and responsiveness." },
                    { label: "Business modules:", text: "contributed to inventory management, accounting workflow and production monitoring, applying scalable, maintainable code practices." },
                    { label: "Documentation:", text: "wrote and designed the user help guide (PDF) for the application." },
                ],
            },
            {
                title: "Design decisions",
                items: [
                    { label: "Read the risk at a glance:", text: "every reading is colour-coded on a configurable scale (green, yellow, orange, red), so hot spots stand out across dozens of sensors." },
                    { label: "Several views of the same data:", text: "a matrix for exact values, charts for trends and a 3D model to see where each sensor sits in the grain." },
                    { label: "Configurable by the user:", text: "alert thresholds, the colour scale, ventilation rules tied to dew point and humidity, and a cheaper-electricity autopilot interval." },
                ],
            },
            {
                title: "How we worked",
                intro:
                    "Scrum with JIRA, in close collaboration with technical and business stakeholders to deliver features on time. My background in graphic design helped translate designs into consistent, polished interfaces.",
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
                    "A multi-page presentation site that introduces the lawyer's experience, team and approach. It has eight sections: Experience, Top 10, Team, The Story, Testimonials, Pro Bono, Activities and Contact.",
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
