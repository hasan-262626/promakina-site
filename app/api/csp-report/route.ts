import { consumeRateLimit, privacyHash } from "@/lib/admin/auth-core";
import { getDb, isDatabaseConfigured } from "@/lib/admin/db-core";

/**
 * CSP ihlal raporu alıcısı (tarayıcılar gönderir; kimlik doğrulama yok). Raporlar ham saklanmaz:
 * yalnız yönerge + engellenen kaynağın kökeni + sayfa yolu (sorgu dizesi hariç) gruplanarak sayılır.
 * Boyut sınırı 16 KB, IP başına 10 dakikada 60 rapor, toplam 2000 farklı kayıt.
 */

const MAX_BODY = 16 * 1024;
const MAX_ROWS = 2000;

type Normalized = { directive: string; blocked: string; page: string };

function originOrKeyword(value: unknown) {
  const v = String(value ?? "").trim();
  if (!v) return "unknown";
  if (/^(inline|eval|wasm-eval|data|blob|self|trusted-types-policy|trusted-types-sink)$/i.test(v)) return v.toLowerCase();
  try {
    return new URL(v).origin;
  } catch {
    return v.slice(0, 40);
  }
}

function pathOf(value: unknown) {
  try {
    return new URL(String(value)).pathname.slice(0, 200);
  } catch {
    return "unknown";
  }
}

function normalize(body: unknown): Normalized[] {
  const out: Normalized[] = [];
  const items = Array.isArray(body) ? body : [body];
  for (const item of items.slice(0, 20)) {
    if (!item || typeof item !== "object") continue;
    const legacy = (item as Record<string, unknown>)["csp-report"] as Record<string, unknown> | undefined;
    const modern = (item as { type?: string; body?: Record<string, unknown> }).type === "csp-violation" ? (item as { body: Record<string, unknown> }).body : undefined;
    const r = legacy ?? modern;
    if (!r) continue;
    const directive = String(r["effective-directive"] ?? r["violated-directive"] ?? r.effectiveDirective ?? "unknown").split(" ")[0].slice(0, 60);
    out.push({ directive, blocked: originOrKeyword(r["blocked-uri"] ?? r.blockedURL), page: pathOf(r["document-uri"] ?? r.documentURL) });
  }
  return out;
}

export async function POST(request: Request) {
  const noContent = new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  if (!isDatabaseConfigured()) return noContent;
  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > MAX_BODY) return new Response(null, { status: 413 });
  const type = request.headers.get("content-type") ?? "";
  if (!/application\/(csp-report|reports\+json|json)/.test(type)) return new Response(null, { status: 415 });
  try {
    const text = (await request.text()).slice(0, MAX_BODY);
    const reports = normalize(JSON.parse(text));
    if (!reports.length) return noContent;
    const db = await getDb();
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!(await consumeRateLimit(db, `csp:${privacyHash(`ip:${ip}`)}`, 60, 10 * 60 * 1000))) return new Response(null, { status: 429 });
    const total = (await db.query<{ n: number }>("select count(*)::int as n from csp_reports")).rows[0].n;
    for (const r of reports) {
      await db.query(
        `insert into csp_reports (directive, blocked, page) select $1, $2, $3 where $4 < ${MAX_ROWS}
         on conflict (directive, blocked, page) do update set count = csp_reports.count + 1, last_seen = now()`,
        [r.directive, r.blocked, r.page, total],
      );
    }
  } catch {
    // Bozuk rapor yok sayılır.
  }
  return noContent;
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}
