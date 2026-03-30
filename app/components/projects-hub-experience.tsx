"use client";

import Link from "next/link";
import { Hero } from "./Hero";
import { ToolkitLead } from "./technical-toolkit";

const projectCards = [
  {
    title: "Kompost Tesisi Projeleri",
    href: "/projeler/kompost-tesisi-projeleri",
    eyebrow: "organik atÄ±k kompost tesisi",
    description:
      "Evsel atÄ±k, organik atÄ±k, hayvansal atÄ±k, arÄ±tma Ã§amuru ve digestat gibi farklÄ± organik fraksiyonlar iÃ§in kompostlaÅŸtÄ±rma, stabilizasyon, kurutma ve nihai Ã¼rÃ¼n hazÄ±rlama odaklÄ± tesis kurgularÄ±.",
    bullets: ["Girdi karakterizasyonu", "Kompost proses tasarÄ±mÄ±", "Koku ve hijyenizasyon yÃ¶netimi"],
  },
  {
    title: "Organomineral GÃ¼bre Tesisi Projeleri",
    href: "/projeler/organomineral-gubre-tesisi-projeleri",
    eyebrow: "organomineral gÃ¼bre tesisi",
    description:
      "GranÃ¼l, mikro granÃ¼l, toz ve sÄ±vÄ± organomineral gÃ¼bre Ã¼retiminde Ã¼rÃ¼n kalitesi, kapasite ve sÃ¼rdÃ¼rÃ¼lebilir iÅŸletme odaklÄ± proje Ã§Ã¶zÃ¼mleri.",
    bullets: ["GranÃ¼lasyon ve kurutma", "Mikro granÃ¼l hatlarÄ±", "Paketleme ve son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±"],
  },
  {
    title: "Deri AtÄ±k Ä°ÅŸleme Tesisi Projeleri",
    href: "/projeler/deri-atik-isleme-tesisi-projeleri",
    eyebrow: "endÃ¼striyel atÄ±k iÅŸleme",
    description:
      "Deri endÃ¼strisi kaynaklÄ± atÄ±klarÄ±n parÃ§alama, ayrÄ±ÅŸtÄ±rma, taÅŸÄ±ma, hidroliz ve geri kazanÄ±m odaklÄ± iÅŸlenmesine uygun tesis kurgularÄ±.",
    bullets: ["ParÃ§alama ve kÃ¼Ã§Ã¼ltme", "TaÅŸÄ±ma ve bunker altyapÄ±sÄ±", "Geri kazanÄ±m odaklÄ± proje yapÄ±sÄ±"],
  },
  {
    title: "Biyogaz ve AtÄ±k YÃ¶netimi Projeleri",
    href: "/projeler/biyogaz-ve-atik-yonetimi-projeleri",
    eyebrow: "biyogaz projesi",
    description:
      "Biyogaz besleme, organik madde hazÄ±rlama, digestat yÃ¶netimi, atÄ±k iÅŸleme ve yan Ã¼rÃ¼n deÄŸerlendirme odaklÄ± entegre proje yapÄ±larÄ±.",
    bullets: ["Besleme ve Ã¶n iÅŸleme", "Digestat yÃ¶netimi", "Entegre atÄ±k yÃ¶netimi"],
  },
  {
    title: "Ã–zel Proses ve Makine Ä°malatÄ± Projeleri",
    href: "/projeler/ozel-proses-ve-makine-imalati-projeleri",
    eyebrow: "Ã¶zel endÃ¼striyel proje",
    description:
      "Sahaya Ã¶zel Ã¶lÃ§Ã¼, kapasite ve proses ihtiyacÄ±na gÃ¶re uyarlanmÄ±ÅŸ Ã¶zel makina, proses hattÄ± ve endÃ¼striyel sistem Ã§Ã¶zÃ¼mleri.",
    bullets: ["Ã–zel makina tasarÄ±mÄ±", "Sahaya Ã¶zel entegrasyon", "Standart dÄ±ÅŸÄ± proses Ã§Ã¶zÃ¼mleri"],
  },
  {
    title: "Mineral ve DÃ¶kme KatÄ± Ä°ÅŸleme Projeleri",
    href: "/projeler/mineral-ve-dokme-kati-isleme-projeleri",
    eyebrow: "mineral iÅŸleme projesi",
    description:
      "KÄ±rma, eleme, taÅŸÄ±ma, kurutma, sÄ±nÄ±flandÄ±rma ve stoklama sÃ¼reÃ§lerine uygun mineral ve dÃ¶kme katÄ± malzeme proje Ã§Ã¶zÃ¼mleri.",
    bullets: ["KÄ±rma ve eleme", "Kurutma ve sÄ±nÄ±flandÄ±rma", "Stoklama ve transfer altyapÄ±sÄ±"],
  },
];

export default function ProjectsHubExperience() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Projeler"
        description="Projeler bölümünde farklı sektörler için geliştirdiğimiz tesis kurgularını, proses yaklaşımlarını ve teknik çözüm yapılarını bir arada sunuyoruz. Kompost, organomineral gübre, biyogaz, atık yönetimi ve özel proses uygulamalarına yönelik proje tiplerini inceleyebilirsiniz."
        image="/images/fabrika1.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-12 lg:px-10 lg:pt-14">
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
                Projeyi Ä°ncele
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead
          title="Projeniz iÃ§in teknik gÃ¶rÃ¼ÅŸme veya teklif talep edin"
          text="Kompost tesisi, organomineral gÃ¼bre tesisi, biyogaz, atÄ±k yÃ¶netimi veya Ã¶zel proses projeniz iÃ§in teknik yaklaÅŸÄ±mÄ± birlikte netleÅŸtirelim."
        />
      </section>
    </main>
  );
}


