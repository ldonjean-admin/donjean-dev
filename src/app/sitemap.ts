import type { MetadataRoute } from "next";

/* ============================================================
   sitemap.ts — Next.js convention file

   Output: /sitemap.xml at build time.

   Includes:
   - 3 localized homepages (/en, /fr, /pt) with hreflang alternates
   - /legal (FR-only, mentions légales)

   The root / is intentionally NOT listed — it's a redirect to
   the detected locale, not a content page.
   ============================================================ */

const BASE_URL = "https://donjean.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        // Localized homepages — same content, three URLs, linked via hreflang
        {
            url: `${BASE_URL}/en`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
            alternates: {
                languages: {
                    en: `${BASE_URL}/en`,
                    fr: `${BASE_URL}/fr`,
                    "pt-BR": `${BASE_URL}/pt`,
                    "x-default": `${BASE_URL}/en`,
                },
            },
        },
        {
            url: `${BASE_URL}/fr`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
            alternates: {
                languages: {
                    en: `${BASE_URL}/en`,
                    fr: `${BASE_URL}/fr`,
                    "pt-BR": `${BASE_URL}/pt`,
                    "x-default": `${BASE_URL}/en`,
                },
            },
        },
        {
            url: `${BASE_URL}/pt`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
            alternates: {
                languages: {
                    en: `${BASE_URL}/en`,
                    fr: `${BASE_URL}/fr`,
                    "pt-BR": `${BASE_URL}/pt`,
                    "x-default": `${BASE_URL}/en`,
                },
            },
        },
        // Legal page (FR-only, low priority — required by law, not for SEO)
        {
            url: `${BASE_URL}/legal`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
