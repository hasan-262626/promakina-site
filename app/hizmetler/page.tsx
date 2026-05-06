import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { homeServiceCards } from "../home-services-data";

export const metadata: Metadata = {
  title: "Hizmetler | Pro Makina",
  description:
    "Anahtar teslim tesis kurulumu, proses mühendisliği, endüstriyel makine imalatı, montaj ve devreye alma hizmetleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Hizmetler"
        description="Planlama, mühendislik, imalat, kurulum, devreye alma ve teknik destek adımlarını entegre hizmet yapısı içinde sunuyoruz. Anahtar teslim tesis kurulumu, proses tasarımı, makine imalatı, modernizasyon, danışmanlık ve bakım hizmetlerini tek merkezden yönetiyoruz."
        image="/images/hizmetler1.png"
      />

      <section id="hizmet-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceCards.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      Hizmeti İncele
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Anahtar Teslim Tesis Kurulumu
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Pro Makina, yatırım kararı alan firmalar için anahtar teslim tesis kurulumu sürecini
                    mühendislik, imalat, montaj ve devreye alma adımlarıyla birlikte yönetir. Gübre tesisi,
                    kompost tesisi, organik atık değerlendirme ve farklı endüstriyel proses uygulamalarında
                    doğru sonuç; yalnızca makine seçimiyle değil, tüm sistemin birlikte çalışmasını sağlayan
                    planlama disipliniyle elde edilir.
                  </p>
                  <p>
                    Bu nedenle ürün tipi, kapasite, kurutma tamburu yükü, depolama yapısı ve konveyör
                    sistemleri aynı çerçevede ele alınır. Özellikle{" "}
                    <Link href="/hizmetler/gubre-tesisi-kurulumu" className="font-semibold text-blue-700 hover:text-blue-800">
                      gübre tesisi
                    </Link>{" "}
                    ve{" "}
                    <Link href="/hizmetler/kompost-tesisi-kurulumu" className="font-semibold text-blue-700 hover:text-blue-800">
                      kompost tesisi
                    </Link>{" "}
                    yatırımlarında bu bütüncül yaklaşım, yatırımın sahada daha güvenli ve sürdürülebilir çalışmasını sağlar.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Proses Mühendisliği ve Makine İmalatı
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Proses mühendisliği, sahaya uygun endüstriyel makine imalatı kararlarının temelidir. Tambur
                    sistemleri, reaktörler, helezonlar, elevatörler, bunkerler ve paketleme ekipmanları
                    birbirinden bağımsız ürünler değil; aynı üretim ritminin parçalarıdır. Bu yüzden tasarım
                    aşamasında enerji yükü, bakım erişimi, malzeme davranışı ve büyüme ihtiyacı birlikte değerlendirilir.
                  </p>
                  <p>
                    Daha geniş ekipman ailelerini{" "}
                    <Link href="/makinalar" className="font-semibold text-blue-700 hover:text-blue-800">
                      makinalar
                    </Link>{" "}
                    sayfasında, uygulama örneklerini ise{" "}
                    <Link href="/projeler" className="font-semibold text-blue-700 hover:text-blue-800">
                      projeler
                    </Link>{" "}
                    bölümünde inceleyebilirsiniz.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Gübre, Kompost ve Endüstriyel Tesis Çözümleri
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Gübre tesisi, kompost tesisi, kurutma tamburu uygulamaları ve konveyör sistemleri gibi
                    başlıklarda çözüm üretirken sektörün gerçek ihtiyaçlarını dikkate alıyoruz. Farklı
                    hammaddeler, farklı nem davranışları ve farklı kapasite beklentileri aynı şablonla
                    yönetilemez. Bu nedenle{" "}
                    <Link href="/sektorler" className="font-semibold text-blue-700 hover:text-blue-800">
                      sektörler
                    </Link>{" "}
                    bazında değerlendirme yapıyor, ardından uygun mühendislik ve imalat akışını belirliyoruz.
                  </p>
                  <p>
                    Teknik kapsamı birlikte netleştirmek ve ön değerlendirme almak için{" "}
                    <Link href="/iletisim" className="font-semibold text-blue-700 hover:text-blue-800">
                      iletişim
                    </Link>{" "}
                    sayfası üzerinden bize ulaşabilirsiniz.
                  </p>
                </div>
              </article>

              <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                  Projenize uygun proses mühendisliği, anahtar teslim tesis kurulumu ve endüstriyel makine
                  imalatı çözümleri için bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Öne Çıkan Üretim ve Kurulum Sayfaları
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Gübre ve organik atık odaklı yatırım planlıyorsanız{" "}
              <Link
                href="/hizmetler/organomineral-gubre-tesisi"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Organomineral Gübre Tesisi Kurulumu
              </Link>
              ,{" "}
              <Link
                href="/hizmetler/granul-gubre-uretim-tesisi"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Granül Gübre Üretim Tesisi Kurulumu
              </Link>{" "}
              ve{" "}
              <Link
                href="/hizmetler/kompost-tesisi-kurulumu"
                className="font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Kompost Tesisi Kurulumu
              </Link>{" "}
              sayfalarımız üzerinden detaylı teknik ve yatırım içeriklerini inceleyebilirsiniz.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              İlgili Teknik İçerikler
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Tesis kurulumu, makine seçimi ve proses mühendisliği hakkında teknik rehberler.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi"
                className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">Kurutma Tamburu Kapasite Hesabı</h3>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  Devamını Oku
                </span>
              </Link>
              <Link
                href="/kutuphane/blog/helezon-kapasite-hesabi"
                className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">Helezon Kapasite Hesabı</h3>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  Devamını Oku
                </span>
              </Link>
              <Link
                href="/kutuphane/blog/granul-gubre-uretim-sureci"
                className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">Granül Gübre Üretim Süreci</h3>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  Devamını Oku
                </span>
              </Link>
              <Link
                href="/kutuphane/blog/kompost-tesisi-kurulumu"
                className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">Kompost Tesisi Kurulumu</h3>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  Devamını Oku
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
