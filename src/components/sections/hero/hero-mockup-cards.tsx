"use client";

import { motion, type Variants } from "motion/react";

/* ============================================================
   HeroMockupCards — 2 floating glass UI mockup cards on the
   right side of the Hero. Operations Dashboard + Revenue Chart
   preview, with overlapping positions and contrasting tilts.
   ============================================================ */

const card1Variants: Variants = {
    hidden: { opacity: 0, x: 60, rotate: -2 },
    visible: {
        opacity: 1,
        x: 0,
        rotate: -2,
        transition: { duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const card2Variants: Variants = {
    hidden: { opacity: 0, x: 60, rotate: 1.5 },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 1.5,
        transition: { duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

interface HeroMockupCardsProps {
    sceneReady: boolean;
}

export function HeroMockupCards({ sceneReady }: HeroMockupCardsProps) {
    return (
        <div className="relative h-[460px] w-[330px]">
            {/* Card 1 — Operations Dashboard, top-right, -2° */}
            <motion.div
                initial="hidden"
                animate={sceneReady ? "visible" : "hidden"}
                variants={card1Variants}
                whileHover={{
                    y: -4,
                    rotate: -2,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                }}
                className="absolute right-0 top-0 z-10 cursor-default"
            >
                <OperationsCard />
            </motion.div>

            {/* Card 2 — Revenue Chart, bottom-left offset, +1.5° */}
            <motion.div
                initial="hidden"
                animate={sceneReady ? "visible" : "hidden"}
                variants={card2Variants}
                whileHover={{
                    y: -4,
                    rotate: 1.5,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                }}
                className="absolute right-[50px] top-[200px] z-20 cursor-default"
            >
                <RevenueCard />
            </motion.div>
        </div>
    );
}

/* ============================================================
   Operations Dashboard mockup card
   ============================================================ */

function OperationsCard() {
    return (
        <div className="w-[280px] overflow-hidden rounded-lg border-[1.5px] border-ink/15 bg-white/85 shadow-[0_8px_30px_-8px_rgba(15,15,15,0.18)] backdrop-blur-md">
            <WindowChrome url="operations.donjean.dev" />
            <div className="p-4">
                {/* Greeting */}
                <div className="mb-3">
                    <h4 className="text-sm font-bold leading-tight text-ink">
                        Good morning, Lucas
                    </h4>
                    <p className="text-[10px] text-stone">Saturday, May 16</p>
                </div>

                {/* Mini stat cards row */}
                <div className="mb-3 grid grid-cols-3 gap-1.5">
                    <MiniStat value="5" label="projects" />
                    <MiniStat value="24K" label="revenue" prefix="€" />
                    <MiniStat value="30" label="members" />
                </div>

                {/* Project progress bars */}
                <div className="space-y-2">
                    <ProgressRow label="SKEMA platform" pct={80} />
                    <ProgressRow label="Cervejaria Aurora" pct={60} />
                    <ProgressRow label="Fintech Verana" pct={45} />
                </div>
            </div>
        </div>
    );
}

function MiniStat({
    value,
    label,
    prefix,
}: {
    value: string;
    label: string;
    prefix?: string;
}) {
    return (
        <div className="rounded border border-ink/10 bg-cream-soft p-1.5">
            <div className="text-[9px] uppercase tracking-wider text-stone">
                {label}
            </div>
            <div className="text-sm font-bold tabular-nums leading-tight text-ink">
                {prefix && (
                    <span className="mr-0.5 text-[10px] font-medium text-stone">
                        {prefix}
                    </span>
                )}
                {value}
            </div>
        </div>
    );
}

function ProgressRow({ label, pct }: { label: string; pct: number }) {
    return (
        <div>
            <div className="mb-0.5 flex justify-between text-[9px]">
                <span className="truncate text-stone">{label}</span>
                <span className="font-medium tabular-nums text-ink">{pct}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-cream-deep">
                <div
                    className="h-full rounded-full bg-burnt-orange"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

/* ============================================================
   Revenue Chart mockup card
   ============================================================ */

function RevenueCard() {
    return (
        <div className="w-[260px] overflow-hidden rounded-lg border-[1.5px] border-ink/15 bg-white/85 shadow-[0_8px_30px_-8px_rgba(15,15,15,0.18)] backdrop-blur-md">
            <WindowChrome url="finance.donjean.dev" />
            <div className="p-4">
                {/* Section label row */}
                <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-stone">
                        Revenue 2026
                    </span>
                    <span className="font-mono text-[9px] tabular-nums text-stone/70">
                        YTD
                    </span>
                </div>

                {/* Big number + YoY */}
                <div className="mb-3">
                    <div className="text-lg font-bold tabular-nums leading-tight text-ink">
                        <span className="mr-1 text-xs font-medium text-stone">€</span>
                        96 500
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-burnt-orange">
                        <span className="tabular-nums">+24%</span>
                        <span className="text-stone/70">YoY</span>
                        <span aria-hidden>▲</span>
                    </div>
                </div>

                {/* 12-bar chart */}
                <BarChart />

                {/* Shimmer divider */}
                <div
                    aria-hidden
                    className="my-3 h-px w-full bg-gradient-to-r from-transparent via-burnt-orange/40 to-transparent"
                />

                {/* Top transactions */}
                <div className="space-y-1.5">
                    <TransactionRow client="Fintech Verana" amount="24K" />
                    <TransactionRow client="Cervejaria Aurora" amount="18K" />
                </div>
            </div>
        </div>
    );
}

function BarChart() {
    // 12 ascending bar heights (% of chart container), with natural variation
    const heights = [22, 28, 24, 35, 42, 38, 52, 58, 64, 70, 82, 95];
    const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

    return (
        <div>
            <div className="flex h-10 items-end justify-between gap-0.5">
                {heights.map((h, i) => (
                    <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-burnt-orange/70"
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>
            <div className="mt-1 flex items-center justify-between gap-0.5">
                {months.map((m, i) => (
                    <span
                        key={i}
                        className="flex-1 text-center font-mono text-[8px] text-stone/60"
                    >
                        {m}
                    </span>
                ))}
            </div>
        </div>
    );
}

function TransactionRow({
    client,
    amount,
}: {
    client: string;
    amount: string;
}) {
    return (
        <div className="flex items-center justify-between text-[10px]">
            <span className="truncate text-stone">{client}</span>
            <span className="flex items-baseline gap-0.5 font-medium tabular-nums text-ink">
                <span className="text-burnt-orange">+</span>
                <span className="text-[8px] font-normal text-stone">€</span>
                {amount}
            </span>
        </div>
    );
}

/* ============================================================
   Shared window chrome — Mac-style 3 dots + URL bar
   ============================================================ */

function WindowChrome({ url }: { url: string }) {
    return (
        <div className="flex items-center gap-1.5 border-b border-ink/10 bg-cream-deep/40 px-3 py-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]/40" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/40" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]/40" />
            <span className="ml-2 truncate font-mono text-[10px] text-stone">
                {url}
            </span>
        </div>
    );
}