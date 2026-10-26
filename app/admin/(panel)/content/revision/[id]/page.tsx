import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/lib/admin/db-core";
import { hasPermission } from "@/lib/admin/permissions";
import { requirePermission } from "@/lib/admin/server";
import { getAdapter, hasDocument } from "@/lib/cms/registry";
import { getRevision } from "@/lib/cms/store";
import { RestoreRevisionButton } from "../../../../_components/restore-button";
import { Card, PageHeader, formatDate } from "../../../../_components/ui";

function JsonBlock({ value }: { value: unknown }) {
  if (value === null || value === undefined) return <p className="text-sm text-slate-500">—</p>;
  return <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap break-words rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-800">{JSON.stringify(value, null, 2)}</pre>;
}

export default async function RevisionPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requirePermission("content.view");
  const id = Number.parseInt((await params).id, 10);
  if (!Number.isSafeInteger(id) || id <= 0) notFound();
  const rev = await getRevision(await getDb(), id);
  const adapter = rev ? getAdapter(rev.type) : undefined;
  if (!rev || !adapter || !hasDocument(adapter, rev.doc_id)) notFound();

  const editHref = `/admin/content/edit/${adapter.type}/${encodeURIComponent(rev.doc_id)}?locale=${rev.locale}`;
  const restorable = Boolean(rev.data ?? rev.previous);

  return (
    <>
      <PageHeader
        title={`Revizyon #${rev.number}`}
        description={`${adapter.label} · ${rev.doc_id} · ${rev.locale.toUpperCase()}`}
        actions={
          <Link href={editHref} className="text-sm text-[#154764] hover:underline">
            ← Editöre dön
          </Link>
        }
      />
      <Card>
        <dl className="grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-slate-500">İçerik</dt>
            <dd className="font-mono text-xs">
              {rev.type}/{rev.doc_id}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Dil</dt>
            <dd>{rev.locale.toUpperCase()}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Revizyon no / işlem</dt>
            <dd>
              #{rev.number} · {rev.action}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Oluşturan</dt>
            <dd>{rev.user_email ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Tarih</dt>
            <dd>{formatDate(rev.created_at)}</dd>
          </div>
        </dl>
        {restorable && hasPermission(user.role, "content.edit") ? (
          <div className="mt-4">
            <RestoreRevisionButton type={adapter.type} revisionId={rev.id} editHref={editHref} />
          </div>
        ) : null}
      </Card>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Önceki içerik">
          <JsonBlock value={rev.previous} />
        </Card>
        <Card title="Yeni içerik">
          <JsonBlock value={rev.data} />
        </Card>
      </div>
    </>
  );
}
