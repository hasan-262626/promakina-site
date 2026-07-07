import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "./Hero";
import {
  createWhatsAppHref,
  siteContact,
  siteSocialSameAs,
} from "../lib/site-contact";
import { trText } from "../lib/tr-text";
import {
  ServiceRelatedTechnicalContents,
  type TechnicalContentCard,
} from "./service-related-technical-contents";

export type MachineLandingSummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

export type MachineLandingFaq = {
  question: string;
  answer: string;
};

export type MachineLandingLink = {
  label: string;
  href: string;
};

export type MachineLandingLinkSection = {
  title: string;
  description: string;
  links: MachineLandingLink[];
};

export type MachineLandingCard = {
  title: string;
  items: string[];
};

export type MachineSeoLandingPageProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  productName: string;
  categoryName: string;
  introTitle?: string;
  introParagraphs: string[];
  cards: MachineLandingCard[];
  summaryRows: MachineLandingSummaryRow[];
  technicalFeatures: string[];
  capacityCriteria: string[];
  processRole: string[];
  optionalEquipment: string[];
  advantages: string[];
  quoteRequirements: string[];
  relatedPages: MachineLandingLink[];
  relatedServices: MachineLandingLink[];
  technicalContents: TechnicalContentCard[];
  faqs: MachineLandingFaq[];
  ctaText: string;
  applicationLinksSection?: MachineLandingLinkSection;
};

const siteName = "Pro Makina";

export function buildMachineLandingMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  return {
    title: trText(title),
    description: trText(description),
    alternates: {
      canonical,
    },
    openGraph: {
      title: trText(title),
      description: trText(description),
      url: canonical,
      siteName,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: trText(title),
      description: trText(description),
    },
  };
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">{trText(title)}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{trText(item)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ParagraphListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        {trText(title)}
      </h2>
      <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
        {items.map((item) => (
          <p key={item}>{trText(item)}</p>
        ))}
      </div>
    </article>
  );
}

export function MachineSeoLandingPage({
  title,
  description,
  canonical,
  image,
  productName,
  categoryName,
  introTitle,
  introParagraphs,
  cards,
  summaryRows,
  technicalFeatures,
  capacityCriteria,
  processRole,
  optionalEquipment,
  advantages,
  quoteRequirements,
  relatedPages,
  relatedServices,
  technicalContents,
  faqs,
  ctaText,
  applicationLinksSection,
}: MachineSeoLandingPageProps) {
  const quoteCtaTitle = "Projeniz için teknik teklif alın";
  const quoteCtaDescription =
    "Kapasite, hammadde, nem oranı, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.";
  const whatsappHref = createWhatsAppHref(
    trText(
      `Merhaba, Pro Makina web sitenizden ulaÃ…Å¸Ã„Â±yorum. AÃ…Å¸aÃ„Å¸Ã„Â±daki ÃƒÂ¼rÃƒÂ¼n/hizmet iÃƒÂ§in teklif almak istiyorum: ${title}`,
    ),
  );
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: trText(productName),
    provider: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.promakina.com.tr",
    },
    description: trText(description),
    serviceType: `${trText(categoryName)} - ${trText(productName)}`,
    category: trText(categoryName),
    areaServed: ["Türkiye", "Avrupa", "Orta DoÄŸu", "Kuzey Afrika"],
    url: canonical,
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
        name: "Makinalar & Ekipman",
        item: "https://www.promakina.com.tr/makinalar-ekipman",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: trText(categoryName),
        item: `https://www.promakina.com.tr/makinalar-ekipman/${canonical
          .split("/makinalar-ekipman/")[1]
          ?.split("/")[0] ?? ""}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: trText(productName),
        item: canonical,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={title} description={description} image={image}>
        <Link
          href="/iletisim"
          data-cta-event="quote_button_click"
          data-cta-label={`${productName}_hero_quote`}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >{trText("WhatsApp ile Gönder")}</a>
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
                {trText(introTitle)}
              </h2>
            ) : null}
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{trText(paragraph)}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedPages.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {trText(link.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <ListCard key={card.title} title={card.title} items={card.items} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Teknik Değerlendirme Özeti
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                      Kriter
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">{trText("Açıklama")}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">{trText("Proje Açısından Önemi")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {summaryRows.map((row) => (
                    <tr key={row.criterion}>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-950 sm:px-8">
                        {trText(row.criterion)}
                      </td>
                      <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                        {trText(row.description)}
                      </td>
                      <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                        {trText(row.importance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-content section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="content-stack">
              <ParagraphListSection title="Teknik Özellikler" items={technicalFeatures} />
              <ParagraphListSection title="Kapasite ve Tasarım Kriterleri" items={capacityCriteria} />
              <ParagraphListSection title="Proses İçindeki Yeri" items={processRole} />
              <ParagraphListSection title="Opsiyonel Ekipmanlar" items={optionalEquipment} />
              <ParagraphListSection title="Avantajlar" items={advantages} />
              <ParagraphListSection title="Teklif Almak İçin Gerekli Bilgiler" items={quoteRequirements} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[28px] border border-slate-200 bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.22)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {trText(quoteCtaTitle)}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              {trText(quoteCtaDescription)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >{trText("WhatsApp ile Görüş")}</a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${productName}_mid_quote_form`}
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

      {applicationLinksSection ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {trText(applicationLinksSection.title)}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {trText(applicationLinksSection.description)}
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {applicationLinksSection.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="block text-lg font-semibold text-slate-950">
                      {trText(link.label)}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">{trText("İçeriği İncele")}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{trText("İlgili Makinalar ve Sayfalar")}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedPages.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {trText(link.label)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{trText("İlgili Hizmetler")}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {trText(link.label)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{trText("Sık Sorulan Sorular")}</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {trText(faq.question)}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {trText(faq.answer)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {trText(quoteCtaTitle)}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {trText(quoteCtaDescription)}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-8 text-white/82 sm:text-base">
              {trText(ctaText)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${productName}_final_quote_form`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teknik Teklif Formu
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >{trText("WhatsApp ile Görüş")}</a>
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

