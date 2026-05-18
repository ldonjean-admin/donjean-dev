"use client";

import {
    Bot,
    FolderKanban,
    Home,
    Settings,
    Sparkles,
    Users,
    Zap,
} from "lucide-react";

/**
 * OperationsMockup — Brand v3 cream dominant.
 *
 * Glass d'accents adapted to cream:
 *   - outer card  : bg-white/70 backdrop-blur-xl border-ink/10 (frosted glass)
 *   - corner glow : radial burnt-orange overlay (depth)
 *   - sidebar     : white-tinted glass surface, separated
 *   - KPI cards   : solid white surfaces for legibility
 *   - AI Suggest  : burnt-orange glass highlight + inner glow
 *   - text        : ink for body, stone for muted, burnt-orange for accents
 *
 * Rotation handled by parent (mockupVariants in hero.tsx).
 */
export function OperationsMockup() {
    return (
        <div className="relative w-full max-w-[520px]">
            {/* Corner orange glow — radial gradient overlay */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                    background:
                        "radial-gradient(circle at 15% 10%, rgba(217,119,87,0.22) 0%, rgba(217,119,87,0.08) 30%, transparent 65%)",
                }}
            />

            {/* Main glass card */}
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-[0_25px_60px_-15px_rgba(15,15,15,0.18)] backdrop-blur-xl">
                <ChromeBar />

                <div className="flex">
                    <Sidebar />

                    <div className="flex-1 space-y-3 p-4">
                        <Header />
                        <KpiRow />
                        <ProjectsRow />
                        <AiSuggestionPanel />
                        <ActivityFeed />
                        <TeamFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================================================
   Chrome bar — window dots + URL tracker
   ============================================================ */
function ChromeBar() {
    return (
        <div className="flex items-center gap-3 border-b border-ink/8 bg-cream-deep/60 px-4 py-2.5 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]/70" />
                <span className="size-2.5 rounded-full bg-[#febc2e]/70" />
                <span className="size-2.5 rounded-full bg-[#28c840]/70" />
            </div>

            <div className="ml-2 flex flex-1 items-center justify-between rounded-md border border-ink/8 bg-white/60 px-3 py-1 font-mono text-[10px] text-stone">
                <span>APP.EXAMPLE.COM/OPS</span>
                <span className="flex items-center gap-1.5 text-ink/70">
                    <span className="size-1.5 rounded-full bg-[#22a34a] shadow-[0_0_4px_rgba(34,163,74,0.5)]" />
                    <span className="uppercase tracking-[0.1em]">Active</span>
                </span>
            </div>
        </div>
    );
}

/* ============================================================
   Sidebar — vertical icon strip
   ============================================================ */
function Sidebar() {
    const items = [
        { Icon: Home, active: false },
        { Icon: FolderKanban, active: false },
        { Icon: Users, active: false },
        { Icon: Bot, active: true },
        { Icon: Settings, active: false },
    ];

    return (
        <div className="flex w-11 flex-col items-center gap-1 border-r border-ink/8 bg-cream-deep/50 py-4">
            {items.map(({ Icon, active }, i) => (
                <button
                    key={i}
                    type="button"
                    className={`relative flex size-8 items-center justify-center rounded-md transition-colors ${active
                            ? "bg-burnt-orange/15 text-burnt-orange shadow-[0_0_18px_-4px_rgba(217,119,87,0.6)]"
                            : "text-stone hover:text-ink"
                        }`}
                >
                    <Icon className="size-4" />
                    {active && (
                        <span
                            className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-r-full bg-burnt-orange"
                            aria-hidden
                        />
                    )}
                </button>
            ))}
        </div>
    );
}

/* ============================================================
   Header — breadcrumb + greeting + time
   ============================================================ */
function Header() {
    return (
        <div className="flex items-start justify-between">
            <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone">
                    <span className="text-ink/60">HOME</span>
                    <span className="mx-1 text-stone/60">/</span>
                    <span className="text-ink/60">OPERATIONS</span>
                    <span className="mx-1 text-stone/60">/</span>
                    <span className="text-burnt-orange">TODAY</span>
                </div>
                <div className="mt-1 text-base font-bold text-ink">
                    Good morning, Lucas
                    <span className="ml-1.5 align-middle text-sm">👋</span>
                </div>
            </div>
            <div className="font-mono text-xs tabular-nums text-stone">12:42</div>
        </div>
    );
}

/* ============================================================
   KPI row — 4 micro-cards (solid white for legibility)
   ============================================================ */
function KpiRow() {
    const kpis = [
        { label: "PROJECTS", value: "5", delta: "+2", deltaPositive: true },
        { label: "REVENUE", value: "R$24K", delta: "+12%", deltaPositive: true },
        { label: "MEMBERS", value: "30", delta: null, deltaPositive: null },
        {
            label: "AI TASKS",
            value: "47",
            delta: null,
            deltaPositive: null,
            icon: Zap,
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-1.5">
            {kpis.map((k) => (
                <div
                    key={k.label}
                    className="rounded-md border border-ink/8 bg-white/80 px-2 py-2"
                >
                    <div className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.16em] text-stone">
                        {k.label}
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-sm font-bold tabular-nums text-ink">
                            {k.value}
                        </span>
                        {k.icon && (
                            <k.icon className="size-3 text-burnt-orange" aria-hidden />
                        )}
                        {k.delta && (
                            <span
                                className={`font-mono text-[9px] tabular-nums ${k.deltaPositive ? "text-emerald-600" : "text-rose-600"
                                    }`}
                            >
                                {k.delta}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ============================================================
   Projects row — 3 progress bars in glass channels
   ============================================================ */
function ProjectsRow() {
    const projects = [
        { name: "AURORA", value: 80 },
        { name: "VERANA", value: 60 },
        { name: "CAMINHOS", value: 45 },
    ];

    return (
        <div className="space-y-1.5 rounded-md border border-ink/8 bg-white/60 p-2.5">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-stone">
                <span>ACTIVE PROJECTS</span>
                <span className="text-stone/70">3 / 6</span>
            </div>
            {projects.map((p) => (
                <div key={p.name} className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                        <span className="font-medium text-ink">{p.name}</span>
                        <span className="font-mono tabular-nums text-stone">
                            {p.value}%
                        </span>
                    </div>
                    {/* Glass channel ink-tinted + neon burnt-orange fill */}
                    <div className="h-1 overflow-hidden rounded-full bg-ink/[0.08]">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-burnt-orange to-orange-glow shadow-[0_0_6px_rgba(217,119,87,0.6)]"
                            style={{ width: `${p.value}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ============================================================
   AI Suggestion panel — orange glass highlight, inner glow
   ============================================================ */
function AiSuggestionPanel() {
    return (
        <div className="relative rounded-md border border-burnt-orange/30 bg-burnt-orange/[0.08] p-2.5 shadow-[inset_0_0_20px_rgba(217,119,87,0.12)] backdrop-blur-md">
            <div className="flex items-start gap-2">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-burnt-orange/20">
                    <Sparkles className="size-3 text-burnt-orange" />
                </div>

                <div className="flex-1">
                    <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-burnt-orange">
                        AI SUGGESTION
                    </div>
                    <div className="mt-0.5 text-[11px] leading-snug text-ink">
                        Auto-create payment record for{" "}
                        <span className="font-semibold">Aurora invoice #0006</span>?
                    </div>

                    <div className="mt-2 flex items-center gap-1.5">
                        <button
                            type="button"
                            className="rounded-md border border-burnt-orange/50 bg-burnt-orange px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-cream"
                        >
                            Apply
                        </button>
                        <button
                            type="button"
                            className="rounded-md border border-ink/10 bg-white/60 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-stone"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================================================
   Activity feed — recent events
   ============================================================ */
function ActivityFeed() {
    const events = [
        { time: "12:38", text: "Sara approved contract Verana" },
        { time: "12:31", text: "Aurora pdf invoice sent" },
        { time: "12:18", text: "AI drafted Q2 report" },
    ];

    return (
        <div className="space-y-1 rounded-md border border-ink/8 bg-white/60 p-2.5">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-stone">
                <span>RECENT ACTIVITY</span>
                <span className="text-stone/70">3 events</span>
            </div>
            {events.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px]">
                    <span className="font-mono tabular-nums text-stone">{e.time}</span>
                    <span className="size-0.5 rounded-full bg-burnt-orange/70" />
                    <span className="text-ink/85">{e.text}</span>
                </div>
            ))}
        </div>
    );
}

/* ============================================================
   Team footer — overlapping avatars + active count
   ============================================================ */
function TeamFooter() {
    const avatars = ["A", "B", "C"];
    const colors = ["bg-burnt-orange/30", "bg-ink/15", "bg-emerald-500/30"];

    return (
        <div className="flex items-center justify-between border-t border-ink/8 pt-2">
            <div className="flex items-center">
                {avatars.map((letter, i) => (
                    <div
                        key={i}
                        className={`flex size-5 items-center justify-center rounded-full border border-white ${colors[i]} font-mono text-[9px] font-bold text-ink/80`}
                        style={{ marginLeft: i === 0 ? 0 : "-6px", zIndex: 3 - i }}
                    >
                        {letter}
                    </div>
                ))}
                <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-stone">
                    +27 ACTIVE
                </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-stone/70">
                ONLINE
            </span>
        </div>
    );
}