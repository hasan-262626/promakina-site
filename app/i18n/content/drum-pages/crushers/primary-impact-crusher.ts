import type { DrumPageConfig } from "../types";

// Bıçaklı primer kırıcı: fotoğraflara göre yatay milli darbeli kırıcı; "bıçak" rotor üzerindeki darbe
// bıçaklarını (blow bar) ifade eder. İlk kademe kaba kırma yapar; ürün nihai ve homojen boyut kabul edilmez.
const img = (file: string) => `/images/kirici primer 1/${file}`;
const app = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const primaryImpactCrusherPage: DrumPageConfig = {
  key: "primaryImpactCrusher",
  group: "crushers",
  trSlug: "bicakli-primer-kiricilar",
  mainImage: img("kiricibirinci6.png"),
  applications: [
    { image: app("dolomit-ocak.webp"), link: "mining" },
    { image: app("geri-donusum-sahasi.webp"), link: "recycling" },
  ],
  figure: img("kiricibirinci2.jpg"),
  gallery: [img("kiricibirinci1.jpg"), img("kiricibirinci3.jpg"), img("kiricibirinci4.jpg"), img("kiricibirinci5.png")],
  sectors: ["mining", "recycling", "chemicalProcess"],
  resources: ["secondaryImpactCrusher", "jawCrusher", "vsiCrusher", "screeningSystems"],
  machines: ["screeningSystems", "conveying", "storageSystems", "dustCollection"],
  texts: {
    tr: {
      meta: {
        title: "Bıçaklı Primer Kırıcı İmalatı | Darbeli Ön Kırıcı | PRO MAKİNA",
        description:
          "Darbe bıçaklı rotor ve darbe plakalarıyla kalker, dolomit ve yıkıntı atıklarını ilk kademede kıran bıçaklı primer kırıcı imalatı. Besleme boyutuna göre tasarım.",
      },
      breadcrumbLabel: "Bıçaklı Primer Kırıcılar",
      h1: "Bıçaklı Primer Kırıcı – Darbe Bıçaklı İlk Kademe Kırıcı",
      productCategory: "Primer Darbeli Kırıcı",
      overview: {
        imageAlt: "Sarı gövdeli, volanlı bıçaklı primer kırıcı",
        tagline: "Primer Darbeli Kırıcı",
        keyFacts: [
          { label: "Kırma prensibi", value: "Darbe bıçağı ve plakalara çarpma" },
          { label: "Kademe", value: "İlk kademe (kaba kırma)" },
          { label: "Malzeme", value: "Orta sert, düşük aşındırıcı taş ve yıkıntı" },
          { label: "Aşınan parçalar", value: "Darbe bıçakları ve astarlar" },
        ],
        title: "İri Malzemenin Darbeyle Kaba Kırılması",
        paragraphs: [
          "Bıçaklı primer kırıcı, yatay mil üzerinde dönen ağır bir rotor ve rotora takılı darbe bıçaklarından oluşan darbeli bir kırıcıdır. Geniş besleme ağzından giren iri malzeme bıçakların darbesiyle kırılır ve gövde içindeki darbe plakalarına fırlatılarak tekrar kırılır.",
          "Makinenin görevi, ocaktan veya yıkıntı sahasından gelen iri malzemeyi ikinci kademe kırıcıların ve eleklerin işleyebileceği boyuta indirmektir. Çıkan ürün kaba ve geniş dağılımlıdır; nihai ürün boyutu için ikinci kademe kırma ve eleme gerekir.",
          "Darbeli kırma nedeniyle kalker, dolomit ve beton yıkıntısı gibi orta sertlikte ve düşük aşındırıcılıktaki malzemelerde uygundur. Sert ve yüksek aşındırıcılıktaki kayaçlarda çeneli kırıcı genellikle daha uygun ilk kademe çözümüdür.",
        ],
        note: "Gövdenin hidrolik olarak açılabilmesi, darbe bıçaklarının ve plakaların değişimi için bakım erişimini kolaylaştırır.",
      },
      process: {
        title: "Bıçaklı Primer Kırıcı Malzeme Akışı",
        intro:
          "Şema, primer kırıcının iri malzemeyi besleyiciden alıp kaba kırdığı ve ikinci kademe işleme gönderdiği tipik akışı gösterir. Besleyici, eleme ve sekonder kırma ayrı ekipmanlardır.",
        note: "Primer kırıcı çıkışı nihai ürün değildir; ürün genellikle eleme ve sekonder kırıcıya aktarılır.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "İri hammadde besleme", text: "Ocak taşı veya yıkıntı besleyici ile kırıcı ağzına verilir." },
          { title: "Darbe bıçaklarıyla kırma", text: "Dönen rotordaki bıçaklar malzemeye çarparak onu parçalar." },
          { title: "Darbe plakalarında kırılma", text: "Fırlatılan parçalar gövde içindeki plakalara çarpıp küçülür." },
          { title: "Sekonder işlem için tahliye", text: "Kaba kırılmış ürün eleme veya ikinci kademe kırıcıya aktarılır." },
        ],
        flow: {
          svgTitle: "Bıçaklı primer kırıcı malzeme akış şeması",
          svgDesc: "Malzeme hattı: besleyici, bıçaklı primer kırıcı, kaba ürün tahliyesi, eleme ve sekonder kırma.",
          mainLane: "MALZEME HATTI",
          shape: "box",
          before: [{ title: "Besleme", sub: "Besleyici, ön eleme" }],
          drum: { title: "PRİMER KIRICI", sub: "rotor · darbe bıçağı · plaka" },
          after: [
            { title: "Kaba ürün", sub: "Alt tahliye" },
            { title: "Eleme / sekonder", sub: "İkinci kademe" },
          ],
        },
      },
      applications: {
        title: "Bıçaklı Primer Kırıcı Uygulama Alanları",
        items: [
          {
            title: "Kalker ve Dolomit Ocakları",
            text: "Kalker ve dolomit gibi orta sertlikteki ocak taşlarının ilk kademede kaba kırılması. Besleme ağzı en iri parça boyutuna göre boyutlandırılır.",
            imageAlt: "Dolomit ocağında kırılmış açık renkli kaya yüzeyi",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
          {
            title: "Yıkıntı ve Beton Geri Kazanımı",
            text: "Beton ve yapı yıkıntı atıklarının geri kazanım hattında ön kırılması. Donatı ve yabancı maddeler hattaki ayırma ekipmanlarıyla ayrılır.",
            imageAlt: "Ekskavatör ve kırma ekipmanıyla işlenen yıkıntı malzemesi",
            linkLabel: "Geri Dönüşüm ve Atık Yönetimi",
          },
        ],
      },
      design: {
        title: "Projeye Özel Bıçaklı Primer Kırıcı Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA primer kırıcıları en iri besleme boyutu, malzeme sertliği, kapasite ve sonraki kırma kademesine göre projelendirir. Rotor ve darbe bıçakları, darbe plakaları ve ayar düzeni, gövde, volan, tahrik ve hidrolik açma sistemi birlikte tasarlanır.",
        highlights: ["Geniş besleme ağzı ve ağır rotor", "Değiştirilebilir darbe bıçakları", "Ayarlanabilir darbe plakaları", "Hidrolik açılır gövde"],
        figureAlt: "Gövdesi hidrolik olarak açılmış bıçaklı primer kırıcı",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Besleme", text: "En iri parça boyutu, besleme şekli ve ön eleme." },
          { title: "Malzeme", text: "Sertlik, aşındırıcılık, nem ve kil içeriği." },
          { title: "Ön Kırma Boyutu", text: "Sekonder kademeye uygun kaba ürün boyutu." },
          { title: "Rotor ve Bıçak", text: "Rotor ölçüsü ve ağırlığı, darbe bıçağı sayısı ve malzemesi." },
          { title: "Bakım ve Entegrasyon", text: "Hidrolik açma, bıçak değişimi ve sekonder kırıcıyla bağlantı." },
        ],
        dataNote: "Rotor hızı, güç ve kapasite malzeme ve hat verisiyle belirlenir; primer kırıcı ürünü nihai boyut olarak kabul edilmez.",
      },
      gallery: {
        title: "Bıçaklı Primer Kırıcı Fotoğraf Galerisi",
        captions: [
          "Volanı ve kumanda panosu görünen primer kırıcı",
          "Besleme ağzı açık görünen primer kırıcı",
          "Önden görünüşte primer kırıcı besleme ağzı",
          "Sarı gövdeli primer kırıcı ve besleme ağzı",
        ],
      },
      faq: {
        title: "Bıçaklı Primer Kırıcı Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Bıçaklı primer kırıcı nasıl çalışır?",
            answer: "Yatay mil üzerinde dönen rotordaki darbe bıçakları malzemeye çarpar; parçalar gövdedeki darbe plakalarına fırlatılarak tekrar kırılır ve kaba ürün alttan çıkar.",
          },
          {
            question: "Buradaki 'bıçak' neyi ifade eder?",
            answer: "Rotor üzerine takılan ve malzemeye çarparak kıran darbe bıçaklarını (darbe çubuklarını) ifade eder; kesici bir bıçak değildir.",
          },
          {
            question: "Primer kırıcı ürünü nihai boyutta mıdır?",
            answer: "Hayır. Primer kırıcı iri malzemeyi kaba boyuta indirir; nihai boyut için eleme ve sekonder kırma gerekir.",
          },
          {
            question: "Hangi malzemeler için uygundur?",
            answer: "Kalker, dolomit ve beton yıkıntısı gibi orta sertlikte ve düşük aşındırıcılıktaki malzemeler için uygundur. Sert ve aşındırıcı kayaçlarda çeneli kırıcı değerlendirilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Malzeme türü, sertlik ve aşındırıcılık, en iri besleme boyutu, istenen ön kırma boyutu ve saatlik kapasite temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Bıçaklı primer kırıcı için teknik teklif alın",
        text: "Malzemeniz, en iri besleme boyutunuz ve sonraki kırma kademenize göre primer kırıcıyı birlikte netleştirelim.",
        mailSubject: "Bıçaklı Primer Kırıcı Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Malzeme türü ve sertliği",
          "Aşındırıcılık, nem ve kil içeriği",
          "En iri besleme boyutu",
          "İstenen ön kırma boyutu",
          "Saatlik kapasite (ton/saat)",
          "Sonraki kırma ve eleme kademesi",
        ],
        inquiryLines: [
          "Merhaba, bıçaklı primer kırıcı için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "En iri besleme boyutu (mm):",
          "Ön kırma boyutu (mm):",
          "Kapasite (ton/saat):",
          "Sonraki kademe:",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Primary Impact Crusher | Blow Bar Primary Crushing",
        description:
          "Primary impact crushers that break limestone, dolomite and demolition waste in the first stage with a blow bar rotor and impact aprons. Designed for your feed size.",
      },
      breadcrumbLabel: "Primary Impact Crusher",
      h1: "Primary Impact Crusher – First-Stage Crusher with Blow Bars",
      productCategory: "Primary Impact Crusher",
      overview: {
        imageAlt: "Yellow primary impact crusher with flywheel",
        tagline: "Primary Impact Crusher",
        keyFacts: [
          { label: "Crushing principle", value: "Blow bar impact and aprons" },
          { label: "Stage", value: "First stage (coarse crushing)" },
          { label: "Material", value: "Medium-hard, low-abrasive rock and debris" },
          { label: "Wear parts", value: "Blow bars and liners" },
        ],
        title: "Coarse Crushing of Large Material by Impact",
        paragraphs: [
          "A primary impact crusher is an impact crusher with a heavy rotor on a horizontal shaft fitted with blow bars. Coarse material entering the large feed opening is broken by the blow bars and thrown against impact aprons in the housing, where it breaks again.",
          "Its task is to reduce coarse material from the quarry or demolition site to a size that secondary crushers and screens can handle. The product is coarse with a wide distribution; secondary crushing and screening are needed for the final size.",
          "Because it crushes by impact, it suits medium-hard, low-abrasive materials such as limestone, dolomite and concrete debris. For hard and highly abrasive rock, a jaw crusher is usually the better first-stage solution.",
        ],
        note: "A hydraulically opening housing makes maintenance access easier when replacing blow bars and aprons.",
      },
      process: {
        title: "Primary Impact Crusher Material Flow",
        intro: "The diagram shows the typical flow in which the primary crusher takes coarse material from the feeder, crushes it coarsely and sends it to the second stage. Feeder, screening and secondary crushing are separate equipment.",
        note: "The primary crusher output is not the final product; it usually goes to screening and a secondary crusher.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Coarse feed", text: "Quarry rock or debris is fed to the crusher opening by a feeder." },
          { title: "Crushing by blow bars", text: "Blow bars on the rotating rotor strike and break the material." },
          { title: "Breaking on aprons", text: "Thrown pieces hit the impact aprons in the housing and are reduced." },
          { title: "Discharge for secondary processing", text: "Coarsely crushed product goes to screening or the second-stage crusher." },
        ],
        flow: {
          svgTitle: "Primary impact crusher material flow diagram",
          svgDesc: "Material line: feeder, primary impact crusher, coarse product discharge, screening and secondary crushing.",
          mainLane: "MATERIAL LINE",
          shape: "box",
          before: [{ title: "Feeding", sub: "Feeder, pre-screening" }],
          drum: { title: "PRIMARY CRUSHER", sub: "rotor · blow bar · apron" },
          after: [
            { title: "Coarse product", sub: "Bottom discharge" },
            { title: "Screening / secondary", sub: "Second stage" },
          ],
        },
      },
      applications: {
        title: "Primary Impact Crusher Applications",
        items: [
          {
            title: "Limestone and Dolomite Quarries",
            text: "First-stage coarse crushing of medium-hard quarry rock such as limestone and dolomite. The feed opening is sized for the largest lump.",
            imageAlt: "Light-coloured broken rock face in a dolomite quarry",
            linkLabel: "Mining and Mineral Processing",
          },
          {
            title: "Demolition and Concrete Recycling",
            text: "Pre-crushing concrete and construction debris in recycling lines. Rebar and contaminants are removed by separation equipment in the line.",
            imageAlt: "Debris being processed with an excavator and crushing equipment",
            linkLabel: "Recycling and Waste Management",
          },
        ],
      },
      design: {
        title: "Custom Primary Impact Crusher Design and Manufacturing",
        intro:
          "PRO MAKINA engineers primary crushers around the largest feed size, material hardness, capacity and the following crushing stage. Rotor and blow bars, impact aprons and adjustment, housing, flywheel, drive and hydraulic opening are designed together.",
        highlights: ["Large feed opening and heavy rotor", "Replaceable blow bars", "Adjustable impact aprons", "Hydraulically opening housing"],
        figureAlt: "Primary impact crusher with hydraulically opened housing",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Feed", text: "Largest lump size, feeding method and pre-screening." },
          { title: "Material", text: "Hardness, abrasiveness, moisture and clay content." },
          { title: "Pre-Crushing Size", text: "Coarse product size suitable for the secondary stage." },
          { title: "Rotor and Blow Bars", text: "Rotor size and mass, number and material of blow bars." },
          { title: "Maintenance and Integration", text: "Hydraulic opening, blow bar replacement and link to the secondary crusher." },
        ],
        dataNote: "Rotor speed, power and capacity are defined from material and line data; the primary crusher product is not considered final size.",
      },
      gallery: {
        title: "Primary Impact Crusher Photo Gallery",
        captions: [
          "Primary crusher with flywheel and control panel",
          "Primary crusher with open feed inlet",
          "Front view of the primary crusher feed opening",
          "Yellow primary crusher and feed opening",
        ],
      },
      faq: {
        title: "Primary Impact Crusher FAQ",
        items: [
          {
            question: "How does a primary impact crusher work?",
            answer: "Blow bars on a rotor spinning on a horizontal shaft strike the material; pieces are thrown against impact aprons and broken again, and coarse product leaves at the bottom.",
          },
          {
            question: "What does 'blade' refer to in this crusher?",
            answer: "It refers to the blow bars mounted on the rotor that break material by impact; it is not a cutting knife.",
          },
          {
            question: "Is the primary crusher product at final size?",
            answer: "No. The primary crusher reduces coarse material to a rough size; screening and secondary crushing are needed for the final size.",
          },
          {
            question: "Which materials is it suitable for?",
            answer: "Medium-hard, low-abrasive materials such as limestone, dolomite and concrete debris. For hard and abrasive rock, a jaw crusher is assessed.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Material type, hardness and abrasiveness, largest feed size, required pre-crushing size and hourly capacity.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a primary impact crusher",
        text: "Share your material, largest feed size and next crushing stage, and we will define the primary crusher together with you.",
        mailSubject: "Primary Impact Crusher Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Material type and hardness",
          "Abrasiveness, moisture and clay content",
          "Largest feed size",
          "Required pre-crushing size",
          "Hourly capacity (t/h)",
          "Next crushing and screening stage",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a primary impact crusher.",
          "",
          "Material:",
          "Largest feed size (mm):",
          "Pre-crushing size (mm):",
          "Capacity (t/h):",
          "Next stage:",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Роторная дробилка первичного дробления | Била",
        description:
          "Роторные дробилки первичного дробления известняка, доломита и строительных отходов ротором с билами и отбойными плитами. Проект под крупность питания.",
      },
      breadcrumbLabel: "Роторная дробилка первичного дробления",
      h1: "Роторная дробилка первичного дробления – ударное дробление билами",
      productCategory: "Роторная дробилка первичного дробления",
      overview: {
        imageAlt: "Жёлтая роторная дробилка первичного дробления с маховиком",
        tagline: "Роторная дробилка первичного дробления",
        keyFacts: [
          { label: "Принцип", value: "Удар бил и отбойные плиты" },
          { label: "Стадия", value: "Первая (крупное дробление)" },
          { label: "Материал", value: "Среднетвёрдый малоабразивный камень и лом" },
          { label: "Изнашиваемые детали", value: "Била и футеровка" },
        ],
        title: "Крупное дробление ударом",
        paragraphs: [
          "Роторная дробилка первичного дробления — ударная дробилка с тяжёлым ротором на горизонтальном валу, оснащённым билами. Крупный материал, поступающий в большое приёмное отверстие, разбивается билами и отбрасывается на отбойные плиты корпуса, где дробится повторно.",
          "Её задача — уменьшить крупный материал из карьера или со строительной площадки до крупности, с которой справятся вторичные дробилки и грохоты. Продукт крупный и неоднородный; для конечной крупности нужны вторичное дробление и грохочение.",
          "Так как дробление ударное, она подходит для среднетвёрдых малоабразивных материалов — известняка, доломита, бетонного лома. Для твёрдых и абразивных пород на первой стадии обычно лучше щековая дробилка.",
        ],
        note: "Гидравлически раскрываемый корпус облегчает доступ для замены бил и отбойных плит.",
      },
      process: {
        title: "Движение материала в роторной дробилке первичного дробления",
        intro: "Схема показывает типовой поток: дробилка принимает крупный материал от питателя, дробит его и направляет на вторую стадию. Питатель, грохочение и вторичное дробление — отдельное оборудование.",
        note: "Продукт первичной дробилки не является конечным; обычно он идёт на грохочение и во вторичную дробилку.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Крупное питание", text: "Карьерный камень или лом подаётся питателем в приёмное отверстие." },
          { title: "Дробление билами", text: "Била вращающегося ротора ударяют и разбивают материал." },
          { title: "Дробление о плиты", text: "Отброшенные куски ударяются об отбойные плиты и измельчаются." },
          { title: "Выгрузка на вторую стадию", text: "Крупнодроблёный продукт идёт на грохочение или вторичную дробилку." },
        ],
        flow: {
          svgTitle: "Схема движения материала в роторной дробилке первичного дробления",
          svgDesc: "Линия материала: питатель, роторная дробилка первичного дробления, выгрузка крупного продукта, грохочение и вторичное дробление.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          shape: "box",
          before: [{ title: "Питание", sub: "Питатель, отсев" }],
          drum: { title: "ПЕРВИЧНАЯ ДРОБИЛКА", sub: "ротор · било · плита" },
          after: [
            { title: "Крупный продукт", sub: "Нижняя выгрузка" },
            { title: "Грохот / 2 стадия", sub: "Вторичное дробление" },
          ],
        },
      },
      applications: {
        title: "Области применения роторной дробилки первичного дробления",
        items: [
          {
            title: "Карьеры известняка и доломита",
            text: "Крупное дробление на первой стадии среднетвёрдых пород — известняка и доломита. Приёмное отверстие рассчитывается под максимальный кусок.",
            imageAlt: "Светлая скальная поверхность в доломитовом карьере",
            linkLabel: "Горнодобывающая промышленность",
          },
          {
            title: "Переработка бетона и строительного лома",
            text: "Предварительное дробление бетона и строительного мусора в линиях переработки. Арматура и примеси удаляются сепарационным оборудованием линии.",
            imageAlt: "Переработка строительного мусора экскаватором и дробильной установкой",
            linkLabel: "Переработка и обращение с отходами",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление роторных дробилок первичного дробления",
        intro:
          "PRO MAKINA проектирует первичные дробилки исходя из максимальной крупности питания, твёрдости, производительности и следующей стадии дробления. Ротор и била, отбойные плиты и их регулировка, корпус, маховик, привод и гидравлическое раскрытие разрабатываются совместно.",
        highlights: ["Большое приёмное отверстие и тяжёлый ротор", "Сменные била", "Регулируемые отбойные плиты", "Гидравлически раскрываемый корпус"],
        figureAlt: "Роторная дробилка с гидравлически раскрытым корпусом",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Питание", text: "Максимальный кусок, способ подачи и отсев." },
          { title: "Материал", text: "Твёрдость, абразивность, влажность и глинистость." },
          { title: "Крупность после дробления", text: "Крупность продукта для вторичной стадии." },
          { title: "Ротор и била", text: "Размер и масса ротора, число и материал бил." },
          { title: "Обслуживание и интеграция", text: "Гидравлическое раскрытие, замена бил и связь со вторичной дробилкой." },
        ],
        dataNote: "Скорость ротора, мощность и производительность определяются по данным материала и линии; продукт первичной дробилки не считается конечным.",
      },
      gallery: {
        title: "Фотогалерея роторных дробилок первичного дробления",
        captions: [
          "Первичная дробилка с маховиком и пультом управления",
          "Первичная дробилка с открытым приёмным отверстием",
          "Приёмное отверстие первичной дробилки, вид спереди",
          "Жёлтая первичная дробилка и приёмное отверстие",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о роторной дробилке первичного дробления",
        items: [
          {
            question: "Как работает роторная дробилка первичного дробления?",
            answer: "Била ротора на горизонтальном валу ударяют по материалу; куски отбрасываются на отбойные плиты и дробятся повторно, крупный продукт выходит снизу.",
          },
          {
            question: "Что означает «нож» в названии этой дробилки?",
            answer: "Так называют била, закреплённые на роторе и разрушающие материал ударом; это не режущий нож.",
          },
          {
            question: "Является ли продукт первичной дробилки конечным?",
            answer: "Нет. Первичная дробилка лишь уменьшает крупный материал; для конечной крупности нужны грохочение и вторичное дробление.",
          },
          {
            question: "Для каких материалов она подходит?",
            answer: "Для среднетвёрдых малоабразивных материалов — известняка, доломита, бетонного лома. Для твёрдых абразивных пород рассматривается щековая дробилка.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид материала, твёрдость и абразивность, максимальный кусок, требуемая крупность после дробления и часовая производительность.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на первичную дробилку",
        text: "Сообщите материал, максимальный кусок и следующую стадию дробления — вместе определим первичную дробилку.",
        mailSubject: "Запрос предложения: роторная дробилка первичного дробления",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид материала и твёрдость",
          "Абразивность, влажность и глинистость",
          "Максимальный кусок питания",
          "Требуемая крупность после дробления",
          "Часовая производительность (т/ч)",
          "Следующая стадия дробления и грохочения",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на роторную дробилку первичного дробления.",
          "",
          "Материал:",
          "Максимальный кусок (мм):",
          "Крупность после дробления (мм):",
          "Производительность (т/ч):",
          "Следующая стадия:",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "كسارة صدمية أولية | تكسير بقضبان الصدم",
        description:
          "كسارات صدمية أولية تكسّر الحجر الجيري والدولوميت ومخلفات الهدم في المرحلة الأولى بدوّار ذي قضبان صدم وألواح صدم. تصميم وفق حجم التلقيم.",
      },
      breadcrumbLabel: "كسارة صدمية أولية",
      h1: "كسارة صدمية أولية – كسارة مرحلة أولى بقضبان الصدم",
      productCategory: "كسارة صدمية أولية",
      overview: {
        imageAlt: "كسارة صدمية أولية صفراء بحذافة",
        tagline: "كسارة صدمية أولية",
        keyFacts: [
          { label: "مبدأ التكسير", value: "صدم القضبان والألواح" },
          { label: "المرحلة", value: "أولى (تكسير خشن)" },
          { label: "المادة", value: "صخور ومخلفات متوسطة الصلابة قليلة الكشط" },
          { label: "أجزاء التآكل", value: "قضبان الصدم والبطانات" },
        ],
        title: "التكسير الخشن للمواد الكبيرة بالصدم",
        paragraphs: [
          "الكسارة الصدمية الأولية كسارة تعمل بالصدم ولها دوّار ثقيل على عمود أفقي مزوّد بقضبان صدم. تُكسَّر المادة الخشنة الداخلة من فتحة التلقيم الواسعة بضربات القضبان ثم تُقذف نحو ألواح الصدم داخل الغلاف فتتكسر مجددًا.",
          "مهمتها تصغير المادة الخشنة القادمة من المحجر أو موقع الهدم إلى حجم تستطيع الكسارات الثانوية والغرابيل معالجته، والمنتج خشن وواسع التوزيع، ويلزم تكسير ثانوي وغربلة للحجم النهائي.",
          "ولأنها تكسّر بالصدم فهي مناسبة للمواد متوسطة الصلابة وقليلة الكشط مثل الحجر الجيري والدولوميت ومخلفات الخرسانة، بينما تكون الكسارة الفكية عادةً حل المرحلة الأولى الأنسب للصخور الصلبة شديدة الكشط.",
        ],
        note: "يسهّل الغلاف الذي يُفتح هيدروليكيًا الوصول لاستبدال قضبان الصدم والألواح.",
      },
      process: {
        title: "تدفق المادة في الكسارة الصدمية الأولية",
        intro: "يوضح المخطط التدفق النموذجي الذي تستقبل فيه الكسارة الأولية المادة الخشنة من المُلقِّم وتكسّرها تكسيرًا خشنًا ثم ترسلها إلى المرحلة الثانية، بينما المُلقِّم والغربلة والتكسير الثانوي معدات منفصلة.",
        note: "مخرجات الكسارة الأولية ليست المنتج النهائي، وتنتقل عادةً إلى الغربلة والكسارة الثانوية.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "تلقيم خشن", text: "يُلقَّم صخر المحجر أو المخلفات إلى فتحة الكسارة بواسطة مُلقِّم." },
          { title: "التكسير بقضبان الصدم", text: "تضرب القضبان على الدوّار الدائر المادة وتفتتها." },
          { title: "التكسير على الألواح", text: "ترتطم القطع المقذوفة بألواح الصدم داخل الغلاف فتصغر." },
          { title: "التفريغ للمعالجة الثانوية", text: "يتجه المنتج المكسّر خشنًا إلى الغربلة أو الكسارة الثانوية." },
        ],
        flow: {
          svgTitle: "مخطط تدفق المادة في الكسارة الصدمية الأولية",
          svgDesc: "خط المادة: مُلقِّم، كسارة صدمية أولية، تفريغ المنتج الخشن، الغربلة والتكسير الثانوي.",
          mainLane: "خط المادة",
          shape: "box",
          before: [{ title: "التلقيم", sub: "مُلقِّم وغربلة مسبقة" }],
          drum: { title: "الكسارة الأولية", sub: "دوّار · قضيب صدم · لوح" },
          after: [
            { title: "منتج خشن", sub: "تفريغ سفلي" },
            { title: "غربلة / ثانوية", sub: "المرحلة الثانية" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام الكسارة الصدمية الأولية",
        items: [
          {
            title: "محاجر الحجر الجيري والدولوميت",
            text: "التكسير الخشن في المرحلة الأولى لصخور المحاجر متوسطة الصلابة مثل الحجر الجيري والدولوميت، مع تحجيم فتحة التلقيم وفق أكبر قطعة.",
            imageAlt: "واجهة صخرية فاتحة مكسّرة في محجر دولوميت",
            linkLabel: "التعدين ومعالجة المعادن",
          },
          {
            title: "إعادة تدوير الهدم والخرسانة",
            text: "التكسير المسبق للخرسانة ومخلفات البناء في خطوط إعادة التدوير، ويُفصل حديد التسليح والشوائب بمعدات الفصل في الخط.",
            imageAlt: "معالجة مخلفات الهدم بحفارة ومعدات تكسير",
            linkLabel: "إعادة التدوير وإدارة النفايات",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع كسارات صدمية أولية مخصصة",
        intro:
          "تصمم PRO MAKINA الكسارات الأولية وفق أكبر حجم تلقيم وصلابة المادة والسعة ومرحلة التكسير التالية. ويُصمَّم الدوّار وقضبان الصدم وألواح الصدم وضبطها والغلاف والحذافة ونظام الإدارة والفتح الهيدروليكي معًا.",
        highlights: ["فتحة تلقيم واسعة ودوّار ثقيل", "قضبان صدم قابلة للاستبدال", "ألواح صدم قابلة للضبط", "غلاف يُفتح هيدروليكيًا"],
        figureAlt: "كسارة صدمية أولية بغلاف مفتوح هيدروليكيًا",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "التلقيم", text: "أكبر حجم للقطع وطريقة التلقيم والغربلة المسبقة." },
          { title: "المادة", text: "الصلابة والكشط والرطوبة ومحتوى الطين." },
          { title: "حجم التكسير الأولي", text: "حجم المنتج الخشن المناسب للمرحلة الثانوية." },
          { title: "الدوّار والقضبان", text: "حجم الدوّار ووزنه وعدد قضبان الصدم ومادتها." },
          { title: "الصيانة والتكامل", text: "الفتح الهيدروليكي واستبدال القضبان والربط بالكسارة الثانوية." },
        ],
        dataNote: "تُحدَّد سرعة الدوّار والقدرة والسعة من بيانات المادة والخط، ولا يُعد منتج الكسارة الأولية حجمًا نهائيًا.",
      },
      gallery: {
        title: "معرض صور الكسارات الصدمية الأولية",
        captions: [
          "كسارة أولية مع الحذافة ولوحة التحكم",
          "كسارة أولية بفتحة تلقيم مفتوحة",
          "منظر أمامي لفتحة تلقيم الكسارة الأولية",
          "كسارة أولية صفراء وفتحة التلقيم",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول الكسارة الصدمية الأولية",
        items: [
          {
            question: "كيف تعمل الكسارة الصدمية الأولية؟",
            answer: "تضرب قضبان الصدم على دوّار يدور على عمود أفقي المادة، فتُقذف القطع نحو ألواح الصدم وتتكسر مجددًا، ويخرج المنتج الخشن من الأسفل.",
          },
          {
            question: "ماذا تعني كلمة «السكين» في اسم هذه الكسارة؟",
            answer: "تشير إلى قضبان الصدم المثبتة على الدوّار التي تكسر المادة بالصدم، وليست سكينًا للقطع.",
          },
          {
            question: "هل منتج الكسارة الأولية بالحجم النهائي؟",
            answer: "لا. تصغّر الكسارة الأولية المادة الخشنة إلى حجم تقريبي، ويلزم الغربلة والتكسير الثانوي للحجم النهائي.",
          },
          {
            question: "ما المواد المناسبة لها؟",
            answer: "المواد متوسطة الصلابة وقليلة الكشط مثل الحجر الجيري والدولوميت ومخلفات الخرسانة، بينما تُقيَّم الكسارة الفكية للصخور الصلبة الكاشطة.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المادة وصلابتها وكشطها وأكبر حجم للتلقيم وحجم التكسير الأولي المطلوب والسعة بالساعة.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لكسارة صدمية أولية",
        text: "شاركنا المادة وأكبر حجم للتلقيم ومرحلة التكسير التالية، لنحدد معًا الكسارة الأولية المناسبة.",
        mailSubject: "طلب عرض سعر: كسارة صدمية أولية",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المادة وصلابتها",
          "الكشط والرطوبة ومحتوى الطين",
          "أكبر حجم للتلقيم",
          "حجم التكسير الأولي المطلوب",
          "السعة بالساعة (طن/ساعة)",
          "مرحلة التكسير والغربلة التالية",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لكسارة صدمية أولية.",
          "",
          "المادة:",
          "أكبر حجم للتلقيم (مم):",
          "حجم التكسير الأولي (مم):",
          "السعة (طن/ساعة):",
          "المرحلة التالية:",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
