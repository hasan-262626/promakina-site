import type { DrumPageConfig } from "../types";

// Siklon ayırıcı: tozlu gazdaki partiküllerin dönen akış ve santrifüj etkisiyle ayrılması (mevcut "cyclones" rotası).
// Nihai filtre değildir; filtre torbası, pulse jet veya sulu yıkama işlevi yoktur. Ayırma verimi, basınç kaybı veya
// debi değeri verilmez. Görsellerin lisans kaydı yok; siklon galerisindeki toz7 (torbalı filtre) ve toz3 (fan) kullanılmadı.
const img = (file: string) => `/images/siklon/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;

export const cyclonePage: DrumPageConfig = {
  key: "cyclones",
  group: "dustCollection",
  trSlug: "siklon-ayiricilar",
  mainImage: img("siklon2.jpg"),
  applications: [
    { image: dry("ham-perlit.webp"), link: "rotaryDryer" },
    { image: dry("kirec-tasi.webp"), link: "mining" },
    { image: dry("ahsap-talasi.webp"), link: "pulseJetFilter" },
  ],
  figure: img("toz9.jpg"),
  sectors: ["mining", "fertilizerPlants", "recycling"],
  resources: ["pulseJetFilter", "wetScrubber", "rotaryDryer", "dustCollection"],
  machines: ["dustCollection", "drumSystems", "conveying"],
  texts: {
    tr: {
      meta: {
        title: "Siklon Ayırıcı İmalatı | Endüstriyel Siklon Toz Ayırıcı | PRO MAKİNA",
        description:
          "Kurutma, mineral ve dökme malzeme proseslerinde tozlu gazdan partikül ayırmak için endüstriyel siklon imalatı. Geometri gaz ve toz verisine göre seçilir.",
      },
      breadcrumbLabel: "Siklon Ayırıcılar",
      h1: "Siklon Ayırıcı – Santrifüj Etkisiyle Tozlu Gazdan Partikül Ayırma",
      productCategory: "Siklon Ayırıcı",
      overview: {
        imageAlt: "Atölyede imalat aşamasındaki büyük çaplı siklon gövdesi ve teğetsel giriş",
        tagline: "Siklon Ayırıcı",
        keyFacts: [
          { label: "Ayırma prensibi", value: "Dönen akış ve santrifüj etkisi" },
          { label: "Hareketli parça", value: "Gövdede hareketli parça yok" },
          { label: "Görev", value: "Ön ayırma ve toz yükünün azaltılması" },
          { label: "Toz tahliyesi", value: "Alt bunker ve hava kilidi" },
        ],
        title: "Tozlu Gaz Akışında Partiküllerin Ön Ayrılması",
        paragraphs: [
          "Siklonda tozlu gaz, silindirik gövdeye teğetsel bir girişten girer ve gövde ile konik bölüm boyunca spiral bir akış oluşturur. Santrifüj etkisiyle dışa savrulan partiküller gövde duvarına çarpar, duvar boyunca aşağı kayarak alt bunkere düşer. Temizlenen gaz ise merkezde yukarı dönen akışla üst çıkış borusundan ayrılır.",
          "Ayırma performansını belirleyen başlıca unsurlar; gaz debisi ve giriş hızı, partikül boyutu ve yoğunluğu, gövde çapı, konik bölüm ve çıkış borusu geometrisidir. Daha yüksek ayırma için hızın artırılması basınç kaybını da artırdığından, siklon fanla birlikte değerlendirilir.",
          "Siklonlar özellikle iri ve yoğun partiküllerde etkilidir; ince tozların bir kısmı gazla birlikte siklonu terk edebilir. Aşındırıcı tozlarda giriş ve konik bölüm, aşınmaya dayanıklı malzeme veya astarla korunabilir.",
        ],
        note: "Siklon her koşulda nihai filtre değildir. Emisyon hedefleri için siklon sonrasında jet pulse filtre veya prosese uygun başka bir arıtma aşaması gerekebilir.",
      },
      process: {
        title: "Siklon Ayırıcı Proses Akışı",
        intro:
          "Şema, tozlu gazın siklona girdiği, dönen akış ve santrifüj etkisiyle partiküllerin ayrıldığı, toplanan tozun alt bunkerden tahliye edildiği ve gazın sonraki filtre veya fan aşamasına yönlendirildiği akışı gösterir.",
        note: "Birden fazla siklon paralel veya seri kullanılabilir; seçim gaz debisi, partikül dağılımı ve izin verilen basınç kaybına göre yapılır.",
        mainLineLabel: "Gaz hattı",
        productLine: [
          { title: "Teğetsel giriş", text: "Tozlu gaz siklon gövdesine teğetsel girişten girerek dönmeye başlar." },
          { title: "Santrifüj ayırma", text: "Dışa savrulan partiküller duvar boyunca aşağı ilerler." },
          { title: "Gaz çıkışı", text: "Temizlenen gaz merkezdeki üst çıkış borusundan ayrılır." },
          { title: "Sonraki aşama", text: "Gaz gerektiğinde filtreye, ardından fan ve bacaya yönlendirilir." },
        ],
        auxLineLabel: "Toz tahliyesi",
        auxLine: [
          { title: "Alt bunkerde toplama", text: "Ayrılan partiküller konik bölümden alt bunkere düşer." },
          { title: "Kontrollü tahliye", text: "Toz, hava kilidiyle gaz kaçağı olmadan tahliye edilir veya prosese döndürülür." },
        ],
        flow: {
          svgTitle: "Siklon ayırıcı proses akış şeması",
          svgDesc: "Gaz hattı: tozlu gaz girişi, siklon ayırıcı, gaz çıkışı ve filtre veya fan. Toz tahliyesi: alt bunker ve hava kilidi.",
          mainLane: "GAZ HATTI",
          shape: "box",
          before: [{ title: "Tozlu gaz", sub: "Proses egzozu" }],
          drum: { title: "SİKLON AYIRICI", sub: "santrifüj ayırma" },
          after: [
            { title: "Filtre", sub: "Gerekirse" },
            { title: "Fan / baca", sub: "Gaz çıkışı" },
          ],
          aux: {
            lane: "TOZ TAHLİYESİ",
            tone: "air",
            inputs: [],
            outputs: [
              { title: "Alt bunker", sub: "Ayrılan toz" },
              { title: "Hava kilidi", sub: "Tahliye / geri dönüş" },
            ],
          },
        },
      },
      applications: {
        title: "Siklon Ayırıcı Uygulama Alanları",
        items: [
          {
            title: "Kurutma Tamburu Egzozu",
            text: "Perlit, kum ve benzeri minerallerin kurutulmasında egzoz gazıyla taşınan ürünün ön ayrılması ve prosese geri kazanılması. İnce toz için filtre aşaması ayrıca değerlendirilir.",
            imageAlt: "Kırılmış ve elenmiş ham perlit",
            linkLabel: "Kurutma Tamburu",
          },
          {
            title: "Mineral Prosesleri",
            text: "Öğütme ve pnömatik taşıma hatlarında yüksek toz yükünün azaltılması. Aşındırıcı tozlarda gövde ve konik bölüm aşınmaya karşı korunur.",
            imageAlt: "Kırılmış kireç taşı parçaları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Filtre Öncesi Ön Ayırma",
            text: "Talaş gibi iri ve hafif partiküllerin filtreden önce ayrılarak filtre torbalarının yükünün azaltılması. Son filtrasyon jet pulse filtreyle yapılır.",
            imageAlt: "Tesis içinde ahşap talaşı yığınları",
            linkLabel: "Jet Pulse Filtreler",
          },
        ],
      },
      design: {
        title: "Projeye Özel Siklon Ayırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA siklon ayırıcıları gaz debisi, sıcaklığı, toz yükü ve partikül özelliklerine göre projelendirir. Giriş geometrisi, gövde çapı ve konik bölüm, çıkış borusu, alt bunker ve tahliye düzeni ile fan ve kanal bağlantıları birlikte tasarlanır.",
        highlights: ["Gaz debisine göre gövde geometrisi", "Basınç kaybı ve fan uyumu", "Aşınmaya dayanıklı giriş ve konik bölüm", "Gaz sızdırmaz alt tahliye"],
        figureAlt: "Torbalı filtrenin önünde ön ayırıcı olarak kullanılan siklonlar",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Gaz Debisi", text: "Gaz debisi, sıcaklığı ve nemi." },
          { title: "Partikül Özellikleri", text: "Toz yükü, tane boyutu dağılımı ve yoğunluk." },
          { title: "Gövde Geometrisi", text: "Giriş tipi, gövde çapı, konik bölüm ve çıkış borusu." },
          { title: "Basınç Kaybı", text: "İzin verilen basınç kaybı ve fan ile sistem uyumu." },
          { title: "Aşınma ve Tahliye", text: "Aşınma koruması, alt bunker ve hava kilidi." },
        ],
        dataNote: "Siklon ölçüleri, ayırma verimi ve basınç kaybı gaz ve toz verisine göre hesaplanır; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Siklon Ayırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Siklon ayırıcı nasıl çalışır?",
            answer:
              "Tozlu gaz teğetsel girişle gövdede dönmeye başlar; santrifüj etkisiyle dışa savrulan partiküller duvar boyunca aşağı iner ve bunkerden alınır, gaz merkezden yukarı çıkar.",
          },
          {
            question: "Siklon tek başına yeterli midir?",
            answer:
              "İri ve yoğun partiküllerde etkilidir, ancak ince tozların bir kısmı gazla çıkabilir. Emisyon hedefleri için sonrasında jet pulse filtre veya başka bir arıtma aşaması gerekebilir.",
          },
          {
            question: "Basınç kaybı neden önemlidir?",
            answer: "Siklonda ayırma için gereken gaz hızı basınç kaybı oluşturur; bu kayıp fan seçimini ve enerji tüketimini doğrudan etkiler.",
          },
          {
            question: "Aşındırıcı tozlarda ne yapılır?",
            answer: "Giriş ve konik bölüm gibi aşınmanın yoğun olduğu bölgeler aşınmaya dayanıklı malzeme veya astarla korunur.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Gaz debisi, sıcaklık, toz yükü, tane boyutu dağılımı, toz yoğunluğu ve izin verilen basınç kaybı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Siklon ayırıcı için teknik teklif alın",
        text: "Gaz debiniz ve tozunuzun özelliklerine göre siklon ayırıcıyı birlikte netleştirelim.",
        mailSubject: "Siklon Ayırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Gaz debisi (m³/saat)", "Gaz sıcaklığı", "Toz yükü", "Tane boyutu dağılımı", "Toz yoğunluğu ve aşındırıcılığı", "İzin verilen basınç kaybı"],
        inquiryLines: [
          "Merhaba, siklon ayırıcı için teknik teklif almak istiyorum.",
          "",
          "Gaz debisi (m³/saat):",
          "Gaz sıcaklığı:",
          "Toz türü ve yükü:",
          "Tane boyutu:",
          "Basınç kaybı sınırı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Cyclone Separator Manufacturer | Industrial Dust Cyclones",
        description:
          "Industrial cyclone separators for removing particles from dusty gas in drying, mineral and bulk processes. Geometry and material are set from gas and dust data.",
      },
      breadcrumbLabel: "Cyclone Separator",
      h1: "Cyclone Separator – Centrifugal Particle Separation from Dusty Gas",
      productCategory: "Cyclone Separator",
      overview: {
        imageAlt: "Large-diameter cyclone body with tangential inlet in the workshop",
        tagline: "Cyclone Separator",
        keyFacts: [
          { label: "Separation principle", value: "Rotating flow and centrifugal effect" },
          { label: "Moving parts", value: "None in the cyclone body" },
          { label: "Duty", value: "Pre-separation and dust load reduction" },
          { label: "Dust discharge", value: "Bottom hopper and rotary valve" },
        ],
        title: "Pre-Separation of Particles in a Dusty Gas Stream",
        paragraphs: [
          "In a cyclone, dusty gas enters the cylindrical body through a tangential inlet and forms a spiral flow along the body and cone. Particles thrown outwards by the centrifugal effect hit the wall, slide down and fall into the bottom hopper, while the cleaned gas leaves through the top outlet pipe in an upward central vortex.",
          "Separation performance mainly depends on gas flow and inlet velocity, particle size and density, body diameter, cone and outlet pipe geometry. Because higher velocity for better separation also raises pressure drop, the cyclone is assessed together with the fan.",
          "Cyclones are especially effective for coarse and dense particles; part of the fine dust can leave with the gas. For abrasive dust, inlet and cone can be protected with wear-resistant material or liners.",
        ],
        note: "A cyclone is not always a final filter. To meet emission targets, a pulse jet filter or another suitable treatment stage may be needed downstream.",
      },
      process: {
        title: "Cyclone Separator Process Flow",
        intro:
          "The diagram shows the flow in which dusty gas enters the cyclone, particles are separated by rotating flow and centrifugal effect, collected dust is discharged from the bottom hopper and the gas is routed to the next filter or fan stage.",
        note: "Several cyclones can be used in parallel or in series; selection depends on gas flow, particle distribution and allowable pressure drop.",
        mainLineLabel: "Gas line",
        productLine: [
          { title: "Tangential inlet", text: "Dusty gas enters the cyclone body tangentially and starts to rotate." },
          { title: "Centrifugal separation", text: "Particles thrown outwards move down along the wall." },
          { title: "Gas outlet", text: "Cleaned gas leaves through the central top outlet pipe." },
          { title: "Next stage", text: "If required, gas is routed to a filter, then to the fan and stack." },
        ],
        auxLineLabel: "Dust discharge",
        auxLine: [
          { title: "Collection in the hopper", text: "Separated particles fall from the cone into the bottom hopper." },
          { title: "Controlled discharge", text: "Dust is discharged via a rotary valve without gas leakage or returned to the process." },
        ],
        flow: {
          svgTitle: "Cyclone separator process flow diagram",
          svgDesc: "Gas line: dusty gas inlet, cyclone separator, gas outlet and filter or fan. Dust discharge: bottom hopper and rotary valve.",
          mainLane: "GAS LINE",
          shape: "box",
          before: [{ title: "Dusty gas", sub: "Process exhaust" }],
          drum: { title: "CYCLONE SEPARATOR", sub: "centrifugal separation" },
          after: [
            { title: "Filter", sub: "If required" },
            { title: "Fan / stack", sub: "Gas outlet" },
          ],
          aux: {
            lane: "DUST DISCHARGE",
            tone: "air",
            inputs: [],
            outputs: [
              { title: "Bottom hopper", sub: "Separated dust" },
              { title: "Rotary valve", sub: "Discharge / return" },
            ],
          },
        },
      },
      applications: {
        title: "Cyclone Separator Applications",
        items: [
          {
            title: "Rotary Dryer Exhaust",
            text: "Pre-separating product carried by exhaust gas when drying perlite, sand and similar minerals, and recovering it to the process. A filter stage for fine dust is assessed separately.",
            imageAlt: "Crushed and screened raw perlite",
            linkLabel: "Rotary Dryer",
          },
          {
            title: "Mineral Processes",
            text: "Reducing high dust loads in grinding and pneumatic conveying lines. For abrasive dust, the body and cone are protected against wear.",
            imageAlt: "Crushed limestone pieces",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Pre-Separation Before a Filter",
            text: "Separating coarse, light particles such as wood shavings before the filter to reduce the load on the filter bags. Final filtration is done by a pulse jet filter.",
            imageAlt: "Piles of wood shavings inside a facility",
            linkLabel: "Pulse Jet Dust Collector",
          },
        ],
      },
      design: {
        title: "Custom Cyclone Separator Design and Manufacturing",
        intro:
          "PRO MAKINA engineers cyclone separators around gas flow, temperature, dust load and particle properties. Inlet geometry, body diameter and cone, outlet pipe, bottom hopper and discharge, and fan and duct connections are designed together.",
        highlights: ["Body geometry sized to gas flow", "Pressure drop and fan match", "Wear-resistant inlet and cone", "Gas-tight bottom discharge"],
        figureAlt: "Cyclones used as pre-separators in front of a bag filter",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Gas Flow", text: "Gas flow, temperature and moisture." },
          { title: "Particle Properties", text: "Dust load, size distribution and density." },
          { title: "Body Geometry", text: "Inlet type, body diameter, cone and outlet pipe." },
          { title: "Pressure Drop", text: "Allowable pressure drop and match with the fan." },
          { title: "Wear and Discharge", text: "Wear protection, bottom hopper and rotary valve." },
        ],
        dataNote: "Cyclone dimensions, separation efficiency and pressure drop are calculated from gas and dust data; no generic values are stated on this page.",
      },
      faq: {
        title: "Cyclone Separator FAQ",
        items: [
          {
            question: "How does a cyclone separator work?",
            answer: "Dusty gas enters tangentially and rotates in the body; particles thrown outwards move down the wall and are collected in the hopper, while gas leaves upwards through the centre.",
          },
          {
            question: "Is a cyclone sufficient on its own?",
            answer: "It is effective for coarse and dense particles, but part of the fine dust can leave with the gas. A pulse jet filter or other treatment may be needed downstream for emission targets.",
          },
          {
            question: "Why does pressure drop matter?",
            answer: "The gas velocity needed for separation creates pressure drop, which directly affects fan selection and energy consumption.",
          },
          {
            question: "What about abrasive dust?",
            answer: "High-wear areas such as the inlet and cone are protected with wear-resistant material or liners.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Gas flow, temperature, dust load, particle size distribution, dust density and allowable pressure drop.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a cyclone separator",
        text: "Share your gas flow and dust properties, and we will define the cyclone separator together with you.",
        mailSubject: "Cyclone Separator Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Gas flow (m³/h)", "Gas temperature", "Dust load", "Particle size distribution", "Dust density and abrasiveness", "Allowable pressure drop"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a cyclone separator.",
          "",
          "Gas flow (m³/h):",
          "Gas temperature:",
          "Dust type and load:",
          "Particle size:",
          "Pressure drop limit:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Циклонный сепаратор | Промышленные пылеулавливающие циклоны",
        description:
          "Промышленные циклоны для отделения частиц из запылённого газа в сушке, переработке минералов и сыпучих материалов. Геометрия и материал — по данным газа и пыли.",
      },
      breadcrumbLabel: "Циклонный сепаратор",
      h1: "Циклонный сепаратор – центробежное отделение частиц из запылённого газа",
      productCategory: "Циклонный сепаратор",
      overview: {
        imageAlt: "Корпус циклона большого диаметра с тангенциальным входом в цехе",
        tagline: "Циклонный сепаратор",
        keyFacts: [
          { label: "Принцип разделения", value: "Вращающийся поток и центробежный эффект" },
          { label: "Подвижные части", value: "В корпусе отсутствуют" },
          { label: "Назначение", value: "Предварительная очистка и снижение запылённости" },
          { label: "Выгрузка пыли", value: "Нижний бункер и шлюзовой затвор" },
        ],
        title: "Предварительное отделение частиц из запылённого газового потока",
        paragraphs: [
          "В циклоне запылённый газ входит в цилиндрический корпус через тангенциальный патрубок и образует спиральный поток вдоль корпуса и конуса. Отброшенные центробежной силой частицы ударяются о стенку, сползают вниз и попадают в нижний бункер, а очищенный газ выходит через верхнюю выхлопную трубу восходящим центральным вихрем.",
          "Эффективность разделения определяется расходом газа и входной скоростью, крупностью и плотностью частиц, диаметром корпуса, геометрией конуса и выхлопной трубы. Повышение скорости улучшает разделение, но увеличивает сопротивление, поэтому циклон рассматривается вместе с вентилятором.",
          "Циклоны особенно эффективны для крупных и плотных частиц; часть мелкой пыли может уходить с газом. Для абразивной пыли вход и конус защищаются износостойким материалом или футеровкой.",
        ],
        note: "Циклон не всегда является конечным фильтром. Для достижения требований по выбросам после него может потребоваться рукавный фильтр или другая подходящая ступень очистки.",
      },
      process: {
        title: "Технологическая схема циклонного сепаратора",
        intro:
          "Схема показывает поток: запылённый газ поступает в циклон, частицы отделяются вращающимся потоком и центробежным эффектом, пыль выгружается из нижнего бункера, газ направляется к фильтру или вентилятору.",
        note: "Несколько циклонов могут работать параллельно или последовательно; выбор зависит от расхода газа, фракционного состава и допустимого сопротивления.",
        mainLineLabel: "Линия газа",
        productLine: [
          { title: "Тангенциальный вход", text: "Запылённый газ входит в корпус тангенциально и начинает вращаться." },
          { title: "Центробежное разделение", text: "Отброшенные к стенке частицы движутся вниз." },
          { title: "Выход газа", text: "Очищенный газ выходит через центральную верхнюю трубу." },
          { title: "Следующая ступень", text: "При необходимости газ направляется на фильтр, затем к вентилятору и трубе." },
        ],
        auxLineLabel: "Выгрузка пыли",
        auxLine: [
          { title: "Сбор в бункере", text: "Отделённые частицы из конуса падают в нижний бункер." },
          { title: "Контролируемая выгрузка", text: "Пыль выгружается шлюзовым затвором без подсоса газа или возвращается в процесс." },
        ],
        flow: {
          svgTitle: "Технологическая схема циклонного сепаратора",
          svgDesc: "Линия газа: вход запылённого газа, циклон, выход газа и фильтр или вентилятор. Выгрузка пыли: нижний бункер и шлюзовой затвор.",
          mainLane: "ЛИНИЯ ГАЗА",
          shape: "box",
          before: [{ title: "Запылённый газ", sub: "Отходящие газы" }],
          drum: { title: "ЦИКЛОН", sub: "центробежное разделение" },
          after: [
            { title: "Фильтр", sub: "При необходимости" },
            { title: "Вентилятор / труба", sub: "Выход газа" },
          ],
          aux: {
            lane: "ВЫГРУЗКА ПЫЛИ",
            tone: "air",
            inputs: [],
            outputs: [
              { title: "Нижний бункер", sub: "Уловленная пыль" },
              { title: "Шлюзовой затвор", sub: "Выгрузка / возврат" },
            ],
          },
        },
      },
      applications: {
        title: "Области применения циклонных сепараторов",
        items: [
          {
            title: "Отходящие газы сушильного барабана",
            text: "Предварительное улавливание продукта, уносимого газами при сушке перлита, песка и подобных минералов, с возвратом в процесс. Ступень фильтрации мелкой пыли рассматривается отдельно.",
            imageAlt: "Дроблёный и сортированный сырой перлит",
            linkLabel: "Сушильный барабан",
          },
          {
            title: "Минеральные процессы",
            text: "Снижение высокой запылённости в линиях измельчения и пневмотранспорта. Для абразивной пыли корпус и конус защищаются от износа.",
            imageAlt: "Куски дроблёного известняка",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Предочистка перед фильтром",
            text: "Отделение крупных лёгких частиц, например древесной стружки, перед фильтром для снижения нагрузки на рукава. Конечная очистка выполняется рукавным фильтром.",
            imageAlt: "Кучи древесной стружки внутри цеха",
            linkLabel: "Рукавный фильтр с импульсной продувкой",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление циклонных сепараторов",
        intro:
          "PRO MAKINA проектирует циклоны исходя из расхода и температуры газа, запылённости и свойств частиц. Геометрия входа, диаметр корпуса и конус, выхлопная труба, нижний бункер и выгрузка, подключение вентилятора и воздуховодов разрабатываются совместно.",
        highlights: ["Геометрия корпуса под расход газа", "Сопротивление и согласование с вентилятором", "Износостойкие вход и конус", "Газоплотная нижняя выгрузка"],
        figureAlt: "Циклоны предварительной очистки перед рукавным фильтром",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Расход газа", text: "Расход, температура и влажность газа." },
          { title: "Свойства частиц", text: "Запылённость, фракционный состав и плотность." },
          { title: "Геометрия корпуса", text: "Тип входа, диаметр корпуса, конус и выхлопная труба." },
          { title: "Сопротивление", text: "Допустимое сопротивление и согласование с вентилятором." },
          { title: "Износ и выгрузка", text: "Защита от износа, нижний бункер и шлюзовой затвор." },
        ],
        dataNote: "Размеры циклона, эффективность и сопротивление рассчитываются по данным газа и пыли; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о циклонных сепараторах",
        items: [
          {
            question: "Как работает циклонный сепаратор?",
            answer: "Газ входит тангенциально и вращается в корпусе; отброшенные к стенке частицы движутся вниз и собираются в бункере, газ выходит вверх через центр.",
          },
          {
            question: "Достаточно ли одного циклона?",
            answer: "Он эффективен для крупных и плотных частиц, но часть мелкой пыли может уходить с газом. Для требований по выбросам может понадобиться рукавный фильтр или другая ступень.",
          },
          {
            question: "Почему важно сопротивление?",
            answer: "Необходимая для разделения скорость газа создаёт сопротивление, которое напрямую влияет на выбор вентилятора и энергопотребление.",
          },
          {
            question: "Что делать с абразивной пылью?",
            answer: "Зоны интенсивного износа — вход и конус — защищаются износостойким материалом или футеровкой.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Расход газа, температура, запылённость, фракционный состав, плотность пыли и допустимое сопротивление.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на циклонный сепаратор",
        text: "Сообщите расход газа и свойства пыли — вместе определим циклонный сепаратор.",
        mailSubject: "Запрос предложения: циклонный сепаратор",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Расход газа (м³/ч)", "Температура газа", "Запылённость", "Фракционный состав", "Плотность и абразивность пыли", "Допустимое сопротивление"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на циклонный сепаратор.",
          "",
          "Расход газа (м³/ч):",
          "Температура газа:",
          "Вид пыли и запылённость:",
          "Крупность частиц:",
          "Допустимое сопротивление:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "فاصل السيكلون | سيكلونات صناعية لفصل الغبار",
        description:
          "فواصل سيكلون صناعية لفصل الجسيمات من الغاز المحمّل بالغبار في عمليات التجفيف والمعادن والمواد السائبة. يُحدَّد الشكل والمادة من بيانات الغاز والغبار.",
      },
      breadcrumbLabel: "فاصل السيكلون",
      h1: "فاصل السيكلون – فصل الجسيمات من الغاز المغبّر بالطرد المركزي",
      productCategory: "فاصل سيكلون",
      overview: {
        imageAlt: "جسم سيكلون كبير القطر بمدخل مماسي في الورشة",
        tagline: "فاصل سيكلون",
        keyFacts: [
          { label: "مبدأ الفصل", value: "تدفق دوّار وتأثير الطرد المركزي" },
          { label: "الأجزاء المتحركة", value: "لا توجد في جسم السيكلون" },
          { label: "المهمة", value: "فصل مسبق وخفض حمل الغبار" },
          { label: "تفريغ الغبار", value: "قادوس سفلي وصمام دوّار" },
        ],
        title: "الفصل المسبق للجسيمات في تيار الغاز المغبّر",
        paragraphs: [
          "في السيكلون يدخل الغاز المغبّر إلى الجسم الأسطواني عبر مدخل مماسي ويكوّن تدفقًا حلزونيًا على طول الجسم والجزء المخروطي، فتصطدم الجسيمات التي يقذفها الطرد المركزي إلى الخارج بالجدار وتنزلق إلى أسفل لتسقط في القادوس السفلي، بينما يخرج الغاز النظيف من أنبوب الخروج العلوي في دوامة مركزية صاعدة.",
          "يعتمد أداء الفصل أساسًا على تدفق الغاز وسرعة الدخول وحجم الجسيمات وكثافتها وقطر الجسم وشكل المخروط وأنبوب الخروج، ولأن زيادة السرعة لتحسين الفصل ترفع فاقد الضغط أيضًا يُقيَّم السيكلون مع المروحة.",
          "تكون السيكلونات فعالة خاصة للجسيمات الخشنة والكثيفة، وقد يخرج جزء من الغبار الناعم مع الغاز، ويمكن حماية المدخل والمخروط بمواد أو بطانات مقاومة للتآكل عند التعامل مع الغبار الكاشط.",
        ],
        note: "السيكلون ليس دائمًا مرشحًا نهائيًا، وقد يلزم بعده مرشح أكياس نبضي أو مرحلة معالجة مناسبة أخرى لتحقيق أهداف الانبعاثات.",
      },
      process: {
        title: "تدفق العملية في فاصل السيكلون",
        intro:
          "يوضح المخطط التدفق الذي يدخل فيه الغاز المغبّر إلى السيكلون وتُفصل الجسيمات بالتدفق الدوّار والطرد المركزي، ثم يُفرَّغ الغبار المجمّع من القادوس السفلي ويُوجَّه الغاز إلى مرحلة المرشح أو المروحة التالية.",
        note: "يمكن استخدام عدة سيكلونات على التوازي أو التوالي، ويعتمد الاختيار على تدفق الغاز وتوزيع الجسيمات وفاقد الضغط المسموح.",
        mainLineLabel: "خط الغاز",
        productLine: [
          { title: "مدخل مماسي", text: "يدخل الغاز المغبّر إلى جسم السيكلون مماسيًا ويبدأ بالدوران." },
          { title: "الفصل بالطرد المركزي", text: "تتحرك الجسيمات المقذوفة نحو الجدار إلى الأسفل." },
          { title: "خروج الغاز", text: "يخرج الغاز النظيف من أنبوب الخروج العلوي المركزي." },
          { title: "المرحلة التالية", text: "عند الحاجة يُوجَّه الغاز إلى مرشح ثم إلى المروحة والمدخنة." },
        ],
        auxLineLabel: "تفريغ الغبار",
        auxLine: [
          { title: "التجميع في القادوس", text: "تسقط الجسيمات المفصولة من المخروط إلى القادوس السفلي." },
          { title: "تفريغ متحكم به", text: "يُفرَّغ الغبار بصمام دوّار دون تسرب للغاز أو يُعاد إلى العملية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في فاصل السيكلون",
          svgDesc: "خط الغاز: دخول الغاز المغبّر، فاصل السيكلون، خروج الغاز والمرشح أو المروحة. تفريغ الغبار: القادوس السفلي والصمام الدوّار.",
          mainLane: "خط الغاز",
          shape: "box",
          before: [{ title: "غاز مغبّر", sub: "عادم العملية" }],
          drum: { title: "فاصل السيكلون", sub: "فصل بالطرد المركزي" },
          after: [
            { title: "مرشح", sub: "عند الحاجة" },
            { title: "مروحة / مدخنة", sub: "خروج الغاز" },
          ],
          aux: {
            lane: "تفريغ الغبار",
            tone: "air",
            inputs: [],
            outputs: [
              { title: "القادوس السفلي", sub: "الغبار المفصول" },
              { title: "صمام دوّار", sub: "تفريغ / إعادة" },
            ],
          },
        },
      },
      applications: {
        title: "مجالات استخدام فاصل السيكلون",
        items: [
          {
            title: "عادم أسطوانة التجفيف",
            text: "الفصل المسبق للمنتج المحمول مع غاز العادم عند تجفيف البيرلايت والرمل والمعادن المشابهة واسترجاعه إلى العملية، مع تقييم مرحلة ترشيح للغبار الناعم بشكل منفصل.",
            imageAlt: "بيرلايت خام مكسّر ومغربل",
            linkLabel: "أسطوانة التجفيف",
          },
          {
            title: "عمليات المعادن",
            text: "خفض أحمال الغبار العالية في خطوط الطحن والنقل الهوائي، مع حماية الجسم والمخروط من التآكل عند التعامل مع الغبار الكاشط.",
            imageAlt: "قطع من الحجر الجيري المكسّر",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "الفصل المسبق قبل المرشح",
            text: "فصل الجسيمات الخشنة الخفيفة مثل نشارة الخشب قبل المرشح لخفض الحمل على الأكياس، بينما يتم الترشيح النهائي بمرشح أكياس نبضي.",
            imageAlt: "أكوام نشارة خشب داخل منشأة",
            linkLabel: "مرشح الأكياس النبضي",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع فواصل سيكلون مخصصة",
        intro:
          "تصمم PRO MAKINA فواصل السيكلون وفق تدفق الغاز ودرجة حرارته وحمل الغبار وخصائص الجسيمات، مع تصميم شكل المدخل وقطر الجسم والمخروط وأنبوب الخروج والقادوس السفلي والتفريغ وتوصيلات المروحة والمجاري معًا.",
        highlights: ["شكل جسم وفق تدفق الغاز", "فاقد الضغط وتوافق المروحة", "مدخل ومخروط مقاومان للتآكل", "تفريغ سفلي محكم ضد الغاز"],
        figureAlt: "سيكلونات تُستخدم كفواصل مسبقة أمام مرشح أكياس",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "تدفق الغاز", text: "تدفق الغاز ودرجة حرارته ورطوبته." },
          { title: "خصائص الجسيمات", text: "حمل الغبار وتوزيع الأحجام والكثافة." },
          { title: "شكل الجسم", text: "نوع المدخل وقطر الجسم والمخروط وأنبوب الخروج." },
          { title: "فاقد الضغط", text: "فاقد الضغط المسموح والتوافق مع المروحة." },
          { title: "التآكل والتفريغ", text: "الحماية من التآكل والقادوس السفلي والصمام الدوّار." },
        ],
        dataNote: "تُحسب أبعاد السيكلون وكفاءة الفصل وفاقد الضغط من بيانات الغاز والغبار، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول فاصل السيكلون",
        items: [
          {
            question: "كيف يعمل فاصل السيكلون؟",
            answer: "يدخل الغاز مماسيًا ويدور في الجسم، فتتحرك الجسيمات المقذوفة نحو الجدار إلى الأسفل وتُجمع في القادوس، ويخرج الغاز إلى الأعلى من المركز.",
          },
          {
            question: "هل يكفي السيكلون وحده؟",
            answer: "هو فعال للجسيمات الخشنة والكثيفة، لكن قد يخرج جزء من الغبار الناعم مع الغاز، وقد يلزم بعده مرشح نبضي أو معالجة أخرى لتحقيق أهداف الانبعاثات.",
          },
          {
            question: "لماذا يهم فاقد الضغط؟",
            answer: "تُحدث سرعة الغاز اللازمة للفصل فاقدًا في الضغط يؤثر مباشرة في اختيار المروحة واستهلاك الطاقة.",
          },
          {
            question: "ماذا عن الغبار الكاشط؟",
            answer: "تُحمى مناطق التآكل الشديد مثل المدخل والمخروط بمواد أو بطانات مقاومة للتآكل.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "تدفق الغاز ودرجة الحرارة وحمل الغبار وتوزيع أحجام الجسيمات وكثافة الغبار وفاقد الضغط المسموح.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لفاصل سيكلون",
        text: "شاركنا تدفق الغاز وخصائص الغبار، لنحدد معًا فاصل السيكلون المناسب.",
        mailSubject: "طلب عرض سعر: فاصل سيكلون",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["تدفق الغاز (م³/ساعة)", "درجة حرارة الغاز", "حمل الغبار", "توزيع أحجام الجسيمات", "كثافة الغبار وكشطه", "فاقد الضغط المسموح"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لفاصل سيكلون.",
          "",
          "تدفق الغاز (م³/ساعة):",
          "درجة حرارة الغاز:",
          "نوع الغبار وحمله:",
          "حجم الجسيمات:",
          "حد فاقد الضغط:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
