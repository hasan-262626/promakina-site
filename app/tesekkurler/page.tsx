import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teşekkürler",
  description:
    "İletişim talebiniz Pro Makina proje ekibine iletildi. Teknik değerlendirme için en kısa sürede sizinle iletişime geçeceğiz.",
  alternates: {
    canonical: "https://www.promakina.com.tr/tesekkurler",
  },
  openGraph: {
    title: "Teşekkürler | Pro Makina",
    description:
      "İletişim talebiniz Pro Makina proje ekibine iletildi. Teknik değerlendirme için en kısa sürede sizinle iletişime geçeceğiz.",
    url: "https://www.promakina.com.tr/tesekkurler",
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[calc(100vh-12rem)] bg-white py-20 text-slate-900">
      <div className="site-container">
        <section className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_45%,#eef5ff_100%)] px-6 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
            TALEBİNİZ İLETİLDİ
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Teşekkürler
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Talebiniz alındı. Proje ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
