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
      "Anahtar teslim tesis kurulumunda tüm süreci tek bir koordinasyonla yönetiyoruz. Kompost, gübre, geri dönüşüm ve proses tesisleri için planlama, imalat, montaj ve devreye alma adımlarını tek çatı altında topluyoruz.",
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
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
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
      "Gelecek büyümeye açık altyapı",
    ],
    relatedSectors: [
      "Gübre üretim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "Atık Su çamuru ve Arıtma çözümleri",
      "Geri Dönüşüm ve Atık Yönetimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral İşleme",
      "Kimya ve Proses Endüstrisi",
      "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
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
          "Hayır. Yeni yatırımların yanı sıra mevcut tesislerin revizyonu, kapasite artışı ve proses iyileştirme çalışmaları için de uygundur.",
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
    relatedSectors: ["Madencilik ve Mineral İşleme", "Geri Dönüşüm ve Atık Yönetimi"],
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
    advantages: ["Saha koordinasyonu", "Sürekli takip", "Performans kontrolü", "Ekip eğitimi"],
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
    relatedSectors: ["Madencilik ve Mineral İşleme", "Geri Dönüşüm ve Atık Yönetimi"],
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
    advantages: ["Hizli mudahale", "Onleyici bakim", "Parca takibi", "İşletme sürekliliği"],
    relatedSectors: ["Kompost ve Organik Atik Tesisleri", "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri"],
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
    scope: ["Numune testleri", "Pilot denemeler", "Parametre analizi", "Sonuç raporlama"],
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
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Geri Dönüşüm ve Atık Yönetimi"],
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
    title: "Deri Atık İşleme Tesisi Projeleri",
    summary:
      "Deri endüstrisi kaynakli atıkların ayrisma, taşıma ve geri kazanima uygun sekilde islenmesi için tesis kurgusu.",
    projectName: "Deri Atık Hazırlama ve İşleme Tesisi",
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
    similarProject: "Geri Dönüşüm ve Atık Yönetimi Projeleri",
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Toz Toplama Sistemleri"],
    relatedSector: "Geri Dönüşüm ve Atık Yönetimi",
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
    title: "Mineral ve Dökme Katı İşleme Projeleri",
    summary:
      "Kirma, eleme, taşıma, kurutma, sınıflandırma ve stoklama süreçlerine uygun mineral ve dökme kati malzeme proje çözümleri.",
    projectName: "Mineral ve Dökme Katı İşleme Projesi",
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
      "Ürün karakterizasyonu ve proses analizi",
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
    relatedSector: "Madencilik ve Mineral İşleme",
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
    title: "Kompost Tesisi Nasıl Kurulur",
    category: "Blog / Makaleler",
    summary: "Kompost tesisi kurulumunda saha, proses, ekipman ve kapasite planlamasının temel adımları.",
    heroTitle: "Kompost tesisi kurulumunda doğru başlangıç nasıl yapılır?",
    heroDescription:
      "Kompost tesisi kurmak isteyen yatırımcılar için saha seçimi, ekipman yapısı, proses akışı ve kapasite planlamasını sade ama güçlü şekilde açıklıyoruz.",
    sections: [
      {
        heading: "Kurulum mantığı",
        text: "Kompost tesisleri yalnızca ekipman seçimiyle değil; kabul alanı, malzeme akışı, ön hazırlama, kompostlama ve son ürün yönetimiyle birlikte ele alınmalıdır.",
      },
      {
        heading: "Ekipman seçimi",
        text: "Tambur sistemleri, taşıma ekipmanları ve eleme sistemleri malzeme karakterine göre birlikte değerlendirilmelidir.",
      },
    ],
    relatedLinks: ["Kompost Üretiminde Tambur Sistemleri", "Organik Atıkların Geri Kazanımı"],
  },
  {
    slug: "kompost-uretiminde-tambur-sistemleri",
    title: "Kompost Üretiminde Tambur Sistemleri",
    category: "Teknik Rehberler",
    summary: "Kompost tamburlarının neden tercih edildiği, hangi aşamada kullanıldığı ve seçim kriterleri.",
    heroTitle: "Kompost üretiminde tambur sistemleri neden kritik rol oynar?",
    heroDescription:
      "Kompost proseslerinde tambur yapısının süre, karışım, havalandırma ve verim açısından sağladığı farkları teknik olarak ele alıyoruz.",
    sections: [
      {
        heading: "Tambur ne sağlar",
        text: "Kompost tamburu süreci hızlandırabilir, homojenliği artırabilir ve saha operasyonunu daha kontrollü hale getirebilir.",
      },
      {
        heading: "Seçim kriterleri",
        text: "Malzeme tipi, nem, hedef kapasite ve beklenen olgunlaşma mantığı seçimde belirleyici olur.",
      },
    ],
    relatedLinks: ["Kompost Tamburu Nedir", "Kompost Tesisi Nasıl Kurulur"],
  },
  {
    slug: "organik-atiklarin-geri-kazanimi",
    title: "Organik Atıkların Geri Kazanımı",
    category: "Blog / Makaleler",
    summary: "Organik atıkların ekonomik ve çevresel değer üretecek şekilde nasıl geri kazanılabileceği.",
    heroTitle: "Organik atıklar nasıl ekonomik değer üreten bir sürece dönüşebilir?",
    heroDescription:
      "Kompost, biyogaz ve farklı proses modelleriyle organik atıkların geri kazanımı için uygulanabilir yol haritalarını anlatıyoruz.",
    sections: [
      {
        heading: "Geri kazanım modelleri",
        text: "Kompostlama, biyogaz ve farklı ön işleme yöntemleri atık karakterine göre seçilir.",
      },
      {
        heading: "Tesis etkisi",
        text: "Doğru ekipman ve süreç tasarımı geri kazanım oranını doğrudan etkiler.",
      },
    ],
    relatedLinks: ["Biyogaz ve Atık Yönetimi Projeleri", "Kompost Tesisi Nasıl Kurulur"],
  },
  {
    slug: "organomineral-gubre-uretim-sureci",
    title: "Organomineral Gübre Üretim Süreci",
    category: "Blog / Makaleler",
    summary: "Organomineral gübre üretiminde hammadde, karışım, granülasyon ve son ürün adımları.",
    heroTitle: "Organomineral gübre üretim süreci hangi adımlardan oluşur?",
    heroDescription:
      "Hammadde seçiminden granülasyon ve paketlemeye kadar organomineral gübre üretiminin temel proses yapısını açıklıyoruz.",
    sections: [
      {
        heading: "Üretim adımları",
        text: "Karıştırma, dozajlama, granülasyon, kurutma, eleme ve paketleme süreci birlikte planlanır.",
      },
      {
        heading: "Kritik noktalar",
        text: "Nem kontrolü, ürün homojenliği ve granül kalitesi sistem seçimini doğrudan etkiler.",
      },
    ],
    relatedLinks: ["Granülasyon Nedir", "Gübre Granülasyon Hattı Nasıl Çalışır"],
  },
  {
    slug: "gubre-granulasyon-hatti-nasil-calisir",
    title: "Gübre Granülasyon Hattı Nasıl Çalışır",
    category: "Teknik Rehberler",
    summary: "Granülasyon hattının tambur, eleme, geri dönüş ve paketleme mantığı.",
    heroTitle: "Gübre granülasyon hattı hangi ekipmanlarla ve nasıl çalışır?",
    heroDescription:
      "Granül oluşturma, kurutma, sınıflandırma ve geri dönüş akışını sistem bazında anlatıyoruz.",
    sections: [
      {
        heading: "Hat yapısı",
        text: "Granülasyon hattında hammadde hazırlama, tambur, eleme, geri dönüş ve paketleme istasyonları birlikte ele alınmalıdır.",
      },
      {
        heading: "Verim unsurları",
        text: "Kapasite seçimi, ürün nemi ve geri dönüş oranı hat verimi üzerinde belirleyicidir.",
      },
    ],
    relatedLinks: ["Organomineral Gübre Üretim Süreci", "Tambur Kurutma Sistemleri Nasıl Çalışır"],
  },
  {
    slug: "gubre-fabrikasi-maliyeti-2026",
    title: "Gübre Fabrikası Maliyeti 2026",
    category: "Blog / Makaleler",
    summary: "Gübre fabrikası yatırımında maliyeti etkileyen ekipman, kapasite ve proses başlıkları.",
    heroTitle: "Gübre fabrikası maliyeti 2026 yılında hangi kalemlere göre değişir?",
    heroDescription:
      "Kapasite, ürün tipi, otomasyon seviyesi ve ekipman yapısının yatırım maliyetine etkisini ana başlıklar halinde ele alıyoruz.",
    sections: [
      {
        heading: "Maliyet kalemleri",
        text: "Ekipman, kurulum, otomasyon, enerji ve saha altyapısı toplam yatırım içinde belirleyici rol oynar.",
      },
      {
        heading: "Doğru planlama",
        text: "Pilot test, proses tasarımı ve doğru ekipman seçimi gereksiz yatırım risklerini azaltır.",
      },
    ],
    relatedLinks: ["Teknik Danışmanlık", "Anahtar Teslim Tesis Kurulumu Nedir"],
  },
  {
    slug: "tambur-kurutma-sistemleri-nasil-calisir",
    title: "Tambur Kurutma Sistemleri Nasıl Çalışır",
    category: "Teknik Rehberler",
    summary: "Tambur kurutucuların çalışma prensibi, kullanım alanları ve seçim kriterleri.",
    heroTitle: "Tambur kurutma sistemleri nasıl çalışır ve nerelerde kullanılır?",
    heroDescription:
      "Tambur kurutucuların ısı transferi, ürün hareketi ve kapasite mantığını sade ama teknik bir dille anlatıyoruz.",
    sections: [
      {
        heading: "Çalışma mantığı",
        text: "Malzeme tambur içinde ilerlerken sıcak hava ile temas eder ve istenen neme doğru ilerler.",
      },
      {
        heading: "Seçim kriterleri",
        text: "Malzemenin nemi, tane yapısı, sıcaklık hassasiyeti ve hedef kapasite kritik rol oynar.",
      },
    ],
    relatedLinks: ["Tambur Sistemleri", "Granülasyon Nedir"],
  },
  {
    slug: "bant-konveyor-secimi-nasil-yapilir",
    title: "Bant Konveyör Seçimi Nasıl Yapılır",
    category: "Teknik Rehberler",
    summary: "Mesafe, eğim, kapasite ve malzeme tipine göre bant konveyör seçim kriterleri.",
    heroTitle: "Bant konveyör seçimi yaparken hangi kriterlere dikkat edilmeli?",
    heroDescription:
      "Hat uzunluğu, ürün tipi, taşıma hızı ve saha koşullarına göre bant konveyör seçiminin temel mantığını açıklıyoruz.",
    sections: [
      {
        heading: "Tasarım kriterleri",
        text: "Kapasite, bant genişliği, taşıma mesafesi ve yükleme boşaltma noktası ilk belirleyicilerdir.",
      },
      {
        heading: "Saha uyumu",
        text: "Yükseklik farkı, toz kontrolü ve hat içi bağlantılar tasarım kararlarını etkiler.",
      },
    ],
    relatedLinks: ["Taşıma Ekipmanları", "Toz Toplama Sistemleri Neden Önemlidir"],
  },
  {
    slug: "endustriyel-kirici-tipleri-ve-kullanim-alanlari",
    title: "Endüstriyel Kırıcı Tipleri ve Kullanım Alanları",
    category: "Blog / Makaleler",
    summary: "Çekiçli değirmen, çeneli kırıcı, zincirli kırıcı ve parçalayıcı tiplerinin kullanım farkları.",
    heroTitle: "Endüstriyel kırıcı tipleri ve kullanım alanları nasıl ayrışır?",
    heroDescription:
      "Farklı malzemeler için kullanılan kırıcı ve parçalayıcı tiplerini proses mantığına göre karşılaştırıyoruz.",
    sections: [
      {
        heading: "Kırıcı tipleri",
        text: "Malzemenin sertliği, nemi ve hedef parçacık boyutu kırıcı seçiminde ana parametrelerdir.",
      },
      {
        heading: "Kullanım senaryoları",
        text: "Mineral, organik atık ve geri dönüşüm malzemelerinde farklı kırıcı tipleri öne çıkar.",
      },
    ],
    relatedLinks: ["Kırıcılar ve Parçalayıcılar", "Madencilik ve Mineral İşleme"],
  },
  {
    slug: "anahtar-teslim-tesis-kurulumu-nedir",
    title: "Anahtar Teslim Tesis Kurulumu Nedir",
    category: "Sik Sorulan Sorular",
    summary: "Anahtar teslim modelin ne olduğu, neleri kapsadığı ve neden tercih edildiği.",
    heroTitle: "Anahtar teslim tesis kurulumu ne anlama gelir?",
    heroDescription:
      "Tek muhatapla yürütülen tesis kurulum modelinin kapsamını, avantajlarını ve proje yönetim etkisini açıklıyoruz.",
    sections: [
      {
        heading: "Kapsam",
        text: "Mühendislikten saha kurulumuna kadar birçok adım aynı koordinasyon yapısı altında toplanır.",
      },
      {
        heading: "Avantaj",
        text: "Süreç bütünlüğü, zaman kontrolü ve daha net sorumluluk dağılımı sağlar.",
      },
    ],
    relatedLinks: ["Anahtar Teslim Tesis Kurulumu", "Proje Yönetimi ve Saha Koordinasyonu"],
  },
  {
    slug: "endustriyel-proses-tasariminda-dikkat-edilecekler",
    title: "Endüstriyel Proses Tasarımında Dikkat Edilecekler",
    category: "Teknik Rehberler",
    summary: "Kapasite, akış, enerji, güvenlik ve işletme mantığı açısından proses tasarımı notları.",
    heroTitle: "Endüstriyel proses tasarımında hangi başlıklar kritik öneme sahiptir?",
    heroDescription:
      "Tesis yatırımının erken aşamasında doğru proses kararlarını vermek için temel teknik başlıkları bir araya getiriyoruz.",
    sections: [
      {
        heading: "Başlangıç verisi",
        text: "Malzeme tipi, kapasite ihtiyacı, ürün hedefi ve saha gerçeği aynı tabloda değerlendirilmelidir.",
      },
      {
        heading: "İşletme etkisi",
        text: "Doğru proses tasarımı sadece yatırımı değil, uzun vadeli işletme maliyetlerini de belirler.",
      },
    ],
    relatedLinks: ["Proses Tasarımı ve Mühendislik", "Pilot Tesis ve Proses Test Çalışmaları"],
  },
  {
    slug: "toz-toplama-sistemleri-neden-onemlidir",
    title: "Toz Toplama Sistemleri Neden Önemlidir",
    category: "Sik Sorulan Sorular",
    summary: "Toz toplama sistemlerinin iş güvenliği, ekipman koruması ve kalite üzerindeki etkisi.",
    heroTitle: "Toz toplama sistemleri neden sadece ek ekipman değil, ana proses unsurudur?",
    heroDescription:
      "Toz kontrolünün saha temizliği, ürün kaybı, iş güvenliği ve ekipman ömrü açısından neden kritik olduğunu anlatıyoruz.",
    sections: [
      {
        heading: "Operasyon etkisi",
        text: "Toz kontrolü olmayan sistemlerde ekipman aşınması, saha kirliliği ve kayıplar daha hızlı artar.",
      },
      {
        heading: "Sistem seçimi",
        text: "Jet pulse, siklon ve torba filtre seçimi hava debisi ve toz karakterine göre yapılmalıdır.",
      },
    ],
    relatedLinks: ["Toz Toplama Sistemleri", "Kimya ve Proses Endüstrisi"],
  },
  {
    slug: "granulasyon-nedir",
    title: "Granülasyon Nedir",
    category: "Terimler Sozlugu",
    summary: "Toz veya ince malzemenin belirli boyutta granül forma getirilme sürecinin tanımı.",
    heroTitle: "Granülasyon nedir?",
    heroDescription:
      "Granülasyon; ince taneli veya toz formdaki malzemenin, proses yardımıyla daha düzenli ve kullanılabilir granül forma dönüştürülmesidir.",
    sections: [
      {
        heading: "Neden kullanılır",
        text: "Depolama, taşıma, uygulama kolaylığı ve ürün standardı sağlamak için granülasyon tercih edilir.",
      },
      {
        heading: "Hangi alanlarda görülür",
        text: "Gübre, kimya ve dökme katı malzeme proseslerinde sık kullanılır.",
      },
    ],
    relatedLinks: ["Gübre Granülasyon Hattı Nasıl Çalışır", "Organomineral Gübre Nedir"],
  },
  {
    slug: "trommel-nedir",
    title: "Trommel Nedir",
    category: "Terimler Sozlugu",
    summary: "Döner elek mantığıyla çalışan, malzemeyi boyuta göre ayıran sınıflandırma ekipmanı.",
    heroTitle: "Trommel nedir?",
    heroDescription:
      "Trommel; döner elek prensibiyle çalışan ve malzemeyi farklı tane boylarına göre ayırmaya yarayan bir sınıflandırma sistemidir.",
    sections: [
      {
        heading: "Çalışma mantığı",
        text: "Malzeme dönen gövde içinde ilerlerken göz açıklığına göre ayrışır.",
      },
      {
        heading: "Nerede kullanılır",
        text: "Kompost, geri dönüşüm ve dökme katı malzeme sınıflandırma hatlarında yaygındır.",
      },
    ],
    relatedLinks: ["Eleme ve Sınıflandırma Sistemleri", "Kompost Üretiminde Tambur Sistemleri"],
  },
  {
    slug: "organomineral-gubre-nedir",
    title: "Organomineral Gübre Nedir",
    category: "Terimler Sozlugu",
    summary: "Organik ve mineral bileşenleri bir araya getiren gübre türünün temel tanımı.",
    heroTitle: "Organomineral gübre nedir?",
    heroDescription:
      "Organomineral gübre, organik kaynaklı maddeler ile mineral besin elementlerinin birlikte bulunduğu gübre türüdür.",
    sections: [
      {
        heading: "Yapı",
        text: "Organik içerik ile mineral besin elementlerini aynı ürün yapısında birleştirir.",
      },
      {
        heading: "Üretim süreci",
        text: "Karıştırma, granülasyon ve kurutma gibi proses adımlarıyla nihai ürün haline gelir.",
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
        text: "Homojenliği artırır, süreci hızlandırabilir ve saha operasyonunu daha düzenli hale getirir.",
      },
      {
        heading: "Kullanım alanı",
        text: "Kompost tesislerinde farklı organik atıkların ön işleme ve kompostlama aşamalarında kullanılır.",
      },
    ],
    relatedLinks: ["Kompost Üretiminde Tambur Sistemleri", "Kompost Tesisi Nasıl Kurulur"],
  },
  {
    slug: "organomineral-gubre-tesisi-maliyeti",
    title: "Organomineral Gübre Tesisi Maliyeti",
    category: "Blog / Makaleler",
    summary: "Organomineral gübre tesisi maliyeti, kapasite planı ve yatırım yaklaşımı hakkında kapsamlı içerik.",
    heroTitle: "Organomineral gübre tesisi maliyeti nasıl planlanır?",
    heroDescription:
      "Türkiye pazarı için organomineral gübre tesisi yatırımında ekipman, proses ve saha maliyetlerini değerlendiren uzun form makale.",
    sections: [
      {
        heading: "Yatırım çerçevesi",
        text: "Kapasite, ürün tipi, granülasyon ihtiyacı ve saha kurgusu toplam yatırım planını belirler.",
      },
      {
        heading: "Maliyet kalemleri",
        text: "Makina imalatı, çelik konstrüksiyon, otomasyon, montaj ve devreye alma toplam maliyetin ana parçalarıdır.",
      },
    ],
    relatedLinks: ["Gübre Tesisi Kurulumu", "Organomineral Gübre Tesisi Kurulumu"],
  },
  {
    slug: "granul-gubre-uretim-sureci",
    title: "Granül Gübre Üretim Süreci",
    category: "Blog / Makaleler",
    summary: "Granül gübre üretim süreci, kullanılan makinalar ve yatırım mantığını anlatan teknik makale.",
    heroTitle: "Granül gübre üretim süreci nasıl çalışır?",
    heroDescription:
      "Granülasyon, kurutma, soutma, eleme ve paketleme adımlarını Türkiye pazarı odaında açıklayan detaylı içerik.",
    sections: [
      {
        heading: "Proses yapısı",
        text: "Hammadde hazırlama, granülasyon, kurutma ve son ürün hazırlama adımları aynı hat dengesi içinde ele alınır.",
      },
      {
        heading: "Makina grupları",
        text: "Granülatür tamburu, kurutma tamburu, soutma tamburu ve elek sistemleri ana ekipman grubunu oluşturur.",
      },
    ],
    relatedLinks: ["Granül Gübre Üretim Tesisi", "Gübre Tesisi Kurulumu"],
  },
  {
    slug: "sivi-gubre-uretim-tesisi-nasil-kurulur",
    title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur",
    category: "Blog / Makaleler",
    summary: "Sıvı gübre üretim tesisi kurulumunda proses, ekipman, kapasite ve yatırım adımlarını anlatan rehber makale.",
    heroTitle: "Sıvı gübre üretim tesisi nasıl kurulur?",
    heroDescription:
      "Sıvı organomineral, amino asitli ve NPK ürünler için proses ve ekipman kurgusunu detaylandıran kapsamlı içerik.",
    sections: [
      {
        heading: "Kurulum mantığı",
        text: "Ürün tipi, tank yapısı, çözündürme, filtrasyon ve dolum planı proje başlangıcında birlikte değerlendirilir.",
      },
      {
        heading: "Kapasite ve stok",
        text: "Parti büyüklüğü, dolum hızı ve stok senaryosu sıvı gübre tesislerinde gerçek kapasiteyi belirler.",
      },
    ],
    relatedLinks: ["Sıvı Gübre Üretim Tesisi", "Gübre Tesisi Kurulumu"],
  },
  {
    slug: "kurutma-tamburu-tasarim-kriterleri",
    title: "Kurutma Tamburu Tasarım Kriterleri",
    category: "Teknik Rehberler",
    summary: "Kurutma tamburu tasarımında çap, boy, eim, devir ve enerji tüketimi kriterlerini anlatan teknik rehber.",
    heroTitle: "Kurutma tamburu tasarım kriterleri nelerdir?",
    heroDescription:
      "Tambur çapı, boyu, iç kanat yapısı, ürün nemi ve sıcak hava dengesini mühendislik perspektifiyle açıklayan rehber içerik.",
    sections: [
      {
        heading: "Geometri ve devir",
        text: "Çap, boy, eğim ve devir malzemenin tambur içinde ilerleme süresini ve ısı temasını belirler.",
      },
      {
        heading: "Enerji ve proses",
        text: "Nem yükü, sıcak hava ve ürün davranışı birlikte ele alınmadan sağlıklı kurutma hesabı yapılamaz.",
      },
    ],
    relatedLinks: ["Granül Gübre Üretim Tesisi", "Tambur Sistemleri"],
  },
  {
    slug: "sik-sorulan-sorular",
    title: "Sık Sorulan Sorular",
    category: "Sik Sorulan Sorular",
    summary: "Gübre, kompost, proses ekipmanları ve tesis yatırımları hakkında en çok sorulan soruların kısa cevapları.",
    heroTitle: "Sık sorulan sorular",
    heroDescription:
      "Gübre tesisi kurulumu, ekipman seçimi, kapasite hesabı ve yatırım planlaması hakkında hızlı yanıtlar sunan sayfa.",
    sections: [
      {
        heading: "Hızlı yanıtlar",
        text: "Yatırım ve teknik karar sürecinde en sık sorulan sorular tek sayfada toplandı.",
      },
      {
        heading: "İlgili bağlantılar",
        text: "Gerekli durumlarda hizmet sayfalarına geçiş yaparak daha detaylı içeriklere ulaşabilirsiniz.",
      },
    ],
    relatedLinks: ["Gübre Tesisi Kurulumu", "Sıvı Gübre Üretim Tesisi"],
  },
  {
    slug: "terimler-sozlugu",
    title: "Endüstriyel Proses ve Makina Terimleri Sözlüğü",
    category: "Terimler Sozlugu",
    summary: "Granülasyon, kurutma tamburu, reaktör ve kapasite gibi temel kavramları açıklayan sözlük sayfası.",
    heroTitle: "Endüstriyel proses ve makina terimleri sözlüğü",
    heroDescription:
      "Gübre, kompost, taşıma ve proses ekipmanlarında kullanılan temel terimleri kısa tanım ve kullanım alanıyla açıklıyoruz.",
    sections: [
      {
        heading: "Kısa tanımlar",
        text: "Sektörde sık kullanılan teknik terimler sade ama doru mühendislik diliyle açıklanır.",
      },
      {
        heading: "Kullanım alanları",
        text: "Her terim için hangi proseslerde ve hangi ekipman ailelerinde kullanıldığı özetlenir.",
      },
    ],
    relatedLinks: ["Granül Gübre Üretim Süreci", "Kurutma Tamburu Tasarım Kriterleri"],
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



