import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { GlobalBottomCta } from "./global-bottom-cta";

export type SectorGuideTable = {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type SectorGuideFormula = {
  title: string;
  formula: string;
  example?: string[];
};

export type SectorGuideSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SectorGuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
  subsections?: SectorGuideSubsection[];
  table?: SectorGuideTable;
  formulas?: SectorGuideFormula[];
};

export type SectorGuideFaq = {
  question: string;
  answer: string;
};

export type SectorGuideLink = {
  label: string;
  href: string;
};

export type SectorGuideRelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type SectorMachineGuidePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  canonical: string;
  openGraphTitle: string;
  openGraphDescription: string;
  heroDescription: string;
  readingTime: string;
  heroTopic: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  heroSecondaryLabel: string;
  heroSecondaryHref: string;
  heroLinks: SectorGuideLink[];
  introParagraphs: string[];
  flowTitle: string;
  flowSteps: string[];
  flowNote: string;
  sections: SectorGuideSection[];
  selectionCriteria: SectorGuideTable;
  mistakes: SectorGuideTable;
  approachParagraphs: string[];
  approachBullets: string[];
  faqs: SectorGuideFaq[];
  relatedLinks: SectorGuideRelatedLink[];
  ctaTitle?: string;
  ctaDescription?: string;
};

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function TableSection({ title, headers, rows, note }: SectorGuideTable) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{title}</h3>
      <div className="overflow-x-auto rounded-[24px] border border-slate-200">
        <table className="min-w-[760px] divide-y divide-slate-200 bg-white text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-slate-950">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${title}-${rowIndex}-${cellIndex}`}
                    className={`px-4 py-4 ${cellIndex === 0 ? "font-semibold text-slate-950" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="text-sm leading-7 text-slate-600">{note}</p> : null}
    </div>
  );
}

function FormulaBox({ title, formula, example }: SectorGuideFormula) {
  return (
    <div className="rounded-[24px] border border-[#278DC0]/20 bg-[#F1F8FC] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
        FormÃ¼l Kutusu
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{title}</h3>
      <pre className="mt-4 overflow-x-auto rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-[#154764]">
        {formula}
      </pre>
      {example?.length ? (
        <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
          {example.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FlowBox({
  title,
  steps,
  note,
}: {
  title: string;
  steps: string[];
  note: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{note}</p>
      <div className="mt-5 grid gap-3 xl:grid-cols-[repeat(9,minmax(0,1fr))]">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center gap-3 xl:flex-row">
            <div className="w-full rounded-2xl border border-[#278DC0]/20 bg-white px-4 py-4 text-center text-sm font-semibold text-[#154764] shadow-sm">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <div className="flex items-center justify-center text-[#278DC0] xl:w-6">
                <span className="text-xl xl:hidden">â†“</span>
                <span className="hidden text-xl xl:inline">â†’</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessDiagram({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  const width = Math.max(steps.length * 165, 960);

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} 220`}
          className="min-w-[860px]"
          role="img"
          aria-label={`${title} proses ÅŸemasÄ±`}
        >
          <defs>
            <linearGradient id="sectorGuideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#278DC0" />
              <stop offset="100%" stopColor="#154764" />
            </linearGradient>
            <marker
              id="sectorGuideArrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#278DC0" />
            </marker>
          </defs>
          {steps.map((step, index) => {
            const x = 40 + index * 155;
            const nextX = 40 + (index + 1) * 155;

            return (
              <g key={step}>
                <rect
                  x={x}
                  y="72"
                  width="128"
                  height="74"
                  rx="20"
                  fill={index % 2 === 0 ? "#F1F8FC" : "url(#sectorGuideGradient)"}
                  stroke="#278DC0"
                  opacity={index % 2 === 0 ? 1 : 0.96}
                />
                <foreignObject x={x + 10} y="87" width="108" height="44">
                  <div className={`flex h-full items-center justify-center text-center text-sm font-semibold ${index % 2 === 0 ? "text-[#154764]" : "text-white"}`}>
                    {step}
                  </div>
                </foreignObject>
                {index < steps.length - 1 ? (
                  <path
                    d={`M ${x + 128} 109 H ${nextX - 10}`}
                    stroke="#278DC0"
                    strokeWidth="4"
                    markerEnd="url(#sectorGuideArrow)"
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function buildArticleSchema(guide: SectorMachineGuidePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    author: {
      "@type": "Organization",
      name: "Pro Makina",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      logo: {
        "@type": "ImageObject",
        url: "https://www.promakina.com.tr/logo.png",
      },
    },
    mainEntityOfPage: guide.canonical,
  };
}

function buildFaqSchema(guide: SectorMachineGuidePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(guide: SectorMachineGuidePageData) {
  return {
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
        name: "KÃ¼tÃ¼phane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: guide.title,
        item: guide.canonical,
      },
    ],
  };
}

export function buildSectorMachineGuideMetadata(
  guide: SectorMachineGuidePageData,
): Metadata {
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: {
      canonical: guide.canonical,
    },
    openGraph: {
      title: guide.openGraphTitle,
      description: guide.openGraphDescription,
      url: guide.canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.openGraphTitle,
      description: guide.openGraphDescription,
    },
  };
}

export function SectorMachineGuideDetailPage({
  guide,
}: {
  guide: SectorMachineGuidePageData;
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(guide)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(guide)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(guide)),
        }}
      />

      <article className="pb-16 sm:pb-20">
        <section className="border-b border-white/10 bg-gradient-to-br from-[#154764] via-[#1a5d81] to-[#278DC0]">
          <div className="site-container py-8 sm:py-10 lg:py-12">
            <div className="hidden">
              <Link href="/" className="transition hover:text-white">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/kutuphane" className="transition hover:text-white">
                KÃ¼tÃ¼phane
              </Link>
              <span>/</span>
              <Link href="/kutuphane/blog" className="transition hover:text-white">
                Blog
              </Link>
              <span>/</span>
              <span className="font-medium text-white">{guide.title}</span>
            </div>

            <div className="mt-4 max-w-5xl rounded-[32px] border border-white/15 bg-white/8 p-5 shadow-[0_20px_65px_rgba(15,23,42,0.18)] backdrop-blur md:p-6">
              <div className="hidden">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  SektÃ¶rel Makine Rehberi
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-[42px]">
                {guide.title}
              </h1>
              

              <div className="hidden">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Okuma sÃ¼resi: {guide.readingTime}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  Konu: {guide.heroTopic}
                </span>
              </div>

              <div className="hidden">
                {guide.heroLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={guide.heroCtaHref}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  {guide.heroCtaLabel}
                </Link>
                <a
                  href={guide.heroSecondaryHref}
                  target={guide.heroSecondaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    guide.heroSecondaryHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
                >
                  {guide.heroSecondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="site-container mt-8">
          <div className="grid gap-8">
            <SectionCard title="GiriÅŸ">
              {guide.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SectionCard>

            <SectionCard title="Proses AkÄ±ÅŸÄ±">
              <FlowBox title={guide.flowTitle} steps={guide.flowSteps} note={guide.flowNote} />
              <ProcessDiagram title={guide.flowTitle} steps={guide.flowSteps} />
            </SectionCard>

            {guide.sections.map((section) => (
              <SectionCard key={section.title} title={section.title}>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                {section.bullets?.length ? (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#278DC0]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.numbered?.length ? (
                  <ol className="space-y-3">
                    {section.numbered.map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#278DC0] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}

                {section.subsections?.map((subsection) => (
                  <div key={subsection.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {subsection.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                      {subsection.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {subsection.bullets?.length ? (
                        <ul className="space-y-3">
                          {subsection.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#278DC0]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ))}

                {section.table ? <TableSection {...section.table} /> : null}

                {section.formulas?.map((formula) => (
                  <FormulaBox key={formula.title} {...formula} />
                ))}
              </SectionCard>
            ))}

            <SectionCard title="Makine SeÃ§im Kriterleri">
              <p>
                AÅŸaÄŸÄ±daki kriterler, sektÃ¶r fark etmeksizin ekipman zincirinin doÄŸru boyutlandÄ±rÄ±lmasÄ±
                ve prosesin dengeli kurulmasÄ± iÃ§in Ã¶n mÃ¼hendislik aÅŸamasÄ±nda birlikte okunmalÄ±dÄ±r.
              </p>
              <TableSection {...guide.selectionCriteria} />
            </SectionCard>

            <SectionCard title="SÄ±k YapÄ±lan TasarÄ±m HatalarÄ±">
              <TableSection {...guide.mistakes} />
            </SectionCard>

            <SectionCard title="Pro Makina ile Ã‡Ã¶zÃ¼m YaklaÅŸÄ±mÄ±">
              {guide.approachParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="grid gap-3 sm:grid-cols-2">
                {guide.approachBullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SectionCard>

            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  SÄ±k Sorulan Sorular
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Makine seÃ§imi, proses akÄ±ÅŸÄ±, kapasite sÄ±nÄ±rlarÄ± ve saha uygulamalarÄ± hakkÄ±nda en
                  Ã§ok sorulan sorularÄ± kÄ±sa ama teknik Ã§erÃ§evede yanÄ±tladÄ±k.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {guide.faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Soru {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Ä°lgili Teknik Ä°Ã§erikler ve Programlar
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Bu makaleyi destekleyen hizmet, makine, sektÃ¶r ve hesaplama sayfalarÄ±na aÅŸaÄŸÄ±dan
                  eriÅŸebilirsiniz.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {guide.relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="block text-lg font-semibold text-slate-950">
                      {item.title}
                    </span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">
                      {item.description}
                    </span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                      Ä°Ã§eriÄŸi Ä°ncele
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <GlobalBottomCta
              title={
                guide.ctaTitle ??
                "Projeniz iÃ§in teklif veya teknik gÃ¶rÃ¼ÅŸme talep edin"
              }
              description={
                guide.ctaDescription ??
                "Kapasite, hammadde, nem oranÄ±, hedef Ã¼rÃ¼n ve saha yerleÅŸiminize gÃ¶re uygun proses ve makine Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte netleÅŸtirebiliriz."
              }
            />
          </div>
        </div>
      </article>
    </main>
  );
}


