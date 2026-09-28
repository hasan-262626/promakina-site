import type { DrumPageConfig } from "../types";

// Zincirli kırıcı: gövde içinde dönen rotor(lar)a bağlı zincirlerin darbesiyle topak ve kırılgan ürünlerin
// boyut küçültülmesi (taşıma ekipmanı değildir). Mevcut ürün verisi "topaklı ve yarı nemli ürünler" kapsamındadır.
const img = (file: string) => `/images/kirici zincirli/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const chainCrusherPage: DrumPageConfig = {
  key: "chainCrusher",
  group: "crushers",
  trSlug: "zincirli-kiricilar",
  mainImage: img("kiricizincir1.jpg"),
  applications: [
    { image: app("kompost-yigini.webp"), link: "compostPlants" },
    { image: app("organik-gubre-cuval.webp"), link: "fertilizerPlants" },
  ],
  figure: img("kiricizincir6.jpg"),
  gallery: [
    img("kiricizincir10.jpg"),
    img("kiricizincir2.jpg"),
    img("kiricizincir3.jpg"),
    img("kiricizincir4.jpg"),
    img("kiricizincir5.jpg"),
    img("kiricizincir7.jpg"),
    img("kiricizincir9.jpg"),
  ],
  sectors: ["fertilizerPlants", "compostPlants", "chemicalProcess"],
  resources: ["hammerCrusher", "granulatorDrum", "compostPlantSolution", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "dustCollection", "drumSystems"],
  texts: {
    tr: {
      meta: {
        title: "Zincirli Kırıcı İmalatı | Topak ve Gübre Kırıcı | PRO MAKİNA",
        description:
          "Dönen zincirlerin darbesiyle topaklı ve yarı nemli ürünleri parçalayan zincirli kırıcı imalatı. Gübre, kompost ve kırılgan dökme ürün hatları için.",
      },
      breadcrumbLabel: "Zincirli Kırıcılar",
      h1: "Zincirli Kırıcı – Topaklı ve Yarı Nemli Ürünler için Darbeli Kırıcı",
      productCategory: "Zincirli Kırıcı",
      overview: {
        imageAlt: "Atölyede kayış-kasnak tahrikli zincirli kırıcı gövdesi",
        tagline: "Zincirli Kırıcı",
        keyFacts: [
          { label: "Kırma prensibi", value: "Dönen zincirlerin darbesi" },
          { label: "Malzeme", value: "Topaklı, kırılgan ve yarı nemli ürünler" },
          { label: "Tahrik", value: "Motor ve kayış-kasnak" },
          { label: "Aşınan parçalar", value: "Zincirler ve iç astarlar" },
        ],
        title: "Topakların Zincir Darbesiyle Parçalanması",
        paragraphs: [
          "Zincirli kırıcıda gövde içinde dönen rotor(lar)a bağlı zincirler, üstten beslenen malzemeye çarparak topakları ve kırılgan parçaları dağıtır. Malzeme zincir bölgesinden geçerken boyutu küçülür ve alttan tahliye edilir.",
          "Zincirlerin esnek yapısı, topaklanmış veya yarı nemli ürünlerde darbeyi yayarak kırma yapılmasına olanak verir. Bu nedenle zincirli kırıcılar gübre ve kompost hatlarında topak kırma ve kırılgan ürünlerin boyut küçültülmesi için kullanılır.",
          "Ürün boyutu; rotor devri, zincir sayısı ve uzunluğu, gövde içindeki boşluk ve malzemenin davranışıyla belirlenir. Çok sert mineraller için çeneli veya darbeli kırıcılar daha uygun olabilir.",
        ],
        note: "Nemli ve yapışkan ürünler gövde iç yüzeyinde birikme yapabilir; malzemenin nem ve yapışma davranışı, gövde tasarımı ve temizlik erişimi seçilirken dikkate alınmalıdır.",
      },
      process: {
        title: "Zincirli Kırıcı Malzeme Akışı",
        intro:
          "Şema, zincirli kırıcının topaklı malzemeyi üstten alıp zincir darbesiyle parçaladığı ve alttan tahliye ettiği tipik akışı gösterir.",
        note: "Zincirli kırıcı genellikle eleme ile birlikte çalışır; hedef boyutun üstündeki ürün eleme sonrası kırıcıya geri gönderilebilir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme besleme", text: "Topaklı veya kırılgan malzeme üstteki besleme ağzından verilir." },
          { title: "Zincir darbesi", text: "Dönen zincirler topaklara çarparak onları parçalar." },
          { title: "Gövde içinde geçiş", text: "Malzeme zincir bölgesinden geçerken boyutu küçülür." },
          { title: "Alttan tahliye", text: "Parçalanan ürün alttan eleme veya sonraki prosese aktarılır." },
        ],
        flow: {
          svgTitle: "Zincirli kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: besleme ağzı, zincirli kırıcı, alt tahliye, eleme veya sonraki proses.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Topaklı malzeme" }],
          drum: { title: "ZİNCİRLİ KIRICI", sub: "rotor · zincir · darbe" },
          after: [
            { title: "Tahliye", sub: "Alt çıkış" },
            { title: "Eleme / proses", sub: "Sonraki ekipman" },
          ],
        },
      },
      applications: {
        title: "Zincirli Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Kompost ve Organik Ürünler",
            text: "Olgunlaşmış kompost ve organik ürünlerdeki topakların eleme veya paketleme öncesi dağıtılması. Nem durumu kırıcı gövdesi ve temizlik erişimi için belirleyicidir.",
            imageAlt: "Branda üzerinde serilmiş koyu renkli kompost",
            linkLabel: "Kompost ve Organik Atık Tesisleri",
          },
          {
            title: "Gübre Hatlarında Topak Kırma",
            text: "Organik ve organomineral gübre hatlarında hammadde veya ürün topaklarının kırılması. Kırılan ürün eleme ve granülasyon adımlarına aktarılır.",
            imageAlt: "Paletler üzerinde organik gübre çuvalları",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Zincirli Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA zincirli kırıcıları malzemenin nemi, topak yapısı, kapasite ve hedef boyuta göre projelendirir. Rotor ve zincir düzeni, gövde, besleme ve tahliye ağızları, kayış-kasnak tahrik ve bakım kapakları birlikte tasarlanır.",
        highlights: ["Malzemeye göre zincir düzeni", "Değiştirilebilir zincirler ve astarlar", "Kayış-kasnak tahrik", "Bakım kapakları ve toz bağlantısı"],
        figureAlt: "Zincirli kırıcı gövdesinin içinde rotor zincirleri",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Malzeme", text: "Ürün türü, nem, yapışkanlık ve topaklanma davranışı." },
          { title: "Besleme", text: "Topak boyutu ve besleme düzeni." },
          { title: "Hedef Boyut", text: "İstenen üst boyut ve eleme ile birlikte çalışma." },
          { title: "Rotor ve Zincir", text: "Rotor devri, zincir tipi, sayısı ve uzunluğu." },
          { title: "Gövde ve Güvenlik", text: "Gövde yapısı, bakım erişimi, toz ve proses güvenliği." },
        ],
        dataNote: "Rotor devri, güç ve kapasite malzeme verisiyle belirlenir; çok sert mineraller için farklı kırıcı tipleri değerlendirilir.",
      },
      gallery: {
        title: "Zincirli Kırıcı Fotoğraf Galerisi",
        captions: [
          "Motoru ve gövdesi görünen zincirli kırıcı",
          "Atölyede kayış tahrikli zincirli kırıcılar",
          "Zincirli kırıcı rotorundaki zincirler",
          "Zincirli kırıcı gövdesi ve yatakları",
          "Besleme ağızları görünen zincirli kırıcı",
          "Gövde içinde dizili rotor zincirleri",
          "İmalatı tamamlanmış zincirli kırıcı gövdesi",
        ],
      },
      faq: {
        title: "Zincirli Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Zincirli kırıcı nasıl çalışır?",
            answer: "Gövde içinde dönen rotora bağlı zincirler, üstten beslenen malzemeye çarparak topakları ve kırılgan parçaları dağıtır; ürün alttan tahliye edilir.",
          },
          {
            question: "Zincirli kırıcı hangi ürünler için uygundur?",
            answer: "Gübre ve kompost gibi topaklı, kırılgan ve yarı nemli ürünler için uygundur. Çok sert mineraller için çeneli veya darbeli kırıcılar değerlendirilir.",
          },
          {
            question: "Nemli ürünler sorun yaratır mı?",
            answer: "Nemli ve yapışkan ürünler gövdede birikebilir. Gövde tasarımı ve temizlik erişimi malzemenin nem davranışına göre seçilir.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer: "Zincirler ve gövde iç astarları aşınan parçalardır; zincirler değiştirilebilir yapıdadır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü, nem ve yapışkanlık, topak boyutu, hedef boyut ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Zincirli kırıcı için teknik teklif alın",
        text: "Ürününüz, nem durumu ve hedef boyutunuza göre zincirli kırıcıyı birlikte netleştirelim.",
        mailSubject: "Zincirli Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü",
          "Nem ve yapışkanlık",
          "Topak boyutu",
          "Hedef ürün boyutu",
          "Saatlik kapasite (ton/saat)",
          "Eleme ve hat bağlantıları",
        ],
        inquiryLines: [
          "Merhaba, zincirli kırıcı için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Nem (%):",
          "Topak boyutu (mm):",
          "Hedef boyut (mm):",
          "Kapasite (ton/saat):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Chain Crusher Manufacturer | Lump and Fertilizer Crusher",
        description:
          "Chain crushers that break lumpy and semi-moist products by the impact of rotating chains. For fertilizer, compost and friable bulk product lines.",
      },
      breadcrumbLabel: "Chain Crusher",
      h1: "Chain Crusher – Impact Crusher for Lumpy and Semi-Moist Products",
      productCategory: "Chain Crusher",
      overview: {
        imageAlt: "Belt-driven chain crusher housing in a workshop",
        tagline: "Chain Crusher",
        keyFacts: [
          { label: "Crushing principle", value: "Impact of rotating chains" },
          { label: "Material", value: "Lumpy, friable, semi-moist products" },
          { label: "Drive", value: "Motor and belt drive" },
          { label: "Wear parts", value: "Chains and internal liners" },
        ],
        title: "Breaking Lumps by Chain Impact",
        paragraphs: [
          "In a chain crusher, chains attached to one or more rotors spinning inside the housing strike the material fed from above and break up lumps and friable pieces. The material is reduced as it passes through the chain zone and leaves at the bottom.",
          "The flexible chains spread the impact, making it possible to crush caked or semi-moist products. Chain crushers are therefore used in fertilizer and compost lines for lump breaking and size reduction of friable products.",
          "Product size depends on rotor speed, number and length of chains, internal clearance and material behaviour. For very hard minerals, jaw or impact crushers may be more suitable.",
        ],
        note: "Moist and sticky products can build up on the housing walls; moisture and stickiness must be considered when selecting housing design and cleaning access.",
      },
      process: {
        title: "Chain Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the chain crusher takes lumpy material from above, breaks it by chain impact and discharges it at the bottom.",
        note: "A chain crusher usually works with screening; oversize product can be returned to the crusher after screening.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material feeding", text: "Lumpy or friable material enters through the top inlet." },
          { title: "Chain impact", text: "Rotating chains strike and break the lumps." },
          { title: "Passage through the housing", text: "Material is reduced as it passes the chain zone." },
          { title: "Bottom discharge", text: "Crushed product goes to screening or the next process." },
        ],
        flow: {
          svgTitle: "Chain crusher material flow diagram",
          svgDesc: "Material line: inlet, chain crusher, bottom discharge, screening or next process.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Lumpy material" }],
          drum: { title: "CHAIN CRUSHER", sub: "rotor · chain · impact" },
          after: [
            { title: "Discharge", sub: "Bottom outlet" },
            { title: "Screening / process", sub: "Next equipment" },
          ],
        },
      },
      applications: {
        title: "Chain Crusher Applications",
        items: [
          {
            title: "Compost and Organic Products",
            text: "Breaking lumps in matured compost and organic products before screening or packing. Moisture is decisive for housing design and cleaning access.",
            imageAlt: "Dark compost spread on a tarpaulin",
            linkLabel: "Composting and Organic Waste Plants",
          },
          {
            title: "Lump Breaking in Fertilizer Lines",
            text: "Crushing raw material or product lumps in organic and organomineral fertilizer lines. Crushed product goes on to screening and granulation.",
            imageAlt: "Bags of organic fertilizer on pallets",
            linkLabel: "Fertilizer Plants",
          },
        ],
      },
      design: {
        title: "Custom Chain Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers chain crushers around moisture, lump structure, capacity and target size. Rotor and chain arrangement, housing, inlet and outlet, belt drive and inspection doors are designed together.",
        highlights: ["Chain arrangement for the material", "Replaceable chains and liners", "Belt drive", "Inspection doors and dust connection"],
        figureAlt: "Rotor chains inside a chain crusher housing",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Material", text: "Product type, moisture, stickiness and caking behaviour." },
          { title: "Feed", text: "Lump size and feeding arrangement." },
          { title: "Target Size", text: "Required top size and operation with screening." },
          { title: "Rotor and Chains", text: "Rotor speed, chain type, number and length." },
          { title: "Housing and Safety", text: "Housing design, maintenance access, dust and process safety." },
        ],
        dataNote: "Rotor speed, power and capacity are defined from material data; other crusher types are assessed for very hard minerals.",
      },
      gallery: {
        title: "Chain Crusher Photo Gallery",
        captions: [
          "Chain crusher with motor and housing",
          "Belt-driven chain crushers in a workshop",
          "Chains on the chain crusher rotor",
          "Chain crusher housing and bearings",
          "Chain crusher showing inlet openings",
          "Rotor chains inside the housing",
          "Completed chain crusher housing",
        ],
      },
      faq: {
        title: "Chain Crusher FAQ",
        items: [
          {
            question: "How does a chain crusher work?",
            answer: "Chains on a rotor spinning inside the housing strike material fed from above and break up lumps and friable pieces; product leaves at the bottom.",
          },
          {
            question: "Which products suit a chain crusher?",
            answer: "Lumpy, friable and semi-moist products such as fertilizer and compost. For very hard minerals, jaw or impact crushers are assessed.",
          },
          {
            question: "Do moist products cause problems?",
            answer: "Moist and sticky products can build up in the housing. Housing design and cleaning access are chosen according to moisture behaviour.",
          },
          {
            question: "Which parts wear?",
            answer: "Chains and internal housing liners; the chains are replaceable.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type, moisture and stickiness, lump size, target size and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a chain crusher",
        text: "Share your product, moisture and target size, and we will define the chain crusher together with you.",
        mailSubject: "Chain Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type",
          "Moisture and stickiness",
          "Lump size",
          "Target product size",
          "Hourly capacity (t/h)",
          "Screening and line connections",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a chain crusher.",
          "",
          "Product:",
          "Moisture (%):",
          "Lump size (mm):",
          "Target size (mm):",
          "Capacity (t/h):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Цепная дробилка | Дробилка комков и удобрений",
        description:
          "Цепные дробилки для разрушения комковатых и полувлажных продуктов ударом вращающихся цепей. Для линий удобрений, компоста и хрупких сыпучих продуктов.",
      },
      breadcrumbLabel: "Цепная дробилка",
      h1: "Цепная дробилка – ударное дробление комковатых и полувлажных продуктов",
      productCategory: "Цепная дробилка",
      overview: {
        imageAlt: "Корпус цепной дробилки с клиноременным приводом в цехе",
        tagline: "Цепная дробилка",
        keyFacts: [
          { label: "Принцип", value: "Удар вращающихся цепей" },
          { label: "Материал", value: "Комковатые, хрупкие, полувлажные продукты" },
          { label: "Привод", value: "Двигатель и клиноременная передача" },
          { label: "Изнашиваемые детали", value: "Цепи и внутренняя футеровка" },
        ],
        title: "Разрушение комков ударом цепей",
        paragraphs: [
          "В цепной дробилке цепи, закреплённые на одном или нескольких роторах внутри корпуса, ударяют по материалу, поступающему сверху, и разбивают комки и хрупкие куски. Проходя зону цепей, материал измельчается и выходит снизу.",
          "Гибкие цепи распределяют удар, что позволяет дробить слежавшиеся или полувлажные продукты. Поэтому цепные дробилки применяются в линиях удобрений и компоста для разрушения комков и измельчения хрупких продуктов.",
          "Крупность продукта зависит от частоты вращения ротора, числа и длины цепей, внутреннего зазора и поведения материала. Для очень твёрдых минералов более подходят щековые или роторные дробилки.",
        ],
        note: "Влажные и липкие продукты могут налипать на стенки корпуса; влажность и липкость учитываются при выборе конструкции корпуса и доступа для очистки.",
      },
      process: {
        title: "Движение материала в цепной дробилке",
        intro: "Схема показывает типовой поток: дробилка принимает комковатый материал сверху, разрушает его ударом цепей и выгружает снизу.",
        note: "Цепная дробилка обычно работает вместе с грохотом; надрешётный продукт может возвращаться в дробилку.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача материала", text: "Комковатый или хрупкий материал поступает через верхнее отверстие." },
          { title: "Удар цепей", text: "Вращающиеся цепи ударяют и разбивают комки." },
          { title: "Проход через корпус", text: "Материал измельчается при проходе зоны цепей." },
          { title: "Нижняя выгрузка", text: "Продукт идёт на грохочение или следующий передел." },
        ],
        flow: {
          svgTitle: "Схема движения материала в цепной дробилке",
          svgDesc: "Линия материала: загрузочное отверстие, цепная дробилка, нижняя выгрузка, грохочение или следующий передел.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Комковатый материал" }],
          drum: { title: "ЦЕПНАЯ ДРОБИЛКА", sub: "ротор · цепь · удар" },
          after: [
            { title: "Выгрузка", sub: "Нижний выход" },
            { title: "Грохот / процесс", sub: "Далее по линии" },
          ],
        },
      },
      applications: {
        title: "Области применения цепной дробилки",
        items: [
          {
            title: "Компост и органические продукты",
            text: "Разбивка комков в зрелом компосте и органических продуктах перед грохочением или фасовкой. Влажность определяет конструкцию корпуса и доступ для очистки.",
            imageAlt: "Тёмный компост, разложенный на брезенте",
            linkLabel: "Компостирование и органические отходы",
          },
          {
            title: "Дробление комков в линиях удобрений",
            text: "Дробление комков сырья или продукта в линиях органических и органоминеральных удобрений. Продукт далее идёт на грохочение и грануляцию.",
            imageAlt: "Мешки органического удобрения на поддонах",
            linkLabel: "Заводы удобрений",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление цепных дробилок",
        intro:
          "PRO MAKINA проектирует цепные дробилки исходя из влажности, структуры комков, производительности и целевой крупности. Ротор и цепи, корпус, загрузка и выгрузка, клиноременный привод и люки разрабатываются совместно.",
        highlights: ["Расстановка цепей под материал", "Сменные цепи и футеровка", "Клиноременный привод", "Люки обслуживания и аспирация"],
        figureAlt: "Цепи ротора внутри корпуса цепной дробилки",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Материал", text: "Вид продукта, влажность, липкость и слёживаемость." },
          { title: "Питание", text: "Размер комков и способ подачи." },
          { title: "Целевая крупность", text: "Верхняя крупность и работа с грохотом." },
          { title: "Ротор и цепи", text: "Частота вращения, тип, число и длина цепей." },
          { title: "Корпус и безопасность", text: "Конструкция корпуса, доступ, пыль и безопасность процесса." },
        ],
        dataNote: "Частота вращения, мощность и производительность определяются по данным материала; для очень твёрдых минералов рассматриваются другие типы дробилок.",
      },
      gallery: {
        title: "Фотогалерея цепных дробилок",
        captions: [
          "Цепная дробилка с двигателем и корпусом",
          "Цепные дробилки с ремённым приводом в цехе",
          "Цепи на роторе дробилки",
          "Корпус и подшипники цепной дробилки",
          "Цепная дробилка с загрузочными отверстиями",
          "Цепи ротора внутри корпуса",
          "Готовый корпус цепной дробилки",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о цепной дробилке",
        items: [
          {
            question: "Как работает цепная дробилка?",
            answer: "Цепи ротора внутри корпуса ударяют по материалу, поступающему сверху, и разбивают комки и хрупкие куски; продукт выходит снизу.",
          },
          {
            question: "Для каких продуктов подходит цепная дробилка?",
            answer: "Для комковатых, хрупких и полувлажных продуктов, таких как удобрения и компост. Для очень твёрдых минералов рассматриваются щековые или роторные дробилки.",
          },
          {
            question: "Создают ли проблемы влажные продукты?",
            answer: "Влажные и липкие продукты могут налипать в корпусе; конструкция корпуса и доступ для очистки выбираются по поведению влаги.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Цепи и внутренняя футеровка корпуса; цепи сменные.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта, влажность и липкость, размер комков, целевая крупность и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на цепную дробилку",
        text: "Сообщите продукт, влажность и целевую крупность — вместе определим цепную дробилку.",
        mailSubject: "Запрос предложения: цепная дробилка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта",
          "Влажность и липкость",
          "Размер комков",
          "Целевая крупность",
          "Часовая производительность (т/ч)",
          "Грохочение и подключения линии",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на цепную дробилку.",
          "",
          "Продукт:",
          "Влажность (%):",
          "Размер комков (мм):",
          "Целевая крупность (мм):",
          "Производительность (т/ч):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الكسارة السلسلية | كسارة التكتلات والأسمدة",
        description:
          "كسارات سلسلية تفتت المنتجات المتكتلة وشبه الرطبة بصدم سلاسل دوّارة. لخطوط الأسمدة والكمبوست والمنتجات السائبة الهشة.",
      },
      breadcrumbLabel: "الكسارة السلسلية",
      h1: "الكسارة السلسلية – كسارة صدمية للمنتجات المتكتلة وشبه الرطبة",
      productCategory: "كسارة سلسلية",
      overview: {
        imageAlt: "غلاف كسارة سلسلية بإدارة بالسيور في ورشة",
        tagline: "كسارة سلسلية",
        keyFacts: [
          { label: "مبدأ التكسير", value: "صدم السلاسل الدوّارة" },
          { label: "المادة", value: "منتجات متكتلة وهشة وشبه رطبة" },
          { label: "الإدارة", value: "محرك وإدارة بالسيور" },
          { label: "أجزاء التآكل", value: "السلاسل والبطانات الداخلية" },
        ],
        title: "تفتيت التكتلات بصدم السلاسل",
        paragraphs: [
          "في الكسارة السلسلية تضرب سلاسل مثبتة على دوّار أو أكثر يدور داخل الغلاف المادةَ المُلقَّمة من الأعلى فتفتت التكتلات والقطع الهشة، وتصغر المادة أثناء مرورها بمنطقة السلاسل ثم تخرج من الأسفل.",
          "توزع السلاسل المرنة قوة الصدم، ما يتيح تكسير المنتجات المتكتلة أو شبه الرطبة، لذا تُستخدم الكسارات السلسلية في خطوط الأسمدة والكمبوست لتفتيت التكتلات وتصغير المنتجات الهشة.",
          "يعتمد حجم المنتج على سرعة الدوّار وعدد السلاسل وطولها والخلوص الداخلي وسلوك المادة. وقد تكون الكسارات الفكية أو الصدمية أنسب للمعادن شديدة الصلابة.",
        ],
        note: "قد تتراكم المنتجات الرطبة واللزجة على جدران الغلاف، لذا تُراعى الرطوبة واللزوجة عند اختيار تصميم الغلاف وسهولة التنظيف.",
      },
      process: {
        title: "تدفق المادة في الكسارة السلسلية",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه الكسارة المادة المتكتلة من الأعلى وتفتتها بصدم السلاسل ثم تفرغها من الأسفل.",
        note: "تعمل الكسارة السلسلية عادةً مع الغربلة، ويمكن إعادة المنتج الأكبر من الحجم المستهدف إلى الكسارة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة", text: "تدخل المادة المتكتلة أو الهشة من فتحة التلقيم العلوية." },
          { title: "صدم السلاسل", text: "تضرب السلاسل الدوّارة التكتلات وتفتتها." },
          { title: "المرور عبر الغلاف", text: "تصغر المادة أثناء مرورها بمنطقة السلاسل." },
          { title: "التفريغ السفلي", text: "يتجه المنتج المفتت إلى الغربلة أو العملية التالية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الكسارة السلسلية",
          svgDesc: "خط المادة: فتحة التلقيم، الكسارة السلسلية، التفريغ السفلي، الغربلة أو العملية التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "مادة متكتلة" }],
          drum: { title: "الكسارة السلسلية", sub: "دوّار · سلسلة · صدم" },
          after: [
            { title: "التفريغ", sub: "المخرج السفلي" },
            { title: "غربلة / عملية", sub: "المعدة التالية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الكسارة السلسلية",
        items: [
          {
            title: "الكمبوست والمنتجات العضوية",
            text: "تفتيت التكتلات في الكمبوست الناضج والمنتجات العضوية قبل الغربلة أو التعبئة، وتحدد الرطوبة تصميم الغلاف وسهولة التنظيف.",
            imageAlt: "كمبوست داكن مفروش على قماش مشمع",
            linkLabel: "منشآت الكمبوست والنفايات العضوية",
          },
          {
            title: "تفتيت التكتلات في خطوط الأسمدة",
            text: "تكسير تكتلات الخامات أو المنتج في خطوط الأسمدة العضوية والعضوية المعدنية، ثم ينتقل المنتج إلى الغربلة والتحبيب.",
            imageAlt: "أكياس سماد عضوي على منصات",
            linkLabel: "مصانع الأسمدة",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات سلسلية مخصصة",
        intro:
          "تصمم PRO MAKINA الكسارات السلسلية وفق الرطوبة وبنية التكتلات والسعة والحجم المستهدف. ويُصمَّم ترتيب الدوّار والسلاسل والغلاف وفتحتا التلقيم والتفريغ والإدارة بالسيور وأبواب الصيانة معًا.",
        highlights: ["ترتيب السلاسل وفق المادة", "سلاسل وبطانات قابلة للاستبدال", "إدارة بالسيور", "أبواب صيانة ووصلة غبار"],
        figureAlt: "سلاسل الدوّار داخل غلاف كسارة سلسلية",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة", text: "نوع المنتج والرطوبة واللزوجة وسلوك التكتل." },
          { title: "التلقيم", text: "حجم التكتلات وطريقة التلقيم." },
          { title: "الحجم المستهدف", text: "الحجم الأعلى المطلوب والعمل مع الغربلة." },
          { title: "الدوّار والسلاسل", text: "سرعة الدوّار ونوع السلاسل وعددها وطولها." },
          { title: "الغلاف والسلامة", text: "تصميم الغلاف وسهولة الصيانة والغبار وسلامة العملية." },
        ],
        dataNote: "تُحدَّد سرعة الدوّار والقدرة والسعة من بيانات المادة، وتُقيَّم أنواع كسارات أخرى للمعادن شديدة الصلابة.",
      },
      gallery: {
        title: "معرض صور الكسارات السلسلية",
        captions: [
          "كسارة سلسلية مع المحرك والغلاف",
          "كسارات سلسلية بإدارة بالسيور في ورشة",
          "السلاسل على دوّار الكسارة",
          "غلاف الكسارة السلسلية ومحاملها",
          "كسارة سلسلية تظهر فتحات التلقيم",
          "سلاسل الدوّار داخل الغلاف",
          "غلاف كسارة سلسلية مكتمل التصنيع",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الكسارة السلسلية",
        items: [
          {
            question: "كيف تعمل الكسارة السلسلية؟",
            answer: "تضرب سلاسل الدوّار داخل الغلاف المادة المُلقَّمة من الأعلى فتفتت التكتلات والقطع الهشة، ويخرج المنتج من الأسفل.",
          },
          {
            question: "ما المنتجات المناسبة للكسارة السلسلية؟",
            answer: "المنتجات المتكتلة والهشة وشبه الرطبة مثل الأسمدة والكمبوست، بينما تُقيَّم الكسارات الفكية أو الصدمية للمعادن شديدة الصلابة.",
          },
          {
            question: "هل تسبب المنتجات الرطبة مشكلات؟",
            answer: "قد تتراكم المنتجات الرطبة واللزجة داخل الغلاف، لذا يُختار تصميم الغلاف وسهولة التنظيف وفق سلوك الرطوبة.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "السلاسل وبطانات الغلاف الداخلية، والسلاسل قابلة للاستبدال.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج والرطوبة واللزوجة وحجم التكتلات والحجم المستهدف والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة سلسلية",
        text: "شاركنا المنتج والرطوبة والحجم المستهدف، لنحدد معًا الكسارة السلسلية المناسبة.",
        mailSubject: "طلب عرض سعر: كسارة سلسلية",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج",
          "الرطوبة واللزوجة",
          "حجم التكتلات",
          "حجم المنتج المستهدف",
          "السعة بالساعة (طن/ساعة)",
          "الغربلة ووصلات الخط",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة سلسلية.",
          "",
          "المنتج:",
          "الرطوبة (%):",
          "حجم التكتلات (مم):",
          "الحجم المستهدف (مم):",
          "السعة (طن/ساعة):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
