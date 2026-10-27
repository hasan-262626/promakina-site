import type { DryerLocaleTexts } from "./index";
import { dryerTechnicalEn } from "./technical-en";

export const dryerPageEn: DryerLocaleTexts = {
  meta: {
    title: "Rotary Drum Dryer Manufacturer in Turkey | Sand & Minerals",
    description:
      "Turkey-based rotary drum dryer manufacturer: dryers and complete drying plants for silica sand, perlite, bentonite, kaolin, barite, other minerals and fertilizer.",
  },
  h1: "Rotary Dryer – Industrial Rotary Drum Dryer Manufacturing",
  sidebarEyebrow: "Machine Group",
  productCategory: "Industrial Rotary Dryer",
  labels: {
    sectionNav: "On this page",
    overviewEyebrow: "Overview",
    noteLabel: "Engineering note",
    processEyebrow: "Process Flow",
    productLine: "Product line",
    gasLine: "Hot gas line",
    scrollHint: "Scroll horizontally to view the full diagram.",
    applicationsEyebrow: "Applications",
    relatedSectors: "Related industries",
    designEyebrow: "Design & Manufacturing",
    galleryEyebrow: "Gallery",
    faqEyebrow: "FAQ",
    resourcesEyebrow: "Resources",
    relatedMachines: "Related machine groups:",
    ctaEyebrow: "Technical Quotation",
  },
  sectionNav: ["Overview", "Process Flow", "Applications", "Design & Manufacturing", "Gallery", "FAQ", "Get a Quote"],
  overview: {
    imageAlt: "Industrial rotary dryer and plant equipment",
    brand: "PRO MAKINA",
    tagline: "Rotary Drum Dryer",
    keyFacts: [
      { label: "Sizing", value: "Project-specific heat and mass balance" },
      { label: "Heating", value: "Direct or indirect hot gas" },
      { label: "Gas flow", value: "Co-current or counter-current" },
      { label: "Scope", value: "Standalone drum or complete drying line" },
    ],
    title: "Industrial Rotary Dryer Engineered for Your Material",
    paragraphs: [
      "PRO MAKINA, based in Eskişehir, Turkey, designs and manufactures industrial rotary dryers to reduce the moisture of silica sand, perlite, sawdust, mining and mineral raw materials, organic fertilizer, granular fertilizer and other suitable bulk solids in a controlled way. Each rotary drum dryer is engineered around the properties of the product.",
      "Initial and target moisture, capacity, particle size, bulk density, abrasiveness and thermal sensitivity are the core design inputs. Burner type, airflow, internal flight design, residence time and dust management are evaluated together.",
      "The feed system, heat generation unit, drying drum, fan, cyclone, filter, product discharge and electrical and automation equipment are considered together according to the process. The scope of a complete drying system is defined in the technical quotation in line with the downstream cooling, screening and storage stages.",
    ],
    note: "Rotary dryer design is not only about drum size; heat transfer, airflow, material curtain behaviour and emission control are equally decisive.",
  },
  process: {
    title: "Drying Plant Process Flow Diagram",
    intro:
      "The diagram shows a typical direct-fired, co-current drying line; equipment selection and sequence vary from project to project.",
    note: "Fines captured in the cyclone and filter can be returned to the line or collected separately, depending on product quality.",
    productLine: [
      { title: "Wet feed", text: "A hopper and metering feeder deliver a steady product flow to the drum." },
      { title: "Rotary dryer", text: "The cascading product releases its moisture in contact with hot gas." },
      { title: "Product discharge", text: "Dry product is collected at the discharge hood." },
      { title: "Cooling and screening", text: "If required, the product is cooled, screened and sent to silos or packaging." },
    ],
    gasLine: [
      { title: "Hot gas generation", text: "The burner and combustion chamber generate gas at process temperature." },
      { title: "Cyclone", text: "Coarse particles in the exhaust gas are pre-separated." },
      { title: "Pulse-jet filter", text: "Fine dust is captured in a filter suited to the emission requirements." },
      { title: "Process fan and stack", text: "The fan creates negative pressure; clean gas is released through the stack." },
    ],
    diagram: {
      svgTitle: "Drying plant process flow diagram",
      svgDesc:
        "Product line: wet feed, rotary dryer, product discharge, cooling and screening. Gas line: burner and combustion chamber, rotary dryer, cyclone, pulse-jet filter, process fan and stack.",
      productLane: "PRODUCT LINE",
      gasLane: "HOT GAS LINE",
      feed: { title: "Wet feed", sub: "Hopper and feeder" },
      drum: { title: "ROTARY DRYER", sub: "flights · cascading" },
      outlet: { title: "Discharge", sub: "Discharge hood" },
      finishing: { title: "Cooling, screening", sub: "To silo or packaging" },
      hotGas: { title: "Hot gas", sub: "Burner and furnace" },
      cyclone: { title: "Cyclone", sub: "Coarse separation" },
      filter: { title: "Pulse-jet filter", sub: "Fine dust capture" },
      fan: { title: "Fan and stack", sub: "Negative pressure" },
      gasIn: "hot gas inlet",
      exhaust: "moist exhaust gas",
    },
  },
  applications: {
    title: "Rotary Dryer Applications",
    items: [
      {
        title: "Silica Sand Rotary Dryer",
        text: "Rotary drum dryers designed to bring silica and quartz sand to the target moisture. Engineered with an abrasion-resistant shell, dedicated lifting flights and suitable dust collection systems.",
        imageAlt: "Close-up of light-coloured, fine-grained sand",
      },
      {
        title: "Perlite Rotary Dryer",
        text: "Rotary drum systems developed to dry raw perlite while preserving its grain structure. Controlled drum speed, suitable flight geometry and gas velocity limit breakage and dust formation.",
        imageAlt: "Crushed and screened raw perlite pieces",
      },
      {
        title: "Sawdust Rotary Dryer",
        text: "Drying systems for reducing the moisture of wood shavings and suitable biomass feedstocks. Process temperature, material properties, steady feeding and the necessary fire and explosion safety measures are evaluated together.",
        imageAlt: "Piles of wood shavings falling from conveyors inside a plant",
      },
      {
        title: "Mining and Mineral Rotary Dryer",
        text: "Project-specific mineral drying equipment for bentonite, kaolin, barite, zeolite, limestone and other industrial minerals suitable for drying. Designed around the material's density, abrasiveness, initial moisture and target product properties.",
        imageAlt: "Piles of crushed limestone at a quarry",
      },
      {
        title: "Fertilizer Rotary Dryer",
        text: "Rotary drum systems for the controlled drying of granular NPK, organomineral and organic fertilizers. Product temperature, granule strength and post-drying cooling and screening requirements are taken into account.",
        imageAlt: "Granular fertilizer (calcium ammonium nitrate) pellets",
      },
      {
        title: "Custom Drum Solutions",
        text: "Project-specific drum design and manufacturing for industrial materials and special process needs beyond standard applications. Engineering solutions are developed according to material properties, capacity and operating conditions.",
        imageAlt: "Rotary dryer being lifted into place by crane on site",
      },
    ],
    contactLinkLabel: "Discuss your application",
  },
  design: {
    title: "Custom Rotary Dryer Design and Manufacturing",
    intro:
      "PRO MAKINA engineers rotary dryers around raw material properties, hourly capacity, initial and target moisture and the process requirements of the plant. The drum shell, lifting flights, drive system and auxiliary equipment are evaluated as a whole, and rotary dryer manufacturing follows these project data.",
    highlights: ["Project-specific sizing", "Product-matched lifting flights", "Direct or indirect heating", "Heavy-duty mechanical design"],
    figureAlt: "Rotary dryer, burner hood and hot gas duct inside a process building",
    dataTitle: "Process Design Data",
    dataItems: [
      { title: "Raw Material Data", text: "Material type, particle size, bulk density and abrasiveness." },
      { title: "Capacity and Moisture", text: "Hourly wet feed, target dry product capacity, initial and target moisture." },
      { title: "Heating and Process", text: "Heat source, product temperature, airflow and dust collection requirement." },
      { title: "Mechanical Design", text: "Drum dimensions, shell and flight material, drive system and support assemblies." },
      { title: "Plant Integration", text: "Feeding, discharge, cooling, screening, automation and the existing plant layout." },
    ],
    dataNote:
      "For combustible products such as sawdust, fire and dust explosion risks are assessed separately at the design stage; if product behaviour is uncertain, a sample test can be carried out.",
  },
  technical: dryerTechnicalEn,
  gallery: {
    title: "Rotary Dryer Photo Gallery",
    items: [
      { alt: "Drying line with rotary dryer, cyclone and hot gas ducts", caption: "Drum, cyclone and gas ducts" },
      { alt: "Rotary dryer with burner, combustion chamber and feed conveyor", caption: "Burner, combustion chamber and feed" },
      { alt: "Burner and combustion chamber at the feed end of a rotary dryer", caption: "Burner and combustion chamber" },
      { alt: "Rotary dryer and exhaust gas duct installed outdoors", caption: "Site installation" },
      { alt: "Site installation with rotary dryer, cyclone and dust collection unit", caption: "Drum and dust collection unit" },
      { alt: "Rotary dryer and burner group with service platform", caption: "Service platform and burner group" },
      { alt: "Rotary dryer, feed conveyor and hot gas duct", caption: "Feed conveyor and gas duct" },
      { alt: "Rotary dryer with dust collection unit and exhaust duct", caption: "Exhaust duct and dust collection" },
      { alt: "Drying plant with rotary dryer, filter and product conveyors", caption: "Filter and product conveyors" },
      { alt: "Rotary dryer and bucket elevator for product transfer", caption: "Drum and bucket elevator" },
      { alt: "Indoor rotary dryer, cyclone and service platforms", caption: "Indoor installation" },
      { alt: "Riding ring (tyre) area of a rotary dryer and gas supply line", caption: "Riding ring area and gas line" },
      { alt: "Support roller and bearing housings before assembly", caption: "Support roller detail" },
      { alt: "Circumferential and axial lifting flight arrangement inside the drum", caption: "Internal flight arrangement" },
      { alt: "Rotary dryer discharge hood and steel service platform", caption: "Discharge hood and platform" },
    ],
    labels: {
      showAll: "Show all photos ({count})",
      showLess: "Show fewer photos",
      enlarge: "{caption} – view larger",
      close: "Close image",
      prev: "Previous image",
      next: "Next image",
      dialog: "Rotary dryer photo gallery",
    },
  },
  faq: {
    title: "Rotary Dryer – Frequently Asked Questions",
    items: [
      {
        question: "Which products is a rotary dryer used for?",
        answer:
          "It is used for fertilizers and granular products, compost and organic streams, minerals such as silica sand, sawdust and biomass, high-moisture streams such as sewage sludge and digestate, and various bulk solids. Suitability is assessed according to the product's moisture, particle structure and temperature sensitivity.",
      },
      {
        question: "How is rotary dryer capacity determined?",
        answer:
          "Capacity is not defined by a tonnes-per-hour figure alone; it is determined together with the amount of water to be evaporated, which results from the difference between inlet and target outlet moisture. Product density, operating hours and heat source are also included in the calculation.",
      },
      {
        question: "Which data are used to select drum diameter and length?",
        answer:
          "Diameter and length are defined per project by evaluating capacity, the residence time the product needs in the drum, filling degree, airflow and site layout constraints together. Selection is not made from a standard size list.",
      },
      {
        question: "Are the burner, fan and cyclone included in the system?",
        answer:
          "These components are not included as standard in every project. The burner and hot gas unit, fan, cyclone, filter and stack can be engineered together according to the project scope; the final scope is defined in the technical quotation.",
      },
      {
        question: "How is the rotary dryer material selected?",
        answer:
          "Material selection depends on the product's abrasiveness, corrosion behaviour and operating temperature. Carbon steel, stainless steel or locally wear-resistant solutions are evaluated per project.",
      },
      {
        question: "How is a price quotation for a rotary dryer prepared?",
        answer:
          "Once the product type, capacity, inlet and target outlet moisture, heat source, operating hours and site conditions are shared, a process evaluation is carried out; after the scope is clarified, a project-specific technical quotation is prepared. If product behaviour is uncertain, a sample test may be requested.",
      },
      {
        question: "Is perlite expanded in the rotary dryer?",
        answer:
          "No. The rotary dryer removes free moisture from crushed raw perlite before grinding and screening. Expansion is a separate high-temperature furnace process at the expansion plant, in which the combined water in the grain turns to steam and the particle expands.",
      },
    ],
  },
  resources: {
    title: "Related Equipment and Solutions",
    descriptions: {
      cyclones: "Pre-separation of particles in the exhaust gas line.",
      sludgeDryingPlantSolution: "Complete drying line for high-moisture sludge streams.",
      coolingDrum: "Cooling of the dried product before screening and packaging.",
      granulatorDrum: "Granulation upstream of drying in fertilizer lines.",
      bunkersHoppers: "Buffer storage and controlled feeding of the wet product.",
      bucketElevator: "Vertical transfer of the dried product.",
    },
  },
  cta: {
    title: "Let's define your rotary dryer capacity and process together",
    text: "We can determine the right technical solution for your rotary dryer based on inlet and outlet moisture, product type, heat source, capacity and site constraints.",
    whatsappLabel: "Request a Quote on WhatsApp",
    mailLabel: "Send an E-mail",
    mailSubject: "Rotary Dryer Technical Quotation Request",
    contactLabel: "Quotation form",
    requiredTitle: "Information Required for a Technical Quotation",
    requiredItems: [
      "Product to be dried",
      "Hourly wet feed capacity",
      "Inlet moisture",
      "Target outlet moisture",
      "Particle size",
      "Bulk density",
      "Product inlet temperature",
      "Allowed product outlet temperature",
      "Daily operating hours",
      "Fuel or available hot gas source",
      "Site altitude and ambient conditions",
      "Electrical voltage and frequency",
      "Existing feed and discharge equipment",
      "Dust, odour or emission requirements",
      "Installation area and layout constraints",
    ],
    requiredNote:
      "When product behaviour is uncertain, the data may need to be supported by laboratory analysis or a sample drying test.",
    inquiryLines: [
      "Hello, I would like to request a technical quotation for a rotary dryer.",
      "",
      "Product to be dried:",
      "Hourly wet feed (t/h):",
      "Inlet moisture (%):",
      "Target outlet moisture (%):",
      "Particle size:",
      "Fuel / heat source:",
      "Daily operating hours:",
      "Site information:",
    ],
  },
};
