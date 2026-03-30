import Link from "next/link";
import { Hero } from "../components/Hero";
import { libraryItems, librarySections } from "../data";
import { trText } from "../lib/tr-text";

export default function LibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Kütüphane"
        description="Teknik içerikler, hesaplama araçları, mühendislik notları ve proses odaklı bilgi sayfalarını tek merkezde topluyoruz. Üretim, ekipman seçimi, kapasite planlaması ve proses değerlendirmesi için faydalı içeriklere buradan ulaşabilirsiniz."
        image="/images/proses1.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-10 lg:pt-14">
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
            Ã–ne Ã§Ä±kan iÃ§erikler
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


