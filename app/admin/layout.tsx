import type { Metadata } from "next";
import "./admin.css";

/** Yönetim paneli: arama motorlarından gizli, önbelleğe alınmaz, her istekte sunucuda üretilir (CSP nonce). */
export const metadata: Metadata = {
  title: { default: "Yönetim Paneli", template: "%s | Pro Makina Yönetim" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const dynamic = "force-dynamic";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
