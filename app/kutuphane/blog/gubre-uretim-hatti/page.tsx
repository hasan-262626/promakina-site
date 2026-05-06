import type { Metadata } from "next";
import SourcePage from "../[slug]/page";

export const metadata: Metadata = {
  title: "Gübre Üretim Hattı | Proses, Makine, Kapasite | Pro Makina",
  description:
    "Gübre üretim hattı kurulumu; hammadde hazırlama, granülasyon, kurutma, eleme ve paketleme akışları için teknik rehber.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog/gubre-uretim-hatti",
  },
};

export default function Page() {
  return <SourcePage params={Promise.resolve({ slug: "gubre-uretim-hatti-nasil-kurulur" })} />;
}
