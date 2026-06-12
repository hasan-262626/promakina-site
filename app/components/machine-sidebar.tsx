import Link from "next/link";
import { trText } from "../lib/tr-text";

export type MachineSidebarItem = {
  label: string;
  href: string;
};

type MachineSidebarProps = {
  title: string;
  href: string;
  items: MachineSidebarItem[];
  activeHref: string;
};

export function MachineSidebar({
  title,
  href,
  items,
  activeHref,
}: MachineSidebarProps) {
  return (
    <aside className="overflow-hidden rounded-[28px] bg-[#154764] text-white shadow-[0_20px_50px_rgba(21,71,100,0.22)]">
      <Link
        href={href}
        className="block border-b border-white/15 px-5 py-5 transition hover:bg-white/5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
          {trText("Makine Grubu")}
        </p>
        <h2 className="mt-2 text-xl font-bold uppercase leading-snug tracking-[0.04em] text-white">
          {trText(title)}
        </h2>
      </Link>

      <nav className="py-2">
        {items.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center justify-between gap-3 border-t border-white/12 px-5 py-3.5 text-sm transition ${
                isActive
                  ? "bg-[#278DC0] font-semibold text-white"
                  : "text-white/90 hover:bg-[#278DC0] hover:text-white"
              }`}
            >
              <span className="leading-6">{trText(item.label)}</span>
              <span
                className={`text-base transition-transform duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 group-hover:translate-x-1 group-hover:text-white"
                }`}
              >
                →
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
