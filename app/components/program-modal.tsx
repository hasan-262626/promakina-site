"use client";

import { useEffect, useMemo, useState } from "react";
import { trText } from "../lib/tr-text";
import { ProgramActionFooter } from "./program-action-footer";
import { ProgramFormFields } from "./program-form-fields";
import {
  buildShareSummary,
  customerInfoFields,
  getProgramModalConfig,
  type ProgramModalOutput,
  type ProgramModalValues,
  validateCustomerInfo,
} from "./program-modal-config";
import {
  calculateScrewConveyor,
  getScrewConveyorModalConfig,
  validateScrewConveyor,
} from "./screw-conveyor-modal-config";
import { ProgramResultSection } from "./program-result-section";

type ProgramModalProps = {
  slug: string;
  onClose: () => void;
};

const SCREW_SLUG = "helezon-kapasite-ve-mekanik-secim-programi";

export function ProgramModal({ slug, onClose }: ProgramModalProps) {
  const config = useMemo(
    () => (slug === SCREW_SLUG ? getScrewConveyorModalConfig() : getProgramModalConfig(slug)),
    [slug],
  );
  const [customerValues, setCustomerValues] = useState<ProgramModalValues>({});
  const [customerErrors, setCustomerErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState<ProgramModalValues>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<ProgramModalOutput | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    setValues(config?.initialValues ?? {});
    setCustomerValues({});
    setCustomerErrors({});
    setErrors({});
    setOutput(null);
  }, [config, slug]);

  if (!config) {
    return null;
  }

  const isScrewModal = slug === SCREW_SLUG;
  const activeCustomerFields = config.customerFields ?? customerInfoFields;
  const dynamicFields = config.fields(values);
  const commentPreview = config.buildComments(values);

  const handleCustomerChange = (fieldId: string, value: string) => {
    setCustomerValues((current) => ({ ...current, [fieldId]: value }));
    setCustomerErrors((current) => ({ ...current, [fieldId]: "" }));
  };

  const handleFieldChange = (fieldId: string, value: string) => {
    setValues((current) => {
      const nextValues = { ...current, [fieldId]: value };
      if (!config.syncValues) {
        return nextValues;
      }

      const syncedValues = config.syncValues(fieldId, value, { ...nextValues });
      return { ...current, ...syncedValues, [fieldId]: value };
    });
    setErrors((current) => ({ ...current, [fieldId]: "" }));
    setOutput(null);
  };

  const handleSubmit = () => {
    if (isScrewModal) {
      const screwValidation = validateScrewConveyor(customerValues, values);
      setCustomerErrors(screwValidation.customerErrors);
      setErrors(screwValidation.fieldErrors);

      if (
        Object.keys(screwValidation.customerErrors).length > 0 ||
        Object.keys(screwValidation.fieldErrors).length > 0
      ) {
        setOutput(null);
        return;
      }

      setOutput(calculateScrewConveyor(customerValues, values));
      return;
    }

    const nextCustomerErrors = validateCustomerInfo(customerValues);
    const nextErrors = config.validate(values);
    setCustomerErrors(nextCustomerErrors);
    setErrors(nextErrors);

    if (Object.keys(nextCustomerErrors).length > 0 || Object.keys(nextErrors).length > 0) {
      setOutput(null);
      return;
    }

    setOutput(config.calculate(values));
  };

  const shareSummary = output
    ? isScrewModal
      ? [
          `Program: ${config.title}`,
          `Firma: ${customerValues.company || "-"}`,
          `Telefon: ${customerValues.phone || "-"}`,
          `Tarih: ${new Date().toLocaleDateString("tr-TR")}`,
          "",
          "Girilen Veriler",
          `Kapasite: ${values.capacity || "-"} ton/saat`,
          `Ürün / malzeme: ${
            dynamicFields.find((field) => field.id === "product")?.options?.find(
              (option) => option.value === values.product,
            )?.label || "-"
          }`,
          `Helezon tipi: ${values.screwType || "-"}`,
          `Toplam helezon boyu: ${values.length || "-"} metre`,
          `Toplam eğim yüksekliği: ${values.liftHeight || "-"} metre`,
          `Doluluk oranı: ${values.fillRatio ? `%${values.fillRatio}` : "-"}`,
          `Güvenlik payı: ${values.safetyMargin ? `%${values.safetyMargin}` : "-"}`,
          `Çalışma süresi: ${values.workDuration || "-"}`,
          `Nem durumu: ${values.moistureState || "-"}`,
          `Ürün davranışı: ${values.flowCharacter || "-"}`,
          `Korozyon durumu: ${values.corrosionLevel || "-"}`,
          "",
          "Sonuçlar",
          ...output.cards.map((card) => `${card.label}: ${card.value}`),
          ...(output.comments.length ? ["", "Sistem Yorumu", ...output.comments] : []),
          ...(output.warnings.length ? ["", "Uyarılar", ...output.warnings] : []),
        ].join("\n")
      : buildShareSummary({
          config,
          customerValues,
          values,
          output,
        })
    : "";

  const handleWhatsApp = () => {
    if (!output || typeof window === "undefined") return;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareSummary)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleMail = () => {
    if (!output || typeof window === "undefined") return;

    window.open(
      `mailto:?subject=${encodeURIComponent(config.title)}&body=${encodeURIComponent(shareSummary)}`,
      "_self",
    );
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label={trText("Modalı kapat")}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px]"
      />

      <div className="relative z-[121] flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="select-none text-[clamp(3.5rem,10vw,8rem)] font-black uppercase tracking-[0.3em] text-sky-950/[0.06]">
            PRO MAKİNA
          </span>
        </div>

        <div className="relative border-b border-slate-200 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {trText(config.categoryLabel)}
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {trText(config.title)}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                {trText(config.intro)}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
            >
              {trText("Kapat")}
            </button>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {trText("Müşteri Bilgileri")}
              </div>
              <div className="mt-4">
                <ProgramFormFields
                  fields={activeCustomerFields}
                  values={customerValues}
                  errors={customerErrors}
                  onChange={handleCustomerChange}
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {trText("Programa Özel Alanlar")}
              </div>
              <div className="mt-4">
                <ProgramFormFields
                  fields={dynamicFields}
                  values={values}
                  errors={errors}
                  onChange={handleFieldChange}
                />
              </div>
            </div>

            <ProgramResultSection output={output} commentPreview={commentPreview} />

            {output ? (
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {trText("Teklif Al")}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    {trText("WhatsApp’dan teklif al")}
                  </button>
                  <button
                    type="button"
                    onClick={handleMail}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    {trText("Mail ile teklif al")}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <ProgramActionFooter
          submitLabel={config.submitLabel}
          onCancel={onClose}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
