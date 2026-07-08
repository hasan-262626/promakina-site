import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { CookiePreferences } from "./components/cookie-preferences";
import {
  FloatingWhatsApp,
  MobileStickyCta,
  SiteFooterCta,
} from "./components/site-footer-cta";
import { GlobalContactEventTracker } from "./components/global-contact-event-tracker";
import { SiteHeader } from "./components/site-header";
import { TextNormalizer } from "./components/text-normalizer";
import { siteContact, siteSocialSameAs } from "./lib/site-contact";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

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
    title: "Endüstriyel Tesis ve Makina Üretimi",
    description:
      "Gübre, kompost, biyogaz, geri dönüşüm, madencilik ve endüstriyel proses tesisleri için anahtar teslim mühendislik, makina imalatı ve tesis kurulum çözümleri.",
    url: "https://www.promakina.com.tr",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.promakina.com.tr/images/01-genel/fabrika1.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Makina endüstriyel tesis ve makina çözümleri",
      },
    ],
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

// Sabit ID yerine ortam değişkeni; tanımlı değilse mevcut kurulum korunur.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NJT8ZQPC";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

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
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: siteContact.phoneDisplay,
    email: siteContact.email,
    sameAs: siteSocialSameAs,
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
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${montserrat.variable} font-sans`}>
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
        <GlobalContactEventTracker />
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
