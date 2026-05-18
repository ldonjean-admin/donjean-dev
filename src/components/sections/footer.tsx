"use client";

import { ArrowUp, ExternalLink, Mail } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Footer — minimal dark continuation

   Receives footer dict (column headers, tagline, legal labels)
   and nav dict (for section link labels). The /legal link
   itself always goes to /legal (FR-only mentions légales).
   ============================================================ */

interface FooterProps {
    dict: Dictionary["footer"];
    sectionLinksDict: Dictionary["nav"];
}

const YEAR = new Date().getFullYear();

export function Footer({ dict, sectionLinksDict }: FooterProps) {
    const sectionLinks = [
        { href: "/#what-i-build", label: sectionLinksDict.offers },
        { href: "/#selected-work", label: sectionLinksDict.work },
        { href: "/#how", label: sectionLinksDict.process },
        { href: "/#about", label: sectionLinksDict.about },
    ];

    return (
        <footer className="relative bg-ink pb-8 pt-14 md:pb-10 md:pt-16">
            {/* Subtle cream dot-grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(250, 246, 238, 0.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="section-container relative">
                {/* Main grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-8">
                    {/* Wordmark + tagline */}
                    <div className="col-span-2 md:col-span-5">
                        <a
                            href="/#hero"
                            aria-label="Back to top"
                            className="group inline-flex items-baseline"
                        >
                            <span
                                className="font-display font-black uppercase leading-none tracking-[-0.03em] text-cream transition-colors duration-300 group-hover:text-burnt-orange"
                                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                            >
                DONJEAN
                            </span>
                            <span
                                className="font-mono font-bold lowercase leading-none text-burnt-orange transition-transform duration-300 group-hover:-translate-y-0.5"
                                style={{ fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)" }}
                            >
                .dev
                            </span>
                        </a>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
                            {dict.tagline}
                        </p>
                    </div>

                    {/* Contact column */}
                    <div className="md:col-span-3">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.columns.contact}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href="mailto:lucas@donjean.dev"
                                    className="group inline-flex items-center gap-2 text-sm text-cream/75 transition-colors duration-300 hover:text-burnt-orange"
                                >
                                    <Mail
                                        className="size-3.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                                        strokeWidth={2}
                                        aria-hidden
                                    />
                  lucas@donjean.dev
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/in/lucas-donjean"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-cream/75 transition-colors duration-300 hover:text-burnt-orange"
                                >
                                    <ExternalLink
                                        className="size-3.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                                        strokeWidth={2}
                                        aria-hidden
                                    />
                  LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sections column */}
                    <div className="md:col-span-2">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.columns.sections}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            {sectionLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="text-sm text-cream/75 transition-colors duration-300 hover:text-burnt-orange"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div className="md:col-span-2">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.columns.legal}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href="/legal"
                                    className="text-sm text-cream/75 transition-colors duration-300 hover:text-burnt-orange"
                                >
                                    {dict.legalLink}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-cream/10 pt-6 md:mt-14 md:flex-row md:items-center md:gap-6">
                    <p className="font-mono text-[11px] text-cream/50">
            © {YEAR} Lucas Donjean
                        <span className="mx-2 text-cream/25" aria-hidden>
              ·
                        </span>
                        {dict.copyrightSuffix}
                        <span className="mx-2 text-cream/25" aria-hidden>
              ·
                        </span>
                        {dict.siretLabel}
                    </p>
                    <a
                        href="/#hero"
                        className="group inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cream/65 transition-colors duration-300 hover:text-burnt-orange"
                    >
                        {dict.backToTop}
                        <ArrowUp
                            className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5"
                            strokeWidth={2}
                            aria-hidden
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
