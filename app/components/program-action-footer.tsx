"use client";

import { trText } from "../lib/tr-text";

type ProgramActionFooterProps = {
  submitLabel: string;
  onCancel: () => void;
  onReset?: () => void;
  onSubmit: () => void;
};

export function ProgramActionFooter({
  submitLabel,
  onCancel,
  onReset,
  onSubmit,
}: ProgramActionFooterProps) {
  return (
    <div className="sticky bottom-0 border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/30 hover:text-[#154764]"
          >
            {trText("Vazgeç")}
          </button>
          {onReset ? (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:border-[#278DC0]/30 hover:text-[#154764]"
            >
              {trText("Formu Temizle")}
            </button>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          {trText(submitLabel)}
        </button>
      </div>
    </div>
  );
}

