import { ProgramPageHero } from "../components/program-page-hero";
import { ProgramGroupCard } from "../components/program-group-card";
import { programGroups } from "../program-groups";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Programlar"
        description="Makina kapasite hesapları, maliyet hesapları, mil ve kaplin hesapları, güç aktarım araçları, dönüşüm araçları ve yardımcı mühendislik hesaplarını tek sistem altında düzenli bir yapıyla kullanın."
        showBackToPrograms={false}
      />

      <section className="border-b border-slate-200 bg-white py-8 lg:py-10">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programGroups.map((group) => (
              <ProgramGroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
