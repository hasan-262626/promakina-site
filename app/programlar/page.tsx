import type { Metadata } from "next";
import Link from "next/link";
import { EngineeringCalculationCenter } from "../components/engineering-calculation-center";
import { ProgramsModalExperience } from "../components/programs-modal-experience";
import {
  engineeringCalculationCards,
} from "../lib/engineering-calculation-center-data";
import { programGroups } from "../program-platform-data";

export const metadata: Metadata = {
  title: "Mühendislik Hesaplama Araçları | Pro Makina",
  description:
    "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar",
  },
  openGraph: {
    title: "Mühendislik Hesaplama Araçları | Pro Makina",
    description:
      "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
    url: "https://www.promakina.com.tr/programlar",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mühendislik Hesaplama Araçları | Pro Makina",
    description:
      "Konveyör, helezon, tambur, elevatör ve proses ekipmanları için profesyonel mühendislik hesaplama araçları.",
  },
};

const trustChips = [
  "Static SEO optimized sayfalar",
  "Mühendislik odaklı teknik içerik",
  "Teklif ve teknik destek dönüşümü",
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.26),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_34%)]" />
        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              PRO MAKİNA / PROGRAMLAR
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Mühendislik Hesaplama Araçları
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
              Konveyör, helezon, tambur, elevatör ve proses ekipmanları için
              profesyonel mühendislik hesaplama araçları.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#hesaplama-kartlari"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Hesaplamalara Başla
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/14"
            >
              Teknik Destek Al
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustChips.map((chip) => (
              <div
                key={chip}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white/86 backdrop-blur-sm"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 pt-8 sm:pb-10 sm:pt-10">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_48%,#eef4ff_100%)] px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Ultra Premium Hesaplama Merkezi
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Teknik aramaları müşteri talebine dönüştüren SEO odaklı mühendislik katmanı
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Bu merkez, yalnız bir program listesi değil; arama motoru görünürlüğünü,
                  teknik otoriteyi ve teklif dönüşümünü aynı sayfa omurgasında birleştiren
                  profesyonel mühendislik vitrini olarak kurgulandı.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                  Hesap araçları, güçlü içerik katmanıyla birlikte aynı URL altında
                  hem kullanıcıyı hem Google’ı doğru niyete taşır.
                </div>
                <div className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                  Her hesap sayfasında teknik özet, ilgili makinalar, ilgili içerikler
                  ve teklif çağrısı birlikte görünür.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EngineeringCalculationCenter cards={engineeringCalculationCards} />

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Canlı Program Modalları
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Aynı sayfa üstünde hızlı kullanım için mevcut modal sistem
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                SEO odaklı statik hesap sayfalarının yanında, kullanıcıların sayfa
                değiştirmeden hızlı etkileşime geçebilmesi için mevcut profesyonel
                modal altyapısını da aşağıda koruyoruz.
              </p>
            </div>

            <div className="mt-8">
              <ProgramsModalExperience groups={programGroups} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
