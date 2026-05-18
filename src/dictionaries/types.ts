/* ============================================================
   Dictionary type + locale constants

   Client-safe: this file is imported by both Server and Client
   components. The `getDictionary` loader lives in
   `./get-dictionary.ts` (which is server-only).
   ============================================================ */

export type Locale = "en" | "fr" | "pt";

export const LOCALES: readonly Locale[] = ["en", "fr", "pt"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export function isValidLocale(value: string): value is Locale {
    return (LOCALES as readonly string[]).includes(value);
}

export interface Dictionary {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        offers: string;
        work: string;
        process: string;
        about: string;
        getInTouch: string;
    };
    hero: {
        topLabel: string;
        headlineLine1: string[];
        headlineLine2: string[];
        headlineEmphasis: string;
        subtitle: string;
        servicePills: Array<{
            href: string;
            title: string;
            meta: string;
        }>;
        ctaPrimary: string;
        ctaSecondary: string;
        statsLabels: {
            lines: string;
            screens: string;
            modules: string;
            time: string;
        };
        statsValues: {
            timeMonths: string;
        };
        marquee: string[];
    };
    whatIBuild: {
        sectionLabel: string;
        headlineLine1: string;
        headlineEmphasis: string;
        subtitle: string;
        offers: Array<{
            id: string;
            title: string;
            tagline: string;
            bullets: string[];
            price: string;
            timeline: string;
            flagship?: boolean;
        }>;
        cardCta: string;
    };
    selectedWork: {
        sectionLabel: string;
        headlineEmphasis: string;
        headlineTrailing: string;
        subtitle: string;
        darkBlock: {
            metaProject: string;
            metaYear: string;
            metaProduction: string;
            projectName: string;
            tagline: string;
            statsLabels: {
                lines: string;
                screens: string;
                modules: string;
                time: string;
            };
            techSpecs: string[];
        };
        surfaces: Array<{
            id: string;
            title: string;
            tagline: string;
            bullets: string[];
            highlight: string;
            screenshots: string[];
        }>;
        techStackLabel: string;
        techStackPills: string[];
        productizedLabel: string;
        productizedNote: string;
    };
    howIWork: {
        sectionLabel: string;
        headlineLine1: string;
        headlineEmphasis: string;
        subtitle: string;
        steps: Array<{
            title: string;
            meta: string;
            description: string;
        }>;
        languageNote: {
            calls: string;
            async: string;
        };
    };
    about: {
        sectionLabel: string;
        tagline: string;
        taglineEmphasis: string;
        story: Array<{
            text: string;
            emphasis?: string;
        }>;
        signatures: Array<{
            label: string;
            tagline: string;
        }>;
        photoCaption: {
            name: string;
            title: string;
        };
        closing: string;
        closingEmphasis: string;
        closingSuffix: string;
        ctaLabel: string;
    };
    finalCta: {
        sectionLabel: string;
        headlineLine1: string;
        headlineEmphasis: string;
        subtitle: string;
        ctaLabel: string;
        status: {
            available: string;
            replies: string;
            booking: string;
        };
    };
    footer: {
        tagline: string;
        columns: {
            contact: string;
            sections: string;
            legal: string;
        };
        legalLink: string;
        copyrightSuffix: string;
        backToTop: string;
        siretLabel: string;
    };
    contactModal: {
        label: string;
        title: string;
        bookCall: {
            title: string;
            description: string;
            footer: string;
        };
        sendEmail: {
            title: string;
            description: string;
            footer: string;
        };
        closeLabel: string;
    };
    languageSwitcher: {
        ariaLabel: string;
    };
}
