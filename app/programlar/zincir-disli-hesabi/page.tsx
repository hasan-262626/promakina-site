import { ChainSprocketCalculator } from "../../components/chain-sprocket-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";

export default function ChainSprocketPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Zincir Dişli Hesabı"
        description="DIN 8187 zincir dişli, ASA zincir dişli, konveyör zincir dişlisi ve oran hesapları için hazırlanan teknik yardımcı araçlar. Kısa üst yapıdan sonra doğrudan giriş alanına geçerek hesaplamaya başlayabilirsiniz."
      />
      <ProgramToolShell
        title="Zincir ve Dişli Girişleri"
        diagram="chain"
        caption="Zincir dişli hesabında adım, Z1, Z2 ve merkez mesafesi ilişkisini gösteren teknik şema."
        fields={[
          { label: "Zincir standardı", description: "DIN, ASA veya özel adımlı zincir tipini seçtiğiniz standart alanıdır." },
          { label: "Diş sayısı / Z1 / Z2", description: "Dişli üzerindeki toplam diş sayısı oranı, çevresel hızı ve zincir boyunu etkiler." },
          { label: "Adım ve merkez mesafesi", description: "Zincir adımı ile dişli merkezleri arasındaki mesafe ikili sistem hesabında birlikte değerlendirilir." },
        ]}
        chips={[
          { short: "Z1", meaning: "Döndüren dişli" },
          { short: "Z2", meaning: "Döndürülen dişli" },
          { short: "CE", meaning: "Merkez mesafesi" },
          { short: "P", meaning: "Zincir adımı" },
        ]}
      />
      <ChainSprocketCalculator />
    </main>
  );
}
