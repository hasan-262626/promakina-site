import type { DrumPageConfig } from "./types";

// Kaplama tamburu: granül yüzeyine sıvı/toz katkının dozajlı ve homojen uygulanması. Performans garantisi verilmez.
export const coatingDrumPage: DrumPageConfig = {
  key: "coatingDrum",
  trSlug: "kaplama-tamburu",
  mainImage: "/images/tambur kaplama/tamkaplama1.png",
  applications: [
    { image: "/images/tambur-uygulamalari/ure-granul.webp", link: "fertilizerPlants" },
    { image: "/images/tambur-uygulamalari/kalsiyum-amonyum-nitrat.webp", link: "coolingDrum" },
    { image: "/images/tambur-uygulamalari/dap-granul.webp", link: "chemicalProcess" },
  ],
  sectors: ["fertilizerPlants", "chemicalProcess"],
  resources: ["coolingDrum", "granulatorDrum", "rotaryDryer", "reactorsTanks"],
  machines: ["dosingSystems", "screeningSystems", "conveying", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Kaplama Tamburu İmalatı | Granül Gübre Kaplama | PRO MAKİNA",
        description:
          "Granül ürün yüzeyine sıvı veya toz katkıyı nozul ve dozaj sistemiyle dengeli uygulayan döner kaplama tamburu. Gübre ve kimyasal granüller için projeye özel.",
      },
      breadcrumbLabel: "Kaplama Tamburu",
      h1: "Kaplama Tamburu – Granül Ürünler için Döner Kaplama Sistemi",
      productCategory: "Döner Kaplama Tamburu",
      overview: {
        imageAlt: "Döner kaplama tamburu, taşıyıcı şase ve çıkış şutu",
        tagline: "Döner Kaplama Tamburu",
        keyFacts: [
          { label: "Görev", value: "Granül yüzeyine katkı uygulamak" },
          { label: "Katkı türü", value: "Sıvı kaplama yağı veya toz katkı" },
          { label: "Dozaj", value: "Ürün debisine oranlı kontrol" },
          { label: "Kapsam", value: "Tambur, nozul hattı ve dozaj ünitesi" },
        ],
        title: "Granül Yüzeyine Kontrollü ve Dengeli Katkı Uygulaması",
        paragraphs: [
          "Kaplama tamburu, granül ürünün tambur içinde sürekli çevrilerek yüzeyine sıvı kaplama maddesi veya toz katkının uygulandığı döner proses ekipmanıdır. Amaç granülün boyutunu değiştirmek değil, yüzeyini mümkün olduğunca eşit şekilde kaplamaktır.",
          "Kaplamanın dağılımı; nozul sayısı ve yerleşimi, püskürtme açısı, katkının ürün debisine oranlı dozajlanması, tambur devri ve ürünün tambur içindeki yuvarlanma davranışıyla belirlenir. Sıvı katkılarda viskozite ve sıcaklık, toz katkılarda ise tozun akışkanlığı tasarıma dahil edilir.",
          "Kaplama genellikle soğutma ve eleme sonrasında, paketlemeden önce yapılır. Tambur; katkı hazırlama ve dozaj ünitesi, ürün besleme ve paketleme hattı ile birlikte projelendirilir.",
        ],
        note: "Kaplama performansı ürün yüzeyi, katkı türü ve ürün sıcaklığına bağlıdır. Yeni bir katkı veya ürün için uygulama oranı ve dağılım numune çalışmasıyla doğrulanmalıdır.",
      },
      process: {
        title: "Kaplama Hattı Proses Akışı",
        intro:
          "Şema, kaplama tamburunun soğutma ve eleme sonrası tipik konumunu ve katkı dozaj hattını gösterir.",
        note: "Kaplama öncesinde ürünün elenmesi, ince tozun kaplama maddesini tüketmesini ve topaklanma oluşturmasını azaltır.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Elenmiş ürün girişi", text: "Soğutulmuş ve elenmiş granül ürün tambura düzenli beslenir." },
          { title: "Katkı uygulaması", text: "Nozullar sıvı katkıyı, besleyici toz katkıyı ürün yatağına uygular." },
          { title: "Homojen dağılım", text: "Tambur dönüşüyle yuvarlanan granüller katkıyı yüzeye yayar." },
          { title: "Kaplanmış ürün çıkışı", text: "Ürün paketleme veya stok alanına aktarılır." },
        ],
        auxLineLabel: "Katkı dozaj hattı",
        auxLine: [
          { title: "Katkı hazırlama", text: "Sıvı katkı tankta gerekli sıcaklıkta tutulur; toz katkı bunkerde bekletilir." },
          { title: "Oranlı dozaj", text: "Pompa veya besleyici, katkıyı ürün debisine oranlı olarak gönderir." },
        ],
        flow: {
          svgTitle: "Kaplama hattı proses akış şeması",
          svgDesc:
            "Ürün hattı: soğutma ve eleme, kaplama tamburu, paketleme. Katkı hattı: katkı tankı veya bunkeri ile dozaj pompası, tambur içindeki nozullara.",
          mainLane: "ÜRÜN HATTI",
          before: [{ title: "Soğutma, eleme", sub: "Hedef boyutta ürün" }],
          drum: { title: "KAPLAMA TAMBURU", sub: "yuvarlanma · yüzey kaplama" },
          after: [{ title: "Paketleme", sub: "Torba, big bag veya stok" }],
          aux: {
            lane: "KATKI DOZAJ HATTI",
            tone: "liquid",
            inputs: [
              { title: "Katkı tankı", sub: "Sıvı veya toz katkı" },
              { title: "Dozaj ünitesi", sub: "Debiye oranlı" },
            ],
            outputs: [],
            inLabel: "nozul / besleme",
          },
        },
      },
      applications: {
        title: "Kaplama Tamburu Uygulama Alanları",
        items: [
          {
            title: "Üre ve Azotlu Gübre Kaplama",
            text: "Üre ve azotlu granül gübrelerde tozumayı ve depolama sırasında topaklanmayı azaltmaya yönelik yüzey kaplama uygulamaları. Katkı oranı ürün ve iklim koşullarına göre belirlenir.",
            imageAlt: "Cam kap içinde beyaz üre granülleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Soğutma Sonrası Yüzey İyileştirme",
            text: "Nitratlı ve kompoze granüllerin soğutma sonrası kaplanması. Ürün sıcaklığı, kaplama maddesinin yüzeye tutunmasını etkilediğinden soğutucu ile birlikte değerlendirilir.",
            imageAlt: "Beyaz, küresel kalsiyum amonyum nitrat granülleri",
            linkLabel: "Soğutma Tamburu",
          },
          {
            title: "Fosfatlı ve Kimyasal Granül Kaplama",
            text: "DAP ve benzeri fosfatlı granüller ile kimyasal granül ürünlere toz veya sıvı katkı uygulanması. Katkı türüne uygun iç yüzey ve temizlik erişimi tasarımda dikkate alınır.",
            imageAlt: "Siyah kap içinde açık renkli DAP granülleri",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Kaplama Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA kaplama tamburlarını ürün debisi, granül boyutu, katkı türü ve uygulama oranına göre projelendirir. Tambur gövdesi, iç yüzey, nozul hattı, katkı hazırlama ve dozaj ünitesi, ürünün hattaki akışıyla uyumlu olacak şekilde birlikte tasarlanır.",
        highlights: ["Nozul yerleşimi ve püskürtme bölgesi", "Debiye oranlı katkı dozajı", "Temizlik ve servis erişimi", "Yapışmaya karşı iç yüzey seçenekleri"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün Bilgileri", text: "Granül türü, boyut aralığı, yığın yoğunluğu ve ürün sıcaklığı." },
          { title: "Katkı Bilgileri", text: "Sıvı veya toz katkı, viskozite, hazırlama sıcaklığı ve uygulama oranı." },
          { title: "Kapasite", text: "Saatlik ürün debisi ve çalışma rejimi." },
          { title: "Hat Entegrasyonu", text: "Soğutma, eleme, paketleme ve katkı tankı bağlantıları." },
        ],
        dataNote: "Katkı üreticisinin önerdiği uygulama sıcaklığı ve oranı, dozaj ünitesi ve nozul seçiminde esas alınır.",
      },
      faq: {
        title: "Kaplama Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Kaplama tamburu hangi katkılarla çalışır?",
            answer:
              "Sıvı kaplama maddeleri (ör. kaplama yağları) nozullarla, toz katkılar ise besleyici ile uygulanabilir. Katkının türü, dozaj ünitesi ve iç yüzey seçimini belirler.",
          },
          {
            question: "Kaplama tamburu granül boyutunu değiştirir mi?",
            answer:
              "Kaplama tamburunun amacı granül büyütmek değil, mevcut granülün yüzeyine katkı uygulamaktır. Granül oluşumu granülatör tamburunda yapılır.",
          },
          {
            question: "Kaplama dağılımının eşitliği neye bağlıdır?",
            answer:
              "Nozul yerleşimi, püskürtme açısı, katkının ürün debisine oranlı dozajlanması, tambur devri, doluluk ve ürünün tambur içindeki yuvarlanma davranışı birlikte etkilidir.",
          },
          {
            question: "Kaplama neden soğutmadan sonra yapılır?",
            answer:
              "Ürün sıcaklığı kaplama maddesinin granül yüzeyine tutunmasını ve katkının davranışını etkiler. Bu nedenle kaplama genellikle ürün soğutulup elendikten sonra yapılır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün türü ve debisi, granül boyutu, katkı türü ve üreticisinin önerdiği uygulama oranı, ürün sıcaklığı ve mevcut hat bağlantıları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Kaplama tamburu için teknik teklif alın",
        text: "Ürününüz, katkı türünüz ve uygulama oranınıza göre kaplama tamburunu, nozul hattını ve dozaj ünitesini birlikte netleştirelim.",
        mailSubject: "Kaplama Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü ve granül boyutu",
          "Saatlik ürün debisi (ton/saat)",
          "Katkı türü (sıvı / toz)",
          "Önerilen uygulama oranı",
          "Kaplama öncesi ürün sıcaklığı",
          "Mevcut hat ve paketleme bağlantıları",
        ],
        inquiryLines: [
          "Merhaba, kaplama tamburu için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Kapasite (ton/saat):",
          "Granül boyutu:",
          "Katkı türü:",
          "Uygulama oranı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Coating Drum Manufacturer | Fertilizer Coating",
        description:
          "Rotary coating drums that apply liquid or powder additives evenly to granules via nozzles and metering. Project-specific for fertilizer and chemical granules.",
      },
      breadcrumbLabel: "Coating Drum",
      h1: "Coating Drum – Rotary Coating System for Granular Products",
      productCategory: "Rotary Coating Drum",
      overview: {
        imageAlt: "Rotary coating drum with support frame and discharge chute",
        tagline: "Rotary Coating Drum",
        keyFacts: [
          { label: "Task", value: "Applying additives to granule surfaces" },
          { label: "Additive", value: "Liquid coating oil or powder" },
          { label: "Metering", value: "Ratio control to product rate" },
          { label: "Scope", value: "Drum, nozzle line and metering unit" },
        ],
        title: "Controlled, Even Additive Application on the Granule Surface",
        paragraphs: [
          "A coating drum is rotary process equipment in which granular product is turned continuously while a liquid coating agent or powder additive is applied to its surface. The aim is not to change granule size but to cover the surface as evenly as possible.",
          "Coating distribution is determined by the number and position of nozzles, spray angle, metering of the additive in proportion to product rate, drum speed and the rolling behaviour of the product. Viscosity and temperature of liquids, and flowability of powders, are part of the design.",
          "Coating is usually carried out after cooling and screening and before packing. The drum is engineered together with the additive preparation and metering unit, product feeding and the packing line.",
        ],
        note: "Coating performance depends on the granule surface, additive type and product temperature. For a new additive or product, application rate and distribution should be confirmed by sample work.",
      },
      process: {
        title: "Coating Line Process Flow",
        intro: "The diagram shows the typical position of the coating drum after cooling and screening, and the additive metering line.",
        note: "Screening before coating reduces the amount of coating agent consumed by fines and limits lump formation.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Screened product inlet", text: "Cooled and screened granules are fed steadily to the drum." },
          { title: "Additive application", text: "Nozzles apply liquid additive, or a feeder applies powder, onto the bed." },
          { title: "Even distribution", text: "Granules rolling with the drum spread the additive over their surface." },
          { title: "Coated product discharge", text: "Product is sent to packing or storage." },
        ],
        auxLineLabel: "Additive metering line",
        auxLine: [
          { title: "Additive preparation", text: "Liquid additive is kept at the required temperature in a tank; powder waits in a hopper." },
          { title: "Ratio metering", text: "A pump or feeder delivers the additive in proportion to the product rate." },
        ],
        flow: {
          svgTitle: "Coating line process flow diagram",
          svgDesc:
            "Product line: cooling and screening, coating drum, packing. Additive line: additive tank or hopper and metering unit to the nozzles inside the drum.",
          mainLane: "PRODUCT LINE",
          before: [{ title: "Cooling, screening", sub: "On-size product" }],
          drum: { title: "COATING DRUM", sub: "rolling · surface coating" },
          after: [{ title: "Packing", sub: "Bags, big bags or storage" }],
          aux: {
            lane: "ADDITIVE METERING LINE",
            tone: "liquid",
            inputs: [
              { title: "Additive tank", sub: "Liquid or powder" },
              { title: "Metering unit", sub: "Ratio to product rate" },
            ],
            outputs: [],
            inLabel: "nozzles / feeder",
          },
        },
      },
      applications: {
        title: "Coating Drum Applications",
        items: [
          {
            title: "Urea and Nitrogen Fertilizer Coating",
            text: "Surface coating of urea and nitrogen granules to reduce dust and caking during storage. The additive rate is set according to the product and climate conditions.",
            imageAlt: "White urea granules in a glass jar",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Surface Treatment after Cooling",
            text: "Coating nitrate and compound granules after cooling. Since product temperature affects how well the coating agent adheres, the coater is assessed together with the cooler.",
            imageAlt: "White spherical calcium ammonium nitrate granules",
            linkLabel: "Rotary Cooler",
          },
          {
            title: "Phosphate and Chemical Granule Coating",
            text: "Applying powder or liquid additives to DAP and similar phosphate granules and to chemical granules. Internal surface and cleaning access suited to the additive are part of the design.",
            imageAlt: "Light-coloured DAP granules in a black dish",
            linkLabel: "Chemical Process Industry",
          },
        ],
      },
      design: {
        title: "Custom Coating Drum Design and Manufacturing",
        intro:
          "PRO MAKINA engineers coating drums around product rate, granule size, additive type and application rate. The drum shell, internal surface, nozzle line, additive preparation and metering unit are designed together so that they match the product flow in the line.",
        highlights: ["Nozzle layout and spray zone", "Additive metering in ratio to product", "Cleaning and service access", "Anti-build-up internal surfaces"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product Data", text: "Granule type, size range, bulk density and product temperature." },
          { title: "Additive Data", text: "Liquid or powder, viscosity, preparation temperature and application rate." },
          { title: "Capacity", text: "Hourly product rate and operating regime." },
          { title: "Line Integration", text: "Connections to cooling, screening, packing and the additive tank." },
        ],
        dataNote: "The application temperature and rate recommended by the additive supplier are the basis for selecting the metering unit and nozzles.",
      },
      faq: {
        title: "Coating Drum FAQ",
        items: [
          {
            question: "Which additives can a coating drum apply?",
            answer:
              "Liquid coating agents (e.g. coating oils) are applied through nozzles and powder additives through a feeder. The additive type determines the metering unit and internal surface.",
          },
          {
            question: "Does a coating drum change granule size?",
            answer:
              "The purpose of a coating drum is not to grow granules but to apply an additive to the existing granule surface. Granule formation takes place in the drum granulator.",
          },
          {
            question: "What determines how evenly the coating is distributed?",
            answer:
              "Nozzle layout, spray angle, metering in proportion to product rate, drum speed, filling level and the rolling behaviour of the product all act together.",
          },
          {
            question: "Why is coating done after cooling?",
            answer:
              "Product temperature affects how the coating agent adheres and behaves. Coating is therefore usually carried out after the product has been cooled and screened.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Product type and rate, granule size, additive type and the application rate recommended by its supplier, product temperature and the existing line connections.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a coating drum",
        text: "Share your product, additive type and application rate, and we will define the coating drum, nozzle line and metering unit together with you.",
        mailSubject: "Coating Drum Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type and granule size",
          "Hourly product rate (t/h)",
          "Additive type (liquid / powder)",
          "Recommended application rate",
          "Product temperature before coating",
          "Existing line and packing connections",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a coating drum.",
          "",
          "Product:",
          "Capacity (t/h):",
          "Granule size:",
          "Additive type:",
          "Application rate:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Барабан для покрытия гранул | Кондиционирование",
        description:
          "Вращающиеся барабаны для равномерного нанесения жидких или порошковых добавок на гранулы через форсунки и дозатор. Проекты для удобрений и химических гранул.",
      },
      breadcrumbLabel: "Барабан для покрытия гранул",
      h1: "Барабан для покрытия гранул – система поверхностной обработки",
      productCategory: "Барабан для покрытия гранул",
      overview: {
        imageAlt: "Барабан для покрытия гранул с опорной рамой и разгрузочным лотком",
        tagline: "Барабан для покрытия",
        keyFacts: [
          { label: "Задача", value: "Нанесение добавки на поверхность гранул" },
          { label: "Добавка", value: "Жидкое масло или порошок" },
          { label: "Дозирование", value: "Пропорционально расходу продукта" },
          { label: "Объём поставки", value: "Барабан, форсунки, дозирующий узел" },
        ],
        title: "Контролируемое и равномерное нанесение добавки на гранулы",
        paragraphs: [
          "Барабан для покрытия — вращающийся аппарат, в котором гранулированный продукт непрерывно перемешивается, а на его поверхность наносится жидкий кондиционирующий агент или порошковая добавка. Задача — не изменить размер гранул, а по возможности равномерно покрыть их поверхность.",
          "Распределение покрытия зависит от числа и расположения форсунок, угла распыления, дозирования добавки пропорционально расходу продукта, скорости вращения и характера перекатывания продукта. Вязкость и температура жидкостей, а также сыпучесть порошков учитываются в проекте.",
          "Покрытие обычно выполняется после охлаждения и грохочения, перед фасовкой. Барабан проектируется вместе с узлом приготовления и дозирования добавки, подачей продукта и линией фасовки.",
        ],
        note: "Результат покрытия зависит от поверхности гранул, вида добавки и температуры продукта. Для новой добавки или продукта норма нанесения и распределение подтверждаются испытанием образцов.",
      },
      process: {
        title: "Технологическая схема линии покрытия",
        intro: "Схема показывает типовое положение барабана для покрытия после охлаждения и грохочения и линию дозирования добавки.",
        note: "Грохочение перед покрытием снижает расход агента на мелкую фракцию и ограничивает образование комков.",
        mainLineLabel: "Продуктовая линия",
        productLine: [
          { title: "Подача рассеянного продукта", text: "Охлаждённые и рассеянные гранулы равномерно подаются в барабан." },
          { title: "Нанесение добавки", text: "Форсунки подают жидкость, питатель — порошок на слой продукта." },
          { title: "Равномерное распределение", text: "Перекатываясь, гранулы распределяют добавку по поверхности." },
          { title: "Выгрузка продукта", text: "Покрытый продукт передаётся на фасовку или склад." },
        ],
        auxLineLabel: "Линия дозирования добавки",
        auxLine: [
          { title: "Подготовка добавки", text: "Жидкость поддерживается в ёмкости при нужной температуре; порошок — в бункере." },
          { title: "Пропорциональное дозирование", text: "Насос или питатель подаёт добавку пропорционально расходу продукта." },
        ],
        flow: {
          svgTitle: "Технологическая схема линии покрытия",
          svgDesc:
            "Продуктовая линия: охлаждение и грохочение, барабан для покрытия, фасовка. Линия добавки: ёмкость или бункер и дозирующий узел к форсункам в барабане.",
          mainLane: "ПРОДУКТОВАЯ ЛИНИЯ",
          before: [{ title: "Охлаждение", sub: "и грохочение" }],
          drum: { title: "БАРАБАН ПОКРЫТИЯ", sub: "перекатывание · покрытие" },
          after: [{ title: "Фасовка", sub: "Мешки, биг-бэги, склад" }],
          aux: {
            lane: "ЛИНИЯ ДОБАВКИ",
            tone: "liquid",
            inputs: [
              { title: "Ёмкость", sub: "Жидкость или порошок" },
              { title: "Дозатор", sub: "По расходу продукта" },
            ],
            outputs: [],
            inLabel: "форсунки / питатель",
          },
        },
      },
      applications: {
        title: "Области применения барабана для покрытия",
        items: [
          {
            title: "Покрытие карбамида и азотных удобрений",
            text: "Поверхностная обработка карбамида и азотных гранул для снижения пыления и слёживания при хранении. Норма добавки подбирается с учётом продукта и климата.",
            imageAlt: "Белые гранулы карбамида в стеклянной банке",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Обработка поверхности после охлаждения",
            text: "Покрытие нитратных и комплексных гранул после охлаждения. Поскольку температура продукта влияет на удержание агента, барабан рассматривается вместе с охладителем.",
            imageAlt: "Белые сферические гранулы известково-аммиачной селитры",
            linkLabel: "Охладительный барабан",
          },
          {
            title: "Покрытие фосфатных и химических гранул",
            text: "Нанесение порошковых или жидких добавок на ДАФ и аналогичные фосфатные гранулы, а также на химические продукты. Внутренняя поверхность и доступ для очистки подбираются под добавку.",
            imageAlt: "Светлые гранулы ДАФ в чёрной ёмкости",
            linkLabel: "Химическая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление барабанов для покрытия",
        intro:
          "PRO MAKINA проектирует барабаны для покрытия исходя из расхода продукта, размера гранул, вида добавки и нормы нанесения. Корпус, внутренняя поверхность, линия форсунок, узел подготовки и дозирования добавки разрабатываются совместно и согласуются с движением продукта в линии.",
        highlights: ["Расположение форсунок и зона распыления", "Дозирование пропорционально продукту", "Доступ для очистки и обслуживания", "Поверхности против налипания"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Данные продукта", text: "Вид гранул, диапазон размеров, насыпная плотность и температура." },
          { title: "Данные добавки", text: "Жидкость или порошок, вязкость, температура подготовки и норма нанесения." },
          { title: "Производительность", text: "Часовой расход продукта и режим работы." },
          { title: "Интеграция в линию", text: "Связь с охлаждением, грохочением, фасовкой и ёмкостью добавки." },
        ],
        dataNote: "Температура и норма нанесения, рекомендованные поставщиком добавки, являются основой выбора дозатора и форсунок.",
      },
      faq: {
        title: "Часто задаваемые вопросы о барабане для покрытия",
        items: [
          {
            question: "Какие добавки можно наносить в барабане?",
            answer:
              "Жидкие кондиционирующие агенты (например, масла для покрытия) наносятся через форсунки, порошковые — через питатель. Вид добавки определяет дозатор и внутреннюю поверхность.",
          },
          {
            question: "Меняет ли барабан для покрытия размер гранул?",
            answer:
              "Задача барабана — не укрупнение гранул, а нанесение добавки на поверхность готовых гранул. Гранулообразование происходит в барабанном грануляторе.",
          },
          {
            question: "От чего зависит равномерность покрытия?",
            answer:
              "Совместно действуют расположение форсунок, угол распыления, дозирование пропорционально расходу, скорость вращения, заполнение и характер перекатывания продукта.",
          },
          {
            question: "Почему покрытие выполняют после охлаждения?",
            answer:
              "Температура продукта влияет на удержание и поведение агента. Поэтому покрытие обычно выполняется после охлаждения и грохочения продукта.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид и расход продукта, размер гранул, вид добавки и рекомендованная поставщиком норма нанесения, температура продукта и существующие связи линии.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на барабан для покрытия",
        text: "Сообщите продукт, вид добавки и норму нанесения — вместе определим барабан, линию форсунок и дозирующий узел.",
        mailSubject: "Запрос предложения: барабан для покрытия гранул",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта и размер гранул",
          "Часовой расход продукта (т/ч)",
          "Вид добавки (жидкость / порошок)",
          "Рекомендованная норма нанесения",
          "Температура продукта перед покрытием",
          "Существующая линия и фасовка",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на барабан для покрытия гранул.",
          "",
          "Продукт:",
          "Производительность (т/ч):",
          "Размер гранул:",
          "Вид добавки:",
          "Норма нанесения:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة التغليف | تغليف الأسمدة الحبيبية",
        description:
          "أسطوانات تغليف دوّارة تضيف المواد السائلة أو المسحوقة بالتساوي على الحبيبات عبر الفوهات ووحدة الجرعات. تصميم مخصص لحبيبات الأسمدة والمواد الكيميائية.",
      },
      breadcrumbLabel: "أسطوانة التغليف",
      h1: "أسطوانة التغليف – نظام تغليف دوّار للمنتجات الحبيبية",
      productCategory: "أسطوانة تغليف دوّارة",
      overview: {
        imageAlt: "أسطوانة تغليف دوّارة مع الهيكل الحامل ومزلق التفريغ",
        tagline: "أسطوانة تغليف دوّارة",
        keyFacts: [
          { label: "المهمة", value: "إضافة مادة على سطح الحبيبات" },
          { label: "المادة المضافة", value: "زيت تغليف سائل أو مسحوق" },
          { label: "الجرعات", value: "متناسبة مع تدفق المنتج" },
          { label: "نطاق التوريد", value: "أسطوانة وخط فوهات ووحدة جرعات" },
        ],
        title: "إضافة مضبوطة ومتوازنة على سطح الحبيبات",
        paragraphs: [
          "أسطوانة التغليف معدة عملية دوّارة يُقلَّب فيها المنتج الحبيبي باستمرار بينما تُضاف إلى سطحه مادة تغليف سائلة أو إضافة مسحوقة. والهدف ليس تغيير حجم الحبيبات، بل تغطية سطحها بأكبر قدر ممكن من التجانس.",
          "يتحدد توزيع التغليف بعدد الفوهات ومواضعها وزاوية الرش وجرعة المادة المضافة بالتناسب مع تدفق المنتج وسرعة الأسطوانة وسلوك تدحرج المنتج. وتدخل لزوجة السوائل وحرارتها وقابلية المساحيق للانسياب في التصميم.",
          "يُجرى التغليف عادةً بعد التبريد والغربلة وقبل التعبئة. وتُصمَّم الأسطوانة مع وحدة تحضير المادة المضافة وجرعاتها وتلقيم المنتج وخط التعبئة.",
        ],
        note: "يعتمد أداء التغليف على سطح الحبيبات ونوع المادة المضافة وحرارة المنتج. وفي حال مادة أو منتج جديد ينبغي التحقق من معدل الإضافة والتوزيع بتجارب على العينات.",
      },
      process: {
        title: "مخطط تدفق خط التغليف",
        intro: "يوضح المخطط الموقع النموذجي لأسطوانة التغليف بعد التبريد والغربلة وخط جرعات المادة المضافة.",
        note: "تقلل الغربلة قبل التغليف من استهلاك الدقائق لمادة التغليف وتحد من تكوّن الكتل.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "دخول المنتج المغربل", text: "تُلقَّم الحبيبات المبرّدة والمغربلة إلى الأسطوانة بانتظام." },
          { title: "إضافة المادة", text: "تضيف الفوهات السائل أو يضيف المُلقِّم المسحوق على طبقة المنتج." },
          { title: "توزيع متجانس", text: "تنشر الحبيبات المتدحرجة المادة المضافة على سطحها." },
          { title: "خروج المنتج المغلّف", text: "يُنقل المنتج إلى التعبئة أو التخزين." },
        ],
        auxLineLabel: "خط جرعات المادة المضافة",
        auxLine: [
          { title: "تحضير المادة", text: "يُحفظ السائل في خزان بالحرارة اللازمة، ويُحفظ المسحوق في قادوس." },
          { title: "جرعات متناسبة", text: "ترسل المضخة أو المُلقِّم المادة بالتناسب مع تدفق المنتج." },
        ],
        flow: {
          svgTitle: "مخطط تدفق خط التغليف",
          svgDesc:
            "خط المنتج: التبريد والغربلة، أسطوانة التغليف، التعبئة. خط المادة المضافة: خزان أو قادوس ووحدة الجرعات إلى الفوهات داخل الأسطوانة.",
          mainLane: "خط المنتج",
          before: [{ title: "التبريد والغربلة", sub: "منتج بالحجم المطلوب" }],
          drum: { title: "أسطوانة التغليف", sub: "تدحرج · تغليف السطح" },
          after: [{ title: "التعبئة", sub: "أكياس أو أكياس كبيرة" }],
          aux: {
            lane: "خط المادة المضافة",
            tone: "liquid",
            inputs: [
              { title: "خزان المادة", sub: "سائل أو مسحوق" },
              { title: "وحدة الجرعات", sub: "متناسبة مع التدفق" },
            ],
            outputs: [],
            inLabel: "فوهات / مُلقِّم",
          },
        },
      },
      applications: {
        title: "مجالات استخدام أسطوانة التغليف",
        items: [
          {
            title: "تغليف اليوريا والأسمدة النيتروجينية",
            text: "تغليف سطح حبيبات اليوريا والأسمدة النيتروجينية للحد من الغبار والتكتّل أثناء التخزين. ويُحدَّد معدل الإضافة وفق المنتج والظروف المناخية.",
            imageAlt: "حبيبات يوريا بيضاء في وعاء زجاجي",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "معالجة السطح بعد التبريد",
            text: "تغليف حبيبات النترات والأسمدة المركبة بعد التبريد. ولأن حرارة المنتج تؤثر في التصاق مادة التغليف، يُقيَّم المغلِّف مع المبرّد معًا.",
            imageAlt: "حبيبات نترات الأمونيوم الكلسية البيضاء الكروية",
            linkLabel: "أسطوانة التبريد",
          },
          {
            title: "تغليف الحبيبات الفوسفاتية والكيميائية",
            text: "إضافة مواد مسحوقة أو سائلة إلى حبيبات DAP والحبيبات الفوسفاتية المماثلة والمنتجات الكيميائية. ويُراعى في التصميم سطح داخلي وإمكانية تنظيف مناسبان للمادة المضافة.",
            imageAlt: "حبيبات DAP فاتحة اللون في وعاء أسود",
            linkLabel: "الصناعات الكيميائية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أسطوانات تغليف مخصصة",
        intro:
          "تصمم PRO MAKINA أسطوانات التغليف وفق تدفق المنتج وحجم الحبيبات ونوع المادة المضافة ومعدل الإضافة. ويُصمَّم جسم الأسطوانة وسطحها الداخلي وخط الفوهات ووحدة التحضير والجرعات معًا بما يتوافق مع تدفق المنتج في الخط.",
        highlights: ["توزيع الفوهات ومنطقة الرش", "جرعات متناسبة مع المنتج", "سهولة التنظيف والصيانة", "أسطح داخلية تقلل الالتصاق"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "بيانات المنتج", text: "نوع الحبيبات ونطاق الحجم والكثافة الظاهرية وحرارة المنتج." },
          { title: "بيانات المادة المضافة", text: "سائل أو مسحوق، واللزوجة وحرارة التحضير ومعدل الإضافة." },
          { title: "السعة", text: "تدفق المنتج بالساعة ونظام التشغيل." },
          { title: "التكامل مع الخط", text: "الربط مع التبريد والغربلة والتعبئة وخزان المادة المضافة." },
        ],
        dataNote: "تُعتمد حرارة الإضافة ومعدلها الموصى بهما من مورّد المادة أساسًا لاختيار وحدة الجرعات والفوهات.",
      },
      faq: {
        title: "أسئلة شائعة حول أسطوانة التغليف",
        items: [
          {
            question: "ما المواد التي يمكن إضافتها في أسطوانة التغليف؟",
            answer:
              "تُضاف مواد التغليف السائلة (مثل زيوت التغليف) عبر الفوهات، والمواد المسحوقة عبر مُلقِّم. ويحدد نوع المادة وحدة الجرعات والسطح الداخلي.",
          },
          {
            question: "هل تغيّر أسطوانة التغليف حجم الحبيبات؟",
            answer:
              "ليس الغرض من أسطوانة التغليف تكبير الحبيبات، بل إضافة مادة على سطح الحبيبات الموجودة. أما تكوين الحبيبات فيتم في المُحبِّب الأسطواني.",
          },
          {
            question: "علامَ يعتمد تجانس التغليف؟",
            answer:
              "يؤثر معًا توزيع الفوهات وزاوية الرش والجرعات المتناسبة مع التدفق وسرعة الأسطوانة ودرجة الامتلاء وسلوك تدحرج المنتج.",
          },
          {
            question: "لماذا يُجرى التغليف بعد التبريد؟",
            answer:
              "تؤثر حرارة المنتج في التصاق مادة التغليف وسلوكها، لذلك يُجرى التغليف عادةً بعد تبريد المنتج وغربلته.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المنتج وتدفقه وحجم الحبيبات ونوع المادة المضافة ومعدل الإضافة الموصى به من المورّد وحرارة المنتج ووصلات الخط الحالية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لأسطوانة تغليف",
        text: "شاركنا المنتج ونوع المادة المضافة ومعدل الإضافة، لنحدد معًا أسطوانة التغليف وخط الفوهات ووحدة الجرعات.",
        mailSubject: "طلب عرض سعر: أسطوانة تغليف",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج وحجم الحبيبات",
          "تدفق المنتج بالساعة (طن/ساعة)",
          "نوع المادة المضافة (سائل / مسحوق)",
          "معدل الإضافة الموصى به",
          "حرارة المنتج قبل التغليف",
          "الخط الحالي ووصلات التعبئة",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لأسطوانة تغليف.",
          "",
          "المنتج:",
          "السعة (طن/ساعة):",
          "حجم الحبيبات:",
          "نوع المادة المضافة:",
          "معدل الإضافة:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
