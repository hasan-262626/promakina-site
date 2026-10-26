import Image from "next/image";
import Link from "next/link";
import { getMediaManifest, PAGE_SIZE } from "@/lib/admin/data";
import { getDb } from "@/lib/admin/db-core";
import { hasPermission } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { listAssets, whereUsed } from "@/lib/media/assets";
import { activeDriver } from "@/lib/media/storage";
import { MediaLibrary, type UploadedAsset } from "../../_components/media-library";
import { Badge, Notice, PageHeader, Pagination, Table, Td, formatBytes, formatDate, inputClass, secondaryButtonClass } from "../../_components/ui";

export const metadata = { title: "Medya" };

type Search = { q?: string; usage?: string; view?: string; page?: string; type?: string };

export default async function MediaPage({ searchParams }: { searchParams: Promise<Search> }) {
  const user = await requirePermission("media.view");
  const sp = await searchParams;
  const db = await getDb();
  const uploaded: UploadedAsset[] = await Promise.all(
    (await listAssets(db)).map(async (a) => ({
      id: a.id,
      url: a.url,
      title: a.title ?? "",
      alt: a.alt ?? {},
      size: a.size,
      width: a.width,
      height: a.height,
      uploadedBy: a.uploaded_by,
      createdAt: String(a.created_at),
      usage: (await whereUsed(db, a.url)).map((u) => ({ type: u.type, doc_id: u.doc_id, locale: u.locale, inPublished: u.inPublished })),
    })),
  );
  const manifest = getMediaManifest();
  const q = (sp.q ?? "").slice(0, 100).toLocaleLowerCase("tr");
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);
  const view = sp.view === "list" ? "list" : "grid";

  const filtered = manifest.items.filter((m) => {
    if (q && !m.path.toLocaleLowerCase("tr").includes(q)) return false;
    if (sp.usage === "used" && m.usedIn.length === 0) return false;
    if (sp.usage === "unused" && m.usedIn.length > 0) return false;
    if (sp.type === "image" && !m.mime.startsWith("image/")) return false;
    if (sp.type === "video" && !m.mime.startsWith("video/")) return false;
    return true;
  });
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const unused = manifest.items.filter((m) => m.usedIn.length === 0).length;
  const params = (overrides: Record<string, string>) =>
    new URLSearchParams(Object.fromEntries(Object.entries({ q: sp.q ?? "", usage: sp.usage ?? "", type: sp.type ?? "", view, ...overrides }).filter(([, v]) => v)));

  return (
    <>
      <PageHeader
        title="Medya kütüphanesi"
        description={`${manifest.items.length} dosya · ${unused} dosya kaynak kodda doğrudan referanslanmıyor · envanter: ${formatDate(manifest.generatedAt)}`}
        actions={
          <>
            <Link className={secondaryButtonClass} href={`/admin/media?${params({ view: "grid", page: "1" })}`} aria-current={view === "grid" ? "page" : undefined}>
              Izgara
            </Link>
            <Link className={secondaryButtonClass} href={`/admin/media?${params({ view: "list", page: "1" })}`} aria-current={view === "list" ? "page" : undefined}>
              Liste
            </Link>
          </>
        }
      />
      {activeDriver() ? null : (
        <Notice tone="amber">
          Medya depolama yapılandırılmadı: production&apos;da yükleme için <code>BLOB_READ_WRITE_TOKEN</code> (Vercel Blob) gerekir. Sunucu dosya sistemine yükleme
          yapılmaz.
        </Notice>
      )}
      <MediaLibrary
        assets={uploaded}
        driver={activeDriver()}
        canManage={hasPermission(user.role, "media.manage")}
        canDelete={hasPermission(user.role, "media.delete")}
        canPublish={hasPermission(user.role, "content.publish")}
      />
      <h2 className="mb-2 text-base font-semibold text-slate-900">Site görselleri (kaynak kod, salt okunur)</h2>
      <Notice tone="amber">
        Bu dosyalar <code>public/</code> klasöründe ve kaynak kodda yolla referanslanıyor; panelden silinemez veya değiştirilemez (sürüm kontrolünde yönetilir).
        &quot;Referans bulunamadı&quot; dosyalar dinamik yolla (ör. <code>{"`/images/x${n}.jpg`"}</code>) kullanılıyor olabilir.
      </Notice>
      <form className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-4" role="search">
        <input type="hidden" name="view" value={view} />
        <label className="sm:col-span-2">
          <span className="mb-1 block text-xs font-medium text-slate-600">Dosya adı / klasör</span>
          <input name="q" defaultValue={sp.q} maxLength={100} className={inputClass} />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Kullanım</span>
          <select name="usage" defaultValue={sp.usage ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            <option value="used">Kullanılan</option>
            <option value="unused">Referans bulunamadı</option>
          </select>
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Tür</span>
          <select name="type" defaultValue={sp.type ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            <option value="image">Görsel</option>
            <option value="video">Video</option>
          </select>
        </label>
        <div className="sm:col-span-4">
          <button className={secondaryButtonClass}>Filtrele</button>
        </div>
      </form>

      {view === "grid" ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rows.map((m) => (
            <li key={m.path} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-slate-100">
                {m.mime.startsWith("image/") && m.mime !== "image/svg+xml" && m.mime !== "image/x-icon" ? (
                  <Image src={m.path} alt="" fill sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">{m.mime}</span>
                )}
              </div>
              <div className="p-3 text-xs">
                <p className="break-all font-medium text-slate-800">{m.path}</p>
                <p className="mt-1 text-slate-500">
                  {m.width && m.height ? `${m.width}×${m.height} · ` : ""}
                  {formatBytes(m.size)}
                </p>
                <p className="mt-1">{m.usedIn.length ? <Badge tone="green">{m.usedIn.length} dosyada kullanılıyor</Badge> : <Badge tone="amber">Referans bulunamadı</Badge>}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Table head={["Dosya", "Boyut", "Dosya boyutu", "MIME", "Kullanıldığı kaynak dosyalar"]} empty={rows.length === 0}>
          {rows.map((m) => (
            <tr key={m.path}>
              <Td className="break-all font-mono text-xs">{m.path}</Td>
              <Td>{m.width && m.height ? `${m.width}×${m.height}` : "—"}</Td>
              <Td>{formatBytes(m.size)}</Td>
              <Td>{m.mime}</Td>
              <Td className="text-xs">{m.usedIn.length ? m.usedIn.join(", ") : <Badge tone="amber">Referans bulunamadı</Badge>}</Td>
            </tr>
          ))}
        </Table>
      )}
      <Pagination page={page} total={filtered.length} pageSize={PAGE_SIZE} buildHref={(p) => `/admin/media?${params({ page: String(p) })}`} />
    </>
  );
}
