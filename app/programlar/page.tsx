import { ProgramPageHero } from "../components/program-page-hero";
import { ProgramsModalExperience } from "../components/programs-modal-experience";
import { programGroups } from "../program-platform-data";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Programlar"
        description="Makine seçimi, ön boyutlandırma, maliyet, bağlantı, güç aktarımı ve dönüşüm ihtiyaçları için aynı mühendislik mantığında çalışan profesyonel hesap platformunu kullanın."
        showBackToPrograms={false}
      />

      <section className="border-b border-slate-200 bg-white py-8 lg:py-10">
        <div className="site-container">
          <div className="mb-8 grid gap-4 rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_28px_rgba(15,23,42,0.05)] lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Mühendislik Hesap Platformu
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Doğru soruları soran, yanlış seçimleri engelleyen ve teklif hazırlamayı kolaylaştıran ortak sistem
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Akıllı müşteri girişi",
                "Dinamik soru akışı",
                "Teknik çıktı ve rapor",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ProgramsModalExperience groups={programGroups} />
        </div>
      </section>
    </main>
  );
}
