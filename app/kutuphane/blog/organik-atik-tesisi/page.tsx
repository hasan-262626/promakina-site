import type { Metadata } from "next";
import SourcePage from "../[slug]/page";

export const metadata: Metadata = {
  title: "Organik Atık Tesisi | Proses, Makine, Kapasite | Pro Makina",
  description:
    "Organik atık tesisi kurulumu; kabul, ayrıştırma, kompost, biyogaz ve son ürün hazırlama adımları için teknik rehber.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog/organik-atik-tesisi",
  },
};

export default function Page() {
  return <SourcePage params={Promise.resolve({ slug: "organik-atik-isleme-tesisi" })} />;
}
