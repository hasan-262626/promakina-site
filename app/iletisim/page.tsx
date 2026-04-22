"use client";

import { useMemo, useState } from "react";
import { Hero } from "../components/Hero";

const locations = {
  factory: {
    key: "factory",
    label: "Fabrika",
    title: "Fabrika Adresi",
    address:
      "75. Yıl Mah. Teksan Sanayi Sitesi Kilis Sokak D6 Blok No:2E, 75. Yıl Mah, Kocaeli Sokak, 26250 Odunpazarı / Eskişehir",
    embed:
      "https://www.google.com/maps?q=75.%20Y%C4%B1l%20Mah.%20Teksan%20Sanayi%20Sitesi%20Kilis%20Sokak%20D6%20Blok%20No%3A2E%2C%20Odunpazar%C4%B1%20Eski%C5%9Fehir&output=embed",
  },
  ankara: {
    key: "ankara",
    label: "Ankara Ofisi",
    title: "Ankara Ofisi",
    address: "Ankara Ofisi Adresi: XXXXXXX",
    embed: "https://www.google.com/maps?q=Ankara%20Ofisi%20Adresi%3A%20XXXXXXX&output=embed",
  },
} as const;

const contacts = [
  {
    role: "Makine Mühendisi - Satış Temsilcisi",
    name: "Hasan Hüseyin Işık",
    phone: "+90 538 063 11 63",
    whatsapp: "https://wa.me/905380631163",
  },
  {
    role: "Türkiye Bölge Müdürü",
    name: "Serkan",
    phone: "+90 532 252 57 13",
    whatsapp: "https://wa.me/905322525713",
  },
  {
    role: "Fabrika ve İmalat Müdürü",
    name: "Akif",
    phone: "+90 533 569 31 43",
    whatsapp: "https://wa.me/905335693143",
  },
];

const interestGroups = [
  {
    label: "Hizmetler",
    options: [
      "Anahtar Teslim Tesis Kurulumu",
      "Proses Tasarımı ve Mühendislik",
      "Makine İmalatı",
      "Kurulum ve Devreye Alma",
      "Modernizasyon ve Revizyon",
      "Teknik Danışmanlık",
    ],
  },
  {
    label: "Tambur Sistemleri",
    options: [
      "Tambur Sistemleri",
      "Granülatör Tamburu",
      "Kurutma Tamburu",
      "Soğutma Tamburu",
      "Kaplama Tamburu",
      "Kompost Tamburu",
    ],
  },
  {
    label: "Taşıma Ekipmanları",
    options: [
      "Taşıma Ekipmanları",
      "Bantlı Konveyörler",
      "Zincirli Konveyörler",
      "Vidalı Helezonlar",
      "Zincirli Elevatörler",
      "Bantlı Elevatörler",
    ],
  },
  {
    label: "Kırıcılar ve Parçalayıcılar",
    options: [
      "Kırıcılar ve Parçalayıcılar",
      "Çekiçli Kırıcılar",
      "Zincirli Kırıcılar",
      "Shredder Sistemleri",
      "Bıçaklı Primer Kırıcılar",
      "Bıçaklı Sekonder Kırıcılar",
    ],
  },
  {
    label: "Reaktörler ve Tanklar",
    options: [
      "Reaktörler ve Tanklar",
      "Soğutma Tankları",
      "Karıştırıcılı Reaktörler",
      "Basınçlı Reaktörler",
      "Çözündürme Tankları",
      "Stok Tankları",
    ],
  },
  {
    label: "Eleme ve Sınıflandırma Sistemleri",
    options: [
      "Eleme ve Sınıflandırma Sistemleri",
      "Döner Elekler",
      "Vibrasyonlu Elekler",
      "Trommel Elekler",
      "Sınıflandırma Elekleri",
      "Susuzlandırma Elekleri",
    ],
  },
  {
    label: "Toz Toplama Sistemleri",
    options: [
      "Toz Toplama Sistemleri",
      "Pulse Jet Filtreler",
      "Siklon Ayırıcılar",
      "Torba Filtreler",
      "Kartuş Filtreler",
      "Bin Vent Filtreler",
    ],
  },
  {
    label: "Paketleme ve Dolum Sistemleri",
    options: [
      "Paketleme ve Dolum Sistemleri",
      "Açık Ağız Torbalama",
      "Valfli Torba Dolum",
      "Big Bag Dolum",
      "FFS Torbalama",
      "Paletleme Hatları",
    ],
  },
  {
    label: "Depolama ve Besleme Sistemleri",
    options: [
      "Depolama ve Besleme Sistemleri",
      "Silo Sistemleri",
      "Bunker ve Hazneler",
      "Vidalı Besleyiciler",
      "Rotary Valfler",
      "Sürgülü Klapeler",
    ],
  },
  {
    label: "Sektörel Talepler",
    options: [
      "Kompost Tesisi",
      "Gübre Tesisi",
      "Geri Dönüşüm Tesisi",
      "Biyogaz Sistemleri",
      "Kimyasal Proses Sistemleri",
      "Diğer",
    ],
  },
];

type FormState = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  interest: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  country: "",
  interest: "",
  message: "",
};

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState<"factory" | "ankara">("factory");
  const [form, setForm] = useState<FormState>(initialForm);

  const activeMap = locations[activeLocation];

  const requestBody = useMemo(() => {
    const lines = [
      "Merhaba, aşağıdaki konuda bilgi / teklif talep ediyorum.",
      "",
      `Ad Soyad: ${form.fullName || "-"}`,
      `Firma: ${form.company || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `E-posta: ${form.email || "-"}`,
      `Ülke: ${form.country || "-"}`,
      `İlgilenilen Alan: ${form.interest || "-"}`,
      `Mesaj: ${form.message || "-"}`,
      "",
      "Bu talebim için dönüş rica ederim.",
    ];

    return lines.join("\n");
  }, [form]);

  const whatsappHref = `https://wa.me/905380631163?text=${encodeURIComponent(requestBody)}`;
  const mailHref = `mailto:info@promakina.com.tr?subject=${encodeURIComponent(
    `Web Sitesi Teklif / Bilgi Talebi - ${form.interest || "Genel Talep"}`,
  )}&body=${encodeURIComponent(requestBody)}`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="İletişim"
        description="Makine, tesis, proses tasarımı, teknik danışmanlık veya teklif talepleriniz için bizimle iletişime geçin. Talebinizi doğru birime hızlı yönlendirelim ve size uygun çözüm yapısını birlikte netleştirelim."
        image="/images/fabrika1.jpg"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">Konum ve Harita</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      Fabrika ve Ankara ofisi arasında geçiş yaparak ilgili konumu görüntüleyin.
                    </p>
                  </div>
                  <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                    {(["factory", "ankara"] as const).map((key) => {
                      const isActive = activeLocation === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActiveLocation(key)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                            isActive
                              ? "bg-blue-700 text-white"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {locations[key].label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                  <iframe
                    key={activeLocation}
                    title={activeMap.title}
                    src={activeMap.embed}
                    className="h-[340px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
                <h2 className="text-2xl font-semibold text-slate-950">
                  Kurumsal İletişim Bilgileri
                </h2>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Fabrika Adresi
                    </p>
                    <p className="mt-2 leading-7 text-slate-800">{locations.factory.address}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Ankara Ofisi
                    </p>
                    <p className="mt-2 leading-7 text-slate-800">{locations.ankara.address}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Çalışma Saatleri
                    </p>
                    <p className="mt-2 text-slate-800">Pazartesi - Cumartesi / 09:00 - 18:00</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Kurumsal E-posta
                    </p>
                    <a
                      href="mailto:info@promakina.com.tr"
                      className="mt-2 block text-slate-800 transition hover:text-blue-700"
                    >
                      info@promakina.com.tr
                    </a>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/905380631163"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
                    >
                      WhatsApp’tan Yaz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Teklif Formu</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Talebinizi doğru birime hızlı yönlendirmek için aşağıdaki bilgileri doldürün.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  value={form.fullName}
                  onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Ad Soyad"
                />
                <input
                  value={form.company}
                  onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Firma Adı"
                />
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="Telefon"
                />
                <input
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  placeholder="E-posta"
                />
                <input
                  value={form.country}
                  onChange={(event) => setForm((current) => ({ ...current, country: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2"
                  placeholder="Ülke"
                />
                <select
                  value={form.interest}
                  onChange={(event) => setForm((current) => ({ ...current, interest: event.target.value }))}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2"
                >
                  <option value="">İlgilenilen Alan</option>
                  {interestGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="min-h-[160px] rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 sm:col-span-2"
                  placeholder="Mesaj"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-500"
                >
                  WhatsApp ile Gönder
                </a>
                <a
                  href={mailHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Mail ile Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            İletişim Kişileri
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contacts.map((person) => (
              <div
                key={person.phone}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {person.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{person.name}</h3>
                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="mt-6 block text-[15px] font-medium text-slate-700 transition hover:text-blue-700"
                >
                  {person.phone}
                </a>
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
