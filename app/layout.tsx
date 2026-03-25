import type { Metadata } from "next";
import { CookiePreferences } from "./components/cookie-preferences";
import { FloatingWhatsApp, SiteFooterCta } from "./components/site-footer-cta";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pro Makina | Danışmanlık ve Makina Çözümleri",
  description:
    "Pro Makina için hazırlanan kurumsal site: danışmanlık, çözümler, makinalar ve iletişim bölümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <SiteHeader />
        {children}
        <SiteFooterCta />
        <FloatingWhatsApp />
        <CookiePreferences />
      </body>
    </html>
  );
}
