import type { IntlContactContent, IntlPageContent } from "../types";

export const home: IntlPageContent = {
  meta: {
    title: "Industrial Process Machinery & Turnkey Plant Manufacturer",
    description:
      "Pro Makina designs and manufactures rotary dryers, granulation drums, conveyors and turnkey fertilizer, compost and drying plants in Turkey. Request a technical quote.",
  },
  breadcrumbLabel: "Home",
  hero: {
    h1: "Industrial Process Machinery and Turnkey Plants, Engineered in Turkey",
    intro:
      "Pro Makina is a process engineering and machinery manufacturing company based in Eskişehir, Turkey. We design, fabricate and commission rotary drum systems, material handling equipment and complete production plants for fertilizer, compost, drying, mining, recycling and chemical process applications — sized around your raw material and capacity targets.",
    image: { src: "/images/01-genel/fabrika1.jpg", alt: "Pro Makina machinery manufacturing facility in Eskişehir, Turkey" },
  },
  childLinks: [
    { key: "rotaryDryer", title: "Industrial Rotary Dryer", text: "Direct and indirect fired rotary drum dryers for fertilizer, sand, sludge, compost and mineral drying." },
    { key: "granulatorDrum", title: "Rotary Drum Granulator", text: "Drum granulation systems for NPK, organomineral and compost-based granular fertilizer production." },
    { key: "drumSystems", title: "Rotary Drum Systems", text: "Dryers, coolers, granulators, coating and compost drums manufactured to project-specific process data." },
    { key: "conveying", title: "Conveying Systems", text: "Belt conveyors, screw conveyors, chain conveyors and bucket elevators for bulk material handling." },
    { key: "fertilizerPlants", title: "Fertilizer Production Plants", text: "Turnkey granular, powder and liquid fertilizer production lines from raw material intake to bagging." },
    { key: "compostPlants", title: "Compost Plants", text: "Controlled composting and organic waste processing plants with drum composting technology." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "One Engineering Team from Process Design to Commissioning",
      paragraphs: [
        "Industrial drying, granulation and material handling projects fail when machinery is selected from a catalogue instead of being engineered around the material. Pro Makina works the other way around: we start from your raw material analysis, moisture content, particle size and capacity target, run the process and heat balance calculations, and then design the machine or the complete line around those numbers.",
        "Our scope covers process design, mechanical engineering, steel fabrication, automation and on-site commissioning. Because design and manufacturing are handled under one roof, technical responsibility stays with a single team — from the first flow diagram to performance testing at your site.",
      ],
    },
    {
      type: "cards",
      heading: "What We Manufacture",
      items: [
        { title: "Rotary drum systems", text: "Drying, cooling, granulation, coating, mixing and compost drums with project-specific diameter, length and drive configuration." },
        { title: "Material handling equipment", text: "Belt, screw and chain conveyors, bucket elevators, dosing systems and weigh belt feeders for bulk solids." },
        { title: "Crushing and screening", text: "Hammer mills, shredders, jaw and vertical shaft crushers, trommel and vibrating screens for size reduction and classification." },
        { title: "Process tanks and reactors", text: "Agitated reactors, dissolving tanks and storage tanks for liquid fertilizer and chemical preparation processes." },
        { title: "Dust collection", text: "Cyclone separators and pulse-jet filter systems that close the air circuit of drying and grinding lines." },
        { title: "Turnkey plants", text: "Complete fertilizer, compost, sludge drying and mineral processing plants including layout, automation and commissioning." },
      ],
    },
    {
      type: "bullets",
      heading: "Industries We Serve",
      items: [
        "Granular, powder and liquid fertilizer production (NPK, organomineral, organic)",
        "Compost and organic waste processing plants",
        "Municipal and industrial sludge drying",
        "Mining and mineral processing: silica sand, calcite, perlite, feldspar",
        "Chemical preparation and process plants",
        "Recycling and waste management facilities",
        "Biogas plants: feeding lines and digestate processing",
      ],
    },
  ],
  faq: [
    {
      q: "Does Pro Makina export machinery outside Turkey?",
      a: "Yes. We prepare international technical proposals, handle export packing and shipping documentation, and provide supervision for installation and commissioning at overseas sites.",
    },
    {
      q: "Can you design a complete plant, not just a single machine?",
      a: "Yes. We deliver turnkey lines covering raw material intake, dosing, granulation or drying, screening, dust collection, bagging and automation, engineered as one integrated process.",
    },
    {
      q: "How do I get a technical quote?",
      a: "Send us your raw material, inlet and target moisture, capacity and operating hours through the technical quote form. Our engineers evaluate the data and return a project-specific proposal.",
    },
    {
      q: "Which information do you need to size a machine?",
      a: "Typically the raw material type and analysis, bulk density, particle size, moisture content, required capacity and daily operating time. Missing values can be clarified during the engineering review.",
    },
  ],
  related: ["machines", "sectors", "services", "about"],
  schemaType: "WebPage",
};

export const about: IntlPageContent = {
  meta: {
    title: "About Pro Makina | Process Engineering & Machinery Manufacturer",
    description:
      "Pro Makina is a process engineering and industrial machinery manufacturer in Eskişehir, Turkey, delivering rotary drum systems and turnkey plants to international markets.",
  },
  breadcrumbLabel: "About Us",
  hero: {
    h1: "A Process Engineering Company That Manufactures What It Designs",
    intro:
      "Pro Makina combines process engineering with in-house steel fabrication in Eskişehir, Turkey. We design, calculate, manufacture and commission industrial machinery for fertilizer, compost, drying, mining, recycling and chemical process plants.",
    image: { src: "/images/01-genel/profabrika1.png", alt: "Pro Makina production facility and machinery workshop" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Who We Are",
      paragraphs: [
        "Pro Makina was founded on a simple principle: industrial process equipment should be engineered from process data, not sold from a shelf. Our team combines process engineers who run the mass, heat and capacity calculations with mechanical engineers and fabricators who turn those calculations into machinery that runs for years in demanding environments.",
        "From our facility in Eskişehir we serve plant investors and operators in Turkey and in export markets across Europe, the Middle East, North Africa, the Caucasus and Central Asia. Every project starts with a technical review of your raw material and ends with a machine or plant commissioned against agreed performance criteria.",
      ],
    },
    {
      type: "cards",
      heading: "How We Work",
      items: [
        { title: "1. Technical review", text: "We analyse your raw material, moisture, capacity and site constraints before proposing any equipment." },
        { title: "2. Process design", text: "Flow diagrams, mass and heat balances, and equipment sizing calculations define the line." },
        { title: "3. Engineering and fabrication", text: "Mechanical design, steel fabrication and assembly are executed in our own workshop." },
        { title: "4. Automation", text: "Control panels, sensors and PLC programming are integrated with the mechanical scope." },
        { title: "5. Commissioning", text: "Installation supervision, cold and hot commissioning, and operator training at your site." },
        { title: "6. After-sales support", text: "Spare parts, maintenance guidance and process optimisation support after handover." },
      ],
    },
    {
      type: "bullets",
      heading: "What Sets Us Apart",
      items: [
        "Process calculations and manufacturing under one roof — no responsibility gaps between designer and fabricator",
        "Project-based sizing: drum dimensions, drive powers and line capacities are calculated for your material, not copied from a catalogue",
        "Documented engineering: flow diagrams, layout drawings and technical documentation delivered with every project",
        "Export experience: international proposals, shipping documentation and site supervision for overseas projects",
        "Honest technical communication: where data is missing, we say what must be measured instead of guessing",
      ],
    },
  ],
  faq: [
    {
      q: "Where is Pro Makina located?",
      a: "Our engineering office and manufacturing facility are in the Teksan Industrial Zone in Odunpazarı, Eskişehir, Turkey.",
    },
    {
      q: "Do you work with international customers?",
      a: "Yes. We prepare proposals in English, Russian and Arabic, manage export shipping and provide installation and commissioning supervision abroad.",
    },
    {
      q: "Can I visit the factory before ordering?",
      a: "Yes, factory visits are welcome. We can also arrange video calls and share manufacturing photos and videos of machines in production.",
    },
  ],
  related: ["services", "machines", "sectors", "contact"],
  schemaType: "AboutPage",
};

export const services: IntlPageContent = {
  meta: {
    title: "Engineering & Manufacturing Services | Turnkey Plants",
    description:
      "Process design, machinery manufacturing, plant installation, commissioning, modernization and maintenance services for industrial process plants by Pro Makina.",
  },
  breadcrumbLabel: "Services",
  hero: {
    h1: "Engineering and Manufacturing Services for Industrial Process Plants",
    intro:
      "From a single machine to a complete production line, Pro Makina delivers process design, fabrication, installation, commissioning and after-sales services as one integrated scope with a single point of technical responsibility.",
    image: { src: "/images/01-genel/hizmetler1.png", alt: "Pro Makina engineering and plant installation services" },
  },
  sections: [
    {
      type: "cards",
      heading: "Our Service Scope",
      items: [
        { title: "Turnkey plant installation", text: "Complete production plants — fertilizer, compost, drying, mineral processing — delivered from process design to performance testing." },
        { title: "Process design and engineering", text: "Flow diagrams, mass and heat balances, equipment sizing, layout and P&ID documentation for new investments and expansions." },
        { title: "Machinery manufacturing", text: "Rotary drums, conveyors, crushers, screens, tanks and custom process equipment fabricated in our own workshop." },
        { title: "Installation and commissioning", text: "Site installation supervision, mechanical completion checks, cold and hot commissioning, operator training." },
        { title: "Modernization and revision", text: "Capacity increase, energy efficiency and automation upgrades for existing lines and third-party machinery." },
        { title: "Technical consultancy", text: "Feasibility reviews, process troubleshooting and second-opinion engineering for planned or running plants." },
        { title: "Maintenance and service", text: "Planned maintenance, spare part supply and on-call service for machinery delivered by Pro Makina." },
        { title: "Pilot testing", text: "Process trials and material tests to validate drying and granulation behaviour before full-scale investment." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Why a Single Point of Responsibility Matters",
      paragraphs: [
        "In multi-vendor projects the interfaces between process design, machinery supply and installation are where budgets and schedules break. When one team owns the process calculation, the fabrication drawings and the commissioning plan, those interfaces disappear: the company that sized the dryer is the same company that guarantees it reaches the target outlet moisture.",
        "This is why Pro Makina quotes complete scopes wherever possible — and why our proposals state clearly which performance figures we commit to, what data they are based on, and which inputs remain to be confirmed by material testing.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you install plants outside Turkey?",
      a: "Yes. Machinery is manufactured and pre-assembled in Turkey, then shipped with installation drawings. Our supervisors manage the installation with local crews and run commissioning on site.",
    },
    {
      q: "Can you modernize a line that was not built by Pro Makina?",
      a: "Yes. After a technical survey we can upgrade drives, replace worn drums or screens, add automation and improve capacity or energy consumption on third-party equipment.",
    },
    {
      q: "What does a typical proposal include?",
      a: "Scope description, process basis, equipment list with technical specifications, exclusions, delivery time, and commercial terms. Layout and flow diagrams are included for line-level scopes.",
    },
  ],
  related: ["machines", "fertilizerPlants", "compostPlants", "contact"],
  schemaType: "Service",
};

export const machines: IntlPageContent = {
  meta: {
    title: "Industrial Machines & Equipment | Rotary Drums, Conveyors, Crushers",
    description:
      "Explore Pro Makina's industrial machinery range: rotary dryers, granulator drums, conveyors, elevators, crushers, screens, dosing, dust collection and packaging systems.",
  },
  breadcrumbLabel: "Machines & Equipment",
  hero: {
    h1: "Industrial Machines and Process Equipment",
    intro:
      "All Pro Makina machinery is engineered from your process data: raw material, moisture, particle size, capacity and operating time. Browse the main equipment groups below — every machine is manufactured project-specifically in our facility in Turkey.",
    image: { src: "/images/01-genel/makinalar1.png", alt: "Pro Makina industrial machinery product range" },
  },
  childLinks: [
    { key: "drumSystems", title: "Rotary Drum Systems", text: "Drying, cooling, granulation, coating and compost drums — the core of thermal and granulation processes." },
    { key: "conveying", title: "Conveying Systems", text: "Belt, screw and chain conveyors and bucket elevators for horizontal, inclined and vertical transport." },
    { key: "crushers", title: "Crushers & Shredders", text: "Hammer, jaw, chain and vertical shaft crushers plus shredders for size reduction duties." },
    { key: "dosingSystems", title: "Dosing Systems", text: "Micro and macro dosing units and weigh belt feeders for accurate recipe control." },
    { key: "reactorsTanks", title: "Reactors & Process Tanks", text: "Agitated reactors, dissolving and storage tanks for liquid process steps." },
    { key: "screeningSystems", title: "Screening Systems", text: "Trommel and vibrating screens for product classification and recycle control." },
    { key: "dustCollection", title: "Dust Collection Systems", text: "Cyclones and pulse-jet filters for process air cleaning and product recovery." },
    { key: "packagingSystems", title: "Packaging & Bagging", text: "Open-mouth bagging, big-bag filling and palletizing lines for final product handling." },
    { key: "storageSystems", title: "Silos, Bunkers & Feeding", text: "Silos, bunkers, hoppers and controlled discharge systems for bulk storage and feeding." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Machinery Engineered from Process Data",
      paragraphs: [
        "A dryer that performs perfectly on sand can fail on compost; a screw conveyor sized for granules can block on wet sludge. Bulk materials differ in density, moisture, abrasiveness and flow behaviour, and the machine must reflect those differences in its geometry, materials and drive selection.",
        "That is why every Pro Makina machine page lists the design data we ask for. Share the material and process values with our team and we will size the equipment, state the assumptions, and back the numbers in a written technical proposal.",
      ],
    },
  ],
  faq: [
    {
      q: "Are the machines standard products or custom-built?",
      a: "Mechanical concepts are standardized and field-proven, but dimensions, drive power, material selection and options are calculated per project based on your raw material and capacity.",
    },
    {
      q: "Can single machines be integrated into an existing line?",
      a: "Yes. We regularly supply individual dryers, conveyors or screens matched to existing upstream and downstream equipment, including mechanical and control interfaces.",
    },
  ],
  related: ["drumSystems", "conveying", "sectors", "contact"],
  schemaType: "CollectionPage",
};

export const sectors: IntlPageContent = {
  meta: {
    title: "Industries & Turnkey Plant Solutions",
    description:
      "Pro Makina builds turnkey plants for fertilizer production, composting, sludge drying, mining, chemical processing and recycling industries. Explore sector solutions.",
  },
  breadcrumbLabel: "Industries",
  hero: {
    h1: "Turnkey Plant Solutions by Industry",
    intro:
      "Machinery only creates value inside a working process. Pro Makina designs complete lines for the industries below, combining drums, conveyors, screens, dust collection and automation into plants that are commissioned against agreed performance targets.",
    image: { src: "/images/01-genel/sektorler1.png", alt: "Industrial plant solutions across sectors by Pro Makina" },
  },
  childLinks: [
    { key: "fertilizerPlants", title: "Fertilizer Production Plants", text: "Granular, powder and liquid fertilizer lines: NPK, organomineral and organic formulations." },
    { key: "compostPlants", title: "Compost & Organic Waste Plants", text: "Drum composting technology for municipal, agricultural and animal-origin organic waste." },
    { key: "sludgeDrying", title: "Sludge Drying Systems", text: "Thermal drying lines that reduce sludge volume and open recovery routes." },
    { key: "mining", title: "Mining & Mineral Processing", text: "Drying, screening and handling plants for silica sand, calcite, perlite and feldspar." },
    { key: "chemicalProcess", title: "Chemical & Process Plants", text: "Reactor-based preparation lines, dosing and mixing systems for chemical production." },
    { key: "recycling", title: "Recycling & Waste Management", text: "Shredding, screening and separation lines that prepare waste streams for recovery." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Why Sector Experience Matters",
      paragraphs: [
        "The same rotary drum behaves completely differently on granular NPK, digestate or silica sand. Retention time, flight design, air velocity and temperature profile must match the material — and those parameters come from sector experience, not from generic equipment tables.",
        "Our sector pages summarise the typical process steps, the critical design questions and the equipment we combine for each industry. Use them as a starting point, then share your project data for a specific evaluation.",
      ],
    },
  ],
  faq: [
    {
      q: "Do you deliver complete plants or only machinery packages?",
      a: "Both. Depending on the project we supply single machines, equipment packages, or full turnkey scopes including layout, automation, installation and commissioning.",
    },
    {
      q: "Can you evaluate a feasibility idea before investment?",
      a: "Yes. With your raw material data and target product we can review process feasibility, estimate the main equipment list and highlight the critical risks before you commit capital.",
    },
  ],
  related: ["machines", "services", "contact"],
  schemaType: "CollectionPage",
};

export const contact: IntlContactContent = {
  meta: {
    title: "Contact & Technical Quote Form",
    description:
      "Contact Pro Makina for industrial machinery and turnkey plants: phone, WhatsApp, e-mail and technical quote form. Engineering office and factory in Eskişehir, Turkey.",
  },
  breadcrumbLabel: "Contact",
  hero: {
    h1: "Contact Pro Makina",
    intro:
      "Talk directly to our engineering team about your machine or plant project. Call, write on WhatsApp, send an e-mail — or use the technical quote form below so we can start with the process data straight away.",
  },
  sections: [
    {
      type: "paragraphs",
      heading: "How Your Request Is Handled",
      paragraphs: [
        "Every request is reviewed by a process engineer, not a call centre. We check the data you provide, come back with clarifying technical questions if needed, and then prepare a written proposal covering scope, performance basis, delivery time and commercial terms.",
        "For international projects we communicate in English, Russian or Arabic, and can arrange video meetings to review your site layout and process requirements together.",
      ],
    },
  ],
  faq: [],
  related: [],
  schemaType: "ContactPage",
  info: {
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-mail",
    addressLabel: "Address",
    hoursLabel: "Working hours",
    hours: "Monday – Friday, 08:30 – 18:00 (GMT+3)",
  },
};
