import { KeywayDimensionsCalculator } from "../../components/keyway-dimensions-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function KeywayDimensionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kama Kanalı Açım Ölçüleri"
        description="Mil veya delik çapına göre standart kama eni, kama yüksekliği, mile giriş ve deliğe giriş ölçülerini teknik olarak hızlıca görüntüleyin."
      />
      <ProgramToolShell
        title="Kama Kanalı Girişleri"
        diagram="keyway"
        caption="Mil, kama ve göbek ilişkisini; b, h, t1 ve t2 ölçüleriyle gösteren teknik kesit şeması."
        fields={[
          { label: "Mil / delik çapı", description: "Standart kama ölçüsünü belirleyen nominal çap girişidir." },
          { label: "Bağlantı tipi", description: "Sonuçların mil tarafı, delik tarafı veya birlikte gösterilmesini belirler." },
          { label: "Göbek çapı ve boyu", description: "Opsiyonel göbek bilgileri girildiğinde et kalınlığı ve bağlantı uygunluğu yorumlanır." },
        ]}
        chips={[
          { short: "ØD", meaning: "Mil / delik çapı" },
          { short: "b", meaning: "Kama eni" },
          { short: "t1", meaning: "Mile giriş" },
          { short: "t2", meaning: "Deliğe giriş" },
        ]}
      />
      <KeywayDimensionsCalculator />
    </main>
  );
}
