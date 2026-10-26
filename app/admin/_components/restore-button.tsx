"use client";

import { useState } from "react";
import { restoreRevisionAction } from "../content-actions";
import { buttonClass, secondaryButtonClass } from "./ui";

/** Eski sürümü taslak olarak geri yükler; geçmiş silinmez, yayın ayrıca yapılır. */
export function RestoreRevisionButton({ type, revisionId, editHref }: { type: string; revisionId: number; editHref: string }) {
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const restore = async () => {
    setBusy(true);
    try {
      const result = await restoreRevisionAction(type, revisionId);
      setMessage(result.ok ? { ok: true, text: result.message ?? "Geri yüklendi." } : { ok: false, text: result.error });
    } catch {
      setMessage({ ok: false, text: "Bağlantı hatası." });
    } finally {
      setBusy(false);
      setConfirming(false);
    }
  };

  return (
    <div className="space-y-2">
      {confirming ? (
        <div role="alertdialog" aria-labelledby="restore-title" className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm">
          <p id="restore-title" className="text-amber-900">
            Bu sürüm yeni bir taslak olarak geri yüklenecek. Mevcut taslağın üzerine yazılır; revizyon geçmişi korunur.
          </p>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={restore} disabled={busy} className={buttonClass}>
              {busy ? "İşleniyor…" : "Onayla"}
            </button>
            <button type="button" onClick={() => setConfirming(false)} className={secondaryButtonClass}>
              Vazgeç
            </button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => setConfirming(true)} className={buttonClass}>
          Bu sürümü geri yükle
        </button>
      )}
      {message ? (
        <p role={message.ok ? "status" : "alert"} className={`text-sm ${message.ok ? "text-emerald-700" : "text-red-700"}`}>
          {message.text}{" "}
          {message.ok ? (
            <a className="underline" href={editHref}>
              Editöre git
            </a>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}
