import type { DrumPageConfig } from "./types";

// Özel tambur: standart ürün ailesi dışındaki prosesler için projeye özel tambur mühendisliği.
// Referans proje veya performans iddiası yoktur; sayfa, müşterinin paylaşması gereken teknik verileri öne çıkarır.
export const customDrumPage: DrumPageConfig = {
  key: "customDrum",
  trSlug: "ozel-tambur",
  mainImage: "/images/tambur kurutma/tamkurutma14.jpg",
  applications: [
    { image: "/images/tambur kurutma/tamkurutma17.jpg", link: "chemicalProcess" },
    { image: "/images/tambur kurutma/tamkurutma2.jpg", link: "drumSystems" },
    { image: "/images/tambur kurutma/tamkurutma15.jpg", link: "contact" },
  ],
  sectors: ["chemicalProcess", "mining", "fertilizerPlants", "sludgeDrying"],
  resources: ["rotaryDryer", "granulatorDrum", "coolingDrum", "reactorsTanks"],
  machines: ["conveying", "dosingSystems", "dustCollection", "screeningSystems"],
  texts: {
    tr: {
      meta: {
        title: "Özel Tambur İmalatı | Projeye Özel Döner Tambur | PRO MAKİNA",
        description:
          "Standart dışı ürün, sıcaklık, karıştırma veya reaksiyon ihtiyaçları için projeye özel döner tambur tasarımı ve imalatı. Proses verinize göre mühendislik çözümü.",
      },
      breadcrumbLabel: "Özel Tambur",
      h1: "Özel Tambur – Projeye Özel Döner Tambur Tasarımı ve İmalatı",
      productCategory: "Projeye Özel Döner Tambur",
      overview: {
        imageAlt: "Kurutma tesisinde döner tambur ve yardımcı ekipmanların üstten görünümü",
        tagline: "Projeye Özel Döner Tambur",
        keyFacts: [
          { label: "Kapsam", value: "Standart dışı ürün ve prosesler" },
          { label: "Tasarım esası", value: "Müşterinin proses verisi" },
          { label: "İmalat", value: "Gövde, iç geometri, tahrik, şase" },
          { label: "Entegrasyon", value: "Yeni hat veya mevcut tesis" },
        ],
        title: "Proses Hedefinden Başlayan Tambur Mühendisliği",
        paragraphs: [
          "Özel tambur çözümleri; standart granülasyon, kurutma, soğutma, kaplama veya karıştırma senaryolarının ötesinde, ürüne ve tesise özgü gereksinimler için geliştirilir. Farklı bir ürün davranışı, yüksek sıcaklık, kimyasal uyum, özel iç geometri veya sınırlı saha ölçüleri bu ihtiyaçların tipik nedenleridir.",
          "Tasarım, tambur ölçülerinden değil proses hedefinden başlar: Ürünün tamburda ne kadar kalması, nasıl hareket etmesi, hangi ortamla temas etmesi ve hangi koşulda çıkması gerektiği tanımlandıktan sonra gövde, iç elemanlar, tahrik ve yardımcı ekipman seçilir.",
          "Proje verisi ne kadar net olursa tasarım da o kadar doğru olur. Bu nedenle aşağıdaki mühendislik kartlarında, özel tambur talebinde paylaşılması gereken teknik bilgiler özetlenmiştir.",
        ],
        note: "Özel tambur projelerinde ürün davranışı belirsizse, tasarımdan önce numune çalışması veya mevcut tesisteki işletme verilerinin incelenmesi önerilir.",
      },
      process: {
        title: "Özel Tambur Proje Akışı",
        intro:
          "Şema, özel bir tambur projesinin veri toplamadan devreye almaya kadar izlediği tipik adımları gösterir. Tamburun hattaki yeri ve yardımcı ekipmanlar projeye göre tanımlanır.",
        note: "Mevcut bir tesise entegrasyonda saha ölçüleri, bağlantı noktaları ve duruş süresi planlaması proje başında birlikte değerlendirilir.",
        mainLineLabel: "Proje adımları",
        productLine: [
          { title: "Proses verisinin toplanması", text: "Ürün, kapasite, hedef ve saha bilgileri teknik olarak netleştirilir." },
          { title: "Mühendislik ve tasarım", text: "Tambur ölçüleri, iç geometri ve çalışma senaryosu belirlenir." },
          { title: "İmalat", text: "Gövde, iç elemanlar, tahrik grubu ve şase tasarıma göre üretilir." },
          { title: "Montaj ve devreye alma", text: "Tambur sahada kurulur, bağlantıları yapılır ve devreye alınır." },
        ],
        flow: {
          svgTitle: "Özel tambur proje akış şeması",
          svgDesc: "Proje adımları: proses verisi, mühendislik ve tasarım, özel tambur imalatı, montaj ve devreye alma.",
          mainLane: "PROJE ADIMLARI",
          before: [
            { title: "Proses verisi", sub: "Ürün, kapasite, hedef" },
            { title: "Mühendislik", sub: "Hesap ve tasarım" },
          ],
          drum: { title: "ÖZEL TAMBUR", sub: "projeye özel imalat" },
          after: [{ title: "Devreye alma", sub: "Montaj, bağlantılar" }],
        },
      },
      applications: {
        title: "Özel Tambur Çözümleri",
        items: [
          {
            title: "Standart Dışı Ürün ve Prosesler",
            text: "Kimyasal, termal veya özel karıştırma gerektiren ve standart tambur ailesine uymayan prosesler için gövde, iç geometri ve malzeme seçimi projeye göre yapılır.",
            imageAlt: "Atölyede taşıyıcı üzerinde duran büyük çaplı tambur gövdesi",
            linkLabel: "Kimya ve Proses Endüstrisi",
          },
          {
            title: "Mevcut Hat için Tambur Revizyonu",
            text: "Kapasite artışı, ürün değişikliği veya yıpranmış tamburun yenilenmesi gibi durumlarda, mevcut bağlantı noktaları ve saha ölçüleri korunarak yeni tambur tasarlanır.",
            imageAlt: "Atölyede tahrik grubu monte edilmiş döner tambur",
            linkLabel: "Tambur Sistemleri",
          },
          {
            title: "Özel Mekanik Bileşenler",
            text: "Ring, taşıyıcı makara, yataklama ve tahrik grupları gibi mekanik bileşenler tambur yüküne ve çalışma koşullarına göre seçilir; özel talepler teknik görüşmeyle netleştirilir.",
            imageAlt: "Atölyede paletler üzerinde tambur taşıyıcı makaraları ve yatak gövdeleri",
            linkLabel: "Teknik görüşme talebi",
          },
        ],
      },
      design: {
        title: "Özel Tambur Talebinde Paylaşılması Gereken Bilgiler",
        intro:
          "Özel tambur tasarımı, müşteriden alınan proses verilerinin doğruluğuna dayanır. Aşağıdaki başlıklar, ilk teknik değerlendirme için gereken bilgileri özetler; eksik veriler teknik görüşmede birlikte tamamlanabilir.",
        highlights: ["Proses hedefinden başlayan tasarım", "Ürüne özel iç geometri", "Özel malzeme ve kaplama seçenekleri", "Yeni hat veya mevcut tesise uyum"],
        dataTitle: "Mühendislik Kartları",
        dataItems: [
          { title: "Ürün ve Malzeme", text: "Ürün türü, tane boyutu, yoğunluk, nem, yapışma ve aşındırıcılık." },
          { title: "Proses Hedefi", text: "Tamburda yapılacak işlem ve çıkışta beklenen ürün koşulu." },
          { title: "Kapasite ve Çalışma", text: "Saatlik veya günlük kapasite, sürekli ya da partili çalışma." },
          { title: "Sıcaklık ve Ortam", text: "Proses sıcaklığı, gaz veya buhar teması, kimyasal etkiler." },
          { title: "Saha ve Entegrasyon", text: "Yerleşim ölçüleri, mevcut ekipman ve bağlantı noktaları." },
        ],
        dataNote: "Mevcut bir tamburun yenilenmesinde eski tamburun ölçüleri, çizimleri ve işletme sorunları paylaşılırsa değerlendirme hızlanır.",
      },
      faq: {
        title: "Özel Tambur Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Hangi durumlarda özel tambur gerekir?",
            answer:
              "Ürün davranışı, sıcaklık, kimyasal ortam, iç geometri veya saha ölçüleri standart tambur ailesiyle karşılanamıyorsa özel tambur tasarımı gerekir.",
          },
          {
            question: "Özel tambur tasarımı nasıl başlar?",
            answer:
              "Tasarım, ürün ve proses hedefinin tanımlanmasıyla başlar. Kapasite, sıcaklık, kalış süresi ve saha verileri netleştikten sonra tambur ölçüleri ve iç geometri belirlenir.",
          },
          {
            question: "Mevcut bir tambur yenilenebilir mi?",
            answer:
              "Evet. Mevcut bağlantı noktaları, temel ölçüleri ve işletme sorunları incelenerek yeni tambur, hattaki diğer ekipmanlarla uyumlu olacak şekilde tasarlanabilir.",
          },
          {
            question: "Ürün davranışı bilinmiyorsa ne yapılır?",
            answer:
              "Ürün davranışı belirsizse numune çalışması veya benzer bir tesisteki işletme verilerinin incelenmesi önerilir; tasarım parametreleri bu verilere göre belirlenir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün bilgileri, proses hedefi, kapasite, sıcaklık ve ortam koşulları ile saha ve entegrasyon bilgileri temel verilerdir; eksik başlıklar teknik görüşmede tamamlanabilir.",
          },
        ],
      },
      cta: {
        title: "Özel tambur ihtiyacınızı birlikte tanımlayalım",
        text: "Ürününüzü, proses hedefinizi ve saha koşullarınızı paylaşın; özel tambur için teknik değerlendirmeyi birlikte başlatalım.",
        mailSubject: "Özel Tambur Teknik Değerlendirme Talebi",
        requiredTitle: "Teknik Değerlendirme İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü ve fiziksel özellikleri",
          "Tamburda yapılacak işlem ve hedef",
          "Kapasite ve çalışma rejimi",
          "Proses sıcaklığı ve ortam koşulları",
          "Saha ölçüleri ve mevcut ekipman",
          "Varsa mevcut tambur çizimleri",
        ],
        inquiryLines: [
          "Merhaba, özel tambur için teknik değerlendirme talep ediyorum.",
          "",
          "Ürün:",
          "Proses hedefi:",
          "Kapasite:",
          "Sıcaklık / ortam koşulları:",
          "Saha bilgisi:",
          "Mevcut tambur (varsa):",
        ],
      },
    },
    en: {
      meta: {
        title: "Custom Drum Manufacturer | Project-Specific Drums",
        description:
          "Project-specific rotary drum design and manufacturing for non-standard products, temperatures, mixing or reaction requirements. Engineering based on your process data.",
      },
      breadcrumbLabel: "Custom Drum",
      h1: "Custom Drum – Project-Specific Rotary Drum Design and Manufacturing",
      productCategory: "Project-Specific Rotary Drum",
      overview: {
        imageAlt: "Aerial view of a rotary drum and auxiliary equipment in a drying plant",
        tagline: "Project-Specific Rotary Drum",
        keyFacts: [
          { label: "Scope", value: "Non-standard products and processes" },
          { label: "Design basis", value: "Customer process data" },
          { label: "Manufacturing", value: "Shell, internals, drive, frame" },
          { label: "Integration", value: "New line or existing plant" },
        ],
        title: "Drum Engineering that Starts from the Process Target",
        paragraphs: [
          "Custom drum solutions are developed for product- and plant-specific requirements beyond standard granulation, drying, cooling, coating or mixing scenarios. Unusual product behaviour, high temperature, chemical compatibility, special internal geometry or limited site dimensions are typical reasons.",
          "Design starts from the process target rather than drum dimensions: once it is defined how long the product must stay in the drum, how it must move, which medium it contacts and in what condition it must leave, the shell, internals, drive and auxiliary equipment are selected.",
          "The clearer the project data, the more accurate the design. The engineering cards below therefore summarise the technical information that should be shared with a custom drum enquiry.",
        ],
        note: "If product behaviour is uncertain in a custom drum project, sample work or a review of operating data from an existing plant is recommended before design.",
      },
      process: {
        title: "Custom Drum Project Flow",
        intro:
          "The diagram shows the typical steps of a custom drum project from data collection to commissioning. The drum's position in the line and its auxiliary equipment are defined per project.",
        note: "For integration into an existing plant, site dimensions, connection points and shutdown planning are assessed together at the start of the project.",
        mainLineLabel: "Project steps",
        productLine: [
          { title: "Collecting process data", text: "Product, capacity, target and site information are clarified technically." },
          { title: "Engineering and design", text: "Drum dimensions, internal geometry and operating scenario are defined." },
          { title: "Manufacturing", text: "Shell, internals, drive unit and frame are produced to the design." },
          { title: "Installation and commissioning", text: "The drum is installed on site, connected and commissioned." },
        ],
        flow: {
          svgTitle: "Custom drum project flow diagram",
          svgDesc: "Project steps: process data, engineering and design, custom drum manufacturing, installation and commissioning.",
          mainLane: "PROJECT STEPS",
          before: [
            { title: "Process data", sub: "Product, capacity, target" },
            { title: "Engineering", sub: "Calculation and design" },
          ],
          drum: { title: "CUSTOM DRUM", sub: "project-specific build" },
          after: [{ title: "Commissioning", sub: "Installation, connections" }],
        },
      },
      applications: {
        title: "Custom Drum Solutions",
        items: [
          {
            title: "Non-Standard Products and Processes",
            text: "For chemical, thermal or special mixing processes that do not fit the standard drum family, shell, internal geometry and materials are selected per project.",
            imageAlt: "Large-diameter drum shell on supports in a workshop",
            linkLabel: "Chemical Process Industry",
          },
          {
            title: "Drum Replacement for an Existing Line",
            text: "For capacity increases, product changes or renewal of a worn drum, a new drum is designed while keeping existing connection points and site dimensions.",
            imageAlt: "Rotary drum with drive unit fitted in a workshop",
            linkLabel: "Drum Systems",
          },
          {
            title: "Special Mechanical Components",
            text: "Mechanical components such as riding rings, support rollers, bearings and drive units are selected for the drum load and operating conditions; special requests are clarified in a technical meeting.",
            imageAlt: "Drum support rollers and bearing housings on pallets in a workshop",
            linkLabel: "Request a technical meeting",
          },
        ],
      },
      design: {
        title: "Information to Share with a Custom Drum Enquiry",
        intro:
          "Custom drum design relies on accurate process data from the customer. The headings below summarise the information needed for an initial technical assessment; missing data can be completed together in a technical meeting.",
        highlights: ["Design that starts from the process target", "Product-specific internal geometry", "Special material and lining options", "Fit for a new line or existing plant"],
        dataTitle: "Engineering Cards",
        dataItems: [
          { title: "Product and Material", text: "Product type, particle size, density, moisture, stickiness and abrasiveness." },
          { title: "Process Target", text: "The operation in the drum and the expected product condition at discharge." },
          { title: "Capacity and Operation", text: "Hourly or daily capacity, continuous or batch operation." },
          { title: "Temperature and Environment", text: "Process temperature, gas or steam contact, chemical effects." },
          { title: "Site and Integration", text: "Layout dimensions, existing equipment and connection points." },
        ],
        dataNote: "When replacing an existing drum, sharing its dimensions, drawings and operating problems speeds up the assessment.",
      },
      faq: {
        title: "Custom Drum FAQ",
        items: [
          {
            question: "When is a custom drum needed?",
            answer:
              "A custom drum is needed when product behaviour, temperature, chemical environment, internal geometry or site dimensions cannot be met by the standard drum family.",
          },
          {
            question: "How does custom drum design start?",
            answer:
              "Design starts with defining the product and process target. Once capacity, temperature, residence time and site data are clear, drum dimensions and internal geometry are determined.",
          },
          {
            question: "Can an existing drum be replaced?",
            answer:
              "Yes. By reviewing existing connection points, foundation dimensions and operating problems, a new drum can be designed to match the other equipment in the line.",
          },
          {
            question: "What if product behaviour is unknown?",
            answer:
              "If product behaviour is uncertain, sample work or a review of operating data from a similar plant is recommended; design parameters are then based on that data.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Product data, process target, capacity, temperature and environmental conditions and site and integration details; missing items can be completed in a technical meeting.",
          },
        ],
      },
      cta: {
        title: "Let's define your custom drum requirement together",
        text: "Share your product, process target and site conditions, and we will start the technical assessment for a custom drum together.",
        mailSubject: "Custom Drum Technical Assessment Request",
        requiredTitle: "Information Needed for a Technical Assessment",
        requiredItems: [
          "Product type and physical properties",
          "Operation in the drum and target",
          "Capacity and operating regime",
          "Process temperature and environment",
          "Site dimensions and existing equipment",
          "Existing drum drawings, if any",
        ],
        inquiryLines: [
          "Hello, I would like a technical assessment for a custom drum.",
          "",
          "Product:",
          "Process target:",
          "Capacity:",
          "Temperature / environment:",
          "Site information:",
          "Existing drum (if any):",
        ],
      },
    },
    ru: {
      meta: {
        title: "Специальный барабан | Вращающиеся барабаны под проект",
        description:
          "Проектирование и изготовление вращающихся барабанов под нестандартные продукты, температуры, смешивание или реакции. Инженерное решение по вашим технологическим данным.",
      },
      breadcrumbLabel: "Специальный барабан",
      h1: "Специальный барабан – проектирование и изготовление под проект",
      productCategory: "Вращающийся барабан под проект",
      overview: {
        imageAlt: "Вид сверху на вращающийся барабан и вспомогательное оборудование сушильной установки",
        tagline: "Вращающийся барабан под проект",
        keyFacts: [
          { label: "Область", value: "Нестандартные продукты и процессы" },
          { label: "Основа проекта", value: "Технологические данные заказчика" },
          { label: "Изготовление", value: "Корпус, внутренние элементы, привод, рама" },
          { label: "Интеграция", value: "Новая линия или действующее предприятие" },
        ],
        title: "Проектирование барабана от технологической цели",
        paragraphs: [
          "Специальные барабаны разрабатываются для требований конкретного продукта и предприятия, выходящих за рамки стандартной грануляции, сушки, охлаждения, покрытия или смешивания. Типичные причины — необычное поведение продукта, высокая температура, химическая совместимость, особая внутренняя геометрия или ограниченные размеры площадки.",
          "Проект начинается не с размеров барабана, а с технологической цели: после определения того, сколько продукт должен находиться в барабане, как двигаться, с какой средой контактировать и в каком состоянии выходить, подбираются корпус, внутренние элементы, привод и вспомогательное оборудование.",
          "Чем точнее данные проекта, тем точнее конструкция. Поэтому в инженерных карточках ниже перечислены технические сведения, которые следует передать вместе с запросом.",
        ],
        note: "Если поведение продукта не определено, до проектирования рекомендуется испытание образцов или анализ эксплуатационных данных действующего предприятия.",
      },
      process: {
        title: "Этапы проекта специального барабана",
        intro:
          "Схема показывает типовые этапы проекта специального барабана — от сбора данных до ввода в эксплуатацию. Место барабана в линии и вспомогательное оборудование определяются по проекту.",
        note: "При интеграции в действующее предприятие размеры площадки, точки подключения и график остановки оцениваются в начале проекта.",
        mainLineLabel: "Этапы проекта",
        productLine: [
          { title: "Сбор технологических данных", text: "Уточняются продукт, производительность, цель и данные площадки." },
          { title: "Инжиниринг и проектирование", text: "Определяются размеры, внутренняя геометрия и режим работы." },
          { title: "Изготовление", text: "Корпус, внутренние элементы, привод и рама изготавливаются по проекту." },
          { title: "Монтаж и пуск", text: "Барабан устанавливается на площадке, подключается и вводится в работу." },
        ],
        flow: {
          svgTitle: "Схема этапов проекта специального барабана",
          svgDesc: "Этапы проекта: технологические данные, инжиниринг и проектирование, изготовление специального барабана, монтаж и пуск.",
          mainLane: "ЭТАПЫ ПРОЕКТА",
          before: [
            { title: "Данные", sub: "Продукт и цель" },
            { title: "Инжиниринг", sub: "Расчёт и проект" },
          ],
          drum: { title: "СПЕЦБАРАБАН", sub: "изготовление под проект" },
          after: [{ title: "Пуск", sub: "Монтаж, подключения" }],
        },
      },
      applications: {
        title: "Решения на базе специальных барабанов",
        items: [
          {
            title: "Нестандартные продукты и процессы",
            text: "Для химических, термических процессов или особого смешивания, не вписывающихся в стандартный ряд, корпус, внутренняя геометрия и материалы подбираются по проекту.",
            imageAlt: "Корпус барабана большого диаметра на опорах в цехе",
            linkLabel: "Химическая промышленность",
          },
          {
            title: "Замена барабана действующей линии",
            text: "При увеличении производительности, смене продукта или замене изношенного барабана новый барабан проектируется с сохранением точек подключения и размеров площадки.",
            imageAlt: "Вращающийся барабан с установленным приводом в цехе",
            linkLabel: "Барабанные системы",
          },
          {
            title: "Специальные механические узлы",
            text: "Бандажи, опорные ролики, подшипниковые узлы и приводы подбираются по нагрузке барабана и условиям работы; особые требования уточняются на технической встрече.",
            imageAlt: "Опорные ролики и корпуса подшипников барабана на поддонах в цехе",
            linkLabel: "Запросить техническую консультацию",
          },
        ],
      },
      design: {
        title: "Какие данные передать с запросом на специальный барабан",
        intro:
          "Проект специального барабана опирается на точные технологические данные заказчика. Ниже перечислены сведения, необходимые для первичной технической оценки; недостающие данные можно уточнить на технической встрече.",
        highlights: ["Проект от технологической цели", "Внутренняя геометрия под продукт", "Специальные материалы и футеровки", "Для новой линии или действующего объекта"],
        dataTitle: "Инженерные карточки",
        dataItems: [
          { title: "Продукт и материал", text: "Вид продукта, крупность, плотность, влажность, липкость, абразивность." },
          { title: "Технологическая цель", text: "Операция в барабане и ожидаемое состояние продукта на выходе." },
          { title: "Производительность и режим", text: "Часовая или суточная производительность, режим работы." },
          { title: "Температура и среда", text: "Температура процесса, контакт с газом или паром, химическое воздействие." },
          { title: "Площадка и интеграция", text: "Размеры, имеющееся оборудование и точки подключения." },
        ],
        dataNote: "При замене действующего барабана передача его размеров, чертежей и эксплуатационных проблем ускоряет оценку.",
      },
      faq: {
        title: "Часто задаваемые вопросы о специальном барабане",
        items: [
          {
            question: "Когда нужен специальный барабан?",
            answer:
              "Специальный барабан нужен, если поведение продукта, температура, химическая среда, внутренняя геометрия или размеры площадки не укладываются в стандартный ряд барабанов.",
          },
          {
            question: "С чего начинается проектирование?",
            answer:
              "Проектирование начинается с определения продукта и технологической цели. После уточнения производительности, температуры, времени пребывания и данных площадки определяются размеры и внутренняя геометрия.",
          },
          {
            question: "Можно ли заменить действующий барабан?",
            answer:
              "Да. После анализа точек подключения, размеров фундамента и эксплуатационных проблем новый барабан проектируется в соответствии с остальным оборудованием линии.",
          },
          {
            question: "Что делать, если поведение продукта неизвестно?",
            answer:
              "Рекомендуется испытание образцов или анализ данных эксплуатации аналогичного объекта; параметры проекта определяются на основе этих данных.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Данные продукта, технологическая цель, производительность, температура и условия среды, а также данные площадки и интеграции; недостающее уточняется на технической встрече.",
          },
        ],
      },
      cta: {
        title: "Определим требования к специальному барабану вместе",
        text: "Сообщите продукт, технологическую цель и условия площадки — начнём техническую оценку специального барабана.",
        mailSubject: "Запрос технической оценки: специальный барабан",
        requiredTitle: "Данные для технической оценки",
        requiredItems: [
          "Вид продукта и физические свойства",
          "Операция в барабане и цель",
          "Производительность и режим работы",
          "Температура процесса и среда",
          "Размеры площадки и имеющееся оборудование",
          "Чертежи действующего барабана (при наличии)",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническую оценку специального барабана.",
          "",
          "Продукт:",
          "Технологическая цель:",
          "Производительность:",
          "Температура / среда:",
          "Данные площадки:",
          "Действующий барабан (при наличии):",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة مخصصة | تصميم أسطوانات دوّارة حسب المشروع",
        description:
          "تصميم وتصنيع أسطوانات دوّارة مخصصة للمنتجات والحرارة ومتطلبات الخلط أو التفاعل غير القياسية. حل هندسي مبني على بيانات عمليتك.",
      },
      breadcrumbLabel: "أسطوانة مخصصة",
      h1: "أسطوانة مخصصة – تصميم وتصنيع أسطوانات دوّارة حسب المشروع",
      productCategory: "أسطوانة دوّارة حسب المشروع",
      overview: {
        imageAlt: "منظر علوي لأسطوانة دوّارة ومعدات مساعدة في منشأة تجفيف",
        tagline: "أسطوانة دوّارة حسب المشروع",
        keyFacts: [
          { label: "النطاق", value: "منتجات وعمليات غير قياسية" },
          { label: "أساس التصميم", value: "بيانات عملية العميل" },
          { label: "التصنيع", value: "الجسم والعناصر الداخلية والإدارة والهيكل" },
          { label: "التكامل", value: "خط جديد أو منشأة قائمة" },
        ],
        title: "هندسة أسطوانات تبدأ من هدف العملية",
        paragraphs: [
          "تُطوَّر حلول الأسطوانات المخصصة لمتطلبات خاصة بالمنتج والمنشأة تتجاوز سيناريوهات التحبيب أو التجفيف أو التبريد أو التغليف أو الخلط القياسية. ومن الأسباب النموذجية سلوك منتج غير معتاد أو حرارة عالية أو توافق كيميائي أو شكل داخلي خاص أو محدودية أبعاد الموقع.",
          "يبدأ التصميم من هدف العملية لا من أبعاد الأسطوانة: فبعد تحديد المدة التي يجب أن يبقاها المنتج داخل الأسطوانة وطريقة حركته والوسط الذي يلامسه والحالة التي يجب أن يخرج بها، يُختار الجسم والعناصر الداخلية ونظام الإدارة والمعدات المساعدة.",
          "كلما كانت بيانات المشروع أوضح كان التصميم أدق. لذلك تلخص البطاقات الهندسية أدناه المعلومات الفنية التي ينبغي مشاركتها مع طلب الأسطوانة المخصصة.",
        ],
        note: "إذا كان سلوك المنتج غير معروف في مشروع أسطوانة مخصصة، يُنصح بتجارب على العينات أو بمراجعة بيانات تشغيل منشأة قائمة قبل التصميم.",
      },
      process: {
        title: "مراحل مشروع الأسطوانة المخصصة",
        intro:
          "يوضح المخطط المراحل النموذجية لمشروع أسطوانة مخصصة من جمع البيانات حتى التشغيل. ويُحدَّد موقع الأسطوانة في الخط ومعداتها المساعدة حسب المشروع.",
        note: "عند التكامل مع منشأة قائمة تُقيَّم أبعاد الموقع ونقاط الربط وتخطيط التوقف معًا في بداية المشروع.",
        mainLineLabel: "مراحل المشروع",
        productLine: [
          { title: "جمع بيانات العملية", text: "تُوضَّح بيانات المنتج والسعة والهدف والموقع فنيًا." },
          { title: "الهندسة والتصميم", text: "تُحدَّد أبعاد الأسطوانة وشكلها الداخلي وسيناريو التشغيل." },
          { title: "التصنيع", text: "يُصنَّع الجسم والعناصر الداخلية ووحدة الإدارة والهيكل وفق التصميم." },
          { title: "التركيب والتشغيل", text: "تُركَّب الأسطوانة في الموقع وتُوصَل وتُشغَّل." },
        ],
        flow: {
          svgTitle: "مخطط مراحل مشروع الأسطوانة المخصصة",
          svgDesc: "مراحل المشروع: بيانات العملية، الهندسة والتصميم، تصنيع الأسطوانة المخصصة، التركيب والتشغيل.",
          mainLane: "مراحل المشروع",
          before: [
            { title: "بيانات العملية", sub: "المنتج والسعة والهدف" },
            { title: "الهندسة", sub: "الحساب والتصميم" },
          ],
          drum: { title: "أسطوانة مخصصة", sub: "تصنيع حسب المشروع" },
          after: [{ title: "التشغيل", sub: "التركيب والتوصيلات" }],
        },
      },
      applications: {
        title: "حلول الأسطوانات المخصصة",
        items: [
          {
            title: "منتجات وعمليات غير قياسية",
            text: "في العمليات الكيميائية أو الحرارية أو عمليات الخلط الخاصة التي لا تناسب عائلة الأسطوانات القياسية، يُختار الجسم والشكل الداخلي والمواد حسب المشروع.",
            imageAlt: "جسم أسطوانة كبيرة القطر على حوامل داخل ورشة",
            linkLabel: "الصناعات الكيميائية",
          },
          {
            title: "استبدال أسطوانة في خط قائم",
            text: "عند زيادة السعة أو تغيير المنتج أو تجديد أسطوانة متآكلة، تُصمَّم أسطوانة جديدة مع الحفاظ على نقاط الربط وأبعاد الموقع القائمة.",
            imageAlt: "أسطوانة دوّارة مركّب عليها وحدة الإدارة داخل ورشة",
            linkLabel: "أنظمة الأسطوانات",
          },
          {
            title: "مكونات ميكانيكية خاصة",
            text: "تُختار المكونات الميكانيكية مثل حلقات الدوران وبكرات الارتكاز والمحامل ووحدات الإدارة وفق حمل الأسطوانة وظروف التشغيل، وتُوضَّح الطلبات الخاصة في اجتماع فني.",
            imageAlt: "بكرات ارتكاز الأسطوانة وأغلفة المحامل على منصات داخل ورشة",
            linkLabel: "طلب اجتماع فني",
          },
        ],
      },
      design: {
        title: "المعلومات المطلوبة مع طلب الأسطوانة المخصصة",
        intro:
          "يعتمد تصميم الأسطوانة المخصصة على دقة بيانات العملية المقدمة من العميل. وتلخص العناوين أدناه المعلومات اللازمة للتقييم الفني الأولي، ويمكن استكمال البيانات الناقصة معًا في اجتماع فني.",
        highlights: ["تصميم يبدأ من هدف العملية", "شكل داخلي حسب المنتج", "خيارات مواد وبطانات خاصة", "ملاءمة لخط جديد أو منشأة قائمة"],
        dataTitle: "البطاقات الهندسية",
        dataItems: [
          { title: "المنتج والمادة", text: "نوع المنتج وحجم الجسيمات والكثافة والرطوبة والالتصاق والكشط." },
          { title: "هدف العملية", text: "العملية داخل الأسطوانة وحالة المنتج المتوقعة عند الخروج." },
          { title: "السعة والتشغيل", text: "السعة بالساعة أو اليومية، تشغيل مستمر أو على دفعات." },
          { title: "الحرارة والبيئة", text: "حرارة العملية والتماس مع الغاز أو البخار والتأثيرات الكيميائية." },
          { title: "الموقع والتكامل", text: "أبعاد المخطط والمعدات القائمة ونقاط الربط." },
        ],
        dataNote: "عند استبدال أسطوانة قائمة، تسرّع مشاركة أبعادها ورسوماتها ومشكلات تشغيلها عملية التقييم.",
      },
      faq: {
        title: "أسئلة شائعة حول الأسطوانة المخصصة",
        items: [
          {
            question: "متى تلزم أسطوانة مخصصة؟",
            answer:
              "تلزم الأسطوانة المخصصة عندما لا تفي عائلة الأسطوانات القياسية بسلوك المنتج أو الحرارة أو البيئة الكيميائية أو الشكل الداخلي أو أبعاد الموقع.",
          },
          {
            question: "كيف يبدأ تصميم الأسطوانة المخصصة؟",
            answer:
              "يبدأ التصميم بتحديد المنتج وهدف العملية، وبعد اتضاح السعة والحرارة وزمن المكوث وبيانات الموقع تُحدَّد أبعاد الأسطوانة وشكلها الداخلي.",
          },
          {
            question: "هل يمكن استبدال أسطوانة قائمة؟",
            answer:
              "نعم. بمراجعة نقاط الربط وأبعاد الأساسات ومشكلات التشغيل القائمة يمكن تصميم أسطوانة جديدة تتوافق مع بقية معدات الخط.",
          },
          {
            question: "ماذا لو كان سلوك المنتج غير معروف؟",
            answer:
              "يُنصح بتجارب على العينات أو بمراجعة بيانات تشغيل منشأة مماثلة، ثم تُحدَّد معاملات التصميم بناءً على هذه البيانات.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "بيانات المنتج وهدف العملية والسعة وظروف الحرارة والبيئة وبيانات الموقع والتكامل، ويمكن استكمال الناقص منها في اجتماع فني.",
          },
        ],
      },
      cta: {
        title: "لنحدد معًا متطلبات أسطوانتك المخصصة",
        text: "شاركنا المنتج وهدف العملية وظروف الموقع، لنبدأ معًا التقييم الفني للأسطوانة المخصصة.",
        mailSubject: "طلب تقييم فني: أسطوانة مخصصة",
        requiredTitle: "المعلومات المطلوبة للتقييم الفني",
        requiredItems: [
          "نوع المنتج وخصائصه الفيزيائية",
          "العملية داخل الأسطوانة والهدف",
          "السعة ونظام التشغيل",
          "حرارة العملية والبيئة",
          "أبعاد الموقع والمعدات القائمة",
          "رسومات الأسطوانة القائمة إن وجدت",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في تقييم فني لأسطوانة مخصصة.",
          "",
          "المنتج:",
          "هدف العملية:",
          "السعة:",
          "الحرارة / البيئة:",
          "معلومات الموقع:",
          "الأسطوانة القائمة (إن وجدت):",
        ],
      },
    },
  },
};
