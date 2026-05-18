"use client";

import { motion, type Variants } from "motion/react";
import { GetInTouchButton } from "@/components/cta/get-in-touch-button";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Section 7 — Final CTA

   Dark inversion full-bleed. The page has been cream-dominant
   until now; this section flips to ink so the closing CTA reads
   as a deliberate climax — editorial poster style.
   ============================================================ */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.1 },
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

const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
};

interface FinalCtaProps {
    dict: Dictionary["finalCta"];
    contactDict: Dictionary["contactModal"];
}

export function FinalCta({ dict, contactDict }: FinalCtaProps) {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-ink py-20 md:py-24 lg:py-28"
        >
            {/* Cream dot-grid background — subtle texture on ink */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(250, 246, 238, 0.05) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Editorial watermark "07" — cream stroke */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 hidden select-none lg:block"
                style={{
                    fontSize: "clamp(10rem, 22vw, 20rem)",
                    fontWeight: 900,
                    lineHeight: 0.85,
                    letterSpacing: "-0.06em",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(250, 246, 238, 0.06)",
                }}
            >
        07
            </div>

            {/* DONJEAN.dev filigree — bottom-right */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute bottom-4 right-4 hidden select-none items-baseline md:bottom-6 md:right-6 md:flex lg:bottom-8 lg:right-8"
            >
                <span
                    className="font-display font-black uppercase leading-none tracking-[-0.04em]"
                    style={{
                        fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                        color: "transparent",
                        WebkitTextStrokeWidth: "1.5px",
                        WebkitTextStrokeColor: "rgba(250, 246, 238, 0.10)",
                    }}
                >
          DONJEAN
                </span>
                <span
                    className="font-mono font-bold lowercase leading-none"
                    style={{
                        fontSize: "clamp(1rem, 2vw, 1.5rem)",
                        color: "transparent",
                        WebkitTextStrokeWidth: "1.5px",
                        WebkitTextStrokeColor: "rgba(217, 119, 87, 0.35)",
                    }}
                >
          .dev
                </span>
            </motion.div>

            {/* Top burnt-orange edge accent */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-burnt-orange/50 to-transparent"
            />

            <div className="section-container relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Section label */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 flex items-center gap-3 md:mb-10"
                    >
                        <span className="h-[3px] w-9 bg-burnt-orange" aria-hidden />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.sectionLabel}
                        </span>
                    </motion.div>

                    {/* Gigantic stacked headline */}
                    <motion.h2
                        variants={headlineVariants}
                        className="font-display font-black uppercase leading-[0.9] tracking-[-0.04em] text-cream"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                    >
                        <span className="block">{dict.headlineLine1}</span>
                        <span className="block italic text-burnt-orange">
                            {dict.headlineEmphasis}
                        </span>
                    </motion.h2>

                    {/* Supporting subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:mt-10 md:text-lg"
                    >
                        {dict.subtitle}
                    </motion.p>

                    {/* Primary CTA — larger than usual for final emphasis */}
                    <motion.div variants={itemVariants} className="mt-10 md:mt-12">
                        <GetInTouchButton
                            variant="primary"
                            className="px-8 py-4 text-base md:text-lg"
                            dict={contactDict}
                        >
                            {dict.ctaLabel}
                        </GetInTouchButton>
                    </motion.div>

                    {/* Availability status strip */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-wrap items-center gap-3 border-t border-cream/10 pt-6 md:mt-12 md:gap-4 md:pt-8"
                    >
                        {/* Pulsing live dot */}
                        <span className="relative flex h-2 w-2" aria-hidden>
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burnt-orange/60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-burnt-orange" />
                        </span>
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cream/65 md:text-xs">
                            {dict.status.available}
                            <span className="mx-3 text-cream/30" aria-hidden>
                //
                            </span>
                            {dict.status.replies}
                            <span className="mx-3 text-cream/30" aria-hidden>
                //
                            </span>
                            {dict.status.booking}
                        </span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom burnt-orange edge accent — transition to footer */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-burnt-orange/40 to-transparent"
            />
        </section>
    );
}
