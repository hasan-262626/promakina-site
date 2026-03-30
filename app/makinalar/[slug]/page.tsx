import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import DrumSystemsExperience from "../../components/drum-systems-experience";
import MachineCategoryExperience from "../../components/machine-category-experience";
import TransportEquipmentExperience from "../../components/transport-equipment-experience";
import { machineGroups } from "../../data";
import { trText } from "../../lib/tr-text";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return machineGroups.map((group) => ({ slug: group.slug }));
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-slate-600">
        {items.map((item) => (
          <li key={item}>{trText(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function MachineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const group = machineGroups.find((item) => item.slug === slug);

  if (!group) {
    notFound();
  }

  if (slug === "tambur-sistemleri") {
    return <DrumSystemsExperience />;
  }

  if (slug === "tasima-ekipmanlari") {
    return <TransportEquipmentExperience />;
  }

  if (
    slug === "kiricilar-ve-parcalayicilar" ||
    slug === "reaktorler-ve-tanklar" ||
    slug === "eleme-ve-siniflandirma-sistemleri" ||
    slug === "toz-toplama-sistemleri" ||
    slug === "paketleme-ve-dolum-sistemleri" ||
    slug === "depolama-ve-besleme-sistemleri"
  ) {
    return <MachineCategoryExperience slug={slug} />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Hero
        title={trText(group.title)}
        description={trText(group.summary)}
        image={group.image}
      >
        <a href="#teklif-formu" className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a>
        <Link href="/#makinalar-ekipman" className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Gruplara Dön</Link>
      </Hero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {trText(group.title)}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              KÄ±sa tanÄ±m
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(group.summary)}</p>

            <div className="mt-10 rounded-3xl bg-slate-50 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Alt seÃ§enekler</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.variants.map((variant) => (
                  <div
                    key={variant}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700"
                  >
                    {trText(variant)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Teklif formu</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Bu grup iÃ§in kapasite, malzeme tipi ve saha bilgilerinizi paylaÅŸÄ±n; size uygun Ã§Ã¶zÃ¼m yapÄ±sÄ±nÄ± netleÅŸtirelim.
            </p>
            <div id="teklif-formu" className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                placeholder="Ad Soyad"
              />
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                placeholder="Telefon veya E-posta"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                placeholder="Kapasite, malzeme tÃ¼rÃ¼ ve ihtiyacÄ±nÄ±zÄ± yazÄ±n"
              />
              <button className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Teklif GÃ¶nder
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <InfoList title="Teknik Ã¶zellikler" items={group.technicalSpecs.map(trText)} />
          <InfoList title="Kapasite seÃ§enekleri" items={group.capacities.map(trText)} />
          <InfoList title="KullanÄ±m alanlarÄ±" items={group.applications.map(trText)} />
          <InfoList title="Opsiyonel ekipmanlar" items={group.optionalEquipment.map(trText)} />
          <InfoList title="Malzeme tÃ¼rÃ¼" items={group.materialTypes.map(trText)} />
          <InfoList title="Avantajlar" items={group.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ä°lgili sektÃ¶rler</h3>
            <div className="mt-4 grid gap-3">
              {group.relatedSectors.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ä°lgili hizmetler</h3>
            <div className="mt-4 grid gap-3">
              {group.relatedServices.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Ä°lgili projeler</h3>
            <div className="mt-4 grid gap-3">
              {group.relatedProjects.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">GÃ¶rseller / teknik Ã§izim</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Bu alana makina gÃ¶rselleri, Ã§izim PDF&apos;leri, kesit detaylarÄ± ve saha uygulama fotoÄŸraflarÄ± eklenebilir. Åu an sayfa yapÄ±sÄ± bunlarÄ± almaya hazÄ±r.
            </p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500">
              Teknik Ã§izim ve Ã¼rÃ¼n gÃ¶rselleri alanÄ±
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">SÄ±k sorulan sorular</h3>
            <div className="mt-6 space-y-4">
              {group.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{trText(faq.answer)}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


