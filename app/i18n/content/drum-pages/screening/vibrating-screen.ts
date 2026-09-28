import type { DrumPageConfig } from "../types";

// Vibrasyonlu elek: titreşimli elek yüzeyinde tane boyutuna göre (çoğunlukla kuru) sınıflandırma.
// Yaş eleme her tasarımda varsayılmaz; kapasite, açıklık, genlik, frekans veya kat sayısı için değer verilmez.
// Ana görsel (elek2) sahada kurulu eğimli titreşimli elekler; şekil görseli (elek1) mevcut ürün görseli. Lisans kaydı yok.
const img = (file: string) => `/images/elek/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const vibratingScreenPage: DrumPageConfig = {
  key: "vibratingScreen",
  group: "screeningSystems",
  trSlug: "vibrasyonlu-elekler",
  mainImage: img("elek2.jpeg"),
  applications: [
    { image: dry("granul-gubre.webp"), link: "fertilizerPlants" },
    { image: dry("kirec-tasi.webp"), link: "mining" },
    { image: kr("kirmatas-yakin.webp"), link: "crushers" },
  ],
  figure: img("elek1.png"),
  sectors: ["fertilizerPlants", "mining", "recycling"],
  resources: ["trommelScreen", "dewateringScreen", "wetScreen", "screeningSystems"],
  machines: ["conveying", "crushers", "dustCollection", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Vibrasyonlu Elek İmalatı | Titreşimli Elek Sistemleri | PRO MAKİNA",
        description:
          "Gübre, mineral, kum ve dökme malzemelerin tane boyutuna göre ayrılması için vibrasyonlu elek imalatı. Elek katı, açıklık ve titreşim ürüne göre seçilir.",
      },
      breadcrumbLabel: "Vibrasyonlu Elekler",
      h1: "Vibrasyonlu Elek – Titreşimle Tane Boyutuna Göre Sınıflandırma",
      productCategory: "Vibrasyonlu Elek",
      overview: {
        imageAlt: "Kova elevatörü ve dağıtım klapesiyle beslenen iki eğimli titreşimli elek",
        tagline: "Vibrasyonlu Elek",
        keyFacts: [
          { label: "Ayırma prensibi", value: "Titreşimle tane boyutuna göre eleme" },
          { label: "Tahrik", value: "Vibrasyon motoru veya uygun tahrik sistemi" },
          { label: "Elek yüzeyi", value: "Kat sayısı, açıklık ve tel/panel ürüne göre" },
          { label: "Çalışma", value: "Kuru eleme; yaş eleme ayrı tasarım gerektirir" },
        ],
        title: "Dökme Malzemenin Fraksiyonlara Ayrılması",
        paragraphs: [
          "Vibrasyonlu elekte malzeme, titreşen elek yüzeyi üzerinde ilerlerken tabakalaşır; elek açıklığından küçük taneler elek altına geçer, büyük taneler elek üstünde kalarak ayrı bir çıkıştan alınır. Böylece ürün, hedef kesme boyutuna göre iki veya daha fazla fraksiyona ayrılır.",
          "Eleme verimini belirleyen başlıca unsurlar; besleme miktarı ve tane dağılımı, elek açıklığı ve açık alan oranı, titreşim genliği ve frekansı, elek eğimi ve elek yüzeyindeki malzeme yatağının kalınlığıdır. Birden fazla fraksiyon gerektiğinde elek birden çok katlı tasarlanabilir.",
          "Elek yüzeyi tel örgü, perfore sac veya poliüretan/kauçuk panel olabilir; seçim malzemenin aşındırıcılığı, nemi ve tıkanma eğilimine göre yapılır. Nemli veya yapışkan ürünlerde tıkanmayı azaltacak önlemler ayrıca değerlendirilir.",
        ],
        note: "Vibrasyonlu elekler çoğunlukla kuru eleme için kullanılır. Yaş eleme yalnızca su dağıtımı, sızdırmazlık ve elek altı su tahliyesi buna göre tasarlanmışsa yapılabilir.",
      },
      process: {
        title: "Vibrasyonlu Elek Proses Akışı",
        intro:
          "Şema, malzemenin eleğe beslendiği, titreşimli elek yüzeyinde sınıflandırıldığı ve elek üstü ile elek altı fraksiyonların ayrı çıkışlardan alındığı akışı gösterir. Besleyici, konveyör ve stok alanları ayrı ekipmanlardır.",
        note: "Besleme, elek genişliği boyunca düzenli dağıtıldığında elek yüzeyi daha verimli kullanılır ve aşınma daha dengeli olur.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Düzenli besleme", text: "Malzeme besleyici, oluk veya dağıtıcı ile elek genişliğine yayılarak verilir." },
          { title: "Titreşimli sınıflandırma", text: "Titreşen elek yüzeyinde ince taneler açıklıktan geçer, iri taneler ilerler." },
          { title: "Elek üstü tahliyesi", text: "Açıklıktan geçmeyen iri fraksiyon elek sonundan alınır." },
          { title: "Elek altı toplama", text: "Elek altına geçen ince fraksiyon alt hazneden ayrı olarak toplanır." },
        ],
        flow: {
          svgTitle: "Vibrasyonlu elek proses akış şeması",
          svgDesc: "Malzeme hattı: besleme, vibrasyonlu elek, elek üstü iri fraksiyon ve elek altı ince fraksiyon tahliyesi.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Besleyici / dağıtıcı" }],
          drum: { title: "VİBRASYONLU ELEK", sub: "titreşimli sınıflandırma" },
          after: [
            { title: "Elek üstü", sub: "İri fraksiyon" },
            { title: "Elek altı", sub: "İnce fraksiyon" },
          ],
        },
      },
      applications: {
        title: "Vibrasyonlu Elek Uygulama Alanları",
        items: [
          {
            title: "Granül Gübre Sınıflandırma",
            text: "Granülasyon ve kurutma sonrası granüllerin ürün boyutu, iri ve ince olarak ayrılması. İri fraksiyon kırıcıya, ince fraksiyon geri devire gönderilebilir.",
            imageAlt: "Renkli granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Kuru Mineral Eleme",
            text: "Kireç taşı ve benzeri kuru minerallerin öğütme veya kırma sonrasında ürün fraksiyonlarına ayrılması. Elek yüzeyi malzemenin aşındırıcılığına göre seçilir.",
            imageAlt: "Kırılmış kireç taşı parçaları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Kırma-Eleme Hatları",
            text: "Kırıcı çıkışındaki kırmataşın boyut sınıflarına ayrılması ve iri tanelerin tekrar kırıcıya döndürülmesi. Kat sayısı istenen fraksiyon sayısına göre belirlenir.",
            imageAlt: "Koyu renkli kırmataş taneleri yakın görünüm",
            linkLabel: "Kırıcılar ve Parçalayıcılar",
          },
        ],
      },
      design: {
        title: "Projeye Özel Vibrasyonlu Elek Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA vibrasyonlu elekleri hammadde, besleme kapasitesi, tane dağılımı ve hedef fraksiyonlara göre projelendirir. Elek gövdesi, katlar ve elek yüzeyi, titreşim sistemi, yaylar, taşıyıcı şase ile besleme ve tahliye bağlantıları birlikte tasarlanır.",
        highlights: ["Hedef fraksiyona göre elek katı ve açıklık", "Ürüne uygun tel, perfore veya panel yüzey", "Vibrasyon motoru ve yay sistemi", "Kolay değiştirilebilir elek yüzeyi"],
        figureAlt: "Sahada yan yana kurulu, vibrasyon motorlu iki titreşimli elek",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde", text: "Malzeme türü, yoğunluk, nem ve aşındırıcılık." },
          { title: "Tane Dağılımı ve Kapasite", text: "Besleme debisi ve tane boyutu dağılımı." },
          { title: "Fraksiyonlar", text: "Hedef kesme boyutları, elek katı ve açıklıklar." },
          { title: "Titreşim ve Eğim", text: "Tahrik tipi, genlik, frekans ve elek eğimi." },
          { title: "Gövde ve Bağlantılar", text: "Yaylar, şase, toz kapağı, besleme ve tahliye ağızları." },
        ],
        dataNote: "Elek alanı, açıklık, kat sayısı ve tahrik gücü malzeme ve kapasite verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Vibrasyonlu Elek Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Vibrasyonlu elek nasıl çalışır?",
            answer:
              "Titreşen elek yüzeyinde ilerleyen malzemenin ince taneleri elek açıklığından geçer, iri taneler elek üstünde kalır. Her fraksiyon ayrı çıkıştan alınır.",
          },
          {
            question: "Kaç katlı elek gerekir?",
            answer: "Kat sayısı, elde edilmek istenen fraksiyon sayısına göre belirlenir. Her ek kat bir ek ürün fraksiyonu sağlar.",
          },
          {
            question: "Vibrasyonlu elek yaş eleme yapabilir mi?",
            answer:
              "Yalnızca su dağıtımı, sızdırmazlık ve su tahliyesi buna göre tasarlanmışsa. Suyla desteklenen eleme için Sulu Elekler sayfamızı inceleyebilirsiniz.",
          },
          {
            question: "Elek tıkanması nasıl azaltılır?",
            answer:
              "Uygun açıklık ve elek yüzeyi seçimi, doğru titreşim ayarı ve düzenli besleme tıkanmayı azaltır. Nemli ürünlerde ek önlemler ayrıca değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, kapasite, besleme tane dağılımı, hedef fraksiyonlar, nem oranı ve saha yerleşimi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Vibrasyonlu elek için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve hedef fraksiyonlarınıza göre vibrasyonlu eleği birlikte netleştirelim.",
        mailSubject: "Vibrasyonlu Elek Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Malzeme türü ve yoğunluğu", "Kapasite (ton/saat)", "Besleme tane dağılımı", "Hedef fraksiyonlar", "Nem oranı", "Saha yerleşimi"],
        inquiryLines: [
          "Merhaba, vibrasyonlu elek için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Kapasite (ton/saat):",
          "Besleme tane boyutu:",
          "Hedef fraksiyonlar (mm):",
          "Nem oranı:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Vibrating Screen Manufacturer | Vibrating Screening Systems",
        description:
          "Vibrating screens for size separation of fertilizer, minerals, sand and bulk materials. Decks, apertures and vibration are selected for your product.",
      },
      breadcrumbLabel: "Vibrating Screen",
      h1: "Vibrating Screen – Size Classification by Vibration",
      productCategory: "Vibrating Screen",
      overview: {
        imageAlt: "Two inclined vibrating screens fed by a bucket elevator and diverter flap",
        tagline: "Vibrating Screen",
        keyFacts: [
          { label: "Separation principle", value: "Screening by particle size with vibration" },
          { label: "Drive", value: "Vibration motor or suitable drive" },
          { label: "Screen deck", value: "Number of decks, aperture and media per product" },
          { label: "Operation", value: "Dry screening; wet screening needs a dedicated design" },
        ],
        title: "Separating Bulk Material into Fractions",
        paragraphs: [
          "In a vibrating screen the material stratifies as it travels across the vibrating deck; particles smaller than the aperture pass through as undersize, while larger particles stay on top and leave through a separate outlet. The product is thus split into two or more fractions around the target cut size.",
          "Screening efficiency mainly depends on feed rate and size distribution, aperture and open area, vibration amplitude and frequency, deck inclination and the depth of the material bed on the deck. Where several fractions are required, the screen can be designed with multiple decks.",
          "Screen media can be woven wire, perforated plate or polyurethane/rubber panels, selected according to abrasiveness, moisture and blinding tendency. For moist or sticky products, measures to reduce blinding are assessed separately.",
        ],
        note: "Vibrating screens are mostly used for dry screening. Wet screening is only possible if water distribution, sealing and undersize water drainage are designed for it.",
      },
      process: {
        title: "Vibrating Screen Process Flow",
        intro:
          "The diagram shows the flow in which material is fed to the screen, classified on the vibrating deck, and oversize and undersize fractions leave through separate outlets. Feeder, conveyors and stockpiles are separate equipment.",
        note: "When feed is spread evenly across the screen width, the deck is used more efficiently and wear is more uniform.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Even feeding", text: "Material is spread across the screen width by a feeder, chute or distributor." },
          { title: "Vibrating classification", text: "On the vibrating deck, fines pass the apertures while coarse particles move on." },
          { title: "Oversize discharge", text: "The coarse fraction that does not pass is discharged at the end of the deck." },
          { title: "Undersize collection", text: "The fine fraction passing the deck is collected separately in the lower hopper." },
        ],
        flow: {
          svgTitle: "Vibrating screen process flow diagram",
          svgDesc: "Material line: feeding, vibrating screen, oversize coarse fraction and undersize fine fraction discharge.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Feeder / distributor" }],
          drum: { title: "VIBRATING SCREEN", sub: "vibrating classification" },
          after: [
            { title: "Oversize", sub: "Coarse fraction" },
            { title: "Undersize", sub: "Fine fraction" },
          ],
        },
      },
      applications: {
        title: "Vibrating Screen Applications",
        items: [
          {
            title: "Granular Fertilizer Classification",
            text: "Separating granules after granulation and drying into product size, oversize and fines. Oversize can go to a crusher and fines to recycle.",
            imageAlt: "Coloured granular fertilizer particles",
            linkLabel: "Fertilizer and Granulation Plants",
          },
          {
            title: "Dry Mineral Screening",
            text: "Splitting limestone and similar dry minerals into product fractions after grinding or crushing. Screen media is selected for the abrasiveness of the material.",
            imageAlt: "Crushed limestone pieces",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Crushing and Screening Lines",
            text: "Sizing crushed stone from the crusher discharge and returning oversize to the crusher. The number of decks follows the number of required fractions.",
            imageAlt: "Close-up of dark crushed stone particles",
            linkLabel: "Crushers and Shredders",
          },
        ],
      },
      design: {
        title: "Custom Vibrating Screen Design and Manufacturing",
        intro:
          "PRO MAKINA engineers vibrating screens around the raw material, feed capacity, size distribution and target fractions. Screen body, decks and media, vibration system, springs, support frame and feed and discharge connections are designed together.",
        highlights: ["Decks and apertures for target fractions", "Wire, perforated or panel media for the product", "Vibration motors and spring system", "Easily replaceable screen media"],
        figureAlt: "Two vibrating screens with vibration motors installed side by side on site",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material", text: "Material type, density, moisture and abrasiveness." },
          { title: "Size Distribution and Capacity", text: "Feed rate and particle size distribution." },
          { title: "Fractions", text: "Target cut sizes, number of decks and apertures." },
          { title: "Vibration and Inclination", text: "Drive type, amplitude, frequency and deck angle." },
          { title: "Body and Connections", text: "Springs, frame, dust cover, feed and discharge openings." },
        ],
        dataNote: "Screen area, aperture, number of decks and drive power are defined from material and capacity data; no generic values are stated on this page.",
      },
      faq: {
        title: "Vibrating Screen FAQ",
        items: [
          {
            question: "How does a vibrating screen work?",
            answer: "As material moves across the vibrating deck, fines pass through the apertures while coarse particles stay on top. Each fraction leaves through its own outlet.",
          },
          {
            question: "How many decks are needed?",
            answer: "The number of decks depends on how many fractions are required; each additional deck gives one more product fraction.",
          },
          {
            question: "Can a vibrating screen do wet screening?",
            answer: "Only if water distribution, sealing and drainage are designed for it. For water-assisted screening, see our Wet Screens page.",
          },
          {
            question: "How is screen blinding reduced?",
            answer: "Suitable aperture and media, correct vibration settings and even feeding reduce blinding. Additional measures are assessed for moist products.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, capacity, feed size distribution, target fractions, moisture content and site layout.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a vibrating screen",
        text: "Share your material, capacity and target fractions, and we will define the vibrating screen together with you.",
        mailSubject: "Vibrating Screen Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Material type and density", "Capacity (t/h)", "Feed size distribution", "Target fractions", "Moisture content", "Site layout"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a vibrating screen.",
          "",
          "Material:",
          "Capacity (t/h):",
          "Feed size:",
          "Target fractions (mm):",
          "Moisture content:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Вибрационный грохот | Производство вибрационных грохотов",
        description:
          "Вибрационные грохоты для разделения по крупности удобрений, минералов, песка и сыпучих материалов. Деки, ячейки и вибрация подбираются под продукт.",
      },
      breadcrumbLabel: "Вибрационный грохот",
      h1: "Вибрационный грохот – классификация по крупности вибрацией",
      productCategory: "Вибрационный грохот",
      overview: {
        imageAlt: "Два наклонных вибрационных грохота с питанием от ковшового элеватора через перекидной клапан",
        tagline: "Вибрационный грохот",
        keyFacts: [
          { label: "Принцип разделения", value: "Грохочение по крупности вибрацией" },
          { label: "Привод", value: "Вибродвигатель или подходящий привод" },
          { label: "Просеивающая поверхность", value: "Число дек, ячейка и тип сита под продукт" },
          { label: "Режим", value: "Сухое грохочение; мокрое требует отдельного исполнения" },
        ],
        title: "Разделение сыпучего материала на фракции",
        paragraphs: [
          "В вибрационном грохоте материал расслаивается при движении по вибрирующей деке; частицы меньше ячейки проходят в подрешётный продукт, крупные остаются сверху и выходят через отдельный выход. Так продукт делится на две и более фракции по заданной границе разделения.",
          "Эффективность грохочения определяется производительностью и гранулометрическим составом питания, размером ячейки и живым сечением, амплитудой и частотой колебаний, углом наклона и толщиной слоя материала на деке. Для нескольких фракций грохот выполняется многодечным.",
          "Просеивающая поверхность — проволочная сетка, перфорированный лист или полиуретановые/резиновые панели; выбор зависит от абразивности, влажности и склонности к забиванию. Для влажных и липких продуктов меры против забивания рассматриваются отдельно.",
        ],
        note: "Вибрационные грохоты в основном применяются для сухого грохочения. Мокрое грохочение возможно, только если под него рассчитаны подача воды, уплотнения и отвод подрешётной воды.",
      },
      process: {
        title: "Технологическая схема вибрационного грохота",
        intro:
          "Схема показывает поток: материал подаётся на грохот, классифицируется на вибрирующей деке, надрешётный и подрешётный продукты выходят раздельно. Питатель, конвейеры и склады — отдельное оборудование.",
        note: "Равномерное распределение питания по ширине грохота повышает использование деки и выравнивает износ.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Равномерная подача", text: "Материал распределяется по ширине грохота питателем, лотком или распределителем." },
          { title: "Классификация вибрацией", text: "На вибрирующей деке мелочь проходит через ячейки, крупные частицы движутся дальше." },
          { title: "Выход надрешётного", text: "Крупная фракция, не прошедшая сито, выгружается в конце деки." },
          { title: "Сбор подрешётного", text: "Мелкая фракция собирается отдельно в нижнем бункере." },
        ],
        flow: {
          svgTitle: "Технологическая схема вибрационного грохота",
          svgDesc: "Линия материала: подача, вибрационный грохот, выгрузка надрешётной крупной и подрешётной мелкой фракции.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Подача", sub: "Питатель / распределитель" }],
          drum: { title: "ВИБРАЦИОННЫЙ ГРОХОТ", sub: "классификация вибрацией" },
          after: [
            { title: "Надрешётный", sub: "Крупная фракция" },
            { title: "Подрешётный", sub: "Мелкая фракция" },
          ],
        },
      },
      applications: {
        title: "Области применения вибрационных грохотов",
        items: [
          {
            title: "Классификация гранулированных удобрений",
            text: "Разделение гранул после грануляции и сушки на товарную, крупную и мелкую фракции. Крупная фракция может идти на дробилку, мелкая — в рецикл.",
            imageAlt: "Цветные гранулы удобрения",
            linkLabel: "Заводы удобрений и грануляции",
          },
          {
            title: "Сухое грохочение минералов",
            text: "Разделение известняка и подобных сухих минералов на товарные фракции после измельчения или дробления. Сито подбирается по абразивности материала.",
            imageAlt: "Куски дроблёного известняка",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Линии дробления и грохочения",
            text: "Сортировка щебня после дробилки и возврат крупной фракции на додрабливание. Число дек определяется числом требуемых фракций.",
            imageAlt: "Крупный план тёмного щебня",
            linkLabel: "Дробилки и шредеры",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление вибрационных грохотов",
        intro:
          "PRO MAKINA проектирует вибрационные грохоты исходя из сырья, производительности, гранулометрического состава и требуемых фракций. Короб, деки и сита, вибросистема, пружины, опорная рама, узлы загрузки и выгрузки разрабатываются совместно.",
        highlights: ["Деки и ячейки под требуемые фракции", "Сетка, перфолист или панели под продукт", "Вибродвигатели и пружинные опоры", "Быстрая замена сит"],
        figureAlt: "Два вибрационных грохота с вибродвигателями, установленные рядом на площадке",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё", text: "Вид материала, плотность, влажность и абразивность." },
          { title: "Гранулометрия и производительность", text: "Производительность и гранулометрический состав питания." },
          { title: "Фракции", text: "Границы разделения, число дек и размеры ячеек." },
          { title: "Вибрация и наклон", text: "Тип привода, амплитуда, частота и угол наклона." },
          { title: "Короб и присоединения", text: "Пружины, рама, пылезащитный кожух, загрузочные и разгрузочные патрубки." },
        ],
        dataNote: "Площадь грохочения, ячейка, число дек и мощность привода определяются по данным материала и производительности; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о вибрационных грохотах",
        items: [
          {
            question: "Как работает вибрационный грохот?",
            answer: "При движении материала по вибрирующей деке мелкие частицы проходят через ячейки, крупные остаются сверху; каждая фракция выходит через свой выход.",
          },
          {
            question: "Сколько дек нужно?",
            answer: "Число дек зависит от количества требуемых фракций; каждая дополнительная дека даёт ещё одну фракцию.",
          },
          {
            question: "Может ли вибрационный грохот работать мокрым способом?",
            answer: "Только если под это рассчитаны подача воды, уплотнения и водоотвод. Для грохочения с подачей воды см. страницу «Грохоты мокрого грохочения».",
          },
          {
            question: "Как уменьшить забивание сита?",
            answer: "Правильный выбор ячейки и сита, настройка вибрации и равномерное питание уменьшают забивание; для влажных продуктов рассматриваются дополнительные меры.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, производительность, крупность питания, требуемые фракции, влажность и компоновка площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на вибрационный грохот",
        text: "Сообщите материал, производительность и требуемые фракции — вместе определим вибрационный грохот.",
        mailSubject: "Запрос предложения: вибрационный грохот",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид материала и плотность", "Производительность (т/ч)", "Гранулометрия питания", "Требуемые фракции", "Влажность", "Компоновка площадки"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на вибрационный грохот.",
          "",
          "Материал:",
          "Производительность (т/ч):",
          "Крупность питания:",
          "Требуемые фракции (мм):",
          "Влажность:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الغربال الاهتزازي | تصنيع أنظمة الغربلة الاهتزازية",
        description:
          "غرابيل اهتزازية لفصل الأسمدة والمعادن والرمل والمواد السائبة حسب الحجم. تُختار الطبقات والفتحات والاهتزاز وفق منتجك.",
      },
      breadcrumbLabel: "الغربال الاهتزازي",
      h1: "الغربال الاهتزازي – تصنيف المواد حسب الحجم بالاهتزاز",
      productCategory: "غربال اهتزازي",
      overview: {
        imageAlt: "غربالان اهتزازيان مائلان يُلقَّمان من رافعة قواديس عبر بوابة توزيع",
        tagline: "غربال اهتزازي",
        keyFacts: [
          { label: "مبدأ الفصل", value: "غربلة حسب حجم الحبيبات بالاهتزاز" },
          { label: "الإدارة", value: "محرك اهتزاز أو نظام إدارة مناسب" },
          { label: "سطح الغربلة", value: "عدد الطبقات والفتحة والنوع وفق المنتج" },
          { label: "التشغيل", value: "غربلة جافة، والغربلة الرطبة تتطلب تصميمًا خاصًا" },
        ],
        title: "فصل المواد السائبة إلى أجزاء حسب الحجم",
        paragraphs: [
          "في الغربال الاهتزازي تتطبق المادة أثناء تحركها على سطح الغربلة المهتز، فتمر الحبيبات الأصغر من الفتحة إلى أسفل الغربال، وتبقى الحبيبات الأكبر فوقه وتخرج من مخرج منفصل، فينقسم المنتج إلى جزأين أو أكثر حول حجم الفصل المستهدف.",
          "تعتمد كفاءة الغربلة أساسًا على معدل التلقيم وتوزيع الأحجام وحجم الفتحة والمساحة المفتوحة وسعة الاهتزاز وتردده وميل السطح وسماكة طبقة المادة عليه، وعند الحاجة إلى عدة أجزاء يمكن تصميم الغربال بعدة طبقات.",
          "يمكن أن يكون سطح الغربلة شبكة سلكية أو صفيحة مثقبة أو ألواحًا من البولي يوريثان أو المطاط، ويُختار وفق كشط المادة ورطوبتها وقابليتها لسد الفتحات، وتُدرس إجراءات الحد من الانسداد بشكل منفصل للمنتجات الرطبة أو اللزجة.",
        ],
        note: "تُستخدم الغرابيل الاهتزازية غالبًا للغربلة الجافة، ولا تمكن الغربلة الرطبة إلا إذا صُمم توزيع الماء والإحكام وتصريف الماء أسفل الغربال لذلك.",
      },
      process: {
        title: "تدفق العملية في الغربال الاهتزازي",
        intro:
          "يوضح المخطط التدفق الذي تُلقَّم فيه المادة إلى الغربال وتُصنَّف على السطح المهتز، ثم يخرج الجزء فوق الغربال والجزء تحته من مخرجين منفصلين، بينما المُلقِّم والنواقل ومناطق التخزين معدات منفصلة.",
        note: "عندما يتوزع التلقيم بانتظام على عرض الغربال يُستخدم السطح بكفاءة أعلى ويكون التآكل أكثر توازنًا.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم منتظم", text: "تُوزَّع المادة على عرض الغربال بمُلقِّم أو مجرى أو موزِّع." },
          { title: "تصنيف بالاهتزاز", text: "تمر الحبيبات الناعمة من الفتحات على السطح المهتز وتتقدم الحبيبات الخشنة." },
          { title: "تفريغ الجزء الخشن", text: "يُفرَّغ الجزء الخشن الذي لم يمر من نهاية السطح." },
          { title: "جمع الجزء الناعم", text: "يُجمع الجزء الناعم المار أسفل الغربال في قادوس سفلي منفصل." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في الغربال الاهتزازي",
          svgDesc: "خط المادة: التلقيم، الغربال الاهتزازي، تفريغ الجزء الخشن فوق الغربال والجزء الناعم أسفله.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "مُلقِّم / موزِّع" }],
          drum: { title: "الغربال الاهتزازي", sub: "تصنيف بالاهتزاز" },
          after: [
            { title: "فوق الغربال", sub: "الجزء الخشن" },
            { title: "أسفل الغربال", sub: "الجزء الناعم" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الغربال الاهتزازي",
        items: [
          {
            title: "تصنيف الأسمدة الحبيبية",
            text: "فصل الحبيبات بعد التحبيب والتجفيف إلى حجم المنتج والخشن والناعم، ويمكن إرسال الخشن إلى الكسارة والناعم إلى إعادة التدوير.",
            imageAlt: "حبيبات سماد ملونة",
            linkLabel: "مصانع الأسمدة والتحبيب",
          },
          {
            title: "غربلة المعادن الجافة",
            text: "فصل الحجر الجيري والمعادن الجافة المشابهة إلى أجزاء المنتج بعد الطحن أو التكسير، مع اختيار سطح الغربلة وفق كشط المادة.",
            imageAlt: "قطع من الحجر الجيري المكسّر",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "خطوط التكسير والغربلة",
            text: "تصنيف الحجر المكسّر الخارج من الكسارة إلى أحجام وإعادة الجزء الخشن إلى الكسارة، ويتحدد عدد الطبقات بعدد الأجزاء المطلوبة.",
            imageAlt: "منظر قريب لحبيبات حجر مكسّر داكنة",
            linkLabel: "الكسارات والشريدر",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع غرابيل اهتزازية مخصصة",
        intro:
          "تصمم PRO MAKINA الغرابيل الاهتزازية وفق المادة الخام وسعة التلقيم وتوزيع الأحجام والأجزاء المستهدفة، مع تصميم جسم الغربال والطبقات وأسطح الغربلة ونظام الاهتزاز والنوابض والهيكل الحامل وتوصيلات التلقيم والتفريغ معًا.",
        highlights: ["طبقات وفتحات وفق الأجزاء المستهدفة", "شبكة أو صفيحة مثقبة أو ألواح وفق المنتج", "محركات اهتزاز ونظام نوابض", "أسطح غربلة سهلة الاستبدال"],
        figureAlt: "غربالان اهتزازيان بمحركات اهتزاز مركّبان جنبًا إلى جنب في الموقع",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة الخام", text: "نوع المادة والكثافة والرطوبة والكشط." },
          { title: "توزيع الأحجام والسعة", text: "معدل التلقيم وتوزيع أحجام الحبيبات." },
          { title: "الأجزاء", text: "أحجام الفصل المستهدفة وعدد الطبقات والفتحات." },
          { title: "الاهتزاز والميل", text: "نوع الإدارة والسعة والتردد وزاوية السطح." },
          { title: "الجسم والتوصيلات", text: "النوابض والهيكل وغطاء الغبار وفتحات التلقيم والتفريغ." },
        ],
        dataNote: "تُحدَّد مساحة الغربلة والفتحة وعدد الطبقات وقدرة الإدارة من بيانات المادة والسعة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول الغربال الاهتزازي",
        items: [
          {
            question: "كيف يعمل الغربال الاهتزازي؟",
            answer: "أثناء تحرك المادة على السطح المهتز تمر الحبيبات الناعمة من الفتحات وتبقى الخشنة فوقه، ويخرج كل جزء من مخرجه.",
          },
          {
            question: "كم عدد الطبقات المطلوبة؟",
            answer: "يعتمد عدد الطبقات على عدد الأجزاء المطلوبة، فكل طبقة إضافية تعطي جزءًا إضافيًا من المنتج.",
          },
          {
            question: "هل يمكن للغربال الاهتزازي إجراء غربلة رطبة؟",
            answer: "فقط إذا صُمم توزيع الماء والإحكام والتصريف لذلك. وللغربلة بمساعدة الماء راجع صفحة الغرابيل الرطبة.",
          },
          {
            question: "كيف يُقلَّل انسداد الغربال؟",
            answer: "يقلل اختيار الفتحة والسطح المناسبين وضبط الاهتزاز والتلقيم المنتظم الانسداد، وتُدرس إجراءات إضافية للمنتجات الرطبة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة والسعة وتوزيع أحجام التلقيم والأجزاء المستهدفة ونسبة الرطوبة وتخطيط الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لغربال اهتزازي",
        text: "شاركنا المادة والسعة والأجزاء المستهدفة، لنحدد معًا الغربال الاهتزازي المناسب.",
        mailSubject: "طلب عرض سعر: غربال اهتزازي",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المادة وكثافتها", "السعة (طن/ساعة)", "توزيع أحجام التلقيم", "الأجزاء المستهدفة", "نسبة الرطوبة", "تخطيط الموقع"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لغربال اهتزازي.",
          "",
          "المادة:",
          "السعة (طن/ساعة):",
          "حجم التلقيم:",
          "الأجزاء المستهدفة (مم):",
          "نسبة الرطوبة:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
