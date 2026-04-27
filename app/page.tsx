import ReactDOM from "react-dom";
import Link from "next/link";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeLibrarySection } from "./components/home-library-section";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

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
                  Pro Makina; gübre üretim tesisleri, kompost tesisleri, organomineral
                  gübre hatları, geri dönüşüm sistemleri, biyogaz ekipmanları ve
                  endüstriyel proses tesisleri için anahtar teslim mühendislik
                  çözümleri sunar.
                </p>
                <p>
                  Granül gübre üretim hatlarından kurutma tamburlarına, konveyör
                  sistemlerinden reaktör, tank, bunker, kırıcı, elek ve paketleme
                  sistemlerine kadar tüm süreçlerde yüksek verimli, uzun ömürlü ve
                  sahaya özel makina imalatı gerçekleştiriyoruz.
                </p>
                <p>
                  Türkiye’de belediyeler, sanayi kuruluşları, gübre üreticileri, maden
                  işletmeleri ve geri dönüşüm tesisleri için proje tasarımı, makina
                  imalatı, montaj ve devreye alma süreçlerini bütüncül şekilde
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
          </div>
        </div>
      </section>

      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomeServicesSection />
      <HomeLibrarySection />
    </main>
  );
}
