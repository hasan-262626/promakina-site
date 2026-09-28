import type { DrumPageConfig } from "../types";

// Dozaj bant kantarı: mevcut tanım "hammaddeyi hareket halindeyken tartar ve belirlenen debide aktarım yapar; loadcell destekli ölçüm;
// otomatik dozaj kontrolü; hız kontrollü sürücü; ayarlanabilir bant hızı; basınç dengeleme ile tozsuz çalışma; SCADA/PLC". Bu tanım yalnız
// ölçüm yapan bant kantarını değil, bant hızını ayarlayarak debiyi kontrol eden gravimetrik bantlı besleyiciyi (weigh belt feeder) anlatır;
// mevcut EN/RU/AR rotaları da "weigh-belt-feeder" / "lentochnyy-dozator" adını kullanır. Görsellerden dozaj4 (kapalı gövdeli kısa bantlı
// besleyici) ve dozaj3 (bunker altı bantlı besleyici çizimi) kullanılır; ikisinde de load-cell görünmez, alt metinlerde tartım köprüsü
// görünüyormuş gibi yazılmaz. dozaj1 (oluklu yanaklı bant) ve dozaj2 (bant konveyör çizimi) standart konveyör görünümünde olduğu için kullanılmaz.
// Hassasiyet, t/h, bant hızı, bant genişliği veya motor gücü verilmez. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/dozaj konveyor/${file}`;

export const weighBeltFeederPage: DrumPageConfig = {
  key: "dosingBeltScale",
  group: "dosingSystems",
  trSlug: "dozaj-bant-kantari",
  mainImage: img("dozaj4.jpg"),
  applications: [
    { image: "/images/tambur-uygulamalari/potasyum-klorur-kompakt.webp", link: "granulatorDrum" },
    { image: "/images/kirici-uygulamalari/dolomit-ocak.webp", link: "mining" },
    { image: "/images/tasima-uygulamalari/klinker.webp", link: "beltConveyor" },
  ],
  figure: img("dozaj3.png"),
  sectors: ["fertilizerPlants", "mining"],
  resources: ["beltConveyor", "bunkersHoppers", "granulatorDrum", "dosingSystems"],
  machines: ["conveying", "storageSystems", "drumSystems"],
  texts: {
    tr: {
      meta: {
        title: "Dozaj Bant Kantarı | Gravimetrik Bantlı Besleyici (Weigh Feeder) | PRO MAKİNA",
        description:
          "Bant üzerindeki ürünü tartıp hızla birlikte anlık debiyi hesaplayan ve bant hızını ayarlayarak set debiyi koruyan dozaj bant kantarı. Sürekli proses besleme.",
      },
      breadcrumbLabel: "Dozaj Bant Kantarı",
      h1: "Dozaj Bant Kantarı – Sürekli Akışta Tartımlı ve Debi Kontrollü Besleme",
      productCategory: "Gravimetrik Bantlı Besleyici",
      overview: {
        imageAlt: "Üstten beslemeli, kapalı gövdeli kısa bantlı dozaj besleyici",
        tagline: "Dozaj Bant Kantarı",
        keyFacts: [
          { label: "Görev", value: "Sürekli akışta debi kontrollü besleme" },
          { label: "Ölçüm", value: "Bant yükü ve bant hızından anlık debi" },
          { label: "Kontrol", value: "İnvertörle bant hızının ayarlanması" },
          { label: "Kayıt", value: "Toplam tonaj ve anlık debi, PLC/SCADA" },
        ],
        title: "Batch Değil Sürekli Akış: Debiyi Ölçen ve Tutan Besleyici",
        paragraphs: [
          "Dozaj bant kantarı, bunkerden aldığı dökme ürünü kısa bir bant üzerinde taşırken tartan ve sonraki prosese belirlenen debide veren gravimetrik bantlı besleyicidir. Mikro ve makro dozajlamadaki gibi batch tartmaz; granülatör, mikser veya proses hattını sürekli besler.",
          "Bandın tartım bölümü load-cell'ler üzerindeki tartım köprüsüne oturur ve bant üzerindeki ürün yükünü ölçer. Bant hızı hız sensörüyle ölçülür. Kontrol sistemi yükü hızla çarparak anlık debiyi hesaplar, set değerle karşılaştırır ve invertör üzerinden bant hızını ayarlar. Ürün akışı değişse de debi set değere yaklaştırılır.",
          "Kapalı gövde tozlu ürünlerde toz kaçağını sınırlar; besleme bunkerinin çıkışı ise bant üzerinde kararlı bir ürün yatağı oluşturacak şekilde düzenlenir. Toplam tonaj ve anlık debi PLC veya SCADA'ya aktarılır.",
        ],
        note: "Yalnızca bant kantarı olan bir konveyör debiyi ölçer ama değiştirmez. Dozaj bant kantarı ise ölçtüğü debiyi bant hızıyla kontrol eder. Standart bant konveyörü bu işlevi görmez.",
      },
      process: {
        title: "Dozaj Bant Kantarı Proses Akışı",
        intro:
          "Şema, ürünün besleme bunkerinden banda alındığı, tartım ve hız ölçümüyle anlık debinin hesaplandığı, bant hızının ayarlandığı ve ürünün sonraki prosese sürekli verildiği akışı gösterir. Besleme bunkeri ve granülatör ayrı ekipmanlardır.",
        note: "Ölçüm kararlılığı; bant üzerindeki ürün yatağının düzgünlüğüne, bant temizliğine ve tartım köprüsünün bakımına bağlıdır.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Bunkerden giriş", text: "Ürün besleme bunkerinin çıkışından bant üzerine alınır." },
          { title: "Bantla taşıma", text: "Bant ürünü tartım bölümü üzerinden geçirir." },
          { title: "Tartım ve hız ölçümü", text: "Load-cell'ler bant yükünü, hız sensörü bant hızını ölçer." },
          { title: "Sürekli besleme", text: "Ürün set debide granülatör, mikser veya proses hattına verilir." },
        ],
        auxLineLabel: "Debi kontrolü",
        auxLine: [
          { title: "Anlık debi", text: "Bant yükü ve bant hızından anlık kütlesel debi hesaplanır." },
          { title: "Set değer karşılaştırma", text: "Hesaplanan debi set değerle karşılaştırılır." },
          { title: "Hız ayarı", text: "İnvertör bant hızını artırıp azaltarak debiyi set değere yaklaştırır." },
        ],
        flow: {
          svgTitle: "Dozaj bant kantarı proses akış şeması",
          svgDesc: "Ürün hattı: besleme bunkeri, tartım köprüsü ve hız ölçümlü dozaj bant kantarı, granülatör veya proses hattı. Kontrol: anlık debi, set değer ve bant hızı ayarı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Besleme bunkeri", sub: "Ürün girişi" }],
          drum: { title: "DOZAJ BANT KANTARI", sub: "tartım ve hız ile debi kontrolü" },
          after: [{ title: "Granülatör / hat", sub: "Set debide sürekli besleme" }],
        },
      },
      applications: {
        title: "Dozaj Bant Kantarı Uygulama Alanları",
        items: [
          {
            title: "Granülatör Öncesi Sürekli Besleme",
            text: "Gübre hammaddelerinin granülatöre reçete oranında sürekli verilmesi. Her hammadde için ayrı dozaj bant kantarı kullanılarak oranlar debi üzerinden korunur.",
            imageAlt: "Kompakt potasyum klorür taneleri",
            linkLabel: "Granülatör Tamburu",
          },
          {
            title: "Mineral Besleme",
            text: "Mineral ve kırılmış malzemelerin proses hattına debi kontrollü verilmesi. Aşındırıcı ürünlerde bant ve etek sızdırmazlığı buna göre seçilir.",
            imageAlt: "Dolomit ocağı",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Sürekli Dökme Malzeme Hatları",
            text: "Bantlı konveyör hatlarının başında ürünün kontrollü debiyle hatta verilmesi. Taşıma konveyörü ayrı ekipmandır; dozaj bant kantarı debiyi belirler.",
            imageAlt: "Klinker taneleri",
            linkLabel: "Bantlı Konveyörler",
          },
        ],
      },
      design: {
        title: "Projeye Özel Dozaj Bant Kantarı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA dozaj bant kantarlarını ürün, istenen debi aralığı, besleme bunkeri ve sonraki proses bağlantısına göre projelendirir. Bant genişliği ve hız aralığı, tartım köprüsü ve load-cell düzeni, hız sensörü ve kontrol birlikte seçilir.",
        highlights: ["Load-cell'li tartım köprüsü", "Bant hızı ölçümü", "İnvertörle debi kontrolü", "Kapalı gövde ve toz kontrolü"],
        figureAlt: "Besleme bunkeri altında kapalı çıkış kutulu bantlı dozaj besleyici çizimi",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, akışkanlık ve nem." },
          { title: "Debi Aralığı", text: "En düşük ve en yüksek set debi ile reçete oranları." },
          { title: "Bant ve Hız", text: "Bant genişliği, bant hızı aralığı ve bant üzerindeki ürün yükü." },
          { title: "Tartım ve Ölçüm", text: "Tartım köprüsü, load-cell düzeni ve hız sensörü." },
          { title: "Kontrol ve Bağlantı", text: "PLC/SCADA, toplam tonaj, besleme bunkeri ve sonraki ekipman." },
        ],
        dataNote: "Debi aralığı, doğruluk, bant genişliği ve hızı ürün ve proses verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Dozaj Bant Kantarı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Dozaj bant kantarı nedir?",
            answer: "Bant üzerindeki ürünü taşırken tartan, anlık debiyi hesaplayan ve bant hızını ayarlayarak ürünü set debide sürekli besleyen gravimetrik bantlı besleyicidir.",
          },
          {
            question: "Bant kantarından farkı nedir?",
            answer: "Bant kantarı konveyör üzerindeki debiyi ölçer ama değiştirmez. Dozaj bant kantarı ölçtüğü debiyi bant hızıyla kontrol ederek set değerde tutar.",
          },
          {
            question: "Anlık debi nasıl hesaplanır?",
            answer: "Load-cell'ler tartım bölümündeki bant yükünü, hız sensörü bant hızını ölçer. Kontrol sistemi bu iki değerden kütlesel debiyi hesaplar ve toplam tonajı biriktirir.",
          },
          {
            question: "Mikro ve makro dozajlamadan farkı nedir?",
            answer: "Mikro ve makro dozajlama bileşenleri batch halinde tartım haznesinde tartar. Dozaj bant kantarı ise sürekli akışta debiyi ölçer ve kontrol eder.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, istenen debi aralığı, besleme bunkeri, sonraki ekipman ve otomasyon bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Dozaj bant kantarı için teknik teklif alın",
        text: "Ürününüz, debi aralığınız ve besleyeceğiniz prosese göre dozaj bant kantarını birlikte netleştirelim.",
        mailSubject: "Dozaj Bant Kantarı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve akışkanlık", "En düşük ve en yüksek debi", "Besleme bunkeri bilgisi", "Beslenecek ekipman", "PLC/SCADA entegrasyonu"],
        inquiryLines: [
          "Merhaba, dozaj bant kantarı için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Debi aralığı (ton/saat):",
          "Besleme bunkeri:",
          "Beslenecek ekipman:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Weigh Belt Feeder | Gravimetric Belt Feeder for Continuous Dosing",
        description:
          "Weigh belt feeder that weighs product on the belt, calculates the flow rate from load and speed, and holds the set rate by adjusting belt speed.",
      },
      breadcrumbLabel: "Weigh Belt Feeder",
      h1: "Weigh Belt Feeder – Weighed, Rate-Controlled Feeding in Continuous Flow",
      productCategory: "Gravimetric Weigh Belt Feeder",
      overview: {
        imageAlt: "Enclosed short weigh belt feeder with top inlet",
        tagline: "Weigh Belt Feeder",
        keyFacts: [
          { label: "Duty", value: "Rate-controlled feeding in continuous flow" },
          { label: "Measurement", value: "Flow rate from belt load and belt speed" },
          { label: "Control", value: "Belt speed adjusted by inverter" },
          { label: "Recording", value: "Totalised tonnage and flow rate, PLC/SCADA" },
        ],
        title: "Continuous Flow, Not Batches: A Feeder That Measures and Holds the Rate",
        paragraphs: [
          "A weigh belt feeder is a gravimetric belt feeder that weighs bulk product taken from a hopper while carrying it on a short belt and delivers it to the next process at a set rate. Unlike micro and macro dosing it does not weigh in batches; it feeds a granulator, mixer or process line continuously.",
          "The weighing section of the belt rests on a weigh bridge on load cells, which measures the product load on the belt. Belt speed is measured by a speed sensor. The controller multiplies load by speed to calculate the instantaneous flow rate, compares it with the set point and adjusts the belt speed through the inverter. Even when the product flow changes, the rate is brought back towards the set point.",
          "The enclosed casing limits dust leakage with dusty products; the hopper outlet is arranged to form a stable product bed on the belt. Totalised tonnage and flow rate are transferred to the PLC or SCADA.",
        ],
        note: "A conveyor fitted only with a belt scale measures the flow rate but does not change it. A weigh belt feeder controls the measured rate through belt speed. A standard belt conveyor does not perform this function.",
      },
      process: {
        title: "Weigh Belt Feeder Process Flow",
        intro:
          "The diagram shows product taken from the feed hopper onto the belt, the flow rate calculated from weighing and speed measurement, the belt speed adjusted and the product fed continuously to the next process. Feed hopper and granulator are separate equipment.",
        note: "Measurement stability depends on an even product bed on the belt, belt cleanliness and maintenance of the weigh bridge.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Hopper inlet", text: "Product is taken onto the belt from the feed hopper outlet." },
          { title: "Belt transport", text: "The belt carries the product over the weighing section." },
          { title: "Weighing and speed", text: "Load cells measure belt load; the speed sensor measures belt speed." },
          { title: "Continuous feeding", text: "Product is fed at the set rate to a granulator, mixer or process line." },
        ],
        auxLineLabel: "Rate control",
        auxLine: [
          { title: "Instantaneous rate", text: "Mass flow rate is calculated from belt load and belt speed." },
          { title: "Set point comparison", text: "The calculated rate is compared with the set point." },
          { title: "Speed adjustment", text: "The inverter raises or lowers belt speed to bring the rate to the set point." },
        ],
        flow: {
          svgTitle: "Weigh belt feeder process flow diagram",
          svgDesc: "Product line: feed hopper, weigh belt feeder with weigh bridge and speed measurement, granulator or process line. Control: instantaneous rate, set point and belt speed adjustment.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Feed hopper", sub: "Product inlet" }],
          drum: { title: "WEIGH BELT FEEDER", sub: "rate control by weighing and speed" },
          after: [{ title: "Granulator / line", sub: "Continuous feed at set rate" }],
        },
      },
      applications: {
        title: "Weigh Belt Feeder Applications",
        items: [
          {
            title: "Continuous Feeding Ahead of Granulators",
            text: "Feeding fertilizer raw materials continuously to the granulator at recipe ratio. A separate weigh belt feeder per raw material keeps the ratios through the flow rates.",
            imageAlt: "Compacted potassium chloride granules",
            linkLabel: "Granulator Drum",
          },
          {
            title: "Mineral Feeding",
            text: "Rate-controlled feeding of minerals and crushed materials to the process line. For abrasive products, belt and skirt sealing are selected accordingly.",
            imageAlt: "Dolomite quarry",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Continuous Bulk Material Lines",
            text: "Feeding product at a controlled rate at the head of belt conveyor lines. The transport conveyor is separate equipment; the weigh belt feeder sets the rate.",
            imageAlt: "Clinker nodules",
            linkLabel: "Belt Conveyor",
          },
        ],
      },
      design: {
        title: "Custom Weigh Belt Feeder Design and Manufacturing",
        intro:
          "PRO MAKINA engineers weigh belt feeders around the product, required flow rate range, feed hopper and downstream process connection. Belt width and speed range, weigh bridge and load-cell arrangement, speed sensor and control are selected together.",
        highlights: ["Weigh bridge on load cells", "Belt speed measurement", "Rate control by inverter", "Enclosed casing and dust control"],
        figureAlt: "Drawing of a belt dosing feeder below a feed hopper with an enclosed discharge box",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, flowability and moisture." },
          { title: "Rate Range", text: "Minimum and maximum set rate and recipe ratios." },
          { title: "Belt and Speed", text: "Belt width, belt speed range and product load on the belt." },
          { title: "Weighing and Measurement", text: "Weigh bridge, load-cell arrangement and speed sensor." },
          { title: "Control and Connection", text: "PLC/SCADA, totalised tonnage, feed hopper and downstream equipment." },
        ],
        dataNote: "Rate range, accuracy, belt width and speed are defined from product and process data; no generic values are stated on this page.",
      },
      faq: {
        title: "Weigh Belt Feeder FAQ",
        items: [
          {
            question: "What is a weigh belt feeder?",
            answer: "A gravimetric belt feeder that weighs product while carrying it on the belt, calculates the instantaneous rate and continuously feeds the product at the set rate by adjusting belt speed.",
          },
          {
            question: "How does it differ from a belt scale?",
            answer: "A belt scale measures the flow rate on a conveyor but does not change it. A weigh belt feeder controls the measured rate through belt speed and holds it at the set point.",
          },
          {
            question: "How is the instantaneous rate calculated?",
            answer: "Load cells measure the belt load over the weighing section and a speed sensor measures belt speed. The controller calculates the mass flow rate from these two values and totalises the tonnage.",
          },
          {
            question: "How does it differ from micro and macro dosing?",
            answer: "Micro and macro dosing weigh components in batches in a weigh hopper. A weigh belt feeder measures and controls the rate in continuous flow.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, required rate range, feed hopper, downstream equipment and automation details.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a weigh belt feeder",
        text: "Share your product, rate range and the process to be fed, and we will define the weigh belt feeder together with you.",
        mailSubject: "Weigh Belt Feeder Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and flowability", "Minimum and maximum rate", "Feed hopper details", "Equipment to be fed", "PLC/SCADA integration"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a weigh belt feeder.",
          "",
          "Product:",
          "Bulk density:",
          "Rate range (t/h):",
          "Feed hopper:",
          "Equipment to be fed:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ленточный весовой дозатор – непрерывное весовое дозирование",
        description:
          "Ленточный весовой дозатор взвешивает продукт на ленте, вычисляет расход по нагрузке и скорости и удерживает заданный расход регулированием скорости ленты.",
      },
      breadcrumbLabel: "Ленточный весовой дозатор",
      h1: "Ленточный весовой дозатор – весовая подача с регулированием расхода в непрерывном потоке",
      productCategory: "Гравиметрический ленточный дозатор",
      overview: {
        imageAlt: "Закрытый короткий ленточный весовой дозатор с верхней загрузкой",
        tagline: "Ленточный весовой дозатор",
        keyFacts: [
          { label: "Назначение", value: "Подача с регулированием расхода в непрерывном потоке" },
          { label: "Измерение", value: "Расход по нагрузке и скорости ленты" },
          { label: "Регулирование", value: "Скорость ленты через преобразователь" },
          { label: "Учёт", value: "Суммарный тоннаж и расход, PLC/SCADA" },
        ],
        title: "Непрерывный поток, а не замесы: дозатор, который измеряет и удерживает расход",
        paragraphs: [
          "Ленточный весовой дозатор — гравиметрический ленточный питатель, который взвешивает сыпучий продукт из бункера во время транспортирования по короткой ленте и подаёт его в следующий процесс с заданным расходом. В отличие от микро- и макродозирования он не взвешивает порциями, а непрерывно питает гранулятор, смеситель или технологическую линию.",
          "Весовой участок ленты опирается на весовой мост на тензодатчиках, измеряющий нагрузку продукта на ленте. Скорость ленты измеряется датчиком скорости. Контроллер перемножает нагрузку на скорость, получает мгновенный расход, сравнивает его с заданием и через преобразователь частоты изменяет скорость ленты. Даже при изменении потока продукта расход возвращается к заданию.",
          "Закрытый корпус ограничивает пылевыделение пылящих продуктов; выпуск питающего бункера формирует на ленте стабильный слой продукта. Суммарный тоннаж и расход передаются в PLC или SCADA.",
        ],
        note: "Конвейер только с конвейерными весами измеряет расход, но не изменяет его. Ленточный весовой дозатор регулирует измеренный расход скоростью ленты. Обычный ленточный конвейер эту функцию не выполняет.",
      },
      process: {
        title: "Технологическая схема ленточного весового дозатора",
        intro:
          "Схема показывает приём продукта из питающего бункера на ленту, расчёт расхода по взвешиванию и скорости, регулирование скорости ленты и непрерывную подачу в следующий процесс. Питающий бункер и гранулятор — отдельное оборудование.",
        note: "Стабильность измерения зависит от равномерного слоя продукта на ленте, чистоты ленты и обслуживания весового моста.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Вход из бункера", text: "Продукт поступает на ленту из выпуска питающего бункера." },
          { title: "Транспортирование", text: "Лента проводит продукт через весовой участок." },
          { title: "Взвешивание и скорость", text: "Тензодатчики измеряют нагрузку, датчик — скорость ленты." },
          { title: "Непрерывная подача", text: "Продукт подаётся с заданным расходом в гранулятор, смеситель или линию." },
        ],
        auxLineLabel: "Регулирование расхода",
        auxLine: [
          { title: "Мгновенный расход", text: "Массовый расход вычисляется по нагрузке и скорости ленты." },
          { title: "Сравнение с заданием", text: "Вычисленный расход сравнивается с заданным." },
          { title: "Коррекция скорости", text: "Преобразователь изменяет скорость ленты, приближая расход к заданию." },
        ],
        flow: {
          svgTitle: "Технологическая схема ленточного весового дозатора",
          svgDesc: "Линия продукта: питающий бункер, ленточный весовой дозатор с весовым мостом и измерением скорости, гранулятор или линия. Управление: расход, задание и скорость ленты.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Питающий бункер", sub: "Вход продукта" }],
          drum: { title: "ВЕСОВОЙ ДОЗАТОР", sub: "расход по весу и скорости" },
          after: [{ title: "Гранулятор / линия", sub: "Непрерывная подача" }],
        },
      },
      applications: {
        title: "Области применения ленточных весовых дозаторов",
        items: [
          {
            title: "Непрерывная подача перед гранулятором",
            text: "Непрерывная подача сырья удобрений в гранулятор в рецептурном соотношении. Отдельный дозатор на каждый компонент сохраняет соотношения через расходы.",
            imageAlt: "Гранулы компактированного хлорида калия",
            linkLabel: "Барабанный гранулятор",
          },
          {
            title: "Подача минералов",
            text: "Подача минералов и дроблёных материалов в технологическую линию с регулированием расхода. Для абразивных продуктов подбираются лента и уплотнение бортов.",
            imageAlt: "Доломитовый карьер",
            linkLabel: "Горное дело и переработка минералов",
          },
          {
            title: "Непрерывные линии сыпучих материалов",
            text: "Подача продукта с регулируемым расходом в начале линий ленточных конвейеров. Транспортный конвейер — отдельное оборудование; расход задаёт дозатор.",
            imageAlt: "Гранулы клинкера",
            linkLabel: "Ленточный конвейер",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ленточных весовых дозаторов",
        intro:
          "PRO MAKINA проектирует ленточные весовые дозаторы исходя из продукта, диапазона расхода, питающего бункера и подключения к следующему процессу. Ширина ленты и диапазон скорости, весовой мост и тензодатчики, датчик скорости и управление подбираются совместно.",
        highlights: ["Весовой мост на тензодатчиках", "Измерение скорости ленты", "Регулирование расхода преобразователем", "Закрытый корпус и пылеподавление"],
        figureAlt: "Чертёж ленточного дозатора под питающим бункером с закрытым разгрузочным кожухом",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность, сыпучесть и влажность." },
          { title: "Диапазон расхода", text: "Минимальный и максимальный заданный расход и соотношения рецепта." },
          { title: "Лента и скорость", text: "Ширина ленты, диапазон скорости и нагрузка продукта на ленте." },
          { title: "Взвешивание и измерение", text: "Весовой мост, расстановка тензодатчиков и датчик скорости." },
          { title: "Управление и подключение", text: "PLC/SCADA, суммарный тоннаж, питающий бункер и следующее оборудование." },
        ],
        dataNote: "Диапазон расхода, точность, ширина и скорость ленты определяются по данным продукта и процесса; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о ленточных весовых дозаторах",
        items: [
          {
            question: "Что такое ленточный весовой дозатор?",
            answer: "Гравиметрический ленточный питатель, который взвешивает продукт при транспортировании, вычисляет мгновенный расход и непрерывно подаёт продукт с заданным расходом, регулируя скорость ленты.",
          },
          {
            question: "Чем он отличается от конвейерных весов?",
            answer: "Конвейерные весы измеряют расход на конвейере, но не изменяют его. Весовой дозатор регулирует измеренный расход скоростью ленты и удерживает задание.",
          },
          {
            question: "Как вычисляется мгновенный расход?",
            answer: "Тензодатчики измеряют нагрузку ленты на весовом участке, датчик — скорость ленты. Контроллер вычисляет массовый расход и суммирует тоннаж.",
          },
          {
            question: "Чем он отличается от микро- и макродозирования?",
            answer: "Микро- и макродозирование взвешивают компоненты порциями в весовом бункере. Ленточный весовой дозатор измеряет и регулирует расход в непрерывном потоке.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, требуемый диапазон расхода, питающий бункер, следующее оборудование и автоматика.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ленточный весовой дозатор",
        text: "Сообщите продукт, диапазон расхода и процесс, который нужно питать, — вместе определим дозатор.",
        mailSubject: "Запрос предложения: ленточный весовой дозатор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и сыпучесть", "Минимальный и максимальный расход", "Данные питающего бункера", "Питаемое оборудование", "Интеграция PLC/SCADA"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ленточный весовой дозатор.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Диапазон расхода (т/ч):",
          "Питающий бункер:",
          "Питаемое оборудование:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "المغذي الوزني الحزامي | تلقيم وزني مستمر بالتحكم في المعدل",
        description:
          "مغذٍ وزني حزامي يزن المنتج على الحزام ويحسب معدل التدفق من الحمل والسرعة ويحافظ على المعدل المحدد بضبط سرعة الحزام.",
      },
      breadcrumbLabel: "المغذي الوزني الحزامي",
      h1: "المغذي الوزني الحزامي – تلقيم موزون بمعدل متحكم به في التدفق المستمر",
      productCategory: "مغذٍ وزني حزامي",
      overview: {
        imageAlt: "مغذٍ وزني حزامي قصير مغلق بتلقيم علوي",
        tagline: "المغذي الوزني الحزامي",
        keyFacts: [
          { label: "المهمة", value: "تلقيم بمعدل متحكم به في تدفق مستمر" },
          { label: "القياس", value: "المعدل من حمل الحزام وسرعته" },
          { label: "التحكم", value: "ضبط سرعة الحزام بمحول التردد" },
          { label: "التسجيل", value: "الحمولة الإجمالية والمعدل، PLC/SCADA" },
        ],
        title: "تدفق مستمر لا دفعات: مغذٍ يقيس المعدل ويحافظ عليه",
        paragraphs: [
          "المغذي الوزني الحزامي مغذٍ حزامي وزني يزن المادة السائبة المأخوذة من القادوس أثناء نقلها على حزام قصير ويقدمها إلى العملية التالية بمعدل محدد، وخلافًا للجرعات الدقيقة والكبيرة لا يزن على دفعات، بل يلقّم المحبب أو الخلاط أو خط العملية باستمرار.",
          "يرتكز قسم الوزن في الحزام على جسر وزن فوق خلايا التحميل يقيس حمل المنتج على الحزام، وتُقاس سرعة الحزام بحساس سرعة، ثم يضرب المتحكم الحمل في السرعة لحساب المعدل اللحظي ويقارنه بالقيمة المحددة ويضبط سرعة الحزام عبر محول التردد، فيعود المعدل نحو القيمة المحددة حتى عند تغير تدفق المنتج.",
          "يحد الجسم المغلق من تسرب الغبار في المنتجات المغبرة، ويُرتَّب مخرج قادوس التلقيم لتكوين طبقة منتج مستقرة على الحزام، وتُنقل الحمولة الإجمالية والمعدل إلى PLC أو SCADA.",
        ],
        note: "الناقل المزود بميزان حزامي فقط يقيس المعدل لكنه لا يغيره، أما المغذي الوزني الحزامي فيتحكم في المعدل المقاس بسرعة الحزام، ولا يؤدي الناقل الحزامي العادي هذه الوظيفة.",
      },
      process: {
        title: "تدفق العملية في المغذي الوزني الحزامي",
        intro:
          "يوضح المخطط أخذ المنتج من قادوس التلقيم إلى الحزام وحساب المعدل من الوزن وقياس السرعة وضبط سرعة الحزام وتلقيم المنتج باستمرار إلى العملية التالية، بينما قادوس التلقيم والمحبب معدات منفصلة.",
        note: "يعتمد ثبات القياس على انتظام طبقة المنتج على الحزام ونظافة الحزام وصيانة جسر الوزن.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "الدخول من القادوس", text: "يُؤخذ المنتج إلى الحزام من مخرج قادوس التلقيم." },
          { title: "النقل بالحزام", text: "يمرر الحزام المنتج فوق قسم الوزن." },
          { title: "الوزن والسرعة", text: "تقيس خلايا التحميل حمل الحزام ويقيس الحساس سرعته." },
          { title: "تلقيم مستمر", text: "يُلقَّم المنتج بالمعدل المحدد إلى المحبب أو الخلاط أو الخط." },
        ],
        auxLineLabel: "التحكم في المعدل",
        auxLine: [
          { title: "المعدل اللحظي", text: "يُحسب معدل التدفق الكتلي من حمل الحزام وسرعته." },
          { title: "المقارنة بالقيمة المحددة", text: "يُقارن المعدل المحسوب بالقيمة المحددة." },
          { title: "ضبط السرعة", text: "يرفع المحول سرعة الحزام أو يخفضها لتقريب المعدل من القيمة المحددة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في المغذي الوزني الحزامي",
          svgDesc: "خط المنتج: قادوس التلقيم، المغذي الوزني الحزامي بجسر وزن وقياس سرعة، المحبب أو خط العملية. التحكم: المعدل اللحظي والقيمة المحددة وضبط سرعة الحزام.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "قادوس التلقيم", sub: "دخول المنتج" }],
          drum: { title: "المغذي الوزني الحزامي", sub: "تحكم بالمعدل بالوزن والسرعة" },
          after: [{ title: "محبب / خط", sub: "تلقيم مستمر بالمعدل المحدد" }],
        },
      },
      applications: {
        title: "مجالات استخدام المغذي الوزني الحزامي",
        items: [
          {
            title: "التلقيم المستمر قبل المحبب",
            text: "تلقيم مواد الأسمدة الخام إلى المحبب باستمرار وفق نسب الوصفة، مع مغذٍ منفصل لكل مادة للحفاظ على النسب عبر معدلات التدفق.",
            imageAlt: "حبيبات كلوريد البوتاسيوم المضغوط",
            linkLabel: "أسطوانة التحبيب",
          },
          {
            title: "تلقيم المعادن",
            text: "تلقيم المعادن والمواد المكسرة إلى خط العملية بمعدل متحكم به، مع اختيار الحزام وإحكام الجوانب وفق كاشطية المنتج.",
            imageAlt: "محجر دولوميت",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "خطوط المواد السائبة المستمرة",
            text: "تلقيم المنتج بمعدل متحكم به عند بداية خطوط النواقل الحزامية، فالناقل معدة منفصلة والمغذي الوزني هو الذي يحدد المعدل.",
            imageAlt: "حبيبات الكلنكر",
            linkLabel: "الناقل الحزامي",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع المغذيات الوزنية الحزامية حسب المشروع",
        intro:
          "تصمم PRO MAKINA المغذيات الوزنية الحزامية وفق المنتج ونطاق المعدل المطلوب وقادوس التلقيم ووصلة العملية التالية، مع اختيار عرض الحزام ونطاق السرعة وجسر الوزن وترتيب خلايا التحميل وحساس السرعة والتحكم معًا.",
        highlights: ["جسر وزن على خلايا تحميل", "قياس سرعة الحزام", "تحكم بالمعدل عبر محول التردد", "جسم مغلق وتحكم في الغبار"],
        figureAlt: "رسم لمغذٍ حزامي أسفل قادوس تلقيم مع صندوق تفريغ مغلق",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية وقابلية الانسياب والرطوبة." },
          { title: "نطاق المعدل", text: "أدنى وأعلى معدل محدد ونسب الوصفة." },
          { title: "الحزام والسرعة", text: "عرض الحزام ونطاق السرعة وحمل المنتج على الحزام." },
          { title: "الوزن والقياس", text: "جسر الوزن وترتيب خلايا التحميل وحساس السرعة." },
          { title: "التحكم والتوصيل", text: "PLC/SCADA والحمولة الإجمالية وقادوس التلقيم والمعدة التالية." },
        ],
        dataNote: "يُحدَّد نطاق المعدل والدقة وعرض الحزام وسرعته من بيانات المنتج والعملية، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول المغذي الوزني الحزامي",
        items: [
          {
            question: "ما المغذي الوزني الحزامي؟",
            answer: "مغذٍ حزامي وزني يزن المنتج أثناء نقله على الحزام ويحسب المعدل اللحظي ويلقّم المنتج باستمرار بالمعدل المحدد عبر ضبط سرعة الحزام.",
          },
          {
            question: "ما الفرق بينه وبين الميزان الحزامي؟",
            answer: "يقيس الميزان الحزامي معدل التدفق على الناقل دون تغييره، أما المغذي الوزني فيتحكم في المعدل المقاس بسرعة الحزام ويحافظ عليه عند القيمة المحددة.",
          },
          {
            question: "كيف يُحسب المعدل اللحظي؟",
            answer: "تقيس خلايا التحميل حمل الحزام على قسم الوزن ويقيس حساس السرعة سرعة الحزام، ثم يحسب المتحكم معدل التدفق الكتلي ويجمع الحمولة الإجمالية.",
          },
          {
            question: "ما الفرق بينه وبين الجرعات الدقيقة والكبيرة؟",
            answer: "تزن الجرعات الدقيقة والكبيرة المكونات على دفعات في قادوس وزن، أما المغذي الوزني الحزامي فيقيس المعدل ويتحكم فيه في تدفق مستمر.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات ونطاق المعدل المطلوب وقادوس التلقيم والمعدة التالية وبيانات الأتمتة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للمغذي الوزني الحزامي",
        text: "شاركنا منتجك ونطاق المعدل والعملية المراد تلقيمها، لنحدد معًا المغذي الوزني المناسب.",
        mailSubject: "طلب عرض سعر: مغذٍ وزني حزامي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات وقابلية الانسياب", "أدنى وأعلى معدل", "بيانات قادوس التلقيم", "المعدة المراد تلقيمها", "تكامل PLC/SCADA"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمغذٍ وزني حزامي.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "نطاق المعدل (طن/ساعة):",
          "قادوس التلقيم:",
          "المعدة المراد تلقيمها:",
          "الأتمتة:",
        ],
      },
    },
  },
};
