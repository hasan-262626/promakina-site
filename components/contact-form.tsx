"use client";

import { useMemo, useState } from "react";
import { createMailtoHref, createWhatsAppHref } from "@/app/lib/site-contact";
import { pushDataLayerEvent, baseEventParams, sanitizeLinkUrl } from "@/app/lib/gtm-events";

type ContactIntent =
  | "Teknik Teklif"
  | "Makine İmalatı"
  | "Proses Tasarımı"
  | "Tesis Kurulumu"
  | "Bakım Servis"
  | "Modernizasyon"
  | "Diğer";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  subject: ContactIntent | "";
  city: string;
  projectNeed: string;
  message: string;
};

const subjectOptions: ContactIntent[] = [
  "Teknik Teklif",
  "Makine İmalatı",
  "Proses Tasarımı",
  "Tesis Kurulumu",
  "Bakım Servis",
  "Modernizasyon",
  "Diğer",
];

const initialForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  city: "",
  projectNeed: "",
  message: "",
};

const requiredMessage =
  "Lütfen Ad Soyad, Firma Adı, Telefon, E-posta, Konu ve Mesaj alanlarını doldurun.";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");

  const hasRequiredFields = useMemo(() => {
    return Boolean(
      form.fullName.trim() &&
        form.company.trim() &&
        form.phone.trim() &&
        form.email.trim() &&
        form.subject.trim() &&
        form.message.trim(),
    );
  }, [form]);

  const messageBody = useMemo(() => {
    return [
      "Merhaba, Pro Makina web sitenizden iletişime geçiyorum.",
      `Ad Soyad: ${form.fullName.trim() || "-"}`,
      `Firma Adı: ${form.company.trim() || "-"}`,
      `Telefon: ${form.phone.trim() || "-"}`,
      `E-posta: ${form.email.trim() || "-"}`,
      `Konu: ${form.subject || "-"}`,
      `Şehir / Ülke: ${form.city.trim() || "-"}`,
      `Proje veya Makine İhtiyacı: ${form.projectNeed.trim() || "-"}`,
      `Mesaj: ${form.message.trim() || "-"}`,
    ].join("\n");
  }, [form]);

  const whatsappHref = useMemo(() => createWhatsAppHref(messageBody), [messageBody]);
  const emailHref = useMemo(
    () => createMailtoHref("İletişim Formu Mesajı", messageBody),
    [messageBody],
  );

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (error) {
      setError("");
    }
  }

  function validateBeforeExit() {
    if (!hasRequiredFields) {
      setError(requiredMessage);
      return false;
    }

    setError("");
    return true;
  }

  function handleWhatsAppClick() {
    if (!validateBeforeExit()) {
      return;
    }

    // Kişisel veri (ad, telefon, mesaj) event parametresi olarak GÖNDERİLMEZ;
    // link_url query'siz temizlenmiş halidir.
    pushDataLayerEvent("whatsapp_click", {
      ...baseEventParams(),
      cta_label: "Mesajı Gönder",
      cta_location: "contact_form",
      link_url: sanitizeLinkUrl(whatsappHref),
    });
    pushDataLayerEvent("contact_form_submit", {
      ...baseEventParams(),
      submit_method: "whatsapp",
      request_type: form.subject,
      cta_location: "contact_form",
    });

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  function handleEmailClick() {
    if (!validateBeforeExit()) {
      return;
    }

    pushDataLayerEvent("email_click", {
      ...baseEventParams(),
      cta_label: "E-posta ile Gönder",
      cta_location: "contact_form",
      link_url: sanitizeLinkUrl(emailHref),
    });
    pushDataLayerEvent("contact_form_submit", {
      ...baseEventParams(),
      submit_method: "email",
      request_type: form.subject,
      cta_location: "contact_form",
    });

    window.location.href = emailHref;
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
          Profesyonel İletişim Formu
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Talebinizi doğrudan bize iletin
        </h2>
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
          Proje konunuzu, makine ihtiyacınızı veya genel teknik talebinizi paylaşın.
          Dilerseniz mesajınızı doğrudan WhatsApp üzerinden iletebilir ya da{" "}
          <a
            href="mailto:info@promakina.com.tr"
            className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
          >
            info@promakina.com.tr
          </a>{" "}
          adresine e-posta gönderebilirsiniz.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Ad Soyad *</span>
          <input
            type="text"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Adınız ve soyadınız"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Firma Adı *</span>
          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Firma adınız"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Telefon *</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+90 5xx xxx xx xx"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">E-posta *</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="ornek@firma.com"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Konu *</span>
          <select
            value={form.subject}
            onChange={(event) =>
              updateField("subject", event.target.value as FormState["subject"])
            }
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          >
            <option value="">Seçiniz</option>
            {subjectOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Şehir / Ülke</span>
          <input
            type="text"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Örn. Eskişehir / Türkiye"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-slate-900">
            Proje veya Makine İhtiyacı
          </span>
          <input
            type="text"
            value={form.projectNeed}
            onChange={(event) => updateField("projectNeed", event.target.value)}
            placeholder="Makine adı, proje konusu veya ihtiyacınızı kısa yazabilirsiniz"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Mesaj *</span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Talebinizi, proje konunuzu veya teknik beklentinizi kısaca yazabilirsiniz."
          className="min-h-[160px] w-full rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
        />
      </label>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
        Paylaştığınız bilgiler yalnızca iletişim ve teknik değerlendirme amacıyla
        kullanılacaktır.
      </div>

      {error ? (
        <div className="mt-4 rounded-2xl border border-[#278DC0]/20 bg-[#278DC0]/10 px-4 py-3 text-sm font-medium text-[#278DC0]">
          {error}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Mesajı Gönder
        </button>
        <button
          type="button"
          onClick={handleEmailClick}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:border-[#278DC0] hover:bg-[#278DC0]/5"
        >
          E-posta ile Gönder
        </button>
      </div>
    </div>
  );
}
