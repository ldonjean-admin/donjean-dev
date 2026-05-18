import type { Dictionary } from "./types";

const en: Dictionary = {
    meta: {
        title: "Lucas Donjean — Solo Founder Engineer",
        description:
      "Solo full-stack engineer shipping AI-powered SaaS end-to-end. Design, code, deploy — one person, one invoice, in weeks not months.",
    },

    nav: {
        offers: "Offers",
        work: "Work",
        process: "Process",
        about: "About",
        getInTouch: "Get in touch",
    },

    hero: {
        topLabel: "SYSTEM ONLINE · AVAILABLE NOW",
        headlineLine1: ["I", "SHIP", "AI-POWERED"],
        headlineLine2: ["WEB", "APPS"],
        headlineEmphasis: "SOLO.",
        subtitle:
      "I ship production web apps end-to-end — design, code, deploy. One person, one invoice, in weeks not months.",
        servicePills: [
            {
                href: "#ai-mvp-sprint",
                title: "AI MVP Sprint",
                meta: "from 4.5K€ · 3–6w",
            },
            {
                href: "#landing-page",
                title: "Landing Page That Converts",
                meta: "from 1.5K€ · 5–15d",
            },
            {
                href: "#ai-automation",
                title: "AI Automation Tactical",
                meta: "from 1.8K€ · 1–3w",
            },
        ],
        ctaPrimary: "Get in touch",
        ctaSecondary: "See my work",
        statsLabels: {
            lines: "LINES_OF_CODE",
            screens: "SCREENS",
            modules: "MODULES",
            time: "TO_SHIP",
        },
        statsValues: {
            timeMonths: "1MO",
        },
        marquee: [
            "LATENCY: <48H",
            "WORLDWIDE",
            "STACK: NEXT.JS + SUPABASE + OPENAI + ANTHROPIC",
            "SHIPPED: 2 SAAS",
            "BOOKING: OPEN",
        ],
    },

    whatIBuild: {
        sectionLabel: "// What I build //",
        headlineLine1: "Three offers.",
        headlineEmphasis: "One person.",
        subtitle: "Productized scopes. Fixed timelines. Transparent pricing.",
        offers: [
            {
                id: "ai-mvp-sprint",
                title: "AI MVP Sprint",
                tagline: "Ship your AI-first product in 3–6 weeks.",
                bullets: [
                    "Full-stack web app (Next.js + Supabase)",
                    "AI integration (OpenAI / Anthropic, agents, RAG)",
                    "Auth, DB, RBAC, payments if needed",
                    "Deployed + handoff with docs",
                ],
                price: "from 4.5K€",
                timeline: "3–6 weeks",
                flagship: true,
            },
            {
                id: "landing-page",
                title: "Landing Page That Converts",
                tagline: "A conversion landing in 5–15 days.",
                bullets: [
                    "Custom design from your brand voice",
                    "Mobile-first, blazing fast (Next.js)",
                    "Copywriting + CRO basics",
                    "Analytics + tracking setup",
                ],
                price: "from 1.5K€",
                timeline: "5–15 days",
            },
            {
                id: "ai-automation",
                title: "AI Automation Tactical",
                tagline: "Automate one workflow in 1–3 weeks.",
                bullets: [
                    "Workflow audit + scope",
                    "Custom AI agent wired into your stack",
                    "API + minimal UI if needed",
                    "Documentation + handoff session",
                ],
                price: "from 1.8K€",
                timeline: "1–3 weeks",
            },
        ],
        cardCta: "Book this offer",
    },

    selectedWork: {
        sectionLabel: "// Selected work //",
        headlineEmphasis: "One build.",
        headlineTrailing: "Three surfaces.",
        subtitle:
      "SKEMA Consultoria JR — the platform that runs a 30-person Junior Enterprise. Built in one month, solo, end-to-end.",
        darkBlock: {
            metaProject: "Project",
            metaYear: "2026",
            metaProduction: "In production",
            projectName: "SKEMA Consultoria JR",
            tagline:
        "An internal hub for the team, a public website for the market, and a client portal for signature — all from one codebase. In production today with a 30-person team.",
            statsLabels: {
                lines: "Lines of code",
                screens: "Screens",
                modules: "Modules",
                time: "Month to ship",
            },
            techSpecs: [
                "Row-level security",
                "Real-time subscriptions",
                "Server-side PDF stamping",
                "Auto-payment generation",
                "10 RBAC roles",
                "Bilingual EN/PT",
                "Activity audit log",
                "30+ protected routes",
                "Auto project creation",
                "Installment tracking",
            ],
        },
        surfaces: [
            {
                id: "internal-hub",
                title: "Internal Hub",
                tagline: "Where the team runs the business.",
                bullets: [
                    "6 departments — HR, Finance, Commercial, Marketing, Innovation, Projects",
                    "10 roles, per-page permissions, full activity log",
                    "Real-time messaging via Supabase subscriptions",
                    "Server-side PDF generation for invoices and contracts",
                ],
                highlight: "30+ protected routes",
                screenshots: [
                    "/case-studies/skjr/hub-dashboard.jpg",
                    "/case-studies/skjr/hub-finance.jpg",
                    "/case-studies/skjr/hub-pipeline.jpg",
                ],
            },
            {
                id: "public-website",
                title: "Public Website",
                tagline: "A marketing site that closes deals.",
                bullets: [
                    "Bilingual EN/PT with live language switcher",
                    "Self-serve quote builder with itemized pricing",
                    "Cases and reviews sourced from the Hub in real time",
                    "Quote submissions land directly in the CRM",
                ],
                highlight: "Bilingual · self-serve quote",
                screenshots: [
                    "/case-studies/skjr/web-hero.jpg",
                    "/case-studies/skjr/web-services.jpg",
                    "/case-studies/skjr/web-quote-builder.jpg",
                ],
            },
            {
                id: "client-portal",
                title: "Client Portal",
                tagline: "Where clients sign and track delivery.",
                bullets: [
                    "Row-level security — clients only see their own data",
                    "Two-step digital signature flow with PDF stamping",
                    "Live project tracking — same status JE and client see",
                    "Contract signing auto-creates the delivery project",
                ],
                highlight: "Digital signature · RLS-secured",
                screenshots: [
                    "/case-studies/skjr/portal-dashboard.jpg",
                    "/case-studies/skjr/portal-tracking.jpg",
                    "/case-studies/skjr/portal-signature.jpg",
                ],
            },
        ],
        techStackLabel: "// Stack",
        techStackPills: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind 4",
            "Supabase",
            "PDF-Lib",
            "Vercel",
        ],
        productizedLabel: "// Now productized",
        productizedNote:
      "The same platform is now offered as a 2-tier SaaS for Junior Enterprises — proof that the architecture holds beyond a single deployment.",
    },

    howIWork: {
        sectionLabel: "// How I work //",
        headlineLine1: "Four steps.",
        headlineEmphasis: "No black box.",
        subtitle:
      "From first call to shipped product. You always know exactly where we are.",
        steps: [
            {
                title: "Discovery call",
                meta: "Free · 15 min",
                description:
          "A real conversation about your project, your stage, and whether I'm the right person to build it.",
            },
            {
                title: "Proposal",
                meta: "Within 48h · 50% upfront",
                description:
          "Fixed-scope offer with exact deliverables, timeline, and price. Sign and we start.",
            },
            {
                title: "Build",
                meta: "Weeks, not months",
                description:
          "Daily updates on a shared Notion. You see progress in real-time. No black box, no surprises.",
            },
            {
                title: "Ship & handover",
                meta: "Production-ready · 30-day support",
                description:
          "Clean code, documented, deployed. Bug-fix support included for the first 30 days.",
            },
        ],
        languageNote: {
            calls: "Calls in EN or FR",
            async: "Async work in any language",
        },
    },

    about: {
        sectionLabel: "// About //",
        tagline: "I'm Lucas.",
        taglineEmphasis: "I build the apps you don't have time to build.",
        story: [
            {
                text: "Finance & Quant MIM at SKEMA. Ended up writing 28K+ lines of code in a month to ship a platform that now runs a 30-person business. Now I do this for other founders.",
            },
            {
                text: "I work alone — by design.",
                emphasis: "One person, one invoice, one accountable shipper.",
            },
        ],
        signatures: [
            {
                label: "MIM · Finance & Quant",
                tagline: "I read your runway like you do.",
            },
            {
                label: "EU · BR base",
                tagline: "Overlap US East, EU full day.",
            },
            {
                label: "Solo by design",
                tagline: "No PM tax, no handoff loss.",
            },
            {
                label: "AI-first",
                tagline: "Every workflow ships AI-native.",
            },
        ],
        photoCaption: {
            name: "Lucas Donjean",
            title: "Solo Founder Engineer",
        },
        closing: "Want to see if we'd",
        closingEmphasis: "work well together",
        closingSuffix: "?",
        ctaLabel: "Get in touch",
    },

    finalCta: {
        sectionLabel: "// Let's ship //",
        headlineLine1: "Let's",
        headlineEmphasis: "build it.",
        subtitle: "Free 15-minute call. Or just send an email. Either works.",
        ctaLabel: "Get in touch",
        status: {
            available: "Available now",
            replies: "Replies in 48h",
            booking: "Booking: Open",
        },
    },

    footer: {
        tagline:
      "Solo Founder Engineer. AI-first SaaS, end-to-end. One person, one invoice, in weeks not months.",
        columns: {
            contact: "Contact",
            sections: "Sections",
            legal: "Legal",
        },
        legalLink: "Legal notice",
        copyrightSuffix: "Solo Founder Engineer",
        backToTop: "Back to top",
        siretLabel: "SIRET [pending]",
    },

    contactModal: {
        label: "// Get in touch //",
        title: "Two ways to start.",
        bookCall: {
            title: "Book a discovery call",
            description:
        "Free 15-minute video call. Conducted in English or French.",
            footer: "Free · 15 min · EN or FR →",
        },
        sendEmail: {
            title: "Send me an email",
            description: "Drop me a note in any language. I reply within 48h.",
            footer: "Any language · 48h reply →",
        },
        closeLabel: "Close",
    },

    languageSwitcher: {
        ariaLabel: "Switch language",
    },
};

export default en;
