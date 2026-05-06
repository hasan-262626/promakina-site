"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  EngineeringCalculationCard,
  EngineeringCalculationFilter,
} from "../lib/engineering-calculation-center-data";
import { engineeringCalculationFilters } from "../lib/engineering-calculation-center-data";

type EngineeringCalculationCenterProps = {
  cards: EngineeringCalculationCard[];
};

export function EngineeringCalculationCenter({
  cards,
}: EngineeringCalculationCenterProps) {
  const [activeFilter, setActiveFilter] =
    useState<EngineeringCalculationFilter>("Tüm Hesaplamalar");

  const filteredCards = useMemo(() => {
    if (activeFilter === "Tüm Hesaplamalar") {
      return cards;
    }

    return cards.filter((card) => card.filter === activeFilter);
  }, [activeFilter, cards]);

  return (
    <section id="hesaplama-kartlari" className="pb-12 sm:pb-16">
      <div className="site-container">
        <div className="sticky top-20 z-20 -mx-2 mb-8 rounded-[28px] border border-slate-200 bg-white/90 px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur xl:top-24">
          <div className="flex flex-wrap gap-3">
            {engineeringCalculationFilters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-slate-950 bg-slate-950 text-white shadow-[0_14px_35px_rgba(15,23,42,0.18)]"
                      : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {filteredCards.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCards.map((card) => (
              <article
                key={card.slug}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.78))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                      {card.filter}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {card.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {card.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href={`/programlar/${card.slug}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Hesaplamayı Aç
                    </Link>
                    <Link
                      href={`/programlar/${card.slug}`}
                      className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                    >
                      SEO Sayfasını İncele
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-950">
              Bu filtre için yeni araçlar hazırlanıyor.
            </p>
            <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-slate-600">
              Program merkezini kapasite, güç ve teknik dönüşüm başlıklarında
              adım adım genişletiyoruz. Şimdilik diğer filtrelerdeki aktif
              hesaplama araçlarını inceleyebilir veya teknik destek alabilirsiniz.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/programlar#hesaplama-kartlari"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Tüm Hesaplamaları Gör
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                Teknik Destek Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
