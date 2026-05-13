import Image from "next/image";
import Link from "next/link";
import { Hero } from "./Hero";
import { projectHubCards } from "../lib/project-pages-data";

export default function ProjectsHubExperience() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Projeler"
        description="Projeler bolumunde farkli sektorler icin gelistirdigimiz tesis kurgularini, proses yaklasimlarini ve teknik cozum yapilarini bir arada sunuyoruz. Gubre, kompost, biyogaz, kurutma, maden isleme ve ozel proses projelerine dogrudan ulasabilirsiniz."
        image="/images/fabrika1.jpg"
      />

      <section id="proje-basliklari" className="section-space">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectHubCards.map((project) => (
              <Link
                key={project.slug}
                href={`/projeler/${project.slug}`}
                className="group flex min-h-[240px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div className="flex flex-1 items-start gap-4">
                  <span className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {project.title}
                    </h2>
                    <p className="mt-3 flex-1 leading-7 text-slate-600">
                      {project.cardDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                      Projeyi Incele
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-bottom-space-lg">
        <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
          <div className="content-stack">
            <article>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Proje Gelistirme Yaklasimi
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                <p>
                  Pro Makina&apos;da proje gelistirme sureci yalnizca makine listesi hazirlamakla
                  baslamaz. Her yatirim; hammadde karakteri, hedef kapasite, urun formu, nem
                  orani, saha yerlesimi, bakim erisimi, enerji ihtiyaci ve gelecekteki buyume
                  ihtimaliyle birlikte ele alinir. Bu nedenle gubre tesisi, kompost tesisi,
                  biyogaz, maden isleme, camur kurutma veya ozel proses hatlarinda once sistemin
                  tamamini okuyarak ilerleriz.
                </p>
                <p>
                  Amacimiz, yatirimciya yalnizca calisan makineler sunmak degil; uretim ritmi
                  dengeli, bakim erisimi dusunulmus, kapasite kayiplari azaltulmis ve sahada
                  uygulanabilir bir tesis omurgasi olusturmaktir. Ilk teknik degerlendirmeden
                  imalat, montaj ve devreye almaya kadar tum surec ayni muhendislik disiplini
                  icinde yonetilir.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Kapasite ve Proses Analizi
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                <p>
                  Basarili bir tesis projesinde kapasite hesabi, yalnizca saatlik tonaj uzerinden
                  yapilmaz. Malzemenin yogunlugu, tane boyutu, nem orani, akiskanligi,
                  asindiriciligi, kurutma yuku, eleme hassasiyeti, tasima mesafesi ve urun cikis
                  standardi birlikte degerlendirilmelidir. Kurutma tamburu, konveyor, bunker,
                  reaktor, elek, filtre, paketleme ve yardimci ekipmanlar ayni proses ritmine gore
                  secilmediginde yatirim sahada beklenen verimi vermez.
                </p>
                <p>
                  Pro Makina, kapasite ve proses analizini yatirimin en kritik muhendislik adimi
                  olarak gorur. Bu analiz sayesinde dogru makine kombinasyonu belirlenir, gereksiz
                  ekipman maliyetleri azaltulur, ileride olusabilecek darboğazlar ongorulur ve
                  tesisin uzun vadeli isletme guvenligi guclendirilir.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Imalattan Devreye Almaya Uygulama Sureci
              </h2>
              <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                <p>
                  Projenin sahada basarili olmasi, cizimde dogru gorunen sistemin uretim, montaj
                  ve devreye alma asamalarinda da ayni disiplinle uygulanmasina baglidir. Pro
                  Makina; proses muhendisligi, makine imalati, saha montaji, mekanik entegrasyon,
                  test calismalari ve ilk uretim kontrollerini butuncul bir proje akisiyla
                  yonetir.
                </p>
                <p>
                  Bu yaklasim ozellikle cok ekipmanli tesislerde buyuk avantaj saglar. Gubre,
                  kompost, kurutma, maden, biyogaz ve ozel proses projelerinde her makine yalniz
                  kendi gorevini degil, hattin tamamindaki etkisini de tasiyacak sekilde
                  konumlandirilir. Boylece yatirimci icin daha ongorulebilir, kontrol edilebilir ve
                  sahada surdurulebilir bir uretim altyapisi olusturulur.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] bg-blue-700 px-6 py-10 text-white sm:px-8 sm:py-12 md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Projenizi teknik ve ticari acidan birlikte degerlendirelim
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/84 sm:text-base">
            Hammadde turu, hedef kapasite, nem orani, urun formu ve saha kosullarinizi paylasin;
            projeniz icin dogru proses akisini, makine omurgasini ve teklif yaklasimini birlikte
            netlestirelim.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/iletisim"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Teknik Gorusme Talep Et
            </Link>
            <a
              href="https://wa.me/905320580104"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              WhatsApp ile Gorus
            </a>
            <Link
              href="/hizmetler"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Hizmetleri Incele
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
