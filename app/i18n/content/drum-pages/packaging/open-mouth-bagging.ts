import type { DrumPageConfig } from "../types";

// Açık ağız torbalama: toz/granül ürünlerin açık ağızlı torbalara tartımlı dolumu. Mevcut veride besleyici tipi
// (helezon/bant/serbest akış) veya net/brüt tartım doğrulanmadığından bunlar projeye göre seçilen seçenekler olarak anlatılır.
// Torba/dakika, hassasiyet veya kapasite değeri verilmez. Ana görsel paket1 (torbalama makinesi); önceki sayfada big-bag
// görseli (paket4) kullanılıyordu. Görselin lisans kaydı yok.
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const openMouthBaggingPage: DrumPageConfig = {
  key: "openMouthBagging",
  group: "packagingSystems",
  trSlug: "acik-agiz-torbalama",
  mainImage: "/images/paketleme/paket1.jpg",
  applications: [
    { image: dry("granul-gubre.webp"), link: "fertilizerPlants" },
    { image: kr("alcitasi.webp"), link: "mining" },
    { image: dry("silis-kumu.webp"), link: "rotaryDryer" },
  ],
  sectors: ["fertilizerPlants", "mining", "compostPlants"],
  resources: ["bigBagFilling", "palletizingLines", "dosingSystems", "packagingSystems"],
  machines: ["packagingSystems", "dosingSystems", "dustCollection", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Açık Ağız Torbalama Makinası | Gübre Torbalama Sistemi | PRO MAKİNA",
        description:
          "Granül ve toz ürünler için açık ağız torbalama makinası. Besleme, tartım ve toz emiş düzeni ürüne göre seçilen endüstriyel torbalama sistemleri.",
      },
      breadcrumbLabel: "Açık Ağız Torbalama",
      h1: "Açık Ağız Torbalama Makinası – Toz ve Granül Ürünlerin Tartımlı Dolumu",
      productCategory: "Torbalama Makinası",
      overview: {
        imageAlt: "Dolum ağzına tutturulmuş torba ve altında torba taşıma bandı bulunan torbalama makinası",
        tagline: "Açık Ağız Torbalama",
        keyFacts: [
          { label: "Ambalaj", value: "Açık ağızlı torbalar" },
          { label: "Besleme", value: "Helezon, bant veya serbest akış — ürüne göre" },
          { label: "Tartım", value: "Tartımlı dolum; tartım düzeni projeye göre" },
          { label: "Toz kontrolü", value: "Dolum ağzında toz emiş bağlantısı" },
        ],
        title: "Kuru Ürünlerin Açık Ağızlı Torbalara Kontrollü Dolumu",
        paragraphs: [
          "Açık ağız torbalama makinasında boş torba dolum ağzına yerleştirilip tutucularla sabitlenir, ürün besleme ünitesinden tartılarak torbaya aktarılır. Hedef ağırlığa ulaşan torba serbest bırakılır ve bant üzerinde dikiş veya kapatma istasyonuna ilerler.",
          "Besleme yöntemi ürünün akışkanlığına, tane boyutuna ve yığın yoğunluğuna göre seçilir. Serbest akan granüller yerçekimiyle, toz veya akışı zor ürünler helezon ya da bantlı besleyiciyle beslenebilir. Hedef ağırlığa yaklaşırken kaba beslemeden hassas beslemeye geçilmesi dolum ağırlığının kontrolüne yardımcı olur.",
          "Tartım, ürün torbaya dökülmeden önce bir tartım haznesinde (net tartım) veya torba askıdayken (brüt tartım) yapılabilir. Hangi düzenin kullanılacağı ürün ve ambalaj verisine göre belirlenir. Tozlanan ürünlerde dolum ağzı toz emiş hattına bağlanır.",
        ],
        note: "Her ürün aynı besleme düzeniyle torbalanamaz. Yapışkan, çok ince veya çok tozlu ürünlerde besleyici, dolum ağzı ve toz emişi ürün testine göre değerlendirilir.",
      },
      process: {
        title: "Açık Ağız Torbalama Proses Akışı",
        intro:
          "Şema, ürünün bunkerden beslendiği, kontrollü dozajlanıp tartıldığı, açık ağızlı torbaya doldurulduğu ve torbanın kapatma ve taşıma hattına aktarıldığı akışı gösterir. Kapatma ve paletleme ayrı ekipmanlardır.",
        note: "Dolum hızı ve ağırlık hassasiyeti; ürün akışı, besleme yöntemi ve tartım düzenine bağlıdır. Bu değerler ürün verisine göre belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Ürün besleme", text: "Ürün üst bunkerden besleme ünitesine akar." },
          { title: "Kontrollü dozajlama", text: "Besleyici hedef ağırlığa yaklaşırken kaba beslemeden hassas beslemeye geçer." },
          { title: "Tartım ve dolum", text: "Tartılan ürün dolum ağzına tutturulmuş açık ağızlı torbaya aktarılır." },
          { title: "Torba transferi", text: "Dolu torba serbest bırakılır ve bantla kapatma istasyonuna ilerler." },
        ],
        auxLineLabel: "Toz emişi",
        auxLine: [{ title: "Dolum ağzı emişi", text: "Tozlanan ürünlerde dolum sırasında çıkan toz emiş hattıyla filtreye gönderilir." }],
        flow: {
          svgTitle: "Açık ağız torbalama proses akış şeması",
          svgDesc: "Ürün hattı: bunker, dozajlama, torbalama makinası, torba çıkışı ve kapatma. Yardımcı hat: dolum ağzı toz emişi.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [
            { title: "Bunker", sub: "Ürün besleme" },
            { title: "Dozajlama", sub: "Kaba / hassas" },
          ],
          drum: { title: "TORBALAMA MAKİNASI", sub: "tartım ve dolum" },
          after: [
            { title: "Torba çıkışı", sub: "Bantlı konveyör" },
            { title: "Kapatma", sub: "Dikiş / yapıştırma" },
          ],
          aux: {
            lane: "TOZ EMİŞİ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Toz emişi", sub: "Filtre hattı" }],
          },
        },
      },
      applications: {
        title: "Açık Ağız Torbalama Uygulama Alanları",
        items: [
          {
            title: "Granül Gübre",
            text: "Eleme ve soğutma sonrası granül gübrenin torbalanması. Serbest akan granüllerde besleme yerçekimiyle yapılabilir; tozlanma ve kırılganlık dolum yüksekliğini etkiler.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Toz Mineraller",
            text: "Alçı, kireç ve benzeri toz minerallerin torbalanması. Akışı zor ve tozlanan ürünlerde helezon besleme ile toz emişi birlikte değerlendirilir.",
            imageAlt: "Beyaz alçıtaşı parçası",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kurutulmuş Kum",
            text: "Kurutma ve eleme sonrası kumun satış torbalarına doldurulması. Aşındırıcı ürünlerde besleyici ve dolum ağzının aşınmaya karşı korunması önemlidir.",
            imageAlt: "Açık renkli, ince taneli silis kumu",
            linkLabel: "Kurutma Tamburu",
          },
        ],
      },
      design: {
        title: "Projeye Özel Açık Ağız Torbalama Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA açık ağız torbalama sistemlerini ürünün yığın yoğunluğu, akışkanlığı, tane boyutu ve tozlanma eğilimi ile torba tipi ve hedef dolum ağırlığına göre projelendirir. Besleme ünitesi, tartım düzeni, dolum ağzı ve torba tutucular, toz emişi ve torba çıkış konveyörü birlikte tasarlanır.",
        highlights: ["Ürüne göre besleme yöntemi", "Kaba ve hassas besleme kontrolü", "Torba tutuculu dolum ağzı", "Kapatma ve konveyör entegrasyonu"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün Özellikleri", text: "Yığın yoğunluğu, akışkanlık, tane boyutu ve tozlanma." },
          { title: "Torba ve Ağırlık", text: "Torba tipi, ölçüsü ve hedef dolum ağırlığı." },
          { title: "Besleme Yöntemi", text: "Serbest akış, helezon veya bantlı besleme." },
          { title: "Tartım", text: "Net veya brüt tartım düzeni ve kontrol." },
          { title: "Toz ve Hat Bağlantısı", text: "Toz emişi, kapatma ve konveyör entegrasyonu." },
        ],
        dataNote: "Dolum kapasitesi, ağırlık hassasiyeti ve torba/saat değeri ürün ve ambalaj verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Açık Ağız Torbalama Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Açık ağız torbalama makinası nasıl çalışır?",
            answer: "Torba dolum ağzına sabitlenir, ürün beslenip tartılarak torbaya aktarılır; hedef ağırlığa ulaşan torba serbest bırakılıp kapatma istasyonuna ilerler.",
          },
          {
            question: "Hangi besleme yöntemi kullanılır?",
            answer: "Ürünün akışına göre yerçekimli, helezonlu veya bantlı besleme seçilir. Toz ve akışı zor ürünlerde helezon, serbest akan granüllerde yerçekimli besleme değerlendirilir.",
          },
          {
            question: "Net ve brüt tartım arasındaki fark nedir?",
            answer: "Net tartımda ürün torbaya dökülmeden önce tartım haznesinde tartılır; brüt tartımda ürün torba askıdayken tartılır. Seçim ürün ve ambalaj verisine göre yapılır.",
          },
          {
            question: "Big-bag dolumdan farkı nedir?",
            answer: "Açık ağız torbalama küçük ve orta boy torbalar içindir. Büyük tonajlı FIBC torbalar için big-bag dolum istasyonu kullanılır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, akış özellikleri, torba tipi ve hedef ağırlık, istenen dolum kapasitesi ve kapatma yöntemi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Açık ağız torbalama için teknik teklif alın",
        text: "Ürününüz, torba tipiniz ve hedef dolum ağırlığınıza göre torbalama sistemini birlikte netleştirelim.",
        mailSubject: "Açık Ağız Torbalama Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Akışkanlık ve tane boyutu", "Torba tipi ve ölçüsü", "Hedef dolum ağırlığı", "İstenen dolum kapasitesi", "Kapatma yöntemi (dikiş / yapıştırma)"],
        inquiryLines: [
          "Merhaba, açık ağız torbalama için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Torba tipi / ağırlık (kg):",
          "İstenen kapasite (torba/saat):",
          "Kapatma yöntemi:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Open Mouth Bagging System | Fertilizer Bagging Machine",
        description:
          "Open mouth bagging machines for granular and powder products. Industrial bagging systems with feeding, weighing and dust extraction selected for your product.",
      },
      breadcrumbLabel: "Open Mouth Bagging System",
      h1: "Open Mouth Bagging System – Weighed Filling of Powder and Granular Products",
      productCategory: "Bagging Machine",
      overview: {
        imageAlt: "Bagging machine with a bag clamped on the filling spout and a bag conveyor below",
        tagline: "Open Mouth Bagging",
        keyFacts: [
          { label: "Packaging", value: "Open-mouth bags" },
          { label: "Feeding", value: "Screw, belt or gravity — per product" },
          { label: "Weighing", value: "Weighed filling; weighing layout per project" },
          { label: "Dust control", value: "Dust extraction connection at the spout" },
        ],
        title: "Controlled Filling of Dry Products into Open-Mouth Bags",
        paragraphs: [
          "In an open mouth bagging machine, an empty bag is placed on the filling spout and held by clamps, and the product is weighed and discharged from the feeding unit into the bag. Once the target weight is reached, the bag is released and moves on a conveyor to the sewing or closing station.",
          "The feeding method is selected for the product's flowability, particle size and bulk density. Free-flowing granules can be fed by gravity, while powders or poorly flowing products can be fed by a screw or belt feeder. Switching from coarse to fine feeding near the target weight helps control fill weight.",
          "Weighing can take place in a weigh hopper before the product is discharged into the bag (net weighing) or while the bag hangs on the spout (gross weighing). The layout is defined from product and packaging data. For dusty products, the spout is connected to a dust extraction line.",
        ],
        note: "Not every product can be bagged with the same feeding arrangement. For sticky, very fine or very dusty products, feeder, spout and dust extraction are assessed from product tests.",
      },
      process: {
        title: "Open Mouth Bagging Process Flow",
        intro:
          "The diagram shows the flow in which product is fed from the hopper, dosed and weighed in a controlled way, filled into an open-mouth bag, and the bag is transferred to the closing and conveying line. Closing and palletizing are separate equipment.",
        note: "Filling rate and weight accuracy depend on product flow, feeding method and weighing layout; these values are defined from product data.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Product feed", text: "Product flows from the upper hopper to the feeding unit." },
          { title: "Controlled dosing", text: "The feeder switches from coarse to fine feeding as the target weight approaches." },
          { title: "Weighing and filling", text: "Weighed product is discharged into the open-mouth bag clamped on the spout." },
          { title: "Bag transfer", text: "The filled bag is released and conveyed to the closing station." },
        ],
        auxLineLabel: "Dust extraction",
        auxLine: [{ title: "Spout extraction", text: "For dusty products, dust released during filling is extracted to a filter." }],
        flow: {
          svgTitle: "Open mouth bagging process flow diagram",
          svgDesc: "Product line: hopper, dosing, bagging machine, bag discharge and closing. Auxiliary line: spout dust extraction.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [
            { title: "Hopper", sub: "Product feed" },
            { title: "Dosing", sub: "Coarse / fine" },
          ],
          drum: { title: "BAGGING MACHINE", sub: "weighing and filling" },
          after: [
            { title: "Bag discharge", sub: "Belt conveyor" },
            { title: "Closing", sub: "Sewing / sealing" },
          ],
          aux: {
            lane: "DUST EXTRACTION",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Dust extraction", sub: "Filter line" }],
          },
        },
      },
      applications: {
        title: "Open Mouth Bagging Applications",
        items: [
          {
            title: "Granular Fertilizer",
            text: "Bagging granular fertilizer after screening and cooling. Free-flowing granules can be gravity-fed; dustiness and friability affect the drop height.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Powder Minerals",
            text: "Bagging gypsum, lime and similar powder minerals. For poorly flowing, dusty products, screw feeding and dust extraction are assessed together.",
            imageAlt: "A white piece of gypsum",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Dried Sand",
            text: "Filling sand into sales bags after drying and screening. For abrasive products, protecting the feeder and spout against wear is important.",
            imageAlt: "Light-coloured fine silica sand",
            linkLabel: "Rotary Dryer",
          },
        ],
      },
      design: {
        title: "Custom Open Mouth Bagging Design and Manufacturing",
        intro:
          "PRO MAKINA engineers open mouth bagging systems around bulk density, flowability, particle size and dustiness of the product, bag type and target fill weight. Feeding unit, weighing layout, spout and bag clamps, dust extraction and bag discharge conveyor are designed together.",
        highlights: ["Feeding method matched to the product", "Coarse and fine feed control", "Filling spout with bag clamps", "Closing and conveyor integration"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product Properties", text: "Bulk density, flowability, particle size and dustiness." },
          { title: "Bag and Weight", text: "Bag type, size and target fill weight." },
          { title: "Feeding Method", text: "Gravity, screw or belt feeding." },
          { title: "Weighing", text: "Net or gross weighing layout and control." },
          { title: "Dust and Line Connection", text: "Dust extraction, closing and conveyor integration." },
        ],
        dataNote: "Filling capacity, weight accuracy and bags per hour are defined from product and packaging data; no generic values are stated on this page.",
      },
      faq: {
        title: "Open Mouth Bagging FAQ",
        items: [
          {
            question: "How does an open mouth bagging machine work?",
            answer: "The bag is clamped on the spout, product is fed, weighed and discharged into it; at the target weight the bag is released and moves to the closing station.",
          },
          {
            question: "Which feeding method is used?",
            answer: "Gravity, screw or belt feeding is selected by product flow; screws are considered for powders and poorly flowing products, gravity for free-flowing granules.",
          },
          {
            question: "What is the difference between net and gross weighing?",
            answer: "In net weighing the product is weighed in a weigh hopper before discharge; in gross weighing it is weighed while the bag hangs on the spout. The choice depends on product and packaging data.",
          },
          {
            question: "How does it differ from big bag filling?",
            answer: "Open mouth bagging is for small and medium bags. For high-tonnage FIBC bags, a big bag filling station is used.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, flow properties, bag type and target weight, required filling capacity and closing method.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for open mouth bagging",
        text: "Share your product, bag type and target fill weight, and we will define the bagging system together with you.",
        mailSubject: "Open Mouth Bagging Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Flowability and particle size", "Bag type and size", "Target fill weight", "Required filling capacity", "Closing method (sewing / sealing)"],
        inquiryLines: [
          "Hello, I would like a technical quotation for open mouth bagging.",
          "",
          "Product:",
          "Bulk density:",
          "Bag type / weight (kg):",
          "Required capacity (bags/h):",
          "Closing method:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Фасовка в открытые мешки | Машина для фасовки удобрений",
        description:
          "Машины для фасовки гранулированных и порошкообразных продуктов в открытые мешки. Подача, взвешивание и аспирация подбираются под продукт.",
      },
      breadcrumbLabel: "Фасовка в открытые мешки",
      h1: "Фасовка в открытые мешки – весовое наполнение порошков и гранул",
      productCategory: "Фасовочная машина",
      overview: {
        imageAlt: "Фасовочная машина с мешком на наполнительном патрубке и ленточным конвейером под ним",
        tagline: "Фасовка в открытые мешки",
        keyFacts: [
          { label: "Тара", value: "Открытые мешки" },
          { label: "Подача", value: "Шнек, лента или самотёк — по продукту" },
          { label: "Взвешивание", value: "Весовое наполнение; схема по проекту" },
          { label: "Пылеподавление", value: "Патрубок аспирации на наполнителе" },
        ],
        title: "Контролируемое наполнение открытых мешков сухими продуктами",
        paragraphs: [
          "В машине для фасовки в открытые мешки пустой мешок надевается на наполнительный патрубок и фиксируется зажимами, продукт взвешивается и подаётся в мешок. По достижении заданного веса мешок освобождается и по конвейеру уходит на зашивку или запайку.",
          "Способ подачи выбирается по сыпучести, крупности и насыпной плотности продукта. Сыпучие гранулы подаются самотёком, порошки и плохо сыпучие продукты — шнеком или ленточным питателем. Переход с грубой на точную подачу вблизи заданного веса помогает контролировать массу дозы.",
          "Взвешивание выполняется в весовом бункере до выгрузки в мешок (нетто) или при подвешенном мешке (брутто). Схема определяется по данным продукта и тары. Для пылящих продуктов патрубок подключается к аспирации.",
        ],
        note: "Не каждый продукт фасуется одной и той же схемой подачи. Для липких, очень мелких или сильно пылящих продуктов питатель, патрубок и аспирация оцениваются по испытаниям продукта.",
      },
      process: {
        title: "Технологическая схема фасовки в открытые мешки",
        intro:
          "Схема показывает поток: продукт подаётся из бункера, дозируется и взвешивается, наполняет открытый мешок, мешок передаётся на линию закрытия и транспортировки. Закрытие и паллетирование — отдельное оборудование.",
        note: "Скорость фасовки и точность дозы зависят от сыпучести, способа подачи и схемы взвешивания; значения определяются по данным продукта.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Подача продукта", text: "Продукт поступает из верхнего бункера в узел подачи." },
          { title: "Контролируемое дозирование", text: "Вблизи заданного веса питатель переходит с грубой на точную подачу." },
          { title: "Взвешивание и наполнение", text: "Взвешенный продукт подаётся в открытый мешок на патрубке." },
          { title: "Передача мешка", text: "Заполненный мешок освобождается и уходит по конвейеру на закрытие." },
        ],
        auxLineLabel: "Аспирация",
        auxLine: [{ title: "Аспирация патрубка", text: "Для пылящих продуктов пыль при наполнении отводится на фильтр." }],
        flow: {
          svgTitle: "Технологическая схема фасовки в открытые мешки",
          svgDesc: "Линия продукта: бункер, дозирование, фасовочная машина, выход мешка и закрытие. Вспомогательная линия: аспирация патрубка.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [
            { title: "Бункер", sub: "Подача продукта" },
            { title: "Дозирование", sub: "Грубо / точно" },
          ],
          drum: { title: "ФАСОВОЧНАЯ МАШИНА", sub: "взвешивание и наполнение" },
          after: [
            { title: "Выход мешка", sub: "Ленточный конвейер" },
            { title: "Закрытие", sub: "Зашивка / запайка" },
          ],
          aux: {
            lane: "АСПИРАЦИЯ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Аспирация", sub: "Линия фильтра" }],
          },
        },
      },
      applications: {
        title: "Области применения фасовки в открытые мешки",
        items: [
          {
            title: "Гранулированные удобрения",
            text: "Фасовка гранулированных удобрений после грохочения и охлаждения. Сыпучие гранулы подаются самотёком; пыление и хрупкость влияют на высоту падения.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Порошкообразные минералы",
            text: "Фасовка гипса, извести и подобных порошков. Для плохо сыпучих и пылящих продуктов шнековая подача и аспирация рассматриваются вместе.",
            imageAlt: "Белый кусок гипса",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Сушёный песок",
            text: "Фасовка песка в товарные мешки после сушки и грохочения. Для абразивных продуктов важна защита питателя и патрубка от износа.",
            imageAlt: "Светлый мелкозернистый кварцевый песок",
            linkLabel: "Сушильный барабан",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление систем фасовки в открытые мешки",
        intro:
          "PRO MAKINA проектирует системы фасовки исходя из насыпной плотности, сыпучести, крупности и пыления продукта, типа мешка и заданной массы. Узел подачи, схема взвешивания, патрубок с зажимами, аспирация и конвейер выхода мешков разрабатываются совместно.",
        highlights: ["Способ подачи под продукт", "Грубая и точная подача", "Наполнительный патрубок с зажимами", "Интеграция закрытия и конвейера"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Свойства продукта", text: "Насыпная плотность, сыпучесть, крупность и пыление." },
          { title: "Мешок и масса", text: "Тип и размер мешка, заданная масса дозы." },
          { title: "Способ подачи", text: "Самотёк, шнек или лента." },
          { title: "Взвешивание", text: "Схема нетто или брутто и управление." },
          { title: "Пыль и линия", text: "Аспирация, закрытие и интеграция конвейера." },
        ],
        dataNote: "Производительность, точность дозы и число мешков в час определяются по данным продукта и тары; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о фасовке в открытые мешки",
        items: [
          {
            question: "Как работает машина для фасовки в открытые мешки?",
            answer: "Мешок фиксируется на патрубке, продукт подаётся, взвешивается и выгружается в мешок; при достижении веса мешок освобождается и уходит на закрытие.",
          },
          {
            question: "Какой способ подачи применяется?",
            answer: "Самотёк, шнек или лента выбираются по сыпучести; шнек — для порошков и плохо сыпучих продуктов, самотёк — для сыпучих гранул.",
          },
          {
            question: "Чем взвешивание нетто отличается от брутто?",
            answer: "При нетто продукт взвешивается в весовом бункере до выгрузки, при брутто — при подвешенном мешке. Выбор зависит от продукта и тары.",
          },
          {
            question: "Чем это отличается от наполнения биг-бэгов?",
            answer: "Фасовка в открытые мешки предназначена для малых и средних мешков; для МКР большой массы применяется станция наполнения биг-бэгов.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, сыпучесть, тип мешка и масса дозы, требуемая производительность и способ закрытия.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на фасовку в открытые мешки",
        text: "Сообщите продукт, тип мешка и массу дозы — вместе определим систему фасовки.",
        mailSubject: "Запрос предложения: фасовка в открытые мешки",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Сыпучесть и крупность", "Тип и размер мешка", "Масса дозы", "Требуемая производительность", "Способ закрытия (зашивка / запайка)"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на фасовку в открытые мешки.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Тип мешка / масса (кг):",
          "Производительность (мешков/ч):",
          "Способ закрытия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نظام تعبئة الأكياس مفتوحة الفوهة | ماكينة تعبئة الأسمدة",
        description:
          "ماكينات تعبئة الأكياس مفتوحة الفوهة للمنتجات الحبيبية والمسحوقة، مع اختيار التلقيم والوزن وشفط الغبار وفق المنتج.",
      },
      breadcrumbLabel: "تعبئة الأكياس مفتوحة الفوهة",
      h1: "نظام تعبئة الأكياس مفتوحة الفوهة – تعبئة موزونة للمساحيق والحبيبات",
      productCategory: "ماكينة تعبئة أكياس",
      overview: {
        imageAlt: "ماكينة تعبئة أكياس بكيس مثبت على فوهة التعبئة وسير ناقل أسفله",
        tagline: "تعبئة أكياس مفتوحة الفوهة",
        keyFacts: [
          { label: "العبوة", value: "أكياس مفتوحة الفوهة" },
          { label: "التلقيم", value: "لولبي أو سيري أو بالجاذبية — وفق المنتج" },
          { label: "الوزن", value: "تعبئة موزونة، وترتيب الوزن حسب المشروع" },
          { label: "التحكم في الغبار", value: "وصلة شفط غبار عند الفوهة" },
        ],
        title: "تعبئة متحكم بها للمنتجات الجافة في أكياس مفتوحة الفوهة",
        paragraphs: [
          "في ماكينة تعبئة الأكياس مفتوحة الفوهة يُوضع الكيس الفارغ على فوهة التعبئة ويُثبَّت بمشابك، ثم يُوزن المنتج ويُفرَّغ من وحدة التلقيم إلى الكيس، وعند بلوغ الوزن المستهدف يُحرَّر الكيس ويتحرك على ناقل إلى محطة الخياطة أو الإغلاق.",
          "تُختار طريقة التلقيم وفق قابلية المنتج للانسياب وحجم حبيباته وكثافته الظاهرية؛ فيمكن تلقيم الحبيبات سهلة الانسياب بالجاذبية، بينما تُلقَّم المساحيق والمنتجات صعبة الانسياب بناقل لولبي أو سيري، ويساعد الانتقال من التلقيم الخشن إلى الدقيق قرب الوزن المستهدف على ضبط وزن التعبئة.",
          "يمكن أن يتم الوزن في قادوس وزن قبل تفريغ المنتج في الكيس (وزن صافٍ) أو أثناء تعليق الكيس على الفوهة (وزن إجمالي)، ويُحدَّد الترتيب من بيانات المنتج والعبوة، وتُوصل الفوهة بخط شفط الغبار للمنتجات المغبّرة.",
        ],
        note: "لا يمكن تعبئة كل المنتجات بترتيب التلقيم نفسه؛ ففي المنتجات اللزجة أو الناعمة جدًا أو شديدة التغبير يُقيَّم المُلقِّم والفوهة وشفط الغبار وفق اختبار المنتج.",
      },
      process: {
        title: "تدفق العملية في تعبئة الأكياس مفتوحة الفوهة",
        intro:
          "يوضح المخطط التدفق الذي يُلقَّم فيه المنتج من القادوس ويُجرَّع ويُوزن بشكل متحكم به ثم يُعبأ في كيس مفتوح الفوهة ويُنقل الكيس إلى خط الإغلاق والنقل، بينما الإغلاق والرص على المنصات معدات منفصلة.",
        note: "تعتمد سرعة التعبئة ودقة الوزن على انسياب المنتج وطريقة التلقيم وترتيب الوزن، وتُحدَّد هذه القيم من بيانات المنتج.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تلقيم المنتج", text: "ينساب المنتج من القادوس العلوي إلى وحدة التلقيم." },
          { title: "تجريع متحكم به", text: "ينتقل المُلقِّم من التلقيم الخشن إلى الدقيق عند الاقتراب من الوزن المستهدف." },
          { title: "الوزن والتعبئة", text: "يُفرَّغ المنتج الموزون في الكيس المثبت على الفوهة." },
          { title: "نقل الكيس", text: "يُحرَّر الكيس الممتلئ ويُنقل إلى محطة الإغلاق." },
        ],
        auxLineLabel: "شفط الغبار",
        auxLine: [{ title: "شفط الفوهة", text: "في المنتجات المغبّرة يُشفط الغبار الناتج أثناء التعبئة إلى مرشح." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في تعبئة الأكياس مفتوحة الفوهة",
          svgDesc: "خط المنتج: القادوس، التجريع، ماكينة التعبئة، خروج الكيس، الإغلاق. الخط المساعد: شفط غبار الفوهة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [
            { title: "القادوس", sub: "تلقيم المنتج" },
            { title: "التجريع", sub: "خشن / دقيق" },
          ],
          drum: { title: "ماكينة التعبئة", sub: "الوزن والتعبئة" },
          after: [
            { title: "خروج الكيس", sub: "ناقل سيري" },
            { title: "الإغلاق", sub: "خياطة / لحام" },
          ],
          aux: {
            lane: "شفط الغبار",
            tone: "air",
            inputs: [],
            outputs: [{ title: "شفط الغبار", sub: "خط المرشح" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام تعبئة الأكياس مفتوحة الفوهة",
        items: [
          {
            title: "الأسمدة الحبيبية",
            text: "تعبئة الأسمدة الحبيبية بعد الغربلة والتبريد، ويمكن تلقيم الحبيبات سهلة الانسياب بالجاذبية، ويؤثر التغبير والهشاشة في ارتفاع السقوط.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "المعادن المسحوقة",
            text: "تعبئة الجبس والجير والمساحيق المعدنية المشابهة، مع تقييم التلقيم اللولبي وشفط الغبار معًا للمنتجات صعبة الانسياب والمغبّرة.",
            imageAlt: "قطعة جبس بيضاء",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الرمل المجفف",
            text: "تعبئة الرمل في أكياس البيع بعد التجفيف والغربلة، مع أهمية حماية المُلقِّم والفوهة من التآكل للمنتجات الكاشطة.",
            imageAlt: "رمل سيليكا ناعم فاتح اللون",
            linkLabel: "أسطوانة التجفيف",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أنظمة تعبئة الأكياس مفتوحة الفوهة",
        intro:
          "تصمم PRO MAKINA أنظمة تعبئة الأكياس مفتوحة الفوهة وفق الكثافة الظاهرية للمنتج وقابليته للانسياب وحجم حبيباته وتغبيره ونوع الكيس ووزن التعبئة المستهدف، مع تصميم وحدة التلقيم وترتيب الوزن والفوهة ومشابك الكيس وشفط الغبار وناقل خروج الأكياس معًا.",
        highlights: ["طريقة تلقيم مناسبة للمنتج", "تحكم في التلقيم الخشن والدقيق", "فوهة تعبئة بمشابك للكيس", "تكامل الإغلاق والناقل"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "خصائص المنتج", text: "الكثافة الظاهرية وقابلية الانسياب وحجم الحبيبات والتغبير." },
          { title: "الكيس والوزن", text: "نوع الكيس ومقاسه ووزن التعبئة المستهدف." },
          { title: "طريقة التلقيم", text: "بالجاذبية أو لولبي أو سيري." },
          { title: "الوزن", text: "ترتيب الوزن الصافي أو الإجمالي والتحكم." },
          { title: "الغبار وربط الخط", text: "شفط الغبار والإغلاق وتكامل الناقل." },
        ],
        dataNote: "تُحدَّد سعة التعبئة ودقة الوزن وعدد الأكياس في الساعة من بيانات المنتج والعبوة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول تعبئة الأكياس مفتوحة الفوهة",
        items: [
          {
            question: "كيف تعمل ماكينة تعبئة الأكياس مفتوحة الفوهة؟",
            answer: "يُثبَّت الكيس على الفوهة ويُلقَّم المنتج ويُوزن ويُفرَّغ فيه، وعند بلوغ الوزن المستهدف يُحرَّر الكيس ويتحرك إلى محطة الإغلاق.",
          },
          {
            question: "ما طريقة التلقيم المستخدمة؟",
            answer: "تُختار بالجاذبية أو لولبية أو سيرية وفق انسياب المنتج؛ فاللولبية للمساحيق والمنتجات صعبة الانسياب، والجاذبية للحبيبات سهلة الانسياب.",
          },
          {
            question: "ما الفرق بين الوزن الصافي والإجمالي؟",
            answer: "في الوزن الصافي يُوزن المنتج في قادوس وزن قبل التفريغ، وفي الإجمالي يُوزن أثناء تعليق الكيس، ويعتمد الاختيار على بيانات المنتج والعبوة.",
          },
          {
            question: "ما الفرق بينها وبين تعبئة الأكياس الكبيرة؟",
            answer: "تعبئة الأكياس مفتوحة الفوهة للأكياس الصغيرة والمتوسطة، أما الأكياس الكبيرة FIBC فتُستخدم لها محطة تعبئة أكياس كبيرة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وخصائص انسيابه ونوع الكيس والوزن المستهدف وسعة التعبئة المطلوبة وطريقة الإغلاق.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لتعبئة الأكياس مفتوحة الفوهة",
        text: "شاركنا منتجك ونوع الكيس ووزن التعبئة المستهدف، لنحدد معًا نظام التعبئة المناسب.",
        mailSubject: "طلب عرض سعر: تعبئة أكياس مفتوحة الفوهة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "قابلية الانسياب وحجم الحبيبات", "نوع الكيس ومقاسه", "وزن التعبئة المستهدف", "سعة التعبئة المطلوبة", "طريقة الإغلاق (خياطة / لحام)"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لتعبئة أكياس مفتوحة الفوهة.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "نوع الكيس / الوزن (كغ):",
          "السعة المطلوبة (كيس/ساعة):",
          "طريقة الإغلاق:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
