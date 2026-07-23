"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ProgramGroup, ProgramGroupTool } from "../program-groups";
import { ProgramGroupCard } from "./program-group-card";
import { ProgramModal } from "./program-modal";

type ProgramsModalExperienceProps = {
  groups: ProgramGroup[];
};

// Eski / karışık slug'lar tek premium araca yönlenir; kullanıcıya gösterilmez.
export const MODAL_SLUG_ALIASES: Record<string, string> = {
  "tambur-hesabi": "tambur-kapasite-hesabi",
  "kurutma-tamburu-hesabi": "tambur-kapasite-hesabi",
  "tambur-kurutma-hesabi": "tambur-kapasite-hesabi",
  "helezon-kapasite-hesabi": "helezon-kapasite-ve-mekanik-secim-programi",
  "konveyor-kapasite-hesabi": "konveyor-kapasite-ve-secim-hesap-programi",
  "elevator-kapasite-hesabi": "elevator-kapasite-ve-secim-programi",
};

// Görünen listede olmasa bile modal olarak açılabilecek slug'lar.
const ALWAYS_VALID_MODAL_SLUGS = new Set(["tambur-kapasite-hesabi"]);

export function ProgramsModalExperience({
  groups,
}: ProgramsModalExperienceProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const validSlugs = useMemo(
    () => new Set(groups.flatMap((group) => group.tools.map((tool) => tool.slug))),
    [groups],
  );
  const rawSlug = searchParams.get("modal");
  const selectedProgramSlug = rawSlug ? MODAL_SLUG_ALIASES[rawSlug] ?? rawSlug : null;
  const activeProgramSlug =
    selectedProgramSlug &&
    (validSlugs.has(selectedProgramSlug) || ALWAYS_VALID_MODAL_SLUGS.has(selectedProgramSlug))
      ? selectedProgramSlug
      : null;

  const updateModalQuery = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug) {
      params.set("modal", slug);
    } else {
      params.delete("modal");
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const handleToolSelect = (tool: ProgramGroupTool) => {
    updateModalQuery(tool.slug);
  };

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <ProgramGroupCard
            key={group.id}
            group={group}
            onToolSelect={handleToolSelect}
          />
        ))}
      </div>

      {activeProgramSlug ? (
        <ProgramModal
          slug={activeProgramSlug}
          onClose={() => updateModalQuery(null)}
        />
      ) : null}
    </>
  );
}
