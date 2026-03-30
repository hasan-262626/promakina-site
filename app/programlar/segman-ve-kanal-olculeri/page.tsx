import { CirclipGrooveCalculator } from "../../components/circlip-groove-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function CirclipGroovePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Segman ve Kanal Ölçüleri"
        description="DIN 472 iç segman ve DIN 471 dış segman ölçülerine göre standart segman ve kanal açım bilgilerini teknik olarak hızlıca görüntüleyin."
      />
      <ProgramToolShell
        title="Segman Girişleri"
        diagram="circlip"
        caption="İç segman ve dış segman uygulamalarında kanal çapı, kanal genişliği ve minimum n ölçüsünü anlatan teknik şema."
        fields={[
          { label: "Nominal delik / mil çapı", description: "İç segman için delik, dış segman için mil çapısı standart satırı belirler." },
          { label: "Taşıyıcı çap", description: "Opsiyonel taşıyıcı çap girildiğinde kalan kesit ve duvar kalınlığı için ek yorum yapılır." },
          { label: "Et kalınlığı", description: "Kanal sonrası kalan kesitin yeterliliğini ön değerlendirme seviyesinde yorumlamak için kullanılır." },
        ]}
        chips={[
          { short: "Ød1", meaning: "Nominal çap" },
          { short: "Ød2", meaning: "Kanal çapı" },
          { short: "m", meaning: "Kanal genişliği" },
          { short: "n", meaning: "Minimum ölçü" },
        ]}
      />
      <CirclipGrooveCalculator />
    </main>
  );
}
