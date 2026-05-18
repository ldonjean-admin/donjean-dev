"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
    Briefcase,
    Globe,
    KeyRound,
    type LucideIcon,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Section 3 — Selected Work
   Single deep-dive case study (SKEMA Consultoria JR).
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

const darkBlockVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
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

// Icons stay in component — paired with dict.surfaces by index
const SURFACE_ICONS: LucideIcon[] = [Briefcase, Globe, KeyRound];

interface SelectedWorkProps {
    dict: Dictionary["selectedWork"];
}

export function SelectedWork({ dict }: SelectedWorkProps) {
    return (
        <section
            id="selected-work"
            className="relative overflow-hidden bg-cream py-20 md:py-24 lg:py-28"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(15, 15, 15, 0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

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
        03
            </div>

            <div className="section-container relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-5 flex items-center gap-3"
                    >
                        <span className="accent-line" aria-hidden />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.sectionLabel}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl lg:text-5xl"
                    >
                        <span className="italic font-bold text-burnt-orange">
                            {dict.headlineEmphasis}
                        </span>{" "}
                        {dict.headlineTrailing}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 max-w-2xl text-sm leading-relaxed text-stone md:text-base"
                    >
                        {dict.subtitle}
                    </motion.p>

                    {/* Dark hero block */}
                    <motion.div
                        variants={darkBlockVariants}
                        className="relative mt-10 overflow-hidden rounded-md bg-ink shadow-[0_24px_60px_-20px_rgba(15,15,15,0.45)] md:mt-12"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(250, 246, 238, 0.05) 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <div className="relative p-8 md:p-10 lg:p-14">
                            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cream/50 md:text-[11px]">
                                <span>{dict.darkBlock.metaProject}</span>
                                <span className="text-cream/30">//</span>
                                <span>{dict.darkBlock.metaYear}</span>
                                <span className="text-cream/30">//</span>
                                <span className="text-burnt-orange">
                                    {dict.darkBlock.metaProduction}
                                </span>
                            </div>

                            <h3 className="text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-5xl lg:text-6xl">
                                {dict.darkBlock.projectName}
                            </h3>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cream/70 md:text-base">
                                {dict.darkBlock.tagline}
                            </p>

                            <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-6 md:mt-12 md:gap-x-5 lg:mt-14 lg:gap-x-7">
                                <StatBlock
                                    value={28}
                                    suffix="K+"
                                    label={dict.darkBlock.statsLabels.lines}
                                />
                                <Separator />
                                <StatBlock
                                    value={30}
                                    suffix="+"
                                    label={dict.darkBlock.statsLabels.screens}
                                />
                                <Separator />
                                <StatBlock
                                    value={6}
                                    label={dict.darkBlock.statsLabels.modules}
                                />
                                <Separator />
                                <StatBlock
                                    value={1}
                                    label={dict.darkBlock.statsLabels.time}
                                />
                            </div>
                        </div>

                        <div className="relative overflow-hidden border-t border-cream/10 py-3">
                            <div
                                className="animate-marquee flex whitespace-nowrap"
                                aria-hidden
                            >
                                {[...dict.darkBlock.techSpecs, ...dict.darkBlock.techSpecs].map(
                                    (spec, i) => (
                                        <span key={i} className="flex items-center">
                                            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cream/55 md:text-[11px]">
                                                {spec}
                                            </span>
                                            <span className="mx-5 font-mono text-[10px] text-cream/25 md:mx-7 md:text-[11px]">
                        //
                                            </span>
                                        </span>
                                    ),
                                )}
                            </div>
                            <span className="sr-only">
                                {dict.darkBlock.techSpecs.join(", ")}.
                            </span>
                        </div>
                    </motion.div>

                    {/* 3 surfaces */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-10 grid grid-cols-1 gap-5 md:mt-12 lg:grid-cols-3 lg:gap-6"
                    >
                        {dict.surfaces.map((surface, i) => (
                            <SurfaceCard
                                key={surface.id}
                                id={surface.id}
                                number={String(i + 1).padStart(2, "0")}
                                icon={SURFACE_ICONS[i]}
                                title={surface.title}
                                tagline={surface.tagline}
                                bullets={surface.bullets}
                                highlight={surface.highlight}
                                screenshots={surface.screenshots}
                            />
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 md:mt-14">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-stone/70">
                                {dict.techStackLabel}
                            </span>
                            <span className="h-px flex-1 bg-ink/10" />
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {dict.techStackPills.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-ink/15 bg-white/60 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-stone"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.aside
                        variants={itemVariants}
                        className="mt-10 max-w-3xl border-l-2 border-burnt-orange/50 pl-5 md:mt-12"
                    >
                        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                            {dict.productizedLabel}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-stone md:text-[15px]">
                            {dict.productizedNote}
                        </p>
                    </motion.aside>
                </motion.div>
            </div>
        </section>
    );
}

/* ============================================================
   Sub-components — dark block
   ============================================================ */

function Separator() {
    return (
        <span
            aria-hidden
            className="font-mono text-3xl font-light text-cream/20 md:text-4xl lg:text-5xl"
        >
      //
        </span>
    );
}

function StatBlock({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix?: string;
    label: string;
}) {
    return (
        <div className="flex flex-col">
            <span className="text-5xl font-bold leading-none tabular-nums text-cream md:text-6xl lg:text-7xl">
                <AnimatedCounter to={value} suffix={suffix} />
            </span>
            <span className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cream/50 md:text-[11px]">
                {label}
            </span>
        </div>
    );
}

/* ============================================================
   Surface card — idle content + hover reveal screenshots stack
   ============================================================ */

const screenshotPositions = [
    { top: "0%", left: "0%", rotate: -3.5, z: 1 },
    { top: "33%", left: "22%", rotate: 2.5, z: 2 },
    { top: "65%", left: "4%", rotate: -1.5, z: 3 },
];

interface SurfaceCardProps {
    id: string;
    number: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    bullets: string[];
    highlight: string;
    screenshots: string[];
}

function SurfaceCard({
    id,
    number,
    icon: Icon,
    title,
    tagline,
    bullets,
    highlight,
    screenshots,
}: SurfaceCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.article
            id={id}
            variants={cardVariants}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex min-h-[520px] flex-col scroll-mt-24 overflow-hidden rounded-md border-[1.5px] border-ink/15 bg-white/65 backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-500 hover:border-ink/30 hover:bg-white/85 hover:shadow-[0_20px_45px_-12px_rgba(15,15,15,0.22)]"
        >
            {/* IDLE LAYER */}
            <div
                className={[
                    "relative z-10 flex flex-1 flex-col p-7 transition-opacity duration-300 ease-out",
                    hovered ? "pointer-events-none opacity-0" : "opacity-100",
                ].join(" ")}
            >
                <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex items-center justify-center rounded-md bg-burnt-orange/10 p-3">
                        <Icon
                            className="h-6 w-6 text-burnt-orange"
                            strokeWidth={2}
                            aria-hidden
                        />
                    </div>
                    <span className="font-mono text-[10px] font-medium tabular-nums tracking-[0.16em] text-stone/60">
            / {number}
                    </span>
                </div>

                <div className="mb-4 h-px w-full bg-ink/10" />

                <h4 className="mb-1.5 text-xl font-bold leading-tight tracking-tight text-ink lg:text-2xl">
                    {title}
                </h4>

                <p className="mb-5 text-sm italic leading-relaxed text-stone">
                    {tagline}
                </p>

                <ul className="mb-5 flex-1 space-y-2.5">
                    {bullets.map((bullet, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink"
                        >
                            <span
                                aria-hidden
                                className="mt-[0.6rem] inline-block h-[1.5px] w-3 flex-shrink-0 bg-burnt-orange/70"
                            />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto border-t border-ink/10 pt-4">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-burnt-orange">
                        {highlight}
                    </span>
                </div>
            </div>

            {/* HOVER LAYER — mini header + screenshots */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        key="hover-layer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 z-20 overflow-hidden"
                    >
                        {/* Mini header pinned top-left */}
                        <div className="absolute left-5 top-5 z-30 flex items-center gap-2.5">
                            <div className="inline-flex items-center justify-center rounded-md bg-burnt-orange/15 p-1.5">
                                <Icon
                                    className="h-3.5 w-3.5 text-burnt-orange"
                                    strokeWidth={2.5}
                                    aria-hidden
                                />
                            </div>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                                {title}
                            </span>
                            <span className="font-mono text-[9px] tabular-nums tracking-[0.16em] text-stone/50">
                / {number}
                            </span>
                        </div>

                        {/* Screenshots stack */}
                        <div className="absolute inset-x-3 bottom-3 top-14">
                            {screenshots.map((src, i) => {
                                const pos = screenshotPositions[i];
                                return (
                                    <motion.img
                                        key={src}
                                        src={src}
                                        alt=""
                                        loading="lazy"
                                        initial={{
                                            opacity: 0,
                                            y: 28,
                                            scale: 0.92,
                                            rotate: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            rotate: pos.rotate,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 16,
                                            scale: 0.95,
                                            transition: { duration: 0.18 },
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.08 + i * 0.08,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="absolute rounded-md border border-ink/15 shadow-[0_18px_36px_-12px_rgba(0,0,0,0.45)]"
                                        style={{
                                            top: pos.top,
                                            left: pos.left,
                                            width: "78%",
                                            zIndex: pos.z,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}
