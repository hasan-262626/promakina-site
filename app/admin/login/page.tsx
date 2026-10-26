import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser, isAdminConfigured } from "@/lib/admin/server";
import { loginAction } from "../actions";
import { ActionForm } from "../_components/forms";
import { inputClass } from "../_components/ui";

export const metadata: Metadata = { title: "Giriş" };

export default async function AdminLoginPage() {
  if (await getCurrentUser()) redirect("/admin");
  const configured = isAdminConfigured();

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#278DC0]">Pro Makina</p>
        <h1 className="mt-2 text-xl font-semibold text-slate-900">Yönetim paneli girişi</h1>
        {configured ? (
          <ActionForm action={loginAction} submitLabel="Giriş yap" className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                E-posta
              </label>
              <input id="email" name="email" type="email" autoComplete="username" required maxLength={254} className={inputClass} />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Parola
              </label>
              <input id="password" name="password" type="password" autoComplete="current-password" required maxLength={128} className={inputClass} />
            </div>
          </ActionForm>
        ) : (
          <p role="alert" className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Panel henüz yapılandırılmadı. Sunucu ortamında DATABASE_URL ve AUTH_SECRET tanımlanmalı, ardından <code>npm run admin:create</code> ile ilk
            kullanıcı oluşturulmalıdır.
          </p>
        )}
      </div>
    </main>
  );
}
