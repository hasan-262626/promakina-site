import type { Metadata } from "next";
import SourcePage from "../[slug]/page";

export const metadata: Metadata = {
  title: "Biyogaz Ön İşlem | Besleme Hazırlığı ve Akış Yönetimi | Pro Makina",
  description:
    "Biyogaz ön işlem sistemleri; ayırma, kırma, karıştırma, bunker ve besleme akışı yönetimi için teknik rehber.",
  alternates: {
    canonical: "https://www.promakina.com.tr/kutuphane/blog/biyogaz-on-islem",
  },
};

export default function Page() {
  return <SourcePage params={Promise.resolve({ slug: "biyogaz-on-islem-sistemleri" })} />;
}
