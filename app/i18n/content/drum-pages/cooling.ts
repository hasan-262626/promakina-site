import type { DrumPageConfig } from "./types";

// Soğutma tamburu: sıcak ürünün hava ile soğutulması. Brülör/yakıt yoktur; amaç nem düşürmek değildir.
export const coolingDrumPage: DrumPageConfig = {
  key: "coolingDrum",
  trSlug: "sogutma-tamburu",
  mainImage: "/images/tambur sogutma/tamsogutma1.png",
  applications: [
    { image: "/images/01-genel/gran1.jpg", link: "fertilizerPlants" },
    { image: "/images/tambur-uygulamalari/amonyum-nitrat-granul.webp", link: "rotaryDryer" },
    { image: "/images/tambur-uygulamalari/potasyum-klorur-kompakt.webp", link: "mining" },
  ],
  sectors: ["fertilizerPlants", "mining", "chemicalProcess"],
  resources: ["rotaryDryer", "granulatorDrum", "coatingDrum", "cyclones"],
  machines: ["dustCollection", "screeningSystems", "conveying", "packagingSystems"],
  texts: {
    tr: {
      meta: {
        title: "Soğutma Tamburu İmalatı | Granül Ürün Soğutucu | PRO MAKİNA",
        description:
          "Kurutma veya granülasyon sonrası sıcak granül ürünü hava ile kontrollü soğutan döner soğutma tamburu. Gübre ve mineral hatları için projeye özel imalat.",
      },
      breadcrumbLabel: "Soğutma Tamburu",
      h1: "Soğutma Tamburu – Granül Ürünler için Döner Tamburlu Soğutucu",
      productCategory: "Döner Tamburlu Soğutucu",
      overview: {
        imageAlt: "Döner soğutma tamburu, tahrik grubu ve hava bağlantı davlumbazları",
        tagline: "Döner Tamburlu Soğutucu",
        keyFacts: [
          { label: "Görev", value: "Sıcak ürünün sıcaklığını düşürmek" },
          { label: "Soğutma ortamı", value: "Ortam havası, fan ile emilir" },
          { label: "Boyutlandırma", value: "Ürün debisi ve sıcaklık farkına göre" },
          { label: "Kapsam", value: "Tambur, fan, siklon ve filtre bağlantısı" },
        ],
        title: "Sıcak Ürünü Paketleme ve Depolamaya Hazırlayan Soğutucu",
        paragraphs: [
          "Soğutma tamburu, kurutma veya granülasyon adımından yüksek sıcaklıkta çıkan granül ve partiküllü ürünün, tambur içinde perdelenerek ortam havasıyla temas etmesi yoluyla soğutulduğu döner ekipmandır. Tamburda yakıt veya brülör kullanılmaz; ısı, ürün üzerinden geçen havaya aktarılır.",
          "Sıcak hâlde elenen, kaplanan veya paketlenen ürün; depoda topaklanma, ambalajda terleme ve kaplama malzemesinin ürüne tutunmaması gibi sorunlara daha yatkındır. Soğutma tamburu, ürünün sonraki adımlara uygun sıcaklıkta aktarılması için hattın sonuna konumlandırılır.",
          "Tambur çapı ve boyu, ürün debisi, giriş ve hedef çıkış sıcaklığı, hava debisi ve ürünün kırılma hassasiyeti birlikte değerlendirilerek belirlenir. İç kanatlar, granülü yormadan havayla temas yüzeyini artıracak şekilde seçilir.",
        ],
        note: "Soğutma tamburu nem düşürme ekipmanı değildir; ürünün nemi kurutma tamburunda ayarlanır. Soğutucunun tasarımında belirleyici olan sıcaklık farkı, hava debisi ve kalış süresidir.",
      },
      process: {
        title: "Soğutma Hattı Proses Akışı",
        intro:
          "Şema, soğutma tamburunun kurutma veya granülasyon sonrası tipik konumunu ve soğutma havasının izlediği yolu gösterir.",
        note: "Soğutma havasıyla taşınan ince toz siklon ve filtrede tutulur; toplanan malzemenin hatta geri alınıp alınmayacağı ürün kalitesine göre belirlenir.",
        mainLineLabel: "Ürün hattı",
        productLine: [
          { title: "Sıcak ürün girişi", text: "Kurutucu veya granülatörden gelen sıcak ürün tambura düzenli beslenir." },
          { title: "Perdeleme ve temas", text: "Kanatlar ürünü kaldırarak hava akışının içinden geçirir." },
          { title: "Kontrollü ilerleme", text: "Eğim ve devir, hedef sıcaklığa ulaşacak kalış süresini sağlar." },
          { title: "Soğuk ürün çıkışı", text: "Ürün eleme, kaplama veya paketleme hattına aktarılır." },
        ],
        auxLineLabel: "Soğutma havası hattı",
        auxLine: [
          { title: "Hava girişi", text: "Ortam havası tambura, ürünle temas edecek yönde alınır." },
          { title: "Toz ayırma", text: "Isınmış hava siklon ve filtreden geçirilerek tozdan arındırılır." },
          { title: "Fan ve baca", text: "Proses fanı hava akışını sağlar ve tamburda negatif basınç oluşturur." },
        ],
        flow: {
          svgTitle: "Soğutma hattı proses akış şeması",
          svgDesc:
            "Ürün hattı: kurutma veya granülasyon çıkışı, soğutma tamburu, eleme, kaplama veya paketleme. Hava hattı: ortam havası tambura girer; ısınmış hava siklon, filtre ve fandan geçer.",
          mainLane: "ÜRÜN HATTI",
          before: [{ title: "Sıcak ürün", sub: "Kurutucu / granülatör çıkışı" }],
          drum: { title: "SOĞUTMA TAMBURU", sub: "hava ile ısı transferi" },
          after: [
            { title: "Eleme", sub: "Boy ayırma" },
            { title: "Kaplama, paketleme", sub: "Uygun sıcaklıkta ürün" },
          ],
          aux: {
            lane: "SOĞUTMA HAVASI HATTI",
            tone: "air",
            inputs: [{ title: "Ortam havası", sub: "Hava girişi" }],
            outputs: [
              { title: "Siklon", sub: "İri toz ayırma" },
              { title: "Filtre ve fan", sub: "İnce toz, negatif basınç" },
            ],
            inLabel: "soğutma havası",
            outLabel: "ısınmış hava",
          },
        },
      },
      applications: {
        title: "Soğutma Tamburu Uygulama Alanları",
        items: [
          {
            title: "Granül Gübre Soğutma",
            text: "Kurutma sonrası sıcak çıkan NPK, organomineral ve benzeri granül gübrelerin eleme ve paketleme öncesi soğutulması. Kanat yapısı granül dayanımına göre seçilir.",
            imageAlt: "Avuç içinde kırmızımsı granül gübre taneleri",
            linkLabel: "Gübre ve Granülasyon Tesisleri",
          },
          {
            title: "Kurutucu Sonrası Ürün Soğutma",
            text: "Kurutma tamburundan çıkan sıcak ürünün depolama öncesi sıcaklığının düşürülmesi. Kurutucu ve soğutucu birlikte boyutlandırıldığında hattın ısı dengesi doğru kurulur.",
            imageAlt: "Beyaz ve açık sarı azotlu gübre granülleri",
            linkLabel: "Kurutma Tamburu",
          },
          {
            title: "Mineral ve Kompakt Ürün Soğutma",
            text: "Termal işlem görmüş mineral, tuz ve kompakt ürünlerin taşıma ve stoklama öncesi soğutulması. Aşındırıcı ürünlerde gövde ve kanat malzemesi buna göre belirlenir.",
            imageAlt: "Turuncu renkli kompakt potasyum klorür taneleri",
            linkLabel: "Madencilik ve Mineral İşleme",
          },
        ],
      },
      design: {
        title: "Projeye Özel Soğutma Tamburu Tasarımı ve İmalatı",
        intro:
          "PRO MAKİNA soğutma tamburlarını ürün debisi, giriş ve hedef çıkış sıcaklığı, ürünün kırılma hassasiyeti ve tesisin hava hattına göre projelendirir. Tambur gövdesi, kanatlar, hava giriş ve çıkış davlumbazları ile fan, siklon ve filtre bağlantıları birlikte tasarlanır.",
        highlights: ["Ürüne uygun kanat geometrisi", "Fan ve toz toplama entegrasyonu", "Ayarlanabilir devir", "Aşınmaya dayanıklı gövde seçenekleri"],
        dataTitle: "Proses Tasarım Verileri",
        dataItems: [
          { title: "Ürün Bilgileri", text: "Ürün türü, tane boyutu, yığın yoğunluğu ve kırılma hassasiyeti." },
          { title: "Kapasite ve Sıcaklık", text: "Saatlik ürün debisi, giriş sıcaklığı ve hedef çıkış sıcaklığı." },
          { title: "Hava Hattı", text: "Ortam havası koşulları, hava debisi, toz yükü ve filtre gereksinimi." },
          { title: "Mekanik Tasarım", text: "Tambur ölçüleri, gövde ve kanat malzemesi, tahrik ve taşıyıcı gruplar." },
          { title: "Hat Entegrasyonu", text: "Kurutucu çıkışı, eleme, kaplama ve paketleme bağlantıları." },
        ],
        dataNote: "Ulaşılabilecek çıkış sıcaklığı ortam havası koşullarına bağlıdır; sıcak iklimlerde ve yaz koşullarında hava sıcaklığı tasarımda ayrıca dikkate alınır.",
      },
      faq: {
        title: "Soğutma Tamburu Hakkında Sık Sorulan Sorular",
        items: [
          {
            question: "Soğutma tamburunda brülör veya yakıt kullanılır mı?",
            answer:
              "Hayır. Soğutma tamburunda ısı kaynağı yoktur; sıcak ürünün ısısı tamburdan geçen ortam havasına aktarılır ve hava fan ile emilerek toz toplama sistemine gönderilir.",
          },
          {
            question: "Soğutma tamburu ürünün nemini düşürür mü?",
            answer:
              "Soğutma tamburu nem düşürmek için tasarlanmaz. Ürünün hedef nemi kurutma tamburunda sağlanır; soğutucunun görevi ürün sıcaklığını sonraki adımlara uygun seviyeye indirmektir.",
          },
          {
            question: "Ürün neden paketlemeden önce soğutulur?",
            answer:
              "Sıcak paketlenen veya stoklanan ürün topaklanmaya, ambalaj içinde terlemeye ve kaplama malzemesinin tutunmamasına daha yatkındır. Soğutma, bu riskleri azaltmak için hattın sonunda yapılır.",
          },
          {
            question: "Çıkış sıcaklığı neye göre belirlenir?",
            answer:
              "Hedef çıkış sıcaklığı ürünün sonraki adımına ve ortam havası koşullarına göre belirlenir. Tasarımda ürün debisi, sıcaklık farkı, hava debisi ve kalış süresi birlikte hesaplanır.",
          },
          {
            question: "Teklif için hangi bilgiler gereklidir?",
            answer:
              "Ürün türü, saatlik debi, giriş ve hedef çıkış sıcaklığı, tane boyutu, tesisin bulunduğu yerin iklim koşulları ve mevcut toz toplama ekipmanı temel verilerdir.",
          },
        ],
      },
      cta: {
        title: "Soğutma tamburu için teknik teklif alın",
        text: "Ürün debiniz, giriş ve hedef çıkış sıcaklığınız ile saha koşullarınıza göre soğutma tamburunu ve hava hattını birlikte netleştirelim.",
        mailSubject: "Soğutma Tamburu Teknik Teklif Talebi",
        requiredTitle: "Teknik Teklif İçin Gerekli Bilgiler",
        requiredItems: [
          "Ürün türü ve tane boyutu",
          "Saatlik ürün debisi (ton/saat)",
          "Ürün giriş sıcaklığı",
          "Hedef çıkış sıcaklığı",
          "Tesis konumu ve iklim koşulları",
          "Mevcut fan ve toz toplama ekipmanı",
        ],
        inquiryLines: [
          "Merhaba, soğutma tamburu için teknik teklif almak istiyorum.",
          "",
          "Ürün:",
          "Kapasite (ton/saat):",
          "Giriş sıcaklığı (°C):",
          "Hedef çıkış sıcaklığı (°C):",
          "Tane boyutu:",
          "Saha / iklim bilgisi:",
        ],
      },
    },
    en: {
      meta: {
        title: "Rotary Cooler Manufacturer | Granule Cooling Drum",
        description:
          "Rotary cooling drums that cool hot granules with ambient air after drying or granulation. Project-specific rotary coolers for fertilizer and mineral lines.",
      },
      breadcrumbLabel: "Rotary Cooler",
      h1: "Rotary Cooler – Rotary Drum Cooling for Granular Products",
      productCategory: "Rotary Drum Cooler",
      overview: {
        imageAlt: "Rotary cooling drum with drive unit and air connection hoods",
        tagline: "Rotary Drum Cooler",
        keyFacts: [
          { label: "Task", value: "Lowering hot product temperature" },
          { label: "Cooling medium", value: "Ambient air drawn by a fan" },
          { label: "Sizing", value: "Product rate and temperature drop" },
          { label: "Scope", value: "Drum, fan, cyclone and filter connection" },
        ],
        title: "A Cooler that Prepares Hot Product for Packing and Storage",
        paragraphs: [
          "A rotary cooler is a rotating drum in which granular or particulate product leaving drying or granulation at high temperature is cascaded through a stream of ambient air and cooled. No fuel or burner is used; heat is transferred from the product to the air passing over it.",
          "Product that is screened, coated or bagged while still hot is more prone to caking in storage, sweating inside the bag and poor adhesion of coating agents. The rotary cooler is therefore placed at the end of the line so that product reaches the following steps at a suitable temperature.",
          "Drum diameter and length are determined by product rate, inlet and target outlet temperature, airflow and how sensitive the product is to breakage. Internal flights are selected to increase air contact without overstressing the granules.",
        ],
        note: "A rotary cooler is not a moisture-reduction unit; product moisture is set in the dryer. Cooler design is governed by temperature difference, airflow and residence time.",
      },
      process: {
        title: "Cooling Line Process Flow",
        intro:
          "The diagram shows the typical position of the rotary cooler after drying or granulation and the path followed by the cooling air.",
        note: "Fines carried by the cooling air are captured in the cyclone and filter; whether collected material is returned to the line depends on product quality.",
        mainLineLabel: "Product line",
        productLine: [
          { title: "Hot product inlet", text: "Hot product from the dryer or granulator is fed steadily to the drum." },
          { title: "Cascading and contact", text: "Flights lift the product and shower it through the airflow." },
          { title: "Controlled transport", text: "Slope and speed provide the residence time needed to reach target temperature." },
          { title: "Cool product discharge", text: "Product is sent to screening, coating or packing." },
        ],
        auxLineLabel: "Cooling air line",
        auxLine: [
          { title: "Air intake", text: "Ambient air enters the drum in the direction that brings it into contact with the product." },
          { title: "Dust separation", text: "Warmed air passes through a cyclone and filter to remove dust." },
          { title: "Fan and stack", text: "The process fan drives the airflow and keeps the drum under negative pressure." },
        ],
        flow: {
          svgTitle: "Cooling line process flow diagram",
          svgDesc:
            "Product line: dryer or granulator discharge, rotary cooler, screening, coating or packing. Air line: ambient air enters the drum; warmed air passes through a cyclone, filter and fan.",
          mainLane: "PRODUCT LINE",
          before: [{ title: "Hot product", sub: "From dryer / granulator" }],
          drum: { title: "ROTARY COOLER", sub: "heat transfer to air" },
          after: [
            { title: "Screening", sub: "Size separation" },
            { title: "Coating, packing", sub: "Product at safe temperature" },
          ],
          aux: {
            lane: "COOLING AIR LINE",
            tone: "air",
            inputs: [{ title: "Ambient air", sub: "Air intake" }],
            outputs: [
              { title: "Cyclone", sub: "Coarse dust" },
              { title: "Filter and fan", sub: "Fines, negative pressure" },
            ],
            inLabel: "cooling air",
            outLabel: "warmed air",
          },
        },
      },
      applications: {
        title: "Rotary Cooler Applications",
        items: [
          {
            title: "Granular Fertilizer Cooling",
            text: "Cooling NPK, organomineral and similar granular fertilizers that leave the dryer hot, before screening and packing. Flight design is matched to granule strength.",
            imageAlt: "Reddish granular fertilizer in a hand",
            linkLabel: "Fertilizer Plants",
          },
          {
            title: "Post-Dryer Product Cooling",
            text: "Lowering the temperature of hot product from a rotary dryer before storage. When dryer and cooler are sized together, the heat balance of the line is set correctly.",
            imageAlt: "White and pale yellow nitrogen fertilizer granules",
            linkLabel: "Rotary Dryer",
          },
          {
            title: "Mineral and Compacted Product Cooling",
            text: "Cooling heat-treated minerals, salts and compacted products before conveying and stockpiling. For abrasive products, shell and flight materials are chosen accordingly.",
            imageAlt: "Orange compacted potassium chloride particles",
            linkLabel: "Mining and Mineral Processing",
          },
        ],
      },
      design: {
        title: "Custom Rotary Cooler Design and Manufacturing",
        intro:
          "PRO MAKINA engineers rotary coolers around product rate, inlet and target outlet temperature, breakage sensitivity and the air system of the plant. The drum shell, flights, air inlet and outlet hoods and the fan, cyclone and filter connections are designed together.",
        highlights: ["Product-matched flight geometry", "Integrated fan and dust collection", "Adjustable drum speed", "Wear-resistant shell options"],
        dataTitle: "Process Design Data",
        dataItems: [
          { title: "Product Data", text: "Product type, particle size, bulk density and breakage sensitivity." },
          { title: "Capacity and Temperature", text: "Hourly product rate, inlet temperature and target outlet temperature." },
          { title: "Air System", text: "Ambient air conditions, airflow, dust load and filter requirement." },
          { title: "Mechanical Design", text: "Drum dimensions, shell and flight material, drive and supports." },
          { title: "Line Integration", text: "Connections to dryer discharge, screening, coating and packing." },
        ],
        dataNote: "The achievable outlet temperature depends on ambient air conditions; hot climates and summer operation are considered separately in the design.",
      },
      faq: {
        title: "Rotary Cooler FAQ",
        items: [
          {
            question: "Does a rotary cooler use a burner or fuel?",
            answer:
              "No. A rotary cooler has no heat source; heat from the hot product is transferred to ambient air passing through the drum, and the air is drawn by a fan to the dust collection system.",
          },
          {
            question: "Does a rotary cooler reduce product moisture?",
            answer:
              "A rotary cooler is not designed for moisture reduction. Target moisture is achieved in the dryer; the cooler lowers product temperature to a level suitable for the next steps.",
          },
          {
            question: "Why is product cooled before packing?",
            answer:
              "Product bagged or stored hot is more prone to caking, sweating inside the bag and poor adhesion of coating agents. Cooling at the end of the line reduces these risks.",
          },
          {
            question: "How is the outlet temperature defined?",
            answer:
              "Target outlet temperature depends on the next process step and ambient air conditions. Product rate, temperature difference, airflow and residence time are calculated together.",
          },
          {
            question: "What information is needed for a quotation?",
            answer:
              "Product type, hourly rate, inlet and target outlet temperature, particle size, the climate at the plant location and the existing dust collection equipment.",
          },
        ],
      },
      cta: {
        title: "Request a technical quotation for a rotary cooler",
        text: "Share your product rate, inlet and target outlet temperatures and site conditions, and we will define the cooler and its air system together with you.",
        mailSubject: "Rotary Cooler Quotation Request",
        requiredTitle: "Information Needed for a Technical Quotation",
        requiredItems: [
          "Product type and particle size",
          "Hourly product rate (t/h)",
          "Product inlet temperature",
          "Target outlet temperature",
          "Plant location and climate",
          "Existing fan and dust collection equipment",
        ],
        inquiryLines: [
          "Hello, I would like a technical quotation for a rotary cooler.",
          "",
          "Product:",
          "Capacity (t/h):",
          "Inlet temperature (°C):",
          "Target outlet temperature (°C):",
          "Particle size:",
          "Site / climate information:",
        ],
      },
    },
    ru: {
      meta: {
        title: "Охладительный барабан | Охлаждение гранул",
        description:
          "Вращающиеся барабаны для охлаждения горячих гранул воздухом после сушки или грануляции. Проектирование охладителей для линий удобрений и минералов.",
      },
      breadcrumbLabel: "Охладительный барабан",
      h1: "Охладительный барабан – барабанный охладитель гранул",
      productCategory: "Барабанный охладитель",
      overview: {
        imageAlt: "Охладительный барабан с приводом и кожухами подвода воздуха",
        tagline: "Барабанный охладитель",
        keyFacts: [
          { label: "Задача", value: "Снижение температуры горячего продукта" },
          { label: "Охлаждающая среда", value: "Атмосферный воздух, вентилятор" },
          { label: "Расчёт", value: "По расходу продукта и перепаду температур" },
          { label: "Объём поставки", value: "Барабан, вентилятор, циклон, фильтр" },
        ],
        title: "Охладитель, готовящий продукт к фасовке и хранению",
        paragraphs: [
          "Охладительный барабан — вращающийся аппарат, в котором гранулированный или сыпучий продукт, выходящий горячим после сушки или грануляции, пересыпается в потоке атмосферного воздуха и охлаждается. Топливо и горелка не используются: тепло передаётся от продукта воздуху.",
          "Продукт, который рассеивается, покрывается или фасуется горячим, больше склонен к слёживанию на складе, конденсации в мешке и плохому удержанию покрытия. Поэтому охладитель устанавливается в конце линии, чтобы продукт поступал на следующие операции при подходящей температуре.",
          "Диаметр и длина барабана определяются расходом продукта, начальной и целевой температурой, расходом воздуха и чувствительностью продукта к разрушению. Внутренние лопасти подбираются так, чтобы увеличить контакт с воздухом без лишней нагрузки на гранулы.",
        ],
        note: "Охладительный барабан не предназначен для снижения влажности — влажность задаётся в сушилке. Определяющими для охладителя являются перепад температур, расход воздуха и время пребывания.",
      },
      process: {
        title: "Технологическая схема линии охлаждения",
        intro:
          "Схема показывает типовое положение охладителя после сушки или грануляции и путь охлаждающего воздуха.",
        note: "Мелкая фракция, уносимая воздухом, улавливается в циклоне и фильтре; возврат уловленного материала в линию зависит от требований к качеству.",
        mainLineLabel: "Продуктовая линия",
        productLine: [
          { title: "Подача горячего продукта", text: "Горячий продукт из сушилки или гранулятора равномерно подаётся в барабан." },
          { title: "Пересыпание и контакт", text: "Лопасти поднимают продукт и пропускают его через поток воздуха." },
          { title: "Контролируемое движение", text: "Наклон и скорость обеспечивают время пребывания до целевой температуры." },
          { title: "Выгрузка охлаждённого продукта", text: "Продукт передаётся на грохочение, покрытие или фасовку." },
        ],
        auxLineLabel: "Линия охлаждающего воздуха",
        auxLine: [
          { title: "Забор воздуха", text: "Атмосферный воздух поступает в барабан навстречу продукту или попутно." },
          { title: "Отделение пыли", text: "Нагретый воздух очищается от пыли в циклоне и фильтре." },
          { title: "Вентилятор и труба", text: "Технологический вентилятор создаёт поток и разрежение в барабане." },
        ],
        flow: {
          svgTitle: "Технологическая схема линии охлаждения",
          svgDesc:
            "Продуктовая линия: выход сушилки или гранулятора, охладительный барабан, грохочение, покрытие или фасовка. Воздушная линия: атмосферный воздух поступает в барабан; нагретый воздух проходит циклон, фильтр и вентилятор.",
          mainLane: "ПРОДУКТОВАЯ ЛИНИЯ",
          before: [{ title: "Горячий продукт", sub: "Из сушилки / гранулятора" }],
          drum: { title: "ОХЛАДИТЕЛЬ", sub: "теплообмен с воздухом" },
          after: [
            { title: "Грохочение", sub: "Разделение фракций" },
            { title: "Покрытие, фасовка", sub: "Нужная температура" },
          ],
          aux: {
            lane: "ЛИНИЯ ВОЗДУХА",
            tone: "air",
            inputs: [{ title: "Атм. воздух", sub: "Забор воздуха" }],
            outputs: [
              { title: "Циклон", sub: "Крупная пыль" },
              { title: "Фильтр, вентилятор", sub: "Тонкая пыль, разрежение" },
            ],
            inLabel: "охлаждающий воздух",
            outLabel: "нагретый воздух",
          },
        },
      },
      applications: {
        title: "Области применения охладительного барабана",
        items: [
          {
            title: "Охлаждение гранулированных удобрений",
            text: "Охлаждение NPK, органоминеральных и других гранулированных удобрений после сушилки, перед грохочением и фасовкой. Конструкция лопастей подбирается под прочность гранул.",
            imageAlt: "Красноватые гранулы удобрения на ладони",
            linkLabel: "Заводы удобрений",
          },
          {
            title: "Охлаждение продукта после сушилки",
            text: "Снижение температуры горячего продукта после сушильного барабана перед складированием. Совместный расчёт сушилки и охладителя обеспечивает правильный тепловой баланс линии.",
            imageAlt: "Белые и светло-жёлтые гранулы азотного удобрения",
            linkLabel: "Сушильный барабан",
          },
          {
            title: "Охлаждение минералов и компактата",
            text: "Охлаждение минералов, солей и компактированных продуктов после термообработки перед транспортировкой и складированием. Для абразивных продуктов подбираются материалы корпуса и лопастей.",
            imageAlt: "Оранжевые частицы компактированного хлорида калия",
            linkLabel: "Горнодобывающая промышленность",
          },
        ],
      },
      design: {
        title: "Проектирование и изготовление охладительных барабанов",
        intro:
          "PRO MAKINA проектирует охладительные барабаны исходя из расхода продукта, начальной и целевой температуры, чувствительности к разрушению и воздушной системы предприятия. Корпус, лопасти, кожухи подвода и отвода воздуха, а также подключение вентилятора, циклона и фильтра разрабатываются совместно.",
        highlights: ["Лопасти под свойства продукта", "Интеграция вентилятора и пылеулавливания", "Регулируемая скорость вращения", "Износостойкие варианты корпуса"],
        dataTitle: "Исходные данные для проектирования",
        dataItems: [
          { title: "Данные продукта", text: "Вид продукта, крупность, насыпная плотность, склонность к разрушению." },
          { title: "Производительность и температура", text: "Часовой расход, температура на входе и целевая температура на выходе." },
          { title: "Воздушная система", text: "Параметры наружного воздуха, расход, пылевая нагрузка, фильтрация." },
          { title: "Механическая часть", text: "Размеры барабана, материал корпуса и лопастей, привод и опоры." },
          { title: "Интеграция в линию", text: "Связь с выходом сушилки, грохочением, покрытием и фасовкой." },
        ],
        dataNote: "Достижимая температура на выходе зависит от параметров наружного воздуха; жаркий климат и летний режим учитываются в проекте отдельно.",
      },
      faq: {
        title: "Часто задаваемые вопросы об охладительном барабане",
        items: [
          {
            question: "Используется ли в охладителе горелка или топливо?",
            answer:
              "Нет. В охладительном барабане нет источника тепла: тепло горячего продукта передаётся атмосферному воздуху, который вентилятор направляет в систему пылеулавливания.",
          },
          {
            question: "Снижает ли охладительный барабан влажность?",
            answer:
              "Охладитель не предназначен для снижения влажности. Целевая влажность достигается в сушилке, а охладитель снижает температуру продукта до уровня, подходящего для следующих операций.",
          },
          {
            question: "Зачем охлаждать продукт перед фасовкой?",
            answer:
              "Продукт, фасуемый или складируемый горячим, больше склонен к слёживанию, конденсации в мешке и плохому удержанию покрытия. Охлаждение в конце линии снижает эти риски.",
          },
          {
            question: "Как определяется температура на выходе?",
            answer:
              "Целевая температура зависит от следующей операции и параметров наружного воздуха. Расход продукта, перепад температур, расход воздуха и время пребывания рассчитываются совместно.",
          },
          {
            question: "Какие данные нужны для предложения?",
            answer:
              "Вид продукта, часовой расход, температура на входе и целевая на выходе, крупность, климат в месте установки и имеющееся оборудование пылеулавливания.",
          },
        ],
      },
      cta: {
        title: "Запросите техническое предложение на охладительный барабан",
        text: "Сообщите расход продукта, температуры на входе и выходе и условия площадки — вместе определим охладитель и его воздушную систему.",
        mailSubject: "Запрос предложения: охладительный барабан",
        requiredTitle: "Данные для технического предложения",
        requiredItems: [
          "Вид продукта и крупность",
          "Часовой расход продукта (т/ч)",
          "Температура продукта на входе",
          "Целевая температура на выходе",
          "Место установки и климат",
          "Имеющийся вентилятор и пылеулавливание",
        ],
        inquiryLines: [
          "Здравствуйте, прошу техническое предложение на охладительный барабан.",
          "",
          "Продукт:",
          "Производительность (т/ч):",
          "Температура на входе (°C):",
          "Целевая температура на выходе (°C):",
          "Крупность:",
          "Данные площадки / климат:",
        ],
      },
    },
    ar: {
      meta: {
        title: "أسطوانة التبريد الدوّارة | تبريد المنتجات الحبيبية",
        description:
          "أسطوانات تبريد دوّارة تبرّد الحبيبات الساخنة بالهواء بعد التجفيف أو التحبيب. مبرّدات مصممة حسب المشروع لخطوط الأسمدة والمعادن.",
      },
      breadcrumbLabel: "أسطوانة تبريد دوّارة",
      h1: "أسطوانة التبريد الدوّارة – مبرّد أسطواني للمنتجات الحبيبية",
      productCategory: "مبرّد أسطواني دوّار",
      overview: {
        imageAlt: "أسطوانة تبريد دوّارة مع وحدة الإدارة وأغطية توصيل الهواء",
        tagline: "مبرّد أسطواني دوّار",
        keyFacts: [
          { label: "المهمة", value: "خفض حرارة المنتج الساخن" },
          { label: "وسط التبريد", value: "هواء محيط يسحبه مروحة" },
          { label: "التحجيم", value: "حسب تدفق المنتج وفرق الحرارة" },
          { label: "نطاق التوريد", value: "أسطوانة ومروحة وسيكلون وفلتر" },
        ],
        title: "مبرّد يجهّز المنتج الساخن للتعبئة والتخزين",
        paragraphs: [
          "أسطوانة التبريد الدوّارة معدة يُبرَّد فيها المنتج الحبيبي أو الجسيمي الخارج ساخنًا من التجفيف أو التحبيب، إذ يتساقط داخل الأسطوانة عبر تيار من الهواء المحيط. لا يُستخدم وقود أو موقد؛ تنتقل الحرارة من المنتج إلى الهواء المار فوقه.",
          "المنتج الذي يُغربل أو يُغلَّف أو يُعبّأ وهو ساخن يكون أكثر عرضة للتكتّل في المخزن والتكثف داخل العبوة وضعف التصاق مواد التغليف. لذلك يُوضع المبرّد في نهاية الخط ليصل المنتج إلى المراحل التالية بدرجة حرارة مناسبة.",
          "يُحدَّد قطر الأسطوانة وطولها وفق تدفق المنتج ودرجتي حرارة الدخول والخروج المستهدفة وتدفق الهواء وحساسية المنتج للكسر. وتُختار الريش الداخلية لزيادة التماس مع الهواء دون إجهاد الحبيبات.",
        ],
        note: "أسطوانة التبريد ليست معدة لخفض الرطوبة؛ تُضبط رطوبة المنتج في المجفف. ويحكم تصميم المبرّد فرقُ الحرارة وتدفق الهواء وزمن المكوث.",
      },
      process: {
        title: "مخطط تدفق خط التبريد",
        intro: "يوضح المخطط الموقع النموذجي للمبرّد بعد التجفيف أو التحبيب والمسار الذي يسلكه هواء التبريد.",
        note: "تُحتجز الدقائق التي يحملها هواء التبريد في السيكلون والفلتر، ويتحدد إرجاع المادة المجمّعة إلى الخط وفق متطلبات جودة المنتج.",
        mainLineLabel: "خط المنتج",
        productLine: [
          { title: "دخول المنتج الساخن", text: "يُلقَّم المنتج الساخن من المجفف أو المُحبِّب إلى الأسطوانة بانتظام." },
          { title: "التساقط والتماس", text: "ترفع الريش المنتج وتُسقطه عبر تيار الهواء." },
          { title: "تقدّم مضبوط", text: "يوفّر الميل والسرعة زمن المكوث اللازم لبلوغ الحرارة المستهدفة." },
          { title: "خروج المنتج المبرّد", text: "يُنقل المنتج إلى الغربلة أو التغليف أو التعبئة." },
        ],
        auxLineLabel: "خط هواء التبريد",
        auxLine: [
          { title: "سحب الهواء", text: "يدخل الهواء المحيط إلى الأسطوانة بالاتجاه الذي يحقق التماس مع المنتج." },
          { title: "فصل الغبار", text: "يمر الهواء الدافئ عبر السيكلون والفلتر لإزالة الغبار." },
          { title: "المروحة والمدخنة", text: "تولّد مروحة العملية تيار الهواء وضغطًا سالبًا داخل الأسطوانة." },
        ],
        flow: {
          svgTitle: "مخطط تدفق خط التبريد",
          svgDesc:
            "خط المنتج: خروج المجفف أو المُحبِّب، أسطوانة التبريد، الغربلة، التغليف أو التعبئة. خط الهواء: يدخل الهواء المحيط إلى الأسطوانة ويمر الهواء الدافئ عبر السيكلون والفلتر والمروحة.",
          mainLane: "خط المنتج",
          before: [{ title: "منتج ساخن", sub: "من المجفف / المُحبِّب" }],
          drum: { title: "أسطوانة التبريد", sub: "انتقال الحرارة إلى الهواء" },
          after: [
            { title: "الغربلة", sub: "فرز الأحجام" },
            { title: "التغليف والتعبئة", sub: "منتج بحرارة مناسبة" },
          ],
          aux: {
            lane: "خط هواء التبريد",
            tone: "air",
            inputs: [{ title: "هواء محيط", sub: "سحب الهواء" }],
            outputs: [
              { title: "سيكلون", sub: "غبار خشن" },
              { title: "فلتر ومروحة", sub: "غبار ناعم، ضغط سالب" },
            ],
            inLabel: "هواء التبريد",
            outLabel: "هواء دافئ",
          },
        },
      },
      applications: {
        title: "مجالات استخدام أسطوانة التبريد",
        items: [
          {
            title: "تبريد الأسمدة الحبيبية",
            text: "تبريد أسمدة NPK والأسمدة العضوية المعدنية وما يماثلها بعد خروجها ساخنة من المجفف وقبل الغربلة والتعبئة. يُطابَق تصميم الريش مع متانة الحبيبات.",
            imageAlt: "حبيبات سماد مائلة إلى الحمرة في راحة اليد",
            linkLabel: "مصانع الأسمدة",
          },
          {
            title: "تبريد المنتج بعد المجفف",
            text: "خفض حرارة المنتج الساخن الخارج من المجفف الدوّار قبل التخزين. عند تحجيم المجفف والمبرّد معًا يُضبط التوازن الحراري للخط بشكل صحيح.",
            imageAlt: "حبيبات سماد نيتروجيني بيضاء وصفراء فاتحة",
            linkLabel: "المجفف الدوّار",
          },
          {
            title: "تبريد المعادن والمنتجات المضغوطة",
            text: "تبريد المعادن والأملاح والمنتجات المضغوطة المعالجة حراريًا قبل النقل والتخزين. تُختار مواد الجسم والريش للمنتجات الكاشطة وفقًا لذلك.",
            imageAlt: "جسيمات كلوريد البوتاسيوم المضغوط برتقالية اللون",
            linkLabel: "التعدين ومعالجة المعادن",
          },
        ],
      },
      design: {
        title: "تصميم وتصنيع أسطوانات تبريد مخصصة",
        intro:
          "تصمم PRO MAKINA أسطوانات التبريد وفق تدفق المنتج ودرجتي حرارة الدخول والخروج المستهدفة وحساسية المنتج للكسر ونظام الهواء في المنشأة. ويُصمَّم جسم الأسطوانة والريش وأغطية دخول الهواء وخروجه ووصلات المروحة والسيكلون والفلتر معًا.",
        highlights: ["ريش مطابقة للمنتج", "مروحة وتجميع غبار مدمجان", "سرعة دوران قابلة للضبط", "خيارات جسم مقاوم للتآكل"],
        dataTitle: "بيانات تصميم العملية",
        dataItems: [
          { title: "بيانات المنتج", text: "نوع المنتج وحجم الجسيمات والكثافة الظاهرية وحساسية الكسر." },
          { title: "السعة والحرارة", text: "تدفق المنتج بالساعة وحرارة الدخول وحرارة الخروج المستهدفة." },
          { title: "نظام الهواء", text: "ظروف الهواء المحيط وتدفق الهواء وحمل الغبار ومتطلبات الفلترة." },
          { title: "التصميم الميكانيكي", text: "أبعاد الأسطوانة ومادة الجسم والريش ونظام الإدارة والمساند." },
          { title: "التكامل مع الخط", text: "الربط مع خروج المجفف والغربلة والتغليف والتعبئة." },
        ],
        dataNote: "تعتمد حرارة الخروج الممكن بلوغها على ظروف الهواء المحيط؛ ويؤخذ المناخ الحار والتشغيل الصيفي في الاعتبار بشكل منفصل عند التصميم.",
      },
      faq: {
        title: "أسئلة شائعة حول أسطوانة التبريد",
        items: [
          {
            question: "هل تستخدم أسطوانة التبريد موقدًا أو وقودًا؟",
            answer:
              "لا. لا يوجد مصدر حرارة في أسطوانة التبريد؛ تنتقل حرارة المنتج الساخن إلى الهواء المحيط المار عبر الأسطوانة، وتسحبه المروحة إلى نظام تجميع الغبار.",
          },
          {
            question: "هل تخفض أسطوانة التبريد رطوبة المنتج؟",
            answer:
              "لا تُصمَّم أسطوانة التبريد لخفض الرطوبة. تتحقق الرطوبة المستهدفة في المجفف، بينما يخفض المبرّد حرارة المنتج إلى مستوى مناسب للمراحل التالية.",
          },
          {
            question: "لماذا يُبرَّد المنتج قبل التعبئة؟",
            answer:
              "المنتج المعبأ أو المخزن ساخنًا أكثر عرضة للتكتّل والتكثف داخل العبوة وضعف التصاق مواد التغليف. ويقلل التبريد في نهاية الخط من هذه المخاطر.",
          },
          {
            question: "كيف تُحدَّد حرارة الخروج؟",
            answer:
              "تعتمد حرارة الخروج المستهدفة على المرحلة التالية وظروف الهواء المحيط. ويُحسب تدفق المنتج وفرق الحرارة وتدفق الهواء وزمن المكوث معًا.",
          },
          {
            question: "ما المعلومات المطلوبة لعرض السعر؟",
            answer:
              "نوع المنتج والتدفق بالساعة وحرارة الدخول والخروج المستهدفة وحجم الجسيمات ومناخ موقع المنشأة ومعدات تجميع الغبار الحالية.",
          },
        ],
      },
      cta: {
        title: "اطلب عرضًا فنيًا لأسطوانة تبريد",
        text: "شاركنا تدفق المنتج ودرجتي حرارة الدخول والخروج وظروف الموقع، لنحدد معًا المبرّد ونظام الهواء الخاص به.",
        mailSubject: "طلب عرض سعر: أسطوانة تبريد دوّارة",
        requiredTitle: "المعلومات المطلوبة للعرض الفني",
        requiredItems: [
          "نوع المنتج وحجم الجسيمات",
          "تدفق المنتج بالساعة (طن/ساعة)",
          "حرارة دخول المنتج",
          "حرارة الخروج المستهدفة",
          "موقع المنشأة والمناخ",
          "المروحة ومعدات تجميع الغبار الحالية",
        ],
        inquiryLines: [
          "مرحبًا، أرغب في عرض فني لأسطوانة تبريد دوّارة.",
          "",
          "المنتج:",
          "السعة (طن/ساعة):",
          "حرارة الدخول (°م):",
          "حرارة الخروج المستهدفة (°م):",
          "حجم الجسيمات:",
          "معلومات الموقع / المناخ:",
        ],
      },
    },
  },
};
