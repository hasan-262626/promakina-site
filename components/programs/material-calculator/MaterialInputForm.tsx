"use client";

import { getSeries } from "./materialProfileWeights";
import { patternThicknessOptions } from "./materialFormConfig";
import type { CalcValues, MaterialDef } from "./types";
import { grades } from "./types";

type Props = {
  material: MaterialDef;
  values: CalcValues;
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
};

function Input({
  field,
  label,
  unit,
  values,
  errors,
  onChange,
  placeholder,
}: {
  field: string;
  label: string;
  unit?: string;
  values: CalcValues;
  errors: Record<string, string>;
  onChange: Props["onChange"];
  placeholder?: string;
}) {
  const error = errors[field];
  return (
    <label className="block">
      <span className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-slate-800">{label}</span>
        {unit ? <span className="text-xs font-medium text-slate-500">{unit}</span> : null}
      </span>
      <input
        type="number"
        inputMode="decimal"
        value={values[field] ?? ""}
        onChange={(event) => onChange(field, event.target.value)}
        placeholder={placeholder}
        className={`mt-1.5 h-12 w-full rounded-xl border bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#278DC0] ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      />
      {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function Select({
  field,
  label,
  options,
  values,
  errors,
  onChange,
}: {
  field: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  values: CalcValues;
  errors: Record<string, string>;
  onChange: Props["onChange"];
}) {
  const error = errors[field];
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <select
        value={values[field] ?? ""}
        onChange={(event) => onChange(field, event.target.value)}
        className={`mt-1.5 h-12 w-full rounded-xl border bg-white px-4 text-base text-slate-900 outline-none transition focus:border-[#278DC0] ${
          error ? "border-red-400" : "border-slate-200"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function LengthInput({ values, errors, onChange }: Pick<Props, "values" | "errors" | "onChange">) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <Input field="length" label="Boy" values={values} errors={errors} onChange={onChange} placeholder="örn. 6000" />
      <label className="block">
        <span className="text-sm font-semibold text-slate-800">Birim</span>
        <select
          value={values.lengthUnit ?? "mm"}
          onChange={(event) => onChange("lengthUnit", event.target.value)}
          className="mt-1.5 h-12 rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-900 outline-none focus:border-[#278DC0]"
        >
          <option value="mm">mm</option>
          <option value="m">m</option>
        </select>
      </label>
    </div>
  );
}

export function MaterialInputForm({ material, values, errors, onChange }: Props) {
  const kind = material.kind;
  const showLength = !["sheet", "patterned", "perforated", "manualKgAdet"].includes(kind);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {material.note ? (
        <p className="rounded-xl border border-[#278DC0]/20 bg-[#eef6fb] p-3 text-xs leading-5 text-[#154764] sm:col-span-2">
          {material.note}
        </p>
      ) : null}

      {kind === "sheet" ? (
        <>
          <Input field="width" label="En" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 1000" />
          <Input field="height" label="Boy" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 2000" />
          <Input field="thickness" label="Kalınlık" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 10" />
        </>
      ) : null}

      {kind === "lama" ? (
        <>
          <Input field="width" label="Genişlik" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Kalınlık" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "patterned" ? (
        <>
          <Input field="width" label="En" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 1400" />
          <Input field="height" label="Boy" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 2000" />
          <Select
            field="patternThickness"
            label="Kalınlık (taban/desen)"
            options={patternThicknessOptions.map((option) => ({ value: option, label: `${option} mm` }))}
            values={values}
            errors={errors}
            onChange={onChange}
          />
        </>
      ) : null}

      {kind === "perforated" ? (
        <>
          <Input field="width" label="En" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="height" label="Boy" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Kalınlık" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="holeDiameter" label="Delik çapı" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="holePitch" label="Delik aralığı" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="holePercent" label="Delik oranı (opsiyonel)" unit="%" values={values} errors={errors} onChange={onChange} placeholder="boşsa çap/aralıktan hesaplanır" />
        </>
      ) : null}

      {kind === "squareTube" ? (
        <>
          <Input field="sizeA" label="Dış ölçü (A)" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 100" />
          <Input field="thickness" label="Et kalınlığı" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 5" />
        </>
      ) : null}

      {kind === "rectTube" ? (
        <>
          <Input field="width" label="Genişlik" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="heightDim" label="Yükseklik" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Et kalınlığı" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "pipe" ? (
        <>
          <Input field="diameter" label="Dış çap" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Et kalınlığı" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "equalAngle" ? (
        <>
          <Input field="sizeA" label="Kenar" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Kalınlık" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "unequalAngle" ? (
        <>
          <Input field="sizeA" label="Kenar A" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="sizeB" label="Kenar B" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Kalınlık" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "round" ? (
        <Input field="diameter" label="Çap" unit="mm" values={values} errors={errors} onChange={onChange} placeholder="örn. 100" />
      ) : null}

      {kind === "hex" ? (
        <Input field="sizeA" label="Anahtar ağzı" unit="mm" values={values} errors={errors} onChange={onChange} />
      ) : null}

      {kind === "tprofile" ? (
        <>
          <Input field="width" label="Başlık genişliği" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="heightDim" label="Toplam yükseklik" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thicknessF" label="Başlık kalınlığı" unit="mm" values={values} errors={errors} onChange={onChange} />
          <Input field="thickness" label="Gövde kalınlığı" unit="mm" values={values} errors={errors} onChange={onChange} />
        </>
      ) : null}

      {kind === "stdProfile" ? (
        <>
          <Select
            field="profileMode"
            label="Kullanım modu"
            options={[
              { value: "std", label: "Standart ölçü seçimi" },
              { value: "manual", label: "Manuel kg/m girişi" },
            ]}
            values={values}
            errors={errors}
            onChange={onChange}
          />
          {values.profileMode === "manual" ? (
            <Input field="kgm" label="Birim ağırlık" unit="kg/m" values={values} errors={errors} onChange={onChange} />
          ) : (
            <Select
              field="profileSize"
              label={`${material.series} ölçüsü`}
              options={(getSeries(material.series ?? "")?.sizes ?? []).map((size) => ({
                value: String(size.size),
                label: `${material.series} ${size.size} (${size.kgm} kg/m)`,
              }))}
              values={values}
              errors={errors}
              onChange={onChange}
            />
          )}
        </>
      ) : null}

      {kind === "manualKgM" ? (
        <Input field="kgm" label="Birim ağırlık" unit="kg/m" values={values} errors={errors} onChange={onChange} />
      ) : null}

      {kind === "manualKgAdet" ? (
        <Input field="kgAdet" label="Parça ağırlığı" unit="kg/adet" values={values} errors={errors} onChange={onChange} />
      ) : null}

      {showLength ? <LengthInput values={values} errors={errors} onChange={onChange} /> : null}

      <Input field="quantity" label="Adet" values={values} errors={errors} onChange={onChange} />

      <Select
        field="grade"
        label="Malzeme türü"
        options={grades.map((grade) => ({ value: grade.id, label: grade.label }))}
        values={values}
        errors={errors}
        onChange={onChange}
      />

      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Input field="unitPrice" label="Birim fiyat" unit="₺" values={values} errors={errors} onChange={onChange} placeholder="boşsa fiyat 0" />
        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Fiyat tipi</span>
          <select
            value={values.priceType ?? "kg"}
            onChange={(event) => onChange("priceType", event.target.value)}
            className="mt-1.5 h-12 rounded-xl border border-slate-200 bg-white px-3 text-base text-slate-900 outline-none focus:border-[#278DC0]"
          >
            <option value="kg">₺/kg</option>
            {showLength ? <option value="m">₺/m</option> : null}
            <option value="adet">₺/adet</option>
          </select>
        </label>
      </div>
    </div>
  );
}
