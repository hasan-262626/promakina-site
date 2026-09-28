import type { DrumPageConfig } from "../types";

// Zincirli elevatör: zincire bağlı kovalarla dökme malzemenin dikey taşınması (zincirli kovalı elevatör).
// Yüksek sıcaklık veya her türlü aşındırıcı malzemeye uygunluk iddiası yoktur; yükseklik ve kapasite verilmez.
// Ürün klasöründe yalnızca bileşen fotoğrafları bulunduğundan uygulama kartlarında lisanslı malzeme fotoğrafları kullanılır.
const img = (file: string) => `/images/elevator zincirli/${file}`;
const app = (file: string) => `/images/tasima-uygulamalari/${file}`;

export const chainBucketElevatorPage: DrumPageConfig = {
  key: "bucketElevator",
  group: "conveying",
  trSlug: "zincirli-elevatorler",
  mainImage: img("elevzinc1.jpg"),
  applications: [
    { image: app("klinker.webp"), link: "mining" },
    { image: app("komur-parca.webp"), link: "storageSystems" },
    { image: app("sonmemis-kirec-tozu.webp"), link: "chemicalProcess" },
  ],
  figure: img("elevzinc4.jpg"),
  gallery: [img("elevzinc5.webp"), img("elevzinc6.jpg"), img("elevzinc7.webp"), img("elevzinc10.jpg")],
  sectors: ["mining", "chemicalProcess", "fertilizerPlants"],
  resources: ["beltBucketElevator", "chainConveyor", "screwConveyor", "bunkersHoppers"],
  machines: ["storageSystems", "crushers", "dustCollection", "screeningSystems"],
  texts: {
    tr: {
      meta: {
        title: "Zincirli Elevatör İmalatı | Zincirli Kovalı Elevatör | PRO MAKİNA",
        description:
          "Dökme malzemeyi zincire bağlı kovalarla dikey taşıyan zincirli kovalı elevatör imalatı. Mineral, çimento hammaddesi ve iri taneli ürünler için projeye özel tasarım.",
      },
      breadcrumbLabel: "Zincirli Elevatörler",
      h1: "Zincirli Elevatör – Zincirli Kovalı Dikey Taşıma Sistemi",
      productCategory: "Zincirli Kovalı Elevatör",
      overview: {
        imageAlt: "Zincirli elevatör baş kısmında zincire bağlı kovalar",
        tagline: "Zincirli Kovalı Elevatör",
        keyFacts: [
          { label: "Görev", value: "Dökme malzemenin dikey taşınması" },
          { label: "Taşıyıcı", value: "Zincir ve kovalar" },
          { label: "Tahrik", value: "Üst dişli / tambur grubu" },
          { label: "Boyutlandırma", value: "Kapasite, yükseklik ve malzemeye göre" },
        ],
        title: "Zincir ve Kovalarla Dikey Dökme Taşıma",
        paragraphs: [
          "Zincirli elevatör, zincire belirli aralıklarla bağlı kovaların alt bölümde (ayak) malzemeyi alıp kapalı gövde içinde yukarı taşıdığı ve üst bölümde (baş) boşalttığı dikey taşıma ekipmanıdır. Zincir, üstteki tahrik dişlisi veya tamburu ile alttaki gerdirme grubu arasında döner.",
          "Taşıyıcı eleman olarak bant yerine zincir kullanılması, iri taneli ve ağır dökme malzemelerde tercih edilen bir çözümdür. Zincir tipi, kova tipi ve kova aralığı; kapasite, elevatör yüksekliği, malzemenin tane boyutu ve yoğunluğuna göre seçilir.",
          "Besleme düzeni (kovanın malzemeyi ayaktan alması veya beslemeyi doğrudan kovaya yapması) ve baş kısımdaki boşaltma şekli, malzemenin akış davranışına göre belirlenir. Malzeme birikmesi ve geri akış, ayak ve baş bölgelerinin tasarımıyla kontrol altında tutulur.",
        ],
        note: "Sıcak veya yüksek aşındırıcılıktaki malzemelerde zincir, kova ve gövde malzemesi ile yataklama ayrıca değerlendirilir; her zincirli elevatör her koşula uygun değildir.",
      },
      process: {
        title: "Zincirli Elevatör Malzeme Akışı",
        intro:
          "Şema, zincirli elevatörün malzemeyi alt besleme ağzından alıp üst tahliye ağzına taşıdığı tipik akışı gösterir.",
        note: "Elevatör yalnızca dikey taşıma yapar; besleme öncesi ve tahliye sonrası konveyör, silo veya proses ekipmanları tesis kurgusuna göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Alt besleme", text: "Malzeme ayak bölümündeki besleme ağzından elevatöre girer." },
          { title: "Kovalara dolum", text: "Zincire bağlı kovalar malzemeyi ayak bölümünden alır." },
          { title: "Dikey yükseltme", text: "Zincir, dolu kovaları kapalı gövde içinde yukarı taşır." },
          { title: "Üst tahliye", text: "Kovalar baş kısımda dönerken malzeme tahliye ağzına boşalır." },
        ],
        flow: {
          svgTitle: "Zincirli elevatör malzeme akış şeması",
          svgDesc: "Malzeme hattı: alt besleme ağzı, zincirli kovalı elevatör, üst tahliye ağzı, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Alt besleme", sub: "Ayak besleme ağzı" }],
          drum: { title: "ZİNCİRLİ ELEVATÖR", sub: "zincir · kova · dikey" },
          after: [
            { title: "Üst tahliye", sub: "Baş kısım ve şut" },
            { title: "Sonraki ekipman", sub: "Silo, konveyör, proses" },
          ],
        },
      },
      applications: {
        title: "Zincirli Elevatör Uygulama Alanları",
        items: [
          {
            title: "Klinker ve Çimento Hammaddeleri",
            text: "İri taneli ve aşındırıcı mineral hammaddelerin silo veya proses girişine yükseltilmesi. Zincir, kova ve aşınma yüzeyleri ürüne göre proje bazında seçilir.",
            imageAlt: "Kova içinde iri parçalı çimento klinkeri",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kömür ve İri Taneli Dökme Malzeme",
            text: "Parça hâlindeki kömür ve benzeri iri taneli dökme malzemelerin stok ve besleme noktalarına dikey taşınması. Kova hacmi ve aralığı tane boyutuna göre belirlenir.",
            imageAlt: "Yığın hâlinde parça kömür",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
          {
            title: "Kireç ve Mineral Tozları",
            text: "Kireç ve benzeri mineral tozlarının kapalı gövdede yükseltilmesi. Toz sızdırmazlığı, besleme düzeni ve boşaltma şekli ürünün akışına göre tasarlanır.",
            imageAlt: "Beyaz sönmemiş kireç tozu",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Zincirli Elevatör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA zincirli elevatörleri kapasite, elevatör yüksekliği ve malzeme özelliklerine göre projelendirir. Zincir ve kovalar, baş ve ayak grupları, gövde, gerdirme, besleme ve tahliye düzeni ile bakım kapakları birlikte tasarlanır.",
        highlights: ["Malzemeye göre zincir ve kova seçimi", "Baş ve ayak dişli / tambur grupları", "Zincir gerdirme ve bakım erişimi", "Hız ve çalışma güvenliği izleme"],
        figureAlt: "Zincirli elevatörde yuvarlak halkalı zincir ve tahrik dişlisi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Malzeme", text: "Malzeme türü, tane boyutu, yığın yoğunluğu, sıcaklık ve aşındırıcılık." },
          { title: "Kapasite ve Yükseklik", text: "Saatlik kapasite ve besleme-tahliye arası yükseklik." },
          { title: "Zincir ve Kova", text: "Zincir tipi, kova tipi, kova hacmi ve aralığı." },
          { title: "Tahrik ve Gerdirme", text: "Motor-redüktör, baş ve ayak grupları, gerdirme düzeni." },
          { title: "Güvenlik ve İzleme", text: "Hız izleme, geri dönüş engelleme, seviye ve bakım erişimi." },
        ],
        dataNote: "Elevatör yüksekliği, kapasite ve tahrik gücü proje verisiyle hesaplanır; sıcak veya aşındırıcı ürünlere uygunluk ayrıca değerlendirilir.",
      },
      gallery: {
        title: "Zincirli Elevatör Fotoğraf Galerisi",
        captions: [
          "Zincirli elevatörde tahrik dişlisi ve kova",
          "Gövde içinde zincir ve kovalar",
          "Zincir, dişli ve kova bağlantısı",
          "Zincirli elevatör kovası",
        ],
      },
      faq: {
        title: "Zincirli Elevatör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Zincirli elevatör ile bantlı elevatör arasındaki fark nedir?",
            answer:
              "İki elevatör de malzemeyi kovalarla dikey taşır. Zincirli elevatörde kovalar zincire, bantlı elevatörde ise kauçuk veya benzeri bir banda bağlıdır. Zincirli yapı iri taneli ve ağır malzemelerde tercih edilen bir çözümdür.",
          },
          {
            question: "Zincirli elevatör sıcak ürünlerde kullanılabilir mi?",
            answer:
              "Sıcak ürünlerde uygunluk; zincir, kova ve yataklama malzemeleri ile ürün sıcaklığına göre proje bazında değerlendirilir. Her zincirli elevatör her sıcaklığa uygun değildir.",
          },
          {
            question: "Kova tipi ve aralığı nasıl seçilir?",
            answer:
              "Kova tipi ve aralığı; kapasite, malzemenin tane boyutu, akış davranışı ve besleme-boşaltma düzenine göre seçilir.",
          },
          {
            question: "Geri akış ve malzeme birikmesi nasıl önlenir?",
            answer:
              "Uygun boşaltma geometrisi, ayak bölümünün tasarımı, zincir gerdirme ve gerektiğinde geri dönüş engelleyici gibi önlemlerle geri akış ve birikme kontrol altında tutulur.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Malzeme türü, tane boyutu, yığın yoğunluğu, ürün sıcaklığı, saatlik kapasite ve besleme ile tahliye arasındaki yükseklik temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Zincirli elevatör için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve elevatör yüksekliğinize göre zincirli elevatörü ve bağlantılarını birlikte netleştirelim.",
        mailSubject: "Zincirli Elevatör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve tane boyutu",
          "Yığın yoğunluğu ve ürün sıcaklığı",
          "Saatlik kapasite (ton/saat)",
          "Besleme ve tahliye arası yükseklik",
          "Besleme ve tahliye bağlantıları",
          "Kapalı alan veya açık saha kurulumu",
        ],
        inquiryLines: [
          "Merhaba, zincirli elevatör için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Tane boyutu:",
          "Ürün sıcaklığı:",
          "Kapasite (ton/saat):",
          "Yükseklik (m):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Chain Bucket Elevator | Vertical Bulk Handling",
        description:
          "Chain bucket elevators that lift bulk material vertically with buckets on a chain. Project-specific design for minerals, cement raw materials and coarse products.",
      },
      breadcrumbLabel: "Chain Bucket Elevator",
      h1: "Chain Bucket Elevator – Vertical Conveying with Chain and Buckets",
      productCategory: "Chain Bucket Elevator",
      overview: {
        imageAlt: "Buckets on a chain at the head of a chain bucket elevator",
        tagline: "Chain Bucket Elevator",
        keyFacts: [
          { label: "Task", value: "Vertical transport of bulk material" },
          { label: "Conveying element", value: "Chain and buckets" },
          { label: "Drive", value: "Head sprocket / pulley unit" },
          { label: "Sizing", value: "Capacity, lift height and material" },
        ],
        title: "Vertical Bulk Conveying with Chain and Buckets",
        paragraphs: [
          "A chain bucket elevator is vertical conveying equipment in which buckets fixed to a chain at intervals pick up material at the boot, carry it upwards inside an enclosed casing and discharge it at the head. The chain runs between the drive sprocket or pulley at the top and the take-up unit at the bottom.",
          "Using a chain instead of a belt as the conveying element is a preferred solution for coarse and heavy bulk materials. Chain type, bucket type and bucket spacing are selected according to capacity, lift height, particle size and density.",
          "The feeding arrangement (buckets scooping from the boot or material fed directly into the buckets) and the discharge at the head are determined by the flow behaviour of the material. Build-up and backflow are controlled through boot and head design.",
        ],
        note: "For hot or highly abrasive materials, chain, bucket and casing materials and bearings are assessed separately; not every chain elevator suits every condition.",
      },
      process: {
        title: "Chain Bucket Elevator Material Flow",
        intro: "The diagram shows the typical flow in which the chain bucket elevator takes material at the boot inlet and carries it to the head discharge.",
        note: "The elevator only conveys vertically; conveyors, silos or process equipment before and after it depend on the plant concept.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Boot feeding", text: "Material enters the elevator through the inlet at the boot." },
          { title: "Bucket filling", text: "Buckets on the chain pick up material at the boot." },
          { title: "Vertical lifting", text: "The chain carries the loaded buckets upwards in the enclosed casing." },
          { title: "Head discharge", text: "As the buckets turn at the head, material falls into the discharge spout." },
        ],
        flow: {
          svgTitle: "Chain bucket elevator material flow diagram",
          svgDesc: "Material line: boot inlet, chain bucket elevator, head discharge, downstream equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Boot feeding", sub: "Boot inlet" }],
          drum: { title: "CHAIN ELEVATOR", sub: "chain · bucket · vertical" },
          after: [
            { title: "Head discharge", sub: "Head and spout" },
            { title: "Next equipment", sub: "Silo, conveyor, process" },
          ],
        },
      },
      applications: {
        title: "Chain Bucket Elevator Applications",
        items: [
          {
            title: "Clinker and Cement Raw Materials",
            text: "Lifting coarse, abrasive mineral raw materials to silos or process inlets. Chain, buckets and wear surfaces are selected per project for the product.",
            imageAlt: "Coarse cement clinker in a bucket",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Coal and Coarse Bulk Material",
            text: "Vertical transport of lump coal and similar coarse bulk materials to storage and feeding points. Bucket volume and spacing follow particle size.",
            imageAlt: "Pile of lump coal",
            linkLabel: "Storage and Feeding Systems",
          },
          {
            title: "Lime and Mineral Powders",
            text: "Lifting lime and similar mineral powders in an enclosed casing. Dust sealing, feeding arrangement and discharge are designed for the product flow.",
            imageAlt: "White calcium oxide (quicklime) powder",
            linkLabel: "Chemical Process Industry",
          },
        ],
      },
      design: {
        title: "Custom Chain Bucket Elevator Design and Manufacturing",
        intro:
          "PRO MAKINA engineers chain bucket elevators around capacity, lift height and material properties. Chain and buckets, head and boot units, casing, take-up, feeding and discharge arrangement and inspection doors are designed together.",
        highlights: ["Chain and buckets matched to material", "Head and boot sprocket / pulley units", "Chain take-up and maintenance access", "Speed and operating safety monitoring"],
        figureAlt: "Round-link chain and drive sprocket of a chain bucket elevator",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Material", text: "Material type, particle size, bulk density, temperature and abrasiveness." },
          { title: "Capacity and Height", text: "Hourly capacity and lift height between inlet and discharge." },
          { title: "Chain and Bucket", text: "Chain type, bucket type, bucket volume and spacing." },
          { title: "Drive and Take-up", text: "Gear motor, head and boot units, take-up arrangement." },
          { title: "Safety and Monitoring", text: "Speed monitoring, backstop, level signals and maintenance access." },
        ],
        dataNote: "Lift height, capacity and drive power are calculated from project data; suitability for hot or abrasive products is assessed separately.",
      },
      gallery: {
        title: "Chain Bucket Elevator Photo Gallery",
        captions: [
          "Drive sprocket and bucket of a chain elevator",
          "Chain and buckets inside the casing",
          "Chain, sprocket and bucket attachment",
          "Chain elevator bucket",
        ],
      },
      faq: {
        title: "Chain Bucket Elevator FAQ",
        items: [
          {
            question: "What is the difference between a chain and a belt bucket elevator?",
            answer:
              "Both lift material vertically in buckets. On a chain elevator the buckets are fixed to a chain; on a belt elevator to a rubber or similar belt. The chain design is preferred for coarse and heavy materials.",
          },
          {
            question: "Can a chain bucket elevator handle hot products?",
            answer:
              "Suitability for hot products is assessed per project based on chain, bucket and bearing materials and product temperature. Not every chain elevator suits every temperature.",
          },
          {
            question: "How are bucket type and spacing selected?",
            answer: "Bucket type and spacing are selected according to capacity, particle size, flow behaviour and the feeding and discharge arrangement.",
          },
          {
            question: "How are backflow and build-up prevented?",
            answer:
              "Suitable discharge geometry, boot design, chain take-up and, where required, a backstop keep backflow and build-up under control.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, particle size, bulk density, product temperature, hourly capacity and the lift height between inlet and discharge.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a chain bucket elevator",
        text: "Share your material, capacity and lift height, and we will define the chain bucket elevator and its connections together with you.",
        mailSubject: "Chain Bucket Elevator Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and particle size",
          "Bulk density and product temperature",
          "Hourly capacity (t/h)",
          "Lift height between inlet and discharge",
          "Inlet and discharge connections",
          "Indoor or outdoor installation",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a chain bucket elevator.",
          "",
          "Material:",
          "Particle size:",
          "Product temperature:",
          "Capacity (t/h):",
          "Lift height (m):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Цепной ковшовый элеватор | Вертикальный транспорт сыпучих",
        description:
          "Цепные ковшовые элеваторы для вертикального подъёма сыпучих материалов ковшами на цепи. Проектирование для минералов, цементного сырья и крупнокусковых продуктов.",
      },
      breadcrumbLabel: "Цепной ковшовый элеватор",
      h1: "Цепной ковшовый элеватор – вертикальный транспорт цепью и ковшами",
      productCategory: "Цепной ковшовый элеватор",
      overview: {
        imageAlt: "Ковши на цепи в головной части цепного элеватора",
        tagline: "Цепной ковшовый элеватор",
        keyFacts: [
          { label: "Задача", value: "Вертикальный подъём сыпучих материалов" },
          { label: "Тяговый орган", value: "Цепь и ковши" },
          { label: "Привод", value: "Головная звёздочка / барабан" },
          { label: "Расчёт", value: "Производительность, высота, материал" },
        ],
        title: "Вертикальный подъём сыпучих материалов цепью и ковшами",
        paragraphs: [
          "Цепной ковшовый элеватор — оборудование вертикального транспорта, в котором ковши, закреплённые на цепи с определённым шагом, захватывают материал в башмаке, поднимают его в закрытом кожухе и разгружают в головке. Цепь обегает приводную звёздочку или барабан вверху и натяжное устройство внизу.",
          "Применение цепи вместо ленты — предпочтительное решение для крупнокусковых и тяжёлых сыпучих материалов. Тип цепи, тип ковшей и их шаг выбираются по производительности, высоте подъёма, крупности и плотности материала.",
          "Способ загрузки (зачерпывание из башмака или подача непосредственно в ковши) и разгрузки в головке определяются сыпучестью материала. Налипание и обратное просыпание контролируются конструкцией башмака и головки.",
        ],
        note: "Для горячих или сильно абразивных материалов материалы цепи, ковшей, кожуха и подшипники оцениваются отдельно; не каждый цепной элеватор подходит для любых условий.",
      },
      process: {
        title: "Движение материала в цепном элеваторе",
        intro: "Схема показывает типовой поток: элеватор принимает материал в загрузочный патрубок башмака и поднимает его к разгрузке в головке.",
        note: "Элеватор выполняет только вертикальный подъём; конвейеры, силосы или оборудование до и после него определяются концепцией предприятия.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Загрузка в башмак", text: "Материал поступает в элеватор через загрузочный патрубок башмака." },
          { title: "Заполнение ковшей", text: "Ковши на цепи захватывают материал в башмаке." },
          { title: "Вертикальный подъём", text: "Цепь поднимает гружёные ковши в закрытом кожухе." },
          { title: "Разгрузка в головке", text: "При огибании головки материал высыпается в разгрузочный патрубок." },
        ],
        flow: {
          svgTitle: "Схема движения материала в цепном ковшовом элеваторе",
          svgDesc: "Линия материала: загрузка в башмак, цепной ковшовый элеватор, разгрузка в головке, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Патрубок башмака" }],
          drum: { title: "ЦЕПНОЙ ЭЛЕВАТОР", sub: "цепь · ковш · подъём" },
          after: [
            { title: "Разгрузка", sub: "Головка и патрубок" },
            { title: "Далее", sub: "Силос, конвейер, процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения цепного ковшового элеватора",
        items: [
          {
            title: "Клинкер и цементное сырьё",
            text: "Подъём крупнокускового абразивного минерального сырья в силосы или на технологические входы. Цепь, ковши и износостойкие поверхности подбираются под продукт.",
            imageAlt: "Крупнокусковой цементный клинкер в ведре",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Уголь и крупнокусковые материалы",
            text: "Вертикальная подача кускового угля и подобных материалов к местам хранения и питания. Объём и шаг ковшей выбираются по крупности.",
            imageAlt: "Куча кускового угля",
            linkLabel: "Системы хранения и подачи",
          },
          {
            title: "Известь и минеральные порошки",
            text: "Подъём извести и подобных минеральных порошков в закрытом кожухе. Герметичность, загрузка и разгрузка проектируются по сыпучести продукта.",
            imageAlt: "Белый порошок негашёной извести",
            linkLabel: "Химическая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление цепных ковшовых элеваторов",
        intro:
          "PRO MAKINA проектирует цепные элеваторы исходя из производительности, высоты подъёма и свойств материала. Цепь и ковши, головка и башмак, кожух, натяжное устройство, загрузка и разгрузка, смотровые люки разрабатываются совместно.",
        highlights: ["Цепь и ковши под материал", "Головные и башмачные звёздочки / барабаны", "Натяжение цепи и доступ", "Контроль скорости и безопасности"],
        figureAlt: "Круглозвенная цепь и приводная звёздочка цепного элеватора",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Материал", text: "Вид, крупность, насыпная плотность, температура и абразивность." },
          { title: "Производительность и высота", text: "Часовая производительность и высота подъёма." },
          { title: "Цепь и ковш", text: "Тип цепи, тип ковша, объём и шаг ковшей." },
          { title: "Привод и натяжение", text: "Мотор-редуктор, головка и башмак, натяжное устройство." },
          { title: "Безопасность и контроль", text: "Контроль скорости, останов обратного хода, уровень, доступ." },
        ],
        dataNote: "Высота подъёма, производительность и мощность привода рассчитываются по данным проекта; пригодность для горячих или абразивных продуктов оценивается отдельно.",
      },
      gallery: {
        title: "Фотогалерея цепных ковшовых элеваторов",
        captions: ["Приводная звёздочка и ковш цепного элеватора", "Цепь и ковши внутри кожуха", "Крепление ковша к цепи у звёздочки", "Ковш цепного элеватора"],
      },
      faq: {
        title: "Часто задаваемые вопросы о цепном ковшовом элеваторе",
        items: [
          {
            question: "Чем цепной элеватор отличается от ленточного?",
            answer:
              "Оба поднимают материал ковшами. В цепном элеваторе ковши закреплены на цепи, в ленточном — на резинотканевой или подобной ленте. Цепная конструкция предпочтительна для крупнокусковых и тяжёлых материалов.",
          },
          {
            question: "Можно ли транспортировать горячие продукты?",
            answer:
              "Пригодность для горячих продуктов оценивается по каждому проекту с учётом материалов цепи, ковшей, подшипников и температуры продукта. Не каждый цепной элеватор подходит для любой температуры.",
          },
          {
            question: "Как выбираются тип и шаг ковшей?",
            answer: "Тип и шаг ковшей выбираются по производительности, крупности, сыпучести и схеме загрузки и разгрузки.",
          },
          {
            question: "Как предотвратить обратное просыпание и налипание?",
            answer: "Подходящая геометрия разгрузки, конструкция башмака, натяжение цепи и при необходимости останов обратного хода удерживают их под контролем.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, крупность, насыпная плотность, температура продукта, часовая производительность и высота подъёма.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на цепной элеватор",
        text: "Сообщите материал, производительность и высоту подъёма — вместе определим элеватор и его подключения.",
        mailSubject: "Запрос предложения: цепной ковшовый элеватор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и крупность",
          "Насыпная плотность и температура продукта",
          "Часовая производительность (т/ч)",
          "Высота подъёма",
          "Загрузочные и разгрузочные патрубки",
          "Установка в помещении или на открытой площадке",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на цепной ковшовый элеватор.",
          "",
          "Материал:",
          "Крупность:",
          "Температура продукта:",
          "Производительность (т/ч):",
          "Высота подъёма (м):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "رافع قواديس بالسلسلة | نقل رأسي للمواد السائبة",
        description:
          "رافعات قواديس بالسلسلة ترفع المواد السائبة رأسيًا بقواديس مثبتة على سلسلة. تصميم مخصص للمعادن وخامات الأسمنت والمنتجات الخشنة.",
      },
      breadcrumbLabel: "رافع قواديس بالسلسلة",
      h1: "رافع قواديس بالسلسلة – نقل رأسي بالسلسلة والقواديس",
      productCategory: "رافع قواديس بالسلسلة",
      overview: {
        imageAlt: "قواديس مثبتة على سلسلة في رأس رافع سلسلي",
        tagline: "رافع قواديس بالسلسلة",
        keyFacts: [
          { label: "المهمة", value: "نقل رأسي للمواد السائبة" },
          { label: "عنصر النقل", value: "سلسلة وقواديس" },
          { label: "الإدارة", value: "ترس / أسطوانة الرأس" },
          { label: "التحجيم", value: "السعة وارتفاع الرفع والمادة" },
        ],
        title: "نقل رأسي للمواد السائبة بالسلسلة والقواديس",
        paragraphs: [
          "رافع القواديس بالسلسلة معدة نقل رأسي تلتقط فيها قواديس مثبتة على سلسلة بمسافات محددة المادة في القاعدة، وترفعها داخل غلاف مغلق، وتفرغها في الرأس. تدور السلسلة بين ترس أو أسطوانة الإدارة في الأعلى ووحدة الشد في الأسفل.",
          "يُعد استخدام السلسلة بدل السير عنصرًا للنقل حلًا مفضلًا للمواد السائبة الخشنة والثقيلة. ويُختار نوع السلسلة ونوع القواديس والمسافة بينها وفق السعة وارتفاع الرفع وحجم الجسيمات والكثافة.",
          "تُحدَّد طريقة التلقيم (غرف القواديس من القاعدة أو التلقيم المباشر في القواديس) وطريقة التفريغ في الرأس وفق سلوك انسياب المادة. ويُتحكم في التراكم والارتداد من خلال تصميم القاعدة والرأس.",
        ],
        note: "في المواد الساخنة أو شديدة الكشط تُقيَّم مواد السلسلة والقواديس والغلاف والمحامل بشكل منفصل؛ فليس كل رافع سلسلي مناسبًا لكل الظروف.",
      },
      process: {
        title: "تدفق المادة في رافع القواديس بالسلسلة",
        intro: "يوضح المخطط التدفق النموذجي الذي يستقبل فيه الرافع المادة من فتحة القاعدة ويرفعها إلى مخرج التفريغ في الرأس.",
        note: "يقتصر عمل الرافع على النقل الرأسي، وتتحدد الناقلات أو الصوامع أو معدات العملية قبله وبعده وفق تصور المنشأة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "التلقيم في القاعدة", text: "تدخل المادة الرافع عبر فتحة التلقيم في القاعدة." },
          { title: "ملء القواديس", text: "تلتقط القواديس المثبتة على السلسلة المادة في القاعدة." },
          { title: "الرفع الرأسي", text: "ترفع السلسلة القواديس المحمّلة داخل الغلاف المغلق." },
          { title: "التفريغ في الرأس", text: "عند دوران القواديس في الرأس تسقط المادة في مخرج التفريغ." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في رافع القواديس بالسلسلة",
          svgDesc: "خط المادة: فتحة القاعدة، رافع القواديس بالسلسلة، التفريغ في الرأس، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "فتحة القاعدة" }],
          drum: { title: "رافع سلسلي", sub: "سلسلة · قادوس · رأسي" },
          after: [
            { title: "التفريغ", sub: "الرأس والمخرج" },
            { title: "المعدة التالية", sub: "صومعة، ناقل، عملية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام رافع القواديس بالسلسلة",
        items: [
          {
            title: "الكلنكر وخامات الأسمنت",
            text: "رفع الخامات المعدنية الخشنة والكاشطة إلى الصوامع أو مداخل العملية، مع اختيار السلسلة والقواديس وأسطح التآكل وفق المنتج لكل مشروع.",
            imageAlt: "كلنكر أسمنت خشن داخل دلو",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الفحم والمواد الخشنة",
            text: "نقل الفحم الكتلي والمواد السائبة الخشنة المماثلة رأسيًا إلى نقاط التخزين والتلقيم، مع تحديد حجم القواديس والمسافة بينها وفق حجم الجسيمات.",
            imageAlt: "كومة من كتل الفحم",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
          {
            title: "الجير والمساحيق المعدنية",
            text: "رفع الجير والمساحيق المعدنية المماثلة داخل غلاف مغلق، مع تصميم الإحكام والتلقيم والتفريغ وفق انسياب المنتج.",
            imageAlt: "مسحوق الجير الحي (أكسيد الكالسيوم) الأبيض",
            linkLabel: "الصناعات الكيميائية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع رافعات قواديس سلسلية مخصصة",
        intro:
          "تصمم PRO MAKINA رافعات القواديس بالسلسلة وفق السعة وارتفاع الرفع وخصائص المادة. وتُصمَّم السلسلة والقواديس ومجموعتا الرأس والقاعدة والغلاف ووحدة الشد وترتيب التلقيم والتفريغ وأبواب الفحص معًا.",
        highlights: ["سلسلة وقواديس مطابقة للمادة", "تروس / أسطوانات الرأس والقاعدة", "شد السلسلة وسهولة الصيانة", "مراقبة السرعة وسلامة التشغيل"],
        figureAlt: "سلسلة ذات حلقات مستديرة وترس إدارة رافع سلسلي",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة", text: "نوع المادة وحجم الجسيمات والكثافة الظاهرية والحرارة والكشط." },
          { title: "السعة والارتفاع", text: "السعة بالساعة وارتفاع الرفع بين التلقيم والتفريغ." },
          { title: "السلسلة والقادوس", text: "نوع السلسلة ونوع القادوس وحجمه والمسافة بين القواديس." },
          { title: "الإدارة والشد", text: "المحرك المخفض ومجموعتا الرأس والقاعدة ووحدة الشد." },
          { title: "السلامة والمراقبة", text: "مراقبة السرعة ومانع الارتداد وإشارات المستوى وسهولة الصيانة." },
        ],
        dataNote: "يُحسب ارتفاع الرفع والسعة وقدرة الإدارة من بيانات المشروع، وتُقيَّم ملاءمة المنتجات الساخنة أو الكاشطة بشكل منفصل.",
      },
      gallery: {
        title: "معرض صور رافعات القواديس بالسلسلة",
        captions: ["ترس الإدارة وقادوس رافع سلسلي", "السلسلة والقواديس داخل الغلاف", "تثبيت القادوس بالسلسلة عند الترس", "قادوس رافع سلسلي"],
      },
      faq: {
        title: "أسئلة شائعة حول رافع القواديس بالسلسلة",
        items: [
          {
            question: "ما الفرق بين رافع القواديس بالسلسلة ورافع القواديس بالسير؟",
            answer:
              "كلاهما يرفع المادة بالقواديس، لكن القواديس في الرافع السلسلي مثبتة على سلسلة وفي الرافع الحزامي على سير مطاطي أو ما يماثله. ويُفضَّل التصميم السلسلي للمواد الخشنة والثقيلة.",
          },
          {
            question: "هل يصلح رافع القواديس بالسلسلة للمنتجات الساخنة؟",
            answer:
              "تُقيَّم الملاءمة لكل مشروع وفق مواد السلسلة والقواديس والمحامل وحرارة المنتج؛ فليس كل رافع سلسلي مناسبًا لكل درجة حرارة.",
          },
          {
            question: "كيف يُختار نوع القواديس والمسافة بينها؟",
            answer: "يُختاران وفق السعة وحجم الجسيمات وسلوك الانسياب وترتيب التلقيم والتفريغ.",
          },
          {
            question: "كيف يُمنع الارتداد والتراكم؟",
            answer: "تساعد هندسة التفريغ المناسبة وتصميم القاعدة وشد السلسلة، ومانع الارتداد عند الحاجة، على التحكم فيهما.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وحجم الجسيمات والكثافة الظاهرية وحرارة المنتج والسعة بالساعة وارتفاع الرفع بين التلقيم والتفريغ.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لرافع قواديس بالسلسلة",
        text: "شاركنا المادة والسعة وارتفاع الرفع، لنحدد معًا الرافع ووصلاته.",
        mailSubject: "طلب عرض سعر: رافع قواديس بالسلسلة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وحجم الجسيمات",
          "الكثافة الظاهرية وحرارة المنتج",
          "السعة بالساعة (طن/ساعة)",
          "ارتفاع الرفع بين التلقيم والتفريغ",
          "وصلات التلقيم والتفريغ",
          "تركيب داخلي أو خارجي",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لرافع قواديس بالسلسلة.",
          "",
          "المادة:",
          "حجم الجسيمات:",
          "حرارة المنتج:",
          "السعة (طن/ساعة):",
          "ارتفاع الرفع (م):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
