export type BlogHubArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

export type BlogHubCluster = {
  title: string;
  slug: string;
  description: string;
  articles: BlogHubArticle[];
};

export const topicalAuthorityClusters: BlogHubCluster[] = [
  {
    title: "Kurutma Sistemleri",
    slug: "kurutma-sistemleri",
    description:
      "Kurutma tamburu seçimi, kapasite hesabı, çap-boy oranı, rotary dryer design ve endüstriyel kurutma uygulamalarını bir araya getiren ana cluster.",
    articles: [
      {
        slug: "kurutma-tamburu-kapasite-hesabi",
        title: "Kurutma Tamburu Kapasite Hesabı",
        description: "Su uçurma yükü, enerji ihtiyacı ve proses kapasitesini birlikte okuyan teknik rehber.",
        category: "Kurutma Sistemleri",
      },
      {
        slug: "kurutma-tamburu-cap-boy-hesabi",
        title: "Kurutma Tamburu Çap Boy Hesabı",
        description: "Tutulma süresi, L/D oranı ve tambur geometrisini mühendislik açısından açıklar.",
        category: "Kurutma Sistemleri",
      },
      {
        slug: "rotary-dryer-design",
        title: "Rotary Dryer Design",
        description: "Rotary dryer tasarımını uluslararası terminoloji ve saha gerçekleriyle ele alır.",
        category: "Kurutma Sistemleri",
      },
      {
        slug: "endustriyel-kurutma-sistemleri",
        title: "Endüstriyel Kurutma Sistemleri",
        description: "Farklı kurutma teknolojilerinin yatırım ve proses açısından nasıl ayrıştığını gösterir.",
        category: "Kurutma Sistemleri",
      },
      {
        slug: "tambur-kurutucu-nasil-calisir",
        title: "Tambur Kurutucu Nasıl Çalışır?",
        description: "İç kanatlar, gaz akışı ve ürün ilerleme mantığını sade ama teknik dille anlatır.",
        category: "Kurutma Sistemleri",
      },
    ],
  },
  {
    title: "Helezon & Konveyör",
    slug: "konveyor-ve-helezon",
    description:
      "Taşıma hatlarında kapasite, motor gücü, eğim etkisi ve vidalı konveyör mantığını birlikte toplayan satın alma niyeti odaklı bilgi ağı.",
    articles: [
      {
        slug: "helezon-kapasite-hesabi",
        title: "Helezon Kapasite Hesabı",
        description: "Helezon seçiminde çap, hatve, devir ve doluluk ilişkisinin ana çerçevesini sunar.",
        category: "Helezon & Konveyör",
      },
      {
        slug: "helezon-motor-gucu-hesabi",
        title: "Helezon Motor Gücü Hesabı",
        description: "Tork, servis faktörü ve redüktör seçimi için ön mühendislik yaklaşımı içerir.",
        category: "Helezon & Konveyör",
      },
      {
        slug: "konveyor-kapasite-hesabi",
        title: "Konveyör Kapasite Hesabı",
        description: "Bantlı ve zincirli hatlarda kapasite, hız ve gövde yaklaşımını anlatır.",
        category: "Helezon & Konveyör",
      },
      {
        slug: "egimli-helezon-hesabi",
        title: "Eğimli Helezon Hesabı",
        description: "Yükselme açısının kapasite ve motor seçimi üzerindeki etkisini açıklar.",
        category: "Helezon & Konveyör",
      },
      {
        slug: "vidali-konveyor-hesabi",
        title: "Vidalı Konveyör Hesabı",
        description: "Vidalı konveyör geometri ve güç omurgasını örneklerle özetler.",
        category: "Helezon & Konveyör",
      },
    ],
  },
  {
    title: "Gübre Tesisi",
    slug: "gubre-teknolojileri",
    description:
      "Organomineral, granül ve NPK gübre yatırımları için proses, ekipman ve ticari kararları tek cluster altında birleştirir.",
    articles: [
      {
        slug: "organomineral-gubre-tesisi-maliyeti",
        title: "Organomineral Gübre Tesisi Maliyeti",
        description: "Yatırım kalemlerini, proses risklerini ve büyüme planını birlikte açıklar.",
        category: "Gübre Tesisi",
      },
      {
        slug: "granul-gubre-uretim-sureci",
        title: "Granül Gübre Üretim Süreci",
        description: "Hammadde hazırlama, granülasyon, kurutma, soğutma ve eleme adımlarını teknik olarak sunar.",
        category: "Gübre Tesisi",
      },
      {
        slug: "npk-gubre-uretimi",
        title: "NPK Gübre Üretimi",
        description: "NPK hatlarında reçete, proses dengesi ve ekipman seçim mantığını ele alır.",
        category: "Gübre Tesisi",
      },
      {
        slug: "gubre-tesisi-kurulumu",
        title: "Gübre Tesisi Kurulumu",
        description: "Anahtar teslim gübre tesisi yatırımını saha ve proses açısından bütüncül okur.",
        category: "Gübre Tesisi",
      },
      {
        slug: "gubre-uretim-hatti",
        title: "Gübre Üretim Hattı",
        description: "Bir gübre üretim hattının sıfırdan nasıl planlandığını ve hangi ekipmanlara ihtiyaç duyduğunu anlatır.",
        category: "Gübre Tesisi",
      },
    ],
  },
  {
    title: "Kompost & Atık",
    slug: "kompost-ve-atik",
    description:
      "Kompost, organik atık, çamur kurutma ve biyogaz ön işlem konularını aynı otorite halkasında toplayan cluster yapısı.",
    articles: [
      {
        slug: "kompost-tesisi-kurulumu",
        title: "Kompost Tesisi Kurulumu",
        description: "Kompost yatırımını proses, ekipman ve çevresel kontrol açısından yorumlar.",
        category: "Kompost & Atık",
      },
      {
        slug: "organik-atik-tesisi",
        title: "Organik Atık Tesisi",
        description: "Organik atığın kompost veya biyogaz yönünde nasıl değerlendirileceğini açıklar.",
        category: "Kompost & Atık",
      },
      {
        slug: "camur-kurutma-sistemi",
        title: "Çamur Kurutma Sistemi",
        description: "Yüksek nemli çamur akışları için termal kurutma ve çevresel kontrol mantığını anlatır.",
        category: "Kompost & Atık",
      },
      {
        slug: "biyogaz-on-islem",
        title: "Biyogaz Ön İşlem",
        description: "Besleme öncesi ayırma, kırma, karıştırma ve dengeleme altyapısını özetler.",
        category: "Kompost & Atık",
      },
      {
        slug: "kompost-uretim-sureci",
        title: "Kompost Üretim Süreci",
        description: "Reçete, olgunlaştırma ve nihai ürün hazırlama akışını teknik çerçevede verir.",
        category: "Kompost & Atık",
      },
    ],
  },
];

export const topicalAuthorityLatestArticles: BlogHubArticle[] = [
  {
    slug: "kompost-tesisi-kurulumu",
    title: "Kompost Tesisi Kurulumu",
    description: "Kompost yatırımında proses akışı, makine seçimi ve çevresel kontrol başlıklarını bir arada görün.",
    category: "Kompost & Atık",
  },
  {
    slug: "gubre-uretim-hatti",
    title: "Gübre Üretim Hattı",
    description: "Sıfırdan gübre hattı planlarken kapasite, ekipman ve saha kurgusunu birlikte okuyun.",
    category: "Gübre Tesisi",
  },
  {
    slug: "helezon-kapasite-hesabi",
    title: "Helezon Kapasite Hesabı",
    description: "Çap, hatve, devir ve doluluk oranı üzerinden taşıma kapasitesi mantığını inceleyin.",
    category: "Helezon & Konveyör",
  },
  {
    slug: "kurutma-tamburu-kapasite-hesabi",
    title: "Kurutma Tamburu Kapasite Hesabı",
    description: "Su uçurma yükü, hava debisi ve enerji ihtiyacı ekseninde tambur kurutma hesabını görün.",
    category: "Kurutma Sistemleri",
  },
  {
    slug: "granul-gubre-uretim-sureci",
    title: "Granül Gübre Üretim Süreci",
    description: "Granülasyon, kurutma, eleme ve paketleme hattını yatırım gözüyle değerlendirin.",
    category: "Gübre Tesisi",
  },
  {
    slug: "biyogaz-on-islem",
    title: "Biyogaz Ön İşlem",
    description: "Biyogaz besleme hattında ayırma, boyutlandırma ve dengeleme disiplinini teknik olarak okuyun.",
    category: "Kompost & Atık",
  },
];
