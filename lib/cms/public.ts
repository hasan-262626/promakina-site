import "server-only";
import { cookies, draftMode } from "next/headers";
import { validateSession } from "@/lib/admin/auth-core";
import { getDb, isDatabaseConfigured } from "@/lib/admin/db-core";
import { hasPermission } from "@/lib/admin/permissions";
import { SESSION_COOKIE, needsMfaEnrollment } from "@/lib/admin/server";
import type { Json } from "./shape";
import type { CmsDocLocale } from "./types";

/**
 * Public sayfaların CMS okuma katmanı.
 * - Yalnız yayınlanmış içerik döner; taslak public kullanıcıya görünmez.
 * - Önizleme (draft mode) açıksa ve istekte geçerli, "content.view" yetkili admin oturumu varsa taslak döner.
 * - Veritabanı yoksa, hata verirse veya geç yanıt verirse null döner → sayfa koddaki içerikle render edilir.
 */

const TIMEOUT_MS = 2_500;
/** Bir hatadan sonra 60 sn veritabanı denenmez; böylece erişilemeyen veritabanı her sayfayı ayrı ayrı yavaşlatmaz. */
const FAILURE_BACKOFF_MS = 60_000;
let failedAt = 0;

function withTimeout<T>(promise: Promise<T>): Promise<T> {
  return Promise.race([promise, new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS))]);
}

/** Yerel gömülü veritabanı (pglite) build sırasında çok süreçli erişime uygun değildir; build'de atlanır. */
function dbUsable() {
  if (!isDatabaseConfigured()) return false;
  if (process.env.DATABASE_URL?.startsWith("pglite:") && process.env.NEXT_PHASE === "phase-production-build") return false;
  return true;
}

async function isAuthorizedPreview(): Promise<boolean> {
  let enabled = false;
  try {
    enabled = (await draftMode()).isEnabled;
  } catch {
    return false;
  }
  if (!enabled) return false;
  try {
    const jar = await cookies();
    const token = jar.get(SESSION_COOKIE)?.value;
    if (!token) return false;
    const user = await validateSession(await getDb(), token);
    return Boolean(user && !needsMfaEnrollment(user) && hasPermission(user.role, "content.view"));
  } catch {
    return false;
  }
}

export async function loadCmsContent<T = Json>(type: string, id: string, locale: CmsDocLocale): Promise<T | null> {
  if (!dbUsable() || Date.now() - failedAt < FAILURE_BACKOFF_MS) return null;
  try {
    const db = await withTimeout(getDb());
    const row = (
      await withTimeout(
        db.query<{ draft: Json | null; published: Json | null }>(
          "select draft, published from content_documents where type = $1 and doc_id = $2 and locale = $3",
          [type, id, locale],
        ),
      )
    ).rows[0];
    if (!row) return null;
    if (row.draft && (await isAuthorizedPreview())) return row.draft as T;
    return (row.published as T) ?? null;
  } catch {
    // Admin/veritabanı arızası public siteyi etkilemez.
    failedAt = Date.now();
    return null;
  }
}
