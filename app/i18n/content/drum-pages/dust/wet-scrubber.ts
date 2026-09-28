import type { DrumPageConfig } from "../types";

// Baca yıkama (ıslak gaz yıkama / scrubber) sistemi — yeni ürün. Projede scrubber tipi, fotoğrafı veya performans verisi yok:
// dolgulu kule, püskürtmeli kule veya Venturi standart ürün olarak sunulmaz, proje bazında değerlendirilecek seçenekler olarak anılır.
// Giderim verimi, emisyon, koku giderimi, sıvı tüketimi veya basınç kaybı değeri verilmez. Partikül tutma ile gaz absorpsiyonu ayrıdır.
// Ana görsel başka üreticiye ait örnek görseldir (Commons, CC BY-SA 4.0): "örnek görsel" etiketiyle gösterilir, Product şemasına eklenmez.
const app = (file: string) => `/images/tank-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const wetScrubberPage: DrumPageConfig = {
  key: "wetScrubber",
  group: "dustCollection",
  trSlug: "baca-yikama-scrubber-sistemleri",
  mainImage: "/images/toz-uygulamalari/islak-gaz-yikayici.webp",
  illustrativeMainImage: true,
  applications: [
    { image: app("kimya-proses-tesisi.webp"), link: "chemicalProcess" },
    { image: app("can-gubre-pelet.webp"), link: "fertilizerPlants" },
    { image: kr("kompost-yigini.webp"), link: "compostPlants" },
  ],
  sectors: ["chemicalProcess", "fertilizerPlants", "compostPlants"],
  resources: ["pulseJetFilter", "cyclones", "reactorsTanks", "dustCollection"],
  machines: ["dustCollection", "reactorsTanks", "dosingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Scrubber İmalatı | Baca Yıkama ve Islak Gaz Yıkama Sistemleri",
        description:
          "Proses gazına göre projelendirilen endüstriyel scrubber ve baca gazı yıkama sistemleri. Yıkama sıvısı, temas düzeni ve malzeme gaz bileşimine göre seçilir.",
      },
      breadcrumbLabel: "Baca Yıkama (Scrubber) Sistemleri",
      h1: "Baca Yıkama (Scrubber) Sistemleri İmalatı",
      productCategory: "Islak Gaz Yıkama Sistemi",
      overview: {
        imageAlt: "Alt kısmında sirkülasyon tankı bulunan ıslak gaz yıkama ünitesi (örnek görsel)",
        imageBadge: "Örnek proses görseli",
        tagline: "Baca Yıkama Sistemi",
        keyFacts: [
          { label: "Görev", value: "Gazın yıkama sıvısıyla temasıyla kirleticilerin azaltılması" },
          { label: "Temas düzeni", value: "Gaz bileşimine göre proje bazında belirlenir" },
          { label: "Sıvı devresi", value: "Sirkülasyon tankı, pompa ve dağıtım" },
          { label: "Ölçüm", value: "Seviye, debi ve gerekirse pH" },
        ],
        title: "Proses Gazının Yıkama Sıvısıyla Arıtılması",
        paragraphs: [
          "Baca yıkama (scrubber) sistemi, endüstriyel proseslerden çıkan gazın uygun bir yıkama sıvısıyla temas ettirildiği ıslak gaz arıtma sistemidir. Gaz ile sıvı arasındaki temas sırasında kirleticilerin bir kısmı sıvıya geçer; arıtılan gaz damla tutucudan geçerek fan ve bacaya ilerler.",
          "Partikül giderimi ile gaz fazındaki kirleticilerin absorpsiyonu farklı mekanizmalardır. Partiküller sıvı damlacıklarıyla yakalanırken, amonyak veya asit gazları gibi bileşenler sıvıya çözünerek ya da kimyasal tepkimeyle tutulur. Bu nedenle yıkama sıvısı hedef kirleticiye göre seçilir; yalnız su her kirletici için yeterli değildir ve gerektiğinde pH ayarlı çözeltiler kullanılır.",
          "Gaz-sıvı temas düzeni (püskürtmeli kule, dolgulu kolon, Venturi veya başka bir konfigürasyon) gaz debisi, kirletici türü, toz yükü ve izin verilen basınç kaybına göre proje bazında değerlendirilir. Kirlenen yıkama sıvısı izlenir, kontrollü olarak yenilenir ve gerekirse arıtmaya gönderilir.",
        ],
        note: "Scrubber her kirleticiyi tek başına ve aynı verimle gideren evrensel bir çözüm değildir. Gaz bileşimine göre yıkama sıvısı, temas yöntemi ve ilave arıtma aşamaları değişir; koku ve emisyon hedefleri proses verisiyle ayrıca değerlendirilir.",
      },
      process: {
        title: "Baca Yıkama Sistemi Proses Akışı",
        intro:
          "Şema, proses gazının sisteme girdiği, yıkama sıvısıyla temas ettiği, damla tutucudan geçerek bacaya çıktığı gaz hattını ve yıkama sıvısının sirkülasyon, kontrol ve tahliye edildiği sıvı hattını ayrı ayrı gösterir.",
        note: "Toz yükü yüksek gazlarda siklon veya filtreyle ön ayırma, yıkama sıvısının kirlenmesini ve bakım ihtiyacını azaltabilir.",
        mainLineLabel: "Gaz hattı",
        productLine: [
          { title: "Proses gazı girişi", text: "Fan ve emiş kanalıyla gelen gaz yıkama bölümüne girer." },
          { title: "Gaz-sıvı teması", text: "Gaz, projeye göre seçilen temas düzeninde yıkama sıvısıyla karşılaşır." },
          { title: "Damla tutma", text: "Gazla sürüklenen sıvı damlaları damla tutucuda ayrılır." },
          { title: "Gaz çıkışı", text: "Arıtılan gaz fan ve baca üzerinden atmosfere verilir." },
        ],
        auxLineLabel: "Sıvı sirkülasyon hattı",
        auxLine: [
          { title: "Sirkülasyon", text: "Yıkama sıvısı sirkülasyon tankından pompa ile dağıtım sistemine basılır." },
          { title: "İzleme ve yenileme", text: "Seviye, debi ve gerekirse pH izlenir; kirlenen sıvı kontrollü tahliye edilip takviye yapılır." },
        ],
        flow: {
          svgTitle: "Baca yıkama sistemi proses akış şeması",
          svgDesc:
            "Gaz hattı: proses gazı girişi, scrubber içinde gaz-sıvı teması, damla tutucu ve baca. Sıvı hattı: sirkülasyon tankından pompa ile besleme, sıvı dönüşü, kontrol ve tahliye.",
          mainLane: "GAZ HATTI",
          shape: "box",
          before: [{ title: "Proses gazı", sub: "Fan / emiş kanalı" }],
          drum: { title: "SCRUBBER", sub: "gaz-sıvı teması" },
          after: [
            { title: "Damla tutucu", sub: "Sürüklenme kontrolü" },
            { title: "Baca", sub: "Arıtılmış gaz" },
          ],
          aux: {
            lane: "SIVI SİRKÜLASYON HATTI",
            tone: "liquid",
            inputs: [{ title: "Sirkülasyon tankı", sub: "Pompa ile besleme" }],
            outputs: [
              { title: "Sıvı dönüşü", sub: "Tank / pH, seviye" },
              { title: "Blöf ve takviye", sub: "Tahliye / arıtma" },
            ],
          },
        },
      },
      applications: {
        title: "Baca Yıkama Sistemi Uygulama Alanları",
        items: [
          {
            title: "Kimyasal Proses Egzozu",
            text: "Kimyasal proses hatlarından çıkan ve sıvıyla tutulabilen gaz bileşenlerinin azaltılması. Yıkama sıvısı ve gövde malzemesi gazın kimyasına göre seçilir.",
            imageAlt: "Kimyasal proses tesisinde kolonlar, boru köprüleri ve yapılar",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Gübre Üretim Prosesleri",
            text: "Gübre proseslerinde amonyak gibi gaz bileşenleri ve ince toz içeren egzozun yıkanması. Toz ve gaz fazı için temas ve sıvı yönetimi ayrı değerlendirilir.",
            imageAlt: "Beyaz zemin üzerinde kalsiyum amonyum nitrat gübre peletleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Koku Kontrolü",
            text: "Kompost ve organik atık proseslerinde kokuya neden olan, sıvıyla tutulabilen bileşenlerin azaltılması. Sonuç gaz bileşimine bağlıdır; gerekirse biyofiltre gibi ek aşamalar değerlendirilir.",
            imageAlt: "Serilmiş koyu renkli kompost",
            linkLabel: "Kompost ve Organik Atık Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Baca Yıkama Sistemi Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA baca yıkama sistemlerini gazın kaynağı ve bileşimi, debi, sıcaklık ve nem ile hedef kirleticilere göre projelendirir. Yıkama bölümü ve temas düzeni, sirkülasyon tankı ve pompa, dağıtım sistemi, damla tutucu, ölçüm ve kontrol ile fan ve baca bağlantıları birlikte tasarlanır.",
        highlights: ["Hedef kirleticiye göre yıkama sıvısı", "Korozyona uygun gövde ve ekipman", "Sirkülasyon tankı, pompa ve dağıtım", "Damla tutucu ve bakım erişimi"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Gaz Bileşimi", text: "Gazın kaynağı, bileşimi, sıcaklığı, nemi ve toz yükü." },
          { title: "Hedef Kirleticiler", text: "Giderilmesi istenen bileşenler ve giriş konsantrasyonları." },
          { title: "Debi ve Basınç Kaybı", text: "Gaz debisi, izin verilen basınç kaybı ve fan uyumu." },
          { title: "Yıkama Sıvısı ve Temas", text: "Sıvı türü, kimyasal uyum ve gaz-sıvı temas düzeni." },
          { title: "Malzeme ve Sıvı Yönetimi", text: "Korozyon uyumu, damla tutma, blöf, takviye ve tahliye." },
        ],
        dataNote: "Sistem boyutları, sıvı debisi, giderim verimi ve basınç kaybı proses verisine göre değerlendirilir; sayfada emisyon, koku giderimi veya verim garantisi verilmez.",
      },
      faq: {
        title: "Baca Yıkama Sistemi Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Baca yıkama (scrubber) sistemi nasıl çalışır?",
            answer:
              "Proses gazı yıkama sıvısıyla temas ettirilir; kirleticilerin bir kısmı sıvıya geçer. Arıtılan gaz damla tutucudan geçerek bacaya çıkar, yıkama sıvısı ise sirkülasyon tankında toplanıp yeniden kullanılır.",
          },
          {
            question: "Scrubber her kirleticiyi giderir mi?",
            answer:
              "Hayır. Giderim; kirleticinin türüne, yıkama sıvısına, temas düzenine ve proses koşullarına bağlıdır. Bazı durumlarda ilave arıtma aşamaları gerekir.",
          },
          {
            question: "Yalnızca su yeterli midir?",
            answer:
              "Suda iyi çözünen bazı bileşenlerde ve partiküllerde su kullanılabilir; asit veya bazik gazlarda genellikle pH ayarlı yıkama çözeltileri gerekir. Seçim gaz bileşimine göre yapılır.",
          },
          {
            question: "Scrubber ile jet pulse filtre arasındaki fark nedir?",
            answer:
              "Jet pulse filtre kuru tozu filtre torbalarında tutar. Scrubber ise gazı sıvıyla temas ettirerek hem partikülleri hem de sıvıyla tutulabilen gaz bileşenlerini azaltmayı amaçlar ve bir sıvı devresi gerektirir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Gaz debisi, sıcaklığı ve nemi, gaz bileşimi, hedef kirleticiler ve giriş konsantrasyonları, toz yükü ve saha koşulları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Baca yıkama sistemi için teknik teklif alın",
        text: "Gazınızın bileşimi, debisi ve arıtma hedeflerinize göre baca yıkama sistemini birlikte değerlendirelim.",
        mailSubject: "Baca Yıkama (Scrubber) Sistemi Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Gaz debisi (m³/saat)", "Gaz sıcaklığı ve nemi", "Gaz bileşimi ve kaynağı", "Hedef kirleticiler ve konsantrasyonlar", "Toz yükü", "Saha ve baca bilgisi"],
        inquiryLines: [
          "Merhaba, baca yıkama (scrubber) sistemi için teknik teklif almak istiyorum.",
          "",
          "Gaz debisi (m³/saat):",
          "Gaz sıcaklığı / nem:",
          "Gaz kaynağı ve bileşimi:",
          "Hedef kirleticiler:",
          "Toz yükü:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Wet Scrubber Systems Manufacturer | Industrial Gas Scrubbers",
        description:
          "Industrial wet scrubbers and flue gas scrubbing systems engineered for your process gas. Liquid, contact method and materials follow the gas composition.",
      },
      breadcrumbLabel: "Wet Scrubber Systems",
      h1: "Wet Scrubber Systems Manufacturing",
      productCategory: "Wet Gas Scrubbing System",
      overview: {
        imageAlt: "Wet gas scrubbing unit with a recirculation tank at the bottom (illustrative photo)",
        imageBadge: "Illustrative process photo",
        tagline: "Wet Scrubber",
        keyFacts: [
          { label: "Duty", value: "Reducing pollutants by contacting gas with a scrubbing liquid" },
          { label: "Contact method", value: "Defined per project from the gas composition" },
          { label: "Liquid circuit", value: "Recirculation tank, pump and distribution" },
          { label: "Instrumentation", value: "Level, flow and pH where required" },
        ],
        title: "Treating Process Gas with a Scrubbing Liquid",
        paragraphs: [
          "A wet scrubber is a wet gas treatment system in which gas from an industrial process is brought into contact with a suitable scrubbing liquid. During gas-liquid contact, part of the pollutants transfer to the liquid; the treated gas passes a mist eliminator and continues to the fan and stack.",
          "Particle removal and absorption of gas-phase pollutants are different mechanisms. Particles are captured by liquid droplets, whereas components such as ammonia or acid gases are retained by dissolving in the liquid or by chemical reaction. The scrubbing liquid is therefore selected for the target pollutant; water alone is not sufficient for every pollutant, and pH-adjusted solutions are used where needed.",
          "The gas-liquid contact arrangement (spray tower, packed column, Venturi or another configuration) is assessed per project from gas flow, pollutant type, dust load and allowable pressure drop. The contaminated scrubbing liquid is monitored, renewed in a controlled way and sent to treatment if required.",
        ],
        note: "A scrubber is not a universal solution that removes every pollutant on its own with the same efficiency. Scrubbing liquid, contact method and additional treatment stages vary with gas composition; odour and emission targets are assessed separately from process data.",
      },
      process: {
        title: "Wet Scrubber Process Flow",
        intro:
          "The diagram shows separately the gas line, in which process gas enters, contacts the scrubbing liquid, passes the mist eliminator and leaves via the stack, and the liquid line, in which the scrubbing liquid is recirculated, monitored and discharged.",
        note: "For gas with a high dust load, pre-separation by a cyclone or filter can reduce liquid contamination and maintenance needs.",
        mainLineLabel: "Gas line",
        productLine: [
          { title: "Process gas inlet", text: "Gas from the fan and extraction duct enters the scrubbing section." },
          { title: "Gas-liquid contact", text: "Gas meets the scrubbing liquid in the contact arrangement selected for the project." },
          { title: "Mist elimination", text: "Liquid droplets carried by the gas are separated in the mist eliminator." },
          { title: "Gas outlet", text: "Treated gas is released to atmosphere via the fan and stack." },
        ],
        auxLineLabel: "Liquid recirculation line",
        auxLine: [
          { title: "Recirculation", text: "The scrubbing liquid is pumped from the recirculation tank to the distribution system." },
          { title: "Monitoring and renewal", text: "Level, flow and pH where required are monitored; contaminated liquid is bled off in a controlled way and topped up." },
        ],
        flow: {
          svgTitle: "Wet scrubber process flow diagram",
          svgDesc:
            "Gas line: process gas inlet, gas-liquid contact in the scrubber, mist eliminator and stack. Liquid line: pumped supply from the recirculation tank, liquid return, monitoring and bleed.",
          mainLane: "GAS LINE",
          shape: "box",
          before: [{ title: "Process gas", sub: "Fan / extraction duct" }],
          drum: { title: "WET SCRUBBER", sub: "gas-liquid contact" },
          after: [
            { title: "Mist eliminator", sub: "Carry-over control" },
            { title: "Stack", sub: "Treated gas" },
          ],
          aux: {
            lane: "LIQUID RECIRCULATION LINE",
            tone: "liquid",
            inputs: [{ title: "Recirculation tank", sub: "Pumped supply" }],
            outputs: [
              { title: "Liquid return", sub: "Tank / pH, level" },
              { title: "Bleed and make-up", sub: "Discharge / treatment" },
            ],
          },
        },
      },
      applications: {
        title: "Wet Scrubber Applications",
        items: [
          {
            title: "Chemical Process Exhaust",
            text: "Reducing gas components from chemical process lines that can be captured by a liquid. Scrubbing liquid and shell material are selected for the gas chemistry.",
            imageAlt: "Columns, pipe racks and structures at a chemical process plant",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Fertilizer Production Processes",
            text: "Scrubbing exhaust containing gas components such as ammonia and fine dust in fertilizer processes. Contact and liquid handling are assessed separately for the dust and gas phases.",
            imageAlt: "Calcium ammonium nitrate fertilizer pellets on a white surface",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Odour Control",
            text: "Reducing odour-causing components that can be captured by a liquid in compost and organic waste processes. Results depend on gas composition; additional stages such as a biofilter are assessed if needed.",
            imageAlt: "Spread-out dark compost",
            linkLabel: "Compost and Organic Waste Plants",
          },
        ],
      },
      design: {
        title: "Custom Wet Scrubber Design and Manufacturing",
        intro:
          "PRO MAKINA engineers wet scrubbers around the gas source and composition, flow, temperature and moisture, and the target pollutants. Scrubbing section and contact arrangement, recirculation tank and pump, distribution system, mist eliminator, instrumentation and control, and fan and stack connections are designed together.",
        highlights: ["Scrubbing liquid for the target pollutant", "Corrosion-resistant shell and equipment", "Recirculation tank, pump and distribution", "Mist eliminator and maintenance access"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Gas Composition", text: "Gas source, composition, temperature, moisture and dust load." },
          { title: "Target Pollutants", text: "Components to be reduced and their inlet concentrations." },
          { title: "Flow and Pressure Drop", text: "Gas flow, allowable pressure drop and fan match." },
          { title: "Scrubbing Liquid and Contact", text: "Liquid type, chemical compatibility and gas-liquid contact arrangement." },
          { title: "Materials and Liquid Handling", text: "Corrosion compatibility, mist elimination, bleed, make-up and discharge." },
        ],
        dataNote: "System size, liquid flow, removal efficiency and pressure drop are assessed from process data; no emission, odour removal or efficiency guarantee is given on this page.",
      },
      faq: {
        title: "Wet Scrubber FAQ",
        items: [
          {
            question: "How does a wet scrubber work?",
            answer:
              "Process gas is brought into contact with a scrubbing liquid and part of the pollutants transfer to it. The treated gas passes a mist eliminator to the stack, while the liquid is collected in the recirculation tank and reused.",
          },
          {
            question: "Does a scrubber remove every pollutant?",
            answer: "No. Removal depends on pollutant type, scrubbing liquid, contact arrangement and process conditions. Additional treatment stages are needed in some cases.",
          },
          {
            question: "Is water alone sufficient?",
            answer:
              "Water can be used for some readily soluble components and particles; acid or alkaline gases generally require pH-adjusted scrubbing solutions. The choice depends on gas composition.",
          },
          {
            question: "How does a scrubber differ from a pulse jet filter?",
            answer:
              "A pulse jet filter retains dry dust on filter bags. A scrubber contacts the gas with a liquid to reduce both particles and liquid-capturable gas components, and requires a liquid circuit.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Gas flow, temperature and moisture, gas composition, target pollutants and inlet concentrations, dust load and site conditions.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a wet scrubber",
        text: "Share your gas composition, flow and treatment targets, and we will assess the wet scrubber system together with you.",
        mailSubject: "Wet Scrubber System Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Gas flow (m³/h)", "Gas temperature and moisture", "Gas composition and source", "Target pollutants and concentrations", "Dust load", "Site and stack details"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a wet scrubber system.",
          "",
          "Gas flow (m³/h):",
          "Gas temperature / moisture:",
          "Gas source and composition:",
          "Target pollutants:",
          "Dust load:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Скрубберы мокрой очистки газов | Промышленные газоочистители",
        description:
          "Промышленные скрубберы и системы мокрой очистки дымовых газов под ваш технологический газ. Орошающая жидкость, способ контакта и материалы — по составу газа.",
      },
      breadcrumbLabel: "Скрубберы мокрой очистки газов",
      h1: "Производство скрубберов мокрой очистки газов",
      productCategory: "Система мокрой газоочистки",
      overview: {
        imageAlt: "Установка мокрой газоочистки с циркуляционным баком в нижней части (иллюстративное фото)",
        imageBadge: "Иллюстративное фото процесса",
        tagline: "Мокрый скруббер",
        keyFacts: [
          { label: "Назначение", value: "Снижение загрязнителей контактом газа с орошающей жидкостью" },
          { label: "Способ контакта", value: "Определяется по проекту исходя из состава газа" },
          { label: "Жидкостный контур", value: "Циркуляционный бак, насос и распределение" },
          { label: "КИП", value: "Уровень, расход и при необходимости pH" },
        ],
        title: "Очистка технологического газа орошающей жидкостью",
        paragraphs: [
          "Мокрый скруббер — система мокрой газоочистки, в которой газ промышленного процесса контактирует с подходящей орошающей жидкостью. При контакте газа и жидкости часть загрязнителей переходит в жидкость; очищенный газ проходит каплеуловитель и направляется к вентилятору и трубе.",
          "Улавливание частиц и абсорбция газообразных загрязнителей — разные механизмы. Частицы захватываются каплями жидкости, а такие компоненты, как аммиак или кислые газы, удерживаются растворением в жидкости или химической реакцией. Поэтому орошающая жидкость выбирается под целевой загрязнитель; одной воды недостаточно для любого загрязнителя, при необходимости применяются растворы с регулируемым pH.",
          "Схема контакта газа и жидкости (полый распылительный скруббер, насадочная колонна, Вентури или иная конфигурация) выбирается по проекту исходя из расхода газа, вида загрязнителя, запылённости и допустимого сопротивления. Загрязнённая жидкость контролируется, обновляется и при необходимости направляется на очистку.",
        ],
        note: "Скруббер не является универсальным решением, удаляющим любой загрязнитель самостоятельно и с одинаковой эффективностью. Жидкость, способ контакта и дополнительные ступени очистки зависят от состава газа; цели по запаху и выбросам оцениваются отдельно по данным процесса.",
      },
      process: {
        title: "Технологическая схема мокрого скруббера",
        intro:
          "Схема раздельно показывает газовую линию — вход газа, контакт с орошающей жидкостью, каплеуловитель и выход в трубу — и жидкостную линию, где жидкость циркулирует, контролируется и выводится.",
        note: "При высокой запылённости газа предварительная очистка в циклоне или фильтре снижает загрязнение жидкости и объём обслуживания.",
        mainLineLabel: "Газовая линия",
        productLine: [
          { title: "Вход технологического газа", text: "Газ от вентилятора и вытяжного воздуховода поступает в зону орошения." },
          { title: "Контакт газа и жидкости", text: "Газ встречается с орошающей жидкостью в выбранной для проекта схеме контакта." },
          { title: "Каплеулавливание", text: "Уносимые газом капли отделяются в каплеуловителе." },
          { title: "Выход газа", text: "Очищенный газ выбрасывается через вентилятор и трубу." },
        ],
        auxLineLabel: "Контур циркуляции жидкости",
        auxLine: [
          { title: "Циркуляция", text: "Жидкость подаётся насосом из циркуляционного бака в систему распределения." },
          { title: "Контроль и обновление", text: "Контролируются уровень, расход и при необходимости pH; загрязнённая жидкость выводится и восполняется." },
        ],
        flow: {
          svgTitle: "Технологическая схема мокрого скруббера",
          svgDesc:
            "Газовая линия: вход газа, контакт газа и жидкости в скруббере, каплеуловитель и труба. Жидкостная линия: подача насосом из бака, возврат жидкости, контроль и продувка.",
          mainLane: "ГАЗОВАЯ ЛИНИЯ",
          shape: "box",
          before: [{ title: "Технологический газ", sub: "Вентилятор / воздуховод" }],
          drum: { title: "СКРУББЕР", sub: "контакт газа и жидкости" },
          after: [
            { title: "Каплеуловитель", sub: "Контроль уноса" },
            { title: "Труба", sub: "Очищенный газ" },
          ],
          aux: {
            lane: "КОНТУР ЦИРКУЛЯЦИИ ЖИДКОСТИ",
            tone: "liquid",
            inputs: [{ title: "Циркуляционный бак", sub: "Подача насосом" }],
            outputs: [
              { title: "Возврат жидкости", sub: "Бак / pH, уровень" },
              { title: "Продувка и подпитка", sub: "Вывод / очистка" },
            ],
          },
        },
      },
      applications: {
        title: "Области применения мокрых скрубберов",
        items: [
          {
            title: "Выбросы химических производств",
            text: "Снижение газовых компонентов химических линий, улавливаемых жидкостью. Орошающая жидкость и материал корпуса выбираются по химии газа.",
            imageAlt: "Колонны, эстакады и сооружения химического производства",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Производство удобрений",
            text: "Промывка отходящих газов с аммиаком и мелкой пылью в производстве удобрений. Контакт и обращение с жидкостью оцениваются отдельно для пылевой и газовой фаз.",
            imageAlt: "Гранулы кальциево-аммиачной селитры на белой поверхности",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Контроль запахов",
            text: "Снижение пахучих компонентов, улавливаемых жидкостью, в процессах компостирования и переработки органических отходов. Результат зависит от состава газа; при необходимости рассматриваются доп. ступени, например биофильтр.",
            imageAlt: "Разложенный тёмный компост",
            linkLabel: "Компостирование и органические отходы",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление мокрых скрубберов",
        intro:
          "PRO MAKINA проектирует мокрые скрубберы исходя из источника и состава газа, расхода, температуры и влажности, а также целевых загрязнителей. Зона орошения и схема контакта, циркуляционный бак и насос, система распределения, каплеуловитель, КИП и управление, подключение вентилятора и трубы разрабатываются совместно.",
        highlights: ["Орошающая жидкость под целевой загрязнитель", "Коррозионностойкий корпус и оборудование", "Циркуляционный бак, насос и распределение", "Каплеуловитель и доступ для обслуживания"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Состав газа", text: "Источник, состав, температура, влажность и запылённость газа." },
          { title: "Целевые загрязнители", text: "Удаляемые компоненты и их входные концентрации." },
          { title: "Расход и сопротивление", text: "Расход газа, допустимое сопротивление и согласование с вентилятором." },
          { title: "Жидкость и контакт", text: "Вид жидкости, химическая совместимость и схема контакта газа и жидкости." },
          { title: "Материалы и жидкость", text: "Коррозионная совместимость, каплеулавливание, продувка, подпитка и вывод." },
        ],
        dataNote: "Размеры системы, расход жидкости, эффективность очистки и сопротивление оцениваются по данным процесса; гарантии по выбросам, запахам или эффективности не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о мокрых скрубберах",
        items: [
          {
            question: "Как работает мокрый скруббер?",
            answer:
              "Технологический газ контактирует с орошающей жидкостью, и часть загрязнителей переходит в неё. Очищенный газ через каплеуловитель уходит в трубу, а жидкость собирается в циркуляционном баке и используется повторно.",
          },
          {
            question: "Удаляет ли скруббер любые загрязнители?",
            answer: "Нет. Эффективность зависит от вида загрязнителя, жидкости, схемы контакта и условий процесса; в ряде случаев нужны дополнительные ступени очистки.",
          },
          {
            question: "Достаточно ли одной воды?",
            answer: "Вода подходит для некоторых хорошо растворимых компонентов и частиц; для кислых или щелочных газов обычно нужны растворы с регулируемым pH. Выбор зависит от состава газа.",
          },
          {
            question: "Чем скруббер отличается от рукавного фильтра?",
            answer:
              "Рукавный фильтр задерживает сухую пыль на рукавах. Скруббер контактирует газ с жидкостью, снижая как частицы, так и улавливаемые жидкостью газовые компоненты, и требует жидкостного контура.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Расход газа, температура и влажность, состав газа, целевые загрязнители и их концентрации, запылённость и условия площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на мокрый скруббер",
        text: "Сообщите состав газа, расход и цели очистки — вместе оценим систему мокрой газоочистки.",
        mailSubject: "Запрос предложения: мокрый скруббер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Расход газа (м³/ч)", "Температура и влажность газа", "Состав и источник газа", "Целевые загрязнители и концентрации", "Запылённость", "Данные площадки и трубы"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на систему мокрой газоочистки (скруббер).",
          "",
          "Расход газа (м³/ч):",
          "Температура / влажность газа:",
          "Источник и состав газа:",
          "Целевые загрязнители:",
          "Запылённость:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أنظمة غسل الغازات الرطبة (سكرابر) | غسّالات الغاز الصناعية",
        description:
          "غسّالات غاز صناعية وأنظمة غسل غازات المداخن مصممة وفق غاز عمليتك، مع اختيار سائل الغسيل وطريقة التلامس والمواد وفق تركيب الغاز.",
      },
      breadcrumbLabel: "أنظمة غسل الغازات (سكرابر)",
      h1: "تصنيع أنظمة غسل الغازات الرطبة (سكرابر)",
      productCategory: "نظام غسل غاز رطب",
      overview: {
        imageAlt: "وحدة غسل غاز رطب بخزان تدوير في الأسفل (صورة توضيحية)",
        imageBadge: "صورة توضيحية للعملية",
        tagline: "غسّالة غاز رطبة",
        keyFacts: [
          { label: "المهمة", value: "خفض الملوثات بتلامس الغاز مع سائل الغسيل" },
          { label: "طريقة التلامس", value: "تُحدَّد لكل مشروع وفق تركيب الغاز" },
          { label: "دائرة السائل", value: "خزان تدوير ومضخة ونظام توزيع" },
          { label: "القياس", value: "المستوى والتدفق والأس الهيدروجيني عند الحاجة" },
        ],
        title: "معالجة غاز العملية بسائل الغسيل",
        paragraphs: [
          "نظام غسل الغاز (سكرابر) نظام معالجة غاز رطب يُجعل فيه الغاز الخارج من العمليات الصناعية يتلامس مع سائل غسيل مناسب، فينتقل جزء من الملوثات إلى السائل أثناء التلامس، ويمر الغاز المعالج عبر فاصل القطرات ثم إلى المروحة والمدخنة.",
          "تُعد إزالة الجسيمات وامتصاص الملوثات الغازية آليتين مختلفتين؛ إذ تُلتقط الجسيمات بقطرات السائل، بينما تُحتجز مكونات مثل الأمونيا أو الغازات الحمضية بذوبانها في السائل أو بتفاعل كيميائي. لذلك يُختار سائل الغسيل وفق الملوث المستهدف، ولا يكفي الماء وحده لكل الملوثات، وتُستخدم محاليل مضبوطة الأس الهيدروجيني عند الحاجة.",
          "يُقيَّم ترتيب التلامس بين الغاز والسائل (برج رش أو عمود محشو أو فنتوري أو تكوين آخر) لكل مشروع وفق تدفق الغاز ونوع الملوث وحمل الغبار وفاقد الضغط المسموح، ويُراقَب سائل الغسيل الملوث ويُجدَّد بشكل متحكم به ويُرسل إلى المعالجة عند الحاجة.",
        ],
        note: "ليس السكرابر حلًا شاملًا يزيل كل ملوث وحده وبالكفاءة نفسها؛ إذ يتغير سائل الغسيل وطريقة التلامس ومراحل المعالجة الإضافية وفق تركيب الغاز، وتُقيَّم أهداف الرائحة والانبعاثات بشكل منفصل من بيانات العملية.",
      },
      process: {
        title: "تدفق العملية في نظام غسل الغاز",
        intro:
          "يوضح المخطط بشكل منفصل خط الغاز الذي يدخل فيه غاز العملية ويتلامس مع سائل الغسيل ويمر بفاصل القطرات ثم يخرج إلى المدخنة، وخط السائل الذي يُدوَّر فيه سائل الغسيل ويُراقَب ويُصرَّف.",
        note: "في الغازات عالية الغبار يمكن أن يقلل الفصل المسبق بسيكلون أو مرشح تلوث سائل الغسيل والحاجة إلى الصيانة.",
        mainLineLabel: "خط الغاز",
        productLine: [
          { title: "دخول غاز العملية", text: "يدخل الغاز القادم من المروحة ومجرى الشفط إلى قسم الغسيل." },
          { title: "تلامس الغاز والسائل", text: "يلتقي الغاز بسائل الغسيل في ترتيب التلامس المختار للمشروع." },
          { title: "فصل القطرات", text: "تُفصل قطرات السائل المحمولة مع الغاز في فاصل القطرات." },
          { title: "خروج الغاز", text: "يُطلق الغاز المعالج إلى الجو عبر المروحة والمدخنة." },
        ],
        auxLineLabel: "خط تدوير السائل",
        auxLine: [
          { title: "التدوير", text: "يُضخ سائل الغسيل من خزان التدوير إلى نظام التوزيع." },
          { title: "المراقبة والتجديد", text: "يُراقَب المستوى والتدفق والأس الهيدروجيني عند الحاجة، ويُصرَّف السائل الملوث بشكل متحكم به ويُعوَّض." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في نظام غسل الغاز",
          svgDesc:
            "خط الغاز: دخول غاز العملية، تلامس الغاز والسائل في السكرابر، فاصل القطرات والمدخنة. خط السائل: الضخ من خزان التدوير، عودة السائل، المراقبة والتصريف.",
          mainLane: "خط الغاز",
          shape: "box",
          before: [{ title: "غاز العملية", sub: "مروحة / مجرى شفط" }],
          drum: { title: "سكرابر", sub: "تلامس الغاز والسائل" },
          after: [
            { title: "فاصل القطرات", sub: "التحكم في الحمل" },
            { title: "المدخنة", sub: "غاز معالج" },
          ],
          aux: {
            lane: "خط تدوير السائل",
            tone: "liquid",
            inputs: [{ title: "خزان التدوير", sub: "تغذية بالمضخة" }],
            outputs: [
              { title: "عودة السائل", sub: "الخزان / الأس والمستوى" },
              { title: "تصريف وتعويض", sub: "تصريف / معالجة" },
            ],
          },
        },
      },
      applications: {
        title: "مجالات استخدام نظام غسل الغاز",
        items: [
          {
            title: "عادم العمليات الكيميائية",
            text: "خفض مكونات الغاز الخارجة من خطوط العمليات الكيميائية والقابلة للاحتجاز بالسائل، مع اختيار سائل الغسيل ومادة الجسم وفق كيمياء الغاز.",
            imageAlt: "أعمدة وجسور أنابيب ومنشآت في مصنع عمليات كيميائية",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
          {
            title: "عمليات إنتاج الأسمدة",
            text: "غسل العادم المحتوي على مكونات غازية مثل الأمونيا وغبار ناعم في عمليات الأسمدة، مع تقييم التلامس وإدارة السائل بشكل منفصل لطوري الغبار والغاز.",
            imageAlt: "حبيبات سماد نترات الأمونيوم الكلسية على سطح أبيض",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "التحكم في الروائح",
            text: "خفض المكونات المسببة للرائحة والقابلة للاحتجاز بالسائل في عمليات السماد العضوي والنفايات العضوية، وتعتمد النتيجة على تركيب الغاز وتُدرس مراحل إضافية مثل المرشح الحيوي عند الحاجة.",
            imageAlt: "سماد عضوي داكن مفروش",
            linkLabel: "مصانع السماد العضوي والنفايات العضوية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أنظمة غسل الغاز المخصصة",
        intro:
          "تصمم PRO MAKINA أنظمة غسل الغاز وفق مصدر الغاز وتركيبه وتدفقه ودرجة حرارته ورطوبته والملوثات المستهدفة، مع تصميم قسم الغسيل وترتيب التلامس وخزان التدوير والمضخة ونظام التوزيع وفاصل القطرات والقياس والتحكم وتوصيلات المروحة والمدخنة معًا.",
        highlights: ["سائل غسيل وفق الملوث المستهدف", "جسم ومعدات مقاومة للتآكل", "خزان تدوير ومضخة ونظام توزيع", "فاصل قطرات وسهولة الصيانة"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "تركيب الغاز", text: "مصدر الغاز وتركيبه ودرجة حرارته ورطوبته وحمل الغبار." },
          { title: "الملوثات المستهدفة", text: "المكونات المطلوب خفضها وتركيزاتها عند الدخول." },
          { title: "التدفق وفاقد الضغط", text: "تدفق الغاز وفاقد الضغط المسموح والتوافق مع المروحة." },
          { title: "سائل الغسيل والتلامس", text: "نوع السائل والتوافق الكيميائي وترتيب تلامس الغاز والسائل." },
          { title: "المواد وإدارة السائل", text: "التوافق مع التآكل وفصل القطرات والتصريف والتعويض." },
        ],
        dataNote: "تُقيَّم أبعاد النظام وتدفق السائل وكفاءة الإزالة وفاقد الضغط من بيانات العملية، ولا يُقدَّم في هذه الصفحة أي ضمان للانبعاثات أو إزالة الرائحة أو الكفاءة.",
      },
      faq: {
        title: "أسئلة شائعة حول نظام غسل الغاز",
        items: [
          {
            question: "كيف يعمل نظام غسل الغاز (سكرابر)؟",
            answer:
              "يُجعل غاز العملية يتلامس مع سائل الغسيل فينتقل جزء من الملوثات إليه، ويمر الغاز المعالج بفاصل القطرات إلى المدخنة، بينما يُجمع السائل في خزان التدوير ويُعاد استخدامه.",
          },
          {
            question: "هل يزيل السكرابر كل الملوثات؟",
            answer: "لا. تعتمد الإزالة على نوع الملوث وسائل الغسيل وترتيب التلامس وظروف العملية، وقد تلزم مراحل معالجة إضافية في بعض الحالات.",
          },
          {
            question: "هل يكفي الماء وحده؟",
            answer: "يمكن استخدام الماء لبعض المكونات سهلة الذوبان وللجسيمات، أما الغازات الحمضية أو القلوية فتتطلب عادةً محاليل مضبوطة الأس الهيدروجيني، ويعتمد الاختيار على تركيب الغاز.",
          },
          {
            question: "ما الفرق بين السكرابر والمرشح النبضي؟",
            answer:
              "يحجز المرشح النبضي الغبار الجاف على أكياس الترشيح، بينما يجعل السكرابر الغاز يتلامس مع سائل لخفض الجسيمات والمكونات الغازية القابلة للاحتجاز بالسائل، ويتطلب دائرة سائل.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "تدفق الغاز ودرجة حرارته ورطوبته وتركيبه والملوثات المستهدفة وتركيزاتها وحمل الغبار وظروف الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لنظام غسل الغاز",
        text: "شاركنا تركيب الغاز وتدفقه وأهداف المعالجة، لنقيّم معًا نظام غسل الغاز المناسب.",
        mailSubject: "طلب عرض سعر: نظام غسل غاز (سكرابر)",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["تدفق الغاز (م³/ساعة)", "درجة حرارة الغاز ورطوبته", "تركيب الغاز ومصدره", "الملوثات المستهدفة وتركيزاتها", "حمل الغبار", "بيانات الموقع والمدخنة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام غسل غاز (سكرابر).",
          "",
          "تدفق الغاز (م³/ساعة):",
          "درجة حرارة الغاز / الرطوبة:",
          "مصدر الغاز وتركيبه:",
          "الملوثات المستهدفة:",
          "حمل الغبار:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
