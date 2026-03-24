import Link from "next/link";
import { libraryItems, librarySections } from "../data";
import { trText } from "../lib/tr-text";

export default function LibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            Kütüphane
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Blog değil, Google için gerçek bir otorite merkezi.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Blog, teknik rehberler, PDF kataloglar, video içerikler, sık sorulan sorular ve terimler sözlüğü ile arama niyeti güçlü bir içerik merkezi kuruyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {librarySections.map((section) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-950">{trText(section.title)}</h2>
              <p className="mt-3 leading-7 text-slate-600">{trText(section.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Öne çıkan içerikler
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {libraryItems.map((item) => (
            <Link
              key={item.slug}
              href={`/kutuphane/${item.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                {trText(item.category)}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 leading-7 text-slate-600">{trText(item.summary)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
