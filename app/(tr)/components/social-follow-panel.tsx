import { SocialLinks } from "./social-links";

type SocialFollowPanelProps = {
  title?: string;
  description?: string;
};

export function SocialFollowPanel({
  title = "Sosyal medya üzerinden teknik içeriklerimizi takip edin.",
  description = "Endüstriyel proses mühendisliği, makina üretimi, teknik içerikler ve proje paylaşımları için sosyal medya hesaplarımızı takip edin.",
}: SocialFollowPanelProps) {
  return (
    <section>
      <div className="rounded-[28px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] sm:px-8 sm:py-9">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              SOSYAL OTORİTE
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/76 sm:text-base">
              {description}
            </p>
          </div>
          <SocialLinks variant="button" className="lg:justify-end" />
        </div>
      </div>
    </section>
  );
}
