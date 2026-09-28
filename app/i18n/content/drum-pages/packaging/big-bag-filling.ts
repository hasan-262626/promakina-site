import type { DrumPageConfig } from "../types";

// Big-bag (FIBC) dolum: dökme ürünlerin big-bag torbalara tartımlı/kontrollü dolumu. Otomatik şişirme, titreşimli sıkıştırma,
// otomatik paletleme veya teleskopik dolum başlığı standart özellik olarak sunulmaz; kapasite ve hassasiyet değeri verilmez.
// Görseller big bag/bigdol* ve paketleme/paket4 (big-bag dolum çerçevesi); bigbos* big-bag BOŞALTMA istasyonu olduğundan kullanılmadı.
const img = (file: string) => `/images/big bag/${file}`;
const pk = (file: string) => `/images/paket-uygulamalari/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;

export const bigBagFillingPage: DrumPageConfig = {
  key: "bigBagFilling",
  group: "packagingSystems",
  trSlug: "big-bag-dolum",
  mainImage: img("bigdol3.jpg"),
  applications: [
    { image: pk("gubre-big-bag.webp"), link: "fertilizerPlants" },
    { image: dry("silis-kumu.webp"), link: "mining" },
    { image: dry("kirec-tasi.webp"), link: "dustCollection" },
  ],
  figure: img("bigdol4.jpg"),
  gallery: [
    img("bigdol1.jpg"),
    img("bigdol2.jpg"),
    "/images/paketleme/paket4.jpg",
    img("bigdol6.jpg"),
    img("bigdol7.jpg"),
    img("bigdol9.jpg"),
    img("bigdol10.jpg"),
    img("bigdol12.jpg"),
    img("bigdol11.jpg"),
  ],
  sectors: ["fertilizerPlants", "mining", "chemicalProcess"],
  resources: ["openMouthBagging", "palletizingLines", "dustCollection", "packagingSystems"],
  machines: ["packagingSystems", "dosingSystems", "dustCollection", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Big Bag Dolum Makinası | Big Bag Dolum Sistemi ve Tesisi | PRO MAKİNA",
        description:
          "Gübre, mineral ve dökme ürünler için big bag (FIBC) dolum sistemi. Askı düzeni, dolum boğazı, tartım ve toz emişi ürüne ve torba tipine göre projelendirilir.",
      },
      breadcrumbLabel: "Big Bag Dolum",
      h1: "Big Bag Dolum Sistemi – FIBC Torbalara Tartımlı Dolum",
      productCategory: "Big Bag Dolum Sistemi",
      overview: {
        imageAlt: "Paletler üzerinde dolum boğazına bağlı iki big-bag dolum istasyonu ve toz emiş hortumları",
        tagline: "Big Bag Dolum",
        keyFacts: [
          { label: "Ambalaj", value: "Big-bag (FIBC) torbalar" },
          { label: "Tartım", value: "Load-cell ile tartım; düzen projeye göre" },
          { label: "Bağlantı", value: "Askı noktaları ve dolum boğazı" },
          { label: "Tahliye", value: "Forklift veya konveyör — sahaya göre" },
        ],
        title: "Dökme Ürünlerin Big-Bag Torbalara Kontrollü Dolumu",
        paragraphs: [
          "Big-bag dolum istasyonunda boş FIBC torba, askı kulplarından çerçeveye asılır ve dolum ağzı istasyonun dolum boğazına bağlanır. Ürün üst bunker veya besleyiciden torbaya akarken ağırlık load-cell'lerle izlenir; hedef ağırlığa ulaşıldığında besleme durdurulur.",
          "Besleme yöntemi ürünün akışkanlığı ve yığın yoğunluğuna göre seçilir. Hedef ağırlığa yaklaşırken kaba beslemeden hassas beslemeye geçilmesi dolum ağırlığının kontrolüne yardımcı olur. Dolum boğazına bağlanan toz emişi, torba içinden çıkan havanın ve tozun kontrollü alınmasını sağlar.",
          "Dolum paletli veya paletsiz yapılabilir. Dolu torba askıdan serbest bırakılır ve forklift, makaralı konveyör veya sahaya uygun başka bir yöntemle tahliye edilir. Torba ölçüsü ve dolum yüksekliği istasyon çerçevesinin tasarımını belirler.",
        ],
        note: "Otomatik torba şişirme, titreşimli sıkıştırma veya teleskopik dolum başlığı gibi donanımlar her istasyonda bulunmaz; ürün ve saha ihtiyacına göre değerlendirilir.",
      },
      process: {
        title: "Big Bag Dolum Proses Akışı",
        intro:
          "Şema, big-bag torbanın konumlandırıldığı, askı ve dolum ağzı bağlantısının yapıldığı, ürünün kontrollü beslenip tartıldığı ve dolu torbanın serbest bırakılarak tahliye edildiği akışı gösterir.",
        note: "Kırılgan granüllerde dolum yüksekliği, tozlu ürünlerde toz emişi, akışı zor ürünlerde besleme yöntemi ayrıca değerlendirilir.",
        mainLineLabel: "Dolum hattı",
        productLine: [
          { title: "Torba konumlandırma", text: "Boş big-bag palet veya zemin üzerinde istasyona yerleştirilir." },
          { title: "Askı ve boğaz bağlantısı", text: "Kulplar askı noktalarına takılır, dolum ağzı boğaza sabitlenir." },
          { title: "Besleme ve tartım", text: "Ürün beslenirken ağırlık load-cell'lerle izlenir; hedefe yaklaşırken hassas beslemeye geçilir." },
          { title: "Serbest bırakma ve tahliye", text: "Hedef ağırlıkta besleme durur; torba askıdan alınıp forklift veya konveyörle çıkarılır." },
        ],
        auxLineLabel: "Toz emişi",
        auxLine: [{ title: "Boğaz emişi", text: "Dolum sırasında torbadan çıkan hava ve toz emiş hattıyla filtreye gönderilir." }],
        flow: {
          svgTitle: "Big bag dolum proses akış şeması",
          svgDesc: "Dolum hattı: torba konumlandırma, askı ve boğaz bağlantısı, big-bag dolum istasyonu, hedef ağırlık ve tahliye. Yardımcı hat: toz emişi.",
          mainLane: "DOLUM HATTI",
          shape: "box",
          before: [
            { title: "Konumlandırma", sub: "Palet / zemin" },
            { title: "Bağlantı", sub: "Askı ve boğaz" },
          ],
          drum: { title: "BIG BAG DOLUM", sub: "besleme ve tartım" },
          after: [
            { title: "Hedef ağırlık", sub: "Besleme durur" },
            { title: "Tahliye", sub: "Forklift / konveyör" },
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
        title: "Big Bag Dolum Uygulama Alanları",
        items: [
          {
            title: "Gübre",
            text: "Granül ve toz gübrenin big-bag torbalarla sevkiyata hazırlanması. Kırılgan granüllerde dolum yüksekliği, higroskopik ürünlerde torba iç astarı dikkate alınır.",
            imageAlt: "Palet üzerinde dolu gübre big-bag torbaları",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Kum ve Mineraller",
            text: "Kum ve mineral ürünlerin yüksek tonajlı torbalara doldurulması. Aşındırıcı ürünlerde dolum boğazı ve besleyici aşınmaya karşı korunur.",
            imageAlt: "Açık renkli, ince taneli silis kumu",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Toz Ürünler",
            text: "İnce toz ürünlerin big-bag dolumunda toz emişinin ve boğaz sızdırmazlığının öne çıkması. Akışı zor tozlarda besleme yöntemi ayrıca seçilir.",
            imageAlt: "Kırılmış kireç taşı parçaları",
            linkLabel: "Toz Toplama Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Big Bag Dolum Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA big-bag dolum istasyonlarını ürünün yığın yoğunluğu ve akışkanlığı, big-bag tipi ve ölçüsü, hedef dolum ağırlığı ve saha yerleşimine göre projelendirir. Çerçeve ve askı düzeni, dolum boğazı, load-cell yerleşimi, besleme, toz emişi ve tahliye düzeni birlikte tasarlanır.",
        highlights: ["Big-bag ölçüsüne göre çerçeve ve askı", "Load-cell ile tartım", "Toz emiş bağlantılı dolum boğazı", "Forklift veya konveyör tahliyesi"],
        figureAlt: "Big-bag dolum ağzının boğaza kayışla sabitlendiği bağlantı detayı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün Yoğunluğu", text: "Yığın yoğunluğu, akışkanlık, kırılganlık ve tozlanma." },
          { title: "Hedef Ağırlık", text: "Torba başına dolum ağırlığı ve dolum yüksekliği." },
          { title: "Big-Bag Tipi", text: "Torba ölçüsü, kulp düzeni ve dolum ağzı tipi." },
          { title: "Load-Cell ve Besleme", text: "Tartım düzeni, kaba ve hassas besleme." },
          { title: "Dolum Geometrisi ve Tahliye", text: "Çerçeve yüksekliği, palet kullanımı, forklift veya konveyör erişimi." },
        ],
        dataNote: "Dolum kapasitesi ve tartım hassasiyeti ürün ve torba verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Big Bag Dolum Fotoğraf Galerisi",
        captions: [
          "Dolum boğazına bağlı big-bag ve toz emiş hortumu",
          "Platformlu big-bag dolum istasyonu ve makaralı konveyör",
          "Üst bunkerli big-bag dolum çerçevesi",
          "Makaralı konveyör üzerinde big-bag dolum istasyonu",
          "Yan yana big-bag dolum istasyonları",
          "Forklift erişimli çoklu big-bag dolum hattı",
          "Big-bag dolum istasyonları ve forklift",
          "Tesis içinde big-bag dolum ünitesi",
          "Palet üzerinde dolu big-bag torbalar",
        ],
      },
      faq: {
        title: "Big Bag Dolum Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Big bag dolum sistemi nasıl çalışır?",
            answer: "Boş torba askılara takılır ve dolum ağzı boğaza bağlanır; ürün beslenirken ağırlık load-cell'lerle izlenir ve hedef ağırlıkta besleme durdurulur.",
          },
          {
            question: "Açık ağız torbalamadan farkı nedir?",
            answer: "Big-bag dolum, yüksek tonajlı FIBC torbalar için askı çerçeveli bir istasyondur. Açık ağız torbalama ise küçük ve orta boy torbalar içindir.",
          },
          {
            question: "Paletsiz dolum yapılabilir mi?",
            answer: "Evet; dolum paletli veya paletsiz yapılabilir. Seçim torba tipine, tahliye yöntemine ve saha düzenine göre yapılır.",
          },
          {
            question: "Tozlu ürünlerde ne yapılır?",
            answer: "Dolum boğazı toz emiş hattına bağlanır ve boğaz-torba bağlantısının sızdırmazlığı ürün özelliklerine göre tasarlanır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, big-bag ölçüsü ve kulp düzeni, hedef ağırlık, istenen kapasite ve tahliye yöntemi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Big bag dolum sistemi için teknik teklif alın",
        text: "Ürününüz, big-bag tipiniz ve hedef ağırlığınıza göre dolum istasyonunu birlikte netleştirelim.",
        mailSubject: "Big Bag Dolum Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Akışkanlık ve tozlanma", "Big-bag ölçüsü ve kulp düzeni", "Hedef dolum ağırlığı", "İstenen dolum kapasitesi", "Tahliye yöntemi (forklift / konveyör)"],
        inquiryLines: [
          "Merhaba, big bag dolum sistemi için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Big-bag ölçüsü:",
          "Hedef ağırlık (kg):",
          "İstenen kapasite (torba/saat):",
          "Tahliye yöntemi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Big Bag Filling System | FIBC Filling Station",
        description:
          "Big bag (FIBC) filling systems for fertilizer, minerals and bulk products. Hanging frame, spout, weighing and dust extraction engineered for your product.",
      },
      breadcrumbLabel: "Big Bag Filling System",
      h1: "Big Bag Filling System – Weighed Filling of FIBC Bags",
      productCategory: "Big Bag Filling System",
      overview: {
        imageAlt: "Two big bag filling stations on pallets connected to filling spouts and dust extraction hoses",
        tagline: "Big Bag Filling",
        keyFacts: [
          { label: "Packaging", value: "Big bags (FIBC)" },
          { label: "Weighing", value: "Load cells; layout per project" },
          { label: "Connection", value: "Hanging points and filling spout" },
          { label: "Discharge", value: "Forklift or conveyor — per site" },
        ],
        title: "Controlled Filling of Bulk Products into Big Bags",
        paragraphs: [
          "In a big bag filling station, the empty FIBC is hung on the frame by its loops and its inlet is connected to the station's filling spout. As product flows from the upper hopper or feeder into the bag, the weight is monitored by load cells; feeding stops when the target weight is reached.",
          "The feeding method is selected for the product's flowability and bulk density. Switching from coarse to fine feeding near the target weight helps control the fill weight. Dust extraction connected to the spout removes displaced air and dust from the bag in a controlled way.",
          "Filling can be done with or without a pallet. The filled bag is released from the hangers and removed by forklift, roller conveyor or another method suited to the site. Bag size and filling height determine the design of the station frame.",
        ],
        note: "Equipment such as automatic bag inflation, vibration densification or a telescopic filling head is not part of every station; it is assessed according to product and site needs.",
      },
      process: {
        title: "Big Bag Filling Process Flow",
        intro:
          "The diagram shows the flow in which the big bag is positioned, the loops and inlet are connected, product is fed and weighed in a controlled way, and the filled bag is released and removed.",
        note: "Drop height for friable granules, dust extraction for dusty products and the feeding method for poorly flowing products are assessed separately.",
        mainLineLabel: "Filling line",
        productLine: [
          { title: "Bag positioning", text: "The empty big bag is placed in the station on a pallet or the floor." },
          { title: "Loop and spout connection", text: "Loops are hooked on the hanging points and the inlet is secured on the spout." },
          { title: "Feeding and weighing", text: "Weight is monitored by load cells during feeding; fine feeding starts near the target." },
          { title: "Release and removal", text: "Feeding stops at the target weight; the bag is unhooked and removed by forklift or conveyor." },
        ],
        auxLineLabel: "Dust extraction",
        auxLine: [{ title: "Spout extraction", text: "Air and dust displaced from the bag during filling are extracted to a filter." }],
        flow: {
          svgTitle: "Big bag filling process flow diagram",
          svgDesc: "Filling line: bag positioning, loop and spout connection, big bag filling station, target weight and removal. Auxiliary line: dust extraction.",
          mainLane: "FILLING LINE",
          shape: "box",
          before: [
            { title: "Positioning", sub: "Pallet / floor" },
            { title: "Connection", sub: "Loops and spout" },
          ],
          drum: { title: "BIG BAG FILLING", sub: "feeding and weighing" },
          after: [
            { title: "Target weight", sub: "Feeding stops" },
            { title: "Removal", sub: "Forklift / conveyor" },
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
        title: "Big Bag Filling Applications",
        items: [
          {
            title: "Fertilizer",
            text: "Preparing granular and powder fertilizer for shipment in big bags. Drop height for friable granules and bag liners for hygroscopic products are considered.",
            imageAlt: "Filled fertilizer big bags on pallets",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Sand and Minerals",
            text: "Filling sand and mineral products into high-tonnage bags. For abrasive products, the spout and feeder are protected against wear.",
            imageAlt: "Light-coloured fine silica sand",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Powder Products",
            text: "For fine powders, dust extraction and spout sealing are key in big bag filling. The feeding method is selected separately for poorly flowing powders.",
            imageAlt: "Crushed limestone pieces",
            linkLabel: "Dust Collection Systems",
          },
        ],
      },
      design: {
        title: "Custom Big Bag Filling Design and Manufacturing",
        intro:
          "PRO MAKINA engineers big bag filling stations around bulk density and flowability, big bag type and size, target fill weight and site layout. Frame and hanging arrangement, filling spout, load cell layout, feeding, dust extraction and discharge are designed together.",
        highlights: ["Frame and hangers sized to the big bag", "Load cell weighing", "Filling spout with dust extraction", "Forklift or conveyor discharge"],
        figureAlt: "Big bag inlet strapped to the filling spout",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product Density", text: "Bulk density, flowability, friability and dustiness." },
          { title: "Target Weight", text: "Fill weight per bag and filling height." },
          { title: "Big Bag Type", text: "Bag size, loop arrangement and inlet type." },
          { title: "Load Cells and Feeding", text: "Weighing layout, coarse and fine feeding." },
          { title: "Filling Geometry and Discharge", text: "Frame height, pallet use, forklift or conveyor access." },
        ],
        dataNote: "Filling capacity and weighing accuracy are defined from product and bag data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Big Bag Filling Photo Gallery",
        captions: [
          "Big bag connected to the filling spout with dust extraction hose",
          "Big bag filling station with platform and roller conveyor",
          "Big bag filling frame with upper hopper",
          "Big bag filling station on a roller conveyor",
          "Big bag filling stations side by side",
          "Multiple big bag filling line with forklift access",
          "Big bag filling stations and forklift",
          "Big bag filling unit inside a plant",
          "Filled big bags on pallets",
        ],
      },
      faq: {
        title: "Big Bag Filling FAQ",
        items: [
          {
            question: "How does a big bag filling system work?",
            answer: "The empty bag is hooked on and its inlet connected to the spout; weight is monitored by load cells during feeding and feeding stops at the target weight.",
          },
          {
            question: "How does it differ from open mouth bagging?",
            answer: "Big bag filling is a framed station for high-tonnage FIBC bags. Open mouth bagging is for small and medium bags.",
          },
          {
            question: "Can bags be filled without a pallet?",
            answer: "Yes; filling can be done with or without a pallet. The choice depends on bag type, discharge method and site layout.",
          },
          {
            question: "What about dusty products?",
            answer: "The spout is connected to dust extraction and the spout-to-bag seal is designed for the product properties.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, big bag size and loop arrangement, target weight, required capacity and discharge method.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a big bag filling system",
        text: "Share your product, big bag type and target weight, and we will define the filling station together with you.",
        mailSubject: "Big Bag Filling Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Flowability and dustiness", "Big bag size and loop arrangement", "Target fill weight", "Required filling capacity", "Discharge method (forklift / conveyor)"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a big bag filling system.",
          "",
          "Product:",
          "Bulk density:",
          "Big bag size:",
          "Target weight (kg):",
          "Required capacity (bags/h):",
          "Discharge method:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Станция наполнения биг-бэгов | Наполнение МКР",
        description:
          "Системы наполнения биг-бэгов (МКР) для удобрений, минералов и сыпучих продуктов. Рама подвеса, патрубок, взвешивание и аспирация — под продукт.",
      },
      breadcrumbLabel: "Наполнение биг-бэгов",
      h1: "Станция наполнения биг-бэгов – весовое наполнение МКР",
      productCategory: "Станция наполнения биг-бэгов",
      overview: {
        imageAlt: "Две станции наполнения биг-бэгов на поддонах с наполнительными патрубками и шлангами аспирации",
        tagline: "Наполнение биг-бэгов",
        keyFacts: [
          { label: "Тара", value: "Биг-бэги (МКР)" },
          { label: "Взвешивание", value: "Тензодатчики; схема по проекту" },
          { label: "Подсоединение", value: "Точки подвеса и наполнительный патрубок" },
          { label: "Выгрузка", value: "Погрузчик или конвейер — по площадке" },
        ],
        title: "Контролируемое наполнение биг-бэгов сыпучими продуктами",
        paragraphs: [
          "На станции наполнения пустой МКР подвешивается за стропы на раму, его загрузочный рукав подсоединяется к наполнительному патрубку. Пока продукт поступает из бункера или питателя, масса контролируется тензодатчиками; при достижении заданного веса подача прекращается.",
          "Способ подачи выбирается по сыпучести и насыпной плотности продукта. Переход с грубой на точную подачу вблизи заданного веса помогает контролировать массу. Аспирация на патрубке отводит вытесняемый воздух и пыль из мешка.",
          "Наполнение выполняется на поддоне или без него. Заполненный мешок снимается с подвеса и удаляется погрузчиком, роликовым конвейером или иным подходящим способом. Размер мешка и высота наполнения определяют конструкцию рамы.",
        ],
        note: "Автоматическое надувание мешка, виброуплотнение или телескопическая наполнительная головка есть не на каждой станции; они рассматриваются по потребностям продукта и площадки.",
      },
      process: {
        title: "Технологическая схема наполнения биг-бэгов",
        intro:
          "Схема показывает поток: биг-бэг устанавливается, подсоединяются стропы и рукав, продукт подаётся и взвешивается, заполненный мешок освобождается и удаляется.",
        note: "Высота падения для хрупких гранул, аспирация для пылящих продуктов и способ подачи для плохо сыпучих оцениваются отдельно.",
        mainLineLabel: "Линия наполнения",
        productLine: [
          { title: "Установка мешка", text: "Пустой биг-бэг устанавливается на поддон или пол станции." },
          { title: "Подвес и подсоединение", text: "Стропы надеваются на точки подвеса, рукав фиксируется на патрубке." },
          { title: "Подача и взвешивание", text: "Масса контролируется тензодатчиками; вблизи цели включается точная подача." },
          { title: "Освобождение и выгрузка", text: "При заданном весе подача прекращается, мешок снимается и удаляется." },
        ],
        auxLineLabel: "Аспирация",
        auxLine: [{ title: "Аспирация патрубка", text: "Вытесняемый при наполнении воздух и пыль отводятся на фильтр." }],
        flow: {
          svgTitle: "Технологическая схема наполнения биг-бэгов",
          svgDesc: "Линия наполнения: установка мешка, подвес и подсоединение, станция наполнения, заданный вес и выгрузка. Вспомогательная линия: аспирация.",
          mainLane: "ЛИНИЯ НАПОЛНЕНИЯ",
          shape: "box",
          before: [
            { title: "Установка", sub: "Поддон / пол" },
            { title: "Подсоединение", sub: "Стропы и рукав" },
          ],
          drum: { title: "НАПОЛНЕНИЕ БИГ-БЭГОВ", sub: "подача и взвешивание" },
          after: [
            { title: "Заданный вес", sub: "Подача стоп" },
            { title: "Выгрузка", sub: "Погрузчик / конвейер" },
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
        title: "Области применения наполнения биг-бэгов",
        items: [
          {
            title: "Удобрения",
            text: "Подготовка гранулированных и порошкообразных удобрений к отгрузке в биг-бэгах. Учитываются высота падения для хрупких гранул и вкладыши для гигроскопичных продуктов.",
            imageAlt: "Заполненные биг-бэги с удобрениями на поддонах",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Песок и минералы",
            text: "Наполнение МКР песком и минеральными продуктами. Для абразивных продуктов патрубок и питатель защищаются от износа.",
            imageAlt: "Светлый мелкозернистый кварцевый песок",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Порошкообразные продукты",
            text: "При наполнении мелкими порошками ключевыми становятся аспирация и герметичность патрубка. Способ подачи для плохо сыпучих порошков выбирается отдельно.",
            imageAlt: "Куски дроблёного известняка",
            linkLabel: "Системы пылеулавливания",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление станций наполнения биг-бэгов",
        intro:
          "PRO MAKINA проектирует станции наполнения исходя из насыпной плотности и сыпучести продукта, типа и размера биг-бэга, заданной массы и компоновки площадки. Рама и подвес, наполнительный патрубок, тензодатчики, подача, аспирация и выгрузка разрабатываются совместно.",
        highlights: ["Рама и подвес под размер мешка", "Взвешивание на тензодатчиках", "Патрубок с аспирацией", "Выгрузка погрузчиком или конвейером"],
        figureAlt: "Загрузочный рукав биг-бэга, закреплённый ремнём на патрубке",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Плотность продукта", text: "Насыпная плотность, сыпучесть, хрупкость и пыление." },
          { title: "Заданная масса", text: "Масса на мешок и высота наполнения." },
          { title: "Тип биг-бэга", text: "Размер мешка, расположение строп и тип рукава." },
          { title: "Тензодатчики и подача", text: "Схема взвешивания, грубая и точная подача." },
          { title: "Геометрия и выгрузка", text: "Высота рамы, использование поддона, доступ погрузчика или конвейера." },
        ],
        dataNote: "Производительность и точность взвешивания определяются по данным продукта и мешка; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея станций наполнения биг-бэгов",
        captions: [
          "Биг-бэг на наполнительном патрубке со шлангом аспирации",
          "Станция наполнения с площадкой и роликовым конвейером",
          "Рама наполнения биг-бэгов с верхним бункером",
          "Станция наполнения на роликовом конвейере",
          "Станции наполнения биг-бэгов рядом",
          "Многопостовая линия наполнения с доступом погрузчика",
          "Станции наполнения и погрузчик",
          "Узел наполнения биг-бэгов в цехе",
          "Заполненные биг-бэги на поддонах",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о наполнении биг-бэгов",
        items: [
          {
            question: "Как работает станция наполнения биг-бэгов?",
            answer: "Пустой мешок подвешивается, рукав подсоединяется к патрубку; при подаче масса контролируется тензодатчиками, и подача прекращается при заданном весе.",
          },
          {
            question: "Чем это отличается от фасовки в открытые мешки?",
            answer: "Наполнение биг-бэгов — станция с рамой для МКР большой массы, а фасовка в открытые мешки — для малых и средних мешков.",
          },
          {
            question: "Можно ли наполнять без поддона?",
            answer: "Да, наполнение возможно на поддоне и без него; выбор зависит от типа мешка, способа выгрузки и компоновки площадки.",
          },
          {
            question: "Что делать с пылящими продуктами?",
            answer: "Патрубок подключается к аспирации, а уплотнение рукава рассчитывается под свойства продукта.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, размер биг-бэга и строп, заданная масса, требуемая производительность и способ выгрузки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на станцию наполнения биг-бэгов",
        text: "Сообщите продукт, тип биг-бэга и заданную массу — вместе определим станцию наполнения.",
        mailSubject: "Запрос предложения: наполнение биг-бэгов",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Сыпучесть и пыление", "Размер биг-бэга и строп", "Заданная масса", "Требуемая производительность", "Способ выгрузки (погрузчик / конвейер)"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на станцию наполнения биг-бэгов.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Размер биг-бэга:",
          "Заданная масса (кг):",
          "Производительность (мешков/ч):",
          "Способ выгрузки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نظام تعبئة الأكياس الكبيرة | محطة تعبئة FIBC",
        description:
          "أنظمة تعبئة الأكياس الكبيرة (FIBC) للأسمدة والمعادن والمواد السائبة، مع تصميم إطار التعليق وفوهة التعبئة والوزن وشفط الغبار وفق المنتج.",
      },
      breadcrumbLabel: "تعبئة الأكياس الكبيرة",
      h1: "نظام تعبئة الأكياس الكبيرة – تعبئة موزونة لأكياس FIBC",
      productCategory: "نظام تعبئة أكياس كبيرة",
      overview: {
        imageAlt: "محطتا تعبئة أكياس كبيرة على منصات متصلتان بفوهات التعبئة وخراطيم شفط الغبار",
        tagline: "تعبئة الأكياس الكبيرة",
        keyFacts: [
          { label: "العبوة", value: "أكياس كبيرة (FIBC)" },
          { label: "الوزن", value: "خلايا تحميل، والترتيب حسب المشروع" },
          { label: "التوصيل", value: "نقاط التعليق وفوهة التعبئة" },
          { label: "التفريغ", value: "رافعة شوكية أو ناقل — حسب الموقع" },
        ],
        title: "تعبئة متحكم بها للمواد السائبة في الأكياس الكبيرة",
        paragraphs: [
          "في محطة تعبئة الأكياس الكبيرة يُعلَّق كيس FIBC الفارغ من عراويه على الإطار وتُوصل فتحة تعبئته بفوهة المحطة، وأثناء تدفق المنتج من القادوس العلوي أو المُلقِّم إلى الكيس يُراقَب الوزن بخلايا التحميل ويتوقف التلقيم عند بلوغ الوزن المستهدف.",
          "تُختار طريقة التلقيم وفق قابلية المنتج للانسياب وكثافته الظاهرية، ويساعد الانتقال من التلقيم الخشن إلى الدقيق قرب الوزن المستهدف على ضبط وزن التعبئة، ويسحب شفط الغبار المتصل بالفوهة الهواء والغبار المزاحين من الكيس بشكل متحكم به.",
          "يمكن التعبئة على منصة أو بدونها، ثم يُحرَّر الكيس الممتلئ من التعليق ويُنقل برافعة شوكية أو ناقل بكرات أو طريقة أخرى مناسبة للموقع، ويحدد مقاس الكيس وارتفاع التعبئة تصميم إطار المحطة.",
        ],
        note: "لا تتوفر في كل محطة تجهيزات مثل النفخ الآلي للكيس أو الدمك بالاهتزاز أو رأس التعبئة التلسكوبي، بل تُقيَّم وفق احتياجات المنتج والموقع.",
      },
      process: {
        title: "تدفق العملية في تعبئة الأكياس الكبيرة",
        intro:
          "يوضح المخطط التدفق الذي يُوضع فيه الكيس الكبير وتُوصل العراوي وفتحة التعبئة، ثم يُلقَّم المنتج ويُوزن بشكل متحكم به، ويُحرَّر الكيس الممتلئ ويُنقل.",
        note: "يُقيَّم بشكل منفصل ارتفاع السقوط للحبيبات الهشة، وشفط الغبار للمنتجات المغبّرة، وطريقة التلقيم للمنتجات صعبة الانسياب.",
        mainLineLabel: "خط التعبئة",
        productLine: [
          { title: "وضع الكيس", text: "يُوضع الكيس الكبير الفارغ في المحطة على منصة أو على الأرض." },
          { title: "التعليق والتوصيل", text: "تُعلَّق العراوي على نقاط التعليق وتُثبَّت فتحة التعبئة على الفوهة." },
          { title: "التلقيم والوزن", text: "يُراقَب الوزن بخلايا التحميل أثناء التلقيم، ويبدأ التلقيم الدقيق قرب الهدف." },
          { title: "التحرير والتفريغ", text: "يتوقف التلقيم عند الوزن المستهدف ويُفك الكيس ويُنقل برافعة أو ناقل." },
        ],
        auxLineLabel: "شفط الغبار",
        auxLine: [{ title: "شفط الفوهة", text: "يُشفط الهواء والغبار المزاحان من الكيس أثناء التعبئة إلى مرشح." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في تعبئة الأكياس الكبيرة",
          svgDesc: "خط التعبئة: وضع الكيس، التعليق والتوصيل، محطة التعبئة، الوزن المستهدف والتفريغ. الخط المساعد: شفط الغبار.",
          mainLane: "خط التعبئة",
          shape: "box",
          before: [
            { title: "وضع الكيس", sub: "منصة / أرضية" },
            { title: "التوصيل", sub: "العراوي والفوهة" },
          ],
          drum: { title: "تعبئة الأكياس الكبيرة", sub: "التلقيم والوزن" },
          after: [
            { title: "الوزن المستهدف", sub: "توقف التلقيم" },
            { title: "التفريغ", sub: "رافعة / ناقل" },
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
        title: "مجالات استخدام تعبئة الأكياس الكبيرة",
        items: [
          {
            title: "الأسمدة",
            text: "تجهيز الأسمدة الحبيبية والمسحوقة للشحن في أكياس كبيرة، مع مراعاة ارتفاع السقوط للحبيبات الهشة والبطانات الداخلية للمنتجات الماصة للرطوبة.",
            imageAlt: "أكياس كبيرة معبأة بالسماد على منصات",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "الرمل والمعادن",
            text: "تعبئة الرمل والمنتجات المعدنية في أكياس عالية الحمولة، مع حماية الفوهة والمُلقِّم من التآكل للمنتجات الكاشطة.",
            imageAlt: "رمل سيليكا ناعم فاتح اللون",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "المنتجات المسحوقة",
            text: "يبرز شفط الغبار وإحكام الفوهة عند تعبئة المساحيق الناعمة في الأكياس الكبيرة، وتُختار طريقة التلقيم بشكل منفصل للمساحيق صعبة الانسياب.",
            imageAlt: "قطع من الحجر الجيري المكسّر",
            linkLabel: "أنظمة تجميع الغبار",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع محطات تعبئة الأكياس الكبيرة",
        intro:
          "تصمم PRO MAKINA محطات تعبئة الأكياس الكبيرة وفق الكثافة الظاهرية للمنتج وقابليته للانسياب ونوع الكيس ومقاسه والوزن المستهدف وتخطيط الموقع، مع تصميم الإطار والتعليق وفوهة التعبئة وتوزيع خلايا التحميل والتلقيم وشفط الغبار والتفريغ معًا.",
        highlights: ["إطار وتعليق وفق مقاس الكيس", "وزن بخلايا التحميل", "فوهة تعبئة مع شفط الغبار", "تفريغ برافعة شوكية أو ناقل"],
        figureAlt: "فتحة الكيس الكبير مثبتة بحزام على فوهة التعبئة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "كثافة المنتج", text: "الكثافة الظاهرية وقابلية الانسياب والهشاشة والتغبير." },
          { title: "الوزن المستهدف", text: "وزن التعبئة لكل كيس وارتفاع التعبئة." },
          { title: "نوع الكيس الكبير", text: "مقاس الكيس وترتيب العراوي ونوع الفتحة." },
          { title: "خلايا التحميل والتلقيم", text: "ترتيب الوزن والتلقيم الخشن والدقيق." },
          { title: "هندسة التعبئة والتفريغ", text: "ارتفاع الإطار واستخدام المنصة ووصول الرافعة أو الناقل." },
        ],
        dataNote: "تُحدَّد سعة التعبئة ودقة الوزن من بيانات المنتج والكيس، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور تعبئة الأكياس الكبيرة",
        captions: [
          "كيس كبير متصل بفوهة التعبئة مع خرطوم شفط الغبار",
          "محطة تعبئة بمنصة وناقل بكرات",
          "إطار تعبئة أكياس كبيرة مع قادوس علوي",
          "محطة تعبئة على ناقل بكرات",
          "محطات تعبئة أكياس كبيرة متجاورة",
          "خط تعبئة متعدد مع وصول الرافعة الشوكية",
          "محطات تعبئة ورافعة شوكية",
          "وحدة تعبئة أكياس كبيرة داخل مصنع",
          "أكياس كبيرة معبأة على منصات",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول تعبئة الأكياس الكبيرة",
        items: [
          {
            question: "كيف يعمل نظام تعبئة الأكياس الكبيرة؟",
            answer: "يُعلَّق الكيس الفارغ وتُوصل فتحته بالفوهة، ويُراقَب الوزن بخلايا التحميل أثناء التلقيم ويتوقف عند بلوغ الوزن المستهدف.",
          },
          {
            question: "ما الفرق بينه وبين تعبئة الأكياس مفتوحة الفوهة؟",
            answer: "تعبئة الأكياس الكبيرة محطة بإطار لأكياس FIBC عالية الحمولة، أما تعبئة الأكياس مفتوحة الفوهة فللأكياس الصغيرة والمتوسطة.",
          },
          {
            question: "هل يمكن التعبئة دون منصة؟",
            answer: "نعم، يمكن التعبئة على منصة أو دونها، ويعتمد الاختيار على نوع الكيس وطريقة التفريغ وتخطيط الموقع.",
          },
          {
            question: "ماذا عن المنتجات المغبّرة؟",
            answer: "تُوصل الفوهة بخط شفط الغبار ويُصمم إحكام اتصال الفوهة بالكيس وفق خصائص المنتج.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية ومقاس الكيس وترتيب العراوي والوزن المستهدف والسعة المطلوبة وطريقة التفريغ.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لنظام تعبئة الأكياس الكبيرة",
        text: "شاركنا منتجك ونوع الكيس الكبير والوزن المستهدف، لنحدد معًا محطة التعبئة المناسبة.",
        mailSubject: "طلب عرض سعر: تعبئة أكياس كبيرة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "قابلية الانسياب والتغبير", "مقاس الكيس وترتيب العراوي", "وزن التعبئة المستهدف", "سعة التعبئة المطلوبة", "طريقة التفريغ (رافعة / ناقل)"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام تعبئة أكياس كبيرة.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "مقاس الكيس:",
          "الوزن المستهدف (كغ):",
          "السعة المطلوبة (كيس/ساعة):",
          "طريقة التفريغ:",
        ],
      },
    },
  },
};
