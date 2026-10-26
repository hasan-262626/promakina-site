import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import * as DATA from "@/app/(tr)/components/elevator-selection-data";
import { ELEVATOR_VALUES, computeElevatorModel } from "@/app/(tr)/components/elevator-selection-model";
import { DEFAULT_INPUT, SCENARIOS } from "./scenarios";

const run = (key: keyof typeof SCENARIOS) => computeElevatorModel(SCENARIOS[key].input);

describe("elevatör: davranış senaryoları", () => {
  it("A. bantlı elevatörde bant parametreleri geçerli; manuel bant hızı hesaba girer", () => {
    const m = run("A_beltManualSpeed");
    expect(m.recommendedElevatorType).toBe(ELEVATOR_VALUES.beltElevator);
    expect(m.speedValue).toBeCloseTo(1.15, 5);
    // Manuel hız düşük olduğu için kapasite karşılanmaz; uyarı devreye girer.
    expect(m.suitability.statusLabel).toBe("✖ Yetersiz");
    expect(m.warnings.some((w) => w.includes("tasarım kapasitesini karşılamıyor"))).toBe(true);
    // Zincirli seçimde manuel bant hızı yok sayılır (regresyon).
    const chain = computeElevatorModel({ ...SCENARIOS.A_beltManualSpeed.input, elevatorType: "Zincirli elevatör" });
    expect(chain.recommendedElevatorType).toBe(ELEVATOR_VALUES.chainElevator);
    expect(chain.speedValue).not.toBeCloseTo(1.15, 5);
  });

  it("B. sıcak üründe ısıya dayanımlı bant ve metal kova önerilir; plastik kova kapanır", () => {
    for (const key of ["B_hotBelt", "B_veryHotAuto"] as const) {
      const m = run(key);
      expect(m.chosenBeltType).toBe(ELEVATOR_VALUES.heatBelt);
      expect(m.recommendedBucketMaterial).toBe("Metal kova");
      expect(m.plasticAllowed).toBe(false);
    }
    // Sistem önerisinde sıcak ürün zincirli elevatöre yönlenir.
    expect(run("B_veryHotAuto").recommendedElevatorType).toBe(ELEVATOR_VALUES.chainElevator);
  });

  it("C. aşındırıcı üründe aşınma riski, aşınma dayanımlı zincir ve uyarı devreye girer", () => {
    const m = run("C_abrasive");
    expect(m.productRisk).toBe("Aşınma riski yüksek");
    expect(m.selectedChainMaterial).toBe("Aşınma dayanımlı");
    expect(m.recommendedElevatorType).toBe(ELEVATOR_VALUES.chainElevator);
    expect(m.warnings.some((w) => w.startsWith("Aşındırıcı ürün"))).toBe(true);
  });

  it("D. yapışkan nemli üründe yapışma riski, sürekli boşaltma ve zincirli öneri çalışır", () => {
    const m = run("D_sticky");
    expect(m.productRisk).toBe("Yapışma ve geri dökülme riski yüksek");
    expect(m.discharge).toBe("Sürekli boşaltma");
    expect(m.headType).toBe("Sürekli boşaltmalı kontrollü kafa");
    expect(m.recommendedElevatorType).toBe(ELEVATOR_VALUES.chainElevator);
  });

  it("E. santrifüj boşaltmada santrifüj kafa önerilir; sürekli boşaltmada kontrollü kafa", () => {
    expect(run("E_centrifugal").headType).toBe("Yüksek hızlı santrifüj kafa");
    const continuous = computeElevatorModel({ ...DEFAULT_INPUT, dischargeType: "Sürekli boşaltma" });
    expect(continuous.headType).toBe("Sürekli boşaltmalı kontrollü kafa");
  });

  it("gıda ortamında gıda tipi bant ve EP500; kırılgan üründe kırılma riski; manuel zincir hatvesi", () => {
    const food = run("F_food");
    expect(food.chosenBeltType).toBe(ELEVATOR_VALUES.foodBelt);
    expect(food.beltClassRecommendation).toBe("EP500");
    expect(run("G_fragile").productRisk).toBe("Kırılma riski kontrollü hız gerektirir");
    expect(run("H_chainManualPitch").chainPitch).toBe("125 mm");
  });

  it("varsayılan senaryoda kapasite, kova ve uygunluk değerleri korunur", () => {
    const m = run("default");
    expect(m.designCapacity).toBeCloseTo(19.8, 5);
    expect(Math.round(m.suitability.bucketsPerHour)).toBe(17333);
    expect(m.suitability.statusLabel).toBe("⚠ Sınırda");
    expect(m.speedRange.max).toBeCloseTo(1.9, 5);
    expect(m.selectedBucket.code).toBe("P-200");
    expect(m.recommendedElevatorType).toBe(ELEVATOR_VALUES.beltElevator);
  });
});

describe("elevatör: metin karşılaştırma koruması", () => {
  const dir = path.resolve("app/(tr)/components");
  const optionValues = new Set<string>();
  for (const value of Object.values(DATA)) {
    if (!Array.isArray(value)) continue;
    for (const item of value as unknown[]) {
      if (typeof item === "string") optionValues.add(item);
      else if (item && typeof item === "object" && "label" in item) optionValues.add(String((item as { label: string }).label));
    }
  }
  const utilsSrc = fs.readFileSync(path.join(dir, "elevator-selection-utils.ts"), "utf8");
  // Yardımcı fonksiyonların ürettiği değerler (return / atama) de karşılaştırılabilir.
  const produced = new Set([...utilsSrc.matchAll(/(?:return|=)\s*[^;]*?"([^"]+)"/g)].map((m) => m[1]));

  it("ELEVATOR_VALUES değerlerinin tamamı seçenek listelerinde var", () => {
    for (const value of Object.values(ELEVATOR_VALUES)) expect(optionValues.has(value), value).toBe(true);
  });

  it("bileşen, model ve utils dosyalarında seçenek listesinde olmayan karşılaştırma literal'i yok", () => {
    const unknown: string[] = [];
    for (const file of ["elevator-selection-calculator.tsx", "elevator-selection-model.ts", "elevator-selection-utils.ts"]) {
      const src = fs.readFileSync(path.join(dir, file), "utf8");
      for (const m of src.matchAll(/([\w.]+)\s*(?:===|!==)\s*"([^"]*)"/g)) {
        const [, lhs, lit] = m;
        if (/(^|\.)(tone|statusTone)$/.test(lhs) || lit === "" || /^[%\d]/.test(lit)) continue;
        if (!optionValues.has(lit) && !produced.has(lit)) unknown.push(`${file}: ${lhs} === "${lit}"`);
      }
      for (const m of src.matchAll(/accessories\.includes\("([^"]*)"\)/g)) if (!optionValues.has(m[1])) unknown.push(`${file}: includes("${m[1]}")`);
    }
    expect(unknown).toEqual([]);
  });

  it("bileşenin select varsayılanları seçenek listelerinde var", () => {
    const calc = fs.readFileSync(path.join(dir, "elevator-selection-calculator.tsx"), "utf8");
    const varToList = new Map([...calc.matchAll(/value=\{(\w+)\}[^>]*?options=\{\[\.\.\.([A-Z_]+)\]\}/g)].map((m) => [m[1], m[2]]));
    const bad: string[] = [];
    for (const m of calc.matchAll(/const \[(\w+), set\w+\] = useState\("([^"]*)"\)/g)) {
      const list = varToList.get(m[1]);
      if (!list) continue;
      const values = (DATA as Record<string, unknown>)[list] as readonly string[];
      if (!values.includes(m[2])) bad.push(`${m[1]} = "${m[2]}" (${list})`);
    }
    const accessories = calc.match(/useState<string\[\]>\(\[([^\]]*)\]\)/)?.[1] ?? "";
    for (const a of accessories.matchAll(/"([^"]+)"/g)) if (!DATA.ACCESSORY_OPTIONS.some((o) => o.label === a[1])) bad.push(`aksesuar "${a[1]}"`);
    expect(bad).toEqual([]);
  });
});
