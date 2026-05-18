import type { MetadataRoute } from "next";

/* ============================================================
   robots.ts — Next.js convention file

   Output: /robots.txt at build time.

   Strategy:
   - Allow all main crawlers (Googlebot, Bingbot, etc.) to
     index everything by default.
   - Block any /api/* routes (the future contact endpoint
     should not be in search results).
   - Block /_next/* (Next.js internals) — usually auto-blocked
     by crawlers but explicit is safer.
   - Reference the sitemap for indexing efficiency.
   ============================================================ */

const BASE_URL = "https://donjean.dev";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
