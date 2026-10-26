import fs from "node:fs";
import path from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import type { Db } from "@/lib/admin/db-core";
import { STATIC_BLOG_FOLDERS } from "@/lib/cms/adapters/blog-article";
import { contentAdapters, getAdapter } from "@/lib/cms/registry";
import { validateShape } from "@/lib/cms/shape";
import {
  CmsValidationError,
  getEffective,
  listRevisions,
  markTranslationSynced,
  publish,
  restoreRevision,
  revertToDefault,
  saveDraft,
  translationStatuses,
} from "@/lib/cms/store";
import { createTestDb } from "./helpers";

let db: Db;
beforeAll(async () => {
  db = await createTestDb();
});

const sector = getAdapter("sectorDetail")!;
const ID = "sectorLiquidNpk";

describe("adaptörler", () => {
  it("kapsam: 21 sektör detayı, 49 ürün, 9 kategori, blog yazıları", () => {
    const counts = Object.fromEntries(contentAdapters.map((a) => [a.type, a.list().length]));
    expect(counts.sectorDetail).toBe(21);
    expect(counts.machineProduct).toBe(49);
    expect(counts.machineCategory).toBe(9);
    // 152 topical kayıttan özel şablon veya statik klasörle gösterilen 52 kayıt hariç.
    expect(counts.blogArticle).toBe(100);
  });

  it("her belgenin kod içeriği kendi yapı kurallarından geçer (tüm diller ve ortak alanlar)", () => {
    for (const adapter of contentAdapters) {
      for (const doc of adapter.list()) {
        for (const locale of adapter.locales(doc.id)) {
          const def = adapter.getDefault(doc.id, locale);
          expect(validateShape(def, def, adapter.rules), `${adapter.type}/${doc.id}/${locale}`).toEqual([]);
        }
        if (adapter.shared) {
          const def = adapter.shared.getDefault(doc.id);
          expect(validateShape(def, def, adapter.shared.rules)).toEqual([]);
        }
      }
    }
  });

  it("statik blog klasör listesi dosya sistemiyle aynı", () => {
    const dir = path.resolve("app/(tr)/kutuphane/blog");
    const folders = fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith("[")).map((e) => e.name).sort();
    expect([...STATIC_BLOG_FOLDERS].sort()).toEqual(folders);
  });
});

describe("yapı doğrulayıcı", () => {
  const def = sector.getDefault(ID, "tr") as Record<string, unknown>;
  it("HTML, fazladan alan ve sabit liste uzunluğu ihlali reddedilir", () => {
    expect(validateShape(def as never, { ...def, h1: "<script>alert(1)</script>" }, sector.rules).length).toBeGreaterThan(0);
    expect(validateShape(def as never, { ...def, extra: "x" }, sector.rules).length).toBeGreaterThan(0);
    expect(validateShape(def as never, { ...def, intro: ["tek paragraf"] }, sector.rules).length).toBeGreaterThan(0);
    expect(validateShape(def as never, { ...def, h1: "" }, sector.rules).length).toBeGreaterThan(0);
  });
  it("geçerli düzenleme kabul edilir, eklenip çıkarılabilen liste sınırları uygulanır", () => {
    const faqs = def.faqs as unknown[];
    expect(validateShape(def as never, { ...def, h1: "Yeni başlık", faqs: [...faqs, faqs[0]] }, sector.rules)).toEqual([]);
    expect(validateShape(def as never, { ...def, faqs: faqs.slice(0, 2) }, sector.rules).length).toBeGreaterThan(0);
  });
});

describe("taslak / yayın / çeviri durumu / revizyon", () => {
  it("taslak yayına alınmadan public içerik değişmez; kilitli alan istemciden değiştirilemez", async () => {
    const def = sector.getDefault(ID, "tr") as Record<string, unknown>;
    await saveDraft(db, { adapter: sector, id: ID, locale: "tr", value: { ...def, h1: "Taslak başlık", label: "Hack" }, user: "editor@test" });
    const eff = await getEffective(db, sector, ID, "tr");
    expect(eff.published).toBeNull();
    expect((eff.draft as Record<string, unknown>).h1).toBe("Taslak başlık");
    expect((eff.draft as Record<string, unknown>).label).toBe(def.label);
  });

  it("geçersiz içerik kaydedilmez", async () => {
    const def = sector.getDefault(ID, "en") as Record<string, unknown>;
    await expect(saveDraft(db, { adapter: sector, id: ID, locale: "en", value: { ...def, lead: "<b>x</b>" }, user: "editor@test" })).rejects.toBeInstanceOf(CmsValidationError);
  });

  it("başlangıçta çeviriler COMPLETE; TR yayınlanınca EN/RU/AR OUTDATED olur ve silinmez", async () => {
    expect(await translationStatuses(db, sector, ID)).toEqual({ tr: "COMPLETE", en: "COMPLETE", ru: "COMPLETE", ar: "COMPLETE" });
    await publish(db, { adapter: sector, id: ID, locale: "tr", user: "admin@test" });
    expect(await translationStatuses(db, sector, ID)).toEqual({ tr: "COMPLETE", en: "OUTDATED", ru: "OUTDATED", ar: "OUTDATED" });
    const en = await getEffective(db, sector, ID, "en");
    expect(en.effective).toEqual(sector.getDefault(ID, "en"));
  });

  it("EN çevirisi güncellenip yayınlanınca COMPLETE; 'güncel' işaretleme de eşleştirir", async () => {
    const enDef = sector.getDefault(ID, "en") as Record<string, unknown>;
    await saveDraft(db, { adapter: sector, id: ID, locale: "en", value: { ...enDef, h1: "Updated title" }, user: "editor@test" });
    await publish(db, { adapter: sector, id: ID, locale: "en", user: "admin@test" });
    await markTranslationSynced(db, { adapter: sector, id: ID, locale: "ru", user: "admin@test" });
    expect(await translationStatuses(db, sector, ID)).toEqual({ tr: "COMPLETE", en: "COMPLETE", ru: "COMPLETE", ar: "OUTDATED" });
  });

  it("blog yazısının EN/RU/AR sürümü MISSING görünür", async () => {
    const blog = getAdapter("blogArticle")!;
    const id = blog.list()[0].id;
    expect(await translationStatuses(db, blog, id)).toEqual({ tr: "COMPLETE", en: "MISSING", ru: "MISSING", ar: "MISSING" });
  });

  it("geri yükleme yeni revizyon üretir, geçmişi silmez", async () => {
    const before = await listRevisions(db, sector, ID, "tr");
    const publishRev = before.find((r) => r.action === "publish")!;
    const def = sector.getDefault(ID, "tr") as Record<string, unknown>;
    await saveDraft(db, { adapter: sector, id: ID, locale: "tr", value: { ...def, h1: "İkinci sürüm" }, user: "editor@test" });
    await publish(db, { adapter: sector, id: ID, locale: "tr", user: "admin@test" });
    await restoreRevision(db, { adapter: sector, revisionId: publishRev.id, user: "admin@test" });
    const after = await listRevisions(db, sector, ID, "tr");
    expect(after.length).toBe(before.length + 3);
    expect(after[0].action).toBe("restore");
    expect(after.map((r) => r.id)).toEqual(expect.arrayContaining(before.map((r) => r.id)));
    const eff = await getEffective(db, sector, ID, "tr");
    expect((eff.draft as Record<string, unknown>).h1).toBe("Taslak başlık");
    expect((eff.published as Record<string, unknown>).h1).toBe("İkinci sürüm");
    expect(after[0].number).toBe(after.length);
  });

  it("koda geri dönüş yayındaki panel içeriğini kaldırır", async () => {
    await revertToDefault(db, { adapter: sector, id: ID, locale: "tr", user: "admin@test" });
    expect((await getEffective(db, sector, ID, "tr")).published).toBeNull();
  });

  it("ortak görsel alanı yalnız kayıtlı görsel kabul eder", async () => {
    const def = sector.shared!.getDefault(ID) as { images: string[] };
    const exists = (src: string) => src.startsWith("/images/");
    await expect(saveDraft(db, { adapter: sector, id: ID, locale: "shared", value: { images: ["https://evil.example/x.jpg", def.images[1]] }, user: "e" }, exists)).rejects.toBeInstanceOf(CmsValidationError);
    await expect(saveDraft(db, { adapter: sector, id: ID, locale: "shared", value: { images: [def.images[1], def.images[0]] }, user: "e" }, exists)).resolves.toBeTruthy();
  });
});
