import type { Metadata } from "next";
import Script from "next/script";
import { CookiePreferences } from "./components/cookie-preferences";
import {
  FloatingWhatsApp,
  MobileStickyCta,
  SiteFooterCta,
} from "./components/site-footer-cta";
import { SiteHeader } from "./components/site-header";
import { TextNormalizer } from "./components/text-normalizer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.promakina.com.tr"),
  title: {
    default: "Endüstriyel Tesis ve Makina Üretimi | Pro Makina",
    template: "%s | Pro Makina",
  },
  description:
    "Gübre, kompost, biyogaz, geri dönüşüm, madencilik ve endüstriyel proses tesisleri için anahtar teslim mühendislik, makina imalatı ve tesis kurulum çözümleri.",
  keywords: [
    "endüstriyel tesis kurulumu",
    "makina imalatı",
    "gübre üretim tesisi",
    "organomineral gübre tesisi",
    "kompost tesisi",
    "biyogaz tesisi",
    "konveyör sistemleri",
    "kurutma tamburu",
    "granül gübre tesisi",
    "Pro Makina",
  ],
  alternates: {
    canonical: "https://www.promakina.com.tr",
  },
  openGraph: {
    title: "Endüstriyel Tesis ve Makina Üretimi | Pro Makina",
    description:
      "Gübre, kompost, biyogaz, geri dönüşüm, madencilik ve endüstriyel proses tesisleri için anahtar teslim mühendislik, makina imalatı ve tesis kurulum çözümleri.",
    url: "https://www.promakina.com.tr",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: "info@promakina.com.tr",
    telephone: "+90 532 085 01 04",
    sameAs: ["https://www.promakina.com.tr"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: "+90 532 085 01 04",
    email: "info@promakina.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  return (
    <html lang="tr">
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJT8ZQPC');`}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJT8ZQPC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <TextNormalizer />
        <SiteHeader />
        {children}
        <SiteFooterCta />
        <MobileStickyCta />
        <FloatingWhatsApp />
        <CookiePreferences />
      </body>
    </html>
  );
}
