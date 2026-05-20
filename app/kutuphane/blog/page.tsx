import type { Metadata } from "next";
import Link from "next/link";
import { TechnicalTopicClustersShowcase } from "../../components/technical-topic-clusters-showcase";
import { technicalTopicClusters } from "../../lib/technical-topic-cluster-data";

export const metadata: Metadata = {
  title: "Blog / Teknik Makaleler | Pro Makina Kütüphane",
  description:
    "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog / Teknik Makaleler | Pro Makina Kütüphane",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Teknik Makaleler | Pro Makina Kütüphane",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
  },
};

type ArticleLink = {
  title: string;
  href: string;
};

type TopicGroup = {
  title: string;
  description: string;
  primaryHref: string;
  articles: ArticleLink[];
};

const blogCategoryHrefs = {
  drying: "/kutuphane/blog/kurutma-sistemleri",
  equipment: "/kutuphane/blog/endustriyel-ekipmanlar",
  conveyor: "/kutuphane/blog/konveyor-ve-helezon",
  fertilizer: "/kutuphane/blog/gubre-teknolojileri",
  compost: "/kutuphane/blog/kompost-ve-atik",
  biogas: "/kutuphane/blog/biyogaz-ve-enerji",
  process: "/kutuphane/blog/proses-muhendisligi",
  sectoral: "/kutuphane/blog/sektorel-makine-rehberleri",
} as const;

const topicGroups: TopicGroup[] = [
  {
    title: "Kurutma Tamburu ve Kurutma Sistemleri",
    description:
      "Kurutma tamburu seçimi, kapasite hesabı, çap-boy oranı, rotary dryer design ve endüstriyel kurutma uygulamalarını bir araya getiren ana cluster.",
    primaryHref: blogCategoryHrefs.drying,
    articles: [
      { title: "Kurutma Tamburu Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Rotary Dryer Design", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Endüstriyel Kurutma Sistemleri", href: "/kutuphane/blog/endustriyel-kurutma-sistemleri" },
      { title: "Tambur Kurutucu Nasıl Çalışır?", href: "/kutuphane/blog/tambur-kurutucu-nasil-calisir" },
      { title: "Silis Kumu Kurutma Prosesi", href: blogCategoryHrefs.drying },
      { title: "Çamur Kurutma Tesisi Maliyeti", href: "/kutuphane/blog/camur-kurutma-sistemi" },
      { title: "Kurutma Tamburu Tasarım Kriterleri", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
    ],
  },
  {
    title: "Tambur Sistemleri",
    description:
      "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu gibi döner sistemlerin seçim ve tasarım mantığını bir arada inceleyin.",
    primaryHref: blogCategoryHrefs.equipment,
    articles: [
      { title: "Granülatör Tamburu Seçimi", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Kurutma Tamburu Seçimi", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Soğutma Tamburu Nasıl Çalışır?", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Kaplama Tamburu Kullanım Alanları", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Kompost Tamburu Seçim Kriterleri", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      { title: "Tambur Devir Hesabı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Tambur Eğim ve Doluluk Oranı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Tambur Ring ve Tahrik Sistemi", href: "/kutuphane/blog/rotary-dryer-design" },
    ],
  },
  {
    title: "Helezon & Konveyör",
    description:
      "Taşıma hatlarında kapasite, motor gücü, eğim etkisi, ürün yoğunluğu ve vidalı konveyör mantığını birlikte toplayan teknik bilgi ağı.",
    primaryHref: blogCategoryHrefs.conveyor,
    articles: [
      { title: "Helezon Kapasite Hesabı", href: "/kutuphane/blog/helezon-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
      { title: "Eğimli Helezon Hesabı", href: "/kutuphane/blog/egimli-helezon-hesabi" },
      { title: "Vidalı Konveyör Hesabı", href: "/kutuphane/blog/vidali-konveyor-hesabi" },
      { title: "Bant Konveyör Seçimi", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
      { title: "Kovalı Elevatör Kapasite Hesabı", href: blogCategoryHrefs.conveyor },
      { title: "Dökme Katı Malzeme Taşıma Sistemi Seçimi", href: blogCategoryHrefs.conveyor },
    ],
  },
  {
    title: "Gübre Tesisi",
    description:
      "Organomineral, granül, NPK ve sıvı gübre yatırımları için proses, ekipman ve ticari kararları tek cluster altında birleştirir.",
    primaryHref: blogCategoryHrefs.fertilizer,
    articles: [
      { title: "Organomineral Gübre Tesisi Maliyeti", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
      { title: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "NPK Gübre Üretimi", href: "/kutuphane/blog/npk-gubre-uretimi" },
      { title: "Gübre Tesisi Kurulumu", href: "/kutuphane/blog/gubre-tesisi-kurulumu" },
      { title: "Gübre Üretim Hattı", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Paketleme Hattı", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Granülasyon Prosesi", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
    ],
  },
  {
    title: "Sıvı Gübre ve Proses Tankları",
    description:
      "Sıvı organomineral, sıvı NPK, amino asitli ürünler ve biyostimülan üretimi için reaktör, tank, filtrasyon ve dolum içeriklerini inceleyin.",
    primaryHref: blogCategoryHrefs.process,
    articles: [
      { title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Sıvı Gübre Reaktör Seçimi", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", href: blogCategoryHrefs.process },
      { title: "Çözündürme Tankı Kullanımı", href: blogCategoryHrefs.process },
      { title: "Sıvı Gübre Filtrasyon Sistemi", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Amino Asitli Sıvı Ürün Prosesi", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Biyostimülan Üretim Hattı", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
    ],
  },
  {
    title: "Kompost & Atık",
    description:
      "Kompost, organik atık, çamur kurutma ve biyogaz ön işlem konularını aynı teknik içerik halkasında toplayan cluster yapısı.",
    primaryHref: blogCategoryHrefs.compost,
    articles: [
      { title: "Kompost Tesisi Kurulumu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      { title: "Organik Atık Tesisi", href: "/kutuphane/blog/organik-atik-tesisi" },
      { title: "Çamur Kurutma Sistemi", href: "/kutuphane/blog/camur-kurutma-sistemi" },
      { title: "Biyogaz Ön İşlem", href: "/kutuphane/blog/biyogaz-on-islem" },
      { title: "Kompost Üretim Süreci", href: "/kutuphane/blog/kompost-uretim-sureci" },
      { title: "Trommel Elek Seçimi", href: blogCategoryHrefs.compost },
      { title: "Kompost Tamburu Seçim Kriterleri", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      { title: "Evsel Organik Atık İşleme Tesisi", href: "/kutuphane/blog/organik-atik-isleme-tesisi" },
    ],
  },
  {
    title: "Maden ve Mineral İşleme",
    description:
      "Silis kumu, kuvars, perlit, bentonit, kireç taşı ve benzeri mineral hammaddelerde kırma, eleme, kurutma ve taşıma içeriklerini inceleyin.",
    primaryHref: blogCategoryHrefs.equipment,
    articles: [
      { title: "Silis Kumu Kurutma Tesisi", href: blogCategoryHrefs.drying },
      { title: "Perlit Kurutma ve Eleme Tesisi", href: blogCategoryHrefs.equipment },
      { title: "Maden Kurutma Tesisi Seçim Kriterleri", href: blogCategoryHrefs.equipment },
      { title: "Kırıcı Seçimi Nasıl Yapılır?", href: blogCategoryHrefs.equipment },
      { title: "Trommel Elek ve Vibrasyonlu Elek Farkı", href: blogCategoryHrefs.equipment },
      { title: "Mineral Kurutma Tamburu", href: blogCategoryHrefs.drying },
      { title: "Toz Toplama ve Siklon Sistemleri", href: blogCategoryHrefs.equipment },
      { title: "Bant Konveyörlü Maden Taşıma Hatları", href: blogCategoryHrefs.conveyor },
    ],
  },
  {
    title: "Biyogaz, Digestat ve Atık Yönetimi",
    description:
      "Biyogaz ön işlem, organik atık besleme, digestat kurutma, RDF/SRF hazırlama ve entegre atık yönetimi içeriklerini inceleyin.",
    primaryHref: blogCategoryHrefs.biogas,
    articles: [
      { title: "1 MW Biyogaz Tesisi", href: blogCategoryHrefs.biogas },
      { title: "Biyogaz Ön İşlem Sistemleri", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
      { title: "Hayvansal Atıklardan Biyogaz Tesisi", href: blogCategoryHrefs.biogas },
      { title: "Digestat Kurutma ve Kompostlaştırma", href: blogCategoryHrefs.biogas },
      { title: "Organik Atık Besleme Sistemleri", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
      { title: "RDF / SRF Hazırlama Tesisi", href: blogCategoryHrefs.biogas },
      { title: "Atık Kabul ve Dozajlama Sistemleri", href: "/kutuphane/blog/biyogaz-on-islem-sistemleri" },
      { title: "Entegre Atık Yönetimi Tesisi", href: blogCategoryHrefs.biogas },
    ],
  },
  {
    title: "Reaktör, Tank ve Kimyasal Prosesler",
    description:
      "Kimyasal proses, çözündürme, karıştırma, reaksiyon, stoklama ve dozajlama hatları için reaktör ve tank içeriklerini inceleyin.",
    primaryHref: blogCategoryHrefs.process,
    articles: [
      { title: "Reaktör ve Karıştırıcılı Tank Seçimi", href: blogCategoryHrefs.process },
      { title: "Sıvı Kimyasal Hazırlama Tesisi", href: blogCategoryHrefs.process },
      { title: "Çözündürme Tankı Kullanımı", href: blogCategoryHrefs.process },
      { title: "Asit ve Baz Dozajlama Sistemleri", href: blogCategoryHrefs.process },
      { title: "Karıştırma ve Homojenizasyon Tesisi", href: blogCategoryHrefs.process },
      { title: "Proses Tanklarında Malzeme Seçimi", href: blogCategoryHrefs.process },
      { title: "Reaktör Hacmi Nasıl Belirlenir?", href: blogCategoryHrefs.process },
      { title: "Kimyasal Proses Hatlarında Güvenlik", href: blogCategoryHrefs.process },
    ],
  },
  {
    title: "Paketleme, Dolum ve Son Ürün Hazırlama",
    description:
      "Toz, granül, sıvı ve dökme ürünlerin ticari ürüne dönüştürülmesi için torbalama, big bag dolum, sıvı dolum ve etiketleme içeriklerini inceleyin.",
    primaryHref: blogCategoryHrefs.equipment,
    articles: [
      { title: "Açık Ağız Torbalama Sistemi", href: blogCategoryHrefs.equipment },
      { title: "Big Bag Dolum Sistemi", href: blogCategoryHrefs.equipment },
      { title: "Gübre Paketleme Hattı", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Granül Ürün Paketleme Sistemi", href: blogCategoryHrefs.equipment },
      { title: "Sıvı Dolum Makinesi Seçimi", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Şişe Etiketleme Hattı", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Paletleme ve Sevkiyat Sistemi", href: blogCategoryHrefs.equipment },
      { title: "Paketleme Hattı Kapasite Planlama", href: blogCategoryHrefs.equipment },
    ],
  },
  {
    title: "Sektörel Makine Rehberleri",
    description:
      "Maden, gübre, kompost, çamur, biyogaz, kimya, taşıma ve paketleme hatlarında kullanılan makine gruplarını sektör bazlı okumanızı sağlayan teknik blog kümesi.",
    primaryHref: blogCategoryHrefs.sectoral,
    articles: [
      { title: "Maden ve Mineral İşleme Makinaları", href: "/kutuphane/blog/maden-ve-mineral-isleme-makinalari" },
      { title: "Sıvı Gübre Üretim Makinaları", href: "/kutuphane/blog/sivi-gubre-uretim-makinalari" },
      { title: "Granül ve Organomineral Gübre Makinaları", href: "/kutuphane/blog/granul-ve-organomineral-gubre-makinalari" },
      { title: "Kompost ve Organik Atık Makinaları", href: "/kutuphane/blog/kompost-ve-organik-atik-makinalari" },
      { title: "Kurutma ve Termal Proses Makinaları", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { title: "Taşıma, Dozajlama ve Depolama Ekipmanları", href: "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari" },
      { title: "Atık Su Çamuru ve Arıtma Makinaları", href: "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari" },
      { title: "Biyogaz Ön İşlem ve Digestat Makinaları", href: "/kutuphane/blog/biyogaz-on-islem-ve-digestat-makinalari" },
      { title: "Kimya ve Proses Endüstrisi Ekipmanları", href: "/kutuphane/blog/kimya-ve-proses-endustrisi-ekipmanlari" },
      { title: "Paketleme, Dolum ve Son Ürün Hazırlama Sistemleri", href: "/kutuphane/blog/paketleme-dolum-ve-son-urun-hazirlama-sistemleri" },
    ],
  },
  {
    title: "Toz Toplama, Siklon ve Filtrasyon",
    description:
      "Kurutma, eleme, kırma, paketleme ve dökme ürün proseslerinde toz kontrolü, siklon, jet pulse filtre ve baca hattı seçim kriterlerini inceleyin.",
    primaryHref: blogCategoryHrefs.equipment,
    articles: [
      { title: "Jet Pulse Filtre Seçimi", href: blogCategoryHrefs.equipment },
      { title: "Siklon Ayırıcı Nasıl Çalışır?", href: blogCategoryHrefs.equipment },
      { title: "Kurutma Hattında Toz Toplama", href: blogCategoryHrefs.equipment },
      { title: "Eleme Hattında Toz Kontrolü", href: blogCategoryHrefs.equipment },
      { title: "Paketleme Hattı Toz Emisyonu", href: blogCategoryHrefs.equipment },
      { title: "Baca ve Fan Seçimi", href: blogCategoryHrefs.equipment },
      { title: "Toz Toplama Debisi Nasıl Hesaplanır?", href: blogCategoryHrefs.equipment },
      { title: "Endüstriyel Toz Toplama Sistemi", href: blogCategoryHrefs.equipment },
    ],
  },
];

const highlightedGuides: ArticleLink[] = [
  { title: "Sektörel Makine Rehberleri", href: blogCategoryHrefs.sectoral },
  { title: "Kurutma Tamburu Hesaplama", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
  { title: "Kurutma Tamburu Tasarım Kriterleri", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
  { title: "Helezon Motor Gücü Hesabı", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
  { title: "Bant Konveyör Seçimi", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
  { title: "Kovalı Elevatör Hesabı", href: blogCategoryHrefs.conveyor },
  { title: "Rotary Dryer Design", href: "/kutuphane/blog/rotary-dryer-design" },
  { title: "NPK Gübre Üretimi", href: "/kutuphane/blog/npk-gubre-uretimi" },
  { title: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
  { title: "Kompost Tesisi Kurulumu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
  { title: "Silis Kumu Kurutma Tesisi", href: blogCategoryHrefs.drying },
  { title: "Sıvı Gübre Üretim Hattı", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
  { title: "Çamur Kurutma Tesisi Maliyeti", href: "/kutuphane/blog/camur-kurutma-sistemi" },
  { title: "Trommel Elek Seçim Kriterleri", href: blogCategoryHrefs.compost },
  { title: "Reaktör ve Tank Seçimi", href: blogCategoryHrefs.process },
  { title: "Toz Toplama Sistemi Seçimi", href: blogCategoryHrefs.equipment },
  { title: "Gübre Paketleme Hattı", href: "/kutuphane/blog/gubre-uretim-hatti" },
];

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kütüphane",
        item: "https://www.promakina.com.tr/kutuphane",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog / Teknik Makaleler",
        item: "https://www.promakina.com.tr/kutuphane/blog",
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Endüstriyel tesisler için teknik makale merkezi",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları, helezon ve konveyör hatları, maden prosesleri, sıvı gübre üretimi ve endüstriyel ekipman seçimi hakkında teknik makaleler.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    hasPart: technicalTopicClusters.map((group) => ({
      "@type": "CreativeWork",
      name: group.title,
      url: `https://www.promakina.com.tr${group.allPostsUrl}`,
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      <section className="hero-section border-b border-slate-200 bg-[linear-gradient(135deg,#07152b_0%,#10325f_52%,#d8e4f2_180%)] text-white">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              BLOG / TEKNİK MAKALELER
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Endüstriyel tesisler için teknik makale merkezi
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/86 sm:text-lg">
              Gübre tesisleri, kompost sistemleri, kurutma tamburları, helezon ve konveyör
              hatları, maden prosesleri, sıvı gübre üretimi ve endüstriyel ekipman seçimi
              hakkında teknik makaleleri konu başlıklarına göre inceleyin.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <TechnicalTopicClustersShowcase clusters={technicalTopicClusters} />
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Öne Çıkan Teknik Rehberler
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                En çok ihtiyaç duyulan hesaplama, proses ve ekipman seçimi içeriklerine hızlıca
                ulaşın.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {highlightedGuides.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="flex min-h-[58px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800 transition hover:border-[#278DC0] hover:bg-white hover:text-[#278DC0]"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[28px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Teknik içeriği projeye dönüştürmek ister misiniz?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              Kapasite, hammadde, ürün formu ve saha koşullarınızı paylaşın; ilgili makine,
              tesis ve proses çözümünü birlikte değerlendirelim.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Görüşme Talep Et
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetleri İncele
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Makinaları İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
