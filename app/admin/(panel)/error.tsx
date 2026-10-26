"use client";

/** Hata ekranı: yığın izi veya iç hata mesajı gösterilmez; yalnız Next.js'in özet kimliği (digest) verilir. */
export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div role="alert" className="mx-auto max-w-lg rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-900">
      <h2 className="text-base font-semibold">Bu ekran yüklenemedi</h2>
      <p className="mt-2">Beklenmeyen bir hata oluştu. Tekrar deneyin; sorun sürerse kayıt kodunu teknik ekibe iletin.</p>
      {error.digest ? <p className="mt-2 font-mono text-xs">Kayıt kodu: {error.digest}</p> : null}
      <button type="button" onClick={reset} className="mt-4 rounded-lg bg-red-700 px-3 py-1.5 font-semibold text-white hover:bg-red-800">
        Tekrar dene
      </button>
    </div>
  );
}
