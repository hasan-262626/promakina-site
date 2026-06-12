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
  solutionCards: SectorCategoryInfoCard[];
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
      text: "Atık tipi, nem seviyesi, organik madde dengesi ve hedef son ürüne göre kompost hattının proses akı�xını planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Kapasite, saha ko�xulları, ekipman ihtiyacı ve yatırım adımlarını netle�xtiren teknik ön de�xerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut kompost ve organik atık hatlarında verim, kalite, koku kontrolü ve son ürün akı�xını iyile�xtiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, tambur süresi, eleme ve son ürün yönlendirmesini proses verisine dayalı otomasyon kurgusuyla destekliyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Atık karakterizasyonu, ürün hedefi, saha yerle�ximi ve proses güvenli�xi konularında teknik yönlendirme sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme, tambur, eleme, stoklama ve çevresel kontrol ekipmanlarını entegre tesis kurgusu içinde kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut sahalarda kapasiteyi büyütmek için darbo�xaz olu�xturan besleme, kurutma ve son ürün noktalarını yeniden de�xerlendiriyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan kompost tesislerinde proses sorunlarını ve ekipman yetersizliklerini analiz ederek saha uyumlu revizyon önerileri geli�xtiriyoruz.",
    },
  ],
  biogas: [
    {
      title: "Proses Tasarımı",
      text: "Organik girdi tipi, kuru madde oranı, besleme modeli ve yan ürün yönetimine göre biyogaz proses kurgusunu planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Besleme kapasitesi, ekipman ihtiyacı, saha akı�xı ve entegrasyon senaryoları için teknik ön de�xerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut biyogaz hatlarında besleme, transfer, ön hazırlık ve digestat yönetimi tarafında iyile�xtirme çözümleri sunuyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Sürekli besleme, karı�xtırma, akı�x kontrolü ve proses izlenebilirli�xi için otomasyon altyapısı kurguluyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Girdi karakteri, saha yerle�ximi, proses güvenli�xi ve biyogaz sonrası ürün de�xerlendirme ba�xlıklarında teknik destek sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme bunkerleri, transfer hatları, reaktör ba�xlantıları ve yardımcı ekipmanları entegre tesis mantı�xında kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde besleme süreklili�xi ve ekipman kapasitesini artırmak için darbo�xaz analizleri yapıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan biyogaz tesislerinde proses dengesini bozan ekipman ve akı�x sorunlarını sahaya özel revizyonlarla iyile�xtiriyoruz.",
    },
  ],
  mining: [
    {
      title: "Proses Tasarımı",
      text: "Malzeme sertli�xi, tane boyutu, nem ve hedef fraksiyonlara göre kırma, eleme ve kurutma akı�xını planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Kapasite, saha yerle�ximi, enerji ihtiyacı ve ekipman sıralamasını netle�xtiren teknik ön çalı�xma hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut maden i�xleme hatlarında kapasite, ürün kalitesi ve bakım eri�ximi açısından iyile�xtirme çözümleri geli�xtiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, kırma-eleme dengesi, toz kontrolü ve son ürün yönlendirmesi için proses takibini güçlendiriyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Malzeme davranı�xı, a�xındırıcılık, fraksiyon hedefi ve saha ko�xulları konularında teknik yönlendirme sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Kırıcı, elek, konveyör, bunker ve toz toplama ekipmanlarını tek hat mantı�xında entegre ediyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda kapasite artı�xı için kırma kademeleri, transfer hatları ve stok noktalarını yeniden de�xerlendiriyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan tesislerde bakım zorlu�xu, dengesiz besleme ve ürün sapmalarına kar�xı saha odaklı revizyonlar planlıyoruz.",
    },
  ],
  chemistry: [
    {
      title: "Proses Tasarımı",
      text: "�Srün viskozitesi, reaksiyon ihtiyacı, sıcaklık kontrolü ve reçete yapısına göre kimyasal üretim akı�xını planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Reaktör hacmi, tank ihtiyacı, yardımcı akı�xlar ve dolum altyapısı için teknik ön de�xerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut kimya ve proses hatlarında karı�xtırma, çözündürme, filtrasyon ve dolum performansını iyile�xtiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Dozajlama, pH takibi, sıcaklık kontrolü ve reçete yönetimi için otomasyon kurgusu geli�xtiriyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Malzeme uyumu, proses güvenli�xi, batch mantı�xı ve saha organizasyonu konularında teknik destek sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Reaktör, tank, transfer, stoklama ve dolum sistemlerini entegre tesis mantı�xında kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde tank hacmi, karı�xtırma gücü ve son hat kapasitesini büyütmek için iyile�xtirme önerileri sunuyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan proses hatlarında kararsız üretim, filtrasyon yükü ve ekipman yetersizliklerini analiz ederek revizyon çözümleri geli�xtiriyoruz.",
    },
  ],
  recycling: [
    {
      title: "Proses Tasarımı",
      text: "Atık kompozisyonu, hedef ürün çıkı�xı ve saha lojisti�xine göre kırma, ayırma ve transfer akı�xını planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Kapasite, atık tipi, ekipman sıralaması ve operasyon modeli için teknik ön de�xerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut geri dönü�xüm hatlarında küçültme, ayırma ve son ürün hazırlama performansını artırıyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme dengesi, kırıcı yükü, eleme akı�xı ve saha güvenli�xi için izlenebilir proses kurgusu olu�xturuyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Atık karakteri, son ürün hedefi, saha güvenli�xi ve i�xletme modeli ba�xlıklarında teknik destek sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Shredder, konveyör, elek ve yardımcı hatları tek bir geri kazanım mantı�xında entegre ediyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda besleme kapasitesi, küçültme kademeleri ve son ürün akı�xını büyütmek için saha analizi yapıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan tesislerde darbo�xaz olu�xturan ayırma, ta�xıma ve kırma noktalarını revizyon çözümleriyle iyile�xtiriyoruz.",
    },
  ],
  sludge: [
    {
      title: "Proses Tasarımı",
      text: "�!amurun giri�x nemi, akı�x davranı�xı ve hedef çıkı�x ko�xuluna göre kurutma ve destek proseslerini planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Enerji ihtiyacı, ekipman sıralaması, saha kısıtları ve son ürün modeli için teknik ön çalı�xma hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut çamur i�xleme hatlarında besleme, kurutma, koku kontrolü ve ürün yönetimini iyile�xtiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Besleme, sıcak hava, kurutma süresi ve emisyon kontrolünü izleyen otomasyon yapısı kurguluyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "Nem, yapı�xkanlık, koku, bertaraf veya son kullanım hedefi konularında teknik yönlendirme sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Besleme bunkerleri, kurutma tamburu, filtre ve son ürün yönetim ekipmanlarını entegre hat olarak kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut tesislerde kurutma verimini ve ürün çıkı�x kapasitesini artırmak için kritik darbo�xazları analiz ediyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan çamur tesislerinde enerji, koku, toz ve ürün akı�xı kaynaklı sorunlar için revizyon çözümleri geli�xtiriyoruz.",
    },
  ],
  bulk: [
    {
      title: "Proses Tasarımı",
      text: "�Srün yo�xunlu�xu, akı�xkanlık, tozuma ve hedef kapasiteye göre depolama, dozajlama ve transfer akı�xını planlıyoruz.",
    },
    {
      title: "�n Fizibilite",
      text: "Silo hacmi, ta�xıma ekipmanları, dozaj hassasiyeti ve son hat ihtiyacını netle�xtiren teknik ön de�xerlendirme hazırlıyoruz.",
    },
    {
      title: "Modernizasyon",
      text: "Mevcut yem ve dökme katı hatlarında akı�x kararlılı�xı, kapasite ve son ürün lojisti�xini iyile�xtiriyoruz.",
    },
    {
      title: "Otomasyon ve Proses Yönetimi",
      text: "Tartım, dozajlama, transfer ve son ürün yönlendirmesi için proses verisini izleyen otomasyon yapısı kuruyoruz.",
    },
    {
      title: "Danı�xmanlık",
      text: "�Srün davranı�xı, köprüle�xme riski, hijyen ve bakım eri�ximi ba�xlıklarında teknik destek sa�xlıyoruz.",
    },
    {
      title: "Anahtar Teslim Kurulum",
      text: "Silo, bunker, konveyör, elevatör, dozajlama ve paketleme ekipmanlarını entegre hat olarak kuruyoruz.",
    },
    {
      title: "Kapasite Artırımı",
      text: "Mevcut hatlarda ta�xıma, stoklama ve paketleme darbo�xazlarını gidererek kapasite büyütme planı hazırlıyoruz.",
    },
    {
      title: "Mevcut Tesis Revizyonu",
      text: "�!alı�xan tesislerde akı�x problemleri, sızdırmazlık ve dozaj hassasiyeti sorunlarını revizyon çözümleriyle iyile�xtiriyoruz.",
    },
  ],
} as const;

export const sectorCategoryConfigs: Record<string, SectorCategoryConfig> = {
  "kompost-ve-organik-atik-tesisleri": {
    overviewEyebrow: "Kompost ve Organik Atık Tesisleri",
    overviewTitle: "Hangi kompost ve organik atık tesislerini kuruyoruz?",
    overviewDescription:
      "Organik atıkların kontrollü ayrı�xtırılması, karı�xtırılması, olgunla�xtırılması, kurutulması, elenmesi ve son ürüne hazırlanması için sahaya uygun tesis çözümleri geli�xtiriyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Kompost ve Organik Atık Tesisleri İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni yatırım, mevcut saha revizyonu, kapasite artırımı ve çevresel kontrol ihtiyaçlarına göre kompost prosesini ekipmanla birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.compost,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Kompost ve Organik Atık Tesisleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Kompost hatlarında besleme, tambur, eleme, transfer ve son ürün a�xamaları aynı proses mantı�xında seçilmelidir.",
    machineCards: [
      { title: "Kompost Tamburu", text: "Organik materyalin kontrollü olgunla�xması ve homojen ilerlemesi için kullanılır.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Kurutma Tamburu", text: "Yüksek nemli akı�xlarda hacim azaltma ve ürün kondisyonu sa�xlar.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Kompost ürününü istenen fraksiyonlara ayırır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kırıcılar ve Parçalayıcılar", text: "Heterojen atıkların hazırlanmasında boyut küçültme sa�xlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Bunker ve Besleme Sistemleri", text: "Organik girdinin hatta dengeli ve güvenli biçimde alınmasını destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Hazırlama, tambur ve son ürün noktaları arasında kesintisiz transfer kurar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Paketleme ve Dolum Sistemleri", text: "Son ürünün torbalama veya sevkiyat öncesi hazırlanmasını tamamlar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kompost ve Organik Atık Tesisleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Kompost yatırımlarında atık tipi, koku kontrolü, kapasite ve son ürün yönetimiyle ilgili en sık sorulan ba�xlıkları bir araya getirdik.",
    faqs: [
      { question: "Kompost tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; günlük atık giri�xi, organik madde oranı, hedef ürün tipi ve çalı�xma saatine göre hesaplanır." },
      { question: "Farklı organik atıklar aynı hatta i�xlenebilir mi?", answer: "Evet, atık karakterizasyonu ve uygun ön hazırlık kurgusuyla farklı organik fraksiyonlar aynı tesiste yönetilebilir." },
      { question: "Koku kontrolü kompost tesislerinde nasıl planlanır?", answer: "Koku kontrolü; besleme noktaları, tambur alanı, olgunla�xtırma ve filtreleme altyapısı birlikte de�xerlendirilerek projelendirilir." },
      { question: "Mevcut kompost hattı revize edilerek kapasite artırılabilir mi?", answer: "Evet, besleme, tambur süresi, eleme ve son ürün akı�xı analiz edilerek revizyon planı hazırlanabilir." },
      { question: "Kompost sonrasında granül ürün hattı eklenebilir mi?", answer: "Evet, hedef ürün yapısına göre kompost sonrası kurutma, eleme ve granülasyon entegrasyonu planlanabilir." },
      { question: "Anahtar teslim kurulum hizmeti veriyor musunuz?", answer: "Evet, proses tasarımından ekipman imalatına ve devreye almaya kadar tüm süreci tek merkezden yönetebiliyoruz." },
    ],
    formTitle: "Kompost ve Organik Atık Tesisleri için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz atık tipi, kapasite, nem oranı ve saha ihtiyacına göre size uygun proses, makina ve tesis çözümünü birlikte netle�xtirelim.",
  },
  "enerji-ve-biyogaz-sistemleri": {
    overviewEyebrow: "Enerji ve Biyogaz Sistemleri",
    overviewTitle: "Hangi enerji ve biyogaz sistemlerini kuruyoruz?",
    overviewDescription:
      "Organik atık, tarımsal atık ve gıda atıklarının biyogaz prosesine uygun biçimde hazırlanması, beslenmesi, reaktör ba�xlantıları ve yan ürün yönetimi için entegre çözümler sunuyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Enerji ve Biyogaz Sistemleri İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni biyogaz yatırımlarında ve mevcut hat revizyonlarında proses süreklili�xi, saha güvenli�xi ve yan ürün de�xerlendirme adımlarını birlikte planlıyoruz.",
    solutionCards: sharedSolutionCards.biogas,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Enerji ve Biyogaz Sistemleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Biyogaz süreçlerinde kullanılan ekipmanlar, besleme süreklili�xi ve girdi karakterine uyum sa�xlayacak �xekilde bir bütün halinde seçilmelidir.",
    machineCards: [
      { title: "Reaktörler ve Tanklar", text: "Karı�xım, bekleme ve proses dengesi için temel ekipman grubunu olu�xturur.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Bunker ve Besleme Sistemleri", text: "Organik girdinin hatta kararlı ve kontrollü beslenmesini sa�xlar.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Dozajlama Sistemleri", text: "Belirlenen debiyle hassas ve izlenebilir besleme imkanı sunar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Helezon ve Konveyör Hatları", text: "Nemli ve lifli akı�xlarda güvenli transfer altyapısı kurar.", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { title: "Karı�xtırıcılı Reaktörler", text: "Homojen besleme ve yardımcı karı�xım akı�xlarında proses kararlılı�xı sa�xlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Toz ve Gaz Kontrol Sistemleri", text: "�!evresel kontrol ve saha güvenli�xi için destek altyapısı sa�xlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Enerji ve Biyogaz Sistemleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Biyogaz ve enerji projelerinde girdi tipi, besleme modeli, entegrasyon ve kapasite konularında en sık sorulan soruları derledik.",
    faqs: [
      { question: "Biyogaz tesisi kapasitesi hangi verilere göre belirlenir?", answer: "Kapasite; günlük girdi miktarı, kuru madde oranı, besleme senaryosu ve hedef enerji modeline göre hesaplanır." },
      { question: "Farklı organik girdiler aynı biyogaz hattında kullanılabilir mi?", answer: "Evet, uygun ön hazırlık ve dozajlama kurgusuyla farklı girdiler tek proses içinde yönetilebilir." },
      { question: "Mevcut biyogaz tesisine yeni besleme sistemi eklenebilir mi?", answer: "Evet, mevcut saha ve reaktör ba�xlantıları analiz edilerek yeni besleme ekipmanları entegre edilebilir." },
      { question: "Digestat yönetimi proje kapsamına dahil edilebilir mi?", answer: "Evet, digestatın kurutulması, ta�xınması, ayrılması veya kompost entegrasyonu proje kapsamına alınabilir." },
      { question: "Koku ve gaz yönetimi nasıl planlanır?", answer: "Emisyon kaynakları, transfer noktaları ve kapalı alan kullanımı birlikte de�xerlendirilerek çevresel kontrol altyapısı kurgulanır." },
      { question: "Anahtar teslim biyogaz destek hatları kuruyor musunuz?", answer: "Evet, besleme, transfer, bunker, yardımcı tank ve proses entegrasyonu dahil anahtar teslim çözümler sunabiliyoruz." },
    ],
    formTitle: "Enerji ve Biyogaz Sistemleri için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz girdi tipi, günlük kapasite, saha ko�xulları ve entegrasyon ihtiyacına göre size uygun biyogaz proses çözümünü birlikte netle�xtirelim.",
  },
  "madencilik-ve-mineral-isleme": {
    overviewEyebrow: "Madencilik ve Mineral İ�xleme",
    overviewTitle: "Hangi madencilik ve mineral i�xleme tesislerini kuruyoruz?",
    overviewDescription:
      "Silis kumu, kuvars, kireç ta�xı, dolomit, perlit ve benzeri mineral ürünlerde kırma, eleme, kurutma, ta�xıma ve toz toplama süreçlerini sahaya uygun �xekilde kurguluyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Madencilik ve Mineral İ�xleme İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni tesis yatırımlarında ve mevcut hat revizyonlarında malzeme karakteri, kapasite ve bakım kolaylı�xını birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.mining,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Madencilik ve Mineral İ�xleme İçin Kullanılan Makinalar",
    machinesDescription:
      "Kırma, eleme, kurutma ve transfer ekipmanları aynı kapasite mantı�xında seçildi�xinde tesis dengeli ve sürdürülebilir çalı�xır.",
    machineCards: [
      { title: "Kırıcılar ve Parçalayıcılar", text: "Primer ve sekonder küçültme adımlarında malzemeyi hedef fraksiyona hazırlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "�Srünü istenen boyutlara ayırarak kalite standardını destekler.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Kurutma Tamburu", text: "Nemli mineral akı�xlarda kontrollü kurutma sa�xlar.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Bantlı Konveyörler", text: "Hat içi transferi kesintisiz ve güvenli biçimde tamamlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Bunker ve Besleme Sistemleri", text: "Kırıcı ve elek hatlarına kararlı malzeme beslemesi sa�xlar.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Toz Toplama Sistemleri", text: "Tozlu proses noktalarında emisyon kontrolü ve saha güvenli�xi sa�xlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Madencilik ve Mineral İ�xleme Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Maden tesislerinde kapasite, ürün fraksiyonu, toz kontrolü ve kurutma gereksinimleriyle ilgili en sık sorulan ba�xlıkları topladık.",
    faqs: [
      { question: "Maden i�xleme tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; giri�x tane boyutu, ürün fraksiyonu, çalı�xma süresi ve saha besleme modeline göre belirlenir." },
      { question: "Primer ve sekonder kırıcı seçimi neye göre yapılır?", answer: "Malzeme sertli�xi, a�xındırıcılık, giri�x boyutu ve hedef çıkı�x ölçüsü birlikte de�xerlendirilir." },
      { question: "Kurutma her mineral hattında gerekli midir?", answer: "Hayır, kurutma ihtiyacı malzeme nemi, stoklama ko�xulları ve son ürün hedeflerine göre belirlenir." },
      { question: "Toz toplama sistemi neden kritik hale gelir?", answer: "İnce ürün ve kapalı alan uygulamalarında emisyon kontrolü hem çevresel uyum hem de bakım güvenli�xi için önemlidir." },
      { question: "Mevcut kırma-eleme hattı modernize edilebilir mi?", answer: "Evet, mevcut ekipman parkı analiz edilerek kapasite ve ürün kalitesi odaklı revizyon planı hazırlanabilir." },
      { question: "Anahtar teslim maden i�xleme hattı kuruyor musunuz?", answer: "Evet, kırıcıdan toz toplama sistemine kadar tüm makine gruplarını aynı proses mantı�xında kurabiliyoruz." },
    ],
    formTitle: "Madencilik ve Mineral İ�xleme için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz malzeme tipi, hedef fraksiyon, nem oranı ve saha ihtiyacına göre size uygun maden i�xleme hattını birlikte netle�xtirelim.",
  },
  "kimya-ve-proses-endustrisi": {
    overviewEyebrow: "Kimya ve Proses Endüstrisi",
    overviewTitle: "Hangi kimya ve proses tesislerini kuruyoruz?",
    overviewDescription:
      "Kimyasal çözelti hazırlama, sıvı gübre, biyostimülan, özel proses sıvıları ve endüstriyel karı�xımlarda reaktör, tank, çözündürme, filtrasyon ve dolum çözümleri geli�xtiriyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Kimya ve Proses Endüstrisi İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni yatırım ve mevcut tesis revizyonlarında proses güvenli�xi, reçete yönetimi ve ürün standardını birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.chemistry,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Kimya ve Proses Endüstrisi İçin Kullanılan Makinalar",
    machinesDescription:
      "Kimyasal proseslerde ekipman seçimi yalnızca kapasiteye göre de�xil; malzeme uyumu, güvenlik ve ürün kararlılı�xına göre yapılmalıdır.",
    machineCards: [
      { title: "Reaktörler ve Tanklar", text: "Kimyasal üretimde ana proses gövdesini olu�xturan temel ekipman grubudur.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "�!özündürme Tankları", text: "Katı ve sıvı hammaddelerin formülasyona hazırlanmasını sa�xlar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari" },
      { title: "Karı�xtırıcılı Reaktörler", text: "Homojen karı�xım ve kontrollü reaksiyon süreçlerinde görev alır.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler" },
      { title: "Stok Tankları", text: "Ara stoklama, dengeleme ve dolum öncesi tampon kapasite sunar.", href: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari" },
      { title: "Dozajlama Sistemleri", text: "Reçete bazlı hassas besleme ve kontrollü proses akı�xı sa�xlar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Sıvı Dolum Sistemleri", text: "�~i�xe, bidon veya farklı ambalaj tipleri için kontrollü son hat sunar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kimya ve Proses Endüstrisi Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Kimya tesislerinde reaktör seçimi, reçete yönetimi, malzeme uyumu ve dolum altyapısı hakkında en sık sorulan ba�xlıkları derledik.",
    faqs: [
      { question: "Kimya tesisinde hangi ekipmanlar birlikte planlanmalıdır?", answer: "Reaktör, tank, çözündürme, dozajlama, filtrasyon ve dolum ekipmanları aynı proses mantı�xında de�xerlendirilmelidir." },
      { question: "Batch ve sürekli üretim için aynı altyapı kullanılabilir mi?", answer: "Bazı tesislerde hibrit çözümler kurulabilir; ancak ekipman seçimi ürün yapısı ve üretim senaryosuna göre netle�xtirilmelidir." },
      { question: "Paslanmaz malzeme seçimi neye göre yapılır?", answer: "Kimyasal dayanım, hijyen, sıcaklık ve korozyon riski birlikte de�xerlendirilerek uygun malzeme seçilir." },
      { question: "Mevcut tesise yeni reaktör veya tank eklenebilir mi?", answer: "Evet, saha akı�xı ve mevcut proses dengesi incelenerek yeni ekipman entegre edilebilir." },
      { question: "Otomasyon ve reçete yönetimi proje kapsamına dahil midir?", answer: "Evet, dozajlama, pH, sıcaklık ve üretim izlenebilirli�xi gerektiren proseslerde otomasyon çözümleri proje kapsamına alınır." },
      { question: "Anahtar teslim kimyasal üretim hattı kuruyor musunuz?", answer: "Evet, proses tasarımı, ekipman imalatı, saha kurulumu ve devreye alma dahil anahtar teslim çözümler sunabiliyoruz." },
    ],
    formTitle: "Kimya ve Proses Endüstrisi için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz ürün tipi, batch yapısı, kapasite ve malzeme uyumu ihtiyacına göre size uygun proses ve makine çözümünü birlikte netle�xtirelim.",
  },
  "geri-donusum-ve-atik-yonetimi": {
    overviewEyebrow: "Geri Dönü�xüm ve Atık Yönetimi",
    overviewTitle: "Hangi geri dönü�xüm ve atık yönetimi tesislerini kuruyoruz?",
    overviewDescription:
      "Evsel ve endüstriyel atıkların parçalanması, ayrı�xtırılması, ta�xınması, elenmesi ve geri kazanıma hazırlanması için entegre tesis çözümleri sunuyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Geri Dönü�xüm ve Atık Yönetimi İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni geri dönü�xüm yatırımlarında ve mevcut tesis revizyonlarında atık karakteri, operasyon güvenli�xi ve son ürün hedefini birlikte planlıyoruz.",
    solutionCards: sharedSolutionCards.recycling,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Geri Dönü�xüm ve Atık Yönetimi İçin Kullanılan Makinalar",
    machinesDescription:
      "Atık i�xleme hatlarında kullanılan ekipmanlar, atı�xın heterojen yapısına ve hedef geri kazanım modeline göre birlikte seçilmelidir.",
    machineCards: [
      { title: "Shredder Sistemleri", text: "Heterojen atıkların ilk kademe küçültülmesini sa�xlar.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { title: "Kırıcılar ve Parçalayıcılar", text: "Farklı fraksiyonları sonraki ayırma a�xamasına uygun hale getirir.", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Atık fraksiyonlarını kontrollü �xekilde ayırır.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Hat içi transferi dengeli ve güvenli biçimde sürdürür.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Bunker ve Besleme Sistemleri", text: "Atı�xın kontrollü kabulü ve beslenmesini destekler.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Toz Toplama Sistemleri", text: "Tozlu proses noktalarında emisyon kontrolü ve saha güvenli�xi sa�xlar.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Geri Dönü�xüm ve Atık Yönetimi Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Geri dönü�xüm tesislerinde atık tipi, küçültme, ayırma ve kapasite planlamasıyla ilgili en sık sorulan soruları bir araya getirdik.",
    faqs: [
      { question: "Geri dönü�xüm tesisi kapasitesi nasıl belirlenir?", answer: "Kapasite; atık akı�xının yo�xunlu�xu, giri�x boyutu, hedef son ürün ve çalı�xma senaryosuna göre belirlenir." },
      { question: "Shredder ile kırıcı birlikte kullanılmalı mı?", answer: "Bu karar, atı�xın boyutu, yapısı ve sonraki proses adımlarının ihtiyacına göre verilir." },
      { question: "Aynı hatta farklı atık türleri i�xlenebilir mi?", answer: "Evet, uygun ön ayırma ve modüler proses kurgusuyla farklı atık fraksiyonları aynı tesiste yönetilebilir." },
      { question: "Toz ve koku kontrolü geri dönü�xüm tesislerinde nasıl çözülür?", answer: "Tozlu ve organik akı�x üreten noktalar için emi�x, filtrasyon ve saha akı�x planı birlikte projelendirilir." },
      { question: "Mevcut geri dönü�xüm hattı modernize edilebilir mi?", answer: "Evet, kapasite, güvenlik ve ürün kalitesi açısından mevcut hat üzerinde revizyon yapılabilir." },
      { question: "Anahtar teslim geri dönü�xüm tesisi kuruyor musunuz?", answer: "Evet, besleme, küçültme, eleme, transfer ve yardımcı ekipmanları tek tesis mantı�xında kurabiliyoruz." },
    ],
    formTitle: "Geri Dönü�xüm ve Atık Yönetimi için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz atık tipi, hedef ürün, kapasite ve saha ko�xullarına göre size uygun geri dönü�xüm hattını birlikte netle�xtirelim.",
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
      { title: "Çamur Granül / Pelet Hazırlama", text: "Kurutulmuş çamurun granül veya pelet formuna hazırlanmasına yönelik son ürün kurgusu, transfer ve stoklama çözümleri geliştiriyoruz." },
      { title: "Atık Su Çamuru Bertaraf ve Değerlendirme Prosesleri", text: "Kurutulmuş veya stabilize edilmiş çamurun bertaraf, stoklama, sevkiyat veya geri kazanım alternatiflerini projeye göre şekillendiriyoruz." },
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
    overviewEyebrow: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri",
    overviewTitle: "Hangi yem ve dökme katı malzeme sistemlerini kuruyoruz?",
    overviewDescription:
      "Yem, premiks, mineral katkı ve benzeri dökme katı ürünlerde depolama, ta�xıma, dozajlama, eleme, karı�xtırma ve paketleme süreçleri için sistem çözümleri geli�xtiriyoruz.",
    solutionsEyebrow: "�!özüm Kurgusu",
    solutionsTitle: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri İçin Sundu�xumuz �!özümler",
    solutionsDescription:
      "Yeni yatırım ve mevcut tesis revizyonlarında ürün davranı�xı, dozaj hassasiyeti, hijyen ve bakım eri�ximini birlikte ele alıyoruz.",
    solutionCards: sharedSolutionCards.bulk,
    machinesEyebrow: "Kullanılan Makinalar",
    machinesTitle: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri İçin Kullanılan Makinalar",
    machinesDescription:
      "Depolama, dozajlama, ta�xıma ve son hat ekipmanları bir arada planlandı�xında dökme katı malzeme tesisleri dengeli çalı�xır.",
    machineCards: [
      { title: "Silo ve Bunkerler", text: "�Srünün güvenli depolanması ve kontrollü beslenmesi için temel altyapıyı olu�xturur.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "Bantlı Konveyörler", text: "Yatay transfer noktalarında dengeli ve temiz akı�x sa�xlar.", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { title: "Vidalı Helezonlar", text: "Toz ve granül akı�xlarda kontrollü, kompakt transfer imkanı sunar.", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { title: "Kovalı Elevatörler", text: "Dikey ta�xıma gereken proses noktalarında ürün süreklili�xini destekler.", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
      { title: "Dozajlama Sistemleri", text: "Reçete ve oran hassasiyeti gereken hatlarda do�xru besleme sa�xlar.", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Paketleme Sistemleri", text: "Son ürünün torbalama, big bag veya sevkiyat öncesi hazırlanmasını tamamlar.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri Hakkında Sık Sorulan Sorular",
    faqDescription:
      "Depolama, dozajlama, ta�xıma ve son ürün lojisti�xiyle ilgili en sık sorulan soruları tek yerde topladık.",
    faqs: [
      { question: "Dökme katı malzeme hattı kapasitesi nasıl belirlenir?", answer: "Kapasite; ürün yo�xunlu�xu, akı�x davranı�xı, çalı�xma süresi ve hedef son ürün modeline göre belirlenir." },
      { question: "Helezon mu bant konveyör mü tercih edilmelidir?", answer: "Seçim; ürünün akı�xkanlı�xı, tozuma riski, mesafe ve bakım beklentisine göre yapılır." },
      { question: "Aynı hatta birden fazla ürün i�xlenebilir mi?", answer: "Evet, uygun temizlik ve reçete kurgusuyla çoklu ürün altyapısı olu�xturulabilir." },
      { question: "Dozajlama sistemleri her tesiste gerekli midir?", answer: "Hayır, dozajlama ihtiyacı ürün reçetesi, kalite beklentisi ve proses mantı�xına göre belirlenir." },
      { question: "Paketleme hattı sonradan eklenebilir mi?", answer: "Evet, yerle�xim ve kapasite buna uygun planlanmı�xsa paketleme sistemleri sonradan entegre edilebilir." },
      { question: "Anahtar teslim kurulum hizmeti veriyor musunuz?", answer: "Evet, silo, bunker, transfer, dozajlama ve paketleme ekipmanlarını aynı tesis mantı�xında kurabiliyoruz." },
    ],
    formTitle: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri için teklif veya teknik görü�xme talep edin",
    formDescription:
      "Seçti�xiniz ürün tipi, kapasite, dozaj hassasiyeti ve saha ihtiyacına göre size uygun proses ve makine çözümünü birlikte netle�xtirelim.",
  },
};
