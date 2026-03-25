import { BeltPulleyCalculator } from "../../components/belt-pulley-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function BeltPulleyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kayış-Kasnak Oran Hesabı"
        description="Kasnak çapı, devir, kayış hızı ve merkez mesafesine göre oran ve kayış boyu ön hesabını hızlıca değerlendirin."
      />
      <BeltPulleyCalculator />
    </main>
  );
}
