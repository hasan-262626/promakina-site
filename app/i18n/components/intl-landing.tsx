import Image from "next/image";
import Link from "next/link";
import { GlobalBottomCta } from "../../(tr)/components/global-bottom-cta";
import { MachinePageHero } from "../../(tr)/components/machine-page-hero";
import { MachineTechnicalCta } from "../../(tr)/components/machine-technical-cta";
import { createMailtoHref, createWhatsAppHref, siteContact } from "../../(tr)/lib/site-contact";
import { getFooterCtaLabels, getHeroLabels, getMachineCtaLabels } from "../chrome";
import type { IntlLocale } from "../config";
import type { UiDictionary } from "../dictionaries";
import { whatsappMessageFor } from "../dictionaries";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSchema, breadcrumbTrail } from "../metadata";
import { pathFor, type RouteKey } from "../routes";
import type { IntlPageContent, IntlSection } from "../content/types";

/**
 * Yabancı dil iç sayfa şablonu. Türkçe makine/sektör sayfalarının tasarım dilini
 * birebir kullanır: MachinePageHero, TR kart/tablo/SSS stilleri, MachineTechnicalCta
 * ve GlobalBottomCta. Yalnızca metinler ve bağlantılar dile göre değişir.
 */
type IntlLandingProps = {
  locale: IntlLocale;
  routeKey: RouteKey;
  content: IntlPageContent;
  dict: UiDictionary;
  labelFor: (key: RouteKey) => string;
};

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-[#278DC0] md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function SectionRenderer({ section }: { section: IntlSection }) {
  switch (section.type) {
    case "paragraphs":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} />
            <div className="mt-6 max-w-4xl space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      );
    case "bullets":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} description={section.intro} />
            <ul className="mt-6 grid max-w-4xl gap-3">
              {section.items.map((item) => (
                <li
                  key={item.slice(0, 48)}
                  className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:text-[15px]"
                >
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#278DC0]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    case "cards":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} description={section.intro} />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    case "table":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} description={section.intro} />
            <div className="mt-6 max-w-4xl overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <table className="w-full min-w-[420px] text-start text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th scope="col" className="px-5 py-4 text-start font-semibold text-slate-950">
                      {section.columns[0]}
                    </th>
                    <th scope="col" className="px-5 py-4 text-start font-semibold text-slate-950">
                      {section.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 1 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-slate-900">{row[0]}</td>
                      <td className="px-5 py-3.5 leading-7 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">{section.note}</p>
            ) : null}
          </div>
        </section>
      );
    default:
      return null;
  }
}

export function IntlLanding({ locale, routeKey, content, dict, labelFor }: IntlLandingProps) {
  const trail = breadcrumbTrail(routeKey);
  const pageSchema = buildPageSchema(locale, routeKey, content);
  const breadcrumbSchema = buildBreadcrumbSchema(locale, routeKey, labelFor);
  const faqSchema = buildFaqSchema(content);
  const heroLabels = getHeroLabels(locale);
  const machineCtaLabels = getMachineCtaLabels(locale);
  const footerCtaLabels = getFooterCtaLabels(locale);
  const whatsappMessage = whatsappMessageFor(locale, content.hero.h1);
  const contactAnchor = `${pathFor("contact", locale)}#quote-form`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      {/* Breadcrumb */}
      {trail.length > 1 ? (
        <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50/60">
          <ol className="site-container flex flex-wrap items-center gap-1.5 py-3 text-xs text-slate-500 sm:text-[13px]">
            {trail.map((key, index) => {
              const isLast = index === trail.length - 1;
              return (
                <li key={key} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3 text-slate-400 rtl:-scale-x-100" fill="currentColor">
                      <path fillRule="evenodd" d="M7.2 14.7a1 1 0 0 1 0-1.4L10.6 10 7.2 6.7a1 1 0 1 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0Z" clipRule="evenodd" />
                    </svg>
                  ) : null}
                  {isLast ? (
                    <span aria-current="page" className="font-semibold text-slate-900">
                      {labelFor(key)}
                    </span>
                  ) : (
                    <Link href={pathFor(key, locale)} className="transition hover:text-[#278DC0]">
                      {key === "home" ? dict.breadcrumbHome : labelFor(key)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      {/* Hero — TR makine sayfası hero'su */}
      <MachinePageHero
        title={content.hero.h1}
        quoteHref={contactAnchor}
        whatsappHref={createWhatsAppHref(whatsappMessage)}
        labels={heroLabels}
      />

      {/* Giriş + ana görsel */}
      <section className="section-space">
        <div className="site-container">
          <div className="grid items-center gap-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <p className="text-sm leading-8 text-slate-600 sm:text-base">{content.hero.intro}</p>
            {content.hero.image ? (
              <div className="relative min-h-[240px] overflow-hidden rounded-[24px] bg-slate-100 sm:min-h-[280px]">
                <Image
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Alt sayfa kartları (hub sayfaları) */}
      {content.childLinks && content.childLinks.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={dict.common.exploreHeading} />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.childLinks.map((child) => (
                <Link
                  key={child.key}
                  href={pathFor(child.key, locale)}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#154764]">
                    {child.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{child.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    {dict.cta.learnMore}
                    <span aria-hidden="true" className="inline-block rtl:-scale-x-100">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* İçerik bölümleri */}
      {content.sections.map((section) => (
        <SectionRenderer key={section.heading} section={section} />
      ))}

      {/* Güven bloğu */}
      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title={dict.common.trustHeading} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dict.common.trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      {content.faq && content.faq.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={dict.common.faqHeading} />
            <div className="mt-6 grid max-w-4xl gap-4">
              {content.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-[24px] border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-slate-950 sm:text-base">
                    {item.q}
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180" fill="currentColor">
                      <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* İlgili sayfalar */}
      {content.related && content.related.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {dict.common.relatedHeading}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {content.related.map((key) => (
                <li key={key}>
                  <Link
                    href={pathFor(key, locale)}
                    className="inline-flex min-h-11 items-center rounded-full border border-[#278DC0]/16 bg-white px-4 py-2 text-sm font-semibold text-[#278DC0] transition hover:-translate-y-0.5 hover:border-[#278DC0] hover:bg-[#278DC0]/10 hover:text-[#154764]"
                  >
                    {labelFor(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Teknik teklif CTA + genel CTA bandı — TR makine sayfalarındaki kapanış */}
      <section className="section-bottom-space-lg">
        <div className="site-container grid gap-8">
          <MachineTechnicalCta
            title={dict.common.contactBlockHeading}
            text={dict.common.contactBlockText}
            whatsappHref={createWhatsAppHref(whatsappMessage)}
            mailHref={createMailtoHref(content.hero.h1)}
            labels={{
              heading: dict.common.contactBlockHeading,
              whatsapp: machineCtaLabels.whatsapp,
              mail: machineCtaLabels.mail,
              call: machineCtaLabels.call,
            }}
          />
          <GlobalBottomCta
            title={content.hero.h1}
            description={dict.common.capacityDisclaimer}
            primaryLabel={footerCtaLabels.whatsappQuote}
            primaryHref={createWhatsAppHref(whatsappMessage)}
            secondaryLabel={footerCtaLabels.phone}
            secondaryHref={siteContact.phoneHref}
            tertiaryLabel={footerCtaLabels.contact}
            tertiaryHref={contactAnchor}
          />
        </div>
      </section>
    </main>
  );
}
