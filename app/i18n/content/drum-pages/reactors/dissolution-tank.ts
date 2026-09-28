import type { DrumPageConfig } from "../types";

// Çözündürme tankı: uygun katı hammaddelerin sıvı içinde kontrollü çözündürülmesi / çözelti hazırlama.
// Süspansiyon hazırlama ve kimyasal reaksiyonla karıştırılmaz; çözünme süresi veya konsantrasyon garantisi verilmez.
// Ana görsel mevcut ürün görselidir; kaynağı doğrulanmamıştır.
const img = (file: string) => `/images/reaktor-tank/${file}`;
const app = (file: string) => `/images/tank-uygulamalari/${file}`;

export const dissolutionTankPage: DrumPageConfig = {
  key: "dissolutionTank",
  group: "reactorsTanks",
  trSlug: "cozundurme-tanklari",
  mainImage: img("sivi2.png"),
  applications: [
    { image: app("potasyum-nitrat.webp"), link: "fertilizerPlants" },
    { image: app("sodyum-hidroksit.webp"), link: "coolingTank" },
  ],
  sectors: ["fertilizerPlants", "chemicalProcess", "sludgeDrying"],
  resources: ["agitatedReactor", "coolingTank", "storageTank", "dosingSystems"],
  machines: ["reactorsTanks", "dosingSystems", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Çözündürme Tankı İmalatı | Çözelti Hazırlama Tankları | PRO MAKİNA",
        description:
          "Suda çözünebilen katı hammaddelerden kontrollü çözelti hazırlamak için çözündürme tankı imalatı. Besleme, karıştırma ve malzeme hammaddeye göre seçilir.",
      },
      breadcrumbLabel: "Çözündürme Tankları",
      h1: "Çözündürme Tankı – Katı Hammaddeden Kontrollü Çözelti Hazırlama",
      productCategory: "Çözündürme Tankı",
      overview: {
        imageAlt: "Toz hammaddenin hortumla sıvı hazırlama tankına beslendiği paslanmaz çelik düzenek",
        tagline: "Çözündürme Tankı",
        keyFacts: [
          { label: "Görev", value: "Katı hammaddenin sıvı içinde kontrollü çözündürülmesi" },
          { label: "Besleme", value: "Katı ve sıvı besleme düzeni projeye göre" },
          { label: "Karıştırma", value: "Karıştırıcı tipi ve devir hammaddeye göre" },
          { label: "Çözelti", value: "Konsantrasyon ve sıcaklık çözünürlük verisiyle belirlenir" },
        ],
        title: "Uygun Katı Hammaddeden Homojen Çözelti",
        paragraphs: [
          "Çözündürme tankı, suda veya başka bir çözücüde çözünebilen katı hammaddelerin kontrollü şekilde çözündürülerek hedef konsantrasyonda çözelti hazırlandığı proses tankıdır. Sıvı gübre hazırlama, kimyasal çözelti hazırlama ve reçete öncesi ön hazırlık adımlarında kullanılır.",
          "Bir hammaddenin ne kadar ve ne hızla çözüneceği; çözünürlüğüne, çözücü sıcaklığına, tane boyutuna ve karıştırma yoğunluğuna bağlıdır. Hedef konsantrasyon, çalışma sıcaklığındaki çözünürlük sınırının altında seçilmelidir; aksi hâlde çözünmeyen katı tankta kalır veya soğuyan çözeltide kristalleşme görülebilir.",
          "Çözünmeyen katı, safsızlık ve tortu için konik taban, dip tahliyesi veya sonraki adımda filtrasyon planlanabilir. Bazı hammaddeler çözünürken ısı açığa çıkarır ya da ısı çeker; bu durumda ısıtma veya soğutma ihtiyacı ayrıca değerlendirilir.",
        ],
        note: "Çözündürme; katıların çözünmeden sıvıda askıda tutulduğu süspansiyon hazırlamadan ve yeni ürün oluşturan kimyasal reaksiyondan farklı bir işlemdir. Bu işler için karıştırıcılı reaktör değerlendirilir.",
      },
      process: {
        title: "Çözündürme Tankı Proses Akışı",
        intro:
          "Şema, çözücü ve katı hammaddenin tanka beslendiği, karıştırma altında çözündürüldüğü, çözeltinin kontrol edildiği ve sonraki prosese aktarıldığı genel akışı gösterir. Besleme sırası ve miktarları reçeteye göre belirlenir.",
        note: "Çözünme süresi hammaddeye, tane boyutuna, sıcaklığa ve karıştırmaya bağlıdır; sayfada süre veya konsantrasyon garantisi verilmez.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Sıvı ve katı besleme", text: "Önce çözücü alınır; katı hammadde torba, big-bag veya helezon ile kontrollü eklenir." },
          { title: "Karıştırmalı çözündürme", text: "Karıştırıcı katıyı askıda tutarak sıvıyla temasını artırır ve çözünmeyi hızlandırır." },
          { title: "Çözelti kontrolü", text: "Sıcaklık ve seviye izlenir; gerekirse numune alınarak yoğunluk veya pH kontrol edilir." },
          { title: "Ürün transferi", text: "Hazır çözelti filtre, stok tankı veya sonraki proses adımına pompalanır." },
        ],
        auxLineLabel: "Isıtma / soğutma hattı (gerekirse)",
        auxLine: [
          { title: "Isıtma veya soğutma", text: "Çözünürlük veya çözünme ısısı gerektiriyorsa ceket ya da serpantine akışkan verilir." },
          { title: "Akışkan dönüşü", text: "Akışkan tesisin yardımcı devresine geri döner." },
        ],
        flow: {
          svgTitle: "Çözündürme tankı proses akış şeması",
          svgDesc:
            "Ürün hattı: sıvı ve katı besleme, çözündürme tankı, çözelti kontrolü ve ürün transferi. Gerekirse ısıtma veya soğutma akışkanı hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Sıvı ve katı besleme", sub: "Çözücü + hammadde" }],
          drum: { title: "ÇÖZÜNDÜRME TANKI", sub: "karıştırmalı çözündürme" },
          after: [
            { title: "Çözelti kontrolü", sub: "Sıcaklık, seviye, numune" },
            { title: "Transfer", sub: "Filtre / stok / proses" },
          ],
          aux: {
            lane: "ISITMA / SOĞUTMA (GEREKİRSE)",
            tone: "heat",
            inputs: [{ title: "Akışkan girişi", sub: "Ceket / serpantin" }],
            outputs: [{ title: "Akışkan dönüşü", sub: "Yardımcı devre" }],
          },
        },
      },
      applications: {
        title: "Çözündürme Tankı Uygulama Alanları",
        items: [
          {
            title: "Suda Çözünür Gübre Hammaddeleri",
            text: "Potasyum nitrat gibi suda çözünebilen gübre hammaddelerinden sıvı gübre veya reçete çözeltisi hazırlanması. Hedef konsantrasyon, çalışma sıcaklığındaki çözünürlüğe göre belirlenir.",
            imageAlt: "Siyah kap içinde beyaz kristal potasyum nitrat gübresi",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Kimyasal Çözelti Hazırlama",
            text: "Sodyum hidroksit gibi kimyasalların suda çözündürülerek proses çözeltisi hazırlanması. Çözünürken ısı açığa çıkaran hammaddelerde çözelti, kullanım öncesinde soğutma tankında güvenli sıcaklığa getirilebilir.",
            imageAlt: "Saat camı üzerinde beyaz sodyum hidroksit peletleri",
            linkLabel: "Soğutma Tankları",
          },
        ],
      },
      design: {
        title: "Projeye Özel Çözündürme Tankı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA çözündürme tanklarını hammadde ve çözücüye, hedef konsantrasyona, parti büyüklüğüne ve hammaddenin kimyasal özelliklerine göre projelendirir. Katı besleme düzeni, karıştırıcı, gövde malzemesi, tortu yönetimi ve bağlantılar birlikte tasarlanır.",
        highlights: [
          "Katı besleme ağzı ve toz kontrolü",
          "Hammaddeye göre karıştırıcı ve devir",
          "Kimyasal uyumlu gövde malzemesi",
          "Konik taban, dip tahliyesi ve numune noktası",
        ],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde ve Çözücü", text: "Katı hammaddenin türü, tane boyutu ve çözücü." },
          { title: "Konsantrasyon ve Sıcaklık", text: "Hedef konsantrasyon, çözünürlük verisi ve çalışma sıcaklığı." },
          { title: "Hacim ve Besleme", text: "Parti büyüklüğü, katı ve sıvı besleme yöntemi." },
          { title: "Karıştırma", text: "Karıştırıcı tipi, devir ve gerekirse sirkülasyon." },
          { title: "Malzeme, Tahliye ve Ölçüm", text: "Korozyon uyumu, tortu yönetimi, seviye ve sıcaklık ölçümü." },
        ],
        dataNote: "Tank hacmi, karıştırıcı devri ve çözünme süresi hammadde ve reçete verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Çözündürme Tankı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Çözündürme tankı ne işe yarar?",
            answer:
              "Suda veya başka bir çözücüde çözünebilen katı hammaddelerin karıştırma altında çözündürülerek hedef konsantrasyonda çözelti hazırlanmasını sağlar.",
          },
          {
            question: "Her hammadde çözündürme tankında çözünür mü?",
            answer:
              "Hayır. Yalnızca seçilen çözücüde çözünebilen hammaddeler çözünür ve çözünebilecek miktar sıcaklığa bağlı çözünürlük sınırıyla belirlenir.",
          },
          {
            question: "Çözündürme ile süspansiyon hazırlama arasındaki fark nedir?",
            answer:
              "Çözündürmede katı sıvı içinde tamamen çözünür. Süspansiyonda ise katı çözünmeden sıvıda askıda tutulur; bu iş için karıştırıcılı reaktör değerlendirilir.",
          },
          {
            question: "Çözünmeyen katı ve tortu nasıl yönetilir?",
            answer:
              "Konik taban ve dip tahliyesi ile tortu tanktan alınabilir; gerekirse çözelti sonraki adımda filtre edilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Hammadde ve çözücü, hedef konsantrasyon, parti büyüklüğü, çalışma sıcaklığı, katı besleme şekli ve kimyasal özellikler temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Çözündürme tankı için teknik teklif alın",
        text: "Hammaddeniz, çözücünüz ve hedef konsantrasyonunuza göre çözündürme tankını birlikte netleştirelim.",
        mailSubject: "Çözündürme Tankı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Katı hammadde ve çözücü",
          "Hedef çözelti konsantrasyonu",
          "Parti büyüklüğü",
          "Çalışma sıcaklığı",
          "Katı besleme şekli (torba, big-bag, helezon)",
          "Kimyasal özellikler ve korozyon koşulları",
        ],
        inquiryLines: [
          "Merhaba, çözündürme tankı için teknik teklif almak istiyorum.",
          "",
          "Hammadde ve çözücü:",
          "Hedef konsantrasyon:",
          "Parti büyüklüğü:",
          "Çalışma sıcaklığı:",
          "Katı besleme şekli:",
          "Kimyasal özellikler:",
        ],
      },
    },
    en: {
      meta: {
        title: "Dissolution Tank Manufacturer | Solution Preparation Tanks",
        description:
          "Dissolution tanks for preparing controlled solutions from water-soluble solid raw materials. Feeding, agitation and material are selected for the raw material.",
      },
      breadcrumbLabel: "Dissolution Tank",
      h1: "Dissolution Tank – Controlled Solution Preparation from Solid Raw Materials",
      productCategory: "Dissolution Tank",
      overview: {
        imageAlt: "Stainless steel setup in which powder is fed by hose into a liquid preparation tank",
        tagline: "Dissolution Tank",
        keyFacts: [
          { label: "Duty", value: "Controlled dissolution of solid raw material in liquid" },
          { label: "Feeding", value: "Solid and liquid feed arrangement per project" },
          { label: "Agitation", value: "Agitator type and speed per raw material" },
          { label: "Solution", value: "Concentration and temperature from solubility data" },
        ],
        title: "A Homogeneous Solution from a Suitable Solid Raw Material",
        paragraphs: [
          "A dissolution tank is a process tank in which solid raw materials that are soluble in water or another solvent are dissolved in a controlled way to prepare a solution at the target concentration. It is used for liquid fertilizer preparation, chemical solution preparation and pre-mixing steps before formulation.",
          "How much of a raw material dissolves, and how fast, depends on its solubility, solvent temperature, particle size and agitation intensity. The target concentration must be below the solubility limit at the operating temperature; otherwise undissolved solids remain in the tank or crystallization can occur as the solution cools.",
          "A conical bottom, bottom drain or downstream filtration can be planned for undissolved solids, impurities and sediment. Some raw materials release or absorb heat on dissolving; in that case the need for heating or cooling is assessed separately.",
        ],
        note: "Dissolution is different from suspension preparation, where solids are kept undissolved in the liquid, and from a chemical reaction that forms a new product. An agitated reactor is assessed for those duties.",
      },
      process: {
        title: "Dissolution Tank Process Flow",
        intro:
          "The diagram shows the general flow in which solvent and solid raw material are fed to the tank, dissolved under agitation, the solution is checked and transferred to the next process. Feed order and quantities follow the recipe.",
        note: "Dissolution time depends on raw material, particle size, temperature and agitation; no time or concentration guarantee is given on this page.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Liquid and solid feed", text: "Solvent is charged first; solids are added in a controlled way from bags, big bags or a screw." },
          { title: "Dissolution under agitation", text: "The agitator keeps solids suspended, increasing contact with the liquid and speeding up dissolution." },
          { title: "Solution check", text: "Temperature and level are monitored; samples are taken for density or pH if required." },
          { title: "Product transfer", text: "The finished solution is pumped to a filter, storage tank or the next process step." },
        ],
        auxLineLabel: "Heating / cooling line (if required)",
        auxLine: [
          { title: "Heating or cooling", text: "If solubility or heat of dissolution requires it, a medium is supplied to the jacket or coil." },
          { title: "Medium return", text: "The medium returns to the plant utility circuit." },
        ],
        flow: {
          svgTitle: "Dissolution tank process flow diagram",
          svgDesc:
            "Product line: liquid and solid feed, dissolution tank, solution check and product transfer. Heating or cooling medium line if required.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Liquid & solid feed", sub: "Solvent + raw material" }],
          drum: { title: "DISSOLUTION TANK", sub: "dissolution under agitation" },
          after: [
            { title: "Solution check", sub: "Temperature, level, sample" },
            { title: "Transfer", sub: "Filter / storage / process" },
          ],
          aux: {
            lane: "HEATING / COOLING (IF REQUIRED)",
            tone: "heat",
            inputs: [{ title: "Medium inlet", sub: "Jacket / coil" }],
            outputs: [{ title: "Medium return", sub: "Utility circuit" }],
          },
        },
      },
      applications: {
        title: "Dissolution Tank Applications",
        items: [
          {
            title: "Water-Soluble Fertilizer Raw Materials",
            text: "Preparing liquid fertilizer or recipe solutions from water-soluble fertilizer raw materials such as potassium nitrate. Target concentration is set by the solubility at operating temperature.",
            imageAlt: "White crystalline potassium nitrate fertilizer in a black dish",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Chemical Solution Preparation",
            text: "Preparing process solutions by dissolving chemicals such as sodium hydroxide in water. For raw materials that release heat on dissolving, the solution can be brought to a safe temperature in a cooling tank before use.",
            imageAlt: "White sodium hydroxide pellets on a watch glass",
            linkLabel: "Cooling Tank",
          },
        ],
      },
      design: {
        title: "Custom Dissolution Tank Design and Manufacturing",
        intro:
          "PRO MAKINA engineers dissolution tanks around the raw material and solvent, target concentration, batch size and the chemical properties of the raw material. Solid feed arrangement, agitator, shell material, sediment handling and connections are designed together.",
        highlights: [
          "Solids inlet and dust control",
          "Agitator and speed for the raw material",
          "Chemically compatible shell material",
          "Conical bottom, bottom drain and sampling point",
        ],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material and Solvent", text: "Type and particle size of the solid raw material, and the solvent." },
          { title: "Concentration and Temperature", text: "Target concentration, solubility data and operating temperature." },
          { title: "Volume and Feeding", text: "Batch size, solid and liquid feeding method." },
          { title: "Agitation", text: "Agitator type, speed and circulation if needed." },
          { title: "Material, Discharge and Instruments", text: "Corrosion compatibility, sediment handling, level and temperature measurement." },
        ],
        dataNote: "Tank volume, agitator speed and dissolution time are defined from raw material and recipe data; no generic values are stated on this page.",
      },
      faq: {
        title: "Dissolution Tank FAQ",
        items: [
          {
            question: "What is a dissolution tank used for?",
            answer:
              "It is used to dissolve solid raw materials that are soluble in water or another solvent under agitation, preparing a solution at the target concentration.",
          },
          {
            question: "Does every raw material dissolve in a dissolution tank?",
            answer:
              "No. Only raw materials soluble in the chosen solvent dissolve, and the amount that can dissolve is limited by the temperature-dependent solubility.",
          },
          {
            question: "What is the difference between dissolution and suspension preparation?",
            answer:
              "In dissolution the solid dissolves completely in the liquid. In a suspension the solid stays undissolved and is kept suspended; an agitated reactor is assessed for that duty.",
          },
          {
            question: "How are undissolved solids and sediment handled?",
            answer:
              "Sediment can be removed through a conical bottom and bottom drain; the solution can be filtered in the next step if required.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Raw material and solvent, target concentration, batch size, operating temperature, solid feeding method and chemical properties.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a dissolution tank",
        text: "Share your raw material, solvent and target concentration, and we will define the dissolution tank together with you.",
        mailSubject: "Dissolution Tank Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Solid raw material and solvent",
          "Target solution concentration",
          "Batch size",
          "Operating temperature",
          "Solid feeding method (bags, big bags, screw)",
          "Chemical properties and corrosion conditions",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a dissolution tank.",
          "",
          "Raw material and solvent:",
          "Target concentration:",
          "Batch size:",
          "Operating temperature:",
          "Solid feeding method:",
          "Chemical properties:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ёмкость растворения | Ёмкости для приготовления растворов",
        description:
          "Ёмкости растворения для приготовления растворов заданной концентрации из растворимого твёрдого сырья. Загрузка, перемешивание и материал — под сырьё.",
      },
      breadcrumbLabel: "Ёмкость растворения",
      h1: "Ёмкость растворения – приготовление растворов из твёрдого сырья",
      productCategory: "Ёмкость растворения",
      overview: {
        imageAlt: "Установка из нержавеющей стали, где порошок по шлангу подаётся в ёмкость приготовления раствора",
        tagline: "Ёмкость растворения",
        keyFacts: [
          { label: "Назначение", value: "Контролируемое растворение твёрдого сырья в жидкости" },
          { label: "Загрузка", value: "Схема подачи твёрдой и жидкой фазы по проекту" },
          { label: "Перемешивание", value: "Тип и частота вращения мешалки под сырьё" },
          { label: "Раствор", value: "Концентрация и температура по данным растворимости" },
        ],
        title: "Однородный раствор из подходящего твёрдого сырья",
        paragraphs: [
          "Ёмкость растворения — технологическая ёмкость, в которой твёрдое сырьё, растворимое в воде или другом растворителе, контролируемо растворяется для получения раствора заданной концентрации. Применяется для приготовления жидких удобрений, химических растворов и предварительной подготовки перед рецептурой.",
          "Количество и скорость растворения зависят от растворимости вещества, температуры растворителя, размера частиц и интенсивности перемешивания. Целевая концентрация должна быть ниже предела растворимости при рабочей температуре; иначе нерастворённая часть останется в ёмкости или при охлаждении раствора возможна кристаллизация.",
          "Для нерастворённых частиц, примесей и осадка предусматриваются коническое днище, нижний слив или последующая фильтрация. Некоторые вещества при растворении выделяют или поглощают тепло; тогда потребность в нагреве или охлаждении оценивается отдельно.",
        ],
        note: "Растворение отличается от приготовления суспензии, где твёрдая фаза остаётся нерастворённой во взвеси, и от химической реакции, образующей новый продукт. Для таких задач рассматривается реактор с мешалкой.",
      },
      process: {
        title: "Технологическая схема ёмкости растворения",
        intro:
          "Схема показывает общий поток: растворитель и твёрдое сырьё подаются в ёмкость, растворяются при перемешивании, раствор проверяется и передаётся далее. Порядок и количество загрузки определяются рецептурой.",
        note: "Время растворения зависит от сырья, размера частиц, температуры и перемешивания; гарантии времени или концентрации не приводятся.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Подача жидкости и твёрдого", text: "Сначала заливается растворитель; твёрдое сырьё добавляется из мешков, биг-бэгов или шнеком." },
          { title: "Растворение при перемешивании", text: "Мешалка удерживает частицы во взвеси, увеличивая контакт с жидкостью и ускоряя растворение." },
          { title: "Контроль раствора", text: "Контролируются температура и уровень; при необходимости отбираются пробы на плотность или pH." },
          { title: "Передача продукта", text: "Готовый раствор перекачивается на фильтр, в ёмкость хранения или на следующую стадию." },
        ],
        auxLineLabel: "Линия нагрева / охлаждения (при необходимости)",
        auxLine: [
          { title: "Нагрев или охлаждение", text: "Если этого требует растворимость или теплота растворения, в рубашку или змеевик подаётся среда." },
          { title: "Возврат среды", text: "Среда возвращается во вспомогательный контур завода." },
        ],
        flow: {
          svgTitle: "Технологическая схема ёмкости растворения",
          svgDesc:
            "Линия продукта: подача жидкости и твёрдого сырья, ёмкость растворения, контроль раствора и передача продукта. Линия нагрева или охлаждения при необходимости.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Подача сырья", sub: "Растворитель + твёрдое" }],
          drum: { title: "ЁМКОСТЬ РАСТВОРЕНИЯ", sub: "растворение с мешалкой" },
          after: [
            { title: "Контроль раствора", sub: "t°, уровень, проба" },
            { title: "Передача", sub: "Фильтр / хранение" },
          ],
          aux: {
            lane: "НАГРЕВ / ОХЛАЖДЕНИЕ (ПРИ НЕОБХОДИМОСТИ)",
            tone: "heat",
            inputs: [{ title: "Подача среды", sub: "Рубашка / змеевик" }],
            outputs: [{ title: "Возврат среды", sub: "Вспом. контур" }],
          },
        },
      },
      applications: {
        title: "Области применения ёмкостей растворения",
        items: [
          {
            title: "Водорастворимое сырьё для удобрений",
            text: "Приготовление жидких удобрений или рецептурных растворов из водорастворимого сырья, например нитрата калия. Целевая концентрация определяется растворимостью при рабочей температуре.",
            imageAlt: "Белый кристаллический нитрат калия в чёрной чаше",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Приготовление химических растворов",
            text: "Приготовление технологических растворов растворением в воде химикатов, например гидроксида натрия. При выделении тепла при растворении раствор перед использованием можно охладить в ёмкости охлаждения.",
            imageAlt: "Белые гранулы гидроксида натрия на часовом стекле",
            linkLabel: "Ёмкость охлаждения",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ёмкостей растворения",
        intro:
          "PRO MAKINA проектирует ёмкости растворения исходя из сырья и растворителя, целевой концентрации, размера партии и химических свойств сырья. Узел загрузки твёрдого, мешалка, материал корпуса, удаление осадка и штуцеры разрабатываются совместно.",
        highlights: [
          "Люк загрузки твёрдого и контроль пыли",
          "Мешалка и частота вращения под сырьё",
          "Химически совместимый материал корпуса",
          "Коническое днище, нижний слив и пробоотбор",
        ],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё и растворитель", text: "Вид и крупность твёрдого сырья, растворитель." },
          { title: "Концентрация и температура", text: "Целевая концентрация, данные растворимости и рабочая температура." },
          { title: "Объём и загрузка", text: "Размер партии, способ подачи твёрдой и жидкой фазы." },
          { title: "Перемешивание", text: "Тип мешалки, частота вращения и при необходимости циркуляция." },
          { title: "Материал, слив и КИП", text: "Коррозионная совместимость, удаление осадка, измерение уровня и температуры." },
        ],
        dataNote: "Объём ёмкости, частота вращения мешалки и время растворения определяются по данным сырья и рецептуры; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о ёмкостях растворения",
        items: [
          {
            question: "Для чего нужна ёмкость растворения?",
            answer:
              "Для растворения при перемешивании твёрдого сырья, растворимого в воде или другом растворителе, и получения раствора заданной концентрации.",
          },
          {
            question: "Растворяется ли в ней любое сырьё?",
            answer:
              "Нет. Растворяется только сырьё, растворимое в выбранном растворителе, а его количество ограничено растворимостью при данной температуре.",
          },
          {
            question: "Чем растворение отличается от приготовления суспензии?",
            answer:
              "При растворении твёрдое вещество полностью переходит в раствор. В суспензии оно остаётся нерастворённым во взвеси; для такой задачи рассматривается реактор с мешалкой.",
          },
          {
            question: "Как удаляются нерастворённые частицы и осадок?",
            answer:
              "Осадок выводится через коническое днище и нижний слив; при необходимости раствор фильтруется на следующей стадии.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Сырьё и растворитель, целевая концентрация, размер партии, рабочая температура, способ подачи твёрдого и химические свойства.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ёмкость растворения",
        text: "Сообщите сырьё, растворитель и целевую концентрацию — вместе определим ёмкость растворения.",
        mailSubject: "Запрос предложения: ёмкость растворения",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Твёрдое сырьё и растворитель",
          "Целевая концентрация раствора",
          "Размер партии",
          "Рабочая температура",
          "Способ подачи твёрдого (мешки, биг-бэги, шнек)",
          "Химические свойства и условия коррозии",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ёмкость растворения.",
          "",
          "Сырьё и растворитель:",
          "Целевая концентрация:",
          "Размер партии:",
          "Рабочая температура:",
          "Способ подачи твёрдого:",
          "Химические свойства:",
        ],
      },
    },
    ar: {
      meta: {
        title: "خزان الإذابة | خزانات تحضير المحاليل",
        description:
          "خزانات إذابة لتحضير محاليل متحكم بها من مواد خام صلبة قابلة للذوبان. يُختار نظام التلقيم والخلط والمادة وفق المادة الخام.",
      },
      breadcrumbLabel: "خزان الإذابة",
      h1: "خزان الإذابة – تحضير محاليل متحكم بها من مواد خام صلبة",
      productCategory: "خزان إذابة",
      overview: {
        imageAlt: "تجهيز من الفولاذ المقاوم للصدأ يُلقَّم فيه المسحوق بخرطوم إلى خزان تحضير السوائل",
        tagline: "خزان إذابة",
        keyFacts: [
          { label: "المهمة", value: "إذابة متحكم بها للمادة الخام الصلبة في السائل" },
          { label: "التلقيم", value: "ترتيب تلقيم المواد الصلبة والسائلة حسب المشروع" },
          { label: "الخلط", value: "نوع الخلاط وسرعته وفق المادة الخام" },
          { label: "المحلول", value: "التركيز ودرجة الحرارة من بيانات الذوبانية" },
        ],
        title: "محلول متجانس من مادة خام صلبة مناسبة",
        paragraphs: [
          "خزان الإذابة خزان عمليات تُذاب فيه المواد الخام الصلبة القابلة للذوبان في الماء أو في مذيب آخر بشكل متحكم به لتحضير محلول بالتركيز المستهدف، ويُستخدم في تحضير الأسمدة السائلة والمحاليل الكيميائية ومراحل التحضير المسبق قبل التركيب.",
          "تعتمد كمية المادة التي تذوب وسرعة ذوبانها على ذوبانيتها ودرجة حرارة المذيب وحجم الحبيبات وشدة الخلط. ويجب أن يكون التركيز المستهدف أقل من حد الذوبانية عند درجة حرارة التشغيل، وإلا بقيت مواد صلبة غير ذائبة في الخزان أو حدث تبلور عند تبرد المحلول.",
          "يمكن التخطيط لقاع مخروطي أو صرف سفلي أو ترشيح لاحق للمواد غير الذائبة والشوائب والرواسب. وبعض المواد تطلق حرارة أو تمتصها عند ذوبانها، وعندها تُقيَّم الحاجة إلى التسخين أو التبريد بشكل منفصل.",
        ],
        note: "تختلف الإذابة عن تحضير المعلّق الذي تبقى فيه المواد الصلبة غير ذائبة ومعلّقة في السائل، وعن التفاعل الكيميائي الذي يكوّن منتجًا جديدًا، ولهذه المهام يُدرس المفاعل المزود بخلاط.",
      },
      process: {
        title: "تدفق العملية في خزان الإذابة",
        intro:
          "يوضح المخطط التدفق العام الذي يُلقَّم فيه المذيب والمادة الخام الصلبة إلى الخزان وتُذاب تحت الخلط ثم يُفحص المحلول ويُنقل إلى العملية التالية، ويُحدَّد ترتيب التلقيم وكمياته وفق الوصفة.",
        note: "يعتمد زمن الذوبان على المادة الخام وحجم الحبيبات ودرجة الحرارة والخلط، ولا يُقدَّم في هذه الصفحة أي ضمان للزمن أو التركيز.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تلقيم السائل والمادة الصلبة", text: "يُضاف المذيب أولًا، ثم تُضاف المادة الصلبة بشكل متحكم به من الأكياس أو الأكياس الكبيرة أو بناقل لولبي." },
          { title: "إذابة تحت الخلط", text: "يُبقي الخلاط المادة الصلبة معلّقة فيزيد تلامسها مع السائل ويسرّع الذوبان." },
          { title: "فحص المحلول", text: "تُراقَب درجة الحرارة والمستوى، وتؤخذ عينات لقياس الكثافة أو الأس الهيدروجيني عند الحاجة." },
          { title: "نقل المنتج", text: "يُضخ المحلول الجاهز إلى مرشح أو خزان تخزين أو مرحلة العملية التالية." },
        ],
        auxLineLabel: "خط التسخين / التبريد (عند الحاجة)",
        auxLine: [
          { title: "تسخين أو تبريد", text: "إذا تطلبت الذوبانية أو حرارة الذوبان ذلك يُزوَّد القميص أو الملف بالوسط." },
          { title: "عودة الوسط", text: "يعود الوسط إلى دائرة المرافق في المصنع." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في خزان الإذابة",
          svgDesc:
            "خط المنتج: تلقيم السائل والمادة الصلبة، خزان الإذابة، فحص المحلول، نقل المنتج. خط وسط التسخين أو التبريد عند الحاجة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "تلقيم سائل وصلب", sub: "مذيب + مادة خام" }],
          drum: { title: "خزان الإذابة", sub: "إذابة تحت الخلط" },
          after: [
            { title: "فحص المحلول", sub: "الحرارة والمستوى والعينة" },
            { title: "النقل", sub: "مرشح / تخزين / عملية" },
          ],
          aux: {
            lane: "تسخين / تبريد (عند الحاجة)",
            tone: "heat",
            inputs: [{ title: "دخول الوسط", sub: "قميص / ملف" }],
            outputs: [{ title: "عودة الوسط", sub: "دائرة المرافق" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام خزان الإذابة",
        items: [
          {
            title: "المواد الخام للأسمدة القابلة للذوبان",
            text: "تحضير الأسمدة السائلة أو محاليل الوصفات من مواد خام قابلة للذوبان في الماء مثل نترات البوتاسيوم، مع تحديد التركيز المستهدف وفق الذوبانية عند درجة حرارة التشغيل.",
            imageAlt: "سماد نترات البوتاسيوم البلوري الأبيض في طبق أسود",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "تحضير المحاليل الكيميائية",
            text: "تحضير محاليل العمليات بإذابة مواد كيميائية مثل هيدروكسيد الصوديوم في الماء، ويمكن تبريد المحلول في خزان تبريد قبل الاستخدام عندما تطلق المادة حرارة عند ذوبانها.",
            imageAlt: "حبيبات بيضاء من هيدروكسيد الصوديوم على زجاجة ساعة",
            linkLabel: "خزان التبريد",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع خزانات إذابة مخصصة",
        intro:
          "تصمم PRO MAKINA خزانات الإذابة وفق المادة الخام والمذيب والتركيز المستهدف وحجم الدفعة والخصائص الكيميائية للمادة الخام، مع تصميم نظام تلقيم المواد الصلبة والخلاط ومادة الجسم وإدارة الرواسب والتوصيلات معًا.",
        highlights: [
          "فتحة تلقيم المواد الصلبة والتحكم في الغبار",
          "خلاط وسرعة مناسبان للمادة الخام",
          "مادة جسم متوافقة كيميائيًا",
          "قاع مخروطي وصرف سفلي ونقطة أخذ عينات",
        ],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة الخام والمذيب", text: "نوع المادة الصلبة وحجم حبيباتها والمذيب." },
          { title: "التركيز ودرجة الحرارة", text: "التركيز المستهدف وبيانات الذوبانية ودرجة حرارة التشغيل." },
          { title: "الحجم والتلقيم", text: "حجم الدفعة وطريقة تلقيم المواد الصلبة والسائلة." },
          { title: "الخلط", text: "نوع الخلاط وسرعته والتدوير عند الحاجة." },
          { title: "المادة والتفريغ والقياس", text: "التوافق مع التآكل وإدارة الرواسب وقياس المستوى والحرارة." },
        ],
        dataNote: "يُحدَّد حجم الخزان وسرعة الخلاط وزمن الذوبان من بيانات المادة الخام والوصفة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول خزان الإذابة",
        items: [
          {
            question: "ما استخدام خزان الإذابة؟",
            answer:
              "يُستخدم لإذابة المواد الخام الصلبة القابلة للذوبان في الماء أو في مذيب آخر تحت الخلط، وتحضير محلول بالتركيز المستهدف.",
          },
          {
            question: "هل تذوب كل المواد الخام في خزان الإذابة؟",
            answer:
              "لا. تذوب فقط المواد القابلة للذوبان في المذيب المختار، وتتحدد الكمية التي يمكن إذابتها بحد الذوبانية المرتبط بدرجة الحرارة.",
          },
          {
            question: "ما الفرق بين الإذابة وتحضير المعلّق؟",
            answer:
              "في الإذابة تذوب المادة الصلبة كليًا في السائل، أما في المعلّق فتبقى غير ذائبة ومعلّقة، ولهذه المهمة يُدرس المفاعل المزود بخلاط.",
          },
          {
            question: "كيف تُدار المواد غير الذائبة والرواسب؟",
            answer: "يمكن سحب الرواسب عبر القاع المخروطي والصرف السفلي، ويمكن ترشيح المحلول في المرحلة التالية عند الحاجة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "المادة الخام والمذيب والتركيز المستهدف وحجم الدفعة ودرجة حرارة التشغيل وطريقة تلقيم المواد الصلبة والخصائص الكيميائية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لخزان إذابة",
        text: "شاركنا المادة الخام والمذيب والتركيز المستهدف، لنحدد معًا خزان الإذابة المناسب.",
        mailSubject: "طلب عرض سعر: خزان إذابة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "المادة الخام الصلبة والمذيب",
          "تركيز المحلول المستهدف",
          "حجم الدفعة",
          "درجة حرارة التشغيل",
          "طريقة تلقيم المواد الصلبة (أكياس، أكياس كبيرة، ناقل لولبي)",
          "الخصائص الكيميائية وظروف التآكل",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لخزان إذابة.",
          "",
          "المادة الخام والمذيب:",
          "التركيز المستهدف:",
          "حجم الدفعة:",
          "درجة حرارة التشغيل:",
          "طريقة تلقيم المواد الصلبة:",
          "الخصائص الكيميائية:",
        ],
      },
    },
  },
};
