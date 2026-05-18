import { getDictionary } from "@/dictionaries/get-dictionary";
import { Navbar } from "@/components/navigation/navbar";

/* ============================================================
   /legal/layout — wraps the legal page

   The legal page is FR-only (mentions légales = legally FR).
   We mount the Navbar with the FR dictionary hardcoded. The
   language switcher in the navbar still works — clicking EN/PT
   from /legal navigates the user to /en or /pt home page.
   ============================================================ */

export default async function LegalLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    const dict = await getDictionary("fr");

    return (
        <>
            <Navbar
                navDict={dict.nav}
                contactDict={dict.contactModal}
                switcherDict={dict.languageSwitcher}
                currentLocale="fr"
            />
            {children}
        </>
    );
}
