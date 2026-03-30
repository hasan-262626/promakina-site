import { CouplingSelectionCalculator } from "../../components/coupling-selection-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function CouplingSelectionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Kaplin Seçimi Ön Hesabı"
        description="Tork, devir, mil çapı ve servis faktörüne göre kaplin sınıfı ve bağlantı uygunluğu için hızlı teknik ön değerlendirme yapın."
      />
      <ProgramToolShell
        title="Kaplin Girişleri"
        diagram="coupling"
        caption="İki mil ve kaplin gövdesi arasındaki çap ve bağlantı ilişkisini gösteren şematik görünüm."
        fields={[
          { label: "Tork ve devir", description: "Kaplin sınıfı ön seçimi için tork ve devir ana girdilerdir." },
          { label: "Mil çapı 1 / 2", description: "Kaplinin bağlanacağı iki milin çapları uygunluk kontrolünde birlikte değerlendirilir." },
          { label: "Servis faktörü ve kama", description: "Zorlayıcı servis koşulları ile kama bağlantısı varsa ön seçim sınıfı büyüyebilir." },
        ]}
        chips={[
          { short: "Ød1", meaning: "Mil çapı 1" },
          { short: "Ød2", meaning: "Mil çapı 2" },
          { short: "T", meaning: "Tork" },
        ]}
      />
      <CouplingSelectionCalculator />
    </main>
  );
}
