import "server-only";
import { DEFAULT_LOCALE, type Dictionary, type Locale } from "./types";

/* ============================================================
   getDictionary — server-only dynamic loader

   Returns the localized Dictionary for a given locale.
   Falls back to DEFAULT_LOCALE if the locale isn't recognized.
   ============================================================ */

const dictionaries = {
    en: () => import("./en").then((m) => m.default),
    fr: () => import("./fr").then((m) => m.default),
    pt: () => import("./pt").then((m) => m.default),
} as const;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
    const loader = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
    return loader();
}
