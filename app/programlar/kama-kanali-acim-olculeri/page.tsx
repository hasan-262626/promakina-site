import { KeywayDimensionsCalculator } from "../../components/keyway-dimensions-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function KeywayDimensionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kama Kanalı Açım Ölçüleri"
        description="Mil veya delik çapına göre standart kama eni, kama yüksekliği, mile giriş, deliğe giriş ve derinlik toleransı bilgilerini teknik olarak hızlıca görüntüleyin."
      />
      <KeywayDimensionsCalculator />
    </main>
  );
}
