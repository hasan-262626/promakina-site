import { afterAll, beforeAll, describe, expect, it } from "vitest";

/**
 * Public CMS okuma katmanı fail-open davranışı: veritabanı erişilemezse null döner (sayfa koddaki içerikle çalışır),
 * ardından 60 sn veritabanı denenmez. Gerçek ağ isteği yerel kapalı bir porta gider.
 */
const original = process.env.DATABASE_URL;

beforeAll(() => {
  process.env.DATABASE_URL = "postgres://nobody:nopass@127.0.0.1:1/none";
  globalThis.__promakinaAdminDb = undefined;
});
afterAll(() => {
  process.env.DATABASE_URL = original;
  globalThis.__promakinaAdminDb = undefined;
});

describe("public CMS yükleyici", () => {
  it("veritabanı erişilemezse hata fırlatmadan null döner ve sonraki çağrıda veritabanını denemez", async () => {
    const { loadCmsContent } = await import("@/lib/cms/public");
    const started = Date.now();
    expect(await loadCmsContent("sectorDetail", "sectorLiquidNpk", "tr")).toBeNull();
    expect(Date.now() - started).toBeLessThan(3_000);
    const again = Date.now();
    expect(await loadCmsContent("sectorDetail", "sectorLiquidNpk", "tr")).toBeNull();
    expect(Date.now() - again).toBeLessThan(20);
  });

  it("veritabanı tanımlı değilse hiç denenmez", async () => {
    delete process.env.DATABASE_URL;
    const { loadCmsContent } = await import("@/lib/cms/public");
    expect(await loadCmsContent("machineProduct", "compostDrum", "en")).toBeNull();
  });
});
