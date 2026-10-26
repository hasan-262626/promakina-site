import Link from "next/link";

export default function AdminForbidden() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold text-red-700">403</p>
      <h1 className="mt-2 text-2xl font-semibold">Bu bölüme erişim yetkiniz yok</h1>
      <p className="mt-3 text-sm text-slate-600">Rolünüz bu işlem için yeterli değil. Gerekirse bir süper yöneticiden yetki isteyin.</p>
      <Link href="/admin" className="mt-6 rounded-lg bg-[#154764] px-4 py-2 text-sm font-semibold text-white hover:bg-[#278DC0]">
        Panele dön
      </Link>
    </main>
  );
}
