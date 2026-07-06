import type { Metadata } from "next";
import { BeltPulleyCalculator } from "../../components/belt-pulley-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";


export const metadata: Metadata = {
  title: "Kayış-Kasnak Oran Hesabı | Mühendislik Hesap Araçları",
  description: "Kasnak çapı, giriş devri, kayış hızı ve merkez mesafesine göre oran, çıkış devri ve kayış boyu için hızlı teknik ön hesap alın.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar/kayis-kasnak-oran-hesabi",
  },
  openGraph: {
    title: "Kayış-Kasnak Oran Hesabı | Pro Makina",
    description: "Kasnak çapı, giriş devri, kayış hızı ve merkez mesafesine göre oran, çıkış devri ve kayış boyu için hızlı teknik ön hesap alın.",
    url: "https://www.promakina.com.tr/programlar/kayis-kasnak-oran-hesabi",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function BeltPulleyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kayış-Kasnak Oran Hesabı"
        description="Kasnak çapı, giriş devri, kayış hızı ve merkez mesafesine göre oran, çıkış devri ve kayış boyu için hızlı teknik ön hesap alın."
      />
      <ProgramToolShell
        title="Kayış-Kasnak Girişleri"
        diagram="pulley"
        caption="Döndüren ve döndürülen kasnak çapları ile kayış hattı ilişkisini gösteren teknik şema."
        fields={[
          { label: "Kasnak çapları", description: "Döndüren ve döndürülen kasnak çapları oranı ve çıkış devrini belirler." },
          { label: "Giriş devri", description: "Kayış hızı ve döndürülen kasnak devri giriş devrine göre hesaplanır." },
          { label: "Merkez mesafesi", description: "Girildiğinde yaklaşık kayış boyu ve yerleşim ön değerlendirmesi yapılır." },
        ]}
        chips={[
          { short: "D1", meaning: "Döndüren kasnak" },
          { short: "D2", meaning: "Döndürülen kasnak" },
          { short: "i", meaning: "Oran" },
        ]}
      />
      <BeltPulleyCalculator />
    </main>
  );
}
