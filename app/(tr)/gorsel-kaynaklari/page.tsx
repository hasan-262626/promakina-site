import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageCredits } from "../lib/image-credits";

const pageUrl = "https://www.promakina.com.tr/gorsel-kaynaklari";
const description =
  "Pro Makina web sitesinde kullanılan üçüncü taraf görsellerin kaynak, yazar ve lisans bilgileri.";

export const metadata: Metadata = {
  title: "Görsel Kaynakları ve Lisanslar",
  description,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Görsel Kaynakları ve Lisanslar",
    description,
    url: pageUrl,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "website",
  },
};

export default function ImageCreditsPage() {
  return (
    <main className="bg-white py-14 text-slate-900 sm:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Görsel Kaynakları ve Lisanslar
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Bu sayfada, Pro Makina web sitesinde kullanılan üçüncü taraf kaynaklı görsellerin eser adı, yazar,
            lisans ve kaynak bilgileri yer alır. Görseller ilgili lisans koşullarına uygun olarak kullanılmaktadır.
          </p>

          <ul className="mt-10 space-y-5">
            {imageCredits.map((credit) => (
              <li
                key={`${credit.localFile}|${credit.usedOn.href}`}
                className="grid gap-5 rounded-[24px] border border-slate-200 bg-white p-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-slate-100">
                  <Image src={credit.localFile} alt={credit.subject} fill sizes="(min-width: 640px) 180px, 100vw" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-slate-950">{credit.subject}</h2>
                  <dl className="mt-3 grid gap-x-4 gap-y-1.5 text-sm leading-6 sm:grid-cols-[110px_minmax(0,1fr)]">
                    <dt className="font-semibold text-slate-700">Eser</dt>
                    <dd className="break-words text-slate-600">
                      <a href={credit.source} target="_blank" rel="noopener noreferrer" className="text-[#154764] underline underline-offset-2 hover:text-[#278DC0]">
                        {credit.originalTitle}
                      </a>{" "}
                      (Wikimedia Commons)
                    </dd>
                    <dt className="font-semibold text-slate-700">Yazar</dt>
                    <dd className="text-slate-600">{credit.author}</dd>
                    <dt className="font-semibold text-slate-700">Lisans</dt>
                    <dd className="text-slate-600">
                      {credit.licenseUrl ? (
                        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-[#154764] underline underline-offset-2 hover:text-[#278DC0]">
                          {credit.license}
                        </a>
                      ) : (
                        credit.license
                      )}
                    </dd>
                    <dt className="font-semibold text-slate-700">Değişiklik</dt>
                    <dd className="text-slate-600">{credit.changes}</dd>
                    <dt className="font-semibold text-slate-700">Kullanıldığı sayfa</dt>
                    <dd className="text-slate-600">
                      <Link href={credit.usedOn.href} className="text-[#154764] underline underline-offset-2 hover:text-[#278DC0]">
                        {credit.usedOn.label}
                      </Link>
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm leading-7 text-slate-500">
            Bir görselin kaynak veya lisans bilgisiyle ilgili düzeltme talebiniz için{" "}
            <Link href="/iletisim" className="text-[#154764] underline underline-offset-2 hover:text-[#278DC0]">
              iletişim sayfasından
            </Link>{" "}
            bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
