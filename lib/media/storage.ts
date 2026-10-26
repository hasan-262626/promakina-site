import "server-only";
import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { del, put } from "@vercel/blob";
import { EXTENSION_OF, type ImageFormat } from "./validate";

/**
 * Medya depolama sürücüsü.
 * - "blob": Vercel Blob (BLOB_READ_WRITE_TOKEN). Production'da tek seçenektir.
 * - "local": yalnız Vercel dışında (geliştirme/test) .data/uploads klasörü. Vercel'de dosya sistemi kullanılmaz.
 * Dosyalar sitede her iki durumda da aynı kökenli /media/<anahtar> adresinden sunulur; böylece canonical/OG/schema
 * üreten kod ve CSP değişmez.
 */

export type MediaDriver = "blob" | "local";

const LOCAL_DIR = path.join(process.cwd(), ".data", "uploads");
/** uploads/YYYY/MM/<uuid>.<ext> — rastgele ad; kullanıcı dosya adı depolama anahtarına girmez. */
export const STORAGE_KEY_RE = /^uploads\/\d{4}\/\d{2}\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jpg|png|webp|avif)$/;

export function activeDriver(): MediaDriver | null {
  if (process.env.BLOB_READ_WRITE_TOKEN) return "blob";
  if (!process.env.VERCEL) return "local";
  return null;
}

export function newStorageKey(format: ImageFormat, now = new Date()) {
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `uploads/${now.getUTCFullYear()}/${month}/${randomUUID()}.${EXTENSION_OF[format]}`;
}

export const publicUrlFor = (key: string) => `/media/${key}`;

/** Dosyayı yazar; dönen değer depolama başvurusudur (blob: dosya URL'si, local: anahtar). */
export async function storeObject(driver: MediaDriver, key: string, body: Buffer, contentType: string): Promise<string> {
  if (!STORAGE_KEY_RE.test(key)) throw new Error("Geçersiz depolama anahtarı");
  if (driver === "blob") {
    const result = await put(key, body, { access: "public", contentType, addRandomSuffix: false, allowOverwrite: false });
    return result.url;
  }
  const file = path.join(LOCAL_DIR, ...key.split("/"));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, body, { flag: "wx" });
  return key;
}

export async function readObject(driver: string, ref: string, key: string): Promise<Response | Buffer | null> {
  if (!STORAGE_KEY_RE.test(key)) return null;
  if (driver === "blob") {
    if (!/^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\//.test(ref)) return null;
    const res = await fetch(ref, { cache: "no-store" });
    return res.ok ? res : null;
  }
  if (driver === "local" && !process.env.VERCEL) {
    try {
      return await fs.readFile(path.join(LOCAL_DIR, ...key.split("/")));
    } catch {
      return null;
    }
  }
  return null;
}

export async function deleteObject(driver: string, ref: string, key: string) {
  if (driver === "blob") return void (await del(ref));
  if (driver === "local" && STORAGE_KEY_RE.test(key)) await fs.rm(path.join(LOCAL_DIR, ...key.split("/")), { force: true });
}
