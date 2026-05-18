"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

/* ============================================================
   ContactModal — reusable contact entry point

   Accepts a localized dictionary for all UI strings. Rendered
   via React Portal at document.body level to escape stacking
   contexts of motion components in the Hero.
   ============================================================ */

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
    dict: Dictionary["contactModal"];
}

export function ContactModal({ open, onClose, dict }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Cal.eu setup
    useEffect(() => {
        (async () => {
            const cal = await getCalApi({
                namespace: "discovery",
                embedJsUrl: "https://app.cal.eu/embed/embed.js",
            });
            cal("ui", {
                cssVarsPerTheme: {
                    light: { "cal-brand": "#d97757" },
                    dark: { "cal-brand": "#d97757" },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    // ESC key to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Body scroll lock
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-ink/50 backdrop-blur-md"
                        aria-hidden
                    />

                    {/* Modal content */}
                    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="contact-modal-title"
                            initial={{ opacity: 0, scale: 0.96, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 16 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="pointer-events-auto w-full max-w-2xl overflow-hidden rounded-md border-[1.5px] border-ink/15 bg-cream shadow-[0_30px_80px_-20px_rgba(15,15,15,0.5)]"
                        >
                            {/* Header */}
                            <div className="relative border-b border-ink/10 px-7 pt-6 pb-5">
                                <div className="mb-2 flex items-center gap-3">
                                    <span className="accent-line" aria-hidden />
                                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-burnt-orange">
                                        {dict.label}
                                    </span>
                                </div>
                                <h3
                                    id="contact-modal-title"
                                    className="text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl"
                                >
                                    {dict.title}
                                </h3>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label={dict.closeLabel}
                                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-stone transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* 2 contact cards */}
                            <div className="grid grid-cols-1 gap-3 p-7 md:grid-cols-2">
                                {/* Book a call */}
                                <button
                                    type="button"
                                    data-cal-namespace="discovery"
                                    data-cal-link="lucas-donjean/discovery"
                                    data-cal-origin="https://cal.eu"
                                    data-cal-config='{"layout":"month_view"}'
                                    onClick={onClose}
                                    className="group flex flex-col items-start gap-2.5 rounded-md border-[1.5px] border-ink/15 bg-white/65 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-burnt-orange/40 hover:bg-white/85 hover:shadow-[0_14px_30px_-12px_rgba(217,119,87,0.22)]"
                                >
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-burnt-orange/15 transition-colors duration-300 group-hover:bg-burnt-orange/25">
                                        <Phone
                                            className="h-4 w-4 text-burnt-orange"
                                            strokeWidth={2}
                                            aria-hidden
                                        />
                                    </div>
                                    <h4 className="text-base font-bold leading-tight tracking-tight text-ink">
                                        {dict.bookCall.title}
                                    </h4>
                                    <p className="text-[13px] leading-relaxed text-stone">
                                        {dict.bookCall.description}
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-burnt-orange">
                                        {dict.bookCall.footer}
                                        <ArrowRight
                                            className="size-3 transition-transform duration-300 group-hover:translate-x-0.5"
                                            aria-hidden
                                        />
                                    </span>
                                </button>

                                {/* Email me */}
                                <a
                                    href="mailto:lucas@donjean.dev?subject=Project%20inquiry"
                                    onClick={onClose}
                                    className="group flex flex-col items-start gap-2.5 rounded-md border-[1.5px] border-ink/15 bg-white/65 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-burnt-orange/40 hover:bg-white/85 hover:shadow-[0_14px_30px_-12px_rgba(217,119,87,0.22)]"
                                >
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-burnt-orange/15 transition-colors duration-300 group-hover:bg-burnt-orange/25">
                                        <Mail
                                            className="h-4 w-4 text-burnt-orange"
                                            strokeWidth={2}
                                            aria-hidden
                                        />
                                    </div>
                                    <h4 className="text-base font-bold leading-tight tracking-tight text-ink">
                                        {dict.sendEmail.title}
                                    </h4>
                                    <p className="text-[13px] leading-relaxed text-stone">
                                        {dict.sendEmail.description}
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-burnt-orange">
                                        {dict.sendEmail.footer}
                                        <ArrowRight
                                            className="size-3 transition-transform duration-300 group-hover:translate-x-0.5"
                                            aria-hidden
                                        />
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body,
    );
}
