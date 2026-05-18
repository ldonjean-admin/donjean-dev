"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Smooth scroll provider — wraps the entire app to give buttery-smooth
 * scrolling across every page and section.
 *
 * Lenis intercepts wheel/touch events and animates scroll with a custom
 * easing curve. Once active, every scroll-triggered animation, every
 * anchor link, every "back to top" feels like a premium product.
 *
 * `root` mounts Lenis on the <html> element so it controls page-level scroll.
 * Tuning:
 *   - `duration: 1.2` — slightly longer than default for a more deliberate feel
 *   - `easing` — exponential ease-out, the most cinematic curve
 *   - `smoothWheel: true` — apply smoothing on mouse wheel (default but explicit)
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}