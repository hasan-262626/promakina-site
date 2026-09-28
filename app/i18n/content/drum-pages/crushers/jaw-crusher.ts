import type { DrumPageConfig } from "../types";

// Çeneli kırıcı: sabit ve hareketli çene arasında sıkıştırarak kırma (darbeli kırıcı değildir).
// Besleme açıklığı, kapasite veya güç değeri verilmez; ana görsel mevcut ürün görselidir (render görünümlü).
const img = (file: string) => `/images/kirici ceneli/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const jawCrusherPage: DrumPageConfig = {
  key: "jawCrusher",
  group: "crushers",
  trSlug: "ceneli-kiricilar",
  mainImage: img("kiriciceneli1.png"),
  applications: [
    { image: app("demir-cevheri-ocak.webp"), link: "mining" },
    { image: app("tas-ocagi-ayna.webp"), link: "screeningSystems" },
    { image: app("beton-yikinti.webp"), link: "recycling" },
  ],
  figure: img("kiriciceneli4.jpg"),
  gallery: [img("kiriciceneli5.jpg"), img("kiriciceneli7.jpg"), img("kiriciceneli6.png"), img("kiriciceneli3.jpg")],
  sectors: ["mining", "recycling", "chemicalProcess"],
  resources: ["primaryImpactCrusher", "secondaryImpactCrusher", "vsiCrusher", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Çeneli Kırıcı İmalatı | Primer Taş ve Cevher Kırma | PRO MAKİNA",
        description:
          "Sabit ve hareketli çene arasında sıkıştırarak taş, cevher ve sert mineralleri kıran çeneli kırıcı imalatı. Besleme açıklığı ve hedef boyuta göre tasarım.",
      },
      breadcrumbLabel: "Çeneli Kırıcılar",
      h1: "Çeneli Kırıcı – Sıkıştırmalı Primer Kırma Makinesi",
      productCategory: "Çeneli Kırıcı",
      overview: {
        imageAlt: "Volanlı ve kayış tahrikli çeneli kırıcı",
        tagline: "Çeneli Kırıcı",
        keyFacts: [
          { label: "Kırma prensibi", value: "Çeneler arasında sıkıştırma" },
          { label: "Kademe", value: "Genellikle primer (ilk kademe)" },
          { label: "Çıkış kontrolü", value: "Ayarlanabilir çıkış açıklığı" },
          { label: "Aşınan parçalar", value: "Sabit ve hareketli çene plakaları" },
        ],
        title: "İri ve Sert Malzemenin İlk Kademe Kırılması",
        paragraphs: [
          "Çeneli kırıcıda malzeme, sabit çene ile eksantrik mil tarafından hareket ettirilen hareketli çene arasında sıkıştırılarak kırılır. Hareketli çene sabit çeneye yaklaştıkça malzeme ezilir, uzaklaştıkça kırılan parçalar V şeklindeki kırma boşluğunda aşağı iner.",
          "Parçalar, çeneler arasındaki alt açıklıktan (çıkış açıklığı) geçebilecek boyuta ulaşınca kırıcıyı terk eder. Ürün boyutu esas olarak bu açıklıkla belirlenir ve açıklık ayar düzeniyle değiştirilebilir.",
          "Geniş besleme ağzı sayesinde çeneli kırıcılar taş ocağından gelen iri kaya, cevher ve beton yıkıntısı gibi malzemelerin ilk kademe (primer) kırılmasında kullanılır. Ürün genellikle ikinci kademe kırıcı ve eleme ile işlenmeye devam eder.",
        ],
        note: "Çeneli kırıcı çarpma ile değil sıkıştırma ile çalışır; bu nedenle sert ve aşındırıcı malzemelerde darbeli kırıcılara göre daha uygun bir ilk kademe çözümüdür.",
      },
      process: {
        title: "Çeneli Kırıcı Malzeme Akışı",
        intro:
          "Şema, çeneli kırıcının iri hammaddeyi besleme ağzından alıp çıkış açıklığından tahliye ettiği tipik akışı gösterir. Besleyici, eleme ve ikinci kademe kırma ayrı ekipmanlardır.",
        note: "İnce malzemenin kırıcıya girmeden ayrılması (ön eleme), çenelerin gereksiz yüklenmesini ve aşınmasını azaltır.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "İri hammadde besleme", text: "Kaya veya cevher besleyici ile kırıcı ağzına düzenli verilir." },
          { title: "Çeneler arasında sıkıştırma", text: "Hareketli çene malzemeyi sabit çeneye doğru sıkıştırarak kırar." },
          { title: "Kırma boşluğunda iniş", text: "Kırılan parçalar V şeklindeki boşlukta aşağı ilerler." },
          { title: "Çıkış açıklığından tahliye", text: "Açıklıktan geçen ürün konveyöre veya ikinci kademeye aktarılır." },
        ],
        flow: {
          svgTitle: "Çeneli kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: besleyici, çeneli kırıcı, çıkış açıklığından tahliye, eleme veya ikinci kademe kırma.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Besleyici, ön eleme" }],
          drum: { title: "ÇENELİ KIRICI", sub: "sabit ve hareketli çene" },
          after: [
            { title: "Tahliye", sub: "Çıkış açıklığı" },
            { title: "Eleme / 2. kademe", sub: "Sonraki ekipman" },
          ],
        },
      },
      applications: {
        title: "Çeneli Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Maden Cevheri",
            text: "Açık ocaktan gelen iri cevherin sonraki kırma ve zenginleştirme adımlarına uygun boyuta ön kırılması. Çene plakası malzemesi cevherin aşındırıcılığına göre seçilir.",
            imageAlt: "Kademeli açık ocak madeninde kırmızı cevher yüzeyi",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Ocak Taşı ve Sert Kayaçlar",
            text: "Patlatma ile elde edilen iri ocak taşının ilk kademede kırılması. Kırıcı ağzı en iri besleme parçasına göre boyutlandırılır.",
            imageAlt: "Delme izleri görülen taş ocağı kaya yüzeyi",
            linkLabel: "Eleme ve Sınıflandırma Sistemleri",
          },
          {
            title: "Beton ve Yıkıntı Atıkları",
            text: "Beton ve yapı yıkıntı atıklarının geri kazanım hattında ön kırılması. Donatı ve yabancı maddelerin ayrılması hattaki diğer ekipmanlarla yapılır.",
            imageAlt: "Sahada yığılmış beton plakalar ve yıkıntı atıkları",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Çeneli Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA çeneli kırıcıları en iri besleme boyutu, malzeme sertliği, hedef çıkış boyutu ve kapasiteye göre projelendirir. Gövde, çene geometrisi ve plakaları, eksantrik mil ve yataklama, volan, tahrik ve ayar düzeni birlikte tasarlanır.",
        highlights: ["Besleme boyutuna göre ağız ölçüsü", "Değiştirilebilir çene plakaları", "Eksantrik mil ve ağır hizmet yataklama", "Çıkış açıklığı ayar düzeni"],
        figureAlt: "Çeneli kırıcının oluklu çene plakaları ve eksantrik mil ucu",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Besleme", text: "En iri parça boyutu ve besleme açıklığı ihtiyacı." },
          { title: "Malzeme", text: "Sertlik, aşındırıcılık, nem ve ince malzeme oranı." },
          { title: "Çıkış", text: "Hedef ürün boyutu ve çıkış açıklığı aralığı." },
          { title: "Mekanik Yapı", text: "Çene geometrisi, eksantrik mil, yataklama ve gövde." },
          { title: "Tahrik ve Güvenlik", text: "Motor ve kayış tahriki, volan, koruyucular ve bakım erişimi." },
        ],
        dataNote: "Besleme ağzı ölçüsü, kapasite ve motor gücü malzeme ve hat verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Çeneli Kırıcı Fotoğraf Galerisi",
        captions: [
          "Platform altında kurulu çeneli kırıcı ve volan",
          "Çeneli kırıcı gövdesi ve volanları",
          "Çeneli kırıcının yandan görünümü",
          "Çeneli kırıcı ana gövdesi",
        ],
      },
      faq: {
        title: "Çeneli Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Çeneli kırıcı nasıl çalışır?",
            answer:
              "Hareketli çene, eksantrik mil ile sabit çeneye yaklaşıp uzaklaşır. Malzeme çeneler arasında sıkıştırılarak kırılır ve çıkış açıklığından geçebilecek boyuta ulaşınca kırıcıdan çıkar.",
          },
          {
            question: "Çeneli kırıcı hangi kademede kullanılır?",
            answer: "Geniş besleme ağzı sayesinde genellikle ilk kademe (primer) kırıcı olarak kullanılır; ürün çoğunlukla ikinci kademe kırma ve eleme ile işlenir.",
          },
          {
            question: "Ürün boyutu nasıl ayarlanır?",
            answer: "Ürün boyutu, çeneler arasındaki alt açıklıkla belirlenir ve kırıcının ayar düzeniyle değiştirilebilir.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer: "Sabit ve hareketli çene plakaları ile yan astarlar aşınan parçalardır. Plakalar değiştirilebilir yapıdadır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, sertlik ve aşındırıcılık, en iri besleme boyutu, hedef çıkış boyutu ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Çeneli kırıcı için teknik teklif alın",
        text: "Malzemeniz, en iri besleme boyutunuz ve hedef çıkış boyutunuza göre çeneli kırıcıyı birlikte netleştirelim.",
        mailSubject: "Çeneli Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve sertliği",
          "Aşındırıcılık ve nem",
          "En iri besleme boyutu",
          "Hedef çıkış boyutu",
          "Saatlik kapasite (ton/saat)",
          "Sabit veya mobil kurulum",
        ],
        inquiryLines: [
          "Merhaba, çeneli kırıcı için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "En iri besleme boyutu (mm):",
          "Hedef çıkış boyutu (mm):",
          "Kapasite (ton/saat):",
          "Kurulum şekli:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Jaw Crusher Manufacturer | Primary Rock and Ore Crushing",
        description:
          "Jaw crushers that crush rock, ore and hard minerals by compression between a fixed and a moving jaw. Designed for your feed opening and target size.",
      },
      breadcrumbLabel: "Jaw Crusher",
      h1: "Jaw Crusher – Compression Crusher for Primary Crushing",
      productCategory: "Jaw Crusher",
      overview: {
        imageAlt: "Jaw crusher with flywheels and belt drive",
        tagline: "Jaw Crusher",
        keyFacts: [
          { label: "Crushing principle", value: "Compression between jaws" },
          { label: "Stage", value: "Usually primary (first stage)" },
          { label: "Output control", value: "Adjustable closed side setting" },
          { label: "Wear parts", value: "Fixed and moving jaw plates" },
        ],
        title: "First-Stage Crushing of Coarse, Hard Material",
        paragraphs: [
          "In a jaw crusher, material is crushed by compression between a fixed jaw and a moving jaw driven by an eccentric shaft. As the moving jaw approaches the fixed jaw the material is squeezed; as it moves away the broken pieces descend in the V-shaped crushing chamber.",
          "Pieces leave the crusher once they are small enough to pass the lower gap between the jaws (the discharge setting). Product size is mainly determined by this setting, which can be changed with the adjustment arrangement.",
          "Thanks to a large feed opening, jaw crushers are used for first-stage (primary) crushing of coarse quarry rock, ore and concrete demolition waste. The product is usually processed further by secondary crushing and screening.",
        ],
        note: "A jaw crusher works by compression, not impact; it is therefore a better first-stage solution than impact crushers for hard and abrasive materials.",
      },
      process: {
        title: "Jaw Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the jaw crusher takes coarse feed at the opening and discharges it through the discharge setting. Feeder, screening and secondary crushing are separate equipment.",
        note: "Removing fines before the crusher (pre-screening) reduces unnecessary load and wear on the jaws.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Coarse feed", text: "Rock or ore is fed steadily to the crusher opening by a feeder." },
          { title: "Compression between jaws", text: "The moving jaw squeezes the material against the fixed jaw." },
          { title: "Descent in the chamber", text: "Broken pieces move down the V-shaped chamber." },
          { title: "Discharge through the setting", text: "Product passing the setting goes to a conveyor or the next stage." },
        ],
        flow: {
          svgTitle: "Jaw crusher material flow diagram",
          svgDesc: "Material line: feeder, jaw crusher, discharge through the setting, screening or secondary crushing.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Feeder, pre-screening" }],
          drum: { title: "JAW CRUSHER", sub: "fixed and moving jaw" },
          after: [
            { title: "Discharge", sub: "Closed side setting" },
            { title: "Screening / 2nd stage", sub: "Next equipment" },
          ],
        },
      },
      applications: {
        title: "Jaw Crusher Applications",
        items: [
          {
            title: "Mineral Ore",
            text: "Primary crushing of coarse run-of-mine ore to a size suitable for further crushing and beneficiation. Jaw plate material is selected for the abrasiveness of the ore.",
            imageAlt: "Red ore face in a benched open-pit mine",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Quarry Rock and Hard Stone",
            text: "First-stage crushing of coarse blasted quarry rock. The feed opening is sized for the largest feed lump.",
            imageAlt: "Quarry rock face with drill hole marks",
            linkLabel: "Screening and Classification",
          },
          {
            title: "Concrete and Demolition Waste",
            text: "Pre-crushing concrete and construction demolition waste in recycling lines. Removal of rebar and contaminants is done by other equipment in the line.",
            imageAlt: "Concrete slabs and demolition debris piled on site",
            linkLabel: "Recycling and Waste Management",
          },
        ],
      },
      design: {
        title: "Custom Jaw Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers jaw crushers around the largest feed size, material hardness, target discharge size and capacity. Frame, jaw geometry and plates, eccentric shaft and bearings, flywheel, drive and adjustment are designed together.",
        highlights: ["Opening sized to the feed", "Replaceable jaw plates", "Eccentric shaft and heavy-duty bearings", "Discharge setting adjustment"],
        figureAlt: "Corrugated jaw plates and eccentric shaft end of a jaw crusher",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Feed", text: "Largest lump size and required feed opening." },
          { title: "Material", text: "Hardness, abrasiveness, moisture and fines content." },
          { title: "Discharge", text: "Target product size and discharge setting range." },
          { title: "Mechanical Design", text: "Jaw geometry, eccentric shaft, bearings and frame." },
          { title: "Drive and Safety", text: "Motor and belt drive, flywheel, guards and maintenance access." },
        ],
        dataNote: "Feed opening, capacity and motor power are calculated from material and line data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Jaw Crusher Photo Gallery",
        captions: ["Jaw crusher and flywheel installed below a platform", "Jaw crusher frame and flywheels", "Side view of a jaw crusher", "Jaw crusher main frame"],
      },
      faq: {
        title: "Jaw Crusher FAQ",
        items: [
          {
            question: "How does a jaw crusher work?",
            answer:
              "The moving jaw, driven by an eccentric shaft, approaches and moves away from the fixed jaw. Material is crushed by compression and leaves once it can pass the discharge setting.",
          },
          {
            question: "At which stage is a jaw crusher used?",
            answer: "Thanks to its large feed opening it is usually a first-stage (primary) crusher; its product is mostly processed further by secondary crushing and screening.",
          },
          {
            question: "How is product size adjusted?",
            answer: "Product size is set by the lower gap between the jaws and can be changed with the crusher's adjustment arrangement.",
          },
          {
            question: "Which parts wear?",
            answer: "Fixed and moving jaw plates and side liners. The plates are replaceable.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, hardness and abrasiveness, largest feed size, target discharge size and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a jaw crusher",
        text: "Share your material, largest feed size and target discharge size, and we will define the jaw crusher together with you.",
        mailSubject: "Jaw Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and hardness",
          "Abrasiveness and moisture",
          "Largest feed size",
          "Target discharge size",
          "Hourly capacity (t/h)",
          "Stationary or mobile installation",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a jaw crusher.",
          "",
          "Material:",
          "Largest feed size (mm):",
          "Target discharge size (mm):",
          "Capacity (t/h):",
          "Installation type:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Щековая дробилка | Первичное дробление камня и руды",
        description:
          "Щековые дробилки для дробления камня, руды и твёрдых минералов сжатием между неподвижной и подвижной щёками. Проект под приёмное отверстие и крупность.",
      },
      breadcrumbLabel: "Щековая дробилка",
      h1: "Щековая дробилка – дробление сжатием на первой стадии",
      productCategory: "Щековая дробилка",
      overview: {
        imageAlt: "Щековая дробилка с маховиками и клиноременным приводом",
        tagline: "Щековая дробилка",
        keyFacts: [
          { label: "Принцип", value: "Раздавливание между щёками" },
          { label: "Стадия", value: "Как правило, первичная" },
          { label: "Контроль крупности", value: "Регулируемая разгрузочная щель" },
          { label: "Изнашиваемые детали", value: "Неподвижная и подвижная плиты" },
        ],
        title: "Первичное дробление крупного и твёрдого материала",
        paragraphs: [
          "В щековой дробилке материал разрушается сжатием между неподвижной щекой и подвижной щекой, приводимой эксцентриковым валом. При сближении щёк материал раздавливается, при расхождении куски опускаются в клиновидной камере дробления.",
          "Куски покидают дробилку, когда становятся меньше нижней щели между щёками (разгрузочной щели). Крупность продукта определяется главным образом этой щелью, которую можно изменять регулировочным устройством.",
          "Благодаря большому приёмному отверстию щековые дробилки применяются для первичного дробления крупного карьерного камня, руды и бетонного лома. Продукт обычно поступает на вторичное дробление и грохочение.",
        ],
        note: "Щековая дробилка работает сжатием, а не ударом; поэтому для твёрдых и абразивных материалов она лучше подходит для первой стадии, чем ударные дробилки.",
      },
      process: {
        title: "Движение материала в щековой дробилке",
        intro: "Схема показывает типовой поток: дробилка принимает крупное питание и выпускает продукт через разгрузочную щель. Питатель, грохочение и вторичное дробление — отдельное оборудование.",
        note: "Отсев мелочи до дробилки (предварительное грохочение) снижает лишнюю нагрузку и износ щёк.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача крупного питания", text: "Камень или руда равномерно подаются питателем в приёмное отверстие." },
          { title: "Сжатие между щёками", text: "Подвижная щека раздавливает материал о неподвижную." },
          { title: "Опускание в камере", text: "Дроблёные куски опускаются по клиновидной камере." },
          { title: "Выгрузка через щель", text: "Продукт, прошедший щель, идёт на конвейер или вторую стадию." },
        ],
        flow: {
          svgTitle: "Схема движения материала в щековой дробилке",
          svgDesc: "Линия материала: питатель, щековая дробилка, выгрузка через щель, грохочение или вторичное дробление.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Питание", sub: "Питатель, отсев" }],
          drum: { title: "ЩЕКОВАЯ ДРОБИЛКА", sub: "неподвижная и подвижная щека" },
          after: [
            { title: "Выгрузка", sub: "Разгрузочная щель" },
            { title: "Грохот / 2 стадия", sub: "Далее по линии" },
          ],
        },
      },
      applications: {
        title: "Области применения щековой дробилки",
        items: [
          {
            title: "Рудное сырьё",
            text: "Первичное дробление крупной горной массы до крупности для дальнейшего дробления и обогащения. Материал щековых плит подбирается по абразивности руды.",
            imageAlt: "Красный рудный уступ в карьере",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Карьерный камень и твёрдые породы",
            text: "Первичное дробление крупного взорванного камня. Приёмное отверстие рассчитывается под максимальный кусок.",
            imageAlt: "Скальная стенка карьера со следами бурения",
            linkLabel: "Грохочение и классификация",
          },
          {
            title: "Бетонный лом и строительные отходы",
            text: "Предварительное дробление бетона и строительных отходов в линиях переработки. Отделение арматуры и примесей выполняется другим оборудованием линии.",
            imageAlt: "Бетонные плиты и строительный мусор на площадке",
            linkLabel: "Переработка и обращение с отходами",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление щековых дробилок",
        intro:
          "PRO MAKINA проектирует щековые дробилки исходя из максимальной крупности питания, твёрдости материала, крупности продукта и производительности. Станина, геометрия и плиты щёк, эксцентриковый вал и подшипники, маховик, привод и регулировка разрабатываются совместно.",
        highlights: ["Приёмное отверстие под питание", "Сменные дробящие плиты", "Эксцентриковый вал и усиленные подшипники", "Регулировка разгрузочной щели"],
        figureAlt: "Рифлёные дробящие плиты и конец эксцентрикового вала щековой дробилки",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Питание", text: "Максимальный кусок и требуемое приёмное отверстие." },
          { title: "Материал", text: "Твёрдость, абразивность, влажность и содержание мелочи." },
          { title: "Разгрузка", text: "Крупность продукта и диапазон разгрузочной щели." },
          { title: "Механическая часть", text: "Геометрия щёк, эксцентриковый вал, подшипники и станина." },
          { title: "Привод и безопасность", text: "Двигатель и ремённый привод, маховик, ограждения и доступ." },
        ],
        dataNote: "Размер приёмного отверстия, производительность и мощность рассчитываются по данным материала и линии; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея щековых дробилок",
        captions: ["Щековая дробилка с маховиком под площадкой", "Станина и маховики щековой дробилки", "Щековая дробилка, вид сбоку", "Основная станина щековой дробилки"],
      },
      faq: {
        title: "Часто задаваемые вопросы о щековой дробилке",
        items: [
          {
            question: "Как работает щековая дробилка?",
            answer: "Подвижная щека, приводимая эксцентриковым валом, сближается с неподвижной и отходит от неё. Материал раздавливается и выходит, когда проходит через разгрузочную щель.",
          },
          {
            question: "На какой стадии применяется щековая дробилка?",
            answer: "Благодаря большому приёмному отверстию, как правило, на первой стадии; продукт затем проходит вторичное дробление и грохочение.",
          },
          {
            question: "Как регулируется крупность продукта?",
            answer: "Крупность задаётся нижней щелью между щёками и изменяется регулировочным устройством дробилки.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Неподвижная и подвижная дробящие плиты и боковая футеровка; плиты сменные.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, твёрдость и абразивность, максимальный кусок, крупность продукта и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на щековую дробилку",
        text: "Сообщите материал, максимальный кусок и крупность продукта — вместе определим щековую дробилку.",
        mailSubject: "Запрос предложения: щековая дробилка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и твёрдость",
          "Абразивность и влажность",
          "Максимальный кусок питания",
          "Крупность продукта",
          "Часовая производительность (т/ч)",
          "Стационарная или мобильная установка",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на щековую дробилку.",
          "",
          "Материал:",
          "Максимальный кусок (мм):",
          "Крупность продукта (мм):",
          "Производительность (т/ч):",
          "Тип установки:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الكسارة الفكية | التكسير الأولي للحجر والخام",
        description:
          "كسارات فكية تكسّر الحجر والخام والمعادن الصلبة بالضغط بين فك ثابت وفك متحرك. تصميم وفق فتحة التلقيم والحجم المستهدف.",
      },
      breadcrumbLabel: "الكسارة الفكية",
      h1: "الكسارة الفكية – كسارة ضغط للتكسير الأولي",
      productCategory: "كسارة فكية",
      overview: {
        imageAlt: "كسارة فكية بحذافات وإدارة بالسيور",
        tagline: "كسارة فكية",
        keyFacts: [
          { label: "مبدأ التكسير", value: "الضغط بين الفكين" },
          { label: "المرحلة", value: "أولية في الغالب" },
          { label: "التحكم في الحجم", value: "فتحة تفريغ قابلة للضبط" },
          { label: "أجزاء التآكل", value: "ألواح الفك الثابت والمتحرك" },
        ],
        title: "التكسير الأولي للمواد الخشنة والصلبة",
        paragraphs: [
          "في الكسارة الفكية تُكسَّر المادة بالضغط بين فك ثابت وفك متحرك يديره عمود لامركزي. عندما يقترب الفك المتحرك من الثابت تنسحق المادة، وعندما يبتعد تنزل الأجزاء المكسّرة في غرفة التكسير على شكل حرف V.",
          "تغادر الأجزاء الكسارة عندما تصبح صغيرة بما يكفي للمرور من الفتحة السفلية بين الفكين (فتحة التفريغ)، لذا يتحدد حجم المنتج أساسًا بهذه الفتحة التي يمكن تغييرها بآلية الضبط.",
          "بفضل فتحة التلقيم الواسعة تُستخدم الكسارات الفكية في التكسير الأولي للصخور الخشنة من المحاجر والخامات ومخلفات هدم الخرسانة، ويُعالج المنتج عادةً بتكسير ثانوي وغربلة.",
        ],
        note: "تعمل الكسارة الفكية بالضغط لا بالصدم، لذا فهي حل مرحلة أولى أنسب من كسارات الصدم للمواد الصلبة والكاشطة.",
      },
      process: {
        title: "تدفق المادة في الكسارة الفكية",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه الكسارة الفكية التلقيم الخشن وتفرغه عبر فتحة التفريغ، بينما المُلقِّم والغربلة والتكسير الثانوي معدات منفصلة.",
        note: "يقلل فصل الدقائق قبل الكسارة (الغربلة المسبقة) الحمل والتآكل غير الضروريين على الفكين.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم خشن", text: "يُلقَّم الصخر أو الخام بانتظام إلى فتحة الكسارة بواسطة مُلقِّم." },
          { title: "الضغط بين الفكين", text: "يضغط الفك المتحرك المادة على الفك الثابت فيكسرها." },
          { title: "النزول في الغرفة", text: "تنزل الأجزاء المكسّرة في الغرفة ذات شكل V." },
          { title: "التفريغ عبر الفتحة", text: "يُنقل المنتج المار من الفتحة إلى ناقل أو إلى المرحلة التالية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الكسارة الفكية",
          svgDesc: "خط المادة: مُلقِّم، كسارة فكية، التفريغ عبر الفتحة، الغربلة أو التكسير الثانوي.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "مُلقِّم وغربلة مسبقة" }],
          drum: { title: "الكسارة الفكية", sub: "فك ثابت وفك متحرك" },
          after: [
            { title: "التفريغ", sub: "فتحة التفريغ" },
            { title: "غربلة / مرحلة ثانية", sub: "المعدة التالية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الكسارة الفكية",
        items: [
          {
            title: "خامات المعادن",
            text: "التكسير الأولي للخام الخشن إلى حجم مناسب للتكسير والمعالجة اللاحقة، مع اختيار مادة ألواح الفك وفق كشط الخام.",
            imageAlt: "واجهة خام حمراء في منجم مفتوح متدرج",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "صخور المحاجر والأحجار الصلبة",
            text: "التكسير الأولي لصخور المحاجر الخشنة الناتجة عن التفجير، مع تحجيم فتحة التلقيم وفق أكبر قطعة.",
            imageAlt: "واجهة صخرية في محجر تظهر عليها آثار الحفر",
            linkLabel: "أنظمة الغربلة والتصنيف",
          },
          {
            title: "الخرسانة ومخلفات الهدم",
            text: "التكسير المسبق للخرسانة ومخلفات الهدم في خطوط إعادة التدوير، بينما يتم فصل حديد التسليح والشوائب بمعدات أخرى في الخط.",
            imageAlt: "ألواح خرسانية ومخلفات هدم مكدسة في الموقع",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات فكية مخصصة",
        intro:
          "تصمم PRO MAKINA الكسارات الفكية وفق أكبر حجم تلقيم وصلابة المادة وحجم التفريغ المستهدف والسعة. ويُصمَّم الهيكل وشكل الفكين وألواحهما والعمود اللامركزي والمحامل والحذافة ونظام الإدارة والضبط معًا.",
        highlights: ["فتحة مناسبة لحجم التلقيم", "ألواح فك قابلة للاستبدال", "عمود لامركزي ومحامل للخدمة الشاقة", "ضبط فتحة التفريغ"],
        figureAlt: "ألواح فك مضلّعة وطرف العمود اللامركزي لكسارة فكية",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "التلقيم", text: "أكبر حجم للقطع وفتحة التلقيم المطلوبة." },
          { title: "المادة", text: "الصلابة والكشط والرطوبة ونسبة الدقائق." },
          { title: "التفريغ", text: "حجم المنتج المستهدف ومدى فتحة التفريغ." },
          { title: "التصميم الميكانيكي", text: "شكل الفكين والعمود اللامركزي والمحامل والهيكل." },
          { title: "الإدارة والسلامة", text: "المحرك والإدارة بالسيور والحذافة والحواجز وسهولة الصيانة." },
        ],
        dataNote: "تُحسب فتحة التلقيم والسعة وقدرة المحرك من بيانات المادة والخط، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور الكسارات الفكية",
        captions: ["كسارة فكية وحذافة مركّبة أسفل منصة", "هيكل الكسارة الفكية والحذافات", "منظر جانبي لكسارة فكية", "الهيكل الرئيسي لكسارة فكية"],
      },
      faq: {
        title: "أسئلة شائعة حول الكسارة الفكية",
        items: [
          {
            question: "كيف تعمل الكسارة الفكية؟",
            answer: "يقترب الفك المتحرك الذي يديره عمود لامركزي من الفك الثابت ويبتعد عنه، فتُكسَّر المادة بالضغط وتخرج عندما تمر من فتحة التفريغ.",
          },
          {
            question: "في أي مرحلة تُستخدم الكسارة الفكية؟",
            answer: "بفضل فتحة التلقيم الواسعة تُستخدم غالبًا في المرحلة الأولى، ويُعالج منتجها لاحقًا بتكسير ثانوي وغربلة.",
          },
          {
            question: "كيف يُضبط حجم المنتج؟",
            answer: "يُحدَّد بالفتحة السفلية بين الفكين ويمكن تغييره بآلية الضبط في الكسارة.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "ألواح الفك الثابت والمتحرك والبطانات الجانبية، والألواح قابلة للاستبدال.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وصلابتها وكشطها وأكبر حجم للتلقيم وحجم التفريغ المستهدف والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة فكية",
        text: "شاركنا المادة وأكبر حجم للتلقيم وحجم التفريغ المستهدف، لنحدد معًا الكسارة الفكية المناسبة.",
        mailSubject: "طلب عرض سعر: كسارة فكية",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وصلابتها",
          "الكشط والرطوبة",
          "أكبر حجم للتلقيم",
          "حجم التفريغ المستهدف",
          "السعة بالساعة (طن/ساعة)",
          "تركيب ثابت أو متنقل",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة فكية.",
          "",
          "المادة:",
          "أكبر حجم للتلقيم (مم):",
          "حجم التفريغ المستهدف (مم):",
          "السعة (طن/ساعة):",
          "نوع التركيب:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
