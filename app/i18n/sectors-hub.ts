import type { SectorsHubContent } from "../(tr)/components/sectors-hub-page";
import { findSectorDetailByTrSlugs } from "./sector-details/registry";
import { sectorCards } from "../(tr)/components/sector-subsectors-data";
import { getHeroLabels } from "./chrome";
import type { IntlLocale } from "./config";
import { pathFor, type RouteKey } from "./routes";

/**
 * EN/RU/AR Sektörler hub sayfası. TR /sektorler tasarım ve içerik organizasyonunun tek kaynağıdır: aynı 8 kart,
 * aynı sıra ve görseller, grid sonrası aynı üç bölüm. Yalnızca metinler ve bağlantılar dile göre değişir.
 *
 * Gübre, kompost ve enerji/biyogaz alt çözümlerinin (21) kendi dört dilli sayfaları vardır; alt bağlantılar
 * bu sayfalara gider. Diğer 27 alt sektörün yabancı dil karşılığı yoktur; bunlar en ilgili mevcut sayfaya
 * (tesis çözümü veya sektör sayfası) gider. "Enerji ve Biyogaz" ile "Yem, Toz ve Dökme Katı" sektörlerinin yabancı
 * dil ana sayfası olmadığından bu iki kartın başlığı bağlantısızdır; yem kartının alt maddeleri de bağlantısız
 * etikettir. Yabancı dilde teknik rehber/blog sayfası olmadığından rehber paneli teknik destek talebine (iletişim) yönlenir.
 */

/** TR sektör slug'ı → yabancı dil sektör sayfası (yoksa bağlantısız). */
const sectorKeyBySlug: Record<string, RouteKey | undefined> = {
  "gubre-ve-granulasyon-tesisleri": "fertilizerPlants",
  "kompost-ve-organik-atik-tesisleri": "compostPlants",
  "enerji-ve-biyogaz-sistemleri": undefined,
  "madencilik-ve-mineral-isleme": "mining",
  "kimya-ve-proses-endustrisi": "chemicalProcess",
  "geri-donusum-ve-atik-yonetimi": "recycling",
  "atik-su-camuru-ve-aritma-cozumleri": "sludgeDrying",
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": undefined,
};

/**
 * Alt sektör için daha özel mevcut tesis çözümü sayfası (yoksa ait olduğu sektör sayfası).
 * Gübre, kompost ve enerji/biyogaz alt çözümlerinin kendi dört dilli sayfaları önceliklidir.
 */
const subKeyBySlug: Record<string, RouteKey> = {
  "rdf-srf-hazirlama-tesisleri": "rdfPlantSolution",
  "kapali-sistem-camur-kurutma": "sludgeDryingPlantSolution",
  "acik-sistem-camur-kurutma": "sludgeDryingPlantSolution",
  "atik-su-camurundan-aty-hazirlama": "rdfPlantSolution",
  "atik-su-camurundan-kompost-uretimi": "sludgeToCompostPlant",
};

type CardText = { title: string; alt: string; subs: Record<string, string> };

type HubTexts = {
  meta: { title: string; description: string };
  h1: string;
  shortcut: { before: string; linkLabel: string; after: string };
  cards: Record<string, CardText>;
  approach: SectorsHubContent["approach"];
  guides: { title: string; text: string; button: string };
  cta: { title: string; text: string; primary: string; whatsapp: string; secondary: string };
};

const texts: Record<IntlLocale, HubTexts> = {
  en: {
    meta: {
      title: "Industrial Sector Solutions | Process and Machinery",
      description:
        "Explore machinery and plant solutions for fertilizer, compost, biogas, mining, chemical, recycling, sewage sludge and bulk solids processes.",
    },
    h1: "Process and Machinery Solutions for Industrial Sectors",
    shortcut: {
      before: "For process calculations and technical guidance specific to your project, you can reach our",
      linkLabel: "Engineering Team",
      after: "directly.",
    },
    cards: {
      "gubre-ve-granulasyon-tesisleri": {
        title: "Fertilizer Production Plants",
        alt: "Granular fertilizer for fertilizer and granulation plants",
        subs: {
          "sivi-organomineral": "Liquid Organomineral",
          "sivi-npk": "Liquid NPK",
          "sivi-amino-asit": "Liquid Amino Acid",
          "organik-sivi-gubre": "Organic Liquid Fertilizer",
          "organik-biyostimulan": "Organic Biostimulant",
          "granul-organomineral": "Granular Organomineral",
          "granul-npk": "Granular NPK",
          "granul-kompost-tesisleri": "Granular Compost Plants",
          "toz-organomineral": "Powder Organomineral",
          "toz-npk": "Powder NPK",
        },
      },
      "kompost-ve-organik-atik-tesisleri": {
        title: "Compost & Organic Waste Plants",
        alt: "Compost and organic waste processing solutions",
        subs: {
          "evsel-atiklardan-kompost-tesisi": "Household Waste Compost Plant",
          "hayvansal-atiklardan-kompost-tesisi": "Animal Waste Compost Plant",
          "tarimsal-atiklardan-kompost-tesisi": "Agricultural Waste Compost Plant",
          "mezbaha-atiklarindan-kompost-tesisi": "Slaughterhouse Waste Compost Plant",
          "gida-atiklarindan-kompost-tesisi": "Food Waste Compost Plant",
          "park-ve-bahce-atiklarindan-kompost-tesisi": "Park and Garden Waste Compost Plant",
        },
      },
      "enerji-ve-biyogaz-sistemleri": {
        title: "Energy & Biogas Systems",
        alt: "Energy and biogas process solutions",
        subs: {
          "tarimsal-atik-biyogaz-tesisleri": "Agricultural Waste Biogas Plants",
          "hayvansal-atik-biyogaz-tesisleri": "Animal Waste Biogas Plants",
          "gida-atiklarindan-biyogaz-tesisleri": "Food Waste Biogas Plants",
          "biyokutle-enerji-tesisleri": "Biomass Energy Plants",
          "biyometan-gaz-aritma-cozumleri": "Biomethane / Gas Upgrading Solutions",
        },
      },
      "madencilik-ve-mineral-isleme": {
        title: "Mining & Mineral Processing",
        alt: "Mining and mineral processing systems",
        subs: {
          "silis-maden-tesisleri": "Silica Mining Plants",
          "perlit-isleme-tesisleri": "Perlite Processing Plants",
          "kalsit-isleme-tesisleri": "Calcite Processing Plants",
          "feldspat-isleme-tesisleri": "Feldspar Processing Plants",
          "kirma-eleme-ve-siniflandirma-tesisleri": "Crushing, Screening and Classification Plants",
        },
      },
      "kimya-ve-proses-endustrisi": {
        title: "Chemical & Process Industry",
        alt: "Chemical and process industry equipment solutions",
        subs: {
          "sivi-kimyasal-hazirlama-tesisleri": "Liquid Chemical Preparation Plants",
          "reaktorlu-kimyasal-uretim-tesisleri": "Reactor-Based Chemical Production Plants",
          "asit-ve-baz-dozajlama-sistemleri": "Acid and Base Dosing Systems",
          "karistirma-ve-homojenizasyon-tesisleri": "Mixing and Homogenization Plants",
          "cozundurma-ve-formulasyon-hatlari": "Dissolving and Formulation Lines",
          "deterjan-ve-temizlik-kimyasal-sistemleri": "Detergent and Cleaning Chemical Systems",
        },
      },
      "geri-donusum-ve-atik-yonetimi": {
        title: "Recycling & Waste Management",
        alt: "Recycling and waste management plant solutions",
        subs: {
          "evsel-atik-geri-donusum-tesisleri": "Household Waste Recycling Plants",
          "metal-geri-donusum-tesisleri": "Metal Recycling Plants",
          "plastik-geri-donusum-tesisleri": "Plastic Recycling Plants",
          "kagit-ve-karton-geri-donusum-tesisleri": "Paper and Cardboard Recycling Plants",
          "cam-geri-donusum-tesisleri": "Glass Recycling Plants",
          "rdf-srf-hazirlama-tesisleri": "RDF / SRF Preparation Plants",
        },
      },
      "atik-su-camuru-ve-aritma-cozumleri": {
        title: "Wastewater Sludge Solutions",
        alt: "Sewage sludge dewatering, drying and recovery solutions",
        subs: {
          "kapali-sistem-camur-kurutma": "Closed-System Sludge Drying",
          "acik-sistem-camur-kurutma": "Open-System Sludge Drying",
          "atik-su-camurundan-aty-hazirlama": "RDF Preparation from Sewage Sludge",
          "atik-su-camurundan-kompost-uretimi": "Compost Production from Sewage Sludge",
        },
      },
      "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
        title: "Feed, Powder & Bulk Solids Processing Systems",
        alt: "Feed and bulk solids processing solutions",
        subs: {
          "buyukbas-yem-tesisleri": "Cattle Feed Plants",
          "kucukbas-yem-tesisleri": "Sheep and Goat Feed Plants",
          "kanatli-yem-tesisleri": "Poultry Feed Plants",
          "balik-yemi-tesisleri": "Fish Feed Plants",
          "kedi-kopek-mamasi-tesisleri": "Pet Food Plants",
          "toz-karisim-ve-premiks-hatlari": "Powder Blending and Premix Lines",
        },
      },
    },
    approach: {
      title: "Process and Machinery Selection by Sector",
      paragraphs: [
        "A machine with the same name needs a different design in fertilizer, compost, biogas, mining, chemical, recycling or bulk solids lines. Instead of offering a single standard machine, Pro Makina therefore assesses raw material properties, the capacity target, moisture and particle size, temperature limits and the process goal together. Site dimensions, existing connection points and the equipment working before and after the machine are also considered from the first stage. Equipment selection is thus based not only on individual machine performance but on balanced, continuous operation of the whole line.",
      ],
      cards: [
        { title: "Raw Material and Process Analysis", text: "Product moisture, particle size, density, temperature sensitivity and flow behaviour are the first design inputs." },
        { title: "Capacity and Equipment Selection", text: "Machine type, dimensions and material standard are defined from hourly capacity and the operating schedule." },
        { title: "Line Integration", text: "Feeding, conveying, dust collection and automation connections are planned together with the main machine." },
        { title: "Manufacturing, Assembly and Commissioning", text: "Equipment is manufactured, assembled on site and commissioned to the process targets." },
      ],
    },
    guides: {
      title: "Sector Technical Guides",
      text: "Our engineering team prepares technical guidance for fertilizer, compost, biogas, mining, chemical, recycling and bulk solids processes. Contact us for process documentation and calculations specific to your project.",
      button: "Request Technical Guidance",
    },
    cta: {
      title: "Let's Define the Right Process and Machinery Set-Up for Your Project Together",
      text: "Share your raw material properties, capacity target, product form and site conditions, and we will assess the right process flow and equipment combination for your plant together.",
      primary: "Request a Technical Meeting",
      whatsapp: "Chat on WhatsApp",
      secondary: "Explore Machines & Equipment",
    },
  },
  ru: {
    meta: {
      title: "Отраслевые решения | Процессы и оборудование",
      description:
        "Оборудование и решения для производства удобрений, компоста, биогаза, горного дела, химии, переработки отходов, осадков сточных вод и сыпучих материалов.",
    },
    h1: "Технологические решения и оборудование для промышленных отраслей",
    shortcut: {
      before: "По технологическим расчётам и техническим вопросам вашего проекта вы можете напрямую обратиться к",
      linkLabel: "нашей инженерной команде",
      after: ".",
    },
    cards: {
      "gubre-ve-granulasyon-tesisleri": {
        title: "Заводы по производству удобрений",
        alt: "Гранулированное удобрение для заводов удобрений и грануляции",
        subs: {
          "sivi-organomineral": "Жидкие органоминеральные",
          "sivi-npk": "Жидкие NPK",
          "sivi-amino-asit": "Жидкие аминокислоты",
          "organik-sivi-gubre": "Органические жидкие удобрения",
          "organik-biyostimulan": "Органические биостимуляторы",
          "granul-organomineral": "Гранулированные органоминеральные",
          "granul-npk": "Гранулированные NPK",
          "granul-kompost-tesisleri": "Заводы гранулированного компоста",
          "toz-organomineral": "Порошковые органоминеральные",
          "toz-npk": "Порошковые NPK",
        },
      },
      "kompost-ve-organik-atik-tesisleri": {
        title: "Предприятия компоста и органических отходов",
        alt: "Решения по переработке компоста и органических отходов",
        subs: {
          "evsel-atiklardan-kompost-tesisi": "Компостирование бытовых отходов",
          "hayvansal-atiklardan-kompost-tesisi": "Компостирование отходов животноводства",
          "tarimsal-atiklardan-kompost-tesisi": "Компостирование сельхозотходов",
          "mezbaha-atiklarindan-kompost-tesisi": "Компостирование отходов боен",
          "gida-atiklarindan-kompost-tesisi": "Компостирование пищевых отходов",
          "park-ve-bahce-atiklarindan-kompost-tesisi": "Компостирование отходов парков и садов",
        },
      },
      "enerji-ve-biyogaz-sistemleri": {
        title: "Энергетика и биогаз",
        alt: "Технологические решения для энергетики и биогаза",
        subs: {
          "tarimsal-atik-biyogaz-tesisleri": "Биогаз из сельхозотходов",
          "hayvansal-atik-biyogaz-tesisleri": "Биогаз из отходов животноводства",
          "gida-atiklarindan-biyogaz-tesisleri": "Биогаз из пищевых отходов",
          "biyokutle-enerji-tesisleri": "Энергоустановки на биомассе",
          "biyometan-gaz-aritma-cozumleri": "Биометан / очистка газа",
        },
      },
      "madencilik-ve-mineral-isleme": {
        title: "Горное дело и переработка минералов",
        alt: "Системы горного дела и переработки минералов",
        subs: {
          "silis-maden-tesisleri": "Предприятия по добыче кварца",
          "perlit-isleme-tesisleri": "Переработка перлита",
          "kalsit-isleme-tesisleri": "Переработка кальцита",
          "feldspat-isleme-tesisleri": "Переработка полевого шпата",
          "kirma-eleme-ve-siniflandirma-tesisleri": "Дробление, грохочение и классификация",
        },
      },
      "kimya-ve-proses-endustrisi": {
        title: "Химическая и перерабатывающая промышленность",
        alt: "Оборудование для химической и перерабатывающей промышленности",
        subs: {
          "sivi-kimyasal-hazirlama-tesisleri": "Приготовление жидких химикатов",
          "reaktorlu-kimyasal-uretim-tesisleri": "Химическое производство с реакторами",
          "asit-ve-baz-dozajlama-sistemleri": "Дозирование кислот и щелочей",
          "karistirma-ve-homojenizasyon-tesisleri": "Смешивание и гомогенизация",
          "cozundurma-ve-formulasyon-hatlari": "Линии растворения и рецептуры",
          "deterjan-ve-temizlik-kimyasal-sistemleri": "Моющие и чистящие средства",
        },
      },
      "geri-donusum-ve-atik-yonetimi": {
        title: "Переработка и обращение с отходами",
        alt: "Решения для переработки и обращения с отходами",
        subs: {
          "evsel-atik-geri-donusum-tesisleri": "Переработка бытовых отходов",
          "metal-geri-donusum-tesisleri": "Переработка металлов",
          "plastik-geri-donusum-tesisleri": "Переработка пластика",
          "kagit-ve-karton-geri-donusum-tesisleri": "Переработка бумаги и картона",
          "cam-geri-donusum-tesisleri": "Переработка стекла",
          "rdf-srf-hazirlama-tesisleri": "Подготовка RDF / SRF",
        },
      },
      "atik-su-camuru-ve-aritma-cozumleri": {
        title: "Решения для осадков сточных вод",
        alt: "Обезвоживание, сушка и утилизация осадков сточных вод",
        subs: {
          "kapali-sistem-camur-kurutma": "Закрытая сушка осадка",
          "acik-sistem-camur-kurutma": "Открытая сушка осадка",
          "atik-su-camurundan-aty-hazirlama": "RDF из осадка сточных вод",
          "atik-su-camurundan-kompost-uretimi": "Компост из осадка сточных вод",
        },
      },
      "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
        title: "Переработка кормов, порошков и сыпучих материалов",
        alt: "Решения для переработки кормов и сыпучих материалов",
        subs: {
          "buyukbas-yem-tesisleri": "Корма для КРС",
          "kucukbas-yem-tesisleri": "Корма для МРС",
          "kanatli-yem-tesisleri": "Корма для птицы",
          "balik-yemi-tesisleri": "Корма для рыб",
          "kedi-kopek-mamasi-tesisleri": "Корма для кошек и собак",
          "toz-karisim-ve-premiks-hatlari": "Линии смешивания порошков и премиксов",
        },
      },
    },
    approach: {
      title: "Выбор процесса и оборудования по отраслям",
      paragraphs: [
        "Машина с одним и тем же названием требует разной конструкции на линиях удобрений, компоста, биогаза, горного дела, химии, переработки отходов или сыпучих материалов. Поэтому Pro Makina не предлагает одну стандартную машину, а совместно оценивает свойства сырья, требуемую производительность, влажность и крупность, температурные ограничения и цель процесса. Размеры площадки, существующие точки подключения и оборудование, работающее до и после машины, также учитываются с первого этапа. Так выбор оборудования основывается не только на характеристиках отдельной машины, но и на сбалансированной и непрерывной работе всей линии.",
      ],
      cards: [
        { title: "Анализ сырья и процесса", text: "Влажность, крупность, плотность, термочувствительность и сыпучесть продукта — первые исходные данные проекта." },
        { title: "Производительность и выбор оборудования", text: "Тип машины, размеры и стандарт материалов определяются по часовой производительности и режиму работы." },
        { title: "Интеграция в линию", text: "Подача, транспорт, пылеулавливание и автоматика планируются вместе с основной машиной." },
        { title: "Изготовление, монтаж и пусконаладка", text: "Оборудование изготавливается, монтируется на площадке и вводится в эксплуатацию под цели процесса." },
      ],
    },
    guides: {
      title: "Отраслевые технические руководства",
      text: "Наша инженерная команда готовит техническую документацию по процессам удобрений, компоста, биогаза, горного дела, химии, переработки отходов и сыпучих материалов. Свяжитесь с нами для получения расчётов и документации по вашему проекту.",
      button: "Запросить техническую консультацию",
    },
    cta: {
      title: "Определим подходящую схему процесса и оборудования для вашего проекта вместе",
      text: "Сообщите свойства сырья, требуемую производительность, форму продукта и условия площадки — вместе оценим подходящую технологическую схему и комбинацию оборудования для вашего предприятия.",
      primary: "Запросить техническую встречу",
      whatsapp: "Написать в WhatsApp",
      secondary: "Смотреть машины и оборудование",
    },
  },
  ar: {
    meta: {
      title: "حلول القطاعات الصناعية | العمليات والآلات",
      description:
        "تعرّف على حلول الآلات والمنشآت لعمليات الأسمدة والسماد العضوي والغاز الحيوي والتعدين والكيماويات وإعادة التدوير وحمأة الصرف والمواد السائبة.",
    },
    h1: "حلول العمليات والآلات للقطاعات الصناعية",
    shortcut: {
      before: "للحسابات الخاصة بعملياتكم والإرشاد الفني لمشروعكم يمكنكم التواصل مباشرة مع",
      linkLabel: "فريقنا الهندسي",
      after: ".",
    },
    cards: {
      "gubre-ve-granulasyon-tesisleri": {
        title: "مصانع إنتاج الأسمدة",
        alt: "سماد حبيبي لمصانع الأسمدة والتحبيب",
        subs: {
          "sivi-organomineral": "عضوي معدني سائل",
          "sivi-npk": "NPK سائل",
          "sivi-amino-asit": "أحماض أمينية سائلة",
          "organik-sivi-gubre": "سماد عضوي سائل",
          "organik-biyostimulan": "منشط حيوي عضوي",
          "granul-organomineral": "عضوي معدني حبيبي",
          "granul-npk": "NPK حبيبي",
          "granul-kompost-tesisleri": "منشآت السماد العضوي الحبيبي",
          "toz-organomineral": "عضوي معدني مسحوق",
          "toz-npk": "NPK مسحوق",
        },
      },
      "kompost-ve-organik-atik-tesisleri": {
        title: "منشآت السماد العضوي والنفايات العضوية",
        alt: "حلول معالجة السماد العضوي والنفايات العضوية",
        subs: {
          "evsel-atiklardan-kompost-tesisi": "سماد عضوي من النفايات المنزلية",
          "hayvansal-atiklardan-kompost-tesisi": "سماد عضوي من المخلفات الحيوانية",
          "tarimsal-atiklardan-kompost-tesisi": "سماد عضوي من المخلفات الزراعية",
          "mezbaha-atiklarindan-kompost-tesisi": "سماد عضوي من مخلفات المسالخ",
          "gida-atiklarindan-kompost-tesisi": "سماد عضوي من مخلفات الأغذية",
          "park-ve-bahce-atiklarindan-kompost-tesisi": "سماد عضوي من مخلفات الحدائق",
        },
      },
      "enerji-ve-biyogaz-sistemleri": {
        title: "أنظمة الطاقة والغاز الحيوي",
        alt: "حلول عمليات الطاقة والغاز الحيوي",
        subs: {
          "tarimsal-atik-biyogaz-tesisleri": "غاز حيوي من المخلفات الزراعية",
          "hayvansal-atik-biyogaz-tesisleri": "غاز حيوي من المخلفات الحيوانية",
          "gida-atiklarindan-biyogaz-tesisleri": "غاز حيوي من مخلفات الأغذية",
          "biyokutle-enerji-tesisleri": "منشآت طاقة الكتلة الحيوية",
          "biyometan-gaz-aritma-cozumleri": "الميثان الحيوي / تنقية الغاز",
        },
      },
      "madencilik-ve-mineral-isleme": {
        title: "التعدين ومعالجة المعادن",
        alt: "أنظمة التعدين ومعالجة المعادن",
        subs: {
          "silis-maden-tesisleri": "منشآت تعدين السيليكا",
          "perlit-isleme-tesisleri": "منشآت معالجة البيرلايت",
          "kalsit-isleme-tesisleri": "منشآت معالجة الكالسيت",
          "feldspat-isleme-tesisleri": "منشآت معالجة الفلسبار",
          "kirma-eleme-ve-siniflandirma-tesisleri": "منشآت التكسير والغربلة والتصنيف",
        },
      },
      "kimya-ve-proses-endustrisi": {
        title: "الصناعات الكيميائية والتحويلية",
        alt: "حلول معدات الصناعات الكيميائية والتحويلية",
        subs: {
          "sivi-kimyasal-hazirlama-tesisleri": "منشآت تحضير الكيماويات السائلة",
          "reaktorlu-kimyasal-uretim-tesisleri": "منشآت إنتاج كيميائي بالمفاعلات",
          "asit-ve-baz-dozajlama-sistemleri": "أنظمة جرعات الأحماض والقواعد",
          "karistirma-ve-homojenizasyon-tesisleri": "منشآت الخلط والتجانس",
          "cozundurma-ve-formulasyon-hatlari": "خطوط الإذابة والتركيب",
          "deterjan-ve-temizlik-kimyasal-sistemleri": "أنظمة المنظفات وكيماويات التنظيف",
        },
      },
      "geri-donusum-ve-atik-yonetimi": {
        title: "إعادة التدوير وإدارة النفايات",
        alt: "حلول منشآت إعادة التدوير وإدارة النفايات",
        subs: {
          "evsel-atik-geri-donusum-tesisleri": "منشآت تدوير النفايات المنزلية",
          "metal-geri-donusum-tesisleri": "منشآت تدوير المعادن",
          "plastik-geri-donusum-tesisleri": "منشآت تدوير البلاستيك",
          "kagit-ve-karton-geri-donusum-tesisleri": "منشآت تدوير الورق والكرتون",
          "cam-geri-donusum-tesisleri": "منشآت تدوير الزجاج",
          "rdf-srf-hazirlama-tesisleri": "منشآت تحضير RDF / SRF",
        },
      },
      "atik-su-camuru-ve-aritma-cozumleri": {
        title: "حلول حمأة مياه الصرف",
        alt: "حلول نزح مياه حمأة الصرف وتجفيفها والاستفادة منها",
        subs: {
          "kapali-sistem-camur-kurutma": "تجفيف الحمأة بنظام مغلق",
          "acik-sistem-camur-kurutma": "تجفيف الحمأة بنظام مفتوح",
          "atik-su-camurundan-aty-hazirlama": "تحضير RDF من حمأة الصرف",
          "atik-su-camurundan-kompost-uretimi": "إنتاج السماد العضوي من حمأة الصرف",
        },
      },
      "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
        title: "أنظمة معالجة الأعلاف والمساحيق والمواد السائبة",
        alt: "حلول معالجة الأعلاف والمواد السائبة",
        subs: {
          "buyukbas-yem-tesisleri": "منشآت أعلاف الأبقار",
          "kucukbas-yem-tesisleri": "منشآت أعلاف الأغنام والماعز",
          "kanatli-yem-tesisleri": "منشآت أعلاف الدواجن",
          "balik-yemi-tesisleri": "منشآت أعلاف الأسماك",
          "kedi-kopek-mamasi-tesisleri": "منشآت أغذية القطط والكلاب",
          "toz-karisim-ve-premiks-hatlari": "خطوط خلط المساحيق والبريمكس",
        },
      },
    },
    approach: {
      title: "اختيار العمليات والآلات حسب القطاع",
      paragraphs: [
        "تحتاج الآلة التي تحمل الاسم نفسه إلى تصميم مختلف في خطوط الأسمدة أو السماد العضوي أو الغاز الحيوي أو التعدين أو الكيماويات أو إعادة التدوير أو المواد السائبة. لذلك لا تقدم برو ماكينا آلة قياسية واحدة، بل تقيّم معًا خصائص المادة الخام وهدف السعة والرطوبة وحجم الحبيبات وحدود الحرارة وهدف العملية. كما تُراعى أبعاد الموقع ونقاط التوصيل القائمة والمعدات التي تعمل قبل الآلة وبعدها منذ المرحلة الأولى، وبذلك لا يعتمد اختيار المعدات على أداء الآلة المنفردة فحسب، بل على تشغيل الخط بالكامل بشكل متوازن ومستمر.",
      ],
      cards: [
        { title: "تحليل المادة الخام والعملية", text: "رطوبة المنتج وحجم حبيباته وكثافته وحساسيته للحرارة وسلوك انسيابه هي أولى مدخلات التصميم." },
        { title: "السعة واختيار المعدات", text: "يُحدَّد نوع الآلة وأبعادها ومعايير موادها وفق السعة الساعية ونظام التشغيل." },
        { title: "التكامل مع الخط", text: "تُخطَّط وصلات التلقيم والنقل وجمع الغبار والأتمتة مع الآلة الرئيسية." },
        { title: "التصنيع والتركيب والتشغيل", text: "تُصنَّع المعدات وتُركَّب في الموقع وتُشغَّل وفق أهداف العملية." },
      ],
    },
    guides: {
      title: "الأدلة الفنية حسب القطاع",
      text: "يُعد فريقنا الهندسي إرشادات فنية لعمليات الأسمدة والسماد العضوي والغاز الحيوي والتعدين والكيماويات وإعادة التدوير والمواد السائبة، تواصلوا معنا للحصول على وثائق وحسابات العملية الخاصة بمشروعكم.",
      button: "اطلب إرشادًا فنيًا",
    },
    cta: {
      title: "لنحدد معًا تكوين العملية والآلات المناسب لمشروعكم",
      text: "شاركونا خصائص المادة الخام وهدف السعة وشكل المنتج وظروف الموقع، لنقيّم معًا تدفق العملية وتركيبة المعدات المناسبة لمنشأتكم.",
      primary: "اطلب اجتماعًا فنيًا",
      whatsapp: "تواصل عبر واتساب",
      secondary: "استكشف الآلات والمعدات",
    },
  },
};

export function getSectorsHubTexts(locale: IntlLocale) {
  return texts[locale];
}

export function buildSectorsHubContent(locale: IntlLocale): SectorsHubContent {
  const t = texts[locale];
  const contact = pathFor("contact", locale);
  return {
    h1: t.h1,
    hero: { quote: { label: getHeroLabels(locale).quote, href: contact }, whatsapp: getHeroLabels(locale).whatsapp, call: getHeroLabels(locale).call },
    shortcut: { ...t.shortcut, href: contact },
    cards: sectorCards.map((sector) => {
      const text = t.cards[sector.slug];
      if (!text) throw new Error(`Sektörler: ${sector.slug} için ${locale} metni eksik`);
      const sectorKey = sectorKeyBySlug[sector.slug];
      return {
        key: sector.slug,
        title: text.title,
        href: sectorKey ? pathFor(sectorKey, locale) : undefined,
        image: sector.image,
        alt: text.alt,
        subLinks: sector.subLinks.map((item) => {
          const label = text.subs[item.slug];
          if (!label) throw new Error(`Sektörler: ${item.slug} için ${locale} etiketi eksik`);
          const key = findSectorDetailByTrSlugs(sector.slug, item.slug)?.key ?? subKeyBySlug[item.slug] ?? sectorKey;
          return { key: item.slug, label, href: key ? pathFor(key, locale) : undefined };
        }),
      };
    }),
    approach: t.approach,
    guides: { title: t.guides.title, text: t.guides.text, links: [], button: { label: t.guides.button, href: contact } },
    cta: {
      title: t.cta.title,
      text: t.cta.text,
      primary: { label: t.cta.primary, href: contact },
      whatsapp: t.cta.whatsapp,
      secondary: { label: t.cta.secondary, href: pathFor("machines", locale) },
    },
  };
}
