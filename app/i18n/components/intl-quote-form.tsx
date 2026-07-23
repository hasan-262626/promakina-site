"use client";

import { useRef, useState } from "react";
import { trackEvent } from "../../(tr)/lib/gtm-events";
import type { IntlLocale } from "../config";
import type { UiDictionary } from "../dictionaries";

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s().-]{8,20}$/;

type IntlQuoteFormProps = {
  locale: IntlLocale;
  dict: UiDictionary;
};

export function IntlQuoteForm({ locale, dict }: IntlQuoteFormProps) {
  const { form } = dict;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("form_start", { form_name: "technical_quote", form_language: locale });
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFileError(null);
    const file = event.target.files?.[0];
    if (!file) return;
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError(form.validation.fileType);
      event.target.value = "";
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError(form.validation.fileSize);
      event.target.value = "";
      return;
    }
    trackEvent("file_upload", { form_name: "technical_quote", form_language: locale });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    setErrorMessage(null);

    const requiredFields = ["fullName", "company", "country", "phone", "email", "machine", "description"];
    for (const field of requiredFields) {
      if (!String(data.get(field) ?? "").trim()) {
        setErrorMessage(form.validation.required);
        return;
      }
    }
    if (!EMAIL_REGEX.test(String(data.get("email")))) {
      setErrorMessage(form.validation.email);
      return;
    }
    if (!PHONE_REGEX.test(String(data.get("phone")))) {
      setErrorMessage(form.validation.phone);
      return;
    }
    if (!data.get("consentPrivacy")) {
      setErrorMessage(form.validation.consent);
      return;
    }

    data.set("formLanguage", locale);
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      if (!response.ok) {
        throw new Error("quote_request_failed");
      }
      setStatus("success");
      trackEvent("form_submit", { form_name: "technical_quote", form_language: locale });
      trackEvent("quote_request", {
        form_name: "technical_quote",
        form_language: locale,
        requested_machine: String(data.get("machine") ?? "").slice(0, 120),
      });
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  // TR iletişim formuyla aynı giriş alanı tasarımı.
  const inputClasses =
    "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25";
  const labelClasses = "mb-1.5 block text-sm font-semibold text-slate-700";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center" role="status">
        <p className="text-lg font-bold text-emerald-800">{form.success}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot — botlara karşı, kullanıcıya görünmez */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-fullName" className={labelClasses}>{form.labels.fullName}</label>
          <input id="qf-fullName" name="fullName" type="text" autoComplete="name" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-company" className={labelClasses}>{form.labels.company}</label>
          <input id="qf-company" name="company" type="text" autoComplete="organization" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-country" className={labelClasses}>{form.labels.country}</label>
          <input id="qf-country" name="country" type="text" autoComplete="country-name" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-city" className={labelClasses}>
            {form.labels.city} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-city" name="city" type="text" autoComplete="address-level2" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelClasses}>{form.labels.phone}</label>
          <input id="qf-phone" name="phone" type="tel" dir="ltr" inputMode="tel" autoComplete="tel" placeholder="+90 5xx xxx xx xx" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-email" className={labelClasses}>{form.labels.email}</label>
          <input id="qf-email" name="email" type="email" dir="ltr" autoComplete="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-contactLanguage" className={labelClasses}>{form.labels.contactLanguage}</label>
          <select id="qf-contactLanguage" name="contactLanguage" className={inputClasses} defaultValue={form.contactLanguageOptions[0]}>
            {form.contactLanguageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-machine" className={labelClasses}>{form.labels.machine}</label>
          <input id="qf-machine" name="machine" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-capacity" className={labelClasses}>
            {form.labels.capacity} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-capacity" name="capacity" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-operatingHours" className={labelClasses}>
            {form.labels.operatingHours} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-operatingHours" name="operatingHours" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-rawMaterial" className={labelClasses}>
            {form.labels.rawMaterial} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-rawMaterial" name="rawMaterial" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-fuelType" className={labelClasses}>
            {form.labels.fuelType} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <select id="qf-fuelType" name="fuelType" className={inputClasses} defaultValue="">
            <option value="">—</option>
            {form.fuelTypeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-inletMoisture" className={labelClasses}>
            {form.labels.inletMoisture} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-inletMoisture" name="inletMoisture" type="text" inputMode="decimal" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-targetMoisture" className={labelClasses}>
            {form.labels.targetMoisture} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-targetMoisture" name="targetMoisture" type="text" inputMode="decimal" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="qf-materialTemperature" className={labelClasses}>
            {form.labels.materialTemperature} <span className="font-normal text-slate-400">({form.optional})</span>
          </label>
          <input id="qf-materialTemperature" name="materialTemperature" type="text" inputMode="decimal" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="qf-description" className={labelClasses}>{form.labels.description}</label>
        <textarea
          id="qf-description"
          name="description"
          rows={5}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
        />
      </div>

      <div>
        <label htmlFor="qf-file" className={labelClasses}>
          {form.labels.file} <span className="font-normal text-slate-400">({form.optional})</span>
        </label>
        <input
          id="qf-file"
          name="file"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.xlsx,.docx"
          onChange={handleFileChange}
          className="block w-full text-sm text-slate-600 file:me-4 file:rounded-full file:border-0 file:bg-[#278DC0]/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#154764]"
        />
        <p className="mt-1.5 text-xs text-slate-500">{form.fileHint}</p>
        {fileError ? <p className="mt-1.5 text-sm font-semibold text-red-600" role="alert">{fileError}</p> : null}
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" name="consentWhatsapp" value="yes" className="mt-1 h-4 w-4 accent-[#278DC0]" />
          {form.consentWhatsapp}
        </label>
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" name="consentPrivacy" value="yes" required className="mt-1 h-4 w-4 accent-[#278DC0]" />
          {form.consentPrivacy}
        </label>
      </div>

      {errorMessage ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {form.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? form.submitting : form.submit}
      </button>
    </form>
  );
}
