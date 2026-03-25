"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type TabKey = "round" | "rect" | "hex" | "sheet";
type BaseForm = { quantity: string; density: string; pricePerKg: string; material: string };
type RoundForm = BaseForm & { diameter: string; innerDiameter: string; length: string };
type RectForm = BaseForm & { thickness: string; width: string; length: string };
type HexForm = BaseForm & { acrossFlats: string; length: string };
type SheetForm = BaseForm & { width: string; height: string; thickness: string };

const defaultMaterial = "Çelik (1040-St)";
const materialDensityMap: Record<string, string> = {
  "Çelik (1040-St)": "7.85",
  "Paslanmaz Çelik": "7.90",
  Alüminyum: "2.70",
  Bronz: "8.80",
  Bakır: "8.93",
  Pirinç: "8.50",
  "Çelik Döküm": "7.80",
  Polyamid: "1.14",
  Kestamid: "1.15",
  Derlin: "1.42",
  Fiber: "1.85",
  Alpolen: "0.92",
  Teflon: "2.20",
  Polietilen: "0.95",
};
const materialOptions = Object.keys(materialDensityMap);
const tabs = [
  { key: "round" as const, label: "Yuvarlak Malzeme", intro: "Çap, boy ve iç çap bilgilerine göre dolu veya boru kesitli malzemenin ağırlığını hesaplayın." },
  { key: "rect" as const, label: "Kare / Lama Malzeme", intro: "Kare ve lama kesitli malzemelerde ölçü, adet ve malzeme cinsine göre ağırlık ile maliyet değerlerini görün." },
  { key: "hex" as const, label: "Altıköşe Malzeme", intro: "Altıköşe kesitli malzemelerde karşıdan karşıya ölçü ve boy bilgileriyle ağırlık ile maliyet hesaplayın." },
  { key: "sheet" as const, label: "Sac / Levha", intro: "Sac ve levha malzemelerde kalınlık, en ve boy değerlerine göre ağırlık ile maliyet sonucunu görün." },
];
const infoText = "Bu sayfada yer alan hesaplama aracı genel bilgi amaçlıdır. Nihai üretim, satın alma ve teklif kararları öncesinde sonuçların ayrıca kontrol edilmesi tavsiye edilir. Hesaplamalarda olası bir hata tespit etmeniz durumunda lütfen firmamızla iletişime geçin.";
const legalText = "Sitede yer alan programlar ve görseller, 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır. İzinsiz kopyalanması, başka bir platforma taşınması veya kullanıma açılması yasaktır. Tüm yasal haklarımız saklıdır.";

const toNumber = (value: string) => {
  const normalized = Number(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};
const formatNumber = (value: number, digits = 3) =>
  new Intl.NumberFormat("tr-TR", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const formatCurrency = (value: number) => `${formatNumber(value, 2)} ₺`;
const getDensity = (material: string) => materialDensityMap[material] ?? materialDensityMap[defaultMaterial];

function ResultCard({ title, rows }: { title: string; rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{row.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-950">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500" />
    </label>
  );
}

function MaterialSelect({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">Malzeme Cinsi</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500">
        {materialOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function ReadonlyField({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex min-h-[50px] items-center justify-between rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900">
        <span>{value}</span>
        {unit ? <span className="text-sm text-slate-500">{unit}</span> : null}
      </div>
    </div>
  );
}

function NoteBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function SectionHeader({ title, intro, actions }: { title: string; intro: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{intro}</p>
      </div>
      {actions}
    </div>
  );
}

function TechnicalBadge({ label }: { label: string }) {
  return <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</span>;
}

function DiagramFrame({ children, labels }: { children: ReactNode; labels: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="rounded-2xl bg-slate-50 p-6">{children}</div>
      <div className="mt-5 flex flex-wrap gap-3">{labels.map((label) => <TechnicalBadge key={label} label={label} />)}</div>
    </div>
  );
}

function RectMaterialDiagram() {
  return (
    <DiagramFrame labels={["Kesit Ölçüsü: e × t", "Boy: l"]}>
      <svg viewBox="0 0 420 230" className="h-auto w-full" aria-label="Kare ve lama malzeme teknik şeması">
        <defs><marker id="rect-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" /></marker></defs>
        <rect x="28" y="58" width="108" height="86" rx="6" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <line x1="28" y1="34" x2="136" y2="34" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#rect-arrow)" markerEnd="url(#rect-arrow)" />
        <text x="82" y="24" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">e</text>
        <line x1="12" y1="58" x2="12" y2="144" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#rect-arrow)" markerEnd="url(#rect-arrow)" />
        <text x="12" y="106" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">t</text>
        <rect x="205" y="88" width="160" height="34" rx="5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="205" y1="58" x2="365" y2="58" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#rect-arrow)" markerEnd="url(#rect-arrow)" />
        <text x="285" y="46" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">l</text>
      </svg>
    </DiagramFrame>
  );
}

function HexMaterialDiagram() {
  return (
    <DiagramFrame labels={["Karşıdan Karşıya Ölçü: s", "Boy: l"]}>
      <svg viewBox="0 0 420 230" className="h-auto w-full" aria-label="Altıköşe malzeme teknik şeması">
        <defs><marker id="hex-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" /></marker></defs>
        <polygon points="80,44 118,66 118,110 80,132 42,110 42,66" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <line x1="32" y1="88" x2="128" y2="88" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#hex-arrow)" markerEnd="url(#hex-arrow)" />
        <text x="80" y="78" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">s</text>
        <rect x="205" y="88" width="160" height="34" rx="5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="205" y1="58" x2="365" y2="58" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#hex-arrow)" markerEnd="url(#hex-arrow)" />
        <text x="285" y="46" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">l</text>
      </svg>
    </DiagramFrame>
  );
}

function SheetMaterialDiagram() {
  return (
    <DiagramFrame labels={["Sac Eni: e", "Sac Boyu: l", "Kalınlık: t"]}>
      <svg viewBox="0 0 420 230" className="h-auto w-full" aria-label="Sac ve levha teknik şeması">
        <defs><marker id="sheet-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" /></marker></defs>
        <rect x="36" y="44" width="136" height="118" rx="8" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <line x1="36" y1="26" x2="172" y2="26" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#sheet-arrow)" markerEnd="url(#sheet-arrow)" />
        <text x="104" y="16" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">e</text>
        <line x1="18" y1="44" x2="18" y2="162" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#sheet-arrow)" markerEnd="url(#sheet-arrow)" />
        <text x="18" y="107" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">l</text>
        <rect x="265" y="68" width="82" height="72" rx="6" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <line x1="356" y1="68" x2="356" y2="140" stroke="#2563eb" strokeWidth="2.5" markerStart="url(#sheet-arrow)" markerEnd="url(#sheet-arrow)" />
        <text x="370" y="107" fontSize="18" fill="#1e3a8a" fontWeight="700">t</text>
      </svg>
    </DiagramFrame>
  );
}

function actionButton(label: string, onClick: () => void) {
  return (
    <button type="button" onClick={onClick} className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
      {label}
    </button>
  );
}

export function MaterialWeightCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>("round");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsId = useId();
  const [round, setRound] = useState<RoundForm>({ material: defaultMaterial, diameter: "40", innerDiameter: "0", length: "1000", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" });
  const [rect, setRect] = useState<RectForm>({ material: defaultMaterial, thickness: "20", width: "50", length: "1000", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" });
  const [hex, setHex] = useState<HexForm>({ material: defaultMaterial, acrossFlats: "30", length: "1000", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" });
  const [sheet, setSheet] = useState<SheetForm>({ material: defaultMaterial, width: "1000", height: "2000", thickness: "5", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" });

  const roundResult = useMemo(() => {
    const d = toNumber(round.diameter);
    const innerD = Math.max(0, Math.min(toNumber(round.innerDiameter), d));
    const l = toNumber(round.length);
    const q = Math.max(0, toNumber(round.quantity));
    const density = toNumber(round.density);
    const pricePerKg = Math.max(0, toNumber(round.pricePerKg));
    const area = (Math.PI * (d * d - innerD * innerD)) / 4;
    const pieceWeight = ((area * l) / 1_000_000) * density;
    const piecePrice = pieceWeight * pricePerKg;
    const totalWeight = pieceWeight * q;
    const totalPrice = piecePrice * q;
    return { pieceWeight, piecePrice, piecePriceVat: piecePrice * 1.2, totalWeight, totalPrice, totalPriceVat: totalPrice * 1.2 };
  }, [round]);

  const rectResult = useMemo(() => {
    const pieceWeight = ((toNumber(rect.width) * toNumber(rect.thickness) * toNumber(rect.length)) / 1_000_000) * toNumber(rect.density);
    const piecePrice = pieceWeight * Math.max(0, toNumber(rect.pricePerKg));
    const totalWeight = pieceWeight * Math.max(0, toNumber(rect.quantity));
    const totalPrice = piecePrice * Math.max(0, toNumber(rect.quantity));
    return { pieceWeight, piecePrice, piecePriceVat: piecePrice * 1.2, totalWeight, totalPrice, totalPriceVat: totalPrice * 1.2 };
  }, [rect]);

  const hexResult = useMemo(() => {
    const s = toNumber(hex.acrossFlats);
    const area = (Math.sqrt(3) / 2) * s * s;
    const pieceWeight = ((area * toNumber(hex.length)) / 1_000_000) * toNumber(hex.density);
    const piecePrice = pieceWeight * Math.max(0, toNumber(hex.pricePerKg));
    const totalWeight = pieceWeight * Math.max(0, toNumber(hex.quantity));
    const totalPrice = piecePrice * Math.max(0, toNumber(hex.quantity));
    return { pieceWeight, piecePrice, piecePriceVat: piecePrice * 1.2, totalWeight, totalPrice, totalPriceVat: totalPrice * 1.2 };
  }, [hex]);

  const sheetResult = useMemo(() => {
    const pieceWeight = ((toNumber(sheet.width) * toNumber(sheet.height) * toNumber(sheet.thickness)) / 1_000_000) * toNumber(sheet.density);
    const piecePrice = pieceWeight * Math.max(0, toNumber(sheet.pricePerKg));
    const totalWeight = pieceWeight * Math.max(0, toNumber(sheet.quantity));
    const totalPrice = piecePrice * Math.max(0, toNumber(sheet.quantity));
    return { pieceWeight, piecePrice, piecePriceVat: piecePrice * 1.2, totalWeight, totalPrice, totalPriceVat: totalPrice * 1.2 };
  }, [sheet]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    tabRefs.current[nextIndex]?.focus();
    setActiveTab(tabs[nextIndex].key);
  };

  return (
    <section className="pt-8 pb-14 lg:pt-10 lg:pb-16">
      <div className="site-container">
        <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div role="tablist" aria-label="Malzeme ağırlık hesabı sekmeleri" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.key;
              return (
                <button key={tab.key} ref={(element) => { tabRefs.current[index] = element; }} id={`${tabsId}-${tab.key}-tab`} role="tab" type="button" tabIndex={isActive ? 0 : -1} aria-selected={isActive} aria-controls={`${tabsId}-${tab.key}-panel`} onClick={() => setActiveTab(tab.key)} onKeyDown={(event) => handleKeyDown(event, index)} className={`min-w-fit rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${isActive ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"}`}>
                  <span className="block">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <div id={`${tabsId}-round-panel`} role="tabpanel" aria-labelledby={`${tabsId}-round-tab`} hidden={activeTab !== "round"}>
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <SectionHeader title="Yuvarlak Malzeme" intro={tabs[0].intro} />
                  <div className="mt-6 rounded-3xl bg-white p-5">
                    <h3 className="text-lg font-semibold text-slate-950">Malzeme Bilgileri</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><MaterialSelect value={round.material} onChange={(nextMaterial) => setRound((current) => ({ ...current, material: nextMaterial, density: getDensity(nextMaterial) }))} /></div>
                      <Field label="Malzeme Çapı (Ø D)" value={round.diameter} onChange={(value) => setRound((current) => ({ ...current, diameter: value }))} />
                      <Field label="Malzeme Kalınlığı / Boyu (h)" value={round.length} onChange={(value) => setRound((current) => ({ ...current, length: value }))} />
                      <Field label="Sipariş Adedi" value={round.quantity} onChange={(value) => setRound((current) => ({ ...current, quantity: value }))} />
                      <Field label="Malzeme Kg Fiyatı" value={round.pricePerKg} onChange={(value) => setRound((current) => ({ ...current, pricePerKg: value }))} />
                      <Field label="Boru ise İç Çapı (Ø d)" value={round.innerDiameter} onChange={(value) => setRound((current) => ({ ...current, innerDiameter: value }))} />
                      <ReadonlyField label="Malzeme Yoğunluğu" value={round.density} unit="kg/dm³" />
                    </div>
                  </div>
                </div>
                <ResultCard title="Malzeme Ağırlık Hesabı – Yuvarlak Malzeme" rows={[
                  { label: "Adet Ağırlığı", value: `${formatNumber(roundResult.pieceWeight)} kg` },
                  { label: "Adet Fiyatı", value: formatCurrency(roundResult.piecePrice) },
                  { label: "KDV Dahil Fiyat (%20)", value: formatCurrency(roundResult.piecePriceVat) },
                  { label: "Toplam Ağırlık", value: `${formatNumber(roundResult.totalWeight)} kg` },
                  { label: "Toplam Fiyat", value: formatCurrency(roundResult.totalPrice) },
                  { label: "KDV Dahil Toplam Fiyat (%20)", value: formatCurrency(roundResult.totalPriceVat) },
                ]} />
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <NoteBlock title="Bilgilendirme" text={infoText} />
                <NoteBlock title="Yasal Uyarı" text={legalText} />
              </div>
            </div>

            <div id={`${tabsId}-rect-panel`} role="tabpanel" aria-labelledby={`${tabsId}-rect-tab`} hidden={activeTab !== "rect"}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <SectionHeader title="Kare / Lama Malzeme" intro={tabs[1].intro} actions={actionButton("Temizle", () => setRect({ material: defaultMaterial, thickness: "20", width: "50", length: "1000", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" }))} />
                <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-3xl bg-white p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-slate-950">Malzeme Bilgileri</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><MaterialSelect value={rect.material} onChange={(nextMaterial) => setRect((current) => ({ ...current, material: nextMaterial, density: getDensity(nextMaterial) }))} /></div>
                      <Field label="Malzeme Kalınlığı (t)" value={rect.thickness} onChange={(value) => setRect((current) => ({ ...current, thickness: value }))} />
                      <Field label="Malzeme Eni (e)" value={rect.width} onChange={(value) => setRect((current) => ({ ...current, width: value }))} />
                      <Field label="Malzeme Boyu (l)" value={rect.length} onChange={(value) => setRect((current) => ({ ...current, length: value }))} />
                      <Field label="Sipariş Adedi" value={rect.quantity} onChange={(value) => setRect((current) => ({ ...current, quantity: value }))} />
                      <Field label="Malzeme Kg Fiyatı" value={rect.pricePerKg} onChange={(value) => setRect((current) => ({ ...current, pricePerKg: value }))} />
                      <ReadonlyField label="Malzeme Yoğunluğu" value={rect.density} unit="kg/dm³" />
                    </div>
                  </div>
                  <RectMaterialDiagram />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <ResultCard title="Parça Bazlı Sonuçlar" rows={[
                    { label: "Adet Ağırlığı", value: `${formatNumber(rectResult.pieceWeight)} kg` },
                    { label: "Adet Fiyatı", value: formatCurrency(rectResult.piecePrice) },
                    { label: "KDV Dahil Fiyat (%20)", value: formatCurrency(rectResult.piecePriceVat) },
                  ]} />
                  <ResultCard title="Toplam Sonuçlar" rows={[
                    { label: "Toplam Ağırlık", value: `${formatNumber(rectResult.totalWeight)} kg` },
                    { label: "Toplam Fiyat", value: formatCurrency(rectResult.totalPrice) },
                    { label: "KDV Dahil Toplam Fiyat (%20)", value: formatCurrency(rectResult.totalPriceVat) },
                  ]} />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <NoteBlock title="Bilgilendirme" text={infoText} />
                  <NoteBlock title="Yasal Uyarı" text={legalText} />
                </div>
              </div>
            </div>

            <div id={`${tabsId}-hex-panel`} role="tabpanel" aria-labelledby={`${tabsId}-hex-tab`} hidden={activeTab !== "hex"}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <SectionHeader title="Altıköşe Malzeme" intro={tabs[2].intro} actions={actionButton("Temizle", () => setHex({ material: defaultMaterial, acrossFlats: "30", length: "1000", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" }))} />
                <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-3xl bg-white p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-slate-950">Malzeme Bilgileri</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><MaterialSelect value={hex.material} onChange={(nextMaterial) => setHex((current) => ({ ...current, material: nextMaterial, density: getDensity(nextMaterial) }))} /></div>
                      <Field label="Malzeme Kesiti / Karşıdan Karşıya Ölçü (s)" value={hex.acrossFlats} onChange={(value) => setHex((current) => ({ ...current, acrossFlats: value }))} />
                      <Field label="Malzeme Boyu (l)" value={hex.length} onChange={(value) => setHex((current) => ({ ...current, length: value }))} />
                      <Field label="Sipariş Adedi" value={hex.quantity} onChange={(value) => setHex((current) => ({ ...current, quantity: value }))} />
                      <Field label="Malzeme Kg Fiyatı" value={hex.pricePerKg} onChange={(value) => setHex((current) => ({ ...current, pricePerKg: value }))} />
                      <ReadonlyField label="Malzeme Yoğunluğu" value={hex.density} unit="kg/dm³" />
                    </div>
                  </div>
                  <HexMaterialDiagram />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <ResultCard title="Parça Bazlı Sonuçlar" rows={[
                    { label: "Adet Ağırlığı", value: `${formatNumber(hexResult.pieceWeight)} kg` },
                    { label: "Adet Fiyatı", value: formatCurrency(hexResult.piecePrice) },
                    { label: "KDV Dahil Fiyat (%20)", value: formatCurrency(hexResult.piecePriceVat) },
                  ]} />
                  <ResultCard title="Toplam Sonuçlar" rows={[
                    { label: "Toplam Ağırlık", value: `${formatNumber(hexResult.totalWeight)} kg` },
                    { label: "Toplam Fiyat", value: formatCurrency(hexResult.totalPrice) },
                    { label: "KDV Dahil Toplam Fiyat (%20)", value: formatCurrency(hexResult.totalPriceVat) },
                  ]} />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <NoteBlock title="Bilgilendirme" text={infoText} />
                  <NoteBlock title="Yasal Uyarı" text={legalText} />
                </div>
              </div>
            </div>

            <div id={`${tabsId}-sheet-panel`} role="tabpanel" aria-labelledby={`${tabsId}-sheet-tab`} hidden={activeTab !== "sheet"}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <SectionHeader title="Sac / Levha" intro={tabs[3].intro} actions={actionButton("Temizle", () => setSheet({ material: defaultMaterial, width: "1000", height: "2000", thickness: "5", quantity: "1", density: getDensity(defaultMaterial), pricePerKg: "0" }))} />
                <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-3xl bg-white p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-slate-950">Malzeme Bilgileri</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><MaterialSelect value={sheet.material} onChange={(nextMaterial) => setSheet((current) => ({ ...current, material: nextMaterial, density: getDensity(nextMaterial) }))} /></div>
                      <Field label="Sac Kalınlığı (t)" value={sheet.thickness} onChange={(value) => setSheet((current) => ({ ...current, thickness: value }))} />
                      <Field label="Sac Eni (e)" value={sheet.width} onChange={(value) => setSheet((current) => ({ ...current, width: value }))} />
                      <Field label="Sac Boyu (l)" value={sheet.height} onChange={(value) => setSheet((current) => ({ ...current, height: value }))} />
                      <Field label="Sipariş Adedi" value={sheet.quantity} onChange={(value) => setSheet((current) => ({ ...current, quantity: value }))} />
                      <Field label="Malzeme Kg Fiyatı" value={sheet.pricePerKg} onChange={(value) => setSheet((current) => ({ ...current, pricePerKg: value }))} />
                      <ReadonlyField label="Malzeme Yoğunluğu" value={sheet.density} unit="kg/dm³" />
                    </div>
                  </div>
                  <SheetMaterialDiagram />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <ResultCard title="Parça Bazlı Sonuçlar" rows={[
                    { label: "Adet Ağırlığı", value: `${formatNumber(sheetResult.pieceWeight)} kg` },
                    { label: "Adet Fiyatı", value: formatCurrency(sheetResult.piecePrice) },
                    { label: "KDV Dahil Fiyat (%20)", value: formatCurrency(sheetResult.piecePriceVat) },
                  ]} />
                  <ResultCard title="Toplam Sonuçlar" rows={[
                    { label: "Toplam Ağırlık", value: `${formatNumber(sheetResult.totalWeight)} kg` },
                    { label: "Toplam Fiyat", value: formatCurrency(sheetResult.totalPrice) },
                    { label: "KDV Dahil Toplam Fiyat (%20)", value: formatCurrency(sheetResult.totalPriceVat) },
                  ]} />
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <NoteBlock title="Bilgilendirme" text={infoText} />
                  <NoteBlock title="Yasal Uyarı" text={legalText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
