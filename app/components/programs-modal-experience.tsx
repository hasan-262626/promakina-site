"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ProgramGroup, ProgramGroupTool } from "../program-groups";
import { ProgramGroupCard } from "./program-group-card";
import { ProgramModal } from "./program-modal";

type ProgramsModalExperienceProps = {
  groups: ProgramGroup[];
};

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
  const selectedProgramSlug = searchParams.get("modal");
  const activeProgramSlug =
    selectedProgramSlug && validSlugs.has(selectedProgramSlug) ? selectedProgramSlug : null;

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
