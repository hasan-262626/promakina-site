import type { DrumPageConfig } from "../types";

// Paletleme hatları: dolu torba/koli gibi ambalajların palete dizilmesi (paketleme/dolum değildir).
// Mevcut veride sistem tipi (robotik, kartezyen, konvansiyonel) doğrulanmadığından tip ve robot markası belirtilmez;
// "otomatik" ifadesi koşulsuz kullanılmaz. Kapasite değeri verilmez. Projede paletleme fotoğrafı yok (önceki sayfa torbalama
// makinesi görselini gösteriyordu): ana görsel üçüncü taraf örnek görseldir (Commons, CC0).
const pk = (file: string) => `/images/paket-uygulamalari/${file}`;

export const palletizingLinesPage: DrumPageConfig = {
  key: "palletizingLines",
  group: "packagingSystems",
  trSlug: "paletleme-hatlari",
  mainImage: pk("robotlu-paletleme.webp"),
  illustrativeMainImage: true,
  applications: [
    { image: pk("torba-paletleme.webp"), link: "openMouthBagging" },
    { image: "/images/kirici-uygulamalari/organik-gubre-cuval.webp", link: "fertilizerPlants" },
  ],
  sectors: ["fertilizerPlants", "mining", "chemicalProcess"],
  resources: ["openMouthBagging", "bigBagFilling", "conveying", "packagingSystems"],
  machines: ["packagingSystems", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Paletleme Hattı ve Torba Paletleme Sistemleri | PRO MAKİNA",
        description:
          "Dolu torba ve kolilerin belirlenen dizilimle palete yerleştirilmesi için paletleme hattı. Sistem tipi, dizilim ve konveyör düzeni ürüne göre projelendirilir.",
      },
      breadcrumbLabel: "Paletleme Hatları",
      h1: "Paletleme Hattı – Torba ve Kolilerin Palete Düzenli Dizilmesi",
      productCategory: "Paletleme Sistemi",
      overview: {
        imageAlt: "Konveyörden gelen kolileri palete dizen paletleme robotu ve streç sarma ünitesi (örnek görsel)",
        imageBadge: "Örnek proses görseli",
        tagline: "Paletleme Hattı",
        keyFacts: [
          { label: "Görev", value: "Dolu paketlerin palete dizilmesi" },
          { label: "Sistem tipi", value: "Robotik, kartezyen veya konvansiyonel — projeye göre" },
          { label: "Dizilim", value: "Pakete ve palete göre dizilim reçetesi" },
          { label: "Güvenlik", value: "Koruma çitleri ve kontrollü operatör erişimi" },
        ],
        title: "Dolum Sonrası Ambalajların Sevkiyata Hazırlanması",
        paragraphs: [
          "Paletleme hattı, torbalama veya dolum makinelerinden çıkan dolu paketleri konveyörle alır, hizalayıp yönlendirir ve belirlenen dizilim reçetesine göre katman katman palete yerleştirir. Dolu palet hattan çıkarak streç sarma veya depolama gibi sonraki adımlara aktarılır.",
          "Hattın temel bileşenleri; paket besleme konveyörleri, torba düzeltme ve yönlendirme ünitesi, palet besleme, paletleme ünitesi ve dolu palet çıkış konveyörüdür. Paletleme ünitesi robotik, kartezyen veya konvansiyonel katman oluşturmalı yapıda olabilir; seçim paket tipi, ağırlığı, hat kapasitesi ve yerleşim alanına göre yapılır.",
          "Dizilim reçetesi, palet ölçüsü ve paket boyutlarına göre katmanların kararlılığını sağlayacak şekilde hazırlanır. Farklı paket boyutları için birden fazla reçete tanımlanabilir.",
        ],
        note: "Paletleme, paketleme işleminin kendisi değildir. Torbalama ve dolum sistemlerinden çıkan ambalajların lojistik için palet üzerinde düzenlenmesini sağlar.",
      },
      process: {
        title: "Paletleme Hattı Proses Akışı",
        intro:
          "Şema, dolu paketlerin hat üzerinden geldiği, hizalanıp yönlendirildiği, palet diziliminin oluşturulup paketlerin palete yerleştirildiği ve dolu paletin sonraki işlemlere aktarıldığı akışı gösterir. Torbalama ve streç sarma ayrı ekipmanlardır.",
        note: "Hat kapasitesi; paket ağırlığı, dizilim reçetesi ve paletleme ünitesinin tipine bağlıdır ve projeye göre belirlenir.",
        mainLineLabel: "Paket hattı",
        productLine: [
          { title: "Paketlerin gelişi", text: "Dolu torba veya koliler besleme konveyörüyle hatta girer." },
          { title: "Hizalama ve yönlendirme", text: "Torbalar düzeltilir, paketler dizilim reçetesine göre döndürülüp yönlendirilir." },
          { title: "Dizilim ve yerleştirme", text: "Paletleme ünitesi paketleri katman katman palete yerleştirir." },
          { title: "Dolu palet çıkışı", text: "Tamamlanan palet çıkış konveyörüyle streç sarma veya depolamaya aktarılır." },
        ],
        auxLineLabel: "Palet hattı",
        auxLine: [{ title: "Boş palet besleme", text: "Boş paletler palet besleme ünitesinden paletleme alanına verilir." }],
        flow: {
          svgTitle: "Paletleme hattı proses akış şeması",
          svgDesc: "Paket hattı: paketlerin gelişi, hizalama, paletleme ünitesi, dolu palet çıkışı ve streç sarma. Palet hattı: boş palet besleme.",
          mainLane: "PAKET HATTI",
          shape: "box",
          before: [
            { title: "Paket gelişi", sub: "Torbalama çıkışı" },
            { title: "Hizalama", sub: "Düzeltme / yönlendirme" },
          ],
          drum: { title: "PALETLEME", sub: "dizilim ve yerleştirme" },
          after: [
            { title: "Dolu palet", sub: "Çıkış konveyörü" },
            { title: "Streç sarma", sub: "Ayrı ekipman" },
          ],
          aux: {
            lane: "PALET HATTI",
            tone: "air",
            inputs: [{ title: "Boş palet", sub: "Palet besleme" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Paletleme Hattı Uygulama Alanları",
        items: [
          {
            title: "Torba Paletleme",
            text: "Torbalama makinesinden çıkan dolu torbaların palete dizilmesi. Torba düzeltme ve dizilim reçetesi, katmanların kararlılığı için belirleyicidir.",
            imageAlt: "Koruma çiti içinde dolu torbaları palete dizen robot (örnek görsel)",
            linkLabel: "Açık Ağız Torbalama",
          },
          {
            title: "Gübre Sevkiyatı",
            text: "Paketlenmiş gübrenin paletler üzerinde sevkiyata hazırlanması. Palet ölçüsü ve torba ağırlığı dizilim reçetesini doğrudan etkiler.",
            imageAlt: "Paletler üzerinde istiflenmiş organik gübre torbaları",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Paletleme Hattı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA paletleme hatlarını paket tipi ve ölçüsü, paket ağırlığı, hat kapasitesi, palet ölçüsü ve saha yerleşimine göre projelendirir. Besleme konveyörleri, torba düzeltme ve yönlendirme, palet besleme, paletleme ünitesi, dolu palet çıkışı ve güvenlik düzeni birlikte tasarlanır.",
        highlights: ["Pakete göre paletleme ünitesi seçimi", "Dizilim reçetesi ve katman kararlılığı", "Palet besleme ve çıkış konveyörleri", "Koruma çitleri ve güvenli erişim"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Paket Tipi", text: "Torba, koli veya diğer ambalaj; ölçü ve yüzey yapısı." },
          { title: "Paket Ağırlığı", text: "Tekil paket ağırlığı ve palet başına toplam yük." },
          { title: "Palet Ölçüsü", text: "Palet tipi, ölçüsü ve istif yüksekliği." },
          { title: "Dizilim", text: "Katman düzeni ve farklı ürünler için reçeteler." },
          { title: "Kapasite ve Hat", text: "Hat kapasitesi, konveyör düzeni, streç sarma ve otomasyon." },
        ],
        dataNote: "Hat kapasitesi ve paletleme ünitesinin tipi paket ve saha verisine göre belirlenir; sayfada genel değer veya belirli bir robot markası belirtilmez.",
      },
      faq: {
        title: "Paletleme Hattı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Paletleme hattı ne işe yarar?",
            answer: "Torbalama veya dolum makinelerinden çıkan dolu paketleri belirlenen dizilimle palete yerleştirir ve sevkiyata hazırlar.",
          },
          {
            question: "Paletleme ile paketleme aynı şey midir?",
            answer: "Hayır. Paketleme ürünün torba veya ambalaja doldurulmasıdır; paletleme ise dolu ambalajların palet üzerinde düzenlenmesidir.",
          },
          {
            question: "Hangi paletleme tipi seçilir?",
            answer: "Robotik, kartezyen veya konvansiyonel sistemler; paket tipi, ağırlığı, hat kapasitesi ve yerleşim alanına göre değerlendirilir.",
          },
          {
            question: "Farklı paket boyutları aynı hatta paletlenebilir mi?",
            answer: "Paletleme ünitesi ve tutucu uygun seçilirse farklı paketler için ayrı dizilim reçeteleri tanımlanabilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Paket tipi, ölçüsü ve ağırlığı, istenen hat kapasitesi, palet ölçüsü, istif yüksekliği ve saha yerleşimi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Paletleme hattı için teknik teklif alın",
        text: "Paket tipiniz, ağırlığınız ve palet ölçünüze göre paletleme hattını birlikte netleştirelim.",
        mailSubject: "Paletleme Hattı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Paket tipi ve ölçüsü", "Paket ağırlığı", "İstenen hat kapasitesi", "Palet ölçüsü ve istif yüksekliği", "Dizilim tercihi", "Saha yerleşimi ve streç sarma ihtiyacı"],
        inquiryLines: [
          "Merhaba, paletleme hattı için teknik teklif almak istiyorum.",
          "",
          "Paket tipi / ölçüsü:",
          "Paket ağırlığı (kg):",
          "Hat kapasitesi (paket/saat):",
          "Palet ölçüsü:",
          "İstif yüksekliği:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Palletizing Lines | Bag Palletizing Systems",
        description:
          "Palletizing lines for stacking filled bags and cartons onto pallets in a defined pattern. System type, pattern and conveyors are engineered for your product.",
      },
      breadcrumbLabel: "Palletizing Lines",
      h1: "Palletizing Line – Orderly Stacking of Bags and Cartons on Pallets",
      productCategory: "Palletizing System",
      overview: {
        imageAlt: "Palletizing robot stacking cartons from a conveyor next to a stretch wrapping unit (illustrative photo)",
        imageBadge: "Illustrative process photo",
        tagline: "Palletizing Line",
        keyFacts: [
          { label: "Duty", value: "Stacking filled packages onto pallets" },
          { label: "System type", value: "Robotic, gantry or conventional — per project" },
          { label: "Pattern", value: "Stacking recipe per package and pallet" },
          { label: "Safety", value: "Guard fencing and controlled operator access" },
        ],
        title: "Preparing Filled Packages for Shipment",
        paragraphs: [
          "A palletizing line receives filled packages from bagging or filling machines by conveyor, aligns and orients them, and places them layer by layer onto the pallet according to a defined stacking recipe. The full pallet then leaves the line for the next steps such as stretch wrapping or storage.",
          "The main components are package infeed conveyors, bag flattening and orientation unit, pallet dispenser, palletizing unit and full pallet outfeed conveyor. The palletizing unit can be robotic, gantry or a conventional layer-forming design; the choice depends on package type, weight, line capacity and available space.",
          "The stacking recipe is prepared for pallet size and package dimensions to keep the layers stable. Several recipes can be defined for different package sizes.",
        ],
        note: "Palletizing is not packaging itself. It arranges the packages leaving bagging and filling systems on pallets for logistics.",
      },
      process: {
        title: "Palletizing Line Process Flow",
        intro:
          "The diagram shows the flow in which filled packages arrive on the line, are aligned and oriented, the pallet pattern is formed and packages are placed on the pallet, and the full pallet is transferred to the next operations. Bagging and stretch wrapping are separate equipment.",
        note: "Line capacity depends on package weight, stacking recipe and palletizing unit type and is defined per project.",
        mainLineLabel: "Package line",
        productLine: [
          { title: "Package infeed", text: "Filled bags or cartons enter the line on the infeed conveyor." },
          { title: "Alignment and orientation", text: "Bags are flattened and packages turned and oriented to the stacking recipe." },
          { title: "Pattern and placement", text: "The palletizing unit places packages layer by layer on the pallet." },
          { title: "Full pallet outfeed", text: "The completed pallet goes via the outfeed conveyor to stretch wrapping or storage." },
        ],
        auxLineLabel: "Pallet line",
        auxLine: [{ title: "Empty pallet supply", text: "Empty pallets are supplied from the pallet dispenser to the palletizing area." }],
        flow: {
          svgTitle: "Palletizing line process flow diagram",
          svgDesc: "Package line: package infeed, alignment, palletizing unit, full pallet outfeed and stretch wrapping. Pallet line: empty pallet supply.",
          mainLane: "PACKAGE LINE",
          shape: "box",
          before: [
            { title: "Package infeed", sub: "From bagging" },
            { title: "Alignment", sub: "Flattening / turning" },
          ],
          drum: { title: "PALLETIZING", sub: "pattern and placement" },
          after: [
            { title: "Full pallet", sub: "Outfeed conveyor" },
            { title: "Stretch wrapping", sub: "Separate equipment" },
          ],
          aux: {
            lane: "PALLET LINE",
            tone: "air",
            inputs: [{ title: "Empty pallet", sub: "Pallet dispenser" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Palletizing Line Applications",
        items: [
          {
            title: "Bag Palletizing",
            text: "Stacking filled bags from the bagging machine onto pallets. Bag flattening and the stacking recipe are decisive for layer stability.",
            imageAlt: "Robot stacking filled bags on a pallet inside guard fencing (illustrative photo)",
            linkLabel: "Open Mouth Bagging System",
          },
          {
            title: "Fertilizer Shipment",
            text: "Preparing packed fertilizer on pallets for shipment. Pallet size and bag weight directly affect the stacking recipe.",
            imageAlt: "Organic fertilizer bags stacked on pallets",
            linkLabel: "Fertilizer and Granulation Plants",
          },
        ],
      },
      design: {
        title: "Custom Palletizing Line Design and Manufacturing",
        intro:
          "PRO MAKINA engineers palletizing lines around package type and size, package weight, line capacity, pallet size and site layout. Infeed conveyors, bag flattening and orientation, pallet dispenser, palletizing unit, full pallet outfeed and safety arrangement are designed together.",
        highlights: ["Palletizing unit chosen for the package", "Stacking recipe and layer stability", "Pallet dispenser and outfeed conveyors", "Guard fencing and safe access"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Package Type", text: "Bag, carton or other packaging; size and surface." },
          { title: "Package Weight", text: "Single package weight and total load per pallet." },
          { title: "Pallet Size", text: "Pallet type, size and stack height." },
          { title: "Pattern", text: "Layer arrangement and recipes for different products." },
          { title: "Capacity and Line", text: "Line capacity, conveyor layout, stretch wrapping and automation." },
        ],
        dataNote: "Line capacity and palletizing unit type are defined from package and site data; no generic values or robot brand are stated on this page.",
      },
      faq: {
        title: "Palletizing Line FAQ",
        items: [
          {
            question: "What does a palletizing line do?",
            answer: "It places filled packages from bagging or filling machines onto pallets in a defined pattern and prepares them for shipment.",
          },
          {
            question: "Is palletizing the same as packaging?",
            answer: "No. Packaging is filling the product into bags or containers; palletizing is arranging the filled packages on pallets.",
          },
          {
            question: "Which palletizing type is selected?",
            answer: "Robotic, gantry or conventional systems are assessed by package type, weight, line capacity and available space.",
          },
          {
            question: "Can different package sizes be palletized on the same line?",
            answer: "With a suitable palletizing unit and gripper, separate stacking recipes can be defined for different packages.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Package type, size and weight, required line capacity, pallet size, stack height and site layout.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a palletizing line",
        text: "Share your package type, weight and pallet size, and we will define the palletizing line together with you.",
        mailSubject: "Palletizing Line Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Package type and size", "Package weight", "Required line capacity", "Pallet size and stack height", "Pattern preference", "Site layout and stretch wrapping need"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a palletizing line.",
          "",
          "Package type / size:",
          "Package weight (kg):",
          "Line capacity (packages/h):",
          "Pallet size:",
          "Stack height:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Линии паллетирования | Паллетирование мешков",
        description:
          "Линии паллетирования для укладки заполненных мешков и коробов на поддоны по заданной схеме. Тип системы, схема укладки и конвейеры — под ваш продукт.",
      },
      breadcrumbLabel: "Линии паллетирования",
      h1: "Линия паллетирования – упорядоченная укладка мешков и коробов на поддоны",
      productCategory: "Система паллетирования",
      overview: {
        imageAlt: "Робот-паллетайзер укладывает коробы с конвейера рядом с узлом обмотки плёнкой (иллюстративное фото)",
        imageBadge: "Иллюстративное фото процесса",
        tagline: "Линия паллетирования",
        keyFacts: [
          { label: "Назначение", value: "Укладка заполненных упаковок на поддоны" },
          { label: "Тип системы", value: "Роботизированная, портальная или традиционная — по проекту" },
          { label: "Схема укладки", value: "Рецепт укладки под упаковку и поддон" },
          { label: "Безопасность", value: "Защитные ограждения и контроль доступа" },
        ],
        title: "Подготовка заполненных упаковок к отгрузке",
        paragraphs: [
          "Линия паллетирования принимает по конвейеру заполненные упаковки от фасовочных машин, выравнивает и ориентирует их и слой за слоем укладывает на поддон по заданной схеме. Готовый поддон уходит на следующие операции — обмотку плёнкой или склад.",
          "Основные узлы: подающие конвейеры, узел разравнивания и ориентации мешков, магазин поддонов, паллетирующий узел и конвейер выхода готовых поддонов. Паллетирующий узел может быть роботизированным, портальным или традиционным послойным; выбор зависит от типа и массы упаковки, производительности и площади.",
          "Схема укладки подбирается под размер поддона и габариты упаковки для устойчивости слоёв. Для разных размеров упаковки можно задать несколько схем.",
        ],
        note: "Паллетирование — это не сама упаковка. Оно формирует на поддонах упаковки, выходящие из фасовочных и разливочных систем, для логистики.",
      },
      process: {
        title: "Технологическая схема линии паллетирования",
        intro:
          "Схема показывает поток: заполненные упаковки поступают на линию, выравниваются и ориентируются, формируется схема укладки и упаковки кладутся на поддон, готовый поддон передаётся далее. Фасовка и обмотка плёнкой — отдельное оборудование.",
        note: "Производительность зависит от массы упаковки, схемы укладки и типа паллетирующего узла и определяется по проекту.",
        mainLineLabel: "Линия упаковок",
        productLine: [
          { title: "Поступление упаковок", text: "Заполненные мешки или коробы поступают на линию по подающему конвейеру." },
          { title: "Выравнивание и ориентация", text: "Мешки разравниваются, упаковки поворачиваются по схеме укладки." },
          { title: "Формирование и укладка", text: "Паллетирующий узел укладывает упаковки на поддон послойно." },
          { title: "Выход поддона", text: "Готовый поддон по конвейеру уходит на обмотку или склад." },
        ],
        auxLineLabel: "Линия поддонов",
        auxLine: [{ title: "Подача пустых поддонов", text: "Пустые поддоны подаются из магазина в зону паллетирования." }],
        flow: {
          svgTitle: "Технологическая схема линии паллетирования",
          svgDesc: "Линия упаковок: поступление, выравнивание, паллетирующий узел, выход поддона и обмотка. Линия поддонов: подача пустых поддонов.",
          mainLane: "ЛИНИЯ УПАКОВОК",
          shape: "box",
          before: [
            { title: "Поступление", sub: "От фасовки" },
            { title: "Выравнивание", sub: "Разравнивание / поворот" },
          ],
          drum: { title: "ПАЛЛЕТИРОВАНИЕ", sub: "схема и укладка" },
          after: [
            { title: "Готовый поддон", sub: "Выходной конвейер" },
            { title: "Обмотка", sub: "Отдельное оборудование" },
          ],
          aux: {
            lane: "ЛИНИЯ ПОДДОНОВ",
            tone: "air",
            inputs: [{ title: "Пустой поддон", sub: "Магазин поддонов" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Области применения линий паллетирования",
        items: [
          {
            title: "Паллетирование мешков",
            text: "Укладка заполненных мешков от фасовочной машины на поддоны. Разравнивание мешков и схема укладки определяют устойчивость слоёв.",
            imageAlt: "Робот укладывает заполненные мешки на поддон за ограждением (иллюстративное фото)",
            linkLabel: "Фасовка в открытые мешки",
          },
          {
            title: "Отгрузка удобрений",
            text: "Подготовка фасованных удобрений на поддонах к отгрузке. Размер поддона и масса мешка напрямую влияют на схему укладки.",
            imageAlt: "Мешки с органическим удобрением на поддонах",
            linkLabel: "Заводы удобрений и грануляции",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление линий паллетирования",
        intro:
          "PRO MAKINA проектирует линии паллетирования исходя из типа и размера упаковки, её массы, производительности, размера поддона и компоновки площадки. Подающие конвейеры, разравнивание и ориентация, магазин поддонов, паллетирующий узел, выход поддонов и ограждения разрабатываются совместно.",
        highlights: ["Паллетирующий узел под упаковку", "Схема укладки и устойчивость слоёв", "Магазин поддонов и выходные конвейеры", "Ограждения и безопасный доступ"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Тип упаковки", text: "Мешок, короб или иная тара; размер и поверхность." },
          { title: "Масса упаковки", text: "Масса единицы и общая нагрузка на поддон." },
          { title: "Размер поддона", text: "Тип и размер поддона, высота штабеля." },
          { title: "Схема укладки", text: "Раскладка слоёв и рецепты для разных продуктов." },
          { title: "Производительность и линия", text: "Производительность, конвейеры, обмотка плёнкой и автоматизация." },
        ],
        dataNote: "Производительность и тип паллетирующего узла определяются по данным упаковки и площадки; общие значения и марки роботов не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о линиях паллетирования",
        items: [
          {
            question: "Для чего нужна линия паллетирования?",
            answer: "Она укладывает заполненные упаковки от фасовочных и разливочных машин на поддоны по заданной схеме и готовит их к отгрузке.",
          },
          {
            question: "Паллетирование и упаковка — одно и то же?",
            answer: "Нет. Упаковка — это наполнение мешков или тары продуктом, а паллетирование — укладка заполненных упаковок на поддоны.",
          },
          {
            question: "Какой тип паллетирования выбирается?",
            answer: "Роботизированные, портальные или традиционные системы оцениваются по типу и массе упаковки, производительности и площади.",
          },
          {
            question: "Можно ли паллетировать разные упаковки на одной линии?",
            answer: "При подходящем паллетирующем узле и захвате для разных упаковок задаются отдельные схемы укладки.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Тип, размер и масса упаковки, требуемая производительность, размер поддона, высота штабеля и компоновка площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на линию паллетирования",
        text: "Сообщите тип и массу упаковки и размер поддона — вместе определим линию паллетирования.",
        mailSubject: "Запрос предложения: линия паллетирования",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Тип и размер упаковки", "Масса упаковки", "Требуемая производительность", "Размер поддона и высота штабеля", "Предпочтительная схема укладки", "Компоновка площадки и потребность в обмотке"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на линию паллетирования.",
          "",
          "Тип / размер упаковки:",
          "Масса упаковки (кг):",
          "Производительность (упаковок/ч):",
          "Размер поддона:",
          "Высота штабеля:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "خطوط الرص على المنصات | أنظمة رص الأكياس",
        description:
          "خطوط لرص الأكياس والكراتين المعبأة على المنصات بنمط محدد، مع تصميم نوع النظام ونمط الرص وترتيب النواقل وفق منتجك.",
      },
      breadcrumbLabel: "خطوط الرص على المنصات",
      h1: "خط الرص على المنصات – رص منظم للأكياس والكراتين",
      productCategory: "نظام رص على المنصات",
      overview: {
        imageAlt: "روبوت رص يضع الكراتين من الناقل على منصة بجوار وحدة التغليف بالغشاء المطاطي (صورة توضيحية)",
        imageBadge: "صورة توضيحية للعملية",
        tagline: "خط رص على المنصات",
        keyFacts: [
          { label: "المهمة", value: "رص العبوات المعبأة على المنصات" },
          { label: "نوع النظام", value: "روبوتي أو جسري أو تقليدي — حسب المشروع" },
          { label: "نمط الرص", value: "وصفة رص وفق العبوة والمنصة" },
          { label: "السلامة", value: "أسوار حماية ووصول متحكم به للمشغل" },
        ],
        title: "تجهيز العبوات المعبأة للشحن",
        paragraphs: [
          "يستقبل خط الرص العبوات المعبأة الخارجة من ماكينات التعبئة عبر الناقل، ويحاذيها ويوجهها، ثم يضعها طبقة فوق طبقة على المنصة وفق وصفة رص محددة، وتخرج المنصة الممتلئة من الخط إلى الخطوات التالية مثل التغليف بالغشاء أو التخزين.",
          "المكونات الأساسية هي نواقل تغذية العبوات ووحدة تسوية الأكياس وتوجيهها ومُلقِّم المنصات ووحدة الرص وناقل خروج المنصات الممتلئة، ويمكن أن تكون وحدة الرص روبوتية أو جسرية أو تقليدية بتكوين الطبقات، ويعتمد الاختيار على نوع العبوة ووزنها وسعة الخط والمساحة المتاحة.",
          "تُعد وصفة الرص وفق مقاس المنصة وأبعاد العبوة لضمان ثبات الطبقات، ويمكن تعريف عدة وصفات لمقاسات عبوات مختلفة.",
        ],
        note: "الرص على المنصات ليس هو التعبئة نفسها، بل ينظم العبوات الخارجة من أنظمة التعبئة على المنصات لأغراض اللوجستيات.",
      },
      process: {
        title: "تدفق العملية في خط الرص على المنصات",
        intro:
          "يوضح المخطط التدفق الذي تصل فيه العبوات المعبأة إلى الخط وتُحاذى وتُوجَّه، ثم يتكون نمط الرص وتُوضع العبوات على المنصة وتُنقل المنصة الممتلئة إلى العمليات التالية، بينما التعبئة والتغليف بالغشاء معدات منفصلة.",
        note: "تعتمد سعة الخط على وزن العبوة ووصفة الرص ونوع وحدة الرص، وتُحدَّد لكل مشروع.",
        mainLineLabel: "خط العبوات",
        productLine: [
          { title: "وصول العبوات", text: "تدخل الأكياس أو الكراتين المعبأة إلى الخط عبر ناقل التغذية." },
          { title: "المحاذاة والتوجيه", text: "تُسوّى الأكياس وتُدار العبوات وتُوجَّه وفق وصفة الرص." },
          { title: "تكوين النمط والوضع", text: "تضع وحدة الرص العبوات على المنصة طبقة فوق طبقة." },
          { title: "خروج المنصة الممتلئة", text: "تنتقل المنصة المكتملة عبر ناقل الخروج إلى التغليف أو التخزين." },
        ],
        auxLineLabel: "خط المنصات",
        auxLine: [{ title: "تغذية المنصات الفارغة", text: "تُزوَّد المنصات الفارغة من مُلقِّم المنصات إلى منطقة الرص." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في خط الرص على المنصات",
          svgDesc: "خط العبوات: وصول العبوات، المحاذاة، وحدة الرص، خروج المنصة الممتلئة والتغليف. خط المنصات: تغذية المنصات الفارغة.",
          mainLane: "خط العبوات",
          shape: "box",
          before: [
            { title: "وصول العبوات", sub: "من التعبئة" },
            { title: "المحاذاة", sub: "تسوية / توجيه" },
          ],
          drum: { title: "الرص على المنصات", sub: "النمط والوضع" },
          after: [
            { title: "منصة ممتلئة", sub: "ناقل الخروج" },
            { title: "التغليف بالغشاء", sub: "معدة منفصلة" },
          ],
          aux: {
            lane: "خط المنصات",
            tone: "air",
            inputs: [{ title: "منصة فارغة", sub: "مُلقِّم المنصات" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "مجالات استخدام خطوط الرص على المنصات",
        items: [
          {
            title: "رص الأكياس",
            text: "رص الأكياس المعبأة الخارجة من ماكينة التعبئة على المنصات، إذ تحدد تسوية الأكياس ووصفة الرص ثبات الطبقات.",
            imageAlt: "روبوت يرص أكياسًا معبأة على منصة داخل سور حماية (صورة توضيحية)",
            linkLabel: "تعبئة الأكياس مفتوحة الفوهة",
          },
          {
            title: "شحن الأسمدة",
            text: "تجهيز الأسمدة المعبأة على المنصات للشحن، ويؤثر مقاس المنصة ووزن الكيس مباشرة في وصفة الرص.",
            imageAlt: "أكياس سماد عضوي مرصوصة على منصات",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع خطوط الرص على المنصات",
        intro:
          "تصمم PRO MAKINA خطوط الرص وفق نوع العبوة ومقاسها ووزنها وسعة الخط ومقاس المنصة وتخطيط الموقع، مع تصميم نواقل التغذية وتسوية الأكياس وتوجيهها ومُلقِّم المنصات ووحدة الرص وخروج المنصات وترتيبات السلامة معًا.",
        highlights: ["وحدة رص مختارة وفق العبوة", "وصفة رص وثبات الطبقات", "مُلقِّم المنصات ونواقل الخروج", "أسوار حماية ووصول آمن"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "نوع العبوة", text: "كيس أو كرتون أو عبوة أخرى، ومقاسها وسطحها." },
          { title: "وزن العبوة", text: "وزن العبوة الواحدة والحمل الكلي لكل منصة." },
          { title: "مقاس المنصة", text: "نوع المنصة ومقاسها وارتفاع الرص." },
          { title: "نمط الرص", text: "ترتيب الطبقات ووصفات لمنتجات مختلفة." },
          { title: "السعة والخط", text: "سعة الخط وترتيب النواقل والتغليف بالغشاء والأتمتة." },
        ],
        dataNote: "تُحدَّد سعة الخط ونوع وحدة الرص من بيانات العبوة والموقع، ولا تُذكر في هذه الصفحة قيم عامة أو علامة تجارية لروبوت معين.",
      },
      faq: {
        title: "أسئلة شائعة حول خطوط الرص على المنصات",
        items: [
          {
            question: "ما وظيفة خط الرص على المنصات؟",
            answer: "يضع العبوات المعبأة الخارجة من ماكينات التعبئة على المنصات بنمط محدد ويجهزها للشحن.",
          },
          {
            question: "هل الرص على المنصات هو نفسه التعبئة؟",
            answer: "لا. التعبئة هي ملء المنتج في الأكياس أو العبوات، أما الرص فهو ترتيب العبوات المعبأة على المنصات.",
          },
          {
            question: "أي نوع من أنظمة الرص يُختار؟",
            answer: "تُقيَّم الأنظمة الروبوتية أو الجسرية أو التقليدية وفق نوع العبوة ووزنها وسعة الخط والمساحة المتاحة.",
          },
          {
            question: "هل يمكن رص عبوات بمقاسات مختلفة على الخط نفسه؟",
            answer: "مع وحدة رص وملقط مناسبين يمكن تعريف وصفات رص منفصلة لعبوات مختلفة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع العبوة ومقاسها ووزنها وسعة الخط المطلوبة ومقاس المنصة وارتفاع الرص وتخطيط الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لخط رص على المنصات",
        text: "شاركنا نوع العبوة ووزنها ومقاس المنصة، لنحدد معًا خط الرص المناسب.",
        mailSubject: "طلب عرض سعر: خط رص على المنصات",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع العبوة ومقاسها", "وزن العبوة", "سعة الخط المطلوبة", "مقاس المنصة وارتفاع الرص", "نمط الرص المفضل", "تخطيط الموقع والحاجة إلى التغليف"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لخط رص على المنصات.",
          "",
          "نوع العبوة / المقاس:",
          "وزن العبوة (كغ):",
          "سعة الخط (عبوة/ساعة):",
          "مقاس المنصة:",
          "ارتفاع الرص:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
