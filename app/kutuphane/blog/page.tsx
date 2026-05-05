import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Blog / Makaleler | Kütüphane | Pro Makina",
  description:
    "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve yatırım planlaması üzerine teknik blog makaleleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog",
  },
  openGraph: {
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve yatırım planlaması üzerine teknik blog makaleleri.",
    url: "https://www.promakina.com.tr/kutuphane/blog",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog / Makaleler | Kütüphane | Pro Makina",
    description:
      "Gübre tesisi, proses mühendisliği, kurutma tamburu, konveyör sistemleri ve yatırım planlaması üzerine teknik blog makaleleri.",
  },
};

const articles = [
  {
    title: "Organomineral Gübre Tesisi Maliyeti",
    description:
      "Kapasite, proses tasarımı, makine seçimi ve saha altyapısının organomineral gübre tesisi yatırımına nasıl yansıdığını anlatan teknik yatırım yazısı.",
    href: "/kutuphane/organomineral-gubre-tesisi-maliyeti",
  },
  {
    title: "Granül Gübre Üretim Süreci",
    description:
      "Hammadde hazırlama, granülasyon, kurutma, soğutma ve paketleme akışını Türkiye pazarı odağında ele alan detaylı süreç makalesi.",
    href: "/kutuphane/granul-gubre-uretim-sureci",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi Nasıl Kurulur?",
    description:
      "Sıvı organomineral, amino asitli ve NPK formülasyonlar için proses, ekipman ve kapasite planını açıklayan kapsamlı SEO içeriği.",
    href: "/kutuphane/sivi-gubre-uretim-tesisi-nasil-kurulur",
  },
  {
    title: "Kurutma Tamburu Nasıl Hesaplanır?",
    description:
      "Kapasite hesabı, çap-boy seçimi, giriş-çıkış nemi, sıcaklık ve enerji ihtiyacı üzerinden kurutma tamburu tasarımını anlatan teknik makale.",
    href: "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir",
  },
  {
    title: "Helezon Konveyör Kapasite Hesabı",
    description:
      "Yoğunluk, doluluk oranı, helezon çapı, hatve, devir ve motor gücü ilişkisini açıklayan mühendislik rehberi.",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
  },
  {
    title: "Organomineral Gübre Tesisi Nasıl Kurulur?",
    description:
      "Hammadde hazırlama, reçeteleme, granülasyon, kurutma, eleme ve paketleme akışını teknik ve anlaşılır dille açıklayan SEO makalesi.",
    href: "/kutuphane/blog/organomineral-gubre-tesisi-nasil-kurulur",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Blog / Makaleler"
        description="Gübre, proses ekipmanları ve tesis mühendisliği üzerine teknik ama okunabilir içerikler."
        image="/images/proses1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                LİSTE SAYFASI
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Blog ve makale içerikleri
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Bu bölümde yer alan makaleler, tesis yatırımı ve ekipman seçimi sürecinde
                teknik ekiplere ve yatırımcılara yön verecek şekilde hazırlanmıştır.
              </p>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Blog / Makaleler Kategorisi
              </h2>
              <div className="mt-4 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina blog bölümü, yalnızca yüzeysel tanıtım metinleri üretmek için
                  değil; gübre tesisi yatırımı, kurutma tamburu seçimi, proses mühendisliği
                  kararları ve endüstriyel makine imalatı gibi başlıklarda gerçekten karar
                  destekleyen içerikler sunmak için kurgulanmıştır. Türkiye pazarında yatırım
                  yapan firmalar çoğu zaman aynı anda hem teknik hem ticari veri görmek ister.
                  Bu nedenle burada yer alan her makale; ürün tipi, kapasite hedefi, saha
                  gerçekleri ve yatırım riski gibi başlıkları birlikte ele alır.
                </p>
                <p>
                  Bu kategori içinde yer alan yazılar; granül gübre üretim süreci,
                  organomineral gübre tesisi maliyeti, sıvı gübre üretim tesisi kurgusu ve
                  kurutma tamburu hesap mantığı gibi farklı başlıklarda derinleşir. Böylece
                  okuyucu, ister yeni yatırım planlasın ister mevcut üretim hattını
                  geliştirmek istesin, içeriği sahadaki gerçek ihtiyacına göre kullanabilir.
                  Blog / Makaleler sayfası aynı zamanda{" "}
                  <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    hizmetler
                  </Link>
                  ,{" "}
                  <Link href="/makinalar" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    makinalar
                  </Link>{" "}
                  ve{" "}
                  <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    sektörler
                  </Link>{" "}
                  sayfaları ile birlikte çalışacak şekilde hazırlanmıştır.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    BLOG / MAKALE
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Devamını Oku
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Türkiye Pazarı İçin Teknik İçerik Yaklaşımı
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Türkiye’de endüstriyel tesis yatırımları çoğu zaman kapasite baskısı, ürün
                çeşitliliği, sezon etkisi ve maliyet hassasiyetinin aynı anda görüldüğü bir
                ortamda şekillenir. Bu nedenle SEO uyumlu içerik üretirken yalnızca anahtar
                kelime geçirmeye değil, okuyucunun gerçekten cevap aradığı teknik soruları
                netleştirmeye odaklanıyoruz. Blog / Makaleler kategorisindeki içerikler,
                gübre tesisi planlamasından konveyör sistemleri seçimine, kurutma tamburu
                tasarımından ürün reçetesi kaynaklı proses risklerine kadar karar kalitesini
                yükseltmeyi amaçlar. Her makale, gerektiğinde ilgili hizmet sayfasına geçiş
                sağlayarak kullanıcıyı teklif ve teknik görüşme aşamasına doğal biçimde taşır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
