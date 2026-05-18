"use client";

import { motion, type Variants } from "motion/react";
import { Bot, Check, Rocket, Zap, type LucideIcon } from "lucide-react";
import { GetInTouchButton } from "@/components/cta/get-in-touch-button";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Section 2 — What I Build

   3 equal cards in row, flagship differentiated by treatment.
   3D hover: card jumps forward (scale + lift + z-index),
   non-hovered cards recede and dim (CSS :has() selector,
   defined in globals.css).
   Background: dot-grid + editorial "02" watermark.
   ============================================================ */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

// Icons stay in component — paired with dict.offers by index
const OFFER_ICONS: LucideIcon[] = [Rocket, Zap, Bot];

interface WhatIBuildProps {
    dict: Dictionary["whatIBuild"];
    contactDict: Dictionary["contactModal"];
}

export function WhatIBuild({ dict, contactDict }: WhatIBuildProps) {
    return (
        <section
            id="what-i-build"
            className="relative overflow-hidden bg-cream-deep/30 py-20 md:py-24 lg:py-28"
        >
            {/* Dot-grid background pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(15, 15, 15, 0.10) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Editorial section number watermark "02" */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 hidden select-none lg:block"
                style={{
                    fontSize: "clamp(10rem, 22vw, 20rem)",
                    fontWeight: 900,
                    lineHeight: 0.85,
                    letterSpacing: "-0.06em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(15, 15, 15, 0.08)",
                }}
            >
        02
            </div>

            <div className="section-container relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                >
                    {/* Section label */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-5 flex items-center gap-3"
                    >
                        <span className="accent-line" aria-hidden />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.sectionLabel}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl lg:text-5xl"
                    >
                        {dict.headlineLine1}{" "}
                        <span className="italic font-bold text-burnt-orange">
                            {dict.headlineEmphasis}
                        </span>
                    </motion.h2>

                    {/* Compact subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 max-w-2xl text-sm leading-relaxed text-stone md:text-base"
                    >
                        {dict.subtitle}
                    </motion.p>

                    {/* 3 equal cards — "offers-grid" class powers the :has() depth focus */}
                    <motion.div
                        variants={itemVariants}
                        className="offers-grid mt-10 grid grid-cols-1 gap-5 md:mt-12 lg:grid-cols-3 lg:gap-6"
                    >
                        {dict.offers.map((offer, i) => (
                            <OfferCard
                                key={offer.id}
                                id={offer.id}
                                number={String(i + 1).padStart(2, "0")}
                                icon={OFFER_ICONS[i]}
                                title={offer.title}
                                tagline={offer.tagline}
                                bullets={offer.bullets}
                                price={offer.price}
                                timeline={offer.timeline}
                                flagship={offer.flagship}
                                ctaLabel={dict.cardCta}
                                contactDict={contactDict}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   Offer card
   ============================================================ */

interface OfferCardProps {
    id: string;
    number: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    bullets: string[];
    price: string;
    timeline: string;
    flagship?: boolean;
    ctaLabel: string;
    contactDict: Dictionary["contactModal"];
}

function OfferCard({
    id,
    number,
    icon: Icon,
    title,
    tagline,
    bullets,
    price,
    timeline,
    flagship,
    ctaLabel,
    contactDict,
}: OfferCardProps) {
    return (
        <motion.article
            id={id}
            variants={cardVariants}
            whileHover={{
                y: -10,
                scale: 1.04,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className={[
                "group relative flex flex-col scroll-mt-24 overflow-hidden rounded-md border-[1.5px] backdrop-blur-md",
                "transition-[box-shadow,border-color,background-color] duration-300",
                "hover:z-20",
                flagship
                    ? "border-burnt-orange/25 bg-white/80 hover:border-burnt-orange/50 hover:shadow-[0_24px_50px_-8px_rgba(217,119,87,0.45)]"
                    : "border-ink/15 bg-white/65 hover:border-burnt-orange/40 hover:shadow-[0_20px_44px_-8px_rgba(217,119,87,0.35)]",
            ].join(" ")}
        >
            {/* Top accent strip */}
            <div
                aria-hidden
                className={[
                    "h-1 w-full transition-colors duration-300",
                    flagship
                        ? "bg-burnt-orange"
                        : "bg-ink/15 group-hover:bg-burnt-orange/40",
                ].join(" ")}
            />

            {/* Decorative gradient corner */}
            <div
                aria-hidden
                className={[
                    "pointer-events-none absolute right-0 top-1 h-40 w-40 bg-gradient-to-bl to-transparent",
                    flagship ? "from-burnt-orange/[0.08]" : "from-burnt-orange/[0.04]",
                ].join(" ")}
            />

            <div className="relative flex flex-1 flex-col p-7">
                {/* Top row: icon + number badge */}
                <div className="mb-5 flex items-start justify-between">
                    <div
                        className={[
                            "inline-flex items-center justify-center rounded-md p-3 transition-colors duration-300",
                            flagship
                                ? "bg-burnt-orange/15 group-hover:bg-burnt-orange/20"
                                : "bg-burnt-orange/10 group-hover:bg-burnt-orange/15",
                        ].join(" ")}
                    >
                        <Icon
                            className="h-6 w-6 text-burnt-orange transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>

                    <span
                        className={[
                            "font-mono text-[10px] font-medium tabular-nums tracking-[0.16em]",
                            flagship ? "text-burnt-orange" : "text-stone/60",
                        ].join(" ")}
                    >
            / {number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-xl font-bold leading-tight tracking-tight text-ink lg:text-2xl">
                    {title}
                </h3>

                {/* Tagline */}
                <p className="mb-6 text-sm leading-relaxed text-stone">{tagline}</p>

                {/* Bullets */}
                <ul className="mb-6 flex-1 space-y-2.5">
                    {bullets.map((bullet, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] leading-relaxed text-ink"
                        >
                            <Check
                                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-burnt-orange"
                                strokeWidth={2.5}
                                aria-hidden
                            />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer: price + timeline */}
                <div className="mb-5 flex items-baseline gap-2 border-t border-ink/10 pt-4 font-mono text-sm">
                    <span className="font-bold tabular-nums text-ink">{price}</span>
                    <span className="text-stone/60">·</span>
                    <span className="tabular-nums text-stone">{timeline}</span>
                </div>

                {/* CTA — opens ContactModal */}
                <GetInTouchButton
                    variant="secondary"
                    className="self-start"
                    dict={contactDict}
                >
                    {ctaLabel}
                </GetInTouchButton>
            </div>
        </motion.article>
    );
}
