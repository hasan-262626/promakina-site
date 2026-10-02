import type { RouteKey, SectorDetailKey } from "../routes";
import type { SectorDetailDefinition, SectorDetailParent } from "./types";

/**
 * 21 sektör alt çözüm sayfasının dilden bağımsız tanımı.
 * Görseller, makine kartlarının sırası ve form profili dört dilde aynıdır.
 */
export const sectorDetailDefinitions: SectorDetailDefinition[] = [
  {
    key: "sectorLiquidOrganomineral",
    parent: "fertilizer",
    trSlug: "sivi-organomineral",
    images: ["/images/sıvı/sivi21.jpg", "/images/sıvı/sivi22.jpg"],
    machines: ["dissolutionTank", "agitatedReactor", "wetScreen", "storageTank", "liquidFilling", "bottleLabeling"],
    related: [],
    form: "liquid",
  },
  {
    key: "sectorLiquidNpk",
    parent: "fertilizer",
    trSlug: "sivi-npk",
    images: ["/images/sıvı/sivi11.webp", "/images/sıvı/sivi12.jpg"],
    machines: ["dissolutionTank", "agitatedReactor", "coolingTank", "storageTank", "liquidFilling", "bottleLabeling"],
    related: [],
    form: "liquid",
  },
  {
    key: "sectorLiquidAminoAcid",
    parent: "fertilizer",
    trSlug: "sivi-amino-asit",
    images: ["/images/sıvı/sivi13.webp", "/images/sıvı/sivi14.png"],
    machines: ["agitatedReactor", "pressureReactor", "coolingTank", "storageTank", "liquidFilling", "bottleLabeling"],
    related: [],
    form: "liquid",
  },
  {
    key: "sectorOrganicLiquid",
    parent: "fertilizer",
    trSlug: "organik-sivi-gubre",
    images: ["/images/sıvı/sivi8.jpg", "/images/sıvı/sivi1.jpg"],
    machines: ["wetScreen", "dissolutionTank", "agitatedReactor", "storageTank", "liquidFilling", "bottleLabeling"],
    related: [],
    form: "liquid",
  },
  {
    key: "sectorOrganicBiostimulant",
    parent: "fertilizer",
    trSlug: "organik-biyostimulan",
    images: ["/images/sıvı/sivi6.jpg", "/images/sıvı/sivi5.webp"],
    machines: ["microDosing", "dissolutionTank", "agitatedReactor", "storageTank", "liquidFilling", "bottleLabeling"],
    related: [],
    form: "liquid",
  },
  {
    key: "sectorGranularOrganomineral",
    parent: "fertilizer",
    trSlug: "granul-organomineral",
    images: ["/images/tambur granulator/tamgranulator1.png", "/images/tambur kurutma/tamkurutma1.jpg"],
    machines: ["hammerCrusher", "macroDosing", "granulatorDrum", "rotaryDryer", "coolingDrum", "vibratingScreen"],
    related: [],
    form: "granule",
  },
  {
    key: "sectorGranularNpk",
    parent: "fertilizer",
    trSlug: "granul-npk",
    images: ["/images/tambur granulator/tamgranulator2.png", "/images/tambur sogutma/tamsogutma1.png"],
    machines: ["dosingBeltScale", "granulatorDrum", "rotaryDryer", "coolingDrum", "vibratingScreen", "coatingDrum"],
    related: [],
    form: "granule",
  },
  {
    key: "sectorGranularCompost",
    parent: "fertilizer",
    trSlug: "granul-kompost-tesisleri",
    images: ["/images/tambur biokompost/biokom1.png", "/images/tambur kurutma/tamkurutma4.jpg"],
    machines: ["trommelScreen", "hammerCrusher", "granulatorDrum", "rotaryDryer", "coolingDrum", "vibratingScreen"],
    related: ["compostPlantSolution"],
    form: "granule",
  },
  {
    key: "sectorPowderOrganomineral",
    parent: "fertilizer",
    trSlug: "toz-organomineral",
    images: ["/images/silo/silo1.jpg", "/images/paketleme/paket1.jpg"],
    machines: ["hammerCrusher", "macroDosing", "mixingDrum", "vibratingScreen", "pulseJetFilter", "openMouthBagging"],
    related: [],
    form: "powder",
  },
  {
    key: "sectorPowderNpk",
    parent: "fertilizer",
    trSlug: "toz-npk",
    images: ["/images/bunker/bunker1.jpg", "/images/paketleme/paket1.jpg"],
    machines: ["microDosing", "macroDosing", "mixingDrum", "vibratingScreen", "pulseJetFilter", "bigBagFilling"],
    related: [],
    form: "powder",
  },
  {
    key: "sectorHouseholdCompost",
    parent: "compost",
    trSlug: "evsel-atiklardan-kompost-tesisi",
    images: ["/images/sektorler/kompost/evselkom1.png", "/images/sektorler/kompost/evselkom2.png"],
    machines: ["shredderSystems", "trommelScreen", "beltConveyor", "compostDrum", "wetScrubber", "bigBagFilling"],
    related: ["organicWastePlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorAnimalCompost",
    parent: "compost",
    trSlug: "hayvansal-atiklardan-kompost-tesisi",
    images: ["/images/sektorler/kompost/haykom1.png", "/images/sektorler/kompost/haykom2.png"],
    machines: ["bunkersHoppers", "screwConveyor", "mixingDrum", "compostDrum", "trommelScreen", "rotaryDryer"],
    related: ["animalWasteCompostPlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorAgriculturalCompost",
    parent: "compost",
    trSlug: "tarimsal-atiklardan-kompost-tesisi",
    images: ["/images/sektorler/kompost/tarkom1.png", "/images/sektorler/kompost/tarkom2.png"],
    machines: ["shredderSystems", "hammerCrusher", "beltConveyor", "compostDrum", "trommelScreen", "openMouthBagging"],
    related: ["agriculturalWasteCompostPlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorSlaughterhouseCompost",
    parent: "compost",
    trSlug: "mezbaha-atiklarindan-kompost-tesisi",
    images: ["/images/sektorler/kompost/haykom3.png", "/images/kompost/kompost7.jpg"],
    machines: ["shredderSystems", "screwConveyor", "sterilizationDrum", "compostDrum", "wetScrubber", "trommelScreen"],
    related: ["organicWastePlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorFoodCompost",
    parent: "compost",
    trSlug: "gida-atiklarindan-kompost-tesisi",
    images: ["/images/sektorler/kompost/gidkom1.png", "/images/sektorler/kompost/gidkom4.png"],
    machines: ["shredderSystems", "dewateringScreen", "screwConveyor", "mixingDrum", "compostDrum", "trommelScreen"],
    related: ["organicWastePlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorParkGardenCompost",
    parent: "compost",
    trSlug: "park-ve-bahce-atiklarindan-kompost-tesisi",
    images: ["/images/sektorler/kompost/parkom1.png", "/images/sektorler/kompost/parkom3.png"],
    machines: ["shredderSystems", "hammerCrusher", "trommelScreen", "compostDrum", "beltConveyor", "bigBagFilling"],
    related: ["agriculturalWasteCompostPlant", "compostPlantSolution"],
    form: "compost",
  },
  {
    key: "sectorAgriculturalBiogas",
    parent: "energy",
    trSlug: "tarimsal-atik-biyogaz-tesisleri",
    images: ["/images/sektorler/biyogaz/tarbio1.png", "/images/sektorler/biyogaz/tarbio2.png"],
    machines: ["bunkersHoppers", "hammerCrusher", "screwConveyor", "beltConveyor", "dewateringScreen", "rotaryDryer"],
    related: [],
    form: "biogas",
  },
  {
    key: "sectorAnimalBiogas",
    parent: "energy",
    trSlug: "hayvansal-atik-biyogaz-tesisleri",
    images: ["/images/sektorler/biyogaz/haybio2.png", "/images/sektorler/biyogaz/haybio3.png"],
    machines: ["bunkersHoppers", "screwConveyor", "dewateringScreen", "storageTank", "rotaryDryer", "compostDrum"],
    related: ["compostPlantSolution"],
    form: "biogas",
  },
  {
    key: "sectorFoodBiogas",
    parent: "energy",
    trSlug: "gida-atiklarindan-biyogaz-tesisleri",
    images: ["/images/sektorler/biyogaz/gidbio1.png", "/images/sektorler/biyogaz/gidbio2.png"],
    machines: ["shredderSystems", "wetScreen", "storageTank", "screwConveyor", "dewateringScreen", "wetScrubber"],
    related: ["organicWastePlant"],
    form: "biogas",
  },
  {
    key: "sectorBiomassEnergy",
    parent: "energy",
    trSlug: "biyokutle-enerji-tesisleri",
    images: ["/images/sektorler/biyogaz/biokutle1.png", "/images/sektorler/biyogaz/biokutle2.png"],
    machines: ["shredderSystems", "hammerCrusher", "trommelScreen", "rotaryDryer", "chainConveyor", "siloSystems"],
    related: [],
    form: "biomass",
  },
  {
    key: "sectorBiomethane",
    parent: "energy",
    trSlug: "biyometan-gaz-aritma-cozumleri",
    images: ["/images/sektorler/biyogaz/bioaritma1.png", "/images/sektorler/biyogaz/bioaritma2.png"],
    machines: ["wetScrubber", "dissolutionTank", "storageTank"],
    related: [],
    form: "biomethane",
  },
];

export const sectorDetailKeys = sectorDetailDefinitions.map((item) => item.key);

const byKey = new Map(sectorDetailDefinitions.map((item) => [item.key, item]));

export function isSectorDetailKey(key: RouteKey): key is SectorDetailKey {
  return byKey.has(key as SectorDetailKey);
}

export function getSectorDetailDefinition(key: SectorDetailKey): SectorDetailDefinition {
  const definition = byKey.get(key);
  if (!definition) throw new Error(`Sektör detay tanımı yok: ${key}`);
  return definition;
}

/** TR ana sektör slug'ı → ana sektör anahtarı. */
export const trParentSlugs: Record<SectorDetailParent, string> = {
  fertilizer: "gubre-ve-granulasyon-tesisleri",
  compost: "kompost-ve-organik-atik-tesisleri",
  energy: "enerji-ve-biyogaz-sistemleri",
};

/** Ana sektörün çok dilli route karşılığı; enerji ve biyogaz için yabancı dil sayfası yoktur. */
export const parentRouteKeys: Record<SectorDetailParent, RouteKey | null> = {
  fertilizer: "fertilizerPlants",
  compost: "compostPlants",
  energy: null,
};

export function findSectorDetailByTrSlugs(sectorSlug: string, subSlug: string) {
  return sectorDetailDefinitions.find(
    (item) => trParentSlugs[item.parent] === sectorSlug && item.trSlug === subSlug,
  );
}

export function siblingsOf(parent: SectorDetailParent) {
  return sectorDetailDefinitions.filter((item) => item.parent === parent);
}
