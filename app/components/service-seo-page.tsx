import type { Metadata } from "next";
import Link from "next/link";
import {
  createWhatsAppHref,
  siteContact,
  siteSocialSameAs,
} from "../lib/site-contact";
import { Hero } from "./Hero";
import {
  ServiceRelatedTechnicalContents,
  type TechnicalContentCard,
} from "./service-related-technical-contents";

export type ServiceCard = {
  title: string;
  description: string;
  href?: string;
};

export type ServiceSection = {
  title: string;
  paragraphs: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceSummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

export type ServiceKeyLink = {
  label: string;
  href: string;
};

export type ServiceSeoPageProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  serviceName: string;
  introTitle?: string;
  introParagraphs: string[];
  cards?: ServiceCard[];
  cardsTitle?: string;
  cardsDescription?: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  ctaText: string;
  ctaTitle?: string;
  showForm?: boolean;
  technicalContents?: TechnicalContentCard[];
  summaryRows?: ServiceSummaryRow[];
  keyLinks?: ServiceKeyLink[];
};

const siteName = "Pro Makina";

export function buildServiceMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function ServiceSeoPage({
  title,
  description,
  canonical,
  image,
  serviceName,
  introTitle,
  introParagraphs,
  cards = [],
  cardsTitle = "Kullanım Alanları ve İlgili Ana Makineler",
  cardsDescription = "Bu bölüm, tesis kurgusunda öne çıkan uygulama alanlarını ve prosesi taşıyan ana makina omurgasını birlikte özetler.",
  sections,
  faqs,
  ctaText,
  ctaTitle = "Teklif / Keşif Çağrısı",
  showForm = false,
  technicalContents = [],
  summaryRows = [],
  keyLinks = [],
}: ServiceSeoPageProps) {
  const quoteCtaTitle = "Projeniz için teknik teklif alın";
  const quoteCtaDescription =
    "Kapasite, hammadde, nem oranı, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.";
  const whatsappHref = createWhatsAppHref(
    `Merhaba, Pro Makina web sitenizden ulaÅŸÄ±yorum. AÅŸaÄŸÄ±daki Ã¼rÃ¼n/hizmet iÃ§in teklif almak istiyorum: ${title}`,
  );
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteContact.phoneDisplay,
        contactType: "sales",
        areaServed: ["TR", "EU", "Middle East"],
        availableLanguage: ["Turkish", "English"],
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.promakina.com.tr",
    },
    areaServed: ["Türkiye", "Avrupa", "Orta DoÄŸu", "Kuzey Afrika"],
    serviceType: serviceName,
    url: canonical,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
      })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetler",
        item: "https://www.promakina.com.tr/hizmetler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: canonical,
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero title={title} description={description} image={image}>
        <Link
          href="/iletisim"
          data-cta-event="quote_button_click"
          data-cta-label={`${serviceName}_hero_quote`}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp ile Gönder
        </a>
        <a
          href={siteContact.phoneHref}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          Telefonla Ara
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
            {introTitle ? (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {introTitle}
              </h2>
            ) : null}
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {keyLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {keyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-[#278DC0]/10 hover:text-[#154764]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {cards.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <div className="mb-6 rounded-[28px] border border-slate-200 bg-white px-6 py-6 shadow-sm sm:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {cardsTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
                {cardsDescription}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) =>
                card.href ? (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </Link>
                ) : (
                  <article
                    key={card.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      ) : null}

      {summaryRows.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Teknik DeÄŸerlendirme Ã–zeti
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                        Kriter
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                        Açıklama
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                        Proje Açısından Önemi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {summaryRows.map((row) => (
                      <tr key={row.criterion}>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-950 sm:px-8">
                          {row.criterion}
                        </td>
                        <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                          {row.description}
                        </td>
                        <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                          {row.importance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="seo-content section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="content-stack">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[28px] border border-slate-200 bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.22)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {quoteCtaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              {quoteCtaDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${serviceName}_mid_quote_form`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Formu
              </Link>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceRelatedTechnicalContents items={technicalContents} />

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showForm ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  TEKNİK GÖRÜŞME
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Gübre tesisi yatırımınız için ön fizibilite oluşturalım
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">
                  Türkiye pazarı ve ihracat hedefleriniz için uygun kapasite, ürün tipi, otomasyon seviyesi ve
                  proses akışını birlikte netleştirelim. Ekibimiz, organomineral, granül ve sıvı gübre
                  yatırımlarında teknik ve ticari karar sürecini hızlandıracak şekilde destek sunar.
                </p>
              </div>

              <form
                action="/iletisim"
                method="get"
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Firma</span>
                    <input
                      name="firma"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      placeholder="Firma adı"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Ad Soyad</span>
                    <input
                      name="adSoyad"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      placeholder="Yetkili kişi"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Telefon</span>
                    <input
                      name="telefon"
                      type="tel"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      placeholder="05xx xxx xx xx"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">E-posta</span>
                    <input
                      name="eposta"
                      type="email"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      placeholder="ornek@firma.com"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Ürün Grubu</span>
                    <select
                      name="urunGrubu"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option>Organomineral Gübre</option>
                      <option>Granül Gübre</option>
                      <option>Sıvı Gübre</option>
                      <option>Toz Gübre</option>
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-700">Hedef Kapasite</span>
                    <input
                      name="kapasite"
                      type="text"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                      placeholder="Ã–rn. 10 ton/saat"
                    />
                  </label>
                </div>
                <label className="mt-4 block space-y-2">
                  <span className="text-sm font-medium text-slate-700">Proje Notu</span>
                  <textarea
                    name="mesaj"
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#278DC0]"
                    placeholder="Hedef ürün, saha bilgisi, ihracat planı veya teknik beklentinizi yazabilirsiniz."
                  />
                </label>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    data-cta-event="quote_button_click"
                    data-cta-label={`${serviceName}_inline_form_quote`}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                  >
                    Teklif Al
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:text-[#278DC0]"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[28px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {quoteCtaTitle}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {quoteCtaDescription}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-white/82 sm:text-base">{ctaText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${serviceName}_final_quote_form`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Formu
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp ile Görüş
              </a>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

