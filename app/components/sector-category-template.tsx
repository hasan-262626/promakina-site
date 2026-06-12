import Image from "next/image";
import Link from "next/link";
import { trText } from "../lib/tr-text";
import { SectorInquiryForm } from "./sector-inquiry-form";
import type { SectorCategoryConfig } from "./sector-category-config";
import type { SectorCardItem } from "./sector-subsectors-data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{trText(eyebrow)}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{trText(title)}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{trText(description)}</p>
    </div>
  );
}

export function SectorCategoryTemplate({
  sector,
  config,
}: {
  sector: SectorCardItem;
  config: SectorCategoryConfig;
}) {
  const isSludgeSector = sector.slug === "atik-su-camuru-ve-aritma-cozumleri";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative mx-auto flex min-h-[170px] max-w-7xl items-center px-4 py-8 sm:min-h-[200px] sm:px-6 sm:py-10 lg:min-h-[230px] lg:px-10 lg:py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] sm:text-5xl">
              {trText(sector.title)}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teklif Al
              </Link>
              <Link
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                WhatsApp ile Görüş
              </Link>
              <Link
                href="tel:+905320580104"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6"
              >
                Telefonla Ara
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
          <SectionHeading
            eyebrow={config.overviewEyebrow}
            title={config.overviewTitle}
            description={config.overviewDescription}
          />

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={sector.image}
                alt={trText(sector.alt)}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sector.subLinks.map((item) => (
            <article
              key={item.slug}
              className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.description)}</p>
              <Link
                href={`/sektorler/${sector.slug}/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0] transition hover:text-[#154764]"
              >
                Alt çözümü incele
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={config.solutionsEyebrow}
          title={config.solutionsTitle}
          description={config.solutionsDescription}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {config.solutionCards.map((item) => (
            <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={config.machinesEyebrow}
          title={config.machinesTitle}
          description={config.machinesDescription}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {config.machineCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{trText(item.title)}</h3>
                <span className="text-base font-semibold text-[#278DC0] transition group-hover:translate-x-0.5 group-hover:text-[#154764]">
                  →
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.text)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow={config.faqEyebrow}
          title={config.faqTitle}
          description={config.faqDescription}
        />
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

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <SectorInquiryForm
          requestTargetTitle={trText(sector.title)}
          initialSectorSlug={sector.slug}
          initialProductSlug={isSludgeSector ? sector.slug : undefined}
          productLabelOverride={isSludgeSector ? trText(sector.title) : undefined}
          productOptionsOverride={
            isSludgeSector
              ? [{ value: sector.slug, label: trText(sector.title) }]
              : undefined
          }
          formTitle={trText(config.formTitle)}
          formDescription={trText(config.formDescription)}
          initialCommonValues={
            isSludgeSector
              ? {
                  requestType: "Teklif Talebi",
                  projectStatus: "Yeni yatırım",
                }
              : undefined
          }
          initialDynamicValues={
            isSludgeSector
              ? {
                  productForm: "Çamur İşleme",
                  packagingNeed: "Projeye göre",
                  installationModel: "Sadece Makine",
                  automationLevel: "Yarı Otomatik",
                }
              : undefined
          }
          dynamicFieldsOverride={
            isSludgeSector
              ? [
                  {
                    id: "productForm",
                    label: "Ürün Formu",
                    type: "select" as const,
                    options: ["Çamur İşleme"],
                  },
                  {
                    id: "automationLevel",
                    label: "Otomasyon Seviyesi",
                    type: "select" as const,
                    options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"],
                  },
                  {
                    id: "packagingNeed",
                    label: "Paketleme İhtiyacı",
                    type: "select" as const,
                    options: ["Projeye göre"],
                  },
                  {
                    id: "installationModel",
                    label: "Kurulum Modeli",
                    type: "select" as const,
                    options: ["Sadece Makine", "Anahtar Teslim"],
                  },
                  {
                    id: "sludgeType",
                    label: "Giriş Çamur Türü",
                    type: "text" as const,
                    placeholder: "Örn. evsel / biyolojik / endüstriyel",
                  },
                  {
                    id: "inputMoisture",
                    label: "Giriş Nemi",
                    type: "text" as const,
                    placeholder: "Örn. %78",
                  },
                  {
                    id: "targetMoisture",
                    label: "Hedef Çıkış Nemi",
                    type: "text" as const,
                    placeholder: "Örn. %20",
                  },
                  {
                    id: "targetProduct",
                    label: "Son Ürün Hedefi",
                    type: "select" as const,
                    options: [
                      "Bertaraf öncesi hacim azaltma",
                      "Kurutulmuş ürün",
                      "ATY hazırlama",
                      "Kompost senaryosu",
                      "Henüz net değil",
                    ],
                  },
                ]
              : undefined
          }
        />
      </section>
    </main>
  );
}
