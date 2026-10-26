import "server-only";
import { activeDriver, newStorageKey, publicUrlFor, storeObject } from "./storage";
import { MAX_UPLOAD_BYTES, MIME_OF, UploadError, processUpload } from "./validate";

/** İstekten tek dosyayı okur, doğrular, yeniden kodlar ve depolar. Dosya sistemi yalnız Vercel dışında kullanılır. */
export async function receiveUpload(request: Request) {
  const driver = activeDriver();
  if (!driver) throw new UploadError("Medya depolama yapılandırılmadı (BLOB_READ_WRITE_TOKEN). Production'da dosya sistemine yükleme yapılmaz.");
  const length = Number(request.headers.get("content-length") ?? "0");
  if (!length || length > MAX_UPLOAD_BYTES + 64 * 1024) throw new UploadError("Dosya 4 MB sınırını aşıyor.");
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    throw new UploadError("Geçersiz yükleme isteği.");
  }
  const file = form.get("file");
  if (!(file instanceof File)) throw new UploadError("Dosya seçilmedi.");
  const processed = await processUpload(file.name, new Uint8Array(await file.arrayBuffer()));
  const key = newStorageKey(processed.format);
  const mime = MIME_OF[processed.format];
  const ref = await storeObject(driver, key, processed.buffer, mime);
  return {
    url: publicUrlFor(key),
    storageKey: ref,
    driver,
    mime,
    size: processed.size,
    width: processed.width,
    height: processed.height,
    // Özgün ad yalnız bilgi amaçlı saklanır; depolama anahtarına girmez.
    originalName: file.name.replace(/[^\p{L}\p{N}._ -]/gu, "_"),
  };
}
