"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContact } from "../lib/site-contact";
import { trText } from "../lib/tr-text";
import { CookieSettingsLink } from "./cookie-preferences";
import { SocialLinks } from "./social-links";

type FooterLink = { label: string; href: string; external?: boolean };

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
  /** E-posta, WhatsApp ve çerez ayarları bağlantıları bu sütunun sonuna eklenir. */
  includeContact?: boolean;
};

/**
 * Footer + genel CTA modeli. Model verilmezse Türkçe varsayılanı kullanılır;
 * yabancı diller aynı bileşenleri kendi metinleriyle besler. Tasarım ortaktır.
 */
export type SiteFooterModel = {
  cta: {
    title: string;
    text: string;
    contactLabel: string;
    contactHref: string;
    callLabel: string;
    whatsappQuoteLabel: string;
    phoneLabel: string;
    /** CTA bandının gizleneceği tam path'ler. */
    hideOnExact: string[];
    /** CTA bandının gizleneceği path önekleri. */
    hideOnPrefixes: string[];
    /** WhatsApp/telefon çiftinin gösterileceği tam path (TR'de /hizmetler). */
    whatsappVariantOnExact: string[];
  };
  brandText: string;
  columns: FooterColumn[];
  cookieSettingsLabel: string;
  followTitle: string;
  followText: string;
  rights: string;
  floating: { whatsappAria: string };
  mobileSticky: {
    hideOnExact: string[];
    quoteLabel: string;
    quoteHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

const trFooterModel: SiteFooterModel = {
  cta: {
    title: "Projeniz için teklif veya teknik görüşme talep edin",
    text: "Kompost tesisi, gübre tesisi, makina ve ekipman, biyogaz veya teknik danışmanlık talepleriniz için bizimle iletişime geçin.",
    contactLabel: "İletişim Sayfasına Git",
    contactHref: "/iletisim",
    callLabel: "Hemen Ara",
    whatsappQuoteLabel: "WhatsApp ile Teklif Al",
    phoneLabel: "Telefonla Ara",
    hideOnExact: ["/iletisim", "/kutuphane"],
    hideOnPrefixes: [
      "/kutuphane/",
      "/hizmetler/",
      "/makinalar/",
      "/makinalar-ekipman/",
      "/projeler/",
      "/sektorler/",
      "/cozumler/",
    ],
    whatsappVariantOnExact: ["/hizmetler"],
  },
  brandText:
    "Pro Makina, proses mühendisliği, makine imalatı ve anahtar teslim tesis kurulumu yaklaşımını aynı yapıda sunan endüstriyel çözüm partneridir.",
  columns: [
    {
      heading: "Sektörler",
      links: [
        { label: "Gübre ve Granülasyon", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
        { label: "Kompost ve Organik Atık", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
        { label: "Enerji ve Biyogaz", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
        { label: "Madencilik ve Mineral", href: "/sektorler/madencilik-ve-mineral-isleme" },
        { label: "Kimya ve Proses", href: "/sektorler/kimya-ve-proses-endustrisi" },
        {
          label: "Dökme Katı Malzeme",
          href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
        },
      ],
    },
    {
      heading: "Hizmetler",
      links: [
        { label: "Anahtar Teslim Tesis", href: "/hizmetler/anahtar-teslim-tesis-kurulumu" },
        { label: "Proses Tasarımı", href: "/hizmetler/proses-tasarimi-ve-muhendislik" },
        { label: "Gübre Tesisi Kurulumu", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
        { label: "Kompost Tesisi Kurulumu", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
        { label: "Organomineral Gübre", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
        { label: "Sıvı Gübre Üretimi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      ],
    },
    {
      heading: "Teknik İçerikler",
      links: [
        { label: "Blog / Makaleler", href: "/kutuphane/blog" },
        { label: "Teknik Rehberler", href: "/kutuphane/teknik-rehberler" },
        { label: "Kurutma Tamburu", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
        { label: "Helezon Kapasite", href: "/kutuphane/blog/helezon-kapasite-hesabi" },
        { label: "Granül Gübre Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
        { label: "Kompost Tesisi", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      ],
    },
    {
      heading: "Hesaplama Araçları",
      links: [
        { label: "Programlar", href: "/programlar" },
        { label: "Helezon Hesabı", href: "/programlar/helezon-kapasite-hesabi" },
        { label: "Konveyör Hesabı", href: "/programlar/konveyor-kapasite-hesabi" },
        { label: "Tambur Hesabı", href: "/programlar?modal=tambur-kapasite-hesabi" },
        { label: "Elevatör Hesabı", href: "/programlar/elevator-kapasite-hesabi" },
        { label: "Redler Hesabı", href: "/programlar/redler-kapasite-hesabi" },
      ],
    },
    {
      heading: "Çözümler / İletişim",
      includeContact: true,
      links: [
        { label: "Çözüm Merkezi", href: "/cozumler" },
        { label: "Gübre Tesisi", href: "/cozumler/gubre-tesisi-kurulumu" },
        { label: "Kurutma Sistemleri", href: "/cozumler/endustriyel-kurutma-sistemleri" },
        { label: "Vidalı Konveyör", href: "/cozumler/vidali-konveyor-sistemleri" },
        { label: "İletişim", href: "/iletisim" },
      ],
    },
  ],
  cookieSettingsLabel: "Çerez Ayarları",
  followTitle: "Bizi Takip Edin",
  followText:
    "Proses mühendisliği, makina üretimi, teknik rehberler ve proje içerikleri için sosyal medya hesaplarımızı takip edin.",
  rights: "© 2026 Pro Makina. Tüm hakları saklıdır.",
  floating: { whatsappAria: "WhatsApp ile iletişime geç" },
  mobileSticky: {
    hideOnExact: ["/iletisim"],
    quoteLabel: "Teklif Al",
    quoteHref: "/iletisim",
    secondaryLabel: "Teknik Danışmanlık",
    secondaryHref: "/hizmetler/teknik-danismanlik",
  },
};

function shouldHideGlobalCta(model: SiteFooterModel, pathname: string) {
  return (
    model.cta.hideOnExact.includes(pathname) ||
    model.cta.hideOnPrefixes.some((prefix) => pathname.startsWith(prefix))
  );
}

export function SiteFooterCta({ model }: { model?: SiteFooterModel }) {
  const footer = model ?? trFooterModel;
  const pathname = usePathname();
  const hideGlobalCta = shouldHideGlobalCta(footer, pathname);
  const isWhatsappVariant = footer.cta.whatsappVariantOnExact.includes(pathname);

  return (
    <>
      {!hideGlobalCta ? (
        <section id="iletisim" className="section-bottom-space-lg">
          <div className="site-container">
            <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                {trText(footer.cta.title)}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/82">{trText(footer.cta.text)}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {isWhatsappVariant ? (
                  <>
                    <a
                      href={siteContact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:border-[#d7edf8] hover:bg-[#eef8fd] hover:text-[#278DC0]"
                    >
                      {footer.cta.whatsappQuoteLabel}
                    </a>
                    <a
                      href={siteContact.phoneHref}
                      className="rounded-full border border-white bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:border-[#d7edf8] hover:bg-[#eef8fd] hover:text-[#278DC0]"
                    >
                      {footer.cta.phoneLabel}
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={footer.cta.contactHref}
                      data-cta-event="quote_button_click"
                      data-cta-label="footer_global_quote"
                      className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                    >
                      {trText(footer.cta.contactLabel)}
                    </Link>
                    <a
                      href={siteContact.phoneHref}
                      className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {footer.cta.callLabel}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="site-container py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr_1fr_0.95fr]">
            <div className="max-w-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Pro Makina</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{trText(footer.brandText)}</p>
            </div>

            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="transition hover:text-white">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  {column.includeContact ? (
                    <>
                      <li>
                        <a href={siteContact.emailHref} className="transition hover:text-white">
                          {siteContact.email}
                        </a>
                      </li>
                      <li>
                        <a
                          href={siteContact.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-white"
                        >
                          WhatsApp
                        </a>
                      </li>
                      <li>
                        <CookieSettingsLink
                          className="transition hover:text-white"
                          label={footer.cookieSettingsLabel}
                        />
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <h3 className="text-lg font-semibold text-white">{footer.followTitle}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72">
                  {footer.followText}
                </p>
              </div>
              <SocialLinks variant="button" className="lg:justify-end" />
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-white/55">{trText(footer.rights)}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export function FloatingWhatsApp({ model }: { model?: SiteFooterModel }) {
  const footer = model ?? trFooterModel;

  return (
    <a
      href={siteContact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={trText(footer.floating.whatsappAria)}
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <span className="text-lg">W</span>
      WhatsApp
    </a>
  );
}

export function MobileStickyCta({ model }: { model?: SiteFooterModel }) {
  const footer = model ?? trFooterModel;
  const pathname = usePathname();

  if (footer.mobileSticky.hideOnExact.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-20 z-[69] sm:hidden">
      <div className="rounded-full border border-slate-200 bg-white/95 p-2 shadow-[0_16px_48px_rgba(15,23,42,0.18)] backdrop-blur">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={footer.mobileSticky.quoteHref}
            data-cta-event="quote_button_click"
            data-cta-label="mobile_sticky_quote"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-4 text-xs font-semibold text-white transition hover:bg-[#154764]"
          >
            {footer.mobileSticky.quoteLabel}
          </Link>
          <Link
            href={footer.mobileSticky.secondaryHref}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 px-4 text-xs font-semibold text-slate-900 transition hover:border-[#278DC0] hover:text-[#278DC0]"
          >
            {footer.mobileSticky.secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
