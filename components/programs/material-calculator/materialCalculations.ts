import { getKgm } from "./materialProfileWeights";
import type { CalcResult, CalcValues, MaterialDef, PatternType, PriceType } from "./types";

export const num = (value: string | undefined) => {
  const parsed = Number((value ?? "").toString().trim().replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};

/** mm³ → kg */
const mm3ToKg = (volumeMm3: number, density: number) => (volumeMm3 * density) / 1_000_000_000;

/** Boy alanını mm'ye çevirir (birim mm veya m) */
const lengthMm = (values: CalcValues) =>
  values.lengthUnit === "m" ? num(values.length) * 1000 : num(values.length);

/**
 * Desenli sac efektif kalınlık kuralları (yaklaşık sektör değerleri).
 * Çeta katsayısı referans hesaplayıcıya göre kalibre edilmiştir:
 * 1400x2000x2/3 çeta @35 ₺/kg → 53,01 kg / 1.855,27 ₺.
 */
const PATTERN_RULES: Record<PatternType, { factor?: number; addMm?: number }> = {
  ceta: { factor: 1.18321 },
  baklava: { addMm: 0.35 },
  gozyasi: { addMm: 0.35 },
};

export function effectivePatternThickness(pattern: PatternType, baseMm: number): number {
  const rule = PATTERN_RULES[pattern];
  if (rule.factor) return baseMm * rule.factor;
  return baseMm + (rule.addMm ?? 0);
}

/** 60° şaşırtmalı delik dizilimi için açık alan oranı */
export function holeOpenRatio(holeDiameter: number, pitch: number): number {
  if (holeDiameter <= 0 || pitch <= 0) return 0;
  return Math.min(0.9, 0.907 * (holeDiameter / pitch) ** 2);
}

export type ValidationError = { field: string; message: string };

export function validate(material: MaterialDef, values: CalcValues): ValidationError[] {
  const errors: ValidationError[] = [];
  const need = (field: string, label: string) => {
    if (num(values[field]) <= 0) errors.push({ field, message: `${label} 0'dan büyük olmalıdır.` });
  };

  switch (material.kind) {
    case "sheet":
      need("width", "En");
      need("height", "Boy");
      need("thickness", "Kalınlık");
      break;
    case "lama":
      need("width", "Genişlik");
      need("thickness", "Kalınlık");
      need("length", "Boy");
      break;
    case "patterned":
      need("width", "En");
      need("height", "Boy");
      break;
    case "perforated":
      need("width", "En");
      need("height", "Boy");
      need("thickness", "Kalınlık");
      break;
    case "squareTube": {
      need("sizeA", "Dış ölçü");
      need("thickness", "Et kalınlığı");
      need("length", "Boy");
      const a = num(values.sizeA);
      const t = num(values.thickness);
      if (a > 0 && t > 0 && 2 * t >= a) errors.push({ field: "thickness", message: "Et kalınlığı dış ölçünün yarısından büyük olamaz." });
      break;
    }
    case "rectTube": {
      need("width", "Genişlik");
      need("heightDim", "Yükseklik");
      need("thickness", "Et kalınlığı");
      need("length", "Boy");
      const w = num(values.width);
      const h = num(values.heightDim);
      const t = num(values.thickness);
      if (t > 0 && (2 * t >= w || 2 * t >= h)) errors.push({ field: "thickness", message: "Et kalınlığı kesit ölçülerine göre çok büyük." });
      break;
    }
    case "pipe": {
      need("diameter", "Dış çap");
      need("thickness", "Et kalınlığı");
      need("length", "Boy");
      const d = num(values.diameter);
      const t = num(values.thickness);
      if (d > 0 && t > 0 && 2 * t >= d) errors.push({ field: "thickness", message: "Et kalınlığı çapın yarısından büyük olamaz." });
      break;
    }
    case "equalAngle":
      need("sizeA", "Kenar");
      need("thickness", "Kalınlık");
      need("length", "Boy");
      break;
    case "unequalAngle":
      need("sizeA", "Kenar A");
      need("sizeB", "Kenar B");
      need("thickness", "Kalınlık");
      need("length", "Boy");
      break;
    case "round":
      need("diameter", "Çap");
      need("length", "Boy");
      break;
    case "hex":
      need("sizeA", "Anahtar ağzı");
      need("length", "Boy");
      break;
    case "tprofile":
      need("width", "Başlık genişliği");
      need("heightDim", "Toplam yükseklik");
      need("thicknessF", "Başlık kalınlığı");
      need("thickness", "Gövde kalınlığı");
      need("length", "Boy");
      break;
    case "stdProfile":
      if (values.profileMode === "manual") {
        need("kgm", "kg/m");
      } else if (!values.profileSize) {
        errors.push({ field: "profileSize", message: "Profil ölçüsü seçin." });
      }
      need("length", "Boy");
      break;
    case "manualKgM":
      need("kgm", "kg/m");
      need("length", "Boy");
      break;
    case "manualKgAdet":
      need("kgAdet", "kg/adet");
      break;
  }

  if (num(values.quantity) <= 0) errors.push({ field: "quantity", message: "Adet 0'dan büyük olmalıdır." });
  return errors;
}

export function calculate(material: MaterialDef, values: CalcValues, density: number): CalcResult {
  const qty = Math.max(num(values.quantity), 0);
  const L = lengthMm(values);
  let unitKg = 0;
  let sizeText = "";
  let hasLength = true;

  switch (material.kind) {
    case "sheet": {
      const w = num(values.width);
      const h = num(values.height);
      const t = num(values.thickness);
      unitKg = mm3ToKg(w * h * t, density);
      sizeText = `${w} x ${h} x ${t} mm`;
      hasLength = false;
      break;
    }
    case "lama": {
      const w = num(values.width);
      const t = num(values.thickness);
      unitKg = mm3ToKg(w * t * L, density);
      sizeText = `${w} x ${t} x ${L} mm`;
      break;
    }
    case "patterned": {
      const w = num(values.width);
      const h = num(values.height);
      const base = num((values.patternThickness ?? "2/3").split("/")[0]);
      const eff = effectivePatternThickness(material.pattern ?? "baklava", base);
      unitKg = mm3ToKg(w * h * eff, density);
      sizeText = `${w} x ${h} x ${values.patternThickness ?? "2/3"} mm`;
      hasLength = false;
      break;
    }
    case "perforated": {
      const w = num(values.width);
      const h = num(values.height);
      const t = num(values.thickness);
      const manualRatio = num(values.holePercent) / 100;
      const ratio =
        manualRatio > 0
          ? Math.min(manualRatio, 0.9)
          : holeOpenRatio(num(values.holeDiameter), num(values.holePitch));
      unitKg = mm3ToKg(w * h * t, density) * (1 - ratio);
      sizeText = `${w} x ${h} x ${t} mm (delik %${(ratio * 100).toFixed(0)})`;
      hasLength = false;
      break;
    }
    case "squareTube": {
      const a = num(values.sizeA);
      const t = num(values.thickness);
      const area = a * a - (a - 2 * t) * (a - 2 * t);
      unitKg = mm3ToKg(area * L, density);
      sizeText = `${a} x ${a} x ${t} x ${L} mm`;
      break;
    }
    case "rectTube": {
      const w = num(values.width);
      const h = num(values.heightDim);
      const t = num(values.thickness);
      const area = w * h - (w - 2 * t) * (h - 2 * t);
      unitKg = mm3ToKg(area * L, density);
      sizeText = `${w} x ${h} x ${t} x ${L} mm`;
      break;
    }
    case "pipe": {
      const d = num(values.diameter);
      const t = num(values.thickness);
      const area = (Math.PI / 4) * (d * d - (d - 2 * t) * (d - 2 * t));
      unitKg = mm3ToKg(area * L, density);
      sizeText = `Ø${d} x ${t} x ${L} mm`;
      break;
    }
    case "equalAngle": {
      const a = num(values.sizeA);
      const t = num(values.thickness);
      const area = 2 * a * t - t * t;
      unitKg = mm3ToKg(area * L, density);
      sizeText = `L${a} x ${a} x ${t} x ${L} mm`;
      break;
    }
    case "unequalAngle": {
      const a = num(values.sizeA);
      const b = num(values.sizeB);
      const t = num(values.thickness);
      const area = (a + b - t) * t;
      unitKg = mm3ToKg(area * L, density);
      sizeText = `L${a} x ${b} x ${t} x ${L} mm`;
      break;
    }
    case "round": {
      const d = num(values.diameter);
      const area = (Math.PI * d * d) / 4;
      unitKg = mm3ToKg(area * L, density);
      sizeText = `Ø${d} x ${L} mm`;
      break;
    }
    case "hex": {
      const a = num(values.sizeA);
      const area = 0.8660254 * a * a;
      unitKg = mm3ToKg(area * L, density);
      sizeText = `SW${a} x ${L} mm`;
      break;
    }
    case "tprofile": {
      const bf = num(values.width);
      const h = num(values.heightDim);
      const tf = num(values.thicknessF);
      const tw = num(values.thickness);
      const area = bf * tf + Math.max(h - tf, 0) * tw;
      unitKg = mm3ToKg(area * L, density);
      sizeText = `T${bf} x ${h} x ${tf}/${tw} x ${L} mm`;
      break;
    }
    case "stdProfile": {
      const meters = L / 1000;
      let kgm = 0;
      let name = material.label;
      if (values.profileMode === "manual") {
        kgm = num(values.kgm);
        name = `${material.label} (manuel ${kgm} kg/m)`;
      } else {
        const size = num(values.profileSize);
        kgm = getKgm(material.series ?? "", size) ?? 0;
        name = `${material.series ?? material.label} ${size}`;
      }
      // Standart profil tabloları 7850 kg/m³ esaslıdır; yoğunluk seçimine göre ölçekle.
      unitKg = kgm * meters * (density / 7850);
      sizeText = `${name} x ${L} mm`;
      break;
    }
    case "manualKgM": {
      const meters = L / 1000;
      unitKg = num(values.kgm) * meters;
      sizeText = `${num(values.kgm)} kg/m x ${L} mm`;
      break;
    }
    case "manualKgAdet": {
      unitKg = num(values.kgAdet);
      sizeText = `${unitKg} kg/adet`;
      hasLength = false;
      break;
    }
  }

  const totalKg = unitKg * qty;
  const totalMeters = hasLength ? (L / 1000) * qty : 0;
  const unitPrice = num(values.unitPrice);
  const priceType = (values.priceType as PriceType) || "kg";
  let totalPrice = 0;
  if (priceType === "kg") totalPrice = totalKg * unitPrice;
  else if (priceType === "m") totalPrice = totalMeters * unitPrice;
  else totalPrice = qty * unitPrice;

  return { unitKg, totalKg, totalMeters, totalPrice, sizeText };
}

/** Türkçe sayı formatı: 1.250,45 */
export const fmtTr = (value: number, digits = 2) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
