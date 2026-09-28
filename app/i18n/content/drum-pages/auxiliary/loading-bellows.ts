import type { DrumPageConfig } from "../types";

// Yükleme körüğü: mevcut ürün tanımı "toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz aktarılması;
// otomatik sensör, ayarlanabilir körük uzunluğu, geri sarma ve konumlandırma". Görsellerde dış körük, içte konik hat (silbas11),
// yandan motorlu kaldırma ünitesi (silbas13), çıkış ağzında seviye algılayıcı (silbas6), üstte toz emiş ağzı ve el kumandası
// (silbas14) görülür. Kapasite, strok, çap veya debi verilmez. silbas2–5 araç (silobas tanker) görselidir, ürün değildir.
// Gemi ve vagon yüklemesi için PRO MAKİNA referansı doğrulanamadığından uygulama kartı olarak sunulmaz. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/silobas/${file}`;

export const loadingBellowsPage: DrumPageConfig = {
  key: "loadingBellows",
  group: "auxiliaryFlow",
  trSlug: "yukleme-korugu",
  mainImage: img("silbas9.jpg"),
  applications: [
    { image: img("silbas2.webp"), link: "siloSystems" },
    { image: "/images/kurutma-uygulamalari/granul-gubre.webp", link: "fertilizerPlants" },
    { image: "/images/kurutma-uygulamalari/kirec-tasi.webp", link: "mining" },
    { image: img("silbas10.jpg"), link: "dustCollection" },
  ],
  figure: img("silbas13.jpg"),
  gallery: [img("silbas11.jpg"), img("silbas1.jpg"), img("silbas6.jpg"), img("silbas14.jpg"), img("silbas8.jpg")],
  sectors: ["fertilizerPlants", "mining"],
  resources: ["siloSystems", "slideGates", "pulseJetFilter", "auxiliaryFlow"],
  machines: ["storageSystems", "dustCollection", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Yükleme Körüğü | Teleskopik Kamyon ve Silobas Yükleme Körüğü | PRO MAKİNA",
        description:
          "Toz ve granül dökme ürünleri silobas, kamyon ve açık kasaya tozsuz yükleyen teleskopik yükleme körüğü: motorlu kaldırma, seviye sensörü ve toz emişi.",
      },
      breadcrumbLabel: "Yükleme Körüğü",
      h1: "Yükleme Körüğü – Silobas, Kamyon ve Açık Kasaya Tozsuz Dökme Ürün Yükleme",
      productCategory: "Teleskopik Yükleme Körüğü",
      overview: {
        imageAlt: "Kırmızı dış körüklü ve alt boşaltma konili teleskopik yükleme körükleri",
        tagline: "Yükleme Körüğü",
        keyFacts: [
          { label: "Görev", value: "Dökme ürünün araca tozsuz yüklenmesi" },
          { label: "Hareket", value: "Teleskopik indirme ve kaldırma" },
          { label: "Toz kontrolü", value: "Körük üzerinde emiş bağlantısı" },
          { label: "Dolum sonu", value: "Çıkış ağzında seviye algılama" },
        ],
        title: "Silo veya Bunkerden Araca Kontrollü Yükleme",
        paragraphs: [
          "Yükleme körüğü, silo, bunker veya konveyör çıkışındaki dökme ürünü silobas, kamyon ya da açık kasaya düşey olarak indiren teleskopik yükleme ekipmanıdır. Ürünü yatay taşımaz; üst ekipmandan aldığı akışı araç ağzına kadar kapalı bir hat içinde götürür.",
          "Körük, motorlu kaldırma ünitesiyle araç dolum ağzına veya ürün yüzeyine kadar indirilir. Ürün içteki konik hattan akarken dış körük akışı çevreden ayırır. Dolum sırasında araçtan çıkan tozlu hava, körük üzerindeki emiş bağlantısından toz toplama sistemine alınır.",
          "Çıkış ağzındaki seviye algılayıcı ürünün ağza ulaştığını bildirir; üst ekipmandaki besleme durdurulur ve körük yükseltilir. Böylece ürün dökülmesi ve toz yayılımı azaltılır.",
        ],
        note: "Yükleme körüğü akışı başlatan veya ölçen ekipman değildir. Akışı üstteki sürgülü kapak, klape veya besleyici başlatıp keser; yüklenen miktar gerekiyorsa kantar veya tartım sistemiyle belirlenir.",
      },
      process: {
        title: "Yükleme Körüğü Proses Akışı",
        intro:
          "Şema, ürünün üst besleme noktasından körüğe geldiği, körüğün araç ağzına indirildiği, kontrollü yüklemenin yapıldığı ve dolum sonunda körüğün yükseltildiği akışı gösterir. Silo, bunker ve toz filtresi ayrı ekipmanlardır.",
        note: "Körük stroku, üst bağlantı kotu ile araç dolum ağzı kotu arasındaki farka göre belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Üst besleme", text: "Ürün silo, bunker veya konveyör çıkışından körüğün giriş flanşına gelir." },
          { title: "Körüğün indirilmesi", text: "Kaldırma ünitesi körüğü araç dolum ağzına veya ürün yüzeyine kadar indirir." },
          { title: "Kontrollü yükleme", text: "Ürün içteki konik hattan akar; dış körük akışı çevreden ayırır." },
          { title: "Dolum sonu", text: "Seviye algılayıcı ürünün ağza ulaştığını bildirir; besleme durur ve körük yükselir." },
        ],
        auxLineLabel: "Toz emişi",
        auxLine: [{ title: "Yer değiştiren hava", text: "Araçtan çıkan tozlu hava körük üzerindeki bağlantıdan toz toplama sistemine emilir." }],
        flow: {
          svgTitle: "Yükleme körüğü proses akış şeması",
          svgDesc: "Ürün hattı: silo veya bunker çıkışı, teleskopik yükleme körüğü ve araç dolum ağzı. Yardımcı hat: araçtan çıkan tozlu havanın emişi.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Silo / bunker", sub: "Üst besleme noktası" }],
          drum: { title: "YÜKLEME KÖRÜĞÜ", sub: "teleskopik indirme ve yükleme" },
          after: [{ title: "Silobas / kamyon", sub: "Dolum ağzı veya açık kasa" }],
          aux: {
            lane: "TOZ EMİŞİ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Toz emişi", sub: "Toz toplama sistemine" }],
          },
        },
      },
      applications: {
        title: "Yükleme Körüğü Uygulama Alanları",
        items: [
          {
            title: "Silo Altı Silobas Dolumu",
            text: "Toz ürünlerin silo altından kapalı silobas tankere yüklenmesi. Körük ağzı tanker dolum kapağına oturur; yer değiştiren hava emişle alınır.",
            imageAlt: "Toz dökme ürün taşıyan silobas tanker araçlar",
            linkLabel: "Silo Sistemleri",
          },
          {
            title: "Gübre Yükleme",
            text: "Granül gübrenin depolama veya ürün bunkerinden kamyona yüklenmesi. Tozlanma ve tane kırılması düşüş yüksekliğinin kısaltılmasıyla azaltılır.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Mineral ve Tozlu Ürün Yükleme",
            text: "Kireç, kum, çimento benzeri toz ve mineral ürünlerin araca yüklenmesi. Tozlanma eğilimi yüksek ürünlerde emiş bağlantısı tasarımın parçasıdır.",
            imageAlt: "Kireç taşı parçaları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Açık Kasa ve Yığın Yükleme",
            text: "Kapalı dolum ağzı olmayan açık kasa araçlara veya yığına kontrollü boşaltma. Körük ucu ürün yüzeyine yakın tutularak toz yayılımı sınırlanır.",
            imageAlt: "Kapalı alanda yükleme körüğüyle yığına dökme ürün boşaltımı",
            linkLabel: "Toz Toplama Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Yükleme Körüğü Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA yükleme körüklerini yüklenecek ürün, araç tipi, üst bağlantı ile araç ağzı arasındaki kot farkı ve toz kontrolü ihtiyacına göre projelendirir. Körük yapısı, iç akış hattı, kaldırma ünitesi, çıkış ağzı ve sensörler birlikte seçilir.",
        highlights: ["Dış körük ve iç konik akış hattı", "Motorlu kaldırma ve konumlandırma", "Seviye algılayıcılı çıkış ağzı", "Toz emiş bağlantısı"],
        figureAlt: "Motorlu kaldırma ünitesi, körük ve seviye algılayıcı kafesli çıkış konisi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu ve tozlanma eğilimi." },
          { title: "Araç ve Dolum Ağzı", text: "Silobas, kamyon veya açık kasa; dolum ağzının ölçüsü ve konumu." },
          { title: "Kot ve Strok", text: "Üst bağlantı kotu, araç ağzı kotu ve gerekli körük hareketi." },
          { title: "Yükleme Debisi", text: "Üst ekipmanın verdiği ürün debisi ve buna uygun akış kesiti." },
          { title: "Toz ve Kontrol", text: "Emiş bağlantısı, mevcut filtre, lokal kumanda ve otomasyon sinyalleri." },
        ],
        dataNote: "Körük stroku, çapı ve yükleme debisi ürün ve saha verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Yükleme Körüğü Fotoğraf Galerisi",
        captions: [
          "Dış körük içinde konik akış elemanları ve üst emiş ağzı",
          "Dökme ürün yüzeyine indirilmiş yükleme körüğü",
          "Seviye algılayıcılı çıkış konisi",
          "Körük kaldırma ve indirme el kumandası",
          "Tesiste çalışan yükleme körükleri",
        ],
      },
      faq: {
        title: "Yükleme Körüğü Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Yükleme körüğü ne işe yarar?",
            answer: "Silo, bunker veya konveyör çıkışındaki dökme ürünü silobas, kamyon veya açık kasaya kapalı bir hat içinde indirir; dökülmeyi ve toz yayılımını azaltır.",
          },
          {
            question: "Körük nasıl iner ve kalkar?",
            answer: "Körük, motorlu kaldırma ünitesiyle araç ağzına veya ürün yüzeyine kadar indirilir ve dolum bitince yükseltilir. Kumanda lokal el ünitesinden veya otomasyondan yapılabilir.",
          },
          {
            question: "Toz nasıl kontrol edilir?",
            answer: "Dolum sırasında araçtan çıkan tozlu hava, körük üzerindeki emiş bağlantısından toz toplama sistemine alınır. Emiş bağlantısı mevcut bir filtreye veya projeye eklenen filtreye bağlanabilir.",
          },
          {
            question: "Yükleme körüğü ürünü tartar mı?",
            answer: "Hayır. Körük ürünü araca indirir; akışı üst ekipman başlatıp keser. Yüklenen miktar gerekiyorsa kantar veya ayrı bir tartım sistemiyle belirlenir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, araç tipi, üst bağlantı ve araç ağzı kotları, yükleme debisi ve toz emişi ihtiyacı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Yükleme körüğü için teknik teklif alın",
        text: "Ürününüz, araç tipiniz ve yükleme noktanızdaki kot farkına göre yükleme körüğünü birlikte netleştirelim.",
        mailSubject: "Yükleme Körüğü Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve tozlanma eğilimi", "Araç tipi (silobas, kamyon, açık kasa)", "Üst bağlantı ve araç ağzı kotları", "Yükleme debisi", "Toz emişi ve kumanda ihtiyacı"],
        inquiryLines: [
          "Merhaba, yükleme körüğü için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Araç tipi:",
          "Kot farkı (m):",
          "Yükleme debisi (ton/saat):",
          "Toz emişi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Loading Bellows | Telescopic Truck and Tanker Loading Spout",
        description:
          "Telescopic loading bellows for dust-free loading of powders and granules into tankers, trucks and open trailers: powered hoist, level sensor, dust extraction.",
      },
      breadcrumbLabel: "Loading Bellows",
      h1: "Loading Bellows – Dust-Free Bulk Loading into Tankers, Trucks and Open Trailers",
      productCategory: "Telescopic Loading Bellows",
      overview: {
        imageAlt: "Telescopic loading bellows with red outer bellows and discharge cones",
        tagline: "Loading Bellows",
        keyFacts: [
          { label: "Duty", value: "Dust-free loading of bulk product into vehicles" },
          { label: "Movement", value: "Telescopic lowering and raising" },
          { label: "Dust control", value: "Extraction connection on the bellows" },
          { label: "End of filling", value: "Level detection at the outlet" },
        ],
        title: "Controlled Loading from Silo or Bunker into Vehicles",
        paragraphs: [
          "Loading bellows, also called a loading spout, are telescopic loading equipment that lowers bulk product from a silo, bunker or conveyor outlet into a bulk tanker, truck or open trailer. It does not convey horizontally; it carries the flow received from the upstream equipment down to the vehicle opening inside a closed line.",
          "A powered hoist lowers the bellows to the vehicle's filling hatch or to the product surface. The product flows down the inner cone line while the outer bellows separates the flow from its surroundings. Dusty air displaced from the vehicle during filling is drawn to the dust collection system through the extraction connection on the bellows.",
          "A level sensor at the outlet signals that the product has reached the spout; the feed from the upstream equipment is stopped and the bellows is raised. Spillage and dust release are reduced in this way.",
        ],
        note: "Loading bellows neither start nor measure the flow. The flow is started and stopped by the slide gate, diverter or feeder above; the loaded quantity is determined by a weighbridge or weighing system where required.",
      },
      process: {
        title: "Loading Bellows Process Flow",
        intro:
          "The diagram shows the product arriving from the upstream feed point, the bellows being lowered to the vehicle opening, controlled loading and the bellows being raised at the end of filling. Silo, bunker and dust filter are separate equipment.",
        note: "The bellows stroke is determined by the height difference between the upstream connection and the vehicle filling opening.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Upstream feed", text: "Product arrives at the bellows inlet flange from a silo, bunker or conveyor outlet." },
          { title: "Lowering", text: "The hoist lowers the bellows to the vehicle filling hatch or product surface." },
          { title: "Controlled loading", text: "Product flows down the inner cone line; the outer bellows encloses the flow." },
          { title: "End of filling", text: "The level sensor signals a full spout; the feed stops and the bellows is raised." },
        ],
        auxLineLabel: "Dust extraction",
        auxLine: [{ title: "Displaced air", text: "Dusty air leaving the vehicle is drawn through the bellows connection to the dust collection system." }],
        flow: {
          svgTitle: "Loading bellows process flow diagram",
          svgDesc: "Product line: silo or bunker outlet, telescopic loading bellows and vehicle filling opening. Auxiliary line: extraction of dusty air displaced from the vehicle.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Silo / bunker", sub: "Upstream feed point" }],
          drum: { title: "LOADING BELLOWS", sub: "telescopic lowering and loading" },
          after: [{ title: "Tanker / truck", sub: "Filling hatch or open body" }],
          aux: {
            lane: "DUST EXTRACTION",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Dust extraction", sub: "To dust collection" }],
          },
        },
      },
      applications: {
        title: "Loading Bellows Applications",
        items: [
          {
            title: "Bulk Tanker Filling Below Silos",
            text: "Loading powders from below a silo into closed bulk tankers. The spout seats on the tanker hatch and displaced air is extracted.",
            imageAlt: "Bulk powder tanker trailers",
            linkLabel: "Silo Systems",
          },
          {
            title: "Fertilizer Loading",
            text: "Loading granular fertilizer from storage or product bunkers into trucks. Dust and particle breakage are reduced by shortening the free-fall height.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Mineral and Dusty Product Loading",
            text: "Loading lime, sand, cement-like powders and minerals into vehicles. For products with a high dusting tendency the extraction connection is part of the design.",
            imageAlt: "Pieces of limestone",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Open Trailer and Stockpile Loading",
            text: "Controlled discharge into open trailers without a closed hatch or onto a stockpile. Keeping the spout close to the product surface limits dust release.",
            imageAlt: "Bulk product discharged onto a stockpile indoors with loading bellows",
            linkLabel: "Dust Collection Systems",
          },
        ],
      },
      design: {
        title: "Custom Loading Bellows Design and Manufacturing",
        intro:
          "PRO MAKINA engineers loading bellows around the product to be loaded, the vehicle type, the height difference between the upstream connection and the vehicle opening, and the dust control requirement. Bellows construction, inner flow line, hoist unit, outlet and sensors are selected together.",
        highlights: ["Outer bellows and inner cone flow line", "Powered hoist and positioning", "Outlet with level detection", "Dust extraction connection"],
        figureAlt: "Powered hoist unit, bellows and discharge cone with level sensor cage",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density and dusting tendency." },
          { title: "Vehicle and Opening", text: "Bulk tanker, truck or open trailer; size and position of the filling opening." },
          { title: "Height and Stroke", text: "Upstream connection height, vehicle opening height and required bellows travel." },
          { title: "Loading Rate", text: "Product rate delivered by the upstream equipment and a matching flow section." },
          { title: "Dust and Control", text: "Extraction connection, existing filter, local pendant and automation signals." },
        ],
        dataNote: "Bellows stroke, diameter and loading rate are defined from product and site data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Loading Bellows Photo Gallery",
        captions: [
          "Cone flow elements inside the outer bellows and top extraction port",
          "Loading bellows lowered onto the bulk product surface",
          "Discharge cone with level sensor",
          "Pendant control for raising and lowering the bellows",
          "Loading bellows in operation at a plant",
        ],
      },
      faq: {
        title: "Loading Bellows FAQ",
        items: [
          {
            question: "What are loading bellows used for?",
            answer: "They lower bulk product from a silo, bunker or conveyor outlet into a bulk tanker, truck or open trailer inside a closed line, reducing spillage and dust release.",
          },
          {
            question: "How is the bellows raised and lowered?",
            answer: "A powered hoist lowers the bellows to the vehicle opening or product surface and raises it when filling is complete. It can be operated from a local pendant or from the automation system.",
          },
          {
            question: "How is dust controlled?",
            answer: "Dusty air displaced from the vehicle during filling is drawn through the extraction connection on the bellows to the dust collection system, either an existing filter or one added in the project.",
          },
          {
            question: "Do loading bellows weigh the product?",
            answer: "No. The bellows lowers the product into the vehicle; the flow is started and stopped by the upstream equipment. The loaded quantity is determined by a weighbridge or a separate weighing system where required.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, vehicle type, upstream connection and vehicle opening heights, loading rate and dust extraction requirement.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for loading bellows",
        text: "Share your product, vehicle type and the height difference at the loading point, and we will define the loading bellows together with you.",
        mailSubject: "Loading Bellows Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and dusting tendency", "Vehicle type (tanker, truck, open trailer)", "Upstream connection and vehicle opening heights", "Loading rate", "Dust extraction and control requirement"],
        inquiryLines: [
          "Hello, I would like a technical quotation for loading bellows.",
          "",
          "Product:",
          "Bulk density:",
          "Vehicle type:",
          "Height difference (m):",
          "Loading rate (t/h):",
          "Dust extraction:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Телескопический загрузочный рукав для автоцистерн и самосвалов",
        description:
          "Телескопический рукав для беспыльной загрузки порошков и гранул в цементовозы, самосвалы и открытые кузова: привод подъёма, датчик уровня, аспирация.",
      },
      breadcrumbLabel: "Загрузочный рукав",
      h1: "Загрузочный рукав – беспыльная загрузка сыпучих в цистерны, самосвалы и открытые кузова",
      productCategory: "Телескопический загрузочный рукав",
      overview: {
        imageAlt: "Телескопические загрузочные рукава с красным внешним гофром и разгрузочными конусами",
        tagline: "Загрузочный рукав",
        keyFacts: [
          { label: "Назначение", value: "Беспыльная загрузка сыпучих в транспорт" },
          { label: "Движение", value: "Телескопическое опускание и подъём" },
          { label: "Пылеподавление", value: "Патрубок аспирации на рукаве" },
          { label: "Окончание налива", value: "Датчик уровня на выпуске" },
        ],
        title: "Контролируемая загрузка из силоса или бункера в транспорт",
        paragraphs: [
          "Загрузочный рукав — телескопическое загрузочное оборудование, опускающее сыпучий продукт из выпуска силоса, бункера или конвейера в цементовоз, самосвал или открытый кузов. Он не транспортирует горизонтально, а подводит поток от вышестоящего оборудования к загрузочному люку по закрытому тракту.",
          "Приводной подъёмный механизм опускает рукав до загрузочного люка или поверхности продукта. Продукт движется по внутренней конусной линии, а внешний гофр отделяет поток от окружающей среды. Запылённый воздух, вытесняемый из транспорта при загрузке, отводится через патрубок аспирации в систему пылеулавливания.",
          "Датчик уровня на выпуске сигнализирует, что продукт достиг наконечника; подача вышестоящего оборудования останавливается, и рукав поднимается. Так уменьшаются просыпи и пыление.",
        ],
        note: "Загрузочный рукав не запускает и не измеряет поток. Поток открывает и перекрывает шибер, клапан или питатель выше; загруженное количество при необходимости определяется весами или системой взвешивания.",
      },
      process: {
        title: "Технологическая схема загрузочного рукава",
        intro:
          "Схема показывает поступление продукта от точки подачи, опускание рукава к люку транспорта, контролируемую загрузку и подъём рукава по окончании налива. Силос, бункер и фильтр — отдельное оборудование.",
        note: "Ход рукава определяется разницей высот между верхним присоединением и загрузочным люком транспорта.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Верхняя подача", text: "Продукт поступает на входной фланец рукава из выпуска силоса, бункера или конвейера." },
          { title: "Опускание", text: "Подъёмный механизм опускает рукав до люка транспорта или поверхности продукта." },
          { title: "Контролируемая загрузка", text: "Продукт идёт по внутренней конусной линии; внешний гофр закрывает поток." },
          { title: "Окончание налива", text: "Датчик уровня фиксирует заполнение; подача останавливается, рукав поднимается." },
        ],
        auxLineLabel: "Аспирация",
        auxLine: [{ title: "Вытесняемый воздух", text: "Запылённый воздух из транспорта отводится через патрубок рукава в систему пылеулавливания." }],
        flow: {
          svgTitle: "Технологическая схема загрузочного рукава",
          svgDesc: "Линия продукта: выпуск силоса или бункера, телескопический загрузочный рукав и загрузочный люк транспорта. Вспомогательная линия: аспирация вытесняемого воздуха.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Силос / бункер", sub: "Точка подачи" }],
          drum: { title: "ЗАГРУЗОЧНЫЙ РУКАВ", sub: "телескопическое опускание" },
          after: [{ title: "Цистерна / самосвал", sub: "Люк или открытый кузов" }],
          aux: {
            lane: "АСПИРАЦИЯ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Аспирация", sub: "В пылеулавливание" }],
          },
        },
      },
      applications: {
        title: "Области применения загрузочных рукавов",
        items: [
          {
            title: "Налив цементовозов под силосом",
            text: "Загрузка порошков из-под силоса в закрытые автоцистерны. Наконечник садится на люк цистерны, вытесняемый воздух отводится аспирацией.",
            imageAlt: "Автоцистерны для сыпучих порошковых продуктов",
            linkLabel: "Силосные системы",
          },
          {
            title: "Отгрузка удобрений",
            text: "Загрузка гранулированных удобрений из склада или бункера готовой продукции в самосвалы. Пыление и разрушение гранул снижаются за счёт уменьшения высоты падения.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Отгрузка минералов и пылящих продуктов",
            text: "Загрузка извести, песка, цементоподобных порошков и минералов в транспорт. Для сильно пылящих продуктов патрубок аспирации входит в проект.",
            imageAlt: "Куски известняка",
            linkLabel: "Горное дело и переработка минералов",
          },
          {
            title: "Открытый кузов и отсыпка в штабель",
            text: "Контролируемая выгрузка в открытые кузова без люка или в штабель. Наконечник держится у поверхности продукта, что ограничивает пыление.",
            imageAlt: "Отсыпка сыпучего продукта в штабель загрузочным рукавом в помещении",
            linkLabel: "Системы пылеулавливания",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление загрузочных рукавов",
        intro:
          "PRO MAKINA проектирует загрузочные рукава исходя из продукта, типа транспорта, разницы высот между верхним присоединением и люком и требований к пылеподавлению. Конструкция гофра, внутренняя линия, подъёмный механизм, наконечник и датчики подбираются совместно.",
        highlights: ["Внешний гофр и внутренняя конусная линия", "Приводной подъём и позиционирование", "Наконечник с датчиком уровня", "Патрубок аспирации"],
        figureAlt: "Приводной подъёмный механизм, гофр и разгрузочный конус с клеткой датчика уровня",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность и склонность к пылению." },
          { title: "Транспорт и люк", text: "Цистерна, самосвал или открытый кузов; размер и положение люка." },
          { title: "Высоты и ход", text: "Отметка верхнего присоединения, отметка люка и необходимый ход рукава." },
          { title: "Производительность", text: "Расход от вышестоящего оборудования и соответствующее сечение потока." },
          { title: "Пыль и управление", text: "Патрубок аспирации, имеющийся фильтр, пульт и сигналы автоматики." },
        ],
        dataNote: "Ход, диаметр рукава и производительность определяются по данным продукта и площадки; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея загрузочных рукавов",
        captions: [
          "Конусные элементы внутри гофра и верхний патрубок аспирации",
          "Рукав, опущенный на поверхность сыпучего продукта",
          "Разгрузочный конус с датчиком уровня",
          "Подвесной пульт подъёма и опускания рукава",
          "Загрузочные рукава в работе на предприятии",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о загрузочных рукавах",
        items: [
          {
            question: "Для чего нужен загрузочный рукав?",
            answer: "Он опускает сыпучий продукт из выпуска силоса, бункера или конвейера в цистерну, самосвал или открытый кузов по закрытому тракту, уменьшая просыпи и пыление.",
          },
          {
            question: "Как рукав опускается и поднимается?",
            answer: "Приводной подъёмный механизм опускает рукав до люка или поверхности продукта и поднимает его после налива. Управление — с подвесного пульта или от системы автоматики.",
          },
          {
            question: "Как контролируется пыль?",
            answer: "Запылённый воздух, вытесняемый из транспорта, отводится через патрубок аспирации на рукаве в систему пылеулавливания — существующий или предусмотренный проектом фильтр.",
          },
          {
            question: "Взвешивает ли рукав продукт?",
            answer: "Нет. Рукав подводит продукт к транспорту; поток запускает и останавливает вышестоящее оборудование. Количество при необходимости определяется весами или отдельной системой взвешивания.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, тип транспорта, отметки присоединения и люка, производительность загрузки и требования к аспирации.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на загрузочный рукав",
        text: "Сообщите продукт, тип транспорта и разницу высот в точке загрузки — вместе определим загрузочный рукав.",
        mailSubject: "Запрос предложения: загрузочный рукав",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и склонность к пылению", "Тип транспорта (цистерна, самосвал, открытый кузов)", "Отметки присоединения и люка", "Производительность загрузки", "Аспирация и управление"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на загрузочный рукав.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Тип транспорта:",
          "Разница высот (м):",
          "Производительность (т/ч):",
          "Аспирация:",
        ],
      },
    },
    ar: {
      meta: {
        title: "خرطوم التحميل التلسكوبي | تحميل الصهاريج والشاحنات دون غبار",
        description:
          "خرطوم تحميل تلسكوبي لتحميل المساحيق والحبيبات دون غبار في صهاريج المواد السائبة والشاحنات والمقطورات المفتوحة، مع رفع آلي وحساس مستوى وشفط غبار.",
      },
      breadcrumbLabel: "خرطوم التحميل",
      h1: "خرطوم التحميل – تحميل المواد السائبة دون غبار في الصهاريج والشاحنات والمقطورات المفتوحة",
      productCategory: "خرطوم تحميل تلسكوبي",
      overview: {
        imageAlt: "خراطيم تحميل تلسكوبية بغلاف منفاخي أحمر ومخاريط تفريغ",
        tagline: "خرطوم التحميل",
        keyFacts: [
          { label: "المهمة", value: "تحميل المواد السائبة في المركبات دون غبار" },
          { label: "الحركة", value: "إنزال ورفع تلسكوبي" },
          { label: "التحكم في الغبار", value: "وصلة شفط على الخرطوم" },
          { label: "نهاية التعبئة", value: "كشف المستوى عند المخرج" },
        ],
        title: "تحميل متحكم به من الصومعة أو القادوس إلى المركبات",
        paragraphs: [
          "خرطوم التحميل معدة تحميل تلسكوبية تُنزل المادة السائبة من مخرج الصومعة أو القادوس أو الناقل إلى صهريج المواد السائبة أو الشاحنة أو المقطورة المفتوحة. لا ينقل المادة أفقيًا، بل يوصل التدفق القادم من المعدة العلوية إلى فتحة المركبة داخل مسار مغلق.",
          "تُنزل وحدة رفع آلية الخرطوم حتى فتحة تعبئة المركبة أو سطح المنتج، فينساب المنتج عبر خط المخاريط الداخلي بينما يعزل الغلاف الخارجي التدفق عن المحيط. ويُسحب الهواء المحمل بالغبار الخارج من المركبة أثناء التعبئة عبر وصلة الشفط إلى نظام جمع الغبار.",
          "يُشير حساس المستوى عند المخرج إلى وصول المنتج إلى فوهة الخرطوم، فيتوقف التلقيم من المعدة العلوية ويُرفع الخرطوم، وبذلك يقل انسكاب المنتج وانتشار الغبار.",
        ],
        note: "لا يبدأ خرطوم التحميل التدفق ولا يقيسه؛ إذ تفتحه وتغلقه البوابة المنزلقة أو الصمام أو المُلقِّم في الأعلى، ويُحدَّد الوزن المحمَّل بميزان جسري أو نظام وزن عند الحاجة.",
      },
      process: {
        title: "تدفق العملية في خرطوم التحميل",
        intro:
          "يوضح المخطط وصول المنتج من نقطة التلقيم العلوية وإنزال الخرطوم إلى فتحة المركبة والتحميل المتحكم به ثم رفع الخرطوم عند نهاية التعبئة، بينما الصومعة والقادوس ومرشح الغبار معدات منفصلة.",
        note: "يُحدَّد شوط الخرطوم وفق فرق الارتفاع بين الوصلة العلوية وفتحة تعبئة المركبة.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "التلقيم العلوي", text: "يصل المنتج إلى شفة دخول الخرطوم من مخرج الصومعة أو القادوس أو الناقل." },
          { title: "الإنزال", text: "تُنزل وحدة الرفع الخرطوم حتى فتحة المركبة أو سطح المنتج." },
          { title: "تحميل متحكم به", text: "ينساب المنتج في خط المخاريط الداخلي ويحيط الغلاف الخارجي بالتدفق." },
          { title: "نهاية التعبئة", text: "يكشف حساس المستوى امتلاء الفوهة فيتوقف التلقيم ويُرفع الخرطوم." },
        ],
        auxLineLabel: "شفط الغبار",
        auxLine: [{ title: "الهواء المُزاح", text: "يُسحب الهواء المحمل بالغبار الخارج من المركبة عبر وصلة الخرطوم إلى نظام جمع الغبار." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في خرطوم التحميل",
          svgDesc: "خط المنتج: مخرج الصومعة أو القادوس، خرطوم التحميل التلسكوبي وفتحة تعبئة المركبة. الخط المساعد: شفط الهواء المحمل بالغبار المُزاح من المركبة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "صومعة / قادوس", sub: "نقطة التلقيم العلوية" }],
          drum: { title: "خرطوم التحميل", sub: "إنزال تلسكوبي وتحميل" },
          after: [{ title: "صهريج / شاحنة", sub: "فتحة تعبئة أو صندوق مفتوح" }],
          aux: {
            lane: "شفط الغبار",
            tone: "air",
            inputs: [],
            outputs: [{ title: "شفط الغبار", sub: "إلى نظام جمع الغبار" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام خرطوم التحميل",
        items: [
          {
            title: "تعبئة صهاريج المواد السائبة أسفل الصوامع",
            text: "تحميل المساحيق من أسفل الصومعة إلى صهاريج مغلقة، حيث تستقر الفوهة على فتحة الصهريج ويُشفط الهواء المُزاح.",
            imageAlt: "مقطورات صهاريج لنقل المساحيق السائبة",
            linkLabel: "أنظمة الصوامع",
          },
          {
            title: "تحميل الأسمدة",
            text: "تحميل الأسمدة الحبيبية من المخزن أو قادوس المنتج إلى الشاحنات، مع تقليل الغبار وتكسر الحبيبات بتقصير ارتفاع السقوط الحر.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "تحميل المعادن والمنتجات المغبرة",
            text: "تحميل الجير والرمل والمساحيق الشبيهة بالإسمنت والمعادن في المركبات، وتكون وصلة الشفط جزءًا من التصميم للمنتجات شديدة الغبار.",
            imageAlt: "قطع من الحجر الجيري",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "التحميل في المقطورات المفتوحة والأكوام",
            text: "تفريغ متحكم به في مقطورات مفتوحة دون فتحة مغلقة أو على كومة، مع إبقاء الفوهة قريبة من سطح المنتج للحد من الغبار.",
            imageAlt: "تفريغ مادة سائبة على كومة داخل مبنى بخرطوم تحميل",
            linkLabel: "أنظمة جمع الغبار",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع خراطيم التحميل حسب المشروع",
        intro:
          "تصمم PRO MAKINA خراطيم التحميل وفق المنتج المراد تحميله ونوع المركبة وفرق الارتفاع بين الوصلة العلوية وفتحة المركبة ومتطلبات التحكم في الغبار، مع اختيار بنية الغلاف وخط التدفق الداخلي ووحدة الرفع والفوهة والحساسات معًا.",
        highlights: ["غلاف خارجي وخط مخاريط داخلي", "رفع آلي وتحديد الموضع", "فوهة بحساس مستوى", "وصلة شفط الغبار"],
        figureAlt: "وحدة رفع آلية وغلاف الخرطوم ومخروط التفريغ مع قفص حساس المستوى",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية وقابلية تكوين الغبار." },
          { title: "المركبة والفتحة", text: "صهريج أو شاحنة أو مقطورة مفتوحة؛ مقاس فتحة التعبئة وموضعها." },
          { title: "الارتفاع والشوط", text: "ارتفاع الوصلة العلوية وارتفاع فتحة المركبة وحركة الخرطوم المطلوبة." },
          { title: "معدل التحميل", text: "معدل المنتج من المعدة العلوية ومقطع تدفق مناسب له." },
          { title: "الغبار والتحكم", text: "وصلة الشفط والمرشح القائم ولوحة التحكم اليدوية وإشارات الأتمتة." },
        ],
        dataNote: "يُحدَّد شوط الخرطوم وقطره ومعدل التحميل من بيانات المنتج والموقع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور خراطيم التحميل",
        captions: [
          "عناصر التدفق المخروطية داخل الغلاف وفتحة الشفط العلوية",
          "خرطوم تحميل منزَل على سطح المادة السائبة",
          "مخروط التفريغ مع حساس المستوى",
          "لوحة تحكم معلقة لرفع الخرطوم وإنزاله",
          "خراطيم تحميل أثناء التشغيل في منشأة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول خرطوم التحميل",
        items: [
          {
            question: "ما استخدام خرطوم التحميل؟",
            answer: "يُنزل المادة السائبة من مخرج الصومعة أو القادوس أو الناقل إلى الصهريج أو الشاحنة أو المقطورة المفتوحة داخل مسار مغلق، فيقلل الانسكاب وانتشار الغبار.",
          },
          {
            question: "كيف يُنزل الخرطوم ويُرفع؟",
            answer: "تُنزل وحدة رفع آلية الخرطوم حتى فتحة المركبة أو سطح المنتج وترفعه عند انتهاء التعبئة، ويمكن تشغيلها من لوحة يدوية معلقة أو من نظام الأتمتة.",
          },
          {
            question: "كيف يُتحكم في الغبار؟",
            answer: "يُسحب الهواء المحمل بالغبار المُزاح من المركبة أثناء التعبئة عبر وصلة الشفط على الخرطوم إلى نظام جمع الغبار، سواء كان مرشحًا قائمًا أو مرشحًا يُضاف ضمن المشروع.",
          },
          {
            question: "هل يزن خرطوم التحميل المنتج؟",
            answer: "لا. يوصل الخرطوم المنتج إلى المركبة، وتبدأ المعدة العلوية التدفق وتوقفه، ويُحدَّد الوزن المحمَّل بميزان جسري أو نظام وزن منفصل عند الحاجة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات ونوع المركبة وارتفاع الوصلة العلوية وفتحة المركبة ومعدل التحميل ومتطلبات شفط الغبار.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لخرطوم التحميل",
        text: "شاركنا منتجك ونوع المركبة وفرق الارتفاع عند نقطة التحميل، لنحدد معًا خرطوم التحميل المناسب.",
        mailSubject: "طلب عرض سعر: خرطوم تحميل",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات وقابلية تكوين الغبار", "نوع المركبة (صهريج، شاحنة، مقطورة مفتوحة)", "ارتفاع الوصلة العلوية وفتحة المركبة", "معدل التحميل", "متطلبات شفط الغبار والتحكم"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لخرطوم تحميل.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "نوع المركبة:",
          "فرق الارتفاع (م):",
          "معدل التحميل (طن/ساعة):",
          "شفط الغبار:",
        ],
      },
    },
  },
};
