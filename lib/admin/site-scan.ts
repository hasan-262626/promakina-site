import type { Db } from "./db-core";
import { SITE_ORIGIN } from "./validation";

/**
 * Site sağlığı / SEO taraması.
 * Yalnız yapılandırılmış site kökenine (ADMIN_SITE_ORIGIN, yoksa canlı alan adı) istek atılır;
 * URL'ler kullanıcıdan alınmaz, sitemap'ten ve sayfa içi bağlantılardan türetilir (SSRF koruması).
 * Tarama küçük partiler halinde ilerler; her istekte tüm site taranmaz.
 */

export const SCAN_BATCH_SIZE = 25;
const FETCH_TIMEOUT_MS = 10_000;
const MAX_EXTRA_LINKS = 400;

export function scanOrigin() {
  const configured = process.env.ADMIN_SITE_ORIGIN?.replace(/\/$/, "");
  if (!configured) return SITE_ORIGIN;
  const url = new URL(configured);
  const local = ["localhost", "127.0.0.1"].includes(url.hostname);
  // Yerel test kökeni yalnız Vercel dışında kabul edilir; production'da canlı alan adı zorunludur.
  if (local && process.env.VERCEL !== "1") return url.origin;
  if (url.protocol === "https:" && ["www.promakina.com.tr", "promakina.com.tr"].includes(url.hostname)) return url.origin;
  return SITE_ORIGIN;
}

const decode = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

export type SitemapEntry = { path: string; alternates: Record<string, string> };

/** Sitemap XML → site içi yollar ve hreflang alternatifleri (yollar köken bağımsızdır). */
export function parseSitemap(xml: string): SitemapEntry[] {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap((m) => {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return [];
    const alternates: Record<string, string> = {};
    for (const a of m[1].matchAll(/<xhtml:link[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/g)) {
      alternates[a[1]] = toPath(decode(a[2]));
    }
    return [{ path: toPath(decode(loc)), alternates }];
  });
}

function toPath(href: string) {
  try {
    const url = new URL(href, SITE_ORIGIN);
    const p = decodeURI(url.pathname);
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  } catch {
    return href;
  }
}

export type PageData = {
  title: string | null;
  description: string | null;
  h1s: string[];
  canonical: string | null;
  robots: string | null;
  hreflang: Record<string, string>;
  missingAlt: number;
  lang: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  schemaTypes: string[];
  links: string[];
};

const attr = (tag: string, name: string) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1];
const text = (html: string) => decode(html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());

/** Sunucuda üretilmiş HTML'den SEO alanlarını çıkarır (tarayıcı/JS çalıştırmadan). */
export function extractPageData(html: string): PageData {
  const head = html.slice(0, html.indexOf("</head>") > 0 ? html.indexOf("</head>") : undefined);
  const metaTags = [...head.matchAll(/<meta\s[^>]*>/gi)].map((m) => m[0]);
  const meta = (key: "name" | "property", value: string) => {
    const tag = metaTags.find((t) => attr(t, key)?.toLowerCase() === value);
    return tag ? decode(attr(tag, "content") ?? "") : null;
  };
  const linkTags = [...head.matchAll(/<link\s[^>]*>/gi)].map((m) => m[0]);
  const hreflang: Record<string, string> = {};
  for (const tag of linkTags) {
    if (attr(tag, "rel") === "alternate" && attr(tag, "hrefLang")) hreflang[attr(tag, "hrefLang")!] = toPath(decode(attr(tag, "href") ?? ""));
  }
  const body = html.slice(html.indexOf("<body"));
  const main = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  const imgs = [...main.matchAll(/<img\s[^>]*>/gi)].map((m) => m[0]);
  const schemaTypes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try {
      const json = JSON.parse(m[1]);
      return (Array.isArray(json) ? json : [json]).map((j) => String(j?.["@type"] ?? "")).filter(Boolean);
    } catch {
      return [];
    }
  });
  const links = new Set<string>();
  for (const a of main.matchAll(/<a\s[^>]*href="([^"]+)"/gi)) {
    const href = decode(a[1]);
    if (href.startsWith("/") && !href.startsWith("//")) links.add(toPath(href.split("#")[0].split("?")[0] || "/"));
    else if (/^https:\/\/(www\.)?promakina\.com\.tr(\/|$)/.test(href)) links.add(toPath(href));
  }
  const titleMatch = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return {
    title: titleMatch ? text(titleMatch[1]) : null,
    description: meta("name", "description"),
    h1s: [...main.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => text(m[1])),
    canonical: (() => {
      const tag = linkTags.find((t) => attr(t, "rel") === "canonical");
      return tag ? decode(attr(tag, "href") ?? "") : null;
    })(),
    robots: meta("name", "robots"),
    hreflang,
    missingAlt: imgs.filter((img) => {
      const alt = attr(img, "alt");
      // Dekoratif görsel: alt="" + aria-hidden kabul edilir.
      return alt === undefined || (alt.trim() === "" && !/aria-hidden="true"/.test(img));
    }).length,
    lang: html.match(/<html[^>]*\slang="([^"]+)"/i)?.[1] ?? null,
    ogTitle: meta("property", "og:title"),
    ogDescription: meta("property", "og:description"),
    ogImage: meta("property", "og:image"),
    schemaTypes,
    links: [...links].filter((l) => !l.startsWith("/_next") && !l.startsWith("/api/") && !l.startsWith("/admin")),
  };
}

async function fetchWithTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal, redirect: "manual", cache: "no-store", headers: { "user-agent": "ProMakina-AdminHealthScan/1.0" } });
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchSitemap(): Promise<SitemapEntry[]> {
  const response = await fetchWithTimeout(`${scanOrigin()}/sitemap.xml`);
  if (!response.ok) throw new Error(`sitemap ${response.status}`);
  return parseSitemap(await response.text());
}

type QueueItem = { path: string; inSitemap: boolean };
type Queue = { pending: QueueItem[]; linksQueued: boolean };

export async function startScan(db: Db, startedBy: string) {
  const running = await db.query<{ id: string }>("select id from health_scans where status = 'running' and started_at > now() - interval '30 minutes' limit 1");
  if (running.rows[0]) return running.rows[0].id;
  const entries = await fetchSitemap();
  const queue: Queue = { pending: entries.map((e) => ({ path: e.path, inSitemap: true })), linksQueued: false };
  const result = await db.query<{ id: string }>(
    "insert into health_scans (started_by, total, queue) values ($1, $2, $3) returning id",
    [startedBy, entries.length, JSON.stringify(queue)],
  );
  return result.rows[0].id;
}

async function scanOne(db: Db, scanId: string, item: QueueItem) {
  let status: number | null = null;
  let data: PageData | null = null;
  try {
    const response = await fetchWithTimeout(`${scanOrigin()}${encodeURI(item.path)}`);
    status = response.status;
    if (response.ok && (response.headers.get("content-type") ?? "").includes("text/html")) data = extractPageData(await response.text());
  } catch {
    status = null;
  }
  await db.query(
    `insert into health_results (scan_id, url, status, title, description, h1_count, h1, canonical, robots, hreflang_count, hreflang,
       missing_alt, lang, og_title, og_description, og_image, schema_types, in_sitemap, links)
     values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)
     on conflict (scan_id, url) do nothing`,
    [
      scanId, item.path, status, data?.title ?? null, data?.description ?? null, data?.h1s.length ?? null, data?.h1s[0]?.slice(0, 300) ?? null,
      data?.canonical ?? null, data?.robots ?? null, data ? Object.keys(data.hreflang).length : null, data ? JSON.stringify(data.hreflang) : null,
      data?.missingAlt ?? null, data?.lang ?? null, data?.ogTitle ?? null, data?.ogDescription ?? null, data?.ogImage ?? null,
      data?.schemaTypes.join(",") ?? null, item.inSitemap, data ? JSON.stringify(data.links) : null,
    ],
  );
}

/** Bir parti URL tarar. Sitemap bitince sayfalardan toplanan, sitemap dışı iç bağlantılar da bir kez kuyruğa eklenir. */
export async function runScanBatch(db: Db, scanId: string) {
  const scan = (await db.query<{ status: string; queue: Queue }>("select status, queue from health_scans where id = $1", [scanId])).rows[0];
  if (!scan || scan.status !== "running") return { done: true };
  const queue = scan.queue;
  if (queue.pending.length === 0 && !queue.linksQueued) {
    const rows = (await db.query<{ url: string; links: string[] | null }>("select url, links from health_results where scan_id = $1", [scanId])).rows;
    const known = new Set(rows.map((r) => r.url));
    const extra = new Set<string>();
    for (const row of rows) for (const link of row.links ?? []) if (!known.has(link)) extra.add(link);
    queue.pending = [...extra].slice(0, MAX_EXTRA_LINKS).map((path) => ({ path, inSitemap: false }));
    queue.linksQueued = true;
    await db.query("update health_scans set queue = $2, total = total + $3 where id = $1", [scanId, JSON.stringify(queue), queue.pending.length]);
  }
  const batch = queue.pending.splice(0, SCAN_BATCH_SIZE);
  for (let i = 0; i < batch.length; i += 5) await Promise.all(batch.slice(i, i + 5).map((item) => scanOne(db, scanId, item)));
  const done = queue.pending.length === 0 && queue.linksQueued;
  await db.query(
    `update health_scans set queue = $2, scanned = scanned + $3, status = case when $4 then 'done' else status end,
       finished_at = case when $4 then now() else finished_at end where id = $1`,
    [scanId, JSON.stringify(queue), batch.length, done],
  );
  return { done };
}
