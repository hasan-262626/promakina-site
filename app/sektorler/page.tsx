import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { sectors } from "../data";
import { trText } from "../lib/tr-text";

const sectorImageMap = new Map([
  ["gubre-ve-granulasyon-tesisleri", { image: "/images/granul1.jpg", alt: "Gübre ve granülasyon tesisleri" }],
  ["kompost-ve-organik-atik-tesisleri", { image: "/images/kompost1.jpg", alt: "Kompost ve organik atık tesisleri" }],
  ["atik-su-camuru-ve-aritma-cozumleri", { image: "/images/sucamuru1.jpg", alt: "Atık su çamuru ve arıtma çözümleri" }],
  ["geri-donusum-ve-atik-yonetimi", { image: "/images/geridonusum1.jpg", alt: "Geri dönüşüm ve atık yönetimi" }],
  ["enerji-ve-biyogaz-sistemleri", { image: "/images/biogaz1.jpg", alt: "Enerji ve biyogaz sistemleri" }],
  ["madencilik-ve-mineral-isleme", { image: "/images/maden1.jpg", alt: "Madencilik ve mineral işleme" }],
  ["kimya-ve-proses-endustrisi", { image: "/images/kimya1.jpg", alt: "Kimya ve proses endüstrisi" }],
  ["yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri", { image: "/images/yem1.jpg", alt: "Yem ve dökme katı malzeme işleme sistemleri" }],
]);

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Sektörler"
        description="Gübre, kompost, biyogaz, geri dönüşüm, kimya, madencilik ve dökme katı malzeme işleme gibi farklı alanlara özel mühendislik çözümleri sunuyoruz. Her sektör için kapasite, proses ve saha koşullarına göre şekillenen uygun tesis ve ekipman yaklaşımını ayrı sayfalarda topluyoruz."
        image="/images/sektorler1.png"
      />

      <section className="px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 xl:px-8">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            {sectors.map((sector) => {
              const sectorImage = sectorImageMap.get(sector.slug);

              return (
                <Link
                  key={sector.slug}
                  href={`/sektorler/${sector.slug}`}
                  className="group min-h-[228px] rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)] sm:min-h-[240px] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    {sectorImage ? (
                      <span className="relative mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:h-16 sm:w-16">
                        <Image
                          src={sectorImage.image}
                          alt={sectorImage.alt}
                          fill
                          sizes="64px"
                          className="object-cover object-center"
                        />
                      </span>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <h2 className="max-w-[420px] text-2xl font-semibold leading-[1.18] tracking-tight text-slate-950 sm:text-[30px]">
                        {trText(sector.title)}
                      </h2>
                      <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-slate-600">
                        {trText(sector.summary)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
