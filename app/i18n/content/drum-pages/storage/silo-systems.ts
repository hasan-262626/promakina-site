import type { DrumPageConfig } from "../types";

// Silo sistemleri: dökme ürünlerin stok veya proses amaçlı depolanması (bunker/teremi değildir).
// Havalandırma pedi, vibro, akışkanlaştırma, load-cell veya karıştırıcı standart sunulmaz; tonaj, hacim veya sac kalınlığı
// verilmez. Gövde malzemesi doğrulanmadığından "çelik silo" ifadesi kullanılmaz. Görsellerin lisans kaydı yok;
// silo5 (silo1 ile aynı) ve kapsamı belirsiz silo7, 9, 11, 12, 17, 6 galeride kullanılmadı.
const img = (file: string) => `/images/silo/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;

export const siloSystemsPage: DrumPageConfig = {
  key: "siloSystems",
  group: "storageSystems",
  trSlug: "silo-sistemleri",
  mainImage: img("silo1.jpg"),
  applications: [
    { image: dry("granul-gubre.webp"), link: "fertilizerPlants" },
    { image: dry("kirec-tasi.webp"), link: "mining" },
    { image: dry("silis-kumu.webp"), link: "rotaryDryer" },
  ],
  figure: img("silo14.jpg"),
  gallery: [img("silo2.jpg"), img("silo3.jpg"), img("silo4.jpg"), img("silo10.jpg"), img("silo13.jpg"), img("silo15.jpg"), img("silo16.jpg"), img("silo8.jpg")],
  sectors: ["fertilizerPlants", "mining", "chemicalProcess"],
  resources: ["bunkersHoppers", "teremiHopper", "dosingSystems", "storageSystems"],
  machines: ["conveying", "dosingSystems", "dustCollection", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Silo İmalatı | Endüstriyel Silo Sistemleri | PRO MAKİNA",
        description:
          "Gübre, mineral, kum ve dökme ürünler için endüstriyel silo sistemleri. Geometri, boşaltma ve seviye takibi ürünün akış davranışına göre projelendirilir.",
      },
      breadcrumbLabel: "Silo Sistemleri",
      h1: "Silo Sistemleri – Dökme Ürünlerin Kontrollü Depolanması",
      productCategory: "Endüstriyel Silo",
      overview: {
        imageAlt: "Kova elevatörüyle beslenen, taşıyıcı konstrüksiyonlu yüksek silo",
        tagline: "Silo Sistemleri",
        keyFacts: [
          { label: "Görev", value: "Dökme ürünün stok veya proses amaçlı depolanması" },
          { label: "Geometri", value: "Silindirik gövde ve konik taban" },
          { label: "Boşaltma", value: "Koni altından kontrollü çıkış" },
          { label: "İzleme", value: "Seviye ölçümü; ek donanım projeye göre" },
        ],
        title: "Dökme Ürünlerin Güvenli ve Akış Uyumlu Depolanması",
        paragraphs: [
          "Silo sistemleri, toz veya granül dökme ürünlerin üretim öncesi hammadde stoğu, proses ara stoğu veya sevkiyat öncesi ürün stoğu olarak depolanmasını sağlar. Ürün üstten elevatör, konveyör veya pnömatik hatla beslenir ve konik tabandan ihtiyaç duyulduğunda boşaltılır.",
          "Silonun güvenli çalışması büyük ölçüde ürünün akış davranışına bağlıdır. Yığın yoğunluğu, tane boyutu, nem, akışkanlık ve aşındırıcılık; konik taban açısını, çıkış ağzı ölçüsünü ve boşaltma ekipmanını belirler. Yanlış geometride köprüleşme, kemerleşme veya ürünün yalnızca ortadan akması (huni akışı) gibi sorunlar görülebilir.",
          "Seviye ölçümü, havalandırma ve toz kontrolü silonun temel yardımcı donanımlarıdır. Load-cell tartımı, akış yardımcıları veya vibrasyon gibi ekipmanlar ise ürün ve proses ihtiyacına göre değerlendirilir.",
        ],
        note: "Silo, uzun süreli ve yüksek hacimli depolama içindir. Kısa süreli tamponlama ve besleme için bunker ve hazneler, kamyondan ürün alımı için teremi bunkeri kullanılır.",
      },
      process: {
        title: "Silo Sistemi Proses Akışı",
        intro:
          "Şema, ürünün kabul edilip siloya beslendiği, kontrollü depolandığı, seviyesinin izlendiği ve talebe göre koni altından boşaltılarak sonraki ekipmana aktarıldığı akışı gösterir. Elevatör, konveyör ve dozaj ekipmanları ayrı makinelerdir.",
        note: "Konik taban açısı ve çıkış ağzı, ürünün akış testine veya bilinen akış özelliklerine göre seçilir; bu seçim boşaltmanın kararlılığını belirler.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Ürün kabulü ve besleme", text: "Ürün elevatör, konveyör veya pnömatik hatla silonun üstünden beslenir." },
          { title: "Kontrollü depolama", text: "Ürün, akış davranışına göre tasarlanmış gövdede depolanır." },
          { title: "Seviye takibi", text: "Seviye ölçümü dolum ve boşaltmanın kontrollü yönetilmesini sağlar." },
          { title: "Kontrollü boşaltma", text: "Ürün koni altındaki çıkıştan helezon, konveyör veya dozaj ekipmanına aktarılır." },
        ],
        auxLineLabel: "Havalandırma ve toz kontrolü",
        auxLine: [{ title: "Havalandırma", text: "Dolum sırasında yer değiştiren hava, gerekirse filtre üzerinden atmosfere verilir." }],
        flow: {
          svgTitle: "Silo sistemi proses akış şeması",
          svgDesc: "Ürün hattı: ürün kabulü, silo, koni altı boşaltma ve sonraki ekipman. Yardımcı hat: havalandırma ve toz kontrolü.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Ürün kabulü", sub: "Elevatör / konveyör" }],
          drum: { title: "SİLO", sub: "kontrollü depolama" },
          after: [
            { title: "Boşaltma", sub: "Koni altı çıkış" },
            { title: "Sonraki ekipman", sub: "Dozaj / transfer" },
          ],
          aux: {
            lane: "HAVALANDIRMA VE TOZ KONTROLÜ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Havalandırma", sub: "Filtre bağlantısı" }],
          },
        },
      },
      applications: {
        title: "Silo Sistemi Uygulama Alanları",
        items: [
          {
            title: "Gübre Depolama",
            text: "Granül gübre ve gübre hammaddelerinin üretim ve sevkiyat öncesi depolanması. Higroskopik ürünlerde nem kontrolü ve topaklanma riski tasarımda dikkate alınır.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Mineral ve Toz Hammadde",
            text: "Kireç taşı ve benzeri minerallerle toz hammaddelerin proses öncesi stoklanması. Köprüleşme eğilimli tozlarda koni açısı ve çıkış ağzı özellikle önemlidir.",
            imageAlt: "Kırılmış kireç taşı parçaları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kum ve Granül Ürün",
            text: "Kurutulmuş kum gibi serbest akan granül ürünlerin ara stoğu. Aşındırıcı ürünlerde çıkış bölgesi ve boşaltma ekipmanı aşınmaya karşı değerlendirilir.",
            imageAlt: "Açık renkli, ince taneli silis kumu",
            linkLabel: "Kurutma Tamburu",
          },
        ],
      },
      design: {
        title: "Projeye Özel Silo Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA silo sistemlerini depolanacak ürünün özellikleri, depolama miktarı, akış davranışı ve saha koşullarına göre projelendirir. Gövde ve konik taban geometrisi, dolum ve boşaltma bağlantıları, seviye ölçümü, havalandırma ve taşıyıcı konstrüksiyon birlikte tasarlanır.",
        highlights: ["Akış davranışına göre koni geometrisi", "Dolum ve boşaltma bağlantıları", "Seviye ölçümü ve havalandırma", "Saha yüklerine göre taşıyıcı konstrüksiyon"],
        figureAlt: "Konik taban çıkışına bağlı helezonla boşaltılan silo",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, nem ve aşındırıcılık." },
          { title: "Depolama Miktarı", text: "Gerekli depolama kapasitesi ve yığın yoğunluğu." },
          { title: "Geometri", text: "Gövde çapı ve yüksekliği, koni açısı ve çıkış ağzı." },
          { title: "Akış Davranışı", text: "Akışkanlık, köprüleşme riski ve gerekiyorsa akış yardımcıları." },
          { title: "Boşaltma ve Saha", text: "Boşaltma ekipmanı, konstrüksiyon, saha yükleri ve montaj." },
        ],
        dataNote: "Silo hacmi, ölçüleri ve sac kalınlıkları ürün ve saha verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Silo Sistemleri Fotoğraf Galerisi",
        captions: [
          "Çelik konstrüksiyon üzerinde silo grubu",
          "Rıhtım yanında konumlanmış silo grubu",
          "Bina bitişiğinde yüksek silolar ve kamyon yükleme alanı",
          "Kaplamalı silo grubu ve elevatör",
          "Vinçle montaj aşamasındaki silolar",
          "Taşıyıcı ayaklar üzerinde konik tabanlı silo",
          "Vinçle yerine yerleştirilen silo gövdesi",
          "Kapalı alanda konik tabanlı silolar",
        ],
      },
      faq: {
        title: "Silo Sistemleri Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Silo ile bunker arasındaki fark nedir?",
            answer: "Silo, ürünün uzun süreli ve yüksek hacimli depolanması içindir. Bunker ve hazneler ise kısa süreli tamponlama ve sonraki ekipmanı besleme amacıyla kullanılır.",
          },
          {
            question: "Konik taban açısı neden önemlidir?",
            answer: "Koni açısı ve çıkış ağzı ölçüsü, ürünün düzenli akmasını belirler. Yanlış seçimde köprüleşme, kemerleşme veya düzensiz boşaltma görülebilir.",
          },
          {
            question: "Her siloda load-cell veya vibrasyon var mıdır?",
            answer: "Hayır. Load-cell tartımı, vibrasyon veya akış yardımcıları ürün ve proses ihtiyacına göre değerlendirilir; standart donanım değildir.",
          },
          {
            question: "Tozlu ürünlerde ne yapılır?",
            answer: "Dolum sırasında yer değiştiren hava, silo üstündeki havalandırma bağlantısı ve gerekirse filtre üzerinden kontrollü olarak atılır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Depolanacak ürün, yığın yoğunluğu, tane boyutu, nem, depolama miktarı, dolum ve boşaltma yöntemi ile saha koşulları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Silo sistemi için teknik teklif alın",
        text: "Ürününüz, depolama miktarınız ve saha koşullarınıza göre silo sistemini birlikte netleştirelim.",
        mailSubject: "Silo Sistemi Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Depolanacak ürün ve yığın yoğunluğu", "Tane boyutu, nem ve akış özellikleri", "Gerekli depolama miktarı", "Dolum yöntemi", "Boşaltma ve sonraki ekipman", "Saha ölçüleri ve montaj koşulları"],
        inquiryLines: [
          "Merhaba, silo sistemi için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Depolama miktarı (ton veya m³):",
          "Dolum yöntemi:",
          "Boşaltma / sonraki ekipman:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Silo Systems | Industrial Silo Manufacturer",
        description:
          "Industrial silo systems for fertilizer, minerals, sand and bulk products. Geometry, discharge and level monitoring are engineered for the product's flow.",
      },
      breadcrumbLabel: "Silo Systems",
      h1: "Silo Systems – Controlled Storage of Bulk Products",
      productCategory: "Industrial Silo",
      overview: {
        imageAlt: "Tall silo on a support structure fed by a bucket elevator",
        tagline: "Silo Systems",
        keyFacts: [
          { label: "Duty", value: "Stock or process storage of bulk products" },
          { label: "Geometry", value: "Cylindrical body and conical bottom" },
          { label: "Discharge", value: "Controlled outlet below the cone" },
          { label: "Monitoring", value: "Level measurement; extra equipment per project" },
        ],
        title: "Safe, Flow-Compatible Storage of Bulk Products",
        paragraphs: [
          "Silo systems store powder or granular bulk products as raw material stock before production, intermediate process stock or finished product stock before shipment. Product is fed from the top by elevator, conveyor or pneumatic line and discharged from the conical bottom when needed.",
          "Safe operation depends largely on the product's flow behaviour. Bulk density, particle size, moisture, flowability and abrasiveness determine the cone angle, outlet size and discharge equipment. With the wrong geometry, bridging, arching or funnel flow through the centre only can occur.",
          "Level measurement, venting and dust control are the basic auxiliary equipment of a silo. Load cells, flow aids or vibration are assessed according to product and process needs.",
        ],
        note: "A silo is for long-term, high-volume storage. Bunkers and hoppers are used for short-term buffering and feeding, and a truck intake hopper (teremi) for receiving product from trucks.",
      },
      process: {
        title: "Silo System Process Flow",
        intro:
          "The diagram shows the flow in which product is received and fed to the silo, stored in a controlled way, its level monitored, and discharged below the cone to the next equipment on demand. Elevators, conveyors and dosing equipment are separate machines.",
        note: "Cone angle and outlet are selected from a flow test or known flow properties of the product; this choice determines discharge stability.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Receipt and filling", text: "Product is fed into the top of the silo by elevator, conveyor or pneumatic line." },
          { title: "Controlled storage", text: "Product is stored in a body designed for its flow behaviour." },
          { title: "Level monitoring", text: "Level measurement allows filling and discharge to be managed." },
          { title: "Controlled discharge", text: "Product leaves through the outlet below the cone to a screw, conveyor or dosing equipment." },
        ],
        auxLineLabel: "Venting and dust control",
        auxLine: [{ title: "Venting", text: "Air displaced during filling is released to atmosphere, through a filter if required." }],
        flow: {
          svgTitle: "Silo system process flow diagram",
          svgDesc: "Product line: receipt, silo, below-cone discharge and next equipment. Auxiliary line: venting and dust control.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Receipt", sub: "Elevator / conveyor" }],
          drum: { title: "SILO", sub: "controlled storage" },
          after: [
            { title: "Discharge", sub: "Below-cone outlet" },
            { title: "Next equipment", sub: "Dosing / transfer" },
          ],
          aux: {
            lane: "VENTING AND DUST CONTROL",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Venting", sub: "Filter connection" }],
          },
        },
      },
      applications: {
        title: "Silo System Applications",
        items: [
          {
            title: "Fertilizer Storage",
            text: "Storing granular fertilizer and fertilizer raw materials before production and shipment. Moisture control and caking risk are considered for hygroscopic products.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Minerals and Powder Raw Materials",
            text: "Stocking limestone and similar minerals and powder raw materials before processing. For powders prone to bridging, cone angle and outlet size are especially important.",
            imageAlt: "Crushed limestone pieces",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Sand and Granular Products",
            text: "Intermediate stock of free-flowing granular products such as dried sand. For abrasive products, the outlet area and discharge equipment are assessed for wear.",
            imageAlt: "Light-coloured fine silica sand",
            linkLabel: "Rotary Dryer",
          },
        ],
      },
      design: {
        title: "Custom Silo Design and Manufacturing",
        intro:
          "PRO MAKINA engineers silo systems around the properties of the stored product, storage quantity, flow behaviour and site conditions. Body and cone geometry, filling and discharge connections, level measurement, venting and support structure are designed together.",
        highlights: ["Cone geometry for the flow behaviour", "Filling and discharge connections", "Level measurement and venting", "Support structure for site loads"],
        figureAlt: "Silo discharged by a screw connected to the cone outlet",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, moisture and abrasiveness." },
          { title: "Storage Quantity", text: "Required storage capacity and bulk density." },
          { title: "Geometry", text: "Body diameter and height, cone angle and outlet." },
          { title: "Flow Behaviour", text: "Flowability, bridging risk and flow aids if needed." },
          { title: "Discharge and Site", text: "Discharge equipment, structure, site loads and installation." },
        ],
        dataNote: "Silo volume, dimensions and plate thicknesses are calculated from product and site data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Silo Systems Photo Gallery",
        captions: [
          "Silo group on a steel structure",
          "Silo group located next to a quay",
          "Tall silos next to a building with a truck loading area",
          "Clad silo group and elevator",
          "Silos during crane installation",
          "Cone-bottom silo on support legs",
          "Silo body being lifted into place by crane",
          "Cone-bottom silos indoors",
        ],
      },
      faq: {
        title: "Silo Systems FAQ",
        items: [
          {
            question: "What is the difference between a silo and a bunker?",
            answer: "A silo is for long-term, high-volume storage. Bunkers and hoppers are used for short-term buffering and feeding the next equipment.",
          },
          {
            question: "Why does the cone angle matter?",
            answer: "Cone angle and outlet size determine whether the product flows steadily. The wrong choice can cause bridging, arching or irregular discharge.",
          },
          {
            question: "Does every silo have load cells or vibrators?",
            answer: "No. Load cells, vibration or flow aids are assessed according to product and process needs; they are not standard equipment.",
          },
          {
            question: "What about dusty products?",
            answer: "Air displaced during filling is released in a controlled way through the vent connection on top of the silo and a filter if required.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product to be stored, bulk density, particle size, moisture, storage quantity, filling and discharge method, and site conditions.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a silo system",
        text: "Share your product, storage quantity and site conditions, and we will define the silo system together with you.",
        mailSubject: "Silo System Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Stored product and bulk density", "Particle size, moisture and flow properties", "Required storage quantity", "Filling method", "Discharge and next equipment", "Site dimensions and installation conditions"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a silo system.",
          "",
          "Product:",
          "Bulk density:",
          "Storage quantity (t or m³):",
          "Filling method:",
          "Discharge / next equipment:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Силосные системы | Производство промышленных силосов",
        description:
          "Промышленные силосы для удобрений, минералов, песка и сыпучих продуктов. Геометрия, выгрузка и контроль уровня проектируются под сыпучесть продукта.",
      },
      breadcrumbLabel: "Силосные системы",
      h1: "Силосные системы – контролируемое хранение сыпучих продуктов",
      productCategory: "Промышленный силос",
      overview: {
        imageAlt: "Высокий силос на опорной конструкции с загрузкой ковшовым элеватором",
        tagline: "Силосные системы",
        keyFacts: [
          { label: "Назначение", value: "Хранение сыпучих продуктов для запаса или процесса" },
          { label: "Геометрия", value: "Цилиндрический корпус и коническое днище" },
          { label: "Выгрузка", value: "Контролируемый выпуск под конусом" },
          { label: "Контроль", value: "Измерение уровня; доп. оснащение по проекту" },
        ],
        title: "Безопасное хранение сыпучих продуктов с учётом их течения",
        paragraphs: [
          "Силосные системы обеспечивают хранение порошкообразных и гранулированных сыпучих продуктов как запас сырья, промежуточный технологический запас или запас готовой продукции перед отгрузкой. Продукт загружается сверху элеватором, конвейером или пневмотранспортом и выгружается из конического днища по мере необходимости.",
          "Безопасная работа силоса во многом определяется характером истечения продукта. Насыпная плотность, крупность, влажность, сыпучесть и абразивность задают угол конуса, размер выпускного отверстия и выгрузочное оборудование. При неверной геометрии возможны сводообразование или воронкообразное истечение только по центру.",
          "Базовое вспомогательное оснащение силоса — измерение уровня, дыхание и пылеподавление. Тензодатчики, побудители истечения или вибраторы рассматриваются по потребностям продукта и процесса.",
        ],
        note: "Силос предназначен для длительного хранения больших объёмов. Для кратковременной буферизации и подачи используются бункеры, для приёма продукта из автомобилей — приёмный бункер (тереми).",
      },
      process: {
        title: "Технологическая схема силосной системы",
        intro:
          "Схема показывает поток: продукт принимается и загружается в силос, хранится, контролируется уровень, и по потребности продукт выгружается под конусом на следующее оборудование. Элеваторы, конвейеры и дозаторы — отдельные машины.",
        note: "Угол конуса и выпускное отверстие выбираются по испытанию или известным свойствам сыпучести; от этого зависит стабильность выгрузки.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Приём и загрузка", text: "Продукт подаётся в верх силоса элеватором, конвейером или пневмотранспортом." },
          { title: "Контролируемое хранение", text: "Продукт хранится в корпусе, рассчитанном под его сыпучесть." },
          { title: "Контроль уровня", text: "Измерение уровня позволяет управлять загрузкой и выгрузкой." },
          { title: "Контролируемая выгрузка", text: "Продукт выходит под конусом на шнек, конвейер или дозатор." },
        ],
        auxLineLabel: "Дыхание и пылеподавление",
        auxLine: [{ title: "Дыхание", text: "Вытесняемый при загрузке воздух выводится в атмосферу, при необходимости через фильтр." }],
        flow: {
          svgTitle: "Технологическая схема силосной системы",
          svgDesc: "Линия продукта: приём, силос, выгрузка под конусом и следующее оборудование. Вспомогательная линия: дыхание и пылеподавление.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Приём", sub: "Элеватор / конвейер" }],
          drum: { title: "СИЛОС", sub: "контролируемое хранение" },
          after: [
            { title: "Выгрузка", sub: "Выпуск под конусом" },
            { title: "Далее", sub: "Дозирование / транспорт" },
          ],
          aux: {
            lane: "ДЫХАНИЕ И ПЫЛЕПОДАВЛЕНИЕ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Дыхание", sub: "Подключение фильтра" }],
          },
        },
      },
      applications: {
        title: "Области применения силосных систем",
        items: [
          {
            title: "Хранение удобрений",
            text: "Хранение гранулированных удобрений и сырья перед производством и отгрузкой. Для гигроскопичных продуктов учитываются контроль влажности и слёживаемость.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Минералы и порошковое сырьё",
            text: "Запас известняка, подобных минералов и порошкового сырья перед переработкой. Для порошков, склонных к сводообразованию, особенно важны угол конуса и выпуск.",
            imageAlt: "Куски дроблёного известняка",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Песок и гранулированные продукты",
            text: "Промежуточный запас сыпучих гранулированных продуктов, например сушёного песка. Для абразивных продуктов зона выпуска и выгрузочное оборудование оцениваются на износ.",
            imageAlt: "Светлый мелкозернистый кварцевый песок",
            linkLabel: "Сушильный барабан",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление силосов",
        intro:
          "PRO MAKINA проектирует силосные системы исходя из свойств продукта, объёма хранения, сыпучести и условий площадки. Геометрия корпуса и конуса, узлы загрузки и выгрузки, измерение уровня, дыхание и опорная конструкция разрабатываются совместно.",
        highlights: ["Геометрия конуса под сыпучесть", "Узлы загрузки и выгрузки", "Измерение уровня и дыхание", "Опорная конструкция под нагрузки площадки"],
        figureAlt: "Силос с выгрузкой шнеком, подключённым к выпуску конуса",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, влажность и абразивность." },
          { title: "Объём хранения", text: "Требуемая вместимость и насыпная плотность." },
          { title: "Геометрия", text: "Диаметр и высота корпуса, угол конуса и выпуск." },
          { title: "Сыпучесть", text: "Текучесть, риск сводообразования и побудители при необходимости." },
          { title: "Выгрузка и площадка", text: "Выгрузочное оборудование, конструкция, нагрузки и монтаж." },
        ],
        dataNote: "Объём, размеры и толщины листа силоса рассчитываются по данным продукта и площадки; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея силосных систем",
        captions: [
          "Группа силосов на стальной конструкции",
          "Группа силосов у причала",
          "Высокие силосы у здания с зоной погрузки автомобилей",
          "Группа силосов с облицовкой и элеватор",
          "Силосы при монтаже краном",
          "Силос с коническим днищем на опорах",
          "Корпус силоса, устанавливаемый краном",
          "Силосы с коническим днищем в помещении",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о силосных системах",
        items: [
          {
            question: "Чем силос отличается от бункера?",
            answer: "Силос предназначен для длительного хранения больших объёмов, а бункеры — для кратковременной буферизации и подачи на следующее оборудование.",
          },
          {
            question: "Почему важен угол конуса?",
            answer: "Угол конуса и размер выпуска определяют равномерность истечения; при неверном выборе возможны своды и неравномерная выгрузка.",
          },
          {
            question: "Есть ли в каждом силосе тензодатчики или вибраторы?",
            answer: "Нет. Тензодатчики, вибраторы и побудители рассматриваются по потребностям продукта и процесса и не являются стандартным оснащением.",
          },
          {
            question: "Что делать с пылящими продуктами?",
            answer: "Вытесняемый при загрузке воздух выводится через дыхательный патрубок на крыше силоса и при необходимости через фильтр.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Хранимый продукт, насыпная плотность, крупность, влажность, объём хранения, способы загрузки и выгрузки и условия площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на силосную систему",
        text: "Сообщите продукт, объём хранения и условия площадки — вместе определим силосную систему.",
        mailSubject: "Запрос предложения: силосная система",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Хранимый продукт и насыпная плотность", "Крупность, влажность и сыпучесть", "Требуемый объём хранения", "Способ загрузки", "Выгрузка и следующее оборудование", "Размеры площадки и условия монтажа"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на силосную систему.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Объём хранения (т или м³):",
          "Способ загрузки:",
          "Выгрузка / далее:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أنظمة الصوامع | تصنيع الصوامع الصناعية",
        description:
          "أنظمة صوامع صناعية للأسمدة والمعادن والرمل والمواد السائبة، مع تصميم الشكل والتفريغ ومراقبة المستوى وفق سلوك انسياب المنتج.",
      },
      breadcrumbLabel: "أنظمة الصوامع",
      h1: "أنظمة الصوامع – تخزين متحكم به للمواد السائبة",
      productCategory: "صومعة صناعية",
      overview: {
        imageAlt: "صومعة عالية على هيكل حامل تُغذّى برافعة قواديس",
        tagline: "أنظمة الصوامع",
        keyFacts: [
          { label: "المهمة", value: "تخزين المواد السائبة للمخزون أو للعملية" },
          { label: "الشكل", value: "جسم أسطواني وقاع مخروطي" },
          { label: "التفريغ", value: "مخرج متحكم به أسفل المخروط" },
          { label: "المراقبة", value: "قياس المستوى، والتجهيزات الإضافية حسب المشروع" },
        ],
        title: "تخزين آمن للمواد السائبة متوافق مع انسيابها",
        paragraphs: [
          "تتيح أنظمة الصوامع تخزين المواد السائبة المسحوقة أو الحبيبية كمخزون للمواد الخام قبل الإنتاج أو مخزون وسيط للعملية أو مخزون للمنتج قبل الشحن، ويُلقَّم المنتج من الأعلى برافعة أو ناقل أو خط هوائي ويُفرَّغ من القاع المخروطي عند الحاجة.",
          "يعتمد التشغيل الآمن للصومعة إلى حد كبير على سلوك انسياب المنتج؛ إذ تحدد الكثافة الظاهرية وحجم الحبيبات والرطوبة وقابلية الانسياب والكشط زاوية المخروط ومقاس فتحة الخروج ومعدات التفريغ، ومع الشكل غير المناسب قد يحدث التجسير أو التقوس أو الانسياب من المنتصف فقط.",
          "يُعد قياس المستوى والتهوية والتحكم في الغبار من التجهيزات المساعدة الأساسية للصومعة، أما خلايا التحميل أو مساعدات الانسياب أو الاهتزاز فتُقيَّم وفق احتياجات المنتج والعملية.",
        ],
        note: "الصومعة للتخزين طويل الأمد وعالي الحجم، أما القواديس فتُستخدم للتخزين المؤقت والتلقيم، وقادوس الاستلام (تيريمي) لاستلام المنتج من الشاحنات.",
      },
      process: {
        title: "تدفق العملية في نظام الصومعة",
        intro:
          "يوضح المخطط التدفق الذي يُستلم فيه المنتج ويُلقَّم إلى الصومعة ويُخزَّن بشكل متحكم به ويُراقَب مستواه، ثم يُفرَّغ من أسفل المخروط إلى المعدة التالية عند الطلب، بينما الروافع والنواقل ومعدات الجرعات ماكينات منفصلة.",
        note: "تُختار زاوية المخروط وفتحة الخروج من اختبار الانسياب أو خصائص الانسياب المعروفة للمنتج، ويحدد هذا الاختيار ثبات التفريغ.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "الاستلام والتعبئة", text: "يُلقَّم المنتج إلى أعلى الصومعة برافعة أو ناقل أو خط هوائي." },
          { title: "تخزين متحكم به", text: "يُخزَّن المنتج في جسم مصمم وفق سلوك انسيابه." },
          { title: "مراقبة المستوى", text: "يتيح قياس المستوى إدارة التعبئة والتفريغ." },
          { title: "تفريغ متحكم به", text: "يخرج المنتج من أسفل المخروط إلى ناقل لولبي أو ناقل أو معدة جرعات." },
        ],
        auxLineLabel: "التهوية والتحكم في الغبار",
        auxLine: [{ title: "التهوية", text: "يُطلق الهواء المزاح أثناء التعبئة إلى الجو، عبر مرشح عند الحاجة." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في نظام الصومعة",
          svgDesc: "خط المنتج: الاستلام، الصومعة، التفريغ أسفل المخروط والمعدة التالية. الخط المساعد: التهوية والتحكم في الغبار.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "الاستلام", sub: "رافعة / ناقل" }],
          drum: { title: "الصومعة", sub: "تخزين متحكم به" },
          after: [
            { title: "التفريغ", sub: "مخرج أسفل المخروط" },
            { title: "المعدة التالية", sub: "جرعات / نقل" },
          ],
          aux: {
            lane: "التهوية والتحكم في الغبار",
            tone: "air",
            inputs: [],
            outputs: [{ title: "التهوية", sub: "وصلة المرشح" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام أنظمة الصوامع",
        items: [
          {
            title: "تخزين الأسمدة",
            text: "تخزين الأسمدة الحبيبية ومواد الأسمدة الخام قبل الإنتاج والشحن، مع مراعاة التحكم في الرطوبة وخطر التكتل للمنتجات الماصة للرطوبة.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "المعادن والمواد الخام المسحوقة",
            text: "تخزين الحجر الجيري والمعادن المشابهة والمواد الخام المسحوقة قبل المعالجة، وتكتسب زاوية المخروط وفتحة الخروج أهمية خاصة للمساحيق المعرضة للتجسير.",
            imageAlt: "قطع من الحجر الجيري المكسّر",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الرمل والمنتجات الحبيبية",
            text: "مخزون وسيط للمنتجات الحبيبية سهلة الانسياب مثل الرمل المجفف، مع تقييم منطقة الخروج ومعدات التفريغ من حيث التآكل للمنتجات الكاشطة.",
            imageAlt: "رمل سيليكا ناعم فاتح اللون",
            linkLabel: "أسطوانة التجفيف",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع صوامع مخصصة",
        intro:
          "تصمم PRO MAKINA أنظمة الصوامع وفق خصائص المنتج المخزن وكمية التخزين وسلوك الانسياب وظروف الموقع، مع تصميم شكل الجسم والمخروط وتوصيلات التعبئة والتفريغ وقياس المستوى والتهوية والهيكل الحامل معًا.",
        highlights: ["شكل مخروط وفق سلوك الانسياب", "توصيلات التعبئة والتفريغ", "قياس المستوى والتهوية", "هيكل حامل وفق أحمال الموقع"],
        figureAlt: "صومعة تُفرَّغ بناقل لولبي متصل بمخرج المخروط",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والرطوبة والكشط." },
          { title: "كمية التخزين", text: "سعة التخزين المطلوبة والكثافة الظاهرية." },
          { title: "الشكل", text: "قطر الجسم وارتفاعه وزاوية المخروط وفتحة الخروج." },
          { title: "سلوك الانسياب", text: "قابلية الانسياب وخطر التجسير ومساعدات الانسياب عند الحاجة." },
          { title: "التفريغ والموقع", text: "معدات التفريغ والهيكل وأحمال الموقع والتركيب." },
        ],
        dataNote: "يُحسب حجم الصومعة وأبعادها وسماكات الصفائح من بيانات المنتج والموقع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور أنظمة الصوامع",
        captions: [
          "مجموعة صوامع على هيكل فولاذي",
          "مجموعة صوامع بجوار رصيف",
          "صوامع عالية بجوار مبنى مع منطقة تحميل الشاحنات",
          "مجموعة صوامع مكسوّة ورافعة",
          "صوامع أثناء التركيب بالرافعة",
          "صومعة بقاع مخروطي على أرجل حاملة",
          "جسم صومعة يُرفع إلى مكانه بالرافعة",
          "صوامع بقاع مخروطي داخل مبنى",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول أنظمة الصوامع",
        items: [
          {
            question: "ما الفرق بين الصومعة والقادوس؟",
            answer: "الصومعة للتخزين طويل الأمد وعالي الحجم، أما القواديس فللتخزين المؤقت وتلقيم المعدة التالية.",
          },
          {
            question: "لماذا تهم زاوية المخروط؟",
            answer: "تحدد زاوية المخروط ومقاس فتحة الخروج انتظام انسياب المنتج، وقد يؤدي الاختيار الخاطئ إلى التجسير أو التفريغ غير المنتظم.",
          },
          {
            question: "هل تحتوي كل صومعة على خلايا تحميل أو هزازات؟",
            answer: "لا. تُقيَّم خلايا التحميل والاهتزاز ومساعدات الانسياب وفق احتياجات المنتج والعملية، وليست تجهيزات قياسية.",
          },
          {
            question: "ماذا عن المنتجات المغبّرة؟",
            answer: "يُطلق الهواء المزاح أثناء التعبئة بشكل متحكم به عبر وصلة التهوية أعلى الصومعة وعبر مرشح عند الحاجة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "المنتج المخزن وكثافته الظاهرية وحجم حبيباته ورطوبته وكمية التخزين وطريقتا التعبئة والتفريغ وظروف الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لنظام صومعة",
        text: "شاركنا منتجك وكمية التخزين وظروف الموقع، لنحدد معًا نظام الصومعة المناسب.",
        mailSubject: "طلب عرض سعر: نظام صومعة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["المنتج المخزن وكثافته الظاهرية", "حجم الحبيبات والرطوبة وخصائص الانسياب", "كمية التخزين المطلوبة", "طريقة التعبئة", "التفريغ والمعدة التالية", "أبعاد الموقع وظروف التركيب"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام صومعة.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "كمية التخزين (طن أو م³):",
          "طريقة التعبئة:",
          "التفريغ / المعدة التالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
