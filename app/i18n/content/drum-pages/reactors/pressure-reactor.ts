import type { DrumPageConfig } from "../types";

// Basınçlı reaktör: basınç altında yürütülmesi gereken prosesler. Proje verilerinde doğrulanmış tasarım basıncı,
// sıcaklığı, et kalınlığı, test basıncı, tasarım kodu veya sertifika bulunmadığından hiçbir değer ya da uygunluk
// beyanı (PED, CE, EN 13445, ASME vb.) verilmez. Görsellerin kaynağı doğrulanmamıştır; açıklamalar tarafsız tutulur.
const img = (file: string) => `/images/reaktor-tank/${file}`;
const app = (file: string) => `/images/tank-uygulamalari/${file}`;

export const pressureReactorPage: DrumPageConfig = {
  key: "pressureReactor",
  group: "reactorsTanks",
  trSlug: "basincli-reaktorler",
  mainImage: img("sivi11.webp"),
  applications: [
    { image: app("kimya-proses-tesisi.webp"), link: "chemicalProcess" },
    { image: app("can-gubre-pelet.webp"), link: "fertilizerPlants" },
  ],
  figure: img("sivi12.jpg"),
  gallery: [img("sivi13.webp"), img("sivi8.jpg"), img("sivi10.webp")],
  sectors: ["chemicalProcess", "fertilizerPlants"],
  resources: ["agitatedReactor", "coolingTank", "storageTank", "reactorsTanks"],
  machines: ["reactorsTanks", "dosingSystems", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Basınçlı Reaktör İmalatı | Projeye Özel Basınçlı Proses Reaktörü",
        description:
          "Basınç altında yürütülmesi gereken prosesler için projeye özel basınçlı reaktör imalatı. Tasarım basıncı, sıcaklığı ve malzeme proses verinize göre belirlenir.",
      },
      breadcrumbLabel: "Basınçlı Reaktörler",
      h1: "Basınçlı Reaktör – Basınç Altında Yürütülen Prosesler İçin Kapalı Gövde",
      productCategory: "Basınçlı Reaktör",
      overview: {
        imageAlt: "Flanşlı nozulu ve bombeli kapakları olan silindirik çelik kap gövdesi",
        tagline: "Basınçlı Reaktör",
        keyFacts: [
          { label: "Görev", value: "Basınç altında yürütülmesi gereken prosesler" },
          { label: "Tasarım basıncı ve sıcaklığı", value: "Proses verisiyle belirlenir" },
          { label: "Gövde", value: "Silindirik gövde, bombeli kapaklar, flanşlı bağlantılar" },
          { label: "Emniyet", value: "Ölçüm ve emniyet donanımı proses riskine göre" },
        ],
        title: "Basınçlı Prosesler İçin Projeye Özel Reaktör Gövdesi",
        paragraphs: [
          "Basınçlı reaktör, prosesin atmosfer basıncında yürütülemediği durumlarda kullanılan kapalı proses gövdesidir. Sıcaklıkla birlikte buhar basıncı yükselen sıvılar, gaz fazı içeren prosesler veya kapalı sistemde tutulması gereken reaksiyonlar bu gruba girer.",
          "Gövde; silindirik kabuk, bombeli kapaklar, flanşlar ve nozullardan oluşur. Et kalınlıkları tasarım basıncı ve sıcaklığı, seçilen malzeme ve korozyon payından hesaplanır. Uygulanacak tasarım kodu ve yasal belgelendirme, ekipmanın kurulacağı ülkenin mevzuatına ve proje şartnamesine göre proje başında netleştirilir.",
          "Isıtma, soğutma veya karıştırma gereksinimi prosese göre değerlendirilir. Karıştırıcı kullanılan basınçlı reaktörlerde mil sızdırmazlığı, çalışma basıncına ve proses akışkanına uygun olarak seçilir.",
        ],
        note: "Basınçlı reaktör, atmosferik karıştırma tankıyla aynı kriterlerle tasarlanmaz. Tasarım basıncı ve sıcaklığı netleşmeden gövde ölçüleri ve malzeme kalınlıkları belirlenemez.",
      },
      process: {
        title: "Basınçlı Reaktör Proses Akışı",
        intro:
          "Şema, hammaddelerin reaktöre beslendiği, kapalı gövdede kontrollü basınç ve sıcaklık altında işlendiği ve prosedüre uygun şekilde tahliye edildiği genel akışı gösterir. Adımların sırası ve çalışma koşulları prosese göre belirlenir.",
        note: "Tahliye, basıncın proses prosedüründe tanımlanan güvenli seviyeye düşürülmesinden sonra yapılır. Emniyet donanımı proses risk değerlendirmesine göre seçilir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Hammadde besleme", text: "Hammaddeler proses prosedüründe tanımlanan sırayla kapalı gövdeye alınır." },
          { title: "Kontrollü basınçlı proses", text: "Proses, tasarım sınırları içinde kalan basınç ve sıcaklıkta yürütülür." },
          { title: "Basınç ve sıcaklık kontrolü", text: "Basınç ve sıcaklık sürekli ölçülür; emniyet donanımı aşırı basınca karşı korur." },
          { title: "Prosedüre uygun tahliye", text: "Basınç güvenli seviyeye indirildikten sonra ürün sonraki adıma aktarılır." },
        ],
        auxLineLabel: "Isıtma / soğutma hattı (gerekirse)",
        auxLine: [
          { title: "Isıtma veya soğutma", text: "Proses gerektirirse ceket veya serpantine ısıtma ya da soğutma akışkanı verilir." },
          { title: "Akışkan dönüşü", text: "Akışkan tesisin yardımcı devresine geri döner." },
        ],
        flow: {
          svgTitle: "Basınçlı reaktör proses akış şeması",
          svgDesc:
            "Ürün hattı: hammadde besleme, basınçlı reaktör, basınç ve sıcaklık kontrolü, prosedüre uygun tahliye. Gerekirse ısıtma veya soğutma akışkanı hattı.",
          mainLane: "ÜRÜN HATTI",
          shape: "box",
          before: [{ title: "Hammadde besleme", sub: "Prosedüre göre" }],
          drum: { title: "BASINÇLI REAKTÖR", sub: "kapalı ve kontrollü proses" },
          after: [
            { title: "Basınç / sıcaklık", sub: "Ölçüm ve emniyet" },
            { title: "Kontrollü tahliye", sub: "Güvenli basınçta" },
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
        title: "Basınçlı Reaktör Uygulama Alanları",
        items: [
          {
            title: "Kimyasal Proses Tesisleri",
            text: "Kapalı sistemde ve basınç altında yürütülmesi gereken kimyasal proses adımları. Basınç, sıcaklık ve malzeme seçimi prosesin kimyasına ve güvenlik değerlendirmesine göre yapılır.",
            imageAlt: "Kimyasal proses tesisinde kolonlar, boru köprüleri ve yapılar",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Gübre ve Tarım Kimyasalları",
            text: "Gübre ve tarım kimyasalı üretiminde kapalı sistem veya basınç gerektiren adımlar. Atmosferik karıştırıcılı reaktörle yürütülebilen işlerde basınçlı reaktör gerekmez; seçim proses verisiyle yapılır.",
            imageAlt: "Beyaz zemin üzerinde kalsiyum amonyum nitrat gübre peletleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
        ],
      },
      design: {
        title: "Projeye Özel Basınçlı Reaktör Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA basınçlı reaktörleri müşterinin proses verisiyle doğrulanan tasarım koşullarına göre projelendirir. Gövde geometrisi, bombeli kapaklar, flanş ve nozul yerleşimi, malzeme, sızdırmazlık, ölçüm ve emniyet donanımı birlikte değerlendirilir.",
        highlights: [
          "Doğrulanmış tasarım koşullarına göre gövde",
          "Proses akışkanına uygun malzeme",
          "Basınca uygun sızdırmazlık",
          "Basınç ve sıcaklık ölçümü, emniyet donanımı",
        ],
        figureAlt: "Flanşlı nozulları ve bombeli kapağı görülen paslanmaz çelik silindirik kap",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Proses ve Ürün", text: "Prosesin amacı, hammaddeler ve proses akışkanının özellikleri." },
          { title: "Tasarım Koşulları", text: "Tasarım ve çalışma basıncı ile tasarım ve çalışma sıcaklığı." },
          { title: "Gövde ve Bağlantılar", text: "Hacim, gövde geometrisi, bombeler, flanşlar ve nozullar." },
          { title: "Malzeme", text: "Proses akışkanına uygun malzeme ve korozyon payı." },
          { title: "Emniyet ve Bakım", text: "Emniyet donanımı, ölçüm noktaları, sızdırmazlık ve muayene erişimi." },
        ],
        dataNote: "Tasarım basıncı, sıcaklık, et kalınlığı, test basıncı, tasarım kodu ve belgelendirme proje verisiyle belirlenir. Bu sayfada herhangi bir değer, sertifika veya standart uygunluğu beyan edilmez.",
      },
      gallery: {
        title: "Basınçlı Kap Gövdeleri",
        captions: [
          "Bombeli kapaklı ve flanşlı nozullu paslanmaz çelik silindirik kap",
          "Yatay konumda bombeli kapaklı silindirik kap gövdesi",
          "Bombeli kapak ile gövde arasındaki kaynak dikişi",
        ],
      },
      faq: {
        title: "Basınçlı Reaktör Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Basınçlı reaktör nedir?",
            answer:
              "Prosesin atmosfer basıncında yürütülemediği durumlarda kullanılan, basınca dayanacak şekilde tasarlanmış kapalı proses gövdesidir.",
          },
          {
            question: "Basınçlı reaktörün çalışma basıncı nedir?",
            answer:
              "Sabit bir değer yoktur. Tasarım ve çalışma basıncı ile sıcaklığı prosesinize göre belirlenir; gövde ve malzeme kalınlıkları bu değerlerden hesaplanır.",
          },
          {
            question: "Hangi tasarım kodu ve belgelendirme uygulanır?",
            answer:
              "Uygulanacak tasarım kodu ve yasal belgelendirme, ekipmanın kurulacağı ülkenin mevzuatına ve proje şartnamesine göre teklif aşamasında netleştirilir.",
          },
          {
            question: "Karıştırıcılı reaktörden farkı nedir?",
            answer:
              "Karıştırıcılı reaktörler çoğunlukla atmosfer basıncında çalışır. Basınçlı reaktör ise basınca göre hesaplanmış gövde, bağlantı, sızdırmazlık ve emniyet donanımı gerektirir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Prosesin amacı, ürün ve proses akışkanı, tasarım ve çalışma basıncı, tasarım ve çalışma sıcaklığı, hacim ve talep edilen tasarım kodu veya belgelendirme bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Basınçlı reaktör için teknik teklif alın",
        text: "Proses verileriniz ve tasarım koşullarınıza göre basınçlı reaktörü birlikte değerlendirelim.",
        mailSubject: "Basınçlı Reaktör Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Prosesin amacı ve ürün",
          "Proses akışkanı ve korozyon koşulları",
          "Tasarım ve çalışma basıncı",
          "Tasarım ve çalışma sıcaklığı",
          "Hacim ve ısıtma, soğutma veya karıştırma ihtiyacı",
          "Talep edilen tasarım kodu veya belgelendirme",
        ],
        inquiryLines: [
          "Merhaba, basınçlı reaktör için teknik teklif almak istiyorum.",
          "",
          "Proses ve ürün:",
          "Proses akışkanı:",
          "Tasarım / çalışma basıncı:",
          "Tasarım / çalışma sıcaklığı:",
          "Hacim:",
          "Tasarım kodu / belgelendirme:",
        ],
      },
    },
    en: {
      meta: {
        title: "Pressure Reactor Manufacturer | Custom Pressure Process Reactors",
        description:
          "Custom pressure reactors for processes that must run under pressure. Design pressure, temperature and material are defined from your process data.",
      },
      breadcrumbLabel: "Pressure Reactor",
      h1: "Pressure Reactor – Closed Vessel for Processes Run Under Pressure",
      productCategory: "Pressure Reactor",
      overview: {
        imageAlt: "Cylindrical steel vessel shell with a flanged nozzle and dished heads",
        tagline: "Pressure Reactor",
        keyFacts: [
          { label: "Duty", value: "Processes that must run under pressure" },
          { label: "Design pressure and temperature", value: "Defined from process data" },
          { label: "Shell", value: "Cylindrical shell, dished heads, flanged connections" },
          { label: "Safety", value: "Instruments and safety devices per process risk" },
        ],
        title: "Custom Reactor Vessels for Pressure Processes",
        paragraphs: [
          "A pressure reactor is a closed process vessel used when a process cannot be carried out at atmospheric pressure. Liquids whose vapour pressure rises with temperature, processes with a gas phase or reactions that must be kept in a closed system fall into this group.",
          "The vessel consists of a cylindrical shell, dished heads, flanges and nozzles. Wall thicknesses are calculated from design pressure and temperature, the selected material and the corrosion allowance. The design code and statutory certification to be applied are defined at the start of the project according to the regulations of the country of installation and the project specification.",
          "Heating, cooling or agitation requirements are assessed according to the process. Where an agitator is used, the shaft seal is selected for the operating pressure and the process fluid.",
        ],
        note: "A pressure reactor is not designed to the same criteria as an atmospheric mixing tank. Shell dimensions and wall thicknesses cannot be defined until design pressure and temperature are confirmed.",
      },
      process: {
        title: "Pressure Reactor Process Flow",
        intro:
          "The diagram shows the general flow in which raw materials are fed to the reactor, processed in the closed vessel under controlled pressure and temperature, and discharged according to procedure. Step order and operating conditions are defined by the process.",
        note: "Discharge takes place after pressure has been reduced to the safe level defined in the process procedure. Safety devices are selected according to the process risk assessment.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Raw material feed", text: "Raw materials enter the closed vessel in the order defined by the process procedure." },
          { title: "Controlled pressure process", text: "The process runs at a pressure and temperature within the design limits." },
          { title: "Pressure and temperature control", text: "Pressure and temperature are measured continuously; safety devices protect against overpressure." },
          { title: "Discharge per procedure", text: "Once pressure is reduced to a safe level, product is transferred to the next step." },
        ],
        auxLineLabel: "Heating / cooling line (if required)",
        auxLine: [
          { title: "Heating or cooling", text: "If required, a heating or cooling medium is supplied to the jacket or coil." },
          { title: "Medium return", text: "The medium returns to the plant utility circuit." },
        ],
        flow: {
          svgTitle: "Pressure reactor process flow diagram",
          svgDesc:
            "Product line: raw material feed, pressure reactor, pressure and temperature control, discharge per procedure. Heating or cooling medium line if required.",
          mainLane: "PRODUCT LINE",
          shape: "box",
          before: [{ title: "Raw material feed", sub: "Per procedure" }],
          drum: { title: "PRESSURE REACTOR", sub: "closed, controlled process" },
          after: [
            { title: "Pressure / temp.", sub: "Measurement, safety" },
            { title: "Controlled discharge", sub: "At safe pressure" },
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
        title: "Pressure Reactor Applications",
        items: [
          {
            title: "Chemical Process Plants",
            text: "Chemical process steps that must be carried out in a closed system under pressure. Pressure, temperature and material are selected according to the process chemistry and safety assessment.",
            imageAlt: "Columns, pipe racks and structures at a chemical process plant",
            linkLabel: "Chemical and Process Industry",
          },
          {
            title: "Fertilizers and Agrochemicals",
            text: "Steps in fertilizer and agrochemical production that require a closed system or pressure. Where the work can be done in an atmospheric agitated reactor, a pressure reactor is not needed; selection is based on process data.",
            imageAlt: "Calcium ammonium nitrate fertilizer pellets on a white surface",
            linkLabel: "Fertilizer and Granulation Plants",
          },
        ],
      },
      design: {
        title: "Custom Pressure Reactor Design and Manufacturing",
        intro:
          "PRO MAKINA engineers pressure reactors to design conditions confirmed by the customer's process data. Shell geometry, dished heads, flange and nozzle layout, material, sealing, instrumentation and safety devices are assessed together.",
        highlights: [
          "Shell designed to confirmed conditions",
          "Material suited to the process fluid",
          "Sealing suited to pressure",
          "Pressure and temperature measurement, safety devices",
        ],
        figureAlt: "Stainless steel cylindrical vessel showing flanged nozzles and a dished head",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Process and Product", text: "Process purpose, raw materials and properties of the process fluid." },
          { title: "Design Conditions", text: "Design and operating pressure, design and operating temperature." },
          { title: "Shell and Connections", text: "Volume, shell geometry, heads, flanges and nozzles." },
          { title: "Material", text: "Material suited to the process fluid and corrosion allowance." },
          { title: "Safety and Maintenance", text: "Safety devices, measuring points, sealing and inspection access." },
        ],
        dataNote: "Design pressure, temperature, wall thickness, test pressure, design code and certification are defined from project data. No values, certificates or standard conformity are declared on this page.",
      },
      gallery: {
        title: "Pressure Vessel Shells",
        captions: [
          "Stainless steel cylindrical vessel with dished heads and flanged nozzles",
          "Cylindrical vessel shell with dished heads in horizontal position",
          "Weld seam between a dished head and the shell",
        ],
      },
      faq: {
        title: "Pressure Reactor FAQ",
        items: [
          {
            question: "What is a pressure reactor?",
            answer:
              "A closed process vessel designed to withstand pressure, used when a process cannot be carried out at atmospheric pressure.",
          },
          {
            question: "What is the operating pressure of a pressure reactor?",
            answer:
              "There is no fixed value. Design and operating pressure and temperature are defined for your process; shell and wall thicknesses are calculated from these values.",
          },
          {
            question: "Which design code and certification apply?",
            answer:
              "The design code and statutory certification are defined at the quotation stage according to the regulations of the country of installation and the project specification.",
          },
          {
            question: "How does it differ from an agitated reactor?",
            answer:
              "Agitated reactors mostly operate at atmospheric pressure. A pressure reactor requires a shell, connections, sealing and safety devices calculated for pressure.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Process purpose, product and process fluid, design and operating pressure, design and operating temperature, volume and the required design code or certification.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a pressure reactor",
        text: "Share your process data and design conditions, and we will assess the pressure reactor together with you.",
        mailSubject: "Pressure Reactor Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Process purpose and product",
          "Process fluid and corrosion conditions",
          "Design and operating pressure",
          "Design and operating temperature",
          "Volume and heating, cooling or agitation needs",
          "Required design code or certification",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a pressure reactor.",
          "",
          "Process and product:",
          "Process fluid:",
          "Design / operating pressure:",
          "Design / operating temperature:",
          "Volume:",
          "Design code / certification:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Реактор под давлением | Реакторы для процессов под давлением",
        description:
          "Реакторы под давлением по проекту для процессов, которые должны протекать под давлением. Расчётное давление, температура и материал — по вашим данным.",
      },
      breadcrumbLabel: "Реактор под давлением",
      h1: "Реактор под давлением – закрытый аппарат для процессов под давлением",
      productCategory: "Реактор под давлением",
      overview: {
        imageAlt: "Цилиндрический стальной корпус с фланцевым штуцером и эллиптическими днищами",
        tagline: "Реактор под давлением",
        keyFacts: [
          { label: "Назначение", value: "Процессы, требующие работы под давлением" },
          { label: "Расчётные давление и температура", value: "Определяются по данным процесса" },
          { label: "Корпус", value: "Цилиндрическая обечайка, днища, фланцевые соединения" },
          { label: "Безопасность", value: "КИП и предохранительные устройства по рискам процесса" },
        ],
        title: "Корпуса реакторов под давлением по проекту",
        paragraphs: [
          "Реактор под давлением — закрытый технологический аппарат, применяемый, когда процесс невозможно вести при атмосферном давлении. Сюда относятся жидкости, давление паров которых растёт с температурой, процессы с газовой фазой и реакции, которые должны протекать в закрытой системе.",
          "Корпус состоит из цилиндрической обечайки, днищ, фланцев и штуцеров. Толщина стенок рассчитывается по расчётному давлению и температуре, выбранному материалу и прибавке на коррозию. Применяемые нормы проектирования и обязательная сертификация определяются в начале проекта по законодательству страны установки и техническому заданию.",
          "Потребность в нагреве, охлаждении или перемешивании оценивается по процессу. При наличии мешалки уплотнение вала подбирается под рабочее давление и технологическую среду.",
        ],
        note: "Реактор под давлением не проектируется по тем же критериям, что атмосферная ёмкость с мешалкой. Размеры корпуса и толщины стенок невозможно определить без подтверждённых расчётных давления и температуры.",
      },
      process: {
        title: "Технологическая схема реактора под давлением",
        intro:
          "Схема показывает общий поток: сырьё загружается в реактор, обрабатывается в закрытом корпусе при контролируемых давлении и температуре и выгружается по регламенту. Порядок стадий и рабочие условия определяются процессом.",
        note: "Выгрузка выполняется после снижения давления до безопасного уровня, определённого технологическим регламентом. Предохранительные устройства выбираются по оценке рисков процесса.",
        mainLineLabel: "Линия продукта",
        productLine: [
          { title: "Загрузка сырья", text: "Сырьё подаётся в закрытый корпус в порядке, установленном регламентом." },
          { title: "Контролируемый процесс под давлением", text: "Процесс ведётся при давлении и температуре в пределах расчётных значений." },
          { title: "Контроль давления и температуры", text: "Давление и температура измеряются непрерывно; предохранительные устройства защищают от превышения давления." },
          { title: "Выгрузка по регламенту", text: "После снижения давления до безопасного уровня продукт передаётся на следующую стадию." },
        ],
        auxLineLabel: "Линия нагрева / охлаждения (при необходимости)",
        auxLine: [
          { title: "Нагрев или охлаждение", text: "При необходимости в рубашку или змеевик подаётся тепло- или хладоноситель." },
          { title: "Возврат среды", text: "Среда возвращается во вспомогательный контур завода." },
        ],
        flow: {
          svgTitle: "Технологическая схема реактора под давлением",
          svgDesc:
            "Линия продукта: загрузка сырья, реактор под давлением, контроль давления и температуры, выгрузка по регламенту. Линия нагрева или охлаждения при необходимости.",
          mainLane: "ЛИНИЯ ПРОДУКТА",
          shape: "box",
          before: [{ title: "Загрузка сырья", sub: "По регламенту" }],
          drum: { title: "РЕАКТОР ПОД ДАВЛЕНИЕМ", sub: "закрытый процесс" },
          after: [
            { title: "Давление / t°", sub: "Контроль, защита" },
            { title: "Выгрузка", sub: "При безоп. давлении" },
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
        title: "Области применения реакторов под давлением",
        items: [
          {
            title: "Химические производства",
            text: "Стадии химических процессов, которые должны проводиться в закрытой системе под давлением. Давление, температура и материал выбираются по химии процесса и оценке безопасности.",
            imageAlt: "Колонны, эстакады и сооружения химического производства",
            linkLabel: "Химическая и перерабатывающая промышленность",
          },
          {
            title: "Удобрения и агрохимия",
            text: "Стадии производства удобрений и агрохимикатов, требующие закрытой системы или давления. Если задачу решает атмосферный реактор с мешалкой, реактор под давлением не нужен; выбор делается по данным процесса.",
            imageAlt: "Гранулы кальциево-аммиачной селитры на белой поверхности",
            linkLabel: "Заводы удобрений и грануляции",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление реакторов под давлением",
        intro:
          "PRO MAKINA проектирует реакторы под давлением по расчётным условиям, подтверждённым технологическими данными заказчика. Геометрия корпуса, днища, расположение фланцев и штуцеров, материал, уплотнения, КИП и предохранительные устройства рассматриваются совместно.",
        highlights: [
          "Корпус по подтверждённым расчётным условиям",
          "Материал под технологическую среду",
          "Уплотнения, рассчитанные на давление",
          "Контроль давления и температуры, защита",
        ],
        figureAlt: "Цилиндрический аппарат из нержавеющей стали с фланцевыми штуцерами и днищем",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Процесс и продукт", text: "Цель процесса, сырьё и свойства технологической среды." },
          { title: "Расчётные условия", text: "Расчётное и рабочее давление, расчётная и рабочая температура." },
          { title: "Корпус и штуцеры", text: "Объём, геометрия корпуса, днища, фланцы и штуцеры." },
          { title: "Материал", text: "Материал под технологическую среду и прибавка на коррозию." },
          { title: "Безопасность и обслуживание", text: "Предохранительные устройства, точки измерения, уплотнения и доступ для осмотра." },
        ],
        dataNote: "Расчётное давление, температура, толщина стенки, пробное давление, нормы проектирования и сертификация определяются по данным проекта. На этой странице не заявляются значения, сертификаты или соответствие стандартам.",
      },
      gallery: {
        title: "Корпуса сосудов под давлением",
        captions: [
          "Цилиндрический аппарат из нержавеющей стали с днищами и фланцевыми штуцерами",
          "Цилиндрический корпус с днищами в горизонтальном положении",
          "Сварной шов между днищем и обечайкой",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о реакторах под давлением",
        items: [
          {
            question: "Что такое реактор под давлением?",
            answer:
              "Закрытый технологический аппарат, рассчитанный на давление и применяемый, когда процесс нельзя вести при атмосферном давлении.",
          },
          {
            question: "Какое рабочее давление у реактора?",
            answer:
              "Фиксированного значения нет. Расчётные и рабочие давление и температура определяются для вашего процесса; по ним рассчитываются корпус и толщины стенок.",
          },
          {
            question: "Какие нормы проектирования и сертификация применяются?",
            answer:
              "Нормы проектирования и обязательная сертификация определяются на стадии предложения по законодательству страны установки и техническому заданию.",
          },
          {
            question: "Чем он отличается от реактора с мешалкой?",
            answer:
              "Реакторы с мешалкой чаще работают при атмосферном давлении. Реактору под давлением нужны корпус, штуцеры, уплотнения и предохранительные устройства, рассчитанные на давление.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Цель процесса, продукт и технологическая среда, расчётное и рабочее давление, расчётная и рабочая температура, объём и требуемые нормы или сертификация.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на реактор под давлением",
        text: "Сообщите технологические данные и расчётные условия — вместе рассмотрим реактор под давлением.",
        mailSubject: "Запрос предложения: реактор под давлением",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Цель процесса и продукт",
          "Технологическая среда и условия коррозии",
          "Расчётное и рабочее давление",
          "Расчётная и рабочая температура",
          "Объём и потребность в нагреве, охлаждении или перемешивании",
          "Требуемые нормы проектирования или сертификация",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на реактор под давлением.",
          "",
          "Процесс и продукт:",
          "Технологическая среда:",
          "Расчётное / рабочее давление:",
          "Расчётная / рабочая температура:",
          "Объём:",
          "Нормы / сертификация:",
        ],
      },
    },
    ar: {
      meta: {
        title: "مفاعل الضغط | مفاعلات عمليات مخصصة تعمل تحت الضغط",
        description:
          "مفاعلات ضغط مخصصة للعمليات التي يجب أن تتم تحت الضغط. يُحدَّد ضغط التصميم ودرجة حرارته والمادة من بيانات عمليتك.",
      },
      breadcrumbLabel: "مفاعل الضغط",
      h1: "مفاعل الضغط – وعاء مغلق للعمليات التي تتم تحت الضغط",
      productCategory: "مفاعل ضغط",
      overview: {
        imageAlt: "جسم وعاء فولاذي أسطواني بفوهة مشفّهة ونهايات مقعّرة",
        tagline: "مفاعل ضغط",
        keyFacts: [
          { label: "المهمة", value: "عمليات يجب أن تتم تحت الضغط" },
          { label: "ضغط التصميم ودرجة حرارته", value: "يُحدَّدان من بيانات العملية" },
          { label: "الجسم", value: "غلاف أسطواني ونهايات مقعّرة وتوصيلات مشفّهة" },
          { label: "السلامة", value: "أجهزة القياس والسلامة وفق مخاطر العملية" },
        ],
        title: "أوعية مفاعلات مخصصة لعمليات الضغط",
        paragraphs: [
          "مفاعل الضغط وعاء عمليات مغلق يُستخدم عندما لا يمكن تنفيذ العملية عند الضغط الجوي، ويشمل ذلك السوائل التي يرتفع ضغط بخارها مع الحرارة والعمليات التي تحتوي على طور غازي والتفاعلات التي يجب أن تبقى في نظام مغلق.",
          "يتكون الوعاء من غلاف أسطواني ونهايات مقعّرة وشفاه وفوهات، وتُحسب سماكات الجدران من ضغط التصميم ودرجة حرارته والمادة المختارة وسماحية التآكل. ويُحدَّد كود التصميم والشهادات النظامية المطلوبة في بداية المشروع وفق لوائح بلد التركيب ومواصفات المشروع.",
          "تُقيَّم متطلبات التسخين أو التبريد أو الخلط وفق العملية، وعند استخدام خلاط يُختار إحكام العمود بما يناسب ضغط التشغيل وسائل العملية.",
        ],
        note: "لا يُصمَّم مفاعل الضغط بالمعايير نفسها لخزان الخلط الجوي، ولا يمكن تحديد أبعاد الجسم وسماكات الجدران قبل تأكيد ضغط التصميم ودرجة حرارته.",
      },
      process: {
        title: "تدفق العملية في مفاعل الضغط",
        intro:
          "يوضح المخطط التدفق العام الذي تُلقَّم فيه المواد الخام إلى المفاعل وتُعالَج في الوعاء المغلق تحت ضغط ودرجة حرارة متحكم بهما ثم تُفرَّغ وفق الإجراء المعتمد، وتُحدِّد العملية ترتيب المراحل وظروف التشغيل.",
        note: "يتم التفريغ بعد خفض الضغط إلى المستوى الآمن المحدد في إجراء العملية، وتُختار أجهزة السلامة وفق تقييم مخاطر العملية.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "تلقيم المواد الخام", text: "تدخل المواد الخام إلى الوعاء المغلق بالترتيب المحدد في إجراء العملية." },
          { title: "عملية ضغط متحكم بها", text: "تجري العملية عند ضغط ودرجة حرارة ضمن حدود التصميم." },
          { title: "التحكم في الضغط والحرارة", text: "يُقاس الضغط ودرجة الحرارة باستمرار، وتحمي أجهزة السلامة من الضغط الزائد." },
          { title: "التفريغ وفق الإجراء", text: "بعد خفض الضغط إلى مستوى آمن يُنقل المنتج إلى المرحلة التالية." },
        ],
        auxLineLabel: "خط التسخين / التبريد (عند الحاجة)",
        auxLine: [
          { title: "تسخين أو تبريد", text: "عند الحاجة يُزوَّد القميص أو الملف بوسط تسخين أو تبريد." },
          { title: "عودة الوسط", text: "يعود الوسط إلى دائرة المرافق في المصنع." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في مفاعل الضغط",
          svgDesc:
            "خط المنتج: تلقيم المواد الخام، مفاعل الضغط، التحكم في الضغط والحرارة، التفريغ وفق الإجراء. خط وسط التسخين أو التبريد عند الحاجة.",
          mainLane: "خط المنتج",
          shape: "box",
          before: [{ title: "تلقيم المواد الخام", sub: "وفق الإجراء" }],
          drum: { title: "مفاعل الضغط", sub: "عملية مغلقة ومتحكم بها" },
          after: [
            { title: "الضغط والحرارة", sub: "القياس والسلامة" },
            { title: "تفريغ متحكم به", sub: "عند ضغط آمن" },
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
        title: "مجالات استخدام مفاعل الضغط",
        items: [
          {
            title: "مصانع العمليات الكيميائية",
            text: "مراحل العمليات الكيميائية التي يجب تنفيذها في نظام مغلق وتحت الضغط، مع اختيار الضغط ودرجة الحرارة والمادة وفق كيمياء العملية وتقييم السلامة.",
            imageAlt: "أعمدة وجسور أنابيب ومنشآت في مصنع عمليات كيميائية",
            linkLabel: "الصناعات الكيميائية والعمليات",
          },
          {
            title: "الأسمدة والكيماويات الزراعية",
            text: "مراحل إنتاج الأسمدة والكيماويات الزراعية التي تتطلب نظامًا مغلقًا أو ضغطًا. وإذا أمكن تنفيذ العمل في مفاعل خلط جوي فلا حاجة إلى مفاعل ضغط، ويتم الاختيار وفق بيانات العملية.",
            imageAlt: "حبيبات سماد نترات الأمونيوم الكلسية على سطح أبيض",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع مفاعلات ضغط مخصصة",
        intro:
          "تصمم PRO MAKINA مفاعلات الضغط وفق ظروف تصميم مؤكدة ببيانات عملية العميل، مع تقييم شكل الجسم والنهايات المقعّرة وتوزيع الشفاه والفوهات والمادة والإحكام وأجهزة القياس والسلامة معًا.",
        highlights: [
          "جسم مصمم وفق ظروف مؤكدة",
          "مادة مناسبة لسائل العملية",
          "إحكام مناسب للضغط",
          "قياس الضغط والحرارة وأجهزة السلامة",
        ],
        figureAlt: "وعاء أسطواني من الفولاذ المقاوم للصدأ تظهر فيه فوهات مشفّهة ونهاية مقعّرة",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "العملية والمنتج", text: "هدف العملية والمواد الخام وخصائص سائل العملية." },
          { title: "ظروف التصميم", text: "ضغط التصميم والتشغيل ودرجة حرارة التصميم والتشغيل." },
          { title: "الجسم والتوصيلات", text: "الحجم وشكل الجسم والنهايات والشفاه والفوهات." },
          { title: "المادة", text: "مادة مناسبة لسائل العملية وسماحية التآكل." },
          { title: "السلامة والصيانة", text: "أجهزة السلامة ونقاط القياس والإحكام وسهولة الفحص." },
        ],
        dataNote: "يُحدَّد ضغط التصميم ودرجة الحرارة وسماكة الجدار وضغط الاختبار وكود التصميم والشهادات من بيانات المشروع، ولا يُعلَن في هذه الصفحة عن أي قيم أو شهادات أو مطابقة لمعايير.",
      },
      gallery: {
        title: "أجسام أوعية الضغط",
        captions: [
          "وعاء أسطواني من الفولاذ المقاوم للصدأ بنهايات مقعّرة وفوهات مشفّهة",
          "جسم وعاء أسطواني بنهايات مقعّرة في وضع أفقي",
          "خط اللحام بين النهاية المقعّرة والغلاف",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول مفاعل الضغط",
        items: [
          {
            question: "ما هو مفاعل الضغط؟",
            answer: "وعاء عمليات مغلق مصمم لتحمّل الضغط، يُستخدم عندما لا يمكن تنفيذ العملية عند الضغط الجوي.",
          },
          {
            question: "ما ضغط تشغيل مفاعل الضغط؟",
            answer:
              "لا توجد قيمة ثابتة؛ إذ يُحدَّد ضغط ودرجة حرارة التصميم والتشغيل وفق عمليتك، وتُحسب منها سماكات الجسم والجدران.",
          },
          {
            question: "ما كود التصميم والشهادات المطبقة؟",
            answer: "يُحدَّد كود التصميم والشهادات النظامية في مرحلة العرض وفق لوائح بلد التركيب ومواصفات المشروع.",
          },
          {
            question: "ما الفرق بينه وبين المفاعل المزود بخلاط؟",
            answer:
              "تعمل المفاعلات المزودة بخلاط غالبًا عند الضغط الجوي، بينما يتطلب مفاعل الضغط جسمًا وتوصيلات وإحكامًا وأجهزة سلامة محسوبة للضغط.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "هدف العملية والمنتج وسائل العملية وضغط التصميم والتشغيل ودرجة حرارة التصميم والتشغيل والحجم وكود التصميم أو الشهادات المطلوبة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لمفاعل ضغط",
        text: "شاركنا بيانات عمليتك وظروف التصميم، لنقيّم معًا مفاعل الضغط المناسب.",
        mailSubject: "طلب عرض سعر: مفاعل ضغط",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "هدف العملية والمنتج",
          "سائل العملية وظروف التآكل",
          "ضغط التصميم والتشغيل",
          "درجة حرارة التصميم والتشغيل",
          "الحجم والحاجة إلى التسخين أو التبريد أو الخلط",
          "كود التصميم أو الشهادات المطلوبة",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لمفاعل ضغط.",
          "",
          "العملية والمنتج:",
          "سائل العملية:",
          "ضغط التصميم / التشغيل:",
          "درجة حرارة التصميم / التشغيل:",
          "الحجم:",
          "كود التصميم / الشهادات:",
        ],
      },
    },
  },
};
