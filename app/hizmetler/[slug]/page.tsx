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
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri": "/sektorler/kompost-ve-organik-atik-tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri": "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi": "/sektorler/geri-donusum-ve-atik-yonetimi",
  "Enerji ve Biyogaz Sistemleri": "/sektorler/enerji-ve-biyogaz-sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme": "/sektorler/madencilik-ve-mineral-isleme",
  "Kimya ve Proses EndÃ¼strisi": "/sektorler/kimya-ve-proses-endustrisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri":
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
  "Anahtar teslim tesis kurulumu hizmetimiz ile tÃ¼m sÃ¼reci tek bir koordinasyon altÄ±nda yÃ¶netiyoruz. Kompost, gÃ¼bre, geri dÃ¶nÃ¼ÅŸÃ¼m ve endÃ¼striyel proses tesisleri iÃ§in planlama, mÃ¼hendislik, imalat, montaj ve devreye alma adÄ±mlarÄ±nÄ± entegre ÅŸekilde sunuyoruz.",
  "Projenizin her aÅŸamasÄ±nÄ± tek elden yÃ¶neterek zaman kaybÄ±nÄ± minimize eder, maliyetleri kontrol altÄ±nda tutar ve sahada sorunsuz bir kurulum sÃ¼reci saÄŸlarÄ±z.",
];

const turnkeyScopeIntro =
  "MÃ¼hendislikten imalata, saha kurulumundan devreye almaya kadar tÃ¼m tesis sÃ¼recini tek elden yÃ¶netiyoruz. Her proje, saha koÅŸullarÄ±, kapasite ihtiyacÄ± ve proses gereksinimlerine gÃ¶re Ã¶zel olarak planlanÄ±r.";

const turnkeyOutputs = [
  "Tek merkezden yÃ¶netilen profesyonel proje sÃ¼reci",
  "Zaman kaybÄ±nÄ±n ve koordinasyon hatalarÄ±nÄ±n minimize edilmesi",
  "Net, Ã¶ngÃ¶rÃ¼lebilir ve kontrol edilebilir maliyet yapÄ±sÄ±",
  "TÃ¼m sÃ¼reÃ§lerde teknik uyum ve standartlaÅŸma",
  "Sahada hÄ±zlÄ± ve sorunsuz devreye alma",
];

const turnkeyScope = [
  "Tesis yerleÅŸim planÄ± ve saha optimizasyonu",
  "Ekipman seÃ§imi ve proses uyumlandÄ±rmasÄ±",
  "Makina imalatÄ± ve kalite kontrol sÃ¼reÃ§leri",
  "Saha montajÄ± ve mekanik kurulum",
  "Devreye alma ve performans testleri",
  "Teknik danÄ±ÅŸmanlÄ±k ve sÃ¼reÃ§ optimizasyonu",
];

const turnkeyAdvantages = [
  "Tek muhatap ile tÃ¼m sÃ¼reci yÃ¶netme kolaylÄ±ÄŸÄ±",
  "Sahaya Ã¶zel mÃ¼hendislik Ã§Ã¶zÃ¼mleri",
  "KontrollÃ¼ ve planlÄ± kurulum sÃ¼reci",
  "BaÅŸtan sona bÃ¼tÃ¼nleÅŸik proje yÃ¶netimi",
  "Daha dÃ¼ÅŸÃ¼k hata riski ve daha yÃ¼ksek verimlilik",
];

const turnkeySectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const turnkeyProcessSteps = [
  {
    title: "Ä°htiyaÃ§ analizi",
    description:
      "Projenin kapsamÄ± belirlenir, saha ve proses ihtiyaÃ§larÄ± teknik olarak deÄŸerlendirilir.",
  },
  {
    title: "Proses tasarÄ±mÄ±",
    description:
      "Sistemin mÃ¼hendislik altyapÄ±sÄ± oluÅŸturulur, ekipman ve akÄ±ÅŸ planÄ± netleÅŸtirilir.",
  },
  {
    title: "Makina Ã¼retimi",
    description:
      "Projeye Ã¶zel ekipmanlar yÃ¼ksek kalite standartlarÄ±nda Ã¼retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montajÄ± gerÃ§ekleÅŸtirilir ve sistem Ã§alÄ±ÅŸÄ±r hale getirilir.",
  },
  {
    title: "EÄŸitim ve satÄ±ÅŸ sonrasÄ± destek",
    description:
      "OperatÃ¶r eÄŸitimi verilir ve sistem performansÄ± sÃ¼rekli desteklenir.",
  },
];

const turnkeyFaqs = [
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarÄ±mÄ±, ekipman seÃ§imi, makina imalatÄ±, saha montajÄ±, devreye alma ve teknik danÄ±ÅŸmanlÄ±k dahil olmak Ã¼zere tÃ¼m sÃ¼reÃ§leri kapsar.",
  },
  {
    question: "Proje sÃ¼resi neye gÃ¶re belirlenir?",
    answer:
      "Proje sÃ¼resi; tesis kapasitesi, proses tipi, ekipman sayÄ±sÄ± ve saha koÅŸullarÄ±na baÄŸlÄ± olarak belirlenir.",
  },
  {
    question: "Tesis tamamen Ã§alÄ±ÅŸÄ±r halde mi teslim edilir?",
    answer:
      "Evet. Sistem devreye alÄ±nmÄ±ÅŸ, test edilmiÅŸ ve Ã§alÄ±ÅŸÄ±r durumda teslim edilir.",
  },
  {
    question: "Kurulum sonrasÄ± destek saÄŸlÄ±yor musunuz?",
    answer:
      "Evet. EÄŸitim, teknik destek ve sÃ¼reÃ§ optimizasyonu hizmetleri sunulmaktadÄ±r.",
  },
  {
    question: "Projeler standart mÄ± yoksa Ã¶zel mi tasarlanÄ±r?",
    answer:
      "TÃ¼m projeler, mÃ¼ÅŸterinin ihtiyacÄ±na ve saha koÅŸullarÄ±na Ã¶zel olarak mÃ¼hendislik Ã§alÄ±ÅŸmasÄ± ile tasarlanÄ±r.",
  },
];

const machineIntro = [
  "Sahaya ve prosese Ã¶zel makine imalatÄ± ile yÃ¼ksek performanslÄ±, dayanÄ±klÄ± ve uzun Ã¶mÃ¼rlÃ¼ sistemler Ã¼retiyoruz. Kompost, gÃ¼bre, geri dÃ¶nÃ¼ÅŸÃ¼m, madencilik ve endÃ¼striyel proses tesisleri iÃ§in tambur, konveyÃ¶r, bunker, kÄ±rÄ±cÄ±, reaktÃ¶r ve yardÄ±mcÄ± ekipmanlarÄ± proje gereksinimlerine gÃ¶re tasarlayÄ±p imal ediyoruz.",
  "Her ekipman, kapasite ihtiyacÄ±, malzeme yapÄ±sÄ± ve saha koÅŸullarÄ± dikkate alÄ±narak mÃ¼hendislik hesaplarÄ± ile Ã¼retilir ve tesisin genel performansÄ±na maksimum katkÄ± saÄŸlar.",
];

const machineScopeIntro =
  "Prosese Ã¶zel Ã¶lÃ§Ã¼lerde, aÄŸÄ±r sanayi koÅŸullarÄ±na uygun, yÃ¼ksek dayanÄ±mlÄ± ve uzun Ã¶mÃ¼rlÃ¼ endÃ¼striyel ekipmanlar Ã¼retiyoruz. TÃ¼m imalat sÃ¼reÃ§leri mÃ¼hendislik hesaplarÄ±na, saha gerÃ§eklerine ve kalite standartlarÄ±na uygun olarak gerÃ§ekleÅŸtirilir.";

const machineOutputs = [
  "Sahaya birebir uyumlu ekipman tasarÄ±mÄ±",
  "Uzun Ã¶mÃ¼rlÃ¼ ve dayanÄ±klÄ± makina yapÄ±sÄ±",
  "Proses ile tam uyumlu Ã§alÄ±ÅŸma",
  "DÃ¼ÅŸÃ¼k bakÄ±m maliyeti",
  "YÃ¼ksek performans ve kesintisiz Ã¼retim",
];

const machineScope = [
  "Projeye Ã¶zel makina tasarÄ±mÄ±",
  "Ã–zel Ã¶lÃ§Ã¼ ve kapasiteye gÃ¶re imalat",
  "Malzeme seÃ§imi ve mÃ¼hendislik doÄŸrulamasÄ±",
  "AtÃ¶lye Ã¼retimi ve imalat sÃ¼reÃ§ yÃ¶netimi",
  "Kaynak, iÅŸleme ve montaj iÅŸlemleri",
  "Kalite kontrol ve test sÃ¼reÃ§leri",
];

const machineAdvantages = [
  "Projeye Ã¶zel Ã¼retim",
  "YÃ¼ksek dayanÄ±mlÄ± malzeme kullanÄ±mÄ±",
  "Hat ve proses ile tam uyum",
  "Kolay bakÄ±m ve servis imkanÄ±",
  "Uzun Ã¶mÃ¼rlÃ¼ Ã§alÄ±ÅŸma",
];

const machineSectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const machineRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaÅŸtÄ±rma, reaktÃ¶r tamburlarÄ±)",
  "TaÅŸÄ±ma ekipmanlarÄ± (bant konveyÃ¶r, helezon, elevatÃ¶r)",
  "KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar",
  "ReaktÃ¶rler ve proses tanklarÄ±",
  "Bunker ve besleme sistemleri",
  "Eleme ve sÄ±nÄ±flandÄ±rma sistemleri",
  "Dozajlama ve karÄ±ÅŸtÄ±rma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Kurutma ve Ä±sÄ±tma sistemleri",
];

const machineRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gÃ¼bre tesisi projeleri",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral iÅŸleme tesisleri",
  "Ã–zel proses ve makina imalat projeleri",
];

const machineProcessSteps = [
  {
    title: "Ä°htiyaÃ§ analizi",
    description:
      "Proje ihtiyaÃ§larÄ±, kapasite ve saha koÅŸullarÄ± detaylÄ± olarak analiz edilir.",
  },
  {
    title: "Proses uyumlu tasarÄ±m",
    description:
      "Ãœretilecek makinalar proses ve hat yapÄ±sÄ±na uygun ÅŸekilde tasarlanÄ±r.",
  },
  {
    title: "Makine imalatÄ±",
    description:
      "TÃ¼m ekipmanlar yÃ¼ksek kalite standartlarÄ±nda Ã¼retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montajÄ± yapÄ±lÄ±r ve sistem Ã§alÄ±ÅŸÄ±r hale getirilir.",
  },
  {
    title: "EÄŸitim ve teknik destek",
    description:
      "Operasyon sÃ¼reci desteklenir ve teknik danÄ±ÅŸmanlÄ±k saÄŸlanÄ±r.",
  },
];

const machineFaqs = [
  {
    question: "Standart dÄ±ÅŸÄ± makine imalatÄ± yapÄ±yor musunuz?",
    answer:
      "Evet. TÃ¼m makineler proje ihtiyaÃ§larÄ±na ve saha koÅŸullarÄ±na gÃ¶re Ã¶zel olarak Ã¼retilmektedir.",
  },
  {
    question: "KullanÄ±lan malzemeler nelerdir?",
    answer:
      "Projeye gÃ¶re karbon Ã§elik, paslanmaz Ã§elik ve Ã¶zel alaÅŸÄ±mlÄ± malzemeler kullanÄ±lmaktadÄ±r.",
  },
  {
    question: "Makine imalat sÃ¼resi neye gÃ¶re deÄŸiÅŸir?",
    answer:
      "Makinenin tipi, boyutu, teknik detaylarÄ± ve proje kapsamÄ±na gÃ¶re deÄŸiÅŸiklik gÃ¶sterir.",
  },
  {
    question: "Ãœretilen makineler sahaya hazÄ±r mÄ± teslim edilir?",
    answer:
      "Evet. Montaj ve devreye alma sÃ¼reÃ§leri ile birlikte Ã§alÄ±ÅŸÄ±r halde teslim edilir.",
  },
  {
    question: "SatÄ±ÅŸ sonrasÄ± destek veriyor musunuz?",
    answer:
      "Evet. Kurulum sonrasÄ± teknik destek, bakÄ±m ve danÄ±ÅŸmanlÄ±k hizmetleri sunulmaktadÄ±r.",
  },
];

const commissioningIntro = [
  "Kurulum ve devreye alma sÃ¼reci, bir tesisin gerÃ§ek performansÄ±nÄ± belirleyen en kritik aÅŸamalardan biridir. EndÃ¼striyel tesis kurulum ve devreye alma hizmetimiz ile ekipmanlarÄ±n sahaya alÄ±nmasÄ±ndan ilk Ã¼retim testlerine kadar tÃ¼m sÃ¼reci planlÄ±, kontrollÃ¼ ve Ã¶lÃ§Ã¼lebilir ÅŸekilde yÃ¶netiyoruz.",
  "Sahada oluÅŸabilecek hatalarÄ± minimize ederek sistemin hÄ±zlÄ±, gÃ¼venli ve performanslÄ± ÅŸekilde Ã§alÄ±ÅŸmasÄ±nÄ± saÄŸlÄ±yoruz.",
];

const commissioningScopeIntro =
  "Sahadaki ekipman montajÄ±, sistem entegrasyonu, test sÃ¼reÃ§leri ve ilk Ã§alÄ±ÅŸma aÅŸamalarÄ±nÄ± kontrollÃ¼ ÅŸekilde yÃ¶netiyoruz. TÃ¼m sÃ¼reÃ§ler teknik standartlara uygun, planlÄ± ve koordineli olarak ilerletilir.";

const commissioningOutputs = [
  "Daha hÄ±zlÄ± ve sorunsuz devreye alma",
  "Saha hatalarÄ±nÄ±n minimize edilmesi",
  "Sistemlerin Ã§alÄ±ÅŸÄ±r ve test edilmiÅŸ ÅŸekilde teslimi",
  "Ãœretime hÄ±zlÄ± geÃ§iÅŸ",
  "GÃ¼venli ve kontrol edilebilir baÅŸlangÄ±Ã§ sÃ¼reci",
];

const commissioningScope = [
  "Montaj planlama ve saha organizasyonu",
  "Ekipman yerleÅŸimi ve mekanik kurulum",
  "Elektrik ve otomasyon entegrasyonu",
  "Test Ã§alÄ±ÅŸmalarÄ± ve sistem kontrolleri",
  "Ä°lk Ã§alÄ±ÅŸtÄ±rma (commissioning)",
  "Performans doÄŸrulama ve optimizasyon",
];

const commissioningAdvantages = [
  "GÃ¼Ã§lÃ¼ saha koordinasyonu",
  "SÃ¼rekli teknik takip ve kontrol",
  "Performans odaklÄ± devreye alma",
  "OperatÃ¶r eÄŸitimi ve sistem adaptasyonu",
  "Daha dÃ¼ÅŸÃ¼k risk ve daha hÄ±zlÄ± Ã¼retim baÅŸlangÄ±cÄ±",
];

const commissioningSectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const commissioningRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gÃ¼bre tesisi projeleri",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral iÅŸleme tesisleri",
  "EndÃ¼striyel proses tesisleri",
];

const commissioningProcessSteps = [
  {
    title: "Saha hazÄ±rlÄ±ÄŸÄ±",
    description:
      "Kurulum Ã¶ncesi saha planlamasÄ± yapÄ±lÄ±r ve ekipman yerleÅŸimi netleÅŸtirilir.",
  },
  {
    title: "Montaj ve kurulum",
    description:
      "TÃ¼m ekipmanlar sahada projeye uygun ÅŸekilde monte edilir.",
  },
  {
    title: "Sistem entegrasyonu",
    description:
      "Mekanik, elektrik ve otomasyon sistemleri entegre edilir.",
  },
  {
    title: "Test ve devreye alma",
    description:
      "Sistem kontrollÃ¼ ÅŸekilde Ã§alÄ±ÅŸtÄ±rÄ±lÄ±r ve tÃ¼m testler gerÃ§ekleÅŸtirilir.",
  },
  {
    title: "EÄŸitim ve performans takibi",
    description:
      "OperatÃ¶r eÄŸitimi verilir ve sistem performansÄ± izlenir.",
  },
];

const commissioningFaqs = [
  {
    question: "Devreye alma sÃ¼reci ne kadar sÃ¼rer?",
    answer:
      "SÃ¼re; tesisin bÃ¼yÃ¼klÃ¼ÄŸÃ¼ne, ekipman sayÄ±sÄ±na ve sistem kompleksliÄŸine gÃ¶re deÄŸiÅŸir.",
  },
  {
    question: "Kurulum sÄ±rasÄ±nda sahada ekip bulunuyor mu?",
    answer:
      "Evet. Kurulum ve devreye alma sÃ¼recinde teknik ekip sahada aktif olarak yer alÄ±r.",
  },
  {
    question: "Sistem test edilmeden teslim edilir mi?",
    answer:
      "HayÄ±r. TÃ¼m sistemler test edilerek Ã§alÄ±ÅŸÄ±r durumda teslim edilir.",
  },
  {
    question: "Devreye alma sonrasÄ± destek veriliyor mu?",
    answer:
      "Evet. Teknik destek, performans takibi ve danÄ±ÅŸmanlÄ±k hizmetleri sunulmaktadÄ±r.",
  },
  {
    question: "OperatÃ¶r eÄŸitimi veriliyor mu?",
    answer:
      "Evet. Sistem kullanÄ±mÄ± ve bakÄ±m sÃ¼reÃ§leri iÃ§in detaylÄ± eÄŸitim verilir.",
  },
];

const modernizationIntro = [
  "Mevcut tesisinizi sÄ±fÄ±rdan yatÄ±rÄ±m yapmadan daha verimli, daha dengeli ve daha yÃ¼ksek kapasiteli hale getiriyoruz. Modernizasyon ve revizyon hizmetimiz ile mevcut Ã¼retim hatlarÄ±nÄ± analiz ederek darboÄŸazlarÄ± tespit ediyor, ekipman ve proses iyileÅŸtirmeleri ile performansÄ± artÄ±rÄ±yoruz.",
  "Kompost, gÃ¼bre, geri dÃ¶nÃ¼ÅŸÃ¼m ve endÃ¼striyel proses tesislerinde yapÄ±lan doÄŸru modernizasyon Ã§alÄ±ÅŸmalarÄ± ile kapasite artÄ±ÅŸÄ±, enerji verimliliÄŸi ve Ã¼retim kalitesinde Ã¶nemli iyileÅŸmeler saÄŸlanÄ±r.",
];

const modernizationScopeIntro =
  "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi aÃ§Ä±sÄ±ndan analiz ediyor, mÃ¼hendislik yaklaÅŸÄ±mÄ± ile yeniden yapÄ±landÄ±rÄ±yoruz. DarboÄŸazlarÄ±n ortadan kaldÄ±rÄ±lmasÄ±, ekipman optimizasyonu ve proses iyileÅŸtirme Ã§alÄ±ÅŸmalarÄ± ile sistem performansÄ± yÃ¼kseltilir.";

const modernizationOutputs = [
  "Mevcut hat Ã¼zerinden kapasite artÄ±ÅŸÄ±",
  "Enerji tÃ¼ketiminde verimlilik",
  "Daha dengeli ve stabil proses",
  "Ãœretim kalitesinde iyileÅŸme",
  "Yeni yatÄ±rÄ±m ihtiyacÄ±nÄ±n azaltÄ±lmasÄ±",
];

const modernizationScope = [
  "Mevcut hat analizi ve performans deÄŸerlendirmesi",
  "DarboÄŸaz (bottleneck) tespiti",
  "Ekipman revizyonu ve deÄŸiÅŸimi",
  "Proses akÄ±ÅŸÄ± iyileÅŸtirme",
  "Kapasite artÄ±rma Ã§alÄ±ÅŸmalarÄ±",
  "Enerji ve verim optimizasyonu",
];

const modernizationAdvantages = [
  "Mevcut yatÄ±rÄ±mÄ±n korunmasÄ±",
  "DÃ¼ÅŸÃ¼k maliyetle yÃ¼ksek verim artÄ±ÅŸÄ±",
  "KÄ±sa sÃ¼rede uygulanabilir Ã§Ã¶zÃ¼mler",
  "Daha dÃ¼ÅŸÃ¼k duruÅŸ (downtime) maliyeti",
  "Mevcut sistem ile uyumlu iyileÅŸtirme",
];

const modernizationSectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const modernizationRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaÅŸtÄ±rma, reaktÃ¶r)",
  "TaÅŸÄ±ma ekipmanlarÄ± (konveyÃ¶r, elevatÃ¶r, helezon)",
  "KÄ±rÄ±cÄ±lar ve parÃ§alayÄ±cÄ±lar",
  "ReaktÃ¶rler ve proses tanklarÄ±",
  "Eleme ve sÄ±nÄ±flandÄ±rma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Bunker ve besleme sistemleri",
  "Dozajlama ve karÄ±ÅŸtÄ±rma sistemleri",
];

const modernizationRelatedProjects = [
  "Kompost tesisi modernizasyon projeleri",
  "Organomineral gÃ¼bre tesisi kapasite artÄ±rÄ±mÄ±",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m tesisi revizyon projeleri",
  "Biyogaz tesis iyileÅŸtirme Ã§alÄ±ÅŸmalarÄ±",
  "EndÃ¼striyel proses hat optimizasyon projeleri",
];

const modernizationProcessSteps = [
  {
    title: "Mevcut sistem analizi",
    description:
      "Tesisin mevcut performansÄ±, kapasitesi ve darboÄŸaz noktalarÄ± detaylÄ± olarak analiz edilir.",
  },
  {
    title: "Veri ve proses deÄŸerlendirme",
    description:
      "Ãœretim verileri, malzeme akÄ±ÅŸÄ± ve enerji kullanÄ±mÄ± incelenir.",
  },
  {
    title: "Ä°yileÅŸtirme planÄ±",
    description:
      "Revizyon ve modernizasyon iÃ§in teknik Ã§Ã¶zÃ¼m ve yol haritasÄ± oluÅŸturulur.",
  },
  {
    title: "Uygulama ve revizyon",
    description:
      "Ekipman deÄŸiÅŸimi ve proses iyileÅŸtirme Ã§alÄ±ÅŸmalarÄ± sahada uygulanÄ±r.",
  },
  {
    title: "Performans kontrolÃ¼",
    description:
      "Sistem performansÄ± Ã¶lÃ§Ã¼lÃ¼r ve gerekli optimizasyonlar yapÄ±lÄ±r.",
  },
];

const modernizationFaqs = [
  {
    question: "Sadece belirli bir hatta revizyon yapÄ±labilir mi?",
    answer:
      "Evet. TÃ¼m tesis yerine yalnÄ±zca sorunlu veya kapasiteyi sÄ±nÄ±rlayan hatlar Ã¼zerinde revizyon yapÄ±labilir.",
  },
  {
    question: "Modernizasyon ile kapasite ne kadar artar?",
    answer:
      "ArtÄ±ÅŸ oranÄ± tesisin mevcut durumuna baÄŸlÄ±dÄ±r ancak doÄŸru revizyon ile %20â€“50 arasÄ± kapasite artÄ±ÅŸÄ± saÄŸlanabilir.",
  },
  {
    question: "Ãœretim durmadan modernizasyon yapÄ±labilir mi?",
    answer:
      "BazÄ± durumlarda kÄ±smi duruÅŸlarla veya planlÄ± bakÄ±m dÃ¶nemlerinde uygulanabilir.",
  },
  {
    question: "Mevcut makineler tamamen deÄŸiÅŸmek zorunda mÄ±?",
    answer:
      "HayÄ±r. Ã‡oÄŸu projede mevcut ekipmanlar korunur, sadece kritik noktalar iyileÅŸtirilir.",
  },
  {
    question: "Modernizasyon yatÄ±rÄ±m geri dÃ¶nÃ¼ÅŸÃ¼ ne kadar sÃ¼rer?",
    answer:
      "Genellikle kÄ±sa sÃ¼rede kendini amorti eden, yÃ¼ksek verim artÄ±ÅŸÄ± saÄŸlayan yatÄ±rÄ±mlardÄ±r.",
  },
];

const consultingIntro = [
  "DoÄŸru yatÄ±rÄ±m ve proses kararlarÄ±, tesisin uzun vadeli baÅŸarÄ±sÄ±nÄ± doÄŸrudan belirler. Teknik danÄ±ÅŸmanlÄ±k hizmetimiz ile yeni tesis yatÄ±rÄ±mlarÄ±nda ve mevcut hat iyileÅŸtirme sÃ¼reÃ§lerinde karar vericilere net, uygulanabilir ve mÃ¼hendislik temelli bir yol haritasÄ± sunuyoruz.",
  "Kompost, gÃ¼bre, geri dÃ¶nÃ¼ÅŸÃ¼m ve endÃ¼striyel proses tesislerinde doÄŸru ekipman seÃ§imi, doÄŸru kapasite planlamasÄ± ve doÄŸru proses kurgusu ile yatÄ±rÄ±m risklerini minimize ediyoruz.",
];

const consultingScopeIntro =
  "YatÄ±rÄ±m kararÄ±, proses seÃ§imi, ekipman tercihi ve saha planlamasÄ± iÃ§in teknik bakÄ±ÅŸ aÃ§Ä±sÄ± sunuyoruz. Projenin baÅŸÄ±ndan itibaren doÄŸru yÃ¶nlendirme ile zaman, maliyet ve performans aÃ§Ä±sÄ±ndan optimum Ã§Ã¶zÃ¼m oluÅŸturulmasÄ±nÄ± saÄŸlÄ±yoruz.";

const consultingOutputs = [
  "Daha net ve doÄŸru yatÄ±rÄ±m kararlarÄ±",
  "YanlÄ±ÅŸ ekipman seÃ§imi riskinin azalmasÄ±",
  "Proje sÃ¼recinde belirsizliklerin ortadan kalkmasÄ±",
  "Daha hÄ±zlÄ± ve kontrollÃ¼ ilerleyen yatÄ±rÄ±m sÃ¼reci",
  "Uzun vadede daha verimli ve sÃ¼rdÃ¼rÃ¼lebilir tesis",
];

const consultingScope = [
  "Teknik analiz ve mevcut durum deÄŸerlendirmesi",
  "YatÄ±rÄ±m fizibilite ve kapasite planlamasÄ±",
  "Proses seÃ§imi ve teknik yÃ¶nlendirme",
  "Ekipman seÃ§imi ve sistem kurgusu",
  "Saha yerleÅŸim ve hat planlama desteÄŸi",
  "Proje sÃ¼reci boyunca teknik danÄ±ÅŸmanlÄ±k",
];

const consultingAdvantages = [
  "Uzman mÃ¼hendislik bakÄ±ÅŸ aÃ§Ä±sÄ±",
  "DoÄŸru ve hÄ±zlÄ± karar alma imkanÄ±",
  "YatÄ±rÄ±m risklerinin azaltÄ±lmasÄ±",
  "SÃ¼reÃ§lerin net ve planlÄ± ilerlemesi",
  "Gereksiz maliyetlerin Ã¶nlenmesi",
];

const consultingSectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const consultingProcessSteps = [
  {
    title: "Ä°htiyaÃ§ ve hedef analizi",
    description:
      "YatÄ±rÄ±m hedefleri, kapasite beklentisi ve proje kapsamÄ± belirlenir.",
  },
  {
    title: "Mevcut veri deÄŸerlendirme",
    description:
      "Saha verileri, hammadde yapÄ±sÄ± ve proses ihtiyaÃ§larÄ± analiz edilir.",
  },
  {
    title: "Teknik Ã§Ã¶zÃ¼m oluÅŸturma",
    description:
      "En uygun proses, ekipman ve sistem kurgusu belirlenir.",
  },
  {
    title: "Yol haritasÄ± ve planlama",
    description:
      "YatÄ±rÄ±m sÃ¼reci iÃ§in uygulanabilir teknik plan oluÅŸturulur.",
  },
  {
    title: "SÃ¼reÃ§ takibi ve destek",
    description:
      "Proje sÃ¼recinde teknik danÄ±ÅŸmanlÄ±k devam eder.",
  },
];

const consultingFaqs = [
  {
    question: "DanÄ±ÅŸmanlÄ±k sadece yeni projeler iÃ§in mi geÃ§erlidir?",
    answer:
      "HayÄ±r. Mevcut tesislerin iyileÅŸtirilmesi ve kapasite artÄ±rÄ±mÄ± iÃ§in de uygulanÄ±r.",
  },
  {
    question: "DanÄ±ÅŸmanlÄ±k sÃ¼recinde sahaya geliniyor mu?",
    answer:
      "Evet. Proje ihtiyacÄ±na gÃ¶re saha incelemesi yapÄ±labilir.",
  },
  {
    question: "DanÄ±ÅŸmanlÄ±k ile ne tÃ¼r hatalar Ã¶nlenir?",
    answer:
      "YanlÄ±ÅŸ ekipman seÃ§imi, kapasite hatalarÄ± ve proses uyumsuzluklarÄ± Ã¶nlenir.",
  },
  {
    question: "YatÄ±rÄ±m maliyetini dÃ¼ÅŸÃ¼rÃ¼r mÃ¼?",
    answer:
      "Evet. DoÄŸru planlama ile gereksiz ekipman ve yanlÄ±ÅŸ yatÄ±rÄ±mlar engellenir.",
  },
  {
    question: "DanÄ±ÅŸmanlÄ±k sonrasÄ± proje devam ediyor mu?",
    answer:
      "Ä°stenirse proje, tasarÄ±m, imalat ve kurulum sÃ¼reÃ§leri ile birlikte devam ettirilebilir.",
  },
];

const maintenanceIntro = [
  "EndÃ¼striyel tesislerde bakÄ±m ve servis sÃ¼reÃ§leri, ekipman Ã¶mrÃ¼nÃ¼ ve Ã¼retim sÃ¼rekliliÄŸini doÄŸrudan etkiler. BakÄ±m ve servis hizmetimiz ile tesislerinizin gÃ¼venli, verimli ve kesintisiz Ã§alÄ±ÅŸmasÄ±nÄ± saÄŸlÄ±yoruz.",
  "Periyodik bakÄ±m, arÄ±za tespiti, yedek parÃ§a yÃ¶netimi ve saha servis desteÄŸi ile sistem performansÄ±nÄ±n sÃ¼rdÃ¼rÃ¼lebilirliÄŸini garanti altÄ±na alÄ±yoruz.",
];

const maintenanceScopeIntro =
  "Ekipman Ã¶mrÃ¼nÃ¼ uzatmak, plansÄ±z duruÅŸlarÄ± minimize etmek ve sistem performansÄ±nÄ± korumak iÃ§in profesyonel bakÄ±m ve servis Ã§Ã¶zÃ¼mleri sunuyoruz. TÃ¼m sÃ¼reÃ§ler planlÄ±, Ã¶lÃ§Ã¼lebilir ve takip edilebilir ÅŸekilde yÃ¼rÃ¼tÃ¼lÃ¼r.";

const maintenanceOutputs = [
  "PlansÄ±z duruÅŸlarÄ±n minimize edilmesi",
  "Ekipman Ã¶mrÃ¼nÃ¼n uzatÄ±lmasÄ±",
  "Daha gÃ¼venli ve stabil iÅŸletme",
  "Ãœretim sÃ¼rekliliÄŸinin saÄŸlanmasÄ±",
  "Daha dÃ¼ÅŸÃ¼k bakÄ±m maliyetleri",
];

const maintenanceScope = [
  "Periyodik bakÄ±m planÄ± oluÅŸturma",
  "Ekipman kontrol ve performans analizi",
  "ArÄ±za tespiti ve hÄ±zlÄ± mÃ¼dahale",
  "Yedek parÃ§a temini ve deÄŸiÅŸimi",
  "Saha servis ve teknik destek",
  "Ã–nleyici bakÄ±m uygulamalarÄ±",
];

const maintenanceAdvantages = [
  "HÄ±zlÄ± mÃ¼dahale ve servis desteÄŸi",
  "Ã–nleyici bakÄ±m yaklaÅŸÄ±mÄ±",
  "ParÃ§a ve ekipman takibi",
  "SÃ¼rekli sistem kontrolÃ¼",
  "Ä°ÅŸletme sÃ¼rekliliÄŸinin korunmasÄ±",
];

const maintenanceSectors = [
  "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
  "Kompost ve Organik AtÄ±k Tesisleri",
  "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri",
  "Geri DÃ¶nÃ¼ÅŸÃ¼m ve AtÄ±k YÃ¶netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral Ä°ÅŸleme",
  "Kimya ve Proses EndÃ¼strisi",
  "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ÅŸleme Sistemleri",
];

const maintenanceRelatedProjects = [
  "Kompost tesisi bakÄ±m ve servis projeleri",
  "Organomineral gÃ¼bre tesisi bakÄ±m hizmetleri",
  "Geri dÃ¶nÃ¼ÅŸÃ¼m tesisleri servis Ã§alÄ±ÅŸmalarÄ±",
  "Biyogaz tesisleri teknik bakÄ±m projeleri",
  "EndÃ¼striyel tesis bakÄ±m ve iyileÅŸtirme Ã§alÄ±ÅŸmalarÄ±",
];

const maintenanceProcessSteps = [
  {
    title: "Sistem analizi",
    description:
      "Tesisin mevcut durumu ve ekipman performansÄ± deÄŸerlendirilir.",
  },
  {
    title: "BakÄ±m planÄ± oluÅŸturma",
    description:
      "Periyodik bakÄ±m ve kontrol planÄ± hazÄ±rlanÄ±r.",
  },
  {
    title: "Uygulama ve servis",
    description:
      "BakÄ±m, onarÄ±m ve gerekli mÃ¼dahaleler sahada gerÃ§ekleÅŸtirilir.",
  },
  {
    title: "ParÃ§a ve sistem takibi",
    description:
      "Kritik ekipmanlar ve yedek parÃ§alar dÃ¼zenli olarak izlenir.",
  },
  {
    title: "SÃ¼rekli destek",
    description:
      "Teknik destek ve performans takibi ile sÃ¼reÃ§ sÃ¼rdÃ¼rÃ¼lebilir hale getirilir.",
  },
];

const maintenanceFaqs = [
  {
    question: "Periyodik bakÄ±m planÄ± hazÄ±rlanÄ±yor mu?",
    answer:
      "Evet. Tesisinize Ã¶zel bakÄ±m planÄ± oluÅŸturulur ve dÃ¼zenli olarak uygulanÄ±r.",
  },
  {
    question: "ArÄ±za durumunda ne kadar sÃ¼rede mÃ¼dahale edilir?",
    answer:
      "MÃ¼mkÃ¼n olan en kÄ±sa sÃ¼rede saha veya uzaktan teknik destek saÄŸlanÄ±r.",
  },
  {
    question: "Yedek parÃ§a temini saÄŸlÄ±yor musunuz?",
    answer:
      "Evet. Gerekli yedek parÃ§alar temin edilerek hÄ±zlÄ± deÄŸiÅŸim saÄŸlanÄ±r.",
  },
  {
    question: "BakÄ±m hizmeti Ã¼retimi durdurur mu?",
    answer:
      "PlanlÄ± bakÄ±m Ã§alÄ±ÅŸmalarÄ± Ã¼retimi minimum etkileyecek ÅŸekilde organize edilir.",
  },
  {
    question: "Ã–nleyici bakÄ±m gerÃ§ekten gerekli mi?",
    answer:
      "Evet. Ã–nleyici bakÄ±m sayesinde bÃ¼yÃ¼k arÄ±zalar ve yÃ¼ksek maliyetler Ã¶nlenir.",
  },
];

const defaultProcessSteps = [
  "Ä°htiyaÃ§ analizi",
  "Proses tasarÄ±mÄ±",
  "Makina Ã¼retimi",
  "Kurulum ve devreye alma",
  "EÄŸitim ve satÄ±ÅŸ sonrasÄ± destek",
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
      <h3 className="text-xl font-semibold text-slate-950">Ä°lgili SektÃ¶rler</h3>
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
                UzmanlÄ±k KapsamÄ±
              </h2>
              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>{scopeIntro}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Bu Hizmet Size Ne SaÄŸlar?
              </h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {outputs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
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
            <ServiceList title="Hizmet KapsamÄ±" items={scope} />
            <ServiceList title="Avantajlar" items={advantages} />
            <RelatedSectorLinks items={sectors} />
            {isMachineManufacturing ? (
              <>
                <ServiceList title="Ä°lgili Makinalar" items={relatedMachines} />
                <ServiceList title="Ä°lgili Projeler" items={relatedProjects} />
              </>
            ) : isCommissioning ? (
              <ServiceList title="Ä°lgili Projeler" items={relatedProjects} />
            ) : isModernization ? (
              <>
                <ServiceList title="Ä°lgili Makinalar" items={relatedMachines} />
                <ServiceList title="Ä°lgili Projeler" items={relatedProjects} />
              </>
            ) : isConsulting ? null : isMaintenance ? <ServiceList title="Ä°lgili Projeler" items={relatedProjects} /> : null}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              NasÄ±l Ã‡alÄ±ÅŸÄ±yoruz?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              5 adÄ±mda proje sÃ¼reci
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
                      "Her adÄ±m, proje takvimi, teknik uyum ve saha koordinasyonu dikkate alÄ±narak planlanÄ±r.",
                  }))).map((step) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold leading-7 text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {step.description}
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
              SÄ±k Sorulan Sorular
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
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
              {isMachineManufacturing
                ? "Makine imalatÄ± ve endÃ¼striyel makine Ã¼retimi projelerinde neden proses uyumlu mÃ¼hendislik yaklaÅŸÄ±mÄ± gerekir?"
                : "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu ve proses tesisi kurulumu neden tek merkezden yÃ¶netilmelidir?"}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {isMachineManufacturing ? (
                <>
                  <p>
                    Makine imalatÄ± projelerinde yalnÄ±zca ekipmanÄ±n Ã¼retilmesi yeterli deÄŸildir.
                    EndÃ¼striyel makine Ã¼retimi sÃ¼recinde kapasite, malzeme karakteri, bakÄ±m
                    beklentisi, saha koÅŸullarÄ± ve proses akÄ±ÅŸÄ± birlikte deÄŸerlendirilmelidir.
                    Bu yaklaÅŸÄ±m, Ã¶zel makina imalatÄ± ve proses ekipmanlarÄ± Ã¼retimi projelerinde
                    daha kararlÄ± ve daha uzun Ã¶mÃ¼rlÃ¼ sistemler kurulmasÄ±nÄ± saÄŸlar.
                  </p>
                  <p>
                    Tambur sistemleri Ã¼retimi, konveyÃ¶r imalatÄ±, reaktÃ¶r imalatÄ± ve diÄŸer
                    endÃ¼striyel ekipman Ã¼retimi kalemlerinde doÄŸru mÃ¼hendislik yaklaÅŸÄ±mÄ±;
                    bakÄ±m maliyetini dÃ¼ÅŸÃ¼rÃ¼r, duruÅŸ riskini azaltÄ±r ve Ã¼retim verimliliÄŸini
                    artÄ±rÄ±r. Bu nedenle her ekipman, prosesle tam uyumlu Ã§alÄ±ÅŸacak ÅŸekilde
                    tasarlanmalÄ± ve imal edilmelidir.
                  </p>
                </>
              ) : isCommissioning ? (
                <>
                  <p>
                    Kurulum ve devreye alma sÃ¼reci yalnÄ±zca ekipmanlarÄ±n sahaya
                    yerleÅŸtirilmesi deÄŸil, aynÄ± zamanda tÃ¼m mekanik, elektrik ve
                    otomasyon baÄŸlantÄ±larÄ±nÄ±n kontrollÃ¼ biÃ§imde Ã§alÄ±ÅŸtÄ±rÄ±lmasÄ±dÄ±r.
                    EndÃ¼striyel kurulum ve tesis devreye alma aÅŸamalarÄ±nda doÄŸru
                    planlama yapÄ±lmadÄ±ÄŸÄ±nda saha montajÄ± uzayabilir ve Ã¼retime
                    geÃ§iÅŸ gecikebilir.
                  </p>
                  <p>
                    Commissioning hizmeti; ilk Ã§alÄ±ÅŸtÄ±rma, proses devreye alma,
                    performans doÄŸrulama ve operatÃ¶r adaptasyonunu kapsayan kritik
                    bir geÃ§iÅŸ sÃ¼recidir. Bu nedenle her adÄ±m Ã¶lÃ§Ã¼lebilir, gÃ¼venli
                    ve koordineli ilerletilmelidir.
                  </p>
                </>
              ) : isModernization ? (
                <>
                  <p>
                    Tesis modernizasyonu Ã§alÄ±ÅŸmalarÄ±, mevcut yatÄ±rÄ±mÄ±n daha yÃ¼ksek
                    performansla Ã§alÄ±ÅŸmasÄ±nÄ± saÄŸlayan stratejik iyileÅŸtirme projeleridir.
                    Proses iyileÅŸtirme, kapasite artÄ±rÄ±mÄ± ve hat optimizasyonu adÄ±mlarÄ±;
                    kompost, gÃ¼bre, geri dÃ¶nÃ¼ÅŸÃ¼m ve endÃ¼striyel proses tesislerinde
                    yeni yatÄ±rÄ±m yapmadan verimlilik artÄ±rma imkanÄ± sunar.
                  </p>
                  <p>
                    EndÃ¼striyel revizyon projelerinde doÄŸru mÃ¼hendislik yaklaÅŸÄ±mÄ± ile
                    darboÄŸazlar azaltÄ±lÄ±r, enerji kullanÄ±mÄ± dengelenir ve proses geliÅŸtirme
                    Ã§alÄ±ÅŸmalarÄ± ile sistem daha stabil hale getirilir. BÃ¶ylece mevcut hat
                    Ã¼zerinden daha kontrollÃ¼ kapasite artÄ±ÅŸÄ± saÄŸlanabilir.
                  </p>
                </>
              ) : isConsulting ? (
                <>
                  <p>
                    Teknik danÄ±ÅŸmanlÄ±k hizmeti, yatÄ±rÄ±m Ã¶ncesinde doÄŸru kararlarÄ±
                    almayÄ± saÄŸlayan en kritik aÅŸamalardan biridir. Proses danÄ±ÅŸmanlÄ±ÄŸÄ±,
                    tesis danÄ±ÅŸmanlÄ±ÄŸÄ± ve yatÄ±rÄ±m danÄ±ÅŸmanlÄ±ÄŸÄ± Ã§alÄ±ÅŸmalarÄ±; yanlÄ±ÅŸ
                    kapasite planlamasÄ±, hatalÄ± ekipman tercihi ve uygunsuz proses
                    kurgusu gibi yÃ¼ksek maliyetli hatalarÄ±n Ã¶nÃ¼ne geÃ§er.
                  </p>
                  <p>
                    EndÃ¼striyel danÄ±ÅŸmanlÄ±k ve proses mÃ¼hendisliÄŸi danÄ±ÅŸmanlÄ±ÄŸÄ±
                    yaklaÅŸÄ±mÄ± ile saha verileri, malzeme yapÄ±sÄ± ve Ã¼retim hedefleri
                    birlikte deÄŸerlendirilir. BÃ¶ylece yatÄ±rÄ±m sÃ¼reci daha net, daha
                    kontrollÃ¼ ve daha sÃ¼rdÃ¼rÃ¼lebilir bir yapÄ±ya kavuÅŸur.
                  </p>
                </>
              ) : isMaintenance ? (
                <>
                  <p>
                    EndÃ¼striyel bakÄ±m hizmeti, yalnÄ±zca arÄ±za sonrasÄ± mÃ¼dahale deÄŸildir.
                    Tesis bakÄ±m hizmeti ve makine bakÄ±m servisi yaklaÅŸÄ±mÄ±; ekipman
                    Ã¶mrÃ¼nÃ¼ koruyan, Ã¼retim kayÄ±plarÄ±nÄ± azaltan ve iÅŸletme gÃ¼venliÄŸini
                    artÄ±ran planlÄ± bir sistem yÃ¶netimi sunar.
                  </p>
                  <p>
                    Periyodik bakÄ±m, Ã¶nleyici bakÄ±m ve saha servis hizmeti birlikte
                    yÃ¼rÃ¼tÃ¼ldÃ¼ÄŸÃ¼nde; endÃ¼striyel servis sÃ¼reÃ§leri daha izlenebilir hale
                    gelir, kritik parÃ§alar kontrol altÄ±nda tutulur ve Ã¼retim sÃ¼rekliliÄŸi
                    daha gÃ¼venli biÃ§imde korunur.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Anahtar teslim tesis kurulumu yaklaÅŸÄ±mÄ±; mÃ¼hendislik, ekipman seÃ§imi,
                    makina imalatÄ±, saha montajÄ± ve devreye alma sÃ¼reÃ§lerini tek bir
                    planlama disiplini iÃ§inde birleÅŸtirir. Bu yapÄ±, Ã¶zellikle kompost
                    tesisi kurulumu, gÃ¼bre tesisi kurulumu, geri dÃ¶nÃ¼ÅŸÃ¼m tesisi kurulumu
                    ve endÃ¼striyel tesis kurulumu projelerinde koordinasyon riskini azaltÄ±r.
                  </p>
                  <p>
                    Proje boyunca tek merkezden karar alÄ±nmasÄ±; maliyet kontrolÃ¼nÃ¼,
                    termin yÃ¶netimini ve teknik uyumu gÃ¼Ã§lendirir. BÃ¶ylece yatÄ±rÄ±mcÄ±,
                    sadece ekipman satÄ±n alan deÄŸil, bÃ¼tÃ¼nleÅŸik ve Ã§alÄ±ÅŸÄ±r bir proses tesisi
                    kurulumu hizmeti alan tarafta olur.
                  </p>
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
              {isMachineManufacturing
                ? "Makine Ä°malatÄ± iÃ§in bizimle iletiÅŸime geÃ§in"
                : isCommissioning
                  ? "Kurulum ve Devreye Alma iÃ§in bizimle iletiÅŸime geÃ§in"
                  : isModernization
                    ? "Modernizasyon ve Revizyon iÃ§in bizimle iletiÅŸime geÃ§in"
                    : isConsulting
                      ? "Teknik DanÄ±ÅŸmanlÄ±k iÃ§in bizimle iletiÅŸime geÃ§in"
                      : isMaintenance
                        ? "BakÄ±m ve Servis iÃ§in bizimle iletiÅŸime geÃ§in"
                : "Anahtar Teslim Tesis Kurulumu iÃ§in bizimle iletiÅŸime geÃ§in"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
              {isMachineManufacturing
                ? "Projenize en uygun makina Ã§Ã¶zÃ¼mlerini, doÄŸru malzeme seÃ§imini ve yÃ¼ksek performanslÄ± Ã¼retim sistemlerini birlikte planlayalÄ±m."
                : isCommissioning
                  ? "Tesisinizin sorunsuz ÅŸekilde devreye alÄ±nmasÄ±, hÄ±zlÄ± Ã¼retime geÃ§iÅŸ ve maksimum performans iÃ§in birlikte planlama yapalÄ±m."
                  : isModernization
                    ? "Mevcut tesisinizin performansÄ±nÄ± artÄ±rmak, kapasitenizi yÃ¼kseltmek ve verimliliÄŸi maksimum seviyeye Ã§Ä±karmak iÃ§in birlikte planlama yapalÄ±m."
                    : isConsulting
                      ? "YatÄ±rÄ±mÄ±nÄ±zÄ± doÄŸru planlamak, riskleri azaltmak ve en verimli sistemi kurmak iÃ§in birlikte teknik yol haritanÄ±zÄ± oluÅŸturalÄ±m."
                      : isMaintenance
                        ? "Tesisinizin kesintisiz Ã§alÄ±ÅŸmasÄ±, ekipman Ã¶mrÃ¼nÃ¼n uzamasÄ± ve Ã¼retim verimliliÄŸinin korunmasÄ± iÃ§in birlikte planlama yapalÄ±m."
                : "Projenize en uygun teknik Ã§Ã¶zÃ¼mÃ¼, doÄŸru ekipman seÃ§imini ve optimum yatÄ±rÄ±m planÄ±nÄ± birlikte belirleyelim."}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:info@promakina.com.tr"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                E-posta GÃ¶nder
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


