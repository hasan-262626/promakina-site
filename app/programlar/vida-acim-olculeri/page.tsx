import { ProgramPageHero } from "../../components/program-page-hero";
import { ThreadCuttingMeasurementsCalculator } from "../../components/thread-cutting-measurements-calculator";

export default function ThreadCuttingMeasurementsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Vida Açım Ölçüleri"
        description="Metrik normal, metrik ince ve Whitworth vida standartlarında dış vida ve iç vida açım ölçülerini teknik olarak hızlıca görüntüleyin."
      />
      <ThreadCuttingMeasurementsCalculator />
    </main>
  );
}
