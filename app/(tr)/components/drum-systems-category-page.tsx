import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MachinePageHero } from "./machine-page-hero";

/**
 * Tambur Sistemleri kategori sayfası şablonu. TR sayfası (/makinalar-ekipman/tambur-sistemleri) tasarımın
 * tek kaynağıdır; EN/RU/AR aynı bileşeni kendi metin ve bağlantılarıyla besler.
 */
export type DrumSystemsCategoryContent = {
  hero: {
    title: string;
    calculatorHref: string;
    labels?: { quote: string; whatsapp: string; call: string; calculator?: string };
    quoteHref?: string;
  };
  spotlight: { heading: string; links: Array<{ title: string; description: string; href: string }> };
  badge: string;
  detailLabel: string;
  cards: Array<{ key: string; href: string; image: string; alt: string; title: string; description: string }>;
};

export function DrumSystemsCategoryPage({
  content,
  structuredData,
}: {
  content: DrumSystemsCategoryContent;
  structuredData?: ReactNode;
}) {
  const { hero, spotlight } = content;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {structuredData}
      <MachinePageHero
        title={hero.title}
        calculatorHref={hero.calculatorHref}
        labels={hero.labels}
        quoteHref={hero.quoteHref}
      />

      <section className="section-space">
        <div className="site-container">
          <section aria-labelledby="tambur-spotlight-links" className="rounded-[30px] border border-slate-200 bg-slate-50/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
            <h3
              id="tambur-spotlight-links"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              {spotlight.heading}
            </h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {spotlight.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block h-full rounded-[22px] border border-slate-200 bg-white px-5 py-4 transition hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <span className="block text-sm font-semibold text-slate-950 transition group-hover:text-blue-700">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <div className="section-gap grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.cards.map((card) => (
              <Link
                key={card.key}
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex min-h-[290px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                    <span className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                      {content.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {card.description}
                    </p>
                    <div className="mt-auto pt-8">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-blue-700">
                        {content.detailLabel}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
