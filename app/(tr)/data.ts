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

export const services: ServiceItem[] = [
  {
    slug: "anahtar-teslim-tesis-kurulumu",
    title: "Anahtar Teslim Tesis Kurulumu",
    summary:
      "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz.",
    heroTitle: "Anahtar Teslim Tesis Kurulumu",
    heroDescription:
      "Anahtar teslim tesis kurulumunda tüm süreci tek bir koordinasyonla yönetiyoruz. Kompost, gübre, geri dönüşüm ve proses tesisleri için planlama, imalat, montaj ve devreye alma adımlarını tek ?at1 altında topluyoruz.",
    image:
      "/images/01-genel/fabrika1.jpg",
    scope: [
      "Tesis yerleşim planı",
      "Ekipman seçimi",
      "Makina imalati",
      "Saha montaji",
      "Devreye alma organizasyonu",
      "Teknik danışmanlık",
    ],
    outputs: [
      "Tek merkezden yönetilen proje süreci",
      "Zaman kaybinin azaltilmasi",
      "Daha net maliyet ve koordinasyon yönetimi",
    ],
    advantages: [
      "Tek muhatap",
      "Sahaya uygun çözüm",
      "Daha kontrollü kurulum",
      "Süreç bütünlüğü",
    ],
    relatedSectors: [
      "Gübre Üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su çamuru ve Arıtma çözümleri",
      "Geri Dönü_?m ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral 0_leme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
    ],
    relatedMachines: ["Tambur Sistemleri", "Taşıma Ekipmanlari", "Depolama ve Besleme Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Organomineral Gübre Tesisi Projeleri"],
    faqs: [
      {
        question: "Anahtar teslim kapsamina neler dahildir?",
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
      "/images/01-genel/proses1.png",
    scope: [
      "Proses akışı",
      "Hat yerleşimi",
      "Ekipman boyutlandirma",
      "Teknik mühendislik kurgusu",
    ],
    outputs: [
      "Daha net yatirim karari",
      "Daha verimli hat kurgusu",
      "Doğru ekipman seçimi",
    ],
    advantages: [
      "Verim odakli kurgu",
      "Sahaya uygunluk",
      "Kapasite uyumu",
      "Gelecek büyümeye a?ik altyapi",
    ],
    relatedSectors: [
      "Gübre üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su çamuru ve Arıtma çözümleri",
      "Geri Dönü_?m ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral 0_leme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
    ],
    relatedMachines: ["Reaktorler ve Tanklar", "Eleme ve Siniflandirma Sistemleri", "Toz Toplama Sistemleri"],
    relatedProjects: ["Özel Proses ve Makine İmalatı"],
    faqs: [
      {
        question: "Proses tasarimi neden kritiktir?",
        answer:
          "Doğru proses tasarımı; kapasite planlaması, ekipman seçimi, hat verimi ve işletme sürekliliği açısından yatırımın temelini oluşturur.",
      },
      {
        question: "Proses tasariminda hangi veriler dikkate alinir?",
        answer:
          "Hammadde yapısı, ürün hedefi, kapasite ihtiyacı, saha koşulları, enerji kullanımı ve işletme beklentileri birlikte değerlendirilir.",
      },
      {
        question: "Bu hizmet yalnizca yeni tesisler için mi uygundur?",
        answer:
          "Hayır. Yeni yatırımların yan1 sıra mevcut tesislerin revizyonu, kapasite artışı ve proses iyileştirme çalışmaları için de uygundur.",
      },
    ],
  },
  {
    slug: "makine-imalati",
    title: "Makine İmalatı",
    summary:
      "Prosese özel ölçülerde, sanayi tipi ve dayanıklı ekipmanlar üretiyoruz.",
    heroTitle: "Sahaya ve prosese uygun makine imalatı ile dayanıklı sistemler kurun.",
    heroDescription:
      "Tambur, konveyör, bunker, kırıcı, reaktör ve yardımcı proses ekipmanlarını proje gereksinimine göre imal ediyoruz.",
    image:
      "/images/celik/celik2.jpg",
    scope: ["Özel ölçü imalat", "Malzeme seçimi", "Atölye üretimi", "Kalite kontrol"],
    outputs: ["Sahaya uygun ekipman", "Uzun omurlu kullanim", "Teknik uyum"],
    advantages: ["özel imalat", "Dayanikli yapi", "Hatla uyum", "Bakim kolayligi"],
    relatedSectors: ["Madencilik ve Mineral 0_leme", "Geri Dönü_?m ve Atık Yönetimi"],
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Tambur Sistemleri", "Taşıma Ekipmanlari"],
    relatedProjects: ["Özel Proses ve Makine İmalatı"],
    faqs: [
      {
        question: "Standart disi imalat yapiliyor mu?",
        answer:
          "Evet, kapasite, saha olculeri ve proses ihtiyacina gore tamamen özel imalat yapabiliyoruz.",
      },
    ],
  },
  {
    slug: "kurulum-ve-devreye-alma",
    title: "Kurulum ve Devreye Alma",
    summary:
      "Sahadaki ekipman montaji, testler ve ilk çalışma sürecini kontrollü sekilde yonetiyoruz.",
    heroTitle: "Kurulum ve devreye alma sürecinde hatalari azaltan kontrollü saha uygulamasi.",
    heroDescription:
      "Makinaların sahaya alınmasından ilk üretim testlerine kadar her adımı planlı, ölçülebilir ve koordineli şekilde ilerletiyoruz.",
    image:
      "/images/01-genel/hizmetler1.png",
    scope: ["Montaj planlama", "Saha kurulum", "Test calismalari", "Ilk calistirma"],
    outputs: ["Daha hızlı devreye alma", "Daha düşük saha riski", "Çalışır teslim"],
    advantages: ["Saha koordinasyonu", "Surekli takip", "Performans kontrol?", "Ekip egitimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Atık Su çamuru ve Arıtma çözümleri"],
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
      "/images/otomasyon/oromas1.jpg",
    scope: ["Mevcut hat analizi", "Darbogaz tespiti", "Ekipman degisimi", "Performans iyilestirme"],
    outputs: ["Kapasite artisi", "Enerji verimi", "Daha dengeli proses"],
    advantages: ["Yatırımı koruma", "Hızlı iyileştirme", "Daha düşük duruş maliyeti"],
    relatedSectors: ["Gübre üretim Tesisleri", "Kimya ve Proses Endüstrisi"],
    relatedMachines: ["Toz Toplama Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral Gübre Tesisi Projeleri"],
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
    title: "Teknik Danışmanlık",
    summary:
      "Yatırım karari, proses seçimi, ekipman tercihi ve saha planlamasi için teknik bakis sagliyoruz.",
    heroTitle: "Doğru yatırım ve proses kararlarini teknik danismanlikla netlestirin.",
    heroDescription:
      "Yeni tesis yatirimi veya mevcut hattin iyilestirilmesi sürecinde karar vericilere teknik yol haritasi sunuyoruz.",
    image:
      "/images/01-genel/proses1.png",
    scope: ["Teknik analiz", "Yatirim degerlendirme", "Ekipman seçim destegi", "Süreç yonlendirme"],
    outputs: ["Daha net karar süreci", "Yanlis ekipman riskinin azalmasi", "Proje netligi"],
    advantages: ["Uzman bakis", "Karar destegi", "Risk azaltma", "Süreç netligi"],
    relatedSectors: ["Madencilik ve Mineral 0_leme", "Geri Dönü_?m ve Atık Yönetimi"],
    relatedMachines: ["Tambur Sistemleri", "Kiricilar ve Parcalayicilar"],
    relatedProjects: ["Özel Proses ve Makine İmalatı"],
    faqs: [
      {
        question: "Danışmanlık sadece yeni proje için mi?",
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
    heroTitle: "Bakım ve servis yapısı ile sistemlerinizi daha uzun omurlu ve güvenli calistirin.",
    heroDescription:
      "Periyodik kontrol, parca degisimi, ayar ve teknik servis desteşi ile ekipman performansının surekliligini destekliyoruz.",
    image:
      "/images/bakim/bakim1.webp",
    scope: ["Periyodik kontrol", "Yedek parca", "Ariza tespiti", "Saha servis destegi"],
    outputs: ["Daha az plansiz durus", "Daha yüksek ekipman ömrü", "Daha güvenli isletme"],
    advantages: ["Hizli mudahale", "Onleyici bakim", "Parca takibi", "0?xletme surekliligi"],
    relatedSectors: ["Kompost ve Organik Atik Tesisleri", "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri"],
    relatedMachines: ["Taşıma Ekipmanlari", "Reaktorler ve Tanklar"],
    relatedProjects: ["Kompost Tesisi Projeleri"],
    faqs: [
      {
        question: "Periyodik bakim plani hazirlaniyor mu?",
        answer:
          "Evet, ekipman tipine ve çalışma yoğunluğuna göre planlı bakım takvimi oluşturabiliyoruz.",
      },
    ],
  },
  {
    slug: "pilot-tesis-ve-proses-test-calismalari",
    title: "Pilot Tesis ve Proses Test Çalışmaları",
    summary:
      "Tam yatırım öncesi prosesin gerçek saha verisine yakın şekilde test edilmesini sağlıyoruz.",
    heroTitle: "Pilot tesis ve proses testleriyle yatırım riskini düşürüp kararı güçlendirin.",
    heroDescription:
      "Malzeme davranışı, ürün kalitesi ve proses parametrelerini pilot çalışmalarıyla daha net görerek ana yatırımı daha sağlıklı planlıyoruz.",
    image:
      "/images/bakim/bakim2.webp",
    scope: ["Numune testleri", "Pilot denemeler", "Parametre analizi", "Sonu? raporlama"],
    outputs: ["Yatirim oncesi veri", "Malzeme davranisi analizi", "Daha doğru ekipman seçimi"],
    advantages: ["Risk azaltma", "Veriye dayali karar", "Rakiplerden ayrisan uzmanlik"],
    relatedSectors: ["Gübre üretim Tesisleri", "Atık Su çamuru ve Arıtma çözümleri"],
    relatedMachines: ["Tambur Sistemleri", "Eleme ve Siniflandirma Sistemleri"],
    relatedProjects: ["Organomineral Gübre Tesisi Projeleri"],
    faqs: [
      {
        question: "Pilot tesis ne zaman gerekli olur?",
        answer:
          "Yeni bir malzeme, değişken ürün kalitesi veya belirsiz proses davranisi oldugunda pilot çalışma karar sürecini guclendirir.",
      },
    ],
  },
  {
    slug: "proje-yonetimi-ve-saha-koordinasyonu",
    title: "Proje Yönetimi ve Saha Koordinasyonu",
    summary:
      "Farklı ekipler, tedarikler ve saha uygulamalarını aynı takvim ve hedef etrafında yönetiyoruz.",
    heroTitle: "Proje yönetimi ve saha koordinasyonuyla kurulum sürecinde dağınıklığı önleyin.",
    heroDescription:
      "Takvim, ekipler, lojistik, montaj ve test adımlarını tek bir saha koordinasyon mantığıyla yürüterek projeye netlik kazandırıyoruz.",
    image:
      "/images/01-genel/hizmetler1.png",
    scope: ["Takvim yonetimi", "Saha koordinasyonu", "Tedarik takibi", "Ekip senkronizasyonu"],
    outputs: ["Daha kontrollü ilerleme", "Daha net saha düzeni", "Süre ve kapsam takibi"],
    advantages: ["Tek merkezli koordinasyon", "Daha az saha karisiklisi", "Güven veren proje yönetimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Geri Dönü_?m ve Atık Yönetimi"],
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedProjects: ["Kompost Tesisi Projeleri", "Özel Proses ve Makine İmalatı"],
    faqs: [
      {
        question: "Sadece saha koordinasyonu hizmeti alabilir miyiz?",
        answer:
          "Evet, tum projeyi değil yalnizca saha koordinasyonu ve proje takip kismini da ayri hizmet olarak yurutebiliriz.",
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
    location: "Türkiye",
    capacity: "20 ton/gun",
    customerType: "Belediye ve cevre yatirimi",
    systems: ["Tambur Sistemleri", "Taşıma Ekipmanlari", "Eleme ve Siniflandirma Sistemleri"],
    processSummary:
      "Organik atık kabulunden kompost olgunlaştırma ve son eleme asamasina kadar tum süreç tek hat yapisinda planlandi.",
    technicalScope: [
      "Besleme ve ayristirma alani",
      "Kompost tamburu entegrasyonu",
      "Konveyor hatlari",
      "Son eleme ve ürün cikisi",
    ],
    photosNote:
      "Bu alana saha kurulum fotograflari, makine yerlestirme gorselleri ve uygulama kareleri eklenebilir.",
    outcomes: [
      "Atiklarin geri kazanim oraninin artmasi",
      "Sürecin daha kontrollü hale gelmesi",
      "Daha verimli organik ürün cikisi",
    ],
    similarProject: "Biyogaz ve Atık Yönetimi Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Taşıma Ekipmanlari"],
    relatedSector: "Kompost ve Organik Atik Tesisleri",
    relatedSolutions: ["Teknik Danışmanlık", "Pilot Tesis ve Proses Test Çalışmaları"],
    image:
      "/images/kompost/kompost1.jpg",
  },
  {
    slug: "organomineral-gubre-tesisi-projeleri",
    title: "Organomineral Gübre Tesisi Projeleri",
    summary:
      "Granül ve sıvı gübre üretim hatlarinda ürün kalitesi, kapasite ve sürdürülebilir isletme odakli kurgu.",
    projectName: "Organomineral Gübre Üretim Hatti",
    location: "Türkiye / Ic Anadolu",
    capacity: "10 ton/saat",
    customerType: "özel sektör gübre ureticisi",
    systems: ["Tambur Sistemleri", "Reaktorler ve Tanklar", "Paketleme ve Dolum Sistemleri"],
    processSummary:
      "Hammadde hazırlama, karışım, granülasyon, kurutma, eleme ve paketleme süreci tek entegre tesis mantigiyla kuruldu.",
    technicalScope: [
      "Granülasyon tamburu",
      "Sivi katkilar icin tank ve reaktor altyapisi",
      "Eleme ve geri donus hatti",
      "Torbalama ve paketleme entegrasyonu",
    ],
    photosNote:
      "Bu bolumde hat gorselleri, paketleme alani ve sahadaki teknik detay fotograflari sergilenebilir.",
    outcomes: [
      "Daha yüksek ürün standardi",
      "Kapasiteye uygun sürekli hat akışı",
      "Sevkiyata hazir son ürün yapısı",
    ],
    similarProject: "Özel Proses ve Makine İmalatı Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Paketleme ve Dolum Sistemleri"],
    relatedSector: "Gübre Üretim Tesisleri",
    relatedSolutions: ["Proses Tasarımı ve Mühendislik", "Modernizasyon ve Revizyon"],
    image:
      "/images/gubre/sivibidon.png",
  },
  {
    slug: "deri-atik-isleme-tesisi-projeleri",
    title: "Deri Atık 0_leme Tesisi Projeleri",
    summary:
      "Deri endüstrisi kaynakli atıkların ayrisma, taşıma ve geri kazanima uygun sekilde islenmesi için tesis kurgusu.",
    projectName: "Deri Atık Hazırlama ve 0_leme Tesisi",
    location: "Türkiye / Marmara",
    capacity: "8 ton/saat",
    customerType: "Sanayi tesisi",
    systems: ["Kiricilar ve Parcalayicilar", "Taşıma Ekipmanlari", "Toz Toplama Sistemleri"],
    processSummary:
      "Deri atıkların kontrollü sekilde boyutlandirilmasi, tasinmasi ve sonraki süreçlere hazirlanmasi için hat tasarlandi.",
    technicalScope: [
      "Parcalayici seçimi",
      "Bunker ve tasima hatti",
      "Toz toplama altyapisi",
      "Saha yerleşim koordinasyonu",
    ],
    photosNote:
      "Bu alana parcalama ekipmanlari, bunker yerlesimi ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Atık yönetim sürecinde duzen",
      "Daha güvenli işleme adimlari",
      "Sonraki geri kazanim sürecine uygun malzeme hazirligi",
    ],
    similarProject: "Geri Dönü_?m ve Atık Yönetimi Projeleri",
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Toz Toplama Sistemleri"],
    relatedSector: "Geri Dönü_?m ve Atık Yönetimi",
    relatedSolutions: ["Teknik Danışmanlık", "Proje Yönetimi ve Saha Koordinasyonu"],
    image:
      "/images/01-genel/geridonusum1.jpg",
  },
  {
    slug: "biyogaz-ve-atik-yonetimi-projeleri",
    title: "Biyogaz ve Atık Yönetimi Projeleri",
    summary:
      "Biyogaz besleme, organik madde hazırlama ve atık yönetim süreçlerine uygun entegre proje yapısı.",
    projectName: "Biyogaz Besleme ve Atik Hazirlama Hatti",
    location: "Türkiye / Ege",
    capacity: "15 ton/saat",
    customerType: "Enerji yatirimi ve isletmeci",
    systems: ["Depolama ve Besleme Sistemleri", "Taşıma Ekipmanlari", "Kiricilar ve Parcalayicilar"],
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
      "Daha kontrollü malzeme yönetimi",
      "Enerji tesisine uygun on hazirlik altyapisi",
    ],
    similarProject: "Kompost Tesisi Projeleri",
    relatedMachines: ["Depolama ve Besleme Sistemleri", "Taşıma Ekipmanlari"],
    relatedSector: "Enerji ve Biyogaz Sistemleri",
    relatedSolutions: ["Anahtar Teslim Tesis Kurulumu", "Proje Yönetimi ve Saha Koordinasyonu"],
    image:
      "/images/biyogaz/biogaz1.jpg",
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projeleri",
    title: "Özel Proses ve Makine İmalatı Projeleri",
    summary:
      "Sahaya özel ölçü, kapasite ve proses ihtiyacina gore uyarlanmis özel makina ve sistem çözümleri.",
    projectName: "Özel Proses Hattı ve Makine Üretimi",
    location: "Yurt ici / Yurt disi",
    capacity: "Projeye özel",
    customerType: "Farkli sanayi kollari",
    systems: ["Reaktorler ve Tanklar", "Tambur Sistemleri", "Taşıma Ekipmanlari"],
    processSummary:
      "Standart katalog disinda kalan proses gereksinimleri için özel imalat ve hat entegrasyonu odakli çözüm kurgulandi.",
    technicalScope: [
      "özel tasarim ekipman",
      "Mühendislik ve projelendirme",
      "Atölye imalat süreci",
      "Saha uyarlama ve entegrasyon",
    ],
    photosNote:
      "Bu bolume teknik cizimler, özel imalat detaylari ve uygulama fotograflari eklenebilir.",
    outcomes: [
      "Standart disi ihtiyaca uygun sistem",
      "Sahaya uyarlanmis makina yapisi",
      "Süreçe özel performans kazanimi",
    ],
    similarProject: "Organomineral Gübre Tesisi Projeleri",
    relatedMachines: ["Reaktorler ve Tanklar", "Tambur Sistemleri"],
    relatedSector: "Kimya ve Proses Endüstrisi",
    relatedSolutions: ["Makine Imalati", "Pilot Tesis ve Proses Test Çalışmaları"],
    image:
      "/images/celik/celik2.jpg",
  },
  {
    slug: "mineral-ve-dokme-kati-isleme-projeleri",
    title: "Mineral ve Dökme Katı 0_leme Projeleri",
    summary:
      "Kirma, eleme, taşıma, kurutma, sınıflandırma ve stoklama süreçlerine uygun mineral ve dökme kati malzeme proje çözümleri.",
    projectName: "Mineral ve Dökme Katı 0_leme Projesi",
    location: "Türkiye / Farkli saha senaryolari",
    capacity: "Projeye gore özel",
    customerType: "Madencilik ve proses yatirimlari",
    systems: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Taşıma Ekipmanlari",
      "Depolama ve Besleme Sistemleri",
    ],
    processSummary:
      "Mineral ve dokme kati malzemenin kabulunden kirma, eleme, kurutma, siniflandirma ve stoklamaya kadar uzanan hat yapisi proses ve saha verilerine gore kurgulanir.",
    technicalScope: [
      "Ür?n karakterizasyonu ve proses analizi",
      "Kirma, eleme ve siniflandirma kurgusu",
      "Taşıma, stoklama ve transfer altyapisi",
      "Toz, asinma ve kapasite yonetimi",
    ],
    photosNote:
      "Bu alana kirma-eleme hatlari, taşıma sistemleri, stoklama çözümleri ve saha uygulama gorselleri eklenebilir.",
    outcomes: [
      "Proses akisina uygun hat kurgusu",
      "Kapasiteye uygun ekipman seçimi",
      "Asinma ve toz yonetimi odakli tesis yaklasimi",
    ],
    similarProject: "Özel Proses ve Makine İmalatı Projeleri",
    relatedMachines: [
      "Kiricilar ve Parcalayicilar",
      "Eleme ve Siniflandirma Sistemleri",
      "Taşıma Ekipmanlari",
    ],
    relatedSector: "Madencilik ve Mineral 0_leme",
    relatedSolutions: [
      "Proses Tasarımı ve Mühendislik",
      "Makine Imalati",
      "Anahtar Teslim Tesis Kurulumu",
    ],
    image:
      "/images/maden/maden1.jpg",
  },
];

export const librarySections: { title: LibraryCategory; description: string }[] = [
  {
    title: "Blog / Makaleler",
    description: "Sektöre yön veren, arama niyeti güçlü makaleler ve konu kümeleri.",
  },
  {
    title: "Teknik Rehberler",
    description: "Karar sürecini destekleyen detayli teknik aciklamalar ve saha odakli rehberler.",
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
    description: "Google için yüksek potansiyelli, temel kavramlari aciklayan otorite sayfalari.",
  },
  {
    title: "Programlar",
    description: "Hesaplama araçlari, seçim programlari ve teknik yardımcı ekranlari tek merkezde inceleyin.",
  },
];

export const libraryItems: LibraryItem[] = [
  {
    slug: "kompost-tesisi-nasil-kurulur",
    title: "Kompost Tesisi Nasil Kurulur",
    category: "Blog / Makaleler",
    summary: "Kompost tesisi kurulumunda saha, proses, ekipman ve kapasite planlamasinin temel adimlari.",
    heroTitle: "Kompost tesisi kurulumunda doğru başlangıç nasil yapilir?",
    heroDescription:
      "Kompost tesisi kurmak isteyen yatırımcılar için saha seçimi, ekipman yapısı, proses akışı ve kapasite planlamasını sade ama güçlü şekilde açıklıyoruz.",
    sections: [
      {
        heading: "Kurulum mantigi",
        text: "Kompost tesisleri yalnızca ekipman seçimiyle değil; kabul alanı, malzeme akışı, ön hazırlama, kompostlama ve son ürün yönetimiyle birlikte ele alınmalıdır.",
      },
      {
        heading: "Ekipman seçimi",
        text: "Tambur sistemleri, tasima ekipmanlari ve eleme sistemleri malzeme karakterine gore birlikte degerlendirilmelidir.",
      },
    ],
    relatedLinks: ["Kompost Üretiminde Tambur Sistemleri", "Organik Atıkların Geri Kazanımı"],
  },
  {
    slug: "kompost-uretiminde-tambur-sistemleri",
    title: "Kompost Üretiminde Tambur Sistemleri",
    category: "Teknik Rehberler",
    summary: "Kompost tamburlarinin neden tercih edildigi, hangi asamada kullanildigi ve seçim kriterleri.",
    heroTitle: "Kompost üretiminde tambur sistemleri neden kritik rol oynar?",
    heroDescription:
      "Kompost proseslerinde tambur yapisinin sure, karisim, havalandirma ve verim acisindan sagladigi farklari teknik olarak ele aliyoruz.",
    sections: [
      {
        heading: "Tambur ne saglar",
        text: "Kompost tamburu süreci hizlandirabilir, homojenligi artirabilir ve saha operasyonunu daha kontrollü hale getirebilir.",
      },
      {
        heading: "seçim kriterleri",
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
    heroTitle: "Organik atıklar nasil ekonomik değer ureten bir süreçe donusebilir?",
    heroDescription:
      "Kompost, biyogaz ve farkli proses modelleriyle organik atiklarin geri kazanimi icin uygulanabilir yol haritalarini anlatiyoruz.",
    sections: [
      {
        heading: "Geri kazanim modelleri",
        text: "Kompostlama, biyogaz ve farkli on isleme yontemleri atik karakterine gore secilir.",
      },
      {
        heading: "Tesis etkisi",
        text: "Doğru ekipman ve süreç tasarımı geri kazanım oranini doğrudan etkiler.",
      },
    ],
    relatedLinks: ["Biyogaz ve Atık Yönetimi Projeleri", "Kompost Tesisi Nasil Kurulur"],
  },
  {
    slug: "organomineral-gubre-uretim-sureci",
    title: "Organomineral Gübre Üretim Süreci",
    category: "Blog / Makaleler",
    summary: "Organomineral gübre üretiminde hammadde, karışım, granülasyon ve son ürün adimlari.",
    heroTitle: "Organomineral gübre üretim süreci hangi adimlardan olusur?",
    heroDescription:
      "Hammadde seciminden granülasyon ve paketlemeye kadar organomineral gübre üretiminin temel proses yapisini acikliyoruz.",
    sections: [
      {
        heading: "Üretim adımları",
        text: "Karıştırma, dozajlama, granülasyon, kurutma, eleme ve paketleme süreci birlikte planlanir.",
      },
      {
        heading: "Kritik noktalar",
        text: "Nem kontrolü, ürün homojenligi ve granül kalitesi sistem secimini doğrudan etkiler.",
      },
    ],
    relatedLinks: ["Granülasyon Nedir", "Gübre Granülasyon Hattı Nasıl Çalışır"],
  },
  {
    slug: "gubre-granulasyon-hatti-nasil-calisir",
    title: "Gübre Granülasyon Hattı Nasıl Çalışır",
    category: "Teknik Rehberler",
    summary: "Granülasyon hattinin tambur, eleme, geri donus ve paketleme mantigi.",
    heroTitle: "Gübre granülasyon hatti hangi ekipmanlarla ve nasil çalışır?",
    heroDescription:
      "Granül oluşturma, kurutma, sınıflandırma ve geri dönüş akışını sistem bazında anlatıyoruz.",
    sections: [
      {
        heading: "Hat yapisi",
        text: "Granülasyon hattinda hammadde hazırlama, tambur, eleme, geri donus ve paketleme istasyonlari birlikte ele alinmalidir.",
      },
      {
        heading: "Verim unsurlari",
        text: "Kapasite seçimi, ürün nemi ve geri donus orani hat verimi uzerinde belirleyicidir.",
      },
    ],
    relatedLinks: ["Organomineral Gübre Üretim Süreci", "Tambur Kurutma Sistemleri Nasıl Çalışır"],
  },
  {
    slug: "gubre-fabrikasi-maliyeti-2026",
    title: "Gübre Fabrikasi Maliyeti 2026",
    category: "Blog / Makaleler",
    summary: "Gübre fabrikasi yatiriminda maliyeti etkileyen ekipman, kapasite ve proses basliklari.",
    heroTitle: "Gübre fabrikasi maliyeti 2026 yilinda hangi kalemlere gore değişir?",
    heroDescription:
      "Kapasite, ürün tipi, otomasyon seviyesi ve ekipman yapisinin yatırım maliyetine etkisini ana basliklar halinde ele aliyoruz.",
    sections: [
      {
        heading: "Maliyet kalemleri",
        text: "Ekipman, kurulum, otomasyon, enerji ve saha altyapisi toplam yatirim icinde belirleyici rol oynar.",
      },
      {
        heading: "Doğru planlama",
        text: "Pilot test, proses tasarımı ve doğru ekipman seçimi gereksiz yatırım risklerini azaltir.",
      },
    ],
    relatedLinks: ["Teknik Danışmanlık", "Anahtar Teslim Tesis Kurulumu Nedir"],
  },
  {
    slug: "tambur-kurutma-sistemleri-nasil-calisir",
    title: "Tambur Kurutma Sistemleri Nasıl Çalışır",
    category: "Teknik Rehberler",
    summary: "Tambur kurutucularin çalışma prensibi, kullanim alanlari ve seçim kriterleri.",
    heroTitle: "Tambur kurutma sistemleri nasil calisir ve nerelerde kullanilir?",
    heroDescription:
      "Tambur kurutucularin isi transferi, ürün hareketi ve kapasite mantigini sade ama teknik bir dille anlatiyoruz.",
    sections: [
      {
        heading: "Çalışma mantigi",
        text: "Malzeme tambur icinde ilerlerken sicak hava ile temas eder ve istenen neme doğru ilerler.",
      },
      {
        heading: "seçim kriterleri",
        text: "Malzemenin nemi, tane yapisi, sicaklik hassasiyeti ve hedef kapasite kritik rol oynar.",
      },
    ],
    relatedLinks: ["Tambur Sistemleri", "Granülasyon Nedir"],
  },
  {
    slug: "bant-konveyor-secimi-nasil-yapilir",
    title: "Bant Konveyor seçimi Nasil Yapilir",
    category: "Teknik Rehberler",
    summary: "Mesafe, egim, kapasite ve malzeme tipine gore bant konveyor seçim kriterleri.",
    heroTitle: "Bant konveyor seçimi yaparken hangi kriterlere dikkat edilmeli?",
    heroDescription:
      "Hat uzunlugu, ürün tipi, taşıma hizi ve saha koşullarına gore bant konveyor seciminin temel mantigini acikliyoruz.",
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
    relatedLinks: ["Taşıma Ekipmanlari", "Toz Toplama Sistemleri Neden Onemlidir"],
  },
  {
    slug: "endustriyel-kirici-tipleri-ve-kullanim-alanlari",
    title: "Endustriyel Kirici Tipleri ve Kullanim Alanlari",
    category: "Blog / Makaleler",
    summary: "Çekiçli degirmen, ceneli kırıcı, zincirli kırıcı ve parcalayici tiplerinin kullanim farklari.",
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
        text: "Mineral, organik atık ve geri dönüşüm malzemelerinde farkli kirici tipleri one çıkar.",
      },
    ],
    relatedLinks: ["Kiricilar ve Parcalayicilar", "Madencilik ve Mineral 0_leme"],
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
        text: "Mühendislikten saha kurulumuna kadar birçok adim ayni koordinasyon yapısı altinda toplanir.",
      },
      {
        heading: "Avantaj",
        text: "Süreç butunlugu, zaman kontrolü ve daha net sorumluluk dagilimi sağlar.",
      },
    ],
    relatedLinks: ["Anahtar Teslim Tesis Kurulumu", "Proje Yönetimi ve Saha Koordinasyonu"],
  },
  {
    slug: "endustriyel-proses-tasariminda-dikkat-edilecekler",
    title: "Endustriyel Proses Tasariminda Dikkat Edilecekler",
    category: "Teknik Rehberler",
    summary: "Kapasite, akış, enerji, güvenlik ve işletme mantigi acisindan proses tasarımı notlari.",
    heroTitle: "Endustriyel proses tasariminda hangi basliklar kritik oneme sahiptir?",
    heroDescription:
      "Tesis yatiriminin erken asamasinda doğru proses kararlarini vermek için temel teknik basliklari bir araya getiriyoruz.",
    sections: [
      {
        heading: "Baslangic verisi",
        text: "Malzeme tipi, kapasite ihtiyaci, ürün hedefi ve saha gercegi ayni tabloda degerlendirilmelidir.",
      },
      {
        heading: "0?xletme etkisi",
        text: "Doğru proses tasarımı sadece yatirimi değil, uzun vadeli isletme maliyetlerini de belirler.",
      },
    ],
    relatedLinks: ["Proses Tasarımı ve Mühendislik", "Pilot Tesis ve Proses Test Çalışmaları"],
  },
  {
    slug: "toz-toplama-sistemleri-neden-onemlidir",
    title: "Toz Toplama Sistemleri Neden Onemlidir",
    category: "Sik Sorulan Sorular",
    summary: "Toz toplama sistemlerinin is güvenligi, ekipman korumasi ve kalite uzerindeki etkisi.",
    heroTitle: "Toz toplama sistemleri neden sadece ek ekipman değil, ana proses unsurudur?",
    heroDescription:
      "Toz kontrolunun saha temizligi, ürün kaybi, is güvenligi ve ekipman ömrü acisindan neden kritik oldugunu anlatiyoruz.",
    sections: [
      {
        heading: "Operasyon etkisi",
        text: "Toz kontrol? olmayan sistemlerde ekipman asinmasi, saha kirliligi ve kayiplar daha hizli artar.",
      },
      {
        heading: "Sistem seçimi",
        text: "Jet pulse, siklon ve torba filtre seçimi hava debisi ve toz karakterine gore yapilmalidir.",
      },
    ],
    relatedLinks: ["Toz Toplama Sistemleri", "Kimya ve Proses Endüstrisi"],
  },
  {
    slug: "granulasyon-nedir",
    title: "Granülasyon Nedir",
    category: "Terimler Sozlugu",
    summary: "Toz veya ince malzemenin belirli boyutta granül forma getirilme sürecinin tanimi.",
    heroTitle: "Granülasyon nedir?",
    heroDescription:
      "Granülasyon; ince taneli veya toz formdaki malzemenin, proses yardimiyla daha duzenli ve kullanilabilir granül forma donüst?rulmesidir.",
    sections: [
      {
        heading: "Neden kullanilir",
        text: "Depolama, taşıma, uygulama kolayligi ve ürün standardi saglamak için granülasyon tercih edilir.",
      },
      {
        heading: "Hangi alanlarda gorulur",
        text: "Gübre, kimya ve dökme kati malzeme proseslerinde sik kullanilir.",
      },
    ],
    relatedLinks: ["Gübre Granülasyon Hattı Nasıl Çalışır", "Organomineral Gübre Nedir"],
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
        heading: "Çalışma mantigi",
        text: "Malzeme donen govde icinde ilerlerken goz acikligina gore ayrisir.",
      },
      {
        heading: "Nerede kullanilir",
        text: "Kompost, geri dönüşüm ve dökme kati malzeme sınıflandırma hatlarinda yaygindir.",
      },
    ],
    relatedLinks: ["Eleme ve Sınıflandırma Sistemleri", "Kompost Üretiminde Tambur Sistemleri"],
  },
  {
    slug: "organomineral-gubre-nedir",
    title: "Organomineral Gübre Nedir",
    category: "Terimler Sozlugu",
    summary: "Organik ve mineral bilesenleri bir araya getiren gübre tür?nun temel tanimi.",
    heroTitle: "Organomineral gübre nedir?",
    heroDescription:
      "Organomineral gübre, organik kaynakli maddeler ile mineral besin elementlerinin birlikte bulundugu gübre turudur.",
    sections: [
      {
        heading: "Yapi",
        text: "Organik icerik ile mineral besin elementlerini ayni ürün yapisinda birlestirir.",
      },
      {
        heading: "Üretim süreci",
        text: "Karıştırma, granülasyon ve kurutma gibi proses adimlariyla nihai ürün haline gelir.",
      },
    ],
    relatedLinks: ["Organomineral Gübre Üretim Süreci", "Granülasyon Nedir"],
  },
  {
    slug: "kompost-tamburu-nedir",
    title: "Kompost Tamburu Nedir",
    category: "Terimler Sozlugu",
    summary: "Kompost prosesinde malzemenin kontrollü karışımı ve ilerlemesi için kullanılan tambur sistemi.",
    heroTitle: "Kompost tamburu nedir?",
    heroDescription:
      "Kompost tamburu, organik malzemenin daha kontrollü şekilde karıştırılması ve ilerletilmesi için kullanılan döner proses ekipmanıdır.",
    sections: [
      {
        heading: "Fonksiyon",
        text: "Homojenligi artirir, süreci hizlandirabilir ve saha operasyonunu daha duzenli hale getirir.",
      },
      {
        heading: "Kullanim alani",
        text: "Kompost tesislerinde farkli organik atiklarin on isleme ve kompostlama asamalarinda kullanilir.",
      },
    ],
    relatedLinks: ["Kompost Üretiminde Tambur Sistemleri", "Kompost Tesisi Nasil Kurulur"],
  },
  {
    slug: "organomineral-gubre-tesisi-maliyeti",
    title: "Organomineral Gübre Tesisi Maliyeti",
    category: "Blog / Makaleler",
    summary: "Organomineral gübre tesisi maliyeti, kapasite planı ve yatırım yakla_1m1 hakkında kapsamlı içerik.",
    heroTitle: "Organomineral gübre tesisi maliyeti nasıl planlanır?",
    heroDescription:
      "Türkiye pazarı için organomineral gübre tesisi yatırımında ekipman, proses ve saha maliyetlerini deerlendiren uzun form makale.",
    sections: [
      {
        heading: "Yatırım ?er?evesi",
        text: "Kapasite, ürün tipi, granülasyon ihtiyacı ve saha kurgusu toplam yatırım planını belirler.",
      },
      {
        heading: "Maliyet kalemleri",
        text: "Makina imalatı, çelik konstr?ksiyon, otomasyon, montaj ve devreye alma toplam maliyetin ana parçalarıdır.",
      },
    ],
    relatedLinks: ["Gübre Tesisi Kurulumu", "Organomineral Gübre Tesisi Kurulumu"],
  },
  {
    slug: "granul-gubre-uretim-sureci",
    title: "Granül Gübre üretim Süreci",
    category: "Blog / Makaleler",
    summary: "Granül gübre üretim süreci, kullanılan makinalar ve yatırım mant11n1 anlatan teknik makale.",
    heroTitle: "Granül gübre üretim süreci nasıl çal1_1r?",
    heroDescription:
      "Granülasyon, kurutma, soutma, eleme ve paketleme adımlarını Türkiye pazarı odaında açıklayan detaylı içerik.",
    sections: [
      {
        heading: "Proses yapısı",
        text: "Hammadde hazırlama, granülasyon, kurutma ve son ürün hazırlama adımları ayn1 hat dengesi içinde ele alınır.",
      },
      {
        heading: "Makina grupları",
        text: "Granülatür tamburu, kurutma tamburu, soutma tamburu ve elek sistemleri ana ekipman grubunu oluşturur.",
      },
    ],
    relatedLinks: ["Granül Gübre üretim Tesisi", "Gübre Tesisi Kurulumu"],
  },
  {
    slug: "sivi-gubre-uretim-tesisi-nasil-kurulur",
    title: "Sıvı Gübre üretim Tesisi Nasıl Kurulur",
    category: "Blog / Makaleler",
    summary: "Sıvı gübre üretim tesisi kurulumunda proses, ekipman, kapasite ve yatırım adımlarını anlatan rehber makale.",
    heroTitle: "Sıvı gübre üretim tesisi nasıl kurulur?",
    heroDescription:
      "Sıvı organomineral, amino asitli ve NPK ürünler için proses ve ekipman kurgusunu detaylandıran kapsamlı içerik.",
    sections: [
      {
        heading: "Kurulum mant11",
        text: "ürün tipi, tank yapısı, çözündürme, filtrasyon ve dolum planı proje ba_langıcında birlikte deerlendirilir.",
      },
      {
        heading: "Kapasite ve stok",
        text: "Parti büyükl??, dolum hız1 ve stok senaryosu sıvı gübre tesislerinde gerçek kapasiteyi belirler.",
      },
    ],
    relatedLinks: ["Sıvı Gübre üretim Tesisi", "Gübre Tesisi Kurulumu"],
  },
  {
    slug: "kurutma-tamburu-tasarim-kriterleri",
    title: "Kurutma Tamburu Tasarım Kriterleri",
    category: "Teknik Rehberler",
    summary: "Kurutma tamburu tasarımında çap, boy, eim, devir ve enerji tüketimi kriterlerini anlatan teknik rehber.",
    heroTitle: "Kurutma tamburu tasarım kriterleri nelerdir?",
    heroDescription:
      "Tambur ?ap1, boyu, i? kanat yapısı, ürün nemi ve sıcak hava dengesini mühendislik perspektifiyle açıklayan rehber içerik.",
    sections: [
      {
        heading: "Geometri ve devir",
        text: "çap, boy, eim ve devir malzemenin tambur içinde ilerleme süresini ve 1s1 temasını belirler.",
      },
      {
        heading: "Enerji ve proses",
        text: "Nem yükü, sıcak hava ve ürün davran1_1 birlikte ele alınmadan salıklı kurutma hesabı yapılamaz.",
      },
    ],
    relatedLinks: ["Granül Gübre üretim Tesisi", "Tambur Sistemleri"],
  },
  {
    slug: "sik-sorulan-sorular",
    title: "S1k Sorulan Sorular",
    category: "Sik Sorulan Sorular",
    summary: "Gübre, kompost, proses ekipmanları ve tesis yatırımları hakkında en çok sorulan soruların kısa cevapları.",
    heroTitle: "S1k sorulan sorular",
    heroDescription:
      "Gübre tesisi kurulumu, ekipman seçimi, kapasite hesabı ve yatırım planlaması hakkında hızlı yanıtlar sunan sayfa.",
    sections: [
      {
        heading: "H1zl1 yanıtlar",
        text: "Yatırım ve teknik karar sürecinde en sık sorulan sorular tek sayfada toplandı.",
      },
      {
        heading: "0lgili balantılar",
        text: "Gerekli durumlarda hizmet sayfalarına geçi_ yaparak daha detaylı içeriklere ula_abilirsiniz.",
      },
    ],
    relatedLinks: ["Gübre Tesisi Kurulumu", "Sıvı Gübre üretim Tesisi"],
  },
  {
    slug: "terimler-sozlugu",
    title: "Endüstriyel Proses ve Makina Terimleri S?zl??",
    category: "Terimler Sozlugu",
    summary: "Granülasyon, kurutma tamburu, reaktör ve kapasite gibi temel kavramları açıklayan s?zl?k sayfası.",
    heroTitle: "Endüstriyel proses ve makina terimleri s?zl??",
    heroDescription:
      "Gübre, kompost, taşıma ve proses ekipmanlarında kullanılan temel terimleri kısa tanım ve kullanım alanıyla açıklıyoruz.",
    sections: [
      {
        heading: "K1sa tanımlar",
        text: "Sektörde sık kullanılan teknik terimler sade ama doru mühendislik diliyle açıklanır.",
      },
      {
        heading: "Kullanım alanları",
        text: "Her terim için hangi proseslerde ve hangi ekipman ailelerinde kullanıld11 özetlenir.",
      },
    ],
    relatedLinks: ["Granül Gübre üretim Süreci", "Kurutma Tamburu Tasarım Kriterleri"],
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

normalizeCollectionInPlace(services);
normalizeCollectionInPlace(projects);
normalizeCollectionInPlace(libraryItems);



