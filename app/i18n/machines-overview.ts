import type { MachinesOverviewContent } from "../(tr)/components/machines-overview-page";
import { intlRouteLabel } from "./route-label";
import { homeMachineGroupCards } from "../(tr)/home-machine-groups-data";
import { getHeroLabels } from "./chrome";
import { absoluteUrl, type IntlLocale } from "./config";
import { getDrumPageTexts, groupOf, isDrumPageKey } from "./content/drum-pages";
import { pathFor, routeKeys, type RouteKey } from "./routes";

/**
 * EN/RU/AR Makinalar & Ekipman ana sayfası. TR sayfası (/makinalar-ekipman) tasarım ve içerik
 * organizasyonunun tek kaynağıdır: aynı MachinesOverviewPage şablonu, aynı kategori kartları, sırası ve
 * görselleri kullanılır. Yalnızca metinler TR kaynaktan çevrilir ve bağlantılar dile göre çözülür.
 *
 * TR sayfasındaki bazı bağlantıların yabancı dilde karşılığı yoktur (hizmet alt sayfaları, iki sektör,
 * blog, projeler). Yeni URL üretilmez; bunlar en yakın mevcut yabancı dil sayfasına bağlanır.
 */

const trKeyByPath = new Map<string, RouteKey>(routeKeys.map((key) => [pathFor(key, "tr"), key]));

/** TR yolları için yabancı dil karşılığı olmayan sayfaların bağlanacağı mevcut sayfa. */
const fallbackKeyByTrPath: Record<string, RouteKey> = {
  "/hizmetler/proses-tasarimi-ve-muhendislik": "services",
  "/hizmetler/makine-imalati": "services",
  "/hizmetler/anahtar-teslim-tesis-kurulumu": "services",
  "/hizmetler/kurulum-ve-devreye-alma": "services",
  "/hizmetler/bakim-ve-servis": "services",
  "/sektorler/enerji-ve-biyogaz-sistemleri": "sectors",
  "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": "sectors",
};

function localizeHref(trHref: string | undefined, locale: IntlLocale): string | undefined {
  if (!trHref) return undefined;
  const key = trKeyByPath.get(trHref) ?? fallbackKeyByTrPath[trHref];
  if (!key) throw new Error(`Makinalar sayfası: ${trHref} için yabancı dil karşılığı tanımlı değil`);
  return pathFor(key, locale);
}

/** Dilden bağımsız iskelet: TR sayfasıyla aynı sıra ve bağlantılar. */
const flowStepHrefs: Array<Array<string | undefined>> = [
  [
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
    "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar",
    undefined,
    "/makinalar-ekipman/toz-toplama-sistemleri",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
  ],
  [
    "/makinalar-ekipman/dozajlama-sistemleri",
    "/makinalar-ekipman/reaktorler-ve-tanklar",
    "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  ],
  [
    "/tesisler/kompost-tesisi",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    "/makinalar-ekipman/reaktorler-ve-tanklar",
    "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
    "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  ],
  [
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
    "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
    "/makinalar-ekipman/dozajlama-sistemleri",
  ],
];

const sectorHrefs = [
  "/sektorler/gubre-ve-granulasyon-tesisleri",
  "/sektorler/kompost-ve-organik-atik-tesisleri",
  "/sektorler/madencilik-ve-mineral-isleme",
  "/sektorler/kimya-ve-proses-endustrisi",
  "/sektorler/geri-donusum-ve-atik-yonetimi",
  "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "/sektorler/enerji-ve-biyogaz-sistemleri",
  "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
];

const manufacturingStepHrefs: Array<string | undefined> = [
  "/hizmetler/proses-tasarimi-ve-muhendislik",
  undefined,
  undefined,
  "/hizmetler/proses-tasarimi-ve-muhendislik",
  "/hizmetler/makine-imalati",
  undefined,
  "/hizmetler/makine-imalati",
  "/hizmetler/anahtar-teslim-tesis-kurulumu",
  "/hizmetler/kurulum-ve-devreye-alma",
  "/hizmetler/bakim-ve-servis",
];

/** "Referans Projeler" ve "Teknik Makaleler" için yabancı dil sayfası yoktur; mevcut sayfalara bağlanır. */
const relatedKeys: RouteKey[] = ["services", "plantSolutions", "compostPlantSolution", "sectors", "about", "contact"];

type CardText = { description: string; alt: string };

type OverviewTexts = {
  meta: { title: string; description: string };
  ogImageAlt: string;
  hero: { eyebrow: string; title: string; description: string };
  cardButton: string;
  cardLabels: { categoryAria: string; allAria: string };
  /** TR kategori slug'ına göre. */
  cards: Record<string, CardText>;
  itemListName: string;
  selection: { title: string; before: string; linkLabel: string; after: string };
  flows: { title: string; intro: string; items: Array<{ title: string; description: string; steps: string[] }> };
  sectors: { title: string; intro: string; labels: string[] };
  manufacturing: { title: string; intro: string; steps: string[] };
  quote: { title: string; text: string; primary: string; whatsapp: string; checklist: string[] };
  articles: { before: string; linkLabel: string; after: string };
  related: { title: string; labels: string[] };
  faq: { title: string; intro: string; items: Array<{ question: string; answer: string }> };
};

const texts: Record<IntlLocale, OverviewTexts> = {
  en: {
    meta: {
      title: "Industrial Machinery and Process Equipment",
      description:
        "Industrial machinery manufacturing: drying drums, conveyors, crushers, reactors, screens, silos, dust collection and dosing systems.",
    },
    ogImageAlt: "Pro Makina industrial machinery and process equipment",
    hero: {
      eyebrow: "PROCESS MACHINERY AND EQUIPMENT",
      title: "Industrial Machinery and Process Equipment",
      description:
        "We design, manufacture and integrate into plant lines machinery and equipment tailored to capacity and product properties for drying, conveying, crushing, screening, storage, dosing, mixing and product preparation processes.",
    },
    cardButton: "View Category",
    cardLabels: { categoryAria: "Explore the {title} category", allAria: "View all of the {title} category" },
    cards: {
      "tambur-sistemleri": {
        description:
          "Drum systems for drying, cooling, granulation, coating and composting are designed around the product's moisture, particle size, temperature and residence time requirements.",
        alt: "Industrial drying and granulation drum systems",
      },
      "tasima-ekipmanlari": {
        description:
          "Belt conveyors, screw conveyors, chain conveyors and elevators move bulk solids, powders and granules through the plant in a controlled, safe and continuous way.",
        alt: "Belt, chain and screw conveying equipment",
      },
      "kiricilar-ve-parcalayicilar": {
        description:
          "Crushers and shredders reduce raw material size, break up lumps, provide uniform feed ahead of the process and help downstream equipment work efficiently.",
        alt: "Industrial crusher and shredder systems",
      },
      "reaktorler-ve-tanklar": {
        description:
          "Reactors and process tanks are engineered for the material properties of liquid fertilizer, chemical processes, mixing, dissolving, storage and reaction applications.",
        alt: "Stainless reactors and process tanks",
      },
      "eleme-ve-siniflandirma-sistemleri": {
        description:
          "Screening and classification systems separate products by particle size, manage recycle streams, deliver the required fraction and protect final product quality.",
        alt: "Screening and product classification systems",
      },
      "toz-toplama-sistemleri": {
        description:
          "Cyclones, pulse-jet filters, fans and ducting are designed to control the dust generated in drying, crushing, screening and conveying lines and to manage process air.",
        alt: "Cyclones and industrial dust collection systems",
      },
      "paketleme-ve-dolum-sistemleri": {
        description:
          "Packaging and filling systems dispatch powder, granular and liquid products in bags, big bags, bottles or drums in a controlled, weighed and traceable way.",
        alt: "Automatic packaging and filling equipment",
      },
      "depolama-ve-besleme-sistemleri": {
        description:
          "Silos, bunkers, feed hoppers and controlled discharge equipment deliver raw material steadily to the process, smooth capacity fluctuations and keep the line running continuously.",
        alt: "Silo, bunker and controlled feeding systems",
      },
      "yardimci-ekipmanlar-ve-akis-sistemleri": {
        description:
          "Flap valves, rotary valves, distributors, air ducts and connection equipment control and direct the flow between the main process machines and make plant operation more balanced.",
        alt: "Flap valves, distributors and auxiliary flow equipment",
      },
      "dozajlama-sistemleri": {
        description:
          "Micro and macro dosing systems are developed to manage raw material ratios correctly in recipe-based production, provide weighed feeding and keep the process repeatable.",
        alt: "Micro and macro dosing systems",
      },
    },
    itemListName: "Industrial machinery and process equipment categories",
    selection: {
      title: "How to Select Industrial Machinery",
      before:
        "The right machine cannot be selected by looking at hourly capacity alone. Two production lines with the same capacity may need completely different equipment combinations because of product moisture, particle size, density, temperature sensitivity, abrasiveness, stickiness and flowability. The first step is therefore to define the raw material's inlet conditions and the target output quality. Residence time and air flow in the drying drum, inclination and spillage risk on the conveyor, target product size in the crusher, fraction range on the screen, bridging risk in the silo and weighing accuracy in the dosing system are assessed together. Site layout, maintenance access, automation level, energy infrastructure, dust control and connection points to the existing line are also critical criteria. Pro Makina reads this data with a",
      linkLabel: "process design and engineering",
      after:
        "approach and aims for the continuity of the whole plant flow as much as for individual machine performance. This allows a more balanced solution between the capacity target on day one and the real operating conditions on site.",
    },
    flows: {
      title: "From a Single Machine to an Integrated Process Line",
      intro:
        "A machine usually works correctly only together with the feeding equipment before it and the take-off equipment after it. Machinery manufacturing should therefore consider raw material receiving, conveying, drying, classification, storage, dosing and packaging within the same process flow.",
      items: [
        {
          title: "Drying and Thermal Process Line",
          description:
            "For high-moisture products, energy balance, air flow, dust control and product outlet moisture are assessed within the same design.",
          steps: ["Feeding", "Rotary Dryer", "Cyclone", "Fan", "Filter", "Screening", "Storage"],
        },
        {
          title: "Granular Fertilizer Production Line",
          description:
            "Drums and conveying equipment are selected by reading recipe, moisture, recycle ratio and final granule quality together.",
          steps: ["Dosing", "Mixing", "Granulation", "Drying", "Cooling", "Screening", "Coating", "Packaging"],
        },
        {
          title: "Compost and Organic Waste Line",
          description:
            "From waste reception to product preparation, shredding, mixing, drum, screening and odour control equipment are planned together.",
          steps: ["Waste Reception", "Shredding", "Mixing", "Maturation", "Drying", "Screening", "Product Preparation"],
        },
        {
          title: "Bulk Solids Transfer Line",
          description:
            "For line continuity, bunker volume, conveyor type, elevator height, silo discharge and dosing accuracy are calculated together.",
          steps: ["Bunker", "Screw Conveyor", "Belt Conveyor", "Elevator", "Silo", "Dosing"],
        },
      ],
    },
    sectors: {
      title: "Main Industries We Build Machinery and Equipment For",
      intro:
        "In fertilizer, compost, mining, chemical, waste, biogas and bulk solids lines, machine selection changes with the product behaviour of the industry. You can review process requirements more closely on the related industry pages.",
      labels: [
        "Fertilizer and Granulation Plants",
        "Compost and Organic Waste Plants",
        "Mining and Mineral Processing",
        "Chemical and Process Industry",
        "Recycling and Waste Management",
        "Sewage Sludge and Treatment Solutions",
        "Energy and Biogas Systems",
        "Feed, Powder and Bulk Solids Processing",
      ],
    },
    manufacturing: {
      title: "Machinery Manufacturing and Project Engineering Process",
      intro:
        "Project engineering starts with understanding the process requirement and continues with manufacturing, assembly, commissioning and maintenance support. The aim is for each piece of equipment to support not only its own duty but also the process steps before and after it.",
      steps: [
        "Process requirement",
        "Raw material analysis",
        "Capacity and shift target",
        "Preliminary layout and flow diagram",
        "Machine selection",
        "Material and surface standard",
        "Manufacturing and quality control",
        "Assembly plan",
        "Installation and commissioning",
        "Maintenance, overhaul and spare parts",
      ],
    },
    quote: {
      title: "Information Needed for a Technical Quotation",
      text:
        "When preparing a technical quotation, process data matters as much as the machine name. Once product and site information is shared, capacity, material standard, motor power, automation scope and equipment integration can be defined more accurately.",
      primary: "Request a Technical Quote",
      whatsapp: "Chat on WhatsApp",
      checklist: [
        "Product name, particle size, moisture content and density",
        "Hourly capacity, shift pattern and target product quality",
        "Temperature, abrasiveness, stickiness and corrosion risk",
        "Existing site dimensions, level differences and connection points",
        "Automation, weighing, dust control and packaging expectations",
        "Existing project, layout or sample information, if available",
      ],
    },
    articles: {
      before: "For process calculations and technical guidance specific to your project, you can reach our",
      linkLabel: "Engineering Team",
      after: "directly.",
    },
    related: {
      title: "Related Pages and Project Links",
      labels: ["Engineering and Manufacturing Services", "Turnkey Plant Solutions", "Compost Plant Solutions", "Industries", "About Pro Makina", "Contact"],
    },
    faq: {
      title: "Frequently Asked Questions About Industrial Machinery and Process Equipment",
      intro:
        "We have summarised the questions we are asked most often during selection, integration and quotation below. For more technical information, share your project data and talk to our engineering team.",
      items: [
        {
          question: "Can industrial machinery be selected on capacity alone?",
          answer:
            "No. Capacity is an important starting value, but it is not enough on its own. The product's moisture content, particle size, density, flowability, abrasiveness, temperature requirement, operating time and plant layout must be assessed at the same time. Two processes with the same capacity may need a different drum, conveyor, screen or dosing system because of different raw material behaviour. For the right selection, the sample, operating scenario, maintenance access and target product quality should also be read together.",
        },
        {
          question: "Does Pro Makina build standard machines or custom machinery?",
          answer:
            "Depending on the process requirement, both standardised equipment groups and project-specific machinery can be considered. The design is finalised according to product properties, capacity target, site dimensions, maintenance access, connection points and automation expectations. The aim is not just to produce a single machine but to make the equipment work at the right point and with the right duty within the whole line. Sizing, material selection and auxiliary equipment connections are therefore handled together with the project data.",
        },
        {
          question: "What information is needed to select a rotary dryer?",
          answer:
            "A rotary dryer requires inlet and outlet moisture, product density, particle size, target capacity, temperature limit, fuel or energy preference, the product's sticking behaviour and dust potential. It is also important that the fan, cyclone, filter, feeding and discharge equipment are selected to match the drum. For this reason, drying equipment is usually treated not on its own but as a thermal process line. Site layout, stack connection and emission control expectations should also be shared in the first assessment.",
        },
        {
          question: "How are conveyors, screw conveyors and elevators selected?",
          answer:
            "Conveying equipment is selected according to the material's flow behaviour, density, particle size, moisture, distance, inclination, level difference and the required feeding accuracy. Belt conveyors stand out for long and horizontal transfers, screw conveyors for controlled feeding and elevators for vertical transport. Dust generation, cleaning requirements and maintenance access are also decisive. Spillage risk, speed control, the need for an enclosed casing and the feed tolerance of the next equipment must also be considered.",
        },
        {
          question: "In which processes are crushers and shredders used?",
          answer:
            "Crushers and shredders are used to break up lumpy products, reduce raw material size, prepare organic waste for the process and provide more uniform feed ahead of screening. Different blade, hammer or jaw designs may be preferred in fertilizer, compost, recycling, mining and bulk solids processes. The selection depends on product hardness and the target output size. Feed continuity, foreign material risk and maintenance intervals also influence the choice of the right model.",
        },
        {
          question: "Can a dust collection system be added to a machinery line later?",
          answer:
            "In some lines a dust collection system can be added later; however, the best approach is to identify dust sources at the start of the project. Suction points, duct diameters, fan air flow and cyclone or filter selection should be designed together at drying, crushing, screening, packaging and transfer points. This makes both the working environment and process efficiency more controlled. If it is added to an existing line, pressure losses, available space and maintenance access must be checked separately.",
        },
        {
          question: "What should be considered when selecting a packaging and filling system?",
          answer:
            "In packaging and filling systems, product form, target packaging type, weighing accuracy, capacity, dust generation, operator intervention and automation level are assessed together. Powder, granular and liquid products have different requirements. Big bag, open-mouth bagging, liquid filling or bottling lines should be engineered according to product flow and dispatch format. Outlet conveyors, palletising, labelling and quality control steps should also be included in the final line design. The dispatch arrangement is assessed within this scope as well.",
        },
        {
          question: "In which types of production are dosing systems critical?",
          answer:
            "Dosing systems are critical in recipe-based production, in processes where additive ratios must be managed accurately and in lines where a continuous feed balance must be maintained. Micro or macro dosing may be preferred in granular fertilizer, organomineral fertilizer, chemical blend, powder product and bulk solids processes. Weighing, speed control and automation integration are decisive in the selection. Product flowability, bunker outlet geometry and the level of operator intervention must also be considered for stable dosing. A calibration plan is therefore important as well.",
        },
        {
          question: "Can a machine be integrated into an existing plant?",
          answer:
            "Yes, new machinery or equipment can be integrated into existing plants. This requires reviewing the existing line capacity, feed and discharge levels, electrical and automation infrastructure, maintenance areas, supporting structures and process bottlenecks. The aim is for the new equipment not only to fit mechanically but to deliver real benefit across the whole process flow. In revision projects, downtime, connection details, a safe assembly sequence, site safety and communication with the existing automation should also be planned.",
        },
        {
          question: "What information should I share to receive a technical quotation?",
          answer:
            "For a technical quotation, share the product properties, capacity target, moisture and particle size, operating time, site dimensions, expected process flow and any existing drawings or photos. If sample or product analysis information is available, the selection can be made more reliably. With this data, the machine type, material standard, motor power, automation scope and integration needs become clear. The target delivery date, packaging format and any list of existing equipment also speed up the quotation scope.",
        },
      ],
    },
  },
  ru: {
    meta: {
      title: "Промышленное оборудование и технологические машины",
      description:
        "Производство промышленного оборудования: сушильные барабаны, конвейеры, дробилки, реакторы, грохоты, силосы, пылеулавливание и дозирование.",
    },
    ogImageAlt: "Промышленное и технологическое оборудование Pro Makina",
    hero: {
      eyebrow: "ТЕХНОЛОГИЧЕСКИЕ МАШИНЫ И ОБОРУДОВАНИЕ",
      title: "Промышленное оборудование и технологические машины",
      description:
        "Проектируем, изготавливаем и встраиваем в производственные линии машины и оборудование под производительность и свойства продукта для сушки, транспортирования, дробления, грохочения, хранения, дозирования, смешивания и подготовки продукта.",
    },
    cardButton: "Смотреть категорию",
    cardLabels: { categoryAria: "Перейти в категорию «{title}»", allAria: "Смотреть всю категорию «{title}»" },
    cards: {
      "tambur-sistemleri": {
        description:
          "Барабанные системы для сушки, охлаждения, грануляции, покрытия и компостирования проектируются под влажность, крупность, температуру и время пребывания продукта.",
        alt: "Промышленные барабанные системы сушки и грануляции",
      },
      "tasima-ekipmanlari": {
        description:
          "Ленточные, шнековые и цепные конвейеры и элеваторы обеспечивают контролируемое, безопасное и непрерывное перемещение сыпучих, порошковых и гранулированных материалов по предприятию.",
        alt: "Ленточное, цепное и шнековое транспортное оборудование",
      },
      "kiricilar-ve-parcalayicilar": {
        description:
          "Дробилки и шредеры уменьшают крупность сырья, разбивают комья, обеспечивают равномерную подачу перед процессом и помогают эффективной работе последующего оборудования.",
        alt: "Промышленные дробилки и шредеры",
      },
      "reaktorler-ve-tanklar": {
        description:
          "Реакторы и технологические ёмкости проектируются с учётом свойств материалов для жидких удобрений, химических процессов, смешивания, растворения, хранения и реакций.",
        alt: "Нержавеющие реакторы и технологические ёмкости",
      },
      "eleme-ve-siniflandirma-sistemleri": {
        description:
          "Системы грохочения и классификации разделяют продукт по крупности, управляют потоками ретура, выделяют нужную фракцию и сохраняют качество готового продукта.",
        alt: "Системы грохочения и классификации продукта",
      },
      "toz-toplama-sistemleri": {
        description:
          "Циклоны, импульсные рукавные фильтры, вентиляторы и воздуховоды проектируются для улавливания пыли на линиях сушки, дробления, грохочения и транспорта и управления технологическим воздухом.",
        alt: "Циклоны и промышленные системы пылеулавливания",
      },
      "paketleme-ve-dolum-sistemleri": {
        description:
          "Системы упаковки и фасовки обеспечивают контролируемую, весовую и прослеживаемую отгрузку порошковых, гранулированных и жидких продуктов в мешках, биг-бэгах, бутылках или канистрах.",
        alt: "Автоматическое оборудование упаковки и фасовки",
      },
      "depolama-ve-besleme-sistemleri": {
        description:
          "Силосы, бункеры, питающие воронки и оборудование контролируемой выгрузки обеспечивают равномерную подачу сырья в процесс, сглаживают колебания производительности и непрерывность линии.",
        alt: "Силосы, бункеры и системы контролируемой подачи",
      },
      "yardimci-ekipmanlar-ve-akis-sistemleri": {
        description:
          "Клапаны, шлюзовые затворы, распределители, воздуховоды и соединительное оборудование управляют и направляют поток между основными машинами и делают работу предприятия более сбалансированной.",
        alt: "Клапаны, распределители и вспомогательное оборудование потока",
      },
      "dozajlama-sistemleri": {
        description:
          "Системы микро- и макродозирования разрабатываются для точного соблюдения соотношений сырья в рецептурном производстве, весовой подачи и повторяемости процесса.",
        alt: "Системы микро- и макродозирования",
      },
    },
    itemListName: "Категории промышленного и технологического оборудования",
    selection: {
      title: "Как выбрать промышленное оборудование",
      before:
        "Правильную машину нельзя выбрать только по часовой производительности. Двум линиям одинаковой производительности могут понадобиться совершенно разные комбинации оборудования из-за влажности, крупности, плотности, термочувствительности, абразивности, липкости и сыпучести продукта. Поэтому первый шаг — определить условия поступления сырья в процесс и требуемое качество на выходе. Время пребывания и расход воздуха в сушильном барабане, угол наклона и риск просыпания на конвейере, требуемая крупность после дробилки, фракционный диапазон на грохоте, риск сводообразования в силосе и точность взвешивания в системе дозирования оцениваются вместе. Компоновка площадки, доступ для обслуживания, уровень автоматизации, энергетическая инфраструктура, пылеподавление и точки подключения к существующей линии также являются критическими критериями. Pro Makina рассматривает эти данные с позиций",
      linkLabel: "технологического проектирования и инжиниринга",
      after:
        "и стремится обеспечить непрерывность работы всего предприятия, а не только производительность отдельной машины. Так достигается более сбалансированное решение между проектной производительностью и реальными условиями эксплуатации на площадке.",
    },
    flows: {
      title: "От отдельной машины к интегрированной технологической линии",
      intro:
        "Оборудование, как правило, работает правильно только вместе с питающим оборудованием перед ним и отводящим оборудованием после него. Поэтому изготовление машин должно рассматривать приёмку сырья, транспорт, сушку, классификацию, хранение, дозирование и упаковку в едином технологическом потоке.",
      items: [
        {
          title: "Линия сушки и термической обработки",
          description:
            "Для продуктов с высокой влажностью энергетический баланс, расход воздуха, пылеподавление и влажность продукта на выходе оцениваются в одном проекте.",
          steps: ["Подача", "Сушильный барабан", "Циклон", "Вентилятор", "Фильтр", "Грохочение", "Хранение"],
        },
        {
          title: "Линия производства гранулированных удобрений",
          description:
            "Барабаны и транспортное оборудование подбираются с учётом рецептуры, влажности, доли ретура и качества готовых гранул.",
          steps: ["Дозирование", "Смешивание", "Грануляция", "Сушка", "Охлаждение", "Грохочение", "Покрытие", "Упаковка"],
        },
        {
          title: "Линия компоста и органических отходов",
          description:
            "От приёмки отходов до подготовки продукта измельчение, смешивание, барабан, грохочение и контроль запахов планируются вместе.",
          steps: ["Приёмка отходов", "Измельчение", "Смешивание", "Дозревание", "Сушка", "Грохочение", "Подготовка продукта"],
        },
        {
          title: "Линия перегрузки сыпучих материалов",
          description:
            "Для непрерывности линии объём бункера, тип конвейера, высота элеватора, выгрузка силоса и точность дозирования рассчитываются вместе.",
          steps: ["Бункер", "Шнек", "Ленточный конвейер", "Элеватор", "Силос", "Дозирование"],
        },
      ],
    },
    sectors: {
      title: "Основные отрасли, для которых мы производим оборудование",
      intro:
        "На линиях удобрений, компоста, горнодобычи, химии, отходов, биогаза и сыпучих материалов выбор машин зависит от поведения продукта в отрасли. Подробнее технологические требования описаны на страницах отраслей.",
      labels: [
        "Заводы удобрений и грануляции",
        "Предприятия компоста и органических отходов",
        "Горное дело и переработка минералов",
        "Химическая и перерабатывающая промышленность",
        "Переработка и обращение с отходами",
        "Осадки сточных вод и очистка",
        "Энергетика и биогаз",
        "Переработка кормов, порошков и сыпучих материалов",
      ],
    },
    manufacturing: {
      title: "Процесс изготовления и проектирования оборудования",
      intro:
        "Проектирование начинается с понимания технологической задачи и продолжается изготовлением, монтажом, пусконаладкой и сервисной поддержкой. Цель — чтобы каждая единица оборудования поддерживала не только свою функцию, но и предыдущие и последующие этапы процесса.",
      steps: [
        "Технологическая задача",
        "Анализ сырья",
        "Производительность и сменность",
        "Предварительная компоновка и схема",
        "Выбор машин",
        "Стандарт материалов и поверхностей",
        "Изготовление и контроль качества",
        "План монтажа",
        "Монтаж и пусконаладка",
        "Обслуживание, ремонт и запчасти",
      ],
    },
    quote: {
      title: "Данные для технического предложения",
      text:
        "При подготовке технического предложения технологические данные важны не меньше названия машины. Когда известны данные о продукте и площадке, производительность, стандарт материалов, мощность привода, объём автоматизации и интеграция оборудования определяются точнее.",
      primary: "Запросить техническое предложение",
      whatsapp: "Написать в WhatsApp",
      checklist: [
        "Наименование продукта, крупность, влажность и плотность",
        "Часовая производительность, сменность и требуемое качество продукта",
        "Температура, абразивность, липкость и риск коррозии",
        "Размеры площадки, перепады высот и точки подключения",
        "Ожидания по автоматизации, взвешиванию, пылеподавлению и упаковке",
        "Имеющийся проект, компоновка или данные об образце, если есть",
      ],
    },
    articles: {
      before: "По технологическим расчётам и техническим вопросам вашего проекта вы можете напрямую обратиться к",
      linkLabel: "нашей инженерной команде",
      after: ".",
    },
    related: {
      title: "Связанные страницы и проектные ссылки",
      labels: ["Инжиниринг и изготовление", "Решения «под ключ»", "Компостные заводы", "Отрасли", "О компании Pro Makina", "Контакты"],
    },
    faq: {
      title: "Частые вопросы о промышленном и технологическом оборудовании",
      intro:
        "Ниже собраны вопросы, которые нам чаще всего задают при выборе, интеграции и подготовке предложения. Для более технической информации поделитесь данными проекта и обсудите их с нашими инженерами.",
      items: [
        {
          question: "Можно ли выбирать промышленное оборудование только по производительности?",
          answer:
            "Нет. Производительность — важная исходная величина, но её недостаточно. Одновременно нужно оценивать влажность продукта, крупность, плотность, сыпучесть, абразивность, температурные требования, время работы и компоновку предприятия. Двум процессам одинаковой производительности из-за разного поведения сырья могут потребоваться разные барабан, конвейер, грохот или система дозирования. Для правильного выбора также учитываются образец, сценарий эксплуатации, доступ для обслуживания и требуемое качество продукта.",
        },
        {
          question: "Pro Makina выпускает серийные машины или изготавливает оборудование по проекту?",
          answer:
            "В зависимости от задачи рассматриваются как стандартизированные группы оборудования, так и машины, изготавливаемые по проекту. Конструкция определяется свойствами продукта, требуемой производительностью, размерами площадки, доступом для обслуживания, точками подключения и требованиями к автоматизации. Цель — не просто изготовить одну машину, а обеспечить её работу в нужной точке и с нужной функцией во всей линии. Поэтому расчёт размеров, выбор материалов и подключение вспомогательного оборудования выполняются вместе с данными проекта.",
        },
        {
          question: "Какие данные нужны для выбора сушильного барабана?",
          answer:
            "Для сушильного барабана нужны входная и выходная влажность, плотность продукта, крупность, требуемая производительность, температурный предел, предпочтение по топливу или энергии, склонность продукта к налипанию и пылеобразованию. Важно также подобрать вентилятор, циклон, фильтр, питающее и разгрузочное оборудование в соответствии с барабаном. Поэтому сушильное оборудование обычно рассматривается не отдельно, а как линия термической обработки. Компоновку площадки, подключение к дымовой трубе и требования к выбросам также следует сообщить на этапе первой оценки.",
        },
        {
          question: "Как выбирают конвейеры, шнеки и элеваторы?",
          answer:
            "Транспортное оборудование выбирают по сыпучести материала, плотности, крупности, влажности, расстоянию, углу наклона, перепаду высот и требуемой точности подачи. Ленточные конвейеры выгодны для длинных и горизонтальных перегрузок, шнеки — для контролируемой подачи, элеваторы — для вертикального транспорта. Пылеобразование, требования к очистке и доступ для обслуживания также являются определяющими. Кроме того, учитываются риск просыпания, регулирование скорости, необходимость закрытого корпуса и допуск подачи следующего оборудования.",
        },
        {
          question: "В каких процессах применяются дробилки и шредеры?",
          answer:
            "Дробилки и шредеры применяются для разбивания комковатых продуктов, уменьшения крупности сырья, подготовки органических отходов к процессу и более равномерной подачи перед грохочением. В процессах удобрений, компоста, переработки отходов, горнодобычи и сыпучих материалов могут применяться разные конструкции с ножами, молотками или щеками. Выбор зависит от твёрдости продукта и требуемой крупности на выходе. На выбор модели также влияют непрерывность подачи, риск посторонних включений и периодичность обслуживания.",
        },
        {
          question: "Можно ли добавить систему пылеулавливания в линию позже?",
          answer:
            "В некоторых линиях систему пылеулавливания можно добавить позже, однако правильнее определить источники пыли в начале проекта. Точки аспирации, диаметры воздуховодов, расход вентилятора и выбор циклона или фильтра нужно проектировать совместно для участков сушки, дробления, грохочения, упаковки и перегрузки. Так и рабочая среда, и эффективность процесса становятся более контролируемыми. Если система добавляется в существующую линию, отдельно проверяются потери давления, место для размещения и доступ для обслуживания.",
        },
        {
          question: "На что обращать внимание при выборе системы упаковки и фасовки?",
          answer:
            "В системах упаковки и фасовки вместе оцениваются форма продукта, тип тары, точность взвешивания, производительность, пылеобразование, участие оператора и уровень автоматизации. Требования к порошковым, гранулированным и жидким продуктам различаются. Линии фасовки в биг-бэги, открытые мешки, розлива жидкостей или бутилирования проектируются по потоку продукта и формату отгрузки. Отводящий конвейер, паллетирование, этикетирование и контроль качества также включаются в итоговый проект линии. В этом объёме рассматривается и организация отгрузки.",
        },
        {
          question: "В каких производствах системы дозирования критичны?",
          answer:
            "Системы дозирования критичны в рецептурном производстве, в процессах, где нужно точно управлять долей добавок, и на линиях, где требуется сохранять баланс непрерывной подачи. В процессах гранулированных и органоминеральных удобрений, химических смесей, порошковых продуктов и сыпучих материалов может применяться микро- или макродозирование. Определяющими при выборе являются взвешивание, регулирование скорости и интеграция в автоматику. Для стабильного дозирования учитываются также сыпучесть продукта, геометрия выпуска бункера и степень участия оператора. Поэтому важен и план калибровки.",
        },
        {
          question: "Можно ли встроить машину в действующее предприятие?",
          answer:
            "Да, новые машины и оборудование можно встроить в действующие предприятия. Для этого изучаются производительность существующей линии, отметки подачи и выгрузки, электрическая и автоматизационная инфраструктура, зоны обслуживания, несущие конструкции и узкие места процесса. Цель — чтобы новое оборудование не просто механически разместилось, а дало реальный эффект во всём технологическом потоке. При реконструкции планируются также время остановки, узлы подключения, безопасная последовательность монтажа, безопасность на площадке и связь с существующей автоматикой.",
        },
        {
          question: "Какие данные нужно сообщить для получения технического предложения?",
          answer:
            "Для технического предложения сообщите свойства продукта, требуемую производительность, влажность и крупность, время работы, размеры площадки, ожидаемую технологическую схему и имеющиеся чертежи или фотографии. При наличии образца или анализа продукта выбор делается надёжнее. По этим данным определяются тип машины, стандарт материалов, мощность привода, объём автоматизации и потребность в интеграции. Требуемый срок поставки, формат упаковки и перечень имеющегося оборудования также ускоряют подготовку предложения.",
        },
      ],
    },
  },
  ar: {
    meta: {
      title: "الآلات الصناعية ومعدات العمليات",
      description:
        "تصنيع الآلات الصناعية: براميل التجفيف والنواقل والكسارات والمفاعلات والغرابيل والصوامع وأنظمة جمع الغبار والجرعات.",
    },
    ogImageAlt: "الآلات الصناعية ومعدات العمليات من برو ماكينا",
    hero: {
      eyebrow: "آلات ومعدات العمليات",
      title: "الآلات الصناعية ومعدات العمليات",
      description:
        "نصمم ونصنّع وندمج في خطوط المنشآت آلات ومعدات مخصصة حسب السعة وخصائص المنتج لعمليات التجفيف والنقل والتكسير والغربلة والتخزين والجرعات والخلط وتحضير المنتج.",
    },
    cardButton: "عرض الفئة",
    cardLabels: { categoryAria: "استكشف فئة {title}", allAria: "عرض كل منتجات فئة {title}" },
    cards: {
      "tambur-sistemleri": {
        description:
          "تُصمَّم أنظمة البراميل المستخدمة في التجفيف والتبريد والتحبيب والتغليف والتسميد وفق متطلبات رطوبة المنتج وحجم حبيباته ودرجة حرارته وزمن بقائه.",
        alt: "أنظمة براميل التجفيف والتحبيب الصناعية",
      },
      "tasima-ekipmanlari": {
        description:
          "تتيح النواقل الحزامية واللولبية والسلسلية والرافعات نقل المواد الصلبة السائبة والمساحيق والحبيبات داخل المنشأة بشكل متحكم به وآمن ومستمر.",
        alt: "معدات النقل الحزامية والسلسلية واللولبية",
      },
      "kiricilar-ve-parcalayicilar": {
        description:
          "تُستخدم الكسارات وآلات التقطيع لتقليل حجم المواد الخام وتفتيت التكتلات وتوفير تلقيم متجانس قبل العملية ودعم كفاءة عمل المعدات اللاحقة.",
        alt: "أنظمة الكسارات وآلات التقطيع الصناعية",
      },
      "reaktorler-ve-tanklar": {
        description:
          "تُصمَّم المفاعلات وخزانات العمليات وفق خصائص المواد لتطبيقات الأسمدة السائلة والعمليات الكيميائية والخلط والإذابة والتخزين والتفاعل.",
        alt: "مفاعلات وخزانات عمليات من الفولاذ المقاوم للصدأ",
      },
      "eleme-ve-siniflandirma-sistemleri": {
        description:
          "تُستخدم أنظمة الغربلة والتصنيف لفصل المنتج حسب حجم الحبيبات وإدارة تيارات الراجع والحصول على الجزء المطلوب والحفاظ على جودة المنتج النهائي.",
        alt: "أنظمة غربلة وتصنيف المنتج",
      },
      "toz-toplama-sistemleri": {
        description:
          "تُصمَّم السيكلونات ومرشحات النبض النفاث والمراوح والمجاري للتحكم في الغبار الناتج في خطوط التجفيف والتكسير والغربلة والنقل وإدارة هواء العملية.",
        alt: "السيكلونات وأنظمة جمع الغبار الصناعية",
      },
      "paketleme-ve-dolum-sistemleri": {
        description:
          "تتيح أنظمة التعبئة والتغليف شحن المنتجات المسحوقة والحبيبية والسائلة في أكياس أو أكياس كبيرة أو زجاجات أو عبوات بشكل متحكم به وموزون وقابل للتتبع.",
        alt: "معدات التعبئة والتغليف الآلية",
      },
      "depolama-ve-besleme-sistemleri": {
        description:
          "تُستخدم الصوامع والقواديس وأحواض التلقيم ومعدات التفريغ المتحكم به لتلقيم المواد الخام إلى العملية بانتظام وتقليل تذبذب السعة والحفاظ على استمرارية الخط.",
        alt: "أنظمة الصوامع والقواديس والتلقيم المتحكم به",
      },
      "yardimci-ekipmanlar-ve-akis-sistemleri": {
        description:
          "تتحكم الصمامات والصمامات الدوارة والموزعات ومجاري الهواء ومعدات التوصيل في التدفق بين آلات العملية الرئيسية وتوجهه وتجعل تشغيل المنشأة أكثر توازنًا.",
        alt: "الصمامات والموزعات ومعدات التدفق المساعدة",
      },
      "dozajlama-sistemleri": {
        description:
          "تُطوَّر أنظمة الجرعات الدقيقة والكبيرة لإدارة نسب المواد الخام بشكل صحيح في الإنتاج القائم على الوصفات وتوفير تلقيم موزون والحفاظ على تكرارية العملية.",
        alt: "أنظمة الجرعات الدقيقة والكبيرة",
      },
    },
    itemListName: "فئات الآلات الصناعية ومعدات العمليات",
    selection: {
      title: "كيف تُختار الآلات الصناعية؟",
      before:
        "لا يمكن اختيار الآلة المناسبة بالنظر إلى السعة الساعية وحدها؛ فقد يحتاج خطا إنتاج بالسعة نفسها إلى تركيبات معدات مختلفة تمامًا بسبب رطوبة المنتج وحجم حبيباته وكثافته وحساسيته للحرارة وكاشطيته والتصاقه وقابليته للانسياب. لذلك تكون الخطوة الأولى تحديد ظروف دخول المادة الخام إلى العملية وجودة المخرج المستهدفة. ويُقيَّم معًا زمن البقاء ومعدل الهواء في برميل التجفيف، والميل وخطر الانسكاب في الناقل، والحجم المستهدف في الكسارة، ومدى الأجزاء في الغربال، واحتمال التقوس في الصومعة، ودقة الوزن في نظام الجرعات. كما تُعد مخططات الموقع وإمكانية الصيانة ومستوى الأتمتة والبنية التحتية للطاقة والتحكم في الغبار ونقاط الاتصال بالخط القائم معايير حاسمة. وتقرأ برو ماكينا هذه البيانات بنهج",
      linkLabel: "تصميم العمليات والهندسة",
      after:
        "مستهدفةً استمرارية تدفق المنشأة بالكامل بقدر أداء كل آلة على حدة، وبذلك يمكن الوصول إلى حل أكثر توازنًا بين هدف السعة في اليوم الأول وظروف التشغيل الفعلية في الموقع.",
    },
    flows: {
      title: "من آلة واحدة إلى خط عمليات متكامل",
      intro:
        "غالبًا لا تعمل المعدة بشكل صحيح إلا مع معدات التلقيم التي تسبقها ومعدات الاستلام التي تليها، لذا يجب أن يتناول تصنيع الآلات استلام المواد الخام والنقل والتجفيف والتصنيف والتخزين والجرعات والتعبئة ضمن تدفق عملية واحد.",
      items: [
        {
          title: "خط التجفيف والعمليات الحرارية",
          description:
            "في المنتجات عالية الرطوبة يُقيَّم توازن الطاقة ومعدل الهواء والتحكم في الغبار ورطوبة المنتج عند الخروج ضمن التصميم نفسه.",
          steps: ["التلقيم", "برميل التجفيف", "السيكلون", "المروحة", "المرشح", "الغربلة", "التخزين"],
        },
        {
          title: "خط إنتاج الأسمدة الحبيبية",
          description:
            "تُختار البراميل ومعدات النقل بقراءة الوصفة والرطوبة ونسبة الراجع وجودة الحبيبات النهائية معًا.",
          steps: ["الجرعات", "الخلط", "التحبيب", "التجفيف", "التبريد", "الغربلة", "التغليف", "التعبئة"],
        },
        {
          title: "خط السماد العضوي والنفايات العضوية",
          description:
            "من استلام النفايات إلى تحضير المنتج تُخطَّط معدات التقطيع والخلط والبرميل والغربلة والتحكم في الروائح معًا.",
          steps: ["استلام النفايات", "التقطيع", "الخلط", "الإنضاج", "التجفيف", "الغربلة", "تحضير المنتج"],
        },
        {
          title: "خط نقل المواد الصلبة السائبة",
          description:
            "لاستمرارية الخط يُحسب حجم القادوس ونوع الناقل وارتفاع الرافعة ومخرج الصومعة ودقة الجرعات معًا.",
          steps: ["القادوس", "الناقل اللولبي", "الناقل الحزامي", "الرافعة", "الصومعة", "الجرعات"],
        },
      ],
    },
    sectors: {
      title: "أبرز القطاعات التي نصنع لها الآلات والمعدات",
      intro:
        "في خطوط الأسمدة والسماد العضوي والتعدين والكيماويات والنفايات والغاز الحيوي والمواد الصلبة السائبة يتغير اختيار الآلات وفق سلوك المنتج في كل قطاع، ويمكنكم الاطلاع على متطلبات العمليات عن قرب في صفحات القطاعات.",
      labels: [
        "مصانع الأسمدة والتحبيب",
        "منشآت السماد العضوي والنفايات العضوية",
        "التعدين ومعالجة المعادن",
        "الصناعات الكيميائية والتحويلية",
        "إعادة التدوير وإدارة النفايات",
        "حمأة مياه الصرف وحلول المعالجة",
        "أنظمة الطاقة والغاز الحيوي",
        "معالجة الأعلاف والمساحيق والمواد السائبة",
      ],
    },
    manufacturing: {
      title: "عملية تصنيع الآلات وتصميم المشاريع",
      intro:
        "يبدأ تصميم المشروع بفهم احتياج العملية ويستمر بالتصنيع والتركيب والتشغيل ودعم الصيانة، والهدف أن تدعم كل معدة ليس مهمتها فحسب، بل خطوات العملية السابقة واللاحقة أيضًا.",
      steps: [
        "احتياج العملية",
        "تحليل المواد الخام",
        "هدف السعة ونظام الورديات",
        "المخطط الأولي ومخطط التدفق",
        "اختيار الآلات",
        "معايير المواد والأسطح",
        "التصنيع ومراقبة الجودة",
        "خطة التركيب",
        "التركيب والتشغيل",
        "الصيانة والتجديد وقطع الغيار",
      ],
    },
    quote: {
      title: "المعلومات المطلوبة للعرض الفني",
      text:
        "عند إعداد العرض الفني تكون بيانات العملية بأهمية اسم الآلة نفسه، وعند مشاركة معلومات المنتج والموقع تُحدَّد السعة ومعايير المواد وقدرة المحرك ونطاق الأتمتة وتكامل المعدات بدقة أكبر.",
      primary: "اطلب عرضًا فنيًا",
      whatsapp: "تواصل عبر واتساب",
      checklist: [
        "اسم المنتج وحجم الحبيبات ونسبة الرطوبة والكثافة",
        "السعة الساعية ونظام الورديات وجودة المنتج المستهدفة",
        "درجة الحرارة والكاشطية والالتصاق وخطر التآكل",
        "أبعاد الموقع الحالية وفروق المناسيب ونقاط التوصيل",
        "توقعات الأتمتة والوزن والتحكم في الغبار والتعبئة",
        "معلومات المشروع أو المخطط أو العينة المتوفرة إن وجدت",
      ],
    },
    articles: {
      before: "للحسابات الخاصة بعملياتكم والإرشاد الفني لمشروعكم يمكنكم التواصل مباشرة مع",
      linkLabel: "فريقنا الهندسي",
      after: ".",
    },
    related: {
      title: "صفحات ذات صلة وروابط المشاريع",
      labels: ["خدمات الهندسة والتصنيع", "حلول المنشآت المتكاملة", "حلول مصانع السماد العضوي", "القطاعات", "عن برو ماكينا", "اتصل بنا"],
    },
    faq: {
      title: "الأسئلة الشائعة حول الآلات الصناعية ومعدات العمليات",
      intro:
        "لخصنا أدناه أكثر الأسئلة التي تصلنا خلال مراحل الاختيار والتكامل والعرض، وللحصول على معلومات أكثر تفصيلًا يمكنكم مشاركة بيانات مشروعكم والتحدث مع فريقنا الهندسي.",
      items: [
        {
          question: "هل يمكن اختيار الآلات الصناعية بناءً على السعة وحدها؟",
          answer:
            "لا. السعة قيمة انطلاق مهمة لكنها لا تكفي وحدها؛ إذ يجب تقييم رطوبة المنتج وحجم حبيباته وكثافته وقابليته للانسياب وكاشطيته ومتطلبات الحرارة وزمن التشغيل ومخطط المنشأة في الوقت نفسه. فقد تحتاج عمليتان بالسعة نفسها إلى برميل أو ناقل أو غربال أو نظام جرعات مختلف بسبب اختلاف سلوك المادة الخام. ولاختيار صحيح يجب أيضًا قراءة العينة وسيناريو التشغيل وإمكانية الصيانة وجودة المنتج المستهدفة معًا.",
        },
        {
          question: "هل تصنع برو ماكينا آلات قياسية أم آلات حسب الطلب؟",
          answer:
            "حسب احتياج العملية يمكن النظر في مجموعات معدات موحدة وفي آلات مصنعة خصيصًا للمشروع، ويتحدد التصميم وفق خصائص المنتج وهدف السعة وأبعاد الموقع وإمكانية الصيانة ونقاط التوصيل وتوقعات الأتمتة. والهدف ليس إنتاج آلة واحدة فقط، بل ضمان عمل المعدة في النقطة الصحيحة وبالمهمة الصحيحة ضمن الخط بأكمله، لذلك تُعالَج المقاسات واختيار المواد ووصلات المعدات المساعدة مع بيانات المشروع.",
        },
        {
          question: "ما المعلومات اللازمة لاختيار برميل التجفيف؟",
          answer:
            "يتطلب برميل التجفيف معرفة رطوبة الدخول والخروج وكثافة المنتج وحجم حبيباته والسعة المستهدفة وحد الحرارة وتفضيل الوقود أو الطاقة وسلوك التصاق المنتج وقابليته لتكوين الغبار. ومن المهم أيضًا اختيار المروحة والسيكلون والمرشح ومعدات التلقيم والتفريغ بما يتوافق مع البرميل، لذلك تُعالَج معدات التجفيف عادةً كخط عمليات حرارية لا كآلة منفردة. كما يجب مشاركة مخطط الموقع ووصلة المدخنة وتوقعات التحكم في الانبعاثات في التقييم الأول.",
        },
        {
          question: "كيف تُختار النواقل الحزامية واللولبية والرافعات؟",
          answer:
            "تُختار معدات النقل وفق سلوك انسياب المادة وكثافتها وحجم حبيباتها ورطوبتها والمسافة والميل وفرق المنسوب ودقة التلقيم المطلوبة. وتبرز النواقل الحزامية في النقل الطويل والأفقي، والنواقل اللولبية في التلقيم المتحكم به، والرافعات في النقل الرأسي. كما يُعد تكوّن الغبار ومتطلبات التنظيف وإمكانية الصيانة عوامل حاسمة، إلى جانب خطر الانسكاب والتحكم في السرعة والحاجة إلى جسم مغلق وتفاوت التلقيم المسموح للمعدة التالية.",
        },
        {
          question: "في أي عمليات تُستخدم الكسارات وآلات التقطيع؟",
          answer:
            "تُستخدم الكسارات وآلات التقطيع لتفتيت المنتجات المتكتلة وتقليل حجم المواد الخام وتحضير النفايات العضوية للعملية وتوفير تلقيم أكثر توازنًا قبل الغربلة. وقد تُفضَّل تصاميم مختلفة بالسكاكين أو المطارق أو الفكوك في عمليات الأسمدة والسماد العضوي وإعادة التدوير والتعدين والمواد السائبة. ويرتبط الاختيار بصلابة المنتج وحجم المخرج المستهدف، كما تؤثر استمرارية التلقيم وخطر المواد الغريبة وفترات الصيانة في تحديد الطراز المناسب.",
        },
        {
          question: "هل يمكن إضافة نظام جمع الغبار إلى خط الآلات لاحقًا؟",
          answer:
            "يمكن في بعض الخطوط إضافة نظام جمع الغبار لاحقًا، لكن النهج الأصح هو تحديد مصادر الغبار في بداية المشروع؛ إذ يجب تصميم نقاط الشفط وأقطار المجاري ومعدل هواء المروحة واختيار السيكلون أو المرشح معًا عند نقاط التجفيف والتكسير والغربلة والتعبئة والنقل. وبذلك تصبح بيئة العمل وكفاءة العملية أكثر تحكمًا. وإذا أُضيف النظام إلى خط قائم فيجب التحقق بشكل منفصل من فواقد الضغط ومساحة التركيب وإمكانية الصيانة.",
        },
        {
          question: "ما الذي يجب مراعاته عند اختيار نظام التعبئة والتغليف؟",
          answer:
            "تُقيَّم في أنظمة التعبئة والتغليف معًا هيئة المنتج ونوع العبوة المستهدف ودقة الوزن والسعة وتكوّن الغبار وتدخل المشغل ومستوى الأتمتة، إذ تختلف احتياجات المنتجات المسحوقة والحبيبية والسائلة. ويجب تصميم خطوط الأكياس الكبيرة والأكياس المفتوحة وتعبئة السوائل أو الزجاجات وفق تدفق المنتج وصيغة الشحن، مع إدراج ناقل الخروج والتنضيد على المنصات ووضع الملصقات ومراقبة الجودة في التصميم النهائي للخط، ويُقيَّم ترتيب الشحن ضمن هذا النطاق أيضًا.",
        },
        {
          question: "في أي أنواع الإنتاج تكون أنظمة الجرعات حاسمة؟",
          answer:
            "تكون أنظمة الجرعات حاسمة في الإنتاج القائم على الوصفات، وفي العمليات التي يجب فيها إدارة نسب الإضافات بدقة، وفي الخطوط التي يجب فيها الحفاظ على توازن التلقيم المستمر. ويمكن تفضيل الجرعات الدقيقة أو الكبيرة في عمليات الأسمدة الحبيبية والعضوية المعدنية والخلطات الكيميائية والمنتجات المسحوقة والمواد السائبة. ويُعد الوزن والتحكم في السرعة والتكامل مع الأتمتة عوامل حاسمة في الاختيار، كما يجب مراعاة قابلية انسياب المنتج وهندسة مخرج القادوس ومستوى تدخل المشغل لتحقيق جرعات مستقرة، ولذلك تكون خطة المعايرة مهمة أيضًا.",
        },
        {
          question: "هل يمكن دمج آلة في منشأة قائمة؟",
          answer:
            "نعم، يمكن دمج آلات أو معدات جديدة في المنشآت القائمة، ويتطلب ذلك دراسة سعة الخط الحالي ومناسيب التلقيم والتفريغ والبنية الكهربائية والأتمتة ومناطق الصيانة والهياكل الحاملة واختناقات العملية. والهدف ألا تستقر المعدة الجديدة ميكانيكيًا فحسب، بل أن تحقق فائدة حقيقية في تدفق العملية بأكمله. وفي أعمال التجديد يجب أيضًا تخطيط مدة التوقف وتفاصيل التوصيل وتسلسل التركيب الآمن وسلامة الموقع والاتصال بالأتمتة القائمة.",
        },
        {
          question: "ما المعلومات التي يجب مشاركتها للحصول على عرض فني؟",
          answer:
            "للحصول على عرض فني شارك خصائص المنتج وهدف السعة والرطوبة وحجم الحبيبات وزمن التشغيل وأبعاد الموقع وتدفق العملية المتوقع وأي رسومات أو صور متوفرة، وإذا توفرت معلومات عن العينة أو تحليل المنتج يصبح الاختيار أكثر موثوقية. وبهذه البيانات يتضح نوع الآلة ومعايير المواد وقدرة المحرك ونطاق الأتمتة واحتياجات التكامل، كما يسرّع الموعد المستهدف وصيغة التعبئة وقائمة المعدات الحالية إعداد نطاق العرض.",
        },
      ],
    },
  },
};

function productLabel(key: RouteKey, locale: IntlLocale, labelFor: (key: RouteKey) => string) {
  // Sol menülerle aynı mantık: tambur dışı premium şablonlu ürünlerde etiket ürün metninden gelir.
  if (isDrumPageKey(key) && groupOf(key) !== "drumSystems") return getDrumPageTexts(key, locale).breadcrumbLabel;
  return labelFor(key);
}

export function getMachinesOverviewTexts(locale: IntlLocale) {
  return texts[locale];
}

export function buildMachinesOverviewContent(locale: IntlLocale): MachinesOverviewContent {
  const t = texts[locale];
  const labelFor = (key: RouteKey) => (intlRouteLabel(locale, key));
  const keyOf = (trHref: string) => {
    const key = trKeyByPath.get(trHref);
    if (!key) throw new Error(`Makinalar sayfası: ${trHref} için rota anahtarı yok`);
    return key;
  };

  const cards = homeMachineGroupCards.map((card) => {
    const trSlug = card.href.split("/").pop() ?? "";
    const cardText = t.cards[trSlug];
    if (!cardText) throw new Error(`Makinalar sayfası: ${trSlug} kart metni eksik`);
    const categoryKey = keyOf(card.href);
    const title = labelFor(categoryKey);
    return {
      ...card,
      eyebrow: title,
      title,
      description: cardText.description,
      products: card.products.map((product) => {
        const productKey = keyOf(product.href);
        return { label: productLabel(productKey, locale, labelFor), href: pathFor(productKey, locale) };
      }),
      seoNote: undefined,
      buttonLabel: t.cardButton,
      href: pathFor(categoryKey, locale),
      image: card.image,
      alt: cardText.alt,
    };
  });

  return {
    hero: {
      eyebrow: t.hero.eyebrow,
      title: t.hero.title,
      description: t.hero.description,
      breadcrumb: [{ label: labelFor("home"), href: pathFor("home", locale) }, { label: labelFor("machines") }],
      labels: getHeroLabels(locale),
      quoteHref: pathFor("contact", locale),
    },
    cards,
    cardLabels: t.cardLabels,
    selection: { ...t.selection, linkHref: localizeHref("/hizmetler/proses-tasarimi-ve-muhendislik", locale)! },
    flows: {
      title: t.flows.title,
      intro: t.flows.intro,
      items: t.flows.items.map((flow, i) => ({
        title: flow.title,
        description: flow.description,
        steps: flow.steps.map((label, j) => ({ label, href: localizeHref(flowStepHrefs[i][j], locale) })),
      })),
    },
    sectors: {
      title: t.sectors.title,
      intro: t.sectors.intro,
      links: t.sectors.labels.map((label, i) => ({ label, href: localizeHref(sectorHrefs[i], locale)! })),
    },
    manufacturing: {
      title: t.manufacturing.title,
      intro: t.manufacturing.intro,
      steps: t.manufacturing.steps.map((title, i) => ({ title, href: localizeHref(manufacturingStepHrefs[i], locale) })),
    },
    quote: {
      title: t.quote.title,
      text: t.quote.text,
      primary: { label: t.quote.primary, href: pathFor("contact", locale) },
      whatsapp: { label: t.quote.whatsapp, href: "https://wa.me/905320580104" },
      checklist: t.quote.checklist,
    },
    articles: { ...t.articles, href: pathFor("contact", locale) },
    related: {
      title: t.related.title,
      links: t.related.labels.map((label, i) => ({ label, href: pathFor(relatedKeys[i], locale) })),
    },
    faq: t.faq,
  };
}

/** TR sayfasıyla aynı JSON-LD grafiği (Organization, CollectionPage, BreadcrumbList, ItemList, FAQPage). */
export function buildMachinesOverviewSchema(locale: IntlLocale, content: MachinesOverviewContent) {
  const t = texts[locale];
  const url = absoluteUrl(pathFor("machines", locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.promakina.com.tr/#organization",
        name: "Pro Makina",
        url: "https://www.promakina.com.tr",
        logo: "https://www.promakina.com.tr/images/logo.png",
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: t.hero.title,
        description: t.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": "https://www.promakina.com.tr/#website" },
        publisher: { "@id": "https://www.promakina.com.tr/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: content.hero.breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? absoluteUrl(item.href) : url,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#machine-categories`,
        name: t.itemListName,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: content.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: absoluteUrl(card.href),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
