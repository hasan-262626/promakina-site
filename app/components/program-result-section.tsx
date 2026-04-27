"use client";

import { trText } from "../lib/tr-text";
import type { ProgramModalOutput } from "./program-modal-config";

type ProgramResultSectionProps = {
  output: ProgramModalOutput | null;
  commentPreview: string[];
};

const toneClasses: Record<NonNullable<ProgramModalOutput["cards"][number]["tone"]>, string> = {
  default: "border-slate-200 bg-white",
  info: "border-sky-100 bg-sky-50",
  warning: "border-amber-100 bg-amber-50",
  success: "border-emerald-100 bg-emerald-50",
};

export function ProgramResultSection({
  output,
  commentPreview,
}: ProgramResultSectionProps) {
  return (
    <div className="space-y-5">
      {commentPreview.length > 0 ? (
        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {trText("Otomatik Sistem Yorumu")}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {commentPreview.map((comment) => (
              <div
                key={comment}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-600"
              >
                {trText(comment)}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {output ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
          <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {trText(output.resultTitle ?? "Sonuç Alanı")}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {output.cards.map((card) => (
              <div
                key={`${card.label}-${card.value}`}
                className={`rounded-2xl border px-4 py-4 ${toneClasses[card.tone ?? "default"]}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {trText(card.label)}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{trText(card.value)}</p>
              </div>
            ))}
          </div>

          {!output.hideTechnicalPanels && output.sections?.length ? (
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {output.sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-slate-950">{trText(section.title)}</p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {section.items.map((item) => (
                      <div
                        key={`${section.title}-${item.label}`}
                        className="flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-white px-3 py-2"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {trText(item.label)}
                        </span>
                        <span>{trText(item.value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {!output.hideTechnicalPanels ? (
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">{trText("Teknik Özet")}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {trText(output.technicalSummary)}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {trText(output.formulaSummary)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">
                  {trText("Uyarılar ve Notlar")}
                </p>
                <div className="mt-2 space-y-2 text-sm leading-7 text-slate-600">
                  {[...output.comments, ...output.warnings].map((item) => (
                    <p key={item}>{trText(item)}</p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
