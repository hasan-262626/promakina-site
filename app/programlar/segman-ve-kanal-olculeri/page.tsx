import { CirclipGrooveCalculator } from "../../components/circlip-groove-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function CirclipGroovePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Segman ve Kanal Ölçüleri"
        description="DIN 472 iç segman ve DIN 471 dış segman ölçülerine göre standart segman ve kanal açım bilgilerini teknik olarak hızlıca görüntüleyin."
      />
      <CirclipGrooveCalculator />
    </main>
  );
}
