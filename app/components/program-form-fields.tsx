"use client";

import { trText } from "../lib/tr-text";
import type { ModalField, ProgramModalValues } from "./program-modal-config";

type ProgramFormFieldsProps = {
  fields: ModalField[];
  values: ProgramModalValues;
  errors: Record<string, string>;
  onChange: (fieldId: string, value: string) => void;
};

export function ProgramFormFields({
  fields,
  values,
  errors,
  onChange,
}: ProgramFormFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {fields.map((field) => {
        const value = values[field.id] ?? "";
        const error = errors[field.id];
        const baseClasses = `min-h-[48px] w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 outline-none transition ${
          error
            ? "border-rose-300 bg-rose-50 focus:border-rose-400"
            : "border-slate-200 bg-white hover:border-blue-200 focus:border-blue-500 focus:bg-blue-50/30"
        }`;

        return (
          <label
            key={field.id}
            className={`grid gap-2 ${field.type === "textarea" ? "md:col-span-2 xl:col-span-3" : ""}`}
          >
            <span className="text-sm font-medium text-slate-700">{trText(field.label)}</span>
            {field.helperText ? (
              <span className="text-xs leading-5 text-slate-500">{trText(field.helperText)}</span>
            ) : null}

            {field.type === "select" ? (
              <select
                value={value}
                onChange={(event) => onChange(field.id, event.target.value)}
                className={baseClasses}
              >
                <option value="">{trText("Seçiniz")}</option>
                {(field.options ?? []).map((option) => (
                  <option key={`${field.id}-${option.value}`} value={option.value}>
                    {trText(option.label)}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                value={value}
                onChange={(event) => onChange(field.id, event.target.value)}
                rows={field.rows ?? 4}
                placeholder={field.placeholder ? trText(field.placeholder) : undefined}
                className={`${baseClasses} min-h-[128px] resize-y`}
              />
            ) : (
              <input
                type={field.type}
                value={value}
                onChange={(event) =>
                  onChange(
                    field.id,
                    field.type === "number"
                      ? event.target.value.replace(/[^0-9.,-]/g, "")
                      : event.target.value,
                  )
                }
                min={field.min}
                max={field.max}
                step={field.step}
                placeholder={field.placeholder ? trText(field.placeholder) : undefined}
                className={baseClasses}
              />
            )}

            {error ? <span className="text-xs leading-5 text-rose-600">{trText(error)}</span> : null}
          </label>
        );
      })}
    </div>
  );
}
