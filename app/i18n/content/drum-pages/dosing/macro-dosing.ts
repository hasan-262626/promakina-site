import type { DrumPageConfig } from "../types";

// Makro dozajlama: mevcut tanım "mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin formülasyona doğru oranlarda eklenmesi; toz geçirmez
// esnek bağlantılı tartım, loadcell, titreşimli boşaltma mekanizması, PLC ve operatör paneli üzerinden reçete". Projedeki tek görsel (makro1)
// ortak tartım haznesi üzerinde birden fazla bunkeri gösteren bir çizimdir. İçerik "bunkerden titreşimli boşaltma ile load-cell'li ortak
// tartım haznesine sıralı batch tartım" prensibine göre hazırlanmıştır. Mevcut tanımdaki "±%0,1" değeri doğrulanamadığı için kullanılmaz.
// NPK, MAP/DAP, KCl veya üre gibi ana gübre hammaddeleri mevcut ürün kapsamında geçmediği için uygulama olarak eklenmez.
// Kapasite, bunker hacmi veya kg/batch verilmez. Görselin lisans kaydı yok.

export const macroDosingPage: DrumPageConfig = {
  key: "macroDosing",
  group: "dosingSystems",
  trSlug: "makro-dozajlama",
  mainImage: "/images/dozaj makro/makro1.png",
  applications: [
    { image: "/images/kurutma-uygulamalari/kirec-tasi.webp", link: "fertilizerPlants" },
    { image: "/images/kirici-uygulamalari/kaya-tuzu.webp", link: "microDosing" },
    { image: "/images/kurutma-uygulamalari/silis-kumu.webp", link: "mining" },
  ],
  sectors: ["fertilizerPlants", "mining"],
  resources: ["microDosing", "siloSystems", "bunkersHoppers", "dosingSystems"],
  machines: ["storageSystems", "conveying", "drumSystems"],
  texts: {
    tr: {
      meta: {
        title: "Makro Dozajlama Sistemi | Hammadde Dozajlama ve Batch Tartım | PRO MAKİNA",
        description:
          "Mineral, tuz, DCP ve dolgu gibi yüksek miktarlı reçete hammaddelerini bunkerlerden load-cell'li kantara besleyip reçeteye göre tartan makro dozajlama.",
      },
      breadcrumbLabel: "Makro Dozajlama",
      h1: "Makro Dozajlama – Yüksek Miktarlı Reçete Hammaddelerinin Tartımlı Beslenmesi",
      productCategory: "Makro Dozajlama Sistemi",
      overview: {
        imageAlt: "Ortak tartım haznesi üzerinde paslanmaz bunkerlerden oluşan makro dozajlama sistemi çizimi",
        tagline: "Makro Dozajlama",
        keyFacts: [
          { label: "Görev", value: "Yüksek miktarlı hammaddelerin tartımlı dozajı" },
          { label: "Besleme", value: "Bunker altı titreşimli boşaltma" },
          { label: "Tartım", value: "Load-cell'li ortak tartım haznesi" },
          { label: "Kontrol", value: "Operatör paneli ve PLC ile reçete" },
        ],
        title: "Reçetenin Yüksek Miktarlı Bileşenleri İçin Batch Tartım",
        paragraphs: [
          "Makro dozajlama, mineral, tuz, DCP, mermer tozu ve dolgu gibi reçetede mikro katkılardan çok daha yüksek miktarda kullanılan hammaddelerin ağırlık esaslı olarak tartılıp prosese verilmesini sağlar. Bu miktarlar için daha büyük bunkerler ve ölçüm aralığı daha geniş bir kantar kullanılır.",
          "Hammaddeler, ortak tartım haznesinin üzerine yerleşen bunkerlerde bekler. Reçetedeki sıraya göre ilgili bunkerin titreşimli boşaltması çalışır ve ürün load-cell'li tartım haznesine akar. Hedef miktara yaklaşıldığında besleme durdurulur; havada kalan ürün miktarı kontrol sisteminde dikkate alınır.",
          "Tartım haznesi ile bunkerler ve alt ekipman arasındaki esnek bağlantılar hem toz kaçağını önler hem de tartımı mekanik yüklerden ayırır. Batch tamamlandığında hazne miksere veya toplama hattına boşaltılır.",
        ],
        note: "Makro dozajlama düşük miktarlı katkıları tartmak için tasarlanmaz; bu bileşenler mikro dozajlamayla ayrı tartılır. Sürekli akan ana hammadde hatlarında ise dozaj bant kantarı kullanılır.",
      },
      process: {
        title: "Makro Dozajlama Proses Akışı",
        intro:
          "Şema, hammaddelerin bunkerlerden titreşimli boşaltmayla tartım haznesine beslendiği, reçeteye göre sırayla tartıldığı ve batch tamamlanınca miksere veya toplama hattına aktarıldığı akışı gösterir. Silo, mikser ve toplama konveyörü ayrı ekipmanlardır.",
        note: "Bunker hacmi, batch başına miktar ve saatlik batch sayısı; bunkerlerin hangi sıklıkla ve hangi ekipmanla doldurulacağıyla birlikte belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Hammadde bunkerleri", text: "Her hammadde tartım haznesi üzerindeki kendi bunkerinde bekler." },
          { title: "Titreşimli boşaltma", text: "Reçete sırasındaki bunkerin boşaltması çalışır; ürün tartım haznesine akar." },
          { title: "Tartım ve kesme", text: "Load-cell'ler ağırlığı izler; hedefe yaklaşıldığında besleme durdurulur." },
          { title: "Batch aktarımı", text: "Tüm hammaddeler tartılınca hazne miksere veya toplama hattına boşaltılır." },
        ],
        auxLineLabel: "Reçete kontrolü",
        auxLine: [
          { title: "Reçete ve sıra", text: "Operatör paneli ve PLC hammaddeleri, hedef miktarları ve sırayı belirler." },
          { title: "Tartım kaydı", text: "Her hammaddenin tartılan miktarı kaydedilir." },
        ],
        flow: {
          svgTitle: "Makro dozajlama proses akış şeması",
          svgDesc: "Ürün hattı: hammadde bunkerleri, titreşimli boşaltma ve load-cell'li tartım haznesi, mikser veya toplama hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Hammadde bunkerleri", sub: "Silo veya bunker beslemesi" }],
          drum: { title: "MAKRO DOZAJLAMA", sub: "titreşimli boşaltma, batch tartım" },
          after: [
            { title: "Tartım haznesi", sub: "Batch tamamlanır" },
            { title: "Mikser / toplama", sub: "Sonraki proses" },
          ],
        },
      },
      applications: {
        title: "Makro Dozajlama Uygulama Alanları",
        items: [
          {
            title: "Gübrede Dolgu ve Mineral Hammaddeleri",
            text: "Gübre reçetelerinde kullanılan dolgu ve mineral hammaddelerinin reçete oranına göre tartılarak karışıma verilmesi.",
            imageAlt: "Kırılmış kireç taşı yığınları",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Yem Mineral Hammaddeleri",
            text: "Tuz, DCP ve mermer tozu gibi yem reçetesi minerallerinin tartılması. Premiks ve vitamin gibi düşük miktarlı katkılar mikro dozajla ayrı tartılır.",
            imageAlt: "Kaya tuzu kristalleri",
            linkLabel: "Mikro Dozajlama",
          },
          {
            title: "Seramik, Cam ve Yapı Malzemesi Hammaddeleri",
            text: "Kum ve mineral tozlarının reçeteye göre tartılması. Aşındırıcı ürünlerde bunker çıkışı ve esnek bağlantılar buna göre seçilir.",
            imageAlt: "Silis kumu",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Makro Dozajlama Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA makro dozajlama sistemlerini hammadde sayısı, batch başına miktar, saatlik batch sayısı ve hammaddelerin akış özelliklerine göre projelendirir. Bunker hacmi ve geometrisi, boşaltma ekipmanı, tartım haznesi ve load-cell düzeni birlikte seçilir.",
        highlights: ["Ortak tartım haznesi üzerinde bunkerler", "Titreşimli bunker boşaltması", "Toz geçirmez esnek bağlantılar", "Operatör paneli ve PLC reçete kontrolü"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammaddeler", text: "Hammadde sayısı, ürün türü, tane boyutu, yığın yoğunluğu ve akışkanlık." },
          { title: "Batch ve Debi", text: "Batch başına miktar, saatlik batch sayısı ve reçete oranları." },
          { title: "Bunker ve Dolum", text: "Bunker hacmi, geometri ve silo veya konveyörden dolum şekli." },
          { title: "Tartım", text: "Tartım haznesi hacmi, load-cell düzeni ve ölçüm aralığı." },
          { title: "Kontrol ve Bağlantı", text: "Operatör paneli, PLC, toz emişi ve mikser veya toplama hattı bağlantısı." },
        ],
        dataNote: "Tartım doğruluğu, bunker hacmi ve batch kapasitesi hammadde ve reçete verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Makro Dozajlama Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Makro dozajlama nedir?",
            answer: "Reçetede yüksek miktarda kullanılan mineral, tuz, DCP ve dolgu gibi hammaddelerin ağırlık esaslı tartılıp prosese verilmesidir.",
          },
          {
            question: "Makro dozaj sistemi nasıl çalışır?",
            answer: "Bunkerlerin titreşimli boşaltması reçete sırasına göre çalışır ve ürünü load-cell'li tartım haznesine verir. Hedefe yaklaşıldığında besleme durur; batch tamamlanınca hazne boşaltılır.",
          },
          {
            question: "Mikro dozajlamadan farkı nedir?",
            answer: "Makro dozajlama daha yüksek miktarlar için daha büyük bunker ve kantar kullanır. Mikro dozajlama düşük miktarlı katkıları daha küçük ölçüm aralıklı bir kantarda helezonla besleyerek tartar.",
          },
          {
            question: "Dozaj bant kantarından farkı nedir?",
            answer: "Makro dozajlama batch halinde tartar. Dozaj bant kantarı ise bant üzerinde akan ürünün debisini sürekli ölçer ve bant hızıyla debiyi kontrol eder.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Hammadde listesi ve özellikleri, batch başına miktar, saatlik batch sayısı, bunker dolum şekli ve bağlanacak mikser veya hat bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Makro dozajlama için teknik teklif alın",
        text: "Hammaddeleriniz, batch miktarlarınız ve üretim temponuza göre makro dozajlama sistemini birlikte netleştirelim.",
        mailSubject: "Makro Dozajlama Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Hammadde listesi ve özellikleri", "Batch başına miktar", "Saatlik batch sayısı", "Bunker dolum şekli", "Bağlanacak mikser veya hat", "Otomasyon ve toz emişi ihtiyacı"],
        inquiryLines: [
          "Merhaba, makro dozajlama sistemi için teknik teklif almak istiyorum.",
          "",
          "Hammadde sayısı:",
          "Batch miktarı (kg):",
          "Batch sayısı (saatte):",
          "Bunker dolum şekli:",
          "Mikser / hat:",
          "Otomasyon:",
        ],
      },
    },
    en: {
      meta: {
        title: "Macro Dosing System | Raw Material Dosing and Batch Weighing",
        description:
          "Macro dosing that feeds high-quantity recipe ingredients such as minerals, salt, DCP and fillers from bins into a load-cell scale and weighs them by recipe.",
      },
      breadcrumbLabel: "Macro Dosing",
      h1: "Macro Dosing – Weighed Feeding of High-Quantity Recipe Ingredients",
      productCategory: "Macro Dosing System",
      overview: {
        imageAlt: "Drawing of a macro dosing system with stainless bins above a common weigh hopper",
        tagline: "Macro Dosing",
        keyFacts: [
          { label: "Duty", value: "Weighed dosing of high-quantity ingredients" },
          { label: "Feeding", value: "Vibrating discharge below the bins" },
          { label: "Weighing", value: "Common weigh hopper on load cells" },
          { label: "Control", value: "Recipe via operator panel and PLC" },
        ],
        title: "Batch Weighing for the High-Quantity Components of a Recipe",
        paragraphs: [
          "Macro dosing weighs ingredients used in far larger amounts than micro additives — such as minerals, salt, DCP, marble powder and fillers — and delivers them to the process on a weight basis. Larger bins and a scale with a wider measuring range are used for these amounts.",
          "The ingredients are held in bins arranged above a common weigh hopper. Following the recipe sequence, the vibrating discharge of the relevant bin runs and the product flows into the weigh hopper on load cells. When the target amount approaches, the feed is stopped; the material still in free fall is accounted for in the control system.",
          "Flexible connections between the weigh hopper, the bins and the downstream equipment prevent dust leakage and isolate the weighing from mechanical loads. When the batch is complete, the hopper discharges to the mixer or collecting line.",
        ],
        note: "Macro dosing is not designed to weigh low-quantity additives; these are weighed separately by micro dosing. In continuous main raw material streams, a weigh belt feeder is used.",
      },
      process: {
        title: "Macro Dosing Process Flow",
        intro:
          "The diagram shows ingredients fed from the bins by vibrating discharge into the weigh hopper, weighed in recipe sequence and transferred to the mixer or collecting line when the batch is complete. Silo, mixer and collecting conveyor are separate equipment.",
        note: "Bin volume, amount per batch and batches per hour are determined together with how often and by which equipment the bins are refilled.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Ingredient bins", text: "Each ingredient is held in its own bin above the weigh hopper." },
          { title: "Vibrating discharge", text: "The discharge of the bin in sequence runs; product flows into the weigh hopper." },
          { title: "Weighing and cut-off", text: "Load cells monitor the weight; the feed stops as the target approaches." },
          { title: "Batch transfer", text: "When all ingredients are weighed, the hopper discharges to the mixer or collecting line." },
        ],
        auxLineLabel: "Recipe control",
        auxLine: [
          { title: "Recipe and sequence", text: "The operator panel and PLC define ingredients, target amounts and sequence." },
          { title: "Weighing record", text: "The weighed amount of each ingredient is recorded." },
        ],
        flow: {
          svgTitle: "Macro dosing process flow diagram",
          svgDesc: "Product line: ingredient bins, vibrating discharge and load-cell weigh hopper, mixer or collecting line.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Ingredient bins", sub: "Filled from silo or bunker" }],
          drum: { title: "MACRO DOSING", sub: "vibrating discharge, batch weighing" },
          after: [
            { title: "Weigh hopper", sub: "Batch completed" },
            { title: "Mixer / collecting", sub: "Next process" },
          ],
        },
      },
      applications: {
        title: "Macro Dosing Applications",
        items: [
          {
            title: "Filler and Mineral Ingredients in Fertilizer",
            text: "Weighing filler and mineral ingredients used in fertilizer recipes by recipe ratio and adding them to the blend.",
            imageAlt: "Piles of crushed limestone",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Feed Mineral Ingredients",
            text: "Weighing feed recipe minerals such as salt, DCP and marble powder. Low-quantity additives such as premix and vitamins are weighed separately by micro dosing.",
            imageAlt: "Rock salt crystals",
            linkLabel: "Micro Dosing",
          },
          {
            title: "Ceramic, Glass and Building Material Ingredients",
            text: "Weighing sand and mineral powders by recipe. For abrasive products, bin outlets and flexible connections are selected accordingly.",
            imageAlt: "Silica sand",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Macro Dosing Design and Manufacturing",
        intro:
          "PRO MAKINA engineers macro dosing systems around the number of ingredients, amount per batch, batches per hour and the flow properties of the ingredients. Bin volume and geometry, discharge equipment, weigh hopper and load-cell arrangement are selected together.",
        highlights: ["Bins above a common weigh hopper", "Vibrating bin discharge", "Dust-tight flexible connections", "Operator panel and PLC recipe control"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Ingredients", text: "Number of ingredients, product type, particle size, bulk density and flowability." },
          { title: "Batch and Rate", text: "Amount per batch, batches per hour and recipe ratios." },
          { title: "Bins and Filling", text: "Bin volume, geometry and filling from silo or conveyor." },
          { title: "Weighing", text: "Weigh hopper volume, load-cell arrangement and measuring range." },
          { title: "Control and Connection", text: "Operator panel, PLC, dust extraction and mixer or collecting line connection." },
        ],
        dataNote: "Weighing accuracy, bin volume and batch capacity are defined from ingredient and recipe data; no generic values are stated on this page.",
      },
      faq: {
        title: "Macro Dosing FAQ",
        items: [
          {
            question: "What is macro dosing?",
            answer: "Weighing ingredients used in large amounts in a recipe — such as minerals, salt, DCP and fillers — on a weight basis and delivering them to the process.",
          },
          {
            question: "How does a macro dosing system work?",
            answer: "The vibrating discharge of each bin runs in recipe sequence and feeds the product into the load-cell weigh hopper. The feed stops as the target approaches; when the batch is complete, the hopper discharges.",
          },
          {
            question: "How does it differ from micro dosing?",
            answer: "Macro dosing uses larger bins and scales for higher amounts. Micro dosing weighs low-quantity additives on a smaller-range scale with screw feeding.",
          },
          {
            question: "How does it differ from a weigh belt feeder?",
            answer: "Macro dosing weighs in batches. A weigh belt feeder continuously measures the flow rate of product on the belt and controls the rate through belt speed.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Ingredient list and properties, amount per batch, batches per hour, bin filling method and details of the mixer or line to be fed.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for macro dosing",
        text: "Share your ingredients, batch amounts and production rate, and we will define the macro dosing system together with you.",
        mailSubject: "Macro Dosing Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Ingredient list and properties", "Amount per batch", "Batches per hour", "Bin filling method", "Mixer or line to be fed", "Automation and dust extraction requirements"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a macro dosing system.",
          "",
          "Number of ingredients:",
          "Batch amount (kg):",
          "Batches per hour:",
          "Bin filling method:",
          "Mixer / line:",
          "Automation:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Система макродозирования – порционное взвешивание сырья",
        description:
          "Макродозирование подаёт компоненты больших масс — минералы, соль, DCP, наполнители — из бункеров на весы с тензодатчиками и взвешивает их по рецепту.",
      },
      breadcrumbLabel: "Макродозирование",
      h1: "Макродозирование – весовая подача компонентов рецепта в больших количествах",
      productCategory: "Система макродозирования",
      overview: {
        imageAlt: "Чертёж системы макродозирования с нержавеющими бункерами над общим весовым бункером",
        tagline: "Макродозирование",
        keyFacts: [
          { label: "Назначение", value: "Весовое дозирование компонентов больших масс" },
          { label: "Подача", value: "Вибрационная выгрузка из бункеров" },
          { label: "Взвешивание", value: "Общий весовой бункер на тензодатчиках" },
          { label: "Управление", value: "Рецепт с панели оператора и PLC" },
        ],
        title: "Порционное взвешивание компонентов рецепта в больших количествах",
        paragraphs: [
          "Макродозирование обеспечивает весовое дозирование компонентов, используемых в рецепте в гораздо больших количествах, чем микродобавки, — минералов, соли, DCP, мраморной муки и наполнителей. Для таких масс применяются более крупные бункеры и весы с более широким диапазоном.",
          "Компоненты хранятся в бункерах, расположенных над общим весовым бункером. По очерёдности рецепта включается вибрационная выгрузка нужного бункера, и продукт поступает в весовой бункер на тензодатчиках. При приближении к заданной массе подача прекращается; продукт, находящийся в падении, учитывается системой управления.",
          "Гибкие соединения между весовым бункером, расходными бункерами и нижестоящим оборудованием предотвращают пылевыделение и отделяют взвешивание от механических нагрузок. После завершения замеса бункер разгружается в смеситель или сборную линию.",
        ],
        note: "Макродозирование не предназначено для взвешивания малых добавок — их взвешивают отдельно микродозированием. Для непрерывных потоков основного сырья применяется ленточный весовой дозатор.",
      },
      process: {
        title: "Технологическая схема макродозирования",
        intro:
          "Схема показывает подачу компонентов из бункеров вибрационной выгрузкой в весовой бункер, поочерёдное взвешивание по рецепту и передачу в смеситель или сборную линию после завершения замеса. Силос, смеситель и сборный конвейер — отдельное оборудование.",
        note: "Объём бункеров, масса замеса и число замесов в час определяются вместе с тем, как часто и каким оборудованием пополняются бункеры.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Бункеры сырья", text: "Каждый компонент хранится в своём бункере над весовым бункером." },
          { title: "Вибрационная выгрузка", text: "Включается выгрузка очередного бункера; продукт поступает в весовой бункер." },
          { title: "Взвешивание и отсечка", text: "Тензодатчики контролируют массу; у задания подача прекращается." },
          { title: "Передача замеса", text: "После взвешивания всех компонентов бункер разгружается в смеситель или линию." },
        ],
        auxLineLabel: "Управление рецептом",
        auxLine: [
          { title: "Рецепт и очерёдность", text: "Панель оператора и PLC задают компоненты, массы и очерёдность." },
          { title: "Протокол взвешивания", text: "Взвешенная масса каждого компонента записывается." },
        ],
        flow: {
          svgTitle: "Технологическая схема макродозирования",
          svgDesc: "Линия продукта: бункеры сырья, вибрационная выгрузка и весовой бункер на тензодатчиках, смеситель или сборная линия.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Бункеры сырья", sub: "Из силоса или бункера" }],
          drum: { title: "МАКРОДОЗИРОВАНИЕ", sub: "вибровыгрузка, порционное взвешивание" },
          after: [
            { title: "Весовой бункер", sub: "Замес готов" },
            { title: "Смеситель / сбор", sub: "Следующий процесс" },
          ],
        },
      },
      applications: {
        title: "Области применения макродозирования",
        items: [
          {
            title: "Наполнители и минеральное сырьё удобрений",
            text: "Взвешивание наполнителей и минерального сырья рецептов удобрений по заданной доле и подача в смесь.",
            imageAlt: "Штабели дроблёного известняка",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Минеральное сырьё для кормов",
            text: "Взвешивание минералов кормового рецепта — соли, DCP, мраморной муки. Малые добавки, такие как премиксы и витамины, взвешиваются отдельно микродозированием.",
            imageAlt: "Кристаллы каменной соли",
            linkLabel: "Микродозирование",
          },
          {
            title: "Сырьё для керамики, стекла и стройматериалов",
            text: "Взвешивание песка и минеральных порошков по рецепту. Для абразивных продуктов выпуски бункеров и гибкие соединения подбираются соответственно.",
            imageAlt: "Кварцевый песок",
            linkLabel: "Горное дело и переработка минералов",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление систем макродозирования",
        intro:
          "PRO MAKINA проектирует системы макродозирования исходя из числа компонентов, массы замеса, числа замесов в час и сыпучести сырья. Объём и геометрия бункеров, выгрузное оборудование, весовой бункер и расстановка тензодатчиков подбираются совместно.",
        highlights: ["Бункеры над общим весовым бункером", "Вибрационная выгрузка бункеров", "Пыленепроницаемые гибкие соединения", "Управление рецептами с панели и PLC"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё", text: "Число компонентов, вид продукта, крупность, насыпная плотность и сыпучесть." },
          { title: "Замес и производительность", text: "Масса замеса, число замесов в час и доли рецепта." },
          { title: "Бункеры и загрузка", text: "Объём и геометрия бункеров, загрузка из силоса или конвейера." },
          { title: "Взвешивание", text: "Объём весового бункера, расстановка тензодатчиков и диапазон." },
          { title: "Управление и подключение", text: "Панель оператора, PLC, аспирация, смеситель или сборная линия." },
        ],
        dataNote: "Точность взвешивания, объём бункеров и производительность определяются по данным сырья и рецептов; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о макродозировании",
        items: [
          {
            question: "Что такое макродозирование?",
            answer: "Весовое дозирование компонентов, используемых в рецепте в больших количествах, — минералов, соли, DCP и наполнителей — с подачей в процесс.",
          },
          {
            question: "Как работает система макродозирования?",
            answer: "Вибрационная выгрузка каждого бункера работает по очерёдности рецепта и подаёт продукт в весовой бункер на тензодатчиках. У задания подача прекращается; после замеса бункер разгружается.",
          },
          {
            question: "Чем она отличается от микродозирования?",
            answer: "Макродозирование использует более крупные бункеры и весы для больших масс. Микродозирование взвешивает малые добавки на весах меньшего диапазона со шнековой подачей.",
          },
          {
            question: "Чем она отличается от ленточного весового дозатора?",
            answer: "Макродозирование взвешивает порциями. Ленточный весовой дозатор непрерывно измеряет расход продукта на ленте и регулирует его скоростью ленты.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Перечень сырья и его свойства, масса замеса, число замесов в час, способ загрузки бункеров и данные смесителя или линии.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на макродозирование",
        text: "Сообщите сырьё, массы замесов и темп производства — вместе определим систему макродозирования.",
        mailSubject: "Запрос предложения: макродозирование",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Перечень сырья и свойства", "Масса замеса", "Число замесов в час", "Способ загрузки бункеров", "Смеситель или линия", "Автоматика и аспирация"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на систему макродозирования.",
          "",
          "Число компонентов:",
          "Масса замеса (кг):",
          "Замесов в час:",
          "Загрузка бункеров:",
          "Смеситель / линия:",
          "Автоматика:",
        ],
      },
    },
    ar: {
      meta: {
        title: "نظام الجرعات الكبيرة | جرعات المواد الخام والوزن بالدفعات",
        description:
          "نظام جرعات كبيرة يلقّم مكونات الوصفة عالية الكمية مثل المعادن والملح وDCP ومواد الحشو من القواديس إلى ميزان خلايا تحميل ويزنها وفق الوصفة.",
      },
      breadcrumbLabel: "الجرعات الكبيرة",
      h1: "الجرعات الكبيرة – تلقيم موزون لمكونات الوصفة عالية الكمية",
      productCategory: "نظام الجرعات الكبيرة",
      overview: {
        imageAlt: "رسم لنظام جرعات كبيرة بقواديس من الفولاذ المقاوم للصدأ فوق قادوس وزن مشترك",
        tagline: "الجرعات الكبيرة",
        keyFacts: [
          { label: "المهمة", value: "جرعات موزونة للمكونات عالية الكمية" },
          { label: "التلقيم", value: "تفريغ اهتزازي أسفل القواديس" },
          { label: "الوزن", value: "قادوس وزن مشترك على خلايا تحميل" },
          { label: "التحكم", value: "الوصفة عبر لوحة المشغل وPLC" },
        ],
        title: "الوزن بالدفعات لمكونات الوصفة عالية الكمية",
        paragraphs: [
          "تتيح الجرعات الكبيرة وزن المكونات المستخدمة بكميات أكبر بكثير من الإضافات الدقيقة، مثل المعادن والملح وDCP ومسحوق الرخام ومواد الحشو، وتقديمها إلى العملية على أساس الوزن، وتُستخدم لهذه الكميات قواديس أكبر وميزان بنطاق قياس أوسع.",
          "تبقى المكونات في قواديس مرتبة فوق قادوس وزن مشترك، ووفق تسلسل الوصفة يعمل التفريغ الاهتزازي للقادوس المعني فينساب المنتج إلى قادوس الوزن المركب على خلايا التحميل، وعند الاقتراب من الكمية المستهدفة يُوقف التلقيم مع احتساب المنتج الذي لا يزال في السقوط ضمن نظام التحكم.",
          "تمنع الوصلات المرنة بين قادوس الوزن والقواديس والمعدات التالية تسرب الغبار وتعزل الوزن عن الأحمال الميكانيكية، وعند اكتمال الدفعة يُفرغ القادوس إلى الخلاط أو خط التجميع.",
        ],
        note: "لا تُصمَّم الجرعات الكبيرة لوزن الإضافات قليلة الكمية، إذ تُوزن منفصلة بالجرعات الدقيقة، أما في تيارات المواد الخام الرئيسية المستمرة فيُستخدم المغذي الوزني الحزامي.",
      },
      process: {
        title: "تدفق العملية في الجرعات الكبيرة",
        intro:
          "يوضح المخطط تلقيم المكونات من القواديس بالتفريغ الاهتزازي إلى قادوس الوزن ووزنها بالتتابع وفق الوصفة ونقلها إلى الخلاط أو خط التجميع عند اكتمال الدفعة، بينما الصومعة والخلاط وناقل التجميع معدات منفصلة.",
        note: "يُحدَّد حجم القواديس وكمية الدفعة وعدد الدفعات في الساعة مع تحديد تكرار إعادة تعبئة القواديس والمعدة المستخدمة لذلك.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "قواديس المواد الخام", text: "يبقى كل مكون في قادوسه الخاص فوق قادوس الوزن." },
          { title: "التفريغ الاهتزازي", text: "يعمل تفريغ القادوس التالي في التسلسل فينساب المنتج إلى قادوس الوزن." },
          { title: "الوزن والقطع", text: "تراقب خلايا التحميل الوزن ويُوقف التلقيم عند الاقتراب من الهدف." },
          { title: "نقل الدفعة", text: "بعد وزن جميع المكونات يُفرغ القادوس إلى الخلاط أو خط التجميع." },
        ],
        auxLineLabel: "التحكم في الوصفة",
        auxLine: [
          { title: "الوصفة والتسلسل", text: "تحدد لوحة المشغل وPLC المكونات والكميات المستهدفة والتسلسل." },
          { title: "سجل الوزن", text: "تُسجَّل الكمية الموزونة لكل مكون." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في الجرعات الكبيرة",
          svgDesc: "خط المنتج: قواديس المواد الخام، التفريغ الاهتزازي وقادوس الوزن على خلايا التحميل، الخلاط أو خط التجميع.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "قواديس المواد الخام", sub: "تعبئة من صومعة أو قادوس" }],
          drum: { title: "الجرعات الكبيرة", sub: "تفريغ اهتزازي ووزن بالدفعات" },
          after: [
            { title: "قادوس الوزن", sub: "اكتمال الدفعة" },
            { title: "خلاط / تجميع", sub: "العملية التالية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الجرعات الكبيرة",
        items: [
          {
            title: "مواد الحشو والمواد المعدنية في الأسمدة",
            text: "وزن مواد الحشو والمواد المعدنية المستخدمة في وصفات الأسمدة وفق نسب الوصفة وإضافتها إلى الخليط.",
            imageAlt: "أكوام من الحجر الجيري المكسر",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "المواد المعدنية للأعلاف",
            text: "وزن معادن وصفة العلف مثل الملح وDCP ومسحوق الرخام، بينما تُوزن الإضافات قليلة الكمية مثل البريمكس والفيتامينات منفصلة بالجرعات الدقيقة.",
            imageAlt: "بلورات الملح الصخري",
            linkLabel: "الجرعات الدقيقة",
          },
          {
            title: "مواد السيراميك والزجاج ومواد البناء",
            text: "وزن الرمل والمساحيق المعدنية وفق الوصفة، مع اختيار مخارج القواديس والوصلات المرنة وفق كاشطية المنتج.",
            imageAlt: "رمل السيليكا",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أنظمة الجرعات الكبيرة حسب المشروع",
        intro:
          "تصمم PRO MAKINA أنظمة الجرعات الكبيرة وفق عدد المكونات وكمية الدفعة وعدد الدفعات في الساعة وخصائص انسياب المواد، مع اختيار حجم القواديس وهندستها ومعدات التفريغ وقادوس الوزن وترتيب خلايا التحميل معًا.",
        highlights: ["قواديس فوق قادوس وزن مشترك", "تفريغ اهتزازي للقواديس", "وصلات مرنة محكمة ضد الغبار", "تحكم بالوصفات عبر لوحة المشغل وPLC"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المواد الخام", text: "عدد المكونات ونوع المنتج وحجم الحبيبات والكثافة الظاهرية وقابلية الانسياب." },
          { title: "الدفعة والمعدل", text: "كمية الدفعة وعدد الدفعات في الساعة ونسب الوصفة." },
          { title: "القواديس والتعبئة", text: "حجم القواديس وهندستها وطريقة تعبئتها من صومعة أو ناقل." },
          { title: "الوزن", text: "حجم قادوس الوزن وترتيب خلايا التحميل ونطاق القياس." },
          { title: "التحكم والتوصيل", text: "لوحة المشغل وPLC وشفط الغبار ووصلة الخلاط أو خط التجميع." },
        ],
        dataNote: "تُحدَّد دقة الوزن وحجم القواديس وسعة الدفعة من بيانات المواد والوصفات، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول الجرعات الكبيرة",
        items: [
          {
            question: "ما الجرعات الكبيرة؟",
            answer: "وزن المكونات المستخدمة بكميات كبيرة في الوصفة، مثل المعادن والملح وDCP ومواد الحشو، على أساس الوزن وتقديمها إلى العملية.",
          },
          {
            question: "كيف يعمل نظام الجرعات الكبيرة؟",
            answer: "يعمل التفريغ الاهتزازي لكل قادوس وفق تسلسل الوصفة ويلقّم المنتج في قادوس الوزن على خلايا التحميل، ويتوقف التلقيم قرب الهدف ويُفرغ القادوس عند اكتمال الدفعة.",
          },
          {
            question: "ما الفرق بينها وبين الجرعات الدقيقة؟",
            answer: "تستخدم الجرعات الكبيرة قواديس وموازين أكبر للكميات الأعلى، بينما تزن الجرعات الدقيقة الإضافات قليلة الكمية على ميزان بنطاق أصغر مع تلقيم لولبي.",
          },
          {
            question: "ما الفرق بينها وبين المغذي الوزني الحزامي؟",
            answer: "تزن الجرعات الكبيرة على دفعات، أما المغذي الوزني الحزامي فيقيس معدل تدفق المنتج على الحزام باستمرار وينظمه بسرعة الحزام.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "قائمة المواد الخام وخصائصها وكمية الدفعة وعدد الدفعات في الساعة وطريقة تعبئة القواديس وبيانات الخلاط أو الخط.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا للجرعات الكبيرة",
        text: "شاركنا المواد الخام وكميات الدفعات ووتيرة الإنتاج، لنحدد معًا نظام الجرعات الكبيرة المناسب.",
        mailSubject: "طلب عرض سعر: جرعات كبيرة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["قائمة المواد الخام وخصائصها", "كمية الدفعة", "عدد الدفعات في الساعة", "طريقة تعبئة القواديس", "الخلاط أو الخط المستهدف", "متطلبات الأتمتة وشفط الغبار"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لنظام جرعات كبيرة.",
          "",
          "عدد المكونات:",
          "كمية الدفعة (كغ):",
          "الدفعات في الساعة:",
          "طريقة تعبئة القواديس:",
          "الخلاط / الخط:",
          "الأتمتة:",
        ],
      },
    },
  },
};
