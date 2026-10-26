import Link from "next/link";
import { getDashboard, getRedirectOverview, getSystemInfo } from "@/lib/admin/data";
import { isDatabaseConfigured } from "@/lib/admin/db-core";
import { LEAD_STATUS_LABELS } from "@/lib/admin/labels";
import { hasPermission } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { ISSUE_LABELS, type IssueKey } from "@/lib/admin/seo-report";
import { Badge, Card, Notice, PageHeader, Stat, formatDate } from "../_components/ui";

export const metadata = { title: "Dashboard" };

const QUALITY_KEYS: IssueKey[] = ["missingTitle", "missingDescription", "multipleH1", "noH1", "missingAlt", "brokenLinks", "hreflangMismatch", "noindexInSitemap"];

export default async function AdminDashboard() {
  const user = await requirePermission("dashboard.view");
  const [data, redirects] = await Promise.all([getDashboard(), getRedirectOverview()]);
  const system = getSystemInfo();
  const { stats } = data;
  const canLeads = hasPermission(user.role, "leads.view");
  const newLeads = data.leads.filter((l) => l.status === "NEW").reduce((n, l) => n + l.n, 0);

  return (
    <>
      <PageHeader title="Dashboard" description="Site içeriği, çeviri kapsamı, içerik kalitesi ve sistem durumunun özeti." />
      {!data.sitemapAvailable ? <Notice tone="amber">Sitemap alınamadı; içerik sayıları gösterilemiyor. Tarama kökenini (ADMIN_SITE_ORIGIN) kontrol edin.</Notice> : null}

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Site özeti</h2>
      <p className="-mt-2 mb-3 text-xs text-slate-500">Sayılar sitemap&apos;teki TR URL&apos;lerden hesaplanır; sitemap&apos;te olmayan sayfalar (ör. SEO denetimindeki &quot;sitemap&apos;te değil&quot; listesi) sayılmaz.</p>
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        <Stat label="Makina kategorisi" value={stats.machineCategories} />
        <Stat label="Makina ürünü" value={stats.machineProducts} />
        <Stat label="Sektör" value={stats.sectors} />
        <Stat label="Sektör alt sayfası" value={stats.sectorPages} />
        <Stat label="Blog / rehber" value={stats.blog} />
        <Stat label="Medya dosyası" value={stats.media} />
        <Stat label="TR sayfa (sitemap)" value={stats.trPages} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Dil kapsamı (TR kaynak → çeviri)">
          <ul className="space-y-3">
            {(["en", "ru", "ar"] as const).map((locale) => {
              const n = stats.localeCoverage[locale] ?? 0;
              const pct = stats.trPages ? Math.round((n / stats.trPages) * 100) : 0;
              return (
                <li key={locale}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium uppercase">{locale}</span>
                    <span className="text-slate-600">
                      {n} / {stats.trPages} TR sayfa (%{pct})
                    </span>
                  </div>
                  <progress className="mt-1 h-2 w-full overflow-hidden rounded accent-[#278DC0]" max={stats.trPages || 1} value={n} aria-label={`${locale} kapsamı`} />
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-slate-500">Kapsam, sitemap&apos;teki hreflang eşleşmelerinden hesaplanır. Çevirinin güncelliği (outdated) şu an ölçülmüyor.</p>
        </Card>

        <Card title="İçerik kalitesi (son tarama)">
          {data.scan ? (
            <>
              <p className="mb-3 text-xs text-slate-500">
                Son tamamlanan tarama: {formatDate(data.scan.finishedAt)} · {data.scan.rows.length} URL
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {QUALITY_KEYS.map((key) => {
                  const n = data.scan!.report[key].length;
                  return (
                    <li key={key} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm">
                      <span>{ISSUE_LABELS[key]}</span>
                      <Badge tone={n ? "amber" : "green"}>{n}</Badge>
                    </li>
                  );
                })}
                <li className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm">
                  <span>Yönlendirme zinciri / döngü</span>
                  <Badge tone={redirects.issues.length ? "amber" : "green"}>{redirects.issues.length}</Badge>
                </li>
              </ul>
              <Link href="/admin/seo" className="mt-3 inline-block text-sm font-medium text-[#154764] hover:underline">
                Ayrıntılı SEO denetimi →
              </Link>
            </>
          ) : (
            <p className="text-sm text-slate-600">
              Henüz tamamlanmış tarama yok.{" "}
              {hasPermission(user.role, "health.run") ? (
                <Link className="font-medium text-[#154764] hover:underline" href="/admin/system/health">
                  Site sağlığı taramasını başlatın.
                </Link>
              ) : null}
            </p>
          )}
        </Card>

        {canLeads ? (
          <Card title="Talepler">
            <p className="mb-3 text-sm text-slate-600">
              Yeni (işlem bekleyen): <strong>{newLeads}</strong>
            </p>
            <ul className="space-y-1 text-sm">
              {data.leads.length === 0 ? <li className="text-slate-500">Henüz kayıtlı talep yok.</li> : null}
              {data.leads.map((l) => (
                <li key={`${l.kind}-${l.status}`} className="flex justify-between">
                  <span>
                    {l.kind === "rfq" ? "Teklif" : "İletişim"} · {LEAD_STATUS_LABELS[l.status] ?? l.status}
                  </span>
                  <span className="font-medium">{l.n}</span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        {hasPermission(user.role, "audit.view") ? (
          <Card title="Son işlemler">
            <ul className="divide-y divide-slate-100 text-sm">
              {data.recent.length === 0 ? <li className="py-2 text-slate-500">Kayıt yok.</li> : null}
              {data.recent.map((r, i) => (
                <li key={i} className="flex flex-wrap justify-between gap-2 py-2">
                  <span>
                    <code className="text-xs">{r.action}</code> {r.target ? <span className="text-slate-500">· {r.target}</span> : null}
                  </span>
                  <span className="text-xs text-slate-500">
                    {r.user_email ?? "sistem"} · {formatDate(r.created_at)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        <Card title="Sistem">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <dt className="text-slate-500">Uygulama sürümü</dt>
            <dd>{system.version}</dd>
            <dt className="text-slate-500">Build (commit)</dt>
            <dd className="font-mono">{system.commit}</dd>
            <dt className="text-slate-500">Ortam</dt>
            <dd>{system.environment}</dd>
            <dt className="text-slate-500">Bölge</dt>
            <dd>{system.region}</dd>
            <dt className="text-slate-500">Veritabanı</dt>
            <dd>{isDatabaseConfigured() ? <Badge tone="green">Bağlı</Badge> : <Badge tone="red">Yapılandırılmamış</Badge>}</dd>
            <dt className="text-slate-500">Medya envanteri</dt>
            <dd>{formatDate(system.mediaGeneratedAt)} (build)</dd>
            <dt className="text-slate-500">Önbellek</dt>
            <dd>Sitemap 10 dk, yönlendirmeler 60 sn</dd>
          </dl>
        </Card>
      </div>
    </>
  );
}
