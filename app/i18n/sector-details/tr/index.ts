import { trDrumChrome } from "../../content/drum-pages/chrome";
import type { SectorDetailLocaleTexts } from "../types";
import { trCompostPages } from "./compost";
import { trEnergyPages } from "./energy";
import { trFertilizerPages } from "./fertilizer";
import { trUi } from "./ui";

export const trSectorDetails: SectorDetailLocaleTexts = {
  ui: trUi,
  routeLabels: {
    ...trDrumChrome.routeLabels,
    compostPlantSolution: "Kompost Tesisi",
    animalWasteCompostPlant: "Hayvansal Atık Kompost Tesisi",
    agriculturalWasteCompostPlant: "Bitkisel ve Tarımsal Atık Kompost Tesisi",
    organicWastePlant: "Organik Atık İşleme Tesisi",
  },
  pages: { ...trFertilizerPages, ...trCompostPages, ...trEnergyPages },
};
