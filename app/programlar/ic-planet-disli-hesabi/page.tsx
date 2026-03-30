import { InternalPlanetGearCalculator } from "../../components/internal-planet-gear-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function InternalPlanetGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz-Helis İç (Planet) Dişli Hesabı"
        description="İç dişli hesabı, planet dişli hesabı, çember dişli ve pinyon hesabı ile iç dişli iletim oranı ve eksen mesafesi değerlendirmeleri için ön boyutlandırma mantığında çalışan teknik araç sayfası."
      />
      <ProgramToolShell
        title="İç Dişli Girişleri"
        diagram="internal"
        caption="İç dişli halka ile pinyon arasındaki bölüm dairesi, çap ve eksen mesafesi ilişkisini gösteren teknik şema."
        fields={[
          { label: "Çember dişli ve pinyon", description: "İç halka dişli ile pinyon diş sayıları oranı ve eksen mesafesini belirler." },
          { label: "Modül ve helis açısı", description: "Normal modül ve helis açısı iç dişli geometrisinin ana girdileridir." },
          { label: "Pinyon mil / göbek ölçüleri", description: "Pinyon tarafında mil ve göbek ölçüleri girildiğinde bağlantı uygunluğu kontrol edilir." },
        ]}
        chips={[
          { short: "Z1", meaning: "İç çember dişli" },
          { short: "Z2", meaning: "Pinyon" },
          { short: "a", meaning: "Eksen mesafesi" },
          { short: "mn", meaning: "Normal modül" },
        ]}
      />
      <InternalPlanetGearCalculator />
    </main>
  );
}
