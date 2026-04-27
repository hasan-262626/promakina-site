"use client";

import { trText } from "../lib/tr-text";

type ProgramActionFooterProps = {
  submitLabel: string;
  onCancel: () => void;
  onSubmit: () => void;
};

export function ProgramActionFooter({
  submitLabel,
  onCancel,
  onSubmit,
}: ProgramActionFooterProps) {
  return (
    <div className="sticky bottom-0 border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
        >
          {trText("Vazgeç")}
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {trText(submitLabel)}
        </button>
      </div>
    </div>
  );
}
