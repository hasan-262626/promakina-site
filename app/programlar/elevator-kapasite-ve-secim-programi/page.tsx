import { ElevatorSelectionCalculator } from "../../components/elevator-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function ElevatorSelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Elevatör Kapasite ve Seçim Programı"
        description="Bantlı elevatör, zincirli elevatör, kova tipi, kova ölçüsü, boşaltma tipi, hız aralığı ve ön mekanik tavsiyeler için profesyonel ön seçim ve teklif hazırlama aracı."
      />
      <ElevatorSelectionCalculator />
    </main>
  );
}
