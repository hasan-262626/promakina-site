import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProgramsModalExperience } from "../components/programs-modal-experience";
import { programGroups, type ProgramGroup } from "../program-groups";

const canonical = "https://www.promakina.com.tr/programlar";

export const metadata: Metadata = {
  title: "Proses ve Makine Hesaplama Araçları",
  description:
    "Kurutma tamburu, konveyör, helezon, elevatör, siklon, jet pulse, maliyet, güç aktarımı ve mühendislik hesapları için Pro Makina hesaplama araçları.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Programlar",
    description:
      "Makine kapasitesi, tambur tasarımı, siklon, jet pulse, maliyet, güç aktarımı ve mühendislik hesaplama araçlarını inceleyin.",
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

const groupContent: Array<{
  id: string;
  title: string;
  description: string;
  toolSlugs: string[];
}> = [
  {
    id: "makine-kapasite-hesaplari",
    title: "Makine Kapasite Hesapları",
    description:
      "Konveyör, elevatör, helezon, tambur, siklon, filtre, tank, bunker ve eleme ekipmanları için kapasite, seçim ve temel mekanik uygunluk hesap araçları.",
    toolSlugs: [
      "helezon-kapasite-ve-mekanik-secim-programi",
      "elevator-kapasite-ve-secim-programi",
      "konveyor-kapasite-ve-secim-hesap-programi",
      "tambur-hesabi",
      "siklon-hesabi",
      "jet-pulse-hesabi",
    ],
  },
  {
    id: "tambur-hesaplari",
    title: "Tambur Hesapları",
    description:
      "Tambur imalatı ve proses tasarımı için kapasite, devir, eğim, doluluk, ring, redüktör, fan, siklon ve brülör seçimlerini tek mühendislik panelinde değerlendirin.",
    toolSlugs: [
      "tambur-kapasite-hesabi",
      "tambur-devir-hesabi",
      "tambur-egim-doluluk-hesabi",
      "tambur-ring-tahrik-hesabi",
      "tambur-reduktor-hesabi",
      "tambur-fan-secimi",
      "tambur-siklon-secimi",
      "tambur-brulor-secimi",
    ],
  },
  {
    id: "maliyet-hesaplari",
    title: "Maliyet Hesapları",
    description:
      "Sac, profil, boru, kaynak, ağırlık ve imalat kalemleri için malzeme ve ön maliyet odaklı hesap araçları.",
    toolSlugs: ["sac-kaynak-hesaplari", "malzeme-agirlik-hesabi"],
  },
  {
    id: "mil-kaplin-ve-baglanti-hesaplari",
    title: "Mil, Kaplin ve Bağlantı Hesapları",
    description:
      "Mil çapı, kaplin, bağlantı elemanları ve mekanik güvenlik kontrolleri için ön mühendislik hesapları.",
    toolSlugs: [
      "mil-capi-hesabi",
      "kaplin-secimi-on-hesabi",
      "kama-kanali-acim-olculeri",
      "segman-ve-kanal-olculeri",
    ],
  },
  {
    id: "guc-aktarim-hesaplari",
    title: "Güç Aktarım Hesapları",
    description:
      "Motor gücü, redüktör, tork, zincir, kayış-kasnak ve tahrik sistemi seçimleri için hesaplama araçları.",
    toolSlugs: [
      "motor-gucu-on-hesabi",
      "kayis-kasnak-oran-hesabi",
      "zincir-disli-hesabi",
      "duz-helis-disli-hesabi",
      "kremayer-disli-hesabi",
      "triger-disli-hesabi",
      "sonsuz-vida-disli-hesabi",
    ],
  },
  {
    id: "muhendislik-hesaplari",
    title: "Mühendislik Hesapları",
    description:
      "Debi, hacim, yoğunluk, ısı yükü, nem, kuru madde, basınç kaybı ve hava debisi gibi temel mühendislik hesapları.",
    toolSlugs: ["donusum-araclari", "talasli-imalat-hesaplari", "iso-gecme-toleranslari"],
  },
  {
    id: "diger-hesaplamalar",
    title: "Diğer Hesaplamalar",
    description:
      "Proje hazırlığı, saha ölçülendirme ve yardımcı proses değerlendirmeleri için ek hesaplama araçları.",
    toolSlugs: [
      "tank-hesabi",
      "bunker-hesabi",
      "elek-hesabi",
      "ahir-atigi-hesaplama",
      "evsel-atik-cop-hesaplama",
      "atik-su-ve-aritma-camuru-hesaplama",
      "biyogaz-guc-kw-hesaplama",
      "kompost-son-urun-hesaplama",
      "kurutma-nem-dusurme-hesaplama",
      "depolama-hacmi-stok-suresi-hesaplama",
    ],
  },
];

const toolLookup = new Map(
  programGroups.flatMap((group) => group.tools.map((tool) => [tool.slug, tool] as const)),
);

const displayGroups: ProgramGroup[] = groupContent.map((group) => ({
  id: group.id,
  title: group.title,
  description: group.description,
  tools: group.toolSlugs
    .map((slug) => toolLookup.get(slug))
    .filter((tool): tool is ProgramGroup["tools"][number] => Boolean(tool)),
}));

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-[#f8fbfd]">
        <div className="site-container py-5 sm:py-6">
          <div className="flex flex-col gap-2">
            <div className="text-sm text-slate-500">
              <Link href="/" className="transition hover:text-[#154764]">
                Ana Sayfa
              </Link>
              <span className="mx-2">/</span>
              <span>Programlar</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#154764]">
                Programlar
              </span>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Programlar
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Kurutma tamburu hesabı, tambur kapasite hesabı, makine kapasite
              hesapları, siklon hesabı, jet pulse hesabı, malzeme ağırlık hesabı,
              dişli hesabı, konveyör kapasite hesabı, helezon kapasite hesabı ve
              elevatör kapasite hesabı için hazırlanan program gruplarını aşağıdan
              açabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container max-w-[1240px]">
          <Suspense fallback={null}>
            <ProgramsModalExperience groups={displayGroups} />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="site-container max-w-4xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(tamburCalcSchema) }}
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#278DC0]">
            Öne Çıkan Araç
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Tambur Kapasite Hesabı
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600">
            Kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu ve
            kompost tamburu için ön mühendislik hesaplama aracı. Tambur tipini
            seçtiğinizde dökme yoğunluk, doluluk oranı, bekleme süresi, tambur devri ve
            eğim gibi tasarım varsayımları otomatik doldurulur; kapasite ve nem
            verilerinize göre kuru madde, buharlaşacak su, gerekli tambur hacmi ve
            önerilen çap-boy aralıkları hesaplanır. Döner kurutucu (rotary dryer)
            boyutlandırması ve endüstriyel tambur tasarımına başlamadan önce ilk
            değerlendirmeyi bu araçla yapabilirsiniz.
          </p>
          <div className="mt-5">
            <Link
              href="/programlar?modal=tambur-kapasite-hesabi"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
            >
              Tambur Kapasite Hesabını Aç
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            {tamburCalcFaqs.map((faq) => (
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
              { href: "/sektorler/gubre-ve-granulasyon-tesisleri", label: "Gübre Üretim Tesisleri" },
              { href: "/sektorler/kompost-ve-organik-atik-tesisleri", label: "Kompost Tesisleri" },
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

const tamburCalcFaqs = [
  {
    question: "Tambur kapasite hesabı hangi tambur tiplerini kapsar?",
    answer:
      "Araç; kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu ve kompost / olgunlaştırma tamburu için ön mühendislik hesabı yapar. Tambur tipi seçildiğinde tipe uygun tasarım varsayımları otomatik doldurulur.",
  },
  {
    question: "Kurutma tamburu kapasite hesabında hangi veriler gerekir?",
    answer:
      "Yaş ürün giriş kapasitesi, giriş nemi, hedef çıkış nemi ve ürün dökme yoğunluğu temel girdilerdir. Araç bu verilerle kuru madde miktarını, buharlaşacak su yükünü, gerekli tambur hacmini ve önerilen çap-boy aralıklarını hesaplar.",
  },
  {
    question: "Hesap sonucu kesin tambur ölçüsü müdür?",
    answer:
      "Hayır. Sonuçlar ön mühendislik değerlendirmesidir. Nihai tambur çapı, boyu, brülör kapasitesi, fan debisi ve siklon/filtre seçimi; ürün numunesi, nem analizi ve saha verilerine göre Pro Makina mühendislik ekibi tarafından netleştirilir.",
  },
  {
    question: "Hesap sonuçlarıyla nasıl teklif alabilirim?",
    answer:
      "Sonuç ekranındaki WhatsApp ile Gönder butonu, girdiğiniz değerleri mesaj taslağına ekler. Dilerseniz Teknik Teklif Al butonuyla iletişim sayfası üzerinden proje detaylarınızı paylaşabilirsiniz.",
  },
];

const tamburCalcSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Tambur Kapasite Hesabı",
      url: "https://www.promakina.com.tr/programlar?modal=tambur-kapasite-hesabi",
      applicationCategory: "EngineeringApplication",
      operatingSystem: "Web",
      description:
        "Kurutma, soğutma, granülasyon, kaplama ve kompost tamburları için ön mühendislik kapasite ve boyutlandırma hesabı.",
      publisher: {
        "@type": "Organization",
        name: "Pro Makina",
        url: "https://www.promakina.com.tr",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: tamburCalcFaqs.map((faq) => ({
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
