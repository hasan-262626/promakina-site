import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-extrabold text-[#278DC0]">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-[#154764]">Sayfa bulunamadı</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfadan devam edebilir ya da
          makina ve ekipmanlarımıza göz atabilirsiniz.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#278DC0] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154764]"
          >
            Ana sayfaya dön
          </Link>
          <Link
            href="/makinalar-ekipman"
            className="rounded-full border-2 border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:border-[#154764] hover:text-[#154764]"
          >
            Makinalar ve Ekipmanlar
          </Link>
        </div>
      </div>
    </main>
  );
}
