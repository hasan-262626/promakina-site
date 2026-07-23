import type { IntlPageContent } from "../types";

export const plantSolutions: IntlPageContent = {
  meta: {
    title: "Plant Solutions | Compost, Sludge Drying and RDF Lines",
    description:
      "Explore Pro Makina plant solutions for composting, manure and agricultural waste processing, sludge drying, sludge-to-compost conversion and RDF preparation.",
  },
  breadcrumbLabel: "Plant Solutions",
  hero: {
    h1: "Plant Solutions Built Around Real Waste Streams",
    intro:
      "Some projects need more than a sector overview and more than a single machine page. This plant-solutions layer focuses on commercial investment pages: how the line is configured, which waste streams it accepts, and which design data we need to build the right plant.",
    image: {
      src: "/images/01-genel/proses1.png",
      alt: "Industrial plant solutions for composting, sludge drying and RDF preparation",
    },
  },
  childLinks: [
    {
      key: "compostPlantSolution",
      title: "Compost Plants",
      text: "Turnkey composting plants for mixed organic, manure and agricultural waste streams.",
    },
    {
      key: "animalWasteCompostPlant",
      title: "Animal Waste Compost Plants",
      text: "Controlled composting lines for cattle, poultry and mixed livestock manure.",
    },
    {
      key: "agriculturalWasteCompostPlant",
      title: "Agricultural Waste Compost Plants",
      text: "Preparation and composting lines for pruning waste, straw, husk and greenhouse residues.",
    },
    {
      key: "organicWastePlant",
      title: "Organic Waste Processing Plants",
      text: "Plants that stabilise municipal and industrial organic fractions with sorting and composting steps.",
    },
    {
      key: "sludgeDryingPlantSolution",
      title: "Sludge Drying Plants",
      text: "Thermal drying lines that reduce sludge mass and create a manageable final product.",
    },
    {
      key: "sludgeToCompostPlant",
      title: "Sludge-to-Compost Plants",
      text: "Projects combining sludge with structural organics to produce a controlled compost blend.",
    },
    {
      key: "rdfPlantSolution",
      title: "RDF Preparation Plants",
      text: "Shredding, screening and drying concepts that prepare alternative fuel for cement plants.",
    },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Where These Pages Fit",
      paragraphs: [
        "Our industry pages explain the broader process logic. Plant solution pages go one step further and answer commercial project questions: what enters the line, how the process is staged, and which equipment blocks define the investment.",
        "Use these pages when your project starts from a waste stream and a business goal rather than from a single machine shortlist.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Design Inputs We Review",
      items: [
        "Waste type, daily tonnage and moisture range",
        "Target product: compost, dried product, RDF or reusable fraction",
        "Available building footprint and operating regime",
        "Permit constraints around odour, dust and emissions",
        "Expected automation level and utility situation",
      ],
    },
  ],
  faq: [
    {
      q: "Do these pages represent standard plant models?",
      a: "No. They are commercial solution pages showing typical process architecture. Final equipment sizing is always based on your waste analyses, tonnage and site constraints.",
    },
    {
      q: "Can Pro Makina supply a single machine instead of the full plant?",
      a: "Yes. We can quote individual equipment items, equipment packages or full turnkey scope depending on how your project is structured.",
    },
  ],
  related: ["services", "sectors", "machines", "contact"],
  schemaType: "CollectionPage",
};

export const compostPlantSolution: IntlPageContent = {
  meta: {
    title: "Compost Plant Installation | Turnkey Composting Lines",
    description:
      "Turnkey compost plant solutions for mixed organic, manure and agricultural waste streams, including preparation, intensive composting, maturation and screening.",
  },
  breadcrumbLabel: "Compost Plants",
  hero: {
    h1: "Turnkey Compost Plant Installation",
    intro:
      "A compost plant is not only a drum, screen or conveyor arrangement. It is a recipe, aeration, retention-time and odour-control problem solved as one process. Pro Makina designs composting plants around your actual waste mix, daily tonnage and final product target.",
    image: { src: "/images/kompost/kompost1.jpg", alt: "Compost plant with preparation and refining equipment" },
  },
  sections: [
    {
      type: "cards",
      heading: "Typical Process Stages",
      items: [
        { title: "Receiving and pre-sorting", text: "Waste intake, removal of unwanted objects and controlled buffer storage." },
        { title: "Recipe preparation", text: "Balancing moisture, structure material and carbon-to-nitrogen ratio before intensive composting." },
        { title: "Intensive composting", text: "Drum or enclosed biological stage where temperature and aeration are actively managed." },
        { title: "Maturation and screening", text: "Post-rotting, trommel screening and recycle management for a stable final product." },
      ],
    },
    {
      type: "bullets",
      heading: "Waste Streams Commonly Evaluated",
      items: [
        "Cattle, sheep and poultry manure",
        "Green waste, pruning and landscape residues",
        "Market and food-industry organics",
        "Municipal organic fraction after sorting",
        "Blends of sludge and structural organic additives where permitted",
      ],
    },
    {
      type: "table",
      heading: "Data Needed for a Proposal",
      columns: ["Input", "Why it matters"],
      rows: [
        ["Daily tonnage", "Defines reception, biological volume and refining capacity."],
        ["Waste analyses", "Sets recipe, retention time and odour-control requirements."],
        ["Target product", "Determines whether the line ends at compost or continues to drying / granulation."],
        ["Site limits", "Affects enclosure, traffic flow and air-treatment scope."],
      ],
      note: "Compost plants are engineered from real waste data; generic tonnage-only sizing is unreliable.",
    },
  ],
  faq: [
    {
      q: "Can a compost plant also produce granular fertilizer?",
      a: "Yes. Mature compost can be dried and granulated if the market requires a more transportable product format.",
    },
    {
      q: "How is odour controlled?",
      a: "Through closed receiving points, controlled aeration, air collection and treatment systems such as biofilters or scrubbers where required.",
    },
  ],
  related: ["compostPlants", "compostDrum", "screeningSystems", "plantSolutions", "contact"],
  schemaType: "Service",
};

function buildPlantPage(
  breadcrumbLabel: string,
  title: string,
  description: string,
  intro: string,
  image: IntlPageContent["hero"]["image"],
  cards: { title: string; text: string }[],
  bullets: string[],
  rows: [string, string][],
  related: IntlPageContent["related"],
): IntlPageContent {
  return {
    meta: { title, description },
    breadcrumbLabel,
    hero: { h1: breadcrumbLabel, intro, image },
    sections: [
      { type: "cards", heading: "Plant Scope", items: cards },
      { type: "bullets", heading: "Key Engineering Questions", items: bullets },
      {
        type: "table",
        heading: "Proposal Inputs",
        columns: ["Input", "Engineering impact"],
        rows,
        note: "Final line layout and equipment sizing are confirmed against your real feed material and operating targets.",
      },
    ],
    faq: [
      {
        q: "Can this solution be phased?",
        a: "Yes. Receiving, core process and final-product handling can be staged when the project budget or permit sequence requires phased delivery.",
      },
      {
        q: "Do you provide layout and utility definition?",
        a: "Yes. Our scope can include line layout, equipment list, utility basis, automation concept and commissioning plan.",
      },
    ],
    related,
    schemaType: "Service",
  };
}

export const animalWasteCompostPlant = buildPlantPage(
  "Animal Waste Compost Plants",
  "Animal Waste Compost Plants | Manure Processing Solutions",
  "Controlled composting plants for cattle, poultry and mixed livestock manure, from receiving and mixing to screening and product handling.",
  "Livestock manure projects are driven by moisture, fibre structure, odour control and seasonal flow fluctuations. We configure animal-waste compost plants so feeding, structure-material addition, intensive composting and final screening work together as one stable line.",
  { src: "/images/01-genel/evselkompost1.jpg", alt: "Animal waste composting line" },
  [
    { title: "Receiving and bunker feeding", text: "Manure intake, short-term storage and controlled dosing to the preparation step." },
    { title: "Structure adjustment", text: "Adding straw, husk or other carbon sources to improve porosity and biology." },
    { title: "Intensive composting", text: "Thermophilic phase in a drum or enclosed system with controlled residence time." },
    { title: "Refining and dispatch", text: "Screening, recycle and stock management for bulk or packaged product." },
  ],
  [
    "What is the solids content and seasonality of the manure stream?",
    "Which structure materials are available locally?",
    "Is the final target raw compost, refined product or granular fertilizer feedstock?",
    "How strict are odour and enclosed-building requirements on site?",
  ],
  [
    ["Daily manure tonnage", "Drives bunker, mixer and composting volume."],
    ["Available additives", "Shapes recipe stability and aeration behaviour."],
    ["Target product form", "Sets the need for screening, drying or bagging."],
    ["Site logistics", "Defines traffic, storage and maintenance access."],
  ],
  ["compostPlantSolution", "compostDrum", "plantSolutions", "contact"],
);

export const agriculturalWasteCompostPlant = buildPlantPage(
  "Agricultural Waste Compost Plants",
  "Agricultural Waste Compost Plants | Green and Crop Residue Processing",
  "Plant solutions for pruning waste, straw, husk, greenhouse residue and fibrous agricultural organics, including size reduction, blending and composting.",
  "Agricultural residues vary widely in fibre length, moisture and density. We design these plants around the physical behaviour of the material so shredding, mixing and composting remain controllable instead of turning into a handling bottleneck.",
  { src: "/images/kompost/kompost2.webp", alt: "Agricultural waste composting process" },
  [
    { title: "Pre-shredding", text: "Length reduction for branches, stems, husk and fibrous residues." },
    { title: "Moisture balancing", text: "Blending dry and wet fractions to reach a biologically workable recipe." },
    { title: "Composting core", text: "Controlled decomposition in drum or enclosed biological sections." },
    { title: "Screening and recycle", text: "Returning oversize structure material and refining the compost fraction." },
  ],
  [
    "How fibrous and bulky is the incoming agricultural waste?",
    "Will the plant run continuously or by harvest season campaigns?",
    "Is co-processing with manure or municipal organics planned?",
    "Does the product need extra drying before storage or sale?",
  ],
  [
    ["Residue types", "Determines shredding duty and mixer configuration."],
    ["Operating regime", "Impacts buffer sizing and labour concept."],
    ["Moisture range", "Sets recipe-control equipment and airflow strategy."],
    ["Product target", "Defines refining and optional drying scope."],
  ],
  ["compostPlantSolution", "screeningSystems", "rdfPlantSolution", "contact"],
);

export const organicWastePlant = buildPlantPage(
  "Organic Waste Processing Plants",
  "Organic Waste Processing Plants | Municipal and Industrial Organics",
  "Processing plants for sorted organic fractions, food waste and industrial organics with preparation, contamination control and composting stages.",
  "Municipal and industrial organics require more than biological treatment. They also need impurity control, stable feeding and a site layout that separates dirty intake from finished product. Our plant layouts combine these operational realities with the composting core.",
  { src: "/images/01-genel/geridonusum1.jpg", alt: "Organic waste processing plant" },
  [
    { title: "Receiving and sorting", text: "Separating unwanted fractions before they reach the biological process." },
    { title: "Preparation and blending", text: "Equalising moisture and structure to stabilise the composting stage." },
    { title: "Biological treatment", text: "Drum or enclosed composting designed for intensive stabilisation." },
    { title: "Refining and output", text: "Screened compost, reject handling and optional downstream product upgrade." },
  ],
  [
    "How much contamination is expected in the feed stream?",
    "Is the project municipal, commercial or mixed industrial organic waste?",
    "Are enclosed reception and odour treatment mandatory?",
    "Will reject streams need baling or transfer interfaces?",
  ],
  [
    ["Feed composition", "Defines sorting and reject-handling scope."],
    ["Odour constraints", "Affects enclosure and air-treatment design."],
    ["Reject ratio", "Changes conveyor, bunker and disposal layout."],
    ["Compost target", "Defines refining quality and storage design."],
  ],
  ["compostPlantSolution", "recycling", "plantSolutions", "contact"],
);

export const sludgeDryingPlantSolution = buildPlantPage(
  "Sludge Drying Plants",
  "Sludge Drying Plants | Thermal Volume Reduction Solutions",
  "Thermal sludge drying plants for municipal and industrial sludge, including feeding, back-mixing, drying, air treatment and dried-product handling.",
  "Sludge drying projects are defined by evaporation load, sticky-phase management and exhaust-air treatment. We design the line from dewatered sludge analysis so the feeding system, recycle ratio, dryer geometry and air circuit behave as one integrated thermal process.",
  { src: "/images/atik su camuru/sucamuru1.jpg", alt: "Sludge drying plant" },
  [
    { title: "Sludge feeding", text: "Bunkers, screws and dosing points built for dewatered sludge consistency." },
    { title: "Back-mixing loop", text: "Recycle of dry product to move the feed beyond the sticky phase." },
    { title: "Thermal drying", text: "Rotary dryer sized from evaporation load and target dryness." },
    { title: "Air and product handling", text: "Cyclones, filters, odour treatment, cooling and loadout." },
  ],
  [
    "What are inlet dry solids and target outlet dryness?",
    "Which heat source is available: natural gas, biogas or waste heat?",
    "Will the dried product be stored, pelletised or sent directly to recovery?",
    "What emission and odour limits apply on site?",
  ],
  [
    ["Sludge analysis", "Sets corrosion, odour and thermal design basis."],
    ["Daily sludge load", "Defines evaporator and buffer size."],
    ["Heat source", "Determines burner or recovery concept."],
    ["Final use route", "Shapes cooling, storage and discharge scope."],
  ],
  ["sludgeDrying", "rotaryDryer", "dustCollection", "plantSolutions", "contact"],
);

export const sludgeToCompostPlant = buildPlantPage(
  "Sludge-to-Compost Plants",
  "Sludge-to-Compost Plants | Sludge and Organic Additive Blends",
  "Plant concepts that combine suitable sludge streams with structural organic additives to produce a controlled compost blend where regulations allow.",
  "Some sludge projects are not best solved by drying alone. Where regulation and sludge quality allow, we build lines that combine sludge with structural organic materials, manage recipe stability and run the biological conversion under controlled composting conditions.",
  { src: "/images/kompost/kompost3.jpg", alt: "Sludge to compost blending and composting plant" },
  [
    { title: "Sludge acceptance review", text: "Checking legal route, sludge quality and contamination profile before design starts." },
    { title: "Recipe engineering", text: "Balancing sludge with carbon-rich structural materials and moisture control." },
    { title: "Controlled composting", text: "Biological conversion in enclosed or drum-assisted process stages." },
    { title: "Refining and quality control", text: "Screening, maturation and compliance-oriented final product management." },
  ],
  [
    "Which sludge analyses and legal use route are available?",
    "What structural organics can be blended reliably on site?",
    "Is the project focused on disposal reduction or product recovery?",
    "How will leachate, odour and covered storage be managed?",
  ],
  [
    ["Sludge quality", "Determines whether composting is an acceptable route."],
    ["Blend components", "Sets mixer, bunker and recipe-control scope."],
    ["Permit framework", "Shapes enclosure and monitoring requirements."],
    ["Product objective", "Defines maturation and refining depth."],
  ],
  ["sludgeDryingPlantSolution", "compostPlantSolution", "plantSolutions", "contact"],
);

export const rdfPlantSolution = buildPlantPage(
  "RDF Preparation Plants",
  "RDF Preparation Plants | Alternative Fuel Preparation Lines",
  "RDF preparation plants for municipal and industrial waste streams with shredding, screening, separation, optional drying and dispatch-ready final product handling.",
  "RDF projects start from the waste composition and from the final user's fuel specification. We build preparation lines that coordinate shredding, sizing, impurity removal, moisture reduction and stock/dispatch logic so the output matches the cement plant or recovery customer requirement.",
  { src: "/images/01-genel/geridonusum1.jpg", alt: "RDF preparation plant" },
  [
    { title: "Receiving and coarse sorting", text: "Separating non-processable items before they damage the main line." },
    { title: "Shredding and sizing", text: "Primary reduction and screen control for target particle size." },
    { title: "Metal and reject removal", text: "Preparation of a cleaner, more stable fuel fraction." },
    { title: "Drying and dispatch", text: "Optional moisture reduction, storage and loading concept for the final RDF stream." },
  ],
  [
    "Which waste streams and seasonal variations are expected?",
    "What particle size, moisture and contamination limits does the final user define?",
    "Will a drying step be required to improve calorific value?",
    "How should fire, dust and enclosed-building safety be managed?",
  ],
  [
    ["Waste composition", "Defines line robustness and sorting scope."],
    ["Fuel specification", "Sets screen, shredder and drying targets."],
    ["Required throughput", "Shapes parallel lines and buffer storage."],
    ["Building constraints", "Affects fire zoning, airflow and maintenance access."],
  ],
  ["recycling", "sludgeDryingPlantSolution", "crushers", "plantSolutions", "contact"],
);
