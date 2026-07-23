"use client";

import type { ReactNode } from "react";
import { trText } from "../lib/tr-text";
import type { ProgramModalValues } from "./program-modal-config";
import { ProgramFormFields } from "./program-form-fields";
import {
  getTamburSpecializedSections,
  isTamburSpecializedFieldVisible,
  type TamburSpecializedSlug,
} from "./tambur-specialized-modal-config";

type TamburSpecializedModalFormProps = {
  slug: TamburSpecializedSlug;
  values: ProgramModalValues;
  errors: Record<string, string>;
  onChange: (fieldId: string, value: string) => void;
};

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 md:p-5">
      <div className="inline-flex rounded-full border border-[#278DC0]/20 bg-[#278DC0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#154764]">
        {trText(eyebrow)}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{trText(title)}</h3>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

export function TamburSpecializedModalForm({
  slug,
  values,
  errors,
  onChange,
}: TamburSpecializedModalFormProps) {
  const sections = getTamburSpecializedSections(slug);

  return (
    <div className="space-y-5">
      {sections.map((section) => {
        const visibleFields = section.fields.filter((field) =>
          isTamburSpecializedFieldVisible(slug, field.id, values),
        );

        if (visibleFields.length === 0) {
          return null;
        }

        return (
          <SectionCard key={section.id} eyebrow={section.eyebrow} title={section.title}>
            <ProgramFormFields
              fields={visibleFields}
              values={values}
              errors={errors}
              onChange={onChange}
            />
          </SectionCard>
        );
      })}
    </div>
  );
}

