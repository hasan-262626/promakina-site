import Link from "next/link";

/** Admin ortak görsel bileşenleri (sunucu bileşenleri; durum tutmaz). */

export function PageHeader({ title, description, actions }: { title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
        {description ? <p className="mt-1 max-w-3xl text-sm text-slate-600">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}

export function Card({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {title ? <h2 className="mb-4 text-base font-semibold text-slate-900">{title}</h2> : null}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint }: { label: string; value: React.ReactNode; hint?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}

const tones = {
  green: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  red: "bg-red-50 text-red-800 ring-red-200",
  amber: "bg-amber-50 text-amber-800 ring-amber-200",
  blue: "bg-sky-50 text-sky-800 ring-sky-200",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
} as const;

export function Badge({ tone = "slate", children }: { tone?: keyof typeof tones; children: React.ReactNode }) {
  return <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>{children}</span>;
}

export function Table({ head, children, empty }: { head: string[]; children: React.ReactNode; empty?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="whitespace-nowrap px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">{children}</tbody>
      </table>
      {empty ? <p className="px-4 py-8 text-center text-sm text-slate-500">Kayıt yok.</p> : null}
    </div>
  );
}

export function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-2.5 align-top text-slate-700 ${className}`}>{children}</td>;
}

export function Pagination({ page, total, pageSize, buildHref }: { page: number; total: number; pageSize: number; buildHref: (page: number) => string }) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <nav aria-label="Sayfalama" className="mt-4 flex items-center justify-between text-sm text-slate-600">
      <span>
        Toplam {total} kayıt · Sayfa {page}/{pages}
      </span>
      <div className="flex gap-2">
        {page > 1 ? (
          <Link className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-50" href={buildHref(page - 1)}>
            Önceki
          </Link>
        ) : null}
        {page < pages ? (
          <Link className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 hover:bg-slate-50" href={buildHref(page + 1)}>
            Sonraki
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export function Notice({ tone = "blue", children }: { tone?: "blue" | "amber" | "red" | "green"; children: React.ReactNode }) {
  const map = { blue: "border-sky-200 bg-sky-50 text-sky-900", amber: "border-amber-200 bg-amber-50 text-amber-900", red: "border-red-200 bg-red-50 text-red-900", green: "border-emerald-200 bg-emerald-50 text-emerald-900" };
  return <div role={tone === "red" ? "alert" : "note"} className={`mb-4 rounded-lg border px-4 py-3 text-sm ${map[tone]}`}>{children}</div>;
}

export function formatDate(value: string | Date | null | undefined) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("tr-TR", { dateStyle: "short", timeStyle: "short", timeZone: "Europe/Istanbul" }).format(new Date(value));
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#278DC0] focus:outline-none focus:ring-2 focus:ring-[#278DC0]/20";
export const buttonClass = "inline-flex items-center justify-center rounded-lg bg-[#154764] px-4 py-2 text-sm font-semibold text-white hover:bg-[#278DC0] disabled:opacity-60";
export const secondaryButtonClass = "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50";
