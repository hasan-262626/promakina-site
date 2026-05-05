import Link from "next/link";

export type TechnicalContentCard = {
  title: string;
  description: string;
  href: string;
};

export function ServiceRelatedTechnicalContents({
  items,
}: {
  items: TechnicalContentCard[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="pb-10 sm:pb-14">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              İlgili Teknik İçerikler
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Bu hizmetle bağlantılı teknik bilgiler ve mühendislik rehberleri.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                  İçeriği İncele
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
