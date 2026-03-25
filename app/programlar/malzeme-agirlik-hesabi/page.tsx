import { MaterialWeightCalculator } from "../../components/material-weight-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function MaterialWeightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Malzeme Ağırlık Hesabı"
        description="Yuvarlak, kare, lama, altıköşe ve levha malzemelerde temel ölçü bilgileriyle ağırlık hesabını hızlıca yapabileceğiniz teknik yardımcı ekran. Form alanı üstte kısa hero sonrasında doğrudan görünür."
      />
      <MaterialWeightCalculator />
    </main>
  );
}
