import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${group.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur sm:text-sm">
              Makinalar & Ekipman
            </div>

            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl xl:text-7xl">
              {trText(group.heroTitle)}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8 md:text-xl">
              {trText(group.heroDescription)}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#teklif-formu"
                className="rounded-full bg-blue-700 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Teklif Al
              </a>
              <Link
                href="/#makinalar-ekipman"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Tüm Gruplara Dön
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {trText(group.title)}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Kısa tanım
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{trText(group.summary)}</p>

            <div className="mt-10 rounded-3xl bg-slate-50 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Alt seçenekler</h3>
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
              Bu grup için kapasite, malzeme tipi ve saha bilgilerinizi paylaşın; size uygun çözüm yapısını netleştirelim.
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
                placeholder="Kapasite, malzeme türü ve ihtiyacınızı yazın"
              />
              <button className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Teklif Gönder
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <InfoList title="Teknik özellikler" items={group.technicalSpecs.map(trText)} />
          <InfoList title="Kapasite seçenekleri" items={group.capacities.map(trText)} />
          <InfoList title="Kullanım alanları" items={group.applications.map(trText)} />
          <InfoList title="Opsiyonel ekipmanlar" items={group.optionalEquipment.map(trText)} />
          <InfoList title="Malzeme türü" items={group.materialTypes.map(trText)} />
          <InfoList title="Avantajlar" items={group.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">İlgili sektörler</h3>
            <div className="mt-4 grid gap-3">
              {group.relatedSectors.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">İlgili hizmetler</h3>
            <div className="mt-4 grid gap-3">
              {group.relatedServices.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                  {trText(item)}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">İlgili projeler</h3>
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
            <h3 className="text-2xl font-semibold text-slate-950">Görseller / teknik çizim</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Bu alana makina görselleri, çizim PDF&apos;leri, kesit detayları ve saha uygulama fotoğrafları eklenebilir. Şu an sayfa yapısı bunları almaya hazır.
            </p>
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500">
              Teknik çizim ve ürün görselleri alanı
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Sık sorulan sorular</h3>
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
