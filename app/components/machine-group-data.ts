import { drumProductPages } from "./drum-product-data";

export type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage"
  | "auxiliary"
  | "dosage";

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
  cardImage?: string;
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
  heroDescription?: string;
  ctaTitle?: string;
  ctaText?: string;
  overviewParagraphs?: string[];
  highlightText?: string;
  specs?: string[];
  applications?: string[];
  optionalEquipment?: string[];
  spareParts?: string[];
};

type CategorySeed = {
  slug: string;
  title: string;
  heroImage: string;
  cardImage?: string;
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
      heroDescription: product.heroDescription ?? product.shortDescription,
      ctaTitle: product.ctaTitle ?? `${product.title} için doğru makina çözümünü birlikte netleştirelim`,
      ctaText:
        product.ctaText ??
        `${product.title} için kapasite, ürün yapısı, proses akışı ve saha verilerinize uygun teknik çözüm oluşturabiliriz. ${product.shortDescription}`,
      overviewParagraphs: product.overviewParagraphs ?? [
        `${product.title}, ${seed.title.toLowerCase()} içinde yer alan ve proses hattının kapasite, ürün davranışı ve çalışma koşullarına göre özel ölçülerde tasarlanan endüstriyel makina çözümlerinden biridir.`,
        `${product.title} çözümlerinde hat entegrasyonu, bakım erişimi, uzun ömürlü mekanik yapı ve saha koşullarına uyum birlikte değerlendirilir. Projeye özel makina imalatı yaklaşımıyla ölçü, malzeme ve ekipman seçimi ürüne göre şekillendirilir.`,
      ],
      highlightText:
        product.highlightText ??
        `${product.title} seçiminde yalnızca kapasite değil; ürün karakteri, çalışma rejimi, saha şartları ve bakım ihtiyacı da belirleyicidir. Doğru makina kurgusu, proses verimi ve işletme sürekliliği için kritik rol oynar.`,
      specs: product.specs ?? seed.specs,
      applications: product.applications ?? seed.applications,
      optionalEquipment: product.optionalEquipment ?? seed.optionalEquipment,
      spareParts: product.spareParts ?? seed.spareParts,
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
    { slug: "tripper-arabali-konveyor", title: "Tripper Arabalı Konveyör", shortDescription: "Hat boyunca farklı noktalara kontrollü ürün boşaltımı için tripper arabalı konveyör çözümleri sunuyoruz.", image: "/images/tripper1.jpg" },
    { slug: "vidali-helezonlar", title: "Vidalı Helezonlar", shortDescription: "Toz, granül ve kontrollü besleme gerektiren hatlar için vidalı helezon imalatı yapıyoruz.", image: "/images/helezon2.jpg" },
    { slug: "zincirli-elevatorler", title: "Zincirli Elevatörler", shortDescription: "Dikey taşıma ve ağır hizmet prosesleri için zincirli elevatör çözümleri üretiyoruz.", image: "/images/zincirlielevator.jpg" },
    { slug: "bantli-elevatorler", title: "Bantlı Elevatörler", shortDescription: "Granül ve kırılgan ürünler için kontrollü dikey taşıma sağlayan bantlı elevatör sistemleri sunuyoruz.", image: "/images/bantlielevator.jpg" },
  ],
};

const crusherSeed: CategorySeed = {
  slug: "kırıcılar-ve-parcalayicilar",
  title: "Kırıcılar ve Parçalayıcılar",
  heroImage: "/images/kırıcı3.jpg",
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
    { slug: "cekicli-kırıcılar", title: "Çekiçli Kırıcılar", shortDescription: "Gübre, kompost ve kırılgan mineral hatları için çekiçli kırıcı imalatı yapıyoruz." },
    { slug: "ceneli-kırıcılar", title: "Çeneli Kırıcılar", shortDescription: "Sert ve iri boyutlu malzemelerin ilk kademe kırılması için çeneli kırıcı çözümleri sunuyoruz.", image: "/images/ceneli1.png" },
    { slug: "dik-milli-kırıcılar", title: "Dik Milli Kırıcılar", shortDescription: "Agrega, mineral ve benzeri malzemelerde kontrollü boyut küçültme için dik milli kırıcı çözümleri sunuyoruz.", image: "/images/pim1.png" },
    { slug: "zincirli-kırıcılar", title: "Zincirli Kırıcılar", shortDescription: "Topaklı ve yarı nemli ürünler için zincirli kırıcı imalatı yapıyoruz.", image: "/images/zincirli1.jpg" },
    { slug: "shredder-sistemleri", title: "Shredder Sistemleri", shortDescription: "Karma atık ve hacimli malzemeler için shredder sistemleri üretiyoruz.", image: "/images/shredder6.jpg" },
    { slug: "bicakli-primer-kırıcılar", title: "Bıçaklı Primer Kırıcılar", shortDescription: "İlk kademe boyut küçültme için bıçaklı primer kırıcı çözümleri sunuyoruz.", image: "/images/primer1.png" },
    { slug: "bicakli-sekonder-kırıcılar", title: "Bıçaklı Sekonder Kırıcılar", shortDescription: "Kontrollü çıkış boyutu için bıçaklı sekonder kırıcı imalatı yapıyoruz.", image: "/images/primer2.png" },
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
    { slug: "sogutma-tanklari", title: "Soğutma Tankları", shortDescription: "Sıvı ürün ve proses akışları için özel ölçülerde soğutma tankı imalatı yapıyoruz.", image: "/images/tank8.png" },
    { slug: "karistiricili-reaktorler", title: "Karıştırıcılı Reaktörler", shortDescription: "Kimyasal ve sıvı proses hatları için karıştırıcılı reaktör imalatı yapıyoruz.", image: "/images/reaktor1.avif" },
    { slug: "basincli-reaktorler", title: "Basınçlı Reaktörler", shortDescription: "Basınç altında çalışan prosesler için basınçlı reaktör imalatı yapıyoruz.", image: "/images/tank5.webp" },
    { slug: "cozundurme-tanklari", title: "Çözündürme Tankları", shortDescription: "Katı-sıvı hazırlama süreçleri için çözündürme tankı çözümleri sunuyoruz.", image: "/images/cozundurme1.png" },
    { slug: "stok-tanklari", title: "Stok Tankları", shortDescription: "Güvenli depolama ve proses dengesi için stok tankı imalatı yapıyoruz.", image: "/images/tank6.jpg" },
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
    { slug: "vibrasyonlu-elekler", title: "Vibrasyonlu Elekler", shortDescription: "Hassas ayırma ve yüksek verimli sınıflandırma için vibrasyonlu elek çözümleri üretiyoruz.", image: "/images/elek1.png" },
    { slug: "trommel-elekler", title: "Trommel Elekler", shortDescription: "Organik atık ve kompost hatları için trommel elek imalatı yapıyoruz.", image: "/images/trommel2.jpg" },
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
    { slug: "pulse-jet-filtreler", title: "Jet Pulse Filtreler", shortDescription: "Endüstriyel toz toplama hatları için jet pulse filtre sistemleri üretiyoruz.", image: "/images/jetpulse3.jpg" },
    { slug: "siklon-ayiricilar", title: "Siklon Ayırıcılar", shortDescription: "Partikül ön ayırma ve toz yükü düşürme için siklon ayırıcı sistemleri sunuyoruz.", image: "/images/toz10.jpg" },
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
    { slug: "acik-agiz-torbalama", title: "Açık Ağız Torbalama", shortDescription: "Granül ve toz ürünler için açık ağız torbalama sistemleri üretiyoruz.", image: "/images/paket4.jpg" },
    { slug: "big-bag-dolum", title: "Big Bag Dolum", shortDescription: "Yüksek tonajlı torbalama ihtiyaçları için big bag dolum sistemleri üretiyoruz.", image: "/images/dolum15.jpg" },
    { slug: "paletleme-hatlari", title: "Paletleme Hatları", shortDescription: "Dolum sonrası sevkiyat hazırlığı için paletleme hattı çözümleri geliştiriyoruz.", image: "/images/paket1.jpg" },
    { slug: "sivi-dolum-siseleme", title: "Sıvı Dolum Şişeleme", shortDescription: "Sıvı ürünlerin hassas dozajla doldurulması ve şişeleme hatlarında kontrollü akış için sıvı dolum şişeleme çözümleri sunuyoruz.", image: "/images/dolum2.jpg" },
    { slug: "sise-etiketleme-makinasi", title: "Şişe Etiketleme Makinası", shortDescription: "Şişe ve benzeri ambalajlarda düzgün, hızlı ve standart etiket uygulaması için şişe etiketleme makinası çözümleri sunuyoruz.", image: "/images/etiket1.jpg" },
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
    { slug: "silo-sistemleri", title: "Silo Sistemleri", shortDescription: "Dökme katı ürünler için güvenli ve proses uyumlu silo sistemleri üretiyoruz.", image: "/images/silo1.png" },
    { slug: "bunker-ve-hazneler", title: "Bunker ve Hazneler", shortDescription: "Kontrollü ürün kabulü ve besleme için bunker ve hazne sistemleri üretiyoruz." },
    { slug: "teremi-bunkeri", title: "Teremi Bunkeri", shortDescription: "Dökme katı ürünlerin kontrollü alınması, tamponlanması ve prosese düzenli beslenmesi için teremi bunkeri çözümleri sunuyoruz.", image: "/images/teremi6.png" },
  ],
};

const auxiliaryFlowSeed: CategorySeed = {
  slug: "yardimci-ekipmanlar-ve-akis-sistemleri",
  title: "Yardımcı Ekipmanlar ve Akış Sistemleri",
  heroImage: "/images/teremi6.png",
  cardImage: "/images/surgu1.webp",
  shortDescription:
    "Silobas yükleme, ürün yönlendirme, akış kontrolü ve kontrollü boşaltma ihtiyaçları için yardımcı ekipman ve akış sistemi çözümleri sunuyoruz.",
  heroDescription:
    "Silobas yükleme körüğü, distribütör, klapeler, sürgülü kapaklar, hava kilidi ve blower çözümlerini tek kategori altında sunuyoruz.",
  seoNote:
    "Silobas yükleme, ürün yönlendirme, akış kontrolü ve kontrollü boşaltma ihtiyaçları için yardımcı ekipman ve akış sistemi çözümleri sunuyoruz.",
  calculatorFamily: "auxiliary",
  ctaTitle: "Yardımcı ekipmanlar ve akış sistemleri için doğru makina çözümünü birlikte netleştirelim",
  ctaText:
    "Silobas yükleme körüğü, distribütör, klapeler, sürgülü kapaklar, hava kilidi ve blower ihtiyaçlarınız için saha yapısı, ürün tipi ve proses hattına uygun yardımcı ekipman çözümünü birlikte belirleyelim.",
  specs: [
    "Projeye ve hat kapasitesine uygun gövde ölçülendirmesi",
    "Karbon çelik, galvaniz ve paslanmaz gövde alternatifleri",
    "Manuel, pnömatik veya motorlu kontrol seçenekleri",
    "Tozsuz ve kontrollü akış için sızdırmaz yapı detayları",
    "Silo, bunker, konveyör ve pnömatik hatlarla entegrasyon",
    "Bakım ve servis erişimine uygun kompakt tasarım",
  ],
  applications: [
    "Gübre ve mineral proses hatları",
    "Yem, tahıl ve toz ürün taşıma sistemleri",
    "Silobas ve kamyon yükleme istasyonları",
    "Silo, bunker ve hat yönlendirme ekipmanları",
  ],
  optionalEquipment: [
    "Pnömatik aktüatör ve sensör paketi",
    "Seviye, konum ve limit switch grupları",
    "Platform ve bakım erişim ekipmanları",
    "Toz toplama ve filtre entegrasyonu",
    "RAL boyalı veya paslanmaz kaplama seçenekleri",
    "Merkezi otomasyon paneli uyumu",
  ],
  spareParts: [
    "Aktüatör ve piston grupları",
    "Conta ve sızdırmazlık setleri",
    "Ağız yapıları ve esnek körük elemanları",
    "Yatak, menteşe ve kızak parçaları",
    "Sensörler ve konum anahtarları",
    "Kapak, klape ve yönlendirme parçaları",
  ],
  products: [
    {
      slug: "yukleme-korugu",
      title: "Silobas Yükleme Körüğü",
      shortDescription:
        "Toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılması için silobas yükleme körüğü çözümleri sunuyoruz.",
      image: "/images/koruk1.jpg",
      heroDescription:
        "Silobas yükleme körüğü, toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılmasını sağlayan sistemdir. Otomatik sensör mekanizması sayesinde dolum sürecini kontrol eder, çevresel toz emisyonunu en aza indirir.",
      overviewParagraphs: [
        "Silobas yükleme körüğü, toz ve granül malzemelerin silobas, kamyon, vagon veya gemilere tozsuz ve güvenli şekilde aktarılmasını sağlayan sistemdir. Otomatik sensör mekanizması sayesinde dolum sürecini kontrol eder, çevresel toz emisyonunu en aza indirir.",
        "Farklı araç yükseklikleri, ürün akış karakterleri ve dolum senaryoları için ayarlanabilir, sensör destekli ve saha koşullarına uyumlu silobas yükleme körüğü çözümleri sunuyoruz.",
      ],
      applications: ["Gıda", "Çimento", "Kimya", "Tarım", "Maden", "Plastik sanayi"],
      highlightText:
        "Tozsuz dolum, çevresel emisyon kontrolü ve farklı araç tiplerine hızlı uyum; silobas yükleme körüğü seçiminde temel belirleyicilerdir.",
      specs: [
        "Otomatik sensör kontrollü çalışma",
        "Ayarlanabilir körük uzunluğu",
        "Silo, bunker, helezon ve pnömatik sistemlerle uyum",
        "Poliüretan kaplamalı dayanımlı ağız yapısı",
        "Otomatik geri sarma ve konumlandırma sistemi",
        "Aşırı yükleme ve malzeme kaybına karşı sensörlü güvenlik yapısı",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde seçenekleri",
      ],
      optionalEquipment: [
        "Vakum destekli toz toplama paketi",
        "Araç algılama ve dolum sensörleri",
        "Uzaktan kumanda veya lokal kontrol paneli",
        "Esnek ağız ve özel adaptör çözümleri",
      ],
      spareParts: [
        "Körük gövdesi ve esnek kılıf setleri",
        "Sensör ve switch grupları",
        "Kablo sarıcı ve motor grupları",
        "Conta ve bağlantı elemanları",
      ],
    },
    {
      slug: "distributor",
      title: "Distribütör",
      shortDescription:
        "Granül, toz ve pelet formundaki malzemelerin farklı proses hatlarına kontrollü yönlendirilmesi için distribütör sistemleri sunuyoruz.",
      image: "/images/dist1.jpg",
      heroDescription:
        "Distribütör sistemleri, üretim tesislerinde granül, toz veya pelet formundaki malzemelerin farklı proses hatlarına yönlendirilmesini sağlar. Tek veya çoklu giriş-çıkış yapısıyla silo, bunker, taşıma hattı ve torbalama sistemleri arasında yönlendirme işlevi görerek lojistik esnekliği artırır.",
      overviewParagraphs: [
        "Distribütör sistemleri, üretim tesislerinde granül, toz veya pelet formundaki malzemelerin farklı proses hatlarına yönlendirilmesini sağlar. Tek veya çoklu giriş-çıkış yapısıyla silo, bunker, taşıma hattı ve torbalama sistemleri arasında yönlendirme işlevi görerek lojistik esnekliği artırır.",
        "Hatlar arası kontrollü yönlendirme, düşük ürün kaybı ve proses esnekliği sağlamak için projeye özel distribütör çözümleri tasarlıyoruz.",
      ],
      applications: ["Gıda", "Yem", "Kimya", "Gübre", "Tahıl", "Tarım", "Maden işleme tesisleri"],
      highlightText:
        "Doğru distribütör kurgusu, farklı hatlar arasında güvenli ürün yönlendirme ve operasyonel esneklik sağlar.",
      specs: [
        "Tek girişli veya çok girişli model seçenekleri",
        "Manuel, pnömatik veya elektrik motorlu kontrol opsiyonları",
        "Kolay montaj ve entegrasyon",
        "Aşınmaya dayanıklı gövde ve iç yüzeyler",
        "Paslanmaz çelik, galvaniz ve RAL boyalı karbon çelik alternatifleri",
      ],
      optionalEquipment: [
        "Pozisyon sensörleri",
        "Pnömatik aktüatör setleri",
        "Aşınma plakaları",
        "Toz sızdırmaz conta paketleri",
      ],
      spareParts: [
        "Yönlendirme kapakları",
        "Aktüatör ve sensör grupları",
        "Conta setleri",
        "Rulman ve yatak parçaları",
      ],
    },
    {
      slug: "klapeler",
      title: "Klapeler",
      shortDescription:
        "Dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak ve kontrol altında tutmak için klape çözümleri sunuyoruz.",
      image: "/images/klape1.jpg",
      heroDescription:
        "Klapeler, dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak veya kontrol altında tutmak için kullanılan yüksek performanslı kontrol ekipmanlarıdır. Özellikle silo, bunker, helezon ve konveyör sistemlerinde ürün geçişini yöneterek üretim hattının güvenli ve verimli çalışmasını sağlar.",
      overviewParagraphs: [
        "Klapeler, dökme malzeme taşıma sistemlerinde ürün akışını yönlendirmek, durdurmak veya kontrol altında tutmak için kullanılan yüksek performanslı kontrol ekipmanlarıdır. Özellikle silo, bunker, helezon ve konveyör sistemlerinde ürün geçişini yöneterek üretim hattının güvenli ve verimli çalışmasını sağlar.",
        "Farklı kapasite, ürün tipi ve saha şartlarına uyum sağlayan manuel ya da otomatik kontrollü klape çözümleriyle proses güvenliğini destekliyoruz.",
      ],
      applications: ["Un", "Yem", "Kimya", "Tarım", "Çimento", "Gübre", "Maden endüstrisi"],
      highlightText:
        "Sızdırmaz ve dayanımlı klape yapısı, ürün akış kontrolü ile birlikte çevresel toz oluşumunu ve ürün kaybını da azaltır.",
      specs: [
        "Manuel, elektrik motorlu veya pnömatik pistonlu kontrol seçenekleri",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde alternatifleri",
        "Kompakt ve sağlam yapı",
        "Prosese uygun özel ebatlandırma",
        "Ağır hizmet tipi kullanıma uygun tasarım",
      ],
      optionalEquipment: [
        "Pozisyon göstergesi",
        "Pnömatik piston grubu",
        "Aşınma plakası",
        "Sızdırmaz conta paketi",
      ],
      spareParts: [
        "Conta ve salmastra setleri",
        "Aktüatör grupları",
        "Mil ve yatak parçaları",
        "Kol ve bağlantı elemanları",
      ],
    },
    {
      slug: "surgulu-kapaklar",
      title: "Sürgülü Kapaklar",
      shortDescription:
        "Silo, bunker, helezon ve konveyör çıkışlarında ürün akışını güvenli ve kontrollü yönetmek için sürgülü kapak çözümleri sunuyoruz.",
      image: "/images/surgu1.webp",
      heroDescription:
        "Sürgülü kapaklar, dökme malzeme taşıma ve depolama sistemlerinde ürün akışını durdurmak, başlatmak veya yönlendirmek için kullanılan etkili kontrol ekipmanlarıdır. Silo, bunker, helezon ve konveyör çıkışlarında kullanılarak üretim sürecinin güvenli ve kontrollü ilerlemesini sağlar.",
      overviewParagraphs: [
        "Sürgülü kapaklar, dökme malzeme taşıma ve depolama sistemlerinde ürün akışını durdurmak, başlatmak veya yönlendirmek için kullanılan etkili kontrol ekipmanlarıdır. Silo, bunker, helezon ve konveyör çıkışlarında kullanılarak üretim sürecinin güvenli ve kontrollü ilerlemesini sağlar.",
        "Hat geometrisi, ürün karakteri ve istenen kontrol hassasiyetine göre manuel ya da otomatik sürgülü kapak çözümleri geliştiriyoruz.",
      ],
      applications: ["Yem", "Un", "Kimya", "Madencilik", "Çimento", "Tarım", "Gübre endüstrisi"],
      highlightText:
        "Doğru sürgülü kapak seçimi; ürün akışının hassas yönetimi, güvenli çalışma ve düşük kaçak oranı için kritik önem taşır.",
      specs: [
        "Manuel kol, elektrik motoru veya pnömatik piston kontrol opsiyonları",
        "Paslanmaz çelik, galvaniz ve RAL boyalı çelik gövde alternatifleri",
        "Takviyeli konstrüksiyon",
        "Proses hattına özel ebat seçenekleri",
        "Silo, bunker, helezon ve konveyör çıkışlarıyla uyum",
      ],
      optionalEquipment: [
        "Sensörlü açık-kapalı izleme",
        "Pnömatik veya motorlu tahrik",
        "Aşınma plakalı kızak sistemi",
        "Toz sızdırmaz conta paketi",
      ],
      spareParts: [
        "Kızak ve sürgü parçaları",
        "Conta setleri",
        "Aktüatör veya motor grupları",
        "Bağlantı ve kilitleme elemanları",
      ],
    },
    {
      slug: "hava-kilidi",
      title: "Hava Kilidi",
      shortDescription:
        "Toz ve granül ürünlerin kontrollü geçişi, hava sızdırmazlığı ve hatlar arası dengeli ürün aktarımı için hava kilidi çözümleri sunuyoruz.",
      image: "/images/hava2.png",
      heroDescription:
        "Hava kilidi sistemleri, toz ve granül malzemelerin kontrollü geçişini sağlarken hat içi basınç dengesini koruyan, ürün akışını güvenli ve kararlı şekilde yöneten yardımcı ekipmanlardır. Özellikle pnömatik taşıma, filtre altı boşaltma, silo çıkışları ve dozajlama hatlarında yaygın olarak kullanılır.",
      overviewParagraphs: [
        "Hava kilidi sistemleri, toz ve granül malzemelerin kontrollü geçişini sağlarken hat içi basınç dengesini koruyan, ürün akışını güvenli ve kararlı şekilde yöneten yardımcı ekipmanlardır. Özellikle pnömatik taşıma, filtre altı boşaltma, silo çıkışları ve dozajlama hatlarında yaygın olarak kullanılır.",
        "Farklı kapasite, ürün tipi ve saha şartlarına uygun rotor ve gövde seçenekleriyle, hava kaçaklarını azaltan ve akış kararlılığını artıran hava kilidi çözümleri sunuyoruz.",
      ],
      applications: [
        "Pnömatik taşıma sistemleri",
        "Filtre altı boşaltma hatları",
        "Silo ve bunker çıkışları",
        "Dozajlama ve besleme sistemleri",
        "Gıda, yem, kimya, çimento ve gübre tesisleri",
      ],
      highlightText:
        "Hava kilidi sistemlerinde doğru rotor yapısı, sızdırmazlık seviyesi ve hat uyumu; dengeli ürün geçişi ile basınç kontrolü için kritik önem taşır.",
      specs: [
        "Farklı kapasiteye uygun rotor ve gövde seçenekleri",
        "Toz ve granül ürünlere uygun sızdırmaz tasarım",
        "Manuel veya motorlu tahrik alternatifleri",
        "Paslanmaz çelik, galvaniz ve RAL boyalı gövde seçenekleri",
        "Proses hattına uygun flanş ve bağlantı ölçüleri",
        "Ağır hizmet tipi kullanıma uygun konstrüksiyon",
      ],
      optionalEquipment: [
        "Motorlu tahrik paketi",
        "Aşınma dayanımlı rotor seçeneği",
        "Sızdırmaz conta ve keçe paketi",
        "Sensör ve otomasyon entegrasyonu",
      ],
      spareParts: [
        "Rotor ve mil grupları",
        "Conta, keçe ve sızdırmazlık setleri",
        "Yatak ve rulmanlar",
        "Motor-redüktör grubu",
      ],
    },
    {
      slug: "blower",
      title: "Blower",
      shortDescription:
        "Pnömatik taşıma ve hava destekli ürün transfer hatları için yüksek verimli blower sistemleri sunuyoruz.",
      image: "/images/blower1.jpg",
      heroDescription:
        "Blower sistemleri, pnömatik taşıma ve hava destekli ürün transfer uygulamalarında gerekli hava debisini ve basıncı sağlayan yardımcı ekipmanlardır. Toz ve granül malzemelerin hat boyunca verimli şekilde taşınmasına destek olur ve proses sürekliliğini artırır.",
      overviewParagraphs: [
        "Blower sistemleri, pnömatik taşıma ve hava destekli ürün transfer uygulamalarında gerekli hava debisini ve basıncı sağlayan yardımcı ekipmanlardır. Toz ve granül malzemelerin hat boyunca verimli şekilde taşınmasına destek olur ve proses sürekliliğini artırır.",
        "Farklı debi, basınç ve proses koşullarına uygun blower çözümleriyle pnömatik taşıma hatlarında kararlı hava beslemesi ve verimli ürün transferi sağlıyoruz.",
      ],
      applications: [
        "Pnömatik taşıma hatları",
        "Silobas yükleme ve boşaltma sistemleri",
        "Filtre ve hava transfer uygulamaları",
        "Çimento, yem, kimya, gübre ve maden tesisleri",
        "Toz ve granül transferi yapılan endüstriyel prosesler",
      ],
      highlightText:
        "Doğru blower seçimi, pnömatik taşıma performansı, enerji verimliliği ve proses sürekliliği üzerinde doğrudan etki yaratır.",
      specs: [
        "Farklı debi ve basınç değerlerine uygun model seçenekleri",
        "Elektrik motorlu kompakt tahrik yapısı",
        "Sessiz ve verimli çalışmaya uygun gövde tasarımı",
        "Hat ve proses ihtiyacına göre özel konfigürasyon",
        "Dayanımlı gövde ve bağlantı yapısı",
        "Otomasyon ve kontrol sistemlerine entegre çalışabilir",
      ],
      optionalEquipment: [
        "Süstürucu ve titreşim sönümleme paketi",
        "Basınç ve sıcaklık izleme sensörleri",
        "Otomasyon paneli entegrasyonu",
        "Özel bağlantı ve emiş hattı adaptörleri",
      ],
      spareParts: [
        "Filtre ve süstürucu elemanları",
        "Motor ve fan grupları",
        "Conta ve bağlantı takımları",
        "Sensör ve kontrol elemanları",
      ],
    },
  ],
};

const dosageSeed: CategorySeed = {
  slug: "dozajlama-sistemleri",
  title: "Dozajlama Sistemleri",
  heroImage: "/images/bant1.webp",
  cardImage: "/images/mikro2.png",
  shortDescription:
    "Hassas tartım, kontrollü besleme ve reçeteye uygun hammadde yönetimi için dozajlama sistemleri çözümleri sunuyoruz.",
  heroDescription:
    "PRO MAKİNA, mikro ve makro dozajlama üniteleri ile farklı sektörlere özel çözümler sunar. Dozajlama sistemleri, hassas tartım teknolojisi ve yüksek verimlilikle üretim süreçlerini optimize eder.",
  seoNote:
    "Dozajlama işlemi, ham madde alım sürecinden sonra ürünün işleme alındığı ilk adımdır. PRO MAKİNA, endüstrinin gereksinimlerine odaklanarak optimum yatırım ve işletme maliyetleriyle yüksek verimlilik ve kalite sunan çevre dostu dozajlama çözümleri geliştirir.",
  calculatorFamily: "dosage",
  ctaTitle: "Dozajlama sistemleri için doğru çözümü birlikte netleştirelim",
  ctaText:
    "Mikro dozajlama, makro dozajlama ve dozaj bant kantarı uygulamaları için kapasite, reçete yapısı, hammadde özellikleri ve proses ihtiyaçlarınıza uygun teknik çözümü birlikte belirleyelim.",
  specs: [
    "Yüksek hassasiyetli loadcell destekli tartım altyapısı",
    "Mikro, makro ve sürekli akış dozaj senaryolarına uygun kurgu",
    "Toz geçirmez esnek bağlantılar ve hijyenik yapı detayları",
    "Otomasyon, PLC ve reçete yönetim sistemi entegrasyonu",
    "Farklı bunker, helezon ve bant besleme alternatifleri",
    "Prosese uygun kapasite ve dozaj doğruluğu seçenekleri",
  ],
  applications: [
    "Yem üretim tesisleri",
    "Gübre üretim hatları",
    "Kimya ve katkı hammaddesi prosesleri",
    "Gıda, premiks ve katkı dozajlama sistemleri",
    "Madencilik ve mineral işleme tesisleri",
  ],
  optionalEquipment: [
    "Frekans invertörlü hızlı-yavaş dozaj kontrolü",
    "Esnek bağlantılı tartım kantarı",
    "Toz emiş ve filtre entegrasyonu",
    "Operatör paneli ve reçete yönetim modülü",
    "Titreşimli boşaltma ve akış yardımcı ekipmanları",
    "Paslanmaz, galvaniz veya RAL boyalı bunker seçenekleri",
  ],
  spareParts: [
    "Loadcell ve tartım modülleri",
    "Helezon ve bant tahrik parçaları",
    "Sensör, inverter ve otomasyon ekipmanları",
    "Esnek bağlantı ve conta setleri",
    "Motor-redüktör grupları",
    "Bunker çıkış ve yönlendirme parçaları",
  ],
  products: [
    {
      slug: "mikro-dozajlama",
      title: "Mikro Dozajlama",
      shortDescription:
        "Premiks, vitamin, mineral ve katkı maddelerinin düşük miktarlarda yüksek hassasiyetle tartılması ve prosese kontrollü aktarılması için mikro dozajlama sistemleri sunuyoruz.",
      image: "/images/mikro2.png",
      heroDescription:
        "Mikro dozajlama, premiks, vitamin, mineral ve diğer katkı maddelerinin düşük miktarlarda ve farklı oranlarda yüksek hassasiyetle dozajlanmasını sağlayan bir sistemdir. Dozajlama helezonları aracılığıyla ürünler dozaj kantarına yönlendirilir. Genellikle merkezi otomasyonla senkronize çalışan bu sistem, modern yem, gübre, kimya ve gıda üretim hatlarının kritik bir parçasıdır.",
      overviewParagraphs: [
        "Mikro dozajlama, premiks, vitamin, mineral ve diğer katkı maddelerinin düşük miktarlarda ve farklı oranlarda yüksek hassasiyetle dozajlanmasını sağlayan bir sistemdir. Dozajlama helezonları aracılığıyla ürünler dozaj kantarına yönlendirilir. Genellikle merkezi otomasyonla senkronize çalışan bu sistem, modern yem, gübre, kimya ve gıda üretim hatlarının kritik bir parçasıdır.",
        "Mikro dozajlama sistemi, reçeteye bağlı olarak farklı malzemelerin sırayla tartılmasını ve yüksek doğrulukla prosese aktarılmasını mümkün kılar. Hem manuel hem de otomatik kontrol sistemlerine entegre edilebilen yapıdadır. Ağırlık esaslı çalıştığı için maksimum karışım kalitesi sağlar.",
      ],
      applications: [
        "Yem fabrikalarında premiks ve katkı dozajı",
        "Gübre üretiminde mikro element dozajı",
        "Kimya sektöründe katalizör ve pigment ekleme",
        "Gıda üretiminde baharat, aroma ve enzim dozajı",
      ],
      highlightText:
        "Mikro dozajlama sistemlerinde gram hassasiyetinde tartım, reçete doğruluğu ve otomasyon uyumu; karışım kalitesini doğrudan etkiler.",
      specs: [
        "Frekans invertörlü hızlı-yavaş dozaj ayarı",
        "Esnek bağlantılı kantar yapısı",
        "Paslanmaz çelik, galvaniz ve RAL boyalı bunker seçenekleri",
        "Otomasyon sistemine tam entegre çalışma",
        "Reçeteye dayalı otomatik malzeme sıralama",
      ],
      optionalEquipment: [
        "Toz emme bağlantısı",
        "Merkezi reçete yönetim paneli",
        "Paslanmaz bunker grupları",
        "Titreşimli akış yardımcıları",
      ],
      spareParts: [
        "Loadcell modülleri",
        "Mikro helezon takımları",
        "Motor-redüktör grubu",
        "Esnek bağlantı ve conta setleri",
      ],
    },
    {
      slug: "makro-dozajlama",
      title: "Makro Dozajlama",
      shortDescription:
        "Mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin reçeteye uygun şekilde hassas tartımı ve kontrollü beslenmesi için makro dozajlama sistemleri sunuyoruz.",
      image: "/images/makro1.png",
      heroDescription:
        "Makro dozajlama sistemleri, mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin üretim formülasyonlarına doğru oranlarda eklenmesini sağlar. Bu hammaddeler genellikle ana bileşenlerden daha düşük miktarda kullanılsa da doğru dozajlama ürün kalitesi açısından kritik öneme sahiptir.",
      overviewParagraphs: [
        "Makro dozajlama sistemleri, mineral, tuz, DCP, mermer tozu ve benzeri hammaddelerin üretim formülasyonlarına doğru oranlarda eklenmesini sağlar. Bu hammaddeler genellikle ana bileşenlerden daha düşük miktarda kullanılsa da doğru dozajlama ürün kalitesi açısından kritik öneme sahiptir.",
        "PRO MAKİNA tarafından geliştirilen makro dozajlama sistemleri, üretim hatlarına entegre edilen yüksek hassasiyetli tartım kantarları, otomatik kontrol sistemleri ve toz geçirmez bağlantı elemanları sayesinde hem üretim kalitesini yükseltir hem de hammadde israfını önler.",
      ],
      applications: [
        "Yem üretim tesislerinde mineral katkılar",
        "Gübre üretiminde dolgu ve mineral katkıları",
        "Kimya sektöründe katkı hammaddesi tartımı",
        "İnşaat malzemesi hazırlama sistemleri",
        "Seramik ve cam endüstrisi",
      ],
      highlightText:
        "Makro dozajlama sistemlerinde reçete bazlı tartım doğruluğu ve kontrollü besleme, ürün kalitesi ile hammadde verimliliğini birlikte artırır.",
      specs: [
        "Toz geçirmez esnek bağlantılı tartım sistemi",
        "Yüksek hassasiyetli loadcell ile ±%0,1 tartım doğruluğu",
        "PLC destekli otomasyon kontrolü",
        "Titreşimli boşaltma mekanizması",
        "Operatör paneli üzerinden reçete bazlı kullanım",
        "Paslanmaz çelik, galvaniz ve RAL boyalı bunker alternatifleri",
        "Kolay bakım ve temizlik için özel tasarım",
      ],
      optionalEquipment: [
        "Titreşimli boşaltma paketi",
        "Operatör paneli ve reçete ekranı",
        "Toz filtre entegrasyonu",
        "Bunker seviye sensörleri",
      ],
      spareParts: [
        "Loadcell setleri",
        "Vibrasyon mekanizması parçaları",
        "Motor-redüktör grupları",
        "Esnek bağlantı ve conta elemanları",
      ],
    },
    {
      slug: "dozaj-bant-kantari",
      title: "Dozaj Bant Kantarı",
      shortDescription:
        "Sürekli akış halinde çalışan üretim hatlarında hammaddeyi hassas biçimde tartmak ve kontrollü beslemek için dozaj bant kantarı çözümleri sunuyoruz.",
      image: "/images/dozaj1.jpg",
      heroDescription:
        "Dozaj bant kantarları, üretim süreçlerinde hammadde akışını kontrol altında tutarak hassas tartım ve sürekli besleme imkanı sağlar. Sistem, hammaddeyi hareket halindeyken tartar ve belirlenen debide aktarım yapılmasına olanak tanır. Özellikle karmaşık formülasyonların bulunduğu otomatik üretim hatlarında yüksek doğruluk ve verimlilik sunar.",
      overviewParagraphs: [
        "Dozaj bant kantarları, üretim süreçlerinde hammadde akışını kontrol altında tutarak hassas tartım ve sürekli besleme imkanı sağlar. Sistem, hammaddeyi hareket halindeyken tartar ve belirlenen debide aktarım yapılmasına olanak tanır. Özellikle karmaşık formülasyonların bulunduğu otomatik üretim hatlarında yüksek doğruluk ve verimlilik sunar.",
        "PRO MAKİNA tarafından geliştirilen dozaj bant kantarları, loadcell destekli ölçüm teknolojisi, esnek kontrol altyapısı ve modüler tasarımı ile çok çeşitli sektörlerin ihtiyaçlarına cevap verir. Ürün akışına göre özel genişlik ve bant hızı seçenekleriyle tam uyum sağlar.",
      ],
      applications: [
        "Yem üretimi",
        "Gıda sektörü",
        "Gübre üretimi",
        "Kimya endüstrisi",
        "Madencilik ve mineral işleme tesisleri",
      ],
      highlightText:
        "Sürekli akışta hassas tartım ve kontrollü besleme sağlayan dozaj bant kantarları, proses kararlılığı ve ürün kalitesi için kritik avantaj sunar.",
      specs: [
        "Hassas loadcell sistemi ile yüksek doğrulukta tartım",
        "Otomatik dozaj kontrolü",
        "Basınç dengeleme sistemi ile tozsuz çalışma",
        "Paslanmaz çelik, galvaniz veya boyalı gövde alternatifleri",
        "Modüler ve kompakt tasarım",
        "SCADA ve PLC sistemleriyle tam uyum",
        "Ayarlanabilir bant hızı ve bant genişliği seçenekleri",
      ],
      optionalEquipment: [
        "SCADA ve PLC entegrasyon paketi",
        "Hız kontrollü sürücü",
        "Toz emiş ve basınç dengeleme sistemi",
        "Ayarlanabilir besleme bunkeri",
      ],
      spareParts: [
        "Loadcell ve kantar modülleri",
        "Bant ve tambur takımları",
        "Motor-redüktör grubu",
        "Sensör ve otomasyon elemanları",
      ],
    },
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
  expandCategory(auxiliaryFlowSeed),
  expandCategory(dosageSeed),
];

export const machineCategoryMap = Object.fromEntries(
  machineCategoryPages.map((category) => [category.slug, category]),
) as Record<string, MachineCategoryPage>;
