import { EXPECTED_HEADERS, checkSecurityHeaders, getSecurityOverview } from "@/lib/admin/data";
import { LOGIN_WINDOW_MINUTES, MAX_FAILURES_PER_EMAIL, MAX_FAILURES_PER_IP } from "@/lib/admin/auth-core";
import { getDb } from "@/lib/admin/db-core";
import { requirePermission } from "@/lib/admin/server";
import { revokeSessionAction } from "../../../actions";
import { Badge, Card, PageHeader, Stat, Table, Td, formatDate, secondaryButtonClass } from "../../../_components/ui";

export const metadata = { title: "Güvenlik" };

export default async function SecurityPage() {
  const user = await requirePermission("security.view");
  const [overview, headers] = await Promise.all([getSecurityOverview(), checkSecurityHeaders()]);
  const deps = overview.dependencies;
  const cspReports = (
    await (await getDb()).query<{ directive: string; blocked: string; page: string; count: number; last_seen: string }>(
      "select directive, blocked, page, count, last_seen from csp_reports order by last_seen desc limit 50",
    )
  ).rows;

  return (
    <>
      <PageHeader title="Güvenlik merkezi" description="Parola özeti, oturum token'ı, API anahtarı veya veritabanı bilgisi bu ekranda hiçbir koşulda gösterilmez." />
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Başarısız giriş (24 saat)" value={overview.failures.last24} hint={`${overview.failures.ips24} farklı IP`} />
        <Stat label="Başarısız giriş (7 gün)" value={overview.failures.last7d} />
        <Stat label="Aktif oturum" value={overview.sessions.length} />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Son başarılı girişler">
          <ul className="divide-y divide-slate-100 text-sm">
            {overview.logins.length === 0 ? <li className="py-2 text-slate-500">Kayıt yok.</li> : null}
            {overview.logins.map((l, i) => (
              <li key={i} className="flex justify-between py-2">
                <span>{l.user_email}</span>
                <span className="text-xs text-slate-500">{formatDate(l.created_at)}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Rate limit ve kilit">
          <ul className="space-y-1 text-sm">
            <li>Admin girişi: e-posta başına {MAX_FAILURES_PER_EMAIL}, IP başına {MAX_FAILURES_PER_IP} hatalı deneme / {LOGIN_WINDOW_MINUTES} dk</li>
            <li>İletişim ve teklif formu: IP başına 5 gönderim / 15 dk (veritabanı tabanlı, tüm sunucu örneklerinde ortak)</li>
            <li>Oturum: 12 saat mutlak, 2 saat hareketsizlik; HttpOnly, Secure, SameSite=Strict çerez</li>
          </ul>
        </Card>
        <Card title="Güvenlik başlıkları (ana sayfa)">
          {headers ? (
            <ul className="space-y-1 text-sm">
              {EXPECTED_HEADERS.map((h) => (
                <li key={h} className="flex justify-between">
                  <code className="text-xs">{h}</code>
                  {headers[h] ? <Badge tone="green">Var</Badge> : <Badge tone="red">Yok</Badge>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">Başlıklar okunamadı.</p>
          )}
          <p className="mt-3 text-xs text-slate-500">Public CSP rapor modunda; admin ekranları nonce tabanlı zorunlu CSP ile sunulur.</p>
        </Card>
        <Card title="Bağımlılık denetimi (npm audit)">
          <p className="mb-2 text-xs text-slate-500">Anlık görüntü: {formatDate(deps.generatedAt)} · güncellemek için <code>npm run security:snapshot</code></p>
          <div className="mb-3 flex flex-wrap gap-2">
            {(["critical", "high", "moderate", "low"] as const).map((s) => (
              <Badge key={s} tone={(deps.counts as Record<string, number>)[s] ? (s === "low" ? "amber" : "red") : "green"}>
                {s}: {(deps.counts as Record<string, number>)[s] ?? 0}
              </Badge>
            ))}
          </div>
          <ul className="space-y-1 text-xs">
            {deps.packages.map((p) => (
              <li key={p.name}>
                <span className="font-mono">{p.name}</span> · {p.severity} · {p.direct ? "doğrudan" : "dolaylı"}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <h2 className="mb-2 mt-8 text-base font-semibold">Public CSP ihlal raporları (son 50)</h2>
      <p className="mb-2 text-xs text-slate-500">Tarayıcıların /api/csp-report adresine gönderdiği raporlar; yalnız yönerge, engellenen kaynağın kökeni ve sayfa yolu saklanır.</p>
      <Table head={["Yönerge", "Engellenen kaynak", "Sayfa", "Adet", "Son"]} empty={cspReports.length === 0}>
        {cspReports.map((r) => (
          <tr key={`${r.directive}-${r.blocked}-${r.page}`}>
            <Td className="font-mono text-xs">{r.directive}</Td>
            <Td className="font-mono text-xs">{r.blocked}</Td>
            <Td className="font-mono text-xs">{r.page}</Td>
            <Td>{r.count}</Td>
            <Td className="text-xs">{formatDate(r.last_seen)}</Td>
          </tr>
        ))}
      </Table>

      <h2 className="mb-2 mt-8 text-base font-semibold">Aktif oturumlar</h2>
      <Table head={["Kullanıcı", "Açılış", "Son etkinlik", "Bitiş", "Tarayıcı", ""]} empty={overview.sessions.length === 0}>
        {overview.sessions.map((s) => (
          <tr key={s.id}>
            <Td>{s.email}</Td>
            <Td className="text-xs">{formatDate(s.created_at)}</Td>
            <Td className="text-xs">{formatDate(s.last_seen_at)}</Td>
            <Td className="text-xs">{formatDate(s.expires_at)}</Td>
            <Td className="max-w-xs truncate text-xs">{s.user_agent ?? "—"}</Td>
            <Td>
              {s.id === user.sessionId ? (
                <Badge tone="blue">Bu oturum</Badge>
              ) : (
                <form action={revokeSessionAction}>
                  <input type="hidden" name="id" value={s.id} />
                  <button className={secondaryButtonClass}>Sonlandır</button>
                </form>
              )}
            </Td>
          </tr>
        ))}
      </Table>
    </>
  );
}
