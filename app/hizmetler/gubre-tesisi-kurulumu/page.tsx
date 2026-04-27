import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../../components/Hero";

export const metadata: Metadata = {
  title: "Gübre Tesisi Kurulumu | Anahtar Teslim Çözümler | Pro Makina",
  description:
    "Organomineral, granül ve sıvı gübre üretim tesisleri için anahtar teslim kurulum çözümleri. Proses tasarımı, makine imalatı ve devreye alma hizmetleri.",
  alternates: {
    canonical: "https://www.promakina.com.tr/hizmetler/gubre-tesisi-kurulumu",
  },
};

const plantTypes = [
  {
    title: "Organomineral Gübre Tesisi",
    description:
      "Organik ve mineral bileşenlerin kontrollü biçimde bir araya getirildiği, karıştırma, granülasyon ve son ürün hazırlama adımlarını bir arada barındıran tesis modelidir.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    description:
      "Tane boyutu kontrolü, kurutma, soğutma ve eleme dengesinin öne çıktığı, yüksek kapasiteli ve sürekli üretime uygun hat yapısı sunar.",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    description:
      "Çözündürme, reaktör, dozajlama, transfer ve stok tankları ile kontrollü sıvı üretimine odaklanan proses altyapısıdır.",
  },
  {
    title: "Toz Gübre Üretim Hattı",
    description:
      "Toz ürünlerin karıştırma, taşıma, eleme ve son ürün hazırlama süreçlerine odaklanan daha kompakt fakat kontrollü bir üretim kurgusudur.",
  },
];

const machineGroups = [
  "Konveyör sistemleri",
  "Helezon ve elevatörler",
  "Granülatör tamburu",
  "Kurutma tamburu",
  "Soğutma tamburu",
  "Elek sistemleri",
  "Reaktör ve tanklar",
  "Paketleme sistemleri",
];

const reasons = [
  "Proses tasarımı, makina imalatı ve saha montajını tek proje disiplini içinde yönetiyoruz.",
  "Türkiye pazarındaki ürün yapısına, saha koşullarına ve kapasite beklentilerine uygun çözüm geliştiriyoruz.",
  "Organomineral, granül, sıvı ve toz gübre hatlarında farklı yatırım modellerine göre ölçeklenebilir tesis kurgusu sunuyoruz.",
  "Yüksek verimli, dayanımlı ve uzun ömürlü makina imalatı ile üretim sürekliliğini destekliyoruz.",
];

const expertiseAreas = [
  {
    title: "Organomineral Gübre Tesisi",
    href: "/hizmetler/organomineral-gubre-tesisi",
    description:
      "Organik ve mineral bileşenlerin dengeli şekilde işlendiği, karışım kalitesi ve granül dayanımının öne çıktığı tesis çözümleri sunuyoruz.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description:
      "Granülasyon, kurutma, soğutma, eleme ve geri dönüş akışını birlikte yöneten yüksek verimli üretim hatları tasarlıyoruz.",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    href: "/hizmetler/sivi-gubre-uretim-tesisi",
    description:
      "Reaktör, tank, çözündürme ve dozajlama altyapısı ile kontrollü ve güvenli sıvı gübre üretim sistemleri kuruyoruz.",
  },
];

export default function FertilizerPlantSetupPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Hero
        title="Gübre Tesisi Kurulumu ve Anahtar Teslim Çözümler"
        description="Organomineral, granül, sıvı ve toz gübre üretim tesisleri için anahtar teslim mühendislik, makina imalatı, montaj ve devreye alma çözümleri sunuyoruz."
        image="/images/hizmetler1.png"
      >
        <Link
          href="/iletisim"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Teklif Al
        </Link>
        <a
          href="https://wa.me/905380631163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          WhatsApp
        </a>
      </Hero>

      <section className="section-space">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Kurulumu Nedir?
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
              <p>
                Gübre tesisi kurulumu, hammaddenin proses mantığına uygun şekilde
                hazırlanması, taşınması, karıştırılması, granül hale getirilmesi veya sıvı
                formda işlenmesi ve son ürün olarak piyasaya hazır hale getirilmesi için
                gerekli tüm üretim adımlarının aynı sistem içinde planlanmasıdır. Doğru bir
                gübre üretim hattı yalnızca ekipman listesinden oluşmaz; ürün davranışı,
                kapasite, saha yerleşimi, enerji altyapısı ve otomasyon seviyesi ile birlikte
                değerlendirilir.
              </p>
              <p>
                Türkiye pazarında organomineral gübre tesisi, granül gübre tesisi ve sıvı
                gübre üretim tesisi yatırımları öne çıkmaktadır. Bu yatırımların verimli
                çalışabilmesi için anahtar teslim gübre tesisi mantığıyla ilerlemek çoğu
                zaman daha güvenli bir sonuç verir. Böylece mühendislik, makina imalatı,
                montaj ve devreye alma aynı proje yaklaşımıyla ilerler.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Gübre Tesisi Türleri
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {plantTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Kullanılan Makinalar ve Ekipmanlar
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 sm:text-base">
              {machineGroups.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Neden Pro Makina?
            </h2>
            <div className="mt-5 grid gap-3">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10 sm:pb-14">
        <div className="site-container">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Uzmanlık Alanlarımız
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {expertiseAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Detayı İncele
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="seo-content pb-16 sm:pb-20">
        <div className="site-container">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10 lg:px-12">
            <div className="space-y-10">
              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Gübre Tesisi Kurulum Aşamaları
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Gübre tesisi kurulumu aşamaları, yatırımın ilk teknik kararından üretim
                    başlangıcına kadar birbirine bağlı şekilde ilerleyen bir mühendislik
                    sürecidir. İlk aşamada ürün tipi, hedef kapasite, reçete yapısı, vardiya
                    düzeni ve otomasyon seviyesi belirlenir. Bu safha yalnızca kapasite
                    seçimi değil, aynı zamanda hangi tip gübre üretim hattı kurulacağının da
                    netleştiği aşamadır. Organomineral gübre tesisi kurulacaksa bağlayıcı,
                    nem ve karışım homojenliği ön plana çıkar. Granül gübre tesisi
                    planlanıyorsa tane boyutu dağılımı, kurutma yükü ve geri dönüş akışı daha
                    erken safhada değerlendirilir.
                  </p>
                  <p>
                    İkinci aşamada saha yerleşimi, makine akışı, konveyör sistemleri,
                    bunkerler, helezon ve elevatörler ile tambur ekipmanlarının birbiriyle
                    ilişkisi kurgulanır. Burada amaç, hammaddenin tesise girişinden son ürünün
                    paketlenmesine kadar kesintisiz ve dengeli bir akış oluşturmaktır.
                    Sonraki adımda makina imalatı, çelik konstrüksiyon, elektrik ve otomasyon
                    altyapısı hazırlanır. Montaj aşamasında mekanik bağlantılar, enerji
                    hatları, kontrol sistemleri ve güvenlik bileşenleri entegre edilir.
                    Devreye alma sürecinde ise boş testler, yük altında çalışma testleri,
                    kapasite doğrulaması ve ürün kalite kontrolleri yapılır. Bu nedenle
                    anahtar teslim gübre tesisi modeli, tüm bu adımların tek merkezden
                    yönetilmesini sağlayarak yatırım riskini önemli ölçüde azaltır.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Organomineral Gübre Tesisi Kurulumu
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Organomineral gübre tesisi kurulumu, klasik bir toz veya basit karışım
                    hattına göre daha kontrollü bir proses yaklaşımı gerektirir. Bunun temel
                    nedeni, organik içerik ile mineral bileşenlerin aynı reçete içinde dengeli
                    davranmamasıdır. Organik kısmın nemi, lif yapısı, ince malzeme oranı ve
                    akış özelliği ile mineral hammaddenin yoğunluğu, tane boyutu ve reaksiyon
                    davranışı birlikte değerlendirilmelidir. Bu nedenle organomineral gübre
                    tesisi yatırımında yalnızca karıştırıcı seçmek yeterli olmaz; besleme,
                    dozajlama, granülasyon, kurutma, eleme ve geri dönüş hatlarının tamamı
                    birlikte kurgulanır.
                  </p>
                  <p>
                    Organomineral gübre tesisi süreçlerinde ürün standardını korumak için
                    karışım homojenliği, bağlayıcı uygulama, nem dengesi ve son granül
                    dayanımı özel önem taşır. Eğer hat granül ürün verecekse granülatör
                    tamburu, kurutma tamburu ve soğutma tamburu doğru yük altında
                    çalıştırılmalıdır. Elek sistemleri ile hat içi geri dönüş akışı da ürün
                    verimini belirler. Anahtar teslim gübre tesisi yaklaşımı burada kritik
                    avantaj sağlar; çünkü proses tasarımından makina imalatına kadar tüm
                    ekipmanlar aynı ürün hedefi etrafında uyumlu biçimde seçilir. Türkiye
                    pazarında organomineral gübre tesisi yatırımlarının artmasının temel
                    nedenlerinden biri, daha yüksek katma değerli ve pazar karşılığı olan
                    ürünlerin bu yapı ile üretilebilmesidir. Bu nedenle doğru mühendislik
                    yaklaşımı, yatırımın geri dönüşünü doğrudan etkiler.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Granül Gübre Üretim Tesisi Nasıl Kurulur?
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Granül gübre tesisi kurmak için öncelikle üretilecek son ürünün tane
                    boyutu, nem hedefi, reçete yapısı ve günlük ya da saatlik kapasitesi
                    belirlenmelidir. Çünkü granül gübre tesisi, yalnızca malzemeyi granül
                    forma getiren bir yapı değildir; aynı zamanda granüllerin dayanımını,
                    kuruluğunu, sınıflandırmasını ve depolamaya uygun hale gelmesini sağlayan
                    bütünleşik bir gübre üretim hattıdır. Bu nedenle hammaddenin beslenmesi,
                    karışımın hazırlanması, granülatör tamburu veya disk granülatör ile
                    granülasyon yapılması, ardından kurutma tamburu ve soğutma tamburu ile
                    prosesin dengelenmesi gerekir.
                  </p>
                  <p>
                    Kurutma sonrasında ürün elek sistemlerinden geçirilerek hedef granül
                    fraksiyonu ayrılır. İri ve ince fraksiyonlar geri dönüş hattına alınır,
                    uygun ürün ise paketleme veya depolamaya yönlendirilir. Konveyör
                    sistemleri, helezon ve elevatörler bu aşamalar arasında malzeme transferini
                    sağlar ve hat sürekliliğini korur. İyi tasarlanmış bir granül gübre
                    tesisi, hem kapasite dengesini korur hem de granül kırılmasını minimumda
                    tutar. Anahtar teslim gübre tesisi mantığında tüm bu adımlar tek bir
                    proses yaklaşımı içinde ele alındığı için ekipmanlar arasında uyum daha
                    yüksek olur. Türkiye pazarında rekabetçi üretim için granül gübre tesisi
                    kurulurken enerji verimi, bakım erişimi ve son ürün standardı mutlaka
                    birlikte değerlendirilmelidir.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Gübre Tesisi Maliyeti ve Yatırım Süreci
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Gübre tesisi maliyeti, sanılandan daha çok değişkene bağlıdır ve yalnızca
                    makina bedeli üzerinden değerlendirilmemelidir. Üretilecek ürün tipi,
                    kapasite, otomasyon seviyesi, granülasyon yapısı, kurutma ihtiyacı,
                    depolama sistemi, paketleme altyapısı ve saha montaj kapsamı toplam
                    yatırım üzerinde doğrudan etkili olur. Organomineral gübre tesisi ile
                    granül gübre tesisi arasında bile önemli maliyet farkları oluşabilir;
                    çünkü granül proseslerde kurutma tamburu, soğutma tamburu, elek sistemleri
                    ve geri dönüş hattı gibi ek ekipman grupları devreye girer. Sıvı ya da
                    toz ürün tarafında ise reaktör, tank, çözündürme ve dozajlama altyapısı
                    maliyet yapısını değiştirir.
                  </p>
                  <p>
                    Sağlıklı bir yatırım süreci için ilk aşamada teknik fizibilite yapılmalı,
                    ardından üretim modeli ve kapasite netleştirilmelidir. Sonrasında saha
                    planı, makina yerleşimi, enerji altyapısı, operatör akışı ve bakım
                    erişimi gibi kriterler birlikte ele alınır. Anahtar teslim gübre tesisi
                    modeli, yatırımcıya burada önemli bir avantaj sunar; çünkü proje
                    yönetimi, makina imalatı, montaj ve devreye alma tek merkezden ilerler.
                    Böylece eksik kapsam, uygunsuz ekipman veya sahada revizyon ihtiyacı gibi
                    riskler azalır. Türkiye’de gübre tesisi kurulumu planlayan işletmeler için
                    yatırım kararının yalnızca fiyat odaklı değil, üretim güvenilirliği ve
                    uzun vadeli işletme maliyeti odaklı verilmesi çok daha sağlıklı sonuç
                    üretir.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Anahtar Teslim Gübre Tesisi Çözümleri
                </h2>
                <div className="mt-5 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
                  <p>
                    Anahtar teslim gübre tesisi çözümleri, yatırımcının farklı ekipman
                    tedarikçileri, montaj ekipleri ve mühendislik tarafları arasında zaman
                    kaybetmeden ilerlemesini sağlar. Bu modelde amaç yalnızca ekipmanları
                    bir araya getirmek değil, tüm süreci aynı teknik hedef doğrultusunda
                    yönetmektir. Gübre tesisi kurulumu için hammadde besleme sistemi,
                    konveyör sistemleri, helezon ve elevatörler, granülatör tamburu,
                    kurutma tamburu, soğutma tamburu, elek sistemleri, reaktör ve tanklar
                    ile paketleme grupları tek proje mantığında değerlendirilir. Böylece
                    her bir ekipman kendi başına değil, bütün prosesin parçası olarak seçilir.
                  </p>
                  <p>
                    Anahtar teslim gübre tesisi yaklaşımı özellikle organomineral gübre
                    tesisi ve granül gübre tesisi projelerinde büyük fayda sağlar; çünkü bu
                    yatırımların başarısı ekipmanlar arası uyuma doğrudan bağlıdır. Eğer
                    gübre üretim hattı içinde kurutma yükü, geri dönüş oranı, ürün akışı veya
                    eleme kapasitesi doğru dengelenmezse üretim kayıpları kaçınılmaz hale
                    gelir. Pro Makina bu noktada proses tasarımı, makina imalatı, montaj ve
                    devreye alma süreçlerini bir bütün olarak ele alır. Sonuçta yatırımcı,
                    yalnızca parçalı bir tedarik listesi değil; sahada uygulanabilir,
                    kapasiteye uyumlu ve uzun ömürlü bir gübre üretim tesisi altyapısı elde
                    eder.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-12 rounded-[28px] bg-blue-700 px-6 py-8 text-white shadow-[0_24px_70px_rgba(29,78,216,0.28)] sm:px-8 sm:py-10">
              <p className="max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                Projenize özel fizibilite ve teklif almak için bizimle iletişime geçin.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-blue-800 transition hover:bg-slate-100"
                >
                  Teklif Al
                </Link>
                <a
                  href="https://wa.me/905380631163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
