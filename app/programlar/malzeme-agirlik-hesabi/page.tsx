import { MaterialWeightCalculator } from "../../components/material-weight-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function MaterialWeightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Malzeme Ağırlık Hesabı"
        description="Sac, lama, dolu mil, profil ve disk gibi geometriler için boyut ve yoğunluk bilgisine göre ağırlık hesabını hızlıca değerlendirin."
      />
      <ProgramToolShell
        title="Malzeme Girişleri"
        diagram="weight"
        caption="Geometri, hacim ve ağırlık ilişkisini gösteren sade teknik görsel."
        fields={[
          { label: "Geometri seçimi", description: "Sac, profil, boru veya dolu kesit gibi temel formu seçerek hesap yaparsınız." },
          { label: "Boyutlar", description: "Çap, en, boy, et kalınlığı gibi temel ölçüler hacmi belirler." },
          { label: "Yoğunluk / malzeme", description: "Malzeme yoğunluğu seçildiğinde tahmini net ağırlık otomatik oluşur." },
        ]}
        chips={[
          { short: "ØD", meaning: "Çap" },
          { short: "L", meaning: "Boy" },
          { short: "kg", meaning: "Ağırlık" },
        ]}
      />
      <MaterialWeightCalculator />
    </main>
  );
}
