import type { DrumPageConfig } from "../types";

// Şişe etiketleme makinası: dolu ve kapaklı ambalaja etiket uygulanması (dolum makinesi değildir). Mevcut veride etiketleme
// tipi (tek yüz, çift yüz, çevresel) doğrulanmadığından tip belirtilmez; hız, pozisyon hassasiyeti veya şişe/dakika değeri
// ve "otomatik" iddiası kullanılmaz; kodlama/markalama entegrasyonu varsayılmaz. Ana görsel sividol2 (konveyörlü
// etiketleme makinesi); önceki sayfa big-bag dolum görselini (paket4) gösteriyordu. Görselin lisans kaydı yok.
export const bottleLabelingPage: DrumPageConfig = {
  key: "bottleLabeling",
  group: "packagingSystems",
  trSlug: "sise-etiketleme-makinasi",
  mainImage: "/images/sivi dolum/sividol2.jpg",
  applications: [
    { image: "/images/paket-uygulamalari/etiketli-kimyasal-bidon.webp", link: "chemicalProcess" },
    { image: "/images/sivi dolum/sividol1.jpg", link: "liquidFilling" },
  ],
  sectors: ["fertilizerPlants", "chemicalProcess"],
  resources: ["liquidFilling", "palletizingLines", "packagingSystems"],
  machines: ["packagingSystems", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Şişe Etiketleme Makinası | Şişe Etiketleme Sistemi | PRO MAKİNA",
        description:
          "Dolu ve kapaklı şişe ve ambalajlara etiket uygulayan şişe etiketleme makinası. Etiket tipi, konumu ve algılama düzeni ambalaj geometrisine göre seçilir.",
      },
      breadcrumbLabel: "Şişe Etiketleme Makinası",
      h1: "Şişe Etiketleme Makinası – Ambalaja Doğru Konumda Etiket Uygulama",
      productCategory: "Etiketleme Makinası",
      overview: {
        imageAlt: "Konveyörlü, dokunmatik kontrol panelli şişe etiketleme makinası",
        tagline: "Şişe Etiketleme",
        keyFacts: [
          { label: "Görev", value: "Ambalaja etiket uygulama" },
          { label: "Etiket", value: "Rulo etiket; tip ve ölçü ambalaja göre" },
          { label: "Algılama", value: "Ürün ve etiket sensörleri" },
          { label: "Entegrasyon", value: "Dolum ve kapaklama sonrası konveyör hattı" },
        ],
        title: "Dolu Ambalajlara Etiketin Doğru Konumda Uygulanması",
        paragraphs: [
          "Şişe etiketleme makinasında dolu ve kapaklı şişeler konveyörle etiketleme bölümüne gelir. Ürün sensörü şişeyi algılar, şişe yönlendirme elemanlarıyla konumlandırılır ve etiket uygulama başlığı rulodan ayrılan etiketi ambalajın belirlenen yüzeyine uygular.",
          "Etiketin doğru konumda ve kırışmadan uygulanması; şişe geometrisine, etiket ölçüsü ve malzemesine, konveyör hızıyla etiket besleme hızının senkronizasyonuna ve konumlandırma düzenine bağlıdır. Etiket pozisyonu farklı ambalajlar için ayarlanabilir.",
          "Makine, dolum ve kapaklama makinelerinden sonra aynı konveyör hattında çalışacak şekilde tasarlanır. Tek yüz, çift yüz veya çevresel etiketleme gibi uygulama tipi ve kodlama/markalama gibi ek işlevler ambalaj ve ürün ihtiyacına göre değerlendirilir.",
        ],
        note: "Etiketleme makinası ürünü doldurmaz; esas görevi dolu ambalajın üzerine etiketi doğru konumda uygulamaktır. Sıvının dolumu sıvı dolum makinasında yapılır.",
      },
      process: {
        title: "Şişe Etiketleme Proses Akışı",
        intro:
          "Şema, dolu ve kapaklı şişenin konveyörle geldiği, algılanıp konumlandırıldığı, etiketin uygulandığı, kontrol edildiği ve etiketlenmiş ürünün çıkışa ilerlediği akışı gösterir. Dolum ve kapaklama ayrı makinelerdir.",
        note: "Etiketleme hızı ve konum hassasiyeti; şişe geometrisine, etiket tipine ve hat hızına bağlıdır ve projeye göre belirlenir.",
        mainLineLabel: "Ambalaj hattı",
        productLine: [
          { title: "Şişenin gelişi", text: "Dolu ve kapaklı şişe konveyörle etiketleme bölümüne gelir." },
          { title: "Algılama ve konumlandırma", text: "Sensör şişeyi algılar, yönlendirme elemanları şişeyi konumlandırır." },
          { title: "Etiket uygulama", text: "Uygulama başlığı rulodan ayrılan etiketi ambalaja uygular." },
          { title: "Kontrol ve çıkış", text: "Etiketin varlığı ve konumu kontrol edilir, ürün kolileme veya paletlemeye ilerler." },
        ],
        flow: {
          svgTitle: "Şişe etiketleme proses akış şeması",
          svgDesc: "Ambalaj hattı: dolu ve kapaklı şişe, algılama ve konumlandırma, etiketleme makinası, kontrol ve çıkış.",
          mainLane: "AMBALAJ HATTI",
          shape: "box",
          before: [
            { title: "Dolu şişe", sub: "Dolum / kapaklama" },
            { title: "Algılama", sub: "Sensör / konumlama" },
          ],
          drum: { title: "ETİKETLEME", sub: "etiket uygulama" },
          after: [
            { title: "Kontrol", sub: "Varlık / konum" },
            { title: "Çıkış", sub: "Kolileme / paletleme" },
          ],
        },
      },
      applications: {
        title: "Şişe Etiketleme Uygulama Alanları",
        items: [
          {
            title: "Kimyasal Ürün Ambalajları",
            text: "Kimyasal ürünlerin plastik şişe ve bidonlarına ürün ve güvenlik etiketlerinin uygulanması. Etiket malzemesi ürünle temas ve dış ortam koşullarına göre seçilir.",
            imageAlt: "Tehlike etiketi uygulanmış plastik kimyasal bidonu",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Dolum Hattı Sonrası Etiketleme",
            text: "Sıvı gübre ve benzeri ürünlerde dolum ve kapaklama sonrasında şişelerin aynı hat üzerinde etiketlenmesi. Konveyör hızları iki makine arasında eşleştirilir.",
            imageAlt: "Sıvı dolum makinesinde dolum nozulları altındaki plastik şişeler",
            linkLabel: "Sıvı Dolum Şişeleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Şişe Etiketleme Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA şişe etiketleme makinalarını ambalaj tipi ve şişe geometrisi, etiket ölçüsü ve tipi, etiketin konumu ve hat hızına göre projelendirir. Konveyör, şişe yönlendirme, etiket uygulama başlığı, sensörler ve PLC/HMI kontrolü birlikte tasarlanır.",
        highlights: ["Şişe geometrisine göre konumlandırma", "Ayarlanabilir etiket pozisyonu", "Ürün ve etiket sensörleri", "Dolum ve kapaklama hattıyla senkronizasyon"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Şişe Geometrisi", text: "Ambalaj tipi, ölçüsü, şekli ve yüzey yapısı." },
          { title: "Etiket Tipi", text: "Etiket ölçüsü, malzemesi ve rulo özellikleri." },
          { title: "Etiket Konumu", text: "Uygulama yüzeyi ve pozisyon ayarı." },
          { title: "Hat Hızı", text: "Konveyör hızı ve önceki makinelerle senkronizasyon." },
          { title: "Sensörleme ve Kontrol", text: "Ürün ve etiket algılama, PLC/HMI ve etiket kontrolü." },
        ],
        dataNote: "Etiketleme hızı, pozisyon hassasiyeti ve kapasite ambalaj ve etiket verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Şişe Etiketleme Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Şişe etiketleme makinası nasıl çalışır?",
            answer: "Konveyörle gelen şişe sensörle algılanır ve konumlandırılır; uygulama başlığı rulodan ayrılan etiketi şişenin belirlenen yüzeyine uygular.",
          },
          {
            question: "Hangi etiketleme tipi seçilir?",
            answer: "Tek yüz, çift yüz veya çevresel etiketleme gibi tipler şişe geometrisine ve etiket tasarımına göre değerlendirilir.",
          },
          {
            question: "Farklı şişelerde kullanılabilir mi?",
            answer: "Yönlendirme elemanları ve etiket pozisyonu ayarlanarak farklı ölçülerde ambalajlarla çalışılabilir; uygunluk ambalaj numuneleriyle kontrol edilir.",
          },
          {
            question: "Sıvı dolum makinasından farkı nedir?",
            answer: "Sıvı dolum makinası ürünü ambalaja doldurur; etiketleme makinası dolu ve kapaklı ambalaja etiket uygular.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ambalaj tipi ve ölçüleri, etiket ölçüsü ve tipi, etiketin konumu, istenen hat hızı ve mevcut dolum hattı bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Şişe etiketleme makinası için teknik teklif alın",
        text: "Ambalajınız, etiketiniz ve hat hızınıza göre etiketleme makinasını birlikte netleştirelim.",
        mailSubject: "Şişe Etiketleme Makinası Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ambalaj tipi ve ölçüleri", "Etiket ölçüsü ve tipi", "Etiketin konumu (tek / çift yüz, çevresel)", "İstenen hat hızı", "Mevcut dolum ve kapaklama hattı", "Ambalaj ve etiket numunesi"],
        inquiryLines: [
          "Merhaba, şişe etiketleme makinası için teknik teklif almak istiyorum.",
          "",
          "Ambalaj tipi / ölçüsü:",
          "Etiket ölçüsü ve tipi:",
          "Etiket konumu:",
          "Hat hızı (ambalaj/saat):",
          "Mevcut hat bilgisi:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Bottle Labeling Machine | Bottle Labeling System",
        description:
          "Bottle labeling machines applying labels to filled and capped bottles and containers. Label type, position and sensing are selected for the container.",
      },
      breadcrumbLabel: "Bottle Labeling Machine",
      h1: "Bottle Labeling Machine – Applying Labels in the Right Position",
      productCategory: "Labeling Machine",
      overview: {
        imageAlt: "Bottle labeling machine with conveyor and touchscreen control panel",
        tagline: "Bottle Labeling",
        keyFacts: [
          { label: "Duty", value: "Applying labels to containers" },
          { label: "Label", value: "Roll labels; type and size per container" },
          { label: "Sensing", value: "Product and label sensors" },
          { label: "Integration", value: "Conveyor line after filling and capping" },
        ],
        title: "Applying Labels to Filled Containers in the Right Position",
        paragraphs: [
          "In a bottle labeling machine, filled and capped bottles arrive at the labeling section on a conveyor. A product sensor detects the bottle, guide elements position it, and the applicator applies the label peeled from the roll to the defined surface of the container.",
          "Applying the label in the right position without wrinkles depends on bottle geometry, label size and material, synchronisation between conveyor speed and label feed, and the positioning arrangement. Label position can be adjusted for different containers.",
          "The machine is designed to work on the same conveyor line after filling and capping machines. Application type such as front, front-and-back or wrap-around labeling, and additional functions such as coding/marking, are assessed according to container and product needs.",
        ],
        note: "A labeling machine does not fill the product; its main task is to apply the label to the filled container in the correct position. Liquid filling is done by the liquid filling machine.",
      },
      process: {
        title: "Bottle Labeling Process Flow",
        intro:
          "The diagram shows the flow in which the filled and capped bottle arrives on the conveyor, is detected and positioned, the label is applied and checked, and the labeled product moves to the outfeed. Filling and capping are separate machines.",
        note: "Labeling speed and position accuracy depend on bottle geometry, label type and line speed, and are defined per project.",
        mainLineLabel: "Container line",
        productLine: [
          { title: "Bottle infeed", text: "The filled and capped bottle arrives at the labeling section on the conveyor." },
          { title: "Detection and positioning", text: "A sensor detects the bottle and guide elements position it." },
          { title: "Label application", text: "The applicator applies the label peeled from the roll to the container." },
          { title: "Check and outfeed", text: "Label presence and position are checked; the product moves to case packing or palletizing." },
        ],
        flow: {
          svgTitle: "Bottle labeling process flow diagram",
          svgDesc: "Container line: filled and capped bottle, detection and positioning, labeling machine, check and outfeed.",
          mainLane: "CONTAINER LINE",
          shape: "box",
          before: [
            { title: "Filled bottle", sub: "Filling / capping" },
            { title: "Detection", sub: "Sensor / positioning" },
          ],
          drum: { title: "LABELING", sub: "label application" },
          after: [
            { title: "Check", sub: "Presence / position" },
            { title: "Outfeed", sub: "Case packing / pallet" },
          ],
        },
      },
      applications: {
        title: "Bottle Labeling Applications",
        items: [
          {
            title: "Chemical Product Containers",
            text: "Applying product and safety labels to plastic bottles and cans of chemical products. Label material is selected for product contact and ambient conditions.",
            imageAlt: "Plastic chemical container with an applied hazard label",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Labeling After the Filling Line",
            text: "Labeling bottles of liquid fertilizer and similar products on the same line after filling and capping. Conveyor speeds are matched between the machines.",
            imageAlt: "Plastic bottles under the nozzles of a liquid filling machine",
            linkLabel: "Liquid Filling & Bottling",
          },
        ],
      },
      design: {
        title: "Custom Bottle Labeling Design and Manufacturing",
        intro:
          "PRO MAKINA engineers bottle labeling machines around container type and bottle geometry, label size and type, label position and line speed. Conveyor, bottle guides, label applicator, sensors and PLC/HMI control are designed together.",
        highlights: ["Positioning for the bottle geometry", "Adjustable label position", "Product and label sensors", "Synchronisation with filling and capping"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Bottle Geometry", text: "Container type, size, shape and surface." },
          { title: "Label Type", text: "Label size, material and roll specifications." },
          { title: "Label Position", text: "Application surface and position adjustment." },
          { title: "Line Speed", text: "Conveyor speed and synchronisation with upstream machines." },
          { title: "Sensing and Control", text: "Product and label detection, PLC/HMI and label check." },
        ],
        dataNote: "Labeling speed, position accuracy and capacity are defined from container and label data; no generic values are stated on this page.",
      },
      faq: {
        title: "Bottle Labeling FAQ",
        items: [
          {
            question: "How does a bottle labeling machine work?",
            answer: "The bottle arriving on the conveyor is detected and positioned; the applicator applies the label peeled from the roll to the defined surface.",
          },
          {
            question: "Which labeling type is selected?",
            answer: "Types such as front, front-and-back or wrap-around labeling are assessed by bottle geometry and label design.",
          },
          {
            question: "Can it handle different bottles?",
            answer: "By adjusting guides and label position it can work with different container sizes; suitability is checked with container samples.",
          },
          {
            question: "How does it differ from a liquid filling machine?",
            answer: "A liquid filling machine fills the product into the container; a labeling machine applies the label to the filled and capped container.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Container type and dimensions, label size and type, label position, required line speed and existing filling line details.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a bottle labeling machine",
        text: "Share your container, label and line speed, and we will define the labeling machine together with you.",
        mailSubject: "Bottle Labeling Machine Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Container type and dimensions", "Label size and type", "Label position (front / back, wrap-around)", "Required line speed", "Existing filling and capping line", "Container and label samples"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a bottle labeling machine.",
          "",
          "Container type / size:",
          "Label size and type:",
          "Label position:",
          "Line speed (containers/h):",
          "Existing line:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Этикетировочная машина для бутылок | Этикетирование тары",
        description:
          "Этикетировочные машины для нанесения этикеток на заполненные и укупоренные бутылки и тару. Тип этикетки, положение и датчики — под геометрию тары.",
      },
      breadcrumbLabel: "Этикетировочная машина",
      h1: "Этикетировочная машина – нанесение этикетки в нужное положение",
      productCategory: "Этикетировочная машина",
      overview: {
        imageAlt: "Этикетировочная машина для бутылок с конвейером и сенсорной панелью управления",
        tagline: "Этикетирование бутылок",
        keyFacts: [
          { label: "Назначение", value: "Нанесение этикеток на тару" },
          { label: "Этикетка", value: "Рулонная; тип и размер по таре" },
          { label: "Датчики", value: "Датчики продукта и этикетки" },
          { label: "Интеграция", value: "Конвейерная линия после розлива и укупорки" },
        ],
        title: "Нанесение этикетки на заполненную тару в нужное положение",
        paragraphs: [
          "В этикетировочной машине заполненные и укупоренные бутылки поступают по конвейеру в зону этикетирования. Датчик обнаруживает бутылку, направляющие позиционируют её, а аппликатор наносит снятую с рулона этикетку на заданную поверхность тары.",
          "Точное и ровное нанесение зависит от геометрии бутылки, размера и материала этикетки, синхронизации скорости конвейера и подачи этикетки, а также схемы позиционирования. Положение этикетки регулируется под разную тару.",
          "Машина рассчитана на работу на одной конвейерной линии после розлива и укупорки. Тип нанесения — фронтальное, двустороннее или круговое — и доп. функции, такие как маркировка, оцениваются по таре и продукту.",
        ],
        note: "Этикетировочная машина не наполняет тару; её основная задача — нанести этикетку на заполненную тару в правильное положение. Розлив выполняет машина розлива.",
      },
      process: {
        title: "Технологическая схема этикетирования",
        intro:
          "Схема показывает поток: заполненная и укупоренная бутылка поступает по конвейеру, обнаруживается и позиционируется, этикетка наносится и проверяется, продукт уходит на выход. Розлив и укупорка — отдельные машины.",
        note: "Скорость и точность этикетирования зависят от геометрии бутылки, типа этикетки и скорости линии и определяются по проекту.",
        mainLineLabel: "Линия тары",
        productLine: [
          { title: "Поступление бутылки", text: "Заполненная и укупоренная бутылка поступает по конвейеру в зону этикетирования." },
          { title: "Обнаружение и позиционирование", text: "Датчик обнаруживает бутылку, направляющие её позиционируют." },
          { title: "Нанесение этикетки", text: "Аппликатор наносит снятую с рулона этикетку на тару." },
          { title: "Контроль и выход", text: "Проверяются наличие и положение этикетки; продукт уходит на упаковку или паллетирование." },
        ],
        flow: {
          svgTitle: "Технологическая схема этикетирования",
          svgDesc: "Линия тары: заполненная бутылка, обнаружение и позиционирование, этикетировочная машина, контроль и выход.",
          mainLane: "ЛИНИЯ ТАРЫ",
          shape: "box",
          before: [
            { title: "Бутылка", sub: "Розлив / укупорка" },
            { title: "Обнаружение", sub: "Датчик / позиция" },
          ],
          drum: { title: "ЭТИКЕТИРОВАНИЕ", sub: "нанесение этикетки" },
          after: [
            { title: "Контроль", sub: "Наличие / положение" },
            { title: "Выход", sub: "Упаковка / поддон" },
          ],
        },
      },
      applications: {
        title: "Области применения этикетировочных машин",
        items: [
          {
            title: "Тара химической продукции",
            text: "Нанесение товарных и предупреждающих этикеток на пластиковые бутылки и канистры химической продукции. Материал этикетки выбирается по контакту с продуктом и условиям среды.",
            imageAlt: "Пластиковая канистра с химикатом и нанесённой знаком опасности этикеткой",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Этикетирование после розлива",
            text: "Этикетирование бутылок с жидкими удобрениями и подобными продуктами на той же линии после розлива и укупорки. Скорости конвейеров согласуются между машинами.",
            imageAlt: "Пластиковые флаконы под дозирующими соплами машины розлива",
            linkLabel: "Розлив жидкостей",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление этикетировочных машин",
        intro:
          "PRO MAKINA проектирует этикетировочные машины исходя из типа тары и геометрии бутылки, размера и типа этикетки, её положения и скорости линии. Конвейер, направляющие, аппликатор, датчики и управление PLC/HMI разрабатываются совместно.",
        highlights: ["Позиционирование под геометрию бутылки", "Регулируемое положение этикетки", "Датчики продукта и этикетки", "Синхронизация с розливом и укупоркой"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Геометрия бутылки", text: "Тип, размер, форма и поверхность тары." },
          { title: "Тип этикетки", text: "Размер, материал и параметры рулона." },
          { title: "Положение этикетки", text: "Поверхность нанесения и регулировка." },
          { title: "Скорость линии", text: "Скорость конвейера и синхронизация с машинами." },
          { title: "Датчики и управление", text: "Обнаружение продукта и этикетки, PLC/HMI и контроль." },
        ],
        dataNote: "Скорость, точность положения и производительность определяются по данным тары и этикетки; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы об этикетировочных машинах",
        items: [
          {
            question: "Как работает этикетировочная машина?",
            answer: "Бутылка на конвейере обнаруживается и позиционируется; аппликатор наносит снятую с рулона этикетку на заданную поверхность.",
          },
          {
            question: "Какой тип этикетирования выбирается?",
            answer: "Фронтальное, двустороннее или круговое этикетирование оцениваются по геометрии бутылки и дизайну этикетки.",
          },
          {
            question: "Подходит ли машина для разной тары?",
            answer: "Регулировкой направляющих и положения этикетки машина может работать с тарой разных размеров; пригодность проверяется на образцах.",
          },
          {
            question: "Чем она отличается от машины розлива?",
            answer: "Машина розлива наполняет тару продуктом, а этикетировочная машина наносит этикетку на заполненную и укупоренную тару.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Тип и размеры тары, размер и тип этикетки, её положение, требуемая скорость линии и данные существующей линии розлива.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на этикетировочную машину",
        text: "Сообщите тару, этикетку и скорость линии — вместе определим этикетировочную машину.",
        mailSubject: "Запрос предложения: этикетировочная машина",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Тип и размеры тары", "Размер и тип этикетки", "Положение этикетки (фронт / оборот, круговое)", "Требуемая скорость линии", "Существующая линия розлива и укупорки", "Образцы тары и этикеток"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на этикетировочную машину.",
          "",
          "Тип / размер тары:",
          "Размер и тип этикетки:",
          "Положение этикетки:",
          "Скорость линии (единиц/ч):",
          "Существующая линия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "ماكينة وضع الملصقات على الزجاجات | نظام تلصيق الزجاجات",
        description:
          "ماكينات وضع الملصقات على الزجاجات والعبوات المعبأة والمغلقة، مع اختيار نوع الملصق وموضعه والاستشعار وفق شكل العبوة.",
      },
      breadcrumbLabel: "ماكينة وضع الملصقات",
      h1: "ماكينة وضع الملصقات على الزجاجات – تطبيق الملصق في الموضع الصحيح",
      productCategory: "ماكينة وضع ملصقات",
      overview: {
        imageAlt: "ماكينة وضع ملصقات على الزجاجات بناقل ولوحة تحكم تعمل باللمس",
        tagline: "وضع الملصقات على الزجاجات",
        keyFacts: [
          { label: "المهمة", value: "وضع الملصقات على العبوات" },
          { label: "الملصق", value: "ملصقات لفافة، النوع والمقاس وفق العبوة" },
          { label: "الاستشعار", value: "حساسات المنتج والملصق" },
          { label: "التكامل", value: "خط ناقل بعد التعبئة والإغلاق" },
        ],
        title: "تطبيق الملصق على العبوات المعبأة في الموضع الصحيح",
        paragraphs: [
          "في ماكينة وضع الملصقات تصل الزجاجات المعبأة والمغلقة على ناقل إلى قسم التلصيق، فيكتشف حساس المنتج الزجاجة وتضعها عناصر التوجيه في موضعها، ويطبق رأس التلصيق الملصق المنزوع من اللفافة على السطح المحدد للعبوة.",
          "يعتمد تطبيق الملصق في الموضع الصحيح ودون تجاعيد على شكل الزجاجة ومقاس الملصق ومادته والتزامن بين سرعة الناقل وتغذية الملصق وترتيب التموضع، ويمكن ضبط موضع الملصق لعبوات مختلفة.",
          "تُصمَّم الماكينة للعمل على خط الناقل نفسه بعد ماكينات التعبئة والإغلاق، ويُقيَّم نوع التطبيق مثل الوجه الواحد أو الوجهين أو الالتفافي والوظائف الإضافية مثل الترميز وفق احتياجات العبوة والمنتج.",
        ],
        note: "ماكينة وضع الملصقات لا تعبئ المنتج، ومهمتها الأساسية تطبيق الملصق على العبوة الممتلئة في الموضع الصحيح، أما تعبئة السائل فتتم في ماكينة تعبئة السوائل.",
      },
      process: {
        title: "تدفق العملية في وضع الملصقات على الزجاجات",
        intro:
          "يوضح المخطط التدفق الذي تصل فيه الزجاجة المعبأة والمغلقة على الناقل وتُكتشف وتُوضع في موضعها، ثم يُطبَّق الملصق ويُفحص ويتقدم المنتج الملصق إلى المخرج، بينما التعبئة والإغلاق ماكينتان منفصلتان.",
        note: "تعتمد سرعة التلصيق ودقة الموضع على شكل الزجاجة ونوع الملصق وسرعة الخط، وتُحدَّد لكل مشروع.",
        mainLineLabel: "خط العبوات",
        productLine: [
          { title: "وصول الزجاجة", text: "تصل الزجاجة المعبأة والمغلقة على الناقل إلى قسم التلصيق." },
          { title: "الاكتشاف والتموضع", text: "يكتشف الحساس الزجاجة وتضعها عناصر التوجيه في موضعها." },
          { title: "تطبيق الملصق", text: "يطبق رأس التلصيق الملصق المنزوع من اللفافة على العبوة." },
          { title: "الفحص والخروج", text: "يُفحص وجود الملصق وموضعه، ويتقدم المنتج إلى التعبئة في الكراتين أو الرص." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في وضع الملصقات على الزجاجات",
          svgDesc: "خط العبوات: زجاجة معبأة ومغلقة، الاكتشاف والتموضع، ماكينة الملصقات، الفحص والخروج.",
          mainLane: "خط العبوات",
          shape: "box",
          before: [
            { title: "زجاجة معبأة", sub: "تعبئة / إغلاق" },
            { title: "الاكتشاف", sub: "حساس / تموضع" },
          ],
          drum: { title: "وضع الملصقات", sub: "تطبيق الملصق" },
          after: [
            { title: "الفحص", sub: "الوجود / الموضع" },
            { title: "الخروج", sub: "كراتين / منصات" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام وضع الملصقات على الزجاجات",
        items: [
          {
            title: "عبوات المنتجات الكيميائية",
            text: "تطبيق ملصقات المنتج والسلامة على الزجاجات والجالونات البلاستيكية للمنتجات الكيميائية، مع اختيار مادة الملصق وفق التلامس مع المنتج والظروف المحيطة.",
            imageAlt: "جالون كيميائي بلاستيكي عليه ملصق تحذير",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
          {
            title: "التلصيق بعد خط التعبئة",
            text: "وضع الملصقات على زجاجات الأسمدة السائلة والمنتجات المشابهة على الخط نفسه بعد التعبئة والإغلاق، مع مطابقة سرعات النواقل بين الماكينات.",
            imageAlt: "عبوات بلاستيكية أسفل فوهات آلة تعبئة السوائل",
            linkLabel: "تعبئة السوائل والزجاجات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع ماكينات وضع الملصقات",
        intro:
          "تصمم PRO MAKINA ماكينات وضع الملصقات وفق نوع العبوة وشكل الزجاجة ومقاس الملصق ونوعه وموضعه وسرعة الخط، مع تصميم الناقل وموجهات الزجاجات ورأس التلصيق والحساسات والتحكم عبر PLC/HMI معًا.",
        highlights: ["تموضع وفق شكل الزجاجة", "موضع ملصق قابل للضبط", "حساسات المنتج والملصق", "تزامن مع التعبئة والإغلاق"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "شكل الزجاجة", text: "نوع العبوة ومقاسها وشكلها وسطحها." },
          { title: "نوع الملصق", text: "مقاس الملصق ومادته ومواصفات اللفافة." },
          { title: "موضع الملصق", text: "سطح التطبيق وضبط الموضع." },
          { title: "سرعة الخط", text: "سرعة الناقل والتزامن مع الماكينات السابقة." },
          { title: "الاستشعار والتحكم", text: "اكتشاف المنتج والملصق وPLC/HMI وفحص الملصق." },
        ],
        dataNote: "تُحدَّد سرعة التلصيق ودقة الموضع والسعة من بيانات العبوة والملصق، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول وضع الملصقات على الزجاجات",
        items: [
          {
            question: "كيف تعمل ماكينة وضع الملصقات؟",
            answer: "تُكتشف الزجاجة القادمة على الناقل وتُوضع في موضعها، ثم يطبق رأس التلصيق الملصق المنزوع من اللفافة على السطح المحدد.",
          },
          {
            question: "أي نوع تلصيق يُختار؟",
            answer: "تُقيَّم أنواع مثل الوجه الواحد أو الوجهين أو الالتفافي وفق شكل الزجاجة وتصميم الملصق.",
          },
          {
            question: "هل تعمل مع زجاجات مختلفة؟",
            answer: "بضبط الموجهات وموضع الملصق يمكنها العمل مع عبوات بمقاسات مختلفة، وتُفحص الملاءمة بعينات العبوات.",
          },
          {
            question: "ما الفرق بينها وبين ماكينة تعبئة السوائل؟",
            answer: "تملأ ماكينة التعبئة المنتج في العبوة، بينما تطبق ماكينة الملصقات الملصق على العبوة الممتلئة والمغلقة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع العبوة وأبعادها ومقاس الملصق ونوعه وموضعه وسرعة الخط المطلوبة وبيانات خط التعبئة الحالي.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لماكينة وضع الملصقات",
        text: "شاركنا العبوة والملصق وسرعة الخط، لنحدد معًا ماكينة وضع الملصقات المناسبة.",
        mailSubject: "طلب عرض سعر: ماكينة وضع ملصقات",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع العبوة وأبعادها", "مقاس الملصق ونوعه", "موضع الملصق (وجه / وجهان، التفافي)", "سرعة الخط المطلوبة", "خط التعبئة والإغلاق الحالي", "عينات العبوات والملصقات"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لماكينة وضع ملصقات على الزجاجات.",
          "",
          "نوع العبوة / المقاس:",
          "مقاس الملصق ونوعه:",
          "موضع الملصق:",
          "سرعة الخط (عبوة/ساعة):",
          "الخط الحالي:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
