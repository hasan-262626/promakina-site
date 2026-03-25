import { ProgramPageHero } from "../../components/program-page-hero";
import { RackGearCalculator } from "../../components/rack-gear-calculator";

export default function RackGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kremayer Dişli Hesabı"
        description="Kremayer dişli ve kremayer kapı sistemi uygulamalarında modül, lineer hareket ve uygunluk değerlendirmesi yapabileceğiniz teknik yardımcı araç. Üst bölüm kısa tutulur ve giriş alanı hızlıca görünür."
      />
      <RackGearCalculator />
    </main>
  );
}
