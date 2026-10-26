import { describe, expect, it } from "vitest";
import { hasPermission } from "@/lib/admin/permissions";

describe("CMS yetki matrisi", () => {
  it("Editör taslak oluşturur ve medya yükler; yayınlayamaz, silemez, kullanıcı yönetemez", () => {
    expect(hasPermission("EDITOR", "content.edit")).toBe(true);
    expect(hasPermission("EDITOR", "media.manage")).toBe(true);
    expect(hasPermission("EDITOR", "content.publish")).toBe(false);
    expect(hasPermission("EDITOR", "media.delete")).toBe(false);
    expect(hasPermission("EDITOR", "users.manage")).toBe(false);
  });
  it("Yönetici yayınlar; kullanıcı yönetemez. Süper yönetici her şeyi yapar", () => {
    expect(hasPermission("ADMIN", "content.publish")).toBe(true);
    expect(hasPermission("ADMIN", "media.delete")).toBe(true);
    expect(hasPermission("ADMIN", "users.manage")).toBe(false);
    expect(hasPermission("SUPER_ADMIN", "users.manage")).toBe(true);
    expect(hasPermission("SUPER_ADMIN", "content.publish")).toBe(true);
  });
});
