"use client";

import { useState } from "react";
import type { ProgramGroup, ProgramGroupTool } from "../program-groups";
import { ProgramGroupCard } from "./program-group-card";
import { ProgramModal } from "./program-modal";

type ProgramsModalExperienceProps = {
  groups: ProgramGroup[];
};

export function ProgramsModalExperience({
  groups,
}: ProgramsModalExperienceProps) {
  const [selectedProgramSlug, setSelectedProgramSlug] = useState<string | null>(null);

  const handleToolSelect = (tool: ProgramGroupTool) => {
    setSelectedProgramSlug(tool.slug);
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

      {selectedProgramSlug ? (
        <ProgramModal
          slug={selectedProgramSlug}
          onClose={() => setSelectedProgramSlug(null)}
        />
      ) : null}
    </>
  );
}
