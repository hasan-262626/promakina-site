"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

type TabKey = "internal" | "external" | "channel" | "reference";
type Severity = "critical" | "warning" | "info";
type WarningItem = { level: Severity; title: string; text: string };
type ApplicationType = "Standart" | "Hafif servis" | "Daha emniyetli";
type SegmanRecord = {
  nominal: number;
  s: number;
  sTol: string;
  d3: number;
  d3Tol: string;
  d2: number;
  d2Tol: string;
  m: number;
  t: number;
  nMin: number;
};

const TABS = [
  { key: "internal" as const, label: "İç (Delik) Segman Ölçüleri – DIN 472" },
  { key: "external" as const, label: "Dış (Mil) Segman Ölçüleri – DIN 471" },
  { key: "channel" as const, label: "Kanal Ölçüleri ve Uygunluk" },
  { key: "reference" as const, label: "Temel Açıklamalar" },
];

const APPLICATION_OPTIONS: ApplicationType[] = ["Standart", "Hafif servis", "Daha emniyetli"];
const CHANNEL_TYPE_OPTIONS = ["İç Segman (DIN 472)", "Dış Segman (DIN 471)"];

const INTERNAL_SEGMENT_DATA: SegmanRecord[] = [
  { nominal: 8, s: 0.8, sTol: "-0,05", d3: 8.7, d3Tol: "+0,36 / -0,10", d2: 8.4, d2Tol: "+0,09", m: 0.9, t: 0.6, nMin: 0.86 },
  { nominal: 10, s: 1.0, sTol: "-0,06", d3: 10.8, d3Tol: "+0,36 / -0,10", d2: 10.4, d2Tol: "+0,11", m: 1.1, t: 0.6, nMin: 1.08 },
  { nominal: 12, s: 1.0, sTol: "-0,06", d3: 13.0, d3Tol: "+0,36 / -0,10", d2: 12.5, d2Tol: "+0,11", m: 1.1, t: 0.8, nMin: 1.6 },
  { nominal: 28, s: 1.2, sTol: "-0,06", d3: 30.1, d3Tol: "+0,50 / -0,25", d2: 29.4, d2Tol: "+0,21", m: 1.3, t: 2.1, nMin: 10.5 },
  { nominal: 30, s: 1.2, sTol: "-0,06", d3: 32.1, d3Tol: "+0,50 / -0,25", d2: 31.4, d2Tol: "+0,25", m: 1.3, t: 2.1, nMin: 11.3 },
  { nominal: 32, s: 1.2, sTol: "-0,06", d3: 34.4, d3Tol: "+0,50 / -0,25", d2: 33.7, d2Tol: "+0,25", m: 1.3, t: 2.6, nMin: 14.6 },
];

const EXTERNAL_SEGMENT_DATA: SegmanRecord[] = [
  { nominal: 8, s: 0.8, sTol: "-0,05", d3: 7.4, d3Tol: "+0,06 / -0,18", d2: 7.6, d2Tol: "-0,06", m: 0.9, t: 0.6, nMin: 0.8 },
  { nominal: 25, s: 1.2, sTol: "-0,06", d3: 23.2, d3Tol: "+0,21 / -0,42", d2: 23.9, d2Tol: "-0,21", m: 1.3, t: 1.7, nMin: 7.0 },
  { nominal: 28, s: 1.5, sTol: "-0,06", d3: 25.9, d3Tol: "+0,21 / -0,42", d2: 26.6, d2Tol: "-0,21", m: 1.6, t: 2.1, nMin: 10.0 },
  { nominal: 30, s: 1.5, sTol: "-0,06", d3: 27.9, d3Tol: "+0,21 / -0,42", d2: 28.6, d2Tol: "-0,21", m: 1.6, t: 2.1, nMin: 10.7 },
  { nominal: 32, s: 1.5, sTol: "-0,06", d3: 29.6, d3Tol: "+0,21 / -0,42", d2: 30.3, d2Tol: "-0,25", m: 1.6, t: 2.6, nMin: 13.8 },
  { nominal: 35, s: 1.5, sTol: "-0,06", d3: 32.2, d3Tol: "+0,25 / -0,50", d2: 33.0, d2Tol: "-0,25", m: 1.6, t: 3.0, nMin: 17.8 },
];

const INFO_TEXT =
  "Sitemizde kullandığınız programlardan kaynaklanan hatalardan firmamız sorumlu değildir. Hesaplamaları kontrol etmeniz tavsiye edilir. Eğer hesaplamalarda bir hata tespit ederseniz firmamıza bildirmenizi rica ederiz.";
const LEGAL_TEXT =
  "Kullanmış olduğunuz programlar ilgili bakanlık tarafından 5846 sayılı yazılım ve program telif hakları kanununa dayanarak, 2021/4615 numarası ile kayıt ve tescil edilmiş ve koruma altına alınmıştır. Programlarımızın ve görsellerin tamamının ya da bir kısmının izinsiz kopyalanması, başka yere taşınması ya da kullanıma açılması suçtur. Firmamız dava hakkını saklı tutar.";

const fmt = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const num = (value: string) => {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

function findRecord(data: SegmanRecord[], nominal: number) {
  return data.find((item) => item.nominal === nominal) ?? null;
}

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
    const handlePointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpenId(null);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpenId]);

  return (
    <span
      ref={ref}
      className="relative ml-2 inline-flex"
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(null)}
    >
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
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

function InputField({
  label,
  value,
  onChange,
  unit,
  helperText,
  limitText,
  error,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  helperText?: string;
  limitText?: string;
  error?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell
      label={label}
      helperText={helperText}
      limitText={limitText}
      error={error}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <div
        className={`flex items-center rounded-2xl border px-4 py-3 transition ${
          error ? "border-rose-300 bg-rose-50" : "border-blue-100 bg-blue-50 focus-within:border-blue-300 focus-within:bg-white"
        }`}
      >
        <input
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.,]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
    </FieldShell>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  helperText,
  limitText,
  tip,
  tipId,
  openTip,
  setOpenTip,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  helperText?: string;
  limitText?: string;
  tip?: string;
  tipId: string;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  return (
    <FieldShell
      label={label}
      helperText={helperText}
      limitText={limitText}
      tip={tip}
      tipId={tipId}
      openTip={openTip}
      setOpenTip={setOpenTip}
    >
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white"
      >
        <option value="">Seçiniz</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function ReadonlyField({
  label,
  value,
  helperText = "DIN 471 / DIN 472 verisine göre otomatik gelir",
}: {
  label: string;
  value: string;
  helperText?: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className="text-xs leading-5 text-slate-500">{helperText}</span>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
        {value}
      </div>
    </div>
  );
}

function ResultCard({ label, value, tone }: { label: string; value: string; tone?: Severity }) {
  const classes =
    tone === "critical"
      ? "border-rose-100 bg-rose-50"
      : tone === "warning"
        ? "border-amber-100 bg-amber-50"
        : tone === "info"
          ? "border-sky-100 bg-sky-50"
          : "border-slate-200 bg-white";
  return (
    <div className={`rounded-2xl border px-4 py-3.5 ${classes}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1.5 text-base font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function WarningBox({ items }: { items: WarningItem[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">Teknik Uyarılar</h3>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`rounded-2xl border px-4 py-4 ${
              item.level === "critical"
                ? "border-rose-200 bg-rose-50"
                : item.level === "warning"
                  ? "border-amber-200 bg-amber-50"
                  : "border-sky-200 bg-sky-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  item.level === "critical"
                    ? "bg-rose-100 text-rose-700"
                    : item.level === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-sky-100 text-sky-700"
                }`}
              >
                {item.level === "critical" ? "Kritik" : item.level === "warning" ? "Dikkat" : "Bilgi"}
              </span>
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuideBox() {
  return (
    <InfoBox
      title="Nasıl Kullanılır?"
      text="1. İç segman veya dış segman sekmesini seçin. 2. Nominal mil veya delik çapını girin. 3. Standarttan gelen segman ve kanal ölçülerini kontrol edin. 4. Opsiyonel et kalınlığı / taşıyıcı çap ile ek teknik yorumları inceleyin."
    />
  );
}

function LeadBox() {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-5 py-6 sm:px-6">
      <h3 className="text-lg font-semibold text-slate-950">
        Teknik özet raporu hazır
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Standart veya özel segman, kanal açım ve mil / delik bağlantı detayları için bizimle iletişime
        geçin. Bu sonuçlar yazdırılabilir ve teklif dosyasına aktarılabilir.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Teklif Al
        </a>
        <a
          href="/iletisim"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  );
}

function SegmanPanel({
  type,
  diameter,
  setDiameter,
  carrierDiameter,
  setCarrierDiameter,
  wallThickness,
  setWallThickness,
  applicationType,
  setApplicationType,
  openTip,
  setOpenTip,
}: {
  type: "internal" | "external";
  diameter: string;
  setDiameter: (value: string) => void;
  carrierDiameter: string;
  setCarrierDiameter: (value: string) => void;
  wallThickness: string;
  setWallThickness: (value: string) => void;
  applicationType: ApplicationType;
  setApplicationType: (value: ApplicationType) => void;
  openTip: string | null;
  setOpenTip: (value: string | null) => void;
}) {
  const isInternal = type === "internal";
  const data = isInternal ? INTERNAL_SEGMENT_DATA : EXTERNAL_SEGMENT_DATA;
  const d = num(diameter);
  const carrier = num(carrierDiameter);
  const wall = num(wallThickness);
  const record = d > 0 ? findRecord(data, d) : null;
  const warnings: WarningItem[] = [];

  const errors = {
    diameter:
      d <= 0
        ? `Lütfen geçerli bir ${isInternal ? "delik" : "mil"} çapı girin`
        : record
          ? ""
          : `Girilen ${isInternal ? "delik" : "mil"} çapı desteklenen DIN ${isInternal ? "472" : "471"} aralığı dışında`,
    carrier:
      isInternal && carrierDiameter && carrier <= d
        ? "Göbek dış çapı delik çapısından büyük olmalıdır"
        : "",
    wall: wallThickness && wall <= 0 ? "Et kalınlığı 0’dan büyük olmalıdır" : "",
  };

  if (isInternal && carrierDiameter && carrier > 0 && record && carrier - d < 2 * record.t) {
    warnings.push({
      level: "warning",
      title: "Dış duvar kalınlığı düşük olabilir",
      text: "Göbek dış çapı delik çapısına çok yakın olabilir. Kanal açıldıktan sonra dış duvarda yeterli et kalınlığı kalmayabilir.",
    });
  }

  if (wallThickness && wall > 0 && record && wall < record.t) {
    warnings.push({
      level: "warning",
      title: "Et kalınlığı sınırda",
      text: `Girilen et kalınlığı düşük olabilir. ${isInternal ? "Segman kanal bölgesinde" : "Mil kanal bölgesinde"} dayanım riski oluşabilir.`,
    });
  }

  if (!record && d > 0) {
    warnings.push({
      level: "critical",
      title: "Standart veri bulunamadı",
      text: `Bu ölçü için standart veri bulunamadı. Girilen çap desteklenen DIN ${isInternal ? "472" : "471"} aralığı dışında olabilir.`,
    });
  }

  if (applicationType === "Daha emniyetli") {
    warnings.push({
      level: "info",
      title: "Emniyetli kullanım notu",
      text: "Daha emniyetli uygulamalarda kanal sonrası kalan kesit, çalışma yükü ve kenar pahları ayrıca değerlendirilmelidir.",
    });
  }

  return (
    <div className="grid gap-6">
      <div className="space-y-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {isInternal
              ? "Delik çapına göre standart iç segman ölçülerini ve segman için delikte açılacak kanal ölçülerini teknik olarak görüntüleyin."
              : "Mil çapına göre standart dış segman ölçülerini ve segman için milde açılacak kanal ölçülerini teknik olarak görüntüleyin."}
          </p>
          <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            <InputField label={`${isInternal ? "Delik" : "Mil"} Çapı (Ød1)`} value={diameter} onChange={setDiameter} unit="mm" helperText="Bu alanı siz doldürün" limitText={`0'dan büyük olmalıdır • Standart DIN ${isInternal ? "472" : "471"} aralığı otomatik belirlenir`} error={errors.diameter} tip={`${isInternal ? "İç" : "Dış"} segmanın oturacağı nominal ${isInternal ? "delik" : "mil"} çapıdır. Sistem bu değere göre uygun DIN ${isInternal ? "472" : "471"} segman ölçüsünü bulur.`} tipId={`${type}-diameter`} openTip={openTip} setOpenTip={setOpenTip} />
            <InputField label={isInternal ? "Opsiyonel Göbek Dış Çapı" : "Opsiyonel Göbek / Taşıyıcı Parça Çapı"} value={carrierDiameter} onChange={setCarrierDiameter} unit="mm" helperText="Opsiyonel kontrol alanı" limitText={isInternal ? "Delik çapısından büyük olmalıdır" : "Taşıyıcı çap bilgisi ek yorum için kullanılabilir"} error={errors.carrier} tip={isInternal ? "Opsiyonel dış çap kontrol alanıdır. Kanal ve segman sonrası yeterli et kalınlığı hakkında yorum üretmek için kullanılabilir." : "Opsiyonel kontrol alanıdır. Kanal sonrası çevrede kalan et kalınlığı hakkında yorum üretmek için kullanılabilir."} tipId={`${type}-carrier`} openTip={openTip} setOpenTip={setOpenTip} />
            <InputField label={isInternal ? "Opsiyonel Et Kalınlığı / Dış Duvar Payı" : "Opsiyonel Et Kalınlığı / Omuz Payı"} value={wallThickness} onChange={setWallThickness} unit="mm" helperText="Opsiyonel kontrol alanı" limitText="0’dan büyük olmalıdır" error={errors.wall} tip={isInternal ? "Delik dışındaki kalan malzeme kalınlığı için opsiyonel kontrol alanıdır." : "Milde kanal açıldıktan sonra kalan taşıyıcı kesit hakkında ön değerlendirme sağlar."} tipId={`${type}-wall`} openTip={openTip} setOpenTip={setOpenTip} />
            <SelectField label="Uygulama Tipi" value={applicationType} onChange={(value) => setApplicationType(value as ApplicationType)} options={APPLICATION_OPTIONS} helperText="Bu alanı siz seçin" limitText="Sonuçlara ek teknik yorum vermek için kullanılabilir" tip="Sonuçlara ek teknik yorum vermek için kullanılabilir." tipId={`${type}-application`} openTip={openTip} setOpenTip={setOpenTip} />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ReadonlyField label="Ød1" value={record ? `${fmt(record.nominal, 2)} mm` : "Çap seçildiğinde otomatik gelir"} />
            <ReadonlyField label="Segman Kalınlığı s" value={record ? `${fmt(record.s, 2)} mm` : "-"} />
            <ReadonlyField label="s Toleransı" value={record?.sTol ?? "-"} />
            <ReadonlyField label={isInternal ? "Segman Dış Çapı Ød3" : "Segman İç Çapı Ød3"} value={record ? `${fmt(record.d3, 2)} mm` : "-"} />
            <ReadonlyField label="Ød3 Toleransı" value={record?.d3Tol ?? "-"} />
            <ReadonlyField label="Açılacak Kanal Çapı Ød2" value={record ? `${fmt(record.d2, 2)} mm` : "-"} />
            <ReadonlyField label="Ød2 Toleransı" value={record?.d2Tol ?? "-"} />
            <ReadonlyField label="Açılacak Kanal Genişliği m (H13)" value={record ? `${fmt(record.m, 2)} mm` : "-"} />
            <ReadonlyField label="Kanal Derinliği t" value={record ? `${fmt(record.t, 2)} mm` : "-"} />
            <ReadonlyField label="n (min.)" value={record ? `${fmt(record.nMin, 2)} mm` : "-"} />
          </div>
        </div>

        <GuideBox />
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ResultCard label={`Uygun ${isInternal ? "İç" : "Dış"} Segman Ölçüsü`} value={record ? `DIN ${isInternal ? "472" : "471"} – ${fmt(record.nominal, 0)} mm` : "Sonuçlar burada görüntülenecektir"} tone={record ? "info" : undefined} />
            <ResultCard label="Segman Kalınlığı" value={record ? `${fmt(record.s, 2)} mm` : "-"} />
            <ResultCard label={isInternal ? "Segman Dış Çapı" : "Segman İç Çapı"} value={record ? `${fmt(record.d3, 2)} mm` : "-"} />
            <ResultCard label="Kanal Çapı" value={record ? `${fmt(record.d2, 2)} mm` : "-"} />
            <ResultCard label="Kanal Genişliği" value={record ? `${fmt(record.m, 2)} mm` : "-"} />
            <ResultCard label="Kanal Derinliği" value={record ? `${fmt(record.t, 2)} mm` : "-"} />
            <ResultCard label="Minimum n Ölçüsü" value={record ? `${fmt(record.nMin, 2)} mm` : "-"} />
            <ResultCard label="Teknik Uygunluk Özeti" value={record ? `Girilen ${isInternal ? "delik" : "mil"} çapına göre uygun DIN ${isInternal ? "472" : "471"} ${isInternal ? "iç" : "dış"} segman ölçüsü başarıyla belirlendi.` : "Sonuçlar burada görüntülenecektir"} tone={record ? "info" : undefined} />
          </div>
        </div>

        <InfoBox title="Teknik Değerlendirme" text={record ? `${isInternal ? "Kanal genişliği ve kanal derinliği standart segman ölçüsüne göre otomatik oluşturuldu." : "Milde açılacak kanal ölçüleri standart veriye göre otomatik oluşturuldu."} Bu sonuçlar standart segman ve kanal ön kontrolü içindir.` : "Nominal çap girildiğinde teknik değerlendirme burada görüntülenecektir."} />
        <WarningBox items={warnings} />
        <LeadBox />
      </div>
    </div>
  );
}

export function CirclipGrooveCalculator() {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTab, setActiveTab] = useState<TabKey>("internal");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [internalDiameter, setInternalDiameter] = useState("30");
  const [internalCarrier, setInternalCarrier] = useState("");
  const [internalWall, setInternalWall] = useState("");
  const [internalApplication, setInternalApplication] = useState<ApplicationType>("Standart");
  const [externalDiameter, setExternalDiameter] = useState("30");
  const [externalCarrier, setExternalCarrier] = useState("");
  const [externalWall, setExternalWall] = useState("");
  const [externalApplication, setExternalApplication] = useState<ApplicationType>("Standart");
  const [channelType, setChannelType] = useState("İç Segman (DIN 472)");
  const [channelNominal, setChannelNominal] = useState("30");
  const [channelWall, setChannelWall] = useState("");
  const [channelCarrier, setChannelCarrier] = useState("");

  const channelIsInternal = channelType === "İç Segman (DIN 472)";
  const channelRecord = useMemo(
    () => findRecord(channelIsInternal ? INTERNAL_SEGMENT_DATA : EXTERNAL_SEGMENT_DATA, num(channelNominal)),
    [channelIsInternal, channelNominal],
  );
  const channelWarnings: WarningItem[] = [];
  const channelNominalValue = num(channelNominal);
  const channelWallValue = num(channelWall);
  const channelCarrierValue = num(channelCarrier);
  if (!channelRecord && channelNominalValue > 0) {
    channelWarnings.push({
      level: "critical",
      title: "Standart veri bulunamadı",
      text: "Girilen nominal çap desteklenen standart aralık dışında olduğu için sonuç üretilemedi.",
    });
  }
  if (channelWall && channelWallValue > 0 && channelRecord && channelWallValue < channelRecord.t) {
    channelWarnings.push({
      level: "warning",
      title: "Kalan et kalınlığı düşük olabilir",
      text: "Kanal sonrası kalan et kalınlığı ayrıca kontrol edilmelidir. Kanal derinliği ve taşıyıcı kesit birlikte değerlendirilmelidir.",
    });
  }
  if (channelCarrier && channelCarrierValue > 0 && channelRecord && channelIsInternal && channelCarrierValue <= channelNominalValue) {
    channelWarnings.push({
      level: "critical",
      title: "Taşıyıcı çap yetersiz",
      text: "Göbek dış çapı delik çapısından büyük olmalıdır. Aksi halde kanal sonrası yeterli dış duvar kalınlığı kalmayabilir.",
    });
  }

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4">
          <div role="tablist" aria-label="Segman ve Kanal Ölçüleri sekmeleri" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

        <div className="mt-6">
          {activeTab === "internal" ? <SegmanPanel type="internal" diameter={internalDiameter} setDiameter={setInternalDiameter} carrierDiameter={internalCarrier} setCarrierDiameter={setInternalCarrier} wallThickness={internalWall} setWallThickness={setInternalWall} applicationType={internalApplication} setApplicationType={setInternalApplication} openTip={openTip} setOpenTip={setOpenTip} /> : null}
          {activeTab === "external" ? <SegmanPanel type="external" diameter={externalDiameter} setDiameter={setExternalDiameter} carrierDiameter={externalCarrier} setCarrierDiameter={setExternalCarrier} wallThickness={externalWall} setWallThickness={setExternalWall} applicationType={externalApplication} setApplicationType={setExternalApplication} openTip={openTip} setOpenTip={setOpenTip} /> : null}
          {activeTab === "channel" ? (
            <div className="grid gap-6">
              <div className="space-y-6">
                <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Müşteri Girişleri</h2>
                  <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
                    <SelectField label="Uygulama Türü" value={channelType} onChange={setChannelType} options={CHANNEL_TYPE_OPTIONS} helperText="Bu alanı siz seçin" limitText="İç segman veya dış segman tipini belirler" tip="İç segman (DIN 472) veya dış segman (DIN 471) kanal ölçülerini seçmenizi sağlar." tipId="channel-type" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Nominal Çap" value={channelNominal} onChange={setChannelNominal} unit="mm" helperText="Bu alanı siz doldürün" limitText="Standart aralıkta olmalıdır" tip="Segman kanal ölçülerinin alınacağı nominal çap bilgisidir." tipId="channel-nominal" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Opsiyonel Et Kalınlığı" value={channelWall} onChange={setChannelWall} unit="mm" helperText="Opsiyonel kontrol alanı" limitText="Kanal sonrası kesit için ön yorum üretir" tip="Kanal sonrası kalan et kalınlığı kontrolü için kullanılabilir." tipId="channel-wall" openTip={openTip} setOpenTip={setOpenTip} />
                    <InputField label="Opsiyonel Taşıyıcı Çap / Göbek Çapı" value={channelCarrier} onChange={setChannelCarrier} unit="mm" helperText="Opsiyonel kontrol alanı" limitText="Taşıyıcı parça çevresindeki malzeme için ön yorum üretir" tip="Taşıyıcı çap veya göbek çapı bilgisi girilirse çevresel malzeme kalınlığı açısından ek yorum yapılır." tipId="channel-carrier" openTip={openTip} setOpenTip={setOpenTip} />
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <h2 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ReadonlyField label="Uygun Segman Ölçüsü" value={channelRecord ? `${channelType} – ${fmt(channelRecord.nominal, 0)} mm` : "Çap seçildiğinde otomatik gelir"} />
                    <ReadonlyField label="Kanal Çapı" value={channelRecord ? `${fmt(channelRecord.d2, 2)} mm` : "-"} />
                    <ReadonlyField label="Kanal Genişliği" value={channelRecord ? `${fmt(channelRecord.m, 2)} mm` : "-"} />
                    <ReadonlyField label="Kanal Derinliği" value={channelRecord ? `${fmt(channelRecord.t, 2)} mm` : "-"} />
                    <ReadonlyField label="Minimum n" value={channelRecord ? `${fmt(channelRecord.nMin, 2)} mm` : "-"} />
                  </div>
                </div>
                <GuideBox />
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-semibold text-slate-950">Sonuç Ekranı</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <ResultCard label="Uygun Segman Ölçüsü" value={channelRecord ? `${channelType} – ${fmt(channelRecord.nominal, 0)} mm` : "Sonuçlar burada görüntülenecektir"} tone={channelRecord ? "info" : undefined} />
                    <ResultCard label="Kanal Çapı" value={channelRecord ? `${fmt(channelRecord.d2, 2)} mm` : "-"} />
                    <ResultCard label="Kanal Genişliği" value={channelRecord ? `${fmt(channelRecord.m, 2)} mm` : "-"} />
                    <ResultCard label="Kanal Derinliği" value={channelRecord ? `${fmt(channelRecord.t, 2)} mm` : "-"} />
                    <ResultCard label="Minimum n" value={channelRecord ? `${fmt(channelRecord.nMin, 2)} mm` : "-"} />
                    <ResultCard label="Uygunluk Yorumu" value={channelRecord ? "Kanal genişliği standart aralıktadır." : "Sonuçlar burada görüntülenecektir"} tone={channelRecord ? "info" : undefined} />
                  </div>
                </div>
                <InfoBox title="Teknik Değerlendirme" text={channelRecord ? "Uygulama tipi ve nominal çap uyumludur. Kanal sonrası kalan et kalınlığı ayrıca kontrol edilmelidir." : "Nominal çap girildiğinde kanal ölçüleri ve uygunluk değerlendirmesi burada görüntülenecektir."} />
                <WarningBox items={channelWarnings} />
                <LeadBox />
              </div>
            </div>
          ) : null}
          {activeTab === "reference" ? (
            <div className="grid gap-6">
              <div className="space-y-6">
                <InfoBox title="Segman nedir?" text="Segman ve kanal ölçüleri, mil veya delik üzerinde eksenel emniyet sağlayan segmanların doğru seçimi için kullanılır. İç segman ölçüleri ve dış segman ölçüleri farklı standart tablolarla değerlendirilir." />
                <InfoBox title="İç segman ile dış segman farkı nedir?" text="İç segman, delik içine yerleşerek elemanı içeriden tutar ve DIN 472 standardı ile değerlendirilir. Dış segman ise mil üzerine yerleşir ve DIN 471 standardı ile tanımlanır." />
                <InfoBox title="DIN 472 ve DIN 471 neyi ifade eder?" text="DIN 472 iç segman ölçüleri, DIN 471 ise dış segman ölçüleri için standart verileri tanımlar. Kanal çapı, kanal genişliği, kanal derinliği ve segman kalınlığı bu tablolardan alınır." />
                <GuideBox />
              </div>
              <div className="space-y-6">
                <InfoBox title="Kanal çapı, kanal genişliği ve kanal derinliği ne anlama gelir?" text="Segman kanal ölçüleri, segmanın güvenli şekilde oturmasını sağlayan geometriyi tanımlar. Kanal derinliği ve kanal genişliği, segmanın doğru çalışması ve montaj emniyeti için kritiktir." />
                <InfoBox title="n (min.) neyi ifade eder?" text="n (min.), segmanın rahat montajı ve çalışması için gerekli minimum kanal veya omuz ölçüsünü ifade eder. Uygulamada pah ve köşe detayları ile birlikte değerlendirilmelidir." />
                <InfoBox title="Segman kanalında et kalınlığı neden önemlidir?" text="Kanal açıldıktan sonra kalan taşıyıcı kesit düşük olursa kanal bölgesinde dayanım riski oluşabilir. Bu nedenle et kalınlığı ve taşıyıcı çap bilgileri özellikle emniyetli uygulamalarda ayrıca kontrol edilmelidir." />
                <LeadBox />
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <InfoBox title="Bilgilendirme" text={INFO_TEXT} />
          <InfoBox title="Yasal Uyarı" text={LEGAL_TEXT} />
        </div>
      </div>
    </section>
  );
}
