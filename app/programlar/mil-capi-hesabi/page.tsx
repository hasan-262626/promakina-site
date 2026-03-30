import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import { ShaftDiameterCalculator } from "../../components/shaft-diameter-calculator";

export default function ShaftDiameterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Mil Çapı Hesabı"
        description="Burulma momentine göre mil çapı, eğilme + burulma ön hesabı ve katı mil / boru mil karşılaştırmasını mühendislik odaklı şekilde değerlendirin."
      />
      <ProgramToolShell
        title="Mil Bilgileri"
        diagram="shaft"
        caption="Mil çapı hesabında torsiyon yönü, dolu veya boru mil kesiti ve temel çap ilişkisini gösteren şema."
        fields={[
          { label: "Tork ve emniyet katsayısı", description: "Burulma momenti ile emniyet katsayısı önerilen mil çapını belirleyen ana girdilerdir." },
          { label: "Malzeme türü", description: "Malzemeye bağlı izin verilen kayma gerilmesi hesapta otomatik olarak değerlendirilir." },
          { label: "Mil tipi", description: "Dolu mil veya boru mil seçimi kesit davranışını ve ağırlık karşılaştırmasını değiştirir." },
        ]}
        chips={[
          { short: "Ød", meaning: "Mil çapı" },
          { short: "T", meaning: "Tork yönü" },
          { short: "τ", meaning: "Kayma gerilmesi" },
        ]}
      />
      <ShaftDiameterCalculator />
    </main>
  );
}
