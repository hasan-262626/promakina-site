import type { IntlLocale } from "./config";

/**
 * Arayüz sözlüğü: menü, CTA, form, doğrulama, footer, 404.
 * İçerik (sayfa metinleri) app/i18n/content altında ayrı tutulur.
 */
export type UiDictionary = {
  nav: {
    home: string;
    machines: string;
    industries: string;
    services: string;
    about: string;
    contact: string;
  };
  cta: {
    quote: string;
    whatsapp: string;
    call: string;
    email: string;
    learnMore: string;
    allMachines: string;
    contactUs: string;
  };
  header: {
    languageLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  breadcrumbHome: string;
  common: {
    faqHeading: string;
    relatedHeading: string;
    exploreHeading: string;
    capacityDisclaimer: string;
    contactBlockHeading: string;
    contactBlockText: string;
    trustHeading: string;
    trustItems: { title: string; text: string }[];
  };
  footer: {
    aboutText: string;
    quickLinksHeading: string;
    machinesHeading: string;
    industriesHeading: string;
    contactHeading: string;
    addressLabel: string;
    address: string;
    rights: string;
  };
  form: {
    heading: string;
    intro: string;
    labels: {
      fullName: string;
      company: string;
      country: string;
      city: string;
      phone: string;
      email: string;
      contactLanguage: string;
      machine: string;
      capacity: string;
      operatingHours: string;
      rawMaterial: string;
      inletMoisture: string;
      targetMoisture: string;
      materialTemperature: string;
      fuelType: string;
      description: string;
      file: string;
    };
    optional: string;
    fileHint: string;
    contactLanguageOptions: string[];
    fuelTypeOptions: string[];
    consentWhatsapp: string;
    consentPrivacy: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    validation: {
      required: string;
      email: string;
      phone: string;
      consent: string;
      fileType: string;
      fileSize: string;
    };
  };
  notFound: {
    title: string;
    text: string;
    backHome: string;
  };
  /** WhatsApp ön mesajı; {page} ilgili sayfa başlığıyla değiştirilir. */
  whatsappTemplate: string;
};

const en: UiDictionary = {
  nav: {
    home: "Home",
    machines: "Machines & Equipment",
    industries: "Industries",
    services: "Services",
    about: "About Us",
    contact: "Contact",
  },
  cta: {
    quote: "Request a Technical Quote",
    whatsapp: "WhatsApp",
    call: "Call Us",
    email: "E-mail",
    learnMore: "Learn more",
    allMachines: "All machines & equipment",
    contactUs: "Contact us",
  },
  header: {
    languageLabel: "Language",
    menuLabel: "Menu",
    closeLabel: "Close",
  },
  breadcrumbHome: "Home",
  common: {
    faqHeading: "Frequently Asked Questions",
    relatedHeading: "Related Machines & Solutions",
    exploreHeading: "Explore",
    capacityDisclaimer:
      "Final dimensions, capacity and drive power are determined per project, based on your raw material analysis, moisture content and process calculations.",
    contactBlockHeading: "Share Your Project Details",
    contactBlockText:
      "Send us your raw material, capacity and process data. Our engineering team will review your requirements and prepare a project-specific technical proposal.",
    trustHeading: "Why Pro Makina",
    trustItems: [
      {
        title: "Manufactured in Turkey",
        text: "Design and fabrication are carried out in our own facility in Eskişehir, Turkey, with full in-house engineering control.",
      },
      {
        title: "Project-based engineering",
        text: "Every machine is sized around your raw material, moisture content and capacity target — not sold from a fixed catalogue.",
      },
      {
        title: "Export experience",
        text: "We prepare international technical proposals, shipping documentation and commissioning support for overseas projects.",
      },
      {
        title: "Single point of responsibility",
        text: "Process design, fabrication, automation and commissioning are managed by one engineering team.",
      },
    ],
  },
  footer: {
    aboutText:
      "Pro Makina designs and manufactures industrial process machinery and turnkey plants for fertilizer, compost, drying, mining, recycling and bulk material handling applications.",
    quickLinksHeading: "Quick Links",
    machinesHeading: "Machines",
    industriesHeading: "Industries",
    contactHeading: "Contact",
    addressLabel: "Address",
    address:
      "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E, Odunpazarı / Eskişehir, Türkiye",
    rights: "All rights reserved.",
  },
  form: {
    heading: "Technical Quote Form",
    intro:
      "Fill in the process data below so our engineers can size the right machine or plant for your project. Fields marked * are required.",
    labels: {
      fullName: "Full name *",
      company: "Company *",
      country: "Country *",
      city: "City",
      phone: "Phone (with country code) *",
      email: "E-mail *",
      contactLanguage: "Preferred contact language",
      machine: "Requested machine or plant *",
      capacity: "Required capacity (t/h or t/day)",
      operatingHours: "Operating time (hours/day)",
      rawMaterial: "Raw material",
      inletMoisture: "Inlet moisture (%)",
      targetMoisture: "Target outlet moisture (%)",
      materialTemperature: "Material temperature (°C)",
      fuelType: "Fuel type",
      description: "Project description *",
      file: "Attach file (technical document, photo, layout)",
    },
    optional: "optional",
    fileHint: "PDF, JPG, PNG, XLSX or DOCX — max. 10 MB",
    contactLanguageOptions: ["English", "Türkçe", "Русский", "العربية"],
    fuelTypeOptions: ["Natural gas", "LPG", "Diesel", "Coal", "Biomass", "Electricity", "Other / undecided"],
    consentWhatsapp: "You may contact me via WhatsApp about this request.",
    consentPrivacy:
      "I have read the privacy notice and consent to the processing of my data to answer this request. *",
    submit: "Send quote request",
    submitting: "Sending…",
    success:
      "Your request has been received. Our engineering team will contact you shortly with a technical evaluation.",
    error: "Your message could not be sent. Please try again or contact us via WhatsApp or e-mail.",
    validation: {
      required: "Please fill in all required fields.",
      email: "Please enter a valid e-mail address.",
      phone: "Please enter a valid phone number with country code.",
      consent: "Please accept the privacy notice to continue.",
      fileType: "Unsupported file type. Allowed: PDF, JPG, PNG, XLSX, DOCX.",
      fileSize: "File is too large. Maximum size is 10 MB.",
    },
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved. You can continue from the homepage or browse our machines.",
    backHome: "Back to homepage",
  },
  whatsappTemplate:
    "Hello Pro Makina, I would like to receive technical information about: {page}",
};

const ru: UiDictionary = {
  nav: {
    home: "Главная",
    machines: "Машины и оборудование",
    industries: "Отрасли",
    services: "Услуги",
    about: "О компании",
    contact: "Контакты",
  },
  cta: {
    quote: "Запросить технико-коммерческое предложение",
    whatsapp: "WhatsApp",
    call: "Позвонить",
    email: "E-mail",
    learnMore: "Подробнее",
    allMachines: "Всё оборудование",
    contactUs: "Связаться с нами",
  },
  header: {
    languageLabel: "Язык",
    menuLabel: "Меню",
    closeLabel: "Закрыть",
  },
  breadcrumbHome: "Главная",
  common: {
    faqHeading: "Часто задаваемые вопросы",
    relatedHeading: "Связанное оборудование и решения",
    exploreHeading: "Разделы",
    capacityDisclaimer:
      "Окончательные размеры, производительность и мощность привода определяются индивидуально для каждого проекта — на основе анализа сырья, влажности и технологических расчётов.",
    contactBlockHeading: "Расскажите о вашем проекте",
    contactBlockText:
      "Отправьте нам данные о сырье, требуемой производительности и технологическом процессе. Наши инженеры изучат задачу и подготовят техническое предложение под ваш проект.",
    trustHeading: "Почему Pro Makina",
    trustItems: [
      {
        title: "Производство в Турции",
        text: "Проектирование и изготовление выполняются на собственном производстве в Эскишехире (Турция) под полным инженерным контролем.",
      },
      {
        title: "Проектный подход",
        text: "Каждая машина рассчитывается под ваше сырьё, влажность и требуемую производительность, а не продаётся по каталогу.",
      },
      {
        title: "Опыт экспортных поставок",
        text: "Мы готовим международные технические предложения, отгрузочную документацию и обеспечиваем шеф-монтаж и пусконаладку.",
      },
      {
        title: "Единая зона ответственности",
        text: "Технологическое проектирование, изготовление, автоматизация и ввод в эксплуатацию — в руках одной инженерной команды.",
      },
    ],
  },
  footer: {
    aboutText:
      "Pro Makina проектирует и производит промышленное технологическое оборудование и заводы «под ключ»: производство удобрений, компостирование, сушка, переработка минерального сырья, рециклинг и транспортировка сыпучих материалов.",
    quickLinksHeading: "Быстрые ссылки",
    machinesHeading: "Оборудование",
    industriesHeading: "Отрасли",
    contactHeading: "Контакты",
    addressLabel: "Адрес",
    address:
      "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E, Одунпазары / Эскишехир, Турция",
    rights: "Все права защищены.",
  },
  form: {
    heading: "Форма запроса технического предложения",
    intro:
      "Заполните технологические данные ниже, чтобы наши инженеры подобрали машину или завод под ваш проект. Поля со знаком * обязательны.",
    labels: {
      fullName: "Имя и фамилия *",
      company: "Компания *",
      country: "Страна *",
      city: "Город",
      phone: "Телефон (с кодом страны) *",
      email: "E-mail *",
      contactLanguage: "Предпочтительный язык общения",
      machine: "Интересующая машина или завод *",
      capacity: "Требуемая производительность (т/ч или т/сутки)",
      operatingHours: "Режим работы (часов в сутки)",
      rawMaterial: "Сырьё",
      inletMoisture: "Начальная влажность (%)",
      targetMoisture: "Требуемая конечная влажность (%)",
      materialTemperature: "Температура материала (°C)",
      fuelType: "Вид топлива",
      description: "Описание проекта *",
      file: "Прикрепить файл (техдокумент, фото, план)",
    },
    optional: "необязательно",
    fileHint: "PDF, JPG, PNG, XLSX или DOCX — не более 10 МБ",
    contactLanguageOptions: ["Русский", "English", "Türkçe", "العربية"],
    fuelTypeOptions: [
      "Природный газ",
      "Сжиженный газ (LPG)",
      "Дизельное топливо",
      "Уголь",
      "Биомасса",
      "Электричество",
      "Другое / не определено",
    ],
    consentWhatsapp: "Разрешаю связаться со мной по WhatsApp по данному запросу.",
    consentPrivacy:
      "Я ознакомился с политикой конфиденциальности и согласен на обработку моих данных для ответа на запрос. *",
    submit: "Отправить запрос",
    submitting: "Отправка…",
    success:
      "Ваш запрос получен. Наши инженеры свяжутся с вами в ближайшее время с технической оценкой.",
    error:
      "Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз или свяжитесь с нами по WhatsApp или e-mail.",
    validation: {
      required: "Пожалуйста, заполните все обязательные поля.",
      email: "Пожалуйста, укажите корректный адрес e-mail.",
      phone: "Пожалуйста, укажите телефон с кодом страны.",
      consent: "Для продолжения примите условия обработки данных.",
      fileType: "Недопустимый тип файла. Разрешены: PDF, JPG, PNG, XLSX, DOCX.",
      fileSize: "Файл слишком большой. Максимальный размер — 10 МБ.",
    },
  },
  notFound: {
    title: "Страница не найдена",
    text: "Запрошенная страница не существует или была перемещена. Перейдите на главную страницу или в каталог оборудования.",
    backHome: "На главную",
  },
  whatsappTemplate:
    "Здравствуйте, Pro Makina! Прошу предоставить техническую информацию: {page}",
};

const ar: UiDictionary = {
  nav: {
    home: "الرئيسية",
    machines: "الآلات والمعدات",
    industries: "القطاعات",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
  },
  cta: {
    quote: "اطلب عرض سعر فني",
    whatsapp: "واتساب",
    call: "اتصل بنا",
    email: "البريد الإلكتروني",
    learnMore: "اعرف المزيد",
    allMachines: "جميع الآلات والمعدات",
    contactUs: "تواصل معنا",
  },
  header: {
    languageLabel: "اللغة",
    menuLabel: "القائمة",
    closeLabel: "إغلاق",
  },
  breadcrumbHome: "الرئيسية",
  common: {
    faqHeading: "الأسئلة الشائعة",
    relatedHeading: "معدات وحلول ذات صلة",
    exploreHeading: "استكشف",
    capacityDisclaimer:
      "تُحدَّد الأبعاد النهائية والطاقة الإنتاجية وقدرة المحرك لكل مشروع على حدة، بناءً على تحليل المادة الخام ونسبة الرطوبة وحسابات العملية الإنتاجية.",
    contactBlockHeading: "شاركنا تفاصيل مشروعك",
    contactBlockText:
      "أرسل إلينا بيانات المادة الخام والطاقة الإنتاجية المطلوبة وتفاصيل العملية، وسيقوم فريقنا الهندسي بدراسة متطلباتك وإعداد عرض فني مخصص لمشروعك.",
    trustHeading: "لماذا برو ماكينا",
    trustItems: [
      {
        title: "تصنيع في تركيا",
        text: "يتم التصميم والتصنيع في منشأتنا الخاصة في إسكي شهير بتركيا، وبإشراف هندسي كامل داخل الشركة.",
      },
      {
        title: "هندسة حسب المشروع",
        text: "تُصمَّم كل آلة وفقاً لمادتك الخام ونسبة الرطوبة والطاقة الإنتاجية المستهدفة، وليست منتجاً جاهزاً من كتالوج.",
      },
      {
        title: "خبرة في التصدير",
        text: "نُعِدّ عروضاً فنية دولية ومستندات الشحن، ونقدم دعم التركيب والتشغيل للمشاريع خارج تركيا.",
      },
      {
        title: "جهة مسؤولية واحدة",
        text: "تصميم العملية، التصنيع، الأتمتة، والتشغيل — يديرها فريق هندسي واحد.",
      },
    ],
  },
  footer: {
    aboutText:
      "تقوم برو ماكينا بتصميم وتصنيع آلات المعالجة الصناعية والمصانع الجاهزة (تسليم مفتاح) لقطاعات الأسمدة والكمبوست والتجفيف والتعدين وإعادة التدوير ومناولة المواد السائبة.",
    quickLinksHeading: "روابط سريعة",
    machinesHeading: "المعدات",
    industriesHeading: "القطاعات",
    contactHeading: "الاتصال",
    addressLabel: "العنوان",
    address:
      "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E، أودون بازاري / إسكي شهير، تركيا",
    rights: "جميع الحقوق محفوظة.",
  },
  form: {
    heading: "نموذج طلب عرض فني",
    intro:
      "يرجى تعبئة بيانات العملية أدناه ليتمكن مهندسونا من اختيار الآلة أو المصنع المناسب لمشروعك. الحقول المميزة بعلامة * إلزامية.",
    labels: {
      fullName: "الاسم الكامل *",
      company: "الشركة *",
      country: "الدولة *",
      city: "المدينة",
      phone: "الهاتف (مع رمز الدولة) *",
      email: "البريد الإلكتروني *",
      contactLanguage: "لغة التواصل المفضلة",
      machine: "الآلة أو المصنع المطلوب *",
      capacity: "الطاقة الإنتاجية المطلوبة (طن/ساعة أو طن/يوم)",
      operatingHours: "ساعات التشغيل (ساعة/يوم)",
      rawMaterial: "المادة الخام",
      inletMoisture: "رطوبة الدخول (%)",
      targetMoisture: "الرطوبة النهائية المطلوبة (%)",
      materialTemperature: "درجة حرارة المادة (°م)",
      fuelType: "نوع الوقود",
      description: "وصف المشروع *",
      file: "إرفاق ملف (مستند فني، صورة، مخطط)",
    },
    optional: "اختياري",
    fileHint: "PDF أو JPG أو PNG أو XLSX أو DOCX — بحد أقصى 10 ميجابايت",
    contactLanguageOptions: ["العربية", "English", "Türkçe", "Русский"],
    fuelTypeOptions: [
      "غاز طبيعي",
      "غاز مسال (LPG)",
      "ديزل",
      "فحم",
      "كتلة حيوية",
      "كهرباء",
      "أخرى / غير محدد",
    ],
    consentWhatsapp: "يمكنكم التواصل معي عبر واتساب بخصوص هذا الطلب.",
    consentPrivacy: "قرأت إشعار الخصوصية وأوافق على معالجة بياناتي للرد على هذا الطلب. *",
    submit: "إرسال طلب العرض",
    submitting: "جارٍ الإرسال…",
    success: "تم استلام طلبكم. سيتواصل معكم فريقنا الهندسي قريباً مع تقييم فني.",
    error: "تعذّر إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب أو البريد الإلكتروني.",
    validation: {
      required: "يرجى تعبئة جميع الحقول الإلزامية.",
      email: "يرجى إدخال بريد إلكتروني صحيح.",
      phone: "يرجى إدخال رقم هاتف صحيح مع رمز الدولة.",
      consent: "يرجى الموافقة على إشعار الخصوصية للمتابعة.",
      fileType: "نوع الملف غير مدعوم. المسموح: PDF, JPG, PNG, XLSX, DOCX.",
      fileSize: "حجم الملف كبير جداً. الحد الأقصى 10 ميجابايت.",
    },
  },
  notFound: {
    title: "الصفحة غير موجودة",
    text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك المتابعة من الصفحة الرئيسية أو تصفح معداتنا.",
    backHome: "العودة إلى الرئيسية",
  },
  whatsappTemplate: "مرحباً برو ماكينا، أرغب بالحصول على معلومات فنية حول: {page}",
};

export const dictionaries: Record<IntlLocale, UiDictionary> = { en, ru, ar };

export function getDictionary(locale: IntlLocale): UiDictionary {
  return dictionaries[locale];
}

export function whatsappMessageFor(locale: IntlLocale, pageTitle: string) {
  return dictionaries[locale].whatsappTemplate.replace("{page}", pageTitle);
}
