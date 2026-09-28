import type { DrumPageConfig } from "../types";

// Sürgülü kapaklar: mevcut tanım "silo, bunker, helezon ve konveyör çıkışlarında akışı durdurmak/başlatmak; manuel kol, elektrik motoru veya
// pnömatik piston". Görsellerde pnömatik silindirli ve valf/konum algılayıcılı kapaklar (surgu1, 7, 8, 9, 11), kramayer-volanlı manuel kapak
// ve bunker ile helezon arasındaki montaj (surgu3, 4), bunker altı (surgu5/6) ve sıralı boşaltma kapakları (surgu2) görülür. surgu6, surgu5
// ile aynı olduğu için kullanılmadı. Sürgülü kapak tartım/dozaj ekipmanı olarak anlatılmaz; ara konum yalnız akışı kısmak içindir.
// Açıklık ölçüsü, strok veya kapasite verilmez. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/surgu kapak/${file}`;

export const slideGatesPage: DrumPageConfig = {
  key: "slideGates",
  group: "auxiliaryFlow",
  trSlug: "surgulu-kapaklar",
  mainImage: img("surgu7.jpg"),
  applications: [
    { image: img("surgu5.jpg"), link: "bunkersHoppers" },
    { image: img("surgu4.jpg"), link: "screwConveyor" },
    { image: img("surgu2.jpg"), link: "chainConveyor" },
  ],
  figure: img("surgu3.jpg"),
  gallery: [img("surgu1.jpg"), img("surgu9.jpg"), img("surgu11.png"), img("surgu8.jpg"), img("surgu10.png")],
  sectors: ["fertilizerPlants", "mining"],
  resources: ["bunkersHoppers", "siloSystems", "flapDiverters", "auxiliaryFlow"],
  machines: ["storageSystems", "conveying", "dosingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Sürgülü Kapak | Silo ve Bunker Altı Pnömatik Sürgülü Kapak | PRO MAKİNA",
        description:
          "Silo, bunker ve hazne altında dökme malzeme akışını açıp kesen sürgülü kapaklar. Manuel, pnömatik veya motorlu tahrik, konum algılama ve aşınma dayanımı.",
      },
      breadcrumbLabel: "Sürgülü Kapaklar",
      h1: "Sürgülü Kapaklar – Silo ve Bunker Altında Dökme Malzeme Akışını Açma ve Kesme",
      productCategory: "Sürgülü Kapak",
      overview: {
        imageAlt: "Dikdörtgen gövdeli, pnömatik silindirli sürgülü kapak",
        tagline: "Sürgülü Kapak",
        keyFacts: [
          { label: "Görev", value: "Tek ağızdaki akışın açılması ve kesilmesi" },
          { label: "Mekanizma", value: "Gövde içinde kayan sürgü plakası" },
          { label: "Tahrik", value: "Manuel, pnömatik veya motorlu" },
          { label: "Konum", value: "Açık / kapalı konum algılama" },
        ],
        title: "Silo, Bunker ve Hazne Çıkışında Akış Kontrolü",
        paragraphs: [
          "Sürgülü kapak, silo, bunker veya hazne çıkışındaki dökme malzeme akışını açmak ve kesmek için kullanılan akış ekipmanıdır. Çıkış flanşları arasına yerleşen gövde içinde sürgü plakası kayar; plaka çekildiğinde ağız açılır, ürün alttaki helezon, konveyör veya elevatöre akar.",
          "Sürgü plakası manuel kol veya kramayer-volan, pnömatik silindir ya da motorlu tahrikle hareket ettirilir. Açık ve kapalı konum algılayıcıları kapağın durumunu otomasyona bildirir; alt ekipman çalışmadan kapak açılmaz.",
          "Plaka kapanırken ağızdaki ürün kolonunu keser. Bu nedenle gövde, kızaklar ve plaka kenarı ürünün tane boyutu, yoğunluğu ve aşındırıcılığına göre tasarlanır; ürün sıkışmasını azaltacak boşluk ve temizleme detayları eklenir.",
        ],
        note: "Sürgülü kapak akışı açar veya keser; ara konumda akışı kısmak mümkün olsa da debiyi ölçmez. Hassas dozaj için alttaki helezon, bant kantarı veya dozaj ekipmanı kullanılır.",
      },
      process: {
        title: "Sürgülü Kapak Proses Akışı",
        intro:
          "Şema, dökme ürünün silo veya bunkerde beklediği, sürgülü kapağın açıldığı, ürünün alt ekipmana aktarıldığı ve gerektiğinde kapağın kapanarak akışı kestiği akışı gösterir. Silo, bunker ve helezon ayrı ekipmanlardır.",
        note: "Bakım veya arıza durumunda kapak kapatılarak silo ya da bunker boşaltılmadan alt ekipmana erişilebilir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Ürün bekler", text: "Dökme ürün silo, bunker veya hazne içinde bulunur; kapak kapalıdır." },
          { title: "Kapak açılır", text: "Tahrik sürgü plakasını çeker; açık konum algılayıcısı sinyal verir." },
          { title: "Alt ekipmana akış", text: "Ürün ağızdan helezon, konveyör veya elevatöre yerçekimiyle akar." },
          { title: "Akış kesilir", text: "Gerektiğinde plaka kapanarak ürün kolonunu keser ve akış durur." },
        ],
        flow: {
          svgTitle: "Sürgülü kapak proses akış şeması",
          svgDesc: "Ürün hattı: silo veya bunker, sürgülü kapak ve alttaki helezon, konveyör veya elevatör.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Silo / bunker", sub: "Dökme ürün" }],
          drum: { title: "SÜRGÜLÜ KAPAK", sub: "akışı açma ve kesme" },
          after: [{ title: "Helezon / konveyör", sub: "Alt ekipman" }],
        },
      },
      applications: {
        title: "Sürgülü Kapak Uygulama Alanları",
        items: [
          {
            title: "Silo ve Bunker Altı",
            text: "Silo veya bunker çıkışında akışın açılıp kesilmesi. Kapak, çıkış flanşı ile alt ekipman arasına yerleşir.",
            imageAlt: "Bunker çıkışı altında sürgülü kapak ve taşıma ekipmanı",
            linkLabel: "Bunker ve Hazneler",
          },
          {
            title: "Helezon Besleme Öncesi",
            text: "Hazneden helezona geçişte akışın kontrolü. Kapak kapatılarak helezon bakımı hazne boşaltılmadan yapılabilir.",
            imageAlt: "Hazne ile helezon arasında manuel sürgülü kapak",
            linkLabel: "Helezon Konveyörler",
          },
          {
            title: "Konveyör Boyunca Boşaltma Noktaları",
            text: "Konveyör gövdesi altında sıralı boşaltma ağızlarının seçilerek açılması. Her kapak ayrı konum algılayıcısıyla izlenir.",
            imageAlt: "Konveyör gövdesi altında sıralı boşaltma kapakları",
            linkLabel: "Zincirli Konveyörler",
          },
        ],
      },
      design: {
        title: "Projeye Özel Sürgülü Kapak Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA sürgülü kapakları ürün, açıklık ölçüsü, bağlantı flanşları, tahrik tipi ve konum kontrolü ihtiyacına göre projelendirir. Gövde, sürgü plakası, kızaklar, sızdırmazlık ve aşınma yüzeyleri birlikte tasarlanır.",
        highlights: ["Flanşlar arası kompakt gövde", "Kızaklı sürgü plakası", "Manuel, pnömatik veya motorlu tahrik", "Açık / kapalı konum algılama"],
        figureAlt: "Hazne altında kramayer-volanlı sürgülü kapak ve helezon bağlantısı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, akışkanlık ve aşındırıcılık." },
          { title: "Açıklık ve Flanş", text: "Çıkış ağzı ölçüsü, üst ve alt bağlantı flanşları." },
          { title: "Plaka ve Kızak", text: "Plaka kalınlığı, kızak yapısı ve ürün sıkışmasına karşı detaylar." },
          { title: "Tahrik", text: "Manuel kol veya kramayer-volan, pnömatik silindir ya da motorlu tahrik." },
          { title: "Kontrol ve Bakım", text: "Konum algılayıcıları, otomasyon sinyalleri ve bakım erişimi." },
        ],
        dataNote: "Açıklık ölçüsü, strok ve tahrik boyutu ürün ve ekipman verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Sürgülü Kapak Fotoğraf Galerisi",
        captions: [
          "Konum algılayıcılı ve valfli pnömatik sürgülü kapaklar",
          "Uzun stroklu pnömatik sürgülü kapak",
          "Dikey montajlı pnömatik sürgülü kapak",
          "Taşıma gövdesi altında pnömatik sürgülü kapak",
          "Y parçada iki sürgülü kapakla hat seçimi",
        ],
      },
      faq: {
        title: "Sürgülü Kapaklar Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Sürgülü kapak ne işe yarar?",
            answer: "Silo, bunker veya hazne çıkışındaki dökme malzeme akışını sürgü plakasıyla açar veya keser.",
          },
          {
            question: "Hangi tahrik seçenekleri kullanılır?",
            answer: "Seyrek kullanımda manuel kol veya kramayer-volan, otomasyonlu hatlarda pnömatik silindir veya motorlu tahrik kullanılır.",
          },
          {
            question: "Sürgülü kapak dozajlama yapar mı?",
            answer: "Hayır. Kapak akışı açar veya keser; ara konumda akışı kısmak debiyi ölçmek anlamına gelmez. Hassas dozaj için helezon, bant kantarı veya dozaj ekipmanı kullanılır.",
          },
          {
            question: "Klapeden farkı nedir?",
            answer: "Sürgülü kapak tek bir ağızdaki akışı açar veya keser. Klape ise akışı iki çıkış hattından birine yönlendirir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, çıkış ağzı ölçüsü, bağlantı flanşları, tahrik tipi ve otomasyon ihtiyacı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Sürgülü kapak için teknik teklif alın",
        text: "Ürününüz, çıkış ağzı ölçünüz ve tahrik ihtiyacınıza göre sürgülü kapağı birlikte netleştirelim.",
        mailSubject: "Sürgülü Kapak Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve akışkanlık", "Çıkış ağzı ölçüsü", "Üst ve alt bağlantı flanşları", "Tahrik tipi (manuel, pnömatik, motorlu)", "Konum sinyali ve otomasyon"],
        inquiryLines: [
          "Merhaba, sürgülü kapak için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Çıkış ağzı ölçüsü (mm):",
          "Bağlanacak ekipman:",
          "Tahrik tipi:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Slide Gates | Pneumatic Slide Gates for Silos and Bunkers",
        description:
          "Slide gates that open and shut off bulk flow below silos, bunkers and hoppers. Manual, pneumatic or motorised actuation, position sensing, wear resistance.",
      },
      breadcrumbLabel: "Slide Gates",
      h1: "Slide Gates – Opening and Shutting Off Bulk Flow Below Silos and Bunkers",
      productCategory: "Slide Gate",
      overview: {
        imageAlt: "Rectangular slide gate with pneumatic cylinder",
        tagline: "Slide Gate",
        keyFacts: [
          { label: "Duty", value: "Opening and shutting off flow at one opening" },
          { label: "Mechanism", value: "Slide plate moving inside the body" },
          { label: "Actuation", value: "Manual, pneumatic or motorised" },
          { label: "Position", value: "Open / closed position sensing" },
        ],
        title: "Flow Control at Silo, Bunker and Hopper Outlets",
        paragraphs: [
          "A slide gate is flow equipment used to open and shut off bulk material flow at a silo, bunker or hopper outlet. A slide plate moves inside the body fitted between the outlet flanges; when the plate is withdrawn the opening clears and product flows to the screw, conveyor or elevator below.",
          "The slide plate is moved by a manual lever or rack-and-pinion handwheel, a pneumatic cylinder or a motorised drive. Open and closed position sensors report the gate status to the automation; the gate is not opened unless the downstream equipment is running.",
          "When closing, the plate cuts through the product column at the opening. Body, guides and plate edge are therefore designed for the product's particle size, density and abrasiveness, with clearances and cleaning details that reduce jamming.",
        ],
        note: "A slide gate opens or shuts off the flow; although it can throttle the flow in an intermediate position, it does not measure the rate. For accurate dosing, the screw, weigh belt feeder or dosing equipment below is used.",
      },
      process: {
        title: "Slide Gate Process Flow",
        intro:
          "The diagram shows bulk product held in a silo or bunker, the slide gate opening, product transferred to the downstream equipment and the gate closing to shut off the flow when required. Silo, bunker and screw are separate equipment.",
        note: "For maintenance or a fault, closing the gate gives access to the downstream equipment without emptying the silo or bunker.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Product held", text: "Bulk product is held in a silo, bunker or hopper; the gate is closed." },
          { title: "Gate opens", text: "The actuator withdraws the slide plate; the open position sensor signals." },
          { title: "Flow downstream", text: "Product flows by gravity through the opening to a screw, conveyor or elevator." },
          { title: "Flow shut off", text: "When required, the plate closes, cuts the product column and the flow stops." },
        ],
        flow: {
          svgTitle: "Slide gate process flow diagram",
          svgDesc: "Product line: silo or bunker, slide gate and the screw, conveyor or elevator below.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Silo / bunker", sub: "Bulk product" }],
          drum: { title: "SLIDE GATE", sub: "opening and shutting off flow" },
          after: [{ title: "Screw / conveyor", sub: "Downstream equipment" }],
        },
      },
      applications: {
        title: "Slide Gate Applications",
        items: [
          {
            title: "Below Silos and Bunkers",
            text: "Opening and shutting off the flow at a silo or bunker outlet. The gate sits between the outlet flange and the downstream equipment.",
            imageAlt: "Slide gate and conveying equipment below a bunker outlet",
            linkLabel: "Bunkers & Hoppers",
          },
          {
            title: "Ahead of Screw Feeding",
            text: "Controlling the flow from a hopper into a screw. Closing the gate allows screw maintenance without emptying the hopper.",
            imageAlt: "Manual slide gate between a hopper and a screw conveyor",
            linkLabel: "Screw Conveyor",
          },
          {
            title: "Discharge Points Along a Conveyor",
            text: "Selectively opening a row of discharge openings below a conveyor casing. Each gate is monitored by its own position sensor.",
            imageAlt: "Row of discharge gates below a conveyor casing",
            linkLabel: "Chain Conveyor",
          },
        ],
      },
      design: {
        title: "Custom Slide Gate Design and Manufacturing",
        intro:
          "PRO MAKINA engineers slide gates around the product, opening size, connection flanges, actuation type and position control requirement. Body, slide plate, guides, sealing and wear surfaces are designed together.",
        highlights: ["Compact body between flanges", "Guided slide plate", "Manual, pneumatic or motorised actuation", "Open / closed position sensing"],
        figureAlt: "Rack-and-pinion slide gate with handwheel below a hopper connected to a screw",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, flowability and abrasiveness." },
          { title: "Opening and Flanges", text: "Outlet opening size, upper and lower connection flanges." },
          { title: "Plate and Guides", text: "Plate thickness, guide design and details against product jamming." },
          { title: "Actuation", text: "Manual lever or rack-and-pinion handwheel, pneumatic cylinder or motorised drive." },
          { title: "Control and Maintenance", text: "Position sensors, automation signals and maintenance access." },
        ],
        dataNote: "Opening size, stroke and actuator size are defined from product and equipment data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Slide Gate Photo Gallery",
        captions: [
          "Pneumatic slide gates with position sensors and valves",
          "Long-stroke pneumatic slide gate",
          "Vertically mounted pneumatic slide gate",
          "Pneumatic slide gate below a conveying casing",
          "Line selection with two slide gates on a Y-piece",
        ],
      },
      faq: {
        title: "Slide Gates FAQ",
        items: [
          {
            question: "What is a slide gate used for?",
            answer: "It opens or shuts off bulk material flow at a silo, bunker or hopper outlet with a slide plate.",
          },
          {
            question: "Which actuation options are used?",
            answer: "A manual lever or rack-and-pinion handwheel for infrequent operation; a pneumatic cylinder or motorised drive for automated lines.",
          },
          {
            question: "Does a slide gate dose product?",
            answer: "No. The gate opens or shuts off the flow; throttling in an intermediate position does not mean the rate is measured. For accurate dosing a screw, weigh belt feeder or dosing equipment is used.",
          },
          {
            question: "How does it differ from a flap diverter?",
            answer: "A slide gate opens or shuts off the flow at a single opening. A flap diverter directs the flow to one of two outlet lines.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, outlet opening size, connection flanges, actuation type and automation requirements.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a slide gate",
        text: "Share your product, outlet opening size and actuation requirement, and we will define the slide gate together with you.",
        mailSubject: "Slide Gate Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and flowability", "Outlet opening size", "Upper and lower connection flanges", "Actuation type (manual, pneumatic, motorised)", "Position signal and automation"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a slide gate.",
          "",
          "Product:",
          "Bulk density:",
          "Outlet opening (mm):",
          "Connected equipment:",
          "Actuation type:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Шиберные задвижки для силосов и бункеров – пневматические и ручные",
        description:
          "Шиберные задвижки открывают и перекрывают поток сыпучих под силосами, бункерами и воронками. Ручной, пневматический или электропривод, датчики положения.",
      },
      breadcrumbLabel: "Шиберные задвижки",
      h1: "Шиберные задвижки – открытие и перекрытие потока сыпучих под силосами и бункерами",
      productCategory: "Шиберная задвижка",
      overview: {
        imageAlt: "Прямоугольная шиберная задвижка с пневмоцилиндром",
        tagline: "Шиберная задвижка",
        keyFacts: [
          { label: "Назначение", value: "Открытие и перекрытие потока в одном отверстии" },
          { label: "Механизм", value: "Шиберная пластина, скользящая в корпусе" },
          { label: "Привод", value: "Ручной, пневматический или электрический" },
          { label: "Положение", value: "Датчики «открыто / закрыто»" },
        ],
        title: "Управление потоком на выпуске силоса, бункера и воронки",
        paragraphs: [
          "Шиберная задвижка — оборудование потока для открытия и перекрытия потока сыпучего материала на выпуске силоса, бункера или воронки. В корпусе между фланцами выпуска скользит шиберная пластина; при её выдвижении отверстие открывается, и продукт идёт на шнек, конвейер или элеватор ниже.",
          "Пластина перемещается ручным рычагом или реечным штурвалом, пневмоцилиндром или электроприводом. Датчики положения «открыто» и «закрыто» передают состояние задвижки в автоматику; задвижка не открывается, пока не работает нижестоящее оборудование.",
          "При закрытии пластина перерезает столб продукта в отверстии. Поэтому корпус, направляющие и кромка пластины рассчитываются по крупности, плотности и абразивности продукта, с зазорами и элементами очистки против заклинивания.",
        ],
        note: "Шиберная задвижка открывает или перекрывает поток; в промежуточном положении она может ограничивать поток, но не измеряет расход. Для точного дозирования используются шнек, весовой ленточный дозатор или дозирующее оборудование.",
      },
      process: {
        title: "Технологическая схема шиберной задвижки",
        intro:
          "Схема показывает сыпучий продукт в силосе или бункере, открытие задвижки, передачу продукта на нижестоящее оборудование и закрытие задвижки для перекрытия потока. Силос, бункер и шнек — отдельное оборудование.",
        note: "При обслуживании или неисправности закрытие задвижки даёт доступ к нижестоящему оборудованию без опорожнения силоса или бункера.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Продукт в ёмкости", text: "Сыпучий продукт находится в силосе, бункере или воронке; задвижка закрыта." },
          { title: "Задвижка открывается", text: "Привод выдвигает пластину; датчик «открыто» подаёт сигнал." },
          { title: "Поток вниз", text: "Продукт самотёком идёт через отверстие на шнек, конвейер или элеватор." },
          { title: "Перекрытие", text: "При необходимости пластина закрывается, перерезает столб продукта, поток останавливается." },
        ],
        flow: {
          svgTitle: "Технологическая схема шиберной задвижки",
          svgDesc: "Линия продукта: силос или бункер, шиберная задвижка и расположенные ниже шнек, конвейер или элеватор.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Силос / бункер", sub: "Сыпучий продукт" }],
          drum: { title: "ШИБЕРНАЯ ЗАДВИЖКА", sub: "открытие и перекрытие" },
          after: [{ title: "Шнек / конвейер", sub: "Нижестоящее оборудование" }],
        },
      },
      applications: {
        title: "Области применения шиберных задвижек",
        items: [
          {
            title: "Под силосами и бункерами",
            text: "Открытие и перекрытие потока на выпуске силоса или бункера. Задвижка устанавливается между фланцем выпуска и нижестоящим оборудованием.",
            imageAlt: "Шиберная задвижка и транспортное оборудование под выпуском бункера",
            linkLabel: "Бункеры и воронки",
          },
          {
            title: "Перед подачей в шнек",
            text: "Управление потоком из воронки в шнек. Закрытая задвижка позволяет обслуживать шнек без опорожнения воронки.",
            imageAlt: "Ручная шиберная задвижка между воронкой и шнековым конвейером",
            linkLabel: "Шнековый конвейер",
          },
          {
            title: "Точки выгрузки вдоль конвейера",
            text: "Выборочное открытие ряда разгрузочных отверстий под корпусом конвейера. Каждая задвижка контролируется своим датчиком положения.",
            imageAlt: "Ряд разгрузочных задвижек под корпусом конвейера",
            linkLabel: "Цепной конвейер",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление шиберных задвижек",
        intro:
          "PRO MAKINA проектирует шиберные задвижки исходя из продукта, размера отверстия, присоединительных фланцев, типа привода и требований к контролю положения. Корпус, пластина, направляющие, уплотнения и износостойкие поверхности разрабатываются совместно.",
        highlights: ["Компактный корпус между фланцами", "Пластина в направляющих", "Ручной, пневматический или электропривод", "Датчики «открыто / закрыто»"],
        figureAlt: "Реечная шиберная задвижка со штурвалом под воронкой и подключение шнека",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность, сыпучесть и абразивность." },
          { title: "Отверстие и фланцы", text: "Размер выпускного отверстия, верхний и нижний присоединительные фланцы." },
          { title: "Пластина и направляющие", text: "Толщина пластины, конструкция направляющих и меры против заклинивания." },
          { title: "Привод", text: "Ручной рычаг или реечный штурвал, пневмоцилиндр или электропривод." },
          { title: "Управление и обслуживание", text: "Датчики положения, сигналы автоматики и доступ для обслуживания." },
        ],
        dataNote: "Размер отверстия, ход и размер привода определяются по данным продукта и оборудования; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея шиберных задвижек",
        captions: [
          "Пневматические шиберные задвижки с датчиками положения и клапанами",
          "Пневматическая задвижка с длинным ходом",
          "Пневматическая задвижка вертикального монтажа",
          "Пневматическая задвижка под транспортным корпусом",
          "Выбор линии двумя задвижками на тройнике",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о шиберных задвижках",
        items: [
          {
            question: "Для чего нужна шиберная задвижка?",
            answer: "Она открывает или перекрывает поток сыпучего материала на выпуске силоса, бункера или воронки с помощью скользящей пластины.",
          },
          {
            question: "Какие варианты привода применяются?",
            answer: "При редком использовании — ручной рычаг или реечный штурвал; на автоматизированных линиях — пневмоцилиндр или электропривод.",
          },
          {
            question: "Дозирует ли шиберная задвижка продукт?",
            answer: "Нет. Задвижка открывает или перекрывает поток; ограничение потока в промежуточном положении не означает измерения расхода. Для точного дозирования применяются шнек, весовой ленточный дозатор или дозирующее оборудование.",
          },
          {
            question: "Чем она отличается от перекидного клапана?",
            answer: "Шиберная задвижка открывает или перекрывает поток в одном отверстии, а перекидной клапан направляет поток в одну из двух линий.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, размер выпускного отверстия, присоединительные фланцы, тип привода и требования к автоматике.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на шиберную задвижку",
        text: "Сообщите продукт, размер выпускного отверстия и требования к приводу — вместе определим шиберную задвижку.",
        mailSubject: "Запрос предложения: шиберная задвижка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и сыпучесть", "Размер выпускного отверстия", "Верхний и нижний фланцы", "Тип привода (ручной, пневматический, электрический)", "Сигнал положения и автоматика"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на шиберную задвижку.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Отверстие (мм):",
          "Присоединяемое оборудование:",
          "Тип привода:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "البوابات المنزلقة | بوابات هوائية ويدوية أسفل الصوامع والقواديس",
        description:
          "بوابات منزلقة تفتح تدفق المواد السائبة وتقطعه أسفل الصوامع والقواديس والأحواض، بتشغيل يدوي أو هوائي أو كهربائي وكشف الموضع ومقاومة التآكل.",
      },
      breadcrumbLabel: "البوابات المنزلقة",
      h1: "البوابات المنزلقة – فتح تدفق المواد السائبة وقطعه أسفل الصوامع والقواديس",
      productCategory: "بوابة منزلقة",
      overview: {
        imageAlt: "بوابة منزلقة مستطيلة بأسطوانة هوائية",
        tagline: "البوابة المنزلقة",
        keyFacts: [
          { label: "المهمة", value: "فتح التدفق وقطعه عند فتحة واحدة" },
          { label: "الآلية", value: "لوح منزلق داخل الجسم" },
          { label: "التشغيل", value: "يدوي أو هوائي أو كهربائي" },
          { label: "الموضع", value: "كشف موضعي الفتح والإغلاق" },
        ],
        title: "التحكم في التدفق عند مخارج الصوامع والقواديس والأحواض",
        paragraphs: [
          "البوابة المنزلقة معدة تدفق تُستخدم لفتح تدفق المادة السائبة وقطعه عند مخرج الصومعة أو القادوس أو الحوض؛ إذ ينزلق لوح داخل الجسم المركب بين شفتي المخرج، وعند سحبه تنفتح الفتحة وينساب المنتج إلى الناقل اللولبي أو الناقل أو الرافعة في الأسفل.",
          "يتحرك اللوح بذراع يدوية أو عجلة بترس وجريدة مسننة أو أسطوانة هوائية أو إدارة كهربائية، وتُبلغ حساسات موضعي الفتح والإغلاق نظام الأتمتة بحالة البوابة، ولا تُفتح البوابة ما لم تكن المعدة التالية تعمل.",
          "عند الإغلاق يقطع اللوح عمود المنتج في الفتحة، لذا يُصمم الجسم والمجاري وحافة اللوح وفق حجم حبيبات المنتج وكثافته وكاشطيته، مع خلوصات وتفاصيل تنظيف تقلل الانحشار.",
        ],
        note: "تفتح البوابة المنزلقة التدفق أو تقطعه، ورغم إمكانية خنق التدفق في موضع وسيط فإنها لا تقيس المعدل؛ وللجرعات الدقيقة يُستخدم الناقل اللولبي أو ميزان السير أو معدة الجرعات في الأسفل.",
      },
      process: {
        title: "تدفق العملية في البوابة المنزلقة",
        intro:
          "يوضح المخطط المادة السائبة داخل الصومعة أو القادوس وفتح البوابة ونقل المنتج إلى المعدة التالية ثم إغلاق البوابة لقطع التدفق عند الحاجة، بينما الصومعة والقادوس والناقل اللولبي معدات منفصلة.",
        note: "عند الصيانة أو العطل يتيح إغلاق البوابة الوصول إلى المعدة التالية دون تفريغ الصومعة أو القادوس.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "المنتج في الوعاء", text: "توجد المادة السائبة في الصومعة أو القادوس أو الحوض والبوابة مغلقة." },
          { title: "فتح البوابة", text: "يسحب المشغل اللوح فيعطي حساس الفتح إشارته." },
          { title: "التدفق إلى الأسفل", text: "ينساب المنتج بالجاذبية عبر الفتحة إلى ناقل لولبي أو ناقل أو رافعة." },
          { title: "قطع التدفق", text: "عند الحاجة يُغلق اللوح فيقطع عمود المنتج ويتوقف التدفق." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في البوابة المنزلقة",
          svgDesc: "خط المنتج: الصومعة أو القادوس، البوابة المنزلقة والناقل اللولبي أو الناقل أو الرافعة في الأسفل.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "صومعة / قادوس", sub: "مادة سائبة" }],
          drum: { title: "البوابة المنزلقة", sub: "فتح التدفق وقطعه" },
          after: [{ title: "لولبي / ناقل", sub: "المعدة التالية" }],
        },
      },
      applications: {
        title: "مجالات استخدام البوابات المنزلقة",
        items: [
          {
            title: "أسفل الصوامع والقواديس",
            text: "فتح التدفق وقطعه عند مخرج الصومعة أو القادوس، مع تركيب البوابة بين شفة المخرج والمعدة التالية.",
            imageAlt: "بوابة منزلقة ومعدة نقل أسفل مخرج قادوس",
            linkLabel: "القواديس والأحواض",
          },
          {
            title: "قبل تلقيم الناقل اللولبي",
            text: "التحكم في التدفق من الحوض إلى الناقل اللولبي، ويتيح إغلاق البوابة صيانة الناقل دون تفريغ الحوض.",
            imageAlt: "بوابة منزلقة يدوية بين حوض وناقل لولبي",
            linkLabel: "الناقل اللولبي",
          },
          {
            title: "نقاط التفريغ على امتداد الناقل",
            text: "فتح صف من فتحات التفريغ أسفل جسم الناقل بشكل انتقائي، مع مراقبة كل بوابة بحساس موضع خاص بها.",
            imageAlt: "صف من بوابات التفريغ أسفل جسم ناقل",
            linkLabel: "الناقل بالسلاسل",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع البوابات المنزلقة حسب المشروع",
        intro:
          "تصمم PRO MAKINA البوابات المنزلقة وفق المنتج ومقاس الفتحة وشفاه التوصيل ونوع التشغيل ومتطلبات التحكم في الموضع، مع تصميم الجسم واللوح والمجاري والإحكام وأسطح التآكل معًا.",
        highlights: ["جسم مدمج بين الشفاه", "لوح منزلق في مجارٍ", "تشغيل يدوي أو هوائي أو كهربائي", "كشف موضعي الفتح والإغلاق"],
        figureAlt: "بوابة منزلقة بعجلة وترس أسفل حوض موصولة بناقل لولبي",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية وقابلية الانسياب والكاشطية." },
          { title: "الفتحة والشفاه", text: "مقاس فتحة المخرج وشفتا التوصيل العلوية والسفلية." },
          { title: "اللوح والمجاري", text: "سماكة اللوح وتصميم المجاري وتفاصيل منع انحشار المنتج." },
          { title: "التشغيل", text: "ذراع يدوية أو عجلة بترس، أسطوانة هوائية أو إدارة كهربائية." },
          { title: "التحكم والصيانة", text: "حساسات الموضع وإشارات الأتمتة وإمكانية الصيانة." },
        ],
        dataNote: "يُحدَّد مقاس الفتحة والشوط وحجم المشغل من بيانات المنتج والمعدات، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور البوابات المنزلقة",
        captions: [
          "بوابات منزلقة هوائية بحساسات موضع وصمامات",
          "بوابة منزلقة هوائية طويلة الشوط",
          "بوابة منزلقة هوائية مركبة رأسيًا",
          "بوابة منزلقة هوائية أسفل جسم نقل",
          "اختيار الخط ببوابتين منزلقتين على قطعة Y",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول البوابات المنزلقة",
        items: [
          {
            question: "ما استخدام البوابة المنزلقة؟",
            answer: "تفتح تدفق المادة السائبة أو تقطعه عند مخرج الصومعة أو القادوس أو الحوض بواسطة لوح منزلق.",
          },
          {
            question: "ما خيارات التشغيل المستخدمة؟",
            answer: "ذراع يدوية أو عجلة بترس للاستخدام غير المتكرر، وأسطوانة هوائية أو إدارة كهربائية للخطوط المؤتمتة.",
          },
          {
            question: "هل تقوم البوابة المنزلقة بالجرعات؟",
            answer: "لا. تفتح البوابة التدفق أو تقطعه، وخنق التدفق في موضع وسيط لا يعني قياس المعدل؛ وللجرعات الدقيقة يُستخدم ناقل لولبي أو ميزان سير أو معدة جرعات.",
          },
          {
            question: "ما الفرق بينها وبين صمام التحويل؟",
            answer: "تفتح البوابة المنزلقة التدفق أو تقطعه عند فتحة واحدة، بينما يوجه صمام التحويل التدفق إلى أحد خطي المخرج.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات ومقاس فتحة المخرج وشفاه التوصيل ونوع التشغيل ومتطلبات الأتمتة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للبوابة المنزلقة",
        text: "شاركنا منتجك ومقاس فتحة المخرج ومتطلبات التشغيل، لنحدد معًا البوابة المنزلقة المناسبة.",
        mailSubject: "طلب عرض سعر: بوابة منزلقة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات وقابلية الانسياب", "مقاس فتحة المخرج", "شفتا التوصيل العلوية والسفلية", "نوع التشغيل (يدوي، هوائي، كهربائي)", "إشارة الموضع والأتمتة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لبوابة منزلقة.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "فتحة المخرج (مم):",
          "المعدة الموصولة:",
          "نوع التشغيل:",
          "الأتمتة:",
        ],
      },
    },
  },
};
