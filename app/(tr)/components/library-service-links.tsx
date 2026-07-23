import Link from "next/link";
import type { LibraryServiceLink } from "../lib/library-page-data";

export function LibraryServiceLinks({ items }: { items: LibraryServiceLink[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">İlgili Hizmet Sayfaları</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        Konuyu saha uygulaması ve yatırım planı açısından daha derin incelemek isterseniz aşağıdaki hizmet sayfalarına göz atabilirsiniz.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
              Hizmeti İncele
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
