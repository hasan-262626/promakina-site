import Link from "next/link";
import { notFound } from "next/navigation";
import { getLead } from "@/lib/admin/data";
import { hasPermission } from "@/lib/admin/permissions";
import { audit, requirePermission } from "@/lib/admin/server";
import { LEAD_STATUSES, uuidSchema } from "@/lib/admin/validation";
import { addLeadNoteAction, updateLeadStatusAction } from "../../../actions";
import { ActionForm } from "../../../_components/forms";
import { Card, PageHeader, formatBytes, formatDate, inputClass, secondaryButtonClass } from "../../../_components/ui";
import { LEAD_STATUS_LABELS } from "@/lib/admin/labels";

export const metadata = { title: "Talep detayı" };

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requirePermission("leads.view");
  const { id } = await params;
  if (!uuidSchema.safeParse(id).success) notFound();
  const data = await getLead(id);
  if (!data) notFound();
  const { lead, notes } = data;
  const canManage = hasPermission(user.role, "leads.manage");
  // Kişisel verinin kim tarafından görüntülendiği kayıt altına alınır.
  await audit(user, "lead.view", id);

  const fields: [string, string | null | undefined][] = [
    ["Tarih", formatDate(lead.created_at)],
    ["Ad Soyad", lead.full_name],
    ["Firma", lead.company],
    ["E-posta", lead.email],
    ["Telefon", lead.phone],
    ["Ülke", lead.country],
    ["Konu", lead.subject],
    ["İlgili ürün / makina", lead.product],
    ["İlgili sektör", lead.sector],
    ["Kaynak sayfa", lead.source_page],
    ["Form dili", lead.locale?.toUpperCase()],
    ["Ek", lead.attachment_name ? `${lead.attachment_name} (${formatBytes(lead.attachment_size ?? 0)}, e-postada)` : null],
  ];

  return (
    <>
      <PageHeader
        title={lead.company || lead.full_name || "Talep"}
        description={lead.kind === "rfq" ? "Teklif talebi" : "İletişim talebi"}
        actions={
          <Link className={secondaryButtonClass} href={`/admin/leads?kind=${lead.kind}`}>
            ← Listeye dön
          </Link>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-6">
          <Card title="Bilgiler">
            <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dt>
                  <dd className="mt-0.5 break-words text-slate-900">{value || "—"}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card title="Mesaj / proje açıklaması">
            {/* Düz metin olarak gösterilir; HTML yorumlanmaz (XSS koruması). */}
            <p className="whitespace-pre-wrap break-words text-sm text-slate-800">{lead.message || "—"}</p>
          </Card>
          {lead.details && Object.keys(lead.details).length ? (
            <Card title="Teknik alanlar">
              <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                {Object.entries(lead.details).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs text-slate-500">{k}</dt>
                    <dd className="break-words">{String(v)}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ) : null}
        </div>

        <div className="space-y-6">
          <Card title="Durum">
            {canManage ? (
              <form action={updateLeadStatusAction} className="flex gap-2">
                <input type="hidden" name="id" value={lead.id} />
                <label className="sr-only" htmlFor="status">
                  Durum
                </label>
                <select id="status" name="status" defaultValue={lead.status} className={inputClass}>
                  {LEAD_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {LEAD_STATUS_LABELS[s]}
                    </option>
                  ))}
                </select>
                <button className={secondaryButtonClass}>Kaydet</button>
              </form>
            ) : (
              <p className="text-sm">{LEAD_STATUS_LABELS[lead.status]}</p>
            )}
          </Card>
          <Card title="Yönetici notları">
            <p className="mb-3 text-xs text-slate-500">Notlar yalnız panel kullanıcılarına görünür; talep sahibine hiçbir şekilde iletilmez.</p>
            {canManage ? (
              <ActionForm action={addLeadNoteAction} submitLabel="Not ekle">
                <input type="hidden" name="id" value={lead.id} />
                <label htmlFor="note" className="sr-only">
                  Not
                </label>
                <textarea id="note" name="note" required maxLength={2000} rows={3} className={inputClass} />
              </ActionForm>
            ) : null}
            <ul className="mt-4 space-y-3">
              {notes.map((n) => (
                <li key={n.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
                  <p className="whitespace-pre-wrap break-words">{n.note}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {n.author_email} · {formatDate(n.created_at)}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
