import Link from "next/link";
import { notFound } from "next/navigation";
import { buildInventory, getLatestCompletedResults, getSitemapEntries, LOCALES, type AdminLocale } from "@/lib/admin/data";
import { requirePermission } from "@/lib/admin/server";
import { SITE_ORIGIN, isSafeInternalPath } from "@/lib/admin/validation";
import { Badge, Card, Notice, PageHeader } from "../../../_components/ui";

const LOCALE_NAMES: Record<AdminLocale, string> = { tr: "Türkçe (kaynak)", en: "English", ru: "Русский", ar: "العربية" };

function lengthTone(length: number, min: number, max: number) {
  return length === 0 ? "red" : length < min || length > max ? "amber" : "green";
}

export default async function ContentItemPage({ searchParams }: { searchParams: Promise<{ path?: string; locale?: string }> }) {
  await requirePermission("content.view");
  const sp = await searchParams;
  const path = sp.path ?? "";
  if (!isSafeInternalPath(path)) notFound();

  const [entries, scan] = await Promise.all([getSitemapEntries(), getLatestCompletedResults()]);
  const item = entries ? buildInventory(entries).find((i) => i.trPath === path) : undefined;
  if (!item) notFound();

  const locale = (LOCALES as readonly string[]).includes(sp.locale ?? "") ? (sp.locale as AdminLocale) : "tr";
  const localePath = item.locales[locale];
  const row = localePath ? scan?.rows.find((r) => r.url === localePath) : undefined;
  const title = row?.title ?? "";
  const description = row?.description ?? "";

  return (
    <>
      <PageHeader title={item.trPath} description={`${item.type} · TR kaynak sayfa ve dil sürümleri`} />
      <nav aria-label="Dil sekmeleri" className="mb-4 flex flex-wrap gap-2">
        {LOCALES.map((l) => (
          <Link
            key={l}
            href={`/admin/content/item?path=${encodeURIComponent(path)}&locale=${l}`}
            aria-current={l === locale ? "page" : undefined}
            className={`rounded-lg border px-3 py-1.5 text-sm ${l === locale ? "border-[#154764] bg-[#154764] text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {l.toUpperCase()} {item.locales[l] ? "✓" : "!"}
          </Link>
        ))}
      </nav>

      {!localePath ? (
        <Notice tone="amber">
          {LOCALE_NAMES[locale]} sürümü yok (sitemap&apos;te hreflang eşleşmesi bulunmadı). Yeni dil URL&apos;si yalnız merkezi route haritasına (app/i18n/routes.ts) eklenerek
          oluşturulmalı; panel URL üretmez.
        </Notice>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
          <Card title={`SEO · ${LOCALE_NAMES[locale]}`}>
            {!row ? <Notice tone="amber">Bu URL son taramada yok. Site Sağlığı taramasını çalıştırın.</Notice> : null}
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="flex items-center gap-2 font-medium text-slate-700">
                  SEO title <Badge tone={lengthTone(title.length, 30, 65)}>{title.length} karakter</Badge>
                </dt>
                <dd className="mt-1 text-slate-900">{title || "—"}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-medium text-slate-700">
                  Meta description <Badge tone={lengthTone(description.length, 120, 170)}>{description.length} karakter</Badge>
                </dt>
                <dd className="mt-1 text-slate-900">{description || "—"}</dd>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-slate-700">Slug / URL</dt>
                  <dd className="mt-1 break-all font-mono text-xs">{localePath}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Canonical</dt>
                  <dd className="mt-1 break-all font-mono text-xs">{row?.canonical ?? "—"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Robots</dt>
                  <dd className="mt-1">{row?.robots ?? "index, follow (varsayılan)"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">H1</dt>
                  <dd className="mt-1">
                    {row?.h1 ?? "—"} {row ? <Badge tone={row.h1_count === 1 ? "green" : "red"}>{row.h1_count} adet</Badge> : null}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">OG title / description</dt>
                  <dd className="mt-1">{row?.og_title ?? "—"}</dd>
                  <dd className="mt-1 text-xs text-slate-500">{row?.og_description ?? ""}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">OG image</dt>
                  <dd className="mt-1 break-all font-mono text-xs">{row?.og_image ?? "—"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Schema türleri</dt>
                  <dd className="mt-1">{row?.schema_types || "—"}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Alt metni eksik görsel</dt>
                  <dd className="mt-1">{row?.missing_alt ?? "—"}</dd>
                </div>
              </div>
            </dl>
          </Card>

          <div className="space-y-6">
            <Card title="Arama sonucu önizlemesi">
              <p className="mb-2 text-xs text-slate-500">Yaklaşık görünüm; arama motoru başlık ve açıklamayı farklı gösterebilir. Sıralama tahmini değildir.</p>
              <div className="rounded-lg border border-slate-200 p-3" dir={locale === "ar" ? "rtl" : "ltr"}>
                <p className="truncate text-xs text-slate-600">{`${SITE_ORIGIN.replace("https://", "")}${localePath}`}</p>
                <p className="mt-0.5 line-clamp-1 text-lg text-[#1a0dab]">{title || "Başlık yok"}</p>
                <p className="mt-0.5 line-clamp-2 text-sm text-slate-700">{description || "Açıklama yok"}</p>
              </div>
            </Card>
            <Card title="Hreflang önizlemesi">
              <ul className="space-y-1 font-mono text-xs">
                {Object.entries(row?.hreflang ?? {}).length === 0 ? <li className="font-sans text-sm text-slate-500">Taramada hreflang bulunmadı.</li> : null}
                {Object.entries(row?.hreflang ?? {}).map(([lang, target]) => (
                  <li key={lang} className="break-all">
                    <span className="inline-block w-20 font-semibold">{lang}</span> {target}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
