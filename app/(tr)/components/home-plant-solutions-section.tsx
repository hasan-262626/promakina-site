import Image from "next/image";
import Link from "next/link";
import { plantHomeCards, type PlantHomeCard } from "../lib/plant-solutions";

export type HomePlantSolutionsContent = {
  heading: string;
  description: string;
  browseLabel: string;
  browseHref: string;
  cardCtaLabel?: string;
  cards: PlantHomeCard[];
};

export function HomePlantSolutionsSection({
  content,
}: {
  content?: HomePlantSolutionsContent;
}) {
  const heading = content?.heading ?? "Atık İşleme ve Kompost Tesisi Çözümleri";
  const description =
    content?.description ??
    "Kompost, hayvansal ve bitkisel atık, atık su çamuru kurutma ve ATY / RDF hazırlama başlıklarında ticari tesis sayfalarımızı inceleyin.";
  const browseLabel = content?.browseLabel ?? "Tüm Tesis Çözümlerini Gör";
  const browseHref = content?.browseHref ?? "/tesisler";
  const cardCtaLabel = content?.cardCtaLabel;
  const cards = content?.cards ?? plantHomeCards;

  return (
    <section
      className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-10 md:py-14 lg:py-16"
      aria-labelledby="home-plant-solutions-title"
    >
      <div className="site-container">
        <div className="max-w-4xl">
          <h2
            id="home-plant-solutions-title"
            className="text-3xl font-semibold tracking-tight text-[#278DC0] sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-[1180px] text-[15px] leading-[1.7] text-slate-900 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/16 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
            >
              <div className="relative min-h-[220px] bg-slate-200">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {card.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                  {cardCtaLabel ?? `${card.title} Çözümlerini İnceleyin`}
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={browseHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#278DC0]/16 bg-[#278DC0]/10 px-6 text-sm font-semibold text-[#278DC0] transition hover:border-[#278DC0] hover:bg-white hover:text-[#154764]"
          >
            {browseLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
