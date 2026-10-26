"use client";

import { useRef, useState } from "react";
import { buttonClass, inputClass, secondaryButtonClass } from "./ui";

export type UploadedAsset = {
  id: string;
  url: string;
  title: string;
  alt: Record<string, string | undefined>;
  size: number;
  width: number | null;
  height: number | null;
  uploadedBy: string | null;
  createdAt: string;
  usage: { type: string; doc_id: string; locale: string; inPublished: boolean }[];
};

const LOCALES = ["tr", "en", "ru", "ar"] as const;
const ACCEPT = ".jpg,.jpeg,.png,.webp,.avif,image/jpeg,image/png,image/webp,image/avif";

async function send(url: string, init: RequestInit) {
  const res = await fetch(url, { ...init, credentials: "same-origin" });
  const body = (await res.json().catch(() => ({}))) as { error?: string; usage?: UploadedAsset["usage"] };
  return { ok: res.ok, status: res.status, body };
}

function UploadForm({ onDone }: { onDone: (message: string, ok: boolean) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="flex flex-wrap items-end gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        const file = input.current?.files?.[0];
        if (!file) return onDone("Dosya seçin.", false);
        if (file.size > 4 * 1024 * 1024) return onDone("Dosya 4 MB sınırını aşıyor.", false);
        setBusy(true);
        const fd = new FormData();
        fd.append("file", file);
        const r = await send("/admin/api/media", { method: "POST", body: fd });
        setBusy(false);
        if (r.ok) window.location.reload();
        else onDone(r.body.error ?? "Yükleme başarısız.", false);
      }}
    >
      <label className="min-w-0 flex-1">
        <span className="mb-1 block text-xs font-medium text-slate-600">Görsel (JPG, PNG, WebP, AVIF · en fazla 4 MB · SVG kabul edilmez)</span>
        <input ref={input} type="file" name="file" accept={ACCEPT} className={inputClass} required />
      </label>
      <button className={buttonClass} disabled={busy}>
        {busy ? "Yükleniyor…" : "Yükle"}
      </button>
    </form>
  );
}

function AssetRow({ asset, canManage, canDelete, canPublish, onMessage }: { asset: UploadedAsset; canManage: boolean; canDelete: boolean; canPublish: boolean; onMessage: (m: string, ok: boolean) => void }) {
  const [title, setTitle] = useState(asset.title);
  const [alt, setAlt] = useState(asset.alt);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const replaceInput = useRef<HTMLInputElement>(null);
  const used = asset.usage.length > 0;
  const usedInPublished = asset.usage.some((u) => u.inPublished);

  return (
    <li className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[160px_minmax(0,1fr)]">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset.url} alt={asset.alt.tr ?? ""} className="aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover" />
        <p className="mt-1 break-all font-mono text-[10px] text-slate-500">{asset.url}</p>
        <p className="text-[11px] text-slate-500">
          {asset.width}×{asset.height} · {(asset.size / 1024).toFixed(0)} KB
        </p>
      </div>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-xs font-medium text-slate-600">Kullanıldığı yerler</p>
          {used ? (
            <ul className="mt-1 space-y-0.5 text-xs">
              {asset.usage.map((u) => (
                <li key={`${u.type}-${u.doc_id}-${u.locale}`}>
                  <a className="text-[#154764] hover:underline" href={`/admin/content/edit/${u.type}/${encodeURIComponent(u.doc_id)}?locale=${u.locale}`}>
                    {u.type}/{u.doc_id} ({u.locale})
                  </a>{" "}
                  {u.inPublished ? "· yayında" : "· taslakta"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-xs text-slate-500">Kullanılmıyor.</p>
          )}
        </div>
        {canManage ? (
          <form
            className="grid gap-2 sm:grid-cols-2"
            onSubmit={async (e) => {
              e.preventDefault();
              const r = await send(`/admin/api/media/${asset.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, alt }) });
              onMessage(r.ok ? "Başlık ve alt metinler kaydedildi." : (r.body.error ?? "Kaydedilemedi."), r.ok);
            }}
          >
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs text-slate-600">Başlık</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={300} className={inputClass} />
            </label>
            {LOCALES.map((l) => (
              <label key={l}>
                <span className="mb-1 block text-xs text-slate-600">Alt metin ({l.toUpperCase()})</span>
                <input value={alt[l] ?? ""} dir={l === "ar" ? "rtl" : "ltr"} onChange={(e) => setAlt({ ...alt, [l]: e.target.value })} maxLength={300} className={inputClass} />
              </label>
            ))}
            <div className="flex flex-wrap gap-2 sm:col-span-2">
              <button className={secondaryButtonClass}>Metinleri kaydet</button>
              {!usedInPublished || canPublish ? (
                <>
                  <button type="button" className={secondaryButtonClass} onClick={() => replaceInput.current?.click()}>
                    Dosyayı değiştir
                  </button>
                  <input
                    ref={replaceInput}
                    type="file"
                    accept={ACCEPT}
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const fd = new FormData();
                      fd.append("file", file);
                      const r = await send(`/admin/api/media/${asset.id}`, { method: "POST", body: fd });
                      if (r.ok) window.location.reload();
                      else onMessage(r.body.error ?? "Değiştirilemedi.", false);
                    }}
                  />
                </>
              ) : null}
              {canDelete ? (
                confirmDelete ? (
                  <span className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-xs text-red-800" role="alertdialog">
                    Kalıcı olarak silinsin mi?
                    <button
                      type="button"
                      className="font-semibold underline"
                      onClick={async () => {
                        const r = await send(`/admin/api/media/${asset.id}`, { method: "DELETE" });
                        if (r.ok) window.location.reload();
                        else onMessage(r.body.error ?? "Silinemedi.", false);
                        setConfirmDelete(false);
                      }}
                    >
                      Evet, sil
                    </button>
                    <button type="button" className="underline" onClick={() => setConfirmDelete(false)}>
                      Vazgeç
                    </button>
                  </span>
                ) : (
                  <button type="button" className={secondaryButtonClass} disabled={used} title={used ? "Kullanılan dosya silinemez" : undefined} onClick={() => setConfirmDelete(true)}>
                    Sil
                  </button>
                )
              ) : null}
            </div>
          </form>
        ) : null}
      </div>
    </li>
  );
}

export function MediaLibrary({
  assets,
  driver,
  canManage,
  canDelete,
  canPublish,
}: {
  assets: UploadedAsset[];
  driver: "blob" | "local" | null;
  canManage: boolean;
  canDelete: boolean;
  canPublish: boolean;
}) {
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);
  const [filter, setFilter] = useState<"all" | "unused">("all");
  const onMessage = (text: string, ok: boolean) => setMessage({ text, ok });
  const shown = filter === "unused" ? assets.filter((a) => a.usage.length === 0) : assets;

  return (
    <section className="mb-10 space-y-4">
      {canManage && driver ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <UploadForm onDone={onMessage} />
          <p className="mt-2 text-[11px] text-slate-500">
            Dosya sunucuda doğrulanır (uzantı, dosya imzası, boyut, piksel ölçüsü) ve yeniden kodlanır; konum (EXIF/GPS) bilgisi silinir. Dosya adı rastgele üretilir.
            Depolama: {driver === "blob" ? "Vercel Blob" : "yerel geliştirme klasörü (yalnız Vercel dışı)"}.
          </p>
        </div>
      ) : null}
      {message ? (
        <p role={message.ok ? "status" : "alert"} className={`rounded-lg border px-3 py-2 text-sm ${message.ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}>
          {message.text}
        </p>
      ) : null}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-600">Yüklenen dosyalar ({assets.length})</span>
        <button type="button" className={secondaryButtonClass} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          Tümü
        </button>
        <button type="button" className={secondaryButtonClass} aria-pressed={filter === "unused"} onClick={() => setFilter("unused")}>
          Kullanılmayanlar ({assets.filter((a) => a.usage.length === 0).length})
        </button>
      </div>
      {shown.length === 0 ? <p className="text-sm text-slate-500">Kayıt yok.</p> : null}
      <ul className="space-y-3">
        {shown.map((asset) => (
          <AssetRow key={asset.id} asset={asset} canManage={canManage} canDelete={canDelete} canPublish={canPublish} onMessage={onMessage} />
        ))}
      </ul>
    </section>
  );
}
