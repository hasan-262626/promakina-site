"use client";

import { useMemo, useState } from "react";

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type SubmissionState = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return Boolean(
      form.fullName.trim() &&
        form.company.trim() &&
        form.phone.trim() &&
        form.email.trim() &&
        form.subject.trim() &&
        form.message.trim(),
    );
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setMessage("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    if (!emailRegex.test(form.email.trim())) {
      setStatus("error");
      setMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error || "Mesaj gönderilemedi.");
      }

      setStatus("success");
      setMessage(result.message || "Mesajınız başarıyla gönderildi.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.",
      );
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-slate-800 dark:bg-slate-950 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
          PROFESYONEL İLETİŞİM FORMU
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          Teknik talebinizi doğrudan mühendislik ekibimize iletin
        </h2>
        <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300 sm:text-base">
          Kapasite, proses, makina seçimi veya teklif ihtiyacınızı paylaşın. Mesajınız
          <span className="font-semibold text-slate-900 dark:text-white"> info@promakina.com.tr </span>
          adresine güvenli şekilde iletilir.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Ad Soyad *</span>
            <input
              required
              type="text"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              placeholder="Yetkili kişi"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Firma *</span>
            <input
              required
              type="text"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              placeholder="Firma adı"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Telefon *</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              placeholder="+90 5xx xxx xx xx"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">E-posta *</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              placeholder="ornek@firma.com"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">Konu *</span>
          <input
            required
            type="text"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
            placeholder="Örn. Gübre tesisi kapasite değerlendirmesi"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">Mesaj *</span>
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-[168px] w-full rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
            placeholder="Projenizin hedef kapasitesini, ürün tipini, saha koşullarını ve beklentinizi paylaşabilirsiniz."
          />
        </label>

        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              type="text"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-[24px] text-sm">
            {status === "success" ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                  ✓
                </span>
                {message}
              </div>
            ) : null}
            {status === "error" ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-red-700 dark:bg-red-500/10 dark:text-red-300">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  !
                </span>
                {message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {status === "loading" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Gönderiliyor
              </>
            ) : (
              "Mesajı Gönder"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
