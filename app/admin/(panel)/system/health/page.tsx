import Link from "next/link";
import { getLatestCompletedResults, getLatestScan } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { ISSUE_LABELS, type IssueKey } from "@/lib/admin/seo-report";
import { scanOrigin } from "@/lib/admin/site-scan";
import { ScanRunner } from "../../../_components/scan-runner";
import { Badge, Card, PageHeader, Stat, formatDate } from "../../../_components/ui";

export const metadata = { title: "Site Sağlığı" };

export default async function HealthPage() {
  await requirePermission("health.run");
  const [latest, done] = await Promise.all([getLatestScan(), getLatestCompletedResults()]);
  const statuses = done ? done.rows.reduce<Record<string, number>>((acc, r) => ({ ...acc, [String(r.status ?? "hata")]: (acc[String(r.status ?? "hata")] ?? 0) + 1 }), {}) : {};

  return (
    <>
      <PageHeader
        title="Site sağlığı"
        description={`Tarama manuel başlatılır; sitemap'teki URL'ler ve sayfalardaki iç bağlantılar 25'erli partilerle kontrol edilir. Taranan köken: ${scanOrigin()}`}
      />
      <Card className="mb-6">
        <ScanRunner resumeScanId={latest?.status === "running" ? latest.id : undefined} />
        {latest ? (
          <p className="mt-3 text-sm text-slate-600">
            Son tarama: {formatDate(latest.started_at)} · {latest.scanned}/{latest.total} URL ·{" "}
            <Badge tone={latest.status === "done" ? "green" : latest.status === "running" ? "blue" : "red"}>{latest.status}</Badge> · başlatan {latest.started_by ?? "—"}
          </p>
        ) : null}
      </Card>

      {done ? (
        <>
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(statuses).map(([status, n]) => (
              <Stat key={status} label={`HTTP ${status}`} value={n} />
            ))}
          </div>
          <Card title="Kontroller">
            <ul className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(ISSUE_LABELS) as IssueKey[]).map((key) => (
                <li key={key}>
                  <Link href={`/admin/seo?issue=${key}`} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm hover:border-[#278DC0]">
                    <span>{ISSUE_LABELS[key]}</span>
                    <Badge tone={done.report[key].length ? "amber" : "green"}>{done.report[key].length}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">Yönlendirme zincirleri SEO → Yönlendirmeler ekranında gösterilir.</p>
          </Card>
        </>
      ) : null}
    </>
  );
}
