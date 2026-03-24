import Link from "next/link";
import { projects } from "../data";
import { trText } from "../lib/tr-text";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Projeler
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Referans değil, teknik kanıt niteliğinde proje kategorileri.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Her proje sayfası; lokasyon, kapasite, sistem yapısı, süreç özeti ve teknik kapsam gibi karar verdiren alanları aynı düzende sunar.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projeler/${project.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-950">{trText(project.title)}</h2>
              <p className="mt-3 leading-7 text-slate-600">{trText(project.summary)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
