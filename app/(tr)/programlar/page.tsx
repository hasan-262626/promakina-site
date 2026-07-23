import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProgramsHub } from "../components/programs-hub";
import { buildHubTools, hubCategories } from "../lib/program-hub-data";

const canonical = "https://www.promakina.com.tr/programlar";

export const metadata: Metadata = {
  title: "Proses ve Makine Hesaplama Araçları",
  description:
    "Kurutma tamburu hesabı, helezon konveyör kapasite hesabı, bant konveyör, elevatör, siklon, jet pulse filtre, bunker, tank, elek, malzeme ağırlığı ve nem düşürme hesapları için ön mühendislik araçları.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Proses ve Makine Hesaplama Araçları",
    description:
      "Kurutma tamburu, helezon konveyör, bant konveyör, elevatör, siklon, jet pulse filtre, bunker, tank ve nem düşürme hesapları için ön mühendislik araçları.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const heroCtas = [
  { href: "/programlar?modal=tambur-kapasite-hesabi", label: "Tambur Kapasite Hesabı", primary: true },
  { href: "#kategori-tasima", label: "Makine Kapasite Hesapları", primary: false },
  { href: "#kategori-malzeme", label: "Malzeme / Ağırlık Hesapları", primary: false },
  { href: "/iletisim", label: "Teknik Teklif Al", primary: false },
];

const programFaqs = [
  {
    question: "Bu hesap araçları kesin mühendislik hesabı mıdır?",
    answer:
      "Hayır. Tüm araçlar ön mühendislik amaçlıdır. Nihai ekipman ölçüleri; ürün numunesi, dökme yoğunluk, nem analizi, proses sıcaklığı, saha yerleşimi ve kapasite hedeflerine göre Pro Makina mühendislik ekibi tarafından netleştirilir.",
  },
  {
    question: "Ürün yoğunluğu neden önemlidir?",
    answer:
      "Dökme yoğunluk; tambur hacmi, helezon çapı, bant genişliği ve bunker kapasitesi gibi tüm boyutlandırma hesaplarının temel girdisidir. Araçlarda ürün seçtiğinizde tipik yoğunluk otomatik gelir, gerekirse kendi değerinizle değiştirebilirsiniz.",
  },
  {
    question: "Kurutma tamburu hesabında nem oranı nasıl etkiler?",
    answer:
      "Giriş nemi ile hedef çıkış nemi arasındaki fark, buharlaşacak su miktarını ve dolayısıyla ısı yükünü, gaz debisini ve tambur boyutunu doğrudan belirler. Nem farkı büyüdükçe gerekli tambur hacmi ve brülör kapasitesi artar.",
  },
  {
    question: "Helezon kapasitesi neye göre değişir?",
    answer:
      "Helezon kapasitesi; vida çapı, devir, hatve, doluluk oranı, ürün yoğunluğu ve hat eğimine bağlıdır. Eğim arttıkça taşıma verimi düşer; yapışkan ve zor akışlı ürünlerde doluluk oranı düşük seçilir.",
  },
  {
    question: "Pro Makina bu verilere göre teknik teklif hazırlayabilir mi?",
    answer:
      "Evet. Hesap sonuç ekranındaki WhatsApp ile Gönder butonu girdiğiniz değerleri mesaj taslağına ekler; mühendislik ekibimiz bu ön verilerle teknik teklif sürecini başlatır ve ürün numunesiyle tasarımı netleştirir.",
  },
];

const programsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Pro Makina Hesaplama Araçları",
      url: canonical,
      applicationCategory: "EngineeringApplication",
      operatingSystem: "Web",
      description:
        "Kurutma tamburu, helezon konveyör, bant konveyör, elevatör, siklon, jet pulse filtre, bunker, tank ve nem düşürme hesapları için ön mühendislik araçları.",
      publisher: {
        "@type": "Organization",
        name: "Pro Makina",
        url: "https://www.promakina.com.tr",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: programFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function ProgramsPage() {
  const tools = buildHubTools();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-[#154764]">
        <div className="site-container py-10 sm:py-14">
          <div className="text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span>Programlar</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proses ve Makine Hesaplama Araçları
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-200">
            Kurutma tamburu, helezon konveyör, bant konveyör, elevatör, siklon, jet pulse
            filtre, bunker, tank, elek, nem düşürme, depolama ve temel mekanik hesaplar
            için ön mühendislik hesaplama araçları.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={
                  cta.primary
                    ? "inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#154764]"
                    : "inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hub: arama, filtre, öne çıkanlar, kategoriler */}
      <section className="section-space">
        <div className="site-container max-w-[1240px]">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Ne hesaplamak istiyorsunuz?
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Kategoriyi seçin veya aramayla ilgili hesabı bulun. Her araçta ürün
              seçtiğinizde yoğunluk ve temel varsayımlar otomatik gelir; sonuçlar teklif
              görüşmesine esas ön mühendislik değerlendirmesidir.
            </p>
          </div>
          <Suspense fallback={null}>
            <ProgramsHub categories={hubCategories} tools={tools} />
          </Suspense>
        </div>
      </section>

      {/* SSS */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="site-container max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-6 space-y-4">
            {programFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-[#154764]">İlgili sayfalar:</span>
            {[
              { href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu", label: "Kurutma Tamburu" },
              { href: "/makinalar-ekipman/tambur-sistemleri", label: "Tambur Sistemleri" },
              { href: "/makinalar-ekipman/tasima-ekipmanlari", label: "Taşıma Ekipmanları" },
              { href: "/sektorler/gubre-ve-granulasyon-tesisleri", label: "Gübre Üretim Tesisleri" },
              { href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri", label: "Atık Su Çamuru Kurutma" },
              { href: "/iletisim", label: "Teknik Teklif Al" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-[38px] items-center rounded-full border border-slate-200 bg-white px-4 font-medium text-slate-700 transition hover:border-[#278DC0] hover:text-[#154764]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
