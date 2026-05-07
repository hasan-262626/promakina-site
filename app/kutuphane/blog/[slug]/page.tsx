import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../../components/Hero";
import {
  LibrarySeoPage,
  buildLibraryMetadata,
} from "../../../components/library-seo-page";
import {
  topicalBlogArticleMap,
  topicalBlogCategoryMap,
  topicalBlogDynamicSlugs,
} from "../../../lib/topical-authority-blog-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function buildCategoryMetadata(slug: string): Metadata {
  const category = topicalBlogCategoryMap[slug];

  return {
    title: `${category.title} | Blog Kategorisi | Pro Makina`,
    description: category.description,
    alternates: {
      canonical: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
    },
    openGraph: {
      title: `${category.title} | Blog Kategorisi | Pro Makina`,
      description: category.description,
      url: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Blog Kategorisi | Pro Makina`,
      description: category.description,
    },
  };
}

export async function generateStaticParams() {
  return topicalBlogDynamicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (topicalBlogArticleMap[slug]) {
    const article = topicalBlogArticleMap[slug];
    return buildLibraryMetadata({
      title: article.metaTitle,
      description: article.description,
      canonical: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
    });
  }

  if (topicalBlogCategoryMap[slug]) {
    return buildCategoryMetadata(slug);
  }

  return {};
}

function CategoryPage({ slug }: { slug: string }) {
  const category = topicalBlogCategoryMap[slug];

  if (!category) {
    notFound();
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    telephone: "+90 532 058 01 04",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: "+90 532 058 01 04",
    email: "info@promakina.com.tr",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kütüphane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: category.title,
        item: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero
        title={category.title}
        description={category.description}
        image="/images/proses1.jpg"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905320580104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-blue-700">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/kutuphane" className="transition hover:text-blue-700">
                Kütüphane
              </Link>
              <span>/</span>
              <Link href="/kutuphane/blog" className="transition hover:text-blue-700">
                Blog
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">{category.title}</span>
            </nav>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              BLOG KATEGORİSİ
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {category.title}
            </h1>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              {category.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hizmetler"
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Hizmetler
              </Link>
              <Link
                href="/makinalar"
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Makinalar
              </Link>
              <Link
                href="/sektorler"
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Sektörler
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Teknik Görüşme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili İçerikler
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Bu kategori, birbiriyle bağlantılı teknik içerikleri aynı bilgi kümesinde toplar.
              İçerikleri birlikte okumak; ekipman seçimi, kapasite hesabı ve proses tasarımı
              açısından daha doğru bir mühendislik çerçevesi sağlar.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.relatedContents.map((content) => (
                <Link
                  key={content.href}
                  href={content.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <span className="block text-lg font-semibold text-slate-950">
                    {content.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">
                    {content.description}
                  </span>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Devamını Oku
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Teknik Değerlendirme ve İçerik Rehberliği
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {category.ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (topicalBlogCategoryMap[slug]) {
    return <CategoryPage slug={slug} />;
  }

  const article = topicalBlogArticleMap[slug];

  if (!article) {
    notFound();
  }

  return (
    <LibrarySeoPage
      title={article.title}
      description={article.description}
      canonical={`https://www.promakina.com.tr/kutuphane/blog/${slug}`}
      heroDescription={article.heroDescription}
      categoryLabel={topicalBlogCategoryMap[article.categorySlug]?.title ?? "Blog"}
      sections={article.sections.map((section) => ({
        title: section.title,
        blocks: section.paragraphs.map((paragraph) => ({
          content: <p>{paragraph}</p>,
        })),
      }))}
      extraSection={
        <>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Teknik Değerlendirme Özeti
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-slate-950">
                        Kriter
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-slate-950">
                        Açıklama
                      </th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-slate-950">
                        Mühendislik Önemi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {article.summaryRows.map((row) => (
                      <tr key={row.criterion}>
                        <td className="px-5 py-4 text-sm font-semibold text-slate-950">
                          {row.criterion}
                        </td>
                        <td className="px-5 py-4 text-sm leading-7 text-slate-600">
                          {row.description}
                        </td>
                        <td className="px-5 py-4 text-sm leading-7 text-slate-600">
                          {row.importance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Teknik İçerikler
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {article.relatedContents.map((content) => (
                <Link
                  key={content.href}
                  href={content.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <span className="block text-lg font-semibold text-slate-950">
                    {content.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">
                    {content.description}
                  </span>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Devamını Oku
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </>
      }
      ctaText={article.ctaText}
      relatedServices={article.relatedServices}
      faqs={article.faqs}
      internalLinks={article.internalLinks}
      nextContent={article.nextContent}
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kütüphane", href: "/kutuphane" },
        { label: "Blog", href: "/kutuphane/blog" },
        {
          label: topicalBlogCategoryMap[article.categorySlug]?.title ?? "Kategori",
          href: `/kutuphane/blog/${article.categorySlug}`,
        },
        { label: article.title, href: `/kutuphane/blog/${slug}` },
      ]}
    />
  );
}
