import { MachiningCalculationsCalculator } from "../../components/machining-calculations-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function MachiningCalculationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Talaşlı İmalat Hesapları"
        description="Vida açım, kılavuz delik, kesme hızı, devir, ilerleme ve delik yerleşimi için çok amaçlı talaşlı imalat yardımcı ekranı kullanın."
      />
      <ProgramToolShell
        title="Talaşlı İmalat Girişleri"
        diagram="machining"
        caption="Kesme hızı, takım çapı, devir ve delik dağılımı ilişkisini gösteren teknik işleme şeması."
        fields={[
          { label: "Nominal çap ve adım", description: "Vida açım ve kılavuz delik hesabında temel çap ve adım kullanılır." },
          { label: "Kesme hızı ve kesici çapı", description: "Devir hesabı kesme hızı ile takım çapı ilişkisine göre oluşur." },
          { label: "Delik sayısı ve PCD", description: "Flanş veya dairesel delik dağılımı için delik sayısı ile PCD birlikte girilir." },
        ]}
        chips={[
          { short: "ØD", meaning: "Takım / delik çapı" },
          { short: "Vc", meaning: "Kesme hızı" },
          { short: "n", meaning: "Devir" },
        ]}
      />
      <MachiningCalculationsCalculator />
    </main>
  );
}
