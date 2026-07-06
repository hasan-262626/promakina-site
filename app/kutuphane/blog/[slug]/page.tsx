import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../../components/Hero";
import { BlogArticleTemplate } from "../../../components/blog-article-template";
import {
  buildDrumSystemDetailMetadata,
  DrumSystemDetailPage,
} from "../../../components/drum-system-detail-page";
import { SilicaSandDryingProcessPage } from "../../../components/silica-sand-drying-process-page";
import {
  buildSectorMachineGuideMetadata,
  SectorMachineGuideDetailPage,
} from "../../../components/sector-machine-guide-detail-page";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { dryingSystemDetailMap } from "../../../lib/drying-system-detail-data";
import { drumSystemDetailMap } from "../../../lib/drum-system-detail-data";
import { fertilizerSystemDetailMap } from "../../../lib/fertilizer-system-detail-data";
import { compostSystemDetailMap } from "../../../lib/compost-system-detail-data";
import { liquidFertilizerDetailMap } from "../../../lib/liquid-fertilizer-detail-data";
import { sectorMachineGuideDetailMap } from "../../../lib/sector-machine-guide-detail-data";
import {
  topicalBlogArticleMap,
  topicalBlogCategoryMap,
  topicalBlogDynamicSlugs,
} from "../../../lib/topical-authority-blog-data";
import { trText } from "../../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function buildCategoryMetadata(slug: string): Metadata {
  const category = topicalBlogCategoryMap[slug];
  const title = trText(category.title);
  const description = trText(category.description);

  return {
    title: `${title} | Blog Kategorisi | Pro Makina`,
    description,
    alternates: {
      canonical: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | Blog Kategorisi | Pro Makina`,
      description,
      url: `https://www.promakina.com.tr/kutuphane/blog/${slug}`,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Blog Kategorisi | Pro Makina`,
      description,
    },
  };
}

export async function generateStaticParams() {
  return Array.from(
    new Set([
      ...topicalBlogDynamicSlugs,
      ...Object.keys(dryingSystemDetailMap),
      ...Object.keys(drumSystemDetailMap),
      ...Object.keys(fertilizerSystemDetailMap),
      ...Object.keys(compostSystemDetailMap),
      ...Object.keys(liquidFertilizerDetailMap),
      ...Object.keys(sectorMachineGuideDetailMap),
    ]),
  ).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (fertilizerSystemDetailMap[slug]) {
    return buildDrumSystemDetailMetadata(fertilizerSystemDetailMap[slug]);
  }

  if (compostSystemDetailMap[slug]) {
    return buildDrumSystemDetailMetadata(compostSystemDetailMap[slug]);
  }

  if (liquidFertilizerDetailMap[slug]) {
    return buildDrumSystemDetailMetadata(liquidFertilizerDetailMap[slug]);
  }

  if (dryingSystemDetailMap[slug]) {
    return buildDrumSystemDetailMetadata(dryingSystemDetailMap[slug]);
  }

  if (drumSystemDetailMap[slug]) {
    return buildDrumSystemDetailMetadata(drumSystemDetailMap[slug]);
  }

  if (sectorMachineGuideDetailMap[slug]) {
    return buildSectorMachineGuideMetadata(sectorMachineGuideDetailMap[slug]);
  }

  if (topicalBlogArticleMap[slug]) {
    const article = topicalBlogArticleMap[slug];

    return buildLibraryMetadata({
      title: trText(article.metaTitle),
      description: trText(article.description),
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
        name: "KÃ¼tÃ¼phane",
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
        image="/images/01-genel/proses1.png"
      >
        {category.ctaVariant === "sector-guide" ? (
          <>
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
          </>
        ) : (
          <>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Teknik GÃ¶rÃ¼ÅŸme Talep Et
            </Link>
            <a
              href="https://wa.me/905320580104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              WhatsApp
            </a>
          </>
        )}
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
                KÃ¼tÃ¼phane
              </Link>
              <span>/</span>
              <Link href="/kutuphane/blog" className="transition hover:text-[#278DC0]">
                Blog
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-700">{category.title}</span>
            </nav>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
              Blog Kategorisi
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
              {[
                { label: "Hizmetler", href: "/hizmetler" },
                { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
                { label: "SektÃ¶rler", href: "/sektorler" },
                { label: "Teknik GÃ¶rÃ¼ÅŸme", href: "/iletisim" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Ä°lgili Ä°Ã§erikler
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Bu kategori, birbiriyle baÄŸlantÄ±lÄ± teknik iÃ§erikleri aynÄ± bilgi kÃ¼mesinde
              toplar. Ä°Ã§erikleri birlikte okumak; ekipman seÃ§imi, kapasite hesabÄ± ve proses
              tasarÄ±mÄ± aÃ§Ä±sÄ±ndan daha doÄŸru bir mÃ¼hendislik Ã§erÃ§evesi saÄŸlar.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.relatedContents.map((content) => (
                <Link
                  key={content.href}
                  href={content.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  {content.eyebrow || content.readingTime ? (
                    <div className="flex flex-wrap items-center gap-2">
                      {content.eyebrow ? (
                        <span className="inline-flex rounded-full bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#154764]">
                          {content.eyebrow}
                        </span>
                      ) : null}
                      {content.readingTime ? (
                        <span className="text-xs font-medium text-slate-500">
                          Okuma sÃ¼resi: {content.readingTime}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                  <span className="block text-lg font-semibold text-slate-950">
                    {content.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">
                    {content.description}
                  </span>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    {content.readingTime ? "Makaleyi Oku" : "DevamÄ±nÄ± Oku"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[28px] bg-gradient-to-br from-[#154764] via-[#154764] to-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Teknik Değerlendirme ve İçerik Rehberliği
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {category.ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {category.ctaVariant === "sector-guide" ? (
                <>
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
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Telefonla Ara
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0] hover:text-white"
                  >
                    Teknik Görüşme Talep Et
                  </Link>
                  <a
                    href="https://wa.me/905320580104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (fertilizerSystemDetailMap[slug]) {
    return <DrumSystemDetailPage page={fertilizerSystemDetailMap[slug]} />;
  }

  if (compostSystemDetailMap[slug]) {
    return <DrumSystemDetailPage page={compostSystemDetailMap[slug]} />;
  }

  if (liquidFertilizerDetailMap[slug]) {
    return <DrumSystemDetailPage page={liquidFertilizerDetailMap[slug]} />;
  }

  if (dryingSystemDetailMap[slug]) {
    if (slug === "silis-kumu-kurutma-prosesi") {
      return <SilicaSandDryingProcessPage />;
    }
    return <DrumSystemDetailPage page={dryingSystemDetailMap[slug]} />;
  }

  if (drumSystemDetailMap[slug]) {
    return <DrumSystemDetailPage page={drumSystemDetailMap[slug]} />;
  }

  if (sectorMachineGuideDetailMap[slug]) {
    return <SectorMachineGuideDetailPage guide={sectorMachineGuideDetailMap[slug]} />;
  }

  if (topicalBlogCategoryMap[slug]) {
    return <CategoryPage slug={slug} />;
  }

  const article = topicalBlogArticleMap[slug];

  if (!article) {
    notFound();
  }

  return (
    <BlogArticleTemplate
      title={article.title}
      description={article.description}
      canonical={`https://www.promakina.com.tr/kutuphane/blog/${slug}`}
      heroDescription={article.heroDescription}
      categoryLabel={topicalBlogCategoryMap[article.categorySlug]?.title ?? "Blog"}
      sections={article.sections.map((section) => ({
        title: section.title,
        blocks: [
          ...section.paragraphs.map((paragraph) => ({
            content: <p>{paragraph}</p>,
          })),
          ...(section.subsections ?? []).map((subsection) => ({
            heading: subsection.heading,
            content: (
              <>
                {subsection.paragraphs.map((paragraph) => (
                  <p key={`${subsection.heading}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                ))}
              </>
            ),
          })),
        ],
      }))}
      extraSection={
        <>
          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Teknik Değerlendirme Özeti
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Bu özet alanı, konunun tasarım ve saha tarafında en çok etkileyen karar
              başlıklarını tek bakışta görebilmeniz için hazırlandı.
            </p>
            <div className="mt-8 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
              <table className="w-full table-fixed border-collapse bg-white text-left">
                <thead className="bg-slate-50">
                  <tr className="text-sm font-semibold text-slate-950">
                    <th className="w-[22%] px-5 py-4">Kriter</th>
                    <th className="w-[38%] px-5 py-4">Açıklama</th>
                    <th className="w-[40%] px-5 py-4">Mühendislik Önemi</th>
                  </tr>
                </thead>
                <tbody>
                  {article.summaryRows.map((row) => (
                    <tr key={row.criterion} className="border-t border-slate-200 align-top">
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
            <div className="mt-6 grid gap-4 md:hidden">
              {article.summaryRows.map((row) => (
                <div
                  key={row.criterion}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{row.criterion}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-950">Açıklama:</span>{" "}
                    {row.description}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-950">Mühendislik önemi:</span>{" "}
                    {row.importance}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Teknik İçerikler
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Bu konuyu tamamlayan ekipman, proses ve yatırım başlıklarını aşağıdaki
              teknik sayfalardan inceleyebilirsiniz.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {article.relatedContents.map((content) => (
                <Link
                  key={content.href}
                  href={content.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <span className="block text-lg font-semibold text-slate-950">
                    {content.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">
                    {content.description}
                  </span>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    İçeriği İncele
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </>
      }
      ctaText={article.ctaText}
      ctaVariant={article.ctaVariant}
      relatedServices={article.relatedServices}
      faqs={article.faqs}
      internalLinks={article.internalLinks}
      nextContent={article.nextContent}
    />
  );
}



