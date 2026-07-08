"use client";

import type { MaterialCategory } from "./types";

function CategoryIcon({ icon }: { icon: MaterialCategory["icon"] }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round" as const };
  switch (icon) {
    case "sac":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M3 8l6-3 12 4-6 3L3 8zm0 0v8l12 4v-8M21 9v8l-6 3" />
        </svg>
      );
    case "kutu":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <rect {...common} x="4" y="4" width="16" height="16" rx="1" />
          <rect {...common} x="8" y="8" width="8" height="8" rx="0.5" />
        </svg>
      );
    case "boru":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <circle {...common} cx="12" cy="12" r="8" />
          <circle {...common} cx="12" cy="12" r="4.5" />
        </svg>
      );
    case "kosebent":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M6 4v16h14M9 4v13h11" />
        </svg>
      );
    case "iprofil":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M5 4h14M5 20h14M9 4v16M15 4v16" />
        </svg>
      );
    case "uprofil":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M5 4v13a3 3 0 003 3h8a3 3 0 003-3V4M9 4v12M15 4v12" />
        </svg>
      );
    case "tprofil":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M4 5h16M10 5v15h4V5" />
        </svg>
      );
    case "mil":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <ellipse {...common} cx="7" cy="12" rx="3" ry="6" />
          <path {...common} d="M7 6h11a3 6 0 010 12H7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path {...common} d="M12 4v16M4 12h16" />
        </svg>
      );
  }
}

type Props = {
  categories: MaterialCategory[];
  activeCategoryId: string;
  activeMaterialId: string;
  onSelect: (categoryId: string, materialId: string) => void;
};

export function MaterialCategoryNav({ categories, activeCategoryId, activeMaterialId, onSelect }: Props) {
  return (
    <nav aria-label="Malzeme kategorileri" className="space-y-2">
      {categories.map((category) => {
        const isActiveCategory = category.id === activeCategoryId;
        return (
          <div
            key={category.id}
            className={`overflow-hidden rounded-2xl border transition ${
              isActiveCategory ? "border-[#278DC0] bg-white shadow-sm" : "border-slate-200 bg-white/70"
            }`}
          >
            <button
              type="button"
              onClick={() => onSelect(category.id, category.materials[0].id)}
              className={`flex min-h-[46px] w-full items-center gap-3 px-4 text-left text-sm font-bold transition ${
                isActiveCategory ? "bg-[#154764] text-white" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span className={isActiveCategory ? "text-[#8ec9e8]" : "text-[#278DC0]"}>
                <CategoryIcon icon={category.icon} />
              </span>
              {category.label}
            </button>
            {isActiveCategory ? (
              <ul className="p-1.5">
                {category.materials.map((material) => {
                  const active = material.id === activeMaterialId;
                  return (
                    <li key={material.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(category.id, material.id)}
                        className={`w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                          active
                            ? "bg-[#eef6fb] font-semibold text-[#154764]"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {material.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
