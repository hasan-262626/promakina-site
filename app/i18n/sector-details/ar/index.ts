import type { SectorDetailLocaleTexts } from "../types";
import { arCompostPages } from "./compost";
import { arEnergyPages } from "./energy";
import { arFertilizerPages } from "./fertilizer";
import { arUi } from "./ui";

export const arSectorDetails: SectorDetailLocaleTexts = {
  ui: arUi,
  // Makine ve tesis etiketleri menülerle aynı kaynaktan (sayfa içerikleri) okunur.
  routeLabels: {},
  pages: { ...arFertilizerPages, ...arCompostPages, ...arEnergyPages },
};
