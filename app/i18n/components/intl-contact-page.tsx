import Link from "next/link";
import { MachinePageHero } from "../../(tr)/components/machine-page-hero";
import { createWhatsAppHref, siteContact } from "../../(tr)/lib/site-contact";
import { getHeroLabels } from "../chrome";
import type { IntlLocale } from "../config";
import type { UiDictionary } from "../dictionaries";
import { whatsappMessageFor } from "../dictionaries";
import { buildBreadcrumbSchema, buildPageSchema } from "../metadata";
import { pathFor, type RouteKey } from "../routes";
import type { IntlContactContent } from "../content/types";
import { IntlQuoteForm } from "./intl-quote-form";

/**
 * İletişim + teknik teklif sayfası. TR iletişim sayfasının tasarım dilini kullanır:
 * MachinePageHero, rounded-[28px] bilgi kartları, TR form kabı. Yalnızca metinler
 * ve dil yönü değişir.
 */
type IntlContactPageProps = {
  locale: IntlLocale;
  content: IntlContactContent;
  dict: UiDictionary;
  labelFor: (key: RouteKey) => string;
};

export function IntlContactPage({ locale, content, dict, labelFor }: IntlContactPageProps) {
  const pageSchema = buildPageSchema(locale, "contact", content);
  const breadcrumbSchema = buildBreadcrumbSchema(locale, "contact", labelFor);
  const heroLabels = getHeroLabels(locale);
  const whatsappMessage = whatsappMessageFor(locale, content.hero.h1);

  const infoCards = [
    {
      label: content.info.phoneLabel,
      value: siteContact.phoneDisplay,
      href: siteContact.phoneHref,
      external: false,
    },
    {
      label: content.info.whatsappLabel,
      value: siteContact.phoneDisplay,
      href: createWhatsAppHref(whatsappMessage),
      external: true,
    },
    {
      label: content.info.emailLabel,
      value: siteContact.email,
      href: siteContact.emailHref,
      external: false,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50/60">
        <ol className="site-container flex flex-wrap items-center gap-1.5 py-3 text-xs text-slate-500 sm:text-[13px]">
          <li>
            <Link href={pathFor("home", locale)} className="transition hover:text-[#278DC0]">
              {dict.breadcrumbHome}
            </Link>
          </li>
          <li aria-hidden="true">
            <svg viewBox="0 0 20 20" className="h-3 w-3 text-slate-400 rtl:-scale-x-100" fill="currentColor">
              <path fillRule="evenodd" d="M7.2 14.7a1 1 0 0 1 0-1.4L10.6 10 7.2 6.7a1 1 0 1 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0Z" clipRule="evenodd" />
            </svg>
          </li>
          <li>
            <span aria-current="page" className="font-semibold text-slate-900">
              {content.breadcrumbLabel}
            </span>
          </li>
        </ol>
      </nav>

      <MachinePageHero
        title={content.hero.h1}
        quoteHref="#quote-form"
        whatsappHref={createWhatsAppHref(whatsappMessage)}
        labels={heroLabels}
      />

      {/* İletişim bilgi kartları */}
      <section className="section-space">
        <div className="site-container">
          <p className="max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            {content.hero.intro}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {infoCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                  {card.label}
                </p>
                <p dir="ltr" className="mt-3 text-lg font-semibold tracking-tight text-slate-950 text-start">
                  {card.value}
                </p>
              </a>
            ))}
            <div className="rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                {content.info.addressLabel}
              </p>
              <p dir="ltr" className="mt-3 text-sm leading-7 text-slate-600 text-start">
                {dict.footer.address}
              </p>
              <p className="mt-3 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{content.info.hoursLabel}:</span>{" "}
                {content.info.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Açıklama bölümleri */}
      {content.sections.length > 0 ? (
        <section className="section-bottom-space">
          <div className="site-container">
            {content.sections.map((section) =>
              section.type === "paragraphs" ? (
                <div key={section.heading} className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </section>
      ) : null}

      {/* Teknik teklif formu — TR form kabıyla aynı tasarım */}
      <section id="quote-form" className="section-bottom-space-lg scroll-mt-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
              {dict.form.heading}
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{dict.form.intro}</p>
          </div>
          <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <IntlQuoteForm locale={locale} dict={dict} />
          </div>
        </div>
      </section>
    </main>
  );
}
