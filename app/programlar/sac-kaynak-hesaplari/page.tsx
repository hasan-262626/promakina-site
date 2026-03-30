import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { SheetFabricationCalculator } from "../../components/sheet-fabrication-calculator";

export default function SheetFabricationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Sac-Kaynak Hesapları"
        description="Sac ağırlık hesabı, büküm açılım boyu, abkant tonaj hesabı ve kaynak dolgu miktarı için imalat odaklı ön hesap alın."
      />
      <ProgramToolShell
        title="İmalat Girişleri"
        diagram="sheet"
        caption="Sac ve profil hesaplarında kalınlık, boy ve temel ölçülerin nasıl okunduğunu gösteren şema."
        fields={[
          { label: "Malzeme ve kalınlık", description: "Malzeme türü ile kalınlık değeri tonaj, ağırlık ve büküm hesabının temelidir." },
          { label: "En / boy / metraj", description: "Parça boyutları hacim, alan ve kaynak metrajını belirler." },
          { label: "Büküm / kaynak bilgileri", description: "İç radyüs, büküm açısı ve kaynak ölçüsü ilgili sekmelerde sonuçları üretir." },
        ]}
        chips={[
          { short: "t", meaning: "Kalınlık" },
          { short: "L", meaning: "Boy" },
          { short: "W", meaning: "En" },
        ]}
      />
      <SheetFabricationCalculator />
    </main>
  );
}
