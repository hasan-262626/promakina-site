import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "PDF Kataloglar | Kütüphane | Pro Makina",
  description:
    "Makina, ekipman ve proses ailelerini toplu biçimde incelemek isteyen ekipler için PDF katalog sayfası.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/pdf-kataloglar",
  },
};

export default function PdfCatalogsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="PDF Kataloglar"
        description="Makina ve sistem ailelerini toplu biçimde incelemek isteyen ekipler için katalog içerikleri bu bölümde yer alacaktır."
        image="/images/makinalar1.png"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">PDF Kataloglar</h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Bu alan, PDF katalog içeriklerinin düzenli bir liste halinde yayınlanacağı kategori sayfasıdır.
              İstersen bir sonraki adımda makina ailelerine göre indirilebilir katalog yapısını da birlikte
              kurgulayabiliriz.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
