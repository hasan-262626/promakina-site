import type { SectorDetailLocaleTexts } from "../types";
import { enCompostPages } from "./compost";
import { enEnergyPages } from "./energy";
import { enFertilizerPages } from "./fertilizer";
import { enUi } from "./ui";

export const enSectorDetails: SectorDetailLocaleTexts = {
  ui: enUi,
  // Makine ve tesis etiketleri menülerle aynı kaynaktan (sayfa içerikleri) okunur.
  routeLabels: {},
  pages: { ...enFertilizerPages, ...enCompostPages, ...enEnergyPages },
};
