import { ProgramPageHero } from "../../components/program-page-hero";
import { SheetFabricationCalculator } from "../../components/sheet-fabrication-calculator";

export default function SheetFabricationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Sac-Kaynak Hesapları"
        description="Sac ağırlık, büküm açılım boyu, abkant tonajı ve kaynak metrajı / dolgu hesabını tek sayfada değerlendirin."
      />
      <SheetFabricationCalculator />
    </main>
  );
}
