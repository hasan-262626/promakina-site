import Link from "next/link";
import { homeServiceCards, homeServiceTags, type HomeServiceCard } from "../home-services-data";
import { trText } from "../lib/tr-text";

function ServiceIcon({ icon }: { icon: HomeServiceCard["icon"] }) {
  const baseClassName = "h-6 w-6 text-blue-700";

  switch (icon) {
    case "plant":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M12 21V11" /><path d="M7 21h10" /><path d="M8 11C5.5 9.8 4 7.7 4 5c2.9 0 5 1 6.4 3.1" /><path d="M16 11C18.5 9.8 20 7.7 20 5c-2.9 0-5 1-6.4 3.1" /></svg>;
    case "flow":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M4 6h7" /><path d="M13 6h7" /><path d="M8 6v12" /><path d="M16 18V6" /><path d="M8 12h8" /></svg>;
    case "machine":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M7 17v3" /><path d="M17 17v3" /><path d="M7 11h5" /><path d="M15 11h2" /></svg>;
    case "launch":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M5 19c2.5-1 4.5-3 5.5-5.5" /><path d="M14.5 9.5 19 5l.5 4.5L15 14" /><path d="M10 14 5 19" /><path d="M9 5h4l6 6v4" /></svg>;
    case "refresh":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M20 6v5h-5" /><path d="M4 18v-5h5" /><path d="M7.5 9A6.5 6.5 0 0 1 18 11" /><path d="M16.5 15A6.5 6.5 0 0 1 6 13" /></svg>;
    case "advice":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M12 3 4 7v5c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V7l-8-4Z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>;
    case "lab":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><path d="M10 3v5l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V3" /><path d="M9 13h6" /></svg>;
    case "plan":
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={baseClassName} aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10" /><path d="M7 12h6" /><path d="M7 16h4" /></svg>;
  }
}

function ServiceCard({ card }: { card: HomeServiceCard }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
        <ServiceIcon icon={card.icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{trText(card.title)}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">{trText(card.description)}</p>
      <Link href={card.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
        {trText(card.buttonLabel)}
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
}

export function HomeServicesSection() {
  return (
    <section id="hizmetler" className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 sm:py-20 lg:py-24" aria-labelledby="home-services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl">
          <h2 id="home-services-title" className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            HİZMETLERİMİZ
          </h2>
          <p className="mt-4 max-w-[1180px] text-[15px] leading-[1.7] text-slate-600 sm:text-base">
            Pro Makina; gübre ve granülasyon, kompost ve organik atık, geri dönüşüm, atık su çamuru, biyogaz, madencilik ve dökme katı malzeme işleme alanlarında projeye özel mühendislik ve uygulama çözümleri sunar. İhtiyaç analizinden proses tasarımına, makina imalatından saha kurulumuna ve devreye almaya kadar tüm süreçler tek merkezden planlanır. Dayanıklı ekipman, doğru proses kurgusu ve sürdürülebilir işletme yaklaşımıyla yatırımınıza uygun, ölçeklenebilir ve verimli tesisler geliştiriyoruz.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {homeServiceTags.map((tag) => (
            <Link key={tag.href} href={tag.href} aria-label={`${tag.label} sektör sayfasına git`} className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:shadow-[0_8px_22px_rgba(15,23,42,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              {tag.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeServiceCards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-10 rounded-[30px] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_48px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Projenize uygun doğru sistemi birlikte belirleyelim
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Yeni tesis yatırımı, kapasite artışı, proses revizyonu veya özel makina ihtiyacınız için ekibimizle iletişime geçin. Projenize uygun mühendislik yaklaşımını ve doğru ekipman kurgusunu birlikte oluşturalım.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link href="/hizmetler" className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800">
                Tüm Hizmetleri İncele
              </Link>
              <Link href="/iletisim" className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-slate-300 px-7 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700">
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
