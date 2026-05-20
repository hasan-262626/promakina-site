import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Hakkımızda | Pro Makina Process Engineering";
const pageDescription =
  "Pro Makina; 40+ yıllık üretim kültürü ve 2. kuşak mühendislik yaklaşımıyla gübre tesisleri, kompost tesisleri, kurutma sistemleri, konveyör hatları, maden işleme ve endüstriyel makine imalatı çözümleri sunar.";
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
    title: "40+ Yıllık Üretim Kültürü",
    description:
      "Sahada imalat, montaj ve ekipman üretimiyle oluşmuş uzun yıllara dayanan bir üretim disipliniyle çalışıyoruz.",
  },
  {
    title: "2. Kuşak Mühendislik Yaklaşımı",
    description:
      "Ustalıkla gelen üretim bilgisini, proses mühendisliği ve modern tesis kurgusuyla birleştiriyoruz.",
  },
  {
    title: "Saha Gerçeklerini Bilen Tasarım",
    description:
      "Makineyi yalnız katalog ölçüsüyle değil; bakım, montaj, işletme ve uzun vadeli kullanım şartlarıyla birlikte değerlendiriyoruz.",
  },
  {
    title: "Proses Odaklı İmalat",
    description:
      "Tambur, konveyör, helezon, kırıcı, reaktör ve tank gibi ekipmanları hattın tamamındaki görevine göre kurguluyoruz.",
  },
];

const serviceAreas = [
  { title: "Gübre Üretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { title: "Kompost ve Organik Atık Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
  { title: "Kurutma Sistemleri", href: "/hizmetler/kurutma-tamburu-imalati" },
  { title: "Maden ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { title: "Atık Su Çamuru ve Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
  { title: "Kimya ve Proses Endüstrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
];

const machineGroups = [
  { title: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
  { title: "Taşıma Ekipmanları", href: "/makinalar-ekipman/tasima-ekipmanlari" },
  { title: "Kırıcılar ve Parçalayıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
  { title: "Reaktörler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
  {
    title: "Eleme ve Sınıflandırma Sistemleri",
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
    title: "İlk Görüşme ve İhtiyaç Analizi",
    description:
      "Kapasite, ürün tipi, hammadde, nem oranı, saha koşulları ve yatırım hedefi birlikte değerlendirilir.",
  },
  {
    step: "02",
    title: "Proses Kurgusu",
    description:
      "Üretim akışı, ana makine grupları, taşıma noktaları, kurutma/eleme/reaktör ihtiyaçları ve yardımcı ekipmanlar belirlenir.",
  },
  {
    step: "03",
    title: "Teknik Tasarım ve İmalat",
    description:
      "Makine ölçüleri, malzeme seçimi, tahrik yapısı, bağlantı detayları ve üretim kapsamı netleştirilerek imalata geçilir.",
  },
  {
    step: "04",
    title: "Montaj ve Entegrasyon",
    description:
      "Saha yerleşimi, mekanik montaj, yardımcı ekipman bağlantıları ve sistem entegrasyonu kontrollü şekilde yürütülür.",
  },
  {
    step: "05",
    title: "Devreye Alma ve Teknik Destek",
    description:
      "Sistemin çalışması sahada kontrol edilir, ilk üretim süreci takip edilir ve ihtiyaç halinde teknik destek sağlanır.",
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
        name: "Hakkımızda",
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
        "75. Yıl Mahallesi, Teksan Sanayi Sitesi, Kilis Sokak D6 Blok No: 2E",
      addressLocality: "Odunpazarı",
      addressRegion: "Eskişehir",
      postalCode: "26250",
      addressCountry: "TR",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />

      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        <Image
          src="/images/fabrika1.jpg"
          alt="Pro Makina üretim ve saha tecrübesi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,20,40,0.78),rgba(10,20,40,0.82))]" />
        <div className="relative site-container flex min-h-[360px] items-center py-[64px] md:min-h-[460px] md:py-[84px]">
          <div className="max-w-[920px]">
            <h1 className="max-w-[900px] text-[34px] font-semibold leading-[1.15] tracking-tight text-white md:text-[54px]">
              40+ Yıllık Üretim Kültüründen Gelen Proses Mühendisliği
            </h1>
            <p className="mt-5 max-w-[760px] text-lg leading-8 text-white/88 md:text-[21px] md:leading-9">
              Pro Makina Process Engineering; saha tecrübesi, imalat disiplini ve ikinci
              kuşak mühendislik yaklaşımıyla endüstriyel tesis çözümleri geliştirir.
            </p>
            <p className="mt-5 max-w-[820px] text-sm leading-8 text-white/78 md:text-base">
              Birinci kuşakta kaynak ustalığı, saha imalatı, siklon, konveyör, helezon ve
              yardımcı ekipman üretimiyle başlayan üretim tecrübesi; bugün tambur sistemleri,
              kırıcılar, reaktörler, tanklar, eleme, toz toplama, paketleme ve anahtar teslim
              tesis çözümleriyle daha geniş bir proses mühendisliği yapısına dönüşmüştür.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Hizmetleri İncele
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Makinaları İncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
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
                Ustalıkla başlayan, mühendislikle büyüyen üretim anlayışı
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina’nın temelinde, sahada öğrenilmiş gerçek üretim tecrübesi yer alır.
                  Birinci kuşakta kaynak, çelik imalat, siklon, konveyör, helezon ve yardımcı
                  proses ekipmanlarıyla başlayan bu üretim kültürü; yıllar içinde farklı
                  sektörlerin ihtiyaçlarını tanıyan güçlü bir saha birikimine dönüşmüştür.
                </p>
                <p>
                  Bugün ikinci kuşak olarak bu birikimi yalnızca parça veya ekipman imalatıyla
                  sınırlamıyor; gübre tesisleri, kompost sistemleri, kurutma tamburları,
                  kırıcılar, reaktörler, tanklar, eleme sistemleri, toz toplama hatları ve özel
                  proses çözümleriyle daha geniş bir mühendislik çerçevesine taşıyoruz.
                </p>
                <p>
                  Bu nedenle Pro Makina için makine üretimi yalnızca gövde, motor ve çelik
                  konstrüksiyon anlamına gelmez. Her ekipman; hammadde davranışı, kapasite
                  hedefi, saha yerleşimi, bakım erişimi, enerji ihtiyacı ve son ürün kalitesiyle
                  birlikte değerlendirilir.
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
                Neyi farklı yapıyoruz?
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
                Birinci kuşaktan ikinci kuşağa aktarılan üretim disiplini
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Birinci Kuşak: Ustalık ve Saha İmalatı
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Kaynak ustalığı, çelik imalat, siklon, konveyör, helezon ve yardımcı ekipman
                  üretimiyle oluşan ilk dönem tecrübe; Pro Makina’nın üretim kültürünün temelini
                  oluşturur. Bu dönem, sahada çalışan makinenin neye ihtiyaç duyduğunu doğrudan
                  görerek öğrenilen gerçek bir imalat okuludur.
                </p>
              </article>
              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  İkinci Kuşak: Proses ve Tesis Çözümleri
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Bugün bu üretim bilgisi; tambur sistemleri, kırıcılar, reaktörler, tanklar,
                  eleme sistemleri, toz toplama, paketleme ve anahtar teslim tesis çözümleriyle
                  daha kapsamlı bir mühendislik yapısına taşınmaktadır. Amaç, yalnız makine
                  üretmek değil; çalışan ve sürdürülebilir tesis omurgası kurmaktır.
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
              Hizmet verdiğimiz ana alanlar
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
              Pro Makina, farklı sektörlerde kullanılan makine ve tesis çözümlerini proje bazlı
              olarak geliştirir. Her sektörün hammadde yapısı, nem oranı, kapasite beklentisi ve
              proses davranışı farklı olduğu için çözüm yaklaşımı da sahaya özel oluşturulur.
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
                Makine ve ekipman üretim kabiliyetimiz
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina’nın üretim kabiliyeti; birinci kuşaktan gelen saha imalatı tecrübesi
                ile ikinci kuşağın proses odaklı yaklaşımını bir araya getirir. Bu sayede yalnız
                tekil ekipman değil, birbirini tamamlayan makine gruplarıyla çalışan proses
                hatları geliştiriyoruz.
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
              Projeye nasıl yaklaşıyoruz?
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
              Yalnız makine değil, sahada çalışan proses omurgası kuruyoruz.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-8 text-white/80 sm:text-base">
              Endüstriyel tesis yatırımlarında doğru sonuç; tek tek makinelerin güçlü olmasından
              çok, tüm hattın aynı proses mantığıyla çalışmasından gelir. Pro Makina, üretimden
              gelen saha tecrübesini mühendislik yaklaşımıyla birleştirerek yatırımcıya daha net,
              uygulanabilir ve uzun vadeli çözümler sunmayı hedefler.
            </p>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için teknik görüşme talep edin
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              Gübre tesisi, kompost tesisi, kurutma tamburu, konveyör hattı, maden işleme tesisi,
              reaktör-tank sistemi veya özel makine ihtiyacınız için bizimle iletişime geçin.
              Hammadde, kapasite ve saha bilgilerinize göre teknik değerlendirme yapalım.
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
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp ile Görüş
              </a>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
