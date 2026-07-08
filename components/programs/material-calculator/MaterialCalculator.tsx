"use client";

import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/app/lib/gtm-events";
import { MaterialCategoryNav } from "./MaterialCategoryNav";
import { MaterialInputForm } from "./MaterialInputForm";
import { MaterialListPanel } from "./MaterialListPanel";
import { MaterialResultCard } from "./MaterialResultCard";
import { calculate, validate } from "./materialCalculations";
import { findMaterial, groupLabels, materialCategories, patternThicknessOptions } from "./materialFormConfig";
import type { CalcValues, ListItem, PriceType } from "./types";
import { STEEL_DENSITY_ALT, STEEL_DENSITY_DEFAULT, grades } from "./types";

const STORAGE_KEY = "pro-makina-malzeme-listesi";

const defaultValues: CalcValues = {
  quantity: "1",
  grade: "demir",
  priceType: "kg",
  lengthUnit: "mm",
  profileMode: "std",
  patternThickness: patternThicknessOptions[0],
};

export function MaterialCalculator() {
  const [categoryId, setCategoryId] = useState(materialCategories[0].id);
  const [materialId, setMaterialId] = useState(materialCategories[0].materials[0].id);
  const [values, setValues] = useState<CalcValues>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [steelDensity, setSteelDensity] = useState(STEEL_DENSITY_DEFAULT);
  const [items, setItems] = useState<ListItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Liste localStorage'da saklanır — sayfa yenilenince kaybolmaz.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as ListItem[]);
    } catch {
      // bozuk kayıt yok sayılır
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // depolama dolu olabilir
    }
  }, [items, hydrated]);

  const material = findMaterial(categoryId, materialId) ?? materialCategories[0].materials[0];

  const density = useMemo(() => {
    const grade = grades.find((item) => item.id === values.grade) ?? grades[0];
    let base = grade.id === "demir" ? steelDensity : grade.density;
    // Standart profil tabloları katalog (7850) esaslıdır; çelikte tabloyu aynen kullan.
    if (material.kind === "stdProfile" && grade.id === "demir") base = 7850;
    return base;
  }, [values.grade, steelDensity, material.kind]);

  const validationErrors = useMemo(() => validate(material, values), [material, values]);
  const isValid = validationErrors.length === 0;

  const result = useMemo(() => {
    if (!isValid) return null;
    return calculate(material, values, density);
  }, [material, values, density, isValid]);

  const handleSelect = (nextCategoryId: string, nextMaterialId: string) => {
    setCategoryId(nextCategoryId);
    setMaterialId(nextMaterialId);
    setErrors({});
    setValues((current) => ({
      ...defaultValues,
      grade: current.grade,
      unitPrice: current.unitPrice,
      priceType: current.priceType,
      lengthUnit: current.lengthUnit,
    }));
  };

  const handleChange = (field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleAdd = () => {
    const nextErrors = validate(material, values);
    if (nextErrors.length > 0 || !result) {
      setErrors(Object.fromEntries(nextErrors.map((error) => [error.field, error.message])));
      return;
    }

    const grade = grades.find((item) => item.id === values.grade) ?? grades[0];
    const item: ListItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      group: groupLabels[categoryId] ?? "MALZEME",
      material: `${material.label} ${result.sizeText}`,
      gradeLabel: grade.label.toLocaleUpperCase("tr-TR"),
      quantity: Math.max(1, Math.round(Number(values.quantity) || 1)),
      totalKg: result.totalKg,
      unitPrice: Number((values.unitPrice ?? "0").replace(",", ".")) || 0,
      priceType: (values.priceType as PriceType) || "kg",
      totalPrice: result.totalPrice,
    };
    setItems((current) => [item, ...current]);
    trackEvent("calculator_result", {
      calculator_slug: "malzeme-agirlik-hesabi",
      machine_type: material.id,
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) return item;
        const perUnitKg = item.totalKg / item.quantity;
        const perUnitPrice = item.totalPrice / item.quantity;
        return {
          ...item,
          quantity,
          totalKg: perUnitKg * quantity,
          totalPrice: perUnitPrice * quantity,
        };
      }),
    );
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)_320px] xl:grid-cols-[260px_minmax(0,1fr)_360px]">
      {/* Sol: kategoriler (mobilde üstte) */}
      <div className="lg:max-h-[720px] lg:overflow-y-auto lg:pr-1">
        <MaterialCategoryNav
          categories={materialCategories}
          activeCategoryId={categoryId}
          activeMaterialId={materialId}
          onSelect={handleSelect}
        />
      </div>

      {/* Orta: form + sonuç */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <h2 className="text-lg font-bold text-slate-950">{material.label}</h2>
            <label className="flex items-center gap-2 text-xs font-medium text-slate-500">
              Çelik yoğunluğu:
              <select
                value={steelDensity}
                onChange={(event) => setSteelDensity(Number(event.target.value))}
                className="h-8 rounded-lg border border-slate-200 px-2 text-xs outline-none focus:border-[#278DC0]"
              >
                <option value={STEEL_DENSITY_DEFAULT}>8000 kg/m³</option>
                <option value={STEEL_DENSITY_ALT}>7850 kg/m³</option>
              </select>
            </label>
          </div>
          <MaterialInputForm material={material} values={values} errors={errors} onChange={handleChange} />
        </div>
        <MaterialResultCard result={result} onAdd={handleAdd} canAdd={isValid} />
        <p className="text-xs leading-5 text-slate-500">
          Bu hesaplama yaklaşık mühendislik hesabıdır. Nihai imalat, tolerans, fire ve
          tedarik şartlarına göre değişebilir.
        </p>
      </div>

      {/* Sağ: liste paneli */}
      <div>
        <MaterialListPanel
          items={items}
          onRemove={(id) => setItems((current) => current.filter((item) => item.id !== id))}
          onQuantityChange={handleQuantityChange}
          onClear={() => setItems([])}
        />
      </div>
    </div>
  );
}
