import type { DrumPageConfig } from "../types";

// Klapeler: mevcut tanım "dökme malzeme akışını yönlendirmek, durdurmak veya kontrol altında tutmak; manuel, motorlu veya pnömatik".
// Klasördeki tüm görseller (klap1–12) tek girişli, iki çıkışlı, mil üzerinde dönen kanatlı yönlendirme klapesidir: el volanı (klap4, 11),
// pnömatik silindir (klap12), döner aktüatör (klap9) ve konum anahtarları (klap2, 5, 10) görülür; klap6–8 bunker/konveyör altında sıralı
// montajı gösterir. Bu nedenle içerik "iki yollu dökme malzeme yönlendirme" işlevine göre hazırlanmıştır. Akış kesme amaçlı tek yollu
// klape ve proses havası (damper) tipi görsellerde doğrulanamadığı için sunulmaz; akışı açıp kapama Sürgülü Kapaklar sayfasında anlatılır.
// Kesit, açı veya kapasite verilmez. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/klape/${file}`;

export const flapDivertersPage: DrumPageConfig = {
  key: "flapDiverters",
  group: "auxiliaryFlow",
  trSlug: "klapeler",
  mainImage: img("klap1.png"),
  applications: [
    { image: img("klap6.jpg"), link: "bucketElevator" },
    { image: img("klap7.jpg"), link: "siloSystems" },
    { image: "/images/tambur-uygulamalari/dap-granul.webp", link: "fertilizerPlants" },
  ],
  figure: img("klap12.png"),
  gallery: [img("klap10.jpg"), img("klap2.jpg"), img("klap5.jpg"), img("klap11.jpg"), img("klap4.jpg"), img("klap9.jpg"), img("klap3.jpg"), img("klap8.jpg")],
  sectors: ["fertilizerPlants", "mining"],
  resources: ["distributor", "slideGates", "bucketElevator", "auxiliaryFlow"],
  machines: ["conveying", "storageSystems", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Klapeler | İki Yollu Yönlendirme Klapesi, Pnömatik ve Motorlu Klape | PRO MAKİNA",
        description:
          "Dökme malzemeyi tek girişten iki hattan birine yönlendiren kanatlı yönlendirme klapeleri. Manuel, pnömatik veya motorlu tahrik ve konum anahtarlı imalat.",
      },
      breadcrumbLabel: "Klapeler",
      h1: "Klapeler – Dökme Malzeme İçin İki Yollu Yönlendirme Klapesi",
      productCategory: "İki Yollu Yönlendirme Klapesi",
      overview: {
        imageAlt: "Üst giriş ağzı ve iki alt çıkışı olan kanatlı yönlendirme klapesi",
        tagline: "Yönlendirme Klapesi",
        keyFacts: [
          { label: "Görev", value: "Akışın iki çıkıştan birine yönlendirilmesi" },
          { label: "Mekanizma", value: "Mil üzerinde dönen kanat" },
          { label: "Tahrik", value: "Manuel, pnömatik veya motorlu" },
          { label: "Konum", value: "Uç konum anahtarlarıyla izleme" },
        ],
        title: "Tek Girişten İki Hatta Kontrollü Yönlendirme",
        paragraphs: [
          "Yönlendirme klapesi, konveyör, elevatör veya bunker çıkışından gelen dökme malzemeyi iki çıkış hattından birine yönlendiren akış ekipmanıdır. Gövde içinde mil üzerinde dönen kanat, bir çıkışı kapatırken diğerini açar; ürün yerçekimiyle açık olan hatta akar.",
          "Kanat; el volanı veya kol, pnömatik silindir ya da döner aktüatörle iki uç konum arasında hareket ettirilir. Uç konum anahtarları kanadın hangi çıkışta olduğunu otomasyona bildirir.",
          "Gövde kesiti, kanat geometrisi ve çıkış açıları ürünün akışına göre belirlenir. Kanadın gövdeye oturduğu yüzeyler ürün kaçağını ve birikmeyi sınırlayacak şekilde tasarlanır; aşınan parçalar değiştirilebilir.",
        ],
        note: "Klape akışı iki hat arasında yönlendirir; akışı açıp kapamak için sürgülü kapak kullanılır. Çok sayıda çıkış arasında seçim gerektiğinde döner distribütör tercih edilir.",
      },
      process: {
        title: "Klape Proses Akışı",
        intro:
          "Şema, ürünün klape girişine geldiği, kanadın seçilen çıkışa çevrildiği ve ürünün ilgili hatta aktarıldığı akışı gösterir. Konveyör, elevatör ve hedef hatlar ayrı ekipmanlardır.",
        note: "Kanat konumu, akış varken değil besleme durdurulduktan sonra değiştirilir; böylece kanat ürün yükü altında zorlanmaz.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Girişe akış", text: "Ürün konveyör, elevatör veya bunker çıkışından klape girişine gelir." },
          { title: "Kanat konumu", text: "Tahrik kanadı iki uç konumdan birine çevirir; diğer çıkış kapanır." },
          { title: "Konum doğrulama", text: "Uç konum anahtarı kanadın doğru çıkışta olduğunu bildirir." },
          { title: "Hatta aktarım", text: "Ürün açık olan çıkıştan yerçekimiyle seçilen hatta akar." },
        ],
        flow: {
          svgTitle: "Yönlendirme klapesi proses akış şeması",
          svgDesc: "Ürün hattı: konveyör veya elevatör çıkışı, iki yollu yönlendirme klapesi ve iki çıkış hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Konveyör / elevatör", sub: "Tek giriş" }],
          drum: { title: "YÖNLENDİRME KLAPESİ", sub: "kanat ile çıkış seçimi" },
          after: [
            { title: "Çıkış A", sub: "Hat 1" },
            { title: "Çıkış B", sub: "Hat 2" },
          ],
        },
      },
      applications: {
        title: "Klape Uygulama Alanları",
        items: [
          {
            title: "Elevatör ve Konveyör Çıkışında Yönlendirme",
            text: "Elevatör veya konveyörden gelen ürünün iki farklı hatta verilmesi. Klape, taşıma ekipmanının çıkışına doğrudan bağlanır.",
            imageAlt: "Taşıma hattı altında sıralı monte edilmiş yönlendirme klapeleri",
            linkLabel: "Zincirli Elevatörler",
          },
          {
            title: "Bunker ve Silo Hattı Seçimi",
            text: "Sıralı bunker veya silo çıkışlarında ürünün iki hattan birine alınması. Her klapede uç konum anahtarları otomasyona bağlanır.",
            imageAlt: "Konum anahtarlı yönlendirme klapeleri ve çıkış boruları",
            linkLabel: "Silo Sistemleri",
          },
          {
            title: "Gübre Hatlarında Ürün ve Geri Dönüş Ayrımı",
            text: "Granül ürünün ürün hattı ile geri dönüş hattı arasında yönlendirilmesi. Aşındırıcı ürünlerde kanat ve oturma yüzeyleri değiştirilebilir yapılır.",
            imageAlt: "DAP granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Klape Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA yönlendirme klapelerini ürün, akış kesiti, çıkış açıları, tahrik tipi ve konum kontrolü ihtiyacına göre projelendirir. Gövde, kanat, mil yatakları, sızdırmazlık ve aşınma parçaları birlikte tasarlanır.",
        highlights: ["Tek giriş, iki çıkışlı gövde", "Mil üzerinde dönen kanat", "Manuel, pnömatik veya motorlu tahrik", "Uç konum anahtarları"],
        figureAlt: "Pnömatik silindirli, konum anahtarlı iki yollu yönlendirme klapesi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, aşındırıcılık ve yapışma eğilimi." },
          { title: "Kesit ve Açılar", text: "Giriş kesiti, çıkış açıları ve bağlanacak hatların yerleşimi." },
          { title: "Kanat Geometrisi", text: "Kanat ölçüsü, oturma yüzeyleri ve ürün kaçağına karşı sızdırmazlık." },
          { title: "Tahrik", text: "El volanı veya kol, pnömatik silindir ya da motorlu aktüatör." },
          { title: "Kontrol", text: "Uç konum anahtarları, otomasyon sinyalleri ve bakım erişimi." },
        ],
        dataNote: "Kesit, çıkış açıları ve tahrik ölçüleri ürün ve hat verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Klape Fotoğraf Galerisi",
        captions: [
          "Konum anahtarlı yönlendirme klapeleri",
          "İmalatı tamamlanmış iki yollu klapeler",
          "Yan çıkışlı yönlendirme klapesi",
          "El volanlı büyük kesitli yönlendirme klapesi",
          "El volanıyla çalışan iki yollu klape",
          "Döner aktüatörlü yönlendirme klapesi",
          "Eğimli çıkışlı yönlendirme klapesi",
          "Tesiste sıralı monte edilmiş klapeler",
        ],
      },
      faq: {
        title: "Klapeler Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Yönlendirme klapesi ne işe yarar?",
            answer: "Tek girişten gelen dökme malzemeyi iki çıkış hattından birine yönlendirir. Kanat bir çıkışı kapatırken diğerini açar.",
          },
          {
            question: "Klape nasıl tahrik edilir?",
            answer: "Kanat el volanı veya kol, pnömatik silindir ya da döner aktüatörle hareket ettirilir. Seçim, kullanım sıklığı ve otomasyon ihtiyacına göre yapılır.",
          },
          {
            question: "Klape ile sürgülü kapak arasındaki fark nedir?",
            answer: "Klape akışı iki hat arasında yönlendirir. Sürgülü kapak ise tek bir ağızdaki akışı sürgü plakasıyla açar veya keser.",
          },
          {
            question: "İkiden fazla hatta yönlendirme gerekirse ne kullanılır?",
            answer: "Çok sayıda çıkış arasında seçim için döner distribütör kullanılır veya klapeler hat düzenine göre art arda yerleştirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, akış debisi, giriş kesiti, çıkış açıları, tahrik tipi ve otomasyon ihtiyacı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Klape için teknik teklif alın",
        text: "Ürününüz, hat kesitiniz ve çıkış yerleşiminize göre yönlendirme klapesini birlikte netleştirelim.",
        mailSubject: "Klape Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve aşındırıcılık", "Akış debisi", "Giriş kesiti ve çıkış açıları", "Tahrik tipi (manuel, pnömatik, motorlu)", "Konum sinyali ve otomasyon"],
        inquiryLines: [
          "Merhaba, yönlendirme klapesi için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Akış debisi (ton/saat):",
          "Giriş kesiti:",
          "Tahrik tipi:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Flap Diverter Valves | Two-Way Diverters for Bulk Solids",
        description:
          "Two-way flap diverter valves that direct bulk material from one inlet to one of two lines. Manual, pneumatic or motorised actuation with position switches.",
      },
      breadcrumbLabel: "Flap Diverter Valves",
      h1: "Flap Diverter Valves – Two-Way Diverting of Bulk Material",
      productCategory: "Two-Way Flap Diverter Valve",
      overview: {
        imageAlt: "Flap diverter valve with top inlet and two bottom outlets",
        tagline: "Flap Diverter Valve",
        keyFacts: [
          { label: "Duty", value: "Directing the flow to one of two outlets" },
          { label: "Mechanism", value: "Flap pivoting on a shaft" },
          { label: "Actuation", value: "Manual, pneumatic or motorised" },
          { label: "Position", value: "Monitored by end-position switches" },
        ],
        title: "Controlled Diverting from One Inlet to Two Lines",
        paragraphs: [
          "A flap diverter valve is flow equipment that directs bulk material from a conveyor, elevator or bunker outlet to one of two outlet lines. The flap pivoting on a shaft inside the body closes one outlet while opening the other; the product flows by gravity into the open line.",
          "The flap is moved between its two end positions by a handwheel or lever, a pneumatic cylinder or a rotary actuator. End-position switches report to the automation which outlet the flap is set to.",
          "Body section, flap geometry and outlet angles are determined by the product flow. The surfaces on which the flap seats are designed to limit product leakage and build-up; wearing parts are replaceable.",
        ],
        note: "A flap diverter directs the flow between two lines; a slide gate is used to open and shut off the flow. Where selection among many outlets is required, a rotary distributor is preferred.",
      },
      process: {
        title: "Flap Diverter Process Flow",
        intro:
          "The diagram shows the product arriving at the diverter inlet, the flap set to the selected outlet and the product transferred to the relevant line. Conveyor, elevator and target lines are separate equipment.",
        note: "The flap position is changed after the feed has been stopped rather than under flow, so the flap is not forced against the product load.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Flow to inlet", text: "Product arrives at the diverter inlet from a conveyor, elevator or bunker outlet." },
          { title: "Flap position", text: "The actuator sets the flap to one of its end positions; the other outlet closes." },
          { title: "Position check", text: "The end-position switch confirms the flap is at the correct outlet." },
          { title: "Transfer to line", text: "Product flows by gravity through the open outlet to the selected line." },
        ],
        flow: {
          svgTitle: "Flap diverter valve process flow diagram",
          svgDesc: "Product line: conveyor or elevator outlet, two-way flap diverter valve and two outlet lines.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Conveyor / elevator", sub: "Single inlet" }],
          drum: { title: "FLAP DIVERTER", sub: "outlet selection by flap" },
          after: [
            { title: "Outlet A", sub: "Line 1" },
            { title: "Outlet B", sub: "Line 2" },
          ],
        },
      },
      applications: {
        title: "Flap Diverter Applications",
        items: [
          {
            title: "Diverting at Elevator and Conveyor Outlets",
            text: "Sending product from an elevator or conveyor to two different lines. The diverter is connected directly to the conveying equipment outlet.",
            imageAlt: "Flap diverter valves installed in a row below a conveying line",
            linkLabel: "Bucket Elevator",
          },
          {
            title: "Bunker and Silo Line Selection",
            text: "Taking product from a row of bunker or silo outlets into one of two lines. End-position switches on each diverter are wired to the automation.",
            imageAlt: "Flap diverters with position switches and outlet pipes",
            linkLabel: "Silo Systems",
          },
          {
            title: "Product and Recycle Split in Fertilizer Lines",
            text: "Directing granular product between the product line and the recycle line. For abrasive products the flap and seating surfaces are made replaceable.",
            imageAlt: "DAP granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
        ],
      },
      design: {
        title: "Custom Flap Diverter Design and Manufacturing",
        intro:
          "PRO MAKINA engineers flap diverter valves around the product, flow section, outlet angles, actuation type and position control requirement. Body, flap, shaft bearings, sealing and wear parts are designed together.",
        highlights: ["Single-inlet, two-outlet body", "Flap pivoting on a shaft", "Manual, pneumatic or motorised actuation", "End-position switches"],
        figureAlt: "Two-way flap diverter valve with pneumatic cylinder and position switch",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, abrasiveness and tendency to stick." },
          { title: "Section and Angles", text: "Inlet section, outlet angles and layout of the connected lines." },
          { title: "Flap Geometry", text: "Flap size, seating surfaces and sealing against product leakage." },
          { title: "Actuation", text: "Handwheel or lever, pneumatic cylinder or motorised actuator." },
          { title: "Control", text: "End-position switches, automation signals and maintenance access." },
        ],
        dataNote: "Section, outlet angles and actuator sizes are defined from product and line data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Flap Diverter Photo Gallery",
        captions: [
          "Flap diverter valves with position switches",
          "Finished two-way flap diverters",
          "Flap diverter with side outlet",
          "Large-section flap diverter with handwheel",
          "Two-way diverter operated by handwheel",
          "Flap diverter with rotary actuator",
          "Flap diverter with inclined outlet",
          "Flap diverters installed in a row at a plant",
        ],
      },
      faq: {
        title: "Flap Diverter Valves FAQ",
        items: [
          {
            question: "What is a flap diverter valve used for?",
            answer: "It directs bulk material from a single inlet to one of two outlet lines. The flap closes one outlet while opening the other.",
          },
          {
            question: "How is the flap actuated?",
            answer: "The flap is moved by a handwheel or lever, a pneumatic cylinder or a rotary actuator. The choice depends on switching frequency and automation requirements.",
          },
          {
            question: "What is the difference between a flap diverter and a slide gate?",
            answer: "A flap diverter directs the flow between two lines. A slide gate opens or shuts off the flow at a single opening with a sliding plate.",
          },
          {
            question: "What is used for more than two lines?",
            answer: "A rotary distributor is used for selection among many outlets, or flap diverters are arranged in series according to the line layout.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, flow rate, inlet section, outlet angles, actuation type and automation requirements.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a flap diverter",
        text: "Share your product, line section and outlet layout, and we will define the flap diverter valve together with you.",
        mailSubject: "Flap Diverter Valve Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and abrasiveness", "Flow rate", "Inlet section and outlet angles", "Actuation type (manual, pneumatic, motorised)", "Position signal and automation"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a flap diverter valve.",
          "",
          "Product:",
          "Bulk density:",
          "Flow rate (t/h):",
          "Inlet section:",
          "Actuation type:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Перекидные клапаны – двухходовые клапаны для сыпучих материалов",
        description:
          "Двухходовые перекидные клапаны направляют сыпучий материал с одного входа в одну из двух линий. Ручной, пневматический или электропривод, концевики.",
      },
      breadcrumbLabel: "Перекидные клапаны",
      h1: "Перекидные клапаны – двухходовое направление потока сыпучих материалов",
      productCategory: "Двухходовой перекидной клапан",
      overview: {
        imageAlt: "Перекидной клапан с верхним входом и двумя нижними выходами",
        tagline: "Перекидной клапан",
        keyFacts: [
          { label: "Назначение", value: "Направление потока в один из двух выходов" },
          { label: "Механизм", value: "Заслонка, поворачивающаяся на валу" },
          { label: "Привод", value: "Ручной, пневматический или электрический" },
          { label: "Положение", value: "Контроль конечными выключателями" },
        ],
        title: "Контролируемое направление потока с одного входа на две линии",
        paragraphs: [
          "Перекидной клапан — оборудование потока, направляющее сыпучий материал из выпуска конвейера, элеватора или бункера в одну из двух выходных линий. Заслонка, поворачивающаяся на валу внутри корпуса, закрывает один выход и открывает другой; продукт самотёком идёт в открытую линию.",
          "Заслонка перемещается между двумя крайними положениями штурвалом или рычагом, пневмоцилиндром или поворотным приводом. Конечные выключатели сообщают автоматике, на какой выход установлена заслонка.",
          "Сечение корпуса, геометрия заслонки и углы выходов определяются потоком продукта. Поверхности прилегания заслонки выполняются так, чтобы ограничить перетекание и налипание; изнашиваемые детали сменные.",
        ],
        note: "Перекидной клапан направляет поток между двумя линиями; для открытия и перекрытия потока применяется шиберная задвижка. При выборе из многих выходов предпочтителен поворотный распределитель.",
      },
      process: {
        title: "Технологическая схема перекидного клапана",
        intro:
          "Схема показывает поступление продукта на вход клапана, установку заслонки на выбранный выход и передачу продукта в соответствующую линию. Конвейер, элеватор и целевые линии — отдельное оборудование.",
        note: "Положение заслонки меняют после остановки подачи, а не под потоком, чтобы заслонка не работала против нагрузки продукта.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Поток на вход", text: "Продукт поступает на вход клапана из выпуска конвейера, элеватора или бункера." },
          { title: "Положение заслонки", text: "Привод переводит заслонку в одно из крайних положений; другой выход закрывается." },
          { title: "Контроль положения", text: "Конечный выключатель подтверждает положение заслонки." },
          { title: "Передача в линию", text: "Продукт самотёком идёт через открытый выход в выбранную линию." },
        ],
        flow: {
          svgTitle: "Технологическая схема перекидного клапана",
          svgDesc: "Линия продукта: выпуск конвейера или элеватора, двухходовой перекидной клапан и две выходные линии.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Конвейер / элеватор", sub: "Один вход" }],
          drum: { title: "ПЕРЕКИДНОЙ КЛАПАН", sub: "выбор выхода заслонкой" },
          after: [
            { title: "Выход A", sub: "Линия 1" },
            { title: "Выход B", sub: "Линия 2" },
          ],
        },
      },
      applications: {
        title: "Области применения перекидных клапанов",
        items: [
          {
            title: "Направление потока на выпуске элеватора и конвейера",
            text: "Подача продукта от элеватора или конвейера на две разные линии. Клапан присоединяется непосредственно к выпуску транспортного оборудования.",
            imageAlt: "Перекидные клапаны, установленные в ряд под транспортной линией",
            linkLabel: "Цепной ковшовый элеватор",
          },
          {
            title: "Выбор линии под бункерами и силосами",
            text: "Отбор продукта из ряда выпусков бункеров или силосов в одну из двух линий. Конечные выключатели каждого клапана подключаются к автоматике.",
            imageAlt: "Перекидные клапаны с конечными выключателями и выпускными трубами",
            linkLabel: "Силосные системы",
          },
          {
            title: "Разделение продукта и ретура на линиях удобрений",
            text: "Направление гранулированного продукта в линию готовой продукции или в линию ретура. Для абразивных продуктов заслонка и поверхности прилегания выполняются сменными.",
            imageAlt: "Гранулы удобрения DAP",
            linkLabel: "Заводы удобрений и грануляции",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление перекидных клапанов",
        intro:
          "PRO MAKINA проектирует перекидные клапаны исходя из продукта, сечения потока, углов выходов, типа привода и требований к контролю положения. Корпус, заслонка, подшипники вала, уплотнения и изнашиваемые детали разрабатываются совместно.",
        highlights: ["Корпус с одним входом и двумя выходами", "Заслонка на поворотном валу", "Ручной, пневматический или электрический привод", "Конечные выключатели"],
        figureAlt: "Двухходовой перекидной клапан с пневмоцилиндром и конечным выключателем",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность, абразивность и склонность к налипанию." },
          { title: "Сечение и углы", text: "Сечение входа, углы выходов и расположение присоединяемых линий." },
          { title: "Геометрия заслонки", text: "Размер заслонки, поверхности прилегания и уплотнение против перетекания." },
          { title: "Привод", text: "Штурвал или рычаг, пневмоцилиндр или электропривод." },
          { title: "Управление", text: "Конечные выключатели, сигналы автоматики и доступ для обслуживания." },
        ],
        dataNote: "Сечение, углы выходов и размеры привода определяются по данным продукта и линии; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея перекидных клапанов",
        captions: [
          "Перекидные клапаны с конечными выключателями",
          "Готовые двухходовые перекидные клапаны",
          "Перекидной клапан с боковым выходом",
          "Перекидной клапан большого сечения со штурвалом",
          "Двухходовой клапан со штурвалом",
          "Перекидной клапан с поворотным приводом",
          "Перекидной клапан с наклонным выходом",
          "Перекидные клапаны, установленные в ряд на предприятии",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о перекидных клапанах",
        items: [
          {
            question: "Для чего нужен перекидной клапан?",
            answer: "Он направляет сыпучий материал с одного входа в одну из двух выходных линий. Заслонка закрывает один выход и открывает другой.",
          },
          {
            question: "Как приводится заслонка?",
            answer: "Заслонка перемещается штурвалом или рычагом, пневмоцилиндром или поворотным приводом. Выбор зависит от частоты переключений и требований автоматики.",
          },
          {
            question: "Чем перекидной клапан отличается от шиберной задвижки?",
            answer: "Перекидной клапан направляет поток между двумя линиями, а шиберная задвижка открывает или перекрывает поток в одном отверстии скользящей пластиной.",
          },
          {
            question: "Что применяется для более чем двух линий?",
            answer: "Для выбора из многих выходов применяется поворотный распределитель либо перекидные клапаны устанавливаются последовательно по схеме линии.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, расход, сечение входа, углы выходов, тип привода и требования к автоматике.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на перекидной клапан",
        text: "Сообщите продукт, сечение линии и расположение выходов — вместе определим перекидной клапан.",
        mailSubject: "Запрос предложения: перекидной клапан",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и абразивность", "Расход", "Сечение входа и углы выходов", "Тип привода (ручной, пневматический, электрический)", "Сигнал положения и автоматика"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на перекидной клапан.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Расход (т/ч):",
          "Сечение входа:",
          "Тип привода:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "صمامات التحويل ذات البوابة القلابة للمواد السائبة",
        description:
          "صمامات تحويل ثنائية الاتجاه ببوابة قلابة توجّه المادة السائبة من مدخل واحد إلى أحد خطين، بتشغيل يدوي أو هوائي أو كهربائي ومفاتيح موضع.",
      },
      breadcrumbLabel: "صمامات التحويل",
      h1: "صمامات التحويل ذات البوابة القلابة – توجيه المواد السائبة في اتجاهين",
      productCategory: "صمام تحويل ثنائي الاتجاه ببوابة قلابة",
      overview: {
        imageAlt: "صمام تحويل ببوابة قلابة بمدخل علوي ومخرجين سفليين",
        tagline: "صمام التحويل",
        keyFacts: [
          { label: "المهمة", value: "توجيه التدفق إلى أحد مخرجين" },
          { label: "الآلية", value: "بوابة تدور على عمود" },
          { label: "التشغيل", value: "يدوي أو هوائي أو كهربائي" },
          { label: "الموضع", value: "مراقبة بمفاتيح نهاية المشوار" },
        ],
        title: "توجيه متحكم به من مدخل واحد إلى خطين",
        paragraphs: [
          "صمام التحويل ذو البوابة القلابة معدة تدفق توجّه المادة السائبة من مخرج الناقل أو الرافعة أو القادوس إلى أحد خطي المخرج؛ إذ تغلق البوابة الدائرة على عمود داخل الجسم أحد المخرجين وتفتح الآخر، فينساب المنتج بالجاذبية إلى الخط المفتوح.",
          "تتحرك البوابة بين موضعيها الطرفيين بعجلة يدوية أو ذراع أو أسطوانة هوائية أو مشغل دوار، وتُبلغ مفاتيح نهاية المشوار نظام الأتمتة بالمخرج الذي ضُبطت عليه البوابة.",
          "يُحدَّد مقطع الجسم وشكل البوابة وزوايا المخارج وفق تدفق المنتج، وتُصمم أسطح ارتكاز البوابة للحد من تسرب المنتج وتراكمه، مع أجزاء تآكل قابلة للاستبدال.",
        ],
        note: "يوجه صمام التحويل التدفق بين خطين، أما فتح التدفق وقطعه فيتم بالبوابة المنزلقة، وعند الحاجة إلى الاختيار بين مخارج عديدة يُفضَّل الموزع الدوار.",
      },
      process: {
        title: "تدفق العملية في صمام التحويل",
        intro:
          "يوضح المخطط وصول المنتج إلى مدخل الصمام وضبط البوابة على المخرج المختار ونقل المنتج إلى الخط المعني، بينما الناقل والرافعة والخطوط المستهدفة معدات منفصلة.",
        note: "يُغيَّر موضع البوابة بعد إيقاف التلقيم لا أثناء التدفق، حتى لا تعمل البوابة ضد حمل المنتج.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "التدفق إلى المدخل", text: "يصل المنتج إلى مدخل الصمام من مخرج الناقل أو الرافعة أو القادوس." },
          { title: "موضع البوابة", text: "يضبط المشغل البوابة على أحد موضعيها الطرفيين فيُغلق المخرج الآخر." },
          { title: "تأكيد الموضع", text: "يؤكد مفتاح نهاية المشوار أن البوابة عند المخرج الصحيح." },
          { title: "النقل إلى الخط", text: "ينساب المنتج بالجاذبية عبر المخرج المفتوح إلى الخط المختار." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في صمام التحويل",
          svgDesc: "خط المنتج: مخرج الناقل أو الرافعة، صمام التحويل ثنائي الاتجاه وخطا المخرج.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "ناقل / رافعة", sub: "مدخل واحد" }],
          drum: { title: "صمام التحويل", sub: "اختيار المخرج بالبوابة" },
          after: [
            { title: "المخرج A", sub: "الخط 1" },
            { title: "المخرج B", sub: "الخط 2" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام صمامات التحويل",
        items: [
          {
            title: "التوجيه عند مخارج الرافعات والنواقل",
            text: "إرسال المنتج القادم من الرافعة أو الناقل إلى خطين مختلفين، مع توصيل الصمام مباشرة بمخرج معدة النقل.",
            imageAlt: "صمامات تحويل مركبة في صف أسفل خط نقل",
            linkLabel: "رافعة القواديس بالسلاسل",
          },
          {
            title: "اختيار خطوط القواديس والصوامع",
            text: "أخذ المنتج من صف مخارج القواديس أو الصوامع إلى أحد خطين، مع توصيل مفاتيح نهاية المشوار لكل صمام بنظام الأتمتة.",
            imageAlt: "صمامات تحويل بمفاتيح موضع وأنابيب مخارج",
            linkLabel: "أنظمة الصوامع",
          },
          {
            title: "فصل المنتج والراجع في خطوط الأسمدة",
            text: "توجيه المنتج الحبيبي بين خط المنتج النهائي وخط الراجع، مع جعل البوابة وأسطح الارتكاز قابلة للاستبدال في المنتجات الكاشطة.",
            imageAlt: "حبيبات سماد DAP",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع صمامات التحويل حسب المشروع",
        intro:
          "تصمم PRO MAKINA صمامات التحويل وفق المنتج ومقطع التدفق وزوايا المخارج ونوع التشغيل ومتطلبات التحكم في الموضع، مع تصميم الجسم والبوابة ومحامل العمود والإحكام وأجزاء التآكل معًا.",
        highlights: ["جسم بمدخل واحد ومخرجين", "بوابة تدور على عمود", "تشغيل يدوي أو هوائي أو كهربائي", "مفاتيح نهاية المشوار"],
        figureAlt: "صمام تحويل ثنائي الاتجاه بأسطوانة هوائية ومفتاح موضع",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية والكاشطية وقابلية الالتصاق." },
          { title: "المقطع والزوايا", text: "مقطع المدخل وزوايا المخارج وترتيب الخطوط الموصولة." },
          { title: "شكل البوابة", text: "مقاس البوابة وأسطح الارتكاز والإحكام ضد تسرب المنتج." },
          { title: "التشغيل", text: "عجلة يدوية أو ذراع أو أسطوانة هوائية أو مشغل كهربائي." },
          { title: "التحكم", text: "مفاتيح نهاية المشوار وإشارات الأتمتة وإمكانية الصيانة." },
        ],
        dataNote: "يُحدَّد المقطع وزوايا المخارج ومقاسات المشغل من بيانات المنتج والخط، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور صمامات التحويل",
        captions: [
          "صمامات تحويل بمفاتيح موضع",
          "صمامات تحويل ثنائية الاتجاه جاهزة",
          "صمام تحويل بمخرج جانبي",
          "صمام تحويل كبير المقطع بعجلة يدوية",
          "صمام ثنائي الاتجاه يعمل بعجلة يدوية",
          "صمام تحويل بمشغل دوار",
          "صمام تحويل بمخرج مائل",
          "صمامات تحويل مركبة في صف داخل منشأة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول صمامات التحويل",
        items: [
          {
            question: "ما استخدام صمام التحويل ذي البوابة القلابة؟",
            answer: "يوجه المادة السائبة من مدخل واحد إلى أحد خطي المخرج، إذ تغلق البوابة أحد المخرجين وتفتح الآخر.",
          },
          {
            question: "كيف تُشغَّل البوابة؟",
            answer: "تتحرك البوابة بعجلة يدوية أو ذراع أو أسطوانة هوائية أو مشغل دوار، ويعتمد الاختيار على تكرار التبديل ومتطلبات الأتمتة.",
          },
          {
            question: "ما الفرق بين صمام التحويل والبوابة المنزلقة؟",
            answer: "يوجه صمام التحويل التدفق بين خطين، بينما تفتح البوابة المنزلقة التدفق أو تقطعه في فتحة واحدة بلوح منزلق.",
          },
          {
            question: "ماذا يُستخدم لأكثر من خطين؟",
            answer: "يُستخدم الموزع الدوار للاختيار بين مخارج عديدة، أو تُركَّب صمامات التحويل على التوالي وفق ترتيب الخط.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات ومعدل التدفق ومقطع المدخل وزوايا المخارج ونوع التشغيل ومتطلبات الأتمتة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لصمام التحويل",
        text: "شاركنا منتجك ومقطع الخط وترتيب المخارج، لنحدد معًا صمام التحويل المناسب.",
        mailSubject: "طلب عرض سعر: صمام تحويل",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات والكاشطية", "معدل التدفق", "مقطع المدخل وزوايا المخارج", "نوع التشغيل (يدوي، هوائي، كهربائي)", "إشارة الموضع والأتمتة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لصمام تحويل.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "معدل التدفق (طن/ساعة):",
          "مقطع المدخل:",
          "نوع التشغيل:",
          "الأتمتة:",
        ],
      },
    },
  },
};
