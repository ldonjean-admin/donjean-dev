"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "motion/react";
import {
    FileSignature,
    Hammer,
    MessageCircle,
    PackageCheck,
    type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Section 4 — How I Work

   Orchestrated viewport-entry sequence:
   - When the timeline enters the viewport, a 1.6s sequence
     plays once, in this order:
       1. The progress line traces left → right (linear ease)
       2. As the line reaches each dot's position, that dot
          turns from gray to orange
       3. Simultaneously, the corresponding step card
          illuminates (border, bg, shadow, icon-box, meta color)
   - Plays once, no reverse on scroll back up.
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

// Icons stay in component — paired with dict.steps by index
const STEP_ICONS: LucideIcon[] = [
    MessageCircle,
    FileSignature,
    Hammer,
    PackageCheck,
];

// Timing config (kept in sync with the line transition below)
const LINE_START_MS = 200;
const LINE_DURATION_MS = 2800;

interface HowIWorkProps {
    dict: Dictionary["howIWork"];
}

export function HowIWork({ dict }: HowIWorkProps) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(timelineRef, { once: true, amount: 0.3 });
    const [activeUntil, setActiveUntil] = useState(-1);

    const steps = dict.steps;

    // Orchestrate the activation sequence when timeline enters viewport
    useEffect(() => {
        if (!isInView) return;
        const timers: ReturnType<typeof setTimeout>[] = [];
        for (let i = 0; i < steps.length; i++) {
            const delay = LINE_START_MS + (i / (steps.length - 1)) * LINE_DURATION_MS;
            timers.push(
                setTimeout(() => {
                    setActiveUntil((prev) => Math.max(prev, i));
                }, delay),
            );
        }
        return () => timers.forEach(clearTimeout);
    }, [isInView, steps.length]);

    return (
        <section
            id="how"
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

            {/* Editorial watermark "04" */}
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
        04
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

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 max-w-2xl text-sm leading-relaxed text-stone md:text-base"
                    >
                        {dict.subtitle}
                    </motion.p>

                    {/* Timeline + step cards */}
                    <div ref={timelineRef} className="mt-12 md:mt-16">
                        {/* Desktop timeline */}
                        <div className="relative mb-10 hidden h-5 md:block">
                            {/* Background line — always visible, gray */}
                            <div
                                aria-hidden
                                className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-ink/15"
                            />

                            {/* Progress line — traces with linear ease for perfect sync */}
                            <motion.div
                                aria-hidden
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{
                                    duration: LINE_DURATION_MS / 1000,
                                    delay: LINE_START_MS / 1000,
                                    ease: "linear",
                                }}
                                className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[1.5px] origin-left -translate-y-1/2 bg-burnt-orange"
                            />

                            {/* 4 dots — only appear when their step activates */}
                            <div className="absolute inset-0 grid grid-cols-4">
                                {steps.map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center"
                                    >
                                        <motion.span
                                            aria-hidden
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={
                                                i <= activeUntil
                                                    ? { scale: 1, opacity: 1 }
                                                    : { scale: 0, opacity: 0 }
                                            }
                                            transition={{
                                                duration: 0.4,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="block h-4 w-4 rounded-full bg-burnt-orange ring-4 ring-cream"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4 step cards */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-5 lg:gap-6"
                        >
                            {steps.map((step, i) => (
                                <StepCard
                                    key={i}
                                    number={String(i + 1).padStart(2, "0")}
                                    icon={STEP_ICONS[i]}
                                    title={step.title}
                                    meta={step.meta}
                                    description={step.description}
                                    active={i <= activeUntil}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Closing language note */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex items-center gap-4 md:mt-14"
                    >
                        <span className="h-px flex-1 bg-ink/10" aria-hidden />
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-stone">
                            {dict.languageNote.calls}
                            <span className="mx-3 text-stone/40" aria-hidden>
                //
                            </span>
                            {dict.languageNote.async}
                        </span>
                        <span className="h-px flex-1 bg-ink/10" aria-hidden />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   Step card — illuminates when the timeline reaches its position
   ============================================================ */

interface StepCardProps {
    number: string;
    icon: LucideIcon;
    title: string;
    meta: string;
    description: string;
    active: boolean;
}

function StepCard({
    number,
    icon: Icon,
    title,
    meta,
    description,
    active,
}: StepCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileHover={
                active
                    ? {
                        y: -4,
                        scale: 1.02,
                        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                    }
                    : undefined
            }
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-md border-[1.5px] border-burnt-orange/25 bg-white/80 p-6 backdrop-blur-md shadow-[0_14px_30px_-12px_rgba(217,119,87,0.15)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-burnt-orange/45 hover:bg-white/95 hover:shadow-[0_22px_45px_-12px_rgba(217,119,87,0.28)]"
        >
            <div className="flex flex-1 flex-col">
                {/* Top row: icon + number badge */}
                <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex items-center justify-center rounded-md bg-burnt-orange/15 p-2.5">
                        <Icon
                            className="h-5 w-5 text-burnt-orange"
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <span className="font-mono text-[10px] font-medium tabular-nums tracking-[0.16em] text-stone/60">
            / {number}
                    </span>
                </div>

                {/* Divider */}
                <div className="mb-4 h-px w-full bg-ink/10" aria-hidden />

                {/* Title */}
                <h4 className="mb-1.5 text-lg font-bold leading-tight tracking-tight text-ink lg:text-xl">
                    {title}
                </h4>

                {/* Meta */}
                <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-burnt-orange">
                    {meta}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-stone">{description}</p>
            </div>
        </motion.article>
    );
}
