import type { DrumPageConfig } from "./types";

// Granülatör tamburu: ıslak granülasyon (aglomerasyon). Kurutma, soğutma ve eleme ayrı ekipmanlardır.
export const granulatorDrumPage: DrumPageConfig = {
  key: "granulatorDrum",
  trSlug: "granulator-tamburu",
  mainImage: "/images/tambur granulator/tamgranulator1.png",
  applications: [
    { image: "/images/tambur-uygulamalari/kompoze-gubre-granul.webp", link: "fertilizerPlants" },
    { image: "/images/01-genel/gran2.jpg", link: "compostPlants" },
    { image: "/images/01-genel/gran4.jpg", link: "chemicalProcess" },
  ],
  figure: "/images/tambur granulator/tamgranulator3.png",
  sectors: ["fertilizerPlants", "chemicalProcess", "mining"],
  resources: ["rotaryDryer", "coolingDrum", "coatingDrum", "mixingDrum"],
  machines: ["dosingSystems", "screeningSystems", "crushers", "conveying", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Granülatör Tamburu İmalatı | Gübre Granülasyonu | PRO MAKİNA",
        description:
          "Toz hammaddeleri sıvı bağlayıcıyla granüle dönüştüren döner granülatör tamburu. NPK, organomineral ve mineral ürünler için projeye özel tasarım ve imalat.",
      },
      breadcrumbLabel: "Granülatör Tamburu",
      h1: "Granülatör Tamburu – Döner Tamburlu Islak Granülasyon Sistemi",
      productCategory: "Döner Tamburlu Granülatör",
      overview: {
        imageAlt: "Döner granülatör tamburu, tahrik grubu ve taşıyıcı şase",
        tagline: "Döner Tamburlu Granülatör",
        keyFacts: [
          { label: "Proses", value: "Islak granülasyon (aglomerasyon)" },
          { label: "Sıvı faz", value: "Su, buhar veya sıvı bağlayıcı" },
          { label: "Boyutlandırma", value: "Kapasite ve geri dönüş oranına göre" },
          { label: "Kapsam", value: "Tekil tambur veya granülasyon hattı" },
        ],
        title: "Toz Hammaddeden Kontrollü Granül Oluşumu",
        paragraphs: [
          "Granülatör tamburu, ince taneli veya toz formdaki hammaddelerin su, buhar ya da sıvı bağlayıcıyla ıslatılarak döner hareket içinde granül forma getirildiği proses ekipmanıdır. Yuvarlanan ürün yatağında ince taneler birbirine tutunur, çekirdek oluşturur ve katman katman büyüyerek yuvarlak granüllere dönüşür.",
          "Tambur çapı, boyu, eğimi, devri ve iç geometri; hedef granül boyutu, geri dönüş (recycle) oranı, sıvı/katı oranı ve ürün dayanımı birlikte değerlendirilerek belirlenir. Sıvının ürün yatağına nerede ve nasıl dağıtılacağı, granül boyut dağılımını doğrudan etkiler.",
          "Granülatör tamburu ürünü kurutmaz; çıkıştaki granüller nemlidir ve dayanımlarını kurutma adımından sonra kazanır. Bu nedenle tambur, dozajlama, kurutma, soğutma, eleme ve geri dönüş hattıyla birlikte tek bir proses olarak projelendirilir.",
        ],
        note: "Kararlı granülasyon için sıvı dağılımı, geri dönüş oranı, tambur doluluğu ve dönüş karakteri birlikte ayarlanmalıdır; bu parametrelerden biri değiştiğinde granül boyutu da değişir.",
      },
      process: {
        title: "Granülasyon Hattı Proses Akışı",
        intro:
          "Şema, granülatör tamburunun tipik bir ıslak granülasyon hattındaki yerini gösterir. Kurutma ve eleme granülatörün işlevi değildir; hatta ayrı ekipmanlarla yapılır.",
        note: "Elek üstü ürün kırılarak, elek altı ince ürün ise doğrudan granülatör beslemesine geri döndürülür. Geri dönüş oranı proses dengesini belirleyen temel parametrelerden biridir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Dozajlama ve besleme", text: "Toz hammaddeler ve geri dönen ince ürün tartımlı olarak tambura beslenir." },
          { title: "Islatma ve çekirdeklenme", text: "Püskürtülen sıvı yatağı ıslatır; ince taneler tutunarak çekirdek oluşturur." },
          { title: "Granül büyümesi", text: "Tambur dönüşüyle yuvarlanan çekirdekler katman katman büyür ve yuvarlaklaşır." },
          { title: "Nemli granül çıkışı", text: "Granüller nemli hâlde kurutma, soğutma ve eleme hattına aktarılır." },
        ],
        auxLineLabel: "Sıvı / bağlayıcı hattı",
        auxLine: [
          { title: "Sıvı hazırlama", text: "Su, buhar veya bağlayıcı çözelti proses reçetesine göre hazırlanır." },
          { title: "Dozaj ve püskürtme", text: "Pompa ve nozullar sıvıyı ürün yatağının belirlenen bölgesine dağıtır." },
        ],
        flow: {
          svgTitle: "Granülasyon hattı proses akış şeması",
          svgDesc:
            "Ürün hattı: dozajlama, granülatör tamburu, ayrı kurutma tamburu, eleme ve geri dönüş. Sıvı hattı: sıvı hazırlama ve dozaj pompası, tambur içindeki püskürtme bölgesine.",
          mainLane: "ÜRÜN HATTI",
          before: [{ title: "Dozajlama", sub: "Toz hammadde, geri dönüş" }],
          drum: { title: "GRANÜLATÖR TAMBURU", sub: "yuvarlanma · granül büyümesi" },
          after: [
            { title: "Kurutma", sub: "Ayrı kurutma tamburu" },
            { title: "Eleme", sub: "Boy ayırma, geri dönüş" },
          ],
          aux: {
            lane: "SIVI / BAĞLAYICI HATTI",
            tone: "liquid",
            inputs: [
              { title: "Sıvı hazırlama", sub: "Su, buhar, bağlayıcı" },
              { title: "Dozaj pompası", sub: "Debi ayarı" },
            ],
            outputs: [],
            inLabel: "püskürtme nozulları",
          },
        },
      },
      applications: {
        title: "Granülatör Tamburu Uygulama Alanları",
        items: [
          {
            title: "NPK ve Kompoze Gübre Granülasyonu",
            text: "Üre, fosfat ve potas gibi toz bileşenlerin ortak granül içinde birleştirildiği kompoze gübre hatları. Reçete, sıvı/katı oranı ve geri dönüş dengesi hedef tane boyutuna göre ayarlanır.",
            imageAlt: "Kahverengi, küresel kompoze gübre granülleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Organomineral Gübre Granülasyonu",
            text: "Kompost veya organik madde içeren karışımların mineral besinlerle granüle edildiği hatlar. Organik fraksiyonun nemi ve lif yapısı sıvı dozajını ve granül dayanımını belirler.",
            imageAlt: "Avuç içinde koyu renkli organomineral gübre granülleri",
            linkLabel: "Organik Hammadde Kaynakları",
          },
          {
            title: "Mineral ve Kimyasal Toz Granülasyonu",
            text: "Tozuma sorunu olan mineral ve kimyasal ürünlerin taşınabilir, dozajlanabilir granül forma getirilmesi. Uygun bağlayıcı ve granül boyutu numune çalışmasıyla belirlenir.",
            imageAlt: "Çuval içinde gri renkli granül ürün",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Granülatör Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA granülatör tamburlarını hammadde reçetesi, hedef kapasite, granül boyutu ve geri dönüş oranına göre projelendirir. Tambur gövdesi, iç yüzey, sıvı dağıtım sistemi ve tahrik grubu, hattaki kurutma ve eleme ekipmanlarıyla uyumlu olacak şekilde birlikte tasarlanır.",
        highlights: ["Projeye özel çap ve boy", "Ayarlanabilir devir ve eğim", "Nozul ve sıvı hattı entegrasyonu", "Yapışmaya karşı iç yüzey seçenekleri"],
        figureAlt: "Granülatör tamburu gövdesinin vinçle yerine yerleştirilmesi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde ve Reçete", text: "Bileşenler, tane boyutu, yığın yoğunluğu ve başlangıç nemi." },
          { title: "Kapasite ve Geri Dönüş", text: "Saatlik ürün kapasitesi, geri dönüş oranı ve hedef granül boyutu." },
          { title: "Sıvı Sistemi", text: "Sıvı türü, sıcaklığı, dozaj miktarı ve püskürtme bölgesi." },
          { title: "Mekanik Tasarım", text: "Tambur ölçüleri, iç yüzey, tahrik sistemi ve taşıyıcı gruplar." },
          { title: "Hat Entegrasyonu", text: "Dozajlama, kurutma, soğutma, eleme ve kırıcı ile bağlantılar." },
        ],
        dataNote: "Yeni bir reçetede granülasyon davranışı belirsizse sıvı ihtiyacı ve granül dayanımı numune çalışmasıyla doğrulanmalıdır.",
      },
      faq: {
        title: "Granülatör Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Granülatör tamburu ürünü kurutur mu?",
            answer:
              "Hayır. Granülatör tamburunda ürüne sıvı eklenir ve granüller nemli hâlde çıkar. Nemin düşürülmesi hatta ayrı bir kurutma tamburunda, ürün sıcaklığının düşürülmesi ise soğutma tamburunda yapılır.",
          },
          {
            question: "Granülasyonda hangi sıvılar kullanılır?",
            answer:
              "Reçeteye göre su, buhar veya uygun sıvı bağlayıcı çözeltiler kullanılabilir. Doğru sıvı ve miktar, hammaddenin davranışına bağlıdır; yeni reçetelerde numune çalışması önerilir.",
          },
          {
            question: "Granül boyutu nasıl kontrol edilir?",
            answer:
              "Granül boyutu sıvı/katı oranı, geri dönüş oranı, tambur devri, eğimi ve doluluk seviyesiyle yönlendirilir. Hedef aralık dışındaki ürün eleme hattında ayrılarak geri döndürülür.",
          },
          {
            question: "Geri dönüş (recycle) hattı neden gereklidir?",
            answer:
              "Elekten dönen ince ürün yeni granüller için çekirdek görevi görür ve tambur içindeki nem dengesini kurar. Geri dönüş oranı, granülasyonun kararlı ilerlemesi için belirleyici parametrelerden biridir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Hammadde reçetesi, hedef kapasite, istenen granül boyut aralığı, kullanılacak sıvı veya bağlayıcı, mevcut kurutma ve eleme ekipmanı ile saha yerleşimi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Granülatör tamburu için teknik teklif alın",
        text: "Hammadde reçeteniz, hedef kapasiteniz ve granül boyutu beklentinize göre granülatör tamburunu ve hattaki bağlantılarını birlikte netleştirelim.",
        mailSubject: "Granülatör Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Hammadde türü ve reçete",
          "Hedef ürün kapasitesi (ton/saat)",
          "İstenen granül boyut aralığı",
          "Kullanılacak sıvı veya bağlayıcı",
          "Mevcut kurutma, soğutma ve eleme ekipmanı",
          "Saha yerleşimi ve çalışma süresi",
        ],
        requiredNote: "Reçete yeni ise numune bilgisi paylaşılması, sıvı ihtiyacının doğru belirlenmesine yardımcı olur.",
        inquiryLines: [
          "Merhaba, granülatör tamburu için teknik teklif almak istiyorum.",
          "",
          "Hammadde / reçete:",
          "Hedef kapasite (ton/saat):",
          "Hedef granül boyutu (mm):",
          "Sıvı / bağlayıcı:",
          "Mevcut hat ekipmanları:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Rotary Drum Granulator | Fertilizer Granulation",
        description:
          "Rotary drum granulators that turn powder feed into granules with a liquid binder. Project-specific design for NPK, organomineral and mineral products.",
      },
      breadcrumbLabel: "Rotary Drum Granulator",
      h1: "Rotary Drum Granulator – Wet Granulation Drum System",
      productCategory: "Rotary Drum Granulator",
      overview: {
        imageAlt: "Rotary drum granulator with drive unit and support frame",
        tagline: "Rotary Drum Granulator",
        keyFacts: [
          { label: "Process", value: "Wet granulation (agglomeration)" },
          { label: "Liquid phase", value: "Water, steam or liquid binder" },
          { label: "Sizing", value: "Based on capacity and recycle ratio" },
          { label: "Scope", value: "Standalone drum or granulation line" },
        ],
        title: "Controlled Granule Formation from Powder Feed",
        paragraphs: [
          "A rotary drum granulator is process equipment in which fine or powdered raw materials are wetted with water, steam or a liquid binder and formed into granules by the rotating motion. In the tumbling bed, fines stick together, form nuclei and grow layer by layer into round granules.",
          "Drum diameter, length, slope, speed and internal geometry are determined by the target granule size, recycle ratio, liquid-to-solid ratio and required granule strength. Where and how the liquid is distributed over the bed has a direct effect on the size distribution.",
          "The granulator does not dry the product: granules leave the drum moist and gain their strength only after drying. The drum is therefore engineered together with the dosing, drying, cooling, screening and recycle line as one process.",
        ],
        note: "Stable granulation requires liquid distribution, recycle ratio, drum filling and rolling behaviour to be tuned together; when one of them changes, granule size changes as well.",
      },
      process: {
        title: "Granulation Line Process Flow",
        intro:
          "The diagram shows the position of the granulator in a typical wet granulation line. Drying and screening are not granulator functions; they are carried out by separate equipment.",
        note: "Oversize product is crushed and undersize fines are returned directly to the granulator feed. The recycle ratio is one of the key parameters governing process balance.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Dosing and feeding", text: "Powder raw materials and returned fines are fed to the drum by weight." },
          { title: "Wetting and nucleation", text: "Sprayed liquid wets the bed; fines stick together and form nuclei." },
          { title: "Granule growth", text: "Rolling with the drum, nuclei grow layer by layer and become rounded." },
          { title: "Moist granule discharge", text: "Moist granules are transferred to the drying, cooling and screening line." },
        ],
        auxLineLabel: "Liquid / binder line",
        auxLine: [
          { title: "Liquid preparation", text: "Water, steam or binder solution is prepared according to the recipe." },
          { title: "Metering and spraying", text: "A pump and nozzles distribute the liquid over a defined zone of the bed." },
        ],
        flow: {
          svgTitle: "Granulation line process flow diagram",
          svgDesc:
            "Product line: dosing, rotary drum granulator, separate dryer, screening and recycle. Liquid line: liquid preparation and metering pump to the spray zone inside the drum.",
          mainLane: "PRODUCT LINE",
          before: [{ title: "Dosing", sub: "Powder feed, recycle" }],
          drum: { title: "DRUM GRANULATOR", sub: "rolling · granule growth" },
          after: [
            { title: "Drying", sub: "Separate rotary dryer" },
            { title: "Screening", sub: "Sizing and recycle" },
          ],
          aux: {
            lane: "LIQUID / BINDER LINE",
            tone: "liquid",
            inputs: [
              { title: "Liquid prep", sub: "Water, steam, binder" },
              { title: "Metering pump", sub: "Flow control" },
            ],
            outputs: [],
            inLabel: "spray nozzles",
          },
        },
      },
      applications: {
        title: "Rotary Drum Granulator Applications",
        items: [
          {
            title: "NPK and Compound Fertilizer Granulation",
            text: "Compound fertilizer lines in which powdered components such as urea, phosphate and potash are combined in one granule. Recipe, liquid-to-solid ratio and recycle balance are set for the target size.",
            imageAlt: "Brown, spherical compound fertilizer granules",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Organomineral Fertilizer Granulation",
            text: "Lines in which compost or organic matter is granulated together with mineral nutrients. Moisture and fibre structure of the organic fraction determine liquid dosing and granule strength.",
            imageAlt: "Dark organomineral fertilizer granules in a hand",
            linkLabel: "Organic Feedstock Sources",
          },
          {
            title: "Mineral and Chemical Powder Granulation",
            text: "Converting dusty mineral and chemical powders into granules that are easier to convey and meter. A suitable binder and granule size are confirmed by sample work.",
            imageAlt: "Grey granular product in a bag",
            linkLabel: "Chemical Process Industry",
          },
        ],
      },
      design: {
        title: "Custom Rotary Drum Granulator Design and Manufacturing",
        intro:
          "PRO MAKINA engineers drum granulators around the raw material recipe, target capacity, granule size and recycle ratio. The drum shell, internal surface, liquid distribution system and drive unit are designed together so that they match the dryer and screening equipment in the line.",
        highlights: ["Project-specific diameter and length", "Adjustable speed and slope", "Integrated nozzles and liquid line", "Anti-build-up internal surface options"],
        figureAlt: "Granulator drum shell being lifted into place by crane",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material and Recipe", text: "Components, particle size, bulk density and initial moisture." },
          { title: "Capacity and Recycle", text: "Hourly product capacity, recycle ratio and target granule size." },
          { title: "Liquid System", text: "Liquid type, temperature, dosing rate and spray zone." },
          { title: "Mechanical Design", text: "Drum dimensions, internal surface, drive system and supports." },
          { title: "Line Integration", text: "Connections to dosing, drying, cooling, screening and crushing." },
        ],
        dataNote: "If granulation behaviour of a new recipe is uncertain, liquid demand and granule strength should be confirmed by sample work.",
      },
      faq: {
        title: "Rotary Drum Granulator FAQ",
        items: [
          {
            question: "Does a drum granulator dry the product?",
            answer:
              "No. Liquid is added in the granulator and granules leave it moist. Moisture is removed in a separate rotary dryer, and product temperature is reduced in a rotary cooler.",
          },
          {
            question: "Which liquids are used for granulation?",
            answer:
              "Depending on the recipe, water, steam or suitable liquid binder solutions can be used. The right liquid and quantity depend on how the raw material behaves; sample work is recommended for new recipes.",
          },
          {
            question: "How is granule size controlled?",
            answer:
              "Granule size is steered by the liquid-to-solid ratio, recycle ratio, drum speed, slope and filling level. Product outside the target range is separated in screening and returned.",
          },
          {
            question: "Why is a recycle line needed?",
            answer:
              "Returned fines act as nuclei for new granules and help set the moisture balance in the drum. The recycle ratio is one of the decisive parameters for stable granulation.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Raw material recipe, target capacity, required granule size range, liquid or binder to be used, existing drying and screening equipment and the site layout.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a drum granulator",
        text: "Share your recipe, target capacity and granule size requirement, and we will define the granulator and its connections in the line together with you.",
        mailSubject: "Rotary Drum Granulator Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Raw material type and recipe",
          "Target product capacity (t/h)",
          "Required granule size range",
          "Liquid or binder to be used",
          "Existing drying, cooling and screening equipment",
          "Site layout and operating hours",
        ],
        requiredNote: "For a new recipe, sample information helps determine the liquid demand correctly.",
        inquiryLines: [
          "Hello, I would like a technical quotation for a rotary drum granulator.",
          "",
          "Raw material / recipe:",
          "Target capacity (t/h):",
          "Target granule size (mm):",
          "Liquid / binder:",
          "Existing line equipment:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Барабанный гранулятор | Грануляция удобрений",
        description:
          "Барабанные грануляторы для превращения порошкового сырья в гранулы с жидким связующим. Проектирование под NPK, органоминеральные и минеральные продукты.",
      },
      breadcrumbLabel: "Барабанный гранулятор",
      h1: "Барабанный гранулятор – система мокрой грануляции",
      productCategory: "Барабанный гранулятор",
      overview: {
        imageAlt: "Барабанный гранулятор с приводом и опорной рамой",
        tagline: "Барабанный гранулятор",
        keyFacts: [
          { label: "Процесс", value: "Мокрая грануляция (агломерация)" },
          { label: "Жидкая фаза", value: "Вода, пар или жидкое связующее" },
          { label: "Расчёт", value: "По производительности и доле ретура" },
          { label: "Объём поставки", value: "Отдельный барабан или линия грануляции" },
        ],
        title: "Контролируемое образование гранул из порошка",
        paragraphs: [
          "Барабанный гранулятор — технологическое оборудование, в котором мелкодисперсное или порошковое сырьё смачивается водой, паром или жидким связующим и за счёт вращения превращается в гранулы. В перекатывающемся слое мелкие частицы слипаются, образуют зародыши и послойно нарастают до округлых гранул.",
          "Диаметр, длина, наклон, частота вращения и внутренняя геометрия барабана определяются целевым размером гранул, долей ретура, соотношением жидкость/твёрдое и требуемой прочностью. Место и способ подачи жидкости на слой напрямую влияют на гранулометрический состав.",
          "Гранулятор не сушит продукт: гранулы выходят влажными и набирают прочность только после сушки. Поэтому барабан проектируется вместе с дозированием, сушкой, охлаждением, грохочением и линией ретура как единый процесс.",
        ],
        note: "Для стабильной грануляции распределение жидкости, доля ретура, заполнение барабана и характер перекатывания настраиваются совместно; изменение одного параметра меняет размер гранул.",
      },
      process: {
        title: "Технологическая схема линии грануляции",
        intro:
          "Схема показывает место гранулятора в типовой линии мокрой грануляции. Сушка и грохочение не являются функциями гранулятора и выполняются отдельным оборудованием.",
        note: "Крупная фракция измельчается, а мелкая возвращается непосредственно в питание гранулятора. Доля ретура — один из ключевых параметров баланса процесса.",
        mainLineLabel: "Продуктовая линия",
        productLine: [
          { title: "Дозирование и подача", text: "Порошковое сырьё и возвратная мелочь подаются в барабан весовым дозированием." },
          { title: "Смачивание и зародышеобразование", text: "Распылённая жидкость смачивает слой; мелкие частицы слипаются в зародыши." },
          { title: "Рост гранул", text: "Перекатываясь в барабане, зародыши послойно растут и округляются." },
          { title: "Выгрузка влажных гранул", text: "Влажные гранулы передаются на сушку, охлаждение и грохочение." },
        ],
        auxLineLabel: "Линия жидкости / связующего",
        auxLine: [
          { title: "Приготовление жидкости", text: "Вода, пар или раствор связующего готовятся по рецептуре." },
          { title: "Дозирование и распыление", text: "Насос и форсунки подают жидкость в заданную зону слоя." },
        ],
        flow: {
          svgTitle: "Технологическая схема линии грануляции",
          svgDesc:
            "Продуктовая линия: дозирование, барабанный гранулятор, отдельная сушилка, грохочение и ретур. Линия жидкости: приготовление и дозирующий насос к зоне распыления в барабане.",
          mainLane: "ПРОДУКТОВАЯ ЛИНИЯ",
          before: [{ title: "Дозирование", sub: "Порошок и ретур" }],
          drum: { title: "ГРАНУЛЯТОР", sub: "перекатывание · рост гранул" },
          after: [
            { title: "Сушка", sub: "Отдельная сушилка" },
            { title: "Грохочение", sub: "Фракции и ретур" },
          ],
          aux: {
            lane: "ЛИНИЯ ЖИДКОСТИ",
            tone: "liquid",
            inputs: [
              { title: "Приготовление", sub: "Вода, пар, связующее" },
              { title: "Насос-дозатор", sub: "Регулировка расхода" },
            ],
            outputs: [],
            inLabel: "форсунки",
          },
        },
      },
      applications: {
        title: "Области применения барабанного гранулятора",
        items: [
          {
            title: "Грануляция NPK и комплексных удобрений",
            text: "Линии комплексных удобрений, где порошковые компоненты — карбамид, фосфаты и калий — объединяются в одной грануле. Рецептура, соотношение жидкость/твёрдое и ретур настраиваются под целевой размер.",
            imageAlt: "Коричневые сферические гранулы комплексного удобрения",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Грануляция органоминеральных удобрений",
            text: "Линии, где компост или органическое вещество гранулируется вместе с минеральными элементами питания. Влажность и волокнистость органики определяют дозирование жидкости и прочность гранул.",
            imageAlt: "Тёмные гранулы органоминерального удобрения на ладони",
            linkLabel: "Источники органического сырья",
          },
          {
            title: "Грануляция минеральных и химических порошков",
            text: "Перевод пылящих минеральных и химических порошков в гранулы, удобные для транспортировки и дозирования. Подходящее связующее и размер гранул подтверждаются испытанием образцов.",
            imageAlt: "Серый гранулированный продукт в мешке",
            linkLabel: "Химическая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление барабанных грануляторов",
        intro:
          "PRO MAKINA проектирует барабанные грануляторы исходя из рецептуры сырья, производительности, размера гранул и доли ретура. Корпус барабана, внутренняя поверхность, система распределения жидкости и привод разрабатываются совместно и согласуются с сушильным и грохотильным оборудованием линии.",
        highlights: ["Диаметр и длина под проект", "Регулируемые скорость и наклон", "Встроенные форсунки и линия жидкости", "Внутренние поверхности против налипания"],
        figureAlt: "Монтаж корпуса барабанного гранулятора краном",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё и рецептура", text: "Компоненты, крупность, насыпная плотность и начальная влажность." },
          { title: "Производительность и ретур", text: "Часовая производительность, доля ретура и целевой размер гранул." },
          { title: "Система жидкости", text: "Тип жидкости, температура, расход и зона распыления." },
          { title: "Механическая часть", text: "Размеры барабана, внутренняя поверхность, привод и опоры." },
          { title: "Интеграция в линию", text: "Связь с дозированием, сушкой, охлаждением, грохочением и дроблением." },
        ],
        dataNote: "Если поведение новой рецептуры при грануляции неизвестно, потребность в жидкости и прочность гранул следует подтвердить испытанием образцов.",
      },
      faq: {
        title: "Часто задаваемые вопросы о барабанном грануляторе",
        items: [
          {
            question: "Сушит ли барабанный гранулятор продукт?",
            answer:
              "Нет. В грануляторе к продукту добавляется жидкость, и гранулы выходят влажными. Влага удаляется в отдельном сушильном барабане, а температура снижается в охладительном барабане.",
          },
          {
            question: "Какие жидкости используются при грануляции?",
            answer:
              "В зависимости от рецептуры применяются вода, пар или подходящие растворы связующего. Выбор жидкости и её количество зависят от поведения сырья; для новых рецептур рекомендуется испытание образцов.",
          },
          {
            question: "Как регулируется размер гранул?",
            answer:
              "Размер гранул задаётся соотношением жидкость/твёрдое, долей ретура, скоростью вращения, наклоном и степенью заполнения барабана. Продукт вне целевого диапазона отделяется на грохоте и возвращается.",
          },
          {
            question: "Зачем нужна линия ретура?",
            answer:
              "Возвратная мелочь служит зародышами для новых гранул и помогает поддерживать баланс влажности в барабане. Доля ретура — один из определяющих параметров стабильной грануляции.",
          },
          {
            question: "Какие данные нужны для коммерческого предложения?",
            answer:
              "Рецептура сырья, производительность, требуемый диапазон размеров гранул, используемая жидкость или связующее, имеющееся сушильное и грохотильное оборудование и планировка площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на барабанный гранулятор",
        text: "Сообщите рецептуру, производительность и требования к размеру гранул — вместе определим гранулятор и его связи с оборудованием линии.",
        mailSubject: "Запрос предложения: барабанный гранулятор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид сырья и рецептура",
          "Производительность по продукту (т/ч)",
          "Требуемый диапазон размеров гранул",
          "Используемая жидкость или связующее",
          "Имеющееся оборудование сушки, охлаждения и грохочения",
          "Планировка площадки и режим работы",
        ],
        requiredNote: "Для новой рецептуры данные об образце помогают точно определить потребность в жидкости.",
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на барабанный гранулятор.",
          "",
          "Сырьё / рецептура:",
          "Производительность (т/ч):",
          "Размер гранул (мм):",
          "Жидкость / связующее:",
          "Имеющееся оборудование линии:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "مُحبِّب الأسطوانة الدوّارة | خطوط تحبيب الأسمدة",
        description:
          "مُحبِّبات أسطوانية دوّارة تحوّل المواد المسحوقة إلى حبيبات بمادة رابطة سائلة. تصميم مخصص لأسمدة NPK والأسمدة العضوية المعدنية والمنتجات المعدنية.",
      },
      breadcrumbLabel: "مُحبِّب أسطواني دوّار",
      h1: "مُحبِّب الأسطوانة الدوّارة – نظام التحبيب الرطب",
      productCategory: "مُحبِّب أسطواني دوّار",
      overview: {
        imageAlt: "مُحبِّب أسطواني دوّار مع وحدة الإدارة والهيكل الحامل",
        tagline: "مُحبِّب أسطواني دوّار",
        keyFacts: [
          { label: "العملية", value: "تحبيب رطب (تكتّل)" },
          { label: "الطور السائل", value: "ماء أو بخار أو مادة رابطة سائلة" },
          { label: "التحجيم", value: "حسب السعة ونسبة المواد المُعادة" },
          { label: "نطاق التوريد", value: "أسطوانة منفردة أو خط تحبيب كامل" },
        ],
        title: "تكوين حبيبات مضبوط من المواد المسحوقة",
        paragraphs: [
          "المُحبِّب الأسطواني الدوّار معدة عملية تُرطَّب فيها المواد الناعمة أو المسحوقة بالماء أو البخار أو بمادة رابطة سائلة، ثم تتحول بفعل الدوران إلى حبيبات. في الطبقة المتدحرجة تلتصق الجسيمات الدقيقة ببعضها وتكوّن نوى تنمو طبقةً فوق طبقة حتى تصبح حبيبات مستديرة.",
          "يُحدَّد قطر الأسطوانة وطولها وميلها وسرعة دورانها وشكلها الداخلي وفق حجم الحبيبات المستهدف ونسبة المواد المُعادة ونسبة السائل إلى الصلب ومتانة الحبيبات المطلوبة. ويؤثر موضع توزيع السائل على الطبقة وطريقته مباشرةً في توزيع أحجام الحبيبات.",
          "لا يقوم المُحبِّب بتجفيف المنتج؛ إذ تخرج الحبيبات رطبة ولا تكتسب متانتها إلا بعد التجفيف. لذلك تُصمَّم الأسطوانة مع خطوط التلقيم والتجفيف والتبريد والغربلة والإعادة بوصفها عملية واحدة.",
        ],
        note: "يتطلب التحبيب المستقر ضبط توزيع السائل ونسبة الإعادة ودرجة امتلاء الأسطوانة ونمط التدحرج معًا؛ فتغيّر أي منها يغيّر حجم الحبيبات.",
      },
      process: {
        title: "مخطط تدفق خط التحبيب",
        intro:
          "يوضح المخطط موقع المُحبِّب في خط تحبيب رطب نموذجي. التجفيف والغربلة ليسا من وظائف المُحبِّب، بل تنفذهما معدات منفصلة.",
        note: "تُطحن الحبيبات كبيرة الحجم، وتُعاد الجسيمات الدقيقة مباشرةً إلى تلقيم المُحبِّب. وتُعد نسبة الإعادة من أهم معاملات توازن العملية.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "الوزن والتلقيم", text: "تُلقَّم المواد المسحوقة والدقائق المُعادة إلى الأسطوانة بالوزن." },
          { title: "الترطيب وتكوين النوى", text: "يرطّب السائل المرشوش الطبقة فتلتصق الدقائق مكوّنةً نوى." },
          { title: "نمو الحبيبات", text: "تنمو النوى طبقةً فوق طبقة وتستدير مع دوران الأسطوانة." },
          { title: "تفريغ الحبيبات الرطبة", text: "تنتقل الحبيبات الرطبة إلى خط التجفيف والتبريد والغربلة." },
        ],
        auxLineLabel: "خط السائل / المادة الرابطة",
        auxLine: [
          { title: "تحضير السائل", text: "يُحضَّر الماء أو البخار أو محلول المادة الرابطة وفق الوصفة." },
          { title: "الضخ والرش", text: "توزّع المضخة والفوهات السائل على منطقة محددة من الطبقة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق خط التحبيب",
          svgDesc:
            "خط المنتج: التلقيم، المُحبِّب الأسطواني، مجفف منفصل، الغربلة والإعادة. خط السائل: تحضير السائل ومضخة الجرعات إلى منطقة الرش داخل الأسطوانة.",
          mainLane: "خط المنتج",
          before: [{ title: "التلقيم", sub: "مسحوق ومواد مُعادة" }],
          drum: { title: "المُحبِّب الأسطواني", sub: "تدحرج · نمو الحبيبات" },
          after: [
            { title: "التجفيف", sub: "مجفف دوّار منفصل" },
            { title: "الغربلة", sub: "فرز وإعادة" },
          ],
          aux: {
            lane: "خط السائل",
            tone: "liquid",
            inputs: [
              { title: "تحضير السائل", sub: "ماء، بخار، مادة رابطة" },
              { title: "مضخة الجرعات", sub: "ضبط التدفق" },
            ],
            outputs: [],
            inLabel: "فوهات الرش",
          },
        },
      },
      applications: {
        title: "مجالات استخدام المُحبِّب الأسطواني",
        items: [
          {
            title: "تحبيب أسمدة NPK والأسمدة المركبة",
            text: "خطوط أسمدة مركبة تُجمع فيها مكونات مسحوقة مثل اليوريا والفوسفات والبوتاس في حبيبة واحدة. تُضبط الوصفة ونسبة السائل إلى الصلب وتوازن الإعادة وفق الحجم المستهدف.",
            imageAlt: "حبيبات سماد مركب كروية بنية اللون",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "تحبيب الأسمدة العضوية المعدنية",
            text: "خطوط يُحبَّب فيها الكمبوست أو المادة العضوية مع العناصر الغذائية المعدنية. تحدد رطوبة الجزء العضوي وبنيته الليفية جرعة السائل ومتانة الحبيبات.",
            imageAlt: "حبيبات سماد عضوي معدني داكنة في راحة اليد",
            linkLabel: "مصادر المواد العضوية",
          },
          {
            title: "تحبيب المساحيق المعدنية والكيميائية",
            text: "تحويل المساحيق المعدنية والكيميائية المسببة للغبار إلى حبيبات يسهل نقلها وتلقيمها. تُؤكَّد المادة الرابطة المناسبة وحجم الحبيبات من خلال تجارب على العينات.",
            imageAlt: "منتج حبيبي رمادي داخل كيس",
            linkLabel: "الصناعات الكيميائية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع مُحبِّبات أسطوانية مخصصة",
        intro:
          "تصمم PRO MAKINA المُحبِّبات الأسطوانية وفق وصفة المواد الخام والسعة المستهدفة وحجم الحبيبات ونسبة الإعادة. ويُصمَّم جسم الأسطوانة وسطحها الداخلي ونظام توزيع السائل ووحدة الإدارة معًا بما يتوافق مع معدات التجفيف والغربلة في الخط.",
        highlights: ["قطر وطول حسب المشروع", "سرعة وميل قابلان للضبط", "فوهات وخط سائل مدمجان", "أسطح داخلية تقلل الالتصاق"],
        figureAlt: "رفع جسم أسطوانة المُحبِّب إلى موضعه بالرافعة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المواد الخام والوصفة", text: "المكونات وحجم الجسيمات والكثافة الظاهرية والرطوبة الابتدائية." },
          { title: "السعة والإعادة", text: "السعة بالساعة ونسبة الإعادة وحجم الحبيبات المستهدف." },
          { title: "نظام السائل", text: "نوع السائل ودرجة حرارته ومعدل الجرعة ومنطقة الرش." },
          { title: "التصميم الميكانيكي", text: "أبعاد الأسطوانة والسطح الداخلي ونظام الإدارة والمساند." },
          { title: "التكامل مع الخط", text: "الربط مع التلقيم والتجفيف والتبريد والغربلة والطحن." },
        ],
        dataNote: "إذا كان سلوك وصفة جديدة في التحبيب غير معروف، ينبغي التحقق من حاجة السائل ومتانة الحبيبات بتجارب على العينات.",
      },
      faq: {
        title: "أسئلة شائعة حول المُحبِّب الأسطواني",
        items: [
          {
            question: "هل يجفف المُحبِّب الأسطواني المنتج؟",
            answer:
              "لا. يُضاف السائل إلى المنتج داخل المُحبِّب وتخرج الحبيبات رطبة. تُزال الرطوبة في مجفف دوّار منفصل، وتُخفَّض حرارة المنتج في أسطوانة تبريد.",
          },
          {
            question: "ما السوائل المستخدمة في التحبيب؟",
            answer:
              "بحسب الوصفة يمكن استخدام الماء أو البخار أو محاليل رابطة سائلة مناسبة. يعتمد اختيار السائل وكميته على سلوك المادة الخام، ويُنصح بتجارب على العينات للوصفات الجديدة.",
          },
          {
            question: "كيف يُضبط حجم الحبيبات؟",
            answer:
              "يُوجَّه حجم الحبيبات بنسبة السائل إلى الصلب ونسبة الإعادة وسرعة الدوران والميل ودرجة الامتلاء. ويُفصل المنتج الخارج عن النطاق المستهدف في الغربال ويُعاد.",
          },
          {
            question: "لماذا يلزم خط إعادة المواد؟",
            answer:
              "تعمل الدقائق المُعادة كنوى لحبيبات جديدة وتساعد على ضبط توازن الرطوبة داخل الأسطوانة. وتُعد نسبة الإعادة من المعاملات الحاسمة لاستقرار التحبيب.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "وصفة المواد الخام، والسعة المستهدفة، ونطاق حجم الحبيبات المطلوب، والسائل أو المادة الرابطة، ومعدات التجفيف والغربلة الحالية، ومخطط الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لمُحبِّب أسطواني",
        text: "شاركنا الوصفة والسعة المستهدفة ومتطلبات حجم الحبيبات، لنحدد معًا المُحبِّب وارتباطاته بمعدات الخط.",
        mailSubject: "طلب عرض سعر: مُحبِّب أسطواني دوّار",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة الخام والوصفة",
          "سعة المنتج المستهدفة (طن/ساعة)",
          "نطاق حجم الحبيبات المطلوب",
          "السائل أو المادة الرابطة المستخدمة",
          "معدات التجفيف والتبريد والغربلة الحالية",
          "مخطط الموقع وساعات التشغيل",
        ],
        requiredNote: "في الوصفات الجديدة تساعد بيانات العينة على تحديد حاجة السائل بدقة.",
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمُحبِّب أسطواني دوّار.",
          "",
          "المادة الخام / الوصفة:",
          "السعة المستهدفة (طن/ساعة):",
          "حجم الحبيبات المستهدف (مم):",
          "السائل / المادة الرابطة:",
          "معدات الخط الحالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
