import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { guardAdminApi, json } from "@/lib/admin/api";
import { audit } from "@/lib/admin/server";
import { getAdapter, hasDocument } from "@/lib/cms/registry";
import { CMS_LOCALES } from "@/lib/cms/types";

/**
 * Taslak önizleme: yalnız "content.view" yetkili oturumla açılır. Yönlendirme hedefi istemciden alınmaz,
 * adaptörün kayıtlı sayfa yolundan üretilir (açık yönlendirme yok). Public sayfa taslağı yine de ancak
 * istekte geçerli admin oturumu varsa gösterir (lib/cms/public.ts).
 */
export async function GET(request: Request) {
  const guard = await guardAdminApi(request, "content.view");
  if (guard.response) return guard.response;

  const url = new URL(request.url);
  const adapter = getAdapter(url.searchParams.get("type") ?? "");
  const id = url.searchParams.get("id") ?? "";
  const locale = url.searchParams.get("locale") ?? "tr";
  if (!adapter || !hasDocument(adapter, id)) return json({ error: "not_found" }, 404);
  const pathLocale = locale === "shared" ? "tr" : locale;
  if (!(CMS_LOCALES as readonly string[]).includes(pathLocale)) return json({ error: "not_found" }, 404);
  const path = adapter.paths(id)[pathLocale as (typeof CMS_LOCALES)[number]];
  if (!path || !path.startsWith("/")) return json({ error: "not_found" }, 404);

  (await draftMode()).enable();
  await audit(guard.user, "content.preview", `${adapter.type}/${id}/${locale}`);
  return NextResponse.redirect(new URL(path, url.origin), { status: 307, headers: { "Cache-Control": "no-store" } });
}
