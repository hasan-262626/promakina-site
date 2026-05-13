import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/Hero";

export const metadata: Metadata = {
  title: "Hakkimizda | Pro Makina Process Engineering",
  description:
    "Pro Makina; gubre tesisleri, kompost tesisleri, kurutma sistemleri, konveyor hatlari, maden isleme ve endustriyel makine imalati alanlarinda proses muhendisligi cozumleri sunar.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hakkimizda",
  },
  openGraph: {
    title: "Hakkimizda | Pro Makina Process Engineering",
    description:
      "Pro Makina; gubre tesisleri, kompost tesisleri, kurutma sistemleri, konveyor hatlari, maden isleme ve endustriyel makine imalati alanlarinda proses muhendisligi cozumleri sunar.",
    url: "https://www.promakina.com.tr/hakkimizda",
    siteName: "Pro Makina Process Engineering",
    locale: "tr_TR",
    type: "website",
  },
};

const whyPromakina = [
  {
    title: "Proses Odakli Yaklasim",
    description:
      "Makineyi tek basina degil, tesisin tamamindaki gorevine gore degerlendiririz.",
  },
  {
    title: "Ozel Imalat Kabiliyeti",
    description:
      "Kapasite, olcu, urun davranisi ve saha kosullarina gore ozel makine cozumleri gelistiririz.",
  },
  {
    title: "Anahtar Teslim Bakis",
    description:
      "Tesis kurulumu, makine imalati, montaj ve devreye alma sureclerini birlikte planlariz.",
  },
  {
    title: "Saha Gerceklerine Uygun Tasarim",
    description:
      "Bakim erisimi, kullanim kolayligi, dayanim ve isletme surekliligini tasarimin merkezine aliriz.",
  },
];

const serviceAreas = [
  { title: "Gubre Uretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { title: "Kompost ve Organik Atik Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
  { title: "Maden ve Mineral Isleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { title: "Atik Su Camuru ve Aritma Cozumleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
  { title: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
  { title: "Kimya ve Proses Endustrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
];

const machineGroups = [
  { title: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { title: "Tasima Ekipmanlari", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  { title: "Reaktorler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  {
    title: "Eleme ve Siniflandirma Sistemleri",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
  },
  { title: "Toz Toplama Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
  {
    title: "Paketleme ve Dolum Sistemleri",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
];

const processSteps = [
  {
    step: "01",
    title: "On Gorusme ve Ihtiyac Analizi",
    description:
      "Kapasite, urun tipi, hammadde, nem orani, saha kosullari ve yatirim hedefi degerlendirilir.",
  },
  {
    step: "02",
    title: "Proses ve Makine Kurgusu",
    description:
      "Tesise uygun ana makine gruplari, akis semasi ve ekipman kombinasyonu belirlenir.",
  },
  {
    step: "03",
    title: "Teknik Tasarim ve Imalat",
    description:
      "Makine olculeri, malzeme secimi, baglanti yapilari ve uretim detaylari netlestirilerek imalat sureci baslatilir.",
  },
  {
    step: "04",
    title: "Montaj ve Entegrasyon",
    description:
      "Saha yerlesimi, mekanik montaj, baglantilar ve yardimci ekipman entegrasyonu kontrollu sekilde yurutulur.",
  },
  {
    step: "05",
    title: "Devreye Alma ve Teknik Destek",
    description:
      "Sistemin calismasi kontrol edilir, ilk uretim sureci takip edilir ve gerekli teknik destek saglanir.",
  },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hakkimizda",
        item: "https://www.promakina.com.tr/hakkimizda",
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />

      <Hero
        title="Pro Makina Process Engineering"
        description="Endustriyel tesis cozumleri, proses muhendisligi ve makine imalatinda guvenilir cozum ortaginiz."
        image="/images/fabrika1.jpg"
      >
        <Link
          href="/hizmetler"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Hizmetleri Incele
        </Link>
        <Link
          href="/makinalar-ekipman"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
        >
          Makinalari Incele
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
        >
          Teknik Teklif Al
        </Link>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Gercek uretim, guclu muhendislik, sahada calisan cozumler
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Pro Makina&apos;nin calisma anlayisi, yalnizca makine uretmek degil; yatirimcinin
                hedef kapasitesine, hammaddesine, urun beklentisine ve saha kosullarina uygun
                calisan bir proses omurgasi kurmaktir. Her proje, teknik degerlendirme, makine
                secimi, imalat, montaj ve devreye alma adimlariyla butuncul sekilde ele alinir.
              </p>
              <p>
                Gubre, kompost, biyogaz, maden, kimya, aritma camuru ve dokme kati malzeme isleme
                sektorlerinde; tambur sistemleri, konveyorler, reaktorler, tanklar, kiricilar,
                elekler, toz toplama ve paketleme sistemleri gibi bircok ekipman grubunu ayni
                proses mantigi icinde degerlendiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="content-stack">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Neden Pro Makina?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyPromakina.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Hizmet Verdigimiz Ana Alanlar
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Pro Makina, farkli sektorlerde kullanilan makine ve tesis cozumlerini proje bazli
              olarak gelistirir.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 text-base font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Makine ve Ekipman Uretim Kabiliyetimiz
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Tambur sistemleri, tasima ekipmanlari, kiricilar, reaktorler, tanklar, eleme
                sistemleri, toz toplama sistemleri, paketleme ve dolum hatlari Pro Makina&apos;nin
                temel uretim kabiliyetleri arasinda yer alir. Bu ekipmanlar; gubre, kompost,
                maden, sivi gubre, kimya ve dokme kati malzeme proseslerinde tesisin ana
                omurgasini olusturur.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {machineGroups.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Projeye Nasil Yaklasiyoruz?
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-5">
              {processSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_22px_60px_rgba(15,23,42,0.16)] sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Yatiriminizi yalniz makineyle degil, dogru proses kurgusuyla guclendiriyoruz.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-white/80 sm:text-base">
              Endustriyel tesis yatirimlarinda dogru karar; yalnizca en uygun makineyi secmekle
              degil, makinenin proses icindeki gorevini dogru konumlandirmakla alinir. Pro Makina,
              her projede teknik dogruluk, saha uygulanabilirligi ve uzun vadeli isletme
              guvenligini birlikte degerlendirir.
            </p>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz icin teknik gorusme talep edin
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              Gubre tesisi, kompost tesisi, kurutma sistemi, konveyor hatti, maden isleme tesisi
              veya ozel makine ihtiyaciniz icin bizimle iletisime gecin. Hammadde, kapasite ve
              saha bilgilerinize gore teknik degerlendirme yapalim.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <a
                href="https://wa.me/905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp ile Gorus
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Hizmetleri Incele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
