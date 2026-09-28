import type { ReactNode } from "react";
import Link from "next/link";
import type { HomeMachineGroupCard } from "../home-machine-groups-data";
import { MachinePageHero } from "./machine-page-hero";
import { MachineCategoriesOverviewGrid, type MachineCategoriesGridLabels } from "./machine-categories-overview-grid";
import { TechnicalArticlesShortcut, type TechnicalArticlesShortcutContent } from "./technical-articles-shortcut";

/**
 * Makinalar & Ekipman ana sayfası şablonu. TR sayfası tasarımın tek kaynağıdır; EN/RU/AR aynı bileşeni
 * kendi metin ve bağlantılarıyla besler. Yapı, sınıflar ve bölüm sırası dillerde aynıdır.
 */
type LinkItem = { label: string; href?: string };

export type MachinesOverviewContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumb: Array<{ label: string; href?: string }>;
    labels?: { quote: string; whatsapp: string; call: string; calculator?: string };
    quoteHref?: string;
  };
  cards: HomeMachineGroupCard[];
  cardLabels?: MachineCategoriesGridLabels;
  selection: { title: string; before: string; linkLabel: string; linkHref: string; after: string };
  flows: {
    title: string;
    intro: string;
    items: Array<{ title: string; description: string; steps: LinkItem[] }>;
  };
  sectors: { title: string; intro: string; links: Array<{ label: string; href: string }> };
  manufacturing: { title: string; intro: string; steps: Array<{ title: string; href?: string }> };
  quote: {
    title: string;
    text: string;
    primary: { label: string; href: string };
    whatsapp: { label: string; href: string };
    checklist: string[];
  };
  articles?: TechnicalArticlesShortcutContent;
  related: { title: string; links: Array<{ label: string; href: string }> };
  faq: { title: string; intro: string; items: Array<{ question: string; answer: string }> };
};

/** structuredData: TR sayfasındaki gibi <main> içinde hero öncesinde render edilen JSON-LD betiği. */
export function MachinesOverviewPage({ content, structuredData }: { content: MachinesOverviewContent; structuredData?: ReactNode }) {
  const { hero, selection, flows, sectors, manufacturing, quote, related, faq } = content;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {structuredData}
      <MachinePageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb={hero.breadcrumb}
        labels={hero.labels}
        quoteHref={hero.quoteHref}
      />

      <section className="section-space">
        <div className="site-container">
          <MachineCategoriesOverviewGrid cards={content.cards} labels={content.cardLabels} />

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {selection.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {selection.before}{" "}
                <Link href={selection.linkHref} className="font-semibold text-[#278DC0] underline decoration-[#278DC0]/30 underline-offset-4">
                  {selection.linkLabel}
                </Link>{" "}
                {selection.after}
              </p>
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {flows.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {flows.intro}
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {flows.items.map((flow) => (
                <article key={flow.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {flow.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{flow.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {flow.steps.map((step, index) =>
                      step.href ? (
                        <Link
                          key={`${flow.title}-${step.label}-${index}`}
                          href={step.href}
                          className="rounded-full border border-[#278DC0]/20 bg-[#278DC0]/8 px-3 py-2 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0] hover:text-white"
                        >
                          {step.label}
                        </Link>
                      ) : (
                        <span
                          key={`${flow.title}-${step.label}-${index}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600"
                        >
                          {step.label}
                        </span>
                      ),
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {sectors.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {sectors.intro}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {sectors.links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/30 hover:bg-[#278DC0]/8 hover:text-[#154764]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {manufacturing.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {manufacturing.intro}
              </p>
            </div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {manufacturing.steps.map((step, index) => (
                <li key={`${step.title}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.href ? (
                    <Link
                      href={step.href}
                      className="mt-2 block text-sm font-semibold leading-6 text-slate-900 transition hover:text-[#278DC0]"
                    >
                      {step.title}
                    </Link>
                  ) : (
                    <span className="mt-2 block text-sm font-semibold leading-6 text-slate-900">
                      {step.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section className="section-gap rounded-[32px] border border-[#278DC0]/15 bg-[#278DC0]/8 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {quote.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
                  {quote.text}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href={quote.primary.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0] bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:border-[#154764] hover:bg-[#154764]"
                  >
                    {quote.primary.label}
                  </Link>
                  <Link
                    href={quote.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0]/25 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0]"
                  >
                    {quote.whatsapp.label}
                  </Link>
                </div>
              </div>
              <ul className="grid gap-3">
                {quote.checklist.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#278DC0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <TechnicalArticlesShortcut className="section-gap" content={content.articles} />

          <section className="section-gap rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {related.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {related.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/25 hover:bg-[#278DC0]/8 hover:text-[#154764]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {faq.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {faq.intro}
              </p>
            </div>
            <div className="mt-8 grid gap-4">
              {faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[22px] border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.question}
                      <span className="text-[#278DC0] transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
