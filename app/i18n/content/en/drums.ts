import type { IntlPageContent } from "../types";

export const drumSystems: IntlPageContent = {
  meta: {
    title: "Rotary Drum Systems | Dryers, Granulators, Coolers, Coating Drums",
    description:
      "Pro Makina manufactures rotary drum systems: drying, granulation, cooling, coating and compost drums, engineered per project for fertilizer, mining and waste processing.",
  },
  breadcrumbLabel: "Rotary Drum Systems",
  hero: {
    h1: "Rotary Drum Systems for Thermal and Granulation Processes",
    intro:
      "Rotary drums are the heart of drying, granulation, cooling, coating and composting lines. Pro Makina designs and fabricates the complete drum system — shell, tyres, rollers, drive, internal flights, burner and air circuit — sized from your raw material analysis and capacity target.",
    image: { src: "/images/tambur kurutma/tamkurutma1.jpg", alt: "Rotary drum system manufactured by Pro Makina" },
  },
  childLinks: [
    { key: "rotaryDryer", title: "Rotary Dryer", text: "Direct fired drum dryers that reduce moisture of fertilizer, sand, sludge and organic materials." },
    { key: "granulatorDrum", title: "Rotary Drum Granulator", text: "Agglomeration drums forming round granules from powders with liquid binder dosing." },
    { key: "coolingDrum", title: "Rotary Cooler", text: "Cooling drums that stabilise granule temperature after drying to protect quality and prevent caking." },
    { key: "coatingDrum", title: "Coating Drum", text: "Anti-caking and nutrient coating applications on granular fertilizer surfaces." },
    { key: "compostDrum", title: "Compost Drum", text: "Rotating composting reactors that accelerate aerobic stabilisation of organic waste." },
  ],
  sections: [
    {
      type: "paragraphs",
      heading: "Why the Drum Must Be Engineered, Not Picked from a Table",
      paragraphs: [
        "Two materials with the same tonnage can need completely different drums. Evaporation load, particle behaviour, abrasiveness, stickiness and temperature sensitivity determine the drum diameter, length, slope, rotation speed, flight geometry and air velocity. A drum copied from a catalogue either underperforms or wastes fuel and capital.",
        "Pro Makina sizes each drum with mass and heat balance calculations, selects shell thickness and materials for the duty, and designs the mechanical package — riding rings, support and thrust rollers, girth gear or friction drive — for continuous industrial operation.",
      ],
    },
    {
      type: "cards",
      heading: "Scope of a Complete Drum System",
      items: [
        { title: "Drum body", text: "Rolled and stress-relieved shell with riding rings, machined surfaces and inspection doors." },
        { title: "Drive group", text: "Girth gear-pinion or friction drive with gearbox and motor sized for starting torque." },
        { title: "Internal flights", text: "Lifting, cascading and transport flights matched to material behaviour along the drum." },
        { title: "Thermal system", text: "Burner and combustion chamber for dryers; air volume and temperature profile per heat balance." },
        { title: "Air circuit", text: "Fan, cyclone and filter selection integrated with the drum's process air requirements." },
        { title: "Sealing", text: "Inlet and outlet seals limiting false air and dust emissions at drum interfaces." },
      ],
    },
    {
      type: "table",
      heading: "Design Data We Ask For",
      intro: "These inputs drive the sizing of every rotary drum. Approximate values are fine to start; critical ones are confirmed by testing.",
      columns: ["Design input", "Why it matters"],
      rows: [
        ["Raw material and analysis", "Determines temperature limits, corrosion and abrasion protection"],
        ["Capacity (t/h or t/day)", "Sets drum volume together with retention time"],
        ["Inlet / target moisture (%)", "Defines evaporation load and thermal power for dryers"],
        ["Bulk density and particle size", "Affects filling degree, flight design and air velocity"],
        ["Operating hours per day", "Converts daily tonnage into hourly design capacity"],
        ["Available fuel type", "Determines burner and combustion chamber design"],
      ],
      note: "Final drum diameter, length and drive power are determined per project based on process calculations.",
    },
  ],
  faq: [
    {
      q: "Which industries use Pro Makina rotary drums?",
      a: "Fertilizer and compost production, sludge drying, mining and mineral processing, animal by-product processing, and recycling plants use our drying, granulation, cooling, coating and composting drums.",
    },
    {
      q: "Do you supply the burner and air circuit with the drum?",
      a: "Yes. For thermal drums we quote the complete system: burner, combustion chamber, fans, cyclone and filter, so the guarantee covers the whole thermal circuit, not just the shell.",
    },
    {
      q: "Can an existing drum be revised instead of replaced?",
      a: "Often yes. Shell sections, riding rings, rollers and flights can be renewed, and drives or sealing systems upgraded, after an on-site technical survey.",
    },
  ],
  related: ["rotaryDryer", "granulatorDrum", "coolingDrum", "coatingDrum", "compostDrum", "fertilizerPlants"],
  schemaType: "CollectionPage",
};

export const rotaryDryer: IntlPageContent = {
  meta: {
    title: "Industrial Rotary Dryer Manufacturer | Drum Drying Systems",
    description:
      "Rotary drum dryers engineered per project: fertilizer, sand, sludge and compost drying with burner, air circuit and dust collection. Manufactured in Turkey by Pro Makina.",
  },
  breadcrumbLabel: "Rotary Dryer",
  hero: {
    h1: "Industrial Rotary Dryer — Engineered for Your Material",
    intro:
      "The rotary dryer is the workhorse of industrial moisture reduction: a rotating drum where hot air and internal flights bring the wet material to the target outlet moisture in continuous operation. Pro Makina designs the complete drying system — drum, burner, combustion chamber, fans, cyclone and filter — from your material data and capacity target.",
    image: { src: "/images/tambur kurutma/tamkurutma25.jpg", alt: "Industrial rotary dryer drum manufactured by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "How a Rotary Dryer Works",
      paragraphs: [
        "Wet material is fed into the rotating drum, where lifting flights pick it up and shower it through a stream of hot air generated by the burner and combustion chamber. The repeated cascade maximises the contact surface between material and air, so moisture evaporates while the material travels along the drum's slope towards the discharge.",
        "The dryer can run co-current (hot air and material in the same direction) for heat-sensitive products, or counter-current for maximum thermal efficiency on robust minerals. Retention time is tuned by drum slope, rotation speed and flight design — three parameters we calculate specifically for your material.",
      ],
    },
    {
      type: "bullets",
      heading: "Materials We Dry",
      intro: "Typical feed materials for Pro Makina rotary dryers include:",
      items: [
        "Granular and powder fertilizers: NPK, organomineral, organic granules",
        "Compost and fermented organic materials",
        "Dewatered municipal and industrial sludge",
        "Silica sand, calcite, perlite, feldspar and other minerals",
        "Animal by-products and processed manure",
        "Biomass and recycled material fractions",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Project-based sizing", text: "Drum diameter, length, slope and rotation speed derived from evaporation load and retention time calculations." },
        { title: "Flight design", text: "Lifting and cascading flight patterns adapted along the drum as material dries and flow behaviour changes." },
        { title: "Burner and combustion chamber", text: "Natural gas, LPG, diesel, coal or biomass firing with refractory-lined combustion chamber matched to the duty." },
        { title: "Robust mechanical package", text: "Riding rings, support and thrust rollers, and girth gear or friction drive engineered for continuous operation." },
        { title: "Sealing and air control", text: "Inlet/outlet seals limit false air; fan and damper selection keeps the air velocity in the design window." },
        { title: "Automation options", text: "Outlet temperature and moisture-based control loops, inverter-driven drum speed and burner modulation." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Dryer Sizing",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Raw material type and analysis", "Temperature limits, stickiness, abrasion and corrosion measures"],
        ["Capacity (t/h wet feed)", "Drum volume and mechanical sizing"],
        ["Inlet moisture (%)", "Evaporation load — the core of the heat balance"],
        ["Target outlet moisture (%)", "Retention time and air temperature profile"],
        ["Fuel type available on site", "Burner and combustion chamber selection"],
        ["Operating hours per day", "Hourly design capacity and duty classification"],
      ],
      note: "Capacity and dimensions are calculated per project from raw material analysis and moisture values; we do not quote generic capacity tables.",
    },
    {
      type: "paragraphs",
      heading: "The Dryer Inside the Process Line",
      paragraphs: [
        "A dryer never works alone. Upstream, dosing and feeding equipment must deliver a stable wet feed; downstream, the cyclone and pulse-jet filter recover product fines and clean the exhaust air, while a cooler stabilises the product before storage or bagging. Pro Makina designs this complete circuit, because outlet moisture guarantees only make sense when the whole air and material path is engineered together.",
        "In granular fertilizer plants the dryer sits directly after the granulator drum and before the cooler and screen; in sludge and compost lines it is combined with special feeding solutions for sticky materials. Tell us where the dryer fits in your process and we will design the interfaces accordingly.",
      ],
    },
  ],
  faq: [
    {
      q: "What capacity rotary dryers can you manufacture?",
      a: "Drum size is calculated from your evaporation load, so capacity is quoted per project. Send raw material, inlet/outlet moisture and daily tonnage through the quote form and we will size the dryer accordingly.",
    },
    {
      q: "Which fuels can the dryer use?",
      a: "Natural gas, LPG, diesel, coal and biomass are all possible. The burner, combustion chamber and refractory design change with the fuel, so fuel type is a key input to the proposal.",
    },
    {
      q: "How is the outlet moisture guaranteed?",
      a: "The guarantee is based on the design heat balance for the agreed material data, verified during commissioning with moisture measurements. Material deviating strongly from the design basis requires re-evaluation.",
    },
    {
      q: "Can the dryer handle sticky materials like sludge?",
      a: "Yes, with adapted solutions: back-mixing of dry product, special flight design, and feed screws designed for sticky pastes. These options are part of the project engineering.",
    },
    {
      q: "Do you supply dust collection with the dryer?",
      a: "Yes. Cyclone and pulse-jet filter systems are quoted with the dryer so emission values and product recovery are covered by one design.",
    },
  ],
  related: ["drumSystems", "coolingDrum", "granulatorDrum", "cyclones", "sludgeDrying", "mining"],
  schemaType: "Product",
};

export const granulatorDrum: IntlPageContent = {
  meta: {
    title: "Rotary Drum Granulator | Fertilizer Granulation Systems",
    description:
      "Rotary drum granulators for NPK, organomineral and compost-based fertilizers. Project-based design with binder dosing and recycle control by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Rotary Drum Granulator",
  hero: {
    h1: "Rotary Drum Granulator for Fertilizer Production",
    intro:
      "The drum granulator turns powder raw materials into round, uniform granules by rolling agglomeration: liquid binder is dosed onto the rotating material bed, fine particles stick together and grow into granules ready for drying and screening. Pro Makina engineers the granulation drum together with its dosing and recycle circuit.",
    image: { src: "/images/tambur granulator/tamgranulator1.png", alt: "Rotary drum granulator for fertilizer production by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "How Drum Granulation Works",
      paragraphs: [
        "Inside the rotating drum the powder bed tumbles continuously. Water, steam or a binder solution is sprayed onto the bed through a dosing lance; wetted particles collide, stick and layer into growing granules. Drum slope and rotation speed set the retention time, while the spray pattern and liquid-to-solid ratio control the granule size distribution.",
        "Fresh granules are still moist and mechanically weak, so the granulator is always followed by a dryer, a cooler and screens: on-spec granules go to coating and bagging, oversize is crushed and returned, undersize is recycled directly. Granulation quality is therefore a property of the whole loop — which is why we design the loop, not just the drum.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Products Granulated",
      items: [
        "NPK compound fertilizers from powder raw materials",
        "Organomineral fertilizers combining organic matter with mineral nutrients",
        "Compost-based granular fertilizers and soil conditioners",
        "Processed manure granules",
        "Mineral powders requiring dust-free, free-flowing granular form",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Retention control", text: "Drum diameter, length, slope and speed calculated for the target granule growth." },
        { title: "Binder dosing", text: "Pump and spray lance systems for water, steam or nutrient solutions with flow control." },
        { title: "Internal lining options", text: "Anti-stick lining and scraper solutions for adhesive organic formulations." },
        { title: "Recycle integration", text: "Screen and crusher circuit balancing on-spec output and stable granulation." },
        { title: "Drive and mechanics", text: "Riding rings, rollers and gear or friction drive for continuous duty." },
        { title: "Automation", text: "Liquid dosing loops and drum speed control tied to feed rate for stable product size." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Granulator Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Raw material formulation", "Binder selection, stickiness, lining and spray design"],
        ["Target granule size (mm)", "Retention time and drum speed window"],
        ["Capacity (t/h product)", "Drum volume including recycle stream"],
        ["Available binder / liquid", "Dosing system and liquid-solid ratio"],
        ["Downstream dryer capacity", "Moisture budget of the granulation loop"],
      ],
      note: "Granulation behaviour is material-specific; pilot trials can be arranged before final sizing where formulations are new.",
    },
  ],
  faq: [
    {
      q: "What granule size can the drum produce?",
      a: "Commercial fertilizer granulation typically targets 2–4 mm; the achievable distribution depends on the formulation and binder. The screen circuit ensures only on-spec product leaves the line.",
    },
    {
      q: "Can compost be granulated without mineral additives?",
      a: "Compost-based granulation usually requires a binder and careful moisture control; depending on the target product, mineral nutrient addition improves both agronomic value and granule strength. We evaluate this per formulation.",
    },
    {
      q: "Is a disc (pan) granulator an alternative?",
      a: "For some capacities and formulations, yes. Drum granulators handle higher tonnages and recycle streams more robustly; disc granulators offer tighter size control at smaller scale. We advise based on your product and capacity.",
    },
    {
      q: "What comes after the granulator?",
      a: "A rotary dryer, a rotary cooler, screening with oversize crushing, optional coating, and bagging. We design this complete granulation loop as one process.",
    },
  ],
  related: ["drumSystems", "rotaryDryer", "coolingDrum", "coatingDrum", "fertilizerPlants", "screeningSystems"],
  schemaType: "Product",
};

export const coolingDrum: IntlPageContent = {
  meta: {
    title: "Rotary Cooler | Granule Cooling Drums",
    description:
      "Rotary cooling drums stabilise granule temperature after drying, preventing caking and quality loss in fertilizer and mineral plants. Project-based design by Pro Makina.",
  },
  breadcrumbLabel: "Rotary Cooler",
  hero: {
    h1: "Rotary Cooler — Product Stabilisation After Drying",
    intro:
      "Granules leaving the dryer are hot, and hot granules cake in storage, damage bags and keep curing reactions running. The rotary cooler brings product temperature close to ambient using controlled counter-current air flow, protecting granule quality from the dryer discharge to the warehouse.",
    image: { src: "/images/tambur sogutma/tamsogutma1.png", alt: "Rotary cooling drum for granular products by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "Why Cooling Is a Process Step, Not an Accessory",
      paragraphs: [
        "In fertilizer production, warm granules stored in bulk continue to exchange moisture and heat, which leads to caking — fused lumps that destroy product value. Cooling the granules to near-ambient temperature before storage or bagging interrupts this mechanism and keeps the product free-flowing.",
        "The cooling drum works like a dryer in reverse: ambient or conditioned air flows counter-current to the hot granules, picking up their heat while flights shower the material through the air stream. Air volume, drum geometry and retention time are calculated from the required temperature drop and the granule properties.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Applications",
      items: [
        "Granular NPK and organomineral fertilizer after rotary drying",
        "Compost-based granules before bagging",
        "Mineral granules and processed sand products",
        "Any granular product where storage temperature drives caking risk",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Counter-current air design", text: "Maximum temperature difference along the drum for efficient heat removal." },
        { title: "Flight geometry", text: "Cascading patterns that expose granules to air without degrading them mechanically." },
        { title: "Dust-controlled circuit", text: "Cooler exhaust air routed to cyclone and filter, recovering fines to the process." },
        { title: "Mechanical package", text: "Riding rings, rollers and drive identical in quality to our dryer line." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Cooler Sizing",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Product and granule size", "Air velocity limit to avoid carry-over"],
        ["Inlet product temperature (°C)", "Heat load to be removed"],
        ["Target outlet temperature (°C)", "Air volume and retention time"],
        ["Capacity (t/h)", "Drum volume and mechanical sizing"],
        ["Ambient conditions at site", "Cooling air design temperature"],
      ],
      note: "Cooler dimensions are determined per project from the heat balance; site climate data improves accuracy.",
    },
  ],
  faq: [
    {
      q: "Is a cooler always required after a dryer?",
      a: "For bagged or bulk-stored granular fertilizer it almost always pays back through avoided caking. For products consumed immediately or insensitive to temperature it can be omitted — we assess this in the line design.",
    },
    {
      q: "Can the cooler share the dust collection of the dryer?",
      a: "Depending on air volumes and temperatures, cooler exhaust can be combined into a common filter or handled separately. Both variants are engineered case by case.",
    },
    {
      q: "What temperature drop can be achieved?",
      a: "Typically the product is brought to within a defined margin above ambient temperature; the exact figure depends on climate data, air volume and retention time and is stated in the project design.",
    },
  ],
  related: ["drumSystems", "rotaryDryer", "coatingDrum", "fertilizerPlants", "cyclones"],
  schemaType: "Product",
};

export const coatingDrum: IntlPageContent = {
  meta: {
    title: "Coating Drum | Fertilizer Granule Coating Systems",
    description:
      "Coating drums apply anti-caking and nutrient coatings to fertilizer granules. Dosing systems and drum design engineered per product by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Coating Drum",
  hero: {
    h1: "Coating Drum for Granular Fertilizer Finishing",
    intro:
      "The coating drum is the final quality step of a granulation line: oil-based anti-caking agents, powders or nutrient solutions are applied evenly onto the granule surface in a rotating drum, improving storage behaviour, dust control and product appearance.",
    image: { src: "/images/tambur kaplama/tamkaplama1.png", alt: "Fertilizer granule coating drum by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "How Granule Coating Works",
      paragraphs: [
        "Cooled, screened granules enter the coating drum where a controlled film of coating agent — typically an anti-caking oil, a wax, or a micronutrient suspension — is sprayed onto the rolling granule bed. The tumbling action distributes the agent evenly over every granule surface; where powder coatings are used, a dosing screw adds the powder onto the freshly wetted granules.",
        "Coating quantity is small but precision matters: under-dosing leaves caking risk, over-dosing wastes agent and can make product oily. The dosing pumps, nozzles and drum internals are therefore selected for your specific coating recipe.",
      ],
    },
    {
      type: "bullets",
      heading: "Typical Coating Applications",
      items: [
        "Anti-caking treatment of NPK and urea-based granules",
        "Dust suppression coatings for handling and bagging",
        "Micronutrient application onto finished granules",
        "Colour or marker coatings for product identification",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Precision dosing", text: "Metering pumps and spray lances matched to coating viscosity and dosage rate." },
        { title: "Gentle drum design", text: "Geometry and internals that roll granules without attrition or breakage." },
        { title: "Heated agent circuits", text: "Optional heated tanks and traced lines for wax or high-viscosity agents." },
        { title: "Combined powder dosing", text: "Screw feeders for powder coating agents synchronised with liquid dosing." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Coating System Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Granule product and size", "Drum geometry and rolling behaviour"],
        ["Coating agent and dosage (kg/t)", "Pump, nozzle and tank selection"],
        ["Capacity (t/h)", "Drum size and dosing turndown"],
        ["Agent viscosity / temperature needs", "Heating and tracing requirements"],
      ],
      note: "Coating recipes are product-specific; dosing rates are confirmed with your agent supplier data.",
    },
  ],
  faq: [
    {
      q: "Where does the coating drum sit in the line?",
      a: "After cooling and screening, immediately before bagging — so only on-spec, cooled granules consume coating agent.",
    },
    {
      q: "Can one drum apply both liquid and powder coating?",
      a: "Yes. Liquid spray and powder dosing can be combined in one drum with staged application zones, which is common for anti-caking treatments.",
    },
    {
      q: "Do you supply the agent storage and heating tanks?",
      a: "Yes. Heated agent tanks, circulation pumps and traced piping are quoted as part of the coating system where the agent requires it.",
    },
  ],
  related: ["drumSystems", "coolingDrum", "granulatorDrum", "packagingSystems", "fertilizerPlants"],
  schemaType: "Product",
};

export const compostDrum: IntlPageContent = {
  meta: {
    title: "Compost Drum | Rotary Composting Reactor",
    description:
      "Rotary compost drums accelerate aerobic composting of organic waste in a closed, controlled reactor. Design and manufacturing by Pro Makina, Turkey.",
  },
  breadcrumbLabel: "Compost Drum",
  hero: {
    h1: "Compost Drum — Controlled Aerobic Composting in a Rotating Reactor",
    intro:
      "The compost drum is a closed rotating reactor in which organic waste is aerated, mixed and biologically heated in a controlled way. Compared to open windrow composting it shortens the intensive rotting phase, controls odour, and delivers a homogeneous, sanitised output — independent of weather.",
    image: { src: "/images/tambur biokompost/biokom1.png", alt: "Rotary compost drum reactor by Pro Makina" },
  },
  sections: [
    {
      type: "paragraphs",
      heading: "How Drum Composting Works",
      paragraphs: [
        "Prepared organic material — shredded and adjusted for moisture and carbon-nitrogen ratio — is fed into the slowly rotating drum. Rotation continuously mixes the material and renews its surface, while a controlled air supply keeps the process aerobic. Microbial activity raises the temperature into the thermophilic range, sanitising the material and accelerating decomposition.",
        "Material moves gradually from inlet to outlet over a retention time of several days, leaving the drum as fresh compost that continues maturation in a shorter, better-controlled post-rotting step. Exhaust air can be collected and treated, which is decisive for odour-sensitive locations.",
      ],
    },
    {
      type: "bullets",
      heading: "Suitable Input Materials",
      items: [
        "Cattle, poultry and other livestock manure",
        "Municipal organic waste and separated biowaste",
        "Food processing and market waste",
        "Slaughterhouse waste in combination with structure material",
        "Agricultural residues and green waste (shredded)",
        "Fish and aquaculture processing waste",
      ],
    },
    {
      type: "cards",
      heading: "Technical Features",
      items: [
        { title: "Controlled aeration", text: "Air volume adjusted to keep the process aerobic through the intensive phase." },
        { title: "Retention design", text: "Drum volume and speed set the days of intensive composting for your input mix." },
        { title: "Robust internals", text: "Mixing elements and wear protection selected for abrasive, corrosive organic mixes." },
        { title: "Odour management", text: "Closed reactor with collectable exhaust air for biofilter or scrubber treatment." },
        { title: "Feeding solutions", text: "Shredding, mixing and dosing equipment upstream matched to your waste streams." },
        { title: "Process monitoring", text: "Temperature tracking along the drum for sanitisation documentation." },
      ],
    },
    {
      type: "table",
      heading: "Data Required for Compost Drum Design",
      columns: ["Design input", "Role in the calculation"],
      rows: [
        ["Waste types and daily quantities", "Drum volume and feeding concept"],
        ["Moisture and structure material availability", "Mix recipe and pre-treatment scope"],
        ["Retention target (days)", "Drum length, diameter and speed"],
        ["Site odour constraints", "Exhaust air collection and treatment"],
        ["Final product target", "Post-maturation and refining steps (screening, drying, granulation)"],
      ],
      note: "Composting behaviour depends on the input mix; retention and aeration are engineered from your specific waste data.",
    },
  ],
  faq: [
    {
      q: "How long does material stay in the drum?",
      a: "The intensive phase in the drum typically takes several days depending on the input mix and target; exact retention is defined in the project design and completed by post-maturation.",
    },
    {
      q: "Is drum composting better than windrows?",
      a: "It is faster, weather-independent, better for odour control and easier to document for sanitisation. Windrows remain cheaper at very large land availability; many plants combine a drum with short post-rotting windrows.",
    },
    {
      q: "Can the compost be turned into granular fertilizer afterwards?",
      a: "Yes. Matured compost can be dried, screened and granulated — with or without mineral nutrient addition — using our drying and granulation drums. This is a common complete line we deliver.",
    },
    {
      q: "What about the exhaust air?",
      a: "The drum is a closed reactor, so exhaust air can be collected and routed to a biofilter or scrubber. We include this in the plant design where required.",
    },
  ],
  related: ["drumSystems", "compostPlants", "rotaryDryer", "granulatorDrum", "recycling"],
  schemaType: "Product",
};
