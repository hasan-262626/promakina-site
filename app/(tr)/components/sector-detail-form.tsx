"use client";

import { useMemo, useRef, useState } from "react";
import { createMailtoHref, createWhatsAppHref } from "../lib/site-contact";
import type { SectorDetailUi, SectorFormProfileText } from "../../i18n/sector-details/types";

type SectorDetailFormProps = {
  ui: SectorDetailUi["form"];
  profile: SectorFormProfileText;
  title: string;
  description: string;
  pageTitle: string;
  sectorLabel: string;
  products: { value: string; label: string }[];
  initialProduct: string;
};

const inputClass =
  "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-blue-600" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{children}</p>
    </div>
  );
}

/** Sektör alt çözüm sayfalarının teklif formu; tüm metinler sayfanın dilinden gelir. */
export function SectorDetailForm({
  ui,
  profile,
  title,
  description,
  pageTitle,
  sectorLabel,
  products,
  initialProduct,
}: SectorDetailFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [contact, setContact] = useState({ company: "", fullName: "", phone: "", email: "", location: "" });
  const [request, setRequest] = useState({
    requestType: ui.requestTypes[0],
    product: initialProduct,
    capacity: "",
    projectStatus: ui.projectStatuses[0],
  });
  const [technical, setTechnical] = useState<Record<string, string>>(() =>
    Object.fromEntries(profile.fields.map((field) => [field.id, field.type === "select" ? field.options?.[0] ?? "" : ""])),
  );
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const productLabel = products.find((item) => item.value === request.product)?.label ?? "";

  const messageBody = useMemo(
    () =>
      [
        ui.messageHeading,
        "",
        `${ui.pageLabel}: ${pageTitle}`,
        "",
        `${ui.contactSection}:`,
        `${ui.company}: ${contact.company}`,
        `${ui.fullName}: ${contact.fullName}`,
        `${ui.phone}: ${contact.phone}`,
        `${ui.email}: ${contact.email}`,
        `${ui.location}: ${contact.location || "-"}`,
        "",
        `${ui.requestSection}:`,
        `${ui.requestType}: ${request.requestType}`,
        `${ui.sector}: ${sectorLabel}`,
        `${ui.product}: ${productLabel}`,
        `${profile.capacity.label}: ${request.capacity ? `${request.capacity} ${profile.capacity.unit}` : "-"}`,
        `${ui.projectStatus}: ${request.projectStatus}`,
        "",
        `${ui.technicalSection}:`,
        ...profile.fields.map((field) => `${field.label}: ${technical[field.id] || "-"}`),
        "",
        `${ui.message}:`,
        message || "-",
      ].join("\n"),
    [contact, message, pageTitle, productLabel, profile, request, sectorLabel, technical, ui],
  );

  function submitTo(target: "whatsapp" | "mail") {
    if (!formRef.current?.reportValidity() || !consent) return;
    if (target === "whatsapp") {
      window.open(createWhatsAppHref(messageBody), "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = createMailtoHref(`${pageTitle} - ${ui.mailSubjectSuffix}`, messageBody);
  }

  const contactFields = [
    { id: "company", label: `${ui.company} *`, type: "text", required: true },
    { id: "fullName", label: `${ui.fullName} *`, type: "text", required: true },
    { id: "phone", label: `${ui.phone} *`, type: "tel", required: true },
    { id: "email", label: `${ui.email} *`, type: "email", required: true },
    { id: "location", label: ui.location, type: "text", required: false },
  ] as const;

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{ui.eyebrow}</p>
        <h2 className="mt-3 max-w-5xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
      </div>

      <form ref={formRef} className="px-6 py-6 sm:px-8 sm:py-8">
        <div className="space-y-7">
          <section>
            <SectionLabel>{ui.contactSection}</SectionLabel>
            <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {contactFields.map((field) => (
                <label key={field.id} className="space-y-2">
                  <span className="text-sm font-semibold text-slate-900">{field.label}</span>
                  <input
                    required={field.required}
                    type={field.type}
                    value={contact[field.id]}
                    onChange={(event) => setContact((current) => ({ ...current, [field.id]: event.target.value }))}
                    className={inputClass}
                  />
                </label>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>{ui.requestSection}</SectionLabel>
            <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{ui.requestType} *</span>
                <select
                  required
                  value={request.requestType}
                  onChange={(event) => setRequest((current) => ({ ...current, requestType: event.target.value }))}
                  className={inputClass}
                >
                  {ui.requestTypes.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{ui.sector}</span>
                <input readOnly value={sectorLabel} className={`${inputClass} cursor-default bg-slate-50 text-slate-600`} />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{ui.product} *</span>
                <select
                  required
                  value={request.product}
                  onChange={(event) => setRequest((current) => ({ ...current, product: event.target.value }))}
                  className={inputClass}
                >
                  {products.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{profile.capacity.label}</span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={request.capacity}
                    onChange={(event) => setRequest((current) => ({ ...current, capacity: event.target.value }))}
                    placeholder={profile.capacity.placeholder}
                    className={`${inputClass} pe-20`}
                  />
                  <span className="pointer-events-none absolute inset-y-0 end-4 flex items-center text-xs font-semibold text-slate-500">
                    {profile.capacity.unit}
                  </span>
                </div>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{ui.projectStatus} *</span>
                <select
                  required
                  value={request.projectStatus}
                  onChange={(event) => setRequest((current) => ({ ...current, projectStatus: event.target.value }))}
                  className={inputClass}
                >
                  {ui.projectStatuses.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section>
            <SectionLabel>{ui.technicalSection}</SectionLabel>
            <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {profile.fields.map((field) => (
                <label key={field.id} className={`space-y-2 ${field.span === 2 ? "xl:col-span-2" : ""}`}>
                  <span className="text-sm font-semibold text-slate-900">{field.label}</span>
                  {field.type === "select" ? (
                    <select
                      value={technical[field.id] ?? ""}
                      onChange={(event) => setTechnical((current) => ({ ...current, [field.id]: event.target.value }))}
                      className={inputClass}
                    >
                      {(field.options ?? []).map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={technical[field.id] ?? ""}
                      onChange={(event) => setTechnical((current) => ({ ...current, [field.id]: event.target.value }))}
                      placeholder={field.placeholder}
                      className={inputClass}
                    />
                  )}
                </label>
              ))}
            </div>
          </section>

          <section>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-900">{ui.message}</span>
              <textarea
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={ui.messagePlaceholder}
                className="min-h-[144px] w-full rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </section>

          <section className="border-t border-slate-200 pt-5">
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              <input
                required
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              <span>{ui.consent}</span>
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => submitTo("whatsapp")}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                {ui.whatsapp}
              </button>
              <button
                type="button"
                onClick={() => submitTo("mail")}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
              >
                {ui.mail}
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
