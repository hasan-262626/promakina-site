import { drumProductPages } from "./drum-product-data";

export type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage";

export type MachineProductPage = {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  ctaTitle?: string;
  ctaText?: string;
  overviewParagraphs: string[];
  highlightText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

export type MachineCategoryPage = {
  slug: string;
  title: string;
  heroImage: string;
  shortDescription: string;
  heroDescription: string;
  seoNote: string;
  calculatorFamily: CalculatorFamily;
  ctaTitle: string;
  ctaText: string;
  products: MachineProductPage[];
};

type ProductSeed = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;
};

type CategorySeed = {
  slug: string;
  title: string;
  heroImage: string;
  shortDescription: string;
  heroDescription: string;
  seoNote: string;
  calculatorFamily: CalculatorFamily;
  ctaTitle: string;
  ctaText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
  products: ProductSeed[];
};

function makeGallery(image: string, subject: string) {
  return [
    { src: image, alt: `${subject} genel görünüm`, caption: "Genel ürün görünümü" },
    { src: image, alt: `${subject} imalat detayı`, caption: "İmalat ve gövde detayı" },
    { src: image, alt: `${subject} saha yerleşimi`, caption: "Saha yerleşimi yaklaşımı" },
    { src: image, alt: `${subject} teknik detay`, caption: "Teknik detay ve servis kurgusu" },
  ];
}

function expandCategory(seed: CategorySeed): MachineCategoryPage {
  return {
    ...seed,
    products: seed.products.map((product) => ({
      slug: product.slug,
      title: product.title,
      shortDescription: product.shortDescription,
      heroDescription: product.shortDescription,
      ctaTitle: `${product.title} için doğru makina çözümünü birlikte netleştirelim`,
      ctaText: `${product.title} için kapasite, ürün yapısı, proses akışı ve saha verilerinize uygun teknik çözüm oluşturabiliriz. ${product.shortDescription}`,
      overviewParagraphs: [
        `${product.title}, ${seed.title.toLowerCase()} içinde yer alan ve proses hattının kapasite, ürün davranışı ve çalışma koşullarına göre özel ölçülerde tasarlanan endüstriyel makina çözümlerinden biridir.`,
        `${product.title} çözümlerinde hat entegrasyonu, bakım erişimi, uzun ömürlü mekanik yapı ve saha koşullarına uyum birlikte değerlendirilir. Projeye özel makina imalatı yaklaşımıyla ölçü, malzeme ve ekipman seçimi ürüne göre şekillendirilir.`,
      ],
      highlightText: `${product.title} seçiminde yalnızca kapasite değil; ürün karakteri, çalışma rejimi, saha şartları ve bakım ihtiyacı da belirleyicidir. Doğru makina kurgusu, proses verimi ve işletme sürekliliği için kritik rol oynar.`,
      specs: seed.specs,
      applications: seed.applications,
      optionalEquipment: seed.optionalEquipment,
      spareParts: seed.spareParts,
      gallery: makeGallery(product.image ?? seed.heroImage, product.title),
    })),
  };
}

const transportSeed: CategorySeed = {
  slug: "tasima-ekipmanlari",
  title: "Taşıma Ekipmanları",
  heroImage: "/images/konveyor2.jpg",
  shortDescription:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör imalatı yapıyoruz.",
  heroDescription:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör imalatı yapıyoruz.",
  calculatorFamily: "transport",
  ctaTitle: "Taşıma ekipmanları için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör ihtiyaçlarınız için kapasite, hat boyu ve ürün karakterine uygun sistemi birlikte seçelim.",
  specs: [
    "Projeye uygun kapasite ve hat boyu",
    "Açık veya kapalı gövde seçenekleri",
    "Standart veya ağır hizmet şase yapısı",
    "Motor-redüktör ve tahrik sistemi",
    "Bakım ve servis erişimine uygun tasarım",
    "Hat entegrasyonuna uygun giriş ve çıkış bağlantıları",
  ],
  applications: [
    "Granül gübre üretim hatları",
    "Kompost ve organik atık tesisleri",
    "Mineral ve dökme katı malzeme prosesleri",
    "Paketleme ve depolama öncesi taşıma hatları",
  ],
  optionalEquipment: [
    "Kapalı gövde ve üst kapak",
    "Frekans kontrollü sürücü",
    "Kayma, hız ve doluluk sensörleri",
    "Bakım platformu ve yürüyüş yolu",
    "Ağır hizmet motor-redüktör paketi",
    "Toz emiş ve temizlik ekipmanları",
  ],
  spareParts: [
    "Motor-redüktör grubu",
    "Tambur ve rulo takımları",
    "Zincir, bant veya vida elemanları",
    "Rulman ve yatak setleri",
    "Sensörler ve emniyet ekipmanları",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    { slug: "bantli-konveyorler", title: "Bantlı Konveyörler", shortDescription: "Malzeme taşıma hatları için dayanıklı ve özel ölçü üretim bantlı konveyör sistemleri sunuyoruz.", image: "/images/konveyor6.jpeg" },
    { slug: "zincirli-konveyorler", title: "Zincirli Konveyörler", shortDescription: "Ağır hizmet ve kontrollü transfer gerektiren hatlar için zincirli konveyör imalatı yapıyoruz.", image: "/images/zincirlikonveyor.jpg" },
    { slug: "vidali-helezonlar", title: "Vidalı Helezonlar", shortDescription: "Toz, granül ve kontrollü besleme gerektiren hatlar için vidalı helezon imalatı yapıyoruz.", image: "/images/helezon2.jpg" },
    { slug: "zincirli-elevatorler", title: "Zincirli Elevatörler", shortDescription: "Dikey taşıma ve ağır hizmet prosesleri için zincirli elevatör çözümleri üretiyoruz.", image: "/images/zincirlielevator.jpg" },
    { slug: "bantli-elevatorler", title: "Bantlı Elevatörler", shortDescription: "Granül ve kırılgan ürünler için kontrollü dikey taşıma sağlayan bantlı elevatör sistemleri sunuyoruz.", image: "/images/bantlielevator.jpg" },
  ],
};

const crusherSeed: CategorySeed = {
  slug: "kiricilar-ve-parcalayicilar",
  title: "Kırıcılar ve Parçalayıcılar",
  heroImage: "/images/kirici3.jpg",
  shortDescription:
    "Kompost, gübre, geri dönüşüm ve endüstriyel proses hatları için çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı imalatı yapıyoruz.",
  heroDescription:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Kompost, gübre, geri dönüşüm ve endüstriyel proses hatları için çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı imalatı yapıyoruz.",
  calculatorFamily: "crusher",
  ctaTitle: "Kırıcı ve parçalayıcı sistemler için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı ihtiyaçlarınız için giriş boyutu, hedef çıkış boyutu ve kapasite verilerinize göre doğru sistemi birlikte belirleyelim.",
  specs: [
    "Projeye özel rotor, şaft ve gövde yapısı",
    "Aşınma dayanımlı iç yüzey ve bıçak seçimi",
    "Giriş boyutu ve hedef çıkış boyutuna uygun kurgu",
    "Ağır hizmet tahrik ve servis yapısı",
    "Sensör ve otomasyon entegrasyonu",
    "Bakım ve temizlik erişimi",
  ],
  applications: [
    "Kompost ve organik atık ön işleme",
    "Gübre ve mineral kırma hatları",
    "Geri dönüşüm ve atık yönetimi tesisleri",
    "Endüstriyel boyut küçültme prosesleri",
  ],
  optionalEquipment: [
    "Aşınma plakası ve iç kaplama",
    "Ağır hizmet tahrik paketi",
    "Sensör ve otomasyon grubu",
    "Bakım kapağı ve platform",
    "Toz emiş bağlantısı",
    "ATEX veya özel saha opsiyonu",
  ],
  spareParts: [
    "Rotor ve şaft grupları",
    "Çekiç, zincir veya bıçak setleri",
    "Elek ve aşınma elemanları",
    "Motor-redüktör grubu",
    "Yatak ve rulmanlar",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    { slug: "cekicli-kiricilar", title: "Çekiçli Kırıcılar", shortDescription: "Gübre, kompost ve kırılgan mineral hatları için çekiçli kırıcı imalatı yapıyoruz." },
    { slug: "zincirli-kiricilar", title: "Zincirli Kırıcılar", shortDescription: "Topaklı ve yarı nemli ürünler için zincirli kırıcı imalatı yapıyoruz." },
    { slug: "shredder-sistemleri", title: "Shredder Sistemleri", shortDescription: "Karma atık ve hacimli malzemeler için shredder sistemleri üretiyoruz." },
    { slug: "bicakli-primer-kiricilar", title: "Bıçaklı Primer Kırıcılar", shortDescription: "İlk kademe boyut küçültme için bıçaklı primer kırıcı çözümleri sunuyoruz." },
    { slug: "bicakli-sekonder-kiricilar", title: "Bıçaklı Sekonder Kırıcılar", shortDescription: "Kontrollü çıkış boyutu için bıçaklı sekonder kırıcı imalatı yapıyoruz." },
  ],
};

const reactorSeed: CategorySeed = {
  slug: "reaktorler-ve-tanklar",
  title: "Reaktörler ve Tanklar",
  heroImage: "/images/tank1.jpg",
  shortDescription:
    "Sıvı gübre, kimyasal proses ve endüstriyel üretim hatları için soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı imalatı yapıyoruz.",
  heroDescription:
    "Soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Sıvı gübre, kimyasal proses ve endüstriyel üretim hatları için soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı imalatı yapıyoruz.",
  calculatorFamily: "reactor",
  ctaTitle: "Reaktörler ve tanklar için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı ihtiyaçlarınız için proses tipi, hacim ve ısı ihtiyacına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun hacim ve proses yapısı",
    "Karbon çelik, paslanmaz veya özel alaşımlı gövde",
    "Karıştırıcı, ceket veya serpantin opsiyonu",
    "Sıcaklık, basınç ve seviye izleme altyapısı",
    "Platform, merdiven ve servis erişimi",
    "CIP ve yardımcı bağlantı seçenekleri",
  ],
  applications: [
    "Sıvı gübre üretim hatları",
    "Kimyasal proses sistemleri",
    "Çözündürme ve reçete hazırlama",
    "Endüstriyel karışım ve stok tank sistemleri",
  ],
  optionalEquipment: [
    "Platform ve merdiven",
    "CIP hattı ve temizlik paketi",
    "Loadcell ve seviye izleme",
    "Isıtma / soğutma ceketi",
    "Otomasyon paneli",
    "Özel sensör ve enstrümantasyon",
  ],
  spareParts: [
    "Karıştırıcı paletleri",
    "Motor-redüktör grubu",
    "Vanalar ve enstrümanlar",
    "Conta ve sızdırmazlık setleri",
    "Yatak ve rulmanlar",
    "Servis kapak elemanları",
  ],
  products: [
    { slug: "sogutma-tanklari", title: "Soğutma Tankları", shortDescription: "Sıvı ürün ve proses akışları için özel ölçülerde soğutma tankı imalatı yapıyoruz." },
    { slug: "karistiricili-reaktorler", title: "Karıştırıcılı Reaktörler", shortDescription: "Kimyasal ve sıvı proses hatları için karıştırıcılı reaktör imalatı yapıyoruz." },
    { slug: "basincli-reaktorler", title: "Basınçlı Reaktörler", shortDescription: "Basınç altında çalışan prosesler için basınçlı reaktör imalatı yapıyoruz." },
    { slug: "cozundurme-tanklari", title: "Çözündürme Tankları", shortDescription: "Katı-sıvı hazırlama süreçleri için çözündürme tankı çözümleri sunuyoruz." },
    { slug: "stok-tanklari", title: "Stok Tankları", shortDescription: "Güvenli depolama ve proses dengesi için stok tankı imalatı yapıyoruz." },
  ],
};

const screeningSeed: CategorySeed = {
  slug: "eleme-ve-siniflandirma-sistemleri",
  title: "Eleme ve Sınıflandırma Sistemleri",
  heroImage: "/images/elek2.jpeg",
  shortDescription:
    "Granül gübre, kompost, mineral ve proses hatları için döner elek, vibrasyonlu elek, trommel elek, sınıflandırma eleği ve susuzlandırma eleği imalatı yapıyoruz.",
  heroDescription:
    "Döner elek, vibrasyonlu elek, trommel elek, sınıflandırma eleği ve susuzlandırma eleği çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Granül gübre, kompost, mineral ve proses hatları için döner elek, vibrasyonlu elek, trommel elek, sınıflandırma eleği ve susuzlandırma eleği imalatı yapıyoruz.",
  calculatorFamily: "screening",
  ctaTitle: "Eleme ve sınıflandırma sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Döner elek, vibrasyonlu elek, trommel elek, sınıflandırma eleği ve susuzlandırma eleği ihtiyaçlarınız için ürün davranışı, nem ve kapasite verilerine göre doğru sistemi birlikte seçelim.",
  specs: [
    "Projeye uygun elek yüzeyi ve kapasite",
    "Tek katlı veya çok katlı gövde yapısı",
    "Titreşimli veya döner çalışma seçeneği",
    "Aşınma dayanımlı gövde ve şase",
    "Bakım ve temizleme erişimi",
    "Hat entegrasyonuna uygun giriş ve çıkış kurgusu",
  ],
  applications: [
    "Granül gübre sınıflandırma",
    "Kompost ve organik atık eleme",
    "Mineral ve dökme katı ayırma",
    "Paketleme öncesi kalite kontrol hatları",
  ],
  optionalEquipment: [
    "Bakım platformu",
    "Toz emiş bağlantısı",
    "Temizleme sistemi",
    "Otomasyon ve sensör altyapısı",
    "Ağır hizmet şase",
    "Farklı elek yüzeyi seçenekleri",
  ],
  spareParts: [
    "Elek telleri ve panelleri",
    "Titreşim motorları",
    "Support ruloları",
    "Motor-redüktör grubu",
    "Yatak ve rulmanlar",
    "Bağlantı ve kapak parçaları",
  ],
  products: [
    { slug: "doner-elekler", title: "Döner Elekler", shortDescription: "Granül, kompost ve dökme katı ürünler için döner elek imalatı yapıyoruz." },
    { slug: "vibrasyonlu-elekler", title: "Vibrasyonlu Elekler", shortDescription: "Hassas ayırma ve yüksek verimli sınıflandırma için vibrasyonlu elek çözümleri üretiyoruz." },
    { slug: "trommel-elekler", title: "Trommel Elekler", shortDescription: "Organik atık ve kompost hatları için trommel elek imalatı yapıyoruz." },
    { slug: "siniflandirma-elekleri", title: "Sınıflandırma Elekleri", shortDescription: "Ürün kalite dağılımını kontrol etmek için sınıflandırma eleği çözümleri sunuyoruz." },
    { slug: "susuzlandirma-elekleri", title: "Susuzlandırma Elekleri", shortDescription: "Yüksek nemli ürünlerde su ayrımı için susuzlandırma eleği çözümleri geliştiriyoruz." },
  ],
};

const dustSeed: CategorySeed = {
  slug: "toz-toplama-sistemleri",
  title: "Toz Toplama Sistemleri",
  heroImage: "/images/toz8.png",
  shortDescription:
    "Toz toplama sistemi, pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre imalatı yapıyoruz.",
  heroDescription:
    "Pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Toz toplama sistemi, pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre imalatı yapıyoruz.",
  calculatorFamily: "dust",
  ctaTitle: "Toz toplama sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre ihtiyaçlarınız için debi, toz yükü ve çalışma koşullarına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun hava debisi ve filtre alanı",
    "Modüler veya kompakt gövde yapısı",
    "Toz bunker ve tahliye bağlantıları",
    "Fan ve kanal entegrasyonu",
    "Bakım ve servis erişimi",
    "Saha ve ATEX koşullarına uygun opsiyonlar",
  ],
  applications: [
    "Gübre ve mineral prosesleri",
    "Paketleme ve dolum hatları",
    "Kırıcı, elek ve transfer alanları",
    "Genel endüstriyel filtrasyon sistemleri",
  ],
  optionalEquipment: [
    "Rotary valf",
    "Patlama kapağı",
    "ATEX opsiyonu",
    "Basınç sensörü",
    "Platform ve servis erişimi",
    "Fan ve kanal entegrasyonu",
  ],
  spareParts: [
    "Filtre torbaları veya kartuşlar",
    "Kafes ve filtre taşıyıcıları",
    "Solenoid valfler",
    "Rotary valf parçaları",
    "Sensörler",
    "Conta ve kapak parçaları",
  ],
  products: [
    { slug: "pulse-jet-filtreler", title: "Pulse Jet Filtreler", shortDescription: "Endüstriyel toz toplama hatları için pulse jet filtre sistemleri üretiyoruz." },
    { slug: "siklon-ayiricilar", title: "Siklon Ayırıcılar", shortDescription: "Partikül ön ayırma ve toz yükü düşürme için siklon ayırıcı sistemleri sunuyoruz." },
    { slug: "torba-filtreler", title: "Torba Filtreler", shortDescription: "Endüstriyel emiş ve filtrasyon hatları için torba filtre çözümleri sunuyoruz." },
    { slug: "kartus-filtreler", title: "Kartuş Filtreler", shortDescription: "Kompakt alanlarda yüksek verimli filtrasyon için kartuş filtre sistemleri üretiyoruz." },
    { slug: "bin-vent-filtreler", title: "Bin Vent Filtreler", shortDescription: "Silo ve bunker havalandırması için bin vent filtre çözümleri sunuyoruz." },
  ],
};

const packagingSeed: CategorySeed = {
  slug: "paketleme-ve-dolum-sistemleri",
  title: "Paketleme ve Dolum Sistemleri",
  heroImage: "/images/dolum1.jpg",
  shortDescription:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümleri sunuyoruz.",
  heroDescription:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hattı çözümleri sunuyoruz.",
  calculatorFamily: "packaging",
  ctaTitle: "Paketleme ve dolum sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hatları için ürün tipi, ambalaj formatı ve kapasite verilerine uygun çözümü birlikte seçelim.",
  specs: [
    "Projeye uygun dolum kapasitesi",
    "Yarı otomatik veya tam otomatik yapı",
    "Tartım, dozaj ve taşıma entegrasyonu",
    "Operatör ve servis erişimine uygun tasarım",
    "Hat sonu otomasyon altyapısı",
    "Farklı ambalaj tiplerine uyum",
  ],
  applications: [
    "Granül gübre paketleme",
    "Toz ve mineral ürün dolumu",
    "Big bag ve torba sevkiyat hazırlığı",
    "Hat sonu lojistik ve paletleme sistemleri",
  ],
  optionalEquipment: [
    "Checkweigher",
    "Etiketleme sistemi",
    "Paletleme entegrasyonu",
    "Toz emiş hattı",
    "Metal dedektör",
    "Merkezi otomasyon paneli",
  ],
  spareParts: [
    "Loadcell setleri",
    "Pnömatik elemanlar",
    "Dozaj ekipmanları",
    "Konveyör parçaları",
    "Sensörler",
    "Kapama ve tutucu elemanlar",
  ],
  products: [
    { slug: "acik-agiz-torbalama", title: "Açık Ağız Torbalama", shortDescription: "Granül ve toz ürünler için açık ağız torbalama sistemleri üretiyoruz." },
    { slug: "valfli-torba-dolum", title: "Valfli Torba Dolum", shortDescription: "İnce toz ve hassas ürünler için valfli torba dolum sistemleri sunuyoruz." },
    { slug: "big-bag-dolum", title: "Big Bag Dolum", shortDescription: "Yüksek tonajlı torbalama ihtiyaçları için big bag dolum sistemleri üretiyoruz." },
    { slug: "ffs-torbalama", title: "FFS Torbalama", shortDescription: "Yüksek otomasyonlu torbalama hatları için FFS torbalama sistemleri sunuyoruz." },
    { slug: "paletleme-hatlari", title: "Paletleme Hatları", shortDescription: "Dolum sonrası sevkiyat hazırlığı için paletleme hattı çözümleri geliştiriyoruz." },
  ],
};

const storageSeed: CategorySeed = {
  slug: "depolama-ve-besleme-sistemleri",
  title: "Depolama ve Besleme Sistemleri",
  heroImage: "/images/bunker2.jpg",
  shortDescription:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape imalatı ile depolama ve besleme çözümleri sunuyoruz.",
  heroDescription:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape imalatı ile depolama ve besleme çözümleri sunuyoruz.",
  calculatorFamily: "storage",
  ctaTitle: "Depolama ve besleme sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Silo sistemleri, bunker ve hazneler, vidalı besleyiciler, rotary valfler ve sürgülü klapeler için akış karakteri, depolama hacmi ve besleme ihtiyacına uygun çözümü birlikte belirleyelim.",
  specs: [
    "Projeye uygun depolama hacmi ve besleme kapasitesi",
    "Ürün akış karakterine uygun gövde geometrisi",
    "Seviye, loadcell ve otomasyon altyapısı",
    "Bakım ve servis erişimine uygun tasarım",
    "Toz kontrollü ve sızdırmaz bağlantı seçenekleri",
    "Proses hattına uygun çıkış ve yönlendirme yapısı",
  ],
  applications: [
    "Granül gübre ve mineral depolama",
    "Bunker ve silo altı besleme sistemleri",
    "Dozaj ve kontrollü ürün akışı gereken hatlar",
    "Paketleme, kırma, eleme ve proses ön besleme noktaları",
  ],
  optionalEquipment: [
    "Loadcell ve seviye sensörü",
    "Bin vent filtre entegrasyonu",
    "Vibrasyon ve akış yardım ekipmanları",
    "Platform ve bakım erişimi",
    "Otomasyon paneli",
    "ATEX veya özel kaplama seçeneği",
  ],
  spareParts: [
    "Motor-redüktör grubu",
    "Rotary valf rotorları",
    "Vida yaprakları ve yataklar",
    "Conta ve sızdırmazlık setleri",
    "Sensör ve switch grupları",
    "Kapak ve bağlantı parçaları",
  ],
  products: [
    { slug: "silo-sistemleri", title: "Silo Sistemleri", shortDescription: "Dökme katı ürünler için güvenli ve proses uyumlu silo sistemleri üretiyoruz." },
    { slug: "bunker-ve-hazneler", title: "Bunker ve Hazneler", shortDescription: "Kontrollü ürün kabulü ve besleme için bunker ve hazne sistemleri üretiyoruz." },
    { slug: "vidali-besleyiciler", title: "Vidalı Besleyiciler", shortDescription: "Dozajlı ve kontrollü ürün besleme için vidalı besleyici sistemleri sunuyoruz." },
    { slug: "rotary-valfler", title: "Rotary Valfler", shortDescription: "Hava kilidi ve kontrollü ürün geçişi için rotary valf çözümleri üretiyoruz." },
    { slug: "surgulu-klapeler", title: "Sürgülü Klapeler", shortDescription: "Hat üzerindeki ürün akışını kontrollü yönetmek için sürgülü klape çözümleri sunuyoruz." },
  ],
};

export const machineCategoryPages: MachineCategoryPage[] = [
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    heroImage: "/images/kurutmatam2.jpg",
    shortDescription:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleri sunuyoruz.",
    heroDescription:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümlerini tek kategoride sunuyoruz.",
    seoNote:
      "Endüstriyel tambur imalatı için granülatör, kurutma, soğutma, kaplama ve kompost tamburu çözümleri sunuyoruz.",
    calculatorFamily: "drum",
    ctaTitle: "Tambur sistemleri için doğru makina çözümünü birlikte netleştirelim",
    ctaText:
      "Granülatör tamburu, kurutma tamburu, soğutma tamburu, kaplama tamburu ve kompost tamburu için kapasite, proses ve saha verilerinize uygun teknik çözümü birlikte belirleyelim.",
    products: drumProductPages.map((product) => ({ ...product })),
  },
  expandCategory(transportSeed),
  expandCategory(crusherSeed),
  expandCategory(reactorSeed),
  expandCategory(screeningSeed),
  expandCategory(dustSeed),
  expandCategory(packagingSeed),
  expandCategory(storageSeed),
];

export const machineCategoryMap = Object.fromEntries(
  machineCategoryPages.map((category) => [category.slug, category]),
) as Record<string, MachineCategoryPage>;
