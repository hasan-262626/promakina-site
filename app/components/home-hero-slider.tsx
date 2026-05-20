import Image from "next/image";
import Link from "next/link";

export function HomeHeroSlider() {
  return (
    <section
      id="anasayfa"
      className="relative isolate min-h-[360px] overflow-hidden bg-slate-950 md:min-h-[400px] lg:min-h-[430px]"
      aria-label="Pro Makina ana tanitim bolumu"
    >
      <Image
        src="/images/hero/kat22.jpg"
        alt="Pro Makina endüstriyel tesisler için mühendislik ve makine çözümleri"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,24,38,0.82),rgba(21,71,100,0.45),rgba(10,24,38,0.82))]" />

      <div className="relative z-10">
        <div className="site-container flex min-h-[360px] max-w-6xl flex-col items-center justify-center px-6 py-10 text-center md:min-h-[400px] md:py-12 lg:min-h-[430px] lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/78">
            Proses Mühendisliği
          </p>

          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
            Endüstriyel Tesisler İçin
            <br />
            Mühendislik ve Makine Çözümleri
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 md:text-lg">
            Gübre, kompost, kurutma, taşıma ve proses hatları için imalat, montaj ve
            devreye alma çözümleri.
          </p>

          <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/sektorler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(39,141,192,0.26)] transition hover:-translate-y-0.5 hover:bg-[#154764] hover:shadow-[0_22px_50px_rgba(21,71,100,0.34)]"
            >
              Hizmet Verilen Sektörler
            </Link>
            <Link
              href="/makinalar-ekipman"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/70 bg-white/6 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111827]"
            >
              Makina & Ekipmanlar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
