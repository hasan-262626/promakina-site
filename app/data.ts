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
      "M?hendislikten imalata, saha kurulumundan devreye almaya kadar t?m tesis s?recini tek elden y?netiyoruz.",
    heroTitle: "Anahtar Teslim Tesis Kurulumu",
    heroDescription:
      "Anahtar teslim tesis kurulumunda t?m s?reci tek bir koordinasyonla y?netiyoruz. Kompost, g?bre, geri d?n??x?m ve proses tesisleri i?in planlama, imalat, montaj ve devreye alma ad1mlar1n1 tek ?at1 alt1nda topluyoruz.",
    image:
      "/images/01-genel/fabrika1.jpg",
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
      "Gï¿½bre ï¿½retim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "At1k Su ï¿½amuru ve Ar1tma ï¿½ï¿½zï¿½mleri",
      "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral 0_leme",
      "Kimya ve Proses Endï¿½strisi",
      "Yem, Toz ve Dï¿½kme Kat1 Malzeme 0_leme Sistemleri",
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
    title: "Proses Tasarımı ve Mühendislik",
    summary:
      "Kapasite, ürün tipi ve saha koşullarına göre proses akışlarını, ekipman dizilimini ve teknik altyapıyı tasarlıyoruz.",
    heroTitle: "Doğru proses tasarımı ile tesis performansını en baştan güçlendirin",
    heroDescription:
      "Malzeme akışı, kapasite ihtiyacı, ürün hedefi ve saha gerçeklerini birlikte değerlendirerek verimli ve uygulanabilir bir mühendislik kurgusu sunuyoruz.",
    image:
      "/images/01-genel/proses1.png",
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
      "Gï¿½bre ï¿½retim Tesisleri",
      "Kompost ve Organik Atik Tesisleri",
      "At1k Su ï¿½amuru ve Ar1tma ï¿½ï¿½zï¿½mleri",
      "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi",
      "Enerji ve Biyogaz Sistemleri",
      "Madencilik ve Mineral 0_leme",
      "Kimya ve Proses Endï¿½strisi",
      "Yem, Toz ve Dï¿½kme Kat1 Malzeme 0_leme Sistemleri",
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
    title: "Makine İmalatı",
    summary:
      "Prosese özel ölçülerde, sanayi tipi ve dayanıklı ekipmanlar üretiyoruz.",
    heroTitle: "Sahaya ve prosese uygun makine imalatı ile dayanıklı sistemler kurun.",
    heroDescription:
      "Tambur, konveyör, bunker, kırıcı, reaktör ve yardımcı proses ekipmanlarını proje gereksinimine göre imal ediyoruz.",
    image:
      "/images/celik/celik2.jpg",
    scope: ["?zel olcu imalat", "Malzeme se?imi", "Atolye ?retimi", "Kalite kontrol"],
    outputs: ["Sahaya uygun ekipman", "Uzun omurlu kullanim", "Teknik uyum"],
    advantages: ["?zel imalat", "Dayanikli yapi", "Hatla uyum", "Bakim kolayligi"],
    relatedSectors: ["Madencilik ve Mineral 0_leme", "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi"],
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
      "/images/01-genel/hizmetler1.png",
    scope: ["Montaj planlama", "Saha kurulum", "Test calismalari", "Ilk calistirma"],
    outputs: ["Daha hizli devreye alma", "Daha d???k saha riski", "?!al1?x1r teslim"],
    advantages: ["Saha koordinasyonu", "Surekli takip", "Performans kontrol?", "Ekip egitimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "At1k Su ï¿½amuru ve Ar1tma ï¿½ï¿½zï¿½mleri"],
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
    advantages: ["Yatirimi koruma", "Hizli iyilestirme", "Daha d???k durus maliyeti"],
    relatedSectors: ["Gï¿½bre ï¿½retim Tesisleri", "Kimya ve Proses Endï¿½strisi"],
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
      "/images/01-genel/proses1.png",
    scope: ["Teknik analiz", "Yatirim degerlendirme", "Ekipman se?im destegi", "S?re? yonlendirme"],
    outputs: ["Daha net karar s?reci", "Yanlis ekipman riskinin azalmasi", "Proje netligi"],
    advantages: ["Uzman bakis", "Karar destegi", "Risk azaltma", "S?re? netligi"],
    relatedSectors: ["Madencilik ve Mineral 0_leme", "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi"],
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
      "/images/bakim/bakim1.webp",
    scope: ["Periyodik kontrol", "Yedek parca", "Ariza tespiti", "Saha servis destegi"],
    outputs: ["Daha az plansiz durus", "Daha y?ksek ekipman ?mr?", "Daha g?venli isletme"],
    advantages: ["Hizli mudahale", "Onleyici bakim", "Parca takibi", "0?xletme surekliligi"],
    relatedSectors: ["Kompost ve Organik Atik Tesisleri", "Yem, Toz ve Dï¿½kme Kat1 Malzeme 0_leme Sistemleri"],
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
    title: "Pilot Tesis ve Proses Test Ã‡alÄ±ÅŸmalarÄ±",
    summary:
      "Tam yatÄ±rÄ±m Ã¶ncesi prosesin gerÃ§ek saha verisine yakÄ±n ÅŸekilde test edilmesini saÄŸlÄ±yoruz.",
    heroTitle: "Pilot tesis ve proses testleriyle yatÄ±rÄ±m riskini dÃ¼ÅŸÃ¼rÃ¼p kararÄ± gÃ¼Ã§lendirin.",
    heroDescription:
      "Malzeme davranÄ±ÅŸÄ±, Ã¼rÃ¼n kalitesi ve proses parametrelerini pilot Ã§alÄ±ÅŸmalarÄ±yla daha net gÃ¶rerek ana yatÄ±rÄ±mÄ± daha saÄŸlÄ±klÄ± planlÄ±yoruz.",
    image:
      "/images/bakim/bakim2.webp",
    scope: ["Numune testleri", "Pilot denemeler", "Parametre analizi", "Sonu? raporlama"],
    outputs: ["Yatirim oncesi veri", "Malzeme davranisi analizi", "Daha do?xru ekipman se?imi"],
    advantages: ["Risk azaltma", "Veriye dayali karar", "Rakiplerden ayrisan uzmanlik"],
    relatedSectors: ["Gï¿½bre ï¿½retim Tesisleri", "At1k Su ï¿½amuru ve Ar1tma ï¿½ï¿½zï¿½mleri"],
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
    title: "Proje YÃ¶netimi ve Saha Koordinasyonu",
    summary:
      "FarklÄ± ekipler, tedarikler ve saha uygulamalarÄ±nÄ± aynÄ± takvim ve hedef etrafÄ±nda yÃ¶netiyoruz.",
    heroTitle: "Proje yÃ¶netimi ve saha koordinasyonuyla kurulum sÃ¼recinde daÄŸÄ±nÄ±klÄ±ÄŸÄ± Ã¶nleyin.",
    heroDescription:
      "Takvim, ekipler, lojistik, montaj ve test adÄ±mlarÄ±nÄ± tek bir saha koordinasyon mantÄ±ÄŸÄ±yla yÃ¼rÃ¼terek projeye netlik kazandÄ±rÄ±yoruz.",
    image:
      "/images/01-genel/hizmetler1.png",
    scope: ["Takvim yonetimi", "Saha koordinasyonu", "Tedarik takibi", "Ekip senkronizasyonu"],
    outputs: ["Daha kontroll? ilerleme", "Daha net saha duzeni", "Sure ve kapsam takibi"],
    advantages: ["Tek merkezli koordinasyon", "Daha az saha karisiklisi", "G?ven veren proje yonetimi"],
    relatedSectors: ["Enerji ve Biyogaz Sistemleri", "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi"],
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
    similarProject: "Biyogaz ve At1k Yï¿½netimi Projeleri",
    relatedMachines: ["Tambur Sistemleri", "Ta?x1ma Ekipmanlari"],
    relatedSector: "Kompost ve Organik Atik Tesisleri",
    relatedSolutions: ["Teknik Dan1?xmanl1k", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
    image:
      "/images/kompost/kompost1.jpg",
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
    relatedSector: "Gï¿½bre ï¿½retim Tesisleri",
    relatedSolutions: ["Proses Tasarımı ve Mühendislik", "Modernizasyon ve Revizyon"],
    image:
      "/images/gubre/sivibidon.png",
  },
  {
    slug: "deri-atik-isleme-tesisi-projeleri",
    title: "Deri At1k 0_leme Tesisi Projeleri",
    summary:
      "Deri end?strisi kaynakli atiklarin ayrisma, tasima ve geri kazanima uygun sekilde islenmesi icin tesis kurgusu.",
    projectName: "Deri At1k Haz1rlama ve 0_leme Tesisi",
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
    similarProject: "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi Projeleri",
    relatedMachines: ["Kiricilar ve Parcalayicilar", "Toz Toplama Sistemleri"],
    relatedSector: "Geri Dï¿½nï¿½_ï¿½m ve At1k Yï¿½netimi",
    relatedSolutions: ["Teknik Dan1?xmanl1k", "Proje Yï¿½netimi ve Saha Koordinasyonu"],
    image:
      "/images/01-genel/geridonusum1.jpg",
  },
  {
    slug: "biyogaz-ve-atik-yonetimi-projeleri",
    title: "Biyogaz ve At1k Yï¿½netimi Projeleri",
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
    relatedSolutions: ["Anahtar Teslim Tesis Kurulumu", "Proje Yï¿½netimi ve Saha Koordinasyonu"],
    image:
      "/images/biyogaz/biogaz1.jpg",
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
    relatedSector: "Kimya ve Proses Endï¿½strisi",
    relatedSolutions: ["Makine Imalati", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
    image:
      "/images/celik/celik2.jpg",
  },
  {
    slug: "mineral-ve-dokme-kati-isleme-projeleri",
    title: "Mineral ve Dï¿½kme Kat1 0_leme Projeleri",
    summary:
      "Kirma, eleme, tasima, kurutma, siniflandirma ve stoklama s?re?lerine uygun mineral ve dokme kati malzeme proje ??z?mleri.",
    projectName: "Mineral ve Dï¿½kme Kat1 0_leme Projesi",
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
    relatedLinks: ["Biyogaz ve At1k Yï¿½netimi Projeleri", "Kompost Tesisi Nasil Kurulur"],
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
        text: "M?hendislikten saha kurulumuna kadar bir?ok adim ayni koordinasyon yapisi altinda toplanir.",
      },
      {
        heading: "Avantaj",
        text: "S?re? butunlugu, zaman kontrol? ve daha net sorumluluk dagilimi saglar.",
      },
    ],
    relatedLinks: ["Anahtar Teslim Tesis Kurulumu", "Proje Yï¿½netimi ve Saha Koordinasyonu"],
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
    relatedLinks: ["Proses Tasarımı ve Mühendislik", "Pilot Tesis ve Proses Test ?!al1?xmalar1"],
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
    relatedLinks: ["Toz Toplama Sistemleri", "Kimya ve Proses Endï¿½strisi"],
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
  {
    slug: "organomineral-gubre-tesisi-maliyeti",
    title: "Organomineral Gï¿½bre Tesisi Maliyeti",
    category: "Blog / Makaleler",
    summary: "Organomineral gï¿½bre tesisi maliyeti, kapasite plan1 ve yat1r1m yakla_1m1 hakk1nda kapsaml1 iï¿½erik.",
    heroTitle: "Organomineral gï¿½bre tesisi maliyeti nas1l planlan1r?",
    heroDescription:
      "Tï¿½rkiye pazar1 iï¿½in organomineral gï¿½bre tesisi yat1r1m1nda ekipman, proses ve saha maliyetlerini deerlendiren uzun form makale.",
    sections: [
      {
        heading: "Yat1r1m ï¿½erï¿½evesi",
        text: "Kapasite, ï¿½rï¿½n tipi, granï¿½lasyon ihtiyac1 ve saha kurgusu toplam yat1r1m plan1n1 belirler.",
      },
      {
        heading: "Maliyet kalemleri",
        text: "Makina imalat1, ï¿½elik konstrï¿½ksiyon, otomasyon, montaj ve devreye alma toplam maliyetin ana parï¿½alar1d1r.",
      },
    ],
    relatedLinks: ["Gï¿½bre Tesisi Kurulumu", "Organomineral Gï¿½bre Tesisi Kurulumu"],
  },
  {
    slug: "granul-gubre-uretim-sureci",
    title: "Granï¿½l Gï¿½bre ï¿½retim Sï¿½reci",
    category: "Blog / Makaleler",
    summary: "Granï¿½l gï¿½bre ï¿½retim sï¿½reci, kullan1lan makinalar ve yat1r1m mant11n1 anlatan teknik makale.",
    heroTitle: "Granï¿½l gï¿½bre ï¿½retim sï¿½reci nas1l ï¿½al1_1r?",
    heroDescription:
      "Granï¿½lasyon, kurutma, soutma, eleme ve paketleme ad1mlar1n1 Tï¿½rkiye pazar1 oda1nda aï¿½1klayan detayl1 iï¿½erik.",
    sections: [
      {
        heading: "Proses yap1s1",
        text: "Hammadde haz1rlama, granï¿½lasyon, kurutma ve son ï¿½rï¿½n haz1rlama ad1mlar1 ayn1 hat dengesi iï¿½inde ele al1n1r.",
      },
      {
        heading: "Makina gruplar1",
        text: "Granï¿½latï¿½r tamburu, kurutma tamburu, soutma tamburu ve elek sistemleri ana ekipman grubunu olu_turur.",
      },
    ],
    relatedLinks: ["Granï¿½l Gï¿½bre ï¿½retim Tesisi", "Gï¿½bre Tesisi Kurulumu"],
  },
  {
    slug: "sivi-gubre-uretim-tesisi-nasil-kurulur",
    title: "S1v1 Gï¿½bre ï¿½retim Tesisi Nas1l Kurulur",
    category: "Blog / Makaleler",
    summary: "S1v1 gï¿½bre ï¿½retim tesisi kurulumunda proses, ekipman, kapasite ve yat1r1m ad1mlar1n1 anlatan rehber makale.",
    heroTitle: "S1v1 gï¿½bre ï¿½retim tesisi nas1l kurulur?",
    heroDescription:
      "S1v1 organomineral, amino asitli ve NPK ï¿½rï¿½nler iï¿½in proses ve ekipman kurgusunu detayland1ran kapsaml1 iï¿½erik.",
    sections: [
      {
        heading: "Kurulum mant11",
        text: "ï¿½rï¿½n tipi, tank yap1s1, ï¿½ï¿½zï¿½ndï¿½rme, filtrasyon ve dolum plan1 proje ba_lang1c1nda birlikte deerlendirilir.",
      },
      {
        heading: "Kapasite ve stok",
        text: "Parti bï¿½yï¿½klï¿½ï¿½, dolum h1z1 ve stok senaryosu s1v1 gï¿½bre tesislerinde gerï¿½ek kapasiteyi belirler.",
      },
    ],
    relatedLinks: ["S1v1 Gï¿½bre ï¿½retim Tesisi", "Gï¿½bre Tesisi Kurulumu"],
  },
  {
    slug: "kurutma-tamburu-tasarim-kriterleri",
    title: "Kurutma Tamburu Tasar1m Kriterleri",
    category: "Teknik Rehberler",
    summary: "Kurutma tamburu tasar1m1nda ï¿½ap, boy, eim, devir ve enerji tï¿½ketimi kriterlerini anlatan teknik rehber.",
    heroTitle: "Kurutma tamburu tasar1m kriterleri nelerdir?",
    heroDescription:
      "Tambur ï¿½ap1, boyu, iï¿½ kanat yap1s1, ï¿½rï¿½n nemi ve s1cak hava dengesini mï¿½hendislik perspektifiyle aï¿½1klayan rehber iï¿½erik.",
    sections: [
      {
        heading: "Geometri ve devir",
        text: "ï¿½ap, boy, eim ve devir malzemenin tambur iï¿½inde ilerleme sï¿½resini ve 1s1 temas1n1 belirler.",
      },
      {
        heading: "Enerji ve proses",
        text: "Nem yï¿½kï¿½, s1cak hava ve ï¿½rï¿½n davran1_1 birlikte ele al1nmadan sal1kl1 kurutma hesab1 yap1lamaz.",
      },
    ],
    relatedLinks: ["Granï¿½l Gï¿½bre ï¿½retim Tesisi", "Tambur Sistemleri"],
  },
  {
    slug: "sik-sorulan-sorular",
    title: "S1k Sorulan Sorular",
    category: "Sik Sorulan Sorular",
    summary: "Gï¿½bre, kompost, proses ekipmanlar1 ve tesis yat1r1mlar1 hakk1nda en ï¿½ok sorulan sorular1n k1sa cevaplar1.",
    heroTitle: "S1k sorulan sorular",
    heroDescription:
      "Gï¿½bre tesisi kurulumu, ekipman seï¿½imi, kapasite hesab1 ve yat1r1m planlamas1 hakk1nda h1zl1 yan1tlar sunan sayfa.",
    sections: [
      {
        heading: "H1zl1 yan1tlar",
        text: "Yat1r1m ve teknik karar sï¿½recinde en s1k sorulan sorular tek sayfada topland1.",
      },
      {
        heading: "0lgili balant1lar",
        text: "Gerekli durumlarda hizmet sayfalar1na geï¿½i_ yaparak daha detayl1 iï¿½eriklere ula_abilirsiniz.",
      },
    ],
    relatedLinks: ["Gï¿½bre Tesisi Kurulumu", "S1v1 Gï¿½bre ï¿½retim Tesisi"],
  },
  {
    slug: "terimler-sozlugu",
    title: "Endï¿½striyel Proses ve Makina Terimleri Sï¿½zlï¿½ï¿½",
    category: "Terimler Sozlugu",
    summary: "Granï¿½lasyon, kurutma tamburu, reaktï¿½r ve kapasite gibi temel kavramlar1 aï¿½1klayan sï¿½zlï¿½k sayfas1.",
    heroTitle: "Endï¿½striyel proses ve makina terimleri sï¿½zlï¿½ï¿½",
    heroDescription:
      "Gï¿½bre, kompost, ta_1ma ve proses ekipmanlar1nda kullan1lan temel terimleri k1sa tan1m ve kullan1m alan1yla aï¿½1kl1yoruz.",
    sections: [
      {
        heading: "K1sa tan1mlar",
        text: "Sektï¿½rde s1k kullan1lan teknik terimler sade ama doru mï¿½hendislik diliyle aï¿½1klan1r.",
      },
      {
        heading: "Kullan1m alanlar1",
        text: "Her terim iï¿½in hangi proseslerde ve hangi ekipman ailelerinde kullan1ld11 ï¿½zetlenir.",
      },
    ],
    relatedLinks: ["Granï¿½l Gï¿½bre ï¿½retim Sï¿½reci", "Kurutma Tamburu Tasar1m Kriterleri"],
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



