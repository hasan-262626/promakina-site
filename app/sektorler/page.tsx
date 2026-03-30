import Image from "next/image";
import Link from "next/link";
import { sectors } from "../data";
import { quickAccessItems } from "../home-quick-access-data";
import { trText } from "../lib/tr-text";

const sectorImageMap = new Map(
  quickAccessItems.map((item) => [item.href.replace("/sektorler/", ""), item]),
);

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        <div
          className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat sm:bg-center"
          style={{ backgroundImage: "url('/images/sektorler1.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,30,0.85)_0%,rgba(3,10,30,0.75)_40%,rgba(3,10,30,0.55)_70%,rgba(3,10,30,0.45)_100%)]" />
        <div className="relative site-container flex min-h-[360px] items-center py-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Sektörler
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Kapasiteye, malzemeye ve prosese göre uzmanlaştığımız sektörler
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">
              Gübre, kompost, biyogaz, madencilik, kimya, geri dönüşüm ve dökme katı malzeme
              işleme gibi farklı alanlarda, sahaya ve üretim hedeflerine göre şekillenen
              mühendislik yaklaşımımızı sektör bazlı sayfalarda topluyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => {
              const sectorImage = sectorImageMap.get(sector.slug);

              return (
                <Link
                  key={sector.slug}
                  href={`/sektorler/${sector.slug}`}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    {sectorImage ? (
                      <span className="relative mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:h-16 sm:w-16">
                        <Image
                          src={sectorImage.image}
                          alt={sectorImage.alt}
                          fill
                          sizes="64px"
                          className="object-cover object-center"
                        />
                      </span>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {trText(sector.title)}
                      </h2>
                      <p className="mt-3 leading-7 text-slate-600">{trText(sector.summary)}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
