import type { DrumPageConfig } from "../types";

// Dik milli kırıcı: fotoğraflara göre dik milli darbeli kırıcı (VSI). Belirli rotor konfigürasyonu
// (taş-taş / taş-örs) veya garantili kübik ürün iddiası yoktur; kapasite ve güç verilmez.
const img = (file: string) => `/images/kirici dik milli/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const vsiCrusherPage: DrumPageConfig = {
  key: "vsiCrusher",
  group: "crushers",
  trSlug: "dik-milli-kiricilar",
  mainImage: img("kiricidikmil8.jpg"),
  applications: [
    { image: app("m-kum.webp"), link: "mining" },
    { image: app("agrega-konisi.webp"), link: "screeningSystems" },
    { image: app("kirmatas-yakin.webp"), link: "conveying" },
  ],
  figure: img("kiricidikmil3.jpg"),
  gallery: [img("kiricidikmil1.jpg"), img("kiricidikmil4.jpg"), img("kiricidikmil5.jpg"), img("kiricidikmil7.jpg")],
  sectors: ["mining", "recycling", "chemicalProcess"],
  resources: ["jawCrusher", "secondaryImpactCrusher", "hammerCrusher", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Dik Milli Kırıcı İmalatı | VSI Kum ve Agrega Kırıcı | PRO MAKİNA",
        description:
          "Dik milli rotorla hızlandırılan malzemeyi darbeyle kıran dik milli darbeli kırıcı (VSI) imalatı. Kırma kum ve ince agrega üretimi için projeye özel tasarım.",
      },
      breadcrumbLabel: "Dik Milli Kırıcılar",
      h1: "Dik Milli Kırıcı – Dik Milli Darbeli Kırıcı (VSI)",
      productCategory: "Dik Milli Darbeli Kırıcı (VSI)",
      overview: {
        imageAlt: "Atölyede besleme hunisi ve tahrik grubu görünen dik milli darbeli kırıcı",
        tagline: "Dik Milli Darbeli Kırıcı (VSI)",
        keyFacts: [
          { label: "Kırma prensibi", value: "Rotorla hızlandırma ve darbe" },
          { label: "Kademe", value: "Genellikle üçüncü kademe / kum üretimi" },
          { label: "Ürün", value: "Kırma kum ve ince agrega" },
          { label: "Aşınan parçalar", value: "Rotor uçları ve iç astarlar" },
        ],
        title: "Rotorla Hızlandırılan Malzemenin Darbeyle Kırılması",
        paragraphs: [
          "Dik milli darbeli kırıcıda (VSI) malzeme, üstteki besleme ağzından dikey mil üzerinde yüksek devirle dönen rotorun merkezine düşer. Rotor malzemeyi hızlandırarak dışarı fırlatır; malzeme kırma haznesindeki yüzeylere veya malzeme yatağına çarparak kırılır.",
          "Bu kırma şekli, çeneli veya çekiçli kırıcılardan farklı olarak ince agrega ve kırma kum üretimine yöneliktir. Ürün dağılımı ve tane şekli; rotor hızı, rotor ve hazne düzeni ile beslenen malzemenin özelliklerine bağlıdır.",
          "VSI genellikle birincil ve ikincil kırıcılardan sonra, eleme ile birlikte kapalı devrede çalışır. Besleme tane boyutu, malzemenin aşındırıcılığı ve nem durumu, rotor ve aşınma elemanlarının seçiminde belirleyicidir.",
        ],
        note: "Ürün tane şekli ve ince oranı malzemeye ve işletme koşullarına göre değişir; hedef dağılım numune testleri ve eleme devresiyle birlikte değerlendirilmelidir.",
      },
      process: {
        title: "Dik Milli Kırıcı Malzeme Akışı",
        intro:
          "Şema, VSI kırıcının malzemeyi rotorla hızlandırıp darbeyle kırdığı ve eleme devresine gönderdiği tipik akışı gösterir. Eleme ve geri dönüş hattı ayrı ekipmanlardır.",
        note: "Elekte hedef boyutun üstünde kalan malzeme kırıcıya geri döndürülebilir; devre düzeni tesis kurgusuna göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme besleme", text: "Ön kırılmış malzeme besleme ağzından rotor merkezine düşer." },
          { title: "Rotorla hızlandırma", text: "Dikey mil üzerindeki rotor malzemeyi hızlandırarak dışarı fırlatır." },
          { title: "Darbe ile kırma", text: "Malzeme hazne yüzeylerine veya malzeme yatağına çarparak kırılır." },
          { title: "Ürün tahliyesi", text: "Kırılan ürün alttan tahliye edilerek eleme devresine gider." },
        ],
        flow: {
          svgTitle: "Dik milli kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: ön kırılmış malzeme beslemesi, dik milli darbeli kırıcı, alt tahliye, eleme devresi.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Ön kırılmış malzeme" }],
          drum: { title: "DİK MİLLİ KIRICI", sub: "dikey rotor · darbe" },
          after: [
            { title: "Tahliye", sub: "Alt çıkış" },
            { title: "Eleme devresi", sub: "Ürün ve geri dönüş" },
          ],
        },
      },
      applications: {
        title: "Dik Milli Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Kırma Kum Üretimi",
            text: "Ön kırılmış taştan beton ve harç için kırma kum üretilmesi. İnce oranı ve dağılım, eleme ve gerekirse yıkama devresiyle birlikte ayarlanır.",
            imageAlt: "Yığın hâlinde kırma kum",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "İnce Agrega ve Mıcır",
            text: "Agrega tesislerinde ince agrega fraksiyonlarının son kademe kırılması. Kırıcı, eleme devresiyle birlikte boyutlandırılır.",
            imageAlt: "Konveyörden dökülerek oluşan agrega yığını",
            linkLabel: "Eleme ve Sınıflandırma Sistemleri",
          },
          {
            title: "Kırmataş Tane Şekli İyileştirme",
            text: "Kırmataş fraksiyonlarında tane şeklinin iyileştirilmesine yönelik son kademe kırma. Ulaşılacak şekil malzemeye bağlıdır ve testle doğrulanmalıdır.",
            imageAlt: "Yakın plan koyu renkli kırmataş taneleri",
            linkLabel: "Taşıma Ekipmanları",
          },
        ],
      },
      design: {
        title: "Projeye Özel Dik Milli Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA dik milli kırıcıları besleme tane boyutu, malzemenin aşındırıcılığı, hedef ürün dağılımı ve kapasiteye göre projelendirir. Rotor ve kırma haznesi düzeni, aşınma elemanları, mil ve yataklama, tahrik ve titreşim kontrolü birlikte tasarlanır.",
        highlights: ["Ürüne göre rotor ve hazne düzeni", "Değiştirilebilir rotor aşınma parçaları", "Dikey mil ve yataklama grubu", "Kırma-eleme devresine entegrasyon"],
        figureAlt: "Atölyede besleme hunileri ve motorları görünen dik milli kırıcı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Besleme", text: "Besleme tane boyutu ve ön kırma kademesi." },
          { title: "Malzeme", text: "Sertlik, aşındırıcılık, nem ve ince içeriği." },
          { title: "Hedef Ürün", text: "İstenen ürün dağılımı, ince oranı ve tane şekli beklentisi." },
          { title: "Rotor ve Hazne", text: "Rotor tipi, rotor hızı, hazne düzeni ve aşınma elemanları." },
          { title: "Tahrik ve Entegrasyon", text: "Motor ve tahrik, titreşim, bakım erişimi ve eleme devresi." },
        ],
        dataNote: "Rotor hızı, güç ve kapasite malzeme testleri ve proses hesabıyla belirlenir; belirli tane şekli garanti edilmez.",
      },
      gallery: {
        title: "Dik Milli Kırıcı Fotoğraf Galerisi",
        captions: [
          "Sahada çelik konstrüksiyon altında dik milli kırıcılar",
          "Atölyede tahrik grubu görünen dik milli kırıcı",
          "Dik milli kırıcı ve besleme hunileri",
          "Dik milli kırıcının önden görünümü",
        ],
      },
      faq: {
        title: "Dik Milli Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Dik milli kırıcı nasıl çalışır?",
            answer:
              "Malzeme, dikey mil üzerinde dönen rotorun merkezine beslenir. Rotor malzemeyi hızlandırıp fırlatır; malzeme hazne yüzeylerine veya malzeme yatağına çarparak kırılır.",
          },
          {
            question: "Dik milli kırıcı hangi kademede kullanılır?",
            answer: "Genellikle birincil ve ikincil kırıcılardan sonra, kırma kum ve ince agrega üretiminde son kademe olarak eleme ile birlikte kullanılır.",
          },
          {
            question: "Kübik ürün garanti edilir mi?",
            answer: "Tane şekli malzemeye, rotor düzenine ve işletme koşullarına bağlıdır. Hedef şekil ve dağılım numune testleriyle değerlendirilir; genel bir garanti verilmez.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer: "Rotor uç parçaları, rotor iç astarları ve hazne astarları aşınan elemanlardır; aşınma hızı malzemenin aşındırıcılığına bağlıdır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, aşındırıcılık, nem, besleme tane boyutu, hedef ürün dağılımı ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Dik milli kırıcı için teknik teklif alın",
        text: "Malzemeniz, besleme boyutunuz ve hedef ürün dağılımınıza göre dik milli kırıcıyı ve eleme devresini birlikte netleştirelim.",
        mailSubject: "Dik Milli Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve aşındırıcılığı",
          "Nem ve ince içeriği",
          "Besleme tane boyutu",
          "Hedef ürün dağılımı",
          "Saatlik kapasite (ton/saat)",
          "Mevcut kırma-eleme hattı",
        ],
        inquiryLines: [
          "Merhaba, dik milli kırıcı için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Besleme tane boyutu (mm):",
          "Hedef ürün (mm):",
          "Kapasite (ton/saat):",
          "Mevcut hat:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "VSI Crusher Manufacturer | Vertical Shaft Impact Crusher",
        description:
          "Vertical shaft impact crushers (VSI) that accelerate material in a rotor and break it by impact. For manufactured sand and fine aggregate production.",
      },
      breadcrumbLabel: "Vertical Shaft Impact Crusher",
      h1: "Vertical Shaft Impact Crusher (VSI) – Sand and Fine Aggregate",
      productCategory: "Vertical Shaft Impact Crusher (VSI)",
      overview: {
        imageAlt: "Vertical shaft impact crusher in a workshop showing feed hopper and drive",
        tagline: "Vertical Shaft Impact Crusher (VSI)",
        keyFacts: [
          { label: "Crushing principle", value: "Rotor acceleration and impact" },
          { label: "Stage", value: "Usually tertiary / sand production" },
          { label: "Product", value: "Manufactured sand and fine aggregate" },
          { label: "Wear parts", value: "Rotor tips and internal liners" },
        ],
        title: "Crushing by Impact after Rotor Acceleration",
        paragraphs: [
          "In a vertical shaft impact crusher (VSI), material drops from the top feed opening into the centre of a rotor spinning at high speed on a vertical shaft. The rotor accelerates the material and throws it outwards; it breaks on impact with surfaces in the crushing chamber or with a bed of material.",
          "Unlike jaw or hammer crushers, this crushing method targets fine aggregate and manufactured sand production. Size distribution and particle shape depend on rotor speed, rotor and chamber arrangement and the properties of the feed.",
          "A VSI usually works after primary and secondary crushers, in closed circuit with screening. Feed size, abrasiveness and moisture of the material are decisive in selecting the rotor and wear parts.",
        ],
        note: "Particle shape and fines content vary with material and operating conditions; the target distribution should be assessed with sample tests together with the screening circuit.",
      },
      process: {
        title: "VSI Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the VSI accelerates material in the rotor, breaks it by impact and sends it to the screening circuit. Screening and return line are separate equipment.",
        note: "Oversize material from the screen can be returned to the crusher; the circuit arrangement depends on the plant concept.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material feeding", text: "Pre-crushed material falls through the feed opening into the rotor centre." },
          { title: "Rotor acceleration", text: "The rotor on the vertical shaft accelerates the material and throws it out." },
          { title: "Impact crushing", text: "Material breaks on impact with chamber surfaces or a material bed." },
          { title: "Product discharge", text: "Crushed product is discharged below and goes to the screening circuit." },
        ],
        flow: {
          svgTitle: "VSI crusher material flow diagram",
          svgDesc: "Material line: pre-crushed feed, vertical shaft impact crusher, bottom discharge, screening circuit.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Pre-crushed material" }],
          drum: { title: "VSI CRUSHER", sub: "vertical rotor · impact" },
          after: [
            { title: "Discharge", sub: "Bottom outlet" },
            { title: "Screening circuit", sub: "Product and return" },
          ],
        },
      },
      applications: {
        title: "VSI Crusher Applications",
        items: [
          {
            title: "Manufactured Sand Production",
            text: "Producing manufactured sand for concrete and mortar from pre-crushed stone. Fines content and grading are adjusted together with screening and, if needed, washing.",
            imageAlt: "Pile of manufactured sand",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Fine Aggregate and Chips",
            text: "Final-stage crushing of fine aggregate fractions in aggregate plants. The crusher is sized together with the screening circuit.",
            imageAlt: "Aggregate pile formed by a discharging conveyor",
            linkLabel: "Screening and Classification",
          },
          {
            title: "Improving Crushed Stone Shape",
            text: "Final-stage crushing aimed at improving the particle shape of crushed stone fractions. The achievable shape depends on the material and must be confirmed by testing.",
            imageAlt: "Close-up of dark crushed stone particles",
            linkLabel: "Conveying Systems",
          },
        ],
      },
      design: {
        title: "Custom VSI Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers VSI crushers around feed size, abrasiveness, target product distribution and capacity. Rotor and chamber arrangement, wear parts, shaft and bearings, drive and vibration control are designed together.",
        highlights: ["Rotor and chamber matched to product", "Replaceable rotor wear parts", "Vertical shaft and bearing assembly", "Integration into crushing and screening"],
        figureAlt: "VSI crusher in a workshop showing feed hoppers and motors",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Feed", text: "Feed size and upstream crushing stage." },
          { title: "Material", text: "Hardness, abrasiveness, moisture and fines content." },
          { title: "Target Product", text: "Required grading, fines content and particle shape expectation." },
          { title: "Rotor and Chamber", text: "Rotor type, rotor speed, chamber arrangement and wear parts." },
          { title: "Drive and Integration", text: "Motor and drive, vibration, maintenance access and screening circuit." },
        ],
        dataNote: "Rotor speed, power and capacity are defined by material tests and process calculation; no specific particle shape is guaranteed.",
      },
      gallery: {
        title: "VSI Crusher Photo Gallery",
        captions: ["VSI crushers under a steel structure on site", "VSI crusher in a workshop showing the drive", "VSI crusher and feed hoppers", "Front view of a VSI crusher"],
      },
      faq: {
        title: "VSI Crusher FAQ",
        items: [
          {
            question: "How does a VSI crusher work?",
            answer: "Material is fed into the centre of a rotor spinning on a vertical shaft. The rotor accelerates and throws it; it breaks on impact with chamber surfaces or a material bed.",
          },
          {
            question: "At which stage is a VSI used?",
            answer: "Usually after primary and secondary crushers, as the final stage in sand and fine aggregate production together with screening.",
          },
          {
            question: "Is a cubical product guaranteed?",
            answer: "Particle shape depends on the material, rotor arrangement and operating conditions. Target shape and grading are assessed by sample tests; no general guarantee is given.",
          },
          {
            question: "Which parts wear?",
            answer: "Rotor tips, rotor internal liners and chamber liners; wear rate depends on the abrasiveness of the material.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, abrasiveness, moisture, feed size, target product grading and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a VSI crusher",
        text: "Share your material, feed size and target grading, and we will define the VSI crusher and screening circuit together with you.",
        mailSubject: "VSI Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and abrasiveness",
          "Moisture and fines content",
          "Feed size",
          "Target product grading",
          "Hourly capacity (t/h)",
          "Existing crushing and screening line",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a VSI crusher.",
          "",
          "Material:",
          "Feed size (mm):",
          "Target product (mm):",
          "Capacity (t/h):",
          "Existing line:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Центробежно-ударная дробилка (VSI) | Песок и отсев",
        description:
          "Центробежно-ударные дробилки с вертикальным валом (VSI), разгоняющие материал в роторе и разрушающие его ударом. Для дроблёного песка и мелкого щебня.",
      },
      breadcrumbLabel: "Центробежно-ударная дробилка",
      h1: "Центробежно-ударная дробилка (VSI) – песок и мелкий щебень",
      productCategory: "Центробежно-ударная дробилка (VSI)",
      overview: {
        imageAlt: "Центробежно-ударная дробилка в цехе с загрузочной воронкой и приводом",
        tagline: "Центробежно-ударная дробилка (VSI)",
        keyFacts: [
          { label: "Принцип", value: "Разгон в роторе и удар" },
          { label: "Стадия", value: "Обычно третья / производство песка" },
          { label: "Продукт", value: "Дроблёный песок и мелкий щебень" },
          { label: "Изнашиваемые детали", value: "Наконечники ротора и футеровка" },
        ],
        title: "Дробление ударом после разгона в роторе",
        paragraphs: [
          "В центробежно-ударной дробилке (VSI) материал через верхнее загрузочное отверстие попадает в центр ротора, вращающегося с высокой скоростью на вертикальном валу. Ротор разгоняет материал и выбрасывает его; материал разрушается при ударе о поверхности камеры или о слой материала.",
          "В отличие от щековых и молотковых дробилок такой способ дробления ориентирован на получение мелкого щебня и дроблёного песка. Гранулометрия и форма зерна зависят от скорости ротора, конструкции ротора и камеры и свойств питания.",
          "VSI обычно работает после первичной и вторичной дробилок в замкнутом цикле с грохочением. Крупность питания, абразивность и влажность определяют выбор ротора и изнашиваемых деталей.",
        ],
        note: "Форма зерна и доля мелочи зависят от материала и режима работы; целевая гранулометрия оценивается испытаниями образцов вместе с циклом грохочения.",
      },
      process: {
        title: "Движение материала в центробежно-ударной дробилке",
        intro: "Схема показывает типовой поток: VSI разгоняет материал в роторе, дробит его ударом и направляет в цикл грохочения. Грохочение и линия возврата — отдельное оборудование.",
        note: "Надрешётный продукт грохота может возвращаться в дробилку; схема цикла определяется концепцией предприятия.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача материала", text: "Предварительно дроблёный материал попадает в центр ротора." },
          { title: "Разгон в роторе", text: "Ротор на вертикальном валу разгоняет и выбрасывает материал." },
          { title: "Дробление ударом", text: "Материал разрушается о поверхности камеры или слой материала." },
          { title: "Выгрузка продукта", text: "Дроблёный продукт выгружается снизу и идёт на грохочение." },
        ],
        flow: {
          svgTitle: "Схема движения материала в центробежно-ударной дробилке",
          svgDesc: "Линия материала: предварительно дроблёное питание, центробежно-ударная дробилка, нижняя выгрузка, цикл грохочения.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Питание", sub: "Дроблёный материал" }],
          drum: { title: "VSI ДРОБИЛКА", sub: "вертикальный ротор · удар" },
          after: [
            { title: "Выгрузка", sub: "Нижний выход" },
            { title: "Грохочение", sub: "Продукт и возврат" },
          ],
        },
      },
      applications: {
        title: "Области применения центробежно-ударной дробилки",
        items: [
          {
            title: "Производство дроблёного песка",
            text: "Получение дроблёного песка для бетона и растворов из предварительно дроблёного камня. Доля мелочи и гранулометрия регулируются вместе с грохочением и при необходимости промывкой.",
            imageAlt: "Куча дроблёного песка",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Мелкий щебень и отсев",
            text: "Дробление мелких фракций на последней стадии на заводах нерудных материалов. Дробилка рассчитывается вместе с циклом грохочения.",
            imageAlt: "Конус заполнителя под разгрузкой конвейера",
            linkLabel: "Грохочение и классификация",
          },
          {
            title: "Улучшение формы зерна щебня",
            text: "Дробление на последней стадии для улучшения формы зерна щебня. Достижимая форма зависит от материала и подтверждается испытаниями.",
            imageAlt: "Тёмный щебень крупным планом",
            linkLabel: "Транспортные системы",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление центробежно-ударных дробилок",
        intro:
          "PRO MAKINA проектирует дробилки VSI исходя из крупности питания, абразивности, целевой гранулометрии и производительности. Ротор и камера, изнашиваемые детали, вал и подшипники, привод и виброконтроль разрабатываются совместно.",
        highlights: ["Ротор и камера под продукт", "Сменные износостойкие детали ротора", "Вертикальный вал и подшипниковый узел", "Интеграция в цикл дробления-грохочения"],
        figureAlt: "Дробилка VSI в цехе с загрузочными воронками и двигателями",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Питание", text: "Крупность питания и предшествующая стадия дробления." },
          { title: "Материал", text: "Твёрдость, абразивность, влажность и содержание мелочи." },
          { title: "Целевой продукт", text: "Гранулометрия, доля мелочи и ожидаемая форма зерна." },
          { title: "Ротор и камера", text: "Тип и скорость ротора, камера и изнашиваемые детали." },
          { title: "Привод и интеграция", text: "Двигатель, вибрация, доступ и цикл грохочения." },
        ],
        dataNote: "Скорость ротора, мощность и производительность определяются испытаниями и расчётом; определённая форма зерна не гарантируется.",
      },
      gallery: {
        title: "Фотогалерея центробежно-ударных дробилок",
        captions: ["Дробилки VSI под металлоконструкцией на площадке", "Дробилка VSI в цехе, вид на привод", "Дробилка VSI и загрузочные воронки", "Дробилка VSI, вид спереди"],
      },
      faq: {
        title: "Часто задаваемые вопросы о центробежно-ударной дробилке",
        items: [
          {
            question: "Как работает дробилка VSI?",
            answer: "Материал подаётся в центр ротора на вертикальном валу. Ротор разгоняет и выбрасывает его, и материал разрушается ударом о поверхности камеры или слой материала.",
          },
          {
            question: "На какой стадии применяется VSI?",
            answer: "Обычно после первичной и вторичной дробилок, как последняя стадия при производстве песка и мелкого щебня вместе с грохочением.",
          },
          {
            question: "Гарантируется ли кубовидная форма?",
            answer: "Форма зерна зависит от материала, конструкции ротора и режима работы. Она оценивается испытаниями образцов; общей гарантии нет.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Наконечники ротора, внутренняя футеровка ротора и камеры; скорость износа зависит от абразивности материала.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, абразивность, влажность, крупность питания, целевая гранулометрия и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на дробилку VSI",
        text: "Сообщите материал, крупность питания и целевую гранулометрию — вместе определим дробилку и цикл грохочения.",
        mailSubject: "Запрос предложения: центробежно-ударная дробилка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и абразивность",
          "Влажность и содержание мелочи",
          "Крупность питания",
          "Целевая гранулометрия",
          "Часовая производительность (т/ч)",
          "Существующая линия дробления",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на дробилку VSI.",
          "",
          "Материал:",
          "Крупность питания (мм):",
          "Целевой продукт (мм):",
          "Производительность (т/ч):",
          "Существующая линия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "كسارة صدمية بعمود رأسي (VSI) | الرمل المكسّر",
        description:
          "كسارات صدمية بعمود رأسي (VSI) تسرّع المادة في دوّار وتكسّرها بالصدم. لإنتاج الرمل المكسّر والركام الناعم.",
      },
      breadcrumbLabel: "كسارة صدمية بعمود رأسي",
      h1: "كسارة صدمية بعمود رأسي (VSI) – الرمل والركام الناعم",
      productCategory: "كسارة صدمية بعمود رأسي (VSI)",
      overview: {
        imageAlt: "كسارة صدمية بعمود رأسي في ورشة يظهر فيها قادوس التلقيم ووحدة الإدارة",
        tagline: "كسارة صدمية بعمود رأسي (VSI)",
        keyFacts: [
          { label: "مبدأ التكسير", value: "التسريع في الدوّار والصدم" },
          { label: "المرحلة", value: "غالبًا ثالثة / إنتاج الرمل" },
          { label: "المنتج", value: "رمل مكسّر وركام ناعم" },
          { label: "أجزاء التآكل", value: "أطراف الدوّار والبطانات الداخلية" },
        ],
        title: "تكسير المادة بالصدم بعد تسريعها في الدوّار",
        paragraphs: [
          "في الكسارة الصدمية ذات العمود الرأسي (VSI) تسقط المادة من فتحة التلقيم العلوية إلى مركز دوّار يدور بسرعة عالية على عمود رأسي، فيسرّعها الدوّار ويقذفها إلى الخارج لتتكسر عند ارتطامها بأسطح غرفة التكسير أو بطبقة من المادة.",
          "وعلى خلاف الكسارات الفكية والمطرقية تستهدف طريقة التكسير هذه إنتاج الركام الناعم والرمل المكسّر، ويعتمد توزيع الأحجام وشكل الحبيبات على سرعة الدوّار وترتيب الدوّار والغرفة وخصائص التلقيم.",
          "تعمل الكسارة VSI عادةً بعد الكسارات الأولية والثانوية في دائرة مغلقة مع الغربلة، ويحدد حجم التلقيم وكشط المادة ورطوبتها اختيار الدوّار وأجزاء التآكل.",
        ],
        note: "يختلف شكل الحبيبات ونسبة الدقائق حسب المادة وظروف التشغيل، لذا ينبغي تقييم التوزيع المستهدف بتجارب على العينات مع دائرة الغربلة.",
      },
      process: {
        title: "تدفق المادة في الكسارة VSI",
        intro: "يوضح المخطط التدفق النموذجي الذي تسرّع فيه الكسارة VSI المادة في الدوّار وتكسّرها بالصدم ثم ترسلها إلى دائرة الغربلة، بينما الغربلة وخط الإعادة معدات منفصلة.",
        note: "يمكن إعادة المادة الأكبر من الحجم المستهدف من الغربال إلى الكسارة، ويتحدد ترتيب الدائرة وفق تصور المنشأة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة", text: "تسقط المادة المكسّرة مسبقًا من فتحة التلقيم إلى مركز الدوّار." },
          { title: "التسريع في الدوّار", text: "يسرّع الدوّار على العمود الرأسي المادة ويقذفها إلى الخارج." },
          { title: "التكسير بالصدم", text: "تتكسر المادة عند ارتطامها بأسطح الغرفة أو بطبقة من المادة." },
          { title: "تفريغ المنتج", text: "يُفرَّغ المنتج المكسّر من الأسفل ويتجه إلى دائرة الغربلة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الكسارة VSI",
          svgDesc: "خط المادة: تلقيم مادة مكسّرة مسبقًا، كسارة صدمية بعمود رأسي، تفريغ سفلي، دائرة الغربلة.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "مادة مكسّرة مسبقًا" }],
          drum: { title: "كسارة VSI", sub: "دوّار رأسي · صدم" },
          after: [
            { title: "التفريغ", sub: "المخرج السفلي" },
            { title: "دائرة الغربلة", sub: "المنتج والإعادة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الكسارة VSI",
        items: [
          {
            title: "إنتاج الرمل المكسّر",
            text: "إنتاج رمل مكسّر للخرسانة والملاط من حجر مكسّر مسبقًا، مع ضبط نسبة الدقائق والتدرج بالغربلة والغسيل عند الحاجة.",
            imageAlt: "كومة من الرمل المكسّر",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الركام الناعم والحصى الصغيرة",
            text: "التكسير النهائي لأجزاء الركام الناعم في محطات الركام، مع تحجيم الكسارة إلى جانب دائرة الغربلة.",
            imageAlt: "كومة ركام تتكوّن أسفل ناقل يفرغ المادة",
            linkLabel: "أنظمة الغربلة والتصنيف",
          },
          {
            title: "تحسين شكل حبيبات الحجر المكسّر",
            text: "تكسير في المرحلة الأخيرة يهدف إلى تحسين شكل حبيبات الحجر المكسّر، ويعتمد الشكل الممكن على المادة ويجب التحقق منه بالتجربة.",
            imageAlt: "حبيبات حجر مكسّر داكنة عن قرب",
            linkLabel: "أنظمة النقل",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات VSI مخصصة",
        intro:
          "تصمم PRO MAKINA كسارات VSI وفق حجم التلقيم وكشط المادة والتوزيع المستهدف للمنتج والسعة. ويُصمَّم ترتيب الدوّار والغرفة وأجزاء التآكل والعمود والمحامل ونظام الإدارة والتحكم في الاهتزاز معًا.",
        highlights: ["دوّار وغرفة مطابقان للمنتج", "أجزاء تآكل الدوّار قابلة للاستبدال", "عمود رأسي ومجموعة المحامل", "التكامل مع دائرة التكسير والغربلة"],
        figureAlt: "كسارة VSI في ورشة تظهر قواديس التلقيم والمحركات",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "التلقيم", text: "حجم التلقيم ومرحلة التكسير السابقة." },
          { title: "المادة", text: "الصلابة والكشط والرطوبة ومحتوى الدقائق." },
          { title: "المنتج المستهدف", text: "التدرج المطلوب ونسبة الدقائق وشكل الحبيبات المتوقع." },
          { title: "الدوّار والغرفة", text: "نوع الدوّار وسرعته وترتيب الغرفة وأجزاء التآكل." },
          { title: "الإدارة والتكامل", text: "المحرك والإدارة والاهتزاز وسهولة الصيانة ودائرة الغربلة." },
        ],
        dataNote: "تُحدَّد سرعة الدوّار والقدرة والسعة بتجارب المادة وحساب العملية، ولا يُضمن شكل محدد للحبيبات.",
      },
      gallery: {
        title: "معرض صور الكسارات VSI",
        captions: ["كسارات VSI أسفل هيكل فولاذي في الموقع", "كسارة VSI في ورشة تظهر وحدة الإدارة", "كسارة VSI وقواديس التلقيم", "منظر أمامي لكسارة VSI"],
      },
      faq: {
        title: "أسئلة شائعة حول الكسارة VSI",
        items: [
          {
            question: "كيف تعمل الكسارة VSI؟",
            answer: "تُلقَّم المادة إلى مركز دوّار يدور على عمود رأسي، فيسرّعها ويقذفها لتتكسر عند ارتطامها بأسطح الغرفة أو بطبقة من المادة.",
          },
          {
            question: "في أي مرحلة تُستخدم الكسارة VSI؟",
            answer: "عادةً بعد الكسارات الأولية والثانوية، كمرحلة أخيرة في إنتاج الرمل والركام الناعم مع الغربلة.",
          },
          {
            question: "هل يُضمن المنتج المكعب الشكل؟",
            answer: "يعتمد شكل الحبيبات على المادة وترتيب الدوّار وظروف التشغيل، ويُقيَّم بتجارب على العينات دون ضمان عام.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "أطراف الدوّار وبطاناته الداخلية وبطانات الغرفة، ويعتمد معدل التآكل على كشط المادة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة والكشط والرطوبة وحجم التلقيم والتدرج المستهدف للمنتج والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة VSI",
        text: "شاركنا المادة وحجم التلقيم والتدرج المستهدف، لنحدد معًا الكسارة ودائرة الغربلة.",
        mailSubject: "طلب عرض سعر: كسارة صدمية بعمود رأسي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وكشطها",
          "الرطوبة ومحتوى الدقائق",
          "حجم التلقيم",
          "التدرج المستهدف للمنتج",
          "السعة بالساعة (طن/ساعة)",
          "خط التكسير والغربلة الحالي",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة VSI.",
          "",
          "المادة:",
          "حجم التلقيم (مم):",
          "المنتج المستهدف (مم):",
          "السعة (طن/ساعة):",
          "الخط الحالي:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
