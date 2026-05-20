import Link from "next/link";

type BlogArticleCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function BlogArticleCta({
  title,
  description,
  buttonLabel,
  buttonHref,
}: BlogArticleCtaProps) {
  return (
    <section className="section-space pt-10 md:pt-12">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#154764_0%,#154764_56%,#278DC0_100%)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(11,15,20,0.22)] sm:px-8 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="mt-7 inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0] hover:text-white"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
