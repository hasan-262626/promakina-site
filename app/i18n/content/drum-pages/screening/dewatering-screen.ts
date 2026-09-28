import type { DrumPageConfig } from "../types";

// Susuzlandırma eleği: yaş kum/agrega/mineralden serbest suyun ayrılması. Termal kurutucu değildir; çıkış nemi garantisi,
// kapasite, açıklık veya su debisi değeri verilmez. Sulu elekten (su destekli boyut sınıflandırma) ayrı tutulur.
// Projede susuzlandırma eleği fotoğrafı yok: ana ve şekil görselleri üçüncü taraf örnek proses görselleridir (Commons, CC BY 2.0);
// bu nedenle PRO MAKİNA rozeti yerine "örnek görsel" etiketi gösterilir ve Product şemasına eklenmez.
const el = (file: string) => `/images/eleme-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const dewateringScreenPage: DrumPageConfig = {
  key: "dewateringScreen",
  group: "screeningSystems",
  trSlug: "susuzlandirma-elekleri",
  mainImage: el("susuzlandirilmis-cevher.webp"),
  illustrativeMainImage: true,
  applications: [
    { image: el("yikanmis-kum-stoku.webp"), link: "mining" },
    { image: kr("m-kum.webp"), link: "vsiCrusher" },
    { image: el("geri-kazanilmis-agrega.webp"), link: "recycling" },
  ],
  figure: el("poliuretan-elek-paneli.webp"),
  sectors: ["mining", "recycling"],
  resources: ["wetScreen", "vibratingScreen", "vsiCrusher", "screeningSystems"],
  machines: ["conveying", "crushers", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Susuzlandırma Eleği İmalatı | Kum Susuzlandırma Eleği | PRO MAKİNA",
        description:
          "Yıkanmış kum, agrega ve uygun minerallerden serbest suyu ayıran susuzlandırma eleği imalatı. Elek paneli, eğim ve titreşim ürüne göre seçilir.",
      },
      breadcrumbLabel: "Susuzlandırma Elekleri",
      h1: "Susuzlandırma Eleği – Yaş Üründen Serbest Suyun Ayrılması",
      productCategory: "Susuzlandırma Eleği",
      overview: {
        imageAlt: "Vibrasyon motorlu susuzlandırma eleği yüzeyinde yıkanmış cevher yatağı (örnek görsel)",
        imageBadge: "Örnek proses görseli",
        tagline: "Susuzlandırma Eleği",
        keyFacts: [
          { label: "Görev", value: "Yaş katı üründen serbest suyun ayrılması" },
          { label: "Çalışma", value: "Titreşimli elek yüzeyinde malzeme yatağı" },
          { label: "Su", value: "Süzülen su toplanır ve tahliye edilir" },
          { label: "Çıkış nemi", value: "Tane dağılımı, ince oranı ve beslemeye bağlı" },
        ],
        title: "Yıkanmış Kum ve Agregada Serbest Suyun Azaltılması",
        paragraphs: [
          "Susuzlandırma eleği, yıkama veya yaş sınıflandırma sonrası suyla birlikte gelen kum, agrega veya mineral ürünün serbest suyunu ayırmak için kullanılan titreşimli elektir. Ürün elek yüzeyinde bir yatak oluşturur; titreşimle su bu yatak ve elek açıklıklarından süzülerek aşağı geçer, katı ürün ise elek sonundan alınır.",
          "Susuzlandırma performansını belirleyen başlıca unsurlar; beslemenin katı madde yükü ve su oranı, tane dağılımı ve ince tane oranı, elek paneli ve açıklığı, elek eğimi, titreşim ve yatak kalınlığıdır. Elek yüzeyi çoğunlukla aşınmaya dayanıklı poliüretan panellerden seçilir.",
          "Süzülen su elek altındaki haznede toplanır ve tesisin su geri kazanım veya çökeltme düzenine gönderilir. Sudaki ince taneler bu adımda ayrıca değerlendirilir.",
        ],
        note: "Susuzlandırma eleği termal kurutucu değildir; yalnızca serbest suyu azaltır. Çıkış nemi malzemenin tane dağılımına, ince oranına, besleme koşullarına ve elek tasarımına bağlıdır; kesin bir değer garanti edilmez.",
      },
      process: {
        title: "Susuzlandırma Eleği Proses Akışı",
        intro:
          "Şema, yaş malzemenin eleğe beslendiği, titreşimli elek yüzeyinde serbest suyun ayrıldığı, suyun toplandığı ve katı ürünün tahliye edildiği akışı gösterir. Yıkama ekipmanı, hidrosiklon ve su arıtma ayrı ekipmanlardır.",
        note: "Beslemenin elek genişliği boyunca düzenli dağıtılması, malzeme yatağının dengeli oluşmasını ve suyun homojen süzülmesini sağlar.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Yaş besleme", text: "Yıkanmış veya yaş sınıflandırılmış ürün suyla birlikte elek girişine verilir." },
          { title: "Yatak oluşumu", text: "Ürün elek yüzeyinde bir yatak oluşturur ve titreşimle ilerler." },
          { title: "Serbest suyun ayrılması", text: "Su malzeme yatağı ve elek açıklıklarından süzülerek elek altına geçer." },
          { title: "Katı ürün tahliyesi", text: "Serbest suyu azaltılmış ürün elek sonundan konveyöre veya stoğa alınır." },
        ],
        auxLineLabel: "Su hattı",
        auxLine: [
          { title: "Süzülen suyun toplanması", text: "Elek altına geçen su hazne veya olukta toplanır." },
          { title: "Su tahliyesi", text: "Su, tesisin geri kazanım veya çökeltme düzenine gönderilir." },
        ],
        flow: {
          svgTitle: "Susuzlandırma eleği proses akış şeması",
          svgDesc: "Ürün hattı: yaş besleme, susuzlandırma eleği ve katı ürün tahliyesi. Su hattı: süzülen suyun toplanması ve tahliyesi.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Yaş besleme", sub: "Yıkama / hidrosiklon" }],
          drum: { title: "SUSUZLANDIRMA ELEĞİ", sub: "serbest suyun ayrılması" },
          after: [{ title: "Katı ürün", sub: "Konveyör / stok" }],
          aux: {
            lane: "SU HATTI",
            tone: "liquid",
            inputs: [],
            outputs: [
              { title: "Süzülen su", sub: "Elek altı hazne" },
              { title: "Su tahliyesi", sub: "Geri kazanım / çökeltme" },
            ],
          },
        },
      },
      applications: {
        title: "Susuzlandırma Eleği Uygulama Alanları",
        items: [
          {
            title: "Yıkanmış Kum",
            text: "Kum yıkama hattından gelen ürünün stoklamadan önce serbest suyunun azaltılması. İnce tane oranı yüksek kumlarda elek paneli ve açıklığı ayrıca değerlendirilir.",
            imageAlt: "Kum yıkama tesisi önünde yıkanmış kum stok yığınları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kırma Kum",
            text: "Dik milli kırıcıyla üretilip yıkanan kırma kumun serbest suyunun ayrılması. Çıkış nemi kumun tane dağılımına bağlıdır.",
            imageAlt: "Kırma kum (M-kum) yığını",
            linkLabel: "Dik Milli Kırıcılar",
          },
          {
            title: "Geri Kazanılmış Agrega",
            text: "Yıkanmış geri dönüşüm agregasının konveyöre alınmadan önce suyunun süzülmesi. Aşındırıcı ürünlerde panel malzemesi ve kalınlığı önem taşır.",
            imageAlt: "Susuzlandırma eleği üzerinde ıslak geri kazanılmış agrega (örnek görsel)",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Susuzlandırma Eleği Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA susuzlandırma eleklerini beslenen malzemenin türü ve tane dağılımı, besleme debisi, katı madde yükü ve serbest su miktarına göre projelendirir. Elek gövdesi, panel ve açıklık, eğim, titreşim sistemi ile su toplama ve tahliye düzeni birlikte tasarlanır.",
        highlights: ["Aşınmaya dayanıklı elek paneli", "Ürüne göre açıklık ve eğim", "Titreşim sistemi ve yay düzeni", "Su toplama haznesi ve tahliye bağlantısı"],
        figureAlt: "Susuzlandırma eleğinde modüler poliüretan elek panelleri (örnek görsel)",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Yaş Besleme", text: "Malzeme türü, tane dağılımı ve ince tane oranı." },
          { title: "Serbest Su Yükü", text: "Besleme debisi, katı madde yükü ve su oranı." },
          { title: "Elek Paneli ve Açıklık", text: "Panel malzemesi, açıklık ve açık alan." },
          { title: "Titreşim ve Eğim", text: "Titreşim sistemi, eğim ve malzeme yatağı." },
          { title: "Su Tahliyesi", text: "Süzülen suyun toplanması ve tesis su hattına bağlantısı." },
        ],
        dataNote: "Elek alanı, açıklık, kapasite ve çıkış nemi malzeme ve besleme verisine göre değerlendirilir; sayfada genel değer veya nem garantisi verilmez.",
      },
      faq: {
        title: "Susuzlandırma Eleği Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Susuzlandırma eleği nasıl çalışır?",
            answer: "Yaş ürün elek yüzeyinde bir yatak oluşturur; titreşimle serbest su yatak ve elek açıklıklarından süzülür, katı ürün elek sonundan alınır.",
          },
          {
            question: "Susuzlandırma eleği ürünü kurutur mu?",
            answer: "Hayır. Termal kurutma yapmaz, yalnızca serbest suyu azaltır. Daha düşük nem gerekiyorsa ayrıca termal kurutma değerlendirilir.",
          },
          {
            question: "Çıkış nemi ne kadar olur?",
            answer: "Sabit bir değer verilemez; çıkış nemi tane dağılımına, ince tane oranına, besleme koşullarına ve elek tasarımına bağlıdır.",
          },
          {
            question: "Sulu elekten farkı nedir?",
            answer:
              "Sulu elek suyla desteklenen eleme ile ürünü boyut fraksiyonlarına ayırır. Susuzlandırma eleğinin görevi ise yaş üründen serbest suyu ayırmaktır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, tane dağılımı, besleme debisi, katı madde ve su oranı ile tesisteki yıkama ve su geri kazanım düzeni temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Susuzlandırma eleği için teknik teklif alın",
        text: "Malzemeniz, tane dağılımınız ve besleme koşullarınıza göre susuzlandırma eleğini birlikte netleştirelim.",
        mailSubject: "Susuzlandırma Eleği Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Malzeme türü", "Tane dağılımı ve ince oranı", "Besleme debisi", "Katı madde ve su oranı", "Yıkama hattı bilgisi", "Su geri kazanım düzeni"],
        inquiryLines: [
          "Merhaba, susuzlandırma eleği için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Tane dağılımı:",
          "Besleme debisi (ton/saat):",
          "Katı madde / su oranı:",
          "Yıkama hattı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Dewatering Screen Manufacturer | Sand Dewatering Screens",
        description:
          "Dewatering screens that remove free water from washed sand, aggregates and suitable minerals. Panels, inclination and vibration are selected for your product.",
      },
      breadcrumbLabel: "Dewatering Screen",
      h1: "Dewatering Screen – Removing Free Water from Wet Product",
      productCategory: "Dewatering Screen",
      overview: {
        imageAlt: "Washed ore bed on a dewatering screen with vibration motors (illustrative photo)",
        imageBadge: "Illustrative process photo",
        tagline: "Dewatering Screen",
        keyFacts: [
          { label: "Duty", value: "Removing free water from wet solids" },
          { label: "Operation", value: "Material bed on a vibrating screen deck" },
          { label: "Water", value: "Drained water is collected and discharged" },
          { label: "Outlet moisture", value: "Depends on size distribution, fines and feed" },
        ],
        title: "Reducing Free Water in Washed Sand and Aggregates",
        paragraphs: [
          "A dewatering screen is a vibrating screen used to remove the free water from sand, aggregate or mineral product arriving with water after washing or wet classification. The product forms a bed on the deck; with vibration, water drains through the bed and the apertures, while the solid product leaves at the end of the deck.",
          "Dewatering performance mainly depends on the solids load and water content of the feed, size distribution and fines content, panel type and aperture, deck inclination, vibration and bed depth. The deck is usually made of wear-resistant polyurethane panels.",
          "Drained water is collected in the hopper below the screen and sent to the plant's water recovery or settling system. Fines carried in the water are assessed at this step.",
        ],
        note: "A dewatering screen is not a thermal dryer; it only reduces free water. Outlet moisture depends on size distribution, fines content, feed conditions and screen design; no exact value is guaranteed.",
      },
      process: {
        title: "Dewatering Screen Process Flow",
        intro:
          "The diagram shows the flow in which wet material is fed to the screen, free water is separated on the vibrating deck, water is collected and the solid product is discharged. Washing equipment, hydrocyclones and water treatment are separate equipment.",
        note: "Even distribution of the feed across the screen width forms a uniform bed and lets water drain evenly.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Wet feed", text: "Washed or wet-classified product enters the screen together with water." },
          { title: "Bed formation", text: "The product forms a bed on the deck and advances with vibration." },
          { title: "Free water separation", text: "Water drains through the material bed and apertures to the underside." },
          { title: "Solid product discharge", text: "Product with reduced free water leaves the deck end to a conveyor or stockpile." },
        ],
        auxLineLabel: "Water line",
        auxLine: [
          { title: "Collecting drained water", text: "Water passing the deck is collected in a hopper or launder." },
          { title: "Water discharge", text: "Water is sent to the plant recovery or settling system." },
        ],
        flow: {
          svgTitle: "Dewatering screen process flow diagram",
          svgDesc: "Product line: wet feed, dewatering screen and solid product discharge. Water line: collection and discharge of drained water.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Wet feed", sub: "Washing / hydrocyclone" }],
          drum: { title: "DEWATERING SCREEN", sub: "free water separation" },
          after: [{ title: "Solid product", sub: "Conveyor / stockpile" }],
          aux: {
            lane: "WATER LINE",
            tone: "liquid",
            inputs: [],
            outputs: [
              { title: "Drained water", sub: "Underscreen hopper" },
              { title: "Water discharge", sub: "Recovery / settling" },
            ],
          },
        },
      },
      applications: {
        title: "Dewatering Screen Applications",
        items: [
          {
            title: "Washed Sand",
            text: "Reducing the free water of product from a sand washing line before stockpiling. For sands with high fines content, panel and aperture are assessed separately.",
            imageAlt: "Washed sand stockpiles in front of a sand washing plant",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Manufactured Sand",
            text: "Removing free water from manufactured sand produced by a vertical shaft impact crusher and washed. Outlet moisture depends on the sand's size distribution.",
            imageAlt: "Pile of manufactured sand (M-sand)",
            linkLabel: "Vertical Shaft Impact Crusher",
          },
          {
            title: "Recycled Aggregates",
            text: "Draining washed recycled aggregate before it goes to the conveyor. For abrasive products, panel material and thickness are important.",
            imageAlt: "Wet recycled aggregate on a dewatering screen (illustrative photo)",
            linkLabel: "Recycling and Waste Management",
          },
        ],
      },
      design: {
        title: "Custom Dewatering Screen Design and Manufacturing",
        intro:
          "PRO MAKINA engineers dewatering screens around the type and size distribution of the feed, feed rate, solids load and amount of free water. Screen body, panels and aperture, inclination, vibration system, and water collection and discharge are designed together.",
        highlights: ["Wear-resistant screen panels", "Aperture and inclination for the product", "Vibration system and springs", "Water collection hopper and outlet"],
        figureAlt: "Modular polyurethane screen panels on a dewatering screen (illustrative photo)",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Wet Feed", text: "Material type, size distribution and fines content." },
          { title: "Free Water Load", text: "Feed rate, solids load and water content." },
          { title: "Panels and Aperture", text: "Panel material, aperture and open area." },
          { title: "Vibration and Inclination", text: "Vibration system, inclination and material bed." },
          { title: "Water Discharge", text: "Collection of drained water and connection to the plant water circuit." },
        ],
        dataNote: "Screen area, aperture, capacity and outlet moisture are assessed from material and feed data; no generic values or moisture guarantee are stated on this page.",
      },
      faq: {
        title: "Dewatering Screen FAQ",
        items: [
          {
            question: "How does a dewatering screen work?",
            answer: "Wet product forms a bed on the deck; with vibration, free water drains through the bed and apertures, while the solid product leaves at the end of the deck.",
          },
          {
            question: "Does a dewatering screen dry the product?",
            answer: "No. It does no thermal drying; it only reduces free water. If lower moisture is needed, thermal drying is assessed separately.",
          },
          {
            question: "What outlet moisture can be achieved?",
            answer: "No fixed value can be given; outlet moisture depends on size distribution, fines content, feed conditions and screen design.",
          },
          {
            question: "How does it differ from a wet screen?",
            answer: "A wet screen separates product into size fractions with the help of water. The task of a dewatering screen is to remove free water from wet product.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, size distribution, feed rate, solids and water content, and the plant's washing and water recovery arrangement.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a dewatering screen",
        text: "Share your material, size distribution and feed conditions, and we will define the dewatering screen together with you.",
        mailSubject: "Dewatering Screen Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Material type", "Size distribution and fines", "Feed rate", "Solids and water content", "Washing line details", "Water recovery arrangement"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a dewatering screen.",
          "",
          "Material:",
          "Size distribution:",
          "Feed rate (t/h):",
          "Solids / water content:",
          "Washing line:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Обезвоживающий грохот | Грохоты для обезвоживания песка",
        description:
          "Обезвоживающие грохоты для удаления свободной воды из мытого песка, заполнителей и минералов. Панели, наклон и вибрация подбираются под продукт.",
      },
      breadcrumbLabel: "Обезвоживающий грохот",
      h1: "Обезвоживающий грохот – удаление свободной воды из мокрого продукта",
      productCategory: "Обезвоживающий грохот",
      overview: {
        imageAlt: "Слой мытой руды на обезвоживающем грохоте с вибродвигателями (иллюстративное фото)",
        imageBadge: "Иллюстративное фото процесса",
        tagline: "Обезвоживающий грохот",
        keyFacts: [
          { label: "Назначение", value: "Удаление свободной воды из мокрого материала" },
          { label: "Работа", value: "Слой материала на вибрирующей деке" },
          { label: "Вода", value: "Отделённая вода собирается и отводится" },
          { label: "Влажность на выходе", value: "Зависит от гранулометрии, мелочи и питания" },
        ],
        title: "Снижение свободной воды в мытом песке и заполнителях",
        paragraphs: [
          "Обезвоживающий грохот — вибрационный грохот для удаления свободной воды из песка, заполнителя или минерального продукта, поступающего с водой после промывки или мокрой классификации. Продукт образует на деке слой; под действием вибрации вода фильтруется через слой и ячейки, а твёрдый продукт выходит в конце деки.",
          "Эффективность обезвоживания определяется содержанием твёрдого и воды в питании, гранулометрией и долей мелочи, типом панелей и ячейкой, наклоном деки, вибрацией и толщиной слоя. Дека обычно набирается из износостойких полиуретановых панелей.",
          "Отделённая вода собирается в поддоне под грохотом и направляется в систему оборотного водоснабжения или отстаивания. Уносимая водой мелочь учитывается на этой стадии.",
        ],
        note: "Обезвоживающий грохот не является термической сушилкой — он лишь снижает свободную воду. Влажность на выходе зависит от гранулометрии, доли мелочи, условий питания и конструкции грохота; точное значение не гарантируется.",
      },
      process: {
        title: "Технологическая схема обезвоживающего грохота",
        intro:
          "Схема показывает поток: мокрый материал подаётся на грохот, на вибрирующей деке отделяется свободная вода, вода собирается, твёрдый продукт выгружается. Промывочное оборудование, гидроциклоны и водоочистка — отдельное оборудование.",
        note: "Равномерное распределение питания по ширине грохота формирует ровный слой и равномерный отвод воды.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Мокрое питание", text: "Мытый или мокро классифицированный продукт подаётся на грохот вместе с водой." },
          { title: "Формирование слоя", text: "Продукт образует слой на деке и перемещается вибрацией." },
          { title: "Отделение свободной воды", text: "Вода фильтруется через слой материала и ячейки вниз." },
          { title: "Выгрузка твёрдого продукта", text: "Продукт со сниженной свободной водой выходит на конвейер или в штабель." },
        ],
        auxLineLabel: "Линия воды",
        auxLine: [
          { title: "Сбор отделённой воды", text: "Прошедшая через деку вода собирается в поддоне или жёлобе." },
          { title: "Отвод воды", text: "Вода направляется в систему оборотного водоснабжения или отстаивания." },
        ],
        flow: {
          svgTitle: "Технологическая схема обезвоживающего грохота",
          svgDesc: "Линия продукта: мокрое питание, обезвоживающий грохот и выгрузка твёрдого продукта. Линия воды: сбор и отвод отделённой воды.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Мокрое питание", sub: "Промывка / гидроциклон" }],
          drum: { title: "ОБЕЗВОЖИВАЮЩИЙ ГРОХОТ", sub: "отделение свободной воды" },
          after: [{ title: "Твёрдый продукт", sub: "Конвейер / штабель" }],
          aux: {
            lane: "ЛИНИЯ ВОДЫ",
            tone: "liquid",
            inputs: [],
            outputs: [
              { title: "Отделённая вода", sub: "Поддон грохота" },
              { title: "Отвод воды", sub: "Оборот / отстаивание" },
            ],
          },
        },
      },
      applications: {
        title: "Области применения обезвоживающих грохотов",
        items: [
          {
            title: "Мытый песок",
            text: "Снижение свободной воды в продукте песко-промывочной линии перед складированием. Для песков с большой долей мелочи панели и ячейка рассматриваются отдельно.",
            imageAlt: "Штабели мытого песка перед песко-промывочной установкой",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Дроблёный песок",
            text: "Удаление свободной воды из промытого дроблёного песка, полученного на центробежно-ударной дробилке. Влажность на выходе зависит от гранулометрии песка.",
            imageAlt: "Штабель дроблёного песка",
            linkLabel: "Центробежно-ударная дробилка",
          },
          {
            title: "Вторичные заполнители",
            text: "Обезвоживание промытого вторичного заполнителя перед подачей на конвейер. Для абразивных продуктов важны материал и толщина панелей.",
            imageAlt: "Мокрый вторичный заполнитель на обезвоживающем грохоте (иллюстративное фото)",
            linkLabel: "Переработка и обращение с отходами",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление обезвоживающих грохотов",
        intro:
          "PRO MAKINA проектирует обезвоживающие грохоты исходя из вида и гранулометрии питания, производительности, содержания твёрдого и количества свободной воды. Короб, панели и ячейка, наклон, вибросистема, сбор и отвод воды разрабатываются совместно.",
        highlights: ["Износостойкие панели", "Ячейка и наклон под продукт", "Вибросистема и пружины", "Поддон для сбора воды и патрубок отвода"],
        figureAlt: "Модульные полиуретановые панели обезвоживающего грохота (иллюстративное фото)",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Мокрое питание", text: "Вид материала, гранулометрия и доля мелочи." },
          { title: "Нагрузка по свободной воде", text: "Производительность, содержание твёрдого и воды." },
          { title: "Панели и ячейка", text: "Материал панелей, ячейка и живое сечение." },
          { title: "Вибрация и наклон", text: "Вибросистема, наклон и слой материала." },
          { title: "Отвод воды", text: "Сбор отделённой воды и подключение к водной схеме завода." },
        ],
        dataNote: "Площадь грохочения, ячейка, производительность и влажность на выходе оцениваются по данным материала и питания; общие значения и гарантия влажности не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы об обезвоживающих грохотах",
        items: [
          {
            question: "Как работает обезвоживающий грохот?",
            answer: "Мокрый продукт образует слой на деке; вибрация заставляет свободную воду фильтроваться через слой и ячейки, а твёрдый продукт выходит в конце деки.",
          },
          {
            question: "Сушит ли обезвоживающий грохот продукт?",
            answer: "Нет. Термической сушки нет — снижается только свободная вода. Если нужна более низкая влажность, отдельно рассматривается термическая сушка.",
          },
          {
            question: "Какая влажность на выходе?",
            answer: "Фиксированного значения нет; влажность зависит от гранулометрии, доли мелочи, условий питания и конструкции грохота.",
          },
          {
            question: "Чем он отличается от грохота мокрого грохочения?",
            answer: "Грохот мокрого грохочения разделяет продукт на фракции с помощью воды. Задача обезвоживающего грохота — удалить свободную воду из мокрого продукта.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, гранулометрия, производительность, содержание твёрдого и воды, схема промывки и оборотного водоснабжения.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на обезвоживающий грохот",
        text: "Сообщите материал, гранулометрию и условия питания — вместе определим обезвоживающий грохот.",
        mailSubject: "Запрос предложения: обезвоживающий грохот",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид материала", "Гранулометрия и доля мелочи", "Производительность", "Содержание твёрдого и воды", "Данные промывочной линии", "Схема оборотной воды"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на обезвоживающий грохот.",
          "",
          "Материал:",
          "Гранулометрия:",
          "Производительность (т/ч):",
          "Твёрдое / вода:",
          "Промывочная линия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "غربال نزح المياه | غرابيل نزح المياه من الرمل",
        description:
          "غرابيل نزح المياه لإزالة الماء الحر من الرمل المغسول والركام والمعادن المناسبة. تُختار الألواح والميل والاهتزاز وفق منتجك.",
      },
      breadcrumbLabel: "غربال نزح المياه",
      h1: "غربال نزح المياه – إزالة الماء الحر من المنتج الرطب",
      productCategory: "غربال نزح المياه",
      overview: {
        imageAlt: "طبقة خام مغسول على غربال نزح المياه بمحركات اهتزاز (صورة توضيحية)",
        imageBadge: "صورة توضيحية للعملية",
        tagline: "غربال نزح المياه",
        keyFacts: [
          { label: "المهمة", value: "إزالة الماء الحر من المواد الصلبة الرطبة" },
          { label: "التشغيل", value: "طبقة مادة على سطح غربلة مهتز" },
          { label: "الماء", value: "يُجمع الماء المصفى ويُصرَّف" },
          { label: "رطوبة الخروج", value: "تعتمد على توزيع الأحجام والناعم والتلقيم" },
        ],
        title: "خفض الماء الحر في الرمل والركام المغسول",
        paragraphs: [
          "غربال نزح المياه غربال اهتزازي يُستخدم لإزالة الماء الحر من الرمل أو الركام أو المنتج المعدني الذي يصل مع الماء بعد الغسيل أو التصنيف الرطب. يشكّل المنتج طبقة على السطح، ومع الاهتزاز يتصفى الماء عبر الطبقة والفتحات بينما يخرج المنتج الصلب من نهاية السطح.",
          "يعتمد أداء نزح المياه أساسًا على حمل المواد الصلبة ونسبة الماء في التلقيم وتوزيع الأحجام ونسبة الناعم ونوع الألواح والفتحة وميل السطح والاهتزاز وسماكة الطبقة، ويُصنع السطح غالبًا من ألواح بولي يوريثان مقاومة للتآكل.",
          "يُجمع الماء المصفى في قادوس أسفل الغربال ويُرسل إلى نظام استرجاع المياه أو الترسيب في المصنع، وتُقيَّم الحبيبات الناعمة المحمولة في الماء في هذه المرحلة.",
        ],
        note: "غربال نزح المياه ليس مجففًا حراريًا، بل يخفض الماء الحر فقط. وتعتمد رطوبة الخروج على توزيع الأحجام ونسبة الناعم وظروف التلقيم وتصميم الغربال، ولا تُضمن قيمة محددة.",
      },
      process: {
        title: "تدفق العملية في غربال نزح المياه",
        intro:
          "يوضح المخطط التدفق الذي تُلقَّم فيه المادة الرطبة إلى الغربال ويُفصل الماء الحر على السطح المهتز ثم يُجمع الماء ويُفرَّغ المنتج الصلب، بينما معدات الغسيل والهيدروسيكلون ومعالجة المياه معدات منفصلة.",
        note: "يؤدي توزيع التلقيم بانتظام على عرض الغربال إلى تكوين طبقة متوازنة وتصفية متجانسة للماء.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تلقيم رطب", text: "يدخل المنتج المغسول أو المصنف رطبًا إلى الغربال مع الماء." },
          { title: "تكوين الطبقة", text: "يشكّل المنتج طبقة على السطح ويتقدم بالاهتزاز." },
          { title: "فصل الماء الحر", text: "يتصفى الماء عبر طبقة المادة والفتحات إلى أسفل الغربال." },
          { title: "تفريغ المنتج الصلب", text: "يخرج المنتج منخفض الماء الحر من نهاية السطح إلى ناقل أو كومة." },
        ],
        auxLineLabel: "خط الماء",
        auxLine: [
          { title: "جمع الماء المصفى", text: "يُجمع الماء المار عبر السطح في قادوس أو مجرى." },
          { title: "تصريف الماء", text: "يُرسل الماء إلى نظام الاسترجاع أو الترسيب في المصنع." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في غربال نزح المياه",
          svgDesc: "خط المنتج: تلقيم رطب، غربال نزح المياه، تفريغ المنتج الصلب. خط الماء: جمع الماء المصفى وتصريفه.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "تلقيم رطب", sub: "غسيل / هيدروسيكلون" }],
          drum: { title: "غربال نزح المياه", sub: "فصل الماء الحر" },
          after: [{ title: "منتج صلب", sub: "ناقل / كومة" }],
          aux: {
            lane: "خط الماء",
            tone: "liquid",
            inputs: [],
            outputs: [
              { title: "الماء المصفى", sub: "قادوس أسفل الغربال" },
              { title: "تصريف الماء", sub: "استرجاع / ترسيب" },
            ],
          },
        },
      },
      applications: {
        title: "مجالات استخدام غربال نزح المياه",
        items: [
          {
            title: "الرمل المغسول",
            text: "خفض الماء الحر في منتج خط غسيل الرمل قبل التخزين، مع تقييم الألواح والفتحة بشكل منفصل للرمال عالية المحتوى من الناعم.",
            imageAlt: "أكوام رمل مغسول أمام محطة غسيل رمل",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الرمل المصنّع",
            text: "إزالة الماء الحر من الرمل المصنّع المنتج بكسارة صدم ذات عمود رأسي والمغسول، وتعتمد رطوبة الخروج على توزيع أحجام الرمل.",
            imageAlt: "كومة رمل مصنّع",
            linkLabel: "كسارة الصدم ذات العمود الرأسي",
          },
          {
            title: "الركام المعاد تدويره",
            text: "تصفية الركام المعاد تدويره المغسول قبل نقله على الناقل، وتكتسب مادة الألواح وسماكتها أهمية للمنتجات الكاشطة.",
            imageAlt: "ركام معاد تدويره رطب على غربال نزح المياه (صورة توضيحية)",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع غرابيل نزح المياه المخصصة",
        intro:
          "تصمم PRO MAKINA غرابيل نزح المياه وفق نوع التلقيم وتوزيع أحجامه ومعدل التلقيم وحمل المواد الصلبة وكمية الماء الحر، مع تصميم جسم الغربال والألواح والفتحة والميل ونظام الاهتزاز وجمع الماء وتصريفه معًا.",
        highlights: ["ألواح غربلة مقاومة للتآكل", "فتحة وميل وفق المنتج", "نظام اهتزاز ونوابض", "قادوس جمع الماء ومخرج التصريف"],
        figureAlt: "ألواح بولي يوريثان معيارية على غربال نزح المياه (صورة توضيحية)",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "التلقيم الرطب", text: "نوع المادة وتوزيع الأحجام ونسبة الناعم." },
          { title: "حمل الماء الحر", text: "معدل التلقيم وحمل المواد الصلبة ونسبة الماء." },
          { title: "الألواح والفتحة", text: "مادة الألواح والفتحة والمساحة المفتوحة." },
          { title: "الاهتزاز والميل", text: "نظام الاهتزاز والميل وطبقة المادة." },
          { title: "تصريف الماء", text: "جمع الماء المصفى وربطه بدائرة المياه في المصنع." },
        ],
        dataNote: "تُقيَّم مساحة الغربلة والفتحة والسعة ورطوبة الخروج من بيانات المادة والتلقيم، ولا تُذكر قيم عامة أو ضمان للرطوبة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول غربال نزح المياه",
        items: [
          {
            question: "كيف يعمل غربال نزح المياه؟",
            answer: "يشكّل المنتج الرطب طبقة على السطح، ومع الاهتزاز يتصفى الماء الحر عبر الطبقة والفتحات ويخرج المنتج الصلب من نهاية السطح.",
          },
          {
            question: "هل يجفف غربال نزح المياه المنتج؟",
            answer: "لا. لا يقوم بتجفيف حراري بل يخفض الماء الحر فقط، وإذا لزمت رطوبة أقل يُدرس التجفيف الحراري بشكل منفصل.",
          },
          {
            question: "ما رطوبة الخروج الممكنة؟",
            answer: "لا يمكن إعطاء قيمة ثابتة، إذ تعتمد رطوبة الخروج على توزيع الأحجام ونسبة الناعم وظروف التلقيم وتصميم الغربال.",
          },
          {
            question: "ما الفرق بينه وبين الغربال الرطب؟",
            answer: "يفصل الغربال الرطب المنتج إلى أجزاء حسب الحجم بمساعدة الماء، أما مهمة غربال نزح المياه فهي إزالة الماء الحر من المنتج الرطب.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وتوزيع الأحجام ومعدل التلقيم ونسبة المواد الصلبة والماء وترتيب الغسيل واسترجاع المياه في المصنع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لغربال نزح المياه",
        text: "شاركنا المادة وتوزيع الأحجام وظروف التلقيم، لنحدد معًا غربال نزح المياه المناسب.",
        mailSubject: "طلب عرض سعر: غربال نزح المياه",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المادة", "توزيع الأحجام ونسبة الناعم", "معدل التلقيم", "نسبة المواد الصلبة والماء", "بيانات خط الغسيل", "ترتيب استرجاع المياه"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لغربال نزح المياه.",
          "",
          "المادة:",
          "توزيع الأحجام:",
          "معدل التلقيم (طن/ساعة):",
          "نسبة المواد الصلبة / الماء:",
          "خط الغسيل:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
