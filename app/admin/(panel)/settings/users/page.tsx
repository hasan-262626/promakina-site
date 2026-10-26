import { getDb } from "@/lib/admin/db-core";
import { ROLE_LABELS, ROLES } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { createUserAction, resetUserPasswordAction, updateUserAction } from "../../../actions";
import { resetUserMfaAction } from "../../../mfa-actions";
import { mfaRequiredFor } from "@/lib/admin/totp";
import { ActionForm, ConfirmSubmit } from "../../../_components/forms";
import { Badge, Card, PageHeader, Table, Td, formatDate, inputClass, secondaryButtonClass } from "../../../_components/ui";

export const metadata = { title: "Kullanıcılar ve roller" };

export default async function UsersPage() {
  const actor = await requirePermission("users.manage");
  const db = await getDb();
  const users = (
    await db.query<{ id: string; email: string; name: string; role: (typeof ROLES)[number]; active: boolean; last_login_at: string | null; created_at: string; totp_enabled: boolean }>(
      "select id, email, name, role, active, last_login_at, created_at, totp_enabled from admin_users order by created_at",
    )
  ).rows;

  return (
    <>
      <PageHeader
        title="Kullanıcılar ve roller"
        description="Süper Yönetici: tüm ayarlar ve kullanıcılar · Yönetici: içerik, medya, SEO, talepler, yönlendirmeler · Editör: içerik ve medya."
      />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Table head={["Kullanıcı", "Rol / durum", "2FA", "Son giriş", ""]}>
          {users.map((u) => (
            <tr key={u.id}>
              <Td>
                <p className="font-medium">{u.name}</p>
                <p className="text-xs text-slate-500">{u.email}</p>
              </Td>
              <Td>
                <form action={updateUserAction} className="flex flex-wrap items-center gap-2">
                  <input type="hidden" name="id" value={u.id} />
                  <label className="sr-only" htmlFor={`role-${u.id}`}>
                    Rol
                  </label>
                  <select id={`role-${u.id}`} name="role" defaultValue={u.role} disabled={u.id === actor.id} className={`${inputClass} w-auto`}>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {ROLE_LABELS[r]}
                      </option>
                    ))}
                  </select>
                  <label className="sr-only" htmlFor={`active-${u.id}`}>
                    Durum
                  </label>
                  <select id={`active-${u.id}`} name="active" defaultValue={String(u.active)} disabled={u.id === actor.id} className={`${inputClass} w-auto`}>
                    <option value="true">Aktif</option>
                    <option value="false">Pasif</option>
                  </select>
                  {u.id === actor.id ? <Badge tone="blue">Siz</Badge> : <button className={secondaryButtonClass}>Kaydet</button>}
                </form>
              </Td>
              <Td>
                {u.totp_enabled ? <Badge tone="green">Etkin</Badge> : mfaRequiredFor(u.role) ? <Badge tone="amber">Zorunlu, kurulmadı</Badge> : <Badge>Kapalı</Badge>}
                {u.totp_enabled && u.id !== actor.id ? (
                  <form action={resetUserMfaAction} className="mt-1">
                    <input type="hidden" name="userId" value={u.id} />
                    <ConfirmSubmit label="2FA sıfırla" confirmLabel="Sıfırla (oturumlar kapanır)" className="text-xs text-[#154764] underline" />
                  </form>
                ) : null}
              </Td>
              <Td className="text-xs">{formatDate(u.last_login_at)}</Td>
              <Td>
                {u.id !== actor.id ? (
                  <details>
                    <summary className="cursor-pointer text-xs font-medium text-[#154764]">Parola sıfırla</summary>
                    <ActionForm action={resetUserPasswordAction} submitLabel="Sıfırla" className="mt-2 w-56">
                      <input type="hidden" name="id" value={u.id} />
                      <label className="sr-only" htmlFor={`pw-${u.id}`}>
                        Yeni geçici parola
                      </label>
                      <input id={`pw-${u.id}`} name="password" type="password" autoComplete="new-password" minLength={12} maxLength={128} required className={inputClass} />
                    </ActionForm>
                  </details>
                ) : null}
              </Td>
            </tr>
          ))}
        </Table>

        <Card title="Yeni kullanıcı">
          <ActionForm action={createUserAction} submitLabel="Oluştur" className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Ad Soyad</span>
              <input name="name" required minLength={2} maxLength={80} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">E-posta</span>
              <input name="email" type="email" required maxLength={254} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Rol</span>
              <select name="role" defaultValue="EDITOR" className={inputClass}>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {ROLE_LABELS[r]}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Geçici parola (en az 12 karakter)</span>
              <input name="password" type="password" autoComplete="new-password" required minLength={12} maxLength={128} className={inputClass} />
            </label>
          </ActionForm>
        </Card>
      </div>
    </>
  );
}
