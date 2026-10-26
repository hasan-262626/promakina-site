import { describe, expect, it } from "vitest";
import { extractPageData, parseSitemap } from "@/lib/admin/site-scan";
import { buildSeoReport, type ScanRow } from "@/lib/admin/seo-report";

const html = `<!DOCTYPE html><html lang="tr"><head><title>Kurutma Tamburu | Pro Makina</title>
<meta name="description" content="Açıklama &amp; detay"/><link rel="canonical" href="https://www.promakina.com.tr/a"/>
<link rel="alternate" hrefLang="tr" href="https://www.promakina.com.tr/a"/><link rel="alternate" hrefLang="en" href="https://www.promakina.com.tr/en/a"/>
<meta property="og:title" content="OG"/></head><body><main><h1>Başlık</h1><img src="/x.jpg" alt="x"/><img src="/y.jpg"/>
<img src="/z.jpg" alt="" aria-hidden="true"/><a href="/b#bolum">b</a><a href="https://evil.com/x">dış</a><a href="/admin">gizli</a>
<script type="application/ld+json">{"@type":"BreadcrumbList"}</script></main></body></html>`;

describe("HTML ve sitemap ayrıştırma", () => {
  it("SEO alanlarını çıkarır", () => {
    const d = extractPageData(html);
    expect(d.title).toBe("Kurutma Tamburu | Pro Makina");
    expect(d.description).toBe("Açıklama & detay");
    expect(d.h1s).toEqual(["Başlık"]);
    expect(d.canonical).toBe("https://www.promakina.com.tr/a");
    expect(d.hreflang).toEqual({ tr: "/a", en: "/en/a" });
    expect(d.missingAlt).toBe(1);
    expect(d.links).toEqual(["/b"]);
    expect(d.schemaTypes).toEqual(["BreadcrumbList"]);
    expect(d.lang).toBe("tr");
  });

  it("sitemap girişlerini ve alternatifleri okur", () => {
    const xml = `<urlset><url><loc>https://www.promakina.com.tr/a</loc><xhtml:link rel="alternate" hreflang="en" href="https://www.promakina.com.tr/en/a"/></url></urlset>`;
    expect(parseSitemap(xml)).toEqual([{ path: "/a", alternates: { en: "/en/a" } }]);
  });
});

const row = (url: string, extra: Partial<ScanRow> = {}): ScanRow => ({
  url,
  status: 200,
  title: `T ${url}`,
  description: `D ${url}`,
  h1_count: 1,
  canonical: `https://www.promakina.com.tr${url}`,
  robots: null,
  hreflang: null,
  missing_alt: 0,
  in_sitemap: true,
  links: [],
  ...extra,
});

describe("SEO raporu", () => {
  it("sorunları sınıflandırır", () => {
    const report = buildSeoReport([
      row("/", { links: ["/a", "/kirik", "/eski"] }),
      row("/a", { title: "Aynı", h1_count: 2, hreflang: { tr: "/a", en: "/en/a" } }),
      row("/en/a", { title: "Aynı", hreflang: { en: "/en/a" } }),
      row("/kirik", { status: 404, in_sitemap: false, title: null, h1_count: null }),
      row("/eski", { status: 301, in_sitemap: false, title: null, h1_count: null }),
      row("/gizli", { robots: "noindex, nofollow" }),
      row("/kanon", { canonical: "https://www.promakina.com.tr/baska" }),
    ]);
    expect(report.brokenLinks.map((i) => i.detail)).toEqual(["/kirik (HTTP 404)"]);
    expect(report.linksToRedirect).toHaveLength(1);
    expect(report.duplicateTitle.map((i) => i.url).sort()).toEqual(["/a", "/en/a"]);
    expect(report.multipleH1.map((i) => i.url)).toEqual(["/a"]);
    expect(report.noindexInSitemap.map((i) => i.url)).toEqual(["/gizli"]);
    expect(report.canonicalMismatch.map((i) => i.url)).toEqual(["/kanon"]);
    expect(report.hreflangMismatch.some((i) => i.url === "/a")).toBe(true);
    expect(report.orphan.map((i) => i.url)).toContain("/kanon");
  });
});

describe("tekrarlı title/description", () => {
  it("yalnız indekslenebilir ve kendine canonical veren sayfalar karşılaştırılır", () => {
    const report = buildSeoReport([
      row("/", { links: ["/a", "/b", "/c", "/d"] }),
      row("/a", { title: "Aynı", description: "Aynı açıklama" }),
      row("/b", { title: "Aynı", description: "Aynı açıklama" }),
      // Başka sayfaya canonical veren eşdeğer sayfa ve noindex sayfa tekrar sayılmaz.
      row("/c", { title: "Aynı", description: "Aynı açıklama", canonical: "https://www.promakina.com.tr/a" }),
      row("/d", { title: "Aynı", description: "Aynı açıklama", robots: "noindex, follow", in_sitemap: false }),
    ]);
    expect(report.duplicateTitle.map((i) => i.url).sort()).toEqual(["/a", "/b"]);
    expect(report.duplicateDescription.map((i) => i.url).sort()).toEqual(["/a", "/b"]);
  });
});
