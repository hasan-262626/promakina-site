import type { DrumPageConfig } from "../types";

// Karıştırıcılı reaktör: karıştırma gerektiren fiziksel veya kimyasal sıvı prosesler (yalnız depolama tankı değildir).
// Basınçlı çalışma veya belirli bir kimyasal reaksiyon varsayılmaz; hacim, devir ve güç değeri verilmez.
// Ana görsel ve şekil görselinin kaynağı doğrulanmamıştır.
const img = (file: string) => `/images/reaktor-tank/${file}`;
const app = (file: string) => `/images/tank-uygulamalari/${file}`;

export const agitatedReactorPage: DrumPageConfig = {
  key: "agitatedReactor",
  group: "reactorsTanks",
  trSlug: "karistiricili-reaktorler",
  mainImage: img("sivi4.png"),
  applications: [
    { image: app("leonardit.webp"), link: "fertilizerPlants" },
    { image: app("can-gubre-pelet.webp"), link: "dissolutionTank" },
    { image: app("aerasyon-havuzu.webp"), link: "sludgeDrying" },
  ],
  figure: img("sivi3.jpg"),
  sectors: ["fertilizerPlants", "chemicalProcess", "sludgeDrying"],
  resources: ["pressureReactor", "dissolutionTank", "coolingTank", "storageTank"],
  machines: ["reactorsTanks", "dosingSystems", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Karıştırıcılı Reaktör İmalatı | Sıvı Proses Reaktörleri | PRO MAKİNA",
        description:
          "Sıvı gübre, kimyasal hazırlama ve homojenizasyon prosesleri için karıştırıcılı reaktör imalatı. Karıştırıcı tipi, devir ve malzeme ürüne göre seçilir.",
      },
      breadcrumbLabel: "Karıştırıcılı Reaktörler",
      h1: "Karıştırıcılı Reaktör – Kontrollü Karıştırma Gerektiren Sıvı Prosesler",
      productCategory: "Karıştırıcılı Reaktör",
      overview: {
        imageAlt: "Platform üzerinde üstten tahrikli iki proses reaktörü ve boru hatları",
        tagline: "Karıştırıcılı Reaktör",
        keyFacts: [
          { label: "Görev", value: "Karıştırma gerektiren fiziksel veya kimyasal prosesler" },
          { label: "Karıştırıcı", value: "Tip, kanat geometrisi ve devir ürüne göre" },
          { label: "Tahrik", value: "Motor-redüktör, mil ve yataklama" },
          { label: "Isıtma / soğutma", value: "Proses gerektirirse ceket veya serpantin" },
        ],
        title: "Sıvı Proseslerde Homojen Karışım ve Kontrollü Koşullar",
        paragraphs: [
          "Karıştırıcılı reaktör, sıvı veya sıvı-katı bileşenlerin bir karıştırıcı ile sürekli hareket ettirilerek homojen hâle getirildiği ve prosesin gerektirdiği sıcaklık, süre ve besleme sırasının kontrol edildiği proses gövdesidir. Karışım, çözündürme, ekstraksiyon veya kimyasal reaksiyon adımlarında kullanılabilir.",
          "Karıştırma performansını belirleyen başlıca unsurlar; karıştırıcı tipi (pervane, türbin, çapa vb.), kanat çapı ve geometrisi, devir, tank içindeki yerleşim ve akış kırıcılardır. Bu seçimler ürünün viskozitesi, yoğunluğu, katı oranı ve prosesin amacına göre yapılır.",
          "Proses ısıtma veya soğutma gerektiriyorsa gövdeye ceket ya da tank içine serpantin eklenebilir. Reaktörün basınç altında çalışıp çalışmayacağı prosese göre belirlenir; atmosferik çalışan karıştırıcılı reaktörler basınçlı reaktör değildir.",
        ],
        note: "Karıştırıcılı reaktör yalnızca ürün bekletmek için değil, karışımın proses koşulları altında hazırlanması için tasarlanır. Yalnız depolama gereken durumlarda stok tankı daha uygun çözümdür.",
      },
      process: {
        title: "Karıştırıcılı Reaktör Proses Akışı",
        intro:
          "Şema, hammaddelerin reaktöre beslenip kontrollü karıştırma altında işlendiği ve proses kontrolünden sonra tahliye edildiği genel akışı gösterir. Besleme sırası, süre ve sıcaklık ürünün reçetesine göre belirlenir.",
        note: "Isıtma veya soğutma devresi yalnızca proses gerektiriyorsa eklenir; şemada kesikli hat olarak gösterilmiştir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Hammadde besleme", text: "Sıvı bileşenler pompayla, katı bileşenler kapaktaki besleme ağzından reçete sırasına göre alınır." },
          { title: "Kontrollü karıştırma", text: "Karıştırıcı, ürünün viskozitesine uygun devirde karışımı homojen tutar." },
          { title: "Proses kontrolü", text: "Sıcaklık, seviye ve süre izlenir; gerekirse numune alınarak ürün kontrol edilir." },
          { title: "Ürün tahliyesi", text: "Hazır ürün alt tahliye vanasından stok tankına, filtrasyona veya dolum hattına aktarılır." },
        ],
        auxLineLabel: "Isıtma / soğutma hattı (gerekirse)",
        auxLine: [
          { title: "Isıtma veya soğutma", text: "Proses gerektirirse ceket veya serpantine ısıtma ya da soğutma akışkanı verilir." },
          { title: "Akışkan dönüşü", text: "Akışkan tesisin yardımcı devresine geri döner." },
        ],
        flow: {
          svgTitle: "Karıştırıcılı reaktör proses akış şeması",
          svgDesc:
            "Ürün hattı: hammadde besleme, karıştırıcılı reaktör, proses kontrolü ve ürün tahliyesi. Gerekirse ısıtma veya soğutma akışkanı hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Hammadde besleme", sub: "Sıvı ve katı bileşenler" }],
          drum: { title: "KARIŞTIRICILI REAKTÖR", sub: "kontrollü karıştırma" },
          after: [
            { title: "Proses kontrolü", sub: "Sıcaklık, seviye, süre" },
            { title: "Tahliye", sub: "Stok / dolum" },
          ],
          aux: {
            lane: "ISITMA / SOĞUTMA (GEREKİRSE)",
            tone: "heat",
            inputs: [{ title: "Akışkan girişi", sub: "Ceket / serpantin" }],
            outputs: [{ title: "Akışkan dönüşü", sub: "Yardımcı devre" }],
          },
        },
      },
      applications: {
        title: "Karıştırıcılı Reaktör Uygulama Alanları",
        items: [
          {
            title: "Humik ve Fulvik Sıvı Gübreler",
            text: "Leonardit gibi humik madde kaynaklarının alkali çözelti içinde karıştırılarak ekstrakte edilmesi. Katı oranı, süre ve sıcaklık hammadde analizine göre belirlenir; çözünmeyen kısım sonraki adımda ayrılır.",
            imageAlt: "Cam kap içinde öğütülmüş koyu renkli leonardit",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Sıvı ve Süspansiyon Formülasyonlar",
            text: "Gübre hammaddelerinin su ve katkılarla karıştırılarak homojen sıvı veya süspansiyon ürüne getirilmesi. Amaç yalnızca katıyı çözmekse çözündürme tankı daha sade bir çözüm olabilir.",
            imageAlt: "Beyaz zemin üzerinde kalsiyum amonyum nitrat gübre peletleri",
            linkLabel: "Çözündürme Tankları",
          },
          {
            title: "Arıtma ve Proses Kimyasalları",
            text: "Arıtma tesislerinde kullanılan koagülan, pH düzeltici veya polimer çözeltilerinin hazırlanıp homojen tutulması. Polimer çözeltilerinde yapıyı korumak için düşük devirli karıştırma tercih edilir.",
            imageAlt: "Atık su arıtma tesisinde havalandırma havuzu",
            linkLabel: "Atık Su Çamuru ve Arıtma Çözümleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Karıştırıcılı Reaktör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA karıştırıcılı reaktörleri prosesin amacına, çalışma hacmine, ürünün viskozite ve yoğunluğuna, katı oranına ve korozyon koşullarına göre projelendirir. Gövde, karıştırıcı ve tahrik grubu, sızdırmazlık, bağlantılar ve ölçüm noktaları birlikte tasarlanır.",
        highlights: [
          "Ürüne göre karıştırıcı tipi ve devir",
          "Motor-redüktör, mil ve yataklama",
          "Korozyona uygun gövde malzemesi",
          "Bakım erişimi ve sızdırmazlık",
        ],
        figureAlt: "Reaktör kapağı üzerinde motor-redüktör tahrik grubu ve manometreler",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Proses Amacı", text: "Karışım, çözündürme, ekstraksiyon veya reaksiyon; hammaddeler ve reçete." },
          { title: "Hacim ve Ürün", text: "Çalışma hacmi, viskozite, yoğunluk ve katı oranı." },
          { title: "Karıştırıcı ve Tahrik", text: "Karıştırıcı tipi, kanat geometrisi, devir, motor-redüktör, mil ve yataklama." },
          { title: "Malzeme ve Sızdırmazlık", text: "Korozyon dayanımı, mil sızdırmazlığı ve bakım kapakları." },
          { title: "Ölçüm ve Otomasyon", text: "Sıcaklık ve seviye ölçümü, besleme ve tahliye bağlantıları, tesis entegrasyonu." },
        ],
        dataNote: "Reaktör hacmi, karıştırıcı devri ve tahrik gücü ürün ve proses verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Karıştırıcılı Reaktör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Karıştırıcılı reaktör ne işe yarar?",
            answer:
              "Sıvı veya sıvı-katı bileşenlerin karıştırıcı ile homojen hâle getirildiği ve prosesin gerektirdiği sıcaklık, süre ve besleme sırasının kontrol edildiği proses ekipmanıdır.",
          },
          {
            question: "Karıştırıcı tipi nasıl seçilir?",
            answer:
              "Ürünün viskozitesi, yoğunluğu, katı oranı ve prosesin amacı belirleyicidir. Düşük viskozitede pervane veya türbin, yüksek viskozitede çapa tipi karıştırıcılar değerlendirilir.",
          },
          {
            question: "Karıştırıcılı reaktör basınçlı mı çalışır?",
            answer:
              "Her karıştırıcılı reaktör basınçlı çalışmaz. Proses basınç gerektirmiyorsa atmosferik tasarım yeterlidir; basınç gereken durumlarda basınçlı reaktör ayrıca değerlendirilir.",
          },
          {
            question: "Isıtma veya soğutma yapılabilir mi?",
            answer:
              "Proses gerektirirse gövdeye ceket veya tank içine serpantin eklenerek ısıtma ya da soğutma yapılabilir. Yöntem ve yüzey alanı proses verisine göre belirlenir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Prosesin amacı, hammaddeler ve reçete, çalışma hacmi, ürün viskozitesi ve yoğunluğu, sıcaklık ihtiyacı ve kimyasal özellikler temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Karıştırıcılı reaktör için teknik teklif alın",
        text: "Prosesiniz, hammaddeleriniz ve çalışma hacminize göre karıştırıcılı reaktörü birlikte netleştirelim.",
        mailSubject: "Karıştırıcılı Reaktör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Prosesin amacı ve hammaddeler",
          "Çalışma hacmi veya parti büyüklüğü",
          "Ürün viskozitesi ve yoğunluğu",
          "Katı oranı",
          "Isıtma veya soğutma ihtiyacı",
          "Kimyasal özellikler ve korozyon koşulları",
        ],
        inquiryLines: [
          "Merhaba, karıştırıcılı reaktör için teknik teklif almak istiyorum.",
          "",
          "Proses ve hammaddeler:",
          "Çalışma hacmi:",
          "Viskozite / yoğunluk:",
          "Katı oranı:",
          "Sıcaklık ihtiyacı:",
          "Kimyasal özellikler:",
        ],
      },
    },
    en: {
      meta: {
        title: "Agitated Reactor Manufacturer | Liquid Process Reactors",
        description:
          "Agitated reactors for liquid fertilizer, chemical preparation and homogenization processes. Agitator type, speed and material are selected for your product.",
      },
      breadcrumbLabel: "Agitated Reactor",
      h1: "Agitated Reactor – Liquid Processes That Require Controlled Mixing",
      productCategory: "Agitated Reactor",
      overview: {
        imageAlt: "Two top-driven process reactors and piping on a platform",
        tagline: "Agitated Reactor",
        keyFacts: [
          { label: "Duty", value: "Physical or chemical processes that require mixing" },
          { label: "Agitator", value: "Type, blade geometry and speed per product" },
          { label: "Drive", value: "Gear motor, shaft and bearings" },
          { label: "Heating / cooling", value: "Jacket or coil if the process requires" },
        ],
        title: "Homogeneous Mixing and Controlled Conditions in Liquid Processes",
        paragraphs: [
          "An agitated reactor is a process vessel in which liquid or liquid-solid components are kept in motion by an agitator to make them homogeneous, while temperature, time and feed sequence are controlled as the process requires. It can be used for blending, dissolution, extraction or chemical reaction steps.",
          "Mixing performance mainly depends on agitator type (propeller, turbine, anchor etc.), impeller diameter and geometry, speed, position in the tank and baffles. These are selected according to product viscosity, density, solids content and the purpose of the process.",
          "If the process requires heating or cooling, a jacket can be added to the shell or a coil inside the tank. Whether the reactor runs under pressure is defined by the process; agitated reactors operating at atmospheric pressure are not pressure reactors.",
        ],
        note: "An agitated reactor is designed to prepare a mixture under process conditions, not just to hold product. Where only storage is needed, a storage tank is the more suitable solution.",
      },
      process: {
        title: "Agitated Reactor Process Flow",
        intro:
          "The diagram shows the general flow in which raw materials are fed to the reactor, processed under controlled agitation and discharged after process control. Feed sequence, time and temperature follow the product recipe.",
        note: "A heating or cooling circuit is added only if the process requires it; it is shown as a dashed line in the diagram.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Raw material feed", text: "Liquids are pumped in and solids added through the cover inlet in recipe order." },
          { title: "Controlled agitation", text: "The agitator keeps the mixture homogeneous at a speed suited to product viscosity." },
          { title: "Process control", text: "Temperature, level and time are monitored; samples are taken if required." },
          { title: "Product discharge", text: "Finished product leaves through the bottom valve to storage, filtration or filling." },
        ],
        auxLineLabel: "Heating / cooling line (if required)",
        auxLine: [
          { title: "Heating or cooling", text: "If required, a heating or cooling medium is supplied to the jacket or coil." },
          { title: "Medium return", text: "The medium returns to the plant utility circuit." },
        ],
        flow: {
          svgTitle: "Agitated reactor process flow diagram",
          svgDesc:
            "Product line: raw material feed, agitated reactor, process control and product discharge. Heating or cooling medium line if required.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Raw material feed", sub: "Liquids and solids" }],
          drum: { title: "AGITATED REACTOR", sub: "controlled agitation" },
          after: [
            { title: "Process control", sub: "Temperature, level, time" },
            { title: "Discharge", sub: "Storage / filling" },
          ],
          aux: {
            lane: "HEATING / COOLING (IF REQUIRED)",
            tone: "heat",
            inputs: [{ title: "Medium inlet", sub: "Jacket / coil" }],
            outputs: [{ title: "Medium return", sub: "Utility circuit" }],
          },
        },
      },
      applications: {
        title: "Agitated Reactor Applications",
        items: [
          {
            title: "Humic and Fulvic Liquid Fertilizers",
            text: "Extracting humic sources such as leonardite by mixing in an alkaline solution. Solids ratio, time and temperature are set from raw material analysis; the insoluble fraction is separated in a later step.",
            imageAlt: "Ground dark leonardite in a glass container",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Liquid and Suspension Formulations",
            text: "Mixing fertilizer raw materials with water and additives into a homogeneous liquid or suspension product. If the only goal is to dissolve a solid, a dissolution tank can be the simpler solution.",
            imageAlt: "Calcium ammonium nitrate fertilizer pellets on a white surface",
            linkLabel: "Dissolution Tank",
          },
          {
            title: "Treatment and Process Chemicals",
            text: "Preparing and keeping homogeneous the coagulant, pH correction or polymer solutions used in treatment plants. Low-speed mixing is preferred for polymer solutions to protect their structure.",
            imageAlt: "Aeration tank at a wastewater treatment plant",
            linkLabel: "Sewage Sludge and Treatment Solutions",
          },
        ],
      },
      design: {
        title: "Custom Agitated Reactor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers agitated reactors around the process purpose, working volume, product viscosity and density, solids content and corrosion conditions. Shell, agitator and drive, sealing, connections and measuring points are designed together.",
        highlights: [
          "Agitator type and speed for the product",
          "Gear motor, shaft and bearings",
          "Shell material suited to corrosion",
          "Maintenance access and sealing",
        ],
        figureAlt: "Gear motor drive unit and pressure gauges on a reactor cover",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Process Purpose", text: "Blending, dissolution, extraction or reaction; raw materials and recipe." },
          { title: "Volume and Product", text: "Working volume, viscosity, density and solids content." },
          { title: "Agitator and Drive", text: "Agitator type, blade geometry, speed, gear motor, shaft and bearings." },
          { title: "Material and Sealing", text: "Corrosion resistance, shaft sealing and manholes." },
          { title: "Instruments and Automation", text: "Temperature and level measurement, feed and discharge connections, plant integration." },
        ],
        dataNote: "Reactor volume, agitator speed and drive power are calculated from product and process data; no generic values are stated on this page.",
      },
      faq: {
        title: "Agitated Reactor FAQ",
        items: [
          {
            question: "What is an agitated reactor used for?",
            answer:
              "It is process equipment in which liquid or liquid-solid components are made homogeneous by an agitator while temperature, time and feed sequence are controlled as the process requires.",
          },
          {
            question: "How is the agitator type selected?",
            answer:
              "Product viscosity, density, solids content and the process purpose are decisive. Propeller or turbine agitators are considered for low viscosity, anchor agitators for high viscosity.",
          },
          {
            question: "Does an agitated reactor run under pressure?",
            answer:
              "Not every agitated reactor runs under pressure. If the process does not require pressure, an atmospheric design is sufficient; where pressure is needed, a pressure reactor is assessed separately.",
          },
          {
            question: "Can heating or cooling be provided?",
            answer:
              "If the process requires it, a jacket on the shell or a coil inside the tank can provide heating or cooling. Method and surface area are defined from process data.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Process purpose, raw materials and recipe, working volume, product viscosity and density, temperature requirement and chemical properties.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for an agitated reactor",
        text: "Share your process, raw materials and working volume, and we will define the agitated reactor together with you.",
        mailSubject: "Agitated Reactor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Process purpose and raw materials",
          "Working volume or batch size",
          "Product viscosity and density",
          "Solids content",
          "Heating or cooling requirement",
          "Chemical properties and corrosion conditions",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for an agitated reactor.",
          "",
          "Process and raw materials:",
          "Working volume:",
          "Viscosity / density:",
          "Solids content:",
          "Temperature requirement:",
          "Chemical properties:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Реактор с мешалкой | Реакторы для жидкостных процессов",
        description:
          "Реакторы с мешалкой для производства жидких удобрений, приготовления химических растворов и гомогенизации. Тип мешалки, частота вращения и материал — под продукт.",
      },
      breadcrumbLabel: "Реактор с мешалкой",
      h1: "Реактор с мешалкой – жидкостные процессы с контролируемым перемешиванием",
      productCategory: "Реактор с мешалкой",
      overview: {
        imageAlt: "Два технологических реактора с верхним приводом и трубопроводы на площадке",
        tagline: "Реактор с мешалкой",
        keyFacts: [
          { label: "Назначение", value: "Физические или химические процессы с перемешиванием" },
          { label: "Мешалка", value: "Тип, геометрия лопастей и частота вращения под продукт" },
          { label: "Привод", value: "Мотор-редуктор, вал и подшипниковый узел" },
          { label: "Нагрев / охлаждение", value: "Рубашка или змеевик, если требует процесс" },
        ],
        title: "Однородное перемешивание и контролируемые условия в жидкостных процессах",
        paragraphs: [
          "Реактор с мешалкой — технологический аппарат, в котором жидкие или жидко-твёрдые компоненты постоянно перемешиваются до однородного состояния, а температура, время и порядок загрузки контролируются согласно процессу. Он применяется для смешивания, растворения, экстракции или химических реакций.",
          "Эффективность перемешивания определяется типом мешалки (пропеллерная, турбинная, якорная и др.), диаметром и геометрией лопастей, частотой вращения, положением в аппарате и отражательными перегородками. Выбор делается по вязкости, плотности, содержанию твёрдой фазы и цели процесса.",
          "Если процесс требует нагрева или охлаждения, на корпус устанавливается рубашка или внутрь — змеевик. Работа под давлением определяется процессом; реакторы с мешалкой, работающие при атмосферном давлении, не являются реакторами под давлением.",
        ],
        note: "Реактор с мешалкой предназначен для приготовления смеси в заданных условиях, а не только для выдерживания продукта. Если требуется лишь хранение, лучше подходит ёмкость хранения.",
      },
      process: {
        title: "Технологическая схема реактора с мешалкой",
        intro:
          "Схема показывает общий поток: сырьё загружается в реактор, обрабатывается при контролируемом перемешивании и после контроля процесса выгружается. Порядок загрузки, время и температура задаются рецептурой продукта.",
        note: "Контур нагрева или охлаждения добавляется только при необходимости; на схеме он показан пунктиром.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Загрузка сырья", text: "Жидкости подаются насосом, твёрдые компоненты — через люк в крышке по рецептуре." },
          { title: "Контролируемое перемешивание", text: "Мешалка поддерживает однородность смеси при частоте, соответствующей вязкости." },
          { title: "Контроль процесса", text: "Контролируются температура, уровень и время; при необходимости отбираются пробы." },
          { title: "Выгрузка продукта", text: "Готовый продукт через нижний клапан подаётся на хранение, фильтрацию или розлив." },
        ],
        auxLineLabel: "Линия нагрева / охлаждения (при необходимости)",
        auxLine: [
          { title: "Нагрев или охлаждение", text: "При необходимости в рубашку или змеевик подаётся тепло- или хладоноситель." },
          { title: "Возврат среды", text: "Среда возвращается во вспомогательный контур завода." },
        ],
        flow: {
          svgTitle: "Технологическая схема реактора с мешалкой",
          svgDesc:
            "Линия продукта: загрузка сырья, реактор с мешалкой, контроль процесса и выгрузка продукта. Линия нагрева или охлаждения при необходимости.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Загрузка сырья", sub: "Жидкие и твёрдые" }],
          drum: { title: "РЕАКТОР С МЕШАЛКОЙ", sub: "контролируемое перемешивание" },
          after: [
            { title: "Контроль процесса", sub: "t°, уровень, время" },
            { title: "Выгрузка", sub: "Хранение / розлив" },
          ],
          aux: {
            lane: "НАГРЕВ / ОХЛАЖДЕНИЕ (ПРИ НЕОБХОДИМОСТИ)",
            tone: "heat",
            inputs: [{ title: "Подача среды", sub: "Рубашка / змеевик" }],
            outputs: [{ title: "Возврат среды", sub: "Вспом. контур" }],
          },
        },
      },
      applications: {
        title: "Области применения реакторов с мешалкой",
        items: [
          {
            title: "Гуминовые и фульвовые жидкие удобрения",
            text: "Экстракция гуминовых веществ из источников, например леонардита, при перемешивании в щелочном растворе. Соотношение твёрдой фазы, время и температура задаются по анализу сырья; нерастворимая часть отделяется далее.",
            imageAlt: "Измельчённый тёмный леонардит в стеклянной ёмкости",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Жидкие и суспензионные составы",
            text: "Смешивание сырья для удобрений с водой и добавками до однородного жидкого или суспензионного продукта. Если нужно только растворить твёрдое вещество, проще может быть ёмкость растворения.",
            imageAlt: "Гранулы кальциево-аммиачной селитры на белой поверхности",
            linkLabel: "Ёмкость растворения",
          },
          {
            title: "Реагенты для очистки и процессов",
            text: "Приготовление и поддержание однородности растворов коагулянтов, корректоров pH или полимеров для очистных сооружений. Для полимерных растворов предпочтительно тихоходное перемешивание, чтобы сохранить их структуру.",
            imageAlt: "Аэротенк на станции очистки сточных вод",
            linkLabel: "Осадок сточных вод и очистка",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление реакторов с мешалкой",
        intro:
          "PRO MAKINA проектирует реакторы с мешалкой исходя из цели процесса, рабочего объёма, вязкости и плотности продукта, содержания твёрдой фазы и условий коррозии. Корпус, мешалка с приводом, уплотнение, штуцеры и точки измерения разрабатываются совместно.",
        highlights: [
          "Тип и частота вращения мешалки под продукт",
          "Мотор-редуктор, вал и подшипники",
          "Материал корпуса с учётом коррозии",
          "Доступ для обслуживания и уплотнение",
        ],
        figureAlt: "Мотор-редуктор привода мешалки и манометры на крышке реактора",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Цель процесса", text: "Смешивание, растворение, экстракция или реакция; сырьё и рецептура." },
          { title: "Объём и продукт", text: "Рабочий объём, вязкость, плотность и содержание твёрдой фазы." },
          { title: "Мешалка и привод", text: "Тип мешалки, геометрия лопастей, частота вращения, мотор-редуктор, вал и подшипники." },
          { title: "Материал и уплотнение", text: "Коррозионная стойкость, уплотнение вала и люки." },
          { title: "КИП и автоматизация", text: "Измерение температуры и уровня, штуцеры загрузки и выгрузки, интеграция в линию." },
        ],
        dataNote: "Объём реактора, частота вращения мешалки и мощность привода рассчитываются по данным продукта и процесса; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о реакторах с мешалкой",
        items: [
          {
            question: "Для чего нужен реактор с мешалкой?",
            answer:
              "Это технологическое оборудование, в котором жидкие или жидко-твёрдые компоненты перемешиваются до однородности, а температура, время и порядок загрузки контролируются согласно процессу.",
          },
          {
            question: "Как выбирается тип мешалки?",
            answer:
              "Определяющими являются вязкость, плотность, содержание твёрдой фазы и цель процесса. Для низкой вязкости рассматриваются пропеллерные или турбинные мешалки, для высокой — якорные.",
          },
          {
            question: "Работает ли реактор с мешалкой под давлением?",
            answer:
              "Не каждый реактор с мешалкой работает под давлением. Если процесс не требует давления, достаточно атмосферного исполнения; при необходимости давления отдельно рассматривается реактор под давлением.",
          },
          {
            question: "Возможен ли нагрев или охлаждение?",
            answer:
              "При необходимости нагрев или охлаждение обеспечиваются рубашкой на корпусе или змеевиком внутри. Способ и площадь поверхности определяются по данным процесса.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Цель процесса, сырьё и рецептура, рабочий объём, вязкость и плотность продукта, требования к температуре и химические свойства.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на реактор с мешалкой",
        text: "Сообщите процесс, сырьё и рабочий объём — вместе определим реактор с мешалкой.",
        mailSubject: "Запрос предложения: реактор с мешалкой",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Цель процесса и сырьё",
          "Рабочий объём или размер партии",
          "Вязкость и плотность продукта",
          "Содержание твёрдой фазы",
          "Потребность в нагреве или охлаждении",
          "Химические свойства и условия коррозии",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на реактор с мешалкой.",
          "",
          "Процесс и сырьё:",
          "Рабочий объём:",
          "Вязкость / плотность:",
          "Содержание твёрдой фазы:",
          "Требования к температуре:",
          "Химические свойства:",
        ],
      },
    },
    ar: {
      meta: {
        title: "مفاعل مزود بخلاط | مفاعلات العمليات السائلة",
        description:
          "مفاعلات مزودة بخلاط لعمليات الأسمدة السائلة وتحضير المواد الكيميائية والتجانس. يُختار نوع الخلاط وسرعته والمادة وفق المنتج.",
      },
      breadcrumbLabel: "مفاعل مزود بخلاط",
      h1: "المفاعل المزود بخلاط – عمليات سائلة تتطلب خلطًا متحكمًا به",
      productCategory: "مفاعل مزود بخلاط",
      overview: {
        imageAlt: "مفاعلان للعمليات بإدارة علوية وخطوط أنابيب على منصة",
        tagline: "مفاعل مزود بخلاط",
        keyFacts: [
          { label: "المهمة", value: "عمليات فيزيائية أو كيميائية تتطلب الخلط" },
          { label: "الخلاط", value: "النوع وشكل الشفرات والسرعة وفق المنتج" },
          { label: "الإدارة", value: "محرك مع علبة تروس وعمود ومحامل" },
          { label: "التسخين / التبريد", value: "قميص أو ملف إذا تطلبت العملية" },
        ],
        title: "خلط متجانس وظروف متحكم بها في العمليات السائلة",
        paragraphs: [
          "المفاعل المزود بخلاط وعاء عمليات تُحرَّك فيه المكونات السائلة أو السائلة-الصلبة باستمرار بواسطة خلاط لجعلها متجانسة، مع التحكم في درجة الحرارة والزمن وترتيب التلقيم كما تتطلب العملية. ويمكن استخدامه في مراحل الخلط أو الإذابة أو الاستخلاص أو التفاعل الكيميائي.",
          "يعتمد أداء الخلط أساسًا على نوع الخلاط (مروحي، توربيني، مرساة وغيرها) وقطر الشفرات وشكلها والسرعة وموضعه في الخزان والحواجز الداخلية، وتُختار هذه العناصر وفق لزوجة المنتج وكثافته ونسبة المواد الصلبة وهدف العملية.",
          "إذا تطلبت العملية تسخينًا أو تبريدًا يمكن إضافة قميص إلى الجسم أو ملف داخل الخزان. وتحدد العملية ما إذا كان المفاعل سيعمل تحت الضغط، فالمفاعلات المزودة بخلاط التي تعمل عند الضغط الجوي ليست مفاعلات ضغط.",
        ],
        note: "يُصمَّم المفاعل المزود بخلاط لتحضير الخليط تحت ظروف العملية وليس لمجرد حفظ المنتج، وعندما يكون المطلوب التخزين فقط فإن خزان التخزين هو الحل الأنسب.",
      },
      process: {
        title: "تدفق العملية في المفاعل المزود بخلاط",
        intro:
          "يوضح المخطط التدفق العام الذي تُلقَّم فيه المواد الخام إلى المفاعل وتُعالَج تحت خلط متحكم به ثم تُفرَّغ بعد التحكم في العملية، ويُحدَّد ترتيب التلقيم والزمن ودرجة الحرارة وفق وصفة المنتج.",
        note: "تُضاف دائرة التسخين أو التبريد فقط إذا تطلبت العملية ذلك، وتظهر في المخطط بخط متقطع.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تلقيم المواد الخام", text: "تُضخ السوائل وتُضاف المواد الصلبة من فتحة الغطاء وفق ترتيب الوصفة." },
          { title: "خلط متحكم به", text: "يحافظ الخلاط على تجانس الخليط بسرعة مناسبة للزوجة المنتج." },
          { title: "التحكم في العملية", text: "تُراقَب درجة الحرارة والمستوى والزمن، وتؤخذ عينات عند الحاجة." },
          { title: "تفريغ المنتج", text: "يخرج المنتج الجاهز من صمام سفلي إلى التخزين أو الترشيح أو التعبئة." },
        ],
        auxLineLabel: "خط التسخين / التبريد (عند الحاجة)",
        auxLine: [
          { title: "تسخين أو تبريد", text: "عند الحاجة يُزوَّد القميص أو الملف بوسط تسخين أو تبريد." },
          { title: "عودة الوسط", text: "يعود الوسط إلى دائرة المرافق في المصنع." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في المفاعل المزود بخلاط",
          svgDesc:
            "خط المنتج: تلقيم المواد الخام، المفاعل المزود بخلاط، التحكم في العملية، تفريغ المنتج. خط وسط التسخين أو التبريد عند الحاجة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "تلقيم المواد الخام", sub: "سوائل ومواد صلبة" }],
          drum: { title: "مفاعل مزود بخلاط", sub: "خلط متحكم به" },
          after: [
            { title: "التحكم في العملية", sub: "الحرارة والمستوى والزمن" },
            { title: "التفريغ", sub: "تخزين / تعبئة" },
          ],
          aux: {
            lane: "تسخين / تبريد (عند الحاجة)",
            tone: "heat",
            inputs: [{ title: "دخول الوسط", sub: "قميص / ملف" }],
            outputs: [{ title: "عودة الوسط", sub: "دائرة المرافق" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام المفاعل المزود بخلاط",
        items: [
          {
            title: "الأسمدة السائلة الهيومية والفولفية",
            text: "استخلاص المواد الهيومية من مصادر مثل الليوناردايت بالخلط في محلول قلوي، مع تحديد نسبة المواد الصلبة والزمن ودرجة الحرارة وفق تحليل المادة الخام وفصل الجزء غير الذائب في مرحلة لاحقة.",
            imageAlt: "ليوناردايت داكن مطحون في وعاء زجاجي",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "التركيبات السائلة والمعلّقة",
            text: "خلط المواد الخام للأسمدة مع الماء والإضافات للحصول على منتج سائل أو معلّق متجانس، وإذا كان الهدف إذابة مادة صلبة فقط فقد يكون خزان الإذابة حلًا أبسط.",
            imageAlt: "حبيبات سماد نترات الأمونيوم الكلسية على سطح أبيض",
            linkLabel: "خزان الإذابة",
          },
          {
            title: "كيماويات المعالجة والعمليات",
            text: "تحضير محاليل المخثرات ومعدلات الأس الهيدروجيني والبوليمرات المستخدمة في محطات المعالجة والحفاظ على تجانسها، مع تفضيل الخلط منخفض السرعة لمحاليل البوليمر لحماية بنيتها.",
            imageAlt: "حوض تهوية في محطة معالجة مياه الصرف",
            linkLabel: "حمأة مياه الصرف وحلول المعالجة",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع مفاعلات مزودة بخلاط مخصصة",
        intro:
          "تصمم PRO MAKINA المفاعلات المزودة بخلاط وفق هدف العملية وحجم التشغيل ولزوجة المنتج وكثافته ونسبة المواد الصلبة وظروف التآكل، مع تصميم الجسم والخلاط ونظام الإدارة والإحكام والتوصيلات ونقاط القياس معًا.",
        highlights: [
          "نوع الخلاط وسرعته وفق المنتج",
          "محرك مع علبة تروس وعمود ومحامل",
          "مادة جسم ملائمة لمقاومة التآكل",
          "سهولة الصيانة وإحكام العمود",
        ],
        figureAlt: "وحدة محرك مع علبة تروس ومقاييس ضغط على غطاء مفاعل",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "هدف العملية", text: "خلط أو إذابة أو استخلاص أو تفاعل، والمواد الخام والوصفة." },
          { title: "الحجم والمنتج", text: "حجم التشغيل واللزوجة والكثافة ونسبة المواد الصلبة." },
          { title: "الخلاط والإدارة", text: "نوع الخلاط وشكل الشفرات والسرعة والمحرك وعلبة التروس والعمود والمحامل." },
          { title: "المادة والإحكام", text: "مقاومة التآكل وإحكام العمود وفتحات الصيانة." },
          { title: "القياس والأتمتة", text: "قياس الحرارة والمستوى وتوصيلات التلقيم والتفريغ والتكامل مع المصنع." },
        ],
        dataNote: "يُحسب حجم المفاعل وسرعة الخلاط وقدرة الإدارة من بيانات المنتج والعملية، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول المفاعل المزود بخلاط",
        items: [
          {
            question: "ما استخدام المفاعل المزود بخلاط؟",
            answer:
              "هو معدة عمليات تُجعل فيها المكونات السائلة أو السائلة-الصلبة متجانسة بواسطة خلاط، مع التحكم في درجة الحرارة والزمن وترتيب التلقيم كما تتطلب العملية.",
          },
          {
            question: "كيف يُختار نوع الخلاط؟",
            answer:
              "العوامل الحاسمة هي لزوجة المنتج وكثافته ونسبة المواد الصلبة وهدف العملية؛ فتُدرس الخلاطات المروحية أو التوربينية للزوجة المنخفضة وخلاطات المرساة للزوجة العالية.",
          },
          {
            question: "هل يعمل المفاعل المزود بخلاط تحت الضغط؟",
            answer:
              "لا يعمل كل مفاعل مزود بخلاط تحت الضغط. إذا لم تتطلب العملية ضغطًا فالتصميم الجوي كافٍ، وعند الحاجة إلى الضغط يُدرس مفاعل الضغط بشكل منفصل.",
          },
          {
            question: "هل يمكن التسخين أو التبريد؟",
            answer:
              "إذا تطلبت العملية ذلك يمكن التسخين أو التبريد بقميص على الجسم أو ملف داخل الخزان، وتُحدَّد الطريقة ومساحة السطح من بيانات العملية.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "هدف العملية والمواد الخام والوصفة وحجم التشغيل ولزوجة المنتج وكثافته ومتطلبات الحرارة والخصائص الكيميائية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لمفاعل مزود بخلاط",
        text: "شاركنا عمليتك وموادك الخام وحجم التشغيل، لنحدد معًا المفاعل المزود بخلاط المناسب.",
        mailSubject: "طلب عرض سعر: مفاعل مزود بخلاط",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "هدف العملية والمواد الخام",
          "حجم التشغيل أو حجم الدفعة",
          "لزوجة المنتج وكثافته",
          "نسبة المواد الصلبة",
          "الحاجة إلى التسخين أو التبريد",
          "الخصائص الكيميائية وظروف التآكل",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمفاعل مزود بخلاط.",
          "",
          "العملية والمواد الخام:",
          "حجم التشغيل:",
          "اللزوجة / الكثافة:",
          "نسبة المواد الصلبة:",
          "متطلبات الحرارة:",
          "الخصائص الكيميائية:",
        ],
      },
    },
  },
};
