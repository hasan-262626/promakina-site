"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";

type TabKey = "geometry" | "ratio" | "reference" | "speed";
type Severity = "critical" | "warning" | "info";

type WarningItem = {
  level: Severity;
  title: string;
  text: string;
};

type GeometryForm = {
  systemType: string;
  module: string;
  z1: string;
  z2: string;
  epsilon: string;
  pressure: string;
  helix: string;
  rpm: string;
  faceWidth: string;
  shaft1: string;
  shaft2: string;
  hub1: string;
  hub2: string;
};

type RatioForm = {
  module: string;
  z1: string;
  z2: string;
  epsilon: string;
  pressure: string;
  helix: string;
  rpm: string;
};

type SpeedForm = {
  module: string;
  z1: string;
  z2: string;
  helix: string;
  rpm: string;
  power: string;
};

const TABS = [
  { key: "geometry" as const, label: "Konik Dişli Geometri Hesabı" },
  { key: "ratio" as const, label: "İletim / Devir Oranı" },
  { key: "reference" as const, label: "Temel Ölçüler ve Açıklamalar" },
  { key: "speed" as const, label: "Hız / Yol Ön Değerlendirme" },
];

const MODULE_OPTIONS = ["1", "1.25", "1.5", "2", "2.5", "3", "4", "5", "6", "8", "10", "12", "16", "20"];
const EPSILON_OPTIONS = ["60", "75", "90", "100", "120"];
const PRESSURE_OPTIONS = ["20", "14.5", "25"];
const HELIX_OPTIONS = ["0", "8", "10", "12", "15", "20", "25", "30"];
const SYSTEM_OPTIONS = ["Düz Konik Dişli", "Helisel Konik Dişli"];

const INFO_TEXT =
  "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT =
  "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const n = (value: string) => {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};

const fmt = (value: number, suffix = "", digits = 2) =>
  `${new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)}${suffix}`;

const rad = (value: number) => (value * Math.PI) / 180;
const deg = (value: number) => (value * 180) / Math.PI;
const safeCos = (value: number) => Math.max(Math.cos(rad(value)), 0.0001);
const systemType = (helix: number) => (helix > 0 ? "Helisel Konik Dişli" : "Düz Konik Dişli");
const toneFromSpeed = (speed: number): Severity => (speed > 12 ? "critical" : speed > 6 ? "warning" : "info");

function Tooltip({
  id,
  text,
  openId,
  setOpenId,
}: {
  id: string;
  text: string;
  openId: string | null;
  setOpenId: (value: string | null) => void;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isOpen = openId === id;

  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setOpenId]);

  return (
    <span ref={ref} className="relative ml-2 inline-flex" onMouseEnter={() => setOpenId(id)} onMouseLeave={() => setOpenId(null)}>
      <button
        type="button"
        aria-label={text}
        aria-expanded={isOpen}
        aria-describedby={`${id}-tooltip`}
        onClick={() => setOpenId(isOpen ? null : id)}
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[11px] font-semibold text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
      >
        i
      </button>
      {isOpen ? (
        <span
          id={`${id}-tooltip`}
          role="tooltip"
          className="absolute left-1/2 top-[calc(100%+10px)] z-30 w-64 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}

function FieldShell({
  label,
  helperText,
  limitText,
  liveText,
  error,
  tip,
  tipId,
  openTip,
  setOpenTip,
  children,
}: {
  label: string;
  helperText?: string;
  limitText?: string;
  liveText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center text-sm font-medium text-slate-700">
        {label}
        {tip ? <Tooltip id={tipId} text={tip} openId={openTip} setOpenId={setOpenTip} /> : null}
      </span>
      {helperText ? <span className="text-xs font-medium text-slate-600">{helperText}</span> : null}
      {limitText ? <span className="text-xs leading-5 text-slate-500">{limitText}</span> : null}
      {children}
      {liveText ? <span className={`text-xs leading-5 ${error ? "text-rose-600" : "text-slate-500"}`}>{liveText}</span> : null}
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

function InputField(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  helperText?: string;
  limitText?: string;
  liveText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell {...props}>
      <div className={`flex items-center rounded-2xl border px-4 py-3 transition ${props.error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"}`}>
        <input
          inputMode="decimal"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value.replace(/[^0-9.,-]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {props.unit ? <span className="ml-3 text-sm text-slate-500">{props.unit}</span> : null}
      </div>
    </FieldShell>
  );
}

function SelectField(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell {...props}>
      <select value={props.value} onChange={(event) => props.onChange(event.target.value)} className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white">
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function AutoField({ label, value, helper = "Otomatik hesaplanır" }: { label: string; value: string; helper?: string }) {
  return <div className="grid gap-2"><span className="text-sm font-medium text-slate-700">{label}</span><span className="text-xs text-slate-500">{helper}</span><div className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900">{value}</div></div>;
}

function ResultGrid({ title, items }: { title: string; items: Array<{ label: string; value: string; tone?: Severity }> }) {
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2">{items.map((item) => <div key={item.label} className={`rounded-2xl border px-5 py-4 ${item.tone === "critical" ? "border-rose-100 bg-rose-50" : item.tone === "warning" ? "border-amber-100 bg-amber-50" : item.tone === "info" ? "border-sky-100 bg-sky-50" : "border-slate-200 bg-white"}`}><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p><p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p></div>)}</div></div>;
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>;
}

function WarningBox({ items }: { items: WarningItem[] }) {
  if (!items.length) return null;
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-semibold text-slate-950">Teknik Uyarılar</h3><div className="mt-4 space-y-3">{items.map((item, index) => <div key={`${item.title}-${index}`} className={`rounded-2xl border px-4 py-4 ${item.level === "critical" ? "border-rose-200 bg-rose-50" : item.level === "warning" ? "border-amber-200 bg-amber-50" : "border-sky-200 bg-sky-50"}`}><div className="flex items-center gap-3"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${item.level === "critical" ? "bg-rose-100 text-rose-700" : item.level === "warning" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"}`}>{item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}</span><p className="text-sm font-semibold text-slate-900">{item.title}</p></div><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>)}</div></div>;
}

function GuideBox() {
  return <InfoBox title="Nasıl Kullanılır?" text="1. Modül ve açı değerlerini seçin. 2. Döndüren ve döndürülen diş sayılarını girin. 3. Gerekli devir bilgisini girin. 4. Sonuç ve teknik uyarıları kontrol edin." />;
}

function LeadBox() {
  return <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6"><h3 className="text-lg font-semibold text-slate-950">Projenize Uygun Konik Dişli Çözümü mü Arıyorsunuz?</h3><p className="mt-3 text-sm leading-7 text-slate-600">Standart veya özel ölçülerde düz ve helisel konik dişli çözümleri için bizimle iletişime geçin. Projenize uygun teknik yaklaşımı birlikte netleştirelim.</p><div className="mt-5 flex flex-wrap gap-3"><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Al</a><a href="/iletisim" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">İletişime Geç</a></div></div>;
}

function commonBevelMath(moduleValue: number, epsilonValue: number, helixValue: number, z1Value: number, z2Value: number) {
  const cosBeta = safeCos(helixValue);
  const mt = moduleValue / cosBeta;
  const d1 = mt * z1Value;
  const d2 = mt * z2Value;
  const delta1 = deg(Math.atan2(Math.sin(rad(epsilonValue)), z2Value / z1Value + Math.cos(rad(epsilonValue))));
  const delta2 = epsilonValue - delta1;
  const safeSin1 = Math.max(Math.sin(rad(delta1)), 0.0001);
  const safeSin2 = Math.max(Math.sin(rad(delta2)), 0.0001);
  const r1 = d1 / (2 * safeSin1);
  const r2 = d2 / (2 * safeSin2);
  const r = (r1 + r2) / 2;
  return { mt, d1, d2, delta1, delta2, r1, r2, r, cosBeta };
}

function geometryModel(form: GeometryForm) {
  const mn = n(form.module);
  const epsilon = n(form.epsilon);
  const alpha = n(form.pressure);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm = n(form.rpm);
  const faceWidth = n(form.faceWidth);
  const shaft1 = n(form.shaft1);
  const shaft2 = n(form.shaft2);
  const hub1 = n(form.hub1);
  const hub2 = n(form.hub2);

  const { mt, d1, d2, delta1, delta2, r1, r2, r, cosBeta } = commonBevelMath(mn, epsilon, beta, z1, z2);
  const h = 2.25 * mn;
  const da1 = d1 + 2 * mn * Math.cos(rad(delta1));
  const da2 = d2 + 2 * mn * Math.cos(rad(delta2));
  const df1 = Math.max(d1 - 2.5 * mn * Math.cos(rad(delta1)), 0);
  const df2 = Math.max(d2 - 2.5 * mn * Math.cos(rad(delta2)), 0);
  const db1 = d1 * Math.cos(rad(alpha));
  const db2 = d2 * Math.cos(rad(alpha));
  const recommendedB = r / 3;
  const usedB = faceWidth > 0 ? faceWidth : recommendedB;
  const alpha1 = alpha + delta1 / 10;
  const alpha2 = alpha + delta2 / 10;
  const theta1 = Math.max(delta1 - alpha / 2, 0);
  const theta2 = Math.max(delta2 - alpha / 2, 0);
  const f1 = r1 - d1 / 2;
  const f2 = r2 - d2 / 2;
  const g1 = Math.max(r1 - usedB, 0);
  const g2 = Math.max(r2 - usedB, 0);
  const zi1 = z1 / Math.max(Math.cos(rad(delta1)) * cosBeta, 0.0001);
  const zi2 = z2 / Math.max(Math.cos(rad(delta2)) * cosBeta, 0.0001);

  const errors = {
    z1: z1 < 10 ? "Diş sayısı en az 10 olmalıdır" : "",
    z2: z2 < 10 ? "Diş sayısı en az 10 olmalıdır" : "",
    module: mn <= 0 ? "Lütfen modül seçiniz" : "",
    epsilon: epsilon <= 0 ? "Toplam çalışma açısı seçiniz" : "",
    rpm: rpm <= 0 ? "Döndüren dişli devri 0'dan büyük olmalıdır" : "",
    hub1:
      hub1 > 0 && shaft1 > 0 && hub1 <= shaft1
        ? "Göbek çapı mil çapısından büyük olmalıdır"
        : hub1 > df1 && df1 > 0
          ? "Göbek çapı diş kökü geometrisine fazla yaklaşıyor"
          : "",
    hub2:
      hub2 > 0 && shaft2 > 0 && hub2 <= shaft2
        ? "Göbek çapı mil çapısından büyük olmalıdır"
        : hub2 > df2 && df2 > 0
          ? "Göbek çapı diş kökü geometrisine fazla yaklaşıyor"
          : "",
    faceWidth: faceWidth > 0 && faceWidth > recommendedB ? "Diş genişliği bu geometri için yüksek olabilir" : "",
  };

  const warnings: WarningItem[] = [];
  if (epsilon !== 90) {
    warnings.push({
      level: "info",
      title: "Standart dışı toplam çalışma açısı",
      text: "Toplam çalışma açısı 90° dışında seçildi. Bu durumda genel konik dişli yaklaşımı uygulanır ve özel geometri doğrulaması önerilir.",
    });
  }
  if (beta > 0) {
    warnings.push({
      level: beta > 20 ? "warning" : "info",
      title: "Helisel konik dişli etkisi",
      text: "Helisel konik dişlilerde temas karakteri daha yumuşak olabilir; buna karşılık imalat ve montaj toleransları daha kritik hale gelir.",
    });
  }
  if (faceWidth > 0 && faceWidth > recommendedB) {
    warnings.push({
      level: "warning",
      title: "Diş genişliği yüksek",
      text: "Diş genişliği koni boyuna göre yüksek olabilir. Bu durum temas dağılımını ve üretim hassasiyetini etkileyebilir.",
    });
  }
  if (hub1 > df1 || hub2 > df2) {
    warnings.push({
      level: "critical",
      title: "Göbek çapısı kritik sınıra yaklaşıyor",
      text: "Göbek çapısı önerilen sınırı aşıyor. Bu durum diş kökü bölgesindeki et kalınlığını azaltarak dayanım riskine neden olabilir.",
    });
  }

  const summary =
    warnings.find((item) => item.level === "critical")?.text ??
    warnings.find((item) => item.level === "warning")?.text ??
    (epsilon === 90
      ? "Toplam çalışma açısı 90° seçildiği için klasik açılı konik dişli yaklaşımı uygulanmıştır."
      : "Girilen değerler konik dişli ön boyutlandırması açısından uyumludur.");

  return {
    system: systemType(beta),
    ratio: z2 / z1,
    d1,
    d2,
    da1,
    da2,
    df1,
    df2,
    db1,
    db2,
    b1: usedB,
    b2: usedB,
    delta1,
    delta2,
    alpha1,
    alpha2,
    theta1,
    theta2,
    ra1: r1,
    ra2: r2,
    f1,
    f2,
    g1,
    g2,
    zi1,
    zi2,
    h,
    effectiveModule: mt,
    totalAngle: epsilon,
    cosValue: cosBeta,
    recommendedB,
    warnings,
    summary,
    errors,
    hubInfo1: hub1 > 0 ? `Diş dibi sınırı yaklaşık ${fmt(df1, " mm")} • Mevcut fark ${fmt(df1 - hub1, " mm")}` : `Göbek 1 için önerilen üst sınır yaklaşık ${fmt(df1, " mm")}`,
    hubInfo2: hub2 > 0 ? `Diş dibi sınırı yaklaşık ${fmt(df2, " mm")} • Mevcut fark ${fmt(df2 - hub2, " mm")}` : `Göbek 2 için önerilen üst sınır yaklaşık ${fmt(df2, " mm")}`,
  };
}

function ratioModel(form: RatioForm) {
  const mn = n(form.module);
  const epsilon = n(form.epsilon);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm1 = n(form.rpm);
  const { d2, delta1, delta2 } = commonBevelMath(mn, epsilon, beta, z1, z2);
  const ratio = z2 / z1;
  const rpm2 = rpm1 > 0 ? rpm1 * (z1 / z2) : 0;
  const oneTurn = Math.PI * d2;
  const oneMinute = oneTurn * rpm2;
  const speed = oneMinute / 60000;
  const warnings: WarningItem[] = [];
  if (z1 < 10 || z2 < 10) warnings.push({ level: "warning", title: "Düşük diş sayısı", text: "Düşük diş sayıları çalışma karakterini etkileyebilir ve konik dişli iletim oranı hesabında daha dikkatli yorum gerektirir." });
  if (beta > 0) warnings.push({ level: "info", title: "Helisel temas karakteri", text: "Helisel yapı daha yumuşak kavrama karakteri sağlayabilir. Buna rağmen oran hesabı temel olarak diş sayısı ilişkisine göre oluşur." });
  const summary = warnings.find((item) => item.level === "warning")?.text ?? (ratio > 1 ? "Bu kombinasyon çıkış devrini düşüren bir oran üretmektedir." : ratio < 1 ? "Bu kombinasyon çıkış devrini artıran bir oran üretmektedir." : "Sistem 1:1 iletim karakterindedir.");
  return { ratio, rpm2, oneTurn, oneMinute, speed, delta1, delta2, system: systemType(beta), summary, warnings };
}

function speedModel(form: SpeedForm) {
  const mn = n(form.module);
  const beta = n(form.helix);
  const z1 = Math.max(1, Math.round(n(form.z1)));
  const z2 = Math.max(1, Math.round(n(form.z2)));
  const rpm1 = n(form.rpm);
  const power = n(form.power);
  const mt = mn / safeCos(beta);
  const d1 = mt * z1;
  const d2 = mt * z2;
  const rpm2 = rpm1 > 0 ? rpm1 * (z1 / z2) : 0;
  const speed1 = (Math.PI * d1 * rpm1) / 60000;
  const speed2 = (Math.PI * d2 * rpm2) / 60000;
  const oneTurn = Math.PI * d2;
  const oneMinute = oneTurn * rpm2;
  const force = power > 0 && d2 > 0 && rpm2 > 0 ? (1910000 * power) / (d2 * rpm2) : 0;
  const warnings: WarningItem[] = [];
  if (speed2 > 12) warnings.push({ level: "critical", title: "Yüksek çevresel hız", text: "Bu hız aralığında malzeme, yüzey sertliği, yağlama ve dişli kalite sınıfı daha kritik hale gelir." });
  else if (speed2 > 6) warnings.push({ level: "warning", title: "Yüksek çalışma hızı", text: "Konik dişli çevresel hızı yükseldikçe dinamik etkiler artabilir. Nihai tasarımda emniyet katsayıları ayrıca değerlendirilmelidir." });
  if (!form.power) warnings.push({ level: "info", title: "Opsiyonel güç girilmedi", text: "Opsiyonel güç değeri girilmediği için çevresel kuvvet yalnızca hız ve yol değerlendirmesi üzerinden yorumlanmaktadır." });
  return {
    d1,
    d2,
    speed1,
    speed2,
    oneTurn,
    oneMinute,
    force,
    speedClass: speed2 <= 1 ? "Düşük hız" : speed2 <= 6 ? "Standart" : speed2 <= 12 ? "Yüksek hız" : "Dikkat",
    summary: warnings.find((item) => item.level === "critical")?.text ?? warnings.find((item) => item.level === "warning")?.text ?? "Bu alan ön değerlendirme içindir. Nihai tasarımda malzeme, darbe katsayısı, yüzey sertliği, dişli kalite sınıfı ve emniyet katsayıları ayrıca değerlendirilmelidir.",
    warnings,
  };
}

export function BevelGearCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("geometry");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [geometry, setGeometry] = useState<GeometryForm>({
    systemType: "Düz Konik Dişli",
    module: "3",
    z1: "20",
    z2: "40",
    epsilon: "90",
    pressure: "20",
    helix: "0",
    rpm: "1450",
    faceWidth: "",
    shaft1: "",
    shaft2: "",
    hub1: "",
    hub2: "",
  });
  const [ratio, setRatio] = useState<RatioForm>({
    module: "3",
    z1: "20",
    z2: "40",
    epsilon: "90",
    pressure: "20",
    helix: "0",
    rpm: "1450",
  });
  const [speed, setSpeed] = useState<SpeedForm>({
    module: "3",
    z1: "20",
    z2: "40",
    helix: "0",
    rpm: "1450",
    power: "",
  });

  const geometryData = useMemo(() => geometryModel(geometry), [geometry]);
  const ratioData = useMemo(() => ratioModel(ratio), [ratio]);
  const speedData = useMemo(() => speedModel(speed), [speed]);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  const moduleOptions = MODULE_OPTIONS.map((value) => ({ value, label: value }));
  const epsilonOptions = EPSILON_OPTIONS.map((value) => ({ value, label: `${value}°` }));
  const pressureOptions = PRESSURE_OPTIONS.map((value) => ({ value, label: `${value}°` }));
  const helixOptions = HELIX_OPTIONS.map((value) => ({ value, label: `${value}°` }));

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="Düz Helis Konik Dişli Hesabı sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab, index) => (
              <button
                key={tab.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                role="tab"
                id={`${tabsId}-${tab.key}`}
                aria-controls={`${tabsId}-${tab.key}-panel`}
                aria-selected={activeTab === tab.key}
                tabIndex={activeTab === tab.key ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-5 ${activeTab === tab.key ? "bg-slate-950 text-white shadow-[0_16px_32px_rgba(15,23,42,0.22)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "geometry" ? (
          <div id={`${tabsId}-geometry-panel`} role="tabpanel" aria-labelledby={`${tabsId}-geometry`} className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold text-slate-950">Konik Dişli Geometri Hesabı</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Düz ve helisel konik dişli sistemlerinde temel çapları, merkez açılarını, koni ana doğrularını ve diş genişliği ilişkilerini teknik olarak değerlendirin.</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <SelectField label="Sistem Tipi" value={geometry.systemType} onChange={(value) => setGeometry((current) => ({ ...current, systemType: value, helix: value === "Helisel Konik Dişli" && n(current.helix) === 0 ? "15" : value === "Düz Konik Dişli" ? "0" : current.helix }))} options={SYSTEM_OPTIONS.map((value) => ({ value, label: value }))} helperText="Bu alanı siz doldurun" limitText="β = 0° ise düz, 0° üzeri ise helisel konik dişli" tip="Helis açısı 0° ise sistem düz, 0° üzerindeyse helisel konik dişli karakteri gösterir." tipId="bg-system" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Modül (mn)" value={geometry.module} onChange={(value) => setGeometry((current) => ({ ...current, module: value }))} options={moduleOptions} helperText="Bu alanı siz doldurun" limitText="Standart modül seçiniz" tip="Konik dişlinin temel boyutunu belirleyen ana ölçüdür. Modül büyüdükçe çap ve diş boyutları artar." tipId="bg-module" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Döndüren Diş Sayısı (Z1)" value={geometry.z1} onChange={(value) => setGeometry((current) => ({ ...current, z1: value }))} helperText="Bu alanı siz doldurun" limitText="Döndüren dişli için önerilen minimum diş sayısı kontrol edilmelidir" error={geometryData.errors.z1} tip="Döndüren dişlinin diş sayısıdır." tipId="bg-z1" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Döndürülen Diş Sayısı (Z2)" value={geometry.z2} onChange={(value) => setGeometry((current) => ({ ...current, z2: value }))} helperText="Bu alanı siz doldurun" limitText="Döndürülen dişli için düşük diş sayıları çalışma karakterini etkileyebilir" error={geometryData.errors.z2} tip="Döndürülen dişlinin diş sayısıdır." tipId="bg-z2" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Toplam Çalışma Açısı (ε)" value={geometry.epsilon} onChange={(value) => setGeometry((current) => ({ ...current, epsilon: value }))} options={epsilonOptions} helperText="Bu alanı siz doldurun" limitText="Konik dişli hesaplarında toplam çalışma açısı genellikle 90° alınır" tip="İki dişli ekseni arasındaki çalışma açısıdır. Çoğu klasik uygulamada 90° kullanılır." tipId="bg-epsilon" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Diş Profil Açısı (α)" value={geometry.pressure} onChange={(value) => setGeometry((current) => ({ ...current, pressure: value }))} options={pressureOptions} helperText="Bu alanı siz doldurun" tip="Diş temas geometrisini belirleyen temel standart açıdır. Genellikle 20° kullanılır." tipId="bg-pressure" openTip={openTip} setOpenTip={setOpenTip} />
                  <SelectField label="Helis Açısı (β)" value={geometry.helix} onChange={(value) => setGeometry((current) => ({ ...current, helix: value, systemType: n(value) > 0 ? "Helisel Konik Dişli" : "Düz Konik Dişli" }))} options={helixOptions} helperText="Bu alanı siz doldurun" limitText="0° = düz konik dişli, 0° üzeri = helisel konik dişli" tip="Helisel konik dişli sistemlerinde dişlerin eğim açısıdır. 0° değeri düz konik dişli anlamına gelir." tipId="bg-helix" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Döndüren Z1 Dişli Devri" value={geometry.rpm} onChange={(value) => setGeometry((current) => ({ ...current, rpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" error={geometryData.errors.rpm} tip="Döndüren dişlinin dakikadaki dönüş sayısıdır." tipId="bg-rpm" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Diş Genişliği / Yüz Genişliği" value={geometry.faceWidth} onChange={(value) => setGeometry((current) => ({ ...current, faceWidth: value }))} unit="mm" helperText="Bu alanı siz doldurun" limitText="Koni boyuna göre aşırı büyük seçilmemelidir" error={geometryData.errors.faceWidth} liveText={`Önerilen üst sınır yaklaşık ${fmt(geometryData.recommendedB, " mm")}`} tip="Diş genişliği, koni ana doğrusu ile ilişkilidir ve taşıma kapasitesi ile üretim hassasiyetini etkiler." tipId="bg-face" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Mil Çapı 1" value={geometry.shaft1} onChange={(value) => setGeometry((current) => ({ ...current, shaft1: value }))} unit="mm" helperText="Bu alanı siz doldurun" limitText="Göbek ve dişli geometrisine uygun olmalı" tip="Dişlinin bağlanacağı milin dış çapıdır." tipId="bg-shaft1" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Mil Çapı 2" value={geometry.shaft2} onChange={(value) => setGeometry((current) => ({ ...current, shaft2: value }))} unit="mm" helperText="Bu alanı siz doldurun" limitText="Göbek ve dişli geometrisine uygun olmalı" tip="Dişlinin bağlanacağı milin dış çapıdır." tipId="bg-shaft2" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Göbek Çapı 1" value={geometry.hub1} onChange={(value) => setGeometry((current) => ({ ...current, hub1: value }))} unit="mm" helperText="Bu alanı siz doldurun" limitText="Min: mil çapısından büyük olmalı • Max: diş kökü bölgesini aşmamalı" liveText={geometryData.hubInfo1} error={geometryData.errors.hub1} tip="Dişlinin merkez göbek bölgesinin dış çapıdır. Diş kökü geometrisini zayıflatmamalıdır." tipId="bg-hub1" openTip={openTip} setOpenTip={setOpenTip} />
                  <InputField label="Göbek Çapı 2" value={geometry.hub2} onChange={(value) => setGeometry((current) => ({ ...current, hub2: value }))} unit="mm" helperText="Bu alanı siz doldurun" limitText="Min: mil çapısından büyük olmalı • Max: diş kökü bölgesini aşmamalı" liveText={geometryData.hubInfo2} error={geometryData.errors.hub2} tip="Dişlinin merkez göbek bölgesinin dış çapıdır. Diş kökü geometrisini zayıflatmamalıdır." tipId="bg-hub2" openTip={openTip} setOpenTip={setOpenTip} />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <h3 className="text-lg font-semibold text-slate-950">Otomatik Gelen / Hesaplanan Alanlar</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <AutoField label="Z1 Diş Üstü Çapı (Øda1)" value={fmt(geometryData.da1, " mm")} />
                  <AutoField label="Z1 Bölüm Dairesi Çapı (Ødo1)" value={fmt(geometryData.d1, " mm")} />
                  <AutoField label="Z1 Diş Dibi Çapı (Ødf1)" value={fmt(geometryData.df1, " mm")} />
                  <AutoField label="Z1 Temel Daire Çapı (Ødg1)" value={fmt(geometryData.db1, " mm")} />
                  <AutoField label="Z1 Diş Genişliği (B1)" value={fmt(geometryData.b1, " mm")} />
                  <AutoField label="Z1 Merkez Açısı (δ1)" value={fmt(geometryData.delta1, "°")} />
                  <AutoField label="Z1 Diş Üstü Açısı (α1)" value={fmt(geometryData.alpha1, "°")} />
                  <AutoField label="Z1 Arka Sırt Açısı (θ1)" value={fmt(geometryData.theta1, "°")} />
                  <AutoField label="Z1 Koni Ana Doğru Uzunluğu (Ra1)" value={fmt(geometryData.ra1, " mm")} />
                  <AutoField label="Z1 Merkez - Bölüm Dairesi Arası (F1)" value={fmt(geometryData.f1, " mm")} />
                  <AutoField label="Z1 Bölüm Dairesi - Göbek Çıkıntı Arası (G1)" value={fmt(geometryData.g1, " mm")} />
                  <AutoField label="Z1 Sanal Diş Sayısı (Zi1)" value={fmt(geometryData.zi1, "", 2)} />
                  <AutoField label="Z2 Diş Üstü Çapı (Øda2)" value={fmt(geometryData.da2, " mm")} />
                  <AutoField label="Z2 Bölüm Dairesi Çapı (Ødo2)" value={fmt(geometryData.d2, " mm")} />
                  <AutoField label="Z2 Diş Dibi Çapı (Ødf2)" value={fmt(geometryData.df2, " mm")} />
                  <AutoField label="Z2 Temel Daire Çapı (Ødg2)" value={fmt(geometryData.db2, " mm")} />
                  <AutoField label="Z2 Diş Genişliği (B2)" value={fmt(geometryData.b2, " mm")} />
                  <AutoField label="Z2 Merkez Açısı (δ2)" value={fmt(geometryData.delta2, "°")} />
                  <AutoField label="Z2 Diş Üstü Açısı (α2)" value={fmt(geometryData.alpha2, "°")} />
                  <AutoField label="Z2 Arka Sırt Açısı (θ2)" value={fmt(geometryData.theta2, "°")} />
                  <AutoField label="Z2 Koni Ana Doğru Uzunluğu (Ra2)" value={fmt(geometryData.ra2, " mm")} />
                  <AutoField label="Z2 Merkez - Bölüm Dairesi Arası (F2)" value={fmt(geometryData.f2, " mm")} />
                  <AutoField label="Z2 Bölüm Dairesi - Göbek Çıkıntı Arası (G2)" value={fmt(geometryData.g2, " mm")} />
                  <AutoField label="Z2 Sanal Diş Sayısı (Zi2)" value={fmt(geometryData.zi2, "", 2)} />
                  <AutoField label="En Büyük Diş Derinliği (h)" value={fmt(geometryData.h, " mm")} />
                  <AutoField label="Referans İç Modül" value={fmt(geometryData.effectiveModule, " mm")} />
                  <AutoField label="Toplam Açı°" value={fmt(geometryData.totalAngle, "°")} />
                  <AutoField label="Kosinüs Değeri" value={fmt(geometryData.cosValue, "", 4)} />
                  <AutoField label="Sistem Tipi" value={geometryData.system} />
                </div>
              </div>
              <GuideBox />
            </div>

            <div className="space-y-6">
              <ResultGrid title="Sonuçlar" items={[
                { label: "Sistem Tipi", value: geometryData.system },
                { label: "İletim Oranı", value: fmt(geometryData.ratio, "", 3) },
                { label: "Z1 Bölüm Dairesi Çapı", value: fmt(geometryData.d1, " mm") },
                { label: "Z2 Bölüm Dairesi Çapı", value: fmt(geometryData.d2, " mm") },
                { label: "Z1 Merkez Açısı", value: fmt(geometryData.delta1, "°"), tone: "info" },
                { label: "Z2 Merkez Açısı", value: fmt(geometryData.delta2, "°"), tone: "info" },
                { label: "Koni Ana Doğru Uzunluğu", value: fmt((geometryData.ra1 + geometryData.ra2) / 2, " mm") },
                { label: "En Büyük Diş Derinliği", value: fmt(geometryData.h, " mm") },
                { label: "Z1 Sanal Diş Sayısı", value: fmt(geometryData.zi1, "", 2) },
                { label: "Z2 Sanal Diş Sayısı", value: fmt(geometryData.zi2, "", 2) },
                { label: "Teknik Uygunluk Özeti", value: geometryData.warnings.find((item) => item.level === "critical") ? "Kritik kontrol gerekli" : geometryData.warnings.find((item) => item.level === "warning") ? "Detaylı kontrol önerilir" : "Ön boyutlandırma için uyumlu", tone: geometryData.warnings.find((item) => item.level === "critical") ? "critical" : geometryData.warnings.find((item) => item.level === "warning") ? "warning" : "info" },
              ]} />
              <InfoBox title="Teknik Değerlendirme" text={geometryData.summary} />
              <WarningBox items={geometryData.warnings} />
              <LeadBox />
            </div>
          </div>
        ) : null}

        {activeTab === "ratio" ? <div id={`${tabsId}-ratio-panel`} role="tabpanel" aria-labelledby={`${tabsId}-ratio`} className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]"><div className="space-y-6"><div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"><h2 className="text-2xl font-semibold text-slate-950">İletim / Devir Oranı</h2><p className="mt-3 text-sm leading-7 text-slate-600">Konik dişli çiftinde diş sayısı oranına göre iletim oranını, çıkış devrini ve çevresel hareketi teknik olarak değerlendirin.</p><div className="mt-6 grid gap-5 md:grid-cols-2"><SelectField label="Modül (mn)" value={ratio.module} onChange={(value) => setRatio((current) => ({ ...current, module: value }))} options={moduleOptions} helperText="Bu alanı siz doldurun" limitText="Standart modül seçiniz" tip="Konik dişli modülü temel çapları ve çevresel yol değerlerini belirler." tipId="br-module" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndüren Diş Sayısı (Z1)" value={ratio.z1} onChange={(value) => setRatio((current) => ({ ...current, z1: value }))} helperText="Bu alanı siz doldurun" limitText="Diş sayısı en az 10 olmalıdır" tip="Döndüren dişlinin diş sayısıdır." tipId="br-z1" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Döndürülen Diş Sayısı (Z2)" value={ratio.z2} onChange={(value) => setRatio((current) => ({ ...current, z2: value }))} helperText="Bu alanı siz doldurun" limitText="Düşük diş sayıları çalışma karakterini etkileyebilir" tip="Döndürülen dişlinin diş sayısıdır." tipId="br-z2" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Toplam Çalışma Açısı (ε)" value={ratio.epsilon} onChange={(value) => setRatio((current) => ({ ...current, epsilon: value }))} options={epsilonOptions} helperText="Bu alanı siz doldurun" limitText="Konik dişli sistemlerinde en yaygın değer 90°'dir" tip="İki dişli ekseni arasındaki çalışma açısıdır." tipId="br-epsilon" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Helis Açısı (β)" value={ratio.helix} onChange={(value) => setRatio((current) => ({ ...current, helix: value }))} options={helixOptions} helperText="Bu alanı siz doldurun" limitText="0° = düz konik dişli, 0° üzeri = helisel konik dişli" tip="Helisel yapı, temas karakterini ve çevresel davranışı etkiler." tipId="br-helix" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z1 Devri" value={ratio.rpm} onChange={(value) => setRatio((current) => ({ ...current, rpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" tip="Döndüren dişlinin dakikadaki dönüş sayısıdır." tipId="br-rpm" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Profil Açısı (α)" value={ratio.pressure} onChange={(value) => setRatio((current) => ({ ...current, pressure: value }))} options={pressureOptions} helperText="Bu alanı siz doldurun" tip="Diş temas geometrisini belirleyen temel standart açıdır." tipId="br-pressure" openTip={openTip} setOpenTip={setOpenTip} /></div></div><GuideBox /></div><div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "İletim Oranı", value: fmt(ratioData.ratio, "", 3) }, { label: "Z2'nin Devri", value: fmt(ratioData.rpm2, " dev/dk") }, { label: "1 Turda Alınan Yol", value: fmt(ratioData.oneTurn, " mm") }, { label: "1 Dakikada Alınan Yol", value: fmt(ratioData.oneMinute, " mm") }, { label: "Çevresel Hız", value: fmt(ratioData.speed, " m/s"), tone: toneFromSpeed(ratioData.speed) }, { label: "Z1 Merkez Açısı", value: fmt(ratioData.delta1, "°") }, { label: "Z2 Merkez Açısı", value: fmt(ratioData.delta2, "°") }, { label: "Sistem Tipi", value: ratioData.system, tone: "info" }]} /><InfoBox title="Teknik Değerlendirme" text={ratioData.summary} /><WarningBox items={ratioData.warnings} /><LeadBox /></div></div> : null}

        {activeTab === "reference" ? <div id={`${tabsId}-reference-panel`} role="tabpanel" aria-labelledby={`${tabsId}-reference`} className="mt-6 grid gap-6 lg:grid-cols-2"><InfoBox title="Konik Dişli Nedir?" text="Konik dişli hesabı, kesişen miller arasında güç aktarımı yapan dişli çiftlerinin temel çaplarını ve merkez açılarını belirlemek için kullanılır. Düz helis konik dişli hesabı özellikle redüktör, aktarma kutusu ve özel tahrik sistemlerinde ön boyutlandırma için faydalıdır." /><InfoBox title="Düz ve Helisel Konik Dişli Farkı" text="Düz konik dişliler daha sade bir temas çizgisine sahiptir. Helisel konik dişliler ise daha yumuşak kavrama ve daha sessiz çalışma potansiyeli sunar; buna karşılık imalat ve montaj hassasiyetleri daha kritiktir." /><InfoBox title="Modül ve Toplam Çalışma Açısı" text="Konik dişli modül hesabı, bölüm dairesi çaplarını ve diş yüksekliğini doğrudan etkiler. Toplam çalışma açısı (ε) ise iki dişli ekseni arasındaki açıdır ve konik dişli merkez açısı hesabı için temel girdidir. Konik dişli hesaplarında en yaygın değer 90°'dir." /><InfoBox title="Merkez Açısı ve Koni Ana Doğrusu" text="Merkez açısı, her dişlinin konik geometri içindeki çalışma konumunu tanımlar. Koni ana doğrusu ise dişli boyunu ve diş genişliği sınırlarını yorumlamak için kullanılır. Diş genişliği çoğu ön değerlendirmede koni ana doğrusunun yaklaşık üçte biri ile sınırlandırılır." /><InfoBox title="Sanal Diş Sayısı Neden Önemlidir?" text="Sanal diş sayısı, düzlemsel eşdeğer davranışı yorumlamak için kullanılır. Helisel konik dişli hesabı ve dayanım değerlendirmelerinde temas karakterini anlamayı kolaylaştırır." /><InfoBox title="Bilgilendirme" text="ε° dıştan çalışan konik dişli hesaplamaları içindir. Düzlemsel konik dişli hesaplamaları bu programda yapılmamaktadır. ε° toplam çalışma açısı, dişlilerin çalışma konumlarında arkada kalan eksenler arası açı olarak kabul edilir. Bu programda normal şartlardaki değerler için konik dişli hesaplamaları yapılmaktadır. Ancak düz-helis konik dişliler oldukça spesifik dişliler olduğu için imalat aşamasında ölçülerde farklılıklar görülebilir. İmalat aşamasında istenen özellikler en uygun şekilde belirlenmeli, gerekli kontroller yapılmalı ve mümkünse numune ürün çalışma çifti olarak istenmelidir." /><LeadBox /></div> : null}

        {activeTab === "speed" ? <div id={`${tabsId}-speed-panel`} role="tabpanel" aria-labelledby={`${tabsId}-speed`} className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]"><div className="space-y-6"><div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"><h2 className="text-2xl font-semibold text-slate-950">Hız / Yol Ön Değerlendirme</h2><p className="mt-3 text-sm leading-7 text-slate-600">Devir ve çap ilişkisine göre konik dişli çevresel hızını, 1 turda alınan yolu ve opsiyonel kuvvet ön tahminini değerlendirin.</p><div className="mt-6 grid gap-5 md:grid-cols-2"><SelectField label="Modül (mn)" value={speed.module} onChange={(value) => setSpeed((current) => ({ ...current, module: value }))} options={moduleOptions} helperText="Bu alanı siz doldurun" limitText="Standart modül seçiniz" tip="Modül, konik dişli çaplarının temel belirleyicisidir." tipId="bs-module" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z1" value={speed.z1} onChange={(value) => setSpeed((current) => ({ ...current, z1: value }))} helperText="Bu alanı siz doldurun" limitText="Döndüren dişli için önerilen minimum diş sayısı kontrol edilmelidir" tip="Döndüren dişlinin diş sayısıdır." tipId="bs-z1" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z2" value={speed.z2} onChange={(value) => setSpeed((current) => ({ ...current, z2: value }))} helperText="Bu alanı siz doldurun" limitText="Düşük diş sayıları çalışma karakterini etkileyebilir" tip="Döndürülen dişlinin diş sayısıdır." tipId="bs-z2" openTip={openTip} setOpenTip={setOpenTip} /><SelectField label="Helis Açısı (β)" value={speed.helix} onChange={(value) => setSpeed((current) => ({ ...current, helix: value }))} options={helixOptions} helperText="Bu alanı siz doldurun" limitText="0° = düz konik dişli, 0° üzeri = helisel konik dişli" tip="Helis açısı arttıkça temas karakteri değişir ve imalat hassasiyeti artabilir." tipId="bs-helix" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Z1 Devri" value={speed.rpm} onChange={(value) => setSpeed((current) => ({ ...current, rpm: value }))} unit="dev/dk" helperText="Bu alanı siz doldurun" limitText="0'dan büyük olmalıdır" tip="Döndüren dişlinin dakikadaki dönüş sayısıdır." tipId="bs-rpm" openTip={openTip} setOpenTip={setOpenTip} /><InputField label="Opsiyonel Güç" value={speed.power} onChange={(value) => setSpeed((current) => ({ ...current, power: value }))} unit="kW" helperText="Bu alanı siz doldurun" limitText="Girildiğinde çevresel kuvvet için ön tahmin üretilir" tip="Opsiyonel güç girildiğinde basit çevresel kuvvet ön tahmini yapılabilir." tipId="bs-power" openTip={openTip} setOpenTip={setOpenTip} /></div></div><GuideBox /></div><div className="space-y-6"><ResultGrid title="Sonuçlar" items={[{ label: "d1", value: fmt(speedData.d1, " mm") }, { label: "d2", value: fmt(speedData.d2, " mm") }, { label: "Z1 Çevresel Hız", value: fmt(speedData.speed1, " m/s"), tone: toneFromSpeed(speedData.speed1) }, { label: "Z2 Çevresel Hız", value: fmt(speedData.speed2, " m/s"), tone: toneFromSpeed(speedData.speed2) }, { label: "1 Turda Alınan Yol", value: fmt(speedData.oneTurn, " mm") }, { label: "1 Dakikada Alınan Yol", value: fmt(speedData.oneMinute, " mm") }, { label: "Çalışma Sınıfı", value: speedData.speedClass, tone: toneFromSpeed(speedData.speed2) }, { label: "Çevresel Kuvvet Ön Tahmini", value: speed.power ? fmt(speedData.force, " N") : "Güç girilmedi", tone: speed.power ? "info" : undefined }]} /><InfoBox title="Teknik Değerlendirme" text={speedData.summary} /><WarningBox items={speedData.warnings} /><InfoBox title="Teknik Not" text="Bu alan ön değerlendirme içindir. Nihai tasarımda malzeme, darbe katsayısı, yüzey sertliği, dişli kalite sınıfı ve emniyet katsayıları ayrıca değerlendirilmelidir." /><LeadBox /></div></div> : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InfoBox title="Bilgilendirme" text={INFO_TEXT} />
          <InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} />
        </div>
      </div>
    </section>
  );
}
