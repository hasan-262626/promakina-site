"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import type { ActionState } from "../actions";
import { buttonClass } from "./ui";

type Action = (state: ActionState, formData: FormData) => Promise<ActionState>;

/** Server action formu: bekleme durumu, hata ve başarı mesajı erişilebilir şekilde gösterilir. */
export function ActionForm({ action, children, submitLabel, className = "" }: { action: Action; children: React.ReactNode; submitLabel: string; className?: string }) {
  const [state, formAction] = useActionState(action, {});
  return (
    <form action={formAction} className={className} noValidate={false}>
      {children}
      {state.error ? (
        <p role="alert" className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.error}
        </p>
      ) : null}
      {state.message ? (
        <p role="status" className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {state.message}
        </p>
      ) : null}
      <SubmitButton label={submitLabel} />
    </form>
  );
}

export function SubmitButton({ label, className = buttonClass }: { label: string; className?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-busy={pending} className={`mt-4 ${className}`}>
      {pending ? "İşleniyor…" : label}
    </button>
  );
}

/** Geri alınamaz işlemler için ikinci onay adımı. */
export function ConfirmSubmit({ label, confirmLabel, className }: { label: string; confirmLabel: string; className: string }) {
  const [armed, setArmed] = useState(false);
  if (!armed) {
    return (
      <button type="button" className={className} onClick={() => setArmed(true)}>
        {label}
      </button>
    );
  }
  return (
    <span className="inline-flex gap-2">
      <button type="submit" className={`${className} border-red-300 text-red-700`}>
        {confirmLabel}
      </button>
      <button type="button" className={className} onClick={() => setArmed(false)}>
        Vazgeç
      </button>
    </span>
  );
}
