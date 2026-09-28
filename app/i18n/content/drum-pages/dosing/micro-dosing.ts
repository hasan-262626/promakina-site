import type { DrumPageConfig } from "../types";

// Mikro dozajlama: mevcut tanım "dozajlama helezonları aracılığıyla ürünler dozaj kantarına yönlendirilir; frekans invertörlü hızlı-yavaş
// dozaj; esnek bağlantılı kantar (loadcell); reçeteye bağlı sıralı tartım; ağırlık esaslı". Görseller (mikro1–3) katkı bunkerleri altında
// motorlu dozaj helezonlarının ortak tartım haznesine beslediği yapıyı gösterir. İçerik bu gravimetrik batch (kümülatif) tartım prensibine
// göre hazırlanmıştır. Vibro besleyici, kayıp ağırlık (loss-in-weight) veya volumetrik çalışma doğrulanmadığı için yazılmaz.
// Gram/yüzde hassasiyet, kg/saat veya kg/batch değeri verilmez. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/dozaj mikro/${file}`;

export const microDosingPage: DrumPageConfig = {
  key: "microDosing",
  group: "dosingSystems",
  trSlug: "mikro-dozajlama",
  mainImage: img("mikro3.jpg"),
  applications: [
    { image: "/images/tambur-uygulamalari/harman-gubre.webp", link: "fertilizerPlants" },
    { image: "/images/tank-uygulamalari/kimya-proses-tesisi.webp", link: "chemicalProcess" },
    { image: "/images/tasima-uygulamalari/soya-kuspesi.webp", link: "macroDosing" },
  ],
  figure: img("mikro1.jpg"),
  gallery: [img("mikro2.jpg")],
  sectors: ["fertilizerPlants", "chemicalProcess"],
  resources: ["macroDosing", "screwConveyor", "bunkersHoppers", "dosingSystems"],
  machines: ["conveying", "storageSystems", "drumSystems"],
  texts: {
    tr: {
      meta: {
        title: "Mikro Dozajlama Sistemi | Helezonlu Gravimetrik Mikro Dozaj | PRO MAKİNA",
        description:
          "Düşük oranlı katkı ve mikro bileşenleri helezonla load-cell'li kantara besleyip reçeteye göre sırayla tartan mikro dozajlama sistemi. PLC reçete kontrolü.",
      },
      breadcrumbLabel: "Mikro Dozajlama",
      h1: "Mikro Dozajlama – Düşük Oranlı Reçete Bileşenlerinin Tartımlı Dozajı",
      productCategory: "Mikro Dozajlama Sistemi",
      overview: {
        imageAlt: "Katkı bunkerleri altında motorlu dozaj helezonları ve ortak tartım haznesi olan mikro dozajlama istasyonu",
        tagline: "Mikro Dozajlama",
        keyFacts: [
          { label: "Görev", value: "Düşük oranlı bileşenlerin tartımlı dozajı" },
          { label: "Besleme", value: "Her bunker altında dozaj helezonu" },
          { label: "Tartım", value: "Load-cell'li ortak tartım haznesi" },
          { label: "Kontrol", value: "Reçeteye göre sıralı tartım, PLC/HMI" },
        ],
        title: "Reçetede Az Kullanılan Bileşenler İçin Ayrı Tartım",
        paragraphs: [
          "Mikro dozajlama, reçetede düşük oranda kullanılan katkı, mikro element ve premiks bileşenlerinin ağırlık esaslı olarak tartılıp prosese verilmesini sağlar. Bu bileşenler ana hammaddelerin kantarında tartılırsa küçük miktarlar kantarın ölçüm aralığında kaybolur; bu nedenle ayrı ve daha küçük bir tartım sistemi kullanılır.",
          "Her bileşen kendi bunkerinde bekler. Reçetedeki sıraya göre ilgili bunkerin altındaki dozaj helezonu çalışır ve ürünü load-cell'li ortak tartım haznesine verir. Hedefe yaklaşırken frekans invertörü helezon devrini düşürür; kaba beslemeden ince beslemeye geçilerek hedef miktara yaklaşılır.",
          "Tüm bileşenler sırayla tartıldıktan sonra hazne boşaltılır ve karışım miksere veya reçete hattına aktarılır. Reçete, tartım sonuçları ve sıralama PLC/HMI üzerinden yönetilir.",
        ],
        note: "Ulaşılabilen tartım doğruluğu ürünün akışına, hedef miktara, kantar ölçüm aralığına ve helezon seçimine bağlıdır. Her mikro dozaj sistemi aynı hassasiyette çalışmaz; değer projeye göre belirlenir.",
      },
      process: {
        title: "Mikro Dozajlama Proses Akışı",
        intro:
          "Şema, mikro hammaddelerin bunkerlerden helezonlarla tartım haznesine beslendiği, reçeteye göre sırayla tartıldığı ve hedef miktarlar tamamlanınca miksere aktarıldığı akışı gösterir. Mikser ve sonraki hat ayrı ekipmanlardır.",
        note: "Köprüleşme eğilimli toz katkılarda bunker geometrisi ve akış yardımcıları, helezon beslemesinin kararlılığı için tasarımda değerlendirilir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Mikro bunkerler", text: "Her katkı ve mikro bileşen kendi bunkerinde bekler." },
          { title: "Helezonla besleme", text: "Reçete sırasındaki bileşenin dozaj helezonu çalışır; ürün tartım haznesine akar." },
          { title: "Kaba ve ince besleme", text: "Hedefe yaklaşırken invertör helezon devrini düşürür." },
          { title: "Miksere aktarım", text: "Tüm bileşenler tartılınca hazne miksere veya reçete hattına boşaltılır." },
        ],
        auxLineLabel: "Reçete kontrolü",
        auxLine: [
          { title: "Reçete seçimi", text: "PLC/HMI bileşenleri, hedef miktarları ve sırayı belirler." },
          { title: "Tartım kaydı", text: "Her bileşenin tartılan miktarı kaydedilir ve reçeteyle karşılaştırılır." },
        ],
        flow: {
          svgTitle: "Mikro dozajlama proses akış şeması",
          svgDesc: "Ürün hattı: mikro hammadde bunkerleri, dozaj helezonları ve load-cell'li tartım haznesi, mikser veya reçete hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Mikro bunkerler", sub: "Katkı ve mikro bileşenler" }],
          drum: { title: "MİKRO DOZAJLAMA", sub: "helezonla besleme, kantarda tartım" },
          after: [
            { title: "Tartım haznesi", sub: "Hedef miktar tamamlanır" },
            { title: "Mikser / hat", sub: "Reçeteye aktarım" },
          ],
        },
      },
      applications: {
        title: "Mikro Dozajlama Uygulama Alanları",
        items: [
          {
            title: "Gübrede Mikro Element Katkıları",
            text: "Gübre reçetelerinde düşük oranda kullanılan mikro element ve katkıların ayrı tartılarak karışıma verilmesi.",
            imageAlt: "Farklı renklerde harman gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Kimyasal Katkı ve Pigmentler",
            text: "Kimya proseslerinde katalizör, pigment ve benzeri toz katkıların reçeteye göre tartılması. Toz emiş bağlantısı ürüne göre değerlendirilir.",
            imageAlt: "Kimya proses tesisi",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Yem Premiks ve Vitamin Katkıları",
            text: "Yem üretiminde premiks, vitamin ve mineral katkıların ana reçeteden ayrı tartılması. Daha yüksek miktarlı mineraller makro dozajla beslenir.",
            imageAlt: "Soya küspesi yem hammaddesi",
            linkLabel: "Makro Dozajlama",
          },
        ],
      },
      design: {
        title: "Projeye Özel Mikro Dozajlama Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA mikro dozajlama sistemlerini bileşen sayısı, her bileşenin reçetedeki miktarı, ürün akış özellikleri ve batch süresine göre projelendirir. Bunker geometrisi, helezon ölçüsü, tartım haznesi ve load-cell ölçüm aralığı birlikte seçilir.",
        highlights: ["Bunker başına dozaj helezonu", "İnvertörlü kaba ve ince besleme", "Esnek bağlantılı load-cell kantar", "PLC/HMI reçete yönetimi"],
        figureAlt: "Katkı bunkerleri altında dozaj helezonları ve tartım haznesine bağlantılar",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Bileşenler", text: "Bileşen sayısı, ürün türü, tane boyutu, yığın yoğunluğu ve nem." },
          { title: "Doz Miktarı", text: "Her bileşenin batch başına hedef miktarı ve reçete aralığı." },
          { title: "Akış Davranışı", text: "Akışkanlık, köprüleşme ve yapışma eğilimi, bunker geometrisi." },
          { title: "Besleme ve Tartım", text: "Helezon ölçüsü, kantar ölçüm aralığı ve kaba-ince geçiş." },
          { title: "Kontrol ve Bağlantı", text: "PLC/HMI, reçete sayısı, toz emişi ve mikser bağlantısı." },
        ],
        dataNote: "Tartım doğruluğu, batch miktarı ve süre bileşen ve reçete verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Mikro Dozajlama Fotoğraf Galerisi",
        captions: ["Bunker altında motorlu dozaj helezonları ve tartım bölümü"],
      },
      faq: {
        title: "Mikro Dozajlama Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Mikro dozajlama nedir?",
            answer: "Reçetede düşük oranda kullanılan katkı, mikro element ve premiks bileşenlerinin ayrı bir kantarda ağırlık esaslı tartılıp prosese verilmesidir.",
          },
          {
            question: "Mikro dozaj sistemi nasıl çalışır?",
            answer: "Her bunker altındaki dozaj helezonu reçete sırasına göre çalışır ve ürünü load-cell'li tartım haznesine verir. Hedefe yaklaşırken invertör helezon devrini düşürür; tüm bileşenler tartılınca hazne boşaltılır.",
          },
          {
            question: "Makro dozajlamadan farkı nedir?",
            answer: "Mikro dozajlama düşük miktarlı bileşenler için daha küçük ölçüm aralıklı bir kantar ve helezon beslemesi kullanır. Makro dozajlama daha yüksek miktarlı hammaddeleri daha büyük bunker ve kantarla tartar.",
          },
          {
            question: "Tartım hassasiyeti nedir?",
            answer: "Hassasiyet ürünün akışına, hedef miktara, kantar ölçüm aralığına ve helezon seçimine bağlıdır. Projeye göre belirlenir; genel bir değer verilmez.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Bileşen listesi ve ürün özellikleri, her bileşenin batch başına miktarı, batch sayısı, reçete sayısı ve bağlanacak mikser bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Mikro dozajlama için teknik teklif alın",
        text: "Bileşen listeniz, reçete miktarlarınız ve batch süresine göre mikro dozajlama sistemini birlikte netleştirelim.",
        mailSubject: "Mikro Dozajlama Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Bileşen listesi ve ürün özellikleri", "Bileşen başına batch miktarı", "Batch sayısı ve süresi", "Reçete sayısı", "Bağlanacak mikser veya hat", "Otomasyon ve toz emişi ihtiyacı"],
        inquiryLines: [
          "Merhaba, mikro dozajlama sistemi için teknik teklif almak istiyorum.",
          "",
          "Bileşen sayısı:",
          "Bileşen başına miktar (kg/batch):",
          "Batch sayısı (saatte):",
          "Reçete sayısı:",
          "Mikser bilgisi:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Micro Dosing System | Screw-Fed Gravimetric Micro Dosing",
        description:
          "Micro dosing system that feeds low-ratio additives by screw into a load-cell weigh hopper and weighs them in recipe sequence. PLC recipe control.",
      },
      breadcrumbLabel: "Micro Dosing",
      h1: "Micro Dosing – Weighed Dosing of Low-Ratio Recipe Components",
      productCategory: "Micro Dosing System",
      overview: {
        imageAlt: "Micro dosing station with motorised dosing screws below additive bins and a common weigh hopper",
        tagline: "Micro Dosing",
        keyFacts: [
          { label: "Duty", value: "Weighed dosing of low-ratio components" },
          { label: "Feeding", value: "Dosing screw below each bin" },
          { label: "Weighing", value: "Common weigh hopper on load cells" },
          { label: "Control", value: "Sequential weighing by recipe, PLC/HMI" },
        ],
        title: "Separate Weighing for Components Used in Small Amounts",
        paragraphs: [
          "Micro dosing weighs additives, micro elements and premix components used at low ratios in a recipe and delivers them to the process on a weight basis. If these components were weighed on the main ingredient scale, small amounts would be lost in the scale's measuring range; a separate, smaller weighing system is therefore used.",
          "Each component is held in its own bin. Following the recipe sequence, the dosing screw below the relevant bin runs and feeds the product into the common weigh hopper on load cells. As the target approaches, a frequency inverter reduces the screw speed; switching from coarse to fine feeding brings the weight close to the target.",
          "After all components have been weighed in sequence, the hopper is discharged and the batch is transferred to the mixer or recipe line. Recipes, weighing results and sequence are managed through the PLC/HMI.",
        ],
        note: "The achievable weighing accuracy depends on product flow, target amount, scale range and screw selection. Not every micro dosing system works to the same accuracy; the value is defined per project.",
      },
      process: {
        title: "Micro Dosing Process Flow",
        intro:
          "The diagram shows micro ingredients fed by screws from the bins into the weigh hopper, weighed in recipe sequence and transferred to the mixer when the targets are complete. The mixer and downstream line are separate equipment.",
        note: "For powder additives prone to bridging, bin geometry and flow aids are assessed in the design for stable screw feeding.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Micro bins", text: "Each additive and micro component is held in its own bin." },
          { title: "Screw feeding", text: "The dosing screw of the component in sequence runs; product flows into the weigh hopper." },
          { title: "Coarse and fine feed", text: "As the target approaches, the inverter reduces the screw speed." },
          { title: "Transfer to mixer", text: "When all components are weighed, the hopper discharges to the mixer or recipe line." },
        ],
        auxLineLabel: "Recipe control",
        auxLine: [
          { title: "Recipe selection", text: "The PLC/HMI defines components, target amounts and sequence." },
          { title: "Weighing record", text: "The weighed amount of each component is recorded and compared with the recipe." },
        ],
        flow: {
          svgTitle: "Micro dosing process flow diagram",
          svgDesc: "Product line: micro ingredient bins, dosing screws and load-cell weigh hopper, mixer or recipe line.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Micro bins", sub: "Additives and micro components" }],
          drum: { title: "MICRO DOSING", sub: "screw feeding, weighing on the scale" },
          after: [
            { title: "Weigh hopper", sub: "Target amounts completed" },
            { title: "Mixer / line", sub: "Transfer to recipe" },
          ],
        },
      },
      applications: {
        title: "Micro Dosing Applications",
        items: [
          {
            title: "Micro Element Additives in Fertilizer",
            text: "Weighing micro elements and additives used at low ratios in fertilizer recipes separately before adding them to the blend.",
            imageAlt: "Blended fertilizer granules in different colours",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Chemical Additives and Pigments",
            text: "Weighing catalysts, pigments and similar powder additives by recipe in chemical processes. Dust extraction is assessed for the product.",
            imageAlt: "Chemical process plant",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Feed Premix and Vitamin Additives",
            text: "Weighing premix, vitamin and mineral additives separately from the main feed recipe. Minerals used in larger amounts are fed by macro dosing.",
            imageAlt: "Soybean meal feed ingredient",
            linkLabel: "Macro Dosing",
          },
        ],
      },
      design: {
        title: "Custom Micro Dosing Design and Manufacturing",
        intro:
          "PRO MAKINA engineers micro dosing systems around the number of components, the amount of each component in the recipe, product flow properties and batch time. Bin geometry, screw size, weigh hopper and load-cell range are selected together.",
        highlights: ["Dosing screw per bin", "Inverter-controlled coarse and fine feed", "Load-cell scale with flexible connections", "PLC/HMI recipe management"],
        figureAlt: "Dosing screws below additive bins and connections to the weigh hopper",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Components", text: "Number of components, product type, particle size, bulk density and moisture." },
          { title: "Dose Amount", text: "Target amount of each component per batch and recipe range." },
          { title: "Flow Behaviour", text: "Flowability, bridging and sticking tendency, bin geometry." },
          { title: "Feeding and Weighing", text: "Screw size, scale range and coarse-to-fine changeover." },
          { title: "Control and Connection", text: "PLC/HMI, number of recipes, dust extraction and mixer connection." },
        ],
        dataNote: "Weighing accuracy, batch amount and time are defined from component and recipe data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Micro Dosing Photo Gallery",
        captions: ["Motorised dosing screws below bins and the weighing section"],
      },
      faq: {
        title: "Micro Dosing FAQ",
        items: [
          {
            question: "What is micro dosing?",
            answer: "Weighing additives, micro elements and premix components used at low ratios in a recipe on a separate scale and delivering them to the process on a weight basis.",
          },
          {
            question: "How does a micro dosing system work?",
            answer: "The dosing screw below each bin runs in recipe sequence and feeds the product into the load-cell weigh hopper. Near the target the inverter reduces screw speed; when all components are weighed, the hopper discharges.",
          },
          {
            question: "How does it differ from macro dosing?",
            answer: "Micro dosing uses a smaller-range scale and screw feeding for low-quantity components. Macro dosing weighs higher-quantity ingredients with larger bins and scales.",
          },
          {
            question: "What is the weighing accuracy?",
            answer: "Accuracy depends on product flow, target amount, scale range and screw selection. It is defined per project; no generic value is stated.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Component list and product properties, amount of each component per batch, number of batches, number of recipes and details of the mixer to be fed.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for micro dosing",
        text: "Share your component list, recipe amounts and batch time, and we will define the micro dosing system together with you.",
        mailSubject: "Micro Dosing Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Component list and product properties", "Batch amount per component", "Number of batches and batch time", "Number of recipes", "Mixer or line to be fed", "Automation and dust extraction requirements"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a micro dosing system.",
          "",
          "Number of components:",
          "Amount per component (kg/batch):",
          "Batches per hour:",
          "Number of recipes:",
          "Mixer details:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Система микродозирования – шнековое весовое микродозирование",
        description:
          "Система микродозирования подаёт малые компоненты шнеками в весовой бункер на тензодатчиках и взвешивает их по рецепту поочерёдно. Управление рецептами PLC.",
      },
      breadcrumbLabel: "Микродозирование",
      h1: "Микродозирование – весовое дозирование компонентов с малой долей в рецепте",
      productCategory: "Система микродозирования",
      overview: {
        imageAlt: "Станция микродозирования с приводными дозирующими шнеками под бункерами добавок и общим весовым бункером",
        tagline: "Микродозирование",
        keyFacts: [
          { label: "Назначение", value: "Весовое дозирование малых компонентов" },
          { label: "Подача", value: "Дозирующий шнек под каждым бункером" },
          { label: "Взвешивание", value: "Общий весовой бункер на тензодатчиках" },
          { label: "Управление", value: "Поочерёдное взвешивание по рецепту, PLC/HMI" },
        ],
        title: "Отдельное взвешивание компонентов, используемых в малых количествах",
        paragraphs: [
          "Микродозирование обеспечивает весовое дозирование добавок, микроэлементов и компонентов премикса, которые входят в рецепт в малой доле. Если взвешивать их на весах основных компонентов, малые количества теряются в диапазоне измерения весов, поэтому применяется отдельная, более мелкая весовая система.",
          "Каждый компонент хранится в своём бункере. По очерёдности рецепта включается дозирующий шнек под нужным бункером и подаёт продукт в общий весовой бункер на тензодатчиках. При приближении к заданию частотный преобразователь снижает обороты шнека: переход от грубой к точной подаче приближает массу к заданной.",
          "После поочерёдного взвешивания всех компонентов бункер опорожняется, и порция передаётся в смеситель или рецептурную линию. Рецепты, результаты взвешивания и очерёдность управляются через PLC/HMI.",
        ],
        note: "Достижимая точность взвешивания зависит от сыпучести продукта, заданной массы, диапазона весов и выбора шнека. Не каждая система микродозирования работает с одинаковой точностью; значение определяется по проекту.",
      },
      process: {
        title: "Технологическая схема микродозирования",
        intro:
          "Схема показывает подачу микрокомпонентов шнеками из бункеров в весовой бункер, поочерёдное взвешивание по рецепту и передачу в смеситель после выполнения заданий. Смеситель и последующая линия — отдельное оборудование.",
        note: "Для порошковых добавок, склонных к сводообразованию, геометрия бункера и побудители истечения учитываются в проекте для стабильной шнековой подачи.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Микробункеры", text: "Каждая добавка и микрокомпонент хранится в своём бункере." },
          { title: "Шнековая подача", text: "Включается шнек очередного компонента; продукт поступает в весовой бункер." },
          { title: "Грубая и точная подача", text: "При приближении к заданию преобразователь снижает обороты шнека." },
          { title: "Передача в смеситель", text: "После взвешивания всех компонентов бункер разгружается в смеситель или линию." },
        ],
        auxLineLabel: "Управление рецептом",
        auxLine: [
          { title: "Выбор рецепта", text: "PLC/HMI задаёт компоненты, заданные массы и очерёдность." },
          { title: "Протокол взвешивания", text: "Взвешенная масса каждого компонента записывается и сравнивается с рецептом." },
        ],
        flow: {
          svgTitle: "Технологическая схема микродозирования",
          svgDesc: "Линия продукта: бункеры микрокомпонентов, дозирующие шнеки и весовой бункер на тензодатчиках, смеситель или рецептурная линия.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Микробункеры", sub: "Добавки и микрокомпоненты" }],
          drum: { title: "МИКРОДОЗИРОВАНИЕ", sub: "шнековая подача, взвешивание" },
          after: [
            { title: "Весовой бункер", sub: "Задание выполнено" },
            { title: "Смеситель / линия", sub: "Передача в рецепт" },
          ],
        },
      },
      applications: {
        title: "Области применения микродозирования",
        items: [
          {
            title: "Микроэлементы в удобрениях",
            text: "Отдельное взвешивание микроэлементов и добавок, используемых в рецептах удобрений в малой доле, перед подачей в смесь.",
            imageAlt: "Гранулы смешанного удобрения разных цветов",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Химические добавки и пигменты",
            text: "Взвешивание катализаторов, пигментов и подобных порошковых добавок по рецепту в химических процессах. Аспирация оценивается по продукту.",
            imageAlt: "Химическое производство",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Премиксы и витамины для кормов",
            text: "Взвешивание премиксов, витаминов и минеральных добавок отдельно от основного кормового рецепта. Минералы в больших количествах подаются макродозированием.",
            imageAlt: "Соевый шрот — кормовое сырьё",
            linkLabel: "Макродозирование",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление систем микродозирования",
        intro:
          "PRO MAKINA проектирует системы микродозирования исходя из числа компонентов, массы каждого компонента в рецепте, свойств сыпучести и времени цикла. Геометрия бункеров, размер шнеков, весовой бункер и диапазон тензодатчиков подбираются совместно.",
        highlights: ["Дозирующий шнек на каждый бункер", "Грубая и точная подача с преобразователем", "Весы на тензодатчиках с гибкими соединениями", "Управление рецептами PLC/HMI"],
        figureAlt: "Дозирующие шнеки под бункерами добавок и подключения к весовому бункеру",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Компоненты", text: "Число компонентов, вид продукта, крупность, насыпная плотность и влажность." },
          { title: "Доза", text: "Заданная масса каждого компонента на замес и диапазон рецептов." },
          { title: "Сыпучесть", text: "Текучесть, склонность к сводообразованию и налипанию, геометрия бункера." },
          { title: "Подача и взвешивание", text: "Размер шнека, диапазон весов и переход с грубой на точную подачу." },
          { title: "Управление и подключение", text: "PLC/HMI, число рецептов, аспирация и подключение к смесителю." },
        ],
        dataNote: "Точность взвешивания, масса и время замеса определяются по данным компонентов и рецептов; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея микродозирования",
        captions: ["Приводные дозирующие шнеки под бункерами и весовой участок"],
      },
      faq: {
        title: "Часто задаваемые вопросы о микродозировании",
        items: [
          {
            question: "Что такое микродозирование?",
            answer: "Весовое дозирование добавок, микроэлементов и компонентов премикса, используемых в рецепте в малой доле, на отдельных весах.",
          },
          {
            question: "Как работает система микродозирования?",
            answer: "Шнек под каждым бункером работает по очерёдности рецепта и подаёт продукт в весовой бункер на тензодатчиках. У задания преобразователь снижает обороты; после взвешивания всех компонентов бункер разгружается.",
          },
          {
            question: "Чем она отличается от макродозирования?",
            answer: "Микродозирование использует весы с меньшим диапазоном и шнековую подачу для малых компонентов. Макродозирование взвешивает компоненты в больших количествах на более крупных бункерах и весах.",
          },
          {
            question: "Какова точность взвешивания?",
            answer: "Точность зависит от сыпучести, заданной массы, диапазона весов и выбора шнека. Она определяется по проекту; общее значение не приводится.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Перечень компонентов и их свойства, масса каждого компонента на замес, число замесов, число рецептов и данные смесителя.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на микродозирование",
        text: "Сообщите перечень компонентов, массы по рецепту и время замеса — вместе определим систему микродозирования.",
        mailSubject: "Запрос предложения: микродозирование",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Перечень компонентов и их свойства", "Масса каждого компонента на замес", "Число и время замесов", "Число рецептов", "Смеситель или линия", "Автоматика и аспирация"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на систему микродозирования.",
          "",
          "Число компонентов:",
          "Масса компонента (кг/замес):",
          "Замесов в час:",
          "Число рецептов:",
          "Смеситель:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نظام الجرعات الدقيقة | جرعات وزنية بالناقل اللولبي",
        description:
          "نظام جرعات دقيقة يلقّم الإضافات منخفضة النسبة بناقل لولبي إلى قادوس وزن على خلايا تحميل ويزنها بالتتابع وفق الوصفة، مع تحكم PLC بالوصفات.",
      },
      breadcrumbLabel: "الجرعات الدقيقة",
      h1: "الجرعات الدقيقة – جرعات موزونة لمكونات الوصفة منخفضة النسبة",
      productCategory: "نظام الجرعات الدقيقة",
      overview: {
        imageAlt: "محطة جرعات دقيقة بنواقل لولبية آلية أسفل قواديس الإضافات وقادوس وزن مشترك",
        tagline: "الجرعات الدقيقة",
        keyFacts: [
          { label: "المهمة", value: "جرعات موزونة للمكونات منخفضة النسبة" },
          { label: "التلقيم", value: "ناقل لولبي للجرعات أسفل كل قادوس" },
          { label: "الوزن", value: "قادوس وزن مشترك على خلايا تحميل" },
          { label: "التحكم", value: "وزن متتابع وفق الوصفة، PLC/HMI" },
        ],
        title: "وزن منفصل للمكونات المستخدمة بكميات صغيرة",
        paragraphs: [
          "تتيح الجرعات الدقيقة وزن الإضافات والعناصر الصغرى ومكونات البريمكس المستخدمة بنسب منخفضة في الوصفة وتقديمها إلى العملية على أساس الوزن؛ فلو وُزنت على ميزان المكونات الرئيسية لضاعت الكميات الصغيرة ضمن نطاق قياس الميزان، لذا يُستخدم نظام وزن منفصل وأصغر.",
          "يبقى كل مكون في قادوسه الخاص، ووفق تسلسل الوصفة يعمل الناقل اللولبي أسفل القادوس المعني ويلقّم المنتج في قادوس الوزن المشترك المركب على خلايا التحميل، وعند الاقتراب من الهدف يخفض محول التردد سرعة اللولب فيتحول التلقيم من خشن إلى دقيق للاقتراب من الكمية المستهدفة.",
          "بعد وزن جميع المكونات بالتتابع يُفرغ القادوس وتُنقل الدفعة إلى الخلاط أو خط الوصفة، وتُدار الوصفات ونتائج الوزن والتسلسل عبر PLC/HMI.",
        ],
        note: "تعتمد دقة الوزن الممكنة على انسياب المنتج والكمية المستهدفة ونطاق الميزان واختيار اللولب، ولا تعمل كل أنظمة الجرعات الدقيقة بالدقة نفسها؛ إذ تُحدَّد القيمة لكل مشروع.",
      },
      process: {
        title: "تدفق العملية في الجرعات الدقيقة",
        intro:
          "يوضح المخطط تلقيم المكونات الدقيقة من القواديس بالنواقل اللولبية إلى قادوس الوزن ووزنها بالتتابع وفق الوصفة ثم نقلها إلى الخلاط عند اكتمال الأهداف، بينما الخلاط والخط التالي معدات منفصلة.",
        note: "في الإضافات المسحوقة المعرضة للتقوس تُقيَّم هندسة القادوس ومساعدات الانسياب في التصميم لضمان ثبات التلقيم اللولبي.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "القواديس الدقيقة", text: "يبقى كل مكون إضافي أو دقيق في قادوسه الخاص." },
          { title: "التلقيم اللولبي", text: "يعمل لولب المكون التالي في التسلسل فينساب المنتج إلى قادوس الوزن." },
          { title: "تلقيم خشن ودقيق", text: "عند الاقتراب من الهدف يخفض المحول سرعة اللولب." },
          { title: "النقل إلى الخلاط", text: "بعد وزن جميع المكونات يُفرغ القادوس إلى الخلاط أو خط الوصفة." },
        ],
        auxLineLabel: "التحكم في الوصفة",
        auxLine: [
          { title: "اختيار الوصفة", text: "يحدد PLC/HMI المكونات والكميات المستهدفة والتسلسل." },
          { title: "سجل الوزن", text: "تُسجَّل الكمية الموزونة لكل مكون وتُقارن بالوصفة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في الجرعات الدقيقة",
          svgDesc: "خط المنتج: قواديس المكونات الدقيقة، نواقل الجرعات اللولبية وقادوس الوزن على خلايا التحميل، الخلاط أو خط الوصفة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "القواديس الدقيقة", sub: "إضافات ومكونات دقيقة" }],
          drum: { title: "الجرعات الدقيقة", sub: "تلقيم لولبي ووزن" },
          after: [
            { title: "قادوس الوزن", sub: "اكتمال الكمية المستهدفة" },
            { title: "خلاط / خط", sub: "النقل إلى الوصفة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الجرعات الدقيقة",
        items: [
          {
            title: "إضافات العناصر الصغرى في الأسمدة",
            text: "وزن العناصر الصغرى والإضافات المستخدمة بنسب منخفضة في وصفات الأسمدة بشكل منفصل قبل إضافتها إلى الخليط.",
            imageAlt: "حبيبات سماد مخلوط بألوان مختلفة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "الإضافات الكيميائية والأصباغ",
            text: "وزن المحفزات والأصباغ والإضافات المسحوقة المشابهة وفق الوصفة في العمليات الكيميائية، مع تقييم شفط الغبار حسب المنتج.",
            imageAlt: "منشأة عمليات كيميائية",
            linkLabel: "الصناعات الكيميائية والتحويلية",
          },
          {
            title: "بريمكس الأعلاف والفيتامينات",
            text: "وزن البريمكس والفيتامينات والإضافات المعدنية بشكل منفصل عن وصفة العلف الرئيسية، بينما تُلقَّم المعادن ذات الكميات الأكبر بالجرعات الكبيرة.",
            imageAlt: "كسبة فول الصويا كمادة علفية",
            linkLabel: "الجرعات الكبيرة",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أنظمة الجرعات الدقيقة حسب المشروع",
        intro:
          "تصمم PRO MAKINA أنظمة الجرعات الدقيقة وفق عدد المكونات وكمية كل مكون في الوصفة وخصائص انسياب المنتج وزمن الدفعة، مع اختيار هندسة القواديس ومقاس اللولب وقادوس الوزن ونطاق خلايا التحميل معًا.",
        highlights: ["ناقل لولبي لكل قادوس", "تلقيم خشن ودقيق بمحول تردد", "ميزان خلايا تحميل بوصلات مرنة", "إدارة الوصفات عبر PLC/HMI"],
        figureAlt: "نواقل جرعات لولبية أسفل قواديس الإضافات ووصلات قادوس الوزن",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المكونات", text: "عدد المكونات ونوع المنتج وحجم الحبيبات والكثافة الظاهرية والرطوبة." },
          { title: "كمية الجرعة", text: "الكمية المستهدفة لكل مكون في الدفعة ونطاق الوصفات." },
          { title: "سلوك الانسياب", text: "قابلية الانسياب والتقوس والالتصاق وهندسة القادوس." },
          { title: "التلقيم والوزن", text: "مقاس اللولب ونطاق الميزان والانتقال من الخشن إلى الدقيق." },
          { title: "التحكم والتوصيل", text: "PLC/HMI وعدد الوصفات وشفط الغبار ووصلة الخلاط." },
        ],
        dataNote: "تُحدَّد دقة الوزن وكمية الدفعة وزمنها من بيانات المكونات والوصفات، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور الجرعات الدقيقة",
        captions: ["نواقل جرعات لولبية آلية أسفل القواديس وقسم الوزن"],
      },
      faq: {
        title: "أسئلة شائعة حول الجرعات الدقيقة",
        items: [
          {
            question: "ما الجرعات الدقيقة؟",
            answer: "وزن الإضافات والعناصر الصغرى ومكونات البريمكس المستخدمة بنسب منخفضة في الوصفة على ميزان منفصل وتقديمها إلى العملية على أساس الوزن.",
          },
          {
            question: "كيف يعمل نظام الجرعات الدقيقة؟",
            answer: "يعمل اللولب أسفل كل قادوس وفق تسلسل الوصفة ويلقّم المنتج في قادوس الوزن على خلايا التحميل، وقرب الهدف يخفض المحول السرعة، وبعد وزن جميع المكونات يُفرغ القادوس.",
          },
          {
            question: "ما الفرق بينها وبين الجرعات الكبيرة؟",
            answer: "تستخدم الجرعات الدقيقة ميزانًا بنطاق أصغر وتلقيمًا لولبيًا للمكونات قليلة الكمية، بينما تزن الجرعات الكبيرة المكونات ذات الكميات الأعلى بقواديس وموازين أكبر.",
          },
          {
            question: "ما دقة الوزن؟",
            answer: "تعتمد الدقة على الانسياب والكمية المستهدفة ونطاق الميزان واختيار اللولب، وتُحدَّد لكل مشروع دون ذكر قيمة عامة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "قائمة المكونات وخصائصها وكمية كل مكون في الدفعة وعدد الدفعات وعدد الوصفات وبيانات الخلاط.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للجرعات الدقيقة",
        text: "شاركنا قائمة المكونات وكميات الوصفة وزمن الدفعة، لنحدد معًا نظام الجرعات الدقيقة المناسب.",
        mailSubject: "طلب عرض سعر: جرعات دقيقة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["قائمة المكونات وخصائصها", "كمية كل مكون في الدفعة", "عدد الدفعات وزمنها", "عدد الوصفات", "الخلاط أو الخط المستهدف", "متطلبات الأتمتة وشفط الغبار"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام جرعات دقيقة.",
          "",
          "عدد المكونات:",
          "كمية المكون (كغ/دفعة):",
          "الدفعات في الساعة:",
          "عدد الوصفات:",
          "بيانات الخلاط:",
          "الأتمتة:",
        ],
      },
    },
  },
};
