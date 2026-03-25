import { MotorPowerCalculator } from "../../components/motor-power-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function MotorPowerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Motor Gücü Ön Hesabı"
        description="Tork, devir, verim, servis faktörü ve konveyör verilerine göre gerekli güç ve redüktör çıkış torku ön hesabını değerlendirin."
      />
      <MotorPowerCalculator />
    </main>
  );
}
