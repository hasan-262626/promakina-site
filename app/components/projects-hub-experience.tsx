"use client";

import Link from "next/link";
import { ToolkitLead } from "./technical-toolkit";

const projectCards = [
  {
    title: "Kompost Tesisi Projeleri",
    href: "/projeler/kompost-tesisi-projeleri",
    eyebrow: "organik atık kompost tesisi",
    description:
      "Evsel atık, organik atık, hayvansal atık, arıtma çamuru ve digestat gibi farklı organik fraksiyonlar için kompostlaştırma, stabilizasyon, kurutma ve nihai ürün hazırlama odaklı tesis kurguları.",
    bullets: ["Girdi karakterizasyonu", "Kompost proses tasarımı", "Koku ve hijyenizasyon yönetimi"],
  },
  {
    title: "Organomineral Gübre Tesisi Projeleri",
    href: "/projeler/organomineral-gubre-tesisi-projeleri",
    eyebrow: "organomineral gübre tesisi",
    description:
      "Granül, mikro granül, toz ve sıvı organomineral gübre üretiminde ürün kalitesi, kapasite ve sürdürülebilir işletme odaklı proje çözümleri.",
    bullets: ["Granülasyon ve kurutma", "Mikro granül hatları", "Paketleme ve son ürün hazırlığı"],
  },
  {
    title: "Deri Atık İşleme Tesisi Projeleri",
    href: "/projeler/deri-atik-isleme-tesisi-projeleri",
    eyebrow: "endüstriyel atık işleme",
    description:
      "Deri endüstrisi kaynaklı atıkların parçalama, ayrıştırma, taşıma, hidroliz ve geri kazanım odaklı işlenmesine uygun tesis kurguları.",
    bullets: ["Parçalama ve küçültme", "Taşıma ve bunker altyapısı", "Geri kazanım odaklı proje yapısı"],
  },
  {
    title: "Biyogaz ve Atık Yönetimi Projeleri",
    href: "/projeler/biyogaz-ve-atik-yonetimi-projeleri",
    eyebrow: "biyogaz projesi",
    description:
      "Biyogaz besleme, organik madde hazırlama, digestat yönetimi, atık işleme ve yan ürün değerlendirme odaklı entegre proje yapıları.",
    bullets: ["Besleme ve ön işleme", "Digestat yönetimi", "Entegre atık yönetimi"],
  },
  {
    title: "Özel Proses ve Makine İmalatı Projeleri",
    href: "/projeler/ozel-proses-ve-makine-imalati-projeleri",
    eyebrow: "özel endüstriyel proje",
    description:
      "Sahaya özel ölçü, kapasite ve proses ihtiyacına göre uyarlanmış özel makina, proses hattı ve endüstriyel sistem çözümleri.",
    bullets: ["Özel makina tasarımı", "Sahaya özel entegrasyon", "Standart dışı proses çözümleri"],
  },
  {
    title: "Mineral ve Dökme Katı İşleme Projeleri",
    href: "/projeler/mineral-ve-dokme-kati-isleme-projeleri",
    eyebrow: "mineral işleme projesi",
    description:
      "Kırma, eleme, taşıma, kurutma, sınıflandırma ve stoklama süreçlerine uygun mineral ve dökme katı malzeme proje çözümleri.",
    bullets: ["Kırma ve eleme", "Kurutma ve sınıflandırma", "Stoklama ve transfer altyapısı"],
  },
];

export default function ProjectsHubExperience() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]">
        <div className="mx-auto min-h-[300px] max-w-7xl px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:px-10 lg:py-[60px]">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              PROJELER
            </div>
            <h1 className="mt-4 text-[28px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Projeler
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Referans değil, teknik kanıt niteliğinde proje kategorileri sunuyoruz. Her proje sayfası; lokasyon, kapasite, sistem yapısı, süreç özeti, teknik kapsam ve ön değerlendirme alanları ile birlikte aynı profesyonel düzende hazırlanır.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Kompost tesislerinden organomineral gübre hatlarına, biyogaz ve atık yönetimi projelerinden özel proses ve makina imalat çözümlerine kadar farklı proje tiplerini teknik yaklaşım ile sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{card.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-600">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700">
                Projeyi İncele
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead
          title="Projeniz için teknik görüşme veya teklif talep edin"
          text="Kompost tesisi, organomineral gübre tesisi, biyogaz, atık yönetimi veya özel proses projeniz için teknik yaklaşımı birlikte netleştirelim."
        />
      </section>
    </main>
  );
}
