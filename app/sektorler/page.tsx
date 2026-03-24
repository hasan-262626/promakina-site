import Link from "next/link";
import { sectors } from "../data";
import { trText } from "../lib/tr-text";

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="site-container py-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Sektörler
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Kapasiteye, malzemeye ve prosese göre uzmanlaştığımız sektörler
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Gübre, kompost, biyogaz, madencilik, kimya, geri dönüşüm ve dökme katı malzeme
            işleme gibi farklı alanlarda, sahaya ve üretim hedeflerine göre şekillenen
            mühendislik yaklaşımımızı sektör bazlı sayfalarda topluyoruz.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sektorler/${sector.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-slate-950">{trText(sector.title)}</h2>
                <p className="mt-3 leading-7 text-slate-600">{trText(sector.summary)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
