import "server-only";
import { list } from "@vercel/blob";
import type { Db } from "./db-core";
import { SITE_ORIGIN } from "./validation";

/**
 * Entegrasyon sağlık kontrolleri. Hiçbir sonuç, hata mesajı veya kayıt değişken değerini içermez; yalnız durum,
 * HTTP durum kodu ve genel açıklama yazılır. Dış servis çağrıları 5 sn zaman aşımlıdır.
 */

export type HealthStatus = "HEALTHY" | "ERROR" | "NOT_CONFIGURED" | "CONFIGURED";
export type HealthResult = { name: string; status: HealthStatus; detail: string };

const TIMEOUT_MS = 5_000;
const DEFAULT_GTM_ID = "GTM-NJT8ZQPC"; // app/(tr)/layout.tsx ile aynı varsayılan (kamusal kimlik)

async function timed<T>(fn: (signal: AbortSignal) => Promise<T>): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fn(controller.signal);
  } finally {
    clearTimeout(timer);
  }
}

async function checkResend(): Promise<HealthResult> {
  const name = "RESEND_API_KEY";
  const key = process.env.RESEND_API_KEY;
  if (!key) return { name, status: "NOT_CONFIGURED", detail: "Tanımlı değil; form e-postaları gönderilmez (lead'ler veritabanına yine yazılır)." };
  try {
    const res = await timed((signal) => fetch("https://api.resend.com/domains", { headers: { Authorization: `Bearer ${key}` }, signal, cache: "no-store" }));
    if (res.ok) return { name, status: "HEALTHY", detail: "Resend API anahtarı geçerli (HTTP 200)." };
    const body = (await res.json().catch(() => ({}))) as { name?: string };
    // Yalnız gönderim yetkili (restricted) anahtar alan adı listesini okuyamaz; bu anahtar gönderim için geçerlidir.
    if (res.status === 401 && body.name === "restricted_api_key") return { name, status: "HEALTHY", detail: "Gönderim yetkili (kısıtlı) anahtar; kimlik doğrulandı." };
    return { name, status: "ERROR", detail: `Resend kimlik doğrulaması başarısız (HTTP ${res.status}).` };
  } catch {
    return { name, status: "ERROR", detail: "Resend API'ye ulaşılamadı (zaman aşımı veya ağ hatası)." };
  }
}

async function checkDatabase(db: Db | null): Promise<HealthResult> {
  const name = "DATABASE_URL";
  if (!process.env.DATABASE_URL) return { name, status: "NOT_CONFIGURED", detail: "Tanımlı değil; panel çalışmaz, public site koddaki içerikle çalışır." };
  if (!db) return { name, status: "ERROR", detail: "Veritabanı bağlantısı kurulamadı." };
  try {
    await timed(() => db.query("select 1"));
    return { name, status: "HEALTHY", detail: "Bağlantı ve sorgu başarılı." };
  } catch {
    return { name, status: "ERROR", detail: "Sorgu başarısız." };
  }
}

function checkAuthSecret(): HealthResult {
  const length = process.env.AUTH_SECRET?.length ?? 0;
  if (!length) return { name: "AUTH_SECRET", status: "NOT_CONFIGURED", detail: "Tanımlı değil; panel girişi kapalı." };
  return length >= 32
    ? { name: "AUTH_SECRET", status: "HEALTHY", detail: "Uzunluk yeterli (en az 32 karakter)." }
    : { name: "AUTH_SECRET", status: "ERROR", detail: "32 karakterden kısa." };
}

function checkPublicId(name: string, value: string | undefined, pattern: RegExp, fallbackNote?: string): HealthResult {
  if (!value) return { name, status: "NOT_CONFIGURED", detail: fallbackNote ?? "Tanımlı değil." };
  return pattern.test(value) ? { name, status: "HEALTHY", detail: "Kimlik biçimi geçerli." } : { name, status: "ERROR", detail: "Kimlik biçimi geçersiz." };
}

async function checkBlob(): Promise<HealthResult> {
  const name = "BLOB_READ_WRITE_TOKEN";
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return {
      name,
      status: "NOT_CONFIGURED",
      detail: process.env.VERCEL ? "Tanımlı değil; production'da medya yükleme kapalı." : "Tanımlı değil; yerel geliştirmede yerel klasör kullanılır.",
    };
  }
  try {
    await timed(() => list({ limit: 1 }));
    return { name, status: "HEALTHY", detail: "Vercel Blob erişimi başarılı." };
  } catch {
    return { name, status: "ERROR", detail: "Vercel Blob erişimi başarısız." };
  }
}

async function checkOrigin(): Promise<HealthResult> {
  const name = "ADMIN_SITE_ORIGIN";
  const origin = process.env.ADMIN_SITE_ORIGIN || SITE_ORIGIN;
  try {
    const res = await timed((signal) => fetch(new URL("/robots.txt", origin), { signal, cache: "no-store", redirect: "manual" }));
    const note = process.env.ADMIN_SITE_ORIGIN ? "" : " (tanımlı değil; canlı alan adı kullanılıyor)";
    return res.ok ? { name, status: "HEALTHY", detail: `Site kökenine erişildi (HTTP 200)${note}.` } : { name, status: "ERROR", detail: `Site kökeni HTTP ${res.status} döndü${note}.` };
  } catch {
    return { name, status: "ERROR", detail: "Site kökenine ulaşılamadı." };
  }
}

export async function runIntegrationChecks(db: Db | null): Promise<HealthResult[]> {
  return Promise.all([
    checkResend(),
    checkDatabase(db),
    Promise.resolve(checkAuthSecret()),
    Promise.resolve(checkPublicId("NEXT_PUBLIC_GTM_ID", process.env.NEXT_PUBLIC_GTM_ID || DEFAULT_GTM_ID, /^GTM-[A-Z0-9]{4,12}$/)),
    Promise.resolve(
      checkPublicId("NEXT_PUBLIC_GA_MEASUREMENT_ID", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, /^G-[A-Z0-9]{4,15}$/, "Tanımlı değil (opsiyonel; GA4 GTM üzerinden yüklenebilir)."),
    ),
    checkBlob(),
    checkOrigin(),
  ]);
}

export async function saveIntegrationChecks(db: Db, results: HealthResult[], user: string) {
  for (const r of results) {
    await db.query(
      `insert into integration_checks (name, status, detail, checked_at, checked_by) values ($1, $2, $3, now(), $4)
       on conflict (name) do update set status = excluded.status, detail = excluded.detail, checked_at = now(), checked_by = excluded.checked_by`,
      [r.name, r.status, r.detail.slice(0, 300), user],
    );
  }
}

export async function lastIntegrationChecks(db: Db) {
  const rows = (await db.query<{ name: string; status: HealthStatus; detail: string; checked_at: string; checked_by: string }>("select * from integration_checks")).rows;
  return new Map(rows.map((r) => [r.name, r]));
}
