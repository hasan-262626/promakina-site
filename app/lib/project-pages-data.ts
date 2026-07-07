export type ProjectCardLink = {
  label: string;
  href: string;
};

export type ProjectPageData = {
  slug: string;
  aliases?: string[];
  title: string;
  cardDescription: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  metadataTitle: string;
  metadataDescription: string;
  projectScope: string[];
  machineGroups: string[];
  processFlow: string[];
  investorBenefits: string[];
  quoteRequirements: string[];
  relatedLinks: ProjectCardLink[];
};

export const projectPages: ProjectPageData[] = [
  {
    slug: "evsel-atiklardan-kompost-tesisi",
    aliases: ["kompost-tesisi-projeleri"],
    title: "Evsel Atıklardan Kompost Tesisi Projesi",
    cardDescription:
      "Belediye kaynaklı evsel organik atıkların ayrıştırma, kompostlaştırma, kurutma, eleme ve nihai ürün hazırlama süreçlerini kapsayan kompost tesisi projeleri geliştiriyoruz.",
    heroDescription:
      "Evsel organik atığın kabulünden son ürün hazırlamaya kadar uzanan kompost tesislerinde proses akışını, ekipman seçimini ve saha yerleşimini birlikte kurguluyoruz.",
    image: "/images/kompost/kompost1.jpg",
    imageAlt: "Evsel atıklardan kompost tesisi projesi",
    metadataTitle: "Evsel Atıklardan Kompost Tesisi Projesi",
    metadataDescription:
      "Evsel organik atıkların kompostlaştırılması için ayrıştırma, kurutma, eleme ve ürün hazırlama odaklı tesis projesini inceleyin.",
    projectScope: [
      "Evsel organik atığın kabul, ayırma ve karışım hazırlık yapısının belirlenmesi",
      "Kompostlaştırma, olgunlaştırma, eleme ve son ürün hazırlama adımlarının projelendirilmesi",
      "Koku kontrolü, saha akışı ve bakım erişimi kurgusunun netleştirilmesi",
    ],
    machineGroups: [
      "Kompost tamburu ve olgunlaştırma sistemleri",
      "Trommel elekler ve taşıma ekipmanları",
      "Kurutma tamburu ve yardımcı toz kontrol sistemleri",
    ],
    processFlow: [
      "Atık kabul ve ön ayrıştırma",
      "Kompostlaştırma ve olgunlaştırma",
      "Eleme, gerekirse kurutma ve son ürün hazırlama",
    ],
    investorBenefits: [
      "Belediye atık akışına uygun saha ritmi kurulur",
      "Koku, nem ve son ürün kalitesi birlikte yönetilir",
      "Geri kazanım değerini yükselten daha kontrollü bir proses omurgası oluğur",
    ],
    quoteRequirements: [
      "Günlük atık tonajı ve atık bileşimi",
      "Hedef son ürün formu ve nem beklentisi",
      "Saha büyüklüğü ve açık / kapalı alan durumu",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Evsel Organik Atıklar",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
      },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "hayvansal-atiklardan-kompost-tesisi",
    title: "Hayvansal Atıklardan Kompost Tesisi Projesi",
    cardDescription:
      "Büyükbaş, küçükbaş ve kanatlı hayvan atıklarının kontrollü kompostlaştırma, nem yönetimi, olgunlaştırma ve ürün hazırlama süreçlerini proje bazlı ele alıyoruz.",
    heroDescription:
      "Hayvansal atığın karakterine göre nem dengesi, yapısal katkı, kompost ritmi ve ekipman yerleşimi belirlenerek uygulanabilir tesis kurguları geliştiriyoruz.",
    image: "/images/kompost/kompost1.jpg",
    imageAlt: "Hayvansal atıklardan kompost tesisi projesi",
    metadataTitle: "Hayvansal Atıklardan Kompost Tesisi Projesi",
    metadataDescription:
      "Hayvansal atıklardan kompost üretimi için nem yönetimi, olgunlaştırma ve son ürün hazırlama odaklı tesis projesini inceleyin.",
    projectScope: [
      "Girdi nemi, lif yapısı ve karbon-azot dengesine göre prosesin okunması",
      "Kompostlaştırma, havalandırma ve olgunlaştırma ekipmanlarının seçilmesi",
      "Eleme, paketleme ve saha hijyeni odaklı son ürün yapısının planlanması",
    ],
    machineGroups: [
      "Kompost tamburu ve besleme bunkerleri",
      "Helezon ve bant konveyör hatları",
      "Trommel elekler ve paketleme sistemleri",
    ],
    processFlow: [
      "Atık kabul ve dengeleme",
      "Kompostlaştırma ve olgunlaştırma",
      "Eleme, ürün hazırlama ve sevkiyat",
    ],
    investorBenefits: [
      "Yüksek nemli atıkta daha kontrollü proses kurulumu sağlanır",
      "Saha yönetimi ve hijyen kriterleri baştan netleşir",
      "Satılabilir veya kullanılabilir son ürüne geçiş kolaylağır",
    ],
    quoteRequirements: [
      "Atık tipi ve günlük miktar",
      "Nem oranı ve yapılandırıcı malzeme bilgisi",
      "Beklenen son ürün ve depolama koşulları",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost ve Organik Atık Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      {
        label: "Taşıma Ekipmanları",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
    ],
  },
  {
    slug: "tarimsal-atiklardan-kompost-tesisi",
    title: "Tarımsal Atıklardan Kompost Tesisi Projesi",
    cardDescription:
      "Bitkisel üretim artıkları, sera atıkları, dal-budak, yaprak ve tarımsal organik atıkların kompost ürününe dönüştürülmesi için tesis projeleri hazırlıyoruz.",
    heroDescription:
      "Tarımsal organik atıklarda parçalama, karışım dengesi, kompostlaştırma ve son ürün hazırlama aşamalarını saha gerçeklerine göre projelendiriyoruz.",
    image: "/images/kompost/kompost1.jpg",
    imageAlt: "Tarımsal atıklardan kompost tesisi projesi",
    metadataTitle: "Tarımsal Atıklardan Kompost Tesisi Projesi",
    metadataDescription:
      "Tarımsal organik atıkların kompost ürününe dönüştürülmesi için parçalama, kompostlaştırma ve ürün hazırlama odaklı tesis projesini inceleyin.",
    projectScope: [
      "Atığın lif yapısı ve parçalanma ihtiyacına göre ön hazırlık adımlarının kurulması",
      "Kompostlaştırma, olgunlaştırma ve eleme sürecinin kapasiteyle uyumlu tasarlanması",
      "Açık saha, yarı kapalı saha veya kapalı alan için uygun yerleşimin kurgulanması",
    ],
    machineGroups: [
      "Parçalayıcılar ve besleme ekipmanları",
      "Kompost tamburları ve taşıma hatları",
      "Eleme, kurutma ve paketleme ekipmanları",
    ],
    processFlow: [
      "Ön hazırlık ve boyutlandırma",
      "Kompostlaştırma ve olgunlaştırma",
      "Eleme, son ürün hazırlama ve depolama",
    ],
    investorBenefits: [
      "Sera ve tarla kaynaklı atıklar daha düzenli değerlendirilebilir",
      "Hammadde dalgalanmaları için daha esnek proses kurulabilir",
      "Son ürün standardı daha öngörülebilir hale gelir",
    ],
    quoteRequirements: [
      "Atık türü ve sezonluk / günlük tonaj",
      "Parçalama ihtiyaçı ve nem seviyesi",
      "Son ürün kullanım amacı ve paketleme beklentisi",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost ve Organik Atık Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        label: "Kırıcılar ve Parçalayıcılar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "1mw-biyogaz-tesisi",
    aliases: ["biyogaz-ve-atik-yonetimi-projeleri"],
    title: "1 MW Biyogaz Tesisi Projesi",
    cardDescription:
      "Hayvansal, tarımsal ve organik atık kaynaklı biyogaz üretimi için besleme, ön işlem, digestat yönetimi ve enerji üretim süreçlerini kapsayan 1 MW biyogaz tesisi projeleri geliştiriyoruz.",
    heroDescription:
      "1 MW biyogaz yatırımlarında besleme düzeni, ön işlem, digestat sonrası yönetim ve enerji sürekliliğini birlikte ele alan saha odaklı proje kurguları hazırlıyoruz.",
    image: "/images/biyogaz/biogaz1.jpg",
    imageAlt: "1 MW biyogaz tesisi projesi",
    metadataTitle: "1 MW Biyogaz Tesisi Projesi",
    metadataDescription:
      "1 MW biyogaz tesisi için besleme, ön işlem, digestat yönetimi ve enerji üretim odaklı proje kurgusunu inceleyin.",
    projectScope: [
      "Günlük besleme tonajı ve atık tipine göre ön işlem yapısının belirlenmesi",
      "Reaktör öncesi kabul, parçalama, taşıma ve dengeleme adımlarının planlanması",
      "Digestat sonrası değerlendirme ve saha lojistişinin projelendirilmesi",
    ],
    machineGroups: [
      "Besleme bunkerleri ve konveyör hatları",
      "Shredder sistemleri ve yardımcı ön işlem ekipmanları",
      "Digestat taşıma, kurutma veya kompostlaştırma ekipmanları",
    ],
    processFlow: [
      "Atık kabul ve ön işlem",
      "Besleme ve biyogaz üretim süreci",
      "Digestat yönetimi ve yan ürün hazırlığı",
    ],
    investorBenefits: [
      "Besleme ritmi ve enerji üretim sürekliliği birlikte değerlendirilir",
      "Digestat sonrası maliyet ve ürün senaryosu baştan görülür",
      "Biyogaz yatırımı saha gerçeklerine daha uygun ilerler",
    ],
    quoteRequirements: [
      "Atık türü ve günlük besleme miktarı",
      "Enerji hedefi ve digestat yönetim beklentisi",
      "Saha büyüklüğü ve depolama kısıtları",
    ],
    relatedLinks: [
      {
        label: "Enerji ve Biyogaz Sistemleri",
        href: "/sektorler/enerji-ve-biyogaz-sistemleri",
      },
      { label: "Biyogaz Ön İşlem", href: "/kutuphane/blog/biyogaz-on-islem" },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
    ],
  },
  {
    slug: "biyogaz-digestat-kurutma-kompost-projesi",
    title: "Biyogaz Digestat Kurutma ve Kompost Projesi",
    cardDescription:
      "Biyogaz tesisinden çıkan digestatın katı-sıvı ayırma, kurutma, kompostlaştırma, eleme ve son ürün hazırlama süreçlerini entegre tesis mantığıyla projelendiriyoruz.",
    heroDescription:
      "Digestatın yalnızca bertaraf edilmediği, kurutma ve kompostlaştırma adımlarıyla değerli son ürüne dönüştürüldüğü entegre tesis projeleri geliştiriyoruz.",
    image: "/images/biyogaz/biogaz1.jpg",
    imageAlt: "Biyogaz digestat kurutma ve kompost projesi",
    metadataTitle: "Biyogaz Digestat Kurutma ve Kompost Projesi",
    metadataDescription:
      "Biyogaz digestatının kurutma, kompostlaştırma, eleme ve son ürün hazırlama süreçlerini kapsayan entegre proje yapısını inceleyin.",
    projectScope: [
      "Digestatın katı-sıvı ayrım sonrası ürün davranışının değerlendirilmesi",
      "Kurutma, kompostlaştırma ve eleme hatlarının entegre şekilde kurgulanması",
      "Koku kontrolü, taşıma ve son ürün hazırlama yapısının netleştirilmesi",
    ],
    machineGroups: [
      "Kurutma tamburları ve kompost tamburları",
      "Trommel elekler ve taşıma ekipmanları",
      "Koku kontrolü ve toz toplama sistemleri",
    ],
    processFlow: [
      "Digestat kabul ve dengeleme",
      "Kurutma veya kompostlaştırma",
      "Eleme, ürün hazırlama ve depolama",
    ],
    investorBenefits: [
      "Digestat için bertaraf yerine geri kazanım senaryosu oluğur",
      "Enerji ve yan ürün dengesi daha kontrollü okunur",
      "Saha içinde bütüncül atık yönetimi sağlanır",
    ],
    quoteRequirements: [
      "Digestat yapısı ve günlük miktar",
      "Hedef son ürün formu",
      "Kurutma veya kompostlaştırma önceliği",
    ],
    relatedLinks: [
      { label: "Camur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      { label: "Biyogaz Ön İşlem", href: "/kutuphane/blog/biyogaz-on-islem" },
    ],
  },
  {
    slug: "10-ton-saat-organomineral-gubre-tesisi",
    aliases: ["organomineral-gubre-tesisi-projeleri"],
    title: "10 Ton/Saat Organomineral Gübre Tesisi Projesi",
    cardDescription:
      "Kompost, organik hammadde ve mineral bileşenlerin dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme süreçleriyle organomineral gübreye dönüştürüldüğü tesis projeleri hazırlıyoruz.",
    heroDescription:
      "10 ton/saat ölçeşinde organomineral gübre yatırımlarında formülasyon, kapasite, granül kalitesi ve saha yerleşimini birlikte ele alan proses kurguları geliştiriyoruz.",
    image: "/images/granulator disk/diskgran2.jpg",
    imageAlt: "10 ton saat organomineral gübre tesisi projesi",
    metadataTitle: "10 Ton/Saat Organomineral Gübre Tesisi Projesi",
    metadataDescription:
      "10 ton/saat organomineral gübre tesisi için granülasyon, kurutma, eleme ve paketleme odaklı proje yapısını inceleyin.",
    projectScope: [
      "Ham madde oranları ve hedef ürün standardına göre hat kapasitesinin kurgulanması",
      "Granülasyon, kurutma, soğutma ve eleme yapısının proses ritmine göre planlanması",
      "Paketleme, toz kontrolü ve saha servis alanlarının netleştirilmesi",
    ],
    machineGroups: [
      "Dozaj bunkerleri ve karıştırma sistemleri",
      "Granülatör, kurutma ve soğutma tamburları",
      "Eleme, toz toplama ve paketleme ekipmanları",
    ],
    processFlow: [
      "Dozajlama ve karıştırma",
      "Granülasyon, kurutma ve soğutma",
      "Eleme, paketleme ve ürün sevki",
    ],
    investorBenefits: [
      "Hedef kapasiteye uygun daha net ekipman kombinasyonu kurulur",
      "Granül kalitesi ve enerji dengesi birlikte planlanır",
      "Yatırımın büyüme senaryosu erken aşamada okunur",
    ],
    quoteRequirements: [
      "Saatlik kapasite ve hedef tane boyutu",
      "Organik ve mineral ham madde daşılımı",
      "Paketleme tipi ve otomasyon beklentisi",
    ],
    relatedLinks: [
      {
        label: "Organomineral Gübre Tesisi",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        label: "Granül Gübre Üretim Tesisi",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        label: "Kurutma Tamburları",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        label: "Gübre Üretim Tesisleri",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
    ],
  },
  {
    slug: "granul-gubre-uretim-tesisi",
    aliases: ["granul-gubre-uretim-tesisi-projeleri"],
    title: "Granül Gübre Üretim Tesisi Projesi",
    cardDescription:
      "NPK, organomineral ve özel formülasyonlu granül gübre üretimi için dozajlama, granülasyon, kurutma, soğutma, kaplama ve paketleme hattını tek proses akışında ele alıyoruz.",
    heroDescription:
      "Granül gübre yatırımlarında proses akışını yalnızca makine listesiyle değil, kapasite, ürün standardı ve saha kurgusuyla birlikte değerlendiriyoruz.",
    image: "/images/granulator disk/diskgran2.jpg",
    imageAlt: "Granül gübre üretim tesisi projesi",
    metadataTitle: "Granül Gübre Üretim Tesisi Projesi",
    metadataDescription:
      "Granül gübre üretimi için dozajlama, granülasyon, kurutma, soğutma ve paketleme odaklı proje yapısını inceleyin.",
    projectScope: [
      "Formülasyona uygun ana makine kombinasyonunun belirlenmesi",
      "Granülasyon, kurutma, soğutma, eleme ve kaplama hatlarının planlanması",
      "Paketleme ve lojistik alanlarının saha ile uyumlu kurgulanması",
    ],
    machineGroups: [
      "Dozaj sistemleri ve karıştırma ekipmanları",
      "Granülatör, kurutma, soğutma ve kaplama tamburları",
      "Eleme, taşıma ve torbalama sistemleri",
    ],
    processFlow: [
      "Ham madde kabul ve dozajlama",
      "Granülasyon ve termal süreç",
      "Eleme, kaplama, paketleme ve sevkiyat",
    ],
    investorBenefits: [
      "Tek hatta birden fazla gübre senaryosu okunabilir",
      "Kapasite ve kalite dengesini kuran yatırım omurgası oluğur",
      "İleride kapasite artığına uygun esnek kurgu sağlanır",
    ],
    quoteRequirements: [
      "Hedef ürün tipi ve saatlik kapasite",
      "Nem aralığı ve tane boyutu beklentisi",
      "Paketleme ve otomasyon seviyesi",
    ],
    relatedLinks: [
      {
        label: "Granül Gübre Üretim Tesisi",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        label: "Granül Gübre Üretim Süreci",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      {
        label: "Gübre Üretim Tesisleri",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
    ],
  },
  {
    slug: "sivi-gubre-uretim-tesisi",
    aliases: ["sivi-gubre-uretim-tesisi-projeleri"],
    title: "Sıvı Gübre Üretim Tesisi Projesi",
    cardDescription:
      "Sıvı organomineral gübre, sıvı NPK, amino asitli ürünler ve biyostimülan üretimi için reaktör, tank, karıştırma, filtrasyon, stoklama ve dolum hattı projeleri geliştiriyoruz.",
    heroDescription:
      "Sıvı gübre hatlarında reaktör hacmi, karıştırma yapısı, stoklama senaryosu ve dolum ritmini birlikte okuyarak daha uygulanabilir tesis kurguları oluşturuyoruz.",
    image: "/images/siyah beyaz/tank 1.jpg",
    imageAlt: "Sıvı gübre üretim tesisi projesi",
    metadataTitle: "Sıvı Gübre Üretim Tesisi Projesi",
    metadataDescription:
      "Sıvı gübre üretimi için reaktör, tank, filtrasyon, stoklama ve dolum odaklı proje yapısını inceleyin.",
    projectScope: [
      "Ürün formülasyonuna göre reaktör ve tank hacimlerinin belirlenmesi",
      "Karıştırma, çözündürme, filtrasyon ve dolum adımlarının planlanması",
      "Temizlik, bakım erişimi ve paslanmaz ekipman kurgusunun netleştirilmesi",
    ],
    machineGroups: [
      "Karıştırıcılı reaktörler ve tank sistemleri",
      "Filtrasyon, pompa ve proses bağlantı ekipmanları",
      "Sıvı dolum, ?xişeleme ve etiketleme sistemleri",
    ],
    processFlow: [
      "Dozajlama ve çözündürme",
      "Karıştırma, filtrasyon ve stoklama",
      "Dolum, etiketleme ve sevkiyat",
    ],
    investorBenefits: [
      "Dolum hızı ve proses kararlılığı birlikte kurgulanır",
      "Temizlik ve servis erişimi daha güvenli planlanır",
      "Farklı ürün reçetelerine uyum sağlayan esnek yapı oluğur",
    ],
    quoteRequirements: [
      "Ürün tipi ve günlük dolum kapasitesi",
      "Tank hacmi ve karıştırma beklentisi",
      "Ambalaj tipi ve otomasyon seviyesi",
    ],
    relatedLinks: [
      {
        label: "Sıvı Gübre Üretim Tesisi",
        href: "/hizmetler/sivi-gubre-uretim-tesisi",
      },
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      {
        label: "Kimya ve Proses Endüstrisi",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      {
        label: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
        href: "/kutuphane/sivi-gubre-uretim-tesisi-nasil-kurulur",
      },
    ],
  },
  {
    slug: "silis-kumu-kurutma-tesisi",
    aliases: ["kurutma-tamburu-ve-termal-proses-projeleri"],
    title: "Silis Kumu Kurutma Tesisi Projesi",
    cardDescription:
      "Silis kumu ve kuvars kumu proseslerinde besleme, kurutma tamburu, sıcak gaz hattı, siklon, fan, toz toplama, eleme ve stoklama ekipmanlarını birlikte projelendiriyoruz.",
    heroDescription:
      "Silis kumu kurutma tesislerinde kurutma yükü, ürün akışı, toz kontrolü ve stoklama ihtiyaçlarını aynı termal proses kurgusu içinde ele alıyoruz.",
    image: "/images/maden/maden1.jpg",
    imageAlt: "Silis kumu kurutma tesisi projesi",
    metadataTitle: "Silis Kumu Kurutma Tesisi Projesi",
    metadataDescription:
      "Silis kumu ve kuvars kumu için kurutma tamburu, sıcak gaz hattı, eleme ve toz toplama odaklı tesis projesini inceleyin.",
    projectScope: [
      "Giriş-çıkış nem hedeflerine göre kurutma yükünün belirlenmesi",
      "Kurutma tamburu, sıcak gaz, fan ve filtre yapısının ölçeklenmesi",
      "Eleme, taşıma ve stoklama hatlarının prosesle uyumlu planlanması",
    ],
    machineGroups: [
      "Kurutma tamburu ve yardımcı termal ekipmanlar",
      "Siklon, jet pulse filtre ve fan sistemleri",
      "Eleme sistemleri ve konveyör hatları",
    ],
    processFlow: [
      "Besleme ve termal kurutma",
      "Toz toplama ve ürün akışı kontrolü",
      "Eleme, stoklama ve sevkiyat",
    ],
    investorBenefits: [
      "Kurutma ve sınıflandırma aynı süreçte daha dengeli ilerler",
      "Toz kontrolü ve saha emniyeti daha erken çözülür",
      "Mineral kalite hedeflerine uygun daha kararlı bir hat kurulur",
    ],
    quoteRequirements: [
      "Malzeme tipi ve saatlik tonaj",
      "Giriş-çıkış nem değerleri",
      "Eleme fraksiyonu ve depolama beklentisi",
    ],
    relatedLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      {
        label: "Kurutma Tamburları",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        label: "Madencilik ve Mineral İşleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Maden Kurutma ve Eleme Tesisi",
        href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
      },
    ],
  },
  {
    slug: "perlit-kurutma-eleme-tesisi",
    title: "Perlit Kurutma ve Eleme Tesisi Projesi",
    cardDescription:
      "Perlit ve benzeri hafif mineral hammaddelerde kontrollü kurutma, eleme, taşıma, toz toplama ve ürün sınıflandırma süreçlerini kapsayan tesis projeleri hazırlıyoruz.",
    heroDescription:
      "Perlit gibi hafif ve hassas mineral hammaddelerde ürün kaybını azaltan, sınıflandırmayı netleştiren ve termal süreci kontrollü kılan proje kurguları geliştiriyoruz.",
    image: "/images/maden/maden1.jpg",
    imageAlt: "Perlit kurutma ve eleme tesisi projesi",
    metadataTitle: "Perlit Kurutma ve Eleme Tesisi Projesi",
    metadataDescription:
      "Perlit kurutma ve eleme tesisleri için kontrollü kurutma, sınıflandırma, taşıma ve toz toplama odaklı proje yapısını inceleyin.",
    projectScope: [
      "Perlitin yoğunluk ve ürün davranışına uygun kurutma yaklaşımının belirlenmesi",
      "Eleme, taşıma ve sınıflandırma adımlarının kapasiteye göre kurgulanması",
      "Toz toplama ve ürün kaybını azaltan saha tasarımının netleştirilmesi",
    ],
    machineGroups: [
      "Kurutma tamburu ve fan sistemleri",
      "Elekler, konveyörler ve stoklama ekipmanları",
      "Siklon ve toz toplama sistemleri",
    ],
    processFlow: [
      "Besleme ve kurutma",
      "Eleme ve sınıflandırma",
      "Stoklama ve ürün hazırlama",
    ],
    investorBenefits: [
      "Hafif mineral ürünlerde ürün kaybı riski azaltılır",
      "Eleme hassasiyeti ve kapasite birlikte optimize edilir",
      "Toz kontrolüyle daha temiz ve sürdürülebilir saha akışı sağlanır",
    ],
    quoteRequirements: [
      "Perlit tipi ve tonaj",
      "Hedef ürün sınıfları",
      "Toz kontrolü ve stoklama ihtiyaçı",
    ],
    relatedLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      {
        label: "Eleme ve Sınıflandırma Sistemleri",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        label: "Madencilik ve Mineral İşleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Kurutma Tamburları",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
    ],
  },
  {
    slug: "maden-kirma-eleme-kurutma-tesisi",
    aliases: ["maden-ve-mineral-isleme-projeleri", "mineral-ve-dokme-kati-isleme-projeleri"],
    title: "Maden Kırma, Eleme ve Kurutma Tesisi Projesi",
    cardDescription:
      "Kireç taşı, bentonit, kil, kükürt, kuvars ve benzeri mineral hammaddeler için kırıcılar, elekler, kurutma tamburu, konveyörler ve stoklama sistemlerini proje bazlı kurguluyoruz.",
    heroDescription:
      "Kırma, eleme ve kurutma süreçlerini aynı proje mantığında ele alarak maden ve mineral işleme hatlarında daha dengeli bir kapasite omurgası kuruyoruz.",
    image: "/images/maden/maden1.jpg",
    imageAlt: "Maden kırma eleme kurutma tesisi projesi",
    metadataTitle: "Maden Kırma, Eleme ve Kurutma Tesisi Projesi",
    metadataDescription:
      "Maden kırma, eleme ve kurutma tesisleri için kırıcılar, elekler, kurutma tamburu ve konveyör odaklı proje yapısını inceleyin.",
    projectScope: [
      "Malzeme boyutu, aşındırıcılık ve nem değerlerine göre hat yapısının kurgulanması",
      "Kırıcı, eleme, kurutma ve taşıma ekipmanlarının tek akışta ölçeklenmesi",
      "Stoklama, servis erişimi ve toz kontrolünün sahaya göre planlanması",
    ],
    machineGroups: [
      "Çeneli, çekiçli ve dik milli kırıcılar",
      "Trommel ve vibrasyonlu elekler",
      "Kurutma tamburu, konveyör ve stoklama ekipmanları",
    ],
    processFlow: [
      "Kırma ve boyutlandırma",
      "Eleme ve gerekirse kurutma",
      "Taşıma, stoklama ve son ürün hazırlığı",
    ],
    investorBenefits: [
      "Birbiriyle uyumlu ekipman seçimi sayesinde darboğaz riski azalır",
      "Farklı mineral türlerine göre daha esnek proses kurulabilir",
      "Saha akışı ve toz kontrolü daha erken çözümlenir",
    ],
    quoteRequirements: [
      "Malzeme tipi ve tane boyutu",
      "Saatlik kapasite ve nem bilgisi",
      "Stoklama, paketleme veya sevkiyat beklentisi",
    ],
    relatedLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      {
        label: "Kırıcılar ve Parçalayıcılar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        label: "Madencilik ve Mineral İşleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "aritma-camuru-kurutma-tesisi",
    aliases: ["aritma-camuru-kurutma-projeleri"],
    title: "Arıtma Çamuru Kurutma Tesisi Projesi",
    cardDescription:
      "Belediye ve endüstriyel arıtma çamurlarının besleme, susuzlaştırma destek, kurutma, koku kontrol, toz toplama ve nihai ürün hazırlama süreçlerini projelendiriyoruz.",
    heroDescription:
      "Arıtma çamuru kurutma projelerinde nem düğürme hedefi, koku kontrolü, ürün hazırlama ve saha akışı aynı termal proses mantığı içinde okunur.",
    image: "/images/01-genel/fabrika1.jpg",
    imageAlt: "Arıtma çamuru kurutma tesisi projesi",
    metadataTitle: "Arıtma Çamuru Kurutma Tesisi Projesi",
    metadataDescription:
      "Arıtma çamuru kurutma tesisi için besleme, kurutma, koku kontrolü ve nihai ürün hazırlama odaklı proje yapısını inceleyin.",
    projectScope: [
      "Nem düğürme hedefi ve günlük tonaja göre kurutma yapısının belirlenmesi",
      "Besleme, susuzlaştırma destek ve termal ekipman omurgasının kurulması",
      "Koku kontrolü, toz toplama ve son ürün hazırlama adımlarının planlanması",
    ],
    machineGroups: [
      "Çamur besleme bunkerleri ve helezon hatları",
      "Kurutma tamburu ve termal yardımcı ekipmanlar",
      "Filtre, fan ve paketleme sistemleri",
    ],
    processFlow: [
      "Besleme ve dengeleme",
      "Termal kurutma ve gaz yönetimi",
      "Son ürün hazırlama ve sevkiyat",
    ],
    investorBenefits: [
      "Belediye ve sanayi çamurlarında daha kontrollü nem yönetimi sağlanır",
      "Koku ve toz riski bağlangıçta ele alınır",
      "Nihai ürün değerlendirme seçenekleri daha netleşir",
    ],
    quoteRequirements: [
      "Giriş ve çıkış nem değerleri",
      "Günlük tonaj ve çalışma rejimi",
      "Koku kontrolü ve kapalı alan beklentisi",
    ],
    relatedLinks: [
      { label: "Çamur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      {
        label: "Kapalı Sistem Çamur Kurutma",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/kapali-sistem-camur-kurutma",
      },
      {
        label: "Atık Su Çamuru Bertaraf ve Değerlendirme Prosesleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        label: "Atık Su Çamuru Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
    ],
  },
  {
    slug: "deri-atiklarindan-geri-kazanim-tesisi",
    aliases: ["deri-atik-isleme-tesisi-projeleri"],
    title: "Deri Atıklarından Geri Kazanım Tesisi Projesi",
    cardDescription:
      "Deri kaynaklı atıkların parçalama, taşıma, proses hazırlığı, geri kazanım ve son ürün değerlendirme aşamalarını kapsayan özel tesis projeleri hazırlıyoruz.",
    heroDescription:
      "Deri atığının lifli ve zorlu yapısını dikkate alan parçalama, taşıma ve geri kazanım odaklı özel proses kurguları geliştiriyoruz.",
    image: "/images/01-genel/geridonusum1.jpg",
    imageAlt: "Deri atıklarından geri kazanım tesisi projesi",
    metadataTitle: "Deri Atıklarından Geri Kazanım Tesisi Projesi",
    metadataDescription:
      "Deri atıklarının parçalama, taşıma, proses hazırlığı ve geri kazanım aşamalarını kapsayan özel tesis projesini inceleyin.",
    projectScope: [
      "Atığın fiziksel yapısına göre parçalama ve ön hazırlık hattının belirlenmesi",
      "Taşıma, ayırma ve proses hazırlığı adımlarının sahaya göre planlanması",
      "Geri kazanım veya sonraki proses için uygun ara ürün yapısının oluşturulması",
    ],
    machineGroups: [
      "Shredder sistemleri ve kırıcılar",
      "Taşıma hatları ve bunker sistemleri",
      "Yardımcı proses ve toz kontrol ekipmanları",
    ],
    processFlow: [
      "Atık kabul ve ön hazırlık",
      "Parçalama ve taşıma",
      "Geri kazanım için ara ürün hazırlama",
    ],
    investorBenefits: [
      "Deri atığında daha kontrollü ve güvenli saha akışı kurulur",
      "Geri kazanım verimi için düzenli ön hazırlık yapısı oluğur",
      "Standart dığı atık senaryolarında özel çözüm omurgası sağlanır",
    ],
    quoteRequirements: [
      "Atık tipi ve nem seviyesi",
      "Saatlik besleme miktarı",
      "Hedef geri kazanım veya sonraki proses bilgisi",
    ],
    relatedLinks: [
      {
        label: "Kırıcılar ve Parçalayıcılar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      { label: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Hizmetler", href: "/hizmetler" },
    ],
  },
  {
    slug: "helezon-konveyor-elevator-hat-projesi",
    aliases: ["konveyor-ve-tasima-sistemleri-projeleri"],
    title: "Helezon, Konveyör ve Elevatör Hat Projesi",
    cardDescription:
      "Dökme katı, toz, granül, gübre, maden ve kompost ürünleri için helezon konveyör, bant konveyör, zincirli konveyör ve kovalı elevatör hatlarını proje bazlı tasarlıyoruz.",
    heroDescription:
      "Malzeme transferinin yalnızca makine seçimi değil, hat boyu, eşim, dozaj ve bakım erişimiyle birlikte planlandığı taşıma sistemi projeleri geliştiriyoruz.",
    image: "/images/01-genel/makinalar1.png",
    imageAlt: "Helezon konveyör ve elevatör hat projesi",
    metadataTitle: "Helezon, Konveyör ve Elevatör Hat Projesi",
    metadataDescription:
      "Helezon, bant konveyör, zincirli konveyör ve kovalı elevatör hatlarını kapsayan taşıma sistemi projesini inceleyin.",
    projectScope: [
      "Malzeme tipi, mesafe, eşim ve kapasiteye göre taşıma hattının kurgulanması",
      "Helezon, konveyör, elevatör ve bunker bağlantılarının uyumlu planlanması",
      "Transfer noktalarında toz, dökülme ve bakım erişiminin çözülmesi",
    ],
    machineGroups: [
      "Helezon ve bant konveyörler",
      "Zincirli konveyörler ve kovalı elevatörler",
      "Bunker, silo ve akış kontrol ekipmanları",
    ],
    processFlow: [
      "Besleme ve dozaj",
      "Yatay ve dikey transfer",
      "Ara stoklama veya sonraki prosese kontrollü aktarım",
    ],
    investorBenefits: [
      "Hat içi duruş ve dökülme riski azaltılır",
      "Bakım erişimi ve transfer güvenliği iyileştirilir",
      "Farklı makine grupları arasında daha net bağlantı kurulur",
    ],
    quoteRequirements: [
      "Malzeme tipi ve yoğunluğu",
      "Transfer mesafesi ve eşim",
      "Saatlik kapasite ve çalışma süresi",
    ],
    relatedLinks: [
      {
        label: "Taşıma Ekipmanları",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        label: "Vidalı Helezonlar",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
      },
      {
        label: "Bantlı Konveyörler",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        label: "Zincirli Elevatörler",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
      },
    ],
  },
  {
    slug: "reaktor-ve-tank-sistemleri-projesi",
    aliases: ["reaktor-ve-tank-sistemleri-projeleri"],
    title: "Reaktör ve Tank Sistemleri Projesi",
    cardDescription:
      "Sıvı gübre, kimyasal proses, çözündürme, karıştırma, stoklama ve kontrollü dozajlama ihtiyaçları için reaktör, tank ve proses bağlantı sistemleri projeleri geliştiriyoruz.",
    heroDescription:
      "Reaktör ve tank sistemlerinde hacim, karıştırıcı tipi, malzeme seçimi ve proses bağlantıları birlikte değerlendirilerek daha güvenli üretim omurgaları kurgulanır.",
    image: "/images/siyah beyaz/tank 1.jpg",
    imageAlt: "Reaktör ve tank sistemleri projesi",
    metadataTitle: "Reaktör ve Tank Sistemleri Projesi",
    metadataDescription:
      "Reaktör, tank, çözündürme, karıştırma ve stoklama odaklı proses ekipmanı projesini inceleyin.",
    projectScope: [
      "Reaktör ve tank hacimlerinin ürün reçetesi ve debiye göre belirlenmesi",
      "Karıştırma, çözündürme, filtrasyon ve stoklama adımlarının planlanması",
      "Hat bağlantıları, temizlik erişimi ve dolum entegrasyonunun netleştirilmesi",
    ],
    machineGroups: [
      "Karıştırıcılı reaktörler ve tanklar",
      "Dozaj pompaları ve filtrasyon bağlantıları",
      "Dolum ve stoklama sistemleri",
    ],
    processFlow: [
      "Dozajlama ve çözündürme",
      "Karıştırma veya reaksiyon süreci",
      "Stoklama, dolum ve sevkiyat",
    ],
    investorBenefits: [
      "Ürün kararlılığı ve proses güvenliği aynı çerçevede ele alınır",
      "Tank ve dolum uyumu daha net hesaplanır",
      "Bakım ve temizlik planı yatırım başında çözümlenir",
    ],
    quoteRequirements: [
      "Ürün tipi ve tank hacmi",
      "Karıştırma ve sıcaklık kontrol ihtiyaçı",
      "Dolum kapasitesi ve ambalaj senaryosu",
    ],
    relatedLinks: [
      { label: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Sıvı Gübre Üretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      {
        label: "Kimya ve Proses Endüstrisi",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projesi",
    aliases: ["ozel-proses-ve-makine-imalati-projeleri"],
    title: "özel Proses ve Makine İmalatı Projesi",
    cardDescription:
      "Standart makine seçiminin yeterli olmadığı sahalarda kapasite, ölçü, ürün davranışı ve proses hedefine göre özel makine ve hat projeleri geliştiriyoruz.",
    heroDescription:
      "Saha ölçülerine, kapasiteye ve proses hedefine göre katalog dığı ekipman ve hat çözümleri tasarlayarak özel üretim gerektiren yatırımları destekliyoruz.",
    image: "/images/01-genel/makinalar1.png",
    imageAlt: "özel proses ve makine imalatı projesi",
    metadataTitle: "özel Proses ve Makine İmalatı Projesi",
    metadataDescription:
      "özel proses ve makine imalatı gerektiren sahalar için kapasite, ölçü ve entegrasyon odaklı proje yapısını inceleyin.",
    projectScope: [
      "Standart dığı ihtiyaçların saha verileriyle birlikte okunması",
      "özel ölçü, malzeme ve proses gereksinimlerine göre makine tasarlanması",
      "İmalat, entegrasyon ve devreye alma adımlarının tek akışta planlanması",
    ],
    machineGroups: [
      "özel imalat tambur, bunker ve taşıma ekipmanları",
      "Proses odaklı reaktör, tank ve yardımcı mekanik yapılar",
      "Sahaya uyumlu bağlantı ve platform sistemleri",
    ],
    processFlow: [
      "İhtiyaç analizi ve saha veri toplama",
      "özel tasarım ve üretim hazırlığı",
      "İmalat, montaj ve devreye alma",
    ],
    investorBenefits: [
      "Standart ekipmanın çözmediği sorunlara özel yanıt üretilir",
      "Saha kısıtları ve üretim hedefi birlikte yönetilir",
      "Mevcut hatta daha sağlıklı entegrasyon kurulabilir",
    ],
    quoteRequirements: [
      "Saha ölçüleri ve mevcut hat bilgisi",
      "Hedef kapasite ve ürün davranışı",
      "özel malzeme, otomasyon veya bağlantı beklentileri",
    ],
    relatedLinks: [
      { label: "Makine İmalatı", href: "/hizmetler/makine-imalati" },
      {
        label: "Proses Tasarımı ve Mühendislik",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];

export const projectHubCards = projectPages;

export function getProjectPageBySlug(slug: string) {
  return projectPages.find(
    (project) => project.slug === slug || project.aliases?.includes(slug),
  );
}

export function getAllProjectSlugs() {
  return projectPages.flatMap((project) => [project.slug, ...(project.aliases ?? [])]);
}

