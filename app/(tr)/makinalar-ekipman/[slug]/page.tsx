import { trLanguageAlternates } from "../../../i18n/routes";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MachinePageHero } from "../../components/machine-page-hero";
import { machineCategoryMap, machineCategoryPages } from "../../components/machine-group-data";
import { getMachineCalculatorHref } from "../../lib/machine-calculator-link";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
  getMachineResolvedCategorySlug,
} from "../../lib/machine-route-utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCategory(slug: string) {
  return machineCategoryMap[getMachineResolvedCategorySlug(slug)];
}

function getPublicCategorySlug(slug: string) {
  return getMachinePublicCategorySlug(slug);
}

function getPublicProductSlug(slug: string) {
  return getMachinePublicProductSlug(slug);
}

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .map((category) => ({
      slug: getPublicCategorySlug(category.slug),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  const canonical = `https://www.promakina.com.tr/makinalar-ekipman/${getPublicCategorySlug(category.slug)}`;

  return {
    title: `${category.title}`,
    description: category.shortDescription,
    alternates: {
      canonical,
      languages: trLanguageAlternates(new URL(canonical).pathname),
    },
    openGraph: {
      title: `${category.title}`,
      description: category.shortDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function MachineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = getMachineResolvedCategorySlug(slug);
  const publicCategorySlug = getPublicCategorySlug(resolvedSlug);

  if (slug !== publicCategorySlug) {
    redirect(`/makinalar-ekipman/${publicCategorySlug}`);
  }

  const category = machineCategoryMap[resolvedSlug];

  if (!category || category.slug === "tambur-sistemleri") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <MachinePageHero
        title={category.title}
        calculatorHref={getMachineCalculatorHref({
          family: category.calculatorFamily,
          title: category.title,
        })}
      />

      <section className="section-space">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
              Alt Ürünler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {category.title} alt ürünlerini ayrı ayrı inceleyin
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-slate-600 sm:text-base">
              {category.shortDescription} Prosesinize uygun makina tipini seçin ve ilgili ürün detay
              sayfasına geçin.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {category.products.map((product) => (
              <Link
                key={product.slug}
                href={`/makinalar-ekipman/${publicCategorySlug}/${getPublicProductSlug(product.slug)}`}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/20 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={product.gallery[0]?.src ?? category.heroImage}
                      alt={
                        product.gallery[0]?.src === "/images/siyah beyaz/tank 1.jpg"
                          ? "Pro Makina reaktör ve tank sistemleri"
                          : product.title
                      }
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
