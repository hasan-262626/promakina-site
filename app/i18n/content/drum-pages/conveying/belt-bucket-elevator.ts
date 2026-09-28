import type { DrumPageConfig } from "../types";

// Bantlı elevatör: banda bağlı kovalarla toz ve granül ürünlerin dikey taşınması (bantlı kovalı elevatör).
// Yükseklik, bant hızı ve kapasite verilmez; uygulama kartlarında lisanslı malzeme fotoğrafları kullanılır.
// Not: "elevator bantlı" klasör adındaki boşluk + Türkçe karakter üretim görsel optimizasyonunda 400 hatası verdiği
// için kullanılan görseller ASCII adlı "elevator-bantli" klasörüne kopyalanmıştır (orijinaller yerinde durur).
const img = (file: string) => `/images/elevator-bantli/${file}`;
const app = (file: string) => `/images/tasima-uygulamalari/${file}`;

export const beltBucketElevatorPage: DrumPageConfig = {
  key: "beltBucketElevator",
  group: "conveying",
  trSlug: "bantli-elevatorler",
  mainImage: img("elevbant13.jpg"),
  applications: [
    { image: app("soya-tahil-bosaltma.webp"), link: "storageSystems" },
    { image: app("soya-kuspesi.webp"), link: "dosingSystems" },
    { image: app("plastik-granul.webp"), link: "chemicalProcess" },
  ],
  figure: img("elevbant6.jpg"),
  gallery: [
    img("elevbant2.jpg"),
    img("elevbant4.jpg"),
    img("elevbant9.jpg"),
    img("elevbant11.jpg"),
    img("elevbant15.jpg"),
    img("elevbant16.jpg"),
    img("elevbant17.jpg"),
    img("elevbant18.jpg"),
    img("elevbant20.jpeg"),
    img("elevbant23.jpg"),
    img("elevbant24.jpg"),
    img("elevbant29.jpg"),
  ],
  sectors: ["fertilizerPlants", "chemicalProcess", "recycling"],
  resources: ["bucketElevator", "beltConveyor", "tripperConveyor", "bunkersHoppers"],
  machines: ["storageSystems", "dosingSystems", "screeningSystems", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Bantlı Elevatör İmalatı | Bantlı Kovalı Elevatör | PRO MAKİNA",
        description:
          "Toz ve granül ürünleri banda bağlı kovalarla dikey taşıyan bantlı kovalı elevatör imalatı. Tahıl, yem hammaddesi, granül ve plastik gibi ürünler için projeye özel.",
      },
      breadcrumbLabel: "Bantlı Elevatörler",
      h1: "Bantlı Elevatör – Toz ve Granül Ürünler için Bantlı Kovalı Elevatör",
      productCategory: "Bantlı Kovalı Elevatör",
      overview: {
        imageAlt: "Bantlı kovalı elevatörün baş bölümü ve tahliye ağzı",
        tagline: "Bantlı Kovalı Elevatör",
        keyFacts: [
          { label: "Görev", value: "Toz ve granül ürünlerin dikey taşınması" },
          { label: "Taşıyıcı", value: "Bant ve kovalar" },
          { label: "Tahrik", value: "Üst tambur (sürtünmeli tahrik)" },
          { label: "Boyutlandırma", value: "Kapasite, yükseklik ve ürün özelliği" },
        ],
        title: "Bant ve Kovalarla Kontrollü Dikey Taşıma",
        paragraphs: [
          "Bantlı elevatör, kovaların cıvatalarla bir banda bağlandığı ve bandın üstteki tahrik tamburu ile alttaki ayak tamburu arasında döndüğü dikey taşıma ekipmanıdır. Kovalar malzemeyi ayak bölümünde doldurur, kapalı gövde içinde yukarı taşır ve baş bölümde boşaltır.",
          "Zincirli elevatörden farklı olarak hareket, tambur ile bant arasındaki sürtünmeyle iletilir. Bu nedenle bant gerdirme ve bant merkezleme, elevatörün düzgün çalışması için belirleyici konulardır; kaymayı izlemek için hız sensörleri kullanılır.",
          "Bant tipi ve kova malzemesi, kova genişliği ve aralığı; ürünün tane boyutu, akışkanlığı, sıcaklığı ve kırılganlığına göre seçilir. Tahıl, yem hammaddesi, granül ve plastik gibi toz ve granül ürünler bantlı elevatörlerin tipik uygulama alanlarıdır.",
        ],
        note: "Bantlı elevatörde ürün ayak bölümünde birikirse bant kayabilir veya tıkanma oluşabilir; besleme miktarının elevatör kapasitesiyle uyumlu tutulması ve hız izleme bu nedenle önemlidir.",
      },
      process: {
        title: "Bantlı Elevatör Malzeme Akışı",
        intro:
          "Şema, bantlı elevatörün ürünü alt besleme ağzından alıp üst tahliye ağzına taşıdığı tipik akışı gösterir.",
        note: "Elevatör yalnızca dikey taşıma yapar; besleme öncesi ve tahliye sonrası ekipmanlar tesis kurgusuna göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Alt besleme", text: "Ürün ayak bölümündeki besleme ağzından elevatöre alınır." },
          { title: "Kovalara dolum", text: "Banda bağlı kovalar ürünü ayak bölümünde doldurur." },
          { title: "Bantla yükseltme", text: "Bant, dolu kovaları kapalı gövde içinde yukarı taşır." },
          { title: "Üst tahliye", text: "Kovalar üst tamburda dönerken ürün tahliye ağzına boşalır." },
        ],
        flow: {
          svgTitle: "Bantlı elevatör malzeme akış şeması",
          svgDesc: "Malzeme hattı: alt besleme ağzı, bantlı kovalı elevatör, üst tahliye ağzı, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Alt besleme", sub: "Ayak besleme ağzı" }],
          drum: { title: "BANTLI ELEVATÖR", sub: "bant · kova · dikey" },
          after: [
            { title: "Üst tahliye", sub: "Baş tambur ve şut" },
            { title: "Sonraki ekipman", sub: "Silo, konveyör, proses" },
          ],
        },
      },
      applications: {
        title: "Bantlı Elevatör Uygulama Alanları",
        items: [
          {
            title: "Tahıl ve Yağlı Tohum",
            text: "Tahıl ve soya gibi ürünlerin kabul, silo ve proses noktaları arasında dikey taşınması. Kova tipi ve bant hızı ürünün kırılmasını sınırlayacak şekilde seçilir.",
            imageAlt: "Depoya dökülen soya taneleri",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
          {
            title: "Yem Hammaddeleri",
            text: "Küspe ve benzeri yem hammaddelerinin dozajlama ve karıştırma öncesi yükseltilmesi. Toz ve nemli ürünlerde besleme ve tahliye ağızları buna göre tasarlanır.",
            imageAlt: "Avuç içinde soya küspesi",
            linkLabel: "Dozajlama Sistemleri",
          },
          {
            title: "Plastik ve Kimyasal Granüller",
            text: "Plastik granül ve benzeri serbest akışlı granüllerin silo ve proses girişlerine dikey taşınması. Kova ve bant malzemesi ürüne göre seçilir.",
            imageAlt: "Renkli plastik granüller",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Bantlı Elevatör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA bantlı elevatörleri kapasite, elevatör yüksekliği ve ürün özelliklerine göre projelendirir. Bant ve kovalar, baş ve ayak tamburları, gerdirme ve merkezleme, gövde, bakım kapakları ile izleme ekipmanları birlikte tasarlanır.",
        highlights: ["Ürüne göre bant ve kova seçimi", "Baş ve ayak tamburları", "Bant gerdirme ve merkezleme", "Hız, kayma ve kaçıklık izleme"],
        figureAlt: "Atölyede bantlı elevatörün baş ve gövde bölümleri",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, sıcaklık ve kırılganlık." },
          { title: "Kapasite ve Yükseklik", text: "Saatlik kapasite ve besleme-tahliye arası yükseklik." },
          { title: "Bant ve Kova", text: "Bant tipi, kova malzemesi, kova genişliği ve aralığı." },
          { title: "Tambur ve Gerdirme", text: "Baş ve ayak tamburları, gerdirme ve merkezleme düzeni." },
          { title: "İzleme ve Bakım", text: "Hız ve kaçıklık sensörleri, bakım kapakları ve erişim." },
        ],
        dataNote: "Bant hızı, kova ölçüsü ve tahrik gücü proje verisiyle hesaplanır; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Bantlı Elevatör Fotoğraf Galerisi",
        captions: [
          "Bina cephesinde yükselen elevatör gövdesi",
          "Big bag istasyonu yanında elevatör",
          "Elevatör gövdesinin vinçle montajı",
          "Silo yanında dikey elevatör",
          "Mavi kaplı tesiste elevatör kulesi",
          "Silolar yanında elevatör hattı",
          "Çatıda elevatör başı ve tahrik grupları",
          "Silo tesisinde elevatör",
          "Elevatör ayak bölümü",
          "Kapalı tesiste elevatör ve konveyör",
          "Bina içinde elevatör gövdesi",
          "Açık sahada elevatör ve konveyör",
        ],
      },
      faq: {
        title: "Bantlı Elevatör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Bantlı elevatör ile zincirli elevatör arasındaki fark nedir?",
            answer:
              "Bantlı elevatörde kovalar banda bağlıdır ve hareket tambur ile bant arasındaki sürtünmeyle iletilir. Zincirli elevatörde ise kovalar zincire bağlıdır ve dişli ile tahrik edilir. Bantlı yapı toz ve granül ürünlerde yaygın kullanılır.",
          },
          {
            question: "Bant kayması nasıl önlenir?",
            answer:
              "Doğru bant gerdirmesi, uygun tambur yüzeyi ve besleme miktarının kapasiteyle uyumlu tutulması kaymayı önlemeye yardımcı olur. Hız sensörü kaymayı izlemek için kullanılır.",
          },
          {
            question: "Kova tipi nasıl seçilir?",
            answer:
              "Kova tipi, malzemesi ve aralığı; ürünün tane boyutu, akışkanlığı, sıcaklığı ve kapasite ile boşaltma düzenine göre seçilir.",
          },
          {
            question: "Kırılgan ürünler taşınabilir mi?",
            answer:
              "Kırılgan ürünlerde bant hızı, kova tipi ve besleme-boşaltma düzeni ürüne zarar vermeyi sınırlayacak şekilde seçilir; uygunluk ürün bazında değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün türü, tane boyutu, yığın yoğunluğu, ürün sıcaklığı, saatlik kapasite ve besleme ile tahliye arasındaki yükseklik temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Bantlı elevatör için teknik teklif alın",
        text: "Ürününüz, kapasiteniz ve elevatör yüksekliğinize göre bantlı elevatörü ve bağlantılarını birlikte netleştirelim.",
        mailSubject: "Bantlı Elevatör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü ve tane boyutu",
          "Yığın yoğunluğu ve ürün sıcaklığı",
          "Saatlik kapasite (ton/saat)",
          "Besleme ve tahliye arası yükseklik",
          "Ürünün kırılganlık ve tozuma durumu",
          "Besleme ve tahliye bağlantıları",
        ],
        inquiryLines: [
          "Merhaba, bantlı elevatör için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Tane boyutu:",
          "Ürün sıcaklığı:",
          "Kapasite (ton/saat):",
          "Yükseklik (m):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Belt Bucket Elevator | Powders and Granules",
        description:
          "Belt bucket elevators that lift powders and granules vertically with buckets bolted to a belt. Project-specific design for grain, feed ingredients, granules and plastics.",
      },
      breadcrumbLabel: "Belt Bucket Elevator",
      h1: "Belt Bucket Elevator – Vertical Conveying for Powders and Granules",
      productCategory: "Belt Bucket Elevator",
      overview: {
        imageAlt: "Head section and discharge spout of a belt bucket elevator",
        tagline: "Belt Bucket Elevator",
        keyFacts: [
          { label: "Task", value: "Vertical transport of powders and granules" },
          { label: "Conveying element", value: "Belt and buckets" },
          { label: "Drive", value: "Head pulley (friction drive)" },
          { label: "Sizing", value: "Capacity, lift height and product" },
        ],
        title: "Controlled Vertical Conveying with Belt and Buckets",
        paragraphs: [
          "A belt bucket elevator is vertical conveying equipment in which buckets are bolted to a belt that runs between the head drive pulley at the top and the boot pulley at the bottom. The buckets fill at the boot, carry material upwards inside an enclosed casing and discharge it at the head.",
          "Unlike a chain elevator, motion is transmitted by friction between pulley and belt. Belt tensioning and belt tracking are therefore decisive for smooth operation; speed sensors are used to monitor slip.",
          "Belt type, bucket material, bucket width and spacing are selected according to particle size, flowability, temperature and fragility of the product. Powders and granules such as grain, feed ingredients, granules and plastics are typical applications.",
        ],
        note: "If product builds up in the boot of a belt elevator, the belt may slip or the boot may choke; keeping the feed rate in line with elevator capacity and monitoring speed are therefore important.",
      },
      process: {
        title: "Belt Bucket Elevator Material Flow",
        intro: "The diagram shows the typical flow in which the belt bucket elevator takes product at the boot inlet and carries it to the head discharge.",
        note: "The elevator only conveys vertically; equipment before feeding and after discharge depends on the plant concept.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Boot feeding", text: "Product enters the elevator through the inlet at the boot." },
          { title: "Bucket filling", text: "Buckets bolted to the belt fill with product at the boot." },
          { title: "Lifting with the belt", text: "The belt carries the loaded buckets upwards in the enclosed casing." },
          { title: "Head discharge", text: "As the buckets turn over the head pulley, product falls into the discharge spout." },
        ],
        flow: {
          svgTitle: "Belt bucket elevator material flow diagram",
          svgDesc: "Material line: boot inlet, belt bucket elevator, head discharge, downstream equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Boot feeding", sub: "Boot inlet" }],
          drum: { title: "BELT ELEVATOR", sub: "belt · bucket · vertical" },
          after: [
            { title: "Head discharge", sub: "Head pulley and spout" },
            { title: "Next equipment", sub: "Silo, conveyor, process" },
          ],
        },
      },
      applications: {
        title: "Belt Bucket Elevator Applications",
        items: [
          {
            title: "Grain and Oilseeds",
            text: "Vertical transport of grain and soybeans between intake, silos and process points. Bucket type and belt speed are chosen to limit product breakage.",
            imageAlt: "Soybeans pouring into a storage pile",
            linkLabel: "Storage and Feeding Systems",
          },
          {
            title: "Feed Ingredients",
            text: "Lifting meal and similar feed ingredients ahead of dosing and mixing. For dusty or moist products, inlets and discharge spouts are designed accordingly.",
            imageAlt: "Soybean meal held in two hands",
            linkLabel: "Dosing Systems",
          },
          {
            title: "Plastic and Chemical Granules",
            text: "Vertical transport of plastic pellets and similar free-flowing granules to silos and process inlets. Bucket and belt materials are selected for the product.",
            imageAlt: "Coloured plastic pellets",
            linkLabel: "Chemical Process Industry",
          },
        ],
      },
      design: {
        title: "Custom Belt Bucket Elevator Design and Manufacturing",
        intro:
          "PRO MAKINA engineers belt bucket elevators around capacity, lift height and product properties. Belt and buckets, head and boot pulleys, take-up and tracking, casing, inspection doors and monitoring devices are designed together.",
        highlights: ["Belt and buckets matched to product", "Head and boot pulleys", "Belt take-up and tracking", "Speed, slip and misalignment monitoring"],
        figureAlt: "Head and casing sections of a belt bucket elevator in a workshop",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, temperature and fragility." },
          { title: "Capacity and Height", text: "Hourly capacity and lift height between inlet and discharge." },
          { title: "Belt and Bucket", text: "Belt type, bucket material, bucket width and spacing." },
          { title: "Pulleys and Take-up", text: "Head and boot pulleys, take-up and tracking arrangement." },
          { title: "Monitoring and Maintenance", text: "Speed and misalignment sensors, inspection doors and access." },
        ],
        dataNote: "Belt speed, bucket size and drive power are calculated from project data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Belt Bucket Elevator Photo Gallery",
        captions: [
          "Elevator casing rising along a building facade",
          "Elevator next to a big bag station",
          "Crane installation of an elevator casing",
          "Vertical elevator next to a silo",
          "Elevator tower at a blue-clad plant",
          "Elevator line next to silos",
          "Elevator head and drive units on a roof",
          "Elevator at a silo plant",
          "Elevator boot section",
          "Elevator and conveyor in an enclosed plant",
          "Elevator casing inside a building",
          "Elevator and conveyor in an open yard",
        ],
      },
      faq: {
        title: "Belt Bucket Elevator FAQ",
        items: [
          {
            question: "What is the difference between a belt and a chain bucket elevator?",
            answer:
              "On a belt elevator the buckets are bolted to a belt and motion is transmitted by friction between pulley and belt. On a chain elevator the buckets are fixed to a chain driven by a sprocket. The belt design is widely used for powders and granules.",
          },
          {
            question: "How is belt slip prevented?",
            answer:
              "Correct belt tension, a suitable pulley surface and keeping the feed rate in line with capacity help prevent slip. A speed sensor is used to monitor it.",
          },
          {
            question: "How is the bucket type selected?",
            answer: "Bucket type, material and spacing are selected according to particle size, flowability, temperature, capacity and the discharge arrangement.",
          },
          {
            question: "Can fragile products be handled?",
            answer:
              "For fragile products, belt speed, bucket type and feeding and discharge arrangement are chosen to limit damage; suitability is assessed per product.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type, particle size, bulk density, product temperature, hourly capacity and the lift height between inlet and discharge.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a belt bucket elevator",
        text: "Share your product, capacity and lift height, and we will define the belt bucket elevator and its connections together with you.",
        mailSubject: "Belt Bucket Elevator Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type and particle size",
          "Bulk density and product temperature",
          "Hourly capacity (t/h)",
          "Lift height between inlet and discharge",
          "Fragility and dust behaviour of the product",
          "Inlet and discharge connections",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a belt bucket elevator.",
          "",
          "Product:",
          "Particle size:",
          "Product temperature:",
          "Capacity (t/h):",
          "Lift height (m):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ленточный ковшовый элеватор | Нории для порошков и гранул",
        description:
          "Ленточные ковшовые элеваторы (нории) для вертикального подъёма порошков и гранул ковшами на ленте. Проекты для зерна, кормового сырья, гранул и пластиков.",
      },
      breadcrumbLabel: "Ленточный ковшовый элеватор",
      h1: "Ленточный ковшовый элеватор – вертикальный транспорт порошков и гранул",
      productCategory: "Ленточный ковшовый элеватор",
      overview: {
        imageAlt: "Головка и разгрузочный патрубок ленточного ковшового элеватора",
        tagline: "Ленточный ковшовый элеватор",
        keyFacts: [
          { label: "Задача", value: "Вертикальный подъём порошков и гранул" },
          { label: "Тяговый орган", value: "Лента и ковши" },
          { label: "Привод", value: "Головной барабан (фрикционный)" },
          { label: "Расчёт", value: "Производительность, высота, продукт" },
        ],
        title: "Контролируемый вертикальный подъём лентой и ковшами",
        paragraphs: [
          "Ленточный ковшовый элеватор (нория) — оборудование вертикального транспорта, в котором ковши закреплены болтами на ленте, огибающей приводной барабан в головке и натяжной барабан в башмаке. Ковши заполняются в башмаке, поднимают материал в закрытом кожухе и разгружают его в головке.",
          "В отличие от цепного элеватора, движение передаётся трением между барабаном и лентой. Поэтому натяжение и центрирование ленты определяют стабильную работу; для контроля пробуксовки применяются датчики скорости.",
          "Тип ленты, материал, ширина и шаг ковшей выбираются по крупности, сыпучести, температуре и хрупкости продукта. Типичные применения — зерно, кормовое сырьё, гранулы и пластики.",
        ],
        note: "При скоплении продукта в башмаке лента может пробуксовывать или башмак может забиться; поэтому важно согласовывать подачу с производительностью и контролировать скорость.",
      },
      process: {
        title: "Движение материала в ленточном элеваторе",
        intro: "Схема показывает типовой поток: элеватор принимает продукт в загрузочный патрубок башмака и поднимает его к разгрузке в головке.",
        note: "Элеватор выполняет только вертикальный подъём; оборудование до загрузки и после разгрузки определяется концепцией предприятия.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Загрузка в башмак", text: "Продукт поступает в элеватор через загрузочный патрубок башмака." },
          { title: "Заполнение ковшей", text: "Ковши на ленте заполняются продуктом в башмаке." },
          { title: "Подъём лентой", text: "Лента поднимает гружёные ковши в закрытом кожухе." },
          { title: "Разгрузка в головке", text: "При огибании головного барабана продукт высыпается в патрубок." },
        ],
        flow: {
          svgTitle: "Схема движения материала в ленточном ковшовом элеваторе",
          svgDesc: "Линия материала: загрузка в башмак, ленточный ковшовый элеватор, разгрузка в головке, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Патрубок башмака" }],
          drum: { title: "ЛЕНТОЧНЫЙ ЭЛЕВАТОР", sub: "лента · ковш · подъём" },
          after: [
            { title: "Разгрузка", sub: "Головной барабан" },
            { title: "Далее", sub: "Силос, конвейер, процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения ленточного ковшового элеватора",
        items: [
          {
            title: "Зерно и масличные культуры",
            text: "Вертикальная транспортировка зерна и сои между приёмкой, силосами и производством. Тип ковшей и скорость ленты выбираются так, чтобы ограничить дробление.",
            imageAlt: "Соя, ссыпаемая в складской бурт",
            linkLabel: "Системы хранения и подачи",
          },
          {
            title: "Кормовое сырьё",
            text: "Подъём шрота и подобного кормового сырья перед дозированием и смешиванием. Для пылящих или влажных продуктов соответственно проектируются загрузка и разгрузка.",
            imageAlt: "Соевый шрот в ладонях",
            linkLabel: "Системы дозирования",
          },
          {
            title: "Пластиковые и химические гранулы",
            text: "Вертикальная подача пластиковых гранул и подобных сыпучих гранул в силосы и на технологические входы. Материалы ковшей и ленты подбираются под продукт.",
            imageAlt: "Цветные пластиковые гранулы",
            linkLabel: "Химическая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ленточных ковшовых элеваторов",
        intro:
          "PRO MAKINA проектирует ленточные элеваторы исходя из производительности, высоты подъёма и свойств продукта. Лента и ковши, головной и башмачный барабаны, натяжение и центрирование, кожух, смотровые люки и средства контроля разрабатываются совместно.",
        highlights: ["Лента и ковши под продукт", "Головной и башмачный барабаны", "Натяжение и центрирование ленты", "Контроль скорости, пробуксовки и схода"],
        figureAlt: "Головная и кожуховая секции ленточного элеватора в цехе",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид, крупность, насыпная плотность, температура и хрупкость." },
          { title: "Производительность и высота", text: "Часовая производительность и высота подъёма." },
          { title: "Лента и ковш", text: "Тип ленты, материал, ширина и шаг ковшей." },
          { title: "Барабаны и натяжение", text: "Головной и башмачный барабаны, натяжение и центрирование." },
          { title: "Контроль и обслуживание", text: "Датчики скорости и схода, люки и доступ." },
        ],
        dataNote: "Скорость ленты, размер ковшей и мощность привода рассчитываются по данным проекта; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея ленточных ковшовых элеваторов",
        captions: [
          "Кожух элеватора вдоль фасада здания",
          "Элеватор рядом со станцией биг-бэгов",
          "Монтаж кожуха элеватора краном",
          "Вертикальный элеватор у силоса",
          "Башня элеватора на предприятии с синей облицовкой",
          "Линия элеватора рядом с силосами",
          "Головка элеватора и приводы на кровле",
          "Элеватор на силосном комплексе",
          "Башмак элеватора",
          "Элеватор и конвейер в закрытом цехе",
          "Кожух элеватора внутри здания",
          "Элеватор и конвейер на открытой площадке",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о ленточном ковшовом элеваторе",
        items: [
          {
            question: "Чем ленточный элеватор отличается от цепного?",
            answer:
              "В ленточном элеваторе ковши закреплены на ленте, а движение передаётся трением между барабаном и лентой. В цепном — ковши на цепи с приводом от звёздочки. Ленточная конструкция широко применяется для порошков и гранул.",
          },
          {
            question: "Как предотвратить пробуксовку ленты?",
            answer: "Правильное натяжение, подходящая поверхность барабана и подача, согласованная с производительностью; для контроля используется датчик скорости.",
          },
          {
            question: "Как выбирается тип ковша?",
            answer: "Тип, материал и шаг ковшей выбираются по крупности, сыпучести, температуре, производительности и схеме разгрузки.",
          },
          {
            question: "Можно ли транспортировать хрупкие продукты?",
            answer: "Для хрупких продуктов скорость ленты, тип ковшей и схема загрузки и разгрузки выбираются так, чтобы ограничить повреждения; пригодность оценивается по продукту.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта, крупность, насыпная плотность, температура, часовая производительность и высота подъёма.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ленточный элеватор",
        text: "Сообщите продукт, производительность и высоту подъёма — вместе определим элеватор и его подключения.",
        mailSubject: "Запрос предложения: ленточный ковшовый элеватор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта и крупность",
          "Насыпная плотность и температура",
          "Часовая производительность (т/ч)",
          "Высота подъёма",
          "Хрупкость и пыление продукта",
          "Загрузочные и разгрузочные патрубки",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ленточный ковшовый элеватор.",
          "",
          "Продукт:",
          "Крупность:",
          "Температура продукта:",
          "Производительность (т/ч):",
          "Высота подъёма (м):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "رافع قواديس بالسير | نقل رأسي للمساحيق والحبيبات",
        description:
          "رافعات قواديس بالسير ترفع المساحيق والحبيبات رأسيًا بقواديس مثبتة على سير. تصميم مخصص للحبوب ومكونات الأعلاف والحبيبات والبلاستيك.",
      },
      breadcrumbLabel: "رافع قواديس بالسير",
      h1: "رافع قواديس بالسير – نقل رأسي للمساحيق والحبيبات",
      productCategory: "رافع قواديس بالسير",
      overview: {
        imageAlt: "قسم الرأس ومخرج التفريغ في رافع قواديس بالسير",
        tagline: "رافع قواديس بالسير",
        keyFacts: [
          { label: "المهمة", value: "نقل رأسي للمساحيق والحبيبات" },
          { label: "عنصر النقل", value: "سير وقواديس" },
          { label: "الإدارة", value: "أسطوانة الرأس (إدارة بالاحتكاك)" },
          { label: "التحجيم", value: "السعة وارتفاع الرفع والمنتج" },
        ],
        title: "نقل رأسي مضبوط بالسير والقواديس",
        paragraphs: [
          "رافع القواديس بالسير معدة نقل رأسي تُثبَّت فيها القواديس بالبراغي على سير يدور بين أسطوانة الإدارة في الرأس وأسطوانة القاعدة في الأسفل. تمتلئ القواديس في القاعدة وترفع المادة داخل غلاف مغلق وتفرغها في الرأس.",
          "وعلى خلاف الرافع السلسلي تنتقل الحركة بالاحتكاك بين الأسطوانة والسير، لذلك يُعد شد السير وضبط مساره حاسمين لسلامة التشغيل، وتُستخدم حساسات السرعة لمراقبة الانزلاق.",
          "يُختار نوع السير ومادة القواديس وعرضها والمسافة بينها وفق حجم الجسيمات وقابلية الانسياب والحرارة وهشاشة المنتج. ومن التطبيقات النموذجية الحبوب ومكونات الأعلاف والحبيبات والبلاستيك.",
        ],
        note: "إذا تراكم المنتج في قاعدة الرافع قد ينزلق السير أو تنسد القاعدة، لذا من المهم مواءمة التلقيم مع سعة الرافع ومراقبة السرعة.",
      },
      process: {
        title: "تدفق المادة في رافع القواديس بالسير",
        intro: "يوضح المخطط التدفق النموذجي الذي يستقبل فيه الرافع المنتج من فتحة القاعدة ويرفعه إلى مخرج التفريغ في الرأس.",
        note: "يقتصر عمل الرافع على النقل الرأسي، وتتحدد المعدات قبل التلقيم وبعد التفريغ وفق تصور المنشأة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "التلقيم في القاعدة", text: "يدخل المنتج الرافع عبر فتحة التلقيم في القاعدة." },
          { title: "ملء القواديس", text: "تمتلئ القواديس المثبتة على السير بالمنتج في القاعدة." },
          { title: "الرفع بالسير", text: "يرفع السير القواديس المحمّلة داخل الغلاف المغلق." },
          { title: "التفريغ في الرأس", text: "عند دوران القواديس حول أسطوانة الرأس يسقط المنتج في مخرج التفريغ." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في رافع القواديس بالسير",
          svgDesc: "خط المادة: فتحة القاعدة، رافع القواديس بالسير، التفريغ في الرأس، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "فتحة القاعدة" }],
          drum: { title: "رافع بالسير", sub: "سير · قادوس · رأسي" },
          after: [
            { title: "التفريغ", sub: "أسطوانة الرأس والمخرج" },
            { title: "المعدة التالية", sub: "صومعة، ناقل، عملية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام رافع القواديس بالسير",
        items: [
          {
            title: "الحبوب والبذور الزيتية",
            text: "نقل الحبوب وفول الصويا رأسيًا بين الاستلام والصوامع ونقاط العملية، مع اختيار نوع القواديس وسرعة السير للحد من تكسر المنتج.",
            imageAlt: "حبوب صويا تنسكب في كومة تخزين",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
          {
            title: "مكونات الأعلاف",
            text: "رفع الكُسب ومكونات الأعلاف المماثلة قبل الجرعات والخلط، مع تصميم فتحات التلقيم والتفريغ للمنتجات المغبرة أو الرطبة.",
            imageAlt: "كُسب الصويا في راحتي اليدين",
            linkLabel: "أنظمة الجرعات",
          },
          {
            title: "الحبيبات البلاستيكية والكيميائية",
            text: "نقل الحبيبات البلاستيكية والحبيبات سهلة الانسياب المماثلة رأسيًا إلى الصوامع ومداخل العملية، مع اختيار مادة القواديس والسير وفق المنتج.",
            imageAlt: "حبيبات بلاستيكية ملونة",
            linkLabel: "الصناعات الكيميائية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع رافعات قواديس بالسير مخصصة",
        intro:
          "تصمم PRO MAKINA رافعات القواديس بالسير وفق السعة وارتفاع الرفع وخصائص المنتج. ويُصمَّم السير والقواديس وأسطوانتا الرأس والقاعدة ووحدة الشد وضبط المسار والغلاف وأبواب الفحص ومعدات المراقبة معًا.",
        highlights: ["سير وقواديس مطابقة للمنتج", "أسطوانتا الرأس والقاعدة", "شد السير وضبط مساره", "مراقبة السرعة والانزلاق والانحراف"],
        figureAlt: "قسما الرأس والغلاف لرافع قواديس بالسير في ورشة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الجسيمات والكثافة الظاهرية والحرارة والهشاشة." },
          { title: "السعة والارتفاع", text: "السعة بالساعة وارتفاع الرفع بين التلقيم والتفريغ." },
          { title: "السير والقادوس", text: "نوع السير ومادة القواديس وعرضها والمسافة بينها." },
          { title: "الأسطوانات والشد", text: "أسطوانتا الرأس والقاعدة وترتيب الشد وضبط المسار." },
          { title: "المراقبة والصيانة", text: "حساسات السرعة والانحراف وأبواب الفحص وسهولة الوصول." },
        ],
        dataNote: "تُحسب سرعة السير وحجم القواديس وقدرة الإدارة من بيانات المشروع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور رافعات القواديس بالسير",
        captions: [
          "غلاف رافع يصعد على واجهة مبنى",
          "رافع بجوار محطة أكياس كبيرة",
          "تركيب غلاف رافع بالرافعة",
          "رافع رأسي بجوار صومعة",
          "برج رافع في منشأة بواجهات زرقاء",
          "خط رافع بجوار الصوامع",
          "رأس الرافع ووحدات الإدارة على السطح",
          "رافع في منشأة صوامع",
          "قاعدة الرافع",
          "رافع وناقل داخل منشأة مغلقة",
          "غلاف رافع داخل مبنى",
          "رافع وناقل في ساحة مفتوحة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول رافع القواديس بالسير",
        items: [
          {
            question: "ما الفرق بين رافع القواديس بالسير والرافع السلسلي؟",
            answer:
              "في الرافع بالسير تُثبَّت القواديس على سير وتنتقل الحركة بالاحتكاك بين الأسطوانة والسير، أما في الرافع السلسلي فتُثبَّت على سلسلة يديرها ترس. ويُستخدم التصميم بالسير على نطاق واسع للمساحيق والحبيبات.",
          },
          {
            question: "كيف يُمنع انزلاق السير؟",
            answer: "يساعد الشد الصحيح وسطح الأسطوانة المناسب ومواءمة التلقيم مع السعة على منعه، ويُستخدم حساس السرعة لمراقبته.",
          },
          {
            question: "كيف يُختار نوع القادوس؟",
            answer: "يُختار نوع القواديس ومادتها والمسافة بينها وفق حجم الجسيمات وقابلية الانسياب والحرارة والسعة وترتيب التفريغ.",
          },
          {
            question: "هل يمكن نقل المنتجات الهشة؟",
            answer: "تُختار سرعة السير ونوع القواديس وترتيب التلقيم والتفريغ للحد من الضرر، وتُقيَّم الملاءمة حسب المنتج.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وحجم الجسيمات والكثافة الظاهرية وحرارة المنتج والسعة بالساعة وارتفاع الرفع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لرافع قواديس بالسير",
        text: "شاركنا المنتج والسعة وارتفاع الرفع، لنحدد معًا الرافع ووصلاته.",
        mailSubject: "طلب عرض سعر: رافع قواديس بالسير",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج وحجم الجسيمات",
          "الكثافة الظاهرية وحرارة المنتج",
          "السعة بالساعة (طن/ساعة)",
          "ارتفاع الرفع",
          "هشاشة المنتج وإثارته للغبار",
          "وصلات التلقيم والتفريغ",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لرافع قواديس بالسير.",
          "",
          "المنتج:",
          "حجم الجسيمات:",
          "حرارة المنتج:",
          "السعة (طن/ساعة):",
          "ارتفاع الرفع (م):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
