import {
  drumTypeOptions,
  fillRatioReference,
  fuelOptions,
  peripheralSpeedReference,
  slopeReference,
  type DrumCalculatorTool,
  type DrumSelectOption,
} from "./drum-calculator-data";

export type DrumWarningTone = "success" | "warning" | "danger";

export type DrumResultCard = {
  label: string;
  value: string;
  tone?: DrumWarningTone;
};

export type DrumWarning = {
  tone: DrumWarningTone;
  title: string;
  description: string;
};

export type DrumEngineeringRow = {
  input: string;
  value: string;
  impact: string;
  note: string;
};

export type DrumCalculationResult = {
  cards: DrumResultCard[];
  warnings: DrumWarning[];
  commentary: string;
  tableRows: DrumEngineeringRow[];
};

export type DrumFormValues = Record<string, string>;

const DEFAULT_NOTE =
  "Bu hesaplama on tasarim ve kapasite degerlendirmesi icindir. Kesin makine secimi icin urun numunesi, proses sartlari, saha yerlesimi, sicaklik degerleri, hava debisi ve detay muhendislik birlikte degerlendirilmelidir.";

function parseNumber(value: string | undefined) {
  if (!value) return 0;
  const normalized = value.replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);
}

function percentValue(value: number) {
  return `${formatNumber(value, 2)} %`;
}

function fieldValue(values: DrumFormValues, id: string, fallback = "-") {
  return values[id]?.trim() ? values[id] : fallback;
}

function findOptionLabel(options: DrumSelectOption[], value: string | undefined) {
  return options.find((option) => option.value === value)?.label ?? value ?? "-";
}

function slopeToDegree(slopePercent: number) {
  return Math.atan(slopePercent / 100) * (180 / Math.PI);
}

function getRecommendedPeripheralSpeed(drumType: string, processBehavior: string) {
  if (drumType === "kompost") return 0.18;
  if (drumType === "granulasyon" || processBehavior === "granul-buyutme") return 0.72;
  if (drumType === "kaplama" || processBehavior === "kaplama") return 0.42;
  if (drumType === "sogutma") return 0.55;
  return processBehavior === "nazik" ? 0.32 : processBehavior === "yogun" ? 0.68 : 0.48;
}

function getReferenceRange(referenceMap: Record<string, string>, key: string | undefined) {
  return referenceMap[key ?? ""] ?? "Referans aralik detay muhendislikle netlesir.";
}

function getFuelReferenceValue(fuelType: string | undefined) {
  const map: Record<string, number> = {
    dogalgaz: 9.2,
    lng: 13,
    lpg: 12.8,
    motorin: 10,
    "fuel-oil": 11,
    biyogaz: 5.5,
  };

  return map[fuelType ?? ""] ?? 9.2;
}

function makeResult(
  cards: DrumResultCard[],
  warnings: DrumWarning[],
  commentary: string,
  tableRows: DrumEngineeringRow[],
): DrumCalculationResult {
  return {
    cards,
    warnings: warnings.length
      ? warnings
      : [
          {
            tone: "success",
            title: "Uygun aralik",
            description: "Girdileriniz temel on tasarim sinirlari icinde gorunuyor.",
          },
        ],
    commentary: `${commentary} ${DEFAULT_NOTE}`,
    tableRows,
  };
}

export function validateDrumCalculator(
  tool: DrumCalculatorTool,
  values: DrumFormValues,
) {
  const errors: Record<string, string> = {};

  for (const field of tool.fields) {
    const rawValue = values[field.id]?.trim();

    if (!rawValue) {
      if (field.id === "manualRpm" && values.manualRpmMode !== "manual") continue;
      if (field.id === "manualMotorSpeed" && values.motorSpeedPreset !== "manual") continue;
      if (field.id === "manualAirFlow" && values.airFlowMode !== "manual") continue;
      if (field.id === "manualCycloneDiameter" && values.cycloneDiameterMode !== "manual") continue;
      if (field.id === "gearboxOutputRpm") continue;
      if (field.id === "fuelLhv") continue;
      if (field.id === "peripheralSpeed") continue;
      errors[field.id] = `${field.label} alani gereklidir.`;
      continue;
    }

    if (field.type === "number") {
      const value = parseNumber(rawValue);
      if (!Number.isFinite(value)) {
        errors[field.id] = `${field.label} sayisal olmalidir.`;
        continue;
      }
      if (field.min !== undefined && value < field.min) {
        errors[field.id] = `${field.label} ${field.min} degerinden kucuk olamaz.`;
      }
      if (field.max !== undefined && value > field.max) {
        errors[field.id] = `${field.label} ${field.max} degerinden buyuk olamaz.`;
      }
    }
  }

  const inletMoisture = parseNumber(values.inletMoisture);
  const outletMoisture = parseNumber(values.outletMoisture);
  if (values.inletMoisture && values.outletMoisture && outletMoisture > inletMoisture) {
    errors.outletMoisture = "Cikis nemi giris neminden buyuk olamaz.";
  }

  return errors;
}

function calculateCapacity(values: DrumFormValues): DrumCalculationResult {
  const wetTph = parseNumber(values.feedCapacity);
  const wetKgH = wetTph * 1000;
  const inletMoisture = parseNumber(values.inletMoisture) / 100;
  const outletMoisture = parseNumber(values.outletMoisture) / 100;
  const density = parseNumber(values.bulkDensity);
  const drumDiameter = parseNumber(values.drumDiameter);
  const drumLength = parseNumber(values.drumLength);
  const slope = parseNumber(values.drumSlope);
  const rpm = parseNumber(values.drumRpm);
  const fill = parseNumber(values.fillRatio) / 100;

  const dryMatterKgH = wetKgH * (1 - inletMoisture);
  const exitKgH = outletMoisture < 1 ? dryMatterKgH / (1 - outletMoisture) : 0;
  const evaporatedKgH = Math.max(0, wetKgH - exitKgH);
  const drumVolume = Math.PI * ((drumDiameter ** 2) / 4) * drumLength;
  const filledVolume = drumVolume * fill;
  const productMassInDrum = filledVolume * density;
  const throughputKgMin = wetKgH / 60;
  const residenceTime = throughputKgMin > 0 ? productMassInDrum / throughputKgMin : 0;

  const drumType = values.drumType;
  const warnings: DrumWarning[] = [];
  const fillReference = getReferenceRange(fillRatioReference, drumType);

  if (parseNumber(values.outletMoisture) >= parseNumber(values.inletMoisture)) {
    warnings.push({
      tone: "danger",
      title: "Nem girisi kontrol edilmeli",
      description: "Cikis nemi giris neminden buyuk veya esit gorunuyor.",
    });
  }

  if (fill > 0.3 || fill < 0.06) {
    warnings.push({
      tone: fill > 0.3 ? "danger" : "warning",
      title: "Doluluk orani dikkat istiyor",
      description: `Secilen doluluk orani tipik ${fillReference} bandinin disinda.`,
    });
  }

  if (residenceTime < 8) {
    warnings.push({
      tone: "warning",
      title: "Kalis suresi dusuk",
      description: "Kurutma veya proses etkisi icin tambur ici kalis suresi yetersiz olabilir.",
    });
  } else if (residenceTime > 55) {
    warnings.push({
      tone: "warning",
      title: "Kalis suresi yuksek",
      description: "Urun fazla isinabilir veya nominal kapasite gerileyebilir.",
    });
  }

  if (parseNumber(values.inletMoisture) >= 55) {
    warnings.push({
      tone: "danger",
      title: "Yuksek nemli urun",
      description: "Bu nem yukunde on susuzlastirma veya mekanik on kurutma degerlendirilmelidir.",
    });
  }

  const suitability =
    warnings.some((item) => item.tone === "danger")
      ? "Riskli - tekrar kontrol edilmeli"
      : warnings.some((item) => item.tone === "warning")
        ? "Kontrollu uygun"
        : "Uygun aralik";

  return makeResult(
    [
      { label: "Yas urun debisi", value: `${formatNumber(wetKgH)} kg/saat`, tone: "success" },
      { label: "Kuru madde", value: `${formatNumber(dryMatterKgH)} kg/saat` },
      { label: "Buharlastirilacak su", value: `${formatNumber(evaporatedKgH)} kg/saat`, tone: "warning" },
      { label: "Cikis urun debisi", value: `${formatNumber(exitKgH)} kg/saat` },
      { label: "Tambur hacmi", value: `${formatNumber(drumVolume)} m3` },
      { label: "Efektif dolu hacim", value: `${formatNumber(filledVolume)} m3` },
      { label: "Tambur ici urun miktari", value: `${formatNumber(productMassInDrum)} kg` },
      { label: "Yaklasik kalis suresi", value: `${formatNumber(residenceTime)} dakika` },
      { label: "Kapasite uygunlugu", value: suitability, tone: warnings.some((item) => item.tone === "danger") ? "danger" : "success" },
    ],
    warnings,
    `Bu kapasitede buharlastirilacak su miktari ${formatNumber(evaporatedKgH)} kg/saat seviyesinde gorunuyor. Bu nedenle yalniz tambur hacmi degil, fan debisi, gaz hattı ve tambur ici residence time birlikte kritik hale gelir. Secilen %${formatNumber(fill * 100)} doluluk, ${drumTypeOptions.find((item) => item.value === drumType)?.label?.toLocaleLowerCase("tr-TR") ?? "tambur"} icin tavsiye bandiyla birlikte okunmalidir.`,
    [
      {
        input: "Tambur tipi",
        value: findOptionLabel(drumTypeOptions, values.drumType),
        impact: "Doluluk, egim ve kalis suresi yorumunu belirler.",
        note: `Referans doluluk: ${fillReference}`,
      },
      {
        input: "Nem yuku",
        value: `${percentValue(parseNumber(values.inletMoisture))} -> ${percentValue(parseNumber(values.outletMoisture))}`,
        impact: "Buharlastirilacak su miktari ve enerji ihtiyacini belirler.",
        note: "Yuksek giris neminde yardimci ekipmanlar daha kritik hale gelir.",
      },
      {
        input: "Tambur geometri",
        value: `D ${formatNumber(drumDiameter)} m / L ${formatNumber(drumLength)} m`,
        impact: "Hacim ve kalis suresi davranisini belirler.",
        note: `Eğim: %${formatNumber(slope)} | Devir: ${formatNumber(rpm)} rpm`,
      },
      {
        input: "Doluluk ve yogunluk",
        value: `%${formatNumber(fill * 100)} | ${formatNumber(density)} kg/m3`,
        impact: "Tambur icindeki urun envanterini belirler.",
        note: "Asiri doluluk yapiskan urunlerde topaklanma yaratabilir.",
      },
    ],
  );
}

function calculateSpeed(values: DrumFormValues): DrumCalculationResult {
  const drumDiameter = parseNumber(values.drumDiameter);
  const automaticSpeed = getRecommendedPeripheralSpeed(values.drumType, values.processBehavior);
  const selectedSpeed = parseNumber(values.peripheralSpeed) || automaticSpeed;
  const autoRpm = drumDiameter > 0 ? (selectedSpeed * 60) / (Math.PI * drumDiameter) : 0;
  const rpm =
    values.manualRpmMode === "manual" && parseNumber(values.manualRpm) > 0
      ? parseNumber(values.manualRpm)
      : autoRpm;
  const criticalSpeed = drumDiameter > 0 ? 42.3 / Math.sqrt(drumDiameter) : 0;
  const ratio = criticalSpeed > 0 ? (rpm / criticalSpeed) * 100 : 0;
  const warnings: DrumWarning[] = [];

  if (ratio > 40) {
    warnings.push({
      tone: "danger",
      title: "Kritik hiza yakin",
      description: "Secilen devir santrifuj etkisini artirabilir.",
    });
  } else if (ratio > 28) {
    warnings.push({
      tone: "warning",
      title: "Kritik hiz orani yukseliyor",
      description: "Ozellikle granul veya hassas urunlerde urun kirilmasi artabilir.",
    });
  }

  if (rpm < 0.5) {
    warnings.push({
      tone: "warning",
      title: "Devir cok dusuk",
      description: "Urun tambur icinde kayabilir ve yeterli kaldirma-dokme davranisi olusmayabilir.",
    });
  }

  return makeResult(
    [
      { label: "Onerilen cevresel hiz", value: `${formatNumber(selectedSpeed)} m/s`, tone: "success" },
      { label: "Tambur devri", value: `${formatNumber(rpm)} rpm` },
      { label: "Kritik hiz", value: `${formatNumber(criticalSpeed)} rpm` },
      { label: "Kritik hiza oran", value: `%${formatNumber(ratio)}`, tone: ratio > 40 ? "danger" : ratio > 28 ? "warning" : "success" },
      { label: "Proses yorumu", value: ratio > 40 ? "Riskli hiz bandi" : ratio > 28 ? "Kontrollu hiz bandi" : "Uygun hiz bandi" },
    ],
    warnings,
    `Tambur capi ${formatNumber(drumDiameter)} m icin secilen ${formatNumber(selectedSpeed)} m/s cevresel hiz, yaklasik ${formatNumber(rpm)} rpm tambur devrine karsilik geliyor. Kritik hiz orani %${formatNumber(ratio)} seviyesinde oldugu icin urun hareketi, yapisma ve kirilma riski bu bantta birlikte okunmalidir.`,
    [
      {
        input: "Tambur tipi",
        value: findOptionLabel(drumTypeOptions, values.drumType),
        impact: "Referans cevresel hiz ve hedef urun hareketini belirler.",
        note: peripheralSpeedReference.find((item) => item.value === values.drumType)?.reference ?? "Tipik proses bandi kullanildi.",
      },
      {
        input: "Tambur capi",
        value: `${formatNumber(drumDiameter)} m`,
        impact: "Ayni cevresel hizda rpm degerini dogrudan etkiler.",
        note: "Cap buyudukce ayni hiz icin rpm duser.",
      },
      {
        input: "Proses davranisi",
        value: findOptionLabel(
          [
            { value: "nazik", label: "Nazik karistirma" },
            { value: "standart", label: "Standart kaldirma-dokme" },
            { value: "yogun", label: "Yogun karistirma" },
            { value: "granul-buyutme", label: "Granul buyutme" },
            { value: "kaplama", label: "Kaplama" },
          ],
          values.processBehavior,
        ),
        impact: "Hedef cevresel hiz secimini etkiler.",
        note: "Nazik proseslerde daha dusuk hiz tercih edilir.",
      },
      {
        input: "Kritik hiz kontrolu",
        value: `%${formatNumber(ratio)}`,
        impact: "Santrifuj etkisi ve urun ucus davranisini sinirlar.",
        note: "Yuksek oranlarda yapisma veya urun kirilmasi artabilir.",
      },
    ],
  );
}

function calculateSlopeFill(values: DrumFormValues): DrumCalculationResult {
  const drumDiameter = parseNumber(values.drumDiameter);
  const drumLength = parseNumber(values.drumLength);
  const feedCapacity = parseNumber(values.feedCapacity) * 1000;
  const density = parseNumber(values.bulkDensity);
  const residenceTarget = parseNumber(values.targetResidence);
  const slope = parseNumber(values.drumSlope);
  const fill = parseNumber(values.fillRatio) / 100;
  const volume = Math.PI * ((drumDiameter ** 2) / 4) * drumLength;
  const filledVolume = volume * fill;
  const mass = filledVolume * density;
  const throughputKgMin = feedCapacity / 60;
  const residence = throughputKgMin > 0 ? mass / throughputKgMin : 0;
  const degree = slopeToDegree(slope);
  const slopeBand = getReferenceRange(slopeReference, values.drumType);
  const fillBand = getReferenceRange(fillRatioReference, values.drumType);
  const warnings: DrumWarning[] = [];

  if (Math.abs(residence - residenceTarget) > Math.max(6, residenceTarget * 0.35)) {
    warnings.push({
      tone: "warning",
      title: "Hedef kalis suresi ile fark var",
      description: "Secilen egim ve doluluk hedef kalis suresinden anlamli sapma uretiyor.",
    });
  }
  if (values.flowBehavior === "yapiskan" && fill > 0.22) {
    warnings.push({
      tone: "danger",
      title: "Yapişkan urun ve yuksek doluluk",
      description: "Topaklanma ve birikme riski yukselebilir.",
    });
  }
  if (slope < 0.8 || slope > 6) {
    warnings.push({
      tone: slope > 6 ? "danger" : "warning",
      title: "Eğim degeri dikkat istiyor",
      description: "Cok dusuk egim birikmeye, cok yuksek egim yetersiz kalis suresine yol acabilir.",
    });
  }

  return makeResult(
    [
      { label: "Onerilen egim araligi", value: slopeBand, tone: "success" },
      { label: "Onerilen doluluk araligi", value: fillBand, tone: "success" },
      { label: "Tambur hacmi", value: `${formatNumber(volume)} m3` },
      { label: "Dolu hacim", value: `${formatNumber(filledVolume)} m3` },
      { label: "Tambur icindeki urun miktari", value: `${formatNumber(mass)} kg` },
      { label: "Yaklasik kalis suresi", value: `${formatNumber(residence)} dakika`, tone: Math.abs(residence - residenceTarget) > Math.max(6, residenceTarget * 0.35) ? "warning" : "success" },
      { label: "Eğim acisi", value: `${formatNumber(degree)}°` },
    ],
    warnings,
    `Secilen %${formatNumber(slope)} egim (${formatNumber(degree)}°) ve %${formatNumber(fill * 100)} doluluk kombinasyonu, yaklasik ${formatNumber(residence)} dakikalik bir kalis suresi olusturuyor. Bu deger hedef ${formatNumber(residenceTarget)} dakika beklentisiyle birlikte okunmali; lifter tipi ve urun davranisi nihai sonucu belirgin sekilde etkileyebilir.`,
    [
      {
        input: "Tambur tipi",
        value: findOptionLabel(drumTypeOptions, values.drumType),
        impact: "Egim ve doluluk referans bandini belirler.",
        note: `Egim: ${slopeBand} | Doluluk: ${fillBand}`,
      },
      {
        input: "Lifter tipi",
        value: fieldValue(values, "lifterType"),
        impact: "Urun hareketi ve residence time davranisini degistirir.",
        note: "Yogun kanatlar ayni hacimde daha fazla kaldirma-dokme yaratabilir.",
      },
      {
        input: "Hedef kalis suresi",
        value: `${formatNumber(residenceTarget)} dakika`,
        impact: "Geometri ve doluluk kararini yonlendirir.",
        note: "Buyuk sapma varsa egim veya doluluk tekrar okunmalidir.",
      },
      {
        input: "Urun davranisi",
        value: fieldValue(values, "flowBehavior"),
        impact: "Yapiskan ve lifli akislarda doluluk daha hassas hale gelir.",
        note: "Topaklanma riski varsa daha konservatif doluluk tercih edilir.",
      },
    ],
  );
}

function calculateRingDrive(values: DrumFormValues): DrumCalculationResult {
  const emptyWeight = parseNumber(values.emptyWeight);
  const productLoad = parseNumber(values.productLoad);
  const ringCount = Math.max(1, parseNumber(values.ringCount));
  const totalWeight = emptyWeight + productLoad;
  const ringLoad = totalWeight / ringCount;
  const rollerLoad = ringLoad / 2;
  const gearTeeth = parseNumber(values.gearTeeth);
  const pinionTeeth = parseNumber(values.pinionTeeth);
  const gearRatio = pinionTeeth > 0 ? gearTeeth / pinionTeeth : 0;
  const drumRpm = parseNumber(values.drumRpm);
  const pinionRpm = drumRpm * gearRatio;
  const warnings: DrumWarning[] = [];

  if (parseNumber(values.ringWidth) < 120) {
    warnings.push({
      tone: "warning",
      title: "Ring genisligi dar olabilir",
      description: "Temas basinci artabilir; temas gerilmesi detay hesapla teyit edilmelidir.",
    });
  }
  if (parseNumber(values.rollerDiameter) < 250) {
    warnings.push({
      tone: "warning",
      title: "Roller capi kucuk gorunuyor",
      description: "Yatak yuku ve yuzey basinci artis riski vardir.",
    });
  }
  if (values.ringMaterial === "4140") {
    warnings.push({
      tone: "success",
      title: "Agir hizmet malzeme secimi",
      description: "4140 ring malzemesi agir tamburlarda daha emniyetli bir baz saglayabilir.",
    });
  }

  return makeResult(
    [
      { label: "Toplam tambur agirligi", value: `${formatNumber(totalWeight)} kg`, tone: "success" },
      { label: "Ring basina yuk", value: `${formatNumber(ringLoad)} kg` },
      { label: "Roller basina yuk", value: `${formatNumber(rollerLoad)} kg` },
      { label: "Ring / pinyon orani", value: `${formatNumber(gearRatio, 3)} : 1` },
      { label: "Pinyon devri", value: `${formatNumber(pinionRpm)} rpm` },
      { label: "Tahrik yorumu", value: values.driveType === "ring-pinyon" ? "Standart agir hizmet kurgusu" : "Detayli tahrik kontrolu gerekir" },
    ],
    warnings,
    `Toplam yuk yaklasik ${formatNumber(totalWeight)} kg seviyesinde oldugu icin her ring uzerine ${formatNumber(ringLoad)} kg civarinda yuk biniyor. Bu hesap temas gerilmesi veya FEM dogrulamasi yerine gecmez; ancak ring genisligi, roller capi ve pinyon-fener disli kurgusunun teklif oncesi okunmasini hizlandirir.`,
    [
      {
        input: "Toplam agirlik",
        value: `${formatNumber(totalWeight)} kg`,
        impact: "Ring, roller ve yatak yuklerini belirler.",
        note: "Detayli agirlik hesabi imalat cizimleri ile dogrulanmalidir.",
      },
      {
        input: "Ring malzemesi",
        value: fieldValue(values, "ringMaterial"),
        impact: "Asinma ve yuzey dayanimina etkisi vardir.",
        note: "Agir tamburlarda 4140 ve sertlestirme notu ayrica degerlendirilir.",
      },
      {
        input: "Ring geometri",
        value: `${fieldValue(values, "ringInnerDiameter")} / ${fieldValue(values, "ringOuterDiameter")} / ${fieldValue(values, "ringWidth")} mm`,
        impact: "Temas yuzeyi ve basinc dagilimini etkiler.",
        note: "Cok dar genisliklerde temas basinci artar.",
      },
      {
        input: "Disli orani",
        value: `${formatNumber(gearRatio, 3)} : 1`,
        impact: "Pinyon devri ve tahrik zincirini belirler.",
        note: "Tambur devri ile beraber reduktor seciminde kullanilir.",
      },
    ],
  );
}

function calculateGearbox(values: DrumFormValues): DrumCalculationResult {
  const presetMotor = values.motorSpeedPreset === "manual" ? parseNumber(values.manualMotorSpeed) : parseNumber(values.motorSpeedPreset);
  const motorPower = parseNumber(values.motorPower);
  const targetDrumRpm = parseNumber(values.targetDrumRpm);
  const gearTeeth = parseNumber(values.gearTeeth);
  const pinionTeeth = parseNumber(values.pinionTeeth);
  const gearRatio = pinionTeeth > 0 ? gearTeeth / pinionTeeth : 0;
  const requiredPinionRpm = targetDrumRpm * gearRatio;
  const gearboxRatio = requiredPinionRpm > 0 ? presetMotor / requiredPinionRpm : 0;
  const outputTorque = requiredPinionRpm > 0 ? (9550 * motorPower) / requiredPinionRpm : 0;
  const serviceFactor = parseNumber(values.serviceFactor);
  const serviceTorque = outputTorque * serviceFactor;
  const warnings: DrumWarning[] = [];

  if (gearboxRatio > 120) {
    warnings.push({
      tone: "warning",
      title: "Yuksek cevrim orani",
      description: "Bu oranda cok kademeli reduktor veya inverterli cozum gerekebilir.",
    });
  }
  if (serviceFactor < 1.5 && values.workDuration === "24") {
    warnings.push({
      tone: "danger",
      title: "Servis faktoru dusuk gorunuyor",
      description: "24 saat calisan agir tamburlarda daha guvenli servis faktoru tercih edilmelidir.",
    });
  }

  return makeResult(
    [
      { label: "Disli orani", value: `${formatNumber(gearRatio, 3)} : 1`, tone: "success" },
      { label: "Gerekli pinyon devri", value: `${formatNumber(requiredPinionRpm)} rpm` },
      { label: "Gerekli reduktor orani", value: `${formatNumber(gearboxRatio, 3)} : 1` },
      { label: "Cikis torku", value: `${formatNumber(outputTorque)} Nm` },
      { label: "Servis faktorlu tork", value: `${formatNumber(serviceTorque)} Nm`, tone: "warning" },
      { label: "Uygunluk yorumu", value: warnings.some((item) => item.tone === "danger") ? "Tekrar kontrol edilmeli" : "On secim icin uygun" },
    ],
    warnings,
    `Motor devri ${formatNumber(presetMotor)} rpm ve hedef tambur devri ${formatNumber(targetDrumRpm)} rpm icin toplam mekanik zincir yaklasik ${formatNumber(gearboxRatio, 3)}:1 reduktor oranina ihtiyac duyuyor. Servis faktorlu tork ${formatNumber(serviceTorque)} Nm seviyesinde oldugu icin agir hizmet senaryolarinda reduktor sinifi ve inverter stratejisi birlikte okunmalidir.`,
    [
      {
        input: "Motor devri",
        value: `${formatNumber(presetMotor)} rpm`,
        impact: "Toplam reduktor oranini belirler.",
        note: "Dusuk tambur devrinde oran hizla buyur.",
      },
      {
        input: "Disli orani",
        value: `${formatNumber(gearRatio, 3)} : 1`,
        impact: "Pinyon devrini ve reduktor cikisini belirler.",
        note: "Pinyon-fener disli zinciri reduktor hesabindan ayri dusunulmez.",
      },
      {
        input: "Motor gucu",
        value: `${formatNumber(motorPower)} kW`,
        impact: "Cikis torku ve servis torkunu belirler.",
        note: "Kalkis momenti ve surtünme etkisi sahada daha yuksek olabilir.",
      },
      {
        input: "Servis faktoru",
        value: `${formatNumber(serviceFactor, 2)}`,
        impact: "Uzun sureli ve agir yukte guvenlik payini belirler.",
        note: "24 saatlik rejimde konservatif secim tercih edilmelidir.",
      },
    ],
  );
}

function calculateFan(values: DrumFormValues): DrumCalculationResult {
  const evaporationLoad = parseNumber(values.evaporationLoad);
  const autoAirFlow = evaporationLoad * 3200;
  const airFlow = values.airFlowMode === "manual" ? parseNumber(values.manualAirFlow) : autoAirFlow;
  const ductDiameterMm = parseNumber(values.ductDiameter);
  const ductDiameterM = ductDiameterMm / 1000;
  const ductArea = ductDiameterM > 0 ? Math.PI * ((ductDiameterM ** 2) / 4) : 0;
  const flowM3S = airFlow / 3600;
  const airVelocity = ductArea > 0 ? flowM3S / ductArea : 0;
  let pressure = 1200;
  if (values.hasCyclone === "yes") pressure += 900;
  if (values.hasFilter === "yes") pressure += 1600;
  pressure += parseNumber(values.ductLength) * 28;
  pressure += parseNumber(values.elbowCount) * 70;
  pressure += parseNumber(values.stackHeight) * 18;
  if (values.dustLoad === "yuksek") pressure += 500;
  const fanPower = (flowM3S * pressure) / (0.68 * 1000);
  const warnings: DrumWarning[] = [];

  if (airVelocity < 12) {
    warnings.push({
      tone: "warning",
      title: "Kanal hizi dusuk",
      description: "Tozlu hatlarda kanalda birikme riski artabilir.",
    });
  }
  if (airVelocity > 24) {
    warnings.push({
      tone: "danger",
      title: "Kanal hizi yuksek",
      description: "Asinma ve enerji tuketimi gereksiz sekilde artabilir.",
    });
  }
  if (parseNumber(values.gasTemperature) > 220) {
    warnings.push({
      tone: "warning",
      title: "Yuksek sicak gaz",
      description: "Fan malzemesi ve yataklama secimi sicakliga uygun secilmelidir.",
    });
  }

  return makeResult(
    [
      { label: "Onerilen hava debisi", value: `${formatNumber(airFlow)} m3/saat`, tone: "success" },
      { label: "Kanal kesit alani", value: `${formatNumber(ductArea, 3)} m2` },
      { label: "Kanal hava hizi", value: `${formatNumber(airVelocity)} m/s`, tone: airVelocity > 24 ? "danger" : airVelocity < 12 ? "warning" : "success" },
      { label: "Yaklasik basinc kaybi", value: `${formatNumber(pressure)} Pa` },
      { label: "Fan debi onerisi", value: `${formatNumber(airFlow * 1.08)} m3/saat` },
      { label: "Fan motor gucu", value: `${formatNumber(fanPower)} kW` },
    ],
    warnings,
    `Buharlastirma yuku ve hat kayiplari birlikte okundugunda fanin yalniz debi degil, ${formatNumber(pressure)} Pa seviyesinde toplam statik basinci da tasimasi gerekiyor. Secilen kanal capinda ${formatNumber(airVelocity)} m/s hava hizi olusuyor; bu deger toz kontrolu, asinma ve enerji tuketimi arasindaki dengeyi belirler.`,
    [
      {
        input: "Hava debisi",
        value: `${formatNumber(airFlow)} m3/saat`,
        impact: "Gaz tasima kapasitesini ve fan govdesi secimini belirler.",
        note: "Otomatik deger buharlastirma yukune gore turetildi.",
      },
      {
        input: "Kanal capi",
        value: `${formatNumber(ductDiameterMm)} mm`,
        impact: "Kanal hizi ve basinç kaybi uzerinde dogrudan etkilidir.",
        note: "Dusuk hiz toz birikimine, yuksek hiz asinmaya yol acar.",
      },
      {
        input: "Hat kayiplari",
        value: `${fieldValue(values, "ductLength")} m kanal | ${fieldValue(values, "elbowCount")} dirsek`,
        impact: "Toplam basinç gereksinimini artirir.",
        note: "Siklon ve filtre ilaveleri basinç ihtiyacini hizla yukseltebilir.",
      },
      {
        input: "Sicaklik ve toz",
        value: `${fieldValue(values, "gasTemperature")} °C | ${fieldValue(values, "dustLoad")}`,
        impact: "Fan malzemesi ve yataklama secimini belirler.",
        note: "Sicak gaz fanlarinda malzeme secimi ayrica dogrulanmalidir.",
      },
    ],
  );
}

function calculateCyclone(values: DrumFormValues): DrumCalculationResult {
  const airFlow = parseNumber(values.airFlow);
  const cycloneCount = Math.max(1, parseNumber(values.cycloneCount));
  const flowPerCyclone = airFlow / cycloneCount;
  const inletVelocity = parseNumber(values.inletVelocity);
  const qM3S = flowPerCyclone / 3600;
  const area = inletVelocity > 0 ? qM3S / inletVelocity : 0;
  const autoDiameterM = Math.sqrt((4 * area) / Math.PI);
  const diameterM =
    values.cycloneDiameterMode === "manual" && parseNumber(values.manualCycloneDiameter) > 0
      ? parseNumber(values.manualCycloneDiameter) / 1000
      : autoDiameterM;
  const warnings: DrumWarning[] = [];

  if (cycloneCount === 1 && airFlow > 60000) {
    warnings.push({
      tone: "warning",
      title: "Tek siklon buyuk cikabilir",
      description: "Bu debide paralel siklon kurgusu daha dengeli olabilir.",
    });
  }
  if (values.abrasiveness === "yuksek") {
    warnings.push({
      tone: "warning",
      title: "Asindirici toz",
      description: "Kalın sac, asınma plakasi veya degisebilir astar düşünülmelidir.",
    });
  }
  if (values.dustType === "organik" || values.dustType === "kompost") {
    warnings.push({
      tone: "warning",
      title: "Ince organik toz",
      description: "Siklon sonrasi jet pulse filtre ihtiyaci devam edebilir.",
    });
  }

  return makeResult(
    [
      { label: "Siklon basina debi", value: `${formatNumber(flowPerCyclone)} m3/saat`, tone: "success" },
      { label: "Giris kesit alani", value: `${formatNumber(area, 3)} m2` },
      { label: "Yaklasik siklon capi", value: `${formatNumber(diameterM * 1000)} mm` },
      { label: "Giris hizi", value: `${formatNumber(inletVelocity)} m/s` },
      { label: "Konfigürasyon yorumu", value: cycloneCount > 1 ? "Paralel siklon yapisi" : "Tek siklon yapisi" },
    ],
    warnings,
    `Toplam ${formatNumber(airFlow)} m3/saat debi, ${cycloneCount} adet siklona bolundugunde her bir siklon icin ${formatNumber(flowPerCyclone)} m3/saat debi olusuyor. Bu debi ve ${formatNumber(inletVelocity)} m/s giris hiziyle yaklasik ${formatNumber(diameterM * 1000)} mm capinda bir siklon on secimi ortaya cikiyor.`,
    [
      {
        input: "Toplam hava debisi",
        value: `${formatNumber(airFlow)} m3/saat`,
        impact: "Giris kesiti ve govde capini belirler.",
        note: "Cok yuksek debilerde paralel siklon daha dogru olabilir.",
      },
      {
        input: "Siklon sayisi",
        value: `${formatNumber(cycloneCount)} adet`,
        impact: "Her govdeye dusen debiyi dusurur veya buyutur.",
        note: "Tek siklon buyuk cikarsa iki veya dortlu kurgu tercih edilebilir.",
      },
      {
        input: "Toz tipi",
        value: findOptionLabel(
          [
            { value: "mineral", label: "Mineral toz" },
            { value: "gubre", label: "Gubre tozu" },
            { value: "organik", label: "Organik toz" },
            { value: "kompost", label: "Kompost tozu" },
            { value: "kul-komur", label: "Kul / komur tozu" },
            { value: "ozel", label: "Ozel" },
          ],
          values.dustType,
        ),
        impact: "Asinma ve ayirma verimi yorumunu etkiler.",
        note: "Ince tozlarda filtre ihtiyaci devam edebilir.",
      },
      {
        input: "Asindiricilik",
        value: fieldValue(values, "abrasiveness"),
        impact: "Govde ve giris astari secimini etkiler.",
        note: "Yuksek asindiricilikte asınma plakasi notu mutlaka dusulmelidir.",
      },
    ],
  );
}

function calculateBurner(values: DrumFormValues): DrumCalculationResult {
  const wetTph = parseNumber(values.feedCapacity);
  const wetKgH = wetTph * 1000;
  const inletMoisture = parseNumber(values.inletMoisture) / 100;
  const outletMoisture = parseNumber(values.outletMoisture) / 100;
  const dryMatterKgH = wetKgH * (1 - inletMoisture);
  const exitKgH = outletMoisture < 1 ? dryMatterKgH / (1 - outletMoisture) : 0;
  const evaporatedKgH = Math.max(0, wetKgH - exitKgH);
  const evapEnergyKw = (evaporatedKgH * 2257) / 3600;
  const productHeatKw =
    ((wetKgH * 1.05 * Math.max(0, parseNumber(values.targetProductTemp) - parseNumber(values.inletProductTemp))) /
      3600);
  const theoreticalKw = evapEnergyKw + productHeatKw;
  const efficiency = Math.max(0.01, parseNumber(values.systemEfficiency) / 100);
  const safeFactor = 1 + parseNumber(values.safetyMargin) / 100;
  const requiredKw = theoreticalKw / efficiency;
  const safeKw = requiredKw * safeFactor;
  const lhv = parseNumber(values.fuelLhv) || getFuelReferenceValue(values.fuelType);
  const fuelConsumption = lhv > 0 ? safeKw / lhv : 0;
  const warnings: DrumWarning[] = [];

  if (values.heatSensitive === "yes" && parseNumber(values.dryingAirTemp) > 220) {
    warnings.push({
      tone: "danger",
      title: "Isiya hassas urun",
      description: "Direkt alevli veya yuksek hava sicaklikli kurgu urunde bozulma riski yaratabilir.",
    });
  }
  if (parseNumber(values.inletMoisture) >= 60) {
    warnings.push({
      tone: "warning",
      title: "Cok yuksek nem yuku",
      description: "Yalniz brulor degil, on susuzlastirma veya mekanik on kurutma da degerlendirilmelidir.",
    });
  }
  if (values.heatingMode === "direct" && values.heatSensitive === "yes") {
    warnings.push({
      tone: "warning",
      title: "Direkt isitma secimi",
      description: "Urun hassasiyetine gore dolayli isitma daha guvenli olabilir.",
    });
  }

  return makeResult(
    [
      { label: "Buharlastirilacak su", value: `${formatNumber(evaporatedKgH)} kg/saat`, tone: "success" },
      { label: "Buharlasma enerji ihtiyaci", value: `${formatNumber(evapEnergyKw)} kW` },
      { label: "Urun isitma enerjisi", value: `${formatNumber(productHeatKw)} kW` },
      { label: "Toplam teorik enerji", value: `${formatNumber(theoreticalKw)} kW` },
      { label: "Verim dahil brulor gucu", value: `${formatNumber(requiredKw)} kW`, tone: "warning" },
      { label: "Emniyet payli guc", value: `${formatNumber(safeKw)} kW`, tone: warnings.some((item) => item.tone === "danger") ? "danger" : "success" },
      { label: "Yaklasik yakit tuketimi", value: `${formatNumber(fuelConsumption)} birim/saat` },
    ],
    warnings,
    `Bu senaryoda saatte ${formatNumber(evaporatedKgH)} kg su buharlastirilmasi gerekiyor. Verim ve emniyet payi dahil edildiginde brulor tarafinda yaklasik ${formatNumber(safeKw)} kW kapasite sinifi okunuyor. Ancak bu sonuc yalniz brulor secimi icin degil, fan debisi, tambur hacmi ve egzoz hatti ile birlikte yorumlanmalidir.`,
    [
      {
        input: "Nem yukü",
        value: `${percentValue(parseNumber(values.inletMoisture))} -> ${percentValue(parseNumber(values.outletMoisture))}`,
        impact: "Buharlastirilacak su miktarini belirler.",
        note: "Nem farki buyudukce brulor gucu hizla artar.",
      },
      {
        input: "Yakit tipi",
        value: findOptionLabel(fuelOptions, values.fuelType),
        impact: "Tuketim hesabini ve brulor kontrol mantigini etkiler.",
        note: `Referans alt isil deger: ${formatNumber(lhv)} kWh/birim`,
      },
      {
        input: "Sistem verimi",
        value: percentValue(parseNumber(values.systemEfficiency)),
        impact: "Teorik gucun sahadaki gercek ihtiyaca cevrilmesini saglar.",
        note: "Dusuk verimde gerekli brulor kapasitesi ciddi sekilde buyur.",
      },
      {
        input: "Urun hassasiyeti ve isitma tipi",
        value: `${fieldValue(values, "heatSensitive")} | ${fieldValue(values, "heatingMode")}`,
        impact: "Maksimum hava sicakligi ve alev temas kararlarini etkiler.",
        note: "Hassas urunlerde direkt alev dikkatle degerlendirilmelidir.",
      },
    ],
  );
}

export function calculateDrumTool(
  slug: string,
  values: DrumFormValues,
): DrumCalculationResult {
  switch (slug) {
    case "tambur-kapasite-hesabi":
      return calculateCapacity(values);
    case "tambur-devir-hesabi":
      return calculateSpeed(values);
    case "tambur-egim-doluluk-hesabi":
      return calculateSlopeFill(values);
    case "tambur-ring-tahrik-hesabi":
      return calculateRingDrive(values);
    case "tambur-reduktor-hesabi":
      return calculateGearbox(values);
    case "tambur-fan-secimi":
      return calculateFan(values);
    case "tambur-siklon-secimi":
      return calculateCyclone(values);
    case "tambur-brulor-secimi":
      return calculateBurner(values);
    default:
      return makeResult([], [], DEFAULT_NOTE, []);
  }
}
