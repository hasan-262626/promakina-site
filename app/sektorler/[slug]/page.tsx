import Link from "next/link";
import { notFound } from "next/navigation";
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
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${sector.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-start justify-center px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:px-10 lg:py-[60px]">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur sm:text-sm">
              Sektörler
            </div>

            <h1 className="max-w-4xl text-[28px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              {trText(sector.heroTitle)}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8 lg:text-lg">
              {trText(sector.heroDescription)}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#iletisim"
                className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Teklif Al
              </a>
              <Link
                href="/#sektorler"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Tüm Sektörlere Dön
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {trText(sector.title)}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Bu alanda hangi uzmanlığı sunduğumuzu Google ve ziyaretçi net biçimde görsün
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(sector.summary)}</p>
            <p className="mt-4 leading-8 text-slate-600">
              Bu alt sayfa yapısı; sektör tanımı, kullanılan makinalar, proses akışı, kapasite aralıkları, referanslar, CTA ve SSS bloklarıyla ilerlemeye hazır şekilde kuruldu. İsterseniz sonraki adımda her sektör için bu alanları tek tek detaylandırabiliriz.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Bu sayfada olacaklar</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li>Sektör tanımı ve ihtiyaç analizi</li>
              <li>Uygun makine ekipman listesi</li>
              <li>Proses akışı ve kapasite yapısı</li>
              <li>Referanslar ve teklif çağrı alanı</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            İletişim
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            {trText(sector.title)} için teklif veya teknik görüşme talep edin
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/82">
            Projenize uygun makina, ekipman ve tesis kurgusunu birlikte netleştirelim.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@promakina.com.tr"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              E-posta Gönder
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
