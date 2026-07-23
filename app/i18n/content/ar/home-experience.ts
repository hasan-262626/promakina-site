import type { HomeExperienceContent } from "../types";
import { pathFor } from "../../routes";

const p = (key: Parameters<typeof pathFor>[0]) => pathFor(key, "ar");

export const homeExperience: HomeExperienceContent = {
  hero: {
    ariaLabel: "قسم التعريف الرئيسي لبرو ماكينا",
    imageAlt: "حلول برو ماكينا الهندسية والآلات للمصانع الصناعية",
    eyebrow: "هندسة العمليات",
    titleLines: ["حلول هندسية وآلات", "للمصانع الصناعية"],
    description:
      "حلول التصنيع والتركيب والتشغيل لخطوط الأسمدة والكمبوست والتجفيف والنقل والعمليات الصناعية.",
    primaryLabel: "القطاعات التي نخدمها",
    primaryHref: p("sectors"),
    secondaryLabel: "الآلات والمعدات",
    secondaryHref: p("machines"),
  },
  quickAccess: {
    heading: "حلول مخصصة لكل قطاع",
    description:
      "استكشف حلول الآلات والمصانع لتطبيقات الأسمدة والكمبوست والغاز الحيوي والتعدين والحمأة والعمليات الكيميائية.",
    exploreLabel: "استكشف القطاع",
    viewAllLabel: "عرض جميع القطاعات",
    viewAllHref: p("sectors"),
    items: [
      { id: "gubre", title: "تطبيقات الأسمدة", href: p("fertilizerPlants"), alt: "حلول العمليات والآلات لمصانع إنتاج الأسمدة" },
      { id: "kompost", title: "الكمبوست والنفايات العضوية", href: p("compostPlants"), alt: "حلول معالجة الكمبوست والنفايات العضوية" },
      { id: "biyogaz", title: "الغاز الحيوي والطاقة", href: p("sectors"), alt: "حلول التغذية والعمليات لمحطات الغاز الحيوي والطاقة" },
      { id: "maden", title: "التعدين ومعالجة المعادن", href: p("mining"), alt: "حلول التكسير والغربلة والتجفيف لمصانع المعادن" },
      { id: "camur", title: "حلول حمأة الصرف", href: p("sludgeDrying"), alt: "تجفيف الحمأة ونزع الماء وتجهيز المنتج النهائي" },
      { id: "kimya", title: "الصناعة الكيميائية", href: p("chemicalProcess"), alt: "حلول المفاعلات والخزانات للصناعة الكيميائية" },
      { id: "geridonusum", title: "إعادة التدوير والنفايات", href: p("recycling"), alt: "حلول عمليات إعادة التدوير وإدارة النفايات" },
      { id: "dokme", title: "مناولة المواد السائبة", href: p("sectors"), alt: "أنظمة معالجة الأعلاف والمساحيق والمواد السائبة" },
    ],
  },
  machineGroups: {
    heading: "الآلات والمعدات",
    description:
      "من أنظمة البراميل إلى معدات النقل، ومن الكسارات إلى حلول المفاعلات والخزانات — عائلات آلات مهندسة لاحتياجات العمليات المختلفة في مكان واحد.",
    cards: [
      {
        eyebrow: "أنظمة البراميل الدوارة",
        title: "أنظمة البراميل الدوارة",
        products: [
          { label: "المجفف الدوار", href: p("rotaryDryer") },
          { label: "برميل التحبيب الدوار", href: p("granulatorDrum") },
          { label: "برميل التبريد", href: p("coolingDrum") },
          { label: "برميل التغليف", href: p("coatingDrum") },
          { label: "برميل الكمبوست", href: p("compostDrum") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("drumSystems"),
        image: "/images/tambur kurutma/tamkurutma21.jpg",
        alt: "أنظمة البراميل والمجفف الدوار",
      },
      {
        eyebrow: "أنظمة النقل",
        title: "أنظمة النقل",
        products: [
          { label: "الناقل الحزامي", href: p("beltConveyor") },
          { label: "الناقل اللولبي", href: p("screwConveyor") },
          { label: "الناقل السلسلي", href: p("chainConveyor") },
          { label: "رافعة القواديس", href: p("bucketElevator") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("conveying"),
        image: "/images/konveyor/konvey38.jpg",
        alt: "الناقلات ومعدات مناولة المواد",
      },
      {
        eyebrow: "الكسارات والشريدر",
        title: "الكسارات والشريدر",
        products: [
          { label: "كسارات مطرقية وسلسلية", href: p("crushers") },
          { label: "أنظمة الشريدر", href: p("crushers") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("crushers"),
        image: "/images/kirici zincirli/kiricizincir1.jpg",
        alt: "أنظمة الكسارات والتفتيت",
      },
      {
        eyebrow: "المفاعلات والخزانات",
        title: "المفاعلات وخزانات المعالجة",
        products: [
          { label: "مفاعلات بخلاطات", href: p("reactorsTanks") },
          { label: "خزانات الإذابة والتخزين", href: p("reactorsTanks") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("reactorsTanks"),
        image: "/images/sıvı/sivi11.webp",
        alt: "المفاعلات وخزانات المعالجة",
      },
      {
        eyebrow: "أنظمة الغربلة",
        title: "أنظمة الغربلة",
        products: [
          { label: "غرابيل الترومل", href: p("screeningSystems") },
          { label: "الغرابيل الاهتزازية", href: p("screeningSystems") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("screeningSystems"),
        image: "/images/elek/elek1.png",
        alt: "أنظمة الغربلة والتصنيف",
      },
      {
        eyebrow: "تجميع الغبار",
        title: "أنظمة تجميع الغبار",
        products: [
          { label: "الفاصل السيكلوني", href: p("cyclones") },
          { label: "المرشحات النبضية", href: p("dustCollection") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("dustCollection"),
        image: "/images/siklon/siklon2.jpg",
        alt: "السيكلونات وأنظمة تجميع الغبار",
      },
      {
        eyebrow: "التعبئة والتغليف",
        title: "أنظمة التعبئة والتغليف",
        products: [
          { label: "تعبئة الأكياس المفتوحة", href: p("packagingSystems") },
          { label: "ملء الأكياس الكبيرة", href: p("packagingSystems") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("packagingSystems"),
        image: "/images/paketleme/paket1.jpg",
        alt: "أنظمة التعبئة والتغليف",
      },
      {
        eyebrow: "الصوامع والتغذية",
        title: "الصوامع والقواديس والتغذية",
        products: [
          { label: "القواديس والأحواض", href: p("bunkersHoppers") },
          { label: "أنظمة الصوامع", href: p("storageSystems") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("storageSystems"),
        image: "/images/bunker/bunker2.jpg",
        alt: "أنظمة القواديس والتغذية",
      },
      {
        eyebrow: "أنظمة الجرعات",
        title: "أنظمة الجرعات",
        products: [
          { label: "الميزان الحزامي", href: p("dosingBeltScale") },
          { label: "الجرعات الدقيقة والكبيرة", href: p("dosingSystems") },
        ],
        buttonLabel: "استكشف الفئة",
        href: p("dosingSystems"),
        image: "/images/dozaj konveyor/dozaj1.jpg",
        alt: "أنظمة الجرعات",
      },
    ],
  },
  plantSolutions: {
    heading: "حلول معالجة النفايات والمصانع",
    description:
      "تصفح صفحاتنا التجارية الخاصة بمشاريع الكومبوست ومعالجة المخلفات الحيوانية والزراعية وتجفيف الحمأة وتحضير RDF.",
    browseLabel: "عرض جميع حلول المصانع",
    browseHref: p("plantSolutions"),
    cardCtaLabel: "استكشف الحل",
    cards: [
      {
        id: "compost",
        title: "مصانع الكومبوست",
        href: p("compostPlantSolution"),
        image: "/images/kompost/kompost1.jpg",
        alt: "مصنع كومبوست ومعدات معالجة النفايات العضوية",
        description:
          "تصورات مصانع كومبوست تسليم مفتاح لمخلفات عضوية مختلطة وروث ومخلفات زراعية.",
      },
      {
        id: "organic",
        title: "مصانع المخلفات الحيوانية والزراعية",
        href: p("animalWasteCompostPlant"),
        image: "/images/01-genel/evselkompost1.jpg",
        alt: "خط كومبوست للمخلفات الحيوانية والزراعية",
        description:
          "ترتيبات التحضير والخلط والتكثيف الحيوي والتنقية لروث الحيوانات والمخلفات النباتية الليفية.",
      },
      {
        id: "sludge",
        title: "مصانع تجفيف الحمأة",
        href: p("sludgeDryingPlantSolution"),
        image: "/images/atik su camuru/sucamuru1.jpg",
        alt: "مجفف حمأة دوار ونظام هواء حراري",
        description:
          "حلول تجفيف حراري لحمأة الصرف البلدية والصناعية بعد نزع الماء.",
      },
      {
        id: "rdf",
        title: "مصانع تحضير RDF",
        href: p("rdfPlantSolution"),
        image: "/images/01-genel/geridonusum1.jpg",
        alt: "خط تحضير RDF مع أنظمة التقطيع والمناولة",
        description:
          "خطوط وقود بديل تحول النفايات البلدية والصناعية إلى تيارات RDF محددة.",
      },
    ],
  },
  services: {
    heading: "خدماتنا",
    description:
      "تقدم برو ماكينا حلولاً هندسية وتنفيذية مخصصة للمشاريع في مجالات الأسمدة والتحبيب، والكمبوست والنفايات العضوية، وإعادة التدوير، والحمأة، والغاز الحيوي، والتعدين، ومعالجة المواد السائبة. من تحليل الاحتياج إلى تصميم العملية وتصنيع الآلات والتركيب الميداني والتشغيل — تُخطط جميع المراحل من مركز واحد.",
    tags: [
      { label: "مصانع إنتاج الأسمدة", href: p("fertilizerPlants") },
      { label: "مصانع الكمبوست", href: p("compostPlants") },
      { label: "حلول تجفيف الحمأة", href: p("sludgeDrying") },
      { label: "إعادة التدوير والنفايات", href: p("recycling") },
      { label: "التعدين ومعالجة المعادن", href: p("mining") },
      { label: "الصناعة الكيميائية", href: p("chemicalProcess") },
    ],
    detailLabel: "عرض التفاصيل",
    cards: [
      {
        title: "تركيب مصانع تسليم مفتاح",
        description:
          "نخطط الرحلة كاملة من تطوير المفهوم إلى التركيب الميداني ونبني بنية المصنع المناسبة من جهة واحدة.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "خدمة تركيب المصانع تسليم مفتاح",
      },
      {
        title: "تصميم العمليات والهندسة",
        description:
          "تكوين العملية واختيار المعدات وتخطيط البنية الفنية وفق السعة وبنية المنتج وتدفق المواد الخام.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/01-genel/proje2.jpg",
        imageAlt: "خدمة تصميم العمليات والهندسة",
      },
      {
        title: "تصنيع الآلات",
        description:
          "نصنع معدات الخدمة الشاقة: أنظمة البراميل والناقلات والكسارات والمفاعلات والخزانات والغرابيل وتجميع الغبار.",
        buttonLabel: "عرض التفاصيل",
        href: p("machines"),
        image: "/images/01-genel/fabrika1.jpg",
        imageAlt: "خدمة تصنيع الآلات الصناعية",
      },
      {
        title: "التركيب والتشغيل",
        description:
          "ندير التجميع الميداني والتكامل الميكانيكي-الكهربائي والاختبارات وتشغيل الإنتاج الأول بطريقة متحكم بها.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "خدمة التركيب والتشغيل",
      },
      {
        title: "التحديث وإعادة التأهيل",
        description:
          "نطور مشاريع إعادة تأهيل للمصانع القائمة من حيث السعة والكفاءة وجودة المنتج وسلامة التشغيل.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "خدمة التحديث وإعادة التأهيل",
      },
      {
        title: "الاستشارات الفنية",
        description:
          "استشارات فنية لتخطيط الاستثمارات الجديدة وتطوير المنتجات ورفع السعة واختيار المعدات وتحسين العمليات.",
        buttonLabel: "عرض التفاصيل",
        href: p("contact"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "مصنع صناعي ومعدات — الاستشارات الفنية",
      },
      {
        title: "الصيانة والخدمة",
        description:
          "دعم صيانة وخدمة فنية لإطالة عمر المعدات وتقليل التوقفات غير المخططة.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/bakim/bakim1.webp",
        imageAlt: "الصيانة والخدمة والدعم الفني",
      },
      {
        title: "إدارة المشاريع والتنسيق الميداني",
        description:
          "ندير التصنيع والتوريد والتنفيذ الميداني والجدول الزمني وتنسيق الفرق لتقدم المشروع بانتظام وسيطرة.",
        buttonLabel: "عرض التفاصيل",
        href: p("services"),
        image: "/images/01-genel/sahakontrol1.webp",
        imageAlt: "خدمة إدارة المشاريع والتنسيق الميداني",
      },
    ],
  },
  library: {
    heading: "المكتبة الفنية",
    description:
      "استكشف المحتوى الفني حول العمليات والمعدات وتركيب المصانع الذي أعده فريقنا الهندسي.",
    filters: [
      { label: "جميع الآلات", href: p("machines") },
      { label: "أنظمة البراميل", href: p("drumSystems") },
      { label: "أنظمة النقل", href: p("conveying") },
      { label: "القطاعات", href: p("sectors") },
      { label: "الخدمات", href: p("services") },
      { label: "من نحن", href: p("about") },
    ],
    cards: [
      {
        category: "أنظمة التجفيف",
        title: "المجفف الدوار الصناعي",
        description: "كيف يعمل المجفف الدوار، وما المواد التي يجففها، وما البيانات التصميمية التي تحدد حسابه.",
        href: p("rotaryDryer"),
      },
      {
        category: "مصانع الأسمدة",
        title: "برميل التحبيب الدوار",
        description: "التحبيب بالتكتيل الدحروجي: جرعات الرابط والتحكم في المكوث ودائرة التدوير.",
        href: p("granulatorDrum"),
      },
      {
        category: "الكمبوست والنفايات",
        title: "تقنية برميل الكمبوست",
        description: "كمبوست هوائي متحكم به في مفاعل دوار مغلق — أسرع وبإدارة روائح وبمعزل عن الطقس.",
        href: p("compostDrum"),
      },
      {
        category: "النقل",
        title: "تصميم الناقل اللولبي",
        description: "نقل وجرعات مغلقة للمساحيق والحبيبات: القطر والخطوة والسرعة ودرجة الامتلاء.",
        href: p("screwConveyor"),
      },
      {
        category: "مصانع تسليم مفتاح",
        title: "مصانع إنتاج الأسمدة",
        description: "دائرة التحبيب كعملية واحدة: الجرعات والتحبيب والتجفيف والتبريد والغربلة والتعبئة.",
        href: p("fertilizerPlants"),
      },
      {
        category: "حلول الحمأة",
        title: "أنظمة تجفيف الحمأة",
        description: "خطوط تجفيف حراري تقلص كتلة الحمأة وتعقم المنتج وتفتح مسارات الاستفادة.",
        href: p("sludgeDrying"),
      },
    ],
    cardCtaLabel: "اقرأ المزيد",
    viewAllLabel: "جميع الآلات والمعدات",
    viewAllHref: p("machines"),
  },
  quoteBand: {
    title: "اطلب عرض سعر أو اجتماعاً فنياً لمشروعك",
    text: "تواصل معنا بخصوص مصانع الكمبوست ومصانع الأسمدة والآلات والمعدات وتجفيف الحمأة أو الاستشارات الفنية.",
    contactLabel: "الانتقال إلى صفحة الاتصال",
    contactHref: p("contact"),
    callLabel: "اتصل الآن",
    whatsappLabel: "واتساب",
    whatsappMessage: "مرحباً، أتواصل معكم عبر موقع برو ماكينا وأرغب في طلب اجتماع فني.",
  },
  social: {
    tag: "المحتوى الفني والإعلام",
    title: "طبقة محتوى تجعل الخبرة الفنية مرئية عبر وسائل التواصل",
    text: "ننشر بانتظام على قنواتنا في لينكدإن ويوتيوب وإنستغرام محتوى هندسة العمليات وتصنيع الآلات والتطبيقات الميدانية والأدلة الفنية — تدفق إعلامي يبني الثقة لدى المستثمرين والفرق الفنية.",
    cardTitles: {
      linkedin: "لينكدإن: محتوى فني",
      youtube: "يوتيوب: فيديوهات العمليات",
      instagram: "إنستغرام: صور المشاريع",
    },
    buttonLabels: {
      linkedin: "افتح لينكدإن",
      youtube: "افتح يوتيوب",
      instagram: "افتح إنستغرام",
    },
    cardDescriptions: {
      linkedin: "مقالات فنية ورؤى هندسة العمليات ومنشورات المشاريع المؤسسية.",
      youtube: "فيديوهات العمليات وسيناريوهات عمل الآلات وشروح التطبيقات الميدانية.",
      instagram: "صور المشاريع وتفاصيل التصنيع ولقطات تطبيقات المصانع.",
    },
  },
};
