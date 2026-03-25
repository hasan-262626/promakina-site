import { MachiningCalculationsCalculator } from "../../components/machining-calculations-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function MachiningCalculationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Talaşlı İmalat Hesapları"
        description="Vida açım ölçüleri, kılavuz delik hesabı, kesme hızı / devir, freze ilerleme ve delik yerleşimi yardımcı hesaplarını tek sayfada değerlendirin."
      />
      <MachiningCalculationsCalculator />
    </main>
  );
}
