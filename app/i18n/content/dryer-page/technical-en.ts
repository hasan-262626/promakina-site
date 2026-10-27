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
