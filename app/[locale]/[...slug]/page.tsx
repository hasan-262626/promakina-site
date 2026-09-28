import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlContactPage } from "../../i18n/components/intl-contact-page";
import { IntlLanding } from "../../i18n/components/intl-landing";
import { IntlDrumProductPage } from "../../i18n/components/intl-drum-product-page";
import { IntlRotaryDryerPage } from "../../i18n/components/intl-rotary-dryer-page";
import { getDrumPageConfig, getDrumPageTexts, isDrumPageKey } from "../../i18n/content/drum-pages";
import { getDryerPageTexts } from "../../i18n/content/dryer-page";
import { drumProductPages } from "../../(tr)/components/drum-product-data";
import { getContent } from "../../i18n/content";
import { MachinesOverviewPage } from "../../(tr)/components/machines-overview-page";
import {
  buildMachinesOverviewContent,
  buildMachinesOverviewSchema,
  getMachinesOverviewTexts,
} from "../../i18n/machines-overview";
import { getDictionary } from "../../i18n/dictionaries";
import { intlLocales, isIntlLocale, type IntlLocale } from "../../i18n/config";
import { buildIntlMetadata } from "../../i18n/metadata";
import { pathFor, resolveIntlRoute, routeKeys, type RouteKey } from "../../i18n/routes";

/** Route haritasındaki tüm locale+slug kombinasyonları build sırasında statik üretilir. */
export function generateStaticParams() {
  const params: { locale: IntlLocale; slug: string[] }[] = [];
  for (const locale of intlLocales) {
    for (const key of routeKeys) {
      if (key === "home") continue;
      const path = pathFor(key, locale);
      const slug = path.split("/").filter(Boolean).slice(1);
      params.push({ locale, slug });
    }
  }
  return params;
}

type PageParams = Promise<{ locale: string; slug: string[] }>;

function resolve(localeRaw: string, slug: string[]): { locale: IntlLocale; key: RouteKey } | null {
  if (!isIntlLocale(localeRaw)) return null;
  const key = resolveIntlRoute(localeRaw, slug);
  if (!key || key === "home") return null;
  return { locale: localeRaw, key };
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeRaw, slug } = await params;
  const resolved = resolve(localeRaw, slug);
  if (!resolved) return {};
  if (resolved.key === "rotaryDryer") {
    // Kurutma tamburu: TR ürün sayfasıyla aynı şablon; meta bu sayfanın görünür içeriğinden gelir.
    const texts = getDryerPageTexts(resolved.locale);
    const mainImage = drumProductPages.find((item) => item.slug === "kurutma-tamburu")?.mainImage;
    return buildIntlMetadata(resolved.locale, resolved.key, {
      meta: texts.meta,
      hero: {
        h1: texts.h1,
        intro: texts.meta.description,
        image: mainImage ? { src: mainImage, alt: texts.overview.imageAlt } : undefined,
      },
    });
  }
  if (isDrumPageKey(resolved.key)) {
    // Diğer tambur ürünleri: kurutma tamburu şablonu, ürüne özel meta.
    const texts = getDrumPageTexts(resolved.key, resolved.locale);
    return buildIntlMetadata(resolved.locale, resolved.key, {
      meta: texts.meta,
      hero: {
        h1: texts.h1,
        intro: texts.meta.description,
        image: { src: getDrumPageConfig(resolved.key).mainImage, alt: texts.overview.imageAlt },
      },
    });
  }
  if (resolved.key === "machines") {
    // Makinalar & Ekipman: TR /makinalar-ekipman şablonu; meta bu sayfanın çevrilmiş metinlerinden gelir.
    const t = getMachinesOverviewTexts(resolved.locale);
    return buildIntlMetadata(resolved.locale, resolved.key, {
      meta: t.meta,
      hero: { h1: t.hero.title, intro: t.meta.description, image: { src: "/images/01-genel/makinalar1.png", alt: t.ogImageAlt } },
    });
  }
  const content = getContent(resolved.locale);
  const pageContent =
    resolved.key === "contact" ? content.contact : content.pages[resolved.key];
  return buildIntlMetadata(resolved.locale, resolved.key, pageContent);
}

export default async function IntlSlugPage({ params }: { params: PageParams }) {
  const { locale: localeRaw, slug } = await params;
  const resolved = resolve(localeRaw, slug);
  if (!resolved) {
    notFound();
  }

  const { locale, key } = resolved;
  const content = getContent(locale);
  const dict = getDictionary(locale);
  const labelFor = (routeKey: RouteKey) =>
    routeKey === "contact"
      ? content.contact.breadcrumbLabel
      : content.pages[routeKey].breadcrumbLabel;

  if (key === "rotaryDryer") {
    return <IntlRotaryDryerPage locale={locale} dict={dict} labelFor={labelFor} />;
  }

  if (isDrumPageKey(key)) {
    return <IntlDrumProductPage locale={locale} routeKey={key} dict={dict} labelFor={labelFor} />;
  }

  if (key === "machines") {
    const overview = buildMachinesOverviewContent(locale);
    const schema = buildMachinesOverviewSchema(locale, overview);
    return (
      <MachinesOverviewPage
        content={overview}
        structuredData={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }}
          />
        }
      />
    );
  }

  if (key === "contact") {
    return (
      <IntlContactPage locale={locale} content={content.contact} dict={dict} labelFor={labelFor} />
    );
  }

  return (
    <IntlLanding
      locale={locale}
      routeKey={key}
      content={content.pages[key]}
      dict={dict}
      labelFor={labelFor}
    />
  );
}
