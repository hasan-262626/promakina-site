import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { drumProductPages } from "./components/drum-product-data";
import { machineCategoryPages } from "./components/machine-group-data";
import { compostSystemDetailMap } from "./lib/compost-system-detail-data";
import { dryingSystemDetailMap } from "./lib/drying-system-detail-data";
import { drumSystemDetailMap } from "./lib/drum-system-detail-data";
import { fertilizerSystemDetailMap } from "./lib/fertilizer-system-detail-data";
import { liquidFertilizerDetailMap } from "./lib/liquid-fertilizer-detail-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
} from "./lib/machine-route-utils";
import { topicalBlogDynamicSlugs } from "./lib/topical-authority-blog-data";
import { projectPages } from "./lib/project-pages-data";
import { services } from "./data";

const siteUrl = "https://www.promakina.com.tr";

// Deploy tarihinde manuel güncellenir; her istekte değişen tarih Google'a
// yanlış güncellik sinyali verdiği için sabit tutulur.
const lastModified = new Date("2026-07-06");

// Fiziksel sayfası olsa bile 301 ile başka adrese yönlendirilen eski rotalar.
const redirectedRoutes = new Set([
  "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
  "/sektorler/atik-su-camuru-ve-aritma-cozumleri/son-urun-yonetimi",
  "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
  "/sektorler/enerji-ve-biyogaz-sistemleri/besleme-ve-transfer-hatlari",
  "/sektorler/geri-donusum-ve-atik-yonetimi/son-urun-hazirlama-cozumleri",
  "/sektorler/geri-donusum-ve-atik-yonetimi/shredder-sistemleri",
  "/sektorler/kompost-ve-organik-atik-tesisleri/hayvansal-ahir-atiklari",
  "/sektorler/kompost-ve-organik-atik-tesisleri/olgunlastirma-tamburlari",
  "/sektorler/kompost-ve-organik-atik-tesisleri/balik-atiklari",
  "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
  "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
  "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
  "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
  "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
  "/makinalar-ekipman/depolama-ve-besleme-sistemleri/surgulu-klapeler",
  "/kutuphane/blog/sivi-gubre-tesisi-nasil-kurulur",
]);

// İndekslenmesi istenmeyen sayfalar.
const excludedRoutes = new Set(["/tesekkurler", "/kutuphane/sss"]);

function collectStaticRoutes(dir: string, routePrefix: string, out: string[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  if (entries.some((entry) => entry.isFile() && entry.name === "page.tsx")) {
    out.push(routePrefix === "" ? "/" : routePrefix);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") || entry.name === "api") continue;
    collectStaticRoutes(
      path.join(dir, entry.name),
      `${routePrefix}/${entry.name}`,
      out,
    );
  }
}

function priorityFor(route: string) {
  if (route === "/") return 1;
  const depth = route.split("/").filter(Boolean).length;
  if (route.startsWith("/hizmetler") || route.startsWith("/sektorler")) {
    return depth === 1 ? 0.9 : 0.8;
  }
  if (route.startsWith("/makinalar-ekipman")) {
    return depth === 1 ? 0.9 : 0.8;
  }
  if (route.startsWith("/programlar")) return 0.7;
  if (route.startsWith("/kutuphane/blog")) return 0.7;
  if (route.startsWith("/kutuphane")) return 0.7;
  if (route.startsWith("/projeler")) return 0.8;
  if (route === "/iletisim") return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>();

  // 1) Fiziksel (statik) sayfalar
  const appDir = path.join(process.cwd(), "app");
  const staticRoutes: string[] = [];
  collectStaticRoutes(appDir, "", staticRoutes);
  for (const route of staticRoutes) {
    routes.add(route);
  }

  // 2) Makine ürün detay sayfaları (dinamik route üzerinden)
  for (const category of machineCategoryPages) {
    const categorySlug = getMachinePublicCategorySlug(category.slug);
    routes.add(`/makinalar-ekipman/${categorySlug}`);

    if (category.slug === "tambur-sistemleri") continue;

    for (const product of category.products) {
      routes.add(
        `/makinalar-ekipman/${categorySlug}/${getMachinePublicProductSlug(product.slug)}`,
      );
    }
  }

  for (const product of drumProductPages) {
    routes.add(`/makinalar-ekipman/tambur-sistemleri/${product.slug}`);
  }

  // 3) Projeler
  for (const project of projectPages) {
    routes.add(`/projeler/${project.slug}`);
  }

  // 3b) Hizmet sayfaları (dinamik [slug] üzerinden render edilir)
  for (const service of services) {
    routes.add(`/hizmetler/${service.slug}`);
  }

  // 4) Blog dinamik içerikleri
  const blogSlugs = new Set([
    ...topicalBlogDynamicSlugs,
    "granulator-tamburu-secimi",
    ...Object.keys(compostSystemDetailMap),
    ...Object.keys(drumSystemDetailMap),
    ...Object.keys(dryingSystemDetailMap),
    ...Object.keys(fertilizerSystemDetailMap),
    ...Object.keys(liquidFertilizerDetailMap),
  ]);
  for (const slug of blogSlugs) {
    routes.add(`/kutuphane/blog/${slug}`);
  }

  // 5) Yönlendirilen ve hariç tutulan rotaları çıkar
  for (const route of redirectedRoutes) {
    routes.delete(route);
  }
  for (const route of excludedRoutes) {
    routes.delete(route);
  }

  return [...routes]
    .sort()
    .map((route) => ({
      url: route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: priorityFor(route),
    }));
}
