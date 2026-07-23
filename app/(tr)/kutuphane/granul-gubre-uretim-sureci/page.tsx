import { permanentRedirect } from "next/navigation";

// Çift içerik tekilleştirmesi: kütüphane sürümü, kanonik blog sürümüne 308 ile
// kalıcı yönlendirilir. Asıl içerik /kutuphane/blog/granul-gubre-uretim-sureci.
export default function LegacyGranulFertilizerLibraryPage() {
  permanentRedirect("/kutuphane/blog/granul-gubre-uretim-sureci");
}
