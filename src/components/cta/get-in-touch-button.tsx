"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "./contact-modal";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   GetInTouchButton — opens the ContactModal

   3 variants:
   - primary  → solid burnt-orange (Hero, About, Final CTA)
   - secondary → light bg with ink text (offer cards on cream bg)
   - navbar   → cream/5 bg with cream text (dark navbar bg)
   ============================================================ */

interface GetInTouchButtonProps {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "navbar";
    className?: string;
    dict: Dictionary["contactModal"];
}

export function GetInTouchButton({
    children = "Get in touch",
    variant = "primary",
    className = "",
    dict,
}: GetInTouchButtonProps) {
    const [open, setOpen] = useState(false);

    const baseClasses =
    "group inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-all duration-300";

    const variantClasses =
    variant === "primary"
        ? "px-6 py-3 border border-burnt-orange bg-burnt-orange text-cream hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-[0_8px_30px_-5px_rgba(217,119,87,0.5)]"
        : variant === "secondary"
            ? "px-5 py-2 text-sm border border-ink/20 bg-white/60 text-ink hover:-translate-y-0.5 hover:border-burnt-orange hover:bg-burnt-orange hover:text-cream hover:shadow-[0_8px_22px_-6px_rgba(217,119,87,0.4)]"
            : "px-4 py-1.5 text-xs border border-cream/25 bg-cream/5 text-cream backdrop-blur-md hover:border-burnt-orange hover:bg-burnt-orange hover:text-cream hover:shadow-[0_6px_18px_-6px_rgba(217,119,87,0.5)] md:text-sm md:px-5 md:py-2";

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`${baseClasses} ${variantClasses} ${className}`}
            >
                <span>{children}</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <ContactModal open={open} onClose={() => setOpen(false)} dict={dict} />
        </>
    );
}
