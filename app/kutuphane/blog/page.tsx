import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import { topicalBlogCategories } from "../../lib/topical-authority-blog-data";

export const metadata: Metadata = {
  title: "Blog / Makaleler | Kütüphane | Pro Makina",
  description:
    "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve endüstriyel yatırım kararları üzerine teknik blog makaleleri.",
  },
};

const featuredArticles = [
  {
    title: "Kurutma Tamburu Hesaplama",
    description:
      "Kapasite, çap-boy seçimi, hava debisi, enerji ihtiyacı ve lifter yapısını birlikte okuyan ana rehber.",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    description:
      "Ürün yoğunluğu, doluluk oranı, hatve, devir ve eğim etkisini aynı tabloda değerlendiren makale.",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    description:
      "Granülasyon, kurutma, eleme, geri devir ve paketleme adımlarını proses bütünlüğü içinde anlatır.",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
  },
  {
    title: "Kompost Tesisi Nasıl Kurulur?",
    description:
      "Organik atık kabulü, nem yönetimi, olgunlaştırma ve çevresel kontrol mantığını yatırım diliyle açıklar.",
    href: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Blog / Makaleler"
        description="Endüstriyel tesisler, kurutma, taşıma, gübre teknolojileri ve proses mühendisliği üzerine teknik ama okunabilir içerikler."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">BLOG HUB</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Proses mühendisliği ve endüstriyel yatırım kararları için bilgi merkezi
              </h1>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina blog bölümü, yalnız SEO için yazılmış yüzeysel içeriklerden oluşmaz. Bu yapı; gübre tesisi,
                  kompost tesisi, kurutma tamburu, konveyör sistemleri, reaktörler, tanklar ve proses ekipmanları
                  etrafında gerçek yatırım kararına destek olmak için kurgulanmıştır. Türkiye pazarında yatırım yapan
                  sanayi kuruluşları, belediyeler ve fabrika sahipleri çoğu zaman aynı anda hem teknik doğruluk hem de
                  ticari öngörü arar. Bu yüzden içeriklerimizi yalnız anahtar kelimeye değil, sahadaki gerçek sorulara
                  göre inşa ediyoruz.
                </p>
                <p>
                  Burada yer alan her kategori, kendi içinde bir topical authority mantığı taşır. Kurutma sistemleri
                  tarafında kapasite hesabı, rotary dryer design ve enerji yaklaşımı birlikte okunur. Konveyör
                  sistemleri tarafında ise helezon kapasitesi ile motor gücü hesabı aynı küme içinde değerlendirilir.
                  Gübre teknolojileri grubunda granül, NPK, organomineral ve sıvı ürün perspektifleri ayrı başlıklarda
                  açılır ama aynı mühendislik altyapısına bağlanır. Böylece kullanıcı, tek makale okumak yerine, bir
                  bilgi kümesinin içine girer ve sonraki adıma doğal biçimde yönlenir.
                </p>
                <p>
                  Blog / Makaleler sayfası aynı zamanda{" "}
                  <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    hizmetler
                  </Link>
                  ,{" "}
                  <Link href="/makinalar" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    makinalar
                  </Link>
                  ,{" "}
                  <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    sektörler
                  </Link>{" "}
                  ve{" "}
                  <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    iletişim
                  </Link>{" "}
                  sayfalarıyla birlikte çalışan bir keşif katmanıdır. Amaç yalnız okunmak değil; doğru kişiyi doğru
                  teknik içeriğe, oradan da teklif veya teknik değerlendirme sürecine taşımaktır.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Öne Çıkan İçerikler</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <span className="block text-base font-semibold text-slate-950">{article.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-slate-600">{article.description}</span>
                    <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      Devamını Oku
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {topicalBlogCategories.map((category) => (
                <article
                  key={category.slug}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {category.title}
                      </h2>
                      <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                        {category.description}
                      </p>
                    </div>
                    <Link
                      href={`/kutuphane/blog/${category.slug}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Kategoriyi İncele
                    </Link>
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {category.relatedContents.slice(0, 4).map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
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
    </main>
  );
}
