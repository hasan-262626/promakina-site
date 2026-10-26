import Link from "next/link";
import { listLeads, PAGE_SIZE } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { LEAD_STATUS_LABELS } from "@/lib/admin/labels";
import { LEAD_STATUSES } from "@/lib/admin/validation";
import { Badge, Notice, PageHeader, Pagination, Table, Td, formatDate, inputClass, secondaryButtonClass } from "../../_components/ui";

export const metadata = { title: "Talepler" };

const tone = (s: string) => (s === "NEW" ? "blue" : s === "WON" ? "green" : s === "LOST" || s === "SPAM" ? "red" : "amber");
const isDate = (v?: string) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined);

type Search = { kind?: string; status?: string; q?: string; country?: string; product?: string; from?: string; to?: string; page?: string };

export default async function LeadsPage({ searchParams }: { searchParams: Promise<Search> }) {
  await requirePermission("leads.view");
  const sp = await searchParams;
  const kind = sp.kind === "rfq" ? "rfq" : "contact";
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);
  const status = (LEAD_STATUSES as readonly string[]).includes(sp.status ?? "") ? sp.status : undefined;
  const filter = {
    kind,
    status,
    q: sp.q?.slice(0, 100) || undefined,
    country: sp.country?.slice(0, 80) || undefined,
    product: sp.product?.slice(0, 100) || undefined,
    from: isDate(sp.from),
    to: isDate(sp.to),
    page,
  } as const;
  const { rows, total } = await listLeads(filter);
  const query = (p: number) =>
    `/admin/leads?${new URLSearchParams(Object.fromEntries(Object.entries({ ...filter, page: String(p) }).filter(([, v]) => v !== undefined && v !== "")) as Record<string, string>)}`;

  return (
    <>
      <PageHeader
        title={kind === "rfq" ? "Teklif talepleri (RFQ)" : "İletişim talepleri"}
        description="Sitedeki formlardan gelen kayıtlar. Ekler saklanmaz; yalnız dosya adı ve boyutu kaydedilir."
        actions={
          <>
            <Link className={secondaryButtonClass} href="/admin/leads?kind=contact">
              İletişim
            </Link>
            <Link className={secondaryButtonClass} href="/admin/leads?kind=rfq">
              Teklif talepleri
            </Link>
          </>
        }
      />
      <Notice>
        Kayıt alınan formlar: iletişim formu (<code>/api/contact</code>) ve dört dilli teklif formu (<code>/api/quote</code>). Sektör sayfalarındaki form WhatsApp/e-posta
        uygulamasını açtığı için sunucuya ulaşmaz ve burada görünmez.
      </Notice>
      <form className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-3 lg:grid-cols-6" role="search">
        <input type="hidden" name="kind" value={kind} />
        <label className="lg:col-span-2">
          <span className="mb-1 block text-xs font-medium text-slate-600">Ad, firma veya e-posta</span>
          <input name="q" defaultValue={sp.q} maxLength={100} className={inputClass} />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Durum</span>
          <select name="status" defaultValue={status ?? ""} className={inputClass}>
            <option value="">Tümü</option>
            {LEAD_STATUSES.map((s) => (
              <option key={s} value={s}>
                {LEAD_STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </label>
        {kind === "rfq" ? (
          <>
            <label>
              <span className="mb-1 block text-xs font-medium text-slate-600">Makina</span>
              <input name="product" defaultValue={sp.product} maxLength={100} className={inputClass} />
            </label>
            <label>
              <span className="mb-1 block text-xs font-medium text-slate-600">Ülke</span>
              <input name="country" defaultValue={sp.country} maxLength={80} className={inputClass} />
            </label>
          </>
        ) : null}
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Başlangıç</span>
          <input type="date" name="from" defaultValue={filter.from} className={inputClass} />
        </label>
        <label>
          <span className="mb-1 block text-xs font-medium text-slate-600">Bitiş</span>
          <input type="date" name="to" defaultValue={filter.to} className={inputClass} />
        </label>
        <div className="sm:col-span-3 lg:col-span-6">
          <button className={secondaryButtonClass}>Filtrele</button>
        </div>
      </form>

      <Table head={kind === "rfq" ? ["Tarih", "Firma", "Ad", "Ülke", "Makina", "Dil", "Durum"] : ["Tarih", "Firma", "Ad", "Konu", "Kaynak sayfa", "Durum"]} empty={rows.length === 0}>
        {rows.map((l) => (
          <tr key={l.id} className="hover:bg-slate-50">
            <Td>
              <Link className="font-medium text-[#154764] hover:underline" href={`/admin/leads/${l.id}`}>
                {formatDate(l.created_at)}
              </Link>
            </Td>
            <Td>{l.company ?? "—"}</Td>
            <Td>{l.full_name ?? "—"}</Td>
            {kind === "rfq" ? (
              <>
                <Td>{l.country ?? "—"}</Td>
                <Td>{l.product ?? "—"}</Td>
                <Td>{l.locale?.toUpperCase() ?? "—"}</Td>
              </>
            ) : (
              <>
                <Td>{l.subject ?? "—"}</Td>
                <Td className="font-mono text-xs">{l.source_page ?? "—"}</Td>
              </>
            )}
            <Td>
              <Badge tone={tone(l.status)}>{LEAD_STATUS_LABELS[l.status] ?? l.status}</Badge>
            </Td>
          </tr>
        ))}
      </Table>
      <Pagination page={page} total={total} pageSize={PAGE_SIZE} buildHref={query} />
    </>
  );
}
