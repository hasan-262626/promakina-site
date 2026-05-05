import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { sectorCards } from "../components/sector-subsectors-data";
import { trText } from "../lib/tr-text";

export const metadata: Metadata = {
  title: "Sektörler | Pro Makina",
  description:
    "Gübre, kompost, organik atık, biyogaz, madencilik, kimya, yem ve dökme katı malzeme sektörleri için çözümler.",
  alternates: {
    canonical: "https://www.promakina.com.tr/sektorler",
  },
};

export default function SectorsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#ffffff_100%)] text-slate-900">
      <section className="relative border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))]">
        <div className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-700">
              SEKTÖRLER
            </span>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Hangi sektörlere çözüm sunuyoruz?
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Farklı sektörlerin ihtiyaçlarına özel mühendislik çözümlerimizle verimliliği artırıyor, sürdürülebilir bir gelecek için üretim yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section id="sektor-basliklari" className="pb-20 pt-12 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sectorCards.map((sector) => (
              <article
                key={sector.slug}
                className="flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                    <Image src={sector.image} alt={trText(sector.alt)} fill sizes="56px" className="object-cover object-center" />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold leading-7 tracking-tight text-slate-950 sm:text-[20px]">
                      <Link
                        href={`/sektorler/${sector.slug}`}
                        className="inline-flex w-fit transition hover:text-blue-700"
                      >
                        {trText(sector.title)}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {sector.subLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/sektorler/${sector.slug}/${item.slug}`}
                      className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-sm hover:text-blue-700"
                    >
                      <span>{trText(item.label)}</span>
                      <span className="shrink-0 text-sm font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                        &gt;
                      </span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Hizmet Verilen Sektörler
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Pro Makina; gübre tesisi, kompost tesisi, organik atık değerlendirme, biyogaz, madencilik, kimya,
                    yem ve dökme katı malzeme işleme gibi farklı sektörlerde proses mühendisliği ve endüstriyel makine
                    imalatı çözümleri geliştirir. Her sektörün hammadde yapısı, nem karakteri ve kapasite beklentisi
                    farklı olduğu için mühendislik yaklaşımımızı sektörün kendi gerçeklerine göre şekillendiririz.
                  </p>
                  <p>
                    Bu yaklaşım, anahtar teslim tesis kurulumu kararlarının daha güvenli alınmasını sağlar ve süreçte
                    gereksiz revizyon riskini azaltır.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Atık, Gübre ve Proses Endüstrileri
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Gübre tesisi ve kompost tesisi uygulamalarında kurutma tamburu, eleme, dozajlama ve konveyör
                    sistemleri birlikte değerlendirilmelidir. Organik atık ve biyogaz tarafında ise ön işleme, besleme
                    ritmi ve son ürün yönetimi daha belirleyici hale gelir. Bu nedenle sektörel deneyim, yalnız ürün
                    bilgisi değil, proses davranışını da doğru okumayı gerektirir.
                  </p>
                  <p>
                    Teknik kapsamı görmek için{" "}
                    <Link href="/hizmetler" className="font-semibold text-blue-700 hover:text-blue-800">
                      hizmetler
                    </Link>{" "}
                    ve ekipman ailelerini incelemek için{" "}
                    <Link href="/makinalar" className="font-semibold text-blue-700 hover:text-blue-800">
                      makinalar
                    </Link>{" "}
                    sayfalarımızı birlikte değerlendirebilirsiniz.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Sektöre Özel Makine ve Tesis Tasarımı
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Sektöre özel makine ve tesis tasarımı; reaktörler, tanklar, tambur sistemleri, konveyör sistemleri,
                    bunkerler ve yardımcı proses ekipmanlarının doğru kombinasyonunu gerektirir. Pro Makina bu süreci{" "}
                    <Link href="/projeler" className="font-semibold text-blue-700 hover:text-blue-800">
                      projeler
                    </Link>{" "}
                    tarafındaki uygulama yaklaşımı ile destekler.
                  </p>
                  <p>
                    Eğer sektörünüze uygun çözüm yapısını daha net görmek istiyorsanız{" "}
                    <Link href="/kutuphane" className="font-semibold text-blue-700 hover:text-blue-800">
                      kütüphane
                    </Link>{" "}
                    içeriklerimizi inceleyebilir veya{" "}
                    <Link href="/iletisim" className="font-semibold text-blue-700 hover:text-blue-800">
                      iletişim
                    </Link>{" "}
                    sayfası üzerinden teknik görüşme talep edebilirsiniz.
                  </p>
                </div>
              </article>

              <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                  Sektörünüze özel proses mühendisliği, makine seçimi ve tesis kurgusu için bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Blog / Makaleler
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Gübre, kompost, organik atık, biyogaz ve proses endüstrilerinde yatırım kararı
              verirken teknik içerik desteği almak için{" "}
              <Link href="/kutuphane/blog" className="font-semibold text-blue-700 hover:text-blue-800">
                blog / makaleler
              </Link>{" "}
              sayfamızı inceleyebilirsiniz. Buradaki yazılar, sektör ihtiyaçlarını ekipman ve
              proses mantığıyla birlikte okumaya yardımcı olur.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
