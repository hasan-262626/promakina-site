import { guardAdminApi, json, methodNotAllowed } from "@/lib/admin/api";
import { getDb } from "@/lib/admin/db-core";
import { audit } from "@/lib/admin/server";
import { createAsset, recentUploadCount } from "@/lib/media/assets";
import { receiveUpload } from "@/lib/media/upload";
import { UploadError } from "@/lib/media/validate";

/** Medya yükleme (media.manage). Kullanıcı başına 10 dakikada en fazla 30 dosya. */
export async function POST(request: Request) {
  const guard = await guardAdminApi(request, "media.manage");
  if (guard.response) return guard.response;
  const db = await getDb();
  if ((await recentUploadCount(db, guard.user.email)) >= 30) return json({ error: "Çok fazla yükleme; birkaç dakika sonra tekrar deneyin." }, 429);
  try {
    const stored = await receiveUpload(request);
    const asset = await createAsset(db, { ...stored, user: guard.user.email });
    await audit(guard.user, "media.uploaded", asset.url, { size: asset.size, mime: asset.mime });
    return json({ ok: true, asset: { id: asset.id, url: asset.url, width: asset.width, height: asset.height, size: asset.size } }, 201);
  } catch (error) {
    if (error instanceof UploadError) {
      await audit(guard.user, "media.upload_rejected", undefined, { reason: error.message });
      return json({ error: error.message }, 400);
    }
    return json({ error: "Yükleme tamamlanamadı." }, 500);
  }
}

export function GET() {
  return methodNotAllowed(["POST"]);
}
