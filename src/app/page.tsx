import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, type Locale } from "@/dictionaries/types";

/* ============================================================
   Root page — detects browser language and redirects.

   Order of preference in Accept-Language header:
   - fr-* → /fr
   - pt-* → /pt
   - en-* → /en
   - anything else → /en (default)
   ============================================================ */

function detectLocale(acceptLanguage: string): Locale {
    const langs = acceptLanguage
        .split(",")
        .map((s) => s.split(";")[0].trim().toLowerCase());

    for (const lang of langs) {
        if (lang.startsWith("fr")) return "fr";
        if (lang.startsWith("pt")) return "pt";
        if (lang.startsWith("en")) return "en";
    }

    return DEFAULT_LOCALE;
}

export default async function RootPage() {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") ?? "";
    const locale = detectLocale(acceptLanguage);
    redirect(`/${locale}`);
}
