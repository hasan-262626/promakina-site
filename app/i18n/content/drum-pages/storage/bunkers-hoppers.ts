import type { DrumPageConfig } from "../types";

// Bunker ve hazneler: malzemenin kısa süreli tamponlanması, kabulü ve sonraki ekipmana kontrollü beslenmesi (mevcut
// "bunkersHoppers" rotası). Uzun süreli silo depolamasından ayrı tutulur. İç aşınma plakası, vibrasyon veya belirli bir
// besleyici standart sunulmaz; hacim, sac kalınlığı veya kapasite verilmez. Sürgülü kapak Yardımcı Ekipmanlar ürünüdür;
// bu grupta rota anahtarı olmadığından metinde bağlantısız anılır. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/bunker/${file}`;

export const bunkersHoppersPage: DrumPageConfig = {
  key: "bunkersHoppers",
  group: "storageSystems",
  trSlug: "bunker-ve-hazneler",
  mainImage: img("bunker2.jpg"),
  applications: [
    { image: img("bunker1.jpg"), link: "mining" },
    { image: "/images/kirici-uygulamalari/tas-ocagi-ayna.webp", link: "crushers" },
    { image: "/images/kurutma-uygulamalari/granul-gubre.webp", link: "dosingSystems" },
  ],
  figure: img("bunker12.jpg"),
  sectors: ["mining", "fertilizerPlants", "recycling"],
  resources: ["siloSystems", "teremiHopper", "dosingBeltScale", "storageSystems"],
  machines: ["conveying", "crushers", "dosingSystems", "screeningSystems"],
  texts: {
    tr: {
      meta: {
        title: "Bunker İmalatı | Hammadde ve Besleme Bunkeri | PRO MAKİNA",
        description:
          "Hammadde kabulü, tamponlama ve kontrollü besleme için endüstriyel bunker ve malzeme haznesi imalatı. Geometri ve alt besleme ürüne göre projelendirilir.",
      },
      breadcrumbLabel: "Bunker ve Hazneler",
      h1: "Bunker ve Hazneler – Hammadde Kabulü, Tamponlama ve Besleme",
      productCategory: "Endüstriyel Bunker",
      overview: {
        imageAlt: "Dört gözlü, piramidal alt bölümlü agrega besleme bunkeri",
        tagline: "Bunker ve Hazneler",
        keyFacts: [
          { label: "Görev", value: "Kısa süreli tamponlama ve kontrollü besleme" },
          { label: "Kabul", value: "Loader, kamyon veya konveyörle" },
          { label: "Geometri", value: "Duvar açıları ve alt bölüm ürün akışına göre" },
          { label: "Alt besleme", value: "Bant, helezon veya uygun besleyici" },
        ],
        title: "Proses Hattının Başında Kontrollü Malzeme Beslemesi",
        paragraphs: [
          "Bunker ve hazneler, hammaddenin hatta kabul edildiği, kısa süre tamponlandığı ve alttaki besleyici ile sonraki ekipmana düzenli verildiği ara depolama gövdeleridir. Loader, kamyon veya konveyörle gelen malzemenin kesikli gelişini, hattın sürekli beslenmesine dönüştürür.",
          "Bunker geometrisi malzemenin akış davranışına göre belirlenir. Yan duvar açıları ve konik ya da piramidal alt bölüm, malzemenin çıkışa düzenli inmesini sağlar; nemli ve yapışkan malzemelerde köprüleşme riski duvar açısı ve çıkış ağzı ölçüsüyle birlikte değerlendirilir.",
          "Alt çıkışa bantlı besleyici, helezon veya uygun başka bir besleyici bağlanır; akışı durdurmak ya da kesmek için sürgülü kapak kullanılabilir. Aşındırıcı malzemelerde darbe ve kayma bölgeleri, gerekirse aşınma plakalarıyla korunur.",
        ],
        note: "Bunker, uzun süreli depolama için değil, kabul ve besleme arasındaki tampon hacim içindir. Yüksek hacimli ve uzun süreli stok için silo sistemleri kullanılır.",
      },
      process: {
        title: "Bunker ve Hazne Proses Akışı",
        intro:
          "Şema, malzemenin bunkere kabul edildiği, tamponlandığı, alt çıkıştan kontrollü boşaltıldığı ve sonraki besleme veya taşıma ekipmanına aktarıldığı akışı gösterir. Besleyici, konveyör ve sonraki makine ayrı ekipmanlardır.",
        note: "Tampon hacim; malzemenin geliş biçimi ile hattın çekiş debisi arasındaki farka göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme kabulü", text: "Malzeme loader, kamyon veya konveyörle bunkerin üst ağzından alınır." },
          { title: "Tamponlama", text: "Bunker, kesikli gelen malzemeyi hattın sürekli çekişine göre dengeler." },
          { title: "Kontrollü alt boşaltma", text: "Malzeme konik veya piramidal alt bölümden çıkışa iner." },
          { title: "Sonraki ekipmana aktarım", text: "Alttaki besleyici malzemeyi konveyöre, kırıcıya veya dozaj ekipmanına verir." },
        ],
        flow: {
          svgTitle: "Bunker ve hazne proses akış şeması",
          svgDesc: "Malzeme hattı: malzeme kabulü, bunker, alt boşaltma ve besleyici, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Malzeme kabulü", sub: "Loader / kamyon / konveyör" }],
          drum: { title: "BUNKER", sub: "tamponlama" },
          after: [
            { title: "Alt boşaltma", sub: "Besleyici / sürgülü kapak" },
            { title: "Sonraki ekipman", sub: "Konveyör / kırıcı / dozaj" },
          ],
        },
      },
      applications: {
        title: "Bunker ve Hazne Uygulama Alanları",
        items: [
          {
            title: "Agrega ve Kum Besleme",
            text: "Agrega ve kumun gözlü bunkerlere alınıp alt besleyicilerle banda verilmesi. Her göz farklı fraksiyon için ayrılabilir; aşınma bölgeleri ürüne göre korunur.",
            imageAlt: "Konveyörle bağlantılı agrega besleme bunkerleri",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kırıcı Önü Besleme",
            text: "Ocak malzemesinin kırıcıya düzenli verilmesi için ön bunker. Darbe bölgesi ve besleyici, iri parça boyutuna göre tasarlanır.",
            imageAlt: "Delme izleri görülen taş ocağı kaya yüzeyi",
            linkLabel: "Kırıcılar ve Parçalayıcılar",
          },
          {
            title: "Dozaj Öncesi Tamponlama",
            text: "Gübre hammaddelerinin dozaj bant kantarı veya besleyiciden önce tamponlanması. Düzenli akış, dozaj doğruluğunu doğrudan etkiler.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Dozajlama Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Bunker Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA bunker ve hazneleri malzemenin türü, yığın yoğunluğu, tane boyutu, nemi ve kabul biçimi ile hattın besleme ihtiyacına göre projelendirir. Gövde ve alt bölüm geometrisi, kabul ağzı, alt çıkış ve besleyici bağlantısı, aşınma bölgeleri ve taşıyıcı şase birlikte tasarlanır.",
        highlights: ["Kabul biçimine göre üst ağız", "Akışa uygun duvar açıları", "Alt besleyici ve sürgülü kapak bağlantısı", "Taşıyıcı şase ve saha montajı"],
        figureAlt: "Alt kısmında bantlı besleyiciler bulunan iki besleme haznesi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Kabul Debisi", text: "Malzemenin geliş biçimi ve kabul debisi." },
          { title: "Tampon Hacim", text: "Kabul ile hat çekişi arasında gerekli tampon miktarı." },
          { title: "Malzeme Akışı", text: "Yığın yoğunluğu, tane boyutu, nem ve yapışkanlık." },
          { title: "Duvar Açısı ve Aşınma", text: "Yan duvar açıları, çıkış ağzı ve aşınma bölgeleri." },
          { title: "Alt Besleme", text: "Besleyici tipi, akış kontrolü ve sonraki ekipman bağlantısı." },
        ],
        dataNote: "Bunker hacmi, ölçüleri ve sac kalınlıkları malzeme ve hat verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Bunker ve Hazneler Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Bunker ne işe yarar?",
            answer: "Kesikli gelen malzemeyi kısa süre tamponlar ve alttaki besleyiciyle hatta düzenli verir.",
          },
          {
            question: "Bunker ile silo arasındaki fark nedir?",
            answer: "Silo uzun süreli ve yüksek hacimli depolama içindir; bunker ise kabul ve besleme arasındaki kısa süreli tampon hacimdir.",
          },
          {
            question: "Köprüleşme nasıl önlenir?",
            answer: "Malzemenin akış özelliklerine uygun duvar açıları ve çıkış ağzı seçilir; gerekirse akış yardımcıları ayrıca değerlendirilir.",
          },
          {
            question: "Alt çıkışa hangi besleyici bağlanır?",
            answer: "Malzemeye ve hat ihtiyacına göre bantlı besleyici, helezon veya uygun başka bir besleyici seçilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü ve yoğunluğu, tane boyutu ve nem, kabul biçimi ve debisi, istenen tampon hacim ve sonraki ekipman temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Bunker ve hazne için teknik teklif alın",
        text: "Malzemeniz, kabul biçiminiz ve besleme ihtiyacınıza göre bunker sistemini birlikte netleştirelim.",
        mailSubject: "Bunker ve Hazne Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Malzeme türü ve yığın yoğunluğu", "Tane boyutu, nem ve yapışkanlık", "Kabul biçimi (loader, kamyon, konveyör)", "Kabul debisi ve tampon hacim", "Alt besleyici ve sonraki ekipman", "Saha yerleşimi"],
        inquiryLines: [
          "Merhaba, bunker ve hazne için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Yığın yoğunluğu:",
          "Kabul biçimi:",
          "Tampon hacim / debi:",
          "Sonraki ekipman:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Bunkers and Hoppers | Feed Hopper Manufacturer",
        description:
          "Industrial bunkers and material hoppers for raw material receipt, buffering and controlled feeding. Geometry and bottom feeding are engineered for the material.",
      },
      breadcrumbLabel: "Bunkers and Hoppers",
      h1: "Bunkers and Hoppers – Material Receipt, Buffering and Feeding",
      productCategory: "Industrial Hopper",
      overview: {
        imageAlt: "Four-compartment aggregate feed bunker with pyramidal bottoms",
        tagline: "Bunkers and Hoppers",
        keyFacts: [
          { label: "Duty", value: "Short-term buffering and controlled feeding" },
          { label: "Receipt", value: "By loader, truck or conveyor" },
          { label: "Geometry", value: "Wall angles and bottom section per material flow" },
          { label: "Bottom feeding", value: "Belt, screw or suitable feeder" },
        ],
        title: "Controlled Material Feeding at the Head of the Line",
        paragraphs: [
          "Bunkers and hoppers are intermediate storage bodies in which raw material is received, buffered for a short time and fed steadily to the next equipment by the feeder below. They turn the intermittent arrival of material by loader, truck or conveyor into continuous feeding of the line.",
          "Hopper geometry is determined by the material's flow behaviour. Side wall angles and the conical or pyramidal bottom section let material descend steadily to the outlet; for moist and sticky materials, bridging risk is assessed together with wall angle and outlet size.",
          "A belt feeder, screw or other suitable feeder is connected to the bottom outlet; a slide gate can be used to stop or shut off the flow. For abrasive materials, impact and sliding zones are protected with wear plates if required.",
        ],
        note: "A bunker is not for long-term storage but provides buffer volume between receipt and feeding. Silo systems are used for high-volume, long-term stock.",
      },
      process: {
        title: "Bunker and Hopper Process Flow",
        intro:
          "The diagram shows the flow in which material is received into the bunker, buffered, discharged in a controlled way from the bottom outlet and transferred to the next feeding or conveying equipment. Feeder, conveyor and the next machine are separate equipment.",
        note: "Buffer volume is determined by the difference between how material arrives and the line's draw-off rate.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material receipt", text: "Material is received through the bunker's top opening by loader, truck or conveyor." },
          { title: "Buffering", text: "The bunker balances intermittent arrivals against the line's continuous draw-off." },
          { title: "Controlled bottom discharge", text: "Material descends through the conical or pyramidal bottom to the outlet." },
          { title: "Transfer to next equipment", text: "The feeder below delivers material to a conveyor, crusher or dosing equipment." },
        ],
        flow: {
          svgTitle: "Bunker and hopper process flow diagram",
          svgDesc: "Material line: material receipt, bunker, bottom discharge and feeder, next equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Material receipt", sub: "Loader / truck / conveyor" }],
          drum: { title: "BUNKER", sub: "buffering" },
          after: [
            { title: "Bottom discharge", sub: "Feeder / slide gate" },
            { title: "Next equipment", sub: "Conveyor / crusher / dosing" },
          ],
        },
      },
      applications: {
        title: "Bunker and Hopper Applications",
        items: [
          {
            title: "Aggregate and Sand Feeding",
            text: "Receiving aggregate and sand into compartment bunkers and feeding it onto a belt by bottom feeders. Each compartment can hold a different fraction; wear zones are protected for the product.",
            imageAlt: "Aggregate feed bunkers connected to a conveyor",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Crusher Feeding",
            text: "A feed bunker for steady feeding of quarry material to the crusher. Impact zone and feeder are designed for the largest lump size.",
            imageAlt: "Quarry rock face with drill hole marks",
            linkLabel: "Crushers and Shredders",
          },
          {
            title: "Buffering Before Dosing",
            text: "Buffering fertilizer raw materials ahead of a weigh belt feeder or feeder. Steady flow directly affects dosing accuracy.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Dosing Systems",
          },
        ],
      },
      design: {
        title: "Custom Bunker Design and Manufacturing",
        intro:
          "PRO MAKINA engineers bunkers and hoppers around material type, bulk density, particle size, moisture and receipt method, and the line's feeding requirement. Body and bottom geometry, receipt opening, bottom outlet and feeder connection, wear zones and support frame are designed together.",
        highlights: ["Top opening for the receipt method", "Wall angles suited to flow", "Bottom feeder and slide gate connection", "Support frame and site installation"],
        figureAlt: "Two feed hoppers with belt feeders underneath",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Receipt Rate", text: "How material arrives and the receipt rate." },
          { title: "Buffer Volume", text: "Buffer needed between receipt and line draw-off." },
          { title: "Material Flow", text: "Bulk density, particle size, moisture and stickiness." },
          { title: "Wall Angle and Wear", text: "Side wall angles, outlet size and wear zones." },
          { title: "Bottom Feeding", text: "Feeder type, flow control and connection to the next equipment." },
        ],
        dataNote: "Bunker volume, dimensions and plate thicknesses are defined from material and line data; no generic values are stated on this page.",
      },
      faq: {
        title: "Bunkers and Hoppers FAQ",
        items: [
          {
            question: "What is a bunker used for?",
            answer: "It buffers intermittently arriving material for a short time and feeds it steadily to the line via the feeder below.",
          },
          {
            question: "What is the difference between a bunker and a silo?",
            answer: "A silo is for long-term, high-volume storage; a bunker is a short-term buffer between receipt and feeding.",
          },
          {
            question: "How is bridging prevented?",
            answer: "Wall angles and outlet size are selected for the material's flow properties; flow aids are assessed separately if needed.",
          },
          {
            question: "Which feeder is connected to the outlet?",
            answer: "A belt feeder, screw or other suitable feeder is selected for the material and line requirement.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type and density, particle size and moisture, receipt method and rate, required buffer volume and next equipment.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a bunker or hopper",
        text: "Share your material, receipt method and feeding needs, and we will define the bunker system together with you.",
        mailSubject: "Bunker and Hopper Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Material type and bulk density", "Particle size, moisture and stickiness", "Receipt method (loader, truck, conveyor)", "Receipt rate and buffer volume", "Bottom feeder and next equipment", "Site layout"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a bunker or hopper.",
          "",
          "Material:",
          "Bulk density:",
          "Receipt method:",
          "Buffer volume / rate:",
          "Next equipment:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Бункеры | Производство приёмных и питающих бункеров",
        description:
          "Промышленные бункеры для приёма сырья, буферизации и контролируемой подачи. Геометрия и нижняя подача проектируются под материал.",
      },
      breadcrumbLabel: "Бункеры",
      h1: "Бункеры – приём материала, буферизация и подача",
      productCategory: "Промышленный бункер",
      overview: {
        imageAlt: "Четырёхсекционный бункер заполнителей с пирамидальными днищами",
        tagline: "Бункеры",
        keyFacts: [
          { label: "Назначение", value: "Кратковременная буферизация и контролируемая подача" },
          { label: "Приём", value: "Погрузчиком, автомобилем или конвейером" },
          { label: "Геометрия", value: "Углы стенок и днище по сыпучести материала" },
          { label: "Нижняя подача", value: "Ленточный, шнековый или иной питатель" },
        ],
        title: "Контролируемая подача материала в начале линии",
        paragraphs: [
          "Бункеры — промежуточные ёмкости, в которых сырьё принимается, кратковременно буферизуется и равномерно подаётся нижним питателем на следующее оборудование. Они превращают прерывистое поступление материала погрузчиком, автомобилем или конвейером в непрерывную подачу на линию.",
          "Геометрия бункера определяется сыпучестью материала. Углы боковых стенок и коническое или пирамидальное днище обеспечивают равномерный сход к выпуску; для влажных и липких материалов риск сводообразования оценивается вместе с углом стенок и размером выпуска.",
          "К нижнему выпуску подключается ленточный питатель, шнек или иной питатель; для остановки или отсечки потока может применяться шиберная задвижка. Для абразивных материалов зоны удара и скольжения при необходимости защищаются износостойкими плитами.",
        ],
        note: "Бункер предназначен не для длительного хранения, а для буферного объёма между приёмом и подачей. Для больших объёмов и длительного хранения применяются силосы.",
      },
      process: {
        title: "Технологическая схема бункера",
        intro:
          "Схема показывает поток: материал принимается в бункер, буферизуется, выгружается через нижний выпуск и передаётся на следующее питающее или транспортное оборудование. Питатель, конвейер и следующая машина — отдельное оборудование.",
        note: "Буферный объём определяется разницей между характером поступления материала и расходом линии.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Приём материала", text: "Материал поступает через верхнюю горловину погрузчиком, автомобилем или конвейером." },
          { title: "Буферизация", text: "Бункер выравнивает прерывистое поступление и непрерывный расход линии." },
          { title: "Контролируемая выгрузка", text: "Материал сходит через коническое или пирамидальное днище к выпуску." },
          { title: "Передача далее", text: "Нижний питатель подаёт материал на конвейер, дробилку или дозатор." },
        ],
        flow: {
          svgTitle: "Технологическая схема бункера",
          svgDesc: "Линия материала: приём материала, бункер, нижняя выгрузка и питатель, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Приём материала", sub: "Погрузчик / авто / конвейер" }],
          drum: { title: "БУНКЕР", sub: "буферизация" },
          after: [
            { title: "Нижняя выгрузка", sub: "Питатель / шибер" },
            { title: "Далее", sub: "Конвейер / дробилка / дозатор" },
          ],
        },
      },
      applications: {
        title: "Области применения бункеров",
        items: [
          {
            title: "Подача заполнителей и песка",
            text: "Приём заполнителей и песка в секционные бункеры и подача на ленту нижними питателями. Секции могут отводиться под разные фракции; зоны износа защищаются под продукт.",
            imageAlt: "Бункеры заполнителей, соединённые с конвейером",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Питание дробилки",
            text: "Приёмный бункер для равномерной подачи карьерного материала в дробилку. Зона удара и питатель рассчитываются под максимальный кусок.",
            imageAlt: "Скальная стенка карьера со следами бурения",
            linkLabel: "Дробилки и шредеры",
          },
          {
            title: "Буферизация перед дозированием",
            text: "Буферизация сырья для удобрений перед ленточным весовым дозатором или питателем. Равномерный поток напрямую влияет на точность дозирования.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Системы дозирования",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление бункеров",
        intro:
          "PRO MAKINA проектирует бункеры исходя из вида материала, насыпной плотности, крупности, влажности и способа приёма, а также потребности линии в подаче. Геометрия корпуса и днища, приёмная горловина, нижний выпуск и питатель, зоны износа и опорная рама разрабатываются совместно.",
        highlights: ["Горловина под способ приёма", "Углы стенок под сыпучесть", "Подключение питателя и шибера", "Опорная рама и монтаж"],
        figureAlt: "Два питающих бункера с ленточными питателями снизу",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Расход приёма", text: "Характер поступления материала и расход приёма." },
          { title: "Буферный объём", text: "Необходимый буфер между приёмом и расходом линии." },
          { title: "Сыпучесть материала", text: "Насыпная плотность, крупность, влажность и липкость." },
          { title: "Угол стенок и износ", text: "Углы боковых стенок, размер выпуска и зоны износа." },
          { title: "Нижняя подача", text: "Тип питателя, управление потоком и связь со следующим оборудованием." },
        ],
        dataNote: "Объём, размеры и толщины листа бункера определяются по данным материала и линии; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о бункерах",
        items: [
          {
            question: "Для чего нужен бункер?",
            answer: "Он кратковременно буферизует прерывисто поступающий материал и равномерно подаёт его на линию нижним питателем.",
          },
          {
            question: "Чем бункер отличается от силоса?",
            answer: "Силос предназначен для длительного хранения больших объёмов, а бункер — кратковременный буфер между приёмом и подачей.",
          },
          {
            question: "Как предотвратить сводообразование?",
            answer: "Углы стенок и размер выпуска выбираются по свойствам сыпучести; побудители при необходимости рассматриваются отдельно.",
          },
          {
            question: "Какой питатель подключается к выпуску?",
            answer: "Ленточный питатель, шнек или иной подходящий питатель выбираются по материалу и потребности линии.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид и плотность материала, крупность и влажность, способ и расход приёма, требуемый буферный объём и следующее оборудование.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на бункер",
        text: "Сообщите материал, способ приёма и потребность в подаче — вместе определим бункерную систему.",
        mailSubject: "Запрос предложения: бункер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид материала и насыпная плотность", "Крупность, влажность и липкость", "Способ приёма (погрузчик, авто, конвейер)", "Расход приёма и буферный объём", "Нижний питатель и следующее оборудование", "Компоновка площадки"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на бункер.",
          "",
          "Материал:",
          "Насыпная плотность:",
          "Способ приёма:",
          "Буферный объём / расход:",
          "Следующее оборудование:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "القواديس والخزانات | تصنيع قواديس التلقيم",
        description:
          "قواديس صناعية لاستلام المواد الخام والتخزين المؤقت والتلقيم المتحكم به، مع تصميم الشكل والتلقيم السفلي وفق المادة.",
      },
      breadcrumbLabel: "القواديس والخزانات",
      h1: "القواديس والخزانات – استلام المواد والتخزين المؤقت والتلقيم",
      productCategory: "قادوس صناعي",
      overview: {
        imageAlt: "قادوس تلقيم ركام بأربع حجرات وقيعان هرمية",
        tagline: "القواديس والخزانات",
        keyFacts: [
          { label: "المهمة", value: "تخزين مؤقت قصير وتلقيم متحكم به" },
          { label: "الاستلام", value: "بالجرافة أو الشاحنة أو الناقل" },
          { label: "الشكل", value: "زوايا الجدران والجزء السفلي وفق انسياب المادة" },
          { label: "التلقيم السفلي", value: "مُلقِّم سيري أو لولبي أو مناسب آخر" },
        ],
        title: "تلقيم متحكم به للمواد في بداية الخط",
        paragraphs: [
          "القواديس والخزانات أجسام تخزين وسيطة تُستلم فيها المادة الخام وتُخزَّن مؤقتًا لفترة قصيرة ثم تُلقَّم بانتظام إلى المعدة التالية عبر المُلقِّم السفلي، فتحوّل الوصول المتقطع للمادة بالجرافة أو الشاحنة أو الناقل إلى تلقيم مستمر للخط.",
          "يُحدَّد شكل القادوس وفق سلوك انسياب المادة؛ إذ تتيح زوايا الجدران الجانبية والجزء السفلي المخروطي أو الهرمي نزول المادة بانتظام إلى المخرج، ويُقيَّم خطر التجسير للمواد الرطبة واللزجة مع زاوية الجدار ومقاس فتحة الخروج.",
          "يُوصل بالمخرج السفلي مُلقِّم سيري أو لولبي أو مُلقِّم مناسب آخر، ويمكن استخدام بوابة منزلقة لإيقاف التدفق أو قطعه، وتُحمى مناطق الصدم والانزلاق بألواح مقاومة للتآكل عند الحاجة للمواد الكاشطة.",
        ],
        note: "القادوس ليس للتخزين طويل الأمد بل يوفر حجمًا مؤقتًا بين الاستلام والتلقيم، أما المخزون الكبير طويل الأمد فتُستخدم له أنظمة الصوامع.",
      },
      process: {
        title: "تدفق العملية في القواديس والخزانات",
        intro:
          "يوضح المخطط التدفق الذي تُستلم فيه المادة في القادوس وتُخزَّن مؤقتًا وتُفرَّغ بشكل متحكم به من المخرج السفلي ثم تُنقل إلى معدة التلقيم أو النقل التالية، بينما المُلقِّم والناقل والماكينة التالية معدات منفصلة.",
        note: "يُحدَّد الحجم المؤقت وفق الفرق بين طريقة وصول المادة ومعدل سحب الخط.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "استلام المادة", text: "تُستلم المادة من الفتحة العلوية للقادوس بالجرافة أو الشاحنة أو الناقل." },
          { title: "التخزين المؤقت", text: "يوازن القادوس بين الوصول المتقطع والسحب المستمر للخط." },
          { title: "تفريغ سفلي متحكم به", text: "تنزل المادة عبر الجزء السفلي المخروطي أو الهرمي إلى المخرج." },
          { title: "النقل إلى المعدة التالية", text: "يسلّم المُلقِّم السفلي المادة إلى ناقل أو كسارة أو معدة جرعات." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في القواديس والخزانات",
          svgDesc: "خط المادة: استلام المادة، القادوس، التفريغ السفلي والمُلقِّم، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "استلام المادة", sub: "جرافة / شاحنة / ناقل" }],
          drum: { title: "القادوس", sub: "تخزين مؤقت" },
          after: [
            { title: "تفريغ سفلي", sub: "مُلقِّم / بوابة منزلقة" },
            { title: "المعدة التالية", sub: "ناقل / كسارة / جرعات" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام القواديس والخزانات",
        items: [
          {
            title: "تلقيم الركام والرمل",
            text: "استلام الركام والرمل في قواديس بحجرات وتلقيمها إلى السير عبر مُلقِّمات سفلية، ويمكن تخصيص كل حجرة لجزء مختلف مع حماية مناطق التآكل وفق المنتج.",
            imageAlt: "قواديس تلقيم ركام متصلة بناقل",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "تلقيم الكسارة",
            text: "قادوس أمامي لتلقيم مواد المحجر إلى الكسارة بانتظام، مع تصميم منطقة الصدم والمُلقِّم وفق أكبر قطعة.",
            imageAlt: "واجهة صخرية في محجر تظهر عليها آثار الحفر",
            linkLabel: "الكسارات والشريدر",
          },
          {
            title: "التخزين المؤقت قبل الجرعات",
            text: "تخزين مواد الأسمدة الخام مؤقتًا قبل ميزان السير أو المُلقِّم، إذ يؤثر الانسياب المنتظم مباشرة في دقة الجرعات.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "أنظمة الجرعات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع قواديس مخصصة",
        intro:
          "تصمم PRO MAKINA القواديس والخزانات وفق نوع المادة وكثافتها الظاهرية وحجم حبيباتها ورطوبتها وطريقة استلامها واحتياج الخط للتلقيم، مع تصميم شكل الجسم والجزء السفلي وفتحة الاستلام والمخرج السفلي ووصلة المُلقِّم ومناطق التآكل والهيكل الحامل معًا.",
        highlights: ["فتحة علوية وفق طريقة الاستلام", "زوايا جدران مناسبة للانسياب", "وصلة المُلقِّم السفلي والبوابة المنزلقة", "هيكل حامل وتركيب في الموقع"],
        figureAlt: "قادوسا تلقيم بمُلقِّمات سيرية في الأسفل",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "معدل الاستلام", text: "طريقة وصول المادة ومعدل الاستلام." },
          { title: "الحجم المؤقت", text: "الحجم المؤقت اللازم بين الاستلام وسحب الخط." },
          { title: "انسياب المادة", text: "الكثافة الظاهرية وحجم الحبيبات والرطوبة واللزوجة." },
          { title: "زاوية الجدار والتآكل", text: "زوايا الجدران الجانبية ومقاس المخرج ومناطق التآكل." },
          { title: "التلقيم السفلي", text: "نوع المُلقِّم والتحكم في التدفق والربط بالمعدة التالية." },
        ],
        dataNote: "يُحدَّد حجم القادوس وأبعاده وسماكات الصفائح من بيانات المادة والخط، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول القواديس والخزانات",
        items: [
          {
            question: "ما استخدام القادوس؟",
            answer: "يخزّن المادة الواصلة بشكل متقطع لفترة قصيرة ويلقّمها بانتظام إلى الخط عبر المُلقِّم السفلي.",
          },
          {
            question: "ما الفرق بين القادوس والصومعة؟",
            answer: "الصومعة للتخزين طويل الأمد وعالي الحجم، أما القادوس فحجم مؤقت قصير بين الاستلام والتلقيم.",
          },
          {
            question: "كيف يُمنع التجسير؟",
            answer: "تُختار زوايا الجدران ومقاس المخرج وفق خصائص انسياب المادة، وتُقيَّم مساعدات الانسياب بشكل منفصل عند الحاجة.",
          },
          {
            question: "أي مُلقِّم يُوصل بالمخرج؟",
            answer: "يُختار مُلقِّم سيري أو لولبي أو مُلقِّم مناسب آخر وفق المادة واحتياج الخط.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وكثافتها وحجم الحبيبات والرطوبة وطريقة الاستلام ومعدله والحجم المؤقت المطلوب والمعدة التالية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لقادوس",
        text: "شاركنا المادة وطريقة الاستلام واحتياج التلقيم، لنحدد معًا نظام القادوس المناسب.",
        mailSubject: "طلب عرض سعر: قادوس",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المادة وكثافتها الظاهرية", "حجم الحبيبات والرطوبة واللزوجة", "طريقة الاستلام (جرافة، شاحنة، ناقل)", "معدل الاستلام والحجم المؤقت", "المُلقِّم السفلي والمعدة التالية", "تخطيط الموقع"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لقادوس.",
          "",
          "المادة:",
          "الكثافة الظاهرية:",
          "طريقة الاستلام:",
          "الحجم المؤقت / المعدل:",
          "المعدة التالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
