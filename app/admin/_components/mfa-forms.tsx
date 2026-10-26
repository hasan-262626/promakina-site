"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { MfaActionState } from "../mfa-actions";
import { SubmitButton } from "./forms";
import { inputClass } from "./ui";

type Action = (state: MfaActionState, formData: FormData) => Promise<MfaActionState>;

/** Kod formu; başarılı yanıtta kurtarma kodlarını yalnız bu ekranda bir kez gösterir (sunucuda yalnız özetleri tutulur). */
export function MfaCodeForm({ action, submitLabel, label, allowRecovery = false }: { action: Action; submitLabel: string; label: string; allowRecovery?: boolean }) {
  const [state, formAction] = useActionState(action, {});
  if (state.recoveryCodes) {
    return (
      <div className="space-y-3">
        <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {state.message}
        </p>
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">Kurtarma kodları — yalnız şimdi gösteriliyor</p>
          <p className="mt-1 text-xs text-amber-900">
            Telefonunuza erişemezseniz her kod bir kez giriş için kullanılabilir. Güvenli bir yere (parola yöneticisi) kaydedin; bu sayfadan çıktıktan sonra tekrar
            gösterilemez.
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 font-mono text-sm">
            {state.recoveryCodes.map((code) => (
              <li key={code} className="rounded bg-white px-2 py-1 text-center">
                {code}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/admin" className="inline-block text-sm text-[#154764] underline">
          Panele devam et
        </Link>
      </div>
    );
  }
  return (
    <form action={formAction} className="space-y-3">
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
        <input
          name="code"
          required
          minLength={6}
          maxLength={40}
          autoComplete="one-time-code"
          inputMode={allowRecovery ? "text" : "numeric"}
          pattern={allowRecovery ? undefined : "[0-9 ]{6,7}"}
          className={`${inputClass} font-mono tracking-widest`}
        />
      </label>
      {state.error ? (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.error}
        </p>
      ) : null}
      <SubmitButton label={submitLabel} />
    </form>
  );
}
