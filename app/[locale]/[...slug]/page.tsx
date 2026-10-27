import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlContactPage } from "../../i18n/components/intl-contact-page";
import { IntlLanding } from "../../i18n/components/intl-landing";
import { IntlDrumProductPage } from "../../i18n/components/intl-drum-product-page";
import { IntlRotaryDryerPage } from "../../i18n/components/intl-rotary-dryer-page";
import { getDrumPageConfig, getDrumPageTexts, isDrumPageKey } from "../../i18n/content/drum-pages";
import { getContent } from "../../i18n/content";
import { MachinesOverviewPage } from "../../(tr)/components/machines-overview-page";
import { DrumSystemsCategoryPage } from "../../(tr)/components/drum-systems-category-page";
import {
  buildDrumSystemsCategoryContent,
  buildDrumSystemsCategorySchema,
  getDrumSystemsCategoryTexts,
} from "../../i18n/drum-systems-category";
import {
  buildIntlMachineCategoryContent,
  buildIntlMachineCategorySchema,
  isMachineCategoryKey,
} from "../../i18n/machine-category-pages";
import { SectorsHubPage } from "../../(tr)/components/sectors-hub-page";
import { SectorDetailPage } from "../../(tr)/components/sector-detail-page";
import { buildSectorDetailSchema, isSectorDetailKey } from "../../i18n/sector-details";
import { loadDrumPageOverride, loadDryerPage, loadMachineCategoryOverride, loadSectorDetailModel } from "@/lib/cms/public-content";
import { applyMachineCategoryOverride } from "@/lib/cms/adapters/machine-category";
import { intlRouteLabel } from "../../i18n/route-label";
import { buildSectorsHubContent, getSectorsHubTexts } from "../../i18n/sectors-hub";
import {
  buildMachinesOverviewContent,
  buildMachinesOverviewSchema,
  getMachinesOverviewTexts,
} from "../../i18n/machines-overview";
import { dryerDocumentTitle } from "../../i18n/content/dryer-page/editable";
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
    // Kurutma tamburu: TR ürün sayfasıyla aynı şablon; meta, H1 ve ana görsel panelden (yayın yoksa koddan) gelir.
    const dryer = await loadDryerPage(resolved.locale);
    const metadata = buildIntlMetadata(resolved.locale, resolved.key, {
      meta: dryer.meta,
      hero: { h1: dryer.h1, intro: dryer.meta.description, image: { src: dryer.mainImage, alt: dryer.mainImageAlt } },
    });
    return { ...metadata, title: dryerDocumentTitle(dryer.meta.title) };
  }
  if (isDrumPageKey(resolved.key)) {
    // Diğer tambur ürünleri: kurutma tamburu şablonu, ürüne özel meta.
    const override = await loadDrumPageOverride(resolved.key, resolved.locale);
    const texts = override.texts ?? getDrumPageTexts(resolved.key, resolved.locale);
    return buildIntlMetadata(resolved.locale, resolved.key, {
      meta: texts.meta,
      hero: {
        h1: texts.h1,
        intro: texts.meta.description,
        image: { src: override.images?.mainImage ?? getDrumPageConfig(resolved.key).mainImage, alt: texts.overview.imageAlt },
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
  if (resolved.key === "sectors") {
    // Sektörler hub: TR /sektorler şablonu; meta bu sayfanın çevrilmiş metinlerinden gelir.
    const t = getSectorsHubTexts(resolved.locale);
    return buildIntlMetadata(resolved.locale, resolved.key, { meta: t.meta, hero: { h1: t.h1, intro: t.meta.description } });
  }
  if (resolved.key === "drumSystems") {
    // Tambur Sistemleri: TR /makinalar-ekipman/tambur-sistemleri şablonu; meta bu sayfanın çevrilmiş metinlerinden gelir.
    const t = getDrumSystemsCategoryTexts(resolved.locale);
    return buildIntlMetadata(resolved.locale, resolved.key, { meta: t.meta, hero: { h1: t.title, intro: t.meta.description } });
  }
  if (isSectorDetailKey(resolved.key)) {
    // Sektör alt çözüm sayfaları: TR sayfasıyla aynı şablon; meta sayfanın kendi dilindeki metinlerinden gelir.
    const model = await loadSectorDetailModel(resolved.locale, resolved.key);
    return buildIntlMetadata(resolved.locale, resolved.key, {
      meta: model.text.meta,
      hero: { h1: model.text.h1, intro: model.text.lead, image: model.images[0] },
    });
  }
  const content = getContent(resolved.locale);
  const pageContent =
    resolved.key === "contact" ? content.contact : content.pages[resolved.key];
  if (isMachineCategoryKey(resolved.key)) {
    // Makina kategorileri: panelde yayınlanmış meta varsa o kullanılır.
    const override = await loadMachineCategoryOverride(resolved.key, resolved.locale);
    if (override) return buildIntlMetadata(resolved.locale, resolved.key, { ...pageContent, meta: { ...pageContent.meta, ...override.meta } });
  }
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
  const labelFor = (routeKey: RouteKey) => intlRouteLabel(locale, routeKey);

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
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
          />
        }
      />
    );
  }

  if (key === "drumSystems") {
    const category = buildDrumSystemsCategoryContent(locale);
    const schema = buildDrumSystemsCategorySchema(locale, category);
    return (
      <DrumSystemsCategoryPage
        content={category}
        structuredData={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
          />
        }
      />
    );
  }

  if (key === "sectors") {
    return <SectorsHubPage content={buildSectorsHubContent(locale)} />;
  }

  if (isMachineCategoryKey(key)) {
    // Diğer makine kategorileri: Tambur Sistemleri şablonu; meta mevcut kategori içeriğinden gelir.
    const category = applyMachineCategoryOverride(buildIntlMachineCategoryContent(locale, key), await loadMachineCategoryOverride(key, locale));
    const schema = buildIntlMachineCategorySchema(locale, key, category);
    return (
      <DrumSystemsCategoryPage
        content={category}
        structuredData={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
          />
        }
      />
    );
  }

  if (isSectorDetailKey(key)) {
    const model = await loadSectorDetailModel(locale, key);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSectorDetailSchema(model)) }}
        />
        <SectorDetailPage model={model} />
      </>
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
