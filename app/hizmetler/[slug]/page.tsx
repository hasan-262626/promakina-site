import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import { services } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectorHrefMap: Record<string, string> = {
  "Gübre Üretim Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
  "Kompost ve Organik Atık Tesisleri": "/sektorler/kompost-ve-organik-atik-tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri": "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "Geri Dönüşüm ve Atık Yönetimi": "/sektorler/geri-donusum-ve-atik-yonetimi",
  "Enerji ve Biyogaz Sistemleri": "/sektorler/enerji-ve-biyogaz-sistemleri",
  "Madencilik ve Mineral İşleme": "/sektorler/madencilik-ve-mineral-isleme",
  "Kimya ve Proses Endüstrisi": "/sektorler/kimya-ve-proses-endustrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri":
    "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
};

const turnkeySlug = "anahtar-teslim-tesis-kurulumu";
const processDesignSlug = "proses-tasarimi-ve-muhendislik";
const machineManufacturingSlug = "makine-imalati";
const commissioningSlug = "kurulum-ve-devreye-alma";
const modernizationSlug = "modernizasyon-ve-revizyon";
const consultingSlug = "teknik-danismanlik";
const maintenanceSlug = "bakim-ve-servis";

const turnkeyIntro = [
  "Anahtar teslim tesis kurulumu hizmetimiz ile tüm süreci tek bir koordinasyon altinda yönetiyoruz. Kompost, g?bre, geri d?n??m ve end?striyel proses tesisleri için planlama, mühendislik, imalat, montaj ve devreye alma adimlarini entegre şekilde sunuyoruz.",
  "Projenizin her aşamasini tek elden yöneterek zaman kaybini minimize eder, maliyetleri kontrol altinda tutar ve sahada sorunsuz bir kurulum süreci sağlarız.",
];

const turnkeyScopeIntro =
  "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz. Her proje, saha koşulları, kapasite ihtiyaci ve proses gereksinimlerine göre özel olarak planlanir.";

const turnkeyOutputs = [
  "Tek merkezden yönetilen profesyonel proje süreci",
  "Zaman kaybinin ve koordinasyon hatalarinin minimize edilmesi",
  "Net, öngörülebilir ve kontrol edilebilir maliyet yapisi",
  "Tüm süreçlerde teknik uyum ve standartla?Yma",
  "Sahada hizli ve sorunsuz devreye alma",
];

const turnkeyScope = [
  "Tesis yerle?Yim plani ve saha optimizasyonu",
  "Ekipman se?imi ve proses uyumlandirmasi",
  "Makina imalatı ve kalite kontrol süreçleri",
  "Saha montaji ve mekanik kurulum",
  "Devreye alma ve performans testleri",
  "Teknik danışmanlık ve süreç optimizasyonu",
];

const turnkeyAdvantages = [
  "Tek muhatap ile tüm süreci yönetme kolayli?Yi",
  "Sahaya özel mühendislik ?z?mleri",
  "Kontrollü ve planlı kurulum süreci",
  "Ba?Ytan sona bütünleşik proje yönetimi",
  "Daha düşük hata riski ve daha yüksek verimlilik",
];

const turnkeySectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const turnkeyProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Projenin kapsami belirlenir, saha ve proses ihtiya?lari teknik olarak değerlendirilir.",
  },
  {
    title: "Proses tasarımı",
    description:
      "Sistemin mühendislik altyapisi oluşturulur, ekipman ve ak? plani netleştirilir.",
  },
  {
    title: "Makina üretimi",
    description:
      "Projeye özel ekipmanlar yüksek kalite standartlarinda üretilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji ger?ekle?Ytirilir ve sistem çalışır hale getirilir.",
  },
  {
    title: "Eğitim ve sati?Y sonrasi destek",
    description:
      "Operat?r eğitimi verilir ve sistem performansi s?rekli desteklenir.",
  },
];

const turnkeyFaqs = [
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarımı, ekipman se?imi, makina imalatı, saha montaji, devreye alma ve teknik danışmanlık dahil olmak ?zere tüm süreçleri kapsar.",
  },
  {
    question: "Proje s?resi neye göre belirlenir?",
    answer:
      "Proje s?resi; tesis kapasitesi, proses tipi, ekipman sayisi ve saha koşullarına ba?Yli olarak belirlenir.",
  },
  {
    question: "Tesis tamamen çalışır halde mi teslim edilir?",
    answer:
      "Evet. Sistem devreye alinmi?Y, test edilmi?Y ve çalışır durumda teslim edilir.",
  },
  {
    question: "Kurulum sonrasi destek sa?Yliyor musunuz?",
    answer:
      "Evet. Eğitim, teknik destek ve süreç optimizasyonu hizmetleri sunulmaktadir.",
  },
  {
    question: "Projeler standart mi yoksa özel mi tasarlanir?",
    answer:
      "Tüm projeler, müşterinin ihtiyacina ve saha koşullarına özel olarak mühendislik çalışmasi ile tasarlanir.",
  },
];

const machineIntro = [
  "Sahaya ve prosese özel makine imalatı ile yüksek performansli, dayanikli ve uzun ömürlü sistemler ?retiyoruz. Kompost, g?bre, geri d?n??m, madencilik ve end?striyel proses tesisleri için tambur, konveyör, bunker, kırıcı, reaktör ve yardimci ekipmanlari proje gereksinimlerine göre tasarlayip imal ediyoruz.",
  "Her ekipman, kapasite ihtiyaci, malzeme yapisi ve saha koşulları dikkate alinarak mühendislik hesaplari ile üretilir ve tesisin genel performansina maksimum katki sağlar.",
];

const machineScopeIntro =
  "Prosese özel ölçülerde, ağır sanayi koşullarına uygun, yüksek dayan?ml? ve uzun ömürlü end?striyel ekipmanlar ?retiyoruz. Tüm imalat süreçleri mühendislik hesaplarina, saha ger?eklerine ve kalite standartlarina uygun olarak ger?ekle?Ytirilir.";

const machineOutputs = [
  "Sahaya birebir uyumlu ekipman tasarımı",
  "Uzun ömürlü ve dayanikli makina yapisi",
  "Proses ile tam uyumlu çalışma",
  "Düşük bakım maliyeti",
  "Y?ksek performans ve kesintisiz üretim",
];

const machineScope = [
  "Projeye özel makina tasarımı",
  "özel ölçü ve kapasiteye göre imalat",
  "Malzeme se?imi ve mühendislik doğrulamasi",
  "At?lye üretimi ve imalat süreç yönetimi",
  "Kaynak, i?Yleme ve montaj i?Ylemleri",
  "Kalite kontrol ve test süreçleri",
];

const machineAdvantages = [
  "Projeye özel üretim",
  "Yüksek dayanımlı malzeme kullanımı",
  "Hat ve proses ile tam uyum",
  "Kolay bakım ve servis imkânı",
  "Uzun ömürlü çalışma",
];

const machineSectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const machineRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunla?Ytirma, reaktör tamburlari)",
  "Taşıma ekipmanlari (bant konveyör, helezon, elevatör)",
  "Kırıcılar ve parçalayıcılar",
  "Reaktörler ve proses tanklari",
  "Bunker ve besleme sistemleri",
  "Eleme ve siniflandirma sistemleri",
  "Dozajlama ve karıştırma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Kurutma ve isitma sistemleri",
];

const machineRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral g?bre tesisi projeleri",
  "Geri d?n??m tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral i?Yleme tesisleri",
  "özel proses ve makina imalat projeleri",
];

const machineProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Proje ihtiya?lari, kapasite ve saha koşulları detayli olarak analiz edilir.",
  },
  {
    title: "Proses uyumlu tasarim",
    description:
      "Üretilecek makinalar proses ve hat yapisina uygun şekilde tasarlanir.",
  },
  {
    title: "Makine imalatı",
    description:
      "Tüm ekipmanlar yüksek kalite standartlarinda üretilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji yapilir ve sistem çalışır hale getirilir.",
  },
  {
    title: "Eğitim ve teknik destek",
    description:
      "Operasyon süreci desteklenir ve teknik danışmanlık sa?Ylanir.",
  },
];

const machineFaqs = [
  {
    question: "Standart di?Yi makine imalatı yapiyor musunuz?",
    answer:
      "Evet. Tüm makineler proje ihtiya?larina ve saha koşullarına göre özel olarak ?retilmektedir.",
  },
  {
    question: "Kullanılan malzemeler nelerdir?",
    answer:
      "Projeye göre karbon çelik, paslanmaz çelik ve özel ala?Yimli malzemeler kullanilmaktadir.",
  },
  {
    question: "Makine imalat s?resi neye göre değişir?",
    answer:
      "Makinenin tipi, boyutu, teknik detaylari ve proje kapsamina göre değişiklik g?sterir.",
  },
  {
    question: "Üretilen makineler sahaya hazir mi teslim edilir?",
    answer:
      "Evet. Montaj ve devreye alma süreçleri ile birlikte çalışır halde teslim edilir.",
  },
  {
    question: "Satış sonrasi destek veriyor musunuz?",
    answer:
      "Evet. Kurulum sonrasi teknik destek, bakım ve danışmanlık hizmetleri sunulmaktadir.",
  },
];

const commissioningIntro = [
  "Kurulum ve devreye alma süreci, bir tesisin ger?ek performansını belirleyen en kritik aşamalardan biridir. End?striyel tesis kurulum ve devreye alma hizmetimiz ile ekipmanlarin sahaya alinmasindan ilk üretim testlerine kadar tüm süreci planli, kontroll? ve ölçülebilir şekilde yönetiyoruz.",
  "Sahada oluşabilecek hatalari minimize ederek sistemin hizli, güvenli ve performansli şekilde çalışmasini sa?Yliyoruz.",
];

const commissioningScopeIntro =
  "Sahadaki ekipman montaji, sistem entegrasyonu, test süreçleri ve ilk çalışma aşamalarini kontroll? şekilde yönetiyoruz. Tüm süreçler teknik standartlara uygun, planli ve koordineli olarak ilerletilir.";

const commissioningOutputs = [
  "Daha hizli ve sorunsuz devreye alma",
  "Saha hatalarinin minimize edilmesi",
  "Sistemlerin çalışır ve test edilmi?Y şekilde teslimi",
  "?oretime hizli geçiş",
  "G?venli ve kontrol edilebilir ba?Ylangi? süreci",
];

const commissioningScope = [
  "Montaj planlama ve saha organizasyonu",
  "Ekipman yerle?Yimi ve mekanik kurulum",
  "Elektrik ve otomasyon entegrasyonu",
  "Test çalışmalari ve sistem kontrolleri",
  "Ilk çalıştırma (commissioning)",
  "Performans doğrulama ve optimizasyon",
];

const commissioningAdvantages = [
  "G?l? saha koordinasyonu",
  "S?rekli teknik takip ve kontrol",
  "Performans odakli devreye alma",
  "Operat?r eğitimi ve sistem adaptasyonu",
  "Daha d?Y?k risk ve daha hizli üretim ba?Ylangici",
];

const commissioningSectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const commissioningRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral g?bre tesisi projeleri",
  "Geri d?n??m tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral i?Yleme tesisleri",
  "End?striyel proses tesisleri",
];

const commissioningProcessSteps = [
  {
    title: "Saha hazırlığı",
    description:
      "Kurulum öncesi saha planlamasi yapilir ve ekipman yerle?Yimi netleştirilir.",
  },
  {
    title: "Montaj ve kurulum",
    description:
      "Tüm ekipmanlar sahada projeye uygun şekilde monte edilir.",
  },
  {
    title: "Sistem entegrasyonu",
    description:
      "Mekanik, elektrik ve otomasyon sistemleri entegre edilir.",
  },
  {
    title: "Test ve devreye alma",
    description:
      "Sistem kontroll? şekilde çalıştırılır ve tüm testler ger?ekle?Ytirilir.",
  },
  {
    title: "Eğitim ve performans takibi",
    description:
      "Operat?r eğitimi verilir ve sistem performansi izlenir.",
  },
];

const commissioningFaqs = [
  {
    question: "Devreye alma süreci ne kadar s?rer?",
    answer:
      "S?re; tesisin b?y?kl?Y?ne, ekipman sayisina ve sistem kompleksli?Yine göre değişir.",
  },
  {
    question: "Kurulum sirasinda sahada ekip bulunuyor mu?",
    answer:
      "Evet. Kurulum ve devreye alma sürecinde teknik ekip sahada aktif olarak yer alir.",
  },
  {
    question: "Sistem test edilmeden teslim edilir mi?",
    answer:
      "Hayır. Tüm sistemler test edilerek çalışır durumda teslim edilir.",
  },
  {
    question: "Devreye alma sonrasi destek veriliyor mu?",
    answer:
      "Evet. Teknik destek, performans takibi ve danışmanlık hizmetleri sunulmaktadir.",
  },
  {
    question: "Operat?r eğitimi veriliyor mu?",
    answer:
      "Evet. Sistem kullan?m? ve bakım süreçleri için detayli eğitim verilir.",
  },
];

const modernizationIntro = [
  "Mevcut tesisinizi sifirdan yatirim yapmadan daha verimli, daha dengeli ve daha yüksek kapasiteli hale getiriyoruz. Modernizasyon ve revizyon hizmetimiz ile mevcut üretim hatlarini analiz ederek darbo?Yazlari tespit ediyor, ekipman ve proses iyile?Ytirmeleri ile performansi artiriyoruz.",
  "Kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde yapilan do?ru modernizasyon çalışmalari ile kapasite arti?Yi, enerji verimliliği ve üretim kalitesinde önemli iyile?Ymeler sa?Ylanir.",
];

const modernizationScopeIntro =
  "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi a?isindan analiz ediyor, mühendislik yaklaşımı ile yeniden yapilandiriyoruz. Darbo?Yazlarin ortadan kaldirilmasi, ekipman optimizasyonu ve proses iyile?Ytirme çalışmalari ile sistem performansi y?kseltilir.";

const modernizationOutputs = [
  "Mevcut hat ?zerinden kapasite arti?Yi",
  "Enerji t?ketiminde verimlilik",
  "Daha dengeli ve stabil proses",
  "?oretim kalitesinde iyile?Yme",
  "Yeni yatirim ihtiyacinin azaltilmasi",
];

const modernizationScope = [
  "Mevcut hat analizi ve performans de?Yerlendirmesi",
  "Darbo?Yaz (bottleneck) tespiti",
  "Ekipman revizyonu ve değişimi",
  "Proses ak?i iyile?Ytirme",
  "Kapasite artirma çalışmalari",
  "Enerji ve verim optimizasyonu",
];

const modernizationAdvantages = [
  "Mevcut yatirimin korunmasi",
  "Düşük maliyetle yüksek verim arti?Yi",
  "Kısa s?rede uygulanabilir ?z?mler",
  "Daha d?Y?k duru?Y (downtime) maliyeti",
  "Mevcut sistem ile uyumlu iyile?Ytirme",
];

const modernizationSectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const modernizationRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunla?Ytirma, reaktör)",
  "Taşıma ekipmanlari (konveyör, elevatör, helezon)",
  "Kırıcılar ve parçalayıcılar",
  "Reaktörler ve proses tanklari",
  "Eleme ve siniflandirma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Bunker ve besleme sistemleri",
  "Dozajlama ve karıştırma sistemleri",
];

const modernizationRelatedProjects = [
  "Kompost tesisi modernizasyon projeleri",
  "Organomineral g?bre tesisi kapasite art?r?m?",
  "Geri d?n??m tesisi revizyon projeleri",
  "Biyogaz tesis iyile?Ytirme çalışmalari",
  "End?striyel proses hat optimizasyon projeleri",
];

const modernizationProcessSteps = [
  {
    title: "Mevcut sistem analizi",
    description:
      "Tesisin mevcut performansi, kapasitesi ve darbo?Yaz noktalari detayli olarak analiz edilir.",
  },
  {
    title: "Veri ve proses de?Yerlendirme",
    description:
      "?oretim verileri, malzeme ak?i ve enerji kullan?m? incelenir.",
  },
  {
    title: "Iyile?Ytirme plani",
    description:
      "Revizyon ve modernizasyon için teknik ?z?m ve yol haritasi oluşturulur.",
  },
  {
    title: "Uygulama ve revizyon",
    description:
      "Ekipman değişimi ve proses iyile?Ytirme çalışmalari sahada uygulanir.",
  },
  {
    title: "Performans kontrol?",
    description:
      "Sistem performansi ölçülür ve gerekli optimizasyonlar yapilir.",
  },
];

const modernizationFaqs = [
  {
    question: "Sadece belirli bir hatta revizyon yapilabilir mi?",
    answer:
      "Evet. Tüm tesis yerine yalnizca sorunlu veya kapasiteyi sinirlayan hatlar ?zerinde revizyon yapilabilir.",
  },
  {
    question: "Modernizasyon ile kapasite ne kadar artar?",
    answer:
      "Arti?Y orani tesisin mevcut durumuna ba?Ylidir ancak do?ru revizyon ile %20?“50 arasi kapasite arti?Yi sa?Ylanabilir.",
  },
  {
    question: "?oretim durmadan modernizasyon yapilabilir mi?",
    answer:
      "Bazi durumlarda kismi duru?Ylarla veya planli bakım d?nemlerinde uygulanabilir.",
  },
  {
    question: "Mevcut makineler tamamen de?Yi?Ymek zorunda mi?",
    answer:
      "Hayır. Çoğu projede mevcut ekipmanlar korunur, sadece kritik noktalar iyile?Ytirilir.",
  },
  {
    question: "Modernizasyon yatirim geri d?n?Y? ne kadar s?rer?",
    answer:
      "Genellikle kisa s?rede kendini amorti eden, yüksek verim arti?Yi sa?Ylayan yatirimlardir.",
  },
];

const consultingIntro = [
  "Do?ru yatirim ve proses kararlari, tesisin uzun vadeli ba?Yarisini do?rudan belirler. Teknik danışmanlık hizmetimiz ile yeni tesis yatirimlarinda ve mevcut hat iyile?Ytirme süreçlerinde karar vericilere net, uygulanabilir ve mühendislik temelli bir yol haritasi sunuyoruz.",
  "Kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde do?ru ekipman se?imi, do?ru kapasite planlamasi ve do?ru proses kurgusu ile yatirim risklerini minimize ediyoruz.",
];

const consultingScopeIntro =
  "Yatirim karari, proses se?imi, ekipman tercihi ve saha planlamasi için teknik bak? a?isi sunuyoruz. Projenin ba?Yindan itibaren do?ru y?nlendirme ile zaman, maliyet ve performans a?isindan optimum ?z?m olu?Yturulmasini sa?Yliyoruz.";

const consultingOutputs = [
  "Daha net ve do?ru yatirim kararlari",
  "Yanli?Y ekipman se?imi riskinin azalmasi",
  "Proje sürecinde belirsizliklerin ortadan kalkmasi",
  "Daha hizli ve kontroll? ilerleyen yatirim süreci",
  "Uzun vadede daha verimli ve s?rd?r?lebilir tesis",
];

const consultingScope = [
  "Teknik analiz ve mevcut durum de?Yerlendirmesi",
  "Yatirim fizibilite ve kapasite planlamasi",
  "Proses se?imi ve teknik y?nlendirme",
  "Ekipman se?imi ve sistem kurgusu",
  "Saha yerle?Yim ve hat planlama deste?Yi",
  "Proje süreci boyunca teknik danışmanlık",
];

const consultingAdvantages = [
  "Uzman mühendislik bak? a?isi",
  "Do?ru ve hizli karar alma imk?n?",
  "Yatirim risklerinin azaltilmasi",
  "Süreçlerin net ve planli ilerlemesi",
  "Gereksiz maliyetlerin ?nlenmesi",
];

const consultingSectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const consultingProcessSteps = [
  {
    title: "Ihtiya? ve hedef analizi",
    description:
      "Yatirim hedefleri, kapasite beklentisi ve proje kapsami belirlenir.",
  },
  {
    title: "Mevcut veri de?Yerlendirme",
    description:
      "Saha verileri, hammadde yapisi ve proses ihtiya?lari analiz edilir.",
  },
  {
    title: "Teknik ?z?m oluşturma",
    description:
      "En uygun proses, ekipman ve sistem kurgusu belirlenir.",
  },
  {
    title: "Yol haritasi ve planlama",
    description:
      "Yatirim süreci için uygulanabilir teknik plan oluşturulur.",
  },
  {
    title: "Süreç takibi ve destek",
    description:
      "Proje sürecinde teknik danışmanlık devam eder.",
  },
];

const consultingFaqs = [
  {
    question: "Dani?Ymanlik sadece yeni projeler için mi ge?erlidir?",
    answer:
      "Hayır. Mevcut tesislerin iyile?Ytirilmesi ve kapasite art?r?m? için de uygulanir.",
  },
  {
    question: "Dani?Ymanlik sürecinde sahaya geliniyor mu?",
    answer:
      "Evet. Proje ihtiyacina göre saha incelemesi yapilabilir.",
  },
  {
    question: "Dani?Ymanlik ile ne t?r hatalar önlenir?",
    answer:
      "Yanli?Y ekipman se?imi, kapasite hatalari ve proses uyumsuzluklari önlenir.",
  },
  {
    question: "Yatirim maliyetini düşürür m?",
    answer:
      "Evet. Do?ru planlama ile gereksiz ekipman ve yanli?Y yatirimlar engellenir.",
  },
  {
    question: "Dani?Ymanlik sonrasi proje devam ediyor mu?",
    answer:
      "Istenirse proje, tasarim, imalat ve kurulum süreçleri ile birlikte devam ettirilebilir.",
  },
];

const maintenanceIntro = [
  "End?striyel tesislerde bakım ve servis süreçleri, ekipman ömrün? ve üretim s?reklili?Yini do?rudan etkiler. Bakım ve servis hizmetimiz ile tesislerinizin güvenli, verimli ve kesintisiz çalışmasini sa?Yliyoruz.",
  "Periyodik bakım, ariza tespiti, yedek par?a yönetimi ve saha servis deste?Yi ile sistem performansının s?rd?r?lebilirli?Yini garanti altina aliyoruz.",
];

const maintenanceScopeIntro =
  "Ekipman ömrün? uzatmak, plansiz duru?Ylari minimize etmek ve sistem performansını korumak için profesyonel bakım ve servis ?z?mleri sunuyoruz. Tüm süreçler planli, ölçülebilir ve takip edilebilir şekilde y?r?t?l?r.";

const maintenanceOutputs = [
  "Plansiz duru?Ylarin minimize edilmesi",
  "Ekipman ömrün?n uzatilmasi",
  "Daha güvenli ve stabil işletme",
  "?oretim s?reklili?Yinin sa?Ylanmasi",
  "Daha d?Y?k bakım maliyetleri",
];

const maintenanceScope = [
  "Periyodik bakım plani oluşturma",
  "Ekipman kontrol ve performans analizi",
  "Ariza tespiti ve hizli m?dahale",
  "Yedek par?a temini ve değişimi",
  "Saha servis ve teknik destek",
  "Önleyici bakım uygulamalari",
];

const maintenanceAdvantages = [
  "Hizli m?dahale ve servis deste?Yi",
  "Önleyici bakım yaklaşımı",
  "Par?a ve ekipman takibi",
  "S?rekli sistem kontrol?",
  "İşletme s?reklili?Yinin korunmasi",
];

const maintenanceSectors = [
  "Gübre Üretim Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const maintenanceRelatedProjects = [
  "Kompost tesisi bakım ve servis projeleri",
  "Organomineral g?bre tesisi bakım hizmetleri",
  "Geri d?n??m tesisleri servis çalışmalari",
  "Biyogaz tesisleri teknik bakım projeleri",
  "End?striyel tesis bakım ve iyile?Ytirme çalışmalari",
];

const maintenanceProcessSteps = [
  {
    title: "Sistem analizi",
    description:
      "Tesisin mevcut durumu ve ekipman performansi değerlendirilir.",
  },
  {
    title: "Bakım plani oluşturma",
    description:
      "Periyodik bakım ve kontrol plani hazirlanir.",
  },
  {
    title: "Uygulama ve servis",
    description:
      "Bakım, onarim ve gerekli m?dahaleler sahada ger?ekle?Ytirilir.",
  },
  {
    title: "Par?a ve sistem takibi",
    description:
      "Kritik ekipmanlar ve yedek par?alar düzenli olarak izlenir.",
  },
  {
    title: "S?rekli destek",
    description:
      "Teknik destek ve performans takibi ile süreç s?rd?r?lebilir hale getirilir.",
  },
];

const maintenanceFaqs = [
  {
    question: "Periyodik bakım plani hazirlaniyor mu?",
    answer:
      "Evet. Tesisinize özel bakım plani oluşturulur ve düzenli olarak uygulanir.",
  },
  {
    question: "Ariza durumunda ne kadar s?rede m?dahale edilir?",
    answer:
      "Mümkün olan en kisa s?rede saha veya uzaktan teknik destek sa?Ylanir.",
  },
  {
    question: "Yedek par?a temini sa?Yliyor musunuz?",
    answer:
      "Evet. Gerekli yedek par?alar temin edilerek hizli de?Yi?Yim sa?Ylanir.",
  },
  {
    question: "Bakım hizmeti üretimi durdurur mu?",
    answer:
      "Planli bakım çalışmalari üretimi minimum etkileyecek şekilde organize edilir.",
  },
  {
    question: "Önleyici bakım ger?ekten gerekli mi?",
    answer:
      "Evet. Önleyici bakım sayesinde b?y?k arizalar ve yüksek maliyetler önlenir.",
  },
];

const defaultProcessSteps = [
  "Ihtiya? analizi",
  "Proses tasarımı",
  "Makina üretimi",
  "Kurulum ve devreye alma",
  "Eğitim ve sati?Y sonrasi destek",
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
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
          const href = sectorHrefMap[label];

          return href ? (
            <Link
              key={label}
              href={href}
              className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const isTurnkey = slug === turnkeySlug;
  const isProcessDesign = slug === processDesignSlug;
  const isMachineManufacturing = slug === machineManufacturingSlug;
  const isCommissioning = slug === commissioningSlug;
  const isModernization = slug === modernizationSlug;
  const isConsulting = slug === consultingSlug;
  const isMaintenance = slug === maintenanceSlug;
  const heroImage = isTurnkey
    ? "/images/anahtar1.jpg"
    : isProcessDesign
      ? "/images/proses1.jpg"
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
      />

      <section className="pt-16 sm:pt-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                {trText(service.title)}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Uzmanlık Kapsamı
              </h2>
              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{trText(paragraph)}</p>
                ))}
                <p>{trText(scopeIntro)}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Bu Hizmet Size Ne Sağlar?
              </h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {outputs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{trText(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                <ServiceList title="İlgili Projeler" items={relatedProjects} />
              </>
            ) : isCommissioning ? (
              <ServiceList title="İlgili Projeler" items={relatedProjects} />
            ) : isModernization ? (
              <>
                <ServiceList title="İlgili Makinalar" items={relatedMachines} />
                <ServiceList title="İlgili Projeler" items={relatedProjects} />
              </>
            ) : isConsulting ? null : isMaintenance ? <ServiceList title="İlgili Projeler" items={relatedProjects} /> : null}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
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
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {trText(
                isMachineManufacturing
                  ? "Makine imalatı ve end?striyel makine üretimi projelerinde neden proses uyumlu mühendislik yaklaşımı gerekir?"
                  : "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu ve proses tesisi kurulumu neden tek merkezden yönetilmelidir?",
              )}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {isMachineManufacturing ? (
                <>
                  <p>{trText(`
                    Makine imalatı projelerinde yalnizca ekipmanin ?retilmesi yeterli de?Yildir.
                    End?striyel makine üretimi sürecinde kapasite, malzeme karakteri, bakım
                    beklentisi, saha koşulları ve proses ak?i birlikte de?Yerlendirilmelidir.
                    Bu yakla?Yim, özel makina imalatı ve proses ekipmanlari üretimi projelerinde
                    daha kararli ve daha uzun ömürlü sistemler kurulmasini sağlar.
                  `)}</p>
                  <p>{trText(`
                    Tambur sistemleri üretimi, konveyör imalatı, reaktör imalatı ve di?Yer
                    end?striyel ekipman üretimi kalemlerinde do?ru mühendislik yaklaşımı;
                    bakım maliyetini düşürür, duru?Y riskini azaltir ve üretim verimliliğini
                    artirir. Bu nedenle her ekipman, prosesle tam uyumlu çalışacak şekilde
                    tasarlanmali ve imal edilmelidir.
                  `)}</p>
                </>
              ) : isCommissioning ? (
                <>
                  <p>{trText(`
                    Kurulum ve devreye alma süreci yalnizca ekipmanlarin sahaya
                    yerle?Ytirilmesi de?Yil, ayni zamanda tüm mekanik, elektrik ve
                    otomasyon ba?Ylantilarinin kontroll? bi?imde ?ali?Ytirilmasidir.
                    End?striyel kurulum ve tesis devreye alma aşamalarinda do?ru
                    planlama yapilmadi?Yinda saha montaji uzayabilir ve üretime
                    geçiş gecikebilir.
                  `)}</p>
                  <p>{trText(`
                    Commissioning hizmeti; ilk çalıştırma, proses devreye alma,
                    performans doğrulama ve operat?r adaptasyonunu kapsayan kritik
                    bir geçiş sürecidir. Bu nedenle her adim ölçülebilir, güvenli
                    ve koordineli ilerletilmelidir.
                  `)}</p>
                </>
              ) : isModernization ? (
                <>
                  <p>{trText(`
                    Tesis modernizasyonu çalışmalari, mevcut yatirimin daha yüksek
                    performansla çalışmasini sa?Ylayan stratejik iyile?Ytirme projeleridir.
                    Proses iyile?Ytirme, kapasite artirimi ve hat optimizasyonu adimlari;
                    kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde
                    yeni yatirim yapmadan verimlilik artirma imkani sunar.
                  `)}</p>
                  <p>{trText(`
                    End?striyel revizyon projelerinde do?ru mühendislik yaklaşımı ile
                    darbo?Yazlar azaltilir, enerji kullanimi dengelenir ve proses geli?Ytirme
                    çalışmalari ile sistem daha stabil hale getirilir. B?ylece mevcut hat
                    ?zerinden daha kontroll? kapasite arti?Yi sa?Ylanabilir.
                  `)}</p>
                </>
              ) : isConsulting ? (
                <>
                  <p>{trText(`
                    Teknik danışmanlık hizmeti, yatirim öncesinde do?ru kararlari
                    almayi sa?Ylayan en kritik aşamalardan biridir. Proses dani?Ymanli?Yi,
                    tesis dani?Ymanli?Yi ve yatirim dani?Ymanli?Yi çalışmalari; yanli?Y
                    kapasite planlamasi, hatali ekipman tercihi ve uygunsuz proses
                    kurgusu gibi yüksek maliyetli hatalarin ?n?ne ge?er.
                  `)}</p>
                  <p>{trText(`
                    End?striyel danışmanlık ve proses m?hendisli?Yi dani?Ymanli?Yi
                    yaklaşımı ile saha verileri, malzeme yapisi ve üretim hedefleri
                    birlikte değerlendirilir. B?ylece yatirim süreci daha net, daha
                    kontroll? ve daha s?rd?r?lebilir bir yapiya kavuşur.
                  `)}</p>
                </>
              ) : isMaintenance ? (
                <>
                  <p>{trText(`
                    End?striyel bakım hizmeti, yalnizca ariza sonrasi m?dahale de?Yildir.
                    Tesis bakım hizmeti ve makine bakım servisi yaklaşımı; ekipman
                    ömrün? koruyan, üretim kayiplarini azaltan ve işletme güvenli?Yini
                    artiran planli bir sistem yönetimi sunar.
                  `)}</p>
                  <p>{trText(`
                    Periyodik bakım, önleyici bakım ve saha servis hizmeti birlikte
                    y?r?t?ld?Y?nde; end?striyel servis süreçleri daha izlenebilir hale
                    gelir, kritik par?alar kontrol altinda tutulur ve üretim s?reklili?Yi
                    daha güvenli bi?imde korunur.
                  `)}</p>
                </>
              ) : (
                <>
                  <p>{trText(`
                    Anahtar teslim tesis kurulumu yaklaşımı; mühendislik, ekipman se?imi,
                    makina imalatı, saha montaji ve devreye alma süreçlerini tek bir
                    planlama disiplini içinde birle?Ytirir. Bu yapi, özellikle kompost
                    tesisi kurulumu, g?bre tesisi kurulumu, geri d?n??m tesisi kurulumu
                    ve end?striyel tesis kurulumu projelerinde koordinasyon riskini azaltir.
                  `)}</p>
                  <p>{trText(`
                    Proje boyunca tek merkezden karar alinmasi; maliyet kontrol?n?,
                    termin yönetimini ve teknik uyumu g?lendirir. B?ylece yatirimci,
                    sadece ekipman satin alan de?Yil, bütünleşik ve çalışır bir proses tesisi
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
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-sm sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              {trText(
                isMachineManufacturing
                  ? "Makine İmalatı için bizimle iletişime geçin"
                  : isCommissioning
                    ? "Kurulum ve Devreye Alma için bizimle iletişime geçin"
                    : isModernization
                      ? "Modernizasyon ve Revizyon için bizimle iletişime geçin"
                      : isConsulting
                        ? "Teknik Dani?Ymanlik için bizimle iletişime geçin"
                        : isMaintenance
                          ? "Bakım ve Servis için bizimle iletişime geçin"
                          : "Anahtar Teslim Tesis Kurulumu için bizimle iletişime geçin",
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
              {trText(
                isMachineManufacturing
                  ? "Projenize en uygun makina ?z?mlerini, do?ru malzeme se?imini ve yüksek performansli üretim sistemlerini birlikte planlayalim."
                  : isCommissioning
                    ? "Tesisinizin sorunsuz şekilde devreye alinmasi, hizli üretime geçiş ve maksimum performans için birlikte planlama yapalim."
                    : isModernization
                      ? "Mevcut tesisinizin performansını artirmak, kapasitenizi y?kseltmek ve verimliliği maksimum seviyeye ?ikarmak için birlikte planlama yapalim."
                      : isConsulting
                        ? "Yatiriminizi do?ru planlamak, riskleri azaltmak ve en verimli sistemi kurmak için birlikte teknik yol haritanizi oluşturalım."
                        : isMaintenance
                          ? "Tesisinizin kesintisiz çalışmasi, ekipman ömrün?n uzamasi ve üretim verimliliğinin korunmasi için birlikte planlama yapalim."
                          : "Projenize en uygun teknik ?z?m?, do?ru ekipman se?imini ve optimum yatirim planini birlikte belirleyelim.",
              )}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:info@promakina.com.tr"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                E-posta Gönder
              </a>
              <a
                href="tel:+905380631163"
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



