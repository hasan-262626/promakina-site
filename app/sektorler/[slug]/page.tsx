import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import FertilizerSectorExperience from "../../components/fertilizer-sector-experience";
import { sectors } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);

  if (!sector) {
    notFound();
  }

  if (slug === "gubre-ve-granulasyon-tesisleri") {
    return <FertilizerSectorExperience />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Hero
        title={trText(sector.title)}
        description={trText(sector.summary)}
        image={sector.image}
      >
        <a href="#iletisim" className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a>
        <Link href="/#sektorler" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Sektörlere Dön</Link>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {trText(sector.title)}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Bu alanda hangi uzmanlÄ±ÄŸÄ± sunduÄŸumuzu Google ve ziyaretÃ§i net biÃ§imde gÃ¶rsÃ¼n
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(sector.summary)}</p>
            <p className="mt-4 leading-8 text-slate-600">
              Bu alt sayfa yapÄ±sÄ±; sektÃ¶r tanÄ±mÄ±, kullanÄ±lan makinalar, proses akÄ±ÅŸÄ±, kapasite aralÄ±klarÄ±, referanslar, CTA ve SSS bloklarÄ±yla ilerlemeye hazÄ±r ÅŸekilde kuruldu. Ä°sterseniz sonraki adÄ±mda her sektÃ¶r iÃ§in bu alanlarÄ± tek tek detaylandÄ±rabiliriz.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Bu sayfada olacaklar</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>SektÃ¶r tanÄ±mÄ± ve ihtiyaÃ§ analizi</li>
              <li>Uygun makine ekipman listesi</li>
              <li>Proses akÄ±ÅŸÄ± ve kapasite yapÄ±sÄ±</li>
              <li>Referanslar ve teklif Ã§aÄŸrÄ± alanÄ±</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Ä°letiÅŸim
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            {trText(sector.title)} iÃ§in teklif veya teknik gÃ¶rÃ¼ÅŸme talep edin
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Projenize uygun makina, ekipman ve tesis kurgusunu birlikte netleÅŸtirelim.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@promakina.com.tr"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              E-posta GÃ¶nder
            </a>
            <a
              href="tel:+905380631163"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


