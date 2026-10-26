import { serializeJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { trLanguageAlternates } from "../../i18n/routes";
import { MachinesOverviewPage, type MachinesOverviewContent } from "../components/machines-overview-page";
import { homeMachineGroupCards } from "../home-machine-groups-data";

const canonicalUrl = "https://www.promakina.com.tr/makinalar-ekipman";
const pageTitle = "Endüstriyel Makinalar ve Proses Ekipmanları";
const documentTitle = "Endüstriyel Makinalar ve Proses Ekipmanları";
const pageDescription =
  "Kurutma tamburları, konveyörler, kırıcılar, reaktörler, elekler, silolar, toz toplama ve dozajlama sistemleri için endüstriyel makina imalatı.";
const ogDescription =
  "Kurutma, taşıma, kırma, eleme, depolama, dozajlama ve proses uygulamaları için mühendislik odaklı endüstriyel makina ve ekipman çözümleri.";
const ogImageUrl = "https://www.promakina.com.tr/images/01-genel/makinalar1.png";

const categoryItemList = homeMachineGroupCards.map((card, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: card.title,
  url: `https://www.promakina.com.tr${card.href}`,
}));

const processFlows = [
  {
    title: "Kurutma ve Termal Proses Hattı",
    description:
      "Yüksek nemli ürünlerde enerji dengesi, hava debisi, toz kontrolü ve ürün çıkış nemi aynı tasarım içinde değerlendirilir.",
    steps: [
      { label: "Besleme", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Siklon", href: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar" },
      { label: "Fan" },
      { label: "Filtre", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Eleme", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Depolama", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
  },
  {
    title: "Granül Gübre Üretim Hattı",
    description:
      "Reçete, nem, geri dönüş oranı ve son ürün granül kalitesi birlikte okunarak tambur ve taşıma ekipmanları seçilir.",
    steps: [
      { label: "Dozajlama", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Karıştırma", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Granülasyon", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kurutma", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Soğutma", href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu" },
      { label: "Eleme", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Kaplama", href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu" },
      { label: "Paketleme", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
  },
  {
    title: "Kompost ve Organik Atık Hattı",
    description:
      "Atık kabulünden ürün hazırlamaya kadar parçalama, karıştırma, tambur, eleme ve koku kontrol ekipmanları birlikte planlanır.",
    steps: [
      { label: "Atık Kabul", href: "/tesisler/kompost-tesisi" },
      { label: "Parçalama", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Karıştırma", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Olgunlaştırma", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Kurutma", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "Eleme", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Ürün Hazırlama", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
  },
  {
    title: "Dökme Katı Malzeme Aktarma Hattı",
    description:
      "Hat sürekliliği için bunker hacmi, konveyör tipi, elevatör yüksekliği, silo çıkışı ve dozaj hassasiyeti beraber hesaplanır.",
    steps: [
      { label: "Bunker", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler" },
      { label: "Helezon", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "Bantlı Konveyör", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Elevatör", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
      { label: "Silo", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Dozajlama", href: "/makinalar-ekipman/dozajlama-sistemleri" },
    ],
  },
];

const sectorLinks = [
  { label: "Gübre ve Granülasyon Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { label: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
  { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { label: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
  { label: "Geri Dönüşüm ve Atık Yönetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
  { label: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
  { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
  {
    label: "Yem, Toz ve Dökme Katı Malzeme İşleme",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
  },
];

const manufacturingSteps = [
  { title: "Proses ihtiyacı", href: "/hizmetler/proses-tasarimi-ve-muhendislik" },
  { title: "Hammadde analizi" },
  { title: "Kapasite ve vardiya hedefi" },
  { title: "Ön yerleşim ve akış şeması", href: "/hizmetler/proses-tasarimi-ve-muhendislik" },
  { title: "Makina seçimi", href: "/hizmetler/makine-imalati" },
  { title: "Malzeme ve yüzey standardı" },
  { title: "İmalat ve kalite kontrol", href: "/hizmetler/makine-imalati" },
  { title: "Montaj planı", href: "/hizmetler/anahtar-teslim-tesis-kurulumu" },
  { title: "Kurulum ve devreye alma", href: "/hizmetler/kurulum-ve-devreye-alma" },
  { title: "Bakım, revizyon ve yedek parça", href: "/hizmetler/bakim-servis-ve-teknik-destek" },
];

const quoteChecklist = [
  "Ürün adı, tane boyutu, nem oranı ve yoğunluk",
  "Saatlik kapasite, vardiya düzeni ve hedef ürün kalitesi",
  "Sıcaklık, aşındırıcılık, yapışkanlık ve korozyon riski",
  "Mevcut saha ölçüleri, kot farkları ve bağlantı noktaları",
  "Otomasyon, tartım, toz kontrolü ve paketleme beklentisi",
  "Varsa mevcut proje, yerleşim veya numune bilgisi",
];

const relatedLinks = [
  { label: "Proses Tasarımı ve Mühendislik", href: "/hizmetler/proses-tasarimi-ve-muhendislik" },
  { label: "Makine İmalatı", href: "/hizmetler/makine-imalati" },
  { label: "Anahtar Teslim Tesis Kurulumu", href: "/hizmetler/anahtar-teslim-tesis-kurulumu" },
  { label: "Kompost Tesisi Çözümleri", href: "/tesisler/kompost-tesisi" },
  { label: "Referans Projeler", href: "/projeler" },
  { label: "Teknik Makaleler", href: "/kutuphane/blog#teknik-makaleler" },
];

const machineFaqs = [
  {
    question: "Endüstriyel makina seçimi yalnız kapasiteye göre yapılabilir mi?",
    answer:
      "Hayır. Kapasite önemli bir başlangıç verisidir; ancak tek başına yeterli değildir. Ürünün nem oranı, tane boyutu, yoğunluğu, akışkanlığı, aşındırıcılığı, sıcaklık ihtiyacı, çalışma süresi ve tesis yerleşimi aynı anda değerlendirilmelidir. Aynı kapasitedeki iki proses, farklı hammadde davranışı nedeniyle farklı tambur, konveyör, elek veya dozajlama sistemi gerektirebilir. Doğru seçim için numune, işletme senaryosu, bakım erişimi ve hedef ürün kalitesi de birlikte okunmalıdır.",
  },
  {
    question: "Pro Makina standart makine mi, özel makina imalatı mı yapar?",
    answer:
      "Proses ihtiyacına göre hem standartlaştırılmış ekipman grupları hem de projeye özel makina imalatı değerlendirilebilir. Tasarım; ürün özellikleri, kapasite hedefi, saha ölçüleri, bakım erişimi, bağlantı noktaları ve otomasyon beklentisine göre netleşir. Amaç, sadece tek bir makine üretmek değil, ekipmanın tüm hat içinde doğru noktada ve doğru görevle çalışmasını sağlamaktır. Bu nedenle ölçülendirme, malzeme seçimi ve yardımcı ekipman bağlantıları proje verileriyle birlikte ele alınır.",
  },
  {
    question: "Kurutma tamburu seçiminde hangi bilgiler gerekir?",
    answer:
      "Kurutma tamburu için giriş ve çıkış nemi, ürün yoğunluğu, tane boyutu, hedef kapasite, sıcaklık sınırı, yakıt veya enerji tercihi, ürünün yapışkanlık davranışı ve toz potansiyeli gerekir. Ayrıca fan, siklon, filtre, besleme ve çıkış ekipmanlarının tamburla uyumlu seçilmesi önemlidir. Bu nedenle kurutma ekipmanı genellikle tek başına değil, termal proses hattı olarak ele alınır. Saha yerleşimi, baca bağlantısı ve emisyon kontrol beklentisi de ilk değerlendirmede paylaşılmalıdır.",
  },
  {
    question: "Konveyör, helezon ve elevatör seçimi nasıl yapılır?",
    answer:
      "Taşıma ekipmanı seçimi malzemenin akış davranışı, yoğunluğu, tane boyutu, nemi, mesafe, eğim, kot farkı ve istenen besleme hassasiyetine göre yapılır. Bantlı konveyörler uzun ve yatay aktarmalarda, vidalı helezonlar kontrollü beslemede, elevatörler dikey taşımalarda öne çıkar. Toz oluşumu, temizlik ihtiyacı ve bakım erişimi de seçimde belirleyicidir. Ayrıca dökülme riski, hız kontrolü, kapalı gövde ihtiyacı ve sonraki ekipmanın besleme toleransı dikkate alınmalıdır.",
  },
  {
    question: "Kırıcı ve parçalayıcı sistemler hangi proseslerde kullanılır?",
    answer:
      "Kırıcı ve parçalayıcılar; topaklı ürünlerin açılması, hammadde boyutunun küçültülmesi, organik atıkların prosese hazırlanması ve eleme öncesi daha dengeli besleme sağlanması için kullanılır. Gübre, kompost, geri dönüşüm, maden ve dökme katı proseslerinde farklı bıçak, çekiç veya çene yapıları tercih edilebilir. Seçim, ürün sertliği ve hedef çıkış boyutuyla ilişkilidir. Besleme sürekliliği, yabancı madde riski ve bakım periyodu da doğru modelin belirlenmesinde etkilidir.",
  },
  {
    question: "Toz toplama sistemi makina hattına sonradan eklenebilir mi?",
    answer:
      "Bazı hatlarda sonradan toz toplama sistemi eklenebilir; ancak en doğru yaklaşım toz kaynaklarını proje başlangıcında belirlemektir. Kurutma, kırma, eleme, paketleme ve transfer noktalarında emiş ağızları, kanal çapları, fan debisi, siklon veya filtre seçimi birlikte tasarlanmalıdır. Böylece hem çalışma ortamı hem de proses verimliliği daha kontrollü hale gelir. Mevcut hatta ekleme yapılacaksa basınç kayıpları, yerleşim alanı ve bakım erişimi ayrıca kontrol edilmelidir.",
  },
  {
    question: "Paketleme ve dolum sistemi seçerken nelere bakılır?",
    answer:
      "Paketleme ve dolum sistemlerinde ürün formu, hedef ambalaj tipi, tartım hassasiyeti, kapasite, toz oluşumu, operatör müdahalesi ve otomasyon seviyesi birlikte değerlendirilir. Toz, granül ve sıvı ürünlerin ihtiyaçları farklıdır. Big bag, açık ağız torbalama, sıvı dolum veya şişeleme hatları; ürün akışı ve sevkiyat formatına göre projelendirilmelidir. Çıkış konveyörü, paletleme, etiketleme ve kalite kontrol adımları da son hat tasarımına dahil edilmelidir. Sevkiyat düzeni de bu kapsamda değerlendirilir.",
  },
  {
    question: "Dozajlama sistemleri hangi üretimlerde kritiktir?",
    answer:
      "Dozajlama sistemleri reçeteli üretimlerde, katkı oranının hassas yönetilmesi gereken proseslerde ve sürekli besleme dengesinin korunması gereken hatlarda kritiktir. Granül gübre, organomineral gübre, kimyasal karışım, toz ürün ve dökme katı proseslerinde mikro veya makro dozajlama tercih edilebilir. Tartım, hız kontrolü ve otomasyon entegrasyonu seçimde belirleyicidir. Ürün akışkanlığı, bunker çıkış geometrisi ve operatör müdahale seviyesi de stabil dozaj için dikkate alınmalıdır. Kalibrasyon planı da bu nedenle önemlidir.",
  },
  {
    question: "Bir makina mevcut tesise entegre edilebilir mi?",
    answer:
      "Evet, mevcut tesislere yeni makina veya ekipman entegre edilebilir. Bunun için mevcut hat kapasitesi, besleme-çıkış kotları, elektrik ve otomasyon altyapısı, bakım alanları, taşıyıcı sistemler ve proses darboğazları incelenmelidir. Yeni ekipmanın sadece mekanik olarak yerleşmesi değil, tüm proses akışında gerçek fayda üretmesi hedeflenir. Revizyon çalışmalarında duruş süresi, bağlantı detayları, güvenli montaj sırası, saha güvenliği ve mevcut otomasyonla haberleşme konusu da planlanmalıdır.",
  },
  {
    question: "Teknik teklif almak için hangi bilgileri paylaşmalıyım?",
    answer:
      "Teknik teklif için ürün özellikleri, kapasite hedefi, nem ve tane boyutu, çalışma süresi, saha ölçüleri, proses akış beklentisi ve varsa mevcut çizim veya fotoğraflar paylaşılmalıdır. Numune veya ürün analiz bilgisi varsa seçim daha sağlıklı yapılır. Bu verilerle makina tipi, malzeme standardı, motor gücü, otomasyon kapsamı ve entegrasyon ihtiyacı netleşir. Ayrıca hedef termin, ambalaj formatı ve varsa mevcut ekipman listesi teklif kapsamını hızlandırır.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.promakina.com.tr/#organization",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
      logo: "https://www.promakina.com.tr/images/logo.png",
    },
    {
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": "https://www.promakina.com.tr/#website",
      },
      publisher: {
        "@id": "https://www.promakina.com.tr/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://www.promakina.com.tr/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Makinalar & Ekipman",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${canonicalUrl}#machine-categories`,
      name: "Endüstriyel Makina ve Proses Ekipmanı Kategorileri",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: categoryItemList,
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: machineFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: documentTitle,
  description: pageDescription,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl,
    languages: trLanguageAlternates("/makinalar-ekipman"),
  },
  openGraph: {
    title: pageTitle,
    description: ogDescription,
    url: canonicalUrl,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Pro Makina endüstriyel makina ve proses ekipmanları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: ogDescription,
    images: [ogImageUrl],
  },
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(structuredData),
      }}
    />
  );
}

/** Sayfa gövdesi ortak şablondadır (MachinesOverviewPage); EN/RU/AR aynı şablonu kendi metinleriyle kullanır. */
const trOverviewContent: MachinesOverviewContent = {
  hero: {
    eyebrow: "PROSES MAKİNALARI VE EKİPMANLARI",
    title: "Endüstriyel Makinalar ve Proses Ekipmanları",
    description:
      "Kurutma, taşıma, kırma, eleme, depolama, dozajlama, karıştırma ve ürün hazırlama prosesleri için kapasiteye ve ürün özelliklerine özel makina ve ekipmanlar tasarlıyor, imal ediyor ve tesis hatlarına entegre ediyoruz.",
    breadcrumb: [{ label: "Ana Sayfa", href: "/" }, { label: "Makinalar & Ekipman" }],
  },
  cards: homeMachineGroupCards,
  selection: {
    title: "Endüstriyel Makina Seçimi Nasıl Yapılır?",
    before:
      "Doğru makina seçimi, yalnız saatlik kapasite değerine bakılarak yapılamaz. Aynı kapasitede çalışan iki üretim hattı; ürün nemi, tane boyutu, yoğunluk, sıcaklık hassasiyeti, aşındırıcılık, yapışkanlık ve akışkanlık nedeniyle tamamen farklı ekipman kombinasyonlarına ihtiyaç duyabilir. Bu nedenle ilk adım, hammaddenin prosese giriş koşullarını ve hedef çıkış kalitesini netleştirmektir. Kurutma tamburunda kalış süresi ve hava debisi, konveyörde eğim ve ürün taşma riski, kırıcıda hedef çıkış boyutu, elekte fraksiyon aralığı, siloda köprüleşme ihtimali ve dozajlama sisteminde tartım hassasiyeti birlikte değerlendirilir. Seçim sürecinde saha yerleşimi, bakım erişimi, otomasyon seviyesi, enerji altyapısı, toz kontrolü ve mevcut hatla bağlantı noktaları da kritik kriterlerdir. Pro Makina bu verileri",
    linkLabel: "proses tasarımı ve mühendislik",
    linkHref: "/hizmetler/proses-tasarimi-ve-muhendislik",
    after:
      "yaklaşımıyla okuyarak, tekil makina performansı kadar tüm tesis akışının sürekliliğini de hedefler. Böylece yatırımın ilk günkü kapasite hedefiyle sahadaki gerçek işletme koşulları arasında daha dengeli bir çözüm kurulabilir.",
  },
  flows: {
    title: "Tek Bir Makinadan Entegre Proses Hattına",
    intro:
      "Bir ekipmanın doğru çalışması, çoğu zaman öncesindeki besleme ve sonrasındaki ürün alma ekipmanlarıyla birlikte mümkündür. Bu nedenle makina imalatı; hammadde kabul, taşıma, kurutma, sınıflandırma, depolama, dozajlama ve paketleme adımlarını aynı proses akışı içinde düşünmelidir.",
    items: processFlows,
  },
  sectors: {
    title: "Makina ve Ekipman Ürettiğimiz Başlıca Sektörler",
    intro:
      "Gübre, kompost, maden, kimya, atık, biyogaz ve dökme katı malzeme hatlarında makina seçimi sektörün ürün davranışına göre değişir. İlgili sektör sayfalarında proses ihtiyaçlarını daha yakından inceleyebilirsiniz.",
    links: sectorLinks,
  },
  manufacturing: {
    title: "Makina İmalatı ve Projelendirme Süreci",
    intro:
      "Projelendirme; proses ihtiyacının anlaşılmasıyla başlar, makina imalatı, montaj, devreye alma ve bakım desteğiyle devam eder. Bu süreçte amaç, her ekipmanın yalnız kendi görevini değil, önceki ve sonraki proses adımlarını da desteklemesidir.",
    steps: manufacturingSteps,
  },
  quote: {
    title: "Teknik Teklif İçin Gerekli Bilgiler",
    text:
      "Teknik teklif hazırlarken makina adı kadar proses verileri de önemlidir. Ürün ve saha bilgileri paylaşıldığında kapasite, malzeme standardı, motor gücü, otomasyon kapsamı ve ekipman entegrasyonu daha doğru belirlenir.",
    primary: { label: "Teknik Teklif Al", href: "/iletisim" },
    whatsapp: { label: "WhatsApp ile Görüş", href: "https://wa.me/905320580104" },
    checklist: quoteChecklist,
  },
  related: { title: "İlgili Sayfalar ve Proje Bağlantıları", links: relatedLinks },
  faq: {
    title: "Endüstriyel Makinalar ve Proses Ekipmanları Hakkında Sık Sorulan Sorular",
    intro:
      "Seçim, entegrasyon ve teklif sürecinde en sık gelen soruları aşağıda özetledik. Daha teknik bilgiler için proje verilerinizi paylaşarak mühendislik ekibimizle görüşebilirsiniz.",
    items: machineFaqs,
  },
};

export default function MachinesIndexPage() {
  return <MachinesOverviewPage content={trOverviewContent} structuredData={<JsonLd />} />;
}
