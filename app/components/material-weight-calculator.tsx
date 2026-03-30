"use client";

import { useMemo, useState } from "react";

type GeometryKey = "round" | "rect" | "hex" | "sheet";

type MaterialState = {
  material: string;
  density: string;
  quantity: string;
  pricePerKg: string;
};

type RoundState = MaterialState & {
  diameter: string;
  innerDiameter: string;
  length: string;
};

type RectState = MaterialState & {
  width: string;
  thickness: string;
  length: string;
};

type HexState = MaterialState & {
  acrossFlats: string;
  length: string;
};

type SheetState = MaterialState & {
  width: string;
  height: string;
  thickness: string;
};

const MATERIAL_DENSITY: Record<string, string> = {
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

const MATERIALS = Object.keys(MATERIAL_DENSITY);
const DEFAULT_MATERIAL = "Çelik (1040-St)";

const GEOMETRIES: Array<{ key: GeometryKey; label: string; intro: string }> = [
  { key: "round", label: "Yuvarlak Malzeme", intro: "Çap, iç çap ve boy bilgilerine göre dolu veya boru kesitli malzeme ağırlığını hesaplayın." },
  { key: "rect", label: "Kare / Lama Malzeme", intro: "Genişlik, kalınlık ve boy bilgilerine göre dikdörtgen kesitli malzeme hesabı yapın." },
  { key: "hex", label: "Altıköşe Malzeme", intro: "Karşıdan karşıya ölçü ve boy bilgisine göre altıköşe malzeme ağırlığını hesaplayın." },
  { key: "sheet", label: "Sac / Levha", intro: "Sac eni, boyu ve kalınlığına göre levha ağırlığını hızlıca görün." },
];

const toNumber = (value: string) => {
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

const fmt = (value: number, digits = 3) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);

const money = (value: number) => `${fmt(value, 2)} ₺`;

function Field({
  label,
  value,
  onChange,
  unit,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex items-center rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 transition focus-within:border-blue-300 focus-within:bg-white">
        <input
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.,-]/g, ""))}
          className="w-full bg-transparent text-slate-900 outline-none"
        />
        {unit ? <span className="ml-3 text-sm text-slate-500">{unit}</span> : null}
      </div>
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ReadonlyField({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex min-h-[50px] items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
        <span>{value}</span>
        {unit ? <span className="text-sm text-slate-500">{unit}</span> : null}
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function Diagram({ geometry }: { geometry: GeometryKey }) {
  if (geometry === "round") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-label="Yuvarlak malzeme teknik şeması">
        <circle cx="92" cy="110" r="44" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <circle cx="92" cy="110" r="18" fill="white" stroke="#2563eb" strokeWidth="2.5" />
        <rect x="192" y="90" width="120" height="40" rx="18" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <text x="92" y="52" textAnchor="middle" fill="#1e3a8a" fontSize="16">ØD</text>
        <text x="92" y="115" textAnchor="middle" fill="#2563eb" fontSize="14">Ød</text>
        <text x="252" y="82" textAnchor="middle" fill="#1e3a8a" fontSize="16">L</text>
      </svg>
    );
  }

  if (geometry === "rect") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-label="Kare veya lama teknik şeması">
        <rect x="46" y="64" width="100" height="76" rx="8" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <rect x="196" y="90" width="116" height="34" rx="8" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <text x="96" y="54" textAnchor="middle" fill="#1e3a8a" fontSize="16">W</text>
        <text x="28" y="110" textAnchor="middle" fill="#2563eb" fontSize="16">t</text>
        <text x="254" y="82" textAnchor="middle" fill="#1e3a8a" fontSize="16">L</text>
      </svg>
    );
  }

  if (geometry === "hex") {
    return (
      <svg viewBox="0 0 360 220" className="h-auto w-full" aria-label="Altıköşe malzeme teknik şeması">
        <polygon points="92,58 130,80 130,124 92,146 54,124 54,80" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
        <rect x="198" y="92" width="118" height="30" rx="8" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
        <text x="92" y="50" textAnchor="middle" fill="#1e3a8a" fontSize="16">s</text>
        <text x="257" y="84" textAnchor="middle" fill="#1e3a8a" fontSize="16">L</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" aria-label="Sac veya levha teknik şeması">
      <rect x="54" y="52" width="138" height="116" rx="10" fill="#dbeafe" stroke="#1e3a8a" strokeWidth="3" />
      <text x="123" y="42" textAnchor="middle" fill="#1e3a8a" fontSize="16">W</text>
      <text x="38" y="114" textAnchor="middle" fill="#2563eb" fontSize="16">L</text>
      <text x="256" y="114" textAnchor="middle" fill="#1e3a8a" fontSize="16">t</text>
      <rect x="238" y="78" width="34" height="72" rx="8" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2.5" />
    </svg>
  );
}

export function MaterialWeightCalculator() {
  const [geometry, setGeometry] = useState<GeometryKey>("round");
  const [round, setRound] = useState<RoundState>({
    material: DEFAULT_MATERIAL,
    density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
    quantity: "1",
    pricePerKg: "0",
    diameter: "40",
    innerDiameter: "0",
    length: "1000",
  });
  const [rect, setRect] = useState<RectState>({
    material: DEFAULT_MATERIAL,
    density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
    quantity: "1",
    pricePerKg: "0",
    width: "50",
    thickness: "20",
    length: "1000",
  });
  const [hex, setHex] = useState<HexState>({
    material: DEFAULT_MATERIAL,
    density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
    quantity: "1",
    pricePerKg: "0",
    acrossFlats: "30",
    length: "1000",
  });
  const [sheet, setSheet] = useState<SheetState>({
    material: DEFAULT_MATERIAL,
    density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
    quantity: "1",
    pricePerKg: "0",
    width: "1000",
    height: "2000",
    thickness: "5",
  });

  const activeIntro = GEOMETRIES.find((item) => item.key === geometry)?.intro ?? "";

  const result = useMemo(() => {
    if (geometry === "round") {
      const diameter = toNumber(round.diameter);
      const innerDiameter = Math.max(0, Math.min(toNumber(round.innerDiameter), diameter));
      const length = toNumber(round.length);
      const quantity = Math.max(0, toNumber(round.quantity));
      const density = toNumber(round.density);
      const pricePerKg = Math.max(0, toNumber(round.pricePerKg));
      const area = (Math.PI * (diameter * diameter - innerDiameter * innerDiameter)) / 4;
      const pieceWeight = ((area * length) / 1_000_000) * density;
      const totalWeight = pieceWeight * quantity;
      const totalPrice = totalWeight * pricePerKg;
      return {
        pieceWeight,
        totalWeight,
        totalPrice,
        geometryLabel: "Yuvarlak Malzeme",
      };
    }

    if (geometry === "rect") {
      const pieceWeight =
        ((toNumber(rect.width) * toNumber(rect.thickness) * toNumber(rect.length)) / 1_000_000) *
        toNumber(rect.density);
      const totalWeight = pieceWeight * Math.max(0, toNumber(rect.quantity));
      const totalPrice = totalWeight * Math.max(0, toNumber(rect.pricePerKg));
      return {
        pieceWeight,
        totalWeight,
        totalPrice,
        geometryLabel: "Kare / Lama Malzeme",
      };
    }

    if (geometry === "hex") {
      const s = toNumber(hex.acrossFlats);
      const area = (Math.sqrt(3) / 2) * s * s;
      const pieceWeight = ((area * toNumber(hex.length)) / 1_000_000) * toNumber(hex.density);
      const totalWeight = pieceWeight * Math.max(0, toNumber(hex.quantity));
      const totalPrice = totalWeight * Math.max(0, toNumber(hex.pricePerKg));
      return {
        pieceWeight,
        totalWeight,
        totalPrice,
        geometryLabel: "Altıköşe Malzeme",
      };
    }

    const pieceWeight =
      ((toNumber(sheet.width) * toNumber(sheet.height) * toNumber(sheet.thickness)) / 1_000_000) *
      toNumber(sheet.density);
    const totalWeight = pieceWeight * Math.max(0, toNumber(sheet.quantity));
    const totalPrice = totalWeight * Math.max(0, toNumber(sheet.pricePerKg));
    return {
      pieceWeight,
      totalWeight,
      totalPrice,
      geometryLabel: "Sac / Levha",
    };
  }, [geometry, round, rect, hex, sheet]);

  const currentMaterial =
    geometry === "round"
      ? round.material
      : geometry === "rect"
        ? rect.material
        : geometry === "hex"
          ? hex.material
          : sheet.material;

  const currentDensity =
    geometry === "round"
      ? round.density
      : geometry === "rect"
        ? rect.density
        : geometry === "hex"
          ? hex.density
          : sheet.density;

  const resetCurrent = () => {
    if (geometry === "round") {
      setRound({
        material: DEFAULT_MATERIAL,
        density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
        quantity: "1",
        pricePerKg: "0",
        diameter: "40",
        innerDiameter: "0",
        length: "1000",
      });
      return;
    }

    if (geometry === "rect") {
      setRect({
        material: DEFAULT_MATERIAL,
        density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
        quantity: "1",
        pricePerKg: "0",
        width: "50",
        thickness: "20",
        length: "1000",
      });
      return;
    }

    if (geometry === "hex") {
      setHex({
        material: DEFAULT_MATERIAL,
        density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
        quantity: "1",
        pricePerKg: "0",
        acrossFlats: "30",
        length: "1000",
      });
      return;
    }

    setSheet({
      material: DEFAULT_MATERIAL,
      density: MATERIAL_DENSITY[DEFAULT_MATERIAL],
      quantity: "1",
      pricePerKg: "0",
      width: "1000",
      height: "2000",
      thickness: "5",
    });
  };

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] pb-14 pt-8 lg:pb-16 lg:pt-10">
      <div className="site-container space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Müşteri Seçimi</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Bu bölümde gerekli tüm seçim ve girişleri tek seferde doldurun.
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli alanları doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
              </div>
              <button
                type="button"
                onClick={resetCurrent}
                className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                Temizle
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Geometri</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {GEOMETRIES.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setGeometry(item.key)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                        geometry === item.key
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{activeIntro}</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Standarttan Otomatik Gelen Alanlar</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <SelectField
                    label="Malzeme"
                    value={currentMaterial}
                    onChange={(value) => {
                      const density = MATERIAL_DENSITY[value];
                      if (geometry === "round") setRound((current) => ({ ...current, material: value, density }));
                      if (geometry === "rect") setRect((current) => ({ ...current, material: value, density }));
                      if (geometry === "hex") setHex((current) => ({ ...current, material: value, density }));
                      if (geometry === "sheet") setSheet((current) => ({ ...current, material: value, density }));
                    }}
                    options={MATERIALS}
                  />
                  <ReadonlyField label="Yoğunluk" value={currentDensity} unit="kg/dm³" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşturulur.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Boyutlar</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {geometry === "round" ? (
                    <>
                      <Field label="Dış Çap (ØD)" value={round.diameter} onChange={(value) => setRound((current) => ({ ...current, diameter: value }))} unit="mm" />
                      <Field label="İç Çap (Ød)" value={round.innerDiameter} onChange={(value) => setRound((current) => ({ ...current, innerDiameter: value }))} unit="mm" />
                      <Field label="Boy (L)" value={round.length} onChange={(value) => setRound((current) => ({ ...current, length: value }))} unit="mm" />
                    </>
                  ) : null}

                  {geometry === "rect" ? (
                    <>
                      <Field label="En (W)" value={rect.width} onChange={(value) => setRect((current) => ({ ...current, width: value }))} unit="mm" />
                      <Field label="Kalınlık (t)" value={rect.thickness} onChange={(value) => setRect((current) => ({ ...current, thickness: value }))} unit="mm" />
                      <Field label="Boy (L)" value={rect.length} onChange={(value) => setRect((current) => ({ ...current, length: value }))} unit="mm" />
                    </>
                  ) : null}

                  {geometry === "hex" ? (
                    <>
                      <Field label="Karşıdan Karşıya (s)" value={hex.acrossFlats} onChange={(value) => setHex((current) => ({ ...current, acrossFlats: value }))} unit="mm" />
                      <Field label="Boy (L)" value={hex.length} onChange={(value) => setHex((current) => ({ ...current, length: value }))} unit="mm" />
                    </>
                  ) : null}

                  {geometry === "sheet" ? (
                    <>
                      <Field label="En (W)" value={sheet.width} onChange={(value) => setSheet((current) => ({ ...current, width: value }))} unit="mm" />
                      <Field label="Boy (L)" value={sheet.height} onChange={(value) => setSheet((current) => ({ ...current, height: value }))} unit="mm" />
                      <Field label="Kalınlık (t)" value={sheet.thickness} onChange={(value) => setSheet((current) => ({ ...current, thickness: value }))} unit="mm" />
                    </>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Sipariş / Maliyet</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Field
                    label="Adet"
                    value={
                      geometry === "round"
                        ? round.quantity
                        : geometry === "rect"
                          ? rect.quantity
                          : geometry === "hex"
                            ? hex.quantity
                            : sheet.quantity
                    }
                    onChange={(value) => {
                      if (geometry === "round") setRound((current) => ({ ...current, quantity: value }));
                      if (geometry === "rect") setRect((current) => ({ ...current, quantity: value }));
                      if (geometry === "hex") setHex((current) => ({ ...current, quantity: value }));
                      if (geometry === "sheet") setSheet((current) => ({ ...current, quantity: value }));
                    }}
                  />
                  <Field
                    label="Kg Fiyatı"
                    value={
                      geometry === "round"
                        ? round.pricePerKg
                        : geometry === "rect"
                          ? rect.pricePerKg
                          : geometry === "hex"
                            ? hex.pricePerKg
                            : sheet.pricePerKg
                    }
                    onChange={(value) => {
                      if (geometry === "round") setRound((current) => ({ ...current, pricePerKg: value }));
                      if (geometry === "rect") setRect((current) => ({ ...current, pricePerKg: value }));
                      if (geometry === "hex") setHex((current) => ({ ...current, pricePerKg: value }));
                      if (geometry === "sheet") setSheet((current) => ({ ...current, pricePerKg: value }));
                    }}
                    unit="₺/kg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Teknik Şema</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">Aktif Geometri Görünümü</h3>
            <div className="mt-5 rounded-[24px] border border-slate-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-4">
              <div className="mx-auto aspect-[16/10] max-w-xl">
                <Diagram geometry={geometry} />
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sol panelde aktif olan geometriye göre teknik kesit burada güncellenir. Böylece kullanıcı hangi ölçüyü
              nereye girdiğini görsel olarak anlayabilir.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">Yoğunluk</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">Boy</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">Geometri</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">Adet</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ResultCard label="Geometri" value={result.geometryLabel} />
          <ResultCard label="Parça Ağırlığı" value={`${fmt(result.pieceWeight)} kg`} />
          <ResultCard label="Toplam Ağırlık" value={`${fmt(result.totalWeight)} kg`} />
          <ResultCard label="Toplam Tutar" value={money(result.totalPrice)} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-950">Teknik Değerlendirme</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Girdiğiniz geometri, malzeme yoğunluğu ve boyutlara göre ağırlık hesabı tek panel üzerinden üretildi.
              Bu yapı sayesinde kullanıcı geometri seçimi sonrası aşağıda ikinci bir form aramadan tüm girdileri aynı
              yerden tamamlayabilir.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-950">Temel Açıklama</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Malzeme ağırlık hesabı, kesit alanı ile boyun çarpılması sonucu elde edilen hacmin yoğunlukla
              değerlendirilmesine dayanır. Sonuçlar teklif, sevkiyat ve ön maliyet planlaması için hızlı referans
              sunar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
