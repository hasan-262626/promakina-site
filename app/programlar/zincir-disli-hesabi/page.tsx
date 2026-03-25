import { ChainSprocketCalculator } from "../../components/chain-sprocket-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";

export default function ChainSprocketPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Zincir Dişli Hesabı"
        description="DIN 8187 zincir dişli, ASA zincir dişli, konveyör zincir dişlisi ve oran hesapları için hazırlanan teknik yardımcı araçlar. Kısa üst yapıdan sonra doğrudan giriş alanına geçerek hesaplamaya başlayabilirsiniz."
      />
      <ChainSprocketCalculator />
    </main>
  );
}
