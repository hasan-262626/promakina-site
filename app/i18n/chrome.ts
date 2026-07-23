import type { HeaderNavEntry, SiteHeaderModel } from "../(tr)/components/site-header";
import type { SiteFooterModel } from "../(tr)/components/site-footer-cta";
import type { CookieTexts } from "../(tr)/components/cookie-preferences";
import type { IntlLocale } from "./config";
import { pathFor, type RouteKey } from "./routes";
import { getContent } from "./content";

/**
 * Yabancı dil sayfalarının site iskeleti (header, footer, çerez) TR bileşenlerini
 * kullanır; bu modül yalnızca metin ve bağlantı modellerini dile göre üretir.
 * Tasarım tek kaynaktan (TR bileşenleri) gelir.
 */

type ChromeStrings = {
  tagline: string;
  quoteShort: string;
  menuLabel: string;
  languageLabel: string;
  servicesLabel: string;
  careerLabel: string;
  projectsLabel: string;
  /** Makine sayfası hero butonları (TR: Teklif Al / WhatsApp ile Görüş / Telefonla Ara). */
  hero: { quote: string; whatsapp: string; call: string };
  /** Teknik teklif CTA kutusu butonları (TR: WhatsApp ile Gönder / Mail ile Gönder / Telefonla Ara). */
  machineCta: { whatsapp: string; mail: string; call: string };
  machinesMega: {
    eyebrow: string;
    panelTitle: string;
    panelText: string;
    panelCtaLabel: string;
    groupsHeading: string;
    itemTag: string;
  };
  sectorsMega: {
    eyebrow: string;
    panelTitle: string;
    panelText: string;
    panelCtaLabel: string;
    groupsHeading: string;
    itemTag: string;
  };
  footer: {
    ctaTitle: string;
    ctaText: string;
    contactLabel: string;
    callLabel: string;
    whatsappQuoteLabel: string;
    phoneLabel: string;
    columnIndustries: string;
    columnMachines: string;
    columnConveying: string;
    columnCompany: string;
    columnContact: string;
    followTitle: string;
    followText: string;
    rights: string;
    whatsappAria: string;
    stickySecondaryLabel: string;
    cardTitles: { linkedin: string; youtube: string; instagram: string };
  };
  cookies: CookieTexts;
};

const chromeStrings: Record<IntlLocale, ChromeStrings> = {
  en: {
    tagline: "Industrial Plant Solutions",
    quoteShort: "Get a Quote",
    menuLabel: "Menu",
    languageLabel: "Language",
    servicesLabel: "Services",
    careerLabel: "Careers",
    projectsLabel: "Projects",
    hero: { quote: "Get a Quote", whatsapp: "Chat on WhatsApp", call: "Call by Phone" },
    machineCta: { whatsapp: "Send via WhatsApp", mail: "Send by E-mail", call: "Call by Phone" },
    machinesMega: {
      eyebrow: "Machines & Equipment",
      panelTitle: "Pro Makina Equipment",
      panelText:
        "Explore drum systems, conveyors, crushers, reactors, tanks, screening, dust collection, packaging and dosing equipment with a process-driven engineering approach.",
      panelCtaLabel: "View All Machines",
      groupsHeading: "Main Machine Groups",
      itemTag: "Product Page",
    },
    sectorsMega: {
      eyebrow: "Industries",
      panelTitle: "Pro Makina Industry Solutions",
      panelText:
        "Sector-specific machinery and plant solutions for fertilizer, compost, sludge, mining, chemical and recycling processes.",
      panelCtaLabel: "View All Industries",
      groupsHeading: "Main Industries",
      itemTag: "Detail Page",
    },
    footer: {
      ctaTitle: "Request a quote or a technical meeting for your project",
      ctaText:
        "Contact us for compost plants, fertilizer plants, machinery and equipment, sludge drying or technical consultancy requests.",
      contactLabel: "Go to Contact Page",
      callLabel: "Call Now",
      whatsappQuoteLabel: "Get a Quote on WhatsApp",
      phoneLabel: "Call by Phone",
      columnIndustries: "Industries",
      columnMachines: "Machines",
      columnConveying: "Conveying & Dosing",
      columnCompany: "Company",
      columnContact: "Solutions / Contact",
      followTitle: "Follow Us",
      followText:
        "Follow our social media channels for process engineering, machine manufacturing, technical guides and project content.",
      rights: "© 2026 Pro Makina. All rights reserved.",
      whatsappAria: "Contact via WhatsApp",
      stickySecondaryLabel: "Our Services",
      cardTitles: {
        linkedin: "LinkedIn Technical Content",
        youtube: "YouTube Process Videos",
        instagram: "Instagram Project Visuals",
      },
    },
    cookies: {
      bannerAria: "Cookie preferences banner",
      bannerTitle: "Cookie Preferences",
      bannerTextStart:
        "This site uses cookies required to run the website securely and correctly. With your consent, additional cookies may be used for performance measurement, user experience and marketing. For details see the ",
      cookiePolicyLabel: "Cookie Policy",
      bannerTextMiddle: " and ",
      privacyPolicyLabel: "Privacy Policy",
      bannerTextEnd: " pages.",
      necessaryOnly: "Necessary Only",
      manage: "Manage Preferences",
      acceptAll: "Accept All",
      settingsLabel: "Cookie Settings",
      settingsAria: "Open cookie settings",
      panelTag: "Cookie Settings",
      panelTitle: "Manage Your Cookie Preferences",
      panelText:
        "You can update your cookie preferences at any time. Strictly necessary cookies are required for site functions. Other cookies can be switched on or off as you prefer.",
      closeAria: "Close cookie panel",
      toggleAriaSuffix: "toggle preference",
      saveNecessary: "Save Necessary Only",
      saveSelection: "Save Selection",
      categories: {
        necessary: {
          title: "Strictly Necessary",
          description:
            "Used for site security, form submission and basic page functions. These cookies cannot be disabled.",
        },
        analytics: {
          title: "Performance & Analytics",
          description: "Helps us understand site performance and visitor behaviour.",
        },
        functional: {
          title: "Functional Cookies",
          description: "Used to remember language, preference and user experience settings.",
        },
        marketing: {
          title: "Marketing",
          description:
            "Used to measure advertising and campaign performance or show more relevant content.",
        },
      },
    },
  },
  ru: {
    tagline: "Промышленные заводские решения",
    quoteShort: "Запросить КП",
    menuLabel: "Меню",
    languageLabel: "Язык",
    servicesLabel: "Услуги",
    careerLabel: "Карьера",
    projectsLabel: "Проекты",
    hero: { quote: "Запросить КП", whatsapp: "Написать в WhatsApp", call: "Позвонить" },
    machineCta: { whatsapp: "Отправить в WhatsApp", mail: "Отправить по e-mail", call: "Позвонить" },
    machinesMega: {
      eyebrow: "Машины и оборудование",
      panelTitle: "Оборудование Pro Makina",
      panelText:
        "Барабанные системы, конвейеры, дробилки, реакторы, ёмкости, грохоты, пылеулавливание, упаковка и дозирование — с инженерным подходом от процесса.",
      panelCtaLabel: "Всё оборудование",
      groupsHeading: "Основные группы машин",
      itemTag: "Страница продукта",
    },
    sectorsMega: {
      eyebrow: "Отрасли",
      panelTitle: "Отраслевые решения Pro Makina",
      panelText:
        "Отраслевые машины и заводские решения для производств удобрений, компоста, осадка, минералов, химии и рециклинга.",
      panelCtaLabel: "Все отрасли",
      groupsHeading: "Основные отрасли",
      itemTag: "Страница раздела",
    },
    footer: {
      ctaTitle: "Запросите предложение или техническую встречу по вашему проекту",
      ctaText:
        "Свяжитесь с нами по вопросам компостных заводов, заводов удобрений, машин и оборудования, сушки осадка или технического консалтинга.",
      contactLabel: "Перейти на страницу контактов",
      callLabel: "Позвонить",
      whatsappQuoteLabel: "Запросить КП в WhatsApp",
      phoneLabel: "Позвонить по телефону",
      columnIndustries: "Отрасли",
      columnMachines: "Оборудование",
      columnConveying: "Транспорт и дозирование",
      columnCompany: "Компания",
      columnContact: "Решения / Контакты",
      followTitle: "Подписывайтесь на нас",
      followText:
        "Следите за нашими соцсетями: технологический инжиниринг, производство машин, технические руководства и проектный контент.",
      rights: "© 2026 Pro Makina. Все права защищены.",
      whatsappAria: "Связаться в WhatsApp",
      stickySecondaryLabel: "Наши услуги",
      cardTitles: {
        linkedin: "LinkedIn: технический контент",
        youtube: "YouTube: видео процессов",
        instagram: "Instagram: фото проектов",
      },
    },
    cookies: {
      bannerAria: "Баннер настроек cookie",
      bannerTitle: "Настройки cookie",
      bannerTextStart:
        "На этом сайте используются cookie, необходимые для его безопасной и корректной работы. С вашего согласия могут применяться дополнительные cookie для измерения производительности, улучшения опыта и маркетинга. Подробнее — на страницах ",
      cookiePolicyLabel: "Политика cookie",
      bannerTextMiddle: " и ",
      privacyPolicyLabel: "Политика конфиденциальности",
      bannerTextEnd: ".",
      necessaryOnly: "Только необходимые",
      manage: "Управлять настройками",
      acceptAll: "Принять все",
      settingsLabel: "Настройки cookie",
      settingsAria: "Открыть настройки cookie",
      panelTag: "Настройки cookie",
      panelTitle: "Управление настройками cookie",
      panelText:
        "Вы можете изменить настройки cookie в любое время. Строго необходимые cookie обязательны для работы сайта. Остальные можно включать и выключать по желанию.",
      closeAria: "Закрыть панель cookie",
      toggleAriaSuffix: "— изменить настройку",
      saveNecessary: "Сохранить только необходимые",
      saveSelection: "Сохранить выбор",
      categories: {
        necessary: {
          title: "Строго необходимые",
          description:
            "Используются для безопасности сайта, отправки форм и базовых функций страниц. Их нельзя отключить.",
        },
        analytics: {
          title: "Производительность и аналитика",
          description: "Помогают понимать производительность сайта и поведение посетителей.",
        },
        functional: {
          title: "Функциональные cookie",
          description: "Запоминают язык, предпочтения и настройки пользовательского опыта.",
        },
        marketing: {
          title: "Маркетинг",
          description:
            "Используются для оценки эффективности рекламы и кампаний или показа более релевантного контента.",
        },
      },
    },
  },
  ar: {
    tagline: "حلول المصانع الصناعية",
    quoteShort: "اطلب عرض سعر",
    menuLabel: "القائمة",
    languageLabel: "اللغة",
    servicesLabel: "الخدمات",
    careerLabel: "الوظائف",
    projectsLabel: "المشاريع",
    hero: { quote: "اطلب عرض سعر", whatsapp: "تواصل عبر واتساب", call: "الاتصال هاتفياً" },
    machineCta: { whatsapp: "أرسل عبر واتساب", mail: "أرسل بالبريد الإلكتروني", call: "الاتصال هاتفياً" },
    machinesMega: {
      eyebrow: "الآلات والمعدات",
      panelTitle: "معدات برو ماكينا",
      panelText:
        "استكشف أنظمة البراميل والناقلات والكسارات والمفاعلات والخزانات والغرابيل وتجميع الغبار والتعبئة والجرعات بنهج هندسي قائم على العملية.",
      panelCtaLabel: "جميع الآلات",
      groupsHeading: "مجموعات الآلات الرئيسية",
      itemTag: "صفحة المنتج",
    },
    sectorsMega: {
      eyebrow: "القطاعات",
      panelTitle: "حلول برو ماكينا القطاعية",
      panelText:
        "آلات وحلول مصانع قطاعية لعمليات الأسمدة والكمبوست والحمأة والتعدين والكيمياء وإعادة التدوير.",
      panelCtaLabel: "جميع القطاعات",
      groupsHeading: "القطاعات الرئيسية",
      itemTag: "صفحة التفاصيل",
    },
    footer: {
      ctaTitle: "اطلب عرض سعر أو اجتماعاً فنياً لمشروعك",
      ctaText:
        "تواصل معنا بخصوص مصانع الكمبوست ومصانع الأسمدة والآلات والمعدات وتجفيف الحمأة أو الاستشارات الفنية.",
      contactLabel: "الانتقال إلى صفحة الاتصال",
      callLabel: "اتصل الآن",
      whatsappQuoteLabel: "اطلب عرضاً عبر واتساب",
      phoneLabel: "الاتصال هاتفياً",
      columnIndustries: "القطاعات",
      columnMachines: "المعدات",
      columnConveying: "النقل والجرعات",
      columnCompany: "الشركة",
      columnContact: "الحلول / الاتصال",
      followTitle: "تابعنا",
      followText:
        "تابع قنواتنا على وسائل التواصل: هندسة العمليات، تصنيع الآلات، الأدلة الفنية ومحتوى المشاريع.",
      rights: "© 2026 برو ماكينا. جميع الحقوق محفوظة.",
      whatsappAria: "التواصل عبر واتساب",
      stickySecondaryLabel: "خدماتنا",
      cardTitles: {
        linkedin: "لينكدإن: محتوى فني",
        youtube: "يوتيوب: فيديوهات العمليات",
        instagram: "إنستغرام: صور المشاريع",
      },
    },
    cookies: {
      bannerAria: "شريط تفضيلات ملفات تعريف الارتباط",
      bannerTitle: "تفضيلات ملفات تعريف الارتباط",
      bannerTextStart:
        "يستخدم هذا الموقع ملفات تعريف ارتباط ضرورية لتشغيله بأمان وبشكل صحيح. وبموافقتك، قد تُستخدم ملفات إضافية لقياس الأداء وتحسين التجربة والتسويق. للتفاصيل راجع صفحتي ",
      cookiePolicyLabel: "سياسة ملفات تعريف الارتباط",
      bannerTextMiddle: " و",
      privacyPolicyLabel: "سياسة الخصوصية",
      bannerTextEnd: ".",
      necessaryOnly: "الضرورية فقط",
      manage: "إدارة التفضيلات",
      acceptAll: "قبول الكل",
      settingsLabel: "إعدادات الارتباط",
      settingsAria: "فتح إعدادات ملفات تعريف الارتباط",
      panelTag: "إعدادات ملفات تعريف الارتباط",
      panelTitle: "إدارة تفضيلات ملفات تعريف الارتباط",
      panelText:
        "يمكنك تحديث تفضيلاتك في أي وقت. الملفات الضرورية إلزامية لعمل الموقع، ويمكنك تفعيل أو تعطيل الملفات الأخرى حسب رغبتك.",
      closeAria: "إغلاق لوحة ملفات تعريف الارتباط",
      toggleAriaSuffix: "— تغيير التفضيل",
      saveNecessary: "حفظ الضرورية فقط",
      saveSelection: "حفظ الاختيار",
      categories: {
        necessary: {
          title: "ضرورية للغاية",
          description:
            "تُستخدم لأمان الموقع وإرسال النماذج والوظائف الأساسية للصفحات. لا يمكن تعطيلها.",
        },
        analytics: {
          title: "الأداء والتحليلات",
          description: "تساعدنا على فهم أداء الموقع وسلوك الزوار.",
        },
        functional: {
          title: "ملفات وظيفية",
          description: "تُستخدم لتذكر اللغة والتفضيلات وإعدادات تجربة المستخدم.",
        },
        marketing: {
          title: "التسويق",
          description: "تُستخدم لقياس أداء الإعلانات والحملات أو عرض محتوى أكثر صلة.",
        },
      },
    },
  },
};

/** Mega menü grup yapısı: kategori + altındaki çevrilmiş ürün sayfaları. */
const machineMegaStructure: { category: RouteKey; products: RouteKey[] }[] = [
  { category: "drumSystems", products: ["rotaryDryer", "granulatorDrum", "coolingDrum", "coatingDrum", "compostDrum"] },
  { category: "conveying", products: ["beltConveyor", "screwConveyor", "chainConveyor", "bucketElevator"] },
  { category: "crushers", products: ["crushers"] },
  { category: "dosingSystems", products: ["dosingBeltScale"] },
  { category: "reactorsTanks", products: ["reactorsTanks"] },
  { category: "screeningSystems", products: ["screeningSystems"] },
  { category: "dustCollection", products: ["cyclones"] },
  { category: "packagingSystems", products: ["packagingSystems"] },
  { category: "storageSystems", products: ["bunkersHoppers"] },
];

const sectorKeys: RouteKey[] = [
  "fertilizerPlants",
  "compostPlants",
  "sludgeDrying",
  "mining",
  "chemicalProcess",
  "recycling",
];

export function buildHeaderModel(locale: IntlLocale): SiteHeaderModel {
  const s = chromeStrings[locale];
  const content = getContent(locale);
  const label = (key: RouteKey) =>
    key === "contact" ? content.contact.breadcrumbLabel : content.pages[key].breadcrumbLabel;
  const href = (key: RouteKey) => pathFor(key, locale);

  const machineGroups = machineMegaStructure.map((group) => ({
    id: group.category,
    label: label(group.category),
    href: href(group.category),
    items: group.products.map((product) => ({ label: label(product), href: href(product) })),
  }));

  const sectorGroups = sectorKeys.map((key) => ({
    id: key,
    label: label(key),
    href: href(key),
    items: [{ label: label(key), href: href(key) }],
  }));

  const nav: HeaderNavEntry[] = [
    { type: "link", label: s.servicesLabel, href: href("services") },
    {
      type: "mega",
      label: label("machines"),
      href: href("machines"),
      eyebrow: s.machinesMega.eyebrow,
      panelTitle: s.machinesMega.panelTitle,
      panelText: s.machinesMega.panelText,
      panelCtaLabel: s.machinesMega.panelCtaLabel,
      groupsHeading: s.machinesMega.groupsHeading,
      itemTag: s.machinesMega.itemTag,
      groups: machineGroups,
    },
    {
      type: "mega",
      label: label("sectors"),
      href: href("sectors"),
      eyebrow: s.sectorsMega.eyebrow,
      panelTitle: s.sectorsMega.panelTitle,
      panelText: s.sectorsMega.panelText,
      panelCtaLabel: s.sectorsMega.panelCtaLabel,
      groupsHeading: s.sectorsMega.groupsHeading,
      itemTag: s.sectorsMega.itemTag,
      groups: sectorGroups,
    },
    { type: "link", label: s.projectsLabel, href: "/projeler" },
    { type: "link", label: label("about"), href: href("about") },
    { type: "link", label: label("contact"), href: href("contact") },
  ];

  return {
    homeHref: href("home"),
    tagline: s.tagline,
    topLinks: [
      { label: label("contact"), href: href("contact") },
      { label: s.careerLabel, href: "/kariyer" },
    ],
    nav,
    quoteLabel: s.quoteShort,
    quoteHref: href("contact"),
    menuLabel: s.menuLabel,
    languageLabel: s.languageLabel,
    mobile: {
      machinesLabel: label("machines"),
      machinesAllLabel: s.machinesMega.panelCtaLabel,
      machinesHref: href("machines"),
      machineGroups: machineGroups.map((group) => ({ label: group.label, href: group.href })),
      links: [
        { label: s.servicesLabel, href: href("services") },
        { label: label("sectors"), href: href("sectors") },
        { label: s.projectsLabel, href: "/projeler" },
        { label: label("about"), href: href("about") },
        { label: label("contact"), href: href("contact") },
      ],
      quoteLabel: s.quoteShort,
      quoteHref: `${href("contact")}#quote-form`,
    },
  };
}

export function buildFooterModel(locale: IntlLocale): SiteFooterModel {
  const s = chromeStrings[locale];
  const content = getContent(locale);
  const label = (key: RouteKey) =>
    key === "contact" ? content.contact.breadcrumbLabel : content.pages[key].breadcrumbLabel;
  const href = (key: RouteKey) => pathFor(key, locale);
  const localePrefix = `/${locale}`;

  return {
    cta: {
      title: s.footer.ctaTitle,
      text: s.footer.ctaText,
      contactLabel: s.footer.contactLabel,
      contactHref: href("contact"),
      callLabel: s.footer.callLabel,
      whatsappQuoteLabel: s.footer.whatsappQuoteLabel,
      phoneLabel: s.footer.phoneLabel,
      hideOnExact: [href("contact")],
      hideOnPrefixes: [
        `${localePrefix}/machines-equipment/`,
        `${localePrefix}/oborudovanie/`,
        `${localePrefix}/industries/`,
        `${localePrefix}/otrasli/`,
      ],
      whatsappVariantOnExact: [href("services")],
    },
    brandText: chromeBrandText(locale),
    columns: [
      {
        heading: s.footer.columnIndustries,
        links: sectorKeys.map((key) => ({ label: label(key), href: href(key) })),
      },
      {
        heading: s.footer.columnMachines,
        links: (
          ["rotaryDryer", "granulatorDrum", "coolingDrum", "compostDrum", "crushers", "screeningSystems"] as RouteKey[]
        ).map((key) => ({ label: label(key), href: href(key) })),
      },
      {
        heading: s.footer.columnConveying,
        links: (
          ["beltConveyor", "screwConveyor", "chainConveyor", "bucketElevator", "dosingBeltScale", "storageSystems"] as RouteKey[]
        ).map((key) => ({ label: label(key), href: href(key) })),
      },
      {
        heading: s.footer.columnCompany,
        links: (
          ["about", "services", "machines", "sectors", "drumSystems", "dustCollection"] as RouteKey[]
        ).map((key) => ({ label: label(key), href: href(key) })),
      },
      {
        heading: s.footer.columnContact,
        includeContact: true,
        links: (
          ["contact", "fertilizerPlants", "rotaryDryer", "packagingSystems"] as RouteKey[]
        ).map((key) => ({ label: label(key), href: href(key) })),
      },
    ],
    cookieSettingsLabel: s.cookies.settingsLabel,
    followTitle: s.footer.followTitle,
    followText: s.footer.followText,
    rights: s.footer.rights,
    floating: { whatsappAria: s.footer.whatsappAria },
    mobileSticky: {
      hideOnExact: [href("contact")],
      quoteLabel: s.quoteShort,
      quoteHref: `${href("contact")}#quote-form`,
      secondaryLabel: s.footer.stickySecondaryLabel,
      secondaryHref: href("services"),
    },
  };
}

function chromeBrandText(locale: IntlLocale) {
  const brandTexts: Record<IntlLocale, string> = {
    en: "Pro Makina is an industrial solution partner combining process engineering, machine manufacturing and turnkey plant installation in one structure.",
    ru: "Pro Makina — промышленный партнёр, объединяющий технологический инжиниринг, производство машин и монтаж заводов под ключ в одной структуре.",
    ar: "برو ماكينا شريك حلول صناعية يجمع هندسة العمليات وتصنيع الآلات وتركيب المصانع تسليم مفتاح في هيكل واحد.",
  };
  return brandTexts[locale];
}

export function getCookieTexts(locale: IntlLocale): CookieTexts {
  return chromeStrings[locale].cookies;
}

export function getHeroLabels(locale: IntlLocale) {
  return chromeStrings[locale].hero;
}

export function getMachineCtaLabels(locale: IntlLocale) {
  return chromeStrings[locale].machineCta;
}

export function getFooterCtaLabels(locale: IntlLocale) {
  const s = chromeStrings[locale].footer;
  return {
    whatsappQuote: s.whatsappQuoteLabel,
    phone: s.phoneLabel,
    contact: s.contactLabel,
  };
}

export function getSocialCardTitles(locale: IntlLocale) {
  return chromeStrings[locale].footer.cardTitles;
}
