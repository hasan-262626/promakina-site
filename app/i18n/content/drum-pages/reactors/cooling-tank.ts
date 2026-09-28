import type { DrumPageConfig } from "../types";

// Soğutma tankı: sıcak sıvı ürünün tank içinde kontrollü soğutulması (soğutma tamburu değildir).
// Ceket, serpantin, harici eşanjör veya karıştırıcı standart özellik olarak sunulmaz; yöntem projeye göre seçilir.
// Hacim, sıcaklık ve soğutma kapasitesi için sayısal değer verilmez. Ana görselin kaynağı doğrulanmamıştır.
const img = (file: string) => `/images/reaktor-tank/${file}`;
const app = (file: string) => `/images/tank-uygulamalari/${file}`;

export const coolingTankPage: DrumPageConfig = {
  key: "coolingTank",
  group: "reactorsTanks",
  trSlug: "sogutma-tanklari",
  mainImage: img("sivi14.png"),
  applications: [
    { image: app("sodyum-hidroksit.webp"), link: "chemicalProcess" },
    { image: app("sivi-potasyum-humat.webp"), link: "fertilizerPlants" },
    { image: "/images/sivi dolum/sividol1.jpg", link: "packagingSystems" },
  ],
  sectors: ["chemicalProcess", "fertilizerPlants"],
  resources: ["agitatedReactor", "dissolutionTank", "storageTank", "reactorsTanks"],
  machines: ["reactorsTanks", "packagingSystems", "dosingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Soğutma Tankı İmalatı | Sıvı Ürün Soğutma Tankları | PRO MAKİNA",
        description:
          "Sıcak sıvı ve pompalanabilir proses ürünlerinin kontrollü soğutulması için soğutma tankı imalatı. Soğutma yöntemi, hacim ve malzeme ürün verisine göre seçilir.",
      },
      breadcrumbLabel: "Soğutma Tankları",
      h1: "Soğutma Tankı – Sıvı Proses Ürünleri İçin Kontrollü Soğutma",
      productCategory: "Soğutma Tankı",
      overview: {
        imageAlt: "Gövdesi ceketli dikey paslanmaz çelik proses tankları",
        tagline: "Soğutma Tankı",
        keyFacts: [
          { label: "Görev", value: "Sıcak sıvı ürünün kontrollü soğutulması" },
          { label: "Soğutma yöntemi", value: "Ceket, serpantin veya harici eşanjör (projeye göre)" },
          { label: "Kontrol", value: "Ürün sıcaklığının ölçülmesi ve izlenmesi" },
          { label: "Hacim ve sıcaklıklar", value: "Proses verisine göre hesaplanır" },
        ],
        title: "Sıcak Sıvı Ürünün Hedef Sıcaklığa Getirilmesi",
        paragraphs: [
          "Soğutma tankı, reaksiyon, çözündürme veya ısıtma adımından sıcak çıkan sıvı ya da pompalanabilir ürünün, depolama, dolum veya sonraki proses için uygun sıcaklığa getirildiği proses tankıdır. Ürün tankta tutulurken ısısı bir soğutma akışkanına aktarılır.",
          "Isı transferi; gövdeye kaynaklı soğutma ceketi, tank içine yerleştirilen serpantin veya ürünün pompayla dolaştırıldığı harici eşanjör ile sağlanabilir. Hangi yöntemin kullanılacağı ürünün viskozitesi, temizlik ihtiyacı, çekilecek ısı ve sahadaki soğutma suyu imkânına göre belirlenir.",
          "Ürünün tank içinde homojen soğuması gerekiyorsa karıştırıcı eklenebilir. Karıştırıcı her soğutma tankında bulunmaz; düşük viskoziteli ve sirkülasyonla soğutulan ürünlerde gerekmeyebilir.",
        ],
        note: "Soğutma tankı, katı ve granül ürünleri hava ile soğutan soğutma tamburundan farklı bir ekipmandır; sıvı veya pompalanabilir ürünler için tasarlanır.",
      },
      process: {
        title: "Soğutma Tankı Proses Akışı",
        intro:
          "Şema, sıcak sıvı ürünün tanka alınıp kontrollü soğutulduğu ve hedef sıcaklığa ulaştıktan sonra tahliye edildiği genel akışı gösterir. Soğutma devresi (soğutma kulesi, chiller vb.) tesisin mevcut altyapısına göre ayrıca değerlendirilir.",
        note: "Soğutma süresi; ürün miktarı, giriş ve hedef çıkış sıcaklığı, ısı transfer yüzeyi ve soğutma akışkanının sıcaklığına bağlıdır. Bu değerler projeye göre hesaplanır.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Sıcak ürün besleme", text: "Önceki proses adımından gelen sıcak ürün pompa veya cazibe ile tanka alınır." },
          { title: "Kontrollü soğutma", text: "Ürünün ısısı ısı transfer yüzeyi üzerinden soğutma akışkanına aktarılır." },
          { title: "Sıcaklık izleme", text: "Ürün sıcaklığı ölçülür; soğutma akışkanı debisi gerekirse buna göre ayarlanır." },
          { title: "Soğutulmuş ürün tahliyesi", text: "Hedef sıcaklığa ulaşan ürün stok tankına, dolum hattına veya sonraki prosese aktarılır." },
        ],
        auxLineLabel: "Soğutma akışkanı hattı",
        auxLine: [
          { title: "Akışkan girişi", text: "Soğutma suyu veya projeye uygun soğutma akışkanı ısı transfer yüzeyine verilir." },
          { title: "Akışkan dönüşü", text: "Isınan akışkan tesisin soğutma devresine geri döner." },
        ],
        flow: {
          svgTitle: "Soğutma tankı proses akış şeması",
          svgDesc:
            "Ürün hattı: sıcak ürün besleme, soğutma tankı, sıcaklık kontrolü ve soğutulmuş ürün tahliyesi. Soğutma akışkanı hattı: akışkan girişi ve dönüşü.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Sıcak ürün", sub: "Reaktör / çözündürme" }],
          drum: { title: "SOĞUTMA TANKI", sub: "kontrollü soğutma" },
          after: [
            { title: "Sıcaklık kontrolü", sub: "Ölçüm ve izleme" },
            { title: "Tahliye", sub: "Stok / dolum" },
          ],
          aux: {
            lane: "SOĞUTMA AKIŞKANI",
            tone: "liquid",
            inputs: [{ title: "Akışkan girişi", sub: "Ceket / serpantin / eşanjör" }],
            outputs: [{ title: "Akışkan dönüşü", sub: "Soğutma devresi" }],
          },
        },
      },
      applications: {
        title: "Soğutma Tankı Uygulama Alanları",
        items: [
          {
            title: "Ekzotermik Kimyasal Çözeltiler",
            text: "Sodyum hidroksit gibi çözünürken ısı açığa çıkaran hammaddelerle hazırlanan çözeltilerin depolama veya kullanım öncesinde güvenli sıcaklığa getirilmesi. Gövde malzemesi çözeltinin korozifliğine göre seçilir.",
            imageAlt: "Saat camı üzerinde beyaz sodyum hidroksit peletleri",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Sıvı Gübre Prosesleri",
            text: "Isıtmalı ekstraksiyon veya çözündürme adımından sıcak çıkan sıvı gübre ürünlerinin stoklama ve dolum öncesinde soğutulması. Ürünün viskozitesi ısı transfer yöntemini doğrudan etkiler.",
            imageAlt: "Su dolu beherde çözünerek dağılan koyu renkli sıvı potasyum humat",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Dolum Öncesi Ürün Soğutma",
            text: "Sıcak hazırlanan sıvı ürünlerin plastik ambalaja dolumdan önce hedef sıcaklığa getirilmesi. Tank hacmi, dolum hattının çekiş hızı ve soğutma süresiyle birlikte belirlenir.",
            imageAlt: "Sıvı dolum makinesinde dolum nozulları altındaki plastik şişeler",
            linkLabel: "Paketleme ve Dolum Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Soğutma Tankı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA soğutma tanklarını ürünün türü ve fiziksel özellikleri, giriş ve hedef çıkış sıcaklığı, parti büyüklüğü veya debi ile sahadaki soğutma akışkanı imkânına göre projelendirir. Isı transfer yöntemi, gövde malzemesi, izolasyon ve bağlantılar birlikte seçilir.",
        highlights: [
          "Ürüne göre ısı transfer yöntemi seçimi",
          "Korozyona uygun gövde malzemesi",
          "Sıcaklık ölçümü ve izleme altyapısı",
          "Proses gerektirirse karıştırıcı",
        ],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, yoğunluk, viskozite ve korozif özellikler." },
          { title: "Sıcaklıklar", text: "Ürün giriş sıcaklığı ve hedef çıkış sıcaklığı." },
          { title: "Hacim ve Süre", text: "Parti hacmi veya sürekli debi ve izin verilen soğutma süresi." },
          { title: "Soğutma Yöntemi", text: "Ceket, serpantin veya harici eşanjör; soğutma akışkanı ve sıcaklığı." },
          { title: "Gövde ve Bağlantılar", text: "Malzeme, izolasyon, dolum, tahliye ve ölçüm bağlantıları." },
        ],
        dataNote: "Tank hacmi, ısı transfer yüzeyi ve soğutma kapasitesi ürün ve saha verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Soğutma Tankı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Soğutma tankı nasıl çalışır?",
            answer:
              "Sıcak ürün tankta tutulurken ısısı ceket, serpantin veya harici eşanjör gibi bir ısı transfer yüzeyi üzerinden soğutma akışkanına aktarılır. Ürün hedef sıcaklığa ulaşınca tahliye edilir.",
          },
          {
            question: "Soğutma tankı ile soğutma tamburu arasındaki fark nedir?",
            answer:
              "Soğutma tankı sıvı ve pompalanabilir ürünleri soğutur. Soğutma tamburu ise granül ve dökme katı ürünleri döner gövde içinde hava ile soğutur.",
          },
          {
            question: "Her soğutma tankında karıştırıcı var mıdır?",
            answer:
              "Hayır. Karıştırıcı, ürünün tank içinde homojen soğuması gerektiğinde eklenir. Düşük viskoziteli veya harici sirkülasyonla soğutulan ürünlerde gerekmeyebilir.",
          },
          {
            question: "Soğutma yöntemi nasıl seçilir?",
            answer:
              "Ürünün viskozitesi, çekilecek ısı miktarı, temizlik ihtiyacı, soğutma süresi ve tesisteki soğutma akışkanı imkânı birlikte değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün türü ve özellikleri, giriş ve hedef çıkış sıcaklığı, parti hacmi veya debi, izin verilen soğutma süresi ve mevcut soğutma akışkanı bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Soğutma tankı için teknik teklif alın",
        text: "Ürününüz, sıcaklık değerleriniz ve parti hacminize göre soğutma tankını birlikte netleştirelim.",
        mailSubject: "Soğutma Tankı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü, yoğunluk ve viskozite",
          "Ürün giriş sıcaklığı",
          "Hedef çıkış sıcaklığı",
          "Parti hacmi veya debi",
          "İzin verilen soğutma süresi",
          "Mevcut soğutma akışkanı",
        ],
        inquiryLines: [
          "Merhaba, soğutma tankı için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Giriş sıcaklığı (°C):",
          "Hedef çıkış sıcaklığı (°C):",
          "Parti hacmi veya debi:",
          "Soğutma süresi:",
          "Soğutma akışkanı:",
        ],
      },
    },
    en: {
      meta: {
        title: "Cooling Tank Manufacturer | Liquid Product Cooling Tanks",
        description:
          "Cooling tanks for controlled cooling of hot liquid and pumpable process products. Cooling method, volume and material are selected for your product data.",
      },
      breadcrumbLabel: "Cooling Tank",
      h1: "Cooling Tank – Controlled Cooling of Liquid Process Products",
      productCategory: "Cooling Tank",
      overview: {
        imageAlt: "Vertical stainless steel process tanks with jacketed shells",
        tagline: "Cooling Tank",
        keyFacts: [
          { label: "Duty", value: "Controlled cooling of hot liquid product" },
          { label: "Cooling method", value: "Jacket, coil or external heat exchanger (per project)" },
          { label: "Control", value: "Product temperature measurement and monitoring" },
          { label: "Volume and temperatures", value: "Calculated from process data" },
        ],
        title: "Bringing Hot Liquid Product to Its Target Temperature",
        paragraphs: [
          "A cooling tank is a process tank in which a hot liquid or pumpable product leaving a reaction, dissolution or heating step is brought to a suitable temperature for storage, filling or the next process. While the product is held in the tank, its heat is transferred to a cooling medium.",
          "Heat transfer can be provided by a cooling jacket welded to the shell, an internal coil, or an external heat exchanger through which the product is circulated by a pump. The method depends on product viscosity, cleaning requirements, the heat to be removed and the cooling medium available on site.",
          "An agitator can be added if the product must cool uniformly inside the tank. Not every cooling tank has an agitator; it may not be needed for low-viscosity products or products cooled by circulation.",
        ],
        note: "A cooling tank is different from a cooling drum, which cools solid and granular products with air; it is designed for liquid or pumpable products.",
      },
      process: {
        title: "Cooling Tank Process Flow",
        intro:
          "The diagram shows the general flow in which hot liquid product is received in the tank, cooled in a controlled way and discharged once it reaches the target temperature. The cooling circuit (cooling tower, chiller etc.) is assessed separately according to the plant's existing utilities.",
        note: "Cooling time depends on product quantity, inlet and target outlet temperature, heat transfer area and cooling medium temperature. These values are calculated per project.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Hot product feed", text: "Hot product from the previous step enters the tank by pump or gravity." },
          { title: "Controlled cooling", text: "Product heat is transferred to the cooling medium through the heat transfer surface." },
          { title: "Temperature monitoring", text: "Product temperature is measured; cooling medium flow is adjusted if required." },
          { title: "Discharge of cooled product", text: "Product at target temperature goes to a storage tank, filling line or the next process." },
        ],
        auxLineLabel: "Cooling medium line",
        auxLine: [
          { title: "Medium inlet", text: "Cooling water or a suitable cooling medium is supplied to the heat transfer surface." },
          { title: "Medium return", text: "The warmed medium returns to the plant cooling circuit." },
        ],
        flow: {
          svgTitle: "Cooling tank process flow diagram",
          svgDesc:
            "Product line: hot product feed, cooling tank, temperature control and discharge of cooled product. Cooling medium line: medium inlet and return.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Hot product", sub: "Reactor / dissolution" }],
          drum: { title: "COOLING TANK", sub: "controlled cooling" },
          after: [
            { title: "Temperature control", sub: "Measurement" },
            { title: "Discharge", sub: "Storage / filling" },
          ],
          aux: {
            lane: "COOLING MEDIUM",
            tone: "liquid",
            inputs: [{ title: "Medium inlet", sub: "Jacket / coil / exchanger" }],
            outputs: [{ title: "Medium return", sub: "Cooling circuit" }],
          },
        },
      },
      applications: {
        title: "Cooling Tank Applications",
        items: [
          {
            title: "Exothermic Chemical Solutions",
            text: "Bringing solutions made with raw materials that release heat on dissolving, such as sodium hydroxide, to a safe temperature before storage or use. Shell material is selected for the corrosiveness of the solution.",
            imageAlt: "White sodium hydroxide pellets on a watch glass",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Liquid Fertilizer Processes",
            text: "Cooling liquid fertilizer products that leave a heated extraction or dissolution step hot, before storage and filling. Product viscosity directly affects the heat transfer method.",
            imageAlt: "Dark liquid potassium humate dispersing in a beaker of water",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Cooling Before Filling",
            text: "Bringing hot-prepared liquid products to the target temperature before filling into plastic packaging. Tank volume is set together with the filling line rate and cooling time.",
            imageAlt: "Plastic bottles under the nozzles of a liquid filling machine",
            linkLabel: "Packaging and Filling Systems",
          },
        ],
      },
      design: {
        title: "Custom Cooling Tank Design and Manufacturing",
        intro:
          "PRO MAKINA engineers cooling tanks around the product type and physical properties, inlet and target outlet temperature, batch size or flow rate and the cooling medium available on site. Heat transfer method, shell material, insulation and connections are selected together.",
        highlights: [
          "Heat transfer method chosen for the product",
          "Shell material suited to corrosion",
          "Temperature measurement and monitoring",
          "Agitator if the process requires it",
        ],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, density, viscosity and corrosive properties." },
          { title: "Temperatures", text: "Product inlet temperature and target outlet temperature." },
          { title: "Volume and Time", text: "Batch volume or continuous flow and allowable cooling time." },
          { title: "Cooling Method", text: "Jacket, coil or external exchanger; cooling medium and its temperature." },
          { title: "Shell and Connections", text: "Material, insulation, filling, discharge and instrument connections." },
        ],
        dataNote: "Tank volume, heat transfer area and cooling capacity are calculated from product and site data; no generic values are stated on this page.",
      },
      faq: {
        title: "Cooling Tank FAQ",
        items: [
          {
            question: "How does a cooling tank work?",
            answer:
              "While hot product is held in the tank, its heat is transferred to a cooling medium through a heat transfer surface such as a jacket, coil or external exchanger. The product is discharged when it reaches the target temperature.",
          },
          {
            question: "What is the difference between a cooling tank and a cooling drum?",
            answer:
              "A cooling tank cools liquid and pumpable products. A cooling drum cools granular and bulk solid products with air inside a rotating shell.",
          },
          {
            question: "Does every cooling tank have an agitator?",
            answer:
              "No. An agitator is added when the product must cool uniformly in the tank. It may not be needed for low-viscosity products or products cooled by external circulation.",
          },
          {
            question: "How is the cooling method selected?",
            answer:
              "Product viscosity, the heat to be removed, cleaning requirements, cooling time and the cooling medium available at the plant are assessed together.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Product type and properties, inlet and target outlet temperature, batch volume or flow rate, allowable cooling time and the available cooling medium.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a cooling tank",
        text: "Share your product, temperatures and batch volume, and we will define the cooling tank together with you.",
        mailSubject: "Cooling Tank Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type, density and viscosity",
          "Product inlet temperature",
          "Target outlet temperature",
          "Batch volume or flow rate",
          "Allowable cooling time",
          "Available cooling medium",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a cooling tank.",
          "",
          "Product:",
          "Inlet temperature (°C):",
          "Target outlet temperature (°C):",
          "Batch volume or flow rate:",
          "Cooling time:",
          "Cooling medium:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ёмкость охлаждения | Охлаждение жидких технологических продуктов",
        description:
          "Ёмкости для контролируемого охлаждения горячих жидких и перекачиваемых продуктов. Способ охлаждения, объём и материал подбираются по данным продукта.",
      },
      breadcrumbLabel: "Ёмкость охлаждения",
      h1: "Ёмкость охлаждения – контролируемое охлаждение жидких продуктов",
      productCategory: "Ёмкость охлаждения",
      overview: {
        imageAlt: "Вертикальные ёмкости из нержавеющей стали с рубашкой на корпусе",
        tagline: "Ёмкость охлаждения",
        keyFacts: [
          { label: "Назначение", value: "Контролируемое охлаждение горячей жидкости" },
          { label: "Способ охлаждения", value: "Рубашка, змеевик или внешний теплообменник (по проекту)" },
          { label: "Контроль", value: "Измерение и контроль температуры продукта" },
          { label: "Объём и температуры", value: "Рассчитываются по технологическим данным" },
        ],
        title: "Доведение горячего жидкого продукта до заданной температуры",
        paragraphs: [
          "Ёмкость охлаждения — технологическая ёмкость, в которой горячий жидкий или перекачиваемый продукт после реакции, растворения или нагрева доводится до температуры, подходящей для хранения, розлива или следующего процесса. Пока продукт находится в ёмкости, его тепло передаётся охлаждающей среде.",
          "Теплообмен может обеспечиваться приварной охлаждающей рубашкой, внутренним змеевиком или внешним теплообменником, через который продукт прокачивается насосом. Способ выбирается по вязкости продукта, требованиям к очистке, отводимому теплу и доступной на площадке охлаждающей среде.",
          "Если продукт должен охлаждаться равномерно по объёму, может быть добавлена мешалка. Мешалка есть не в каждой ёмкости охлаждения; для маловязких продуктов или при охлаждении циркуляцией она может не требоваться.",
        ],
        note: "Ёмкость охлаждения отличается от охладительного барабана, который охлаждает твёрдые и гранулированные продукты воздухом; она предназначена для жидких и перекачиваемых продуктов.",
      },
      process: {
        title: "Технологическая схема ёмкости охлаждения",
        intro:
          "Схема показывает общий поток: горячий жидкий продукт принимается в ёмкость, контролируемо охлаждается и выгружается по достижении заданной температуры. Контур охлаждения (градирня, чиллер и т. п.) оценивается отдельно по имеющимся на заводе системам.",
        note: "Время охлаждения зависит от количества продукта, начальной и конечной температуры, площади теплообмена и температуры охлаждающей среды. Эти значения рассчитываются по проекту.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Подача горячего продукта", text: "Горячий продукт с предыдущей стадии поступает в ёмкость насосом или самотёком." },
          { title: "Контролируемое охлаждение", text: "Тепло продукта передаётся охлаждающей среде через поверхность теплообмена." },
          { title: "Контроль температуры", text: "Температура продукта измеряется; расход охлаждающей среды при необходимости регулируется." },
          { title: "Выгрузка охлаждённого продукта", text: "Продукт с заданной температурой подаётся в ёмкость хранения, на розлив или далее по процессу." },
        ],
        auxLineLabel: "Линия охлаждающей среды",
        auxLine: [
          { title: "Подача среды", text: "Охлаждающая вода или подходящая среда подаётся к поверхности теплообмена." },
          { title: "Возврат среды", text: "Нагретая среда возвращается в контур охлаждения завода." },
        ],
        flow: {
          svgTitle: "Технологическая схема ёмкости охлаждения",
          svgDesc:
            "Линия продукта: подача горячего продукта, ёмкость охлаждения, контроль температуры и выгрузка охлаждённого продукта. Линия охлаждающей среды: подача и возврат.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Горячий продукт", sub: "Реактор / растворение" }],
          drum: { title: "ЁМКОСТЬ ОХЛАЖДЕНИЯ", sub: "контролируемое охлаждение" },
          after: [
            { title: "Контроль t°", sub: "Измерение" },
            { title: "Выгрузка", sub: "Хранение / розлив" },
          ],
          aux: {
            lane: "ОХЛАЖДАЮЩАЯ СРЕДА",
            tone: "liquid",
            inputs: [{ title: "Подача среды", sub: "Рубашка / змеевик / ТО" }],
            outputs: [{ title: "Возврат среды", sub: "Контур охлаждения" }],
          },
        },
      },
      applications: {
        title: "Области применения ёмкостей охлаждения",
        items: [
          {
            title: "Экзотермические химические растворы",
            text: "Охлаждение до безопасной температуры растворов, приготовленных из веществ, выделяющих тепло при растворении (например, гидроксида натрия), перед хранением или использованием. Материал корпуса выбирается по коррозионности раствора.",
            imageAlt: "Белые гранулы гидроксида натрия на часовом стекле",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Производство жидких удобрений",
            text: "Охлаждение жидких удобрений, выходящих горячими после экстракции или растворения с нагревом, перед хранением и розливом. Вязкость продукта напрямую влияет на выбор способа теплообмена.",
            imageAlt: "Тёмный жидкий гумат калия, растворяющийся в стакане с водой",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Охлаждение перед розливом",
            text: "Доведение горячих жидких продуктов до заданной температуры перед розливом в пластиковую тару. Объём ёмкости определяется вместе с производительностью линии розлива и временем охлаждения.",
            imageAlt: "Пластиковые флаконы под дозирующими соплами машины розлива",
            linkLabel: "Системы упаковки и розлива",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ёмкостей охлаждения",
        intro:
          "PRO MAKINA проектирует ёмкости охлаждения исходя из вида и физических свойств продукта, начальной и конечной температуры, объёма партии или расхода и доступной на площадке охлаждающей среды. Способ теплообмена, материал корпуса, изоляция и присоединения подбираются совместно.",
        highlights: [
          "Способ теплообмена под продукт",
          "Материал корпуса с учётом коррозии",
          "Измерение и контроль температуры",
          "Мешалка, если требует процесс",
        ],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, плотность, вязкость и коррозионные свойства." },
          { title: "Температуры", text: "Температура продукта на входе и заданная на выходе." },
          { title: "Объём и время", text: "Объём партии или непрерывный расход и допустимое время охлаждения." },
          { title: "Способ охлаждения", text: "Рубашка, змеевик или внешний теплообменник; вид и температура среды." },
          { title: "Корпус и присоединения", text: "Материал, изоляция, штуцеры заполнения, выгрузки и КИП." },
        ],
        dataNote: "Объём ёмкости, площадь теплообмена и холодопроизводительность рассчитываются по данным продукта и площадки; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о ёмкостях охлаждения",
        items: [
          {
            question: "Как работает ёмкость охлаждения?",
            answer:
              "Пока горячий продукт находится в ёмкости, его тепло передаётся охлаждающей среде через поверхность теплообмена — рубашку, змеевик или внешний теплообменник. По достижении заданной температуры продукт выгружается.",
          },
          {
            question: "Чем ёмкость охлаждения отличается от охладительного барабана?",
            answer:
              "Ёмкость охлаждения охлаждает жидкие и перекачиваемые продукты. Охладительный барабан охлаждает гранулированные и сыпучие твёрдые продукты воздухом во вращающемся корпусе.",
          },
          {
            question: "Есть ли мешалка в каждой ёмкости охлаждения?",
            answer:
              "Нет. Мешалка добавляется, если продукт должен охлаждаться равномерно по объёму. Для маловязких продуктов или при внешней циркуляции она может не понадобиться.",
          },
          {
            question: "Как выбирается способ охлаждения?",
            answer:
              "Совместно оцениваются вязкость продукта, отводимое тепло, требования к очистке, время охлаждения и имеющаяся на заводе охлаждающая среда.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид и свойства продукта, начальная и конечная температура, объём партии или расход, допустимое время охлаждения и доступная охлаждающая среда.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ёмкость охлаждения",
        text: "Сообщите продукт, температуры и объём партии — вместе определим ёмкость охлаждения.",
        mailSubject: "Запрос предложения: ёмкость охлаждения",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта, плотность и вязкость",
          "Температура продукта на входе",
          "Заданная температура на выходе",
          "Объём партии или расход",
          "Допустимое время охлаждения",
          "Доступная охлаждающая среда",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ёмкость охлаждения.",
          "",
          "Продукт:",
          "Температура на входе (°C):",
          "Температура на выходе (°C):",
          "Объём партии или расход:",
          "Время охлаждения:",
          "Охлаждающая среда:",
        ],
      },
    },
    ar: {
      meta: {
        title: "خزان التبريد | تبريد المنتجات السائلة في العمليات الصناعية",
        description:
          "خزانات تبريد للتبريد المتحكم به للمنتجات السائلة والقابلة للضخ الساخنة. تُختار طريقة التبريد والحجم والمادة وفق بيانات المنتج.",
      },
      breadcrumbLabel: "خزان التبريد",
      h1: "خزان التبريد – تبريد متحكم به لمنتجات العمليات السائلة",
      productCategory: "خزان تبريد",
      overview: {
        imageAlt: "خزانات عمليات رأسية من الفولاذ المقاوم للصدأ بأجسام مزودة بقميص",
        tagline: "خزان تبريد",
        keyFacts: [
          { label: "المهمة", value: "تبريد متحكم به للمنتج السائل الساخن" },
          { label: "طريقة التبريد", value: "قميص أو ملف داخلي أو مبادل خارجي (حسب المشروع)" },
          { label: "التحكم", value: "قياس درجة حرارة المنتج ومراقبتها" },
          { label: "الحجم ودرجات الحرارة", value: "تُحسب من بيانات العملية" },
        ],
        title: "الوصول بالمنتج السائل الساخن إلى درجة الحرارة المستهدفة",
        paragraphs: [
          "خزان التبريد خزان عمليات يُبرَّد فيه المنتج السائل أو القابل للضخ الخارج ساخنًا من مرحلة تفاعل أو إذابة أو تسخين، حتى يصل إلى درجة حرارة مناسبة للتخزين أو التعبئة أو العملية التالية. وخلال بقاء المنتج في الخزان تنتقل حرارته إلى وسط تبريد.",
          "يمكن تحقيق انتقال الحرارة بقميص تبريد ملحوم على جسم الخزان، أو بملف داخل الخزان، أو بمبادل حراري خارجي يُدوَّر المنتج خلاله بمضخة. وتُحدَّد الطريقة وفق لزوجة المنتج ومتطلبات التنظيف وكمية الحرارة المطلوب إزالتها ووسط التبريد المتاح في الموقع.",
          "يمكن إضافة خلاط إذا كان يجب أن يبرد المنتج بشكل متجانس داخل الخزان. ولا يوجد خلاط في كل خزان تبريد، فقد لا يلزم للمنتجات منخفضة اللزوجة أو المبردة بالتدوير.",
        ],
        note: "يختلف خزان التبريد عن أسطوانة التبريد التي تبرد المنتجات الصلبة والحبيبية بالهواء، فهو مصمم للمنتجات السائلة أو القابلة للضخ.",
      },
      process: {
        title: "تدفق العملية في خزان التبريد",
        intro:
          "يوضح المخطط التدفق العام الذي يُستقبَل فيه المنتج السائل الساخن في الخزان ويُبرَّد بشكل متحكم به ثم يُفرَّغ عند بلوغه درجة الحرارة المستهدفة. أما دائرة التبريد (برج تبريد أو مبرد مياه وغيرهما) فتُقيَّم بشكل منفصل وفق المرافق المتوفرة في المصنع.",
        note: "يعتمد زمن التبريد على كمية المنتج ودرجتي حرارة الدخول والخروج المستهدفة ومساحة انتقال الحرارة ودرجة حرارة وسط التبريد، وتُحسب هذه القيم لكل مشروع.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تغذية المنتج الساخن", text: "يدخل المنتج الساخن من المرحلة السابقة إلى الخزان بمضخة أو بالجاذبية." },
          { title: "تبريد متحكم به", text: "تنتقل حرارة المنتج إلى وسط التبريد عبر سطح انتقال الحرارة." },
          { title: "مراقبة درجة الحرارة", text: "تُقاس درجة حرارة المنتج، ويُضبط تدفق وسط التبريد عند الحاجة." },
          { title: "تفريغ المنتج المبرد", text: "يُنقل المنتج بعد بلوغ الدرجة المستهدفة إلى خزان تخزين أو خط تعبئة أو العملية التالية." },
        ],
        auxLineLabel: "خط وسط التبريد",
        auxLine: [
          { title: "دخول الوسط", text: "تُزوَّد مياه التبريد أو وسط تبريد مناسب إلى سطح انتقال الحرارة." },
          { title: "عودة الوسط", text: "يعود الوسط الدافئ إلى دائرة التبريد في المصنع." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في خزان التبريد",
          svgDesc:
            "خط المنتج: تغذية المنتج الساخن، خزان التبريد، التحكم في درجة الحرارة، تفريغ المنتج المبرد. خط وسط التبريد: الدخول والعودة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "منتج ساخن", sub: "مفاعل / إذابة" }],
          drum: { title: "خزان التبريد", sub: "تبريد متحكم به" },
          after: [
            { title: "التحكم بالحرارة", sub: "القياس والمراقبة" },
            { title: "التفريغ", sub: "تخزين / تعبئة" },
          ],
          aux: {
            lane: "وسط التبريد",
            tone: "liquid",
            inputs: [{ title: "دخول الوسط", sub: "قميص / ملف / مبادل" }],
            outputs: [{ title: "عودة الوسط", sub: "دائرة التبريد" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام خزان التبريد",
        items: [
          {
            title: "المحاليل الكيميائية الطاردة للحرارة",
            text: "تبريد المحاليل المحضّرة من مواد تطلق حرارة عند ذوبانها، مثل هيدروكسيد الصوديوم، إلى درجة حرارة آمنة قبل التخزين أو الاستخدام، مع اختيار مادة الجسم وفق تآكلية المحلول.",
            imageAlt: "حبيبات بيضاء من هيدروكسيد الصوديوم على زجاجة ساعة",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
          {
            title: "عمليات الأسمدة السائلة",
            text: "تبريد منتجات الأسمدة السائلة التي تخرج ساخنة من مرحلة استخلاص أو إذابة بالتسخين قبل التخزين والتعبئة، إذ تؤثر لزوجة المنتج مباشرة في طريقة انتقال الحرارة.",
            imageAlt: "هيومات البوتاسيوم السائلة الداكنة تنتشر في كأس ماء",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "التبريد قبل التعبئة",
            text: "الوصول بالمنتجات السائلة المحضّرة ساخنة إلى الدرجة المستهدفة قبل تعبئتها في عبوات بلاستيكية، ويُحدَّد حجم الخزان مع سرعة خط التعبئة وزمن التبريد.",
            imageAlt: "عبوات بلاستيكية أسفل فوهات آلة تعبئة السوائل",
            linkLabel: "أنظمة التعبئة والتغليف",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع خزانات تبريد مخصصة",
        intro:
          "تصمم PRO MAKINA خزانات التبريد وفق نوع المنتج وخصائصه الفيزيائية ودرجتي حرارة الدخول والخروج المستهدفة وحجم الدفعة أو معدل التدفق ووسط التبريد المتاح في الموقع، مع اختيار طريقة انتقال الحرارة ومادة الجسم والعزل والتوصيلات معًا.",
        highlights: [
          "طريقة انتقال حرارة مناسبة للمنتج",
          "مادة جسم ملائمة لمقاومة التآكل",
          "قياس درجة الحرارة ومراقبتها",
          "خلاط إذا تطلبت العملية ذلك",
        ],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج والكثافة واللزوجة والخصائص التآكلية." },
          { title: "درجات الحرارة", text: "درجة حرارة دخول المنتج ودرجة الخروج المستهدفة." },
          { title: "الحجم والزمن", text: "حجم الدفعة أو التدفق المستمر وزمن التبريد المسموح." },
          { title: "طريقة التبريد", text: "قميص أو ملف أو مبادل خارجي، ونوع وسط التبريد ودرجة حرارته." },
          { title: "الجسم والتوصيلات", text: "المادة والعزل وفتحات التعبئة والتفريغ والقياس." },
        ],
        dataNote: "يُحسب حجم الخزان ومساحة انتقال الحرارة وسعة التبريد من بيانات المنتج والموقع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول خزان التبريد",
        items: [
          {
            question: "كيف يعمل خزان التبريد؟",
            answer:
              "خلال بقاء المنتج الساخن في الخزان تنتقل حرارته إلى وسط تبريد عبر سطح انتقال حرارة مثل القميص أو الملف أو المبادل الخارجي، ثم يُفرَّغ المنتج عند بلوغ الدرجة المستهدفة.",
          },
          {
            question: "ما الفرق بين خزان التبريد وأسطوانة التبريد؟",
            answer:
              "يبرد خزان التبريد المنتجات السائلة والقابلة للضخ، بينما تبرد أسطوانة التبريد المنتجات الحبيبية والصلبة السائبة بالهواء داخل جسم دوّار.",
          },
          {
            question: "هل يحتوي كل خزان تبريد على خلاط؟",
            answer:
              "لا. يُضاف الخلاط عندما يجب أن يبرد المنتج بشكل متجانس داخل الخزان، وقد لا يلزم للمنتجات منخفضة اللزوجة أو المبردة بالتدوير الخارجي.",
          },
          {
            question: "كيف تُختار طريقة التبريد؟",
            answer:
              "تُقيَّم معًا لزوجة المنتج وكمية الحرارة المطلوب إزالتها ومتطلبات التنظيف وزمن التبريد ووسط التبريد المتوفر في المصنع.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المنتج وخصائصه ودرجتا حرارة الدخول والخروج المستهدفة وحجم الدفعة أو التدفق وزمن التبريد المسموح ووسط التبريد المتاح.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لخزان تبريد",
        text: "شاركنا منتجك ودرجات الحرارة وحجم الدفعة، لنحدد معًا خزان التبريد المناسب.",
        mailSubject: "طلب عرض سعر: خزان تبريد",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج والكثافة واللزوجة",
          "درجة حرارة دخول المنتج",
          "درجة حرارة الخروج المستهدفة",
          "حجم الدفعة أو التدفق",
          "زمن التبريد المسموح",
          "وسط التبريد المتاح",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لخزان تبريد.",
          "",
          "المنتج:",
          "درجة حرارة الدخول (°م):",
          "درجة حرارة الخروج المستهدفة (°م):",
          "حجم الدفعة أو التدفق:",
          "زمن التبريد:",
          "وسط التبريد:",
        ],
      },
    },
  },
};
