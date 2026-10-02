import type { SectorDetailText } from "../types";

type FertilizerKey =
  | "sectorLiquidOrganomineral"
  | "sectorLiquidNpk"
  | "sectorLiquidAminoAcid"
  | "sectorOrganicLiquid"
  | "sectorOrganicBiostimulant"
  | "sectorGranularOrganomineral"
  | "sectorGranularNpk"
  | "sectorGranularCompost"
  | "sectorPowderOrganomineral"
  | "sectorPowderNpk";

export const enFertilizerPages: Record<FertilizerKey, SectorDetailText> = {
  sectorLiquidOrganomineral: {
    meta: {
      title: "Liquid Organomineral Fertilizer Plant",
      description:
        "Liquid organomineral fertilizer plant: dissolving organic sources and mineral nutrients, reactor mixing, particle separation, storage and filling line design.",
    },
    label: "Liquid Organomineral",
    h1: "Liquid Organomineral Fertilizer Production Plant",
    lead:
      "We build batch production lines that keep organic matter and mineral nutrients stable in one solution and handle recipe changeovers.",
    introTitle: "One Line That Brings Organic and Mineral Components Into One Solution",
    intro: [
      "The main challenge in liquid organomineral fertilizer is keeping organic sources, such as humic and fulvic substances or hydrolyzed organic raw materials, in the same product as nitrogen, phosphorus, potassium and micronutrients without precipitation. That is why we design the line not only around tank volumes but around the addition sequence and dissolution behavior of the raw materials.",
      "Solid raw materials are first prepared in a dissolving tank, and the organic component is added under control in an agitated reactor. If the recipe requires pH adjustment, the dosing point and mixing time are built into the batch sequence. Undissolved particles are removed before filling, which reduces nozzle clogging and sediment at the bottom of the bottle.",
      "Whether the starting point is a new investment, adding organomineral products to an existing liquid fertilizer line or a capacity increase, we balance tank volumes, transfer lines, storage and filling capacity against each other.",
    ],
    imageAlts: [
      "Stainless steel reactor and tank group used in liquid organomineral fertilizer production",
      "Jerrycan filling line for liquid organomineral fertilizer",
    ],
    processTitle: "Liquid Organomineral Fertilizer Production Flow",
    processIntro:
      "The same steps are followed for every recipe; the duration and sequence of the steps are defined by raw material analysis and the target product.",
    steps: [
      { title: "Raw material intake and analysis", text: "The content and moisture of the organic source and mineral raw materials are checked, and the recipe is verified against this data." },
      { title: "Dissolving", text: "Solid mineral raw materials are dissolved in water or a carrier liquid in an agitated tank." },
      { title: "Adding the organic component", text: "The organic raw material is fed to the reactor in the defined order and at a controlled rate while foaming and precipitation are monitored." },
      { title: "pH and quality control", text: "pH is adjusted if the recipe requires it, and the batch is approved after sampling." },
      { title: "Particle separation", text: "Undissolved particles are removed by a screen or filter to obtain a clear product before filling." },
      { title: "Storage and filling", text: "The approved product goes to the storage tank and then to the jerrycan or IBC filling and labeling line." },
    ],
    machinesTitle: "Equipment Used in a Liquid Organomineral Fertilizer Line",
    machineNotes: {
      dissolutionTank: "Preparation tank where solid mineral raw materials are dissolved in water or a carrier liquid.",
      agitatedReactor: "Main production reactor where organic and mineral components are mixed in recipe order.",
      wetScreen: "Screening solution used to separate undissolved particles from the product before filling.",
      storageTank: "Storage tank where the approved batch is held and kept homogeneous before filling.",
      liquidFilling: "Filling line for bottles, jerrycans or IBC containers.",
      bottleLabeling: "Labeling of filled packages and printing of traceability information.",
    },
    faqTitle: "Frequently Asked Questions About Liquid Organomineral Fertilizer Plants",
    faqs: [
      { q: "Which organic sources can be used in liquid organomineral fertilizer?", a: "Humic-fulvic extracts, hydrolyzed plant or animal protein sources and suitable organic liquids can be used. The choice depends on product registration and the target analysis." },
      { q: "Why can organic and mineral components precipitate?", a: "Some mineral salts can interact with organic components and reduce solubility. Addition order, pH and mixing time are determined through recipe trials." },
      { q: "How is the plant capacity determined?", a: "Reactor and tank volumes are selected by evaluating the daily production target, batch time, number of product types and filling line speed together." },
      { q: "Can organomineral products be added to an existing liquid fertilizer line?", a: "It may be possible with additional tanks and dosing points if the existing reactor's mixing power, material and cleanability are suitable; this is confirmed by a site survey." },
      { q: "What does the plant need for product registration?", a: "Registration requirements vary by product type. On the plant side, batch records, sampling points and traceable labeling are planned." },
    ],
    cta: {
      title: "Request a quote for your liquid organomineral fertilizer plant",
      description: "Share your raw material list, target analysis and daily production target, and we will define the reactor, tank and filling capacity together.",
    },
  },

  sectorLiquidNpk: {
    meta: {
      title: "Liquid NPK Fertilizer Production Plant",
      description:
        "Liquid NPK fertilizer plant: dissolving, managing neutralization heat, storage, filling and labeling equipment for clear solution and suspension recipes.",
    },
    label: "Liquid NPK",
    h1: "Liquid NPK Fertilizer Production Plant",
    lead:
      "We design solution lines that produce nitrogen, phosphorus and potassium sources at the target analysis, without crystallization and with repeatable quality.",
    introTitle: "Process for Clear Solution and Suspension NPK Recipes",
    intro: [
      "In liquid NPK production, the order, temperature and concentration at which urea, phosphate and potassium sources are dissolved determine product stability. The temperature drops when urea dissolves, while neutralizing phosphoric acid with bases such as potassium hydroxide releases heat. That is why we select tanks and reactors together with the thermal behavior of the recipe.",
      "In clear solution recipes, the goal is to stay below the solubility limit to prevent crystallization in storage. In suspension recipes, mixing and storage design keep the solid phase from settling. For products stored in cold climates, the position of the storage tank and the need for insulation are also evaluated from the start.",
      "The process consists of dissolving, mixing, cooling if required, quality control, storage and filling. In recipes that use acids and bases, material selection, safe dosing and operator protection are part of the design.",
    ],
    imageAlts: [
      "Stainless steel dissolving tank used in liquid NPK fertilizer production",
      "Horizontal stainless steel tank storing liquid NPK solution",
    ],
    processTitle: "Liquid NPK Fertilizer Production Flow",
    processIntro: "The flow is applied with small differences depending on whether the recipe is a clear solution or a suspension.",
    steps: [
      { title: "Recipe and raw material preparation", text: "Raw materials are weighed for the target N-P-K ratio; if acids and bases are used, a safe dosing sequence is defined." },
      { title: "Dissolving", text: "Urea, phosphate and potassium sources are dissolved in water in an order that suits their dissolution behavior." },
      { title: "Neutralization and mixing", text: "In recipes containing acids and bases, the reaction is run at a controlled rate and the product is homogenized." },
      { title: "Temperature control", text: "Depending on reaction heat or the cooling effect, the product is brought to the target temperature in a cooling tank." },
      { title: "Quality control", text: "Density, pH and analysis are checked; clarity or suspension stability is verified." },
      { title: "Storage and filling", text: "The product is transferred from the storage tank to the filling and labeling line." },
    ],
    machinesTitle: "Equipment Used in a Liquid NPK Fertilizer Line",
    machineNotes: {
      dissolutionTank: "First process tank where urea, phosphate and potassium sources are dissolved.",
      agitatedReactor: "Reactor where acid-base neutralization and recipe mixing are carried out under control.",
      coolingTank: "Tank that cools the product heated by the reaction before filling.",
      storageTank: "Tank where the clear solution or suspension is stored before filling.",
      liquidFilling: "Line where liquid NPK products are filled into packages.",
      bottleLabeling: "Labeling the analysis and batch information on the package.",
    },
    faqTitle: "Frequently Asked Questions About Liquid NPK Fertilizer Plants",
    faqs: [
      { q: "What is the difference between clear solution and suspension liquid NPK?", a: "In a clear solution all components are dissolved. In a suspension part of the solid phase is kept suspended, which changes mixing and storage design." },
      { q: "Why does liquid NPK crystallize in storage?", a: "If the concentration is close to the solubility limit, salts can crystallize when the temperature drops. Recipe concentration and storage conditions should be evaluated together." },
      { q: "What should be considered in a line working with phosphoric acid?", a: "Acid-resistant materials, controlled dosing, removal of neutralization heat and operator safety are addressed together in the design." },
      { q: "Can different NPK formulas be produced on the same line?", a: "Yes. If the number of tanks, intermediate cleaning time and storage tank arrangement are planned for product changeovers, several formulas can be produced." },
      { q: "What does automation bring to a liquid NPK line?", a: "Recording weighing, dosing sequence and temperature improves batch repeatability and reduces operator error." },
    ],
    cta: {
      title: "Request a quote for your liquid NPK fertilizer line",
      description: "Share your target formulas, raw materials and filling packaging, and we will calculate dissolving and storage capacity together.",
    },
  },

  sectorLiquidAminoAcid: {
    meta: {
      title: "Amino Acid Liquid Fertilizer Production Plant",
      description:
        "Amino acid liquid fertilizer plant: preparing hydrolyzed protein raw material, temperature-controlled mixing, micronutrient addition, storage and filling solutions.",
    },
    label: "Liquid Amino Acid",
    h1: "Amino Acid Liquid Fertilizer Production Plant",
    lead:
      "We build formulation lines with temperature and foam control that produce amino acid liquid fertilizers from hydrolyzed protein sources.",
    introTitle: "From Hydrolyzed Protein Source to a Stable Liquid Product",
    intro: [
      "The main raw material of amino acid liquid fertilizers is an amino acid mixture obtained by hydrolyzing protein of plant or animal origin. Most plants buy ready-made hydrolysate and formulate it; in some projects hydrolysis is carried out on site. The chosen model directly changes the reactor type, material selection and investment scope.",
      "During formulation, the amino acid source is mixed under temperature control with micronutrients and other additives if required. Because protein-based raw materials tend to foam and cause odor, agitator type, addition rate and ventilation are especially important on this line.",
      "If hydrolysis will be done on site, the method (enzymatic or chemical), operating temperature and pressure are clarified at the start of the project, and the reactor and heating-cooling systems are selected accordingly. The formulation line is completed with storage, filling and labeling.",
    ],
    imageAlts: [
      "Stainless steel reactor used in amino acid liquid fertilizer formulation",
      "Jacketed stainless steel process tanks for amino acid liquid fertilizer",
    ],
    processTitle: "Amino Acid Liquid Fertilizer Production Flow",
    processIntro: "The first step differs depending on whether ready-made hydrolysate is used or hydrolysis is performed on site.",
    steps: [
      { title: "Intake of protein source or hydrolysate", text: "The amino acid content and origin of the raw material are verified by documents and analysis." },
      { title: "Hydrolysis (project dependent)", text: "If on-site hydrolysis is used, the reaction is run under temperature control in a reactor suited to the chosen method." },
      { title: "Cooling and settling", text: "The product is brought to formulation temperature; settled solids are removed if necessary." },
      { title: "Formulation", text: "The amino acid source, micronutrients and additives are mixed with foam control." },
      { title: "Quality control", text: "Free amino acids, pH and density are checked and the batch is approved." },
      { title: "Storage and filling", text: "The product is sent from the storage tank to the filling and labeling line." },
    ],
    machinesTitle: "Equipment Used in an Amino Acid Liquid Fertilizer Line",
    machineNotes: {
      agitatedReactor: "Formulation reactor where the amino acid source, micronutrients and additives are mixed with foam control.",
      pressureReactor: "Reactor type considered if the on-site hydrolysis method requires pressure.",
      coolingTank: "Tank that brings the product to filling temperature after hydrolysis or formulation.",
      storageTank: "Storage tank where the approved product is held before filling.",
      liquidFilling: "Filling the amino acid product into bottles and jerrycans.",
      bottleLabeling: "Labeling packages with content and batch information.",
    },
    faqTitle: "Frequently Asked Questions About Amino Acid Liquid Fertilizer Plants",
    faqs: [
      { q: "Is a hydrolysis plant required to produce amino acid fertilizer?", a: "No. A formulation line using ready-made hydrolysate is a simpler investment; if hydrolysis is done on site, the reactor and thermal system scope grows." },
      { q: "Are lines for animal and plant-based amino acids different?", a: "The core equipment is similar, but odor load, foaming and raw material acceptance criteria vary by source and are reflected in the design." },
      { q: "How is foaming controlled during production?", a: "Agitator type and speed, the addition point and rate of the raw material and, if necessary, antifoam dosing are adjusted together." },
      { q: "Can micronutrients be added to the product?", a: "Yes. After the solubility of micronutrients and their compatibility with amino acids are confirmed by recipe trials, they are included in the formulation step." },
      { q: "How are tank and reactor materials selected?", a: "The stainless steel grade and gasket material are defined by considering the raw material's pH, operating temperature and cleaning method." },
    ],
    cta: {
      title: "Request a quote for your amino acid liquid fertilizer plant",
      description: "Tell us whether you will buy hydrolysate or produce it on site and share your production target, and we will clarify the process scope together.",
    },
  },

  sectorOrganicLiquid: {
    meta: {
      title: "Organic Liquid Fertilizer Production Plant",
      description:
        "Organic liquid fertilizer plant: pre-separation of organic raw material, extraction and mixing, screening of fibrous particles, stable storage and jerrycan filling.",
    },
    label: "Organic Liquid Fertilizer",
    h1: "Organic Liquid Fertilizer Production Plant",
    lead:
      "We build lines that turn plant and animal-based organic raw materials into liquid fertilizer without particle or sediment problems.",
    introTitle: "From Organic Raw Material to a Fillable Liquid Product",
    intro: [
      "Raw materials for organic liquid fertilizers can be leonardite-based humic extracts, vinasse, plant extracts or hydrolyzed organic sources. Because these materials can contain a lot of fiber, sand and insoluble particles, pre-separation and screening are more decisive than in mineral fertilizer lines.",
      "Particle size is kept under control so that the product does not clog drip irrigation and spraying equipment in the field. Due to the organic content, foaming, viscosity changes and microbial spoilage in storage are also considered in the process and storage design.",
      "For products intended for organic farming, input eligibility and certification requirements are the producer's responsibility; on the plant side, raw material segregation, cleanable surfaces and batch traceability are planned to make compliance easier.",
    ],
    imageAlts: [
      "Stainless steel process tank used in organic liquid fertilizer production",
      "Bottle filling and capping line for organic liquid fertilizer",
    ],
    processTitle: "Organic Liquid Fertilizer Production Flow",
    processIntro: "The focus of the flow is the reliable removal of particles and sediment from the organic raw material before filling.",
    steps: [
      { title: "Raw material intake", text: "The source, solids content and foreign matter of the organic raw material are checked." },
      { title: "Pre-screening", text: "Fibers, sand and coarse particles are removed by a screen before entering the process tank." },
      { title: "Extraction and dissolving", text: "The organic component is dissolved or extracted in water or a suitable medium." },
      { title: "Mixing and standardization", text: "The product is homogenized in the reactor; organic matter and pH are adjusted to target." },
      { title: "Final screening and settling", text: "Remaining fine particles are removed and the product is left to settle for sediment control." },
      { title: "Storage and filling", text: "The approved product is transferred from the storage tank to the jerrycan and bottle filling line." },
    ],
    machinesTitle: "Equipment Used in an Organic Liquid Fertilizer Line",
    machineNotes: {
      wetScreen: "Screen that separates fibers and coarse particles from the organic raw material liquid.",
      dissolutionTank: "Tank where the organic component is dissolved or extracted in water.",
      agitatedReactor: "Agitated reactor where the product is homogenized and pH is adjusted.",
      storageTank: "Tank where the settled and approved product is stored before filling.",
      liquidFilling: "Filling organic liquid fertilizer into bottles and jerrycans.",
      bottleLabeling: "Labeling packages with content and batch information.",
    },
    faqTitle: "Frequently Asked Questions About Organic Liquid Fertilizer Plants",
    faqs: [
      { q: "Which raw materials are organic liquid fertilizers made from?", a: "Humic-fulvic extracts, vinasse, plant extracts and hydrolyzed organic sources are commonly used. The choice depends on product registration and target content." },
      { q: "How is sediment prevented in organic liquid fertilizer?", a: "Insoluble particles are removed through pre-screening, final screening and settling. Recipe stability is verified by storage trials." },
      { q: "Can the product spoil in storage?", a: "Microbial activity can occur in products with organic content. Storage time, tank hygiene and recipe preservation should be evaluated together." },
      { q: "Is the plant built differently for certified organic products?", a: "Certification concerns the inputs; on the plant side, raw material segregation, cleanable equipment and batch traceability make compliance easier." },
      { q: "Can organic products be made on an existing mineral liquid fertilizer line?", a: "Yes, if screening capacity, agitator type and cleanability are sufficient; the risk of cross-contamination during changeovers is evaluated separately." },
    ],
    cta: {
      title: "Request a quote for your organic liquid fertilizer plant",
      description: "Share your organic raw material, target product content and packaging type, and we will define screening, mixing and filling capacity together.",
    },
  },

  sectorOrganicBiostimulant: {
    meta: {
      title: "Organic Biostimulant Production Plant",
      description:
        "Organic biostimulant plant: precise additive dosing, mixing, changeover cleaning and small-pack filling for seaweed extract, humic substance and plant extract recipes.",
    },
    label: "Organic Biostimulant",
    h1: "Organic Biostimulant Production Plant",
    lead:
      "We build biostimulant lines that produce many small-batch recipes with precise additive dosing, easy cleaning and batch traceability.",
    introTitle: "Multi-Product, Small-Batch Biostimulant Production",
    intro: [
      "Biostimulant producers usually make many recipes in small batches from seaweed extracts, humic and fulvic acids, amino acids and plant extracts. This requires tanks of different volumes and a line suited to fast product changeovers rather than one large reactor.",
      "Accurate weighing of additives used at low ratios is critical for product consistency. Additive weighing, addition order and mixing time are therefore recorded. In recipes with heat-sensitive ingredients, mixing temperature and holding time are also controlled.",
      "To prevent cross-contamination during changeovers, tanks and lines are designed to be easy to drain and clean. On the filling side, filling and labeling equipment suited to small bottles and jerrycans with fast format changes is preferred.",
    ],
    imageAlts: [
      "Agitated stainless steel tanks of different volumes for organic biostimulant production",
      "Stainless steel process tanks and piping for biostimulant recipes",
    ],
    processTitle: "Organic Biostimulant Production Flow",
    processIntro: "The flow is set up so that many recipes can be produced on the same line without mixing and with full traceability.",
    steps: [
      { title: "Recipe and batch plan", text: "Products, batch sizes and changeover sequence are planned according to cleaning needs." },
      { title: "Precise additive weighing", text: "Low-ratio active ingredients and additives are prepared in a separate weighing unit." },
      { title: "Dissolving", text: "Solid extracts and additives are dissolved with their heat sensitivity in mind." },
      { title: "Mixing and standardization", text: "Ingredients are mixed in recipe order; pH and density are brought to target." },
      { title: "Quality approval and storage", text: "After sample approval, the product goes to a small-volume storage tank." },
      { title: "Filling, labeling and line cleaning", text: "The product is filled into small packages; the line is cleaned before the next recipe." },
    ],
    machinesTitle: "Equipment Used in an Organic Biostimulant Line",
    machineNotes: {
      microDosing: "Micro dosing system for accurate weighing of additives used at low ratios in the recipe.",
      dissolutionTank: "Small-volume preparation tank where solid extracts and additives are dissolved.",
      agitatedReactor: "Reactor where biostimulant ingredients are mixed in recipe order.",
      storageTank: "Small-volume storage tanks that hold different products without mixing.",
      liquidFilling: "Filling line suited to small bottles and jerrycans with fast format changes.",
      bottleLabeling: "Correct labeling of batch and product information in multi-product production.",
    },
    faqTitle: "Frequently Asked Questions About Organic Biostimulant Plants",
    faqs: [
      { q: "What is the difference between a biostimulant plant and a liquid fertilizer plant?", a: "Biostimulant production involves many recipes, small batch volumes and low additive ratios, so weighing accuracy and changeover cleaning come first." },
      { q: "Should seaweed extract be produced on site or bought ready-made?", a: "Most producers use ready-made extract. If extraction is done on site, raw material preparation and extraction equipment are planned as a separate scope." },
      { q: "How is cross-contamination prevented during changeovers?", a: "Fully drainable tank bottoms, simple piping and a defined cleaning procedure reduce the risk of residue between products." },
      { q: "What is done for heat-sensitive ingredients?", a: "These ingredients are added at the final stage at a controlled temperature; if necessary, temperature is limited with jacketed tanks." },
      { q: "Which line is suitable for small-pack filling?", a: "Suitable filling and labeling equipment is selected after bottle sizes, hourly filling target and cap type are defined." },
    ],
    cta: {
      title: "Request a quote for your biostimulant production line",
      description: "Share your product portfolio, batch sizes and packaging formats, and we will plan the tank arrangement and filling line together.",
    },
  },

  sectorGranularOrganomineral: {
    meta: {
      title: "Granular Organomineral Fertilizer Plant",
      description:
        "Granular organomineral fertilizer plant: organic raw material preparation, mineral dosing, drum granulation, drying, cooling, screening and recycle loop design.",
    },
    label: "Granular Organomineral",
    h1: "Granular Organomineral Fertilizer Production Plant",
    lead:
      "We build drum granulation lines with controlled moisture and granule size that combine organic matter and mineral nutrients in the same granule.",
    introTitle: "Combining an Organic Base and Mineral Nutrients in One Granule",
    intro: [
      "Granular organomineral fertilizer is produced by granulating an organic base such as compost, leonardite or processed animal manure together with nitrogen, phosphorus and potassium sources. Since the moisture and fiber structure of organic raw materials are more variable than mineral fertilizers, the preparation and dosing steps at the start of the line determine granule quality.",
      "The organic raw material is first crushed and screened, then weighed with the mineral components and fed to the granulator drum. The moisture and binder needed for granulation are adjusted to the recipe. During drying, product temperature is kept under control because organic matter is heat-sensitive.",
      "Dried granules are cooled and screened. Oversize is crushed and undersize is returned directly to the granulator. Since the recycle ratio directly affects dryer and screen capacity, it is calculated together in the line design.",
    ],
    imageAlts: [
      "Granulator drum used in granular organomineral fertilizer production",
      "Rotary drying drum in a granular organomineral fertilizer line",
    ],
    processTitle: "Granular Organomineral Fertilizer Production Flow",
    processIntro: "The line runs as a continuous flow from organic raw material preparation to packaging.",
    steps: [
      { title: "Organic raw material preparation", text: "The organic base such as compost or leonardite is crushed, screened and its moisture adjusted if needed." },
      { title: "Weighing and dosing", text: "The organic base and mineral components are weighed continuously at the recipe ratio." },
      { title: "Granulation", text: "The mixture is granulated in the granulator drum with water, steam or a binder." },
      { title: "Drying", text: "Granules are dried to target moisture in a rotary dryer at a temperature that does not damage organic matter." },
      { title: "Cooling and screening", text: "The cooled product is screened; oversize is crushed and recycled with the undersize." },
      { title: "Packaging", text: "On-size granules are sent to the product bunker and packaging line." },
    ],
    machinesTitle: "Equipment Used in a Granular Organomineral Fertilizer Line",
    machineNotes: {
      hammerCrusher: "Hammer crusher that breaks lumps in the organic base and crushes oversize granules.",
      macroDosing: "Weighing and feeding organic and mineral components at the recipe ratio.",
      granulatorDrum: "Drum where the mixture is formed into granules with moisture or binder.",
      rotaryDryer: "Drum where granules are dried to target moisture at a temperature that protects organic matter.",
      coolingDrum: "Cooling hot granules from the dryer before screening and storage.",
      vibratingScreen: "Screen that separates product, oversize and undersize fractions.",
    },
    faqTitle: "Frequently Asked Questions About Granular Organomineral Fertilizer Plants",
    faqs: [
      { q: "Which organic bases are used in granular organomineral fertilizer?", a: "Mature compost, leonardite, processed animal manure and similar organic sources can be used. The choice depends on registration requirements and raw material continuity." },
      { q: "Is organic matter damaged during drying?", a: "High product temperature can affect organic matter. Drying gas and product outlet temperatures are therefore limited according to the recipe." },
      { q: "Why is the recycle ratio important?", a: "Undersize and crushed oversize return to the granulator; this load is added to dryer, elevator and screen capacity and changes the line sizing." },
      { q: "How can granule hardness be increased?", a: "Granule strength is improved by adjusting binder selection, granulation moisture, drying profile and the organic-mineral ratio together." },
      { q: "Can a powder organomineral line later be converted to granular?", a: "Granulator, dryer, cooler and screening equipment can be added while keeping existing weighing, mixing and packaging equipment; the layout is defined by a site survey." },
    ],
    cta: {
      title: "Request a quote for your granular organomineral fertilizer plant",
      description: "Share your organic base, mineral raw materials and hourly capacity target, and we will size the granulation and drying line together.",
    },
  },

  sectorGranularNpk: {
    meta: {
      title: "Granular NPK Fertilizer Production Plant",
      description:
        "Granular NPK fertilizer plant: complete line with raw material weighing, drum granulation, drying, cooling, screening, recycle and anti-caking coating steps.",
    },
    label: "Granular NPK",
    h1: "Granular NPK Fertilizer Production Plant",
    lead:
      "We build lines that turn nitrogen, phosphorus and potassium raw materials into strong, uniform granules that do not cake in storage.",
    introTitle: "Size, Strength and Storage Stability in Compound NPK Granules",
    intro: [
      "In granular NPK production, raw materials such as urea, ammonium sulfate, phosphates and potassium salts are weighed at the recipe ratio and granulated with water or steam in a granulator drum. Every granule carrying the same nutrient ratio is important to avoid segregation in the bag.",
      "Because some NPK raw materials are hygroscopic, drying, cooling and storage conditions directly affect the product's tendency to cake. The cooling drum brings the product down to storage temperature, and the coating drum applies an anti-caking coating to the granule surface.",
      "After screening, off-size granules are crushed and recycled. The recycle quantity and the capacity of the dryer, elevator and screen are calculated together; the bottleneck of the line usually depends on this balance.",
    ],
    imageAlts: [
      "Granulator drum used in granular NPK fertilizer production",
      "Cooling drum in a granular NPK fertilizer line",
    ],
    processTitle: "Granular NPK Fertilizer Production Flow",
    processIntro: "The line runs continuously from weighing to coating with a recycle loop.",
    steps: [
      { title: "Raw material weighing", text: "Nitrogen, phosphorus and potassium sources are fed at the recipe ratio by weigh belt feeders." },
      { title: "Granulation", text: "The mixture is granulated with water or steam in the granulator drum." },
      { title: "Drying", text: "Granules are dried in a rotary dryer to a moisture suitable for storage." },
      { title: "Cooling", text: "The hot product is brought down to storage temperature in the cooling drum." },
      { title: "Screening and recycle", text: "On-size product is separated; oversize is crushed and returns to the granulator with undersize." },
      { title: "Coating and packaging", text: "Granules are coated to reduce caking and then sent to packaging." },
    ],
    machinesTitle: "Equipment Used in a Granular NPK Fertilizer Line",
    machineNotes: {
      dosingBeltScale: "Continuous weighing and feeding of NPK raw materials at the recipe ratio.",
      granulatorDrum: "Drum where the raw material mixture is granulated with water or steam.",
      rotaryDryer: "Rotary drum where granules are dried to a moisture suitable for storage.",
      coolingDrum: "Cooling hot granules to reduce the risk of caking.",
      vibratingScreen: "Screen that separates on-size product and defines the recycle fractions.",
      coatingDrum: "Applying an anti-caking coating material to the granule surface.",
    },
    faqTitle: "Frequently Asked Questions About Granular NPK Fertilizer Plants",
    faqs: [
      { q: "What is the difference between granular NPK and blended NPK?", a: "In granular NPK every granule carries the same nutrient ratio. In blends different granules are mixed; if sizes differ, segregation can occur during handling." },
      { q: "Why do NPK granules cake in storage?", a: "Hygroscopic raw materials, high product temperature and pressure can cause caking. Sufficient drying, cooling and coating reduce this risk." },
      { q: "Is steam granulation necessary for every recipe?", a: "No. Steam makes granulation easier for some recipes; whether it is needed depends on the raw material mix and target granule quality." },
      { q: "Can different NPK formulas be produced on the same line?", a: "Yes. The dosing system and process settings are changed per formula, and emptying the line during changeovers is planned." },
      { q: "Is a dust collection system needed?", a: "Dryer and cooler exhaust air carries dust. Capturing it with cyclones and filters is necessary for both environmental requirements and product recovery." },
    ],
    cta: {
      title: "Request a quote for your granular NPK fertilizer line",
      description: "Share the formulas you want to produce and your hourly capacity target, and we will calculate the granulation, drying and recycle balance together.",
    },
  },

  sectorGranularCompost: {
    meta: {
      title: "Granular Compost (Organic Fertilizer) Plant",
      description:
        "Granular compost plant: screening and crushing mature compost, granulating it with a binder, low-temperature drying, cooling, screening and packaging steps.",
    },
    label: "Granular Compost Plants",
    h1: "Granular Compost (Organic Fertilizer) Plant",
    lead:
      "We build lines that turn mature compost into granular organic fertilizer that is easy to transport, store and spread by machine.",
    introTitle: "Turning Mature Compost Into a Granular Product",
    intro: [
      "A granular compost line starts after composting. The compost fed to granulation must be mature and stable; immature material can cause biological activity, odor and spoilage in storage inside the granule. Compost quality is therefore the first input of the line design.",
      "Compost is first screened to remove stones, plastics and coarse pieces, then crushed to a fine size. Granulation moisture and binder demand are adjusted to the fiber structure of the compost. If required, mineral nutrients can be added to the recipe to produce an organomineral product.",
      "Granules are dried at a controlled temperature to protect organic matter, then cooled and screened. If the compost plant and granulation line are built on the same site, the capacities of both lines and the storage areas are planned together.",
    ],
    imageAlts: [
      "Drum and cyclone system turning compost into granular organic fertilizer",
      "Rotary drying drum used in a granular compost line",
    ],
    processTitle: "Granular Compost Production Flow",
    processIntro: "The flow starts with the intake of mature compost and ends with packaged granular product.",
    steps: [
      { title: "Mature compost intake", text: "Compost maturity, moisture and foreign matter are checked." },
      { title: "Screening and crushing", text: "Foreign matter is removed in a trommel screen and compost is crushed to a fineness suitable for granulation." },
      { title: "Granulation", text: "Compost is granulated in the granulator drum, with mineral additives and binder if required." },
      { title: "Controlled drying", text: "Granules are dried to target moisture at a temperature that protects organic matter." },
      { title: "Cooling and screening", text: "The product is cooled and screened; off-size granules are recycled." },
      { title: "Packaging", text: "Granular compost is filled into bags or big bags." },
    ],
    machinesTitle: "Equipment Used in a Granular Compost Line",
    machineNotes: {
      trommelScreen: "Rotary screen separating stones, plastics and coarse pieces from mature compost.",
      hammerCrusher: "Crushing screened compost to a fine size for granulation.",
      granulatorDrum: "Drum where compost is formed into granules with binder and moisture.",
      rotaryDryer: "Drying granules at a temperature that protects organic matter.",
      coolingDrum: "Cooling dried granules before packaging.",
      vibratingScreen: "Separating on-size granules and defining the recycle.",
    },
    faqTitle: "Frequently Asked Questions About Granular Compost Plants",
    faqs: [
      { q: "Can any compost be granulated?", a: "Compost must be mature, stable and free of foreign matter for granulation. Immature compost can cause odor and spoilage in storage." },
      { q: "Is a binder required for granular compost?", a: "It depends on the compost's fiber structure and target granule strength. Binder type and ratio are defined through trial production." },
      { q: "What is the advantage of granular compost over powder compost?", a: "Granular product creates less dust, is easier to transport and store and can be applied more evenly with fertilizer spreaders." },
      { q: "Can mineral nutrients be added to granular compost?", a: "Yes. Mineral additives can be dosed before granulation to obtain an organomineral product; product registration requirements are then evaluated separately." },
      { q: "Can a compost plant and granulation line be built together?", a: "Yes. Composting, maturation and granulation capacities are balanced against each other, and intermediate storage areas are planned in the layout." },
    ],
    cta: {
      title: "Request a quote for your granular compost line",
      description: "Share the source, moisture and target product quantity of your compost, and we will define screening, granulation and drying capacity together.",
    },
  },

  sectorPowderOrganomineral: {
    meta: {
      title: "Powder Organomineral Fertilizer Plant",
      description:
        "Powder organomineral fertilizer plant: crushing the organic base, weighing and mixing mineral components, screening against segregation, dust collection and bagging.",
    },
    label: "Powder Organomineral",
    h1: "Powder Organomineral Fertilizer Production Plant",
    lead:
      "We build mixing lines that turn an organic base and mineral nutrients into homogeneous powder products packed without segregation.",
    introTitle: "A Homogeneous Organomineral Mix Without Granulation",
    intro: [
      "Powder organomineral fertilizer can be produced with a simpler investment than a granular line: the organic base, dried and crushed, is mixed with mineral components, screened and packed. Without granulation, drying and recycle, energy demand and line length are lower.",
      "Homogeneity is the key issue for this product. Differences in particle size and density between the organic base and mineral components can cause segregation during conveying and packing. Crushing fineness, mixing time and transfer distance after mixing are therefore evaluated together.",
      "In a powder line, dust emissions matter for both occupational safety and product loss. Crusher, screen and bagging points are connected to a dust collection system.",
    ],
    imageAlts: [
      "Silo and feeding system for powder organomineral fertilizer raw materials",
      "Bagging line for powder organomineral fertilizer",
    ],
    processTitle: "Powder Organomineral Fertilizer Production Flow",
    processIntro: "The flow is set up so that the homogeneous mix reaches packaging without segregating.",
    steps: [
      { title: "Organic base preparation", text: "The organic raw material is dried if needed, crushed and screened." },
      { title: "Component weighing", text: "The organic base and mineral components are weighed at the recipe ratio." },
      { title: "Mixing", text: "Components are homogenized in the mixing drum." },
      { title: "Check screening", text: "Lumps and coarse pieces in the mix are screened out." },
      { title: "Dust collection", text: "Dust from crushing, screening and filling points is captured in a filter." },
      { title: "Bagging", text: "The product is sent to the bagging machine over a short transfer to prevent segregation." },
    ],
    machinesTitle: "Equipment Used in a Powder Organomineral Fertilizer Line",
    machineNotes: {
      hammerCrusher: "Crushing the organic base to a fineness suitable for the mix.",
      macroDosing: "Weighing organic and mineral components at the recipe ratio.",
      mixingDrum: "Drum where components are blended into a homogeneous mix.",
      vibratingScreen: "Separating lumps and coarse pieces from the mix before packing.",
      pulseJetFilter: "Capturing dust from crushing, screening and filling points.",
      openMouthBagging: "Weighing and filling powder product into open-mouth bags.",
    },
    faqTitle: "Frequently Asked Questions About Powder Organomineral Fertilizer Plants",
    faqs: [
      { q: "What does a powder organomineral line offer compared to a granular line?", a: "Without granulation, drying and recycle, investment, energy and footprint requirements are lower." },
      { q: "How is segregation prevented in powder products?", a: "Component particle sizes are brought closer together, mixing time is verified and the transfer distance after mixing is kept short." },
      { q: "Does the organic base need to be dried?", a: "Drying is needed if the moisture of the organic raw material makes mixing and packing difficult. The decision is based on raw material analysis." },
      { q: "Can a powder line later be converted to a granular line?", a: "Yes. Granulation and drying equipment can be added while keeping the weighing, mixing and packaging equipment." },
      { q: "Is a dust collection system mandatory?", a: "Dust emissions create risks for occupational safety, the environment and product loss. Dust collection is recommended at crusher, screen and filling points." },
    ],
    cta: {
      title: "Request a quote for your powder organomineral fertilizer line",
      description: "Share your organic base, mineral components and packaging type, and we will define mixing and packaging capacity together.",
    },
  },

  sectorPowderNpk: {
    meta: {
      title: "Powder NPK Fertilizer Production Plant",
      description:
        "Powder NPK fertilizer plant: precise weighing of water-soluble crystalline raw materials, homogeneous mixing, moisture protection, dust collection and sealed packing.",
    },
    label: "Powder NPK",
    h1: "Powder NPK Fertilizer Production Plant",
    lead:
      "We build powder NPK lines that weigh water-soluble crystalline raw materials and micronutrients precisely, mix them and pack them without moisture pickup.",
    introTitle: "Weighing Accuracy in Water-Soluble Powder NPK Blends",
    intro: [
      "Powder NPK products, especially water-soluble types used in fertigation, are produced by mixing crystalline raw materials such as monoammonium phosphate, monopotassium phosphate, potassium nitrate and urea with micronutrients. Since there is no granulation, product quality depends directly on weighing accuracy and mix homogeneity.",
      "In recipes, high-ratio main components are weighed by macro dosing and low-ratio micronutrients by micro dosing. This separation prevents small-ratio components from deviating from target.",
      "Because some raw materials are hygroscopic, moisture control and short holding times are important in storage, mixing and packing areas. The product is filled into moisture-proof packaging, and dusty points are connected to a filter system.",
    ],
    imageAlts: [
      "Stainless steel bunker and feeding system for powder NPK raw materials",
      "Line packing powder NPK fertilizer into moisture-proof bags",
    ],
    processTitle: "Powder NPK Fertilizer Production Flow",
    processIntro: "The flow is set up so that crystalline raw materials are packed homogeneously, at precise ratios and without picking up moisture.",
    steps: [
      { title: "Raw material storage", text: "Crystalline raw materials are kept in bunkers and stores protected from moisture." },
      { title: "Macro component weighing", text: "Main NPK sources are weighed at the recipe ratio by macro dosing." },
      { title: "Micronutrient weighing", text: "Low-ratio micronutrients are weighed in a separate micro dosing unit." },
      { title: "Mixing", text: "All components are homogenized in the mixing drum." },
      { title: "Check screening and dust collection", text: "Lumps are removed, and dust at screening and filling points is captured in a filter." },
      { title: "Moisture-proof packing", text: "The product is filled into bags or big bags with a short holding time." },
    ],
    machinesTitle: "Equipment Used in a Powder NPK Fertilizer Line",
    machineNotes: {
      microDosing: "Precise weighing of micronutrients and low-ratio additives.",
      macroDosing: "Weighing main NPK raw materials at the recipe ratio.",
      mixingDrum: "Homogeneous mixing of crystalline raw materials and micronutrients.",
      vibratingScreen: "Removing lumps formed by moisture before packing.",
      pulseJetFilter: "Capturing dust at weighing, mixing and filling points.",
      bigBagFilling: "Weighing and filling powder NPK product into big bags.",
    },
    faqTitle: "Frequently Asked Questions About Powder NPK Fertilizer Plants",
    faqs: [
      { q: "How is water-soluble powder NPK produced?", a: "Crystalline NPK raw materials and micronutrients are weighed at the recipe ratio, mixed and filled into moisture-proof packaging. There is no granulation or drying step." },
      { q: "Why are micronutrients weighed separately?", a: "Low-ratio components cannot be weighed accurately on a large scale. A separate micro dosing unit prevents them from deviating from the target ratio." },
      { q: "Why does powder NPK cake?", a: "Some crystalline raw materials absorb moisture from the air. Dry storage, short holding times and moisture-proof packaging reduce the risk of caking." },
      { q: "How is mix homogeneity verified?", a: "Mixing time is verified by analyzing samples taken from different points and recorded in the production recipe." },
      { q: "Can different formulas be produced on the same line?", a: "Yes. Emptying and, if necessary, cleaning the weighing and mixing equipment during changeovers is planned." },
    ],
    cta: {
      title: "Request a quote for your powder NPK fertilizer line",
      description: "Share your formulas, number of components and packaging type, and we will define weighing, mixing and packaging capacity together.",
    },
  },
};
