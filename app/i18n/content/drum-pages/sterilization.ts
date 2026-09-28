import type { DrumPageConfig } from "./types";

// Sterilizasyon ve stabilizasyon tamburu: çamur ve organik ürünlerde kontrollü ısıl işlem / stabilizasyon.
// Sterilite veya patojen giderimi iddiası yoktur; sıcaklık-süre değerleri projede ve mevzuata göre belirlenir
// (mevcut veride doğrulanmış sıcaklık/süre bilgisi bulunmadığı için sayfada değer verilmez).
export const sterilizationDrumPage: DrumPageConfig = {
  key: "sterilizationDrum",
  trSlug: "sterilizasyon-ve-stabilizasyon-tamburu",
  mainImage: "/images/tambur biokompost/biokom1.png",
  applications: [
    { image: "/images/01-genel/atıksucamuru.jpg", link: "sludgeDrying" },
    { image: "/images/01-genel/digesta1.webp", link: "sludgeToCompostPlant" },
    { image: "/images/kompost/kompost6.jpg", link: "organicWastePlant" },
  ],
  sectors: ["sludgeDrying", "compostPlants", "recycling"],
  resources: ["sludgeDryingPlantSolution", "sludgeToCompostPlant", "compostDrum", "rotaryDryer"],
  machines: ["conveying", "storageSystems", "dustCollection", "screeningSystems"],
  texts: {
    tr: {
      meta: {
        title: "Sterilizasyon ve Stabilizasyon Tamburu | Isıl İşlem | PRO MAKİNA",
        description:
          "Arıtma çamuru, digestat ve organik atıklarda kontrollü ısıl işlem ve stabilizasyon için döner tambur. Sıcaklık, süre ve koku yönetimine göre projeye özel tasarım.",
      },
      breadcrumbLabel: "Sterilizasyon ve Stabilizasyon Tamburu",
      h1: "Sterilizasyon ve Stabilizasyon Tamburu – Organik Ürünler için Isıl İşlem",
      productCategory: "Isıl İşlem ve Stabilizasyon Tamburu",
      overview: {
        imageAlt: "Döner ısıl işlem tamburu, hava bağlantısı ve siklon ekipmanı",
        tagline: "Isıl İşlem ve Stabilizasyon Tamburu",
        keyFacts: [
          { label: "Görev", value: "Kontrollü ısıl işlem ve stabilizasyon" },
          { label: "Girdi", value: "Arıtma çamuru, digestat, organik atık" },
          { label: "Isı kaynağı", value: "Projeye göre sıcak hava veya buhar" },
          { label: "Tasarım esası", value: "Hedef sıcaklık, süre ve ürün akışı" },
        ],
        title: "Organik Ürünlerde Kontrollü Isıl İşlem",
        paragraphs: [
          "Sterilizasyon ve stabilizasyon tamburu; arıtma çamuru, digestat, organik atık ve benzeri malzemelerin döner tambur içinde karıştırılarak belirlenen sıcaklıkta ve sürede tutulduğu ısıl işlem ekipmanıdır. Amaç, ürünün sonraki adımlar için daha kararlı, kokusu kontrol altında ve taşınabilir bir yapıya getirilmesidir.",
          "Tasarımın merkezinde sıcaklık ve kalış süresi vardır: Isı kaynağı (sıcak hava veya buhar), tambur boyu ve devri, ürünün tamamının hedef koşula ulaşmasını sağlayacak şekilde birlikte belirlenir. Ürünün nemi ve yapışma davranışı, iç eleman ve temizlik erişimi seçimini etkiler.",
          "Hedef sıcaklık ve süre değerleri; ürün türüne, ilgili mevzuata ve tesisin izin koşullarına göre proje aşamasında tanımlanır. Tamburdan emilen gaz ve buhar, koku kontrolü için arıtma sistemine gönderilir.",
        ],
        note: "“Sterilizasyon” ifadesi burada ürün adı olarak kullanılır; tambur tek başına sterilite veya belirli bir patojen giderimi garantisi vermez. Ürünün hedeflenen hijyen koşulunu sağlayıp sağlamadığı mevzuata uygun laboratuvar analizleriyle doğrulanmalıdır.",
      },
      process: {
        title: "Isıl İşlem Hattı Proses Akışı",
        intro:
          "Şema, ısıl işlem tamburunun çamur veya organik atık hattındaki tipik yerini, ısı kaynağını ve gaz/koku hattını gösterir. Susuzlaştırma, kurutma ve kompostlaştırma ayrı ekipmanlarla yapılır.",
        note: "Tambur çıkışındaki ürünün sonraki adımı (kurutma, kompostlaştırma, depolama veya bertaraf) tesis kurgusuna göre belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Besleme", text: "Susuzlaştırılmış çamur veya organik ürün düzenli ve kontrollü beslenir." },
          { title: "Isıtma", text: "Ürün tambur içinde karıştırılarak hedef sıcaklığa getirilir." },
          { title: "Sıcaklıkta tutma", text: "Kalış süresi, ürünün belirlenen sürede hedef koşulda kalmasını sağlar." },
          { title: "Çıkış ve sonraki adım", text: "Ürün soğutma, ara stok veya sonraki prosese aktarılır." },
        ],
        auxLineLabel: "Isı ve gaz hattı",
        auxLine: [
          { title: "Isı kaynağı", text: "Projeye göre sıcak hava üreteci veya buhar bağlantısı tambura ısı verir." },
          { title: "Gaz ve koku arıtma", text: "Tamburdan emilen gaz ve buhar arıtma sistemine gönderilir." },
        ],
        flow: {
          svgTitle: "Isıl işlem hattı proses akış şeması",
          svgDesc:
            "Ürün hattı: susuzlaştırılmış çamur veya organik ürün beslemesi, ısıl işlem tamburu, soğutma veya ara stok, sonraki proses. Isı hattı: sıcak hava veya buhar tambura girer; emilen gaz arıtmaya gider.",
          mainLane: "ÜRÜN HATTI",
          before: [{ title: "Besleme", sub: "Susuz çamur, organik" }],
          drum: { title: "STABİLİZASYON TAMBURU", sub: "ısıl işlem · karıştırma" },
          after: [
            { title: "Soğutma, stok", sub: "Kontrollü çıkış" },
            { title: "Sonraki proses", sub: "Kurutma, kompost" },
          ],
          aux: {
            lane: "ISI VE GAZ HATTI",
            tone: "heat",
            inputs: [{ title: "Isı kaynağı", sub: "Sıcak hava / buhar" }],
            outputs: [{ title: "Gaz arıtma", sub: "Koku kontrolü" }],
            inLabel: "ısı girişi",
            outLabel: "emilen gaz",
          },
        },
      },
      applications: {
        title: "Isıl İşlem Tamburu Uygulama Alanları",
        items: [
          {
            title: "Arıtma Çamuru Stabilizasyonu",
            text: "Susuzlaştırılmış arıtma çamurunun ısıl işlemle daha kararlı ve taşınabilir hâle getirilmesi. Hedef koşullar, çamurun sonraki kullanım veya bertaraf yoluna göre belirlenir.",
            imageAlt: "Susuzlaştırma ekipmanından konteynere düşen arıtma çamuru",
            linkLabel: "Atık Su Çamuru ve Arıtma",
          },
          {
            title: "Digestat ve Biyolojik Yan Ürünler",
            text: "Biyogaz tesisi çıkışı digestat ve benzeri biyolojik yan ürünlerin sonraki proses öncesi ısıl işlemden geçirilmesi. Ürünün nemi ve akış davranışı besleme tasarımını belirler.",
            imageAlt: "Tesis içinde yığılmış digestat ve inceleme yapan mühendis",
            linkLabel: "Çamurdan Kompost Tesisi",
          },
          {
            title: "Organik Atık Ön İşlemi",
            text: "Organik atık fraksiyonlarının kompostlaştırma veya diğer işlemler öncesinde kontrollü ısıl işlemle hazırlanması. Uygulanacak koşullar ilgili mevzuat ve tesis iznine göre belirlenir.",
            imageAlt: "Karışık organik atık ve kompost yığınları",
            linkLabel: "Organik Atık İşleme Tesisi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Isıl İşlem Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA ısıl işlem ve stabilizasyon tamburlarını ürün türü, kapasite, hedef sıcaklık ve süre ile tesisin ısı kaynağına göre projelendirir. Tambur gövdesi, iç elemanlar, sızdırmazlık, ısı bağlantısı, gaz emişi ve ölçüm noktaları birlikte tasarlanır.",
        highlights: ["Isıl işleme uygun gövde yapısı", "Sıcaklık ölçüm ve izleme noktaları", "Gaz emişi ve koku kontrolü bağlantısı", "Temizlik ve bakım erişimi"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün Bilgileri", text: "Ürün türü, kuru madde oranı, yoğunluk ve yapışma davranışı." },
          { title: "Hedef Koşullar", text: "Mevzuat ve izne göre tanımlanan hedef sıcaklık ve süre." },
          { title: "Isı Kaynağı", text: "Sıcak hava üreteci, buhar veya tesisteki mevcut ısı kaynağı." },
          { title: "Gaz ve Koku", text: "Emilen gaz miktarı, koku bileşenleri ve arıtma yöntemi." },
          { title: "Tesis Entegrasyonu", text: "Susuzlaştırma, kurutma, kompostlaştırma ve depolama bağlantıları." },
        ],
        dataNote: "Hedef sıcaklık ve süre değerleri bu sayfada verilmez; her proje için ilgili mevzuat, ürün özellikleri ve izin koşullarına göre birlikte belirlenir.",
      },
      faq: {
        title: "Sterilizasyon ve Stabilizasyon Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Tambur ürünü steril hâle getirir mi?",
            answer:
              "Tambur kontrollü ısıl işlem uygular; ancak tek başına sterilite veya belirli bir patojen giderimi garantisi vermez. Hedeflenen hijyen koşulunun sağlanıp sağlanmadığı mevzuata uygun analizlerle doğrulanmalıdır.",
          },
          {
            question: "Hangi sıcaklık ve sürede çalışır?",
            answer:
              "Hedef sıcaklık ve süre; ürün türüne, ilgili mevzuata ve tesisin izin koşullarına göre proje aşamasında tanımlanır. Tambur boyu, devri ve ısı kaynağı bu hedeflere göre boyutlandırılır.",
          },
          {
            question: "Hangi ısı kaynakları kullanılabilir?",
            answer:
              "Projeye göre sıcak hava üreteci veya buhar bağlantısı kullanılabilir. Tesiste atık ısı veya mevcut bir buhar kaynağı varsa entegrasyon olanağı değerlendirilir.",
          },
          {
            question: "Koku nasıl yönetilir?",
            answer:
              "Tambur negatif basınç altında çalıştırılarak emilen gaz ve buhar arıtma sistemine gönderilir. Arıtma yöntemi gaz miktarı, koku bileşenleri ve tesis iznine göre seçilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün türü ve kuru madde oranı, günlük veya saatlik kapasite, hedef sıcaklık ve süre (veya uyulması gereken mevzuat), mevcut ısı kaynağı ve sonraki proses adımı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Isıl işlem tamburu için teknik teklif alın",
        text: "Ürününüz, kapasiteniz ve uymanız gereken hedef koşullara göre tamburu, ısı kaynağını ve gaz hattını birlikte netleştirelim.",
        mailSubject: "Sterilizasyon ve Stabilizasyon Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü ve kuru madde oranı",
          "Günlük veya saatlik kapasite",
          "Hedef sıcaklık ve süre / ilgili mevzuat",
          "Mevcut ısı kaynağı (sıcak hava, buhar, atık ısı)",
          "Koku ve gaz arıtma gereksinimi",
          "Sonraki proses adımı ve saha bilgisi",
        ],
        requiredNote: "Mevcut ürün analiz sonuçları paylaşılırsa proses koşulları daha doğru değerlendirilir.",
        inquiryLines: [
          "Merhaba, sterilizasyon ve stabilizasyon tamburu için teknik teklif almak istiyorum.",
          "",
          "Ürün türü:",
          "Kuru madde oranı (%):",
          "Kapasite:",
          "Hedef sıcaklık / süre veya mevzuat:",
          "Isı kaynağı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Sterilization & Stabilization Drum | Heat Treatment",
        description:
          "Rotary drums for controlled thermal treatment and stabilization of sewage sludge, digestate and organic waste. Designed around temperature, time and odour control.",
      },
      breadcrumbLabel: "Sterilization and Stabilization Drum",
      h1: "Sterilization and Stabilization Drum – Thermal Treatment for Organic Materials",
      productCategory: "Thermal Treatment and Stabilization Drum",
      overview: {
        imageAlt: "Rotary thermal treatment drum with air connection and cyclone equipment",
        tagline: "Thermal Treatment and Stabilization Drum",
        keyFacts: [
          { label: "Task", value: "Controlled thermal treatment and stabilization" },
          { label: "Input", value: "Sewage sludge, digestate, organic waste" },
          { label: "Heat source", value: "Hot air or steam, per project" },
          { label: "Design basis", value: "Target temperature, time and product flow" },
        ],
        title: "Controlled Thermal Treatment of Organic Materials",
        paragraphs: [
          "A sterilization and stabilization drum is thermal treatment equipment in which sewage sludge, digestate, organic waste and similar materials are mixed in a rotating drum and held at a defined temperature for a defined time. The aim is to bring the product into a more stable, odour-controlled and handleable condition for the following steps.",
          "Temperature and residence time are at the centre of the design: the heat source (hot air or steam), drum length and speed are determined together so that all of the product reaches the target condition. Moisture and stickiness of the product influence the choice of internals and cleaning access.",
          "Target temperature and time values are defined at the project stage according to the product type, applicable regulations and plant permit conditions. Gas and vapour extracted from the drum are sent to a treatment system for odour control.",
        ],
        note: "“Sterilization” is used here as the product name; the drum alone does not guarantee sterility or removal of any specific pathogen. Whether the product meets the targeted hygiene condition must be verified by laboratory analyses in line with regulations.",
      },
      process: {
        title: "Thermal Treatment Line Process Flow",
        intro:
          "The diagram shows the typical position of the thermal treatment drum in a sludge or organic waste line, together with the heat source and gas/odour line. Dewatering, drying and composting are carried out by separate equipment.",
        note: "The next step for the drum output (drying, composting, storage or disposal) is defined by the plant concept.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Feeding", text: "Dewatered sludge or organic product is fed steadily and in a controlled way." },
          { title: "Heating", text: "The product is mixed in the drum and brought to the target temperature." },
          { title: "Holding at temperature", text: "Residence time keeps the product at the target condition for the defined time." },
          { title: "Discharge and next step", text: "Product goes to cooling, intermediate storage or the next process." },
        ],
        auxLineLabel: "Heat and gas line",
        auxLine: [
          { title: "Heat source", text: "A hot air generator or steam connection, per project, supplies heat to the drum." },
          { title: "Gas and odour treatment", text: "Gas and vapour extracted from the drum are sent to treatment." },
        ],
        flow: {
          svgTitle: "Thermal treatment line process flow diagram",
          svgDesc:
            "Product line: feeding of dewatered sludge or organic product, thermal treatment drum, cooling or storage, next process. Heat line: hot air or steam enters the drum; extracted gas goes to treatment.",
          mainLane: "PRODUCT LINE",
          before: [{ title: "Feeding", sub: "Dewatered sludge, organics" }],
          drum: { title: "STABILIZATION DRUM", sub: "heat treatment · mixing" },
          after: [
            { title: "Cooling, storage", sub: "Controlled discharge" },
            { title: "Next process", sub: "Drying, composting" },
          ],
          aux: {
            lane: "HEAT AND GAS LINE",
            tone: "heat",
            inputs: [{ title: "Heat source", sub: "Hot air / steam" }],
            outputs: [{ title: "Gas treatment", sub: "Odour control" }],
            inLabel: "heat input",
            outLabel: "extracted gas",
          },
        },
      },
      applications: {
        title: "Thermal Treatment Drum Applications",
        items: [
          {
            title: "Sewage Sludge Stabilization",
            text: "Bringing dewatered sewage sludge into a more stable and handleable condition by thermal treatment. Target conditions depend on the subsequent use or disposal route of the sludge.",
            imageAlt: "Sewage sludge falling from dewatering equipment into a container",
            linkLabel: "Sewage Sludge and Treatment",
          },
          {
            title: "Digestate and Biological By-Products",
            text: "Thermal treatment of digestate from biogas plants and similar biological by-products before the next process. Product moisture and flow behaviour determine the feeding design.",
            imageAlt: "Digestate heap inside a plant with an engineer inspecting it",
            linkLabel: "Sludge-to-Compost Plant",
          },
          {
            title: "Organic Waste Pre-Treatment",
            text: "Preparing organic waste fractions by controlled thermal treatment before composting or other processes. Conditions to be applied follow the relevant regulations and plant permit.",
            imageAlt: "Mixed organic waste and compost heaps",
            linkLabel: "Organic Waste Processing Plant",
          },
        ],
      },
      design: {
        title: "Custom Thermal Treatment Drum Design and Manufacturing",
        intro:
          "PRO MAKINA engineers thermal treatment and stabilization drums around product type, capacity, target temperature and time and the heat source available at the plant. The drum shell, internals, sealing, heat connection, gas extraction and measurement points are designed together.",
        highlights: ["Shell suited to thermal treatment", "Temperature measurement and monitoring", "Gas extraction and odour control connection", "Cleaning and maintenance access"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product Data", text: "Product type, dry solids content, density and stickiness." },
          { title: "Target Conditions", text: "Target temperature and time defined by regulations and permit." },
          { title: "Heat Source", text: "Hot air generator, steam or an existing heat source at the plant." },
          { title: "Gas and Odour", text: "Extracted gas volume, odorous compounds and treatment method." },
          { title: "Plant Integration", text: "Connections to dewatering, drying, composting and storage." },
        ],
        dataNote: "Target temperature and time values are not stated on this page; for each project they are defined together according to regulations, product properties and permit conditions.",
      },
      faq: {
        title: "Sterilization and Stabilization Drum FAQ",
        items: [
          {
            question: "Does the drum make the product sterile?",
            answer:
              "The drum applies controlled thermal treatment, but on its own it does not guarantee sterility or removal of a specific pathogen. Whether the targeted hygiene condition is met must be verified by analyses in line with regulations.",
          },
          {
            question: "At what temperature and time does it operate?",
            answer:
              "Target temperature and time are defined at the project stage according to product type, applicable regulations and plant permit. Drum length, speed and heat source are sized for these targets.",
          },
          {
            question: "Which heat sources can be used?",
            answer:
              "Depending on the project, a hot air generator or a steam connection can be used. If waste heat or an existing steam source is available at the plant, integration is assessed.",
          },
          {
            question: "How is odour managed?",
            answer:
              "The drum operates under negative pressure and extracted gas and vapour are sent to a treatment system. The method is selected by gas volume, odorous compounds and plant permit.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Product type and dry solids content, daily or hourly capacity, target temperature and time (or the regulation to comply with), available heat source and the next process step.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a thermal treatment drum",
        text: "Share your product, capacity and the target conditions you must meet, and we will define the drum, heat source and gas line together with you.",
        mailSubject: "Sterilization and Stabilization Drum Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type and dry solids content",
          "Daily or hourly capacity",
          "Target temperature and time / applicable regulation",
          "Available heat source (hot air, steam, waste heat)",
          "Odour and gas treatment requirement",
          "Next process step and site information",
        ],
        requiredNote: "Sharing existing product analysis results allows the process conditions to be assessed more accurately.",
        inquiryLines: [
          "Hello, I would like a technical quotation for a sterilization and stabilization drum.",
          "",
          "Product type:",
          "Dry solids content (%):",
          "Capacity:",
          "Target temperature / time or regulation:",
          "Heat source:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Барабан стерилизации и стабилизации | Термообработка",
        description:
          "Вращающиеся барабаны для контролируемой термообработки и стабилизации осадка сточных вод, дигестата и органических отходов. Проект по температуре, времени и контролю запахов.",
      },
      breadcrumbLabel: "Барабан стерилизации и стабилизации",
      h1: "Барабан стерилизации и стабилизации – термообработка органических материалов",
      productCategory: "Барабан термообработки и стабилизации",
      overview: {
        imageAlt: "Вращающийся барабан термообработки с воздушными подключениями и циклоном",
        tagline: "Барабан термообработки и стабилизации",
        keyFacts: [
          { label: "Задача", value: "Контролируемая термообработка и стабилизация" },
          { label: "Сырьё", value: "Осадок сточных вод, дигестат, органика" },
          { label: "Источник тепла", value: "Горячий воздух или пар по проекту" },
          { label: "Основа расчёта", value: "Целевые температура, время и поток" },
        ],
        title: "Контролируемая термообработка органических материалов",
        paragraphs: [
          "Барабан стерилизации и стабилизации — оборудование термообработки, в котором осадок сточных вод, дигестат, органические отходы и подобные материалы перемешиваются во вращающемся барабане и выдерживаются при заданной температуре в течение заданного времени. Цель — привести продукт в более стабильное, контролируемое по запаху и удобное для обращения состояние для последующих этапов.",
          "В центре проекта — температура и время пребывания: источник тепла (горячий воздух или пар), длина и скорость барабана определяются совместно, чтобы весь продукт достигал целевого состояния. Влажность и липкость продукта влияют на выбор внутренних элементов и доступ для очистки.",
          "Целевые значения температуры и времени определяются на стадии проекта в зависимости от вида продукта, применимых норм и условий разрешения. Отсасываемые из барабана газы и пары направляются на очистку для контроля запахов.",
        ],
        note: "«Стерилизация» здесь — название оборудования; сам по себе барабан не гарантирует стерильность или удаление конкретных патогенов. Соответствие продукта целевым гигиеническим требованиям подтверждается лабораторными анализами согласно нормам.",
      },
      process: {
        title: "Технологическая схема линии термообработки",
        intro:
          "Схема показывает типовое место барабана термообработки на линии осадка или органических отходов, источник тепла и линию газа и запахов. Обезвоживание, сушка и компостирование выполняются отдельным оборудованием.",
        note: "Следующий этап для продукта после барабана (сушка, компостирование, хранение или утилизация) определяется концепцией объекта.",
        mainLineLabel: "Продуктовая линия",
        productLine: [
          { title: "Подача", text: "Обезвоженный осадок или органический продукт подаётся равномерно и контролируемо." },
          { title: "Нагрев", text: "Продукт перемешивается в барабане и нагревается до целевой температуры." },
          { title: "Выдержка", text: "Время пребывания удерживает продукт в целевом состоянии заданное время." },
          { title: "Выгрузка и следующий этап", text: "Продукт идёт на охлаждение, промежуточное хранение или в следующий процесс." },
        ],
        auxLineLabel: "Линия тепла и газа",
        auxLine: [
          { title: "Источник тепла", text: "Генератор горячего воздуха или подключение пара по проекту подаёт тепло в барабан." },
          { title: "Очистка газа и запахов", text: "Отсасываемые газ и пары направляются на очистку." },
        ],
        flow: {
          svgTitle: "Технологическая схема линии термообработки",
          svgDesc:
            "Продуктовая линия: подача обезвоженного осадка или органики, барабан термообработки, охлаждение или хранение, следующий процесс. Линия тепла: горячий воздух или пар поступает в барабан; отсасываемый газ идёт на очистку.",
          mainLane: "ПРОДУКТОВАЯ ЛИНИЯ",
          before: [{ title: "Подача", sub: "Обезвоженный осадок" }],
          drum: { title: "СТАБИЛИЗАТОР", sub: "термообработка · смешивание" },
          after: [
            { title: "Охлаждение", sub: "Контролируемая выгрузка" },
            { title: "Следующий процесс", sub: "Сушка, компост" },
          ],
          aux: {
            lane: "ЛИНИЯ ТЕПЛА И ГАЗА",
            tone: "heat",
            inputs: [{ title: "Источник тепла", sub: "Горячий воздух / пар" }],
            outputs: [{ title: "Очистка газа", sub: "Контроль запахов" }],
            inLabel: "подвод тепла",
            outLabel: "отсасываемый газ",
          },
        },
      },
      applications: {
        title: "Области применения барабана термообработки",
        items: [
          {
            title: "Стабилизация осадка сточных вод",
            text: "Перевод обезвоженного осадка в более стабильное и удобное для обращения состояние термообработкой. Целевые условия зависят от дальнейшего использования или пути утилизации осадка.",
            imageAlt: "Осадок сточных вод падает из обезвоживающего оборудования в контейнер",
            linkLabel: "Осадок сточных вод и очистка",
          },
          {
            title: "Дигестат и биологические побочные продукты",
            text: "Термообработка дигестата биогазовых установок и подобных продуктов перед следующим процессом. Влажность и сыпучесть продукта определяют конструкцию подачи.",
            imageAlt: "Куча дигестата в цехе и инженер, проводящий осмотр",
            linkLabel: "Компостирование осадка",
          },
          {
            title: "Предварительная обработка органики",
            text: "Подготовка фракций органических отходов контролируемой термообработкой перед компостированием или другими процессами. Условия определяются применимыми нормами и разрешением объекта.",
            imageAlt: "Смешанные органические отходы и компостные кучи",
            linkLabel: "Комплекс переработки органики",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление барабанов термообработки",
        intro:
          "PRO MAKINA проектирует барабаны термообработки и стабилизации исходя из вида продукта, производительности, целевых температуры и времени и источника тепла на объекте. Корпус, внутренние элементы, уплотнения, подвод тепла, отсос газа и точки измерения разрабатываются совместно.",
        highlights: ["Корпус для термообработки", "Точки измерения и контроля температуры", "Подключение отсоса газа и очистки запахов", "Доступ для очистки и обслуживания"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Данные продукта", text: "Вид продукта, содержание сухого вещества, плотность и липкость." },
          { title: "Целевые условия", text: "Температура и время по нормам и разрешению." },
          { title: "Источник тепла", text: "Генератор горячего воздуха, пар или имеющийся источник." },
          { title: "Газ и запахи", text: "Объём отсасываемого газа, пахучие вещества и метод очистки." },
          { title: "Интеграция в объект", text: "Связь с обезвоживанием, сушкой, компостированием и хранением." },
        ],
        dataNote: "Целевые значения температуры и времени на этой странице не приводятся; для каждого проекта они определяются совместно по нормам, свойствам продукта и условиям разрешения.",
      },
      faq: {
        title: "Часто задаваемые вопросы о барабане стерилизации и стабилизации",
        items: [
          {
            question: "Делает ли барабан продукт стерильным?",
            answer:
              "Барабан выполняет контролируемую термообработку, но сам по себе не гарантирует стерильность или удаление конкретных патогенов. Достижение целевого гигиенического состояния подтверждается анализами согласно нормам.",
          },
          {
            question: "При какой температуре и времени он работает?",
            answer:
              "Целевые температура и время определяются на стадии проекта по виду продукта, применимым нормам и разрешению объекта. Длина, скорость барабана и источник тепла рассчитываются под эти цели.",
          },
          {
            question: "Какие источники тепла можно использовать?",
            answer:
              "В зависимости от проекта — генератор горячего воздуха или подключение пара. Если на объекте есть сбросное тепло или пар, оценивается возможность интеграции.",
          },
          {
            question: "Как контролируются запахи?",
            answer:
              "Барабан работает под разрежением, отсасываемые газ и пары направляются на очистку. Метод выбирается по объёму газа, пахучим веществам и разрешению объекта.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид продукта и содержание сухого вещества, суточная или часовая производительность, целевые температура и время (или применимые нормы), источник тепла и следующий этап процесса.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на барабан термообработки",
        text: "Сообщите продукт, производительность и целевые условия — вместе определим барабан, источник тепла и газовую линию.",
        mailSubject: "Запрос предложения: барабан стерилизации и стабилизации",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта и содержание сухого вещества",
          "Суточная или часовая производительность",
          "Целевые температура и время / нормы",
          "Источник тепла (воздух, пар, сбросное тепло)",
          "Требования к очистке газа и запахов",
          "Следующий этап процесса и данные площадки",
        ],
        requiredNote: "Результаты имеющихся анализов продукта позволяют точнее оценить условия процесса.",
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на барабан стерилизации и стабилизации.",
          "",
          "Вид продукта:",
          "Сухое вещество (%):",
          "Производительность:",
          "Целевые температура / время или нормы:",
          "Источник тепла:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة التعقيم والتثبيت | المعالجة الحرارية",
        description:
          "أسطوانات دوّارة للمعالجة الحرارية المضبوطة وتثبيت حمأة الصرف والمخلفات الهضمية والنفايات العضوية. تصميم وفق الحرارة والزمن والتحكم في الروائح.",
      },
      breadcrumbLabel: "أسطوانة التعقيم والتثبيت",
      h1: "أسطوانة التعقيم والتثبيت – معالجة حرارية للمواد العضوية",
      productCategory: "أسطوانة معالجة حرارية وتثبيت",
      overview: {
        imageAlt: "أسطوانة معالجة حرارية دوّارة مع توصيلات الهواء والسيكلون",
        tagline: "أسطوانة معالجة حرارية وتثبيت",
        keyFacts: [
          { label: "المهمة", value: "معالجة حرارية مضبوطة وتثبيت" },
          { label: "المدخلات", value: "حمأة صرف ومخلفات هضم ونفايات عضوية" },
          { label: "مصدر الحرارة", value: "هواء ساخن أو بخار حسب المشروع" },
          { label: "أساس التصميم", value: "الحرارة والزمن المستهدفان وتدفق المنتج" },
        ],
        title: "معالجة حرارية مضبوطة للمواد العضوية",
        paragraphs: [
          "أسطوانة التعقيم والتثبيت معدة معالجة حرارية تُخلط فيها حمأة الصرف والمخلفات الهضمية والنفايات العضوية وما يماثلها داخل أسطوانة دوّارة وتُحفظ عند حرارة محددة لزمن محدد. والهدف هو جعل المنتج أكثر ثباتًا وأسهل تداولًا مع التحكم في رائحته للمراحل التالية.",
          "تقع الحرارة وزمن المكوث في صميم التصميم: يُحدَّد مصدر الحرارة (هواء ساخن أو بخار) وطول الأسطوانة وسرعتها معًا بحيث يبلغ المنتج كله الحالة المستهدفة. وتؤثر رطوبة المنتج والتصاقه في اختيار العناصر الداخلية وإمكانية التنظيف.",
          "تُحدَّد قيم الحرارة والزمن المستهدفة في مرحلة المشروع وفق نوع المنتج واللوائح المعمول بها وشروط ترخيص المنشأة. ويُرسل الغاز والبخار المسحوبان من الأسطوانة إلى نظام معالجة للتحكم في الروائح.",
        ],
        note: "تُستخدم كلمة «التعقيم» هنا اسمًا للمعدة؛ ولا تضمن الأسطوانة وحدها التعقيم أو إزالة مسببات مرضية بعينها. ويجب التحقق من بلوغ المنتج حالة النظافة الصحية المستهدفة بتحاليل مخبرية وفق اللوائح.",
      },
      process: {
        title: "مخطط تدفق خط المعالجة الحرارية",
        intro:
          "يوضح المخطط الموقع النموذجي لأسطوانة المعالجة الحرارية في خط الحمأة أو النفايات العضوية مع مصدر الحرارة وخط الغاز والروائح. ويتم نزع الماء والتجفيف والتسميد بمعدات منفصلة.",
        note: "تُحدَّد المرحلة التالية لمخرجات الأسطوانة (تجفيف أو تسميد أو تخزين أو تخلّص) وفق تصور المنشأة.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "التلقيم", text: "تُلقَّم الحمأة المنزوعة الماء أو المادة العضوية بانتظام وبشكل مضبوط." },
          { title: "التسخين", text: "يُخلط المنتج داخل الأسطوانة ويُرفع إلى الحرارة المستهدفة." },
          { title: "الحفظ عند الحرارة", text: "يُبقي زمن المكوث المنتج في الحالة المستهدفة للمدة المحددة." },
          { title: "التفريغ والمرحلة التالية", text: "يُنقل المنتج إلى التبريد أو التخزين المؤقت أو العملية التالية." },
        ],
        auxLineLabel: "خط الحرارة والغاز",
        auxLine: [
          { title: "مصدر الحرارة", text: "يزوّد مولّد هواء ساخن أو توصيلة بخار الأسطوانة بالحرارة حسب المشروع." },
          { title: "معالجة الغاز والروائح", text: "يُرسل الغاز والبخار المسحوبان من الأسطوانة إلى المعالجة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق خط المعالجة الحرارية",
          svgDesc:
            "خط المنتج: تلقيم الحمأة المنزوعة الماء أو المادة العضوية، أسطوانة المعالجة الحرارية، التبريد أو التخزين، العملية التالية. خط الحرارة: يدخل الهواء الساخن أو البخار إلى الأسطوانة ويذهب الغاز المسحوب إلى المعالجة.",
          mainLane: "خط المنتج",
          before: [{ title: "التلقيم", sub: "حمأة منزوعة الماء" }],
          drum: { title: "أسطوانة التثبيت", sub: "معالجة حرارية · خلط" },
          after: [
            { title: "التبريد والتخزين", sub: "تفريغ مضبوط" },
            { title: "العملية التالية", sub: "تجفيف، تسميد" },
          ],
          aux: {
            lane: "خط الحرارة والغاز",
            tone: "heat",
            inputs: [{ title: "مصدر الحرارة", sub: "هواء ساخن / بخار" }],
            outputs: [{ title: "معالجة الغاز", sub: "التحكم في الروائح" }],
            inLabel: "دخول الحرارة",
            outLabel: "الغاز المسحوب",
          },
        },
      },
      applications: {
        title: "مجالات استخدام أسطوانة المعالجة الحرارية",
        items: [
          {
            title: "تثبيت حمأة الصرف الصحي",
            text: "جعل حمأة الصرف المنزوعة الماء أكثر ثباتًا وأسهل تداولًا بالمعالجة الحرارية. وتعتمد الشروط المستهدفة على طريقة استخدام الحمأة أو التخلص منها لاحقًا.",
            imageAlt: "حمأة صرف صحي تسقط من معدات نزع الماء إلى حاوية",
            linkLabel: "حمأة الصرف والمعالجة",
          },
          {
            title: "المخلفات الهضمية والنواتج البيولوجية",
            text: "المعالجة الحرارية للمخلفات الهضمية لمحطات الغاز الحيوي والنواتج البيولوجية المماثلة قبل العملية التالية. وتحدد رطوبة المنتج وسلوك انسيابه تصميم التلقيم.",
            imageAlt: "كومة مخلفات هضمية داخل منشأة ومهندس يفحصها",
            linkLabel: "منشأة تسميد الحمأة",
          },
          {
            title: "المعالجة الأولية للنفايات العضوية",
            text: "تهيئة أجزاء النفايات العضوية بمعالجة حرارية مضبوطة قبل التسميد أو غيره من العمليات. وتُحدَّد الشروط المطبقة وفق اللوائح وترخيص المنشأة.",
            imageAlt: "نفايات عضوية مختلطة وأكوام كمبوست",
            linkLabel: "منشأة معالجة النفايات العضوية",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أسطوانات معالجة حرارية مخصصة",
        intro:
          "تصمم PRO MAKINA أسطوانات المعالجة الحرارية والتثبيت وفق نوع المنتج والسعة والحرارة والزمن المستهدفين ومصدر الحرارة المتاح في المنشأة. ويُصمَّم جسم الأسطوانة والعناصر الداخلية والإحكام وتوصيلة الحرارة وسحب الغاز ونقاط القياس معًا.",
        highlights: ["جسم مناسب للمعالجة الحرارية", "نقاط قياس الحرارة ومراقبتها", "توصيل سحب الغاز ومعالجة الروائح", "سهولة التنظيف والصيانة"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "بيانات المنتج", text: "نوع المنتج ونسبة المادة الجافة والكثافة والالتصاق." },
          { title: "الشروط المستهدفة", text: "الحرارة والزمن المحددان وفق اللوائح والترخيص." },
          { title: "مصدر الحرارة", text: "مولّد هواء ساخن أو بخار أو مصدر حرارة قائم في المنشأة." },
          { title: "الغاز والروائح", text: "كمية الغاز المسحوب والمركبات ذات الرائحة وطريقة المعالجة." },
          { title: "التكامل مع المنشأة", text: "الربط مع نزع الماء والتجفيف والتسميد والتخزين." },
        ],
        dataNote: "لا تُذكر قيم الحرارة والزمن المستهدفة في هذه الصفحة؛ إذ تُحدَّد لكل مشروع وفق اللوائح وخصائص المنتج وشروط الترخيص.",
      },
      faq: {
        title: "أسئلة شائعة حول أسطوانة التعقيم والتثبيت",
        items: [
          {
            question: "هل تجعل الأسطوانة المنتج معقّمًا؟",
            answer:
              "تطبق الأسطوانة معالجة حرارية مضبوطة، لكنها وحدها لا تضمن التعقيم أو إزالة مسببات مرضية بعينها. ويجب التحقق من بلوغ حالة النظافة الصحية المستهدفة بتحاليل وفق اللوائح.",
          },
          {
            question: "عند أي حرارة وزمن تعمل؟",
            answer:
              "تُحدَّد الحرارة والزمن المستهدفان في مرحلة المشروع وفق نوع المنتج واللوائح وترخيص المنشأة، ويُحسب طول الأسطوانة وسرعتها ومصدر الحرارة لتحقيق هذه الأهداف.",
          },
          {
            question: "ما مصادر الحرارة الممكنة؟",
            answer:
              "بحسب المشروع يمكن استخدام مولّد هواء ساخن أو توصيلة بخار. وإذا توفرت حرارة مهدرة أو مصدر بخار في المنشأة تُقيَّم إمكانية الربط بها.",
          },
          {
            question: "كيف يُتحكم في الروائح؟",
            answer:
              "تعمل الأسطوانة تحت ضغط سالب ويُرسل الغاز والبخار المسحوبان إلى نظام معالجة يُختار وفق كمية الغاز والمركبات ذات الرائحة وترخيص المنشأة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المنتج ونسبة المادة الجافة والسعة اليومية أو بالساعة والحرارة والزمن المستهدفان (أو اللائحة الواجب الالتزام بها) ومصدر الحرارة المتاح والمرحلة التالية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لأسطوانة معالجة حرارية",
        text: "شاركنا المنتج والسعة والشروط المستهدفة الواجب تحقيقها، لنحدد معًا الأسطوانة ومصدر الحرارة وخط الغاز.",
        mailSubject: "طلب عرض سعر: أسطوانة التعقيم والتثبيت",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج ونسبة المادة الجافة",
          "السعة اليومية أو بالساعة",
          "الحرارة والزمن المستهدفان / اللوائح",
          "مصدر الحرارة المتاح (هواء، بخار، حرارة مهدرة)",
          "متطلبات معالجة الغاز والروائح",
          "المرحلة التالية ومعلومات الموقع",
        ],
        requiredNote: "مشاركة نتائج تحاليل المنتج الحالية تتيح تقييم شروط العملية بدقة أكبر.",
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لأسطوانة التعقيم والتثبيت.",
          "",
          "نوع المنتج:",
          "نسبة المادة الجافة (%):",
          "السعة:",
          "الحرارة / الزمن المستهدف أو اللائحة:",
          "مصدر الحرارة:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
