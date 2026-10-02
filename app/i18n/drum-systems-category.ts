import type { DrumSystemsCategoryContent } from "../(tr)/components/drum-systems-category-page";
import { intlRouteLabel } from "./route-label";
import { drumProductPages } from "../(tr)/components/drum-product-data";
import { getHeroLabels } from "./chrome";
import { absoluteUrl, type IntlLocale } from "./config";
import { getContent } from "./content";
import { pathFor, routeKeys, type RouteKey } from "./routes";

/**
 * EN/RU/AR Tambur Sistemleri kategori sayfası. TR sayfası (/makinalar-ekipman/tambur-sistemleri) tasarım,
 * kart sırası ve görseller için tek kaynaktır; kartlar TR ürün verisinden üretilir, yalnızca metinler çevrilir.
 *
 * TR spotlight bağlantılarındaki hesaplama aracı, blog ve kütüphane sayfalarının yabancı dil karşılığı yoktur.
 * Yeni URL üretilmez; bu kartlar mevcut yabancı dil sayfalarına (kurutma tamburu, tesis çözümleri, iletişim)
 * bağlanır. Hero'daki TR "Kapasite Hesapla" butonu da hesaplama aracı olmadığı için teknik kapasite
 * talebi olarak iletişim sayfasına yönlenir.
 */

const trKeyByPath = new Map<string, RouteKey>(routeKeys.map((key) => [pathFor(key, "tr"), key]));

type CategoryTexts = {
  meta: { title: string; description: string };
  title: string;
  calculatorLabel: string;
  spotlightHeading: string;
  spotlight: Array<{ title: string; description: string; key: RouteKey }>;
  badge: string;
  detailLabel: string;
  /** TR ürün slug'ına göre kart açıklaması ve görsel alt metni. */
  cards: Record<string, { description: string; alt: string }>;
};

const texts: Record<IntlLocale, CategoryTexts> = {
  en: {
    meta: {
      title: "Rotary Drum Systems | Granulator, Dryer, Cooler and Coating Drums",
      description:
        "Pro Makina rotary drum systems cover granulator drums, rotary dryers, rotary coolers, coating drums, compost drums and custom process drums.",
    },
    title: "Rotary Drum Systems",
    calculatorLabel: "Request Capacity Sizing",
    spotlightHeading: "Featured Links",
    spotlight: [
      { title: "Rotary Dryer Design Data", description: "See which process data determine rotary dryer sizing on the product page.", key: "rotaryDryer" },
      { title: "Sludge Drying Plant", description: "Review how the drying drum works within a complete thermal process line.", key: "sludgeDryingPlantSolution" },
      { title: "Fertilizer Granulation Plants", description: "See granulation, drying, cooling and coating drums within fertilizer production lines.", key: "fertilizerPlants" },
      { title: "Request a Technical Quote", description: "Send your technical quotation request based on capacity, product type and site conditions.", key: "contact" },
    ],
    badge: "Product Page",
    detailLabel: "View Details",
    cards: {
      "granulator-tamburu": {
        description: "Used to form powdery or moist raw materials into granules with binders, water or process additives.",
        alt: "Rotary drum granulator",
      },
      "kurutma-tamburu": {
        description: "Industrial rotary drying equipment that reduces the moisture of wet products to the target final moisture with hot air.",
        alt: "PRO MAKINA industrial rotary dryer and plant equipment",
      },
      "sogutma-tamburu": {
        description: "Provides controlled cooling of hot product after drying or granulation, before packaging and storage.",
        alt: "Rotary cooler",
      },
      "kaplama-tamburu": {
        description: "Applies liquid or powder additives to the surface of granular products to improve product quality and shelf life.",
        alt: "Coating drum",
      },
      "kompost-tamburu": {
        description: "Used in controlled mixing, aeration and maturation processes for organic waste, compost and similar products.",
        alt: "Compost maturation drum",
      },
      "karistirma-tamburu": {
        description: "Tumbles powder, granular or moist products inside the drum to achieve a homogeneous mix.",
        alt: "Mixing drum",
      },
      "sterilizasyon-ve-stabilizasyon-tamburu": {
        description: "Used in heat treatment, stabilisation and hygienisation processes for organic waste, sludge, compost and similar products.",
        alt: "Sterilization and stabilization drum",
      },
      "ozel-tambur": {
        description: "Designed for special product, capacity, temperature, mixing, drying or reaction requirements outside standard processes.",
        alt: "Custom drum",
      },
    },
  },
  ru: {
    meta: {
      title: "Барабанные системы: грануляторы, сушилки, охладители",
      description:
        "Барабанные системы Pro Makina: барабанные грануляторы, сушильные и охладительные барабаны, барабаны покрытия, компостные и специальные технологические барабаны.",
    },
    title: "Барабанные системы",
    calculatorLabel: "Запросить расчёт производительности",
    spotlightHeading: "Полезные ссылки",
    spotlight: [
      { title: "Исходные данные сушильного барабана", description: "Какие технологические данные определяют размеры сушильного барабана — на странице продукта.", key: "rotaryDryer" },
      { title: "Установка сушки осадка", description: "Как сушильный барабан работает в составе полной линии термической обработки.", key: "sludgeDryingPlantSolution" },
      { title: "Заводы удобрений и грануляции", description: "Барабаны грануляции, сушки, охлаждения и покрытия в линиях производства удобрений.", key: "fertilizerPlants" },
      { title: "Запросить техническое предложение", description: "Отправьте запрос с учётом производительности, типа продукта и условий площадки.", key: "contact" },
    ],
    badge: "Страница продукта",
    detailLabel: "Подробнее",
    cards: {
      "granulator-tamburu": {
        description: "Применяется для превращения порошкового или влажного сырья в гранулы с помощью связующего, воды или технологических добавок.",
        alt: "Барабанный гранулятор",
      },
      "kurutma-tamburu": {
        description: "Промышленное барабанное сушильное оборудование, снижающее влажность продукта горячим воздухом до заданной конечной влажности.",
        alt: "Промышленный сушильный барабан и оборудование установки PRO MAKINA",
      },
      "sogutma-tamburu": {
        description: "Обеспечивает контролируемое охлаждение горячего продукта после сушки или грануляции перед упаковкой и хранением.",
        alt: "Охладительный барабан",
      },
      "kaplama-tamburu": {
        description: "Наносит жидкие или порошковые добавки на поверхность гранул, улучшая качество продукта и срок хранения.",
        alt: "Барабан для нанесения покрытия",
      },
      "kompost-tamburu": {
        description: "Применяется в процессах контролируемого перемешивания, аэрации и дозревания органических отходов, компоста и подобных продуктов.",
        alt: "Барабан дозревания компоста",
      },
      "karistirma-tamburu": {
        description: "Перемешивает порошковые, гранулированные или влажные продукты в барабане до получения однородной смеси.",
        alt: "Смесительный барабан",
      },
      "sterilizasyon-ve-stabilizasyon-tamburu": {
        description: "Применяется в процессах термообработки, стабилизации и гигиенизации органических отходов, осадка, компоста и подобных продуктов.",
        alt: "Барабан стерилизации и стабилизации",
      },
      "ozel-tambur": {
        description: "Проектируется под особые требования к продукту, производительности, температуре, перемешиванию, сушке или реакции вне стандартных процессов.",
        alt: "Специальный барабан",
      },
    },
  },
  ar: {
    meta: {
      title: "أنظمة البراميل الدوارة | براميل التحبيب والتجفيف والتبريد والتغليف",
      description:
        "تشمل أنظمة البراميل الدوارة من برو ماكينا براميل التحبيب والمجففات والمبردات الدوارة وبراميل التغليف والسماد العضوي والبراميل الخاصة بالعمليات.",
    },
    title: "أنظمة البراميل الدوارة",
    calculatorLabel: "اطلب حساب السعة",
    spotlightHeading: "روابط مميزة",
    spotlight: [
      { title: "بيانات تصميم المجفف الدوار", description: "تعرّف في صفحة المنتج على بيانات العملية التي تحدد مقاسات المجفف الدوار.", key: "rotaryDryer" },
      { title: "منشأة تجفيف الحمأة", description: "اطّلع على عمل برميل التجفيف ضمن خط عمليات حرارية متكامل.", key: "sludgeDryingPlantSolution" },
      { title: "مصانع الأسمدة والتحبيب", description: "براميل التحبيب والتجفيف والتبريد والتغليف ضمن خطوط إنتاج الأسمدة.", key: "fertilizerPlants" },
      { title: "اطلب عرضًا فنيًا", description: "أرسل طلب العرض الفني وفق السعة ونوع المنتج وظروف الموقع.", key: "contact" },
    ],
    badge: "صفحة المنتج",
    detailLabel: "عرض التفاصيل",
    cards: {
      "granulator-tamburu": {
        description: "يُستخدم لتحويل المواد الخام المسحوقة أو الرطبة إلى حبيبات باستخدام مواد رابطة أو الماء أو إضافات العملية.",
        alt: "برميل التحبيب الدوار",
      },
      "kurutma-tamburu": {
        description: "معدة تجفيف دوارة صناعية تخفض رطوبة المنتجات الرطبة إلى الرطوبة النهائية المستهدفة بالهواء الساخن.",
        alt: "مجفف دوار صناعي ومعدات منشأة من برو ماكينا",
      },
      "sogutma-tamburu": {
        description: "يوفر تبريدًا متحكمًا به للمنتج الساخن بعد التجفيف أو التحبيب وقبل التعبئة والتخزين.",
        alt: "برميل التبريد الدوار",
      },
      "kaplama-tamburu": {
        description: "يضيف مواد سائلة أو مسحوقة إلى سطح المنتجات الحبيبية لتحسين جودة المنتج ومدة صلاحيته.",
        alt: "برميل التغليف",
      },
      "kompost-tamburu": {
        description: "يُستخدم في عمليات الخلط والتهوية والإنضاج المتحكم بها للنفايات العضوية والسماد العضوي والمنتجات المشابهة.",
        alt: "برميل إنضاج السماد العضوي",
      },
      "karistirma-tamburu": {
        description: "يقلّب المنتجات المسحوقة أو الحبيبية أو الرطبة داخل البرميل للحصول على خليط متجانس.",
        alt: "برميل الخلط",
      },
      "sterilizasyon-ve-stabilizasyon-tamburu": {
        description: "يُستخدم في عمليات المعالجة الحرارية والتثبيت والتعقيم للنفايات العضوية والحمأة والسماد العضوي والمنتجات المشابهة.",
        alt: "برميل التعقيم والتثبيت",
      },
      "ozel-tambur": {
        description: "يُصمَّم لمتطلبات خاصة بالمنتج أو السعة أو الحرارة أو الخلط أو التجفيف أو التفاعل خارج العمليات القياسية.",
        alt: "برميل مخصص",
      },
    },
  },
};

export function getDrumSystemsCategoryTexts(locale: IntlLocale) {
  return texts[locale];
}

export function buildDrumSystemsCategoryContent(locale: IntlLocale): DrumSystemsCategoryContent {
  const t = texts[locale];
  const labelFor = (key: RouteKey) => (intlRouteLabel(locale, key));

  return {
    hero: {
      title: t.title,
      calculatorHref: pathFor("contact", locale),
      labels: { ...getHeroLabels(locale), calculator: t.calculatorLabel },
      quoteHref: pathFor("contact", locale),
    },
    spotlight: {
      heading: t.spotlightHeading,
      links: t.spotlight.map((item) => ({ title: item.title, description: item.description, href: pathFor(item.key, locale) })),
    },
    badge: t.badge,
    detailLabel: t.detailLabel,
    cards: drumProductPages.map((product) => {
      const key = trKeyByPath.get(`/makinalar-ekipman/tambur-sistemleri/${product.slug}`);
      const cardText = t.cards[product.slug];
      if (!key || !cardText) throw new Error(`Tambur Sistemleri: ${product.slug} için rota veya metin eksik`);
      return {
        key: product.slug,
        href: pathFor(key, locale),
        image: product.mainImage,
        alt: cardText.alt,
        title: labelFor(key),
        description: cardText.description,
      };
    }),
  };
}

/** Görünmeyen yapısal veri: breadcrumb ve ürün listesi (canlı alan adıyla). */
export function buildDrumSystemsCategorySchema(locale: IntlLocale, content: DrumSystemsCategoryContent) {
  const pages = getContent(locale).pages;
  const url = absoluteUrl(pathFor("drumSystems", locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: (["home", "machines", "drumSystems"] as const).map((key, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: pages[key].breadcrumbLabel,
          item: absoluteUrl(pathFor(key, locale)),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#drum-products`,
        name: content.hero.title,
        itemListElement: content.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: absoluteUrl(card.href),
        })),
      },
    ],
  };
}
