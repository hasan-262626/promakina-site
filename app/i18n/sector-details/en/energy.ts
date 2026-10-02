import type { SectorDetailText } from "../types";

type EnergyKey =
  | "sectorAgriculturalBiogas"
  | "sectorAnimalBiogas"
  | "sectorFoodBiogas"
  | "sectorBiomassEnergy"
  | "sectorBiomethane";

export const enEnergyPages: Record<EnergyKey, SectorDetailText> = {
  sectorAgriculturalBiogas: {
    meta: {
      title: "Agricultural Waste Biogas Plant: Pre-Treatment",
      description:
        "Equipment for agricultural waste biogas plants: size reduction of silage, straw and crop residues, solid feeding system, digestate separation and drying solutions.",
    },
    label: "Agricultural Waste Biogas Plants",
    h1: "Agricultural Waste Biogas Plants: Pre-Treatment, Feeding and Digestate",
    lead:
      "We supply equipment for feeding silage, straw and crop residues to the digester steadily and at the right size, and for processing the digestate.",
    introTitle: "Preparing Fibrous Agricultural Feedstock for the Digester",
    intro: [
      "In agricultural biogas plants, energy crops such as maize silage, stalks, straw and vegetable residues are converted into biogas in an anaerobic digester. Fibrous inputs can form a floating layer in the digester and limit microbial access. Reducing the feedstock to a suitable size and feeding it steadily is therefore important for stable gas production.",
      "Pro Makina's scope in these plants covers feedstock reception bunkers, size reduction, solid feeding and transfer equipment, and solid-liquid separation and drying systems on the digestate side. The digester, gas storage and energy conversion unit (CHP) are defined by the project designer; the interfaces of our equipment with these systems are agreed at the start of the project.",
      "Digestate is the material that remains after digestion. Its solid phase can be separated and dried or composted, while the liquid phase is stored and used. How digestate is used depends on the applicable regulations and analysis results.",
    ],
    imageAlts: [
      "Digesters and silage storage area at an agricultural waste biogas plant",
      "Loader feeding silage at an agricultural biogas plant",
    ],
    processTitle: "Material Flow in an Agricultural Waste Biogas Plant",
    processIntro: "In this flow, Pro Makina equipment is used in the preparation before the digester and in digestate processing after it.",
    steps: [
      { title: "Feedstock intake and storage", text: "Silage and agricultural residues are taken from the storage area into the reception bunker." },
      { title: "Size reduction", text: "Fibrous inputs are reduced to a size that will not form a floating layer in the digester." },
      { title: "Solid feeding", text: "Feedstock is fed to the digester steadily and in metered amounts by a screw feeder." },
      { title: "Anaerobic digestion", text: "Biogas is produced in the digester and sent to gas storage and the energy unit." },
      { title: "Digestate separation", text: "The digestion residue is separated into solid and liquid phases." },
      { title: "Using the solid digestate", text: "The solid phase is dried or composted; the liquid phase is stored." },
    ],
    machinesTitle: "Equipment Used in an Agricultural Biogas Plant",
    machineNotes: {
      bunkersHoppers: "Bunkers where silage and agricultural residues are received and buffered.",
      hammerCrusher: "Size reduction of fibrous inputs such as straw and stalks.",
      screwConveyor: "Metered feeding of solid feedstock to the digester.",
      beltConveyor: "Feedstock transfer between the storage area and preparation equipment.",
      dewateringScreen: "Separating digestate into solid and liquid phases.",
      rotaryDryer: "Reducing the moisture of separated solid digestate.",
    },
    faqTitle: "Frequently Asked Questions About Agricultural Waste Biogas Plants",
    faqs: [
      { q: "Which parts of a biogas plant does Pro Makina supply?", a: "We supply feedstock reception, size reduction, solid feeding and transfer equipment, as well as digestate separation and drying systems. The interface with the digester and energy unit is defined at the start of the project." },
      { q: "Can straw and stalks be used in a biogas plant?", a: "They can, but their fibrous structure requires size reduction and a suitable mixing ratio. Gas yield is evaluated based on feedstock analysis." },
      { q: "Why should feedstock be shredded?", a: "Smaller particles improve microbial access and reduce the risk of floating layers in the digester and feed blockages." },
      { q: "What can digestate be used for?", a: "Solid digestate can be dried or composted to become a raw material for organic products; the liquid phase is stored and used. Use depends on regulations and analysis." },
      { q: "Can a feeding line be added to an existing biogas plant?", a: "Yes. The feeding points and capacity of the existing digester are reviewed and suitable bunker, size reduction and feeding equipment is selected." },
    ],
    cta: {
      title: "Request a quote for your agricultural biogas plant",
      description: "Share your feedstock types, daily feed quantity and digestate goals, and we will define the pre-treatment and feeding line together.",
    },
  },

  sectorAnimalBiogas: {
    meta: {
      title: "Animal Waste Biogas Plant: Manure Feeding",
      description:
        "For animal waste biogas plants: liquid and solid manure reception, sand and foreign matter risk, digester feeding, digestate separation, drying and composting.",
    },
    label: "Animal Waste Biogas Plants",
    h1: "Animal Waste Biogas Plants: Manure Reception and Digestate",
    lead:
      "We supply equipment that feeds manure from cattle and poultry farms to the digester steadily and processes the digestate.",
    introTitle: "Reception, Feeding and Digestate Management by Manure Type",
    intro: [
      "The feedstock of animal biogas plants is mostly cattle manure and poultry manure. Liquid manure can be pumped in, while solid manure and manure with bedding need a reception bunker and a solid feeding system. Sand and stones in bedding material can settle in the digester, reducing volume and causing equipment wear; this risk is evaluated at the reception stage.",
      "Poultry manure is rich in nitrogen and can cause ammonia accumulation during digestion. It is therefore usually fed balanced with other inputs. Feed quantity and mixing ratio are kept within the limits set by the digester designer.",
      "Pro Makina's scope covers reception, feeding and transfer equipment as well as separation, drying and composting systems on the digestate side. The solid phase of digestate can be composted into a soil improver; conditions of use are defined by regulations.",
    ],
    imageAlts: [
      "Manure reception area and digesters at an animal waste biogas plant",
      "Digesters and feeding unit at an animal waste biogas plant",
    ],
    processTitle: "Material Flow in an Animal Waste Biogas Plant",
    processIntro: "The flow is set up so that liquid and solid manure are received separately and fed to the digester in balance.",
    steps: [
      { title: "Manure reception", text: "Liquid manure goes to the reception pit; solid and bedded manure goes to the reception bunker." },
      { title: "Foreign matter control", text: "Sand, stones and coarse foreign matter are removed before entering the digester." },
      { title: "Balanced feeding", text: "Manure types are metered at a ratio within the digester's limits." },
      { title: "Anaerobic digestion", text: "Biogas is produced in the digester and sent to the gas line." },
      { title: "Digestate separation", text: "Digestate is separated into solid and liquid phases; the liquid phase is stored." },
      { title: "Processing solid digestate", text: "The solid phase is dried or composted into a product." },
    ],
    machinesTitle: "Equipment Used in an Animal Biogas Plant",
    machineNotes: {
      bunkersHoppers: "Bunkers where solid and bedded manure is received.",
      screwConveyor: "Metered, enclosed feeding of solid manure to the digester.",
      dewateringScreen: "Separating digestate into solid and liquid phases.",
      storageTank: "Tanks buffering the liquid phase or process liquids.",
      rotaryDryer: "Reducing the moisture of solid digestate.",
      compostDrum: "Composting solid digestate into a stable product.",
    },
    faqTitle: "Frequently Asked Questions About Animal Waste Biogas Plants",
    faqs: [
      { q: "Can cattle manure alone be used in a biogas plant?", a: "It can; because gas yield can be lower than with energy crops, it is usually evaluated together with other inputs." },
      { q: "What should be considered with poultry manure?", a: "High nitrogen content can cause ammonia accumulation in the digester. Poultry manure is balanced with other inputs and fed at a controlled ratio." },
      { q: "Why is sand in manure a problem?", a: "Sand accumulates at the bottom of the digester, reducing volume and wearing equipment such as pumps and agitators. Removing it at reception is recommended." },
      { q: "Can digestate be used as compost?", a: "Solid digestate can be composted into a stable soil improver. Conditions of use are defined by regulations and analysis results." },
      { q: "Does Pro Makina also supply the digester?", a: "Our scope in these plants is reception, feeding, transfer and digestate processing equipment. The digester and gas systems are defined together with the project designer." },
    ],
    cta: {
      title: "Request a quote for your animal waste biogas plant",
      description: "Share the manure type, daily quantity and digestate goals, and we will define reception, feeding and digestate processing equipment together.",
    },
  },

  sectorFoodBiogas: {
    meta: {
      title: "Food Waste Biogas Plant: Pre-Treatment Line",
      description:
        "For food waste biogas plants: depackaging and foreign matter removal, shredding, buffer tank, regulation-compliant hygienization, controlled feeding and odor control.",
    },
    label: "Food Waste Biogas Plants",
    h1: "Food Waste Biogas Plants: Pre-Treatment and Controlled Feeding",
    lead:
      "We build pre-treatment lines that clean food production, supermarket and canteen waste of foreign matter and feed it to the digester under control.",
    introTitle: "A High-Energy but Sensitive Feedstock: Food Waste",
    intro: [
      "Food waste contains easily degradable organic matter, which makes it a feedstock with high biogas potential. The same property, however, can lead to acidification and a drop in gas production if it is fed suddenly or in excess. Food waste is therefore balanced in a buffer tank and fed to the digester in controlled amounts.",
      "Packaging in market and supermarket waste is the biggest technical problem of food waste biogas plants. Plastics and other foreign matter can form floating or settled layers in the digester and wear equipment. Pre-treatment removes these materials through shredding, depackaging and screening.",
      "Waste containing meat and cooked food may fall under animal by-product rules; in that case the hygienization step required by regulation is added to the flow. Reception and pre-treatment areas are designed enclosed, and odorous air is treated.",
    ],
    imageAlts: [
      "Waste reception area and digesters at a food waste biogas plant",
      "Loader feeding waste at a food waste biogas plant",
    ],
    processTitle: "Food Waste Biogas Pre-Treatment Flow",
    processIntro: "The flow is set up so that foreign matter is removed before the digester and feeding is balanced.",
    steps: [
      { title: "Enclosed reception", text: "Waste is received in an enclosed area; waste type and regulatory category are checked." },
      { title: "Shredding and depackaging", text: "Packaged waste is opened and packaging is separated from the organic fraction." },
      { title: "Screening", text: "Remaining plastics, sand and coarse pieces are screened from the pulped waste." },
      { title: "Hygienization (if required)", text: "Controlled heat treatment is applied to waste where required by regulation." },
      { title: "Buffer tank", text: "Waste is homogenized and held in a buffer tank for feeding." },
      { title: "Controlled feeding", text: "It is fed to the digester in steady amounts that prevent acidification." },
    ],
    machinesTitle: "Equipment Used in a Food Waste Biogas Pre-Treatment Line",
    machineNotes: {
      shredderSystems: "Opening and shredding packaged and bulky food waste.",
      wetScreen: "Screening plastics and coarse particles from the pulped waste.",
      storageTank: "Tank where waste is homogenized and buffered for digester feeding.",
      screwConveyor: "Enclosed conveying of shredded waste.",
      dewateringScreen: "Dewatering separated packaging and coarse fractions.",
      wetScrubber: "Scrubbing odorous air extracted from reception and pre-treatment areas.",
    },
    faqTitle: "Frequently Asked Questions About Food Waste Biogas Plants",
    faqs: [
      { q: "Why should food waste be fed under control?", a: "Easily degradable food waste can cause acid accumulation and a drop in gas production when overfed. A buffer tank and steady feeding reduce this risk." },
      { q: "Can packaged food waste be processed in a biogas plant?", a: "Yes, but packaging must be removed before it enters the digester. The packaging share defines the scope of the pre-treatment line." },
      { q: "Is hygienization required for all food waste?", a: "No. The requirement depends on waste content and regulatory category. Accepted waste types and conditions are clarified at the start of the project." },
      { q: "How is odor prevented at a food waste biogas plant?", a: "Reception and pre-treatment take place in enclosed areas, indoor air is extracted and treated, and waste is not stored for long." },
      { q: "Can food waste be added to an existing agricultural biogas plant?", a: "If regulatory permits and digester capacity allow, food waste can be included by adding pre-treatment and a buffer tank." },
    ],
    cta: {
      title: "Request a quote for your food waste biogas pre-treatment line",
      description: "Share your waste sources, packaging share and daily quantity, and we will define separation, buffer and feeding capacity together.",
    },
  },

  sectorBiomassEnergy: {
    meta: {
      title: "Biomass Energy Plant: Fuel Preparation",
      description:
        "For biomass energy plants: a fuel preparation line that crushes, screens, dries and stores wood chips, pruning and crop residues and feeds them steadily to the boiler.",
    },
    label: "Biomass Energy Plants",
    h1: "Biomass Energy Plants: Fuel Preparation and Feeding Line",
    lead:
      "We build lines that prepare solid biomass at the size and moisture required by the boiler or gasifier, store it and feed it steadily.",
    introTitle: "How Is Biomass Energy Different From Biogas?",
    intro: [
      "Biomass energy plants convert solid biomass such as wood chips, forest and pruning waste, hazelnut shells and straw into heat, steam or electricity by combustion or gasification. This process differs from biogas production, where organic waste is broken down by microorganisms in the absence of oxygen; here the physical properties of the fuel are what matter.",
      "Fuel moisture directly affects calorific value, while particle size and foreign matter content determine the stable operation of the boiler feeding system. Stones and metal pieces can strain the feeding equipment and the boiler. Biomass is therefore crushed, screened and dried where needed before it is sent to the boiler.",
      "Pro Makina's scope is the fuel preparation, storage and feeding line. The boiler or gasifier is selected by the energy plant designer; our fuel line is designed for the size, moisture and feed rate required by that unit. Fire and explosion risks that dry biomass dust can create are also considered in the design.",
    ],
    imageAlts: [
      "Wood chip storage area and boiler building at a biomass energy plant",
      "Biomass fuel conveyed to the boiler feeding line",
    ],
    processTitle: "Biomass Fuel Preparation and Feeding Flow",
    processIntro: "The flow is set up to turn different biomass types into the uniform fuel the boiler requires.",
    steps: [
      { title: "Intake and storage", text: "Biomass is stored by type; moisture and foreign matter are checked." },
      { title: "Shredding and crushing", text: "Large woody material and residues are reduced to the target size." },
      { title: "Screening", text: "Oversize pieces are recycled; stones, metal and fines are separated." },
      { title: "Drying (if required)", text: "Wet fuel is dried to the moisture value required by the boiler." },
      { title: "Silo and buffer storage", text: "The prepared fuel is stored in a silo or bunker." },
      { title: "Boiler feeding", text: "Fuel is fed to the boiler or gasifier at a steady rate." },
    ],
    machinesTitle: "Equipment Used in a Biomass Fuel Preparation Line",
    machineNotes: {
      shredderSystems: "Pre-shredding large wood, logs and pruning waste.",
      hammerCrusher: "Crushing shredded biomass to the target particle size.",
      trommelScreen: "Separating oversize pieces, stones and fines from the fuel.",
      rotaryDryer: "Drying wet biomass to the moisture value required by the boiler.",
      chainConveyor: "Conveying biomass fuel to the silo and boiler feeding point.",
      siloSystems: "Buffer storage and steady discharge of the prepared fuel.",
    },
    faqTitle: "Frequently Asked Questions About Biomass Energy Plants",
    faqs: [
      { q: "Is a biomass energy plant the same as a biogas plant?", a: "No. Biomass plants convert solid biomass into energy by combustion or gasification. Biogas plants produce gas by breaking down organic waste with microorganisms in the absence of oxygen." },
      { q: "Why does fuel moisture matter?", a: "Evaporating the water in the fuel consumes energy; as moisture rises, usable calorific value falls and combustion stability is affected." },
      { q: "Which biomass types can be used?", a: "Wood chips, forest and pruning waste, hazelnut shells, straw and similar residues can be used. Suitability depends on the fuel specifications of the boiler or gasifier supplier." },
      { q: "Does Pro Makina also supply the boiler?", a: "Our scope is the fuel preparation, storage and feeding line. The energy conversion unit is selected by the plant designer, and our line is designed around it." },
      { q: "How are fire and dust risks managed in a biomass line?", a: "Dry biomass dust is combustible. Dust extraction, enclosed transfer and the relevant explosion protection requirements are evaluated during design." },
    ],
    cta: {
      title: "Request a quote for your biomass fuel preparation line",
      description: "Share your biomass types, input moisture and the boiler's fuel specifications, and we will define crushing, drying and feeding capacity together.",
    },
  },

  sectorBiomethane: {
    meta: {
      title: "Biomethane and Biogas Upgrading Solutions",
      description:
        "Biomethane from biogas: removing carbon dioxide, hydrogen sulfide and moisture, upgrading technology selection, engineering and equipment support for pre-treatment.",
    },
    label: "Biomethane / Gas Upgrading Solutions",
    h1: "Biomethane and Biogas Upgrading Solutions",
    lead:
      "We provide pre-treatment, auxiliary systems and project engineering support for upgrading raw biogas to biomethane.",
    introTitle: "From Raw Biogas to Biomethane: What Is Removed?",
    intro: [
      "Besides methane, raw biogas contains carbon dioxide, water vapor, hydrogen sulfide and, depending on the source, compounds such as siloxanes. Biogas can be used directly in a CHP engine; but if it is to be injected into the natural gas grid or used as vehicle fuel, these components must be removed to raise the methane content. This process is called biogas upgrading, and the resulting gas is called biomethane.",
      "Upgrading technologies include water scrubbing, membrane separation, pressure swing adsorption (PSA) and chemical absorption (amine scrubbing). The choice depends on gas flow, raw gas composition, target gas quality and energy consumption. Hydrogen sulfide and moisture are usually removed before the main upgrading unit.",
      "In these projects Pro Makina supports pre-treatment and auxiliary systems, process water and chemical tanks, and exhaust air scrubbing equipment. The main upgrading unit is selected together with the technology provider; gas quality requirements for grid injection or vehicle fuel are set by the relevant authority.",
    ],
    imageAlts: [
      "Biogas upgrading and biomethane production columns",
      "Gas columns and process building at a biogas upgrading plant",
    ],
    processTitle: "Biogas to Biomethane Upgrading Flow",
    processIntro: "Technology selection in this flow depends on raw gas composition and intended use; the sequence of steps is generally the same.",
    steps: [
      { title: "Raw gas analysis", text: "Methane, carbon dioxide, hydrogen sulfide, moisture and siloxane contents are measured." },
      { title: "Desulfurization", text: "Hydrogen sulfide is reduced by biological, chemical or adsorption methods." },
      { title: "Moisture and particle removal", text: "The gas is cooled to separate condensed water, and particles are captured." },
      { title: "Carbon dioxide separation", text: "Carbon dioxide is separated with the selected technology to raise the methane content." },
      { title: "Quality control and odorization", text: "Biomethane quality is measured; it is odorized according to grid requirements." },
      { title: "Compression and use", text: "The gas is brought to the pressure required for the grid or vehicle fuel." },
    ],
    machinesTitle: "Auxiliary Equipment Used in Biogas Upgrading Projects",
    machineNotes: {
      wetScrubber: "Scrubbing plant exhaust air and odorous gases; use in the gas line is verified against project requirements.",
      dissolutionTank: "Preparing chemical solutions used for desulfurization.",
      storageTank: "Storage tanks for process water, chemicals and condensate.",
    },
    faqTitle: "Frequently Asked Questions About Biomethane and Biogas Upgrading",
    faqs: [
      { q: "What is the difference between biogas and biomethane?", a: "Biogas is raw gas that contains carbon dioxide and other components besides methane. Biomethane is gas with a higher methane content, similar to natural gas, obtained by removing these components." },
      { q: "Which upgrading technology should be chosen?", a: "The choice between water scrubbing, membrane, PSA and amine scrubbing is made based on gas flow, raw gas composition, target quality and energy consumption." },
      { q: "Why is hydrogen sulfide removed first?", a: "Hydrogen sulfide causes corrosion and can damage some upgrading technologies. It is therefore reduced before the main upgrading step." },
      { q: "Can biomethane be injected into the natural gas grid?", a: "It can if gas quality and pressure meet the grid operator's requirements. The requirements are set by the relevant authority." },
      { q: "Does Pro Makina also supply the upgrading unit?", a: "The main upgrading unit is selected together with the technology provider. Pro Makina supports pre-treatment, auxiliary systems, tanks and exhaust air scrubbing equipment." },
    ],
    cta: {
      title: "Request a technical consultation for your biogas upgrading project",
      description: "Share your raw biogas flow, gas analysis and intended use, and we will clarify the pre-treatment and auxiliary system scope together.",
    },
  },
};
