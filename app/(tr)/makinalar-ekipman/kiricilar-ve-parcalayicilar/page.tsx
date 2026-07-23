import { trLanguageAlternates } from "../../../i18n/routes";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MachinePageHero } from "../../components/machine-page-hero";
import { machineCategoryPages } from "../../components/machine-group-data";
import { crusherPublicProductRecords } from "../../components/crusher-product-public-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";
import { normalizeMachineSlug } from "../../lib/machine-route-utils";

function getCrusherCategory() {
  return machineCategoryPages.find((category) => category.calculatorFamily === "crusher") ?? null;
}

export const metadata: Metadata = {
  title: "Kırıcılar ve Parçalayıcılar",
  description:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, bıçaklı primer kırıcı, bıçaklı sekonder kırıcı, çeneli kırıcı ve dik milli kırıcı çözümlerini inceleyin.",
  alternates: {
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    languages: trLanguageAlternates("/makinalar-ekipman/kiricilar-ve-parcalayicilar"),
  },
  openGraph: {
    title: "Kırıcılar ve Parçalayıcılar",
    description:
      "Çekiçli kırıcı, zincirli kırıcı, shredder, bıçaklı primer kırıcı, bıçaklı sekonder kırıcı, çeneli kırıcı ve dik milli kırıcı çözümlerini inceleyin.",
    url: "https://www.promakina.com.tr/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Page() {
  const category = getCrusherCategory();

  if (!category) {
    notFound();
  }

  const products = crusherPublicProductRecords
    .map((record) => {
      const product = category.products.find(
        (item) => normalizeMachineSlug(item.slug) === normalizeMachineSlug(record.dataSlug),
      );

      if (!product) {
        return null;
      }

      return {
        record,
        product,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <MachinePageHero
        title="Kırıcılar ve Parçalayıcılar"
        calculatorHref={getMachineCalculatorHref({
          family: "crusher",
          title: "Kırıcılar ve Parçalayıcılar",
        })}
      />

      <section className="section-space">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
              Alt Ürünler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Kırıcılar ve Parçalayıcılar alt ürünlerini ayrı ayrı inceleyin
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base">
              {category.shortDescription} Prosesinize uygun makina tipini seçin ve ilgili ürün detay
              sayfasına geçin.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map(({ record, product }) => (
              <Link
                key={record.publicSlug}
                href={`/makinalar-ekipman/kiricilar-ve-parcalayicilar/${record.publicSlug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={product.gallery[0]?.src ?? category.heroImage}
                      alt={record.title}
                      fill
                      sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex min-h-[260px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {record.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {record.description}
                    </p>
                    <div className="mt-auto pt-8">
                      <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-[#278DC0]/20 group-hover:text-[#278DC0]">
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
