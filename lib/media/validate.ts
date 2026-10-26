import sharp from "sharp";

/**
 * Yükleme doğrulaması (sunucu tarafı). Sıra: boyut → uzantı → dosya imzası (magic bytes) → uzantı/imza eşleşmesi →
 * sharp ile çözümleme ve piksel boyutu → yeniden kodlama. Yeniden kodlama EXIF/GPS dahil tüm üst veriyi atar ve
 * dosyaya gömülmüş ek içeriği (polyglot) temizler. SVG kabul edilmez (script taşıyabilir).
 */

/** Vercel fonksiyon istek gövdesi sınırı 4,5 MB olduğu için üst sınır 4 MB'dir. */
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
export const MIN_DIMENSION = 16;
export const MAX_DIMENSION = 8000;

export type ImageFormat = "jpeg" | "png" | "webp" | "avif";
export const EXTENSION_OF: Record<ImageFormat, string> = { jpeg: "jpg", png: "png", webp: "webp", avif: "avif" };
export const MIME_OF: Record<ImageFormat, string> = { jpeg: "image/jpeg", png: "image/png", webp: "image/webp", avif: "image/avif" };
const ALLOWED_EXTENSIONS: Record<string, ImageFormat> = { jpg: "jpeg", jpeg: "jpeg", png: "png", webp: "webp", avif: "avif" };

export class UploadError extends Error {}

export function detectFormat(bytes: Uint8Array): ImageFormat | null {
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.subarray(start, end));
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpeg";
  if (bytes.length >= 8 && [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((b, i) => bytes[i] === b)) return "png";
  if (bytes.length >= 12 && ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "webp";
  if (bytes.length >= 12 && ascii(4, 8) === "ftyp" && ["avif", "avis"].includes(ascii(8, 12))) return "avif";
  return null;
}

export type ProcessedImage = { buffer: Buffer; format: ImageFormat; width: number; height: number; size: number };

export async function processUpload(fileName: string, input: Uint8Array): Promise<ProcessedImage> {
  if (input.byteLength === 0) throw new UploadError("Dosya boş.");
  if (input.byteLength > MAX_UPLOAD_BYTES) throw new UploadError("Dosya 4 MB sınırını aşıyor.");
  const ext = fileName.toLowerCase().match(/\.([a-z0-9]{1,5})$/)?.[1] ?? "";
  if (ext === "svg" || ext === "svgz") throw new UploadError("SVG kabul edilmez (güvenlik politikası). PNG, JPG, WebP veya AVIF yükleyin.");
  const expected = ALLOWED_EXTENSIONS[ext];
  if (!expected) throw new UploadError("Yalnız JPG, PNG, WebP ve AVIF dosyaları yüklenebilir.");
  const detected = detectFormat(input);
  if (!detected) throw new UploadError("Dosya içeriği bir görsel değil (dosya imzası tanınmadı).");
  if (detected !== expected) throw new UploadError("Dosya uzantısı içerikle uyuşmuyor.");

  let image: ReturnType<typeof sharp>;
  let meta: Awaited<ReturnType<ReturnType<typeof sharp>["metadata"]>>;
  try {
    // limitInputPixels: sıkıştırma bombasına karşı (40 MP üstü reddedilir).
    image = sharp(Buffer.from(input), { limitInputPixels: 40_000_000, failOn: "error" });
    meta = await image.metadata();
  } catch {
    throw new UploadError("Görsel çözümlenemedi (bozuk veya desteklenmeyen dosya).");
  }
  const sharpFormat = meta.format === "heif" ? "avif" : meta.format;
  if (sharpFormat !== detected) throw new UploadError("Görsel biçimi doğrulanamadı.");
  const { width = 0, height = 0 } = meta;
  if (width < MIN_DIMENSION || height < MIN_DIMENSION) throw new UploadError(`Görsel en az ${MIN_DIMENSION}×${MIN_DIMENSION} piksel olmalı.`);
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) throw new UploadError(`Görsel en fazla ${MAX_DIMENSION} piksel genişlik/yükseklikte olabilir.`);

  let buffer: Buffer;
  try {
    const pipeline = image.rotate(); // EXIF yönü uygulanır; üst veri çıktıya yazılmaz.
    buffer = await (detected === "jpeg"
      ? pipeline.jpeg({ quality: 86, mozjpeg: true })
      : detected === "png"
        ? pipeline.png({ compressionLevel: 9 })
        : detected === "webp"
          ? pipeline.webp({ quality: 86 })
          : pipeline.avif({ quality: 60 })
    ).toBuffer();
  } catch {
    throw new UploadError("Görsel işlenemedi.");
  }
  const out = await sharp(buffer).metadata();
  return { buffer, format: detected, width: out.width ?? width, height: out.height ?? height, size: buffer.byteLength };
}
