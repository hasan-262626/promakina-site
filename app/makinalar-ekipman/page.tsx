import Link from "next/link";
import { machineGroups } from "../data";
import { trText } from "../lib/tr-text";

export default function MachinesIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="site-container py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Makinalar & Ekipman
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Endüstriyel makina ve ekipman gruplarını tek çatı altında inceleyin
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör ve
            tank çözümlerine kadar farklı proses ihtiyaçları için geliştirilen makina ailelerini
            bir arada sunuyoruz.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {machineGroups.map((machine) => (
              <Link
                key={machine.slug}
                href={`/makinalar/${machine.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-slate-950">{trText(machine.title)}</h2>
                <p className="mt-3 leading-7 text-slate-600">{trText(machine.shortDescription)}</p>
                <p className="mt-5 text-sm font-semibold text-blue-700">
                  {machine.variants.slice(0, 4).map(trText).join(" • ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
