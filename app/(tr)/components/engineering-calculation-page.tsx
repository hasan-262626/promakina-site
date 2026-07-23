import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import type { EngineeringCalculationCard } from "../lib/engineering-calculation-center-data";
import { siteContact } from "../lib/site-contact";
import { ServiceRelatedTechnicalContents } from "./service-related-technical-contents";
import { SocialFollowPanel } from "./social-follow-panel";

const siteUrl = "https://www.promakina.com.tr";

export function buildEngineeringCalculationMetadata(
  page: EngineeringCalculationCard,
): Metadata {
  const canonical = `${siteUrl}/programlar/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "website",
      images: [{ url: `${siteUrl}${page.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
    },
  };
}

export function EngineeringCalculationPage({
  page,
}: {
  page: EngineeringCalculationCard;
}) {
  const canonical = `${siteUrl}/programlar/${page.slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Programlar",
        item: `${siteUrl}/programlar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: canonical,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    telephone: "+90 532 058 01 04",
    email: "info@promakina.com.tr",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: siteUrl,
    telephone: "+90 532 058 01 04",
    email: "info@promakina.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: page.title,
    description: page.description,
    url: canonical,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.22),transparent_38%)]" />
        <div className="site-container relative py-10 sm:py-14 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-sm text-white/66"
          >
            <Link href="/" className="transition hover:text-white">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/programlar" className="transition hover:text-white">
              Programlar
            </Link>
            <span>/</span>
            <span className="font-medium text-white">{page.title}</span>
          </nav>

          <div className="mt-6 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              Mühendislik Hesaplama Aracı
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
              {page.heroDescription}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programlar#hesaplama-kartlari"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Hesaplamalara Başla
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Teknik Destek Al
            </Link>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:p-6">
            <p className="text-sm leading-7 text-white/78">
              Konveyör, helezon, tambur, elevatör ve proses ekipmanları için
              doğru ekipman ön seçimini hızlandıran, SEO uyumlu ve teklif odaklı
              mühendislik sayfası.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/14"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Hesaplama Mantığı ve Kullanım Çerçevesi
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="content-stack">
              {page.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Teknik Değerlendirme Özeti
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                      Kriter
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                      Açıklama
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-950 sm:px-8">
                      Mühendislik Önemi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {page.summaryRows.map((row) => (
                    <tr key={row.criterion}>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-950 sm:px-8">
                        {row.criterion}
                      </td>
                      <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                        {row.description}
                      </td>
                      <td className="px-6 py-4 text-sm leading-7 text-slate-600 sm:px-8">
                        {row.importance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ServiceRelatedTechnicalContents items={page.relatedArticles} />

      <section className="section-bottom-space">
        <div className="site-container">
          <SocialFollowPanel />
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                İlgili Makinalar
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Bu hesap mantığıyla doğrudan bağlantılı ekipman ailelerini ve
                ürün sayfalarını aşağıdan inceleyebilirsiniz.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {page.relatedMachines.map((machine) => (
                <Link
                  key={machine.href}
                  href={machine.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {machine.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {machine.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Makineyi İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-6 space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Projeniz için doğru ekipmanı birlikte belirleyelim.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Bu hesaplama sayfasını ön değerlendirme aracı olarak kullanın; gerçek
              kapasite, sahadaki ürün davranışı ve teklif kapsamı için teknik
              ekibimizle doğrudan temas kurun.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                WhatsApp
              </a>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function renderCalculationParagraphs(
  paragraphs: string[],
): ReactNode {
  return paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}
