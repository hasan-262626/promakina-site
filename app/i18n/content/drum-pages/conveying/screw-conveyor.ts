import type { DrumPageConfig } from "../types";

// Vidalı helezon (helezon konveyör): kapalı boru veya U-oluk gövdede helezonla taşıma.
// Taşıma ve besleme ayrı anlatılır; helezon tek başına hacimsel besleme yapar, gravimetrik dozaj iddiası yoktur.
const img = (file: string) => `/images/helezon/${file}`;

export const screwConveyorPage: DrumPageConfig = {
  key: "screwConveyor",
  group: "conveying",
  trSlug: "vidali-helezonlar",
  mainImage: img("helezon39.jpg"),
  applications: [
    { image: img("helezon11.jpg"), link: "storageSystems" },
    { image: img("helezon40.jpg"), link: "chemicalProcess" },
    { image: img("helezon22.jpeg"), link: "sludgeDrying" },
    { image: img("helezon23.jpg"), link: "dosingSystems" },
  ],
  figure: img("helezon4.jpg"),
  gallery: [
    img("helezon5.jpg"),
    img("helezon9.jpg"),
    img("helezon10.jpg"),
    img("helezon15.jpeg"),
    img("helezon21.jpg"),
    img("helezon24.jpg"),
    img("helezon29.jpg"),
    img("helezon30.jpg"),
    img("helezon31.jpg"),
    img("helezon35.jpg"),
    img("helezon36.jpg"),
    img("helezon41.jpg"),
  ],
  sectors: ["chemicalProcess", "sludgeDrying", "fertilizerPlants"],
  resources: ["bunkersHoppers", "dosingBeltScale", "chainConveyor", "bucketElevator"],
  machines: ["storageSystems", "dosingSystems", "dustCollection", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Vidalı Helezon İmalatı | Helezon Konveyör | PRO MAKİNA",
        description:
          "Toz, granül ve nemli dökme malzemeler için boru veya U-oluk gövdeli vidalı helezon konveyör imalatı. Silo altı boşaltma, proses transferi ve hacimsel besleme.",
      },
      breadcrumbLabel: "Vidalı Helezonlar",
      h1: "Vidalı Helezon – Toz ve Granül Ürünler için Helezon Konveyör",
      productCategory: "Vidalı Helezon Konveyör",
      overview: {
        imageAlt: "Motor-redüktörlü vidalı helezon konveyörler",
        tagline: "Vidalı Helezon Konveyör",
        keyFacts: [
          { label: "Görev", value: "Kapalı gövdede taşıma ve besleme" },
          { label: "Gövde", value: "Boru tipi veya U-oluk" },
          { label: "Güzergâh", value: "Yatay veya eğimli" },
          { label: "Boyutlandırma", value: "Çap, hatve, devir ve doluluk oranı" },
        ],
        title: "Toz ve Granül Ürünlerin Kapalı Gövdede Taşınması",
        paragraphs: [
          "Vidalı helezon (helezon konveyör), dönen bir mil üzerindeki helezon yapraklarının malzemeyi boru veya U-oluk şeklindeki kapalı bir gövde içinde ileri itmesiyle çalışır. Malzeme giriş ağzından alınır ve çıkış ağzından boşaltılır.",
          "Taşıma kapasitesi; helezon dış çapı, hatve, dönüş devri ve gövdenin doluluk oranıyla belirlenir. Toz, granül ve nemli ürünler için doluluk oranı ve devir, malzemenin akışkanlığına ve aşındırıcılığına göre seçilir; eğim arttıkça taşıma verimi düşer.",
          "Helezonlar iki farklı görevde kullanılır: bir noktadan diğerine taşıma ve bir bunker veya siloya bağlı olarak kontrollü (hacimsel) besleme. Tartım gerektiren hassas dozaj uygulamalarında helezon, tartım sistemiyle birlikte ayrıca tasarlanır.",
        ],
        note: "Helezonun kapasitesi hacimseldir; aynı devirde farklı yoğunluktaki ürünler farklı kütle debisi verir. Kütle bazlı kontrol gerekiyorsa tartım ekipmanı değerlendirilmelidir.",
      },
      process: {
        title: "Vidalı Helezon Malzeme Akışı",
        intro:
          "Şema, vidalı helezonun malzemeyi giriş ağzından çıkış ağzına taşıdığı tipik akışı gösterir. Helezon bir bunker veya silo altında besleyici olarak da kullanılabilir.",
        note: "Uzun hatlarda helezon mili ara yataklarla desteklenir; ara yatak bölgesinde malzemenin akışı ve aşınma ayrıca değerlendirilir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Giriş ağzından besleme", text: "Malzeme bunker, silo veya önceki ekipmandan giriş ağzına düşer." },
          { title: "Helezonla taşıma", text: "Dönen helezon yaprakları malzemeyi gövde içinde ileri iter." },
          { title: "Çıkış ağzından tahliye", text: "Malzeme çıkış ağzından sonraki ekipmana boşaltılır." },
          { title: "Kontrollü akış", text: "Devir ayarıyla hacimsel akış, besleme gereksinimine göre değiştirilebilir." },
        ],
        flow: {
          svgTitle: "Vidalı helezon malzeme akış şeması",
          svgDesc: "Malzeme hattı: bunker veya silo çıkışı, vidalı helezon, çıkış ağzı, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Giriş ağzı", sub: "Bunker veya silo çıkışı" }],
          drum: { title: "VİDALI HELEZON", sub: "helezon · boru / U-oluk" },
          after: [
            { title: "Çıkış ağzı", sub: "Tahliye" },
            { title: "Sonraki ekipman", sub: "Proses, elevatör, silo" },
          ],
        },
      },
      applications: {
        title: "Vidalı Helezon Uygulama Alanları",
        items: [
          {
            title: "Silo Altı Boşaltma",
            text: "Toz ürün silolarının altından malzemenin alınıp proses noktalarına taşınması. Birden fazla silo çıkışı ayrı helezonlarla toplanabilir.",
            imageAlt: "Silo konisi altından çıkan çok sayıda boru helezon",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
          {
            title: "Toz ve Granül Proses Transferi",
            text: "Kimyasal, mineral ve katkı tozlarının kapalı gövdede proses ekipmanları arasında taşınması. Kapalı yapı tozumayı azaltmaya yardımcı olur.",
            imageAlt: "Silolar altında boru tipi helezon konveyörler",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Nemli ve Yapışkan Ürünler",
            text: "Susuzlaştırılmış çamur ve benzeri nemli ürünlerin U-oluk helezonla taşınması. Yapışma eğiliminde hatve, devir ve temizlik erişimi buna göre seçilir.",
            imageAlt: "U-oluk helezon içinde koyu renkli nemli malzeme",
            linkLabel: "Atık Su Çamuru ve Arıtma",
          },
          {
            title: "Hacimsel Besleme",
            text: "Bunker altında devir kontrollü helezonla bir sonraki ekipmana düzenli ürün beslenmesi. Kütle bazlı hassas dozaj gerekiyorsa tartım sistemiyle birlikte tasarlanır.",
            imageAlt: "Bunker altında motor-redüktörlü besleme helezonu",
            linkLabel: "Dozajlama Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Vidalı Helezon Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA vidalı helezonları malzeme özellikleri, kapasite ve hat geometrisine göre projelendirir. Helezon çapı ve hatvesi, mil ve yaprak kalınlığı, gövde tipi, yataklama, sızdırmazlık ve tahrik birlikte seçilir.",
        highlights: ["Boru veya U-oluk gövde", "Çap, hatve ve devir seçimi", "Uç ve ara yataklama", "Aşınma ve sızdırmazlık çözümleri"],
        figureAlt: "Atölyede imal edilmiş helezon yaprakları ve milleri",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Malzeme", text: "Malzeme türü, tane boyutu, yığın yoğunluğu, akışkanlık, nem ve sıcaklık." },
          { title: "Kapasite", text: "Saatlik kütle veya hacimsel kapasite, taşıma ya da besleme görevi." },
          { title: "Geometri", text: "Taşıma uzunluğu, eğim, giriş ve çıkış ağızlarının konumu." },
          { title: "Helezon ve Gövde", text: "Dış çap, hatve, mil ve yaprak kalınlığı, boru veya U-oluk gövde." },
          { title: "Yataklama ve Tahrik", text: "Uç ve ara yataklar, sızdırmazlık, motor-redüktör ve devir kontrolü." },
        ],
        dataNote: "Aşındırıcı ürünlerde aşınma koruması, sıcak ürünlerde yatak ve sızdırmazlık seçimi proje verisine göre ayrıca belirlenir.",
      },
      gallery: {
        title: "Vidalı Helezon Fotoğraf Galerisi",
        captions: [
          "Gövdeye yerleştirilmiş helezon yaprakları",
          "Silo altında boru helezon bağlantısı",
          "Silo çıkışlarına bağlı boru helezonlar",
          "Çelik konstrüksiyon üzerinde helezon hattı",
          "Motor-redüktörlü U-oluk helezon",
          "Kurulum alanında destekli helezon hattı",
          "Silo altında besleme helezonu",
          "Merdivenli platformla eğimli helezonlar",
          "Tesis dışında uzun boru helezon",
          "Eğimli paslanmaz boru helezon",
          "Platform üzerinde U-oluk helezonlar",
          "Ayaklı paslanmaz helezon konveyör",
        ],
      },
      faq: {
        title: "Vidalı Helezon Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Vidalı helezon kapasitesi nasıl belirlenir?",
            answer:
              "Kapasite; helezon dış çapı, hatve, devir ve gövdenin doluluk oranıyla belirlenir. Doluluk oranı malzemenin akışkanlığı ve aşındırıcılığına göre seçilir; eğim arttıkça kapasite düşer.",
          },
          {
            question: "Helezon dozajlama yapar mı?",
            answer:
              "Helezon devir kontrolüyle hacimsel besleme yapabilir. Kütle bazlı hassas dozaj gerekiyorsa helezon, tartım sistemi ile birlikte tasarlanır.",
          },
          {
            question: "Boru tipi mi, U-oluk mu seçilmeli?",
            answer:
              "Boru tipi gövde eğimli hatlarda ve tozlu ürünlerde sızdırmazlık açısından avantajlıdır. U-oluk gövde ise yapışkan ürünlerde temizlik ve bakım erişimini kolaylaştırır.",
          },
          {
            question: "Eğimli helezon kullanılabilir mi?",
            answer:
              "Evet; ancak eğim arttıkça taşıma verimi düşer. Eğimli hatlarda çap, hatve ve devir buna göre seçilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Malzeme türü, tane boyutu, yığın yoğunluğu, nem ve sıcaklık, kapasite, taşıma uzunluğu ve eğim ile helezonun taşıma mı besleme mi için kullanılacağı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Vidalı helezon için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve hat geometrinize göre vidalı helezonu ve bağlantılarını birlikte netleştirelim.",
        mailSubject: "Vidalı Helezon Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve tane boyutu",
          "Yığın yoğunluğu, nem ve sıcaklık",
          "Kapasite (ton/saat veya m³/saat)",
          "Taşıma uzunluğu ve eğim",
          "Taşıma veya besleme görevi",
          "Giriş ve çıkış bağlantıları",
        ],
        inquiryLines: [
          "Merhaba, vidalı helezon için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Yoğunluk / nem / sıcaklık:",
          "Kapasite:",
          "Uzunluk (m) / eğim:",
          "Görev (taşıma / besleme):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Screw Conveyor | Tubular and U-Trough Screws",
        description:
          "Tubular and U-trough screw conveyors for powders, granules and moist bulk solids. For silo discharge, process transfer and volumetric feeding.",
      },
      breadcrumbLabel: "Screw Conveyor",
      h1: "Screw Conveyor – Enclosed Transport for Powders and Granules",
      productCategory: "Screw Conveyor",
      overview: {
        imageAlt: "Screw conveyors with gear motors",
        tagline: "Screw Conveyor",
        keyFacts: [
          { label: "Task", value: "Enclosed conveying and feeding" },
          { label: "Casing", value: "Tubular or U-trough" },
          { label: "Route", value: "Horizontal or inclined" },
          { label: "Sizing", value: "Diameter, pitch, speed and trough loading" },
        ],
        title: "Enclosed Transport of Powders and Granules",
        paragraphs: [
          "A screw conveyor works by rotating flights on a shaft that push the material forward inside an enclosed tubular or U-shaped trough. Material enters at the inlet and leaves at the outlet.",
          "Conveying capacity is determined by screw diameter, pitch, rotational speed and trough loading. For powders, granules and moist products, trough loading and speed are selected according to flowability and abrasiveness; efficiency falls as inclination increases.",
          "Screw conveyors serve two different tasks: conveying from one point to another, and controlled (volumetric) feeding from a hopper or silo. Where weighed, precise dosing is required, the screw is designed together with a weighing system.",
        ],
        note: "Screw capacity is volumetric; at the same speed, products of different density give different mass flow. If mass-based control is required, weighing equipment should be considered.",
      },
      process: {
        title: "Screw Conveyor Material Flow",
        intro: "The diagram shows the typical flow in which the screw conveyor carries material from the inlet to the outlet. A screw can also be used as a feeder below a hopper or silo.",
        note: "On long lines the screw shaft is supported by hanger bearings; material flow and wear at the hanger bearing zone are assessed separately.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Feeding at the inlet", text: "Material drops into the inlet from a hopper, silo or upstream equipment." },
          { title: "Screw conveying", text: "Rotating flights push the material forward inside the casing." },
          { title: "Discharge at the outlet", text: "Material is discharged through the outlet to the next equipment." },
          { title: "Controlled flow", text: "Volumetric flow can be adjusted to the feeding requirement by changing speed." },
        ],
        flow: {
          svgTitle: "Screw conveyor material flow diagram",
          svgDesc: "Material line: hopper or silo outlet, screw conveyor, outlet, downstream equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Inlet", sub: "Hopper or silo outlet" }],
          drum: { title: "SCREW CONVEYOR", sub: "screw · tube / U-trough" },
          after: [
            { title: "Outlet", sub: "Discharge" },
            { title: "Next equipment", sub: "Process, elevator, silo" },
          ],
        },
      },
      applications: {
        title: "Screw Conveyor Applications",
        items: [
          {
            title: "Silo Discharge",
            text: "Extracting material from below powder silos and conveying it to process points. Several silo outlets can be collected by separate screws.",
            imageAlt: "Several tubular screws leaving a silo cone",
            linkLabel: "Storage and Feeding Systems",
          },
          {
            title: "Powder and Granule Transfer",
            text: "Conveying chemical, mineral and additive powders between process equipment in an enclosed casing. The enclosed design helps reduce dust.",
            imageAlt: "Tubular screw conveyors below silos",
            linkLabel: "Chemical Process Industry",
          },
          {
            title: "Moist and Sticky Products",
            text: "Conveying dewatered sludge and similar moist products with U-trough screws. For sticky products, pitch, speed and cleaning access are selected accordingly.",
            imageAlt: "Dark moist material inside a U-trough screw",
            linkLabel: "Sewage Sludge and Treatment",
          },
          {
            title: "Volumetric Feeding",
            text: "Steady feeding to the next equipment with a speed-controlled screw below a hopper. Where precise mass-based dosing is required, it is designed together with a weighing system.",
            imageAlt: "Feeder screw with gear motor below a hopper",
            linkLabel: "Dosing Systems",
          },
        ],
      },
      design: {
        title: "Custom Screw Conveyor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers screw conveyors around material properties, capacity and line geometry. Screw diameter and pitch, shaft and flight thickness, casing type, bearings, sealing and drive are selected together.",
        highlights: ["Tubular or U-trough casing", "Diameter, pitch and speed selection", "End and hanger bearings", "Wear and sealing solutions"],
        figureAlt: "Manufactured screw flights and shafts in a workshop",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Material", text: "Material type, particle size, bulk density, flowability, moisture and temperature." },
          { title: "Capacity", text: "Hourly mass or volumetric capacity; conveying or feeding duty." },
          { title: "Geometry", text: "Conveying length, inclination and position of inlet and outlet." },
          { title: "Screw and Casing", text: "Outside diameter, pitch, shaft and flight thickness, tube or U-trough." },
          { title: "Bearings and Drive", text: "End and hanger bearings, sealing, gear motor and speed control." },
        ],
        dataNote: "Wear protection for abrasive products, and bearing and seal selection for hot products, are defined separately from project data.",
      },
      gallery: {
        title: "Screw Conveyor Photo Gallery",
        captions: [
          "Screw flights fitted in the casing",
          "Tubular screw connection below a silo",
          "Tubular screws connected to silo outlets",
          "Screw conveyor line on a steel structure",
          "U-trough screw with gear motor",
          "Supported screw line at the installation area",
          "Feeder screw below a silo",
          "Inclined screws with a platform and stairs",
          "Long tubular screw outside a plant",
          "Inclined stainless steel tubular screw",
          "U-trough screws on a platform",
          "Stainless steel screw conveyor on legs",
        ],
      },
      faq: {
        title: "Screw Conveyor FAQ",
        items: [
          {
            question: "How is screw conveyor capacity determined?",
            answer:
              "Capacity depends on screw diameter, pitch, speed and trough loading. Trough loading is chosen according to flowability and abrasiveness; capacity falls as inclination increases.",
          },
          {
            question: "Does a screw conveyor dose?",
            answer:
              "With speed control a screw can feed volumetrically. If precise mass-based dosing is required, the screw is designed together with a weighing system.",
          },
          {
            question: "Tubular or U-trough casing?",
            answer:
              "A tubular casing is advantageous for sealing on inclined lines and with dusty products. A U-trough makes cleaning and maintenance easier with sticky products.",
          },
          {
            question: "Can a screw conveyor be inclined?",
            answer: "Yes, but conveying efficiency drops as inclination increases. Diameter, pitch and speed are selected accordingly.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Material type, particle size, bulk density, moisture and temperature, capacity, conveying length and inclination, and whether the screw is for conveying or feeding.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a screw conveyor",
        text: "Share your material, capacity and line geometry, and we will define the screw conveyor and its connections together with you.",
        mailSubject: "Screw Conveyor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and particle size",
          "Bulk density, moisture and temperature",
          "Capacity (t/h or m³/h)",
          "Conveying length and inclination",
          "Conveying or feeding duty",
          "Inlet and outlet connections",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a screw conveyor.",
          "",
          "Material:",
          "Density / moisture / temperature:",
          "Capacity:",
          "Length (m) / inclination:",
          "Duty (conveying / feeding):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Шнековый конвейер | Трубчатые и желобчатые шнеки",
        description:
          "Трубчатые и желобчатые шнековые конвейеры для порошков, гранул и влажных сыпучих материалов. Выгрузка из силосов, передача продукта и объёмная подача.",
      },
      breadcrumbLabel: "Шнековый конвейер",
      h1: "Шнековый конвейер – закрытая транспортировка порошков и гранул",
      productCategory: "Шнековый конвейер",
      overview: {
        imageAlt: "Шнековые конвейеры с мотор-редукторами",
        tagline: "Шнековый конвейер",
        keyFacts: [
          { label: "Задача", value: "Закрытая транспортировка и подача" },
          { label: "Корпус", value: "Трубчатый или желобчатый (U)" },
          { label: "Трасса", value: "Горизонтальная или наклонная" },
          { label: "Расчёт", value: "Диаметр, шаг, частота и заполнение" },
        ],
        title: "Закрытая транспортировка порошков и гранул",
        paragraphs: [
          "Шнековый конвейер работает за счёт вращения винтовых лопастей на валу, которые продвигают материал внутри закрытого трубчатого или U-образного корпуса. Материал поступает через загрузочный патрубок и выходит через разгрузочный.",
          "Производительность определяется наружным диаметром шнека, шагом, частотой вращения и коэффициентом заполнения. Для порошков, гранул и влажных продуктов заполнение и частота выбираются по сыпучести и абразивности; с ростом угла наклона эффективность снижается.",
          "Шнеки выполняют две разные задачи: транспортировку из одной точки в другую и контролируемую (объёмную) подачу из бункера или силоса. Если требуется точное весовое дозирование, шнек проектируется вместе с весовой системой.",
        ],
        note: "Производительность шнека объёмная: при одной частоте продукты разной плотности дают разный массовый расход. Для управления по массе следует предусмотреть весовое оборудование.",
      },
      process: {
        title: "Движение материала в шнековом конвейере",
        intro: "Схема показывает типовой поток: шнек перемещает материал от загрузочного до разгрузочного патрубка. Шнек также может работать питателем под бункером или силосом.",
        note: "На длинных трассах вал поддерживается промежуточными подшипниками; движение материала и износ в их зоне оцениваются отдельно.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Загрузка", text: "Материал поступает в загрузочный патрубок из бункера, силоса или оборудования." },
          { title: "Транспортировка шнеком", text: "Вращающиеся лопасти продвигают материал внутри корпуса." },
          { title: "Разгрузка", text: "Материал выгружается через разгрузочный патрубок на следующее оборудование." },
          { title: "Регулируемый поток", text: "Объёмный поток можно менять частотой вращения под требования подачи." },
        ],
        flow: {
          svgTitle: "Схема движения материала в шнековом конвейере",
          svgDesc: "Линия материала: выход бункера или силоса, шнековый конвейер, разгрузочный патрубок, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Бункер или силос" }],
          drum: { title: "ШНЕКОВЫЙ КОНВЕЙЕР", sub: "шнек · труба / жёлоб" },
          after: [
            { title: "Разгрузка", sub: "Выпускной патрубок" },
            { title: "Далее", sub: "Процесс, элеватор, силос" },
          ],
        },
      },
      applications: {
        title: "Области применения шнекового конвейера",
        items: [
          {
            title: "Выгрузка из силосов",
            text: "Отбор материала из-под силосов с порошками и подача к технологическим точкам. Несколько выпусков силосов могут обслуживаться отдельными шнеками.",
            imageAlt: "Несколько трубчатых шнеков под конусом силоса",
            linkLabel: "Системы хранения и подачи",
          },
          {
            title: "Передача порошков и гранул",
            text: "Транспортировка химических, минеральных порошков и добавок между оборудованием в закрытом корпусе. Закрытая конструкция помогает снизить пыление.",
            imageAlt: "Трубчатые шнековые конвейеры под силосами",
            linkLabel: "Химическая промышленность",
          },
          {
            title: "Влажные и липкие продукты",
            text: "Транспортировка обезвоженного осадка и подобных влажных продуктов желобчатыми шнеками. Для липких продуктов подбираются шаг, частота и доступ для очистки.",
            imageAlt: "Тёмный влажный материал в желобчатом шнеке",
            linkLabel: "Осадок сточных вод и очистка",
          },
          {
            title: "Объёмная подача",
            text: "Равномерная подача на следующее оборудование шнеком с регулируемой частотой под бункером. Для точного весового дозирования проектируется вместе с весовой системой.",
            imageAlt: "Шнек-питатель с мотор-редуктором под бункером",
            linkLabel: "Системы дозирования",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление шнековых конвейеров",
        intro:
          "PRO MAKINA проектирует шнековые конвейеры исходя из свойств материала, производительности и геометрии трассы. Диаметр и шаг шнека, толщина вала и лопастей, тип корпуса, подшипники, уплотнения и привод подбираются совместно.",
        highlights: ["Трубчатый или желобчатый корпус", "Выбор диаметра, шага и частоты", "Концевые и промежуточные подшипники", "Износостойкость и уплотнения"],
        figureAlt: "Изготовленные шнековые лопасти и валы в цехе",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Материал", text: "Вид, крупность, насыпная плотность, сыпучесть, влажность и температура." },
          { title: "Производительность", text: "Массовая или объёмная; транспортировка или подача." },
          { title: "Геометрия", text: "Длина, угол наклона, положение загрузки и разгрузки." },
          { title: "Шнек и корпус", text: "Диаметр, шаг, толщина вала и лопастей, труба или жёлоб." },
          { title: "Подшипники и привод", text: "Концевые и промежуточные опоры, уплотнения, мотор-редуктор." },
        ],
        dataNote: "Защита от износа для абразивных продуктов, подшипники и уплотнения для горячих продуктов определяются отдельно по данным проекта.",
      },
      gallery: {
        title: "Фотогалерея шнековых конвейеров",
        captions: [
          "Шнековые лопасти в корпусе",
          "Подключение трубчатого шнека под силосом",
          "Трубчатые шнеки у выпусков силосов",
          "Шнековая линия на металлоконструкции",
          "Желобчатый шнек с мотор-редуктором",
          "Шнековая линия на опорах при монтаже",
          "Шнек-питатель под силосом",
          "Наклонные шнеки с площадкой и лестницей",
          "Длинный трубчатый шнек снаружи здания",
          "Наклонный трубчатый шнек из нержавеющей стали",
          "Желобчатые шнеки на площадке",
          "Шнековый конвейер из нержавеющей стали на опорах",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о шнековом конвейере",
        items: [
          {
            question: "Как определяется производительность шнека?",
            answer:
              "Производительность зависит от диаметра, шага, частоты вращения и заполнения. Заполнение выбирается по сыпучести и абразивности; с ростом наклона производительность снижается.",
          },
          {
            question: "Дозирует ли шнек?",
            answer: "С регулированием частоты шнек обеспечивает объёмную подачу. Для точного весового дозирования он проектируется вместе с весовой системой.",
          },
          {
            question: "Трубчатый или желобчатый корпус?",
            answer:
              "Трубчатый корпус удобен для герметичности на наклонных трассах и с пылящими продуктами. Желобчатый облегчает очистку и обслуживание при липких продуктах.",
          },
          {
            question: "Можно ли использовать наклонный шнек?",
            answer: "Да, но с увеличением наклона снижается эффективность; диаметр, шаг и частота подбираются с учётом этого.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид материала, крупность, насыпная плотность, влажность и температура, производительность, длина и угол трассы, а также назначение — транспортировка или подача.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на шнековый конвейер",
        text: "Сообщите материал, производительность и геометрию трассы — вместе определим шнек и его подключения.",
        mailSubject: "Запрос предложения: шнековый конвейер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и крупность",
          "Насыпная плотность, влажность и температура",
          "Производительность (т/ч или м³/ч)",
          "Длина и угол наклона",
          "Транспортировка или подача",
          "Загрузочные и разгрузочные патрубки",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на шнековый конвейер.",
          "",
          "Материал:",
          "Плотность / влажность / температура:",
          "Производительность:",
          "Длина (м) / угол:",
          "Назначение (транспортировка / подача):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الناقل اللولبي | بريمات أنبوبية ومجرى U",
        description:
          "ناقلات لولبية أنبوبية وبمجرى U للمساحيق والحبيبات والمواد السائبة الرطبة. لتفريغ الصوامع ونقل المنتج بين المعدات والتلقيم الحجمي.",
      },
      breadcrumbLabel: "الناقل اللولبي",
      h1: "الناقل اللولبي – نقل مغلق للمساحيق والحبيبات",
      productCategory: "ناقل لولبي",
      overview: {
        imageAlt: "ناقلات لولبية مع محركات مخفضة",
        tagline: "ناقل لولبي",
        keyFacts: [
          { label: "المهمة", value: "نقل وتلقيم داخل غلاف مغلق" },
          { label: "الغلاف", value: "أنبوبي أو مجرى U" },
          { label: "المسار", value: "أفقي أو مائل" },
          { label: "التحجيم", value: "القطر والخطوة والسرعة ونسبة الامتلاء" },
        ],
        title: "نقل مغلق للمساحيق والحبيبات",
        paragraphs: [
          "يعمل الناقل اللولبي بدوران ريش لولبية على عمود تدفع المادة إلى الأمام داخل غلاف مغلق أنبوبي أو على شكل مجرى U. تدخل المادة من فتحة التلقيم وتخرج من فتحة التفريغ.",
          "تُحدَّد سعة النقل بقطر اللولب وخطوته وسرعة دورانه ونسبة امتلاء الغلاف. وتُختار نسبة الامتلاء والسرعة للمساحيق والحبيبات والمنتجات الرطبة وفق قابلية الانسياب والكشط، وتنخفض الكفاءة كلما زاد الميل.",
          "تُستخدم البريمات في مهمتين مختلفتين: النقل من نقطة إلى أخرى، والتلقيم المضبوط (الحجمي) من قادوس أو صومعة. وعند الحاجة إلى جرعات دقيقة بالوزن تُصمَّم البريمة مع نظام وزن.",
        ],
        note: "سعة البريمة حجمية؛ فعند السرعة نفسها تعطي المنتجات مختلفة الكثافة تدفقًا كتليًا مختلفًا. وإذا لزم التحكم بالكتلة ينبغي النظر في معدات الوزن.",
      },
      process: {
        title: "تدفق المادة في الناقل اللولبي",
        intro: "يوضح المخطط التدفق النموذجي الذي تنقل فيه البريمة المادة من فتحة التلقيم إلى فتحة التفريغ، ويمكن استخدامها أيضًا كمُلقِّم أسفل قادوس أو صومعة.",
        note: "في الخطوط الطويلة يُدعم عمود البريمة بمحامل وسيطة، ويُقيَّم انسياب المادة والتآكل في منطقتها بشكل منفصل.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "التلقيم", text: "تسقط المادة في فتحة التلقيم من قادوس أو صومعة أو معدة سابقة." },
          { title: "النقل باللولب", text: "تدفع الريش اللولبية الدوّارة المادة إلى الأمام داخل الغلاف." },
          { title: "التفريغ", text: "تُفرَّغ المادة من فتحة التفريغ إلى المعدة التالية." },
          { title: "تدفق مضبوط", text: "يمكن تعديل التدفق الحجمي بتغيير السرعة وفق متطلبات التلقيم." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الناقل اللولبي",
          svgDesc: "خط المادة: مخرج قادوس أو صومعة، الناقل اللولبي، فتحة التفريغ، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "فتحة التلقيم", sub: "قادوس أو مخرج صومعة" }],
          drum: { title: "الناقل اللولبي", sub: "لولب · غلاف أنبوبي أو مجرى" },
          after: [
            { title: "فتحة التفريغ", sub: "التفريغ" },
            { title: "المعدة التالية", sub: "عملية، رافع، صومعة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الناقل اللولبي",
        items: [
          {
            title: "تفريغ الصوامع",
            text: "سحب المادة من أسفل صوامع المساحيق ونقلها إلى نقاط العملية، ويمكن تجميع عدة مخارج صوامع ببريمات منفصلة.",
            imageAlt: "عدة بريمات أنبوبية تخرج من مخروط صومعة",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
          {
            title: "نقل المساحيق والحبيبات",
            text: "نقل المساحيق الكيميائية والمعدنية والإضافات بين معدات العملية داخل غلاف مغلق يساعد على الحد من الغبار.",
            imageAlt: "ناقلات لولبية أنبوبية أسفل الصوامع",
            linkLabel: "الصناعات الكيميائية",
          },
          {
            title: "المنتجات الرطبة واللزجة",
            text: "نقل الحمأة المنزوعة الماء والمنتجات الرطبة المماثلة ببريمات مجرى U، مع اختيار الخطوة والسرعة وإمكانية التنظيف للمنتجات اللزجة.",
            imageAlt: "مادة رطبة داكنة داخل بريمة مجرى U",
            linkLabel: "حمأة الصرف والمعالجة",
          },
          {
            title: "التلقيم الحجمي",
            text: "تلقيم منتظم للمعدة التالية ببريمة يُتحكم في سرعتها أسفل قادوس. وعند الحاجة إلى جرعات دقيقة بالكتلة تُصمَّم مع نظام وزن.",
            imageAlt: "بريمة تلقيم بمحرك مخفض أسفل قادوس",
            linkLabel: "أنظمة الجرعات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع ناقلات لولبية مخصصة",
        intro:
          "تصمم PRO MAKINA الناقلات اللولبية وفق خصائص المادة والسعة وهندسة الخط. ويُختار قطر اللولب وخطوته وسماكة العمود والريش ونوع الغلاف والمحامل والإحكام ونظام الإدارة معًا.",
        highlights: ["غلاف أنبوبي أو مجرى U", "اختيار القطر والخطوة والسرعة", "محامل طرفية ووسيطة", "حلول التآكل والإحكام"],
        figureAlt: "ريش وأعمدة لولبية مصنعة في ورشة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة", text: "نوع المادة وحجم الجسيمات والكثافة وقابلية الانسياب والرطوبة والحرارة." },
          { title: "السعة", text: "السعة الكتلية أو الحجمية ومهمة النقل أو التلقيم." },
          { title: "الهندسة", text: "طول النقل والميل وموقع فتحتي التلقيم والتفريغ." },
          { title: "اللولب والغلاف", text: "القطر الخارجي والخطوة وسماكة العمود والريش والأنبوب أو المجرى." },
          { title: "المحامل والإدارة", text: "المحامل الطرفية والوسيطة والإحكام والمحرك المخفض والتحكم في السرعة." },
        ],
        dataNote: "تُحدَّد الحماية من التآكل للمنتجات الكاشطة واختيار المحامل والإحكام للمنتجات الساخنة بشكل منفصل من بيانات المشروع.",
      },
      gallery: {
        title: "معرض صور الناقلات اللولبية",
        captions: [
          "ريش لولبية مركبة داخل الغلاف",
          "توصيل بريمة أنبوبية أسفل صومعة",
          "بريمات أنبوبية متصلة بمخارج الصوامع",
          "خط بريمات على هيكل فولاذي",
          "بريمة مجرى U مع محرك مخفض",
          "خط بريمات على دعامات في موقع التركيب",
          "بريمة تلقيم أسفل صومعة",
          "بريمات مائلة مع منصة وسلم",
          "بريمة أنبوبية طويلة خارج المنشأة",
          "بريمة أنبوبية مائلة من الفولاذ المقاوم للصدأ",
          "بريمات مجرى U على منصة",
          "ناقل لولبي من الفولاذ المقاوم للصدأ على قوائم",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الناقل اللولبي",
        items: [
          {
            question: "كيف تُحدَّد سعة الناقل اللولبي؟",
            answer:
              "تعتمد السعة على القطر والخطوة والسرعة ونسبة الامتلاء، وتُختار نسبة الامتلاء وفق قابلية الانسياب والكشط، وتنخفض السعة كلما زاد الميل.",
          },
          {
            question: "هل يقوم الناقل اللولبي بالجرعات؟",
            answer: "مع التحكم في السرعة يمكنه التلقيم الحجمي، أما الجرعات الدقيقة بالكتلة فتتطلب تصميمه مع نظام وزن.",
          },
          {
            question: "غلاف أنبوبي أم مجرى U؟",
            answer:
              "الغلاف الأنبوبي مفيد للإحكام في الخطوط المائلة ومع المنتجات المغبرة، بينما يسهّل مجرى U التنظيف والصيانة مع المنتجات اللزجة.",
          },
          {
            question: "هل يمكن استخدام بريمة مائلة؟",
            answer: "نعم، لكن كفاءة النقل تنخفض مع زيادة الميل، ويُختار القطر والخطوة والسرعة وفقًا لذلك.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المادة وحجم الجسيمات والكثافة والرطوبة والحرارة والسعة وطول النقل والميل، وما إذا كانت البريمة للنقل أو للتلقيم.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لناقل لولبي",
        text: "شاركنا المادة والسعة وهندسة الخط، لنحدد معًا الناقل اللولبي ووصلاته.",
        mailSubject: "طلب عرض سعر: ناقل لولبي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وحجم الجسيمات",
          "الكثافة والرطوبة والحرارة",
          "السعة (طن/ساعة أو م³/ساعة)",
          "طول النقل والميل",
          "مهمة النقل أو التلقيم",
          "وصلات التلقيم والتفريغ",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لناقل لولبي.",
          "",
          "المادة:",
          "الكثافة / الرطوبة / الحرارة:",
          "السعة:",
          "الطول (م) / الميل:",
          "المهمة (نقل / تلقيم):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
