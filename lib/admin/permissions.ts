/**
 * Rol tabanlı yetki (RBAC). Arayüzde buton gizlemek yalnızca kolaylıktır;
 * her sunucu işlemi `requirePermission` ile bu tabloyu kontrol eder.
 * Yeni rol eklemek için ROLE_PERMISSIONS'a satır eklenir (veritabanı check kısıtı da güncellenir).
 */

export const ROLES = ["SUPER_ADMIN", "ADMIN", "EDITOR"] as const;
export type Role = (typeof ROLES)[number];

export const PERMISSIONS = [
  "dashboard.view",
  "content.view",
  "content.edit",
  "content.publish",
  "media.view",
  "media.manage",
  "media.delete",
  "seo.view",
  "redirects.manage",
  "leads.view",
  "leads.manage",
  "health.run",
  "security.view",
  "audit.view",
  "settings.view",
  "integrations.view",
  "users.manage",
] as const;
export type Permission = (typeof PERMISSIONS)[number];

const editor: Permission[] = ["dashboard.view", "content.view", "content.edit", "media.view", "media.manage", "seo.view"];
/** Editör taslak hazırlar; yayınlama ve medya silme Yönetici ve üstü roldedir. */
const admin: Permission[] = [
  ...editor,
  "content.publish",
  "media.delete",
  "redirects.manage",
  "leads.view",
  "leads.manage",
  "health.run",
  "audit.view",
  "settings.view",
];

export const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  EDITOR: editor,
  ADMIN: admin,
  SUPER_ADMIN: PERMISSIONS,
};

export const ROLE_LABELS: Record<Role, string> = {
  SUPER_ADMIN: "Süper Yönetici",
  ADMIN: "Yönetici",
  EDITOR: "Editör",
};

export function isRole(value: unknown): value is Role {
  return typeof value === "string" && (ROLES as readonly string[]).includes(value);
}

export function hasPermission(role: Role, permission: Permission) {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
