import { getRedirectOverview } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { createRedirectAction, deleteRedirectAction, toggleRedirectAction } from "../../../actions";
import { ActionForm, ConfirmSubmit } from "../../../_components/forms";
import { Badge, Card, PageHeader, Table, Td, formatDate, inputClass, secondaryButtonClass } from "../../../_components/ui";

export const metadata = { title: "Yönlendirmeler" };

export default async function RedirectsPage() {
  await requirePermission("redirects.manage");
  const { managed, code, issues } = await getRedirectOverview();

  return (
    <>
      <PageHeader
        title="Yönlendirmeler"
        description="Admin'den eklenen kurallar canlıda proxy tarafından uygulanır (60 sn önbellek). Hedef yalnız site içi yol olabilir; dış alan adına yönlendirme yapılamaz."
      />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-6">
          {issues.length ? (
            <Card title={`Zincir / döngü uyarıları (${issues.length})`}>
              <ul className="space-y-2 text-sm">
                {issues.slice(0, 30).map((issue, i) => (
                  <li key={i} className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                    <Badge tone={issue.type === "loop" ? "red" : "amber"}>{issue.type === "loop" ? "Döngü" : "Zincir"}</Badge>{" "}
                    <span className="break-all font-mono text-xs">{issue.path.join(" → ")}</span>
                    {issue.type === "chain" ? (
                      <p className="mt-1 text-xs text-slate-700">
                        Öneri: <span className="font-mono">{issue.suggestion.source}</span> → <span className="font-mono">{issue.suggestion.destination}</span>
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}

          <section>
            <h2 className="mb-2 text-base font-semibold">Admin kuralları ({managed.length})</h2>
            <Table head={["Kaynak", "Hedef", "Tip", "Durum", "Oluşturan", "Tarih", ""]} empty={managed.length === 0}>
              {managed.map((r) => (
                <tr key={r.id}>
                  <Td className="break-all font-mono text-xs">{r.source}</Td>
                  <Td className="break-all font-mono text-xs">{r.destination}</Td>
                  <Td>{r.status_code}</Td>
                  <Td>{r.enabled ? <Badge tone="green">Aktif</Badge> : <Badge>Kapalı</Badge>}</Td>
                  <Td className="text-xs">{r.created_by ?? "—"}</Td>
                  <Td className="text-xs">{formatDate(r.created_at)}</Td>
                  <Td>
                    <div className="flex flex-wrap gap-2">
                      <form action={toggleRedirectAction}>
                        <input type="hidden" name="id" value={r.id} />
                        <input type="hidden" name="enabled" value={String(!r.enabled)} />
                        <button className={secondaryButtonClass}>{r.enabled ? "Kapat" : "Aç"}</button>
                      </form>
                      <form action={deleteRedirectAction}>
                        <input type="hidden" name="id" value={r.id} />
                        <ConfirmSubmit label="Sil" confirmLabel="Kalıcı olarak sil" className={secondaryButtonClass} />
                      </form>
                    </div>
                  </Td>
                </tr>
              ))}
            </Table>
          </section>

          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold">Kodda tanımlı yönlendirmeler ({code.length}) — salt okunur</summary>
            <p className="mt-2 text-xs text-slate-500">next.config.ts ve proxy.ts içindeki kurallar; değişiklik kod üzerinden yapılır. Zincir analizine dahildir.</p>
            <ul className="mt-3 max-h-96 space-y-1 overflow-y-auto font-mono text-xs">
              {code.map((r, i) => (
                <li key={i} className="break-all">
                  <span className="text-slate-400">[{r.origin}]</span> {r.source} → {r.destination}
                </li>
              ))}
            </ul>
          </details>
        </div>

        <Card title="Yeni yönlendirme">
          <ActionForm action={createRedirectAction} submitLabel="Kaydet" className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Kaynak URL</span>
              <input name="source" required placeholder="/eski-sayfa" maxLength={512} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Hedef URL</span>
              <input name="destination" required placeholder="/yeni-sayfa" maxLength={512} className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Tip</span>
              <select name="statusCode" defaultValue="301" className={inputClass}>
                <option value="301">301 — Kalıcı</option>
                <option value="308">308 — Kalıcı (metot korunur)</option>
                <option value="302">302 — Geçici</option>
                <option value="307">307 — Geçici (metot korunur)</option>
              </select>
            </label>
          </ActionForm>
        </Card>
      </div>
    </>
  );
}
