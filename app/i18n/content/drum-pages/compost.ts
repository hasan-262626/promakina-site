import type { DrumPageConfig } from "./types";

// Kompost tamburu: döner kompost reaktörü; ön biyolojik stabilizasyon, karıştırma, havalandırma ve
// homojenleştirme. Olgunlaştırma tambur dışında sürer; patojen giderimi veya olgunluk garantisi verilmez.
export const compostDrumPage: DrumPageConfig = {
  key: "compostDrum",
  trSlug: "kompost-tamburu",
  mainImage: "/images/tambur biokompost/biokom1.png",
  applications: [
    { image: "/images/01-genel/evselkompost1.jpg", link: "organicWastePlant" },
    { image: "/images/kompost/kompost7.jpg", link: "agriculturalWasteCompostPlant" },
    { image: "/images/01-genel/digesta2.jpg", link: "sludgeToCompostPlant" },
    { image: "/images/kompost/kompost1.jpg", link: "compostPlantSolution" },
  ],
  sectors: ["compostPlants", "sludgeDrying", "recycling"],
  resources: ["compostPlantSolution", "organicWastePlant", "sludgeToCompostPlant", "sterilizationDrum"],
  machines: ["crushers", "screeningSystems", "conveying", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Kompost Tamburu İmalatı | Döner Kompost Reaktörü | PRO MAKİNA",
        description:
          "Organik atık, digestat ve çamur karışımlarını karıştıran, havalandıran ve ön stabilizasyona hazırlayan döner kompost tamburu. Belediye ve endüstriyel tesisler için.",
      },
      breadcrumbLabel: "Kompost Tamburu",
      h1: "Kompost Tamburu – Organik Atıklar için Döner Kompost Reaktörü",
      productCategory: "Döner Kompost Reaktörü",
      overview: {
        imageAlt: "Döner kompost tamburu, hava bağlantısı ve siklon ekipmanı",
        tagline: "Döner Kompost Reaktörü",
        keyFacts: [
          { label: "Görev", value: "Karıştırma, havalandırma, ön stabilizasyon" },
          { label: "Girdi", value: "Organik atık, digestat, çamur karışımları" },
          { label: "Boyutlandırma", value: "Günlük tonaj ve hedef kalış süresine göre" },
          { label: "Sonraki adım", value: "Olgunlaştırma ve eleme (tambur dışında)" },
        ],
        title: "Kompost Sürecinin Kontrollü Başlangıcı",
        paragraphs: [
          "Kompost tamburu, organik atık, digestat, arıtma çamuru ve yapı malzemesi karışımlarının yavaş dönen uzun bir tambur içinde sürekli karıştırıldığı ve havalandırıldığı döner kompost reaktörüdür. Tamburda malzeme homojenleşir, parça yapısı açılır ve aerobik biyolojik faaliyet kontrollü koşullarda başlar.",
          "Tambur kompostlaştırmanın tamamını üstlenmez; ön biyolojik stabilizasyon ve homojenleştirme adımıdır. Tamburdan çıkan malzemenin olgunlaşması, tesisin kurgusuna göre yığın, tünel veya kapalı alanlarda devam eder; ardından eleme ile son ürün hazırlanır.",
          "Tambur boyu ve çapı; günlük besleme miktarı, hedef kalış süresi, malzemenin yoğunluğu ve nemi, havalandırma yaklaşımı ve saha alanı birlikte değerlendirilerek belirlenir. Koku yönetimi için tamburdan emilen havanın arıtılması proje kapsamında ele alınır.",
        ],
        note: "Kompostlaştırmada biyolojik süreci belirleyen nem, hava ve karışım dengesidir. Tambur bu dengeyi kurmaya yardımcı olur; ulaşılacak stabilite ve ürün kalitesi, girdi karışımı ve tesis işletmesine bağlıdır.",
      },
      process: {
        title: "Kompost Tesisi Proses Akışı",
        intro:
          "Şema, kompost tamburunun tipik bir organik atık tesisindeki yerini gösterir. Kabul, ön işlem, olgunlaştırma ve eleme tambur dışındaki tesis ekipmanlarıyla yapılır.",
        note: "Tamburdan emilen hava nem ve koku bileşenleri taşır; arıtma yöntemi (ör. biyofiltre veya yıkayıcı) tesis izni ve yerleşimine göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Kabul ve ön işlem", text: "Organik atık tartılır, gerekirse parçalanır ve yabancı maddeler ayrılır." },
          { title: "Karışım hazırlama", text: "Nem ve yapı dengesi için farklı girdiler ve yapı malzemesi karıştırılır." },
          { title: "Tamburda ön stabilizasyon", text: "Malzeme yavaş dönüşle karıştırılır, havalandırılır ve homojenleşir." },
          { title: "Olgunlaştırma ve eleme", text: "Tambur çıkışı olgunlaştırma alanına, ardından eleme hattına gider." },
        ],
        auxLineLabel: "Proses havası hattı",
        auxLine: [
          { title: "Hava beslemesi", text: "Fan, biyolojik faaliyet için gereken havayı tambura verir." },
          { title: "Atık hava arıtma", text: "Tamburdan emilen hava koku kontrolü için arıtma ünitesine gönderilir." },
        ],
        flow: {
          svgTitle: "Kompost tesisi proses akış şeması",
          svgDesc:
            "Malzeme hattı: kabul ve ön işlem, karışım hazırlama, kompost tamburu, olgunlaştırma ve eleme. Hava hattı: hava fanı tambura hava verir; atık hava arıtma ünitesine gider.",
          mainLane: "MALZEME HATTI",
          before: [
            { title: "Kabul, ön işlem", sub: "Parçalama, ayırma" },
            { title: "Karışım", sub: "Nem ve yapı dengesi" },
          ],
          drum: { title: "KOMPOST TAMBURU", sub: "karıştırma · havalandırma" },
          after: [{ title: "Olgunlaştırma", sub: "Tambur dışında, eleme" }],
          aux: {
            lane: "PROSES HAVASI HATTI",
            tone: "air",
            inputs: [{ title: "Hava fanı", sub: "Havalandırma" }],
            outputs: [{ title: "Hava arıtma", sub: "Koku kontrolü" }],
            inLabel: "proses havası",
            outLabel: "atık hava",
          },
        },
      },
      applications: {
        title: "Kompost Tamburu Uygulama Alanları",
        items: [
          {
            title: "Evsel Organik Atık",
            text: "Kaynağında ayrılmış mutfak ve gıda atıklarının karıştırılıp havalandırılarak kompost sürecine hazırlanması. Ön işlemde yabancı maddelerin ayrılması tambur performansı için önemlidir.",
            imageAlt: "Meyve ve sebze kabuklarından oluşan evsel organik atık",
            linkLabel: "Organik Atık İşleme Tesisi",
          },
          {
            title: "Bitkisel ve Tarımsal Atıklar",
            text: "Sebze, meyve ve bitkisel atıkların yapı malzemesiyle karıştırılarak homojen bir kompost karışımına dönüştürülmesi. Karbon ve nem dengesi girdi oranlarıyla ayarlanır.",
            imageAlt: "Sebze ve bitki artıklarından oluşan kompost yığını",
            linkLabel: "Bitkisel Atık Kompost Tesisi",
          },
          {
            title: "Digestat ve Arıtma Çamuru Karışımları",
            text: "Biyogaz sonrası digestat ve susuzlaştırılmış arıtma çamurunun yapı malzemesiyle karıştırılarak kompostlaştırmaya hazırlanması. Yüksek nemli girdilerde karışım oranı belirleyicidir.",
            imageAlt: "Tesis yanında yığılmış koyu renkli digestat ve kompost malzemesi",
            linkLabel: "Çamurdan Kompost Tesisi",
          },
          {
            title: "Olgunlaştırma Öncesi Hazırlık",
            text: "Tamburda ön stabilizasyonu yapılan malzemenin olgunlaştırma alanına homojen ve havalanmış hâlde aktarılması. Olgunlaştırma süresi tesis kurgusuna göre planlanır.",
            imageAlt: "Kepçeyle çevrilen, buhar çıkaran kompost yığını",
            linkLabel: "Kompost Tesisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Kompost Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA kompost tamburlarını günlük besleme tonajı, girdi karışımı, hedef kalış süresi ve tesis yerleşimine göre projelendirir. Uzun tambur gövdesi, iç karıştırma elemanları, hava bağlantıları, besleme ve boşaltma üniteleri ile tahrik sistemi birlikte tasarlanır.",
        highlights: ["Uzun kalış süresine uygun gövde", "Karıştırıcı iç elemanlar", "Hava besleme ve emiş bağlantıları", "Organik malzemeye uygun malzeme seçimi"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Girdi Bilgileri", text: "Atık türleri, karışım oranları, nem, yoğunluk ve yabancı madde içeriği." },
          { title: "Kapasite ve Süre", text: "Günlük besleme tonajı, çalışma günleri ve hedef kalış süresi." },
          { title: "Hava ve Koku", text: "Havalandırma yaklaşımı, emilen hava miktarı ve arıtma yöntemi." },
          { title: "Mekanik Tasarım", text: "Tambur ölçüleri, iç elemanlar, tahrik sistemi ve taşıyıcı gruplar." },
          { title: "Tesis Entegrasyonu", text: "Kabul, ön işlem, olgunlaştırma, eleme ve saha yerleşimi." },
        ],
        dataNote: "Hijyenizasyon veya olgunluk gibi ürün hedefleri ilgili mevzuat, girdi karışımı ve tesis işletmesine bağlıdır; bu hedefler proje aşamasında ayrıca değerlendirilir.",
      },
      faq: {
        title: "Kompost Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Kompost tamburu hangi atıklar için kullanılır?",
            answer:
              "Kompost tamburu; evsel organik atık, arıtma çamuru, digestat, hayvansal atık ve tarımsal atık karışımlarında ön biyolojik stabilizasyon ve homojenleştirme için kullanılabilir.",
          },
          {
            question: "Kompost tamburu olgun kompost üretir mi?",
            answer:
              "Tambur kompostlaştırmanın başlangıç adımıdır: karıştırma, havalandırma ve ön stabilizasyon sağlar. Olgunlaştırma tesis kurgusuna göre tambur dışındaki alanlarda devam eder.",
          },
          {
            question: "Kompost tamburunun kapasitesi nasıl belirlenir?",
            answer:
              "Kapasite; günlük besleme miktarı, hedef kalış süresi, malzeme yoğunluğu, nem seviyesi ve tambur doluluk oranı birlikte değerlendirilerek belirlenir.",
          },
          {
            question: "Tamburda nem kontrolü neden önemlidir?",
            answer:
              "Nem seviyesi biyolojik aktiviteyi, malzemenin akış davranışını ve koku oluşumunu etkiler. Bu nedenle girdi karışımı, havalandırma ve tambur tasarımı nem dengesiyle birlikte ele alınır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Atık tipi, günlük tonaj, giriş nemi, hedef kalış süresi, saha alanı, havalandırma ve koku yönetimi yaklaşımı ile son ürün hedefi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Kompost tamburu için teknik teklif alın",
        text: "Atık tipiniz, günlük tonajınız ve saha koşullarınıza göre kompost tamburunu ve tesis içindeki yerini birlikte netleştirelim.",
        mailSubject: "Kompost Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Atık türleri ve karışım oranları",
          "Günlük besleme tonajı",
          "Giriş nemi",
          "Hedef kalış süresi",
          "Havalandırma ve koku yönetimi yaklaşımı",
          "Saha alanı ve mevcut ekipmanlar",
        ],
        inquiryLines: [
          "Merhaba, kompost tamburu için teknik teklif almak istiyorum.",
          "",
          "Atık türleri:",
          "Günlük tonaj:",
          "Giriş nemi (%):",
          "Hedef kalış süresi:",
          "Son ürün hedefi:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Compost Drum Manufacturer | Rotary Composting Reactor",
        description:
          "Rotary compost drums that mix, aerate and pre-stabilise organic waste, digestate and sludge mixtures. For municipal and industrial composting plants.",
      },
      breadcrumbLabel: "Compost Drum",
      h1: "Compost Drum – Rotary Composting Reactor for Organic Waste",
      productCategory: "Rotary Composting Reactor",
      overview: {
        imageAlt: "Rotary compost drum with air connection and cyclone equipment",
        tagline: "Rotary Composting Reactor",
        keyFacts: [
          { label: "Task", value: "Mixing, aeration, pre-stabilisation" },
          { label: "Input", value: "Organic waste, digestate, sludge mixtures" },
          { label: "Sizing", value: "Daily tonnage and target residence time" },
          { label: "Next step", value: "Maturation and screening (outside the drum)" },
        ],
        title: "A Controlled Start to the Composting Process",
        paragraphs: [
          "A compost drum is a rotary composting reactor in which mixtures of organic waste, digestate, sewage sludge and bulking agents are continuously mixed and aerated inside a long, slowly rotating drum. The material is homogenised, its structure is opened up and aerobic biological activity starts under controlled conditions.",
          "The drum does not carry out the whole composting process; it is a pre-stabilisation and homogenisation step. Maturation of the material leaving the drum continues in windrows, tunnels or enclosed areas depending on the plant concept, followed by screening to prepare the final product.",
          "Drum length and diameter are determined by daily feed, target residence time, material density and moisture, aeration approach and available site area. Treatment of the air extracted from the drum for odour management is addressed within the project scope.",
        ],
        note: "Moisture, air and mix balance govern the biological process in composting. The drum helps establish this balance; the stability and product quality achieved depend on the input mix and plant operation.",
      },
      process: {
        title: "Composting Plant Process Flow",
        intro:
          "The diagram shows where the compost drum sits in a typical organic waste plant. Reception, pre-treatment, maturation and screening are carried out by plant equipment outside the drum.",
        note: "Air extracted from the drum carries moisture and odorous compounds; the treatment method (e.g. biofilter or scrubber) is chosen according to the plant permit and layout.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Reception and pre-treatment", text: "Organic waste is weighed, shredded if required and cleared of contaminants." },
          { title: "Mix preparation", text: "Different inputs and bulking agent are blended for moisture and structure balance." },
          { title: "Pre-stabilisation in the drum", text: "The material is mixed by slow rotation, aerated and homogenised." },
          { title: "Maturation and screening", text: "Drum output goes to the maturation area and then to screening." },
        ],
        auxLineLabel: "Process air line",
        auxLine: [
          { title: "Air supply", text: "A fan supplies the air needed for biological activity to the drum." },
          { title: "Exhaust air treatment", text: "Air drawn from the drum is sent to a treatment unit for odour control." },
        ],
        flow: {
          svgTitle: "Composting plant process flow diagram",
          svgDesc:
            "Material line: reception and pre-treatment, mix preparation, compost drum, maturation and screening. Air line: an air fan supplies the drum; exhaust air goes to treatment.",
          mainLane: "MATERIAL LINE",
          before: [
            { title: "Reception", sub: "Shredding, sorting" },
            { title: "Mixing", sub: "Moisture and structure" },
          ],
          drum: { title: "COMPOST DRUM", sub: "mixing · aeration" },
          after: [{ title: "Maturation", sub: "Outside drum, screening" }],
          aux: {
            lane: "PROCESS AIR LINE",
            tone: "air",
            inputs: [{ title: "Air fan", sub: "Aeration" }],
            outputs: [{ title: "Air treatment", sub: "Odour control" }],
            inLabel: "process air",
            outLabel: "exhaust air",
          },
        },
      },
      applications: {
        title: "Compost Drum Applications",
        items: [
          {
            title: "Household Organic Waste",
            text: "Source-separated kitchen and food waste mixed and aerated to prepare it for composting. Removing contaminants in pre-treatment is important for drum performance.",
            imageAlt: "Household organic waste with fruit and vegetable peels",
            linkLabel: "Organic Waste Processing Plant",
          },
          {
            title: "Green and Agricultural Waste",
            text: "Vegetable, fruit and plant residues blended with bulking agent into a homogeneous compost mix. Carbon and moisture balance is set through input ratios.",
            imageAlt: "Compost heap of vegetable and plant residues",
            linkLabel: "Agricultural Waste Compost Plant",
          },
          {
            title: "Digestate and Sludge Mixtures",
            text: "Digestate from biogas plants and dewatered sewage sludge mixed with bulking agent to prepare them for composting. For wet inputs, the mix ratio is decisive.",
            imageAlt: "Dark digestate and compost material piled next to a plant",
            linkLabel: "Sludge-to-Compost Plant",
          },
          {
            title: "Preparation for Maturation",
            text: "Transferring pre-stabilised material from the drum to the maturation area in a homogeneous, aerated state. Maturation time is planned according to the plant concept.",
            imageAlt: "Steaming compost windrow being turned by a wheel loader",
            linkLabel: "Composting Plant",
          },
        ],
      },
      design: {
        title: "Custom Compost Drum Design and Manufacturing",
        intro:
          "PRO MAKINA engineers compost drums around daily feed tonnage, input mix, target residence time and plant layout. The long drum shell, internal mixing elements, air connections, feeding and discharge units and the drive system are designed together.",
        highlights: ["Shell sized for long residence time", "Internal mixing elements", "Air supply and extraction connections", "Materials suited to organic waste"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Input Data", text: "Waste types, mix ratios, moisture, density and contaminant content." },
          { title: "Capacity and Time", text: "Daily feed tonnage, operating days and target residence time." },
          { title: "Air and Odour", text: "Aeration approach, extracted air volume and treatment method." },
          { title: "Mechanical Design", text: "Drum dimensions, internals, drive system and supports." },
          { title: "Plant Integration", text: "Reception, pre-treatment, maturation, screening and site layout." },
        ],
        dataNote: "Product targets such as hygienisation or maturity depend on applicable regulations, the input mix and plant operation; they are assessed separately at the project stage.",
      },
      faq: {
        title: "Compost Drum FAQ",
        items: [
          {
            question: "Which wastes is a compost drum used for?",
            answer:
              "A compost drum can be used for pre-stabilisation and homogenisation of household organic waste, sewage sludge, digestate, animal manure and agricultural waste mixtures.",
          },
          {
            question: "Does a compost drum produce mature compost?",
            answer:
              "The drum is the initial step of composting: it provides mixing, aeration and pre-stabilisation. Maturation continues outside the drum according to the plant concept.",
          },
          {
            question: "How is compost drum capacity determined?",
            answer:
              "Capacity is determined by daily feed, target residence time, material density, moisture level and drum filling ratio considered together.",
          },
          {
            question: "Why is moisture control important in the drum?",
            answer:
              "Moisture affects biological activity, material flow behaviour and odour formation. Input mix, aeration and drum design are therefore considered together with the moisture balance.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Waste types, daily tonnage, inlet moisture, target residence time, site area, aeration and odour management approach and the final product target.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a compost drum",
        text: "Share your waste types, daily tonnage and site conditions, and we will define the compost drum and its place in the plant together with you.",
        mailSubject: "Compost Drum Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Waste types and mix ratios",
          "Daily feed tonnage",
          "Inlet moisture",
          "Target residence time",
          "Aeration and odour management approach",
          "Site area and existing equipment",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a compost drum.",
          "",
          "Waste types:",
          "Daily tonnage:",
          "Inlet moisture (%):",
          "Target residence time:",
          "Final product target:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Компостный барабан | Вращающийся компостный реактор",
        description:
          "Вращающиеся компостные барабаны для смешивания, аэрации и предварительной стабилизации органических отходов, дигестата и осадка. Для муниципальных и промышленных объектов.",
      },
      breadcrumbLabel: "Компостный барабан",
      h1: "Компостный барабан – вращающийся реактор для органических отходов",
      productCategory: "Вращающийся компостный реактор",
      overview: {
        imageAlt: "Компостный барабан с воздушными подключениями и циклоном",
        tagline: "Вращающийся компостный реактор",
        keyFacts: [
          { label: "Задача", value: "Смешивание, аэрация, предварительная стабилизация" },
          { label: "Сырьё", value: "Органические отходы, дигестат, осадок" },
          { label: "Расчёт", value: "По суточному объёму и времени пребывания" },
          { label: "Следующий этап", value: "Дозревание и грохочение (вне барабана)" },
        ],
        title: "Контролируемый старт процесса компостирования",
        paragraphs: [
          "Компостный барабан — вращающийся реактор, в котором смеси органических отходов, дигестата, осадка сточных вод и структурообразователя непрерывно перемешиваются и аэрируются в длинном медленно вращающемся барабане. Материал гомогенизируется, его структура разрыхляется, и аэробная биологическая активность начинается в контролируемых условиях.",
          "Барабан не выполняет весь процесс компостирования — это этап предварительной стабилизации и гомогенизации. Дозревание материала после барабана продолжается в буртах, туннелях или закрытых помещениях в зависимости от концепции объекта, затем готовый продукт получают грохочением.",
          "Длина и диаметр барабана определяются суточной подачей, целевым временем пребывания, плотностью и влажностью материала, способом аэрации и площадью площадки. Очистка отсасываемого из барабана воздуха для контроля запахов входит в рамки проекта.",
        ],
        note: "Биологический процесс компостирования определяется балансом влаги, воздуха и состава смеси. Барабан помогает установить этот баланс; достигаемая стабильность и качество продукта зависят от исходной смеси и эксплуатации объекта.",
      },
      process: {
        title: "Технологическая схема компостного комплекса",
        intro:
          "Схема показывает место компостного барабана на типовом объекте переработки органики. Приёмка, подготовка, дозревание и грохочение выполняются оборудованием вне барабана.",
        note: "Отсасываемый из барабана воздух содержит влагу и пахучие вещества; метод очистки (например, биофильтр или скруббер) выбирается по разрешительной документации и компоновке.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Приёмка и подготовка", text: "Отходы взвешиваются, при необходимости измельчаются и очищаются от примесей." },
          { title: "Приготовление смеси", text: "Компоненты и структурообразователь смешиваются для баланса влаги и структуры." },
          { title: "Стабилизация в барабане", text: "Материал перемешивается медленным вращением, аэрируется и гомогенизируется." },
          { title: "Дозревание и грохочение", text: "Материал из барабана поступает на дозревание, затем на грохот." },
        ],
        auxLineLabel: "Линия технологического воздуха",
        auxLine: [
          { title: "Подача воздуха", text: "Вентилятор подаёт в барабан воздух, необходимый для биологической активности." },
          { title: "Очистка отходящего воздуха", text: "Отсасываемый воздух направляется на очистку для контроля запахов." },
        ],
        flow: {
          svgTitle: "Технологическая схема компостного комплекса",
          svgDesc:
            "Линия материала: приёмка и подготовка, приготовление смеси, компостный барабан, дозревание и грохочение. Воздушная линия: вентилятор подаёт воздух в барабан; отходящий воздух поступает на очистку.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          before: [
            { title: "Приёмка", sub: "Измельчение, сортировка" },
            { title: "Смешивание", sub: "Баланс влаги" },
          ],
          drum: { title: "КОМПОСТНЫЙ БАРАБАН", sub: "смешивание · аэрация" },
          after: [{ title: "Дозревание", sub: "Вне барабана, грохот" }],
          aux: {
            lane: "ЛИНИЯ ВОЗДУХА",
            tone: "air",
            inputs: [{ title: "Вентилятор", sub: "Аэрация" }],
            outputs: [{ title: "Очистка воздуха", sub: "Контроль запахов" }],
            inLabel: "технологический воздух",
            outLabel: "отходящий воздух",
          },
        },
      },
      applications: {
        title: "Области применения компостного барабана",
        items: [
          {
            title: "Бытовые органические отходы",
            text: "Раздельно собранные кухонные и пищевые отходы перемешиваются и аэрируются для подготовки к компостированию. Удаление примесей на этапе подготовки важно для работы барабана.",
            imageAlt: "Бытовые органические отходы с кожурой фруктов и овощей",
            linkLabel: "Комплекс переработки органики",
          },
          {
            title: "Растительные и сельскохозяйственные отходы",
            text: "Овощные, фруктовые и растительные остатки смешиваются со структурообразователем в однородную компостную смесь. Баланс углерода и влаги задаётся соотношением компонентов.",
            imageAlt: "Компостная куча из овощных и растительных остатков",
            linkLabel: "Компостирование агроотходов",
          },
          {
            title: "Смеси дигестата и осадка",
            text: "Дигестат биогазовых установок и обезвоженный осадок сточных вод смешиваются со структурообразователем для подготовки к компостированию. Для влажного сырья решающим является состав смеси.",
            imageAlt: "Тёмный дигестат и компостный материал у здания установки",
            linkLabel: "Компостирование осадка",
          },
          {
            title: "Подготовка к дозреванию",
            text: "Передача предварительно стабилизированного материала из барабана на площадку дозревания в однородном и аэрированном состоянии. Срок дозревания планируется по концепции объекта.",
            imageAlt: "Фронтальный погрузчик ворошит парящий компостный бурт",
            linkLabel: "Компостный комплекс",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление компостных барабанов",
        intro:
          "PRO MAKINA проектирует компостные барабаны исходя из суточной подачи, состава смеси, целевого времени пребывания и компоновки объекта. Длинный корпус, внутренние смешивающие элементы, воздушные подключения, узлы загрузки и выгрузки и привод разрабатываются совместно.",
        highlights: ["Корпус под длительное пребывание", "Внутренние смешивающие элементы", "Подвод и отсос воздуха", "Материалы для органических отходов"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Данные сырья", text: "Виды отходов, соотношения, влажность, плотность и содержание примесей." },
          { title: "Производительность и время", text: "Суточная подача, рабочие дни и целевое время пребывания." },
          { title: "Воздух и запахи", text: "Способ аэрации, объём отсасываемого воздуха и метод очистки." },
          { title: "Механическая часть", text: "Размеры барабана, внутренние элементы, привод и опоры." },
          { title: "Интеграция в объект", text: "Приёмка, подготовка, дозревание, грохочение и компоновка." },
        ],
        dataNote: "Целевые показатели продукта, такие как гигиенизация или зрелость, зависят от применимых норм, состава смеси и эксплуатации; они оцениваются отдельно на стадии проекта.",
      },
      faq: {
        title: "Часто задаваемые вопросы о компостном барабане",
        items: [
          {
            question: "Для каких отходов применяется компостный барабан?",
            answer:
              "Компостный барабан применяется для предварительной стабилизации и гомогенизации смесей бытовой органики, осадка сточных вод, дигестата, навоза и сельскохозяйственных отходов.",
          },
          {
            question: "Получается ли в барабане зрелый компост?",
            answer:
              "Барабан — начальный этап компостирования: он обеспечивает смешивание, аэрацию и предварительную стабилизацию. Дозревание продолжается вне барабана по концепции объекта.",
          },
          {
            question: "Как определяется производительность барабана?",
            answer:
              "Производительность определяется совместно суточной подачей, целевым временем пребывания, плотностью и влажностью материала и степенью заполнения барабана.",
          },
          {
            question: "Почему важен контроль влажности?",
            answer:
              "Влажность влияет на биологическую активность, сыпучесть материала и образование запахов. Поэтому состав смеси, аэрация и конструкция барабана рассматриваются вместе с балансом влаги.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Виды отходов, суточный объём, входная влажность, целевое время пребывания, площадь площадки, подход к аэрации и контролю запахов и целевой продукт.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на компостный барабан",
        text: "Сообщите виды отходов, суточный объём и условия площадки — вместе определим компостный барабан и его место на объекте.",
        mailSubject: "Запрос предложения: компостный барабан",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Виды отходов и соотношения",
          "Суточная подача",
          "Входная влажность",
          "Целевое время пребывания",
          "Подход к аэрации и контролю запахов",
          "Площадь площадки и имеющееся оборудование",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на компостный барабан.",
          "",
          "Виды отходов:",
          "Суточный объём:",
          "Входная влажность (%):",
          "Время пребывания:",
          "Целевой продукт:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة الكمبوست | مفاعل تسميد دوّار",
        description:
          "أسطوانات كمبوست دوّارة تخلط النفايات العضوية والمخلفات الهضمية وخلطات الحمأة وتهوّيها وتهيئها للتثبيت الأولي. لمنشآت التسميد البلدية والصناعية.",
      },
      breadcrumbLabel: "أسطوانة الكمبوست",
      h1: "أسطوانة الكمبوست – مفاعل تسميد دوّار للنفايات العضوية",
      productCategory: "مفاعل تسميد دوّار",
      overview: {
        imageAlt: "أسطوانة كمبوست دوّارة مع توصيلات الهواء والسيكلون",
        tagline: "مفاعل تسميد دوّار",
        keyFacts: [
          { label: "المهمة", value: "خلط وتهوية وتثبيت أولي" },
          { label: "المدخلات", value: "نفايات عضوية ومخلفات هضم وحمأة" },
          { label: "التحجيم", value: "حسب الحمولة اليومية وزمن المكوث" },
          { label: "المرحلة التالية", value: "إنضاج وغربلة (خارج الأسطوانة)" },
        ],
        title: "بداية مضبوطة لعملية التسميد",
        paragraphs: [
          "أسطوانة الكمبوست مفاعل تسميد دوّار تُخلط فيه خلطات النفايات العضوية والمخلفات الهضمية وحمأة الصرف والمواد المالئة وتُهوّى باستمرار داخل أسطوانة طويلة بطيئة الدوران. تتجانس المادة وتنفتح بنيتها ويبدأ النشاط البيولوجي الهوائي في ظروف مضبوطة.",
          "لا تتولى الأسطوانة عملية التسميد بأكملها؛ فهي مرحلة تثبيت أولي وتجانس. ويستمر إنضاج المادة الخارجة منها في أكوام أو أنفاق أو مناطق مغلقة وفق تصور المنشأة، ثم يُجهَّز المنتج النهائي بالغربلة.",
          "يُحدَّد طول الأسطوانة وقطرها وفق التلقيم اليومي وزمن المكوث المستهدف وكثافة المادة ورطوبتها وأسلوب التهوية ومساحة الموقع. وتُعالَج مسألة تنقية الهواء المسحوب من الأسطوانة للتحكم في الروائح ضمن نطاق المشروع.",
        ],
        note: "يحكم العمليةَ البيولوجية في التسميد توازنُ الرطوبة والهواء ومكونات الخلطة. تساعد الأسطوانة على تحقيق هذا التوازن، أما درجة الثبات وجودة المنتج فتعتمدان على الخلطة الداخلة وتشغيل المنشأة.",
      },
      process: {
        title: "مخطط تدفق منشأة التسميد",
        intro:
          "يوضح المخطط موقع أسطوانة الكمبوست في منشأة نموذجية لمعالجة النفايات العضوية. يتم الاستقبال والمعالجة الأولية والإنضاج والغربلة بمعدات خارج الأسطوانة.",
        note: "يحمل الهواء المسحوب من الأسطوانة رطوبة ومركبات ذات رائحة، ويُختار أسلوب معالجته (مثل المرشح الحيوي أو الغسّال) وفق ترخيص المنشأة وتخطيطها.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "الاستقبال والمعالجة الأولية", text: "تُوزن النفايات وتُفرم عند الحاجة وتُزال منها الشوائب." },
          { title: "تحضير الخلطة", text: "تُخلط المدخلات المختلفة والمادة المالئة لتوازن الرطوبة والبنية." },
          { title: "التثبيت الأولي في الأسطوانة", text: "تُخلط المادة بدوران بطيء وتُهوّى وتتجانس." },
          { title: "الإنضاج والغربلة", text: "تنتقل مخرجات الأسطوانة إلى منطقة الإنضاج ثم إلى الغربلة." },
        ],
        auxLineLabel: "خط هواء العملية",
        auxLine: [
          { title: "تزويد الهواء", text: "تمد المروحة الأسطوانة بالهواء اللازم للنشاط البيولوجي." },
          { title: "معالجة هواء العادم", text: "يُرسل الهواء المسحوب من الأسطوانة إلى وحدة معالجة للتحكم في الروائح." },
        ],
        flow: {
          svgTitle: "مخطط تدفق منشأة التسميد",
          svgDesc:
            "خط المادة: الاستقبال والمعالجة الأولية، تحضير الخلطة، أسطوانة الكمبوست، الإنضاج والغربلة. خط الهواء: مروحة تزوّد الأسطوانة بالهواء ويذهب هواء العادم إلى المعالجة.",
          mainLane: "خط المادة",
          before: [
            { title: "الاستقبال", sub: "فرم وفرز" },
            { title: "الخلط", sub: "توازن الرطوبة" },
          ],
          drum: { title: "أسطوانة الكمبوست", sub: "خلط · تهوية" },
          after: [{ title: "الإنضاج", sub: "خارج الأسطوانة، غربلة" }],
          aux: {
            lane: "خط الهواء",
            tone: "air",
            inputs: [{ title: "مروحة الهواء", sub: "تهوية" }],
            outputs: [{ title: "معالجة الهواء", sub: "التحكم في الروائح" }],
            inLabel: "هواء العملية",
            outLabel: "هواء العادم",
          },
        },
      },
      applications: {
        title: "مجالات استخدام أسطوانة الكمبوست",
        items: [
          {
            title: "النفايات العضوية المنزلية",
            text: "خلط نفايات المطبخ والطعام المفروزة من المصدر وتهويتها لتهيئتها للتسميد. وتُعد إزالة الشوائب في المعالجة الأولية مهمة لأداء الأسطوانة.",
            imageAlt: "نفايات عضوية منزلية تضم قشور الفواكه والخضروات",
            linkLabel: "منشأة معالجة النفايات العضوية",
          },
          {
            title: "المخلفات النباتية والزراعية",
            text: "خلط بقايا الخضروات والفواكه والنباتات مع المادة المالئة لتكوين خلطة كمبوست متجانسة. ويُضبط توازن الكربون والرطوبة بنسب المدخلات.",
            imageAlt: "كومة كمبوست من بقايا الخضروات والنباتات",
            linkLabel: "منشأة كمبوست المخلفات الزراعية",
          },
          {
            title: "خلطات المخلفات الهضمية والحمأة",
            text: "خلط المخلفات الهضمية لمحطات الغاز الحيوي والحمأة المنزوعة الماء مع مادة مالئة لتهيئتها للتسميد. وفي المدخلات الرطبة تكون نسبة الخلط حاسمة.",
            imageAlt: "مخلفات هضمية ومواد كمبوست داكنة مكدسة بجوار منشأة",
            linkLabel: "منشأة تسميد الحمأة",
          },
          {
            title: "التهيئة قبل الإنضاج",
            text: "نقل المادة المثبّتة أوليًا من الأسطوانة إلى منطقة الإنضاج وهي متجانسة ومهوّاة. ويُخطَّط زمن الإنضاج وفق تصور المنشأة.",
            imageAlt: "جرافة تقلب كومة كمبوست يتصاعد منها البخار",
            linkLabel: "منشأة التسميد",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أسطوانات كمبوست مخصصة",
        intro:
          "تصمم PRO MAKINA أسطوانات الكمبوست وفق الحمولة اليومية وتركيبة المدخلات وزمن المكوث المستهدف وتخطيط المنشأة. ويُصمَّم جسم الأسطوانة الطويل وعناصر الخلط الداخلية وتوصيلات الهواء ووحدات التلقيم والتفريغ ونظام الإدارة معًا.",
        highlights: ["جسم مناسب لزمن مكوث طويل", "عناصر خلط داخلية", "توصيلات تزويد الهواء وسحبه", "مواد ملائمة للنفايات العضوية"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "بيانات المدخلات", text: "أنواع النفايات ونسب الخلط والرطوبة والكثافة ومحتوى الشوائب." },
          { title: "السعة والزمن", text: "الحمولة اليومية وأيام التشغيل وزمن المكوث المستهدف." },
          { title: "الهواء والروائح", text: "أسلوب التهوية وكمية الهواء المسحوب وطريقة المعالجة." },
          { title: "التصميم الميكانيكي", text: "أبعاد الأسطوانة والعناصر الداخلية ونظام الإدارة والمساند." },
          { title: "التكامل مع المنشأة", text: "الاستقبال والمعالجة الأولية والإنضاج والغربلة وتخطيط الموقع." },
        ],
        dataNote: "تعتمد أهداف المنتج مثل التعقيم الصحي أو النضج على اللوائح المعمول بها وتركيبة المدخلات وتشغيل المنشأة، وتُقيَّم بشكل منفصل في مرحلة المشروع.",
      },
      faq: {
        title: "أسئلة شائعة حول أسطوانة الكمبوست",
        items: [
          {
            question: "لأي نفايات تُستخدم أسطوانة الكمبوست؟",
            answer:
              "يمكن استخدامها للتثبيت البيولوجي الأولي وتجانس خلطات النفايات العضوية المنزلية وحمأة الصرف والمخلفات الهضمية وروث الحيوانات والمخلفات الزراعية.",
          },
          {
            question: "هل تنتج أسطوانة الكمبوست سمادًا ناضجًا؟",
            answer:
              "الأسطوانة هي المرحلة الأولى من التسميد: توفر الخلط والتهوية والتثبيت الأولي. ويستمر الإنضاج خارج الأسطوانة وفق تصور المنشأة.",
          },
          {
            question: "كيف تُحدَّد سعة أسطوانة الكمبوست؟",
            answer:
              "تُحدَّد السعة بتقييم التلقيم اليومي وزمن المكوث المستهدف وكثافة المادة ورطوبتها ونسبة امتلاء الأسطوانة معًا.",
          },
          {
            question: "لماذا يُعد التحكم في الرطوبة مهمًا؟",
            answer:
              "تؤثر الرطوبة في النشاط البيولوجي وسلوك انسياب المادة وتكوّن الروائح، لذلك تُدرس تركيبة المدخلات والتهوية وتصميم الأسطوانة مع توازن الرطوبة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "أنواع النفايات والحمولة اليومية ورطوبة الدخول وزمن المكوث المستهدف ومساحة الموقع وأسلوب التهوية والتحكم في الروائح وهدف المنتج النهائي.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لأسطوانة كمبوست",
        text: "شاركنا أنواع النفايات والحمولة اليومية وظروف الموقع، لنحدد معًا أسطوانة الكمبوست وموقعها في المنشأة.",
        mailSubject: "طلب عرض سعر: أسطوانة كمبوست",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "أنواع النفايات ونسب الخلط",
          "الحمولة اليومية",
          "رطوبة الدخول",
          "زمن المكوث المستهدف",
          "أسلوب التهوية والتحكم في الروائح",
          "مساحة الموقع والمعدات الحالية",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لأسطوانة كمبوست.",
          "",
          "أنواع النفايات:",
          "الحمولة اليومية:",
          "رطوبة الدخول (%):",
          "زمن المكوث المستهدف:",
          "هدف المنتج النهائي:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
