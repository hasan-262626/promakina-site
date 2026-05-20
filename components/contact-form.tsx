"use client";

import { useMemo, useState } from "react";
import { createMailtoHref, createWhatsAppHref } from "@/app/lib/site-contact";
import { pushDataLayerEvent } from "@/app/lib/gtm-events";

type ContactIntent =
  | "Teknik teklif almak istiyorum"
  | "Makine fiyati almak istiyorum"
  | "Tesis kurulumu hakkinda gorusmek istiyorum"
  | "Mevcut tesis icin revizyon / modernizasyon istiyorum"
  | "Servis / bakim talebim var"
  | "Genel bilgi almak istiyorum";

type ContactFocus =
  | "Gubre tesisi"
  | "Sivi gubre uretim tesisi"
  | "Kompost tesisi"
  | "Biyogaz / digestat hatti"
  | "Kurutma tamburu"
  | "Helezon konveyor"
  | "Bant konveyor"
  | "Kovali elevator"
  | "Kirici / shredder"
  | "Reaktor ve tank sistemleri"
  | "Maden / mineral isleme"
  | "Paketleme ve dolum sistemleri"
  | "Diger";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  requestType: ContactIntent | "";
  interestArea: ContactFocus | "";
  capacity: string;
  city: string;
  message: string;
};

const requestTypes: ContactIntent[] = [
  "Teknik teklif almak istiyorum",
  "Makine fiyati almak istiyorum",
  "Tesis kurulumu hakkinda gorusmek istiyorum",
  "Mevcut tesis icin revizyon / modernizasyon istiyorum",
  "Servis / bakim talebim var",
  "Genel bilgi almak istiyorum",
];

const interestAreas: ContactFocus[] = [
  "Gubre tesisi",
  "Sivi gubre uretim tesisi",
  "Kompost tesisi",
  "Biyogaz / digestat hatti",
  "Kurutma tamburu",
  "Helezon konveyor",
  "Bant konveyor",
  "Kovali elevator",
  "Kirici / shredder",
  "Reaktor ve tank sistemleri",
  "Maden / mineral isleme",
  "Paketleme ve dolum sistemleri",
  "Diger",
];

const initialForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  requestType: "",
  interestArea: "",
  capacity: "",
  city: "",
  message: "",
};

const requiredMessage =
  "Lutfen Ad Soyad, Telefon, Talep Turu ve Ilgilendiginiz Alan alanlarini doldurun.";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");

  const hasRequiredFields = useMemo(() => {
    return Boolean(
      form.fullName.trim() &&
        form.phone.trim() &&
        form.requestType.trim() &&
        form.interestArea.trim(),
    );
  }, [form]);

  const messageBody = useMemo(() => {
    return [
      "Merhaba, Pro Makina web sitenizden ulasiyorum.",
      `Ad Soyad: ${form.fullName.trim() || "-"}`,
      `Firma: ${form.company.trim() || "-"}`,
      `Telefon: ${form.phone.trim() || "-"}`,
      `E-posta: ${form.email.trim() || "-"}`,
      `Talep Turu: ${form.requestType || "-"}`,
      `Ilgilendigim Alan: ${form.interestArea || "-"}`,
      `Hedef Kapasite: ${form.capacity.trim() || "-"}`,
      `Sehir / Lokasyon: ${form.city.trim() || "-"}`,
      `Mesaj: ${form.message.trim() || "-"}`,
    ].join("\n");
  }, [form]);

  const whatsappHref = useMemo(() => createWhatsAppHref(messageBody), [messageBody]);
  const emailHref = useMemo(
    () => createMailtoHref("Web Sitesi Teknik Talep Formu", messageBody),
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

    pushDataLayerEvent("whatsapp_click", {
      cta_label: "WhatsApp'tan Gonder",
      cta_href: whatsappHref,
      page_path: window.location.pathname,
    });
    pushDataLayerEvent("contact_form_whatsapp_submit", {
      request_type: form.requestType,
      interest_area: form.interestArea,
      page_path: window.location.pathname,
    });

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  function handleEmailClick() {
    if (!validateBeforeExit()) {
      return;
    }

    pushDataLayerEvent("email_click", {
      cta_label: "Mail Olarak Gonder",
      cta_href: emailHref,
      page_path: window.location.pathname,
    });
    pushDataLayerEvent("contact_form_email_submit", {
      request_type: form.requestType,
      interest_area: form.interestArea,
      page_path: window.location.pathname,
    });

    window.location.href = emailHref;
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#278DC0]">
          PROFESYONEL ILETISIM FORMU
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          Teknik talebinizi dogrudan muhendislik ekibimize iletin
        </h2>
        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
          Kapasite, proses, makine secimi veya teklif ihtiyacinizi paylasin.
          Talebinizi WhatsApp uzerinden hizlica iletebilir veya{" "}
          <a
            href="mailto:info@promakina.com.tr"
            className="font-semibold text-[#278DC0] transition hover:text-[#154764]"
          >
            info@promakina.com.tr
          </a>{" "}
          adresine mail olarak gonderebilirsiniz.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Ad Soyad *</span>
          <input
            type="text"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Adiniz ve soyadiniz"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Firma</span>
          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Firma adi"
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
          <span className="text-sm font-semibold text-slate-900">E-posta</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="ornek@firma.com"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Talep Turu *</span>
          <select
            value={form.requestType}
            onChange={(event) =>
              updateField("requestType", event.target.value as FormState["requestType"])
            }
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          >
            <option value="">Seciniz</option>
            {requestTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Ilgilendiginiz Alan *</span>
          <select
            value={form.interestArea}
            onChange={(event) =>
              updateField("interestArea", event.target.value as FormState["interestArea"])
            }
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          >
            <option value="">Seciniz</option>
            {interestAreas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Hedef Kapasite</span>
          <input
            type="text"
            value={form.capacity}
            onChange={(event) => updateField("capacity", event.target.value)}
            placeholder="Orn. 5 ton/saat, 10 ton/saat, 100 ton/gun"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Sehir / Lokasyon</span>
          <input
            type="text"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Orn. Eskisehir, Kocaeli, Antalya"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Mesaj</span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Urun tipi, kapasite, hammadde, nem orani, saha kosullari veya beklentinizi kisaca yazabilirsiniz."
          className="min-h-[160px] w-full rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] focus:ring-2 focus:ring-[#278DC0]/25"
        />
      </label>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
        WhatsApp ve mail butonlari, yazdiginiz bilgileri otomatik mesaja donusturur.
        Hizli iletisim icin zorunlu alanlari doldurmaniz yeterlidir.
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
          className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-500"
        >
          WhatsApp'tan Gonder
        </button>
        <button
          type="button"
          onClick={handleEmailClick}
          className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
        >
          Mail Olarak Gonder
        </button>
      </div>
    </div>
  );
}
