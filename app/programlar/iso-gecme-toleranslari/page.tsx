import { IsoFitTolerancesCalculator } from "../../components/iso-fit-tolerances-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function IsoFitTolerancesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="ISO Geçme Toleransları"
        description="ISO Geçme Toleransları (TS 1845-2 EN ISO 286-2) standardına göre mil, delik ve geçme karşılaştırmalarını teknik olarak değerlendirin."
      />
      <ProgramToolShell
        title="Tolerans Girişleri"
        diagram="tolerance"
        caption="Mil ve delik tolerans bölgelerinin üst üste geldiği geçme mantığını gösteren teknik şema."
        fields={[
          { label: "Nominal ölçü", description: "Toleransın uygulanacağı temel çap ölçüsüdür; uygun ISO kademe aralığı otomatik bulunur." },
          { label: "Mil toleransı", description: "Küçük harfli kodlar mil tolerans bölgesini ifade eder ve dropdown üzerinden seçilir." },
          { label: "Delik toleransı", description: "Büyük harfli kodlar delik tolerans bölgesini ifade eder ve geçme tipini belirler." },
        ]}
        chips={[
          { short: "H7", meaning: "Delik toleransı" },
          { short: "h6", meaning: "Mil toleransı" },
          { short: "Δ", meaning: "Boşluk / sıkılık" },
        ]}
      />
      <IsoFitTolerancesCalculator />
    </main>
  );
}
