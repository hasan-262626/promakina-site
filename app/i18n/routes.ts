import { absoluteUrl, isIntlLocale, type IntlLocale, type Locale } from "./config";

/**
 * Merkezi route haritası.
 * Her anahtar, sayfanın dört dildeki mutlak path karşılığını tutar.
 * hreflang, canonical, dil seçici, sitemap ve iç bağlantılar bu haritadan üretilir.
 */
export type RouteKey =
  | "home"
  | "about"
  | "services"
  | "machines"
  | "plantSolutions"
  | "compostPlantSolution"
  | "animalWasteCompostPlant"
  | "agriculturalWasteCompostPlant"
  | "organicWastePlant"
  | "sludgeDryingPlantSolution"
  | "sludgeToCompostPlant"
  | "rdfPlantSolution"
  | "drumSystems"
  | "rotaryDryer"
  | "granulatorDrum"
  | "coolingDrum"
  | "coatingDrum"
  | "compostDrum"
  | "mixingDrum"
  | "sterilizationDrum"
  | "customDrum"
  | "crushers"
  | "hammerCrusher"
  | "jawCrusher"
  | "vsiCrusher"
  | "chainCrusher"
  | "shredderSystems"
  | "primaryImpactCrusher"
  | "secondaryImpactCrusher"
  | "conveying"
  | "beltConveyor"
  | "screwConveyor"
  | "chainConveyor"
  | "bucketElevator"
  | "tripperConveyor"
  | "beltBucketElevator"
  | "dosingSystems"
  | "dosingBeltScale"
  | "microDosing"
  | "macroDosing"
  | "reactorsTanks"
  | "coolingTank"
  | "agitatedReactor"
  | "pressureReactor"
  | "dissolutionTank"
  | "storageTank"
  | "screeningSystems"
  | "vibratingScreen"
  | "trommelScreen"
  | "dewateringScreen"
  | "wetScreen"
  | "dustCollection"
  | "cyclones"
  | "pulseJetFilter"
  | "wetScrubber"
  | "packagingSystems"
  | "openMouthBagging"
  | "bigBagFilling"
  | "palletizingLines"
  | "liquidFilling"
  | "bottleLabeling"
  | "storageSystems"
  | "bunkersHoppers"
  | "siloSystems"
  | "teremiHopper"
  | "auxiliaryFlow"
  | "loadingBellows"
  | "distributor"
  | "flapDiverters"
  | "slideGates"
  | "rotaryAirlock"
  | "blower"
  | "sectors"
  | "fertilizerPlants"
  | "compostPlants"
  | "mining"
  | "sludgeDrying"
  | "chemicalProcess"
  | "recycling"
  | "contact";

type RoutePaths = Readonly<Record<Locale, string>>;

export const routeMap: Readonly<Record<RouteKey, RoutePaths>> = {
  home: {
    tr: "/",
    en: "/en",
    ru: "/ru",
    ar: "/ar",
  },
  about: {
    tr: "/hakkimizda",
    en: "/en/about-us",
    ru: "/ru/o-kompanii",
    ar: "/ar/about-us",
  },
  services: {
    tr: "/hizmetler",
    en: "/en/services",
    ru: "/ru/uslugi",
    ar: "/ar/services",
  },
  machines: {
    tr: "/makinalar-ekipman",
    en: "/en/machines-equipment",
    ru: "/ru/oborudovanie",
    ar: "/ar/machines-equipment",
  },
  plantSolutions: {
    tr: "/tesisler",
    en: "/en/plant-solutions",
    ru: "/ru/zavodskie-resheniya",
    ar: "/ar/plant-solutions",
  },
  compostPlantSolution: {
    tr: "/tesisler/kompost-tesisi",
    en: "/en/plant-solutions/compost-plant",
    ru: "/ru/zavodskie-resheniya/kompostnyy-zavod",
    ar: "/ar/plant-solutions/compost-plant",
  },
  animalWasteCompostPlant: {
    tr: "/tesisler/hayvansal-atik-kompost-tesisi",
    en: "/en/plant-solutions/animal-waste-compost-plant",
    ru: "/ru/zavodskie-resheniya/kompostirovanie-zhivotnykh-otkhodov",
    ar: "/ar/plant-solutions/animal-waste-compost-plant",
  },
  agriculturalWasteCompostPlant: {
    tr: "/tesisler/bitkisel-tarimsal-atik-kompost-tesisi",
    en: "/en/plant-solutions/agricultural-waste-compost-plant",
    ru: "/ru/zavodskie-resheniya/kompostirovanie-selskokhozyaystvennykh-otkhodov",
    ar: "/ar/plant-solutions/agricultural-waste-compost-plant",
  },
  organicWastePlant: {
    tr: "/tesisler/organik-atik-isleme-tesisi",
    en: "/en/plant-solutions/organic-waste-processing-plant",
    ru: "/ru/zavodskie-resheniya/zavod-pererabotki-organicheskikh-otkhodov",
    ar: "/ar/plant-solutions/organic-waste-processing-plant",
  },
  sludgeDryingPlantSolution: {
    tr: "/tesisler/atik-su-camuru-kurutma-tesisi",
    en: "/en/plant-solutions/sludge-drying-plant",
    ru: "/ru/zavodskie-resheniya/zavod-sushki-osadka",
    ar: "/ar/plant-solutions/sludge-drying-plant",
  },
  sludgeToCompostPlant: {
    tr: "/tesisler/atik-su-camurundan-kompost-tesisi",
    en: "/en/plant-solutions/sludge-to-compost-plant",
    ru: "/ru/zavodskie-resheniya/kompost-iz-osadka",
    ar: "/ar/plant-solutions/sludge-to-compost-plant",
  },
  rdfPlantSolution: {
    tr: "/tesisler/aty-rdf-hazirlama-tesisi",
    en: "/en/plant-solutions/rdf-preparation-plant",
    ru: "/ru/zavodskie-resheniya/liniya-podgotovki-rdf",
    ar: "/ar/plant-solutions/rdf-preparation-plant",
  },
  drumSystems: {
    tr: "/makinalar-ekipman/tambur-sistemleri",
    en: "/en/machines-equipment/drum-systems",
    ru: "/ru/oborudovanie/barabannye-sistemy",
    ar: "/ar/machines-equipment/drum-systems",
  },
  rotaryDryer: {
    tr: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
    en: "/en/machines-equipment/drum-systems/rotary-dryer",
    ru: "/ru/oborudovanie/barabannye-sistemy/sushilnyy-baraban",
    ar: "/ar/machines-equipment/drum-systems/rotary-dryer",
  },
  granulatorDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
    en: "/en/machines-equipment/drum-systems/rotary-drum-granulator",
    ru: "/ru/oborudovanie/barabannye-sistemy/baraban-granulyator",
    ar: "/ar/machines-equipment/drum-systems/rotary-drum-granulator",
  },
  coolingDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
    en: "/en/machines-equipment/drum-systems/rotary-cooler",
    ru: "/ru/oborudovanie/barabannye-sistemy/okhladitelnyy-baraban",
    ar: "/ar/machines-equipment/drum-systems/rotary-cooler",
  },
  coatingDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
    en: "/en/machines-equipment/drum-systems/coating-drum",
    ru: "/ru/oborudovanie/barabannye-sistemy/baraban-dlya-pokrytiya",
    ar: "/ar/machines-equipment/drum-systems/coating-drum",
  },
  compostDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
    en: "/en/machines-equipment/drum-systems/compost-drum",
    ru: "/ru/oborudovanie/barabannye-sistemy/kompostnyy-baraban",
    ar: "/ar/machines-equipment/drum-systems/compost-drum",
  },
  mixingDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/karistirma-tamburu",
    en: "/en/machines-equipment/drum-systems/mixing-drum",
    ru: "/ru/oborudovanie/barabannye-sistemy/smesitelnyy-baraban",
    ar: "/ar/machines-equipment/drum-systems/mixing-drum",
  },
  sterilizationDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/sterilizasyon-ve-stabilizasyon-tamburu",
    en: "/en/machines-equipment/drum-systems/sterilization-stabilization-drum",
    ru: "/ru/oborudovanie/barabannye-sistemy/baraban-sterilizatsii-i-stabilizatsii",
    ar: "/ar/machines-equipment/drum-systems/sterilization-stabilization-drum",
  },
  customDrum: {
    tr: "/makinalar-ekipman/tambur-sistemleri/ozel-tambur",
    en: "/en/machines-equipment/drum-systems/custom-drum",
    ru: "/ru/oborudovanie/barabannye-sistemy/spetsialnyy-baraban",
    ar: "/ar/machines-equipment/drum-systems/custom-drum",
  },
  crushers: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    en: "/en/machines-equipment/crushers-shredders",
    ru: "/ru/oborudovanie/drobilki-i-shredery",
    ar: "/ar/machines-equipment/crushers-shredders",
  },
  hammerCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/hammer-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/molotkovaya-drobilka",
    ar: "/ar/machines-equipment/crushers-shredders/hammer-crusher",
  },
  jawCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/jaw-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/shchekovaya-drobilka",
    ar: "/ar/machines-equipment/crushers-shredders/jaw-crusher",
  },
  vsiCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/vertical-shaft-impact-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/tsentrobezhno-udarnaya-drobilka",
    ar: "/ar/machines-equipment/crushers-shredders/vertical-shaft-impact-crusher",
  },
  chainCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/chain-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/tsepnaya-drobilka",
    ar: "/ar/machines-equipment/crushers-shredders/chain-crusher",
  },
  shredderSystems: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
    en: "/en/machines-equipment/crushers-shredders/shredder-systems",
    ru: "/ru/oborudovanie/drobilki-i-shredery/promyshlennye-shredery",
    ar: "/ar/machines-equipment/crushers-shredders/shredder-systems",
  },
  primaryImpactCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/primary-impact-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/rotornaya-drobilka-pervichnogo-drobleniya",
    ar: "/ar/machines-equipment/crushers-shredders/primary-impact-crusher",
  },
  secondaryImpactCrusher: {
    tr: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
    en: "/en/machines-equipment/crushers-shredders/secondary-impact-crusher",
    ru: "/ru/oborudovanie/drobilki-i-shredery/rotornaya-drobilka-vtorichnogo-drobleniya",
    ar: "/ar/machines-equipment/crushers-shredders/secondary-impact-crusher",
  },
  conveying: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari",
    en: "/en/machines-equipment/conveying-systems",
    ru: "/ru/oborudovanie/transportnye-sistemy",
    ar: "/ar/machines-equipment/conveying-systems",
  },
  beltConveyor: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
    en: "/en/machines-equipment/conveying-systems/belt-conveyor",
    ru: "/ru/oborudovanie/transportnye-sistemy/lentochnyy-konveyer",
    ar: "/ar/machines-equipment/conveying-systems/belt-conveyor",
  },
  screwConveyor: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
    en: "/en/machines-equipment/conveying-systems/screw-conveyor",
    ru: "/ru/oborudovanie/transportnye-sistemy/shnekovyy-konveyer",
    ar: "/ar/machines-equipment/conveying-systems/screw-conveyor",
  },
  chainConveyor: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler",
    en: "/en/machines-equipment/conveying-systems/chain-conveyor",
    ru: "/ru/oborudovanie/transportnye-sistemy/tsepnoy-konveyer",
    ar: "/ar/machines-equipment/conveying-systems/chain-conveyor",
  },
  bucketElevator: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
    en: "/en/machines-equipment/conveying-systems/bucket-elevator",
    ru: "/ru/oborudovanie/transportnye-sistemy/kovshovyy-elevator",
    ar: "/ar/machines-equipment/conveying-systems/bucket-elevator",
  },
  tripperConveyor: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/tripper-arabali-konveyor",
    en: "/en/machines-equipment/conveying-systems/tripper-conveyor",
    ru: "/ru/oborudovanie/transportnye-sistemy/konveyer-s-razgruzochnoy-telezhkoy",
    ar: "/ar/machines-equipment/conveying-systems/tripper-conveyor",
  },
  beltBucketElevator: {
    tr: "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler",
    en: "/en/machines-equipment/conveying-systems/belt-bucket-elevator",
    ru: "/ru/oborudovanie/transportnye-sistemy/lentochnyy-kovshovyy-elevator",
    ar: "/ar/machines-equipment/conveying-systems/belt-bucket-elevator",
  },
  dosingSystems: {
    tr: "/makinalar-ekipman/dozajlama-sistemleri",
    en: "/en/machines-equipment/dosing-systems",
    ru: "/ru/oborudovanie/sistemy-dozirovaniya",
    ar: "/ar/machines-equipment/dosing-systems",
  },
  dosingBeltScale: {
    tr: "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari",
    en: "/en/machines-equipment/dosing-systems/weigh-belt-feeder",
    ru: "/ru/oborudovanie/sistemy-dozirovaniya/lentochnyy-dozator",
    ar: "/ar/machines-equipment/dosing-systems/weigh-belt-feeder",
  },
  microDosing: {
    tr: "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama",
    en: "/en/machines-equipment/dosing-systems/micro-dosing-system",
    ru: "/ru/oborudovanie/sistemy-dozirovaniya/mikrodozirovanie",
    ar: "/ar/machines-equipment/dosing-systems/micro-dosing-system",
  },
  macroDosing: {
    tr: "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama",
    en: "/en/machines-equipment/dosing-systems/macro-dosing-system",
    ru: "/ru/oborudovanie/sistemy-dozirovaniya/makrodozirovanie",
    ar: "/ar/machines-equipment/dosing-systems/macro-dosing-system",
  },
  reactorsTanks: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar",
    en: "/en/machines-equipment/reactors-process-tanks",
    ru: "/ru/oborudovanie/reaktory-i-emkosti",
    ar: "/ar/machines-equipment/reactors-process-tanks",
  },
  coolingTank: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar/sogutma-tanklari",
    en: "/en/machines-equipment/reactors-process-tanks/cooling-tank",
    ru: "/ru/oborudovanie/reaktory-i-emkosti/emkost-okhlazhdeniya",
    ar: "/ar/machines-equipment/reactors-process-tanks/cooling-tank",
  },
  agitatedReactor: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler",
    en: "/en/machines-equipment/reactors-process-tanks/agitated-reactor",
    ru: "/ru/oborudovanie/reaktory-i-emkosti/reaktor-s-meshalkoy",
    ar: "/ar/machines-equipment/reactors-process-tanks/agitated-reactor",
  },
  pressureReactor: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar/basincli-reaktorler",
    en: "/en/machines-equipment/reactors-process-tanks/pressure-reactor",
    ru: "/ru/oborudovanie/reaktory-i-emkosti/reaktor-pod-davleniem",
    ar: "/ar/machines-equipment/reactors-process-tanks/pressure-reactor",
  },
  dissolutionTank: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
    en: "/en/machines-equipment/reactors-process-tanks/dissolution-tank",
    ru: "/ru/oborudovanie/reaktory-i-emkosti/emkost-rastvoreniya",
    ar: "/ar/machines-equipment/reactors-process-tanks/dissolution-tank",
  },
  storageTank: {
    tr: "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari",
    en: "/en/machines-equipment/reactors-process-tanks/storage-tank",
    ru: "/ru/oborudovanie/reaktory-i-emkosti/emkost-khraneniya",
    ar: "/ar/machines-equipment/reactors-process-tanks/storage-tank",
  },
  screeningSystems: {
    tr: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    en: "/en/machines-equipment/screening-systems",
    ru: "/ru/oborudovanie/grokhoty",
    ar: "/ar/machines-equipment/screening-systems",
  },
  vibratingScreen: {
    tr: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler",
    en: "/en/machines-equipment/screening-systems/vibrating-screen",
    ru: "/ru/oborudovanie/grokhoty/vibratsionnyy-grokhot",
    ar: "/ar/machines-equipment/screening-systems/vibrating-screen",
  },
  trommelScreen: {
    tr: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
    en: "/en/machines-equipment/screening-systems/trommel-screen",
    ru: "/ru/oborudovanie/grokhoty/barabannyy-grokhot",
    ar: "/ar/machines-equipment/screening-systems/trommel-screen",
  },
  dewateringScreen: {
    tr: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri",
    en: "/en/machines-equipment/screening-systems/dewatering-screen",
    ru: "/ru/oborudovanie/grokhoty/obezvozhivayushchiy-grokhot",
    ar: "/ar/machines-equipment/screening-systems/dewatering-screen",
  },
  wetScreen: {
    tr: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/sulu-elekler",
    en: "/en/machines-equipment/screening-systems/wet-screen",
    ru: "/ru/oborudovanie/grokhoty/grokhot-mokrogo-grokhocheniya",
    ar: "/ar/machines-equipment/screening-systems/wet-screen",
  },
  dustCollection: {
    tr: "/makinalar-ekipman/toz-toplama-sistemleri",
    en: "/en/machines-equipment/dust-collection-systems",
    ru: "/ru/oborudovanie/sistemy-pyleulavlivaniya",
    ar: "/ar/machines-equipment/dust-collection-systems",
  },
  cyclones: {
    tr: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar",
    en: "/en/machines-equipment/dust-collection-systems/cyclone-separator",
    ru: "/ru/oborudovanie/sistemy-pyleulavlivaniya/tsiklonnyy-separator",
    ar: "/ar/machines-equipment/dust-collection-systems/cyclone-separator",
  },
  pulseJetFilter: {
    tr: "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler",
    en: "/en/machines-equipment/dust-collection-systems/pulse-jet-dust-collector",
    ru: "/ru/oborudovanie/sistemy-pyleulavlivaniya/rukavnyy-filtr-s-impulsnoy-produvkoy",
    ar: "/ar/machines-equipment/dust-collection-systems/pulse-jet-dust-collector",
  },
  wetScrubber: {
    tr: "/makinalar-ekipman/toz-toplama-sistemleri/baca-yikama-scrubber-sistemleri",
    en: "/en/machines-equipment/dust-collection-systems/wet-scrubber",
    ru: "/ru/oborudovanie/sistemy-pyleulavlivaniya/skrubber-mokroy-ochistki-gaza",
    ar: "/ar/machines-equipment/dust-collection-systems/wet-scrubber",
  },
  packagingSystems: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    en: "/en/machines-equipment/packaging-bagging-systems",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki",
    ar: "/ar/machines-equipment/packaging-bagging-systems",
  },
  openMouthBagging: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/acik-agiz-torbalama",
    en: "/en/machines-equipment/packaging-bagging-systems/open-mouth-bagging-system",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki/fasovka-v-otkrytye-meshki",
    ar: "/ar/machines-equipment/packaging-bagging-systems/open-mouth-bagging-system",
  },
  bigBagFilling: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum",
    en: "/en/machines-equipment/packaging-bagging-systems/big-bag-filling-system",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki/napolnenie-big-begov",
    ar: "/ar/machines-equipment/packaging-bagging-systems/big-bag-filling-system",
  },
  palletizingLines: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/paletleme-hatlari",
    en: "/en/machines-equipment/packaging-bagging-systems/palletizing-lines",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki/liniya-paletirovaniya",
    ar: "/ar/machines-equipment/packaging-bagging-systems/palletizing-lines",
  },
  liquidFilling: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme",
    en: "/en/machines-equipment/packaging-bagging-systems/liquid-filling-bottling",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki/rozliv-zhidkostey",
    ar: "/ar/machines-equipment/packaging-bagging-systems/liquid-filling-bottling",
  },
  bottleLabeling: {
    tr: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sise-etiketleme-makinasi",
    en: "/en/machines-equipment/packaging-bagging-systems/bottle-labeling-machine",
    ru: "/ru/oborudovanie/sistemy-upakovki-i-fasovki/etiketirovochnaya-mashina",
    ar: "/ar/machines-equipment/packaging-bagging-systems/bottle-labeling-machine",
  },
  storageSystems: {
    tr: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
    en: "/en/machines-equipment/silo-storage-feeding-systems",
    ru: "/ru/oborudovanie/silosy-i-sistemy-podachi",
    ar: "/ar/machines-equipment/silo-storage-feeding-systems",
  },
  bunkersHoppers: {
    tr: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
    en: "/en/machines-equipment/silo-storage-feeding-systems/bunkers-hoppers",
    ru: "/ru/oborudovanie/silosy-i-sistemy-podachi/bunkery",
    ar: "/ar/machines-equipment/silo-storage-feeding-systems/bunkers-hoppers",
  },
  siloSystems: {
    tr: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri",
    en: "/en/machines-equipment/silo-storage-feeding-systems/silo-systems",
    ru: "/ru/oborudovanie/silosy-i-sistemy-podachi/silosnye-sistemy",
    ar: "/ar/machines-equipment/silo-storage-feeding-systems/silo-systems",
  },
  teremiHopper: {
    tr: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/teremi-bunkeri",
    en: "/en/machines-equipment/silo-storage-feeding-systems/truck-intake-hopper",
    ru: "/ru/oborudovanie/silosy-i-sistemy-podachi/priemnyy-bunker-dlya-razgruzki-avtomobiley",
    ar: "/ar/machines-equipment/silo-storage-feeding-systems/truck-intake-hopper",
  },
  auxiliaryFlow: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri",
    en: "/en/machines-equipment/auxiliary-flow-equipment",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment",
  },
  loadingBellows: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu",
    en: "/en/machines-equipment/auxiliary-flow-equipment/loading-bellows",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/zagruzochnye-rukava",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/loading-bellows",
  },
  distributor: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor",
    en: "/en/machines-equipment/auxiliary-flow-equipment/distributor",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/raspredeliteli",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/distributor",
  },
  flapDiverters: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler",
    en: "/en/machines-equipment/auxiliary-flow-equipment/flap-diverter-valves",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/perekidnye-klapany",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/flap-diverter-valves",
  },
  slideGates: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar",
    en: "/en/machines-equipment/auxiliary-flow-equipment/slide-gates",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/shibernye-zadvizhki",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/slide-gates",
  },
  rotaryAirlock: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/hava-kilidi",
    en: "/en/machines-equipment/auxiliary-flow-equipment/rotary-airlock-valve",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/shlyuzovye-zatvory",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/rotary-airlock-valve",
  },
  blower: {
    tr: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/blower",
    en: "/en/machines-equipment/auxiliary-flow-equipment/blower",
    ru: "/ru/oborudovanie/vspomogatelnoe-oborudovanie/vozdukhoduvki",
    ar: "/ar/machines-equipment/auxiliary-flow-equipment/blower",
  },
  sectors: {
    tr: "/sektorler",
    en: "/en/industries",
    ru: "/ru/otrasli",
    ar: "/ar/industries",
  },
  fertilizerPlants: {
    tr: "/sektorler/gubre-ve-granulasyon-tesisleri",
    en: "/en/industries/fertilizer-production-plants",
    ru: "/ru/otrasli/zavody-po-proizvodstvu-udobreniy",
    ar: "/ar/industries/fertilizer-production-plants",
  },
  compostPlants: {
    tr: "/sektorler/kompost-ve-organik-atik-tesisleri",
    en: "/en/industries/compost-organic-waste-plants",
    ru: "/ru/otrasli/kompostnye-zavody",
    ar: "/ar/industries/compost-organic-waste-plants",
  },
  mining: {
    tr: "/sektorler/madencilik-ve-mineral-isleme",
    en: "/en/industries/mining-mineral-processing",
    ru: "/ru/otrasli/gornaya-promyshlennost",
    ar: "/ar/industries/mining-mineral-processing",
  },
  sludgeDrying: {
    tr: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    en: "/en/industries/sludge-drying-systems",
    ru: "/ru/otrasli/sushka-osadka-stochnykh-vod",
    ar: "/ar/industries/sludge-drying-systems",
  },
  chemicalProcess: {
    tr: "/sektorler/kimya-ve-proses-endustrisi",
    en: "/en/industries/chemical-process-plants",
    ru: "/ru/otrasli/khimicheskaya-promyshlennost",
    ar: "/ar/industries/chemical-process-plants",
  },
  recycling: {
    tr: "/sektorler/geri-donusum-ve-atik-yonetimi",
    en: "/en/industries/recycling-waste-management",
    ru: "/ru/otrasli/pererabotka-otkhodov",
    ar: "/ar/industries/recycling-waste-management",
  },
  contact: {
    tr: "/iletisim",
    en: "/en/contact",
    ru: "/ru/kontakty",
    ar: "/ar/contact",
  },
} as const;

export const routeKeys = Object.keys(routeMap) as RouteKey[];

export function pathFor(key: RouteKey, locale: Locale): string {
  return routeMap[key][locale];
}

/** Locale bazlı ters arama haritaları (path → RouteKey). */
const reverseMaps: Record<Locale, Map<string, RouteKey>> = {
  tr: new Map(),
  en: new Map(),
  ru: new Map(),
  ar: new Map(),
};

for (const key of routeKeys) {
  for (const locale of Object.keys(routeMap[key]) as Locale[]) {
    reverseMaps[locale].set(routeMap[key][locale], key);
  }
}

export function routeKeyByPath(locale: Locale, path: string): RouteKey | undefined {
  const normalized =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return reverseMaps[locale].get(normalized);
}

/** /en/machines-equipment/drum-systems → segments üzerinden route çözümü. */
export function resolveIntlRoute(
  locale: IntlLocale,
  slugSegments: string[] | undefined,
): RouteKey | undefined {
  const path = `/${locale}${slugSegments && slugSegments.length > 0 ? `/${slugSegments.join("/")}` : ""}`;
  return routeKeyByPath(locale, path);
}

/**
 * hreflang alternatifleri (mutlak URL). x-default Türkçe (ana pazar + kök dizin) sürümüne işaret eder.
 */
export function languageAlternates(key: RouteKey): Record<string, string> {
  return {
    tr: absoluteUrl(routeMap[key].tr),
    en: absoluteUrl(routeMap[key].en),
    ru: absoluteUrl(routeMap[key].ru),
    ar: absoluteUrl(routeMap[key].ar),
    "x-default": absoluteUrl(routeMap[key].tr),
  };
}

/**
 * Bir Türkçe path'in çevirisi varsa hreflang alternatiflerini döndürür.
 * Çevirisi olmayan TR sayfalarında hreflang üretilmez (yarım eşleme oluşmaz).
 */
export function trLanguageAlternates(trPath: string): Record<string, string> | undefined {
  const key = routeKeyByPath("tr", trPath);
  return key ? languageAlternates(key) : undefined;
}

/**
 * Dil seçici hedefi: sayfanın hedef dilde karşılığı varsa o sayfa,
 * yoksa hedef dilin ana sayfası (404'e asla düşmez).
 */
export function switchLocalePath(currentPath: string, from: Locale, to: Locale): string {
  const key = routeKeyByPath(from, currentPath);
  if (key) return routeMap[key][to];
  return routeMap.home[to];
}

/** Mevcut path'ten locale tespiti (dil seçicinin TR sayfalarında da çalışması için). */
export function localeFromPath(path: string): Locale {
  const firstSegment = path.split("/").filter(Boolean)[0] ?? "";
  return isIntlLocale(firstSegment) ? firstSegment : "tr";
}
