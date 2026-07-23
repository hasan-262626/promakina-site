import { permanentRedirect } from "next/navigation";

// Paket 2B-1: kütüphane sürümündeki özgün içerik (dolum/mamul stok/sevkiyat ve
// yatırım planlaması bölümleri) kanonik blog sürümüne aktarıldı. Eski URL 308 ile
// blog sürümüne kalıcı yönlendirilir.
export default function LegacyLiquidFertilizerLibraryPage() {
  permanentRedirect("/kutuphane/blog/sivi-gubre-uretim-tesisi-nasil-kurulur");
}
