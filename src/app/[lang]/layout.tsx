import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, LOCALES, type Locale } from "@/dictionaries/types";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Navbar } from "@/components/navigation/navbar";

/* ============================================================
   [lang]/layout — locale segment

   Loads the locale dictionary, validates the URL segment, mounts
   the localized Navbar. The Navbar wraps every page under
   /en, /fr, /pt (but NOT under /legal — that has its own layout).
   ============================================================ */

export async function generateStaticParams() {
    return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    if (!isValidLocale(lang)) return {};

    const dict = await getDictionary(lang);
    return {
        title: dict.meta.title,
        description: dict.meta.description,
        openGraph: {
            type: "website",
            url: `https://donjean.dev/${lang}`,
            title: dict.meta.title,
            description: dict.meta.description,
            siteName: "Donjean Dev",
            locale: lang === "pt" ? "pt_BR" : lang === "fr" ? "fr_FR" : "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: dict.meta.title,
            description: dict.meta.description,
        },
    };
}

export default async function LangLayout({
    children,
    params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (!isValidLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    return (
        <>
            <Navbar
                navDict={dict.nav}
                contactDict={dict.contactModal}
                switcherDict={dict.languageSwitcher}
                currentLocale={lang as Locale}
            />
            {children}
        </>
    );
}
