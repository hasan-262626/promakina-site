// Medya envanteri: public/ altındaki görsel/video dosyaları, boyutları ve kaynak kodda nerede kullanıldıkları.
// Production'da kaynak dosyalar sunucuda bulunmadığından bu bilgi build sırasında üretilir (npm run build → prebuild).
// Çıktı yalnız dosya yolları ve sayısal bilgileri içerir; secret veya ortam değişkeni okunmaz.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const outFile = path.join(root, "lib", "admin", "generated", "media-manifest.json");
const MEDIA = /\.(jpe?g|png|webp|avif|gif|svg|mp4|webm|ico|pdf)$/i;
const MIME = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", avif: "image/avif", gif: "image/gif", svg: "image/svg+xml", mp4: "video/mp4", webm: "video/webm", ico: "image/x-icon", pdf: "application/pdf" };

function walk(dir, filter, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, filter, out);
    else if (filter(entry.name)) out.push(full);
  }
  return out;
}

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("media-manifest: sharp yok, boyutlar atlanacak");
}

// Kaynak dosyalarda tırnak içindeki /... medya yolları (boşluk ve Türkçe karakter içerebilir).
const usage = new Map();
const quoted = /["'`](\/[^"'`\n]+?\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm|ico|pdf))["'`]/gi;
for (const dir of ["app", "components", "lib"]) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs, (n) => /\.(tsx?|mjs|json)$/.test(n) && n !== "media-manifest.json")) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    for (const m of fs.readFileSync(file, "utf8").matchAll(quoted)) {
      let p = m[1];
      try {
        p = decodeURI(p);
      } catch {}
      if (!usage.has(p)) usage.set(p, new Set());
      usage.get(p).add(rel);
    }
  }
}

const items = [];
for (const file of walk(publicDir, (n) => MEDIA.test(n))) {
  const rel = "/" + path.relative(publicDir, file).replaceAll("\\", "/");
  const ext = path.extname(file).slice(1).toLowerCase();
  let width = null;
  let height = null;
  if (sharp && /^(jpe?g|png|webp|avif|gif)$/.test(ext)) {
    try {
      const meta = await sharp(file).metadata();
      width = meta.width ?? null;
      height = meta.height ?? null;
    } catch {}
  }
  items.push({ path: rel, size: fs.statSync(file).size, mime: MIME[ext] ?? "application/octet-stream", width, height, usedIn: [...(usage.get(rel) ?? [])].sort() });
}
items.sort((a, b) => a.path.localeCompare(b.path, "tr"));
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 0) + "\n");
console.log(`media-manifest: ${items.length} dosya, ${items.filter((i) => i.usedIn.length === 0).length} referanssız`);
