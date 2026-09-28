import type { DrumPageConfig } from "../types";

// Sıvı dolum / şişeleme: sıvı ürünlerin şişe ve bidonlara kontrollü dolumu. Mevcut veride dolum prensibi (volumetrik,
// debimetreli, tartımlı, pistonlu, yerçekimli) doğrulanmadığından yöntem ürüne göre seçilen seçenek olarak anlatılır;
// CIP özelliği, dolum hızı veya hassasiyet değeri verilmez. Ana görsel sividol1 (çok nozullu dolum makinesi); önceki sayfa
// etiketleme makinesi görselini (sividol2) gösteriyordu. Görsellerin lisans kaydı yok.
const tank = (file: string) => `/images/tank-uygulamalari/${file}`;

export const liquidFillingPage: DrumPageConfig = {
  key: "liquidFilling",
  group: "packagingSystems",
  trSlug: "sivi-dolum-siseleme",
  mainImage: "/images/sivi dolum/sividol1.jpg",
  applications: [
    { image: tank("sivi-potasyum-humat.webp"), link: "fertilizerPlants" },
    { image: tank("sodyum-hidroksit.webp"), link: "chemicalProcess" },
    { image: "/images/reaktor-tank/sivi22.jpg", link: "storageTank" },
  ],
  sectors: ["fertilizerPlants", "chemicalProcess"],
  resources: ["bottleLabeling", "storageTank", "agitatedReactor", "packagingSystems"],
  machines: ["packagingSystems", "reactorsTanks"],
  texts: {
    tr: {
      meta: {
        title: "Sıvı Dolum Makinası | Sıvı Gübre Dolum ve Şişeleme Hattı | PRO MAKİNA",
        description:
          "Sıvı gübre ve uygun sıvı ürünler için sıvı dolum ve şişeleme makinası. Dolum yöntemi, nozul ve ürünle temas eden malzemeler sıvının özelliklerine göre seçilir.",
      },
      breadcrumbLabel: "Sıvı Dolum Şişeleme",
      h1: "Sıvı Dolum ve Şişeleme Makinası – Şişe ve Bidonlara Kontrollü Dolum",
      productCategory: "Sıvı Dolum Makinası",
      overview: {
        imageAlt: "Konveyör üzerindeki plastik şişelerin üzerinde pnömatik valfli çok nozullu dolum başlığı",
        tagline: "Sıvı Dolum ve Şişeleme",
        keyFacts: [
          { label: "Ambalaj", value: "Şişe ve bidon — geometriye göre" },
          { label: "Dolum yöntemi", value: "Sıvının özelliklerine göre seçilir" },
          { label: "Nozul", value: "Nozul sayısı ve tipi hat ihtiyacına göre" },
          { label: "Malzeme", value: "Ürünle temas eden parçalar kimyasal uyuma göre" },
        ],
        title: "Sıvı Ürünlerin Şişe ve Bidonlara Kontrollü Dolumu",
        paragraphs: [
          "Sıvı dolum makinasında boş şişe veya bidonlar konveyörle dolum istasyonuna gelir, algılanıp nozulların altında konumlandırılır ve sıvı ürün kontrollü şekilde doldurulur. Dolu ambalajlar konveyörle kapaklama ve etiketleme makinelerine ilerler.",
          "Dolum yöntemi sıvının yoğunluğu, viskozitesi, köpürme eğilimi ve istenen dolum doğruluğuna göre seçilir. Volumetrik, debimetreli, tartımlı veya pistonlu dolum gibi yöntemler proje verisine göre değerlendirilir. Köpüren ürünlerde nozul tipi ve dolum hızı, damlama eğilimi olan ürünlerde nozul kapatma düzeni önem kazanır.",
          "Ürünle temas eden pompa, valf, hortum ve contaların malzemesi sıvının kimyasal özelliklerine göre seçilir. Aşındırıcı veya korozif sıvılarda bu seçim makinenin ömrünü doğrudan etkiler.",
        ],
        note: "Her sıvı aynı pompa, conta veya malzemeyle doldurulamaz. Kimyasal uyumluluk ve viskozite makine seçiminde belirleyicidir; ürün numunesiyle değerlendirme önerilir.",
      },
      process: {
        title: "Sıvı Dolum Proses Akışı",
        intro:
          "Şema, boş ambalajın beslendiği, şişenin konumlandırıldığı, sıvı ürünün kontrollü doldurulduğu ve dolu ambalajın kapaklama ve etiketleme hattına aktarıldığı akışı gösterir. Kapaklama ve etiketleme ayrı makinelerdir.",
        note: "Dolum hızı ve doğruluğu; sıvının özellikleri, ambalaj hacmi, nozul sayısı ve dolum yöntemine bağlıdır ve projeye göre belirlenir.",
        mainLineLabel: "Ambalaj hattı",
        productLine: [
          { title: "Boş ambalaj besleme", text: "Boş şişe veya bidonlar konveyörle dolum istasyonuna gelir." },
          { title: "Konumlandırma", text: "Ambalajlar algılanır ve nozulların altında durdurulur." },
          { title: "Kontrollü dolum", text: "Sıvı ürün seçilen dolum yöntemiyle hedef miktarda doldurulur." },
          { title: "Transfer", text: "Dolu ambalajlar kapaklama ve etiketleme makinelerine ilerler." },
        ],
        auxLineLabel: "Ürün hattı",
        auxLine: [{ title: "Ürün beslemesi", text: "Sıvı ürün stok tankından pompa veya cazibe ile dolum başlığına beslenir." }],
        flow: {
          svgTitle: "Sıvı dolum proses akış şeması",
          svgDesc: "Ambalaj hattı: boş ambalaj besleme, konumlandırma, sıvı dolum makinası, kapaklama ve etiketleme. Ürün hattı: stok tankından ürün beslemesi.",
          mainLane: "AMBALAJ HATTI",
          shape: "box",
          before: [
            { title: "Boş ambalaj", sub: "Konveyör" },
            { title: "Konumlandırma", sub: "Algılama / durdurma" },
          ],
          drum: { title: "SIVI DOLUM", sub: "nozullarla dolum" },
          after: [
            { title: "Kapaklama", sub: "Ayrı makine" },
            { title: "Etiketleme", sub: "Ayrı makine" },
          ],
          aux: {
            lane: "ÜRÜN HATTI",
            tone: "liquid",
            inputs: [{ title: "Ürün beslemesi", sub: "Stok tankı / pompa" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Sıvı Dolum Uygulama Alanları",
        items: [
          {
            title: "Sıvı Gübre ve Humik Ürünler",
            text: "Sıvı NPK, humik ve fulvik ürünlerin şişe ve bidonlara dolumu. Viskozite ve köpürme eğilimi nozul tipini ve dolum yöntemini belirler.",
            imageAlt: "Su dolu beherde çözünerek dağılan koyu renkli sıvı potasyum humat",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Endüstriyel Kimyasallar",
            text: "Uygun endüstriyel kimyasalların ambalajlanması. Ürünle temas eden pompa, valf ve contaların kimyasal uyumu ile operatör güvenliği birlikte değerlendirilir.",
            imageAlt: "Saat camı üzerinde beyaz sodyum hidroksit peletleri",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Bidon Dolumu",
            text: "Stok tankından beslenen sıvı ürünlerin bidonlara doldurulması. Bidon geometrisi ve ağız çapı nozul yerleşimini ve konumlandırmayı etkiler.",
            imageAlt: "Dolum makinesinde bidonlara sıvı ürün dolumu",
            linkLabel: "Stok Tankları",
          },
        ],
      },
      design: {
        title: "Projeye Özel Sıvı Dolum Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA sıvı dolum sistemlerini dolumu yapılacak sıvının yoğunluğu, viskozitesi, köpürme eğilimi ve kimyasal özellikleri ile ambalaj hacmi ve geometrisine göre projelendirir. Dolum yöntemi, nozullar, ürünle temas eden malzemeler, konveyör ve algılama ile PLC/HMI otomasyonu birlikte tasarlanır.",
        highlights: ["Sıvıya göre dolum yöntemi", "Damlatma kontrollü nozullar", "Kimyasal uyumlu temas malzemeleri", "Kapaklama ve etiketleme entegrasyonu"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Sıvı Özellikleri", text: "Yoğunluk, köpürme eğilimi ve kimyasal özellikler." },
          { title: "Viskozite", text: "Akış davranışı ve dolum sıcaklığı." },
          { title: "Ambalaj Hacmi", text: "Şişe veya bidon hacmi, geometrisi ve ağız çapı." },
          { title: "Dolum Prensibi", text: "Volumetrik, debimetreli, tartımlı veya pistonlu seçenekler." },
          { title: "Malzeme Uyumu ve Otomasyon", text: "Temas eden malzemeler, algılama, PLC/HMI ve hat entegrasyonu." },
        ],
        dataNote: "Dolum hızı, doğruluğu ve nozul sayısı sıvı ve ambalaj verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Sıvı Dolum Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Sıvı dolum makinası nasıl çalışır?",
            answer: "Boş ambalajlar konveyörle gelir, nozulların altında konumlandırılır ve sıvı seçilen yöntemle doldurulur; dolu ambalajlar kapaklama ve etiketlemeye ilerler.",
          },
          {
            question: "Hangi dolum yöntemi kullanılır?",
            answer: "Sıvının viskozitesi, köpürme eğilimi ve istenen doğruluğa göre volumetrik, debimetreli, tartımlı veya pistonlu yöntemler değerlendirilir.",
          },
          {
            question: "Her sıvı aynı makineyle doldurulabilir mi?",
            answer: "Hayır. Kimyasal uyumluluk ve viskozite pompa, valf ve conta seçimini belirler; korozif ürünlerde malzeme seçimi ayrıca yapılır.",
          },
          {
            question: "Etiketleme makinesinden farkı nedir?",
            answer: "Sıvı dolum makinesi ürünü ambalaja doldurur. Etiketleme makinesi ise dolu ve kapaklı ambalaja etiket uygular; ikisi aynı hatta ardışık çalışabilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Sıvının türü, yoğunluğu, viskozitesi ve kimyasal özellikleri, ambalaj tipi ve hacmi ile istenen hat kapasitesi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Sıvı dolum sistemi için teknik teklif alın",
        text: "Sıvınız, ambalajınız ve hat kapasitenize göre dolum sistemini birlikte netleştirelim.",
        mailSubject: "Sıvı Dolum Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Sıvının türü ve kimyasal özellikleri", "Yoğunluk ve viskozite", "Köpürme eğilimi", "Ambalaj tipi ve hacmi", "İstenen hat kapasitesi", "Kapaklama ve etiketleme ihtiyacı"],
        inquiryLines: [
          "Merhaba, sıvı dolum sistemi için teknik teklif almak istiyorum.",
          "",
          "Sıvı ürün:",
          "Yoğunluk / viskozite:",
          "Ambalaj tipi ve hacmi:",
          "Hat kapasitesi (ambalaj/saat):",
          "Kapaklama / etiketleme:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Liquid Filling & Bottling System | Liquid Fertilizer Filling",
        description:
          "Liquid filling and bottling machines for liquid fertilizer and suitable liquids. Filling method, nozzles and wetted materials are selected for the liquid.",
      },
      breadcrumbLabel: "Liquid Filling & Bottling",
      h1: "Liquid Filling & Bottling System – Controlled Filling of Bottles and Cans",
      productCategory: "Liquid Filling Machine",
      overview: {
        imageAlt: "Multi-nozzle filling head with pneumatic valves above plastic bottles on a conveyor",
        tagline: "Liquid Filling & Bottling",
        keyFacts: [
          { label: "Packaging", value: "Bottles and cans — by geometry" },
          { label: "Filling method", value: "Selected for the liquid's properties" },
          { label: "Nozzles", value: "Number and type per line requirement" },
          { label: "Materials", value: "Wetted parts per chemical compatibility" },
        ],
        title: "Controlled Filling of Liquids into Bottles and Cans",
        paragraphs: [
          "In a liquid filling machine, empty bottles or cans arrive at the filling station on a conveyor, are detected and positioned under the nozzles, and the liquid is filled in a controlled way. Filled containers move on to capping and labeling machines.",
          "The filling method is selected for the liquid's density, viscosity, foaming tendency and required filling accuracy. Methods such as volumetric, flowmeter, weighing or piston filling are assessed from project data. For foaming products, nozzle type and filling speed matter; for dripping products, the nozzle shut-off arrangement.",
          "The material of wetted pumps, valves, hoses and seals is selected for the chemical properties of the liquid. For abrasive or corrosive liquids, this choice directly affects machine life.",
        ],
        note: "Not every liquid can be filled with the same pump, seal or material. Chemical compatibility and viscosity are decisive; evaluation with a product sample is recommended.",
      },
      process: {
        title: "Liquid Filling Process Flow",
        intro:
          "The diagram shows the flow in which empty containers are fed, bottles are positioned, liquid is filled in a controlled way and filled containers are transferred to the capping and labeling line. Capping and labeling are separate machines.",
        note: "Filling speed and accuracy depend on liquid properties, container volume, number of nozzles and filling method, and are defined per project.",
        mainLineLabel: "Container line",
        productLine: [
          { title: "Empty container feed", text: "Empty bottles or cans arrive at the filling station on a conveyor." },
          { title: "Positioning", text: "Containers are detected and stopped under the nozzles." },
          { title: "Controlled filling", text: "Liquid is filled to the target quantity with the selected method." },
          { title: "Transfer", text: "Filled containers move on to capping and labeling machines." },
        ],
        auxLineLabel: "Product line",
        auxLine: [{ title: "Product supply", text: "Liquid is fed from the storage tank to the filling head by pump or gravity." }],
        flow: {
          svgTitle: "Liquid filling process flow diagram",
          svgDesc: "Container line: empty container feed, positioning, liquid filling machine, capping and labeling. Product line: supply from the storage tank.",
          mainLane: "CONTAINER LINE",
          shape: "box",
          before: [
            { title: "Empty containers", sub: "Conveyor" },
            { title: "Positioning", sub: "Detection / stop" },
          ],
          drum: { title: "LIQUID FILLING", sub: "filling via nozzles" },
          after: [
            { title: "Capping", sub: "Separate machine" },
            { title: "Labeling", sub: "Separate machine" },
          ],
          aux: {
            lane: "PRODUCT LINE",
            tone: "liquid",
            inputs: [{ title: "Product supply", sub: "Storage tank / pump" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Liquid Filling Applications",
        items: [
          {
            title: "Liquid Fertilizers and Humic Products",
            text: "Filling liquid NPK, humic and fulvic products into bottles and cans. Viscosity and foaming determine nozzle type and filling method.",
            imageAlt: "Dark liquid potassium humate dispersing in a beaker of water",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Industrial Chemicals",
            text: "Packaging suitable industrial chemicals. Chemical compatibility of wetted pumps, valves and seals is assessed together with operator safety.",
            imageAlt: "White sodium hydroxide pellets on a watch glass",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Can Filling",
            text: "Filling liquids supplied from a storage tank into cans. Can geometry and neck diameter affect nozzle layout and positioning.",
            imageAlt: "Liquid product being filled into jerry cans on a filling machine",
            linkLabel: "Storage Tank",
          },
        ],
      },
      design: {
        title: "Custom Liquid Filling Design and Manufacturing",
        intro:
          "PRO MAKINA engineers liquid filling systems around the density, viscosity, foaming tendency and chemical properties of the liquid, and the container volume and geometry. Filling method, nozzles, wetted materials, conveyor and detection, and PLC/HMI automation are designed together.",
        highlights: ["Filling method matched to the liquid", "Drip-controlled nozzles", "Chemically compatible wetted materials", "Capping and labeling integration"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Liquid Properties", text: "Density, foaming tendency and chemical properties." },
          { title: "Viscosity", text: "Flow behaviour and filling temperature." },
          { title: "Container Volume", text: "Bottle or can volume, geometry and neck diameter." },
          { title: "Filling Principle", text: "Volumetric, flowmeter, weighing or piston options." },
          { title: "Material Compatibility and Automation", text: "Wetted materials, detection, PLC/HMI and line integration." },
        ],
        dataNote: "Filling speed, accuracy and number of nozzles are defined from liquid and container data; no generic values are stated on this page.",
      },
      faq: {
        title: "Liquid Filling FAQ",
        items: [
          {
            question: "How does a liquid filling machine work?",
            answer: "Empty containers arrive on a conveyor, are positioned under the nozzles and filled with the selected method; filled containers move on to capping and labeling.",
          },
          {
            question: "Which filling method is used?",
            answer: "Volumetric, flowmeter, weighing or piston methods are assessed by viscosity, foaming tendency and required accuracy.",
          },
          {
            question: "Can every liquid be filled with the same machine?",
            answer: "No. Chemical compatibility and viscosity determine pump, valve and seal selection; materials are selected separately for corrosive products.",
          },
          {
            question: "How does it differ from a labeling machine?",
            answer: "A liquid filling machine fills product into containers. A labeling machine applies labels to filled and capped containers; both can run in sequence on the same line.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Liquid type, density, viscosity and chemical properties, container type and volume, and required line capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a liquid filling system",
        text: "Share your liquid, container and line capacity, and we will define the filling system together with you.",
        mailSubject: "Liquid Filling Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Liquid type and chemical properties", "Density and viscosity", "Foaming tendency", "Container type and volume", "Required line capacity", "Capping and labeling needs"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a liquid filling system.",
          "",
          "Liquid product:",
          "Density / viscosity:",
          "Container type and volume:",
          "Line capacity (containers/h):",
          "Capping / labeling:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Машина розлива жидкостей | Розлив жидких удобрений",
        description:
          "Машины розлива и бутилирования жидких удобрений и подходящих жидкостей. Способ дозирования, сопла и контактирующие материалы — под свойства жидкости.",
      },
      breadcrumbLabel: "Розлив жидкостей",
      h1: "Машина розлива жидкостей – контролируемое наполнение бутылок и канистр",
      productCategory: "Машина розлива",
      overview: {
        imageAlt: "Многосопловая разливочная головка с пневмоклапанами над пластиковыми бутылками на конвейере",
        tagline: "Розлив и бутилирование",
        keyFacts: [
          { label: "Тара", value: "Бутылки и канистры — по геометрии" },
          { label: "Способ дозирования", value: "Выбирается по свойствам жидкости" },
          { label: "Сопла", value: "Число и тип по требованиям линии" },
          { label: "Материалы", value: "Контактирующие детали по химической совместимости" },
        ],
        title: "Контролируемый розлив жидкостей в бутылки и канистры",
        paragraphs: [
          "В машине розлива пустые бутылки или канистры поступают по конвейеру к станции наполнения, обнаруживаются и позиционируются под соплами, после чего жидкость дозируется. Заполненная тара уходит на укупорку и этикетирование.",
          "Способ дозирования выбирается по плотности, вязкости, пенообразованию и требуемой точности. Объёмный, расходомерный, весовой или поршневой розлив оцениваются по данным проекта. Для пенящихся продуктов важны тип сопла и скорость налива, для капающих — система отсечки.",
          "Материал контактирующих насосов, клапанов, шлангов и уплотнений выбирается по химическим свойствам жидкости; для абразивных и коррозионных жидкостей этот выбор напрямую влияет на ресурс машины.",
        ],
        note: "Не каждую жидкость можно разливать одним и тем же насосом, уплотнением или материалом. Химическая совместимость и вязкость определяющие; рекомендуется оценка на образце продукта.",
      },
      process: {
        title: "Технологическая схема розлива жидкостей",
        intro:
          "Схема показывает поток: подача пустой тары, позиционирование бутылки, контролируемый налив и передача заполненной тары на укупорку и этикетирование. Укупорка и этикетирование — отдельные машины.",
        note: "Скорость и точность розлива зависят от свойств жидкости, объёма тары, числа сопел и способа дозирования и определяются по проекту.",
        mainLineLabel: "Линия тары",
        productLine: [
          { title: "Подача пустой тары", text: "Пустые бутылки или канистры поступают по конвейеру к станции." },
          { title: "Позиционирование", text: "Тара обнаруживается и останавливается под соплами." },
          { title: "Контролируемый налив", text: "Жидкость наливается до заданного объёма выбранным способом." },
          { title: "Передача", text: "Заполненная тара уходит на укупорку и этикетирование." },
        ],
        auxLineLabel: "Линия продукта",
        auxLine: [{ title: "Подача продукта", text: "Жидкость подаётся из ёмкости хранения к головке насосом или самотёком." }],
        flow: {
          svgTitle: "Технологическая схема розлива жидкостей",
          svgDesc: "Линия тары: подача, позиционирование, машина розлива, укупорка и этикетирование. Линия продукта: подача из ёмкости хранения.",
          mainLane: "ЛИНИЯ ТАРЫ",
          shape: "box",
          before: [
            { title: "Пустая тара", sub: "Конвейер" },
            { title: "Позиционирование", sub: "Датчик / остановка" },
          ],
          drum: { title: "РОЗЛИВ", sub: "налив через сопла" },
          after: [
            { title: "Укупорка", sub: "Отдельная машина" },
            { title: "Этикетирование", sub: "Отдельная машина" },
          ],
          aux: {
            lane: "ЛИНИЯ ПРОДУКТА",
            tone: "liquid",
            inputs: [{ title: "Подача продукта", sub: "Ёмкость / насос" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "Области применения машин розлива",
        items: [
          {
            title: "Жидкие удобрения и гуматы",
            text: "Розлив жидких NPK, гуминовых и фульвовых продуктов в бутылки и канистры. Вязкость и пенообразование определяют тип сопла и способ налива.",
            imageAlt: "Тёмный жидкий гумат калия, растворяющийся в стакане с водой",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Промышленная химия",
            text: "Фасовка подходящих промышленных химикатов. Химическая совместимость насосов, клапанов и уплотнений рассматривается вместе с безопасностью оператора.",
            imageAlt: "Белые гранулы гидроксида натрия на часовом стекле",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Розлив в канистры",
            text: "Розлив жидкостей из ёмкости хранения в канистры. Геометрия канистры и диаметр горловины влияют на расположение сопел и позиционирование.",
            imageAlt: "Розлив жидкого продукта в канистры на разливочной машине",
            linkLabel: "Ёмкость хранения",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление машин розлива",
        intro:
          "PRO MAKINA проектирует системы розлива исходя из плотности, вязкости, пенообразования и химических свойств жидкости, объёма и геометрии тары. Способ дозирования, сопла, контактирующие материалы, конвейер и датчики, автоматизация PLC/HMI разрабатываются совместно.",
        highlights: ["Способ дозирования под жидкость", "Сопла с защитой от капель", "Химически совместимые материалы", "Интеграция укупорки и этикетирования"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Свойства жидкости", text: "Плотность, пенообразование и химические свойства." },
          { title: "Вязкость", text: "Реология и температура розлива." },
          { title: "Объём тары", text: "Объём, геометрия и диаметр горловины бутылки или канистры." },
          { title: "Принцип дозирования", text: "Объёмный, расходомерный, весовой или поршневой." },
          { title: "Совместимость и автоматизация", text: "Контактирующие материалы, датчики, PLC/HMI и интеграция в линию." },
        ],
        dataNote: "Скорость, точность и число сопел определяются по данным жидкости и тары; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о розливе жидкостей",
        items: [
          {
            question: "Как работает машина розлива?",
            answer: "Пустая тара поступает по конвейеру, позиционируется под соплами и наполняется выбранным способом; заполненная тара уходит на укупорку и этикетирование.",
          },
          {
            question: "Какой способ дозирования применяется?",
            answer: "Объёмный, расходомерный, весовой или поршневой способ оцениваются по вязкости, пенообразованию и требуемой точности.",
          },
          {
            question: "Можно ли разливать любую жидкость одной машиной?",
            answer: "Нет. Химическая совместимость и вязкость определяют выбор насоса, клапанов и уплотнений; для коррозионных продуктов материалы подбираются отдельно.",
          },
          {
            question: "Чем она отличается от этикетировочной машины?",
            answer: "Машина розлива наполняет тару продуктом, а этикетировочная машина наносит этикетку на заполненную и укупоренную тару; они могут работать последовательно.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид жидкости, плотность, вязкость и химические свойства, тип и объём тары и требуемая производительность линии.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на систему розлива",
        text: "Сообщите жидкость, тару и производительность — вместе определим систему розлива.",
        mailSubject: "Запрос предложения: розлив жидкостей",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид жидкости и химические свойства", "Плотность и вязкость", "Пенообразование", "Тип и объём тары", "Требуемая производительность", "Потребность в укупорке и этикетировании"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на систему розлива.",
          "",
          "Жидкий продукт:",
          "Плотность / вязкость:",
          "Тип и объём тары:",
          "Производительность (единиц/ч):",
          "Укупорка / этикетирование:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نظام تعبئة السوائل والتعبئة في الزجاجات | تعبئة الأسمدة السائلة",
        description:
          "ماكينات تعبئة السوائل في الزجاجات للأسمدة السائلة والسوائل المناسبة، مع اختيار طريقة التعبئة والفوهات والمواد الملامسة وفق خصائص السائل.",
      },
      breadcrumbLabel: "تعبئة السوائل والزجاجات",
      h1: "نظام تعبئة السوائل والزجاجات – تعبئة متحكم بها للزجاجات والعبوات",
      productCategory: "ماكينة تعبئة سوائل",
      overview: {
        imageAlt: "رأس تعبئة متعدد الفوهات بصمامات هوائية فوق زجاجات بلاستيكية على ناقل",
        tagline: "تعبئة السوائل والزجاجات",
        keyFacts: [
          { label: "العبوة", value: "زجاجات وجالونات — حسب الشكل" },
          { label: "طريقة التعبئة", value: "تُختار وفق خصائص السائل" },
          { label: "الفوهات", value: "العدد والنوع وفق احتياج الخط" },
          { label: "المواد", value: "الأجزاء الملامسة وفق التوافق الكيميائي" },
        ],
        title: "تعبئة متحكم بها للسوائل في الزجاجات والجالونات",
        paragraphs: [
          "في ماكينة تعبئة السوائل تصل الزجاجات أو الجالونات الفارغة على ناقل إلى محطة التعبئة، وتُكتشف وتُوضع تحت الفوهات، ثم يُعبأ السائل بشكل متحكم به، وتتحرك العبوات الممتلئة إلى ماكينات الإغلاق ووضع الملصقات.",
          "تُختار طريقة التعبئة وفق كثافة السائل ولزوجته وميله للرغوة ودقة التعبئة المطلوبة، وتُقيَّم طرق مثل التعبئة الحجمية أو بمقياس التدفق أو بالوزن أو بالمكبس من بيانات المشروع، ويهم نوع الفوهة وسرعة التعبئة للمنتجات الرغوية ونظام إغلاق الفوهة للمنتجات المعرضة للتقطير.",
          "تُختار مادة المضخات والصمامات والخراطيم والحشوات الملامسة وفق الخصائص الكيميائية للسائل، ويؤثر هذا الاختيار مباشرة في عمر الماكينة مع السوائل الكاشطة أو المسببة للتآكل.",
        ],
        note: "لا يمكن تعبئة كل السوائل بالمضخة أو الحشوة أو المادة نفسها؛ فالتوافق الكيميائي واللزوجة عاملان حاسمان، ويُوصى بالتقييم على عينة من المنتج.",
      },
      process: {
        title: "تدفق العملية في تعبئة السوائل",
        intro:
          "يوضح المخطط التدفق الذي تُغذّى فيه العبوات الفارغة وتُوضع الزجاجة ويُعبأ السائل بشكل متحكم به ثم تُنقل العبوة الممتلئة إلى خط الإغلاق ووضع الملصقات، وهما ماكينتان منفصلتان.",
        note: "تعتمد سرعة التعبئة ودقتها على خصائص السائل وحجم العبوة وعدد الفوهات وطريقة التعبئة، وتُحدَّد لكل مشروع.",
        mainLineLabel: "خط العبوات",
        productLine: [
          { title: "تغذية العبوات الفارغة", text: "تصل الزجاجات أو الجالونات الفارغة على ناقل إلى محطة التعبئة." },
          { title: "التموضع", text: "تُكتشف العبوات وتتوقف تحت الفوهات." },
          { title: "تعبئة متحكم بها", text: "يُعبأ السائل بالكمية المستهدفة بالطريقة المختارة." },
          { title: "النقل", text: "تتحرك العبوات الممتلئة إلى ماكينات الإغلاق ووضع الملصقات." },
        ],
        auxLineLabel: "خط المنتج",
        auxLine: [{ title: "تغذية المنتج", text: "يُغذّى السائل من خزان التخزين إلى رأس التعبئة بمضخة أو بالجاذبية." }],
        flow: {
          svgTitle: "مخطط تدفق العملية في تعبئة السوائل",
          svgDesc: "خط العبوات: تغذية العبوات الفارغة، التموضع، ماكينة التعبئة، الإغلاق ووضع الملصقات. خط المنتج: التغذية من خزان التخزين.",
          mainLane: "خط العبوات",
          shape: "box",
          before: [
            { title: "عبوات فارغة", sub: "ناقل" },
            { title: "التموضع", sub: "اكتشاف / توقف" },
          ],
          drum: { title: "تعبئة السوائل", sub: "تعبئة عبر الفوهات" },
          after: [
            { title: "الإغلاق", sub: "ماكينة منفصلة" },
            { title: "الملصقات", sub: "ماكينة منفصلة" },
          ],
          aux: {
            lane: "خط المنتج",
            tone: "liquid",
            inputs: [{ title: "تغذية المنتج", sub: "خزان / مضخة" }],
            outputs: [],
          },
        },
      },
      applications: {
        title: "مجالات استخدام تعبئة السوائل",
        items: [
          {
            title: "الأسمدة السائلة والمنتجات الهيومية",
            text: "تعبئة منتجات NPK السائلة والهيومية والفولفية في الزجاجات والجالونات، إذ تحدد اللزوجة والرغوة نوع الفوهة وطريقة التعبئة.",
            imageAlt: "هيومات البوتاسيوم السائلة الداكنة تنتشر في كأس ماء",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "الكيماويات الصناعية",
            text: "تعبئة الكيماويات الصناعية المناسبة، مع تقييم التوافق الكيميائي للمضخات والصمامات والحشوات الملامسة إلى جانب سلامة المشغل.",
            imageAlt: "حبيبات بيضاء من هيدروكسيد الصوديوم على زجاجة ساعة",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
          {
            title: "تعبئة الجالونات",
            text: "تعبئة السوائل المغذاة من خزان التخزين في الجالونات، ويؤثر شكل الجالون وقطر فوهته في توزيع الفوهات والتموضع.",
            imageAlt: "تعبئة منتج سائل في جالونات على آلة تعبئة",
            linkLabel: "خزان التخزين",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أنظمة تعبئة السوائل",
        intro:
          "تصمم PRO MAKINA أنظمة تعبئة السوائل وفق كثافة السائل ولزوجته وميله للرغوة وخصائصه الكيميائية وحجم العبوة وشكلها، مع تصميم طريقة التعبئة والفوهات والمواد الملامسة والناقل والاستشعار وأتمتة PLC/HMI معًا.",
        highlights: ["طريقة تعبئة مناسبة للسائل", "فوهات مع التحكم في التقطير", "مواد ملامسة متوافقة كيميائيًا", "تكامل الإغلاق ووضع الملصقات"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "خصائص السائل", text: "الكثافة والميل للرغوة والخصائص الكيميائية." },
          { title: "اللزوجة", text: "سلوك الانسياب ودرجة حرارة التعبئة." },
          { title: "حجم العبوة", text: "حجم الزجاجة أو الجالون وشكلها وقطر فوهتها." },
          { title: "مبدأ التعبئة", text: "خيارات حجمية أو بمقياس التدفق أو بالوزن أو بالمكبس." },
          { title: "توافق المواد والأتمتة", text: "المواد الملامسة والاستشعار وPLC/HMI والتكامل مع الخط." },
        ],
        dataNote: "تُحدَّد سرعة التعبئة ودقتها وعدد الفوهات من بيانات السائل والعبوة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول تعبئة السوائل",
        items: [
          {
            question: "كيف تعمل ماكينة تعبئة السوائل؟",
            answer: "تصل العبوات الفارغة على ناقل وتُوضع تحت الفوهات وتُعبأ بالطريقة المختارة، ثم تتحرك إلى الإغلاق ووضع الملصقات.",
          },
          {
            question: "ما طريقة التعبئة المستخدمة؟",
            answer: "تُقيَّم الطرق الحجمية أو بمقياس التدفق أو بالوزن أو بالمكبس وفق اللزوجة والميل للرغوة والدقة المطلوبة.",
          },
          {
            question: "هل يمكن تعبئة كل السوائل بالماكينة نفسها؟",
            answer: "لا. يحدد التوافق الكيميائي واللزوجة اختيار المضخة والصمامات والحشوات، وتُختار المواد بشكل منفصل للمنتجات المسببة للتآكل.",
          },
          {
            question: "ما الفرق بينها وبين ماكينة وضع الملصقات؟",
            answer: "تملأ ماكينة التعبئة المنتج في العبوات، بينما تضع ماكينة الملصقات الملصق على العبوة الممتلئة والمغلقة، ويمكن تشغيلهما على التوالي في الخط نفسه.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع السائل وكثافته ولزوجته وخصائصه الكيميائية ونوع العبوة وحجمها وسعة الخط المطلوبة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لنظام تعبئة السوائل",
        text: "شاركنا السائل والعبوة وسعة الخط، لنحدد معًا نظام التعبئة المناسب.",
        mailSubject: "طلب عرض سعر: تعبئة السوائل",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع السائل وخصائصه الكيميائية", "الكثافة واللزوجة", "الميل للرغوة", "نوع العبوة وحجمها", "سعة الخط المطلوبة", "الحاجة إلى الإغلاق ووضع الملصقات"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام تعبئة السوائل.",
          "",
          "المنتج السائل:",
          "الكثافة / اللزوجة:",
          "نوع العبوة وحجمها:",
          "سعة الخط (عبوة/ساعة):",
          "الإغلاق / الملصقات:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
