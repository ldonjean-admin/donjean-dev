import type { Dictionary } from "./types";

const pt: Dictionary = {
    meta: {
        title: "Lucas Donjean — Solo Founder Engineer",
        description:
      "Engenheiro full-stack solo entregando SaaS com IA, de ponta a ponta. Design, código, deploy — uma pessoa, uma fatura, em semanas — não em meses.",
    },

    nav: {
        offers: "Ofertas",
        work: "Projetos",
        process: "Processo",
        about: "Sobre",
        getInTouch: "Falar comigo",
    },

    hero: {
        topLabel: "SISTEMA ONLINE · DISPONÍVEL",
        headlineLine1: ["EU", "ENTREGO"],
        headlineLine2: ["APPS", "WEB", "COM IA"],
        headlineEmphasis: "SOZINHO.",
        subtitle:
      "Entrego apps web completas — design, código, deploy. Uma pessoa, uma fatura, em semanas — não em meses.",
        servicePills: [
            {
                href: "#ai-mvp-sprint",
                title: "Sprint MVP de IA",
                meta: "a partir de 4,5K€ · 3–6 sem",
            },
            {
                href: "#landing-page",
                title: "Landing Page que converte",
                meta: "a partir de 1,5K€ · 5–15 d",
            },
            {
                href: "#ai-automation",
                title: "Automação tática de IA",
                meta: "a partir de 1,8K€ · 1–3 sem",
            },
        ],
        ctaPrimary: "Falar comigo",
        ctaSecondary: "Ver meus projetos",
        statsLabels: {
            lines: "LINHAS_DE_CÓDIGO",
            screens: "TELAS",
            modules: "MÓDULOS",
            time: "PARA_ENTREGAR",
        },
        statsValues: {
            timeMonths: "1MÊS",
        },
        marquee: [
            "LATÊNCIA: <48H",
            "MUNDO INTEIRO",
            "STACK: NEXT.JS + SUPABASE + OPENAI + ANTHROPIC",
            "ENTREGUES: 2 SAAS",
            "AGENDA: ABERTA",
        ],
    },

    whatIBuild: {
        sectionLabel: "// O que construo //",
        headlineLine1: "Três ofertas.",
        headlineEmphasis: "Uma pessoa.",
        subtitle: "Escopos fechados. Prazos curtos. Preços transparentes.",
        offers: [
            {
                id: "ai-mvp-sprint",
                title: "Sprint MVP de IA",
                tagline: "Seu produto AI-first entregue em 3–6 semanas.",
                bullets: [
                    "App web full-stack (Next.js + Supabase)",
                    "Integração de IA (OpenAI / Anthropic, agentes, RAG)",
                    "Auth, banco, RBAC, pagamentos se precisar",
                    "Em produção + handover + docs",
                ],
                price: "a partir de 4,5K€",
                timeline: "3–6 semanas",
                flagship: true,
            },
            {
                id: "landing-page",
                title: "Landing Page que converte",
                tagline: "Uma landing que converte em 5–15 dias.",
                bullets: [
                    "Design sob medida para sua marca",
                    "Mobile-first, super rápido (Next.js)",
                    "Copywriting + bases de CRO",
                    "Analytics + tracking instalados",
                ],
                price: "a partir de 1,5K€",
                timeline: "5–15 dias",
            },
            {
                id: "ai-automation",
                title: "Automação tática de IA",
                tagline: "Um workflow automatizado em 1–3 semanas.",
                bullets: [
                    "Auditoria do workflow + escopo",
                    "Agente de IA sob medida integrado à sua stack",
                    "API + UI mínima se precisar",
                    "Documentação + sessão de handover",
                ],
                price: "a partir de 1,8K€",
                timeline: "1–3 semanas",
            },
        ],
        cardCta: "Quero esta oferta",
    },

    selectedWork: {
        sectionLabel: "// Projetos selecionados //",
        headlineEmphasis: "Um build.",
        headlineTrailing: "Três interfaces.",
        subtitle:
      "SKEMA Consultoria JR — a plataforma que roda uma Empresa Júnior de 30 pessoas. Construída em um mês, sozinho, de ponta a ponta.",
        darkBlock: {
            metaProject: "Projeto",
            metaYear: "2026",
            metaProduction: "Em produção",
            projectName: "SKEMA Consultoria JR",
            tagline:
        "Um hub interno para o time, um site público para o mercado, um portal do cliente para assinatura — tudo a partir de um único codebase. Em produção hoje com um time de 30 pessoas.",
            statsLabels: {
                lines: "Linhas de código",
                screens: "Telas",
                modules: "Módulos",
                time: "Mês para entregar",
            },
            techSpecs: [
                "Segurança row-level",
                "Subscriptions em tempo real",
                "Stamping de PDF server-side",
                "Geração automática de pagamentos",
                "10 papéis RBAC",
                "Bilíngue EN/PT",
                "Log de atividade",
                "30+ rotas protegidas",
                "Criação automática de projetos",
                "Controle de parcelas",
            ],
        },
        surfaces: [
            {
                id: "internal-hub",
                title: "Hub interno",
                tagline: "Onde o time toca o negócio.",
                bullets: [
                    "6 departamentos — RH, Financeiro, Comercial, Marketing, Inovação, Projetos",
                    "10 papéis, permissões por página, log completo",
                    "Mensagens em tempo real via subscriptions Supabase",
                    "Geração de PDFs server-side para faturas e contratos",
                ],
                highlight: "30+ rotas protegidas",
                screenshots: [
                    "/case-studies/skjr/hub-dashboard.jpg",
                    "/case-studies/skjr/hub-finance.jpg",
                    "/case-studies/skjr/hub-pipeline.jpg",
                ],
            },
            {
                id: "public-website",
                title: "Site público",
                tagline: "Um site de marketing que fecha negócios.",
                bullets: [
                    "Bilíngue EN/PT com switcher de idioma",
                    "Quote builder self-service com pricing detalhado",
                    "Cases e reviews puxados do Hub em tempo real",
                    "Orçamentos caem direto no CRM",
                ],
                highlight: "Bilíngue · quote self-service",
                screenshots: [
                    "/case-studies/skjr/web-hero.jpg",
                    "/case-studies/skjr/web-services.jpg",
                    "/case-studies/skjr/web-quote-builder.jpg",
                ],
            },
            {
                id: "client-portal",
                title: "Portal do cliente",
                tagline: "Onde os clientes assinam e acompanham a entrega.",
                bullets: [
                    "Segurança row-level — clientes só veem seus próprios dados",
                    "Assinatura digital em 2 etapas + stamping de PDF",
                    "Acompanhamento de projeto ao vivo — mesmo status pra JE e cliente",
                    "Assinatura do contrato cria automaticamente o projeto",
                ],
                highlight: "Assinatura digital · RLS",
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
        productizedLabel: "// Agora em SaaS",
        productizedNote:
      "A mesma plataforma agora é oferecida como um SaaS de 2 camadas para Empresas Júnior — prova de que a arquitetura aguenta bem além de um único projeto.",
    },

    howIWork: {
        sectionLabel: "// Como trabalho //",
        headlineLine1: "Quatro etapas.",
        headlineEmphasis: "Sem caixa-preta.",
        subtitle:
      "Da primeira call ao produto entregue. Você sempre sabe exatamente onde a gente está.",
        steps: [
            {
                title: "Call de descoberta",
                meta: "Gratuita · 15 min",
                description:
          "Uma conversa de verdade sobre seu projeto, onde você está, e se sou a pessoa certa para construir.",
            },
            {
                title: "Proposta",
                meta: "Em até 48h · 50% no início",
                description:
          "Oferta com escopo fechado, entregáveis, prazo e preço claros. Você assina, a gente começa.",
            },
            {
                title: "Build",
                meta: "Semanas, não meses",
                description:
          "Um update diário em um Notion compartilhado. Você vê o progresso ao vivo. Sem caixa-preta, sem surpresas.",
            },
            {
                title: "Entrega & handover",
                meta: "Pronto para produção · 30 dias de suporte",
                description:
          "Código limpo, documentado, em produção. Suporte bug-fix incluso nos primeiros 30 dias.",
            },
        ],
        languageNote: {
            calls: "Calls em EN ou FR",
            async: "Trabalho async em qualquer idioma",
        },
    },

    about: {
        sectionLabel: "// Sobre //",
        tagline: "Eu sou o Lucas.",
        taglineEmphasis: "Construo os apps que você não tem tempo de construir.",
        story: [
            {
                text: "MIM em Finance & Quant na SKEMA. Acabei escrevendo 28K+ linhas de código em um mês para entregar uma plataforma que hoje roda um time de 30 pessoas. Agora faço isso para outros founders.",
            },
            {
                text: "Trabalho sozinho — por design.",
                emphasis: "Uma pessoa, uma fatura, um único responsável pela entrega.",
            },
        ],
        signatures: [
            {
                label: "MIM · Finance & Quant",
                tagline: "Entendo seu runway.",
            },
            {
                label: "Base UE · BR",
                tagline: "Overlap com US East, dia inteiro UE.",
            },
            {
                label: "Solo por design",
                tagline: "Sem custo de PM, sem perda em handoff.",
            },
            {
                label: "AI-first",
                tagline: "Todos meus workflows são AI-first.",
            },
        ],
        photoCaption: {
            name: "Lucas Donjean",
            title: "Solo Founder Engineer",
        },
        closing: "Quer ver se a gente",
        closingEmphasis: "se daria bem trabalhando junto",
        closingSuffix: "?",
        ctaLabel: "Falar comigo",
    },

    finalCta: {
        sectionLabel: "// Vamos lá //",
        headlineLine1: "Bora",
        headlineEmphasis: "construir.",
        subtitle: "Call gratuita de 15 minutos. Ou um email. Tanto faz.",
        ctaLabel: "Falar comigo",
        status: {
            available: "Disponível agora",
            replies: "Resposta em 48h",
            booking: "Agenda: Aberta",
        },
    },

    footer: {
        tagline:
      "Solo Founder Engineer. SaaS AI-first, de ponta a ponta. Uma pessoa, uma fatura, em semanas — não em meses.",
        columns: {
            contact: "Contato",
            sections: "Seções",
            legal: "Legal",
        },
        legalLink: "Aviso legal",
        copyrightSuffix: "Solo Founder Engineer",
        backToTop: "Voltar ao topo",
        siretLabel: "SIRET [em curso]",
    },

    contactModal: {
        label: "// Vamos conversar //",
        title: "Duas formas de começar.",
        bookCall: {
            title: "Agendar uma call de descoberta",
            description: "Call em vídeo gratuita de 15 minutos. Em inglês ou francês.",
            footer: "Grátis · 15 min · EN ou FR →",
        },
        sendEmail: {
            title: "Me mandar um email",
            description: "Me escreve em qualquer idioma. Respondo em até 48h.",
            footer: "Qualquer idioma · Resposta em 48h →",
        },
        closeLabel: "Fechar",
    },

    languageSwitcher: {
        ariaLabel: "Mudar de idioma",
    },
};

export default pt;
