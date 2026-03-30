import { ConveyorSelectionCalculator } from "../../components/conveyor-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function ConveyorCapacitySelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Konveyör Kapasite ve Seçim Hesap Programı"
        description="Bantlı konveyör kapasitesi, bant genişliği, bant hızı, redüktör çıkış devri, tambur çapı, istasyon yapısı ve mekanik tavsiyeler için satış ön teklifine ve ön mühendisliğe uygun profesyonel seçim aracı."
      />
      <ConveyorSelectionCalculator />
    </main>
  );
}
