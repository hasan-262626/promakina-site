import type { Metadata } from "next";
import Link from "next/link";

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

const topicGroups: TopicGroup[] = [
  {
    title: "Kurutma Tamburu ve Kurutma Sistemleri",
    description:
      "Kurutma tamburu seçimi, kapasite hesabı, çap-boy oranı, rotary dryer design ve endüstriyel kurutma uygulamalarını bir araya getiren ana cluster.",
    primaryHref: "/hizmetler/kurutma-tamburu-imalati",
    articles: [
      { title: "Kurutma Tamburu Kapasite Hesabı", href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" },
      { title: "Kurutma Tamburu Çap Boy Hesabı", href: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi" },
      { title: "Rotary Dryer Design", href: "/kutuphane/blog/rotary-dryer-design" },
      { title: "Endüstriyel Kurutma Sistemleri", href: "/hizmetler/kurutma-tamburu-imalati" },
      { title: "Tambur Kurutucu Nasıl Çalışır?", href: "/kutuphane/blog/tambur-kurutucu-nasil-calisir" },
      { title: "Silis Kumu Kurutma Prosesi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { title: "Çamur Kurutma Tesisi Maliyeti", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "Kurutma Tamburu Tasarım Kriterleri", href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri" },
    ],
  },
  {
    title: "Tambur Sistemleri",
    description:
      "Granülatör, kurutma, soğutma, kaplama ve kompost tamburu gibi döner sistemlerin seçim ve tasarım mantığını bir arada inceleyin.",
    primaryHref: "/makinalar-ekipman/tambur-sistemleri",
    articles: [
      { title: "Granülatör Tamburu Seçimi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { title: "Kurutma Tamburu Seçimi", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Soğutma Tamburu Nasıl Çalışır?", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { title: "Kaplama Tamburu Kullanım Alanları", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { title: "Kompost Tamburu Seçim Kriterleri", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Tambur Devir Hesabı", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Tambur Eğim ve Doluluk Oranı", href: "/programlar/kurutma-tamburu-hesabi" },
      { title: "Tambur Ring ve Tahrik Sistemi", href: "/makinalar-ekipman/tambur-sistemleri" },
    ],
  },
  {
    title: "Helezon & Konveyör",
    description:
      "Taşıma hatlarında kapasite, motor gücü, eğim etkisi, ürün yoğunluğu ve vidalı konveyör mantığını birlikte toplayan teknik bilgi ağı.",
    primaryHref: "/makinalar-ekipman/tasima-ekipmanlari",
    articles: [
      { title: "Helezon Kapasite Hesabı", href: "/kutuphane/blog/helezon-kapasite-hesabi" },
      { title: "Helezon Motor Gücü Hesabı", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
      { title: "Konveyör Kapasite Hesabı", href: "/programlar/konveyor-kapasite-hesabi" },
      { title: "Eğimli Helezon Hesabı", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { title: "Vidalı Konveyör Hesabı", href: "/kutuphane/blog/vidali-konveyor-tasarimi" },
      { title: "Bant Konveyör Seçimi", href: "/programlar/konveyor-kapasite-ve-secim-hesap-programi" },
      { title: "Kovalı Elevatör Kapasite Hesabı", href: "/programlar/elevator-kapasite-hesabi" },
      { title: "Dökme Katı Malzeme Taşıma Sistemi Seçimi", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
  },
  {
    title: "Gübre Tesisi",
    description:
      "Organomineral, granül, NPK ve sıvı gübre yatırımları için proses, ekipman ve ticari kararları tek cluster altında birleştirir.",
    primaryHref: "/hizmetler/gubre-tesisi-kurulumu",
    articles: [
      { title: "Organomineral Gübre Tesisi Maliyeti", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
      { title: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "NPK Gübre Üretimi", href: "/kutuphane/blog/npk-gubre-uretimi" },
      { title: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { title: "Gübre Üretim Hattı", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", href: "/hizmetler/kurutma-tamburu-imalati" },
      { title: "Gübre Paketleme Hattı", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Granülasyon Prosesi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    ],
  },
  {
    title: "Sıvı Gübre ve Proses Tankları",
    description:
      "Sıvı organomineral, sıvı NPK, amino asitli ürünler ve biyostimülan üretimi için reaktör, tank, filtrasyon ve dolum içeriklerini inceleyin.",
    primaryHref: "/hizmetler/sivi-gubre-uretim-tesisi",
    articles: [
      { title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
      { title: "Sıvı Gübre Reaktör Seçimi", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Karıştırıcılı Tank Tasarım Kriterleri", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Çözündürme Tankı Kullanımı", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Gübre Filtrasyon Sistemi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Sıvı Dolum ve Etiketleme Hattı", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Amino Asitli Sıvı Ürün Prosesi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Biyostimülan Üretim Hattı", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    ],
  },
  {
    title: "Kompost & Atık",
    description:
      "Kompost, organik atık, çamur kurutma ve biyogaz ön işlem konularını aynı teknik içerik halkasında toplayan cluster yapısı.",
    primaryHref: "/sektorler/kompost-ve-organik-atik-tesisleri",
    articles: [
      { title: "Kompost Tesisi Kurulumu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
      { title: "Organik Atık Tesisi", href: "/kutuphane/blog/organik-atik-tesisi" },
      { title: "Çamur Kurutma Sistemi", href: "/kutuphane/blog/camur-kurutma-sistemi" },
      { title: "Biyogaz Ön İşlem", href: "/kutuphane/blog/biyogaz-on-islem" },
      { title: "Kompost Üretim Süreci", href: "/kutuphane/blog/kompost-uretim-sureci" },
      { title: "Trommel Elek Seçimi", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Kompost Tamburu Seçim Kriterleri", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { title: "Evsel Organik Atık İşleme Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar" },
    ],
  },
  {
    title: "Maden ve Mineral İşleme",
    description:
      "Silis kumu, kuvars, perlit, bentonit, kireç taşı ve benzeri mineral hammaddelerde kırma, eleme, kurutma ve taşıma içeriklerini inceleyin.",
    primaryHref: "/sektorler/madencilik-ve-mineral-isleme",
    articles: [
      { title: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { title: "Perlit Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "Maden Kurutma Tesisi Seçim Kriterleri", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "Kırıcı Seçimi Nasıl Yapılır?", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { title: "Trommel Elek ve Vibrasyonlu Elek Farkı", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { title: "Mineral Kurutma Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { title: "Toz Toplama ve Siklon Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Bant Konveyörlü Maden Taşıma Hatları", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
    ],
  },
  {
    title: "Biyogaz, Digestat ve Atık Yönetimi",
    description:
      "Biyogaz ön işlem, organik atık besleme, digestat kurutma, RDF/SRF hazırlama ve entegre atık yönetimi içeriklerini inceleyin.",
    primaryHref: "/sektorler/enerji-ve-biyogaz-sistemleri",
    articles: [
      { title: "1 MW Biyogaz Tesisi", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Biyogaz Ön İşlem Sistemleri", href: "/kutuphane/blog/biyogaz-on-islem" },
      { title: "Hayvansal Atıklardan Biyogaz Tesisi", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Digestat Kurutma ve Kompostlaştırma", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Organik Atık Besleme Sistemleri", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { title: "RDF / SRF Hazırlama Tesisi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { title: "Atık Kabul ve Dozajlama Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { title: "Entegre Atık Yönetimi Tesisi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
    ],
  },
  {
    title: "Reaktör, Tank ve Kimyasal Prosesler",
    description:
      "Kimyasal proses, çözündürme, karıştırma, reaksiyon, stoklama ve dozajlama hatları için reaktör ve tank içeriklerini inceleyin.",
    primaryHref: "/makinalar-ekipman/reaktorler-ve-tanklar",
    articles: [
      { title: "Reaktör ve Karıştırıcılı Tank Seçimi", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Sıvı Kimyasal Hazırlama Tesisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { title: "Çözündürme Tankı Kullanımı", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Asit ve Baz Dozajlama Sistemleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { title: "Karıştırma ve Homojenizasyon Tesisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { title: "Proses Tanklarında Malzeme Seçimi", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Reaktör Hacmi Nasıl Belirlenir?", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { title: "Kimyasal Proses Hatlarında Güvenlik", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
  },
  {
    title: "Paketleme, Dolum ve Son Ürün Hazırlama",
    description:
      "Toz, granül, sıvı ve dökme ürünlerin ticari ürüne dönüştürülmesi için torbalama, big bag dolum, sıvı dolum ve etiketleme içeriklerini inceleyin.",
    primaryHref: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    articles: [
      { title: "Açık Ağız Torbalama Sistemi", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Big Bag Dolum Sistemi", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Gübre Paketleme Hattı", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Granül Ürün Paketleme Sistemi", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Sıvı Dolum Makinesi Seçimi", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Şişe Etiketleme Hattı", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Paletleme ve Sevkiyat Sistemi", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Paketleme Hattı Kapasite Planlama", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
  },
  {
    title: "Toz Toplama, Siklon ve Filtrasyon",
    description:
      "Kurutma, eleme, kırma, paketleme ve dökme ürün proseslerinde toz kontrolü, siklon, jet pulse filtre ve baca hattı seçim kriterlerini inceleyin.",
    primaryHref: "/makinalar-ekipman/toz-toplama-sistemleri",
    articles: [
      { title: "Jet Pulse Filtre Seçimi", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Siklon Ayırıcı Nasıl Çalışır?", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Kurutma Hattında Toz Toplama", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Eleme Hattında Toz Kontrolü", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Paketleme Hattı Toz Emisyonu", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Baca ve Fan Seçimi", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Toz Toplama Debisi Nasıl Hesaplanır?", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Endüstriyel Toz Toplama Sistemi", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
  },
];

const highlightedGuides: ArticleLink[] = [
  { title: "Kurutma Tamburu Hesaplama", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
  { title: "Kurutma Tamburu Tasarım Kriterleri", href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri" },
  { title: "Helezon Motor Gücü Hesabı", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
  { title: "Bant Konveyör Seçimi", href: "/programlar/konveyor-kapasite-ve-secim-hesap-programi" },
  { title: "Kovalı Elevatör Hesabı", href: "/programlar/elevator-kapasite-hesabi" },
  { title: "Rotary Dryer Design", href: "/kutuphane/blog/rotary-dryer-design" },
  { title: "NPK Gübre Üretimi", href: "/kutuphane/blog/npk-gubre-uretimi" },
  { title: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
  { title: "Kompost Tesisi Kurulumu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
  { title: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
  { title: "Sıvı Gübre Üretim Hattı", href: "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur" },
  { title: "Çamur Kurutma Tesisi Maliyeti", href: "/hizmetler/camur-kurutma-tesisi" },
  { title: "Trommel Elek Seçim Kriterleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
  { title: "Reaktör ve Tank Seçimi", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  { title: "Toz Toplama Sistemi Seçimi", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
  { title: "Gübre Paketleme Hattı", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
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
    hasPart: topicGroups.map((group) => ({
      "@type": "CreativeWork",
      name: group.title,
      url: `https://www.promakina.com.tr${group.primaryHref}`,
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
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
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Konu Başlığına Göre Teknik Makaleler
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                İlgilendiğiniz sistemi seçerek ilgili hesaplama, tasarım, proses ve ekipman
                seçimi içeriklerine hızlıca ulaşabilirsiniz.
              </p>
            </div>

            <div className="section-gap space-y-6">
              {topicGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {group.title}
                      </h2>
                      <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                        {group.description}
                      </p>
                    </div>
                    <Link
                      href={group.primaryHref}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800"
                    >
                      Cluster’ı İncele
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {group.articles.map((article) => (
                      <Link
                        key={`${group.title}-${article.title}`}
                        href={article.href}
                        className="flex min-h-[58px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
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
                  className="flex min-h-[58px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
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
          <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
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
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
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
