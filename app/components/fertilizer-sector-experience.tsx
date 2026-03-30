"use client";

import Link from "next/link";
import { ToolkitLead } from "./technical-toolkit";

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">{text}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const fertilizerTypes = [
  {
    title: "Organomineral Granül Gübre Tesisleri",
    text: "Organik madde ile mineral besin elementlerini bir araya getiren organomineral gübre üretim hatlarını tasarlıyoruz. Leonardit, organik taşıyıcılar, kompost türevleri ve mineral katkılarla çalışan sistemler için granülasyon, kurutma, eleme ve paketleme altyapısı kuruyoruz.",
  },
  {
    title: "Mineral ve Kimyasal Granül Gübre Tesisleri",
    text: "NPK, NP, NK ve farklı mineral bazlı granül gübre formülasyonları için hammadde hazırlama, karışım, granülasyon, kurutma, soğutma ve sınıflandırma hatları tasarlıyoruz. Ürün akışına ve kapasiteye göre özel tesis kurgusu oluşturuyoruz.",
  },
  {
    title: "Mikro Granül Gübre Tesisleri",
    text: "Daha küçük tane boyutlu, hassas dağılım ve kontrollü granül yapısı gerektiren mikro granül gübre hatları için özel proses çözümleri sunuyoruz. Mikro granül üretiminde tane boyutu kontrolü, eleme hassasiyeti ve akış stabilitesi ön planda değerlendirilir.",
  },
  {
    title: "Toz Gübre ve Karışım Tesisleri",
    text: "Toz formda gübre üretimi, karışım ve dozajlama hatları için hammadde alma, kırma, eleme, karıştırma, transfer ve paketleme sistemleri sunuyoruz. Toz ürünlerde homojenlik, toz kontrolü ve doğru besleme kurgusu temel kriterlerdir.",
  },
  {
    title: "Organik ve Özel Formülasyon Gübre Tesisleri",
    text: "Kompost bazlı, organik içerikli, özel katkılı veya projeye özel reçetelerle çalışan gübre tesisleri için özel hat tasarımı yapıyoruz. Ürünün akış davranışı, nem durumu ve son kullanım amacı dikkate alınarak sistem kurgulanır.",
  },
  {
    title: "Kaplamalı, Zenginleştirilmiş ve Özel Ürün Hatları",
    text: "Kükürt kaplı, özel katkılı, iz element destekli veya performans artırıcı gübre ürünleri için proses entegrasyonu ve yardımcı ekipman çözümleri sunuyoruz. Ürün kalitesini koruyan ve sürekli üretimi destekleyen hat yapıları oluşturuyoruz.",
  },
];

const machineLinks = [
  ["Hammadde alma ve besleme sistemleri", "/makinalar/depolama-ve-besleme-sistemleri"],
  ["Kırıcılar ve parçalayıcılar", "/makinalar/kiricilar-ve-parcalayicilar"],
  ["Eleme ve sınıflandırma sistemleri", "/makinalar/eleme-ve-siniflandirma-sistemleri"],
  ["Karıştırıcılar ve hazırlık üniteleri", "/makinalar/reaktorler-ve-tanklar"],
  ["Granülasyon tamburları", "/makinalar/tambur-sistemleri"],
  ["Kurutma tamburları", "/makinalar/tambur-sistemleri"],
  ["Soğutma tamburları", "/makinalar/tambur-sistemleri"],
  ["Bant konveyör, helezon ve elevatör sistemleri", "/makinalar/tasima-ekipmanlari"],
  ["Toz toplama ve filtre sistemleri", "/makinalar/toz-toplama-sistemleri"],
  ["Silo, bunker ve dozajlama sistemleri", "/makinalar/depolama-ve-besleme-sistemleri"],
  ["Paketleme ve dolum sistemleri", "/makinalar/paketleme-ve-dolum-sistemleri"],
] as const;

export default function FertilizerSectorExperience() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_32%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]">
        <div className="mx-auto grid min-h-[300px] max-w-7xl gap-10 px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-[50px] lg:min-h-[420px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-[60px]">
          <div className="self-center">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              GÜBRE VE GRANÜLASYON TESİSLERİ
            </div>
            <p className="mt-5 text-sm font-medium text-blue-200">
              Gübre ve granülasyon tesislerinde yüksek verim, sürekli kalite ve prosese uygun doğru makina kurgusu.
            </p>
            <h1 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[34px] md:text-[38px] lg:text-[42px]">
              Gübre ve Granülasyon Tesisleri
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Ham madde hazırlamadan granül üretimine, kurutmadan elemeye, soğutmadan paketlemeye kadar tüm süreci tek bir tesis mantığı ile planlıyoruz. Organomineral gübre, mineral gübre, granül gübre, mikro granül gübre, toz karışım gübre ve özel formülasyon hatları için proses tasarımı, ekipman seçimi, makina imalatı ve tesis kurgusu sunuyoruz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">
                Teklif Al
              </a>
              <Link href="/sektorler" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Tüm Sektörlere Dön
              </Link>
            </div>
          </div>
          <div className="self-center rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur">
            <div className="rounded-[24px] border border-white/10 bg-white px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <svg viewBox="0 0 420 240" className="w-full" aria-label="Gübre ve granülasyon tesisi proses şeması">
                <rect x="26" y="94" width="58" height="42" rx="10" className="fill-slate-100 stroke-slate-300" />
                <rect x="108" y="94" width="58" height="42" rx="10" className="fill-slate-100 stroke-slate-300" />
                <circle cx="218" cy="115" r="34" className="fill-blue-50 stroke-blue-700" />
                <rect x="276" y="94" width="58" height="42" rx="10" className="fill-slate-100 stroke-slate-300" />
                <rect x="350" y="94" width="44" height="42" rx="10" className="fill-slate-100 stroke-slate-300" />
                <path d="M84 115h24M166 115h18M252 115h24M334 115h16" className="stroke-blue-700" strokeWidth="3" fill="none" />
                <text x="55" y="154" textAnchor="middle" className="fill-slate-600 text-[12px]">Hazırlık</text>
                <text x="137" y="154" textAnchor="middle" className="fill-slate-600 text-[12px]">Karışım</text>
                <text x="218" y="169" textAnchor="middle" className="fill-slate-600 text-[12px]">Granülasyon</text>
                <text x="305" y="154" textAnchor="middle" className="fill-slate-600 text-[12px]">Kurutma</text>
                <text x="372" y="154" textAnchor="middle" className="fill-slate-600 text-[12px]">Paketleme</text>
              </svg>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Organomineral gübre tesisi", "Mikro granül gübre tesisi", "Granül gübre üretim hattı", "Toz gübre üretim hattı"].map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <InfoCard
          title="Sektör Tanımı ve Uzmanlık Alanı"
          text="Gübre ve granülasyon tesisleri; ham madde karakteri, nem, tane boyutu, bağlayıcı yapısı, kurutma ihtiyacı, son ürün hedefi ve paketleme formatına göre farklı mühendislik yaklaşımı gerektirir. Bu alanda sunduğumuz uzmanlık; ürün tipine uygun proses tasarımı, doğru makina seçimi, kapasite planlaması ve hat kurgusunu tek çatı altında birleştirir. Toz, granül ve mikro granül gübre üretiminde; ürün stabilitesi, homojen karışım, granül dayanımı, nem kontrolü, sınıflandırma verimi ve son ürün kalitesi gibi kritik parametreleri birlikte ele alıyoruz."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Kapsanan Gübre ve Ürün Tipleri</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Ürün tipine göre özel proses ve tesis kurgusu</h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {fertilizerTypes.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <ListCard
            title="Bu Sektörde Sunduğumuz Hizmetler"
            items={[
              "Proses Tasarımı ve Mühendislik",
              "Makine İmalatı",
              "Anahtar Teslim Tesis Kurulumu",
              "Kurulum ve Devreye Alma",
              "Modernizasyon ve Revizyon",
              "Teknik Danışmanlık",
              "Bakım ve Servis",
              "Pilot Tesis ve Proses Test Çalışmaları",
            ]}
          />
          <InfoCard
            title="Sektöre Özel Mühendislik Yaklaşımı"
            text="Yeni yatırım, kapasite artırımı veya mevcut hattın iyileştirilmesi fark etmeksizin; gübre ve granülasyon sektörüne özel mühendislik ve uygulama desteği sunuyoruz. Gübre tesisi kurulumu, gübre proses tasarımı ve endüstriyel gübre tesisleri ölçeğinde tüm adımları tek yapı içinde ele alıyoruz."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Bu Sektörde Kullanılan Makina ve Ekipmanlar</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Makina ve ekipman altyapısı</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {machineLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard
            title="Tipik Proses Akışı"
            text="Gübre ve granülasyon tesislerinde tipik proses akışı ürün tipine göre değişmekle birlikte genel olarak aşağıdaki adımlarla ilerler: Hammadde alma → kırma / eleme → dozajlama → karıştırma → granülasyon → kurutma → soğutma → sınıflandırma → geri dönüş → paketleme / depolama. Toz ürün, mikro granül, organomineral veya mineral gübre hatlarında bu akış; proses ihtiyacına göre sadeleştirilebilir veya ilave proses adımları ile genişletilebilir."
          />
          <ListCard
            title="Kapasite ve Tesis Kurgusu"
            items={[
              "Düşük kapasiteli özel üretim hatları",
              "Orta kapasiteli yarı otomatik sistemler",
              "Yüksek kapasiteli sürekli üretim hatları",
              "Projeye özel modüler tesis yapıları",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <ListCard
            title="Bu Sektörde Kritik Olan Konular"
            items={[
              "Hammadde karakterine uygun proses seçimi",
              "Granül dayanımı ve ürün kalitesi",
              "Nem kontrolü ve kurutma dengesi",
              "Eleme verimi ve ürün geri dönüş kurgusu",
              "Toz kontrolü ve çevresel yönetim",
              "Kapasiteye uygun makina ve hat tasarımı",
              "Son ürün akışkanlığı ve paketleme uyumu",
            ]}
          />
          <ListCard
            title="Çalıştığımız Proje Tipleri"
            items={[
              "Organomineral granül gübre tesisleri",
              "Toz ve karışım gübre hazırlama hatları",
              "Mikro granül gübre tesisleri",
              "Mineral bazlı granül gübre hatları",
              "Kapasite artırımı ve modernizasyon projeleri",
              "Yardımcı ekipman ve hat entegrasyon projeleri",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Sık Sorulan Sorular</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "Hangi gübre tipleri için tesis kurulabilir?",
                a: "Organomineral granül, mineral granül, mikro granül, toz gübre ve projeye özel formülasyonlar için tesis çözümleri sunulabilir.",
              },
              {
                q: "Organomineral ve mineral gübre hatları aynı mıdır?",
                a: "Temel bazı proses adımları benzer olsa da hammadde yapısı, granül davranışı, kurutma ihtiyacı ve ürün kalitesi hedefleri nedeniyle hat kurgusu değişir.",
              },
              {
                q: "Mikro granül gübre için özel hat gerekir mi?",
                a: "Evet. Mikro granül üretiminde tane boyutu kontrolü, hassas eleme ve özel granülasyon yapısı daha kritik hale gelir.",
              },
              {
                q: "Mevcut gübre hattı modernize edilebilir mi?",
                a: "Evet. Kapasite artırımı, ekipman yenileme, kurutma ve eleme optimizasyonu gibi revizyonlar yapılabilir.",
              },
              {
                q: "Tesis kapasitesi nasıl belirlenir?",
                a: "Saatlik hedef üretim miktarı, ürün tipi, hammadde yapısı ve işletme modeline göre kapasite planlaması yapılır.",
              },
              {
                q: "Paketleme ve depolama sistemi de bu kapsama girer mi?",
                a: "Evet. İstenirse son ürün depolama, torbalama, big bag dolum ve diğer paketleme çözümleri tesis kapsamına dahil edilir.",
              },
            ].map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead
          title="Gübre ve Granülasyon Tesisleri için teklif veya teknik görüşme talep edin"
          text="Projenize en uygun makina, ekipman, proses akışı ve tesis kurgusunu birlikte netleştirelim. Organomineral, mineral, mikro granül ve özel gübre üretim hatları için bizimle iletişime geçin."
        />
      </section>
    </main>
  );
}
