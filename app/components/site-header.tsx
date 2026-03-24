import Link from "next/link";
import { trText } from "../lib/tr-text";
import { machineGroups, sectors, services } from "../data";

export function SiteHeader() {
  const menuServices = services.filter((service) =>
    [
      "anahtar-teslim-tesis-kurulumu",
      "proses-tasarimi-ve-muhendislik",
      "makine-imalati",
      "kurulum-ve-devreye-alma",
      "modernizasyon-ve-revizyon",
      "teknik-danismanlik",
      "bakim-ve-servis",
    ].includes(service.slug),
  );

  const menuMachines = machineGroups.filter((machine) =>
    [
      "tambur-sistemleri",
      "tasima-ekipmanlari",
      "kiricilar-ve-parcalayicilar",
      "reaktorler-ve-tanklar",
      "eleme-ve-siniflandirma-sistemleri",
      "toz-toplama-sistemleri",
      "paketleme-ve-dolum-sistemleri",
      "depolama-ve-besleme-sistemleri",
    ].includes(machine.slug),
  );

  const menuSectors = sectors.filter((sector) =>
    [
      "gubre-ve-granulasyon-tesisleri",
      "kompost-ve-organik-atik-tesisleri",
      "madencilik-ve-mineral-isleme",
      "kimya-ve-proses-endustrisi",
      "geri-donusum-ve-atik-yonetimi",
      "enerji-ve-biyogaz-sistemleri",
      "atik-su-camuru-ve-aritma-cozumleri",
      "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    ].includes(sector.slug),
  );

  const libraryMenu = [
    { label: "Blog", href: "/kutuphane#blog-makaleler" },
    { label: "Teknik Rehberler", href: "/kutuphane#teknik-rehberler" },
    { label: "PDF Kataloglar", href: "/kutuphane#pdf-kataloglar" },
    { label: "Video İçerikler", href: "/kutuphane#video-icerikler" },
    { label: "Sık Sorulan Sorular", href: "/kutuphane#sik-sorulan-sorular" },
    { label: "Terimler Sözlüğü", href: "/kutuphane#terimler-sozlugu" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-slate-200/80">
        <div className="site-container flex items-center justify-between gap-4 py-3 text-[12px] text-slate-700 sm:text-[13px]">
          <p className="truncate">Endüstriyel Tesis Çözümleri</p>
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
            <Link href="/iletisim" className="transition hover:text-blue-700">
              İletişim
            </Link>
            <a href="#" className="transition hover:text-blue-700">
              Kariyer
            </a>
            <button className="transition hover:text-blue-700">Dil Değiştir</button>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/96 backdrop-blur-xl">
        <div className="site-container flex items-center justify-between gap-4 py-4 lg:gap-5 lg:py-5">
          <Link href="/" className="flex min-w-0 shrink-0 items-center">
            <div className="min-w-0 leading-none">
              <div className="text-[20px] font-semibold uppercase tracking-[0.04em] text-slate-950 lg:text-[22px]">
                PRO MAKİNA
              </div>
              <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-slate-500 lg:text-[10px] lg:tracking-[0.4em]">
                PROSES ENGINEERING
              </div>
            </div>
          </Link>

          <nav className="hidden xl:flex xl:min-w-0 xl:flex-1 xl:items-center xl:justify-center">
            <ul className="flex items-center gap-5 text-[14px] font-semibold text-slate-800 2xl:gap-7 2xl:text-[15px]">
              <li>
                <Link href="/" className="whitespace-nowrap transition hover:text-blue-700">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <div className="group relative">
                  <Link href="/hizmetler" className="whitespace-nowrap transition hover:text-blue-700">
                    Hizmetler
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[340px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="grid gap-1 text-[15px] text-slate-700">
                      {menuServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/hizmetler/${service.slug}`}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-blue-700"
                        >
                          {trText(service.title)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="group relative">
                  <Link
                    href="/makinalar-ekipman"
                    className="whitespace-nowrap transition hover:text-blue-700"
                  >
                    Makinalar & Ekipman
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="grid gap-1 text-[15px] text-slate-700">
                      {menuMachines.map((machine) => (
                        <Link
                          key={machine.slug}
                          href={`/makinalar/${machine.slug}`}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-blue-700"
                        >
                          {trText(machine.title)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative">
                <Link href="/sektorler" className="whitespace-nowrap transition hover:text-blue-700">
                  Sektörler
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[360px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="grid gap-1 text-[15px] text-slate-700">
                    {menuSectors.map((sector) => (
                      <Link
                        key={sector.slug}
                        href={`/sektorler/${sector.slug}`}
                        className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-blue-700"
                      >
                        {trText(sector.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link href="/projeler" className="whitespace-nowrap transition hover:text-blue-700">
                  Projeler
                </Link>
              </li>
              <li>
                <div className="group relative">
                  <Link href="/kutuphane" className="whitespace-nowrap transition hover:text-blue-700">
                    Kütüphane
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="grid gap-1 text-[15px] text-slate-700">
                      {libraryMenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-blue-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/hakkimizda" className="whitespace-nowrap transition hover:text-blue-700">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="whitespace-nowrap transition hover:text-blue-700">
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link
              href="/iletisim"
              className="inline-flex min-h-[48px] items-center justify-center border border-slate-200 px-4 text-[14px] font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700 2xl:min-h-[52px] 2xl:px-5 2xl:text-[15px]"
            >
              Teklif Al
            </Link>
          </div>

          <button className="shrink-0 border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 sm:text-sm xl:hidden">
            Menü
          </button>
        </div>
      </div>
    </header>
  );
}
