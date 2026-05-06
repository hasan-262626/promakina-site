"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trText } from "../lib/tr-text";
import { CookieSettingsLink } from "./cookie-preferences";

function shouldHideGlobalCta(pathname: string) {
  return (
    pathname === "/iletisim" ||
    pathname === "/kutuphane" ||
    pathname.startsWith("/kutuphane/") ||
    pathname.startsWith("/hizmetler/") ||
    pathname.startsWith("/makinalar/") ||
    pathname.startsWith("/makinalar-ekipman/") ||
    pathname.startsWith("/projeler/") ||
    pathname.startsWith("/sektorler/") ||
    pathname.startsWith("/cozumler/")
  );
}

function shouldHideMobileStickyCta(pathname: string) {
  return pathname === "/iletisim";
}

export function SiteFooterCta() {
  const pathname = usePathname();
  const hideGlobalCta = shouldHideGlobalCta(pathname);

  return (
    <>
      {!hideGlobalCta ? (
        <section id="iletisim" className="pb-16 sm:pb-20">
          <div className="site-container">
            <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                {trText("Projeniz için teklif veya teknik görüşme talep edin")}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/82">
                {trText(
                  "Kompost tesisi, gübre tesisi, makina ve ekipman, biyogaz veya teknik danışmanlık talepleriniz için bizimle iletişime geçin.",
                )}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/iletisim"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
                >
                  {trText("İletişim Sayfasına Git")}
                </Link>
                <a
                  href="tel:+905380631163"
                  className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="site-container py-14 sm:py-16 lg:py-18">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1fr_1fr_1fr_0.95fr]">
            <div className="max-w-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Pro Makina</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {trText(
                  "Pro Makina, proses mühendisliği, makine imalatı ve anahtar teslim tesis kurulumu yaklaşımını aynı yapıda sunan endüstriyel çözüm partneridir.",
                )}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Sektörler
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/sektorler/gubre-ve-granulasyon-tesisleri" className="transition hover:text-white">
                    Gübre ve Granülasyon
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler/kompost-ve-organik-atik-tesisleri" className="transition hover:text-white">
                    Kompost ve Organik Atık
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler/enerji-ve-biyogaz-sistemleri" className="transition hover:text-white">
                    Enerji ve Biyogaz
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler/madencilik-ve-mineral-isleme" className="transition hover:text-white">
                    Madencilik ve Mineral
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler/kimya-ve-proses-endustrisi" className="transition hover:text-white">
                    Kimya ve Proses
                  </Link>
                </li>
                <li>
                  <Link href="/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" className="transition hover:text-white">
                    Dökme Katı Malzeme
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Hizmetler
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/hizmetler/anahtar-teslim-tesis-kurulumu" className="transition hover:text-white">
                    Anahtar Teslim Tesis
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/proses-tasarimi-ve-muhendislik" className="transition hover:text-white">
                    Proses Tasarımı
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/gubre-tesisi-kurulumu" className="transition hover:text-white">
                    Gübre Tesisi Kurulumu
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/kompost-tesisi-kurulumu" className="transition hover:text-white">
                    Kompost Tesisi Kurulumu
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/organomineral-gubre-tesisi" className="transition hover:text-white">
                    Organomineral Gübre
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler/sivi-gubre-uretim-tesisi" className="transition hover:text-white">
                    Sıvı Gübre Üretimi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Teknik İçerikler
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/kutuphane/blog" className="transition hover:text-white">
                    Blog / Makaleler
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane/teknik-rehberler" className="transition hover:text-white">
                    Teknik Rehberler
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane/blog/kurutma-tamburu-hesaplama" className="transition hover:text-white">
                    Kurutma Tamburu
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane/blog/helezon-kapasite-hesabi" className="transition hover:text-white">
                    Helezon Kapasite
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="transition hover:text-white">
                    Granül Gübre Süreci
                  </Link>
                </li>
                <li>
                  <Link href="/kutuphane/blog/kompost-tesisi-kurulumu" className="transition hover:text-white">
                    Kompost Tesisi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Hesaplama Araçları
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/programlar" className="transition hover:text-white">
                    Programlar
                  </Link>
                </li>
                <li>
                  <Link href="/programlar/helezon-kapasite-hesabi" className="transition hover:text-white">
                    Helezon Hesabı
                  </Link>
                </li>
                <li>
                  <Link href="/programlar/konveyor-kapasite-hesabi" className="transition hover:text-white">
                    Konveyör Hesabı
                  </Link>
                </li>
                <li>
                  <Link href="/programlar/kurutma-tamburu-hesabi" className="transition hover:text-white">
                    Tambur Hesabı
                  </Link>
                </li>
                <li>
                  <Link href="/programlar/elevator-kapasite-hesabi" className="transition hover:text-white">
                    Elevatör Hesabı
                  </Link>
                </li>
                <li>
                  <Link href="/programlar/redler-kapasite-hesabi" className="transition hover:text-white">
                    Redler Hesabı
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                Çözümler / İletişim
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                <li>
                  <Link href="/cozumler" className="transition hover:text-white">
                    Çözüm Merkezi
                  </Link>
                </li>
                <li>
                  <Link href="/cozumler/gubre-tesisi-kurulumu" className="transition hover:text-white">
                    Gübre Tesisi
                  </Link>
                </li>
                <li>
                  <Link href="/cozumler/endustriyel-kurutma-sistemleri" className="transition hover:text-white">
                    Kurutma Sistemleri
                  </Link>
                </li>
                <li>
                  <Link href="/cozumler/vidali-konveyor-sistemleri" className="transition hover:text-white">
                    Vidalı Konveyör
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="transition hover:text-white">
                    İletişim
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@promakina.com.tr" className="transition hover:text-white">
                    info@promakina.com.tr
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/905380631163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <CookieSettingsLink className="transition hover:text-white" />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-white/55">{trText("© 2026 Pro Makina. Tüm hakları saklıdır.")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905380631163"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={trText("WhatsApp ile iletişime geç")}
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-green-600 sm:bottom-6 sm:right-6"
    >
      <span className="text-lg">W</span>
      WhatsApp
    </a>
  );
}

export function MobileStickyCta() {
  const pathname = usePathname();

  if (shouldHideMobileStickyCta(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-20 z-[69] sm:hidden">
      <div className="rounded-full border border-slate-200 bg-white/95 p-2 shadow-[0_16px_48px_rgba(15,23,42,0.18)] backdrop-blur">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/iletisim"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-700 px-4 text-xs font-semibold text-white transition hover:bg-blue-800"
          >
            Teklif Al
          </Link>
          <Link
            href="/hizmetler/teknik-danismanlik"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-200 px-4 text-xs font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
          >
            Teknik Danışmanlık
          </Link>
        </div>
      </div>
    </div>
  );
}
