import Link from "next/link";
import ReactDOM from "react-dom";
import { CookieSettingsLink } from "./components/cookie-preferences";
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
      <a
        href="https://wa.me/905380631163"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-green-600"
      >
        <span className="text-lg">W</span>
        WhatsApp
      </a>

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

      <section id="iletisim" className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için teklif veya teknik görüşme talep edin
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/82">
              Kompost tesisi, gübre tesisi, makina ve ekipman, biyogaz veya teknik danışmanlık
              talepleriniz için bizimle iletişime geçin.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                İletişim Sayfasına Git
              </Link>
              <a
                href="tel:+905380631163"
                className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="site-container py-14 sm:py-16 lg:py-18">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.35fr_0.9fr_1fr_1fr_0.95fr_0.8fr]">
            <div className="max-w-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Pro Makina</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Pro Makina, kompost, gübre, geri dönüşüm ve proses tesisleri için anahtar teslim
                endüstriyel çözümler sunar.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Menü
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="transition hover:text-white">
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler" className="transition hover:text-white">
                    Sektörler
                  </Link>
                </li>
                <li>
                  <Link href="/projeler" className="transition hover:text-white">
                    Projeler
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane" className="transition hover:text-white">
                    Kütüphane
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="transition hover:text-white">
                    Hakkımızda
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Hizmetler
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link
                    href="/hizmetler/anahtar-teslim-tesis-kurulumu"
                    className="transition hover:text-white"
                  >
                    Anahtar Teslim Tesis Kurulumu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetler/proses-tasarimi-ve-muhendislik"
                    className="transition hover:text-white"
                  >
                    Proses Tasarımı ve Mühendislik
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/makine-imalati" className="transition hover:text-white">
                    Makine İmalatı
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/bakim-ve-servis" className="transition hover:text-white">
                    Bakım ve Servis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Makina & Ekipman
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/makinalar/tambur-sistemleri" className="transition hover:text-white">
                    Tambur Sistemleri
                  </Link>
                </li>
                <li>
                  <Link href="/makinalar/tasima-ekipmanlari" className="transition hover:text-white">
                    Taşıma Ekipmanları
                  </Link>
                </li>
                <li>
                  <Link
                    href="/makinalar/kiricilar-ve-parcalayicilar"
                    className="transition hover:text-white"
                  >
                    Kırıcılar ve Parçalayıcılar
                  </Link>
                </li>
                <li>
                  <Link href="/makinalar/reaktorler-ve-tanklar" className="transition hover:text-white">
                    Reaktörler ve Tanklar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                İletişim
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/iletisim" className="transition hover:text-white">
                    İletişim Sayfası
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/905380631163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Katalog İndir
                  </a>
                </li>
                <li>
                  <a href="mailto:info@promakina.com.tr" className="transition hover:text-white">
                    info@promakina.com.tr
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Yasal
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <a href="#" className="transition hover:text-white">
                    KVKK
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Çerez Politikası
                  </a>
                </li>
                <li>
                  <CookieSettingsLink className="transition hover:text-white" />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-white/55">© 2026 Pro Makina. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
