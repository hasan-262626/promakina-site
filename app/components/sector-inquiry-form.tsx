"use client";

import { useMemo, useRef, useState } from "react";
import type { SectorFormField } from "./sector-experience-config";
import { trText } from "../lib/tr-text";

type SectorInquiryFormProps = {
  sectorTitle: string;
  config: {
    formFields: SectorFormField[];
    messagePlaceholder: string;
  };
};

type CommonState = {
  companyName: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  requestType: string;
  projectStatus: string;
  automationLevel: string;
  installationModel: string;
  message: string;
  consent: boolean;
};

const commonInitialState: CommonState = {
  companyName: "",
  fullName: "",
  phone: "",
  email: "",
  location: "",
  requestType: "Teklif Talebi",
  projectStatus: "Yeni yatırım",
  automationLevel: "Henüz net değil",
  installationModel: "Henüz net değil",
  message: "",
  consent: false,
};

function buildInitialDynamicState(config: SectorInquiryFormProps["config"]) {
  return Object.fromEntries(
    config.formFields.map((field) => [field.id, field.type === "select" ? field.options?.[0] ?? "" : ""]),
  );
}

export function SectorInquiryForm({ sectorTitle, config }: SectorInquiryFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [commonState, setCommonState] = useState<CommonState>(commonInitialState);
  const [dynamicState, setDynamicState] = useState<Record<string, string>>(() => buildInitialDynamicState(config));

  const allMessageLines = useMemo(() => {
    const lines = [
      `Merhaba, ${trText(sectorTitle)} için bilgi / teklif talep ediyorum.`,
      "",
      `Firma Adı: ${commonState.companyName}`,
      `Ad Soyad: ${commonState.fullName}`,
      `Telefon: ${commonState.phone}`,
      `E-posta: ${commonState.email}`,
      commonState.location ? `Şehir / Ülke: ${commonState.location}` : "",
      `Talep Türü: ${commonState.requestType}`,
    ];

    for (const field of config.formFields) {
      const value = dynamicState[field.id];
      lines.push(`${trText(field.label)}: ${value || "-"}`);
    }

    lines.push(
      `Proje Durumu: ${commonState.projectStatus}`,
      `Otomasyon Seviyesi: ${commonState.automationLevel}`,
      `Kurulum Modeli: ${commonState.installationModel}`,
      `Mesaj / Teknik Açıklama: ${commonState.message || "Belirtilmedi"}`,
      "",
      "Bu talebim için teknik değerlendirme ve dönüş rica ederim.",
    );

    return lines.filter(Boolean).join("\n");
  }, [commonState, config.formFields, dynamicState, sectorTitle]);

  function submitTo(target: "whatsapp" | "mail") {
    if (!formRef.current?.reportValidity() || !commonState.consent) return;

    if (target === "whatsapp") {
      window.open(`https://wa.me/905380631163?text=${encodeURIComponent(allMessageLines)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:info@promakina.com.tr?subject=${encodeURIComponent(
      `${trText(sectorTitle)} - Teklif / Teknik Görüşme`,
    )}&body=${encodeURIComponent(allMessageLines)}`;
  }

  return (
    <form ref={formRef} className="p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Firma Adı *</span>
          <input required type="text" value={commonState.companyName} onChange={(event) => setCommonState((current) => ({ ...current, companyName: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Ad Soyad *</span>
          <input required type="text" value={commonState.fullName} onChange={(event) => setCommonState((current) => ({ ...current, fullName: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Telefon *</span>
          <input required type="tel" value={commonState.phone} onChange={(event) => setCommonState((current) => ({ ...current, phone: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">E-posta *</span>
          <input required type="email" value={commonState.email} onChange={(event) => setCommonState((current) => ({ ...current, email: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Şehir / Ülke</span>
          <input type="text" value={commonState.location} onChange={(event) => setCommonState((current) => ({ ...current, location: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Talep Türü *</span>
          <select required value={commonState.requestType} onChange={(event) => setCommonState((current) => ({ ...current, requestType: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">
            <option>Teklif Talebi</option>
            <option>Teknik Görüşme Talebi</option>
            <option>Proje Değerlendirme</option>
            <option>Mevcut Tesisi Revize Etmek İstiyorum</option>
          </select>
        </label>

        {config.formFields.map((field) => (
          <label key={field.id} className="space-y-2">
            <span className="text-sm font-semibold text-slate-900">
              {trText(field.label)}
              {field.required ? " *" : ""}
            </span>
            {field.type === "select" ? (
              <select required={field.required} value={dynamicState[field.id] ?? ""} onChange={(event) => setDynamicState((current) => ({ ...current, [field.id]: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">
                {(field.options ?? []).map((option) => (
                  <option key={option}>{trText(option)}</option>
                ))}
              </select>
            ) : field.type === "number" ? (
              <div className="relative">
                <input required={field.required} type="number" min="0" step="any" value={dynamicState[field.id] ?? ""} onChange={(event) => setDynamicState((current) => ({ ...current, [field.id]: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-24 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
                {field.unit ? <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">{trText(field.unit)}</span> : null}
              </div>
            ) : (
              <input required={field.required} type="text" value={dynamicState[field.id] ?? ""} onChange={(event) => setDynamicState((current) => ({ ...current, [field.id]: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" />
            )}
          </label>
        ))}

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Proje Durumu *</span>
          <select required value={commonState.projectStatus} onChange={(event) => setCommonState((current) => ({ ...current, projectStatus: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">
            <option>Yeni yatırım</option>
            <option>Mevcut tesisi büyütme</option>
            <option>Revizyon / modernizasyon</option>
            <option>Fizibilite aşamasında</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Otomasyon Seviyesi *</span>
          <select required value={commonState.automationLevel} onChange={(event) => setCommonState((current) => ({ ...current, automationLevel: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">
            <option>Yarı Otomatik</option>
            <option>Tam Otomatik</option>
            <option>Henüz net değil</option>
          </select>
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-slate-900">Kurulum Modeli *</span>
          <select required value={commonState.installationModel} onChange={(event) => setCommonState((current) => ({ ...current, installationModel: event.target.value }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">
            <option>Sadece Makine</option>
            <option>Makine + Proses Danışmanlığı</option>
            <option>Anahtar Teslim Tesis</option>
            <option>Henüz net değil</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Mesaj / Teknik Açıklama</span>
        <textarea rows={5} value={commonState.message} onChange={(event) => setCommonState((current) => ({ ...current, message: event.target.value }))} className="w-full rounded-[28px] border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" placeholder={trText(config.messagePlaceholder)} />
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
        <input required type="checkbox" checked={commonState.consent} onChange={(event) => setCommonState((current) => ({ ...current, consent: event.target.checked }))} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500" />
        <span>İletişim bilgilerimin teklif ve teknik değerlendirme amacıyla kullanılmasını kabul ediyorum.</span>
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => submitTo("whatsapp")} className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700">
          WhatsApp'dan Gönder
        </button>
        <button type="button" onClick={() => submitTo("mail")} className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700">
          Mail Gönder
        </button>
      </div>
    </form>
  );
}
