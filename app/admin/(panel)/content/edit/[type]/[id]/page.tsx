import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/lib/admin/db-core";
import { hasPermission } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { listManifestImages } from "@/lib/cms/images";
import { listAssets } from "@/lib/media/assets";
import { getAdapter, hasDocument } from "@/lib/cms/registry";
import { getEffective, listRevisions, translationStatuses, type TranslationStatus } from "@/lib/cms/store";
import { CMS_LOCALES, type CmsDocLocale } from "@/lib/cms/types";
import { ContentEditor } from "../../../../../_components/content-editor";
import { Badge, Card, Notice, PageHeader, Table, Td, formatDate } from "../../../../../_components/ui";

const STATUS_TONE: Record<TranslationStatus, "green" | "amber" | "red"> = { COMPLETE: "green", OUTDATED: "amber", MISSING: "red" };
const STATUS_LABEL: Record<TranslationStatus, string> = { COMPLETE: "Güncel", OUTDATED: "Güncel değil", MISSING: "Yok" };
const ACTION_LABEL: Record<string, string> = {
  draft: "Taslak",
  publish: "Yayın",
  revert: "Koda dönüş",
  discard: "Taslak silindi",
  restore: "Geri yükleme",
  mark_synced: "Çeviri eşleştirildi",
};

export default async function ContentEditPage({
  params,
  searchParams,
}: {
  params: Promise<{ type: string; id: string }>;
  searchParams: Promise<{ locale?: string }>;
}) {
  const user = await requirePermission("content.view");
  const { type, id: rawId } = await params;
  const id = decodeURIComponent(rawId);
  const adapter = getAdapter(type);
  if (!adapter || !hasDocument(adapter, id)) notFound();

  const sp = await searchParams;
  const available: CmsDocLocale[] = [...adapter.locales(id), ...(adapter.shared ? (["shared"] as const) : [])];
  const locale = (available as string[]).includes(sp.locale ?? "") ? (sp.locale as CmsDocLocale) : "tr";

  const db = await getDb();
  const [effective, statuses, revisions] = await Promise.all([
    getEffective(db, adapter, id, locale),
    translationStatuses(db, adapter, id),
    listRevisions(db, adapter, id, locale),
  ]);
  const title = adapter.list().find((d) => d.id === id)?.title ?? id;
  const paths = adapter.paths(id);
  const publicPath = locale === "shared" ? paths.tr : paths[locale];
  const canEdit = hasPermission(user.role, "content.edit");
  const canPublish = hasPermission(user.role, "content.publish");
  const rules = locale === "shared" ? adapter.shared!.rules : adapter.rules;
  const tabHref = (l: string) => `/admin/content/edit/${adapter.type}/${encodeURIComponent(id)}?locale=${l}`;

  return (
    <>
      <PageHeader
        title={title}
        description={`${adapter.label} · ${publicPath ?? ""}`}
        actions={
          <Link href={`/admin/content/${adapter.group}`} className="text-sm text-[#154764] hover:underline">
            ← Listeye dön
          </Link>
        }
      />
      {/* Sekmeler düz bağlantıdır; kaydedilmemiş değişiklikte tarayıcı uyarısı çalışır. */}
      <nav aria-label="Dil sekmeleri" className="mb-4 flex flex-wrap gap-2">
        {CMS_LOCALES.map((l) => {
          const enabled = available.includes(l);
          const cls = `rounded-lg border px-3 py-1.5 text-sm ${l === locale ? "border-[#154764] bg-[#154764] text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`;
          const label = (
            <>
              {l.toUpperCase()} <Badge tone={STATUS_TONE[statuses[l]]}>{STATUS_LABEL[statuses[l]]}</Badge>
            </>
          );
          return enabled ? (
            <a key={l} href={tabHref(l)} aria-current={l === locale ? "page" : undefined} className={cls}>
              {label}
            </a>
          ) : (
            <span key={l} className="rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-sm text-slate-400" title="Bu dilde sayfa yok; panel yeni dil URL'si üretmez.">
              {label}
            </span>
          );
        })}
        {adapter.shared ? (
          <a href={tabHref("shared")} aria-current={locale === "shared" ? "page" : undefined} className={`rounded-lg border px-3 py-1.5 text-sm ${locale === "shared" ? "border-[#154764] bg-[#154764] text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}>
            {adapter.shared.label}
          </a>
        ) : null}
      </nav>

      {locale !== "tr" && locale !== "shared" && statuses[locale] === "OUTDATED" ? (
        <Notice tone="amber">TR kaynak içerik bu çeviri son güncellendiğinden beri değişti. Çeviriyi kontrol edip yayınlayın veya değişiklik gerekmiyorsa “Çeviri güncel” olarak işaretleyin.</Notice>
      ) : null}
      {locale === "shared" ? <Notice>Bu sekmedeki görseller tüm dil sürümlerinde kullanılır. Görsel sayısı ve sırası şablona bağlıdır.</Notice> : null}

      {canEdit ? (
        <ContentEditor
          key={`${locale}-${effective.row?.draft_updated_at ?? ""}-${effective.row?.published_at ?? ""}`}
          target={{ type: adapter.type, id, locale }}
          defaultValue={effective.def}
          value={effective.effective}
          locked={rules.locked ?? []}
          resizable={rules.resizable ?? {}}
          imageMode={locale === "shared"}
          images={locale === "shared" ? [...(await listAssets(db)).map((a) => a.url), ...listManifestImages()] : []}
          groups={locale === "shared" ? null : adapter.groups}
          canPublish={canPublish}
          canMarkSynced={canPublish && locale !== "tr" && locale !== "shared" && statuses[locale] === "OUTDATED"}
          hasDraft={Boolean(effective.draft)}
          hasPublished={Boolean(effective.published)}
          dir={locale === "ar" ? "rtl" : "ltr"}
          previewHref={publicPath ? `/admin/api/preview?${new URLSearchParams({ type: adapter.type, id, locale })}` : null}
        />
      ) : (
        <Notice tone="amber">Bu içeriği düzenleme yetkiniz yok (yalnız görüntüleme).</Notice>
      )}

      <div className="mt-8">
        <Card title={`Revizyon geçmişi (${locale.toUpperCase()})`}>
          <Table head={["No", "İşlem", "Kullanıcı", "Tarih", ""]} empty={revisions.length === 0}>
            {revisions.map((r) => (
              <tr key={r.id}>
                <Td>#{r.number}</Td>
                <Td>{ACTION_LABEL[r.action] ?? r.action}</Td>
                <Td>{r.user_email ?? "—"}</Td>
                <Td>{formatDate(r.created_at)}</Td>
                <Td>
                  <Link className="text-[#154764] hover:underline" href={`/admin/content/revision/${r.id}`}>
                    İncele
                  </Link>
                </Td>
              </tr>
            ))}
          </Table>
        </Card>
      </div>
    </>
  );
}
