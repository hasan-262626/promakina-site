import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Hero } from "./Hero";
import { LibraryServiceLinks } from "./library-service-links";
import type { LibraryFaqItem, LibraryServiceLink } from "../lib/library-page-data";

type LibrarySeoSection = {
  title: string;
  blocks: {
    heading?: string;
    content: ReactNode;
  }[];
};

type LibrarySeoPageProps = {
  title: string;
  description: string;
  canonical: string;
  heroDescription: string;
  categoryLabel: string;
  sections: LibrarySeoSection[];
  ctaText: string;
  relatedServices?: LibraryServiceLink[];
  faqs?: LibraryFaqItem[];
  extraSection?: ReactNode;
};

export function buildLibraryMetadata({
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
      type: "article",
    },
  };
}

export function LibrarySeoPage({
  title,
  description,
  canonical,
  heroDescription,
  categoryLabel,
  sections,
  ctaText,
  relatedServices = [],
  faqs = [],
  extraSection,
}: LibrarySeoPageProps) {
  const faqSchema =
    faqs.length > 0
      ? {
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
        }
      : null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <Hero title={title} description={heroDescription} image="/images/proses1.jpg">
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905380631163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{categoryLabel}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h1>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-6">
                    {section.blocks.map((block, index) => (
                      <div key={`${section.title}-${index}`}>
                        {block.heading ? (
                          <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{block.heading}</h3>
                        ) : null}
                        <div className="mt-3 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                          {block.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              {extraSection}

              {relatedServices.length ? <LibraryServiceLinks items={relatedServices} /> : null}

              {faqs.length ? (
                <section>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Sık Sorulan Sorular
                  </h2>
                  <div className="mt-6 space-y-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">{ctaText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
