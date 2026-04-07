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
  "G?bre ve Gran?lasyon Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
  "Kompost ve Organik Atik Tesisleri": "/sektorler/kompost-ve-organik-atik-tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri": "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  "Geri D?n??m ve Atik Y?netimi": "/sektorler/geri-donusum-ve-atik-yonetimi",
  "Enerji ve Biyogaz Sistemleri": "/sektorler/enerji-ve-biyogaz-sistemleri",
  "Madencilik ve Mineral I?Yleme": "/sektorler/madencilik-ve-mineral-isleme",
  "Kimya ve Proses End?strisi": "/sektorler/kimya-ve-proses-endustrisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri":
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
  "Anahtar teslim tesis kurulumu hizmetimiz ile t?m s?reci tek bir koordinasyon altinda y?netiyoruz. Kompost, g?bre, geri d?n??m ve end?striyel proses tesisleri i?in planlama, m?hendislik, imalat, montaj ve devreye alma adimlarini entegre ?Yekilde sunuyoruz.",
  "Projenizin her a?Yamasini tek elden y?neterek zaman kaybini minimize eder, maliyetleri kontrol altinda tutar ve sahada sorunsuz bir kurulum s?reci sa?Ylariz.",
];

const turnkeyScopeIntro =
  "M?hendislikten imalata, saha kurulumundan devreye almaya kadar t?m tesis s?recini tek elden y?netiyoruz. Her proje, saha ko?Yullari, kapasite ihtiyaci ve proses gereksinimlerine g?re ?zel olarak planlanir.";

const turnkeyOutputs = [
  "Tek merkezden y?netilen profesyonel proje s?reci",
  "Zaman kaybinin ve koordinasyon hatalarinin minimize edilmesi",
  "Net, ?ng?r?lebilir ve kontrol edilebilir maliyet yapisi",
  "T?m s?re?lerde teknik uyum ve standartla?Yma",
  "Sahada hizli ve sorunsuz devreye alma",
];

const turnkeyScope = [
  "Tesis yerle?Yim plani ve saha optimizasyonu",
  "Ekipman se?imi ve proses uyumlandirmasi",
  "Makina imalati ve kalite kontrol s?re?leri",
  "Saha montaji ve mekanik kurulum",
  "Devreye alma ve performans testleri",
  "Teknik dani?Ymanlik ve s?re? optimizasyonu",
];

const turnkeyAdvantages = [
  "Tek muhatap ile t?m s?reci y?netme kolayli?Yi",
  "Sahaya ?zel m?hendislik ?z?mleri",
  "Kontroll? ve planli kurulum s?reci",
  "Ba?Ytan sona b?t?nle?Yik proje y?netimi",
  "Daha d?Y?k hata riski ve daha y?ksek verimlilik",
];

const turnkeySectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
];

const turnkeyProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Projenin kapsami belirlenir, saha ve proses ihtiya?lari teknik olarak de?Yerlendirilir.",
  },
  {
    title: "Proses tasarimi",
    description:
      "Sistemin m?hendislik altyapisi olu?Yturulur, ekipman ve ak? plani netle?Ytirilir.",
  },
  {
    title: "Makina ?retimi",
    description:
      "Projeye ?zel ekipmanlar y?ksek kalite standartlarinda ?retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji ger?ekle?Ytirilir ve sistem ?ali?Yir hale getirilir.",
  },
  {
    title: "E?Yitim ve sati?Y sonrasi destek",
    description:
      "Operat?r e?Yitimi verilir ve sistem performansi s?rekli desteklenir.",
  },
];

const turnkeyFaqs = [
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarimi, ekipman se?imi, makina imalati, saha montaji, devreye alma ve teknik dani?Ymanlik dahil olmak ?zere t?m s?re?leri kapsar.",
  },
  {
    question: "Proje s?resi neye g?re belirlenir?",
    answer:
      "Proje s?resi; tesis kapasitesi, proses tipi, ekipman sayisi ve saha ko?Yullarina ba?Yli olarak belirlenir.",
  },
  {
    question: "Tesis tamamen ?ali?Yir halde mi teslim edilir?",
    answer:
      "Evet. Sistem devreye alinmi?Y, test edilmi?Y ve ?ali?Yir durumda teslim edilir.",
  },
  {
    question: "Kurulum sonrasi destek sa?Yliyor musunuz?",
    answer:
      "Evet. E?Yitim, teknik destek ve s?re? optimizasyonu hizmetleri sunulmaktadir.",
  },
  {
    question: "Projeler standart mi yoksa ?zel mi tasarlanir?",
    answer:
      "T?m projeler, m?Yterinin ihtiyacina ve saha ko?Yullarina ?zel olarak m?hendislik ?ali?Ymasi ile tasarlanir.",
  },
];

const machineIntro = [
  "Sahaya ve prosese ?zel makine imalati ile y?ksek performansli, dayanikli ve uzun ?m?rl? sistemler ?retiyoruz. Kompost, g?bre, geri d?n??m, madencilik ve end?striyel proses tesisleri i?in tambur, konvey?r, bunker, kirici, reakt?r ve yardimci ekipmanlari proje gereksinimlerine g?re tasarlayip imal ediyoruz.",
  "Her ekipman, kapasite ihtiyaci, malzeme yapisi ve saha ko?Yullari dikkate alinarak m?hendislik hesaplari ile ?retilir ve tesisin genel performansina maksimum katki sa?Ylar.",
];

const machineScopeIntro =
  "Prosese ?zel ?l?lerde, a?Yir sanayi ko?Yullarina uygun, y?ksek dayanimli ve uzun ?m?rl? end?striyel ekipmanlar ?retiyoruz. T?m imalat s?re?leri m?hendislik hesaplarina, saha ger?eklerine ve kalite standartlarina uygun olarak ger?ekle?Ytirilir.";

const machineOutputs = [
  "Sahaya birebir uyumlu ekipman tasarimi",
  "Uzun ?m?rl? ve dayanikli makina yapisi",
  "Proses ile tam uyumlu ?ali?Yma",
  "D?Y?k bakim maliyeti",
  "Y?ksek performans ve kesintisiz ?retim",
];

const machineScope = [
  "Projeye ?zel makina tasarimi",
  "?zel ?l? ve kapasiteye g?re imalat",
  "Malzeme se?imi ve m?hendislik do?rulamasi",
  "At?lye ?retimi ve imalat s?re? y?netimi",
  "Kaynak, i?Yleme ve montaj i?Ylemleri",
  "Kalite kontrol ve test s?re?leri",
];

const machineAdvantages = [
  "Projeye ?zel ?retim",
  "Y?ksek dayanimli malzeme kullanimi",
  "Hat ve proses ile tam uyum",
  "Kolay bakim ve servis imkani",
  "Uzun ?m?rl? ?ali?Yma",
];

const machineSectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
];

const machineRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunla?Ytirma, reakt?r tamburlari)",
  "Ta?ma ekipmanlari (bant konvey?r, helezon, elevat?r)",
  "Kiricilar ve par?alayicilar",
  "Reakt?rler ve proses tanklari",
  "Bunker ve besleme sistemleri",
  "Eleme ve siniflandirma sistemleri",
  "Dozajlama ve kari?Ytirma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Kurutma ve isitma sistemleri",
];

const machineRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral g?bre tesisi projeleri",
  "Geri d?n??m tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral i?Yleme tesisleri",
  "?zel proses ve makina imalat projeleri",
];

const machineProcessSteps = [
  {
    title: "Ihtiya? analizi",
    description:
      "Proje ihtiya?lari, kapasite ve saha ko?Yullari detayli olarak analiz edilir.",
  },
  {
    title: "Proses uyumlu tasarim",
    description:
      "?oretilecek makinalar proses ve hat yapisina uygun ?Yekilde tasarlanir.",
  },
  {
    title: "Makine imalati",
    description:
      "T?m ekipmanlar y?ksek kalite standartlarinda ?retilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montaji yapilir ve sistem ?ali?Yir hale getirilir.",
  },
  {
    title: "E?Yitim ve teknik destek",
    description:
      "Operasyon s?reci desteklenir ve teknik dani?Ymanlik sa?Ylanir.",
  },
];

const machineFaqs = [
  {
    question: "Standart di?Yi makine imalati yapiyor musunuz?",
    answer:
      "Evet. T?m makineler proje ihtiya?larina ve saha ko?Yullarina g?re ?zel olarak ?retilmektedir.",
  },
  {
    question: "Kullanilan malzemeler nelerdir?",
    answer:
      "Projeye g?re karbon ?elik, paslanmaz ?elik ve ?zel ala?Yimli malzemeler kullanilmaktadir.",
  },
  {
    question: "Makine imalat s?resi neye g?re de?Yi?Yir?",
    answer:
      "Makinenin tipi, boyutu, teknik detaylari ve proje kapsamina g?re de?Yi?Yiklik g?sterir.",
  },
  {
    question: "?oretilen makineler sahaya hazir mi teslim edilir?",
    answer:
      "Evet. Montaj ve devreye alma s?re?leri ile birlikte ?ali?Yir halde teslim edilir.",
  },
  {
    question: "Sati?Y sonrasi destek veriyor musunuz?",
    answer:
      "Evet. Kurulum sonrasi teknik destek, bakim ve dani?Ymanlik hizmetleri sunulmaktadir.",
  },
];

const commissioningIntro = [
  "Kurulum ve devreye alma s?reci, bir tesisin ger?ek performansini belirleyen en kritik a?Yamalardan biridir. End?striyel tesis kurulum ve devreye alma hizmetimiz ile ekipmanlarin sahaya alinmasindan ilk ?retim testlerine kadar t?m s?reci planli, kontroll? ve ?l?lebilir ?Yekilde y?netiyoruz.",
  "Sahada olu?Yabilecek hatalari minimize ederek sistemin hizli, g?venli ve performansli ?Yekilde ?ali?Ymasini sa?Yliyoruz.",
];

const commissioningScopeIntro =
  "Sahadaki ekipman montaji, sistem entegrasyonu, test s?re?leri ve ilk ?ali?Yma a?Yamalarini kontroll? ?Yekilde y?netiyoruz. T?m s?re?ler teknik standartlara uygun, planli ve koordineli olarak ilerletilir.";

const commissioningOutputs = [
  "Daha hizli ve sorunsuz devreye alma",
  "Saha hatalarinin minimize edilmesi",
  "Sistemlerin ?ali?Yir ve test edilmi?Y ?Yekilde teslimi",
  "?oretime hizli ge?i?Y",
  "G?venli ve kontrol edilebilir ba?Ylangi? s?reci",
];

const commissioningScope = [
  "Montaj planlama ve saha organizasyonu",
  "Ekipman yerle?Yimi ve mekanik kurulum",
  "Elektrik ve otomasyon entegrasyonu",
  "Test ?ali?Ymalari ve sistem kontrolleri",
  "Ilk ?ali?Ytirma (commissioning)",
  "Performans do?rulama ve optimizasyon",
];

const commissioningAdvantages = [
  "G?l? saha koordinasyonu",
  "S?rekli teknik takip ve kontrol",
  "Performans odakli devreye alma",
  "Operat?r e?Yitimi ve sistem adaptasyonu",
  "Daha d?Y?k risk ve daha hizli ?retim ba?Ylangici",
];

const commissioningSectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
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
    title: "Saha hazirli?Yi",
    description:
      "Kurulum ?ncesi saha planlamasi yapilir ve ekipman yerle?Yimi netle?Ytirilir.",
  },
  {
    title: "Montaj ve kurulum",
    description:
      "T?m ekipmanlar sahada projeye uygun ?Yekilde monte edilir.",
  },
  {
    title: "Sistem entegrasyonu",
    description:
      "Mekanik, elektrik ve otomasyon sistemleri entegre edilir.",
  },
  {
    title: "Test ve devreye alma",
    description:
      "Sistem kontroll? ?Yekilde ?ali?Ytirilir ve t?m testler ger?ekle?Ytirilir.",
  },
  {
    title: "E?Yitim ve performans takibi",
    description:
      "Operat?r e?Yitimi verilir ve sistem performansi izlenir.",
  },
];

const commissioningFaqs = [
  {
    question: "Devreye alma s?reci ne kadar s?rer?",
    answer:
      "S?re; tesisin b?y?kl?Y?ne, ekipman sayisina ve sistem kompleksli?Yine g?re de?Yi?Yir.",
  },
  {
    question: "Kurulum sirasinda sahada ekip bulunuyor mu?",
    answer:
      "Evet. Kurulum ve devreye alma s?recinde teknik ekip sahada aktif olarak yer alir.",
  },
  {
    question: "Sistem test edilmeden teslim edilir mi?",
    answer:
      "Hayir. T?m sistemler test edilerek ?ali?Yir durumda teslim edilir.",
  },
  {
    question: "Devreye alma sonrasi destek veriliyor mu?",
    answer:
      "Evet. Teknik destek, performans takibi ve dani?Ymanlik hizmetleri sunulmaktadir.",
  },
  {
    question: "Operat?r e?Yitimi veriliyor mu?",
    answer:
      "Evet. Sistem kullanimi ve bakim s?re?leri i?in detayli e?Yitim verilir.",
  },
];

const modernizationIntro = [
  "Mevcut tesisinizi sifirdan yatirim yapmadan daha verimli, daha dengeli ve daha y?ksek kapasiteli hale getiriyoruz. Modernizasyon ve revizyon hizmetimiz ile mevcut ?retim hatlarini analiz ederek darbo?Yazlari tespit ediyor, ekipman ve proses iyile?Ytirmeleri ile performansi artiriyoruz.",
  "Kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde yapilan do?ru modernizasyon ?ali?Ymalari ile kapasite arti?Yi, enerji verimlili?Yi ve ?retim kalitesinde ?nemli iyile?Ymeler sa?Ylanir.",
];

const modernizationScopeIntro =
  "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi a?isindan analiz ediyor, m?hendislik yakla?Yimi ile yeniden yapilandiriyoruz. Darbo?Yazlarin ortadan kaldirilmasi, ekipman optimizasyonu ve proses iyile?Ytirme ?ali?Ymalari ile sistem performansi y?kseltilir.";

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
  "Ekipman revizyonu ve de?Yi?Yimi",
  "Proses ak?i iyile?Ytirme",
  "Kapasite artirma ?ali?Ymalari",
  "Enerji ve verim optimizasyonu",
];

const modernizationAdvantages = [
  "Mevcut yatirimin korunmasi",
  "D?Y?k maliyetle y?ksek verim arti?Yi",
  "Kisa s?rede uygulanabilir ?z?mler",
  "Daha d?Y?k duru?Y (downtime) maliyeti",
  "Mevcut sistem ile uyumlu iyile?Ytirme",
];

const modernizationSectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
];

const modernizationRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunla?Ytirma, reakt?r)",
  "Ta?ma ekipmanlari (konvey?r, elevat?r, helezon)",
  "Kiricilar ve par?alayicilar",
  "Reakt?rler ve proses tanklari",
  "Eleme ve siniflandirma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Bunker ve besleme sistemleri",
  "Dozajlama ve kari?Ytirma sistemleri",
];

const modernizationRelatedProjects = [
  "Kompost tesisi modernizasyon projeleri",
  "Organomineral g?bre tesisi kapasite artirimi",
  "Geri d?n??m tesisi revizyon projeleri",
  "Biyogaz tesis iyile?Ytirme ?ali?Ymalari",
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
      "?oretim verileri, malzeme ak?i ve enerji kullanimi incelenir.",
  },
  {
    title: "Iyile?Ytirme plani",
    description:
      "Revizyon ve modernizasyon i?in teknik ?z?m ve yol haritasi olu?Yturulur.",
  },
  {
    title: "Uygulama ve revizyon",
    description:
      "Ekipman de?Yi?Yimi ve proses iyile?Ytirme ?ali?Ymalari sahada uygulanir.",
  },
  {
    title: "Performans kontrol?",
    description:
      "Sistem performansi ?l?l?r ve gerekli optimizasyonlar yapilir.",
  },
];

const modernizationFaqs = [
  {
    question: "Sadece belirli bir hatta revizyon yapilabilir mi?",
    answer:
      "Evet. T?m tesis yerine yalnizca sorunlu veya kapasiteyi sinirlayan hatlar ?zerinde revizyon yapilabilir.",
  },
  {
    question: "Modernizasyon ile kapasite ne kadar artar?",
    answer:
      "Arti?Y orani tesisin mevcut durumuna ba?Ylidir ancak do?ru revizyon ile %20?“50 arasi kapasite arti?Yi sa?Ylanabilir.",
  },
  {
    question: "?oretim durmadan modernizasyon yapilabilir mi?",
    answer:
      "Bazi durumlarda kismi duru?Ylarla veya planli bakim d?nemlerinde uygulanabilir.",
  },
  {
    question: "Mevcut makineler tamamen de?Yi?Ymek zorunda mi?",
    answer:
      "Hayir. ?o?Yu projede mevcut ekipmanlar korunur, sadece kritik noktalar iyile?Ytirilir.",
  },
  {
    question: "Modernizasyon yatirim geri d?n?Y? ne kadar s?rer?",
    answer:
      "Genellikle kisa s?rede kendini amorti eden, y?ksek verim arti?Yi sa?Ylayan yatirimlardir.",
  },
];

const consultingIntro = [
  "Do?ru yatirim ve proses kararlari, tesisin uzun vadeli ba?Yarisini do?rudan belirler. Teknik dani?Ymanlik hizmetimiz ile yeni tesis yatirimlarinda ve mevcut hat iyile?Ytirme s?re?lerinde karar vericilere net, uygulanabilir ve m?hendislik temelli bir yol haritasi sunuyoruz.",
  "Kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde do?ru ekipman se?imi, do?ru kapasite planlamasi ve do?ru proses kurgusu ile yatirim risklerini minimize ediyoruz.",
];

const consultingScopeIntro =
  "Yatirim karari, proses se?imi, ekipman tercihi ve saha planlamasi i?in teknik bak? a?isi sunuyoruz. Projenin ba?Yindan itibaren do?ru y?nlendirme ile zaman, maliyet ve performans a?isindan optimum ?z?m olu?Yturulmasini sa?Yliyoruz.";

const consultingOutputs = [
  "Daha net ve do?ru yatirim kararlari",
  "Yanli?Y ekipman se?imi riskinin azalmasi",
  "Proje s?recinde belirsizliklerin ortadan kalkmasi",
  "Daha hizli ve kontroll? ilerleyen yatirim s?reci",
  "Uzun vadede daha verimli ve s?rd?r?lebilir tesis",
];

const consultingScope = [
  "Teknik analiz ve mevcut durum de?Yerlendirmesi",
  "Yatirim fizibilite ve kapasite planlamasi",
  "Proses se?imi ve teknik y?nlendirme",
  "Ekipman se?imi ve sistem kurgusu",
  "Saha yerle?Yim ve hat planlama deste?Yi",
  "Proje s?reci boyunca teknik dani?Ymanlik",
];

const consultingAdvantages = [
  "Uzman m?hendislik bak? a?isi",
  "Do?ru ve hizli karar alma imkani",
  "Yatirim risklerinin azaltilmasi",
  "S?re?lerin net ve planli ilerlemesi",
  "Gereksiz maliyetlerin ?nlenmesi",
];

const consultingSectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
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
    title: "Teknik ?z?m olu?Yturma",
    description:
      "En uygun proses, ekipman ve sistem kurgusu belirlenir.",
  },
  {
    title: "Yol haritasi ve planlama",
    description:
      "Yatirim s?reci i?in uygulanabilir teknik plan olu?Yturulur.",
  },
  {
    title: "S?re? takibi ve destek",
    description:
      "Proje s?recinde teknik dani?Ymanlik devam eder.",
  },
];

const consultingFaqs = [
  {
    question: "Dani?Ymanlik sadece yeni projeler i?in mi ge?erlidir?",
    answer:
      "Hayir. Mevcut tesislerin iyile?Ytirilmesi ve kapasite artirimi i?in de uygulanir.",
  },
  {
    question: "Dani?Ymanlik s?recinde sahaya geliniyor mu?",
    answer:
      "Evet. Proje ihtiyacina g?re saha incelemesi yapilabilir.",
  },
  {
    question: "Dani?Ymanlik ile ne t?r hatalar ?nlenir?",
    answer:
      "Yanli?Y ekipman se?imi, kapasite hatalari ve proses uyumsuzluklari ?nlenir.",
  },
  {
    question: "Yatirim maliyetini d?Y?r?r m?",
    answer:
      "Evet. Do?ru planlama ile gereksiz ekipman ve yanli?Y yatirimlar engellenir.",
  },
  {
    question: "Dani?Ymanlik sonrasi proje devam ediyor mu?",
    answer:
      "Istenirse proje, tasarim, imalat ve kurulum s?re?leri ile birlikte devam ettirilebilir.",
  },
];

const maintenanceIntro = [
  "End?striyel tesislerde bakim ve servis s?re?leri, ekipman ?mr?n? ve ?retim s?reklili?Yini do?rudan etkiler. Bakim ve servis hizmetimiz ile tesislerinizin g?venli, verimli ve kesintisiz ?ali?Ymasini sa?Yliyoruz.",
  "Periyodik bakim, ariza tespiti, yedek par?a y?netimi ve saha servis deste?Yi ile sistem performansinin s?rd?r?lebilirli?Yini garanti altina aliyoruz.",
];

const maintenanceScopeIntro =
  "Ekipman ?mr?n? uzatmak, plansiz duru?Ylari minimize etmek ve sistem performansini korumak i?in profesyonel bakim ve servis ?z?mleri sunuyoruz. T?m s?re?ler planli, ?l?lebilir ve takip edilebilir ?Yekilde y?r?t?l?r.";

const maintenanceOutputs = [
  "Plansiz duru?Ylarin minimize edilmesi",
  "Ekipman ?mr?n?n uzatilmasi",
  "Daha g?venli ve stabil i?Yletme",
  "?oretim s?reklili?Yinin sa?Ylanmasi",
  "Daha d?Y?k bakim maliyetleri",
];

const maintenanceScope = [
  "Periyodik bakim plani olu?Yturma",
  "Ekipman kontrol ve performans analizi",
  "Ariza tespiti ve hizli m?dahale",
  "Yedek par?a temini ve de?Yi?Yimi",
  "Saha servis ve teknik destek",
  "?-nleyici bakim uygulamalari",
];

const maintenanceAdvantages = [
  "Hizli m?dahale ve servis deste?Yi",
  "?-nleyici bakim yakla?Yimi",
  "Par?a ve ekipman takibi",
  "S?rekli sistem kontrol?",
  "I?Yletme s?reklili?Yinin korunmasi",
];

const maintenanceSectors = [
  "G?bre ve Gran?lasyon Tesisleri",
  "Kompost ve Organik Atik Tesisleri",
  "Atik Su ?amuru ve Aritma ?z?mleri",
  "Geri D?n??m ve Atik Y?netimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral I?Yleme",
  "Kimya ve Proses End?strisi",
  "Yem, Toz ve D?kme Kati Malzeme I?Yleme Sistemleri",
];

const maintenanceRelatedProjects = [
  "Kompost tesisi bakim ve servis projeleri",
  "Organomineral g?bre tesisi bakim hizmetleri",
  "Geri d?n??m tesisleri servis ?ali?Ymalari",
  "Biyogaz tesisleri teknik bakim projeleri",
  "End?striyel tesis bakim ve iyile?Ytirme ?ali?Ymalari",
];

const maintenanceProcessSteps = [
  {
    title: "Sistem analizi",
    description:
      "Tesisin mevcut durumu ve ekipman performansi de?Yerlendirilir.",
  },
  {
    title: "Bakim plani olu?Yturma",
    description:
      "Periyodik bakim ve kontrol plani hazirlanir.",
  },
  {
    title: "Uygulama ve servis",
    description:
      "Bakim, onarim ve gerekli m?dahaleler sahada ger?ekle?Ytirilir.",
  },
  {
    title: "Par?a ve sistem takibi",
    description:
      "Kritik ekipmanlar ve yedek par?alar d?zenli olarak izlenir.",
  },
  {
    title: "S?rekli destek",
    description:
      "Teknik destek ve performans takibi ile s?re? s?rd?r?lebilir hale getirilir.",
  },
];

const maintenanceFaqs = [
  {
    question: "Periyodik bakim plani hazirlaniyor mu?",
    answer:
      "Evet. Tesisinize ?zel bakim plani olu?Yturulur ve d?zenli olarak uygulanir.",
  },
  {
    question: "Ariza durumunda ne kadar s?rede m?dahale edilir?",
    answer:
      "M?mk?n olan en kisa s?rede saha veya uzaktan teknik destek sa?Ylanir.",
  },
  {
    question: "Yedek par?a temini sa?Yliyor musunuz?",
    answer:
      "Evet. Gerekli yedek par?alar temin edilerek hizli de?Yi?Yim sa?Ylanir.",
  },
  {
    question: "Bakim hizmeti ?retimi durdurur mu?",
    answer:
      "Planli bakim ?ali?Ymalari ?retimi minimum etkileyecek ?Yekilde organize edilir.",
  },
  {
    question: "?-nleyici bakim ger?ekten gerekli mi?",
    answer:
      "Evet. ?-nleyici bakim sayesinde b?y?k arizalar ve y?ksek maliyetler ?nlenir.",
  },
];

const defaultProcessSteps = [
  "Ihtiya? analizi",
  "Proses tasarimi",
  "Makina ?retimi",
  "Kurulum ve devreye alma",
  "E?Yitim ve sati?Y sonrasi destek",
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
      <h3 className="text-xl font-semibold text-slate-950">Ilgili Sekt?rler</h3>
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
              {isMachineManufacturing
                ? "Makine imalati ve end?striyel makine ?retimi projelerinde neden proses uyumlu m?hendislik yakla?Yimi gerekir?"
                : "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu ve proses tesisi kurulumu neden tek merkezden y?netilmelidir?"}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {isMachineManufacturing ? (
                <>
                  <p>
                    Makine imalati projelerinde yalnizca ekipmanin ?retilmesi yeterli de?Yildir.
                    End?striyel makine ?retimi s?recinde kapasite, malzeme karakteri, bakim
                    beklentisi, saha ko?Yullari ve proses ak?i birlikte de?Yerlendirilmelidir.
                    Bu yakla?Yim, ?zel makina imalati ve proses ekipmanlari ?retimi projelerinde
                    daha kararli ve daha uzun ?m?rl? sistemler kurulmasini sa?Ylar.
                  </p>
                  <p>
                    Tambur sistemleri ?retimi, konvey?r imalati, reakt?r imalati ve di?Yer
                    end?striyel ekipman ?retimi kalemlerinde do?ru m?hendislik yakla?Yimi;
                    bakim maliyetini d?Y?r?r, duru?Y riskini azaltir ve ?retim verimlili?Yini
                    artirir. Bu nedenle her ekipman, prosesle tam uyumlu ?ali?Yacak ?Yekilde
                    tasarlanmali ve imal edilmelidir.
                  </p>
                </>
              ) : isCommissioning ? (
                <>
                  <p>
                    Kurulum ve devreye alma s?reci yalnizca ekipmanlarin sahaya
                    yerle?Ytirilmesi de?Yil, ayni zamanda t?m mekanik, elektrik ve
                    otomasyon ba?Ylantilarinin kontroll? bi?imde ?ali?Ytirilmasidir.
                    End?striyel kurulum ve tesis devreye alma a?Yamalarinda do?ru
                    planlama yapilmadi?Yinda saha montaji uzayabilir ve ?retime
                    ge?i?Y gecikebilir.
                  </p>
                  <p>
                    Commissioning hizmeti; ilk ?ali?Ytirma, proses devreye alma,
                    performans do?rulama ve operat?r adaptasyonunu kapsayan kritik
                    bir ge?i?Y s?recidir. Bu nedenle her adim ?l?lebilir, g?venli
                    ve koordineli ilerletilmelidir.
                  </p>
                </>
              ) : isModernization ? (
                <>
                  <p>
                    Tesis modernizasyonu ?ali?Ymalari, mevcut yatirimin daha y?ksek
                    performansla ?ali?Ymasini sa?Ylayan stratejik iyile?Ytirme projeleridir.
                    Proses iyile?Ytirme, kapasite artirimi ve hat optimizasyonu adimlari;
                    kompost, g?bre, geri d?n??m ve end?striyel proses tesislerinde
                    yeni yatirim yapmadan verimlilik artirma imkani sunar.
                  </p>
                  <p>
                    End?striyel revizyon projelerinde do?ru m?hendislik yakla?Yimi ile
                    darbo?Yazlar azaltilir, enerji kullanimi dengelenir ve proses geli?Ytirme
                    ?ali?Ymalari ile sistem daha stabil hale getirilir. B?ylece mevcut hat
                    ?zerinden daha kontroll? kapasite arti?Yi sa?Ylanabilir.
                  </p>
                </>
              ) : isConsulting ? (
                <>
                  <p>
                    Teknik dani?Ymanlik hizmeti, yatirim ?ncesinde do?ru kararlari
                    almayi sa?Ylayan en kritik a?Yamalardan biridir. Proses dani?Ymanli?Yi,
                    tesis dani?Ymanli?Yi ve yatirim dani?Ymanli?Yi ?ali?Ymalari; yanli?Y
                    kapasite planlamasi, hatali ekipman tercihi ve uygunsuz proses
                    kurgusu gibi y?ksek maliyetli hatalarin ?n?ne ge?er.
                  </p>
                  <p>
                    End?striyel dani?Ymanlik ve proses m?hendisli?Yi dani?Ymanli?Yi
                    yakla?Yimi ile saha verileri, malzeme yapisi ve ?retim hedefleri
                    birlikte de?Yerlendirilir. B?ylece yatirim s?reci daha net, daha
                    kontroll? ve daha s?rd?r?lebilir bir yapiya kavu?Yur.
                  </p>
                </>
              ) : isMaintenance ? (
                <>
                  <p>
                    End?striyel bakim hizmeti, yalnizca ariza sonrasi m?dahale de?Yildir.
                    Tesis bakim hizmeti ve makine bakim servisi yakla?Yimi; ekipman
                    ?mr?n? koruyan, ?retim kayiplarini azaltan ve i?Yletme g?venli?Yini
                    artiran planli bir sistem y?netimi sunar.
                  </p>
                  <p>
                    Periyodik bakim, ?nleyici bakim ve saha servis hizmeti birlikte
                    y?r?t?ld?Y?nde; end?striyel servis s?re?leri daha izlenebilir hale
                    gelir, kritik par?alar kontrol altinda tutulur ve ?retim s?reklili?Yi
                    daha g?venli bi?imde korunur.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Anahtar teslim tesis kurulumu yakla?Yimi; m?hendislik, ekipman se?imi,
                    makina imalati, saha montaji ve devreye alma s?re?lerini tek bir
                    planlama disiplini i?inde birle?Ytirir. Bu yapi, ?zellikle kompost
                    tesisi kurulumu, g?bre tesisi kurulumu, geri d?n??m tesisi kurulumu
                    ve end?striyel tesis kurulumu projelerinde koordinasyon riskini azaltir.
                  </p>
                  <p>
                    Proje boyunca tek merkezden karar alinmasi; maliyet kontrol?n?,
                    termin y?netimini ve teknik uyumu g?lendirir. B?ylece yatirimci,
                    sadece ekipman satin alan de?Yil, b?t?nle?Yik ve ?ali?Yir bir proses tesisi
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
                ? "Makine Imalati i?in bizimle ileti?Yime ge?in"
                : isCommissioning
                  ? "Kurulum ve Devreye Alma i?in bizimle ileti?Yime ge?in"
                  : isModernization
                    ? "Modernizasyon ve Revizyon i?in bizimle ileti?Yime ge?in"
                    : isConsulting
                      ? "Teknik Dani?Ymanlik i?in bizimle ileti?Yime ge?in"
                      : isMaintenance
                        ? "Bakim ve Servis i?in bizimle ileti?Yime ge?in"
                : "Anahtar Teslim Tesis Kurulumu i?in bizimle ileti?Yime ge?in"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
              {isMachineManufacturing
                ? "Projenize en uygun makina ?z?mlerini, do?ru malzeme se?imini ve y?ksek performansli ?retim sistemlerini birlikte planlayalim."
                : isCommissioning
                  ? "Tesisinizin sorunsuz ?Yekilde devreye alinmasi, hizli ?retime ge?i?Y ve maksimum performans i?in birlikte planlama yapalim."
                  : isModernization
                    ? "Mevcut tesisinizin performansini artirmak, kapasitenizi y?kseltmek ve verimlili?Yi maksimum seviyeye ?ikarmak i?in birlikte planlama yapalim."
                    : isConsulting
                      ? "Yatiriminizi do?ru planlamak, riskleri azaltmak ve en verimli sistemi kurmak i?in birlikte teknik yol haritanizi olu?Yturalim."
                      : isMaintenance
                        ? "Tesisinizin kesintisiz ?ali?Ymasi, ekipman ?mr?n?n uzamasi ve ?retim verimlili?Yinin korunmasi i?in birlikte planlama yapalim."
                : "Projenize en uygun teknik ?z?m?, do?ru ekipman se?imini ve optimum yatirim planini birlikte belirleyelim."}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:info@promakina.com.tr"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                E-posta G?nder
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



