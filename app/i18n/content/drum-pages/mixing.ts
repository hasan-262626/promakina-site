import type { DrumPageConfig } from "./types";

// Karıştırma tamburu: bileşenlerin homojen karıştırılması. Granülasyon, kurutma veya kaplama işlevi yoktur.
export const mixingDrumPage: DrumPageConfig = {
  key: "mixingDrum",
  trSlug: "karistirma-tamburu",
  mainImage: "/images/tambur granulator/tamgranulator4.png",
  applications: [
    { image: "/images/tambur-uygulamalari/harman-gubre.webp", link: "fertilizerPlants" },
    { image: "/images/tambur-uygulamalari/potasyum-magnezyum-sulfat.webp", link: "chemicalProcess" },
    { image: "/images/01-genel/yem1.jpg", link: "dosingSystems" },
  ],
  sectors: ["fertilizerPlants", "chemicalProcess", "mining"],
  resources: ["dosingBeltScale", "bunkersHoppers", "granulatorDrum", "coatingDrum"],
  machines: ["dosingSystems", "conveying", "screeningSystems", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Karıştırma Tamburu İmalatı | Döner Karıştırıcı | PRO MAKİNA",
        description:
          "Toz, granül ve nemli dökme ürünleri homojen karıştıran döner karıştırma tamburu. Harman gübre, mineral ve kimyasal karışımlar için sürekli veya partili çözümler.",
      },
      breadcrumbLabel: "Karıştırma Tamburu",
      h1: "Karıştırma Tamburu – Dökme Ürünler için Döner Tamburlu Karıştırıcı",
      productCategory: "Döner Tamburlu Karıştırıcı",
      overview: {
        imageAlt: "Döner tambur gövdesi, taşıyıcı makaralar ve tahrik grubu",
        tagline: "Döner Tamburlu Karıştırıcı",
        keyFacts: [
          { label: "Görev", value: "Bileşenleri homojen karıştırmak" },
          { label: "Ürün", value: "Toz, granül ve nemli dökme malzeme" },
          { label: "Çalışma", value: "Sürekli veya partili" },
          { label: "Kapsam", value: "Tambur, besleme ve boşaltma bağlantıları" },
        ],
        title: "Ürünü Yormadan Homojen Karışım",
        paragraphs: [
          "Karıştırma tamburu, farklı bileşenlerin tambur içinde devrilerek ve iç yönlendirme elemanlarıyla karıştırılarak homojen bir karışıma getirildiği döner proses ekipmanıdır. Tamburun yavaş ve düzenli hareketi, granül ürünlerde tane yapısını korurken karışım sağlar.",
          "Karışımın kalitesi; bileşenlerin tane boyutu ve yoğunluk farkı, besleme oranlarının doğruluğu, tambur doluluğu, devir ve kalış süresiyle belirlenir. Tane boyutları birbirinden çok farklı bileşenlerde ayrışma (segregasyon) riski tasarımda ayrıca değerlendirilir.",
          "Karıştırma tamburu granül oluşturmaz, ürünü kurutmaz ve kaplamaz; yalnızca karışım üretir. Bu nedenle tambur, bileşenleri doğru oranda besleyen dozaj sistemi ve karışımı bozmadan taşıyan hat sonu ekipmanlarıyla birlikte projelendirilir.",
        ],
        note: "Karışım homojenliği çoğu zaman tamburdan önce, dozajın doğruluğuyla belirlenir. Tamburdan sonra karışımın ayrışmasını önlemek için transfer noktaları ve düşüş yükseklikleri de dikkate alınmalıdır.",
      },
      process: {
        title: "Karıştırma Hattı Proses Akışı",
        intro:
          "Şema, karıştırma tamburunun tipik bir harman hattındaki yerini gösterir. Tambur yalnızca karıştırma yapar; granülasyon, kurutma veya kaplama işlevi yoktur.",
        note: "Partili çalışmada her parti tartılarak tambura alınır ve belirlenen süre sonunda boşaltılır; sürekli çalışmada bileşenler debiye oranlı olarak beslenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Bileşen dozajı", text: "Her bileşen tartımlı olarak ve reçete oranında tambura beslenir." },
          { title: "Devrilme ve karıştırma", text: "Tambur dönüşü ve iç elemanlar bileşenleri birbirine dağıtır." },
          { title: "Kalış süresi kontrolü", text: "Devir, eğim veya parti süresi hedef homojenliğe göre ayarlanır." },
          { title: "Karışım çıkışı", text: "Karışım ayrışmayı sınırlayan transferle paketleme veya prosese aktarılır." },
        ],
        flow: {
          svgTitle: "Karıştırma hattı proses akış şeması",
          svgDesc: "Ürün hattı: bileşen bunkerleri ve dozajlama, karıştırma tamburu, transfer ve paketleme.",
          mainLane: "ÜRÜN HATTI",
          before: [
            { title: "Bunkerler", sub: "Bileşen stoku" },
            { title: "Dozajlama", sub: "Tartımlı besleme" },
          ],
          drum: { title: "KARIŞTIRMA TAMBURU", sub: "devrilme · homojenleştirme" },
          after: [{ title: "Paketleme / proses", sub: "Kontrollü transfer" }],
        },
      },
      applications: {
        title: "Karıştırma Tamburu Uygulama Alanları",
        items: [
          {
            title: "Harman (Blend) Gübre",
            text: "Üre, fosfat ve potas gibi tek besinli granüllerin reçeteye göre karıştırılarak harman gübre üretilmesi. Bileşenlerin tane boyutu uyumu ayrışmayı sınırlamak için önemlidir.",
            imageAlt: "Farklı renklerde granüllerden oluşan harman gübre",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Mineral ve Kimyasal Karışımlar",
            text: "Mineral tuzlar, katkılar ve kimyasal tozların belirli oranlarda karıştırılması. Yoğunluk farkı yüksek bileşenlerde doluluk ve devir tasarımda ayrıca değerlendirilir.",
            imageAlt: "Beyaz, düzensiz taneli potasyum magnezyum sülfat",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Çok Bileşenli Dökme Ürün Hazırlama",
            text: "Tahıl, pelet ve toz gibi farklı formlardaki dökme hammaddelerin bir sonraki proses için karıştırılması. Doğru sonuç için bileşenlerin tartımlı dozajı esastır.",
            imageAlt: "Çuvallar içinde mısır, tahıl ve pelet hammaddeler",
            linkLabel: "Dozajlama Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Karıştırma Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA karıştırma tamburlarını bileşen sayısı ve oranları, tane boyutu ve yoğunluk farkları, kapasite ve çalışma rejimine göre projelendirir. Tambur gövdesi, iç yönlendirme elemanları, besleme ve boşaltma bağlantıları ile tahrik sistemi dozaj hattıyla birlikte tasarlanır.",
        highlights: ["Ürüne özel iç yönlendirme elemanları", "Sürekli veya partili çalışma", "Ayarlanabilir devir ve eğim", "Ayrışmayı sınırlayan boşaltma"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Bileşen Bilgileri", text: "Bileşen sayısı, oranları, tane boyutu ve yoğunlukları." },
          { title: "Kapasite ve Rejim", text: "Saatlik kapasite veya parti hacmi, sürekli ya da partili çalışma." },
          { title: "Ürün Davranışı", text: "Nem, yapışma eğilimi, kırılganlık ve tozuma." },
          { title: "Hat Entegrasyonu", text: "Bunkerler, dozaj sistemi, transfer ve paketleme bağlantıları." },
        ],
        dataNote: "Karışımın kabul kriteri (numune alma yöntemi ve tolerans) proje başında tanımlanmalıdır; ulaşılacak homojenlik bileşenlere ve dozaj doğruluğuna bağlıdır.",
      },
      faq: {
        title: "Karıştırma Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Karıştırma tamburu granül üretir mi?",
            answer:
              "Hayır. Karıştırma tamburu mevcut bileşenleri karıştırır; tozdan granül üretmek için sıvı bağlayıcıyla çalışan granülatör tamburu kullanılır.",
          },
          {
            question: "Sürekli ve partili karıştırma arasındaki fark nedir?",
            answer:
              "Partili çalışmada tartılan her parti belirli bir süre karıştırılıp boşaltılır. Sürekli çalışmada bileşenler debiye oranlı beslenir ve karışım tambur boyunca ilerleyerek çıkar.",
          },
          {
            question: "Karışımda ayrışma (segregasyon) nasıl sınırlanır?",
            answer:
              "Bileşenlerin tane boyutu uyumu, uygun doluluk ve devir, kontrollü boşaltma ile transfer noktalarındaki düşüş yüksekliklerinin sınırlandırılması ayrışmayı azaltmaya yardımcı olur.",
          },
          {
            question: "Nemli ürünler karıştırılabilir mi?",
            answer:
              "Nemli ürünler de karıştırılabilir; ancak yapışma eğilimi iç eleman seçimini ve temizlik erişimini etkiler. Ürün davranışı belirsizse numune çalışması önerilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Bileşen listesi ve oranları, tane boyutları, kapasite veya parti hacmi, çalışma rejimi, ürünün nem ve yapışma davranışı ile mevcut dozaj ve paketleme ekipmanı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Karıştırma tamburu için teknik teklif alın",
        text: "Bileşenleriniz, reçete oranlarınız ve kapasitenize göre karıştırma tamburunu ve dozaj hattını birlikte netleştirelim.",
        mailSubject: "Karıştırma Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Bileşen listesi ve reçete oranları",
          "Tane boyutları ve yoğunluklar",
          "Kapasite veya parti hacmi",
          "Sürekli / partili çalışma tercihi",
          "Nem ve yapışma davranışı",
          "Mevcut dozaj ve paketleme ekipmanı",
        ],
        inquiryLines: [
          "Merhaba, karıştırma tamburu için teknik teklif almak istiyorum.",
          "",
          "Bileşenler ve oranlar:",
          "Kapasite (ton/saat) veya parti hacmi:",
          "Tane boyutları:",
          "Çalışma rejimi:",
          "Mevcut ekipmanlar:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Mixing Drum Manufacturer | Rotary Drum Mixer",
        description:
          "Rotary mixing drums that blend powders, granules and moist bulk solids into a homogeneous mix. Continuous or batch solutions for blended fertilizer and minerals.",
      },
      breadcrumbLabel: "Mixing Drum",
      h1: "Mixing Drum – Rotary Drum Mixer for Bulk Materials",
      productCategory: "Rotary Drum Mixer",
      overview: {
        imageAlt: "Rotary drum shell with support rollers and drive unit",
        tagline: "Rotary Drum Mixer",
        keyFacts: [
          { label: "Task", value: "Homogeneous blending of components" },
          { label: "Product", value: "Powders, granules, moist bulk solids" },
          { label: "Operation", value: "Continuous or batch" },
          { label: "Scope", value: "Drum, feeding and discharge connections" },
        ],
        title: "A Homogeneous Blend without Overstressing the Product",
        paragraphs: [
          "A mixing drum is rotary process equipment in which different components are tumbled and guided by internal elements until a homogeneous mix is obtained. The slow, even motion of the drum blends the material while preserving the grain structure of granular products.",
          "Mix quality depends on the particle size and density differences of the components, accuracy of feed ratios, drum filling, speed and residence time. For components of very different particle sizes, the risk of segregation is assessed separately in the design.",
          "A mixing drum does not form granules, dry or coat the product; it only produces a blend. The drum is therefore engineered together with the dosing system that feeds the components in the correct ratio and the downstream equipment that conveys the blend without separating it.",
        ],
        note: "Mix homogeneity is often determined before the drum, by dosing accuracy. After the drum, transfer points and drop heights must also be considered to prevent the blend from segregating.",
      },
      process: {
        title: "Mixing Line Process Flow",
        intro:
          "The diagram shows the position of the mixing drum in a typical blending line. The drum only mixes; it has no granulation, drying or coating function.",
        note: "In batch operation each weighed batch is loaded, mixed for a set time and discharged; in continuous operation components are fed in proportion to the flow rate.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Component dosing", text: "Each component is weighed and fed to the drum in the recipe ratio." },
          { title: "Tumbling and mixing", text: "Drum rotation and internals distribute the components into one another." },
          { title: "Residence time control", text: "Speed, slope or batch time is set for the target homogeneity." },
          { title: "Blend discharge", text: "The blend goes to packing or process via transfer that limits segregation." },
        ],
        flow: {
          svgTitle: "Mixing line process flow diagram",
          svgDesc: "Product line: component hoppers and dosing, mixing drum, transfer and packing.",
          mainLane: "PRODUCT LINE",
          before: [
            { title: "Hoppers", sub: "Component storage" },
            { title: "Dosing", sub: "Weighed feeding" },
          ],
          drum: { title: "MIXING DRUM", sub: "tumbling · blending" },
          after: [{ title: "Packing / process", sub: "Controlled transfer" }],
        },
      },
      applications: {
        title: "Mixing Drum Applications",
        items: [
          {
            title: "Bulk-Blend Fertilizer",
            text: "Producing bulk-blend fertilizer by mixing straight granules such as urea, phosphate and potash according to the recipe. Matching particle sizes is important to limit segregation.",
            imageAlt: "Bulk-blend fertilizer made of multi-coloured granules",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Mineral and Chemical Blends",
            text: "Mixing mineral salts, additives and chemical powders in defined ratios. For components with large density differences, filling and speed are assessed separately.",
            imageAlt: "White, irregular potassium magnesium sulphate grains",
            linkLabel: "Chemical Process Industry",
          },
          {
            title: "Multi-Component Bulk Preparation",
            text: "Blending bulk raw materials in different forms such as grain, pellets and powder for the next process. Weighed dosing of the components is essential for a good result.",
            imageAlt: "Corn, grain and pellet raw materials in sacks",
            linkLabel: "Dosing Systems",
          },
        ],
      },
      design: {
        title: "Custom Mixing Drum Design and Manufacturing",
        intro:
          "PRO MAKINA engineers mixing drums around the number and ratio of components, particle size and density differences, capacity and operating regime. The drum shell, internal guiding elements, feeding and discharge connections and drive are designed together with the dosing line.",
        highlights: ["Product-specific internal elements", "Continuous or batch operation", "Adjustable speed and slope", "Discharge that limits segregation"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Component Data", text: "Number of components, ratios, particle sizes and densities." },
          { title: "Capacity and Regime", text: "Hourly capacity or batch volume, continuous or batch operation." },
          { title: "Product Behaviour", text: "Moisture, stickiness, friability and dust formation." },
          { title: "Line Integration", text: "Hoppers, dosing system, transfer and packing connections." },
        ],
        dataNote: "The acceptance criterion for the blend (sampling method and tolerance) should be defined at the start; achievable homogeneity depends on the components and dosing accuracy.",
      },
      faq: {
        title: "Mixing Drum FAQ",
        items: [
          {
            question: "Does a mixing drum produce granules?",
            answer:
              "No. A mixing drum blends existing components; a drum granulator working with a liquid binder is used to form granules from powder.",
          },
          {
            question: "What is the difference between continuous and batch mixing?",
            answer:
              "In batch mode each weighed batch is mixed for a set time and discharged. In continuous mode components are fed in proportion to flow rate and the blend moves along the drum to the outlet.",
          },
          {
            question: "How is segregation limited?",
            answer:
              "Matched particle sizes, suitable filling and speed, controlled discharge and limited drop heights at transfer points all help reduce segregation.",
          },
          {
            question: "Can moist products be mixed?",
            answer:
              "Yes, moist products can be mixed, but stickiness affects the choice of internals and cleaning access. If product behaviour is uncertain, sample work is recommended.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Component list and ratios, particle sizes, capacity or batch volume, operating regime, moisture and stickiness of the product and the existing dosing and packing equipment.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a mixing drum",
        text: "Share your components, recipe ratios and capacity, and we will define the mixing drum and dosing line together with you.",
        mailSubject: "Mixing Drum Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Component list and recipe ratios",
          "Particle sizes and densities",
          "Capacity or batch volume",
          "Continuous / batch preference",
          "Moisture and stickiness",
          "Existing dosing and packing equipment",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a mixing drum.",
          "",
          "Components and ratios:",
          "Capacity (t/h) or batch volume:",
          "Particle sizes:",
          "Operating regime:",
          "Existing equipment:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Смесительный барабан для сыпучих материалов",
        description:
          "Вращающиеся смесительные барабаны для однородного смешивания порошков, гранул и влажных сыпучих материалов. Непрерывные и периодические решения для тукосмесей и минералов.",
      },
      breadcrumbLabel: "Смесительный барабан",
      h1: "Смесительный барабан – барабанный смеситель сыпучих материалов",
      productCategory: "Барабанный смеситель",
      overview: {
        imageAlt: "Корпус вращающегося барабана с опорными роликами и приводом",
        tagline: "Барабанный смеситель",
        keyFacts: [
          { label: "Задача", value: "Однородное смешивание компонентов" },
          { label: "Продукт", value: "Порошки, гранулы, влажные сыпучие" },
          { label: "Режим", value: "Непрерывный или периодический" },
          { label: "Объём поставки", value: "Барабан, узлы загрузки и выгрузки" },
        ],
        title: "Однородная смесь без лишней нагрузки на продукт",
        paragraphs: [
          "Смесительный барабан — вращающийся аппарат, в котором разные компоненты пересыпаются и направляются внутренними элементами до получения однородной смеси. Медленное равномерное движение барабана смешивает материал, сохраняя структуру гранулированных продуктов.",
          "Качество смеси зависит от различия компонентов по крупности и плотности, точности соотношений подачи, заполнения барабана, скорости и времени пребывания. При сильно различающейся крупности риск сегрегации оценивается в проекте отдельно.",
          "Смесительный барабан не гранулирует, не сушит и не покрывает продукт — он только смешивает. Поэтому барабан проектируется вместе с системой дозирования, подающей компоненты в нужном соотношении, и оборудованием, транспортирующим смесь без её расслоения.",
        ],
        note: "Однородность смеси часто определяется ещё до барабана — точностью дозирования. После барабана необходимо учитывать узлы пересыпки и высоту падения, чтобы смесь не расслаивалась.",
      },
      process: {
        title: "Технологическая схема линии смешивания",
        intro:
          "Схема показывает место смесительного барабана в типовой линии тукосмешения. Барабан только смешивает: функций грануляции, сушки или покрытия у него нет.",
        note: "В периодическом режиме каждая взвешенная партия загружается, перемешивается заданное время и выгружается; в непрерывном компоненты подаются пропорционально расходу.",
        mainLineLabel: "Продуктовая линия",
        productLine: [
          { title: "Дозирование компонентов", text: "Каждый компонент взвешивается и подаётся в барабан по рецептуре." },
          { title: "Пересыпание и смешивание", text: "Вращение и внутренние элементы распределяют компоненты друг в друге." },
          { title: "Контроль времени пребывания", text: "Скорость, наклон или время партии задаются по целевой однородности." },
          { title: "Выгрузка смеси", text: "Смесь передаётся на фасовку или в процесс с ограничением расслоения." },
        ],
        flow: {
          svgTitle: "Технологическая схема линии смешивания",
          svgDesc: "Продуктовая линия: бункеры компонентов и дозирование, смесительный барабан, передача и фасовка.",
          mainLane: "ПРОДУКТОВАЯ ЛИНИЯ",
          before: [
            { title: "Бункеры", sub: "Запас компонентов" },
            { title: "Дозирование", sub: "Весовая подача" },
          ],
          drum: { title: "СМЕСИТЕЛЬ", sub: "пересыпание · смешивание" },
          after: [{ title: "Фасовка / процесс", sub: "Контролируемая передача" }],
        },
      },
      applications: {
        title: "Области применения смесительного барабана",
        items: [
          {
            title: "Тукосмеси (bulk blend)",
            text: "Получение тукосмесей смешиванием простых гранулированных удобрений — карбамида, фосфатов и калия — по рецептуре. Совпадение крупности компонентов важно для ограничения сегрегации.",
            imageAlt: "Тукосмесь из разноцветных гранул",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Минеральные и химические смеси",
            text: "Смешивание минеральных солей, добавок и химических порошков в заданных соотношениях. Для компонентов с большой разницей плотности заполнение и скорость оцениваются отдельно.",
            imageAlt: "Белые неправильные зёрна сульфата калия-магния",
            linkLabel: "Химическая промышленность",
          },
          {
            title: "Подготовка многокомпонентного сырья",
            text: "Смешивание сыпучего сырья разной формы — зерна, гранул и порошков — для следующего процесса. Для хорошего результата необходимо весовое дозирование компонентов.",
            imageAlt: "Кукуруза, зерно и гранулы в мешках",
            linkLabel: "Системы дозирования",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление смесительных барабанов",
        intro:
          "PRO MAKINA проектирует смесительные барабаны исходя из числа и соотношения компонентов, различий по крупности и плотности, производительности и режима работы. Корпус, внутренние направляющие элементы, узлы загрузки и выгрузки и привод разрабатываются вместе с линией дозирования.",
        highlights: ["Внутренние элементы под продукт", "Непрерывный или периодический режим", "Регулируемые скорость и наклон", "Выгрузка с ограничением расслоения"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Данные компонентов", text: "Число компонентов, соотношения, крупность и плотность." },
          { title: "Производительность и режим", text: "Часовая производительность или объём партии, режим работы." },
          { title: "Поведение продукта", text: "Влажность, липкость, хрупкость и пыление." },
          { title: "Интеграция в линию", text: "Бункеры, дозирование, передача и фасовка." },
        ],
        dataNote: "Критерий приёмки смеси (метод отбора проб и допуск) следует определить в начале проекта; достижимая однородность зависит от компонентов и точности дозирования.",
      },
      faq: {
        title: "Часто задаваемые вопросы о смесительном барабане",
        items: [
          {
            question: "Производит ли смесительный барабан гранулы?",
            answer:
              "Нет. Смесительный барабан смешивает готовые компоненты; для получения гранул из порошка используется барабанный гранулятор с жидким связующим.",
          },
          {
            question: "Чем отличается непрерывное смешивание от периодического?",
            answer:
              "В периодическом режиме взвешенная партия смешивается заданное время и выгружается. В непрерывном компоненты подаются пропорционально расходу, и смесь продвигается по барабану к выходу.",
          },
          {
            question: "Как ограничить сегрегацию смеси?",
            answer:
              "Согласование крупности компонентов, подходящие заполнение и скорость, контролируемая выгрузка и ограничение высоты падения в узлах пересыпки помогают снизить расслоение.",
          },
          {
            question: "Можно ли смешивать влажные продукты?",
            answer:
              "Да, но липкость влияет на выбор внутренних элементов и доступ для очистки. Если поведение продукта неизвестно, рекомендуется испытание образцов.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Перечень и соотношения компонентов, крупность, производительность или объём партии, режим работы, влажность и липкость продукта, имеющееся оборудование дозирования и фасовки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на смесительный барабан",
        text: "Сообщите компоненты, рецептуру и производительность — вместе определим смесительный барабан и линию дозирования.",
        mailSubject: "Запрос предложения: смесительный барабан",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Перечень компонентов и рецептура",
          "Крупность и плотность",
          "Производительность или объём партии",
          "Непрерывный / периодический режим",
          "Влажность и липкость",
          "Имеющееся дозирование и фасовка",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на смесительный барабан.",
          "",
          "Компоненты и соотношения:",
          "Производительность (т/ч) или объём партии:",
          "Крупность:",
          "Режим работы:",
          "Имеющееся оборудование:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة الخلط | خلاط أسطواني دوّار للمواد السائبة",
        description:
          "أسطوانات خلط دوّارة تمزج المساحيق والحبيبات والمواد السائبة الرطبة في خليط متجانس. حلول مستمرة أو على دفعات للأسمدة المخلوطة والمعادن.",
      },
      breadcrumbLabel: "أسطوانة الخلط",
      h1: "أسطوانة الخلط – خلاط أسطواني دوّار للمواد السائبة",
      productCategory: "خلاط أسطواني دوّار",
      overview: {
        imageAlt: "جسم أسطوانة دوّارة مع بكرات الارتكاز ووحدة الإدارة",
        tagline: "خلاط أسطواني دوّار",
        keyFacts: [
          { label: "المهمة", value: "خلط المكونات بتجانس" },
          { label: "المنتج", value: "مساحيق وحبيبات ومواد رطبة" },
          { label: "التشغيل", value: "مستمر أو على دفعات" },
          { label: "نطاق التوريد", value: "أسطوانة ووصلات التلقيم والتفريغ" },
        ],
        title: "خليط متجانس دون إجهاد المنتج",
        paragraphs: [
          "أسطوانة الخلط معدة عملية دوّارة تتقلب فيها المكونات المختلفة وتوجّهها عناصر داخلية حتى تتكوّن خلطة متجانسة. وتخلط حركة الأسطوانة البطيئة المنتظمة المادة مع الحفاظ على بنية الحبيبات.",
          "تعتمد جودة الخلطة على فروق حجم الجسيمات وكثافتها بين المكونات ودقة نسب التلقيم ودرجة امتلاء الأسطوانة وسرعتها وزمن المكوث. وفي المكونات متباينة الأحجام يُقيَّم خطر الانفصال (الفرز) بشكل مستقل في التصميم.",
          "لا تقوم أسطوانة الخلط بالتحبيب أو التجفيف أو التغليف، بل تنتج خلطة فقط. لذلك تُصمَّم مع نظام الجرعات الذي يلقّم المكونات بالنسب الصحيحة ومع معدات النقل التي تحافظ على الخلطة دون انفصال.",
        ],
        note: "كثيرًا ما يتحدد تجانس الخلطة قبل الأسطوانة بدقة الجرعات. وبعد الأسطوانة يجب مراعاة نقاط النقل وارتفاعات السقوط لمنع انفصال الخلطة.",
      },
      process: {
        title: "مخطط تدفق خط الخلط",
        intro:
          "يوضح المخطط موقع أسطوانة الخلط في خط خلط نموذجي. تقوم الأسطوانة بالخلط فقط، وليس لها وظيفة تحبيب أو تجفيف أو تغليف.",
        note: "في التشغيل على دفعات تُحمَّل كل دفعة موزونة وتُخلط لمدة محددة ثم تُفرَّغ، وفي التشغيل المستمر تُلقَّم المكونات بالتناسب مع التدفق.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "جرعات المكونات", text: "يُوزن كل مكوّن ويُلقَّم إلى الأسطوانة بنسبة الوصفة." },
          { title: "التقليب والخلط", text: "يوزّع دوران الأسطوانة والعناصر الداخلية المكونات فيما بينها." },
          { title: "ضبط زمن المكوث", text: "تُضبط السرعة أو الميل أو زمن الدفعة وفق التجانس المستهدف." },
          { title: "تفريغ الخلطة", text: "تُنقل الخلطة إلى التعبئة أو العملية التالية بنقل يحد من الانفصال." },
        ],
        flow: {
          svgTitle: "مخطط تدفق خط الخلط",
          svgDesc: "خط المنتج: قواديس المكونات والجرعات، أسطوانة الخلط، النقل والتعبئة.",
          mainLane: "خط المنتج",
          before: [
            { title: "القواديس", sub: "مخزون المكونات" },
            { title: "الجرعات", sub: "تلقيم موزون" },
          ],
          drum: { title: "أسطوانة الخلط", sub: "تقليب · تجانس" },
          after: [{ title: "التعبئة / العملية", sub: "نقل مضبوط" }],
        },
      },
      applications: {
        title: "مجالات استخدام أسطوانة الخلط",
        items: [
          {
            title: "الأسمدة المخلوطة (Bulk Blend)",
            text: "إنتاج الأسمدة المخلوطة بخلط حبيبات أحادية العنصر مثل اليوريا والفوسفات والبوتاس وفق الوصفة. ويُعد توافق أحجام الحبيبات مهمًا للحد من الانفصال.",
            imageAlt: "سماد مخلوط من حبيبات متعددة الألوان",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "الخلطات المعدنية والكيميائية",
            text: "خلط الأملاح المعدنية والإضافات والمساحيق الكيميائية بنسب محددة. وفي المكونات ذات فروق الكثافة الكبيرة تُقيَّم درجة الامتلاء والسرعة بشكل مستقل.",
            imageAlt: "حبيبات كبريتات البوتاسيوم والمغنيسيوم البيضاء غير المنتظمة",
            linkLabel: "الصناعات الكيميائية",
          },
          {
            title: "تحضير المواد السائبة متعددة المكونات",
            text: "خلط مواد خام سائبة بأشكال مختلفة مثل الحبوب والكريات والمساحيق للعملية التالية. والجرعات الموزونة للمكونات أساسية للحصول على نتيجة جيدة.",
            imageAlt: "ذرة وحبوب وكريات في أكياس",
            linkLabel: "أنظمة الجرعات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أسطوانات خلط مخصصة",
        intro:
          "تصمم PRO MAKINA أسطوانات الخلط وفق عدد المكونات ونسبها وفروق حجم الجسيمات والكثافة والسعة ونظام التشغيل. ويُصمَّم جسم الأسطوانة والعناصر التوجيهية الداخلية ووصلات التلقيم والتفريغ ونظام الإدارة مع خط الجرعات.",
        highlights: ["عناصر داخلية حسب المنتج", "تشغيل مستمر أو على دفعات", "سرعة وميل قابلان للضبط", "تفريغ يحد من الانفصال"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "بيانات المكونات", text: "عدد المكونات ونسبها وأحجام الجسيمات والكثافات." },
          { title: "السعة ونظام التشغيل", text: "السعة بالساعة أو حجم الدفعة، مستمر أو على دفعات." },
          { title: "سلوك المنتج", text: "الرطوبة والالتصاق والهشاشة وتكوّن الغبار." },
          { title: "التكامل مع الخط", text: "القواديس ونظام الجرعات والنقل ووصلات التعبئة." },
        ],
        dataNote: "ينبغي تحديد معيار قبول الخلطة (طريقة أخذ العينات والتفاوت المسموح) في بداية المشروع؛ ويعتمد التجانس الممكن على المكونات ودقة الجرعات.",
      },
      faq: {
        title: "أسئلة شائعة حول أسطوانة الخلط",
        items: [
          {
            question: "هل تنتج أسطوانة الخلط حبيبات؟",
            answer:
              "لا. تخلط أسطوانة الخلط المكونات الموجودة، أما تكوين الحبيبات من المسحوق فيتم في مُحبِّب أسطواني يعمل بمادة رابطة سائلة.",
          },
          {
            question: "ما الفرق بين الخلط المستمر والخلط على دفعات؟",
            answer:
              "في الخلط على دفعات تُخلط كل دفعة موزونة لمدة محددة ثم تُفرَّغ. وفي الخلط المستمر تُلقَّم المكونات بالتناسب مع التدفق وتتقدم الخلطة على طول الأسطوانة حتى المخرج.",
          },
          {
            question: "كيف يُحد من انفصال الخلطة؟",
            answer:
              "يساعد توافق أحجام الجسيمات ودرجة الامتلاء والسرعة المناسبتان والتفريغ المضبوط وتقليل ارتفاعات السقوط عند نقاط النقل على الحد من الانفصال.",
          },
          {
            question: "هل يمكن خلط المنتجات الرطبة؟",
            answer:
              "نعم، لكن قابلية الالتصاق تؤثر في اختيار العناصر الداخلية وإمكانية التنظيف. وإذا كان سلوك المنتج غير معروف يُنصح بتجارب على العينات.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "قائمة المكونات ونسبها وأحجام الجسيمات والسعة أو حجم الدفعة ونظام التشغيل ورطوبة المنتج والتصاقه ومعدات الجرعات والتعبئة الحالية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لأسطوانة خلط",
        text: "شاركنا المكونات ونسب الوصفة والسعة، لنحدد معًا أسطوانة الخلط وخط الجرعات.",
        mailSubject: "طلب عرض سعر: أسطوانة خلط",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "قائمة المكونات ونسب الوصفة",
          "أحجام الجسيمات والكثافات",
          "السعة أو حجم الدفعة",
          "التشغيل المستمر / على دفعات",
          "الرطوبة والالتصاق",
          "معدات الجرعات والتعبئة الحالية",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لأسطوانة خلط.",
          "",
          "المكونات والنسب:",
          "السعة (طن/ساعة) أو حجم الدفعة:",
          "أحجام الجسيمات:",
          "نظام التشغيل:",
          "المعدات الحالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
