"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "../components/Hero";
import { createMailtoHref, siteContact } from "../lib/site-contact";

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
    name: "Hüseyin Bey",
    phone: siteContact.phoneDisplay,
    whatsapp: siteContact.whatsappHref,
  },
  {
    role: "Türkiye Bölge Müdürü",
    name: "Serkan Bey",
    phone: "+90 532 252 57 13",
    whatsapp: "https://wa.me/905322525713",
  },
  {
    role: "Fabrika ve İmalat Müdürü",
    name: "Akif Bey",
    phone: "+90 533 569 31 43",
    whatsapp: "https://wa.me/905335693143",
  },
];

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState<"factory" | "ankara">("factory");

  const activeMap = locations[activeLocation];

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
                      href={siteContact.emailHref}
                      className="mt-2 block text-slate-800 transition hover:text-blue-700"
                    >
                      {siteContact.email}
                    </a>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href={siteContact.whatsappHref}
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

            <div className="space-y-5">
              <ContactForm />
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
                <p className="text-sm leading-7 text-slate-600">
                  Hızlı geri dönüş isterseniz{" "}
                  <a
                    href={siteContact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-700 transition hover:text-green-800"
                  >
                    WhatsApp
                  </a>{" "}
                  üzerinden yazabilir ya da{" "}
                  <a
                    href={createMailtoHref("Pro Makina Teknik Talep")}
                    className="font-semibold text-blue-700 transition hover:text-blue-800"
                  >
                    {siteContact.email}
                  </a>{" "}
                  adresine doğrudan mail gönderebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="mb-10 rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Teknik İletişim
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Teknik Teklif ve Proje Görüşmesi
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Pro Makina ile iletişim süreci, yalnızca teklif istemekten daha fazlasını
              kapsar. Gübre tesisi, kompost tesisi, kurutma tamburu, konveyör sistemleri
              ve benzeri proses ekipmanları için ilk görüşmede kapasite, ürün tipi, saha
              koşulları ve yatırım hedefi birlikte değerlendirilir. Bu yaklaşım, gereksiz
              ekipman seçimlerini azaltır ve anahtar teslim tesis kurulumu için daha doğru
              bir başlangıç sağlar. Özellikle proses mühendisliği gerektiren projelerde,
              doğru ön bilgi hem teklif kalitesini hem de proje hızını doğrudan etkiler.
              Bu nedenle iletişim aşamasını teknik ön değerlendirme sürecinin bir parçası
              olarak ele alıyoruz.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <article>
                <h2 className="text-2xl font-semibold text-slate-950">
                  Kapasite Hesabı ve Ön Değerlendirme
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Yeni bir hat planlarken ya da mevcut bir prosesi büyütürken, kapasite
                  hedefinin makine yapısı ile uyumlu olması gerekir. Bu aşamada{" "}
                  <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    hizmetler
                  </Link>{" "}
                  sayfamızdaki anahtar teslim yaklaşımımız ve{" "}
                  <Link href="/projeler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    projeler
                  </Link>{" "}
                  tarafındaki uygulama disiplini birlikte devreye girer. Gerek tambur ve
                  konveyör sistemleri gerekse özel proses ekipmanları için, müşteriden gelen
                  ilk veriler üzerinden ön teknik çerçeve oluştururuz. Böylece yatırımcı,
                  ilk aşamada hangi çözüm modeline yönelmesi gerektiğini net biçimde görür.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-semibold text-slate-950">
                  Pro Makina ile İletişime Geçin
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Endüstriyel makine imalatı ve proses mühendisliği odaklı projelerde hızlı
                  ve doğru iletişim, teklif başarısının temelidir. Eğer{" "}
                  <Link href="/makinalar" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    makinalar
                  </Link>{" "}
                  tarafındaki ekipmanlarımızı inceleyip kendi hattınıza uygun çözümü
                  değerlendirmek istiyorsanız, teknik ekibimiz size yardımcı olabilir. Aynı
                  şekilde farklı ürün grupları ve sektör ihtiyaçları için{" "}
                  <Link href="/sektorler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    sektörler
                  </Link>{" "}
                  sayfamızdan ilgili çalışma alanlarını gözden geçirebilir, daha detaylı
                  mühendislik içeriği için{" "}
                  <Link href="/kutuphane" className="font-semibold text-blue-700 transition hover:text-blue-800">
                    kütüphane
                  </Link>{" "}
                  bölümüne geçebilirsiniz.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-semibold text-slate-950">Kısa Sonuç</h2>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  Teklif, keşif, kapasite hesabı veya proje değerlendirmesi için bize
                  ulaştığınızda; yalnızca fiyat odaklı değil, teknik uygulanabilirlik odaklı
                  bir geri dönüş alırsınız. Gübre tesisi, kompost tesisi ve endüstriyel
                  proses projelerinde güvenli bir başlangıç için aşağıdaki iletişim
                  kanallarını kullanabilirsiniz.
                </p>
              </article>
            </div>
          </div>

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
