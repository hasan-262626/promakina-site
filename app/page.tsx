import ReactDOM from "react-dom";
import Link from "next/link";
import { HomeHeroSlider } from "./components/home-hero-slider";
import { HomeLibrarySection } from "./components/home-library-section";
import { HomeMachineGroupsSection } from "./components/home-machine-groups-section";
import { HomeQuickAccessSection } from "./components/home-quick-access-section";
import { HomeServicesSection } from "./components/home-services-section";
import { homeHeroSlides } from "./home-hero-data";

const conversionHighlights = [
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Gübre, kompost, biyogaz, geri dönüşüm ve madencilik tesisleri için mühendislik, imalat, montaj ve devreye alma süreçlerini tek merkezden yönetiyoruz.",
  },
  {
    title: "Makina İmalatı",
    description:
      "Tambur sistemleri, konveyörler, elevatörler, reaktörler ve proses ekipmanlarında sahaya uygun, dayanımlı ve üretime hazır makina çözümleri sunuyoruz.",
  },
  {
    title: "Proje ve Mühendislik",
    description:
      "Yerleşim, proses akışı, kapasite planlaması ve ekipman seçimini yatırım hedefinize uygun teknik bir altyapı ile kurguluyoruz.",
  },
];

const whyPromakina = [
  "10+ yıl deneyim",
  "Yüksek kapasite üretim altyapısı",
  "Türkiye ve yurtdışı proje tecrübesi",
  "Özel mühendislik çözümleri",
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
                PRO MAKİNA
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                Endüstriyel Tesis ve Makina Üretimi
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Gübre, kompost, biyogaz, geri dönüşüm ve madencilik tesisleri için
                anahtar teslim kurulum, mühendislik, makina imalatı ve saha montajı
                hizmetlerini tek çatı altında sunuyoruz.
              </p>
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

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {conversionHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeQuickAccessSection />

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_26px_80px_rgba(2,6,23,0.18)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  NEDEN PRO MAKİNA?
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Yatırım kararını güvenle hızlandıran teknik ve saha gücü
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                  Proses tasarımından makina imalatına, montajdan devreye almaya kadar
                  yatırımın her aşamasında teknik doğruluk, üretim disiplini ve saha
                  tecrübesi ile ilerliyoruz.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {whyPromakina.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 text-sm font-medium text-white/88 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeMachineGroupsSection />
      <HomeServicesSection />

      <section className="pb-10 pt-4 sm:pb-14">
        <div className="site-container">
          <div className="rounded-[32px] border border-blue-100 bg-[linear-gradient(135deg,#0f4fbf_0%,#0a2c6c_100%)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(15,79,191,0.3)] sm:px-8 sm:py-10 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">
                  HIZLI TEKNİK DEĞERLENDİRME
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Projeniz için en doğru hat kurgusunu birlikte netleştirelim
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
                  Kapasite, ürün tipi, saha koşulları ve yatırım modelinize göre uygun
                  tesis, makina ve proses çözümünü hızlıca değerlendirelim.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Teklif Al
                </Link>
                <a
                  href="https://wa.me/905380631163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp ile İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeLibrarySection />

      <section className="pb-16 pt-4 sm:pb-20">
        <div className="site-container">
          <article className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              SEO UYUMLU KURUMSAL İÇERİK
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Güçlü mühendislik altyapısı ile yatırımınızı üretime dönüştürüyoruz
            </h2>

            <div className="mt-6 max-w-5xl space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                Pro Makina, farklı sektörlerde yatırım planlayan işletmeler için
                endüstriyel tesis kurulumu, makina imalatı ve proses mühendisliği
                hizmetlerini entegre biçimde sunar. Özellikle gübre tesisi yatırımları,
                organomineral ve granül üretim hatları, kompost tesisi kurguları,
                biyogaz tesisi altyapıları, geri dönüşüm sistemleri ve madencilik proses
                çözümleri gibi alanlarda proje geliştirme, ekipman seçimi ve saha
                kurulum süreçlerini tek merkezden yönetmek yatırım güvenliği açısından
                büyük avantaj sağlar. Bu yaklaşım hem termin kontrolünü güçlendirir hem
                de proses, makina ve montaj disiplinlerinin aynı hedefe göre ilerlemesini
                mümkün kılar.
              </p>
              <p>
                Gübre tesisi planlayan yatırımcılar için ürün reçetesi, kapasite, granül
                yapısı, kurutma, soğutma ve paketleme adımları birlikte değerlendirilir.
                Kompost tesisi tarafında ise atık karakteri, nem dengesi, eleme, son ürün
                hazırlama ve çevresel kontrol konuları doğru ekipman seçimiyle ele alınır.
                Biyogaz tesisi yatırımlarında organik girdi hazırlama, depolama, transfer
                ve destek ekipmanlarının seçimi proses verimliliğini doğrudan etkiler.
                Aynı şekilde makina imalatı tarafında yalnızca ekipman üretmek değil,
                sahada sürdürülebilir biçimde çalışacak sistemleri tasarlamak gerekir.
              </p>
              <p>
                Bu nedenle Pro Makina, her projede kapasiteye, ürüne, yatırım modeline ve
                saha gerçeklerine göre özel mühendislik yaklaşımı geliştirir. Makina
                imalatı, anahtar teslim kurulum, montaj yönetimi ve teknik danışmanlık
                hizmetlerinin birlikte kurgulanması; kompost tesisi, gübre tesisi,
                biyogaz tesisi ve diğer endüstriyel proses yatırımlarında daha kontrollü
                bir uygulama zemini oluşturur. Eğer yatırımınız için doğru proses akışını,
                uygun ekipman grubunu ve güvenilir bir kurulum partnerini belirlemek
                istiyorsanız, teknik değerlendirme sürecini birlikte başlatabiliriz.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
