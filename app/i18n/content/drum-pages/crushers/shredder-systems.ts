import type { DrumPageConfig } from "../types";

// Shredder sistemleri: fotoğraflara göre düşük devirli, çift milli (iki rotorlu) kesme/yırtma tipi parçalayıcı.
// Mineral kırıcı değildir. Tork, güç, kapasite veya garantili parça boyutu verilmez.
const img = (file: string) => `/images/kirici shredder/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const shredderSystemsPage: DrumPageConfig = {
  key: "shredderSystems",
  group: "crushers",
  trSlug: "shredder-sistemleri",
  mainImage: img("kiricishred7.jpg"),
  applications: [
    { image: app("plastik-atik.webp"), link: "recycling" },
    { image: app("ahsap-palet.webp"), link: "recycling" },
    { image: app("karma-atik.webp"), link: "rdfPlantSolution" },
  ],
  figure: img("kiricishred8.jpg"),
  gallery: [img("kiricishred2.jpg"), img("kiricishred3.jpg"), img("kiricishred4.jpg"), img("kiricishred6.jpg"), img("kiricishred1.jpg")],
  sectors: ["recycling", "compostPlants", "chemicalProcess"],
  resources: ["rdfPlantSolution", "organicWastePlant", "primaryImpactCrusher", "screeningSystems"],
  machines: ["conveying", "screeningSystems", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Shredder Sistemleri | Çift Milli Parçalayıcı | PRO MAKİNA",
        description:
          "Plastik, ahşap ve karma atık gibi hacimli malzemeleri düşük devirli bıçaklı rotorlarla parçalayan endüstriyel shredder sistemleri. Projeye özel tasarım ve imalat.",
      },
      breadcrumbLabel: "Shredder Sistemleri",
      h1: "Shredder Sistemleri – Çift Milli Endüstriyel Parçalayıcılar",
      productCategory: "Endüstriyel Shredder",
      overview: {
        imageAlt: "Mavi gövdeli shredder içinde çift rotor ve kesici diskler",
        tagline: "Çift Milli Endüstriyel Shredder",
        keyFacts: [
          { label: "Parçalama prensibi", value: "Kesme ve yırtma" },
          { label: "Rotor düzeni", value: "Karşılıklı dönen iki mil" },
          { label: "Devir", value: "Düşük devir, yüksek tork" },
          { label: "Malzeme", value: "Hacimli ve karma atıklar" },
        ],
        title: "Hacimli Malzemelerin Kesilerek Parçalanması",
        paragraphs: [
          "Shredder sistemlerinde malzeme, birbirine doğru düşük devirle dönen iki mil üzerindeki kancalı kesici diskler arasında yakalanır, kesilir ve yırtılır. Bu yapı, darbeli kırıcılardan farklı olarak ezme veya çarpma yerine kesme etkisiyle çalışır.",
          "Kesici disklerin kalınlığı ve kanca geometrisi, çıkan parçaların boyutunu belirleyen temel unsurlardır. Milleri tahrik eden redüktörlü motorlar yüksek tork sağlar; sıkışma durumunda yön değiştirme ve aşırı yük koruması tasarımın parçasıdır.",
          "Shredder, plastik, ahşap, palet, karma atık ve benzeri hacimli malzemelerin ön parçalanmasında kullanılır. Daha küçük ve homojen boyut gerekiyorsa ikinci kademe parçalama ve eleme ile birlikte değerlendirilir.",
        ],
        note: "Metal parçalar, taş ve yabancı maddeler bıçaklara zarar verebilir; besleme öncesi ayırma ve malzeme kontrolü shredder ömrü için önemlidir.",
      },
      process: {
        title: "Shredder Malzeme Akışı",
        intro:
          "Şema, shredder sisteminin hacimli malzemeyi besleme bunkerinden alıp bıçaklı rotorlarla parçaladığı ve tahliye ettiği tipik akışı gösterir. Ayırma ve eleme ayrı ekipmanlarla yapılır.",
        note: "Parçalanan malzeme, tesis kurgusuna göre metal ayırma, eleme veya ikinci kademe parçalamaya gönderilir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Hammadde besleme", text: "Hacimli malzeme besleme bunkerine konveyör veya kepçeyle verilir." },
          { title: "Yakalama ve kesme", text: "Karşılıklı dönen millerdeki kancalı diskler malzemeyi yakalayıp keser." },
          { title: "Sıkışma kontrolü", text: "Aşırı yükte rotorlar yön değiştirerek sıkışmayı çözer." },
          { title: "Parça tahliyesi", text: "Parçalanan malzeme alttan konveyöre veya sonraki prosese aktarılır." },
        ],
        flow: {
          svgTitle: "Shredder malzeme akış şeması",
          svgDesc: "Malzeme hattı: besleme bunkeri, çift milli shredder, alt tahliye, ayırma veya eleme.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Bunker, konveyör" }],
          drum: { title: "SHREDDER", sub: "çift mil · kesici disk" },
          after: [
            { title: "Tahliye", sub: "Alt çıkış, konveyör" },
            { title: "Ayırma / eleme", sub: "Sonraki proses" },
          ],
        },
      },
      applications: {
        title: "Shredder Uygulama Alanları",
        items: [
          {
            title: "Plastik Atıklar",
            text: "Plastik ambalaj ve hacimli plastik atıkların geri dönüşüm hattı öncesinde parçalanması. Kesici disk kalınlığı hedef parça boyutuna göre seçilir.",
            imageAlt: "Duvar dibinde biriken karışık plastik atıklar",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
          {
            title: "Ahşap ve Palet Atıkları",
            text: "Palet ve ahşap atıkların taşınabilir ve işlenebilir parçalara ayrılması. Çivi ve metal parçalar bıçak aşınmasını artırdığından ayırma ile birlikte planlanır.",
            imageAlt: "Üst üste istiflenmiş ahşap paletler",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
          {
            title: "Karma Atık ve ATY Hazırlama",
            text: "Karma atıkların ayırma ve atıktan türetilmiş yakıt (ATY/RDF) hazırlama hatlarında ön parçalanması. Yabancı madde kontrolü tasarımın parçasıdır.",
            imageAlt: "Açık alanda biriken karışık belediye atığı",
            linkLabel: "ATY / RDF Hazırlama Tesisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Shredder Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA shredder sistemlerini hammadde türü, besleme boyutu, hedef parça boyutu ve kapasiteye göre projelendirir. Mil ve kesici disk düzeni, bıçak geometrisi ve malzemesi, tahrik ve tork, besleme bunkeri ve aşırı yük koruması birlikte tasarlanır.",
        highlights: ["Çift milli kesme düzeni", "Değiştirilebilir kesici diskler", "Redüktörlü yüksek tork tahrik", "Sıkışma ve aşırı yük koruması"],
        figureAlt: "Altıgen delikli shredder kesici diskleri",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde", text: "Malzeme türü, yoğunluğu, nemi ve yabancı madde içeriği." },
          { title: "Besleme Boyutu", text: "En büyük parça ölçüsü ve besleme şekli." },
          { title: "Hedef Parça", text: "İstenen parça boyutu ve sonraki proses." },
          { title: "Rotor ve Bıçak", text: "Mil sayısı, disk kalınlığı, kanca geometrisi ve bıçak malzemesi." },
          { title: "Tahrik ve Güvenlik", text: "Tork ihtiyacı, redüktör, ters dönme ve bakımda bıçak değişimi." },
        ],
        dataNote: "Tork, güç ve kapasite hammadde testleri ve proje verisiyle belirlenir; belirli bir parça boyutu garanti edilmez.",
      },
      gallery: {
        title: "Shredder Fotoğraf Galerisi",
        captions: [
          "İki redüktörlü motorla tahrik edilen çift milli shredder",
          "Besleme ağzı ve kesici diskleri görünen shredder",
          "Karşılıklı dönen millerdeki kesici diskler",
          "Besleme konveyörlü büyük gövdeli shredder",
          "Kancalı kesici disklerin yakın görünümü",
        ],
      },
      faq: {
        title: "Shredder Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Shredder ile kırıcı arasındaki fark nedir?",
            answer: "Kırıcılar malzemeyi çarpma veya ezme ile küçültür. Shredder ise düşük devirli miller üzerindeki kesici disklerle malzemeyi keser ve yırtar; bu nedenle hacimli ve lifli malzemelere uygundur.",
          },
          {
            question: "Parça boyutu neye göre belirlenir?",
            answer: "Parça boyutu, kesici disklerin kalınlığı ve kanca geometrisiyle belirlenir. Daha küçük ve homojen boyut için ikinci kademe parçalama ve eleme gerekebilir.",
          },
          {
            question: "Sıkışma olduğunda ne olur?",
            answer: "Aşırı yük algılandığında miller geri dönerek sıkışmayı çözecek şekilde tasarlanır. Motor ve redüktör aşırı yüke karşı korunur.",
          },
          {
            question: "Bıçaklar nasıl değiştirilir?",
            answer: "Kesici diskler değiştirilebilir yapıdadır; bakım için gövde ve mil düzenine uygun erişim sağlanır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Hammadde türü, en büyük parça ölçüsü, yabancı madde içeriği, hedef parça boyutu ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Shredder sistemi için teknik teklif alın",
        text: "Hammaddeniz, besleme ölçünüz ve hedef parça boyutunuza göre shredder sistemini birlikte netleştirelim.",
        mailSubject: "Shredder Sistemi Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Hammadde türü",
          "En büyük parça ölçüsü",
          "Yabancı madde / metal içeriği",
          "Hedef parça boyutu",
          "Saatlik kapasite (ton/saat)",
          "Besleme ve tahliye düzeni",
        ],
        inquiryLines: [
          "Merhaba, shredder sistemi için teknik teklif almak istiyorum.",
          "",
          "Hammadde:",
          "En büyük parça ölçüsü:",
          "Yabancı madde içeriği:",
          "Hedef parça boyutu (mm):",
          "Kapasite (ton/saat):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Industrial Shredders | Twin-Shaft Shredder Systems",
        description:
          "Industrial shredder systems that cut bulky materials such as plastic, wood and mixed waste with low-speed cutting rotors. Project-specific design and manufacturing.",
      },
      breadcrumbLabel: "Shredder Systems",
      h1: "Shredder Systems – Twin-Shaft Industrial Shredders",
      productCategory: "Industrial Shredder",
      overview: {
        imageAlt: "Twin rotors with cutting discs inside a blue shredder housing",
        tagline: "Twin-Shaft Industrial Shredder",
        keyFacts: [
          { label: "Principle", value: "Cutting and tearing" },
          { label: "Rotor arrangement", value: "Two counter-rotating shafts" },
          { label: "Speed", value: "Low speed, high torque" },
          { label: "Material", value: "Bulky and mixed waste" },
        ],
        title: "Shredding Bulky Materials by Cutting",
        paragraphs: [
          "In a shredder system, material is caught between hooked cutting discs on two shafts rotating towards each other at low speed, and is cut and torn. Unlike impact crushers, this design works by cutting rather than crushing or impact.",
          "Disc thickness and hook geometry are the main factors determining output size. Geared motors driving the shafts provide high torque; reversing on jamming and overload protection are part of the design.",
          "Shredders are used for pre-shredding bulky materials such as plastic, wood, pallets and mixed waste. Where a smaller and more uniform size is required, secondary shredding and screening are assessed together.",
        ],
        note: "Metal parts, stones and contaminants can damage the cutters; separation and material control before feeding are important for shredder life.",
      },
      process: {
        title: "Shredder Material Flow",
        intro: "The diagram shows the typical flow in which the shredder takes bulky material from the feed hopper, shreds it with cutting rotors and discharges it. Separation and screening are done by separate equipment.",
        note: "Depending on the plant concept, shredded material goes to metal separation, screening or secondary shredding.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Material feeding", text: "Bulky material is loaded into the feed hopper by conveyor or loader." },
          { title: "Catching and cutting", text: "Hooked discs on counter-rotating shafts catch and cut the material." },
          { title: "Jam control", text: "On overload the rotors reverse to clear the jam." },
          { title: "Discharge", text: "Shredded material leaves at the bottom to a conveyor or next process." },
        ],
        flow: {
          svgTitle: "Shredder material flow diagram",
          svgDesc: "Material line: feed hopper, twin-shaft shredder, bottom discharge, separation or screening.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Hopper, conveyor" }],
          drum: { title: "SHREDDER", sub: "twin shaft · cutting disc" },
          after: [
            { title: "Discharge", sub: "Bottom outlet, conveyor" },
            { title: "Separation / screening", sub: "Next process" },
          ],
        },
      },
      applications: {
        title: "Shredder Applications",
        items: [
          {
            title: "Plastic Waste",
            text: "Shredding plastic packaging and bulky plastic waste ahead of recycling lines. Cutter thickness is selected for the target piece size.",
            imageAlt: "Mixed plastic waste accumulated next to a wall",
            linkLabel: "Recycling and Waste Management",
          },
          {
            title: "Wood and Pallet Waste",
            text: "Breaking pallets and wood waste into pieces that can be handled and processed. Nails and metal increase cutter wear, so separation is planned alongside.",
            imageAlt: "Stacked wooden pallets",
            linkLabel: "Recycling and Waste Management",
          },
          {
            title: "Mixed Waste and RDF Preparation",
            text: "Pre-shredding mixed waste in sorting and refuse-derived fuel (RDF) preparation lines. Contaminant control is part of the design.",
            imageAlt: "Mixed municipal waste accumulated in an open area",
            linkLabel: "RDF Preparation Plant",
          },
        ],
      },
      design: {
        title: "Custom Shredder Design and Manufacturing",
        intro:
          "PRO MAKINA engineers shredder systems around raw material type, feed size, target piece size and capacity. Shaft and disc arrangement, cutter geometry and material, drive and torque, feed hopper and overload protection are designed together.",
        highlights: ["Twin-shaft cutting arrangement", "Replaceable cutting discs", "High-torque geared drive", "Jam and overload protection"],
        figureAlt: "Shredder cutting discs with hexagonal bores",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material", text: "Material type, density, moisture and contaminant content." },
          { title: "Feed Size", text: "Largest piece dimension and feeding method." },
          { title: "Target Piece", text: "Required piece size and downstream process." },
          { title: "Rotor and Cutters", text: "Number of shafts, disc thickness, hook geometry and cutter material." },
          { title: "Drive and Safety", text: "Torque requirement, gearbox, reversing and cutter replacement." },
        ],
        dataNote: "Torque, power and capacity are defined from raw material tests and project data; no specific piece size is guaranteed.",
      },
      gallery: {
        title: "Shredder Photo Gallery",
        captions: [
          "Twin-shaft shredder driven by two geared motors",
          "Shredder showing inlet and cutting discs",
          "Cutting discs on counter-rotating shafts",
          "Large shredder with feed conveyor",
          "Close-up of hooked cutting discs",
        ],
      },
      faq: {
        title: "Shredder FAQ",
        items: [
          {
            question: "What is the difference between a shredder and a crusher?",
            answer: "Crushers reduce material by impact or compression. A shredder cuts and tears material with cutting discs on low-speed shafts, which suits bulky and fibrous materials.",
          },
          {
            question: "What determines piece size?",
            answer: "Piece size is determined by disc thickness and hook geometry. Secondary shredding and screening may be needed for a smaller, more uniform size.",
          },
          {
            question: "What happens on jamming?",
            answer: "When overload is detected, the shafts reverse to clear the jam. Motor and gearbox are protected against overload.",
          },
          {
            question: "How are cutters replaced?",
            answer: "Cutting discs are replaceable; access suited to the housing and shaft arrangement is provided for maintenance.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Raw material type, largest piece dimension, contaminant content, target piece size and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a shredder system",
        text: "Share your raw material, feed size and target piece size, and we will define the shredder system together with you.",
        mailSubject: "Shredder System Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Raw material type",
          "Largest piece dimension",
          "Contaminant / metal content",
          "Target piece size",
          "Hourly capacity (t/h)",
          "Feeding and discharge arrangement",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a shredder system.",
          "",
          "Raw material:",
          "Largest piece dimension:",
          "Contaminant content:",
          "Target piece size (mm):",
          "Capacity (t/h):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Промышленные шредеры | Двухвальные измельчители",
        description:
          "Промышленные шредеры для измельчения пластика, древесины и смешанных отходов тихоходными ножевыми роторами. Проектирование и изготовление под задачу.",
      },
      breadcrumbLabel: "Промышленные шредеры",
      h1: "Промышленные шредеры – двухвальные измельчители",
      productCategory: "Промышленный шредер",
      overview: {
        imageAlt: "Два ротора с режущими дисками в синем корпусе шредера",
        tagline: "Двухвальный промышленный шредер",
        keyFacts: [
          { label: "Принцип", value: "Резание и разрыв" },
          { label: "Роторы", value: "Два встречно вращающихся вала" },
          { label: "Скорость", value: "Низкие обороты, высокий момент" },
          { label: "Материал", value: "Крупногабаритные и смешанные отходы" },
        ],
        title: "Измельчение крупногабаритных материалов резанием",
        paragraphs: [
          "В шредере материал захватывается крючковыми режущими дисками на двух валах, вращающихся навстречу друг другу с низкой скоростью, режется и разрывается. В отличие от ударных дробилок, такая конструкция работает резанием, а не раздавливанием или ударом.",
          "Толщина дисков и геометрия крючков — основные факторы, определяющие размер фракции. Мотор-редукторы обеспечивают высокий крутящий момент; реверс при заклинивании и защита от перегрузки входят в конструкцию.",
          "Шредеры применяются для предварительного измельчения пластика, древесины, поддонов, смешанных отходов и подобных крупногабаритных материалов. Если нужен более мелкий и однородный размер, рассматриваются вторичное измельчение и грохочение.",
        ],
        note: "Металл, камни и посторонние включения могут повредить ножи; сортировка и контроль материала перед подачей важны для ресурса шредера.",
      },
      process: {
        title: "Движение материала в шредере",
        intro: "Схема показывает типовой поток: шредер принимает крупногабаритный материал из бункера, измельчает его ножевыми роторами и выгружает. Сортировка и грохочение выполняются отдельно.",
        note: "В зависимости от концепции предприятия измельчённый материал идёт на отделение металла, грохочение или вторичное измельчение.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача материала", text: "Крупногабаритный материал загружается в бункер конвейером или погрузчиком." },
          { title: "Захват и резание", text: "Крючковые диски на встречных валах захватывают и режут материал." },
          { title: "Контроль заклинивания", text: "При перегрузке роторы реверсируются и освобождают затор." },
          { title: "Выгрузка", text: "Измельчённый материал выходит снизу на конвейер или далее." },
        ],
        flow: {
          svgTitle: "Схема движения материала в шредере",
          svgDesc: "Линия материала: загрузочный бункер, двухвальный шредер, нижняя выгрузка, сортировка или грохочение.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Загрузка", sub: "Бункер, конвейер" }],
          drum: { title: "ШРЕДЕР", sub: "два вала · режущий диск" },
          after: [
            { title: "Выгрузка", sub: "Нижний выход" },
            { title: "Сортировка", sub: "Следующий процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения шредера",
        items: [
          {
            title: "Пластиковые отходы",
            text: "Измельчение пластиковой упаковки и крупногабаритных пластиковых отходов перед линиями переработки. Толщина ножей выбирается под размер фракции.",
            imageAlt: "Смешанные пластиковые отходы у стены",
            linkLabel: "Переработка и обращение с отходами",
          },
          {
            title: "Древесные отходы и поддоны",
            text: "Разделение поддонов и древесных отходов на куски, удобные для транспортировки и переработки. Гвозди и металл повышают износ ножей, поэтому планируется сортировка.",
            imageAlt: "Штабели деревянных поддонов",
            linkLabel: "Переработка и обращение с отходами",
          },
          {
            title: "Смешанные отходы и подготовка RDF",
            text: "Предварительное измельчение смешанных отходов в линиях сортировки и подготовки топлива из отходов (RDF). Контроль посторонних включений входит в проект.",
            imageAlt: "Смешанные бытовые отходы на открытой площадке",
            linkLabel: "Установка подготовки RDF",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление шредеров",
        intro:
          "PRO MAKINA проектирует шредеры исходя из вида сырья, размера питания, целевой фракции и производительности. Валы и диски, геометрия и материал ножей, привод и момент, загрузочный бункер и защита от перегрузки разрабатываются совместно.",
        highlights: ["Двухвальная схема резания", "Сменные режущие диски", "Мотор-редукторы с высоким моментом", "Защита от заклинивания и перегрузки"],
        figureAlt: "Режущие диски шредера с шестигранными отверстиями",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё", text: "Вид, плотность, влажность и посторонние включения." },
          { title: "Размер питания", text: "Максимальный размер куска и способ подачи." },
          { title: "Целевая фракция", text: "Требуемый размер и следующий процесс." },
          { title: "Роторы и ножи", text: "Число валов, толщина дисков, геометрия крючков и материал." },
          { title: "Привод и безопасность", text: "Момент, редуктор, реверс и замена ножей." },
        ],
        dataNote: "Момент, мощность и производительность определяются испытаниями сырья и данными проекта; определённый размер фракции не гарантируется.",
      },
      gallery: {
        title: "Фотогалерея шредеров",
        captions: [
          "Двухвальный шредер с двумя мотор-редукторами",
          "Шредер с загрузочным отверстием и режущими дисками",
          "Режущие диски на встречных валах",
          "Крупный шредер с загрузочным конвейером",
          "Крючковые режущие диски крупным планом",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о шредерах",
        items: [
          {
            question: "Чем шредер отличается от дробилки?",
            answer: "Дробилки уменьшают материал ударом или сжатием. Шредер режет и разрывает материал дисками на тихоходных валах, поэтому подходит для крупногабаритных и волокнистых материалов.",
          },
          {
            question: "От чего зависит размер фракции?",
            answer: "От толщины дисков и геометрии крючков. Для более мелкой и однородной фракции может потребоваться вторичное измельчение и грохочение.",
          },
          {
            question: "Что происходит при заклинивании?",
            answer: "При перегрузке валы реверсируются и освобождают затор; двигатель и редуктор защищены от перегрузки.",
          },
          {
            question: "Как заменяются ножи?",
            answer: "Режущие диски сменные; для обслуживания обеспечивается доступ в соответствии с конструкцией корпуса и валов.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид сырья, максимальный размер куска, посторонние включения, целевая фракция и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на шредер",
        text: "Сообщите вид сырья, размер питания и целевую фракцию — вместе определим шредер.",
        mailSubject: "Запрос предложения: промышленный шредер",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид сырья",
          "Максимальный размер куска",
          "Посторонние включения / металл",
          "Целевая фракция",
          "Часовая производительность (т/ч)",
          "Схема загрузки и выгрузки",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на промышленный шредер.",
          "",
          "Сырьё:",
          "Максимальный размер куска:",
          "Посторонние включения:",
          "Целевая фракция (мм):",
          "Производительность (т/ч):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "المفرمات الصناعية | مفرمة بعمودين",
        description:
          "أنظمة مفرمات صناعية تقطع المواد الضخمة مثل البلاستيك والخشب والنفايات المختلطة بدوّارات قطع بطيئة الدوران. تصميم وتصنيع حسب المشروع.",
      },
      breadcrumbLabel: "أنظمة المفرمات",
      h1: "أنظمة المفرمات – مفرمات صناعية بعمودين",
      productCategory: "مفرمة صناعية",
      overview: {
        imageAlt: "دوّاران بأقراص قطع داخل غلاف مفرمة أزرق",
        tagline: "مفرمة صناعية بعمودين",
        keyFacts: [
          { label: "المبدأ", value: "القطع والتمزيق" },
          { label: "ترتيب الدوّار", value: "عمودان يدوران متعاكسين" },
          { label: "السرعة", value: "سرعة منخفضة وعزم عالٍ" },
          { label: "المادة", value: "نفايات ضخمة ومختلطة" },
        ],
        title: "تمزيق المواد الضخمة بالقطع",
        paragraphs: [
          "في أنظمة المفرمات تُلتقط المادة بين أقراص قطع ذات خطاطيف على عمودين يدوران نحو بعضهما بسرعة منخفضة فتُقطع وتُمزَّق. وعلى خلاف الكسارات الصدمية يعمل هذا التصميم بالقطع لا بالسحق أو الصدم.",
          "يُعد سُمك الأقراص وشكل الخطاطيف العاملين الرئيسيين في تحديد حجم القطع الناتجة، وتوفر المحركات المخفضة عزمًا عاليًا، ويشمل التصميم عكس الدوران عند الانحشار والحماية من الحمل الزائد.",
          "تُستخدم المفرمات في التمزيق الأولي للبلاستيك والخشب والمنصات والنفايات المختلطة والمواد الضخمة المماثلة، وعند الحاجة إلى حجم أصغر وأكثر تجانسًا يُقيَّم التمزيق الثانوي والغربلة معًا.",
        ],
        note: "قد تُتلف المعادن والحجارة والشوائب أدوات القطع، لذا يُعد الفرز والتحكم في المادة قبل التلقيم مهمًا لعمر المفرمة.",
      },
      process: {
        title: "تدفق المادة في المفرمة",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه المفرمة المادة الضخمة من قادوس التلقيم وتمزقها بدوّارات القطع ثم تفرغها، بينما الفرز والغربلة معدات منفصلة.",
        note: "تتجه المادة الممزقة وفق تصور المنشأة إلى فصل المعادن أو الغربلة أو التمزيق الثانوي.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة", text: "تُحمَّل المادة الضخمة في قادوس التلقيم بناقل أو جرافة." },
          { title: "الالتقاط والقطع", text: "تلتقط الأقراص ذات الخطاطيف على العمودين المتعاكسين المادة وتقطعها." },
          { title: "التحكم في الانحشار", text: "عند الحمل الزائد تعكس الدوّارات دورانها لتحرير الانحشار." },
          { title: "التفريغ", text: "تخرج المادة الممزقة من الأسفل إلى ناقل أو إلى العملية التالية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في المفرمة",
          svgDesc: "خط المادة: قادوس التلقيم، مفرمة بعمودين، التفريغ السفلي، الفرز أو الغربلة.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "قادوس، ناقل" }],
          drum: { title: "المفرمة", sub: "عمودان · قرص قطع" },
          after: [
            { title: "التفريغ", sub: "مخرج سفلي، ناقل" },
            { title: "فرز / غربلة", sub: "العملية التالية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام المفرمة",
        items: [
          {
            title: "النفايات البلاستيكية",
            text: "تمزيق عبوات البلاستيك والنفايات البلاستيكية الضخمة قبل خطوط إعادة التدوير، مع اختيار سُمك القواطع وفق حجم القطع المستهدف.",
            imageAlt: "نفايات بلاستيكية مختلطة متراكمة بجوار جدار",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
          {
            title: "مخلفات الخشب والمنصات",
            text: "تقطيع المنصات ومخلفات الخشب إلى قطع يسهل نقلها ومعالجتها، مع التخطيط للفرز لأن المسامير والمعادن تزيد تآكل القواطع.",
            imageAlt: "منصات خشبية مكدسة",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
          {
            title: "النفايات المختلطة وتحضير RDF",
            text: "التمزيق الأولي للنفايات المختلطة في خطوط الفرز وتحضير الوقود المشتق من النفايات (RDF)، ويُعد التحكم في الشوائب جزءًا من التصميم.",
            imageAlt: "نفايات بلدية مختلطة متراكمة في منطقة مفتوحة",
            linkLabel: "منشأة تحضير RDF",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع مفرمات مخصصة",
        intro:
          "تصمم PRO MAKINA أنظمة المفرمات وفق نوع الخام وحجم التلقيم وحجم القطع المستهدف والسعة. ويُصمَّم ترتيب الأعمدة والأقراص وشكل القواطع ومادتها ونظام الإدارة والعزم وقادوس التلقيم والحماية من الحمل الزائد معًا.",
        highlights: ["ترتيب قطع بعمودين", "أقراص قطع قابلة للاستبدال", "إدارة مخفضة بعزم عالٍ", "حماية من الانحشار والحمل الزائد"],
        figureAlt: "أقراص قطع لمفرمة بثقوب سداسية",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "الخام", text: "نوع المادة وكثافتها ورطوبتها ومحتوى الشوائب." },
          { title: "حجم التلقيم", text: "أكبر أبعاد للقطع وطريقة التلقيم." },
          { title: "القطع المستهدفة", text: "حجم القطع المطلوب والعملية اللاحقة." },
          { title: "الدوّار والقواطع", text: "عدد الأعمدة وسُمك الأقراص وشكل الخطاطيف ومادة القواطع." },
          { title: "الإدارة والسلامة", text: "العزم المطلوب والمخفض وعكس الدوران واستبدال القواطع." },
        ],
        dataNote: "يُحدَّد العزم والقدرة والسعة بتجارب الخام وبيانات المشروع، ولا يُضمن حجم محدد للقطع.",
      },
      gallery: {
        title: "معرض صور المفرمات",
        captions: [
          "مفرمة بعمودين يديرها محركان مخفضان",
          "مفرمة تظهر فتحة التلقيم وأقراص القطع",
          "أقراص القطع على عمودين متعاكسين",
          "مفرمة كبيرة مع ناقل تلقيم",
          "أقراص القطع ذات الخطاطيف عن قرب",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول المفرمات",
        items: [
          {
            question: "ما الفرق بين المفرمة والكسارة؟",
            answer: "تصغّر الكسارات المادة بالصدم أو الضغط، أما المفرمة فتقطع المادة وتمزقها بأقراص على أعمدة بطيئة الدوران، ما يناسب المواد الضخمة والليفية.",
          },
          {
            question: "علامَ يعتمد حجم القطع؟",
            answer: "يعتمد على سُمك الأقراص وشكل الخطاطيف، وقد يلزم تمزيق ثانوي وغربلة للحصول على حجم أصغر وأكثر تجانسًا.",
          },
          {
            question: "ماذا يحدث عند الانحشار؟",
            answer: "عند اكتشاف الحمل الزائد تعكس الأعمدة دورانها لتحرير الانحشار، ويُحمى المحرك والمخفض من الحمل الزائد.",
          },
          {
            question: "كيف تُستبدل القواطع؟",
            answer: "أقراص القطع قابلة للاستبدال، ويُوفَّر وصول للصيانة يناسب ترتيب الغلاف والأعمدة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع الخام وأكبر أبعاد للقطع ومحتوى الشوائب وحجم القطع المستهدف والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لنظام مفرمة",
        text: "شاركنا الخام وحجم التلقيم وحجم القطع المستهدف، لنحدد معًا نظام المفرمة المناسب.",
        mailSubject: "طلب عرض سعر: مفرمة صناعية",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع الخام",
          "أكبر أبعاد للقطع",
          "محتوى الشوائب / المعادن",
          "حجم القطع المستهدف",
          "السعة بالساعة (طن/ساعة)",
          "ترتيب التلقيم والتفريغ",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمفرمة صناعية.",
          "",
          "الخام:",
          "أكبر أبعاد للقطع:",
          "محتوى الشوائب:",
          "حجم القطع المستهدف (مم):",
          "السعة (طن/ساعة):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
