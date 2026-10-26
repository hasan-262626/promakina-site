import { describe, expect, it } from "vitest";
import { hasPermission, ROLES } from "@/lib/admin/permissions";
import {
  isAllowedFetchUrl,
  isSafeInternalPath,
  normalizeRedirectDestination,
  redirectSchema,
  userCreateSchema,
} from "@/lib/admin/validation";

describe("yetkilendirme (RBAC)", () => {
  it("editör kullanıcı yönetemez, süper yönetici yönetebilir", () => {
    expect(hasPermission("EDITOR", "users.manage")).toBe(false);
    expect(hasPermission("ADMIN", "users.manage")).toBe(false);
    expect(hasPermission("SUPER_ADMIN", "users.manage")).toBe(true);
  });

  it("editör lead, yönlendirme ve güvenlik ekranlarına erişemez", () => {
    for (const permission of ["leads.view", "redirects.manage", "security.view", "integrations.view"] as const) {
      expect(hasPermission("EDITOR", permission)).toBe(false);
    }
    expect(hasPermission("EDITOR", "content.edit")).toBe(true);
  });

  it("yönetici yönlendirme ve lead yönetir ama entegrasyon/güvenlik ayarı göremez", () => {
    expect(hasPermission("ADMIN", "redirects.manage")).toBe(true);
    expect(hasPermission("ADMIN", "leads.manage")).toBe(true);
    expect(hasPermission("ADMIN", "integrations.view")).toBe(false);
  });

  it("her rolün dashboard erişimi vardır", () => {
    for (const role of ROLES) expect(hasPermission(role, "dashboard.view")).toBe(true);
  });
});

describe("açık yönlendirme ve güvensiz URL", () => {
  it.each([
    "https://evil.example.com",
    "//evil.example.com",
    "/\\evil.example.com",
    "%2F%2Fevil.example.com",
    "javascript:alert(1)",
    "data:text/html,x",
    "http://www.promakina.com.tr/x",
    "https://www.promakina.com.tr.evil.com/x",
    "https://user:pw@www.promakina.com.tr/x",
    "/../etc/passwd",
    "/a/%2e%2e/b",
  ])("reddedilir: %s", (value) => {
    expect(normalizeRedirectDestination(value)).toBeNull();
  });

  it("site içi yol ve kendi alan adı kabul edilir", () => {
    expect(normalizeRedirectDestination("/sektorler")).toBe("/sektorler");
    expect(normalizeRedirectDestination("https://www.promakina.com.tr/iletisim?x=1")).toBe("/iletisim?x=1");
  });

  it("yönlendirme şeması geçersiz yükü reddeder", () => {
    expect(redirectSchema.safeParse({ source: "/eski", destination: "https://evil.com", statusCode: 301 }).success).toBe(false);
    expect(redirectSchema.safeParse({ source: "/admin", destination: "/", statusCode: 301 }).success).toBe(false);
    expect(redirectSchema.safeParse({ source: "eski", destination: "/", statusCode: 301 }).success).toBe(false);
    expect(redirectSchema.safeParse({ source: "/eski", destination: "/yeni", statusCode: 200 }).success).toBe(false);
    expect(redirectSchema.safeParse({ source: "/eski/", destination: "/yeni", statusCode: 301 }).data?.source).toBe("/eski");
  });

  it("sunucu tarafı getirme yalnız site alan adına izin verir (SSRF)", () => {
    for (const bad of ["http://localhost:3000", "https://127.0.0.1", "https://169.254.169.254/latest", "file:///etc/passwd", "https://10.0.0.5", "gopher://x"]) {
      expect(isAllowedFetchUrl(bad)).toBe(false);
    }
    expect(isAllowedFetchUrl("https://www.promakina.com.tr/sektorler")).toBe(true);
  });

  it("site içi yol denetimi kontrol karakterlerini reddeder", () => {
    expect(isSafeInternalPath("/a\nb")).toBe(false);
    expect(isSafeInternalPath("/a b")).toBe(false);
    expect(isSafeInternalPath("/a<script>")).toBe(false);
  });
});

describe("kullanıcı girdisi", () => {
  it("zayıf parola ve geçersiz rol reddedilir", () => {
    expect(userCreateSchema.safeParse({ email: "a@b.co", name: "Ali", role: "EDITOR", password: "kisa1" }).success).toBe(false);
    expect(userCreateSchema.safeParse({ email: "a@b.co", name: "Ali", role: "ROOT", password: "UzunParola12345" }).success).toBe(false);
    expect(userCreateSchema.safeParse({ email: "gecersiz", name: "Ali", role: "EDITOR", password: "UzunParola12345" }).success).toBe(false);
    expect(userCreateSchema.safeParse({ email: "a@b.co", name: "Ali", role: "EDITOR", password: "UzunParola12345" }).success).toBe(true);
  });
});
