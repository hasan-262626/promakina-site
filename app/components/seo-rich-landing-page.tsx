import Link from "next/link";
import { Hero } from "./Hero";
import { createWhatsAppHref, siteContact } from "../lib/site-contact";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type ContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

type SummaryRow = {
  criterion: string;
  description: string;
  importance: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

type SeoRichLandingPageProps = {
  canonical: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  introLabel?: string;
  introTitle: string;
  introParagraphs: string[];
  breadcrumbs: BreadcrumbItem[];
  sections: ContentSection[];
  summaryRows: SummaryRow[];
  faqs: FaqItem[];
  relatedGroups: RelatedGroup[];
  ctaText: string;
  serviceName: string;
  serviceDescription: string;
};

export function SeoRichLandingPage({
  canonical,
  heroTitle,
  heroDescription,
  image,
  introLabel = "Teknik Çözüm",
  introTitle,
  introParagraphs,
  breadcrumbs,
  sections,
  summaryRows,
  faqs,
  relatedGroups,
  ctaText,
  serviceName,
  serviceDescription,
}: SeoRichLandingPageProps) {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "https://www.promakina.com.tr/" },
    ...breadcrumbs.map((item) => ({
      label: item.label,
      href: item.href.startsWith("http")
        ? item.href
        : `https://www.promakina.com.tr${item.href}`,
    })),
  ];

  const faqSchema = {
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    url: canonical,
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    provider: {
      "@type": "Organization",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
      telephone: siteContact.phoneDisplay,
      email: siteContact.email,
    },
  };

  const whatsappHref = createWhatsAppHref(
    `Merhaba, Pro Makina web sitenizden ulaşıyorum. Aşağıdaki ürün/hizmet için teklif almak istiyorum: ${heroTitle}`,
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero title={heroTitle} description={heroDescription} image={image}>
        <Link
          href="/iletisim"
          data-cta-event="quote_button_click"
          data-cta-label={`${heroTitle}_hero_quote`}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Teklif Al
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          WhatsApp
        </a>
        <a
          href={siteContact.phoneHref}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/18"
        >
          Telefon
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container content-stack">
          <section className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <nav className="text-sm text-slate-500">
              {breadcrumbs.map((item, index) => (
                <span key={item.href}>
                  <Link href={item.href} className="transition hover:text-blue-700">
                    {item.label}
                  </Link>
                  {index < breadcrumbs.length - 1 ? (
                    <span className="px-2 text-slate-300">/</span>
                  ) : null}
                </span>
              ))}
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {introLabel}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {introTitle}
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-7"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                {section.paragraphs ? (
                  <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 sm:text-[15px]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.links ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {section.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Teknik DeÄŸerlendirme Kriterleri
            </h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200">
              <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 md:grid-cols-3">
                <div className="px-5 py-4">Kriter</div>
                <div className="px-5 py-4">Açıklama</div>
                <div className="px-5 py-4">Mühendislik Önemi</div>
              </div>
              {summaryRows.map((row) => (
                <div
                  key={row.criterion}
                  className="grid grid-cols-1 border-b border-slate-200 last:border-b-0 md:grid-cols-3"
                >
                  <div className="px-5 py-4 text-sm font-semibold text-slate-900">{row.criterion}</div>
                  <div className="px-5 py-4 text-sm leading-7 text-slate-600">{row.description}</div>
                  <div className="px-5 py-4 text-sm leading-7 text-slate-600">{row.importance}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-6 grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              İlgili Sayfalar
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {relatedGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-4 grid gap-3">
                    {group.links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projeniz için teknik teklif alın
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              {ctaText}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${heroTitle}_cta_quote`}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
              >
                Teklif Al
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
              <a
                href={siteContact.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

