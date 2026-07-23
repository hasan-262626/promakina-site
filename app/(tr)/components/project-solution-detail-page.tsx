import Image from "next/image";
import Link from "next/link";

export type DetailAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type DetailBreadcrumb = {
  label: string;
  href?: string;
};

export type DetailCard = {
  title: string;
  description: string;
  href?: string;
};

export type DetailStat = {
  label: string;
  value: string;
};

export type DetailFaq = {
  question: string;
  answer: string;
};

export type DetailRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export type DetailTableOfContentsItem = {
  label: string;
  href: string;
};

export type DetailTextBlock = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  cards?: DetailCard[];
  stats?: DetailStat[];
  image?: {
    src: string;
    alt: string;
  };
  ctaActions?: DetailAction[];
  note?: string;
};

export type ProjectSolutionDetailPageProps = {
  canonicalPath: string;
  breadcrumb: DetailBreadcrumb[];
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  heroActions: DetailAction[];
  quickAnswer?: DetailTextBlock;
  tableOfContents?: DetailTableOfContentsItem[];
  introTitle: string;
  introParagraphs: string[];
  introImage?: string;
  introImageAlt?: string;
  sectionsBeforeScope?: DetailTextBlock[];
  scopeTitle: string;
  scopeDescription?: string;
  scopeCards: DetailCard[];
  sectionsAfterScope?: DetailTextBlock[];
  processTitle: string;
  processDescription?: string;
  processSteps: DetailCard[];
  sectionsAfterProcess?: DetailTextBlock[];
  equipmentTitle: string;
  equipmentCards: DetailCard[];
  sectionsAfterEquipment?: DetailTextBlock[];
  technicalTitle: string;
  technicalDescription?: string;
  technicalHighlights: DetailStat[];
  sectionsAfterTechnical?: DetailTextBlock[];
  advantageTitle: string;
  advantageCards: DetailCard[];
  sectionsBeforeRelated?: DetailTextBlock[];
  relatedTitle: string;
  relatedDescription?: string;
  relatedLinks: DetailRelatedLink[];
  faqTitle: string;
  faqs: DetailFaq[];
  ctaTitle: string;
  ctaDescription: string;
  ctaActions: DetailAction[];
  schemaType?: "Service" | "WebPage";
  serviceType?: string;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function fullUrl(pathOrUrl: string) {
  return pathOrUrl.startsWith("http")
    ? pathOrUrl
    : `https://www.promakina.com.tr${pathOrUrl}`;
}

function renderAction(item: DetailAction, variant: "primary" | "light" | "ghost" = "light") {
  const className =
    variant === "primary"
      ? "inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
      : variant === "ghost"
        ? "inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/60 bg-white/12 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/18"
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}

function ContentImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/8] min-h-[240px] sm:min-h-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

function LinkedCard({ item, cta }: { item: DetailCard; cta?: string }) {
  const card = (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#278DC0]/40 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
      {item.href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#154764] transition group-hover:text-[#278DC0]">
          {cta ?? "İlgili sayfayı incele"}
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </article>
  );

  return item.href ? (
    <Link href={item.href} className="block h-full">
      {card}
    </Link>
  ) : (
    <div className="h-full">{card}</div>
  );
}

function TextBlockSection({ section }: { section: DetailTextBlock }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className={section.image ? "grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center" : ""}>
        <div>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          {section.paragraphs?.length ? (
            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {section.stats?.length ? (
            <div className="mt-8 overflow-x-auto rounded-[24px] border border-slate-200 bg-white">
              <table className="w-full min-w-[420px] text-start text-sm">
                <tbody>
                  {section.stats.map((item, index) => (
                    <tr
                      key={`${item.label}-${item.value}`}
                      className={index % 2 === 1 ? "bg-slate-50/70" : "bg-white"}
                    >
                      <th className="w-[34%] px-5 py-4 text-start font-semibold text-[#154764]">
                        {item.label}
                      </th>
                      <td className="px-5 py-4 leading-7 text-slate-600">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {section.ctaActions?.length ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {section.ctaActions.map((action, index) =>
                renderAction(action, index === 0 ? "primary" : "light"),
              )}
            </div>
          ) : null}
        </div>
        {section.image ? <ContentImage src={section.image.src} alt={section.image.alt} /> : null}
      </div>
      {section.cards?.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.cards.map((item) => (
            <LinkedCard key={`${item.title}-${item.href ?? "plain"}`} item={item} />
          ))}
        </div>
      ) : null}
      {section.note ? (
        <p className="mt-6 rounded-[20px] border border-[#d9e6ee] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
          {section.note}
        </p>
      ) : null}
    </section>
  );
}

function renderTextBlockSections(sections?: DetailTextBlock[]) {
  return sections?.map((section) => (
    <TextBlockSection key={`${section.id ?? section.title}`} section={section} />
  ));
}

export function ProjectSolutionDetailPage({
  canonicalPath,
  breadcrumb,
  eyebrow,
  title,
  summary,
  heroImage,
  heroImageAlt,
  heroActions,
  quickAnswer,
  tableOfContents,
  introTitle,
  introParagraphs,
  introImage,
  introImageAlt,
  sectionsBeforeScope,
  scopeTitle,
  scopeDescription,
  scopeCards,
  sectionsAfterScope,
  processTitle,
  processDescription,
  processSteps,
  sectionsAfterProcess,
  equipmentTitle,
  equipmentCards,
  sectionsAfterEquipment,
  technicalTitle,
  technicalDescription,
  technicalHighlights,
  sectionsAfterTechnical,
  advantageTitle,
  advantageCards,
  sectionsBeforeRelated,
  relatedTitle,
  relatedDescription,
  relatedLinks,
  faqTitle,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaActions,
  schemaType = "WebPage",
  serviceType,
}: ProjectSolutionDetailPageProps) {
  const canonical = fullUrl(canonicalPath);
  const imageUrl = fullUrl(heroImage);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? fullUrl(item.href) : canonical,
    })),
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: summary,
    url: canonical,
    inLanguage: "tr-TR",
    image: imageUrl,
    serviceType: schemaType === "Service" ? serviceType ?? title : undefined,
    provider:
      schemaType === "Service"
        ? {
            "@type": "Organization",
            name: "Pro Makina",
            url: "https://www.promakina.com.tr",
          }
        : undefined,
    publisher:
      schemaType === "WebPage"
        ? {
            "@type": "Organization",
            name: "Pro Makina",
            url: "https://www.promakina.com.tr",
          }
        : undefined,
  };
  const serviceSchema = serviceType
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceType,
        description: summary,
        url: canonical,
        image: imageUrl,
        provider: {
          "@type": "Organization",
          name: "Pro Makina",
          url: "https://www.promakina.com.tr",
        },
        areaServed: "TR",
      }
    : null;
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
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={pageSchema} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-sky-50 to-[#eef6fb]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.10),transparent_32%)]" />
        <div className="relative site-container flex min-h-[170px] items-center py-8 sm:min-h-[200px] sm:py-10 lg:min-h-[230px] lg:py-12">
          <div className="max-w-[900px]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-[850px] break-normal text-4xl font-semibold leading-[1.1] tracking-tight text-[#020617] md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              {summary}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroActions.map((action, index) => renderAction(action, index === 0 ? "primary" : "light"))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <nav
                  aria-label="Breadcrumb"
                  className="flex flex-wrap items-center gap-2 text-sm text-slate-500 lg:block lg:space-y-2"
                >
                  {breadcrumb.map((item, index) => (
                    <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2 lg:flex">
                      {index > 0 ? <span className="text-slate-300 lg:hidden">/</span> : null}
                      {item.href ? (
                        <Link href={item.href} className="transition hover:text-[#278DC0]">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="font-medium text-slate-900">{item.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="min-w-0 space-y-12">
              {quickAnswer ? <TextBlockSection section={quickAnswer} /> : null}

              {tableOfContents?.length ? (
                <nav
                  aria-label="Sayfa içeriği"
                  className="rounded-[28px] border border-[#d9e6ee] bg-slate-50 p-5 shadow-sm sm:p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                    İçindekiler
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {tableOfContents.map((item) => (
                      <Link
                        key={`${item.label}-${item.href}`}
                        href={item.href}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:text-[#278DC0]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              ) : null}

              <ContentImage src={heroImage} alt={heroImageAlt} />

              <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <SectionHeading title={introTitle} />
                  <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
                    {introParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <ContentImage src={introImage ?? heroImage} alt={introImageAlt ?? heroImageAlt} />
              </section>

              {renderTextBlockSections(sectionsBeforeScope)}

              <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading
                  eyebrow="Kapsam"
                  title={scopeTitle}
                  description={scopeDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {scopeCards.map((item) => (
                    <LinkedCard key={`${item.title}-${item.href ?? "plain"}`} item={item} />
                  ))}
                </div>
              </section>

              {renderTextBlockSections(sectionsAfterScope)}

              <section
                id="proses-akisi"
                className="scroll-mt-28 rounded-[32px] border border-[#d9e6ee] bg-slate-50 px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12"
              >
                <SectionHeading
                  eyebrow="Proses / İş Akışı"
                  title={processTitle}
                  description={processDescription}
                />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {processSteps.map((item, index) => (
                    <article
                      key={`${item.title}-${index}`}
                      className="rounded-[24px] border border-[#d9e6ee] bg-white px-5 py-5"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                        {(index + 1).toString().padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              {renderTextBlockSections(sectionsAfterProcess)}

              <section id="kullanilan-makinalar" className="scroll-mt-28">
                <SectionHeading eyebrow="Ana Ekipmanlar" title={equipmentTitle} />
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {equipmentCards.map((item) => (
                    <LinkedCard
                      key={`${item.title}-${item.href ?? "plain"}`}
                      item={item}
                      cta="Makineyi incele"
                    />
                  ))}
                </div>
              </section>

              {renderTextBlockSections(sectionsAfterEquipment)}

              <section id="tasarim-kriterleri" className="scroll-mt-28 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <SectionHeading
                    eyebrow="Teknik Veri"
                    title={technicalTitle}
                    description={technicalDescription}
                  />
                  <div className="mt-8 overflow-x-auto rounded-[24px] border border-slate-200 bg-white">
                    <table className="w-full min-w-[420px] text-start text-sm">
                      <tbody>
                        {technicalHighlights.map((item, index) => (
                          <tr
                            key={`${item.label}-${item.value}`}
                            className={index % 2 === 1 ? "bg-slate-50/70" : "bg-white"}
                          >
                            <th className="w-[34%] px-5 py-4 text-start font-semibold text-[#154764]">
                              {item.label}
                            </th>
                            <td className="px-5 py-4 leading-7 text-slate-600">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <SectionHeading eyebrow="Çözüm Yaklaşımı" title={advantageTitle} />
                  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                    {advantageCards.map((item) => (
                      <article
                        key={`${item.title}-${item.description}`}
                        className="rounded-[22px] border border-slate-200 bg-slate-50 p-5"
                      >
                        <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              {renderTextBlockSections(sectionsAfterTechnical)}
              {renderTextBlockSections(sectionsBeforeRelated)}

              <section className="rounded-[32px] border border-[#d9e6ee] bg-slate-50 p-6 shadow-sm md:p-8">
                <SectionHeading title={relatedTitle} description={relatedDescription} />
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedLinks.map((item) => (
                    <Link
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      className="group block rounded-[22px] border border-slate-200 bg-white p-4 transition hover:border-[#278DC0]/30"
                    >
                      <span className="block text-base font-semibold text-slate-950">
                        {item.label}
                      </span>
                      {item.description ? (
                        <span className="mt-2 block text-sm leading-7 text-slate-600">
                          {item.description}
                        </span>
                      ) : null}
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#278DC0]">
                        Sayfayı aç
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <section id="sss" className="scroll-mt-28">
                <SectionHeading eyebrow="Sık Sorulan Sorular" title={faqTitle} />
                <div className="mt-8 space-y-4">
                  {faqs.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                    >
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="teknik-teklif" className="section-bottom-space-lg scroll-mt-28">
                <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#153f8a_100%)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.24)] sm:px-8 sm:py-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Teknik Teklif
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {ctaTitle}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
                    {ctaDescription}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {ctaActions.map((action, index) =>
                      renderAction(action, index === 0 ? "primary" : "ghost"),
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
