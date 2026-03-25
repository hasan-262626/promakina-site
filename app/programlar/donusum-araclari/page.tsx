import { ConversionToolsCalculator } from "../../components/conversion-tools-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function ConversionToolsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Dönüşüm Araçları"
        description="İmalat, makine, gübre, kompost, geri dönüşüm ve proses uygulamalarında en çok kullanılan teknik dönüşümleri hızlıca yapın. Birim dönüşümü, hız dönüşümü ve sektör bazlı yoğunluk hesaplarını tek ekranda görüntüleyin."
      />
      <ConversionToolsCalculator />
    </main>
  );
}
