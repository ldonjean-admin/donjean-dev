"use client";

import { motion, type Variants } from "motion/react";
import { useState } from "react";
import { ArrowRight, Bot, Rocket, Zap, type LucideIcon } from "lucide-react";
import { HeroMockupCards } from "./hero/hero-mockup-cards";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GetInTouchButton } from "@/components/cta/get-in-touch-button";
import { DonjeanBrand3D } from "./hero/donjean-brand-3d";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   Animation variants
   ============================================================ */

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE },
    },
};

const wordRevealVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE },
    },
};

// Icons stay in component — paired with dict.servicePills by index
const PILL_ICONS: LucideIcon[] = [Rocket, Zap, Bot];

interface HeroProps {
    dict: Dictionary["hero"];
    contactDict: Dictionary["contactModal"];
}

/* ============================================================
   Hero — épuré single column + wireframe statique
   ============================================================ */

export function Hero({ dict, contactDict }: HeroProps) {
    const [sceneReady, setSceneReady] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-[100svh] overflow-hidden bg-cream dot-grid"
        >
            <NetworkBackground />

            <div className="absolute inset-0 z-[1]">
                <DonjeanBrand3D
                    onSceneReady={() => setSceneReady(true)}
                    sceneReady={sceneReady}
                />
            </div>

            <div className="section-container relative z-10 flex min-h-[100svh] flex-col pt-6 pb-28 md:pt-10 md:pb-32">
                <motion.div
                    className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-stone md:text-xs"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={sceneReady ? "visible" : "hidden"}
                >
                    <span>
                        <span className="text-burnt-orange">{"> "}</span>
                        {dict.topLabel}
                        <span className="cursor-blink ml-0.5 text-burnt-orange">_</span>
                    </span>
                    <span className="tabular-nums">[ 01 / 07 ]</span>
                </motion.div>

                <motion.div
                    className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-burnt-orange/40 to-transparent"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={
                        sceneReady ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
                    }
                    transition={{ duration: 1, delay: 0.3, ease: EASE }}
                    style={{ transformOrigin: "left" }}
                />

                <div className="flex-1" />

                <motion.div
                    className="max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate={sceneReady ? "visible" : "hidden"}
                >
                    <h1
                        className="font-display font-black uppercase leading-[0.92] tracking-tight text-ink"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
                    >
                        <span className="block">
                            {dict.headlineLine1.map((word, i) => (
                                <motion.span
                                    key={`l1-${i}`}
                                    variants={wordRevealVariants}
                                    className="mr-[0.2em] inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block">
                            {dict.headlineLine2.map((word, i) => (
                                <motion.span
                                    key={`l2-${i}`}
                                    variants={wordRevealVariants}
                                    className="mr-[0.2em] inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <motion.span
                                variants={wordRevealVariants}
                                className="inline-block text-burnt-orange"
                            >
                                {dict.headlineEmphasis}
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        variants={fadeUpVariants}
                        className="mt-6 max-w-xl text-base leading-relaxed text-stone md:text-lg"
                    >
                        {dict.subtitle}
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-7 flex flex-wrap gap-2.5"
                    >
                        {dict.servicePills.map((pill, i) => {
                            const Icon = PILL_ICONS[i];
                            return (
                                <a
                                    key={pill.href}
                                    href={pill.href}
                                    className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/40 px-4 py-2 text-xs font-medium text-ink/85 backdrop-blur-md transition-all duration-300 hover:border-burnt-orange/40 hover:bg-white/70 hover:text-ink hover:shadow-[0_0_20px_-5px_rgba(217,119,87,0.3)]"
                                >
                                    <Icon className="size-3.5 text-burnt-orange" />
                                    <span>{pill.title}</span>
                                    <span className="text-stone">·</span>
                                    <span className="font-mono text-stone">{pill.meta}</span>
                                </a>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <GetInTouchButton variant="primary" dict={contactDict}>
                            {dict.ctaPrimary}
                        </GetInTouchButton>
                        <a
                            href="#selected-work"
                            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-5 py-2.5 text-sm font-medium text-ink/70 backdrop-blur-md transition-all duration-300 hover:border-ink/30 hover:bg-white/70 hover:text-ink"
                        >
                            {dict.ctaSecondary}
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-stone"
                    >
                        <StatBracket>
                            <AnimatedCounter
                                to={28}
                                suffix="K+"
                                mode="roulette"
                                duration={1.4}
                                once
                            />
                        </StatBracket>
                        <span className="text-stone/70">{dict.statsLabels.lines}</span>

                        <span className="text-burnt-orange">▪</span>
                        <StatBracket>
                            <AnimatedCounter
                                to={30}
                                suffix="+"
                                mode="roulette"
                                duration={1.2}
                                once
                            />
                        </StatBracket>
                        <span className="text-stone/70">{dict.statsLabels.screens}</span>

                        <span className="text-burnt-orange">▪</span>
                        <StatBracket>
                            <AnimatedCounter to={6} mode="roulette" duration={0.9} once />
                        </StatBracket>
                        <span className="text-stone/70">{dict.statsLabels.modules}</span>

                        <span className="text-burnt-orange">▪</span>
                        <span className="font-bold text-ink">
                            <span className="text-burnt-orange/70">[ </span>
                            {dict.statsValues.timeMonths}
                            <span className="text-burnt-orange/70"> ]</span>
                        </span>
                        <span className="text-stone/70">{dict.statsLabels.time}</span>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-5 h-px w-full max-w-md bg-gradient-to-r from-burnt-orange/40 via-burnt-orange/20 to-transparent"
                    />
                </motion.div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 border-t border-ink/10 bg-cream/70 py-3 backdrop-blur-md">
                <div className="animate-marquee flex whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-stone">
                    {[...dict.marquee, ...dict.marquee].map((item, i) => (
                        <span
                            key={i}
                            className="mx-6 inline-flex shrink-0 items-center gap-3"
                        >
                            {item}
                            <span className="text-burnt-orange/50">·</span>
                        </span>
                    ))}
                </div>
            </div>
            {/* Floating UI mockup cards — Operations + AI Chat, right side, xl+ */}
            <div className="pointer-events-none absolute right-12 top-[58%] z-30 hidden -translate-y-1/2 xl:block">
                <div className="pointer-events-auto">
                    <HeroMockupCards sceneReady={sceneReady} />
                </div>
            </div>
        </section>
    );
}

/* ============================================================
   Helpers
   ============================================================ */

function StatBracket({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-bold text-ink">
            <span className="text-burnt-orange/70">[ </span>
            {children}
            <span className="text-burnt-orange/70"> ]</span>
        </span>
    );
}

function NetworkBackground() {
    const nodes = [
        { x: 12, y: 18 },
        { x: 28, y: 8 },
        { x: 50, y: 22 },
        { x: 72, y: 12 },
        { x: 88, y: 28 },
        { x: 18, y: 42 },
        { x: 42, y: 38 },
        { x: 65, y: 48 },
        { x: 85, y: 55 },
        { x: 22, y: 68 },
        { x: 50, y: 78 },
        { x: 78, y: 72 },
    ];
    const connections: Array<[number, number]> = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [0, 5],
        [2, 6],
        [4, 7],
        [5, 6],
        [6, 7],
        [7, 8],
        [5, 9],
        [6, 10],
        [7, 11],
        [10, 11],
        [9, 10],
    ];

    return (
        <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
        >
            <g stroke="rgba(15, 15, 15, 0.05)" strokeWidth="0.08">
                {connections.map(([a, b], i) => (
                    <line
                        key={i}
                        x1={nodes[a].x}
                        y1={nodes[a].y}
                        x2={nodes[b].x}
                        y2={nodes[b].y}
                    />
                ))}
            </g>
            {nodes.map((n, i) => (
                <circle
                    key={i}
                    cx={n.x}
                    cy={n.y}
                    r="0.3"
                    fill="rgba(15, 15, 15, 0.15)"
                />
            ))}
        </svg>
    );
}
