import { ProgramPageHero } from "../../components/program-page-hero";
import { ShaftDiameterCalculator } from "../../components/shaft-diameter-calculator";

export default function ShaftDiameterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Mil Çapı Hesabı"
        description="Burulma momentine göre mil çapı, eğilme + burulma ön hesabı ve katı mil / boru mil karşılaştırmasını mühendislik odaklı şekilde değerlendirin."
      />
      <ShaftDiameterCalculator />
    </main>
  );
}
