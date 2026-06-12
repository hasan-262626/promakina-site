import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { MachinePageHero } from "../../components/machine-page-hero";
import { drumProductPages } from "../../components/drum-product-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";

const canonical = "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri";

export const metadata: Metadata = {
  title: "Tambur Sistemleri | Pro Makina",
  description:
    "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleriyle endüstriyel tambur sistemlerini inceleyin.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Tambur Sistemleri | Pro Makina",
    description:
      "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleriyle endüstriyel tambur sistemlerini inceleyin.",
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
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Alt Ürünler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tambur çeşitlerini ayrı ayrı inceleyin
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base">
              Prosesinize uygun tambur tipini seçin ve ilgili makina detay sayfasına geçin.
              Her alt ürün kendi teknik odakları, uygulama alanları ve opsiyonlarıyla ayrı
              incelenebilir yapıdadır.
            </p>
          </div>

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
                  <div className="flex min-h-[260px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {product.shortDescription}
                    </p>
                    <div className="mt-auto pt-8">
                      <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700">
                        Ürünü İncele
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
