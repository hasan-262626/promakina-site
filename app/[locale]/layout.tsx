import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import { CookiePreferences } from "../(tr)/components/cookie-preferences";
import { GlobalContactEventTracker } from "../(tr)/components/global-contact-event-tracker";
import { SiteHeader } from "../(tr)/components/site-header";
import {
  FloatingWhatsApp,
  MobileStickyCta,
  SiteFooterCta,
} from "../(tr)/components/site-footer-cta";
import { siteContact, siteSocialSameAs } from "../(tr)/lib/site-contact";
import { buildFooterModel, buildHeaderModel, getCookieTexts } from "../i18n/chrome";
import { getDictionary } from "../i18n/dictionaries";
import {
  SITE_URL,
  intlLocales,
  isIntlLocale,
  localeMeta,
  type IntlLocale,
} from "../i18n/config";
import "../(tr)/globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Industrial Process Machinery Manufacturer | Pro Makina",
    template: "%s | Pro Makina",
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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NJT8ZQPC";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export function generateStaticParams() {
  return intlLocales.map((locale) => ({ locale }));
}

export default async function IntlLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  // Geçersiz segmentlerde (ör. /xyz) 404 sayfası İngilizce iskeletle render edilir.
  const locale: IntlLocale = isIntlLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);
  const meta = localeMeta[locale];
  const headerModel = buildHeaderModel(locale);
  const footerModel = buildFooterModel(locale);
  const cookieTexts = getCookieTexts(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: dict.footer.aboutText,
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
    sameAs: siteSocialSameAs,
  };

  return (
    <html lang={meta.lang} dir={meta.dir}>
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
      <body
        className={`${montserrat.variable} ${notoSansArabic.variable} font-sans ${
          locale === "ar" ? "[font-family:var(--font-arabic),var(--font-montserrat),sans-serif]" : ""
        }`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GlobalContactEventTracker />
        <SiteHeader model={headerModel} />
        {children}
        <SiteFooterCta model={footerModel} />
        <MobileStickyCta model={footerModel} />
        <FloatingWhatsApp model={footerModel} />
        <CookiePreferences texts={cookieTexts} />
      </body>
    </html>
  );
}
