export type SectorCategoryInfoCard = {
  title: string;
  text: string;
};

export type SectorCategoryMachineCard = {
  title: string;
  text: string;
  href: string;
};

export type SectorCategoryFaqItem = {
  question: string;
  answer: string;
};

export type SectorCategoryConfig = {
  overviewEyebrow: string;
  overviewTitle: string;
  overviewDescription: string;
  solutionsEyebrow: string;
  solutionsTitle: string;
  solutionsDescription: string;
  solutionCards: readonly SectorCategoryInfoCard[];
  machinesEyebrow: string;
  machinesTitle: string;
  machinesDescription: string;
  machineCards: SectorCategoryMachineCard[];
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqs: SectorCategoryFaqItem[];
  formTitle: string;
  formDescription: string;
};

const sharedSolutionCards = {
  compost: [
    {
      title: "Proses Tasarımı",
      text: "Atık tipi, nem seviyesi, organik madde dengesi ve hedef son ürüne göre kompost hattının proses akışını planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Kapasite, saha koşulları, ekipman ihtiyaçı ve yatırım adımlarını netleştiren teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut kompost ve organik atık hatlarında verim, kalite, koku kontrolü ve son ürün akışını iyileştiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, tambur süresi, eleme ve son ürün yönlendirmesini proses verisine dayalı otomasyon kurgusuyla destekliyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Atık karakterizasyonu, ürün hedefi, saha yerleşimi ve proses güvenliği konularında teknik yönlendirme sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme, tambur, eleme, stoklama ve çevresel kontrol ekipmanlarını entegre tesis kurgusu içinde kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut sahalarda kapasiteyi büyütmek için darboğaz oluşturan besleme, kurutma ve son ürün noktalarını yeniden değerlendiriyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan kompost tesislerinde proses sorunlarını ve ekipman yetersizliklerini analiz ederek saha uyumlu revizyon önerileri geliştiriyoruz.",
    },
  ],
  biogas: [
    {
      title: "Proses Tasarımı",
      text: "Organik girdi tipi, kuru madde oranı, besleme modeli ve yan ürün yönetimine göre biyogaz proses kurgusunu planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Besleme kapasitesi, ekipman ihtiyaçı, saha akışı ve entegrasyon senaryoları için teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut biyogaz hatlarında besleme, transfer, ön hazırlık ve digestat yönetimi tarafında iyileştirme çözümleri sunuyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Sürekli besleme, karıştırma, akış kontrolü ve proses izlenebilirliği için otomasyon altyapısı kurguluyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Girdi karakteri, saha yerleşimi, proses güvenliği ve biyogaz sonrası ürün değerlendirme bağlıklarında teknik destek sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme bunkerleri, transfer hatları, reaktör bağlantıları ve yardımcı ekipmanları entegre tesis mantığında kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde besleme sürekliliği ve ekipman kapasitesini artırmak için darboğaz analizleri yapıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan biyogaz tesislerinde proses dengesini bozan ekipman ve akış sorunlarını sahaya özel revizyonlarla iyileştiriyoruz.",
    },
  ],
  mining: [
    {
      title: "Proses Tasarımı",
      text: "Malzeme sertliği, tane boyutu, nem ve hedef fraksiyonlara göre kırma, eleme ve kurutma akışını planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Kapasite, saha yerleşimi, enerji ihtiyaçı ve ekipman sıralamasını netleştiren teknik ön çalışma hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut maden işleme hatlarında kapasite, ürün kalitesi ve bakım erişimi açısından iyileştirme çözümleri geliştiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, kırma-eleme dengesi, toz kontrolü ve son ürün yönlendirmesi için proses takibini güçlendiriyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Malzeme davranışı, aşındırıcılık, fraksiyon hedefi ve saha koşulları konularında teknik yönlendirme sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Kırıcı, elek, konveyör, bunker ve toz toplama ekipmanlarını tek hat mantığında entegre ediyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda kapasite artığı için kırma kademeleri, transfer hatları ve stok noktalarını yeniden değerlendiriyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan tesislerde bakım zorluğu, dengesiz besleme ve ürün sapmalarına karşı saha odaklı revizyonlar planlıyoruz.",
    },
  ],
  chemistry: [
    {
      title: "Proses Tasarımı",
      text: "Ürün viskozitesi, reaksiyon ihtiyaçı, sıcaklık kontrolü ve reçete yapısına göre kimyasal üretim akışını planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Reaktör hacmi, tank ihtiyaçı, yardımcı akışlar ve dolum altyapısı için teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut kimya ve proses hatlarında karıştırma, çözündürme, filtrasyon ve dolum performansını iyileştiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Dozajlama, pH takibi, sıcaklık kontrolü ve reçete yönetimi için otomasyon kurgusu geliştiriyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Malzeme uyumu, proses güvenliği, batch mantığı ve saha organizasyonu konularında teknik destek sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Reaktör, tank, transfer, stoklama ve dolum sistemlerini entegre tesis mantığında kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde tank hacmi, karıştırma gücü ve son hat kapasitesini büyütmek için iyileştirme önerileri sunuyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan proses hatlarında kararsız üretim, filtrasyon yükü ve ekipman yetersizliklerini analiz ederek revizyon çözümleri geliştiriyoruz.",
    },
  ],
  recycling: [
    {
      title: "Proses Tasarımı",
      text: "Atık kompozisyonu, hedef ürün çıkışı ve saha lojistişine göre kırma, ayırma ve transfer akışını planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Kapasite, atık tipi, ekipman sıralaması ve operasyon modeli için teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut geri dönüşüm hatlarında küçültme, ayırma ve son ürün hazırlama performansını artırıyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme dengesi, kırıcı yükü, eleme akışı ve saha güvenliği için izlenebilir proses kurgusu oluşturuyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Atık karakteri, son ürün hedefi, saha güvenliği ve işletme modeli bağlıklarında teknik destek sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Shredder, konveyör, elek ve yardımcı hatları tek bir geri kazanım mantığında entegre ediyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda besleme kapasitesi, küçültme kademeleri ve son ürün akışını büyütmek için saha analizi yapıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan tesislerde darboğaz oluşturan ayırma, taşıma ve kırma noktalarını revizyon çözümleriyle iyileştiriyoruz.",
    },
  ],
  sludge: [
    {
      title: "Proses Tasarımı",
      text: "Çamurun giriş nemi, akış davranışı ve hedef çıkış koşuluna göre kurutma ve destek proseslerini planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Enerji ihtiyaçı, ekipman sıralaması, saha kısıtları ve son ürün modeli için teknik ön çalışma hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut çamur işleme hatlarında besleme, kurutma, koku kontrolü ve ürün yönetimini iyileştiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, sıcak hava, kurutma süresi ve emisyon kontrolünü izleyen otomasyon yapısı kurguluyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Nem, yapışkanlık, koku, bertaraf veya son kullanım hedefi konularında teknik yönlendirme sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme bunkerleri, kurutma tamburu, filtre ve son ürün yönetim ekipmanlarını entegre hat olarak kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde kurutma verimini ve ürün çıkış kapasitesini artırmak için kritik darboğazları analiz ediyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan çamur tesislerinde enerji, koku, toz ve ürün akışı kaynaklı sorunlar için revizyon çözümleri geliştiriyoruz.",
    },
  ],
  bulk: [
    {
      title: "Proses Tasarımı",
      text: "Ürün yoğunluğu, akışkanlık, tozuma ve hedef kapasiteye göre depolama, dozajlama ve transfer akışını planlıyoruz.",
    },
    {
      title: "Ön Fizibilite",
      text: "Silo hacmi, taşıma ekipmanları, dozaj hassasiyeti ve son hat ihtiyacını netleştiren teknik ön değerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut yem ve dökme katı hatlarında akış kararlılığı, kapasite ve son ürün lojistişini iyileştiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Tartım, dozajlama, transfer ve son ürün yönlendirmesi için proses verisini izleyen otomasyon yapısı kuruyoruz.",
    },
    {
      title: "Danışmanlık",
      text: "Ürün davranışı, köprüleşme riski, hijyen ve bakım erişimi bağlıklarında teknik destek sağlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Silo, bunker, konveyör, elevatör, dozajlama ve paketleme ekipmanlarını entegre hat olarak kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda taşıma, stoklama ve paketleme darboğazlarını gidererek kapasite büyütme planı hazırlıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "Çalışan tesislerde akış problemleri, sızdırmazlık ve dozaj hassasiyeti sorunlarını revizyon çözümleriyle iyileştiriyoruz.",
    },
  ],
} as const;

export const sectorCategoryConfigs: Record<string, SectorCategoryConfig> = {
  "kompost-ve-organik-atik-tesisleri": {
    overviewEyebrow: "Kompost ve Organik Atık Tesisleri",
    overviewTitle: "Hangi kompost ve organik atık tesislerini kuruyoruz?",
    overviewDescription:
      "Organik atıkların kontrollü ayrıştırılması, karıştırılması, olgunlaştırılması, kurutulması, elenmesi ve son ürüne hazırlanması için sahaya uygun tesis çözümleri geliştiriyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Kompost ve Organik Atık Tesisleri İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni yatırım, mevcut saha revizyonu, kapasite artırımı ve çevresel kontrol ihtiyaçlarına göre kompost prosesini ekipmanla birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.compost,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Kompost ve Organik Atık Tesisleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Kompost hatlarında besleme, tambur, eleme, transfer ve son ürün aşamaları aynı proses mantığında seçilmelidir.",
    machineCards: [
      { title: "Kompost Tamburu", text: "Organik materyalin kontrollü olgunlaşması ve homojen ilerlemesi için kullanılır.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Kurutma Tamburu", text: "Yüksek nemli akışlarda hacim azaltma ve ürün kondisyonu sağlar.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Kompost ürününü istenen fraksiyonlara ayırır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kırıcılar ve Parçalayıcılar", text: "Heterojen atıkların hazırlanmasında boyut küçültme sağlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Bunker ve Besleme Sistemleri", text: "Organik girdinin hatta dengeli ve güvenli biçimde alınmasını destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Hazırlama, tambur ve son ürün noktaları arasında kesintisiz transfer kurar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Paketleme ve Dolum Sistemleri", text: "Son ürünün torbalama veya sevkiyat öncesi hazırlanmasını tamamlar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kompost ve Organik Atık Tesisleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Kompost yatırımlarında atık tipi, koku kontrolü, kapasite ve son ürün yönetimiyle ilgili en sık sorulan bağlıkları bir araya getirdik.",
    faqs: [
      { question: "Kompost tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; günlük atık girişi, organik madde oranı, hedef ürün tipi ve çalışma saatine göre hesaplanır." },
      { question: "Farklı organik atıklar aynı hatta işlenebilir mi?", answer: "Evet, atık karakterizasyonu ve uygun ön hazırlık kurgusuyla farklı organik fraksiyonlar aynı tesiste yönetilebilir." },
      { question: "Koku kontrolü kompost tesislerinde nasıl planlanır?", answer: "Koku kontrolü; besleme noktaları, tambur alanı, olgunlaştırma ve filtreleme altyapısı birlikte değerlendirilerek projelendirilir." },
      { question: "Mevcut kompost hattı revize edilerek kapasite artırılabilir mi?", answer: "Evet, besleme, tambur süresi, eleme ve son ürün akışı analiz edilerek revizyon planı hazırlanabilir." },
      { question: "Kompost sonrasında granül ürün hattı eklenebilir mi?", answer: "Evet, hedef ürün yapısına göre kompost sonrası kurutma, eleme ve granülasyon entegrasyonu planlanabilir." },
      { question: "Anahtar teslim kurulum hizmeti veriyor musunuz?", answer: "Evet, proses tasarımından ekipman imalatına ve devreye almaya kadar tüm süreci tek merkezden yönetebiliyoruz." },
    ],
    formTitle: "Kompost ve Organik Atık Tesisleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz atık tipi, kapasite, nem oranı ve saha ihtiyacına göre size uygun proses, makina ve tesis çözümünü birlikte netleştirelim.",
  },
  "enerji-ve-biyogaz-sistemleri": {
    overviewEyebrow: "Enerji ve Biyogaz Sistemleri",
    overviewTitle: "Hangi enerji ve biyogaz sistemlerini kuruyoruz?",
    overviewDescription:
      "Organik atık, tarımsal atık ve gıda atıklarının biyogaz prosesine uygun biçimde hazırlanması, beslenmesi, reaktör bağlantıları ve yan ürün yönetimi için entegre çözümler sunuyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Enerji ve Biyogaz Sistemleri İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni biyogaz yatırımlarında ve mevcut hat revizyonlarında proses sürekliliği, saha güvenliği ve yan ürün değerlendirme adımlarını birlikte planlıyoruz.",
    solutionCards: sharedSolutionCards.biogas,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Enerji ve Biyogaz Sistemleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Biyogaz süreçlerinde kullanılan ekipmanlar, besleme sürekliliği ve girdi karakterine uyum sağlayacak şekilde bir bütün halinde seçilmelidir.",
    machineCards: [
      { title: "Reaktörler ve Tanklar", text: "Karışım, bekleme ve proses dengesi için temel ekipman grubunu oluşturur.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Bunker ve Besleme Sistemleri", text: "Organik girdinin hatta kararlı ve kontrollü beslenmesini sağlar.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Dozajlama Sistemleri", text: "Belirlenen debiyle hassas ve izlenebilir besleme imkanı sunar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Helezon ve Konveyör Hatları", text: "Nemli ve lifli akışlarda güvenli transfer altyapısı kurar.", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { title: "Karıştırıcılı Reaktörler", text: "Homojen besleme ve yardımcı karışım akışlarında proses kararlılığı sağlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Toz ve Gaz Kontrol Sistemleri", text: "Çevresel kontrol ve saha güvenliği için destek altyapısı sağlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Enerji ve Biyogaz Sistemleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Biyogaz ve enerji projelerinde girdi tipi, besleme modeli, entegrasyon ve kapasite konularında en sık sorulan soruları derledik.",
    faqs: [
      { question: "Biyogaz tesisi kapasitesi hangi verilere göre belirlenir?", answer: "Kapasite; günlük girdi miktarı, kuru madde oranı, besleme senaryosu ve hedef enerji modeline göre hesaplanır." },
      { question: "Farklı organik girdiler aynı biyogaz hattında kullanılabilir mi?", answer: "Evet, uygun ön hazırlık ve dozajlama kurgusuyla farklı girdiler tek proses içinde yönetilebilir." },
      { question: "Mevcut biyogaz tesisine yeni besleme sistemi eklenebilir mi?", answer: "Evet, mevcut saha ve reaktör bağlantıları analiz edilerek yeni besleme ekipmanları entegre edilebilir." },
      { question: "Digestat yönetimi proje kapsamına dahil edilebilir mi?", answer: "Evet, digestatın kurutulması, taşınması, ayrılması veya kompost entegrasyonu proje kapsamına alınabilir." },
      { question: "Koku ve gaz yönetimi nasıl planlanır?", answer: "Emisyon kaynakları, transfer noktaları ve kapalı alan kullanımı birlikte değerlendirilerek çevresel kontrol altyapısı kurgulanır." },
      { question: "Anahtar teslim biyogaz destek hatları kuruyor musunuz?", answer: "Evet, besleme, transfer, bunker, yardımcı tank ve proses entegrasyonu dahil anahtar teslim çözümler sunabiliyoruz." },
    ],
    formTitle: "Enerji ve Biyogaz Sistemleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz girdi tipi, günlük kapasite, saha koşulları ve entegrasyon ihtiyacına göre size uygun biyogaz proses çözümünü birlikte netleştirelim.",
  },
  "madencilik-ve-mineral-isleme": {
    overviewEyebrow: "Madencilik ve Mineral İşleme",
    overviewTitle: "Hangi madencilik ve mineral işleme tesislerini kuruyoruz?",
    overviewDescription:
      "Silis kumu, kuvars, kireç taşı, dolomit, perlit ve benzeri mineral ürünlerde kırma, eleme, kurutma, taşıma ve toz toplama süreçlerini sahaya uygun şekilde kurguluyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Madencilik ve Mineral İşleme İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni tesis yatırımlarında ve mevcut hat revizyonlarında malzeme karakteri, kapasite ve bakım kolaylığını birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.mining,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Madencilik ve Mineral İşleme İçin Kullanılan Makinalar",
    machinesDescription:
      "Kırma, eleme, kurutma ve transfer ekipmanları aynı kapasite mantığında seçildiğinde tesis dengeli ve sürdürülebilir çalığır.",
    machineCards: [
      { title: "Kırıcılar ve Parçalayıcılar", text: "Primer ve sekonder küçültme adımlarında malzemeyi hedef fraksiyona hazırlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Ürünü istenen boyutlara ayırarak kalite standardını destekler.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kurutma Tamburu", text: "Nemli mineral akışlarda kontrollü kurutma sağlar.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Bantlı Konveyörler", text: "Hat içi transferi kesintisiz ve güvenli biçimde tamamlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Bunker ve Besleme Sistemleri", text: "Kırıcı ve elek hatlarına kararlı malzeme beslemesi sağlar.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Toz Toplama Sistemleri", text: "Tozlu proses noktalarında emisyon kontrolü ve saha güvenliği sağlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Madencilik ve Mineral İşleme Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Maden tesislerinde kapasite, ürün fraksiyonu, toz kontrolü ve kurutma gereksinimleriyle ilgili en sık sorulan bağlıkları topladık.",
    faqs: [
      { question: "Maden işleme tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; giriş tane boyutu, ürün fraksiyonu, çalışma süresi ve saha besleme modeline göre belirlenir." },
      { question: "Primer ve sekonder kırıcı seçimi neye göre yapılır?", answer: "Malzeme sertliği, aşındırıcılık, giriş boyutu ve hedef çıkış ölçüsü birlikte değerlendirilir." },
      { question: "Kurutma her mineral hattında gerekli midir?", answer: "Hayır, kurutma ihtiyaçı malzeme nemi, stoklama koşulları ve son ürün hedeflerine göre belirlenir." },
      { question: "Toz toplama sistemi neden kritik hale gelir?", answer: "İnce ürün ve kapalı alan uygulamalarında emisyon kontrolü hem çevresel uyum hem de bakım güvenliği için önemlidir." },
      { question: "Mevcut kırma-eleme hattı modernize edilebilir mi?", answer: "Evet, mevcut ekipman parkı analiz edilerek kapasite ve ürün kalitesi odaklı revizyon planı hazırlanabilir." },
      { question: "Anahtar teslim maden işleme hattı kuruyor musunuz?", answer: "Evet, kırıcıdan toz toplama sistemine kadar tüm makine gruplarını aynı proses mantığında kurabiliyoruz." },
    ],
    formTitle: "Madencilik ve Mineral İşleme için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz malzeme tipi, hedef fraksiyon, nem oranı ve saha ihtiyacına göre size uygun maden işleme hattını birlikte netleştirelim.",
  },
  "kimya-ve-proses-endustrisi": {
    overviewEyebrow: "Kimya ve Proses Endüstrisi",
    overviewTitle: "Hangi kimya ve proses tesislerini kuruyoruz?",
    overviewDescription:
      "Kimyasal çözelti hazırlama, sıvı gübre, biyostimülan, özel proses sıvıları ve endüstriyel karışımlarda reaktör, tank, çözündürme, filtrasyon ve dolum çözümleri geliştiriyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Kimya ve Proses Endüstrisi İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni yatırım ve mevcut tesis revizyonlarında proses güvenliği, reçete yönetimi ve ürün standardını birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.chemistry,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Kimya ve Proses Endüstrisi İçin Kullanılan Makinalar",
    machinesDescription:
      "Kimyasal proseslerde ekipman seçimi yalnızca kapasiteye göre değil; malzeme uyumu, güvenlik ve ürün kararlılığına göre yapılmalıdır.",
    machineCards: [
      { title: "Reaktörler ve Tanklar", text: "Kimyasal üretimde ana proses gövdesini oluşturan temel ekipman grubudur.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Çözündürme Tankları", text: "Katı ve sıvı hammaddelerin formülasyona hazırlanmasını sağlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Karıştırıcılı Reaktörler", text: "Homojen karışım ve kontrollü reaksiyon süreçlerinde görev alır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Stok Tankları", text: "Ara stoklama, dengeleme ve dolum öncesi tampon kapasite sunar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
      { title: "Dozajlama Sistemleri", text: "Reçete bazlı hassas besleme ve kontrollü proses akışı sağlar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Sıvı Dolum Sistemleri", text: "?~işe, bidon veya farklı ambalaj tipleri için kontrollü son hat sunar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kimya ve Proses Endüstrisi Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Kimya tesislerinde reaktör seçimi, reçete yönetimi, malzeme uyumu ve dolum altyapısı hakkında en sık sorulan bağlıkları derledik.",
    faqs: [
      { question: "Kimya tesisinde hangi ekipmanlar birlikte planlanmalıdır?", answer: "Reaktör, tank, çözündürme, dozajlama, filtrasyon ve dolum ekipmanları aynı proses mantığında değerlendirilmelidir." },
      { question: "Batch ve sürekli üretim için aynı altyapı kullanılabilir mi?", answer: "Bazı tesislerde hibrit çözümler kurulabilir; ancak ekipman seçimi ürün yapısı ve üretim senaryosuna göre netleştirilmelidir." },
      { question: "Paslanmaz malzeme seçimi neye göre yapılır?", answer: "Kimyasal dayanım, hijyen, sıcaklık ve korozyon riski birlikte değerlendirilerek uygun malzeme seçilir." },
      { question: "Mevcut tesise yeni reaktör veya tank eklenebilir mi?", answer: "Evet, saha akışı ve mevcut proses dengesi incelenerek yeni ekipman entegre edilebilir." },
      { question: "Otomasyon ve reçete yönetimi proje kapsamına dahil midir?", answer: "Evet, dozajlama, pH, sıcaklık ve üretim izlenebilirliği gerektiren proseslerde otomasyon çözümleri proje kapsamına alınır." },
      { question: "Anahtar teslim kimyasal üretim hattı kuruyor musunuz?", answer: "Evet, proses tasarımı, ekipman imalatı, saha kurulumu ve devreye alma dahil anahtar teslim çözümler sunabiliyoruz." },
    ],
    formTitle: "Kimya ve Proses Endüstrisi için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz ürün tipi, batch yapısı, kapasite ve malzeme uyumu ihtiyacına göre size uygun proses ve makine çözümünü birlikte netleştirelim.",
  },
  "geri-donusum-ve-atik-yonetimi": {
    overviewEyebrow: "Geri Dönüşüm ve Atık Yönetimi",
    overviewTitle: "Hangi geri dönüşüm ve atık yönetimi tesislerini kuruyoruz?",
    overviewDescription:
      "Evsel ve endüstriyel atıkların parçalanması, ayrıştırılması, taşınması, elenmesi ve geri kazanıma hazırlanması için entegre tesis çözümleri sunuyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Geri Dönüşüm ve Atık Yönetimi İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni geri dönüşüm yatırımlarında ve mevcut tesis revizyonlarında atık karakteri, operasyon güvenliği ve son ürün hedefini birlikte planlıyoruz.",
    solutionCards: sharedSolutionCards.recycling,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Geri Dönüşüm ve Atık Yönetimi İçin Kullanılan Makinalar",
    machinesDescription:
      "Atık işleme hatlarında kullanılan ekipmanlar, atığın heterojen yapısına ve hedef geri kazanım modeline göre birlikte seçilmelidir.",
    machineCards: [
      { title: "Shredder Sistemleri", text: "Heterojen atıkların ilk kademe küçültülmesini sağlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { title: "Kırıcılar ve Parçalayıcılar", text: "Farklı fraksiyonları sonraki ayırma aşamasına uygun hale getirir.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Atık fraksiyonlarını kontrollü şekilde ayırır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Hat içi transferi dengeli ve güvenli biçimde sürdürür.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Bunker ve Besleme Sistemleri", text: "Atığın kontrollü kabulü ve beslenmesini destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Toz Toplama Sistemleri", text: "Tozlu proses noktalarında emisyon kontrolü ve saha güvenliği sağlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Geri Dönüşüm ve Atık Yönetimi Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Geri dönüşüm tesislerinde atık tipi, küçültme, ayırma ve kapasite planlamasıyla ilgili en sık sorulan soruları bir araya getirdik.",
    faqs: [
      { question: "Geri dönüşüm tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; atık akışının yoğunluğu, giriş boyutu, hedef son ürün ve çalışma senaryosuna göre belirlenir." },
      { question: "Shredder ile kırıcı birlikte kullanılmalı mı?", answer: "Bu karar, atığın boyutu, yapısı ve sonraki proses adımlarının ihtiyacına göre verilir." },
      { question: "Aynı hatta farklı atık türleri işlenebilir mi?", answer: "Evet, uygun ön ayırma ve modüler proses kurgusuyla farklı atık fraksiyonları aynı tesiste yönetilebilir." },
      { question: "Toz ve koku kontrolü geri dönüşüm tesislerinde nasıl çözülür?", answer: "Tozlu ve organik akış üreten noktalar için emiş, filtrasyon ve saha akış planı birlikte projelendirilir." },
      { question: "Mevcut geri dönüşüm hattı modernize edilebilir mi?", answer: "Evet, kapasite, güvenlik ve ürün kalitesi açısından mevcut hat üzerinde revizyon yapılabilir." },
      { question: "Anahtar teslim geri dönüşüm tesisi kuruyor musunuz?", answer: "Evet, besleme, küçültme, eleme, transfer ve yardımcı ekipmanları tek tesis mantığında kurabiliyoruz." },
    ],
    formTitle: "Geri Dönüşüm ve Atık Yönetimi için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz atık tipi, hedef ürün, kapasite ve saha koşullarına göre size uygun geri dönüşüm hattını birlikte netleştirelim.",
  },
  "atik-su-camuru-ve-aritma-cozumleri": {
    overviewEyebrow: "Atık Su Çamuru Çözümleri",
    overviewTitle: "Hangi atık su çamuru çözümlerini kuruyoruz?",
    overviewDescription:
      "Pro Makina olarak atık su arıtma tesislerinden çıkan evsel ve endüstriyel / OSB kaynaklı çamurların; hacminin azaltılması, nem oranının düşürülmesi, kurutulması, stabilize edilmesi ve bertaraf ya da değerlendirme süreçlerine uygun hale getirilmesi için makina ve proses çözümleri sunuyoruz. Çalışma kapsamımız arıtma tesisinin kendisi değil; arıtma sonrası oluşan çamurun susuzlaştırılması, kurutulması, kapalı veya açık sistem kurutma hatlarında işlenmesi, kompost ya da ATY hazırlama süreçlerine uygun şekilde değerlendirilmesidir. Çamurun kaynağı, nem oranı, organik madde yapısı, nihai kullanım amacı, bertaraf senaryosu ve saha şartlarına göre özel proses akışı, ekipman seçimi ve tesis yerleşimi hazırlıyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Atık Su Çamuru Çözümleri İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Evsel ve OSB / endüstriyel çamur karakterine, giriş nemine, hedef çıkış kuruluğuna ve son ürün senaryosuna göre projeye özel kurgu geliştiriyoruz.",
    solutionCards: [
      { title: "Kapalı Sistem Çamur Kurutma", text: "Koku kontrolü, emisyon yönetimi ve çevresel uyum gerektiren projelerde kapalı sistem kurutma altyapısı planlıyoruz." },
      { title: "Açık Sistem Çamur Kurutma", text: "Uygun saha şartlarında daha yalın akış mantığıyla açık sistem kurutma çözümleri kurguluyoruz." },
      { title: "Atık Su Çamurundan ATY Hazırlama", text: "Kurutulmuş çamurun alternatif yakıt senaryolarına hazırlanması için ürün stabilitesi, tane boyutu ve sevkiyat mantığını birlikte ele alıyoruz." },
      { title: "Atık Su Çamurundan Kompost Üretimi", text: "Uygun organik fraksiyon, analiz ve proses şartlarında çamurun kompost değerlendirme senaryolarını teknik olarak planlıyoruz." },
    ],
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Atık Su Çamuru Çözümleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Çamur işleme projelerinde besleme, transfer, kurutma, emisyon kontrolü ve son ürün hazırlama ekipmanları aynı proses mantığında birlikte değerlendirilmelidir.",
    machineCards: [
      { title: "Kurutma Tamburu", text: "Yüksek nemli çamurun hedef çıkış kuruluğuna indirilmesinde ana termal ekipman rolü üstlenir.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { title: "Kompost Tamburu", text: "Uygun karışım senaryolarında organik fraksiyonla birlikte kompostlaştırma ve olgunlaştırma adımlarını destekler.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Karıştırma Sistemleri", text: "Stabilizasyon, homojenizasyon veya yardımcı akışların dengelenmesi gereken noktalarda kullanılır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Bunker ve Besleme Sistemleri", text: "Yapışkan ve değişken akışlı çamurların hatta kontrollü alınmasını ve tamponlanmasını destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Kurutma öncesi ve sonrası ürün hareketini saha içinde dengeli biçimde sürdürür.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { title: "Vidalı Helezonlar", text: "Susuzlaştırılmış veya yarı kuru çamurun kontrollü ve kompakt transferinde güvenli akış sağlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Kurutma sonrası yabancı madde ayrımı ve son ürün fraksiyon kontrolünü destekler.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kırıcılar ve Parçalayıcılar", text: "ATY hazırlama veya son ürün kondisyonu gereken senaryolarda boyut küçültme ve homojenizasyon desteği sunar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Toz Toplama Sistemleri", text: "Kurutma ve son ürün hazırlama adımlarında toz ve emisyon kontrolü sağlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Paketleme ve Dolum Sistemleri", text: "Kurutulmuş ürünün torbalama, big bag veya sevkiyat öncesi hazırlanmasını tamamlar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Silo / Depolama Sistemleri", text: "Kurutulmuş veya stabilize edilmiş ürünün geçici stoklanması ve sevkiyat öncesi yönetimini destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Dozajlama Sistemleri", text: "Karışım, katkı veya son ürün hazırlama senaryolarında kontrollü ve izlenebilir besleme sağlar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Atık Su Çamuru Çözümleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Çamur işleme projelerinde proses sınırı, kurutma yaklaşımı, değerlendirme seçenekleri ve saha entegrasyonuyla ilgili en sık sorulan başlıkları derledik.",
    faqs: [
      { question: "Pro Makina atık su arıtma tesisi kuruyor mu?", answer: "Hayır. Pro Makina atık su arıtma tesisi kurmaz; arıtma sonrası oluşan çamurun susuzlaştırılması, kurutulması, stabilize edilmesi ve son ürün veya bertaraf formuna hazırlanması için proses ve makina çözümleri sunar." },
      { question: "Evsel ve endüstriyel çamurlar aynı hatta yönetilebilir mi?", answer: "Bu karar çamurun analizi, kimyasal içeriği, nemi, yapışkanlığı ve hedef son ürün senaryosuna göre verilir. Her proje için ayrı teknik değerlendirme yapılmalıdır." },
      { question: "Susuzlaştırma sonrası kurutma her projede gerekli midir?", answer: "Hayır. Hedeflenen son kullanım, taşıma maliyeti, hacim azaltma ihtiyacı ve mevzuat gereklilikleri kurutma ihtiyacını belirler." },
      { question: "Kapalı ve açık sistem kurutma arasında nasıl seçim yapılır?", answer: "Seçim; koku yükü, çevresel hassasiyet, saha yerleşimi, enerji altyapısı ve işletme modeline göre belirlenir." },
      { question: "Kurutulmuş çamur ATY, kompost veya granül ürüne dönüştürülebilir mi?", answer: "Atık su çamurunun kompost, ATY veya farklı değerlendirme süreçlerinde kullanılabilirliği; çamurun analiz değerleri, mevzuat şartları ve nihai kullanım senaryosuna göre teknik olarak değerlendirilmelidir." },
      { question: "Mevcut tesise sonradan çamur işleme hattı eklenebilir mi?", answer: "Evet. Mevcut saha yerleşimi, çamur çıkış noktası, enerji altyapısı ve çevresel kontrol gereksinimleri incelenerek sonradan entegre hat planlanabilir." },
    ],
    formTitle: "Atık Su Çamuru Çözümleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Çamur kaynağı, giriş nemi, hedef çıkış kuruluğu ve değerlendirme senaryosuna göre size uygun çamur işleme çözümünü birlikte netleştirelim.",
  },
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
    overviewEyebrow: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    overviewTitle: "Hangi yem ve dökme katı malzeme sistemlerini kuruyoruz?",
    overviewDescription:
      "Yem, premiks, mineral katkı ve benzeri dökme katı ürünlerde depolama, taşıma, dozajlama, eleme, karıştırma ve paketleme süreçleri için sistem çözümleri geliştiriyoruz.",
    solutionsEyebrow: "Çözüm Kurgusu",
    solutionsTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri İçin Sunduğumuz Çözümler",
    solutionsDescription:
      "Yeni yatırım ve mevcut tesis revizyonlarında ürün davranışı, dozaj hassasiyeti, hijyen ve bakım erişimini birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.bulk,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Depolama, dozajlama, taşıma ve son hat ekipmanları bir arada planlandığında dökme katı malzeme tesisleri dengeli çalığır.",
    machineCards: [
      { title: "Silo ve Bunkerler", text: "Ürünün güvenli depolanması ve kontrollü beslenmesi için temel altyapıyı oluşturur.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Yatay transfer noktalarında dengeli ve temiz akış sağlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Vidalı Helezonlar", text: "Toz ve granül akışlarda kontrollü, kompakt transfer imkanı sunar.", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { title: "Kovalı Elevatörler", text: "Dikey taşıma gereken proses noktalarında ürün sürekliliğini destekler.", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
      { title: "Dozajlama Sistemleri", text: "Reçete ve oran hassasiyeti gereken hatlarda doğru besleme sağlar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Paketleme Sistemleri", text: "Son ürünün torbalama, big bag veya sevkiyat öncesi hazırlanmasını tamamlar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Depolama, dozajlama, taşıma ve son ürün lojistişiyle ilgili en sık sorulan soruları tek yerde topladık.",
    faqs: [
      { question: "Dökme katı malzeme hattı kapasitesi nasıl belirlenir?", answer: "Kapasite; ürün yoğunluğu, akış davranışı, çalışma süresi ve hedef son ürün modeline göre belirlenir." },
      { question: "Helezon mu bant konveyör mü tercih edilmelidir?", answer: "Seçim; ürünün akışkanlığı, tozuma riski, mesafe ve bakım beklentisine göre yapılır." },
      { question: "Aynı hatta birden fazla ürün işlenebilir mi?", answer: "Evet, uygun temizlik ve reçete kurgusuyla çoklu ürün altyapısı oluşturulabilir." },
      { question: "Dozajlama sistemleri her tesiste gerekli midir?", answer: "Hayır, dozajlama ihtiyaçı ürün reçetesi, kalite beklentisi ve proses mantığına göre belirlenir." },
      { question: "Paketleme hattı sonradan eklenebilir mi?", answer: "Evet, yerleşim ve kapasite buna uygun planlanmışsa paketleme sistemleri sonradan entegre edilebilir." },
      { question: "Anahtar teslim kurulum hizmeti veriyor musunuz?", answer: "Evet, silo, bunker, transfer, dozajlama ve paketleme ekipmanlarını aynı tesis mantığında kurabiliyoruz." },
    ],
    formTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Seçtişiniz ürün tipi, kapasite, dozaj hassasiyeti ve saha ihtiyacına göre size uygun proses ve makine çözümünü birlikte netleştirelim.",
  },
};
