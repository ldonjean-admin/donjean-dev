import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Saira_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

/* ============================================================
   Fonts
   ============================================================ */
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});
const sairaCondensed = Saira_Condensed({
    subsets: ["latin"],
    weight: ["700", "800", "900"],
    variable: "--font-display",
    display: "swap",
});

const siteUrl = "https://donjean.dev";

/* ============================================================
   Root metadata — per-locale metadata set in [lang]/layout
   ============================================================ */
export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Lucas Donjean — Solo Founder Engineer",
        template: "%s · Donjean Dev",
    },
    description: "Solo full-stack engineer shipping AI-powered SaaS end-to-end.",
    authors: [{ name: "Lucas Donjean", url: siteUrl }],
    creator: "Lucas Donjean",
    alternates: {
        canonical: siteUrl,
        languages: {
            en: `${siteUrl}/en`,
            fr: `${siteUrl}/fr`,
            "pt-BR": `${siteUrl}/pt`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#faf6ee",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${sairaCondensed.variable} ${jetbrainsMono.variable}`}
        >
            <body className="bg-cream text-ink antialiased">
                <SmoothScrollProvider>{children}</SmoothScrollProvider>
                {/* Paper-grain texture overlay */}
                <div className="grain-overlay" aria-hidden />
                {/* Vercel Web Analytics — cookieless, RGPD-compliant */}
                <Analytics />
            </body>
        </html>
    );
}
