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
  | "Terimler Sozlugu";

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
      "Markanizin global pazarlarda daha guclu konumlanmasi icin stratejik basvuru, gelisim ve surec yonetimi sunuyoruz.",
    ctaLabel: "Turquality ile Tanişin",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "greenquality-hizmetleri",
    navTitle: "Greenquality Hizmetleri",
    title: "Greenquality",
    heroEyebrow: "Greenquality",
    heroTitle: "Surdurulebilir ve verimli uygulamalar gelistirin.",
    heroDescription:
      "Yesil donusum hedefleri dogrultusunda surdurulebilirlik, uyum ve rekabet avantajini birlikte planliyoruz.",
    ctaLabel: "Greenquality ile Tanişin",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "dijital-donusum-hizmetleri",
    navTitle: "Dijital Donusum Hizmetleri",
    title: "Dijital Donusum",
    heroEyebrow: "Dijital Donusum",
    heroTitle: "Sureclerinizi daha hizli, olculebilir ve verimli hale getirin.",
    heroDescription:
      "Operasyonlarinizi daha izlenebilir, olculebilir ve hizli hale getiren kurumsal donusum adimlari tasarliyoruz.",
    ctaLabel: "Donusumu Kesfedin",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kurumsallasma-danismanligi",
    navTitle: "Kurumsallasma Danismanligi",
    title: "Kurumsallasma",
    heroEyebrow: "Kurumsallasma",
    heroTitle: "Sirket yapinizi buyumeye hazir, saglam bir zemine oturtun.",
    heroDescription:
      "Buyume yolculugunda sirket yapinizi guclendiren yonetim modeli, rol dagilimi ve surec altyapisi kuruyoruz.",
    ctaLabel: "Kurumsallasmayi Inceleyin",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "egitim-hizmetleri",
    navTitle: "Egitim Hizmetleri",
    title: "Egitim Hizmetleri",
    heroEyebrow: "Egitim",
    heroTitle: "Ekiplerinizi degisime hazirlayan uygulamali egitim programlari.",
    heroDescription:
      "Yonetim, donusum ve saha uygulamalarina yonelik egitimlerle ekibinizin bilgi ve uygulama kapasitesini guclendiriyoruz.",
    ctaLabel: "Egitimleri Inceleyin",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const sectors: SectorItem[] = [
  {
    slug: "gubre-ve-granulasyon-tesisleri",
    title: "Gubre ve Granulasyon Tesisleri",
    summary:
      "Granul ve toz gubre uretim hatlari icin proses tasarimi, ekipman secimi ve tesis kurgusu.",
    heroTitle: "Gubre ve granulasyon tesislerinde yuksek verim ve surekli kalite.",
    heroDescription:
      "Ham madde hazirlamadan granule etme, kurutma, eleme, sogutma ve paketlemeye kadar tum sureci tek bir tesis mantigiyla planliyoruz.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kompost-ve-organik-atik-tesisleri",
    title: "Kompost ve Organik Atik Tesisleri",
    summary:
      "Organik atiklarin geri kazanimi icin kompost prosesleri, tambur sistemleri ve saha kurulumlari.",
    heroTitle: "Kompost ve organik atik tesislerinde kontrollu, verimli proses yapisi.",
    heroDescription:
      "Atik karakterine ve kapasiteye uygun tesis tasarimi ile organik atiklari degerli urune donusturen altyapiyi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral Isleme",
    summary:
      "Kirma, eleme, tasima ve mineral hazirlama adimlarina uygun ekipman ve hat kurgulari.",
    heroTitle: "Madencilik ve mineral islemede dayanikli ekipman ve surec surekliligi.",
    heroDescription:
      "Yuksek asinma kosullarina uygun mekanik altyapi ve proses akisi ile sahada uzun omurlu sistemler kurguluyoruz.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses Endustrisi",
    summary:
      "Reaktor, dozajlama, kurutma ve tasima sistemleriyle proses guvenligi ve verim odakli kurgu.",
    heroTitle: "Kimya ve proses endustrisi icin kontrollu uretim ve hassas ekipman secimi.",
    heroDescription:
      "Reaksiyon, karistirma, depolama ve transfer asamalarinda urun guvenligi ve proses kararliligini merkeze aliyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri Donusum ve Atik Yonetimi",
    summary:
      "Parcalama, ayrisma, tasima ve geri kazanim odakli tesis cozumleriyle atik yonetim altyapisi.",
    heroTitle: "Geri donusum ve atik yonetiminde islenebilir, olceklenebilir sistemler.",
    heroDescription:
      "Farkli atik akislari icin parcalama, siniflandirma ve surec yonetimini tek cati altinda topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary:
      "Biyogaz besleme, organik madde hazirlama ve yardimci proses ekipmanlariyla enerji odakli tesis yapisi.",
    heroTitle: "Enerji ve biyogaz sistemlerinde istikrarli besleme ve surdurulebilir isletme.",
    heroDescription:
      "Biyogaz tesislerinin on hazirlik ve malzeme yonetimi adimlarini daha verimli hale getiren ekipman kurgulari sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "Atik Su Camuru ve Aritma Cozumleri",
    summary:
      "Camur tasima, susuzlastirma sonrasi hazirlama ve kurutma adimlarina uygun proses cozumleri.",
    heroTitle: "Atik su camuru ve aritma cozumlerinde kontrollu isleme altyapisi.",
    heroDescription:
      "Aritma tesislerinden gelen farkli karakterdeki camurlar icin depolama, tasima ve kurutma odakli sistemler tasarliyoruz.",
    image:
      "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri",
    summary:
      "Dokme kati malzemelerde depolama, dozajlama, tasima, kurutma ve karistirma surecleri icin hat tasarimi.",
    heroTitle: "Dokme kati malzeme islemede hassas tasima ve dengeli proses akisi.",
    heroDescription:
      "Yem, toz ve benzeri malzemelerde akiskanlik, nem ve kapasite degiskenlerini dikkate alan ekipman secimi sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  },
];

export const machineGroups: MachineGroupItem[] = [
  {
    slug: "tambur-sistemleri",
    title: "Tambur Sistemleri",
    summary:
      "Kurutma, kompost, granülasyon ve sogutma gibi farklı prosesler için tek çatı tambur çözümleri.",
    shortDescription:
      "Tamburlari tek sayfada toplayip ihtiyaca gore kurutma, kompost, granülasyon ve sogutma varyantlari sunuyoruz.",
    heroTitle: "Tambur sistemlerinde prosese göre doğru kurgu ve doğru kapasite seçimi.",
    heroDescription:
      "Kurutma tamburu, kompost tamburu, granülasyon tamburu ve sogutma tamburu seçeneklerini aynı yapı içinde sunarak ürün ve proses uyumunu güçlendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    variants: [
      "Kurutma Tamburlari",
      "Kompost Tamburlari",
      "Granulasyon Tamburlari",
      "Sogutma Tamburlari",
    ],
    technicalSpecs: [
      "Asinmaya dayanikli govde yapisi",
      "Farkli cap ve boy secenekleri",
      "Ayarlanabilir donus hizi",
      "Tahrik, sasi ve ic kaplama alternatifleri",
    ],
    capacities: ["5-100 ton/saat", "Projeye gore ozel cap ve uzunluk"],
    applications: [
      "Gubre uretim hatlari",
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
    materialTypes: ["Organik atik", "Granul gubre", "Mineral", "Camur ve yari nemli malzeme"],
    advantages: [
      "Yuksek isleme verimi",
      "Surekli hat entegrasyonu",
      "Bakim dostu mekanik yapi",
      "Prosese ozel ic geometri secenekleri",
    ],
    relatedSectors: [
      "Gubre ve Granulasyon Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atik Su Camuru ve Aritma Cozumleri",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: [
      "Kompost Tesisi Projeleri",
      "Organomineral Gubre Tesisi Projeleri",
      "Ozel Proses ve Makine Imalati",
    ],
    faqs: [
      {
        question: "Tambur tipi nasil secilir?",
        answer:
          "Malzemenin nemi, tane yapisi, hedef kapasite ve proses amacina gore kurutma, kompost, granulasyon veya sogutma tamburu belirlenir.",
      },
      {
        question: "Tamburlar ozel olculerde uretilebilir mi?",
        answer:
          "Evet, saha kosullari ve kapasite ihtiyacina gore cap, uzunluk, tahrik ve ic tasarim ozellestirilebilir.",
      },
    ],
  },
  {
    slug: "tasima-ekipmanlari",
    title: "Tasima Ekipmanlari",
    summary:
      "Bant konveyor, helezon, kovali elevatör ve zincirli konveyor gibi taşıma ekipmanlarini tek çatı altında topluyoruz.",
    shortDescription:
      "Helezon, elevatör ve konveyor gruplarini dagitmadan ayni kategori icinde sunuyoruz.",
    heroTitle: "Tasima ekipmanlarinda dengeli akış, güvenli transfer ve sürekli hat bağlantisi.",
    heroDescription:
      "Bant konveyorler, helezon konveyorler, kovali elevatörler ve zincirli konveyorler ile hammadde ve ürün transferini süreçle uyumlu hale getiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5902?auto=format&fit=crop&w=1400&q=80",
    variants: [
      "Bant Konveyorler",
      "Helezon Konveyorler",
      "Kovali Elevatorler",
      "Zincirli Konveyorler",
    ],
    technicalSpecs: [
      "Farkli hat uzunlugu ve egim secenekleri",
      "Asinmaya dayanikli tasiyici yuzey",
      "Degisken hiz kontrollu surucu opsiyonu",
      "Kapali veya acik govde secenekleri",
    ],
    capacities: ["1-250 ton/saat", "Malzeme yogunluguna gore ozel projelendirme"],
    applications: [
      "Gubre tesisleri",
      "Kompost hatlari",
      "Biyogaz besleme sistemleri",
      "Dokme kati malzeme transferi",
    ],
    optionalEquipment: [
      "Manyetik ayirici entegrasyonu",
      "Tartim sistemleri",
      "Kapali toz kontrollu hatlar",
      "Platform ve yurume yollari",
    ],
    materialTypes: ["Toz urun", "Granul urun", "Organik malzeme", "Mineral ve dokme kati"],
    advantages: [
      "Hat ici duzenli transfer",
      "Dusuk isletme kaybi",
      "Sahaya gore esnek yerlesim",
      "Farkli ekipmanlarla kolay entegrasyon",
    ],
    relatedSectors: [
      "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri",
      "Enerji ve Biyogaz Sistemleri",
      "Geri Donusum ve Atik Yonetimi",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Makine Imalati"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Hangi tasima ekipmani secilmeli?",
        answer:
          "Malzeme tipi, mesafe, egim, nem orani ve istenen kapasiteye gore bant, helezon, elevatör veya zincirli konveyor secilir.",
      },
      {
        question: "Kapali sistem cozumleri sunuyor musunuz?",
        answer:
          "Evet, tozlu veya kokulu urunler icin kapali govde ve filtre entegrasyonlu tasima hatlari projelendirebiliyoruz.",
      },
    ],
  },
  {
    slug: "kiricilar-ve-parcalayicilar",
    title: "Kiricilar ve Parcalayicilar",
    summary:
      "Cekicli degirmen, zincirli kirici, ceneli kirici, primer kirici ve tek/çift milli parçalayıcıları tek grupta sunuyoruz.",
    shortDescription:
      "Kirici ve parcalayici seceneklerini uygulama turune gore ayni sayfada karsilastirmali sunuyoruz.",
    heroTitle: "Kirici ve parcalayicilarda malzemeye uygun kademeli boyut dusurme.",
    heroDescription:
      "Hammadde hazirlama ve geri kazanim sureclerinde farkli malzemeler icin uygun kirma ve parcalama cozumlerini tek cati altinda topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    variants: [
      "Cekicli Degirmen",
      "Zincirli Kirici",
      "Ceneli Kirici",
      "Primer Kirici",
      "Cift Milli Parcalayici",
      "Tek Milli Parcalayici",
    ],
    technicalSpecs: [
      "Yuksek dayanımlı govde yapisi",
      "Degistirilebilir asinma parcasi setleri",
      "Farkli rotor ve bicak konfigürasyonlari",
      "Besleme olcusune gore ozel giris agzi",
    ],
    capacities: ["2-80 ton/saat", "Malzeme sertligine gore ozel secim"],
    applications: [
      "Geri donusum tesisleri",
      "Mineral isleme",
      "Gubre ve organik hammadde hazirlama",
      "Atik azaltma hatlari",
    ],
    optionalEquipment: [
      "Manyetik ayirma",
      "Besleme bunkeri",
      "Konveyor entegrasyonu",
      "Toz toplama baglantisi",
    ],
    materialTypes: ["Plastik", "Organik atik", "Mineral", "Topak urun ve dokme malzeme"],
    advantages: [
      "Istikrarlı boyut küçültme",
      "Prosese uygun farkli parcalama seviyeleri",
      "Asinmaya karsi guclu yapi",
      "Bakim kolayligi",
    ],
    relatedSectors: [
      "Geri Donusum ve Atik Yonetimi",
      "Madencilik ve Mineral Isleme",
      "Kompost ve Organik Atik Tesisleri",
    ],
    relatedServices: ["Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Ozel Proses ve Makine Imalati", "Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Tek milli mi cift milli mi secilmeli?",
        answer:
          "Malzemenin tipi, hedef parcacik boyutu ve besleme duzensizligi dikkate alinarak tek veya cift milli secim yapilir.",
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
      "Karıştırıcılı reaktörler, çözündürme tankları, stok tankları ve basınçlı reaktörleri tek çatı altında topluyoruz.",
    shortDescription:
      "Tanklari ve reaktorleri ayirmadan ayni proses ailesi icinde sunuyoruz.",
    heroTitle: "Reaktor ve tank cozumlerinde kontrollu reaksiyon, depolama ve karistirma altyapisi.",
    heroDescription:
      "Karistiricili reaktorler, cozumdurme tanklari, stok tanklari ve basincli reaktorlerle kimyasal ve proses hatlarina uygun altyapi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
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
    capacities: ["500 litre - 100 m3+", "Proses ihtiyacina gore ozel imalat"],
    applications: [
      "Kimya tesisleri",
      "Sivi gubre hatlari",
      "Hammadde hazirlama ve depolama",
      "Reaksiyon ve cozumdurme prosesleri",
    ],
    optionalEquipment: [
      "Loadcell sistemleri",
      "Seviye ve sicaklik sensorleri",
      "Dozaj pompasi entegrasyonu",
      "Platform ve servis merdiveni",
    ],
    materialTypes: ["Kimyasal solusyonlar", "Sivi gubre", "Proses sivisi", "Bulamac ve karisimlar"],
    advantages: [
      "Prosese gore ozellestirme",
      "Guvenli depolama ve reaksiyon ortami",
      "Bakim ve temizlik kolayligi",
      "Uzun omurlu govde tasarimi",
    ],
    relatedSectors: [
      "Kimya ve Proses Endustrisi",
      "Gubre ve Granulasyon Tesisleri",
      "Atik Su Camuru ve Aritma Cozumleri",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Makine Imalati"],
    relatedProjects: ["Organomineral Gubre Tesisi Projeleri", "Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Hangi tank malzemesi kullanilmali?",
        answer:
          "Akiskan tipi, sicaklik, kimyasal etkilesim ve basinç gereksinimine gore paslanmaz veya karbon celik tercih edilir.",
      },
      {
        question: "Basincli reaktorler ozel hesapla mi yapiliyor?",
        answer:
          "Evet, basinç, sicaklik ve proses kosullarina gore muhendislik hesaplariyla projelendirme yapilir.",
      },
    ],
  },
  {
    slug: "eleme-ve-siniflandirma-sistemleri",
    title: "Eleme ve Siniflandirma Sistemleri",
    summary:
      "Döner elek, vibrasyonlu elek ve trommel sistemlerini aynı kategori içinde sunuyoruz.",
    shortDescription:
      "Eleme sistemlerini ayri ayri dagitmadan ayni grup icinde secenekli olarak listeliyoruz.",
    heroTitle: "Eleme ve siniflandirma sistemlerinde temiz ayirma ve dengeli ürün akisi.",
    heroDescription:
      "Döner elek, vibrasyonlu elek ve trommel sistemleri ile farkli tane boyutlari icin net siniflandirma yapisi kuruyoruz.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    variants: ["Doner Elek", "Vibrasyonlu Elek", "Trommel Sistemleri"],
    technicalSpecs: [
      "Farkli goz acikligi secenekleri",
      "Titreşim veya donus bazli ayirma mekanizmasi",
      "Asinmaya dayanikli elek yuzeyi",
      "Hat ici veya bagimsiz kurulum secenekleri",
    ],
    capacities: ["3-120 ton/saat", "Malzeme tane boyuna gore degisken kapasite"],
    applications: [
      "Kompost siniflandirma",
      "Granul urun eleme",
      "Geri donusum akisi ayirma",
      "Mineral ve dokme kati siniflandirma",
    ],
    optionalEquipment: ["Toz emme baglantisi", "By-pass hatti", "Alt-ust urun konveyorleri"],
    materialTypes: ["Granul", "Toz", "Organik karisim", "Kuru mineral urun"],
    advantages: [
      "Net urun siniflandirmasi",
      "Hat verimini artirma",
      "Farkli elek tipleriyle esnek secim",
      "Bakim kolayligi",
    ],
    relatedSectors: [
      "Kompost ve Organik Atik Tesisleri",
      "Gubre ve Granulasyon Tesisleri",
      "Madencilik ve Mineral Isleme",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral Gubre Tesisi Projeleri"],
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
      "Jet pulse filtreler, siklonlar ve torba filtreleri tek çatı filtreleme kategorisinde topluyoruz.",
    shortDescription:
      "Filtreleme ekipmanlarini ayri sayfalara bolmeden ortak bir sistem mantigiyla sunuyoruz.",
    heroTitle: "Toz toplama sistemlerinde temiz hava, ekipman korumasi ve daha duzenli isletme.",
    heroDescription:
      "Jet pulse filtreler, siklonlar ve torba filtrelerle toz kontrolunu surece uygun sekilde yonetiyoruz.",
    image:
      "https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&w=1400&q=80",
    variants: ["Jet Pulse Filtreler", "Siklonlar", "Torba Filtreler"],
    technicalSpecs: [
      "Farkli filtre yüzeyi secenekleri",
      "Hava debisine uygun fan entegrasyonu",
      "Toz toplama bunkeri ve valf secenekleri",
      "Hat ici veya merkezi filtre sistemi kurulumu",
    ],
    capacities: ["1.000 - 100.000 m3/h", "Prosese gore fan ve filtre secimi"],
    applications: [
      "Kurutma hatlari",
      "Kirma ve eleme sistemleri",
      "Torbalama ve dolum alanlari",
      "Tozlu dokme kati malzeme prosesleri",
    ],
    optionalEquipment: ["Rotary valve", "Ex-proof ekipman", "Diferansiyel basinç takibi"],
    materialTypes: ["Toz urun", "Ince partikullu malzeme", "Granul kirintisi"],
    advantages: [
      "Daha temiz calisma ortami",
      "Hat ekipmanlarini koruma",
      "Toz kaybini azaltma",
      "Is guvenligini destekleme",
    ],
    relatedSectors: [
      "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri",
      "Kimya ve Proses Endustrisi",
      "Gubre ve Granulasyon Tesisleri",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Organomineral Gubre Tesisi Projeleri", "Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Filtre secimi nasil yapiliyor?",
        answer:
          "Toz yukü, hava debisi, partikül karakteri ve saha yerlesimine gore jet pulse, siklon veya torba filtre secilir.",
      },
      {
        question: "Patlama riskli alanlarda cozum var mi?",
        answer:
          "Evet, gerekli oldugunda ex-proof ekipman ve uygun guvenlik ekipmanlariyla cozum sunulabilir.",
      },
    ],
  },
  {
    slug: "paketleme-ve-dolum-sistemleri",
    title: "Paketleme ve Dolum Sistemleri",
    summary:
      "Açık ağız torbalama, big bag dolum ve şişeleme/dolum hatlarini tek çatı dolum grubunda birleştiriyoruz.",
    shortDescription:
      "Torbalama ve dolum seceneklerini tek sistem ailesi icinde sunuyoruz.",
    heroTitle: "Paketleme ve dolum sistemlerinde düzenli tartim, temiz dolum ve hizli cikis.",
    heroDescription:
      "Acik agiz torbalama, big bag dolum ve sisleme/dolum hatlari ile urunun son asamadaki sevk hazirligini guclendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    variants: ["Acik Agiz Torbalama", "Big Bag Dolum", "Siseleme ve Dolum Hatlari"],
    technicalSpecs: [
      "Tartim kontrollu dolum altyapisi",
      "Yari otomatik veya otomatik sistem secenekleri",
      "Konveyor ve dikis/kapama entegrasyonu",
      "Farkli ambalaj tiplerine uyum",
    ],
    capacities: ["4-30 paket/dakika", "Urune ve ambalaja gore ozel kurgu"],
    applications: [
      "Granul gubre paketleme",
      "Toz urun torbalama",
      "Sivi urun dolum hatlari",
      "Big bag sevkiyat hazirlama",
    ],
    optionalEquipment: ["Etiketleme", "Paletleme entegrasyonu", "Toz emme baglantisi"],
    materialTypes: ["Granul", "Toz", "Sivi urun", "Dokme kati"],
    advantages: [
      "Daha duzenli son urun cikisi",
      "Tartim hassasiyeti",
      "Hatla uyumlu sevkiyat akisi",
      "Operasyonel hiz artisi",
    ],
    relatedSectors: [
      "Gubre ve Granulasyon Tesisleri",
      "Kimya ve Proses Endustrisi",
      "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri",
    ],
    relatedServices: ["Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Organomineral Gubre Tesisi Projeleri", "Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Hem toz hem granul urun icin cozum olur mu?",
        answer:
          "Evet, urun davranisina uygun tartim ve dolum ekipmanlariyla farkli urunler icin uygun hat kurulabilir.",
      },
      {
        question: "Big bag ve standart torba ayni hatta olur mu?",
        answer:
          "Uygun layout ve operasyon senaryosuyla ayni tesiste farkli dolum cozumleri birlikte planlanabilir.",
      },
    ],
  },
  {
    slug: "depolama-ve-besleme-sistemleri",
    title: "Depolama ve Besleme Sistemleri",
    summary:
      "Silo sistemleri, bunkerler ve ürün alma/besleme sistemlerini tek çatı altında topluyoruz.",
    shortDescription:
      "Depolama ve beslemeyi ayirmadan birbiriyle calisan tek grup olarak kurguluyoruz.",
    heroTitle: "Depolama ve besleme sistemlerinde duzenli stok yonetimi ve kontrollu akış.",
    heroDescription:
      "Silo sistemleri, bunkerler ve urun alma-besleme ekipmanlari ile hattan onceki stok ve dozaj altyapisini guclendiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    variants: ["Silo Sistemleri", "Bunkerler", "Urun Alma ve Besleme Sistemleri"],
    technicalSpecs: [
      "Farkli hacim ve geometri secenekleri",
      "Akis yardimci ekipman entegrasyonu",
      "Dozaj ve seviye kontrol baglantilari",
      "Ic ve dis ortam kurulum secenekleri",
    ],
    capacities: ["1 m3 - 500 m3+", "Hat kapasitesine gore ozel stok hacmi"],
    applications: [
      "Hammadde depolama",
      "Hat oncesi tampon stok",
      "Dozaj ve kontrollu besleme",
      "Dokme urun sevk hazirlama",
    ],
    optionalEquipment: ["Vibrator", "Helezon besleyici", "Loadcell", "Seviye sensoru"],
    materialTypes: ["Toz urun", "Granul urun", "Organik malzeme", "Mineral ve karisimlar"],
    advantages: [
      "Duzenli stok yonetimi",
      "Kontrollu urun besleme",
      "Hat surekliligini destekleme",
      "Sahaya uygun ozel imalat",
    ],
    relatedSectors: [
      "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri",
      "Gubre ve Granulasyon Tesisleri",
      "Enerji ve Biyogaz Sistemleri",
    ],
    relatedServices: ["Proses Tasarimi ve Muhendislik", "Makine Imalati", "Anahtar Teslim Tesis Kurulumu"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral Gubre Tesisi Projeleri"],
    faqs: [
      {
        question: "Bunker ve silo farki nedir?",
        answer:
          "Bunkerler daha cok ara stok ve hizli besleme icin, silolar ise daha buyuk hacimli uzun sureli depolama icin tercih edilir.",
      },
      {
        question: "Besleme sistemi urune gore degisir mi?",
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
      "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz.",
    heroTitle: "Anahtar Teslim Tesis Kurulumu",
    heroDescription:
      "Anahtar teslim tesis kurulumunda tüm süreci tek bir koordinasyonla yönetiyoruz. Kompost, gübre, geri dönüşüm ve proses tesisleri için planlama, imalat, montaj ve devreye alma adımlarını tek çatı altında topluyoruz.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    scope: [
      "Tesis yerleşim planı",
      "Ekipman seçimi",
      "Makina imalatı",
      "Saha montajı",
      "Devreye alma organizasyonu",
      "Teknik danışmanlık",
    ],
    outputs: [
      "Tek merkezden yönetilen proje süreci",
      "Zaman kaybının azaltılması",
      "Daha net maliyet ve koordinasyon yönetimi",
    ],
    advantages: [
      "Tek muhatap",
      "Sahaya uygun çözüm",
      "Daha kontrollü kurulum",
      "Süreç bütünlüğü",
    ],
    relatedSectors: [
      "Gübre ve Granülasyon Tesisleri",
      "Kompost ve Organik Atık Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    ],
    relatedMachines: ["Tambur Sistemleri", "Tasima Ekipmanlari", "Depolama ve Besleme Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral Gubre Tesisi Projeleri"],
    faqs: [
      {
        question: "Anahtar teslim kapsamına neler dahildir?",
        answer:
          "Projenin kapsamına göre proses tasarımı, ekipman seçimi, makina imalatı, saha montajı, devreye alma ve teknik danışmanlık hizmetleri sunulabilir.",
      },
    ],
  },
  {
    slug: "proses-tasarimi-ve-muhendislik",
    title: "Proses Tasarımı ve Mühendislik",
    summary:
      "Kapasite, ürün tipi ve saha koşullarına göre proses akışlarını, ekipman dizilimini ve teknik altyapıyı tasarlıyoruz.",
    heroTitle: "Doğru proses tasarımı ile tesis performansını en baştan güçlendirin",
    heroDescription:
      "Malzeme akışı, kapasite ihtiyacı, ürün hedefi ve saha gerçeklerini birlikte değerlendirerek verimli ve uygulanabilir bir mühendislik kurgusu sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092918484-8313b2f1141c?auto=format&fit=crop&w=1400&q=80",
    scope: [
      "Proses akışı",
      "Hat yerleşimi",
      "Ekipman boyutlandırma",
      "Teknik mühendislik kurgusu",
    ],
    outputs: [
      "Daha net yatırım kararı",
      "Daha verimli hat kurgusu",
      "Doğru ekipman seçimi",
    ],
    advantages: [
      "Verim odaklı kurgu",
      "Sahaya uygunluk",
      "Kapasite uyumu",
      "Gelecek büyümeye açık altyapı",
    ],
    relatedSectors: [
      "Gübre ve Granülasyon Tesisleri",
      "Kompost ve Organik Atık Tesisleri",
      "Atık Su Çamuru ve Arıtma Çözümleri",
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    ],
    relatedMachines: ["Reaktorler ve Tanklar", "Eleme ve Siniflandirma Sistemleri", "Toz Toplama Sistemleri"],
    relatedProjects: ["Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Proses tasarımı neden kritiktir?",
        answer:
          "Doğru proses tasarımı; kapasite planlaması, ekipman seçimi, hat verimi ve işletme sürekliliği açısından yatırımın temelini oluşturur.",
      },
      {
        question: "Proses tasarımında hangi veriler dikkate alınır?",
        answer:
          "Hammadde yapısı, ürün hedefi, kapasite ihtiyacı, saha koşulları, enerji kullanımı ve işletme beklentileri birlikte değerlendirilir.",
      },
      {
        question: "Bu hizmet yalnızca yeni tesisler için mi uygundur?",
        answer:
          "Hayır. Yeni yatırımların yanı sıra mevcut tesislerin revizyonu, kapasite artışı ve proses iyileştirme çalışmaları için de uygundur.",
      },
    ],
  },
  {
    slug: "makine-imalati",
    title: "Makine Imalati",
    summary:
      "Prosese ozel olculerde, sanayi tipi ve dayanikli ekipmanlar uretiyoruz.",
    heroTitle: "Sahaya ve prosese uygun makine imalati ile dayanikli sistemler kurun.",
    heroDescription:
      "Tambur, konveyor, bunker, kirici, reaktor ve yardimci proses ekipmanlarini proje gereksinimine gore imal ediyoruz.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
    scope: ["Ozel olcu imalat", "Malzeme secimi", "Atolye uretimi", "Kalite kontrol"],
    outputs: ["Sahaya uygun ekipman", "Uzun omurlu kullanim", "Teknik uyum"],
    advantages: ["Ozel imalat", "Dayanikli yapi", "Hatla uyum", "Bakim kolayligi"],
    relatedSectors: ["Madencilik ve Mineral Isleme", "Geri Donusum ve Atik Yonetimi"],
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Tambur Sistemleri", "Tasima Ekipmanlari"],
    relatedProjects: ["Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Standart disi imalat yapiliyor mu?",
        answer:
          "Evet, kapasite, saha olculeri ve proses ihtiyacina gore tamamen ozel imalat yapabiliyoruz.",
      },
    ],
  },
  {
    slug: "kurulum-ve-devreye-alma",
    title: "Kurulum ve Devreye Alma",
    summary:
      "Sahadaki ekipman montaji, testler ve ilk calisma surecini kontrollu sekilde yonetiyoruz.",
    heroTitle: "Kurulum ve devreye alma surecinde hatalari azaltan kontrollu saha uygulamasi.",
    heroDescription:
      "Makinalarin sahaya alinmasindan ilk uretim testlerine kadar her adimi planli, olculebilir ve koordineli sekilde ilerletiyoruz.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    scope: ["Montaj planlama", "Saha kurulum", "Test calismalari", "Ilk calistirma"],
    outputs: ["Daha hizli devreye alma", "Daha dusuk saha riski", "Calisir teslim"],
    advantages: ["Saha koordinasyonu", "Surekli takip", "Performans kontrolu", "Ekip egitimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Atik Su Camuru ve Aritma Cozumleri"],
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
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80",
    scope: ["Mevcut hat analizi", "Darbogaz tespiti", "Ekipman degisimi", "Performans iyilestirme"],
    outputs: ["Kapasite artisi", "Enerji verimi", "Daha dengeli proses"],
    advantages: ["Yatirimi koruma", "Hizli iyilestirme", "Daha dusuk durus maliyeti"],
    relatedSectors: ["Gubre ve Granulasyon Tesisleri", "Kimya ve Proses Endustrisi"],
    relatedMachines: ["Toz Toplama Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral Gubre Tesisi Projeleri"],
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
    title: "Teknik Danismanlik",
    summary:
      "Yatirim karari, proses secimi, ekipman tercihi ve saha planlamasi icin teknik bakis sagliyoruz.",
    heroTitle: "Dogru yatirim ve proses kararlarini teknik danismanlikla netlestirin.",
    heroDescription:
      "Yeni tesis yatirimi veya mevcut hattin iyilestirilmesi surecinde karar vericilere teknik yol haritasi sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    scope: ["Teknik analiz", "Yatirim degerlendirme", "Ekipman secim destegi", "Surec yonlendirme"],
    outputs: ["Daha net karar sureci", "Yanlis ekipman riskinin azalmasi", "Proje netligi"],
    advantages: ["Uzman bakis", "Karar destegi", "Risk azaltma", "Surec netligi"],
    relatedSectors: ["Madencilik ve Mineral Isleme", "Geri Donusum ve Atik Yonetimi"],
    relatedMachines: ["Tambur Sistemleri", "Kiricilar ve Parcalayicilar"],
    relatedProjects: ["Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Danismanlik sadece yeni proje icin mi?",
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
    heroTitle: "Bakim ve servis yapisi ile sistemlerinizi daha uzun omurlu ve guvenli calistirin.",
    heroDescription:
      "Periyodik kontrol, parca degisimi, ayar ve teknik servis desteği ile ekipman performansinin surekliligini destekliyoruz.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1400&q=80",
    scope: ["Periyodik kontrol", "Yedek parca", "Ariza tespiti", "Saha servis destegi"],
    outputs: ["Daha az plansiz durus", "Daha yuksek ekipman omru", "Daha guvenli isletme"],
    advantages: ["Hizli mudahale", "Onleyici bakim", "Parca takibi", "Isletme surekliligi"],
    relatedSectors: ["Kompost ve Organik Atik Tesisleri", "Yem, Toz ve Dokme Kati Malzeme Isleme Sistemleri"],
    relatedMachines: ["Tasima Ekipmanlari", "Reaktorler ve Tanklar"],
    relatedProjects: ["Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Periyodik bakim plani hazirlaniyor mu?",
        answer:
          "Evet, ekipman tipine ve calisma yogunluguna gore planli bakim takvimi olusturabiliyoruz.",
      },
    ],
  },
  {
    slug: "pilot-tesis-ve-proses-test-calismalari",
    title: "Pilot Tesis ve Proses Test Calismalari",
    summary:
      "Tam yatirim oncesi prosesin gercek saha verisine yakin sekilde test edilmesini sagliyoruz.",
    heroTitle: "Pilot tesis ve proses testleriyle yatirim riskini dusurup karari guclendirin.",
    heroDescription:
      "Malzeme davranisi, urun kalitesi ve proses parametrelerini pilot calismalarla daha net gorerek ana yatirimi daha saglikli planliyoruz.",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1400&q=80",
    scope: ["Numune testleri", "Pilot denemeler", "Parametre analizi", "Sonuc raporlama"],
    outputs: ["Yatirim oncesi veri", "Malzeme davranisi analizi", "Daha dogru ekipman secimi"],
    advantages: ["Risk azaltma", "Veriye dayali karar", "Rakiplerden ayrisan uzmanlik"],
    relatedSectors: ["Gubre ve Granulasyon Tesisleri", "Atik Su Camuru ve Aritma Cozumleri"],
    relatedMachines: ["Tambur Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral Gubre Tesisi Projeleri"],
    faqs: [
      {
        question: "Pilot tesis ne zaman gerekli olur?",
        answer:
          "Yeni bir malzeme, degisken urun kalitesi veya belirsiz proses davranisi oldugunda pilot calisma karar surecini guclendirir.",
      },
    ],
  },
  {
    slug: "proje-yonetimi-ve-saha-koordinasyonu",
    title: "Proje Yonetimi ve Saha Koordinasyonu",
    summary:
      "Farkli ekipler, tedarikler ve saha uygulamalarini ayni takvim ve hedef etrafinda yonetiyoruz.",
    heroTitle: "Proje yonetimi ve saha koordinasyonuyla kurulum surecinde daginikligi onleyin.",
    heroDescription:
      "Takvim, ekipler, lojistik, montaj ve test adimlarini tek bir saha koordinasyon mantigiyla yuruterek projeye netlik kazandiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    scope: ["Takvim yonetimi", "Saha koordinasyonu", "Tedarik takibi", "Ekip senkronizasyonu"],
    outputs: ["Daha kontrollu ilerleme", "Daha net saha duzeni", "Sure ve kapsam takibi"],
    advantages: ["Tek merkezli koordinasyon", "Daha az saha karisiklisi", "Guven veren proje yonetimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Geri Donusum ve Atik Yonetimi"],
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Ozel Proses ve Makine Imalati"],
    faqs: [
      {
        question: "Sadece saha koordinasyonu hizmeti alabilir miyiz?",
        answer:
          "Evet, tum projeyi degil yalnizca saha koordinasyonu ve proje takip kismini da ayri hizmet olarak yurutebiliriz.",
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
    location: "Turkiye",
    capacity: "20 ton/gun",
    customerType: "Belediye ve cevre yatirimi",
    systems: ["Tambur Sistemleri", "Tasima Ekipmanlari", "Eleme ve Siniflandirma Sistemleri"],
    processSummary:
      "Organik atik kabulunden kompost olgunlastirma ve son eleme asamasina kadar tum surec tek hat yapisinda planlandi.",
    technicalScope: [
      "Besleme ve ayristirma alani",
      "Kompost tamburu entegrasyonu",
      "Konveyor hatlari",
      "Son eleme ve urun cikisi",
    ],
    photosNote:
      "Bu alana saha kurulum fotograflari, makine yerlestirme gorselleri ve uygulama kareleri eklenebilir.",
    outcomes: [
      "Atiklarin geri kazanim oraninin artmasi",
      "Surecin daha kontrollu hale gelmesi",
      "Daha verimli organik urun cikisi",
    ],
    similarProject: "Biyogaz ve Atik Yonetimi Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Tasima Ekipmanlari"],
    relatedSector: "Kompost ve Organik Atik Tesisleri",
    relatedSolutions: ["Teknik Danismanlik", "Pilot Tesis ve Proses Test Calismalari"],
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "organomineral-gubre-tesisi-projeleri",
    title: "Organomineral Gubre Tesisi Projeleri",
    summary:
      "Granul ve sivi gubre uretim hatlarinda urun kalitesi, kapasite ve surdurulebilir isletme odakli kurgu.",
    projectName: "Organomineral Gubre Uretim Hatti",
    location: "Turkiye / Ic Anadolu",
    capacity: "10 ton/saat",
    customerType: "Ozel sektor gubre ureticisi",
    systems: ["Tambur Sistemleri", "Reaktorler ve Tanklar", "Paketleme ve Dolum Sistemleri"],
    processSummary:
      "Hammadde hazirlama, karisim, granulasyon, kurutma, eleme ve paketleme sureci tek entegre tesis mantigiyla kuruldu.",
    technicalScope: [
      "Granulasyon tamburu",
      "Sivi katkilar icin tank ve reaktor altyapisi",
      "Eleme ve geri donus hatti",
      "Torbalama ve paketleme entegrasyonu",
    ],
    photosNote:
      "Bu bolumde hat gorselleri, paketleme alani ve sahadaki teknik detay fotograflari sergilenebilir.",
    outcomes: [
      "Daha yuksek urun standardi",
      "Kapasiteye uygun surekli hat akisi",
      "Sevkiyata hazir son urun yapisi",
    ],
    similarProject: "Ozel Proses ve Makine Imalati Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedSector: "Gubre ve Granulasyon Tesisleri",
    relatedSolutions: ["Proses Tasarimi ve Muhendislik", "Modernizasyon ve Revizyon"],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "deri-atik-isleme-tesisi-projeleri",
    title: "Deri Atik Isleme Tesisi Projeleri",
    summary:
      "Deri endustrisi kaynakli atiklarin ayrisma, tasima ve geri kazanima uygun sekilde islenmesi icin tesis kurgusu.",
    projectName: "Deri Atik Hazirlama ve Isleme Tesisi",
    location: "Turkiye / Marmara",
    capacity: "8 ton/saat",
    customerType: "Sanayi tesisi",
    systems: ["Kiricilar ve Parcalayicilar", "Tasima Ekipmanlari", "Toz Toplama Sistemleri"],
    processSummary:
      "Deri atiklarin kontrollu sekilde boyutlandirilmasi, tasinmasi ve sonraki sureclere hazirlanmasi icin hat tasarlandi.",
    technicalScope: [
      "Parcalayici secimi",
      "Bunker ve tasima hatti",
      "Toz toplama altyapisi",
      "Saha yerlesim koordinasyonu",
    ],
    photosNote:
      "Bu alana parcalama ekipmanlari, bunker yerlesimi ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Atik yonetim surecinde duzen",
      "Daha guvenli isleme adimlari",
      "Sonraki geri kazanim surecine uygun malzeme hazirligi",
    ],
    similarProject: "Geri Donusum ve Atik Yonetimi Projeleri",
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Toz Toplama Sistemleri"],
    relatedSector: "Geri Donusum ve Atik Yonetimi",
    relatedSolutions: ["Teknik Danismanlik", "Proje Yonetimi ve Saha Koordinasyonu"],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "biyogaz-ve-atik-yonetimi-projeleri",
    title: "Biyogaz ve Atik Yonetimi Projeleri",
    summary:
      "Biyogaz besleme, organik madde hazirlama ve atik yonetim sureclerine uygun entegre proje yapisi.",
    projectName: "Biyogaz Besleme ve Atik Hazirlama Hatti",
    location: "Turkiye / Ege",
    capacity: "15 ton/saat",
    customerType: "Enerji yatirimi ve isletmeci",
    systems: ["Depolama ve Besleme Sistemleri", "Tasima Ekipmanlari", "Kiricilar ve Parcalayicilar"],
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
      "Daha kontrollu malzeme yonetimi",
      "Enerji tesisine uygun on hazirlik altyapisi",
    ],
    similarProject: "Kompost Tesisi Projeleri",
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Tasima Ekipmanlari"],
    relatedSector: "Enerji ve Biyogaz Sistemleri",
    relatedSolutions: ["Anahtar Teslim Tesis Kurulumu", "Proje Yonetimi ve Saha Koordinasyonu"],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projeleri",
    title: "Ozel Proses ve Makine Imalati Projeleri",
    summary:
      "Sahaya ozel olcu, kapasite ve proses ihtiyacina gore uyarlanmis ozel makina ve sistem cozumleri.",
    projectName: "Ozel Proses Hatti ve Makine Uretimi",
    location: "Yurt ici / Yurt disi",
    capacity: "Projeye ozel",
    customerType: "Farkli sanayi kollari",
    systems: ["Reaktorler ve Tanklar", "Tambur Sistemleri", "Tasima Ekipmanlari"],
    processSummary:
      "Standart katalog disinda kalan proses gereksinimleri icin ozel imalat ve hat entegrasyonu odakli cozum kurgulandi.",
    technicalScope: [
      "Ozel tasarim ekipman",
      "Muhendislik ve projelendirme",
      "Atolye imalat sureci",
      "Saha uyarlama ve entegrasyon",
    ],
    photosNote:
      "Bu bolume teknik cizimler, ozel imalat detaylari ve uygulama fotograflari eklenebilir.",
    outcomes: [
      "Standart disi ihtiyaca uygun sistem",
      "Sahaya uyarlanmis makina yapisi",
      "Surece ozel performans kazanimi",
    ],
    similarProject: "Organomineral Gubre Tesisi Projeleri",
    relatedMachines: ["Reaktorler ve Tanklar", "Tambur Sistemleri"],
    relatedSector: "Kimya ve Proses Endustrisi",
    relatedSolutions: ["Makine Imalati", "Pilot Tesis ve Proses Test Calismalari"],
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "mineral-ve-dokme-kati-isleme-projeleri",
    title: "Mineral ve Dokme Kati Isleme Projeleri",
    summary:
      "Kirma, eleme, tasima, kurutma, siniflandirma ve stoklama sureclerine uygun mineral ve dokme kati malzeme proje cozumleri.",
    projectName: "Mineral ve Dokme Kati Isleme Projesi",
    location: "Turkiye / Farkli saha senaryolari",
    capacity: "Projeye gore ozel",
    customerType: "Madencilik ve proses yatirimlari",
    systems: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Tasima Ekipmanlari",
      "Depolama ve Besleme Sistemleri",
    ],
    processSummary:
      "Mineral ve dokme kati malzemenin kabulunden kirma, eleme, kurutma, siniflandirma ve stoklamaya kadar uzanan hat yapisi proses ve saha verilerine gore kurgulanir.",
    technicalScope: [
      "Urun karakterizasyonu ve proses analizi",
      "Kirma, eleme ve siniflandirma kurgusu",
      "Tasima, stoklama ve transfer altyapisi",
      "Toz, asinma ve kapasite yonetimi",
    ],
    photosNote:
      "Bu alana kirma-eleme hatlari, tasima sistemleri, stoklama cozumleri ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Proses akisina uygun hat kurgusu",
      "Kapasiteye uygun ekipman secimi",
      "Asinma ve toz yonetimi odakli tesis yaklasimi",
    ],
    similarProject: "Ozel Proses ve Makine Imalati Projeleri",
    relatedMachines: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Tasima Ekipmanlari",
    ],
    relatedSector: "Madencilik ve Mineral Isleme",
    relatedSolutions: [
      "Proses Tasarimi ve Muhendislik",
      "Makine Imalati",
      "Anahtar Teslim Tesis Kurulumu",
    ],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
  },
];

export const librarySections: { title: LibraryCategory; description: string }[] = [
  {
    title: "Blog / Makaleler",
    description: "Sektore yon veren, arama niyeti guclu makaleler ve konu kumeleri.",
  },
  {
    title: "Teknik Rehberler",
    description: "Karar surecini destekleyen detayli teknik aciklamalar ve saha odakli rehberler.",
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
    description: "Google icin yuksek potansiyelli, temel kavramlari aciklayan otorite sayfalari.",
  },
];

export const libraryItems: LibraryItem[] = [
  {
    slug: "kompost-tesisi-nasil-kurulur",
    title: "Kompost Tesisi Nasil Kurulur",
    category: "Blog / Makaleler",
    summary: "Kompost tesisi kurulumunda saha, proses, ekipman ve kapasite planlamasinin temel adimlari.",
    heroTitle: "Kompost tesisi kurulumunda dogru baslangic nasil yapilir?",
    heroDescription:
      "Kompost tesisi kurmak isteyen yatirimcilar icin saha secimi, ekipman yapisi, proses akisi ve kapasite planlamasini sade ama guclu sekilde acikliyoruz.",
    sections: [
      {
        heading: "Kurulum mantigi",
        text: "Kompost tesisleri yalnizca ekipman secimiyle degil; kabul alani, malzeme akisi, on hazirlama, kompostlama ve son urun yonetimiyle birlikte ele alinmalidir.",
      },
      {
        heading: "Ekipman secimi",
        text: "Tambur sistemleri, tasima ekipmanlari ve eleme sistemleri malzeme karakterine gore birlikte degerlendirilmelidir.",
      },
    ],
    relatedLinks: ["Kompost Uretiminde Tambur Sistemleri", "Organik Atiklarin Geri Kazanimi"],
  },
  {
    slug: "kompost-uretiminde-tambur-sistemleri",
    title: "Kompost Uretiminde Tambur Sistemleri",
    category: "Teknik Rehberler",
    summary: "Kompost tamburlarinin neden tercih edildigi, hangi asamada kullanildigi ve secim kriterleri.",
    heroTitle: "Kompost uretiminde tambur sistemleri neden kritik rol oynar?",
    heroDescription:
      "Kompost proseslerinde tambur yapisinin sure, karisim, havalandirma ve verim acisindan sagladigi farklari teknik olarak ele aliyoruz.",
    sections: [
      {
        heading: "Tambur ne saglar",
        text: "Kompost tamburu sureci hizlandirabilir, homojenligi artirabilir ve saha operasyonunu daha kontrollu hale getirebilir.",
      },
      {
        heading: "Secim kriterleri",
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
    heroTitle: "Organik atiklar nasil ekonomik deger ureten bir surece donusebilir?",
    heroDescription:
      "Kompost, biyogaz ve farkli proses modelleriyle organik atiklarin geri kazanimi icin uygulanabilir yol haritalarini anlatiyoruz.",
    sections: [
      {
        heading: "Geri kazanim modelleri",
        text: "Kompostlama, biyogaz ve farkli on isleme yontemleri atik karakterine gore secilir.",
      },
      {
        heading: "Tesis etkisi",
        text: "Dogru ekipman ve surec tasarimi geri kazanim oranini dogrudan etkiler.",
      },
    ],
    relatedLinks: ["Biyogaz ve Atik Yonetimi Projeleri", "Kompost Tesisi Nasil Kurulur"],
  },
  {
    slug: "organomineral-gubre-uretim-sureci",
    title: "Organomineral Gubre Uretim Sureci",
    category: "Blog / Makaleler",
    summary: "Organomineral gubre uretiminde hammadde, karisim, granulasyon ve son urun adimlari.",
    heroTitle: "Organomineral gubre uretim sureci hangi adimlardan olusur?",
    heroDescription:
      "Hammadde seciminden granulasyon ve paketlemeye kadar organomineral gubre uretiminin temel proses yapisini acikliyoruz.",
    sections: [
      {
        heading: "Uretim adimlari",
        text: "Karistirma, dozajlama, granulasyon, kurutma, eleme ve paketleme sureci birlikte planlanir.",
      },
      {
        heading: "Kritik noktalar",
        text: "Nem kontrolu, urun homojenligi ve granul kalitesi sistem secimini dogrudan etkiler.",
      },
    ],
    relatedLinks: ["Granulasyon Nedir", "Gubre Granulasyon Hatti Nasil Calisir"],
  },
  {
    slug: "gubre-granulasyon-hatti-nasil-calisir",
    title: "Gubre Granulasyon Hatti Nasil Calisir",
    category: "Teknik Rehberler",
    summary: "Granulasyon hattinin tambur, eleme, geri donus ve paketleme mantigi.",
    heroTitle: "Gubre granulasyon hatti hangi ekipmanlarla ve nasil calisir?",
    heroDescription:
      "Granul olusturma, kurutma, siniflandirma ve geri donus akisini sistem bazinda anlatiyoruz.",
    sections: [
      {
        heading: "Hat yapisi",
        text: "Granulasyon hattinda hammadde hazirlama, tambur, eleme, geri donus ve paketleme istasyonlari birlikte ele alinmalidir.",
      },
      {
        heading: "Verim unsurlari",
        text: "Kapasite secimi, urun nemi ve geri donus orani hat verimi uzerinde belirleyicidir.",
      },
    ],
    relatedLinks: ["Organomineral Gubre Uretim Sureci", "Tambur Kurutma Sistemleri Nasil Calisir"],
  },
  {
    slug: "gubre-fabrikasi-maliyeti-2026",
    title: "Gubre Fabrikasi Maliyeti 2026",
    category: "Blog / Makaleler",
    summary: "Gubre fabrikasi yatiriminda maliyeti etkileyen ekipman, kapasite ve proses basliklari.",
    heroTitle: "Gubre fabrikasi maliyeti 2026 yilinda hangi kalemlere gore degisir?",
    heroDescription:
      "Kapasite, urun tipi, otomasyon seviyesi ve ekipman yapisinin yatirim maliyetine etkisini ana basliklar halinde ele aliyoruz.",
    sections: [
      {
        heading: "Maliyet kalemleri",
        text: "Ekipman, kurulum, otomasyon, enerji ve saha altyapisi toplam yatirim icinde belirleyici rol oynar.",
      },
      {
        heading: "Dogru planlama",
        text: "Pilot test, proses tasarimi ve dogru ekipman secimi gereksiz yatirim risklerini azaltir.",
      },
    ],
    relatedLinks: ["Teknik Danismanlik", "Anahtar Teslim Tesis Kurulumu Nedir"],
  },
  {
    slug: "tambur-kurutma-sistemleri-nasil-calisir",
    title: "Tambur Kurutma Sistemleri Nasil Calisir",
    category: "Teknik Rehberler",
    summary: "Tambur kurutucularin calisma prensibi, kullanim alanlari ve secim kriterleri.",
    heroTitle: "Tambur kurutma sistemleri nasil calisir ve nerelerde kullanilir?",
    heroDescription:
      "Tambur kurutucularin isi transferi, urun hareketi ve kapasite mantigini sade ama teknik bir dille anlatiyoruz.",
    sections: [
      {
        heading: "Calisma mantigi",
        text: "Malzeme tambur icinde ilerlerken sicak hava ile temas eder ve istenen neme dogru ilerler.",
      },
      {
        heading: "Secim kriterleri",
        text: "Malzemenin nemi, tane yapisi, sicaklik hassasiyeti ve hedef kapasite kritik rol oynar.",
      },
    ],
    relatedLinks: ["Tambur Sistemleri", "Granulasyon Nedir"],
  },
  {
    slug: "bant-konveyor-secimi-nasil-yapilir",
    title: "Bant Konveyor Secimi Nasil Yapilir",
    category: "Teknik Rehberler",
    summary: "Mesafe, egim, kapasite ve malzeme tipine gore bant konveyor secim kriterleri.",
    heroTitle: "Bant konveyor secimi yaparken hangi kriterlere dikkat edilmeli?",
    heroDescription:
      "Hat uzunlugu, urun tipi, tasima hizi ve saha kosullarina gore bant konveyor seciminin temel mantigini acikliyoruz.",
    sections: [
      {
        heading: "Tasarim kriterleri",
        text: "Kapasite, bant genisligi, tasima mesafesi ve yukleme bosaltma noktasi ilk belirleyicilerdir.",
      },
      {
        heading: "Saha uyumu",
        text: "Yukseklik farki, toz kontrolu ve hat ici baglantilar tasarim kararlarini etkiler.",
      },
    ],
    relatedLinks: ["Tasima Ekipmanlari", "Toz Toplama Sistemleri Neden Onemlidir"],
  },
  {
    slug: "endustriyel-kirici-tipleri-ve-kullanim-alanlari",
    title: "Endustriyel Kirici Tipleri ve Kullanim Alanlari",
    category: "Blog / Makaleler",
    summary: "Cekicli degirmen, ceneli kirici, zincirli kirici ve parcalayici tiplerinin kullanim farklari.",
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
        text: "Mineral, organik atik ve geri donusum malzemelerinde farkli kirici tipleri one cikar.",
      },
    ],
    relatedLinks: ["Kiricilar ve Parcalayicilar", "Madencilik ve Mineral Isleme"],
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
        text: "Muhendislikten saha kurulumuna kadar bircok adim ayni koordinasyon yapisi altinda toplanir.",
      },
      {
        heading: "Avantaj",
        text: "Surec butunlugu, zaman kontrolu ve daha net sorumluluk dagilimi saglar.",
      },
    ],
    relatedLinks: ["Anahtar Teslim Tesis Kurulumu", "Proje Yonetimi ve Saha Koordinasyonu"],
  },
  {
    slug: "endustriyel-proses-tasariminda-dikkat-edilecekler",
    title: "Endustriyel Proses Tasariminda Dikkat Edilecekler",
    category: "Teknik Rehberler",
    summary: "Kapasite, akış, enerji, güvenlik ve işletme mantigi acisindan proses tasarimi notlari.",
    heroTitle: "Endustriyel proses tasariminda hangi basliklar kritik oneme sahiptir?",
    heroDescription:
      "Tesis yatiriminin erken asamasinda dogru proses kararlarini vermek icin temel teknik basliklari bir araya getiriyoruz.",
    sections: [
      {
        heading: "Baslangic verisi",
        text: "Malzeme tipi, kapasite ihtiyaci, urun hedefi ve saha gercegi ayni tabloda degerlendirilmelidir.",
      },
      {
        heading: "Isletme etkisi",
        text: "Dogru proses tasarimi sadece yatirimi degil, uzun vadeli isletme maliyetlerini de belirler.",
      },
    ],
    relatedLinks: ["Proses Tasarimi ve Muhendislik", "Pilot Tesis ve Proses Test Calismalari"],
  },
  {
    slug: "toz-toplama-sistemleri-neden-onemlidir",
    title: "Toz Toplama Sistemleri Neden Onemlidir",
    category: "Sik Sorulan Sorular",
    summary: "Toz toplama sistemlerinin is guvenligi, ekipman korumasi ve kalite uzerindeki etkisi.",
    heroTitle: "Toz toplama sistemleri neden sadece ek ekipman degil, ana proses unsurudur?",
    heroDescription:
      "Toz kontrolunun saha temizligi, urun kaybi, is guvenligi ve ekipman omru acisindan neden kritik oldugunu anlatiyoruz.",
    sections: [
      {
        heading: "Operasyon etkisi",
        text: "Toz kontrolu olmayan sistemlerde ekipman asinmasi, saha kirliligi ve kayiplar daha hizli artar.",
      },
      {
        heading: "Sistem secimi",
        text: "Jet pulse, siklon ve torba filtre secimi hava debisi ve toz karakterine gore yapilmalidir.",
      },
    ],
    relatedLinks: ["Toz Toplama Sistemleri", "Kimya ve Proses Endustrisi"],
  },
  {
    slug: "granulasyon-nedir",
    title: "Granulasyon Nedir",
    category: "Terimler Sozlugu",
    summary: "Toz veya ince malzemenin belirli boyutta granul forma getirilme surecinin tanimi.",
    heroTitle: "Granulasyon nedir?",
    heroDescription:
      "Granulasyon; ince taneli veya toz formdaki malzemenin, proses yardimiyla daha duzenli ve kullanilabilir granul forma donusturulmesidir.",
    sections: [
      {
        heading: "Neden kullanilir",
        text: "Depolama, tasima, uygulama kolayligi ve urun standardi saglamak icin granulasyon tercih edilir.",
      },
      {
        heading: "Hangi alanlarda gorulur",
        text: "Gubre, kimya ve dokme kati malzeme proseslerinde sik kullanilir.",
      },
    ],
    relatedLinks: ["Gubre Granulasyon Hatti Nasil Calisir", "Organomineral Gubre Nedir"],
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
        heading: "Calisma mantigi",
        text: "Malzeme donen govde icinde ilerlerken goz acikligina gore ayrisir.",
      },
      {
        heading: "Nerede kullanilir",
        text: "Kompost, geri donusum ve dokme kati malzeme siniflandirma hatlarinda yaygindir.",
      },
    ],
    relatedLinks: ["Eleme ve Siniflandirma Sistemleri", "Kompost Uretiminde Tambur Sistemleri"],
  },
  {
    slug: "organomineral-gubre-nedir",
    title: "Organomineral Gubre Nedir",
    category: "Terimler Sozlugu",
    summary: "Organik ve mineral bilesenleri bir araya getiren gubre turunun temel tanimi.",
    heroTitle: "Organomineral gubre nedir?",
    heroDescription:
      "Organomineral gubre, organik kaynakli maddeler ile mineral besin elementlerinin birlikte bulundugu gubre turudur.",
    sections: [
      {
        heading: "Yapi",
        text: "Organik icerik ile mineral besin elementlerini ayni urun yapisinda birlestirir.",
      },
      {
        heading: "Uretim sureci",
        text: "Karistirma, granulasyon ve kurutma gibi proses adimlariyla nihai urun haline gelir.",
      },
    ],
    relatedLinks: ["Organomineral Gubre Uretim Sureci", "Granulasyon Nedir"],
  },
  {
    slug: "kompost-tamburu-nedir",
    title: "Kompost Tamburu Nedir",
    category: "Terimler Sozlugu",
    summary: "Kompost prosesinde malzemenin kontrollu karisimi ve ilerlemesi icin kullanilan tambur sistemi.",
    heroTitle: "Kompost tamburu nedir?",
    heroDescription:
      "Kompost tamburu, organik malzemenin daha kontrollu sekilde karistirilmasi ve ilerletilmesi icin kullanilan doner proses ekipmanidir.",
    sections: [
      {
        heading: "Fonksiyon",
        text: "Homojenligi artirir, sureci hizlandirabilir ve saha operasyonunu daha duzenli hale getirir.",
      },
      {
        heading: "Kullanim alani",
        text: "Kompost tesislerinde farkli organik atiklarin on isleme ve kompostlama asamalarinda kullanilir.",
      },
    ],
    relatedLinks: ["Kompost Uretiminde Tambur Sistemleri", "Kompost Tesisi Nasil Kurulur"],
  },
];
