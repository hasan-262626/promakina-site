import { getDb } from "@/lib/admin/db-core";
import { PAGE_SIZE } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { PageHeader, Pagination, Table, Td, formatDate, inputClass, secondaryButtonClass } from "../../../_components/ui";

export const metadata = { title: "Audit Log" };

export default async function AuditLogPage({ searchParams }: { searchParams: Promise<{ action?: string; page?: string }> }) {
  await requirePermission("audit.view");
  const sp = await searchParams;
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);
  const action = sp.action && /^[a-z_.]{1,40}$/.test(sp.action) ? sp.action : undefined;
  const db = await getDb();
  const where = action ? "where action like $1" : "";
  // "_" LIKE joker karakteridir; kaçırılır. Sayfalama değerleri tamsayıdır (sorguya güvenle yazılır).
  const params = action ? [`${action.replace(/_/g, "\\_")}%`] : [];
  const total = (await db.query<{ n: number }>(`select count(*)::int as n from admin_audit_log ${where}`, params)).rows[0].n;
  const rows = (
    await db.query<{ id: number; user_email: string | null; action: string; target: string | null; detail: Record<string, unknown> | null; created_at: string }>(
      `select id, user_email, action, target, detail, created_at from admin_audit_log ${where} order by created_at desc limit ${PAGE_SIZE} offset ${(page - 1) * PAGE_SIZE}`,
      params,
    )
  ).rows;

  return (
    <>
      <PageHeader title="Audit log" description="Kim, ne zaman, hangi işlemi yaptı. IP adresleri ham değil, gizli anahtarla özetlenmiş olarak tutulur; form içeriği ve secret yazılmaz." />
      <form className="mb-4 flex flex-wrap items-end gap-3" role="search">
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">İşlem (ör. auth, redirect, user)</span>
          <input name="action" defaultValue={action} maxLength={40} className={inputClass} />
        </label>
        <button className={secondaryButtonClass}>Filtrele</button>
      </form>
      <Table head={["Zaman", "Kullanıcı", "İşlem", "Hedef", "Detay"]} empty={rows.length === 0}>
        {rows.map((r) => (
          <tr key={r.id}>
            <Td className="whitespace-nowrap text-xs">{formatDate(r.created_at)}</Td>
            <Td className="text-xs">{r.user_email ?? "—"}</Td>
            <Td>
              <code className="text-xs">{r.action}</code>
            </Td>
            <Td className="break-all text-xs">{r.target ?? "—"}</Td>
            <Td className="break-all font-mono text-xs">{r.detail ? JSON.stringify(r.detail) : "—"}</Td>
          </tr>
        ))}
      </Table>
      <Pagination page={page} total={total} pageSize={PAGE_SIZE} buildHref={(p) => `/admin/system/audit?${new URLSearchParams({ ...(action ? { action } : {}), page: String(p) })}`} />
    </>
  );
}
