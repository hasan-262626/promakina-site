import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { machineCategoryMap, machineCategoryPages } from "../../components/machine-group-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const aliasMap: Record<string, string> = {
  "tasima-sistemleri": "tasima-ekipmanlari",
  "depolama-sistemleri": "depolama-ve-besleme-sistemleri",
};

function getCategory(slug: string) {
  const resolvedSlug = aliasMap[slug] ?? slug;
  return machineCategoryMap[resolvedSlug];
}

export function generateStaticParams() {
  return machineCategoryPages
    .filter((category) => category.slug !== "tambur-sistemleri")
    .map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | Pro Makina`,
    description: category.shortDescription,
    alternates: {
      canonical: `https://www.promakina.com.tr/makinalar-ekipman/${category.slug}`,
    },
  };
}

export default async function MachineCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = aliasMap[slug] ?? slug;

  if (resolvedSlug !== slug) {
    redirect(`/makinalar-ekipman/${resolvedSlug}`);
  }

  const category = machineCategoryMap[resolvedSlug];

  if (!category || category.slug === "tambur-sistemleri") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,15,35,0.88) 0%, rgba(5,15,35,0.78) 45%, rgba(5,15,35,0.56) 100%), url('${category.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="site-container flex min-h-[260px] items-center py-14">
          <div className="max-w-3xl text-white">
            <nav className="text-sm text-white/72">
              <Link href="/" className="transition hover:text-white">
                Ana Sayfa
              </Link>
              <span className="px-2 text-white/40">/</span>
              <Link href="/makinalar-ekipman" className="transition hover:text-white">
                Makinalar & Ekipman
              </Link>
              <span className="px-2 text-white/40">/</span>
              <span className="text-white">{category.title}</span>
            </nav>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {category.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
              {category.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
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
                href={`/makinalar-ekipman/${category.slug}/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={product.gallery[0]?.src ?? category.heroImage}
                      alt={product.title}
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
