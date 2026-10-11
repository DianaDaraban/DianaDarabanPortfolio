// "About" section content, taken from the CV (public/cv/Diana_Daraban_CV.pdf)

export type TimelineEntry = {
    role: string
    org: string
    period: string
    points: string[]
}

export const experience: TimelineEntry[] = [
    {
        role: "Automation Testing Trainee",
        org: "EPAM Systems · EPAM Campus",
        period: "May 2026 – Present",
        points: [
            "Selected for EPAM's specialisation programme in Automated Testing with JavaScript and TypeScript.",
            "Writing automated end-to-end and integration tests for a wide range of scenarios with Playwright, Cypress and WebdriverIO.",
            "Structuring test suites with Mocha, Chai and Cucumber (BDD) and applying industry best practices for maintainable, reliable tests.",
            "Building practical skills through mentor-led sessions and hands-on exercises.",
        ],
    },
    {
        role: "Freelance Full-Stack Developer",
        org: "Independent projects",
        period: "Nov 2024 – Present",
        points: [
            "B360.ro (client project, in progress): redesigning the website of an advertising production company, from Figma prototype to a Next.js site with an interactive vehicle-wrap price calculator, a filterable project gallery and quote forms with email delivery; live preview on Vercel.",
            "DonEat (personal project): a full-stack marketplace against food waste, with a Django REST API (JWT auth, roles, email notifications) and a React + TypeScript frontend with map search, cart, orders and a vendor dashboard; deployed on Vercel and Render.",
        ],
    },
    {
        role: "Frontend Developer",
        org: "CBN Agro Tech S.A. · Bucharest",
        period: "Aug 2023 – Nov 2024",
        points: [
            "Built and delivered 15+ reusable frontend components using JavaScript and Lit Web Components for a complex product lifecycle management platform.",
            "Implemented 4 major functional modules: temperature monitoring, remote device management, automated ventilation and reporting tools.",
            "Integrated server-side data and optimised UI performance and responsiveness working within an Agile team of 4 engineers.",
            "Contributed to inventory management, accounting workflow and production monitoring modules; consistently applied scalable, maintainable code practices.",
            "Collaborated with technical and business stakeholders in a Scrum environment using JIRA, ensuring timely feature delivery.",
        ],
    },
    {
        role: "Graphic Designer",
        org: "Red Division S.R.L",
        period: "Sep 2015 – Aug 2023",
        points: [
            "Delivered digital and print visual assets for 20+ marketing campaigns; developed consistent brand identities using Adobe Creative Suite.",
        ],
    },
    {
        role: "Executive Manager",
        org: "VEGO Holdings",
        period: "Nov 2011 – Sep 2015",
        points: [
            "Coordinated cross-department operational activities managing project timelines, resources and business workflows; implemented optimisations that improved team productivity and delivery.",
        ],
    },
]

export const education: TimelineEntry[] = [
    {
        role: "Python Full-Stack Development Program",
        org: "SDA Academy",
        period: "Jun 2025 – May 2026",
        points: ["Intensive programme: Python and OOP, algorithms and data structures, SQL databases, REST APIs, Django and Flask, TDD, software design patterns and Git workflows."],
    },
    {
        role: "Frontend Web Development",
        org: "Școala Informală de IT",
        period: "Aug 2022 – Apr 2023",
        points: ["JavaScript fundamentals, React, HTML5, CSS3, responsive web design."],
    },
    {
        role: "Interior Design degree",
        org: "\"Ion Mincu\" University of Architecture and Urban Planning",
        period: "Oct 2005 – Jul 2011",
        points: ["Training in spatial reasoning, aesthetics and functional-visual design — a strong foundation for UI/UX work."],
    },
]

export const skills: { group: string, items: string[] }[] = [
    { group: "Frontend", items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind", "Bootstrap", "Responsive Design"] },
    { group: "Libraries & Tools", items: ["Redux", "Lit (Web Components)", "AJAX", "REST APIs"] },
    { group: "Backend & Programming", items: ["Python", "Flask", "Django", "Django REST Framework", "OOP", "Data Structures", "Algorithms"] },
    { group: "Databases", items: ["SQL", "Relational database design", "CRUD operations"] },
    { group: "Testing & QA Automation", items: ["Playwright", "Cypress", "WebdriverIO", "Mocha", "Chai", "Cucumber (BDD)"] },
    { group: "Development Tools", items: ["Git", "GitHub", "Agile", "Scrum", "CI/CD", "JIRA"] },
    { group: "UI / UX & Design", items: ["Figma", "Interactive Prototyping", "Adobe Photoshop", "Illustrator", "InDesign"] },
]

export const certifications = [
    "Python for Data Science, AI & Development — IBM",
    "Designing User Interfaces and Experiences (UI/UX) — IBM",
    "Developing Websites and Front-Ends with Bootstrap — IBM",
    "Introduction to Software Engineering — IBM",
    "Complete Web & Mobile Designer: UI/UX, Figma — Udemy",
    "The Complete JavaScript Course — Udemy",
]

export const languages = ["Romanian — Native", "English — Fluent", "Russian — Fluent"]

export const strengths = ["Problem Solving & Debugging", "Analytical Thinking", "Collaboration in Agile Teams", "Attention to Detail"]
