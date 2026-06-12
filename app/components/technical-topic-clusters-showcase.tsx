"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { TechnicalTopicCluster } from "../lib/technical-topic-cluster-data";
import { trText } from "../lib/tr-text";

type Props = {
  clusters: TechnicalTopicCluster[];
};

export function TechnicalTopicClustersShowcase({ clusters }: Props) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filteredClusters = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    if (!normalizedQuery) {
      return clusters;
    }

    return clusters.filter((cluster) => {
      const haystacks = [
        trText(cluster.title),
        trText(cluster.description),
        trText(cluster.category),
        ...cluster.articles.map((article) => trText(article.title)),
      ].map((value) => value.toLocaleLowerCase("tr-TR"));

      return haystacks.some((value) => value.includes(normalizedQuery));
    });
  }, [clusters, query]);

  return (
    <div id="teknik-makaleler" className="space-y-8 scroll-mt-24">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#278DC0]">
            SEO İçerik Merkezi
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Konu Başlığına Göre Teknik Makaleler
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
            Pro Makina’nın gübre tesisleri, sıvı gübre hatları, kompost ve atık yönetimi,
            kurutma tamburları, proses tankları, maden işleme, biyogaz, arıtma çamuru ve
            dökme katı malzeme sistemleri için hazırladığı teknik blog, hesaplama, tasarım ve
            ekipman seçim içeriklerine konu başlığına göre ulaşabilirsiniz.
          </p>
        </div>

        <div className="mt-6">
          <label htmlFor="technical-cluster-search" className="sr-only">
            Teknik makale kümesi ara
          </label>
          <input
            id="technical-cluster-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Konu, makine veya yazı başlığı ara"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/10"
          />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filteredClusters.map((cluster) => {
          const isExpanded = expanded[cluster.slug] ?? false;
          const hasMore = cluster.articles.length > 8;

          return (
            <article
              key={cluster.slug}
              className="rounded-[24px] border border-white/20 bg-gradient-to-br from-[#278DC0] to-[#154764] p-5 shadow-lg shadow-slate-900/10 sm:p-6"
            >
              <span className="inline-flex rounded-full border border-white/35 bg-white/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {trText(cluster.category)}
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                {trText(cluster.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
                {trText(cluster.description)}
              </p>

              <div className="mt-6 grid gap-3">
                {cluster.articles.map((article, index) => {
                  const hidden = !isExpanded && index >= 8;

                  return (
                    <Link
                      key={article.slug}
                      href={`/kutuphane/blog/${article.slug}`}
                      className={`group flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl border border-[#D8E6EF] bg-white px-4 py-3 text-sm font-semibold leading-6 text-[#0F172A] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#278DC0] hover:bg-[#F1F8FC] hover:text-[#154764] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#278DC0] ${
                        hidden ? "hidden" : ""
                      }`}
                    >
                      <span className="pr-2">{trText(article.title)}</span>
                      <span className="shrink-0 text-[#0F172A] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#154764]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M7 4.5L12.5 10L7 15.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>

              {hasMore ? (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((current) => ({
                      ...current,
                      [cluster.slug]: !isExpanded,
                    }))
                  }
                  className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-white/80"
                >
                  {isExpanded ? "Daha az göster" : "Daha fazla göster"}
                </button>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={cluster.allPostsUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                >
                  Tüm Yazıları Gör
                </Link>
                {cluster.calculatorUrl ? (
                  <Link
                    href={cluster.calculatorUrl}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/65 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#154764]"
                  >
                    Hesaplama Aracını Aç
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
