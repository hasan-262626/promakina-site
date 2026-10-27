"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  discardDraftAction,
  markSyncedAction,
  publishAction,
  revertToDefaultAction,
  saveDraftAction,
  type ContentActionResult,
} from "../content-actions";
import { buttonClass, inputClass, secondaryButtonClass } from "./ui";

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
type Range = { min: number; max: number };

export type ContentEditorProps = {
  target: { type: string; id: string; locale: string };
  /** Koddaki varsayılan içerik: form yapısı ve yeni liste öğesi şablonu buradan gelir. */
  defaultValue: Json;
  value: Json;
  locked: string[];
  resizable: Record<string, Range>;
  /** Ortak (tüm diller) sekmesi: metin alanları görsel seçicidir. */
  imageMode: boolean;
  images: string[];
  groups: { id: string; label: string; keys: string[] }[] | null;
  canPublish: boolean;
  canMarkSynced: boolean;
  hasDraft: boolean;
  hasPublished: boolean;
  dir: "ltr" | "rtl";
  previewHref: string | null;
};

const AUTOSAVE_MS = 20_000;

/** lib/cms/shape.ts ile aynı desen eşleştirme (o dosya sunucu modülü içerdiği için burada kopyalanır). */
function pathMatches(pattern: string, path: string) {
  const p = pattern.split(".");
  const a = path.split(".");
  return p.length === a.length && p.every((seg, i) => seg === "*" || seg === a[i]);
}
const matchAny = (patterns: string[], path: string) => patterns.some((p) => pathMatches(p, path));
const rangeFor = (resizable: Record<string, Range>, path: string) => Object.entries(resizable).find(([p]) => pathMatches(p, path))?.[1];

const LABELS: Record<string, string> = {
  h1: "H1 başlık",
  title: "Başlık",
  metaTitle: "SEO başlığı (title)",
  description: "Açıklama",
  meta: "SEO",
  lead: "Giriş metni",
  intro: "Giriş",
  heroTitle: "Hero başlığı",
  heroDescription: "Hero açıklaması",
  question: "Soru",
  answer: "Cevap",
  faqs: "Sık sorulan sorular",
  faq: "SSS",
  items: "Öğeler",
  steps: "Adımlar",
  text: "Metin",
  paragraphs: "Paragraflar",
  sections: "Bölümler",
  subsections: "Alt bölümler",
  heading: "Ara başlık",
  cta: "CTA",
  ctaText: "CTA metni",
  imageAlt: "Görsel alt metni",
  imageAlts: "Görsel alt metinleri",
  mainImage: "Ana görsel",
  applications: "Uygulamalar",
  gallery: "Galeri",
  figure: "Teknik çizim",
  cards: "Kartlar",
  images: "Görseller",
  label: "Menü etiketi",
  technical: "Teknik özellikler",
  evidence: "Üretici kanıtları ve referanslar",
  verified: "Doğrulanmış içerik onayları",
  showVideo: "İmalat videosunu yayınla (PRO MAKİNA'ya ait ve yayın hakkı doğrulandı)",
  showFacts: "Firma bilgilerini yayınla (her bilgi doğrulandı)",
  showReferences: "Referansları yayınla (tamamlanmış proje, müşteri izni alındı)",
  facts: "Doğrulanmış firma bilgileri",
  references: "Tamamlanmış proje referansları",
  navLabel: "Sayfa içi menü etiketi",
  eyebrow: "Üst etiket",
};
const labelOf = (key: string) => (/^\d+$/.test(key) ? `#${Number(key) + 1}` : (LABELS[key] ?? key.replace(/([a-z])([A-Z])/g, "$1 $2")));

/** Yeni liste öğesi: şablon öğenin yapısı, metinler boş. */
function blank(template: Json): Json {
  if (typeof template === "string") return "";
  if (Array.isArray(template)) return template.length ? [blank(template[0])] : [];
  if (template && typeof template === "object") return Object.fromEntries(Object.entries(template).map(([k, v]) => [k, blank(v)]));
  return template;
}

function setAt(root: Json, path: string[], next: Json): Json {
  if (path.length === 0) return next;
  const [head, ...rest] = path;
  if (Array.isArray(root)) {
    const copy = [...root];
    copy[Number(head)] = setAt(copy[Number(head)], rest, next);
    return copy;
  }
  const obj = (root ?? {}) as Record<string, Json>;
  return { ...obj, [head]: setAt(obj[head], rest, next) };
}

type Ctx = {
  locked: string[];
  resizable: Record<string, Range>;
  imageMode: boolean;
  images: string[];
  errors: Map<string, string[]>;
  dir: "ltr" | "rtl";
  onChange: (path: string, next: Json) => void;
};

function FieldErrors({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <ul className="mt-1 space-y-0.5 text-xs text-red-700" role="alert">
      {messages.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  );
}

function ImagePicker({ id, value, ctx, path, invalid }: { id: string; value: string; ctx: Ctx; path: string; invalid: boolean }) {
  const listId = `${id}-list`;
  return (
    <div className="flex items-start gap-3">
      {/* Önizleme yalnız kayıtlı site görselinden yapılır. */}
      {ctx.images.includes(value) ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="h-16 w-24 flex-none rounded border border-slate-200 object-cover" />
      ) : (
        <div className="flex h-16 w-24 flex-none items-center justify-center rounded border border-dashed border-slate-300 text-[10px] text-slate-400">önizleme yok</div>
      )}
      <div className="min-w-0 flex-1">
        <input
          id={id}
          list={listId}
          value={value}
          onChange={(e) => ctx.onChange(path, e.target.value)}
          aria-invalid={invalid}
          className={`${inputClass} font-mono text-xs`}
          spellCheck={false}
        />
        <datalist id={listId}>
          {ctx.images.map((src) => (
            <option key={src} value={src} />
          ))}
        </datalist>
        <p className="mt-1 text-[11px] text-slate-500">Yalnız medya kütüphanesindeki görseller kabul edilir.</p>
      </div>
    </div>
  );
}

function Field({ def, value, path, ctx }: { def: Json; value: Json; path: string; ctx: Ctx }) {
  const key = path.split(".").pop() ?? path;
  const id = `f-${path.replace(/\./g, "-")}`;
  const messages = ctx.errors.get(path);
  const isLocked = matchAny(ctx.locked, path);

  if (typeof def === "string") {
    const text = typeof value === "string" ? value : "";
    if (isLocked) {
      return (
        <div>
          <span className="mb-1 block text-xs font-medium text-slate-600">{labelOf(key)} (kodla yönetilir)</span>
          <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">{text}</p>
        </div>
      );
    }
    const long = def.length > 110 || def.includes("\n");
    return (
      <div>
        <label htmlFor={id} className="mb-1 flex items-center justify-between text-xs font-medium text-slate-600">
          <span>{labelOf(key)}</span>
          {!ctx.imageMode ? <span className="font-normal text-slate-400">{text.length} karakter</span> : null}
        </label>
        {ctx.imageMode ? (
          <ImagePicker id={id} value={text} ctx={ctx} path={path} invalid={Boolean(messages)} />
        ) : long ? (
          <textarea
            id={id}
            value={text}
            dir={ctx.dir}
            rows={Math.min(10, Math.max(3, Math.ceil(text.length / 110)))}
            onChange={(e) => ctx.onChange(path, e.target.value)}
            aria-invalid={Boolean(messages)}
            className={inputClass}
          />
        ) : (
          <input id={id} value={text} dir={ctx.dir} onChange={(e) => ctx.onChange(path, e.target.value)} aria-invalid={Boolean(messages)} className={inputClass} />
        )}
        <FieldErrors messages={messages} />
      </div>
    );
  }

  if (Array.isArray(def)) {
    const list = Array.isArray(value) ? value : [];
    const range = rangeFor(ctx.resizable, path);
    const canEdit = Boolean(range) && !isLocked;
    return (
      <fieldset className="rounded-lg border border-slate-200 p-3">
        <legend className="px-1 text-xs font-semibold text-slate-700">
          {labelOf(key)} {range ? <span className="font-normal text-slate-400">({range.min}–{range.max} öğe)</span> : null}
        </legend>
        <FieldErrors messages={messages} />
        <div className="space-y-3">
          {list.map((item, i) => (
            <div key={i} className="relative">
              <Field def={def[i] ?? def[0]} value={item} path={`${path}.${i}`} ctx={ctx} />
              {canEdit && range && list.length > range.min ? (
                <button
                  type="button"
                  onClick={() => ctx.onChange(path, list.filter((_, j) => j !== i))}
                  className="mt-1 text-xs text-red-700 hover:underline"
                >
                  Bu öğeyi kaldır
                </button>
              ) : null}
            </div>
          ))}
        </div>
        {canEdit && range && list.length < range.max && def.length > 0 ? (
          <button type="button" onClick={() => ctx.onChange(path, [...list, blank(def[def.length - 1])])} className={`mt-3 ${secondaryButtonClass}`}>
            + Öğe ekle
          </button>
        ) : null}
      </fieldset>
    );
  }

  if (def && typeof def === "object") {
    const obj = (value && typeof value === "object" && !Array.isArray(value) ? value : {}) as Record<string, Json>;
    const entries = Object.entries(def);
    const content = (
      <div className="space-y-3">
        <FieldErrors messages={messages} />
        {entries.map(([k, d]) => (
          <Field key={k} def={d} value={obj[k]} path={path ? `${path}.${k}` : k} ctx={ctx} />
        ))}
      </div>
    );
    if (!path || /^\d+$/.test(key)) return <div className={path ? "rounded-lg bg-slate-50 p-3" : ""}>{content}</div>;
    return (
      <fieldset className="rounded-lg border border-slate-200 p-3">
        <legend className="px-1 text-xs font-semibold text-slate-700">{labelOf(key)}</legend>
        {content}
      </fieldset>
    );
  }

  if (typeof def === "boolean" && !isLocked) {
    // Onay anahtarları (ör. doğrulanmış içeriği yayınla): yalnız açık/kapalı değer kaydedilir.
    return (
      <div>
        <label htmlFor={id} className="flex items-start gap-2.5 text-sm text-slate-700">
          <input
            id={id}
            type="checkbox"
            checked={value === true}
            onChange={(e) => ctx.onChange(path, e.target.checked)}
            aria-invalid={Boolean(messages)}
            className="mt-0.5 h-4 w-4 flex-none rounded border-slate-300"
          />
          <span>{labelOf(key)}</span>
        </label>
        <FieldErrors messages={messages} />
      </div>
    );
  }

  return <p className="text-xs text-slate-500">{labelOf(key)}: {String(value)} (düzenlenemez)</p>;
}

export function ContentEditor(props: ContentEditorProps) {
  const [value, setValue] = useState<Json>(props.value);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [hasDraft, setHasDraft] = useState(props.hasDraft);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [errors, setErrors] = useState<{ path: string; message: string }[]>([]);
  const [confirming, setConfirming] = useState<null | "publish" | "discard" | "revert">(null);
  const dirtyRef = useRef(false);
  dirtyRef.current = dirty;

  const errorMap = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const e of errors) map.set(e.path, [...(map.get(e.path) ?? []), e.message]);
    return map;
  }, [errors]);

  const onChange = useCallback((path: string, next: Json) => {
    setValue((current) => setAt(current, path ? path.split(".") : [], next));
    setDirty(true);
  }, []);

  const handle = useCallback((result: ContentActionResult, success?: string) => {
    if (result.ok) {
      setErrors([]);
      setStatus({ tone: "ok", text: result.message ?? success ?? "Kaydedildi." });
      return true;
    }
    setErrors(result.fieldErrors ?? []);
    setStatus({ tone: "error", text: result.error });
    return false;
  }, []);

  const save = useCallback(
    async (autosave: boolean) => {
      setBusy(autosave ? "autosave" : "save");
      try {
        const result = await saveDraftAction(props.target as never, JSON.stringify(value), autosave);
        const ok = handle(result, autosave ? `Otomatik kaydedildi (${new Date().toLocaleTimeString("tr-TR")}).` : "Taslak kaydedildi. Yayına alınana kadar sitede görünmez.");
        if (ok) {
          setDirty(false);
          setHasDraft(true);
        }
        return ok;
      } catch {
        setStatus({ tone: "error", text: "Bağlantı hatası; değişiklikler kaydedilmedi." });
        return false;
      } finally {
        setBusy(null);
      }
    },
    [handle, props.target, value],
  );

  // Otomatik taslak kaydı: son değişiklikten 20 sn sonra (geçersiz içerik kaydedilmez, hatalar gösterilir).
  useEffect(() => {
    if (!dirty) return;
    const timer = setTimeout(() => void save(true), AUTOSAVE_MS);
    return () => clearTimeout(timer);
  }, [dirty, save]);

  // Kaydedilmemiş değişiklik uyarısı (sekme kapatma, yenileme ve dil sekmesi bağlantıları).
  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!dirtyRef.current) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  const run = async (kind: "publish" | "discard" | "revert" | "synced") => {
    setConfirming(null);
    if (kind === "publish" && dirty && !(await save(false))) return;
    setBusy(kind);
    try {
      const action = { publish: publishAction, discard: discardDraftAction, revert: revertToDefaultAction, synced: markSyncedAction }[kind];
      if (handle(await action(props.target as never))) {
        setDirty(false);
        dirtyRef.current = false;
        window.location.reload();
      }
    } catch {
      setStatus({ tone: "error", text: "Bağlantı hatası." });
    } finally {
      setBusy(null);
    }
  };

  const ctx: Ctx = { locked: props.locked, resizable: props.resizable, imageMode: props.imageMode, images: props.images, errors: errorMap, dir: props.dir, onChange };
  const def = props.defaultValue as Record<string, Json>;
  const obj = value as Record<string, Json>;
  const grouped = props.groups
    ? [
        ...props.groups.map((g) => ({ ...g, keys: g.keys.filter((k) => k in def) })),
        { id: "other", label: "Diğer alanlar", keys: Object.keys(def).filter((k) => !props.groups!.some((g) => g.keys.includes(k))) },
      ].filter((g) => g.keys.length)
    : [{ id: "all", label: "Alanlar", keys: Object.keys(def) }];

  const confirmText = {
    publish: "Bu taslak canlı sitede yayınlanacak. Önizlemeyi kontrol ettiniz mi?",
    discard: "Taslak silinecek; yayındaki içerik değişmez. Devam edilsin mi?",
    revert: "Panelden yayınlanan içerik kaldırılacak ve sayfa koddaki içeriğe dönecek (revizyon geçmişi korunur). Devam edilsin mi?",
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void save(false);
        }}
        className="space-y-6"
        noValidate
      >
        {errors.length ? (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            <p className="font-semibold">Kaydedilmedi: {errors.length} alan geçersiz.</p>
            <ul className="mt-1 list-disc ps-5 text-xs">
              {errors.slice(0, 8).map((e) => (
                <li key={`${e.path}-${e.message}`}>
                  <a className="underline" href={`#f-${e.path.replace(/\./g, "-")}`}>
                    {e.path || "içerik"}
                  </a>
                  : {e.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {grouped.map((g) => (
          <section key={g.id} className="rounded-xl border border-slate-200 bg-white p-4" aria-labelledby={`g-${g.id}`}>
            <h2 id={`g-${g.id}`} className="mb-3 text-sm font-semibold text-slate-900">
              {g.label}
            </h2>
            <div className="space-y-4">
              {g.keys.map((k) => (
                <Field key={k} def={def[k]} value={obj?.[k]} path={k} ctx={ctx} />
              ))}
            </div>
          </section>
        ))}
      </form>

      <aside className="space-y-3 xl:sticky xl:top-4 xl:self-start">
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
          <p className="font-semibold text-slate-900">Durum</p>
          <p className="mt-1 text-slate-600">
            {dirty ? "Kaydedilmemiş değişiklik var" : hasDraft ? "Yayınlanmamış taslak var" : props.hasPublished ? "Yayında (panel içeriği)" : "Yayında (koddaki içerik)"}
          </p>
          {status ? (
            <p role={status.tone === "error" ? "alert" : "status"} className={`mt-2 text-xs ${status.tone === "error" ? "text-red-700" : "text-emerald-700"}`}>
              {status.text}
            </p>
          ) : null}
          <div className="mt-4 grid gap-2">
            <button type="button" onClick={() => void save(false)} disabled={Boolean(busy) || !dirty} className={buttonClass}>
              {busy === "save" ? "Kaydediliyor…" : "Taslağı kaydet"}
            </button>
            {props.previewHref ? (
              <a href={props.previewHref} target="_blank" rel="noopener" className={`${secondaryButtonClass} ${dirty ? "pointer-events-none opacity-50" : ""}`} aria-disabled={dirty}>
                Önizle (yeni sekme)
              </a>
            ) : null}
            {props.previewHref ? (
              // API route: istemci yönlendirmesi değil, tam sayfa isteği gerekir.
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a href="/admin/api/preview/exit" className="text-center text-xs text-slate-500 hover:underline">
                Önizleme modunu kapat
              </a>
            ) : null}
            {props.canPublish ? (
              <button type="button" onClick={() => setConfirming("publish")} disabled={Boolean(busy) || (!hasDraft && !dirty)} className={buttonClass}>
                Yayınla
              </button>
            ) : (
              <p className="text-xs text-slate-500">Yayına alma yetkisi Admin ve Super Admin rolündedir.</p>
            )}
            {hasDraft ? (
              <button type="button" onClick={() => setConfirming("discard")} disabled={Boolean(busy)} className={secondaryButtonClass}>
                Taslağı sil
              </button>
            ) : null}
            {props.canPublish && props.hasPublished ? (
              <button type="button" onClick={() => setConfirming("revert")} disabled={Boolean(busy)} className={secondaryButtonClass}>
                Koddaki içeriğe dön
              </button>
            ) : null}
            {props.canMarkSynced ? (
              <button type="button" onClick={() => void run("synced")} disabled={Boolean(busy)} className={secondaryButtonClass}>
                Çeviri güncel (değişiklik gerekmiyor)
              </button>
            ) : null}
          </div>
          <p className="mt-3 text-[11px] text-slate-500">Değişiklikler 20 sn sonra otomatik taslak olarak kaydedilir. Taslaklar yalnız yetkili önizlemede görünür.</p>
        </div>
        {confirming ? (
          <div role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm">
            <p id="confirm-title" className="font-semibold text-amber-900">
              Onay gerekiyor
            </p>
            <p className="mt-1 text-amber-900">{confirmText[confirming]}</p>
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={() => void run(confirming)} className={buttonClass}>
                Onayla
              </button>
              <button type="button" onClick={() => setConfirming(null)} className={secondaryButtonClass}>
                Vazgeç
              </button>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
