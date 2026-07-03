import Image from "next/image";
import Link from "next/link";
import { trText } from "../lib/tr-text";
import { ProjectPageData } from "../lib/project-pages-data";
import {
  getResolvedProjectTitle,
  ProjectDetailAction,
  ProjectDetailContent,
  resolveProjectImagePath,
} from "../lib/project-detail-content";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function renderAction(item: ProjectDetailAction, primary = false) {
  const className = primary
    ? "inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
    : "inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d7e3ec] bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/6";

  if (item.external || item.href.startsWith("http") || item.href.startsWith("tel:")) {
    return (
      <a
        key={`${item.label}-${item.href}`}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link key={`${item.label}-${item.href}`} href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export default function ProjectDetailLandingPage({
  project,
  detail,
  canonicalPath,
}: {
  project: ProjectPageData;
  detail?: ProjectDetailContent | null;
  canonicalPath: string;
}) {
  const fullUrl = `https://www.promakina.com.tr${canonicalPath}`;
  const pageTitle = getResolvedProjectTitle(project, detail);
  const pageDescription = detail?.heroDescription ?? trText(project.heroDescription);
  const heroImage = resolveProjectImagePath(detail?.heroImage ?? project.image);
  const heroImageAlt = detail?.heroImageAlt ?? trText(project.imageAlt);
  const overviewTitle = detail?.overviewTitle ?? "Proje Genel Bakış";
  const overviewParagraphs =
    detail?.overviewParagraphs ?? [trText(project.heroDescription), ...project.projectScope.slice(0, 1).map(trText)];
  const overviewImage = resolveProjectImagePath(detail?.overviewImage ?? project.image);
  const overviewImageAlt = detail?.overviewImageAlt ?? trText(project.imageAlt);
  const scopeCards =
    detail?.scopeCards ??
    project.projectScope.map((item) => ({
      title: trText(item),
      description: "Projede değerlendirilen temel kapsam başlıklarından biridir.",
    }));
  const processSteps =
    detail?.processSteps ??
    project.processFlow.map((item) => ({
      title: trText(item),
      description: "Bu adım, proje akışının kritik operasyon halkalarından birini temsil eder.",
    }));
  const equipmentCards =
    detail?.equipmentCards ??
    project.machineGroups.map((item) => ({
      title: trText(item),
      description: "Proje özelinde kullanılan başlıca makine veya ekipman grubudur.",
    }));
  const technicalHighlights =
    detail?.technicalHighlights ??
    [
      { label: "Proje odağı", value: trText(project.cardDescription) },
      { label: "İlk görüşme bilgileri", value: project.quoteRequirements.map(trText).join(" • ") },
      { label: "Yatırım faydaları", value: project.investorBenefits.map(trText).join(" • ") },
    ];
  const promakinaCards =
    detail?.promakinaCards ??
    project.investorBenefits.map((item) => ({
      title: trText(item),
      description: "Bu yatırım senaryosunda Pro Makina’nın sağladığı değer başlıklarından biridir.",
    }));
  const relatedLinks = detail?.relatedLinks ?? project.relatedLinks.map((item) => ({
    ...item,
    label: trText(item.label),
  }));
  const faqs =
    detail?.faqs ??
    project.quoteRequirements.map((item) => ({
      question: `${trText(item)} neden önemlidir?`,
      answer:
        "Teknik teklif ve doğru proses kurgusu için bu veri, proje ölçülendirmesini doğrudan etkileyen temel girdilerden biridir.",
    }));
  const heroActions: ProjectDetailAction[] =
    detail?.heroActions ??
    [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      relatedLinks[0]
        ? { label: trText(relatedLinks[0].label), href: relatedLinks[0].href }
        : { label: "Projeler", href: "/projeler" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: `https://wa.me/905320580104?text=${encodeURIComponent(
          `Merhaba, ${pageTitle} hakkında bilgi almak istiyorum.`,
        )}`,
        external: true,
      },
    ];
  const ctaActions =
    detail?.ctaActions ??
    [
      { label: "Teknik Teklif Al", href: "/iletisim" },
      {
        label: "WhatsApp ile Bilgi Gönder",
        href: `https://wa.me/905320580104?text=${encodeURIComponent(
          `Merhaba, ${pageTitle} için teknik görüşme talep ediyorum.`,
        )}`,
        external: true,
      },
      { label: "Projelere Dön", href: "/projeler" },
    ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.promakina.com.tr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projeler",
        item: "https://www.promakina.com.tr/projeler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageTitle,
        item: fullUrl,
      },
    ],
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: fullUrl,
    inLanguage: "tr-TR",
    primaryImageOfPage: heroImage,
    isPartOf: {
      "@type": "WebSite",
      name: "Pro Makina",
      url: "https://www.promakina.com.tr",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina Process Engineering",
      url: "https://www.promakina.com.tr",
      telephone: "+90 532 058 01 04",
      email: "info@promakina.com.tr",
    },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={pageSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="site-container py-10 sm:py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                {trText(detail?.eyebrow ?? "PROJE REFERANSI")}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#020617] md:text-5xl lg:text-6xl">
                {pageTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                {pageDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {heroActions.map((action, index) => renderAction(action, index === 0))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4] sm:aspect-[16/11]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
                {trText(overviewTitle)}
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
                {overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{trText(paragraph)}</p>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11]">
                <Image
                  src={overviewImage}
                  alt={overviewImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
              Proje Kapsamı
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
              {trText(detail?.scopeTitle ?? "Proje Kapsamı")}
            </h2>
            {detail?.scopeDescription ? (
              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                {trText(detail.scopeDescription)}
              </p>
            ) : null}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {scopeCards.map((item) => {
              const content = (
                <article className="h-full rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {trText(item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {trText(item.description)}
                  </p>
                  {item.href ? (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0]">
                      İlgili sayfayı aç
                      <span aria-hidden="true">→</span>
                    </span>
                  ) : null}
                </article>
              );

              return item.href ? (
                <Link key={`${item.title}-${item.href}`} href={item.href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d9e6ee] bg-slate-50 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
              Proses / İş Akışı
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
              {trText(detail?.processTitle ?? "Proses Akışı")}
            </h2>
            {detail?.processDescription ? (
              <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 sm:text-base">
                {trText(detail.processDescription)}
              </p>
            ) : null}
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((item, index) => {
                const card = (
                  <article className="rounded-[24px] border border-[#d9e6ee] bg-white px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{trText(item.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.description)}</p>
                    {item.href ? (
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#154764]">
                        İlgili ekipmanı incele
                        <span aria-hidden="true">→</span>
                      </span>
                    ) : null}
                  </article>
                );

                return item.href ? (
                  <Link key={`${item.title}-${index}`} href={item.href} className="block">
                    {card}
                  </Link>
                ) : (
                  <div key={`${item.title}-${index}`}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                Ana Ekipmanlar
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
                {trText(detail?.equipmentTitle ?? "Başlıca Ekipmanlar")}
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {equipmentCards.map((item) => {
                  const card = (
                    <article className="h-full rounded-[26px] border border-[#d9e6ee] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#278DC0]/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {trText(item.title)}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {trText(item.description)}
                      </p>
                      {item.href ? (
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0]">
                          Ürünü incele
                          <span aria-hidden="true">→</span>
                        </span>
                      ) : null}
                    </article>
                  );

                  return item.href ? (
                    <Link key={`${item.title}-${item.href}`} href={item.href} className="block">
                      {card}
                    </Link>
                  ) : (
                    <div key={item.title}>{card}</div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#d9e6ee] bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                Teknik Tasarım Başlıkları
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
                {trText(detail?.technicalTitle ?? "Teknik Veriler")}
              </h2>
              {detail?.technicalDescription ? (
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {trText(detail.technicalDescription)}
                </p>
              ) : null}
              <div className="mt-8 grid gap-4">
                {technicalHighlights.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-[#154764]">{trText(item.label)}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{trText(item.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
            Pro Makina Katkısı
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
            {trText(detail?.promakinaTitle ?? "Bu Projede Pro Makina’nın Sağladıkları")}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {promakinaCards.map((item) => (
              <article
                key={`${item.title}-${item.description}`}
                className="rounded-[28px] border border-[#d9e6ee] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {trText(item.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-[#d9e6ee] bg-slate-50 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#154764]">
              {trText(detail?.relatedTitle ?? "İlgili Sayfalar ve Ekipmanlar")}
            </h2>
            {detail?.relatedDescription ? (
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
                {trText(detail.relatedDescription)}
              </p>
            ) : null}
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {relatedLinks.map((item) => (
                <Link
                  key={`${project.slug}-${item.href}`}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                >
                  {trText(item.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bottom-space">
        <div className="site-container">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
            Sık Sorulan Sorular
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#154764] md:text-4xl">
            {trText(detail?.faqTitle ?? "Sık Sorulan Sorular")}
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {trText(item.question)}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{trText(item.answer)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-bottom-space-lg">
        <div className="site-container">
          <div className="rounded-[32px] bg-[#278DC0] px-6 py-10 text-white shadow-[0_20px_60px_rgba(39,141,192,0.28)] md:px-10 md:py-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              {trText(detail?.ctaTitle ?? "Projeniz için teknik değerlendirme alın")}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 md:text-base">
              {trText(
                detail?.ctaDescription ??
                  "Hammadde, kapasite, nem oranı, ürün hedefi ve saha koşullarınızı paylaşın; projenize uygun proses akışını ve makine omurgasını birlikte netleştirelim.",
              )}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {ctaActions.map((action, index) => {
                const className =
                  index === 0
                    ? "inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-slate-100"
                    : "inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18";

                if (action.external || action.href.startsWith("http") || action.href.startsWith("tel:")) {
                  return (
                    <a
                      key={`${action.label}-${action.href}`}
                      href={action.href}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                      className={className}
                    >
                      {action.label}
                    </a>
                  );
                }

                return (
                  <Link key={`${action.label}-${action.href}`} href={action.href} className={className}>
                    {action.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
