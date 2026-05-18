"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GetInTouchButton } from "@/components/cta/get-in-touch-button";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import type { Dictionary, Locale } from "@/dictionaries/types";

/* ============================================================
   Navbar — sticky, dark, 4-zone composition

   Four zones now:
   - Left: wordmark (DONJEAN.dev)
   - Center-left: nav links (hidden on mobile)
   - Center-right: language switcher EN · FR · PT
   - Right: CTA button

   Receives the localized nav dict for link labels, the contact
   modal dict (passed down to GetInTouchButton → ContactModal),
   and the current locale.

   Visibility: on /[lang] home, navbar appears after scroll out
   of hero (~85vh). On any other route (e.g. /legal), it's
   always visible.
   ============================================================ */

interface NavbarProps {
    navDict: Dictionary["nav"];
    contactDict: Dictionary["contactModal"];
    switcherDict: Dictionary["languageSwitcher"];
    currentLocale: Locale;
}

export function Navbar({
    navDict,
    contactDict,
    switcherDict,
    currentLocale,
}: NavbarProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Navbar is always visible on non-home routes
        const isHome = /^\/(en|fr|pt)\/?$/.test(window.location.pathname);

        if (!isHome) {
            setVisible(true);
            return;
        }

        const computeThreshold = () => window.innerHeight * 0.85;

        const handleScroll = () => {
            setVisible(window.scrollY > computeThreshold());
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const navLinks = [
        { href: `/${currentLocale}#what-i-build`, label: navDict.offers },
        { href: `/${currentLocale}#selected-work`, label: navDict.work },
        { href: `/${currentLocale}#how`, label: navDict.process },
        { href: `/${currentLocale}#about`, label: navDict.about },
    ];

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ y: -64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -64, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-x-0 top-0 z-40 border-b border-cream/10 bg-ink/90 backdrop-blur-md"
                >
                    <div className="section-container flex items-center justify-between gap-4 py-3">
                        {/* Left — Wordmark */}
                        <a
                            href={`/${currentLocale}#hero`}
                            aria-label="Back to top"
                            className="group flex shrink-0 items-baseline"
                        >
                            <span
                                className="font-display font-black uppercase leading-none tracking-[-0.03em] text-cream transition-colors duration-300 group-hover:text-burnt-orange"
                                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
                            >
                DONJEAN
                            </span>
                            <span
                                className="font-mono font-bold lowercase leading-none text-burnt-orange transition-transform duration-300 group-hover:-translate-y-0.5"
                                style={{ fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)" }}
                            >
                .dev
                            </span>
                        </a>

                        {/* Center — Nav links (hidden on mobile) */}
                        <nav
                            className="hidden items-center gap-6 md:flex lg:gap-8"
                            aria-label="Section navigation"
                        >
                            {navLinks.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="group relative font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:text-burnt-orange"
                                >
                                    {label}
                                    <span
                                        aria-hidden
                                        className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-burnt-orange transition-transform duration-300 group-hover:scale-x-100"
                                    />
                                </a>
                            ))}
                        </nav>

                        {/* Right — Language switcher + CTA */}
                        <div className="flex shrink-0 items-center gap-3 md:gap-4">
                            <LanguageSwitcher
                                currentLocale={currentLocale}
                                ariaLabel={switcherDict.ariaLabel}
                            />
                            <GetInTouchButton variant="navbar" dict={contactDict}>
                                {navDict.getInTouch}
                            </GetInTouchButton>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
