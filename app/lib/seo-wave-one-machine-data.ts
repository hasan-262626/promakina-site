import type { MachineSeoLandingPageProps } from "../components/machine-seo-landing-page";

type MachinePageRecord = MachineSeoLandingPageProps;

const commonTechnicalContents = [
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Vida çapı, hatve, eğim ve motor mantığını taşıma sistemleri özelinde teknik olarak değerlendirin.",
  },
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    description:
      "Tambur sistemlerinde boyut, devir, termal yük ve yardımcı ekipman ilişkisini görün.",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
    description:
      "Taşıma, granülasyon, kurutma ve eleme adımlarının birbirini nasıl beslediğini inceleyin.",
  },
  {
    title: "Kompost Tesisi Nasıl Kurulur?",
    href: "/kutuphane/blog/kompost-tesisi-kurulumu",
    description:
      "Organik atık ve yüksek nemli malzeme hatlarında makina seçiminin nasıl yapıldığını okuyun.",
  },
];

const machinePages: Record<string, MachinePageRecord> = {
  "helezon-konveyorler": {
    title: "Helezon Konveyörler | Vidalı Konveyör İmalatı",
    description:
      "Helezon konveyör, vidalı konveyör ve paslanmaz helezon konveyör çözümleri için kapasiteye özel endüstriyel imalat sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
    image: "/images/helezon2.jpg",
    productName: "Helezon Konveyörler",
    categoryName: "Taşıma Ekipmanları",
    introTitle: "Toz, Granül ve Kontrollü Besleme Gerektiren Hatlar İçin Vida Taşıma Çözümleri",
    introParagraphs: [
      "Helezon konveyör, kapalı gövde içinde dönen vida yaprağı sayesinde toz, granül ve kontrollü besleme gerektiren ürünlerin güvenli taşınmasını sağlayan kompakt bir taşıma ekipmanıdır. Vidalı konveyör çözümleri özellikle bunker altı besleme, kısa ve orta mesafe transfer, dozajlama ve kontrollü ürün akışı gereken proseslerde çok güçlü avantaj sunar.",
      "Pro Makina, helezon konveyör imalatı sürecinde ürün yoğunluğu, doluluk oranı, vida çapı, hatve, devir, hat uzunluğu ve saha yerleşimini birlikte değerlendirir. Bu sayede yalnız çalışan bir vida değil; daha düşük tıkanma riski, daha kararlı besleme ve daha güçlü saha dayanımı sağlayan bir taşıma sistemi elde edilir.",
    ],
    cards: [
      {
        title: "Kullanım Alanları",
        items: [
          "Gübre tesislerinde dozajlama ve hammadde besleme",
          "Kompost ve organik karışım transfer hatları",
          "Çimento helezonu benzeri toz ürün uygulamaları",
          "Paslanmaz gövde gerektiren kimyasal veya sıvı katkı beslemeleri",
        ],
      },
      {
        title: "Uygun Hammaddeler",
        items: [
          "Toz gübre ve mineral hammaddeler",
          "Granül ürünler ve kırılgan karışımlar",
          "Nemli organik karışımlar",
          "Mikro veya makro dozaj akışları",
        ],
      },
      {
        title: "Avantajlar",
        items: [
          "Kompakt yerleşimde kapalı taşıma",
          "Kontrollü ve kararlı ürün besleme",
          "Projeye özel vida çapı ve hatve seçimi",
          "Ağır hizmet tipi gövde ve tahrik altyapısı",
        ],
      },
      {
        title: "Teklif İçin Gerekli Bilgiler",
        items: [
          "Ürün tipi ve yoğunluğu",
          "Hedef kapasite ve hat uzunluğu",
          "Yatay veya eğimli çalışma ihtiyacı",
          "Gövde malzemesi ve saha koşulu beklentisi",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Vida Geometrisi",
        description:
          "Çap, hatve ve gövde tipi ürün davranışına göre seçilir.",
        importance:
          "Kapasite, doluluk oranı ve tıkanma riskini belirler.",
      },
      {
        criterion: "Ürün Yoğunluğu",
        description:
          "Toz, granül veya nemli karışımın akış davranışı farklıdır.",
        importance:
          "Motor gücü ve dönüş hızı seçimini doğrudan etkiler.",
      },
      {
        criterion: "Hat Eğimi",
        description:
          "Eğim arttıkça efektif taşıma kapasitesi düşebilir.",
        importance:
          "Gerçek saha kapasitesinin doğru hesaplanmasını sağlar.",
      },
      {
        criterion: "Malzeme Seçimi",
        description:
          "Karbon çelik, galvaniz veya paslanmaz gövde ürün karakterine göre belirlenir.",
        importance:
          "Korozyon, hijyen ve servis ömrü açısından kritiktir.",
      },
    ],
    technicalFeatures: [
      "Helezon konveyör imalatında gövde tipi, vida çapı, hatve, şaft yapısı ve tahrik sistemi birlikte çözülür. Çimento helezonu benzeri yoğun toz ürünlerde farklı, paslanmaz helezon konveyör gereken hijyenik veya korozif uygulamalarda farklı malzeme yaklaşımı gerekir.",
      "Bunker altı çalışma, ara transfer veya kontrollü dozaj gibi farklı görevlerde tek tip vida mantığı kullanılmaz. Endüstriyel konveyör sistemi içinde helezonun görevi kadar giriş-çıkış geometrisi de önem taşır.",
    ],
    capacityCriteria: [
      "Kapasite belirlenirken ton/saat yanında ürün yoğunluğu, doluluk oranı, hat uzunluğu ve eğim açısı değerlendirilir. Yalnız büyük çap seçmek çözüm değildir; aşırı devir ürün kırılması ve güç tüketimini artırabilir.",
      "Helezon konveyörler, bant konveyör ve kovalı elevatör gibi diğer taşıma ekipmanlarıyla aynı hat ritminde seçilmelidir. Özellikle gübre tesisi ve dozaj sistemleri içinde bu denge, reçete kararlılığını etkiler.",
    ],
    processRole: [
      "Helezon konveyör çoğu hatta besleme ve ara transfer görevini üstlenir. Granül gübre üretim tesislerinde bunker altı dozajlama, organomineral hatlarda kontrollü organik besleme ve sıvı gübre yardımcı katı besleme adımlarında kritik rol oynar.",
      "Kapalı gövde yapısı sayesinde tozlu ürünlerin çevreye yayılmasını azaltır; bu da özellikle kapalı alan proseslerinde önemli avantaj sağlar.",
    ],
    optionalEquipment: [
      "Loadcell destekli dozajlama altyapısı, frekans kontrollü sürücüler, seviye sensörleri, aşınma plakaları, bakım kapakları ve özel giriş-çıkış adaptörleri projeye göre eklenebilir.",
      "Paslanmaz gövde, ATEX uyumlu ekipman veya çift helezonlu çözümler de uygulamaya göre tasarlanabilir.",
    ],
    advantages: [
      "Kapalı ve güvenli taşıma yapısı, kontrollü ürün besleme, kompakt yerleşim, dozajlama ile uyumlu çalışma ve sahaya özel imalat esnekliği helezon konveyörlerin en büyük avantajlarıdır.",
      "Doğru seçildiğinde bant konveyör ve kovalı elevatörlerle birlikte çalışan daha dengeli bir taşıma omurgası oluşturur.",
    ],
    quoteRequirements: [
      "Ürün tipi, yoğunluk, kapasite, hat uzunluğu, eğim, besleme tipi ve gövde malzemesi beklentisi teklif süreci için paylaşılmalıdır.",
      "Bu verilerle Pro Makina, helezon konveyör imalatı için daha net çap, hatve, motor ve gövde çözümü sunabilir.",
    ],
    relatedPages: [
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
      { label: "Dozaj Sistemleri", href: "/makinalar/dozajlama-ve-tartim-sistemleri" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
    relatedServices: [
      { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Organomineral Gübre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    technicalContents: commonTechnicalContents,
    faqs: [
      {
        question: "Helezon konveyör ile vidalı konveyör aynı ekipman mıdır?",
        answer:
          "Evet. Türkiye’de helezon konveyör ve vidalı konveyör ifadeleri çoğunlukla aynı taşıma sistemini anlatır.",
      },
      {
        question: "Çimento helezonu ile standart helezon konveyör arasında fark var mıdır?",
        answer:
          "Ürün yoğunluğu, aşınma ve toz davranışı nedeniyle gövde, vida ve tahrik seçimi uygulamaya göre değişebilir.",
      },
      {
        question: "Paslanmaz helezon konveyör ne zaman tercih edilir?",
        answer:
          "Korozyon riski, hijyen gereksinimi veya kimyasal temas bulunan proseslerde paslanmaz gövde tercih edilir.",
      },
      {
        question: "Kapasite hesabında hangi veriler gerekir?",
        answer:
          "Ürün tipi, yoğunluk, kapasite, hat uzunluğu, eğim ve besleme karakteri temel giriş verileridir.",
      },
      {
        question: "Helezon konveyör bant konveyör yerine kullanılabilir mi?",
        answer:
          "Kısa-orta mesafe kapalı taşıma ve dozajlamada avantajlıdır; daha uzun yatay transferlerde bant konveyör daha uygun olabilir.",
      },
    ],
    ctaText:
      "Helezon konveyör imalatı, vida çapı seçimi ve motor ön boyutlandırması için ürün verilerinizi paylaşın; doğru taşıma sistemini birlikte belirleyelim.",
  },
  "bant-konveyorler": {
    title: "Bant Konveyörler | Endüstriyel Taşıma Bandı",
    description:
      "Bant konveyör ve endüstriyel taşıma bandı sistemleri için kapasiteye özel bant konveyör imalatı ve saha entegrasyonu sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
    image: "/images/konveyor6.jpeg",
    productName: "Bant Konveyörler",
    categoryName: "Taşıma Ekipmanları",
    introTitle: "Uzun ve Orta Mesafeli Transferlerde Güvenilir Endüstriyel Konveyör Omurgası",
    introParagraphs: [
      "Bant konveyör, dökme katı malzemelerin yatay veya düşük eğimli transferinde en yaygın kullanılan endüstriyel konveyör sistemi çözümlerinden biridir. Gübre, kompost, mineral, geri dönüşüm ve genel proses hatlarında malzemenin kontrollü, sürekli ve bakım dostu şekilde taşınmasını sağlar.",
      "Pro Makina, bant konveyör imalatı sürecinde kapasite, bant genişliği, hat uzunluğu, şase yapısı, rulolar, tahrik mantığı ve boşaltma noktalarını birlikte değerlendirir. Böylece yalnız hareket eden bir taşıma bandı değil; hat içi ritmi koruyan, saha servis erişimini kolaylaştıran ve yardımcı ekipmanlarla uyumlu çalışan bir sistem kurulur.",
    ],
    cards: [
      {
        title: "Kullanım Alanları",
        items: [
          "Granül gübre üretim hatları",
          "Kompost ve organik atık tesisleri",
          "Mineral ve maden işleme hatları",
          "Paketleme ve stoklama öncesi yatay transfer",
        ],
      },
      {
        title: "Uygun Hammaddeler",
        items: [
          "Granül ve iri taneli ürünler",
          "Kuru veya yarı nemli dökme katı malzemeler",
          "Mineral fraksiyonlar",
          "Sevkiyat öncesi ara stok ürünleri",
        ],
      },
      {
        title: "Avantajlar",
        items: [
          "Uzun hatlarda enerji-verimli taşıma",
          "Bakımı kolay rulolu yapı",
          "Farklı boşaltma ve yükleme noktalarına uyum",
          "Diğer taşıma ekipmanlarıyla güçlü entegrasyon",
        ],
      },
      {
        title: "Teklif İçin Gerekli Bilgiler",
        items: [
          "Kapasite ve ürün tipi",
          "Hat uzunluğu ve eğim",
          "Açık veya kapalı gövde beklentisi",
          "Yükleme ve boşaltma noktası bilgileri",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Bant Genişliği",
        description:
          "Kapasite, ürün tane boyutu ve yükleme profiline göre belirlenir.",
        importance:
          "Taşıma kararlılığı ve bant ömrü üzerinde belirleyicidir.",
      },
      {
        criterion: "Hat Uzunluğu",
        description:
          "Şase, gerdirme, rulolar ve motor seçimi hat uzunluğuna göre şekillenir.",
        importance:
          "Güç tüketimi ve mekanik güven için kritiktir.",
      },
      {
        criterion: "Ürün Yapısı",
        description:
          "Aşındırıcı, kırılgan veya nemli ürünler için farklı bant ve şase yaklaşımı gerekir.",
        importance:
          "Servis ömrü ve ürün kaybını doğrudan etkiler.",
      },
      {
        criterion: "Boşaltma Mantığı",
        description:
          "Tek nokta veya çok noktalı boşaltma senaryoları farklı mekanik çözümler ister.",
        importance:
          "Hat akışı ve stok yönetimi açısından belirleyicidir.",
      },
    ],
    technicalFeatures: [
      "Bant konveyör sistemleri bant genişliği, gövde yapısı, tahrik tamburu, avara-rulo dizilimi, gerdirme mantığı ve koruma ekipmanlarıyla birlikte ele alınır. Endüstriyel taşıma bandı çözümlerinde malzemenin kırılmadan, dökülmeden ve hat dışına taşmadan ilerlemesi ana hedeftir.",
      "Projeye göre açık şase, kapalı gövde, yürüyüş yolu, kapak, sıyırıcı ve sensör altyapıları sisteme entegre edilebilir.",
    ],
    capacityCriteria: [
      "Ton/saat, bant hızı, malzeme yoğunluğu, yükleme şekli ve eğim birlikte değerlendirilir. Kapasiteyi artırmak için yalnız hız yükseltmek çoğu zaman doğru yaklaşım değildir; ürün saçılması ve aşınma riski doğabilir.",
      "Bant konveyörler, helezon konveyörler ve kovalı elevatörlerle birlikte bir hat sistemi içinde değerlendirilmelidir. Böylece yatay ve dikey taşıma dengesi bozulmadan kurulur.",
    ],
    processRole: [
      "Bant konveyörler çoğu hatta ana omurga görevi görür. Kurutma tamburu çıkışı, elek beslemesi, stok bunkerleri ve paketleme öncesi transferler bu ekipmanlar üzerinden yürütülür.",
      "Uzun mesafeli ve sürekli ürün akışının gerektiği tesislerde prosesin görünmeyen ama kritik ritim belirleyicisidir.",
    ],
    optionalEquipment: [
      "Kapalı gövde, üst kapak, sıyırıcı sistemler, yürüyüş platformları, bant kayma sensörleri, hız izleme ekipmanları ve çok noktalı boşaltma çözümleri projeye göre eklenebilir.",
      "Toz kontrol bağlantıları ve bakım güvenliği ekipmanları da saha gereksinimine göre tasarlanabilir.",
    ],
    advantages: [
      "Bant konveyörler uzun hatlarda düşük bakım, yüksek taşıma kararlılığı ve esnek yerleşim avantajı sunar. Farklı ürün gruplarına göre kolay uyarlanabilmesi, ağır sanayi ve proses tesislerinde yaygın tercih edilmesini sağlar.",
      "Kurutma, eleme, stoklama ve paketleme adımlarını aynı ritimde bağlayarak tesisin toplam verimini güçlendirir.",
    ],
    quoteRequirements: [
      "Kapasite, ürün tipi, hat boyu, eğim, ortam koşulları ve kapalı-açık gövde beklentisi teklif çalışmasının temel verileridir.",
      "Yükleme-boşaltma noktaları ve yardımcı ekipman ilişkisi de doğru boyutlandırma için paylaşılmalıdır.",
    ],
    relatedPages: [
      { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Sektörler", href: "/sektorler" },
    ],
    relatedServices: [
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    technicalContents: commonTechnicalContents,
    faqs: [
      {
        question: "Bant konveyör hangi hatlarda avantaj sağlar?",
        answer:
          "Uzun ve sürekli yatay transfer gereken gübre, kompost, maden ve genel proses hatlarında büyük avantaj sağlar.",
      },
      {
        question: "Bant genişliği nasıl seçilir?",
        answer:
          "Ürün yoğunluğu, ton/saat kapasitesi, tane boyutu ve yükleme profiline göre belirlenir.",
      },
      {
        question: "Kapalı bant konveyör gerekli midir?",
        answer:
          "Tozlu veya çevresel kontrol gereken uygulamalarda kapalı gövde önemli avantaj sunar.",
      },
      {
        question: "Bant konveyör ile helezon aynı görevi yapar mı?",
        answer:
          "Hayır. Helezon daha kompakt ve kontrollü besleme için, bant konveyör ise daha uzun ve sürekli yatay transfer için öne çıkar.",
      },
      {
        question: "Teklif için hangi bilgiler gerekir?",
        answer:
          "Kapasite, hat boyu, ürün tipi, eğim ve saha yerleşimi bilgisi temel başlangıç verileridir.",
      },
    ],
    ctaText:
      "Bant konveyör imalatı, taşıma bandı boyutlandırması ve hat entegrasyonu için ürün ve kapasite verilerinizi paylaşın; en uygun sistemi birlikte kuralım.",
  },
  "kovali-elevatorler": {
    title: "Kovalı Elevatörler | Dikey Taşıma Sistemleri",
    description:
      "Kovalı elevatör ve zincirli kovalı elevatör çözümleri için dikey taşıma elevatörü imalatı ve kapasiteye özel tasarım sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
    image: "/images/bantlielevator.jpg",
    productName: "Kovalı Elevatörler",
    categoryName: "Taşıma Ekipmanları",
    introTitle: "Granül, Toz ve Dökme Katı Ürünler İçin Güvenli Dikey Taşıma",
    introParagraphs: [
      "Kovalı elevatör, dökme katı malzemelerin dikey eksende kontrollü taşınmasını sağlayan temel taşıma ekipmanıdır. Zincirli kovalı elevatör veya bantlı kovalı elevatör tercihleri; ürünün ağırlığına, sıcaklığına, kırılganlığına ve kapasite ihtiyacına göre değişir.",
      "Pro Makina, kovalı elevatör imalatında kova tipi, hat hızı, boşaltma mantığı, gövde yapısı, tahrik sistemi ve servis erişimini birlikte değerlendirir. Böylece yalnız dikey taşıyan bir ekipman değil; kırılmayı azaltan, taşmayı önleyen ve prosese güvenle entegre olan bir çözüm sunar.",
    ],
    cards: [
      {
        title: "Kullanım Alanları",
        items: [
          "Granül gübre ve organomineral üretim hatları",
          "Silis kumu ve mineral dikey transfer hatları",
          "Paketleme ve stok bunker beslemeleri",
          "Kurutma sonrası ürün yükseltme noktaları",
        ],
      },
      {
        title: "Uygun Hammaddeler",
        items: [
          "Granül ürünler",
          "Toz ve ince mineral fraksiyonlar",
          "Kırılgan ama kontrollü taşınması gereken malzemeler",
          "Kuru veya sınırlı nemli dökme katı ürünler",
        ],
      },
      {
        title: "Avantajlar",
        items: [
          "Dar alanda yüksek kot farkı aşma",
          "Sürekli ve düzenli ürün akışı",
          "Farklı kova ve boşaltma tipleri",
          "Ağır hizmet tipi gövde ve tahrik seçenekleri",
        ],
      },
      {
        title: "Teklif İçin Gerekli Bilgiler",
        items: [
          "Kapasite ve ürün tipi",
          "Dikey kaldırma yüksekliği",
          "Kova tipi ve boşaltma beklentisi",
          "Sıcaklık ve saha koşulları",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Kaldırma Yüksekliği",
        description:
          "Toplam düşey mesafe gövde ve tahrik çözümünü belirler.",
        importance:
          "Motor gücü ve zincir/bant seçimi açısından belirleyicidir.",
      },
      {
        criterion: "Ürün Kırılganlığı",
        description:
          "Granül veya kırılgan ürünlerde boşaltma tipi dikkatle seçilmelidir.",
        importance:
          "Ürün kaybı ve kalite bozulmasını azaltır.",
      },
      {
        criterion: "Kova Geometrisi",
        description:
          "Kova boyutu ve dizilimi efektif kapasiteyi belirler.",
        importance:
          "Düzenli ürün akışı için kritik rol oynar.",
      },
      {
        criterion: "Tahrik Mantığı",
        description:
          "Zincirli veya bantlı çözüm ürün ve servis beklentisine göre seçilir.",
        importance:
          "Dayanım ve bakım planını doğrudan etkiler.",
      },
    ],
    technicalFeatures: [
      "Kovalı elevatör sistemlerinde başlık-bot yapısı, zincir veya bant seçimi, kova adımı, gövde genişliği ve boşaltma geometrisi birlikte kurgulanır. Dikey taşıma elevatörü çözümlerinde mekanik güvenlik ve servis erişimi tasarımın ilk aşamasında planlanmalıdır.",
      "Zincirli kovalı elevatörler ağır hizmet ve daha zorlu ürünler için, bantlı çözümler ise daha hassas ürün akışları için tercih edilebilir.",
    ],
    capacityCriteria: [
      "Kapasite hesabında kova hacmi, hız, ürün yoğunluğu ve doluluk oranı birlikte değerlendirilir. Yalnız daha büyük kova seçmek etkili çözüm olmayabilir; boşaltma karakteri ve ürün kırılganlığı da aynı derecede önemlidir.",
      "Kovalı elevatör çoğu hatta bant konveyör ve helezonlarla birlikte çalışır. Bu nedenle hat içi ritim, giriş bunker yüksekliği ve çıkış ekipmanı ile ilişki kurulmadan seçim yapılmamalıdır.",
    ],
    processRole: [
      "Kovalı elevatörler, ürünün farklı proses katları arasında güvenli şekilde yükseltilmesini sağlar. Kurutma, eleme, stoklama ve paketleme arasında düşey bağlantı kuran en kritik taşıma ekipmanlarından biridir.",
      "Özellikle dikey taşımanın zorunlu olduğu dar saha uygulamalarında tüm tesis yerleşimini daha verimli hale getirir.",
    ],
    optionalEquipment: [
      "Seviye sensörleri, hız izleme sistemleri, bakım platformları, patinaj kontrolü, farklı kova materyalleri ve gövde iç aşınma korumaları projeye göre eklenebilir.",
      "Kapalı servis kapakları ve otomasyon sinyalleri de saha güvenliği için tasarlanabilir.",
    ],
    advantages: [
      "Kovalı elevatörler kompakt alanda büyük yükseklik farkı aşma, düzenli ürün akışı, düşük yatay alan ihtiyacı ve yardımcı ekipmanlarla güçlü entegrasyon avantajı sunar.",
      "Doğru seçildiğinde ürün kaybını azaltır ve paketleme ya da stok hattına daha stabil ürün transferi sağlar.",
    ],
    quoteRequirements: [
      "Ürün tipi, yoğunluk, kapasite, kaldırma yüksekliği, ürün sıcaklığı ve gövde malzemesi beklentisi teklif için temel verileri oluşturur.",
      "Giriş ve çıkış ekipmanlarının tipi de doğru boşaltma kurgusu için paylaşılmalıdır.",
    ],
    relatedPages: [
      { label: "Helezon Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Programlar", href: "/programlar/elevator-kapasite-hesabi" },
    ],
    relatedServices: [
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "İletişim", href: "/iletisim" },
    ],
    technicalContents: commonTechnicalContents,
    faqs: [
      {
        question: "Kovalı elevatör ile zincirli kovalı elevatör aynı mıdır?",
        answer:
          "Kovalı elevatör genel ürün ailesidir; zincirli veya bantlı tahrik seçeneği uygulamaya göre belirlenir.",
      },
      {
        question: "Granül ürünlerde hangi tip tercih edilir?",
        answer:
          "Ürünün kırılganlığına göre bantlı veya düşük darbeli boşaltma yapan çözümler öne çıkabilir.",
      },
      {
        question: "Kapasite nasıl hesaplanır?",
        answer:
          "Kova hacmi, hız, ürün yoğunluğu ve doluluk oranı birlikte değerlendirilir.",
      },
      {
        question: "Dikey taşıma yüksekliği tasarımı etkiler mi?",
        answer:
          "Evet. Gövde, tahrik ve gerdirme kurgusu toplam kaldırma yüksekliğine göre şekillenir.",
      },
      {
        question: "Teklif için hangi bilgiler gerekir?",
        answer:
          "Ürün tipi, kapasite, kaldırma yüksekliği ve ürün davranışı bilgisi teklif için temel başlangıçtır.",
      },
    ],
    ctaText:
      "Kovalı elevatör imalatı, dikey taşıma kapasitesi ve zincirli-bantlı çözüm seçimi için ürün verilerinizi paylaşın; doğru sistemi birlikte tasarlayalım.",
  },
  "kurutma-tamburlari": {
    title: "Kurutma Tamburları | Endüstriyel Rotary Dryer",
    description:
      "Kurutma tamburları, döner kurutma tamburu ve endüstriyel rotary dryer çözümleri için yüksek kapasiteli makina tasarımı sunuyoruz.",
    canonical: "https://www.promakina.com.tr/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
    image: "/images/kurutmatam2.jpg",
    productName: "Kurutma Tamburları",
    categoryName: "Tambur Sistemleri",
    introTitle: "Gübre, Çamur, Kum ve Mineral İçin Döner Kurutma Tamburu Çözümleri",
    introParagraphs: [
      "Kurutma tamburları, ürünün içerdiği nemin kontrollü biçimde uzaklaştırılması için tasarlanan ağır hizmet tipi rotary dryer ekipmanlarıdır. Granül gübre, kompost türevleri, arıtma çamuru, silis kumu ve farklı mineral ürünlerde doğru tambur tasarımı yalnız son nemi değil; enerji kullanımı, toz davranışı ve sonrası eleme-paketleme performansını da belirler.",
      "Pro Makina, döner kurutma tamburu tasarımında çap-boy ilişkisini, iç flight yapısını, brülör ve hava hattını, siklon-filtre entegrasyonunu ve saha yerleşimini birlikte çözer. Böylece kurutma tamburları yalnız bir makina grubu değil, tüm termal prosesin güvenli omurgası olarak çalışır.",
    ],
    cards: [
      {
        title: "Kullanım Alanları",
        items: [
          "Granül gübre kurutma hatları",
          "Arıtma çamuru ve digestat kurutma",
          "Silis kumu ve mineral kurutma",
          "Kompost ve organik türevlerin nem düşürme prosesleri",
        ],
      },
      {
        title: "Uygun Hammaddeler",
        items: [
          "Granül ürünler",
          "Yüksek nemli çamur ve organik akışlar",
          "Kum ve ince mineral fraksiyonları",
          "Termal hazırlık gerektiren dökme katı ürünler",
        ],
      },
      {
        title: "Avantajlar",
        items: [
          "Yüksek kapasiteye uygun termal tasarım",
          "Projeye özel flight ve devir yaklaşımı",
          "Fan, siklon ve filtre hattıyla entegre çalışma",
          "Ağır hizmet tipi gövde ve bakım erişimi",
        ],
      },
      {
        title: "Teklif İçin Gerekli Bilgiler",
        items: [
          "Ürün tipi ve yoğunluğu",
          "Giriş ve çıkış nemi",
          "Saatlik kapasite",
          "Yakıt tercihi ve saha yerleşimi",
        ],
      },
    ],
    summaryRows: [
      {
        criterion: "Termal Yük",
        description:
          "Buharlaşacak su miktarı ve hedef son nem tambur yükünü belirler.",
        importance:
          "Çap-boy ve brülör seçiminin temelini oluşturur.",
      },
      {
        criterion: "İç Flight Yapısı",
        description:
          "Ürünün gaz akışıyla temas karakteri flight geometrisiyle şekillenir.",
        importance:
          "Kuruma verimi ve ürün hareketi için kritiktir.",
      },
      {
        criterion: "Gaz ve Filtre Hattı",
        description:
          "Fan, siklon ve filtre debisi tamburla aynı ritimde çözülmelidir.",
        importance:
          "Toz kontrolü ve enerji dengesi açısından belirleyicidir.",
      },
      {
        criterion: "Saha Yerleşimi",
        description:
          "Tambur uzunluğu, destek yapısı ve servis erişimi saha geometrisiyle uyumlu olmalıdır.",
        importance:
          "Kurulum güveni ve bakım kolaylığı sağlar.",
      },
    ],
    technicalFeatures: [
      "Kurutma tamburları çap, boy, devir, support yapısı, iç flight dizilimi ve gaz hattı entegrasyonu ile birlikte tasarlanır. Endüstriyel rotary dryer çözümlerinde yalnız tambur gövdesi değil; sürüş, destek ve servis erişimi de aynı mühendislik kararıdır.",
      "Ürün karakterine göre aşınma dayanımı, sıcaklık yönetimi ve iç yüzey yapısı farklılaştırılır. Gübre kurutma tamburu ile maden kurutma tamburu aynı formda görünse de tasarım detayları farklıdır.",
    ],
    capacityCriteria: [
      "Kapasite hesabında giriş nemi, çıkış nemi, ton/saat, ürün yoğunluğu ve residence time birlikte değerlendirilir. Tambur çok kısa seçilirse kuruma yetersiz kalır; gereksiz uzun seçilirse enerji ve yatırım maliyeti artar.",
      "Kurutma tamburları çoğu hatta bant konveyör, siklon, jet pulse filtre ve eleme sistemleriyle birlikte çalışır. Yardımcı ekipman dengesi kurulmadan kurutucu verimi tek başına yeterli olmaz.",
    ],
    processRole: [
      "Kurutma tamburları, granül ürünün paketleme öncesi hazırlanması, mineralin eleme öncesi kurutulması veya çamur akışlarının nihai nem seviyesine düşürülmesi için prosesin merkezinde yer alır.",
      "Sonraki adımların kararlılığı çoğu zaman tambur çıkışındaki ürün sıcaklığı ve nemiyle şekillenir.",
    ],
    optionalEquipment: [
      "Brülör, fan, siklon, jet pulse filtre, PLC tabanlı sıcaklık izleme, izole gövde, servis platformları ve özel iç flight setleri projeye göre eklenebilir.",
      "Bant konveyör, bunker ve eleme entegrasyonları da kurutma tamburu omurgasını tamamlar.",
    ],
    advantages: [
      "Doğru kurutma tamburu seçimi daha kararlı son nem, daha düşük enerji kaybı, güçlü saha dayanımı ve daha güvenilir proses akışı sağlar.",
      "Gübre, kum, çamur ve mineral uygulamalarında aynı tasarım mantığı değil, ürüne özel mühendislik yaklaşımı kullanılması yatırım değerini yükseltir.",
    ],
    quoteRequirements: [
      "Ürün tipi, kapasite, nem değerleri, yoğunluk, parçacık boyutu, yakıt tercihi ve yardımcı ekipman beklentisi teklif için paylaşılmalıdır.",
      "Bu verilerle rotary dryer boyutlandırması ve yardımcı proses omurgası daha net çıkarılabilir.",
    ],
    relatedPages: [
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Jet Pulse Filtreler", href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri/jet-pulse-filtreler" },
      { label: "Siklon Ayırıcılar", href: "/makinalar/toz-toplama-ve-filtrasyon-sistemleri/siklon-ayiricilar" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
    relatedServices: [
      { label: "Kurutma Tamburu İmalatı", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Granül Gübre Üretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    ],
    technicalContents: commonTechnicalContents,
    faqs: [
      {
        question: "Kurutma tamburları hangi sektörlerde kullanılır?",
        answer:
          "Gübre, kompost, çamur kurutma, silis kumu, kuvars kumu ve genel mineral işleme hatlarında yaygın kullanılır.",
      },
      {
        question: "Döner kurutma tamburu ile rotary dryer aynı mıdır?",
        answer:
          "Evet. Rotary dryer, döner kurutma tamburu için yaygın kullanılan uluslararası ifadedir.",
      },
      {
        question: "Kurutma tamburu kapasitesi nasıl hesaplanır?",
        answer:
          "Ton/saat, nem yükü, ürün yoğunluğu, gaz sıcaklığı ve residence time birlikte değerlendirilir.",
      },
      {
        question: "Siklon ve filtre hattı gerekli midir?",
        answer:
          "Birçok uygulamada toz kontrolü ve gaz temizliği için siklon ve filtre hattı önemli rol oynar.",
      },
      {
        question: "Teklif için hangi bilgiler gerekir?",
        answer:
          "Ürün tipi, kapasite, giriş-çıkış nemi, yakıt tercihi ve yardımcı ekipman beklentisi paylaşılmalıdır.",
      },
    ],
    ctaText:
      "Kurutma tamburları, rotary dryer boyutlandırması ve termal proses yardımcı ekipmanları için ürün verilerinizi paylaşın; doğru sistemi birlikte tasarlayalım.",
  },
};

export function getWaveOneMachinePage(slug: string) {
  const page = machinePages[slug];

  if (!page) {
    throw new Error(`Unknown SEO wave-one machine slug: ${slug}`);
  }

  return page;
}
