"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trText } from "../lib/tr-text";

export type Severity = "critical" | "warning" | "info";

export function ToolkitTooltip({
  id,
  text,
  openId,
  setOpenId,
}: {
  id: string;
  text: string;
  openId: string | null;
  setOpenId: (value: string | null) => void;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isOpen = openId === id;
  const normalizedText = trText(text);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null);
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpenId]);

  return (
    <span
      ref={ref}
      className="relative ml-2 inline-flex"
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(null)}
    >
      <button
        type="button"
        aria-label={normalizedText}
        onClick={() => setOpenId(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          {normalizedText}
        </span>
      ) : null}
    </span>
  );
}

export function ToolkitField({
  label,
  helperText,
  limitText,
  error,
  tip,
  tipId,
  openTip,
  setOpenTip,
  children,
}: {
  label: string;
  helperText?: string;
  limitText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
  children: ReactNode;
}) {
  const normalizedLabel = trText(label);
  const normalizedHelperText = helperText ? trText(helperText) : undefined;
  const normalizedLimitText = limitText ? trText(limitText) : undefined;
  const normalizedError = error ? trText(error) : undefined;

  return (
    <label className="grid gap-1.5">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {normalizedLabel}
        {tip ? <ToolkitTooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} /> : null}
      </span>
      {normalizedHelperText ? <span className="text-[11px] font-medium leading-4 text-slate-600">{normalizedHelperText}</span> : null}
      {normalizedLimitText ? <span className="text-[11px] leading-4 text-slate-500">{normalizedLimitText}</span> : null}
      {children}
      {normalizedError ? <span className="text-[11px] leading-4 text-rose-600">{normalizedError}</span> : null}
    </label>
  );
}

export function ToolkitInput({
  label,
  value,
  onChange,
  unit,
  helperText,
  limitText,
  error,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  helperText?: string;
  limitText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <ToolkitField
      label={label}
      helperText={helperText}
      limitText={limitText}
      error={error}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <div
        className={`customer-field user-field input-user user-input flex min-h-[46px] items-center rounded-2xl border px-3.5 py-2.5 shadow-sm transition ${
          error
            ? "border-rose-300 bg-rose-50"
            : "border-slate-300 bg-white hover:border-blue-300 focus-within:border-blue-500 focus-within:bg-blue-50/30 focus-within:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
        }`}
      >
        <input
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.,-]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-2.5 text-xs text-slate-500">{trText(unit)}</span> : null}
      </div>
    </ToolkitField>
  );
}

export function ToolkitSelect({
  label,
  value,
  onChange,
  options,
  helperText,
  limitText,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <ToolkitField
      label={label}
      helperText={helperText}
      limitText={limitText}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="select-user user-field user-select min-h-[46px] rounded-2xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm outline-none transition hover:border-blue-300 focus:border-blue-500 focus:bg-blue-50/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]"
      >
        <option value="">Seçiniz</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {trText(option)}
          </option>
        ))}
      </select>
    </ToolkitField>
  );
}

export function ToolkitReadonly({
  label,
  value,
  helperText = "Hesaba veya standarda göre otomatik gelir",
}: {
  label: string;
  value: string;
  helperText?: string;
}) {
  const normalizedLabel = trText(label);
  const normalizedValue = trText(value);
  const normalizedHelperText = trText(helperText);

  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{normalizedLabel}</span>
      <span className="text-[11px] leading-4 text-slate-500">{normalizedHelperText}</span>
      <div className="readonly-field auto-field min-h-[46px] rounded-2xl border border-slate-200 bg-slate-50/90 px-3.5 py-2.5 text-sm font-medium text-slate-700">
        {normalizedValue}
      </div>
    </div>
  );
}

export function ToolkitResult({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: Severity;
}) {
  const normalizedLabel = trText(label);
  const normalizedValue = trText(value);
  const classes =
    tone === "critical"
      ? "border-rose-100 bg-rose-50"
      : tone === "warning"
        ? "border-amber-100 bg-amber-50"
        : tone === "info"
          ? "border-sky-100 bg-sky-50"
          : "border-slate-200 bg-white";

  return (
    <div className={`rounded-2xl border px-4 py-3.5 ${classes}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{normalizedLabel}</p>
      <p className="mt-1.5 text-base font-semibold text-slate-950">{normalizedValue}</p>
    </div>
  );
}

export function ToolkitInfo({ title, text }: { title: string; text: string }) {
  const normalizedTitle = trText(title);
  const normalizedText = trText(text);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
      <h3 className="text-lg font-semibold text-slate-950">{normalizedTitle}</h3>
      <p className="mt-2.5 text-sm leading-6 text-slate-600">{normalizedText}</p>
    </div>
  );
}

export function ToolkitLead({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const normalizedTitle = trText(title);
  const normalizedText = trText(text);

  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">{normalizedTitle}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{normalizedText}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Teklif Al
        </a>
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  );
}
