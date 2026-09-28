import type { DrumPageConfig } from "../types";

// Distribütör: mevcut tanım "granül, toz veya pelet malzemenin farklı proses hatlarına yönlendirilmesi; tek veya çoklu giriş-çıkış".
// Görseller (dist1/8, dist5–7, dist9) tek girişli, çok çıkışlı döner tip distribütörü gösterir: tepede veya altta tahrik, konik gövde ve
// radyal çıkış boruları. İçerik "gövde içindeki yönlendirme oluğunun seçilen çıkışa döndürülmesi" mekanizmasına göre hazırlanmıştır.
// Distribütör dozaj veya akış bölme yapmaz; bir anda tek çıkışa yönlendirir. Çıkış sayısı, kesit ve kapasite verilmez.
// dist8, dist1 ile aynı görsel olduğu için kullanılmadı. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/distrubutor/${file}`;

export const distributorPage: DrumPageConfig = {
  key: "distributor",
  group: "auxiliaryFlow",
  trSlug: "distributor",
  mainImage: img("dist1.jpg"),
  applications: [
    { image: img("dist6.jpg"), link: "siloSystems" },
    { image: img("dist3.jpg"), link: "conveying" },
    { image: "/images/paket-uygulamalari/gubre-big-bag.webp", link: "packagingSystems" },
    { image: "/images/tambur-uygulamalari/kompoze-gubre-granul.webp", link: "fertilizerPlants" },
  ],
  figure: img("dist9.avif"),
  gallery: [img("dist5.jpg"), img("dist7.jpg"), img("dist2.jpg"), img("dist4.jpg")],
  sectors: ["fertilizerPlants", "mining"],
  resources: ["siloSystems", "bucketElevator", "flapDiverters", "auxiliaryFlow"],
  machines: ["storageSystems", "conveying", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Distribütör | Silo ve Hat Seçimi İçin Çok Çıkışlı Döner Distribütör | PRO MAKİNA",
        description:
          "Dökme malzemeyi tek girişten seçilen silo, bunker veya proses hattına yönlendiren çok çıkışlı döner distribütör. Konum sensörlü, aşınmaya dayanıklı imalat.",
      },
      breadcrumbLabel: "Distribütör",
      h1: "Distribütör – Dökme Malzemenin Seçilen Silo ve Hatta Yönlendirilmesi",
      productCategory: "Çok Çıkışlı Döner Distribütör",
      overview: {
        imageAlt: "Konik gövdeli ve radyal çıkış borulu çok çıkışlı döner distribütör",
        tagline: "Distribütör",
        keyFacts: [
          { label: "Görev", value: "Akışın seçilen çıkış hattına yönlendirilmesi" },
          { label: "Giriş / çıkış", value: "Tek giriş, projeye göre çok çıkış" },
          { label: "Mekanizma", value: "Gövde içinde döndürülen yönlendirme oluğu" },
          { label: "Konum kontrolü", value: "Çıkış başına konum algılama" },
        ],
        title: "Tek Girişten Birden Fazla Hatta Ürün Dağıtımı",
        paragraphs: [
          "Distribütör, elevatör veya konveyörden gelen dökme malzemeyi birden fazla silo, bunker ya da proses hattı arasından seçilen hatta yönlendiren akış ekipmanıdır. Ürün tek girişten gövdeye girer ve seçilen çıkış borusundan yerçekimiyle akar.",
          "Döner tip distribütörde gövde içindeki yönlendirme oluğu, tahrik ünitesiyle seçilen çıkış ağzının karşısına getirilir. Oluk konumuna geldiğinde konum algılayıcı doğrulama sinyali verir; akış ancak bu sinyalden sonra başlatılır.",
          "Oluk ile çıkış ağzı arasındaki sızdırmazlık, ürünün seçilmeyen hatlara kaçmasını önler. Aşınan yüzeyler ve oluk, ürünün aşındırıcılığına göre değiştirilebilir parçalarla tasarlanır.",
        ],
        note: "Distribütör ürünü ölçmez veya hatlar arasında bölmez; bir anda tek çıkışa yönlendirir. Hedef hatta ne kadar ürün gideceği, beslemeyi yapan elevatör, konveyör veya dozaj ekipmanıyla belirlenir.",
      },
      process: {
        title: "Distribütör Proses Akışı",
        intro:
          "Şema, ürünün tek girişten kabul edildiği, yönlendirme oluğunun seçilen çıkışa döndürüldüğü ve ürünün ilgili silo, bunker veya hatta aktarıldığı akışı gösterir. Elevatör, konveyör ve silolar ayrı ekipmanlardır.",
        note: "Çıkış değişimi, besleme durdurulup hat boşaldıktan sonra yapılır; böylece ürün yanlış hatta karışmaz.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Tek girişten kabul", text: "Elevatör veya konveyörden gelen ürün distribütör girişine alınır." },
          { title: "Çıkış seçimi", text: "Tahrik ünitesi yönlendirme oluğunu seçilen çıkış ağzına döndürür." },
          { title: "Konum doğrulama", text: "Konum algılayıcı oluğun doğru çıkışta olduğunu bildirir; besleme başlar." },
          { title: "Hatta aktarım", text: "Ürün seçilen çıkış borusundan yerçekimiyle silo, bunker veya hatta akar." },
        ],
        flow: {
          svgTitle: "Distribütör proses akış şeması",
          svgDesc: "Ürün hattı: elevatör veya konveyör, tek girişli döner distribütör, seçilen çıkış borusu ve hedef silo, bunker veya hat.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Elevatör / konveyör", sub: "Tek giriş" }],
          drum: { title: "DİSTRİBÜTÖR", sub: "döner oluk ile çıkış seçimi" },
          after: [
            { title: "Seçilen çıkış", sub: "Yerçekimiyle akış" },
            { title: "Silo / bunker / hat", sub: "Hedef ekipman" },
          ],
        },
      },
      applications: {
        title: "Distribütör Uygulama Alanları",
        items: [
          {
            title: "Çoklu Silo Besleme",
            text: "Tek elevatör hattından silo bataryasındaki silolardan birinin seçilerek doldurulması. Çıkış boruları silolara radyal olarak yerleşir.",
            imageAlt: "Silo bataryası üzerinde radyal borulu distribütör",
            linkLabel: "Silo Sistemleri",
          },
          {
            title: "Konveyör ve Bunker Hattı Seçimi",
            text: "Aktarma kulesinde ürünün farklı konveyör veya bunker hatlarına yönlendirilmesi. Büyük kesitli oluklarda aşınma yüzeyleri tasarımın parçasıdır.",
            imageAlt: "Konveyör aktarma kulesinde çok yönlü dağıtım olukları",
            linkLabel: "Taşıma Ekipmanları",
          },
          {
            title: "Paketleme Hatlarına Yönlendirme",
            text: "Ürün bunkerinden gelen akışın torbalama veya big bag dolum hatlarından birine verilmesi. Hat değişimi otomasyonla yapılır.",
            imageAlt: "Big bag torbalara doldurulmuş gübre",
            linkLabel: "Paketleme ve Dolum Sistemleri",
          },
          {
            title: "Gübre Tesislerinde Ürün Dağıtımı",
            text: "Granül gübre, hammadde ve ürün stoklarının farklı bunker veya depolara dağıtılması. Higroskopik ürünlerde birikmeye karşı gövde iç geometrisi değerlendirilir.",
            imageAlt: "Kompoze granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Distribütör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA distribütörleri ürün, çıkış sayısı ve yerleşimi, akış kesiti, tahrik ve konum kontrolü ihtiyacına göre projelendirir. Gövde geometrisi, yönlendirme oluğu, sızdırmazlık ve aşınma parçaları birlikte tasarlanır.",
        highlights: ["Tek giriş, çok çıkışlı gövde", "Motorlu yönlendirme oluğu", "Çıkış başına konum algılama", "Değiştirilebilir aşınma parçaları"],
        figureAlt: "Konik gövde, alt çıkış ağızları ve tahrik ünitesiyle döner distribütör",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, aşındırıcılık ve yapışma eğilimi." },
          { title: "Giriş ve Çıkışlar", text: "Çıkış sayısı, çıkış açıları ve hedef silo veya hatların yerleşimi." },
          { title: "Geçiş Kesiti", text: "Besleyen ekipmanın debisine uygun giriş, oluk ve çıkış kesiti." },
          { title: "Tahrik ve Konum", text: "Tahrik tipi, konum algılama ve otomasyon sinyalleri." },
          { title: "Sızdırmazlık ve Toz", text: "Çıkışlar arası sızdırmazlık, kapalı gövde ve bakım erişimi." },
        ],
        dataNote: "Çıkış sayısı, kesit ve kapasite ürün ve tesis yerleşimine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Distribütör Fotoğraf Galerisi",
        captions: [
          "Silo çatısında platformlu distribütör ve dağıtım boruları",
          "Silolara radyal uzanan distribütör çıkış boruları",
          "Aktarma kulesinde çok yönlü dağıtım olukları",
          "Dağıtım kafası ve eğimli çıkış olukları",
        ],
      },
      faq: {
        title: "Distribütör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Distribütör ne işe yarar?",
            answer: "Tek girişten gelen dökme malzemeyi birden fazla silo, bunker veya proses hattı arasından seçilen hatta yönlendirir.",
          },
          {
            question: "Döner distribütör nasıl çalışır?",
            answer: "Gövde içindeki yönlendirme oluğu tahrik ünitesiyle seçilen çıkış ağzının karşısına getirilir. Konum doğrulandıktan sonra besleme başlar ve ürün yerçekimiyle o çıkıştan akar.",
          },
          {
            question: "Distribütör dozajlama yapar mı?",
            answer: "Hayır. Distribütör akışı seçilen hatta yönlendirir; miktarı ölçmez veya hatlar arasında bölmez. Miktar, beslemeyi yapan ekipmanla veya ayrı bir dozaj sistemiyle belirlenir.",
          },
          {
            question: "Klapeden farkı nedir?",
            answer: "İki yollu klape akışı iki çıkıştan birine yönlendirir. Döner distribütör ise tek gövdede çok sayıda çıkış arasından seçim yapılmasını sağlar.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, besleme debisi, çıkış sayısı ve yerleşimi, tahrik ve otomasyon ihtiyacı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Distribütör için teknik teklif alın",
        text: "Ürününüz, çıkış sayınız ve hedef hatlarınızın yerleşimine göre distribütörü birlikte netleştirelim.",
        mailSubject: "Distribütör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve aşındırıcılık", "Besleme debisi", "Çıkış sayısı ve yerleşimi", "Besleyen ekipman (elevatör, konveyör)", "Tahrik ve otomasyon ihtiyacı"],
        inquiryLines: [
          "Merhaba, distribütör için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Besleme debisi (ton/saat):",
          "Çıkış sayısı:",
          "Besleyen ekipman:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Rotary Distributor | Multi-Outlet Distributor for Silos and Lines",
        description:
          "Multi-outlet rotary distributor directing bulk material from one inlet to the selected silo, bunker or process line. Position sensing, wear-resistant build.",
      },
      breadcrumbLabel: "Distributor",
      h1: "Distributor – Directing Bulk Material to the Selected Silo or Line",
      productCategory: "Multi-Outlet Rotary Distributor",
      overview: {
        imageAlt: "Multi-outlet rotary distributor with conical body and radial outlet pipes",
        tagline: "Distributor",
        keyFacts: [
          { label: "Duty", value: "Directing the flow to the selected outlet line" },
          { label: "Inlet / outlets", value: "Single inlet, multiple outlets per project" },
          { label: "Mechanism", value: "Rotating spout inside the body" },
          { label: "Position control", value: "Position sensing per outlet" },
        ],
        title: "Distributing Product from One Inlet to Several Lines",
        paragraphs: [
          "A distributor is flow equipment that directs bulk material arriving from an elevator or conveyor to one line selected from several silos, bunkers or process lines. Product enters the body through a single inlet and flows by gravity out of the selected outlet pipe.",
          "In a rotary distributor, the spout inside the body is turned by the drive unit to face the selected outlet. When the spout reaches position, a position sensor confirms it; the flow is started only after this signal.",
          "Sealing between spout and outlet keeps product from leaking into unselected lines. Wearing surfaces and the spout are designed with replaceable parts according to the product's abrasiveness.",
        ],
        note: "A distributor does not measure product or split it between lines; it directs the flow to one outlet at a time. The quantity sent to the target line is set by the feeding elevator, conveyor or dosing equipment.",
      },
      process: {
        title: "Distributor Process Flow",
        intro:
          "The diagram shows product received through a single inlet, the spout turned to the selected outlet and the product transferred to the relevant silo, bunker or line. Elevator, conveyor and silos are separate equipment.",
        note: "The outlet is changed after the feed has been stopped and the line has emptied, so that product is not mixed into the wrong line.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Single inlet", text: "Product from the elevator or conveyor enters the distributor inlet." },
          { title: "Outlet selection", text: "The drive turns the spout to the selected outlet." },
          { title: "Position check", text: "The position sensor confirms the spout is at the correct outlet; the feed starts." },
          { title: "Transfer to line", text: "Product flows by gravity through the selected outlet pipe to a silo, bunker or line." },
        ],
        flow: {
          svgTitle: "Distributor process flow diagram",
          svgDesc: "Product line: elevator or conveyor, single-inlet rotary distributor, selected outlet pipe and target silo, bunker or line.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Elevator / conveyor", sub: "Single inlet" }],
          drum: { title: "DISTRIBUTOR", sub: "outlet selection by rotating spout" },
          after: [
            { title: "Selected outlet", sub: "Gravity flow" },
            { title: "Silo / bunker / line", sub: "Target equipment" },
          ],
        },
      },
      applications: {
        title: "Distributor Applications",
        items: [
          {
            title: "Multiple Silo Filling",
            text: "Filling one selected silo of a silo battery from a single elevator line. Outlet pipes are arranged radially towards the silos.",
            imageAlt: "Distributor with radial pipes above a silo battery",
            linkLabel: "Silo Systems",
          },
          {
            title: "Conveyor and Bunker Line Selection",
            text: "Directing product to different conveyor or bunker lines in a transfer tower. For large-section chutes, wear surfaces are part of the design.",
            imageAlt: "Multi-way distribution chutes in a conveyor transfer tower",
            linkLabel: "Conveying Systems",
          },
          {
            title: "Routing to Packaging Lines",
            text: "Feeding the flow from a product bunker to one of several bagging or big-bag filling lines. Line changes are made by the automation system.",
            imageAlt: "Fertilizer filled into big bags",
            linkLabel: "Packaging and Filling Systems",
          },
          {
            title: "Product Distribution in Fertilizer Plants",
            text: "Distributing granular fertilizer, raw materials and product stocks to different bunkers or stores. For hygroscopic products the internal body geometry is assessed against build-up.",
            imageAlt: "Compound granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
        ],
      },
      design: {
        title: "Custom Distributor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers distributors around the product, number and layout of outlets, flow section, drive and position control requirements. Body geometry, spout, sealing and wear parts are designed together.",
        highlights: ["Single-inlet, multi-outlet body", "Motorised spout", "Position sensing per outlet", "Replaceable wear parts"],
        figureAlt: "Rotary distributor with conical body, bottom outlets and drive unit",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, abrasiveness and tendency to stick." },
          { title: "Inlet and Outlets", text: "Number of outlets, outlet angles and layout of the target silos or lines." },
          { title: "Flow Section", text: "Inlet, spout and outlet sections matched to the feeding equipment rate." },
          { title: "Drive and Position", text: "Drive type, position sensing and automation signals." },
          { title: "Sealing and Dust", text: "Sealing between outlets, enclosed body and maintenance access." },
        ],
        dataNote: "Number of outlets, section and capacity are defined from product and plant layout; no generic values are stated on this page.",
      },
      gallery: {
        title: "Distributor Photo Gallery",
        captions: [
          "Distributor with platform and distribution pipes on a silo roof",
          "Distributor outlet pipes extending radially to the silos",
          "Multi-way distribution chutes in a transfer tower",
          "Distribution head and inclined outlet chutes",
        ],
      },
      faq: {
        title: "Distributor FAQ",
        items: [
          {
            question: "What is a distributor used for?",
            answer: "It directs bulk material arriving through a single inlet to one line selected from several silos, bunkers or process lines.",
          },
          {
            question: "How does a rotary distributor work?",
            answer: "The spout inside the body is turned by the drive to face the selected outlet. After the position is confirmed, the feed starts and the product flows by gravity through that outlet.",
          },
          {
            question: "Does a distributor dose product?",
            answer: "No. A distributor directs the flow to the selected line; it neither measures the quantity nor splits it between lines. The quantity is set by the feeding equipment or a separate dosing system.",
          },
          {
            question: "How does it differ from a flap diverter?",
            answer: "A two-way flap diverter directs the flow to one of two outlets. A rotary distributor allows selection among many outlets in a single body.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, feed rate, number and layout of outlets, and drive and automation requirements.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a distributor",
        text: "Share your product, number of outlets and the layout of your target lines, and we will define the distributor together with you.",
        mailSubject: "Distributor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and abrasiveness", "Feed rate", "Number and layout of outlets", "Feeding equipment (elevator, conveyor)", "Drive and automation requirements"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a distributor.",
          "",
          "Product:",
          "Bulk density:",
          "Feed rate (t/h):",
          "Number of outlets:",
          "Feeding equipment:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Поворотный распределитель сыпучих материалов на несколько выходов",
        description:
          "Поворотный многоходовой распределитель направляет сыпучий материал с одного входа в выбранный силос, бункер или линию. Датчики положения, износостойкость.",
      },
      breadcrumbLabel: "Распределитель",
      h1: "Распределитель – направление сыпучего материала в выбранный силос или линию",
      productCategory: "Поворотный многоходовой распределитель",
      overview: {
        imageAlt: "Поворотный многоходовой распределитель с коническим корпусом и радиальными выпускными трубами",
        tagline: "Распределитель",
        keyFacts: [
          { label: "Назначение", value: "Направление потока в выбранную линию" },
          { label: "Вход / выходы", value: "Один вход, несколько выходов по проекту" },
          { label: "Механизм", value: "Поворотный лоток внутри корпуса" },
          { label: "Контроль положения", value: "Датчик положения на каждом выходе" },
        ],
        title: "Распределение продукта с одного входа на несколько линий",
        paragraphs: [
          "Распределитель — оборудование потока, направляющее сыпучий материал от элеватора или конвейера в одну выбранную линию из нескольких силосов, бункеров или технологических линий. Продукт поступает в корпус через один вход и самотёком выходит через выбранную трубу.",
          "В поворотном распределителе лоток внутри корпуса поворачивается приводом напротив выбранного выхода. Когда лоток занимает позицию, датчик положения подтверждает её; подача запускается только после этого сигнала.",
          "Уплотнение между лотком и выходом не допускает перетекания продукта в невыбранные линии. Изнашиваемые поверхности и лоток выполняются со сменными деталями с учётом абразивности продукта.",
        ],
        note: "Распределитель не дозирует и не делит продукт между линиями — он направляет поток в один выход в каждый момент. Количество, подаваемое в линию, задаёт питающий элеватор, конвейер или дозатор.",
      },
      process: {
        title: "Технологическая схема распределителя",
        intro:
          "Схема показывает приём продукта через один вход, поворот лотка к выбранному выходу и передачу продукта в соответствующий силос, бункер или линию. Элеватор, конвейер и силосы — отдельное оборудование.",
        note: "Выход переключается после остановки подачи и опорожнения тракта, чтобы продукт не попал в чужую линию.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Приём через один вход", text: "Продукт от элеватора или конвейера поступает во вход распределителя." },
          { title: "Выбор выхода", text: "Привод поворачивает лоток к выбранному выходу." },
          { title: "Контроль положения", text: "Датчик подтверждает положение лотка; подача запускается." },
          { title: "Передача в линию", text: "Продукт самотёком идёт через выбранную трубу в силос, бункер или линию." },
        ],
        flow: {
          svgTitle: "Технологическая схема распределителя",
          svgDesc: "Линия продукта: элеватор или конвейер, поворотный распределитель с одним входом, выбранная выпускная труба и целевой силос, бункер или линия.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Элеватор / конвейер", sub: "Один вход" }],
          drum: { title: "РАСПРЕДЕЛИТЕЛЬ", sub: "выбор выхода поворотом лотка" },
          after: [
            { title: "Выбранный выход", sub: "Самотёк" },
            { title: "Силос / бункер / линия", sub: "Целевое оборудование" },
          ],
        },
      },
      applications: {
        title: "Области применения распределителей",
        items: [
          {
            title: "Загрузка нескольких силосов",
            text: "Заполнение выбранного силоса силосной батареи от одной элеваторной линии. Выпускные трубы расходятся к силосам радиально.",
            imageAlt: "Распределитель с радиальными трубами над силосной батареей",
            linkLabel: "Силосные системы",
          },
          {
            title: "Выбор конвейерной и бункерной линии",
            text: "Направление продукта на разные конвейерные или бункерные линии в перегрузочной башне. Для лотков большого сечения износостойкие поверхности входят в проект.",
            imageAlt: "Многоходовые распределительные лотки в перегрузочной башне",
            linkLabel: "Транспортное оборудование",
          },
          {
            title: "Направление на линии фасовки",
            text: "Подача потока из бункера готовой продукции на одну из линий фасовки в мешки или биг-бэги. Переключение линий выполняет автоматика.",
            imageAlt: "Удобрение в биг-бэгах",
            linkLabel: "Системы упаковки и фасовки",
          },
          {
            title: "Распределение продукта на заводах удобрений",
            text: "Распределение гранулированных удобрений, сырья и готовой продукции по разным бункерам и складам. Для гигроскопичных продуктов внутренняя геометрия оценивается против налипания.",
            imageAlt: "Гранулы сложного удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление распределителей",
        intro:
          "PRO MAKINA проектирует распределители исходя из продукта, числа и расположения выходов, сечения потока, требований к приводу и контролю положения. Геометрия корпуса, лоток, уплотнения и изнашиваемые детали разрабатываются совместно.",
        highlights: ["Корпус с одним входом и несколькими выходами", "Приводной лоток", "Датчик положения на каждом выходе", "Сменные изнашиваемые детали"],
        figureAlt: "Поворотный распределитель с коническим корпусом, нижними выходами и приводом",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность, абразивность и склонность к налипанию." },
          { title: "Вход и выходы", text: "Число выходов, углы выходов и расположение целевых силосов или линий." },
          { title: "Сечение потока", text: "Сечения входа, лотка и выходов под производительность питающего оборудования." },
          { title: "Привод и положение", text: "Тип привода, датчики положения и сигналы автоматики." },
          { title: "Уплотнение и пыль", text: "Уплотнение между выходами, закрытый корпус и доступ для обслуживания." },
        ],
        dataNote: "Число выходов, сечение и производительность определяются по продукту и компоновке; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея распределителей",
        captions: [
          "Распределитель с площадкой и распределительными трубами на крыше силоса",
          "Выпускные трубы распределителя, радиально идущие к силосам",
          "Многоходовые распределительные лотки в перегрузочной башне",
          "Распределительная головка и наклонные выпускные лотки",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о распределителях",
        items: [
          {
            question: "Для чего нужен распределитель?",
            answer: "Он направляет сыпучий материал, поступающий через один вход, в одну выбранную линию из нескольких силосов, бункеров или технологических линий.",
          },
          {
            question: "Как работает поворотный распределитель?",
            answer: "Лоток внутри корпуса поворачивается приводом к выбранному выходу. После подтверждения положения запускается подача, и продукт самотёком уходит через этот выход.",
          },
          {
            question: "Дозирует ли распределитель продукт?",
            answer: "Нет. Распределитель направляет поток в выбранную линию, но не измеряет количество и не делит его между линиями. Количество задаёт питающее оборудование или отдельный дозатор.",
          },
          {
            question: "Чем он отличается от перекидного клапана?",
            answer: "Двухходовой перекидной клапан направляет поток в один из двух выходов, а поворотный распределитель позволяет выбирать из многих выходов в одном корпусе.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, производительность подачи, число и расположение выходов, требования к приводу и автоматике.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на распределитель",
        text: "Сообщите продукт, число выходов и расположение целевых линий — вместе определим распределитель.",
        mailSubject: "Запрос предложения: распределитель",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и абразивность", "Производительность подачи", "Число и расположение выходов", "Питающее оборудование (элеватор, конвейер)", "Требования к приводу и автоматике"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на распределитель.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Производительность (т/ч):",
          "Число выходов:",
          "Питающее оборудование:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الموزع الدوار متعدد المخارج للصوامع وخطوط المواد السائبة",
        description:
          "موزع دوار متعدد المخارج يوجّه المادة السائبة من مدخل واحد إلى الصومعة أو القادوس أو خط العملية المختار، مع حساسات موضع وتصنيع مقاوم للتآكل.",
      },
      breadcrumbLabel: "الموزع",
      h1: "الموزع – توجيه المادة السائبة إلى الصومعة أو الخط المختار",
      productCategory: "موزع دوار متعدد المخارج",
      overview: {
        imageAlt: "موزع دوار متعدد المخارج بجسم مخروطي وأنابيب مخارج شعاعية",
        tagline: "الموزع",
        keyFacts: [
          { label: "المهمة", value: "توجيه التدفق إلى خط المخرج المختار" },
          { label: "المدخل / المخارج", value: "مدخل واحد ومخارج متعددة حسب المشروع" },
          { label: "الآلية", value: "مجرى دوار داخل الجسم" },
          { label: "التحكم في الموضع", value: "كشف الموضع لكل مخرج" },
        ],
        title: "توزيع المنتج من مدخل واحد إلى عدة خطوط",
        paragraphs: [
          "الموزع معدة تدفق توجّه المادة السائبة القادمة من الرافعة أو الناقل إلى خط واحد يُختار من بين عدة صوامع أو قواديس أو خطوط عملية؛ إذ يدخل المنتج الجسم من مدخل واحد وينساب بالجاذبية من أنبوب المخرج المختار.",
          "في الموزع الدوار تدير وحدة الإدارة المجرى الموجود داخل الجسم ليقابل المخرج المختار، وعند وصوله إلى موضعه يؤكد حساس الموضع ذلك، ولا يبدأ التدفق إلا بعد هذه الإشارة.",
          "يمنع الإحكام بين المجرى والمخرج تسرب المنتج إلى الخطوط غير المختارة، وتُصمم الأسطح المعرضة للتآكل والمجرى بأجزاء قابلة للاستبدال وفق كاشطية المنتج.",
        ],
        note: "لا يقيس الموزع المنتج ولا يقسمه بين الخطوط، بل يوجه التدفق إلى مخرج واحد في كل مرة، وتُحدَّد الكمية المرسلة إلى الخط بالرافعة أو الناقل أو معدة الجرعات التي تلقّمه.",
      },
      process: {
        title: "تدفق العملية في الموزع",
        intro:
          "يوضح المخطط استلام المنتج عبر مدخل واحد وتدوير المجرى إلى المخرج المختار ونقل المنتج إلى الصومعة أو القادوس أو الخط المعني، بينما الرافعة والناقل والصوامع معدات منفصلة.",
        note: "يُغيَّر المخرج بعد إيقاف التلقيم وتفريغ الخط، حتى لا يختلط المنتج بخط غير مقصود.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "الاستلام من مدخل واحد", text: "يدخل المنتج القادم من الرافعة أو الناقل إلى مدخل الموزع." },
          { title: "اختيار المخرج", text: "تدير وحدة الإدارة المجرى إلى المخرج المختار." },
          { title: "تأكيد الموضع", text: "يؤكد حساس الموضع أن المجرى عند المخرج الصحيح فيبدأ التلقيم." },
          { title: "النقل إلى الخط", text: "ينساب المنتج بالجاذبية عبر أنبوب المخرج المختار إلى الصومعة أو القادوس أو الخط." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في الموزع",
          svgDesc: "خط المنتج: الرافعة أو الناقل، الموزع الدوار ذو المدخل الواحد، أنبوب المخرج المختار والصومعة أو القادوس أو الخط المستهدف.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "رافعة / ناقل", sub: "مدخل واحد" }],
          drum: { title: "الموزع", sub: "اختيار المخرج بمجرى دوار" },
          after: [
            { title: "المخرج المختار", sub: "تدفق بالجاذبية" },
            { title: "صومعة / قادوس / خط", sub: "المعدة المستهدفة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الموزع",
        items: [
          {
            title: "تعبئة عدة صوامع",
            text: "تعبئة صومعة مختارة من مجموعة صوامع من خط رافعة واحد، مع ترتيب أنابيب المخارج شعاعيًا نحو الصوامع.",
            imageAlt: "موزع بأنابيب شعاعية فوق مجموعة صوامع",
            linkLabel: "أنظمة الصوامع",
          },
          {
            title: "اختيار خطوط النواقل والقواديس",
            text: "توجيه المنتج إلى خطوط نواقل أو قواديس مختلفة في برج النقل، وتكون أسطح التآكل جزءًا من التصميم في المجاري كبيرة المقطع.",
            imageAlt: "مجارٍ توزيع متعددة الاتجاهات في برج نقل النواقل",
            linkLabel: "معدات النقل",
          },
          {
            title: "التوجيه إلى خطوط التعبئة",
            text: "تلقيم التدفق القادم من قادوس المنتج إلى أحد خطوط التعبئة في الأكياس أو الأكياس الكبيرة، مع تبديل الخطوط عبر نظام الأتمتة.",
            imageAlt: "سماد معبأ في أكياس كبيرة",
            linkLabel: "أنظمة التعبئة والتغليف",
          },
          {
            title: "توزيع المنتج في مصانع الأسمدة",
            text: "توزيع الأسمدة الحبيبية والمواد الخام ومخزون المنتج على قواديس أو مخازن مختلفة، مع تقييم الشكل الداخلي للجسم ضد التراكم في المنتجات الماصة للرطوبة.",
            imageAlt: "حبيبات سماد مركب",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع الموزعات حسب المشروع",
        intro:
          "تصمم PRO MAKINA الموزعات وفق المنتج وعدد المخارج وترتيبها ومقطع التدفق ومتطلبات الإدارة والتحكم في الموضع، مع تصميم شكل الجسم والمجرى والإحكام وأجزاء التآكل معًا.",
        highlights: ["جسم بمدخل واحد ومخارج متعددة", "مجرى بإدارة آلية", "كشف الموضع لكل مخرج", "أجزاء تآكل قابلة للاستبدال"],
        figureAlt: "موزع دوار بجسم مخروطي ومخارج سفلية ووحدة إدارة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية والكاشطية وقابلية الالتصاق." },
          { title: "المدخل والمخارج", text: "عدد المخارج وزواياها وترتيب الصوامع أو الخطوط المستهدفة." },
          { title: "مقطع التدفق", text: "مقاطع المدخل والمجرى والمخارج المناسبة لمعدل المعدة المُلقِّمة." },
          { title: "الإدارة والموضع", text: "نوع الإدارة وكشف الموضع وإشارات الأتمتة." },
          { title: "الإحكام والغبار", text: "الإحكام بين المخارج والجسم المغلق وإمكانية الصيانة." },
        ],
        dataNote: "يُحدَّد عدد المخارج والمقطع والسعة وفق المنتج وتخطيط المنشأة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور الموزعات",
        captions: [
          "موزع بمنصة وأنابيب توزيع على سطح صومعة",
          "أنابيب مخارج الموزع الممتدة شعاعيًا نحو الصوامع",
          "مجارٍ توزيع متعددة الاتجاهات في برج نقل",
          "رأس التوزيع ومجاري المخارج المائلة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الموزع",
        items: [
          {
            question: "ما استخدام الموزع؟",
            answer: "يوجه المادة السائبة القادمة عبر مدخل واحد إلى خط واحد يُختار من بين عدة صوامع أو قواديس أو خطوط عملية.",
          },
          {
            question: "كيف يعمل الموزع الدوار؟",
            answer: "تدير وحدة الإدارة المجرى داخل الجسم ليقابل المخرج المختار، وبعد تأكيد الموضع يبدأ التلقيم وينساب المنتج بالجاذبية عبر ذلك المخرج.",
          },
          {
            question: "هل يقوم الموزع بالجرعات؟",
            answer: "لا. يوجه الموزع التدفق إلى الخط المختار دون قياس الكمية أو تقسيمها بين الخطوط، وتُحدَّد الكمية بالمعدة المُلقِّمة أو بنظام جرعات منفصل.",
          },
          {
            question: "ما الفرق بينه وبين صمام التحويل بالبوابة القلابة؟",
            answer: "يوجه صمام التحويل ثنائي الاتجاه التدفق إلى أحد مخرجين، بينما يتيح الموزع الدوار الاختيار بين مخارج عديدة في جسم واحد.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات ومعدل التلقيم وعدد المخارج وترتيبها ومتطلبات الإدارة والأتمتة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للموزع",
        text: "شاركنا منتجك وعدد المخارج وترتيب الخطوط المستهدفة، لنحدد معًا الموزع المناسب.",
        mailSubject: "طلب عرض سعر: موزع",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات والكاشطية", "معدل التلقيم", "عدد المخارج وترتيبها", "المعدة المُلقِّمة (رافعة، ناقل)", "متطلبات الإدارة والأتمتة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لموزع.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "معدل التلقيم (طن/ساعة):",
          "عدد المخارج:",
          "المعدة المُلقِّمة:",
          "الأتمتة:",
        ],
      },
    },
  },
};
