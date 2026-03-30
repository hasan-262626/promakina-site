import Link from "next/link";
import { ProgramPageHero } from "../components/program-page-hero";

type ToolItem = {
  slug: string;
  title: string;
};

type CategoryItem = {
  id: string;
  title: string;
  description: string;
  tools: ToolItem[];
};

const categories: CategoryItem[] = [
  {
    id: "guc-aktarim-hesaplari",
    title: "GÃƒÂ¼ÃƒÂ§ AktarÃ„Â±m HesaplarÃ„Â±",
    description:
      "DiÃ…Å¸li, zincir, kayÃ„Â±Ã…Å¸-kasnak, kaplin ve motor aktarÃ„Â±m hesaplarÃ„Â±nÃ„Â± tek yerde toplayÃ„Â±n.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "zincir-disli-hesabi", title: "Zincir ve DiÃ…Å¸li HesaplarÃ„Â±" },
      { slug: "duz-helis-disli-hesabi", title: "DÃƒÂ¼z / Helis DiÃ…Å¸li HesabÃ„Â±" },
      { slug: "ic-planet-disli-hesabi", title: "DÃƒÂ¼z-Helis Ã„Â°ÃƒÂ§ (Planet) DiÃ…Å¸li HesabÃ„Â±" },
      { slug: "duz-helis-konik-disli-hesabi", title: "DÃƒÂ¼z Helis Konik DiÃ…Å¸li HesabÃ„Â±" },
      { slug: "kremayer-disli-hesabi", title: "Kremayer DiÃ…Å¸li HesabÃ„Â±" },
      { slug: "kayis-kasnak-oran-hesabi", title: "KayÃ„Â±Ã…Å¸-Kasnak Oran HesabÃ„Â±" },
      { slug: "motor-gucu-on-hesabi", title: "Motor GÃƒÂ¼cÃƒÂ¼ Ãƒâ€“n HesabÃ„Â±" },
    ],
  },
  {
    id: "mil-kaplin-ve-baglanti-hesaplari",
    title: "Mil, Kaplin ve BaÃ„Å¸lantÃ„Â± HesaplarÃ„Â±",
    description:
      "Mil ÃƒÂ§apÃ„Â±, kaplin seÃƒÂ§imi, kama baÃ„Å¸lantÃ„Â±sÃ„Â± ve gÃƒÂ¶bek uyumluluÃ„Å¸u iÃƒÂ§in ÃƒÂ¶n mÃƒÂ¼hendislik araÃƒÂ§larÃ„Â±nÃ„Â± birlikte kullanÃ„Â±n.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "mil-capi-hesabi", title: "Mil Ãƒâ€¡apÃ„Â± HesabÃ„Â±" },
      { slug: "kaplin-secimi-on-hesabi", title: "Kaplin SeÃƒÂ§imi Ãƒâ€“n HesabÃ„Â±" },
      { slug: "kama-kanali-acim-olculeri", title: "Kama KanalÃ„Â± AÃƒÂ§Ã„Â±m Ãƒâ€“lÃƒÂ§ÃƒÂ¼leri" },
      { slug: "segman-ve-kanal-olculeri", title: "Segman ve Kanal Ãƒâ€“lÃƒÂ§ÃƒÂ¼leri" },
    ],
  },
  {
    id: "talasli-imalat-hesaplari",
    title: "TalaÃ…Å¸lÃ„Â± Ã„Â°malat HesaplarÃ„Â±",
    description:
      "Vida aÃƒÂ§Ã„Â±m, kÃ„Â±lavuz delik, kesme hÃ„Â±zÃ„Â±, devir ve freze-torna ÃƒÂ¶n hesaplarÃ„Â± iÃƒÂ§in ÃƒÂ§ok kullanÃ„Â±lan yardÃ„Â±mcÃ„Â± araÃƒÂ§larÃ„Â± tek yerde toplayÃ„Â±n.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "vida-acim-olculeri", title: "Vida AÃƒÂ§Ã„Â±m Ãƒâ€“lÃƒÂ§ÃƒÂ¼leri" },
      { slug: "talasli-imalat-hesaplari", title: "KÃ„Â±lavuz Delik HesabÃ„Â±" },
      { slug: "talasli-imalat-hesaplari", title: "Kesme HÃ„Â±zÃ„Â± / Devir HesabÃ„Â±" },
      { slug: "talasli-imalat-hesaplari", title: "Freze / Torna Ãƒâ€“n HesaplarÃ„Â±" },
    ],
  },
  {
    id: "sac-kaynak-ve-imalat-hesaplari",
    title: "Sac, Kaynak ve Ã„Â°malat HesaplarÃ„Â±",
    description:
      "Sac, profil, boru, bÃƒÂ¼kÃƒÂ¼m ve kaynak ÃƒÂ¶n hesaplarÃ„Â±nÃ„Â± aynÃ„Â± sade ve premium imalat ÃƒÂ§atÃ„Â±sÃ„Â± altÃ„Â±nda kullanÃ„Â±n.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "malzeme-agirlik-hesabi", title: "Sac AÃ„Å¸Ã„Â±rlÃ„Â±k HesabÃ„Â±" },
      { slug: "malzeme-agirlik-hesabi", title: "Profil / Boru AÃ„Å¸Ã„Â±rlÃ„Â±k HesabÃ„Â±" },
      { slug: "sac-kaynak-hesaplari", title: "BÃƒÂ¼kÃƒÂ¼m AÃƒÂ§Ã„Â±lÃ„Â±m Boyu" },
      { slug: "sac-kaynak-hesaplari", title: "Abkant Tonaj HesabÃ„Â±" },
      { slug: "sac-kaynak-hesaplari", title: "Kaynak MetrajÃ„Â± ve Dolgu HesabÃ„Â±" },
    ],
  },
  {
    id: "tolerans-gecme-ve-kanal-hesaplari",
    title: "Tolerans, GeÃƒÂ§me ve Kanal HesaplarÃ„Â±",
    description:
      "ISO geÃƒÂ§me, kama kanalÃ„Â± ve segman-kanal verilerini standart tabanlÃ„Â± olarak aynÃ„Â± premium sistem altÃ„Â±nda inceleyin.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "iso-gecme-toleranslari", title: "ISO GeÃƒÂ§me ToleranslarÃ„Â±" },
      { slug: "kama-kanali-acim-olculeri", title: "Kama KanalÃ„Â± AÃƒÂ§Ã„Â±m Ãƒâ€“lÃƒÂ§ÃƒÂ¼leri" },
      { slug: "segman-ve-kanal-olculeri", title: "Segman ve Kanal Ãƒâ€“lÃƒÂ§ÃƒÂ¼leri" },
    ],
  },
  {
    id: "donusum-araclari",
    title: "DÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼m AraÃƒÂ§larÃ„Â±",
    description:
      "Teknik dÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼m araÃƒÂ§larÃ„Â± ile birim, gÃƒÂ¼ÃƒÂ§, tork, basÃ„Â±nÃƒÂ§, sÃ„Â±caklÃ„Â±k ve yoÃ„Å¸unluk-hacim-aÃ„Å¸Ã„Â±rlÃ„Â±k dÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼mlerini tek ekranda kullanÃ„Â±n.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programi" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programi" },
      { slug: "donusum-araclari", title: "mm / inch" },
      { slug: "donusum-araclari", title: "kW / HP" },
      { slug: "donusum-araclari", title: "NÃ‚Â·m / kgfÃ‚Â·m" },
      { slug: "donusum-araclari", title: "dev/dk Ã¢â‚¬â€œ m/s" },
      { slug: "donusum-araclari", title: "YoÃ„Å¸unluk Ã¢â‚¬â€œ Hacim Ã¢â‚¬â€œ AÃ„Å¸Ã„Â±rlÃ„Â±k" },
      { slug: "donusum-araclari", title: "bar / psi" },
      { slug: "donusum-araclari", title: "SÃ„Â±caklÃ„Â±k" },
      { slug: "donusum-araclari", title: "AÃƒÂ§Ã„Â± DÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼mÃƒÂ¼" },
    ],
  },
];

function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <article
      id={category.id}
      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <div className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
        Programlar
      </div>
      <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{category.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>

      <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
        {category.tools.map((tool) => (
          <Link
            key={`${category.id}-${tool.slug}-${tool.title}`}
            href={`/programlar/${tool.slug}`}
            className="block rounded-2xl px-3 py-2 text-[15px] font-medium leading-6 text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
          >
            {tool.title}
          </Link>
        ))}
      </div>

      <div className="mt-5 border-t border-slate-100 pt-5">
        <a
          href={`#${category.id}`}
          className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-blue-700"
        >
          AraÃƒÂ§larÃ„Â± GÃƒÂ¶r
        </a>
      </div>
    </article>
  );
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ProgramPageHero
        title="Programlar"
        description="Makine imalat hesap programlarÃ„Â±, diÃ…Å¸li hesaplama araÃƒÂ§larÃ„Â±, mil ÃƒÂ§apÃ„Â± hesabÃ„Â±, kayÃ„Â±Ã…Å¸ kasnak oran hesabÃ„Â±, motor gÃƒÂ¼cÃƒÂ¼ hesabÃ„Â±, kaplin seÃƒÂ§imi, sac ve kaynak hesaplarÃ„Â±, talaÃ…Å¸lÃ„Â± imalat hesaplarÃ„Â± ve teknik dÃƒÂ¶nÃƒÂ¼Ã…Å¸ÃƒÂ¼m araÃƒÂ§larÃ„Â±nÃ„Â± tek sistem altÃ„Â±nda kullanÃ„Â±n."
        showBackToPrograms={false}
      />

      <section className="border-b border-slate-200 bg-white py-8 lg:py-10">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}






