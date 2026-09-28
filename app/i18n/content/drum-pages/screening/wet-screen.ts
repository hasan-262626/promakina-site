import type { DrumPageConfig } from "../types";

// Sulu elek (yeni ürün): suyla desteklenen yaş eleme ve boyuta göre sınıflandırma. Susuzlandırma eleği, kimyasal arıtma
// veya flotasyon değildir; yüksek basınçlı yıkama, belirli kat sayısı veya su tüketimi varsayılmaz, değer verilmez.
// Projede sulu elek fotoğrafı yok: ana ve şekil görselleri üçüncü taraf örnek proses görselleridir (Commons, CC BY 2.0).
const el = (file: string) => `/images/eleme-uygulamalari/${file}`;
const dry = (file: string) => `/images/kurutma-uygulamalari/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const wetScreenPage: DrumPageConfig = {
  key: "wetScreen",
  group: "screeningSystems",
  trSlug: "sulu-elekler",
  mainImage: el("sulu-elek-nozullar.webp"),
  illustrativeMainImage: true,
  applications: [
    { image: dry("silis-kumu.webp"), link: "rotaryDryer" },
    { image: kr("agrega-konisi.webp"), link: "dewateringScreen" },
    { image: kr("bantta-cevher.webp"), link: "mining" },
  ],
  figure: el("sulu-elek-ust-kat.webp"),
  sectors: ["mining", "recycling"],
  resources: ["dewateringScreen", "vibratingScreen", "rotaryDryer", "screeningSystems"],
  machines: ["conveying", "crushers", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Sulu Elek İmalatı | Yaş Eleme ve Kum Yıkama Eleği | PRO MAKİNA",
        description:
          "Kum, agrega ve uygun mineraller için sulu elek imalatı. Suyla desteklenen yaş eleme ile ürün fraksiyonlarına ayırma; kat, açıklık ve su dağıtımı projeye göre.",
      },
      breadcrumbLabel: "Sulu Elekler",
      h1: "Sulu Elek İmalatı",
      productCategory: "Sulu Elek",
      overview: {
        imageAlt: "Püskürtme nozullarından su verilen titreşimli elek yüzeyinde agrega (örnek görsel)",
        imageBadge: "Örnek proses görseli",
        tagline: "Sulu Elek",
        keyFacts: [
          { label: "Görev", value: "Suyla desteklenen eleme ve boyut sınıflandırma" },
          { label: "Su", value: "Yaş besleme veya elek üzerinde su ilavesi" },
          { label: "Elek yüzeyi", value: "Kat, açıklık ve panel projeye göre" },
          { label: "Çıkış", value: "Elek üstü fraksiyon ve sulu elek altı akış" },
        ],
        title: "Suyla Desteklenen Yaş Eleme ve Sınıflandırma",
        paragraphs: [
          "Sulu elek, malzemenin titreşimli elek yüzeyinde suyla birlikte elendiği ve tane boyutuna göre fraksiyonlara ayrıldığı bir eleme sistemidir. Su, ince tanelerin iri taneler üzerinden ve birbirinden ayrılarak elek açıklıklarından geçmesine yardımcı olur; kum ve agregadaki kil ve ince malzemenin uzaklaştırılmasında da kullanılır.",
          "Su, malzemeyle birlikte yaş besleme olarak veya elek üzerindeki dağıtım boruları ve püskürtme nozullarıyla verilebilir. Nozul sayısı, yerleşimi ve su miktarı malzemeye ve hedef fraksiyonlara göre belirlenir; her sulu elekte yüksek basınçlı püskürtme bulunmaz.",
          "Elek üstünde kalan iri fraksiyonlar ayrı çıkışlardan alınır. Elek altına geçen ince malzeme ve su ise sulu bir akış olarak toplanır ve genellikle susuzlandırma, hidrosiklon veya çökeltme gibi tesisteki sonraki adımlara gönderilir.",
        ],
        note: "Sulu eleğin ana işlevi suyla desteklenen boyut ayrımıdır. Üründen serbest suyu ayırmak ise susuzlandırma eleğinin görevidir; sulu elek kimyasal arıtma veya flotasyon sistemi de değildir.",
      },
      process: {
        title: "Sulu Elek Proses Akışı",
        intro:
          "Şema, hammadde ve suyun eleğe verildiği, suyla desteklenen eleme ile boyuta göre ayrıldığı ve elek üstü ile elek altı fraksiyonların ayrı çıkışlardan alındığı akışı gösterir. Susuzlandırma, su geri kazanımı ve çamur yönetimi tesisteki ayrı adımlardır.",
        note: "Su miktarı ve dağıtımı, ince malzemenin elek altına geçişini ve fraksiyonların temizliğini doğrudan etkiler; değerler malzeme ve hedef ürüne göre belirlenir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Hammadde besleme", text: "Malzeme yaş olarak veya kuru beslenip elek girişinde suyla birlikte verilir." },
          { title: "Sulu eleme", text: "Titreşen elek yüzeyinde su, ince tanelerin açıklıklardan geçmesine yardımcı olur." },
          { title: "Elek üstü tahliyesi", text: "Her katta kalan iri fraksiyonlar ayrı çıkışlardan alınır." },
          { title: "Elek altı akışı", text: "İnce malzeme ve su elek altında toplanıp sonraki adıma gönderilir." },
        ],
        auxLineLabel: "Su hattı",
        auxLine: [
          { title: "Su besleme", text: "Su, dağıtım boruları veya projeye göre nozullarla elek üzerine verilir." },
          { title: "Sulu ince akış", text: "İnce malzemeyle birlikte toplanan su susuzlandırma veya çökeltmeye gider." },
        ],
        flow: {
          svgTitle: "Sulu elek proses akış şeması",
          svgDesc:
            "Malzeme hattı: hammadde besleme, sulu elek, elek üstü iri fraksiyon ve elek altı ince fraksiyon. Su hattı: su besleme ve sulu ince akışın sonraki adıma gönderilmesi.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Hammadde besleme", sub: "Yaş / su ilaveli" }],
          drum: { title: "SULU ELEK", sub: "su destekli eleme" },
          after: [
            { title: "Elek üstü", sub: "İri fraksiyonlar" },
            { title: "Elek altı", sub: "İnce fraksiyon + su" },
          ],
          aux: {
            lane: "SU HATTI",
            tone: "liquid",
            inputs: [{ title: "Su besleme", sub: "Dağıtım / nozul" }],
            outputs: [{ title: "Sulu ince akış", sub: "Susuzlandırma / çökeltme" }],
          },
        },
      },
      applications: {
        title: "Sulu Elek Uygulama Alanları",
        items: [
          {
            title: "Silis Kumu Hazırlama",
            text: "Silis kumunun suyla elenerek hedef tane aralığına getirilmesi ve ince malzemenin uzaklaştırılması. Sonraki kurutma adımı ayrı bir ekipmanla yapılır.",
            imageAlt: "Açık renkli, ince taneli silis kumu",
            linkLabel: "Kurutma Tamburu",
          },
          {
            title: "Agrega Yıkama-Eleme",
            text: "Kum ve çakılın sulu elekte fraksiyonlara ayrılması. Elek altına geçen kum fraksiyonu stoklamadan önce susuzlandırma eleğine gönderilebilir.",
            imageAlt: "Konveyörden oluşan agrega stok yığını",
            linkLabel: "Susuzlandırma Elekleri",
          },
          {
            title: "Cevher Hazırlama",
            text: "Kırılmış cevherin sonraki işlem adımlarından önce suyla elenerek boyut sınıflarına ayrılması. Elek paneli malzemesi cevherin aşındırıcılığına göre seçilir.",
            imageAlt: "Konveyör bant üzerinde yıkanmış cevher",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Sulu Elek Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA sulu elekleri işlenecek hammadde, besleme debisi, tane dağılımı ve hedef fraksiyonlara göre projelendirir. Elek gövdesi ve katlar, elek panelleri, su dağıtım boruları ve nozullar, titreşim sistemi ile elek üstü ve elek altı tahliye bağlantıları birlikte tasarlanır.",
        highlights: ["Hedef fraksiyona göre kat ve açıklık", "Aşınmaya dayanıklı elek panelleri", "Su dağıtım boruları ve nozul yerleşimi", "Elek altı sulu akış için toplama haznesi"],
        figureAlt: "Sulu elek üst katında su dağıtım boruları ve nozullar (örnek görsel)",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Besleme Debisi", text: "Hammadde türü, besleme debisi ve besleme şekli." },
          { title: "Tane Dağılımı", text: "Besleme tane dağılımı, kil ve ince malzeme oranı." },
          { title: "Su Debisi ve Dağıtımı", text: "Gerekli su miktarı, dağıtım boruları ve nozullar." },
          { title: "Açıklık ve Paneller", text: "Kat sayısı, elek açıklıkları ve panel malzemesi." },
          { title: "Fraksiyon Yönetimi", text: "Elek üstü çıkışları, sulu elek altı akış ve tesis entegrasyonu." },
        ],
        dataNote: "Elek alanı, açıklık, kat sayısı ve su ihtiyacı malzeme ve hedef ürün verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      faq: {
        title: "Sulu Elek Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Sulu elek nasıl çalışır?",
            answer:
              "Malzeme titreşen elek yüzeyinde suyla birlikte elenir. Su ince tanelerin açıklıklardan geçmesine yardımcı olur; iri fraksiyonlar elek üstünden, ince malzeme ve su elek altından alınır.",
          },
          {
            question: "Sulu elek ile susuzlandırma eleği arasındaki fark nedir?",
            answer:
              "Sulu elek suyla desteklenen eleme ile ürünü fraksiyonlara ayırır. Susuzlandırma eleği ise yaş üründen serbest suyu ayırarak nemini azaltır. Bir tesiste ikisi art arda kullanılabilir.",
          },
          {
            question: "Her sulu elekte püskürtme nozulu var mıdır?",
            answer:
              "Hayır. Su, yaş besleme olarak veya dağıtım boruları ve nozullarla verilebilir. Yöntem ve su miktarı malzemeye ve hedef fraksiyonlara göre belirlenir.",
          },
          {
            question: "Elek altındaki sulu akış nasıl yönetilir?",
            answer:
              "Elek altı ince malzeme ve su toplanarak susuzlandırma, hidrosiklon veya çökeltme gibi tesisteki sonraki adımlara gönderilir; bu adımlar ayrı ekipmanlarla yapılır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, besleme debisi, tane dağılımı, kil ve ince oranı, hedef fraksiyonlar ve tesisteki su kaynağı bilgisi temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Sulu elek için teknik teklif alın",
        text: "Malzemeniz, tane dağılımınız ve hedef fraksiyonlarınıza göre sulu elek sistemini birlikte netleştirelim.",
        mailSubject: "Sulu Elek Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Malzeme türü", "Besleme debisi (ton/saat)", "Tane dağılımı", "Kil ve ince malzeme oranı", "Hedef fraksiyonlar", "Tesisteki su kaynağı"],
        inquiryLines: [
          "Merhaba, sulu elek için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Besleme debisi (ton/saat):",
          "Tane dağılımı:",
          "Kil / ince oranı:",
          "Hedef fraksiyonlar (mm):",
          "Su kaynağı:",
        ],
      },
    },
    en: {
      meta: {
        title: "Wet Screen Manufacturer | Wet Screening and Sand Washing Screens",
        description:
          "Wet screens for sand, aggregates and suitable minerals. Water-assisted wet screening into product fractions; decks, apertures and water distribution per project.",
      },
      breadcrumbLabel: "Wet Screen",
      h1: "Wet Screen Manufacturing",
      productCategory: "Wet Screen",
      overview: {
        imageAlt: "Aggregate on a vibrating screen deck under water spray nozzles (illustrative photo)",
        imageBadge: "Illustrative process photo",
        tagline: "Wet Screen",
        keyFacts: [
          { label: "Duty", value: "Water-assisted screening and size classification" },
          { label: "Water", value: "Wet feed or water added on the screen" },
          { label: "Screen deck", value: "Decks, aperture and panels per project" },
          { label: "Outputs", value: "Oversize fractions and a wet undersize stream" },
        ],
        title: "Water-Assisted Wet Screening and Classification",
        paragraphs: [
          "A wet screen is a screening system in which material is screened together with water on a vibrating deck and separated into fractions by particle size. Water helps fine particles detach from coarse particles and from each other and pass through the apertures; it is also used to remove clay and fines from sand and aggregate.",
          "Water can be supplied with the material as a wet feed or through spray pipes and nozzles above the deck. The number, position of nozzles and water quantity are set for the material and target fractions; not every wet screen uses high-pressure spraying.",
          "Oversize fractions retained on the decks leave through separate outlets. Fines passing the deck are collected together with water as a wet stream and usually sent to the next steps in the plant such as dewatering, hydrocyclones or settling.",
        ],
        note: "The main function of a wet screen is water-assisted size separation. Removing free water from the product is the task of a dewatering screen; a wet screen is also not a chemical treatment or flotation system.",
      },
      process: {
        title: "Wet Screen Process Flow",
        intro:
          "The diagram shows the flow in which raw material and water are fed to the screen, separated by size through water-assisted screening, and oversize and undersize fractions leave through separate outlets. Dewatering, water recovery and slurry handling are separate steps in the plant.",
        note: "Water quantity and distribution directly affect how fines pass the deck and how clean the fractions are; values are set for the material and target product.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Raw material feed", text: "Material is fed wet, or dry with water added at the screen inlet." },
          { title: "Wet screening", text: "On the vibrating deck, water helps fine particles pass through the apertures." },
          { title: "Oversize discharge", text: "Coarse fractions retained on each deck leave through separate outlets." },
          { title: "Undersize stream", text: "Fines and water are collected below the screen and sent to the next step." },
        ],
        auxLineLabel: "Water line",
        auxLine: [
          { title: "Water supply", text: "Water is supplied onto the deck by spray pipes or nozzles as required by the project." },
          { title: "Wet fines stream", text: "Water collected with the fines goes to dewatering or settling." },
        ],
        flow: {
          svgTitle: "Wet screen process flow diagram",
          svgDesc:
            "Material line: raw material feed, wet screen, oversize coarse fractions and undersize fine fraction. Water line: water supply and wet fines stream to the next step.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Raw material feed", sub: "Wet / water added" }],
          drum: { title: "WET SCREEN", sub: "water-assisted screening" },
          after: [
            { title: "Oversize", sub: "Coarse fractions" },
            { title: "Undersize", sub: "Fines + water" },
          ],
          aux: {
            lane: "WATER LINE",
            tone: "liquid",
            inputs: [{ title: "Water supply", sub: "Spray pipes / nozzles" }],
            outputs: [{ title: "Wet fines stream", sub: "Dewatering / settling" }],
          },
        },
      },
      applications: {
        title: "Wet Screen Applications",
        items: [
          {
            title: "Silica Sand Preparation",
            text: "Wet screening silica sand to the target size range and removing fines. The subsequent drying step is carried out by separate equipment.",
            imageAlt: "Light-coloured fine silica sand",
            linkLabel: "Rotary Dryer",
          },
          {
            title: "Aggregate Washing and Screening",
            text: "Separating sand and gravel into fractions on the wet screen. The sand fraction passing the deck can be sent to a dewatering screen before stockpiling.",
            imageAlt: "Aggregate stockpile formed by a conveyor",
            linkLabel: "Dewatering Screen",
          },
          {
            title: "Ore Preparation",
            text: "Wet screening crushed ore into size classes before subsequent processing steps. Panel material is selected for the abrasiveness of the ore.",
            imageAlt: "Washed ore on a conveyor belt",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Wet Screen Design and Manufacturing",
        intro:
          "PRO MAKINA engineers wet screens around the raw material, feed rate, size distribution and target fractions. Screen body and decks, screen panels, spray pipes and nozzles, vibration system, and oversize and undersize outlets are designed together.",
        highlights: ["Decks and apertures for target fractions", "Wear-resistant screen panels", "Spray pipes and nozzle layout", "Collection hopper for the wet undersize stream"],
        figureAlt: "Water spray pipes and nozzles on the top deck of a wet screen (illustrative photo)",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Feed Rate", text: "Raw material type, feed rate and feeding method." },
          { title: "Size Distribution", text: "Feed size distribution, clay and fines content." },
          { title: "Water Flow and Distribution", text: "Required water quantity, spray pipes and nozzles." },
          { title: "Aperture and Panels", text: "Number of decks, apertures and panel material." },
          { title: "Fraction Handling", text: "Oversize outlets, wet undersize stream and plant integration." },
        ],
        dataNote: "Screen area, aperture, number of decks and water demand are defined from material and target product data; no generic values are stated on this page.",
      },
      faq: {
        title: "Wet Screen FAQ",
        items: [
          {
            question: "How does a wet screen work?",
            answer:
              "Material is screened together with water on a vibrating deck. Water helps fines pass the apertures; oversize leaves over the deck, fines and water leave below it.",
          },
          {
            question: "What is the difference between a wet screen and a dewatering screen?",
            answer:
              "A wet screen separates product into fractions by water-assisted screening. A dewatering screen removes free water from wet product to reduce its moisture. The two can be used in sequence in a plant.",
          },
          {
            question: "Does every wet screen have spray nozzles?",
            answer:
              "No. Water can be supplied as a wet feed or through spray pipes and nozzles. The method and water quantity depend on the material and target fractions.",
          },
          {
            question: "How is the wet undersize stream handled?",
            answer:
              "Fines and water below the screen are collected and sent to the plant's next steps such as dewatering, hydrocyclones or settling; these are done by separate equipment.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, feed rate, size distribution, clay and fines content, target fractions and the water source at the plant.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a wet screen",
        text: "Share your material, size distribution and target fractions, and we will define the wet screening system together with you.",
        mailSubject: "Wet Screen Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Material type", "Feed rate (t/h)", "Size distribution", "Clay and fines content", "Target fractions", "Water source at the plant"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a wet screen.",
          "",
          "Material:",
          "Feed rate (t/h):",
          "Size distribution:",
          "Clay / fines content:",
          "Target fractions (mm):",
          "Water source:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Грохот мокрого грохочения | Грохоты для промывки песка",
        description:
          "Грохоты мокрого грохочения для песка, заполнителей и минералов. Грохочение с подачей воды на товарные фракции; деки, ячейки и подача воды — по проекту.",
      },
      breadcrumbLabel: "Грохот мокрого грохочения",
      h1: "Производство грохотов мокрого грохочения",
      productCategory: "Грохот мокрого грохочения",
      overview: {
        imageAlt: "Заполнитель на вибрирующей деке под струями форсунок (иллюстративное фото)",
        imageBadge: "Иллюстративное фото процесса",
        tagline: "Грохот мокрого грохочения",
        keyFacts: [
          { label: "Назначение", value: "Грохочение с подачей воды и классификация по крупности" },
          { label: "Вода", value: "Мокрое питание или подача воды на грохот" },
          { label: "Дека", value: "Число дек, ячейка и панели по проекту" },
          { label: "Выходы", value: "Надрешётные фракции и мокрый подрешётный поток" },
        ],
        title: "Мокрое грохочение и классификация с подачей воды",
        paragraphs: [
          "Грохот мокрого грохочения — система, в которой материал грохотится вместе с водой на вибрирующей деке и разделяется на фракции по крупности. Вода помогает мелким частицам отделиться от крупных и друг от друга и пройти через ячейки; она же используется для удаления глины и мелочи из песка и заполнителя.",
          "Вода может подаваться вместе с материалом как мокрое питание или через распределительные трубы и форсунки над декой. Число и расположение форсунок и расход воды задаются по материалу и требуемым фракциям; высоконапорное орошение есть не на каждом грохоте.",
          "Задержанные на деках крупные фракции выходят раздельно. Прошедшая мелочь собирается вместе с водой в мокрый поток и обычно направляется на следующие стадии — обезвоживание, гидроциклоны или отстаивание.",
        ],
        note: "Основная функция грохота мокрого грохочения — разделение по крупности с помощью воды. Удаление свободной воды из продукта — задача обезвоживающего грохота; мокрый грохот также не является системой химической очистки или флотации.",
      },
      process: {
        title: "Технологическая схема грохота мокрого грохочения",
        intro:
          "Схема показывает поток: сырьё и вода подаются на грохот, разделяются по крупности при мокром грохочении, надрешётные и подрешётные фракции выходят раздельно. Обезвоживание, оборот воды и обработка шлама — отдельные стадии.",
        note: "Расход и распределение воды напрямую влияют на прохождение мелочи и чистоту фракций; значения задаются по материалу и требуемому продукту.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача сырья", text: "Материал подаётся мокрым или сухим с подачей воды на входе грохота." },
          { title: "Мокрое грохочение", text: "На вибрирующей деке вода помогает мелочи пройти через ячейки." },
          { title: "Выход надрешётного", text: "Крупные фракции, задержанные на каждой деке, выходят раздельно." },
          { title: "Подрешётный поток", text: "Мелочь и вода собираются под грохотом и направляются далее." },
        ],
        auxLineLabel: "Линия воды",
        auxLine: [
          { title: "Подача воды", text: "Вода подаётся на деку распределительными трубами или форсунками по проекту." },
          { title: "Мокрый поток мелочи", text: "Вода с мелочью направляется на обезвоживание или отстаивание." },
        ],
        flow: {
          svgTitle: "Технологическая схема грохота мокрого грохочения",
          svgDesc:
            "Линия материала: подача сырья, мокрый грохот, надрешётные крупные фракции и подрешётная мелочь. Линия воды: подача воды и мокрый поток мелочи на следующую стадию.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Подача сырья", sub: "Мокрое / с водой" }],
          drum: { title: "МОКРЫЙ ГРОХОТ", sub: "грохочение с водой" },
          after: [
            { title: "Надрешётный", sub: "Крупные фракции" },
            { title: "Подрешётный", sub: "Мелочь + вода" },
          ],
          aux: {
            lane: "ЛИНИЯ ВОДЫ",
            tone: "liquid",
            inputs: [{ title: "Подача воды", sub: "Трубы / форсунки" }],
            outputs: [{ title: "Мокрый поток", sub: "Обезвоживание / отстой" }],
          },
        },
      },
      applications: {
        title: "Области применения грохотов мокрого грохочения",
        items: [
          {
            title: "Подготовка кварцевого песка",
            text: "Мокрое грохочение кварцевого песка до требуемого диапазона крупности и удаление мелочи. Последующая сушка выполняется отдельным оборудованием.",
            imageAlt: "Светлый мелкозернистый кварцевый песок",
            linkLabel: "Сушильный барабан",
          },
          {
            title: "Промывка и грохочение заполнителей",
            text: "Разделение песка и гравия на фракции на мокром грохоте. Прошедшая песчаная фракция перед складированием может направляться на обезвоживающий грохот.",
            imageAlt: "Штабель заполнителя, формируемый конвейером",
            linkLabel: "Обезвоживающий грохот",
          },
          {
            title: "Подготовка руды",
            text: "Мокрое грохочение дроблёной руды по классам крупности перед последующими стадиями переработки. Материал панелей выбирается по абразивности руды.",
            imageAlt: "Мытая руда на ленточном конвейере",
            linkLabel: "Горнодобывающая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление грохотов мокрого грохочения",
        intro:
          "PRO MAKINA проектирует грохоты мокрого грохочения исходя из сырья, производительности, гранулометрии и требуемых фракций. Короб и деки, просеивающие панели, распределительные трубы и форсунки, вибросистема, выходы надрешётного и подрешётного продукта разрабатываются совместно.",
        highlights: ["Деки и ячейки под требуемые фракции", "Износостойкие панели", "Трубы орошения и расположение форсунок", "Поддон для мокрого подрешётного потока"],
        figureAlt: "Трубы и форсунки орошения на верхней деке мокрого грохота (иллюстративное фото)",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Производительность", text: "Вид сырья, производительность и способ подачи." },
          { title: "Гранулометрия", text: "Гранулометрия питания, содержание глины и мелочи." },
          { title: "Расход и распределение воды", text: "Требуемый расход воды, трубы и форсунки." },
          { title: "Ячейки и панели", text: "Число дек, размеры ячеек и материал панелей." },
          { title: "Управление фракциями", text: "Выходы надрешётного, мокрый подрешётный поток и интеграция в линию." },
        ],
        dataNote: "Площадь грохочения, ячейка, число дек и потребность в воде определяются по данным материала и продукта; общие значения не приводятся.",
      },
      faq: {
        title: "Часто задаваемые вопросы о грохотах мокрого грохочения",
        items: [
          {
            question: "Как работает грохот мокрого грохочения?",
            answer:
              "Материал грохотится вместе с водой на вибрирующей деке. Вода помогает мелочи пройти через ячейки; крупное выходит сверху, мелочь и вода — снизу.",
          },
          {
            question: "Чем он отличается от обезвоживающего грохота?",
            answer:
              "Мокрый грохот разделяет продукт на фракции с помощью воды. Обезвоживающий грохот удаляет свободную воду из мокрого продукта. На заводе они могут работать последовательно.",
          },
          {
            question: "Есть ли форсунки на каждом мокром грохоте?",
            answer: "Нет. Вода может подаваться с питанием или через трубы и форсунки; способ и расход зависят от материала и требуемых фракций.",
          },
          {
            question: "Как обрабатывается мокрый подрешётный поток?",
            answer: "Мелочь и вода собираются под грохотом и направляются на обезвоживание, гидроциклоны или отстаивание — это отдельное оборудование.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, производительность, гранулометрия, содержание глины и мелочи, требуемые фракции и источник воды на заводе.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на грохот мокрого грохочения",
        text: "Сообщите материал, гранулометрию и требуемые фракции — вместе определим систему мокрого грохочения.",
        mailSubject: "Запрос предложения: грохот мокрого грохочения",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид материала", "Производительность (т/ч)", "Гранулометрия", "Содержание глины и мелочи", "Требуемые фракции", "Источник воды на заводе"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на грохот мокрого грохочения.",
          "",
          "Материал:",
          "Производительность (т/ч):",
          "Гранулометрия:",
          "Глина / мелочь:",
          "Требуемые фракции (мм):",
          "Источник воды:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الغربال الرطب | غرابيل الغربلة الرطبة وغسيل الرمل",
        description:
          "غرابيل رطبة للرمل والركام والمعادن المناسبة. غربلة رطبة بمساعدة الماء إلى أجزاء المنتج، مع تحديد الطبقات والفتحات وتوزيع الماء حسب المشروع.",
      },
      breadcrumbLabel: "الغربال الرطب",
      h1: "تصنيع الغرابيل الرطبة",
      productCategory: "غربال رطب",
      overview: {
        imageAlt: "ركام على سطح غربال اهتزازي تحت فوهات رش الماء (صورة توضيحية)",
        imageBadge: "صورة توضيحية للعملية",
        tagline: "غربال رطب",
        keyFacts: [
          { label: "المهمة", value: "غربلة وتصنيف حسب الحجم بمساعدة الماء" },
          { label: "الماء", value: "تلقيم رطب أو إضافة الماء على الغربال" },
          { label: "سطح الغربلة", value: "الطبقات والفتحة والألواح حسب المشروع" },
          { label: "المخرجات", value: "أجزاء فوق الغربال وتدفق رطب أسفله" },
        ],
        title: "غربلة رطبة وتصنيف بمساعدة الماء",
        paragraphs: [
          "الغربال الرطب نظام غربلة تُغربَل فيه المادة مع الماء على سطح مهتز وتُفصل إلى أجزاء حسب حجم الحبيبات. يساعد الماء الحبيبات الناعمة على الانفصال عن الخشنة وعن بعضها والمرور من الفتحات، ويُستخدم كذلك لإزالة الطين والناعم من الرمل والركام.",
          "يمكن تزويد الماء مع المادة كتلقيم رطب أو عبر أنابيب توزيع وفوهات رش فوق السطح، ويُحدَّد عدد الفوهات وموضعها وكمية الماء وفق المادة والأجزاء المستهدفة، ولا يستخدم كل غربال رطب الرش عالي الضغط.",
          "تخرج الأجزاء الخشنة المتبقية على الطبقات من مخارج منفصلة، أما الناعم المار أسفل الغربال فيُجمع مع الماء كتدفق رطب ويُرسل عادةً إلى المراحل التالية في المصنع مثل نزح المياه أو الهيدروسيكلون أو الترسيب.",
        ],
        note: "الوظيفة الأساسية للغربال الرطب هي الفصل حسب الحجم بمساعدة الماء، أما إزالة الماء الحر من المنتج فهي مهمة غربال نزح المياه، كما أن الغربال الرطب ليس نظام معالجة كيميائية أو تعويم.",
      },
      process: {
        title: "تدفق العملية في الغربال الرطب",
        intro:
          "يوضح المخطط التدفق الذي تُلقَّم فيه المادة الخام والماء إلى الغربال وتُفصل حسب الحجم بالغربلة الرطبة، ثم تخرج الأجزاء فوق الغربال وأسفله من مخارج منفصلة، بينما نزح المياه واسترجاعها وإدارة الحمأة مراحل منفصلة في المصنع.",
        note: "تؤثر كمية الماء وتوزيعه مباشرة في مرور الناعم ونظافة الأجزاء، وتُحدَّد القيم وفق المادة والمنتج المستهدف.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم المادة الخام", text: "تُلقَّم المادة رطبة، أو جافة مع إضافة الماء عند مدخل الغربال." },
          { title: "الغربلة الرطبة", text: "على السطح المهتز يساعد الماء الحبيبات الناعمة على المرور من الفتحات." },
          { title: "تفريغ الجزء الخشن", text: "تخرج الأجزاء الخشنة المتبقية على كل طبقة من مخارج منفصلة." },
          { title: "التدفق أسفل الغربال", text: "يُجمع الناعم والماء أسفل الغربال ويُرسلان إلى المرحلة التالية." },
        ],
        auxLineLabel: "خط الماء",
        auxLine: [
          { title: "تزويد الماء", text: "يُزوَّد الماء على السطح بأنابيب توزيع أو فوهات حسب المشروع." },
          { title: "تدفق الناعم الرطب", text: "يذهب الماء المجموع مع الناعم إلى نزح المياه أو الترسيب." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في الغربال الرطب",
          svgDesc:
            "خط المادة: تلقيم المادة الخام، الغربال الرطب، الأجزاء الخشنة فوق الغربال والجزء الناعم أسفله. خط الماء: تزويد الماء وتدفق الناعم الرطب إلى المرحلة التالية.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "تلقيم المادة", sub: "رطب / مع الماء" }],
          drum: { title: "الغربال الرطب", sub: "غربلة بمساعدة الماء" },
          after: [
            { title: "فوق الغربال", sub: "أجزاء خشنة" },
            { title: "أسفل الغربال", sub: "ناعم + ماء" },
          ],
          aux: {
            lane: "خط الماء",
            tone: "liquid",
            inputs: [{ title: "تزويد الماء", sub: "أنابيب / فوهات" }],
            outputs: [{ title: "تدفق رطب", sub: "نزح المياه / ترسيب" }],
          },
        },
      },
      applications: {
        title: "مجالات استخدام الغربال الرطب",
        items: [
          {
            title: "تحضير رمل السيليكا",
            text: "غربلة رمل السيليكا رطبًا للوصول إلى نطاق الحجم المستهدف وإزالة الناعم، بينما تتم مرحلة التجفيف اللاحقة بمعدة منفصلة.",
            imageAlt: "رمل سيليكا ناعم فاتح اللون",
            linkLabel: "أسطوانة التجفيف",
          },
          {
            title: "غسيل الركام وغربلته",
            text: "فصل الرمل والحصى إلى أجزاء على الغربال الرطب، ويمكن إرسال جزء الرمل المار إلى غربال نزح المياه قبل التخزين.",
            imageAlt: "كومة ركام يشكّلها ناقل",
            linkLabel: "غربال نزح المياه",
          },
          {
            title: "تحضير الخامات",
            text: "غربلة الخام المكسّر رطبًا إلى فئات حجمية قبل مراحل المعالجة اللاحقة، مع اختيار مادة الألواح وفق كشط الخام.",
            imageAlt: "خام مغسول على سير ناقل",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع الغرابيل الرطبة المخصصة",
        intro:
          "تصمم PRO MAKINA الغرابيل الرطبة وفق المادة الخام ومعدل التلقيم وتوزيع الأحجام والأجزاء المستهدفة، مع تصميم جسم الغربال والطبقات وألواح الغربلة وأنابيب التوزيع والفوهات ونظام الاهتزاز ومخارج الأجزاء فوق الغربال وأسفله معًا.",
        highlights: ["طبقات وفتحات وفق الأجزاء المستهدفة", "ألواح غربلة مقاومة للتآكل", "أنابيب رش وتوزيع الفوهات", "قادوس جمع للتدفق الرطب أسفل الغربال"],
        figureAlt: "أنابيب وفوهات رش الماء على الطبقة العلوية لغربال رطب (صورة توضيحية)",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "معدل التلقيم", text: "نوع المادة الخام ومعدل التلقيم وطريقته." },
          { title: "توزيع الأحجام", text: "توزيع أحجام التلقيم ونسبة الطين والناعم." },
          { title: "تدفق الماء وتوزيعه", text: "كمية الماء المطلوبة وأنابيب التوزيع والفوهات." },
          { title: "الفتحة والألواح", text: "عدد الطبقات وفتحات الغربلة ومادة الألواح." },
          { title: "إدارة الأجزاء", text: "مخارج الجزء الخشن والتدفق الرطب أسفل الغربال والتكامل مع المصنع." },
        ],
        dataNote: "تُحدَّد مساحة الغربلة والفتحة وعدد الطبقات والحاجة إلى الماء من بيانات المادة والمنتج المستهدف، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      faq: {
        title: "أسئلة شائعة حول الغربال الرطب",
        items: [
          {
            question: "كيف يعمل الغربال الرطب؟",
            answer: "تُغربَل المادة مع الماء على سطح مهتز، ويساعد الماء الناعم على المرور من الفتحات، فيخرج الخشن من فوق الغربال والناعم مع الماء من أسفله.",
          },
          {
            question: "ما الفرق بين الغربال الرطب وغربال نزح المياه؟",
            answer:
              "يفصل الغربال الرطب المنتج إلى أجزاء بالغربلة بمساعدة الماء، أما غربال نزح المياه فيزيل الماء الحر من المنتج الرطب لخفض رطوبته، ويمكن استخدامهما على التوالي في المصنع.",
          },
          {
            question: "هل يحتوي كل غربال رطب على فوهات رش؟",
            answer: "لا. يمكن تزويد الماء مع التلقيم أو عبر الأنابيب والفوهات، وتعتمد الطريقة وكمية الماء على المادة والأجزاء المستهدفة.",
          },
          {
            question: "كيف يُدار التدفق الرطب أسفل الغربال؟",
            answer: "يُجمع الناعم والماء أسفل الغربال ويُرسلان إلى نزح المياه أو الهيدروسيكلون أو الترسيب، وهي مراحل تتم بمعدات منفصلة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة ومعدل التلقيم وتوزيع الأحجام ونسبة الطين والناعم والأجزاء المستهدفة ومصدر الماء في المصنع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لغربال رطب",
        text: "شاركنا المادة وتوزيع الأحجام والأجزاء المستهدفة، لنحدد معًا نظام الغربلة الرطبة المناسب.",
        mailSubject: "طلب عرض سعر: غربال رطب",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المادة", "معدل التلقيم (طن/ساعة)", "توزيع الأحجام", "نسبة الطين والناعم", "الأجزاء المستهدفة", "مصدر الماء في المصنع"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لغربال رطب.",
          "",
          "المادة:",
          "معدل التلقيم (طن/ساعة):",
          "توزيع الأحجام:",
          "نسبة الطين / الناعم:",
          "الأجزاء المستهدفة (مم):",
          "مصدر الماء:",
        ],
      },
    },
  },
};
