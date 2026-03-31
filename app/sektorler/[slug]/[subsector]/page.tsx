import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../../components/Hero";
import { getSectorCardBySlug, sectorCards } from "../../../components/sector-subsectors-data";

type PageProps = {
  params: Promise<{
    slug: string;
    subsector: string;
  }>;
};

export function generateStaticParams() {
  return sectorCards.flatMap((sector) =>
    sector.subLinks.map((item) => ({
      slug: sector.slug,
      subsector: item.slug,
    })),
  );
}

export default async function SectorSubsectorPage({ params }: PageProps) {
  const { slug, subsector } = await params;
  const sector = getSectorCardBySlug(slug);
  const current = sector?.subLinks.find((item) => item.slug === subsector);

  if (!sector || !current) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title={current.title}
        description={current.description}
        image={sector.image}
      >
        <Link
          href={`/sektorler/${sector.slug}`}
          className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          {sector.title} sayfasına dön
        </Link>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Alt Sektör Çözümü</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{current.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{current.description}</p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Bu alt çözüm başlığı için proses tasarımı, uygun makina grupları, saha yerleşimi ve yardımcı ekipman
                kurgusu proje ihtiyacına göre birlikte şekillendirilir.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold text-slate-950">İlgili alt başlıklar</h3>
              <div className="mt-6 space-y-3">
                {sector.subLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/sektorler/${sector.slug}/${item.slug}`}
                    className={`block rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      item.slug === current.slug
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
