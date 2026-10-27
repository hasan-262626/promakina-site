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

describe("kurutma tamburu teknik bölümü (82ee073 öncesi içerik)", () => {
  it("TR: parametre tablosu, 5 teknik alt bölüm ve tedarik kapsamı ürün verisiyle birebir aynı", async () => {
    const { drumProductPages } = await import("@/app/(tr)/components/drum-product-data");
    const product = drumProductPages.find((p) => p.slug === "kurutma-tamburu")!;
    const technical = buildDryerBase("tr").content.technical!;
    expect(technical.sections.map((s) => s.title)).toEqual([
      "Kapasite, Isı Dengesi ve Isıtma Seçenekleri",
      "Tambur Gövdesi, İç Kanatlar ve Malzeme Seçimi",
      "Ring, Gale Tekerleri ve Tahrik Sistemi",
      "Brülör, Fan, Siklon ve Filtre Sistemi",
      "Otomasyon ve Proses Kontrolü",
    ]);
    const source = product.detailSections!.filter((s) => s.paragraphs?.length);
    expect(technical.sections.map((s) => s.paragraphs)).toEqual(source.map((s) => s.paragraphs));
    // "Makine tipi" satırı H1 ile aynı olduğundan çıkarılır; diğer 11 satır aynen gelir.
    expect(technical.table.rows.map((r) => [r.name, r.value])).toEqual(product.technicalTable!.rows.filter(([n]) => n !== "Makine tipi"));
    expect(technical.scope.coreItems).toEqual(product.supplyScope!.coreItems);
    expect(technical.scope.optionalItems).toEqual(product.supplyScope!.optionalItems);
    // Uygulama alanı anlatımı ayrı bölümde olduğundan tekrarlanmaz.
    expect(technical.sections.some((s) => /Uygulama Alanları/.test(s.title))).toBe(false);
  });

  it("EN/RU/AR: TR ile aynı kapsam (11 satır, 5 bölüm + yalnız yabancı dillerde mineral bölümü, 7+8 kapsam kalemi), boş metin yok", () => {
    const tr = buildDryerBase("tr").content.technical!;
    const script = { en: /^[ -~’–—()/³]+$/, ru: /[Ѐ-ӿ]/, ar: /[؀-ۿ]/ };
    for (const locale of ["en", "ru", "ar"] as const) {
      const t = buildDryerBase(locale).content.technical!;
      expect(t.table.rows, locale).toHaveLength(tr.table.rows.length);
      // İlk bölümler TR'nin birebir karşılığıdır; sonuncusu uluslararası pazar için eklenen "mineral bazında kurutma" bölümüdür.
      expect(t.sections, locale).toHaveLength(tr.sections.length + 1);
      expect(t.sections.slice(0, tr.sections.length).map((x) => x.paragraphs.length), locale).toEqual(tr.sections.map((x) => x.paragraphs.length));
      expect(t.sections.at(-1)!.paragraphs, locale).toHaveLength(6);
      expect(t.scope.coreItems, locale).toHaveLength(tr.scope.coreItems.length);
      expect(t.scope.optionalItems, locale).toHaveLength(tr.scope.optionalItems.length);
      const strings: string[] = [];
      JSON.stringify(t, (_k, v) => (typeof v === "string" && strings.push(v), v));
      expect(strings.every((x) => x.trim().length > 0), locale).toBe(true);
      expect(strings.filter((x) => !script[locale].test(x)), locale).toEqual([]);
    }
  });

  it("çeviriler TR karşılığı olan bölümlerde TR'de olmayan sayısal değer eklemez (yalnız ST37/S355 malzeme sınıfları)", () => {
    const trSectionCount = buildDryerBase("tr").content.technical!.sections.length;
    const numbers = (locale: (typeof LOCALES)[number]) => {
      const t = buildDryerBase(locale).content.technical!;
      return new Set(JSON.stringify({ ...t, sections: t.sections.slice(0, trSectionCount) }).match(/\d+/g) ?? []);
    };
    const allowed = numbers("tr");
    for (const locale of ["en", "ru", "ar"] as const) expect([...numbers(locale)].filter((n) => !allowed.has(n)), locale).toEqual([]);
  });

  it("Product additionalProperty her dilde görünür tablo satırlarıyla birebir aynı (4 dil, 11 satır)", async () => {
    const { dryerSchemaProperties } = await import("@/app/i18n/content/dryer-page/editable");
    for (const locale of LOCALES) {
      const content = buildDryerBase(locale).content;
      expect(dryerSchemaProperties(content), locale).toEqual(
        content.technical!.table.rows.map((r) => ({ "@type": "PropertyValue", name: r.name, value: r.value })),
      );
      expect(dryerSchemaProperties(content), locale).toHaveLength(11);
    }
  });
});

describe("kurutma tamburu üretici kanıtları ve görsel sahipliği", () => {
  const evidenceTexts = (locale: (typeof LOCALES)[number]) => {
    const texts = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, locale)) as DryerEditable;
    texts.evidence.title = "İmalat ve Referanslar";
    texts.evidence.videoTitle = "Kurutma tamburu içi";
    texts.evidence.facts = [{ label: "Doğrulanmış bilgi", value: "Değer" }, { label: "", value: "" }];
    texts.evidence.references = [{ name: "Tamamlanmış proje", location: "Eskişehir", year: "2025", scope: "Kurutma hattı" }];
    return texts;
  };
  const sharedDefault = () => clone(rotaryDryerAdapter.shared!.getDefault(DRYER_DOC_ID)) as ReturnType<typeof dryerSharedFrom>;

  it("varsayılan: kanıt bölümü yok, tüm yayın onayları kapalı (doğrulanmamış bilgi yayınlanmaz)", () => {
    const shared = sharedDefault();
    expect(shared.verified).toEqual({ showVideo: false, showFacts: false, showReferences: false });
    for (const locale of LOCALES) expect(buildDryerBase(locale).content.evidence).toBeUndefined();
  });

  it("metin girilse bile onay işaretlenmeden hiçbir kanıt gösterilmez", () => {
    const base = buildDryerBase("tr");
    expect(applyDryerOverrides(base.content, evidenceTexts("tr"), sharedDefault()).evidence).toBeUndefined();
  });

  it("onaylı öğeler ayrı ayrı açılır; boş satırlar ve onaysız türler gösterilmez", () => {
    const base = buildDryerBase("tr");
    const shared = { ...sharedDefault(), verified: { showVideo: true, showFacts: true, showReferences: false } };
    const evidence = applyDryerOverrides(base.content, evidenceTexts("tr"), shared).evidence!;
    expect(evidence.video?.src).toBe("/images/kurutma tamburu cehennemlik.mp4");
    expect(evidence.facts).toEqual([{ label: "Doğrulanmış bilgi", value: "Değer" }]);
    expect(evidence.references).toEqual([]);
  });

  it("onay açık ama bu dilde metin yoksa bölüm o dilde gösterilmez", () => {
    const base = buildDryerBase("en");
    const shared = { ...sharedDefault(), verified: { showVideo: true, showFacts: true, showReferences: true } };
    expect(applyDryerOverrides(base.content, dryerEditableFrom(base), shared).evidence).toBeUndefined();
  });

  it("görsel alt metinleri doğrulanmamış sahiplik iddia etmez (4 dil)", () => {
    for (const locale of LOCALES) {
      const c = buildDryerBase(locale).content;
      const alts = [c.overview.image.alt, ...c.applications.items.map((i) => i.image.alt), c.design.figure?.alt ?? "", ...(c.gallery?.images ?? []).map((i) => i.alt)];
      expect(alts.filter((a) => /pro\s*mak/i.test(a)), locale).toEqual([]);
    }
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

  it("EN teknik bölüm panelden değiştirilince yalnız EN sayfası değişir", async () => {
    const en = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "en")) as DryerEditable;
    en.technical.title = "Rotary Dryer Technical Specifications";
    en.technical.navLabel = "Specifications";
    en.technical.table.title = "Key Design Parameters";
    en.technical.table.headers = ["Parameter", "Description"];
    en.technical.table.rows = [
      { name: "Drum diameter", value: "Set by evaporation load and gas flow" },
      { name: "Drum length", value: "Set by drying load, filling and retention time" },
      { name: "Drive", value: "Motor, gearbox and drive group" },
    ];
    await saveDraft(db, { ...target("en"), value: en });
    await publish(db, target("en"));
    const page = await loadDryerPage("en");
    expect(page.content.technical?.title).toBe("Rotary Dryer Technical Specifications");
    expect(page.content.technical?.table.rows).toHaveLength(3);
    expect((await loadDryerPage("ar")).content.technical?.title).toBe(buildDryerBase("ar").content.technical?.title);
    await revertToDefault(db, target("en"));
  });

  it("çeviri öncesi yayınlanmış (teknik bölümü boş) kayıt yeni çeviriyi silmez, diğer alanlar korunur", async () => {
    const old = clone(rotaryDryerAdapter.getDefault(DRYER_DOC_ID, "ru")) as DryerEditable;
    old.h1 = "Сушильный барабан – панельный заголовок";
    const blank = (v: unknown): unknown =>
      typeof v === "string" ? "" : Array.isArray(v) ? v.map(blank) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, blank(x)])) : v;
    old.technical = blank(old.technical) as DryerEditable["technical"];
    await db.query(
      "insert into content_documents (type, doc_id, locale, published, published_at) values ('dryerPage', $1, 'ru', $2, now()) on conflict (type, doc_id, locale) do update set published = excluded.published",
      [DRYER_DOC_ID, JSON.stringify(old)],
    );
    const page = await loadDryerPage("ru");
    expect(page.h1).toBe("Сушильный барабан – панельный заголовок");
    expect(page.content.technical?.title).toBe(buildDryerBase("ru").content.technical?.title);
    expect(page.content.technical?.table.rows).toHaveLength(11);
    await db.query("delete from content_documents where type = 'dryerPage' and locale = 'ru'");
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
