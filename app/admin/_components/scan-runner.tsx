"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { runScanBatchAction, startScanAction } from "../actions";
import { buttonClass } from "./ui";

/** Taramayı tarayıcıdan parti parti ilerletir; her parti ayrı ve kısa bir sunucu isteğidir. */
export function ScanRunner({ resumeScanId }: { resumeScanId?: string }) {
  const router = useRouter();
  const [state, setState] = useState<{ running: boolean; batches: number; error?: string }>({ running: false, batches: 0 });

  async function run(existing?: string) {
    setState({ running: true, batches: 0 });
    let scanId = existing;
    if (!scanId) {
      const started = await startScanAction();
      if (!started.scanId) {
        setState({ running: false, batches: 0, error: started.error });
        return;
      }
      scanId = started.scanId;
    }
    for (let batches = 1; batches < 200; batches++) {
      const result = await runScanBatchAction(scanId);
      setState({ running: !result.done, batches, error: result.error });
      router.refresh();
      if (result.done || result.error) return;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className={buttonClass} disabled={state.running} onClick={() => run()}>
        {state.running ? "Taranıyor…" : "Yeni tarama başlat"}
      </button>
      {resumeScanId && !state.running ? (
        <button type="button" className="text-sm font-medium text-[#154764] underline" onClick={() => run(resumeScanId)}>
          Yarım kalan taramayı sürdür
        </button>
      ) : null}
      <span role="status" aria-live="polite" className="text-sm text-slate-600">
        {state.running ? `${state.batches} parti tamamlandı…` : state.error ? state.error : ""}
      </span>
    </div>
  );
}
