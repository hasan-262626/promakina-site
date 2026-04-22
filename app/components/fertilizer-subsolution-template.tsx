import Link from "next/link";
import type { FertilizerSubsolutionConfig } from "./fertilizer-subsolution-config";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";
import { FertilizerSubsolutionForm } from "./fertilizer-subsolution-form";
import { trText } from "../lib/tr-text";

const sectionTitlesBySlug: Record<
  string,
  {
    solutions: string;
    critical: string;
    faq: string;
  }
> = {
  "sivi-organomineral": {
    solutions: "Sıvı organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı organomineral gübre üretiminde kritik olan konular",
    faq: "Sıvı organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "sivi-npk": {
    solutions: "Sıvı NPK gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı NPK gübre üretiminde kritik olan konular",
    faq: "Sıvı NPK gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "sivi-amino-asit": {
    solutions: "Sıvı amino asit gübre üretimi için sunduğumuz çözümler",
    critical: "Sıvı amino asit gübre üretiminde kritik olan konular",
    faq: "Sıvı amino asit gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "organik-sivi-gubre": {
    solutions: "Organik sıvı gübre üretimi için sunduğumuz çözümler",
    critical: "Organik sıvı gübre üretiminde kritik olan konular",
    faq: "Organik sıvı gübre tesisleri hakkında sık sorulan sorular",
  },
  "organik-biyostimulan": {
    solutions: "Organik biyostimülan üretimi için sunduğumuz çözümler",
    critical: "Organik biyostimülan üretiminde kritik olan konular",
    faq: "Organik biyostimülan üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-organomineral": {
    solutions: "Granül organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Granül organomineral gübre üretiminde kritik olan konular",
    faq: "Granül organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-npk": {
    solutions: "NPK granül gübre üretimi için sunduğumuz çözümler",
    critical: "NPK granül gübre üretiminde kritik olan konular",
    faq: "NPK granül gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "granul-kompost": {
    solutions: "Granül kompost üretimi için sunduğumuz çözümler",
    critical: "Granül kompost üretiminde kritik olan konular",
    faq: "Granül kompost tesisleri hakkında sık sorulan sorular",
  },
  "toz-organomineral": {
    solutions: "Toz organomineral gübre üretimi için sunduğumuz çözümler",
    critical: "Toz organomineral gübre üretiminde kritik olan konular",
    faq: "Toz organomineral gübre üretim tesisleri hakkında sık sorulan sorular",
  },
  "toz-npk": {
    solutions: "NPK toz gübre üretimi için sunduğumuz çözümler",
    critical: "NPK toz gübre üretiminde kritik olan konular",
    faq: "NPK toz gübre üretim tesisleri hakkında sık sorulan sorular",
  },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{trText(eyebrow)}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{trText(title)}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{trText(description)}</p>
      ) : null}
    </div>
  );
}

export function FertilizerSubsolutionTemplate({
  sector,
  current,
  relatedLinks,
  config,
}: {
  sector: SectorCardItem;
  current: SectorSubsectorItem;
  relatedLinks: SectorSubsectorItem[];
  config: FertilizerSubsolutionConfig;
}) {
  const sectionTitles =
    sectionTitlesBySlug[current.slug] ?? {
      solutions: "Gübre üretimi için sunduğumuz çözümler",
      critical: "Gübre üretiminde kritik olan konular",
      faq: "Gübre üretim tesisleri hakkında sık sorulan sorular",
    };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${sector.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,20,40,0.78),rgba(10,20,40,0.78))]" />
        <div className="relative site-container flex min-h-[320px] items-center py-[60px] md:min-h-[420px] md:py-[80px]">
          <div className="max-w-[860px]">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/84 backdrop-blur">
              {trText(config.heroBadge)}
            </div>
            <h1 className="mt-5 max-w-[800px] break-normal text-[32px] font-semibold leading-[1.2] tracking-tight text-white md:text-[48px]">
              {trText(config.heroTitle)}
            </h1>
            <p className="mt-4 max-w-[700px] text-base leading-[1.7] text-white/84">{trText(config.heroDescription)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/sektorler/${sector.slug}`}
                className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Gübre Üretim Tesisleri sayfasına dön
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_360px]">
            <div className="space-y-12">
              <section>
                <SectionTitle eyebrow="Açıklayıcı Bilgi" title="Kullanılan hammaddeler ve ürün sınıfı mantığı" />
                <div className="mt-8 grid gap-5 xl:grid-cols-2">
                  <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">Kullanılan başlıca hammaddeler</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                      {config.rawMaterials.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          <span>{trText(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">Bu ürün neden bu isimle anılır?</h3>
                    <p className="mt-5 text-sm leading-8 text-slate-600">{trText(config.namingExplanation)}</p>
                    <div className="mt-5 rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                      {trText(config.namingNote)}
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <h3 className="text-2xl font-semibold text-slate-950">İlgili alt başlıklar</h3>
                <div className="mt-6 space-y-3">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/sektorler/${sector.slug}/${item.slug}`}
                      className={`block rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        item.slug === current.slug
                          ? "border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                      }`}
                    >
                      {trText(item.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-12 xl:col-span-2">
              <section>
                <SectionTitle eyebrow="Sunulan Çözümler" title={sectionTitles.solutions} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.offerCards.map((item) => (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow="Makine ve Ekipman" title={trText(config.equipmentTitle)} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {config.equipment.map((item) => (
                    <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow="Kritik Başlıklar" title={sectionTitles.critical} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {config.criticalTopics.map((item) => (
                    <article key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle eyebrow="SSS" title={sectionTitles.faq} />
                <div className="mt-8 space-y-4">
                  {config.faqs.map((item) => (
                    <details key={item.question} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                        {trText(item.question)}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section
                id="subsolution-form"
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Teklif ve Teknik Görüşme</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{trText(config.formTitle)}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{trText(config.formDescription)}</p>
                  </div>
                  <FertilizerSubsolutionForm title={trText(config.heroTitle)} config={config} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
