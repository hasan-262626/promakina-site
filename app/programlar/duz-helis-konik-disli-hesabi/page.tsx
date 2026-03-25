import { BevelGearCalculator } from "../../components/bevel-gear-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function BevelGearPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Düz Helis Konik Dişli Hesabı"
        description="Düz ve helisel konik dişli sistemlerinde temel çapları, merkez açılarını, koni boylarını ve iletim oranını teknik olarak hesaplayın. Ön boyutlandırma ve devir ilişkisi için kullanıcı dostu bir hesaplama aracı sunun."
      />
      <BevelGearCalculator />
    </main>
  );
}
