import type { DrumPageConfig } from "../types";

// Blower: mevcut tanım "pnömatik taşıma ve hava destekli ürün transferinde gerekli hava debisini ve basıncı sağlayan ekipman".
// Projedeki tek ürün görseli (blower1) kaide üzerinde kayış tahrikli blower gövdesi, dikey emiş filtre-susturucusu, yatay basma
// susturucusu ve basma hattında emniyet valfi olan paketi gösterir; bu yapı Roots tipi (döner loblu) pozitif deplasmanlı blower
// paketine karşılık gelir. Tip tespiti görsel yapıdan yapılmıştır, iç rotor görünmez. Proses/egzoz fanı olarak anlatılmaz.
// Debi (m³/h), basınç (mbar/bar) veya motor gücü (kW) verilmez. Tek ürün görseli olduğu için tasarım görseli ve galeri yoktur.
// Görselin lisans kaydı yok.

export const blowerPage: DrumPageConfig = {
  key: "blower",
  group: "auxiliaryFlow",
  trSlug: "blower",
  mainImage: "/images/blower/blower1.jpg",
  applications: [
    { image: "/images/tasima-uygulamalari/plastik-granul.webp", link: "rotaryAirlock" },
    { image: "/images/silobas/silbas4.webp", link: "siloSystems" },
    { image: "/images/tasima-uygulamalari/klinker.webp", link: "mining" },
  ],
  sectors: ["chemicalProcess", "mining"],
  resources: ["rotaryAirlock", "siloSystems", "cyclones", "auxiliaryFlow"],
  machines: ["conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Blower | Pnömatik Taşıma İçin Roots Tipi Blower | PRO MAKİNA",
        description:
          "Pnömatik taşıma ve silo dolum hatlarına basınçlı hava sağlayan Roots tipi pozitif deplasmanlı blower: emiş filtresi, susturucular ve emniyet valfli paket.",
      },
      breadcrumbLabel: "Blower",
      h1: "Blower – Pnömatik Taşıma Hatları İçin Roots Tipi Basınçlı Hava Kaynağı",
      productCategory: "Roots Tipi Pozitif Deplasmanlı Blower",
      overview: {
        imageAlt: "Kayış tahrikli, emiş filtre-susturuculu ve basma susturuculu Roots tipi blower paketi",
        tagline: "Blower",
        keyFacts: [
          { label: "Görev", value: "Pnömatik hatta basınçlı hava sağlanması" },
          { label: "Tip", value: "Roots tipi döner loblu, pozitif deplasmanlı" },
          { label: "Paket", value: "Emiş filtresi, susturucular, emniyet valfi" },
          { label: "Tahrik", value: "Elektrik motoru, kayış-kasnak" },
        ],
        title: "Pnömatik Taşıma Hattının Hava Kaynağı",
        paragraphs: [
          "Blower, pnömatik taşıma ve hava destekli ürün transfer hatlarına gerekli hava debisini, hattın direncini yenecek basınçla sağlayan ekipmandır. Ortam havası emiş filtresinden alınır, blowerda basınçlandırılır ve basma hattı üzerinden pnömatik taşıma hattına verilir.",
          "Roots tipi blowerda gövde içinde birbirine temas etmeden ters yönde dönen iki lob bulunur. Loblar ile gövde arasında kalan hava emişten basma tarafına taşınır. Pozitif deplasmanlı olduğu için debi büyük ölçüde devre bağlıdır; basınç ise hattın ve taşınan ürünün oluşturduğu dirence göre oluşur.",
          "Emiş filtresi rotorları tozdan korur; emiş ve basma susturucuları çalışma gürültüsünü azaltır. Basma hattındaki emniyet valfi, hat tıkandığında basıncın izin verilen sınırı aşmasını önler.",
        ],
        note: "Blower, siklon veya filtre egzoz fanı değildir. Proses fanları düşük basınç farkında yüksek hava hacmi taşırken blower, pnömatik taşıma hattının direncini yenecek basınçla daha kontrollü bir hava debisi verir.",
      },
      process: {
        title: "Blower Proses Akışı",
        intro:
          "Şema, ortam havasının emiş filtresinden alındığı, blowerda basınçlandırıldığı, susturucu ve emniyet valfli basma hattından geçtiği ve pnömatik taşıma hattını beslediği akışı gösterir. Hava kilidi, taşıma hattı ve silo ayrı ekipmanlardır.",
        note: "Blower debisi ve basıncı; taşınacak ürün, taşıma mesafesi, hat çapı ve güzergâhtaki dirsekler birlikte değerlendirilerek belirlenir.",
        mainLineLabel: "Hava hattı",
        productLine: [
          { title: "Hava emişi", text: "Ortam havası emiş filtresi ve susturucusundan geçerek blowera girer." },
          { title: "Basınçlandırma", text: "Döner loblar havayı emişten basma tarafına taşır." },
          { title: "Basma hattı", text: "Hava basma susturucusundan geçer; emniyet valfi aşırı basıncı sınırlar." },
          { title: "Pnömatik hat", text: "Basınçlı hava, hava kilidiyle ürün verilen taşıma hattını besler." },
        ],
        flow: {
          svgTitle: "Blower proses akış şeması",
          svgDesc: "Hava hattı: ortam havası ve emiş filtresi, Roots tipi blower, basma susturucusu ve emniyet valfi, pnömatik taşıma hattı.",
          mainLane: "HAVA HATTI",
          shape: "box",
          before: [{ title: "Ortam havası", sub: "Emiş filtresi ve susturucu" }],
          drum: { title: "BLOWER", sub: "pozitif deplasmanlı basınçlandırma" },
          after: [
            { title: "Basma hattı", sub: "Susturucu ve emniyet valfi" },
            { title: "Pnömatik hat", sub: "Ürün taşıma" },
          ],
        },
      },
      applications: {
        title: "Blower Uygulama Alanları",
        items: [
          {
            title: "Pnömatik Taşıma Hatları",
            text: "Toz ve granül ürünlerin boru hattında hava ile taşınması. Ürün hatta hava kilidiyle verilir; blower hattın taşıma havasını sağlar.",
            imageAlt: "Plastik granül taneleri",
            linkLabel: "Hava Kilidi",
          },
          {
            title: "Silo Dolum ve Silobas Boşaltma",
            text: "Toz ürünün pnömatik hatla siloya alınması ve silobas boşaltma hatlarında hava desteği. Silo üzerindeki filtre, taşıma havasını tahliye eder.",
            imageAlt: "Toz dökme ürün taşıyan silobas tanker",
            linkLabel: "Silo Sistemleri",
          },
          {
            title: "Mineral ve Çimento Benzeri Tozların Transferi",
            text: "Kireç, çimento benzeri ürünler ve mineral tozlarının tesis içinde pnömatik transferi. Aşındırıcı ürünlerde hat hızı ve dirsekler birlikte değerlendirilir.",
            imageAlt: "Klinker taneleri",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Blower Seçimi ve Paketleme",
        intro:
          "PRO MAKİNA blower paketlerini pnömatik taşıma hattının ihtiyaç duyduğu hava debisi ve basınca göre seçer ve hat ile birlikte projelendirir. Blower, motor ve kayış tahriki, emiş filtresi, susturucular, emniyet valfi ve kaide birlikte değerlendirilir.",
        highlights: ["Roots tipi pozitif deplasmanlı blower", "Emiş filtresi ve susturucular", "Basma hattında emniyet valfi", "Kaide üzerinde kayış tahrikli paket"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hava Debisi", text: "Taşınacak ürün miktarı ve hat çapına göre gerekli hava debisi." },
          { title: "Basınç Farkı", text: "Hat uzunluğu, dirsekler, yükseklik ve ürün yükünden oluşan direnç." },
          { title: "Motor ve Devir", text: "Debi ve basınca uygun blower devri, motor gücü ve kayış tahriki." },
          { title: "Çalışma Ortamı", text: "Ortam sıcaklığı, tozluluk, emiş havasının kalitesi ve gürültü sınırı." },
          { title: "Hat Entegrasyonu", text: "Hava kilidi, taşıma borusu, silo filtresi ve otomasyon bağlantıları." },
        ],
        dataNote: "Hava debisi, basınç ve motor gücü hat ve ürün verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Blower Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Blower ne işe yarar?",
            answer: "Pnömatik taşıma ve hava destekli transfer hatlarına, hattın direncini yenecek basınçta hava sağlar.",
          },
          {
            question: "Roots tipi blower nasıl çalışır?",
            answer: "Gövde içinde birbirine temas etmeden ters yönde dönen iki lob, aralarında kalan havayı emişten basma tarafına taşır. Debi büyük ölçüde devre bağlıdır, basınç ise hattın direncine göre oluşur.",
          },
          {
            question: "Blower ile fan arasındaki fark nedir?",
            answer: "Siklon veya filtre egzoz fanı düşük basınç farkında yüksek hava hacmi taşır. Blower ise pnömatik taşıma hattının direncini yenecek basınçla hava verir; iki ekipman birbirinin yerine kullanılmaz.",
          },
          {
            question: "Emniyet valfi neden kullanılır?",
            answer: "Hat tıkandığında pozitif deplasmanlı blower basıncı yükseltmeye devam eder. Emniyet valfi basıncın izin verilen sınırı aşmasını önleyerek blower ve hattı korur.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Taşınacak ürün ve miktarı, taşıma mesafesi ve güzergâhı, hat çapı, çalışma ortamı ve mevcut hava kilidi veya silo filtresi bilgileri temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Blower için teknik teklif alın",
        text: "Pnömatik taşıma hattınızın ürün, mesafe ve güzergâh verilerine göre blower paketini birlikte netleştirelim.",
        mailSubject: "Blower Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Taşınacak ürün ve yığın yoğunluğu", "Taşıma miktarı", "Taşıma mesafesi, yükseklik ve dirsekler", "Hat çapı", "Çalışma ortamı ve gürültü sınırı", "Hava kilidi ve silo filtresi bilgisi"],
        inquiryLines: [
          "Merhaba, blower için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Taşıma miktarı (ton/saat):",
          "Taşıma mesafesi (m):",
          "Hat çapı:",
          "Çalışma ortamı:",
          "Mevcut ekipman:",
        ],
      },
    },
    en: {
      meta: {
        title: "Roots Blower | Positive Displacement Blower for Pneumatic Conveying",
        description:
          "Roots-type positive displacement blower supplying air to pneumatic conveying and silo filling lines, packaged with inlet filter, silencers and relief valve.",
      },
      breadcrumbLabel: "Blower",
      h1: "Blower – Roots-Type Pressurised Air Source for Pneumatic Conveying Lines",
      productCategory: "Roots-Type Positive Displacement Blower",
      overview: {
        imageAlt: "Belt-driven Roots-type blower package with inlet filter-silencer and discharge silencer",
        tagline: "Blower",
        keyFacts: [
          { label: "Duty", value: "Supplying pressurised air to a pneumatic line" },
          { label: "Type", value: "Roots-type rotary lobe, positive displacement" },
          { label: "Package", value: "Inlet filter, silencers, relief valve" },
          { label: "Drive", value: "Electric motor, belt and pulleys" },
        ],
        title: "The Air Source of a Pneumatic Conveying Line",
        paragraphs: [
          "A blower supplies pneumatic conveying and air-assisted transfer lines with the required air flow at a pressure that overcomes the line resistance. Ambient air is drawn through the inlet filter, pressurised in the blower and delivered through the discharge line to the pneumatic conveying line.",
          "In a Roots-type blower, two lobes rotate in opposite directions inside the casing without touching each other. Air trapped between the lobes and the casing is carried from the inlet to the discharge side. Being positive displacement, the air flow depends largely on speed, while the pressure builds up according to the resistance of the line and the conveyed product.",
          "The inlet filter protects the rotors from dust; inlet and discharge silencers reduce operating noise. The relief valve on the discharge line keeps the pressure from exceeding the permissible limit if the line blocks.",
        ],
        note: "A blower is not a cyclone or filter exhaust fan. Process fans move large air volumes at a low pressure difference, whereas a blower delivers a more controlled air flow at a pressure that overcomes the resistance of a pneumatic conveying line.",
      },
      process: {
        title: "Blower Process Flow",
        intro:
          "The diagram shows ambient air drawn through the inlet filter, pressurised in the blower, passed through the discharge line with silencer and relief valve, and feeding the pneumatic conveying line. Rotary airlock, conveying line and silo are separate equipment.",
        note: "Blower air flow and pressure are determined by considering the conveyed product, conveying distance, line diameter and bends along the route together.",
        mainLineLabel: "Air line",
        productLine: [
          { title: "Air intake", text: "Ambient air enters the blower through the inlet filter and silencer." },
          { title: "Pressurising", text: "The rotating lobes carry the air from the inlet to the discharge side." },
          { title: "Discharge line", text: "Air passes the discharge silencer; the relief valve limits overpressure." },
          { title: "Pneumatic line", text: "Pressurised air feeds the conveying line into which product is fed by an airlock." },
        ],
        flow: {
          svgTitle: "Blower process flow diagram",
          svgDesc: "Air line: ambient air and inlet filter, Roots-type blower, discharge silencer and relief valve, pneumatic conveying line.",
          mainLane: "AIR LINE",
          shape: "box",
          before: [{ title: "Ambient air", sub: "Inlet filter and silencer" }],
          drum: { title: "BLOWER", sub: "positive displacement pressurising" },
          after: [
            { title: "Discharge line", sub: "Silencer and relief valve" },
            { title: "Pneumatic line", sub: "Product conveying" },
          ],
        },
      },
      applications: {
        title: "Blower Applications",
        items: [
          {
            title: "Pneumatic Conveying Lines",
            text: "Conveying powders and granules with air through a pipeline. Product is fed into the line by a rotary airlock; the blower supplies the conveying air.",
            imageAlt: "Plastic granules",
            linkLabel: "Rotary Airlock Valve",
          },
          {
            title: "Silo Filling and Tanker Unloading",
            text: "Taking powder into a silo through a pneumatic line and providing air support for bulk tanker unloading lines. The filter on the silo vents the conveying air.",
            imageAlt: "Bulk powder tanker trailer",
            linkLabel: "Silo Systems",
          },
          {
            title: "Transfer of Mineral and Cement-Like Powders",
            text: "In-plant pneumatic transfer of lime, cement-like products and mineral powders. For abrasive products, line velocity and bends are assessed together.",
            imageAlt: "Clinker nodules",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Blower Selection and Packaging",
        intro:
          "PRO MAKINA selects blower packages for the air flow and pressure required by the pneumatic conveying line and engineers them together with the line. Blower, motor and belt drive, inlet filter, silencers, relief valve and base frame are considered together.",
        highlights: ["Roots-type positive displacement blower", "Inlet filter and silencers", "Relief valve on the discharge line", "Belt-driven package on a base frame"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Air Flow", text: "Required air flow from the conveyed product quantity and line diameter." },
          { title: "Pressure Difference", text: "Resistance from line length, bends, elevation and product load." },
          { title: "Motor and Speed", text: "Blower speed, motor power and belt drive matched to flow and pressure." },
          { title: "Operating Environment", text: "Ambient temperature, dust, intake air quality and noise limit." },
          { title: "Line Integration", text: "Rotary airlock, conveying pipe, silo filter and automation connections." },
        ],
        dataNote: "Air flow, pressure and motor power are calculated from line and product data; no generic values are stated on this page.",
      },
      faq: {
        title: "Blower FAQ",
        items: [
          {
            question: "What is a blower used for?",
            answer: "It supplies pneumatic conveying and air-assisted transfer lines with air at a pressure that overcomes the line resistance.",
          },
          {
            question: "How does a Roots-type blower work?",
            answer: "Two lobes rotating in opposite directions inside the casing without touching carry the trapped air from inlet to discharge. Air flow depends largely on speed; pressure builds up according to the line resistance.",
          },
          {
            question: "What is the difference between a blower and a fan?",
            answer: "A cyclone or filter exhaust fan moves a large air volume at a low pressure difference. A blower delivers air at a pressure that overcomes the resistance of a pneumatic conveying line; the two are not interchangeable.",
          },
          {
            question: "Why is a relief valve used?",
            answer: "If the line blocks, a positive displacement blower keeps raising the pressure. The relief valve keeps the pressure from exceeding the permissible limit, protecting blower and line.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Conveyed product and quantity, conveying distance and route, line diameter, operating environment and details of any existing airlock or silo filter.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a blower",
        text: "Share the product, distance and route data of your pneumatic conveying line, and we will define the blower package together with you.",
        mailSubject: "Blower Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Conveyed product and bulk density", "Conveying quantity", "Conveying distance, elevation and bends", "Line diameter", "Operating environment and noise limit", "Airlock and silo filter details"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a blower.",
          "",
          "Product:",
          "Conveying quantity (t/h):",
          "Conveying distance (m):",
          "Line diameter:",
          "Operating environment:",
          "Existing equipment:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Воздуходувка Рутса для пневмотранспорта – роторная воздуходувка",
        description:
          "Воздуходувка Рутса подаёт сжатый воздух в линии пневмотранспорта и загрузки силосов: агрегат с входным фильтром, глушителями и предохранительным клапаном.",
      },
      breadcrumbLabel: "Воздуходувка",
      h1: "Воздуходувка – источник сжатого воздуха типа Рутс для линий пневмотранспорта",
      productCategory: "Роторная воздуходувка типа Рутс",
      overview: {
        imageAlt: "Агрегат воздуходувки Рутса с ременным приводом, фильтром-глушителем на входе и глушителем на нагнетании",
        tagline: "Воздуходувка",
        keyFacts: [
          { label: "Назначение", value: "Подача сжатого воздуха в пневмолинию" },
          { label: "Тип", value: "Роторная, типа Рутс, объёмного действия" },
          { label: "Комплектация", value: "Фильтр на входе, глушители, предохранительный клапан" },
          { label: "Привод", value: "Электродвигатель, ремённая передача" },
        ],
        title: "Источник воздуха для линии пневмотранспорта",
        paragraphs: [
          "Воздуходувка подаёт в линии пневмотранспорта и воздушного перемещения продукта необходимый расход воздуха при давлении, преодолевающем сопротивление линии. Окружающий воздух забирается через входной фильтр, сжимается в воздуходувке и через нагнетательную линию подаётся в линию пневмотранспорта.",
          "В воздуходувке Рутса два ротора-лепестка вращаются навстречу друг другу внутри корпуса без контакта. Воздух, заключённый между роторами и корпусом, переносится со стороны всасывания на нагнетание. Как у машины объёмного действия, расход в основном зависит от частоты вращения, а давление устанавливается по сопротивлению линии и транспортируемого продукта.",
          "Входной фильтр защищает роторы от пыли; глушители на всасывании и нагнетании снижают шум. Предохранительный клапан на нагнетании не допускает превышения давления при забивании линии.",
        ],
        note: "Воздуходувка — не вытяжной вентилятор циклона или фильтра. Технологические вентиляторы перемещают большие объёмы воздуха при малом перепаде давления, а воздуходувка даёт более стабильный расход при давлении, преодолевающем сопротивление пневмолинии.",
      },
      process: {
        title: "Технологическая схема воздуходувки",
        intro:
          "Схема показывает забор воздуха через входной фильтр, сжатие в воздуходувке, прохождение через нагнетательную линию с глушителем и предохранительным клапаном и подачу в линию пневмотранспорта. Шлюзовой затвор, транспортная линия и силос — отдельное оборудование.",
        note: "Расход и давление воздуходувки определяются с учётом продукта, дальности транспортирования, диаметра трубопровода и отводов трассы.",
        mainLineLabel: "Воздушная линия",
        productLine: [
          { title: "Забор воздуха", text: "Окружающий воздух поступает через входной фильтр и глушитель." },
          { title: "Сжатие", text: "Вращающиеся роторы переносят воздух со всасывания на нагнетание." },
          { title: "Нагнетательная линия", text: "Воздух проходит глушитель; предохранительный клапан ограничивает давление." },
          { title: "Пневмолиния", text: "Сжатый воздух питает линию, в которую продукт подаётся шлюзовым затвором." },
        ],
        flow: {
          svgTitle: "Технологическая схема воздуходувки",
          svgDesc: "Воздушная линия: окружающий воздух и входной фильтр, воздуходувка Рутса, глушитель нагнетания и предохранительный клапан, линия пневмотранспорта.",
          mainLane: "ВОЗДУШНАЯ ЛИНИЯ",
          shape: "box",
          before: [{ title: "Окружающий воздух", sub: "Фильтр и глушитель" }],
          drum: { title: "ВОЗДУХОДУВКА", sub: "сжатие объёмного действия" },
          after: [
            { title: "Нагнетание", sub: "Глушитель и клапан" },
            { title: "Пневмолиния", sub: "Транспорт продукта" },
          ],
        },
      },
      applications: {
        title: "Области применения воздуходувок",
        items: [
          {
            title: "Линии пневмотранспорта",
            text: "Транспортирование порошков и гранул воздухом по трубопроводу. Продукт подаётся в линию шлюзовым затвором, воздуходувка даёт транспортирующий воздух.",
            imageAlt: "Пластиковые гранулы",
            linkLabel: "Шлюзовой затвор",
          },
          {
            title: "Загрузка силосов и выгрузка автоцистерн",
            text: "Подача порошка в силос по пневмолинии и воздушная поддержка линий выгрузки автоцистерн. Фильтр на силосе сбрасывает транспортирующий воздух.",
            imageAlt: "Автоцистерна для сыпучих порошков",
            linkLabel: "Силосные системы",
          },
          {
            title: "Транспорт минеральных и цементоподобных порошков",
            text: "Внутризаводской пневмотранспорт извести, цементоподобных продуктов и минеральных порошков. Для абразивных продуктов скорость в линии и отводы оцениваются совместно.",
            imageAlt: "Гранулы клинкера",
            linkLabel: "Горное дело и переработка минералов",
          },
        ],
      },
      design: {
        title: "Подбор и комплектация воздуходувок",
        intro:
          "PRO MAKINA подбирает агрегаты воздуходувок под расход и давление, необходимые линии пневмотранспорта, и проектирует их вместе с линией. Воздуходувка, двигатель и ремённый привод, входной фильтр, глушители, предохранительный клапан и рама рассматриваются совместно.",
        highlights: ["Воздуходувка Рутса объёмного действия", "Входной фильтр и глушители", "Предохранительный клапан на нагнетании", "Агрегат на раме с ремённым приводом"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Расход воздуха", text: "Необходимый расход по количеству продукта и диаметру трубопровода." },
          { title: "Перепад давления", text: "Сопротивление от длины линии, отводов, подъёма и загрузки продуктом." },
          { title: "Двигатель и обороты", text: "Частота вращения, мощность двигателя и ремённый привод под расход и давление." },
          { title: "Условия работы", text: "Температура окружающей среды, запылённость, качество всасываемого воздуха, ограничение шума." },
          { title: "Интеграция в линию", text: "Шлюзовой затвор, транспортный трубопровод, фильтр силоса и автоматика." },
        ],
        dataNote: "Расход, давление и мощность двигателя рассчитываются по данным линии и продукта; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о воздуходувках",
        items: [
          {
            question: "Для чего нужна воздуходувка?",
            answer: "Она подаёт в линии пневмотранспорта и воздушного перемещения воздух при давлении, преодолевающем сопротивление линии.",
          },
          {
            question: "Как работает воздуходувка Рутса?",
            answer: "Два ротора, вращающиеся навстречу друг другу без контакта, переносят заключённый воздух со всасывания на нагнетание. Расход зависит в основном от оборотов, давление — от сопротивления линии.",
          },
          {
            question: "Чем воздуходувка отличается от вентилятора?",
            answer: "Вытяжной вентилятор циклона или фильтра перемещает большой объём воздуха при малом перепаде давления. Воздуходувка подаёт воздух при давлении, преодолевающем сопротивление пневмолинии; они не взаимозаменяемы.",
          },
          {
            question: "Зачем предохранительный клапан?",
            answer: "При забивании линии воздуходувка объёмного действия продолжает повышать давление. Клапан не даёт превысить допустимое давление и защищает воздуходувку и линию.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Продукт и его количество, дальность и трасса транспортирования, диаметр линии, условия работы и сведения о шлюзовом затворе или фильтре силоса.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на воздуходувку",
        text: "Сообщите продукт, дальность и трассу линии пневмотранспорта — вместе определим агрегат воздуходувки.",
        mailSubject: "Запрос предложения: воздуходувка",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Продукт и насыпная плотность", "Количество транспортируемого продукта", "Дальность, подъём и отводы", "Диаметр линии", "Условия работы и ограничение шума", "Шлюзовой затвор и фильтр силоса"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на воздуходувку.",
          "",
          "Продукт:",
          "Количество (т/ч):",
          "Дальность (м):",
          "Диаметр линии:",
          "Условия работы:",
          "Имеющееся оборудование:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نافخ روتس | نافخ إزاحة موجبة لخطوط النقل الهوائي",
        description:
          "نافخ روتس بالإزاحة الموجبة يزوّد خطوط النقل الهوائي وتعبئة الصوامع بالهواء المضغوط، في وحدة مع مرشح سحب وكواتم صوت وصمام أمان.",
      },
      breadcrumbLabel: "النافخ",
      h1: "النافخ – مصدر هواء مضغوط من نوع روتس لخطوط النقل الهوائي",
      productCategory: "نافخ روتس بالإزاحة الموجبة",
      overview: {
        imageAlt: "وحدة نافخ روتس بإدارة سيور ومرشح سحب كاتم وكاتم صوت الطرد",
        tagline: "النافخ",
        keyFacts: [
          { label: "المهمة", value: "تزويد الخط الهوائي بالهواء المضغوط" },
          { label: "النوع", value: "روتس بفصوص دوارة وإزاحة موجبة" },
          { label: "الوحدة", value: "مرشح سحب وكواتم صوت وصمام أمان" },
          { label: "الإدارة", value: "محرك كهربائي وسير وبكرات" },
        ],
        title: "مصدر الهواء لخط النقل الهوائي",
        paragraphs: [
          "النافخ معدة تزوّد خطوط النقل الهوائي والنقل بمساعدة الهواء بمعدل الهواء المطلوب وبضغط يتغلب على مقاومة الخط؛ إذ يُسحب الهواء المحيط عبر مرشح السحب ويُضغط في النافخ ثم يُدفع عبر خط الطرد إلى خط النقل الهوائي.",
          "في نافخ روتس يدور فصان في اتجاهين متعاكسين داخل الغلاف دون أن يتلامسا، فينتقل الهواء المحصور بين الفصوص والغلاف من جهة السحب إلى جهة الطرد. ولأنه بالإزاحة الموجبة يعتمد معدل الهواء أساسًا على السرعة، بينما يتكوّن الضغط وفق مقاومة الخط والمنتج المنقول.",
          "يحمي مرشح السحب الدوارات من الغبار، وتخفض كواتم السحب والطرد ضجيج التشغيل، ويمنع صمام الأمان على خط الطرد تجاوز الضغط الحد المسموح عند انسداد الخط.",
        ],
        note: "النافخ ليس مروحة عادم للسيكلون أو المرشح؛ فمراوح العملية تنقل أحجامًا كبيرة من الهواء بفرق ضغط منخفض، أما النافخ فيعطي معدل هواء أكثر ثباتًا بضغط يتغلب على مقاومة خط النقل الهوائي.",
      },
      process: {
        title: "تدفق العملية في النافخ",
        intro:
          "يوضح المخطط سحب الهواء المحيط عبر مرشح السحب وضغطه في النافخ ومروره في خط الطرد المزود بكاتم وصمام أمان ثم تغذية خط النقل الهوائي، بينما صمام الإقفال الهوائي وخط النقل والصومعة معدات منفصلة.",
        note: "يُحدَّد معدل هواء النافخ وضغطه بمراعاة المنتج المنقول ومسافة النقل وقطر الخط والأكواع على المسار معًا.",
        mainLineLabel: "خط الهواء",
        productLine: [
          { title: "سحب الهواء", text: "يدخل الهواء المحيط إلى النافخ عبر مرشح السحب والكاتم." },
          { title: "الضغط", text: "تنقل الفصوص الدوارة الهواء من جهة السحب إلى جهة الطرد." },
          { title: "خط الطرد", text: "يمر الهواء بكاتم الطرد ويحد صمام الأمان من الضغط الزائد." },
          { title: "الخط الهوائي", text: "يغذي الهواء المضغوط خط النقل الذي يُلقَّم فيه المنتج بصمام الإقفال." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في النافخ",
          svgDesc: "خط الهواء: الهواء المحيط ومرشح السحب، نافخ روتس، كاتم الطرد وصمام الأمان، خط النقل الهوائي.",
          mainLane: "خط الهواء",
          shape: "box",
          before: [{ title: "الهواء المحيط", sub: "مرشح سحب وكاتم" }],
          drum: { title: "النافخ", sub: "ضغط بالإزاحة الموجبة" },
          after: [
            { title: "خط الطرد", sub: "كاتم وصمام أمان" },
            { title: "الخط الهوائي", sub: "نقل المنتج" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام النافخ",
        items: [
          {
            title: "خطوط النقل الهوائي",
            text: "نقل المساحيق والحبيبات بالهواء عبر الأنابيب، حيث يُلقَّم المنتج في الخط بصمام الإقفال الهوائي ويوفر النافخ هواء النقل.",
            imageAlt: "حبيبات بلاستيكية",
            linkLabel: "صمام الإقفال الهوائي",
          },
          {
            title: "تعبئة الصوامع وتفريغ الصهاريج",
            text: "إدخال المسحوق إلى الصومعة عبر خط هوائي وتقديم الدعم الهوائي لخطوط تفريغ صهاريج المواد السائبة، مع تصريف هواء النقل عبر المرشح على الصومعة.",
            imageAlt: "صهريج مواد سائبة لنقل المساحيق",
            linkLabel: "أنظمة الصوامع",
          },
          {
            title: "نقل المساحيق المعدنية والشبيهة بالإسمنت",
            text: "النقل الهوائي داخل المنشأة للجير والمنتجات الشبيهة بالإسمنت والمساحيق المعدنية، مع تقييم سرعة الخط والأكواع معًا للمنتجات الكاشطة.",
            imageAlt: "حبيبات الكلنكر",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "اختيار النافخات وتجهيزها حسب المشروع",
        intro:
          "تختار PRO MAKINA وحدات النافخ وفق معدل الهواء والضغط اللازمين لخط النقل الهوائي وتصممها مع الخط، مع مراعاة النافخ والمحرك وإدارة السيور ومرشح السحب والكواتم وصمام الأمان والقاعدة معًا.",
        highlights: ["نافخ روتس بالإزاحة الموجبة", "مرشح سحب وكواتم صوت", "صمام أمان على خط الطرد", "وحدة على قاعدة بإدارة سيور"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "معدل الهواء", text: "معدل الهواء المطلوب وفق كمية المنتج المنقول وقطر الخط." },
          { title: "فرق الضغط", text: "المقاومة الناتجة عن طول الخط والأكواع والارتفاع وحمل المنتج." },
          { title: "المحرك والسرعة", text: "سرعة النافخ وقدرة المحرك وإدارة السيور المناسبة للمعدل والضغط." },
          { title: "بيئة التشغيل", text: "حرارة المحيط والغبار وجودة هواء السحب وحد الضجيج." },
          { title: "التكامل مع الخط", text: "صمام الإقفال الهوائي وأنبوب النقل ومرشح الصومعة ووصلات الأتمتة." },
        ],
        dataNote: "يُحسب معدل الهواء والضغط وقدرة المحرك من بيانات الخط والمنتج، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول النافخ",
        items: [
          {
            question: "ما استخدام النافخ؟",
            answer: "يزوّد خطوط النقل الهوائي والنقل بمساعدة الهواء بالهواء بضغط يتغلب على مقاومة الخط.",
          },
          {
            question: "كيف يعمل نافخ روتس؟",
            answer: "يدور فصان في اتجاهين متعاكسين داخل الغلاف دون تلامس، فينقلان الهواء المحصور من السحب إلى الطرد، ويعتمد المعدل أساسًا على السرعة بينما يتكوّن الضغط وفق مقاومة الخط.",
          },
          {
            question: "ما الفرق بين النافخ والمروحة؟",
            answer: "تنقل مروحة عادم السيكلون أو المرشح حجمًا كبيرًا من الهواء بفرق ضغط منخفض، أما النافخ فيعطي الهواء بضغط يتغلب على مقاومة خط النقل الهوائي، ولا يحل أحدهما محل الآخر.",
          },
          {
            question: "لماذا يُستخدم صمام الأمان؟",
            answer: "عند انسداد الخط يواصل نافخ الإزاحة الموجبة رفع الضغط، فيمنع صمام الأمان تجاوز الحد المسموح ويحمي النافخ والخط.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "المنتج المنقول وكميته ومسافة النقل ومساره وقطر الخط وبيئة التشغيل وبيانات صمام الإقفال أو مرشح الصومعة القائم.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للنافخ",
        text: "شاركنا بيانات المنتج والمسافة والمسار لخط النقل الهوائي، لنحدد معًا وحدة النافخ المناسبة.",
        mailSubject: "طلب عرض سعر: نافخ",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["المنتج المنقول وكثافته الظاهرية", "كمية النقل", "مسافة النقل والارتفاع والأكواع", "قطر الخط", "بيئة التشغيل وحد الضجيج", "بيانات صمام الإقفال ومرشح الصومعة"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنافخ.",
          "",
          "المنتج:",
          "كمية النقل (طن/ساعة):",
          "مسافة النقل (م):",
          "قطر الخط:",
          "بيئة التشغيل:",
          "المعدات القائمة:",
        ],
      },
    },
  },
};
