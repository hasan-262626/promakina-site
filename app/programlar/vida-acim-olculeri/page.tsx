import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { ThreadCuttingMeasurementsCalculator } from "../../components/thread-cutting-measurements-calculator";

export default function ThreadCuttingMeasurementsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Vida Açım Ölçüleri"
        description="Metrik normal, metrik ince ve Whitworth vida standartlarında dış vida ve iç vida açım ölçülerini teknik olarak hızlıca görüntüleyin."
      />
      <ProgramToolShell
        title="Vida Seçimi"
        diagram="thread"
        caption="Dış vida ve iç vida kesitinde adım, diş dibi ve matkap çapı ilişkisini anlatan teknik şema."
        fields={[
          { label: "Vida standardı", description: "Metrik normal, metrik ince veya Whitworth serisini seçtiğiniz alandır." },
          { label: "Ölçü seçimi", description: "Standart veri tablosundan doğrudan karşılık gelen ölçü seçilir ve sonuçlar otomatik gelir." },
          { label: "Karşılaştırma seçimi", description: "İki farklı seri veya ölçü yan yana incelenmek istenirse karşılaştırmalı görünüm kullanılır." },
        ]}
        chips={[
          { short: "P", meaning: "Adım" },
          { short: "ØD", meaning: "Dış çap" },
          { short: "df", meaning: "Diş dibi" },
          { short: "Drill", meaning: "Matkap çapı" },
        ]}
      />
      <ThreadCuttingMeasurementsCalculator />
    </main>
  );
}
