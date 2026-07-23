import type { IntlPageContent } from "../types";

export const fertilizerPlants: IntlPageContent = {
  meta: {
    title: "Fertilizer Production Plant Manufacturer | Turnkey Lines",
    description:
      "Turnkey fertilizer production plants: granular NPK, organomineral, powder and liquid lines from raw material intake to bagging. Engineered by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Fertilizer Production Plants",
  hero: {
    h1: "Fertilizer Production Plants — Turnkey from Intake to Bagging",
    intro:
      "Pro Makina designs and builds complete fertilizer production plants: granular NPK and organomineral lines built around drum granulation, powder blending plants, and liquid fertilizer preparation lines. One engineering team delivers process design, machinery, automation and commissioning.",
    image: { src: "/images/granulator disk/diskgran2.jpg", alt: "Granular fertilizer production plant equipment by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Plant Types We Deliver",
      items: [
        { title: "Granular NPK plants", text: "Drum granulation lines with drying, cooling, screening, coating and bagging." },
        { title: "Organomineral plants", text: "Lines combining organic matter (compost, manure) with mineral nutrients into granules." },
        { title: "Powder blending plants", text: "Dosing and mixing lines for powder NPK and speciality formulations." },
        { title: "Liquid fertilizer plants", text: "Dissolving, reaction and filling lines for liquid NPK, organomineral and biostimulant products." },
        { title: "Compost-to-fertilizer lines", text: "Granulation of matured compost into marketable granular products." },
      ],
    },
    {
      type: "paragraphs",
      heading: "The Granulation Line as One Process",
      paragraphs: [
        "A granular fertilizer plant is a loop, not a row of machines: dosing feeds the granulator drum, the dryer sets the moisture, the cooler stabilises temperature, screens split the flow, the crusher returns oversize, and coating and bagging finish the product. Every machine's performance depends on its neighbours — which is why we design the mass balance of the whole loop before sizing any single drum.",
        "Recipe flexibility is engineered in from the start: multiple dosing lines, granulation moisture control and screen configurations that let one plant produce a family of formulations. Tell us your target products and capacities, and we design the line around that portfolio.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Plant Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Target products and formulations", "Process route and equipment selection"],
        ["Capacity (t/h or t/year)", "Line sizing and utility demands"],
        ["Raw materials available", "Dosing, granulation and drying design basis"],
        ["Fuel and utilities at site", "Burner selection and energy concept"],
        ["Building or greenfield situation", "Layout and steel structure scope"],
      ],
      note: "Plant capacity and equipment sizing are calculated from your product portfolio and raw material analyses.",
    },
  ],
  faq: [
    {
      q: "What capacity range do your fertilizer plants cover?",
      a: "Lines are engineered per project from your annual target and operating hours; we size the granulation loop and utilities accordingly rather than offering fixed plant models.",
    },
    {
      q: "Can one plant produce both organomineral and NPK products?",
      a: "Yes, with appropriate dosing flexibility and granulation moisture control a single loop can run a product family; the recipe range must be defined at design time.",
    },
    {
      q: "Do you deliver the automation and electrical scope?",
      a: "Yes — MCC panels, PLC control, recipe management and reporting are part of our turnkey scope, together with installation supervision and commissioning.",
    },
    {
      q: "How long does a plant project take?",
      a: "Duration depends on scope and site readiness; the proposal includes a project schedule covering engineering, fabrication, delivery, installation and commissioning phases.",
    },
  ],
  related: ["granulatorDrum", "rotaryDryer", "coolingDrum", "screeningSystems", "packagingSystems", "compostPlants"],
  schemaType: "Service",
};

export const compostPlants: IntlPageContent = {
  meta: {
    title: "Compost Plant Manufacturer | Organic Waste Processing",
    description:
      "Turnkey compost plants with drum composting technology for manure, municipal and food waste. Process design and machinery by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Compost & Organic Waste Plants",
  hero: {
    h1: "Compost and Organic Waste Processing Plants",
    intro:
      "Pro Makina builds controlled composting plants around rotary drum composting technology: receiving and preparation, intensive drum composting, maturation, refining — and optionally drying and granulation that turn compost into a marketable fertilizer product.",
    image: { src: "/images/kompost/kompost1.jpg", alt: "Compost plant with drum composting technology by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "From Waste Stream to Stable Product",
      paragraphs: [
        "Composting succeeds when the recipe is right: moisture, carbon-nitrogen ratio and structure adjusted at the preparation step, then held under control through the intensive phase. Our plants therefore start with shredding, mixing and dosing equipment that conditions the incoming waste — followed by the compost drum, where rotation and controlled aeration drive fast, odour-managed thermophilic composting.",
        "After the drum, material matures in a shorter post-rotting step, then passes trommel screening to remove contaminants and structure material. Depending on your market, the line ends there — or continues into drying and drum granulation to produce granular organic or organomineral fertilizer.",
      ],
    },
    {
      type: "bullets",
      heading: "Waste Streams We Process",
      items: [
        "Cattle and poultry manure",
        "Separated municipal organic waste",
        "Food industry and market waste",
        "Slaughterhouse waste with structure material",
        "Green and landscape waste",
        "Digestate from biogas plants",
      ],
    },
    {
      type: "cards",
      heading: "Plant Building Blocks",
      items: [
        { title: "Receiving and preparation", text: "Bunkers, shredders and mixers conditioning the input recipe." },
        { title: "Drum composting", text: "Closed rotary reactor for the intensive, sanitising phase." },
        { title: "Maturation management", text: "Post-rotting area design with turning and monitoring concept." },
        { title: "Refining", text: "Trommel screening, contaminant separation and final product control." },
        { title: "Product upgrade", text: "Optional drying and granulation into granular fertilizer." },
        { title: "Odour control", text: "Enclosed air collection with biofilter or scrubber treatment." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Compost Plant Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Waste types and daily tonnages", "Line capacity and reception design"],
        ["Waste analyses (moisture, C/N)", "Recipe and drum retention design"],
        ["Structure material availability", "Preparation equipment scope"],
        ["Odour / permit constraints", "Enclosure and air treatment scope"],
        ["Final product target", "Refining and granulation scope"],
      ],
      note: "Retention times and equipment sizing are engineered from your specific waste analyses.",
    },
  ],
  faq: [
    {
      q: "How much area does a drum composting plant need?",
      a: "Significantly less than windrow-only composting, because the intensive phase happens inside the drum; the exact footprint follows from tonnage and maturation concept and is shown in the layout we prepare.",
    },
    {
      q: "Can the plant produce sellable fertilizer instead of raw compost?",
      a: "Yes — with drying, screening and drum granulation (optionally adding mineral nutrients) the line produces granular organic or organomineral fertilizer.",
    },
    {
      q: "How is odour controlled?",
      a: "The drum is a closed reactor; exhaust air is collected and treated in a biofilter or scrubber. Reception and preparation areas can also be enclosed where the site requires it.",
    },
  ],
  related: ["compostDrum", "granulatorDrum", "rotaryDryer", "screeningSystems", "fertilizerPlants", "recycling"],
  schemaType: "Service",
};

export const mining: IntlPageContent = {
  meta: {
    title: "Mining & Mineral Processing Plants | Drying, Screening, Handling",
    description:
      "Drying, screening, crushing and handling plants for silica sand, calcite, perlite and feldspar. Process lines engineered by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Mining & Mineral Processing",
  hero: {
    h1: "Mining and Mineral Processing Plants",
    intro:
      "For industrial minerals the margin sits in preparation: drying to specification, sharp classification and contamination-free handling. Pro Makina builds drying, screening, crushing and conveying lines for silica sand, calcite, perlite, feldspar and similar minerals — engineered from your ore data and product specifications.",
    image: { src: "/images/maden/maden1.jpg", alt: "Mineral processing plant equipment by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Typical Plant Scopes",
      items: [
        { title: "Sand drying plants", text: "Rotary dryer lines bringing silica and foundry sand to specification moisture." },
        { title: "Crushing and screening", text: "Jaw and impact crushing with multi-deck classification into product fractions." },
        { title: "Mineral handling", text: "Conveying, elevating, storage and loading systems for abrasive materials." },
        { title: "Dust management", text: "Cyclone and filter systems recovering fines and protecting the site environment." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Engineering for Abrasive Reality",
      paragraphs: [
        "Minerals punish equipment: quartz sand wears flights, chutes and cyclones; hot products stress bearings and belts. Our mineral lines are specified with wear plates, hardfaced components and generous drive reserves — decisions taken at design time from the ore's abrasiveness, not discovered after the first liner failure.",
        "Drying minerals is thermally straightforward but economically sensitive: fuel is the dominant operating cost. We size dryers from measured moisture data and design heat recovery and insulation so specification moisture is reached at the lowest sustainable fuel consumption.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Mineral Line Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Mineral type and abrasiveness", "Wear protection specification"],
        ["Feed moisture and target moisture", "Dryer heat balance"],
        ["Product fractions required", "Screening configuration"],
        ["Capacity (t/h)", "Line and equipment sizing"],
        ["Fuel available at site", "Burner and energy concept"],
      ],
      note: "Dryer and screen sizing are calculated from your ore samples; moisture measurement of representative samples is recommended.",
    },
  ],
  faq: [
    {
      q: "Which minerals do you have experience with?",
      a: "Silica sand, calcite, perlite and feldspar lines are our core references in mineral processing, alongside general crushed stone and recycled mineral applications.",
    },
    {
      q: "Can you dry sand to very low moisture for glass or foundry use?",
      a: "Yes — the dryer and cooling/handling chain are designed for the specification your customer requires; the target moisture is a design input we commit to.",
    },
    {
      q: "How do you handle the dust side of mineral drying?",
      a: "With cyclone pre-separation and pulse-jet filters sized for the dryer's air data; recovered fines are returned or collected as a by-product depending on your product rules.",
    },
  ],
  related: ["rotaryDryer", "screeningSystems", "crushers", "chainConveyor", "dustCollection"],
  schemaType: "Service",
};

export const sludgeDrying: IntlPageContent = {
  meta: {
    title: "Sludge Drying Systems | Municipal & Industrial Sludge",
    description:
      "Thermal sludge drying lines with rotary dryers: volume reduction, sanitisation and recovery routes for municipal and industrial sludge. By Pro Makina.",
  },
  breadcrumbLabel: "Sludge Drying Systems",
  hero: {
    h1: "Sludge Drying Systems — Volume Down, Options Up",
    intro:
      "Dewatered sludge is still mostly water: transporting and disposing of it means paying for water. Thermal drying cuts the mass to a fraction, sanitises the product and opens recovery routes — from soil-related uses to co-incineration. Pro Makina builds complete sludge drying lines around rotary drum dryers adapted for sticky materials.",
    image: { src: "/images/atik su camuru/sucamuru1.jpg", alt: "Sludge drying system with rotary dryer by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "The Sticky-Phase Problem — and How We Solve It",
      paragraphs: [
        "Sludge passes through a glue-like consistency range as it dries, where it cakes on surfaces and blocks conventional dryers. Our lines manage this with back-mixing: dried product is blended into the wet feed, shifting the mixture past the sticky phase before it enters the drum. Feed screws, flight design and drum internals are specified for sludge, not adapted from sand dryers.",
        "The air circuit is equally critical: sludge drying air carries dust, moisture and odour. Cyclones recover solids, condensation is prevented by temperature management, and exhaust air treatment — scrubber or biofilter — is included in the design where the site requires it.",
      ],
    },
    {
      type: "bullets",
      heading: "Sludge Types We Process",
      items: [
        "Municipal wastewater treatment sludge (dewatered)",
        "Food industry treatment sludge",
        "Paper and textile industry sludge",
        "Biogas digestate after separation",
      ],
    },
    {
      type: "cards",
      heading: "Line Building Blocks",
      items: [
        { title: "Sludge feeding", text: "Silos, pumps and screws designed for dewatered sludge consistency." },
        { title: "Back-mixing system", text: "Dry product recycle that carries the feed past the sticky phase." },
        { title: "Rotary drum dryer", text: "Sludge-specific flights, drive reserves and access for cleaning." },
        { title: "Air treatment", text: "Cyclone recovery, dust filtration and odour treatment as required." },
        { title: "Product handling", text: "Cooling, storage and loadout of the dried granulate." },
        { title: "Heat source options", text: "Natural gas, biogas or available waste heat integrated into the balance." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Sludge Line Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Sludge origin and analysis", "Corrosion, odour and safety concept"],
        ["Dry solids content in / target", "Evaporation load and back-mixing ratio"],
        ["Daily sludge quantity", "Line capacity and buffer sizing"],
        ["Available heat source", "Burner or heat-integration design"],
        ["Dried product destination", "Product handling and quality targets"],
      ],
      note: "Sludge behaviour varies strongly between plants; analyses of your actual sludge are the design basis.",
    },
  ],
  faq: [
    {
      q: "What dry solids content can the line reach?",
      a: "The target is a design input — lines are engineered for the dryness your disposal or recovery route requires, verified during commissioning against the agreed sludge analysis.",
    },
    {
      q: "Can biogas or waste heat be used for drying?",
      a: "Yes. Biogas firing and waste heat integration are common configurations; the heat balance in the proposal shows the achievable capacity with your heat source.",
    },
    {
      q: "How is odour handled?",
      a: "Through enclosed equipment, controlled air routing and exhaust treatment (scrubber or biofilter) specified according to your site's permit conditions.",
    },
  ],
  related: ["rotaryDryer", "screwConveyor", "dustCollection", "compostPlants", "recycling"],
  schemaType: "Service",
};

export const chemicalProcess: IntlPageContent = {
  meta: {
    title: "Chemical & Process Plants | Preparation, Dosing, Mixing Lines",
    description:
      "Reactor-based chemical preparation lines: dissolving, dosing, mixing and storage systems in stainless and carbon steel. Engineered by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Chemical & Process Plants",
  hero: {
    h1: "Chemical Preparation and Process Plants",
    intro:
      "From liquid fertilizer to cleaning chemicals, preparation processes share the same backbone: accurate dosing, controlled dissolving and mixing, safe storage and clean filling. Pro Makina engineers these lines with reactors, tanks, pumps, piping and automation delivered as one scope.",
    image: { src: "/images/01-genel/proses1.png", alt: "Chemical process plant with reactors and tanks by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Line Types We Deliver",
      items: [
        { title: "Liquid preparation lines", text: "Dissolving and mixing lines for liquid fertilizer and chemical products." },
        { title: "Reactor production units", text: "Agitated, jacketed reactors for reaction-controlled recipes." },
        { title: "Acid/alkali dosing systems", text: "Safe dosing and neutralisation systems with appropriate materials." },
        { title: "Homogenisation plants", text: "Mixing and recirculation systems for uniform product quality." },
        { title: "Dissolving and formulation", text: "Powder-to-liquid lines with controlled solids feeding." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Safety and Materials First",
      paragraphs: [
        "Chemical lines are defined by their media: corrosivity dictates stainless grades or coatings, exothermic steps dictate cooling and interlocks, and operator safety dictates containment, venting and washing provisions. These decisions are engineering inputs on day one — our proposals state the material selection and safety measures per process step.",
        "Automation carries the recipe: dosing sequences, temperature ramps and interlocks are programmed and documented, with batch records available for quality systems. Manual, semi-automatic and fully automatic execution levels are quoted according to your operation.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Process Line Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Recipes and media data", "Materials, sealing and safety concept"],
        ["Batch sizes and daily output", "Vessel volumes and line configuration"],
        ["Temperature/pressure requirements", "Jacket, insulation and code design"],
        ["Utility situation at site", "Heating, cooling and air services"],
      ],
      note: "Media safety data sheets are part of the design basis for every chemical project.",
    },
  ],
  faq: [
    {
      q: "Do you build lines for corrosive media?",
      a: "Yes — with 304/316 stainless steel or engineered coatings selected per medium, including gaskets, pumps and instrumentation compatible with the chemistry.",
    },
    {
      q: "Can you extend an existing chemical plant?",
      a: "Yes. After a site survey we integrate new reactors, dosing or storage into the existing process and control system with minimal production interruption.",
    },
  ],
  related: ["reactorsTanks", "dosingSystems", "fertilizerPlants", "services"],
  schemaType: "Service",
};

export const recycling: IntlPageContent = {
  meta: {
    title: "Recycling & Waste Management Plants | Shredding, Screening, Separation",
    description:
      "Shredding, screening and separation lines preparing municipal and industrial waste for recovery. Plant engineering by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Recycling & Waste Management",
  hero: {
    h1: "Recycling and Waste Management Plants",
    intro:
      "Recovery starts with preparation: size reduction, classification and separation turn mixed waste into defined material streams. Pro Makina builds shredding, screening and conveying lines for municipal and industrial waste — engineered around your input composition and the products you sell.",
    image: { src: "/images/01-genel/geridonusum1.jpg", alt: "Recycling plant with shredding and screening by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Line Building Blocks",
      items: [
        { title: "Shredding", text: "Low-speed, high-torque shredders opening bags and reducing bulky waste." },
        { title: "Trommel screening", text: "Drum screens splitting waste into size fractions for further processing." },
        { title: "Separation integration", text: "Magnets and sorting equipment integrated into the material flow." },
        { title: "Conveying network", text: "Belts and chain conveyors connecting the process with dust control." },
        { title: "Organics processing", text: "Composting or drying of separated organic fractions." },
        { title: "Final product handling", text: "Storage, loading and baling interfaces for recovered streams." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Designed Around the Waste You Actually Receive",
      paragraphs: [
        "Waste is the least standardised raw material there is: composition swings by season, source and collection system. Robust plant design therefore starts with your real input data and keeps buffers, bypasses and access for cleaning in the layout — a line that only works on paper-perfect waste stops weekly.",
        "Where the organic fraction is significant, we connect the recycling line to composting or drying technology, turning a disposal cost into a product stream — see our compost plant solutions.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for a Recycling Line Proposal",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Waste type and composition", "Machine selection and line routing"],
        ["Daily input tonnage", "Capacity and buffer design"],
        ["Target output streams", "Screening and separation configuration"],
        ["Site and building constraints", "Layout and conveying design"],
      ],
      note: "Input composition analyses — even approximate — significantly improve the reliability of the line design.",
    },
  ],
  faq: [
    {
      q: "Do you supply single machines for existing sorting plants?",
      a: "Yes — shredders, trommel screens and conveyors are supplied individually with mechanical and control interfaces matched to your line.",
    },
    {
      q: "Can the organic fraction be processed on site?",
      a: "Yes. Separated organics can go into drum composting or drying lines we design as part of the same plant, closing the loop towards a sellable product.",
    },
  ],
  related: ["crushers", "screeningSystems", "compostPlants", "conveying", "sludgeDrying"],
  schemaType: "Service",
};
