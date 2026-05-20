"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  drumMaterialOptions,
  type DrumCalculatorTool,
  type DrumFieldConfig,
  type DrumSelectOption,
} from "../lib/drum-calculator-data";
import {
  calculateDrumTool,
  validateDrumCalculator,
  type DrumCalculationResult,
  type DrumWarningTone,
} from "../lib/drum-calculator-utils";

const warningToneClasses: Record<
  DrumWarningTone,
  { card: string; badge: string; text: string }
> = {
  success: {
    card: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-600 text-white",
    text: "text-emerald-900",
  },
  warning: {
    card: "border-amber-200 bg-amber-50",
    badge: "bg-amber-500 text-white",
    text: "text-amber-900",
  },
  danger: {
    card: "border-red-200 bg-red-50",
    badge: "bg-red-600 text-white",
    text: "text-red-900",
  },
};

function getSelectedReference(field: DrumFieldConfig, value: string | undefined) {
  if (field.type !== "select" || !field.options || !value) return null;
  return field.options.find((option) => option.value === value)?.reference ?? null;
}

function findOptionLabel(options: DrumSelectOption[], value: string | undefined) {
  return options.find((option) => option.value === value)?.label ?? value ?? "-";
}

function SelectWithReference({
  field,
  value,
  onChange,
  error,
}: {
  field: DrumFieldConfig;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const reference = getSelectedReference(field, value);

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-900">{field.label}</span>
      {field.helperText ? (
        <span className="mt-1 block text-xs leading-6 text-slate-500">{field.helperText}</span>
      ) : null}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-3 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/20 ${
          error ? "border-red-300" : "border-slate-200"
        }`}
      >
        <option value="">Secim yapin</option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {reference ? (
        <span className="mt-2 block rounded-2xl border border-[#278DC0]/15 bg-[#278DC0]/8 px-3 py-2 text-xs leading-6 text-[#154764]">
          Referans: {reference}
        </span>
      ) : null}
      {error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

function InputField({
  field,
  value,
  onChange,
  error,
}: {
  field: DrumFieldConfig;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-900">{field.label}</span>
      {field.helperText ? (
        <span className="mt-1 block text-xs leading-6 text-slate-500">{field.helperText}</span>
      ) : null}
      <input
        value={value}
        min={field.min}
        max={field.max}
        step={field.step ?? 0.01}
        type="number"
        onChange={(event) => onChange(event.target.value)}
        placeholder={field.placeholder}
        className={`mt-3 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-4 focus:ring-[#278DC0]/20 ${
          error ? "border-red-300" : "border-slate-200"
        }`}
      />
      {error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

function ResultCard({
  label,
  value,
  tone = "success",
}: DrumCalculationResult["cards"][number]) {
  const classes = warningToneClasses[tone];

  return (
    <div className={`rounded-[22px] border p-4 ${classes.card}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <p className={`mt-2 text-xl font-semibold ${classes.text}`}>{value}</p>
    </div>
  );
}

function WarningCard({
  tone,
  title,
  description,
}: DrumCalculationResult["warnings"][number]) {
  const classes = warningToneClasses[tone];

  return (
    <div className={`rounded-[22px] border p-4 ${classes.card}`}>
      <span
        className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${classes.badge}`}
      >
        {tone === "success" ? "Uygun" : tone === "warning" ? "Dikkat" : "Risk"}
      </span>
      <h3 className={`mt-3 text-base font-semibold ${classes.text}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-7 ${classes.text}`}>{description}</p>
    </div>
  );
}

function EngineeringTable({ result }: { result: DrumCalculationResult }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        Teknik Degerlendirme Tablosu
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
        Her girdi, yalniz sayisal sonucu degil; tasarim, mekanik secim ve saha davranisini
        da etkiler. Asagidaki tablo sonucunuzu bu baglamda ozetler.
      </p>

      <div className="mt-8 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
        <table className="w-full table-fixed border-collapse bg-white text-left">
          <thead className="bg-slate-50">
            <tr className="text-sm font-semibold text-slate-950">
              <th className="w-[22%] px-5 py-4">Girdi</th>
              <th className="w-[24%] px-5 py-4">Kullanilan Deger</th>
              <th className="w-[27%] px-5 py-4">Sonuca Etkisi</th>
              <th className="w-[27%] px-5 py-4">Dikkat Edilecek Nokta</th>
            </tr>
          </thead>
          <tbody>
            {result.tableRows.map((row) => (
              <tr key={row.input} className="border-t border-slate-200 align-top">
                <td className="px-5 py-4 text-sm font-semibold text-slate-950">{row.input}</td>
                <td className="px-5 py-4 text-sm leading-7 text-slate-600">{row.value}</td>
                <td className="px-5 py-4 text-sm leading-7 text-slate-600">{row.impact}</td>
                <td className="px-5 py-4 text-sm leading-7 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:hidden">
        {result.tableRows.map((row) => (
          <div
            key={row.input}
            className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-950">{row.input}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              <span className="font-semibold text-slate-950">Kullanilan deger:</span> {row.value}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              <span className="font-semibold text-slate-950">Sonuca etkisi:</span> {row.impact}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              <span className="font-semibold text-slate-950">Not:</span> {row.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DrumCalculatorPage({ tool }: { tool: DrumCalculatorTool }) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(tool.fields.map((field) => [field.id, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<DrumCalculationResult | null>(null);

  const selectedMaterialLabel = useMemo(
    () => findOptionLabel(drumMaterialOptions, values.materialType),
    [values.materialType],
  );

  const handleFieldChange = (fieldId: string, nextValue: string) => {
    setValues((current) => ({
      ...current,
      [fieldId]: nextValue,
    }));
    setErrors((current) => {
      if (!current[fieldId]) return current;
      const nextErrors = { ...current };
      delete nextErrors[fieldId];
      return nextErrors;
    });
  };

  const handleCalculate = () => {
    const nextErrors = validateDrumCalculator(tool, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setResult(null);
      return;
    }
    setResult(calculateDrumTool(tool.slug, values));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#0B0F14] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(39,141,192,0.26),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(21,71,100,0.36),transparent_34%)]" />
        <div className="site-container relative py-14 sm:py-16 lg:py-18">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/76">
              Tambur Hesaplari
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {tool.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-white/84 sm:text-lg">
              {tool.heroDescription}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#hesaplamaya-basla"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0] hover:text-white"
              >
                Hesaplamaya Basla
              </a>
              <Link
                href={tool.relatedBlogHref}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                {tool.relatedBlogLabel}
              </Link>
              <Link
                href={tool.relatedServiceHref}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                {tool.relatedServiceLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="hesaplamaya-basla">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                  {tool.inputTitle}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Hesaplamaya girdi olacak teknik verileri secin
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Mümkün olduğunca seçmeli ilerleyin; sayısal alanlara yalnız teknik verileri
                  girin. Yaptığınız seçimler diğer alanları sıfırlamaz.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {tool.fields.map((field) =>
                  field.type === "select" ? (
                    <SelectWithReference
                      key={field.id}
                      field={field}
                      value={values[field.id] ?? ""}
                      onChange={(nextValue) => handleFieldChange(field.id, nextValue)}
                      error={errors[field.id]}
                    />
                  ) : (
                    <InputField
                      key={field.id}
                      field={field}
                      value={values[field.id] ?? ""}
                      onChange={(nextValue) => handleFieldChange(field.id, nextValue)}
                      error={errors[field.id]}
                    />
                  ),
                )}
              </div>

              {selectedMaterialLabel !== "-" ? (
                <div className="mt-6 rounded-[22px] border border-[#278DC0]/16 bg-[#278DC0]/8 p-4">
                  <p className="text-sm font-semibold text-[#154764]">
                    Secili urun: {selectedMaterialLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Referans yogunluk ve nem araliklarini alan bazinda gormek icin ilgili
                    secimlerin altindaki bilgi kartlarini kullanabilirsiniz.
                  </p>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
                >
                  Hesapla
                </button>
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#278DC0] bg-white px-7 text-sm font-semibold text-[#278DC0] transition hover:bg-[#154764] hover:text-white"
                >
                  Teknik Destek Al
                </Link>
              </div>
            </section>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
                  {tool.resultTitle}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Sayisal sonuc + muhendislik yorumu
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Bu panel on tasarim seviyesinde bir degerlendirme verir. Kesin proje hesabi
                  yerine gecmez; teklif ve ön muhendislik icin hizli okuma saglar.
                </p>

                {result ? (
                  <>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {result.cards.map((card) => (
                        <ResultCard key={card.label} {...card} />
                      ))}
                    </div>

                    <div className="mt-6 space-y-3">
                      {result.warnings.map((warning) => (
                        <WarningCard key={`${warning.tone}-${warning.title}`} {...warning} />
                      ))}
                    </div>

                    <div className="mt-6 rounded-[22px] border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-base font-semibold text-slate-950">
                        Muhendislik yorumu
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {result.commentary}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="mt-8 rounded-[22px] border border-dashed border-slate-300 bg-slate-50 p-6">
                    <p className="text-base font-semibold text-slate-900">
                      Sonuc paneli burada olusacak
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Form alanlarini doldurup Hesapla butonuna bastiginizda hesaplanan degerler,
                      uyarilar ve teknik yorum bu panelde gosterilecek.
                    </p>
                  </div>
                )}
              </section>
            </aside>
          </div>
        </div>
      </section>

      {result ? (
        <section className="pb-10 sm:pb-14">
          <div className="site-container">
            <EngineeringTable result={result} />
          </div>
        </section>
      ) : null}

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[30px] bg-[#0B0F14] p-6 text-white shadow-[0_24px_64px_rgba(11,15,20,0.22)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
              Pro Makina / Tambur Hesaplari
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Bu tambur icin proje teklifi alin
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/84">
              Kullandiginiz girdileri, urun davranisini ve saha kosullarinizi bizimle paylasin;
              kapasite, tahrik, fan, siklon ve brulor yaklasimini birlikte netlestirelim.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-7 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                Teknik Gorusme Talep Et
              </Link>
              <a
                href="https://wa.me/905320580104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                WhatsApp ile Gorus
              </a>
              <Link
                href={tool.relatedServiceHref}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white px-7 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0] hover:text-white"
              >
                {tool.relatedServiceLabel}
              </Link>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Bu hesaplama on tasarim ve kapasite degerlendirmesi icindir. Kesin makine secimi
              icin urun numunesi, proses sartlari, saha yerlesimi, sicaklik degerleri, hava
              debisi ve detay muhendislik birlikte degerlendirilmelidir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
