"use client";

import { trText } from "../lib/tr-text";
import type {
  ProgramShellChip,
  ProgramShellConfig,
  ProgramShellDiagram,
  ProgramShellField,
} from "../program-platform-data";

type ProgramToolShellProps = ProgramShellConfig;

function DiagramVisual({ diagram }: { diagram: ProgramShellDiagram }) {
  const commonLine = "stroke-[#1d4ed8] stroke-[2.5]";

  if (diagram === "weight" || diagram === "sheet") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <rect x="34" y="42" width="144" height="136" rx="20" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <rect x="220" y="66" width="78" height="88" rx="18" fill="#eff6ff" stroke="#0f172a" strokeWidth="2.5" />
        <path d="M46 184h122" className={commonLine} />
        <path d="M188 72h110" className={commonLine} />
        <text x="104" y="36" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">L</text>
        <text x="214" y="116" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">t</text>
        <text x="106" y="200" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">W</text>
      </svg>
    );
  }

  if (diagram === "motor") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <rect x="40" y="70" width="106" height="80" rx="20" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <circle cx="248" cy="110" r="46" fill="#eff6ff" stroke="#0f172a" strokeWidth="3" />
        <path d="M146 110h56" className={commonLine} />
        <path d="M202 110h46" className={commonLine} />
        <text x="93" y="62" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">P</text>
        <text x="176" y="100" textAnchor="middle" className="fill-[#1d4ed8] text-[16px] font-semibold">n</text>
        <text x="248" y="117" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">T</text>
      </svg>
    );
  }

  if (diagram === "gear") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <circle cx="112" cy="110" r="44" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <circle cx="224" cy="110" r="68" fill="#eff6ff" stroke="#0f172a" strokeWidth="3" />
        <path d="M156 110h22" className={commonLine} />
        <path d="M178 110h46" className={commonLine} />
        <text x="112" y="58" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">Z1</text>
        <text x="224" y="38" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">Z2</text>
        <text x="174" y="96" textAnchor="middle" className="fill-[#1d4ed8] text-[16px] font-semibold">i</text>
      </svg>
    );
  }

  if (diagram === "shaft") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <rect x="44" y="94" width="252" height="34" rx="16" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <rect x="132" y="78" width="92" height="66" rx="16" fill="#eff6ff" stroke="#0f172a" strokeWidth="3" />
        <path d="M60 78h60" className={commonLine} />
        <path d="M240 146h52" className={commonLine} />
        <text x="88" y="70" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">d</text>
        <text x="176" y="70" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">k</text>
        <text x="270" y="168" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">L</text>
      </svg>
    );
  }

  if (diagram === "filter") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <path d="M72 46h196l-40 60v66H112v-66z" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <path d="M120 72h108" className={commonLine} />
        <path d="M98 188h142" className={commonLine} />
        <text x="170" y="66" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">Q</text>
        <text x="170" y="196" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">A</text>
      </svg>
    );
  }

  if (diagram === "tank") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
        <rect x="108" y="32" width="132" height="156" rx="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
        <path d="M174 54v112" className={commonLine} />
        <path d="M108 110h132" className={commonLine} />
        <text x="256" y="114" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">H</text>
        <text x="174" y="204" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">D</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" aria-hidden="true">
      <rect x="36" y="48" width="132" height="124" rx="24" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
      <rect x="192" y="72" width="132" height="76" rx="24" fill="#eff6ff" stroke="#0f172a" strokeWidth="3" />
      <path d="M166 110h28" className={commonLine} />
      <text x="102" y="40" textAnchor="middle" className="fill-[#1d4ed8] text-[18px] font-semibold">Q</text>
      <text x="258" y="64" textAnchor="middle" className="fill-[#0f172a] text-[18px] font-semibold">Ø</text>
      <text x="180" y="98" textAnchor="middle" className="fill-[#1d4ed8] text-[16px] font-semibold">→</text>
    </svg>
  );
}

function FieldCard({ field }: { field: ProgramShellField }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
        {trText(field.label)}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {trText(field.description)}
      </p>
    </div>
  );
}

function Chip({ chip }: { chip: ProgramShellChip }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3.5 py-3">
      <p className="text-sm font-semibold text-slate-900">{trText(chip.short)}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{trText(chip.meaning)}</p>
    </div>
  );
}

export function ProgramToolShell({
  title,
  diagram,
  caption,
  fields,
  chips,
}: ProgramToolShellProps) {
  return (
    <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#f8fafc_52%,#ffffff_100%)] py-8 lg:py-10">
      <div className="site-container">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                Program Akış Özeti
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {trText(title)}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                Bu program, müşteri girişi ile başlayan ve otomatik sistem yorumlarıyla güçlenen ön mühendislik akışı sunar.
                Sonuç ekranı, teknik özet ve çıktı aksiyonları aynı düzen içinde ilerler.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "Müşteri girişi",
                  "Akıllı soru akışı",
                  "Sistem yorumları",
                  "Sonuç ve rapor",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {trText(item)}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {fields.map((field) => (
                <FieldCard key={field.label} field={field} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-7">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4">
                <DiagramVisual diagram={diagram} />
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-200">{trText(caption)}</p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_44px_rgba(15,23,42,0.06)] sm:p-7">
              <h3 className="text-lg font-semibold text-slate-950">Teknik odak noktaları</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {chips.map((chip) => (
                  <Chip key={`${chip.short}-${chip.meaning}`} chip={chip} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
