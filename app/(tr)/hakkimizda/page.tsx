import type { Metadata } from "next";
import { trLanguageAlternates } from "../../i18n/routes";
import Image from "next/image";
import Link from "next/link";

const canonical = "https://www.promakina.com.tr/hakkimizda";
const pageTitle =
  "Pro Makina Hakkında | Endüstriyel Makine İmalatı ve Proses Mühendisliği";
const pageDescription =
  "Pro Makina; gübre, kompost, geri dönüşüm, kimya, madencilik, atık su çamuru ve dökme katı malzeme prosesleri için endüstriyel makine imalatı, proses mühendisliği ve tesis çözümleri sunar.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Pro Makina",
    "endüstriyel makine imalatı",
    "proses mühendisliği",
    "makine imalat firması",
    "tesis kurulumu",
    "gübre tesisi makineleri",
    "kompost tesisi ekipmanları",
    "tambur sistemleri",
    "reaktör ve tank imalatı",
    "konveyör sistemleri",
    "endüstriyel proses çözümleri",
  ],
  alternates: {
    canonical,
    languages: trLanguageAlternates("/hakkimizda"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonical,
    siteName: "Pro Makina Process Engineering",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

type CardLink = {
  title: string;
  description: string;
  href: string;
};

type SimpleCard = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const trustCards: SimpleCard[] = [
  {
    title: "40+ Yıllık Üretim Kültürü",
    description:
      "Sahadan gelen imalat tecrübesiyle proses ihtiyaçlarına uygun pratik ve uygulanabilir çözümler geliştiriyoruz.",
  },
  {
    title: "Proses Odaklı Yaklaşım",
    description:
      "Makine seçimi, kapasite, hammadde ve saha koşulları birlikte değerlendirilerek çözüm kurguluyoruz.",
  },
  {
    title: "Endüstriyel Makine İmalatı",
    description:
      "Tambur, reaktör, tank, konveyör, kırıcı, bunker, silo ve özel proses ekipmanları üretiyoruz.",
  },
  {
    title: "Tesis ve Hat Çözümleri",
    description:
      "Gübre, kompost, geri dönüşüm, kimya, madencilik ve atık su çamuru prosesleri için entegre çözümler sunuyoruz.",
  },
];

const serviceCards: CardLink[] = [
  {
    title: "Proses Tasarımı ve Mühendislik",
    description:
      "Hammadde, kapasite ve ürün hedeflerine göre proses akışı ve ekipman seçimi.",
    href: "/hizmetler/proses-tasarimi-ve-muhendislik",
  },
  {
    title: "Makine İmalatı",
    description:
      "Tambur, tank, reaktör, konveyör, kırıcı, bunker, silo ve özel proses ekipmanları.",
    href: "/hizmetler/makine-imalati",
  },
  {
    title: "Anahtar Teslim Tesis Kurulumu",
    description:
      "Proses tasarımından saha montajına ve devreye almaya kadar komple tesis çözümleri.",
    href: "/hizmetler/anahtar-teslim-tesis-kurulumu",
  },
  {
    title: "Modernizasyon ve Revizyon",
    description:
      "Mevcut tesislerde kapasite, verimlilik, enerji kullanımı ve proses stabilitesi iyileştirmeleri.",
    href: "/hizmetler/modernizasyon-ve-revizyon",
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Makine ve proses hatlarının sahada kurulumu, test edilmesi ve üretime hazırlanması.",
    href: "/hizmetler/kurulum-ve-devreye-alma",
  },
  {
    title: "Teknik Danışmanlık",
    description:
      "Yatırım öncesi makine seçimi, proses değerlendirmesi ve saha uygulanabilirliği desteği.",
    href: "/hizmetler/teknik-danismanlik",
  },
];

const sectorCards: CardLink[] = [
  {
    title: "Gübre Üretim Tesisleri",
    description:
      "Granül gübre, organomineral gübre, sıvı gübre, NPK ve kompost gübre hatları.",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
  },
  {
    title: "Kompost ve Organik Atık Tesisleri",
    description:
      "Evsel, tarımsal, hayvansal ve organik atık işleme prosesleri.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
  },
  {
    title: "Enerji ve Biyogaz Sistemleri",
    description:
      "Biyogaz, biyometan, organik atık hazırlama ve enerji prosesleri.",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
  },
  {
    title: "Madencilik ve Mineral İşleme",
    description:
      "Kırma, eleme, kurutma, taşıma ve dökme katı malzeme prosesleri.",
    href: "/sektorler/madencilik-ve-mineral-isleme",
  },
  {
    title: "Kimya ve Proses Endüstrisi",
    description:
      "Reaktör, tank, karıştırma, dozajlama ve sıvı proses sistemleri.",
    href: "/sektorler/kimya-ve-proses-endustrisi",
  },
  {
    title: "Geri Dönüşüm ve Atık Yönetimi",
    description:
      "Atık hazırlama, parçalama, kurutma, taşıma ve ayrıştırma hatları.",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
  },
  {
    title: "Atık Su Çamuru ve Arıtma Çözümleri",
    description:
      "Çamur kurutma, granülasyon, depolama ve son ürün hazırlama çözümleri.",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
  },
  {
    title: "Yem ve Dökme Katı Malzeme İşleme",
    description:
      "Toz, granül ve dökme katı ürünler için taşıma, depolama ve paketleme sistemleri.",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
  },
];

const machineCards: CardLink[] = [
  {
    title: "Tambur Sistemleri",
    description: "Granülasyon, kurutma, soğutma, kaplama ve kompost proses ekipmanları.",
    href: "/makinalar-ekipman/tambur-sistemleri",
  },
  {
    title: "Reaktörler ve Tanklar",
    description: "Karıştırıcılı, basınçlı ve stok amaçlı proses tankı çözümleri.",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
  },
  {
    title: "Kırıcılar ve Parçalayıcılar",
    description: "Farklı malzeme yapıları için primer, sekonder ve shredder sistemleri.",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
  },
  {
    title: "Taşıma Ekipmanları",
    description: "Konveyör, elevatör ve helezon çözümleriyle kontrollü ürün transferi.",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
  },
  {
    title: "Toz Toplama Sistemleri",
    description: "Jet pulse filtre, torba filtre ve siklon entegrasyonları.",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    description: "Torbalama, big bag dolum ve sıvı dolum hatları.",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
  },
  {
    title: "Depolama ve Besleme Sistemleri",
    description: "Bunker, silo ve kontrollü besleme altyapıları.",
    href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
  },
  {
    title: "Eleme ve Sınıflandırma Sistemleri",
    description: "Döner, vibrasyonlu ve trommel eleme çözümleri.",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "İhtiyacı Anlama",
    description:
      "Ürün, hammadde, kapasite, saha koşulu ve üretim hedefi birlikte değerlendirilir.",
  },
  {
    step: "02",
    title: "Proses Kurgusu",
    description:
      "Hammaddeden son ürüne kadar çalışacak proses akışı ve ekipman ihtiyaçları belirlenir.",
  },
  {
    step: "03",
    title: "Makine ve Hat Tasarımı",
    description:
      "Makine ölçüleri, malzeme seçimi, yerleşim ve bağlantı detayları planlanır.",
  },
  {
    step: "04",
    title: "İmalat ve Uygulama",
    description:
      "Projeye uygun makine ve ekipmanlar üretilir, sahaya uygun şekilde hazırlanır.",
  },
  {
    step: "05",
    title: "Kurulum ve Teknik Destek",
    description:
      "Montaj, test, devreye alma ve ihtiyaç halinde teknik destek süreci yürütülür.",
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

function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
}) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0] ${eyebrowClassName ?? ""}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-8 text-slate-600 sm:text-base ${descriptionClassName ?? ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function LinkCard({ title, description, href }: CardLink) {
  return (
    <Link
      href={href}
      className="group rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-[#154764]">
          {title}
        </h3>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9e6ee] text-[#278DC0] transition group-hover:border-[#278DC0]/40 group-hover:text-[#154764]">
          →
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </Link>
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
        name: "Pro Makina Hakkında",
        item: canonical,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    description: "Endüstriyel makine imalatı, proses mühendisliği ve tesis çözümleri",
    areaServed: "Türkiye ve yurtdışı endüstriyel tesis projeleri",
    telephone: "+905320580104",
    email: "info@promakina.com.tr",
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Pro Makina Hakkında",
    description: pageDescription,
    url: canonical,
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={aboutPageSchema} />

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="site-container py-10 sm:py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                Endüstriyel Makine İmalatı ve Proses Mühendisliği
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#020617] md:text-5xl lg:text-6xl">
                Pro Makina Hakkında
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Pro Makina; 40 yılı aşan üretim kültüründen gelen saha tecrübesini,
                proses mühendisliği ve endüstriyel makine imalatı yaklaşımıyla
                birleştirir. Gübre, kompost, geri dönüşüm, kimya, madencilik, atık su
                çamuru ve dökme katı malzeme prosesleri için makine, ekipman ve tesis
                çözümleri geliştirir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/hizmetler"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  Hizmetleri İncele
                </Link>
                <Link
                  href="/makinalar-ekipman"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  Makinaları İncele
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
                >
                  Teknik Teklif Al
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4] sm:aspect-[16/11]">
                <Image
                  src="/images/hero/kat22.jpg"
                  alt="Pro Makina endüstriyel makine imalatı ve proses mühendisliği"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
              <SectionHeading title="Üretimden Gelen Mühendislik Yaklaşımı" />
              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                <p>
                  Pro Makina’nın temelinde sahada öğrenilmiş gerçek üretim tecrübesi yer
                  alır. Çelik konstrüksiyon, kaynaklı imalat, tambur sistemleri,
                  konveyörler, helezonlar, siklonlar, reaktörler, tanklar ve yardımcı
                  proses ekipmanlarıyla başlayan üretim kültürü; bugün farklı sektörlere
                  özel proses ve tesis çözümlerine dönüşmüştür.
                </p>
                <p>
                  Firma olarak yalnızca makine üretmeye değil; hammaddeden son ürüne kadar
                  çalışan, sahaya uygun, bakım kolaylığı olan ve uzun ömürlü proses hatları
                  kurmaya odaklanıyoruz. Bu nedenle her projede kapasite, hammadde yapısı,
                  nem oranı, ürün formu, saha koşulları ve işletme hedefleri birlikte
                  değerlendirilir.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm sm:col-span-2">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/01-genel/fabrika1.jpg"
                    alt="Pro Makina üretim tesisi ve makine imalatı"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 48vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/01-genel/proses1.png"
                    alt="Endüstriyel tesis kurulumu ve proses ekipmanları"
                    fill
                    sizes="(max-width: 640px) 100vw, 24vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/01-genel/sahakontrol1.webp"
                    alt="Pro Makina endüstriyel makine imalatı ve proses mühendisliği"
                    fill
                    sizes="(max-width: 640px) 100vw, 24vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title="Öne Çıkan Güçlerimiz" />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[#154764]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading
            title="Pro Makina Ne Yapar?"
            description="Pro Makina; endüstriyel üretim tesislerinde ihtiyaç duyulan makine, ekipman ve proses hatlarını tasarlar, imal eder, sahaya uygular ve teknik destek sağlar."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title="Hizmet Verdiğimiz Başlıca Sektörler" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {sectorCards.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
              <SectionHeading
                title="Makine ve Ekipman Üretim Kabiliyetimiz"
                description="Pro Makina; proses ihtiyacına göre standart veya özel ölçülü makine ve ekipman imalatı yapar. İmalatlarda proje ihtiyacına göre paslanmaz çelik, galvaniz ve RAL boyalı çözümler uygulanabilir."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {machineCards.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[22px] border border-[#d9e6ee] bg-slate-50 px-5 py-5 transition hover:border-[#278DC0]/40 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-950 transition group-hover:text-[#154764]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-[#278DC0] transition group-hover:text-[#154764]">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] min-h-[320px]">
                <Image
                  src="/images/01-genel/proses1.png"
                  alt="Endüstriyel tesis kurulumu ve proses ekipmanları"
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title="Her Projede Uyguladığımız Temel Yaklaşım" />
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[24px] border border-[#d9e6ee] bg-slate-50 px-5 py-5"
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
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/01-genel/sahakontrol1.webp"
                  alt="Pro Makina üretim tesisi ve makine imalatı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="rounded-[32px] border border-[#d9e6ee] bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:p-10">
              <SectionHeading
                eyebrow="Vizyon"
                title="Sahada Çalışan, Uzun Ömürlü ve Uygulanabilir Çözümler"
                description="Pro Makina için başarılı bir proje; yalnızca teslim edilen bir makine değil, sahada çalışan, işletmesi kolay, bakımı yapılabilir ve üretim hedefini karşılayan bir proses çözümüdür. Bu nedenle her projede mühendislik, imalat ve saha uygulaması birlikte düşünülür."
                eyebrowClassName="text-sky-300"
                titleClassName="text-white"
                descriptionClassName="text-white/80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-[0_20px_60px_rgba(39,141,192,0.28)] sm:px-8 sm:py-12 md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Prosesinize Uygun Makine ve Tesis Çözümünü Birlikte Planlayalım
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
              Üretmek istediğiniz ürün, kapasite hedefiniz ve saha koşullarınızı birlikte
              değerlendirelim. Pro Makina, ihtiyacınıza uygun makine, ekipman ve proses hattı
              çözümünü teknik olarak planlasın.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
              >
                Teknik Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                Hizmetleri İncele
              </Link>
              <Link
                href="/makinalar-ekipman"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                Makinaları İncele
              </Link>
              <a
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
              >
                WhatsApp ile Görüş
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
