import { InternalPlanetGearCalculator } from "../../components/internal-planet-gear-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function InternalPlanetGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz-Helis İç (Planet) Dişli Hesabı"
        description="İç dişli hesabı, planet dişli hesabı, çember dişli ve pinyon hesabı ile iç dişli iletim oranı ve eksen mesafesi değerlendirmeleri için ön boyutlandırma mantığında çalışan teknik araç sayfası."
      />
      <InternalPlanetGearCalculator />
    </main>
  );
}
