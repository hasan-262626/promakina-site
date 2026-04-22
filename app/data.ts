import { trText } from "./lib/tr-text";

export type SolutionItem = {
  slug: string;
  navTitle: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  ctaLabel: string;
  image: string;
};

export type SectorItem = {
  slug: string;
  title: string;
  summary: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
};

export type MachineGroupItem = {
  slug: string;
  title: string;
  summary: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  variants: string[];
  technicalSpecs: string[];
  capacities: string[];
  applications: string[];
  optionalEquipment: string[];
  materialTypes: string[];
  advantages: string[];
  relatedSectors: string[];
  relatedServices: string[];
  relatedProjects: string[];
  faqs: { question: string; answer: string }[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  scope: string[];
  outputs: string[];
  advantages: string[];
  relatedSectors: string[];
  relatedMachines: string[];
  relatedProjects: string[];
  faqs: { question: string; answer: string }[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  projectName: string;
  location: string;
  capacity: string;
  customerType: string;
  systems: string[];
  processSummary: string;
  technicalScope: string[];
  photosNote: string;
  outcomes: string[];
  similarProject: string;
  relatedMachines: string[];
  relatedSector: string;
  relatedSolutions: string[];
  image: string;
};

export type LibraryCategory =
  | "Blog / Makaleler"
  | "Teknik Rehberler"
  | "PDF Kataloglar"
  | "Video Icerikler"
  | "Sik Sorulan Sorular"
  | "Terimler Sozlugu"
  | "Programlar";

export type LibraryItem = {
  slug: string;
  title: string;
  category: LibraryCategory;
  summary: string;
  heroTitle: string;
  heroDescription: string;
  sections: { heading: string; text: string }[];
  relatedLinks: string[];
};

export const solutions: SolutionItem[] = [
  {
    slug: "turquality-danismanligi",
    navTitle: "Turquality Hizmetleri",
    title: "Turquality Danismanligi",
    heroEyebrow: "Turquality",
    heroTitle: "Markanizi global pazarlarda daha guclu konumlandirin.",
    heroDescription:
      "Markanizin global pazarlarda daha guclu konumlanmasi icin stratejik basvuru, gelisim ve s?re? yonetimi sunuyoruz.",
    ctaLabel: "Turquality ile Tani?xin",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978cauto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "greenquality-hizmetleri",
    navTitle: "Greenquality Hizmetleri",
    title: "Greenquality",
    heroEyebrow: "Greenquality",
    heroTitle: "S?rd?rulebilir ve verimli uygulamalar gelistirin.",
    heroDescription:
      "Yesil d?n???m hedefleri do?xrultusunda surdurulebilirlik, uyum ve rekabet avantajini birlikte planliyoruz.",
    ctaLabel: "Greenquality ile Tani?xin",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952cauto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dijital-donusum-hizmetleri",
    navTitle: "Dijital D?n??x?m Hizmetleri",
    title: "Dijital D?n??x?m",
    heroEyebrow: "Dijital D?n??x?m",
    heroTitle: "S?re?lerinizi daha hizli, olculebilir ve verimli hale getirin.",
    heroDescription:
      "Operasyonlarinizi daha izlenebilir, olculebilir ve hizli hale getiren kurumsal d?n???m adimlari tasarliyoruz.",
    ctaLabel: "D?n??x?m? Kesfedin",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0facauto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kurumsallasma-danismanligi",
    navTitle: "Kurumsallasma Danismanligi",
    title: "Kurumsallasma",
    heroEyebrow: "Kurumsallasma",
    heroTitle: "Sirket yapinizi b?y?meye hazir, saglam bir zemine oturtun.",
    heroDescription:
      "B?y?me yolculugunda sirket yapinizi guclendiren yonetim modeli, rol dagilimi ve s?re? altyapisi kuruyoruz.",
    ctaLabel: "Kurumsallasmayi Inceleyin",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11dcauto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "egitim-hizmetleri",
    navTitle: "Egitim Hizmetleri",
    title: "Egitim Hizmetleri",
    heroEyebrow: "Egitim",
    heroTitle: "Ekiplerinizi degisime hazirlayan uygulamali egitim programlari.",
    heroDescription:
      "Y?netim, d?n???m ve saha uygulamalarina yonelik egitimlerle ekibinizin bilgi ve uygulama kapasitesini guclendiriyoruz.",
    ctaLabel: "Egitimleri Inceleyin",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55fcauto=format&fit=crop&w=1200&q=80",
  },
];

export const sectors: SectorItem[] = [
  {
    slug: "gubre-ve-granulasyon-tesisleri",
    title: "Gübre Üretim Tesisleri",
    summary:
      "Sıvı, granül ve toz gübre üretim hatları için proses tasarımı, ekipman seçimi ve tesis kurgusu.",
    heroTitle: "Gübre üretim tesislerinde yüksek verim ve sürekli kalite.",
    heroDescription:
      "Ham madde hazırlamadan karışım, granülasyon, kurutma, eleme, soğutma ve paketlemeye kadar tüm üretim sürecini tek bir tesis mantığıyla planlıyoruz.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kompost-ve-organik-atik-tesisleri",
    title: "Kompost ve Organik Atık Tesisleri",
    summary:
      "Organik atıkların geri kazanımı için kompost prosesleri, tambur sistemleri ve saha kurulumları.",
    heroTitle: "Kompost ve organik atık işleme tesislerinde kontrollü ve verimli proses yapısı.",
    heroDescription:
      "Atık karakterine ve kapasiteye uygun tesis tasarımı ile organik atıkları değerli son ürüne dönüştüren altyapıyı kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral İşleme",
    summary:
      "Kırma, eleme, taşıma, kurutma ve sınıflandırma adımlarına uygun ekipman ve hat kurguları.",
    heroTitle: "Madencilik ve mineral işleme süreçlerinde dayanıklı ekipman ve proses sürekliliği.",
    heroDescription:
      "Yüksek aşınma koşullarına uygun mekanik altyapı ve proses akışı ile sahada uzun ömürlü sistemler kurguluyoruz.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42dacauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses Endüstrisi",
    summary:
      "Reaktör, dozajlama, çözündürme, soğutma ve transfer sistemleriyle proses güvenliği ve verim odaklı kurgu.",
    heroTitle: "Kimya ve proses endüstrisi için kontrollü üretim ve hassas ekipman seçimi.",
    heroDescription:
      "Reaksiyon, karıştırma, depolama ve transfer aşamalarında ürün güvenliği ve proses kararlılığını merkeze alıyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dccauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri Dönüşüm ve Atık Yönetimi",
    summary:
      "Parçalama, ayırma, taşıma ve geri kazanım odaklı tesis çözümleriyle atık yönetim altyapısı.",
    heroTitle: "Geri dönüşüm ve atık yönetiminde işlenebilir ve ölçeklenebilir sistemler.",
    heroDescription:
      "Farklı atık akışları için parçalama, sınıflandırma ve proses yönetimini tek çatı altında topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15bcauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary:
      "Biyogaz besleme, organik madde hazırlama ve yardımcı proses ekipmanlarıyla enerji odaklı tesis yapısı.",
    heroTitle: "Enerji ve biyogaz sistemlerinde istikrarlı besleme ve sürdürülebilir işletme.",
    heroDescription:
      "Biyogaz tesislerinin ön hazırlık ve malzeme yönetimi adımlarını daha verimli hale getiren ekipman kurguları sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1ecauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    summary:
      "Çamur taşıma, susuzlaştırma sonrası hazırlama ve kurutma adımlarına uygun proses çözümleri.",
    heroTitle: "Atık su çamuru ve arıtma çözümlerinde kontrollü işleme altyapısı.",
    heroDescription:
      "Arıtma tesislerinden gelen farklı karakterdeki çamurlar için depolama, taşıma ve kurutma odaklı sistemler tasarlıyoruz.",
    image:
      "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    summary:
      "Dökme katı malzemelerde depolama, dozajlama, taşıma, eleme ve karıştırma süreçleri için hat tasarımı.",
    heroTitle: "Dökme katı malzeme işlemede hassas taşıma ve dengeli proses akışı.",
    heroDescription:
      "Yem, toz ve benzeri malzemelerde akışkanlık, nem ve kapasite değişkenlerini dikkate alan ekipman seçimi sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952cauto=format&fit=crop&w=1400&q=80",
  },
];

export const machineGroups: MachineGroupItem[] = [
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    summary:
      "Kurutma, kompost, gran?lasyon ve sogutma gibi farkli prosesler i?in tek ?ati tambur ??z?mleri.",
    shortDescription:
      "Tamburlari tek sayfada toplayip ihtiyaca gore kurutma, kompost, gran?lasyon ve sogutma varyantlari sunuyoruz.",
    heroTitle: "Tambur sistemlerinde prosese g?re do?xru kurgu ve do?xru kapasite se?imi.",
    heroDescription:
      "Kurutma tamburu, kompost tamburu, gran?lasyon tamburu ve sogutma tamburu se?eneklerini ayni yapi i?inde sunarak ?r?n ve proses uyumunu g??lendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492cauto=format&fit=crop&w=1400&q=80",
    variants: [
      "Kurutma Tamburlari",
      "Kompost Tamburlari",
      "Gran?lasyon Tamburlari",
      "Sogutma Tamburlari",
    ],
    technicalSpecs: [
      "Asinmaya dayanikli govde yapisi",
      "Farkli cap ve boy secenekleri",
      "Ayarlanabilir donus hizi",
      "Tahrik, sasi ve ic kaplama alternatifleri",
    ],
    capacities: ["5-100 ton/saat", "Projeye gore ?zel cap ve uzunluk"],
    applications: [
      "G?bre ?retim hatlari",
      "Kompost tesisleri",
      "Mineral kurutma prosesleri",
      "Organik madde hazirlama hatlari",
    ],
    optionalEquipment: [
      "Brulor sistemi",
      "Besleme bunkeri",
      "Toz toplama hatti",
      "Otomasyon ve sensor seti",
    ],
    materialTypes: ["Organik atik", "Gran?l g?bre", "Mineral", "?!amur ve yari nemli malzeme"],
    advantages: [
      "Y?ksek isleme verimi",
      "Surekli hat entegrasyonu",
      "Bakim dostu mekanik yapi",
      "Prosese ?zel ic geometri secenekleri",
    ],
    relatedSectors: [
      "Gübre Üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: [
      "Kompost Tesisi Projeleri",
      "Organomineral G?bre Tesisi Projeleri",
      "?zel Proses ve Makine 0malat1",
    ],
    faqs: [
      {
        question: "Tambur tipi nasil secilir?",
        answer:
          "Malzemenin nemi, tane yapisi, hedef kapasite ve proses amacina gore kurutma, kompost, granulasyon veya sogutma tamburu belirlenir.",
      },
      {
        question: "Tamburlar ?zel olculerde uretilebilir mi?",
        answer:
          "Evet, saha kosullari ve kapasite ihtiyacina gore cap, uzunluk, tahrik ve ic tasarim ozellestirilebilir.",
      },
    ],
  },
  {
    slug: "tasima-ekipmanlari",
    title: "Ta?x1ma Ekipmanlari",
    summary:
      "Bant konveyor, helezon, kovali elevat?r ve zincirli konveyor gibi ta?x1ma ekipmanlarini tek ?at1 alt1nda topluyoruz.",
    shortDescription:
      "Helezon, elevat?r ve konveyor gruplarini dagitmadan ayni kategori icinde sunuyoruz.",
    heroTitle: "Ta?x1ma ekipmanlarinda dengeli ak1?x, g?venli transfer ve s?rekli hat ba?xlantisi.",
    heroDescription:
      "Bant konveyorler, helezon konveyorler, kovali elevat?rler ve zincirli konveyorler ile hammadde ve ?r?n transferini s?re?le uyumlu hale getiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5902cauto=format&fit=crop&w=1400&q=80",
    variants: [
      "Bant Konveyorler",
      "Helezon Konveyorler",
      "Kovali Elevatorler",
      "Zincirli Konveyorler",
    ],
    technicalSpecs: [
      "Farkli hat uzunlugu ve egim secenekleri",
      "Asinmaya dayanikli tasiyici yuzey",
      "Degisken hiz kontroll? surucu opsiyonu",
      "Kapali veya acik govde secenekleri",
    ],
    capacities: ["1-250 ton/saat", "Malzeme yogunluguna gore ?zel projelendirme"],
    applications: [
      "G?bre tesisleri",
      "Kompost hatlari",
      "Biyogaz besleme sistemleri",
      "D?kme kati malzeme transferi",
    ],
    optionalEquipment: [
      "Manyetik ayirici entegrasyonu",
      "Tartim sistemleri",
      "Kapali toz kontroll? hatlar",
      "Platform ve yurume yollari",
    ],
    materialTypes: ["Toz ?r?n", "Gran?l ?r?n", "Organik malzeme", "Mineral ve dokme kati"],
    advantages: [
      "Hat ici duzenli transfer",
      "D???k isletme kaybi",
      "Sahaya gore esnek yerle?im",
      "Farkli ekipmanlarla kolay entegrasyon",
    ],
    relatedSectors: [
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
      "Enerji ve Biyogaz Sistemleri",
      "Geri Dönüşüm ve Atık Yönetimi",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Makine Imalati"],
    relatedProjects: ["Kompost Tesisi Projeleri", "?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Hangi tasima ekipmani secilmeli?",
        answer:
          "Malzeme tipi, mesafe, egim, nem orani ve istenen kapasiteye gore bant, helezon, elevat?r veya zincirli konveyor secilir.",
      },
      {
        question: "Kapali sistem ??z?mleri sunuyor musunuz?",
        answer:
          "Evet, tozlu veya kokulu ?r?nler icin kapali govde ve filtre entegrasyonlu tasima hatlari projelendirebiliyoruz.",
      },
    ],
  },
  {
    slug: "kiricilar-ve-parcalayicilar",
    title: "Kiricilar ve Parcalayicilar",
    summary:
      "?!eki?li degirmen, zincirli k1r1c1, ceneli k1r1c1, primer k1r1c1 ve tek/?ift milli par?alay1c1lar1 tek grupta sunuyoruz.",
    shortDescription:
      "Kirici ve parcalayici seceneklerini uygulama t?r?ne gore ayni sayfada karsilastirmali sunuyoruz.",
    heroTitle: "Kirici ve parcalayicilarda malzemeye uygun kademeli boyut dusurme.",
    heroDescription:
      "Hammadde hazirlama ve geri kazanim s?re?lerinde farkli malzemeler icin uygun kirma ve parcalama cozumlerini tek cati altinda topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122cauto=format&fit=crop&w=1400&q=80",
    variants: [
      "?!eki?li Degirmen",
      "Zincirli Kirici",
      "?!eneli K1r1c1",
      "Primer Kirici",
      "Cift Milli Parcalayici",
      "Tek Milli Parcalayici",
    ],
    technicalSpecs: [
      "Y?ksek dayanimli govde yapisi",
      "Degistirilebilir asinma parcasi setleri",
      "Farkli rotor ve bicak konfig?rasyonlari",
      "Besleme olcusune gore ?zel giris agzi",
    ],
    capacities: ["2-80 ton/saat", "Malzeme sertligine gore ?zel se?im"],
    applications: [
      "Geri d?n???m tesisleri",
      "Mineral isleme",
      "G?bre ve organik hammadde hazirlama",
      "Atik azaltma hatlari",
    ],
    optionalEquipment: [
      "Manyetik ayirma",
      "Besleme bunkeri",
      "Konveyor entegrasyonu",
      "Toz toplama baglantisi",
    ],
    materialTypes: ["Plastik", "Organik atik", "Mineral", "Topak ?r?n ve dokme malzeme"],
    advantages: [
      "Istikrarli boyut k???ltme",
      "Prosese uygun farkli parcalama seviyeleri",
      "Asinmaya karsi guclu yapi",
      "Bakim kolayligi",
    ],
    relatedSectors: [
      "Geri Dönüşüm ve Atık Yönetimi",
      "Madencilik ve Mineral İşleme",
      "Kompost ve Organik Atik Tesisleri",
    ],
    relatedServices: ["Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["?zel Proses ve Makine 0malat1", "Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Tek milli mi cift milli mi secilmeli?",
        answer:
          "Malzemenin tipi, hedef parcacik boyutu ve besleme duzensizligi dikkate alinarak tek veya cift milli se?im yapilir.",
      },
      {
        question: "Kiricilar hat icinde kullanilabilir mi?",
        answer:
          "Evet, besleme bunkeri, konveyor ve eleme sistemleriyle entegre edilerek surekli hat icinde calisabilir.",
      },
    ],
  },
  {
    slug: "reaktorler-ve-tanklar",
    title: "Reaktorler ve Tanklar",
    summary:
      "Kar1?xt1r1c1l1 reakt?rler, ??z?nd?rme tanklar1, stok tanklar1 ve bas1n?l1 reakt?rleri tek ?at1 alt1nda topluyoruz.",
    shortDescription:
      "Tanklari ve reaktorleri ayirmadan ayni proses ailesi icinde sunuyoruz.",
    heroTitle: "Reaktor ve tank cozumlerinde kontroll? reaksiyon, depolama ve karistirma altyapisi.",
    heroDescription:
      "Karistiricili reaktorler, cozumdurme tanklari, stok tanklari ve basincli reaktorlerle kimyasal ve proses hatlarina uygun altyapi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dccauto=format&fit=crop&w=1400&q=80",
    variants: [
      "Karistiricili Reaktorler",
      "Cozundurme Tanklari",
      "Stok Tanklari",
      "Basincli Reaktorler",
    ],
    technicalSpecs: [
      "Paslanmaz veya karbon celik govde secenegi",
      "Karistirici tipi ve devir secenekleri",
      "Isi yalitimi veya ceket sistemi opsiyonu",
      "Basinc ve sicaklik izleme altyapisi",
    ],
    capacities: ["500 litre - 100 m3+", "Proses ihtiyacina gore ?zel imalat"],
    applications: [
      "Kimya tesisleri",
      "Sivi g?bre hatlari",
      "Hammadde hazirlama ve depolama",
      "Reaksiyon ve cozumdurme prosesleri",
    ],
    optionalEquipment: [
      "Loadcell sistemleri",
      "Seviye ve sicaklik sensorleri",
      "Dozaj pompasi entegrasyonu",
      "Platform ve servis merdiveni",
    ],
    materialTypes: ["Kimyasal solusyonlar", "Sivi g?bre", "Proses sivisi", "Bulamac ve karisimlar"],
    advantages: [
      "Prosese gore ozellestirme",
      "G?venli depolama ve reaksiyon ortami",
      "Bakim ve temizlik kolayligi",
      "Uzun omurlu govde tasarimi",
    ],
    relatedSectors: [
      "Kimya ve Proses Endüstrisi",
      "Gübre Üretim Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Makine Imalati"],
    relatedProjects: ["Organomineral G?bre Tesisi Projeleri", "?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Hangi tank malzemesi kullanilmali?",
        answer:
          "Akiskan tipi, sicaklik, kimyasal etkilesim ve basin? gereksinimine gore paslanmaz veya karbon celik tercih edilir.",
      },
      {
        question: "Basincli reaktorler ?zel hesapla mi yapiliyor?",
        answer:
          "Evet, basin?, sicaklik ve proses ko?ullar?na gore m?hendislik hesaplariyla projelendirme yapilir.",
      },
    ],
  },
  {
    slug: "eleme-ve-siniflandirma-sistemleri",
    title: "Eleme ve Siniflandirma Sistemleri",
    summary:
      "D?ner elek, vibrasyonlu elek ve trommel sistemlerini ayni kategori i?inde sunuyoruz.",
    shortDescription:
      "Eleme sistemlerini ayri ayri dagitmadan ayni grup icinde secenekli olarak listeliyoruz.",
    heroTitle: "Eleme ve siniflandirma sistemlerinde temiz ayirma ve dengeli ?r?n ak???.",
    heroDescription:
      "D?ner elek, vibrasyonlu elek ve trommel sistemleri ile farkli tane boyutlari icin net siniflandirma yapisi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952cauto=format&fit=crop&w=1400&q=80",
    variants: ["Doner Elek", "Vibrasyonlu Elek", "Trommel Sistemleri"],
    technicalSpecs: [
      "Farkli goz acikligi secenekleri",
      "Titre?xim veya donus bazli ayirma mekanizmasi",
      "Asinmaya dayanikli elek yuzeyi",
      "Hat ici veya bagimsiz kurulum secenekleri",
    ],
    capacities: ["3-120 ton/saat", "Malzeme tane boyuna gore degisken kapasite"],
    applications: [
      "Kompost siniflandirma",
      "Gran?l ?r?n eleme",
      "Geri d?n???m ak??? ayirma",
      "Mineral ve dokme kati siniflandirma",
    ],
    optionalEquipment: ["Toz emme baglantisi", "By-pass hatti", "Alt-ust ?r?n konveyorleri"],
    materialTypes: ["Gran?l", "Toz", "Organik karisim", "Kuru mineral ?r?n"],
    advantages: [
      "Net ?r?n siniflandirmasi",
      "Hat verimini artirma",
      "Farkli elek tipleriyle esnek se?im",
      "Bakim kolayligi",
    ],
    relatedSectors: [
      "Kompost ve Organik Atik Tesisleri",
      "Gübre Üretim Tesisleri",
      "Madencilik ve Mineral İşleme",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral G?bre Tesisi Projeleri"],
    faqs: [
      {
        question: "Hangi elek tipi secilmeli?",
        answer:
          "Malzeme yapisi, nem orani, istenen tane sinifi ve kapasiteye gore doner, vibrasyonlu veya trommel tercih edilir.",
      },
      {
        question: "Mevcut hatta entegre olabilir mi?",
        answer:
          "Evet, eleme sistemleri mevcut besleme ve cikis konveyorleriyle uyumlu sekilde projelendirilebilir.",
      },
    ],
  },
  {
    slug: "toz-toplama-sistemleri",
    title: "Toz Toplama Sistemleri",
    summary:
      "Jet pulse filtreler, siklonlar ve torba filtreleri tek ?ati filtreleme kategorisinde topluyoruz.",
    shortDescription:
      "Filtreleme ekipmanlarini ayri sayfalara bolmeden ortak bir sistem mantigiyla sunuyoruz.",
    heroTitle: "Toz toplama sistemlerinde temiz hava, ekipman korumasi ve daha duzenli isletme.",
    heroDescription:
      "Jet pulse filtreler, siklonlar ve torba filtrelerle toz kontrolunu s?re?e uygun sekilde yonetiyoruz.",
    image:
      "https://images.unsplash.com/photo-1494415859740-21e878dd929dcauto=format&fit=crop&w=1400&q=80",
    variants: ["Jet Pulse Filtreler", "Siklonlar", "Torba Filtreler"],
    technicalSpecs: [
      "Farkli filtre y?zeyi secenekleri",
      "Hava debisine uygun fan entegrasyonu",
      "Toz toplama bunkeri ve valf secenekleri",
      "Hat ici veya merkezi filtre sistemi kurulumu",
    ],
    capacities: ["1.000 - 100.000 m3/h", "Prosese gore fan ve filtre se?imi"],
    applications: [
      "Kurutma hatlari",
      "Kirma ve eleme sistemleri",
      "Torbalama ve dolum alanlari",
      "Tozlu dokme kati malzeme prosesleri",
    ],
    optionalEquipment: ["Rotary valve", "Ex-proof ekipman", "Diferansiyel basin? takibi"],
    materialTypes: ["Toz ?r?n", "Ince partikullu malzeme", "Gran?l kirintisi"],
    advantages: [
      "Daha temiz ?al??ma ortami",
      "Hat ekipmanlarini koruma",
      "Toz kaybini azaltma",
      "Is g?venligini destekleme",
    ],
    relatedSectors: [
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
      "Kimya ve Proses Endüstrisi",
      "Gübre Üretim Tesisleri",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Organomineral G?bre Tesisi Projeleri", "?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Filtre se?imi nasil yapiliyor?",
        answer:
          "Toz yuk?, hava debisi, partik?l karakteri ve saha yerlesimine gore jet pulse, siklon veya torba filtre secilir.",
      },
      {
        question: "Patlama riskli alanlarda ??z?m var mi?",
        answer:
          "Evet, gerekli oldugunda ex-proof ekipman ve uygun g?venlik ekipmanlariyla ??z?m sunulabilir.",
      },
    ],
  },
  {
    slug: "paketleme-ve-dolum-sistemleri",
    title: "Paketleme ve Dolum Sistemleri",
    summary:
      "A?1k a?x1z torbalama, big bag dolum ve ?xi?xeleme/dolum hatlarini tek ?at1 dolum grubunda birle?xtiriyoruz.",
    shortDescription:
      "Torbalama ve dolum seceneklerini tek sistem ailesi icinde sunuyoruz.",
    heroTitle: "Paketleme ve dolum sistemlerinde d?zenli tartim, temiz dolum ve hizli cikis.",
    heroDescription:
      "Acik agiz torbalama, big bag dolum ve sisleme/dolum hatlari ile ?r?nun son asamadaki sevk hazirligini guclendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310dcauto=format&fit=crop&w=1400&q=80",
    variants: ["Acik Agiz Torbalama", "Big Bag Dolum", "Siseleme ve Dolum Hatlari"],
    technicalSpecs: [
      "Tartim kontroll? dolum altyapisi",
      "Yari otomatik veya otomatik sistem secenekleri",
      "Konveyor ve dikis/kapama entegrasyonu",
      "Farkli ambalaj tiplerine uyum",
    ],
    capacities: ["4-30 paket/dakika", "?Sr?ne ve ambalaja gore ?zel kurgu"],
    applications: [
      "Gran?l g?bre paketleme",
      "Toz ?r?n torbalama",
      "Sivi ?r?n dolum hatlari",
      "Big bag sevkiyat hazirlama",
    ],
    optionalEquipment: ["Etiketleme", "Paletleme entegrasyonu", "Toz emme baglantisi"],
    materialTypes: ["Gran?l", "Toz", "Sivi ?r?n", "D?kme kati"],
    advantages: [
      "Daha duzenli son ?r?n cikisi",
      "Tartim hassasiyeti",
      "Hatla uyumlu sevkiyat ak???",
      "Operasyonel hiz artisi",
    ],
    relatedSectors: [
      "Gübre Üretim Tesisleri",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    ],
    relatedServices: ["Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Organomineral G?bre Tesisi Projeleri", "?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Hem toz hem granul ?r?n icin ??z?m olur mu?",
        answer:
          "Evet, ?r?n davranisina uygun tartim ve dolum ekipmanlariyla farkli ?r?nler icin uygun hat kurulabilir.",
      },
      {
        question: "Big bag ve standart torba ayni hatta olur mu?",
        answer:
          "Uygun layout ve operasyon senaryosuyla ayni tesiste farkli dolum ??z?mleri birlikte planlanabilir.",
      },
    ],
  },
  {
    slug: "depolama-ve-besleme-sistemleri",
    title: "Depolama ve Besleme Sistemleri",
    summary:
      "Silo sistemleri, bunkerler ve ?r?n alma/besleme sistemlerini tek ?ati altinda topluyoruz.",
    shortDescription:
      "Depolama ve beslemeyi ayirmadan birbiriyle calisan tek grup olarak kurguluyoruz.",
    heroTitle: "Depolama ve besleme sistemlerinde duzenli stok yonetimi ve kontroll? ak1?x.",
    heroDescription:
      "Silo sistemleri, bunkerler ve ?r?n alma-besleme ekipmanlari ile hattan onceki stok ve dozaj altyapisini guclendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fefcauto=format&fit=crop&w=1400&q=80",
    variants: ["Silo Sistemleri", "Bunkerler", "?Sr?n Alma ve Besleme Sistemleri"],
    technicalSpecs: [
      "Farkli hacim ve geometri secenekleri",
      "Akis yardimci ekipman entegrasyonu",
      "Dozaj ve seviye kontrol baglantilari",
      "Ic ve dis ortam kurulum secenekleri",
    ],
    capacities: ["1 m3 - 500 m3+", "Hat kapasitesine gore ?zel stok hacmi"],
    applications: [
      "Hammadde depolama",
      "Hat oncesi tampon stok",
      "Dozaj ve kontroll? besleme",
      "D?kme ?r?n sevk hazirlama",
    ],
    optionalEquipment: ["Vibrator", "Helezon besleyici", "Loadcell", "Seviye sensoru"],
    materialTypes: ["Toz ?r?n", "Gran?l ?r?n", "Organik malzeme", "Mineral ve karisimlar"],
    advantages: [
      "Duzenli stok yonetimi",
      "kontroll? ?r?n besleme",
      "Hat surekliligini destekleme",
      "Sahaya uygun ?zel imalat",
    ],
    relatedSectors: [
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
      "Gübre Üretim Tesisleri",
      "Enerji ve Biyogaz Sistemleri",
    ],
    relatedServices: ["Proses Tasarimi ve M?hendislik", "Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral G?bre Tesisi Projeleri"],
    faqs: [
      {
        question: "Bunker ve silo farki nedir?",
        answer:
          "Bunkerler daha ?ok ara stok ve hizli besleme icin, silolar ise daha b?y?k hacimli uzun sureli depolama icin tercih edilir.",
      },
      {
        question: "Besleme sistemi ?r?ne gore degisir mi?",
        answer:
          "Evet, akiskanlik, tane boyu, nem ve koprulenme riski gibi faktorler besleme sisteminin tipini belirler.",
      },
    ],
  },
];

export const services: ServiceItem[] = [
  {
    slug: "anahtar-teslim-tesis-kurulumu",
    title: "Anahtar Teslim Tesis Kurulumu",
    summary:
      "M?hendislikten imalata, saha kurulumundan devreye almaya kadar t?m tesis s?recini tek elden y?netiyoruz.",
    heroTitle: "Anahtar Teslim Tesis Kurulumu",
    heroDescription:
      "Anahtar teslim tesis kurulumunda t?m s?reci tek bir koordinasyonla y?netiyoruz. Kompost, g?bre, geri d?n??x?m ve proses tesisleri i?in planlama, imalat, montaj ve devreye alma ad1mlar1n1 tek ?at1 alt1nda topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfdcauto=format&fit=crop&w=1400&q=80",
    scope: [
      "Tesis yerle?xim plan1",
      "Ekipman se?imi",
      "Makina imalati",
      "Saha montaji",
      "Devreye alma organizasyonu",
      "Teknik dan1?xmanl1k",
    ],
    outputs: [
      "Tek merkezden y?netilen proje s?reci",
      "Zaman kaybinin azaltilmasi",
      "Daha net maliyet ve koordinasyon y?netimi",
    ],
    advantages: [
      "Tek muhatap",
      "Sahaya uygun ??z?m",
      "Daha kontroll? kurulum",
      "S?re? b?t?nl??x?",
    ],
    relatedSectors: [
      "Gübre Üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    ],
    relatedMachines: ["Tambur Sistemleri", "Ta?x1ma Ekipmanlari", "Depolama ve Besleme Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral G?bre Tesisi Projeleri"],
    faqs: [
      {
        question: "Anahtar teslim kapsamina neler dahildir?",
        answer:
          "Projenin kapsam1na g?re proses tasar1m1, ekipman se?imi, makina imalat1, saha montaj1, devreye alma ve teknik dan1?xmanl1k hizmetleri sunulabilir.",
      },
    ],
  },
  {
    slug: "proses-tasarimi-ve-muhendislik",
    title: "Proses Tasarimi ve M?hendislik",
    summary:
      "Kapasite, ?r?n tipi ve saha ko?xullar1na g?re proses ak1?xlar1n1, ekipman dizilimini ve teknik altyap1y1 tasarl1yoruz.",
    heroTitle: "Do?xru proses tasar1m1 ile tesis performans1n1 en ba?xtan g??lendirin",
    heroDescription:
      "Malzeme ak1?x1, kapasite ihtiyac1, ?r?n hedefi ve saha ger?eklerini birlikte de?xerlendirerek verimli ve uygulanabilir bir m?hendislik kurgusu sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313b2f1141ccauto=format&fit=crop&w=1400&q=80",
    scope: [
      "Proses ak1?x1",
      "Hat yerle?ximi",
      "Ekipman boyutlandirma",
      "Teknik m?hendislik kurgusu",
    ],
    outputs: [
      "Daha net yatirim karari",
      "Daha verimli hat kurgusu",
      "Do?xru ekipman se?imi",
    ],
    advantages: [
      "Verim odakli kurgu",
      "Sahaya uygunluk",
      "Kapasite uyumu",
      "Gelecek b?y?meye a?ik altyapi",
    ],
    relatedSectors: [
      "Gübre Üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    ],
    relatedMachines: ["Reaktorler ve Tanklar", "Eleme ve Siniflandirma Sistemleri", "Toz Toplama Sistemleri"],
    relatedProjects: ["?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Proses tasarimi neden kritiktir?",
        answer:
          "Do?xru proses tasar1m1; kapasite planlamas1, ekipman se?imi, hat verimi ve i?xletme s?reklili?xi a?1s1ndan yat1r1m1n temelini olu?xturur.",
      },
      {
        question: "Proses tasariminda hangi veriler dikkate alinir?",
        answer:
          "Hammadde yap1s1, ?r?n hedefi, kapasite ihtiyac1, saha ko?xullar1, enerji kullan1m1 ve i?xletme beklentileri birlikte de?xerlendirilir.",
      },
      {
        question: "Bu hizmet yalnizca yeni tesisler i?in mi uygundur?",
        answer:
          "Hay1r. Yeni yat1r1mlar1n yan1 s1ra mevcut tesislerin revizyonu, kapasite art1?x1 ve proses iyile?xtirme ?al1?xmalar1 i?in de uygundur.",
      },
    ],
  },
  {
    slug: "makine-imalati",
    title: "Makine Imalati",
    summary:
      "Prosese ?zel olculerde, sanayi tipi ve dayanikli ekipmanlar uretiyoruz.",
    heroTitle: "Sahaya ve prosese uygun makine imalati ile dayanikli sistemler k?r?n.",
    heroDescription:
      "Tambur, konveyor, bunker, kirici, reaktor ve yardimci proses ekipmanlarini proje gereksinimine gore imal ediyoruz.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985ccauto=format&fit=crop&w=1400&q=80",
    scope: ["?zel olcu imalat", "Malzeme se?imi", "Atolye ?retimi", "Kalite kontrol"],
    outputs: ["Sahaya uygun ekipman", "Uzun omurlu kullanim", "Teknik uyum"],
    advantages: ["?zel imalat", "Dayanikli yapi", "Hatla uyum", "Bakim kolayligi"],
    relatedSectors: ["Madencilik ve Mineral İşleme", "Geri Dönüşüm ve Atık Yönetimi"],
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Tambur Sistemleri", "Ta?x1ma Ekipmanlari"],
    relatedProjects: ["?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Standart disi imalat yapiliyor mu?",
        answer:
          "Evet, kapasite, saha olculeri ve proses ihtiyacina gore tamamen ?zel imalat yapabiliyoruz.",
      },
    ],
  },
  {
    slug: "kurulum-ve-devreye-alma",
    title: "Kurulum ve Devreye Alma",
    summary:
      "Sahadaki ekipman montaji, testler ve ilk ?al??ma s?recini kontroll? sekilde yonetiyoruz.",
    heroTitle: "Kurulum ve devreye alma s?recinde hatalari azaltan kontroll? saha uygulamasi.",
    heroDescription:
      "Makinalarin sahaya alinmasindan ilk ?retim testlerine kadar her adimi planli, olculebilir ve koordineli sekilde ilerletiyoruz.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4ecauto=format&fit=crop&w=1400&q=80",
    scope: ["Montaj planlama", "Saha kurulum", "Test calismalari", "Ilk calistirma"],
    outputs: ["Daha hizli devreye alma", "Daha d???k saha riski", "?!al1?x1r teslim"],
    advantages: ["Saha koordinasyonu", "Surekli takip", "Performans kontrol?", "Ekip egitimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Atık Su Çamuru ve Arıtma Çözümleri"],
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Devreye alma ne kadar surer?",
        answer:
          "Sure; ekipman sayisi, hat karmasikligi ve saha hazirlik seviyesine gore proje bazli degisir.",
      },
    ],
  },
  {
    slug: "modernizasyon-ve-revizyon",
    title: "Modernizasyon ve Revizyon",
    summary:
      "Mevcut tesisleri kapasite, verim ve proses kalitesi acisindan yeniliyoruz.",
    heroTitle: "Mevcut tesisinizi sifirdan kurmadan daha verimli hale getirin.",
    heroDescription:
      "Revizyon, kapasite artisi ve ekipman yenileme adimlariyla mevcut hattin performansini gelistiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3cauto=format&fit=crop&w=1400&q=80",
    scope: ["Mevcut hat analizi", "Darbogaz tespiti", "Ekipman degisimi", "Performans iyilestirme"],
    outputs: ["Kapasite artisi", "Enerji verimi", "Daha dengeli proses"],
    advantages: ["Yatirimi koruma", "Hizli iyilestirme", "Daha d???k durus maliyeti"],
    relatedSectors: ["Gübre Üretim Tesisleri", "Kimya ve Proses Endüstrisi"],
    relatedMachines: ["Toz Toplama Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral G?bre Tesisi Projeleri"],
    faqs: [
      {
        question: "Sadece belli bir hatta revizyon yapilabilir mi?",
        answer:
          "Evet, tum tesis yerine yalnizca darbogaz yaratan veya yetersiz kalan bolumler de revize edilebilir.",
      },
    ],
  },
  {
    slug: "teknik-danismanlik",
    title: "Teknik Dan1?xmanl1k",
    summary:
      "Yatirim karari, proses se?imi, ekipman tercihi ve saha planlamasi icin teknik bakis sagliyoruz.",
    heroTitle: "Do?xru yatirim ve proses kararlarini teknik danismanlikla netlestirin.",
    heroDescription:
      "Yeni tesis yatirimi veya mevcut hattin iyilestirilmesi s?recinde karar vericilere teknik yol haritasi sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978cauto=format&fit=crop&w=1400&q=80",
    scope: ["Teknik analiz", "Yatirim degerlendirme", "Ekipman se?im destegi", "S?re? yonlendirme"],
    outputs: ["Daha net karar s?reci", "Yanlis ekipman riskinin azalmasi", "Proje netligi"],
    advantages: ["Uzman bakis", "Karar destegi", "Risk azaltma", "S?re? netligi"],
    relatedSectors: ["Madencilik ve Mineral İşleme", "Geri Dönüşüm ve Atık Yönetimi"],
    relatedMachines: ["Tambur Sistemleri", "Kiricilar ve Parcalayicilar"],
    relatedProjects: ["?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Dan1?xmanl1k sadece yeni proje icin mi?",
        answer:
          "Hayir, mevcut hatlarin analizinde ve performans iyilestirme kararlarinda da teknik danismanlik sunuyoruz.",
      },
    ],
  },
  {
    slug: "bakim-ve-servis",
    title: "Bakim ve Servis",
    summary:
      "Ekipman omrunu uzatmak ve plansiz durusleri azaltmak icin teknik bakim ve servis destegi sagliyoruz.",
    heroTitle: "Bakim ve servis yapisi ile sistemlerinizi daha uzun omurlu ve g?venli calistirin.",
    heroDescription:
      "Periyodik kontrol, parca degisimi, ayar ve teknik servis deste?xi ile ekipman performans1n1n surekliligini destekliyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232cauto=format&fit=crop&w=1400&q=80",
    scope: ["Periyodik kontrol", "Yedek parca", "Ariza tespiti", "Saha servis destegi"],
    outputs: ["Daha az plansiz durus", "Daha y?ksek ekipman ?mr?", "Daha g?venli isletme"],
    advantages: ["Hizli mudahale", "Onleyici bakim", "Parca takibi", "0?xletme surekliligi"],
    relatedSectors: ["Kompost ve Organik Atik Tesisleri", "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri"],
    relatedMachines: ["Ta?x1ma Ekipmanlari", "Reaktorler ve Tanklar"],
    relatedProjects: ["Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Periyodik bakim plani hazirlaniyor mu?",
        answer:
          "Evet, ekipman tipine ve ?al??ma yogunluguna gore planli bakim takvimi ol?st?rabiliyoruz.",
      },
    ],
  },
  {
    slug: "pilot-tesis-ve-proses-test-calismalari",
    title: "Pilot Tesis ve Proses Test ?!al1?xmalar1",
    summary:
      "Tam yatirim oncesi prosesin gercek saha verisine yakin sekilde test edilmesini sagliyoruz.",
    heroTitle: "Pilot tesis ve proses testleriyle yatirim riskini dusurup karari guclendirin.",
    heroDescription:
      "Malzeme davranisi, ?r?n kalitesi ve proses parametrelerini pilot calismalarla daha net gorerek ana yatirimi daha saglikli planliyoruz.",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109ecauto=format&fit=crop&w=1400&q=80",
    scope: ["Numune testleri", "Pilot denemeler", "Parametre analizi", "Sonu? raporlama"],
    outputs: ["Yatirim oncesi veri", "Malzeme davranisi analizi", "Daha do?xru ekipman se?imi"],
    advantages: ["Risk azaltma", "Veriye dayali karar", "Rakiplerden ayrisan uzmanlik"],
    relatedSectors: ["Gübre Üretim Tesisleri", "Atık Su Çamuru ve Arıtma Çözümleri"],
    relatedMachines: ["Tambur Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral G?bre Tesisi Projeleri"],
    faqs: [
      {
        question: "Pilot tesis ne zaman gerekli olur?",
        answer:
          "Yeni bir malzeme, degisken ?r?n kalitesi veya belirsiz proses davranisi oldugunda pilot ?al??ma karar s?recini guclendirir.",
      },
    ],
  },
  {
    slug: "proje-yonetimi-ve-saha-koordinasyonu",
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    summary:
      "Farkli ekipler, tedarikler ve saha uygulamalarini ayni takvim ve hedef etrafinda yonetiyoruz.",
    heroTitle: "Proje yonetimi ve saha koordinasyonuyla kurulum s?recinde daginikligi onleyin.",
    heroDescription:
      "Takvim, ekipler, lojistik, montaj ve test adimlarini tek bir saha koordinasyon mantigiyla yuruterek projeye netlik kazandiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4acauto=format&fit=crop&w=1400&q=80",
    scope: ["Takvim yonetimi", "Saha koordinasyonu", "Tedarik takibi", "Ekip senkronizasyonu"],
    outputs: ["Daha kontroll? ilerleme", "Daha net saha duzeni", "Sure ve kapsam takibi"],
    advantages: ["Tek merkezli koordinasyon", "Daha az saha karisiklisi", "G?ven veren proje yonetimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Geri Dönüşüm ve Atık Yönetimi"],
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "?zel Proses ve Makine 0malat1"],
    faqs: [
      {
        question: "Sadece saha koordinasyonu hizmeti alabilir miyiz?",
        answer:
          "Evet, tum projeyi de?xil yalnizca saha koordinasyonu ve proje takip kismini da ayri hizmet olarak yurutebiliriz.",
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "kompost-tesisi-projeleri",
    title: "Kompost Tesisi Projeleri",
    summary:
      "Evsel atik, organik atik ve aritma camuru isleme senaryolarina uygun tesis tasarimi ve ekipman altyapisi.",
    projectName: "Organik Atik Kompost Tesisi Kurulumu",
    location: "T?rkiye",
    capacity: "20 ton/gun",
    customerType: "Belediye ve cevre yatirimi",
    systems: ["Tambur Sistemleri", "Ta?x1ma Ekipmanlari", "Eleme ve Siniflandirma Sistemleri"],
    processSummary:
      "Organik atik kabulunden kompost olgunlastirma ve son eleme asamasina kadar tum s?re? tek hat yapisinda planlandi.",
    technicalScope: [
      "Besleme ve ayristirma alani",
      "Kompost tamburu entegrasyonu",
      "Konveyor hatlari",
      "Son eleme ve ?r?n cikisi",
    ],
    photosNote:
      "Bu alana saha kurulum fotograflari, makine yerlestirme gorselleri ve uygulama kareleri eklenebilir.",
    outcomes: [
      "Atiklarin geri kazanim oraninin artmasi",
      "S?recin daha kontroll? hale gelmesi",
      "Daha verimli organik ?r?n cikisi",
    ],
    similarProject: "Biyogaz ve Atık Yönetimi Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Ta?x1ma Ekipmanlari"],
    relatedSector: "Kompost ve Organik Atik Tesisleri",
    relatedSolutions: ["Teknik Dan1?xmanl1k", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "organomineral-gubre-tesisi-projeleri",
    title: "Organomineral G?bre Tesisi Projeleri",
    summary:
      "Gran?l ve sivi g?bre ?retim hatlarinda ?r?n kalitesi, kapasite ve surdurulebilir isletme odakli kurgu.",
    projectName: "Organomineral G?bre ?Sretim Hatti",
    location: "T?rkiye / Ic Anadolu",
    capacity: "10 ton/saat",
    customerType: "?zel sektor g?bre ureticisi",
    systems: ["Tambur Sistemleri", "Reaktorler ve Tanklar", "Paketleme ve Dolum Sistemleri"],
    processSummary:
      "Hammadde hazirlama, karisim, granulasyon, kurutma, eleme ve paketleme s?reci tek entegre tesis mantigiyla kuruldu.",
    technicalScope: [
      "Gran?lasyon tamburu",
      "Sivi katkilar icin tank ve reaktor altyapisi",
      "Eleme ve geri donus hatti",
      "Torbalama ve paketleme entegrasyonu",
    ],
    photosNote:
      "Bu bolumde hat gorselleri, paketleme alani ve sahadaki teknik detay fotograflari sergilenebilir.",
    outcomes: [
      "Daha y?ksek ?r?n standardi",
      "Kapasiteye uygun surekli hat ak???",
      "Sevkiyata hazir son ?r?n yapisi",
    ],
    similarProject: "?zel Proses ve Makine 0malat1 Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedSector: "Gübre Üretim Tesisleri",
    relatedSolutions: ["Proses Tasarimi ve M?hendislik", "Modernizasyon ve Revizyon"],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "deri-atik-isleme-tesisi-projeleri",
    title: "Deri Atık İşleme Tesisi Projeleri",
    summary:
      "Deri end?strisi kaynakli atiklarin ayrisma, tasima ve geri kazanima uygun sekilde islenmesi icin tesis kurgusu.",
    projectName: "Deri Atık Hazırlama ve İşleme Tesisi",
    location: "T?rkiye / Marmara",
    capacity: "8 ton/saat",
    customerType: "Sanayi tesisi",
    systems: ["Kiricilar ve Parcalayicilar", "Ta?x1ma Ekipmanlari", "Toz Toplama Sistemleri"],
    processSummary:
      "Deri atiklarin kontroll? sekilde boyutlandirilmasi, tasinmasi ve sonraki s?re?lere hazirlanmasi icin hat tasarlandi.",
    technicalScope: [
      "Parcalayici se?imi",
      "Bunker ve tasima hatti",
      "Toz toplama altyapisi",
      "Saha yerle?im koordinasyonu",
    ],
    photosNote:
      "Bu alana parcalama ekipmanlari, bunker yerlesimi ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Atik yonetim s?recinde duzen",
      "Daha g?venli isleme adimlari",
      "Sonraki geri kazanim s?recine uygun malzeme hazirligi",
    ],
    similarProject: "Geri Dönüşüm ve Atık Yönetimi Projeleri",
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Toz Toplama Sistemleri"],
    relatedSector: "Geri Dönüşüm ve Atık Yönetimi",
    relatedSolutions: ["Teknik Dan1?xmanl1k", "Proje Yönetimi ve Saha Koordinasyonu"],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952cauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "biyogaz-ve-atik-yonetimi-projeleri",
    title: "Biyogaz ve Atık Yönetimi Projeleri",
    summary:
      "Biyogaz besleme, organik madde hazirlama ve atik yonetim s?re?lerine uygun entegre proje yapisi.",
    projectName: "Biyogaz Besleme ve Atik Hazirlama Hatti",
    location: "T?rkiye / Ege",
    capacity: "15 ton/saat",
    customerType: "Enerji yatirimi ve isletmeci",
    systems: ["Depolama ve Besleme Sistemleri", "Ta?x1ma Ekipmanlari", "Kiricilar ve Parcalayicilar"],
    processSummary:
      "Organik madde kabulunden besleme oncesi hazirlama asamasina kadar uzanan duzenli bir on isleme hatti kuruldu.",
    technicalScope: [
      "Besleme bunkerleri",
      "Parcalama ve tasima ekipmanlari",
      "Silo ve tampon stok yapisi",
      "Saha koordinasyonu",
    ],
    photosNote:
      "Bu kisimda saha kurulumu, biyogaz on hazirlama hatti ve ekipman dizilim gorselleri kullanilabilir.",
    outcomes: [
      "Daha istikrarli besleme",
      "Daha kontroll? malzeme yonetimi",
      "Enerji tesisine uygun on hazirlik altyapisi",
    ],
    similarProject: "Kompost Tesisi Projeleri",
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Ta?x1ma Ekipmanlari"],
    relatedSector: "Enerji ve Biyogaz Sistemleri",
    relatedSolutions: ["Anahtar Teslim Tesis Kurulumu", "Proje Yönetimi ve Saha Koordinasyonu"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1ecauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projeleri",
    title: "?zel Proses ve Makine 0malat1 Projeleri",
    summary:
      "Sahaya ?zel olcu, kapasite ve proses ihtiyacina gore uyarlanmis ?zel makina ve sistem ??z?mleri.",
    projectName: "?zel Proses Hatti ve Makine ?Sretimi",
    location: "Yurt ici / Yurt disi",
    capacity: "Projeye ?zel",
    customerType: "Farkli sanayi kollari",
    systems: ["Reaktorler ve Tanklar", "Tambur Sistemleri", "Ta?x1ma Ekipmanlari"],
    processSummary:
      "Standart katalog disinda kalan proses gereksinimleri icin ?zel imalat ve hat entegrasyonu odakli ??z?m kurgulandi.",
    technicalScope: [
      "?zel tasarim ekipman",
      "M?hendislik ve projelendirme",
      "Atolye imalat s?reci",
      "Saha uyarlama ve entegrasyon",
    ],
    photosNote:
      "Bu bolume teknik cizimler, ?zel imalat detaylari ve uygulama fotograflari eklenebilir.",
    outcomes: [
      "Standart disi ihtiyaca uygun sistem",
      "Sahaya uyarlanmis makina yapisi",
      "S?re?e ?zel performans kazanimi",
    ],
    similarProject: "Organomineral G?bre Tesisi Projeleri",
    relatedMachines: ["Reaktorler ve Tanklar", "Tambur Sistemleri"],
    relatedSector: "Kimya ve Proses Endüstrisi",
    relatedSolutions: ["Makine Imalati", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985ccauto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "mineral-ve-dokme-kati-isleme-projeleri",
    title: "Mineral ve Dökme Katı İşleme Projeleri",
    summary:
      "Kirma, eleme, tasima, kurutma, siniflandirma ve stoklama s?re?lerine uygun mineral ve dokme kati malzeme proje ??z?mleri.",
    projectName: "Mineral ve Dökme Katı İşleme Projesi",
    location: "T?rkiye / Farkli saha senaryolari",
    capacity: "Projeye gore ?zel",
    customerType: "Madencilik ve proses yatirimlari",
    systems: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Ta?x1ma Ekipmanlari",
      "Depolama ve Besleme Sistemleri",
    ],
    processSummary:
      "Mineral ve dokme kati malzemenin kabulunden kirma, eleme, kurutma, siniflandirma ve stoklamaya kadar uzanan hat yapisi proses ve saha verilerine gore kurgulanir.",
    technicalScope: [
      "?Sr?n karakterizasyonu ve proses analizi",
      "Kirma, eleme ve siniflandirma kurgusu",
      "Ta?x1ma, stoklama ve transfer altyapisi",
      "Toz, asinma ve kapasite yonetimi",
    ],
    photosNote:
      "Bu alana kirma-eleme hatlari, tasima sistemleri, stoklama ??z?mleri ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Proses akisina uygun hat kurgusu",
      "Kapasiteye uygun ekipman se?imi",
      "Asinma ve toz yonetimi odakli tesis yaklasimi",
    ],
    similarProject: "?zel Proses ve Makine 0malat1 Projeleri",
    relatedMachines: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Ta?x1ma Ekipmanlari",
    ],
    relatedSector: "Madencilik ve Mineral İşleme",
    relatedSolutions: [
      "Proses Tasarimi ve M?hendislik",
      "Makine Imalati",
      "Anahtar Teslim Tesis Kurulumu",
    ],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42dacauto=format&fit=crop&w=1400&q=80",
  },
];

export const librarySections: { title: LibraryCategory; description: string }[] = [
  {
    title: "Blog / Makaleler",
    description: "Sekt?re yon veren, arama niyeti guclu makaleler ve konu kumeleri.",
  },
  {
    title: "Teknik Rehberler",
    description: "Karar s?recini destekleyen detayli teknik aciklamalar ve saha odakli rehberler.",
  },
  {
    title: "PDF Kataloglar",
    description: "Makina, ekipman ve sistem ailelerini toplu incelemeye yarayan katalog icerikleri.",
  },
  {
    title: "Video Icerikler",
    description: "Makina mantigi, proses akisleri ve saha uygulamalari icin anlatimli icerikler.",
  },
  {
    title: "Sik Sorulan Sorular",
    description: "Teknik ekiplerin ve yatirimcilarin en sik sordugu sorulara hizli cevaplar.",
  },
  {
    title: "Terimler Sozlugu",
    description: "Google icin y?ksek potansiyelli, temel kavramlari aciklayan otorite sayfalari.",
  },
  {
    title: "Programlar",
    description: "Hesaplama ara?lari, se?im programlari ve teknik yardimci ekranlari tek merkezde inceleyin.",
  },
];

export const libraryItems: LibraryItem[] = [
  {
    slug: "kompost-tesisi-nasil-kurulur",
    title: "Kompost Tesisi Nasil Kurulur",
    category: "Blog / Makaleler",
    summary: "Kompost tesisi kurulumunda saha, proses, ekipman ve kapasite planlamasinin temel adimlari.",
    heroTitle: "Kompost tesisi kurulumunda do?xru baslangic nasil yapilir?",
    heroDescription:
      "Kompost tesisi kurmak isteyen yatirimcilar icin saha se?imi, ekipman yapisi, proses ak??? ve kapasite planlamasini sade ama guclu sekilde acikliyoruz.",
    sections: [
      {
        heading: "Kurulum mantigi",
        text: "Kompost tesisleri yalnizca ekipman secimiyle de?xil; kabul alani, malzeme ak???, on hazirlama, kompostlama ve son ?r?n yonetimiyle birlikte ele alinmalidir.",
      },
      {
        heading: "Ekipman se?imi",
        text: "Tambur sistemleri, tasima ekipmanlari ve eleme sistemleri malzeme karakterine gore birlikte degerlendirilmelidir.",
      },
    ],
    relatedLinks: ["Kompost ?Sretiminde Tambur Sistemleri", "Organik Atiklarin Geri Kazanimi"],
  },
  {
    slug: "kompost-uretiminde-tambur-sistemleri",
    title: "Kompost ?Sretiminde Tambur Sistemleri",
    category: "Teknik Rehberler",
    summary: "Kompost tamburlarinin neden tercih edildigi, hangi asamada kullanildigi ve se?im kriterleri.",
    heroTitle: "Kompost ?retiminde tambur sistemleri neden kritik rol oynar?",
    heroDescription:
      "Kompost proseslerinde tambur yapisinin sure, karisim, havalandirma ve verim acisindan sagladigi farklari teknik olarak ele aliyoruz.",
    sections: [
      {
        heading: "Tambur ne saglar",
        text: "Kompost tamburu s?reci hizlandirabilir, homojenligi artirabilir ve saha operasyonunu daha kontroll? hale getirebilir.",
      },
      {
        heading: "se?im kriterleri",
        text: "Malzeme tipi, nem, hedef kapasite ve beklenen olgunlasma mantigi secimde belirleyici olur.",
      },
    ],
    relatedLinks: ["Kompost Tamburu Nedir", "Kompost Tesisi Nasil Kurulur"],
  },
  {
    slug: "organik-atiklarin-geri-kazanimi",
    title: "Organik Atiklarin Geri Kazanimi",
    category: "Blog / Makaleler",
    summary: "Organik atiklarin ekonomik ve cevresel deger uretecek sekilde nasil geri kazanilabilecegi.",
    heroTitle: "Organik atiklar nasil ekonomik deger ureten bir s?re?e donusebilir?",
    heroDescription:
      "Kompost, biyogaz ve farkli proses modelleriyle organik atiklarin geri kazanimi icin uygulanabilir yol haritalarini anlatiyoruz.",
    sections: [
      {
        heading: "Geri kazanim modelleri",
        text: "Kompostlama, biyogaz ve farkli on isleme yontemleri atik karakterine gore secilir.",
      },
      {
        heading: "Tesis etkisi",
        text: "Do?xru ekipman ve s?re? tasar1m1 geri kazan1m oranini do?xrudan etkiler.",
      },
    ],
    relatedLinks: ["Biyogaz ve Atık Yönetimi Projeleri", "Kompost Tesisi Nasil Kurulur"],
  },
  {
    slug: "organomineral-gubre-uretim-sureci",
    title: "Organomineral G?bre ?Sretim S?reci",
    category: "Blog / Makaleler",
    summary: "Organomineral g?bre ?retiminde hammadde, karisim, granulasyon ve son ?r?n adimlari.",
    heroTitle: "Organomineral g?bre ?retim s?reci hangi adimlardan olusur?",
    heroDescription:
      "Hammadde seciminden granulasyon ve paketlemeye kadar organomineral g?bre ?retiminin temel proses yapisini acikliyoruz.",
    sections: [
      {
        heading: "?Sretim adimlari",
        text: "Karistirma, dozajlama, granulasyon, kurutma, eleme ve paketleme s?reci birlikte planlanir.",
      },
      {
        heading: "Kritik noktalar",
        text: "Nem kontrol?, ?r?n homojenligi ve granul kalitesi sistem secimini do?xrudan etkiler.",
      },
    ],
    relatedLinks: ["Gran?lasyon Nedir", "G?bre Gran?lasyon Hatti Nasil ?!al1?x1r"],
  },
  {
    slug: "gubre-granulasyon-hatti-nasil-calisir",
    title: "G?bre Gran?lasyon Hatti Nasil ?!al1?x1r",
    category: "Teknik Rehberler",
    summary: "Gran?lasyon hattinin tambur, eleme, geri donus ve paketleme mantigi.",
    heroTitle: "G?bre granulasyon hatti hangi ekipmanlarla ve nasil calisir?",
    heroDescription:
      "Gran?l ol?st?rma, kurutma, siniflandirma ve geri donus akisini sistem bazinda anlatiyoruz.",
    sections: [
      {
        heading: "Hat yapisi",
        text: "Gran?lasyon hattinda hammadde hazirlama, tambur, eleme, geri donus ve paketleme istasyonlari birlikte ele alinmalidir.",
      },
      {
        heading: "Verim unsurlari",
        text: "Kapasite se?imi, ?r?n nemi ve geri donus orani hat verimi uzerinde belirleyicidir.",
      },
    ],
    relatedLinks: ["Organomineral G?bre ?Sretim S?reci", "Tambur Kurutma Sistemleri Nasil ?!al1?x1r"],
  },
  {
    slug: "gubre-fabrikasi-maliyeti-2026",
    title: "G?bre Fabrikasi Maliyeti 2026",
    category: "Blog / Makaleler",
    summary: "G?bre fabrikasi yatiriminda maliyeti etkileyen ekipman, kapasite ve proses basliklari.",
    heroTitle: "G?bre fabrikasi maliyeti 2026 yilinda hangi kalemlere gore degisir?",
    heroDescription:
      "Kapasite, ?r?n tipi, otomasyon seviyesi ve ekipman yapisinin yatirim maliyetine etkisini ana basliklar halinde ele aliyoruz.",
    sections: [
      {
        heading: "Maliyet kalemleri",
        text: "Ekipman, kurulum, otomasyon, enerji ve saha altyapisi toplam yatirim icinde belirleyici rol oynar.",
      },
      {
        heading: "Do?xru planlama",
        text: "Pilot test, proses tasar1m1 ve do?xru ekipman se?imi gereksiz yatirim risklerini azaltir.",
      },
    ],
    relatedLinks: ["Teknik Dan1?xmanl1k", "Anahtar Teslim Tesis Kurulumu Nedir"],
  },
  {
    slug: "tambur-kurutma-sistemleri-nasil-calisir",
    title: "Tambur Kurutma Sistemleri Nasil ?!al1?x1r",
    category: "Teknik Rehberler",
    summary: "Tambur kurutucularin ?al??ma prensibi, kullanim alanlari ve se?im kriterleri.",
    heroTitle: "Tambur kurutma sistemleri nasil calisir ve nerelerde kullanilir?",
    heroDescription:
      "Tambur kurutucularin isi transferi, ?r?n hareketi ve kapasite mantigini sade ama teknik bir dille anlatiyoruz.",
    sections: [
      {
        heading: "?!al1?xma mantigi",
        text: "Malzeme tambur icinde ilerlerken sicak hava ile temas eder ve istenen neme do?xru ilerler.",
      },
      {
        heading: "se?im kriterleri",
        text: "Malzemenin nemi, tane yapisi, sicaklik hassasiyeti ve hedef kapasite kritik rol oynar.",
      },
    ],
    relatedLinks: ["Tambur Sistemleri", "Gran?lasyon Nedir"],
  },
  {
    slug: "bant-konveyor-secimi-nasil-yapilir",
    title: "Bant Konveyor se?imi Nasil Yapilir",
    category: "Teknik Rehberler",
    summary: "Mesafe, egim, kapasite ve malzeme tipine gore bant konveyor se?im kriterleri.",
    heroTitle: "Bant konveyor se?imi yaparken hangi kriterlere dikkat edilmeli?",
    heroDescription:
      "Hat uzunlugu, ?r?n tipi, tasima hizi ve saha ko?ullar?na gore bant konveyor seciminin temel mantigini acikliyoruz.",
    sections: [
      {
        heading: "Tasarim kriterleri",
        text: "Kapasite, bant genisligi, tasima mesafesi ve yukleme bosaltma noktasi ilk belirleyicilerdir.",
      },
      {
        heading: "Saha uyumu",
        text: "Yukseklik farki, toz kontrol? ve hat ici baglantilar tasarim kararlarini etkiler.",
      },
    ],
    relatedLinks: ["Ta?x1ma Ekipmanlari", "Toz Toplama Sistemleri Neden Onemlidir"],
  },
  {
    slug: "endustriyel-kirici-tipleri-ve-kullanim-alanlari",
    title: "Endustriyel Kirici Tipleri ve Kullanim Alanlari",
    category: "Blog / Makaleler",
    summary: "?!eki?li degirmen, ceneli k1r1c1, zincirli k1r1c1 ve parcalayici tiplerinin kullanim farklari.",
    heroTitle: "Endustriyel kirici tipleri ve kullanim alanlari nasil ayrisir?",
    heroDescription:
      "Farkli malzemeler icin kullanilan kirici ve parcalayici tiplerini proses mantigina gore karsilastiriyoruz.",
    sections: [
      {
        heading: "Kirici tipleri",
        text: "Malzemenin sertligi, nemi ve hedef parcacik boyutu kirici seciminde ana parametrelerdir.",
      },
      {
        heading: "Kullanim senaryolari",
        text: "Mineral, organik atik ve geri d?n???m malzemelerinde farkli kirici tipleri one cikar.",
      },
    ],
    relatedLinks: ["Kiricilar ve Parcalayicilar", "Madencilik ve Mineral İşleme"],
  },
  {
    slug: "anahtar-teslim-tesis-kurulumu-nedir",
    title: "Anahtar Teslim Tesis Kurulumu Nedir",
    category: "Sik Sorulan Sorular",
    summary: "Anahtar teslim modelin ne oldugu, neleri kapsadigi ve neden tercih edildigi.",
    heroTitle: "Anahtar teslim tesis kurulumu ne anlama gelir?",
    heroDescription:
      "Tek muhatapla yurutulen tesis kurulum modelinin kapsamini, avantajlarini ve proje yonetim etkisini acikliyoruz.",
    sections: [
      {
        heading: "Kapsam",
        text: "M?hendislikten saha kurulumuna kadar bir?ok adim ayni koordinasyon yapisi altinda toplanir.",
      },
      {
        heading: "Avantaj",
        text: "S?re? butunlugu, zaman kontrol? ve daha net sorumluluk dagilimi saglar.",
      },
    ],
    relatedLinks: ["Anahtar Teslim Tesis Kurulumu", "Proje Yönetimi ve Saha Koordinasyonu"],
  },
  {
    slug: "endustriyel-proses-tasariminda-dikkat-edilecekler",
    title: "Endustriyel Proses Tasariminda Dikkat Edilecekler",
    category: "Teknik Rehberler",
    summary: "Kapasite, ak1?x, enerji, g?venlik ve i?xletme mantigi acisindan proses tasar1m1 notlari.",
    heroTitle: "Endustriyel proses tasariminda hangi basliklar kritik oneme sahiptir?",
    heroDescription:
      "Tesis yatiriminin erken asamasinda do?xru proses kararlarini vermek icin temel teknik basliklari bir araya getiriyoruz.",
    sections: [
      {
        heading: "Baslangic verisi",
        text: "Malzeme tipi, kapasite ihtiyaci, ?r?n hedefi ve saha gercegi ayni tabloda degerlendirilmelidir.",
      },
      {
        heading: "0?xletme etkisi",
        text: "Do?xru proses tasar1m1 sadece yatirimi de?xil, uzun vadeli isletme maliyetlerini de belirler.",
      },
    ],
    relatedLinks: ["Proses Tasarimi ve M?hendislik", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
  },
  {
    slug: "toz-toplama-sistemleri-neden-onemlidir",
    title: "Toz Toplama Sistemleri Neden Onemlidir",
    category: "Sik Sorulan Sorular",
    summary: "Toz toplama sistemlerinin is g?venligi, ekipman korumasi ve kalite uzerindeki etkisi.",
    heroTitle: "Toz toplama sistemleri neden sadece ek ekipman de?xil, ana proses unsurudur?",
    heroDescription:
      "Toz kontrolunun saha temizligi, ?r?n kaybi, is g?venligi ve ekipman ?mr? acisindan neden kritik oldugunu anlatiyoruz.",
    sections: [
      {
        heading: "Operasyon etkisi",
        text: "Toz kontrol? olmayan sistemlerde ekipman asinmasi, saha kirliligi ve kayiplar daha hizli artar.",
      },
      {
        heading: "Sistem se?imi",
        text: "Jet pulse, siklon ve torba filtre se?imi hava debisi ve toz karakterine gore yapilmalidir.",
      },
    ],
    relatedLinks: ["Toz Toplama Sistemleri", "Kimya ve Proses Endüstrisi"],
  },
  {
    slug: "granulasyon-nedir",
    title: "Gran?lasyon Nedir",
    category: "Terimler Sozlugu",
    summary: "Toz veya ince malzemenin belirli boyutta granul forma getirilme s?recinin tanimi.",
    heroTitle: "Gran?lasyon nedir?",
    heroDescription:
      "Gran?lasyon; ince taneli veya toz formdaki malzemenin, proses yardimiyla daha duzenli ve kullanilabilir granul forma don?st?rulmesidir.",
    sections: [
      {
        heading: "Neden kullanilir",
        text: "Depolama, tasima, uygulama kolayligi ve ?r?n standardi saglamak icin granulasyon tercih edilir.",
      },
      {
        heading: "Hangi alanlarda gorulur",
        text: "G?bre, kimya ve dokme kati malzeme proseslerinde sik kullanilir.",
      },
    ],
    relatedLinks: ["G?bre Gran?lasyon Hatti Nasil ?!al1?x1r", "Organomineral G?bre Nedir"],
  },
  {
    slug: "trommel-nedir",
    title: "Trommel Nedir",
    category: "Terimler Sozlugu",
    summary: "Doner elek mantigiyla calisan, malzemeyi boyuta gore ayiran siniflandirma ekipmani.",
    heroTitle: "Trommel nedir?",
    heroDescription:
      "Trommel; doner elek prensibiyle calisan ve malzemeyi farkli tane boylarina gore ayirmaya yarayan bir siniflandirma sistemidir.",
    sections: [
      {
        heading: "?!al1?xma mantigi",
        text: "Malzeme donen govde icinde ilerlerken goz acikligina gore ayrisir.",
      },
      {
        heading: "Nerede kullanilir",
        text: "Kompost, geri d?n???m ve dokme kati malzeme siniflandirma hatlarinda yaygindir.",
      },
    ],
    relatedLinks: ["Eleme ve Siniflandirma Sistemleri", "Kompost ?Sretiminde Tambur Sistemleri"],
  },
  {
    slug: "organomineral-gubre-nedir",
    title: "Organomineral G?bre Nedir",
    category: "Terimler Sozlugu",
    summary: "Organik ve mineral bilesenleri bir araya getiren g?bre t?r?nun temel tanimi.",
    heroTitle: "Organomineral g?bre nedir?",
    heroDescription:
      "Organomineral g?bre, organik kaynakli maddeler ile mineral besin elementlerinin birlikte bulundugu g?bre turudur.",
    sections: [
      {
        heading: "Yapi",
        text: "Organik icerik ile mineral besin elementlerini ayni ?r?n yapisinda birlestirir.",
      },
      {
        heading: "?Sretim s?reci",
        text: "Karistirma, granulasyon ve kurutma gibi proses adimlariyla nihai ?r?n haline gelir.",
      },
    ],
    relatedLinks: ["Organomineral G?bre ?Sretim S?reci", "Gran?lasyon Nedir"],
  },
  {
    slug: "kompost-tamburu-nedir",
    title: "Kompost Tamburu Nedir",
    category: "Terimler Sozlugu",
    summary: "Kompost prosesinde malzemenin kontroll? karisimi ve ilerlemesi icin kullanilan tambur sistemi.",
    heroTitle: "Kompost tamburu nedir?",
    heroDescription:
      "Kompost tamburu, organik malzemenin daha kontroll? sekilde karistirilmasi ve ilerletilmesi icin kullanilan doner proses ekipmanidir.",
    sections: [
      {
        heading: "Fonksiyon",
        text: "Homojenligi artirir, s?reci hizlandirabilir ve saha operasyonunu daha duzenli hale getirir.",
      },
      {
        heading: "Kullanim alani",
        text: "Kompost tesislerinde farkli organik atiklarin on isleme ve kompostlama asamalarinda kullanilir.",
      },
    ],
    relatedLinks: ["Kompost ?Sretiminde Tambur Sistemleri", "Kompost Tesisi Nasil Kurulur"],
  },
];

function normalizeTextTree<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    if (key === "slug" || key === "href" || key === "image") {
      return value;
    }

    return trText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextTree(item)) as T;
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};

    for (const [entryKey, entryValue] of Object.entries(value as Record<string, unknown>)) {
      output[entryKey] = normalizeTextTree(entryValue, entryKey);
    }

    return output as T;
  }

  return value;
}

function normalizeCollectionInPlace<T extends object[]>(collection: T) {
  for (let index = 0; index < collection.length; index += 1) {
    collection[index] = normalizeTextTree(collection[index]);
  }
}

normalizeCollectionInPlace(solutions);
normalizeCollectionInPlace(sectors);
normalizeCollectionInPlace(machineGroups);
normalizeCollectionInPlace(services);
normalizeCollectionInPlace(projects);
normalizeCollectionInPlace(libraryItems);

