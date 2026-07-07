import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../../../components/Hero";
import {
  topicalBlogCategoryMap,
  topicalBlogDynamicSlugs,
} from "../../../../lib/topical-authority-blog-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return topicalBlogDynamicSlugs
    .filter((slug) => topicalBlogCategoryMap[slug])
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = topicalBlogCategoryMap[slug];

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | Blog Kategorisi`,
    description: category.description,
    alternates: {
      canonical: `https://www.promakina.com.tr/kutuphane/blog/kategori/${slug}`,
    },
    openGraph: {
      title: `${category.title} | Blog Kategorisi`,
      description: category.description,
      url: `https://www.promakina.com.tr/kutuphane/blog/kategori/${slug}`,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Blog Kategorisi`,
      description: category.description,
    },
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = topicalBlogCategoryMap[slug];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title={category.title}
        description={category.description}
        image="/images/01-genel/proses1.png"
      >
        <a
          href="https://wa.me/905320580104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
        >
          WhatsApp ile Teklif Al
        </a>
        <a
          href="tel:+905320580104"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          Telefonla Ara
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-[#278DC0]">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/kutuphane" className="transition hover:text-[#278DC0]">
                Kütüphane
              </Link>
              <span>/</span>
              <Link href="/kutuphane/blog" className="transition hover:text-[#278DC0]">
                Blog
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">{category.title}</span>
            </nav>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
              SEO Cluster
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {category.title}
            </h1>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {category.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Yazılar
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Bu kategori, aynı konu kümesi altında birbirini tamamlayan teknik blogları, proses
              rehberlerini ve mühendislik içeriklerini bir araya getirir.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.relatedContents.map((content) => (
                <Link
                  key={content.href}
                  href={content.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {content.eyebrow ? (
                      <span className="inline-flex rounded-full bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                        {content.eyebrow}
                      </span>
                    ) : null}
                    <span className="text-xs font-medium text-slate-500">
                      Okuma süresi: {content.readingTime ?? "6-8 dk"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                    {content.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{content.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    İçeriği İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
