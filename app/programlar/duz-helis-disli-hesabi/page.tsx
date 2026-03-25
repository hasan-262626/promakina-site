import { ProgramPageHero } from "../../components/program-page-hero";
import SpurHelicalGearCalculator from "../../components/spur-helical-gear-calculator";

export default function SpurHelicalGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz Helis Dişli Hesabı"
        description="Düz dişli hesabı, helisel dişli hesabı, devir oranı hesabı ve dişli çapı hesaplama ihtiyaçları için mühendislik odaklı, kullanıcı dostu ve ön boyutlandırma mantığında çalışan teknik araç sayfası."
      />
      <SpurHelicalGearCalculator />
    </main>
  );
}
