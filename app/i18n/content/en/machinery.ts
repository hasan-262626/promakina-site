import type { IntlPageContent } from "../types";

export const crushers: IntlPageContent = {
  meta: {
    title: "Industrial Crushers & Shredders | Size Reduction Equipment",
    description:
      "Hammer mills, jaw crushers, chain and vertical shaft crushers and shredders for minerals, fertilizer and waste. Engineered and manufactured by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Crushers & Shredders",
  hero: {
    h1: "Crushers and Shredders for Industrial Size Reduction",
    intro:
      "From breaking fertilizer lumps to shredding bulky waste, size reduction defines the downstream process. Pro Makina manufactures hammer, jaw, chain and vertical shaft crushers as well as shredder systems — each selected and sized for your material's hardness, moisture and target particle size.",
    image: { src: "/images/kirici cekicli/kiricicekic3.jpg", alt: "Industrial hammer crusher manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Crusher Types We Manufacture",
      items: [
        { title: "Hammer crushers", text: "High-speed swinging hammers for friable materials, fertilizer lumps and oversize recycle in granulation loops." },
        { title: "Chain crushers", text: "Robust chain rotors that break moist, sticky agglomerates — a standard solution in fertilizer plants." },
        { title: "Jaw crushers", text: "Primary crushing of hard minerals and rock with adjustable discharge gap." },
        { title: "Vertical shaft crushers", text: "Impact-based fine crushing and shaping for mineral processing duties." },
        { title: "Shredder systems", text: "Low-speed, high-torque shredders for bulky waste, organics and recyclables." },
        { title: "Primary knife crushers", text: "Cutting rotors for fibrous and elastic materials that resist impact crushing." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Selecting the Right Crusher",
      paragraphs: [
        "Crusher selection starts with the material, not the machine: hardness, abrasiveness, moisture, stickiness and feed size determine which working principle survives and which one clogs or wears out. A chain crusher thrives on moist fertilizer lumps that would blind a screen-equipped hammer mill; a jaw crusher handles rock that would destroy a shredder.",
        "The second question is the target: required output size, acceptable fines ratio and capacity. We match rotor speed, tooling and screen or gap settings to that target, and select wear materials — hardfaced hammers, replaceable liners — for a maintenance cycle that fits your operation.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Crusher Selection",
      columns: ["Design input", "Role in the selection"],
      rows: [
        ["Material and hardness/abrasiveness", "Working principle and wear protection"],
        ["Feed size and moisture", "Rotor type, inlet geometry, anti-clogging measures"],
        ["Target output size", "Screen/gap configuration and speed"],
        ["Capacity (t/h)", "Rotor dimensions and drive power"],
        ["Duty (continuous / batch)", "Bearing and drive sizing, maintenance concept"],
      ],
      note: "Crusher performance is confirmed against your material; test crushing can be arranged for critical applications.",
    },
  ],
  faq: [
    {
      q: "Which crusher is used for fertilizer oversize recycle?",
      a: "Chain crushers and hammer mills are the standard choices: they break oversize granules back to recyclable size without excessive fines, and tolerate the moisture of fresh granules.",
    },
    {
      q: "Do you supply crushers with dust collection?",
      a: "Yes. Crushing releases dust, and we quote the local extraction, cyclone or filter equipment with the crusher when required.",
    },
    {
      q: "How is wear handled?",
      a: "Hammers, chains, liners and screens are designed as replaceable wear parts; material selection (hardfacing, manganese steels) is matched to your material's abrasiveness.",
    },
  ],
  related: ["screeningSystems", "granulatorDrum", "recycling", "mining", "machines"],
  schemaType: "CollectionPage",
};

export const conveying: IntlPageContent = {
  meta: {
    title: "Conveying Systems | Belt, Screw, Chain Conveyors & Elevators",
    description:
      "Bulk material handling equipment by Pro Makina: belt conveyors, screw conveyors, chain conveyors and bucket elevators engineered for your material and layout.",
  },
  breadcrumbLabel: "Conveying Systems",
  hero: {
    h1: "Conveying Systems for Bulk Materials",
    intro:
      "Every process line lives or dies by its material flow. Pro Makina designs and manufactures belt, screw and chain conveyors and bucket elevators — sized from your material's bulk density, particle size, moisture and the geometry of your plant layout.",
    image: { src: "/images/konveyor/konvey2.jpg", alt: "Belt conveyor system manufactured by Pro Makina" },
  },
  childLinks: [
    { key: "beltConveyor", title: "Belt Conveyor", text: "High-capacity horizontal and inclined transport for granular and lumpy bulk materials." },
    { key: "screwConveyor", title: "Screw Conveyor", text: "Enclosed, dust-tight transport and dosing of powders and granules in U-trough or tube design." },
    { key: "chainConveyor", title: "Chain Conveyor", text: "Robust en-masse transport (redler) for abrasive and hot materials in closed casings." },
    { key: "bucketElevator", title: "Bucket Elevator", text: "Vertical transport of granules and powders with minimal footprint." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Conveyor Selection Is Process Engineering",
      paragraphs: [
        "Choosing between a belt, a screw, a chain conveyor or an elevator is not a matter of preference — it follows from the material and the route. Fragile granules need gentle belt transport; dusty powders demand enclosed screws or chain conveyors; vertical runs call for elevators. Wrong selection shows up later as dust, spillage, degradation or blockages.",
        "We size every conveyor from capacity calculations — cross-section, speed, filling degree — and select the drive with verified power reserves. Inlets, outlets, transfer chutes and safety guards are engineered as part of the system, because most conveyor problems are born at the transfer points.",
      ],
    },
  ],
  faq: [
    {
      q: "Can you design the complete material flow of a plant?",
      a: "Yes. We engineer the full transport chain — receiving, elevating, distributing, dosing — as one system, which eliminates interface problems between individual conveyors.",
    },
    {
      q: "Do conveyors come with safety equipment?",
      a: "Yes: guards, emergency pull-wire switches, rotation and belt-drift sensors are specified according to the installation and applicable safety requirements.",
    },
  ],
  related: ["beltConveyor", "screwConveyor", "chainConveyor", "bucketElevator", "storageSystems"],
  schemaType: "CollectionPage",
};

export const beltConveyor: IntlPageContent = {
  meta: {
    title: "Belt Conveyor Manufacturer | Bulk Material Transport",
    description:
      "Belt conveyors for granular and lumpy bulk materials: troughed design, project-based sizing, transfer points and safety equipment by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Belt Conveyor",
  hero: {
    h1: "Belt Conveyors for High-Capacity Bulk Transport",
    intro:
      "The belt conveyor is the most efficient way to move large volumes of bulk material horizontally or at moderate inclines. Pro Makina manufactures troughed belt conveyors with project-calculated belt width, speed and drive power — including transfer chutes, skirtboards and safety equipment.",
    image: { src: "/images/konveyor/konvey2.jpg", alt: "Troughed belt conveyor manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle and Design",
      paragraphs: [
        "An endless rubber belt runs over idler stations shaped as a trough, carrying the material from the loading point to the discharge pulley. Capacity follows from belt width, troughing angle, belt speed and the material's bulk density and surcharge angle — a straightforward calculation we perform for every project rather than quoting generic tables.",
        "The critical engineering sits at the details: the loading zone with impact idlers and skirtboards decides spillage and belt life; the take-up keeps tension correct across seasons; belt cleaning scrapers keep the return run clean. Inclined conveyors get anti-runback backstops, and dusty materials receive covers or full enclosures.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Materials Handled",
      items: [
        "Granular fertilizer and compost",
        "Sand, gravel, crushed minerals and ores",
        "Biomass, wood chips and recycled fractions",
        "Bagged goods on flat belts in packing areas",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Project-based capacity", text: "Belt width and speed calculated from tonnage and material properties." },
        { title: "Drive engineering", text: "Motor-gearbox selection with verified starting and steady-state power." },
        { title: "Transfer point design", text: "Chutes and skirtboards engineered to centre the load and control dust." },
        { title: "Options", text: "Covers, galleries, weather protection, belt scales and magnetic separators." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Belt Conveyor Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Material, bulk density, lump size", "Belt width and troughing selection"],
        ["Capacity (t/h)", "Belt speed and cross-section"],
        ["Route: length, lift, incline", "Drive power and belt tension class"],
        ["Loading and discharge points", "Chute and transfer design"],
        ["Environment (dust, weather)", "Enclosure and cover options"],
      ],
      note: "Belt width, speed and drive power are finalised by calculation for your route and material.",
    },
  ],
  faq: [
    {
      q: "What incline can a belt conveyor handle?",
      a: "Smooth belts typically manage moderate inclines depending on the material's surcharge angle; steeper routes use chevron (patterned) belts or a different machine such as an elevator. We advise per material.",
    },
    {
      q: "How is dust controlled on belt conveyors?",
      a: "With engineered transfer chutes, skirtboard systems, covers or full enclosures, and where necessary local extraction connected to the plant's dust collection.",
    },
    {
      q: "Do you supply belt scales?",
      a: "Yes, belt weighers can be integrated for throughput measurement and dosing control, linked to the plant automation.",
    },
  ],
  related: ["conveying", "screwConveyor", "bucketElevator", "dosingBeltScale", "storageSystems"],
  schemaType: "Product",
};

export const screwConveyor: IntlPageContent = {
  meta: {
    title: "Screw Conveyor Manufacturer | Enclosed Powder & Granule Transport",
    description:
      "U-trough and tubular screw conveyors for powders and granules: dust-tight, dosing-capable, project-sized. Manufactured by Pro Makina in Turkey.",
  },
  breadcrumbLabel: "Screw Conveyor",
  hero: {
    h1: "Screw Conveyors — Enclosed Transport and Dosing of Bulk Solids",
    intro:
      "The screw conveyor moves powders and granules inside a closed trough or tube by a rotating helical flight — dust-tight, compact and inherently suited to dosing. Pro Makina manufactures U-trough and tubular screws with project-calculated diameter, pitch and speed for your material.",
    image: { src: "/images/helezon/helezon39.jpg", alt: "Screw conveyor manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle and Design",
      paragraphs: [
        "A helical flight welded on a central pipe rotates inside the casing and pushes the material forward. Capacity depends on screw diameter, pitch, rotation speed and filling degree — and filling degree must respect the material: free-flowing granules allow higher filling than sticky or aerating powders.",
        "Screws also meter: with an inverter-driven motor the conveying rate becomes controllable, which is why dosing screws feed dryers, mixers and granulators across our plants. For sticky materials we use adapted flight geometry (ribbon or paddle sections) and generous inspection covers for cleaning access.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Powder raw material transfer in fertilizer plants",
        "Dosing screws feeding dryers, granulators and mixers",
        "Dewatered sludge transport with adapted flight design",
        "Dust discharge under cyclones and filters",
        "Inclined transfer where space excludes belt conveyors",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "U-trough or tubular", text: "Trough design for access and cleaning; tube design for dust-tightness and inclines." },
        { title: "Flight variants", text: "Full, ribbon and paddle flights matched to material behaviour." },
        { title: "Material options", text: "Carbon steel, wear-protected or stainless execution for corrosive duties." },
        { title: "Dosing capability", text: "Inverter drive and load cells turn the screw into a metering device." },
        { title: "Sealing", text: "Shaft seals and gasketed covers for dust-tight operation." },
        { title: "Modular lengths", text: "Intermediate hanger bearings and flanged sections for longer routes." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Screw Conveyor Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Material, bulk density, flowability", "Filling degree and flight type"],
        ["Capacity (t/h or m³/h)", "Diameter, pitch and speed"],
        ["Route length and incline", "Drive power and bearing concept"],
        ["Temperature and corrosivity", "Material selection and sealing"],
        ["Dosing accuracy requirement", "Drive control and weighing integration"],
      ],
      note: "Screw diameter and speed are calculated per material; incline reduces capacity and is always checked in the design.",
    },
  ],
  faq: [
    {
      q: "Can screw conveyors handle wet sludge?",
      a: "Yes, with shaftless or adapted flight designs, suitable liners and drive reserves. Sludge screws are a standard part of our sludge drying lines.",
    },
    {
      q: "How accurate is screw dosing?",
      a: "With inverter control and gravimetric feedback (load cells), screw feeders achieve recipe-grade accuracy for most fertilizer and chemical applications; the achievable tolerance depends on material flowability.",
    },
    {
      q: "What limits the length of a screw conveyor?",
      a: "Torque on the central pipe and hanger bearing wear. Long routes are split into modular sections or handled by chain or belt conveyors — we advise the economic boundary per case.",
    },
  ],
  related: ["conveying", "chainConveyor", "dosingSystems", "sludgeDrying", "storageSystems"],
  schemaType: "Product",
};

export const chainConveyor: IntlPageContent = {
  meta: {
    title: "Chain Conveyor (Redler) Manufacturer | En-Masse Transport",
    description:
      "Closed chain conveyors (redler type) for abrasive, hot and dusty bulk materials. Horizontal and inclined en-masse transport by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Chain Conveyor",
  hero: {
    h1: "Chain Conveyors — Rugged En-Masse Transport in a Closed Casing",
    intro:
      "The chain conveyor (redler) drags material through a closed rectangular casing with flighted chain strands — en-masse: the whole material column moves together. That makes it the machine of choice for hot, abrasive and dusty products where belts and screws reach their limits.",
    image: { src: "/images/konveyor zincirli/konveyorzinc12.jpg", alt: "Chain conveyor (redler) manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle and Design",
      paragraphs: [
        "Inside the closed casing, a forged-link chain with transport flights moves along the trough bottom. The material fills the casing cross-section and travels as a compact column with minimal internal movement — gentle on the product, contained against dust, and tolerant of high temperatures.",
        "Design revolves around chain selection and wear management: chain breaking load with proper safety factor, hardened links and sprockets, replaceable bottom liners, and correctly engineered inlets that prevent flooding. Multiple inlets and outlets with motorised gates allow one conveyor to serve several silos or process points.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Hot product transport after dryers and coolers",
        "Abrasive minerals and ash handling",
        "Dusty powders requiring fully enclosed transport",
        "Distribution over silo groups with multiple outlets",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Closed, dust-tight casing", text: "Rectangular casing with gasketed covers and inspection ports." },
        { title: "Heavy-duty chain", text: "Forged links, hardened pins and sprockets sized with verified safety factors." },
        { title: "Wear liners", text: "Replaceable bottom and side liners for abrasive duties." },
        { title: "Multi-point service", text: "Several inlets/outlets with motorised slide gates on one machine." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Chain Conveyor Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Material, temperature, abrasiveness", "Chain, liner and casing specification"],
        ["Capacity (t/h)", "Casing cross-section and chain speed"],
        ["Route: length, incline", "Chain tension and drive power"],
        ["Number of inlets/outlets", "Gate configuration and controls"],
      ],
      note: "Chain speed is kept low by design to limit wear; capacity is achieved through cross-section — calculated per project.",
    },
  ],
  faq: [
    {
      q: "When is a chain conveyor better than a belt?",
      a: "When the material is hot, abrasive or dusty, when full enclosure is required, or when several inlets and outlets must be served on one route. Belts win on long distances and gentle handling.",
    },
    {
      q: "Can chain conveyors run inclined?",
      a: "Yes, moderate inclines are standard with adapted flight geometry; steeper angles reduce capacity and are evaluated case by case.",
    },
    {
      q: "How is chain wear managed?",
      a: "Through hardened chain components, replaceable liners, correct chain speed and tension monitoring. We specify wear parts for your material's abrasiveness.",
    },
  ],
  related: ["conveying", "bucketElevator", "screwConveyor", "storageSystems", "mining"],
  schemaType: "Product",
};

export const bucketElevator: IntlPageContent = {
  meta: {
    title: "Bucket Elevator Manufacturer | Vertical Bulk Transport",
    description:
      "Chain and belt bucket elevators for vertical transport of granules and powders. Project-based capacity design and manufacturing by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Bucket Elevator",
  hero: {
    h1: "Bucket Elevators — Vertical Transport with Minimal Footprint",
    intro:
      "Where material must gain height — feeding silos, screens or dryers — the bucket elevator lifts granules and powders vertically on a fraction of the floor space a conveyor would need. Pro Makina manufactures chain- and belt-type elevators with project-calculated capacity, discharge behaviour and drive.",
    image: { src: "/images/elevator zincirli/elevzinc1.jpg", alt: "Chain bucket elevator manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle and Design",
      paragraphs: [
        "Buckets fixed to a chain or belt scoop or receive material at the boot, carry it up inside the closed casing and discharge at the head — centrifugally for fast elevators handling free-flowing granules, or gravitationally for slower machines and fragile products. The head geometry, bucket shape and speed must match, otherwise material falls back and capacity collapses.",
        "Selection between chain and belt follows the duty: chains tolerate heat and abrasive products; belts run faster and quieter on free-flowing granules. Boot design, feed point and venting decide the real-world capacity as much as the theoretical calculation — all part of our engineering scope.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Feeding screens, dryers and granulators at height",
        "Silo and bunker filling",
        "Recycle streams in granulation loops",
        "Vertical transfer in space-limited plants",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Chain or belt type", text: "Selected by temperature, abrasiveness and speed requirements." },
        { title: "Discharge engineering", text: "Centrifugal or gravity discharge matched to bucket geometry and speed." },
        { title: "Safety equipment", text: "Backstop, rotation and belt-drift monitoring, explosion venting where required." },
        { title: "Access and service", text: "Inspection doors at boot and head, tensioning stations for easy maintenance." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Elevator Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Material, bulk density, particle size", "Bucket type, filling and speed"],
        ["Capacity (t/h)", "Bucket size, spacing and speed"],
        ["Lift height (m)", "Chain/belt selection and drive power"],
        ["Temperature and dust class", "Component and venting specification"],
      ],
      note: "Elevator capacity is calculated from bucket geometry, spacing and speed for your material — quoted per project.",
    },
  ],
  faq: [
    {
      q: "Chain or belt elevator — which one do I need?",
      a: "Chain elevators suit hot and abrasive materials at moderate speeds; belt elevators run faster and are preferred for free-flowing granules like finished fertilizer. We select based on your product.",
    },
    {
      q: "How is material breakage avoided?",
      a: "Through correct discharge design and speed: gravity discharge and moderate speeds protect fragile granules. This is part of the sizing calculation.",
    },
    {
      q: "What safety devices are included?",
      a: "Backstops against reverse rotation, speed and alignment monitoring, and — for dusty products — venting provisions specified per installation.",
    },
  ],
  related: ["conveying", "chainConveyor", "beltConveyor", "screeningSystems", "storageSystems"],
  schemaType: "Product",
};

export const dosingSystems: IntlPageContent = {
  meta: {
    title: "Dosing Systems | Micro & Macro Dosing, Recipe Control",
    description:
      "Gravimetric micro and macro dosing systems for fertilizer, chemical and feed plants: accurate recipes, weighing control and automation by Pro Makina.",
  },
  breadcrumbLabel: "Dosing Systems",
  hero: {
    h1: "Dosing Systems for Accurate Recipe Control",
    intro:
      "Product quality in fertilizer, chemical and blending plants is decided at the dosing step: every component must enter the recipe at the right rate. Pro Makina builds gravimetric dosing systems — micro dosing for additives, macro dosing for main components — with weighing technology and automation integrated.",
    image: { src: "/images/dozaj makro/makro1.png", alt: "Macro dosing system manufactured by Pro Makina" },
  },
  childLinks: [
    { key: "dosingBeltScale", title: "Weigh Belt Feeder", text: "Continuous gravimetric dosing with belt weighing for main material streams." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Micro and Macro Dosing",
      paragraphs: [
        "Macro dosing handles the main recipe components — typically from silos or bunkers via weigh belt feeders or loss-in-weight screws at rates of tonnes per hour. Micro dosing adds the small but critical ingredients: trace elements, additives, colourants — where a small absolute error is a large relative one, demanding fine screws and precise load cells.",
        "Both worlds meet in the recipe control system: setpoints per component, tolerance monitoring, batch reports. We deliver the mechanical dosing units, the weighing electronics and the PLC recipe logic as one system, so accuracy is a commitment rather than a hope.",
      ],
    },
    {
      type: "cards",
      heading: "System Components",
      items: [
        { title: "Weigh belt feeders", text: "Continuous gravimetric dosing of main streams with speed-controlled belts." },
        { title: "Loss-in-weight feeders", text: "Screw feeders on load cells for precise continuous dosing." },
        { title: "Micro dosing stations", text: "Multi-component additive dosing with fine screws and batch hoppers." },
        { title: "Batch weighing hoppers", text: "Cumulative weighing for batch mixing processes." },
        { title: "Recipe automation", text: "PLC-based recipe management, tolerance alarms and reporting." },
        { title: "Silo integration", text: "Discharge aids and feeding equipment matched to the storage above." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Dosing System Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Recipe components and rates", "Feeder types and sizes per component"],
        ["Required accuracy per component", "Weighing technology selection"],
        ["Batch or continuous process", "Feeder control mode and buffer design"],
        ["Material flow properties", "Discharge aids and anti-bridging measures"],
      ],
      note: "Dosing accuracy is stated per component in the proposal, based on the selected weighing principle and your material's flowability.",
    },
  ],
  faq: [
    {
      q: "What accuracy can gravimetric dosing achieve?",
      a: "It depends on the feeder principle and the material; loss-in-weight and belt weighing systems achieve recipe-grade accuracy for fertilizer and chemical blending. Exact tolerances are committed per component in the proposal.",
    },
    {
      q: "Can dosing be integrated with existing plant control?",
      a: "Yes. Our dosing PLCs exchange setpoints and reports with existing SCADA or ERP systems over standard industrial protocols.",
    },
  ],
  related: ["dosingBeltScale", "screwConveyor", "storageSystems", "fertilizerPlants", "chemicalProcess"],
  schemaType: "CollectionPage",
};

export const dosingBeltScale: IntlPageContent = {
  meta: {
    title: "Weigh Belt Feeder | Continuous Gravimetric Dosing",
    description:
      "Weigh belt feeders for continuous gravimetric dosing of bulk materials: belt weighing, speed control and recipe integration by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Weigh Belt Feeder",
  hero: {
    h1: "Weigh Belt Feeder — Continuous Dosing You Can Verify",
    intro:
      "The weigh belt feeder combines a short belt conveyor with precision weighing: load cells measure the material on the belt, the controller adjusts belt speed, and the result is a continuously verified mass flow. It is the standard machine for dosing main components into mixers, granulators and dryers.",
    image: { src: "/images/dozaj konveyor/dozaj1.jpg", alt: "Weigh belt feeder for gravimetric dosing by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle",
      paragraphs: [
        "Material flows from the hopper outlet onto the feeder belt through a defined inlet gate. Load cells under the weighing section measure the belt load (kg/m); multiplied by the measured belt speed (m/s) this gives the live mass flow (kg/s). The controller compares it with the setpoint and trims the belt speed — closing the loop within seconds.",
        "Because the measurement is direct and continuous, the feeder both doses and documents: totalised throughput per batch or shift feeds directly into recipe reports. Calibration with test weights or chains keeps the accuracy traceable.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Main component dosing in fertilizer blending and granulation",
        "Controlled feed into dryers and mills",
        "Raw material proportioning in chemical processes",
        "Throughput measurement and reporting on existing lines",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Precision weighing", text: "Load cell weighing section with rigid frame and defined belt tension." },
        { title: "Closed-loop control", text: "Inverter-driven belt with live mass flow control against setpoint." },
        { title: "Inlet engineering", text: "Gate and skirt design ensuring a stable material bed on the belt." },
        { title: "Calibration equipment", text: "Test weight or chain calibration for traceable accuracy." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Feeder Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Material and bulk density", "Belt width and bed depth"],
        ["Dosing range (t/h min–max)", "Turndown and drive sizing"],
        ["Required accuracy", "Weighing section and control specification"],
        ["Upstream storage", "Inlet gate and discharge aid design"],
      ],
      note: "Accuracy commitments are stated in the proposal based on the dosing range and material flow behaviour.",
    },
  ],
  faq: [
    {
      q: "How does a weigh belt feeder differ from a belt scale?",
      a: "A belt scale only measures flow on an existing conveyor; a weigh belt feeder actively controls the flow to a setpoint. For dosing duties the feeder is the right machine.",
    },
    {
      q: "What turndown ratio is possible?",
      a: "Weigh belt feeders regulate over a wide range between minimum and maximum flow; the practical turndown depends on stable material bed formation and is defined in the design.",
    },
  ],
  related: ["dosingSystems", "beltConveyor", "storageSystems", "fertilizerPlants"],
  schemaType: "Product",
};

export const reactorsTanks: IntlPageContent = {
  meta: {
    title: "Reactors & Process Tanks | Agitated Vessels, Dissolving Tanks",
    description:
      "Agitated reactors, dissolving tanks and storage tanks for liquid fertilizer and chemical production. Stainless and carbon steel fabrication by Pro Makina.",
  },
  breadcrumbLabel: "Reactors & Process Tanks",
  hero: {
    h1: "Reactors and Process Tanks for Liquid Production Lines",
    intro:
      "Liquid fertilizer and chemical preparation lines are built around vessels: agitated reactors where components react and blend, dissolving tanks where solids enter solution, and storage tanks that buffer production. Pro Makina fabricates these vessels with agitation, heating and dosing engineered per recipe.",
    image: { src: "/images/sıvı/sivi14.png", alt: "Agitated process reactor manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Vessel Types We Manufacture",
      items: [
        { title: "Agitated reactors", text: "Mixing vessels with impeller systems matched to viscosity and reaction needs." },
        { title: "Dissolving tanks", text: "High-shear or heated tanks bringing solid raw materials into solution." },
        { title: "Cooling tanks", text: "Jacketed vessels controlling product temperature after exothermic steps." },
        { title: "Pressure reactors", text: "Vessels for processes requiring elevated pressure, engineered to the applicable code." },
        { title: "Storage tanks", text: "Buffer and final product storage with level and recirculation options." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Engineering the Vessel Around the Recipe",
      paragraphs: [
        "A reactor is more than a drum with a motor: impeller type and speed follow from viscosity and mixing task; heating or cooling jackets follow from the reaction's thermal profile; materials follow from corrosivity — stainless grades for acidic liquid fertilizers, coated or carbon steel where the medium allows.",
        "We deliver vessels together with their periphery: dosing pumps and lances, load cells for batch weighing, CIP connections, level and temperature instrumentation, and the platform steelwork around them. That turns a tank into a working process step.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Vessel Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Recipe and media properties", "Material selection and agitator design"],
        ["Batch size / throughput", "Vessel volume and configuration"],
        ["Temperature profile", "Jacket, insulation and heating source"],
        ["Viscosity range", "Impeller type and drive power"],
        ["Weighing / dosing needs", "Load cells, pumps and instrumentation"],
      ],
      note: "Vessel volumes and agitator powers are calculated per recipe; pressure vessels are engineered to the applicable design code.",
    },
  ],
  faq: [
    {
      q: "Which materials are the tanks made of?",
      a: "Depending on the medium: 304/316 stainless steel for corrosive liquid fertilizers and chemicals, carbon steel with coatings where compatible. Material selection is justified in the proposal.",
    },
    {
      q: "Do you supply complete liquid production lines?",
      a: "Yes. Dissolving, reaction, filtration, storage and filling steps are designed as one line with piping, pumps and automation — see our liquid fertilizer plant solutions.",
    },
  ],
  related: ["chemicalProcess", "fertilizerPlants", "dosingSystems", "machines"],
  schemaType: "CollectionPage",
};

export const screeningSystems: IntlPageContent = {
  meta: {
    title: "Screening Systems | Trommel & Vibrating Screens",
    description:
      "Trommel screens, vibrating screens and dewatering screens for product classification in fertilizer, compost, mining and recycling plants. By Pro Makina.",
  },
  breadcrumbLabel: "Screening Systems",
  hero: {
    h1: "Screening Systems for Product Classification",
    intro:
      "Screens define what leaves your plant: they separate on-spec product from oversize and fines, protect downstream equipment and close recycle loops. Pro Makina manufactures trommel and vibrating screens sized for your material's particle distribution, moisture and capacity.",
    image: { src: "/images/elek/elek2.jpeg", alt: "Industrial screening system manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Screen Types We Manufacture",
      items: [
        { title: "Trommel screens", text: "Rotating drum screens — tolerant of moist, fibrous and mixed materials; the standard for compost and waste." },
        { title: "Vibrating screens", text: "Multi-deck vibrating screens for accurate granular classification at high throughput." },
        { title: "Dewatering screens", text: "Vibrating screens removing surface water from sand and mineral products." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Selecting and Sizing the Screen",
      paragraphs: [
        "Screening efficiency lives on the screen area and the motion: enough area for the feed rate, the right stroke and speed for the material, and apertures chosen against the real particle distribution — not the nominal product size. Moist and sticky materials favour trommels with cleaning brushes; dry granules run best on vibrating decks.",
        "In granulation plants the screen is part of the recycle loop, splitting product from oversize (to the crusher) and undersize (back to the granulator). Loop stability depends on screen sharpness, so we size screens conservatively and design access for panel changes.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Screen Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Feed particle distribution", "Aperture selection and deck count"],
        ["Capacity (t/h)", "Screen area and motion parameters"],
        ["Moisture and stickiness", "Trommel vs vibrating selection, cleaning system"],
        ["Cut points required", "Number of decks / drum sections"],
      ],
      note: "Screen area and type are calculated from your feed analysis; sample screening tests can be arranged for difficult materials.",
    },
  ],
  faq: [
    {
      q: "Trommel or vibrating screen — which is right?",
      a: "Moist, fibrous or mixed materials (compost, waste) run better on trommels; dry granular products classify more sharply on vibrating screens. Capacity and cut points refine the choice.",
    },
    {
      q: "How is screen blinding handled?",
      a: "With cleaning brushes on trommels, ball-deck or heated options on vibrating screens, and aperture selection adapted to the material's moisture.",
    },
  ],
  related: ["granulatorDrum", "crushers", "compostPlants", "mining", "recycling"],
  schemaType: "CollectionPage",
};

export const dustCollection: IntlPageContent = {
  meta: {
    title: "Dust Collection Systems | Cyclones & Pulse-Jet Filters",
    description:
      "Cyclone separators and pulse-jet bag filters for process air cleaning and product recovery in drying, grinding and handling plants. By Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Dust Collection Systems",
  hero: {
    h1: "Dust Collection — Clean Air and Recovered Product",
    intro:
      "Every dryer, mill and transfer point moves air, and that air carries product. Dust collection systems recover those fines and keep emissions within limits. Pro Makina designs cyclone and pulse-jet filter systems as an integral part of the process air circuit, not as an afterthought.",
    image: { src: "/images/jet pulse/jerpul4.jpg", alt: "Pulse-jet bag filter system manufactured by Pro Makina" },
  },
  childLinks: [
    { key: "cyclones", title: "Cyclone Separator", text: "Robust centrifugal pre-separation of coarse dust with no moving parts." },
  ],
  sections: [
    {
      type: "cards",
      heading: "System Components",
      items: [
        { title: "Cyclone separators", text: "First-stage recovery of coarse particles from dryer and mill exhausts." },
        { title: "Pulse-jet bag filters", text: "Final filtration with automatic compressed-air cleaning of the bags." },
        { title: "Process fans", text: "Fans sized for the system resistance with inverter control options." },
        { title: "Rotary airlocks", text: "Dust discharge from cyclones and filters back into the process." },
        { title: "Ducting design", text: "Air velocity-controlled duct routing that avoids settling and wear." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Why the Air Circuit Must Be One Design",
      paragraphs: [
        "Air volume, temperature, moisture and dust load leaving a dryer are results of the drying calculation — and inputs to the cyclone and filter design. Undersized filters blind within weeks; oversized ones waste capital and compressed air. Filter media must match temperature and product moisture to avoid condensation damage.",
        "Because we design the dryer and the dust collection together, the guarantee covers the complete circuit: emission values at the stack, recovered product back in the process, and stable pressure conditions across the line.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Dust System Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Air volume and temperature", "Cyclone/filter sizing and media selection"],
        ["Dust load and particle size", "Pre-separation need and filter area"],
        ["Moisture / dew point", "Insulation and condensation protection"],
        ["Emission limit at site", "Filtration stage configuration"],
      ],
      note: "For existing plants we measure the actual air data on site before designing the upgrade.",
    },
  ],
  faq: [
    {
      q: "Is a cyclone alone sufficient?",
      a: "Where emission limits are strict, no — the cyclone pre-separates coarse dust and protects the bag filter, which delivers the final cleaning. The combination is the standard solution behind dryers.",
    },
    {
      q: "Is collected dust waste or product?",
      a: "Usually product: fertilizer and mineral fines recovered from cyclones and filters are returned to the process via rotary airlocks and screws — improving yield.",
    },
  ],
  related: ["cyclones", "rotaryDryer", "crushers", "machines"],
  schemaType: "CollectionPage",
};

export const cyclones: IntlPageContent = {
  meta: {
    title: "Cyclone Separator | Centrifugal Dust Pre-Separation",
    description:
      "Cyclone separators for coarse dust recovery from dryer and mill exhaust air: no moving parts, high temperature tolerance. Manufactured by Pro Makina.",
  },
  breadcrumbLabel: "Cyclone Separator",
  hero: {
    h1: "Cyclone Separators — Robust Pre-Separation Without Moving Parts",
    intro:
      "The cyclone uses pure geometry: dust-laden air enters tangentially, spins into a vortex, and centrifugal force throws particles to the wall where they slide into the dust outlet. No filter media, no moving parts — which makes cyclones the tough first stage of nearly every drying and grinding air circuit.",
    image: { src: "/images/siklon/siklon1.jpg", alt: "Cyclone separator manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Working Principle and Design",
      paragraphs: [
        "Separation efficiency is decided by the cyclone's geometry and the inlet velocity: tighter bodies capture finer particles at the price of pressure drop. Designing a cyclone means balancing the cut size against fan energy — and matching the cone and dust outlet to the product so it discharges without bridging.",
        "Cyclones tolerate high temperatures and abrasive dusts that would destroy filter bags, which is why they stand directly behind dryers and mills as the first stage, recovering the bulk of the product before a pulse-jet filter polishes the air.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Product recovery behind rotary dryers",
        "Pre-separation ahead of pulse-jet bag filters",
        "Mill and classifier air circuits",
        "High-temperature exhaust streams",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Efficiency-tuned geometry", text: "Body proportions calculated for your particle size and air data." },
        { title: "Wear protection", text: "Increased wall thickness or liners at the inlet and cone for abrasive dusts." },
        { title: "Multi-cyclone batteries", text: "Parallel cyclone groups where air volume exceeds single-unit range." },
        { title: "Sealed discharge", text: "Rotary airlocks maintaining the pressure boundary at the dust outlet." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Cyclone Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Air volume (m³/h) and temperature", "Cyclone diameter and count"],
        ["Dust particle size distribution", "Achievable separation efficiency"],
        ["Allowed pressure drop", "Geometry class selection"],
        ["Dust abrasiveness", "Wear protection specification"],
      ],
      note: "Separation efficiency is stated for your particle distribution; final polishing to emission limits is handled by the downstream filter.",
    },
  ],
  faq: [
    {
      q: "What efficiency does a cyclone achieve?",
      a: "It depends on particle size: coarse fractions are captured almost completely, fine fractions partially. For emission compliance a bag filter follows; the cyclone's job is bulk recovery and filter protection.",
    },
    {
      q: "Do cyclones wear out?",
      a: "With abrasive dusts the inlet and cone wear over years; we counter this with thicker plate or liners in those zones — specified according to your dust.",
    },
  ],
  related: ["dustCollection", "rotaryDryer", "crushers", "machines"],
  schemaType: "Product",
};

export const packagingSystems: IntlPageContent = {
  meta: {
    title: "Packaging & Bagging Systems | Open-Mouth, Big-Bag, Palletizing",
    description:
      "Open-mouth bagging, big-bag (FIBC) filling and palletizing lines for granular and powder products. Line integration by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Packaging & Bagging Systems",
  hero: {
    h1: "Packaging and Bagging Systems for Final Product Handling",
    intro:
      "The last metres of the plant decide how your product reaches the customer. Pro Makina integrates weighing hoppers, open-mouth bagging stations, big-bag filling and palletizing into lines matched to your product, bag type and shift capacity.",
    image: { src: "/images/paketleme/paket4.jpg", alt: "Bagging and packaging line integrated by Pro Makina" },
  },
  sections: [
    {
      type: "cards",
      heading: "Line Components",
      items: [
        { title: "Net-weight bagging", text: "Weighing hopper and open-mouth filling stations for 10–50 kg bags." },
        { title: "Big-bag (FIBC) filling", text: "Filling frames with weighing for 500–1500 kg flexible containers." },
        { title: "Bag closing", text: "Sewing or sealing units matched to the bag material." },
        { title: "Palletizing", text: "Bag conveyors and palletizing solutions for shipment preparation." },
        { title: "Liquid filling", text: "Volumetric filling and labelling lines for liquid fertilizer products." },
        { title: "Dust control", text: "Local extraction at filling points keeping the packing hall clean." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Integration Is the Value",
      paragraphs: [
        "Bagging equipment only performs when the product arrives right: cooled, screened, free-flowing, and buffered in a properly designed hopper above the scale. We engineer the packing line together with the upstream process — surge bins, feeders and dust extraction included — so rated bag-per-hour figures survive contact with reality.",
        "Capacity planning covers the whole chain: filling, closing, transport and palletizing must match, otherwise the slowest element sets the pace. We design the line to your shift output and product mix.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Packing Line Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Product and flow behaviour", "Feeder and scale configuration"],
        ["Bag types and sizes", "Station selection and closing method"],
        ["Bags or big-bags per hour", "Line capacity and buffer sizing"],
        ["Manual or automated level", "Operator count vs automation scope"],
      ],
      note: "Line throughput is quoted for your specific bag sizes and product; utilities and compressed air needs are listed in the proposal.",
    },
  ],
  faq: [
    {
      q: "Can one line handle both 25 kg bags and big-bags?",
      a: "Yes, combined lines with a shared buffer hopper serving both an open-mouth station and a big-bag frame are common; the design depends on your product mix and change-over frequency.",
    },
    {
      q: "Do you automate existing packing halls?",
      a: "Yes — scales, closing units, conveyors and palletizing can be added stepwise to existing manual lines after a site survey.",
    },
  ],
  related: ["storageSystems", "coolingDrum", "coatingDrum", "fertilizerPlants"],
  schemaType: "CollectionPage",
};

export const storageSystems: IntlPageContent = {
  meta: {
    title: "Silo, Bunker & Feeding Systems | Bulk Storage",
    description:
      "Silos, bunkers, hoppers and controlled feeding systems for bulk solids: mass-flow design, discharge aids and dosing integration by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Silos & Feeding Systems",
  hero: {
    h1: "Silo, Bunker and Feeding Systems for Bulk Solids",
    intro:
      "Storage is where bulk material problems begin — or are prevented. Pro Makina designs silos, bunkers and hoppers with outlet geometry engineered for your material's flow behaviour, and combines them with feeders and gates that turn stored material into a controlled process stream.",
    image: { src: "/images/bunker/bunker2.jpg", alt: "Storage bunker system manufactured by Pro Makina" },
  },
  childLinks: [
    { key: "bunkersHoppers", title: "Bunkers & Hoppers", text: "Receiving and buffer bunkers with discharge geometry matched to the material." },
  ],
  sections: [
    {
      type: "cards",
      heading: "System Components",
      items: [
        { title: "Storage silos", text: "Cylindrical silos for granular products with level monitoring and venting." },
        { title: "Receiving bunkers", text: "Truck and loader receiving points with grids and robust wear surfaces." },
        { title: "Buffer hoppers", text: "Process buffers above dosing and packing equipment." },
        { title: "Discharge aids", text: "Vibrators, aeration and mechanical dischargers against bridging and ratholing." },
        { title: "Slide gates and valves", text: "Manual and motorised gates for controlled discharge." },
        { title: "Feeding equipment", text: "Screws, belts and rotary valves converting storage into a steady feed." },
      ],
    },
    {
      type: "paragraphs",
      heading: "Flow Behaviour Drives the Design",
      paragraphs: [
        "The same silo that empties cleanly on dry granules can rathole on moist powder. Outlet dimensions, hopper angles and wall material must follow the material's internal friction and cohesion; discharge aids compensate what geometry cannot. Getting this right at design time costs a calculation — getting it wrong costs daily hammer blows and production stops.",
        "We size storage volumes from your logistics (delivery lots, buffer days, batch sizes) and design the discharge from your material data, then integrate gates and feeders so downstream dosing receives a stable flow.",
      ],
    },
    {
      type: "table",
      heading: "Data Required for Storage System Design",
      columns: ["Design input", "Role in the design"],
      rows: [
        ["Material flow properties, moisture", "Hopper angles and outlet size"],
        ["Storage volume needed", "Silo/bunker dimensions"],
        ["Filling method (truck, conveyor)", "Inlet and venting design"],
        ["Downstream feed rate", "Gate and feeder selection"],
      ],
      note: "For cohesive materials, flow tests on your sample improve outlet design reliability.",
    },
  ],
  faq: [
    {
      q: "How is bridging prevented?",
      a: "Primarily by correct outlet size and hopper angle for the material; where needed, vibration, aeration or mechanical discharge aids are added. The combination is specified from your material data.",
    },
    {
      q: "Do you supply silo groups with distribution?",
      a: "Yes — silo batteries with filling conveyors, distributors and discharge collection are engineered as complete systems including level instrumentation.",
    },
  ],
  related: ["bunkersHoppers", "dosingSystems", "conveying", "packagingSystems"],
  schemaType: "CollectionPage",
};

export const bunkersHoppers: IntlPageContent = {
  meta: {
    title: "Bunkers & Hoppers | Receiving and Buffer Storage",
    description:
      "Receiving bunkers and buffer hoppers with anti-bridging discharge design for bulk solids. Engineered and fabricated by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Bunkers & Hoppers",
  hero: {
    h1: "Bunkers and Hoppers — Controlled Intake and Buffering",
    intro:
      "The bunker is the plant's front door: trucks and loaders dump material in seconds, the process consumes it steadily for hours. Pro Makina designs receiving bunkers and buffer hoppers whose discharge geometry, wear protection and feeders match your material — so intake never becomes the bottleneck.",
    image: { src: "/images/bunker/bunker2.jpg", alt: "Receiving bunker with discharge feeder by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Design Principles",
      paragraphs: [
        "A receiving bunker takes impact loads, abrasion and irregular dumping; its grid keeps oversize out, its walls need wear plates where material strikes, and its outlet must release cohesive material without manual help. Buffer hoppers above dosing equipment have the opposite duty: small volume, but absolutely steady discharge into the feeder below.",
        "Both duties come down to geometry and material data: hopper half-angles, outlet dimensions and wall surfaces engineered against your material's cohesion and moisture range — supported by vibrators or aeration only where geometry alone cannot guarantee flow.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Truck receiving bunkers for raw materials and waste",
        "Loader-fed intake hoppers in compost and recycling plants",
        "Buffer hoppers above weigh feeders and packing scales",
        "Day bins for additives and recycled streams",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Anti-bridging geometry", text: "Outlet sizes and hopper angles derived from material flow properties." },
        { title: "Wear protection", text: "Replaceable liners and impact zones for abrasive intake duties." },
        { title: "Discharge equipment", text: "Screw, belt or vibro feeders integrated under the outlet." },
        { title: "Level monitoring", text: "Continuous or point level instrumentation tied into plant control." },
      ],
    },
  ],
  faq: [
    {
      q: "How large should a receiving bunker be?",
      a: "It follows from your delivery logistics: truck sizes, dumping frequency and the downstream consumption rate. We size the volume so trucks never wait and the process never starves.",
    },
    {
      q: "Which feeder goes under the bunker?",
      a: "Screws for dosing accuracy, belts for high rates and mixed materials, vibro feeders for simple extraction — selected from your material and rate requirements.",
    },
  ],
  related: ["storageSystems", "screwConveyor", "beltConveyor", "dosingSystems"],
  schemaType: "Product",
};
