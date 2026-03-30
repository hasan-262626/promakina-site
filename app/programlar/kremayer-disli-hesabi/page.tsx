import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { RackGearCalculator } from "../../components/rack-gear-calculator";

export default function RackGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kremayer Dişli Hesabı"
        description="Kremayer dişli ve kremayer kapı sistemi uygulamalarında modül, lineer hareket ve uygunluk değerlendirmesi yapabileceğiniz teknik yardımcı araç. Üst bölüm kısa tutulur ve giriş alanı hızlıca görünür."
      />
      <ProgramToolShell
        title="Kremayer Girişleri"
        diagram="rack"
        caption="Kremayer ve pinyon sisteminde modül, lineer hareket ve pinyon diş sayısı ilişkisini anlatan şematik görünüm."
        fields={[
          { label: "Modül ve diş sayısı", description: "Pinyon diş sayısı ve modül lineer ilerleme miktarını belirler." },
          { label: "Devir ve strok", description: "Motor devri ile kapı veya lineer strok uzunluğu hareket süresini etkiler." },
          { label: "Servis bilgileri", description: "Kapı yükü, servis tipi ve saha koşulları teknik yorumun doğruluğunu artırır." },
        ]}
        chips={[
          { short: "m", meaning: "Modül" },
          { short: "Z", meaning: "Pinyon diş sayısı" },
          { short: "L", meaning: "Lineer hareket" },
        ]}
      />
      <RackGearCalculator />
    </main>
  );
}
