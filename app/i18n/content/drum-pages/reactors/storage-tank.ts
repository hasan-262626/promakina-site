import type { DrumPageConfig } from "../types";

// Stok tankı: sıvı ürün ve hammaddelerin depolanması (reaktör veya çözündürme tankı değildir).
// Karıştırıcı, ceket veya basınçlı çalışma standart kabul edilmez; hacim, et kalınlığı ve malzeme kalitesi için değer verilmez.
// Ana görsel ve şekil görselinin kaynağı doğrulanmamıştır.
const img = (file: string) => `/images/reaktor-tank/${file}`;
const app = (file: string) => `/images/tank-uygulamalari/${file}`;

export const storageTankPage: DrumPageConfig = {
  key: "storageTank",
  group: "reactorsTanks",
  trSlug: "stok-tanklari",
  mainImage: img("sivi21.jpg"),
  applications: [
    { image: app("sivi-potasyum-humat.webp"), link: "fertilizerPlants" },
    { image: img("sivi22.jpg"), link: "packagingSystems" },
    { image: app("kimya-proses-tesisi.webp"), link: "chemicalProcess" },
  ],
  figure: img("sivi5.webp"),
  sectors: ["fertilizerPlants", "chemicalProcess", "sludgeDrying"],
  resources: ["dissolutionTank", "agitatedReactor", "coolingTank", "storageSystems"],
  machines: ["reactorsTanks", "packagingSystems", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Stok Tankı İmalatı | Endüstriyel Sıvı Stok Tankları | PRO MAKİNA",
        description:
          "Sıvı gübre, proses suyu ve uygun kimyasal ürünlerin depolanması için endüstriyel stok tankı imalatı. Hacim, malzeme ve bağlantılar ürüne göre seçilir.",
      },
      breadcrumbLabel: "Stok Tankları",
      h1: "Stok Tankı – Sıvı Ürün ve Hammaddeler İçin Endüstriyel Depolama",
      productCategory: "Stok Tankı",
      overview: {
        imageAlt: "Üst platformlu ve merdivenli dikey paslanmaz çelik stok tankları",
        tagline: "Stok Tankı",
        keyFacts: [
          { label: "Görev", value: "Sıvı ürün ve hammaddelerin depolanması" },
          { label: "Çalışma", value: "Genellikle atmosferik; basınçlı depolama ayrıca değerlendirilir" },
          { label: "Seviye", value: "Seviye ölçümü ve taşma kontrolü" },
          { label: "Ek donanım", value: "İzolasyon, ısıtma veya karıştırma yalnızca gerekirse" },
        ],
        title: "Proses Hattında Güvenli Depolama ve Tampon Hacim",
        paragraphs: [
          "Stok tankı, sıvı hammaddelerin, ara ürünlerin veya mamul ürünlerin proses, dolum ya da sevkiyat öncesinde güvenli şekilde bekletildiği depolama tankıdır. Üretim ile tüketim arasındaki farkı dengeleyen tampon hacim sağlar.",
          "Tank geometrisi (dikey veya yatay silindirik), kullanım hacmi ve gövde malzemesi depolanacak ürünün türüne, kimyasal özelliklerine ve saha yerleşimine göre belirlenir. Dolum ve boşaltım bağlantıları, havalandırma, taşma borusu, seviye ölçümü ve bakım kapakları birlikte planlanır.",
          "İzolasyon, ısıtma veya karıştırıcı gibi donanımlar her stok tankında bulunmaz; yalnızca ürünün donma, çökelme veya viskozite davranışı gerektirdiğinde projeye eklenir. Basınç altında depolama gerekiyorsa tank ayrı kriterlerle değerlendirilir.",
        ],
        note: "Stok tankı bir reaktör veya çözündürme tankı değildir; ürün burada işlenmez, depolanır. Karıştırma veya çözündürme gereken adımlar için ilgili proses tankları kullanılır.",
      },
      process: {
        title: "Stok Tankı Proses Akışı",
        intro:
          "Şema, ürünün tanka kabul edildiği, seviye takibiyle depolandığı ve ihtiyaç duyulduğunda dolum, proses veya sevkiyata tahliye edildiği genel akışı gösterir.",
        note: "Tank dolarken ve boşalırken havalandırma hattı iç basıncı dengeler; taşma borusu ve seviye ölçümü aşırı dolumu önlemeye yardımcı olur.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Ürün kabulü", text: "Ürün proses hattından veya tankerden pompa ile tanka alınır." },
          { title: "Kontrollü depolama", text: "Ürün, türüne uygun malzemeden imal edilmiş gövdede bekletilir." },
          { title: "Seviye takibi", text: "Seviye ölçülür; havalandırma ve taşma bağlantıları güvenli dolumu destekler." },
          { title: "Talebe göre tahliye", text: "Ürün ihtiyaç anında dolum hattına, prosese veya sevkiyata aktarılır." },
        ],
        flow: {
          svgTitle: "Stok tankı proses akış şeması",
          svgDesc: "Ürün hattı: ürün kabulü, stok tankında depolama ve seviye takibi, talebe göre tahliye ve dolum, proses veya sevkiyat.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Ürün kabulü", sub: "Proses hattı / tanker" }],
          drum: { title: "STOK TANKI", sub: "depolama ve seviye takibi" },
          after: [
            { title: "Tahliye", sub: "Talebe göre" },
            { title: "Sonraki adım", sub: "Dolum / proses / sevkiyat" },
          ],
        },
      },
      applications: {
        title: "Stok Tankı Uygulama Alanları",
        items: [
          {
            title: "Sıvı Gübre Ürünleri",
            text: "Hazırlanan sıvı gübre ve humik çözeltilerin dolum veya sevkiyat öncesinde depolanması. Çökelme eğilimi olan ürünlerde karıştırma veya sirkülasyon ihtiyacı ayrıca değerlendirilir.",
            imageAlt: "Su dolu beherde çözünerek dağılan koyu renkli sıvı potasyum humat",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Dolum Hattı Besleme",
            text: "Dolum makinesinin kesintisiz beslenmesi için ara stok hacmi oluşturulması. Tank hacmi, dolum hızı ve üretim partileri arasındaki süreye göre belirlenir.",
            imageAlt: "Dolum makinesinde bidonlara sıvı ürün dolumu",
            linkLabel: "Paketleme ve Dolum Sistemleri",
          },
          {
            title: "Kimyasal Hammadde ve Ara Ürünler",
            text: "Proseste kullanılan sıvı kimyasal hammaddelerin ve ara ürünlerin depolanması. Gövde malzemesi, conta ve bağlantılar ürünün kimyasal uyumluluğuna göre seçilir.",
            imageAlt: "Kimyasal proses tesisinde kolonlar, boru köprüleri ve yapılar",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Stok Tankı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA stok tanklarını depolanacak ürünün türü ve kimyasal özellikleri, kullanım hacmi, saha yerleşimi ve dolum-boşaltım düzenine göre projelendirir. Gövde ve taban, bağlantılar, havalandırma, seviye ölçümü ve erişim donanımı birlikte tasarlanır.",
        highlights: [
          "Ürüne uygun gövde ve taban malzemesi",
          "Dolum, boşaltım ve havalandırma bağlantıları",
          "Seviye ölçümü ve taşma kontrolü",
          "Platform, merdiven ve bakım kapağı",
        ],
        figureAlt: "Stok tanklarının üst kapağında seviye ölçüm cihazları, boru bağlantıları ve adam giriş kapağı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Depolanacak Ürün", text: "Ürün türü, yoğunluk, sıcaklık ve kimyasal özellikler." },
          { title: "Hacim ve Geometri", text: "Kullanım hacmi, dikey veya yatay tasarım ve yerleşim ölçüleri." },
          { title: "Malzeme ve Korozyon", text: "Gövde ve taban malzemesi, conta ve kimyasal uyumluluk." },
          { title: "Bağlantılar ve Havalandırma", text: "Dolum, boşaltım, havalandırma, taşma ve bakım kapakları." },
          { title: "Seviye, Saha ve Erişim", text: "Seviye ölçümü, temel ve taşıyıcı konstrüksiyon, platform ve merdiven." },
        ],
        dataNote: "Tank hacmi, gövde kalınlığı ve malzeme kalitesi ürün ve saha verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Stok Tankı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Stok tankı ne işe yarar?",
            answer:
              "Sıvı hammaddelerin, ara ürünlerin veya mamul ürünlerin proses, dolum ya da sevkiyat öncesinde güvenli şekilde depolanmasını ve tampon hacim oluşturulmasını sağlar.",
          },
          {
            question: "Stok tankı ile reaktör arasındaki fark nedir?",
            answer:
              "Reaktörde ürün karıştırma, çözündürme veya reaksiyon gibi bir işleme tabi tutulur. Stok tankında ise ürün işlenmez, yalnızca depolanır.",
          },
          {
            question: "Her stok tankında karıştırıcı veya ısıtma var mıdır?",
            answer:
              "Hayır. Karıştırıcı, ısıtma veya izolasyon yalnızca ürünün çökelme, donma veya viskozite davranışı gerektirdiğinde projeye eklenir.",
          },
          {
            question: "Stok tankı basınçlı mı çalışır?",
            answer:
              "Sıvı stok tankları çoğunlukla atmosferik tasarlanır ve havalandırma ile iç basınç dengelenir. Basınç altında depolama gerekiyorsa tank ayrı kriterlerle değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Depolanacak ürün ve özellikleri, kullanım hacmi, dolum ve boşaltım şekli, saha yerleşimi ve kurulum ortamı (açık veya kapalı alan) temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Stok tankı için teknik teklif alın",
        text: "Depolayacağınız ürün, hacim ve saha koşullarınıza göre stok tankını birlikte netleştirelim.",
        mailSubject: "Stok Tankı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Depolanacak ürün ve kimyasal özellikleri",
          "Kullanım hacmi",
          "Ürün sıcaklığı ve yoğunluğu",
          "Dolum ve boşaltım şekli",
          "Saha yerleşimi ve kurulum ortamı",
          "Gerekiyorsa izolasyon, ısıtma veya karıştırma",
        ],
        inquiryLines: [
          "Merhaba, stok tankı için teknik teklif almak istiyorum.",
          "",
          "Depolanacak ürün:",
          "Kullanım hacmi:",
          "Ürün sıcaklığı / yoğunluğu:",
          "Dolum ve boşaltım şekli:",
          "Saha ve kurulum ortamı:",
          "Özel ihtiyaçlar:",
        ],
      },
    },
    en: {
      meta: {
        title: "Storage Tank Manufacturer | Industrial Liquid Storage Tanks",
        description:
          "Industrial storage tanks for liquid fertilizer, process water and suitable chemical products. Volume, material and connections are selected for your product.",
      },
      breadcrumbLabel: "Storage Tank",
      h1: "Storage Tank – Industrial Storage for Liquid Products and Raw Materials",
      productCategory: "Storage Tank",
      overview: {
        imageAlt: "Vertical stainless steel storage tanks with top platforms and ladders",
        tagline: "Storage Tank",
        keyFacts: [
          { label: "Duty", value: "Storage of liquid products and raw materials" },
          { label: "Operation", value: "Usually atmospheric; pressurized storage assessed separately" },
          { label: "Level", value: "Level measurement and overflow control" },
          { label: "Extra equipment", value: "Insulation, heating or agitation only if required" },
        ],
        title: "Safe Storage and Buffer Volume in the Process Line",
        paragraphs: [
          "A storage tank is a tank in which liquid raw materials, intermediates or finished products are held safely before processing, filling or shipment. It provides a buffer volume that balances production and consumption.",
          "Tank geometry (vertical or horizontal cylindrical), working volume and shell material are defined by the type and chemical properties of the stored product and the site layout. Filling and discharge connections, venting, overflow, level measurement and manholes are planned together.",
          "Equipment such as insulation, heating or an agitator is not part of every storage tank; it is added only when the product's freezing, settling or viscosity behaviour requires it. If storage under pressure is needed, the tank is assessed with separate criteria.",
        ],
        note: "A storage tank is not a reactor or a dissolution tank; the product is stored, not processed. Process tanks are used for steps that require mixing or dissolution.",
      },
      process: {
        title: "Storage Tank Process Flow",
        intro:
          "The diagram shows the general flow in which product is received into the tank, stored with level monitoring and discharged to filling, processing or shipment when needed.",
        note: "While the tank fills and empties, the vent line balances internal pressure; overflow piping and level measurement help prevent overfilling.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Product receipt", text: "Product is pumped into the tank from the process line or a tanker." },
          { title: "Controlled storage", text: "Product is held in a shell made of material suited to it." },
          { title: "Level monitoring", text: "Level is measured; vent and overflow connections support safe filling." },
          { title: "Discharge on demand", text: "Product is transferred to the filling line, process or shipment when needed." },
        ],
        flow: {
          svgTitle: "Storage tank process flow diagram",
          svgDesc: "Product line: product receipt, storage and level monitoring in the storage tank, discharge on demand and filling, processing or shipment.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Product receipt", sub: "Process line / tanker" }],
          drum: { title: "STORAGE TANK", sub: "storage and level monitoring" },
          after: [
            { title: "Discharge", sub: "On demand" },
            { title: "Next step", sub: "Filling / process / shipment" },
          ],
        },
      },
      applications: {
        title: "Storage Tank Applications",
        items: [
          {
            title: "Liquid Fertilizer Products",
            text: "Storing prepared liquid fertilizers and humic solutions before filling or shipment. For products that tend to settle, the need for agitation or circulation is assessed separately.",
            imageAlt: "Dark liquid potassium humate dispersing in a beaker of water",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Filling Line Supply",
            text: "Providing an intermediate storage volume so the filling machine is fed without interruption. Tank volume is set by filling rate and the time between production batches.",
            imageAlt: "Liquid product being filled into jerry cans on a filling machine",
            linkLabel: "Packaging and Filling Systems",
          },
          {
            title: "Chemical Raw Materials and Intermediates",
            text: "Storing liquid chemical raw materials and intermediates used in the process. Shell material, gaskets and connections are selected for the chemical compatibility of the product.",
            imageAlt: "Columns, pipe racks and structures at a chemical process plant",
            linkLabel: "Chemical and Process Industry",
          },
        ],
      },
      design: {
        title: "Custom Storage Tank Design and Manufacturing",
        intro:
          "PRO MAKINA engineers storage tanks around the type and chemical properties of the stored product, working volume, site layout and filling and discharge arrangement. Shell and bottom, connections, venting, level measurement and access equipment are designed together.",
        highlights: [
          "Shell and bottom material suited to the product",
          "Filling, discharge and vent connections",
          "Level measurement and overflow control",
          "Platform, ladder and manhole",
        ],
        figureAlt: "Level instruments, pipe connections and a manhole on the top of storage tanks",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Stored Product", text: "Product type, density, temperature and chemical properties." },
          { title: "Volume and Geometry", text: "Working volume, vertical or horizontal design and layout dimensions." },
          { title: "Material and Corrosion", text: "Shell and bottom material, gaskets and chemical compatibility." },
          { title: "Connections and Venting", text: "Filling, discharge, vent, overflow and manholes." },
          { title: "Level, Site and Access", text: "Level measurement, foundation and support structure, platform and ladder." },
        ],
        dataNote: "Tank volume, shell thickness and material grade are defined from product and site data; no generic values are stated on this page.",
      },
      faq: {
        title: "Storage Tank FAQ",
        items: [
          {
            question: "What is a storage tank used for?",
            answer:
              "It holds liquid raw materials, intermediates or finished products safely before processing, filling or shipment, and provides a buffer volume.",
          },
          {
            question: "What is the difference between a storage tank and a reactor?",
            answer:
              "In a reactor the product undergoes a process such as mixing, dissolution or reaction. In a storage tank the product is not processed, only stored.",
          },
          {
            question: "Does every storage tank have an agitator or heating?",
            answer:
              "No. An agitator, heating or insulation is added only when the product's settling, freezing or viscosity behaviour requires it.",
          },
          {
            question: "Does a storage tank operate under pressure?",
            answer:
              "Liquid storage tanks are mostly atmospheric designs with venting to balance internal pressure. If storage under pressure is required, the tank is assessed with separate criteria.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Stored product and its properties, working volume, filling and discharge method, site layout and installation environment (indoor or outdoor).",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a storage tank",
        text: "Share the product to be stored, the volume and your site conditions, and we will define the storage tank together with you.",
        mailSubject: "Storage Tank Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Stored product and chemical properties",
          "Working volume",
          "Product temperature and density",
          "Filling and discharge method",
          "Site layout and installation environment",
          "Insulation, heating or agitation if required",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a storage tank.",
          "",
          "Stored product:",
          "Working volume:",
          "Product temperature / density:",
          "Filling and discharge method:",
          "Site and installation environment:",
          "Special requirements:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ёмкость хранения | Промышленные ёмкости для жидкостей",
        description:
          "Промышленные ёмкости хранения для жидких удобрений, технической воды и подходящих химических продуктов. Объём, материал и штуцеры — под ваш продукт.",
      },
      breadcrumbLabel: "Ёмкость хранения",
      h1: "Ёмкость хранения – промышленное хранение жидких продуктов и сырья",
      productCategory: "Ёмкость хранения",
      overview: {
        imageAlt: "Вертикальные ёмкости хранения из нержавеющей стали с площадками обслуживания и лестницами",
        tagline: "Ёмкость хранения",
        keyFacts: [
          { label: "Назначение", value: "Хранение жидких продуктов и сырья" },
          { label: "Режим", value: "Обычно атмосферный; хранение под давлением — отдельно" },
          { label: "Уровень", value: "Измерение уровня и защита от перелива" },
          { label: "Доп. оснащение", value: "Изоляция, обогрев или перемешивание — при необходимости" },
        ],
        title: "Безопасное хранение и буферный объём в технологической линии",
        paragraphs: [
          "Ёмкость хранения — резервуар, в котором жидкое сырьё, промежуточные или готовые продукты безопасно хранятся перед переработкой, розливом или отгрузкой. Она создаёт буферный объём, выравнивающий производство и потребление.",
          "Геометрия (вертикальная или горизонтальная цилиндрическая), рабочий объём и материал корпуса определяются видом и химическими свойствами продукта и компоновкой площадки. Штуцеры заполнения и выгрузки, дыхательная линия, перелив, измерение уровня и люки планируются совместно.",
          "Изоляция, обогрев или мешалка есть не в каждой ёмкости хранения; они добавляются, только если этого требует поведение продукта — замерзание, расслоение или вязкость. Если требуется хранение под давлением, ёмкость рассматривается по отдельным критериям.",
        ],
        note: "Ёмкость хранения — не реактор и не ёмкость растворения; продукт в ней хранится, а не перерабатывается. Для стадий перемешивания или растворения используются технологические ёмкости.",
      },
      process: {
        title: "Технологическая схема ёмкости хранения",
        intro:
          "Схема показывает общий поток: продукт принимается в ёмкость, хранится с контролем уровня и по мере необходимости выгружается на розлив, переработку или отгрузку.",
        note: "При заполнении и опорожнении дыхательная линия выравнивает внутреннее давление; линия перелива и измерение уровня помогают предотвратить переполнение.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Приём продукта", text: "Продукт закачивается в ёмкость из технологической линии или автоцистерны." },
          { title: "Контролируемое хранение", text: "Продукт хранится в корпусе из подходящего для него материала." },
          { title: "Контроль уровня", text: "Уровень измеряется; дыхательный и переливной штуцеры обеспечивают безопасное заполнение." },
          { title: "Выгрузка по потребности", text: "Продукт подаётся на розлив, в процесс или на отгрузку по мере необходимости." },
        ],
        flow: {
          svgTitle: "Технологическая схема ёмкости хранения",
          svgDesc: "Линия продукта: приём продукта, хранение и контроль уровня в ёмкости, выгрузка по потребности и розлив, переработка или отгрузка.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Приём продукта", sub: "Линия / автоцистерна" }],
          drum: { title: "ЁМКОСТЬ ХРАНЕНИЯ", sub: "хранение и контроль уровня" },
          after: [
            { title: "Выгрузка", sub: "По потребности" },
            { title: "Далее", sub: "Розлив / процесс / отгрузка" },
          ],
        },
      },
      applications: {
        title: "Области применения ёмкостей хранения",
        items: [
          {
            title: "Жидкие удобрения",
            text: "Хранение приготовленных жидких удобрений и гуминовых растворов перед розливом или отгрузкой. Для продуктов, склонных к расслоению, потребность в перемешивании или циркуляции оценивается отдельно.",
            imageAlt: "Тёмный жидкий гумат калия, растворяющийся в стакане с водой",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Питание линии розлива",
            text: "Создание промежуточного объёма для бесперебойной подачи продукта на машину розлива. Объём определяется скоростью розлива и временем между производственными партиями.",
            imageAlt: "Розлив жидкого продукта в канистры на разливочной машине",
            linkLabel: "Системы упаковки и розлива",
          },
          {
            title: "Химическое сырьё и полупродукты",
            text: "Хранение жидкого химического сырья и полупродуктов, используемых в процессе. Материал корпуса, прокладки и штуцеры подбираются по химической совместимости с продуктом.",
            imageAlt: "Колонны, эстакады и сооружения химического производства",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ёмкостей хранения",
        intro:
          "PRO MAKINA проектирует ёмкости хранения исходя из вида и химических свойств продукта, рабочего объёма, компоновки площадки и схемы заполнения и выгрузки. Корпус и днище, штуцеры, дыхательная линия, измерение уровня и средства доступа разрабатываются совместно.",
        highlights: [
          "Материал корпуса и днища под продукт",
          "Штуцеры заполнения, выгрузки и дыхания",
          "Измерение уровня и защита от перелива",
          "Площадка, лестница и люк",
        ],
        figureAlt: "Уровнемеры, трубные присоединения и люк на крыше ёмкостей хранения",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Хранимый продукт", text: "Вид продукта, плотность, температура и химические свойства." },
          { title: "Объём и геометрия", text: "Рабочий объём, вертикальное или горизонтальное исполнение, габариты." },
          { title: "Материал и коррозия", text: "Материал корпуса и днища, прокладки и химическая совместимость." },
          { title: "Штуцеры и дыхание", text: "Заполнение, выгрузка, дыхательная линия, перелив и люки." },
          { title: "Уровень, площадка и доступ", text: "Измерение уровня, фундамент и опорная конструкция, площадка и лестница." },
        ],
        dataNote: "Объём ёмкости, толщина стенки и марка материала определяются по данным продукта и площадки; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о ёмкостях хранения",
        items: [
          {
            question: "Для чего нужна ёмкость хранения?",
            answer:
              "Для безопасного хранения жидкого сырья, полупродуктов или готовой продукции перед переработкой, розливом или отгрузкой и создания буферного объёма.",
          },
          {
            question: "Чем ёмкость хранения отличается от реактора?",
            answer:
              "В реакторе продукт перемешивается, растворяется или вступает в реакцию. В ёмкости хранения продукт не перерабатывается, а только хранится.",
          },
          {
            question: "Есть ли в каждой ёмкости мешалка или обогрев?",
            answer:
              "Нет. Мешалка, обогрев или изоляция добавляются, только если этого требует расслоение, замерзание или вязкость продукта.",
          },
          {
            question: "Работает ли ёмкость хранения под давлением?",
            answer:
              "Ёмкости для жидкостей обычно атмосферные, внутреннее давление выравнивается дыхательной линией. Если требуется хранение под давлением, ёмкость рассматривается по отдельным критериям.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Хранимый продукт и его свойства, рабочий объём, способ заполнения и выгрузки, компоновка площадки и условия установки (в помещении или на открытом воздухе).",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ёмкость хранения",
        text: "Сообщите хранимый продукт, объём и условия площадки — вместе определим ёмкость хранения.",
        mailSubject: "Запрос предложения: ёмкость хранения",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Хранимый продукт и его химические свойства",
          "Рабочий объём",
          "Температура и плотность продукта",
          "Способ заполнения и выгрузки",
          "Компоновка площадки и условия установки",
          "Изоляция, обогрев или перемешивание при необходимости",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ёмкость хранения.",
          "",
          "Хранимый продукт:",
          "Рабочий объём:",
          "Температура / плотность:",
          "Способ заполнения и выгрузки:",
          "Площадка и условия установки:",
          "Особые требования:",
        ],
      },
    },
    ar: {
      meta: {
        title: "خزان التخزين | خزانات تخزين السوائل الصناعية",
        description:
          "خزانات تخزين صناعية للأسمدة السائلة ومياه العمليات والمنتجات الكيميائية المناسبة. يُختار الحجم والمادة والتوصيلات وفق منتجك.",
      },
      breadcrumbLabel: "خزان التخزين",
      h1: "خزان التخزين – تخزين صناعي للمنتجات والمواد الخام السائلة",
      productCategory: "خزان تخزين",
      overview: {
        imageAlt: "خزانات تخزين رأسية من الفولاذ المقاوم للصدأ بمنصات علوية وسلالم",
        tagline: "خزان تخزين",
        keyFacts: [
          { label: "المهمة", value: "تخزين المنتجات والمواد الخام السائلة" },
          { label: "التشغيل", value: "جوي غالبًا، ويُقيَّم التخزين المضغوط بشكل منفصل" },
          { label: "المستوى", value: "قياس المستوى والتحكم في الفيضان" },
          { label: "تجهيزات إضافية", value: "العزل أو التسخين أو الخلط عند الحاجة فقط" },
        ],
        title: "تخزين آمن وحجم احتياطي في خط العملية",
        paragraphs: [
          "خزان التخزين خزان تُحفظ فيه المواد الخام السائلة أو المنتجات الوسيطة أو النهائية بأمان قبل المعالجة أو التعبئة أو الشحن، ويوفّر حجمًا احتياطيًا يوازن بين الإنتاج والاستهلاك.",
          "يُحدَّد شكل الخزان (أسطواني رأسي أو أفقي) وحجم التشغيل ومادة الجسم وفق نوع المنتج المخزن وخصائصه الكيميائية وتخطيط الموقع، مع التخطيط معًا لتوصيلات التعبئة والتفريغ والتهوية وأنبوب الفيضان وقياس المستوى وفتحات الصيانة.",
          "لا تتوفر تجهيزات مثل العزل أو التسخين أو الخلاط في كل خزان تخزين، بل تُضاف فقط عندما يتطلب سلوك المنتج ذلك من حيث التجمد أو الترسب أو اللزوجة. وإذا لزم التخزين تحت الضغط يُقيَّم الخزان بمعايير منفصلة.",
        ],
        note: "خزان التخزين ليس مفاعلًا ولا خزان إذابة؛ فالمنتج يُخزَّن فيه ولا يُعالَج، وتُستخدم خزانات العمليات للمراحل التي تتطلب الخلط أو الإذابة.",
      },
      process: {
        title: "تدفق العملية في خزان التخزين",
        intro: "يوضح المخطط التدفق العام الذي يُستقبَل فيه المنتج في الخزان ويُخزَّن مع مراقبة المستوى ثم يُفرَّغ إلى التعبئة أو المعالجة أو الشحن عند الحاجة.",
        note: "أثناء امتلاء الخزان وتفريغه يوازن خط التهوية الضغط الداخلي، ويساعد أنبوب الفيضان وقياس المستوى على منع الامتلاء الزائد.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "استلام المنتج", text: "يُضخ المنتج إلى الخزان من خط العملية أو من صهريج." },
          { title: "تخزين متحكم به", text: "يُحفظ المنتج في جسم مصنوع من مادة مناسبة له." },
          { title: "مراقبة المستوى", text: "يُقاس المستوى، وتدعم توصيلات التهوية والفيضان التعبئة الآمنة." },
          { title: "التفريغ حسب الطلب", text: "يُنقل المنتج عند الحاجة إلى خط التعبئة أو العملية أو الشحن." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في خزان التخزين",
          svgDesc: "خط المنتج: استلام المنتج، التخزين ومراقبة المستوى في خزان التخزين، التفريغ حسب الطلب ثم التعبئة أو المعالجة أو الشحن.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "استلام المنتج", sub: "خط العملية / صهريج" }],
          drum: { title: "خزان التخزين", sub: "تخزين ومراقبة المستوى" },
          after: [
            { title: "التفريغ", sub: "حسب الطلب" },
            { title: "المرحلة التالية", sub: "تعبئة / عملية / شحن" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام خزان التخزين",
        items: [
          {
            title: "منتجات الأسمدة السائلة",
            text: "تخزين الأسمدة السائلة والمحاليل الهيومية المحضّرة قبل التعبئة أو الشحن، مع تقييم الحاجة إلى الخلط أو التدوير بشكل منفصل للمنتجات المعرضة للترسب.",
            imageAlt: "هيومات البوتاسيوم السائلة الداكنة تنتشر في كأس ماء",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "تغذية خط التعبئة",
            text: "توفير حجم تخزين وسيط لتغذية آلة التعبئة دون انقطاع، ويُحدَّد حجم الخزان وفق سرعة التعبئة والزمن بين دفعات الإنتاج.",
            imageAlt: "تعبئة منتج سائل في جالونات على آلة تعبئة",
            linkLabel: "أنظمة التعبئة والتغليف",
          },
          {
            title: "المواد الخام الكيميائية والمنتجات الوسيطة",
            text: "تخزين المواد الخام الكيميائية السائلة والمنتجات الوسيطة المستخدمة في العملية، مع اختيار مادة الجسم والحشوات والتوصيلات وفق التوافق الكيميائي للمنتج.",
            imageAlt: "أعمدة وجسور أنابيب ومنشآت في مصنع عمليات كيميائية",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع خزانات تخزين مخصصة",
        intro:
          "تصمم PRO MAKINA خزانات التخزين وفق نوع المنتج المخزن وخصائصه الكيميائية وحجم التشغيل وتخطيط الموقع وترتيب التعبئة والتفريغ، مع تصميم الجسم والقاع والتوصيلات والتهوية وقياس المستوى وتجهيزات الوصول معًا.",
        highlights: [
          "مادة جسم وقاع مناسبة للمنتج",
          "توصيلات التعبئة والتفريغ والتهوية",
          "قياس المستوى والتحكم في الفيضان",
          "منصة وسلم وفتحة صيانة",
        ],
        figureAlt: "أجهزة قياس المستوى وتوصيلات الأنابيب وفتحة دخول على سطح خزانات التخزين",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج المخزن", text: "نوع المنتج والكثافة ودرجة الحرارة والخصائص الكيميائية." },
          { title: "الحجم والشكل", text: "حجم التشغيل والتصميم الرأسي أو الأفقي وأبعاد التركيب." },
          { title: "المادة والتآكل", text: "مادة الجسم والقاع والحشوات والتوافق الكيميائي." },
          { title: "التوصيلات والتهوية", text: "التعبئة والتفريغ والتهوية والفيضان وفتحات الصيانة." },
          { title: "المستوى والموقع والوصول", text: "قياس المستوى والأساس والهيكل الحامل والمنصة والسلم." },
        ],
        dataNote: "يُحدَّد حجم الخزان وسماكة الجسم ودرجة المادة من بيانات المنتج والموقع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول خزان التخزين",
        items: [
          {
            question: "ما استخدام خزان التخزين؟",
            answer:
              "يحفظ المواد الخام السائلة أو المنتجات الوسيطة أو النهائية بأمان قبل المعالجة أو التعبئة أو الشحن، ويوفّر حجمًا احتياطيًا.",
          },
          {
            question: "ما الفرق بين خزان التخزين والمفاعل؟",
            answer:
              "في المفاعل يخضع المنتج لعملية مثل الخلط أو الإذابة أو التفاعل، أما في خزان التخزين فلا يُعالَج المنتج بل يُخزَّن فقط.",
          },
          {
            question: "هل يحتوي كل خزان تخزين على خلاط أو تسخين؟",
            answer: "لا. يُضاف الخلاط أو التسخين أو العزل فقط عندما يتطلب ترسب المنتج أو تجمده أو لزوجته ذلك.",
          },
          {
            question: "هل يعمل خزان التخزين تحت الضغط؟",
            answer:
              "تُصمَّم خزانات تخزين السوائل غالبًا بضغط جوي مع تهوية لموازنة الضغط الداخلي، وإذا لزم التخزين تحت الضغط يُقيَّم الخزان بمعايير منفصلة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "المنتج المخزن وخصائصه وحجم التشغيل وطريقة التعبئة والتفريغ وتخطيط الموقع وبيئة التركيب (داخلية أو خارجية).",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لخزان تخزين",
        text: "شاركنا المنتج المراد تخزينه والحجم وظروف موقعك، لنحدد معًا خزان التخزين المناسب.",
        mailSubject: "طلب عرض سعر: خزان تخزين",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "المنتج المخزن وخصائصه الكيميائية",
          "حجم التشغيل",
          "درجة حرارة المنتج وكثافته",
          "طريقة التعبئة والتفريغ",
          "تخطيط الموقع وبيئة التركيب",
          "العزل أو التسخين أو الخلط عند الحاجة",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لخزان تخزين.",
          "",
          "المنتج المخزن:",
          "حجم التشغيل:",
          "درجة الحرارة / الكثافة:",
          "طريقة التعبئة والتفريغ:",
          "الموقع وبيئة التركيب:",
          "متطلبات خاصة:",
        ],
      },
    },
  },
};
