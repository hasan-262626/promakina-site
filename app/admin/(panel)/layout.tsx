import Link from "next/link";
import { hasPermission, ROLE_LABELS, type Permission } from "@/lib/admin/permissions";
import { requireEnrolledUser } from "@/lib/admin/server";
import { logoutAction } from "../actions";

type NavItem = { href: string; label: string; permission: Permission };

/** Menü, rolün göremeyeceği bağlantıları göstermez; asıl yetki kontrolü her sayfada sunucudadır. */
const NAV: { group: string; items: NavItem[] }[] = [
  { group: "", items: [{ href: "/admin", label: "Dashboard", permission: "dashboard.view" }] },
  {
    group: "İçerik",
    items: [
      { href: "/admin/content/machines", label: "Makinalar & Ekipman", permission: "content.view" },
      { href: "/admin/content/sectors", label: "Sektörler", permission: "content.view" },
      { href: "/admin/content/blog", label: "Blog / Rehberler", permission: "content.view" },
    ],
  },
  { group: "", items: [{ href: "/admin/media", label: "Medya", permission: "media.view" }] },
  {
    group: "Talepler",
    items: [
      { href: "/admin/leads?kind=contact", label: "İletişim", permission: "leads.view" },
      { href: "/admin/leads?kind=rfq", label: "Teklif Talepleri", permission: "leads.view" },
    ],
  },
  {
    group: "SEO",
    items: [
      { href: "/admin/seo", label: "SEO Denetimi", permission: "seo.view" },
      { href: "/admin/seo/redirects", label: "Yönlendirmeler", permission: "redirects.manage" },
    ],
  },
  {
    group: "Sistem",
    items: [
      { href: "/admin/system/health", label: "Site Sağlığı", permission: "health.run" },
      { href: "/admin/system/security", label: "Güvenlik", permission: "security.view" },
      { href: "/admin/system/audit", label: "Audit Log", permission: "audit.view" },
    ],
  },
  {
    group: "Ayarlar",
    items: [
      { href: "/admin/settings", label: "Genel / Hesabım", permission: "dashboard.view" },
      { href: "/admin/settings/integrations", label: "Entegrasyonlar", permission: "integrations.view" },
      { href: "/admin/settings/users", label: "Kullanıcılar & Roller", permission: "users.manage" },
    ],
  },
];

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const user = await requireEnrolledUser();
  const groups = NAV.map((g) => ({ ...g, items: g.items.filter((i) => hasPermission(user.role, i.permission)) })).filter((g) => g.items.length);

  const nav = (
    <nav aria-label="Yönetim menüsü" className="space-y-5">
      {groups.map((g, index) => (
        <div key={`${g.group}-${index}`}>
          {g.group ? <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{g.group}</p> : null}
          <ul className="space-y-0.5">
            {g.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-lg px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="bg-[#0f2f44] text-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <div className="px-5 py-4">
          <Link href="/admin" className="block">
            <span className="block text-sm font-bold tracking-[0.18em]">PRO MAKİNA</span>
            <span className="block text-[11px] tracking-[0.2em] text-slate-300">YÖNETİM</span>
          </Link>
        </div>
        {/* Mobilde menü açılır/kapanır; JavaScript gerektirmez. */}
        <details className="px-3 pb-4 lg:hidden">
          <summary className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">Menü</summary>
          <div className="mt-2">{nav}</div>
        </details>
        <div className="hidden px-3 pb-6 lg:block">{nav}</div>
      </aside>
      <div className="min-w-0">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-8">
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">{user.name}</span> · {ROLE_LABELS[user.role]}
          </p>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="text-sm text-slate-600 hover:text-[#278DC0]">
              Siteyi aç
            </a>
            <form action={logoutAction}>
              <button type="submit" className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Çıkış
              </button>
            </form>
          </div>
        </header>
        <main id="icerik" className="px-4 py-6 sm:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
