import { notFound } from "next/navigation";
import { isValidLocale } from "@/dictionaries/types";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Hero } from "@/components/sections/hero";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { SelectedWork } from "@/components/sections/selected-work";
import { HowIWork } from "@/components/sections/how-i-work";
import { About } from "@/components/sections/about";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

/* ============================================================
   /[lang] — localized home page

   Each section receives its own dict slice. Sections that use
   GetInTouchButton also receive contactDict (passed to the
   modal via the button).
   ============================================================ */

export default async function HomePage({
    params,
}: {
  params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (!isValidLocale(lang)) notFound();

    const dict = await getDictionary(lang);

    return (
        <main>
            <Hero dict={dict.hero} contactDict={dict.contactModal} />
            <WhatIBuild dict={dict.whatIBuild} contactDict={dict.contactModal} />
            <SelectedWork dict={dict.selectedWork} />
            <HowIWork dict={dict.howIWork} />
            <About dict={dict.about} contactDict={dict.contactModal} />
            <FinalCta dict={dict.finalCta} contactDict={dict.contactModal} />
            <Footer dict={dict.footer} sectionLinksDict={dict.nav} />
        </main>
    );
}
