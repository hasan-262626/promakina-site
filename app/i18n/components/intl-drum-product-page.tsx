import { loadDrumPageOverride } from "@/lib/cms/public-content";
import { serializeJsonLd } from "@/lib/json-ld";
import { DryerDrumProductContent } from "../../(tr)/components/dryer-drum-product-content";
import { MachinePageHero } from "../../(tr)/components/machine-page-hero";
import { MachineSidebar } from "../../(tr)/components/machine-sidebar";
import { getHeroLabels } from "../chrome";
import { absoluteUrl, localeMeta, SITE_URL, type IntlLocale } from "../config";
import {
  buildDrumPageContent,
  drumSchemaImages,
  getDrumChrome,
  getDrumPageTexts,
  groupOf,
  sidebarItemsFor,
  type DrumPageKey,
} from "../content/drum-pages";
import type { UiDictionary } from "../dictionaries";
import { buildBreadcrumbSchema } from "../metadata";
import { pathFor, type RouteKey } from "../routes";

/**
 * Tambur ürünleri (granülatör, soğutma, kaplama, kompost, karıştırma, sterilizasyon, özel)
 * yabancı dil sayfası: kurutma tamburu sayfasıyla aynı düzen, ürüne özel içerik.
 */
export async function IntlDrumProductPage({
  locale,
  routeKey,
  dict,
  labelFor,
}: {
  locale: IntlLocale;
  routeKey: DrumPageKey;
  dict: UiDictionary;
  labelFor: (key: RouteKey) => string;
}) {
  const override = await loadDrumPageOverride(routeKey, locale);
  const texts = override.texts ?? getDrumPageTexts(routeKey, locale);
  const chrome = getDrumChrome(locale);
  const content = buildDrumPageContent(routeKey, locale, { labelFor, homeLabel: dict.breadcrumbHome, override });
  const canonicalUrl = absoluteUrl(pathFor(routeKey, locale));
  const group = groupOf(routeKey);

  // Fiyat, stok veya değerlendirme bilgisi eklenmez; yalnız sayfada görünen veriler kullanılır.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: texts.h1,
    description: texts.meta.description,
    image: drumSchemaImages(routeKey, override.images).map((src) => `${SITE_URL}${encodeURI(src)}`),
    url: canonicalUrl,
    category: texts.productCategory,
    inLanguage: localeMeta[locale].lang,
    brand: { "@type": "Brand", name: "Pro Makina" },
    manufacturer: { "@type": "Organization", name: "Pro Makina", url: SITE_URL },
  };
  const breadcrumbSchema = buildBreadcrumbSchema(locale, routeKey, (key) =>
    key === "home" ? dict.breadcrumbHome : key === routeKey ? texts.breadcrumbLabel : labelFor(key),
  );
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main data-dryer-page="" className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />

      <MachinePageHero
        title={texts.h1}
        quoteHref={`${pathFor("contact", locale)}#quote-form`}
        whatsappHref={content.cta.whatsapp.href}
        labels={getHeroLabels(locale)}
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <MachineSidebar
                title={labelFor(group)}
                href={pathFor(group, locale)}
                items={sidebarItemsFor(group, locale, labelFor)}
                activeHref={pathFor(routeKey, locale)}
                eyebrow={chrome.sidebarEyebrow}
              />
            </div>
            <DryerDrumProductContent content={content} />
          </div>
        </div>
      </section>
    </main>
  );
}
