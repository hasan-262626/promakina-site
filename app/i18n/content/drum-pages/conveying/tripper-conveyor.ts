import type { DrumPageConfig } from "../types";

// Tripper arabalı konveyör: bantlı konveyör hattı üzerinde hareket eden tripper arabası ile
// malzemenin hat boyunca seçilen noktalara boşaltılması. Bağımsız bir yük taşıma aracı değildir.
// Yalnızca 5 ürün fotoğrafı bulunduğundan galeri bölümü kullanılmaz.
const img = (file: string) => `/images/konveyor tripper/${file}`;

export const tripperConveyorPage: DrumPageConfig = {
  key: "tripperConveyor",
  group: "conveying",
  trSlug: "tripper-arabali-konveyor",
  mainImage: img("konevtrip3.jpg"),
  applications: [
    { image: img("konevtrip5.webp"), link: "storageSystems" },
    { image: img("konevtrip6.webp"), link: "fertilizerPlants" },
    { image: img("konevtrip2.webp"), link: "bunkersHoppers" },
  ],
  sectors: ["fertilizerPlants", "mining", "chemicalProcess"],
  resources: ["beltConveyor", "bunkersHoppers", "storageSystems", "chainConveyor"],
  machines: ["conveying", "storageSystems", "dustCollection", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Tripper Arabalı Konveyör | Hareketli Boşaltma | PRO MAKİNA",
        description:
          "Bantlı konveyör hattı boyunca seçilen silo, bunker veya stok noktasına boşaltma yapan tripper arabalı konveyör. Çoklu silo besleme ve stok dağıtımı için.",
      },
      breadcrumbLabel: "Tripper Arabalı Konveyör",
      h1: "Tripper Arabalı Konveyör – Hat Boyunca Hareketli Boşaltma",
      productCategory: "Tripper Arabalı Bantlı Konveyör",
      overview: {
        imageAlt: "Bantlı konveyör üzerinde tripper arabası ve boşaltma şutu",
        tagline: "Tripper Arabalı Bantlı Konveyör",
        keyFacts: [
          { label: "Görev", value: "Hat boyunca seçilebilir boşaltma" },
          { label: "Taşıyıcı", value: "Ana bantlı konveyör" },
          { label: "Hareketli ünite", value: "Ray üzerinde tripper arabası" },
          { label: "Hedef", value: "Silo, bunker veya stok alanı" },
        ],
        title: "Bantlı Konveyörden Birden Fazla Noktaya Dağıtım",
        paragraphs: [
          "Tripper arabalı konveyör, bir bantlı konveyör ile bu konveyörün şasesi boyunca ray üzerinde hareket eden tripper arabasından oluşur. Bant, arabadaki tamburlar üzerinden yukarı kaldırılıp geri döndürülür; malzeme bu noktada banttan ayrılarak arabanın tahliye şutundan aşağıya boşaltılır.",
          "Araba hat boyunca hareket ettirildiğinde boşaltma noktası da değişir. Böylece tek bir konveyör hattı, altında sıralanan silo, bunker veya stok bölmelerini sırayla ya da seçilerek besleyebilir.",
          "Tripper arabası malzemeyi kendisi taşımaz; taşıma görevini ana bantlı konveyör yapar. Tasarımda bant güzergâhı ve tambur düzeni, araba şasesi ve yürütme mekanizması, konum algılama, kablo taşıma ve güvenlik donanımı birlikte ele alınır.",
        ],
        note: "Tripperli hatlarda bant, araba üzerinde ek bir kıvrım yapar; bant tipi, geçiş eğimi ve tambur çapları bu kıvrıma uygun seçilmelidir.",
      },
      process: {
        title: "Tripper Arabalı Konveyör Malzeme Akışı",
        intro:
          "Şema, malzemenin ana bantlı konveyörle taşınıp tripper arabası üzerinden seçilen boşaltma noktasına dağıtıldığı tipik akışı gösterir.",
        note: "Boşaltma noktası, arabanın konumu ile belirlenir; konum algılama ve hareket kontrolü otomasyon sistemine bağlanabilir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Ana banttan besleme", text: "Malzeme, besleme noktasından ana bantlı konveyöre alınır." },
          { title: "Bant ile taşıma", text: "Ana bant malzemeyi hat boyunca tripper arabasına kadar taşır." },
          { title: "Tripper üzerinden boşaltma", text: "Bant arabada yükselir; malzeme tahliye şutuna düşer." },
          { title: "Seçilen noktaya dağıtım", text: "Araba konumuna göre malzeme ilgili silo, bunker veya stok bölmesine iner." },
        ],
        flow: {
          svgTitle: "Tripper arabalı konveyör malzeme akış şeması",
          svgDesc: "Malzeme hattı: ana bant beslemesi, tripper arabalı konveyör, tahliye şutu, seçilen silo veya bunker.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Ana besleme", sub: "Besleme noktası" }],
          drum: { title: "TRİPPER KONVEYÖR", sub: "bant · hareketli araba" },
          after: [
            { title: "Tahliye şutu", sub: "Araba üzerinde" },
            { title: "Silo / bunker", sub: "Hat boyunca dağıtım" },
          ],
        },
      },
      applications: {
        title: "Tripper Arabalı Konveyör Uygulama Alanları",
        items: [
          {
            title: "Çoklu Silo Besleme",
            text: "Sıra hâlindeki siloların üstünden geçen konveyör hattıyla her siloya ayrı besleme yapılması. Araba konumu seçilen siloya göre ayarlanır.",
            imageAlt: "Silolar üzerinde galerili bantlı konveyör ve tripper ünitesi",
            linkLabel: "Depolama ve Besleme Sistemleri",
          },
          {
            title: "Stok Holü Dağıtımı",
            text: "Kapalı stok holünde granül gübre veya benzeri dökme ürünün hat boyunca farklı bölmelere yayılması. Dökülme ve toz için şut ve etek düzeni önemlidir.",
            imageAlt: "Kapalı stok holünde uzun bantlı konveyör hattı",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Bunker Hattı Besleme",
            text: "Proses öncesindeki bunker sırasının ihtiyaca göre beslenmesi. Tripper arabası, seviye bilgisine göre boşaltma noktasını değiştirecek şekilde kontrol edilebilir.",
            imageAlt: "Bunker sırası üzerinde tripper arabalı bantlı konveyör",
            linkLabel: "Bunker ve Hazneler",
          },
        ],
      },
      design: {
        title: "Projeye Özel Tripper Arabalı Konveyör Tasarımı",
        intro:
          "PRO MAKİNA tripper arabalı konveyörleri dağıtım noktalarının sayısı ve konumu, hareket mesafesi ve ana konveyörün kapasitesine göre projelendirir. Bant düzeni, araba şasesi, yürütme, tahliye şutu ve kontrol sistemi birlikte tasarlanır.",
        highlights: ["Dağıtım noktalarına göre hat düzeni", "Ray üzerinde araba ve yürütme", "Konum algılama ve kontrol", "Kablo taşıma ve güvenlik"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Dağıtım Noktaları", text: "Silo, bunker veya stok bölmesi sayısı ve konumları." },
          { title: "Hareket Mesafesi", text: "Arabanın toplam yürüme mesafesi ve hat uzunluğu." },
          { title: "Malzeme ve Kapasite", text: "Malzeme türü, yoğunluk, tane boyutu ve saatlik kapasite." },
          { title: "Bant ve Araba", text: "Bant tipi, tambur düzeni, araba şasesi ve yürütme mekanizması." },
          { title: "Otomasyon ve Güvenlik", text: "Konum algılama, seviye bilgisi, kablo taşıma ve emniyet donanımı." },
        ],
        dataNote: "Araba hızı, yürütme gücü ve bant özellikleri proje verisiyle belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Tripper Arabalı Konveyör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Tripper arabası nasıl çalışır?",
            answer:
              "Bant, tripper arabasındaki tamburlar üzerinden yükseltilip geri döndürülür. Malzeme bu noktada banttan ayrılır ve arabanın şutundan aşağıya boşaltılır. Araba hareket ettikçe boşaltma noktası değişir.",
          },
          {
            question: "Tripper arabası malzemeyi taşır mı?",
            answer:
              "Hayır. Malzemeyi ana bantlı konveyör taşır; tripper arabası yalnızca boşaltma noktasını hat boyunca değiştiren hareketli ünitedir.",
          },
          {
            question: "Hangi noktaya boşaltma yapılacağı nasıl seçilir?",
            answer:
              "Araba elle veya otomasyonla konumlandırılabilir. Konum algılama ve silo seviye bilgisiyle boşaltma noktası otomatik seçilecek şekilde tasarlanabilir.",
          },
          {
            question: "Mevcut bantlı konveyöre tripper eklenebilir mi?",
            answer:
              "Mevcut konveyörün şasesi, bant tipi, tamburları ve hat geometrisi incelenerek değerlendirilir; uygunluk proje bazında belirlenir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Dağıtım noktalarının sayısı ve konumları, hat uzunluğu, malzeme türü ve kapasite, bant bilgisi ve istenen kontrol yöntemi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Tripper arabalı konveyör için teknik teklif alın",
        text: "Dağıtım noktalarınız, hat uzunluğunuz ve malzeme bilgilerinize göre tripper arabalı konveyör sistemini birlikte netleştirelim.",
        mailSubject: "Tripper Arabalı Konveyör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Silo / bunker sayısı ve konumları",
          "Hat uzunluğu ve araba yürüme mesafesi",
          "Malzeme türü ve yoğunluğu",
          "Saatlik kapasite (ton/saat)",
          "Mevcut bant bilgisi (varsa)",
          "İstenen kontrol yöntemi",
        ],
        inquiryLines: [
          "Merhaba, tripper arabalı konveyör için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Kapasite (ton/saat):",
          "Silo / bunker sayısı:",
          "Hat uzunluğu (m):",
          "Mevcut konveyör (varsa):",
          "Kontrol yöntemi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Tripper Conveyor | Belt Conveyor with Travelling Tripper",
        description:
          "Tripper conveyors that discharge bulk material from a belt conveyor into the selected silo, bin or stockpile along the line. For multi-silo feeding and storage.",
      },
      breadcrumbLabel: "Tripper Conveyor",
      h1: "Tripper Conveyor – Travelling Discharge Along the Belt Line",
      productCategory: "Belt Conveyor with Travelling Tripper",
      overview: {
        imageAlt: "Tripper car and discharge chute on a belt conveyor",
        tagline: "Belt Conveyor with Travelling Tripper",
        keyFacts: [
          { label: "Task", value: "Selectable discharge along the line" },
          { label: "Conveying element", value: "Main belt conveyor" },
          { label: "Moving unit", value: "Rail-mounted tripper car" },
          { label: "Destination", value: "Silo, bin or stockpile" },
        ],
        title: "Distribution from One Belt Conveyor to Several Points",
        paragraphs: [
          "A tripper conveyor consists of a belt conveyor and a tripper car that travels on rails along the conveyor frame. The belt is lifted over pulleys on the car and turned back; at this point the material leaves the belt and is discharged downwards through the car's chute.",
          "As the car travels along the line, the discharge point moves with it. A single conveyor line can therefore feed the silos, bins or stockpile bays arranged beneath it, in sequence or selectively.",
          "The tripper car does not carry the material itself; conveying is done by the main belt conveyor. Belt route and pulley arrangement, car frame and travel drive, position sensing, cable handling and safety equipment are designed together.",
        ],
        note: "On tripper lines the belt makes an additional bend over the car; belt type, transition slope and pulley diameters must suit this bend.",
      },
      process: {
        title: "Tripper Conveyor Material Flow",
        intro: "The diagram shows the typical flow in which material is carried by the main belt conveyor and distributed via the tripper car to the selected discharge point.",
        note: "The discharge point is determined by the car position; position sensing and travel control can be connected to the automation system.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Feeding from the main belt", text: "Material is loaded onto the main belt conveyor at the feed point." },
          { title: "Transport on the belt", text: "The main belt carries material along the line to the tripper car." },
          { title: "Discharge over the tripper", text: "The belt rises over the car; material falls into the discharge chute." },
          { title: "Distribution to the selected point", text: "Depending on car position, material drops into the chosen silo, bin or bay." },
        ],
        flow: {
          svgTitle: "Tripper conveyor material flow diagram",
          svgDesc: "Material line: main belt feed, tripper conveyor, discharge chute, selected silo or bin.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Main feed", sub: "Feed point" }],
          drum: { title: "TRIPPER CONVEYOR", sub: "belt · travelling car" },
          after: [
            { title: "Discharge chute", sub: "On the car" },
            { title: "Silo / bin", sub: "Distribution along line" },
          ],
        },
      },
      applications: {
        title: "Tripper Conveyor Applications",
        items: [
          {
            title: "Multi-Silo Feeding",
            text: "Feeding each silo in a row separately with a conveyor line running above them. The car position is set for the selected silo.",
            imageAlt: "Galleried belt conveyor and tripper unit above silos",
            linkLabel: "Storage and Feeding Systems",
          },
          {
            title: "Storage Hall Distribution",
            text: "Spreading granular fertilizer or similar bulk product into different bays of an enclosed storage hall. Chute and skirt design are important for spillage and dust.",
            imageAlt: "Long belt conveyor line in an enclosed storage hall",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Bin Line Feeding",
            text: "Feeding a row of bins ahead of the process as required. The tripper car can be controlled to change the discharge point based on level signals.",
            imageAlt: "Tripper belt conveyor above a row of bins",
            linkLabel: "Bunkers and Hoppers",
          },
        ],
      },
      design: {
        title: "Custom Tripper Conveyor Design",
        intro:
          "PRO MAKINA engineers tripper conveyors around the number and position of discharge points, travel distance and the capacity of the main conveyor. Belt arrangement, car frame, travel drive, discharge chute and control system are designed together.",
        highlights: ["Line layout for discharge points", "Rail-mounted car and travel drive", "Position sensing and control", "Cable handling and safety"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Discharge Points", text: "Number and position of silos, bins or storage bays." },
          { title: "Travel Distance", text: "Total car travel and conveyor length." },
          { title: "Material and Capacity", text: "Material type, density, particle size and hourly capacity." },
          { title: "Belt and Car", text: "Belt type, pulley arrangement, car frame and travel mechanism." },
          { title: "Automation and Safety", text: "Position sensing, level signals, cable handling and safety devices." },
        ],
        dataNote: "Car speed, travel drive power and belt properties are defined from project data; no generic values are stated on this page.",
      },
      faq: {
        title: "Tripper Conveyor FAQ",
        items: [
          {
            question: "How does a tripper car work?",
            answer:
              "The belt is lifted over pulleys on the tripper car and turned back. Material leaves the belt at this point and is discharged through the car's chute. As the car moves, the discharge point changes.",
          },
          {
            question: "Does the tripper car carry the material?",
            answer: "No. The main belt conveyor carries the material; the tripper car is only the moving unit that shifts the discharge point along the line.",
          },
          {
            question: "How is the discharge point selected?",
            answer:
              "The car can be positioned manually or by automation. With position sensing and silo level signals, the discharge point can be selected automatically.",
          },
          {
            question: "Can a tripper be added to an existing belt conveyor?",
            answer: "The existing frame, belt type, pulleys and line geometry are reviewed; suitability is decided for each project.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Number and position of discharge points, conveyor length, material type and capacity, belt data and the required control method.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a tripper conveyor",
        text: "Share your discharge points, conveyor length and material data, and we will define the tripper conveyor system together with you.",
        mailSubject: "Tripper Conveyor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Number and position of silos / bins",
          "Conveyor length and car travel",
          "Material type and density",
          "Hourly capacity (t/h)",
          "Existing belt data (if any)",
          "Required control method",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a tripper conveyor.",
          "",
          "Material:",
          "Capacity (t/h):",
          "Number of silos / bins:",
          "Conveyor length (m):",
          "Existing conveyor (if any):",
          "Control method:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Ленточный конвейер с разгрузочной тележкой (триппер)",
        description:
          "Ленточные конвейеры с разгрузочной тележкой для выгрузки сыпучих материалов в выбранный силос, бункер или отсек склада. Для загрузки нескольких силосов.",
      },
      breadcrumbLabel: "Конвейер с разгрузочной тележкой",
      h1: "Конвейер с разгрузочной тележкой (триппер) – выгрузка по длине трассы",
      productCategory: "Ленточный конвейер с разгрузочной тележкой",
      overview: {
        imageAlt: "Разгрузочная тележка и выпускная воронка на ленточном конвейере",
        tagline: "Конвейер с разгрузочной тележкой",
        keyFacts: [
          { label: "Задача", value: "Выгрузка в выбранной точке трассы" },
          { label: "Транспорт", value: "Основной ленточный конвейер" },
          { label: "Подвижный узел", value: "Тележка на рельсах" },
          { label: "Назначение", value: "Силос, бункер или склад" },
        ],
        title: "Распределение с одного конвейера в несколько точек",
        paragraphs: [
          "Конвейер с разгрузочной тележкой (триппером) состоит из ленточного конвейера и тележки, перемещающейся по рельсам вдоль его рамы. Лента поднимается на барабанах тележки и огибает их; в этой точке материал сходит с ленты и выгружается вниз через воронку тележки.",
          "При перемещении тележки вдоль трассы смещается и точка выгрузки. Поэтому одна конвейерная линия может загружать расположенные под ней силосы, бункеры или отсеки склада последовательно или выборочно.",
          "Сама тележка материал не транспортирует — эту задачу выполняет основной ленточный конвейер. Трасса ленты и расположение барабанов, рама и привод передвижения тележки, датчики положения, кабельная подводка и средства безопасности проектируются совместно.",
        ],
        note: "На тележке лента делает дополнительный перегиб; тип ленты, наклон переходного участка и диаметры барабанов подбираются под этот перегиб.",
      },
      process: {
        title: "Движение материала на конвейере с тележкой",
        intro: "Схема показывает типовой поток: материал транспортируется основным ленточным конвейером и через тележку распределяется в выбранную точку выгрузки.",
        note: "Точка выгрузки определяется положением тележки; датчики положения и управление перемещением могут быть подключены к системе автоматизации.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Загрузка основной ленты", text: "Материал загружается на основной ленточный конвейер в точке питания." },
          { title: "Транспортировка лентой", text: "Лента перемещает материал вдоль трассы до тележки." },
          { title: "Выгрузка через тележку", text: "Лента поднимается на тележке; материал падает в выпускную воронку." },
          { title: "Распределение", text: "В зависимости от положения тележки материал поступает в выбранный силос или отсек." },
        ],
        flow: {
          svgTitle: "Схема движения материала на конвейере с разгрузочной тележкой",
          svgDesc: "Линия материала: загрузка основной ленты, конвейер с тележкой, выпускная воронка, выбранный силос или бункер.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Точка питания" }],
          drum: { title: "КОНВЕЙЕР С ТЕЛЕЖКОЙ", sub: "лента · подвижная тележка" },
          after: [
            { title: "Воронка", sub: "На тележке" },
            { title: "Силос / бункер", sub: "Распределение" },
          ],
        },
      },
      applications: {
        title: "Области применения конвейера с разгрузочной тележкой",
        items: [
          {
            title: "Загрузка нескольких силосов",
            text: "Раздельная загрузка каждого силоса в ряду конвейерной линией, проходящей над ними. Тележка устанавливается над выбранным силосом.",
            imageAlt: "Ленточный конвейер в галерее и разгрузочная тележка над силосами",
            linkLabel: "Системы хранения и подачи",
          },
          {
            title: "Распределение по складу",
            text: "Распределение гранулированных удобрений и подобных продуктов по отсекам закрытого склада. Для снижения просыпей и пыли важна конструкция воронки и уплотнений.",
            imageAlt: "Длинная линия ленточного конвейера в закрытом складе",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Загрузка ряда бункеров",
            text: "Подача материала в ряд бункеров перед технологическим процессом по мере необходимости. Тележкой можно управлять по сигналам уровня.",
            imageAlt: "Ленточный конвейер с тележкой над рядом бункеров",
            linkLabel: "Бункеры и воронки",
          },
        ],
      },
      design: {
        title: "Проектирование конвейеров с разгрузочной тележкой",
        intro:
          "PRO MAKINA проектирует конвейеры с разгрузочной тележкой исходя из количества и расположения точек выгрузки, хода тележки и производительности основного конвейера. Схема ленты, рама тележки, привод передвижения, воронка и система управления разрабатываются совместно.",
        highlights: ["Трасса под точки выгрузки", "Тележка на рельсах и привод", "Датчики положения и управление", "Кабельная подводка и безопасность"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Точки выгрузки", text: "Количество и расположение силосов, бункеров или отсеков." },
          { title: "Ход тележки", text: "Полный ход тележки и длина конвейера." },
          { title: "Материал и производительность", text: "Вид, плотность, крупность и часовая производительность." },
          { title: "Лента и тележка", text: "Тип ленты, схема барабанов, рама и механизм передвижения." },
          { title: "Автоматизация и безопасность", text: "Датчики положения, сигналы уровня, кабель и защита." },
        ],
        dataNote: "Скорость тележки, мощность привода и параметры ленты определяются по данным проекта; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о конвейере с разгрузочной тележкой",
        items: [
          {
            question: "Как работает разгрузочная тележка?",
            answer:
              "Лента поднимается на барабанах тележки и огибает их. В этой точке материал сходит с ленты и выгружается через воронку. При движении тележки меняется точка выгрузки.",
          },
          {
            question: "Перевозит ли тележка материал?",
            answer: "Нет. Материал транспортирует основной ленточный конвейер; тележка лишь смещает точку выгрузки вдоль трассы.",
          },
          {
            question: "Как выбирается точка выгрузки?",
            answer: "Тележку можно устанавливать вручную или автоматически — по датчикам положения и сигналам уровня в силосах.",
          },
          {
            question: "Можно ли добавить тележку к существующему конвейеру?",
            answer: "Рассматриваются рама, тип ленты, барабаны и геометрия трассы действующего конвейера; возможность оценивается по каждому проекту.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Количество и расположение точек выгрузки, длина конвейера, вид материала и производительность, данные ленты и способ управления.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на конвейер с тележкой",
        text: "Сообщите точки выгрузки, длину трассы и данные материала — вместе определим систему конвейера с разгрузочной тележкой.",
        mailSubject: "Запрос предложения: конвейер с разгрузочной тележкой",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Количество и расположение силосов / бункеров",
          "Длина конвейера и ход тележки",
          "Вид и плотность материала",
          "Часовая производительность (т/ч)",
          "Данные существующей ленты (если есть)",
          "Требуемый способ управления",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на конвейер с разгрузочной тележкой.",
          "",
          "Материал:",
          "Производительность (т/ч):",
          "Количество силосов / бункеров:",
          "Длина конвейера (м):",
          "Существующий конвейер (если есть):",
          "Способ управления:",
        ],
      },
    },
    ar: {
      meta: {
        title: "ناقل حزامي بعربة تفريغ متحركة (تريبر)",
        description:
          "ناقلات حزامية بعربة تفريغ متحركة تفرغ المواد السائبة في الصومعة أو القادوس أو قسم التخزين المختار على طول الخط. لتلقيم عدة صوامع وتوزيع المخزون.",
      },
      breadcrumbLabel: "ناقل بعربة تفريغ (تريبر)",
      h1: "ناقل بعربة تفريغ متحركة (تريبر) – تفريغ على طول الخط",
      productCategory: "ناقل حزامي بعربة تفريغ متحركة",
      overview: {
        imageAlt: "عربة تفريغ ومزلق تفريغ على ناقل حزامي",
        tagline: "ناقل حزامي بعربة تفريغ متحركة",
        keyFacts: [
          { label: "المهمة", value: "تفريغ قابل للاختيار على طول الخط" },
          { label: "عنصر النقل", value: "الناقل الحزامي الرئيسي" },
          { label: "الوحدة المتحركة", value: "عربة على قضبان" },
          { label: "الوجهة", value: "صومعة أو قادوس أو مخزن" },
        ],
        title: "توزيع من ناقل حزامي واحد إلى عدة نقاط",
        paragraphs: [
          "يتكون الناقل ذو عربة التفريغ من ناقل حزامي وعربة تتحرك على قضبان على طول هيكله. يُرفع السير فوق أسطوانات العربة ثم يعود، وعند هذه النقطة تنفصل المادة عن السير وتُفرَّغ إلى الأسفل عبر مزلق العربة.",
          "وعند تحريك العربة على طول الخط تتغير نقطة التفريغ معها، فيستطيع خط ناقل واحد تلقيم الصوامع أو القواديس أو أقسام التخزين المرتبة تحته بالتتابع أو بالاختيار.",
          "لا تنقل العربة المادة بنفسها، بل يتولى الناقل الحزامي الرئيسي النقل. ويُصمَّم مسار السير وترتيب الأسطوانات وهيكل العربة ونظام تحريكها واستشعار الموضع وتمديد الكابلات ومعدات السلامة معًا.",
        ],
        note: "في خطوط العربة يصنع السير انحناءً إضافيًا فوقها، لذا يجب أن يلائم نوع السير وميل منطقة الانتقال وأقطار الأسطوانات هذا الانحناء.",
      },
      process: {
        title: "تدفق المادة في الناقل ذي عربة التفريغ",
        intro: "يوضح المخطط التدفق النموذجي الذي تُنقل فيه المادة بالناقل الحزامي الرئيسي وتوزَّع عبر العربة إلى نقطة التفريغ المختارة.",
        note: "تتحدد نقطة التفريغ بموضع العربة، ويمكن ربط استشعار الموضع والتحكم في الحركة بنظام الأتمتة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "التلقيم من السير الرئيسي", text: "تُحمَّل المادة على الناقل الحزامي الرئيسي عند نقطة التلقيم." },
          { title: "النقل على السير", text: "ينقل السير الرئيسي المادة على طول الخط حتى العربة." },
          { title: "التفريغ عبر العربة", text: "يرتفع السير فوق العربة فتسقط المادة في مزلق التفريغ." },
          { title: "التوزيع إلى النقطة المختارة", text: "حسب موضع العربة تنزل المادة إلى الصومعة أو القسم المختار." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الناقل ذي عربة التفريغ",
          svgDesc: "خط المادة: تلقيم السير الرئيسي، الناقل بعربة التفريغ، مزلق التفريغ، الصومعة أو القادوس المختار.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم الرئيسي", sub: "نقطة التلقيم" }],
          drum: { title: "ناقل بعربة تفريغ", sub: "سير · عربة متحركة" },
          after: [
            { title: "مزلق التفريغ", sub: "على العربة" },
            { title: "صومعة / قادوس", sub: "توزيع على طول الخط" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الناقل ذي عربة التفريغ",
        items: [
          {
            title: "تلقيم عدة صوامع",
            text: "تلقيم كل صومعة في الصف بشكل منفصل بخط ناقل يمر فوقها، مع ضبط موضع العربة على الصومعة المختارة.",
            imageAlt: "ناقل حزامي في رواق ووحدة عربة تفريغ فوق الصوامع",
            linkLabel: "أنظمة التخزين والتلقيم",
          },
          {
            title: "التوزيع في صالات التخزين",
            text: "توزيع الأسمدة الحبيبية والمنتجات السائبة المماثلة على أقسام صالة تخزين مغلقة. ويُعد تصميم المزلق والإحكام مهمًا للحد من الانسكاب والغبار.",
            imageAlt: "خط ناقل حزامي طويل داخل صالة تخزين مغلقة",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "تلقيم صف القواديس",
            text: "تلقيم صف القواديس قبل العملية حسب الحاجة، ويمكن التحكم في العربة لتغيير نقطة التفريغ وفق إشارات المستوى.",
            imageAlt: "ناقل حزامي بعربة تفريغ فوق صف من القواديس",
            linkLabel: "القواديس والخزانات",
          },
        ],
      },
      design: {
        title: "تصميم مخصص للناقل ذي عربة التفريغ",
        intro:
          "تصمم PRO MAKINA الناقلات ذات عربة التفريغ وفق عدد نقاط التفريغ ومواقعها ومسافة حركة العربة وسعة الناقل الرئيسي. ويُصمَّم ترتيب السير وهيكل العربة ونظام الحركة ومزلق التفريغ ونظام التحكم معًا.",
        highlights: ["ترتيب الخط حسب نقاط التفريغ", "عربة على قضبان ونظام حركة", "استشعار الموضع والتحكم", "تمديد الكابلات والسلامة"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "نقاط التفريغ", text: "عدد الصوامع أو القواديس أو أقسام التخزين ومواقعها." },
          { title: "مسافة الحركة", text: "إجمالي مسافة حركة العربة وطول الناقل." },
          { title: "المادة والسعة", text: "نوع المادة والكثافة وحجم الجسيمات والسعة بالساعة." },
          { title: "السير والعربة", text: "نوع السير وترتيب الأسطوانات وهيكل العربة وآلية الحركة." },
          { title: "الأتمتة والسلامة", text: "استشعار الموضع وإشارات المستوى وتمديد الكابلات ومعدات الحماية." },
        ],
        dataNote: "تُحدَّد سرعة العربة وقدرة الحركة وخصائص السير من بيانات المشروع، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول الناقل ذي عربة التفريغ",
        items: [
          {
            question: "كيف تعمل عربة التفريغ؟",
            answer:
              "يُرفع السير فوق أسطوانات العربة ثم يعود، فتنفصل المادة عن السير عند هذه النقطة وتُفرَّغ عبر مزلق العربة. وتتغير نقطة التفريغ مع حركة العربة.",
          },
          {
            question: "هل تنقل العربة المادة؟",
            answer: "لا. ينقل الناقل الحزامي الرئيسي المادة، أما العربة فهي الوحدة المتحركة التي تغيّر نقطة التفريغ على طول الخط.",
          },
          {
            question: "كيف تُختار نقطة التفريغ؟",
            answer: "يمكن ضبط موضع العربة يدويًا أو آليًا، ويمكن اختيار نقطة التفريغ تلقائيًا باستشعار الموضع وإشارات مستوى الصوامع.",
          },
          {
            question: "هل يمكن إضافة عربة إلى ناقل قائم؟",
            answer: "تُراجع هيكلة الناقل القائم ونوع السير والأسطوانات وهندسة الخط، وتُحدَّد الملاءمة لكل مشروع.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "عدد نقاط التفريغ ومواقعها وطول الناقل ونوع المادة والسعة وبيانات السير وطريقة التحكم المطلوبة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لناقل بعربة تفريغ",
        text: "شاركنا نقاط التفريغ وطول الخط وبيانات المادة، لنحدد معًا نظام الناقل ذي عربة التفريغ.",
        mailSubject: "طلب عرض سعر: ناقل بعربة تفريغ",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "عدد الصوامع / القواديس ومواقعها",
          "طول الناقل ومسافة حركة العربة",
          "نوع المادة وكثافتها",
          "السعة بالساعة (طن/ساعة)",
          "بيانات السير الحالي (إن وجد)",
          "طريقة التحكم المطلوبة",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لناقل بعربة تفريغ.",
          "",
          "المادة:",
          "السعة (طن/ساعة):",
          "عدد الصوامع / القواديس:",
          "طول الناقل (م):",
          "الناقل الحالي (إن وجد):",
          "طريقة التحكم:",
        ],
      },
    },
  },
};
