import type { HomeExperienceContent } from "../types";
import { pathFor } from "../../routes";

const p = (key: Parameters<typeof pathFor>[0]) => pathFor(key, "en");

export const homeExperience: HomeExperienceContent = {
  hero: {
    ariaLabel: "Pro Makina main introduction section",
    imageAlt: "Pro Makina engineering and machinery solutions for industrial plants",
    eyebrow: "Process Engineering",
    titleLines: ["Engineering and Machinery Solutions", "for Industrial Plants"],
    description:
      "Manufacturing, installation and commissioning solutions for fertilizer, compost, drying, conveying and process lines.",
    primaryLabel: "Industries We Serve",
    primaryHref: p("sectors"),
    secondaryLabel: "Machines & Equipment",
    secondaryHref: p("machines"),
  },
  quickAccess: {
    heading: "Sector-Specific Solutions",
    description:
      "Explore machinery and plant solutions for fertilizer, compost, biogas, mining, sludge and chemical process applications.",
    exploreLabel: "Explore Sector",
    viewAllLabel: "View all industries",
    viewAllHref: p("sectors"),
    items: [
      { id: "gubre", title: "Fertilizer Applications", href: p("fertilizerPlants"), alt: "Process and machinery solutions for fertilizer production plants" },
      { id: "kompost", title: "Compost & Organic Waste", href: p("compostPlants"), alt: "Compost and organic waste processing solutions" },
      { id: "biyogaz", title: "Biogas & Energy", href: p("sectors"), alt: "Feeding and process solutions for biogas and energy plants" },
      { id: "maden", title: "Mining & Mineral Processing", href: p("mining"), alt: "Crushing, screening and drying solutions for mineral processing plants" },
      { id: "camur", title: "Sludge Solutions", href: p("sludgeDrying"), alt: "Sludge drying, dewatering and final product solutions" },
      { id: "kimya", title: "Chemical & Process Industry", href: p("chemicalProcess"), alt: "Reactor and tank solutions for the chemical process industry" },
      { id: "geridonusum", title: "Recycling & Waste Management", href: p("recycling"), alt: "Recycling and waste management process solutions" },
      { id: "dokme", title: "Bulk Material Handling", href: p("sectors"), alt: "Feed, powder and bulk solid handling systems" },
    ],
  },
  machineGroups: {
    heading: "Machines & Equipment",
    description:
      "From drum systems to conveying equipment, from crushers to reactor and tank solutions — machine families engineered for different process needs, presented together.",
    cards: [
      {
        eyebrow: "Rotary Drum Systems",
        title: "Rotary Drum Systems",
        products: [
          { label: "Rotary Dryer", href: p("rotaryDryer") },
          { label: "Rotary Drum Granulator", href: p("granulatorDrum") },
          { label: "Rotary Cooler", href: p("coolingDrum") },
          { label: "Coating Drum", href: p("coatingDrum") },
          { label: "Compost Drum", href: p("compostDrum") },
        ],
        buttonLabel: "Explore Category",
        href: p("drumSystems"),
        image: "/images/tambur kurutma/tamkurutma21.jpg",
        alt: "Drum systems and rotary dryer",
      },
      {
        eyebrow: "Conveying Systems",
        title: "Conveying Systems",
        products: [
          { label: "Belt Conveyor", href: p("beltConveyor") },
          { label: "Screw Conveyor", href: p("screwConveyor") },
          { label: "Chain Conveyor", href: p("chainConveyor") },
          { label: "Bucket Elevator", href: p("bucketElevator") },
        ],
        buttonLabel: "Explore Category",
        href: p("conveying"),
        image: "/images/konveyor/konvey38.jpg",
        alt: "Conveyor and material handling equipment",
      },
      {
        eyebrow: "Crushers & Shredders",
        title: "Crushers & Shredders",
        products: [
          { label: "Hammer & Chain Crushers", href: p("crushers") },
          { label: "Shredder Systems", href: p("crushers") },
        ],
        buttonLabel: "Explore Category",
        href: p("crushers"),
        image: "/images/kirici zincirli/kiricizincir1.jpg",
        alt: "Crusher and shredder machine systems",
      },
      {
        eyebrow: "Reactors & Tanks",
        title: "Reactors & Process Tanks",
        products: [
          { label: "Agitated Reactors", href: p("reactorsTanks") },
          { label: "Dissolving & Storage Tanks", href: p("reactorsTanks") },
        ],
        buttonLabel: "Explore Category",
        href: p("reactorsTanks"),
        image: "/images/sıvı/sivi11.webp",
        alt: "Reactors and process tanks",
      },
      {
        eyebrow: "Screening Systems",
        title: "Screening Systems",
        products: [
          { label: "Trommel Screens", href: p("screeningSystems") },
          { label: "Vibrating Screens", href: p("screeningSystems") },
        ],
        buttonLabel: "Explore Category",
        href: p("screeningSystems"),
        image: "/images/elek/elek1.png",
        alt: "Screening and classification systems",
      },
      {
        eyebrow: "Dust Collection",
        title: "Dust Collection Systems",
        products: [
          { label: "Cyclone Separator", href: p("cyclones") },
          { label: "Pulse-Jet Filters", href: p("dustCollection") },
        ],
        buttonLabel: "Explore Category",
        href: p("dustCollection"),
        image: "/images/siklon/siklon2.jpg",
        alt: "Cyclone and dust collection systems",
      },
      {
        eyebrow: "Packaging & Bagging",
        title: "Packaging & Bagging Systems",
        products: [
          { label: "Open-Mouth Bagging", href: p("packagingSystems") },
          { label: "Big-Bag Filling", href: p("packagingSystems") },
        ],
        buttonLabel: "Explore Category",
        href: p("packagingSystems"),
        image: "/images/paketleme/paket1.jpg",
        alt: "Packaging and bagging systems",
      },
      {
        eyebrow: "Silos & Feeding",
        title: "Silos, Bunkers & Feeding",
        products: [
          { label: "Bunkers & Hoppers", href: p("bunkersHoppers") },
          { label: "Silo Systems", href: p("storageSystems") },
        ],
        buttonLabel: "Explore Category",
        href: p("storageSystems"),
        image: "/images/bunker/bunker2.jpg",
        alt: "Bunker and feeding systems",
      },
      {
        eyebrow: "Dosing Systems",
        title: "Dosing Systems",
        products: [
          { label: "Weigh Belt Feeder", href: p("dosingBeltScale") },
          { label: "Micro & Macro Dosing", href: p("dosingSystems") },
        ],
        buttonLabel: "Explore Category",
        href: p("dosingSystems"),
        image: "/images/dozaj konveyor/dozaj1.jpg",
        alt: "Dosing systems",
      },
    ],
  },
  plantSolutions: {
    heading: "Waste Processing and Plant Solutions",
    description:
      "Browse our commercial plant pages for composting, animal and agricultural waste processing, sludge drying and RDF preparation projects.",
    browseLabel: "View All Plant Solutions",
    browseHref: p("plantSolutions"),
    cardCtaLabel: "Explore Plant Solution",
    cards: [
      {
        id: "compost",
        title: "Compost Plants",
        href: p("compostPlantSolution"),
        image: "/images/kompost/kompost1.jpg",
        alt: "Compost plant and organic waste processing equipment",
        description:
          "Turnkey compost plant concepts for mixed organic, manure and agricultural waste streams.",
      },
      {
        id: "organic",
        title: "Animal and Agricultural Waste Plants",
        href: p("animalWasteCompostPlant"),
        image: "/images/01-genel/evselkompost1.jpg",
        alt: "Animal and agricultural waste composting process line",
        description:
          "Preparation, mixing, intensive composting and refining layouts for manure and fibrous agricultural waste.",
      },
      {
        id: "sludge",
        title: "Sludge Drying Plants",
        href: p("sludgeDryingPlantSolution"),
        image: "/images/atik su camuru/sucamuru1.jpg",
        alt: "Sludge drying drum and thermal air system",
        description:
          "Thermal drying solutions for municipal and industrial sludge after dewatering.",
      },
      {
        id: "rdf",
        title: "RDF Preparation Plants",
        href: p("rdfPlantSolution"),
        image: "/images/01-genel/geridonusum1.jpg",
        alt: "RDF preparation line with shredding and handling systems",
        description:
          "Alternative fuel preparation lines that turn municipal and industrial waste into defined RDF streams.",
      },
    ],
  },
  services: {
    heading: "OUR SERVICES",
    description:
      "Pro Makina delivers project-specific engineering and implementation solutions for fertilizer and granulation, compost and organic waste, recycling, sludge, biogas, mining and bulk material processing. From needs analysis to process design, machine manufacturing, site installation and commissioning — every step is planned from a single centre.",
    tags: [
      { label: "Fertilizer Production Plants", href: p("fertilizerPlants") },
      { label: "Compost & Organic Waste Plants", href: p("compostPlants") },
      { label: "Sludge Drying Solutions", href: p("sludgeDrying") },
      { label: "Recycling & Waste Management", href: p("recycling") },
      { label: "Mining & Mineral Processing", href: p("mining") },
      { label: "Chemical & Process Industry", href: p("chemicalProcess") },
    ],
    detailLabel: "View Details",
    cards: [
      {
        title: "Turnkey Plant Installation",
        description:
          "We plan the whole journey from concept development to site installation and build the right plant infrastructure from one hand.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "Turnkey plant installation service",
      },
      {
        title: "Process Design & Engineering",
        description:
          "Process configuration, equipment selection and technical infrastructure planning based on capacity, product structure and raw material flow.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/01-genel/proje2.jpg",
        imageAlt: "Process design and engineering service",
      },
      {
        title: "Machine Manufacturing",
        description:
          "We manufacture heavy-duty equipment including drum systems, conveyors, crushers, reactors, tanks, screening and dust collection systems.",
        buttonLabel: "View Details",
        href: p("machines"),
        image: "/images/01-genel/fabrika1.jpg",
        imageAlt: "Industrial machine manufacturing service",
      },
      {
        title: "Installation & Commissioning",
        description:
          "We manage site assembly, mechanical-electrical integration, testing and first-production commissioning in a controlled way.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "Installation and commissioning service",
      },
      {
        title: "Modernization & Revision",
        description:
          "We develop revision projects to improve existing plants in capacity, efficiency, product quality and operational safety.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/bakim/bakim3.webp",
        imageAlt: "Modernization and revision service",
      },
      {
        title: "Technical Consultancy",
        description:
          "Technical consultancy for new investment planning, product development, capacity increase, equipment selection and process optimisation.",
        buttonLabel: "View Details",
        href: p("contact"),
        image: "/images/01-genel/proses1.png",
        imageAlt: "Industrial plant and equipment visual for technical consultancy",
      },
      {
        title: "Maintenance & Service",
        description:
          "Maintenance and technical service support to extend equipment life and reduce unplanned downtime.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/bakim/bakim1.webp",
        imageAlt: "Maintenance, service and technical support",
      },
      {
        title: "Project Management & Site Coordination",
        description:
          "We manage manufacturing, procurement, site execution, schedule and team coordination so the project progresses in a controlled, orderly way.",
        buttonLabel: "View Details",
        href: p("services"),
        image: "/images/01-genel/sahakontrol1.webp",
        imageAlt: "Project management and site coordination service",
      },
    ],
  },
  library: {
    heading: "Technical Library",
    description:
      "Explore technical content on processes, equipment and plant installation prepared by our engineering team.",
    filters: [
      { label: "All Machines", href: p("machines") },
      { label: "Drum Systems", href: p("drumSystems") },
      { label: "Conveying Systems", href: p("conveying") },
      { label: "Industries", href: p("sectors") },
      { label: "Services", href: p("services") },
      { label: "About Us", href: p("about") },
    ],
    cards: [
      {
        category: "Drying Systems",
        title: "Industrial Rotary Dryer",
        description:
          "How a rotary dryer works, which materials it dries and which design data drives its sizing.",
        href: p("rotaryDryer"),
      },
      {
        category: "Fertilizer Plants",
        title: "Rotary Drum Granulator",
        description:
          "Granulation by rolling agglomeration: binder dosing, retention control and the recycle loop.",
        href: p("granulatorDrum"),
      },
      {
        category: "Compost & Waste",
        title: "Compost Drum Technology",
        description:
          "Controlled aerobic composting in a closed rotating reactor — faster, odour-managed, weather-independent.",
        href: p("compostDrum"),
      },
      {
        category: "Conveying",
        title: "Screw Conveyor Design",
        description:
          "Enclosed transport and dosing of powders and granules: diameter, pitch, speed and filling degree.",
        href: p("screwConveyor"),
      },
      {
        category: "Turnkey Plants",
        title: "Fertilizer Production Plants",
        description:
          "The granulation loop as one process: dosing, granulation, drying, cooling, screening and bagging.",
        href: p("fertilizerPlants"),
      },
      {
        category: "Sludge Solutions",
        title: "Sludge Drying Systems",
        description:
          "Thermal drying lines that cut sludge mass, sanitise the product and open recovery routes.",
        href: p("sludgeDrying"),
      },
    ],
    cardCtaLabel: "Read More",
    viewAllLabel: "View all machines & equipment",
    viewAllHref: p("machines"),
  },
  quoteBand: {
    title: "Request a quote or a technical meeting for your project",
    text: "Contact us for compost plants, fertilizer plants, machinery and equipment, sludge drying or technical consultancy requests.",
    contactLabel: "Go to Contact Page",
    contactHref: p("contact"),
    callLabel: "Call Now",
    whatsappLabel: "WhatsApp",
    whatsappMessage: "Hello, I am reaching you via the Pro Makina website. I would like to request a technical meeting.",
  },
  social: {
    tag: "TECHNICAL CONTENT & MEDIA",
    title: "A content layer that makes technical authority visible on social media",
    text: "On our LinkedIn, YouTube and Instagram channels we regularly publish process engineering, machine manufacturing, field applications and technical guides — a media stream that builds trust for investors and technical teams.",
    cardTitles: {
      linkedin: "LinkedIn Technical Content",
      youtube: "YouTube Process Videos",
      instagram: "Instagram Project Visuals",
    },
    buttonLabels: {
      linkedin: "Open LinkedIn",
      youtube: "Open YouTube",
      instagram: "Open Instagram",
    },
    cardDescriptions: {
      linkedin: "Technical articles, process engineering insights and corporate project posts.",
      youtube: "Process videos, machine operation scenarios and field application walkthroughs.",
      instagram: "Project visuals, manufacturing details and plant application frames.",
    },
  },
};
