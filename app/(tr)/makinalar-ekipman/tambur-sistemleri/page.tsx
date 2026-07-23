import { trLanguageAlternates } from "../../../i18n/routes";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { MachinePageHero } from "../../components/machine-page-hero";
import { drumProductPages } from "../../components/drum-product-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";

const canonical = "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri";

const spotlightLinks = [
  {
    title: "Kurutma Tamburu Hesabı",
    description: "Tambur kapasite hesabı aracına geçerek kurutma prosesiniz için ön hesap yapın.",
    href: "/programlar?modal=tambur-kapasite-hesabi",
  },
  {
    title: "Kurutma Tamburu Kapasite Hesabı Blogu",
    description: "Kapasite hesabında hangi proses verilerinin belirleyici olduğunu inceleyin.",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
  },
  {
    title: "Kurutma Tamburu Tasarım Kriterleri",
    description: "Tambur boyutlandırma, iç kanat ve termal proses yaklaşımını blog içeriğinde görün.",
    href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
  },
  {
    title: "Teknik Teklif Al",
    description: "Kapasite, ürün tipi ve saha koşullarınıza göre teknik teklif talebinizi iletin.",
    href: "/iletisim",
  },
];

export const metadata: Metadata = {
  title: "Tambur Sistemleri | Granülatör, Kurutma, Soğutma ve Kaplama Tamburları",
  description:
    "Pro Makina tambur sistemleri; granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu, kompost tamburu ve özel proses tamburlarını kapsar.",
  alternates: {
    canonical,
    languages: trLanguageAlternates("/makinalar-ekipman/tambur-sistemleri"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tambur Sistemleri | Granülatör, Kurutma, Soğutma ve Kaplama Tamburları",
    description:
      "Pro Makina tambur sistemleri; granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu, kompost tamburu ve özel proses tamburlarını kapsar.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function DrumSystemsCategoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <MachinePageHero
        title="Tambur Sistemleri"
        calculatorHref={getMachineCalculatorHref({
          family: "drum",
          title: "Tambur Sistemleri",
        })}
      />

      <section className="section-space">
        <div className="site-container">
          <section aria-labelledby="tambur-sistemleri-intro" className="max-w-5xl">
            <h2
              id="tambur-sistemleri-intro"
              className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Tambur Sistemleri
            </h2>
            <p className="mt-3 text-lg font-semibold leading-8 text-blue-700 sm:text-xl">
              Granülasyon, kurutma ve özel prosesler için tambur çözümleri
            </p>
            <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base">
              Pro Makina; granülasyon, kurutma, soğutma, kaplama, kompost
              olgunlaştırma, karıştırma, sterilizasyon, stabilizasyon ve özel proses
              ihtiyaçları için tambur sistemleri tasarlar ve imal eder. Ürün yapısı,
              kapasite, nem oranı, kalış süresi, sıcaklık ve proses hedeflerine göre
              granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu,
              kompost tamburu, karıştırma tamburu, sterilizasyon tamburu,
              stabilizasyon tamburu ve özel tambur çözümlerinde tambur çapı, tambur
              boyu, iç kanat yapısı, tahrik sistemi ve yardımcı ekipmanlar birlikte
              değerlendirilir.
            </p>
          </section>

          <section aria-labelledby="tambur-spotlight-links" className="mt-8 rounded-[30px] border border-slate-200 bg-slate-50/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-7">
            <h3
              id="tambur-spotlight-links"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              Öne Çıkan İç Linkler
            </h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {spotlightLinks.map((item) => (
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
            {drumProductPages.map((product) => (
              <Link
                key={product.slug}
                href={`/makinalar-ekipman/tambur-sistemleri/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={product.mainImage}
                      alt={product.mainImageAlt}
                      fill
                      sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex min-h-[290px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                    <span className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Ürün Sayfası
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto pt-8">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-blue-700">
                        Detayları İncele
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1"
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
