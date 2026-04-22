"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "./Hero";
import { ToolkitLead } from "./technical-toolkit";
import { trText } from "../lib/tr-text";

const projectCards = [
  {
    title: "Kompost Tesisi Projeleri",
    href: "/projeler/kompost-tesisi-projeleri",
    summary:
      "Evsel, organik ve hayvansal atık akışları için kompostlaştırma, stabilizasyon ve nihai ürün hazırlama kurguları sunuyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "Kompost tesisi projeleri",
  },
  {
    title: "Organomineral Gübre Tesisi Projeleri",
    href: "/projeler/organomineral-gubre-tesisi-projeleri",
    summary:
      "Granül, mikro granül ve toz organomineral üretimi için proses, kapasite ve ürün kalitesi odaklı proje yapıları geliştiriyoruz.",
    image: "/images/granul1.jpg",
    imageAlt: "Organomineral gübre tesisi projeleri",
  },
  {
    title: "Deri Atık İşleme Tesisi Projeleri",
    href: "/projeler/deri-atik-isleme-tesisi-projeleri",
    summary:
      "Deri kaynaklı atıkların parçalama, taşıma, ayrıştırma ve geri kazanım adımlarını kapsayan tesis çözümleri kurguluyoruz.",
    image: "/images/geridonusum1.jpg",
    imageAlt: "Deri atık işleme tesisi projeleri",
  },
  {
    title: "Biyogaz ve Atık Yönetimi Projeleri",
    href: "/projeler/biyogaz-ve-atik-yonetimi-projeleri",
    summary:
      "Biyogaz besleme, digestat yönetimi ve entegre organik atık işleme süreçleri için mühendislik odaklı proje çözümleri sunuyoruz.",
    image: "/images/biogaz1.jpg",
    imageAlt: "Biyogaz ve atık yönetimi projeleri",
  },
  {
    title: "Özel Proses ve Makine İmalatı Projeleri",
    href: "/projeler/ozel-proses-ve-makine-imalati-projeleri",
    summary:
      "Sahaya özel kapasite, ölçü ve proses ihtiyacına göre şekillenen özel makina ve hat projeleri geliştiriyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "Özel proses ve makine imalatı projeleri",
  },
  {
    title: "Mineral ve Dökme Katı İşleme Projeleri",
    href: "/projeler/mineral-ve-dokme-kati-isleme-projeleri",
    summary:
      "Kırma, eleme, taşıma, kurutma ve stoklama adımlarına uygun mineral ve dökme katı proses projeleri tasarlıyoruz.",
    image: "/images/maden1.jpg",
    imageAlt: "Mineral ve dökme katı işleme projeleri",
  },
] as const;

export default function ProjectsHubExperience() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Projeler"
        description={trText(
          "Projeler bölümünde farklı sektörler için geliştirdiğimiz tesis kurgularını, proses yaklaşımlarını ve teknik çözüm yapılarını bir arada sunuyoruz. Kompost, organomineral gübre, biyogaz, atık yönetimi ve özel proses uygulamalarına yönelik proje tiplerini inceleyebilirsiniz.",
        )}
        image="/images/fabrika1.jpg"
      />

      <section id="proje-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex flex-1 items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={project.image}
                      alt={trText(project.imageAlt)}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {trText(project.title)}
                    </h2>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">{trText(project.summary)}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      {trText("Projeyi İncele")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-20">
        <ToolkitLead
          title={trText("Projeniz için teknik görüşme veya teklif talep edin")}
          text={trText(
            "Kompost tesisi, organomineral gübre tesisi, biyogaz, atık yönetimi veya özel proses projeniz için teknik yaklaşımı birlikte netleştirelim.",
          )}
        />
      </section>
    </main>
  );
}
