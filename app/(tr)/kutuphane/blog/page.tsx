import type { Metadata } from "next";
import Link from "next/link";
import { TechnicalTopicClustersShowcase } from "../../components/technical-topic-clusters-showcase";
import { technicalTopicClusters } from "../../lib/technical-topic-cluster-data";

export const metadata: Metadata = {
  title: "Blog ve Teknik Makaleler",
  description:
    "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog ve Teknik Makaleler | Pro Makina",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog ve Teknik Makaleler | Pro Makina",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları, konveyör hatları, maden prosesleri ve endüstriyel ekipman seçimi için teknik makaleler.",
  },
};

type ArticleLink = {
  title: string;
  href: string;
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

const highlightedGuides: ArticleLink[] = [
  { title: "Sektörel Makine Rehberleri", href: blogCategoryHrefs.sectoral },
  { title: "Kurutma Tamburu Hesaplama", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
  { title: "Kurutma Tamburu Tasarım Kriterleri", href: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri" },
  { title: "Helezon Motor Gücü Hesabı", href: "/kutuphane/blog/helezon-motor-gucu-hesabi" },
  { title: "Bant Konveyör Seçimi", href: "/kutuphane/blog/konveyor-kapasite-hesabi" },
  { title: "Kovalı Elevatör Hesabı", href: blogCategoryHrefs.conveyor },
  { title: "Rotary Dryer Design", href: "/kutuphane/blog/rotary-dryer-design" },
  { title: "NPK Gübre Üretimi", href: "/kutuphane/blog/npk-gubre-uretimi" },
  { title: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
  { title: "Kompost Tesisi Kurulumu", href: "/kutuphane/blog/kompost-tesisi-kurulumu" },
  { title: "Silis Kumu Kurutma Tesisi", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
  { title: "Sıvı Gübre Üretim Hattı", href: "/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur" },
  { title: "Çamur Kurutma Tesisi Maliyeti", href: "/kutuphane/blog/camur-kurutma-tesisi-maliyeti" },
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
