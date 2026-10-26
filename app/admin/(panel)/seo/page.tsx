import Link from "next/link";
import { getLatestCompletedResults } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { ISSUE_LABELS, type IssueKey } from "@/lib/admin/seo-report";
import { Badge, Card, Notice, PageHeader, formatDate } from "../../_components/ui";

export const metadata = { title: "SEO Denetimi" };
const SHOW = 50;

export default async function SeoAuditPage({ searchParams }: { searchParams: Promise<{ issue?: string }> }) {
  await requirePermission("seo.view");
  const sp = await searchParams;
  const scan = await getLatestCompletedResults();
  const keys = Object.keys(ISSUE_LABELS) as IssueKey[];
  const selected = keys.includes(sp.issue as IssueKey) ? (sp.issue as IssueKey) : undefined;

  return (
    <>
      <PageHeader title="SEO denetimi" description="Son tamamlanan site taramasından hesaplanır; her açılışta site yeniden taranmaz." />
      {!scan ? (
        <Notice tone="amber">
          Henüz tamamlanmış tarama yok. <Link href="/admin/system/health" className="font-medium underline">Site Sağlığı</Link> ekranından taramayı başlatın.
        </Notice>
      ) : (
        <>
          <p className="mb-4 text-sm text-slate-600">
            Tarama: {formatDate(scan.finishedAt)} · {scan.rows.filter((r) => r.in_sitemap).length} sitemap URL&apos;si + {scan.rows.filter((r) => !r.in_sitemap).length} sitemap dışı iç bağlantı
          </p>
          <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {keys.map((key) => (
              <Link
                key={key}
                href={`/admin/seo?issue=${key}`}
                aria-current={selected === key ? "true" : undefined}
                className={`flex items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm hover:border-[#278DC0] ${selected === key ? "border-[#278DC0]" : "border-slate-200"}`}
              >
                <span>{ISSUE_LABELS[key]}</span>
                <Badge tone={scan.report[key].length ? "amber" : "green"}>{scan.report[key].length}</Badge>
              </Link>
            ))}
          </div>
          {selected ? (
            <Card title={`${ISSUE_LABELS[selected]} (${scan.report[selected].length})`}>
              <ul className="divide-y divide-slate-100 text-sm">
                {scan.report[selected].length === 0 ? <li className="py-2 text-slate-500">Sorun yok.</li> : null}
                {scan.report[selected].slice(0, SHOW).map((item, i) => (
                  <li key={`${item.url}-${i}`} className="flex flex-wrap justify-between gap-2 py-2">
                    <a href={item.url} target="_blank" rel="noreferrer" className="break-all font-mono text-xs text-[#154764] hover:underline">
                      {item.url}
                    </a>
                    {item.detail ? <span className="text-xs text-slate-600">{item.detail}</span> : null}
                  </li>
                ))}
              </ul>
              {scan.report[selected].length > SHOW ? <p className="mt-2 text-xs text-slate-500">İlk {SHOW} kayıt gösteriliyor.</p> : null}
            </Card>
          ) : null}
        </>
      )}
    </>
  );
}
