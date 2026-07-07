import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import { services } from "../../data";
import { createWhatsAppHref, siteContact } from "../../lib/site-contact";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://www.promakina.com.tr";

const sectorHrefMap: Record<string, string> = {
  "Gübre üretim Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
  "Kompost ve Organik Atık Tesisleri": "/sektorler/kompost-ve-organik-atik-tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri": "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "Geri Dönü_?m ve Atık Yönetimi": "/sektorler/geri-donusum-ve-atik-yonetimi",
  "Enerji ve Biyogaz Sistemleri": "/sektorler/enerji-ve-biyogaz-sistemleri",
  "Madencilik ve Mineral 0_leme": "/sektorler/madencilik-ve-mineral-isleme",
  "Kimya ve Proses Endüstrisi": "/sektorler/kimya-ve-proses-endustrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri":
    "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
};

const turnkeySlug = "anahtar-teslim-tesis-kurulumu";
const processDesignSlug = "proses-tasarimi-ve-muhendislik";
const machineManufacturingSlug = "makine-imalati";
const commissioningSlug = "kurulum-ve-devreye-alma";
const modernizationSlug = "modernizasyon-ve-revizyon";
const consultingSlug = "teknik-danismanlik";
const maintenanceSlug = "bakim-ve-servis";
const maintenancePublicSlug = "bakim-servis-ve-teknik-destek";
const projectManagementSlug = "proje-yonetimi-ve-saha-koordinasyonu";
const pilotTestingSlug = "pilot-tesis-ve-proses-test-calismalari";
const liquidFertilizerSlug = "sivi-gubre-uretim-tesisi";

const serviceSlugAliasMap: Record<string, string> = {
  [maintenancePublicSlug]: maintenanceSlug,
};

function resolveServiceSlug(slug: string) {
  return serviceSlugAliasMap[slug] ?? slug;
}

function getPublicServiceSlug(slug: string) {
  if (slug === maintenanceSlug) {
    return maintenancePublicSlug;
  }

  return slug;
}

const turnkeyIntro = [
  "Anahtar teslim tesis kurulumu hizmetimiz ile tüm süreci tek bir koordinasyon altinda yönetiyoruz. Kompost, gübre, geri dönüşm ve endüstriyel proses tesisleri için planlama, mühendislik, imalat, montaj ve devreye alma adimlarini entegre _ekilde sunuyoruz.",
  "Projenizin her a_amasini tek elden yöneterek zaman kaybini minimize eder, maliyetleri kontrol altinda tutar ve sahada sorunsuz bir kurulum süreci salarız.",
];

const turnkeyScopeIntro =
  "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz. Her proje, saha ko_ulları, kapasite ihtiyaci ve proses gereksinimlerine göre özel olarak planlanir.";

const turnkeyOutputs = [
  "Tek merkezden yönetilen profesyonel proje süreci",
  "Zaman kaybinin ve koordinasyon hatalarinin minimize edilmesi",
  "Net, öngör?lebilir ve kontrol edilebilir maliyet yapısı",
  "Tüm süreçlerde teknik uyum ve standartlaşma",
  "Sahada hizli ve sorunsuz devreye alma",
];

const processDesignOutputs = [
  "Ürün ve hammadde yapısına uygun proses akışı",
  "Kapasiteye göre doğru makine ve ekipman seçimi",
  "Tesis yerleşimi, hat kurgusu ve üretim senaryosu oluşturma",
  "Enerji, nem, debi, karıştırma ve taşıma parametrelerinin değerlendirilmesi",
  "Yatırım öncesi teknik fizibilite ve uygulanabilirlik analizi",
];

const turnkeyScope = [
  "Tesis yerleşim plani ve saha optimizasyonu",
  "Ekipman seçimi ve proses uyumlandirmasi",
  "Makina imalatı ve kalite kontrol süreçleri",
  "Saha montaji ve mekanik kurulum",
  "Devreye alma ve performans testleri",
  "Teknik dan1_manlık ve süreç optimizasyonu",
];

const turnkeyAdvantages = [
  "Tek muhatap ile tüm süreci yönetme kolaylişi",
  "Sahaya özel mühendislik çözümleri",
  "Kontrollü ve planlı kurulum süreci",
  "baştan sona bütünle_ik proje yönetimi",
  "Daha d?_?k hata riski ve daha yüksek verimlilik",
];

const turnkeySectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const turnkeyProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Projenin kapsami belirlenir, saha ve proses ihtiyaçlari teknik olarak deerlendirilir.",
  },
  {
    title: "Proses tasarımı",
    description:
      "Sistemin mühendislik altyapisi oluşturulur, ekipman ve ak? plani netle_tirilir.",
  },
  {
    title: "Makina üretimi",
    description:
      "Projeye özel ekipmanlar yüksek kalite standartlarinda ?retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji gerçekleştirilir ve sistem çal1_1r hale getirilir.",
  },
  {
    title: "Eitim ve satiş sonrasi destek",
    description:
      "Operatör eitimi verilir ve sistem performansi sürekli desteklenir.",
  },
];

const turnkeyFaqs = [
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarımı, ekipman seçimi, makina imalatı, saha montaji, devreye alma ve teknik dan1_manlık dahil olmak ?zere tüm süreçleri kapsar.",
  },
  {
    question: "Proje süresi neye göre belirlenir?",
    answer:
      "Proje süresi; tesis kapasitesi, proses tipi, ekipman sayisi ve saha ko_ullarına bağlı olarak belirlenir.",
  },
  {
    question: "Tesis tamamen çal1_1r halde mi teslim edilir?",
    answer:
      "Evet. Sistem devreye alinmiş, test edilmiş ve çal1_1r durumda teslim edilir.",
  },
  {
    question: "Kurulum sonrasi destek saşliyor musunuz?",
    answer:
      "Evet. Eitim, teknik destek ve süreç optimizasyonu hizmetleri sunulmaktadir.",
  },
  {
    question: "Projeler standart mi yoksa özel mi tasarlanir?",
    answer:
      "Tüm projeler, m?_terinin ihtiyacina ve saha ko_ullarına özel olarak mühendislik çal1_masi ile tasarlanir.",
  },
];

const machineIntro = [
  "Sahaya ve prosese özel makine imalatı ile yüksek performansli, dayanikli ve uzun ömürl? sistemler ?retiyoruz. Kompost, gübre, geri dönüşm, madencilik ve endüstriyel proses tesisleri için tambur, konveyör, bunker, kırıcı, reaktör ve yardımcı ekipmanlari proje gereksinimlerine göre tasarlayip imal ediyoruz.",
  "Her ekipman, kapasite ihtiyaci, malzeme yapısı ve saha ko_ulları dikkate alinarak mühendislik hesaplari ile ?retilir ve tesisin genel performansina maksimum katki salar.",
];

const machineScopeIntro =
  "Prosese özel ölçülerde, aır sanayi ko_ullarına uygun, yüksek dayanıml? ve uzun ömürl? endüstriyel ekipmanlar ?retiyoruz. Tüm imalat süreçleri mühendislik hesaplarina, saha gerçeklerine ve kalite standartlarina uygun olarak gerçekleştirilir.";

const machineOutputs = [
  "Projeye özel makine ve ekipman imalatı",
  "Sahaya ve kapasiteye uygun ölçülendirme",
  "Dayanıklı gövde, şase ve proses ekipmanı üretimi",
  "İmalat, montaj ve devreye alma süreçlerinde teknik destek",
  "Proses hattına uygun özel çözüm geliştirme",
];

const machineScope = [
  "Projeye özel makina tasarımı",
  "özel ölçü ve kapasiteye göre imalat",
  "Malzeme seçimi ve mühendislik dorulamasi",
  "At?lye üretimi ve imalat süreç yönetimi",
  "Kaynak, işleme ve montaj işlemleri",
  "Kalite kontrol ve test süreçleri",
];

const machineAdvantages = [
  "Projeye özel üretim",
  "Yüksek dayanımlı malzeme kullanımı",
  "Hat ve proses ile tam uyum",
  "Kolay bakım ve servis imk?n1",
  "Uzun ömürl? çal1_ma",
];

const machineSectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const machineRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaştirma, reaktör tamburlari)",
  "Ta_1ma ekipmanlari (bant konveyör, helezon, elevatör)",
  "K1rıcılar ve parçalayıcılar",
  "Reaktörler ve proses tanklari",
  "Bunker ve besleme sistemleri",
  "Eleme ve siniflandirma sistemleri",
  "Dozajlama ve karıştırma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Kurutma ve isitma sistemleri",
];

const machineRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gübre tesisi projeleri",
  "Geri dönüşm tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral işleme tesisleri",
  "özel proses ve makina imalat projeleri",
];

const machineProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Proje ihtiyaçlari, kapasite ve saha ko_ulları detayli olarak analiz edilir.",
  },
  {
    title: "Proses uyumlu tasarim",
    description:
      "?retilecek makinalar proses ve hat yapısına uygun _ekilde tasarlanir.",
  },
  {
    title: "Makine imalatı",
    description:
      "Tüm ekipmanlar yüksek kalite standartlarinda ?retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji yapilir ve sistem çal1_1r hale getirilir.",
  },
  {
    title: "Eitim ve teknik destek",
    description:
      "Operasyon süreci desteklenir ve teknik dan1_manlık saşlanir.",
  },
];

const machineFaqs = [
  {
    question: "Standart dişi makine imalatı yapiyor musunuz?",
    answer:
      "Evet. Tüm makineler proje ihtiyaçlarina ve saha ko_ullarına göre özel olarak ?retilmektedir.",
  },
  {
    question: "Kullanılan malzemeler nelerdir?",
    answer:
      "Projeye göre karbon çelik, paslanmaz çelik ve özel alaşimli malzemeler kullanilmaktadir.",
  },
  {
    question: "Makine imalat süresi neye göre dei_ir?",
    answer:
      "Makinenin tipi, boyutu, teknik detaylari ve proje kapsamina göre dei_iklik g?sterir.",
  },
  {
    question: "üretilen makineler sahaya hazir mi teslim edilir?",
    answer:
      "Evet. Montaj ve devreye alma süreçleri ile birlikte çal1_1r halde teslim edilir.",
  },
  {
    question: "Sat1_ sonrasi destek veriyor musunuz?",
    answer:
      "Evet. Kurulum sonrasi teknik destek, bakım ve dan1_manlık hizmetleri sunulmaktadir.",
  },
];

const commissioningIntro = [
  "Kurulum ve devreye alma süreci, bir tesisin gerçek performansını belirleyen en kritik a_amalardan biridir. Endüstriyel tesis kurulum ve devreye alma hizmetimiz ile ekipmanlarin sahaya alinmasindan ilk üretim testlerine kadar tüm süreci planli, kontrollü ve ölçülebilir _ekilde yönetiyoruz.",
  "Sahada oluşabilecek hatalari minimize ederek sistemin hızlı, güvenli ve performansli _ekilde çal1_masini saşliyoruz.",
];

const commissioningScopeIntro =
  "Sahadaki ekipman montaji, sistem entegrasyonu, test süreçleri ve ilk çal1_ma a_amalarini kontrollü _ekilde yönetiyoruz. Tüm süreçler teknik standartlara uygun, planli ve koordineli olarak ilerletilir.";

const commissioningOutputs = [
  "Daha hizli ve sorunsuz devreye alma",
  "Saha hatalarinin minimize edilmesi",
  "Sistemlerin çal1_1r ve test edilmiş _ekilde teslimi",
  "?oretime hızlı geçi_",
  "Güvenli ve kontrol edilebilir başlangi? süreci",
];

const commissioningScope = [
  "Montaj planlama ve saha organizasyonu",
  "Ekipman yerleşimi ve mekanik kurulum",
  "Elektrik ve otomasyon entegrasyonu",
  "Test çal1_malari ve sistem kontrolleri",
  "Ilk çal1_tırma (commissioning)",
  "Performans dorulama ve optimizasyon",
];

const commissioningAdvantages = [
  "G?l? saha koordinasyonu",
  "Sürekli teknik takip ve kontrol",
  "Performans odakli devreye alma",
  "Operatör eitimi ve sistem adaptasyonu",
  "Daha dşük risk ve daha hızlı üretim başlangici",
];

const commissioningSectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const commissioningRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gübre tesisi projeleri",
  "Geri dönüşm tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral işleme tesisleri",
  "Endüstriyel proses tesisleri",
];

const commissioningProcessSteps = [
  {
    title: "Saha hazırl11",
    description:
      "Kurulum öncesi saha planlamasi yapilir ve ekipman yerleşimi netle_tirilir.",
  },
  {
    title: "Montaj ve kurulum",
    description:
      "Tüm ekipmanlar sahada projeye uygun _ekilde monte edilir.",
  },
  {
    title: "Sistem entegrasyonu",
    description:
      "Mekanik, elektrik ve otomasyon sistemleri entegre edilir.",
  },
  {
    title: "Test ve devreye alma",
    description:
      "Sistem kontrollü _ekilde çal1_tırılır ve tüm testler gerçekleştirilir.",
  },
  {
    title: "Eitim ve performans takibi",
    description:
      "Operatör eitimi verilir ve sistem performansi izlenir.",
  },
];

const commissioningFaqs = [
  {
    question: "Devreye alma süreci ne kadar s?rer?",
    answer:
      "S?re; tesisin büyüklş?ne, ekipman sayisina ve sistem komplekslişine göre dei_ir.",
  },
  {
    question: "Kurulum sirasinda sahada ekip bulunuyor mu?",
    answer:
      "Evet. Kurulum ve devreye alma sürecinde teknik ekip sahada aktif olarak yer alir.",
  },
  {
    question: "Sistem test edilmeden teslim edilir mi?",
    answer:
      "Hayır. Tüm sistemler test edilerek çal1_1r durumda teslim edilir.",
  },
  {
    question: "Devreye alma sonrasi destek veriliyor mu?",
    answer:
      "Evet. Teknik destek, performans takibi ve dan1_manlık hizmetleri sunulmaktadir.",
  },
  {
    question: "Operatör eitimi veriliyor mu?",
    answer:
      "Evet. Sistem kullanım? ve bakım süreçleri için detayli eitim verilir.",
  },
];

const modernizationIntro = [
  "Mevcut tesisinizi sifirdan yatırım yapmadan daha verimli, daha dengeli ve daha yüksek kapasiteli hale getiriyoruz. Modernizasyon ve revizyon hizmetimiz ile mevcut üretim hatlarini analiz ederek darboşazlari tespit ediyor, ekipman ve proses iyileştirmeleri ile performansi artiriyoruz.",
  "Kompost, gübre, geri dönüşm ve endüstriyel proses tesislerinde yapilan doğru modernizasyon çal1_malari ile kapasite artişi, enerji verimlilii ve üretim kalitesinde önemli iyileşmeler saşlanir.",
];

const modernizationScopeIntro =
  "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi a?isindan analiz ediyor, mühendislik yakla_1m1 ile yeniden yapilandiriyoruz. Darboşazlarin ortadan kaldirilmasi, ekipman optimizasyonu ve proses iyileştirme çal1_malari ile sistem performansi y?kseltilir.";

const modernizationOutputs = [
  "Mevcut hat üzerinden kapasite artışı",
  "Enerji tüketiminde verimlilik",
  "Daha dengeli ve stabil proses",
  "Üretim kalitesinde iyileşme",
  "Yeni yatırım ihtiyacının azaltılması",
];

const modernizationScope = [
  "Mevcut hat analizi ve performans değerlendirmesi",
  "Darboşaz (bottleneck) tespiti",
  "Ekipman revizyonu ve dei_imi",
  "Proses ak?i iyileştirme",
  "Kapasite artirma çal1_malari",
  "Enerji ve verim optimizasyonu",
];

const modernizationAdvantages = [
  "Mevcut yatirimin korunmasi",
  "D?_?k maliyetle yüksek verim artişi",
  "K1sa sürede uygulanabilir çözümler",
  "Daha dşük duruş (downtime) maliyeti",
  "Mevcut sistem ile uyumlu iyileştirme",
];

const modernizationSectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const modernizationRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaştirma, reaktör)",
  "Ta_1ma ekipmanlari (konveyör, elevatör, helezon)",
  "K1rıcılar ve parçalayıcılar",
  "Reaktörler ve proses tanklari",
  "Eleme ve siniflandirma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Bunker ve besleme sistemleri",
  "Dozajlama ve karıştırma sistemleri",
];

const modernizationRelatedProjects = [
  "Kompost tesisi modernizasyon projeleri",
  "Organomineral gübre tesisi kapasite artür?m?",
  "Geri dönüşm tesisi revizyon projeleri",
  "Biyogaz tesis iyileştirme çal1_malari",
  "Endüstriyel proses hat optimizasyon projeleri",
];

const modernizationProcessSteps = [
  {
    title: "Mevcut sistem analizi",
    description:
      "Tesisin mevcut performansi, kapasitesi ve darboşaz noktalari detayli olarak analiz edilir.",
  },
  {
    title: "Veri ve proses değerlendirme",
    description:
      "?oretim verileri, malzeme ak?i ve enerji kullanım? incelenir.",
  },
  {
    title: "Iyileştirme plani",
    description:
      "Revizyon ve modernizasyon için teknik çözüm ve yol haritasi oluşturulur.",
  },
  {
    title: "Uygulama ve revizyon",
    description:
      "Ekipman dei_imi ve proses iyileştirme çal1_malari sahada uygulanir.",
  },
  {
    title: "Performans kontrol?",
    description:
      "Sistem performansi ölçül?r ve gerekli optimizasyonlar yapilir.",
  },
];

const modernizationFaqs = [
  {
    question: "Sadece belirli bir hatta revizyon yapilabilir mi?",
    answer:
      "Evet. Tüm tesis yerine yalnizca sorunlu veya kapasiteyi sinirlayan hatlar üzerinde revizyon yapilabilir.",
  },
  {
    question: "Modernizasyon ile kapasite ne kadar artar?",
    answer:
      "Artiş orani tesisin mevcut durumuna bağlıdir ancak doğru revizyon ile %20?50 arasi kapasite artişi saşlanabilir.",
  },
  {
    question: "?oretim durmadan modernizasyon yapilabilir mi?",
    answer:
      "Bazi durumlarda kismi duruşlarla veya planli bakım dönemlerinde uygulanabilir.",
  },
  {
    question: "Mevcut makineler tamamen deşişmek zorunda mi?",
    answer:
      "Hayır. çoğu projede mevcut ekipmanlar korunur, sadece kritik noktalar iyileştirilir.",
  },
  {
    question: "Modernizasyon yatırım geri dönüY? ne kadar s?rer?",
    answer:
      "Genellikle kısa sürede kendini amorti eden, yüksek verim artişi saşlayan yatirimlardir.",
  },
];

const consultingIntro = [
  "Doğru yatırım ve proses kararlari, tesisin uzun vadeli başarisini doğrudan belirler. Teknik dan1_manlık hizmetimiz ile yeni tesis yatirimlarinda ve mevcut hat iyileştirme süreçlerinde karar vericilere net, uygulanabilir ve mühendislik temelli bir yol haritasi sunuyoruz.",
  "Kompost, gübre, geri dönüşm ve endüstriyel proses tesislerinde doğru ekipman seçimi, doğru kapasite planlamasi ve doğru proses kurgusu ile yatırım risklerini minimize ediyoruz.",
];

const consultingScopeIntro =
  "Yatırım karari, proses seçimi, ekipman tercihi ve saha planlamasi için teknik bak? a?isi sunuyoruz. Projenin başindan itibaren doğru yönlendirme ile zaman, maliyet ve performans a?isindan optimum çözüm oluşturulmasini saşliyoruz.";

const consultingOutputs = [
  "Daha net ve doğru yatırım kararlari",
  "Yanliş ekipman seçimi riskinin azalmasi",
  "Proje sürecinde belirsizliklerin ortadan kalkmasi",
  "Daha hızlı ve kontrollü ilerleyen yatırım süreci",
  "Uzun vadede daha verimli ve sürdürülebilir tesis",
];

const consultingScope = [
  "Teknik analiz ve mevcut durum değerlendirmesi",
  "Yatirim fizibilite ve kapasite planlamasi",
  "Proses seçimi ve teknik yönlendirme",
  "Ekipman seçimi ve sistem kurgusu",
  "Saha yerleşim ve hat planlama desteşi",
  "Proje süreci boyunca teknik dan1_manlık",
];

const consultingAdvantages = [
  "Uzman mühendislik bak? a?isi",
  "Doğru ve hızlı karar alma imk?n?",
  "Yatirim risklerinin azaltilmasi",
  "Süreçlerin net ve planli ilerlemesi",
  "Gereksiz maliyetlerin ?nlenmesi",
];

const consultingSectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const consultingProcessSteps = [
  {
    title: "Ihtiya? ve hedef analizi",
    description:
      "Yatirim hedefleri, kapasite beklentisi ve proje kapsami belirlenir.",
  },
  {
    title: "Mevcut veri değerlendirme",
    description:
      "Saha verileri, hammadde yapısı ve proses ihtiyaçlari analiz edilir.",
  },
  {
    title: "Teknik çözüm oluşturma",
    description:
      "En uygun proses, ekipman ve sistem kurgusu belirlenir.",
  },
  {
    title: "Yol haritasi ve planlama",
    description:
      "Yatırım süreci için uygulanabilir teknik plan oluşturulur.",
  },
  {
    title: "Süreç takibi ve destek",
    description:
      "Proje sürecinde teknik dan1_manlık devam eder.",
  },
];

const consultingFaqs = [
  {
    question: "Danışmanlık sadece yeni projeler için mi ge?erlidir?",
    answer:
      "Hayır. Mevcut tesislerin iyileştirilmesi ve kapasite artür?m? için de uygulanir.",
  },
  {
    question: "Danışmanlık sürecinde sahaya geliniyor mu?",
    answer:
      "Evet. Proje ihtiyacina göre saha incelemesi yapilabilir.",
  },
  {
    question: "Danışmanlık ile ne tür hatalar ?nlenir?",
    answer:
      "Yanliş ekipman seçimi, kapasite hatalari ve proses uyumsuzluklari ?nlenir.",
  },
  {
    question: "Yatırım maliyetini d?_?r?r m?",
    answer:
      "Evet. Doğru planlama ile gereksiz ekipman ve yanliş yatirimlar engellenir.",
  },
  {
    question: "Danışmanlık sonrasi proje devam ediyor mu?",
    answer:
      "Istenirse proje, tasarim, imalat ve kurulum süreçleri ile birlikte devam ettirilebilir.",
  },
];

const maintenanceIntro = [
  "Endüstriyel tesislerde bakım ve servis süreçleri, ekipman ömrün? ve üretim süreklilişini doğrudan etkiler. Bakım ve servis hizmetimiz ile tesislerinizin güvenli, verimli ve kesintisiz çal1_masini saşliyoruz.",
  "Periyodik bakım, ariza tespiti, yedek parça yönetimi ve saha servis desteşi ile sistem performansının sürdürülebilirlişini garanti altina aliyoruz.",
];

const maintenanceScopeIntro =
  "Ekipman ömrün? uzatmak, plansiz duruşlari minimize etmek ve sistem performansını korumak için profesyonel bakım ve servis çözümleri sunuyoruz. Tüm süreçler planli, ölçülebilir ve takip edilebilir _ekilde yürüt?l?r.";

const maintenanceOutputs = [
  "Plansız duruş riskinin azaltılması",
  "Makine ömrünün uzatılması",
  "Daha güvenli ve kararlı çalışma",
  "Arıza kaynaklarının erken tespit edilmesi",
  "Bakım maliyetlerinin kontrol altına alınması",
];

const projectManagementOutputs = [
  "Saha imalat ve montaj süreçlerinde kontrollü ilerleme",
  "Ekipler arası daha düzenli iş takibi",
  "Proje süresinin ve iş programının daha net yönetilmesi",
  "Montaj, devreye alma ve teslim süreçlerinde koordinasyon",
  "Revizyon, imalat ve saha uygulamalarında teknik kontrol",
];

const pilotTestingOutputs = [
  "Yatırım öncesi prosesin teknik olarak test edilmesi",
  "Hammadde davranışının gerçek çalışma şartlarında görülmesi",
  "Kapasite, süre, nem, karışım ve ürün kalitesi verilerinin netleşmesi",
  "Ana tesis tasarımı öncesi proses risklerinin azaltılması",
  "Doğru makina seçimi ve ölçek büyütme için teknik veri oluşturulması",
];

const maintenanceScope = [
  "Periyodik bakım plani oluşturma",
  "Ekipman kontrol ve performans analizi",
  "Ariza tespiti ve hızlı müdahale",
  "Yedek parça temini ve dei_imi",
  "Saha servis ve teknik destek",
  "?nleyici bakım uygulamalari",
];

const maintenanceAdvantages = [
  "Hızlı müdahale ve servis desteşi",
  "?nleyici bakım yakla_1m1",
  "Parça ve ekipman takibi",
  "Sürekli sistem kontrolü",
  "0_letme süreklilişinin korunmasi",
];

const maintenanceSectors = [
  "Gübre üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su çamuru ve Arıtma çözümleri",
  "Geri Dönü_?m ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral 0_leme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme 0_leme Sistemleri",
];

const maintenanceRelatedProjects = [
  "Kompost tesisi bakım ve servis projeleri",
  "Organomineral gübre tesisi bakım hizmetleri",
  "Geri dönüşm tesisleri servis çal1_malari",
  "Biyogaz tesisleri teknik bakım projeleri",
  "Endüstriyel tesis bakım ve iyileştirme çal1_malari",
];

const maintenanceProcessSteps = [
  {
    title: "Sistem analizi",
    description:
      "Tesisin mevcut durumu ve ekipman performansi deerlendirilir.",
  },
  {
    title: "Bakım plani oluşturma",
    description:
      "Periyodik bakım ve kontrol plani hazirlanir.",
  },
  {
    title: "Uygulama ve servis",
    description:
      "Bakım, onarim ve gerekli müdahaleler sahada gerçekleştirilir.",
  },
  {
    title: "Parça ve sistem takibi",
    description:
      "Kritik ekipmanlar ve yedek parçalar düzenli olarak izlenir.",
  },
  {
    title: "Sürekli destek",
    description:
      "Teknik destek ve performans takibi ile süreç sürdürülebilir hale getirilir.",
  },
];

const maintenanceFaqs = [
  {
    question: "Periyodik bakım plani hazirlaniyor mu?",
    answer:
      "Evet. Tesisinize özel bakım plani oluşturulur ve düzenli olarak uygulanir.",
  },
  {
    question: "Ariza durumunda ne kadar sürede müdahale edilir?",
    answer:
      "Mümkün olan en kısa sürede saha veya uzaktan teknik destek saşlanir.",
  },
  {
    question: "Yedek parça temini saşliyor musunuz?",
    answer:
      "Evet. Gerekli yedek parçalar temin edilerek hızlı deşişim saşlanir.",
  },
  {
    question: "Bakım hizmeti üretimi durdurur mu?",
    answer:
      "Planli bakım çal1_malari üretimi minimum etkileyecek _ekilde organize edilir.",
  },
  {
    question: "?nleyici bakım gerçekten gerekli mi?",
    answer:
      "Evet. ?nleyici bakım sayesinde büyük arizalar ve yüksek maliyetler ?nlenir.",
  },
];

const defaultProcessSteps = [
  "Ihtiya? analizi",
  "Proses tasarımı",
  "Makina üretimi",
  "Kurulum ve devreye alma",
  "Eitim ve satiş sonrasi destek",
];

export function generateStaticParams() {
  return [...services.map((service) => ({ slug: service.slug })), { slug: maintenancePublicSlug }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = resolveServiceSlug(slug);
  const service = services.find((item) => item.slug === resolvedSlug);
  const premiumConfig = premiumServiceConfigs[resolvedSlug];

  if (!service) {
    return {
      title: "Hizmetler",
      description: "Pro Makina hizmetleri",
    };
  }

  if (slug === machineManufacturingSlug) {
    const canonical = `${siteUrl}/hizmetler/${slug}`;

    return {
      title: {
        absolute:
          "Makine İmalatı | Endüstriyel Makine ve Proses Ekipmanı Üretimi | Pro Makina",
      },
      description:
        "Pro Makina; tambur sistemleri, reaktör ve tanklar, konveyörler, kırıcılar, bunker, silo, paketleme ve özel proses ekipmanları için endüstriyel makine imalatı yapar.",
      keywords: [
        "makine imalatı",
        "endüstriyel makine üretimi",
        "özel makine imalatı",
        "proses ekipmanı",
        "tambur imalatı",
        "reaktör imalatı",
        "tank imalatı",
        "konveyör imalatı",
        "kırıcı imalatı",
        "gübre tesisi makineleri",
        "kompost tesisi ekipmanları",
      ],
      alternates: {
        canonical,
      },
      openGraph: {
        title: "Makine İmalatı | Endüstriyel Makine ve Proses Ekipmanı Üretimi",
        description:
          "Pro Makina; tambur sistemleri, reaktör ve tanklar, konveyörler, kırıcılar, bunker, silo, paketleme ve özel proses ekipmanları için endüstriyel makine imalatı yapar.",
        url: canonical,
        siteName: "Pro Makina",
        type: "website",
      },
    };
  }

  if (premiumConfig) {
    const canonicalSlug = premiumConfig.publicSlug ?? getPublicServiceSlug(resolvedSlug);
    const canonical = `${siteUrl}/hizmetler/${canonicalSlug}`;

    return {
      title: {
        absolute: premiumConfig.metadataTitle,
      },
      description: premiumConfig.metadataDescription,
      keywords: premiumConfig.keywords,
      alternates: {
        canonical,
      },
      openGraph: {
        title: premiumConfig.metadataTitle,
        description: premiumConfig.metadataDescription,
        url: canonical,
        siteName: "Pro Makina",
        type: "website",
      },
    };
  }

  const canonical = `${siteUrl}/hizmetler/${resolvedSlug}`;

  return {
    title: `${trText(service.title)}`,
    description: trText(service.summary),
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${trText(service.title)}`,
      description: trText(service.summary),
      url: canonical,
      siteName: "Pro Makina",
      type: "website",
    },
  };
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#278DC0]" />
            <span>{trText(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceOutputsCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#154764]">Bu Hizmet Size Ne Sağlar?</h3>
      <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#278DC0]/10 text-xs font-bold text-[#278DC0]">
              âœ“
            </span>
            <span>{trText(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedSectorLinks({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-950">İlgili Sektörler</h3>
      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => {
          const label = trText(item);
          const href =
            sectorHrefMap[label] ??
            (label === "Atık Su Çamuru Çözümleri"
              ? "/sektorler/atik-su-camuru-ve-aritma-cozumleri"
              : undefined);

          return href ? (
            <Link
              key={label}
              href={href}
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#278DC0]/20 hover:bg-[#278DC0]/10 hover:text-[#154764]"
            >
              {label}
            </Link>
          ) : (
            <span
              key={label}
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function MachineManufacturingPage({ whatsappHref }: { whatsappHref: string }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero title="Makine İmalatı ve Endüstriyel Proses Ekipmanları">
        <Link
          href="/iletisim"
          data-cta-event="quote_button_click"
          data-cta-label="makine_imalati_hero_quote"
        >
          Teknik Teklif Al
        </Link>
        <Link href="/makinalar-ekipman">Makinaları İncele</Link>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp ile Görüş
        </a>
      </Hero>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <MachineSectionHeading
                title="Prosesinize Uygun Endüstriyel Makine İmalatı"
                description="Pro Makina; gübre, kompost, geri dönüşüm, kimya, madencilik ve atık su çamuru prosesleri için sahaya, kapasiteye ve hammadde karakterine uygun endüstriyel makine imalatı yapar. Her makine; ürün davranışı, bakım kolaylığı ve uzun ömürlü çalışma hedefiyle tasarlanır."
              />
            </div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[320px] w-full sm:h-[380px]">
                <Image
                  src="/images/01-genel/fabrika1.jpg"
                  alt="Makine imalatı ve endüstriyel proses ekipmanları"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Makine İmalatında Pro Makina Yaklaşımı" />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {machineApproachCards.map((card) => (
              <MachineInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Hizmet Verdiğimiz Başlıca Sektörler" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {machineSectorCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Bu Hizmetle İlgili Makine ve Ekipman Grupları" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {machineGroupCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Makine İmalatı Sürecimiz" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {machineProcessFlow.map((step, index) => (
              <MachineProcessStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="İlgili Hizmetler" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {machineRelatedServiceCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d7e3ec] bg-gradient-to-br from-[#154764] via-[#1d6288] to-[#278DC0] px-6 py-10 text-white shadow-sm sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Prosesinize Uygun Makine İmalatı İçin Görüşelim
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/88">
              Üretmek istediğiniz ürün, kapasite hedefiniz ve saha koşullarınızı birlikte değerlendirelim. Pro Makina, ihtiyacınıza uygun makine ve proses ekipmanı çözümünü teknik olarak planlasın.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Makinaları İncele
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp ile Görüş
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type ContentCard = {
  title: string;
  description: string;
  href?: string;
};

const machineApproachCards: ContentCard[] = [
  {
    title: "Prosese Göre Tasarım",
    description:
      "Makine ölçüsü, kapasite, ürün yoğunluğu, nem oranı, sıcaklık, aşındırıcılık ve saha yerleşimi dikkate alınarak belirlenir. Böylece makine, üretim hattına sonradan uyarlanan bir ekipman değil; prosesin doğal parçası haline gelir.",
  },
  {
    title: "Dayanıklı İmalat",
    description:
      "Tambur, reaktör, tank, konveyör, kırıcı, bunker, silo ve özel proses ekipmanlarında sağlam gövde yapısı, doğru malzeme seçimi ve bakım kolaylığı ön planda tutulur. İmalatlarda ihtiyaca göre paslanmaz çelik, galvaniz ve RAL boyalı çözümler uygulanır.",
  },
  {
    title: "Saha Uyumlu Çözüm",
    description:
      "Makine; sadece atölyede değil, sahada çalışacağı gerçek koşullara göre değerlendirilir. Montaj alanı, besleme şekli, bakım erişimi, operatör kullanımı ve mevcut hatla bağlantı noktaları imalat öncesinde dikkate alınır.",
  },
];

const machineGroupCards: ContentCard[] = [
  {
    title: "Tambur Sistemleri",
    description:
      "Kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu ve özel proses tamburları.",
    href: "/makinalar-ekipman/tambur-sistemleri",
  },
  {
    title: "Reaktörler ve Proses Tankları",
    description:
      "Sıvı gübre, kimyasal proses, karıştırma, çözündürme ve stoklama amaçlı reaktör ve tank sistemleri.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
  },
  {
    title: "Kırıcılar ve Parçalayıcılar",
    description:
      "Hammadde hazırlama, boyut küçültme, geri dönüşüm ve proses ön hazırlığı için kırıcı ve parçalayıcı sistemler.",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  },
  {
    title: "Taşıma Ekipmanları",
    description:
      "Bant konveyör, helezon, elevatör ve proses içi malzeme transfer ekipmanları.",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
  },
  {
    title: "Depolama ve Besleme Sistemleri",
    description:
      "Bunker, silo, dozajlı besleme ve hammadde hazırlama sistemleri.",
    href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    description:
      "Toz, granül ve sıvı ürünler için paketleme, dolum ve son ürün hazırlama çözümleri.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
];

const machineSectorCards: ContentCard[] = [
  {
    title: "Gübre Üretim Tesisleri",
    description:
      "Granül gübre, organomineral gübre, sıvı gübre, NPK ve kompost gübre hatları için proses ve makine çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    title: "Kompost ve Organik Atık Tesisleri",
    description:
      "Evsel, tarımsal, hayvansal ve organik atıkların işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama sistemleri.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    title: "Enerji ve Biyogaz Sistemleri",
    description:
      "Biyogaz, biyometan, organik atık hazırlama ve enerji prosesleri için saha uyumlu ekipman çözümleri.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  {
    title: "Madencilik ve Mineral İşleme",
    description:
      "Kırma, eleme, kurutma, taşıma ve dökme katı malzeme prosesleri için endüstriyel sistemler.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  {
    title: "Kimya ve Proses Endüstrisi",
    description:
      "Reaktör, proses tankı, karıştırıcı, dozajlama ve sıvı proses hatları için teknik çözümler.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
  {
    title: "Geri Dönüşüm ve Atık Yönetimi",
    description:
      "Atık hazırlama, parçalama, kurutma, taşıma ve ayrıştırma prosesleri için makine ve hat çözümleri.",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
  },
  {
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    description:
      "Çamur kurutma, granülasyon, taşıma, depolama ve son ürün hazırlama prosesleri için ekipman çözümleri.",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  },
  {
    title: "Yem ve Dökme Katı Malzeme İşleme",
    description:
      "Toz, granül ve dökme katı ürünlerin taşınması, karıştırılması, depolanması ve paketlenmesi için sistem çözümleri.",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
  },
];

const machineProcessFlow: ContentCard[] = [
  {
    title: "İhtiyacın Analizi",
    description:
      "Kapasite, hammadde, nem oranı, ürün formu, saha koşulu ve üretim hedefi değerlendirilir.",
  },
  {
    title: "Teknik Tasarım",
    description:
      "Makine ölçüleri, malzeme seçimi, motor-redüktör gücü, taşıyıcı sistem ve bağlantı detayları belirlenir.",
  },
  {
    title: "İmalat",
    description:
      "Kesim, kaynak, montaj, boya veya paslanmaz imalat süreçleri proje detaylarına göre yürütülür.",
  },
  {
    title: "Saha Uyumu",
    description:
      "Makinenin mevcut hatla bağlantısı, montaj noktaları, bakım erişimi ve operatör kullanımı kontrol edilir.",
  },
  {
    title: "Devreye Alma Desteği",
    description:
      "Gerekli durumlarda montaj, saha kontrolü, test çalışması ve devreye alma sürecinde teknik destek sağlanır.",
  },
];

const machineRelatedServiceCards: ContentCard[] = [
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Makine seçiminden önce proses akışının doğru kurulması için mühendislik desteği.",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
  },
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Makine imalatından saha montajına kadar komple tesis kurulum çözümleri.",
    href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut makinelerin kapasite, verimlilik ve proses uyumu açısından yenilenmesi.",
    href: "/hizmetler/modernizasyon-ve-revizyon",
  },
  {
    title: "Bakım Servis ve Teknik Destek",
    description:
      "Tesis duruşlarını azaltmak için bakım, arıza tespiti ve teknik servis desteği.",
    href: "/hizmetler/bakim-servis-ve-teknik-destek",
  },
];

function MachineSectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function MachineInfoCard({ title, description }: ContentCard) {
  return (
    <article className="rounded-3xl border border-[#d7e3ec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-[#154764]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function MachineLinkCard({ title, description, href }: ContentCard) {
  return (
    <Link
      href={href ?? "#"}
      className="group rounded-3xl border border-[#d7e3ec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-[#154764] transition group-hover:text-[#278DC0]">
          {title}
        </h3>
        <span className="mt-1 text-lg text-[#278DC0] transition group-hover:translate-x-1 group-hover:text-[#154764]">
          →
        </span>
      </div>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </Link>
  );
}

function MachineProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-[#d7e3ec] bg-white p-6 shadow-sm">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#278DC0]/10 text-sm font-semibold text-[#278DC0]">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-[#154764]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}

type PremiumServiceConfig = {
  slug: string;
  publicSlug?: string;
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  image: string;
  imageAlt: string;
  approachCards: ContentCard[];
  machineCards: ContentCard[];
  sectorCards: ContentCard[];
  processSteps: ContentCard[];
  relatedServiceCards: ContentCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaShowMachinesButton?: boolean;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
};

const commonSectorCards: Record<string, ContentCard> = {
  fertilizer: {
    title: "Gübre Üretim Tesisleri",
    description:
      "Granül gübre, organomineral gübre, sıvı gübre, NPK ve kompost gübre hatları için proses ve makine çözümleri.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  compost: {
    title: "Kompost ve Organik Atık Tesisleri",
    description:
      "Evsel, tarımsal, hayvansal ve organik atıkların işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama sistemleri.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  biogas: {
    title: "Enerji ve Biyogaz Sistemleri",
    description:
      "Biyogaz, biyometan, organik atık hazırlama ve enerji prosesleri için saha uyumlu ekipman çözümleri.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  mining: {
    title: "Madencilik ve Mineral İşleme",
    description:
      "Kırma, eleme, kurutma, taşıma ve dökme katı malzeme prosesleri için endüstriyel sistemler.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  chemistry: {
    title: "Kimya ve Proses Endüstrisi",
    description:
      "Reaktör, proses tankı, karıştırıcı, dozajlama ve sıvı proses hatları için teknik çözümler.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
  recycling: {
    title: "Geri Dönüşüm ve Atık Yönetimi",
    description:
      "Atık hazırlama, parçalama, kurutma, taşıma ve ayrıştırma prosesleri için makine ve hat çözümleri.",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
  },
  sludge: {
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    description:
      "Çamur kurutma, granülasyon, taşıma, depolama ve son ürün hazırlama prosesleri için ekipman çözümleri.",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  },
  bulk: {
    title: "Yem ve Dökme Katı Malzeme İşleme",
    description:
      "Toz, granül ve dökme katı ürünlerin taşınması, karıştırılması, depolanması ve paketlenmesi için sistem çözümleri.",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
  },
};

const allServiceSectorCards: ContentCard[] = [
  commonSectorCards.fertilizer,
  commonSectorCards.compost,
  commonSectorCards.biogas,
  commonSectorCards.mining,
  commonSectorCards.chemistry,
  commonSectorCards.recycling,
  commonSectorCards.sludge,
  commonSectorCards.bulk,
];

const premiumServiceConfigs: Record<string, PremiumServiceConfig> = {
  [processDesignSlug]: {
    slug: processDesignSlug,
    heroTitle: "Proses Tasarımı ve Mühendislik Hizmetleri",
    heroDescription:
      "Kapasiteye, hammaddeye ve saha koşullarına göre endüstriyel üretim hattınızı teknik olarak birlikte kurgulayalım.",
    introTitle: "Üretim Hattınıza Uygun Proses Tasarımı",
    introDescription:
      "Pro Makina; hammadde, kapasite, nem oranı, ürün formu ve saha koşullarını birlikte değerlendirerek endüstriyel üretim hatları için proses tasarımı ve mühendislik desteği sunar. Amaç yalnızca makine seçmek değil, hammaddeden son ürüne kadar çalışan ve sürdürülebilir bir proses akışı kurmaktır.",
    image: "/images/01-genel/proses1.png",
    imageAlt: "Proses tasarımı ve mühendislik hizmetleri görseli",
    approachCards: [
      {
        title: "Hammaddeye Göre Analiz",
        description:
          "Ürünün davranışı, nem oranı, tane yapısı ve hedef son ürün formu birlikte değerlendirilir.",
      },
      {
        title: "Kapasiteye Uygun Hat Tasarımı",
        description:
          "Yatırım hedefi, günlük tonaj ve üretim senaryosuna göre dengeli bir proses akışı oluşturulur.",
      },
      {
        title: "Makine Seçiminde Proses Uyumu",
        description:
          "Tambur, konveyör, reaktör, tank ve yardımcı ekipmanlar tek tek değil; hatın bütünü içinde seçilir.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, granülasyon, soğutma ve kompost tamburları için proses uyumlu seçim desteği.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Karıştırma, reaksiyon, çözündürme ve stoklama prosesleri için reaktör ve tank çözümleri.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Malzeme transferinde hat dengesini koruyan konveyör, helezon ve elevatör grupları.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Eleme ve Sınıflandırma Sistemleri",
        description: "Ürün tane boyutu ve geri dönüş hattı yönetimi için eleme ve sınıflandırma ekipmanları.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Son ürün hazırlama, torbalama ve sıvı dolum süreçlerinde hat sonu çözümleri.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.chemistry,
      commonSectorCards.sludge,
      commonSectorCards.recycling,
    ],
    processSteps: [
      {
        title: "Ürün ve Hammadde Analizi",
        description: "Ürün tipi, hammadde yapısı, nem oranı ve proses hedefleri teknik olarak toplanır.",
      },
      {
        title: "Kapasite ve Proses Hedefi",
        description: "Üretim miktarı, vardiya kurgusu ve nihai ürün beklentisi netleştirilir.",
      },
      {
        title: "Akış Şeması ve Ekipman Listesi",
        description: "Hat akışı, ana makine grupları ve yardımcı sistemler bir bütün olarak planlanır.",
      },
      {
        title: "Yerleşim ve Bağlantı Noktaları",
        description: "Saha yerleşimi, besleme-boşaltma akışı ve bakım erişimi gözden geçirilir.",
      },
      {
        title: "Teknik Teklif ve Uygulama Planı",
        description: "Mühendislik yaklaşımı, ekipman kapsamı ve uygulama çerçevesi net bir yol haritasına dönüştürülür.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Makine İmalatı",
        description: "Proses tasarımına uygun özel makine ve ekipman üretim desteği.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Anahtar Teslim Tesis Kurulumu",
        description: "Proses tasarımından saha kurulumuna kadar uçtan uca tesis yönetimi.",
        href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
      },
      {
        title: "Pilot Tesis ve Proses Test Çalışmaları",
        description: "Yatırım öncesi süreç risklerini azaltmak için teknik test ve doğrulama hizmeti.",
        href: "/hizmetler/pilot-tesis-ve-proses-test-calismalari",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description: "Sahaya taşınacak proseslerin kontrollü şekilde uygulanması için koordinasyon desteği.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
    ],
    ctaTitle: "Proses Tasarımınızı Birlikte Netleştirelim",
    ctaDescription:
      "Hammadde tipinizi, kapasite hedefinizi ve üretim planınızı paylaşın; size uygun proses akışını ve makine mimarisini teknik olarak birlikte oluşturalım.",
    metadataTitle:
      "Proses Tasarımı ve Mühendislik | Endüstriyel Üretim Hattı Tasarımı | Pro Makina",
    metadataDescription:
      "Pro Makina; gübre, kompost, kimya, geri dönüşüm ve atık su çamuru prosesleri için kapasiteye ve hammaddeye uygun proses tasarımı ve mühendislik hizmeti sunar.",
    keywords: [
      "proses tasarımı",
      "mühendislik hizmetleri",
      "endüstriyel üretim hattı tasarımı",
      "tesis proses kurgusu",
      "makine seçimi",
    ],
  },
  [turnkeySlug]: {
    slug: turnkeySlug,
    heroTitle: "Anahtar Teslim Tesis Kurulumu",
    heroDescription:
      "Proses tasarımından montaja kadar tüm tesis kurulum sürecini tek merkezden, kontrollü ve uygulanabilir bir planla yönetiyoruz.",
    introTitle: "Proses Tasarımından Devreye Almaya Komple Tesis Kurulumu",
    introDescription:
      "Pro Makina; endüstriyel tesis projelerinde proses tasarımı, makine imalatı, saha montajı, devreye alma ve teknik destek süreçlerini tek çatı altında yönetir. Anahtar teslim tesis kurulumunda hedef, müşterinin ihtiyacına uygun, çalışabilir ve uzun ömürlü bir üretim hattı kurmaktır.",
    image: "/images/01-genel/projelendirme.jpg",
    imageAlt: "Anahtar teslim tesis kurulumu hizmetleri görseli",
    approachCards: [
      {
        title: "Uçtan Uca Proje Yönetimi",
        description:
          "Mühendislik, imalat, sevkiyat, saha montajı ve devreye alma adımları tek plan içinde ilerler.",
      },
      {
        title: "Sahaya Uygun Kurulum",
        description:
          "Her tesis, mevcut saha koşulları, altyapı yapısı ve operasyon gereksinimlerine göre kurgulanır.",
      },
      {
        title: "Çalışan Üretim Hattı Hedefi",
        description:
          "Teslim edilen sistem yalnızca kurulmuş değil; test edilmiş, dengelenmiş ve üretime hazır olur.",
      },
    ],
    machineCards: [
      {
        title: "Makinalar & Ekipman",
        description: "Anahtar teslim tesislerin ihtiyaç duyduğu tüm ana ve yardımcı makine grupları.",
        href: "/makinalar-ekipman",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, granülasyon, kompostlaştırma ve soğutma hatları için tambur çözümleri.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Sıvı proses, reaksiyon, stoklama ve karıştırma ihtiyaçları için reaktör ve tank sistemleri.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Hammadde ve son ürün akışını yöneten konveyör, elevatör ve helezon sistemleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Granül, toz ve sıvı ürünler için hat sonu paketleme ve dolum ekipmanları.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
      {
        title: "Toz Toplama Sistemleri",
        description: "Toz yönetimi, filtreleme ve saha temizliği için yardımcı proses çözümleri.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.biogas,
      commonSectorCards.recycling,
      commonSectorCards.sludge,
    ],
    processSteps: [
      {
        title: "Proses İhtiyacının Belirlenmesi",
        description: "Kapasite, ürün tipi, saha yapısı ve yatırım hedefi birlikte değerlendirilir.",
      },
      {
        title: "Tesis Akışı ve Makine Listesi",
        description: "Hat akışı, ana makine grupları ve yardımcı sistem kapsamı teknik olarak oluşturulur.",
      },
      {
        title: "İmalat ve Tedarik Planı",
        description: "Makine imalatı, dış tedarikler ve termin planı kontrollü biçimde hazırlanır.",
      },
      {
        title: "Saha Montajı ve Koordinasyon",
        description: "Kurulum, sevkiyat ve saha ekipleri tek merkezden koordine edilerek ilerletilir.",
      },
      {
        title: "Test, Devreye Alma ve Teknik Teslim",
        description: "Sistem kontrol edilir, ilk çalışma testleri yapılır ve tesis işletmeye hazır hale getirilir.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Proses Tasarımı ve Mühendislik",
        description: "Kurulum öncesinde doğru proses kurgusunu oluşturmak için mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Makine İmalatı",
        description: "Projeye özel makine ve proses ekipmanı üretimiyle tesis kurulumunu destekler.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description: "Saha ekipleri, sevkiyat ve montaj süreçleri için uygulama kontrolü sağlar.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
      {
        title: "Modernizasyon ve Revizyon",
        description: "Mevcut hatlarda kapasite artırımı ve sistem iyileştirmeleri için destek sunar.",
        href: "/hizmetler/modernizasyon-ve-revizyon",
      },
    ],
    ctaTitle: "Anahtar Teslim Tesisinizi Birlikte Planlayalım",
    ctaDescription:
      "Tesis hedefinizi, kapasite beklentinizi ve saha verilerinizi paylaşın; size uygun uçtan uca kurulum modelini net bir uygulama planına dönüştürelim.",
    metadataTitle:
      "Anahtar Teslim Tesis Kurulumu | Endüstriyel Tesis ve Proses Hatları | Pro Makina",
    metadataDescription:
      "Pro Makina; gübre, kompost, geri dönüşüm, kimya ve atık su çamuru prosesleri için anahtar teslim tesis kurulumu, makine imalatı, montaj ve devreye alma hizmeti sunar.",
    keywords: [
      "anahtar teslim tesis kurulumu",
      "endüstriyel tesis kurulumu",
      "proses hattı kurulumu",
      "makine montajı",
      "devreye alma",
    ],
  },
  [commissioningSlug]: {
    slug: commissioningSlug,
    heroTitle: "Kurulum ve Devreye Alma Hizmetleri",
    heroDescription:
      "Endüstriyel makine ve proses hatlarında kurulum, test ve devreye alma adımlarını kontrollü bir saha planıyla yönetiyoruz.",
    introTitle: "Endüstriyel Makine ve Tesislerde Planlı Devreye Alma",
    introDescription:
      "Pro Makina; endüstriyel makine ve proses hatlarında kurulum, mekanik montaj, saha kontrolü, test çalışması ve devreye alma süreçlerini planlı şekilde yürütür. Amaç, makinenin proses hattı içinde güvenli, dengeli ve verimli çalışmasını sağlamaktır.",
    image: "/images/01-genel/projelendirme.jpg",
    imageAlt: "Endüstriyel makine kurulum ve devreye alma hizmetleri",
    approachCards: [
      {
        title: "Saha Koşullarına Uygun Kurulum",
        description:
          "Makine yerleşimi, bağlantı noktaları, taşıma hattı, bakım erişimi ve operatör kullanım alanı sahadaki gerçek koşullara göre değerlendirilir.",
      },
      {
        title: "Kontrollü Test Süreci",
        description:
          "Kurulum sonrası boşta çalışma, yük altında çalışma, besleme-boşaltma kontrolü ve mekanik uyum testleri adım adım yapılır.",
      },
      {
        title: "Üretime Hazır Devreye Alma",
        description:
          "Makinenin proses hattı içinde dengeli çalışması, ürün akışı, kapasite uyumu ve saha kullanım kolaylığı kontrol edilerek teslim süreci tamamlanır.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description:
          "Kurutma, soğutma, granülasyon, kaplama ve özel proses tamburlarında montaj ve devreye alma desteği.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Reaktörler ve Proses Tankları",
        description:
          "Sıvı proses, karıştırma, çözündürme ve stoklama sistemlerinde saha kurulumu ve bağlantı kontrolü.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Taşıma Ekipmanları",
        description:
          "Bant konveyör, helezon, elevatör ve proses içi transfer ekipmanlarının saha montajı.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description:
          "Hammadde hazırlama ve boyut küçültme sistemlerinde kurulum, bağlantı ve test çalışmaları.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Toz Toplama Sistemleri",
        description:
          "Filtre, siklon, fan, kanal ve toz kontrol sistemlerinde montaj ve çalışma kontrolü.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description:
          "Toz, granül ve sıvı ürün hatlarında son ürün hazırlama ve devreye alma desteği.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      {
        title: "Gübre Üretim Tesisleri",
        description:
          "Granül gübre, organomineral gübre, sıvı gübre ve NPK hatlarında kurulum ve devreye alma.",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
      {
        title: "Kompost ve Organik Atık Tesisleri",
        description:
          "Kompost, organik atık, kurutma, eleme ve son ürün hazırlama hatlarında saha kurulumu.",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        title: "Geri Dönüşüm ve Atık Yönetimi",
        description:
          "Parçalama, taşıma, kurutma ve ayrıştırma proseslerinde makine kurulum desteği.",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
      },
      {
        title: "Atık Su Çamuru ve Arıtma Çözümleri",
        description:
          "Çamur kurutma, granülasyon, taşıma ve depolama sistemlerinde saha devreye alma.",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        title: "Kimya ve Proses Endüstrisi",
        description:
          "Reaktör, tank, karıştırıcı, dozajlama ve sıvı proses hatlarında kurulum desteği.",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
    ],
    processSteps: [
      {
        title: "Saha Hazırlığının Kontrolü",
        description:
          "Makine yerleşimi, zemin, bağlantı noktaları, enerji ihtiyacı ve montaj alanı değerlendirilir.",
      },
      {
        title: "Mekanik Kurulum",
        description:
          "Makine, ekipman ve yardımcı sistemler saha yerleşimine uygun şekilde monte edilir.",
      },
      {
        title: "Bağlantı ve Hizalama Kontrolü",
        description:
          "Besleme, boşaltma, taşıma, motor-redüktör, şase, bağlantı ve güvenlik noktaları kontrol edilir.",
      },
      {
        title: "Test Çalışması",
        description:
          "Makine önce boşta, ardından proses koşullarına uygun şekilde yük altında test edilir.",
      },
      {
        title: "Devreye Alma ve Teslim",
        description:
          "Çalışma kontrolü tamamlanır, gerekli ayarlar yapılır ve sistem üretime hazır hale getirilir.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Makine İmalatı",
        description:
          "Kurulacak ekipmanın üretim mantığını ve saha uyumunu destekleyen imalat hizmeti.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Proses Tasarımı ve Mühendislik",
        description:
          "Makinenin hat içinde doğru çalışması için süreç kurgusunu netleştiren mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Anahtar Teslim Tesis Kurulumu",
        description:
          "Kurulum ve devreye alma adımlarını uçtan uca tesis yönetimi içinde ele alan çözüm yapısı.",
        href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description:
          "Saha ekipleri, montaj sırası ve teslim adımlarını kontrollü yönetmek için koordinasyon desteği.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
      {
        title: "Bakım Servis ve Teknik Destek",
        description:
          "Devreye alma sonrası sistem sürekliliğini korumak için bakım ve teknik destek hizmeti.",
        href: "/hizmetler/bakim-servis-ve-teknik-destek",
      },
    ],
    ctaTitle: "Makine ve Tesis Kurulumunuz İçin Planlı Devreye Alma Desteği Alın",
    ctaDescription:
      "Kurulacak makine, proses hattı veya tesis yapınızı birlikte değerlendirelim. Pro Makina, saha koşullarına uygun kurulum ve devreye alma sürecini teknik olarak planlasın.",
    ctaShowMachinesButton: true,
    metadataTitle: "Kurulum ve Devreye Alma | Endüstriyel Makine Montajı | Pro Makina",
    metadataDescription:
      "Pro Makina; tambur, reaktör, tank, konveyör, kırıcı, paketleme ve toz toplama sistemleri için kurulum, mekanik montaj, test ve devreye alma hizmeti sunar.",
    keywords: [
      "kurulum ve devreye alma",
      "endüstriyel makine montajı",
      "tesis kurulumu",
      "makine devreye alma",
      "saha montajı",
      "proses hattı kurulumu",
      "tambur kurulumu",
      "konveyör montajı",
      "reaktör tank kurulumu",
    ],
  },
  [modernizationSlug]: {
    slug: modernizationSlug,
    heroTitle: "Modernizasyon ve Revizyon Hizmetleri",
    heroDescription:
      "Mevcut tesisinizi tamamen yenilemeden, kapasite ve proses verimini yükseltecek kontrollü iyileştirmeler planlıyoruz.",
    introTitle: "Mevcut Tesisler İçin Kapasite ve Verimlilik İyileştirme",
    introDescription:
      "Pro Makina; mevcut üretim hatlarında kapasite artışı, enerji verimliliği, proses stabilitesi ve bakım kolaylığı sağlamak için modernizasyon ve revizyon çözümleri geliştirir. Amaç, her zaman yeni tesis kurmak değil; mevcut hattı daha verimli, daha dengeli ve daha sürdürülebilir hale getirmektir.",
    image: "/images/bakim/bakim2.webp",
    imageAlt: "Modernizasyon ve revizyon hizmetleri görseli",
    approachCards: [
      {
        title: "Mevcut Hattın Analizi",
        description:
          "Darboğaz noktaları, arıza kaynakları, enerji yükleri ve proses dengesizlikleri saha verileriyle incelenir.",
      },
      {
        title: "Revizyon ve İyileştirme",
        description:
          "Mevcut ekipman korunarak veya seçili gruplar yenilenerek hattın daha dengeli çalışması sağlanır.",
      },
      {
        title: "Yatırım Maliyetini Azaltma",
        description:
          "Yeni tesis yerine kontrollü modernizasyon adımlarıyla daha düşük maliyetli iyileştirme modeli oluşturulur.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, soğutma ve granülasyon tamburlarında kapasite ve verim artırımı revizyonları.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Konveyör, elevatör ve helezon hatlarında akış dengesini güçlendiren iyileştirmeler.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description: "Hammadde hazırlama ve boyut küçültme adımlarında performans revizyonları.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Toz Toplama Sistemleri",
        description: "Filtreleme ve hava akışı düzenlemeleriyle tesis içi toz yönetimini iyileştiren çözümler.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Karıştırma, stoklama ve reaksiyon prosesleri için ekipman revizyon ve yenileme desteği.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.recycling,
      commonSectorCards.mining,
      commonSectorCards.chemistry,
    ],
    processSteps: [
      {
        title: "Mevcut Hattın Saha İncelemesi",
        description: "Sistem davranışı, kapasite sınırları ve operasyon akışı sahada değerlendirilir.",
      },
      {
        title: "Kapasite ve Arıza Noktaları",
        description: "Darboğaz, bakım yükü ve kaliteyi etkileyen kritik ekipmanlar tespit edilir.",
      },
      {
        title: "Revizyon Kapsamı",
        description: "Ekipman değişimi, ek sistem ihtiyacı ve uygulama planı teknik olarak tanımlanır.",
      },
      {
        title: "İmalat ve Ekipman Yenileme",
        description: "Gerekli parça, gövde, bağlantı veya yardımcı ekipman revizyonları kontrollü uygulanır.",
      },
      {
        title: "Test ve Performans Takibi",
        description: "Sistem devreye alınır, iyileştirme çıktıları izlenir ve son ayarlar tamamlanır.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Bakım Servis ve Teknik Destek",
        description: "Revizyon sonrası sistem sürekliliğini korumak için bakım ve servis desteği.",
        href: "/hizmetler/bakim-servis-ve-teknik-destek",
      },
      {
        title: "Makine İmalatı",
        description: "Revizyon kapsamındaki özel makine veya parça ihtiyaçları için imalat desteği.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Proses Tasarımı ve Mühendislik",
        description: "Mevcut hattın yeni proses hedeflerine göre yeniden kurgulanması için mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description: "Saha uygulamalarında termin ve ekip yönetimini kontrollü yürütmek için koordinasyon desteği.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
    ],
    ctaTitle: "Mevcut Hattınızı Daha Verimli Hale Getirelim",
    ctaDescription:
      "Darboğaz yaşayan, kapasite hedefini tutturamayan veya bakım yükü artan hattınızı birlikte inceleyelim; revizyon kapsamını teknik olarak netleştirelim.",
    metadataTitle:
      "Modernizasyon ve Revizyon | Tesis Yenileme ve Makine Revizyonu | Pro Makina",
    metadataDescription:
      "Pro Makina; mevcut endüstriyel tesislerde kapasite artırma, makine revizyonu, proses iyileştirme ve enerji verimliliği odaklı modernizasyon hizmetleri sunar.",
    keywords: [
      "modernizasyon",
      "revizyon",
      "tesis yenileme",
      "makine revizyonu",
      "kapasite artırımı",
    ],
  },
  [maintenanceSlug]: {
    slug: maintenanceSlug,
    publicSlug: maintenancePublicSlug,
    heroTitle: "Bakım Servis ve Teknik Destek",
    heroDescription:
      "Üretim hattınızdaki duruş riskini azaltmak ve makinalarınızı daha güvenli çalıştırmak için saha odaklı bakım desteği sağlıyoruz.",
    introTitle: "Endüstriyel Makineler İçin Bakım, Servis ve Teknik Destek",
    introDescription:
      "Pro Makina; üretim hatlarında duruş sürelerini azaltmak, mekanik arızaları doğru tespit etmek ve makinelerin güvenli çalışmasını sağlamak için bakım servis ve teknik destek hizmeti sunar. Tambur, konveyör, kırıcı, reaktör, tank, paketleme ve toz toplama sistemlerinde saha odaklı destek sağlar.",
    image: "/images/bakim/bakim1.webp",
    imageAlt: "Bakım servis ve teknik destek hizmetleri görseli",
    approachCards: [
      {
        title: "Hızlı Arıza Tespiti",
        description:
          "Sistemi yalnız arızalı parçaya göre değil, proses davranışı ve saha koşullarıyla birlikte değerlendiririz.",
      },
      {
        title: "Planlı Bakım Desteği",
        description:
          "Periyodik bakım planı oluşturarak plansız duruş riskini düşüren kontrollü bir servis yaklaşımı sunarız.",
      },
      {
        title: "Yedek Parça ve Teknik Çözüm",
        description:
          "Kritik parçalar, mekanik bağlantılar ve üretim sürekliliğini etkileyen noktalar için teknik çözüm üretiriz.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, granülasyon ve kompost tamburlarında bakım, denge ve mekanik kontrol desteği.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Konveyör, elevatör ve helezon sistemlerinde arıza tespiti ve servis desteği.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description: "Rotor, bıçak, gövde ve besleme sistemleri için bakım ve teknik inceleme çözümleri.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Karıştırıcı, bağlantı ve proses gövdesi kontrolüyle güvenli çalışma desteği.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Dolum ve torbalama hatlarında ayar, bakım ve servis ihtiyaçları için teknik destek.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.recycling,
      commonSectorCards.chemistry,
      commonSectorCards.mining,
    ],
    processSteps: [
      {
        title: "Bakım Talebinin Alınması",
        description: "Arıza, performans düşüşü veya planlı bakım talebi kapsamı netleştirilir.",
      },
      {
        title: "Makine ve Proses Değerlendirmesi",
        description: "Makinenin çalışma şartları, yük durumu ve sistem içindeki rolü birlikte incelenir.",
      },
      {
        title: "Saha İncelemesi veya Teknik Analiz",
        description: "Yerinde kontrol veya uzaktan teknik değerlendirme ile çözüm kapsamı belirlenir.",
      },
      {
        title: "Bakım, Revizyon veya Parça Çözümü",
        description: "Gerekli servis müdahalesi, parça değişimi veya revizyon uygulaması gerçekleştirilir.",
      },
      {
        title: "Test ve Çalışma Kontrolü",
        description: "Sistem çalıştırılır, müdahale sonrası stabilite ve güvenlik koşulları doğrulanır.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Modernizasyon ve Revizyon",
        description: "Bakımın ötesinde sistem iyileştirmesi gereken hatlar için revizyon desteği.",
        href: "/hizmetler/modernizasyon-ve-revizyon",
      },
      {
        title: "Makine İmalatı",
        description: "Yedek ekipman, özel parça veya yeni makine ihtiyacında imalat desteği.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description: "Saha ekipleri ve uygulama süreçlerini kontrollü yürütmek için koordinasyon desteği.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
      {
        title: "Proses Tasarımı ve Mühendislik",
        description: "Tekrarlayan sorunların proses kaynaklı olduğu durumlarda mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
    ],
    ctaTitle: "Bakım ve Teknik Destek İhtiyacınızı Planlayalım",
    ctaDescription:
      "Duruş yaşayan, bakım yükü artan veya teknik servis ihtiyacı oluşan hattınız için durumu birlikte değerlendirelim; en doğru müdahale planını oluşturalım.",
    metadataTitle:
      "Bakım Servis ve Teknik Destek | Endüstriyel Makine Bakımı | Pro Makina",
    metadataDescription:
      "Pro Makina; tambur, konveyör, kırıcı, reaktör, tank, paketleme ve toz toplama sistemleri için bakım servis, arıza tespiti ve teknik destek hizmeti sunar.",
    keywords: [
      "bakım servis",
      "teknik destek",
      "endüstriyel makine bakımı",
      "arıza tespiti",
      "saha servis",
    ],
  },
  [projectManagementSlug]: {
    slug: projectManagementSlug,
    heroTitle: "Proje Yönetimi ve Saha Koordinasyonu",
    heroDescription:
      "İmalat, sevkiyat, montaj ve devreye alma adımlarını tek takvim altında toplayarak saha karmaşasını azaltıyoruz.",
    introTitle: "Endüstriyel Tesis Projelerinde Planlı Saha Yönetimi",
    introDescription:
      "Pro Makina; imalat, sevkiyat, saha montajı, ekip koordinasyonu ve devreye alma süreçlerini planlı şekilde yönetir. Proje yönetimi ve saha koordinasyonu, işlerin doğru sırayla ilerlemesini ve sahada zaman kaybının azalmasını sağlar.",
    image: "/images/01-genel/sahakontrol1.webp",
    imageAlt: "Proje yönetimi ve saha koordinasyonu hizmetleri görseli",
    approachCards: [
      {
        title: "Planlı Proje Takibi",
        description:
          "İmalat, sevkiyat ve saha kurulum adımları tek termin planı ve net önceliklerle izlenir.",
      },
      {
        title: "Saha Ekip Koordinasyonu",
        description:
          "Montaj ekipleri, tedarik akışı ve teknik ekip görevleri sahada birbiriyle uyumlu ilerletilir.",
      },
      {
        title: "Devreye Alma Hazırlığı",
        description:
          "Sistemin devreye alma anına kadar tüm mekanik ve operasyonel ön koşulları kontrollü biçimde tamamlanır.",
      },
    ],
    machineCards: [
      {
        title: "Makinalar & Ekipman",
        description: "Projede yer alacak makine gruplarının koordineli şekilde sahaya taşınması ve entegrasyonu.",
        href: "/makinalar-ekipman",
      },
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, granülasyon ve kompost hatlarında büyük ekipman montaj koordinasyonu.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Konveyör, elevatör ve helezon hatlarında bağlantı ve saha sıralaması planlaması.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Reaktör, tank ve sıvı proses ekipmanlarında montaj ve entegrasyon koordinasyonu.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Hat sonu ekipmanlarının montaj, bağlantı ve devreye alma sırası için saha yönetimi.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.biogas,
      commonSectorCards.recycling,
      commonSectorCards.sludge,
    ],
    processSteps: [
      {
        title: "Proje Kapsamının Netleştirilmesi",
        description: "Tesis kapsamı, termin, uygulama sırası ve saha hedefleri proje başında belirlenir.",
      },
      {
        title: "İmalat ve Sevkiyat Planı",
        description: "Atölye üretimi, tedarik akışı ve sevkiyat zamanlaması tek takvimde toplanır.",
      },
      {
        title: "Saha Hazırlığı ve Montaj Organizasyonu",
        description: "Montaj alanları, ekip görevleri ve kurulum sırası sahaya uygun şekilde planlanır.",
      },
      {
        title: "Mekanik Kurulum ve Ekip Koordinasyonu",
        description: "Kurulum sürecindeki tüm ekipler, bağlantılar ve ara teslimler düzenli biçimde yönetilir.",
      },
      {
        title: "Test, Kontrol ve Devreye Alma Desteği",
        description: "Sistem devreye alma öncesi gözden geçirilir, son kontroller ve koordinasyon desteği sağlanır.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Anahtar Teslim Tesis Kurulumu",
        description: "Saha koordinasyonunu uçtan uca tesis kurulum modeli içinde ele alan hizmet yapısı.",
        href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
      },
      {
        title: "Makine İmalatı",
        description: "Projede kullanılacak ekipmanların üretim ve sevkiyat tarafını destekleyen imalat hizmeti.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Bakım Servis ve Teknik Destek",
        description: "Kurulum sonrası bakım ve saha müdahalesi gerektiren aşamalar için servis desteği.",
        href: "/hizmetler/bakim-servis-ve-teknik-destek",
      },
      {
        title: "Proses Tasarımı ve Mühendislik",
        description: "Sahaya taşınacak hattın teknik kurgusunu netleştiren mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
    ],
    ctaTitle: "Saha Kurulum Sürecinizi Kontrollü Yönetecek Yapıyı Kuralım",
    ctaDescription:
      "İmalat, sevkiyat ve montaj adımlarınızı tek takvim altında toplamak için proje kapsamınızı bizimle paylaşın; saha koordinasyon modelini birlikte oluşturalım.",
    metadataTitle:
      "Proje Yönetimi ve Saha Koordinasyonu | Endüstriyel Tesis Montajı | Pro Makina",
    metadataDescription:
      "Pro Makina; endüstriyel tesis projelerinde imalat, sevkiyat, montaj, saha koordinasyonu, proje takibi ve devreye alma süreçlerini yönetir.",
    keywords: [
      "proje yönetimi",
      "saha koordinasyonu",
      "endüstriyel tesis montajı",
      "kurulum yönetimi",
      "devreye alma desteği",
    ],
  },
  [pilotTestingSlug]: {
    slug: pilotTestingSlug,
    heroTitle: "Pilot Tesis ve Proses Test Çalışmaları",
    heroDescription:
      "Yatırım öncesinde hammadde davranışını ve proses risklerini test ederek daha güvenli teknik kararlar alınmasını sağlıyoruz.",
    introTitle: "Yatırım Öncesi Hammadde ve Proses Testleri",
    introDescription:
      "Pro Makina; yatırım öncesinde hammadde davranışını görmek, doğru makine seçimini yapmak ve proses risklerini azaltmak için pilot tesis ve proses test çalışmaları yürütür. Kurutma, karıştırma, granülasyon, eleme ve ürün formu gibi kritik aşamalar küçük ölçekli testlerle değerlendirilir.",
    image: "/images/01-genel/proje2.jpg",
    imageAlt: "Pilot tesis ve proses test çalışmaları görseli",
    approachCards: [
      {
        title: "Yatırım Riskini Azaltma",
        description:
          "Tam ölçekli yatırım öncesinde belirsiz süreçleri test ederek daha güvenli karar zemini oluştururuz.",
      },
      {
        title: "Hammadde Davranışını Görme",
        description:
          "Nem, akış, karışım ve ürün formu davranışlarını gerçek çalışma mantığına yakın koşullarda inceleriz.",
      },
      {
        title: "Doğru Proses Kararı",
        description:
          "Elde edilen teknik verilerle en uygun ekipman yapısını ve proses kurgusunu netleştiririz.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description: "Kurutma, granülasyon ve kompost tamburu testlerinde süreç davranışını izlemeye uygun ekipmanlar.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Reaktörler ve Tanklar",
        description: "Karıştırma, çözündürme ve reaksiyon adımlarını test etmeye uygun proses ekipmanları.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Eleme ve Sınıflandırma Sistemleri",
        description: "Ürün tane boyutu, geri dönüş ve sınıflandırma davranışını doğrulayan sistemler.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Taşıma Ekipmanları",
        description: "Malzemenin proses boyunca akışını ve transfer davranışını değerlendirmeye yardımcı ekipmanlar.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description: "Son ürün formunun dolum ve hat sonu davranışını test etmeye yönelik ekipman grupları.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      commonSectorCards.fertilizer,
      commonSectorCards.compost,
      commonSectorCards.chemistry,
      commonSectorCards.sludge,
      commonSectorCards.recycling,
    ],
    processSteps: [
      {
        title: "Hammadde ve Hedef Ürünün Belirlenmesi",
        description: "Test edilecek malzeme, hedef ürün formu ve beklenen proses çıktıları tanımlanır.",
      },
      {
        title: "Numune ve Veri İncelemesi",
        description: "Mevcut üretim verileri, numune sonuçları ve saha beklentileri birlikte değerlendirilir.",
      },
      {
        title: "Küçük Ölçekli Proses Denemesi",
        description: "Seçilen proses adımları kontrollü test kurgusu içinde uygulanır.",
      },
      {
        title: "Nem, Form ve Davranış Değerlendirmesi",
        description: "Ürün formu, nem yapısı, karışım dengesi ve ekipman tepkisi teknik olarak analiz edilir.",
      },
      {
        title: "Teknik Sonuçların Hazırlanması",
        description: "Elde edilen veriler yatırım kararı, makine seçimi ve ölçek büyütme planına dönüştürülür.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Proses Tasarımı ve Mühendislik",
        description: "Test verilerini tam ölçekli proses tasarımına dönüştürmek için mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Makine İmalatı",
        description: "Pilot sonuçlara uygun özel ekipman üretimi için imalat desteği.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Anahtar Teslim Tesis Kurulumu",
        description: "Doğrulanan prosesin tam ölçekli yatırıma dönüşmesi için uçtan uca kurulum hizmeti.",
        href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
      },
      {
        title: "Proje Yönetimi ve Saha Koordinasyonu",
        description: "Pilot sonrası yatırım sürecinde sahaya geçişi kontrollü yönetmek için koordinasyon desteği.",
        href: "/hizmetler/proje-yonetimi-ve-saha-koordinasyonu",
      },
    ],
    ctaTitle: "Pilot Test İhtiyacınızı Teknik Veriye Dönüştürelim",
    ctaDescription:
      "Hammadde örneğinizi, hedef ürününüzü ve yatırım planınızı paylaşın; süreç risklerini azaltacak test yaklaşımını birlikte kurgulayalım.",
    metadataTitle:
      "Pilot Tesis ve Proses Testleri | Yatırım Öncesi Proses Denemesi | Pro Makina",
    metadataDescription:
      "Pro Makina; kurutma, granülasyon, karıştırma, eleme ve reaksiyon prosesleri için yatırım öncesi pilot tesis ve proses test çalışmaları yapar.",
    keywords: [
      "pilot tesis",
      "proses testleri",
      "yatırım öncesi proses denemesi",
      "hammadde testi",
      "makine seçimi",
    ],
  },
  [consultingSlug]: {
    slug: consultingSlug,
    heroTitle: "Teknik Danışmanlık Hizmetleri",
    heroDescription:
      "Yeni tesis yatırımı, hat iyileştirme ve makine seçimi kararlarınız için sahada uygulanabilir teknik değerlendirme desteği sunuyoruz.",
    introTitle: "Endüstriyel Proses ve Makine Yatırımları İçin Teknik Danışmanlık",
    introDescription:
      "Pro Makina; yeni tesis yatırımı, mevcut hat iyileştirme, makine seçimi, kapasite planlama ve proses değerlendirme süreçlerinde teknik danışmanlık hizmeti sunar. Amaç, yatırım öncesinde doğru kararları almak ve sahada çalışabilir bir proses yapısı oluşturmaktır.",
    image: "/images/01-genel/hizmetler1.png",
    imageAlt: "Endüstriyel proses ve makine yatırımları için teknik danışmanlık",
    approachCards: [
      {
        title: "Yatırım Öncesi Doğru Karar",
        description:
          "Makine, kapasite, proses akışı ve saha yerleşimi yatırım öncesinde değerlendirilerek gereksiz maliyetlerin önüne geçilir.",
      },
      {
        title: "Proses Odaklı Değerlendirme",
        description:
          "Hammadde, nem oranı, tane boyutu, ürün formu, enerji ihtiyacı ve üretim hedefi birlikte analiz edilir.",
      },
      {
        title: "Uygulanabilir Teknik Çözüm",
        description:
          "Teorik öneriler yerine sahada uygulanabilir, üretim hattına entegre edilebilir ve işletilebilir çözümler geliştirilir.",
      },
    ],
    machineCards: [
      {
        title: "Tambur Sistemleri",
        description:
          "Kurutma, soğutma, granülasyon, kaplama ve kompost tamburları için teknik değerlendirme.",
        href: "/makinalar-ekipman/tambur-sistemleri",
      },
      {
        title: "Reaktörler ve Proses Tankları",
        description:
          "Sıvı proses, çözündürme, karıştırma ve stoklama tankları için kapasite ve proses değerlendirmesi.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Taşıma Ekipmanları",
        description:
          "Konveyör, helezon, elevatör ve malzeme transfer sistemleri için hat uyumu analizi.",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        title: "Kırıcılar ve Parçalayıcılar",
        description:
          "Hammadde hazırlama, boyut küçültme ve geri dönüşüm prosesleri için ekipman seçimi desteği.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        title: "Eleme ve Sınıflandırma Sistemleri",
        description:
          "Ürün tane boyu, sınıflandırma ve son ürün kalitesi için teknik çözüm değerlendirmesi.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "Paketleme ve Dolum Sistemleri",
        description:
          "Toz, granül ve sıvı ürünlerde paketleme, dolum ve son ürün hazırlama hattı planlaması.",
        href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
      },
    ],
    sectorCards: [
      {
        title: "Gübre Üretim Tesisleri",
        description:
          "Organomineral gübre, granül gübre, sıvı gübre, NPK ve kompost gübre yatırımları için danışmanlık.",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
      {
        title: "Kompost ve Organik Atık Tesisleri",
        description:
          "Evsel, tarımsal, hayvansal ve organik atık işleme prosesleri için teknik değerlendirme.",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        title: "Geri Dönüşüm ve Atık Yönetimi",
        description:
          "Atık hazırlama, parçalama, kurutma, ayrıştırma ve son ürün hazırlama süreçleri için danışmanlık.",
        href: "/sektorler/geri-donusum-ve-atik-yonetimi",
      },
      {
        title: "Kimya ve Proses Endüstrisi",
        description:
          "Reaktör, tank, karıştırma, dozajlama ve sıvı proses yatırımları için teknik destek.",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      {
        title: "Atık Su Çamuru ve Arıtma Çözümleri",
        description:
          "Çamur kurutma, granülasyon, depolama ve bertaraf/geri kazanım süreçleri için proses değerlendirmesi.",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
    ],
    processSteps: [
      {
        title: "İhtiyacın Netleştirilmesi",
        description:
          "Ürün, hammadde, kapasite hedefi, saha durumu ve yatırım beklentisi birlikte değerlendirilir.",
      },
      {
        title: "Mevcut Verilerin İncelenmesi",
        description:
          "Varsa mevcut proses, makine listesi, saha yerleşimi, ürün analizi ve üretim verileri incelenir.",
      },
      {
        title: "Teknik Değerlendirme",
        description:
          "Proses akışı, ekipman seçimi, kapasite dengesi ve olası darboğazlar teknik olarak analiz edilir.",
      },
      {
        title: "Çözüm Önerisinin Oluşturulması",
        description:
          "Makine, hat yapısı, revizyon, test veya yatırım kapsamı için uygulanabilir öneriler hazırlanır.",
      },
      {
        title: "Uygulama Yol Haritası",
        description:
          "Yatırım, imalat, kurulum veya modernizasyon sürecine geçiş için teknik yol haritası belirlenir.",
      },
    ],
    relatedServiceCards: [
      {
        title: "Proses Tasarımı ve Mühendislik",
        description:
          "Danışmanlık çıktılarının proses akışına dönüşmesi için mühendislik desteği.",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      {
        title: "Makine İmalatı",
        description:
          "Seçilen ekipmanların sahaya ve prosese uygun biçimde üretilmesi için imalat desteği.",
        href: "/hizmetler/makine-imalati",
      },
      {
        title: "Pilot Tesis ve Proses Test Çalışmaları",
        description:
          "Yatırım öncesi teknik kararları küçük ölçekli testlerle doğrulamak için süreç desteği.",
        href: "/hizmetler/pilot-tesis-ve-proses-test-calismalari",
      },
      {
        title: "Modernizasyon ve Revizyon",
        description:
          "Mevcut tesislerde danışmanlık sonrası uygulanacak iyileştirme adımları için revizyon desteği.",
        href: "/hizmetler/modernizasyon-ve-revizyon",
      },
      {
        title: "Anahtar Teslim Tesis Kurulumu",
        description:
          "Danışmanlık kararlarının tam ölçekli tesise dönüşmesi için uçtan uca kurulum hizmeti.",
        href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
      },
    ],
    ctaTitle: "Yatırımınız İçin Teknik Değerlendirme Alın",
    ctaDescription:
      "Üretmek istediğiniz ürün, kapasite hedefiniz veya mevcut tesisinizle ilgili süreci birlikte değerlendirelim. Pro Makina, yatırım öncesi doğru karar vermeniz için teknik danışmanlık desteği sunsun.",
    ctaShowMachinesButton: true,
    metadataTitle:
      "Teknik Danışmanlık | Proses ve Makine Yatırım Danışmanlığı | Pro Makina",
    metadataDescription:
      "Pro Makina; proses tasarımı, makine seçimi, kapasite planlama, tesis yatırımı, modernizasyon ve pilot proses değerlendirmeleri için teknik danışmanlık hizmeti sunar.",
    keywords: [
      "teknik danışmanlık",
      "proses danışmanlığı",
      "makine yatırım danışmanlığı",
      "tesis yatırım danışmanlığı",
      "proses tasarımı",
      "makine seçimi",
      "kapasite planlama",
      "endüstriyel tesis danışmanlığı",
    ],
  },
};

function PremiumServicePage({
  config,
  whatsappHref,
}: {
  config: PremiumServiceConfig;
  whatsappHref: string;
}) {
  const introParagraphs = config.introDescription.split("\n\n").filter(Boolean);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero title={config.heroTitle}>
        <>
          <p className="basis-full max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {config.heroDescription}
          </p>
          <Link
            href="/iletisim"
            data-cta-event="quote_button_click"
            data-cta-label={`${config.slug}_hero_quote`}
          >
            Teknik Teklif Al
          </Link>
          <Link href="/makinalar-ekipman">Makinaları İncele</Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp ile Görüş
          </a>
        </>
      </Hero>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="max-w-4xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  {config.introTitle}
                </h2>
                <div className="mt-4 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[320px] w-full sm:h-[380px]">
                <Image
                  src={config.image}
                  alt={config.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title={`${config.heroTitle} İçin Yaklaşımımız`} />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {config.approachCards.map((card) => (
              <MachineInfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Hizmet Verdiğimiz Başlıca Sektörler" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allServiceSectorCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Bu Hizmetle İlgili Makine ve Ekipman Grupları" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {config.machineCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="Hizmet Sürecimiz" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {config.processSteps.map((step, index) => (
              <MachineProcessStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <MachineSectionHeading title="İlgili Hizmetler" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {config.relatedServiceCards.map((card) => (
              <MachineLinkCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d7e3ec] bg-gradient-to-br from-[#154764] via-[#1d6288] to-[#278DC0] px-6 py-10 text-white shadow-sm sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              {config.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/88">
              {config.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              {config.ctaShowMachinesButton ? (
                <Link
                  href="/makinalar-ekipman"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Makinaları İncele
                </Link>
              ) : null}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                WhatsApp ile Görüş
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveServiceSlug(slug);
  const service = services.find((item) => item.slug === resolvedSlug);

  if (!service) {
    notFound();
  }

  const premiumConfig = premiumServiceConfigs[resolvedSlug];
  const isTurnkey = resolvedSlug === turnkeySlug;
  const isProcessDesign = resolvedSlug === processDesignSlug;
  const isMachineManufacturing = resolvedSlug === machineManufacturingSlug;
  const isCommissioning = resolvedSlug === commissioningSlug;
  const isModernization = resolvedSlug === modernizationSlug;
  const isConsulting = resolvedSlug === consultingSlug;
  const isMaintenance = resolvedSlug === maintenanceSlug;
  const isProjectManagement = resolvedSlug === projectManagementSlug;
  const isPilotTesting = resolvedSlug === pilotTestingSlug;
  const isLiquidFertilizer = resolvedSlug === liquidFertilizerSlug;
  const whatsappHref = createWhatsAppHref(
    `Merhaba, Pro Makina web sitenizden ulaşıyorum. Aşağıdaki ürün/hizmet için teklif almak istiyorum: ${premiumConfig?.heroTitle ?? trText(service.title)}`,
  );

  if (premiumConfig) {
    return <PremiumServicePage config={premiumConfig} whatsappHref={whatsappHref} />;
  }

  if (isMachineManufacturing) {
    return <MachineManufacturingPage whatsappHref={whatsappHref} />;
  }

  const heroImage = isTurnkey
    ? "/images/01-genel/fabrika1.jpg"
    : isProcessDesign
      ? "/images/01-genel/proses1.png"
      : service.image;

  const introParagraphs = isTurnkey
    ? turnkeyIntro
    : isMachineManufacturing
      ? machineIntro
      : isCommissioning
        ? commissioningIntro
        : isModernization
          ? modernizationIntro
          : isConsulting
            ? consultingIntro
            : isMaintenance
              ? maintenanceIntro
    : [trText(service.summary), trText(service.heroDescription)];

  const scopeIntro = isTurnkey
    ? turnkeyScopeIntro
    : isMachineManufacturing
      ? machineScopeIntro
      : isCommissioning
        ? commissioningScopeIntro
        : isModernization
          ? modernizationScopeIntro
          : isConsulting
            ? consultingScopeIntro
            : isMaintenance
              ? maintenanceScopeIntro
      : trText(service.summary);
  const outputs = isTurnkey
    ? turnkeyOutputs
    : isProcessDesign
      ? processDesignOutputs
    : isMachineManufacturing
      ? machineOutputs
      : isCommissioning
        ? commissioningOutputs
        : isModernization
          ? modernizationOutputs
          : isConsulting
            ? consultingOutputs
            : isMaintenance
              ? maintenanceOutputs
              : isProjectManagement
                ? projectManagementOutputs
                : isPilotTesting
                  ? pilotTestingOutputs
      : service.outputs.map((item) => trText(item));
  const scope = isTurnkey
    ? turnkeyScope
    : isMachineManufacturing
      ? machineScope
      : isCommissioning
        ? commissioningScope
        : isModernization
          ? modernizationScope
          : isConsulting
            ? consultingScope
            : isMaintenance
              ? maintenanceScope
      : service.scope.map((item) => trText(item));
  const advantages = isTurnkey
    ? turnkeyAdvantages
    : isMachineManufacturing
      ? machineAdvantages
      : isCommissioning
        ? commissioningAdvantages
        : isModernization
          ? modernizationAdvantages
          : isConsulting
            ? consultingAdvantages
            : isMaintenance
              ? maintenanceAdvantages
      : service.advantages.map((item) => trText(item));
  const sectors = isTurnkey
    ? turnkeySectors
    : isMachineManufacturing
      ? machineSectors
      : isCommissioning
        ? commissioningSectors
        : isModernization
          ? modernizationSectors
          : isConsulting
            ? consultingSectors
            : isMaintenance
              ? maintenanceSectors
      : service.relatedSectors.map((item) => trText(item));
  const relatedMachines = isMachineManufacturing
    ? machineRelatedMachines
    : isModernization
      ? modernizationRelatedMachines
    : service.relatedMachines.map((item) => trText(item));
  const relatedProjects = isMachineManufacturing
    ? machineRelatedProjects
    : isCommissioning
      ? commissioningRelatedProjects
      : isModernization
        ? modernizationRelatedProjects
        : isMaintenance
          ? maintenanceRelatedProjects
    : service.relatedProjects.map((item) => trText(item));
  const faqs = isTurnkey
    ? turnkeyFaqs
    : isMachineManufacturing
      ? machineFaqs
      : isCommissioning
        ? commissioningFaqs
        : isModernization
          ? modernizationFaqs
          : isConsulting
            ? consultingFaqs
            : isMaintenance
              ? maintenanceFaqs
    : service.faqs.map((faq) => ({
        question: trText(faq.question),
        answer: trText(faq.answer),
      }));
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title={trText(service.title)}
        description={trText(service.summary)}
        image={heroImage}
      >
        <Link
          href="/iletisim"
          data-cta-event="quote_button_click"
          data-cta-label={`${service.slug}_hero_quote`}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp ile Gönder
        </a>
        <a
          href={siteContact.phoneHref}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          Telefonla Ara
        </a>
      </Hero>

      <section className="pt-16 sm:pt-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                {trText(service.title)}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Uzmanl1k Kapsam1
              </h2>
              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{trText(paragraph)}</p>
                ))}
                <p>{trText(scopeIntro)}</p>
                {isLiquidFertilizer ? (
                  <p>
                    Genel gübre tesisi planlama ve anahtar teslim çözümler hakkında daha
                    fazla bilgi için{" "}
                    <Link
                      href="/hizmetler/gubre-tesisi-kurulumu"
                      className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
                    >
                      gübre tesisi kurulumu
                    </Link>{" "}
                    sayfam1z1 inceleyebilirsiniz.
                  </p>
                ) : null}
              </div>
            </div>

            {isProcessDesign ||
            isMachineManufacturing ||
            isModernization ||
            isMaintenance ||
            isProjectManagement ||
            isPilotTesting ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-[320px] w-full sm:h-[380px]">
                  <Image
                    src={
                      isProcessDesign
                        ? "/images/01-genel/proses1.png"
                        : isMachineManufacturing
                        ? "/images/01-genel/fabrika1.jpg"
                        : isModernization
                          ? "/images/bakim/bakim2.webp"
                          : isMaintenance
                            ? "/images/bakim/bakim1.webp"
                            : isProjectManagement
                              ? "/images/01-genel/sahakontrol1.webp"
                              : "/images/01-genel/proje2.jpg"
                    }
                    alt={
                      isProcessDesign
                        ? "Proses Tasarımı ve Mühendislik hizmetleri için proses görseli"
                        : isMachineManufacturing
                        ? "Makine İmalatı hizmetleri için fabrika görseli"
                        : isModernization
                          ? "Modernizasyon ve revizyon hizmetleri için saha bakım görseli"
                          : isMaintenance
                            ? "Bakım servisi hizmetleri için saha bakım görseli"
                            : isProjectManagement
                              ? "Proje yönetimi ve saha koordinasyonu için saha kontrol görseli"
                              : "Pilot tesis ve proses test çalışmaları için proje görseli"
                    }
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-semibold text-slate-950">
                  Bu Hizmet Size Ne Sağlar?
                </h3>
                <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                  {outputs.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#278DC0]" />
                      <span>{trText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ServiceList title="Hizmet Kapsamı" items={scope} />
            <ServiceList title="Avantajlar" items={advantages} />
            <RelatedSectorLinks items={sectors} />
            {isMachineManufacturing ? (
              <>
                <ServiceList title="İlgili Makinalar" items={relatedMachines} />
                <div className="md:col-span-2 xl:col-span-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <ServiceList title="İlgili Projeler" items={relatedProjects} />
                    <ServiceOutputsCard items={outputs} />
                  </div>
                </div>
              </>
            ) : isCommissioning ? (
              <ServiceList title="İlgili Projeler" items={relatedProjects} />
            ) : isProcessDesign ? (
              <div className="md:col-span-2 xl:col-span-2">
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceList title="İlgili Projeler" items={relatedProjects} />
                  <ServiceOutputsCard items={outputs} />
                </div>
              </div>
            ) : isModernization ? (
              <>
                <ServiceList title="İlgili Makinalar" items={relatedMachines} />
                <div className="md:col-span-2 xl:col-span-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <ServiceList title="İlgili Projeler" items={relatedProjects} />
                    <ServiceOutputsCard items={outputs} />
                  </div>
                </div>
              </>
            ) : isConsulting ? null : isMaintenance ? (
              <div className="md:col-span-2 xl:col-span-2">
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceList title="İlgili Projeler" items={relatedProjects} />
                  <ServiceOutputsCard items={outputs} />
                </div>
              </div>
            ) : isPilotTesting ? (
              <div className="md:col-span-2 xl:col-span-2">
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceList title="İlgili Projeler" items={relatedProjects} />
                  <ServiceOutputsCard items={outputs} />
                </div>
              </div>
            ) : isProjectManagement ? (
              <div className="md:col-span-2 xl:col-span-2">
                <div className="grid gap-6 md:grid-cols-2">
                  <ServiceList title="İlgili Projeler" items={relatedProjects} />
                  <ServiceOutputsCard items={outputs} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
              Nasıl Çalışıyoruz?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              5 adımda proje süreci
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-5">
              {(isTurnkey
                ? turnkeyProcessSteps
                : isMachineManufacturing
                  ? machineProcessSteps
                  : isCommissioning
                    ? commissioningProcessSteps
                    : isModernization
                      ? modernizationProcessSteps
                      : isConsulting
                        ? consultingProcessSteps
                        : isMaintenance
                          ? maintenanceProcessSteps
                : defaultProcessSteps.map((title) => ({
                    title,
                    description:
                      "Her adim, proje takvimi, teknik uyum ve saha koordinasyonu dikkate alinarak planlanir.",
                  }))).map((step) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold leading-7 text-slate-950">
                    {trText(step.title)}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {trText(step.description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Sık Sorulan Sorular
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {trText(faq.question)}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-slate-600">{trText(faq.answer)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-sm sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için teknik teklif alın
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/86">
              Kapasite, hammadde, nem oranı, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${service.slug}_mid_quote_form`}
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Formu
              </Link>
              <a
                href={siteContact.phoneHref}
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {trText(
                isMachineManufacturing
                  ? "Makine imalatı ve endüstriyel makine üretimi projelerinde neden proses uyumlu mühendislik yakla_1m1 gerekir?"
                  : "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu ve proses tesisi kurulumu neden tek merkezden yönetilmelidir?",
              )}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {isMachineManufacturing ? (
              <>
                <ServiceList title="İlgili Makinalar" items={relatedMachines} />
                <div className="md:col-span-2 xl:col-span-2">
                  <div className="grid gap-6 md:grid-cols-2">
                    <ServiceList title="İlgili Projeler" items={relatedProjects} />
                    <ServiceOutputsCard items={outputs} />
                  </div>
                </div>
              </>
            ) : isCommissioning ? (
                <>
                  <p>{trText(`
                    Kurulum ve devreye alma süreci yalnizca ekipmanlarin sahaya
yerleştirilmesi değil, ayni zamanda tüm mekanik, elektrik ve
otomasyon başlantilarinin kontrollü bi?imde ?aliştirilmasidir.
endüstriyel kurulum ve tesis devreye alma a_amalarinda doğru
planlama yapilmadişinda saha montaji uzayabilir ve üretime
geïi_ gecikebilir.
                  `)}</p>
                  <p>{trText(`
                    Commissioning hizmeti; ilk ïal1_t1rma, proses devreye alma,
performans dorulama ve operat?r adaptasyonunu kapsayan kritik
bir geïi_ sïrecidir. Bu nedenle her adim ïlïïlebilir, gïvenli
ve koordineli ilerletilmelidir.
                  `)}</p>
                </>
              ) : isModernization ? (
                <>
                  <p>{trText(`
                    Tesis modernizasyonu ïal1_malari, mevcut yatirimin daha yïksek
performansla ïal1_masini saşlayan stratejik iyileştirme projeleridir.
Proses iyileştirme, kapasite artirimi ve hat optimizasyonu adimlari;
kompost, gübre, geri dönüşüm ve endüstriyel proses tesislerinde
yeni yatırım yapmadan verimlilik artirma imkânı sunar.
                  `)}</p>
                  <p>{trText(`
                    endüstriyel revizyon projelerinde doğru mïhendislik yakla_1m1 ile
darboşazlar azaltilir, enerji kullanimi dengelenir ve proses geliştirme
ïal1_malari ile sistem daha stabil hale getirilir. B?ylece mevcut hat
?zerinden daha kontrollü kapasite artişi saşlanabilir.
                  `)}</p>
                </>
              ) : isConsulting ? (
                <>
                  <p>{trText(`
                    Teknik dan1_manl1k hizmeti, yatırım ïncesinde doğru kararlari
almayi saşlayan en kritik a_amalardan biridir. Proses danişmanlişi,
tesis danişmanlişi ve yatırım danişmanlişi ïal1_malari; yanliş
kapasite planlamasi, hatali ekipman tercihi ve uygunsuz proses
kurgusu gibi yüksek maliyetli hatalarin ?n?ne ge?er.
                  `)}</p>
                  <p>{trText(`
                    endüstriyel dan1_manl1k ve proses m?hendislişi danişmanlişi
yakla_1m1 ile saha verileri, malzeme yapısı ve ïretim hedefleri
birlikte deerlendirilir. B?ylece yatırım sïreci daha net, daha
kontrollü ve daha s?rd?r?lebilir bir yapiya kavu_ur.
                  `)}</p>
                </>
              ) : isMaintenance ? (
                <>
                  <p>{trText(`
                    endüstriyel bak1m hizmeti, yalnizca ariza sonrasi m?dahale değildir.
Tesis bak1m hizmeti ve makine bak1m servisi yakla_1m1; ekipman
ïmrïn? koruyan, ïretim kayiplarini azaltan ve i_letme gïvenlişini
artiran planli bir sistem yönetimi sunar.
                  `)}</p>
                  <p>{trText(`
                    Periyodik bakım, ?nleyici bakım ve saha servis hizmeti birlikte
                    yürüt?ldşinde; endüstriyel servis süreçleri daha izlenebilir hale
                    gelir, kritik parçalar kontrol altinda tutulur ve üretim süreklilişi
                    daha güvenli biçimde korunur.
                  `)}</p>
                </>
              ) : (
                <>
                  <p>{trText(`
                    Anahtar teslim tesis kurulumu yakla_1m1; mïhendislik, ekipman seçimi,
makina imalatı, saha montaji ve devreye alma süreçlerini tek bir
planlama disiplini içinde birleştirir. Bu yapi, özellikle kompost
tesisi kurulumu, gübre tesisi kurulumu, geri dönüşüm tesisi kurulumu
ve endüstriyel tesis kurulumu projelerinde koordinasyon riskini azaltir.
                  `)}</p>
                  <p>{trText(`
                    Proje boyunca tek merkezden karar alinmasi; maliyet kontrol?n?,
termin yönetimini ve teknik uyumu g?lendirir. Böylece yatirimci,
sadece ekipman satin alan değil, bïtïnle_ik ve ïal1_1r bir proses tesisi
kurulumu hizmeti alan tarafta olur.
                  `)}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-sm sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için teknik teklif alın
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/86">
              Kapasite, hammadde, nem oranı, proses hedefi ve saha koşullarına göre size özel makine ve tesis çözümü hazırlayalım.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-white/82">
              {trText(
                isMachineManufacturing
                  ? "Projenize en uygun makina çözümlerini, doğru malzeme seçimini ve yüksek performansli üretim sistemlerini birlikte planlayalim."
                  : isCommissioning
                    ? "Tesisinizin sorunsuz _ekilde devreye alinmasi, hızlı üretime geçi_ ve maksimum performans için birlikte planlama yapalim."
                    : isModernization
                      ? "Mevcut tesisinizin performansını artirmak, kapasitenizi y?kseltmek ve verimlilii maksimum seviyeye ?ikarmak için birlikte planlama yapalim."
                      : isConsulting
                        ? "Yatiriminizi doğru planlamak, riskleri azaltmak ve en verimli sistemi kurmak için birlikte teknik yol haritanizi oluşturalım."
                        : isMaintenance
                          ? "Tesisinizin kesintisiz çal1_masi, ekipman ?mrının uzamasi ve üretim verimliliinin korunmasi için birlikte planlama yapalim."
                          : "Projenize en uygun teknik çözüm?, doğru ekipman seçimini ve optimum yatırım planini birlikte belirleyelim.",
              )}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label={`${service.slug}_final_quote_form`}
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teknik Teklif Formu
              </Link>
              <a
                href={siteContact.phoneHref}
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Telefonla Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}





