import type { Metadata } from "next";
import { MaterialCalculator } from "@/components/programs/material-calculator/MaterialCalculator";

const canonical = "https://www.promakina.com.tr/programlar/malzeme-agirlik-hesabi";

export const metadata: Metadata = {
  title: "Malzeme Ağırlık Hesaplama | Sac, Profil, Boru, Lama ve Çelik Ağırlık Hesabı",
  description:
    "Sac, lama, kutu profil, sanayi borusu, köşebent, IPE, HEA, HEB, NPU, UPE, transmisyon ve delikli sac ağırlıklarını hesaplayın. Ağırlık, fiyat ve malzeme listesi oluşturun.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Malzeme Ağırlık ve Fiyat Hesaplama",
    description:
      "Sac, profil, boru, lama ve standart çelik profiller için ağırlık, fiyat ve toplam malzeme listesi oluşturun.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

const heroChips = [
  "Sac / Lama",
  "Boru / Kutu Profil",
  "IPE / HEA / NPU",
  "Liste ve Yazdırma",
];

export default function MaterialWeightPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#154764]">
        <div className="site-container py-9 sm:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8ec9e8]">
            Pro Makina Mühendislik Araçları
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Malzeme Ağırlık ve Fiyat Hesaplama
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
            Sac, profil, boru, lama ve standart çelik profiller için ağırlık, fiyat ve
            toplam malzeme listesi oluşturun.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex min-h-[36px] items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hesaplayıcı */}
      <section className="py-8 sm:py-10">
        <div className="site-container max-w-[1340px]">
          <MaterialCalculator />
        </div>
      </section>
    </main>
  );
}
