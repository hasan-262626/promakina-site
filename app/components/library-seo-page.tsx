import type { Metadata } from "next";
import Link from "next/link";
import { siteContact, siteSocialSameAs } from "../lib/site-contact";
import type { ReactNode } from "react";
import { Hero } from "./Hero";
import { LibraryServiceLinks } from "./library-service-links";
import { SocialFollowPanel } from "./social-follow-panel";
import type { LibraryFaqItem, LibraryServiceLink } from "../lib/library-page-data";
import { trText } from "../lib/tr-text";

type LibrarySeoSection = {
  title: string;
  blocks: {
    heading?: string;
    content: ReactNode;
  }[];
};

type LibrarySeoPageProps = {
  title: string;
  description: string;
  canonical: string;
  heroDescription: string;
  categoryLabel: string;
  sections: LibrarySeoSection[];
  ctaText: string;
  relatedServices?: LibraryServiceLink[];
  faqs?: LibraryFaqItem[];
  extraSection?: ReactNode;
  heroImage?: string;
  internalLinks?: { label: string; href: string }[];
  nextContent?: { title: string; description: string; href: string };
  breadcrumbs?: { label: string; href: string }[];
};

export function buildLibraryMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}): Metadata {
  const normalizedTitle = trText(title);
  const normalizedDescription = trText(description);

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: normalizedTitle,
      description: normalizedDescription,
      url: canonical,
      siteName: "Pro Makina",
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description: normalizedDescription,
    },
  };
}

export function LibrarySeoPage({
  title,
  description,
  canonical,
  heroDescription,
  categoryLabel,
  sections,
  ctaText,
  relatedServices = [],
  faqs = [],
  extraSection,
  heroImage = "/images/01-genel/proses1.png",
  internalLinks = [],
  nextContent,
  breadcrumbs,
}: LibrarySeoPageProps) {
  const defaultBreadcrumbs = breadcrumbs ?? [
    { label: "Ana Sayfa", href: "/" },
    { label: "KÃ¼tÃ¼phane", href: "/kutuphane" },
    { label: "Blog", href: "/kutuphane/blog" },
    { label: title, href: canonical.replace("https://www.promakina.com.tr", "") || canonical },
  ];

  const normalizedBreadcrumbs = defaultBreadcrumbs.map((item) => ({
    label: item.label,
    href: item.href.startsWith("http")
      ? item.href
      : `https://www.promakina.com.tr${item.href === "/" ? "" : item.href}`,
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
    sameAs: ["https://www.promakina.com.tr", ...siteSocialSameAs],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    telephone: siteContact.phoneDisplay,
    email: siteContact.email,
    sameAs: siteSocialSameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: "75. YÄ±l Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E",
      addressLocality: "OdunpazarÄ±",
      addressRegion: "EskiÅŸehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalizedBreadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "Pro Makina",
    },
    about: [
      "Proses mÃ¼hendisliÄŸi",
      "EndÃ¼striyel makine imalatÄ±",
      "Anahtar teslim tesis kurulumu",
    ],
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      logo: {
        "@type": "ImageObject",
        url: "https://www.promakina.com.tr/logo.png",
      },
    },
    image: `https://www.promakina.com.tr${heroImage}`,
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <Hero title={title} description={heroDescription} image={heroImage}>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={siteContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
              {defaultBreadcrumbs.map((item, index) => {
                const href = item.href.startsWith("http")
                  ? item.href
                  : item.href;
                const isLast = index === defaultBreadcrumbs.length - 1;

                return (
                  <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                    {isLast ? (
                      <span className="font-medium text-slate-700">{item.label}</span>
                    ) : (
                      <Link href={href} className="transition hover:text-blue-700">
                        {item.label}
                      </Link>
                    )}
                    {!isLast ? <span>/</span> : null}
                  </span>
                );
              })}
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{categoryLabel}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h1>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
            {internalLinks.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="content-stack">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-6">
                    {section.blocks.map((block, index) => (
                      <div key={`${section.title}-${index}`}>
                        {block.heading ? (
                          <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{block.heading}</h3>
                        ) : null}
                        <div className="mt-3 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                          {block.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              {extraSection}

              <section>
                <div className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-sm">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    Teknik GÃ¶rÃ¼ÅŸme Talep Edin
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                    Bu iÃ§erik Pro Makina proses mÃ¼hendisliÄŸi yaklaÅŸÄ±mÄ±yla hazÄ±rlanmÄ±ÅŸtÄ±r. Ä°Ã§erikteki
                    teknik Ã§erÃ§eveyi kendi projenize uyarlamak, kapasite ve ekipman seÃ§imini birlikte
                    netleÅŸtirmek iÃ§in bizimle teknik gÃ¶rÃ¼ÅŸme planlayabilirsiniz.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/iletisim"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      Teknik GÃ¶rÃ¼ÅŸme Talep Edin
                    </Link>
                    <Link
                      href="/hizmetler"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                    >
                      Ä°lgili Hizmetleri Ä°ncele
                    </Link>
                  </div>
                </div>
              </section>

              {relatedServices.length ? <LibraryServiceLinks items={relatedServices} /> : null}

              <SocialFollowPanel />

              {faqs.length ? (
                <section>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    SÄ±k Sorulan Sorular
                  </h2>
                  <div className="mt-6 space-y-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {nextContent ? (
                <section>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    SÄ±radaki Ä°Ã§erik Ã–nerisi
                  </h2>
                  <Link
                    href={nextContent.href}
                    className="mt-6 block rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="text-lg font-semibold text-slate-950">{nextContent.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">{nextContent.description}</span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-blue-700">DevamÄ±nÄ± Oku</span>
                  </Link>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              Teknik GÃ¶rÃ¼ÅŸme Talep Edin
            </p>
            <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">{ctaText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href={siteContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
              <Link
                href="/hizmetler/teknik-danismanlik"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik DanÄ±ÅŸmanlÄ±k
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

