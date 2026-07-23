import Image from "next/image";
import Link from "next/link";

/**
 * Ana sayfa hero içeriği. Verilmezse Türkçe varsayılanı kullanılır;
 * yabancı diller aynı bileşeni kendi metinleriyle besler.
 * Görsel, overlay, yükseklik ve buton tasarımı tüm dillerde ortaktır.
 */
export type HomeHeroContent = {
  ariaLabel: string;
  imageAlt: string;
  eyebrow: string;
  titleLines: [string, string];
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const trHomeHero: HomeHeroContent = {
  ariaLabel: "Pro Makina ana tanitim bolumu",
  imageAlt: "Pro Makina endüstriyel tesisler için mühendislik ve makine çözümleri",
  eyebrow: "Proses Mühendisliği",
  titleLines: ["Endüstriyel Tesisler İçin", "Mühendislik ve Makine Çözümleri"],
  description:
    "Gübre, kompost, kurutma, taşıma ve proses hatları için imalat, montaj ve devreye alma çözümleri.",
  primaryLabel: "Hizmet Verilen Sektörler",
  primaryHref: "/sektorler",
  secondaryLabel: "Makina & Ekipmanlar",
  secondaryHref: "/makinalar-ekipman",
};

export function HomeHeroSlider({ content }: { content?: HomeHeroContent }) {
  const hero = content ?? trHomeHero;

  return (
    <section
      id="anasayfa"
      className="relative isolate min-h-[360px] overflow-hidden bg-slate-950 md:min-h-[400px] lg:min-h-[430px]"
      aria-label={hero.ariaLabel}
    >
      <Image
        src="/images/hero/kat22.jpg"
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,24,38,0.82),rgba(21,71,100,0.45),rgba(10,24,38,0.82))]" />

      <div className="relative z-10">
        <div className="site-container flex min-h-[360px] max-w-6xl flex-col items-center justify-center px-6 py-10 text-center md:min-h-[400px] md:py-12 lg:min-h-[430px] lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/78">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 md:text-lg">
            {hero.description}
          </p>

          <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href={hero.primaryHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(39,141,192,0.26)] transition hover:-translate-y-0.5 hover:bg-[#154764] hover:shadow-[0_22px_50px_rgba(21,71,100,0.34)]"
            >
              {hero.primaryLabel}
            </Link>
            <Link
              href={hero.secondaryHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/70 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111827]"
            >
              {hero.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
