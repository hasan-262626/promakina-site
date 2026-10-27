import { loadDryerPage } from "@/lib/cms/public-content";
import { serializeJsonLd } from "@/lib/json-ld";
import { DryerDrumProductContent } from "../../(tr)/components/dryer-drum-product-content";
import { MachinePageHero } from "../../(tr)/components/machine-page-hero";
import { MachineSidebar } from "../../(tr)/components/machine-sidebar";
import { getHeroLabels } from "../chrome";
import { absoluteUrl, localeMeta, SITE_URL, type IntlLocale } from "../config";
import { getDryerPageTexts } from "../content/dryer-page";
import { dryerSchemaProperties } from "../content/dryer-page/editable";
import { drumSidebarKeys } from "../content/drum-pages";
import type { UiDictionary } from "../dictionaries";
import { buildBreadcrumbSchema } from "../metadata";
import { pathFor, type RouteKey } from "../routes";

/**
 * Kurutma tamburu (rotaryDryer) yabancı dil sayfası: TR ürün sayfasıyla aynı düzen
 * (MachinePageHero + Tambur Sistemleri sol menüsü + DryerDrumProductContent), dile göre metin.
 * Metin ve görseller panelden (bu dilde yayın yoksa koddaki aynı dil metninden) gelir.
 */
export async function IntlRotaryDryerPage({
  locale,
  dict,
  labelFor,
}: {
  locale: IntlLocale;
  dict: UiDictionary;
  labelFor: (key: RouteKey) => string;
}) {
  const texts = getDryerPageTexts(locale);
  const dryer = await loadDryerPage(locale);
  const { content } = dryer;
  const properties = dryerSchemaProperties(content);
  const canonicalUrl = absoluteUrl(pathFor("rotaryDryer", locale));

  // Fiyat, stok veya değerlendirme bilgisi eklenmez; yalnız sayfada görünen veriler kullanılır.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: dryer.h1,
    description: dryer.meta.description,
    image: dryer.schemaImages.map((src) => `${SITE_URL}${encodeURI(src)}`),
    url: canonicalUrl,
    category: dryer.productCategory,
    inLanguage: localeMeta[locale].lang,
    brand: { "@type": "Brand", name: "Pro Makina" },
    manufacturer: { "@type": "Organization", name: "Pro Makina", url: SITE_URL },
    ...(properties ? { additionalProperty: properties } : {}),
  };
  const breadcrumbSchema = buildBreadcrumbSchema(locale, "rotaryDryer", (key) =>
    key === "home" ? dict.breadcrumbHome : labelFor(key),
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
        title={dryer.h1}
        quoteHref={`${pathFor("contact", locale)}#quote-form`}
        whatsappHref={content.cta.whatsapp.href}
        labels={getHeroLabels(locale)}
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <MachineSidebar
                title={labelFor("drumSystems")}
                href={pathFor("drumSystems", locale)}
                items={drumSidebarKeys.map((key) => ({ label: labelFor(key), href: pathFor(key, locale) }))}
                activeHref={pathFor("rotaryDryer", locale)}
                eyebrow={texts.sidebarEyebrow}
              />
            </div>
            <DryerDrumProductContent content={content} />
          </div>
        </div>
      </section>
    </main>
  );
}
