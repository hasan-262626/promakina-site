import type { Metadata } from "next";
import { ConversionToolsCalculator } from "../../components/conversion-tools-calculator";
import { ProgramPageHero } from "../../components/program-page-hero";
import { ProgramToolShell } from "../../components/program-tool-shell";


export const metadata: Metadata = {
  title: "Dönüşüm Araçları | Mühendislik Hesap Araçları",
  description: "İmalat, makine, gübre, kompost, geri dönüşüm ve proses uygulamalarında en çok kullanılan teknik dönüşümleri hızlıca yapın.",
  alternates: {
    canonical: "https://www.promakina.com.tr/programlar/donusum-araclari",
  },
  openGraph: {
    title: "Dönüşüm Araçları",
    description: "İmalat, makine, gübre, kompost, geri dönüşüm ve proses uygulamalarında en çok kullanılan teknik dönüşümleri hızlıca yapın.",
    url: "https://www.promakina.com.tr/programlar/donusum-araclari",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ConversionToolsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Dönüşüm Araçları"
        description="İmalat, makine, gübre, kompost, geri dönüşüm ve proses uygulamalarında en çok kullanılan teknik dönüşümleri hızlıca yapın."
      />
      <ProgramToolShell
        title="Dönüşüm Girişleri"
        diagram="conversion"
        caption="Birimler arasında çift yönlü dönüşüm mantığını gösteren sade teknik görünüm."
        fields={[
          { label: "Kaynak değer", description: "Dönüştürmek istediğiniz temel değeri aktif alana girin; diğer alanlar anlık güncellenir." },
          { label: "Referans ölçü", description: "Devir-hız gibi araçlarda çap ya da referans ölçü zorunlu temel veri olarak kullanılır." },
          { label: "Yoğunluk / sektör", description: "Yoğunluk-hacim-ağırlık aracında sektör ve alt malzeme seçimi yaklaşık yoğunluğu otomatik getirir." },
        ]}
        chips={[
          { short: "mm", meaning: "Milimetre" },
          { short: "inch", meaning: "İnç" },
          { short: "kg/m³", meaning: "Yoğunluk" },
        ]}
      />
      <ConversionToolsCalculator />
    </main>
  );
}
