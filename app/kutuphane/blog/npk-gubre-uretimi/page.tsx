import Link from "next/link";
import { buildLibraryMetadata } from "../../../components/library-seo-page";
import { BlogArticleTemplate } from "../../../components/blog-article-template";

const title = "NPK Gübre Üretimi";
const description =
  "NPK gübre üretimi; hammadde, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme adımları için teknik rehber.";
const canonical = "https://www.promakina.com.tr/kutuphane/blog/npk-gubre-uretimi";

export const metadata = buildLibraryMetadata({ title, description, canonical });

const relatedServices = [
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description:
      "NPK ve granül gübre hatları için anahtar teslim mühendislik yaklaşımımızı hizmet bazında inceleyin.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description:
      "Granül hat kurulumu, proses akışı ve saha entegrasyonunu tesis sayfasında görün.",
  },
];

const sections = [
  {
    title: "NPK Gübre Üretimi Nedir?",
    blocks: [
      {
        content: (
          <>
            <p>
              NPK gübre üretimi, azot, fosfor ve potasyum içeren bileşenlerin belirli reçetelerde bir araya
              getirilerek pazarlanabilir son ürüne dönüştürüldüğü kontrollü endüstriyel süreçtir. Üretim hattı,
              hammaddenin kimyasal davranışı kadar fiziksel akış karakterine de yanıt vermelidir. Çünkü reçete doğru
              olsa bile ürün boyutu, nem dengesi ve granül dayanımı ticari başarıyı doğrudan etkiler.
            </p>
            <p>
              Bu nedenle NPK üretimi yalnız formül bilgisi değil, güçlü proses mühendisliği gerektirir. Özellikle{" "}
              <Link href="/hizmetler" className="font-semibold text-blue-700 transition hover:text-blue-800">
                anahtar teslim tesis kurulumu
              </Link>{" "}
              hedefleyen yatırımlarda ürün standardı, enerji dengesi ve paketleme akışı birlikte ele alınmalıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Hammadde Hazırlama ve Reçete Disiplini",
    blocks: [
      {
        content: (
          <>
            <p>
              NPK üretiminde ilk kritik adım doğru hammadde hazırlamadır. Farklı tane boyutu, farklı nem ve farklı
              çözünürlük karakterine sahip hammaddeler aynı ritimde hatta girmelidir. Bunker, dozajlama helezonu ve
              besleme konveyörlerinin kalitesi burada belirleyicidir.
            </p>
            <p>
              Reçete disiplini bozulduğunda granülasyon verimi düşer, kurutma yükü değişir ve ürün standardı
              dalgalanır. Bu yüzden ön hazırlama bölümü çoğu zaman göründüğünden daha kritiktir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Karıştırma ve Şartlandırma Aşaması",
    blocks: [
      {
        content: (
          <>
            <p>
              Karıştırma aşaması, hammaddelerin homojen bir yapıda birleşmesini sağlar. Sıvı bağlayıcı veya su
              kontrollü eklenecekse şartlandırma bölümü daha da önem kazanır. NPK reçetelerinde küçük dengesizlikler
              bile son granül yapısına yansıyabilir.
            </p>
            <p>
              Bu nedenle karıştırıcı tipi, süre ve sıvı dağıtım mantığı granülasyon öncesi ana kalite kapısıdır.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Granülasyon, Kurutma ve Soğutma",
    blocks: [
      {
        content: (
          <>
            <p>
              NPK gübre üretiminde granülasyon adımı ürünün ticari formunu belirler. Ardından gelen kurutma ve
              soğutma bölümleri, granülün depolama ve sevkiyat kararlılığını oluşturur. Bu üçlü birbiriyle uyumlu
              seçilmediğinde ürün ya zayıf kalır ya da fazla toz üretir.
            </p>
            <p>
              Özellikle{" "}
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="font-semibold text-blue-700 transition hover:text-blue-800">
                granül gübre üretim süreci
              </Link>{" "}
              başlığında detaylı anlatılan tambur ve kurutma dengesi, NPK hatları için de ana belirleyicidir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Eleme, Geri Devir ve Ürün Standardı",
    blocks: [
      {
        content: (
          <>
            <p>
              Elek sistemleri, istenen tane boyutu aralığını ayırarak kalite standardını görünür hale getirir.
              Elek altı ve elek üstü fraksiyonun geri devri, granülasyon kararlılığı için doğru kurgulanmalıdır.
            </p>
            <p>
              Yetersiz eleme veya yanlış geri devir oranı, hem hammadde verimini hem de nihai ürün görünümünü
              olumsuz etkileyebilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Paketleme, Stoklama ve Ticari Çıkış",
    blocks: [
      {
        content: (
          <>
            <p>
              Paketleme bölümü çoğu zaman prosesin son halkası gibi görünür; oysa ticari olarak ürün kalitesinin ilk
              görüldüğü yerdir. Torbalama hızı, tartım hassasiyeti ve paletleme düzeni üretim kalitesi kadar müşteri
              algısını da etkiler.
            </p>
            <p>
              NPK gübre üretiminde depolama davranışı da önemlidir. Ürün sıcaklığı veya son nemi kontrol edilmeden
              stok alanına giden ürün, topaklanma ve akış kaybı riski oluşturabilir.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Pro Makina ile NPK Üretim Hattı Yaklaşımı",
    blocks: [
      {
        content: (
          <>
            <p>
              Pro Makina, NPK gübre üretimini sadece granülatör seçimi üzerinden okumaz. Hammadde kabul, taşıma,
              karıştırma, granülasyon, kurutma, eleme ve paketleme aynı mühendislik modeli içinde çözülür. Böylece
              sahada daha tutarlı kalite ve daha kontrollü kapasite elde edilir.
            </p>
            <p>
              Eğer NPK hattı yatırımı planlıyor, reçete esnekliği ve kapasite dengesi için teknik değerlendirme almak
              istiyorsanız{" "}
              <Link href="/iletisim" className="font-semibold text-blue-700 transition hover:text-blue-800">
                bizimle iletişime geçebilirsiniz
              </Link>
              .
            </p>
          </>
        ),
      },
    ],
  },
];

const faqs = [
  { question: "NPK gübre üretim hattında en kritik adım hangisidir?", answer: "Hammadde hazırlama, granülasyon ve kurutma dengesinin birlikte doğru kurulması en kritik başlıktır." },
  { question: "NPK üretiminde kurutma neden önemlidir?", answer: "Son ürün nemi, depolama kararlılığı ve paketleme performansı doğrudan kurutma aşamasına bağlıdır." },
  { question: "Elek ve geri devir neden gereklidir?", answer: "İstenen tane boyutu standardını korumak ve granülasyon kararlılığını artırmak için elek ve geri devir hattı gerekir." },
  { question: "NPK üretim tesisi ihracata uygun planlanabilir mi?", answer: "Evet. Ürün standardı, paketleme ve kalite kontrol doğru tasarlanırsa tesis ihracat odaklı da kurgulanabilir." },
  { question: "Teklif için hangi verileri hazırlamalıyım?", answer: "Hedef kapasite, ürün reçetesi, ambalaj tipi ve saha bilgileri ilk teknik değerlendirme için iyi bir başlangıç sağlar." },
];

export default function Page() {
  return (
    <BlogArticleTemplate
      title="NPK Gübre Üretimi"
      description={description}
      canonical={canonical}
      heroDescription="NPK gübre üretim hattını reçete, granülasyon, kurutma, eleme ve paketleme dengesi üzerinden anlatan teknik rehber."
      categoryLabel="BLOG / MAKALE"
      sections={sections}
      relatedServices={relatedServices}
      faqs={faqs}
      ctaText="NPK gübre üretim hattı tasarımı, kapasite planı ve anahtar teslim kurulum için Pro Makina ile iletişime geçebilirsiniz."
      extraSection={
        <>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Teknik Değerlendirme Özeti</h2>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-950">
                <div className="px-4 py-3">Kriter</div>
                <div className="px-4 py-3">Açıklama</div>
                <div className="px-4 py-3">Mühendislik Önemi</div>
              </div>
              {[
                ["Reçete Disiplini", "Hammaddelerin kontrollü ve dengeli beslenmesini sağlar.", "Granül kalitesi ve kurutma yükünü belirler."],
                ["Tambur Omurgası", "Granülasyon, kurutma ve soğutma hattını kapsar.", "Ürün standardı ve enerji dengesi için kritiktir."],
                ["Eleme-Geri Devir", "Boyut standardını ve verimliliği düzenler.", "Hammadde kullanımı ile kalite arasında denge kurar."],
                ["Paketleme", "Ticari ürün çıkışını ve sevkiyat ritmini belirler.", "Pazar güveni ve operasyon sürekliliğini etkiler."],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700">
                  <div className="px-4 py-3 font-semibold text-slate-950">{row[0]}</div>
                  <div className="px-4 py-3">{row[1]}</div>
                  <div className="px-4 py-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">İlgili Teknik İçerikler</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link href="/kutuphane/blog/granul-gubre-uretim-sureci" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Granül Gübre Üretim Süreci</span><span className="mt-2 block text-sm leading-7 text-slate-600">Granül hattın temel proses adımlarını daha ayrıntılı okuyun.</span></Link>
              <Link href="/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Organomineral Gübre Tesisi Maliyeti</span><span className="mt-2 block text-sm leading-7 text-slate-600">Yatırım kalemlerini maliyet perspektifinden görün.</span></Link>
              <Link href="/kutuphane/blog/kurutma-tamburu-kapasite-hesabi" className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"><span className="text-base font-semibold text-slate-950">Kurutma Tamburu Kapasite Hesabı</span><span className="mt-2 block text-sm leading-7 text-slate-600">NPK hattındaki kurutma yükünü teknik olarak değerlendirin.</span></Link>
            </div>
          </section>
        </>
      }
    />
  );
}
