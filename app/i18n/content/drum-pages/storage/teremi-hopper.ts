import type { DrumPageConfig } from "../types";

// Teremi bunkeri: mevcut tanım "dökme katı ürünlerin kontrollü alınması, tamponlanması ve prosese düzenli beslenmesi".
// Ürünün kayıtlı görseli (bunker4) ve bunker klasöründeki bunker4–11 görselleri kamyon/römorktan boşaltılan ürünün
// zemin seviyesindeki ızgaralı alım ağzına döküldüğünü gösterir; içerik bu doğrulanabilen işleve göre hazırlanmıştır.
// Diğer dillerde projede "teremi" karşılığı yoktur: EN "Truck Intake Hopper (Teremi)", RU "приёмный бункер", AR "قادوس الاستلام".
// Hacim, ızgara açıklığı, kapasite veya sac kalınlığı verilmez; sürgülü kapak/vibratör standart sunulmaz. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/bunker/${file}`;

export const teremiHopperPage: DrumPageConfig = {
  key: "teremiHopper",
  group: "storageSystems",
  trSlug: "teremi-bunkeri",
  mainImage: img("bunker10.jpg"),
  applications: [
    { image: img("bunker11.jpg"), link: "siloSystems" },
    { image: img("bunker9.jpg"), link: "bucketElevator" },
    { image: "/images/kurutma-uygulamalari/granul-gubre.webp", link: "fertilizerPlants" },
  ],
  figure: img("bunker6.jpg"),
  gallery: [img("bunker5.jpg"), img("bunker7.jpg"), img("bunker8.jpg"), img("bunker4.jpg")],
  sectors: ["fertilizerPlants", "compostPlants"],
  resources: ["bunkersHoppers", "siloSystems", "bucketElevator", "storageSystems"],
  machines: ["conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Teremi Bunkeri | Kamyon Boşaltma ve Ürün Alım Bunkeri | PRO MAKİNA",
        description:
          "Kamyon ve römorktan boşaltılan dökme ürünün ızgaralı ağızdan alınıp tamponlandığı ve prosese düzenli beslendiği teremi bunkeri. Projeye özel imalat.",
      },
      breadcrumbLabel: "Teremi Bunkeri",
      h1: "Teremi Bunkeri – Kamyondan Dökme Ürün Alımı ve Kontrollü Besleme",
      productCategory: "Teremi (Ürün Alım) Bunkeri",
      overview: {
        imageAlt: "Damperli kamyonun dökme ürünü zemin seviyesindeki ızgaralı teremi ağzına boşaltması",
        tagline: "Teremi Bunkeri",
        keyFacts: [
          { label: "Görev", value: "Kamyondan boşaltılan dökme ürünün alımı" },
          { label: "Alım ağzı", value: "Zemin seviyesinde ızgaralı ağız" },
          { label: "Tamponlama", value: "Boşaltılan ürünün kısa süre bekletilmesi" },
          { label: "Çıkış", value: "Alttan konveyör, helezon veya elevatöre" },
        ],
        title: "Kamyonla Gelen Dökme Ürünün Tesise Alınması",
        paragraphs: [
          "Teremi bunkeri, kamyon veya römorkla gelen dökme ürünün tesise ilk alındığı noktadır. Araç, zemin seviyesindeki ızgaralı ağzın üzerine boşaltma yapar; ürün ızgaradan geçerek bunkere dolar ve burada kısa süre tamponlanır.",
          "Bunkerin alt çıkışından ürün, konveyör, helezon veya elevatör gibi taşıma ekipmanlarıyla silo, depolama ya da prosese düzenli olarak aktarılır. Böylece kamyonun kısa sürede boşalttığı yük, hattın taşıyabileceği debiye dönüştürülür.",
          "Bunker geometrisi ve çıkış ağzı ürünün akış davranışına göre belirlenir. Izgara, araç trafiği ve ürünün tane boyutuna göre tasarlanır; boşaltma sırasında oluşan toz, gerekirse alım ağzı üzerinde emişle kontrol edilir.",
        ],
        note: "Teremi bunkeri, genel besleme bunkerinden farklı olarak zemin seviyesinde araçtan ürün alımı için tasarlanır. Yüklü araç trafiğine uygun ızgara ve taşıyıcı yapı bu nedenle tasarımın merkezindedir.",
      },
      process: {
        title: "Teremi Bunkeri Proses Akışı",
        intro:
          "Şema, kamyonun ürünü ızgaralı ağza boşalttığı, ürünün bunkerde tamponlandığı, alt çıkıştan kontrollü beslendiği ve taşıma ekipmanıyla silo veya prosese aktarıldığı akışı gösterir. Konveyör, elevatör ve silo ayrı ekipmanlardır.",
        note: "Bunker hacmi; araç yükü, boşaltma süresi ve sonraki taşıma hattının debisi birlikte değerlendirilerek belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Araçtan boşaltma", text: "Kamyon veya römork ürünü zemin seviyesindeki ızgaralı ağza boşaltır." },
          { title: "Izgaradan alım", text: "Ürün ızgaradan geçerek bunkere dolar; iri yabancı parçalar ızgarada kalır." },
          { title: "Kontrollü bekletme", text: "Bunker, kısa sürede gelen yükü tamponlar." },
          { title: "Alttan besleme", text: "Ürün alt çıkıştan konveyör, helezon veya elevatörle silo ya da prosese aktarılır." },
        ],
        auxLineLabel: "Toz kontrolü",
        auxLine: [{ title: "Alım ağzı emişi", text: "Boşaltma sırasında oluşan toz, gerekirse ağız üzerindeki emişle filtreye alınır." }],
        flow: {
          svgTitle: "Teremi bunkeri proses akış şeması",
          svgDesc: "Ürün hattı: kamyondan boşaltma, ızgaralı teremi bunkeri, alt çıkıştan besleme ve elevatör veya silo. Yardımcı hat: alım ağzı toz emişi.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Kamyon / römork", sub: "Damperli boşaltma" }],
          drum: { title: "TEREMİ BUNKERİ", sub: "ızgaralı alım ve tamponlama" },
          after: [
            { title: "Alt çıkış", sub: "Konveyör / helezon" },
            { title: "Elevatör / silo", sub: "Sonraki taşıma" },
          ],
          aux: {
            lane: "TOZ KONTROLÜ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Toz emişi", sub: "Gerekirse filtre" }],
          },
        },
      },
      applications: {
        title: "Teremi Bunkeri Uygulama Alanları",
        items: [
          {
            title: "Silo Öncesi Ürün Alımı",
            text: "Tahıl gibi serbest akan dökme ürünlerin kamyondan alınıp silo depolamasına aktarılması. Izgara açıklığı ürünün tane boyutuna göre seçilir.",
            imageAlt: "Kamyondan ızgaralı alım ağzına dökülen dökme tahıl",
            linkLabel: "Silo Sistemleri",
          },
          {
            title: "Elevatör ve Konveyöre Aktarım",
            text: "Kapalı alanda araçtan alınan ürünün alt çıkıştan elevatör veya konveyöre verilmesi. Bunker çıkışı, taşıma hattının debisine göre düzenlenir.",
            imageAlt: "Kapalı alanda ızgaralı ağza ürün boşaltan kamyon",
            linkLabel: "Zincirli Elevatörler",
          },
          {
            title: "Gübre Hammaddesi Kabulü",
            text: "Kamyonla gelen granül gübre hammaddelerinin tesise alınması. Higroskopik ve topaklanan ürünlerde ızgara ve çıkış ağzı akış davranışına göre değerlendirilir.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Teremi Bunkeri Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA teremi bunkerlerini alınacak ürünün özellikleri, araç tipi ve boşaltma şekli, istenen alım debisi ve sonraki taşıma hattına göre projelendirir. Izgara ve taşıyıcı yapı, bunker geometrisi, alt çıkış ve besleyici bağlantısı ile toz kontrolü birlikte tasarlanır.",
        highlights: ["Araç trafiğine uygun ızgara ve taşıyıcı yapı", "Akışa uygun bunker geometrisi", "Alt çıkış ve taşıma hattı bağlantısı", "Gerekirse alım ağzında toz emişi"],
        figureAlt: "Kapalı alanda ızgaralı teremi ağzı ve üzerindeki toz emiş davlumbazı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu ve akış davranışı." },
          { title: "Araç ve Boşaltma", text: "Araç tipi, boşaltma yönü ve yük miktarı." },
          { title: "Hacim ve Geometri", text: "Tampon hacim, bunker derinliği ve çıkış ağzı." },
          { title: "Izgara ve Yapı", text: "Izgara açıklığı, araç yüküne uygun taşıyıcı yapı ve saha koşulları." },
          { title: "Besleme Bağlantısı", text: "Alt çıkış, sonraki taşıma ekipmanı ve toz kontrolü." },
        ],
        dataNote: "Bunker hacmi, ızgara ölçüleri ve alım debisi ürün, araç ve saha verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Teremi Bunkeri Fotoğraf Galerisi",
        captions: [
          "Römorktan ızgaralı teremi ağzına dökme ürün boşaltımı",
          "Kamyondan ızgara üzerine dökülen mısır",
          "Izgaralı alım ağzına dökülen dökme ürün",
          "Izgaradan bunkere akan dökme ürün",
        ],
      },
      faq: {
        title: "Teremi Bunkeri Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Teremi bunkeri ne işe yarar?",
            answer: "Kamyon veya römorkla gelen dökme ürünün zemin seviyesindeki ızgaralı ağızdan tesise alınmasını, kısa süre tamponlanmasını ve düzenli olarak sonraki ekipmana beslenmesini sağlar.",
          },
          {
            question: "Genel bunkerden farkı nedir?",
            answer: "Teremi bunkeri araçtan ürün alımı için zemin seviyesinde, ızgaralı ve araç yüküne uygun taşıyıcı yapıyla tasarlanır. Genel besleme bunkerleri ise hat içinde tamponlama ve besleme için kullanılır.",
          },
          {
            question: "Izgara neden kullanılır?",
            answer: "Izgara, alım ağzını araç ve personel için güvenli hale getirir ve iri yabancı parçaların bunkere girmesini engeller.",
          },
          {
            question: "Bunkerden sonra ürün nereye gider?",
            answer: "Alt çıkıştan konveyör, helezon veya elevatör gibi taşıma ekipmanlarıyla silo, depolama veya prosese aktarılır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve özellikleri, araç tipi ve yük miktarı, istenen alım debisi, sonraki taşıma ekipmanı ve saha koşulları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Teremi bunkeri için teknik teklif alın",
        text: "Ürününüz, araç tipiniz ve alım debinize göre teremi bunkerini birlikte netleştirelim.",
        mailSubject: "Teremi Bunkeri Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve akış özellikleri", "Araç tipi ve yük miktarı", "İstenen alım debisi", "Sonraki taşıma ekipmanı", "Saha ve zemin koşulları"],
        inquiryLines: [
          "Merhaba, teremi bunkeri için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Araç tipi / yük:",
          "Alım debisi (ton/saat):",
          "Sonraki ekipman:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Truck Intake Hopper (Teremi) | Bulk Truck Unloading Hopper",
        description:
          "Truck intake hopper (teremi) that receives bulk product tipped from trucks through a grated opening, buffers it and feeds it steadily to the process.",
      },
      breadcrumbLabel: "Truck Intake Hopper",
      h1: "Truck Intake Hopper (Teremi) – Bulk Receipt from Trucks and Controlled Feeding",
      productCategory: "Truck Intake Hopper",
      overview: {
        imageAlt: "Tipper truck unloading bulk product into a grated intake opening at ground level",
        tagline: "Truck Intake Hopper",
        keyFacts: [
          { label: "Duty", value: "Receiving bulk product tipped from trucks" },
          { label: "Intake opening", value: "Grated opening at ground level" },
          { label: "Buffering", value: "Short-term holding of the unloaded product" },
          { label: "Outlet", value: "Bottom discharge to conveyor, screw or elevator" },
        ],
        title: "Receiving Truck-Delivered Bulk Product into the Plant",
        paragraphs: [
          "A truck intake hopper, called 'teremi' in Turkish, is the point where bulk product arriving by truck or trailer is first received into the plant. The vehicle unloads over the grated opening at ground level; the product passes through the grate into the hopper and is buffered there for a short time.",
          "From the bottom outlet, the product is transferred steadily to a silo, storage or process by conveying equipment such as a conveyor, screw or elevator. In this way a load that the truck discharges in a short time is converted into a rate the line can handle.",
          "Hopper geometry and outlet are determined by the product's flow behaviour. The grate is designed for vehicle traffic and particle size; dust released during unloading can be controlled by extraction above the intake if required.",
        ],
        note: "Unlike a general feed bunker, a truck intake hopper is designed for receiving product from vehicles at ground level. A grate and structure suitable for loaded vehicle traffic are therefore central to the design.",
      },
      process: {
        title: "Truck Intake Hopper Process Flow",
        intro:
          "The diagram shows the flow in which the truck unloads onto the grated opening, the product is buffered in the hopper, fed from the bottom outlet in a controlled way and transferred by conveying equipment to a silo or process. Conveyor, elevator and silo are separate equipment.",
        note: "Hopper volume is determined by considering vehicle load, unloading time and the rate of the downstream conveying line together.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Unloading from vehicle", text: "The truck or trailer unloads product onto the grated opening at ground level." },
          { title: "Intake through the grate", text: "Product passes through the grate into the hopper; large foreign objects stay on the grate." },
          { title: "Controlled holding", text: "The hopper buffers the load delivered in a short time." },
          { title: "Bottom feeding", text: "Product is transferred from the bottom outlet by conveyor, screw or elevator to a silo or process." },
        ],
        auxLineLabel: "Dust control",
        auxLine: [{ title: "Intake extraction", text: "Dust released during unloading is extracted to a filter above the opening if required." }],
        flow: {
          svgTitle: "Truck intake hopper process flow diagram",
          svgDesc: "Product line: unloading from truck, grated intake hopper, bottom feeding and elevator or silo. Auxiliary line: intake dust extraction.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Truck / trailer", sub: "Tipping discharge" }],
          drum: { title: "INTAKE HOPPER", sub: "grated intake and buffering" },
          after: [
            { title: "Bottom outlet", sub: "Conveyor / screw" },
            { title: "Elevator / silo", sub: "Next conveying" },
          ],
          aux: {
            lane: "DUST CONTROL",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Dust extraction", sub: "Filter if required" }],
          },
        },
      },
      applications: {
        title: "Truck Intake Hopper Applications",
        items: [
          {
            title: "Product Receipt Before Silos",
            text: "Receiving free-flowing bulk products such as grain from trucks and transferring them to silo storage. The grate opening is selected for the particle size.",
            imageAlt: "Bulk grain tipped from a truck into a grated intake opening",
            linkLabel: "Silo Systems",
          },
          {
            title: "Transfer to Elevator and Conveyor",
            text: "Feeding product received indoors from vehicles to an elevator or conveyor from the bottom outlet. The hopper outlet is matched to the conveying line rate.",
            imageAlt: "Truck unloading product onto a grated opening indoors",
            linkLabel: "Bucket Elevator",
          },
          {
            title: "Fertilizer Raw Material Receipt",
            text: "Receiving truck-delivered granular fertilizer raw materials into the plant. For hygroscopic and caking products, grate and outlet are assessed for flow behaviour.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
        ],
      },
      design: {
        title: "Custom Truck Intake Hopper Design and Manufacturing",
        intro:
          "PRO MAKINA engineers truck intake hoppers around the product properties, vehicle type and unloading method, required intake rate and downstream conveying line. Grate and supporting structure, hopper geometry, bottom outlet and feeder connection, and dust control are designed together.",
        highlights: ["Grate and structure for vehicle traffic", "Hopper geometry suited to flow", "Bottom outlet and conveying connection", "Intake dust extraction if required"],
        figureAlt: "Grated intake opening indoors with a dust extraction hood above",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density and flow behaviour." },
          { title: "Vehicle and Unloading", text: "Vehicle type, unloading direction and load size." },
          { title: "Volume and Geometry", text: "Buffer volume, hopper depth and outlet." },
          { title: "Grate and Structure", text: "Grate opening, structure for vehicle loads and site conditions." },
          { title: "Feeding Connection", text: "Bottom outlet, downstream conveying and dust control." },
        ],
        dataNote: "Hopper volume, grate dimensions and intake rate are defined from product, vehicle and site data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Truck Intake Hopper Photo Gallery",
        captions: [
          "Bulk product unloaded from a trailer into a grated intake",
          "Maize tipped from a truck onto the grate",
          "Bulk product discharged into a grated intake opening",
          "Bulk product flowing through the grate into the hopper",
        ],
      },
      faq: {
        title: "Truck Intake Hopper FAQ",
        items: [
          {
            question: "What is a truck intake hopper (teremi) used for?",
            answer: "It receives bulk product from trucks or trailers through a grated opening at ground level, buffers it briefly and feeds it steadily to the next equipment.",
          },
          {
            question: "How does it differ from a general bunker?",
            answer: "A truck intake hopper is designed at ground level with a grate and a structure suitable for vehicle loads. General feed bunkers are used for buffering and feeding within the line.",
          },
          {
            question: "Why is a grate used?",
            answer: "The grate makes the intake safe for vehicles and personnel and keeps large foreign objects out of the hopper.",
          },
          {
            question: "Where does the product go after the hopper?",
            answer: "From the bottom outlet it is transferred by conveyor, screw or elevator to a silo, storage or process.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and properties, vehicle type and load size, required intake rate, downstream conveying equipment and site conditions.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a truck intake hopper",
        text: "Share your product, vehicle type and intake rate, and we will define the intake hopper together with you.",
        mailSubject: "Truck Intake Hopper Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and flow properties", "Vehicle type and load size", "Required intake rate", "Downstream conveying equipment", "Site and ground conditions"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a truck intake hopper.",
          "",
          "Product:",
          "Bulk density:",
          "Vehicle type / load:",
          "Intake rate (t/h):",
          "Next equipment:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Приёмный бункер для разгрузки автомобилей (тереми)",
        description:
          "Приёмный бункер (тереми) для приёма сыпучего продукта из автомобилей через решётку, его буферизации и равномерной подачи в процесс.",
      },
      breadcrumbLabel: "Приёмный бункер",
      h1: "Приёмный бункер (тереми) – приём сыпучего продукта из автомобилей и подача",
      productCategory: "Приёмный бункер",
      overview: {
        imageAlt: "Самосвал выгружает сыпучий продукт в приёмную решётку на уровне пола",
        tagline: "Приёмный бункер",
        keyFacts: [
          { label: "Назначение", value: "Приём сыпучего продукта, выгружаемого из автомобилей" },
          { label: "Приёмная горловина", value: "Решётка на уровне пола" },
          { label: "Буферизация", value: "Кратковременное накопление продукта" },
          { label: "Выпуск", value: "Снизу на конвейер, шнек или элеватор" },
        ],
        title: "Приём сыпучего продукта с автотранспорта",
        paragraphs: [
          "Приёмный бункер, в Турции называемый «тереми», — точка первичного приёма сыпучего продукта, поступающего автомобилями или прицепами. Транспорт разгружается над решёткой на уровне пола; продукт проходит через решётку в бункер и кратковременно накапливается.",
          "Из нижнего выпуска продукт равномерно передаётся конвейером, шнеком или элеватором в силос, на склад или в процесс. Так быстро выгружаемый груз превращается в расход, который может принять линия.",
          "Геометрия бункера и выпуск определяются сыпучестью продукта. Решётка рассчитывается под движение транспорта и крупность; пыль при разгрузке при необходимости удаляется аспирацией над приёмом.",
        ],
        note: "В отличие от обычного питающего бункера, приёмный бункер рассчитан на приём продукта с транспорта на уровне пола, поэтому решётка и конструкция под нагрузку от автомобилей — основа проекта.",
      },
      process: {
        title: "Технологическая схема приёмного бункера",
        intro:
          "Схема показывает поток: автомобиль выгружается на решётку, продукт накапливается в бункере, подаётся через нижний выпуск и транспортируется в силос или процесс. Конвейер, элеватор и силос — отдельное оборудование.",
        note: "Объём бункера определяется с учётом загрузки автомобиля, времени разгрузки и производительности следующей транспортной линии.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Разгрузка автомобиля", text: "Автомобиль или прицеп выгружает продукт на решётку на уровне пола." },
          { title: "Приём через решётку", text: "Продукт проходит через решётку в бункер; крупные посторонние предметы остаются на решётке." },
          { title: "Контролируемое накопление", text: "Бункер буферизует быстро поступивший груз." },
          { title: "Нижняя подача", text: "Продукт из нижнего выпуска конвейером, шнеком или элеватором уходит в силос или процесс." },
        ],
        auxLineLabel: "Пылеподавление",
        auxLine: [{ title: "Аспирация приёма", text: "Пыль при разгрузке при необходимости отводится на фильтр над приёмной решёткой." }],
        flow: {
          svgTitle: "Технологическая схема приёмного бункера",
          svgDesc: "Линия продукта: разгрузка автомобиля, приёмный бункер с решёткой, нижняя подача и элеватор или силос. Вспомогательная линия: аспирация приёма.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Автомобиль", sub: "Самосвальная разгрузка" }],
          drum: { title: "ПРИЁМНЫЙ БУНКЕР", sub: "приём через решётку" },
          after: [
            { title: "Нижний выпуск", sub: "Конвейер / шнек" },
            { title: "Элеватор / силос", sub: "Далее" },
          ],
          aux: {
            lane: "ПЫЛЕПОДАВЛЕНИЕ",
            tone: "air",
            inputs: [],
            outputs: [{ title: "Аспирация", sub: "Фильтр при необходимости" }],
          },
        },
      },
      applications: {
        title: "Области применения приёмных бункеров",
        items: [
          {
            title: "Приём продукта перед силосами",
            text: "Приём сыпучих продуктов, например зерна, с автомобилей и передача в силосное хранение. Ячейка решётки выбирается по крупности продукта.",
            imageAlt: "Зерно, выгружаемое из автомобиля в приёмную решётку",
            linkLabel: "Силосные системы",
          },
          {
            title: "Передача на элеватор и конвейер",
            text: "Подача продукта, принятого с транспорта в помещении, из нижнего выпуска на элеватор или конвейер. Выпуск согласуется с производительностью транспортной линии.",
            imageAlt: "Автомобиль выгружает продукт на решётку в помещении",
            linkLabel: "Цепной ковшовый элеватор",
          },
          {
            title: "Приём сырья для удобрений",
            text: "Приём гранулированного сырья для удобрений, поступающего автотранспортом. Для гигроскопичных и слёживающихся продуктов решётка и выпуск оцениваются по сыпучести.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление приёмных бункеров",
        intro:
          "PRO MAKINA проектирует приёмные бункеры исходя из свойств продукта, типа транспорта и способа разгрузки, требуемой производительности приёма и следующей транспортной линии. Решётка и несущая конструкция, геометрия бункера, нижний выпуск и питатель, пылеподавление разрабатываются совместно.",
        highlights: ["Решётка и конструкция под транспорт", "Геометрия бункера под сыпучесть", "Нижний выпуск и связь с транспортом", "Аспирация приёма при необходимости"],
        figureAlt: "Приёмная решётка в помещении с аспирационным зонтом над ней",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность и сыпучесть." },
          { title: "Транспорт и разгрузка", text: "Тип транспорта, направление разгрузки и масса груза." },
          { title: "Объём и геометрия", text: "Буферный объём, глубина бункера и выпуск." },
          { title: "Решётка и конструкция", text: "Ячейка решётки, конструкция под нагрузку транспорта и условия площадки." },
          { title: "Подключение подачи", text: "Нижний выпуск, последующий транспорт и пылеподавление." },
        ],
        dataNote: "Объём бункера, размеры решётки и производительность приёма определяются по данным продукта, транспорта и площадки; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея приёмных бункеров",
        captions: [
          "Выгрузка сыпучего продукта из прицепа в приёмную решётку",
          "Кукуруза, выгружаемая из автомобиля на решётку",
          "Сыпучий продукт, выгружаемый в приёмную решётку",
          "Сыпучий продукт, проходящий через решётку в бункер",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о приёмных бункерах",
        items: [
          {
            question: "Для чего нужен приёмный бункер (тереми)?",
            answer: "Он принимает сыпучий продукт с автомобилей или прицепов через решётку на уровне пола, кратковременно накапливает и равномерно подаёт его на следующее оборудование.",
          },
          {
            question: "Чем он отличается от обычного бункера?",
            answer: "Приёмный бункер выполняется на уровне пола с решёткой и конструкцией под нагрузку транспорта, а обычные питающие бункеры служат для буферизации и подачи внутри линии.",
          },
          {
            question: "Зачем нужна решётка?",
            answer: "Решётка делает приём безопасным для транспорта и персонала и не пропускает крупные посторонние предметы в бункер.",
          },
          {
            question: "Куда идёт продукт после бункера?",
            answer: "Из нижнего выпуска он передаётся конвейером, шнеком или элеватором в силос, на склад или в процесс.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид и свойства продукта, тип транспорта и масса груза, требуемая производительность приёма, последующее оборудование и условия площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на приёмный бункер",
        text: "Сообщите продукт, тип транспорта и производительность приёма — вместе определим приёмный бункер.",
        mailSubject: "Запрос предложения: приёмный бункер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и сыпучесть", "Тип транспорта и масса груза", "Требуемая производительность приёма", "Последующее транспортное оборудование", "Условия площадки и грунта"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на приёмный бункер.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Тип транспорта / груз:",
          "Производительность приёма (т/ч):",
          "Следующее оборудование:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "قادوس استلام الشاحنات (تيريمي) | قادوس تفريغ المواد السائبة",
        description:
          "قادوس استلام (تيريمي) يستقبل المواد السائبة المفرغة من الشاحنات عبر فتحة بشبكة ويخزّنها مؤقتًا ويلقّمها بانتظام إلى العملية.",
      },
      breadcrumbLabel: "قادوس الاستلام",
      h1: "قادوس الاستلام (تيريمي) – استلام المواد السائبة من الشاحنات والتلقيم المتحكم به",
      productCategory: "قادوس استلام",
      overview: {
        imageAlt: "شاحنة قلابة تفرغ مادة سائبة في فتحة استلام بشبكة على مستوى الأرض",
        tagline: "قادوس الاستلام",
        keyFacts: [
          { label: "المهمة", value: "استلام المواد السائبة المفرغة من الشاحنات" },
          { label: "فتحة الاستلام", value: "فتحة بشبكة على مستوى الأرض" },
          { label: "التخزين المؤقت", value: "احتجاز قصير للمنتج المفرغ" },
          { label: "المخرج", value: "تفريغ سفلي إلى ناقل أو ناقل لولبي أو رافعة" },
        ],
        title: "استلام المواد السائبة الواصلة بالشاحنات إلى المنشأة",
        paragraphs: [
          "قادوس الاستلام، المعروف في تركيا باسم «تيريمي»، هو النقطة التي تُستلم فيها المواد السائبة الواصلة بالشاحنات أو المقطورات إلى المنشأة لأول مرة؛ إذ تفرغ المركبة حمولتها فوق فتحة بشبكة على مستوى الأرض، فيمر المنتج عبر الشبكة إلى القادوس ويُخزَّن فيه مؤقتًا.",
          "من المخرج السفلي يُنقل المنتج بانتظام إلى الصومعة أو التخزين أو العملية بمعدات نقل مثل الناقل أو الناقل اللولبي أو الرافعة، فيتحول الحمل الذي تفرغه الشاحنة في وقت قصير إلى معدل يستطيع الخط استيعابه.",
          "يُحدَّد شكل القادوس ومخرجه وفق سلوك انسياب المنتج، وتُصمم الشبكة وفق حركة المركبات وحجم الحبيبات، ويمكن التحكم في الغبار الناتج أثناء التفريغ بالشفط فوق فتحة الاستلام عند الحاجة.",
        ],
        note: "بخلاف قادوس التلقيم العام، يُصمَّم قادوس الاستلام لاستلام المنتج من المركبات على مستوى الأرض، لذا تُعد الشبكة والهيكل المناسبان لحركة المركبات المحملة محور التصميم.",
      },
      process: {
        title: "تدفق العملية في قادوس الاستلام",
        intro:
          "يوضح المخطط التدفق الذي تفرغ فيه الشاحنة المنتج على الفتحة ذات الشبكة، ثم يُخزَّن مؤقتًا في القادوس ويُلقَّم من المخرج السفلي بشكل متحكم به ويُنقل بمعدات النقل إلى الصومعة أو العملية، بينما الناقل والرافعة والصومعة معدات منفصلة.",
        note: "يُحدَّد حجم القادوس بمراعاة حمولة المركبة وزمن التفريغ ومعدل خط النقل التالي معًا.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "التفريغ من المركبة", text: "تفرغ الشاحنة أو المقطورة المنتج على الفتحة ذات الشبكة على مستوى الأرض." },
          { title: "الاستلام عبر الشبكة", text: "يمر المنتج عبر الشبكة إلى القادوس، وتبقى الأجسام الغريبة الكبيرة على الشبكة." },
          { title: "احتجاز متحكم به", text: "يخزّن القادوس مؤقتًا الحمل الواصل في وقت قصير." },
          { title: "التلقيم السفلي", text: "يُنقل المنتج من المخرج السفلي بناقل أو ناقل لولبي أو رافعة إلى الصومعة أو العملية." },
        ],
        auxLineLabel: "التحكم في الغبار",
        auxLine: [{ title: "شفط فتحة الاستلام", text: "يُشفط الغبار الناتج أثناء التفريغ إلى مرشح فوق الفتحة عند الحاجة." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في قادوس الاستلام",
          svgDesc: "خط المنتج: التفريغ من الشاحنة، قادوس الاستلام بالشبكة، التلقيم السفلي والرافعة أو الصومعة. الخط المساعد: شفط غبار فتحة الاستلام.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "شاحنة / مقطورة", sub: "تفريغ قلاب" }],
          drum: { title: "قادوس الاستلام", sub: "استلام عبر الشبكة" },
          after: [
            { title: "المخرج السفلي", sub: "ناقل / لولبي" },
            { title: "رافعة / صومعة", sub: "النقل التالي" },
          ],
          aux: {
            lane: "التحكم في الغبار",
            tone: "air",
            inputs: [],
            outputs: [{ title: "شفط الغبار", sub: "مرشح عند الحاجة" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام قادوس الاستلام",
        items: [
          {
            title: "استلام المنتج قبل الصوامع",
            text: "استلام المواد السائبة سهلة الانسياب مثل الحبوب من الشاحنات ونقلها إلى التخزين في الصوامع، مع اختيار فتحة الشبكة وفق حجم الحبيبات.",
            imageAlt: "حبوب سائبة تُفرغ من شاحنة في فتحة استلام بشبكة",
            linkLabel: "أنظمة الصوامع",
          },
          {
            title: "النقل إلى الرافعة والناقل",
            text: "تلقيم المنتج المستلم من المركبات داخل المبنى من المخرج السفلي إلى رافعة أو ناقل، مع مطابقة مخرج القادوس لمعدل خط النقل.",
            imageAlt: "شاحنة تفرغ المنتج على فتحة بشبكة داخل مبنى",
            linkLabel: "رافعة القواديس بالسلاسل",
          },
          {
            title: "استلام مواد الأسمدة الخام",
            text: "استلام المواد الخام الحبيبية للأسمدة الواصلة بالشاحنات، مع تقييم الشبكة والمخرج وفق سلوك الانسياب للمنتجات الماصة للرطوبة والمتكتلة.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع قواديس الاستلام",
        intro:
          "تصمم PRO MAKINA قواديس الاستلام وفق خصائص المنتج ونوع المركبة وطريقة التفريغ ومعدل الاستلام المطلوب وخط النقل التالي، مع تصميم الشبكة والهيكل الحامل وشكل القادوس والمخرج السفلي ووصلة المُلقِّم والتحكم في الغبار معًا.",
        highlights: ["شبكة وهيكل مناسبان لحركة المركبات", "شكل قادوس مناسب للانسياب", "مخرج سفلي ووصلة بخط النقل", "شفط غبار فتحة الاستلام عند الحاجة"],
        figureAlt: "فتحة استلام بشبكة داخل مبنى وفوقها غطاء شفط الغبار",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية وسلوك الانسياب." },
          { title: "المركبة والتفريغ", text: "نوع المركبة واتجاه التفريغ ومقدار الحمولة." },
          { title: "الحجم والشكل", text: "الحجم المؤقت وعمق القادوس والمخرج." },
          { title: "الشبكة والهيكل", text: "فتحة الشبكة والهيكل المناسب لأحمال المركبات وظروف الموقع." },
          { title: "وصلة التلقيم", text: "المخرج السفلي ومعدات النقل التالية والتحكم في الغبار." },
        ],
        dataNote: "يُحدَّد حجم القادوس وأبعاد الشبكة ومعدل الاستلام من بيانات المنتج والمركبة والموقع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور قواديس الاستلام",
        captions: [
          "تفريغ مادة سائبة من مقطورة في فتحة استلام بشبكة",
          "ذرة تُفرغ من شاحنة على الشبكة",
          "مادة سائبة تُفرغ في فتحة استلام بشبكة",
          "مادة سائبة تنساب عبر الشبكة إلى القادوس",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول قادوس الاستلام",
        items: [
          {
            question: "ما استخدام قادوس الاستلام (تيريمي)؟",
            answer: "يستقبل المواد السائبة من الشاحنات أو المقطورات عبر فتحة بشبكة على مستوى الأرض، ويخزّنها مؤقتًا لفترة قصيرة ويلقّمها بانتظام إلى المعدة التالية.",
          },
          {
            question: "ما الفرق بينه وبين القادوس العام؟",
            answer: "يُصمَّم قادوس الاستلام على مستوى الأرض بشبكة وهيكل مناسب لأحمال المركبات، أما قواديس التلقيم العامة فتُستخدم للتخزين المؤقت والتلقيم داخل الخط.",
          },
          {
            question: "لماذا تُستخدم الشبكة؟",
            answer: "تجعل الشبكة فتحة الاستلام آمنة للمركبات والأفراد وتمنع دخول الأجسام الغريبة الكبيرة إلى القادوس.",
          },
          {
            question: "إلى أين يذهب المنتج بعد القادوس؟",
            answer: "يُنقل من المخرج السفلي بناقل أو ناقل لولبي أو رافعة إلى الصومعة أو التخزين أو العملية.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وخصائصه ونوع المركبة ومقدار الحمولة ومعدل الاستلام المطلوب ومعدات النقل التالية وظروف الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لقادوس الاستلام",
        text: "شاركنا منتجك ونوع المركبة ومعدل الاستلام، لنحدد معًا قادوس الاستلام المناسب.",
        mailSubject: "طلب عرض سعر: قادوس استلام",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات وخصائص الانسياب", "نوع المركبة ومقدار الحمولة", "معدل الاستلام المطلوب", "معدات النقل التالية", "ظروف الموقع والأرضية"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لقادوس استلام.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "نوع المركبة / الحمولة:",
          "معدل الاستلام (طن/ساعة):",
          "المعدة التالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
