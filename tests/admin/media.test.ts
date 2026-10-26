import sharp from "sharp";
import { beforeAll, describe, expect, it } from "vitest";
import type { Db } from "@/lib/admin/db-core";
import { getAdapter } from "@/lib/cms/registry";
import { saveDraft, publish } from "@/lib/cms/store";
import { imageChecker } from "@/lib/cms/images";
import { MediaInUseError, createAsset, deleteAssetRecord, replaceAssetFile, whereUsed } from "@/lib/media/assets";
import { MAX_UPLOAD_BYTES, UploadError, detectFormat, processUpload } from "@/lib/media/validate";
import { STORAGE_KEY_RE, newStorageKey } from "@/lib/media/storage";
import { createTestDb } from "./helpers";

const png = (w = 64, h = 48) => sharp({ create: { width: w, height: h, channels: 3, background: { r: 20, g: 80, b: 120 } } }).png().toBuffer();

describe("medya doğrulama", () => {
  it("geçerli PNG kabul edilir, yeniden kodlanır ve EXIF/konum bilgisi atılır", async () => {
    const withExif = await sharp(await png()).withExif({ IFD0: { Copyright: "gizli-konum-bilgisi" } }).jpeg().toBuffer();
    expect(withExif.includes(Buffer.from("gizli-konum-bilgisi"))).toBe(true);
    const out = await processUpload("foto.jpg", withExif);
    expect(out.format).toBe("jpeg");
    expect(out.buffer.includes(Buffer.from("gizli-konum-bilgisi"))).toBe(false);
    expect(out.width).toBe(64);
  });

  it("dosya sonuna eklenmiş script (polyglot) yeniden kodlamada temizlenir", async () => {
    const polyglot = Buffer.concat([await png(), Buffer.from("<script>alert(1)</script>")]);
    const out = await processUpload("a.png", polyglot);
    expect(out.buffer.includes(Buffer.from("<script>"))).toBe(false);
  });

  it("güvensiz veya geçersiz dosyalar reddedilir", async () => {
    const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>');
    await expect(processUpload("logo.svg", svg)).rejects.toThrow(/SVG/);
    await expect(processUpload("sayfa.jpg", Buffer.from("<html><script>alert(1)</script></html>"))).rejects.toThrow(/imzası/);
    await expect(processUpload("gorsel.jpg", await png())).rejects.toThrow(/uyuşmuyor/);
    await expect(processUpload("dosya.exe", await png())).rejects.toThrow(UploadError);
    await expect(processUpload("dosya.png.php", await png())).rejects.toThrow(UploadError);
    await expect(processUpload("kucuk.png", await png(4, 4))).rejects.toThrow(/en az/);
    await expect(processUpload("buyuk.png", new Uint8Array(MAX_UPLOAD_BYTES + 1))).rejects.toThrow(/4 MB/);
    await expect(processUpload("bos.png", new Uint8Array(0))).rejects.toThrow(/boş/);
    const truncated = (await png()).subarray(0, 40);
    await expect(processUpload("bozuk.png", truncated)).rejects.toThrow(UploadError);
  });

  it("dosya imzası tanıma ve rastgele depolama anahtarı", async () => {
    expect(detectFormat(await png())).toBe("png");
    expect(detectFormat(Buffer.from("GIF89a"))).toBeNull();
    const key = newStorageKey("webp");
    expect(STORAGE_KEY_RE.test(key)).toBe(true);
    expect(STORAGE_KEY_RE.test("uploads/2026/10/../../etc/passwd")).toBe(false);
    expect(newStorageKey("webp")).not.toBe(key);
  });
});

describe("medya kullanım takibi ve güvenli silme", () => {
  let db: Db;
  beforeAll(async () => {
    db = await createTestDb();
  });
  const base = { driver: "local", mime: "image/png", size: 100, width: 64, height: 48, originalName: "a.png", user: "editor@test" };

  it("içerikte kullanılan dosya silinemez; kullanılmayan silinir; değiştirme içerikteki adresi günceller", async () => {
    const used = await createAsset(db, { ...base, url: "/media/uploads/2026/10/11111111-1111-4111-8111-111111111111.png", storageKey: "k1" });
    const free = await createAsset(db, { ...base, url: "/media/uploads/2026/10/22222222-2222-4222-8222-222222222222.png", storageKey: "k2" });
    const sector = getAdapter("sectorDetail")!;
    const def = sector.shared!.getDefault("sectorLiquidNpk") as { images: string[] };
    const exists = await imageChecker(db);
    await saveDraft(db, { adapter: sector, id: "sectorLiquidNpk", locale: "shared", value: { images: [used.url, ...def.images.slice(1)] }, user: "editor@test" }, exists);
    await publish(db, { adapter: sector, id: "sectorLiquidNpk", locale: "shared", user: "admin@test" }, exists);

    expect((await whereUsed(db, used.url))[0]).toMatchObject({ type: "sectorDetail", doc_id: "sectorLiquidNpk", locale: "shared", inPublished: true });
    await expect(deleteAssetRecord(db, used.id)).rejects.toBeInstanceOf(MediaInUseError);
    await expect(deleteAssetRecord(db, free.id)).resolves.toMatchObject({ id: free.id });

    const nextUrl = "/media/uploads/2026/10/33333333-3333-4333-8333-333333333333.png";
    const result = await replaceAssetFile(db, used.id, { ...base, url: nextUrl, storageKey: "k3" }, "admin@test");
    expect(result?.usage.length).toBe(1);
    expect(await whereUsed(db, used.url)).toEqual([]);
    expect((await whereUsed(db, nextUrl)).length).toBe(1);
    const rev = (await db.query<{ action: string }>("select action from content_revisions order by id desc limit 1")).rows[0];
    expect(rev.action).toBe("media_replace");
  });

  it("kayıtlı olmayan görsel içerik alanına yazılamaz", async () => {
    const exists = await imageChecker(db);
    expect(exists("/media/uploads/2026/10/99999999-9999-4999-8999-999999999999.png")).toBe(false);
    expect(exists("https://evil.example/x.png")).toBe(false);
  });
});
