import type { DrumPageConfig } from "../types";

// Trommel elek: dönen silindirik elek yüzeyiyle boyuta göre ayırma (kurutma tamburu değildir, ısı uygulanmaz).
// Çap, uzunluk, devir, eğim veya kapasite değeri verilmez. Galeri yalnız trommel klasöründeki fotoğraflardan seçildi;
// render görünümlü tromm1, 2, 5, 7, 9, 10 kullanılmadı. Görsellerin lisans kaydı yok.
const img = (file: string) => `/images/trommel/${file}`;
const kr = (file: string) => `/images/kirici-uygulamalari/${file}`;

export const trommelScreenPage: DrumPageConfig = {
  key: "trommelScreen",
  group: "screeningSystems",
  trSlug: "trommel-elekler",
  mainImage: img("tromm11.jpg"),
  applications: [
    { image: kr("kompost-yigini.webp"), link: "compostPlants" },
    { image: kr("karma-atik.webp"), link: "rdfPlantSolution" },
    { image: kr("agrega-stok.webp"), link: "mining" },
  ],
  figure: img("tromm3.jpg"),
  gallery: [img("tromm6.jpg"), img("tromm12.png"), img("tromm14.jpg"), img("tromm17.jpeg"), img("tromm16.jpg"), img("tromm13.jpg"), img("tromm4.jpg")],
  sectors: ["compostPlants", "recycling", "mining"],
  resources: ["vibratingScreen", "compostPlantSolution", "compostDrum", "screeningSystems"],
  machines: ["conveying", "crushers", "storageSystems"],
  texts: {
    tr: {
      meta: {
        title: "Trommel Elek İmalatı | Döner Elek ve Tambur Elek | PRO MAKİNA",
        description:
          "Kompost, organik atık, mineral ve agrega için trommel elek imalatı. Döner silindirik elek; tambur ölçüsü, devir ve elek açıklığı ürüne göre belirlenir.",
      },
      breadcrumbLabel: "Trommel Elekler",
      h1: "Trommel Elek – Döner Silindirik Elekle Boyuta Göre Ayırma",
      productCategory: "Trommel Elek",
      overview: {
        imageAlt: "Konveyörle beslenen, mavi taşıyıcı konstrüksiyonlu döner trommel elek",
        tagline: "Trommel Elek",
        keyFacts: [
          { label: "Ayırma prensibi", value: "Dönen silindirik elek yüzeyi" },
          { label: "Tambur", value: "Çap, uzunluk, devir ve eğim projeye göre" },
          { label: "Elek yüzeyi", value: "Perfore sac veya uygun elek; açıklık ürüne göre" },
          { label: "Temizleme", value: "Gerekirse döner fırça ile yüzey temizliği" },
        ],
        title: "Dönen Tambur İçinde İnce ve İri Ürünün Ayrılması",
        paragraphs: [
          "Trommel elek, yüzeyi elek sacı veya elek teli ile kaplı, hafif eğimli ve yavaşça dönen silindirik bir tamburdur. Malzeme tambura bir uçtan girer; dönüşle birlikte kaldırılıp yuvarlanırken açıklıktan küçük taneler tambur yüzeyinden aşağı düşer, iri parçalar tambur boyunca ilerleyerek diğer uçtan çıkar.",
          "Ayırma verimini belirleyen başlıca unsurlar; tambur çapı ve uzunluğu, dönüş devri, tambur eğimi, elek açıklığı ve malzemenin tambur içindeki kalış süresidir. Farklı bölgelerde farklı açıklıklar kullanılarak birden fazla fraksiyon alınabilir.",
          "Yuvarlanma hareketi, topaklanma ve yapışma eğilimi olan kompost ve organik malzemelerde elek yüzeyinin çalışmasına yardımcı olur. Tıkanma riski olan ürünlerde elek yüzeyi dışarıdan döner fırça ile temizlenebilir.",
        ],
        note: "Trommel elek, kurutma tamburu gibi döner bir gövdeye sahip olsa da ısı uygulamaz ve ürünü kurutmaz; yalnızca tane boyutuna göre ayırır.",
      },
      process: {
        title: "Trommel Elek Proses Akışı",
        intro:
          "Şema, malzemenin tambura beslendiği, döner silindirik elek üzerinde ayrıldığı ve ince ile iri ürünün ayrı noktalardan alındığı akışı gösterir. Besleme bunkeri ve konveyörler ayrı ekipmanlardır.",
        note: "Malzemenin tamburdaki kalış süresi devir ve eğimle ayarlanır; daha uzun kalış süresi daha fazla ince malzemenin ayrılmasına imkân verir.",
        mainLineLabel: "Malzeme hattı",
        productLine: [
          { title: "Besleme", text: "Malzeme bunker veya konveyörle tamburun giriş ucuna verilir." },
          { title: "Döner elekte ayırma", text: "Dönen tambur malzemeyi kaldırıp yuvarlar; ince taneler elek yüzeyinden geçer." },
          { title: "İnce ürün toplama", text: "Elekten geçen ince ürün tamburun altından konveyör veya hazneye alınır." },
          { title: "İri ürün tahliyesi", text: "Elekten geçmeyen iri parçalar tamburun çıkış ucundan tahliye edilir." },
        ],
        flow: {
          svgTitle: "Trommel elek proses akış şeması",
          svgDesc: "Malzeme hattı: besleme, döner trommel elek, elek altı ince ürün ve tambur çıkışı iri ürün tahliyesi.",
          mainLane: "MALZEME HATTI",
          before: [{ title: "Besleme", sub: "Bunker / konveyör" }],
          drum: { title: "TROMMEL ELEK", sub: "döner silindirik elek" },
          after: [
            { title: "İnce ürün", sub: "Elek altı" },
            { title: "İri ürün", sub: "Tambur çıkışı" },
          ],
        },
      },
      applications: {
        title: "Trommel Elek Uygulama Alanları",
        items: [
          {
            title: "Kompost Eleme",
            text: "Olgunlaşmış kompostun son ürün ve iri artık olarak ayrılması. İri fraksiyon yapı malzemesi olarak prosese geri döndürülebilir; açıklık hedef ürün kalitesine göre seçilir.",
            imageAlt: "Serilmiş koyu renkli kompost",
            linkLabel: "Kompost ve Organik Atık Tesisleri",
          },
          {
            title: "Karışık Atık Ön Ayırma",
            text: "Karışık belediye atığında ince organik kısmın iri parçalardan ayrılması ve sonraki ayırma adımları için akışın hazırlanması.",
            imageAlt: "Açık alanda karışık belediye atığı",
            linkLabel: "ATY / RDF Hazırlama Tesisi",
          },
          {
            title: "Mineral ve Agrega Sınıflandırma",
            text: "Kum, çakıl ve kırılmış mineral ürünlerin boyut sınıflarına ayrılması. Aşındırıcı malzemelerde elek sacı kalınlığı ve malzemesi ayrıca değerlendirilir.",
            imageAlt: "Konveyörler altında agrega stok yığınları",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Trommel Elek Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA trommel elekleri malzeme türü, kapasite, nem ve hedef fraksiyonlara göre projelendirir. Tambur geometrisi, elek sacı ve açıklıklar, tahrik ve taşıyıcı makaralar, gövde ve muhafaza, besleme ve tahliye düzeni birlikte tasarlanır.",
        highlights: ["Tambur çapı, uzunluğu ve eğimi", "Ürüne göre elek sacı ve açıklık", "Tahrik ve taşıyıcı makara sistemi", "Gerekirse fırçalı yüzey temizleme"],
        figureAlt: "Trommel tamburunun perfore elek yüzeyini temizleyen döner fırça",
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Hammadde", text: "Malzeme türü, tane boyutu, nem ve yapışma eğilimi." },
          { title: "Tambur Geometrisi", text: "Tambur çapı, uzunluğu ve elek bölgeleri." },
          { title: "Elek Açıklığı", text: "Hedef ince ve iri fraksiyonlara göre açıklıklar." },
          { title: "Devir, Eğim ve Kalış Süresi", text: "Dönüş devri ve eğimle ayarlanan kalış süresi." },
          { title: "Gövde ve Tahrik", text: "Tahrik, taşıyıcı makaralar, muhafaza ve temizleme düzeni." },
        ],
        dataNote: "Tambur ölçüleri, devir, elek açıklığı ve kapasite malzeme verisine göre belirlenir; sayfada genel değer verilmez.",
      },
      gallery: {
        title: "Trommel Elek Fotoğraf Galerisi",
        captions: [
          "Yüksek taşıyıcı konstrüksiyon üzerinde kapalı trommel elek",
          "Büyük delikli perfore sac yüzeyli trommel tamburu",
          "Tamburun içinden perfore elek yüzeyi görünümü",
          "Atölyede mavi-sarı gövdeli trommel elek",
          "Karışık atığın döner tambur içinde elenmesi",
          "Tambur yüzeyini temizleyen döner fırça",
          "Perfore elek sacının bağlantı detayı",
        ],
      },
      faq: {
        title: "Trommel Elek Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Trommel elek nasıl çalışır?",
            answer:
              "Hafif eğimli dönen tambur, malzemeyi kaldırıp yuvarlar. Açıklıktan küçük taneler elek yüzeyinden geçer, iri parçalar tambur boyunca ilerleyip çıkış ucundan alınır.",
          },
          {
            question: "Trommel elek hangi malzemeler için uygundur?",
            answer: "Kompost, organik ve karışık atık, gübre, kum ve kırılmış mineral ürünler gibi boyuta göre ayrılması gereken akışlarda kullanılır.",
          },
          {
            question: "Trommel elek ile vibrasyonlu elek arasındaki fark nedir?",
            answer:
              "Trommel elek dönen silindirik yüzeyle çalışır ve lifli, nemli veya topaklanan ürünlerde avantaj sağlayabilir. Vibrasyonlu elek düz titreşimli yüzeyle kuru ve serbest akışlı ürünlerde hassas ayırma sağlar.",
          },
          {
            question: "Elek açıklığı nasıl seçilir?",
            answer: "Açıklık, hedef son ürün boyutuna göre seçilir. Kompostta farklı ürün kalitesi hedefleri için farklı açıklıklar kullanılabilir.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer: "Ürün tipi, saatlik kapasite, nem seviyesi, giriş boyutu, hedef tane aralığı ve saha kısıtları temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Trommel elek için teknik teklif alın",
        text: "Malzemeniz, kapasiteniz ve hedef tane aralığınıza göre trommel eleği birlikte netleştirelim.",
        mailSubject: "Trommel Elek Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: ["Malzeme türü", "Kapasite (ton/saat veya m³/saat)", "Nem seviyesi", "Giriş tane boyutu", "Hedef tane aralığı", "Saha kısıtları"],
        inquiryLines: [
          "Merhaba, trommel elek için teknik teklif almak istiyorum.",
          "",
          "Malzeme:",
          "Kapasite:",
          "Nem seviyesi:",
          "Giriş boyutu:",
          "Hedef tane aralığı (mm):",
          "Saha bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Trommel Screen Manufacturer | Rotary Drum Screens",
        description:
          "Trommel screens for compost, organic waste, minerals and aggregates. A rotating cylindrical screen; drum size, speed and aperture are set for your product.",
      },
      breadcrumbLabel: "Trommel Screen",
      h1: "Trommel Screen – Size Separation with a Rotating Cylindrical Screen",
      productCategory: "Trommel Screen",
      overview: {
        imageAlt: "Conveyor-fed rotary trommel screen on a blue support structure",
        tagline: "Trommel Screen",
        keyFacts: [
          { label: "Separation principle", value: "Rotating cylindrical screen surface" },
          { label: "Drum", value: "Diameter, length, speed and slope per project" },
          { label: "Screen surface", value: "Perforated plate or suitable media; aperture per product" },
          { label: "Cleaning", value: "Rotating brush for surface cleaning if required" },
        ],
        title: "Separating Fines and Oversize Inside a Rotating Drum",
        paragraphs: [
          "A trommel screen is a slightly inclined, slowly rotating cylindrical drum whose shell is made of perforated plate or screen mesh. Material enters at one end; as the rotation lifts and tumbles it, particles smaller than the aperture fall through the drum surface, while oversize moves along the drum and leaves at the other end.",
          "Separation efficiency mainly depends on drum diameter and length, rotational speed, slope, aperture and the residence time of material in the drum. Different apertures in different zones allow more than one fraction to be produced.",
          "The tumbling action helps the screen surface work with compost and organic materials that tend to agglomerate or stick. For products with a blinding risk, the screen surface can be cleaned from outside by a rotating brush.",
        ],
        note: "Although a trommel screen has a rotating body like a rotary dryer, it applies no heat and does not dry the product; it only separates by particle size.",
      },
      process: {
        title: "Trommel Screen Process Flow",
        intro:
          "The diagram shows the flow in which material is fed to the drum, separated on the rotating cylindrical screen, and fines and oversize are collected at separate points. Feed hopper and conveyors are separate equipment.",
        note: "Residence time in the drum is adjusted by speed and slope; a longer residence time allows more fines to be separated.",
        mainLineLabel: "Material line",
        productLine: [
          { title: "Feeding", text: "Material is fed to the drum inlet by a hopper or conveyor." },
          { title: "Separation in the rotating screen", text: "The rotating drum lifts and tumbles the material; fines pass through the screen surface." },
          { title: "Fines collection", text: "Fines passing the screen are collected below the drum on a conveyor or in a hopper." },
          { title: "Oversize discharge", text: "Oversize that does not pass is discharged at the drum outlet end." },
        ],
        flow: {
          svgTitle: "Trommel screen process flow diagram",
          svgDesc: "Material line: feeding, rotary trommel screen, undersize fines and drum-end oversize discharge.",
          mainLane: "MATERIAL LINE",
          before: [{ title: "Feeding", sub: "Hopper / conveyor" }],
          drum: { title: "TROMMEL SCREEN", sub: "rotating cylindrical screen" },
          after: [
            { title: "Fines", sub: "Undersize" },
            { title: "Oversize", sub: "Drum outlet" },
          ],
        },
      },
      applications: {
        title: "Trommel Screen Applications",
        items: [
          {
            title: "Compost Screening",
            text: "Separating mature compost into final product and coarse overs. Overs can be returned to the process as structure material; the aperture follows the target product quality.",
            imageAlt: "Spread-out dark compost",
            linkLabel: "Compost and Organic Waste Plants",
          },
          {
            title: "Mixed Waste Pre-Sorting",
            text: "Separating the fine organic fraction from larger items in mixed municipal waste and preparing the stream for subsequent sorting steps.",
            imageAlt: "Mixed municipal solid waste in an open area",
            linkLabel: "RDF Preparation Plant",
          },
          {
            title: "Mineral and Aggregate Sizing",
            text: "Sizing sand, gravel and crushed mineral products. For abrasive materials, screen plate thickness and material are assessed separately.",
            imageAlt: "Aggregate stockpiles below conveyors",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Trommel Screen Design and Manufacturing",
        intro:
          "PRO MAKINA engineers trommel screens around material type, capacity, moisture and target fractions. Drum geometry, screen plates and apertures, drive and support rollers, body and enclosure, and feed and discharge arrangement are designed together.",
        highlights: ["Drum diameter, length and slope", "Screen plate and aperture for the product", "Drive and support roller system", "Brush surface cleaning if required"],
        figureAlt: "Rotating brush cleaning the perforated screen surface of a trommel drum",
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Raw Material", text: "Material type, particle size, moisture and stickiness." },
          { title: "Drum Geometry", text: "Drum diameter, length and screen zones." },
          { title: "Aperture", text: "Apertures for the target fine and coarse fractions." },
          { title: "Speed, Slope and Residence Time", text: "Residence time set by rotational speed and slope." },
          { title: "Body and Drive", text: "Drive, support rollers, enclosure and cleaning arrangement." },
        ],
        dataNote: "Drum dimensions, speed, aperture and capacity are defined from material data; no generic values are stated on this page.",
      },
      gallery: {
        title: "Trommel Screen Photo Gallery",
        captions: [
          "Enclosed trommel screen on a tall support structure",
          "Trommel drum with large-hole perforated plate",
          "Perforated screen surface seen from inside the drum",
          "Blue and yellow trommel screen in the workshop",
          "Mixed waste being screened inside the rotating drum",
          "Rotating brush cleaning the drum surface",
          "Connection detail of perforated screen plates",
        ],
      },
      faq: {
        title: "Trommel Screen FAQ",
        items: [
          {
            question: "How does a trommel screen work?",
            answer: "The slightly inclined rotating drum lifts and tumbles the material. Particles smaller than the aperture pass the screen surface; oversize travels along the drum and leaves at the outlet end.",
          },
          {
            question: "Which materials is a trommel screen suitable for?",
            answer: "Streams that need size separation such as compost, organic and mixed waste, fertilizer, sand and crushed mineral products.",
          },
          {
            question: "What is the difference between a trommel and a vibrating screen?",
            answer:
              "A trommel works with a rotating cylindrical surface and can be advantageous for fibrous, moist or agglomerating products. A vibrating screen gives precise separation of dry, free-flowing products on a flat vibrating deck.",
          },
          {
            question: "How is the aperture selected?",
            answer: "The aperture is selected for the target final product size. Different apertures can be used for different compost quality targets.",
          },
          {
            question: "What information is needed for a quotation?",
            answer: "Product type, hourly capacity, moisture, feed size, target size range and site constraints.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a trommel screen",
        text: "Share your material, capacity and target size range, and we will define the trommel screen together with you.",
        mailSubject: "Trommel Screen Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: ["Material type", "Capacity (t/h or m³/h)", "Moisture", "Feed size", "Target size range", "Site constraints"],
        inquiryLines: [
          "Hello, I would like a technical quotation for a trommel screen.",
          "",
          "Material:",
          "Capacity:",
          "Moisture:",
          "Feed size:",
          "Target size range (mm):",
          "Site information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Барабанный грохот (тромель) | Производство барабанных грохотов",
        description:
          "Барабанные грохоты для компоста, органических отходов, минералов и заполнителей. Вращающийся цилиндрический грохот; размеры, частота и ячейка — под продукт.",
      },
      breadcrumbLabel: "Барабанный грохот",
      h1: "Барабанный грохот – разделение по крупности во вращающемся барабане",
      productCategory: "Барабанный грохот",
      overview: {
        imageAlt: "Барабанный грохот на синей опорной конструкции с подачей конвейером",
        tagline: "Барабанный грохот",
        keyFacts: [
          { label: "Принцип разделения", value: "Вращающаяся цилиндрическая просеивающая поверхность" },
          { label: "Барабан", value: "Диаметр, длина, частота и наклон по проекту" },
          { label: "Просеивающая поверхность", value: "Перфолист или подходящее сито; ячейка под продукт" },
          { label: "Очистка", value: "При необходимости вращающаяся щётка" },
        ],
        title: "Разделение мелкой и крупной фракции во вращающемся барабане",
        paragraphs: [
          "Барабанный грохот — слегка наклонный, медленно вращающийся цилиндрический барабан с обечайкой из перфорированного листа или сетки. Материал поступает с одного конца; при вращении он поднимается и перекатывается, частицы меньше ячейки проходят сквозь поверхность, а крупные движутся вдоль барабана и выходят с другого конца.",
          "Эффективность разделения определяется диаметром и длиной барабана, частотой вращения, наклоном, размером ячейки и временем пребывания материала. Разные ячейки на разных участках позволяют получить несколько фракций.",
          "Перекатывание помогает работе сита на компосте и органических материалах, склонных к комкованию и налипанию. При риске забивания поверхность может очищаться снаружи вращающейся щёткой.",
        ],
        note: "Хотя барабанный грохот, как и сушильный барабан, имеет вращающийся корпус, он не нагревает и не сушит продукт — только разделяет по крупности.",
      },
      process: {
        title: "Технологическая схема барабанного грохота",
        intro:
          "Схема показывает поток: материал подаётся в барабан, разделяется на вращающемся цилиндрическом сите, мелкая и крупная фракции собираются раздельно. Приёмный бункер и конвейеры — отдельное оборудование.",
        note: "Время пребывания в барабане регулируется частотой вращения и наклоном; чем оно больше, тем больше мелочи отделяется.",
        mainLineLabel: "Линия материала",
        productLine: [
          { title: "Подача", text: "Материал подаётся на вход барабана из бункера или конвейером." },
          { title: "Разделение во вращающемся сите", text: "Барабан поднимает и перекатывает материал; мелочь проходит сквозь сито." },
          { title: "Сбор мелкой фракции", text: "Прошедшая мелочь собирается под барабаном на конвейер или в бункер." },
          { title: "Выгрузка крупной фракции", text: "Не прошедшие сито крупные куски выгружаются с выходного конца." },
        ],
        flow: {
          svgTitle: "Технологическая схема барабанного грохота",
          svgDesc: "Линия материала: подача, барабанный грохот, выгрузка подрешётной мелочи и крупной фракции с конца барабана.",
          mainLane: "ЛИНИЯ МАТЕРИАЛА",
          before: [{ title: "Подача", sub: "Бункер / конвейер" }],
          drum: { title: "БАРАБАННЫЙ ГРОХОТ", sub: "вращающееся сито" },
          after: [
            { title: "Мелкая фракция", sub: "Подрешётный" },
            { title: "Крупная фракция", sub: "Выход барабана" },
          ],
        },
      },
      applications: {
        title: "Области применения барабанных грохотов",
        items: [
          {
            title: "Грохочение компоста",
            text: "Разделение зрелого компоста на товарный продукт и крупный отсев. Отсев может возвращаться в процесс как структурный материал; ячейка выбирается по требуемому качеству.",
            imageAlt: "Разложенный тёмный компост",
            linkLabel: "Компостирование и органические отходы",
          },
          {
            title: "Предсортировка смешанных отходов",
            text: "Отделение мелкой органической части смешанных ТКО от крупных предметов и подготовка потока к последующей сортировке.",
            imageAlt: "Смешанные твёрдые коммунальные отходы на открытой площадке",
            linkLabel: "Установка подготовки RDF",
          },
          {
            title: "Сортировка минералов и заполнителей",
            text: "Разделение песка, гравия и дроблёных минералов по классам крупности. Для абразивных материалов толщина и материал перфолиста рассматриваются отдельно.",
            imageAlt: "Штабели заполнителей под конвейерами",
            linkLabel: "Горнодобывающая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление барабанных грохотов",
        intro:
          "PRO MAKINA проектирует барабанные грохоты исходя из вида материала, производительности, влажности и требуемых фракций. Геометрия барабана, сита и ячейки, привод и опорные ролики, корпус и кожух, узлы загрузки и выгрузки разрабатываются совместно.",
        highlights: ["Диаметр, длина и наклон барабана", "Перфолист и ячейка под продукт", "Привод и опорные ролики", "Щёточная очистка при необходимости"],
        figureAlt: "Вращающаяся щётка очищает перфорированную поверхность барабанного грохота",
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Сырьё", text: "Вид материала, крупность, влажность и липкость." },
          { title: "Геометрия барабана", text: "Диаметр, длина барабана и зоны грохочения." },
          { title: "Ячейка", text: "Размеры ячеек под требуемые мелкую и крупную фракции." },
          { title: "Частота, наклон и время пребывания", text: "Время пребывания, задаваемое частотой вращения и наклоном." },
          { title: "Корпус и привод", text: "Привод, опорные ролики, кожух и система очистки." },
        ],
        dataNote: "Размеры барабана, частота вращения, ячейка и производительность определяются по данным материала; общие значения не приводятся.",
      },
      gallery: {
        title: "Фотогалерея барабанных грохотов",
        captions: [
          "Закрытый барабанный грохот на высокой опорной конструкции",
          "Барабан с перфолистом с крупными отверстиями",
          "Перфорированная поверхность изнутри барабана",
          "Сине-жёлтый барабанный грохот в цехе",
          "Грохочение смешанных отходов во вращающемся барабане",
          "Вращающаяся щётка очищает поверхность барабана",
          "Узел крепления перфорированных листов",
        ],
      },
      faq: {
        title: "Часто задаваемые вопросы о барабанных грохотах",
        items: [
          {
            question: "Как работает барабанный грохот?",
            answer: "Наклонный вращающийся барабан поднимает и перекатывает материал; частицы меньше ячейки проходят сквозь сито, крупные выходят с конца барабана.",
          },
          {
            question: "Для каких материалов подходит барабанный грохот?",
            answer: "Для потоков, требующих разделения по крупности: компост, органические и смешанные отходы, удобрения, песок и дроблёные минералы.",
          },
          {
            question: "Чем барабанный грохот отличается от вибрационного?",
            answer:
              "Барабанный грохот работает вращающейся цилиндрической поверхностью и может иметь преимущества для волокнистых, влажных и комкующихся продуктов. Вибрационный грохот точно разделяет сухие сыпучие продукты на плоской вибрирующей деке.",
          },
          {
            question: "Как выбирается ячейка?",
            answer: "Ячейка выбирается по требуемой крупности конечного продукта; для разных требований к компосту применяются разные ячейки.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer: "Вид продукта, часовая производительность, влажность, крупность питания, требуемый диапазон крупности и ограничения площадки.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на барабанный грохот",
        text: "Сообщите материал, производительность и требуемую крупность — вместе определим барабанный грохот.",
        mailSubject: "Запрос предложения: барабанный грохот",
        requiredTitle: "Данные для технического предложения",
        requiredItems: ["Вид материала", "Производительность (т/ч или м³/ч)", "Влажность", "Крупность питания", "Требуемый диапазон крупности", "Ограничения площадки"],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на барабанный грохот.",
          "",
          "Материал:",
          "Производительность:",
          "Влажность:",
          "Крупность питания:",
          "Требуемая крупность (мм):",
          "Данные площадки:",
        ],
      },
    },
    ar: {
      meta: {
        title: "الغربال الأسطواني الدوّار (ترومل) | تصنيع غرابيل ترومل",
        description:
          "غرابيل ترومل للسماد العضوي والنفايات العضوية والمعادن والركام. غربال أسطواني دوّار تُحدَّد أبعاده وسرعته وفتحته وفق منتجك.",
      },
      breadcrumbLabel: "غربال ترومل",
      h1: "غربال ترومل – فصل المواد حسب الحجم بغربال أسطواني دوّار",
      productCategory: "غربال ترومل",
      overview: {
        imageAlt: "غربال ترومل دوّار على هيكل حامل أزرق يُلقَّم بناقل",
        tagline: "غربال ترومل",
        keyFacts: [
          { label: "مبدأ الفصل", value: "سطح غربلة أسطواني دوّار" },
          { label: "الأسطوانة", value: "القطر والطول والسرعة والميل حسب المشروع" },
          { label: "سطح الغربلة", value: "صفيحة مثقبة أو شبكة مناسبة، والفتحة وفق المنتج" },
          { label: "التنظيف", value: "فرشاة دوّارة لتنظيف السطح عند الحاجة" },
        ],
        title: "فصل الناعم والخشن داخل أسطوانة دوّارة",
        paragraphs: [
          "غربال الترومل أسطوانة دوّارة ببطء ومائلة قليلًا، جسمها من صفيحة مثقبة أو شبكة غربلة. تدخل المادة من أحد الطرفين، ومع الدوران ترتفع وتتدحرج فتسقط الحبيبات الأصغر من الفتحة عبر سطح الأسطوانة، بينما تتقدم القطع الكبيرة على طول الأسطوانة وتخرج من الطرف الآخر.",
          "تعتمد كفاءة الفصل أساسًا على قطر الأسطوانة وطولها وسرعة دورانها وميلها وحجم الفتحة وزمن بقاء المادة داخلها، ويمكن الحصول على أكثر من جزء باستخدام فتحات مختلفة في مناطق مختلفة.",
          "تساعد حركة التدحرج سطح الغربلة على العمل مع السماد العضوي والمواد العضوية التي تميل إلى التكتل أو الالتصاق، ويمكن تنظيف سطح الغربلة من الخارج بفرشاة دوّارة للمنتجات المعرضة للانسداد.",
        ],
        note: "رغم أن غربال الترومل له جسم دوّار مثل أسطوانة التجفيف، فإنه لا يطبق حرارة ولا يجفف المنتج، بل يفصله حسب حجم الحبيبات فقط.",
      },
      process: {
        title: "تدفق العملية في غربال الترومل",
        intro:
          "يوضح المخطط التدفق الذي تُلقَّم فيه المادة إلى الأسطوانة وتُفصل على الغربال الأسطواني الدوّار ثم يُجمع الناعم والخشن من نقطتين منفصلتين، بينما قادوس التلقيم والنواقل معدات منفصلة.",
        note: "يُضبط زمن بقاء المادة في الأسطوانة بالسرعة والميل، وكلما طال زمن البقاء أمكن فصل كمية أكبر من الناعم.",
        mainLineLabel: "خط المادة",
        productLine: [
          { title: "التلقيم", text: "تُلقَّم المادة إلى مدخل الأسطوانة من قادوس أو بناقل." },
          { title: "الفصل في الغربال الدوّار", text: "ترفع الأسطوانة الدوّارة المادة وتدحرجها فتمر الحبيبات الناعمة من سطح الغربلة." },
          { title: "جمع الناعم", text: "يُجمع الناعم المار أسفل الأسطوانة على ناقل أو في قادوس." },
          { title: "تفريغ الخشن", text: "تُفرَّغ القطع الخشنة التي لم تمر من طرف خروج الأسطوانة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق العملية في غربال الترومل",
          svgDesc: "خط المادة: التلقيم، غربال الترومل الدوّار، تفريغ الناعم أسفل الغربال والخشن من طرف الأسطوانة.",
          mainLane: "خط المادة",
          before: [{ title: "التلقيم", sub: "قادوس / ناقل" }],
          drum: { title: "غربال ترومل", sub: "غربال أسطواني دوّار" },
          after: [
            { title: "الناعم", sub: "أسفل الغربال" },
            { title: "الخشن", sub: "مخرج الأسطوانة" },
          ],
        },
      },
      applications: {
        title: "مجالات استخدام غربال الترومل",
        items: [
          {
            title: "غربلة السماد العضوي",
            text: "فصل السماد العضوي الناضج إلى منتج نهائي وبقايا خشنة يمكن إعادتها إلى العملية كمادة هيكلية، مع اختيار الفتحة وفق جودة المنتج المستهدفة.",
            imageAlt: "سماد عضوي داكن مفروش",
            linkLabel: "مصانع السماد العضوي والنفايات العضوية",
          },
          {
            title: "الفرز المسبق للنفايات المختلطة",
            text: "فصل الجزء العضوي الناعم عن القطع الكبيرة في النفايات البلدية المختلطة وتجهيز التدفق لمراحل الفرز اللاحقة.",
            imageAlt: "نفايات بلدية صلبة مختلطة في منطقة مفتوحة",
            linkLabel: "مصنع تحضير الوقود المشتق من النفايات",
          },
          {
            title: "تصنيف المعادن والركام",
            text: "تصنيف الرمل والحصى والمنتجات المعدنية المكسّرة حسب الحجم، مع تقييم سماكة الصفيحة ومادتها بشكل منفصل للمواد الكاشطة.",
            imageAlt: "أكوام ركام أسفل النواقل",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع غرابيل ترومل مخصصة",
        intro:
          "تصمم PRO MAKINA غرابيل الترومل وفق نوع المادة والسعة والرطوبة والأجزاء المستهدفة، مع تصميم شكل الأسطوانة وصفائح الغربلة والفتحات ونظام الإدارة وبكرات الحمل والجسم والغطاء وترتيب التلقيم والتفريغ معًا.",
        highlights: ["قطر الأسطوانة وطولها وميلها", "صفيحة غربلة وفتحة وفق المنتج", "نظام إدارة وبكرات حمل", "تنظيف السطح بالفرشاة عند الحاجة"],
        figureAlt: "فرشاة دوّارة تنظف سطح الغربلة المثقب لأسطوانة ترومل",
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "المادة الخام", text: "نوع المادة وحجم الحبيبات والرطوبة وقابلية الالتصاق." },
          { title: "شكل الأسطوانة", text: "قطر الأسطوانة وطولها ومناطق الغربلة." },
          { title: "الفتحة", text: "فتحات وفق الأجزاء الناعمة والخشنة المستهدفة." },
          { title: "السرعة والميل وزمن البقاء", text: "زمن البقاء المضبوط بسرعة الدوران والميل." },
          { title: "الجسم والإدارة", text: "الإدارة وبكرات الحمل والغطاء ونظام التنظيف." },
        ],
        dataNote: "تُحدَّد أبعاد الأسطوانة والسرعة والفتحة والسعة من بيانات المادة، ولا تُذكر قيم عامة في هذه الصفحة.",
      },
      gallery: {
        title: "معرض صور غرابيل الترومل",
        captions: [
          "غربال ترومل مغلق على هيكل حامل مرتفع",
          "أسطوانة ترومل بصفيحة مثقبة ذات فتحات كبيرة",
          "سطح الغربلة المثقب من داخل الأسطوانة",
          "غربال ترومل بجسم أزرق وأصفر في الورشة",
          "غربلة نفايات مختلطة داخل الأسطوانة الدوّارة",
          "فرشاة دوّارة تنظف سطح الأسطوانة",
          "تفصيل تثبيت صفائح الغربلة المثقبة",
        ],
      },
      faq: {
        title: "أسئلة شائعة حول غربال الترومل",
        items: [
          {
            question: "كيف يعمل غربال الترومل؟",
            answer: "ترفع الأسطوانة الدوّارة المائلة قليلًا المادة وتدحرجها، فتمر الحبيبات الأصغر من الفتحة عبر السطح وتتقدم القطع الخشنة لتخرج من طرف الخروج.",
          },
          {
            question: "ما المواد المناسبة لغربال الترومل؟",
            answer: "التدفقات التي تحتاج إلى فصل حسب الحجم مثل السماد العضوي والنفايات العضوية والمختلطة والأسمدة والرمل والمنتجات المعدنية المكسّرة.",
          },
          {
            question: "ما الفرق بين غربال الترومل والغربال الاهتزازي؟",
            answer:
              "يعمل الترومل بسطح أسطواني دوّار وقد يكون مفيدًا للمنتجات الليفية أو الرطبة أو المتكتلة، بينما يوفر الغربال الاهتزازي فصلًا دقيقًا للمنتجات الجافة سهلة الانسياب على سطح مستوٍ مهتز.",
          },
          {
            question: "كيف تُختار الفتحة؟",
            answer: "تُختار الفتحة وفق حجم المنتج النهائي المستهدف، ويمكن استخدام فتحات مختلفة لأهداف جودة مختلفة للسماد العضوي.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer: "نوع المنتج والسعة بالساعة والرطوبة وحجم التلقيم ونطاق الحجم المستهدف وقيود الموقع.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لغربال ترومل",
        text: "شاركنا المادة والسعة ونطاق الحجم المستهدف، لنحدد معًا غربال الترومل المناسب.",
        mailSubject: "طلب عرض سعر: غربال ترومل",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: ["نوع المادة", "السعة (طن/ساعة أو م³/ساعة)", "الرطوبة", "حجم التلقيم", "نطاق الحجم المستهدف", "قيود الموقع"],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لغربال ترومل.",
          "",
          "المادة:",
          "السعة:",
          "الرطوبة:",
          "حجم التلقيم:",
          "نطاق الحجم المستهدف (مم):",
          "معلومات الموقع:",
        ],
      },
    },
  },
};
