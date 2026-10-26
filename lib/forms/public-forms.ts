import "server-only";
import { consumeRateLimit, privacyHash } from "@/lib/admin/auth-core";
import { getDb } from "@/lib/admin/db-core";
import { isAdminConfigured } from "@/lib/admin/server";

/**
 * Public form ortak güvenlik yardımcıları: IP tabanlı rate limit, lead kaydı ve dosya imzası kontrolü.
 * Lead kaydı başarısız olsa bile e-posta gönderimi engellenmez; kişisel veri loglanmaz.
 */

const WINDOW_MS = 15 * 60 * 1000;

type MemoryEntry = { count: number; resetAt: number };
declare global {
  var __promakinaFormRateLimit: Map<string, MemoryEntry> | undefined;
}
const memory = (globalThis.__promakinaFormRateLimit ??= new Map<string, MemoryEntry>());

function memoryLimit(key: string, limit: number) {
  const now = Date.now();
  // Bellek tablosunun büyümesini sınırla.
  if (memory.size > 5000) for (const [k, v] of memory) if (v.resetAt <= now) memory.delete(k);
  const current = memory.get(key);
  if (!current || current.resetAt <= now) {
    memory.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  current.count += 1;
  return current.count <= limit;
}

export function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

/**
 * Anahtar yalnız IP'dir: e-posta değiştirerek limit aşılamaz.
 * Veritabanı yapılandırılmışsa limit tüm sunucu örnekleri arasında paylaşılır; değilse örnek başına bellekte tutulur.
 */
export async function allowFormSubmission(scope: "contact" | "quote", ip: string, limit = 5) {
  if (isAdminConfigured()) {
    try {
      return await consumeRateLimit(await getDb(), `form:${scope}:${privacyHash(`ip:${ip}`)}`, limit, WINDOW_MS);
    } catch {
      // Veritabanı erişilemezse bellek limitine düşülür; form kapanmaz.
    }
  }
  return memoryLimit(`${scope}:${ip}`, limit);
}

export type LeadInput = {
  kind: "contact" | "rfq";
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  subject?: string;
  message?: string;
  product?: string;
  sector?: string;
  sourcePage?: string;
  locale?: string;
  details?: Record<string, string>;
  attachmentName?: string;
  attachmentSize?: number;
};

const cap = (value: string | undefined, max: number) => (value ? value.slice(0, max) : null);

export async function recordLead(input: LeadInput) {
  if (!isAdminConfigured()) return;
  try {
    const db = await getDb();
    await db.query(
      `insert into leads (kind, full_name, company, email, phone, country, subject, message, product, sector, source_page, locale, details, attachment_name, attachment_size)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
      [
        input.kind,
        cap(input.fullName, 120),
        cap(input.company, 160),
        cap(input.email, 254),
        cap(input.phone, 40),
        cap(input.country, 80),
        cap(input.subject, 200),
        cap(input.message, 5000),
        cap(input.product, 160),
        cap(input.sector, 160),
        cap(input.sourcePage, 300),
        cap(input.locale, 8),
        input.details ? JSON.stringify(input.details) : null,
        cap(input.attachmentName, 120),
        input.attachmentSize ?? null,
      ],
    );
  } catch (error) {
    // Yalnız hata türü yazılır; form içeriği veya kişisel veri loglanmaz.
    console.error("lead kaydı başarısız:", error instanceof Error ? error.name : "unknown");
  }
}

/** Sayfa yolu: yalnız aynı sitenin göreli yolu kabul edilir (Referer'den türetilir). */
export function sourcePageFrom(request: Request) {
  const referer = request.headers.get("referer");
  if (!referer) return undefined;
  try {
    const url = new URL(referer);
    return url.host === new URL(request.url).host || url.hostname.endsWith("promakina.com.tr") ? url.pathname : undefined;
  } catch {
    return undefined;
  }
}

/** Dosya imzası (magic bytes): istemcinin bildirdiği MIME türüne güvenilmez. */
export function matchesFileSignature(mime: string, bytes: Uint8Array) {
  const starts = (...sig: number[]) => sig.every((b, i) => bytes[i] === b);
  switch (mime) {
    case "application/pdf":
      return starts(0x25, 0x50, 0x44, 0x46); // %PDF
    case "image/jpeg":
      return starts(0xff, 0xd8, 0xff);
    case "image/png":
      return starts(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a);
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return starts(0x50, 0x4b, 0x03, 0x04); // ZIP (OOXML)
    default:
      return false;
  }
}
