import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { ScrewConveyorSelectionCalculator } from "../../components/screw-conveyor-selection-calculator";

export default function ScrewConveyorSelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı"
        description="Helezon çapı, hatve, devir, kapasite uygunluğu, motor gücü, redüktör ve mekanik yapı önerileri için profesyonel ön seçim ve teklif hazırlama aracıdır."
      />
      <ProgramToolShell
        title="Helezon seçim kurgusu"
        diagram="capacity"
        caption="Ürün tipi, yoğunluk, nem ve hat geometrisine göre helezon çapı, hatve, devir ve mekanik yapı birlikte değerlendirilir."
        fields={[
          {
            label: "Ürün ve akış davranışı",
            description: "Granül, toz, yapışkan veya aşındırıcı ürün yapısı doluluk oranı ve mekanik önerileri doğrudan etkiler.",
          },
          {
            label: "Kapasite ve geometri",
            description: "Saatlik kapasite, hat boyu, yükselme ve eğim birlikte okunarak ön çap ve rpm seçimi yapılır.",
          },
          {
            label: "Mekanik ön seçim",
            description: "Mil / boru, asma yatak, malzeme ve aksesuar önerileri sistem tarafından otomatik yorumlanır.",
          },
        ]}
        chips={[
          { short: "Q", meaning: "Taşıma kapasitesi" },
          { short: "Ø", meaning: "Helezon çapı" },
          { short: "n", meaning: "Önerilen devir" },
        ]}
      />
      <ScrewConveyorSelectionCalculator />
    </main>
  );
}
