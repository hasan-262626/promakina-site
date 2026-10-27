import { createHash } from "node:crypto";

/**
 * Yapı doğrulayıcı: panelden gelen içerik, kodda tanımlı varsayılan içeriğin yapısıyla birebir aynı olmalıdır.
 * Böylece içerik değişebilir ama sayfa şablonu (alan adları, türler, liste sınırları) bozulamaz.
 */

export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

export type ShapeRules = {
  /** Panelde düzenlenemeyen alanlar (ör. "process.flow"); kayıtta her zaman kod değeri kullanılır. "*" dizi indeksidir. */
  locked?: string[];
  /** Eleman eklenip çıkarılabilen diziler. Diğer diziler kod içeriğiyle aynı uzunlukta kalır. */
  resizable?: Record<string, { min: number; max: number }>;
  /** Görsel yolu olan alanlar (değer yalnız kayıtlı bir medya dosyası olabilir). */
  isImage?: (path: string) => boolean;
};

export type ShapeError = { path: string; message: string };

const MAX_TEXT = 5000;
const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
/** Şablonlar düz metin render eder; HTML/etiket benzeri girdi kabul edilmez. */
const HTML_LIKE = /<\s*[a-zA-Z!/?]/;

/** "a.b.0.c" → kural deseni "a.b.*.c" ile eşleşir. */
export function pathMatches(pattern: string, path: string) {
  const p = pattern.split(".");
  const a = path.split(".");
  return p.length === a.length && p.every((seg, i) => seg === "*" || seg === a[i]);
}

const matchAny = (patterns: string[] | undefined, path: string) => (patterns ?? []).some((p) => pathMatches(p, path));

function resizableRule(rules: ShapeRules, path: string) {
  for (const [pattern, rule] of Object.entries(rules.resizable ?? {})) if (pathMatches(pattern, path)) return rule;
  return undefined;
}

/** Alt öğe doğrulaması için kural desenlerini öğe köküne göre yeniden yazar ("sections.*.paragraphs" → "paragraphs"). */
function rebase(resizable: ShapeRules["resizable"], itemPath: string): ShapeRules["resizable"] {
  const out: NonNullable<ShapeRules["resizable"]> = {};
  const depth = itemPath.split(".").length;
  for (const [pattern, rule] of Object.entries(resizable ?? {})) {
    const segs = pattern.split(".");
    if (segs.length > depth && pathMatches(segs.slice(0, depth).join("."), itemPath)) out[segs.slice(depth).join(".")] = rule;
  }
  return out;
}

const isObject = (v: unknown): v is Record<string, Json> => typeof v === "object" && v !== null && !Array.isArray(v);

export function validateShape(
  def: Json,
  value: unknown,
  rules: ShapeRules = {},
  imageExists: (src: string) => boolean = () => true,
): ShapeError[] {
  const errors: ShapeError[] = [];
  const walk = (d: Json, v: unknown, path: string) => {
    if (errors.length > 50) return;
    if (path && matchAny(rules.locked, path)) return; // kilitli alan kayıt öncesi kod değeriyle değiştirilir
    if (typeof d === "string") {
      if (typeof v !== "string") return void errors.push({ path, message: "Metin bekleniyor" });
      const max = Math.min(MAX_TEXT, Math.max(400, d.length * 4));
      if (d.trim() && !v.trim()) errors.push({ path, message: "Bu alan boş bırakılamaz" });
      if (v.length > max) errors.push({ path, message: `En fazla ${max} karakter` });
      if (CONTROL.test(v)) errors.push({ path, message: "Geçersiz kontrol karakteri" });
      if (HTML_LIKE.test(v)) errors.push({ path, message: "HTML veya etiket kullanılamaz; düz metin yazın" });
      if (rules.isImage?.(path) && !imageExists(v)) errors.push({ path, message: "Görsel, medya kütüphanesinde kayıtlı bir dosya olmalı" });
      return;
    }
    if (typeof d === "number" || typeof d === "boolean" || d === null) {
      if (typeof v !== typeof d || (d === null && v !== null)) errors.push({ path, message: "Geçersiz değer türü" });
      return;
    }
    if (Array.isArray(d)) {
      if (!Array.isArray(v)) return void errors.push({ path, message: "Liste bekleniyor" });
      const rule = resizableRule(rules, path);
      if (rule) {
        if (v.length < rule.min || v.length > rule.max) errors.push({ path, message: `${rule.min}-${rule.max} öğe olmalı` });
      } else if (v.length !== d.length) {
        errors.push({ path, message: `Öğe sayısı ${d.length} olmalı (şablon sabit)` });
      }
      if (d.length === 0 && v.length > 0) {
        if (!rule) return void errors.push({ path, message: "Bu liste boş kalmalı" });
        return void errors.push({ path, message: "Bu listeye öğe eklenemez (şablonda örnek öğe yok)" });
      }
      v.forEach((item, i) => {
        const child = path ? `${path}.${i}` : String(i);
        if (!rule) return walk(d[i] ?? d[0], item, child);
        // Eleman sayısı değişebilen listelerde öğe, koddaki öğe şekillerinden herhangi biriyle eşleşebilir.
        let best: ShapeError[] | null = null;
        for (const template of d) {
          const sub = validateShape(template, item, { ...rules, locked: [], resizable: rebase(rules.resizable, child) }, imageExists);
          if (!best || sub.length < best.length) best = sub;
          if (sub.length === 0) break;
        }
        for (const e of best ?? []) errors.push({ path: e.path ? `${child}.${e.path}` : child, message: e.message });
      });
      return;
    }
    if (isObject(d)) {
      if (!isObject(v)) return void errors.push({ path, message: "Nesne bekleniyor" });
      const dk = Object.keys(d).sort();
      const vk = Object.keys(v).sort();
      const extra = vk.filter((k) => !(k in d));
      const missing = dk.filter((k) => !(k in v) && !matchAny(rules.locked, path ? `${path}.${k}` : k));
      if (extra.length) errors.push({ path, message: `Tanımsız alan: ${extra.join(", ")}` });
      if (missing.length) errors.push({ path, message: `Eksik alan: ${missing.join(", ")}` });
      for (const k of dk) if (k in v) walk(d[k], v[k], path ? `${path}.${k}` : k);
    }
  };
  walk(def, value, "");
  return errors;
}

/** Kilitli alanları kod değeriyle yeniden yazar (istemcinin gönderdiği değer yok sayılır). */
export function applyLocked(def: Json, value: Json, rules: ShapeRules, path = ""): Json {
  if (path && matchAny(rules.locked, path)) return def;
  if (Array.isArray(value)) {
    return value.map((item, i) => applyLocked(Array.isArray(def) ? (def[i] ?? def[0]) : def, item, rules, path ? `${path}.${i}` : String(i)));
  }
  if (isObject(value) && isObject(def)) {
    const out: Record<string, Json> = {};
    for (const k of Object.keys(def)) {
      const child = path ? `${path}.${k}` : k;
      out[k] = matchAny(rules.locked, child) ? def[k] : k in value ? applyLocked(def[k], value[k], rules, child) : def[k];
    }
    return out;
  }
  return value;
}

/**
 * Yayındaki kaydı güncel kod şablonuyla birleştirir (public sayfada kullanım için): kayıtta olmayan yeni alanlar ve
 * kilitli alanlar koddan gelir, şablonda artık olmayan alanlar düşer. Sonuç şablona uymuyorsa (ör. liste uzunluğu
 * değişmiş) null döner; sayfa koddaki içerikle çizilir. Kayıt sırasında doğrulanmış görseller burada yeniden denetlenmez.
 */
export function resolvePublished(def: Json, value: unknown, rules: ShapeRules = {}): Json | null {
  if (value === null || value === undefined) return null;
  const merged = applyLocked(def, value as Json, rules);
  return validateShape(def, merged, rules).length ? null : merged;
}

/** Satır sonlarını normalize eder, baştaki/sondaki boşlukları kırpar (anlamı değiştirmeden). */
export function normalizeText(value: Json): Json {
  if (typeof value === "string") return value.replace(/\r\n?/g, "\n").trim();
  if (Array.isArray(value)) return value.map(normalizeText);
  if (isObject(value)) return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, normalizeText(v)]));
  return value;
}

export function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  if (isObject(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

export function contentHash(value: unknown) {
  return createHash("sha256").update(stableStringify(value)).digest("hex").slice(0, 32);
}

/** Varsayılan içeriği JSON'a çevirir (undefined alanlar düşer). */
export function toJson<T>(value: T): Json {
  return JSON.parse(JSON.stringify(value)) as Json;
}
