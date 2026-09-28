import type { DrumPageConfig } from "../types";

// Jet pulse (pulse jet) torbalı filtre: tozun filtre torbalarında tutulması ve basınçlı hava darbeleriyle temizleme.
// Siklon veya ıslak yıkayıcı değildir. Filtrasyon verimi, emisyon değeri, debi, filtre alanı veya hava/kumaş oranı verilmez;
// patlayıcı toz ve yüksek sıcaklık uygunluğu varsayılmaz. Görsellerin lisans kaydı yok; render görünümlü jerpul10 kullanılmadı.
const img = (file: string) => `/images/jet pulse/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const pulseJetFilterPage: DrumPageConfig = {
  key: "pulseJetFilter",
  group: "dustCollection",
  trSlug: "pulse-jet-filtreler",
  mainImage: img("jerpul4.jpg"),
  applications: [
    { image: dry("silis-kumu.webp"), link: "rotaryDryer" },
    { image: dry("granul-gubre.webp"), link: "fertilizerPlants" },
    { image: kr("alcitasi.webp"), link: "mining" },
  ],
  figure: img("jerpul3.jpg"),
  gallery: [img("jerpul5.jpg"), img("jerpul12.png"), img("jerpul8.jpg"), img("jerpul9.jpg"), img("jerpul7.jpg"), img("jerpul6.jpg"), "/images/siklon/toz7.jpg"],
  sectors: ["mining", "fertilizerPlants", "chemicalProcess"],
  resources: ["cyclones", "wetScrubber", "rotaryDryer", "dustCollection"],
  machines: ["dustCollection", "conveying", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Pulse Jet Filtre İmalatı | Torbalı Toz Toplama Filtresi | PRO MAKİNA",
        description:
          "Kurutma, mineral ve gübre proseslerinde toz toplama için jet pulse torbalı filtre imalatı. Filtre alanı, torba ve temizleme sistemi prosese göre seçilir.",
      },
      breadcrumbLabel: "Jet Pulse Filtreler",
      h1: "Pulse Jet Filtre – Torbalı Toz Toplama ve Basınçlı Hava ile Temizleme",
      productCategory: "Pulse Jet Filtre",
      overview: {
        imageAlt: "Emiş kanalları ve fanla bağlı, sahada kurulu jet pulse torbalı filtre",
        tagline: "Jet Pulse Filtre",
        keyFacts: [
          { label: "Ayırma prensibi", value: "Tozun filtre torbası yüzeyinde tutulması" },
          { label: "Temizleme", value: "Basınçlı hava darbeleriyle (pulse jet)" },
          { label: "Kontrol", value: "Diferansiyel basınç takibi" },
          { label: "Toz tahliyesi", value: "Bunker ve hava kilidi veya helezon" },
        ],
        title: "Tozlu Proses Havasının Filtre Torbalarında Temizlenmesi",
        paragraphs: [
          "Jet pulse filtrede fanın emdiği tozlu hava filtre gövdesine girer ve filtre torbalarının dış yüzeyinden içeri geçer. Toz torba yüzeyinde bir tabaka oluşturarak tutulur, temizlenen hava torbanın içinden temiz hava odasına ve oradan fan ve bacaya ilerler.",
          "Torba yüzeyinde biriken toz, basınçlı hava tankına bağlı pulse valflerinin kısa süreli hava darbeleriyle torbalardan silkelenir ve alt bunkere düşer. Temizleme, filtre giriş-çıkış diferansiyel basıncına veya zamana göre kontrol edilebilir.",
          "Filtre yüzey alanı ve hava/kumaş oranı; hava debisi, giriş toz yükü, tozun tane boyutu ve yapışma eğilimine göre belirlenir. Torba malzemesi gaz sıcaklığı, nem, kimyasal ortam ve aşınma koşullarına göre seçilir.",
        ],
        note: "Patlama riski taşıyan tozlarda, yüksek sıcaklıklı veya yoğuşma eğilimli gazlarda ilave güvenlik ve tasarım önlemleri gerekir; bu koşullar her filtrede varsayılmaz, projeye göre değerlendirilir.",
      },
      process: {
        title: "Jet Pulse Filtre Proses Akışı",
        intro:
          "Şema, tozlu havanın emilip filtre torbalarında tutulduğu, torbaların basınçlı hava darbeleriyle temizlendiği, toplanan tozun tahliye edildiği ve filtrelenmiş havanın fan üzerinden bacaya gittiği akışı gösterir.",
        note: "Filtre öncesinde yüksek toz yükü veya iri partikül varsa siklonla ön ayırma, torbaların yükünü ve aşınmasını azaltabilir.",
        mainLineLabel: "Hava hattı",
        productLine: [
          { title: "Tozlu hava emişi", text: "Fan, proses ekipmanından veya davlumbazdan tozlu havayı kanallarla filtreye çeker." },
          { title: "Torbalarda tutma", text: "Hava torba yüzeyinden geçerken toz torbanın dış yüzeyinde tutulur." },
          { title: "Temiz hava çıkışı", text: "Filtrelenmiş hava temiz hava odasından fana ve bacaya gider." },
          { title: "Basınç takibi", text: "Diferansiyel basınç izlenerek temizleme ve torba durumu takip edilir." },
        ],
        auxLineLabel: "Temizleme ve toz tahliyesi",
        auxLine: [
          { title: "Basınçlı hava darbesi", text: "Pulse valfleri torbalara kısa hava darbeleri vererek tozu silkeler." },
          { title: "Toz tahliyesi", text: "Bunkerde toplanan toz hava kilidi veya helezonla tahliye edilir ya da prosese döndürülür." },
        ],
        flow: {
          svgTitle: "Jet pulse filtre proses akış şeması",
          svgDesc: "Hava hattı: tozlu hava emişi, jet pulse filtre ve temiz hava çıkışı. Yardımcı hat: basınçlı hava ile temizleme ve toz tahliyesi.",
          mainLane: "HAVA HATTI",
          shape: "box",
          before: [{ title: "Tozlu hava", sub: "Proses / davlumbaz" }],
          drum: { title: "JET PULSE FİLTRE", sub: "torbalarda toz tutma" },
          after: [
            { title: "Fan", sub: "Emiş" },
            { title: "Baca", sub: "Filtrelenmiş hava" },
          ],
          aux: {
            lane: "TEMİZLEME VE TOZ TAHLİYESİ",
            tone: "air",
            inputs: [{ title: "Basınçlı hava", sub: "Pulse valfleri" }],
            outputs: [{ title: "Toz tahliyesi", sub: "Bunker / hava kilidi" }],
          },
        },
      },
      applications: {
        title: "Jet Pulse Filtre Uygulama Alanları",
        items: [
          {
            title: "Kum ve Mineral Kurutma",
            text: "Kurutma tamburu egzozundaki tozun tutulması. Gaz sıcaklığı ve nem, torba malzemesi seçiminde belirleyicidir; yoğuşmayı önleyecek önlemler ayrıca değerlendirilir.",
            imageAlt: "Açık renkli, ince taneli silis kumu",
            linkLabel: "Kurutma Tamburu",
          },
          {
            title: "Gübre Üretimi",
            text: "Granülasyon, kurutma, eleme ve transfer noktalarından emilen tozun toplanması. Higroskopik ve yapışkan tozlarda torba ve temizleme ayarı önem taşır.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Mineral İşleme ve Transfer",
            text: "Kırma, öğütme ve dökme malzeme transfer noktalarında oluşan tozun emilmesi. Aşındırıcı tozlarda giriş düzeni ve torba koruması dikkate alınır.",
            imageAlt: "Beyaz alçıtaşı parçası",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Jet Pulse Filtre Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA jet pulse filtreleri hava debisi, toz yükü ve tozun özelliklerine göre projelendirir. Filtre gövdesi, torba ve kafesler, temiz hava odası, pulse temizleme sistemi, bunker ve tahliye düzeni ile fan ve kanal bağlantıları birlikte tasarlanır.",
        highlights: ["Proses havasına göre filtre alanı", "Sıcaklık ve kimyasal ortama uygun torba", "Pulse valfli temizleme sistemi", "Üstten veya yandan torba değişim erişimi"],
        figureAlt: "Basınçlı hava tankı üzerinde sıralı pulse valfleri",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hava Debisi", text: "Emiş noktaları, toplam hava debisi ve kanal düzeni." },
          { title: "Toz Yükü ve Özellikleri", text: "Giriş toz yükü, tane boyutu, yoğunluk ve aşındırıcılık." },
          { title: "Filtre Alanı ve Eleman", text: "Filtre yüzey alanı, hava/kumaş oranı ve torba malzemesi." },
          { title: "Temizleme ve Basınç", text: "Pulse sistemi, basınçlı hava ihtiyacı ve diferansiyel basınç takibi." },
          { title: "Toz Tahliyesi", text: "Bunker, hava kilidi veya helezon ve bakım erişimi." },
        ],
        dataNote: "Filtre alanı, torba sayısı, fan ve basınçlı hava ihtiyacı proses verisine göre hesaplanır; sayfada verim, emisyon veya debi değeri verilmez.",
      },
      gallery: {
        title: "Jet Pulse Filtre Fotoğraf Galerisi",
        captions: [
          "Bina cephesine bağlı jet pulse torbalı filtre",
          "Mavi gövdeli torbalı filtre, fan ve kanal bağlantısı",
          "Temiz hava çıkış kanallarıyla büyük torbalı filtre",
          "Üst platformlu çok hücreli filtre gövdesi",
          "Platform ve merdivenli torbalı filtre",
          "Big-bag toz tahliyeli kompakt torbalı filtre",
          "Fan ve bacayla bağlı mavi torbalı filtre",
        ],
      },
      faq: {
        title: "Jet Pulse Filtre Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Jet pulse filtre nasıl çalışır?",
            answer:
              "Tozlu hava filtre torbalarından geçerken toz torba yüzeyinde tutulur. Biriken toz, basınçlı hava darbeleriyle silkelenir ve bunkerden tahliye edilir.",
          },
          {
            question: "Siklondan farkı nedir?",
            answer:
              "Siklon partikülleri dönen akışla ayırır ve ince tozlarda sınırlı kalabilir. Jet pulse filtre tozu filtre elemanında tuttuğu için ince tozlarda daha etkin bir son filtrasyon aşamasıdır.",
          },
          {
            question: "Filtre alanı nasıl belirlenir?",
            answer: "Hava debisi, giriş toz yükü, tozun özellikleri ve seçilen hava/kumaş oranına göre hesaplanır.",
          },
          {
            question: "Her tozda kullanılabilir mi?",
            answer:
              "Patlayıcı, yapışkan, yüksek sıcaklıklı veya kimyasal olarak agresif tozlarda ilave önlemler ya da farklı çözümler gerekebilir; uygunluk proses verisine göre değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Hava debisi, gaz sıcaklığı ve nemi, toz türü ve yükü, tane boyutu, emiş noktaları ve hedef çıkış koşulları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Jet pulse filtre için teknik teklif alın",
        text: "Hava debiniz, tozunuzun özellikleri ve proses koşullarınıza göre jet pulse filtreyi birlikte netleştirelim.",
        mailSubject: "Jet Pulse Filtre Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Hava debisi (m³/saat)", "Gaz sıcaklığı ve nemi", "Toz türü ve tane boyutu", "Giriş toz yükü", "Emiş noktaları", "Hedef çıkış koşulları"],
        inquiryLines: [
          "Merhaba, jet pulse filtre için teknik teklif almak istiyorum.",
          "",
          "Hava debisi (m³/saat):",
          "Gaz sıcaklığı / nem:",
          "Toz türü:",
          "Toz yükü:",
          "Emiş noktaları:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Pulse Jet Dust Collector Manufacturer | Pulse Jet Bag Filters",
        description:
          "Pulse jet bag filters for dust collection in drying, mineral and fertilizer processes. Filter area, bag media and cleaning system are selected for your process.",
      },
      breadcrumbLabel: "Pulse Jet Dust Collector",
      h1: "Pulse Jet Dust Collector – Bag Filtration with Compressed Air Cleaning",
      productCategory: "Pulse Jet Bag Filter",
      overview: {
        imageAlt: "Pulse jet bag filter installed on site with suction ducts and fan",
        tagline: "Pulse Jet Filter",
        keyFacts: [
          { label: "Separation principle", value: "Dust retained on the filter bag surface" },
          { label: "Cleaning", value: "Compressed air pulses (pulse jet)" },
          { label: "Control", value: "Differential pressure monitoring" },
          { label: "Dust discharge", value: "Hopper with rotary valve or screw" },
        ],
        title: "Cleaning Dusty Process Air on Filter Bags",
        paragraphs: [
          "In a pulse jet filter, dusty air drawn by the fan enters the filter housing and passes from the outside of the filter bags inwards. Dust is retained as a layer on the bag surface, while the cleaned air flows through the bag interior into the clean air plenum and on to the fan and stack.",
          "Dust accumulating on the bags is released by short compressed air pulses from pulse valves on the air header and falls into the hopper. Cleaning can be controlled by the filter's differential pressure or by time.",
          "Filter area and air-to-cloth ratio are defined by air flow, inlet dust load, particle size and stickiness. Bag media is selected for gas temperature, moisture, chemical environment and abrasion.",
        ],
        note: "Explosive dusts and hot or condensing gases require additional safety and design measures; these conditions are not assumed for every filter and are assessed per project.",
      },
      process: {
        title: "Pulse Jet Filter Process Flow",
        intro:
          "The diagram shows the flow in which dusty air is extracted and retained on the filter bags, the bags are cleaned by compressed air pulses, collected dust is discharged and the filtered air goes via the fan to the stack.",
        note: "Where the dust load is high or particles are coarse, cyclone pre-separation upstream can reduce bag load and wear.",
        mainLineLabel: "Air line",
        productLine: [
          { title: "Dusty air extraction", text: "The fan draws dusty air from process equipment or hoods through ducts to the filter." },
          { title: "Retention on bags", text: "As air passes the bags, dust is retained on their outer surface." },
          { title: "Clean air outlet", text: "Filtered air flows from the clean air plenum to the fan and stack." },
          { title: "Pressure monitoring", text: "Differential pressure is monitored to follow cleaning and bag condition." },
        ],
        auxLineLabel: "Cleaning and dust discharge",
        auxLine: [
          { title: "Compressed air pulse", text: "Pulse valves send short air pulses into the bags to release the dust." },
          { title: "Dust discharge", text: "Dust collected in the hopper is discharged by a rotary valve or screw, or returned to the process." },
        ],
        flow: {
          svgTitle: "Pulse jet filter process flow diagram",
          svgDesc: "Air line: dusty air extraction, pulse jet filter and clean air outlet. Auxiliary line: compressed air cleaning and dust discharge.",
          mainLane: "AIR LINE",
          shape: "box",
          before: [{ title: "Dusty air", sub: "Process / hood" }],
          drum: { title: "PULSE JET FILTER", sub: "dust retained on bags" },
          after: [
            { title: "Fan", sub: "Extraction" },
            { title: "Stack", sub: "Filtered air" },
          ],
          aux: {
            lane: "CLEANING AND DUST DISCHARGE",
            tone: "air",
            inputs: [{ title: "Compressed air", sub: "Pulse valves" }],
            outputs: [{ title: "Dust discharge", sub: "Hopper / rotary valve" }],
          },
        },
      },
      applications: {
        title: "Pulse Jet Filter Applications",
        items: [
          {
            title: "Sand and Mineral Drying",
            text: "Collecting dust from rotary dryer exhaust. Gas temperature and moisture determine the bag media; measures against condensation are assessed separately.",
            imageAlt: "Light-coloured fine silica sand",
            linkLabel: "Rotary Dryer",
          },
          {
            title: "Fertilizer Production",
            text: "Collecting dust extracted from granulation, drying, screening and transfer points. Bag selection and cleaning settings matter for hygroscopic and sticky dusts.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Mineral Processing and Transfer",
            text: "Extracting dust generated at crushing, grinding and bulk transfer points. For abrasive dusts, inlet design and bag protection are considered.",
            imageAlt: "A white piece of gypsum",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Pulse Jet Filter Design and Manufacturing",
        intro:
          "PRO MAKINA engineers pulse jet filters around air flow, dust load and dust properties. Filter housing, bags and cages, clean air plenum, pulse cleaning system, hopper and discharge, and fan and duct connections are designed together.",
        highlights: ["Filter area sized to the process air", "Bags suited to temperature and chemistry", "Pulse valve cleaning system", "Top or side bag change access"],
        figureAlt: "Row of pulse valves on a compressed air header",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Air Flow", text: "Extraction points, total air flow and duct layout." },
          { title: "Dust Load and Properties", text: "Inlet dust load, particle size, density and abrasiveness." },
          { title: "Filter Area and Element", text: "Filter surface area, air-to-cloth ratio and bag media." },
          { title: "Cleaning and Pressure", text: "Pulse system, compressed air demand and differential pressure monitoring." },
          { title: "Dust Discharge", text: "Hopper, rotary valve or screw and maintenance access." },
        ],
        dataNote: "Filter area, number of bags, fan and compressed air demand are calculated from process data; no efficiency, emission or flow values are stated on this page.",
      },
      gallery: {
        title: "Pulse Jet Filter Photo Gallery",
        captions: [
          "Pulse jet bag filter attached to a building facade",
          "Blue bag filter with fan and duct connection",
          "Large bag filter with clean air outlet ducts",
          "Multi-compartment filter housing with top platform",
          "Bag filter with platform and ladder",
          "Compact bag filter with big-bag dust discharge",
          "Blue bag filter connected to fan and stack",
        ],
      },
      faq: {
        title: "Pulse Jet Filter FAQ",
        items: [
          {
            question: "How does a pulse jet filter work?",
            answer: "As dusty air passes the filter bags, dust is retained on their surface. Accumulated dust is released by compressed air pulses and discharged from the hopper.",
          },
          {
            question: "How does it differ from a cyclone?",
            answer:
              "A cyclone separates particles with a rotating flow and can be limited for fine dust. A pulse jet filter retains dust on the filter media, making it a more effective final filtration stage for fine dust.",
          },
          {
            question: "How is the filter area determined?",
            answer: "It is calculated from air flow, inlet dust load, dust properties and the selected air-to-cloth ratio.",
          },
          {
            question: "Can it be used for every dust?",
            answer: "Explosive, sticky, hot or chemically aggressive dusts may need additional measures or different solutions; suitability is assessed from process data.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Air flow, gas temperature and moisture, dust type and load, particle size, extraction points and target outlet conditions.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a pulse jet filter",
        text: "Share your air flow, dust properties and process conditions, and we will define the pulse jet filter together with you.",
        mailSubject: "Pulse Jet Filter Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Air flow (m³/h)", "Gas temperature and moisture", "Dust type and particle size", "Inlet dust load", "Extraction points", "Target outlet conditions"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a pulse jet filter.",
          "",
          "Air flow (m³/h):",
          "Gas temperature / moisture:",
          "Dust type:",
          "Dust load:",
          "Extraction points:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Рукавный фильтр с импульсной продувкой | Производство",
        description:
          "Рукавные фильтры с импульсной продувкой для пылеулавливания в сушке, переработке минералов и производстве удобрений. Площадь, ткань и регенерация — под процесс.",
      },
      breadcrumbLabel: "Рукавный фильтр с импульсной продувкой",
      h1: "Рукавный фильтр с импульсной продувкой – улавливание пыли и регенерация сжатым воздухом",
      productCategory: "Рукавный фильтр",
      overview: {
        imageAlt: "Рукавный фильтр с импульсной продувкой на площадке с воздуховодами и вентилятором",
        tagline: "Импульсный рукавный фильтр",
        keyFacts: [
          { label: "Принцип", value: "Задержание пыли на поверхности рукавов" },
          { label: "Регенерация", value: "Импульсы сжатого воздуха (pulse jet)" },
          { label: "Контроль", value: "Контроль перепада давления" },
          { label: "Выгрузка пыли", value: "Бункер со шлюзовым затвором или шнеком" },
        ],
        title: "Очистка запылённого воздуха на фильтровальных рукавах",
        paragraphs: [
          "В импульсном рукавном фильтре запылённый воздух, подаваемый вентилятором, поступает в корпус и проходит через рукава снаружи внутрь. Пыль задерживается слоем на поверхности рукавов, очищенный воздух через внутреннюю полость рукавов попадает в камеру чистого воздуха и далее к вентилятору и дымовой трубе.",
          "Накопившаяся пыль сбрасывается с рукавов короткими импульсами сжатого воздуха от импульсных клапанов на коллекторе и падает в бункер. Регенерация управляется по перепаду давления или по времени.",
          "Площадь фильтрации и удельная газовая нагрузка определяются расходом воздуха, входной запылённостью, крупностью и липкостью пыли. Фильтровальная ткань выбирается по температуре, влажности, химической среде и абразивности.",
        ],
        note: "Для взрывоопасной пыли, горячих или конденсирующихся газов требуются дополнительные меры безопасности и конструктивные решения; они не предполагаются для каждого фильтра и оцениваются по проекту.",
      },
      process: {
        title: "Технологическая схема импульсного рукавного фильтра",
        intro:
          "Схема показывает поток: запылённый воздух отсасывается и очищается на рукавах, рукава регенерируются импульсами сжатого воздуха, уловленная пыль выгружается, очищенный воздух через вентилятор уходит в трубу.",
        note: "При высокой запылённости или крупных частицах предварительная очистка в циклоне снижает нагрузку на рукава и их износ.",
        mainLineLabel: "Линия воздуха",
        productLine: [
          { title: "Отсос запылённого воздуха", text: "Вентилятор отсасывает воздух от оборудования или зонтов по воздуховодам к фильтру." },
          { title: "Задержание на рукавах", text: "При прохождении воздуха пыль задерживается на наружной поверхности рукавов." },
          { title: "Выход чистого воздуха", text: "Очищенный воздух из камеры чистого воздуха идёт к вентилятору и трубе." },
          { title: "Контроль давления", text: "По перепаду давления отслеживаются регенерация и состояние рукавов." },
        ],
        auxLineLabel: "Регенерация и выгрузка пыли",
        auxLine: [
          { title: "Импульс сжатого воздуха", text: "Импульсные клапаны подают в рукава короткие импульсы, сбрасывая пыль." },
          { title: "Выгрузка пыли", text: "Пыль из бункера выгружается шлюзовым затвором или шнеком либо возвращается в процесс." },
        ],
        flow: {
          svgTitle: "Технологическая схема импульсного рукавного фильтра",
          svgDesc: "Линия воздуха: отсос запылённого воздуха, рукавный фильтр и выход очищенного воздуха. Вспомогательная линия: регенерация сжатым воздухом и выгрузка пыли.",
          mainLane: "ЛИНИЯ ВОЗДУХА",
          shape: "box",
          before: [{ title: "Запылённый воздух", sub: "Процесс / зонт" }],
          drum: { title: "РУКАВНЫЙ ФИЛЬТР", sub: "задержание пыли на рукавах" },
          after: [
            { title: "Вентилятор", sub: "Отсос" },
            { title: "Труба", sub: "Очищенный воздух" },
          ],
          aux: {
            lane: "РЕГЕНЕРАЦИЯ И ВЫГРУЗКА ПЫЛИ",
            tone: "air",
            inputs: [{ title: "Сжатый воздух", sub: "Импульсные клапаны" }],
            outputs: [{ title: "Выгрузка пыли", sub: "Бункер / шлюз" }],
          },
        },
      },
      applications: {
        title: "Области применения импульсных рукавных фильтров",
        items: [
          {
            title: "Сушка песка и минералов",
            text: "Улавливание пыли из отходящих газов сушильного барабана. Температура и влажность газа определяют выбор ткани; меры против конденсации рассматриваются отдельно.",
            imageAlt: "Светлый мелкозернистый кварцевый песок",
            linkLabel: "Сушильный барабан",
          },
          {
            title: "Производство удобрений",
            text: "Улавливание пыли от узлов грануляции, сушки, грохочения и перегрузки. Для гигроскопичной и липкой пыли важны выбор рукавов и настройка регенерации.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Переработка и перегрузка минералов",
            text: "Аспирация пыли в узлах дробления, измельчения и перегрузки сыпучих материалов. Для абразивной пыли учитываются конструкция входа и защита рукавов.",
            imageAlt: "Белый кусок гипса",
            linkLabel: "Горнодобывающая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление импульсных рукавных фильтров",
        intro:
          "PRO MAKINA проектирует импульсные рукавные фильтры исходя из расхода воздуха, запылённости и свойств пыли. Корпус, рукава и каркасы, камера чистого воздуха, система импульсной регенерации, бункер и выгрузка, подключение вентилятора и воздуховодов разрабатываются совместно.",
        highlights: ["Площадь фильтрации под расход воздуха", "Рукава под температуру и химическую среду", "Система импульсных клапанов", "Замена рукавов сверху или сбоку"],
        figureAlt: "Ряд импульсных клапанов на коллекторе сжатого воздуха",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Расход воздуха", text: "Точки отсоса, общий расход и схема воздуховодов." },
          { title: "Запылённость и свойства пыли", text: "Входная запылённость, крупность, плотность и абразивность." },
          { title: "Площадь и фильтроэлемент", text: "Площадь фильтрации, удельная нагрузка и ткань рукавов." },
          { title: "Регенерация и давление", text: "Импульсная система, потребность в сжатом воздухе и контроль перепада." },
          { title: "Выгрузка пыли", text: "Бункер, шлюзовой затвор или шнек и доступ для обслуживания." },
        ],
        dataNote: "Площадь фильтрации, число рукавов, вентилятор и потребность в сжатом воздухе рассчитываются по данным процесса; значения эффективности, выбросов и расхода не приводятся.",
      },
      gallery: {
        title: "Фотогалерея рукавных фильтров",
        captions: [
          "Рукавный фильтр у фасада здания",
          "Синий рукавный фильтр с вентилятором и воздуховодом",
          "Крупный рукавный фильтр с воздуховодами чистого воздуха",
          "Многосекционный корпус фильтра с верхней площадкой",
          "Рукавный фильтр с площадкой и лестницей",
          "Компактный рукавный фильтр с выгрузкой в биг-бэг",
          "Синий рукавный фильтр с вентилятором и трубой",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы об импульсных рукавных фильтрах",
        items: [
          {
            question: "Как работает импульсный рукавный фильтр?",
            answer: "При прохождении воздуха через рукава пыль задерживается на их поверхности; накопившаяся пыль сбрасывается импульсами сжатого воздуха и выгружается из бункера.",
          },
          {
            question: "Чем он отличается от циклона?",
            answer:
              "Циклон разделяет частицы вращающимся потоком и ограниченно эффективен для мелкой пыли. Рукавный фильтр задерживает пыль на фильтрующем материале и служит более эффективной конечной ступенью для мелкой пыли.",
          },
          {
            question: "Как определяется площадь фильтрации?",
            answer: "Рассчитывается по расходу воздуха, входной запылённости, свойствам пыли и выбранной удельной газовой нагрузке.",
          },
          {
            question: "Подходит ли фильтр для любой пыли?",
            answer: "Для взрывоопасной, липкой, горячей или химически агрессивной пыли могут потребоваться дополнительные меры или иные решения; пригодность оценивается по данным процесса.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Расход воздуха, температура и влажность газа, вид и концентрация пыли, крупность, точки отсоса и требуемые условия на выходе.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на рукавный фильтр",
        text: "Сообщите расход воздуха, свойства пыли и условия процесса — вместе определим рукавный фильтр.",
        mailSubject: "Запрос предложения: рукавный фильтр",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Расход воздуха (м³/ч)", "Температура и влажность газа", "Вид пыли и крупность", "Входная запылённость", "Точки отсоса", "Требуемые условия на выходе"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на рукавный фильтр с импульсной продувкой.",
          "",
          "Расход воздуха (м³/ч):",
          "Температура / влажность газа:",
          "Вид пыли:",
          "Запылённость:",
          "Точки отсоса:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "مرشح الأكياس النبضي | تصنيع مجمعات الغبار النبضية",
        description:
          "مرشحات أكياس نبضية لتجميع الغبار في عمليات التجفيف والمعادن والأسمدة. تُختار مساحة الترشيح ونوع الأكياس ونظام التنظيف وفق العملية.",
      },
      breadcrumbLabel: "مرشح الأكياس النبضي",
      h1: "مرشح الأكياس النبضي – ترشيح الغبار وتنظيف الأكياس بالهواء المضغوط",
      productCategory: "مرشح أكياس نبضي",
      overview: {
        imageAlt: "مرشح أكياس نبضي مركّب في الموقع مع مجاري الشفط والمروحة",
        tagline: "مرشح نبضي",
        keyFacts: [
          { label: "مبدأ الفصل", value: "حجز الغبار على سطح أكياس الترشيح" },
          { label: "التنظيف", value: "نبضات هواء مضغوط" },
          { label: "التحكم", value: "مراقبة فرق الضغط" },
          { label: "تفريغ الغبار", value: "قادوس مع صمام دوّار أو ناقل لولبي" },
        ],
        title: "تنقية هواء العملية المحمّل بالغبار على أكياس الترشيح",
        paragraphs: [
          "في المرشح النبضي يدخل الهواء المحمّل بالغبار الذي تسحبه المروحة إلى جسم المرشح ويمر من السطح الخارجي لأكياس الترشيح إلى داخلها، فيُحجز الغبار كطبقة على سطح الكيس ويتدفق الهواء النظيف من داخل الأكياس إلى حجرة الهواء النظيف ثم إلى المروحة والمدخنة.",
          "يُزال الغبار المتراكم على الأكياس بنبضات قصيرة من الهواء المضغوط تطلقها صمامات نبضية على خزان الهواء، فيسقط في القادوس، ويمكن التحكم في التنظيف وفق فرق الضغط أو وفق الزمن.",
          "تُحدَّد مساحة الترشيح ونسبة الهواء إلى القماش وفق تدفق الهواء وحمل الغبار الداخل وحجم الحبيبات وقابليتها للالتصاق، ويُختار قماش الأكياس وفق درجة حرارة الغاز والرطوبة والوسط الكيميائي والتآكل.",
        ],
        note: "تتطلب الغبارات القابلة للانفجار والغازات الساخنة أو القابلة للتكثف إجراءات سلامة وتصميم إضافية، ولا تُفترض هذه الظروف لكل مرشح بل تُقيَّم لكل مشروع.",
      },
      process: {
        title: "تدفق العملية في المرشح النبضي",
        intro:
          "يوضح المخطط التدفق الذي يُشفط فيه الهواء المحمّل بالغبار ويُحجز على الأكياس، ثم تُنظَّف الأكياس بنبضات الهواء المضغوط ويُفرَّغ الغبار المجمّع ويخرج الهواء المرشح عبر المروحة إلى المدخنة.",
        note: "عند ارتفاع حمل الغبار أو وجود جسيمات خشنة يمكن أن يقلل الفصل المسبق بالسيكلون الحمل على الأكياس وتآكلها.",
        mainLineLabel: "خط الهواء",
        productLine: [
          { title: "شفط الهواء المحمّل بالغبار", text: "تسحب المروحة الهواء من معدات العملية أو الأغطية عبر المجاري إلى المرشح." },
          { title: "الحجز على الأكياس", text: "أثناء مرور الهواء يُحجز الغبار على السطح الخارجي للأكياس." },
          { title: "خروج الهواء النظيف", text: "يتدفق الهواء المرشح من حجرة الهواء النظيف إلى المروحة والمدخنة." },
          { title: "مراقبة الضغط", text: "يُراقَب فرق الضغط لمتابعة التنظيف وحالة الأكياس." },
        ],
        auxLineLabel: "التنظيف وتفريغ الغبار",
        auxLine: [
          { title: "نبضة هواء مضغوط", text: "ترسل الصمامات النبضية نبضات قصيرة إلى الأكياس لإزالة الغبار." },
          { title: "تفريغ الغبار", text: "يُفرَّغ الغبار المجمّع في القادوس بصمام دوّار أو ناقل لولبي أو يُعاد إلى العملية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في المرشح النبضي",
          svgDesc: "خط الهواء: شفط الهواء المحمّل بالغبار، المرشح النبضي، خروج الهواء النظيف. الخط المساعد: التنظيف بالهواء المضغوط وتفريغ الغبار.",
          mainLane: "خط الهواء",
          shape: "box",
          before: [{ title: "هواء مغبّر", sub: "العملية / غطاء" }],
          drum: { title: "مرشح نبضي", sub: "حجز الغبار على الأكياس" },
          after: [
            { title: "المروحة", sub: "الشفط" },
            { title: "المدخنة", sub: "هواء مرشح" },
          ],
          aux: {
            lane: "التنظيف وتفريغ الغبار",
            tone: "air",
            inputs: [{ title: "هواء مضغوط", sub: "صمامات نبضية" }],
            outputs: [{ title: "تفريغ الغبار", sub: "قادوس / صمام دوّار" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام المرشح النبضي",
        items: [
          {
            title: "تجفيف الرمل والمعادن",
            text: "حجز الغبار من عادم أسطوانة التجفيف، إذ تحدد درجة حرارة الغاز ورطوبته اختيار قماش الأكياس، وتُقيَّم إجراءات منع التكثف بشكل منفصل.",
            imageAlt: "رمل سيليكا ناعم فاتح اللون",
            linkLabel: "أسطوانة التجفيف",
          },
          {
            title: "إنتاج الأسمدة",
            text: "تجميع الغبار المشفوط من نقاط التحبيب والتجفيف والغربلة والنقل، مع أهمية اختيار الأكياس وضبط التنظيف للغبارات الماصة للرطوبة واللزجة.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "معالجة المعادن ونقلها",
            text: "شفط الغبار الناتج في نقاط التكسير والطحن ونقل المواد السائبة، مع مراعاة تصميم المدخل وحماية الأكياس للغبارات الكاشطة.",
            imageAlt: "قطعة جبس بيضاء",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع مرشحات نبضية مخصصة",
        intro:
          "تصمم PRO MAKINA المرشحات النبضية وفق تدفق الهواء وحمل الغبار وخصائصه، مع تصميم جسم المرشح والأكياس والأقفاص وحجرة الهواء النظيف ونظام التنظيف النبضي والقادوس والتفريغ وتوصيلات المروحة والمجاري معًا.",
        highlights: ["مساحة ترشيح وفق هواء العملية", "أكياس مناسبة للحرارة والوسط الكيميائي", "نظام تنظيف بصمامات نبضية", "وصول لتغيير الأكياس من الأعلى أو الجانب"],
        figureAlt: "صف من الصمامات النبضية على خزان الهواء المضغوط",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "تدفق الهواء", text: "نقاط الشفط وإجمالي تدفق الهواء وترتيب المجاري." },
          { title: "حمل الغبار وخصائصه", text: "حمل الغبار الداخل وحجم الحبيبات والكثافة والكشط." },
          { title: "مساحة الترشيح والعنصر", text: "مساحة الترشيح ونسبة الهواء إلى القماش ونوع قماش الأكياس." },
          { title: "التنظيف والضغط", text: "النظام النبضي والحاجة إلى الهواء المضغوط ومراقبة فرق الضغط." },
          { title: "تفريغ الغبار", text: "القادوس والصمام الدوّار أو الناقل اللولبي وسهولة الصيانة." },
        ],
        dataNote: "تُحسب مساحة الترشيح وعدد الأكياس والمروحة والحاجة إلى الهواء المضغوط من بيانات العملية، ولا تُذكر قيم للكفاءة أو الانبعاثات أو التدفق في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور المرشحات النبضية",
        captions: [
          "مرشح أكياس نبضي ملاصق لواجهة مبنى",
          "مرشح أكياس أزرق مع مروحة ومجرى هواء",
          "مرشح أكياس كبير مع مجاري خروج الهواء النظيف",
          "جسم مرشح متعدد الحجرات بمنصة علوية",
          "مرشح أكياس بمنصة وسلم",
          "مرشح أكياس مدمج بتفريغ الغبار في أكياس كبيرة",
          "مرشح أكياس أزرق متصل بمروحة ومدخنة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول المرشح النبضي",
        items: [
          {
            question: "كيف يعمل المرشح النبضي؟",
            answer: "أثناء مرور الهواء المغبّر عبر الأكياس يُحجز الغبار على سطحها، ثم يُزال الغبار المتراكم بنبضات هواء مضغوط ويُفرَّغ من القادوس.",
          },
          {
            question: "ما الفرق بينه وبين السيكلون؟",
            answer:
              "يفصل السيكلون الجسيمات بتدفق دوّار وقد تكون فعاليته محدودة للغبار الناعم، بينما يحجز المرشح النبضي الغبار على وسط الترشيح فيكون مرحلة ترشيح نهائية أكثر فعالية للغبار الناعم.",
          },
          {
            question: "كيف تُحدَّد مساحة الترشيح؟",
            answer: "تُحسب من تدفق الهواء وحمل الغبار الداخل وخصائص الغبار ونسبة الهواء إلى القماش المختارة.",
          },
          {
            question: "هل يصلح لكل أنواع الغبار؟",
            answer: "قد تتطلب الغبارات القابلة للانفجار أو اللزجة أو الساخنة أو العدوانية كيميائيًا إجراءات إضافية أو حلولًا مختلفة، وتُقيَّم الملاءمة من بيانات العملية.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "تدفق الهواء ودرجة حرارة الغاز ورطوبته ونوع الغبار وحمله وحجم الحبيبات ونقاط الشفط وظروف الخروج المستهدفة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لمرشح نبضي",
        text: "شاركنا تدفق الهواء وخصائص الغبار وظروف العملية، لنحدد معًا المرشح النبضي المناسب.",
        mailSubject: "طلب عرض سعر: مرشح أكياس نبضي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["تدفق الهواء (م³/ساعة)", "درجة حرارة الغاز ورطوبته", "نوع الغبار وحجم حبيباته", "حمل الغبار الداخل", "نقاط الشفط", "ظروف الخروج المستهدفة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمرشح أكياس نبضي.",
          "",
          "تدفق الهواء (م³/ساعة):",
          "درجة حرارة الغاز / الرطوبة:",
          "نوع الغبار:",
          "حمل الغبار:",
          "نقاط الشفط:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
