type ProgramPageHeroProps = {
  title: string;
  description: string;
};

export function ProgramPageHero({ title, description }: ProgramPageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="site-container py-10 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Programlar</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
