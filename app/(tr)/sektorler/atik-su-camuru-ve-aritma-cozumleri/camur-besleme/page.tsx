import type { Metadata } from "next";
import Link from "next/link";
import { GlobalBottomCta } from "../../../components/global-bottom-cta";
import { MachinePageHero } from "../../../components/machine-page-hero";
import { MachineTechnicalCta } from "../../../components/machine-technical-cta";
import { createMailtoHref, createWhatsAppHref, siteContact, siteSocialSameAs } from "../../../lib/site-contact";

const canonical =
  "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme";
const metaTitle = "Çamur Besleme Sistemleri | Bunker ve Helezon Çözümleri";
const metaDescription =
  "Atık su çamuru besleme sistemleri için bunker, helezon, dozaj, tampon hacim ve kurutma öncesi kontrollü akış çözümlerini inceleyin.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: {
    canonical,
  },
  openGraph: {
    title: metaTitle,
    description:
      "Atık su çamuru kurutma ve transfer proseslerinde bunker, helezon, dozaj ve kontrollü besleme sistemleri.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.promakina.com.tr/images/atik%20su%20camuru/sucamuru1.jpg",
        width: 1200,
        height: 630,
        alt: "Atık su çamuru besleme sistemi bunker ve helezon hattı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description:
      "Atık su çamuru için bunker, helezon ve dozaj kontrollü besleme sistemleri.",
    images: ["https://www.promakina.com.tr/images/atik%20su%20camuru/sucamuru1.jpg"],
  },
};

type Section =
  | { type: "paragraphs"; heading: string; paragraphs: string[] }
  | { type: "bullets"; heading: string; items: string[] }
  | { type: "cards"; heading: string; items: { title: string; text: string }[] }
  | {
      type: "table";
      heading: string;
      columns: [string, string];
      rows: [string, string][];
      note?: string;
    };

const sections: Section[] = [
  {
    type: "paragraphs",
    heading: "Atık Su Çamuru Beslemede Doğru Başlangıç",
    paragraphs: [
      "Kurutma, karıştırma veya nihai değerlendirme prosesi ne kadar güçlü olursa olsun, hat performansını belirleyen ilk noktalardan biri çamurun nasıl beslendiğidir. Çamur akışının düzensiz gelmesi; tambur yükünü, kurutma kararlılığını, enerji tüketimini ve operatör müdahalesi ihtiyacını doğrudan artırır.",
      "Bu nedenle çamur besleme sistemleri yalnızca bir bunker veya helezon seçimi değildir. Susuzlaştırma ekipmanından gelen kek yapısı, saatlik dalgalanma, tampon hacim ihtiyacı ve besleme sonrası ekipmanın çalışma rejimi birlikte değerlendirilmelidir.",
    ],
  },
  {
    type: "cards",
    heading: "Çamur Besleme Sisteminin Ana Bileşenleri",
    items: [
      {
        title: "Bunker ve tampon hacim",
        text: "Pres veya santrifüjden gelen düzensiz debiyi dengeler, operatöre kontrollü bir besleme penceresi oluşturur.",
      },
      {
        title: "Helezon ve vidalı transfer",
        text: "Yapışkan ve yüksek nemli çamuru kapalı ortamda kontrollü hızla bir sonraki prosese taşır.",
      },
      {
        title: "Dozaj kontrolü",
        text: "Kurutucu, mikser veya reaktörün kapasitesine göre anlık akışı ayarlayarak yük dalgalanmasını düşürür.",
      },
      {
        title: "Köprüleşme önleme çözümleri",
        text: "Karıştırıcı, kırıcı mil, titreşim veya özel bunker geometrisiyle akışsız bölgelerin oluşmasını azaltır.",
      },
      {
        title: "Seviye ve emniyet izleme",
        text: "Taşma, boş çalışma ve mekanik sıkışma risklerini PLC üzerinden takip eder.",
      },
      {
        title: "Temizlik ve bakım erişimi",
        text: "Çamurla çalışan sistemlerde duruş süresini azaltmak için bakım kapakları ve yıkama erişimi kritik hale gelir.",
      },
    ],
  },
  {
    type: "bullets",
    heading: "Hangi Durumlarda Özel Besleme Tasarımı Gerekir?",
    items: [
      "Susuzlaştırma sonrası kuru madde oranı gün içinde belirgin değişiyorsa",
      "Çamur lifli, yapışkan veya köprüleşmeye eğilimliyse",
      "Kurutucuya sabit tonaj verilmesi proses verimi için kritikse",
      "Birden fazla bunker veya paralel pres hattı tek kurutma hattına bağlanacaksa",
      "Koku kontrolü nedeniyle kapalı transfer ve minimum operatör teması isteniyorsa",
      "Besleme alanında yedekleme, kısa süreli stok veya vardiya tamponu gerekiyorsa",
    ],
  },
  {
    type: "table",
    heading: "Tekliflendirme İçin Gerekli Başlıca Veriler",
    columns: ["Tasarım verisi", "Neden önemlidir?"],
    rows: [
      ["Saatlik / günlük çamur miktarı", "Bunker hacmi, helezon çapı ve dozaj rejimini belirler."],
      ["Kuru madde oranı", "Çamurun akış karakterini ve köprüleşme riskini doğrudan etkiler."],
      ["Susuzlaştırma ekipmanı tipi", "Pres, santrifüj veya filtre pres çıkışı farklı bunker ve besleme davranışı üretir."],
      ["Besleme yapılacak ekipman", "Kurutucu, mikser veya depolama noktasına göre akış kararlılığı hedefi değişir."],
      ["Saha yerleşimi ve yükseklik", "Bunker yerleşimi, helezon açısı ve bakım erişimini etkiler."],
    ],
    note:
      "Çamur besleme sistemi, downstream ekipmandan bağımsız seçilmemelidir; kurutma hattı ve saha akışıyla birlikte projelendirilmelidir.",
  },
  {
    type: "paragraphs",
    heading: "Bunker, Helezon ve Otomasyonun Birlikte Çalışması",
    paragraphs: [
      "Besleme sisteminde amaç yalnızca malzemeyi ileri taşımak değildir; hat yükünü sabitlemektir. Bu nedenle bunker geometrisi, helezon adımı, motor kontrolü ve seviye sensörleri aynı otomasyon mantığında ele alınır.",
      "Doğru kurguda susuzlaştırma ünitesinden gelen çamur kısa süreli tamponlanır, köprüleşme azaltılır ve kurutma veya işleme hattına sürekli akış sağlanır. Böylece hem proses dalgalanması düşer hem de operatör müdahalesi azalır.",
    ],
  },
];

const faq = [
  {
    question: "Çamur besleme sistemi yalnızca bunker ve helezondan mı oluşur?",
    answer:
      "Hayır. Uygulamaya göre karıştırıcı, dozaj kontrolü, seviye izleme, köprüleşme önleme ve güvenlik ekipmanları da sistemin parçası olur.",
  },
  {
    question: "Helezon yerine bantlı sistem kullanılabilir mi?",
    answer:
      "Bazı uygulamalarda evet; ancak yapışkan ve yüksek nemli çamurlarda kapalı ve kontrollü taşıma için helezonlu sistemler çoğu zaman daha uygun olur.",
  },
  {
    question: "Kurutma hattında besleme kararlılığı neden önemlidir?",
    answer:
      "Düzensiz besleme, kurutucudaki ürün yükünü ve enerji dengesini bozar. Sabit besleme ise daha öngörülebilir nem çıkışı ve daha stabil işletme sağlar.",
  },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "paragraphs":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} />
            <div className="mt-6 max-w-4xl space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      );
    case "bullets":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} />
            <ul className="mt-6 grid max-w-4xl gap-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:text-[15px]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#278DC0]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    case "cards":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      );
    case "table":
      return (
        <section className="section-bottom-space">
          <div className="site-container">
            <SectionHeading title={section.heading} />
            <div className="mt-6 max-w-4xl overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
              <table className="w-full min-w-[420px] text-start text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th scope="col" className="px-5 py-4 text-start font-semibold text-slate-950">
                      {section.columns[0]}
                    </th>
                    <th scope="col" className="px-5 py-4 text-start font-semibold text-slate-950">
                      {section.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 1 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-slate-900">{row[0]}</td>
                      <td className="px-5 py-3.5 leading-7 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.note ? (
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">{section.note}</p>
            ) : null}
          </div>
        </section>
      );
    default:
      return null;
  }
}

export default function Page() {
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
        name: "Sektörler",
        item: "https://www.promakina.com.tr/sektorler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Atık Su Çamuru ve Arıtma Çözümleri",
        item: "https://www.promakina.com.tr/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Atık Su Çamuru Besleme Sistemleri",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Atık Su Çamuru Besleme Sistemleri",
    description: metaDescription,
    serviceType: "Atık su çamuru besleme sistemleri",
    provider: {
      "@type": "Organization",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
      sameAs: siteSocialSameAs,
    },
    url: canonical,
    image: "https://www.promakina.com.tr/images/atik%20su%20camuru/sucamuru1.jpg",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const whatsappHref = createWhatsAppHref(
    "Merhaba, atık su çamuru besleme sistemleri için teknik bilgi ve teklif almak istiyorum.",
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <MachinePageHero
        title="Atık Su Çamuru Besleme Sistemleri"
        quoteHref="/iletisim#quote-form"
        whatsappHref={whatsappHref}
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-[#278DC0]">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/sektorler" className="transition hover:text-[#278DC0]">
                Sektörler
              </Link>
              <span>/</span>
              <Link
                href="/sektorler/atik-su-camuru-ve-aritma-cozumleri"
                className="transition hover:text-[#278DC0]"
              >
                Atık Su Çamuru ve Arıtma Çözümleri
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-900">Atık Su Çamuru Besleme Sistemleri</span>
            </nav>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
              TEKNİK ALT ÇÖZÜM
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
              Atık su çamuru hattında ilk stabilizasyon noktası besleme sistemidir. Bunker, helezon,
              dozaj ve otomasyon kurgusunu; çamurun gerçek akış karakterine, susuzlaştırma ekipmanına
              ve hedef proses kapasitesine göre birlikte tasarlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <SectionRenderer key={section.heading} section={section} />
      ))}

      <section className="section-bottom-space">
        <div className="site-container grid gap-6 xl:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Makinalar
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Helezon ve Vidalı Taşıma Sistemleri",
                  href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
                  description:
                    "Yüksek nemli ve yapışkan malzemelerde kapalı transfer için vidalı taşıma çözümleri.",
                },
                {
                  title: "Bunker ve Hazneler",
                  href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
                  description:
                    "Kısa süreli tamponlama, kontrollü boşaltma ve besleme istasyonları için bunker altyapıları.",
                },
                {
                  title: "Kurutma Tamburu",
                  href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
                  description:
                    "Besleme kararlılığına duyarlı termal kurutma hatları için kurutma tamburu çözümleri.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-[#278DC0]/30 hover:bg-white"
                >
                  <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-2 block text-sm leading-7 text-slate-600">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Teknik İçerikler
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Çamur Kurutma Sistemleri",
                  href: "/kutuphane/blog/camur-kurutma-sistemleri",
                  description:
                    "Atık su çamurunda termal kurutma kurgusunu ve ana mühendislik kararlarını inceleyin.",
                },
                {
                  title: "Atık Su Çamuru Kurutma Tesisleri",
                  href: "/tesisler/atik-su-camuru-kurutma-tesisi",
                  description:
                    "Besleme, back-mixing ve termal kurutma hattını ticari tesis yaklaşımıyla görün.",
                },
                {
                  title: "Kurutma Tamburu Hesaplama",
                  href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
                  description:
                    "Nem yükü, hava debisi ve proses kapasitesinin kurutucu tasarımına etkisini okuyun.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-[#278DC0]/30 hover:bg-white"
                >
                  <span className="block text-base font-semibold text-slate-950">{item.title}</span>
                  <span className="mt-2 block text-sm leading-7 text-slate-600">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <SectionHeading title="Sık Sorulan Sorular" />
          <div className="mt-6 grid max-w-4xl gap-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-slate-200 bg-white px-6 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-slate-950 sm:text-base">
                  {item.question}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container grid gap-8">
          <MachineTechnicalCta
            title="Projeniz için teknik teklif alın"
            text="Çamur miktarını, kuru madde oranını, mevcut susuzlaştırma ekipmanını ve beslenecek proses adımını paylaşın. Bunker, helezon ve dozaj sistemini saha koşullarınıza göre birlikte kurgulayalım."
            whatsappHref={whatsappHref}
            mailHref={createMailtoHref("Atık Su Çamuru Besleme Sistemleri")}
          />
          <GlobalBottomCta
            title="Atık Su Çamuru Besleme Sistemleri"
            description="Bunker hacmi, akış kararlılığı, köprüleşme riski ve besleme sonrası ekipman kapasitesi birlikte değerlendirilerek doğru besleme hattı tasarlanır."
            primaryLabel="WhatsApp ile Teknik Bilgi Al"
            primaryHref={siteContact.whatsappHref}
            secondaryLabel="Telefonla Ara"
            secondaryHref={siteContact.phoneHref}
            tertiaryLabel="İletişim Formu"
            tertiaryHref="/iletisim#quote-form"
          />
        </div>
      </section>
    </main>
  );
}
