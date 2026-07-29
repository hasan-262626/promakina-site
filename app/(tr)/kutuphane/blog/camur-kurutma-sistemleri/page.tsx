import { permanentRedirect } from "next/navigation";

// Paket 2B-2: çoğul sürümdeki özgün içerik (mekanik susuzlaştırma ilişkisi, teknoloji
// seçim kriterleri, koku/emisyon yönetimi ve son ürün stratejisi) kanonik tekil
// sürüme aktarıldı. Eski URL 308 ile kalıcı yönlendirilir.
export default function LegacySludgeDryingSystemsPage() {
  permanentRedirect("/kutuphane/blog/camur-kurutma-sistemi");
}
