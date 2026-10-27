import type { DryerTechnical } from "../../../(tr)/components/dryer-drum-types";

/** EN: "Kurutma Tamburu Teknik Özellikleri" (TR kaynak) — aynı kapsam, yerel mühendislik terminolojisi; sayısal değer yok. */
export const dryerTechnicalEn: DryerTechnical = {
  navLabel: "Specifications",
  eyebrow: "Technical specifications",
  title: "Rotary Drum Dryer Technical Specifications",
  intro:
    "Drum dimensions, shell material, drive arrangement and auxiliary systems are set by process calculation on every project. The parameters and sections below summarise the engineering decisions made when an industrial rotary dryer is designed.",
  table: {
    title: "Key Design Parameters",
    headers: ["Parameter", "Description"],
    rows: [
      { name: "Capacity", value: "Engineered for the material and its inlet and target moisture; wet feed rate and net dry product rate are stated separately" },
      { name: "Drum diameter", value: "Set by process calculation from the evaporation load and gas flow" },
      { name: "Drum length", value: "Set by the drying load, drum filling and retention time" },
      { name: "Shell material", value: "Carbon steel (ST37/S355), stainless steel or special wear-resistant material, depending on project conditions" },
      { name: "Lifting flights", value: "Custom designed for the properties of the material" },
      { name: "Heating system", value: "Direct or indirect heating options" },
      { name: "Fuel", value: "Natural gas, LPG, diesel, available hot gas or other heat sources suited to the process" },
      { name: "Drive system", value: "Motor, gearbox and a suitable mechanical drive group" },
      { name: "Support system", value: "Riding rings (tyres), support rollers and suitable bearing assemblies" },
      { name: "Dust collection", value: "Cyclone and filter integration as required by the project" },
      { name: "Automation", value: "Control of temperature, fan, burner, feed and drive to suit the process" },
    ],
    note: "The table shows the general configuration of a rotary dryer and does not replace a technical offer. Final dimensions and equipment selection are defined by project-specific calculation and, where needed, by sample testing.",
  },
  sections: [
    {
      title: "Capacity, Heat Balance and Heating Options",
      paragraphs: [
        "Wet feed rate, net product output at target moisture and dry solids flow are defined separately. The mass balance is built once it is confirmed whether inlet and target moisture are expressed on a wet or a dry basis. The heat load is assessed from the water to be evaporated, heating of the product and heat losses; a single tonnes-per-hour figure is not a capacity guarantee for every material.",
        "Drum diameter and length follow from drum filling, gas flow and the required retention time. Slope, rotational speed and lifting flights govern how the product advances and contacts the hot gas. Gas inlet and outlet temperatures are distinguished from product temperature, and any cooling requirement at the discharge is defined by the downstream process.",
        "In direct heating, the hot gas is in contact with the product. In indirect heating, heat is transferred through a surface; its suitability is assessed against contamination risk and the thermal requirements of the product. Natural gas, LPG or other suitable heat sources are selected according to the product, emissions, site infrastructure and process safety. The heating method and fuel consumption are confirmed by project-specific calculation.",
      ],
    },
    {
      title: "Drum Shell, Lifting Flights and Material Selection",
      paragraphs: [
        "The drum shell is sized for plate thickness and stiffness according to the product load, temperature regime and operating hours. Riding ring zones and the feed and discharge ends are assessed separately, as these are the areas where support loads concentrate.",
        "Lifting flights raise the product and let it fall as a curtain through the gas stream; flight type and arrangement are designed for each project according to the stickiness, friability and particle size of the product. A different plate grade or liners can be considered in areas exposed to wear.",
        "Carbon steel or stainless steel options are evaluated according to temperature and corrosion conditions. Welding and fabrication inspection, drum slope, speed adjustment and alignment during site installation are integral parts of manufacturing.",
      ],
    },
    {
      title: "Riding Rings, Support Rollers and Drive System",
      paragraphs: [
        "The drum is carried on riding rings (tyres) and support rollers and is rotated by a girth gear and pinion or a suitable alternative drive arrangement. The motor, gearbox, coupling and, where needed, a frequency inverter form part of this arrangement.",
        "The drive is not the same on every project; it is selected by evaluating drum diameter and length, filling ratio, product weight and target speed together. Bearings, alignment and gear mesh are checked during commissioning to ensure a long service life.",
      ],
    },
    {
      title: "Burner, Fan, Cyclone and Filter System",
      paragraphs: [
        "A rotary dryer is not a complete process line on its own. The hot gas generator, burner, furnace or combustion chamber, hot gas ducts, process fan, cyclone, pulse-jet filter and stack are components that are evaluated together according to project requirements.",
        "The fan is selected for the required gas flow and the total pressure drop across the drum, ducts, cyclone and filter. The cyclone is considered for pre-separation, while the filter media must suit the gas temperature, moisture, dust properties and emission requirements; applications with combustible dust require a separate risk assessment.",
        "Product feed and discharge systems, screening, cooling, silos and packaging lines can also be engineered within the project scope. These components are not assumed to be standard on every project; the scope is confirmed by technical evaluation.",
      ],
    },
    {
      title: "Automation and Process Control",
      paragraphs: [
        "For a stable drying regime, inlet and outlet temperatures, negative pressure, fan control, burner modulation, drum speed, motor current and filter differential pressure can be monitored.",
        "Alarms and safety interlocks support safe operation. Online measurement of product outlet moisture is not included in every project; it can be engineered as an option depending on the requirement and product behaviour.",
      ],
    },
    {
      title: "Drying Conditions by Mineral",
      paragraphs: [
        "Silica and quartz sand, feldspar and calcite: free-flowing, heat-tolerant minerals usually dried in a direct-fired rotary dryer to a low, stable moisture. Silica and quartz sand are highly abrasive, so flights, chutes and the feed end need wear protection; for glass and ceramic grades of silica sand and feldspar, iron pick-up from worn steel surfaces must be limited. Calcite is softer but produces more fines and is valued for whiteness. Hot sand is often cooled before bagging. Final design values are confirmed from sample analysis on every project.",
        "Raw perlite: the dryer only removes free moisture from crushed ore before grinding, screening and shipment to an expansion plant. Expansion is a separate high-temperature furnace process in which the combined water in the glassy grain flashes to steam, so product temperature in the dryer is controlled to avoid needlessly reducing that water. Published process descriptions (US EPA AP-42) cite crude perlite being dried from about 4–10 % to below 1 % moisture; these are literature values, not a guarantee for a specific ore. Low gas velocity and cyclone recovery limit the loss of light fines.",
        "Bentonite: equipment literature (for example FEECO) reports that most bentonites contain about 25–35 % moisture by weight when mined; actual values depend on the deposit and on any pre-drying in stockpiles, so they are measured on samples. While drying, bentonite passes through a sticky range, so feed-end design, flight layout and, where needed, chains are selected to prevent build-up. Co-current flow is often used because the hottest gas meets the wettest material and product temperature stays lower, but the flow arrangement is chosen from the product temperature limit and process conditions. Limiting product temperature helps preserve swelling capacity and water absorption; the target moisture is set by the end use, such as grinding, drilling, foundry or cat litter production.",
        "Bentonite-based cat litter: the granules are dried within a narrow moisture band. Over-drying weakens clumping and absorbency and makes granules brittle; under-drying causes problems in the bag. Gentle flights and moderate drum speed limit breakage, and screening and dust removal after the dryer define the commercial grain sizes.",
        "Kaolin: a plastic clay that often arrives as filter cake from wet beneficiation. Lump breaking or mixing with dry product helps it through the sticky phase. Kaolin is dried for shipment or before calcination, which is a separate higher-temperature process; contamination and colour are monitored for white grades.",
        "Barite and zeolite: barite has a high density of about 4.3–4.5 g/cm³, so drive power, flights and conveyors are sized by mass rather than volume, and fineness specifications (for example for drilling-grade barite) govern the downstream grinding and dust system. Zeolite holds water in its porous channels; product temperature is limited to protect its adsorption and ion-exchange properties, and the target moisture follows the agricultural, feed-additive or water-treatment application.",
      ],
    },
  ],
  scope: {
    title: "Drying System Scope of Supply",
    intro:
      "Scope varies from project to project. The groups below show what is typically evaluated in a drying project; the final scope is defined in the technical offer.",
    coreTitle: "Main equipment typically evaluated",
    coreItems: [
      "Dryer shell and lifting flight arrangement",
      "Main frame and support structure",
      "Drive system (motor, gearbox, drive arrangement)",
      "Riding ring and support roller assemblies",
      "Product feed and discharge connections",
      "Hot gas inlet and outlet connections",
      "Guarding and maintenance access points",
    ],
    optionalTitle: "Auxiliary systems that can be added per project",
    optionalItems: [
      "Burner and hot gas generator",
      "Process fan and air ducts",
      "Cyclone",
      "Pulse-jet filter and stack",
      "Conveyor and elevator lines",
      "Screening and cooling units",
      "Silo and packaging systems",
      "Electrical panel and automation",
    ],
    note: "These lists are not a binding contractual scope. Included and excluded items are defined in the technical offer prepared for the required capacity and site conditions.",
  },
};
