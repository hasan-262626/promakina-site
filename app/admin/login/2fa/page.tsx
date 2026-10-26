import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MFA_COOKIE, getCurrentUser } from "@/lib/admin/server";
import { verifyMfaAction } from "../../mfa-actions";
import { MfaCodeForm } from "../../_components/mfa-forms";

export const metadata: Metadata = { title: "İki adımlı doğrulama" };

export default async function MfaLoginPage() {
  if (await getCurrentUser()) redirect("/admin");
  if (!(await cookies()).get(MFA_COOKIE)) redirect("/admin/login");

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#278DC0]">Pro Makina</p>
        <h1 className="mt-2 text-xl font-semibold text-slate-900">İki adımlı doğrulama</h1>
        <p className="mb-5 mt-2 text-sm text-slate-600">Doğrulama uygulamasındaki 6 haneli kodu veya kurtarma kodlarınızdan birini girin.</p>
        <MfaCodeForm action={verifyMfaAction} submitLabel="Doğrula" label="Kod" allowRecovery />
        <Link href="/admin/login" className="mt-4 inline-block text-xs text-slate-500 underline">
          Farklı hesapla giriş yap
        </Link>
      </div>
    </main>
  );
}
