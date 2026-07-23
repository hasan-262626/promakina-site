import type { Metadata } from "next";
import { DrumCapacityProgramPage } from "../../components/drum-capacity-program-page";
import { faqItems, type DrumType } from "../../lib/drum-capacity-program";

type PageProps = {
  searchParams: Promise<{
    drumType?: string | string[];
  }>;
};

const allowedDrumTypes: DrumType[] = [
  "kurutma",
  "sogutma",
  "granulasyon",
  "kaplama",
  "kompost",
  "karistirma",
  "sterilizasyon",
  "ozel",
];

export const metadata: Metadata = {
  title: "Tambur Hesapları",
  description:
    "Kurutma tamburu, soğutma tamburu, granülasyon tamburu, kaplama tamburu, kompost/olgunlaştırma tamburu, karıştırma tamburu, sterilizasyon tamburu ve özel tambur sistemleri için ön mühendislik hesabı yapın.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar/tambur-hesaplari",
  },
  openGraph: {
    title: "Tambur Hesapları",
    description:
      "Tambur çapı, boyu, devir aralığı, eğim, doluluk oranı, kalış süresi ve motor gücü için mühendislik odaklı ön tasarım paneli.",
    url: "https://www.promakina.com.tr/programlar/tambur-hesaplari",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tambur Hesapları",
    description:
      "Kurutma, soğutma, granülasyon, kaplama, kompost ve özel tambur sistemleri için profesyonel ön mühendislik hesabı.",
  },
};

function normalizeDrumType(value?: string | string[]): DrumType | "" {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return "";
  return allowedDrumTypes.includes(raw as DrumType) ? (raw as DrumType) : "";
}

export default async function DrumEngineeringToolkitRoute({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialDrumType = normalizeDrumType(params.drumType);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DrumCapacityProgramPage initialDrumType={initialDrumType} />
    </>
  );
}
