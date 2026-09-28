import Link from "next/link";

/** Kısayol metni ve bağlantısı; verilmezse Türkçe teknik makaleler bağlantısı kullanılır. */
export type TechnicalArticlesShortcutContent = { before: string; linkLabel: string; href: string; after: string };

const trContent: TechnicalArticlesShortcutContent = {
  before: "Teknik içerik, proses rehberi ve hesaplama yazılarını tek merkezden görmek için",
  linkLabel: "Teknik Makaleler ve Proses Rehberleri",
  href: "/kutuphane/blog#teknik-makaleler",
  after: "bölümüne geçebilirsiniz.",
};

type Props = {
  className?: string;
  content?: TechnicalArticlesShortcutContent;
};

export function TechnicalArticlesShortcut({ className, content = trContent }: Props) {
  return (
    <div
      className={`rounded-2xl border border-[#278DC0]/12 bg-[#278DC0]/8 px-4 py-3 text-sm leading-7 text-slate-600 ${className ?? ""}`}
    >
      {content.before}{" "}
      <Link
        href={content.href}
        className="font-semibold text-[#278DC0] underline decoration-[#278DC0]/30 underline-offset-4 transition hover:text-[#154764]"
      >
        {content.linkLabel}
      </Link>{" "}
      {content.after}
    </div>
  );
}
