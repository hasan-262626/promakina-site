"use client";

import { fmtTr } from "./materialCalculations";
import type { CalcResult } from "./types";

type Props = {
  result: CalcResult | null;
  onAdd: () => void;
  canAdd: boolean;
};

export function MaterialResultCard({ result, onAdd, canAdd }: Props) {
  return (
    <div className="rounded-2xl border border-[#154764]/15 bg-[#154764] p-5 text-white">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ec9e8]">
            Toplam Ağırlık
          </p>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {result ? fmtTr(result.totalKg) : "—"} <span className="text-base font-semibold">kg</span>
          </p>
          {result && result.unitKg !== result.totalKg ? (
            <p className="mt-0.5 text-xs text-slate-300">Parça: {fmtTr(result.unitKg)} kg</p>
          ) : null}
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ec9e8]">
            Toplam Fiyat
          </p>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {result ? fmtTr(result.totalPrice) : "—"} <span className="text-base font-semibold">₺</span>
          </p>
          {result && result.totalMeters > 0 ? (
            <p className="mt-0.5 text-xs text-slate-300">Toplam: {fmtTr(result.totalMeters)} m</p>
          ) : null}
        </div>
      </div>
      <button
        type="button"
        onClick={onAdd}
        disabled={!canAdd}
        className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-bold text-white transition hover:bg-white hover:text-[#154764] disabled:cursor-not-allowed disabled:opacity-40"
      >
        + Listeye Ekle
      </button>
    </div>
  );
}
