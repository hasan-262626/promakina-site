import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "HakkÄ±mÄ±zda | Pro Makina Process Engineering";
const pageDescription =
  "Pro Makina; 40+ yÄ±llÄ±k Ã¼retim kÃ¼ltÃ¼rÃ¼ ve 2. kuÅŸak mÃ¼hendislik yaklaÅŸÄ±mÄ±yla gÃ¼bre tesisleri, kompost tesisleri, kurutma sistemleri, konveyÃ¶r hatlarÄ±, maden iÅŸleme ve endÃ¼striyel makine imalatÄ± Ã§Ã¶zÃ¼mleri sunar.";
const canonical = "https://www.promakina.com.tr/hakkimizda";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "Pro Makina Process Engineering",
    locale: "tr_TR",
    type: "website",
  },
};

const trustCards = [
  {
    title: "40+ YÄ±llÄ±k Ãœretim KÃ¼ltÃ¼rÃ¼",
    description:
      "Sahada imalat, montaj ve ekipman Ã¼retimiyle oluÅŸmuÅŸ uzun yÄ±llara dayanan bir Ã¼retim disipliniyle Ã§alÄ±ÅŸÄ±yoruz.",
  },
  {
    title: "2. KuÅŸak MÃ¼hendislik YaklaÅŸÄ±mÄ±",
    description:
      "UstalÄ±kla gelen Ã¼retim bilgisini, proses mÃ¼hendisliÄŸi ve modern tesis kurgusuyla birleÅŸtiriyoruz.",
  },
  {
    title: "Saha GerÃ§eklerini Bilen TasarÄ±m",
    description:
      "Makineyi yalnÄ±z katalog Ã¶lÃ§Ã¼sÃ¼yle deÄŸil; bakÄ±m, montaj, iÅŸletme ve uzun vadeli kullanÄ±m ÅŸartlarÄ±yla birlikte deÄŸerlendiriyoruz.",
  },
  {
    title: "Proses OdaklÄ± Ä°malat",
    description:
      "Tambur, konveyÃ¶r, helezon, kÄ±rÄ±cÄ±, reaktÃ¶r ve tank gibi ekipmanlarÄ± hattÄ±n tamamÄ±ndaki gÃ¶revine gÃ¶re kurguluyoruz.",
  },
];

const serviceAreas = [
  { title: "GÃ¼bre Ãœretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { title: "Kompost ve Organik AtÄ±k Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
  { title: "Kurutma Sistemleri", href: "/hizmetler/kurutma-tamburu-imalati" },
  { title: "Maden ve Mineral Ä°ÅŸleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { title: "AtÄ±k Su Ã‡amuru ve ArÄ±tma Ã‡Ã¶zÃ¼mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
  { title: "Kimya ve Proses EndÃ¼strisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
];

const machineGroups = [
  { title: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { title: "TaÅŸÄ±ma EkipmanlarÄ±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  { title: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
  { title: "ReaktÃ¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  {
    title: "Eleme ve SÄ±nÄ±flandÄ±rma Sistemleri",
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
    title: "Ä°lk GÃ¶rÃ¼ÅŸme ve Ä°htiyaÃ§ Analizi",
    description:
      "Kapasite, Ã¼rÃ¼n tipi, hammadde, nem oranÄ±, saha koÅŸullarÄ± ve yatÄ±rÄ±m hedefi birlikte deÄŸerlendirilir.",
  },
  {
    step: "02",
    title: "Proses Kurgusu",
    description:
      "Ãœretim akÄ±ÅŸÄ±, ana makine gruplarÄ±, taÅŸÄ±ma noktalarÄ±, kurutma/eleme/reaktÃ¶r ihtiyaÃ§larÄ± ve yardÄ±mcÄ± ekipmanlar belirlenir.",
  },
  {
    step: "03",
    title: "Teknik TasarÄ±m ve Ä°malat",
    description:
      "Makine Ã¶lÃ§Ã¼leri, malzeme seÃ§imi, tahrik yapÄ±sÄ±, baÄŸlantÄ± detaylarÄ± ve Ã¼retim kapsamÄ± netleÅŸtirilerek imalata geÃ§ilir.",
  },
  {
    step: "04",
    title: "Montaj ve Entegrasyon",
    description:
      "Saha yerleÅŸimi, mekanik montaj, yardÄ±mcÄ± ekipman baÄŸlantÄ±larÄ± ve sistem entegrasyonu kontrollÃ¼ ÅŸekilde yÃ¼rÃ¼tÃ¼lÃ¼r.",
  },
  {
    step: "05",
    title: "Devreye Alma ve Teknik Destek",
    description:
      "Sistemin Ã§alÄ±ÅŸmasÄ± sahada kontrol edilir, ilk Ã¼retim sÃ¼reci takip edilir ve ihtiyaÃ§ halinde teknik destek saÄŸlanÄ±r.",
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
        name: "HakkÄ±mÄ±zda",
        item: canonical,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina Process Engineering",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    description: pageDescription,
    email: "info@promakina.com.tr",
    telephone: "+905320580104",
    sameAs: [
      "https://www.linkedin.com/in/promakinaengineering/",
      "https://www.youtube.com/@ProMakinaProcessEngineering",
      "https://www.instagram.com/promakinaengineering/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pro Makina Process Engineering",
    url: "https://www.promakina.com.tr",
    telephone: "+905320580104",
    email: "info@promakina.com.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "75. YÄ±l Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E",
      addressLocality: "OdunpazarÄ±",
      addressRegion: "EskiÅŸehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[920px]">
            <h1 className="max-w-[900px] text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
              40+ YÄ±llÄ±k Ãœretim KÃ¼ltÃ¼rÃ¼nden Gelen Proses MÃ¼hendisliÄŸi
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Hizmetleri Ä°ncele
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                MakinalarÄ± Ä°ncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Teknik Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10 lg:px-12">
            <div className="max-w-5xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                UstalÄ±kla baÅŸlayan, mÃ¼hendislikle bÃ¼yÃ¼yen Ã¼retim anlayÄ±ÅŸÄ±
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makinaâ€™nÄ±n temelinde, sahada Ã¶ÄŸrenilmiÅŸ gerÃ§ek Ã¼retim tecrÃ¼besi yer alÄ±r.
                  Birinci kuÅŸakta kaynak, Ã§elik imalat, siklon, konveyÃ¶r, helezon ve yardÄ±mcÄ±
                  proses ekipmanlarÄ±yla baÅŸlayan bu Ã¼retim kÃ¼ltÃ¼rÃ¼; yÄ±llar iÃ§inde farklÄ±
                  sektÃ¶rlerin ihtiyaÃ§larÄ±nÄ± tanÄ±yan gÃ¼Ã§lÃ¼ bir saha birikimine dÃ¶nÃ¼ÅŸmÃ¼ÅŸtÃ¼r.
                </p>
                <p>
                  BugÃ¼n ikinci kuÅŸak olarak bu birikimi yalnÄ±zca parÃ§a veya ekipman imalatÄ±yla
                  sÄ±nÄ±rlamÄ±yor; gÃ¼bre tesisleri, kompost sistemleri, kurutma tamburlarÄ±,
                  kÄ±rÄ±cÄ±lar, reaktÃ¶rler, tanklar, eleme sistemleri, toz toplama hatlarÄ± ve Ã¶zel
                  proses Ã§Ã¶zÃ¼mleriyle daha geniÅŸ bir mÃ¼hendislik Ã§erÃ§evesine taÅŸÄ±yoruz.
                </p>
                <p>
                  Bu nedenle Pro Makina iÃ§in makine Ã¼retimi yalnÄ±zca gÃ¶vde, motor ve Ã§elik
                  konstrÃ¼ksiyon anlamÄ±na gelmez. Her ekipman; hammadde davranÄ±ÅŸÄ±, kapasite
                  hedefi, saha yerleÅŸimi, bakÄ±m eriÅŸimi, enerji ihtiyacÄ± ve son Ã¼rÃ¼n kalitesiyle
                  birlikte deÄŸerlendirilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="content-stack">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Neyi farklÄ± yapÄ±yoruz?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trustCards.map((item) => (
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
          <div className="content-stack">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Birinci kuÅŸaktan ikinci kuÅŸaÄŸa aktarÄ±lan Ã¼retim disiplini
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Birinci KuÅŸak: UstalÄ±k ve Saha Ä°malatÄ±
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Kaynak ustalÄ±ÄŸÄ±, Ã§elik imalat, siklon, konveyÃ¶r, helezon ve yardÄ±mcÄ± ekipman
                  Ã¼retimiyle oluÅŸan ilk dÃ¶nem tecrÃ¼be; Pro Makinaâ€™nÄ±n Ã¼retim kÃ¼ltÃ¼rÃ¼nÃ¼n temelini
                  oluÅŸturur. Bu dÃ¶nem, sahada Ã§alÄ±ÅŸan makinenin neye ihtiyaÃ§ duyduÄŸunu doÄŸrudan
                  gÃ¶rerek Ã¶ÄŸrenilen gerÃ§ek bir imalat okuludur.
                </p>
              </article>
              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Ä°kinci KuÅŸak: Proses ve Tesis Ã‡Ã¶zÃ¼mleri
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  BugÃ¼n bu Ã¼retim bilgisi; tambur sistemleri, kÄ±rÄ±cÄ±lar, reaktÃ¶rler, tanklar,
                  eleme sistemleri, toz toplama, paketleme ve anahtar teslim tesis Ã§Ã¶zÃ¼mleriyle
                  daha kapsamlÄ± bir mÃ¼hendislik yapÄ±sÄ±na taÅŸÄ±nmaktadÄ±r. AmaÃ§, yalnÄ±z makine
                  Ã¼retmek deÄŸil; Ã§alÄ±ÅŸan ve sÃ¼rdÃ¼rÃ¼lebilir tesis omurgasÄ± kurmaktÄ±r.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Hizmet verdiÄŸimiz ana alanlar
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
              Pro Makina, farklÄ± sektÃ¶rlerde kullanÄ±lan makine ve tesis Ã§Ã¶zÃ¼mlerini proje bazlÄ±
              olarak geliÅŸtirir. Her sektÃ¶rÃ¼n hammadde yapÄ±sÄ±, nem oranÄ±, kapasite beklentisi ve
              proses davranÄ±ÅŸÄ± farklÄ± olduÄŸu iÃ§in Ã§Ã¶zÃ¼m yaklaÅŸÄ±mÄ± da sahaya Ã¶zel oluÅŸturulur.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 text-base font-semibold text-slate-800 transition hover:border-[#278DC0]/20 hover:text-[#278DC0]"
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
                Makine ve ekipman Ã¼retim kabiliyetimiz
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makinaâ€™nÄ±n Ã¼retim kabiliyeti; birinci kuÅŸaktan gelen saha imalatÄ± tecrÃ¼besi
                ile ikinci kuÅŸaÄŸÄ±n proses odaklÄ± yaklaÅŸÄ±mÄ±nÄ± bir araya getirir. Bu sayede yalnÄ±z
                tekil ekipman deÄŸil, birbirini tamamlayan makine gruplarÄ±yla Ã§alÄ±ÅŸan proses
                hatlarÄ± geliÅŸtiriyoruz.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 sm:py-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {machineGroups.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-800 transition hover:border-[#278DC0]/20 hover:text-[#278DC0]"
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
              Projeye nasÄ±l yaklaÅŸÄ±yoruz?
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-5">
              {processSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
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
              YalnÄ±z makine deÄŸil, sahada Ã§alÄ±ÅŸan proses omurgasÄ± kuruyoruz.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-white/80 sm:text-base">
              EndÃ¼striyel tesis yatÄ±rÄ±mlarÄ±nda doÄŸru sonuÃ§; tek tek makinelerin gÃ¼Ã§lÃ¼ olmasÄ±ndan
              Ã§ok, tÃ¼m hattÄ±n aynÄ± proses mantÄ±ÄŸÄ±yla Ã§alÄ±ÅŸmasÄ±ndan gelir. Pro Makina, Ã¼retimden
              gelen saha tecrÃ¼besini mÃ¼hendislik yaklaÅŸÄ±mÄ±yla birleÅŸtirerek yatÄ±rÄ±mcÄ±ya daha net,
              uygulanabilir ve uzun vadeli Ã§Ã¶zÃ¼mler sunmayÄ± hedefler.
            </p>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz iÃ§in teknik gÃ¶rÃ¼ÅŸme talep edin
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              GÃ¼bre tesisi, kompost tesisi, kurutma tamburu, konveyÃ¶r hattÄ±, maden iÅŸleme tesisi,
              reaktÃ¶r-tank sistemi veya Ã¶zel makine ihtiyacÄ±nÄ±z iÃ§in bizimle iletiÅŸime geÃ§in.
              Hammadde, kapasite ve saha bilgilerinize gÃ¶re teknik deÄŸerlendirme yapalÄ±m.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <a
                href="https://wa.me/905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                WhatsApp ile GÃ¶rÃ¼ÅŸ
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                Hizmetleri Ä°ncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


