import "server-only";
import nextConfig from "@/next.config";
import { LEGACY_PATH_REDIRECTS } from "@/lib/legacy-redirects";
import { getDb } from "./db-core";
import mediaManifest from "./generated/media-manifest.json";
import securitySnapshot from "./generated/security-snapshot.json";
import { analyzeRedirects, type RedirectEdge } from "./redirect-analysis";
import { buildSeoReport, type ScanRow } from "./seo-report";
import { fetchSitemap, scanOrigin, type SitemapEntry } from "./site-scan";

export const PAGE_SIZE = 25;
export const LOCALES = ["tr", "en", "ru", "ar"] as const;
export type AdminLocale = (typeof LOCALES)[number];

/* ---------------------------------------------------------------- sitemap */

let sitemapCache: { entries: SitemapEntry[]; at: number } | undefined;

/** Sitemap 10 dk bellekte tutulur; dashboard her açılışta siteyi taramaz. */
export async function getSitemapEntries(): Promise<SitemapEntry[] | null> {
  if (sitemapCache && Date.now() - sitemapCache.at < 10 * 60 * 1000) return sitemapCache.entries;
  try {
    const entries = await fetchSitemap();
    sitemapCache = { entries, at: Date.now() };
    return entries;
  } catch {
    return sitemapCache?.entries ?? null;
  }
}

/* ---------------------------------------------------------------- content inventory */

export type ContentGroup = "machines" | "sectors" | "blog" | "other";
export type ContentItem = {
  trPath: string;
  group: ContentGroup;
  type: string;
  locales: Partial<Record<AdminLocale, string>>;
};

function classify(path: string): { group: ContentGroup; type: string } {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "makinalar-ekipman") return { group: "machines", type: parts.length === 1 ? "Genel bakış" : parts.length === 2 ? "Kategori" : "Ürün" };
  if (parts[0] === "sektorler") return { group: "sectors", type: parts.length === 1 ? "Sektörler hub" : parts.length === 2 ? "Sektör" : "Alt sektör / tesis" };
  if (parts[0] === "tesisler") return { group: "sectors", type: parts.length === 1 ? "Tesisler hub" : "Tesis çözümü" };
  if (parts[0] === "kutuphane") return { group: "blog", type: parts[1] === "blog" ? "Blog / rehber" : "Kütüphane" };
  return { group: "other", type: "Kurumsal / diğer" };
}

const isForeign = (path: string) => /^\/(en|ru|ar)(\/|$)/.test(path);

export function buildInventory(entries: SitemapEntry[]): ContentItem[] {
  return entries
    .filter((e) => !isForeign(e.path))
    .map((e) => {
      const locales: Partial<Record<AdminLocale, string>> = { tr: e.path };
      for (const locale of ["en", "ru", "ar"] as const) if (e.alternates[locale]) locales[locale] = e.alternates[locale];
      return { trPath: e.path, ...classify(e.path), locales };
    });
}

/* ---------------------------------------------------------------- scans */

export async function getLatestScan() {
  const db = await getDb();
  const scan = (
    await db.query<{ id: string; status: string; total: number; scanned: number; started_at: string; finished_at: string | null; started_by: string | null }>(
      "select id, status, total, scanned, started_at, finished_at, started_by from health_scans order by started_at desc limit 1",
    )
  ).rows[0];
  return scan ?? null;
}

export async function getLatestCompletedResults() {
  const db = await getDb();
  const scan = (await db.query<{ id: string; finished_at: string }>("select id, finished_at from health_scans where status = 'done' order by started_at desc limit 1")).rows[0];
  if (!scan) return null;
  const rows = (
    await db.query<ScanRow & { og_title: string | null; og_description: string | null; og_image: string | null; schema_types: string | null; lang: string | null; h1: string | null }>(
      `select url, status, title, description, h1_count, h1, canonical, robots, hreflang, missing_alt, in_sitemap, links,
              og_title, og_description, og_image, schema_types, lang
         from health_results where scan_id = $1`,
      [scan.id],
    )
  ).rows;
  return { scanId: scan.id, finishedAt: scan.finished_at, rows, report: buildSeoReport(rows) };
}

/* ---------------------------------------------------------------- redirects */

export async function getCodeRedirects(): Promise<RedirectEdge[]> {
  const fromConfig = ((await nextConfig.redirects?.()) ?? []).map((r) => ({ source: r.source, destination: r.destination, origin: "next.config" as const }));
  const fromProxy = Object.entries(LEGACY_PATH_REDIRECTS).map(([source, destination]) => ({ source, destination, origin: "proxy" as const }));
  return [...fromConfig, ...fromProxy];
}

export type ManagedRedirect = {
  id: string;
  source: string;
  destination: string;
  status_code: number;
  enabled: boolean;
  created_by: string | null;
  created_at: string;
};

export async function getRedirectOverview() {
  const db = await getDb();
  const managed = (await db.query<ManagedRedirect>("select id, source, destination, status_code, enabled, created_by, created_at from redirects order by created_at desc")).rows;
  const code = await getCodeRedirects();
  const edges: RedirectEdge[] = [...managed.filter((m) => m.enabled).map((m) => ({ source: m.source, destination: m.destination, origin: "admin" as const })), ...code];
  return { managed, code, issues: analyzeRedirects(edges) };
}

/* ---------------------------------------------------------------- leads */

export type LeadRow = {
  id: string;
  kind: "contact" | "rfq";
  status: string;
  full_name: string | null;
  company: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  subject: string | null;
  product: string | null;
  sector: string | null;
  source_page: string | null;
  locale: string | null;
  created_at: string;
};

export async function listLeads(filter: { kind: "contact" | "rfq"; status?: string; q?: string; country?: string; product?: string; from?: string; to?: string; page: number }) {
  const db = await getDb();
  const params: unknown[] = [];
  /** Değer parametre listesine eklenir, SQL'e yalnız $n yer tutucusu yazılır. */
  const p = (value: unknown) => {
    params.push(value);
    return `$${params.length}`;
  };
  const like = (value: string) => `%${value.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
  const where = [`kind = ${p(filter.kind)}`];
  if (filter.status) where.push(`status = ${p(filter.status)}`);
  if (filter.country) where.push(`country ilike ${p(like(filter.country))}`);
  if (filter.product) where.push(`product ilike ${p(like(filter.product))}`);
  if (filter.from) where.push(`created_at >= ${p(filter.from)}::date`);
  if (filter.to) where.push(`created_at < (${p(filter.to)}::date + 1)`);
  if (filter.q) {
    const q = p(like(filter.q));
    where.push(`(full_name ilike ${q} or company ilike ${q} or email ilike ${q})`);
  }
  const whereSql = where.join(" and ");
  const total = (await db.query<{ n: number }>(`select count(*)::int as n from leads where ${whereSql}`, params)).rows[0].n;
  params.push(PAGE_SIZE, (filter.page - 1) * PAGE_SIZE);
  const rows = (
    await db.query<LeadRow>(
      `select id, kind, status, full_name, company, email, phone, country, subject, product, sector, source_page, locale, created_at
         from leads where ${whereSql} order by created_at desc limit $${params.length - 1} offset $${params.length}`,
      params,
    )
  ).rows;
  return { rows, total };
}

export async function getLead(id: string) {
  const db = await getDb();
  const lead = (await db.query<LeadRow & { message: string | null; details: Record<string, string> | null; attachment_name: string | null; attachment_size: number | null; updated_at: string }>("select * from leads where id = $1", [id])).rows[0];
  if (!lead) return null;
  const notes = (await db.query<{ id: number; author_email: string | null; note: string; created_at: string }>("select id, author_email, note, created_at from lead_notes where lead_id = $1 order by created_at desc", [id])).rows;
  return { lead, notes };
}

/* ---------------------------------------------------------------- dashboard */

export async function getDashboard() {
  const db = await getDb();
  const entries = await getSitemapEntries();
  const inventory = entries ? buildInventory(entries) : [];
  const count = (pred: (i: ContentItem) => boolean) => inventory.filter(pred).length;
  const depth = (p: string) => p.split("/").filter(Boolean).length;

  const [leadCounts, recent, scan] = await Promise.all([
    db.query<{ kind: string; status: string; n: number }>("select kind, status, count(*)::int as n from leads group by kind, status"),
    db.query<{ user_email: string | null; action: string; target: string | null; created_at: string }>(
      "select user_email, action, target, created_at from admin_audit_log order by created_at desc limit 10",
    ),
    getLatestCompletedResults(),
  ]);

  return {
    sitemapAvailable: entries !== null,
    stats: {
      machineCategories: count((i) => i.trPath.startsWith("/makinalar-ekipman/") && depth(i.trPath) === 2),
      machineProducts: count((i) => i.trPath.startsWith("/makinalar-ekipman/") && depth(i.trPath) === 3),
      sectors: count((i) => i.trPath.startsWith("/sektorler/") && depth(i.trPath) === 2),
      sectorPages: count((i) => i.trPath.startsWith("/sektorler/") && depth(i.trPath) === 3),
      blog: count((i) => i.group === "blog"),
      media: mediaManifest.items.length,
      trPages: inventory.length,
      localeCoverage: Object.fromEntries((["en", "ru", "ar"] as const).map((l) => [l, count((i) => Boolean(i.locales[l]))])),
    },
    leads: leadCounts.rows,
    recent: recent.rows,
    scan,
  };
}

/* ---------------------------------------------------------------- security */

export async function getSecurityOverview() {
  const db = await getDb();
  const [logins, failures, sessions] = await Promise.all([
    db.query<{ user_email: string | null; created_at: string }>(
      "select user_email, created_at from admin_audit_log where action = 'auth.login' order by created_at desc limit 10",
    ),
    db.query<{ last24: number; last7d: number; ips24: number }>(
      `select count(*) filter (where created_at > now() - interval '24 hours')::int as last24,
              count(*)::int as last7d,
              count(distinct ip_hash) filter (where created_at > now() - interval '24 hours')::int as ips24
         from admin_login_attempts where success = false and created_at > now() - interval '7 days'`,
    ),
    db.query<{ id: string; email: string; created_at: string; last_seen_at: string; expires_at: string; user_agent: string | null }>(
      `select s.id, u.email, s.created_at, s.last_seen_at, s.expires_at, s.user_agent
         from admin_sessions s join admin_users u on u.id = s.user_id
        where s.expires_at > now() order by s.last_seen_at desc limit 50`,
    ),
  ]);
  return { logins: logins.rows, failures: failures.rows[0], sessions: sessions.rows, dependencies: securitySnapshot };
}

export const EXPECTED_HEADERS = [
  "strict-transport-security",
  "x-content-type-options",
  "referrer-policy",
  "permissions-policy",
  "x-frame-options",
  "content-security-policy-report-only",
] as const;

/** Ana sayfanın güvenlik başlıklarını kontrol eder (yalnız sitenin kendi kökenine istek). */
export async function checkSecurityHeaders() {
  try {
    const response = await fetch(`${scanOrigin()}/`, { method: "HEAD", redirect: "manual", cache: "no-store" });
    return Object.fromEntries(EXPECTED_HEADERS.map((h) => [h, response.headers.has(h)])) as Record<(typeof EXPECTED_HEADERS)[number], boolean>;
  } catch {
    return null;
  }
}

/* ---------------------------------------------------------------- integrations */

/** Yalnız yapılandırma durumu ve değişken adı gösterilir; değer hiçbir koşulda okunup ekrana verilmez. */
export function getIntegrations() {
  const configured = (name: string) => Boolean(process.env[name]);
  return [
    { name: "Resend (e-posta)", variable: "RESEND_API_KEY", configured: configured("RESEND_API_KEY"), exposure: "Yalnız sunucu", note: "İletişim ve teklif formu e-postaları" },
    { name: "Veritabanı (PostgreSQL)", variable: "DATABASE_URL", configured: configured("DATABASE_URL"), exposure: "Yalnız sunucu", note: "Admin kullanıcıları, oturumlar, lead'ler, yönlendirmeler" },
    { name: "Oturum anahtarı", variable: "AUTH_SECRET", configured: (process.env.AUTH_SECRET?.length ?? 0) >= 32, exposure: "Yalnız sunucu", note: "IP/e-posta özetleri; en az 32 karakter" },
    { name: "Google Tag Manager", variable: "NEXT_PUBLIC_GTM_ID", configured: configured("NEXT_PUBLIC_GTM_ID"), exposure: "Tarayıcı (kamusal kimlik, secret değil)", note: "Boşsa koddaki varsayılan GTM kimliği kullanılır" },
    { name: "Google Analytics 4", variable: "NEXT_PUBLIC_GA_MEASUREMENT_ID", configured: configured("NEXT_PUBLIC_GA_MEASUREMENT_ID"), exposure: "Tarayıcı (kamusal kimlik, secret değil)", note: "Opsiyonel doğrudan gtag yüklemesi" },
    { name: "Tarama kökeni", variable: "ADMIN_SITE_ORIGIN", configured: configured("ADMIN_SITE_ORIGIN"), exposure: "Yalnız sunucu", note: "Boşsa canlı alan adı taranır" },
    { name: "Medya depolama (Vercel Blob)", variable: "BLOB_READ_WRITE_TOKEN", configured: configured("BLOB_READ_WRITE_TOKEN"), exposure: "Yalnız sunucu", note: "Panelden görsel yükleme; production'da zorunlu" },
    { name: "2FA zorunluluğu", variable: "ADMIN_REQUIRE_2FA", configured: configured("ADMIN_REQUIRE_2FA"), exposure: "Yalnız sunucu", note: "Boşsa yalnız Süper Yönetici için zorunlu (SUPER_ADMIN | ADMIN | ALL | NONE)" },
  ];
}

export function getMediaManifest() {
  return mediaManifest;
}

export function getSystemInfo() {
  return {
    version: process.env.npm_package_version ?? "0.1.0",
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "yerel",
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown",
    region: process.env.VERCEL_REGION ?? "—",
    mediaGeneratedAt: mediaManifest.generatedAt,
  };
}
