import type { Metadata } from "next";
import { ElevatorSelectionCalculator } from "../../components/elevator-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";


export const metadata: Metadata = {
  title: "Elevatör Kapasite ve Seçim Programı | Mühendislik Hesap Araçları",
  description: "Bantlı elevatör, zincirli elevatör, kova tipi, kova ölçüsü, boşaltma tipi ve ön mekanik tavsiyeler için profesyonel ön seçim aracıdır.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar/elevator-kapasite-ve-secim-programi",
  },
  openGraph: {
    title: "Elevatör Kapasite ve Seçim Programı | Pro Makina",
    description: "Bantlı elevatör, zincirli elevatör, kova tipi, kova ölçüsü, boşaltma tipi ve ön mekanik tavsiyeler için profesyonel ön seçim aracıdır.",
    url: "https://www.promakina.com.tr/programlar/elevator-kapasite-ve-secim-programi",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ElevatorSelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Elevatör Kapasite ve Seçim Programı"
        description="Bantlı elevatör, zincirli elevatör, kova tipi, kova ölçüsü, boşaltma tipi ve ön mekanik tavsiyeler için profesyonel ön seçim aracıdır."
      />
      <ProgramToolShell
        title="Elevatör seçim kurgusu"
        diagram="capacity"
        caption="Kova tipi, hat yüksekliği, saatlik kapasite ve ürün davranışı birlikte değerlendirilerek elevatör yapısı ile hız önerisi oluşturulur."
        fields={[
          {
            label: "Ürün ve kova yapısı",
            description: "Taşınacak ürünün kırılganlığı, nemi ve akış karakteri kova tipi ile boşaltma mantığını belirler.",
          },
          {
            label: "Hat yüksekliği ve kapasite",
            description: "Toplam kaldırma yüksekliği ve hedef kapasite elevatör serisi ile tahrik yaklaşımını etkiler.",
          },
          {
            label: "Servis ve güvenlik",
            description: "Çalışma süresi, bakım yaklaşımı ve güvenlik gereksinimi sistem yorumlarında birlikte ele alınır.",
          },
        ]}
        chips={[
          { short: "Q", meaning: "Saatlik kapasite" },
          { short: "H", meaning: "Kaldırma yüksekliği" },
          { short: "v", meaning: "Hat hızı" },
        ]}
      />
      <ElevatorSelectionCalculator />
    </main>
  );
}
