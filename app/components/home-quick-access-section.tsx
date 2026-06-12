import Image from "next/image";
import Link from "next/link";

type SectorShowcaseItem = {
  title: string;
  href: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
  overlayClassName: string;
};

const iconClassName = "h-7 w-7";
const illustrationClassName = "h-32 w-32 sm:h-36 sm:w-36 xl:h-40 xl:w-40";

const sharedIconShellClassName =
  "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/16 bg-white/8 text-white backdrop-blur-sm transition duration-300 group-hover:border-white/26 group-hover:bg-white/12 group-hover:opacity-0";

function FertilizerIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <rect x="24" y="88" width="112" height="26" rx="13" stroke="currentColor" strokeWidth="4.5" />
      <path d="M42 85 60 62h40l18 23" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 62V42h40v20" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="80" cy="101" r="9" stroke="currentColor" strokeWidth="4.5" />
      <path d="M50 118v14M110 118v14M70 32c8 3 12 8 12 15" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M88 28c8 3 12 8 12 15" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function CompostIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <rect x="22" y="83" width="116" height="28" rx="14" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="57" cy="97" r="10" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="103" cy="97" r="10" stroke="currentColor" strokeWidth="4.5" />
      <path d="M47 79 61 51h38l14 28" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 46c0-10 6-16 16-19-1 9-4 16-14 19" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M66 42c-1 10 2 17 12 21" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BiogasIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <path d="M34 110c0-29 21-50 46-50s46 21 46 50" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M48 109V81c0-19 14-34 32-34s32 15 32 34v28" stroke="currentColor" strokeWidth="4.5" />
      <path d="M66 52V37h28v15" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="60" y="109" width="40" height="18" rx="9" stroke="currentColor" strokeWidth="4.5" />
      <path d="m117 56 11 18h-10l4 18-17-22h10l2-14Z" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
    </svg>
  );
}

function MiningIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <path d="M22 113h116" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M32 98 54 66h24l18 22h20l12 10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="52" y="47" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="4.5" />
      <path d="M98 78v35M118 88v25" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="49" cy="112" r="8" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="111" cy="112" r="8" stroke="currentColor" strokeWidth="4.5" />
    </svg>
  );
}

function SludgeIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <rect x="26" y="88" width="108" height="24" rx="12" stroke="currentColor" strokeWidth="4.5" />
      <path d="M44 86 61 58h38l17 28" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 44c10 12 15 21 15 30a15 15 0 1 1-30 0c0-9 5-18 15-30Z" stroke="currentColor" strokeWidth="4.5" />
      <path d="M54 114v12M106 114v12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function ChemicalIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <rect x="34" y="44" width="34" height="72" rx="10" stroke="currentColor" strokeWidth="4.5" />
      <path d="M51 30v14M68 60h18" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="88" y="55" width="38" height="61" rx="12" stroke="currentColor" strokeWidth="4.5" />
      <path d="M107 42v13M88 86H68M126 86h12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M107 76v20" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="107" cy="86" r="4" fill="currentColor" />
    </svg>
  );
}

function RecyclingIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <rect x="26" y="82" width="108" height="30" rx="10" stroke="currentColor" strokeWidth="4.5" />
      <path d="M47 82V62h26v20M87 82V52h26v30" stroke="currentColor" strokeWidth="4.5" />
      <path d="m59 49 8-12 8 12M102 42l12 2-6 11" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m68 121-11-5 5-10M110 122l-10 7-8-8" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulkHandlingIllustration() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className={illustrationClassName}>
      <path d="M32 116h96" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M45 116V58h26l10 15h22l12 12v31" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 58V44h24v14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M91 73v43M104 82v34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="55" cy="116" r="8" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="111" cy="116" r="8" stroke="currentColor" strokeWidth="4.5" />
    </svg>
  );
}

const sectorShowcaseItems: SectorShowcaseItem[] = [
  {
    title: "Gübre Uygulamaları",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    image: "/images/granul1.jpg",
    alt: "Granül ve sıvı gübre üretim tesisleri için proses çözümleri",
    illustration: <FertilizerIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M12 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M12 10c-3.5 0-6 2.6-6 5.8S8.5 21 12 21s6-2.4 6-5.2S15.5 10 12 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Kompost ve Organik Atık",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    image: "/images/kompost1.jpg",
    alt: "Kompost ve organik atık işleme proses çözümleri",
    illustration: <CompostIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" rx="2" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Biyogaz ve Enerji",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
    image: "/images/biogaz1.jpg",
    alt: "Biyogaz ve enerji tesisleri için besleme ve proses çözümleri",
    illustration: <BiogasIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="m13 2-6 10h4l-1 10 7-11h-4l0-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Madencilik ve Mineral İşleme",
    href: "/sektorler/madencilik-ve-mineral-isleme",
    image: "/images/maden1.jpg",
    alt: "Madencilik ve mineral işleme tesisleri için kırma, eleme ve kurutma çözümleri",
    illustration: <MiningIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="M3 18 9.5 8l3 4 2.5-3 6 9H3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Arıtma Çamuru ve Kurutma",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    image: "/images/sucamuru1.jpg",
    alt: "Arıtma çamuru kurutma ve nihai ürün hazırlama çözümleri",
    illustration: <SludgeIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="M12 3c3.5 4 5.3 6.8 5.3 9.3A5.3 5.3 0 1 1 6.7 12.3C6.7 9.8 8.5 7 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Kimya ve Proses Endüstrisi",
    href: "/sektorler/kimya-ve-proses-endustrisi",
    image: "/images/kimya1.jpg",
    alt: "Kimya ve proses endüstrisi için reaktör ve tank çözümleri",
    illustration: <ChemicalIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="M10 3h4M11 3v6l-5.5 9.2A1.5 1.5 0 0 0 6.8 21h10.4a1.5 1.5 0 0 0 1.3-2.3L13 9V3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Geri Dönüşüm ve Atık Yönetimi",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
    image: "/images/geridonusum1.jpg",
    alt: "Geri dönüşüm ve atık yönetimi proses çözümleri",
    illustration: <RecyclingIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="M8 5h5a3 3 0 0 1 3 3v1M16 19h-5a3 3 0 0 1-3-3v-1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Yem, Toz ve Dökme Katı İşleme",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    image: "/images/yem1.jpg",
    alt: "Yem, toz ve dökme katı malzeme işleme sistemleri",
    illustration: <BulkHandlingIllustration />,
    overlayClassName:
      "bg-gradient-to-b from-[#278DC0]/92 via-[#154764]/88 to-[#0B0F14]/92 group-hover:from-black/55 group-hover:via-black/10 group-hover:to-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClassName}>
        <path
          d="M6 17c2-3 5-5 9-6M10 19c2-2 4-3 7-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function HomeQuickAccessSection() {
  return (
    <section
      className="section-space border-b border-slate-200/70 bg-white"
      aria-labelledby="home-sector-showcase-title"
    >
      <div className="site-container">
        <div className="max-w-none">
          <h2
            id="home-sector-showcase-title"
            className="text-3xl font-semibold tracking-tight text-[#278DC0] md:text-4xl"
          >
            Sektöre Özel Çözümler
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-900 lg:whitespace-nowrap lg:text-[15px]">
            Gübre, kompost, biyogaz, maden, arıtma çamuru ve kimyasal proses
            uygulamalarında ihtiyaca uygun makine ve tesis çözümlerini inceleyin.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sectorShowcaseItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative isolate min-h-[320px] overflow-hidden rounded-[30px] border border-[#278DC0]/16 bg-[#278DC0] shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(15,23,42,0.14)] md:min-h-[340px] xl:min-h-[360px]"
            >
              <Image
                src={item.image}
                alt={
                  item.href === "/sektorler/atik-su-camuru-ve-aritma-cozumleri"
                    ? "Atık su çamuru kurutma, susuzlaştırma ve nihai ürün hazırlama çözümleri"
                    : item.alt
                }
                fill
                sizes="(min-width: 1280px) calc((1280px - 48px) / 4), (min-width: 768px) calc((100vw - 48px - 16px) / 2), 100vw"
                className="object-cover object-center opacity-[0.04] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className={`absolute inset-0 transition duration-500 ${item.overlayClassName}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%)] opacity-90 transition duration-500 group-hover:opacity-30" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                <div className={sharedIconShellClassName}>{item.icon}</div>

                <div className="pointer-events-none absolute inset-x-0 top-[27%] flex justify-center transition duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <div className="text-white/95">{item.illustration}</div>
                </div>

                <div className="relative">
                  <h3 className="max-w-[14ch] text-2xl font-semibold leading-tight tracking-tight text-white [text-shadow:0_8px_24px_rgba(15,23,42,0.4)] sm:text-[28px]">
                    {item.href === "/sektorler/atik-su-camuru-ve-aritma-cozumleri"
                      ? "Atık Su Çamuru Çözümleri"
                      : item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/95 [text-shadow:0_6px_18px_rgba(15,23,42,0.4)]">
                    Sektörü İncele
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/sektorler"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#278DC0]/16 bg-[#278DC0]/10 px-6 text-sm font-semibold text-[#278DC0] transition hover:border-[#278DC0] hover:bg-white hover:text-[#154764]"
          >
            Tüm sektörleri görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}
