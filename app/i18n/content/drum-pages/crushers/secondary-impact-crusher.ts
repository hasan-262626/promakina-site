import type { DrumPageConfig } from "../types";

// Bıçaklı sekonder kırıcı: fotoğraflara göre yatay milli, darbe bıçaklı ikinci kademe darbeli kırıcı.
// Ön kırılmış malzemeyi daha küçük boyuta indirir; belirli milimetre boyutu veya her zaman elekli yapı iddiası yoktur.
// Primer kırıcıdan farklı fotoğraflar ve metinler kullanılır.
const img = (file: string) => `/images/kirici seconder/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const secondaryImpactCrusherPage: DrumPageConfig = {
  key: "secondaryImpactCrusher",
  group: "crushers",
  trSlug: "bicakli-sekonder-kiricilar",
  mainImage: img("kiriciseconder2.jpg"),
  applications: [
    { image: app("kirmatas-gabion.webp"), link: "mining" },
    { image: app("bantta-cevher.webp"), link: "conveying" },
    { image: app("elek-kirma-hatti.webp"), link: "screeningSystems" },
  ],
  figure: img("kiriciseconder5.jpg"),
  gallery: [img("kiriciseconder1.jpg"), img("kiriciseconder3.jpg"), img("kiriciseconder4.jpg")],
  sectors: ["mining", "recycling", "chemicalProcess"],
  resources: ["primaryImpactCrusher", "jawCrusher", "vsiCrusher", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Bıçaklı Sekonder Kırıcı İmalatı | İkinci Kademe Kırıcı | PRO MAKİNA",
        description:
          "Ön kırılmış taş ve cevheri darbe bıçaklı rotorla daha küçük ve kontrollü boyuta indiren bıçaklı sekonder kırıcı imalatı. Kırma-eleme hatları için projeye özel.",
      },
      breadcrumbLabel: "Bıçaklı Sekonder Kırıcılar",
      h1: "Bıçaklı Sekonder Kırıcı – İkinci Kademe Darbeli Kırıcı",
      productCategory: "Sekonder Darbeli Kırıcı",
      overview: {
        imageAlt: "Beyaz gövdeli bıçaklı sekonder kırıcı ve hidrolik açma silindirleri",
        tagline: "Sekonder Darbeli Kırıcı",
        keyFacts: [
          { label: "Kırma prensibi", value: "Darbe bıçağı ve plakalara çarpma" },
          { label: "Kademe", value: "İkinci kademe (ara / ince kırma)" },
          { label: "Besleme", value: "Primer kırıcıdan gelen ön kırılmış ürün" },
          { label: "Çıkış kontrolü", value: "Plaka ayarı, rotor hızı ve eleme" },
        ],
        title: "Ön Kırılmış Malzemenin Kontrollü İkinci Kademe Kırılması",
        paragraphs: [
          "Bıçaklı sekonder kırıcı, primer kırıcıdan veya ön kırmadan gelen malzemeyi daha küçük boyuta indirmek için kullanılan yatay milli darbeli kırıcıdır. Rotor üzerindeki darbe bıçakları malzemeye çarpar, parçalar gövdedeki ayarlanabilir darbe plakalarına fırlatılarak kırılır.",
          "Besleme boyutu primer kırıcıya göre daha küçük olduğu için besleme ağzı ve rotor, daha ince ürün elde edilecek şekilde tasarlanır. Ürün boyutu; darbe plakası ile rotor arasındaki açıklık, rotor hızı ve malzemenin kırılma davranışıyla yönlendirilir.",
          "Sekonder kırıcı genellikle bir elekle kapalı devrede çalışır: hedef boyuta ulaşan ürün ayrılır, iri kalan kısım kırıcıya geri döner. Elde edilecek ürün dağılımı malzemeye bağlıdır ve eleme devresiyle birlikte belirlenir.",
        ],
        note: "Primer ve sekonder kırıcılar farklı görevler üstlenir: primer kırıcı iri malzemeyi kaba boyuta indirir, sekonder kırıcı ise bu ürünü sonraki eleme ve kullanım için daha küçük boyuta getirir.",
      },
      process: {
        title: "Bıçaklı Sekonder Kırıcı Malzeme Akışı",
        intro:
          "Şema, sekonder kırıcının ön kırılmış ürünü alıp ikinci kademede kırdığı ve eleme devresine gönderdiği tipik akışı gösterir. Primer kırıcı ve elek ayrı ekipmanlardır.",
        note: "Elekte iri kalan malzeme kırıcıya geri döndürülerek kapalı devre oluşturulabilir; devre düzeni tesis kurgusuna göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Ön kırılmış ürün besleme", text: "Primer kırıcıdan gelen malzeme besleyici veya konveyörle verilir." },
          { title: "Darbe bıçaklarıyla kırma", text: "Rotordaki bıçaklar malzemeye çarparak onu küçültür." },
          { title: "Ayarlı plakalarda kırılma", text: "Plaka ile rotor arasındaki açıklık ürün boyutunu yönlendirir." },
          { title: "Sonraki prosese tahliye", text: "Ürün eleğe gider; iri kalan kısım kırıcıya geri dönebilir." },
        ],
        flow: {
          svgTitle: "Bıçaklı sekonder kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: primer kırıcı çıkışı, bıçaklı sekonder kırıcı, tahliye, eleme ve geri dönüş.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Ön kırılmış ürün", sub: "Primer kırıcı çıkışı" }],
          drum: { title: "SEKONDER KIRICI", sub: "rotor · darbe bıçağı · plaka" },
          after: [
            { title: "Tahliye", sub: "Alt çıkış" },
            { title: "Eleme devresi", sub: "Ürün ve geri dönüş" },
          ],
        },
      },
      applications: {
        title: "Bıçaklı Sekonder Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Kırmataş ve Yapı Agregası",
            text: "Primer kırılmış ocak taşının yol, beton ve yapı işleri için kırmataş fraksiyonlarına indirilmesi. Hedef fraksiyonlar eleme devresiyle ayrılır.",
            imageAlt: "Tel kafes içinde kırılmış taş parçaları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Cevherin İkinci Kademe Kırılması",
            text: "Ön kırılmış cevherin sonraki öğütme veya zenginleştirme adımına uygun boyuta indirilmesi. Aşındırıcı cevherlerde bıçak ömrü ayrıca değerlendirilir.",
            imageAlt: "Konveyör bandı üzerinde taşınan yıkanmış cevher",
            linkLabel: "Taşıma Ekipmanları",
          },
          {
            title: "Kapalı Devre Kırma-Eleme",
            text: "Sekonder kırıcının eleğe bağlı çalıştığı ve iri malzemenin geri döndüğü kırma-eleme hatları. Kırıcı ve elek kapasiteleri birlikte boyutlandırılır.",
            imageAlt: "Kırma-eleme tesisinde elek ve konveyörler",
            linkLabel: "Eleme ve Sınıflandırma Sistemleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Bıçaklı Sekonder Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA sekonder kırıcıları ön kırılmış ürünün boyutu, hedef çıkış boyutu, malzemenin kırılabilirliği ve kapasiteye göre projelendirir. Rotor ve darbe bıçağı geometrisi, darbe plakaları ve ayar düzeni, gövde, tahrik ve bakım erişimi birlikte tasarlanır.",
        highlights: ["Ön kırılmış ürüne göre rotor", "Ayarlanabilir darbe plakaları", "Değiştirilebilir darbe bıçakları", "Eleme devresine entegrasyon"],
        figureAlt: "Açık gövdede turuncu darbe bıçaklı rotor ve darbe plakaları",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Besleme", text: "Primer kırıcı çıkış boyutu ve besleme düzeni." },
          { title: "Hedef Boyut", text: "İstenen üst boyut ve eleme devresi." },
          { title: "Malzeme", text: "Kırılabilirlik, aşındırıcılık, nem ve kil içeriği." },
          { title: "Rotor ve Bıçak", text: "Rotor ölçüsü, bıçak geometrisi, sayısı ve malzemesi." },
          { title: "Tahrik ve Bakım", text: "Tahrik seçimi, plaka ayarı, bıçak değişimi ve hidrolik açma." },
        ],
        dataNote: "Rotor hızı, güç ve kapasite malzeme ve hat verisiyle belirlenir; her malzeme için belirli bir milimetre boyutu garanti edilmez.",
      },
      gallery: {
        title: "Bıçaklı Sekonder Kırıcı Fotoğraf Galerisi",
        captions: [
          "Gövdesi hidrolik olarak açılmış sekonder kırıcı",
          "Sekonder kırıcının arka ve yan görünümü",
          "Sekonder kırıcı hidrolik hatları ve gövde kilitleri",
        ],
      },
      faq: {
        title: "Bıçaklı Sekonder Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Sekonder kırıcı ile primer kırıcı arasındaki fark nedir?",
            answer: "Primer kırıcı iri malzemeyi kaba boyuta indirir. Sekonder kırıcı ise bu ön kırılmış ürünü daha küçük ve kontrollü boyuta getirir; genellikle elekle birlikte çalışır.",
          },
          {
            question: "Ürün boyutu nasıl ayarlanır?",
            answer: "Darbe plakası ile rotor arasındaki açıklık, rotor hızı ve eleme devresi ürün boyutunu belirler. Ulaşılabilecek dağılım malzemeye bağlıdır.",
          },
          {
            question: "Sekonder kırıcı her zaman elekli mi çalışır?",
            answer: "Kırıcının kendisinde elek bulunmayabilir; ürün boyutu kontrolü çoğunlukla ayrı bir elekle kapalı devre kurularak sağlanır. Düzen proje bazında belirlenir.",
          },
          {
            question: "Hangi parçalar aşınır?",
            answer: "Darbe bıçakları, darbe plakaları ve gövde astarları aşınan parçalardır; hidrolik açılır gövde değişimi kolaylaştırır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, besleme (primer çıkış) boyutu, hedef ürün boyutu, aşındırıcılık ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Bıçaklı sekonder kırıcı için teknik teklif alın",
        text: "Ön kırılmış ürün boyutunuz ve hedef çıkış boyutunuza göre sekonder kırıcıyı ve eleme devresini birlikte netleştirelim.",
        mailSubject: "Bıçaklı Sekonder Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve kırılabilirliği",
          "Besleme (primer çıkış) boyutu",
          "Hedef ürün boyutu",
          "Aşındırıcılık ve nem",
          "Saatlik kapasite (ton/saat)",
          "Mevcut elek ve hat düzeni",
        ],
        inquiryLines: [
          "Merhaba, bıçaklı sekonder kırıcı için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Besleme boyutu (mm):",
          "Hedef ürün boyutu (mm):",
          "Kapasite (ton/saat):",
          "Mevcut hat:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Secondary Impact Crusher | Second-Stage Crushing",
        description:
          "Secondary impact crushers that reduce pre-crushed stone and ore to a smaller, controlled size with a blow bar rotor. Project-specific for crushing and screening lines.",
      },
      breadcrumbLabel: "Secondary Impact Crusher",
      h1: "Secondary Impact Crusher – Second-Stage Crusher with Blow Bars",
      productCategory: "Secondary Impact Crusher",
      overview: {
        imageAlt: "White secondary impact crusher with hydraulic opening cylinders",
        tagline: "Secondary Impact Crusher",
        keyFacts: [
          { label: "Crushing principle", value: "Blow bar impact and aprons" },
          { label: "Stage", value: "Second stage (intermediate / fine)" },
          { label: "Feed", value: "Pre-crushed product from the primary" },
          { label: "Output control", value: "Apron setting, rotor speed, screening" },
        ],
        title: "Controlled Second-Stage Crushing of Pre-Crushed Material",
        paragraphs: [
          "A secondary impact crusher is a horizontal-shaft impact crusher used to reduce material from a primary crusher or pre-crushing to a smaller size. Blow bars on the rotor strike the material, and pieces are thrown against adjustable impact aprons in the housing.",
          "Because the feed is smaller than for a primary crusher, feed opening and rotor are designed to produce a finer product. Product size is steered by the gap between apron and rotor, rotor speed and the breakage behaviour of the material.",
          "A secondary crusher usually works in closed circuit with a screen: product at target size is separated and oversize returns to the crusher. The achievable grading depends on the material and is defined together with the screening circuit.",
        ],
        note: "Primary and secondary crushers have different tasks: the primary reduces coarse material to a rough size, the secondary brings that product to a smaller size for screening and use.",
      },
      process: {
        title: "Secondary Impact Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the secondary crusher takes pre-crushed product, crushes it in the second stage and sends it to the screening circuit. Primary crusher and screen are separate equipment.",
        note: "Oversize from the screen can be returned to the crusher to form a closed circuit; the circuit layout depends on the plant concept.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Pre-crushed feed", text: "Material from the primary crusher is fed by a feeder or conveyor." },
          { title: "Crushing by blow bars", text: "Blow bars on the rotor strike and reduce the material." },
          { title: "Breaking on adjustable aprons", text: "The apron-to-rotor gap steers product size." },
          { title: "Discharge to the next process", text: "Product goes to the screen; oversize may return to the crusher." },
        ],
        flow: {
          svgTitle: "Secondary impact crusher material flow diagram",
          svgDesc: "Material line: primary crusher output, secondary impact crusher, discharge, screening and return.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Pre-crushed feed", sub: "Primary crusher output" }],
          drum: { title: "SECONDARY CRUSHER", sub: "rotor · blow bar · apron" },
          after: [
            { title: "Discharge", sub: "Bottom outlet" },
            { title: "Screening circuit", sub: "Product and return" },
          ],
        },
      },
      applications: {
        title: "Secondary Impact Crusher Applications",
        items: [
          {
            title: "Crushed Stone and Construction Aggregate",
            text: "Reducing primary-crushed quarry rock to crushed stone fractions for roads, concrete and construction. Target fractions are separated by the screening circuit.",
            imageAlt: "Broken stone pieces inside a wire gabion",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Second-Stage Ore Crushing",
            text: "Reducing pre-crushed ore to a size suitable for grinding or beneficiation. Blow bar life is assessed separately for abrasive ores.",
            imageAlt: "Washed ore carried on a conveyor belt",
            linkLabel: "Conveying Systems",
          },
          {
            title: "Closed-Circuit Crushing and Screening",
            text: "Crushing and screening lines where the secondary crusher works with a screen and oversize is returned. Crusher and screen capacities are sized together.",
            imageAlt: "Screen and conveyors at a crushing and screening plant",
            linkLabel: "Screening and Classification",
          },
        ],
      },
      design: {
        title: "Custom Secondary Impact Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers secondary crushers around pre-crushed feed size, target discharge size, material breakability and capacity. Rotor and blow bar geometry, impact aprons and adjustment, housing, drive and maintenance access are designed together.",
        highlights: ["Rotor matched to pre-crushed feed", "Adjustable impact aprons", "Replaceable blow bars", "Integration with the screening circuit"],
        figureAlt: "Orange blow bar rotor and impact aprons in an open housing",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Feed", text: "Primary crusher output size and feeding arrangement." },
          { title: "Target Size", text: "Required top size and screening circuit." },
          { title: "Material", text: "Breakability, abrasiveness, moisture and clay content." },
          { title: "Rotor and Blow Bars", text: "Rotor size, blow bar geometry, number and material." },
          { title: "Drive and Maintenance", text: "Drive selection, apron setting, blow bar replacement and hydraulic opening." },
        ],
        dataNote: "Rotor speed, power and capacity are defined from material and line data; no specific millimetre size is guaranteed for every material.",
      },
      gallery: {
        title: "Secondary Impact Crusher Photo Gallery",
        captions: [
          "Secondary crusher with hydraulically opened housing",
          "Rear and side view of the secondary crusher",
          "Hydraulic lines and housing locks of the secondary crusher",
        ],
      },
      faq: {
        title: "Secondary Impact Crusher FAQ",
        items: [
          {
            question: "What is the difference between secondary and primary crushers?",
            answer: "The primary reduces coarse material to a rough size. The secondary brings that pre-crushed product to a smaller, controlled size and usually works with a screen.",
          },
          {
            question: "How is product size adjusted?",
            answer: "The apron-to-rotor gap, rotor speed and screening circuit determine product size. The achievable grading depends on the material.",
          },
          {
            question: "Does a secondary crusher always have a screen?",
            answer: "The crusher itself may not include a screen; size control is usually achieved by a separate screen in closed circuit. The layout is defined per project.",
          },
          {
            question: "Which parts wear?",
            answer: "Blow bars, impact aprons and housing liners; a hydraulically opening housing makes replacement easier.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, feed (primary output) size, target product size, abrasiveness and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a secondary impact crusher",
        text: "Share your pre-crushed feed size and target discharge size, and we will define the secondary crusher and screening circuit together with you.",
        mailSubject: "Secondary Impact Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and breakability",
          "Feed (primary output) size",
          "Target product size",
          "Abrasiveness and moisture",
          "Hourly capacity (t/h)",
          "Existing screen and line layout",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a secondary impact crusher.",
          "",
          "Material:",
          "Feed size (mm):",
          "Target product size (mm):",
          "Capacity (t/h):",
          "Existing line:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Роторная дробилка вторичного дробления | Била",
        description:
          "Роторные дробилки вторичного дробления для измельчения предварительно дроблёного камня и руды ротором с билами до меньшей контролируемой крупности.",
      },
      breadcrumbLabel: "Роторная дробилка вторичного дробления",
      h1: "Роторная дробилка вторичного дробления – вторая стадия с билами",
      productCategory: "Роторная дробилка вторичного дробления",
      overview: {
        imageAlt: "Белая роторная дробилка вторичного дробления с гидроцилиндрами раскрытия",
        tagline: "Роторная дробилка вторичного дробления",
        keyFacts: [
          { label: "Принцип", value: "Удар бил и отбойные плиты" },
          { label: "Стадия", value: "Вторая (среднее / мелкое дробление)" },
          { label: "Питание", value: "Продукт первичной дробилки" },
          { label: "Контроль крупности", value: "Настройка плит, скорость, грохот" },
        ],
        title: "Контролируемое вторичное дробление",
        paragraphs: [
          "Роторная дробилка вторичного дробления — ударная дробилка с горизонтальным валом, которая уменьшает материал после первичной дробилки или предварительного дробления. Била ротора ударяют по материалу, и куски отбрасываются на регулируемые отбойные плиты корпуса.",
          "Поскольку питание мельче, чем у первичной дробилки, приёмное отверстие и ротор рассчитаны на получение более мелкого продукта. Крупность задаётся зазором между плитой и ротором, скоростью ротора и поведением материала при разрушении.",
          "Вторичная дробилка обычно работает в замкнутом цикле с грохотом: продукт нужной крупности отделяется, надрешётный возвращается в дробилку. Достижимая гранулометрия зависит от материала и определяется вместе с циклом грохочения.",
        ],
        note: "Первичная и вторичная дробилки выполняют разные задачи: первичная уменьшает крупный материал, вторичная доводит этот продукт до меньшей крупности для грохочения и применения.",
      },
      process: {
        title: "Движение материала во вторичной роторной дробилке",
        intro: "Схема показывает типовой поток: вторичная дробилка принимает предварительно дроблёный продукт, дробит его и направляет в цикл грохочения. Первичная дробилка и грохот — отдельное оборудование.",
        note: "Надрешётный продукт может возвращаться в дробилку, образуя замкнутый цикл; схема цикла определяется концепцией предприятия.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача дроблёного продукта", text: "Материал от первичной дробилки подаётся питателем или конвейером." },
          { title: "Дробление билами", text: "Била ротора ударяют и уменьшают материал." },
          { title: "Дробление о регулируемые плиты", text: "Зазор между плитой и ротором задаёт крупность." },
          { title: "Выгрузка на следующий передел", text: "Продукт идёт на грохот; крупный может вернуться в дробилку." },
        ],
        flow: {
          svgTitle: "Схема движения материала во вторичной роторной дробилке",
          svgDesc: "Линия материала: продукт первичной дробилки, вторичная роторная дробилка, выгрузка, грохочение и возврат.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Питание", sub: "После первичной" }],
          drum: { title: "ВТОРИЧНАЯ ДРОБИЛКА", sub: "ротор · било · плита" },
          after: [
            { title: "Выгрузка", sub: "Нижний выход" },
            { title: "Грохочение", sub: "Продукт и возврат" },
          ],
        },
      },
      applications: {
        title: "Области применения роторной дробилки вторичного дробления",
        items: [
          {
            title: "Щебень и строительные заполнители",
            text: "Дробление карьерного камня после первичной стадии до фракций щебня для дорог, бетона и строительства. Фракции разделяются в цикле грохочения.",
            imageAlt: "Дроблёный камень в сетчатом габионе",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Вторичное дробление руды",
            text: "Уменьшение предварительно дроблёной руды до крупности для измельчения или обогащения. Ресурс бил для абразивных руд оценивается отдельно.",
            imageAlt: "Промытая руда на конвейерной ленте",
            linkLabel: "Транспортные системы",
          },
          {
            title: "Замкнутый цикл дробления и грохочения",
            text: "Линии, где вторичная дробилка работает с грохотом, а надрешётный продукт возвращается. Производительности дробилки и грохота рассчитываются совместно.",
            imageAlt: "Грохот и конвейеры на дробильно-сортировочном заводе",
            linkLabel: "Грохочение и классификация",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление вторичных роторных дробилок",
        intro:
          "PRO MAKINA проектирует вторичные дробилки исходя из крупности предварительно дроблёного питания, крупности продукта, дробимости и производительности. Ротор и геометрия бил, отбойные плиты и их регулировка, корпус, привод и доступ разрабатываются совместно.",
        highlights: ["Ротор под дроблёное питание", "Регулируемые отбойные плиты", "Сменные била", "Интеграция с циклом грохочения"],
        figureAlt: "Оранжевые била ротора и отбойные плиты в открытом корпусе",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Питание", text: "Крупность после первичной дробилки и схема подачи." },
          { title: "Целевая крупность", text: "Верхняя крупность и цикл грохочения." },
          { title: "Материал", text: "Дробимость, абразивность, влажность и глинистость." },
          { title: "Ротор и била", text: "Размер ротора, геометрия, число и материал бил." },
          { title: "Привод и обслуживание", text: "Привод, настройка плит, замена бил и гидравлическое раскрытие." },
        ],
        dataNote: "Скорость ротора, мощность и производительность определяются по данным материала и линии; определённая крупность в миллиметрах не гарантируется для любого материала.",
      },
      gallery: {
        title: "Фотогалерея вторичных роторных дробилок",
        captions: ["Вторичная дробилка с гидравлически раскрытым корпусом", "Вторичная дробилка, вид сзади и сбоку", "Гидравлические линии и замки корпуса"],
      },
      faq: {
        title: "Часто задаваемые вопросы о вторичной роторной дробилке",
        items: [
          {
            question: "Чем вторичная дробилка отличается от первичной?",
            answer: "Первичная уменьшает крупный материал. Вторичная доводит этот продукт до меньшей контролируемой крупности и обычно работает с грохотом.",
          },
          {
            question: "Как регулируется крупность продукта?",
            answer: "Зазором между плитой и ротором, скоростью ротора и циклом грохочения. Достижимая гранулометрия зависит от материала.",
          },
          {
            question: "Всегда ли вторичная дробилка оснащена грохотом?",
            answer: "В самой дробилке грохота может не быть; контроль крупности обычно обеспечивается отдельным грохотом в замкнутом цикле. Схема определяется проектом.",
          },
          {
            question: "Какие детали изнашиваются?",
            answer: "Била, отбойные плиты и футеровка корпуса; гидравлически раскрываемый корпус облегчает замену.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, крупность питания (после первичной), крупность продукта, абразивность и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на вторичную дробилку",
        text: "Сообщите крупность питания и продукта — вместе определим вторичную дробилку и цикл грохочения.",
        mailSubject: "Запрос предложения: роторная дробилка вторичного дробления",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и дробимость",
          "Крупность питания (после первичной)",
          "Крупность продукта",
          "Абразивность и влажность",
          "Часовая производительность (т/ч)",
          "Существующий грохот и схема линии",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на роторную дробилку вторичного дробления.",
          "",
          "Материал:",
          "Крупность питания (мм):",
          "Крупность продукта (мм):",
          "Производительность (т/ч):",
          "Существующая линия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "كسارة صدمية ثانوية | تكسير المرحلة الثانية",
        description:
          "كسارات صدمية ثانوية تصغّر الحجر والخام المكسّر مسبقًا إلى حجم أصغر ومضبوط بدوّار ذي قضبان صدم. تصميم مخصص لخطوط التكسير والغربلة.",
      },
      breadcrumbLabel: "كسارة صدمية ثانوية",
      h1: "كسارة صدمية ثانوية – كسارة مرحلة ثانية بقضبان الصدم",
      productCategory: "كسارة صدمية ثانوية",
      overview: {
        imageAlt: "كسارة صدمية ثانوية بيضاء مع أسطوانات الفتح الهيدروليكي",
        tagline: "كسارة صدمية ثانوية",
        keyFacts: [
          { label: "مبدأ التكسير", value: "صدم القضبان والألواح" },
          { label: "المرحلة", value: "ثانية (تكسير متوسط / ناعم)" },
          { label: "التلقيم", value: "منتج الكسارة الأولية" },
          { label: "التحكم في الحجم", value: "ضبط الألواح والسرعة والغربلة" },
        ],
        title: "تكسير المرحلة الثانية للمواد المكسّرة مسبقًا بشكل مضبوط",
        paragraphs: [
          "الكسارة الصدمية الثانوية كسارة صدمية بعمود أفقي تُستخدم لتصغير المادة القادمة من الكسارة الأولية أو من التكسير المسبق إلى حجم أصغر، إذ تضرب قضبان الصدم على الدوّار المادة وتُقذف القطع نحو ألواح صدم قابلة للضبط داخل الغلاف.",
          "ولأن التلقيم أصغر مما في الكسارة الأولية تُصمَّم فتحة التلقيم والدوّار لإنتاج منتج أنعم، ويُوجَّه حجم المنتج بالخلوص بين اللوح والدوّار وسرعة الدوّار وسلوك تكسّر المادة.",
          "تعمل الكسارة الثانوية عادةً في دائرة مغلقة مع غربال: يُفصل المنتج بالحجم المستهدف ويعود الجزء الأكبر إلى الكسارة، ويعتمد التدرج الممكن على المادة ويُحدَّد مع دائرة الغربلة.",
        ],
        note: "للكسارتين الأولية والثانوية مهام مختلفة: تصغّر الأولية المادة الخشنة إلى حجم تقريبي، بينما توصل الثانوية هذا المنتج إلى حجم أصغر للغربلة والاستخدام.",
      },
      process: {
        title: "تدفق المادة في الكسارة الصدمية الثانوية",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه الكسارة الثانوية المنتج المكسّر مسبقًا وتكسّره في المرحلة الثانية ثم ترسله إلى دائرة الغربلة، بينما الكسارة الأولية والغربال معدات منفصلة.",
        note: "يمكن إعادة الجزء الأكبر من الغربال إلى الكسارة لتكوين دائرة مغلقة، ويتحدد ترتيب الدائرة وفق تصور المنشأة.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم منتج مكسّر مسبقًا", text: "تُلقَّم المادة القادمة من الكسارة الأولية بمُلقِّم أو ناقل." },
          { title: "التكسير بقضبان الصدم", text: "تضرب قضبان الدوّار المادة وتصغّرها." },
          { title: "التكسير على ألواح قابلة للضبط", text: "يوجّه الخلوص بين اللوح والدوّار حجم المنتج." },
          { title: "التفريغ إلى العملية التالية", text: "يتجه المنتج إلى الغربال، وقد يعود الجزء الأكبر إلى الكسارة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الكسارة الصدمية الثانوية",
          svgDesc: "خط المادة: مخرج الكسارة الأولية، الكسارة الصدمية الثانوية، التفريغ، الغربلة والإعادة.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "تلقيم مكسّر", sub: "مخرج الكسارة الأولية" }],
          drum: { title: "الكسارة الثانوية", sub: "دوّار · قضيب صدم · لوح" },
          after: [
            { title: "التفريغ", sub: "المخرج السفلي" },
            { title: "دائرة الغربلة", sub: "المنتج والإعادة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الكسارة الصدمية الثانوية",
        items: [
          {
            title: "الحجر المكسّر وركام البناء",
            text: "تصغير صخر المحجر المكسّر أوليًا إلى أجزاء الحجر المكسّر للطرق والخرسانة والبناء، مع فصل الأجزاء المستهدفة بدائرة الغربلة.",
            imageAlt: "قطع حجر مكسّر داخل قفص شبكي",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "التكسير الثانوي للخام",
            text: "تصغير الخام المكسّر مسبقًا إلى حجم مناسب للطحن أو المعالجة، مع تقييم عمر قضبان الصدم بشكل منفصل للخامات الكاشطة.",
            imageAlt: "خام مغسول على سير ناقل",
            linkLabel: "أنظمة النقل",
          },
          {
            title: "التكسير والغربلة في دائرة مغلقة",
            text: "خطوط تعمل فيها الكسارة الثانوية مع غربال ويُعاد الجزء الأكبر، مع تحجيم سعة الكسارة والغربال معًا.",
            imageAlt: "غربال وناقلات في محطة تكسير وغربلة",
            linkLabel: "أنظمة الغربلة والتصنيف",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات صدمية ثانوية مخصصة",
        intro:
          "تصمم PRO MAKINA الكسارات الثانوية وفق حجم التلقيم المكسّر مسبقًا وحجم التفريغ المستهدف وقابلية المادة للتكسير والسعة. ويُصمَّم الدوّار وشكل قضبان الصدم وألواح الصدم وضبطها والغلاف ونظام الإدارة وسهولة الصيانة معًا.",
        highlights: ["دوّار مناسب للتلقيم المكسّر مسبقًا", "ألواح صدم قابلة للضبط", "قضبان صدم قابلة للاستبدال", "التكامل مع دائرة الغربلة"],
        figureAlt: "دوّار بقضبان صدم برتقالية وألواح صدم داخل غلاف مفتوح",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "التلقيم", text: "حجم مخرج الكسارة الأولية وترتيب التلقيم." },
          { title: "الحجم المستهدف", text: "الحجم الأعلى المطلوب ودائرة الغربلة." },
          { title: "المادة", text: "قابلية التكسير والكشط والرطوبة ومحتوى الطين." },
          { title: "الدوّار والقضبان", text: "حجم الدوّار وشكل قضبان الصدم وعددها ومادتها." },
          { title: "الإدارة والصيانة", text: "اختيار الإدارة وضبط الألواح واستبدال القضبان والفتح الهيدروليكي." },
        ],
        dataNote: "تُحدَّد سرعة الدوّار والقدرة والسعة من بيانات المادة والخط، ولا يُضمن حجم محدد بالمليمتر لكل مادة.",
      },
      gallery: {
        title: "معرض صور الكسارات الصدمية الثانوية",
        captions: ["كسارة ثانوية بغلاف مفتوح هيدروليكيًا", "منظر خلفي وجانبي للكسارة الثانوية", "الخطوط الهيدروليكية وأقفال غلاف الكسارة الثانوية"],
      },
      faq: {
        title: "أسئلة شائعة حول الكسارة الصدمية الثانوية",
        items: [
          {
            question: "ما الفرق بين الكسارة الثانوية والأولية؟",
            answer: "تصغّر الأولية المادة الخشنة إلى حجم تقريبي، بينما توصل الثانوية هذا المنتج المكسّر مسبقًا إلى حجم أصغر ومضبوط وتعمل عادةً مع غربال.",
          },
          {
            question: "كيف يُضبط حجم المنتج؟",
            answer: "يحدده الخلوص بين اللوح والدوّار وسرعة الدوّار ودائرة الغربلة، ويعتمد التدرج الممكن على المادة.",
          },
          {
            question: "هل تعمل الكسارة الثانوية دائمًا بغربال؟",
            answer: "قد لا تتضمن الكسارة نفسها غربالًا، ويتحقق التحكم في الحجم عادةً بغربال منفصل في دائرة مغلقة، ويُحدَّد الترتيب لكل مشروع.",
          },
          {
            question: "ما الأجزاء التي تتآكل؟",
            answer: "قضبان الصدم وألواح الصدم وبطانات الغلاف، ويسهّل الغلاف المفتوح هيدروليكيًا عملية الاستبدال.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وحجم التلقيم (مخرج الكسارة الأولية) وحجم المنتج المستهدف والكشط والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة صدمية ثانوية",
        text: "شاركنا حجم التلقيم المكسّر مسبقًا وحجم التفريغ المستهدف، لنحدد معًا الكسارة الثانوية ودائرة الغربلة.",
        mailSubject: "طلب عرض سعر: كسارة صدمية ثانوية",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وقابليتها للتكسير",
          "حجم التلقيم (مخرج الكسارة الأولية)",
          "حجم المنتج المستهدف",
          "الكشط والرطوبة",
          "السعة بالساعة (طن/ساعة)",
          "الغربال الحالي وترتيب الخط",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة صدمية ثانوية.",
          "",
          "المادة:",
          "حجم التلقيم (مم):",
          "حجم المنتج المستهدف (مم):",
          "السعة (طن/ساعة):",
          "الخط الحالي:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
