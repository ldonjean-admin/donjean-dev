"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, type Locale } from "@/dictionaries/types";

/* ============================================================
   LanguageSwitcher — 3 buttons EN · FR · PT

   Replaces the locale segment in the current URL. Falls back
   to navigating to /[locale] root if no locale segment found
   (e.g. from /legal which is outside [lang]).
   ============================================================ */

const LOCALE_LABELS: Record<Locale, string> = {
    en: "EN",
    fr: "FR",
    pt: "PT",
};

interface LanguageSwitcherProps {
    currentLocale: Locale;
    ariaLabel: string;
}

export function LanguageSwitcher({
    currentLocale,
    ariaLabel,
}: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    function switchTo(locale: Locale) {
        if (locale === currentLocale) return;

        const segments = pathname.split("/");
        // segments looks like ["", "en", ...] for /en/something
        // or ["", "legal"] for /legal

        if (
            segments.length > 1 &&
      (LOCALES as readonly string[]).includes(segments[1])
        ) {
            // Replace the locale segment, keep the rest of the path
            segments[1] = locale;
            const newPath = segments.join("/") || `/${locale}`;
            router.push(newPath);
        } else {
            // Not in a locale-prefixed route (e.g. /legal) → go to /[locale]
            router.push(`/${locale}`);
        }
    }

    return (
        <div
            className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] md:gap-2 md:text-[11px]"
            role="group"
            aria-label={ariaLabel}
        >
            {LOCALES.map((locale, i) => (
                <span key={locale} className="flex items-center gap-1.5 md:gap-2">
                    {i > 0 && (
                        <span aria-hidden className="text-cream/25">
              ·
                        </span>
                    )}
                    <button
                        type="button"
                        onClick={() => switchTo(locale)}
                        disabled={locale === currentLocale}
                        className={
                            locale === currentLocale
                                ? "cursor-default text-burnt-orange"
                                : "cursor-pointer text-cream/55 transition-colors duration-300 hover:text-cream"
                        }
                        aria-current={locale === currentLocale ? "true" : undefined}
                    >
                        {LOCALE_LABELS[locale]}
                    </button>
                </span>
            ))}
        </div>
    );
}
