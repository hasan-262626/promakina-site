"use client";

import { useMemo, useRef, useState } from "react";
import type { FertilizerSubsolutionConfig } from "./fertilizer-subsolution-config";
import { trText } from "../lib/tr-text";

type Props = {
  title: string;
  config: FertilizerSubsolutionConfig;
};

export function FertilizerSubsolutionForm({ title, config }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(config.formFields.map((field) => [field.id, field.options?.[0] ?? ""])),
  );
  const [common, setCommon] = useState({
    companyName: "",
    fullName: "",
    phone: "",
    email: "",
    location: "",
    requestType: "Teklif Talebi",
    projectStatus: "Yeni Yatırım",
    installationModel: "Anahtar Teslim Tesis",
    message: "",
    consent: false,
  });

  const messageBody = useMemo(() => {
    const rows = [
      `Merhaba, ${trText(title)} için bilgi / teklif talep ediyorum.`,
      "",
      `Firma Adı: ${common.companyName}`,
      `Ad Soyad: ${common.fullName}`,
      `Telefon: ${common.phone}`,
      `E-posta: ${common.email}`,
      common.location ? `Şehir / Ülke: ${common.location}` : "",
      `Talep Türü: ${common.requestType}`,
      `Proje Durumu: ${common.projectStatus}`,
      `Kurulum Modeli: ${common.installationModel}`,
      ...config.formFields.map((field) => {
        const value = values[field.id];
        const suffix = field.unit && value ? ` ${trText(field.unit)}` : "";
        return `${trText(field.label)}: ${value || "-"}${suffix}`;
      }),
      `Mesaj / Teknik Açıklama: ${common.message || "Belirtilmedi"}`,
      "",
      "Bu talebim için dönüş rica ederim.",
    ];

    return rows.filter(Boolean).join("\n");
  }, [common, config.formFields, title, values]);

  function submit(target: "whatsapp" | "mail") {
    if (!formRef.current?.reportValidity() || !common.consent) return;

    if (target === "whatsapp") {
      window.open(`https://wa.me/905380631163?text=${encodeURIComponent(messageBody)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:info@promakina.com.tr?subject=${encodeURIComponent(
      `${trText(title)} - Teklif / Teknik Görüşme`,
    )}&body=${encodeURIComponent(messageBody)}`;
  }

  const commonTextFields = [
    { key: "companyName", label: "Firma Adı", type: "text", required: true },
    { key: "fullName", label: "Ad Soyad", type: "text", required: true },
    { key: "phone", label: "Telefon", type: "tel", required: true },
    { key: "email", label: "E-posta", type: "email", required: true },
    { key: "location", label: "Şehir / Ülke", type: "text", required: false },
  ] as const;

  return (
    <form ref={formRef} className="p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {commonTextFields.map((field) => (
          <label key={field.key} className="space-y-2">
            <span className="text-sm font-semibold text-slate-900">
              {field.label}
              {field.required ? " *" : ""}
            </span>
            <input
              required={field.required}
              type={field.type}
              value={common[field.key]}
              onChange={(event) => setCommon((current) => ({ ...current, [field.key]: event.target.value }))}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
            />
          </label>
        ))}

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Talep Türü *</span>
          <select
            required
            value={common.requestType}
            onChange={(event) => setCommon((current) => ({ ...current, requestType: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
          >
            <option>Teklif Talebi</option>
            <option>Teknik Görüşme Talebi</option>
            <option>Proje Değerlendirme</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Proje Durumu *</span>
          <select
            required
            value={common.projectStatus}
            onChange={(event) => setCommon((current) => ({ ...current, projectStatus: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
          >
            <option>Yeni Yatırım</option>
            <option>Mevcut Tesisi Büyütme</option>
            <option>Revizyon / Modernizasyon</option>
            <option>Fizibilite Aşamasında</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Kurulum Modeli *</span>
          <select
            required
            value={common.installationModel}
            onChange={(event) => setCommon((current) => ({ ...current, installationModel: event.target.value }))}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
          >
            <option>Sadece Makine</option>
            <option>Makine + Proses Danışmanlığı</option>
            <option>Anahtar Teslim Tesis</option>
            <option>Henüz net değil</option>
          </select>
        </label>

        {config.formFields.map((field) => (
          <label key={field.id} className="space-y-2">
            <span className="text-sm font-semibold text-slate-900">
              {trText(field.label)}
              {field.required ? " *" : ""}
            </span>
            {field.type === "select" ? (
              <select
                required={field.required}
                value={values[field.id] ?? ""}
                onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
              >
                {(field.options ?? []).map((option) => (
                  <option key={option}>{trText(option)}</option>
                ))}
              </select>
            ) : field.type === "number" ? (
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="any"
                  required={field.required}
                  value={values[field.id] ?? ""}
                  onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-24 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                />
                {field.unit ? (
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">
                    {trText(field.unit)}
                  </span>
                ) : null}
              </div>
            ) : (
              <input
                type="text"
                required={field.required}
                value={values[field.id] ?? ""}
                onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
              />
            )}
          </label>
        ))}
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Mesaj / Teknik Açıklama</span>
        <textarea
          rows={5}
          value={common.message}
          onChange={(event) => setCommon((current) => ({ ...current, message: event.target.value }))}
          placeholder="Hedef ürün tipi, kapasite, mevcut saha bilgisi ve teknik ihtiyaçlarınızı yazabilirsiniz."
          className="w-full rounded-[28px] border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
        <input
          required
          type="checkbox"
          checked={common.consent}
          onChange={(event) => setCommon((current) => ({ ...current, consent: event.target.checked }))}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
        />
        <span>İletişim bilgilerimin teklif ve teknik değerlendirme amacıyla kullanılmasını kabul ediyorum.</span>
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => submit("whatsapp")}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          WhatsApp'dan Gönder
        </button>
        <button
          type="button"
          onClick={() => submit("mail")}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
        >
          Mail Gönder
        </button>
      </div>
    </form>
  );
}
