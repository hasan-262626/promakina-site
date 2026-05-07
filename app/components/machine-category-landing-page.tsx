import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "../lib/site-contact";
import { Hero } from "./Hero";
import {
  ServiceRelatedTechnicalContents,
  type TechnicalContentCard,
} from "./service-related-technical-contents";

type MachineSection = {
  title: string;
  paragraphs: string[];
};

type MachineFaq = {
  question: string;
  answer: string;
};

type MachineSummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

type RelatedMachine = {
  title: string;
  description: string;
  href: string;
};

type QuickLink = {
  label: string;
  href: string;
};

export type MachineCategoryLandingPageProps = {
  title: string;
  description: string;
  canonical: string;
  heroImage: string;
  heroDescription: string;
  introParagraphs: string[];
  sections: MachineSection[];
  summaryRows: MachineSummaryRow[];
  faqs: MachineFaq[];
  relatedMachines: RelatedMachine[];
  technicalContents: TechnicalContentCard[];
  ctaText: string;
  quickLinks?: QuickLink[];
};

export function buildMachineCategoryMetadata({
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
      siteName: "Pro Makina",
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

export function MachineCategoryLandingPage({
  title,
  description,
  canonical,
  heroImage,
  heroDescription,
  introParagraphs,
  sections,
  summaryRows,
  faqs,
  relatedMachines,
  technicalContents,
  ctaText,
  quickLinks = [],
}: MachineCategoryLandingPageProps) {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={title} description={heroDescription} image={heroImage}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href={siteContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
            <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {quickLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
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

      <section className="seo-content pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
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

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                İlgili Makineler
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bu kategori içinde öne çıkan alt makine sayfalarını doğrudan inceleyebilirsiniz.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedMachines.map((machine) => (
                <Link
                  key={machine.href}
                  href={machine.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{machine.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{machine.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Makineyi İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceRelatedTechnicalContents items={technicalContents} />

      <section className="pb-10 sm:pb-14">
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
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Teklif / Kapasite Değerlendirme Çağrısı
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetleri İncele
              </Link>
              <Link
                href="/hizmetler/teknik-danismanlik"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Danışmanlık
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
