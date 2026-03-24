import type { Metadata } from "next";
import { CookiePreferences } from "./components/cookie-preferences";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Progroup | Danışmanlık ve Makina Çözümleri",
  description:
    "Progroup için hazırlanan kurumsal ana sayfa: danışmanlık, çözümler, makinalar ve iletişim bölümleri.",
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
        <CookiePreferences />
      </body>
    </html>
  );
}
