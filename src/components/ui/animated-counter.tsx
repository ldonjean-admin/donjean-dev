"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    to: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    once?: boolean;
    /**
     * Animation mode :
     *  - "linear" (default) — smooth count-up from 0 to `to`
     *  - "roulette" — rapid random digit cycling (~70% of duration) then settles
     *    onto the target (terminal/dashboard "loading" feel).
     */
    mode?: "linear" | "roulette";
}

export function AnimatedCounter({
    to,
    prefix = "",
    suffix = "",
    duration = 1.5,
    once = true,
    mode = "linear",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once });
    const reduceMotion = useReducedMotion();
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        // Respect user preference — set value immediately, skip animation
        if (reduceMotion) {
            setDisplayValue(to);
            return;
        }

        let intervalId: ReturnType<typeof setInterval> | null = null;
        let controls: ReturnType<typeof animate> | null = null;

        if (mode === "roulette") {
            const roulettePhaseMs = duration * 0.65 * 1000;
            const startTime = Date.now();
            let lastRandomValue = 0;

            intervalId = setInterval(() => {
                const elapsed = Date.now() - startTime;
                if (elapsed >= roulettePhaseMs) {
                    if (intervalId) clearInterval(intervalId);
                    intervalId = null;
                    // Phase 2: smooth settle from last random to target
                    controls = animate(lastRandomValue, to, {
                        duration: duration * 0.35,
                        ease: [0.22, 1, 0.36, 1],
                        onUpdate: (value) => setDisplayValue(Math.floor(value)),
                    });
                } else {
                    // Phase 1: rapid random cycling within a plausible range
                    const randomMax = Math.max(to + 10, 99);
                    lastRandomValue = Math.floor(Math.random() * randomMax);
                    setDisplayValue(lastRandomValue);
                }
            }, 70);
        } else {
            // Linear count-up
            controls = animate(0, to, {
                duration,
                ease: [0.22, 1, 0.36, 1],
                onUpdate: (value) => setDisplayValue(Math.floor(value)),
            });
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            if (controls) controls.stop();
        };
    }, [isInView, to, duration, mode, reduceMotion]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}