import type { DrumPageConfig } from "../types";

// Hava kilidi: mevcut tanım "toz ve granül malzemenin kontrollü geçişi, hat içi basınç dengesi; pnömatik taşıma, filtre altı, silo çıkışı".
// havakil1 motor-redüktörlü rotary valf (rotary airlock), havakil2 tesiste bir ekipman altında konveyöre boşaltan rotary valftir. İçerik
// "hava geçişini sınırlandırırken katı ürünün kontrollü tahliyesi" ilkesine göre hazırlanmıştır; hassas gravimetrik dozaj olarak anlatılmaz.
// Rotor cep sayısı, boşluk, devir, kapasite veya basınç farkı verilmez. Uygulama kartlarında Toz Toplama sayfalarının ürün görselleri
// (siklon, pulse jet filtre) kullanılır; görsellerde hava kilidinin kendisi gösterildiği iddia edilmez. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/hava kilidi/${file}`;

export const rotaryAirlockPage: DrumPageConfig = {
  key: "rotaryAirlock",
  group: "auxiliaryFlow",
  trSlug: "hava-kilidi",
  mainImage: img("havakil1.png"),
  applications: [
    { image: "/images/siklon/siklon2.jpg", link: "cyclones" },
    { image: "/images/jet pulse/jerpul4.jpg", link: "pulseJetFilter" },
    { image: "/images/tasima-uygulamalari/plastik-granul.webp", link: "blower" },
    { image: "/images/tasima-uygulamalari/sonmemis-kirec-tozu.webp", link: "bunkersHoppers" },
  ],
  figure: img("havakil2.jpg"),
  sectors: ["fertilizerPlants", "chemicalProcess"],
  resources: ["cyclones", "pulseJetFilter", "blower", "auxiliaryFlow"],
  machines: ["dustCollection", "conveying", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Hava Kilidi | Rotary Valve, Siklon ve Filtre Altı Rotary Airlock | PRO MAKİNA",
        description:
          "Siklon, filtre ve bunker altında hava geçişini sınırlarken toz ve granül ürünü kontrollü boşaltan rotary valve (hava kilidi). Motor-redüktörlü imalat.",
      },
      breadcrumbLabel: "Hava Kilidi",
      h1: "Hava Kilidi (Rotary Valve) – Hava Geçişini Sınırlayarak Kontrollü Ürün Tahliyesi",
      productCategory: "Rotary Airlock / Rotary Valve",
      overview: {
        imageAlt: "Motor-redüktörlü, flanşlı gövdeli rotary valve hava kilidi",
        tagline: "Hava Kilidi",
        keyFacts: [
          { label: "Görev", value: "Hava geçişini sınırlayarak ürün tahliyesi" },
          { label: "Mekanizma", value: "Gövde içinde dönen cepli rotor" },
          { label: "Tahrik", value: "Motor-redüktör" },
          { label: "Konum", value: "Siklon, filtre veya bunker altı" },
        ],
        title: "Farklı Basınçtaki İki Bölge Arasında Ürün Geçişi",
        paragraphs: [
          "Hava kilidi, üstteki siklon, filtre veya bunkerden gelen toz ve granül ürünü alt hatta aktarırken iki bölge arasındaki hava geçişini sınırlandıran rotary valve tipi ekipmandır. Siklon veya filtre gövdesi çoğunlukla fan emişi nedeniyle alt hattan farklı basınçtadır; hava kilidi bu farka rağmen ürünün aşağı akmasını sağlar.",
          "Gövde içinde motor-redüktörle dönen rotorun kanatları arasında cepler oluşur. Üstteki giriş ağzında dolan cep, rotor döndükçe alt çıkışa gelir ve ürünü boşaltır. Rotor kanatları ile gövde arasındaki dar boşluk, havanın ürünle birlikte geçişini sınırlar.",
          "Hava kaçağı; rotor-gövde boşluğu, basınç farkı ve rotor devriyle ilişkilidir. Aşındırıcı ürünlerde bu boşluk zamanla büyür. Bu nedenle rotor ve gövde malzemesi, rotor geometrisi ve devir ürün ile basınç farkına göre seçilir.",
        ],
        note: "Hava kilidi hassas tartım veya dozaj ekipmanı değildir. Rotor devri boşaltılan hacmi etkiler; ancak cep doluluğu ürünün akışına bağlıdır ve kütle ölçülmez. Gravimetrik besleme gerekiyorsa tartımlı dozaj sistemi kullanılır.",
      },
      process: {
        title: "Hava Kilidi Proses Akışı",
        intro:
          "Şema, ürünün siklon, filtre veya bunker altından hava kilidine girdiği, rotor ceplerinin ürünü alıp döndürdüğü ve alt hatta boşalttığı akışı gösterir. Siklon, filtre ve alt taşıma hattı ayrı ekipmanlardır.",
        note: "Basınçlı pnömatik taşıma hattına besleme yapılıyorsa, hat basıncı ile giriş tarafı arasındaki fark tasarımda ayrıca değerlendirilir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Ürün girişi", text: "Siklon, filtre veya bunker altından gelen ürün giriş ağzına akar." },
          { title: "Cepler dolar", text: "Üst konumdaki rotor cepleri ürünle dolar." },
          { title: "Rotor dönüşü", text: "Motor-redüktör rotoru döndürür; dolu cepler alt çıkışa taşınır." },
          { title: "Alt hatta aktarım", text: "Ürün alttaki konveyör, helezon veya pnömatik hatta boşalır." },
        ],
        auxLineLabel: "Hava tarafı",
        auxLine: [
          { title: "Basınç farkı", text: "Üst gövde ile alt hat arasında fan veya pnömatik hattan kaynaklanan fark bulunur." },
          { title: "Sınırlı hava geçişi", text: "Rotor-gövde boşluğu havanın ürünle birlikte geçişini sınırlar." },
        ],
        flow: {
          svgTitle: "Hava kilidi proses akış şeması",
          svgDesc: "Ürün hattı: siklon, filtre veya bunker, rotary valve hava kilidi ve alttaki konveyör, helezon veya pnömatik hat.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Siklon / filtre", sub: "Ürün girişi" }],
          drum: { title: "HAVA KİLİDİ", sub: "cepli rotor ile tahliye" },
          after: [{ title: "Alt hat", sub: "Konveyör / pnömatik hat" }],
        },
      },
      applications: {
        title: "Hava Kilidi Uygulama Alanları",
        items: [
          {
            title: "Siklon Altı",
            text: "Siklonda ayrılan tozun konik çıkıştan alınması. Hava kilidi, fan emişinin siklon çıkışından hava çekmesini sınırlayarak ayırma verimini korur.",
            imageAlt: "Konik gövdeli siklon ayırıcı",
            linkLabel: "Siklon Ayırıcılar",
          },
          {
            title: "Pulse Jet Filtre Altı",
            text: "Filtre torbalarından silkelenen tozun hazneden boşaltılması. Hava kilidi filtre gövdesi ile alt hat arasındaki hava geçişini sınırlar.",
            imageAlt: "Pulse jet torbalı filtre",
            linkLabel: "Pulse Jet Filtreler",
          },
          {
            title: "Pnömatik Taşıma Hattına Besleme",
            text: "Toz ve granül ürünün blower havasıyla çalışan pnömatik hatta verilmesi. Hat basıncı rotor seçiminde belirleyicidir.",
            imageAlt: "Plastik granül taneleri",
            linkLabel: "Blower",
          },
          {
            title: "Bunker ve Hazne Altı Tahliye",
            text: "Tozlu ürünün bunker veya hazne altından kapalı şekilde alt ekipmana verilmesi. Rotor devri, alt ekipmanın alabileceği akışa göre seçilir.",
            imageAlt: "Sönmemiş kireç tozu",
            linkLabel: "Bunker ve Hazneler",
          },
        ],
      },
      design: {
        title: "Projeye Özel Hava Kilidi Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA hava kilitlerini ürün, istenen boşaltma kapasitesi, basınç farkı ve bağlantı ölçülerine göre projelendirir. Rotor geometrisi, cep hacmi, rotor-gövde boşluğu, devir ve tahrik birlikte seçilir.",
        highlights: ["Cepli rotor ve kapalı gövde", "Motor-redüktör tahrik", "Hava geçişini sınırlayan dar boşluk", "Siklon, filtre ve bunker flanşlarına uyum"],
        figureAlt: "Tesiste ekipman altında konveyöre boşaltan rotary valve",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün", text: "Ürün türü, tane boyutu, yığın yoğunluğu, aşındırıcılık ve yapışma eğilimi." },
          { title: "Kapasite ve Devir", text: "İstenen boşaltma kapasitesi, cep hacmi ve rotor devri." },
          { title: "Basınç Farkı", text: "Üst gövde ile alt hat arasındaki fark ve izin verilen hava kaçağı." },
          { title: "Rotor ve Gövde", text: "Rotor geometrisi, kanat sayısı, boşluk ve malzeme seçimi." },
          { title: "Bağlantı ve Bakım", text: "Giriş-çıkış flanşları, tahrik yerleşimi ve bakım erişimi." },
        ],
        dataNote: "Rotor ölçüsü, devir ve kapasite ürün ve basınç farkına göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Hava Kilidi Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Hava kilidi ne işe yarar?",
            answer: "Siklon, filtre veya bunker altındaki ürünü alt hatta boşaltırken iki bölge arasındaki hava geçişini sınırlandırır.",
          },
          {
            question: "Hava kilidi nasıl çalışır?",
            answer: "Gövde içinde dönen rotorun cepleri üstte ürünle dolar, rotor döndükçe alta gelir ve ürünü boşaltır. Rotor ile gövde arasındaki dar boşluk hava geçişini sınırlar.",
          },
          {
            question: "Hava kilidi dozaj makinesi midir?",
            answer: "Hayır. Rotor devri boşaltılan hacmi etkiler, ancak ürün tartılmaz ve cep doluluğu ürünün akışına bağlıdır. Hassas gravimetrik besleme için tartımlı dozaj sistemi kullanılır.",
          },
          {
            question: "Siklon altında neden hava kilidi kullanılır?",
            answer: "Siklon çıkışından hava girerse ayırma verimi düşer ve toz tekrar havaya karışır. Hava kilidi bu hava girişini sınırlarken ayrılan tozu dışarı alır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün türü ve yığın yoğunluğu, tane boyutu, boşaltma kapasitesi, basınç farkı, sıcaklık, bağlantı flanşları ve bağlanacağı ekipman temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Hava kilidi için teknik teklif alın",
        text: "Ürününüz, boşaltma kapasiteniz ve basınç farkınıza göre hava kilidini birlikte netleştirelim.",
        mailSubject: "Hava Kilidi Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Ürün türü ve yığın yoğunluğu", "Tane boyutu ve aşındırıcılık", "Boşaltma kapasitesi", "Basınç farkı ve sıcaklık", "Bağlanacak ekipman (siklon, filtre, bunker)", "Flanş ölçüleri"],
        inquiryLines: [
          "Merhaba, hava kilidi için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Yığın yoğunluğu:",
          "Kapasite (ton/saat):",
          "Basınç farkı:",
          "Bağlanacak ekipman:",
          "Flanş ölçüsü:",
        ],
      },
    },
    en: {
      meta: {
        title: "Rotary Airlock Valve | Rotary Valve for Cyclones and Filters",
        description:
          "Rotary airlock valve that discharges powders and granules below cyclones, filters and bunkers while limiting air leakage. Geared motor drive, custom build.",
      },
      breadcrumbLabel: "Rotary Airlock Valve",
      h1: "Rotary Airlock Valve – Controlled Product Discharge with Limited Air Leakage",
      productCategory: "Rotary Airlock / Rotary Valve",
      overview: {
        imageAlt: "Rotary airlock valve with geared motor and flanged body",
        tagline: "Rotary Airlock",
        keyFacts: [
          { label: "Duty", value: "Product discharge with limited air leakage" },
          { label: "Mechanism", value: "Pocketed rotor turning inside the body" },
          { label: "Drive", value: "Geared motor" },
          { label: "Location", value: "Below cyclones, filters or bunkers" },
        ],
        title: "Product Transfer Between Two Zones at Different Pressures",
        paragraphs: [
          "A rotary airlock is rotary valve equipment that transfers powders and granules from a cyclone, filter or bunker above to the line below while limiting air passage between the two zones. The cyclone or filter body is usually at a different pressure from the line below because of the fan suction; the airlock lets product flow downward despite this difference.",
          "Pockets are formed between the vanes of the rotor turned by a geared motor inside the body. A pocket filled at the inlet opening reaches the bottom outlet as the rotor turns and discharges the product. The narrow clearance between rotor vanes and body limits air passing with the product.",
          "Air leakage is related to rotor-to-body clearance, pressure difference and rotor speed. With abrasive products this clearance grows over time. Rotor and body materials, rotor geometry and speed are therefore selected for the product and pressure difference.",
        ],
        note: "A rotary airlock is not precision weighing or dosing equipment. Rotor speed affects the discharged volume, but pocket filling depends on product flow and mass is not measured. Where gravimetric feeding is required, a weighing dosing system is used.",
      },
      process: {
        title: "Rotary Airlock Process Flow",
        intro:
          "The diagram shows product entering the airlock from below a cyclone, filter or bunker, rotor pockets taking and turning the product and discharging it into the line below. Cyclone, filter and downstream line are separate equipment.",
        note: "When feeding into a pressure pneumatic conveying line, the difference between line pressure and the inlet side is assessed separately in the design.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Product inlet", text: "Product from below a cyclone, filter or bunker flows into the inlet." },
          { title: "Pockets fill", text: "Rotor pockets at the top position fill with product." },
          { title: "Rotor turns", text: "The geared motor turns the rotor; filled pockets move to the outlet." },
          { title: "Transfer downstream", text: "Product discharges into the conveyor, screw or pneumatic line below." },
        ],
        auxLineLabel: "Air side",
        auxLine: [
          { title: "Pressure difference", text: "A difference caused by the fan or pneumatic line exists between upper body and lower line." },
          { title: "Limited air passage", text: "The rotor-to-body clearance limits air passing with the product." },
        ],
        flow: {
          svgTitle: "Rotary airlock process flow diagram",
          svgDesc: "Product line: cyclone, filter or bunker, rotary airlock valve and the conveyor, screw or pneumatic line below.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Cyclone / filter", sub: "Product inlet" }],
          drum: { title: "ROTARY AIRLOCK", sub: "discharge by pocketed rotor" },
          after: [{ title: "Downstream line", sub: "Conveyor / pneumatic line" }],
        },
      },
      applications: {
        title: "Rotary Airlock Applications",
        items: [
          {
            title: "Below Cyclones",
            text: "Removing dust separated in a cyclone from the cone outlet. The airlock limits air drawn in through the cyclone outlet by the fan suction, preserving separation efficiency.",
            imageAlt: "Cyclone separator with conical body",
            linkLabel: "Cyclone Separator",
          },
          {
            title: "Below Pulse-Jet Filters",
            text: "Discharging dust cleaned off the filter bags from the hopper. The airlock limits air passage between the filter body and the line below.",
            imageAlt: "Pulse-jet bag filter",
            linkLabel: "Pulse-Jet Filters",
          },
          {
            title: "Feeding Pneumatic Conveying Lines",
            text: "Feeding powders and granules into a pneumatic line driven by blower air. Line pressure is decisive in rotor selection.",
            imageAlt: "Plastic granules",
            linkLabel: "Blower",
          },
          {
            title: "Discharge Below Bunkers and Hoppers",
            text: "Enclosed discharge of dusty product from a bunker or hopper to downstream equipment. Rotor speed is selected for the flow the downstream equipment can accept.",
            imageAlt: "Quicklime powder",
            linkLabel: "Bunkers & Hoppers",
          },
        ],
      },
      design: {
        title: "Custom Rotary Airlock Design and Manufacturing",
        intro:
          "PRO MAKINA engineers rotary airlocks around the product, required discharge capacity, pressure difference and connection dimensions. Rotor geometry, pocket volume, rotor-to-body clearance, speed and drive are selected together.",
        highlights: ["Pocketed rotor in a closed body", "Geared motor drive", "Narrow clearance limiting air passage", "Fits cyclone, filter and bunker flanges"],
        figureAlt: "Rotary valve discharging onto a conveyor below equipment at a plant",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product", text: "Product type, particle size, bulk density, abrasiveness and tendency to stick." },
          { title: "Capacity and Speed", text: "Required discharge capacity, pocket volume and rotor speed." },
          { title: "Pressure Difference", text: "Difference between upper body and lower line and permissible air leakage." },
          { title: "Rotor and Body", text: "Rotor geometry, number of vanes, clearance and material selection." },
          { title: "Connection and Maintenance", text: "Inlet and outlet flanges, drive arrangement and maintenance access." },
        ],
        dataNote: "Rotor size, speed and capacity are defined from the product and pressure difference; no generic values are stated on this page.",
      },
      faq: {
        title: "Rotary Airlock FAQ",
        items: [
          {
            question: "What is a rotary airlock used for?",
            answer: "It discharges product from below a cyclone, filter or bunker into the line below while limiting air passage between the two zones.",
          },
          {
            question: "How does a rotary airlock work?",
            answer: "Pockets of the rotor turning inside the body fill with product at the top, move down as the rotor turns and discharge. The narrow clearance between rotor and body limits air passage.",
          },
          {
            question: "Is a rotary airlock a dosing machine?",
            answer: "No. Rotor speed affects the discharged volume, but the product is not weighed and pocket filling depends on product flow. For precise gravimetric feeding a weighing dosing system is used.",
          },
          {
            question: "Why is an airlock used below a cyclone?",
            answer: "If air enters through the cyclone outlet, separation efficiency falls and dust is re-entrained. The airlock limits this air ingress while removing the separated dust.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type and bulk density, particle size, discharge capacity, pressure difference, temperature, connection flanges and the equipment it will be fitted to.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a rotary airlock",
        text: "Share your product, discharge capacity and pressure difference, and we will define the rotary airlock together with you.",
        mailSubject: "Rotary Airlock Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Product type and bulk density", "Particle size and abrasiveness", "Discharge capacity", "Pressure difference and temperature", "Connected equipment (cyclone, filter, bunker)", "Flange dimensions"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a rotary airlock.",
          "",
          "Product:",
          "Bulk density:",
          "Capacity (t/h):",
          "Pressure difference:",
          "Connected equipment:",
          "Flange size:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Шлюзовой затвор (роторный шлюз) для циклонов и фильтров",
        description:
          "Шлюзовой затвор выгружает порошки и гранулы из-под циклонов, фильтров и бункеров, ограничивая перетекание воздуха. Мотор-редуктор, изготовление по проекту.",
      },
      breadcrumbLabel: "Шлюзовой затвор",
      h1: "Шлюзовой затвор (роторный шлюз) – контролируемая выгрузка с ограничением перетока воздуха",
      productCategory: "Роторный шлюзовой затвор",
      overview: {
        imageAlt: "Роторный шлюзовой затвор с мотор-редуктором и фланцевым корпусом",
        tagline: "Шлюзовой затвор",
        keyFacts: [
          { label: "Назначение", value: "Выгрузка продукта с ограничением перетока воздуха" },
          { label: "Механизм", value: "Ротор с ячейками внутри корпуса" },
          { label: "Привод", value: "Мотор-редуктор" },
          { label: "Место установки", value: "Под циклоном, фильтром или бункером" },
        ],
        title: "Передача продукта между зонами с разным давлением",
        paragraphs: [
          "Шлюзовой затвор — роторное оборудование, передающее порошки и гранулы из циклона, фильтра или бункера в нижележащую линию и ограничивающее перетекание воздуха между двумя зонами. Корпус циклона или фильтра из-за разрежения вентилятора обычно находится под иным давлением, чем нижняя линия; шлюз позволяет продукту идти вниз несмотря на эту разницу.",
          "Между лопастями ротора, вращаемого мотор-редуктором, образуются ячейки. Ячейка, заполненная у входного отверстия, при вращении приходит к нижнему выпуску и разгружается. Малый зазор между лопастями и корпусом ограничивает проход воздуха вместе с продуктом.",
          "Перетекание воздуха зависит от зазора между ротором и корпусом, перепада давления и частоты вращения. У абразивных продуктов зазор со временем растёт, поэтому материалы ротора и корпуса, геометрия и частота вращения подбираются по продукту и перепаду давления.",
        ],
        note: "Шлюзовой затвор не является весовым дозатором. Частота вращения влияет на выгружаемый объём, но заполнение ячеек зависит от сыпучести, а масса не измеряется. Для гравиметрической подачи применяется весовой дозатор.",
      },
      process: {
        title: "Технологическая схема шлюзового затвора",
        intro:
          "Схема показывает поступление продукта в шлюз из-под циклона, фильтра или бункера, заполнение ячеек ротора, их поворот и выгрузку в нижнюю линию. Циклон, фильтр и нижняя линия — отдельное оборудование.",
        note: "При подаче в напорную линию пневмотранспорта разница между давлением в линии и на входе оценивается в проекте отдельно.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Вход продукта", text: "Продукт из-под циклона, фильтра или бункера поступает во входное отверстие." },
          { title: "Заполнение ячеек", text: "Ячейки ротора в верхнем положении заполняются продуктом." },
          { title: "Вращение ротора", text: "Мотор-редуктор вращает ротор; заполненные ячейки идут к выпуску." },
          { title: "Передача вниз", text: "Продукт выгружается в конвейер, шнек или пневмолинию ниже." },
        ],
        auxLineLabel: "Воздушная сторона",
        auxLine: [
          { title: "Перепад давления", text: "Между корпусом сверху и линией снизу есть перепад от вентилятора или пневмолинии." },
          { title: "Ограниченный переток", text: "Зазор между ротором и корпусом ограничивает проход воздуха с продуктом." },
        ],
        flow: {
          svgTitle: "Технологическая схема шлюзового затвора",
          svgDesc: "Линия продукта: циклон, фильтр или бункер, роторный шлюзовой затвор и нижележащий конвейер, шнек или пневмолиния.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Циклон / фильтр", sub: "Вход продукта" }],
          drum: { title: "ШЛЮЗОВОЙ ЗАТВОР", sub: "выгрузка ячейковым ротором" },
          after: [{ title: "Нижняя линия", sub: "Конвейер / пневмолиния" }],
        },
      },
      applications: {
        title: "Области применения шлюзовых затворов",
        items: [
          {
            title: "Под циклонами",
            text: "Отвод пыли, отделённой в циклоне, из конусного выпуска. Шлюз ограничивает подсос воздуха через выпуск, сохраняя эффективность разделения.",
            imageAlt: "Циклонный сепаратор с коническим корпусом",
            linkLabel: "Циклонный сепаратор",
          },
          {
            title: "Под импульсными рукавными фильтрами",
            text: "Выгрузка пыли, сброшенной с рукавов, из бункера фильтра. Шлюз ограничивает переток воздуха между корпусом фильтра и нижней линией.",
            imageAlt: "Импульсный рукавный фильтр",
            linkLabel: "Импульсные рукавные фильтры",
          },
          {
            title: "Подача в линии пневмотранспорта",
            text: "Подача порошков и гранул в пневмолинию, работающую от воздуходувки. Давление в линии определяет выбор ротора.",
            imageAlt: "Пластиковые гранулы",
            linkLabel: "Воздуходувка",
          },
          {
            title: "Выгрузка из-под бункеров и воронок",
            text: "Закрытая выгрузка пылящего продукта из бункера или воронки на нижестоящее оборудование. Частота вращения подбирается под расход, который оно может принять.",
            imageAlt: "Порошок негашёной извести",
            linkLabel: "Бункеры и воронки",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление шлюзовых затворов",
        intro:
          "PRO MAKINA проектирует шлюзовые затворы исходя из продукта, требуемой производительности выгрузки, перепада давления и присоединительных размеров. Геометрия ротора, объём ячеек, зазор, частота вращения и привод подбираются совместно.",
        highlights: ["Ячейковый ротор в закрытом корпусе", "Привод мотор-редуктором", "Малый зазор против перетока воздуха", "Под фланцы циклонов, фильтров и бункеров"],
        figureAlt: "Роторный затвор на предприятии, выгружающий продукт на конвейер",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Продукт", text: "Вид продукта, крупность, насыпная плотность, абразивность и склонность к налипанию." },
          { title: "Производительность и обороты", text: "Требуемая производительность, объём ячеек и частота вращения ротора." },
          { title: "Перепад давления", text: "Разница между верхним корпусом и нижней линией, допустимый переток воздуха." },
          { title: "Ротор и корпус", text: "Геометрия ротора, число лопастей, зазор и выбор материала." },
          { title: "Присоединение и обслуживание", text: "Входной и выходной фланцы, расположение привода и доступ." },
        ],
        dataNote: "Размер ротора, обороты и производительность определяются по продукту и перепаду давления; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о шлюзовых затворах",
        items: [
          {
            question: "Для чего нужен шлюзовой затвор?",
            answer: "Он выгружает продукт из-под циклона, фильтра или бункера в нижнюю линию, ограничивая перетекание воздуха между двумя зонами.",
          },
          {
            question: "Как работает шлюзовой затвор?",
            answer: "Ячейки вращающегося ротора наполняются продуктом сверху, при вращении опускаются и разгружаются. Малый зазор между ротором и корпусом ограничивает проход воздуха.",
          },
          {
            question: "Является ли шлюзовой затвор дозатором?",
            answer: "Нет. Частота вращения влияет на объём выгрузки, но продукт не взвешивается, а заполнение ячеек зависит от сыпучести. Для точной гравиметрической подачи используется весовой дозатор.",
          },
          {
            question: "Зачем шлюз под циклоном?",
            answer: "Если через выпуск циклона подсасывается воздух, эффективность разделения падает и пыль снова уносится. Шлюз ограничивает подсос и выводит отделённую пыль.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта и насыпная плотность, крупность, производительность выгрузки, перепад давления, температура, фланцы и оборудование, на которое устанавливается шлюз.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на шлюзовой затвор",
        text: "Сообщите продукт, производительность выгрузки и перепад давления — вместе определим шлюзовой затвор.",
        mailSubject: "Запрос предложения: шлюзовой затвор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид продукта и насыпная плотность", "Крупность и абразивность", "Производительность выгрузки", "Перепад давления и температура", "Оборудование (циклон, фильтр, бункер)", "Размеры фланцев"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на шлюзовой затвор.",
          "",
          "Продукт:",
          "Насыпная плотность:",
          "Производительность (т/ч):",
          "Перепад давления:",
          "Оборудование:",
          "Размер фланца:",
        ],
      },
    },
    ar: {
      meta: {
        title: "صمام الإقفال الهوائي الدوار | صمام دوار أسفل السيكلونات والمرشحات",
        description:
          "صمام إقفال هوائي دوار يفرّغ المساحيق والحبيبات من أسفل السيكلونات والمرشحات والقواديس مع الحد من تسرب الهواء، بإدارة محرك مخفض وتصنيع حسب المشروع.",
      },
      breadcrumbLabel: "صمام الإقفال الهوائي",
      h1: "صمام الإقفال الهوائي الدوار – تفريغ متحكم به للمنتج مع الحد من تسرب الهواء",
      productCategory: "صمام إقفال هوائي دوار",
      overview: {
        imageAlt: "صمام إقفال هوائي دوار بمحرك مخفض وجسم بشفاه",
        tagline: "صمام الإقفال الهوائي",
        keyFacts: [
          { label: "المهمة", value: "تفريغ المنتج مع الحد من تسرب الهواء" },
          { label: "الآلية", value: "دوار بجيوب يدور داخل الجسم" },
          { label: "الإدارة", value: "محرك مخفض" },
          { label: "الموقع", value: "أسفل السيكلون أو المرشح أو القادوس" },
        ],
        title: "نقل المنتج بين منطقتين بضغطين مختلفين",
        paragraphs: [
          "صمام الإقفال الهوائي الدوار معدة تنقل المساحيق والحبيبات من السيكلون أو المرشح أو القادوس في الأعلى إلى الخط في الأسفل مع الحد من مرور الهواء بين المنطقتين؛ إذ يكون جسم السيكلون أو المرشح عادةً بضغط مختلف عن الخط السفلي بسبب شفط المروحة، ويتيح الصمام انسياب المنتج إلى الأسفل رغم هذا الفرق.",
          "تتكون الجيوب بين ريش الدوار الذي يديره محرك مخفض داخل الجسم، فيمتلئ الجيب عند فتحة الدخول ثم يصل إلى المخرج السفلي مع دوران الدوار ويفرغ المنتج، ويحد الخلوص الضيق بين الريش والجسم من مرور الهواء مع المنتج.",
          "يرتبط تسرب الهواء بالخلوص بين الدوار والجسم وفرق الضغط وسرعة الدوران، ومع المنتجات الكاشطة يتسع هذا الخلوص بمرور الوقت، لذا تُختار مواد الدوار والجسم وشكل الدوار وسرعته وفق المنتج وفرق الضغط.",
        ],
        note: "صمام الإقفال الهوائي ليس معدة وزن أو جرعات دقيقة؛ فسرعة الدوار تؤثر في الحجم المفرغ، لكن امتلاء الجيوب يعتمد على انسياب المنتج ولا تُقاس الكتلة، ويُستخدم نظام جرعات بالوزن عند الحاجة إلى تلقيم وزني.",
      },
      process: {
        title: "تدفق العملية في صمام الإقفال الهوائي",
        intro:
          "يوضح المخطط دخول المنتج إلى الصمام من أسفل السيكلون أو المرشح أو القادوس وامتلاء جيوب الدوار ودورانها وتفريغ المنتج في الخط السفلي، بينما السيكلون والمرشح والخط السفلي معدات منفصلة.",
        note: "عند التلقيم في خط نقل هوائي بالضغط يُقيَّم الفرق بين ضغط الخط وجهة الدخول بشكل منفصل في التصميم.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "دخول المنتج", text: "ينساب المنتج من أسفل السيكلون أو المرشح أو القادوس إلى فتحة الدخول." },
          { title: "امتلاء الجيوب", text: "تمتلئ جيوب الدوار في الموضع العلوي بالمنتج." },
          { title: "دوران الدوار", text: "يدير المحرك المخفض الدوار فتنتقل الجيوب الممتلئة إلى المخرج." },
          { title: "النقل إلى الأسفل", text: "يُفرغ المنتج في الناقل أو الناقل اللولبي أو الخط الهوائي في الأسفل." },
        ],
        auxLineLabel: "جهة الهواء",
        auxLine: [
          { title: "فرق الضغط", text: "يوجد فرق بين الجسم العلوي والخط السفلي ناتج عن المروحة أو الخط الهوائي." },
          { title: "مرور محدود للهواء", text: "يحد الخلوص بين الدوار والجسم من مرور الهواء مع المنتج." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في صمام الإقفال الهوائي",
          svgDesc: "خط المنتج: السيكلون أو المرشح أو القادوس، صمام الإقفال الهوائي الدوار والناقل أو الناقل اللولبي أو الخط الهوائي في الأسفل.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "سيكلون / مرشح", sub: "دخول المنتج" }],
          drum: { title: "صمام الإقفال الهوائي", sub: "تفريغ بدوار ذي جيوب" },
          after: [{ title: "الخط السفلي", sub: "ناقل / خط هوائي" }],
        },
      },
      applications: {
        title: "مجالات استخدام صمام الإقفال الهوائي",
        items: [
          {
            title: "أسفل السيكلونات",
            text: "إخراج الغبار المنفصل في السيكلون من المخرج المخروطي، مع الحد من الهواء المسحوب عبر المخرج بفعل شفط المروحة للحفاظ على كفاءة الفصل.",
            imageAlt: "سيكلون فاصل بجسم مخروطي",
            linkLabel: "فواصل السيكلون",
          },
          {
            title: "أسفل مرشحات النبض النفاث",
            text: "تفريغ الغبار المنفوض عن أكياس المرشح من القادوس، مع الحد من مرور الهواء بين جسم المرشح والخط السفلي.",
            imageAlt: "مرشح أكياس بالنبض النفاث",
            linkLabel: "مرشحات النبض النفاث",
          },
          {
            title: "تلقيم خطوط النقل الهوائي",
            text: "تلقيم المساحيق والحبيبات في خط هوائي يعمل بهواء النافخ، ويكون ضغط الخط حاسمًا في اختيار الدوار.",
            imageAlt: "حبيبات بلاستيكية",
            linkLabel: "النافخ",
          },
          {
            title: "التفريغ أسفل القواديس والأحواض",
            text: "تفريغ مغلق للمنتج المغبر من القادوس أو الحوض إلى المعدة التالية، مع اختيار سرعة الدوار وفق التدفق الذي تستوعبه تلك المعدة.",
            imageAlt: "مسحوق الجير الحي",
            linkLabel: "القواديس والأحواض",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع صمامات الإقفال الهوائي حسب المشروع",
        intro:
          "تصمم PRO MAKINA صمامات الإقفال الهوائي وفق المنتج وسعة التفريغ المطلوبة وفرق الضغط وأبعاد التوصيل، مع اختيار شكل الدوار وحجم الجيوب والخلوص والسرعة والإدارة معًا.",
        highlights: ["دوار بجيوب في جسم مغلق", "إدارة بمحرك مخفض", "خلوص ضيق يحد من مرور الهواء", "توافق مع شفاه السيكلونات والمرشحات والقواديس"],
        figureAlt: "صمام دوار في منشأة يفرغ المنتج على ناقل",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المنتج", text: "نوع المنتج وحجم الحبيبات والكثافة الظاهرية والكاشطية وقابلية الالتصاق." },
          { title: "السعة والسرعة", text: "سعة التفريغ المطلوبة وحجم الجيوب وسرعة الدوار." },
          { title: "فرق الضغط", text: "الفرق بين الجسم العلوي والخط السفلي وتسرب الهواء المسموح." },
          { title: "الدوار والجسم", text: "شكل الدوار وعدد الريش والخلوص واختيار المواد." },
          { title: "التوصيل والصيانة", text: "شفتا الدخول والخروج وترتيب الإدارة وإمكانية الصيانة." },
        ],
        dataNote: "يُحدَّد مقاس الدوار وسرعته وسعته وفق المنتج وفرق الضغط، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول صمام الإقفال الهوائي",
        items: [
          {
            question: "ما استخدام صمام الإقفال الهوائي؟",
            answer: "يفرّغ المنتج من أسفل السيكلون أو المرشح أو القادوس إلى الخط السفلي مع الحد من مرور الهواء بين المنطقتين.",
          },
          {
            question: "كيف يعمل صمام الإقفال الهوائي؟",
            answer: "تمتلئ جيوب الدوار بالمنتج في الأعلى ثم تنزل مع الدوران وتُفرغ، ويحد الخلوص الضيق بين الدوار والجسم من مرور الهواء.",
          },
          {
            question: "هل صمام الإقفال الهوائي آلة جرعات؟",
            answer: "لا. تؤثر سرعة الدوار في الحجم المفرغ، لكن المنتج لا يُوزن ويعتمد امتلاء الجيوب على الانسياب، ويُستخدم نظام جرعات بالوزن للتلقيم الوزني الدقيق.",
          },
          {
            question: "لماذا يُستخدم الصمام أسفل السيكلون؟",
            answer: "إذا دخل الهواء عبر مخرج السيكلون تنخفض كفاءة الفصل ويعود الغبار إلى الهواء، ويحد الصمام من هذا الدخول مع إخراج الغبار المنفصل.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج وكثافته الظاهرية وحجم الحبيبات وسعة التفريغ وفرق الضغط ودرجة الحرارة وشفاه التوصيل والمعدة التي سيُركَّب عليها.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لصمام الإقفال الهوائي",
        text: "شاركنا منتجك وسعة التفريغ وفرق الضغط، لنحدد معًا صمام الإقفال الهوائي المناسب.",
        mailSubject: "طلب عرض سعر: صمام إقفال هوائي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المنتج وكثافته الظاهرية", "حجم الحبيبات والكاشطية", "سعة التفريغ", "فرق الضغط ودرجة الحرارة", "المعدة الموصولة (سيكلون، مرشح، قادوس)", "أبعاد الشفاه"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لصمام إقفال هوائي.",
          "",
          "المنتج:",
          "الكثافة الظاهرية:",
          "السعة (طن/ساعة):",
          "فرق الضغط:",
          "المعدة الموصولة:",
          "مقاس الشفة:",
        ],
      },
    },
  },
};
