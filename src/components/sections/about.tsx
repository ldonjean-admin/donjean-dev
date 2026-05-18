"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
    Globe,
    LineChart,
    Sparkles,
    User,
    type LucideIcon,
} from "lucide-react";
import { GetInTouchButton } from "@/components/cta/get-in-touch-button";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Section 5 — About Me

   2-col layout (lg+): photo left (4/12) + content right (8/12).
   4 signatures are the conversion-critical block — concrete
   differentiators answering "why hire this person specifically".
   Closing CTA opens ContactModal (same flow as Hero + Navbar).
   ============================================================ */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

const photoVariants: Variants = {
    hidden: { opacity: 0, x: -32, scale: 0.96 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

// Icons stay in component — paired with dict.signatures by index
const SIGNATURE_ICONS: LucideIcon[] = [LineChart, Globe, User, Sparkles];

interface AboutProps {
    dict: Dictionary["about"];
    contactDict: Dictionary["contactModal"];
}

export function About({ dict, contactDict }: AboutProps) {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-cream py-20 md:py-24 lg:py-28"
        >
            {/* Dot-grid background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(15, 15, 15, 0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Editorial watermark "05" */}
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
        05
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
                        className="mb-10 flex items-center gap-3 md:mb-12"
                    >
                        <span className="accent-line" aria-hidden />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.sectionLabel}
                        </span>
                    </motion.div>

                    {/* 2-col layout */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                        {/* Photo column */}
                        <motion.div variants={photoVariants} className="lg:col-span-4">
                            <div className="group relative overflow-hidden rounded-md border-[1.5px] border-ink/15 bg-white/65 shadow-[0_18px_40px_-14px_rgba(15,15,15,0.18)] transition-shadow duration-500 hover:shadow-[0_22px_50px_-14px_rgba(15,15,15,0.25)]">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src="/about/lucas.jpg"
                                        alt={dict.photoCaption.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                    {/* Subtle bottom gradient for legibility of caption */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
                                    />
                                    {/* Caption pinned bottom-left */}
                                    <div className="absolute inset-x-0 bottom-0 p-4">
                                        <p className="font-display text-lg font-black uppercase leading-none tracking-tight text-cream md:text-xl">
                                            {dict.photoCaption.name}
                                        </p>
                                        <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-burnt-orange">
                                            {dict.photoCaption.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content column */}
                        <div className="flex flex-col lg:col-span-8">
                            {/* Tagline */}
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-4xl lg:text-5xl"
                            >
                                {dict.tagline}{" "}
                                <span className="italic font-bold text-burnt-orange">
                                    {dict.taglineEmphasis}
                                </span>
                            </motion.h2>

                            {/* Story — 2 short paragraphs */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-6 space-y-4 text-base leading-relaxed text-stone md:text-lg"
                            >
                                {dict.story.map((para, i) => (
                                    <p key={i}>
                                        {para.text}
                                        {para.emphasis && (
                                            <>
                                                {" "}
                                                <span className="font-medium italic text-ink">
                                                    {para.emphasis}
                                                </span>
                                            </>
                                        )}
                                    </p>
                                ))}
                            </motion.div>

                            {/* Signatures grid — 4 differentiators */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2"
                            >
                                {dict.signatures.map((sig, i) => (
                                    <SignatureCard
                                        key={sig.label}
                                        icon={SIGNATURE_ICONS[i]}
                                        label={sig.label}
                                        tagline={sig.tagline}
                                    />
                                ))}
                            </motion.div>

                            {/* Closing CTA */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 flex flex-col items-start gap-5 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between md:gap-6"
                            >
                                <p className="text-lg leading-snug text-ink md:text-xl">
                                    {dict.closing}{" "}
                                    <span className="italic text-burnt-orange">
                                        {dict.closingEmphasis}
                                    </span>
                                    {dict.closingSuffix}
                                </p>
                                <GetInTouchButton variant="primary" dict={contactDict}>
                                    {dict.ctaLabel}
                                </GetInTouchButton>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   Signature card — icon + label + italic tagline
   ============================================================ */

interface SignatureCardProps {
    icon: LucideIcon;
    label: string;
    tagline: string;
}

function SignatureCard({ icon: Icon, label, tagline }: SignatureCardProps) {
    return (
        <motion.article
            variants={cardVariants}
            className="group flex items-start gap-3 rounded-md border-[1.5px] border-ink/15 bg-white/65 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-burnt-orange/35 hover:bg-white/90 hover:shadow-[0_12px_28px_-12px_rgba(217,119,87,0.22)]"
        >
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-burnt-orange/15 transition-colors duration-300 group-hover:bg-burnt-orange/25">
                <Icon
                    className="h-4 w-4 text-burnt-orange"
                    strokeWidth={2}
                    aria-hidden
                />
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold leading-tight tracking-tight text-ink">
                    {label}
                </h4>
                <p className="text-xs leading-snug italic text-stone">{tagline}</p>
            </div>
        </motion.article>
    );
}
