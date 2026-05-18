import { ImageResponse } from "next/og";

/* ============================================================
   OG image — generated per locale at build time

   Outputs:
   - /en/opengraph-image.png
   - /fr/opengraph-image.png
   - /pt/opengraph-image.png

   Picked up automatically by Next.js metadata. No manual
   declaration needed in layout.tsx — the file convention
   wins.

   Twitter (twitter-image.tsx) is not defined; Next.js falls
   back to the OG image for Twitter cards.
   ============================================================ */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lucas Donjean — Solo Founder Engineer · AI-first SaaS, end-to-end";

type Locale = "en" | "fr" | "pt";

const taglines: Record<Locale, string> = {
    en: "AI-first SaaS, end-to-end. One person, one invoice, in weeks not months.",
    fr: "SaaS IA-first, de bout en bout. Une personne, une facture, en semaines pas en mois.",
    pt: "SaaS AI-first, de ponta a ponta. Uma pessoa, uma fatura, em semanas — não em meses.",
};

const status: Record<Locale, string> = {
    en: "AVAILABLE NOW · BOOKING OPEN",
    fr: "DISPONIBLE · AGENDA OUVERT",
    pt: "DISPONÍVEL · AGENDA ABERTA",
};

const stats: Record<
    Locale,
    { lines: string; screens: string; shipped: string; worldwide: string }
> = {
    en: {
        lines: "28K+ LINES",
        screens: "30+ SCREENS",
        shipped: "2 SAAS SHIPPED",
        worldwide: "WORLDWIDE",
    },
    fr: {
        lines: "28K+ LIGNES",
        screens: "30+ ÉCRANS",
        shipped: "2 SAAS LIVRÉS",
        worldwide: "MONDE ENTIER",
    },
    pt: {
        lines: "28K+ LINHAS",
        screens: "30+ TELAS",
        shipped: "2 SAAS ENTREGUES",
        worldwide: "MUNDO INTEIRO",
    },
};

function asLocale(value: string): Locale {
    return value === "fr" || value === "pt" ? value : "en";
}

export default async function OgImage({
    params,
}: {
  params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = asLocale(lang);

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#0f0f0f",
                    backgroundImage:
            "radial-gradient(circle, rgba(250, 246, 238, 0.06) 1.5px, transparent 1.5px)",
                    backgroundSize: "40px 40px",
                    padding: "80px",
                    position: "relative",
                }}
            >
                {/* Top: status pulse */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: 14,
                            height: 14,
                            borderRadius: 7,
                            backgroundColor: "#d97757",
                        }}
                    />
                    <span
                        style={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: "rgba(250, 246, 238, 0.85)",
                            letterSpacing: 4,
                        }}
                    >
                        {status[locale]}
                    </span>
                </div>

                {/* Center: brand wordmark + taglines */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    {/* Wordmark: DONJEAN.dev */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                            color: "#faf6ee",
                            lineHeight: 0.95,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 140,
                                fontWeight: 900,
                                letterSpacing: -5,
                            }}
                        >
              DONJEAN
                        </span>
                        <span
                            style={{
                                fontSize: 64,
                                fontWeight: 700,
                                color: "#d97757",
                                letterSpacing: -2,
                                marginLeft: 6,
                            }}
                        >
              .dev
                        </span>
                    </div>

                    {/* Brand title */}
                    <div
                        style={{
                            display: "flex",
                            marginTop: 38,
                            fontSize: 38,
                            fontWeight: 700,
                            color: "#faf6ee",
                            letterSpacing: -0.5,
                        }}
                    >
            Solo Founder Engineer
                    </div>

                    {/* Localized tagline */}
                    <div
                        style={{
                            display: "flex",
                            marginTop: 14,
                            fontSize: 28,
                            fontWeight: 400,
                            color: "rgba(250, 246, 238, 0.7)",
                            lineHeight: 1.4,
                            maxWidth: 980,
                        }}
                    >
                        {taglines[locale]}
                    </div>
                </div>

                {/* Bottom: divider + stats line */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            height: 1,
                            backgroundColor: "rgba(250, 246, 238, 0.12)",
                            marginBottom: 22,
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 18,
                            fontSize: 18,
                            fontWeight: 700,
                            color: "rgba(250, 246, 238, 0.55)",
                            letterSpacing: 3,
                        }}
                    >
                        <span>{stats[locale].lines}</span>
                        <span style={{ color: "#d97757", opacity: 0.7 }}>·</span>
                        <span>{stats[locale].screens}</span>
                        <span style={{ color: "#d97757", opacity: 0.7 }}>·</span>
                        <span>{stats[locale].shipped}</span>
                        <span style={{ color: "#d97757", opacity: 0.7 }}>·</span>
                        <span>{stats[locale].worldwide}</span>
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}
