import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ============================================================
   /legal — Mentions légales

   Legally required for FR auto-entrepreneur (art. 6 LCEN).
   Address pulled from NEXT_PUBLIC_LEGAL_ADDRESS env var so the
   personal address never enters the public GitHub repo.

   noindex — utility page, no SEO value.
   ============================================================ */

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales du site donjean.dev",
    robots: { index: false, follow: true },
};

const LAST_UPDATED = "17 mai 2026";

export default function LegalPage() {
    const address =
        process.env.NEXT_PUBLIC_LEGAL_ADDRESS || "[Adresse — à compléter]";

    return (
        <main className="relative min-h-screen bg-cream">
            {/* Subtle dot-grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(15, 15, 15, 0.06) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <article className="relative mx-auto max-w-3xl px-6 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24 lg:px-12">
                {/* Back link */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-burnt-orange"
                >
                    <ArrowLeft
                        className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5"
                        strokeWidth={2}
                        aria-hidden
                    />
                    Retour à l&apos;accueil
                </Link>

                {/* Header */}
                <header className="mt-8 mb-14">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="accent-line" aria-hidden />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
              // Legal //
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                        Mentions légales
                    </h1>
                    <p className="mt-4 font-mono text-xs text-stone/70">
                        Dernière mise à jour : {LAST_UPDATED}
                    </p>
                </header>

                {/* Sections */}
                <div className="space-y-12">
                    <Section number="01" title="Éditeur du site">
                        <p>
                            <strong className="font-medium text-ink">Lucas Donjean</strong>
                        </p>
                        <p>Entreprise individuelle (auto-entrepreneur)</p>
                        <p>SIRET : [en cours d&apos;attribution]</p>
                        <p>Adresse : {address}</p>
                        <p>
                            Email :{" "}
                            <a
                                href="mailto:lucas@donjean.dev"
                                className="text-burnt-orange transition-colors duration-300 hover:text-orange-dark"
                            >
                                lucas@donjean.dev
                            </a>
                        </p>
                        <p>
                            TVA non applicable, art. 293 B du CGI (franchise en base de TVA).
                        </p>
                    </Section>

                    <Section number="02" title="Directeur de la publication">
                        <p>Lucas Donjean</p>
                    </Section>

                    <Section number="03" title="Hébergement">
                        <p>
                            <strong className="font-medium text-ink">Vercel Inc.</strong>
                        </p>
                        <p>440 N Barranca Ave #4133</p>
                        <p>Covina, CA 91723, États-Unis</p>
                        <p>
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-burnt-orange transition-colors duration-300 hover:text-orange-dark"
                            >
                                https://vercel.com
                            </a>
                        </p>
                    </Section>

                    <Section number="04" title="Propriété intellectuelle">
                        <p>
                            L&apos;ensemble du contenu présenté sur ce site (textes, images,
                            code, graphismes, animations, illustrations) est la propriété
                            exclusive de Lucas Donjean, sauf mention contraire. Toute
                            reproduction, représentation, modification ou exploitation, totale
                            ou partielle, sans autorisation écrite préalable, est interdite.
                        </p>
                    </Section>

                    <Section number="05" title="Données personnelles">
                        <p>
                            Les informations transmises via le formulaire de contact ou par
                            email sont utilisées uniquement pour répondre à votre demande.
                            Elles ne sont ni revendues ni partagées avec des tiers.
                        </p>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données
                            (RGPD), vous disposez d&apos;un droit d&apos;accès, de
                            rectification et de suppression de vos données personnelles. Pour
                            exercer ces droits, contactez :{" "}
                            <a
                                href="mailto:lucas@donjean.dev"
                                className="text-burnt-orange transition-colors duration-300 hover:text-orange-dark"
                            >
                                lucas@donjean.dev
                            </a>
                            .
                        </p>
                    </Section>

                    <Section number="06" title="Cookies et analyse de trafic">
                        <p>
                            Le site utilise Vercel Analytics pour mesurer le trafic global
                            (pages visitées, sources, durée moyenne). Aucun cookie
                            n&apos;est déposé sur votre navigateur, et aucune donnée
                            personnelle identifiante n&apos;est collectée.
                        </p>
                    </Section>

                    <Section number="07" title="Loi applicable">
                        <p>
                            Les présentes mentions légales sont régies par le droit français.
                            En cas de litige et après tentative de recherche d&apos;une
                            solution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </Section>
                </div>

                {/* Bottom back link */}
                <div className="mt-16 flex items-center justify-between border-t border-ink/10 pt-8">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:text-burnt-orange"
                    >
                        <ArrowLeft
                            className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5"
                            strokeWidth={2}
                            aria-hidden
                        />
                        Retour à l&apos;accueil
                    </Link>
                    <p className="font-mono text-[10px] text-stone/50">
                        © 2026 Lucas Donjean
                    </p>
                </div>
            </article>
        </main>
    );
}

/* ============================================================
   Numbered section helper
   ============================================================ */

function Section({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="mb-5 flex items-baseline gap-4">
                <span className="font-mono text-xs font-bold tabular-nums text-burnt-orange">
                    / {number}
                </span>
                <span className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                    {title}
                </span>
            </h2>
            <div className="space-y-3 text-base leading-relaxed text-stone">
                {children}
            </div>
        </section>
    );
}