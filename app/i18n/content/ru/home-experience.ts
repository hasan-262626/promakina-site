import type { HomeExperienceContent } from "../types";
import { pathFor } from "../../routes";

const p = (key: Parameters<typeof pathFor>[0]) => pathFor(key, "ru");

export const homeExperience: HomeExperienceContent = {
  hero: {
    ariaLabel: "Главный презентационный блок Pro Makina",
    imageAlt: "Инженерные и машиностроительные решения Pro Makina для промышленных заводов",
    eyebrow: "Инжиниринг процессов",
    titleLines: ["Инженерные и машинные решения", "для промышленных заводов"],
    description:
      "Производство, монтаж и пусконаладка для линий удобрений, компоста, сушки, транспортировки и технологических процессов.",
    primaryLabel: "Обслуживаемые отрасли",
    primaryHref: p("sectors"),
    secondaryLabel: "Машины и оборудование",
    secondaryHref: p("machines"),
  },
  quickAccess: {
    heading: "Отраслевые решения",
    description:
      "Изучите машины и заводские решения для удобрений, компоста, биогаза, минералов, осадка и химических процессов.",
    exploreLabel: "Смотреть отрасль",
    viewAllLabel: "Все отрасли",
    viewAllHref: p("sectors"),
    items: [
      { id: "gubre", title: "Производство удобрений", href: p("fertilizerPlants"), alt: "Технологические и машинные решения для заводов удобрений" },
      { id: "kompost", title: "Компост и органические отходы", href: p("compostPlants"), alt: "Решения по переработке компоста и органических отходов" },
      { id: "biyogaz", title: "Биогаз и энергия", href: p("sectors"), alt: "Решения подачи и процессов для биогазовых и энергетических станций" },
      { id: "maden", title: "Горная промышленность", href: p("mining"), alt: "Дробление, грохочение и сушка для переработки минералов" },
      { id: "camur", title: "Осадок сточных вод", href: p("sludgeDrying"), alt: "Сушка, обезвоживание осадка и подготовка конечного продукта" },
      { id: "kimya", title: "Химическая промышленность", href: p("chemicalProcess"), alt: "Реакторы и ёмкости для химических производств" },
      { id: "geridonusum", title: "Рециклинг и отходы", href: p("recycling"), alt: "Технологические решения рециклинга и управления отходами" },
      { id: "dokme", title: "Сыпучие материалы", href: p("sectors"), alt: "Системы обработки кормов, порошков и сыпучих материалов" },
    ],
  },
  machineGroups: {
    heading: "Машины и оборудование",
    description:
      "От барабанных систем до транспортного оборудования, от дробилок до реакторов и ёмкостей — семейства машин для разных технологических задач в одном месте.",
    cards: [
      {
        eyebrow: "Барабанные системы",
        title: "Барабанные системы",
        products: [
          { label: "Сушильный барабан", href: p("rotaryDryer") },
          { label: "Барабанный гранулятор", href: p("granulatorDrum") },
          { label: "Охладительный барабан", href: p("coolingDrum") },
          { label: "Барабан для покрытия", href: p("coatingDrum") },
          { label: "Компостный барабан", href: p("compostDrum") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("drumSystems"),
        image: "/images/tambur kurutma/tamkurutma21.jpg",
        alt: "Барабанные системы и сушильный барабан",
      },
      {
        eyebrow: "Транспортные системы",
        title: "Транспортные системы",
        products: [
          { label: "Ленточный конвейер", href: p("beltConveyor") },
          { label: "Шнековый конвейер", href: p("screwConveyor") },
          { label: "Цепной конвейер", href: p("chainConveyor") },
          { label: "Ковшовый элеватор", href: p("bucketElevator") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("conveying"),
        image: "/images/konveyor/konvey38.jpg",
        alt: "Конвейеры и транспортное оборудование",
      },
      {
        eyebrow: "Дробилки и шредеры",
        title: "Дробилки и шредеры",
        products: [
          { label: "Молотковые и цепные дробилки", href: p("crushers") },
          { label: "Шредерные системы", href: p("crushers") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("crushers"),
        image: "/images/kirici zincirli/kiricizincir1.jpg",
        alt: "Дробильные и измельчительные системы",
      },
      {
        eyebrow: "Реакторы и ёмкости",
        title: "Реакторы и ёмкости",
        products: [
          { label: "Реакторы с перемешиванием", href: p("reactorsTanks") },
          { label: "Растворные и накопительные ёмкости", href: p("reactorsTanks") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("reactorsTanks"),
        image: "/images/sıvı/sivi11.webp",
        alt: "Реакторы и технологические ёмкости",
      },
      {
        eyebrow: "Грохоты",
        title: "Грохоты",
        products: [
          { label: "Барабанные грохоты", href: p("screeningSystems") },
          { label: "Вибрационные грохоты", href: p("screeningSystems") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("screeningSystems"),
        image: "/images/elek/elek1.png",
        alt: "Системы грохочения и классификации",
      },
      {
        eyebrow: "Пылеулавливание",
        title: "Системы пылеулавливания",
        products: [
          { label: "Циклонный сепаратор", href: p("cyclones") },
          { label: "Рукавные фильтры", href: p("dustCollection") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("dustCollection"),
        image: "/images/siklon/siklon2.jpg",
        alt: "Циклоны и системы пылеулавливания",
      },
      {
        eyebrow: "Упаковка и фасовка",
        title: "Системы упаковки и фасовки",
        products: [
          { label: "Фасовка в открытые мешки", href: p("packagingSystems") },
          { label: "Налив биг-бэгов", href: p("packagingSystems") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("packagingSystems"),
        image: "/images/paketleme/paket1.jpg",
        alt: "Системы упаковки и фасовки",
      },
      {
        eyebrow: "Силосы и подача",
        title: "Силосы, бункеры и подача",
        products: [
          { label: "Бункеры и воронки", href: p("bunkersHoppers") },
          { label: "Силосные системы", href: p("storageSystems") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("storageSystems"),
        image: "/images/bunker/bunker2.jpg",
        alt: "Бункерные системы и системы подачи",
      },
      {
        eyebrow: "Системы дозирования",
        title: "Системы дозирования",
        products: [
          { label: "Ленточный весовой дозатор", href: p("dosingBeltScale") },
          { label: "Микро- и макродозирование", href: p("dosingSystems") },
        ],
        buttonLabel: "Смотреть категорию",
        href: p("dosingSystems"),
        image: "/images/dozaj konveyor/dozaj1.jpg",
        alt: "Системы дозирования",
      },
    ],
  },
  plantSolutions: {
    heading: "Решения по переработке отходов и заводам",
    description:
      "Изучите наши коммерческие страницы по компостированию, переработке животноводческих и сельскохозяйственных отходов, сушке осадка и подготовке RDF.",
    browseLabel: "Все заводские решения",
    browseHref: p("plantSolutions"),
    cardCtaLabel: "Подробнее о решении",
    cards: [
      {
        id: "compost",
        title: "Компостные заводы",
        href: p("compostPlantSolution"),
        image: "/images/kompost/kompost1.jpg",
        alt: "Компостный завод и оборудование для переработки органических отходов",
        description:
          "Заводы под ключ для смешанных органических, навозных и сельскохозяйственных потоков отходов.",
      },
      {
        id: "organic",
        title: "Заводы для животноводческих и сельхозотходов",
        href: p("animalWasteCompostPlant"),
        image: "/images/01-genel/evselkompost1.jpg",
        alt: "Линия компостирования животноводческих и сельскохозяйственных отходов",
        description:
          "Подготовка, смешивание, интенсивное компостирование и доводка для навоза и волокнистых растительных отходов.",
      },
      {
        id: "sludge",
        title: "Заводы сушки осадка",
        href: p("sludgeDryingPlantSolution"),
        image: "/images/atik su camuru/sucamuru1.jpg",
        alt: "Барабанная сушка осадка и тепловой воздушный контур",
        description:
          "Термические линии сушки обезвоженного муниципального и промышленного осадка.",
      },
      {
        id: "rdf",
        title: "Линии подготовки RDF",
        href: p("rdfPlantSolution"),
        image: "/images/01-genel/geridonusum1.jpg",
        alt: "Линия подготовки RDF с шредером и транспортом",
        description:
          "Линии подготовки альтернативного топлива из коммунальных и промышленных отходов.",
      },
    ],
  },
  services: {
    heading: "НАШИ УСЛУГИ",
    description:
      "Pro Makina предлагает проектные инженерные и практические решения для производств удобрений и грануляции, компоста и органических отходов, рециклинга, осадка, биогаза, горной отрасли и обработки сыпучих материалов. От анализа потребностей до проектирования процесса, производства машин, монтажа и пусконаладки — все этапы планируются из одного центра.",
    tags: [
      { label: "Заводы удобрений", href: p("fertilizerPlants") },
      { label: "Компостные заводы", href: p("compostPlants") },
      { label: "Сушка осадка", href: p("sludgeDrying") },
      { label: "Рециклинг и отходы", href: p("recycling") },
      { label: "Горная промышленность", href: p("mining") },
      { label: "Химическая промышленность", href: p("chemicalProcess") },
    ],
    detailLabel: "Подробнее",
    cards: [
      {
        title: "Заводы под ключ",
        description:
          "Планируем весь путь от разработки концепции до монтажа на площадке и строим инфраструктуру завода из одних рук.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "Услуга строительства заводов под ключ",
      },
      {
        title: "Проектирование процессов",
        description:
          "Технологическая схема, подбор оборудования и планирование инфраструктуры по производительности, продукту и потокам сырья.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/01-genel/proje2.jpg",
        imageAlt: "Услуга проектирования процессов и инжиниринга",
      },
      {
        title: "Производство машин",
        description:
          "Изготавливаем оборудование тяжёлого режима: барабанные системы, конвейеры, дробилки, реакторы, ёмкости, грохоты и пылеулавливание.",
        buttonLabel: "Подробнее",
        href: p("machines"),
        image: "/images/01-genel/fabrika1.jpg",
        imageAlt: "Услуга производства промышленных машин",
      },
      {
        title: "Монтаж и пусконаладка",
        description:
          "Контролируемо управляем сборкой на площадке, механо-электрической интеграцией, испытаниями и первым пуском производства.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "Услуга монтажа и пусконаладки",
      },
      {
        title: "Модернизация и реконструкция",
        description:
          "Разрабатываем проекты реконструкции действующих заводов по производительности, эффективности, качеству продукта и безопасности.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "Услуга модернизации и реконструкции",
      },
      {
        title: "Технический консалтинг",
        description:
          "Консультируем по планированию инвестиций, развитию продукта, росту мощности, подбору оборудования и оптимизации процессов.",
        buttonLabel: "Подробнее",
        href: p("contact"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "Промышленный завод и оборудование — технический консалтинг",
      },
      {
        title: "Обслуживание и сервис",
        description:
          "Сервисная поддержка и обслуживание для продления ресурса оборудования и сокращения внеплановых простоев.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/bakim/bakim1.webp",
        imageAlt: "Обслуживание, сервис и техническая поддержка",
      },
      {
        title: "Управление проектами",
        description:
          "Управляем производством, снабжением, работами на площадке, графиком и координацией команд для упорядоченного хода проекта.",
        buttonLabel: "Подробнее",
        href: p("services"),
        image: "/images/01-genel/sahakontrol1.webp",
        imageAlt: "Управление проектами и координация на площадке",
      },
    ],
  },
  library: {
    heading: "Техническая библиотека",
    description:
      "Изучите технические материалы о процессах, оборудовании и строительстве заводов, подготовленные нашей инженерной командой.",
    filters: [
      { label: "Всё оборудование", href: p("machines") },
      { label: "Барабанные системы", href: p("drumSystems") },
      { label: "Транспортные системы", href: p("conveying") },
      { label: "Отрасли", href: p("sectors") },
      { label: "Услуги", href: p("services") },
      { label: "О компании", href: p("about") },
    ],
    cards: [
      {
        category: "Системы сушки",
        title: "Промышленный сушильный барабан",
        description:
          "Как работает сушильный барабан, какие материалы сушит и какие проектные данные определяют его расчёт.",
        href: p("rotaryDryer"),
      },
      {
        category: "Заводы удобрений",
        title: "Барабанный гранулятор",
        description:
          "Грануляция окатыванием: дозирование связующего, управление временем пребывания и контур ретура.",
        href: p("granulatorDrum"),
      },
      {
        category: "Компост и отходы",
        title: "Технология компостного барабана",
        description:
          "Управляемое аэробное компостирование в закрытом вращающемся реакторе — быстрее и с контролем запаха.",
        href: p("compostDrum"),
      },
      {
        category: "Транспортировка",
        title: "Расчёт шнекового конвейера",
        description:
          "Закрытый транспорт и дозирование порошков и гранул: диаметр, шаг, скорость и степень заполнения.",
        href: p("screwConveyor"),
      },
      {
        category: "Заводы под ключ",
        title: "Заводы по производству удобрений",
        description:
          "Контур грануляции как один процесс: дозирование, грануляция, сушка, охлаждение, грохочение и фасовка.",
        href: p("fertilizerPlants"),
      },
      {
        category: "Осадок сточных вод",
        title: "Системы сушки осадка",
        description:
          "Линии термической сушки: меньше массы, обеззараженный продукт и открытые пути утилизации.",
        href: p("sludgeDrying"),
      },
    ],
    cardCtaLabel: "Читать далее",
    viewAllLabel: "Всё оборудование и машины",
    viewAllHref: p("machines"),
  },
  quoteBand: {
    title: "Запросите предложение или техническую встречу по вашему проекту",
    text: "Свяжитесь с нами по вопросам компостных заводов, заводов удобрений, машин и оборудования, сушки осадка или технического консалтинга.",
    contactLabel: "Перейти к контактам",
    contactHref: p("contact"),
    callLabel: "Позвонить",
    whatsappLabel: "WhatsApp",
    whatsappMessage: "Здравствуйте! Пишу с сайта Pro Makina. Прошу организовать техническую встречу.",
  },
  social: {
    tag: "ТЕХНИЧЕСКИЙ КОНТЕНТ И МЕДИА",
    title: "Контент-слой, делающий техническую экспертизу видимой в соцсетях",
    text: "В наших каналах LinkedIn, YouTube и Instagram мы регулярно публикуем материалы по инжинирингу процессов, производству машин, полевым применениям и техническим руководствам — медиапоток, формирующий доверие инвесторов и технических команд.",
    cardTitles: {
      linkedin: "LinkedIn: технический контент",
      youtube: "YouTube: видео процессов",
      instagram: "Instagram: фото проектов",
    },
    buttonLabels: {
      linkedin: "Открыть LinkedIn",
      youtube: "Открыть YouTube",
      instagram: "Открыть Instagram",
    },
    cardDescriptions: {
      linkedin: "Технические статьи, взгляд инженеров-технологов и корпоративные публикации о проектах.",
      youtube: "Видео процессов, сценарии работы машин и обзоры полевых применений.",
      instagram: "Визуальные материалы проектов, детали производства и кадры с площадок.",
    },
  },
};
