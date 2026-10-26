import Link from "next/link";
import { ROLE_LABELS, ROLE_PERMISSIONS } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { getSystemInfo } from "@/lib/admin/data";
import { SITE_ORIGIN } from "@/lib/admin/validation";
import { changeOwnPasswordAction } from "../../actions";
import { ActionForm } from "../../_components/forms";
import { Card, PageHeader, inputClass } from "../../_components/ui";

export const metadata = { title: "Genel ayarlar" };

export default async function SettingsPage() {
  const user = await requirePermission("dashboard.view");
  const system = getSystemInfo();

  return (
    <>
      <PageHeader title="Genel / Hesabım" description="Site bilgileri salt okunurdur; değişiklikler kod ve ortam değişkenleri üzerinden yapılır." />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Site">
          <dl className="grid grid-cols-2 gap-y-2 text-sm">
            <dt className="text-slate-500">Canlı alan adı</dt>
            <dd>{SITE_ORIGIN}</dd>
            <dt className="text-slate-500">Diller</dt>
            <dd>TR (kaynak), EN, RU, AR</dd>
            <dt className="text-slate-500">Ortam</dt>
            <dd>{system.environment}</dd>
            <dt className="text-slate-500">Build</dt>
            <dd className="font-mono">{system.commit}</dd>
          </dl>
        </Card>
        <Card title="Hesabım">
          <p className="text-sm">
            {user.name} · {user.email} · {ROLE_LABELS[user.role]}
          </p>
          <p className="mt-2 text-xs text-slate-500">Yetkiler: {ROLE_PERMISSIONS[user.role].join(", ")}</p>
          <p className="mt-3 text-sm">
            <Link href="/admin/2fa" className="text-[#154764] underline">
              İki adımlı doğrulama (2FA) ayarları
            </Link>
          </p>
          <h3 className="mt-5 text-sm font-semibold">Parola değiştir</h3>
          <p className="mb-3 text-xs text-slate-500">Değişiklikten sonra tüm oturumlarınız kapanır ve yeniden giriş yapmanız istenir.</p>
          <ActionForm action={changeOwnPasswordAction} submitLabel="Parolayı değiştir" className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Mevcut parola</span>
              <input name="current" type="password" autoComplete="current-password" required maxLength={128} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Yeni parola (en az 12 karakter, harf ve rakam)</span>
              <input name="next" type="password" autoComplete="new-password" required minLength={12} maxLength={128} className={inputClass} />
            </label>
          </ActionForm>
          <p className="mt-4 text-xs text-slate-500">İki aşamalı doğrulama (TOTP) altyapısı için oturum katmanı hazır; bu fazda etkin değil.</p>
        </Card>
      </div>
    </>
  );
}
