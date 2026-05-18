import type { Dictionary } from "./types";

const fr: Dictionary = {
    meta: {
        title: "Lucas Donjean — Solo Founder Engineer",
        description:
      "Ingénieur full-stack solo qui livre des SaaS dopés à l'IA, de bout en bout. Design, code, déploiement — une personne, une facture, en semaines pas en mois.",
    },

    nav: {
        offers: "Offres",
        work: "Projets",
        process: "Process",
        about: "À propos",
        getInTouch: "Me contacter",
    },

    hero: {
        topLabel: "SYSTÈME EN LIGNE · DISPONIBLE",
        headlineLine1: ["JE", "LIVRE", "DES"],
        headlineLine2: ["APPS", "WEB", "IA"],
        headlineEmphasis: "EN SOLO.",
        subtitle:
      "Je livre des apps web complètes — design, code, mise en prod. Une personne, une facture, en semaines pas en mois.",
        servicePills: [
            {
                href: "#ai-mvp-sprint",
                title: "Sprint MVP IA",
                meta: "dès 4,5K€ · 3–6 sem",
            },
            {
                href: "#landing-page",
                title: "Landing Page qui convertit",
                meta: "dès 1,5K€ · 5–15 j",
            },
            {
                href: "#ai-automation",
                title: "Automatisation IA tactique",
                meta: "dès 1,8K€ · 1–3 sem",
            },
        ],
        ctaPrimary: "Me contacter",
        ctaSecondary: "Voir mes projets",
        statsLabels: {
            lines: "LIGNES_DE_CODE",
            screens: "ÉCRANS",
            modules: "MODULES",
            time: "POUR_LIVRER",
        },
        statsValues: {
            timeMonths: "1MOIS",
        },
        marquee: [
            "LATENCE: <48H",
            "MONDE ENTIER",
            "STACK: NEXT.JS + SUPABASE + OPENAI + ANTHROPIC",
            "LIVRÉS: 2 SAAS",
            "AGENDA: OUVERT",
        ],
    },

    whatIBuild: {
        sectionLabel: "// Ce que je construis //",
        headlineLine1: "Trois offres.",
        headlineEmphasis: "Une personne.",
        subtitle: "Périmètres fermés. Délais courts. Prix transparents.",
        offers: [
            {
                id: "ai-mvp-sprint",
                title: "Sprint MVP IA",
                tagline: "Ton produit IA-first livré en 3–6 semaines.",
                bullets: [
                    "App web full-stack (Next.js + Supabase)",
                    "Intégration IA (OpenAI / Anthropic, agents, RAG)",
                    "Auth, base de données, RBAC, paiements si besoin",
                    "Déployée + transfert + docs",
                ],
                price: "dès 4,5K€",
                timeline: "3–6 semaines",
                flagship: true,
            },
            {
                id: "landing-page",
                title: "Landing Page qui convertit",
                tagline: "Une landing qui convertit en 5–15 jours.",
                bullets: [
                    "Design sur mesure pour ta marque",
                    "Mobile-first, ultra rapide (Next.js)",
                    "Rédaction + bases CRO",
                    "Analytics + tracking installés",
                ],
                price: "dès 1,5K€",
                timeline: "5–15 jours",
            },
            {
                id: "ai-automation",
                title: "Automatisation IA tactique",
                tagline: "Un workflow automatisé en 1–3 semaines.",
                bullets: [
                    "Audit du workflow + cadrage",
                    "Agent IA sur mesure intégré à ta stack",
                    "API + UI minimale si besoin",
                    "Documentation + session de handover",
                ],
                price: "dès 1,8K€",
                timeline: "1–3 semaines",
            },
        ],
        cardCta: "Choisir cette offre",
    },

    selectedWork: {
        sectionLabel: "// Projets choisis //",
        headlineEmphasis: "Un build.",
        headlineTrailing: "Trois interfaces.",
        subtitle:
      "SKEMA Consultoria JR — la plateforme qui fait tourner une Junior Entreprise de 30 personnes. Construite en un mois, en solo, de bout en bout.",
        darkBlock: {
            metaProject: "Projet",
            metaYear: "2026",
            metaProduction: "En production",
            projectName: "SKEMA Consultoria JR",
            tagline:
        "Un hub interne pour l'équipe, un site public pour le marché, un portail client pour la signature — tout depuis un seul codebase. En production aujourd'hui avec une équipe de 30 personnes.",
            statsLabels: {
                lines: "Lignes de code",
                screens: "Écrans",
                modules: "Modules",
                time: "Mois pour livrer",
            },
            techSpecs: [
                "Sécurité row-level",
                "Souscriptions temps réel",
                "Stamping PDF server-side",
                "Génération auto des paiements",
                "10 rôles RBAC",
                "Bilingue EN/PT",
                "Journal d'activité",
                "30+ routes protégées",
                "Création auto des projets",
                "Suivi des échéances",
            ],
        },
        surfaces: [
            {
                id: "internal-hub",
                title: "Hub interne",
                tagline: "Là où l'équipe fait tourner la boîte.",
                bullets: [
                    "6 départements — RH, Finance, Commercial, Marketing, Innovation, Projets",
                    "10 rôles, permissions par page, journal complet",
                    "Messagerie temps réel via souscriptions Supabase",
                    "Génération PDF server-side pour factures et contrats",
                ],
                highlight: "30+ routes protégées",
                screenshots: [
                    "/case-studies/skjr/hub-dashboard.jpg",
                    "/case-studies/skjr/hub-finance.jpg",
                    "/case-studies/skjr/hub-pipeline.jpg",
                ],
            },
            {
                id: "public-website",
                title: "Site public",
                tagline: "Un site marketing qui close des deals.",
                bullets: [
                    "Bilingue EN/PT avec switcher de langue",
                    "Quote builder self-service avec prix détaillé",
                    "Cas et avis tirés du Hub en temps réel",
                    "Les devis tombent directement dans le CRM",
                ],
                highlight: "Bilingue · quote self-service",
                screenshots: [
                    "/case-studies/skjr/web-hero.jpg",
                    "/case-studies/skjr/web-services.jpg",
                    "/case-studies/skjr/web-quote-builder.jpg",
                ],
            },
            {
                id: "client-portal",
                title: "Portail client",
                tagline: "Où les clients signent et suivent la livraison.",
                bullets: [
                    "Sécurité row-level — les clients ne voient que leurs données",
                    "Signature numérique en 2 étapes + stamping PDF",
                    "Suivi projet live — même statut côté JE et côté client",
                    "La signature du contrat crée automatiquement le projet",
                ],
                highlight: "Signature numérique · RLS",
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
        productizedLabel: "// Désormais en SaaS",
        productizedNote:
      "La même plateforme est maintenant proposée en SaaS à 2 niveaux pour les Junior Entreprises — preuve que l'architecture tient bien au-delà d'un seul projet.",
    },

    howIWork: {
        sectionLabel: "// Comment je travaille //",
        headlineLine1: "Quatre étapes.",
        headlineEmphasis: "Pas de boîte noire.",
        subtitle:
      "Du premier appel au produit livré. Tu sais toujours exactement où on en est.",
        steps: [
            {
                title: "Appel découverte",
                meta: "Gratuit · 15 min",
                description:
          "Une vraie conversation sur ton projet, où tu en es, et si je suis la bonne personne pour le construire.",
            },
            {
                title: "Proposition",
                meta: "Sous 48h · 50% à la signature",
                description:
          "Offre à périmètre fermé avec livrables, délai et prix exacts. Tu signes, on démarre.",
            },
            {
                title: "Build",
                meta: "Semaines, pas mois",
                description:
          "Un point quotidien sur un Notion partagé. Tu vois la progression en direct. Pas de boîte noire, pas de surprises.",
            },
            {
                title: "Livraison & handover",
                meta: "Prêt en production · 30 jours de support",
                description:
          "Code propre, documenté, déployé. Support bug-fix inclus les 30 premiers jours.",
            },
        ],
        languageNote: {
            calls: "Appels en EN ou FR",
            async: "Travail async dans toutes les langues",
        },
    },

    about: {
        sectionLabel: "// À propos //",
        tagline: "Je suis Lucas.",
        taglineEmphasis: "Je construis les apps que tu n'as pas le temps de construire.",
        story: [
            {
                text: "MIM Finance & Quant à SKEMA. J'ai fini par écrire 28K+ lignes de code en un mois pour livrer une plateforme qui fait tourner aujourd'hui une boîte de 30 personnes. Maintenant je fais ça pour d'autres founders.",
            },
            {
                text: "Je travaille seul — par choix.",
                emphasis: "Une personne, une facture, un seul responsable de la livraison.",
            },
        ],
        signatures: [
            {
                label: "MIM · Finance & Quant",
                tagline: "Je lis ton runway.",
            },
            {
                label: "Base UE · BR",
                tagline: "Overlap US East, journée UE complète.",
            },
            {
                label: "Solo par choix",
                tagline: "Pas de surcoût PM, pas de perte au handoff.",
            },
            {
                label: "AI-first",
                tagline: "Tous mes workflows sont AI-first.",
            },
        ],
        photoCaption: {
            name: "Lucas Donjean",
            title: "Solo Founder Engineer",
        },
        closing: "Envie de voir si on",
        closingEmphasis: "travaillerait bien ensemble",
        closingSuffix: " ?",
        ctaLabel: "Me contacter",
    },

    finalCta: {
        sectionLabel: "// On y va //",
        headlineLine1: "On",
        headlineEmphasis: "le construit.",
        subtitle: "Appel gratuit de 15 minutes. Ou juste un email. Au choix.",
        ctaLabel: "Me contacter",
        status: {
            available: "Disponible maintenant",
            replies: "Réponse sous 48h",
            booking: "Agenda: Ouvert",
        },
    },

    footer: {
        tagline:
      "Solo Founder Engineer. SaaS AI-first, de bout en bout. Une personne, une facture, en semaines pas en mois.",
        columns: {
            contact: "Contact",
            sections: "Sections",
            legal: "Légal",
        },
        legalLink: "Mentions légales",
        copyrightSuffix: "Solo Founder Engineer",
        backToTop: "Retour en haut",
        siretLabel: "SIRET [en cours]",
    },

    contactModal: {
        label: "// On discute //",
        title: "Deux façons de démarrer.",
        bookCall: {
            title: "Réserver un appel découverte",
            description: "Appel vidéo gratuit de 15 minutes. En anglais ou en français.",
            footer: "Gratuit · 15 min · EN ou FR →",
        },
        sendEmail: {
            title: "M'envoyer un email",
            description: "Écris-moi dans la langue que tu veux. Je réponds sous 48h.",
            footer: "Toutes langues · Réponse sous 48h →",
        },
        closeLabel: "Fermer",
    },

    languageSwitcher: {
        ariaLabel: "Changer de langue",
    },
};

export default fr;
