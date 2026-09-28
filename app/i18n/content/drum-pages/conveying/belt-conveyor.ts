import type { DrumPageConfig } from "../types";

// Bantlı konveyör: dökme malzemenin bant üzerinde iki nokta arasında sürekli taşınması.
// Kapasite, bant genişliği veya hız değeri verilmez; projeye göre hesaplanır.
const img = (file: string) => `/images/konveyor/${file}`;

export const beltConveyorPage: DrumPageConfig = {
  key: "beltConveyor",
  group: "conveying",
  trSlug: "bantli-konveyorler",
  mainImage: img("konvey2.jpg"),
  applications: [
    { image: img("konvey29.webp"), link: "mining" },
    { image: img("konvey30.webp"), link: "crushers" },
    { image: img("konvey19.jpg"), link: "fertilizerPlants" },
    { image: img("konvey1.jpeg"), link: "storageSystems" },
  ],
  figure: img("konvey9.jpg"),
  gallery: [
    img("konvey8.jpg"),
    img("konvey14.jpg"),
    img("konvey32.jpg"),
    img("konvey38.jpg"),
    img("konveyor3.jpg"),
    img("konvey25.webp"),
    img("konvey11.jpg"),
    img("konvey7.jpg"),
    img("konvey18.png"),
    img("konvey24.webp"),
    img("konvey23.webp"),
    img("konvey39.webp"),
  ],
  sectors: ["mining", "fertilizerPlants", "recycling"],
  resources: ["tripperConveyor", "beltBucketElevator", "chainConveyor", "screwConveyor"],
  machines: ["crushers", "screeningSystems", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Bantlı Konveyör İmalatı | Endüstriyel Bant Konveyör | PRO MAKİNA",
        description:
          "Kum, agrega, mineral, gübre ve tahıl gibi dökme malzemeler için yatay veya eğimli bantlı konveyör imalatı. Kapasite ve hat verinize göre projeye özel tasarım.",
      },
      breadcrumbLabel: "Bantlı Konveyörler",
      h1: "Bantlı Konveyör – Dökme Malzeme için Endüstriyel Bant Konveyör",
      productCategory: "Endüstriyel Bantlı Konveyör",
      overview: {
        imageAlt: "Tesis içinde dökme malzeme taşıyan bantlı konveyör hattı",
        tagline: "Endüstriyel Bantlı Konveyör",
        keyFacts: [
          { label: "Görev", value: "İki nokta arasında sürekli dökme taşıma" },
          { label: "Güzergâh", value: "Yatay veya eğimli hat" },
          { label: "Boyutlandırma", value: "Kapasite, yoğunluk ve hat geometrisine göre" },
          { label: "Kapsam", value: "Konveyör, besleme ve boşaltma bağlantıları" },
        ],
        title: "Dökme Malzemenin Sürekli ve Kontrollü Taşınması",
        paragraphs: [
          "Bantlı konveyör, dökme malzemenin veya uygun birim yüklerin sonsuz bir bant üzerinde, tahrik tamburu ile kuyruk tamburu arasında sürekli taşındığı ekipmandır. Bant, taşıyıcı rulolar üzerinde ilerler; malzeme besleme noktasında banda alınır ve baş tamburda boşaltılır.",
          "Bant genişliği, bant hızı ve bant tipi; saatlik kapasite, malzemenin tane boyutu ve yığın yoğunluğu, hat uzunluğu ve eğimi birlikte değerlendirilerek belirlenir. Eğimli hatlarda malzemenin bant üzerinde geri kaymaması için eğim açısı ürüne göre sınırlandırılır.",
          "Besleme şutu, etek sızdırmazlığı, bant sıyırıcıları ve toz kontrolü; dökülme ve aşınmayı azaltmak için tasarımın parçasıdır. Tambur, gerdirme ve merkezleme düzenleri ise bantın düzgün çalışması ve bakım erişimi gözetilerek seçilir.",
        ],
        note: "Bantlı konveyörde çoğu işletme sorunu besleme ve boşaltma noktalarından kaynaklanır; malzemenin banda ortalı ve kontrollü düşürülmesi, dökülme ve bant kaçıklığını azaltır.",
      },
      process: {
        title: "Bantlı Konveyör Malzeme Akışı",
        intro:
          "Şema, bantlı konveyörün malzemeyi besleme noktasından boşaltma noktasına taşıdığı tipik akışı gösterir. Önceki ve sonraki ekipmanlar tesis kurgusuna göre değişir.",
        note: "Bantlı konveyör malzemenin özelliklerini değiştirmez; yalnızca taşıma yapar. Kırma, eleme veya depolama hattın diğer ekipmanlarında gerçekleşir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Malzeme kabulü", text: "Malzeme bunker, silo çıkışı veya önceki ekipmandan gelir." },
          { title: "Banda besleme", text: "Besleme şutu malzemeyi banda ortalı ve kontrollü bırakır." },
          { title: "Bant üzerinde taşıma", text: "Bant, taşıyıcı rulolar üzerinde yatay veya eğimli hat boyunca ilerler." },
          { title: "Kontrollü tahliye", text: "Malzeme baş tamburdan tahliye şutuna ve sonraki ekipmana aktarılır." },
        ],
        flow: {
          svgTitle: "Bantlı konveyör malzeme akış şeması",
          svgDesc: "Malzeme hattı: bunker veya besleyici, bantlı konveyör, baş tambur tahliyesi, sonraki ekipman.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Bunker, şut, besleyici" }],
          drum: { title: "BANTLI KONVEYÖR", sub: "bant · taşıyıcı rulolar" },
          after: [
            { title: "Tahliye", sub: "Baş tambur ve şut" },
            { title: "Sonraki ekipman", sub: "Silo, elek veya proses" },
          ],
        },
      },
      applications: {
        title: "Bantlı Konveyör Uygulama Alanları",
        items: [
          {
            title: "Kum ve Agrega Taşıma",
            text: "Kum, çakıl ve agregaların stok sahası, eleme ve yükleme noktaları arasında taşınması. Aşındırıcı ürünlerde bant kalitesi, sıyırıcılar ve besleme şutu buna göre seçilir.",
            imageAlt: "Açık sahada kum taşıyan eğimli bantlı konveyör",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kırma ve Eleme Hatları",
            text: "Kırıcı çıkışındaki taş ve cevherin elek ve stok noktalarına aktarılması. İri parçalı malzemede darbe bölgesi rulolama ve besleme yüksekliği birlikte değerlendirilir.",
            imageAlt: "Bant üzerinde taşınan kırılmış taş ve cevher",
            linkLabel: "Kırıcılar ve Parçalayıcılar",
          },
          {
            title: "Gübre ve Granül Ürün Hatları",
            text: "Granül gübre ve benzeri ürünlerin proses ekipmanları, silolar ve paketleme arasında taşınması. Kapalı veya üstü örtülü hat, nem ve toz kontrolü için tercih edilebilir.",
            imageAlt: "Kapalı tesiste açık renkli granül ürün taşıyan bantlı konveyör",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Tahıl ve Yem Hammaddeleri",
            text: "Tahıl ve yem hammaddelerinin kabul, silo ve proses noktaları arasında taşınması. Tozuma ve dökülmeyi azaltmak için besleme ve boşaltma noktaları kapalı tasarlanabilir.",
            imageAlt: "Bant üzerinde taşınan mısır ve tahıl taneleri",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Bantlı Konveyör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA bantlı konveyörleri taşınacak malzeme, saatlik kapasite ve hat geometrisine göre projelendirir. Şase, tamburlar, rulolama, gerdirme, besleme ve boşaltma şutları ile koruyucular tek bir sistem olarak tasarlanır.",
        highlights: ["Kapasiteye göre bant genişliği ve hızı", "Tahrik ve kuyruk tamburu seçimi", "Gerdirme ve bant merkezleme", "Dökülme ve toz kontrolü"],
        figureAlt: "Atölyede bantlı konveyör tahrik tamburu ve taşıyıcı rulo grupları",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Malzeme", text: "Malzeme türü, tane boyutu, yığın yoğunluğu, nem ve aşındırıcılık." },
          { title: "Kapasite", text: "Saatlik taşıma kapasitesi ve çalışma süresi." },
          { title: "Hat Geometrisi", text: "Konveyör uzunluğu, eğim, yükseklik farkı ve güzergâh." },
          { title: "Bant ve Tahrik", text: "Bant tipi ve genişliği, bant hızı, tambur ve motor-redüktör seçimi." },
          { title: "Besleme ve Tahliye", text: "Besleme ve boşaltma noktaları, şutlar, koruyucular ve bakım erişimi." },
        ],
        dataNote: "Bant genişliği, hız ve tahrik gücü bu verilerle hesaplanır; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Bantlı Konveyör Fotoğraf Galerisi",
        captions: [
          "Silo tesisinde eğimli bantlı konveyör",
          "Kapalı hatta taşıyıcı rulolar ve bant",
          "Uzun galeride bantlı konveyör hattı",
          "Bakım yolu olan açık saha konveyörü",
          "Proses binasında konveyör aktarma noktası",
          "Açık sahada çoklu bantlı konveyör hattı",
          "Siloya çıkan kafes gövdeli konveyör",
          "Kapalı galeride taşınan açık renkli ürün",
          "Yataklı bantlı konveyör tamburu",
          "Bant sıyırıcı (temizleyici) grupları",
          "Taşıyıcı rulo sehpaları",
          "Montaja hazır taşıyıcı rulolar",
        ],
      },
      faq: {
        title: "Bantlı Konveyör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Bantlı konveyör kapasitesi nasıl belirlenir?",
            answer:
              "Kapasite; bant genişliği, bant hızı, malzemenin yığın yoğunluğu ve bant üzerindeki kesit alanıyla belirlenir. Eğim ve malzemenin akış davranışı da hesaba katılır.",
          },
          {
            question: "Bantlı konveyör hangi eğimle çalışabilir?",
            answer:
              "Uygun eğim malzemeye ve bant tipine bağlıdır. Malzemenin bant üzerinde geri kaymaması için eğim ürün davranışına göre sınırlanır; dik eğimlerde farklı bant tipleri değerlendirilir.",
          },
          {
            question: "Bant kaçıklığı ve dökülme nasıl azaltılır?",
            answer:
              "Malzemenin banda ortalı beslenmesi, doğru gerdirme, merkezleme rulosu, etek sızdırmazlığı ve bant sıyırıcıları bant kaçıklığını ve dökülmeyi azaltmaya yardımcı olur.",
          },
          {
            question: "Tozlu ürünlerde ne yapılır?",
            answer:
              "Besleme ve boşaltma noktaları kapatılabilir, hat üst kapaklarla örtülebilir ve gerekli noktalarda toz emişi yapılabilir. Çözüm ürünün tozuma davranışına göre seçilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Malzeme türü, tane boyutu, yığın yoğunluğu, saatlik kapasite, hat uzunluğu, eğim veya yükseklik farkı ile besleme ve boşaltma noktaları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Bantlı konveyör için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve hat güzergâhınıza göre bantlı konveyörü ve besleme-boşaltma noktalarını birlikte netleştirelim.",
        mailSubject: "Bantlı Konveyör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve tane boyutu",
          "Yığın yoğunluğu",
          "Saatlik kapasite (ton/saat)",
          "Hat uzunluğu ve eğim / yükseklik farkı",
          "Besleme ve boşaltma noktaları",
          "Açık saha veya kapalı alan kurulumu",
        ],
        inquiryLines: [
          "Merhaba, bantlı konveyör için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Tane boyutu:",
          "Kapasite (ton/saat):",
          "Hat uzunluğu (m):",
          "Eğim / yükseklik farkı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Belt Conveyor Manufacturer | Industrial Belt Conveyors",
        description:
          "Horizontal and inclined belt conveyors for sand, aggregates, minerals, fertilizer and grain. Project-specific design based on your capacity and line data.",
      },
      breadcrumbLabel: "Belt Conveyor",
      h1: "Belt Conveyor – Industrial Belt Conveyors for Bulk Materials",
      productCategory: "Industrial Belt Conveyor",
      overview: {
        imageAlt: "Belt conveyor line carrying bulk material inside a plant",
        tagline: "Industrial Belt Conveyor",
        keyFacts: [
          { label: "Task", value: "Continuous bulk transport between two points" },
          { label: "Route", value: "Horizontal or inclined line" },
          { label: "Sizing", value: "Capacity, bulk density and line geometry" },
          { label: "Scope", value: "Conveyor, feed and discharge connections" },
        ],
        title: "Continuous, Controlled Transport of Bulk Material",
        paragraphs: [
          "A belt conveyor carries bulk material, or suitable unit loads, continuously on an endless belt running between a drive pulley and a tail pulley. The belt travels on carrying idlers; material is loaded at the feed point and discharged at the head pulley.",
          "Belt width, speed and type are selected by considering hourly capacity, particle size and bulk density of the material, conveyor length and inclination. On inclined lines the angle is limited according to the product so that material does not roll back on the belt.",
          "Feed chute, skirt sealing, belt scrapers and dust control are part of the design to reduce spillage and wear. Pulleys, take-up and belt tracking arrangements are selected with smooth belt running and maintenance access in mind.",
        ],
        note: "Most operating problems on a belt conveyor start at the feed and discharge points; loading material centrally and in a controlled way reduces spillage and belt mistracking.",
      },
      process: {
        title: "Belt Conveyor Material Flow",
        intro:
          "The diagram shows the typical flow in which the belt conveyor carries material from the feed point to the discharge point. Upstream and downstream equipment depends on the plant concept.",
        note: "A belt conveyor does not change the material; it only transports it. Crushing, screening or storage take place in other equipment of the line.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material intake", text: "Material comes from a hopper, silo outlet or upstream equipment." },
          { title: "Loading onto the belt", text: "The feed chute places material centrally and steadily on the belt." },
          { title: "Transport on the belt", text: "The belt runs on carrying idlers along a horizontal or inclined route." },
          { title: "Controlled discharge", text: "Material leaves at the head pulley into the discharge chute and next equipment." },
        ],
        flow: {
          svgTitle: "Belt conveyor material flow diagram",
          svgDesc: "Material line: hopper or feeder, belt conveyor, head pulley discharge, downstream equipment.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Hopper, chute, feeder" }],
          drum: { title: "BELT CONVEYOR", sub: "belt · carrying idlers" },
          after: [
            { title: "Discharge", sub: "Head pulley and chute" },
            { title: "Next equipment", sub: "Silo, screen or process" },
          ],
        },
      },
      applications: {
        title: "Belt Conveyor Applications",
        items: [
          {
            title: "Sand and Aggregate Handling",
            text: "Transporting sand, gravel and aggregates between stockyards, screening and loading points. For abrasive products, belt grade, scrapers and feed chute are selected accordingly.",
            imageAlt: "Inclined belt conveyor carrying sand in an open yard",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Crushing and Screening Lines",
            text: "Conveying stone and ore from crusher discharge to screens and stockpiles. For coarse material, impact-zone idlers and drop height at the feed point are assessed together.",
            imageAlt: "Crushed stone and ore carried on a conveyor belt",
            linkLabel: "Crushers and Shredders",
          },
          {
            title: "Fertilizer and Granular Product Lines",
            text: "Moving granular fertilizer and similar products between process equipment, silos and packing. Enclosed or covered lines can be chosen for moisture and dust control.",
            imageAlt: "Belt conveyor carrying light-coloured granular product in an enclosed plant",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Grain and Feed Raw Materials",
            text: "Conveying grain and feed raw materials between intake, silos and process points. Feed and discharge points can be enclosed to reduce dust and spillage.",
            imageAlt: "Corn and grain kernels on a conveyor belt",
            linkLabel: "Storage and Feeding Systems",
          },
        ],
      },
      design: {
        title: "Custom Belt Conveyor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers belt conveyors around the material, hourly capacity and line geometry. Frame, pulleys, idlers, take-up, feed and discharge chutes and guards are designed as one system.",
        highlights: ["Belt width and speed sized to capacity", "Drive and tail pulley selection", "Take-up and belt tracking", "Spillage and dust control"],
        figureAlt: "Belt conveyor drive pulley and carrying idler sets in a workshop",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Material", text: "Material type, particle size, bulk density, moisture and abrasiveness." },
          { title: "Capacity", text: "Hourly conveying capacity and operating hours." },
          { title: "Line Geometry", text: "Conveyor length, inclination, lift and route." },
          { title: "Belt and Drive", text: "Belt type and width, belt speed, pulley and gear motor selection." },
          { title: "Feed and Discharge", text: "Loading and discharge points, chutes, guards and maintenance access." },
        ],
        dataNote: "Belt width, speed and drive power are calculated from these data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Belt Conveyor Photo Gallery",
        captions: [
          "Inclined belt conveyor in a silo plant",
          "Carrying idlers and belt on an enclosed line",
          "Belt conveyor line in a long gallery",
          "Outdoor conveyor with maintenance walkway",
          "Conveyor transfer point in a process building",
          "Multiple belt conveyor lines in an open yard",
          "Truss-frame conveyor rising to a silo",
          "Light-coloured product in an enclosed gallery",
          "Belt conveyor pulley with bearings",
          "Belt scraper (cleaner) assemblies",
          "Carrying idler frames",
          "Carrying idlers ready for assembly",
        ],
      },
      faq: {
        title: "Belt Conveyor FAQ",
        items: [
          {
            question: "How is belt conveyor capacity determined?",
            answer:
              "Capacity depends on belt width, belt speed, bulk density of the material and its cross-section on the belt. Inclination and flow behaviour of the material are also taken into account.",
          },
          {
            question: "At what inclination can a belt conveyor operate?",
            answer:
              "The suitable angle depends on the material and belt type. It is limited according to product behaviour so that material does not roll back; for steeper routes other belt types are assessed.",
          },
          {
            question: "How are belt mistracking and spillage reduced?",
            answer:
              "Central loading, correct take-up tension, training idlers, skirt sealing and belt scrapers all help reduce mistracking and spillage.",
          },
          {
            question: "What is done for dusty products?",
            answer:
              "Feed and discharge points can be enclosed, the line can be covered and dust extraction can be added where required. The solution depends on how dusty the product is.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Material type, particle size, bulk density, hourly capacity, conveyor length, inclination or lift and the feed and discharge points.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a belt conveyor",
        text: "Share your material, capacity and route, and we will define the belt conveyor and its feed and discharge points together with you.",
        mailSubject: "Belt Conveyor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and particle size",
          "Bulk density",
          "Hourly capacity (t/h)",
          "Conveyor length and inclination / lift",
          "Feed and discharge points",
          "Outdoor or indoor installation",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a belt conveyor.",
          "",
          "Material:",
          "Particle size:",
          "Capacity (t/h):",
          "Conveyor length (m):",
          "Inclination / lift:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ленточный конвейер | Промышленные ленточные конвейеры",
        description:
          "Горизонтальные и наклонные ленточные конвейеры для песка, щебня, минералов, удобрений и зерна. Проектирование по производительности и трассе.",
      },
      breadcrumbLabel: "Ленточный конвейер",
      h1: "Ленточный конвейер – промышленные конвейеры для сыпучих грузов",
      productCategory: "Промышленный ленточный конвейер",
      overview: {
        imageAlt: "Линия ленточного конвейера с сыпучим материалом в цехе",
        tagline: "Промышленный ленточный конвейер",
        keyFacts: [
          { label: "Задача", value: "Непрерывная транспортировка между двумя точками" },
          { label: "Трасса", value: "Горизонтальная или наклонная" },
          { label: "Расчёт", value: "Производительность, плотность и геометрия" },
          { label: "Объём поставки", value: "Конвейер, узлы загрузки и разгрузки" },
        ],
        title: "Непрерывная и контролируемая транспортировка сыпучих грузов",
        paragraphs: [
          "Ленточный конвейер непрерывно перемещает сыпучий материал или подходящие штучные грузы на бесконечной ленте, движущейся между приводным и натяжным (хвостовым) барабанами. Лента опирается на роликоопоры; материал загружается в точке питания и разгружается на головном барабане.",
          "Ширина, скорость и тип ленты подбираются с учётом часовой производительности, крупности и насыпной плотности материала, длины и угла наклона трассы. На наклонных участках угол ограничивается по свойствам продукта, чтобы материал не скатывался по ленте.",
          "Загрузочная воронка, бортовые уплотнения, очистители ленты и пылеподавление входят в конструкцию для снижения просыпей и износа. Барабаны, натяжное устройство и центрирование ленты выбираются с учётом ровного хода и доступа для обслуживания.",
        ],
        note: "Большинство эксплуатационных проблем ленточного конвейера возникает в узлах загрузки и разгрузки; центрированная и контролируемая загрузка снижает просыпи и сход ленты.",
      },
      process: {
        title: "Движение материала на ленточном конвейере",
        intro:
          "Схема показывает типовой поток: конвейер перемещает материал от точки загрузки до точки разгрузки. Оборудование до и после конвейера зависит от концепции предприятия.",
        note: "Ленточный конвейер не изменяет материал — он только транспортирует его. Дробление, грохочение или хранение выполняются другим оборудованием линии.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Приём материала", text: "Материал поступает из бункера, силоса или предыдущего оборудования." },
          { title: "Загрузка на ленту", text: "Загрузочная воронка подаёт материал по центру ленты равномерно." },
          { title: "Транспортировка", text: "Лента движется по роликоопорам по горизонтальной или наклонной трассе." },
          { title: "Контролируемая разгрузка", text: "На головном барабане материал попадает в разгрузочную воронку и далее." },
        ],
        flow: {
          svgTitle: "Схема движения материала на ленточном конвейере",
          svgDesc: "Линия материала: бункер или питатель, ленточный конвейер, разгрузка на головном барабане, следующее оборудование.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Бункер, питатель" }],
          drum: { title: "ЛЕНТОЧНЫЙ КОНВЕЙЕР", sub: "лента · роликоопоры" },
          after: [
            { title: "Разгрузка", sub: "Головной барабан" },
            { title: "Далее", sub: "Силос, грохот, процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения ленточного конвейера",
        items: [
          {
            title: "Транспортировка песка и щебня",
            text: "Перемещение песка, гравия и щебня между складом, грохочением и погрузкой. Для абразивных материалов подбираются класс ленты, очистители и загрузочная воронка.",
            imageAlt: "Наклонный ленточный конвейер с песком на открытой площадке",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Линии дробления и грохочения",
            text: "Подача камня и руды от дробилки к грохотам и складам. Для крупнокускового материала совместно оцениваются амортизирующие роликоопоры и высота падения при загрузке.",
            imageAlt: "Дроблёный камень и руда на конвейерной ленте",
            linkLabel: "Дробилки и шредеры",
          },
          {
            title: "Линии удобрений и гранул",
            text: "Транспортировка гранулированных удобрений и подобных продуктов между оборудованием, силосами и фасовкой. Для защиты от влаги и пыли возможна закрытая или укрытая трасса.",
            imageAlt: "Ленточный конвейер со светлым гранулированным продуктом в закрытом цехе",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Зерно и сырьё для кормов",
            text: "Перемещение зерна и кормового сырья между приёмкой, силосами и производством. Узлы загрузки и разгрузки могут быть закрытыми для снижения пыли и просыпей.",
            imageAlt: "Зёрна кукурузы и зерно на конвейерной ленте",
            linkLabel: "Системы хранения и подачи",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление ленточных конвейеров",
        intro:
          "PRO MAKINA проектирует ленточные конвейеры исходя из материала, часовой производительности и геометрии трассы. Рама, барабаны, роликоопоры, натяжное устройство, загрузочные и разгрузочные воронки и ограждения разрабатываются как единая система.",
        highlights: ["Ширина и скорость ленты по производительности", "Выбор приводного и хвостового барабанов", "Натяжение и центрирование ленты", "Снижение просыпей и пыления"],
        figureAlt: "Приводной барабан и роликоопоры ленточного конвейера в цехе",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Материал", text: "Вид, крупность, насыпная плотность, влажность и абразивность." },
          { title: "Производительность", text: "Часовая производительность и режим работы." },
          { title: "Геометрия трассы", text: "Длина, угол наклона, высота подъёма и трасса." },
          { title: "Лента и привод", text: "Тип и ширина ленты, скорость, барабаны и мотор-редуктор." },
          { title: "Загрузка и разгрузка", text: "Точки загрузки и разгрузки, воронки, ограждения и доступ." },
        ],
        dataNote: "Ширина и скорость ленты, мощность привода рассчитываются по этим данным; общие значения на странице не приводятся.",
      },
      gallery: {
        title: "Фотогалерея ленточных конвейеров",
        captions: [
          "Наклонный ленточный конвейер на элеваторном комплексе",
          "Роликоопоры и лента на закрытой линии",
          "Ленточный конвейер в длинной галерее",
          "Открытый конвейер с проходом для обслуживания",
          "Узел пересыпки в производственном корпусе",
          "Несколько ленточных конвейеров на площадке",
          "Конвейер в ферменной галерее к силосу",
          "Светлый продукт в закрытой галерее",
          "Барабан ленточного конвейера с подшипниками",
          "Очистители конвейерной ленты",
          "Рамы роликоопор",
          "Ролики, готовые к монтажу",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о ленточном конвейере",
        items: [
          {
            question: "Как определяется производительность ленточного конвейера?",
            answer:
              "Производительность зависит от ширины и скорости ленты, насыпной плотности материала и площади его сечения на ленте. Учитываются также угол наклона и сыпучесть материала.",
          },
          {
            question: "При каком угле наклона может работать конвейер?",
            answer:
              "Допустимый угол зависит от материала и типа ленты и ограничивается так, чтобы материал не скатывался. Для крутых трасс рассматриваются другие типы лент.",
          },
          {
            question: "Как уменьшить сход ленты и просыпи?",
            answer:
              "Центрированная загрузка, правильное натяжение, центрирующие роликоопоры, бортовые уплотнения и очистители ленты помогают снизить сход ленты и просыпи.",
          },
          {
            question: "Что делать с пылящими продуктами?",
            answer:
              "Узлы загрузки и разгрузки можно закрыть, трассу укрыть кожухами, а в нужных точках установить аспирацию. Решение выбирается по склонности продукта к пылению.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид материала, крупность, насыпная плотность, часовая производительность, длина конвейера, угол наклона или высота подъёма, точки загрузки и разгрузки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на ленточный конвейер",
        text: "Сообщите материал, производительность и трассу — вместе определим конвейер и узлы загрузки и разгрузки.",
        mailSubject: "Запрос предложения: ленточный конвейер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и крупность",
          "Насыпная плотность",
          "Часовая производительность (т/ч)",
          "Длина и угол наклона / высота подъёма",
          "Точки загрузки и разгрузки",
          "Открытая площадка или помещение",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на ленточный конвейер.",
          "",
          "Материал:",
          "Крупность:",
          "Производительность (т/ч):",
          "Длина (м):",
          "Угол / высота подъёма:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "تصنيع السيور الناقلة | ناقلات حزامية صناعية",
        description:
          "ناقلات حزامية أفقية ومائلة للرمل والركام والمعادن والأسمدة والحبوب. تصميم حسب المشروع وفق السعة ومسار الخط.",
      },
      breadcrumbLabel: "الناقل الحزامي",
      h1: "الناقل الحزامي – ناقلات صناعية للمواد السائبة",
      productCategory: "ناقل حزامي صناعي",
      overview: {
        imageAlt: "خط ناقل حزامي ينقل مادة سائبة داخل منشأة",
        tagline: "ناقل حزامي صناعي",
        keyFacts: [
          { label: "المهمة", value: "نقل مستمر للمواد السائبة بين نقطتين" },
          { label: "المسار", value: "أفقي أو مائل" },
          { label: "التحجيم", value: "حسب السعة والكثافة وهندسة الخط" },
          { label: "نطاق التوريد", value: "الناقل ووصلات التلقيم والتفريغ" },
        ],
        title: "نقل مستمر ومضبوط للمواد السائبة",
        paragraphs: [
          "الناقل الحزامي معدة تنقل المواد السائبة أو الأحمال المناسبة باستمرار على سير لا نهائي يتحرك بين أسطوانة الإدارة والأسطوانة الخلفية. يسير الحزام على بكرات حاملة، وتُحمَّل المادة عند نقطة التلقيم وتُفرَّغ عند الأسطوانة الأمامية.",
          "يُختار عرض السير وسرعته ونوعه وفق السعة بالساعة وحجم الجسيمات والكثافة الظاهرية وطول الخط وميله. وفي الخطوط المائلة تُحدَّد زاوية الميل حسب المنتج كي لا تنزلق المادة إلى الخلف.",
          "تُعد مزالق التلقيم وإحكام الجوانب وكاشطات السير والتحكم في الغبار جزءًا من التصميم لتقليل الانسكاب والتآكل. وتُختار الأسطوانات ووحدة الشد وضبط مسار السير بما يضمن سيرًا منتظمًا وسهولة الصيانة.",
        ],
        note: "تبدأ معظم مشكلات تشغيل الناقل الحزامي عند نقاط التلقيم والتفريغ؛ فتحميل المادة في منتصف السير وبشكل مضبوط يقلل الانسكاب وانحراف السير.",
      },
      process: {
        title: "تدفق المادة على الناقل الحزامي",
        intro:
          "يوضح المخطط التدفق النموذجي الذي ينقل فيه الناقل المادة من نقطة التلقيم إلى نقطة التفريغ. وتختلف المعدات السابقة واللاحقة حسب تصور المنشأة.",
        note: "لا يغيّر الناقل الحزامي خصائص المادة بل ينقلها فقط، أما التكسير أو الغربلة أو التخزين فتتم في معدات أخرى في الخط.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "استلام المادة", text: "تأتي المادة من قادوس أو مخرج صومعة أو معدة سابقة." },
          { title: "التحميل على السير", text: "يضع مزلق التلقيم المادة في منتصف السير بانتظام." },
          { title: "النقل على السير", text: "يتحرك السير على البكرات الحاملة في مسار أفقي أو مائل." },
          { title: "تفريغ مضبوط", text: "تخرج المادة عند الأسطوانة الأمامية إلى مزلق التفريغ والمعدة التالية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة على الناقل الحزامي",
          svgDesc: "خط المادة: قادوس أو مُلقِّم، الناقل الحزامي، التفريغ عند الأسطوانة الأمامية، المعدة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "قادوس، مزلق، مُلقِّم" }],
          drum: { title: "الناقل الحزامي", sub: "سير · بكرات حاملة" },
          after: [
            { title: "التفريغ", sub: "الأسطوانة الأمامية" },
            { title: "المعدة التالية", sub: "صومعة، غربال، عملية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الناقل الحزامي",
        items: [
          {
            title: "نقل الرمل والركام",
            text: "نقل الرمل والحصى والركام بين ساحات التخزين والغربلة ونقاط التحميل. وفي المواد الكاشطة يُختار نوع السير والكاشطات ومزلق التلقيم وفقًا لذلك.",
            imageAlt: "ناقل حزامي مائل ينقل الرمل في ساحة مفتوحة",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "خطوط التكسير والغربلة",
            text: "نقل الحجر والخام من مخرج الكسارة إلى الغرابيل وأكوام التخزين. وفي المواد الخشنة تُقيَّم بكرات منطقة الصدم وارتفاع السقوط عند التلقيم معًا.",
            imageAlt: "حجر وخام مكسّر على سير ناقل",
            linkLabel: "الكسارات والمفرمات",
          },
          {
            title: "خطوط الأسمدة والمنتجات الحبيبية",
            text: "نقل الأسمدة الحبيبية والمنتجات المماثلة بين معدات العملية والصوامع والتعبئة. ويمكن اختيار خط مغلق أو مغطى للتحكم في الرطوبة والغبار.",
            imageAlt: "ناقل حزامي ينقل منتجًا حبيبيًا فاتح اللون داخل منشأة مغلقة",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "الحبوب ومواد الأعلاف الخام",
            text: "نقل الحبوب ومواد الأعلاف بين الاستلام والصوامع ونقاط العملية. ويمكن إغلاق نقاط التلقيم والتفريغ لتقليل الغبار والانسكاب.",
            imageAlt: "حبوب ذرة وحبوب على سير ناقل",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع ناقلات حزامية مخصصة",
        intro:
          "تصمم PRO MAKINA الناقلات الحزامية وفق المادة المنقولة والسعة بالساعة وهندسة الخط. ويُصمَّم الهيكل والأسطوانات والبكرات ووحدة الشد ومزالق التلقيم والتفريغ والحواجز الواقية كنظام واحد.",
        highlights: ["عرض وسرعة السير حسب السعة", "اختيار أسطوانتي الإدارة والخلفية", "الشد وضبط مسار السير", "التحكم في الانسكاب والغبار"],
        figureAlt: "أسطوانة إدارة ناقل حزامي ومجموعات البكرات الحاملة في ورشة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة", text: "نوع المادة وحجم الجسيمات والكثافة الظاهرية والرطوبة والكشط." },
          { title: "السعة", text: "سعة النقل بالساعة وساعات التشغيل." },
          { title: "هندسة الخط", text: "طول الناقل والميل وفرق الارتفاع والمسار." },
          { title: "السير والإدارة", text: "نوع السير وعرضه وسرعته واختيار الأسطوانات والمحرك المخفض." },
          { title: "التلقيم والتفريغ", text: "نقاط التلقيم والتفريغ والمزالق والحواجز وسهولة الصيانة." },
        ],
        dataNote: "يُحسب عرض السير وسرعته وقدرة الإدارة من هذه البيانات، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور الناقلات الحزامية",
        captions: [
          "ناقل حزامي مائل في منشأة صوامع",
          "بكرات حاملة وسير في خط مغلق",
          "خط ناقل حزامي في رواق طويل",
          "ناقل خارجي مع ممر صيانة",
          "نقطة نقل بين ناقلين في مبنى العملية",
          "خطوط ناقلات متعددة في ساحة مفتوحة",
          "ناقل بهيكل شبكي يصعد إلى صومعة",
          "منتج فاتح اللون في رواق مغلق",
          "أسطوانة ناقل حزامي مع المحامل",
          "مجموعات كاشطات تنظيف السير",
          "حوامل البكرات الحاملة",
          "بكرات حاملة جاهزة للتركيب",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الناقل الحزامي",
        items: [
          {
            question: "كيف تُحدَّد سعة الناقل الحزامي؟",
            answer:
              "تعتمد السعة على عرض السير وسرعته والكثافة الظاهرية للمادة ومساحة مقطعها على السير، مع مراعاة الميل وسلوك انسياب المادة.",
          },
          {
            question: "ما الميل الذي يعمل به الناقل الحزامي؟",
            answer:
              "يعتمد الميل المناسب على المادة ونوع السير، ويُحدَّد بحيث لا تنزلق المادة إلى الخلف. وفي المسارات الحادة تُقيَّم أنواع سيور أخرى.",
          },
          {
            question: "كيف يُحد من انحراف السير والانسكاب؟",
            answer:
              "يساعد التحميل في المنتصف والشد الصحيح وبكرات الضبط وإحكام الجوانب وكاشطات السير على تقليل الانحراف والانسكاب.",
          },
          {
            question: "ماذا يُفعل مع المنتجات المسببة للغبار؟",
            answer:
              "يمكن إغلاق نقاط التلقيم والتفريغ وتغطية الخط وإضافة شفط الغبار عند الحاجة، ويُختار الحل وفق قابلية المنتج لإثارة الغبار.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المادة وحجم الجسيمات والكثافة الظاهرية والسعة بالساعة وطول الناقل والميل أو فرق الارتفاع ونقاط التلقيم والتفريغ.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لناقل حزامي",
        text: "شاركنا المادة والسعة ومسار الخط، لنحدد معًا الناقل الحزامي ونقاط التلقيم والتفريغ.",
        mailSubject: "طلب عرض سعر: ناقل حزامي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وحجم الجسيمات",
          "الكثافة الظاهرية",
          "السعة بالساعة (طن/ساعة)",
          "طول الناقل والميل / فرق الارتفاع",
          "نقاط التلقيم والتفريغ",
          "تركيب خارجي أو داخلي",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لناقل حزامي.",
          "",
          "المادة:",
          "حجم الجسيمات:",
          "السعة (طن/ساعة):",
          "طول الناقل (م):",
          "الميل / فرق الارتفاع:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
