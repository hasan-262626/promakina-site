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
    title: "Güç Aktarım Hesapları",
    description:
      "Dişli, zincir, kayış-kasnak, kaplin ve motor aktarım hesaplarını tek yerde toplayın.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "zincir-disli-hesabi", title: "Zincir ve Dişli Hesapları" },
      { slug: "duz-helis-disli-hesabi", title: "Düz / Helis Dişli Hesabı" },
      { slug: "ic-planet-disli-hesabi", title: "Düz-Helis İç (Planet) Dişli Hesabı" },
      { slug: "duz-helis-konik-disli-hesabi", title: "Düz Helis Konik Dişli Hesabı" },
      { slug: "kremayer-disli-hesabi", title: "Kremayer Dişli Hesabı" },
      { slug: "kayis-kasnak-oran-hesabi", title: "Kayış-Kasnak Oran Hesabı" },
      { slug: "motor-gucu-on-hesabi", title: "Motor Gücü Ön Hesabı" },
    ],
  },
  {
    id: "mil-kaplin-ve-baglanti-hesaplari",
    title: "Mil, Kaplin ve Bağlantı Hesapları",
    description:
      "Mil çapı, kaplin seçimi, kama bağlantısı ve göbek uyumluluğu için ön mühendislik araçlarını birlikte kullanın.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "mil-capi-hesabi", title: "Mil Çapı Hesabı" },
      { slug: "kaplin-secimi-on-hesabi", title: "Kaplin Seçimi Ön Hesabı" },
      { slug: "kama-kanali-acim-olculeri", title: "Kama Kanalı Açım Ölçüleri" },
      { slug: "segman-ve-kanal-olculeri", title: "Segman ve Kanal Ölçüleri" },
    ],
  },
  {
    id: "talasli-imalat-hesaplari",
    title: "Talaşlı İmalat Hesapları",
    description:
      "Vida açım, kılavuz delik, kesme hızı, devir ve freze-torna ön hesaplarını tek yerde kullanın.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "vida-acim-olculeri", title: "Vida Açım Ölçüleri" },
      { slug: "talasli-imalat-hesaplari", title: "Kılavuz Delik Hesabı" },
      { slug: "talasli-imalat-hesaplari", title: "Kesme Hızı / Devir Hesabı" },
      { slug: "talasli-imalat-hesaplari", title: "Freze / Torna Ön Hesapları" },
    ],
  },
  {
    id: "sac-kaynak-ve-imalat-hesaplari",
    title: "Sac, Kaynak ve İmalat Hesapları",
    description:
      "Sac, profil, boru, büküm ve kaynak ön hesaplarını aynı sade ve premium imalat çatısı altında kullanın.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "malzeme-agirlik-hesabi", title: "Sac Ağırlık Hesabı" },
      { slug: "malzeme-agirlik-hesabi", title: "Profil / Boru Ağırlık Hesabı" },
      { slug: "sac-kaynak-hesaplari", title: "Büküm Açılım Boyu" },
      { slug: "sac-kaynak-hesaplari", title: "Abkant Tonaj Hesabı" },
      { slug: "sac-kaynak-hesaplari", title: "Kaynak Metrajı ve Dolgu Hesabı" },
    ],
  },
  {
    id: "tolerans-gecme-ve-kanal-hesaplari",
    title: "Tolerans, Geçme ve Kanal Hesapları",
    description:
      "ISO geçme, kama kanalı ve segman-kanal verilerini standart tabanlı olarak aynı premium sistem altında inceleyin.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "iso-gecme-toleranslari", title: "ISO Geçme Toleransları" },
      { slug: "kama-kanali-acim-olculeri", title: "Kama Kanalı Açım Ölçüleri" },
      { slug: "segman-ve-kanal-olculeri", title: "Segman ve Kanal Ölçüleri" },
    ],
  },
  {
    id: "donusum-araclari",
    title: "Dönüşüm Araçları",
    description:
      "Teknik dönüşüm araçları ile birim, güç, tork, basınç, sıcaklık ve yoğunluk-hacim-ağırlık dönüşümlerini tek ekranda kullanın.",
    tools: [
      { slug: "helezon-kapasite-ve-mekanik-secim-programi", title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı" },
      { slug: "elevator-kapasite-ve-secim-programi", title: "Elevatör Kapasite ve Seçim Programı" },
      { slug: "konveyor-kapasite-ve-secim-hesap-programi", title: "Konveyör Kapasite ve Seçim Hesap Programı" },
      { slug: "donusum-araclari", title: "mm / inch" },
      { slug: "donusum-araclari", title: "kW / HP" },
      { slug: "donusum-araclari", title: "N·m / kgf·m" },
      { slug: "donusum-araclari", title: "dev/dk – m/s" },
      { slug: "donusum-araclari", title: "Yoğunluk – Hacim – Ağırlık" },
      { slug: "donusum-araclari", title: "bar / psi" },
      { slug: "donusum-araclari", title: "Sıcaklık" },
      { slug: "donusum-araclari", title: "Açı Dönüşümü" },
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
          Araçları Gör
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
        description="Makine imalat hesap programları, dişli hesaplama araçları, mil çapı hesabı, kayış kasnak oran hesabı, motor gücü hesabı, kaplin seçimi, sac ve kaynak hesapları, talaşlı imalat hesapları ve teknik dönüşüm araçlarını tek sistem altında kullanın."
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
