import type { DrumPageConfig } from "../types";

// Zincirli konveyör: ürün fotoğraflarına göre kapalı gövdeli, paletli (sürüklemeli / redler tipi) zincirli konveyör.
// Özel sıcaklık veya aşınma dayanımı garanti edilmez; kapasite ve zincir hızı verilmez.
const img = (file: string) => `/images/konveyor zincirli/${file}`;

export const chainConveyorPage: DrumPageConfig = {
  key: "chainConveyor",
  group: "conveying",
  trSlug: "zincirli-konveyorler",
  mainImage: img("konveyorzinc15.jpg"),
  applications: [
    { image: img("konveyorzinc22.jpg"), link: "storageSystems" },
    { image: img("konveyorzinc4.jpg"), link: "chemicalProcess" },
    { image: img("konveyorzinc32.jpg"), link: "recycling" },
  ],
  figure: img("konveyorzinc1.jpg"),
  gallery: [
    img("konveyorzinc13.jpg"),
    img("konveyorzinc14.jpg"),
    img("konveyorzinc16.jpg"),
    img("konveyorzinc17.jpg"),
    img("konveyorzinc18.jpg"),
    img("konveyorzinc19.jpg"),
    img("konveyorzinc20.jpg"),
    img("konveyorzinc25.jpg"),
    img("konveyorzinc27.jpg"),
    img("konveyorzinc29.jpg"),
    img("konveyorzinc31.jpg"),
    img("konveyorzinc3.jpg"),
  ],
  sectors: ["chemicalProcess", "fertilizerPlants", "recycling"],
  resources: ["bucketElevator", "screwConveyor", "beltConveyor", "bunkersHoppers"],
  machines: ["storageSystems", "dustCollection", "dosingSystems", "screeningSystems"],
  texts: {
    tr: {
      meta: {
        title: "Zincirli Konveyör İmalatı | Kapalı Redler Konveyör | PRO MAKİNA",
        description:
          "Toz, granül ve dökme malzemeleri kapalı gövdede zincir ve paletlerle taşıyan zincirli (redler tipi) konveyör imalatı. Silo besleme ve proses transferi için.",
      },
      breadcrumbLabel: "Zincirli Konveyörler",
      h1: "Zincirli Konveyör – Kapalı Gövdeli Redler Tipi Dökme Taşıma",
      productCategory: "Kapalı Gövdeli Zincirli Konveyör",
      overview: {
        imageAlt: "Tesis çatısında kapalı gövdeli zincirli konveyör ve bakım platformu",
        tagline: "Kapalı Gövdeli Zincirli Konveyör",
        keyFacts: [
          { label: "Görev", value: "Kapalı gövdede dökme malzeme transferi" },
          { label: "Taşıyıcı", value: "Zincir ve paletler (sıyırıcılar)" },
          { label: "Güzergâh", value: "Yatay veya uygun eğimde hat" },
          { label: "Çıkış", value: "Tek veya çoklu tahliye ağzı" },
        ],
        title: "Kapalı Gövdede Kontrollü Dökme Malzeme Transferi",
        paragraphs: [
          "Zincirli konveyör, dökme malzemenin kapalı bir gövde içinde, zincire bağlı paletler (sıyırıcılar) tarafından sürüklenerek taşındığı ekipmandır. Malzeme gövdenin tabanında bir yatak hâlinde ilerler; zincir, baş kısımdaki tahrik dişlisi ile kuyruk kısmındaki gerdirme dişlisi arasında döner.",
          "Bantlı konveyörden farklı olarak malzeme açık bir bant üzerinde değil, kapalı bir oluk içinde hareket eder. Bu yapı tozlu ürünlerde sızdırmazlığı kolaylaştırır ve hat üzerinde birden fazla tahliye ağzı açılmasına olanak verir.",
          "Kapasite; gövde kesiti, zincir hızı ve malzemenin yığın yoğunluğuna göre belirlenir. Zincir tipi, palet malzemesi ve gövde aşınma yüzeyleri ise malzemenin aşındırıcılığı ve akış davranışına göre seçilir.",
        ],
        note: "Zincirli konveyörde zincir, dişliler ve gövde tabanı aşınan elemanlardır; malzemeye uygun aşınma yüzeyi ve gerdirme düzeni bakım aralıklarını doğrudan etkiler.",
      },
      process: {
        title: "Zincirli Konveyör Malzeme Akışı",
        intro:
          "Şema, zincirli konveyörün malzemeyi besleme ağzından tahliye ağzına kapalı gövde içinde taşıdığı tipik akışı gösterir.",
        note: "Hat üzerinde birden fazla tahliye ağzı varsa, seçilen ağız kapaklarla açılarak malzeme farklı silo veya bunkerlere yönlendirilebilir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme besleme", text: "Malzeme bunker, silo veya önceki ekipmandan besleme ağzına gelir." },
          { title: "Gövde içinde taşıma", text: "Zincire bağlı paletler malzemeyi gövde tabanı boyunca sürükler." },
          { title: "Tahliye", text: "Malzeme seçilen tahliye ağzından boşaltılır." },
          { title: "Zincir dönüşü", text: "Boş zincir gövdenin üst bölümünden kuyruk dişlisine geri döner." },
        ],
        flow: {
          svgTitle: "Zincirli konveyör malzeme akış şeması",
          svgDesc: "Malzeme hattı: besleme ağzı, kapalı gövdeli zincirli konveyör, tahliye ağzı, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme ağzı", sub: "Bunker veya silo çıkışı" }],
          drum: { title: "ZİNCİRLİ KONVEYÖR", sub: "kapalı gövde · zincir ve palet" },
          after: [
            { title: "Tahliye ağzı", sub: "Tek veya çoklu çıkış" },
            { title: "Sonraki ekipman", sub: "Silo, elevatör, proses" },
          ],
        },
      },
      applications: {
        title: "Zincirli Konveyör Uygulama Alanları",
        items: [
          {
            title: "Silo Besleme ve Dağıtım",
            text: "Silo üstünde veya altında, dökme ürünün birden fazla siloya dağıtılması ya da silolardan toplanması. Çoklu tahliye ağızları kapaklarla seçilebilir.",
            imageAlt: "Silo tesisinin çatısında kapalı zincirli konveyör hatları",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
          {
            title: "Toz ve İnce Taneli Ürünler",
            text: "Tozuma eğilimli ince taneli ürünlerin kapalı gövdede taşınması. Gövde sızdırmazlığı ve bakım kapakları ürüne göre tasarlanır.",
            imageAlt: "Zincirli konveyör gövdesinde toz hâlindeki ürün ve palet",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Biyokütle ve Yonga",
            text: "Ahşap yongası ve benzeri lifli, hafif dökme malzemelerin proses ekipmanlarına taşınması. Palet geometrisi ve gövde kesiti malzemenin akışına göre seçilir.",
            imageAlt: "Zincirli konveyörde turuncu paletler arasında ahşap yongası",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Zincirli Konveyör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA zincirli konveyörleri taşınacak malzeme, kapasite ve hat güzergâhına göre projelendirir. Gövde, zincir ve paletler, tahrik ve gerdirme grupları, besleme ve tahliye ağızları ile bakım kapakları birlikte tasarlanır.",
        highlights: ["Malzemeye göre zincir ve palet seçimi", "Kapalı ve sızdırmaz gövde", "Tahrik ve gerdirme dişlileri", "Çoklu tahliye ağzı seçeneği"],
        figureAlt: "Atölyede açık gövdeli zincirli konveyörde zincir ve paletler",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Malzeme", text: "Malzeme türü, tane boyutu, yığın yoğunluğu, nem ve aşındırıcılık." },
          { title: "Kapasite", text: "Saatlik taşıma kapasitesi ve çalışma süresi." },
          { title: "Güzergâh", text: "Hat uzunluğu, eğim, besleme ve tahliye ağızlarının konumu." },
          { title: "Zincir ve Gövde", text: "Zincir tipi, palet malzemesi, gövde kesiti ve aşınma yüzeyleri." },
          { title: "Tahrik ve Gerdirme", text: "Motor-redüktör, dişliler, gerdirme düzeni ve bakım erişimi." },
        ],
        dataNote: "Zincir hızı ve tahrik gücü malzeme ve kapasite verisiyle hesaplanır; sıcak veya aşındırıcı ürünlerde uygunluk proje bazında ayrıca değerlendirilir.",
      },
      gallery: {
        title: "Zincirli Konveyör Fotoğraf Galerisi",
        captions: [
          "Tahrik grupları monte edilmiş zincirli konveyör gövdeleri",
          "Bina dışında destek ayaklı zincirli konveyör",
          "Çatı üstünde bakım yolu olan zincirli konveyör",
          "Silo içine uzanan zincirli konveyör",
          "Zincirli konveyör tahrik grubu",
          "Silo üstünde zincirli konveyör hattı",
          "Binaya çıkan eğimli zincirli konveyör",
          "Gövde içinde zincir ve paletler",
          "Proses binasında zincirli konveyör",
          "Silo altında zincirli konveyör hattı",
          "Zincirli konveyörün vinçle montajı",
          "Zincirli konveyörde zincir ve dişli bölgesi",
        ],
      },
      faq: {
        title: "Zincirli Konveyör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Zincirli konveyör ile bantlı konveyör arasındaki fark nedir?",
            answer:
              "Bantlı konveyörde malzeme açık bir bant üzerinde taşınır. Zincirli konveyörde ise malzeme kapalı bir gövdede, zincire bağlı paletlerle sürüklenir; bu da toz kontrolünü ve çoklu tahliyeyi kolaylaştırır.",
          },
          {
            question: "Zincirli konveyör eğimli çalışabilir mi?",
            answer:
              "Uygun malzemelerde eğimli hatlar tasarlanabilir. Eğim açısı malzemenin akış davranışına ve gövde tasarımına göre belirlenir.",
          },
          {
            question: "Birden fazla noktaya boşaltma yapılabilir mi?",
            answer:
              "Evet. Hat üzerinde birden fazla tahliye ağzı açılabilir ve kapaklarla hangi noktaya boşaltma yapılacağı seçilebilir.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer:
              "Zincir, paletler, dişliler ve gövde tabanı aşınan elemanlardır. Aşınma yüzeyi malzemesi ve gerdirme düzeni, ürünün aşındırıcılığına göre seçilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Malzeme türü, tane boyutu, yığın yoğunluğu, ürün sıcaklığı, saatlik kapasite, hat uzunluğu ve eğim ile besleme ve tahliye noktaları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Zincirli konveyör için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve hat güzergâhınıza göre zincirli konveyörü ve tahliye noktalarını birlikte netleştirelim.",
        mailSubject: "Zincirli Konveyör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve tane boyutu",
          "Yığın yoğunluğu ve ürün sıcaklığı",
          "Saatlik kapasite (ton/saat)",
          "Hat uzunluğu ve eğim",
          "Besleme ve tahliye noktaları",
          "Toz sızdırmazlığı gereksinimi",
        ],
        inquiryLines: [
          "Merhaba, zincirli konveyör için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Tane boyutu:",
          "Ürün sıcaklığı:",
          "Kapasite (ton/saat):",
          "Hat uzunluğu (m) / eğim:",
          "Tahliye noktası sayısı:",
        ],
      },
    },
    en: {
      meta: {
        title: "Chain Conveyor | Enclosed Drag Chain Conveyor",
        description:
          "Enclosed drag chain conveyors that move powders, granules and bulk solids with chain and flights. For silo feeding, distribution and process transfer.",
      },
      breadcrumbLabel: "Chain Conveyor",
      h1: "Chain Conveyor – Enclosed Drag Chain Conveyor for Bulk Materials",
      productCategory: "Enclosed Drag Chain Conveyor",
      overview: {
        imageAlt: "Enclosed chain conveyor with maintenance platform on a plant roof",
        tagline: "Enclosed Drag Chain Conveyor",
        keyFacts: [
          { label: "Task", value: "Enclosed bulk material transfer" },
          { label: "Conveying element", value: "Chain with flights (scrapers)" },
          { label: "Route", value: "Horizontal or suitably inclined" },
          { label: "Outlets", value: "Single or multiple discharge gates" },
        ],
        title: "Controlled Bulk Transfer in an Enclosed Casing",
        paragraphs: [
          "A chain conveyor moves bulk material inside an enclosed casing, dragged along by flights (scrapers) attached to the chain. The material travels as a bed along the casing floor; the chain runs between the drive sprocket at the head and the take-up sprocket at the tail.",
          "Unlike a belt conveyor, the material does not ride on an open belt but moves within a closed trough. This makes dust sealing easier with dusty products and allows several discharge gates along the line.",
          "Capacity is determined by casing cross-section, chain speed and bulk density. Chain type, flight material and casing wear surfaces are selected according to the abrasiveness and flow behaviour of the material.",
        ],
        note: "Chain, sprockets and casing floor are the wear parts of a chain conveyor; wear liners and a take-up suited to the material directly affect maintenance intervals.",
      },
      process: {
        title: "Chain Conveyor Material Flow",
        intro: "The diagram shows the typical flow in which the chain conveyor carries material from the inlet to the discharge gate inside the enclosed casing.",
        note: "Where the line has several discharge gates, the selected gate is opened to direct material to different silos or bins.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material feeding", text: "Material enters the inlet from a hopper, silo or upstream equipment." },
          { title: "Transport in the casing", text: "Flights on the chain drag the material along the casing floor." },
          { title: "Discharge", text: "Material leaves through the selected discharge gate." },
          { title: "Chain return", text: "The empty chain returns in the upper part of the casing to the tail sprocket." },
        ],
        flow: {
          svgTitle: "Chain conveyor material flow diagram",
          svgDesc: "Material line: inlet, enclosed chain conveyor, discharge gate, downstream equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Inlet", sub: "Hopper or silo outlet" }],
          drum: { title: "CHAIN CONVEYOR", sub: "enclosed casing · chain and flights" },
          after: [
            { title: "Discharge gate", sub: "Single or multiple outlets" },
            { title: "Next equipment", sub: "Silo, elevator, process" },
          ],
        },
      },
      applications: {
        title: "Chain Conveyor Applications",
        items: [
          {
            title: "Silo Feeding and Distribution",
            text: "Distributing bulk product to several silos or collecting it from silos, above or below the silo row. Multiple discharge gates can be selected with slide gates.",
            imageAlt: "Enclosed chain conveyor lines on the roof of a silo plant",
            linkLabel: "Storage and Feeding Systems",
          },
          {
            title: "Powders and Fine Products",
            text: "Transporting fine, dust-prone products in an enclosed casing. Casing sealing and inspection covers are designed for the product.",
            imageAlt: "Powdery product and flight inside a chain conveyor casing",
            linkLabel: "Chemical Process Industry",
          },
          {
            title: "Biomass and Wood Chips",
            text: "Conveying wood chips and similar light, fibrous bulk materials to process equipment. Flight geometry and casing section are chosen for the material flow.",
            imageAlt: "Wood chips between orange flights in a chain conveyor",
            linkLabel: "Recycling and Waste Management",
          },
        ],
      },
      design: {
        title: "Custom Chain Conveyor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers chain conveyors around the material, capacity and route. Casing, chain and flights, drive and take-up units, inlets, discharge gates and inspection covers are designed together.",
        highlights: ["Chain and flights matched to material", "Enclosed, sealed casing", "Drive and take-up sprockets", "Multiple discharge gate option"],
        figureAlt: "Chain and flights in an open chain conveyor casing in a workshop",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Material", text: "Material type, particle size, bulk density, moisture and abrasiveness." },
          { title: "Capacity", text: "Hourly conveying capacity and operating hours." },
          { title: "Route", text: "Conveyor length, inclination and position of inlets and outlets." },
          { title: "Chain and Casing", text: "Chain type, flight material, casing section and wear surfaces." },
          { title: "Drive and Take-up", text: "Gear motor, sprockets, take-up arrangement and maintenance access." },
        ],
        dataNote: "Chain speed and drive power are calculated from material and capacity data; suitability for hot or abrasive products is assessed separately for each project.",
      },
      gallery: {
        title: "Chain Conveyor Photo Gallery",
        captions: [
          "Chain conveyor casings with drive units fitted",
          "Chain conveyor on support legs outside a building",
          "Rooftop chain conveyor with maintenance walkway",
          "Chain conveyor reaching into a silo",
          "Chain conveyor drive unit",
          "Chain conveyor line above silos",
          "Inclined chain conveyor rising to a building",
          "Chain and flights inside the casing",
          "Chain conveyor in a process building",
          "Chain conveyor line below silos",
          "Crane installation of a chain conveyor",
          "Chain and sprocket area of a chain conveyor",
        ],
      },
      faq: {
        title: "Chain Conveyor FAQ",
        items: [
          {
            question: "What is the difference between a chain conveyor and a belt conveyor?",
            answer:
              "On a belt conveyor material rides on an open belt. In a chain conveyor it is dragged by flights on a chain inside an enclosed casing, which makes dust control and multiple discharge points easier.",
          },
          {
            question: "Can a chain conveyor run inclined?",
            answer:
              "Inclined lines can be designed for suitable materials. The angle depends on the flow behaviour of the material and the casing design.",
          },
          {
            question: "Can material be discharged at several points?",
            answer: "Yes. Several discharge gates can be provided along the line, and slide gates select where the material is discharged.",
          },
          {
            question: "Which parts wear?",
            answer:
              "Chain, flights, sprockets and the casing floor are wear parts. Wear liner material and take-up arrangement are selected according to how abrasive the product is.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Material type, particle size, bulk density, product temperature, hourly capacity, conveyor length and inclination, and the inlet and discharge points.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a chain conveyor",
        text: "Share your material, capacity and route, and we will define the chain conveyor and its discharge points together with you.",
        mailSubject: "Chain Conveyor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and particle size",
          "Bulk density and product temperature",
          "Hourly capacity (t/h)",
          "Conveyor length and inclination",
          "Inlet and discharge points",
          "Dust sealing requirement",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a chain conveyor.",
          "",
          "Material:",
          "Particle size:",
          "Product temperature:",
          "Capacity (t/h):",
          "Length (m) / inclination:",
          "Number of discharge points:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Цепной скребковый конвейер (редлер) | Закрытый короб",
        description:
          "Цепные скребковые конвейеры для транспортировки порошков, гранул и сыпучих материалов в закрытом коробе. Для загрузки силосов и передачи продукта.",
      },
      breadcrumbLabel: "Цепной конвейер",
      h1: "Цепной конвейер – скребковый конвейер в закрытом коробе (редлер)",
      productCategory: "Цепной скребковый конвейер",
      overview: {
        imageAlt: "Закрытый цепной конвейер с площадкой обслуживания на кровле",
        tagline: "Цепной скребковый конвейер",
        keyFacts: [
          { label: "Задача", value: "Закрытая транспортировка сыпучих материалов" },
          { label: "Тяговый орган", value: "Цепь со скребками" },
          { label: "Трасса", value: "Горизонтальная или с допустимым наклоном" },
          { label: "Выгрузка", value: "Один или несколько выпускных патрубков" },
        ],
        title: "Контролируемая транспортировка в закрытом коробе",
        paragraphs: [
          "Цепной конвейер перемещает сыпучий материал внутри закрытого короба с помощью скребков, закреплённых на цепи. Материал движется слоем по днищу короба; цепь обегает приводную звёздочку в головной части и натяжную звёздочку в хвостовой.",
          "В отличие от ленточного конвейера, материал движется не на открытой ленте, а в закрытом жёлобе. Это упрощает герметизацию при пылящих продуктах и позволяет выполнить несколько выпускных патрубков по длине трассы.",
          "Производительность определяется сечением короба, скоростью цепи и насыпной плотностью. Тип цепи, материал скребков и износостойкие поверхности короба подбираются по абразивности и сыпучести материала.",
        ],
        note: "Цепь, звёздочки и днище короба — изнашиваемые элементы; подходящая футеровка и натяжное устройство напрямую влияют на межремонтные интервалы.",
      },
      process: {
        title: "Движение материала в цепном конвейере",
        intro: "Схема показывает типовой поток: конвейер перемещает материал от загрузочного до выпускного патрубка внутри закрытого короба.",
        note: "При нескольких выпускных патрубках нужный патрубок открывается задвижкой, направляя материал в разные силосы или бункеры.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача материала", text: "Материал поступает в загрузочный патрубок из бункера, силоса или оборудования." },
          { title: "Транспортировка в коробе", text: "Скребки на цепи перемещают материал по днищу короба." },
          { title: "Выгрузка", text: "Материал выходит через выбранный выпускной патрубок." },
          { title: "Возврат цепи", text: "Порожняя цепь возвращается в верхней части короба к натяжной звёздочке." },
        ],
        flow: {
          svgTitle: "Схема движения материала в цепном конвейере",
          svgDesc: "Линия материала: загрузочный патрубок, цепной конвейер в закрытом коробе, выпускной патрубок, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Бункер или силос" }],
          drum: { title: "ЦЕПНОЙ КОНВЕЙЕР", sub: "закрытый короб · цепь и скребки" },
          after: [
            { title: "Выгрузка", sub: "Один или несколько" },
            { title: "Далее", sub: "Силос, элеватор, процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения цепного конвейера",
        items: [
          {
            title: "Загрузка и распределение по силосам",
            text: "Распределение сыпучего продукта по нескольким силосам или сбор из силосов — над или под ними. Выпускные патрубки выбираются задвижками.",
            imageAlt: "Закрытые цепные конвейеры на кровле силосного комплекса",
            linkLabel: "Системы хранения и подачи",
          },
          {
            title: "Порошки и мелкодисперсные продукты",
            text: "Транспортировка мелких пылящих продуктов в закрытом коробе. Уплотнения короба и смотровые люки проектируются под продукт.",
            imageAlt: "Порошкообразный продукт и скребок внутри короба",
            linkLabel: "Химическая промышленность",
          },
          {
            title: "Биомасса и щепа",
            text: "Подача древесной щепы и подобных лёгких волокнистых материалов к оборудованию. Форма скребков и сечение короба подбираются по сыпучести материала.",
            imageAlt: "Древесная щепа между оранжевыми скребками конвейера",
            linkLabel: "Переработка и обращение с отходами",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление цепных конвейеров",
        intro:
          "PRO MAKINA проектирует цепные конвейеры исходя из материала, производительности и трассы. Короб, цепь и скребки, приводная и натяжная станции, загрузочные и выпускные патрубки, смотровые люки разрабатываются совместно.",
        highlights: ["Цепь и скребки под материал", "Закрытый герметичный короб", "Приводная и натяжная звёздочки", "Несколько выпускных патрубков"],
        figureAlt: "Цепь и скребки в открытом коробе цепного конвейера в цехе",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Материал", text: "Вид, крупность, насыпная плотность, влажность и абразивность." },
          { title: "Производительность", text: "Часовая производительность и режим работы." },
          { title: "Трасса", text: "Длина, угол наклона, расположение патрубков." },
          { title: "Цепь и короб", text: "Тип цепи, материал скребков, сечение короба и футеровка." },
          { title: "Привод и натяжение", text: "Мотор-редуктор, звёздочки, натяжное устройство и доступ." },
        ],
        dataNote: "Скорость цепи и мощность привода рассчитываются по данным материала и производительности; пригодность для горячих или абразивных продуктов оценивается для каждого проекта отдельно.",
      },
      gallery: {
        title: "Фотогалерея цепных конвейеров",
        captions: [
          "Короба цепных конвейеров с установленными приводами",
          "Цепной конвейер на опорах у здания",
          "Цепной конвейер на кровле с проходом",
          "Цепной конвейер, заходящий в силос",
          "Приводная станция цепного конвейера",
          "Линия цепного конвейера над силосами",
          "Наклонный цепной конвейер к зданию",
          "Цепь и скребки внутри короба",
          "Цепной конвейер в производственном корпусе",
          "Линия цепного конвейера под силосами",
          "Монтаж цепного конвейера краном",
          "Зона цепи и звёздочки",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о цепном конвейере",
        items: [
          {
            question: "Чем цепной конвейер отличается от ленточного?",
            answer:
              "В ленточном конвейере материал лежит на открытой ленте. В цепном он перемещается скребками на цепи внутри закрытого короба, что упрощает пылеподавление и выгрузку в нескольких точках.",
          },
          {
            question: "Может ли цепной конвейер работать с наклоном?",
            answer: "Для подходящих материалов возможны наклонные трассы. Угол зависит от сыпучести материала и конструкции короба.",
          },
          {
            question: "Можно ли выгружать в нескольких точках?",
            answer: "Да. По длине трассы можно предусмотреть несколько выпускных патрубков и выбирать точку выгрузки задвижками.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Цепь, скребки, звёздочки и днище короба. Материал футеровки и натяжное устройство выбираются по абразивности продукта.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид материала, крупность, насыпная плотность, температура продукта, часовая производительность, длина и угол трассы, точки загрузки и выгрузки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на цепной конвейер",
        text: "Сообщите материал, производительность и трассу — вместе определим конвейер и точки выгрузки.",
        mailSubject: "Запрос предложения: цепной конвейер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и крупность",
          "Насыпная плотность и температура продукта",
          "Часовая производительность (т/ч)",
          "Длина и угол наклона трассы",
          "Точки загрузки и выгрузки",
          "Требования к герметичности",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на цепной конвейер.",
          "",
          "Материал:",
          "Крупность:",
          "Температура продукта:",
          "Производительность (т/ч):",
          "Длина (м) / угол:",
          "Количество точек выгрузки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الناقل السلسلي | ناقل كاشط مغلق للمواد السائبة",
        description:
          "ناقلات سلسلية كاشطة مغلقة تنقل المساحيق والحبيبات والمواد السائبة بالسلسلة والكاشطات. لتلقيم الصوامع والتوزيع ونقل المنتج بين مراحل العملية.",
      },
      breadcrumbLabel: "الناقل السلسلي",
      h1: "الناقل السلسلي – ناقل كاشط مغلق للمواد السائبة",
      productCategory: "ناقل سلسلي كاشط مغلق",
      overview: {
        imageAlt: "ناقل سلسلي مغلق مع منصة صيانة على سطح منشأة",
        tagline: "ناقل سلسلي كاشط مغلق",
        keyFacts: [
          { label: "المهمة", value: "نقل مغلق للمواد السائبة" },
          { label: "عنصر النقل", value: "سلسلة مع كاشطات" },
          { label: "المسار", value: "أفقي أو بميل مناسب" },
          { label: "المخارج", value: "مخرج تفريغ واحد أو عدة مخارج" },
        ],
        title: "نقل مضبوط للمواد السائبة داخل غلاف مغلق",
        paragraphs: [
          "الناقل السلسلي ينقل المادة السائبة داخل غلاف مغلق بواسطة كاشطات مثبتة على السلسلة. تتحرك المادة كطبقة على أرضية الغلاف، وتدور السلسلة بين ترس الإدارة في المقدمة وترس الشد في المؤخرة.",
          "وعلى خلاف الناقل الحزامي لا تُحمل المادة على سير مكشوف بل تتحرك داخل مجرى مغلق، ما يسهّل إحكام الغبار مع المنتجات المغبرة ويتيح عدة مخارج تفريغ على طول الخط.",
          "تُحدَّد السعة بمقطع الغلاف وسرعة السلسلة والكثافة الظاهرية. ويُختار نوع السلسلة ومادة الكاشطات وأسطح التآكل في الغلاف وفق كشط المادة وسلوك انسيابها.",
        ],
        note: "السلسلة والتروس وأرضية الغلاف هي أجزاء التآكل في الناقل السلسلي؛ واختيار بطانة ووحدة شد مناسبتين للمادة يؤثر مباشرة في فترات الصيانة.",
      },
      process: {
        title: "تدفق المادة في الناقل السلسلي",
        intro: "يوضح المخطط التدفق النموذجي الذي ينقل فيه الناقل السلسلي المادة من فتحة التلقيم إلى مخرج التفريغ داخل الغلاف المغلق.",
        note: "عند وجود عدة مخارج تفريغ على الخط يُفتح المخرج المختار لتوجيه المادة إلى صوامع أو قواديس مختلفة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة", text: "تدخل المادة فتحة التلقيم من قادوس أو صومعة أو معدة سابقة." },
          { title: "النقل داخل الغلاف", text: "تسحب الكاشطات المثبتة على السلسلة المادة على أرضية الغلاف." },
          { title: "التفريغ", text: "تخرج المادة من مخرج التفريغ المختار." },
          { title: "عودة السلسلة", text: "تعود السلسلة الفارغة في الجزء العلوي من الغلاف إلى ترس الشد." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الناقل السلسلي",
          svgDesc: "خط المادة: فتحة التلقيم، الناقل السلسلي المغلق، مخرج التفريغ، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "فتحة التلقيم", sub: "قادوس أو مخرج صومعة" }],
          drum: { title: "الناقل السلسلي", sub: "غلاف مغلق · سلسلة وكاشطات" },
          after: [
            { title: "مخرج التفريغ", sub: "مخرج واحد أو أكثر" },
            { title: "المعدة التالية", sub: "صومعة، رافع، عملية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الناقل السلسلي",
        items: [
          {
            title: "تلقيم الصوامع والتوزيع",
            text: "توزيع المنتج السائب على عدة صوامع أو تجميعه منها، فوق صف الصوامع أو أسفله. ويمكن اختيار مخارج التفريغ بالبوابات المنزلقة.",
            imageAlt: "خطوط ناقلات سلسلية مغلقة على سطح منشأة صوامع",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
          {
            title: "المساحيق والمنتجات الناعمة",
            text: "نقل المنتجات الناعمة القابلة لإثارة الغبار داخل غلاف مغلق، مع تصميم إحكام الغلاف وأغطية الفحص وفق المنتج.",
            imageAlt: "منتج مسحوق وكاشطة داخل غلاف ناقل سلسلي",
            linkLabel: "الصناعات الكيميائية",
          },
          {
            title: "الكتلة الحيوية ورقائق الخشب",
            text: "نقل رقائق الخشب والمواد الليفية الخفيفة المماثلة إلى معدات العملية، مع اختيار شكل الكاشطات ومقطع الغلاف وفق انسياب المادة.",
            imageAlt: "رقائق خشب بين كاشطات برتقالية في ناقل سلسلي",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع ناقلات سلسلية مخصصة",
        intro:
          "تصمم PRO MAKINA الناقلات السلسلية وفق المادة والسعة ومسار الخط. ويُصمَّم الغلاف والسلسلة والكاشطات ووحدتا الإدارة والشد وفتحات التلقيم ومخارج التفريغ وأغطية الفحص معًا.",
        highlights: ["سلسلة وكاشطات مطابقة للمادة", "غلاف مغلق محكم", "ترسا الإدارة والشد", "إمكانية عدة مخارج تفريغ"],
        figureAlt: "سلسلة وكاشطات داخل غلاف ناقل سلسلي مفتوح في ورشة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة", text: "نوع المادة وحجم الجسيمات والكثافة الظاهرية والرطوبة والكشط." },
          { title: "السعة", text: "سعة النقل بالساعة وساعات التشغيل." },
          { title: "المسار", text: "طول الخط والميل ومواقع فتحات التلقيم والتفريغ." },
          { title: "السلسلة والغلاف", text: "نوع السلسلة ومادة الكاشطات ومقطع الغلاف وأسطح التآكل." },
          { title: "الإدارة والشد", text: "المحرك المخفض والتروس ووحدة الشد وسهولة الصيانة." },
        ],
        dataNote: "تُحسب سرعة السلسلة وقدرة الإدارة من بيانات المادة والسعة، وتُقيَّم ملاءمة المنتجات الساخنة أو الكاشطة لكل مشروع على حدة.",
      },
      gallery: {
        title: "معرض صور الناقلات السلسلية",
        captions: [
          "أغلفة ناقلات سلسلية مركّب عليها وحدات الإدارة",
          "ناقل سلسلي على دعامات خارج مبنى",
          "ناقل سلسلي على السطح مع ممر صيانة",
          "ناقل سلسلي يمتد داخل صومعة",
          "وحدة إدارة ناقل سلسلي",
          "خط ناقل سلسلي فوق الصوامع",
          "ناقل سلسلي مائل يصعد إلى مبنى",
          "السلسلة والكاشطات داخل الغلاف",
          "ناقل سلسلي في مبنى العملية",
          "خط ناقل سلسلي أسفل الصوامع",
          "تركيب ناقل سلسلي بالرافعة",
          "منطقة السلسلة والترس",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الناقل السلسلي",
        items: [
          {
            question: "ما الفرق بين الناقل السلسلي والناقل الحزامي؟",
            answer:
              "في الناقل الحزامي تُحمل المادة على سير مكشوف، أما في الناقل السلسلي فتُسحب بالكاشطات داخل غلاف مغلق، ما يسهّل التحكم في الغبار والتفريغ في عدة نقاط.",
          },
          {
            question: "هل يعمل الناقل السلسلي بميل؟",
            answer: "يمكن تصميم خطوط مائلة للمواد المناسبة، وتعتمد زاوية الميل على سلوك انسياب المادة وتصميم الغلاف.",
          },
          {
            question: "هل يمكن التفريغ في عدة نقاط؟",
            answer: "نعم، يمكن توفير عدة مخارج تفريغ على طول الخط واختيار نقطة التفريغ بالبوابات المنزلقة.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "السلسلة والكاشطات والتروس وأرضية الغلاف، وتُختار مادة البطانة ووحدة الشد وفق كشط المنتج.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المادة وحجم الجسيمات والكثافة الظاهرية وحرارة المنتج والسعة بالساعة وطول الخط وميله ونقاط التلقيم والتفريغ.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لناقل سلسلي",
        text: "شاركنا المادة والسعة ومسار الخط، لنحدد معًا الناقل السلسلي ونقاط التفريغ.",
        mailSubject: "طلب عرض سعر: ناقل سلسلي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وحجم الجسيمات",
          "الكثافة الظاهرية وحرارة المنتج",
          "السعة بالساعة (طن/ساعة)",
          "طول الخط والميل",
          "نقاط التلقيم والتفريغ",
          "متطلبات إحكام الغبار",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لناقل سلسلي.",
          "",
          "المادة:",
          "حجم الجسيمات:",
          "حرارة المنتج:",
          "السعة (طن/ساعة):",
          "الطول (م) / الميل:",
          "عدد نقاط التفريغ:",
        ],
      },
    },
  },
};
