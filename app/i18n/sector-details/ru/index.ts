import type { SectorDetailLocaleTexts } from "../types";
import { ruCompostPages } from "./compost";
import { ruEnergyPages } from "./energy";
import { ruFertilizerPages } from "./fertilizer";
import { ruUi } from "./ui";

export const ruSectorDetails: SectorDetailLocaleTexts = {
  ui: ruUi,
  // Makine ve tesis etiketleri menülerle aynı kaynaktan (sayfa içerikleri) okunur.
  routeLabels: {},
  pages: { ...ruFertilizerPages, ...ruCompostPages, ...ruEnergyPages },
};
