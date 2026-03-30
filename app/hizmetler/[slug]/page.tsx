import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectorHrefMap: Record<string, string> = {
  "Gübre ve Granülasyon Tesisleri": "/sektorler/gubre-ve-granulasyon-tesisleri",
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
  "Anahtar teslim tesis kurulumu hizmetimiz ile tüm süreci tek bir koordinasyon altında yönetiyoruz. Kompost, gübre, geri dönüşüm ve endüstriyel proses tesisleri için planlama, mühendislik, imalat, montaj ve devreye alma adımlarını entegre şekilde sunuyoruz.",
  "Projenizin her aşamasını tek elden yöneterek zaman kaybını minimize eder, maliyetleri kontrol altında tutar ve sahada sorunsuz bir kurulum süreci sağlarız.",
];

const turnkeyScopeIntro =
  "Mühendislikten imalata, saha kurulumundan devreye almaya kadar tüm tesis sürecini tek elden yönetiyoruz. Her proje, saha koşulları, kapasite ihtiyacı ve proses gereksinimlerine göre özel olarak planlanır.";

const turnkeyOutputs = [
  "Tek merkezden yönetilen profesyonel proje süreci",
  "Zaman kaybının ve koordinasyon hatalarının minimize edilmesi",
  "Net, öngörülebilir ve kontrol edilebilir maliyet yapısı",
  "Tüm süreçlerde teknik uyum ve standartlaşma",
  "Sahada hızlı ve sorunsuz devreye alma",
];

const turnkeyScope = [
  "Tesis yerleşim planı ve saha optimizasyonu",
  "Ekipman seçimi ve proses uyumlandırması",
  "Makina imalatı ve kalite kontrol süreçleri",
  "Saha montajı ve mekanik kurulum",
  "Devreye alma ve performans testleri",
  "Teknik danışmanlık ve süreç optimizasyonu",
];

const turnkeyAdvantages = [
  "Tek muhatap ile tüm süreci yönetme kolaylığı",
  "Sahaya özel mühendislik çözümleri",
  "Kontrollü ve planlı kurulum süreci",
  "Baştan sona bütünleşik proje yönetimi",
  "Daha düşük hata riski ve daha yüksek verimlilik",
];

const turnkeySectors = [
  "Gübre ve Granülasyon Tesisleri",
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
    title: "İhtiyaç analizi",
    description:
      "Projenin kapsamı belirlenir, saha ve proses ihtiyaçları teknik olarak değerlendirilir.",
  },
  {
    title: "Proses tasarımı",
    description:
      "Sistemin mühendislik altyapısı oluşturulur, ekipman ve akış planı netleştirilir.",
  },
  {
    title: "Makina üretimi",
    description:
      "Projeye özel ekipmanlar yüksek kalite standartlarında üretilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montajı gerçekleştirilir ve sistem çalışır hale getirilir.",
  },
  {
    title: "Eğitim ve satış sonrası destek",
    description:
      "Operatör eğitimi verilir ve sistem performansı sürekli desteklenir.",
  },
];

const turnkeyFaqs = [
  {
    question: "Anahtar teslim tesis kurulumu neleri kapsar?",
    answer:
      "Proses tasarımı, ekipman seçimi, makina imalatı, saha montajı, devreye alma ve teknik danışmanlık dahil olmak üzere tüm süreçleri kapsar.",
  },
  {
    question: "Proje süresi neye göre belirlenir?",
    answer:
      "Proje süresi; tesis kapasitesi, proses tipi, ekipman sayısı ve saha koşullarına bağlı olarak belirlenir.",
  },
  {
    question: "Tesis tamamen çalışır halde mi teslim edilir?",
    answer:
      "Evet. Sistem devreye alınmış, test edilmiş ve çalışır durumda teslim edilir.",
  },
  {
    question: "Kurulum sonrası destek sağlıyor musunuz?",
    answer:
      "Evet. Eğitim, teknik destek ve süreç optimizasyonu hizmetleri sunulmaktadır.",
  },
  {
    question: "Projeler standart mı yoksa özel mi tasarlanır?",
    answer:
      "Tüm projeler, müşterinin ihtiyacına ve saha koşullarına özel olarak mühendislik çalışması ile tasarlanır.",
  },
];

const machineIntro = [
  "Sahaya ve prosese özel makine imalatı ile yüksek performanslı, dayanıklı ve uzun ömürlü sistemler üretiyoruz. Kompost, gübre, geri dönüşüm, madencilik ve endüstriyel proses tesisleri için tambur, konveyör, bunker, kırıcı, reaktör ve yardımcı ekipmanları proje gereksinimlerine göre tasarlayıp imal ediyoruz.",
  "Her ekipman, kapasite ihtiyacı, malzeme yapısı ve saha koşulları dikkate alınarak mühendislik hesapları ile üretilir ve tesisin genel performansına maksimum katkı sağlar.",
];

const machineScopeIntro =
  "Prosese özel ölçülerde, ağır sanayi koşullarına uygun, yüksek dayanımlı ve uzun ömürlü endüstriyel ekipmanlar üretiyoruz. Tüm imalat süreçleri mühendislik hesaplarına, saha gerçeklerine ve kalite standartlarına uygun olarak gerçekleştirilir.";

const machineOutputs = [
  "Sahaya birebir uyumlu ekipman tasarımı",
  "Uzun ömürlü ve dayanıklı makina yapısı",
  "Proses ile tam uyumlu çalışma",
  "Düşük bakım maliyeti",
  "Yüksek performans ve kesintisiz üretim",
];

const machineScope = [
  "Projeye özel makina tasarımı",
  "Özel ölçü ve kapasiteye göre imalat",
  "Malzeme seçimi ve mühendislik doğrulaması",
  "Atölye üretimi ve imalat süreç yönetimi",
  "Kaynak, işleme ve montaj işlemleri",
  "Kalite kontrol ve test süreçleri",
];

const machineAdvantages = [
  "Projeye özel üretim",
  "Yüksek dayanımlı malzeme kullanımı",
  "Hat ve proses ile tam uyum",
  "Kolay bakım ve servis imkanı",
  "Uzun ömürlü çalışma",
];

const machineSectors = [
  "Gübre ve Granülasyon Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const machineRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaştırma, reaktör tamburları)",
  "Taşıma ekipmanları (bant konveyör, helezon, elevatör)",
  "Kırıcılar ve parçalayıcılar",
  "Reaktörler ve proses tankları",
  "Bunker ve besleme sistemleri",
  "Eleme ve sınıflandırma sistemleri",
  "Dozajlama ve karıştırma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Kurutma ve ısıtma sistemleri",
];

const machineRelatedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gübre tesisi projeleri",
  "Geri dönüşüm tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral işleme tesisleri",
  "Özel proses ve makina imalat projeleri",
];

const machineProcessSteps = [
  {
    title: "İhtiyaç analizi",
    description:
      "Proje ihtiyaçları, kapasite ve saha koşulları detaylı olarak analiz edilir.",
  },
  {
    title: "Proses uyumlu tasarım",
    description:
      "Üretilecek makinalar proses ve hat yapısına uygun şekilde tasarlanır.",
  },
  {
    title: "Makine imalatı",
    description:
      "Tüm ekipmanlar yüksek kalite standartlarında üretilir.",
  },
  {
    title: "Kurulum ve devreye alma",
    description:
      "Saha montajı yapılır ve sistem çalışır hale getirilir.",
  },
  {
    title: "Eğitim ve teknik destek",
    description:
      "Operasyon süreci desteklenir ve teknik danışmanlık sağlanır.",
  },
];

const machineFaqs = [
  {
    question: "Standart dışı makine imalatı yapıyor musunuz?",
    answer:
      "Evet. Tüm makineler proje ihtiyaçlarına ve saha koşullarına göre özel olarak üretilmektedir.",
  },
  {
    question: "Kullanılan malzemeler nelerdir?",
    answer:
      "Projeye göre karbon çelik, paslanmaz çelik ve özel alaşımlı malzemeler kullanılmaktadır.",
  },
  {
    question: "Makine imalat süresi neye göre değişir?",
    answer:
      "Makinenin tipi, boyutu, teknik detayları ve proje kapsamına göre değişiklik gösterir.",
  },
  {
    question: "Üretilen makineler sahaya hazır mı teslim edilir?",
    answer:
      "Evet. Montaj ve devreye alma süreçleri ile birlikte çalışır halde teslim edilir.",
  },
  {
    question: "Satış sonrası destek veriyor musunuz?",
    answer:
      "Evet. Kurulum sonrası teknik destek, bakım ve danışmanlık hizmetleri sunulmaktadır.",
  },
];

const commissioningIntro = [
  "Kurulum ve devreye alma süreci, bir tesisin gerçek performansını belirleyen en kritik aşamalardan biridir. Endüstriyel tesis kurulum ve devreye alma hizmetimiz ile ekipmanların sahaya alınmasından ilk üretim testlerine kadar tüm süreci planlı, kontrollü ve ölçülebilir şekilde yönetiyoruz.",
  "Sahada oluşabilecek hataları minimize ederek sistemin hızlı, güvenli ve performanslı şekilde çalışmasını sağlıyoruz.",
];

const commissioningScopeIntro =
  "Sahadaki ekipman montajı, sistem entegrasyonu, test süreçleri ve ilk çalışma aşamalarını kontrollü şekilde yönetiyoruz. Tüm süreçler teknik standartlara uygun, planlı ve koordineli olarak ilerletilir.";

const commissioningOutputs = [
  "Daha hızlı ve sorunsuz devreye alma",
  "Saha hatalarının minimize edilmesi",
  "Sistemlerin çalışır ve test edilmiş şekilde teslimi",
  "Üretime hızlı geçiş",
  "Güvenli ve kontrol edilebilir başlangıç süreci",
];

const commissioningScope = [
  "Montaj planlama ve saha organizasyonu",
  "Ekipman yerleşimi ve mekanik kurulum",
  "Elektrik ve otomasyon entegrasyonu",
  "Test çalışmaları ve sistem kontrolleri",
  "İlk çalıştırma (commissioning)",
  "Performans doğrulama ve optimizasyon",
];

const commissioningAdvantages = [
  "Güçlü saha koordinasyonu",
  "Sürekli teknik takip ve kontrol",
  "Performans odaklı devreye alma",
  "Operatör eğitimi ve sistem adaptasyonu",
  "Daha düşük risk ve daha hızlı üretim başlangıcı",
];

const commissioningSectors = [
  "Gübre ve Granülasyon Tesisleri",
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
  "Organomineral gübre tesisi projeleri",
  "Geri dönüşüm tesisleri",
  "Biyogaz ve enerji tesisleri",
  "Madencilik ve mineral işleme tesisleri",
  "Endüstriyel proses tesisleri",
];

const commissioningProcessSteps = [
  {
    title: "Saha hazırlığı",
    description:
      "Kurulum öncesi saha planlaması yapılır ve ekipman yerleşimi netleştirilir.",
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
      "Sistem kontrollü şekilde çalıştırılır ve tüm testler gerçekleştirilir.",
  },
  {
    title: "Eğitim ve performans takibi",
    description:
      "Operatör eğitimi verilir ve sistem performansı izlenir.",
  },
];

const commissioningFaqs = [
  {
    question: "Devreye alma süreci ne kadar sürer?",
    answer:
      "Süre; tesisin büyüklüğüne, ekipman sayısına ve sistem kompleksliğine göre değişir.",
  },
  {
    question: "Kurulum sırasında sahada ekip bulunuyor mu?",
    answer:
      "Evet. Kurulum ve devreye alma sürecinde teknik ekip sahada aktif olarak yer alır.",
  },
  {
    question: "Sistem test edilmeden teslim edilir mi?",
    answer:
      "Hayır. Tüm sistemler test edilerek çalışır durumda teslim edilir.",
  },
  {
    question: "Devreye alma sonrası destek veriliyor mu?",
    answer:
      "Evet. Teknik destek, performans takibi ve danışmanlık hizmetleri sunulmaktadır.",
  },
  {
    question: "Operatör eğitimi veriliyor mu?",
    answer:
      "Evet. Sistem kullanımı ve bakım süreçleri için detaylı eğitim verilir.",
  },
];

const modernizationIntro = [
  "Mevcut tesisinizi sıfırdan yatırım yapmadan daha verimli, daha dengeli ve daha yüksek kapasiteli hale getiriyoruz. Modernizasyon ve revizyon hizmetimiz ile mevcut üretim hatlarını analiz ederek darboğazları tespit ediyor, ekipman ve proses iyileştirmeleri ile performansı artırıyoruz.",
  "Kompost, gübre, geri dönüşüm ve endüstriyel proses tesislerinde yapılan doğru modernizasyon çalışmaları ile kapasite artışı, enerji verimliliği ve üretim kalitesinde önemli iyileşmeler sağlanır.",
];

const modernizationScopeIntro =
  "Mevcut tesisleri kapasite, verimlilik ve proses kalitesi açısından analiz ediyor, mühendislik yaklaşımı ile yeniden yapılandırıyoruz. Darboğazların ortadan kaldırılması, ekipman optimizasyonu ve proses iyileştirme çalışmaları ile sistem performansı yükseltilir.";

const modernizationOutputs = [
  "Mevcut hat üzerinden kapasite artışı",
  "Enerji tüketiminde verimlilik",
  "Daha dengeli ve stabil proses",
  "Üretim kalitesinde iyileşme",
  "Yeni yatırım ihtiyacının azaltılması",
];

const modernizationScope = [
  "Mevcut hat analizi ve performans değerlendirmesi",
  "Darboğaz (bottleneck) tespiti",
  "Ekipman revizyonu ve değişimi",
  "Proses akışı iyileştirme",
  "Kapasite artırma çalışmaları",
  "Enerji ve verim optimizasyonu",
];

const modernizationAdvantages = [
  "Mevcut yatırımın korunması",
  "Düşük maliyetle yüksek verim artışı",
  "Kısa sürede uygulanabilir çözümler",
  "Daha düşük duruş (downtime) maliyeti",
  "Mevcut sistem ile uyumlu iyileştirme",
];

const modernizationSectors = [
  "Gübre ve Granülasyon Tesisleri",
  "Kompost ve Organik Atık Tesisleri",
  "Atık Su Çamuru ve Arıtma Çözümleri",
  "Geri Dönüşüm ve Atık Yönetimi",
  "Enerji ve Biyogaz Sistemleri",
  "Madencilik ve Mineral İşleme",
  "Kimya ve Proses Endüstrisi",
  "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
];

const modernizationRelatedMachines = [
  "Tambur sistemleri (kurutma, olgunlaştırma, reaktör)",
  "Taşıma ekipmanları (konveyör, elevatör, helezon)",
  "Kırıcılar ve parçalayıcılar",
  "Reaktörler ve proses tankları",
  "Eleme ve sınıflandırma sistemleri",
  "Toz toplama ve filtre sistemleri",
  "Bunker ve besleme sistemleri",
  "Dozajlama ve karıştırma sistemleri",
];

const modernizationRelatedProjects = [
  "Kompost tesisi modernizasyon projeleri",
  "Organomineral gübre tesisi kapasite artırımı",
  "Geri dönüşüm tesisi revizyon projeleri",
  "Biyogaz tesis iyileştirme çalışmaları",
  "Endüstriyel proses hat optimizasyon projeleri",
];

const modernizationProcessSteps = [
  {
    title: "Mevcut sistem analizi",
    description:
      "Tesisin mevcut performansı, kapasitesi ve darboğaz noktaları detaylı olarak analiz edilir.",
  },
  {
    title: "Veri ve proses değerlendirme",
    description:
      "Üretim verileri, malzeme akışı ve enerji kullanımı incelenir.",
  },
  {
    title: "İyileştirme planı",
    description:
      "Revizyon ve modernizasyon için teknik çözüm ve yol haritası oluşturulur.",
  },
  {
    title: "Uygulama ve revizyon",
    description:
      "Ekipman değişimi ve proses iyileştirme çalışmaları sahada uygulanır.",
  },
  {
    title: "Performans kontrolü",
    description:
      "Sistem performansı ölçülür ve gerekli optimizasyonlar yapılır.",
  },
];

const modernizationFaqs = [
  {
    question: "Sadece belirli bir hatta revizyon yapılabilir mi?",
    answer:
      "Evet. Tüm tesis yerine yalnızca sorunlu veya kapasiteyi sınırlayan hatlar üzerinde revizyon yapılabilir.",
  },
  {
    question: "Modernizasyon ile kapasite ne kadar artar?",
    answer:
      "Artış oranı tesisin mevcut durumuna bağlıdır ancak doğru revizyon ile %20–50 arası kapasite artışı sağlanabilir.",
  },
  {
    question: "Üretim durmadan modernizasyon yapılabilir mi?",
    answer:
      "Bazı durumlarda kısmi duruşlarla veya planlı bakım dönemlerinde uygulanabilir.",
  },
  {
    question: "Mevcut makineler tamamen değişmek zorunda mı?",
    answer:
      "Hayır. Çoğu projede mevcut ekipmanlar korunur, sadece kritik noktalar iyileştirilir.",
  },
  {
    question: "Modernizasyon yatırım geri dönüşü ne kadar sürer?",
    answer:
      "Genellikle kısa sürede kendini amorti eden, yüksek verim artışı sağlayan yatırımlardır.",
  },
];

const consultingIntro = [
  "Doğru yatırım ve proses kararları, tesisin uzun vadeli başarısını doğrudan belirler. Teknik danışmanlık hizmetimiz ile yeni tesis yatırımlarında ve mevcut hat iyileştirme süreçlerinde karar vericilere net, uygulanabilir ve mühendislik temelli bir yol haritası sunuyoruz.",
  "Kompost, gübre, geri dönüşüm ve endüstriyel proses tesislerinde doğru ekipman seçimi, doğru kapasite planlaması ve doğru proses kurgusu ile yatırım risklerini minimize ediyoruz.",
];

const consultingScopeIntro =
  "Yatırım kararı, proses seçimi, ekipman tercihi ve saha planlaması için teknik bakış açısı sunuyoruz. Projenin başından itibaren doğru yönlendirme ile zaman, maliyet ve performans açısından optimum çözüm oluşturulmasını sağlıyoruz.";

const consultingOutputs = [
  "Daha net ve doğru yatırım kararları",
  "Yanlış ekipman seçimi riskinin azalması",
  "Proje sürecinde belirsizliklerin ortadan kalkması",
  "Daha hızlı ve kontrollü ilerleyen yatırım süreci",
  "Uzun vadede daha verimli ve sürdürülebilir tesis",
];

const consultingScope = [
  "Teknik analiz ve mevcut durum değerlendirmesi",
  "Yatırım fizibilite ve kapasite planlaması",
  "Proses seçimi ve teknik yönlendirme",
  "Ekipman seçimi ve sistem kurgusu",
  "Saha yerleşim ve hat planlama desteği",
  "Proje süreci boyunca teknik danışmanlık",
];

const consultingAdvantages = [
  "Uzman mühendislik bakış açısı",
  "Doğru ve hızlı karar alma imkanı",
  "Yatırım risklerinin azaltılması",
  "Süreçlerin net ve planlı ilerlemesi",
  "Gereksiz maliyetlerin önlenmesi",
];

const consultingSectors = [
  "Gübre ve Granülasyon Tesisleri",
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
    title: "İhtiyaç ve hedef analizi",
    description:
      "Yatırım hedefleri, kapasite beklentisi ve proje kapsamı belirlenir.",
  },
  {
    title: "Mevcut veri değerlendirme",
    description:
      "Saha verileri, hammadde yapısı ve proses ihtiyaçları analiz edilir.",
  },
  {
    title: "Teknik çözüm oluşturma",
    description:
      "En uygun proses, ekipman ve sistem kurgusu belirlenir.",
  },
  {
    title: "Yol haritası ve planlama",
    description:
      "Yatırım süreci için uygulanabilir teknik plan oluşturulur.",
  },
  {
    title: "Süreç takibi ve destek",
    description:
      "Proje sürecinde teknik danışmanlık devam eder.",
  },
];

const consultingFaqs = [
  {
    question: "Danışmanlık sadece yeni projeler için mi geçerlidir?",
    answer:
      "Hayır. Mevcut tesislerin iyileştirilmesi ve kapasite artırımı için de uygulanır.",
  },
  {
    question: "Danışmanlık sürecinde sahaya geliniyor mu?",
    answer:
      "Evet. Proje ihtiyacına göre saha incelemesi yapılabilir.",
  },
  {
    question: "Danışmanlık ile ne tür hatalar önlenir?",
    answer:
      "Yanlış ekipman seçimi, kapasite hataları ve proses uyumsuzlukları önlenir.",
  },
  {
    question: "Yatırım maliyetini düşürür mü?",
    answer:
      "Evet. Doğru planlama ile gereksiz ekipman ve yanlış yatırımlar engellenir.",
  },
  {
    question: "Danışmanlık sonrası proje devam ediyor mu?",
    answer:
      "İstenirse proje, tasarım, imalat ve kurulum süreçleri ile birlikte devam ettirilebilir.",
  },
];

const maintenanceIntro = [
  "Endüstriyel tesislerde bakım ve servis süreçleri, ekipman ömrünü ve üretim sürekliliğini doğrudan etkiler. Bakım ve servis hizmetimiz ile tesislerinizin güvenli, verimli ve kesintisiz çalışmasını sağlıyoruz.",
  "Periyodik bakım, arıza tespiti, yedek parça yönetimi ve saha servis desteği ile sistem performansının sürdürülebilirliğini garanti altına alıyoruz.",
];

const maintenanceScopeIntro =
  "Ekipman ömrünü uzatmak, plansız duruşları minimize etmek ve sistem performansını korumak için profesyonel bakım ve servis çözümleri sunuyoruz. Tüm süreçler planlı, ölçülebilir ve takip edilebilir şekilde yürütülür.";

const maintenanceOutputs = [
  "Plansız duruşların minimize edilmesi",
  "Ekipman ömrünün uzatılması",
  "Daha güvenli ve stabil işletme",
  "Üretim sürekliliğinin sağlanması",
  "Daha düşük bakım maliyetleri",
];

const maintenanceScope = [
  "Periyodik bakım planı oluşturma",
  "Ekipman kontrol ve performans analizi",
  "Arıza tespiti ve hızlı müdahale",
  "Yedek parça temini ve değişimi",
  "Saha servis ve teknik destek",
  "Önleyici bakım uygulamaları",
];

const maintenanceAdvantages = [
  "Hızlı müdahale ve servis desteği",
  "Önleyici bakım yaklaşımı",
  "Parça ve ekipman takibi",
  "Sürekli sistem kontrolü",
  "İşletme sürekliliğinin korunması",
];

const maintenanceSectors = [
  "Gübre ve Granülasyon Tesisleri",
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
  "Organomineral gübre tesisi bakım hizmetleri",
  "Geri dönüşüm tesisleri servis çalışmaları",
  "Biyogaz tesisleri teknik bakım projeleri",
  "Endüstriyel tesis bakım ve iyileştirme çalışmaları",
];

const maintenanceProcessSteps = [
  {
    title: "Sistem analizi",
    description:
      "Tesisin mevcut durumu ve ekipman performansı değerlendirilir.",
  },
  {
    title: "Bakım planı oluşturma",
    description:
      "Periyodik bakım ve kontrol planı hazırlanır.",
  },
  {
    title: "Uygulama ve servis",
    description:
      "Bakım, onarım ve gerekli müdahaleler sahada gerçekleştirilir.",
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
    question: "Periyodik bakım planı hazırlanıyor mu?",
    answer:
      "Evet. Tesisinize özel bakım planı oluşturulur ve düzenli olarak uygulanır.",
  },
  {
    question: "Arıza durumunda ne kadar sürede müdahale edilir?",
    answer:
      "Mümkün olan en kısa sürede saha veya uzaktan teknik destek sağlanır.",
  },
  {
    question: "Yedek parça temini sağlıyor musunuz?",
    answer:
      "Evet. Gerekli yedek parçalar temin edilerek hızlı değişim sağlanır.",
  },
  {
    question: "Bakım hizmeti üretimi durdurur mu?",
    answer:
      "Planlı bakım çalışmaları üretimi minimum etkileyecek şekilde organize edilir.",
  },
  {
    question: "Önleyici bakım gerçekten gerekli mi?",
    answer:
      "Evet. Önleyici bakım sayesinde büyük arızalar ve yüksek maliyetler önlenir.",
  },
];

const defaultProcessSteps = [
  "İhtiyaç analizi",
  "Proses tasarımı",
  "Makina üretimi",
  "Kurulum ve devreye alma",
  "Eğitim ve satış sonrası destek",
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
      <section className="relative isolate overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat ${isTurnkey || isProcessDesign ? "bg-[position:65%_center] sm:bg-center" : "bg-center"}`}
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className={`absolute inset-0 ${isTurnkey || isProcessDesign ? "bg-[linear-gradient(90deg,rgba(3,10,30,0.85)_0%,rgba(3,10,30,0.75)_40%,rgba(3,10,30,0.55)_70%,rgba(3,10,30,0.45)_100%)]" : "bg-slate-950/68"}`} />
        {!isTurnkey && !isProcessDesign && <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/70 to-transparent" />}

        <div className={`site-container relative flex items-start justify-center py-10 sm:py-[50px] lg:py-[60px] ${isTurnkey || isProcessDesign ? "min-h-[320px] sm:min-h-[360px] lg:min-h-[360px]" : "min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]"}`}>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur sm:text-sm">
              Hizmetler
            </div>
            <h1 className="max-w-4xl text-[28px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              {trText(service.heroTitle)}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8 lg:text-lg">
              {isTurnkey
                ? "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu, gübre tesisi kurulumu, geri dönüşüm tesisi kurulumu ve proses tesisi kurulumu projelerinde tüm süreci tek merkezden yöneten entegre mühendislik yaklaşımı sunar."
                : isMachineManufacturing
                  ? "Makine imalatı, endüstriyel makine üretimi, özel makina imalatı ve proses ekipmanları üretimi projelerinde; tambur sistemleri üretimi, konveyör imalatı, reaktör imalatı ve yardımcı endüstriyel ekipman üretimi için sahaya özel çözümler sunar."
                  : isCommissioning
                    ? "Kurulum ve devreye alma, endüstriyel kurulum, tesis devreye alma, saha montajı, commissioning hizmeti ve proses devreye alma süreçlerinde ekipmanların güvenli ve performanslı biçimde çalışmasını sağlayan kritik saha yönetim hizmetidir."
                    : isModernization
                      ? "Tesis modernizasyonu, proses iyileştirme, kapasite artırımı, endüstriyel revizyon, hat optimizasyonu ve verimlilik artırma projelerinde mevcut yatırımın performansını yükselten stratejik mühendislik yaklaşımı sunar."
                      : isConsulting
                        ? "Teknik danışmanlık, proses danışmanlığı, tesis danışmanlığı, endüstriyel danışmanlık, yatırım danışmanlığı ve proses mühendisliği danışmanlığı süreçlerinde doğru kararları erken aşamada netleştiren stratejik mühendislik desteği sunar."
                        : isMaintenance
                          ? "Endüstriyel bakım, tesis bakım hizmeti, makine bakım servisi, periyodik bakım, önleyici bakım, saha servis hizmeti ve endüstriyel servis süreçlerinde üretim sürekliliğini koruyan planlı teknik destek yaklaşımı sunar."
                : trText(service.heroDescription)}
            </p>
          </div>
        </div>
      </section>

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
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>{scopeIntro}</p>
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
                      "Her adım, proje takvimi, teknik uyum ve saha koordinasyonu dikkate alınarak planlanır.",
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
              Sık Sorulan Sorular
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
                ? "Makine imalatı ve endüstriyel makine üretimi projelerinde neden proses uyumlu mühendislik yaklaşımı gerekir?"
                : "Anahtar teslim tesis kurulumu, kompost tesisi kurulumu ve proses tesisi kurulumu neden tek merkezden yönetilmelidir?"}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {isMachineManufacturing ? (
                <>
                  <p>
                    Makine imalatı projelerinde yalnızca ekipmanın üretilmesi yeterli değildir.
                    Endüstriyel makine üretimi sürecinde kapasite, malzeme karakteri, bakım
                    beklentisi, saha koşulları ve proses akışı birlikte değerlendirilmelidir.
                    Bu yaklaşım, özel makina imalatı ve proses ekipmanları üretimi projelerinde
                    daha kararlı ve daha uzun ömürlü sistemler kurulmasını sağlar.
                  </p>
                  <p>
                    Tambur sistemleri üretimi, konveyör imalatı, reaktör imalatı ve diğer
                    endüstriyel ekipman üretimi kalemlerinde doğru mühendislik yaklaşımı;
                    bakım maliyetini düşürür, duruş riskini azaltır ve üretim verimliliğini
                    artırır. Bu nedenle her ekipman, prosesle tam uyumlu çalışacak şekilde
                    tasarlanmalı ve imal edilmelidir.
                  </p>
                </>
              ) : isCommissioning ? (
                <>
                  <p>
                    Kurulum ve devreye alma süreci yalnızca ekipmanların sahaya
                    yerleştirilmesi değil, aynı zamanda tüm mekanik, elektrik ve
                    otomasyon bağlantılarının kontrollü biçimde çalıştırılmasıdır.
                    Endüstriyel kurulum ve tesis devreye alma aşamalarında doğru
                    planlama yapılmadığında saha montajı uzayabilir ve üretime
                    geçiş gecikebilir.
                  </p>
                  <p>
                    Commissioning hizmeti; ilk çalıştırma, proses devreye alma,
                    performans doğrulama ve operatör adaptasyonunu kapsayan kritik
                    bir geçiş sürecidir. Bu nedenle her adım ölçülebilir, güvenli
                    ve koordineli ilerletilmelidir.
                  </p>
                </>
              ) : isModernization ? (
                <>
                  <p>
                    Tesis modernizasyonu çalışmaları, mevcut yatırımın daha yüksek
                    performansla çalışmasını sağlayan stratejik iyileştirme projeleridir.
                    Proses iyileştirme, kapasite artırımı ve hat optimizasyonu adımları;
                    kompost, gübre, geri dönüşüm ve endüstriyel proses tesislerinde
                    yeni yatırım yapmadan verimlilik artırma imkanı sunar.
                  </p>
                  <p>
                    Endüstriyel revizyon projelerinde doğru mühendislik yaklaşımı ile
                    darboğazlar azaltılır, enerji kullanımı dengelenir ve proses geliştirme
                    çalışmaları ile sistem daha stabil hale getirilir. Böylece mevcut hat
                    üzerinden daha kontrollü kapasite artışı sağlanabilir.
                  </p>
                </>
              ) : isConsulting ? (
                <>
                  <p>
                    Teknik danışmanlık hizmeti, yatırım öncesinde doğru kararları
                    almayı sağlayan en kritik aşamalardan biridir. Proses danışmanlığı,
                    tesis danışmanlığı ve yatırım danışmanlığı çalışmaları; yanlış
                    kapasite planlaması, hatalı ekipman tercihi ve uygunsuz proses
                    kurgusu gibi yüksek maliyetli hataların önüne geçer.
                  </p>
                  <p>
                    Endüstriyel danışmanlık ve proses mühendisliği danışmanlığı
                    yaklaşımı ile saha verileri, malzeme yapısı ve üretim hedefleri
                    birlikte değerlendirilir. Böylece yatırım süreci daha net, daha
                    kontrollü ve daha sürdürülebilir bir yapıya kavuşur.
                  </p>
                </>
              ) : isMaintenance ? (
                <>
                  <p>
                    Endüstriyel bakım hizmeti, yalnızca arıza sonrası müdahale değildir.
                    Tesis bakım hizmeti ve makine bakım servisi yaklaşımı; ekipman
                    ömrünü koruyan, üretim kayıplarını azaltan ve işletme güvenliğini
                    artıran planlı bir sistem yönetimi sunar.
                  </p>
                  <p>
                    Periyodik bakım, önleyici bakım ve saha servis hizmeti birlikte
                    yürütüldüğünde; endüstriyel servis süreçleri daha izlenebilir hale
                    gelir, kritik parçalar kontrol altında tutulur ve üretim sürekliliği
                    daha güvenli biçimde korunur.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Anahtar teslim tesis kurulumu yaklaşımı; mühendislik, ekipman seçimi,
                    makina imalatı, saha montajı ve devreye alma süreçlerini tek bir
                    planlama disiplini içinde birleştirir. Bu yapı, özellikle kompost
                    tesisi kurulumu, gübre tesisi kurulumu, geri dönüşüm tesisi kurulumu
                    ve endüstriyel tesis kurulumu projelerinde koordinasyon riskini azaltır.
                  </p>
                  <p>
                    Proje boyunca tek merkezden karar alınması; maliyet kontrolünü,
                    termin yönetimini ve teknik uyumu güçlendirir. Böylece yatırımcı,
                    sadece ekipman satın alan değil, bütünleşik ve çalışır bir proses tesisi
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
                ? "Makine İmalatı için bizimle iletişime geçin"
                : isCommissioning
                  ? "Kurulum ve Devreye Alma için bizimle iletişime geçin"
                  : isModernization
                    ? "Modernizasyon ve Revizyon için bizimle iletişime geçin"
                    : isConsulting
                      ? "Teknik Danışmanlık için bizimle iletişime geçin"
                      : isMaintenance
                        ? "Bakım ve Servis için bizimle iletişime geçin"
                : "Anahtar Teslim Tesis Kurulumu için bizimle iletişime geçin"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
              {isMachineManufacturing
                ? "Projenize en uygun makina çözümlerini, doğru malzeme seçimini ve yüksek performanslı üretim sistemlerini birlikte planlayalım."
                : isCommissioning
                  ? "Tesisinizin sorunsuz şekilde devreye alınması, hızlı üretime geçiş ve maksimum performans için birlikte planlama yapalım."
                  : isModernization
                    ? "Mevcut tesisinizin performansını artırmak, kapasitenizi yükseltmek ve verimliliği maksimum seviyeye çıkarmak için birlikte planlama yapalım."
                    : isConsulting
                      ? "Yatırımınızı doğru planlamak, riskleri azaltmak ve en verimli sistemi kurmak için birlikte teknik yol haritanızı oluşturalım."
                      : isMaintenance
                        ? "Tesisinizin kesintisiz çalışması, ekipman ömrünün uzaması ve üretim verimliliğinin korunması için birlikte planlama yapalım."
                : "Projenize en uygun teknik çözümü, doğru ekipman seçimini ve optimum yatırım planını birlikte belirleyelim."}
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
