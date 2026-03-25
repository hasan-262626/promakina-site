export default function SpurHelicalGearCalculator() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Düz / Helis Dişli Hesaplayıcı
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Bu alan geçici olarak sadeleştirildi. Sistem ayağa kalktıktan sonra
          hesap modülünü tekrar temiz şekilde ekleyeceğiz.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Modül
          </label>
          <input
            type="number"
            placeholder="Örn: 2"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Diş Sayısı
          </label>
          <input
            type="number"
            placeholder="Örn: 24"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Basınç Açısı
          </label>
          <input
            type="number"
            placeholder="Örn: 20"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Helis Açısı
          </label>
          <input
            type="number"
            placeholder="Örn: 15"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
        Hesap sonuçları bu modülün tam sürümü yeniden eklendiğinde burada
        gösterilecektir.
      </div>
    </section>
  );
}