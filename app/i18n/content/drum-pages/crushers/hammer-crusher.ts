import type { DrumPageConfig } from "../types";

// Çekiçli kırıcı: rotora bağlı çekiçlerin darbesiyle boyut küçültme; ürün ızgara/elekten geçerek çıkar.
// Klasörde yalnızca iki gerçek fotoğraf bulunduğundan galeri yoktur; rotor devri, güç ve kapasite verilmez.
const img = (file: string) => `/images/kirici cekicli/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const hammerCrusherPage: DrumPageConfig = {
  key: "hammerCrusher",
  group: "crushers",
  trSlug: "cekicli-kiricilar",
  mainImage: img("kiricicekic1.jpg"),
  applications: [
    { image: app("alcitasi.webp"), link: "mining" },
    { image: app("kaya-tuzu.webp"), link: "chemicalProcess" },
    { image: app("agrega-stok.webp"), link: "screeningSystems" },
  ],
  figure: img("kiricicekic4.jpg"),
  sectors: ["mining", "fertilizerPlants", "chemicalProcess"],
  resources: ["jawCrusher", "vsiCrusher", "chainCrusher", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "dustCollection", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Çekiçli Kırıcı İmalatı | Darbeli Boyut Küçültme | PRO MAKİNA",
        description:
          "Rotor ve çekiçlerin darbesiyle alçıtaşı, tuz, kalker ve benzeri kırılgan malzemeleri küçülten çekiçli kırıcı imalatı. Besleme ve hedef boyuta göre tasarım.",
      },
      breadcrumbLabel: "Çekiçli Kırıcılar",
      h1: "Çekiçli Kırıcı – Rotor ve Çekiçlerle Darbeli Kırma",
      productCategory: "Çekiçli Kırıcı",
      overview: {
        imageAlt: "Tesis içinde elektrik motorlu çekiçli kırıcı ve besleme bağlantısı",
        tagline: "Çekiçli Kırıcı",
        keyFacts: [
          { label: "Kırma prensibi", value: "Çekiç darbesi ve çarpma" },
          { label: "Malzeme", value: "Kırılgan, orta sertlikte hammaddeler" },
          { label: "Çıkış kontrolü", value: "Izgara / elek açıklığı" },
          { label: "Aşınan parçalar", value: "Çekiç, ızgara, iç astarlar" },
        ],
        title: "Darbe ile Kontrollü Boyut Küçültme",
        paragraphs: [
          "Çekiçli kırıcıda yüksek devirle dönen rotora mafsallı olarak bağlanan çekiçler, kırma haznesine düşen malzemeye çarparak onu parçalar. Parçalar gövde içindeki kırma plakalarına savrulur ve hedef boyuta inene kadar darbeye maruz kalır.",
          "Kırılan malzeme, rotorun altındaki ızgara veya elek açıklıklarından geçerek kırıcıdan çıkar. Bu nedenle ürün boyutu büyük ölçüde ızgara açıklığı, rotor devri ve çekiç düzeniyle belirlenir.",
          "Çekiçli kırıcılar alçıtaşı, tuz, kalker, kömür ve benzeri kırılgan ve orta sertlikteki malzemelerde kullanılır. Yüksek aşındırıcılıktaki ve çok sert malzemelerde çekiç aşınması hızlandığından makine seçimi malzeme verisiyle birlikte yapılır.",
        ],
        note: "Nemli ve yapışkan malzemeler ızgarayı tıkayabilir; malzemenin nemi ve kil içeriği, ızgara tipi ve açıklığı seçilirken mutlaka dikkate alınmalıdır.",
      },
      process: {
        title: "Çekiçli Kırıcı Malzeme Akışı",
        intro:
          "Şema, çekiçli kırıcının malzemeyi besleme ağzından alıp ızgaradan geçen ürünü tahliye ettiği tipik akışı gösterir. Eleme ve taşıma ayrı ekipmanlarla yapılır.",
        note: "Hedef boyuttan büyük kalan malzeme ızgaradan geçemez ve kırma haznesinde darbeye maruz kalmaya devam eder.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme besleme", text: "Malzeme bunker veya besleyiciden kırma haznesine düzenli beslenir." },
          { title: "Çekiç darbesi", text: "Dönen rotordaki çekiçler malzemeye çarparak onu parçalar." },
          { title: "Plakalarda kırılma", text: "Savrulan parçalar kırma plakalarına çarpıp küçülür." },
          { title: "Izgaradan tahliye", text: "Hedef boyuta inen ürün ızgaradan geçerek çıkışa ulaşır." },
        ],
        flow: {
          svgTitle: "Çekiçli kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: bunker veya besleyici, çekiçli kırıcı, ızgara altı tahliye, eleme veya taşıma.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Bunker / besleyici" }],
          drum: { title: "ÇEKİÇLİ KIRICI", sub: "rotor · çekiç · ızgara" },
          after: [
            { title: "Tahliye", sub: "Izgara altı çıkış" },
            { title: "Eleme / taşıma", sub: "Sonraki ekipman" },
          ],
        },
      },
      applications: {
        title: "Çekiçli Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Alçıtaşı ve Kırılgan Mineraller",
            text: "Alçıtaşı ve benzeri kırılgan minerallerin sonraki öğütme, kurutma veya proses adımına uygun boyuta indirilmesi. Izgara açıklığı hedef boyuta göre seçilir.",
            imageAlt: "Beyaz renkli alçıtaşı parçası",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kaya Tuzu ve Kimyasal Hammaddeler",
            text: "Kaya tuzu ve benzeri kristal yapılı hammaddelerin proses girişine uygun boyuta kırılması. Korozyon etkisi gövde ve çekiç malzemesi seçiminde dikkate alınır.",
            imageAlt: "Pembe ve beyaz tonlarda kaya tuzu parçası",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Kalker ve Orta Sertlikte Agregalar",
            text: "Düşük aşındırıcılıktaki kalker ve benzeri malzemelerin kırma-eleme hattında boyut küçültülmesi. Aşındırıcı ürünlerde çekiç ömrü ayrıca değerlendirilir.",
            imageAlt: "Konveyörler altında agrega stok yığınları",
            linkLabel: "Eleme ve Sınıflandırma Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Çekiçli Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA çekiçli kırıcıları hammaddenin türü, besleme boyutu, hedef ürün boyutu ve kapasiteye göre projelendirir. Rotor, çekiç düzeni, kırma plakaları, ızgara, gövde ve tahrik birlikte tasarlanır; rotor devri ve motor gücü proses hesabıyla belirlenir.",
        highlights: ["Malzemeye göre rotor ve çekiç düzeni", "Değiştirilebilir çekiç ve astarlar", "Hedef boyuta göre ızgara açıklığı", "Bakım kapakları ve toz bağlantısı"],
        figureAlt: "Elektrik motorlu, kayış tahrikli çekiçli kırıcı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde", text: "Malzeme türü, sertlik, aşındırıcılık, nem ve kil içeriği." },
          { title: "Besleme Boyutu", text: "Maksimum parça boyutu ve besleme şekli." },
          { title: "Hedef Ürün", text: "İstenen üst boyut ve ince malzeme sınırı." },
          { title: "Rotor ve Çekiç", text: "Rotor çapı ve genişliği, çekiç sayısı, tipi ve malzemesi." },
          { title: "Tahrik ve Bakım", text: "Rotor devri, motor seçimi, titreşim, toz ve bakım erişimi." },
        ],
        dataNote: "Rotor devri, motor gücü ve kapasite malzeme testleri ve proses hesabıyla belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Çekiçli Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Çekiçli kırıcı nasıl çalışır?",
            answer:
              "Yüksek devirle dönen rotora bağlı çekiçler malzemeye çarpar, parçalar kırma plakalarına savrulur. Hedef boyuta inen ürün rotorun altındaki ızgaradan geçerek çıkar.",
          },
          {
            question: "Çekiçli kırıcı hangi malzemeler için uygundur?",
            answer:
              "Alçıtaşı, tuz, kalker, kömür ve benzeri kırılgan veya orta sertlikteki malzemeler için uygundur. Çok sert ve yüksek aşındırıcılıktaki malzemelerde çekiç aşınması artar.",
          },
          {
            question: "Ürün boyutu nasıl ayarlanır?",
            answer: "Ürün boyutu esas olarak ızgara açıklığı, rotor devri ve çekiç düzeniyle belirlenir. Farklı ızgara açıklıklarıyla hedef boyut değiştirilebilir.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer: "Çekiçler, ızgara çubukları ve kırma plakaları aşınan parçalardır. Değiştirilebilir yapı ve bakım kapakları bakım süresini kısaltmaya yardımcı olur.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Malzeme türü, sertlik ve aşındırıcılık, nem, maksimum besleme boyutu, hedef ürün boyutu ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Çekiçli kırıcı için teknik teklif alın",
        text: "Hammaddeniz, besleme boyutunuz ve hedef ürün boyutunuza göre çekiçli kırıcıyı birlikte netleştirelim.",
        mailSubject: "Çekiçli Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve sertliği",
          "Aşındırıcılık, nem ve kil içeriği",
          "Maksimum besleme boyutu",
          "Hedef ürün boyutu",
          "Saatlik kapasite (ton/saat)",
          "Besleme ve tahliye düzeni",
        ],
        inquiryLines: [
          "Merhaba, çekiçli kırıcı için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Nem (%):",
          "Maksimum besleme boyutu (mm):",
          "Hedef ürün boyutu (mm):",
          "Kapasite (ton/saat):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Hammer Crusher Manufacturer | Impact Size Reduction",
        description:
          "Hammer crushers that reduce gypsum, salt, limestone and similar friable materials by the impact of rotor hammers. Designed for your feed and target size.",
      },
      breadcrumbLabel: "Hammer Crusher",
      h1: "Hammer Crusher – Impact Crushing with Rotor and Hammers",
      productCategory: "Hammer Crusher",
      overview: {
        imageAlt: "Electric-motor-driven hammer crusher with feed connection in a plant",
        tagline: "Hammer Crusher",
        keyFacts: [
          { label: "Crushing principle", value: "Hammer impact and collision" },
          { label: "Material", value: "Friable, medium-hard raw materials" },
          { label: "Output control", value: "Grate / screen opening" },
          { label: "Wear parts", value: "Hammers, grate, liners" },
        ],
        title: "Controlled Size Reduction by Impact",
        paragraphs: [
          "In a hammer crusher, hammers pivoted on a high-speed rotor strike the material falling into the crushing chamber and break it. Fragments are thrown against breaker plates inside the housing and are impacted repeatedly until they reach the target size.",
          "Crushed material leaves through the openings of the grate or screen below the rotor. Product size is therefore largely determined by grate opening, rotor speed and hammer arrangement.",
          "Hammer crushers are used for gypsum, salt, limestone, coal and similar friable or medium-hard materials. For very hard and highly abrasive materials hammer wear accelerates, so the machine is selected together with material data.",
        ],
        note: "Moist and sticky materials can clog the grate; moisture and clay content must be considered when selecting grate type and opening.",
      },
      process: {
        title: "Hammer Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the hammer crusher takes material at the inlet and discharges product that has passed through the grate. Screening and conveying are done by separate equipment.",
        note: "Material larger than the target size cannot pass the grate and continues to be impacted in the crushing chamber.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material feeding", text: "Material is fed steadily into the crushing chamber from a hopper or feeder." },
          { title: "Hammer impact", text: "Hammers on the rotating rotor strike and break the material." },
          { title: "Breaking on plates", text: "Thrown fragments hit breaker plates and are reduced further." },
          { title: "Discharge through the grate", text: "Product at target size passes the grate to the outlet." },
        ],
        flow: {
          svgTitle: "Hammer crusher material flow diagram",
          svgDesc: "Material line: hopper or feeder, hammer crusher, discharge below the grate, screening or conveying.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Hopper / feeder" }],
          drum: { title: "HAMMER CRUSHER", sub: "rotor · hammer · grate" },
          after: [
            { title: "Discharge", sub: "Below the grate" },
            { title: "Screening / conveying", sub: "Next equipment" },
          ],
        },
      },
      applications: {
        title: "Hammer Crusher Applications",
        items: [
          {
            title: "Gypsum and Friable Minerals",
            text: "Reducing gypsum and similar friable minerals to a size suitable for grinding, drying or the next process step. Grate opening is selected for the target size.",
            imageAlt: "Piece of white gypsum",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Rock Salt and Chemical Raw Materials",
            text: "Crushing rock salt and similar crystalline raw materials to suit the process inlet. Corrosion is considered when selecting housing and hammer materials.",
            imageAlt: "Pink and white rock salt piece",
            linkLabel: "Chemical Process Industry",
          },
          {
            title: "Limestone and Medium-Hard Aggregates",
            text: "Size reduction of low-abrasive limestone and similar materials in crushing and screening lines. Hammer life is assessed separately for abrasive products.",
            imageAlt: "Aggregate stockpiles below conveyors",
            linkLabel: "Screening and Classification",
          },
        ],
      },
      design: {
        title: "Custom Hammer Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers hammer crushers around raw material type, feed size, target product size and capacity. Rotor, hammer arrangement, breaker plates, grate, housing and drive are designed together; rotor speed and motor power are defined by process calculation.",
        highlights: ["Rotor and hammers matched to material", "Replaceable hammers and liners", "Grate opening for the target size", "Inspection doors and dust connection"],
        figureAlt: "Belt-driven hammer crusher with electric motor",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material", text: "Material type, hardness, abrasiveness, moisture and clay content." },
          { title: "Feed Size", text: "Maximum lump size and feeding method." },
          { title: "Target Product", text: "Required top size and fines limit." },
          { title: "Rotor and Hammers", text: "Rotor diameter and width, number, type and material of hammers." },
          { title: "Drive and Maintenance", text: "Rotor speed, motor selection, vibration, dust and access." },
        ],
        dataNote: "Rotor speed, motor power and capacity are defined by material tests and process calculation; no generic values are stated on this page.",
      },
      faq: {
        title: "Hammer Crusher FAQ",
        items: [
          {
            question: "How does a hammer crusher work?",
            answer:
              "Hammers on a high-speed rotor strike the material and throw fragments against breaker plates. Product at target size leaves through the grate below the rotor.",
          },
          {
            question: "Which materials suit a hammer crusher?",
            answer:
              "Gypsum, salt, limestone, coal and similar friable or medium-hard materials. With very hard, highly abrasive materials hammer wear increases.",
          },
          {
            question: "How is product size adjusted?",
            answer: "Product size is mainly set by grate opening, rotor speed and hammer arrangement. Different grate openings change the target size.",
          },
          {
            question: "Which parts wear?",
            answer: "Hammers, grate bars and breaker plates. A replaceable design and inspection doors help shorten maintenance time.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, hardness and abrasiveness, moisture, maximum feed size, target product size and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a hammer crusher",
        text: "Share your raw material, feed size and target product size, and we will define the hammer crusher together with you.",
        mailSubject: "Hammer Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and hardness",
          "Abrasiveness, moisture and clay content",
          "Maximum feed size",
          "Target product size",
          "Hourly capacity (t/h)",
          "Feeding and discharge arrangement",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a hammer crusher.",
          "",
          "Material:",
          "Moisture (%):",
          "Maximum feed size (mm):",
          "Target product size (mm):",
          "Capacity (t/h):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Молотковая дробилка | Ударное дробление",
        description:
          "Молотковые дробилки для дробления гипса, соли, известняка и подобных хрупких материалов ударом молотков ротора. Проект под крупность питания и продукта.",
      },
      breadcrumbLabel: "Молотковая дробилка",
      h1: "Молотковая дробилка – ударное дробление ротором с молотками",
      productCategory: "Молотковая дробилка",
      overview: {
        imageAlt: "Молотковая дробилка с электродвигателем и узлом загрузки в цехе",
        tagline: "Молотковая дробилка",
        keyFacts: [
          { label: "Принцип", value: "Удар молотков и соударение" },
          { label: "Материал", value: "Хрупкое сырьё средней твёрдости" },
          { label: "Контроль крупности", value: "Колосниковая решётка / сито" },
          { label: "Изнашиваемые детали", value: "Молотки, решётка, футеровка" },
        ],
        title: "Контролируемое измельчение ударом",
        paragraphs: [
          "В молотковой дробилке молотки, шарнирно закреплённые на быстроходном роторе, ударяют по материалу, поступающему в камеру дробления, и разрушают его. Осколки отбрасываются на отбойные плиты корпуса и дробятся до достижения нужной крупности.",
          "Дроблёный материал выходит через отверстия колосниковой решётки или сита под ротором. Поэтому крупность продукта в основном определяется размером щели решётки, частотой вращения и расстановкой молотков.",
          "Молотковые дробилки применяются для гипса, соли, известняка, угля и подобных хрупких материалов средней твёрдости. Для очень твёрдых и абразивных материалов износ молотков ускоряется, поэтому выбор машины ведётся по данным материала.",
        ],
        note: "Влажные и липкие материалы могут забивать решётку; влажность и содержание глины обязательно учитываются при выборе типа и щели решётки.",
      },
      process: {
        title: "Движение материала в молотковой дробилке",
        intro: "Схема показывает типовой поток: дробилка принимает материал в загрузочное отверстие и выпускает продукт, прошедший через решётку. Грохочение и транспорт выполняются отдельным оборудованием.",
        note: "Материал крупнее целевого размера не проходит решётку и продолжает дробиться в камере.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача материала", text: "Материал равномерно подаётся в камеру дробления из бункера или питателя." },
          { title: "Удар молотков", text: "Молотки вращающегося ротора ударяют и разрушают материал." },
          { title: "Дробление об плиты", text: "Отброшенные куски ударяются об отбойные плиты и измельчаются." },
          { title: "Выход через решётку", text: "Продукт нужной крупности проходит решётку к выходу." },
        ],
        flow: {
          svgTitle: "Схема движения материала в молотковой дробилке",
          svgDesc: "Линия материала: бункер или питатель, молотковая дробилка, выгрузка под решёткой, грохочение или транспорт.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Бункер / питатель" }],
          drum: { title: "МОЛОТКОВАЯ ДРОБИЛКА", sub: "ротор · молоток · решётка" },
          after: [
            { title: "Выгрузка", sub: "Под решёткой" },
            { title: "Грохот / транспорт", sub: "Далее по линии" },
          ],
        },
      },
      applications: {
        title: "Области применения молотковой дробилки",
        items: [
          {
            title: "Гипс и хрупкие минералы",
            text: "Дробление гипса и подобных хрупких минералов до крупности, подходящей для помола, сушки или следующего передела. Щель решётки выбирается под целевой размер.",
            imageAlt: "Кусок белого гипса",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Каменная соль и химическое сырьё",
            text: "Дробление каменной соли и подобного кристаллического сырья под требования процесса. Коррозия учитывается при выборе материалов корпуса и молотков.",
            imageAlt: "Кусок каменной соли розового и белого цвета",
            linkLabel: "Химическая промышленность",
          },
          {
            title: "Известняк и заполнители средней твёрдости",
            text: "Измельчение малоабразивного известняка и подобных материалов в линиях дробления и грохочения. Ресурс молотков для абразивных продуктов оценивается отдельно.",
            imageAlt: "Штабели заполнителя под конвейерами",
            linkLabel: "Грохочение и классификация",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление молотковых дробилок",
        intro:
          "PRO MAKINA проектирует молотковые дробилки исходя из вида сырья, крупности питания, крупности продукта и производительности. Ротор, расстановка молотков, отбойные плиты, решётка, корпус и привод разрабатываются совместно; частота вращения и мощность двигателя определяются расчётом.",
        highlights: ["Ротор и молотки под материал", "Сменные молотки и футеровка", "Щель решётки под целевой размер", "Люки обслуживания и аспирация"],
        figureAlt: "Молотковая дробилка с клиноременным приводом от электродвигателя",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё", text: "Вид, твёрдость, абразивность, влажность и содержание глины." },
          { title: "Крупность питания", text: "Максимальный размер куска и способ подачи." },
          { title: "Целевой продукт", text: "Требуемая верхняя крупность и доля мелочи." },
          { title: "Ротор и молотки", text: "Диаметр и ширина ротора, число, тип и материал молотков." },
          { title: "Привод и обслуживание", text: "Частота вращения, двигатель, вибрация, пыль и доступ." },
        ],
        dataNote: "Частота вращения ротора, мощность и производительность определяются испытаниями материала и расчётом; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о молотковой дробилке",
        items: [
          {
            question: "Как работает молотковая дробилка?",
            answer: "Молотки быстроходного ротора ударяют по материалу и отбрасывают куски на отбойные плиты. Продукт нужной крупности выходит через решётку под ротором.",
          },
          {
            question: "Для каких материалов подходит молотковая дробилка?",
            answer: "Для гипса, соли, известняка, угля и подобных хрупких материалов средней твёрдости. Для очень твёрдых абразивных материалов износ молотков возрастает.",
          },
          {
            question: "Как регулируется крупность продукта?",
            answer: "В основном щелью решётки, частотой вращения ротора и расстановкой молотков. Смена решётки меняет целевую крупность.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Молотки, колосники решётки и отбойные плиты. Сменная конструкция и люки сокращают время обслуживания.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, твёрдость и абразивность, влажность, максимальная крупность питания, крупность продукта и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на молотковую дробилку",
        text: "Сообщите вид сырья, крупность питания и продукта — вместе определим молотковую дробилку.",
        mailSubject: "Запрос предложения: молотковая дробилка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и твёрдость",
          "Абразивность, влажность и глинистость",
          "Максимальная крупность питания",
          "Крупность продукта",
          "Часовая производительность (т/ч)",
          "Схема загрузки и выгрузки",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на молотковую дробилку.",
          "",
          "Материал:",
          "Влажность (%):",
          "Максимальная крупность питания (мм):",
          "Крупность продукта (мм):",
          "Производительность (т/ч):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "كسارة المطارق | تصغير الحجم بالصدم",
        description:
          "كسارات مطارق تصغّر الجبس والملح والحجر الجيري والمواد الهشة المماثلة بصدم مطارق الدوّار. تصميم وفق حجم التلقيم والحجم المستهدف.",
      },
      breadcrumbLabel: "كسارة المطارق",
      h1: "كسارة المطارق – تكسير بالصدم بالدوّار والمطارق",
      productCategory: "كسارة مطارق",
      overview: {
        imageAlt: "كسارة مطارق بمحرك كهربائي ووصلة تلقيم داخل منشأة",
        tagline: "كسارة مطارق",
        keyFacts: [
          { label: "مبدأ التكسير", value: "صدم المطارق والارتطام" },
          { label: "المادة", value: "خامات هشة متوسطة الصلابة" },
          { label: "التحكم في الحجم", value: "فتحات الشبكة / المنخل" },
          { label: "أجزاء التآكل", value: "المطارق والشبكة والبطانات" },
        ],
        title: "تصغير الحجم بالصدم بشكل مضبوط",
        paragraphs: [
          "في كسارة المطارق تضرب مطارق مثبتة بمفصلات على دوّار سريع الدوران المادةَ الساقطة في غرفة التكسير فتفتتها، ثم تُقذف الأجزاء نحو ألواح التكسير داخل الغلاف وتتعرض للصدم حتى تبلغ الحجم المستهدف.",
          "تخرج المادة المكسّرة عبر فتحات الشبكة أو المنخل أسفل الدوّار، لذا يتحدد حجم المنتج أساسًا بفتحة الشبكة وسرعة الدوّار وترتيب المطارق.",
          "تُستخدم كسارات المطارق للجبس والملح والحجر الجيري والفحم والمواد الهشة أو متوسطة الصلابة المماثلة. وفي المواد شديدة الصلابة والكشط يتسارع تآكل المطارق، لذا يُختار الجهاز بناءً على بيانات المادة.",
        ],
        note: "قد تسد المواد الرطبة واللزجة الشبكة، لذا يجب مراعاة الرطوبة ومحتوى الطين عند اختيار نوع الشبكة وفتحتها.",
      },
      process: {
        title: "تدفق المادة في كسارة المطارق",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه الكسارة المادة من فتحة التلقيم وتفرغ المنتج المار عبر الشبكة، بينما تتم الغربلة والنقل بمعدات منفصلة.",
        note: "المادة الأكبر من الحجم المستهدف لا تمر عبر الشبكة وتستمر في التعرض للصدم داخل غرفة التكسير.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة", text: "تُلقَّم المادة بانتظام إلى غرفة التكسير من قادوس أو مُلقِّم." },
          { title: "صدم المطارق", text: "تضرب مطارق الدوّار المادة وتفتتها." },
          { title: "التكسير على الألواح", text: "ترتطم الأجزاء المقذوفة بألواح التكسير فتصغر أكثر." },
          { title: "التفريغ عبر الشبكة", text: "يمر المنتج بالحجم المستهدف عبر الشبكة إلى المخرج." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في كسارة المطارق",
          svgDesc: "خط المادة: قادوس أو مُلقِّم، كسارة المطارق، التفريغ أسفل الشبكة، الغربلة أو النقل.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "قادوس / مُلقِّم" }],
          drum: { title: "كسارة المطارق", sub: "دوّار · مطرقة · شبكة" },
          after: [
            { title: "التفريغ", sub: "أسفل الشبكة" },
            { title: "الغربلة / النقل", sub: "المعدة التالية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام كسارة المطارق",
        items: [
          {
            title: "الجبس والمعادن الهشة",
            text: "تصغير الجبس والمعادن الهشة المماثلة إلى حجم مناسب للطحن أو التجفيف أو المرحلة التالية، مع اختيار فتحة الشبكة وفق الحجم المستهدف.",
            imageAlt: "قطعة جبس بيضاء",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الملح الصخري والخامات الكيميائية",
            text: "تكسير الملح الصخري والخامات البلورية المماثلة بما يناسب مدخل العملية، مع مراعاة التآكل الكيميائي عند اختيار مواد الغلاف والمطارق.",
            imageAlt: "قطعة ملح صخري بدرجات الوردي والأبيض",
            linkLabel: "الصناعات الكيميائية",
          },
          {
            title: "الحجر الجيري والركام متوسط الصلابة",
            text: "تصغير الحجر الجيري منخفض الكشط والمواد المماثلة في خطوط التكسير والغربلة، مع تقييم عمر المطارق بشكل منفصل للمنتجات الكاشطة.",
            imageAlt: "أكوام ركام أسفل السيور الناقلة",
            linkLabel: "أنظمة الغربلة والتصنيف",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات مطارق مخصصة",
        intro:
          "تصمم PRO MAKINA كسارات المطارق وفق نوع الخام وحجم التلقيم وحجم المنتج المستهدف والسعة. ويُصمَّم الدوّار وترتيب المطارق وألواح التكسير والشبكة والغلاف ونظام الإدارة معًا، وتُحدَّد سرعة الدوّار وقدرة المحرك بحساب العملية.",
        highlights: ["دوّار ومطارق مطابقة للمادة", "مطارق وبطانات قابلة للاستبدال", "فتحة شبكة وفق الحجم المستهدف", "أبواب صيانة ووصلة غبار"],
        figureAlt: "كسارة مطارق بمحرك كهربائي وإدارة بالسيور",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "الخام", text: "نوع المادة والصلابة والكشط والرطوبة ومحتوى الطين." },
          { title: "حجم التلقيم", text: "أقصى حجم للقطع وطريقة التلقيم." },
          { title: "المنتج المستهدف", text: "الحجم الأعلى المطلوب وحد الدقائق." },
          { title: "الدوّار والمطارق", text: "قطر الدوّار وعرضه وعدد المطارق ونوعها ومادتها." },
          { title: "الإدارة والصيانة", text: "سرعة الدوّار واختيار المحرك والاهتزاز والغبار وسهولة الوصول." },
        ],
        dataNote: "تُحدَّد سرعة الدوّار وقدرة المحرك والسعة بتجارب المادة وحساب العملية، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول كسارة المطارق",
        items: [
          {
            question: "كيف تعمل كسارة المطارق؟",
            answer: "تضرب مطارق الدوّار سريع الدوران المادة وتقذف الأجزاء نحو ألواح التكسير، ويخرج المنتج بالحجم المستهدف عبر الشبكة أسفل الدوّار.",
          },
          {
            question: "ما المواد المناسبة لكسارة المطارق؟",
            answer: "الجبس والملح والحجر الجيري والفحم والمواد الهشة أو متوسطة الصلابة المماثلة. ويزداد تآكل المطارق مع المواد شديدة الصلابة والكشط.",
          },
          {
            question: "كيف يُضبط حجم المنتج؟",
            answer: "يُضبط أساسًا بفتحة الشبكة وسرعة الدوّار وترتيب المطارق، ويمكن تغيير الحجم المستهدف بتغيير الشبكة.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "المطارق وقضبان الشبكة وألواح التكسير، ويساعد التصميم القابل للاستبدال وأبواب الصيانة على تقليل زمن الصيانة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وصلابتها وكشطها والرطوبة وأقصى حجم للتلقيم وحجم المنتج المستهدف والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة مطارق",
        text: "شاركنا الخام وحجم التلقيم وحجم المنتج المستهدف، لنحدد معًا كسارة المطارق المناسبة.",
        mailSubject: "طلب عرض سعر: كسارة مطارق",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وصلابتها",
          "الكشط والرطوبة ومحتوى الطين",
          "أقصى حجم للتلقيم",
          "حجم المنتج المستهدف",
          "السعة بالساعة (طن/ساعة)",
          "ترتيب التلقيم والتفريغ",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة مطارق.",
          "",
          "المادة:",
          "الرطوبة (%):",
          "أقصى حجم للتلقيم (مم):",
          "حجم المنتج المستهدف (مم):",
          "السعة (طن/ساعة):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
