"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Hero } from "../components/Hero";
import { homeMachineGroupCards } from "../home-machine-groups-data";

const seoWaveOneMachineLinks = [
  {
    title: "Helezon Konveyörler",
    description:
      "Vidalı konveyör, paslanmaz helezon ve dozajlama odaklı kapalı taşıma sistemlerini inceleyin.",
    href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
  },
  {
    title: "Bant Konveyörler",
    description:
      "Uzun hatlarda endüstriyel taşıma bandı ve bant konveyör imalatı çözümlerini görün.",
    href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
  },
  {
    title: "Kovalı Elevatörler",
    description:
      "Dikey taşıma, zincirli kovalı elevatör ve granül ürün yükseltme çözümlerini değerlendirin.",
    href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
  },
  {
    title: "Kurutma Tamburları",
    description:
      "Rotary dryer, döner kurutma tamburu ve yardımcı termal proses ekipmanlarını inceleyin.",
    href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
  },
];

const compostMachineHighlights = [
  {
    title: "Trommel Elekler",
    description:
      "Kompost eleme makinesi, atık eleme sistemi ve maden eleme ekipmanı uygulamalarını detaylı inceleyin.",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
  },
  {
    title: "Kompost Tamburu",
    description:
      "Organik atık kompost tamburu, belediye kompost tesisi tamburu ve döner kompost reaktörü yaklaşımını görün.",
    href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
  },
  {
    title: "Evsel Organik Atık İşleme",
    description:
      "Kompost prosesi içinde bu makinelerin nasıl konumlandığını sektörel sayfadan değerlendirin.",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
  },
];

export default function MachinesIndexPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero
        title="Makinalar & Ekipman"
        description="Prosese, kapasiteye ve malzeme yapısına uygun makina gruplarını tek çatı altında sunuyoruz. Tambur sistemlerinden taşıma ekipmanlarına, kırıcı ve parçalayıcılardan reaktör, tank, eleme, dolum ve depolama çözümlerine kadar farklı endüstriyel ihtiyaçlara uygun ekipman ailelerini kategori bazlı inceleyebilirsiniz."
        image="/images/makinalar1.png"
      />

      <section className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeMachineGroupCards.map((card) => (
              <article
                key={card.href}
                role="link"
                tabIndex={0}
                onClick={() => router.push(card.href)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(card.href);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.1)]"
              >
                <div className="flex h-full flex-col">
                  <div className="relative min-h-[220px] bg-slate-200">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1536px) 24vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex min-h-[280px] flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {card.title}
                    </h2>
                    {card.description ? (
                      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {card.description}
                      </p>
                    ) : null}
                    <ul className="mt-4 space-y-2 text-[15px] font-medium leading-6 text-slate-700">
                      {card.products.map((product) => (
                        <li key={typeof product === "string" ? product : product.href}>
                          {typeof product === "string" ? (
                            product
                          ) : (
                            <Link
                              href={product.href}
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex rounded-md py-0.5 transition hover:text-blue-700 hover:underline underline-offset-4"
                            >
                              {product.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                    {card.seoNote ? (
                      <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-[13px]">
                        {card.seoNote}
                      </p>
                    ) : null}
                    <div className="mt-auto pt-8">
                      <span className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition group-hover:border-blue-200 group-hover:text-blue-700">
                        {card.buttonLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Endüstriyel Makine Grupları
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Pro Makina; tambur sistemleri, konveyör sistemleri, helezonlar, elevatörler, kırıcılar, elekler,
                    reaktörler, tanklar ve paketleme ekipmanları gibi birçok başlıkta endüstriyel makine imalatı
                    gerçekleştirir. Bu ekipmanlar farklı sektörlerde kullanılsa da ortak nokta, proses mühendisliği
                    bakışıyla seçilmeleri gerektiğidir.
                  </p>
                  <p>
                    Gübre tesisi, kompost tesisi ve farklı dökme katı malzeme uygulamalarında doğru makina grubu seçimi,
                    hattın kapasitesini ve işletme güvenini doğrudan etkiler. Bu yüzden makina tarafını yalnız ürün
                    listesi olarak değil, üretim altyapısının omurgası olarak değerlendiriyoruz.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Tambur, Konveyör ve Proses Ekipmanları
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Kurutma tamburu, granülatör tamburu, soğutma tamburu, bantlı konveyörler, zincirli konveyörler ve
                    helezon sistemleri; proses ritmini belirleyen ana ekipman gruplarıdır. Özellikle{" "}
                    <Link href="/makinalar-ekipman/tambur-sistemleri" className="font-semibold text-blue-700 hover:text-blue-800">
                      tambur sistemleri
                    </Link>{" "}
                    ve{" "}
                    <Link href="/makinalar/tasima-ekipmanlari" className="font-semibold text-blue-700 hover:text-blue-800">
                      taşıma ekipmanları
                    </Link>{" "}
                    birlikte değerlendirildiğinde hat içi akış çok daha dengeli hale gelir.
                  </p>
                  <p>
                    Reaktörler, tanklar, elekler ve yardımcı proses ekipmanları da bu akışı tamamlar. Böylece yalnız
                    mekanik olarak çalışan değil, saha şartlarında sürdürülebilir sonuç üreten çözümler kurulabilir.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Özel İmalat ve Mühendislik Yaklaşımı
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Her proje farklı kapasite, ürün yapısı ve saha kısıtı içerir. Bu nedenle standart makina seçiminin
                    yeterli olmadığı noktalarda özel imalat yaklaşımı devreye girer. Pro Makina, anahtar teslim tesis
                    kurulumu ve proses mühendisliği kararlarını makine imalatı ile aynı zeminde birleştirir.
                  </p>
                  <p>
                    Daha geniş hizmet kapsamı için{" "}
                    <Link href="/hizmetler" className="font-semibold text-blue-700 hover:text-blue-800">
                      hizmetler
                    </Link>
                    , sektör uygulamaları için{" "}
                    <Link href="/sektorler" className="font-semibold text-blue-700 hover:text-blue-800">
                      sektörler
                    </Link>{" "}
                    ve örnek uygulamalar için{" "}
                    <Link href="/projeler" className="font-semibold text-blue-700 hover:text-blue-800">
                      projeler
                    </Link>{" "}
                    sayfalarımızı inceleyebilirsiniz.
                  </p>
                </div>
              </article>

              <div className="rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
                <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                  Projeniz için doğru makine kombinasyonunu ve mühendislik yaklaşımını birlikte netleştirelim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <div className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Öne Çıkan SEO Makina Sayfaları
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Helezon konveyör, bant konveyör, kovalı elevatör ve kurutma tamburu gibi yüksek
              arama niyeti taşıyan makina başlıklarını aşağıdaki detay sayfalarından doğrudan
              inceleyebilirsiniz.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {seoWaveOneMachineLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Sayfayı İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Kompost ve Organik Atıkta Öne Çıkan Makinalar
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Kompost tamburu, trommel elek ve evsel organik atık işleme çözümleri birlikte
              değerlendirildiğinde organik atık geri kazanımı için daha doğru ekipman kurgusu
              oluşturulabilir.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {compostMachineHighlights.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Sayfayı İncele
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Blog / Makaleler
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Ekipman seçimini yalnız ürün kataloğu üzerinden değil, gerçek proses davranışı
              üzerinden değerlendirmek isterseniz{" "}
              <Link href="/kutuphane/blog" className="font-semibold text-blue-700 hover:text-blue-800">
                blog / makaleler
              </Link>{" "}
              sayfamızdaki teknik içerikleri inceleyebilirsiniz. Kurutma tamburu hesabı,
              helezon konveyör kapasitesi ve granül gübre üretim süreci gibi başlıklar,
              makina seçimi kararını daha güvenli hale getirir.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] bg-blue-700 px-6 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.25)] sm:px-8 sm:py-12 md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              İletişim
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Projeniz için doğru ekipman seçimini birlikte yapalım
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/85">
              Kompost tesisi, gübre tesisi, geri dönüşüm, biyogaz ve endüstriyel proses
              uygulamalarına uygun makina ve ekipman seçimi için bizimle iletişime geçin.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/iletisim"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                İletişim Sayfasına Git
              </Link>
              <a
                href="tel:+905320580104"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
