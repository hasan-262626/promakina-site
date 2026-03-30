import { BevelGearCalculator } from "../../components/bevel-gear-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function BevelGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz Helis Konik Dişli Hesabı"
        description="Düz ve helisel konik dişli sistemlerinde temel çapları, merkez açılarını, koni boylarını ve iletim oranını teknik olarak hesaplayın. Ön boyutlandırma ve devir ilişkisi için kullanıcı dostu bir hesaplama aracı sunun."
      />
      <ProgramToolShell
        title="Konik Dişli Girişleri"
        diagram="bevel"
        caption="Konik dişli hesabında toplam çalışma açısı, merkez açıları ve temel koni geometrisini gösteren şema."
        fields={[
          { label: "Modül ve çalışma açısı", description: "Konik dişli geometrisinin temel boyutları modül ve toplam çalışma açısına göre oluşur." },
          { label: "Z1 / Z2 ve devir", description: "Döndüren ve döndürülen diş sayıları ile giriş devri oran ve çevresel hız sonuçlarını üretir." },
          { label: "Mil / göbek / diş genişliği", description: "Bağlantı ölçüleri ve yüz genişliği üretim uygunluğu açısından birlikte değerlendirilir." },
        ]}
        chips={[
          { short: "ε", meaning: "Toplam çalışma açısı" },
          { short: "δ1", meaning: "Z1 merkez açısı" },
          { short: "δ2", meaning: "Z2 merkez açısı" },
          { short: "mn", meaning: "Normal modül" },
        ]}
      />
      <BevelGearCalculator />
    </main>
  );
}
