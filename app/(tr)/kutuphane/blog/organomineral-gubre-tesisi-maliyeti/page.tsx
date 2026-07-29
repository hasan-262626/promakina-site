import { permanentRedirect } from "next/navigation";

// Paket 2B-3: blog sürümündeki özgün teknik değerlendirme tablosu ve FAQ'lar,
// Google'da görünürlük alan kütüphane sürümüne aktarıldı. Eski URL 308 ile
// kalıcı yönlendirilir.
export default function LegacyOrganomineralCostBlogPage() {
  permanentRedirect("/kutuphane/organomineral-gubre-tesisi-maliyeti");
}
