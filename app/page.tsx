import ReactDOM from "react-dom";
import Link from "next/link";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { SocialIcon } from "./components/social-links";
import { createWhatsAppHref, siteContact, siteSocialProfiles } from "./lib/site-contact";

const libraryFilters = [
  { label: "Tüm İçerikler", href: "/kutuphane" },
  { label: "Programlar", href: "/programlar" },
  { label: "Blog / Makaleler", href: "/kutuphane/blog" },
  { label: "Teknik Rehberler", href: "/kutuphane/teknik-rehberler" },
  { label: "PDF Kataloglar", href: "/kutuphane/pdf-kataloglar" },
  { label: "Video İçerikler", href: "/kutuphane/video-icerikler" },
  { label: "Sık Sorulan Sorular", href: "/kutuphane/sik-sorulan-sorular" },
  { label: "Terimler Sözlüğü", href: "/kutuphane/terimler-sozlugu" },
];

const libraryCards = [
  {
    category: "Kompost & Atık",
    title: "Kompost Tesisi Kurulumu",
    description:
      "Kompost yatırımında proses akışı, makine seçimi ve çevresel kontrol başlıklarını bir arada görün.",
    href: "/kutuphane/blog/kompost-tesisi-kurulumu",
  },
  {
    category: "Gübre Tesisi",
    title: "Gübre Üretim Hattı",
    description:
      "Sıfırdan gübre hattı planlarken kapasite, ekipman ve saha kurgusunu birlikte okuyun.",
    href: "/kutuphane/blog/gubre-uretim-hatti",
  },
  {
    category: "Helezon & Konveyör",
    title: "Helezon Kapasite Hesabı",
    description:
      "Çap, hatve, devir ve doluluk oranı üzerinden taşıma kapasitesi mantığını inceleyin.",
    href: "/kutuphane/blog/helezon-kapasite-hesabi",
  },
  {
    category: "Kurutma Sistemleri",
    title: "Kurutma Tamburu Kapasite Hesabı",
    description:
      "Su uçurma yükü, hava debisi ve enerji ihtiyacı ekseninde tambur kurutma hesabını görün.",
    href: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
  },
  {
    category: "Gübre Tesisi",
    title: "Granül Gübre Üretim Süreci",
    description:
      "Granülasyon, kurutma, eleme ve paketleme hattını yatırım gözüyle değerlendirin.",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
  },
  {
    category: "Kompost & Atık",
    title: "Biyogaz Ön İşlem",
    description:
      "Biyogaz besleme hattında ayırma, boyutlandırma ve dengeleme disiplinini teknik olarak okuyun.",
    href: "/kutuphane/blog/biyogaz-on-islem",
  },
];

export default function Home() {
  ReactDOM.preload("/images/hero/kat22.jpg", { as: "image" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <HomeHeroSlider />

      <HomeQuickAccessSection />
      <HomeMachineGroupsSection />
      <HomeServicesSection />

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,rgba(39,141,192,0.1)_0%,#ffffff_55%,rgba(39,141,192,0.05)_100%)] px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#278DC0] md:text-4xl">
                Kütüphane
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-900 sm:text-base">
                Proses, ekipman ve tesis kurulumuna dair teknik içerikleri, rehberleri ve sektörel
                yazıları inceleyin.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {libraryFilters.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#278DC0]/16 bg-white px-4 py-2 text-sm font-semibold text-[#278DC0] transition hover:-translate-y-0.5 hover:border-[#278DC0] hover:bg-[#278DC0]/10 hover:text-[#154764]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {libraryCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                    İçeriği İncele
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/kutuphane"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-[18px] py-[10px] text-[15px] font-semibold text-slate-800 transition hover:border-[#278DC0] hover:bg-[#278DC0]/10 hover:text-[#154764] sm:text-base"
              >
                Tüm kütüphaneyi görüntüle
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[28px] bg-[#278DC0] px-6 py-8 text-white shadow-[0_24px_70px_rgba(39,141,192,0.24)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projeniz için teklif veya teknik görüşme talep edin
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Kompost tesisi, gübre tesisi, makina ve ekipman, biyogaz veya teknik danışmanlık
              talepleriniz için bizimle iletişime geçin.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label="home_contact_page"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                İletişim Sayfasına Git
              </Link>
              <a
                href={siteContact.phoneHref}
                data-cta-event="phone_click"
                data-cta-label="home_call_now"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
              <a
                href={createWhatsAppHref(
                  "Merhaba, Pro Makina web sitenizden ulaşıyorum. Teknik görüşme talep ediyorum.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-cta-event="whatsapp_click"
                data-cta-label="home_cta_whatsapp"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_70px_rgba(2,6,23,0.18)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                TEKNİK İÇERİK VE MEDYA
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Sosyal medya üzerinden teknik otoriteyi görünür kılan içerik katmanı
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/78 sm:text-base">
                LinkedIn, YouTube ve Instagram kanallarımızda proses mühendisliği, makina üretimi,
                saha uygulamaları ve teknik rehberleri düzenli olarak görünür kılıyor; yatırımcı ve
                teknik ekipler için güven üreten bir medya akışı oluşturuyoruz.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteSocialProfiles.map((profile) => {
                const cardTitles: Record<(typeof profile)["id"], string> = {
                  linkedin: "LinkedIn Teknik İçerikler",
                  youtube: "YouTube Proses Videoları",
                  instagram: "Instagram Proje Görselleri",
                };

                const buttonLabels: Record<(typeof profile)["id"], string> = {
                  linkedin: "LinkedIn’i İncele",
                  youtube: "YouTube’u Aç",
                  instagram: "Instagram’ı Gör",
                };

                return (
                  <a
                    key={profile.id}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#278DC0]/40 hover:bg-white/10"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                      <SocialIcon id={profile.id} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{cardTitles[profile.id]}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{profile.description}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-white/85 transition group-hover:text-white">
                      {buttonLabels[profile.id]}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
