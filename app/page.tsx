import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeLibrarySection } from "./components/home-library-section";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

const knowledgeCenterItems = [
  {
    title: "Blog / Makaleler",
    description:
      "Gübre tesisleri, kompost sistemleri, kurutma tamburları ve endüstriyel prosesler hakkında SEO uyumlu teknik içerikler.",
    href: "/kutuphane/blog",
    image: "/images/proses1.jpg",
    buttonLabel: "Makaleleri İncele",
  },
  {
    title: "Teknik Rehberler",
    description:
      "Tambur, helezon, konveyör, elevatör ve proses ekipmanları için mühendislik odaklı seçim ve hesaplama rehberleri.",
    href: "/kutuphane/teknik-rehberler",
    image: "/images/kurutmatam2.jpg",
    buttonLabel: "Rehberleri İncele",
  },
  {
    title: "Sık Sorulan Sorular",
    description:
      "Tesis kurulumu, makine seçimi, kapasite hesapları ve teklif süreçleri hakkında kısa ve net cevaplar.",
    href: "/kutuphane/sss",
    image: "/images/hizmetler1.png",
    buttonLabel: "Soruları İncele",
  },
];

export default function Home() {
  ReactDOM.preload(homeHeroSlides[0].image, { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />

      <section className="pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_50%,#eef5ff_100%)] px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                ENDÜSTRİYEL TESİS KURULUMU
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Endüstriyel Tesis Kurulumu ve Proses Çözümleri
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina; gübre üretim tesisleri, kompost tesisleri, organomineral gübre hatları, geri dönüşüm
                  sistemleri, biyogaz ekipmanları ve endüstriyel proses tesisleri için anahtar teslim mühendislik
                  çözümleri sunar.
                </p>
                <p>
                  Granül gübre üretim hatlarından kurutma tamburlarına, konveyör sistemlerinden reaktör, tank,
                  bunker, kırıcı, elek ve paketleme sistemlerine kadar tüm süreçlerde yüksek verimli, uzun ömürlü ve
                  sahaya özel makina imalatı gerçekleştiriyoruz.
                </p>
                <p>
                  Türkiye’de belediyeler, sanayi kuruluşları, gübre üreticileri, maden işletmeleri ve geri dönüşüm
                  tesisleri için proje tasarımı, makina imalatı, montaj ve devreye alma süreçlerini bütüncül şekilde
                  yönetiyoruz.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-7 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Teklif Al
              </Link>
              <a
                href="https://wa.me/905380631163"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                WhatsApp ile İletişime Geç
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/80 p-5">
              <p className="text-sm font-semibold text-slate-950">Öne çıkan hizmet sayfaları:</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <Link
                  href="/hizmetler/organomineral-gubre-tesisi"
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Organomineral Gübre Tesisi Kurulumu
                </Link>{" "}
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
                sayfalarımız üzerinden detaylı teknik kapsamı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomeServicesSection />

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">BİLGİ MERKEZİ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Bilgi Merkezi
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Endüstriyel tesisler, makine seçimi ve proses mühendisliği üzerine teknik içerikler.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {knowledgeCenterItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.74))]" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      {item.buttonLabel}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeLibrarySection />
    </main>
  );
}
