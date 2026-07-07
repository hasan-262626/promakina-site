import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { BlogArticleCta } from "../../../components/blog-article-cta";
import { GlobalBottomCta } from "../../../components/global-bottom-cta";
import { getBlogArticleCtaConfig } from "../../../lib/blog-article-cta-map";
import { siteContact } from "../../../lib/site-contact";

const title =
  "Granülatör Tamburu Seçimi | Granülasyon Tamburu Tasarımı ve Proses Rehberi";
const pageTitle = "Granülatör Tamburu Seçimi";
const description =
  "Granülatör tamburu seçimi, kullanım alanları, iç yapı, nozzle sistemi, bağlayıcı dozajı, recycle hattı, tambur çap-boy hesabı, devir, eğim ve proses tasarım kriterlerini teknik olarak inceleyin.";
const canonical =
  "https://www.promakina.com.tr/kutuphane/blog/granulator-tamburu-secimi";
const articleCta = getBlogArticleCtaConfig("granulator-tamburu-secimi");

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Granülatör Tamburu Seçimi",
    description:
      "Granülasyon tamburlarında kullanım alanları, iç yapı, nozzle sistemi, bağlayıcı, recycle, çap-boy, devir, eğim ve proses tasarım kriterleri.",
    url: canonical,
    siteName: "Pro Makina",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granülatör Tamburu Seçimi",
    description:
      "Granülasyon tamburlarında kullanım alanları, iç yapı, nozzle sistemi, bağlayıcı, recycle, çap-boy, devir, eğim ve proses tasarım kriterleri.",
  },
};

type TableSectionProps = {
  title: string;
  headers: string[];
  rows: string[][];
};

function SectionCard({
  title: sectionTitle,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
        {sectionTitle}
      </h2>
      <div className="mt-6 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function TableSection({ title: tableTitle, headers, rows }: TableSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">{tableTitle}</h3>
      <div className="overflow-x-auto rounded-[24px] border border-slate-200">
        <table className="min-w-[760px] divide-y divide-slate-200 bg-white text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-slate-950">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-4 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, index) => (
              <tr key={`${tableTitle}-${index}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${tableTitle}-${index}-${cellIndex}`}
                    className={`px-4 py-4 ${cellIndex === 0 ? "font-semibold text-slate-950" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FormulaBox({
  title: formulaTitle,
  formula,
  example,
}: {
  title: string;
  formula: string;
  example?: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#278DC0]/20 bg-[#F1F8FC] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
        Formül Kutusu
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{formulaTitle}</h3>
      <pre className="mt-4 overflow-x-auto rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-[#154764]">
        {formula}
      </pre>
      {example ? <div className="mt-4 text-sm leading-7 text-slate-700">{example}</div> : null}
    </div>
  );
}

function FormulaSteps({
  title: stepsTitle,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-[24px] border border-[#278DC0]/20 bg-[#F1F8FC] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
        Formül Kartı
      </p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{stepsTitle}</h3>
      <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#278DC0] text-xs font-bold text-white">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FlowBox({
  title: flowTitle,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{flowTitle}</h3>
      <div className="mt-5 grid gap-3 lg:grid-cols-[repeat(9,minmax(0,1fr))]">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center gap-3 lg:flex-row lg:col-span-1"
          >
            <div className="w-full rounded-2xl border border-[#278DC0]/20 bg-white px-4 py-4 text-center text-sm font-semibold text-[#154764] shadow-sm">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <div className="flex items-center justify-center text-[#278DC0] lg:h-full lg:w-6">
                <span className="text-xl lg:hidden">↓</span>
                <span className="hidden text-xl lg:inline">→</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneralDrumDiagram() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">
        Granülatör Tamburu Genel Proses Şeması
      </h3>
      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox="0 0 980 300"
          className="min-w-[860px]"
          role="img"
          aria-label="Granülatör tamburu proses şeması"
        >
          <defs>
            <linearGradient id="drumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#278DC0" />
              <stop offset="100%" stopColor="#154764" />
            </linearGradient>
          </defs>
          <rect x="30" y="120" width="160" height="56" rx="18" fill="#F1F8FC" stroke="#278DC0" />
          <text x="110" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#154764">
            Besleme konveyörü
          </text>
          <text x="110" y="165" textAnchor="middle" fontSize="13" fill="#334155">
            Hammadde girişi
          </text>

          <rect x="245" y="70" width="480" height="150" rx="75" fill="url(#drumGradient)" opacity="0.95" />
          <circle cx="325" cy="145" r="14" fill="#ffffff" opacity="0.25" />
          <circle cx="645" cy="145" r="14" fill="#ffffff" opacity="0.25" />
          <text x="485" y="118" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">
            Granülatör Tamburu
          </text>
          <text x="350" y="152" textAnchor="middle" fontSize="14" fill="#ffffff">
            Tambur giriş boğazı
          </text>
          <text x="484" y="152" textAnchor="middle" fontSize="14" fill="#ffffff">
            Nozul püskürtme bölgesi
          </text>
          <text x="613" y="152" textAnchor="middle" fontSize="14" fill="#ffffff">
            Granül büyüme bölgesi
          </text>
          <text x="485" y="182" textAnchor="middle" fontSize="13" fill="#E0F2FE">
            Yuvarlanma yatağı • Malzeme ilerleme yönü • Kontrollü granül büyümesi
          </text>

          <path d="M190 148 H245" stroke="#278DC0" strokeWidth="4" markerEnd="url(#arrowA)" />
          <path d="M725 148 H790" stroke="#278DC0" strokeWidth="4" markerEnd="url(#arrowA)" />
          <path d="M485 25 V70" stroke="#278DC0" strokeWidth="4" markerEnd="url(#arrowA)" />
          <path d="M300 55 L338 90" stroke="#278DC0" strokeDasharray="6 6" strokeWidth="3" />
          <path d="M330 58 L355 96" stroke="#278DC0" strokeDasharray="6 6" strokeWidth="3" />
          <path d="M690 220 L690 255" stroke="#278DC0" strokeWidth="4" markerEnd="url(#arrowA)" />

          <rect x="430" y="0" width="110" height="34" rx="14" fill="#F1F8FC" stroke="#278DC0" />
          <text x="485" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#154764">
            Bağlayıcı sıvı hattı
          </text>

          <rect x="770" y="120" width="170" height="56" rx="18" fill="#F1F8FC" stroke="#278DC0" />
          <text x="855" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#154764">
            Kurutucu / elek hattı
          </text>
          <text x="855" y="165" textAnchor="middle" fontSize="13" fill="#334155">
            Granül çıkışı
          </text>

          <rect x="600" y="255" width="180" height="32" rx="14" fill="#F1F8FC" stroke="#278DC0" />
          <text x="690" y="275" textAnchor="middle" fontSize="13" fontWeight="700" fill="#154764">
            Tahrik motoru • Ring • Gale
          </text>

          <rect x="230" y="240" width="150" height="32" rx="14" fill="#F1F8FC" stroke="#278DC0" />
          <text x="305" y="260" textAnchor="middle" fontSize="13" fontWeight="700" fill="#154764">
            Recycle ürün girişi
          </text>

          <rect x="60" y="230" width="150" height="32" rx="14" fill="#F1F8FC" stroke="#278DC0" />
          <text x="135" y="250" textAnchor="middle" fontSize="13" fontWeight="700" fill="#154764">
            Toz emiş bağlantısı
          </text>

          <defs>
            <marker id="arrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#278DC0" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function NozzleDiagram() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">
        Granülasyon Tamburunda Nozzle ve Püskürtme Bölgesi
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Ürün yatağı tamburun alt bölümünde yuvarlanır. Nozullar malzeme yatağına
        30°–60° açıyla püskürtme yapar. Sıvı doğrudan tambur duvarına değil, hareketli
        ürün yatağına verilmelidir.
      </p>
      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox="0 0 980 320"
          className="min-w-[860px]"
          role="img"
          aria-label="Granülasyon tamburunda nozzle püskürtme bölgesi"
        >
          <defs>
            <linearGradient id="nozzleDrum" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#278DC0" />
              <stop offset="100%" stopColor="#154764" />
            </linearGradient>
            <marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#0F172A" />
            </marker>
          </defs>
          <rect x="110" y="60" width="760" height="190" rx="95" fill="url(#nozzleDrum)" opacity="0.96" />
          <path d="M170 185 Q490 270 810 185" fill="#0F172A" opacity="0.95" />
          <path d="M255 110 L350 170" stroke="#ffffff" strokeDasharray="8 8" strokeWidth="4" />
          <path d="M330 105 L395 170" stroke="#ffffff" strokeDasharray="8 8" strokeWidth="4" />
          <path d="M405 100 L445 168" stroke="#ffffff" strokeDasharray="8 8" strokeWidth="4" />
          <circle cx="250" cy="105" r="8" fill="#ffffff" />
          <circle cx="325" cy="100" r="8" fill="#ffffff" />
          <circle cx="400" cy="96" r="8" fill="#ffffff" />
          <path d="M555 208 C585 185 640 170 705 176" fill="none" stroke="#E0F2FE" strokeWidth="4" markerEnd="url(#arrowB)" />
          <path d="M735 142 A45 45 0 1 1 680 95" fill="none" stroke="#E0F2FE" strokeWidth="4" markerEnd="url(#arrowB)" />

          <text x="185" y="92" fontSize="14" fontWeight="700" fill="#ffffff">
            Giriş bölgesi
          </text>
          <text x="325" y="78" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
            Nozzle açısı
          </text>
          <text x="430" y="188" fontSize="14" fontWeight="700" fill="#ffffff">
            Püskürtme konisi
          </text>
          <text x="595" y="235" fontSize="14" fontWeight="700" fill="#ffffff">
            Ürün yatağı
          </text>
          <text x="705" y="92" fontSize="14" fontWeight="700" fill="#ffffff">
            Tambur dönüş yönü
          </text>
          <text x="760" y="215" fontSize="14" fontWeight="700" fill="#ffffff">
            Granül büyüme bölgesi
          </text>
          <text x="545" y="170" fontSize="13" fill="#E0F2FE">
            Malzeme ilerleme yönü
          </text>
        </svg>
      </div>
    </div>
  );
}

const usageRows = [
  ["Organomineral gübre üretimi", "Kompost + mineral karışım", "Toz karışımı granül gübreye dönüştürmek"],
  ["Granül NPK üretimi", "Azot, fosfor, potasyum bazlı karışımlar", "Homojen granül form elde etmek"],
  ["Kükürt granül üretimi", "Öğütülmüş kükürt", "Toz kükürdü granül hale getirmek"],
  ["Mineral toz işleme", "Kireç, dolomit, zeolit, bentonit", "Tozuma azaltmak ve ürün formunu iyileştirmek"],
  ["Kompost bazlı ürünler", "Kurutulmuş kompost, organik materyal", "Organik ürüne ticari granül form kazandırmak"],
  ["Yem ve katkı ürünleri", "Toz yem katkıları", "Daha kolay dozajlanabilir granül ürün elde etmek"],
  ["Kimyasal granül üretimi", "Toz kimyasal karışımlar", "Kontrollü tane boyutu ve akışkanlık sağlamak"],
];

const problemRows = [
  ["Granül oluşmuyor", "Bağlayıcı az, kalış süresi düşük, devir yanlış"],
  ["Büyük topak oluşuyor", "Bağlayıcı fazla, nozul kötü dağıtıyor, doluluk yüksek"],
  ["Çok fazla toz çıkıyor", "Bağlayıcı yetersiz, recycle düşük, ürün çok kuru"],
  ["Granül zayıf kırılıyor", "Bağlayıcı tipi yanlış, kurutma çok agresif, çekirdek oluşumu zayıf"],
  ["Tambur içinde yapışma oluyor", "Nem fazla, iç astar uygun değil, sıyırıcı yok"],
  ["Ürün hızlı çıkıyor", "Eğim fazla, kalış süresi düşük"],
];

const drumPartRows = [
  ["Tambur gövdesi", "Ürünün döndüğü ana silindirik yapı"],
  ["Giriş boğazı", "Hammadde ve recycle ürünün tambura beslendiği bölüm"],
  ["Bağlayıcı / nozul sistemi", "Sıvı bağlayıcının kontrollü püskürtülmesini sağlar"],
  ["İç kanat / yönlendirici yapı", "Malzeme yatağını ve yuvarlanma davranışını kontrol eder"],
  ["Çıkış boğazı", "Granül ürünün tamburdan kontrollü çıkmasını sağlar"],
  ["Ring / gale sistemi", "Tamburun taşıyıcı dönme sistemidir"],
  ["Tahrik sistemi", "Motor, redüktör, fener-pinyon veya sürtünme tahrik sistemi"],
  ["Sızdırmazlık noktaları", "Toz ve nem kaçaklarını azaltır"],
  ["Kontrol sensörleri", "Devir, motor akımı, sıcaklık, seviye ve proses kontrolü sağlar"],
];

const internalStructureRows = [
  ["Düz iç yüzey", "Akışkan, kolay granül olan ürünler", "Basit ve temizlenebilir yapı", "Karışım etkisi düşük kalabilir"],
  ["Düşük profilli kanat", "Organomineral ve NPK granül", "Kontrollü yuvarlanma sağlar", "Yanlış açıda topaklanma yapabilir"],
  ["Spiral yönlendirici", "Ürünü kontrollü ilerletmek için", "Kalış süresini düzenler", "Aşırı yönlendirme hızlı çıkış yapabilir"],
  ["Ayarlı kanat", "Farklı reçeteler için", "Esnek proses ayarı sağlar", "Mekanik karmaşıklık artar"],
  ["Kauçuk / PU astar", "Yapışkan ürünler", "Yapışma ve darbe etkisini azaltır", "Aşınma ve bakım takibi gerekir"],
  ["Paslanmaz iç yüzey", "Kimyasal veya korozif ürünler", "Korozyon direnci sağlar", "Maliyet artar"],
  ["Hardox / aşınma astarı", "Mineral ve aşındırıcı ürünler", "Aşınmaya dayanıklıdır", "Granül hassasiyetine dikkat edilmeli"],
];

const nozzlePlacementRows = [
  ["Giriş bölgesi", "Hızlı granül çekirdeği oluşturmak için", "En yaygın uygulamalardan biridir"],
  ["Orta bölge", "Granül büyütme için", "Ürün yatağı oluşmuşsa daha dengeli çalışır"],
  ["Giriş + orta bölge", "Premium kalite granül için", "Homojen büyüme sağlar"],
  ["Sprey bar sistemi", "Geniş tambur çaplarında", "Daha dengeli sıvı dağılımı sağlar"],
  ["Çoklu nozul", "Yüksek kapasite ve hassas proseslerde", "Dozaj kontrolü daha başarılıdır"],
];

const nozzleCriteriaRows = [
  ["Bağlayıcı dozajı", "Granül oluşumu ve çıkış nemini belirler"],
  ["Sıvı basıncı", "Damlacık çapını ve dağılımı etkiler"],
  ["Nozzle sayısı", "Tambur kesitinde homojen dağılım sağlar"],
  ["Nozzle açısı", "Malzeme yatağına doğru püskürtme sağlar"],
  ["Sıvı viskozitesi", "Nozzle tıkanma ve damlacık davranışını etkiler"],
  ["Filtreleme", "Nozzle tıkanmasını önler"],
  ["Otomatik dozaj", "Reçete tekrarlanabilirliğini artırır"],
  ["Temizlik hattı", "Bakım ve ürün değişiminde kolaylık sağlar"],
];

const binderRangeRows = [
  ["Organomineral gübre", "30–90 kg/ton"],
  ["Mineral gübre / NPK", "20–70 kg/ton"],
  ["Kompost bazlı ürün", "40–120 kg/ton"],
  ["Kükürt granül", "20–80 kg/ton"],
  ["Mineral toz", "30–100 kg/ton"],
];

const fillRatioRows = [
  ["%5 altı", "Ürün yatağı zayıf, granül oluşumu yetersiz olabilir"],
  ["%8–12", "Hassas ve kontrollü granülasyon için uygundur"],
  ["%12–18", "Orta-yüksek kapasite için değerlendirilebilir"],
  ["%20 üzeri", "Topaklanma, boğulma ve güç artışı riski oluşur"],
  ["%30 üzeri", "Granülasyon tamburu için çoğu proseste risklidir"],
];

const residenceRows = [
  ["Mineral gübre / NPK", "4–7 dakika"],
  ["Organomineral gübre", "6–10 dakika"],
  ["Kompost bazlı ürün", "7–12 dakika"],
  ["Kükürt granül", "5–9 dakika"],
  ["Hassas granül büyütme", "8–12 dakika"],
];

const recycleRows = [
  ["%0–10", "Granül çekirdeği oluşumu zayıf kalabilir"],
  ["%15–30", "Dengeli ve yaygın kullanılan aralık"],
  ["%30–50", "Yüksek recycle, tambur kapasitesi büyür"],
  ["%50 üzeri", "Hat yükü ve enerji tüketimi dikkatle kontrol edilmeli"],
];

const symbolRows = [
  ["D", "Tambur çapı, m"],
  ["L", "Tambur boyu, m"],
  ["V", "Gerekli tambur hacmi, m³"],
  ["L/D", "Boy / çap oranı"],
];

const speedRows = [
  ["Standart granülasyon", "Kritik devrin %30–40’ı"],
  ["Hassas granül büyütme", "Kritik devrin %25–35’i"],
  ["Yapışkan ürün", "Daha düşük devir"],
  ["Kuru ve akışkan ürün", "Orta devir"],
  ["Kırılgan granül", "Düşük devir"],
];

const slopeRows = [
  ["Standart granülasyon", "%1,5–2,5"],
  ["Yapışkan ürün", "%1–2"],
  ["Hızlı akışkan ürün", "%2–3"],
  ["Uzun kalış süresi gereken ürün", "%1–1,5"],
];

const materialRows = [
  ["Standart organomineral gübre", "RAL boyalı karbon çelik"],
  ["Korozif ürün", "Paslanmaz çelik"],
  ["Aşındırıcı mineral ürün", "Hardox veya değiştirilebilir astar"],
  ["Yapışkan organik ürün", "PU/kauçuk astar veya sıyırıcı"],
  ["Kimyasal katkılı ürün", "Paslanmaz veya özel kaplama"],
];

const driveRows = [
  ["Fener dişli + pinyon", "Orta ve büyük çaplı tamburlar"],
  ["Zincir dişli tahrik", "Daha küçük ve orta yük uygulamaları"],
  ["Sürtünme tekeri", "Hafif-orta tamburlar"],
  ["Direkt redüktör tahriki", "Kompakt özel tasarımlar"],
];

const controlRows = [
  ["Tambur devri", "Granül büyüme davranışı"],
  ["Besleme debisi", "Kapasite stabilitesi"],
  ["Recycle oranı", "Tane dağılımı kontrolü"],
  ["Bağlayıcı debisi", "Nem ve granül sertliği"],
  ["Nozzle basıncı", "Sıvı dağılım kalitesi"],
  ["Motor akımı", "Aşırı yük ve tıkanma kontrolü"],
  ["Ürün çıkış durumu", "Topaklanma ve akış kontrolü"],
];

const presizingRows = [
  ["Kapasite", "1–3 ton/saat", "3–8 ton/saat", "8+ ton/saat"],
  ["Tambur çapı", "Ø1000–1600 mm", "Ø1600–2400 mm", "Ø2400 mm ve üzeri"],
  ["L/D oranı", "3–4", "4–5", "4–6"],
  ["Doluluk", "%8–12", "%10–15", "%12–18"],
  ["Devir", "Orta", "Ayarlanabilir", "İnverter şart"],
  ["Nozzle", "1–2 adet", "Çoklu nozul", "Sprey bar / çoklu zon"],
  ["Tahrik", "Zincir / sürtünme", "Fener-pinyon", "Ağır hizmet fener-pinyon"],
  ["Recycle", "Düşük-orta", "Orta", "Mutlaka hesaplanmalı"],
];

const mistakeRows = [
  ["Sadece nihai kapasiteye göre tambur seçmek", "Recycle yükü unutulur, tambur küçük kalır"],
  ["Nozzle sistemini basit su verme hattı gibi düşünmek", "Topaklanma ve homojenlik sorunu oluşur"],
  ["Doluluğu çok yüksek seçmek", "Granül yerine hamur/topak oluşur"],
  ["Deviri sabit yapmak", "Farklı reçetelerde ayar yapılamaz"],
  ["Kurutma tamburu iç kanadını granülatöre uygulamak", "Ürün aşırı düşer, kırılır veya kontrolsüz büyür"],
  ["Elek ve recycle hattını hesaba katmamak", "Tane dağılımı bozulur"],
  ["Bağlayıcı debisini ölçmemek", "Granül kalitesi dalgalanır"],
  ["Yapışkan ürün için sıyırıcı düşünmemek", "Tambur içinde birikme olur"],
];

const questionRows = [
  ["Hedef kapasite kaç ton/saat?", "Tambur hacmi ve tahrik seçimi"],
  ["Ürün tipi nedir?", "Yoğunluk, yapışkanlık ve aşındırıcılık"],
  ["Giriş nemi kaç?", "Bağlayıcı ihtiyacı ve yapışma riski"],
  ["Hedef granül çapı nedir?", "Kalış süresi ve nozul ayarı"],
  ["Bağlayıcı kullanılacak mı?", "Granül oluşum mekanizması"],
  ["Bağlayıcı dozajı kaç kg/ton?", "Nem dengesi ve ürün sertliği"],
  ["Recycle oranı kaç?", "Gerçek tambur yükü"],
  ["Doluluk oranı ne olacak?", "Aktif hacim hesabı"],
  ["Kalış süresi kaç dakika?", "Tambur boyutlandırma"],
  ["Kurutucu ve elek hattı var mı?", "Hat entegrasyonu"],
  ["Ürün yapışkan mı?", "İç astar ve sıyırıcı tasarımı"],
  ["Ürün aşındırıcı mı?", "Malzeme ve astar seçimi"],
];

const faqItems = [
  {
    question: "Granülatör tamburu hangi ürünlerde kullanılır?",
    answer:
      "Granülatör tamburu; organomineral gübre, NPK, kükürt granül, mineral toz, kompost bazlı ürünler, yem katkıları ve özel kimyasal granül ürünlerde kullanılır.",
  },
  {
    question: "Granülasyon tamburunda nozzle sistemi neden önemlidir?",
    answer:
      "Nozzle sistemi bağlayıcı sıvının ürün yatağına homojen dağılmasını sağlar. Yanlış nozul seçimi veya kötü yerleşim, topaklanma, kuru bölgeler ve granül kalitesinde dalgalanma oluşturabilir.",
  },
  {
    question: "Granülasyon tamburunda doluluk oranı kaç olmalıdır?",
    answer:
      "Granülasyon tamburlarında pratik doluluk genellikle %8–18 aralığında değerlendirilir. Daha yüksek doluluklarda topaklanma, boğulma ve motor yükü artışı oluşabilir.",
  },
  {
    question: "Granülasyon tamburunda recycle neden önemlidir?",
    answer:
      "Recycle ürün, granül çekirdeği oluşumunu destekler ve tane dağılımını iyileştirir. Ancak recycle oranı arttıkça tamburun gerçek proses yükü de artar.",
  },
  {
    question: "Granülatör tamburu kurutma tamburundan farklı mıdır?",
    answer:
      "Evet. Kurutma tamburu sıcak hava ile nem düşürmeye odaklanırken, granülatör tamburu kontrollü yuvarlanma ve bağlayıcı desteğiyle granül büyütmeye odaklanır. Bu nedenle iç yapı ve devir yaklaşımı farklıdır.",
  },
  {
    question: "Granülasyon tamburu ölçüleri nasıl kesinleşir?",
    answer:
      "Ön hesap; kapasite, yoğunluk, doluluk, kalış süresi, recycle ve bağlayıcı bilgilerine göre yapılır. Kesin ölçüler ürün numunesi, pilot test, tesis yerleşimi ve detay mühendislik çalışmasıyla netleşir.",
  },
];

const relatedLinks = [
  {
    title: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    description:
      "Granülasyon, kurutma, soğutma, kaplama ve kompost tamburlarını aynı makine ailesi içinde inceleyin.",
  },
  {
    title: "Tambur Hesapları",
    href: "/programlar?modal=tambur-kapasite-hesabi",
    description:
      "Granülasyon tamburu için kapasite, devir, eğim, doluluk ve yardımcı ekipman hesaplarını tek merkezden açın.",
  },
  {
    title: "Tambur Kapasite Hesabı",
    href: "/programlar?modal=tambur-kapasite-hesabi",
    description:
      "Granülasyon yükü, recycle, bağlayıcı debisi, çap ve boy hesabını ön mühendislik mantığıyla değerlendirin.",
  },
  {
    title: "Tambur Devir Hesabı",
    href: "/programlar?modal=tambur-devir-hesabi",
    description:
      "Kritik devir, çalışma devri ve çevresel hız ilişkisini ürün davranışıyla birlikte okuyun.",
  },
  {
    title: "Tambur Eğim ve Doluluk Hesabı",
    href: "/programlar?modal=tambur-egim-doluluk-hesabi",
    description:
      "Doluluk oranı, tambur eğimi ve tahmini kalış süresi arasındaki dengeyi granülasyon açısından görün.",
  },
  {
    title: "Organomineral Gübre Tesisi",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    description:
      "Organik ve mineral hammaddeli granülasyon hatlarında proses ve makine yaklaşımını hizmet tarafında inceleyin.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    description:
      "Granül gübre üretim hattında granülatör tamburu, kurutucu, soğutucu, elek ve paketleme zincirini görün.",
  },
  {
    title: "Paketleme ve Dolum Sistemleri",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    description:
      "Granül ürünün kaplama sonrası torbalama, big bag ve son ürün hazırlama ekipmanlarını inceleyin.",
  },
];

const processQualityItems = [
  {
    title: "Hammadde tane boyutu",
    description:
      "Başlangıç partikül boyutu çekirdek oluşumu ve granül büyümesinin ilk adımını belirler. Çok geniş dağılım, nozul ve recycle ayarını zorlaştırabilir.",
  },
  {
    title: "Giriş nemi",
    description:
      "Ürünün başlangıç nemi, bağlayıcı ihtiyacını ve tambur içindeki yapışma riskini doğrudan etkiler. Nem çok düşükse granül oluşumu zorlaşır, çok yüksekse topaklanma artar.",
  },
  {
    title: "Bağlayıcı dağılımı",
    description:
      "Sıvı miktarı kadar, ürün yatağı üzerine ne kadar homojen yayıldığı da kritik önemdedir. Kötü dağılım yerel ıslak bölgeler ve zayıf çekirdek oluşumu oluşturur.",
  },
  {
    title: "Recycle oranı",
    description:
      "Geri dönen ince ve iri ürün, granül çekirdeği oluşumunu destekler ve tane dağılımını dengeler. Ancak recycle büyüdükçe gerçek tambur yükü ve enerji ihtiyacı da artar.",
  },
  {
    title: "Tambur devri",
    description:
      "Devir, granüllerin yuvarlanma karakterini ve büyüme hızını belirler. Düşük devir zayıf yatak oluşturabilir, yüksek devir ise kırılma ve kontrolsüz büyüme yaratabilir.",
  },
  {
    title: "Tambur eğimi",
    description:
      "Eğim, ürünün tambur içindeki kalış süresine doğrudan etki eder. Çok dik eğimde granüller olgunlaşmadan çıkar, çok düşük eğimde ise tambur içi birikme yaşanabilir.",
  },
  {
    title: "Doluluk oranı",
    description:
      "Aktif ürün yatağının büyüklüğü granülasyonun kalbidir. Çok düşük dolulukta yatak oluşumu zayıflar, çok yüksek dolulukta kontrollü yuvarlanma yerini hamurlaşmaya bırakır.",
  },
  {
    title: "Kurutma sonrası davranış",
    description:
      "Granülasyon tamburundaki kalite, sonraki kurutma ve eleme hattında net şekilde görülür. Zayıf granüller kurutmada kırılır, iyi granüller ise daha dengeli çap ve daha düşük toz verir.",
  },
];

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pro Makina",
    url: "https://www.promakina.com.tr",
    logo: "https://www.promakina.com.tr/logo.png",
    email: siteContact.email,
    telephone: siteContact.phoneDisplay,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.promakina.com.tr" },
      { "@type": "ListItem", position: 2, name: "Kütüphane", item: "https://www.promakina.com.tr/kutuphane" },
      { "@type": "ListItem", position: 3, name: "Blog", item: "https://www.promakina.com.tr/kutuphane/blog" },
      { "@type": "ListItem", position: 4, name: pageTitle, item: canonical },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description,
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: "Pro Makina",
    },
    publisher: {
      "@type": "Organization",
      name: "Pro Makina",
      logo: {
        "@type": "ImageObject",
        url: "https://www.promakina.com.tr/logo.png",
      },
    },
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <BlogArticleCta
        title={articleCta.title}
        description={articleCta.description}
        buttonLabel={articleCta.buttonLabel}
        buttonHref={articleCta.buttonHref}
      />

      <article className="section-bottom-space-lg">
        <div className="site-container">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
              <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-slate-500">
                <Link href="/" className="transition hover:text-[#278DC0]">
                  Ana Sayfa
                </Link>
                <span>/</span>
                <Link href="/kutuphane" className="transition hover:text-[#278DC0]">
                  Kütüphane
                </Link>
                <span>/</span>
                <Link href="/kutuphane/blog" className="transition hover:text-[#278DC0]">
                  Blog
                </Link>
                <span>/</span>
                <span className="font-medium text-slate-700">{pageTitle}</span>
              </nav>

              <div className="mt-6 max-w-5xl">
                <span className="inline-flex rounded-full bg-[#278DC0]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#154764]">
                  Tambur Sistemleri
                </span>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Granülatör Tamburu Seçimi
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Granülatör tamburu; toz, ince taneli veya nem kontrollü hammaddelerin bağlayıcı sıvı,
                  recycle ürün ve kontrollü tambur hareketiyle granül forma dönüştürülmesini sağlayan döner proses ekipmanıdır.
                  Granül gübre, organomineral gübre, NPK, kükürt granül, mineral toz, kompost bazlı ürünler ve özel
                  endüstriyel karışımların üretiminde kullanılır.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Okuma süresi: 10-12 dk",
                    "Konu: Granülasyon tamburu, proses tasarımı, nozzle sistemi",
                    "İlgili hesap: Tambur Kapasite Hesabı",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/programlar?modal=tambur-kapasite-hesabi"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#278DC0] px-6 text-sm font-semibold text-white transition hover:bg-[#154764]"
                  >
                    Tambur Hesabını Aç
                  </Link>
                  <Link
                    href={siteContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0]/20 bg-white px-6 text-sm font-semibold text-[#154764] transition hover:bg-[#278DC0]/10"
                  >
                    WhatsApp ile Teklif Al
                  </Link>
                </div>
              </div>
            </div>

            <div className="section-gap space-y-8">
              <SectionCard title="Giriş">
                <p>
                  Granülatör tamburu; toz, ince taneli veya nem kontrollü hammaddelerin bağlayıcı sıvı,
                  recycle ürün ve kontrollü tambur hareketiyle granül forma dönüştürülmesini sağlayan döner proses ekipmanıdır.
                  Özellikle granül gübre, organomineral gübre, NPK, kükürt granül, mineral toz, kompost bazlı ürünler ve özel
                  endüstriyel karışımların üretiminde kullanılır.
                </p>
                <p>
                  Doğru seçilmiş bir granülasyon tamburu sadece ürünü şekillendirmez; aynı zamanda üretim kapasitesini,
                  granül çap dağılımını, ürün sertliğini, toz oranını, kurutma yükünü, recycle miktarını ve paketleme kalitesini
                  doğrudan etkiler. Bu nedenle granülatör tamburu seçimi yapılırken sadece “kaç ton/saat üretir?” sorusu yeterli değildir.
                </p>
                <p>
                  Hammadde nemi, yığın yoğunluğu, bağlayıcı tipi, nozul yerleşimi, tambur doluluk oranı, kalış süresi,
                  devir, eğim, iç kanat yapısı ve elek-recycle hattı birlikte değerlendirilmelidir.
                </p>
              </SectionCard>

              <SectionCard title="Granülatör Tamburu Nerelerde Kullanılır?">
                <p>
                  Granülasyon tamburları, toz veya küçük taneli hammaddenin daha kontrollü, taşınabilir, paketlenebilir ve
                  pazarlanabilir granül forma dönüştürülmesi gereken birçok sektörde kullanılır.
                </p>
                <TableSection
                  title="Granülatör Tamburu Kullanım Alanları"
                  headers={["Kullanım Alanı", "Tipik Ürün", "Amaç"]}
                  rows={usageRows}
                />
                <p>
                  Granülasyon tamburu özellikle gübre tesislerinde ana proses ekipmanlarından biridir. Hammadde dozajlama,
                  karıştırma, granülasyon, kurutma, soğutma, eleme, recycle ve paketleme hattı bir bütün olarak çalışır.
                </p>
              </SectionCard>

              <SectionCard title="Granülasyon Tamburu Proses Akışı">
                <p>
                  Granülasyon tamburu genellikle tek başına çalışmaz. Önünde hammadde hazırlama ve dozajlama, arkasında ise
                  kurutma, soğutma, eleme ve recycle sistemi bulunur.
                </p>
                <FlowBox
                  title="Örnek Granül Gübre Üretim Akışı"
                  steps={[
                    "Hammadde siloları",
                    "Dozaj bunkerleri / tartımlı besleme",
                    "Mikser / ön karıştırma",
                    "Granülasyon tamburu",
                    "Kurutma tamburu",
                    "Soğutma tamburu",
                    "Elek sistemi",
                    "Uygun ürün → Kaplama / paketleme",
                    "Elek altı ve elek üstü → Recycle hattı",
                  ]}
                />
                <p>
                  Bu akışta granülatör tamburu, ürünün granül form kazandığı ana ekipmandır. Ancak granülasyonun kalitesi
                  sadece tambura bağlı değildir. Besleme sürekliliği, bağlayıcı dozajı, nozul yerleşimi, recycle oranı ve
                  tambur içi hareket karakteri granül kalitesini belirleyen temel faktörlerdir.
                </p>
              </SectionCard>

              <SectionCard title="Granülatör Tamburunun Ana Görevi">
                <p>
                  Granülasyon tamburunda amaç malzemeyi sadece döndürmek değildir. Asıl hedef, tambur içinde kontrollü bir
                  yuvarlanma yatağı oluşturarak küçük çekirdek tanelerin büyümesini sağlamaktır.
                </p>
                <ol className="space-y-2 pl-5">
                  <li>1. İnce toz veya ön karışım tambura beslenir.</li>
                  <li>2. Bağlayıcı sıvı nozul sistemiyle kontrollü şekilde püskürtülür.</li>
                  <li>3. İnce partiküller nemli yüzeylerde birbirine tutunur.</li>
                  <li>4. Tambur devriyle ürün yuvarlanır.</li>
                  <li>5. Çekirdek granüller büyür.</li>
                  <li>6. Granüller istenen çap aralığına yaklaşır.</li>
                  <li>7. Ürün kurutucu veya eleğe aktarılır.</li>
                </ol>
                <TableSection
                  title="Granülasyon Problemleri ve Muhtemel Sebepleri"
                  headers={["Problem", "Muhtemel Sebep"]}
                  rows={problemRows}
                />
              </SectionCard>

              <SectionCard title="Granülatör Tamburunun Ana Bölümleri">
                <TableSection
                  title="Granülasyon Tamburu Ana Bölümleri"
                  headers={["Bölüm", "Görevi"]}
                  rows={drumPartRows}
                />
              </SectionCard>

              <SectionCard title="Granülatör Tamburu Genel Şeması">
                <GeneralDrumDiagram />
              </SectionCard>

              <SectionCard title="Granülatör Tamburu İç Yapısı">
                <p>
                  Granülasyon tamburunun iç yapısı, kurutma tamburundan farklı düşünülmelidir. Kurutma tamburunda ürünün sıcak
                  hava ile temasını artırmak için kaldırıcı kanatlar kullanılır. Granülasyon tamburunda ise amaç ürünü çok yüksekten düşürmek değil,
                  kontrollü yuvarlanma ve granül büyümesi sağlamaktır.
                </p>
                <p>
                  Bu nedenle granülasyon tamburunda agresif kaldırıcı lifterlar her zaman doğru seçim değildir.
                </p>
                <TableSection
                  title="Granülasyon Tamburu İç Yapı Seçenekleri"
                  headers={["İç Yapı Tipi", "Kullanım Durumu", "Avantaj", "Risk"]}
                  rows={internalStructureRows}
                />
                <p>
                  Granülasyon tamburunda iç yapı tasarlanırken ürünün yapışkanlık, aşındırıcılık, tozuma, nem ve granül boyutu dikkate alınmalıdır.
                  Organomineral gübre gibi organik madde içeren ürünlerde fazla nem tambur iç yüzeyinde yapışma oluşturabilir. Bu durumda iç astar,
                  sıyırıcı ve daha düşük doluluk oranı değerlendirilmelidir.
                </p>
              </SectionCard>

              <SectionCard title="Nozzle Sistemi ve Bağlayıcı Püskürtme">
                <p>
                  Granülasyon kalitesinin en kritik noktalarından biri bağlayıcı sıvının tambur içine nasıl verildiğidir.
                  Nozul sistemi doğru tasarlanmazsa tambur doğru ölçüde olsa bile ürün kalitesi bozulur.
                </p>
                <p>
                  Bağlayıcı sıvı; su, melas, lignosülfonat, şilempe, sıvı organik katkı, sıvı gübre, bentonit çözeltisi veya
                  özel kimyasal bağlayıcı olabilir.
                </p>
                <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Nozzle sisteminin görevi</h3>
                <ul className="space-y-2 pl-5">
                  <li>- Bağlayıcıyı homojen dağıtmak</li>
                  <li>- Toz partiküller üzerinde kontrollü nem filmi oluşturmak</li>
                  <li>- Çekirdek granül oluşumunu başlatmak</li>
                  <li>- Aşırı ıslak bölge oluşumunu engellemek</li>
                  <li>- Topaklanma riskini azaltmak</li>
                  <li>- Ürün sertliği ve yuvarlaklığını iyileştirmek</li>
                </ul>
                <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Nozzle yerleşimi</h3>
                <p>
                  Granülasyon tamburunda bağlayıcı genellikle tamburun girişe yakın ilk bölümünde verilir. Ancak tek noktadan aşırı sıvı vermek doğru değildir.
                  Daha kontrollü bir sistem için sıvı, tambur boyunca belirli bir püskürtme bölgesine yayılmalıdır.
                </p>
                <TableSection
                  title="Nozzle Yerleşim Seçenekleri"
                  headers={["Nozzle Yerleşimi", "Kullanım Durumu", "Değerlendirme"]}
                  rows={nozzlePlacementRows}
                />
                <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                  Premium nozzle sistemi için önerilen yapı
                </h3>
                <FlowBox
                  title="Bağlayıcı Hattı Akışı"
                  steps={[
                    "Bağlayıcı tankı",
                    "Filtre",
                    "Dozaj pompası",
                    "Debimetre",
                    "Basınç göstergesi",
                    "Nozzle hattı",
                    "Tambur içi püskürtme bölgesi",
                  ]}
                />
                <p>
                  Bu yapıda bağlayıcı sadece pompa ile basılmaz; debisi ve basıncı kontrol edilir. Çünkü granül kalitesi için sıvı miktarı kadar
                  sıvının damlacık formu da önemlidir.
                </p>
                <TableSection
                  title="Nozzle Tasarımında Dikkat Edilecekler"
                  headers={["Kriter", "Neden Önemli?"]}
                  rows={nozzleCriteriaRows}
                />
              </SectionCard>

              <SectionCard title="Nozzle ve Püskürtme Bölgesi">
                <NozzleDiagram />
              </SectionCard>

              <SectionCard title="Bağlayıcı Dozajı Nasıl Belirlenir?">
                <p>
                  Bağlayıcı miktarı ürün reçetesine, hammadde nemine, hedef granül çapına ve istenen ürün sertliğine göre değişir.
                  Ön tasarımda bağlayıcı dozajı genellikle kg/ton ürün üzerinden değerlendirilir.
                </p>
                <TableSection
                  title="Tipik Bağlayıcı Dozaj Aralıkları"
                  headers={["Ürün / Proses", "Tipik Bağlayıcı Dozajı"]}
                  rows={binderRangeRows}
                />
                <p>
                  Bu değerler kesin reçete değildir. Gerçek dozaj, laboratuvar ve pilot granülasyon testiyle netleştirilmelidir.
                </p>
                <FormulaBox
                  title="Bağlayıcı Debisi Formülü"
                  formula={"Bağlayıcı debisi (kg/saat) = Nihai ürün kapasitesi (ton/saat) × Bağlayıcı dozajı (kg/ton)"}
                  example={
                    <>
                      <p>Nihai ürün kapasitesi = 5 ton/saat</p>
                      <p>Bağlayıcı dozajı = 50 kg/ton</p>
                      <p>Bağlayıcı debisi = 5 × 50 = 250 kg/saat</p>
                      <p>Bağlayıcı yoğunluğu = 1,20 kg/L</p>
                      <p>Bağlayıcı debisi = 250 / 1,20 = 208 L/saat</p>
                    </>
                  }
                />
              </SectionCard>

              <SectionCard title="Tambur Doluluk Oranı">
                <p>
                  Granülasyon tamburunda doluluk oranı kritik bir tasarım parametresidir. Doluluk oranı tambur içinde oluşan ürün yatağının büyüklüğünü belirler.
                  Granülasyon uygulamalarında pratik doluluk genellikle %8–18 aralığında değerlendirilir.
                </p>
                <TableSection
                  title="Granülasyon Tamburunda Doluluk Oranı Değerlendirmesi"
                  headers={["Doluluk Oranı", "Değerlendirme"]}
                  rows={fillRatioRows}
                />
                <p>
                  Eğer doluluk çok düşük olursa ürün yeterli yuvarlanma yatağı oluşturamaz. Eğer doluluk çok yüksek olursa malzeme tambur içinde rahat yuvarlanmak
                  yerine kütle halinde kayar. Bu da granül kalitesini düşürür.
                </p>
              </SectionCard>

              <SectionCard title="Kalış Süresi">
                <p>
                  Kalış süresi, malzemenin tambur içinde ne kadar süre kaldığını gösterir. Granül büyümesi için ürünün tambur içinde yeterli süre kalması gerekir.
                </p>
                <TableSection
                  title="Granülasyon Tamburunda Tipik Kalış Süreleri"
                  headers={["Proses", "Kalış Süresi"]}
                  rows={residenceRows}
                />
                <FormulaBox
                  title="Kalış Süresi Hesabı"
                  formula={"Tambur içinde bulunması gereken malzeme (ton) =\nToplam tambur giriş yükü (ton/saat) × Kalış süresi (dakika) / 60"}
                  example={
                    <>
                      <p>Toplam tambur giriş yükü = 6 ton/saat</p>
                      <p>Kalış süresi = 8 dakika</p>
                      <p>Tambur içi malzeme = 6 × 8 / 60 = 0,8 ton</p>
                    </>
                  }
                />
                <p>
                  Bu 0,8 tonluk ürün, yoğunluk ve doluluk oranıyla birlikte tambur hacminin hesaplanmasında kullanılır.
                </p>
              </SectionCard>

              <SectionCard title="Recycle Oranı ve Elek Geri Dönüşü">
                <p>
                  Granülasyon hattında elek altı ve elek üstü ürün genellikle tekrar sisteme döndürülür. Bu recycle hattı, granül çekirdeği oluşumunu destekler ve
                  ürün tane dağılımını iyileştirir. Ancak recycle oranı arttıkça tamburun gerçek yükü de artar.
                </p>
                <FormulaBox
                  title="Recycle Yükü Formülü"
                  formula={"Recycle yükü (ton/saat) =\nNihai ürün kapasitesi × Recycle oranı / 100"}
                  example={
                    <>
                      <p>Nihai ürün kapasitesi = 5 ton/saat</p>
                      <p>Recycle oranı = %30</p>
                      <p>Recycle yükü = 5 × 30 / 100 = 1,5 ton/saat</p>
                    </>
                  }
                />
                <FormulaBox
                  title="Toplam Tambur Giriş Yükü"
                  formula={"Toplam tambur giriş yükü =\nNihai ürün kapasitesi + Recycle yükü + Bağlayıcı yükü"}
                />
                <TableSection
                  title="Recycle Oranı Değerlendirmesi"
                  headers={["Recycle Oranı", "Proses Yorumu"]}
                  rows={recycleRows}
                />
              </SectionCard>

              <SectionCard title="Tambur Çapı ve Boyu Nasıl Hesaplanır?">
                <p>
                  Granülasyon tamburunda çap ve boy hesabı, gerekli tambur hacmine göre yapılır. Önce tambur içindeki malzeme miktarı hesaplanır.
                  Sonra yığın yoğunluğuna göre aktif malzeme hacmi bulunur. Daha sonra doluluk oranına göre toplam tambur geometrik hacmi hesaplanır.
                </p>
                <FormulaSteps
                  title="Ana Hesap Adımları"
                  steps={[
                    "Toplam tambur giriş yükü = Nihai kapasite + Recycle + Bağlayıcı",
                    "Tambur içi malzeme = Toplam giriş yükü × Kalış süresi / 60",
                    "Aktif malzeme hacmi = Tambur içi malzeme × 1000 / Yığın yoğunluğu",
                    "Gerekli tambur hacmi = Aktif malzeme hacmi / Doluluk oranı",
                    "Tambur hacmi = π × D² × L / 4",
                  ]}
                />
                <FormulaBox
                  title="L/D Oranı ile Tambur Çapı"
                  formula={"L = L/D × D\n\nD = ∛[4 × V / (π × L/D)]"}
                />
                <TableSection
                  title="Semboller"
                  headers={["Sembol", "Anlamı"]}
                  rows={symbolRows}
                />
                <p>
                  Granülasyon tamburlarında L/D oranı genellikle 3–6 aralığında seçilir. Standart uygulamalarda 4 civarı başlangıç için iyi bir ön tasarım değeridir.
                </p>
              </SectionCard>

              <SectionCard title="Devir ve Kritik Hız">
                <p>
                  Tambur devri granülasyon kalitesini doğrudan etkiler. Devir düşük olursa ürün yeterince yuvarlanmaz. Devir çok yüksek olursa ürün tambur duvarına yapışabilir,
                  savrulabilir veya granül büyümesi kontrolsüz hale gelebilir.
                </p>
                <FormulaBox
                  title="Kritik Devir Formülü"
                  formula={"Kritik devir (rpm) = 42,3 / √D"}
                  example={<p>Burada D metre cinsinden tambur çapıdır.</p>}
                />
                <FormulaBox
                  title="Granülasyon Tamburu Çalışma Devri"
                  formula={"Çalışma devri = Kritik devrin %25–45’i"}
                />
                <TableSection
                  title="Devir Seçimi Değerlendirmesi"
                  headers={["Proses Durumu", "Önerilen Devir Yaklaşımı"]}
                  rows={speedRows}
                />
                <p>
                  Devir mutlaka inverter ile ayarlanabilir olmalıdır. Çünkü ürün reçetesi, nem oranı, bağlayıcı miktarı ve recycle oranı değiştiğinde optimum tambur devri de değişir.
                </p>
              </SectionCard>

              <SectionCard title="Tambur Eğimi">
                <p>
                  Tambur eğimi, ürünün tambur içindeki ilerleme hızını belirler. Eğim arttıkça ürün daha hızlı çıkar ve kalış süresi azalır. Eğim azaldıkça ürün daha uzun süre tambur içinde kalır.
                </p>
                <TableSection
                  title="Granülasyon Tamburu Eğim Aralıkları"
                  headers={["Uygulama", "Önerilen Eğim"]}
                  rows={slopeRows}
                />
                <p>
                  Çok yüksek eğim, granül oluşmadan ürünün tamburdan çıkmasına neden olabilir. Çok düşük eğim ise tambur içinde ürün birikimi ve kapasite dalgalanması oluşturabilir.
                </p>
              </SectionCard>

              <SectionCard title="Malzeme Seçimi ve Gövde Yapısı">
                <TableSection
                  title="Ürün Durumuna Göre Gövde ve İç Yüzey Seçimi"
                  headers={["Ürün Durumu", "Gövde / İç Yüzey Önerisi"]}
                  rows={materialRows}
                />
                <p>
                  Pro Makina formatında malzeme tanımı ürün ve proses ihtiyacına göre “Paslanmaz çelik, galvaniz ve RAL boyalı” gövde seçenekleri üzerinden değerlendirilebilir.
                </p>
              </SectionCard>

              <SectionCard title="Tahrik Sistemi">
                <p>
                  Granülasyon tamburunda tahrik sistemi tamburun çapına, boyuna, dolu ağırlığına ve çalışma devrine göre seçilir.
                </p>
                <TableSection
                  title="Granülasyon Tamburunda Tahrik Tipleri"
                  headers={["Tahrik Tipi", "Kullanım Durumu"]}
                  rows={driveRows}
                />
                <p>
                  Tahrik sisteminde inverter önerilir. İnverterli sistem yumuşak kalkış sağlar, redüktör ve dişli yükünü azaltır, tambur devrini reçeteye göre ayarlamayı sağlar,
                  granül kalitesini optimize eder ve mekanik ömrü artırır.
                </p>
              </SectionCard>

              <SectionCard title="Otomasyon ve Kontrol">
                <p>
                  Premium bir granülasyon tamburu manuel çalışan bir döner makine gibi değil, prosesin kontrollü bir parçası olarak tasarlanmalıdır.
                </p>
                <TableSection
                  title="Granülasyon Tamburunda Kontrol Edilecek Parametreler"
                  headers={["Parametre", "Kontrol Amacı"]}
                  rows={controlRows}
                />
                <p>
                  İdeal sistemde tambur devri, besleme hızı ve bağlayıcı pompa debisi birbiriyle senkron çalışmalıdır.
                </p>
              </SectionCard>

              <SectionCard title="Granülatör Tamburu Ön Seçim Tablosu">
                <TableSection
                  title="Ön Mühendislik Yönlendirme Tablosu"
                  headers={["Kriter", "Düşük Kapasite", "Orta Kapasite", "Yüksek Kapasite"]}
                  rows={presizingRows}
                />
                <p className="text-sm text-slate-600">
                  Bu tablo kesin imalat ölçüsü vermez; ön mühendislik yönlendirmesi sağlar.
                </p>
              </SectionCard>

              <SectionCard title="Sık Yapılan Tasarım Hataları">
                <TableSection
                  title="Tasarım Hataları ve Sonuçları"
                  headers={["Hata", "Sonuç"]}
                  rows={mistakeRows}
                />
              </SectionCard>

              <SectionCard title="Granülasyon Tamburu Seçerken Sorulması Gereken Ana Sorular">
                <TableSection
                  title="Ön Tasarım Soruları"
                  headers={["Soru", "Neden Gerekli?"]}
                  rows={questionRows}
                />
              </SectionCard>

              <SectionCard title="Granülatör Tamburunda Proses Kalitesini Belirleyen Ana Noktalar">
                <ol className="space-y-4">
                  {processQualityItems.map((item, index) => (
                    <li key={item.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#278DC0]">
                        Madde {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </SectionCard>

              <SectionCard title="Pro Makina ile Granülasyon Tamburu Tasarımı">
                <p>
                  Pro Makina granülasyon tamburu tasarımında sadece tambur çapı ve boyuna odaklanmaz. Ürünün proses davranışı, nem dengesi, bağlayıcı sistemi,
                  recycle hattı, kurutma-soğutma entegrasyonu, tahrik sistemi ve otomasyon yapısı birlikte değerlendirilir.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Hedef üretim kapasitesi",
                    "Hammadde fiziksel özellikleri",
                    "Giriş ve çıkış nemi",
                    "Hedef granül çapı",
                    "Bağlayıcı tipi ve dozajı",
                    "Nozzle sistemi",
                    "Recycle oranı",
                    "Tambur doluluk oranı",
                    "Kalış süresi",
                    "Devir ve eğim",
                    "İç kanat ve astar yapısı",
                    "Kurutucu, soğutucu ve elek entegrasyonu",
                    "Tahrik sistemi",
                    "Otomasyon ve proses kontrolü",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard title="Sonuç">
                <p>
                  Granülatör tamburu seçimi; kapasite, ürün tipi, bağlayıcı, recycle, nem, devir, eğim ve iç yapı gibi birçok parametrenin birlikte değerlendirilmesini gerektirir.
                  Yanlış seçilmiş bir tambur; düşük granül kalitesi, yüksek recycle, fazla toz, topaklanma, kurutma yükü artışı ve kapasite kaybı oluşturabilir.
                </p>
                <p>
                  Doğru tasarlanmış bir granülasyon tamburu ise daha dengeli granül çapı sağlar, toz oranını azaltır, kurutma ve eleme hattını rahatlatır,
                  ürün sertliğini ve yuvarlaklığını iyileştirir, paketleme kalitesini artırır ve reçete değişimlerinde proses esnekliği sağlar.
                </p>
                <p>
                  Granülasyon tamburu seçiminde en doğru sonuç için ürün numunesi, proses hedefi, kapasite beklentisi ve saha yerleşimi birlikte değerlendirilmelidir.
                  Kesin imalat ölçüleri; ön hesap, pilot test, detay mühendislik ve mekanik tasarım sonrasında netleştirilmelidir.
                </p>
              </SectionCard>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Granülatör Tamburu Hakkında Sık Sorulan Sorular
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Granülasyon tamburu, nozzle sistemi, recycle yükü ve ön mühendislik yaklaşımı hakkında
                    en çok sorulan soruları kısa ama teknik çerçevede yanıtladık.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {faqItems.map((faq, index) => (
                    <div
                      key={faq.question}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Soru {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-950">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    İlgili Teknik İçerikler ve Programlar
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Granülatör tamburu seçimini destekleyen makine, hizmet, hesaplama ve teklif sayfalarına aşağıdan erişebilirsiniz.
                  </p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#278DC0] hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                    >
                      <span className="block text-lg font-semibold text-slate-950">
                        {item.title}
                      </span>
                      <span className="mt-3 block text-sm leading-7 text-slate-600">
                        {item.description}
                      </span>
                      <span className="mt-4 inline-flex text-sm font-semibold text-[#278DC0] transition group-hover:text-[#154764]">
                        İçeriği İncele
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              <GlobalBottomCta
                title="Granülasyon tamburu projeniz için ön mühendislik değerlendirmesi alın."
                description="Hedef kapasite, ürün tipi, nem oranı, bağlayıcı sistemi, recycle hattı ve saha yerleşiminize göre granülasyon tamburu çapı, boyu, devir, eğim, iç yapı ve nozzle sistemini birlikte değerlendirebiliriz."
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
