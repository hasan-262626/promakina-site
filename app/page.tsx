import Link from "next/link";
import ReactDOM from "react-dom";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

const homeLibraryItems = [
  {
    slug: "kompost-tesisi-nasil-kurulur",
    title: "Kompost Tesisi Nasıl Kurulur",
    summary:
      "Kompost tesisi kurulumunda saha, proses, ekipman ve kapasite planlamasının temel adımları.",
  },
  {
    slug: "kompost-uretiminde-tambur-sistemleri",
    title: "Kompost Üretiminde Tambur Sistemleri",
    summary:
      "Kompost tamburlarının kullanım amacı, çalışma yeri ve seçim kriterleri.",
  },
  {
    slug: "organik-atiklarin-geri-kazanimi",
    title: "Organik Atıkların Geri Kazanımı",
    summary:
      "Organik atıkların ekonomik ve çevresel değer üretecek şekilde nasıl değerlendirilebileceği.",
  },
];

export default function Home() {
  ReactDOM.preload(homeHeroSlides[0].image, { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />
      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomeServicesSection />

      <section id="kutuphane" className="section-space">
        <div className="site-container">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Kütüphane
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Proses, ekipman ve tesis kurulumuna dair teknik içerikleri, rehberleri ve sektörel
              yazıları inceleyin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {homeLibraryItems.map((item) => (
              <Link
                key={item.slug}
                href={`/kutuphane/${item.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
