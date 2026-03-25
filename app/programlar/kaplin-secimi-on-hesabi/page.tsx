import { CouplingSelectionCalculator } from "../../components/coupling-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function CouplingSelectionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kaplin Seçimi Ön Hesabı"
        description="Tork, devir, mil çapı ve servis faktörüne göre kaplin sınıfı, mil uyumu ve esnek / rijit kaplin ön değerlendirmesini hızlıca yapın."
      />
      <CouplingSelectionCalculator />
    </main>
  );
}
