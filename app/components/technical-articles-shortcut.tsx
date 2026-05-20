import Link from "next/link";

type Props = {
  className?: string;
};

export function TechnicalArticlesShortcut({ className }: Props) {
  return (
    <div
      className={`rounded-2xl border border-[#278DC0]/12 bg-[#278DC0]/8 px-4 py-3 text-sm leading-7 text-slate-600 ${className ?? ""}`}
    >
      Teknik içerik, proses rehberi ve hesaplama yazılarını tek merkezden görmek için{" "}
      <Link
        href="/kutuphane/blog#teknik-makaleler"
        className="font-semibold text-[#278DC0] underline decoration-[#278DC0]/30 underline-offset-4 transition hover:text-[#154764]"
      >
        Teknik Makaleler ve Proses Rehberleri
      </Link>{" "}
      bölümüne geçebilirsiniz.
    </div>
  );
}
