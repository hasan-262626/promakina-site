import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  applyDryerOverrides,
  buildDryerBase,
  dryerDocumentTitle,
  dryerEditableFrom,
  dryerSharedFrom,
  type DryerEditable,
} from "@/app/i18n/content/dryer-page/editable";
import { pathFor } from "@/app/i18n/routes";
import type { Db } from "@/lib/admin/db-core";
import { DRYER_DOC_ID, rotaryDryerAdapter } from "@/lib/cms/adapters/rotary-dryer";
import { getAdapter } from "@/lib/cms/registry";
import { resolvePublished, toJson, validateShape } from "@/lib/cms/shape";
import { CmsValidationError, publish, revertToDefault, saveDraft } from "@/lib/cms/store";

/**
 * Kurutma Tamburu CMS adaptörü: panel kaydı yokken sayfa koddakiyle birebir aynı; yayınlanan metin yalnız kendi
 * dilinde görünür; bağlantılar/şablon alanları panelden değişmez; bozuk veya eski kayıt sayfayı bozmaz.
 */
const LOCALES = ["tr", "en", "ru", "ar"] as const;
const original = { db: process.env.DATABASE_URL };
let db: Db;
let loadDryerPage: (locale: (typeof LOCALES)[number]) => Promise<Awaited<ReturnType<typeof import("@/lib/cms/public-content").loadDryerPage>>>;

beforeAll(async () => {
  process.env.DATABASE_URL = "pglite:";
  globalThis.__promakinaAdminDb = undefined;
  db = await (await import("@/lib/admin/db-core")).getDb();
  loadDryerPage = (await import("@/lib/cms/public-content")).loadDryerPage;
});
afterAll(() => {
  process.env.DATABASE_URL = original.db;
  globalThis.__promakinaAdminDb = undefined;
});

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));
const target = (locale: (typeof LOCALES)[number] | "shared") => ({ adapter: rotaryDryerAdapter, id: DRYER_DOC_ID, locale, user: "test@promakina.com.tr" });

describe("kurutma tamburu içerik modeli", () => {
  it("panel kaydı yokken uygulanan içerik koddaki içerikle birebir aynıdır (4 dil)", () => {
    for (const locale of LOCALES) {
      const base = buildDryerBase(locale);
      const applied = applyDryerOverrides(base.content, dryerEditableFrom(base), dryerSharedFrom(base.content));
      expect(toJson(applied), locale).toEqual(toJson(base.content));
    }
  });

  it("adaptör kayıtlı; tek belge, dört dil, yollar route haritasıyla aynı", () => {
    expect(getAdapter("dryerPage")).toBe(rotaryDryerAdapter);
    expect(rotaryDryerAdapter.list()).toEqual([{ id: DRYER_DOC_ID, title: buildDryerBase("tr").h1 }]);
    expect(rotaryDryerAdapter.locales(DRYER_DOC_ID)).toEqual([...LOCALES]);
    for (const locale of LOCALES) expect(rotaryDryerAdapter.paths(DRYER_DOC_ID)[locale]).toBe(pathFor("rotaryDryer", locale));
  });

  it("her dilin varsayılan metni o dildedir (çeviri eksikliği başka dile düşmez)", () => {
    const h1 = Object.fromEntries(LOCALES.map((l) => [l, (rotaryDryerAdapter.getDefault(DRYER_DOC_ID, l) as DryerEditable).h1]));
    expect(new Set(Object.values(h1)).size).toBe(4);
    expect(h1.ar).toMatch(/[؀-ۿ]/);
    expect(h1.ru).toMatch(/[Ѐ-ӿ]/);
  });

  it("başlıkta marka iki kez yazılmaz (markayla biten başlık mutlak kullanılır)", () => {
    expect(dryerDocumentTitle("Kurutma Tamburu İmalatı | PRO MAKİNA")).toEqual({ absolute: "Kurutma Tamburu İmalatı | PRO MAKİNA" });
    expect(dryerDocumentTitle("Rotary Dryer | Pro Makina")).toEqual({ absolute: "Rotary Dryer | Pro Makina" });
    expect(dryerDocumentTitle("Rotary Dryer Manufacturer")).toBe("Rotary Dryer Manufacturer");
  });

  it("yayındaki kayıt güncel şablonla birleştirilir; uymayan kayıt yok sayılır", () => {
    const def = rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "tr");
    const withoutNewField = clone(def) as Record<string, unknown>;
    delete withoutNewField.productCategory;
    expect(resolvePublished(def, withoutNewField, rotaryDryerAdapter.rules)).toEqual(def);
    const broken = clone(def) as DryerEditable;
    broken.applications.items.pop();
    expect(resolvePublished(def, broken, rotaryDryerAdapter.rules)).toBeNull();
    expect(resolvePublished(def, null, rotaryDryerAdapter.rules)).toBeNull();
  });
});

describe("kurutma tamburu panel yayını → public içerik", () => {
  it("kayıt yokken yükleyici kod içeriğini döner", async () => {
    for (const locale of LOCALES) {
      const page = await loadDryerPage(locale);
      const base = buildDryerBase(locale);
      expect(page.meta).toEqual(base.meta);
      expect(page.h1).toBe(base.h1);
      expect(toJson(page.content)).toEqual(toJson(base.content));
    }
  });

  it("taslak public içerikte görünmez; yayınlanınca title, H1, SSS ve görsel uygulanır", async () => {
    const tr = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "tr")) as DryerEditable;
    tr.meta.title = "Kurutma Tamburu İmalatı | Panel Testi | PRO MAKİNA";
    tr.h1 = "Kurutma Tamburu – Panel Test Başlığı";
    tr.faq.items[0].answer = "Panelden güncellenen cevap.";
    tr.faq.items.push({ question: "Panelden eklenen soru?", answer: "Panelden eklenen cevap." });
    await saveDraft(db, { ...target("tr"), value: tr });
    expect((await loadDryerPage("tr")).meta.title).toBe(buildDryerBase("tr").meta.title);

    await publish(db, target("tr"));
    const page = await loadDryerPage("tr");
    expect(page.meta.title).toBe(tr.meta.title);
    expect(page.h1).toBe(tr.h1);
    expect(page.content.faq.items).toHaveLength(tr.faq.items.length);
    expect(page.content.faq.items[0].answer).toBe("Panelden güncellenen cevap.");

    // Diğer diller TR yayınından etkilenmez.
    expect((await loadDryerPage("en")).h1).toBe(buildDryerBase("en").h1);

    const shared = clone(rotaryDryerAdapter.shared!.getDefault(DRYER_DOC_ID)) as { mainImage: string; gallery: string[] };
    shared.mainImage = shared.gallery[1];
    await saveDraft(db, { ...target("shared"), value: shared }, () => true);
    await publish(db, target("shared"), () => true);
    const withImage = await loadDryerPage("ar");
    expect(withImage.mainImage).toBe(shared.mainImage);
    expect(withImage.content.overview.image.src).toBe(shared.mainImage);
    expect(withImage.schemaImages[0]).toBe(shared.mainImage);
  });

  it("bağlantılar ve şablon alanları panel kaydıyla değiştirilemez", async () => {
    const tr = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "tr")) as Record<string, unknown>;
    await expect(saveDraft(db, { ...target("tr"), value: { ...tr, links: [{ href: "https://evil.example" }] } })).rejects.toBeInstanceOf(CmsValidationError);
    await expect(
      saveDraft(db, { ...target("tr"), value: { ...tr, h1: "<script>alert(1)</script>" } }),
    ).rejects.toBeInstanceOf(CmsValidationError);
    const base = buildDryerBase("tr");
    const page = await loadDryerPage("tr");
    expect(page.content.applications.items.map((i) => i.link.href)).toEqual(base.content.applications.items.map((i) => i.link.href));
    expect(page.content.cta.whatsapp.href).toBe(base.content.cta.whatsapp.href);
    expect(page.content.breadcrumb).toEqual(base.content.breadcrumb);
  });

  it("veritabanında şablona uymayan kayıt sayfayı bozmaz (kod içeriği kullanılır)", async () => {
    const def = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "ru")) as DryerEditable;
    def.gallery.items = def.gallery.items.slice(0, 2);
    await db.query(
      "insert into content_documents (type, doc_id, locale, published, published_at) values ('dryerPage', $1, 'ru', $2, now()) on conflict (type, doc_id, locale) do update set published = excluded.published",
      [DRYER_DOC_ID, JSON.stringify(def)],
    );
    const page = await loadDryerPage("ru");
    const base = buildDryerBase("ru");
    expect(page.h1).toBe(base.h1);
    expect(page.content.gallery?.images.map((i) => i.caption)).toEqual(base.content.gallery?.images.map((i) => i.caption));
  });

  it("koda dön: yayın kaldırılınca kod içeriğine dönülür", async () => {
    await revertToDefault(db, target("tr"));
    expect((await loadDryerPage("tr")).meta.title).toBe(buildDryerBase("tr").meta.title);
  });

  it("varsayılan içerik yapı kurallarından geçer (dil ve ortak alanlar)", () => {
    for (const locale of LOCALES) {
      const def = rotaryDryerAdapter.getDefault(DRYER_DOC_ID, locale);
      expect(validateShape(def, def, rotaryDryerAdapter.rules), locale).toEqual([]);
    }
    const shared = rotaryDryerAdapter.shared!.getDefault(DRYER_DOC_ID);
    expect(validateShape(shared, shared, rotaryDryerAdapter.shared!.rules)).toEqual([]);
  });
});
