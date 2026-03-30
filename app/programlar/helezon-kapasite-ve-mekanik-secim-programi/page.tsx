import { ProgramPageHero } from "../../components/program-page-hero";
import { ScrewConveyorSelectionCalculator } from "../../components/screw-conveyor-selection-calculator";

export default function ScrewConveyorSelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı"
        description="Helezon çapı, hatve, devir, kapasite uygunluğu, motor gücü, redüktör ve mekanik yapı önerileri için profesyonel ön seçim ve teklif hazırlama aracı."
      />
      <ScrewConveyorSelectionCalculator />
    </main>
  );
}
