import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";
import SpurHelicalGearCalculator from "../../components/spur-helical-gear-calculator";

export default function SpurHelicalGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz Helis Dişli Hesabı"
        description="Düz dişli hesabı, helisel dişli hesabı, devir oranı hesabı ve dişli çapı hesaplama ihtiyaçları için mühendislik odaklı, kullanıcı dostu ve ön boyutlandırma mantığında çalışan teknik araç sayfası."
      />
      <ProgramToolShell
        title="Dişli Girişleri"
        diagram="gear"
        caption="Düz helis dişli hesabında modül, diş sayısı, helis açısı ve yüz genişliği ilişkisini gösteren teknik şema."
        fields={[
          { label: "Modül ve helis açısı", description: "Modül dişlinin temel boyutunu, helis açısı ise kavrama karakterini belirler." },
          { label: "Z1 / Z2 ve yüz genişliği", description: "Diş sayıları oranı oluşturur; yüz genişliği taşıma kapasitesi ve ağırlığı etkiler." },
          { label: "Mil / göbek / kama", description: "Bağlantı ölçüleri girildiğinde göbek et kalınlığı ve kama uygunluğu ayrıca yorumlanır." },
        ]}
        chips={[
          { short: "m", meaning: "Dişli modülü" },
          { short: "Z", meaning: "Diş sayısı" },
          { short: "β", meaning: "Helis açısı" },
          { short: "b", meaning: "Yüz genişliği" },
        ]}
      />
      <SpurHelicalGearCalculator />
    </main>
  );
}
