import { getIntegrations } from "@/lib/admin/data";
import { getDb } from "@/lib/admin/db-core";
import { lastIntegrationChecks, type HealthStatus } from "@/lib/admin/integration-health";
import { requirePermission } from "@/lib/admin/server";
import { runIntegrationChecksAction } from "../../../actions";
import { ActionForm } from "../../../_components/forms";
import { Badge, Notice, PageHeader, Table, Td, formatDate } from "../../../_components/ui";

const HEALTH: Record<HealthStatus, { tone: "green" | "red" | "amber" | "slate"; label: string }> = {
  HEALTHY: { tone: "green", label: "Sağlıklı" },
  ERROR: { tone: "red", label: "Hata" },
  NOT_CONFIGURED: { tone: "slate", label: "Yapılandırılmadı" },
  CONFIGURED: { tone: "amber", label: "Yapılandırıldı" },
};

export const metadata = { title: "Entegrasyonlar" };

export default async function IntegrationsPage() {
  await requirePermission("integrations.view");
  const integrations = getIntegrations();
  const checks = await lastIntegrationChecks(await getDb());

  return (
    <>
      <PageHeader title="Entegrasyonlar" description="Yalnız yapılandırma durumu ve ortam değişkeninin adı gösterilir." />
      <Notice tone="amber">
        Bu sayfa bir secret deposu değildir. API anahtarları ve parolalar panelden girilmez, veritabanına yazılmaz; Vercel → Project Settings → Environment
        Variables üzerinden yönetilir ve değiştirildikten sonra yeniden deploy gerekir.
      </Notice>
      <ActionForm action={runIntegrationChecksAction} submitLabel="Sağlık kontrolünü çalıştır" className="mb-4">
        <p className="text-xs text-slate-500">Resend, veritabanı, Vercel Blob ve site kökeni gerçek istekle; GTM/GA kimlik biçimiyle; AUTH_SECRET uzunlukla kontrol edilir.</p>
      </ActionForm>
      <Table head={["Servis", "Durum", "Ortam değişkeni", "Görünürlük", "Son sağlık kontrolü", "Not"]}>
        {integrations.map((i) => (
          <tr key={i.variable}>
            <Td className="font-medium">{i.name}</Td>
            <Td>{i.configured ? <Badge tone="green">Yapılandırıldı</Badge> : <Badge tone="amber">Yapılandırılmadı</Badge>}</Td>
            <Td>
              <code className="text-xs">{i.variable}</code>
            </Td>
            <Td className="text-xs">{i.exposure}</Td>
            <Td className="text-xs">
              {checks.get(i.variable) ? (
                <>
                  <Badge tone={HEALTH[checks.get(i.variable)!.status].tone}>{HEALTH[checks.get(i.variable)!.status].label}</Badge>
                  <p className="mt-1 text-slate-600">{checks.get(i.variable)!.detail}</p>
                  <p className="text-slate-400">{formatDate(checks.get(i.variable)!.checked_at)}</p>
                </>
              ) : (
                <span className="text-slate-500">Henüz çalıştırılmadı</span>
              )}
            </Td>
            <Td className="text-xs">{i.note}</Td>
          </tr>
        ))}
      </Table>
    </>
  );
}
