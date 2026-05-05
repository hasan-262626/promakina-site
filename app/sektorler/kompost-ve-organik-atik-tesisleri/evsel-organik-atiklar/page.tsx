import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../../components/Hero";

export const metadata: Metadata = {
  title: "Evsel Organik Atıkların Değerlendirilmesi | Pro Makina",
  description:
    "Evsel organik atıkların kompost ve biyogaz tesislerinde değerlendirilmesi için proses, ayrıştırma ve anahtar teslim tesis çözümleri.",
  alternates: {
    canonical:
      "https://www.promakina.com.tr/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
  },
  openGraph: {
    title: "Evsel Organik Atıkların Değerlendirilmesi | Pro Makina",
    description:
      "Evsel organik atıkların kompost ve biyogaz tesislerinde değerlendirilmesi için proses, ayrıştırma ve anahtar teslim tesis çözümleri.",
    url: "https://www.promakina.com.tr/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Evsel Organik Atıkların Değerlendirilmesi"
        description="Evsel organik atıklar, kompost ve biyogaz tesislerinde yüksek verimle değerlendirilebilen önemli hammaddelerdir."
        image="/images/proses1.jpg"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          İletişime Geç
        </Link>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              <article>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Evsel Organik Atıkların Değerlendirilmesi
                </h1>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Evsel organik atıklar, kompost ve biyogaz tesislerinde yüksek verimle değerlendirilebilen önemli
                    hammaddelerdir. Doğru ayrıştırma, nem dengesi ve proses yönetimi ile çevreye zarar vermeden ekonomik
                    değere dönüştürülebilir.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Kompost Üretiminde Kullanımı
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Evsel organik atıkların kompost üretiminde kullanılabilmesi için ön ayrıştırma, yabancı madde
                    uzaklaştırma ve uygun karışım oranı kritik öneme sahiptir. Nem ve karbon-azot dengesi doğru kurulduğunda
                    stabil ve pazarlanabilir son ürün elde edilebilir.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Biyogaz Sistemlerinde Değerlendirme
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Biyogaz uygulamalarında evsel organik atıklar, uygun ön işleme ve reçete dengesi ile yüksek metan
                    potansiyeli sunabilir. Besleme kararlılığı, kirletici kontrolü ve proses sürekliliği sağlandığında
                    sistem verimi önemli ölçüde yükselir.
                  </p>
                </div>
              </article>

              <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                  Pro Makina ile anahtar teslim tesis çözümleri için iletişime geçin.
                </p>
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
          </div>
        </div>
      </section>
    </main>
  );
}
