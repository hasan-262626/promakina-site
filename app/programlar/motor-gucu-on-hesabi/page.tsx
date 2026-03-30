import { MotorPowerCalculator } from "../../components/motor-power-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function MotorPowerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Motor Gücü Ön Hesabı"
        description="Tork, devir, verim, servis faktörü ve konveyör verilerine göre gerekli motor gücü ve redüktör çıkış değerlendirmesi yapın."
      />
      <ProgramToolShell
        title="Motor ve Yük Girişleri"
        diagram="motor"
        caption="Motor gücü ön hesabında tork, devir ve güç ilişkisini gösteren sade teknik şema."
        fields={[
          { label: "Tork ve devir", description: "Motor gücü hesabının temelinde tork ve devir bilgisi yer alır." },
          { label: "Verim ve servis faktörü", description: "Gerçek saha koşulları için düzeltilmiş güç hesabında kullanılır." },
          { label: "Konveyör bilgileri", description: "Hat hızı, kapasite ve eğim gibi değerler konveyör ön hesabını güçlendirir." },
        ]}
        chips={[
          { short: "T", meaning: "Tork" },
          { short: "n", meaning: "Devir" },
          { short: "P", meaning: "Güç" },
        ]}
      />
      <MotorPowerCalculator />
    </main>
  );
}
