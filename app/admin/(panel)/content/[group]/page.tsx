import Link from "next/link";
import { notFound } from "next/navigation";
import { buildInventory, getLatestCompletedResults, getSitemapEntries, LOCALES, PAGE_SIZE, type ContentGroup } from "@/lib/admin/data";
import { getDb } from "@/lib/admin/db-core";
import { requirePermission } from "@/lib/admin/server";
import { contentAdapters } from "@/lib/cms/registry";
import { listDocumentStates, type TranslationStatus } from "@/lib/cms/store";
import { CMS_LOCALES } from "@/lib/cms/types";
import { Badge, Notice, PageHeader, Pagination, Table, Td, formatDate, inputClass, secondaryButtonClass } from "../../../_components/ui";

const GROUPS: Record<string, { group: ContentGroup; title: string; notMigrated: string }> = {
  machines: {
    group: "machines",
    title: "Makinalar & Ekipman",
    notMigrated: "Kurutma Tamburu (ayrı şablon), Tambur Sistemleri kategori sayfası ve Makinalar ana sayfası henüz panele taşınmadı.",
  },
  sectors: {
    group: "sectors",
    title: "Sektörler ve Tesisler",
    notMigrated: "8 sektör ana sayfası, diğer sektör alt sayfaları ve tesis sayfaları henüz panele taşınmadı.",
  },
  blog: {
    group: "blog",
    title: "Blog / Teknik Rehberler",
    notMigrated: "Özel tasarımlı blog sayfaları (statik klasörler ve sistem/rehber şablonları) henüz panele taşınmadı; yalnız ortak blog şablonundaki yazılar düzenlenebilir.",
  },
};

const STATUS_TONE: Record<TranslationStatus, "green" | "amber" | "slate"> = { COMPLETE: "green", OUTDATED: "amber", MISSING: "slate" };
const STATUS_SHORT: Record<TranslationStatus, string> = { COMPLETE: "✓", OUTDATED: "eski", MISSING: "—" };

type Search = { q?: string; type?: string; translation?: string; page?: string; state?: string; cpage?: string };

export default async function ContentListPage({ params, searchParams }: { params: Promise<{ group: string }>; searchParams: Promise<Search> }) {
  await requirePermission("content.view");
  const { group } = await params;
  const config = GROUPS[group];
  if (!config) notFound();
  const sp = await searchParams;
  const q = (sp.q ?? "").slice(0, 100).toLocaleLowerCase("tr");
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);

  const adapters = contentAdapters.filter((a) => a.group === group);
  const db = await getDb();
  const cmsDocs = (
    await Promise.all(adapters.map(async (adapter) => (await listDocumentStates(db, adapter)).map((doc) => ({ ...doc, adapter }))))
  ).flat();
  const cmsFiltered = cmsDocs.filter((doc) => {
    if (q && !doc.title.toLocaleLowerCase("tr").includes(q) && !doc.id.toLowerCase().includes(q)) return false;
    if (sp.state === "draft" && !doc.hasDraft) return false;
    if (sp.state === "published" && !doc.hasPublished) return false;
    if (sp.state === "outdated" && !Object.values(doc.statuses).includes("OUTDATED")) return false;
    return true;
  });
  const cpage = Math.max(1, Number.parseInt(sp.cpage ?? "1", 10) || 1);
  const cmsRows = cmsFiltered.slice((cpage - 1) * PAGE_SIZE, cpage * PAGE_SIZE);
  const cmsHref = (p: number) => `/admin/content/${group}?${new URLSearchParams({ ...(sp.q ? { q: sp.q } : {}), ...(sp.state ? { state: sp.state } : {}), cpage: String(p) })}`;

  const [entries, scan] = await Promise.all([getSitemapEntries(), getLatestCompletedResults()]);
  const all = entries ? buildInventory(entries).filter((i) => i.group === config.group) : [];
  const types = [...new Set(all.map((i) => i.type))];
  const seo = new Map(scan?.rows.map((r) => [r.url, r]) ?? []);

  const filtered = all.filter((item) => {
    const complete = LOCALES.every((l) => item.locales[l]);
    if (sp.type && item.type !== sp.type) return false;
    if (sp.translation === "complete" && !complete) return false;
    if (sp.translation === "missing" && complete) return false;
    if (q && !item.trPath.toLocaleLowerCase("tr").includes(q) && !(seo.get(item.trPath)?.title ?? "").toLocaleLowerCase("tr").includes(q)) return false;
    return true;
  });
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const href = (p: number) => `/admin/content/${group}?${new URLSearchParams({ ...(sp.q ? { q: sp.q } : {}), ...(sp.type ? { type: sp.type } : {}), ...(sp.translation ? { translation: sp.translation } : {}), page: String(p) })}`;

  return (
    <>
      <PageHeader title={config.title} description="TR kaynak sayfalar, dört dil karşılıkları ve son taramadaki SEO alanları." />
      <h2 className="mb-2 mt-2 text-base font-semibold text-slate-900">Panelden düzenlenebilir içerik ({cmsDocs.length})</h2>
      <Notice>
        Panelde yayınlanan içerik koddaki içeriğin üzerine uygulanır; yayında panel içeriği yoksa veya veritabanına erişilemezse sayfa koddaki içerikle çalışır. Sayfa
        düzeni ve URL&apos;ler panelden değiştirilemez. <strong>Kapsam dışı (CMS EDITING: PARTIAL / NOT YET MIGRATED):</strong> {config.notMigrated}
      </Notice>
      <form className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-4" role="search">
        <label className="sm:col-span-2">
          <span className="mb-1 block text-xs font-medium text-slate-600">Ara (başlık veya kimlik)</span>
          <input name="q" defaultValue={sp.q} maxLength={100} className={inputClass} />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Durum</span>
          <select name="state" defaultValue={sp.state ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            <option value="draft">Taslağı olan</option>
            <option value="published">Panelden yayınlanmış</option>
            <option value="outdated">Güncel olmayan çeviri</option>
          </select>
        </label>
        <div className="flex items-end">
          <button className={secondaryButtonClass}>Filtrele</button>
        </div>
      </form>
      <Table head={["İçerik", "Tür", "Durum", ...CMS_LOCALES.map((l) => l.toUpperCase()), "Son değişiklik"]} empty={cmsRows.length === 0}>
        {cmsRows.map((doc) => (
          <tr key={`${doc.adapter.type}-${doc.id}`} className="hover:bg-slate-50">
            <Td>
              <Link className="font-medium text-[#154764] hover:underline" href={`/admin/content/edit/${doc.adapter.type}/${encodeURIComponent(doc.id)}`}>
                {doc.title}
              </Link>
              <p className="mt-0.5 font-mono text-[11px] text-slate-500">{doc.adapter.paths(doc.id).tr}</p>
            </Td>
            <Td>{doc.adapter.label}</Td>
            <Td>
              {doc.hasDraft ? <Badge tone="amber">Taslak</Badge> : null} {doc.hasPublished ? <Badge tone="green">Panel</Badge> : <Badge>Kod</Badge>}
            </Td>
            {CMS_LOCALES.map((l) => (
              <Td key={l}>
                <Badge tone={STATUS_TONE[doc.statuses[l]]}>{STATUS_SHORT[doc.statuses[l]]}</Badge>
              </Td>
            ))}
            <Td>{doc.updatedAt ? formatDate(doc.updatedAt) : "—"}</Td>
          </tr>
        ))}
      </Table>
      <Pagination page={cpage} total={cmsFiltered.length} pageSize={PAGE_SIZE} buildHref={cmsHref} />

      <h2 className="mb-2 mt-10 text-base font-semibold text-slate-900">Tüm sayfalar ve SEO denetimi</h2>
      <form className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-4" role="search">
        <label className="sm:col-span-2">
          <span className="mb-1 block text-xs font-medium text-slate-600">Ara (URL veya başlık)</span>
          <input name="q" defaultValue={sp.q} maxLength={100} className={inputClass} />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Tür</span>
          <select name="type" defaultValue={sp.type ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Çeviri durumu</span>
          <select name="translation" defaultValue={sp.translation ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            <option value="complete">✓ Dört dil tamam</option>
            <option value="missing">! Eksik dil var</option>
          </select>
        </label>
        <div className="sm:col-span-4">
          <button className={secondaryButtonClass}>Filtrele</button>
        </div>
      </form>

      <Table head={["TR sayfa", "Tür", "TR", "EN", "RU", "AR", "Title", "Desc", "H1"]} empty={rows.length === 0}>
        {rows.map((item) => {
          const r = seo.get(item.trPath);
          return (
            <tr key={item.trPath} className="hover:bg-slate-50">
              <Td>
                <Link className="font-medium text-[#154764] hover:underline" href={`/admin/content/item?path=${encodeURIComponent(item.trPath)}`}>
                  {item.trPath}
                </Link>
                {r?.title ? <p className="mt-0.5 max-w-md truncate text-xs text-slate-500">{r.title}</p> : null}
              </Td>
              <Td>{item.type}</Td>
              {LOCALES.map((l) => (
                <Td key={l}>{item.locales[l] ? <Badge tone="green">✓</Badge> : <Badge tone="amber">!</Badge>}</Td>
              ))}
              <Td>{r?.title ? r.title.length : "—"}</Td>
              <Td>{r?.description ? r.description.length : "—"}</Td>
              <Td>{r?.h1_count ?? "—"}</Td>
            </tr>
          );
        })}
      </Table>
      <Pagination page={page} total={filtered.length} pageSize={PAGE_SIZE} buildHref={href} />
      {!scan ? <p className="mt-3 text-xs text-slate-500">Title/description sütunları için Site Sağlığı taraması çalıştırılmalı.</p> : null}
    </>
  );
}
