import { getDb, isDatabaseConfigured } from "./db-core";

/**
 * Admin'den yönetilen (veritabanı) yönlendirmeler proxy'de uygulanır.
 * - Liste 60 sn bellekte tutulur; her istekte sorgu atılmaz.
 * - Veritabanı hatası veya zaman aşımında site etkilenmez (fail-open): yönlendirme yapılmaz.
 */

type Rule = { destination: string; statusCode: number };
type Cache = { rules: Map<string, Rule>; expiresAt: number; pending?: Promise<void> };

const TTL_MS = 60_000;
const TIMEOUT_MS = 1_500;

declare global {
  var __promakinaRedirectCache: Cache | undefined;
}

async function refresh(cache: Cache) {
  try {
    const db = await Promise.race([
      getDb(),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)),
    ]);
    const result = await db.query<{ source: string; destination: string; status_code: number }>(
      "select source, destination, status_code from redirects where enabled = true",
    );
    cache.rules = new Map(result.rows.map((r) => [r.source, { destination: r.destination, statusCode: r.status_code }]));
  } catch {
    // Mevcut liste korunur; kısa süre sonra yeniden denenir.
  } finally {
    cache.expiresAt = Date.now() + TTL_MS;
    cache.pending = undefined;
  }
}

/** Admin bir yönlendirmeyi değiştirdiğinde aynı sunucu örneğinde önbellek hemen yenilenir. */
export function invalidateRedirectCache() {
  if (globalThis.__promakinaRedirectCache) globalThis.__promakinaRedirectCache.expiresAt = 0;
}

export async function getDbRedirect(pathname: string): Promise<Rule | undefined> {
  if (!isDatabaseConfigured()) return undefined;
  const cache: Cache = (globalThis.__promakinaRedirectCache ??= { rules: new Map(), expiresAt: 0 });
  if (Date.now() >= cache.expiresAt) {
    cache.pending ??= refresh(cache);
    // İlk yüklemede beklenir; sonraki yenilemeler arka planda yapılır.
    if (cache.rules.size === 0 && cache.expiresAt === 0) await cache.pending;
  }
  return cache.rules.get(pathname);
}
