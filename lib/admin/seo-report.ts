import { SITE_ORIGIN } from "./validation";

export type ScanRow = {
  url: string;
  status: number | null;
  title: string | null;
  description: string | null;
  h1_count: number | null;
  canonical: string | null;
  robots: string | null;
  hreflang: Record<string, string> | null;
  missing_alt: number | null;
  in_sitemap: boolean;
  links: string[] | null;
};

export const ISSUE_LABELS = {
  brokenLinks: "Kırık iç bağlantı",
  linksToRedirect: "Yönlendirmeye giden iç bağlantı",
  missingTitle: "Eksik title",
  duplicateTitle: "Tekrarlı title",
  missingDescription: "Eksik meta description",
  duplicateDescription: "Tekrarlı meta description",
  noH1: "H1 yok",
  multipleH1: "Birden fazla H1",
  missingAlt: "Alt metni eksik görsel",
  canonicalMismatch: "Canonical uyuşmazlığı",
  hreflangMismatch: "Hreflang karşılıklılık hatası",
  sitemapNon200: "Sitemap'te 200 dönmeyen URL",
  noindexInSitemap: "Noindex ama sitemap'te",
  indexableNotInSitemap: "İndekslenebilir ama sitemap'te değil",
  orphan: "Hiçbir sayfadan bağlantı almayan (yetim) sayfa",
} as const;

export type IssueKey = keyof typeof ISSUE_LABELS;
export type IssueItem = { url: string; detail?: string };
export type SeoReport = Record<IssueKey, IssueItem[]>;

const isNoindex = (robots: string | null) => /noindex/i.test(robots ?? "");
const canonicalPath = (canonical: string) => {
  try {
    const url = new URL(canonical);
    if (url.origin !== SITE_ORIGIN) return null;
    const p = decodeURI(url.pathname);
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  } catch {
    return null;
  }
};

export function buildSeoReport(rows: ScanRow[]): SeoReport {
  const report = Object.fromEntries(Object.keys(ISSUE_LABELS).map((k) => [k, []])) as unknown as SeoReport;
  const byUrl = new Map(rows.map((r) => [r.url, r]));
  const pages = rows.filter((r) => r.status === 200 && r.title !== null || r.status === 200 && r.h1_count !== null);
  const indexable = pages.filter((r) => !isNoindex(r.robots));

  // Tekrar kontrolü yalnız indekslenebilir ve kendine canonical veren sayfalarda yapılır: başka sayfaya canonical
  // veren (ör. eşdeğer içerik) veya noindex sayfa arama sonucunda ayrı yarışmaz.
  const selfCanonical = indexable.filter((r) => r.canonical && canonicalPath(r.canonical) === r.url);
  const groupDuplicates = (key: "title" | "description", issue: IssueKey) => {
    const groups = new Map<string, string[]>();
    for (const r of selfCanonical) {
      const value = r[key]?.trim();
      if (value) groups.set(value, [...(groups.get(value) ?? []), r.url]);
    }
    for (const [value, urls] of groups) if (urls.length > 1) for (const url of urls) report[issue].push({ url, detail: `${urls.length} sayfada: "${value.slice(0, 80)}"` });
  };

  for (const r of rows) {
    if (r.in_sitemap && r.status !== 200) report.sitemapNon200.push({ url: r.url, detail: `HTTP ${r.status ?? "hata"}` });
  }

  for (const r of pages) {
    if (!r.title?.trim()) report.missingTitle.push({ url: r.url });
    if (!r.description?.trim()) report.missingDescription.push({ url: r.url });
    if (r.h1_count === 0) report.noH1.push({ url: r.url });
    if ((r.h1_count ?? 0) > 1) report.multipleH1.push({ url: r.url, detail: `${r.h1_count} adet` });
    if ((r.missing_alt ?? 0) > 0) report.missingAlt.push({ url: r.url, detail: `${r.missing_alt} görsel` });
    if (r.in_sitemap && isNoindex(r.robots)) report.noindexInSitemap.push({ url: r.url });
    if (!r.in_sitemap && !isNoindex(r.robots)) report.indexableNotInSitemap.push({ url: r.url });

    if (!isNoindex(r.robots)) {
      const cp = r.canonical ? canonicalPath(r.canonical) : null;
      if (!r.canonical) report.canonicalMismatch.push({ url: r.url, detail: "canonical yok" });
      else if (cp !== r.url) report.canonicalMismatch.push({ url: r.url, detail: `canonical: ${r.canonical}` });
    }

    const alternates = r.hreflang ?? {};
    const targets = Object.entries(alternates);
    if (targets.length > 0) {
      if (!Object.values(alternates).includes(r.url)) report.hreflangMismatch.push({ url: r.url, detail: "kendine işaret eden hreflang yok" });
      for (const [lang, target] of targets) {
        if (target === r.url || lang === "x-default") continue;
        const other = byUrl.get(target);
        if (other?.hreflang && !Object.values(other.hreflang).includes(r.url)) {
          report.hreflangMismatch.push({ url: r.url, detail: `${lang} → ${target} geri bağlantı vermiyor` });
        }
      }
    }

    for (const link of r.links ?? []) {
      const target = byUrl.get(link);
      if (!target) continue;
      if (target.status === null || target.status >= 400) report.brokenLinks.push({ url: r.url, detail: `${link} (HTTP ${target.status ?? "hata"})` });
      else if (target.status >= 300) report.linksToRedirect.push({ url: r.url, detail: `${link} (HTTP ${target.status})` });
    }
  }

  groupDuplicates("title", "duplicateTitle");
  groupDuplicates("description", "duplicateDescription");

  const linked = new Set(pages.flatMap((r) => (r.links ?? []).filter((l) => l !== r.url)));
  for (const r of indexable) if (r.in_sitemap && r.url !== "/" && !linked.has(r.url)) report.orphan.push({ url: r.url });

  return report;
}
