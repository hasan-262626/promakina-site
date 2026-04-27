import { ConveyorSelectionCalculator } from "../../components/conveyor-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function ConveyorCapacitySelectionProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Konveyör Kapasite ve Seçim Hesap Programı"
        description="Bantlı konveyör kapasitesi, bant genişliği, bant hızı, tambur çapı, tahrik yapısı ve ön mekanik tavsiyeler için profesyonel seçim aracıdır."
      />
      <ProgramToolShell
        title="Konveyör seçim kurgusu"
        diagram="capacity"
        caption="Besleme kapasitesi, ürün tipi, hat boyu ve eğim bilgileri birlikte değerlendirilerek bant genişliği, hız ve tambur yapısı için ön seçim yapılır."
        fields={[
          {
            label: "Malzeme ve taşıma şartları",
            description: "Ürün yoğunluğu, tane boyutu ve nem durumu bant yapısı ile yataklama önerilerini etkiler.",
          },
          {
            label: "Hat geometrisi",
            description: "Konveyör boyu, eğim ve yükleme noktası sayısı bant hızı ile tahrik gereksinimini belirler.",
          },
          {
            label: "Mekanik ön değerlendirme",
            description: "Tambur, redüktör, istasyon ve servis sınıfı için sistem yorumları anlık olarak oluşturulur.",
          },
        ]}
        chips={[
          { short: "Q", meaning: "Saatlik kapasite" },
          { short: "B", meaning: "Bant genişliği" },
          { short: "v", meaning: "Bant hızı" },
        ]}
      />
      <ConveyorSelectionCalculator />
    </main>
  );
}
