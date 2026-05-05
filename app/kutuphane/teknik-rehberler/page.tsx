import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Teknik Rehberler | Kütüphane | Pro Makina",
  description:
    "Kurutma tamburu, proses ekipmanları, hesaplama mantıkları ve ön mühendislik kararlarını destekleyen teknik rehberler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/teknik-rehberler",
  },
  openGraph: {
    title: "Teknik Rehberler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu, proses ekipmanları, hesaplama mantıkları ve ön mühendislik kararlarını destekleyen teknik rehberler.",
    url: "https://www.promakina.com.tr/kutuphane/teknik-rehberler",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknik Rehberler | Kütüphane | Pro Makina",
    description:
      "Kurutma tamburu, proses ekipmanları, hesaplama mantıkları ve ön mühendislik kararlarını destekleyen teknik rehberler.",
  },
};

const guides = [
  {
    title: "Kurutma Tamburu Tasarım Kriterleri",
    description:
      "Tambur çapı, boyu, eğim, devir, ürün nemi ve enerji tüketimi gibi temel tasarım parametrelerini açıklayan teknik rehber.",
    href: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
  },
];

export default function TechnicalGuidesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Teknik Rehberler"
        description="Ekipman seçimi, tasarım mantığı ve ön mühendislik kararlarını destekleyen teknik içerikler."
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
                Teknik rehber içerikleri
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Bu bölümdeki rehberler, sahaya yansıyacak mühendislik kararlarını daha güvenli
                vermek için hazırlanmıştır.
              </p>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Teknik Rehberler Ne Sunar?
              </h2>
              <div className="mt-4 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Teknik Rehberler kategorisi, endüstriyel tesis kurulumunda doğrudan hesap ve
                  seçim mantığını etkileyen başlıkları daha sistematik biçimde açıklamak için
                  hazırlanmıştır. Bu sayfalarda yalnızca ürün tanıtımı değil; kurutma tamburu,
                  taşıma ekipmanları, proses dengesi, kapasite kurgusu ve ön mühendislik kararları
                  gibi teknik başlıklara odaklanılır. Türkiye pazarında yatırım yapan firmalar,
                  çoğu zaman makine seçiminden önce hangi parametrelerin önemli olduğunu anlamak
                  ister. Teknik rehberler tam olarak bu ihtiyacı karşılar.
                </p>
                <p>
                  Özellikle kurutma tamburu gibi prosesin merkezinde duran ekipmanlarda; çap, boy,
                  eğim, devir, ürün nemi ve enerji yükü birlikte ele alınmalıdır. Aynı mantık,
                  konveyör sistemleri, reaktörler, bunkerler ve diğer proses ekipmanları için de
                  geçerlidir. Bu kategori;{" "}
                  <Link href="/makinalar" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    makinalar
                  </Link>
                  ,{" "}
                  <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    hizmetler
                  </Link>{" "}
                  ve{" "}
                  <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    sektörler
                  </Link>{" "}
                  sayfalarında görülen çözümlerin arka plan mühendisliğini daha anlaşılır hale
                  getirir. Böylece kullanıcı yalnızca neyin üretildiğini değil, neden o şekilde
                  tasarlandığını da görebilir.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    TEKNİK REHBER
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {guide.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    İçeriği İncele
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Ön Mühendislik ve Hesap Mantığı
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Bu kategori altındaki içerikler, yatırım kararı ile detay mühendislik arasındaki
                boşluğu doldurur. Yani tam proje hesabı yerine, sahada hangi parametrelerin
                sonucu belirlediğini gösteren güçlü ön seçim yaklaşımı sunar. Böylece hem teknik
                ekipler hem yatırımcı tarafı, teklif öncesi daha bilinçli hareket edebilir. Arama
                motorları açısından da bu yapı, tekil makale sayfalarının bağlamını güçlendirir ve
                kategori sayfasını daha indekslenebilir hale getirir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
