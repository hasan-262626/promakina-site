import { IsoFitTolerancesCalculator } from "../../components/iso-fit-tolerances-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function IsoFitTolerancesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="ISO Geçme Toleransları"
        description="ISO Geçme Toleransları (TS 1845-2 EN ISO 286-2) standardına göre mil, delik ve geçme karşılaştırmalarını teknik olarak değerlendirin."
      />
      <IsoFitTolerancesCalculator />
    </main>
  );
}
