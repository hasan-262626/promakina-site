import type { SectorDetailText } from "../types";

type CompostKey =
  | "sectorHouseholdCompost"
  | "sectorAnimalCompost"
  | "sectorAgriculturalCompost"
  | "sectorSlaughterhouseCompost"
  | "sectorFoodCompost"
  | "sectorParkGardenCompost";

export const enCompostPages: Record<CompostKey, SectorDetailText> = {
  sectorHouseholdCompost: {
    meta: {
      title: "Household Waste Compost Plant",
      description:
        "Household waste compost plant: bag opening, removal of plastics, glass and other foreign matter, leachate and odor control, drum composting and final product screening.",
    },
    label: "Household Waste Compost Plant",
    h1: "Household Waste Compost Plant",
    lead:
      "We build plants that turn the organic fraction of municipal and residential waste into usable compost free of foreign matter.",
    introTitle: "What Determines Compost Quality From Household Waste: Separation",
    intro: [
      "In compost production from household waste, quality depends largely on whether the waste is separately collected at source. Source-separated kitchen and garden waste provides a cleaner input, while the organic fraction separated from mixed household waste contains plastics, glass, metals and textiles and requires more extensive pre-treatment.",
      "In pre-treatment, bags are opened, waste is shredded and the organic fraction is separated by screening. Metal separation and manual sorting points are added according to the waste composition. Because household organic waste is wet and quickly becomes odorous, an enclosed reception area, leachate collection and exhaust air treatment are planned.",
      "Composting can be carried out in drums, tunnels or controlled windrows. After intensive composting and maturation, final screening separates the fine compost, and the oversize can be returned to the process as structure material.",
    ],
    imageAlts: [
      "Compost plant separating household organic waste with a trommel screen",
      "Feed bunker and conveyor line in a household waste compost plant",
    ],
    processTitle: "Household Waste Composting Flow",
    processIntro: "The focus of the flow is removing foreign matter before composting and in final screening.",
    steps: [
      { title: "Enclosed reception", text: "Waste is tipped in an enclosed reception area; leachate is collected and exhaust air is extracted." },
      { title: "Bag opening and shredding", text: "Bags are opened and waste is shredded to a size suitable for separating the organic fraction." },
      { title: "Foreign matter separation", text: "Plastics, glass and metals are removed with a trommel screen, metal separator and sorting points." },
      { title: "Intensive composting", text: "The organic fraction is composted in a drum or controlled environment after adjusting moisture and structure." },
      { title: "Maturation", text: "The material is held in the maturation area until it becomes stable." },
      { title: "Final screening and packing", text: "Fine compost is separated, oversize is recycled and the product is packed or shipped in bulk." },
    ],
    machinesTitle: "Equipment Used in a Household Waste Compost Plant",
    machineNotes: {
      shredderSystems: "Bag opening and shredding household waste to a size suitable for organic separation.",
      trommelScreen: "Separating the organic fraction from foreign matter and screening the final product.",
      beltConveyor: "Conveying waste between reception, sorting and composting areas.",
      compostDrum: "Intensive composting of the organic fraction in an enclosed environment.",
      wetScrubber: "Scrubbing odorous air extracted from reception and process areas.",
      bigBagFilling: "Filling screened compost into big bags.",
    },
    faqTitle: "Frequently Asked Questions About Household Waste Compost Plants",
    faqs: [
      { q: "Can good compost be produced from mixed household waste?", a: "The organic fraction separated from mixed waste contains more foreign matter. Compost can be produced with extensive pre-treatment, but product quality is generally more limited than with source-separated waste." },
      { q: "How is odor controlled in a household compost plant?", a: "Reception and process areas are kept enclosed, indoor air is extracted and treated with a scrubber or biofilter, and leachate is collected separately." },
      { q: "How are plastic fragments reduced in compost?", a: "Multi-stage separation is applied through bag opening, trommel screening, sorting and final screening; the most effective measure is separate collection at source." },
      { q: "Should drum composting or windrow composting be chosen?", a: "The decision depends on site area, odor sensitivity, capacity and budget. A drum makes it easier to run the intensive phase enclosed and under control." },
      { q: "How is capacity determined at municipal scale?", a: "Daily intake capacity is calculated by evaluating population, source separation rate, seasonal variation and waste moisture together." },
    ],
    cta: {
      title: "Request a quote for your household waste compost plant",
      description: "Share how the waste is collected, the daily quantity and site conditions, and we will define pre-treatment and composting capacity together.",
    },
  },

  sectorAnimalCompost: {
    meta: {
      title: "Animal Waste Compost Plant by Manure Type",
      description:
        "Compost plant for cattle, poultry and sheep manure: moisture and carbon-nitrogen balance by manure type, mixing with structure material, composting and screening.",
    },
    label: "Animal Waste Compost Plant",
    h1: "Animal Waste Compost Plant: Process by Manure Type",
    lead:
      "We turn manure from cattle, poultry and small ruminant farms into a valuable product with mixing and composting adjusted to the manure type.",
    introTitle: "Why Does the Process Change With the Manure Type?",
    intro: [
      "The first question in composting animal waste is which farm the manure comes from. Cattle manure is usually wet and needs structure material. Poultry manure is rich in nitrogen and has a strong ammonia odor. Sheep and goat manure arrives mixed with bedding and can be drier and more fibrous.",
      "These differences define the mixing recipe: excess moisture is balanced with structure material such as straw, sawdust or compost oversize, and the carbon-nitrogen ratio is brought into a range suitable for composting. Mix homogeneity is decisive for a proper start of composting and a lower odor load.",
      "The temperature rise during composting helps reduce pathogens and weed seeds. After maturation, screened compost can be sold in bulk, bagged or as granular product. For the turnkey plant scope, you can also review our animal waste compost plant page.",
    ],
    imageAlts: [
      "Compost plant where animal waste is loaded into the feed bunker by a loader",
      "Line processing animal waste compost with a drum and conveyor",
    ],
    processTitle: "Animal Waste Composting Flow",
    processIntro: "The first steps of the flow are adjusted to the manure type; composting and screening are common.",
    steps: [
      { title: "Manure intake", text: "Manure type, moisture and bedding content are determined; manure is received into the bunker." },
      { title: "Mixing recipe", text: "Structure material and compost oversize ratios are defined for moisture and carbon-nitrogen balance." },
      { title: "Mixing", text: "Manure and structure material are blended into a homogeneous mix." },
      { title: "Intensive composting", text: "The mix is aerated to raise the temperature, which is monitored." },
      { title: "Maturation", text: "Compost is matured until it becomes stable." },
      { title: "Screening and end product", text: "Compost is screened; if needed it is dried and packed or sent to a granulation line." },
    ],
    machinesTitle: "Equipment Used in an Animal Waste Compost Plant",
    machineNotes: {
      bunkersHoppers: "Bunkers for receiving and controlled feeding of manure and structure material.",
      screwConveyor: "Steady conveying of wet and sticky manure from under the bunker.",
      mixingDrum: "Homogeneous mixing of manure and structure material.",
      compostDrum: "Intensive composting of the mix in an enclosed environment.",
      trommelScreen: "Screening mature compost and recycling the oversize.",
      rotaryDryer: "Reducing compost moisture when bagged or granular product is the target.",
    },
    faqTitle: "Frequently Asked Questions About Animal Waste Compost Plants",
    faqs: [
      { q: "Can cattle and poultry manure be processed in the same plant?", a: "Yes. However, because their moisture and nitrogen contents differ, the mixing recipe and structure material ratio are adjusted separately for each manure type." },
      { q: "How is ammonia odor reduced in poultry manure?", a: "The carbon-nitrogen balance is improved by adding a carbon source, air extracted from enclosed areas is treated and the mix is kept homogeneous." },
      { q: "What is used as structure material?", a: "Straw, sawdust, pruning waste or compost oversize can be used. The choice depends on local availability and manure moisture." },
      { q: "Does composting eliminate pathogens?", a: "The temperature rise in controlled composting significantly reduces pathogens and weed seeds. The required conditions are monitored according to applicable regulations." },
      { q: "Can animal manure compost be turned into granular fertilizer?", a: "Yes. Mature and screened compost can be turned into granular organic fertilizer with a granulation and drying line." },
    ],
    cta: {
      title: "Request a quote for your animal waste compost plant",
      description: "Share your farm type, daily manure quantity and target product, and we will define mixing and composting capacity together.",
    },
  },

  sectorAgriculturalCompost: {
    meta: {
      title: "Agricultural Waste Compost Plant",
      description:
        "Agricultural waste compost plant: shredding stalks, straw, greenhouse and fruit-vegetable residues, nitrogen and moisture balance, seasonal stock management, composting.",
    },
    label: "Agricultural Waste Compost Plant",
    h1: "Agricultural Waste Compost Plant",
    lead:
      "We process post-harvest stalks and straw, greenhouse plant residues and fruit and vegetable waste in compost plants suited to seasonal variation.",
    introTitle: "Composting Seasonal and Fibrous Agricultural Waste",
    intro: [
      "Agricultural waste is mostly seasonal: large amounts of stalks, straw and plant residues arise during harvest, while input decreases during the rest of the year. If plant capacity and storage area are not planned for this fluctuation, intake bottlenecks occur in peak periods and idle capacity in quiet periods.",
      "Stalks, straw and greenhouse residues are fibrous and rich in carbon; to start composting they must be shredded, moistened and balanced with a nitrogen-rich input such as animal manure. Fruit and vegetable waste is wetter and richer in nitrogen, so mixing it with fibrous waste makes balancing easier.",
      "In greenhouse waste, the plastic strings and clips used to support plants are the most common foreign matter; they must be removed before shredding and in final screening. For the turnkey plant scope, you can review our plant and agricultural waste compost plant page.",
    ],
    imageAlts: [
      "Compost line where agricultural plant waste is conveyed to a trommel screen",
      "Plant screening agricultural waste compost into big bags",
    ],
    processTitle: "Agricultural Waste Composting Flow",
    processIntro: "The flow starts by shredding fibrous, seasonal waste and turning it into a balanced mix.",
    steps: [
      { title: "Intake and seasonal stock", text: "Excess waste during harvest is held in a controlled storage area." },
      { title: "Foreign matter removal", text: "Plastic strings, clips and stones in greenhouse waste are removed before shredding." },
      { title: "Shredding", text: "Stalks, straw and plant residues are shredded to a size suitable for composting." },
      { title: "Mixing and moisture adjustment", text: "Nitrogen-rich input and water are added for carbon-nitrogen and moisture balance." },
      { title: "Composting and maturation", text: "The mix is aerated, composted and matured." },
      { title: "Screening and packing", text: "Compost is screened; oversize returns as structure material and the product is packed." },
    ],
    machinesTitle: "Equipment Used in an Agricultural Waste Compost Plant",
    machineNotes: {
      shredderSystems: "Pre-shredding fibrous stalks, straw and greenhouse residues.",
      hammerCrusher: "Reducing shredded plant waste to a finer size.",
      beltConveyor: "Transferring waste between storage, shredding and composting areas.",
      compostDrum: "Intensive composting phase of the balanced mix.",
      trommelScreen: "Screening mature compost and removing plastic residues.",
      openMouthBagging: "Bagging screened compost.",
    },
    faqTitle: "Frequently Asked Questions About Agricultural Waste Compost Plants",
    faqs: [
      { q: "Can straw and stalks be composted on their own?", a: "Being rich in carbon, they compost slowly on their own. Adding a nitrogen-rich input such as animal manure and moisture speeds up the process." },
      { q: "How is seasonal waste fluctuation managed?", a: "A storage area is planned for excess waste in peak periods, and plant capacity is balanced between the annual average and the peak period." },
      { q: "Do plastic strings in greenhouse waste cause problems?", a: "Yes. They can wrap around the shredder and contaminate the compost. Sorting before shredding and separation in final screening are required." },
      { q: "Do pesticide residues pass into compost?", a: "For waste with a risk of plant protection product residues, the use of the compost should be evaluated according to analysis results and regulations." },
      { q: "Where is agricultural compost used?", a: "It can be used as a soil improver in field, orchard and greenhouse applications or as a raw material for granular organic fertilizer." },
    ],
    cta: {
      title: "Request a quote for your agricultural waste compost plant",
      description: "Share your waste types, seasonal quantities and site information, and we will plan shredding, storage and composting capacity together.",
    },
  },

  sectorSlaughterhouseCompost: {
    meta: {
      title: "Slaughterhouse Waste Compost Plant",
      description:
        "Slaughterhouse waste compost plant: regulation-compliant pre-treatment, hygienization, enclosed composting and odor control for rumen content and animal by-products.",
    },
    label: "Slaughterhouse Waste Compost Plant",
    h1: "Slaughterhouse Waste Compost Plant",
    lead:
      "We turn organic waste from slaughterhouses and meat processing plants into compost with enclosed processes that follow animal by-product rules.",
    introTitle: "Regulation, Hygiene and Odor as Priorities in Slaughterhouse Waste",
    intro: [
      "Slaughterhouse waste can consist of rumen content, manure from lairage areas, grease trap sludge and animal by-products. Part of this waste falls under animal by-product regulations, and the permitted processing method and the required heat treatment or hygienization conditions depend on rules set by the competent authority. Plant design therefore starts by clarifying the regulatory classification.",
      "Slaughterhouse waste is wet, rich in protein and quickly becomes putrid. An enclosed reception area, leachate collection and exhaust air treatment should be considered mandatory in these plants. The waste is mixed with structure material to reach moisture and porosity suitable for composting.",
      "Where required by regulation, shredding and controlled heat treatment are applied as pre-treatment, followed by intensive composting in an enclosed environment. After maturation and screening, the use of the product is determined by analysis results.",
    ],
    imageAlts: [
      "Compost line processing slaughterhouse organic waste in an enclosed plant",
      "Maturation and screening area for slaughterhouse waste compost",
    ],
    processTitle: "Slaughterhouse Waste Composting Flow",
    processIntro: "The conditions of the heat treatment and hygienization steps are defined by the waste's regulatory category.",
    steps: [
      { title: "Waste classification", text: "Waste streams are separated by regulatory category and the acceptable ones are defined." },
      { title: "Enclosed reception", text: "Waste is received in an enclosed area; leachate and odorous air are collected." },
      { title: "Shredding", text: "Large pieces are reduced to a size suitable for heat treatment and composting." },
      { title: "Hygienization (if required)", text: "Where required by regulation, the waste undergoes controlled heat treatment." },
      { title: "Mixing and composting", text: "Waste is mixed with structure material and composted in an enclosed environment." },
      { title: "Maturation and screening", text: "Stabilized compost is screened and its use is determined by analysis." },
    ],
    machinesTitle: "Equipment Used in a Slaughterhouse Waste Compost Plant",
    machineNotes: {
      shredderSystems: "Shredding large slaughterhouse waste before heat treatment and composting.",
      screwConveyor: "Enclosed conveying of wet and sticky waste.",
      sterilizationDrum: "Drum for controlled heat treatment where required by regulation.",
      compostDrum: "Composting the waste and structure material mix in an enclosed environment.",
      wetScrubber: "Scrubbing odorous air extracted from reception and process areas.",
      trommelScreen: "Screening mature compost and separating the oversize.",
    },
    faqTitle: "Frequently Asked Questions About Slaughterhouse Waste Compost Plants",
    faqs: [
      { q: "Can all slaughterhouse waste be turned into compost?", a: "No. The processing method of some animal by-products is restricted by regulation. Which waste can be composted is defined according to the competent authority's requirements." },
      { q: "Is hygienization always required?", a: "The requirement and conditions vary by waste category. A regulatory assessment at the start of the project clarifies the scope of the heat treatment step." },
      { q: "How is odor controlled with slaughterhouse waste?", a: "Reception and processing take place in enclosed areas, indoor air is extracted and treated with a scrubber or biofilter, and waste is processed without delay." },
      { q: "Can rumen content be composted on its own?", a: "Because it is wet, it is usually mixed with structure material. The mixing ratio is defined by moisture and porosity." },
      { q: "Where can the compost product be used?", a: "Its use is determined by product analysis and the applications permitted by the relevant regulations." },
    ],
    cta: {
      title: "Request a quote for your slaughterhouse waste compost plant",
      description: "Share your waste types, daily quantity and current permit status, and we will define the pre-treatment and enclosed composting concept together.",
    },
  },

  sectorFoodCompost: {
    meta: {
      title: "Food Waste Compost Plant",
      description:
        "Food waste compost plant: separating packaged and unpackaged food waste, removing excess water, mixing with structure material, enclosed composting and odor control.",
    },
    label: "Food Waste Compost Plant",
    h1: "Food Waste Compost Plant",
    lead:
      "We take waste from food production, wholesale markets, supermarkets and canteens into enclosed composting processes that manage moisture and odor load.",
    introTitle: "A Compost Concept for Wet, Fast-Degrading Waste",
    intro: [
      "Food waste covers production residues from food processing plants, wholesale market and supermarket waste, and canteen and restaurant waste. These are wet materials with weak structure that quickly acidify and become putrid. For composting to start properly, excess water must be removed and a porous mix created with structure material.",
      "In market and supermarket waste, packaging is the largest source of foreign matter. Packaged waste requires depackaging, while shredding and screening may be sufficient for unpackaged streams. Since cooked food and meat-containing waste may fall under animal by-product rules, the accepted waste types are defined from the start.",
      "Waste is processed without delay; reception and composting take place in enclosed areas and odorous air is treated. After maturation and final screening, the use of the product is determined by analysis.",
    ],
    imageAlts: [
      "Compost plant where food waste is loaded into the feed bunker by a loader",
      "Line conveying food waste to the compost drum",
    ],
    processTitle: "Food Waste Composting Flow",
    processIntro: "The flow is set up so that waste is processed without delay and excess moisture is removed before composting.",
    steps: [
      { title: "Reception and waste definition", text: "The source, packaging status and regulatory category of the waste are checked at reception." },
      { title: "Depackaging and shredding", text: "Packaged waste is separated and the food fraction is shredded." },
      { title: "Removing excess water", text: "Free water is separated over a screen to lower the moisture of the mix." },
      { title: "Mixing with structure material", text: "A porous mix is created with sawdust, pruning waste or compost oversize." },
      { title: "Enclosed composting", text: "The mix is composted under control in a drum or enclosed environment." },
      { title: "Maturation and screening", text: "Mature compost is screened; oversize returns as structure material." },
    ],
    machinesTitle: "Equipment Used in a Food Waste Compost Plant",
    machineNotes: {
      shredderSystems: "Shredding food waste and the organic fraction after depackaging.",
      dewateringScreen: "Separating free water from food waste before composting.",
      screwConveyor: "Enclosed conveying of wet and sticky food waste.",
      mixingDrum: "Homogeneous mixing of food waste with structure material.",
      compostDrum: "Intensive composting of the mix in an enclosed environment.",
      trommelScreen: "Screening mature compost and removing residual packaging.",
    },
    faqTitle: "Frequently Asked Questions About Food Waste Compost Plants",
    faqs: [
      { q: "Can packaged food waste be composted?", a: "Packaging must be removed first. With depackaging equipment and final screening the organic fraction can be composted; if the packaging share is high, the pre-treatment scope grows." },
      { q: "Why does food waste smell so quickly?", a: "Easily degradable sugars and proteins acidify quickly and form odorous gases. Processing the waste without delay and enclosed processing reduce this risk." },
      { q: "Can cooked food waste be accepted?", a: "Meat-containing and cooked waste may fall under animal by-product rules. Acceptance conditions and the required treatment steps are defined according to regulations." },
      { q: "Why is structure material added to food waste?", a: "Food waste is wet and dense. Structure material provides porosity and supports aeration and a proper start of composting." },
      { q: "Is composting or biogas better for food waste?", a: "It depends on waste quantity, energy goals and site conditions. Biogas produces energy, while compost directly yields a soil improver; both processes can also be planned together." },
    ],
    cta: {
      title: "Request a quote for your food waste compost plant",
      description: "Share your waste sources, packaging status and daily quantity, and we will define pre-treatment and enclosed composting capacity together.",
    },
  },

  sectorParkGardenCompost: {
    meta: {
      title: "Park and Garden Waste Compost Plant",
      description:
        "Park and garden waste compost plant: shredding pruning branches, leaves and grass clippings, separating the woody fraction, composting, and screening compost and mulch.",
    },
    label: "Park and Garden Waste Compost Plant",
    h1: "Park and Garden Waste Compost Plant",
    lead:
      "We turn pruning, leaf and grass waste from municipal parks, gardens and landscaped areas into compost and mulch products.",
    introTitle: "Balancing Pruning, Leaf and Grass Waste Correctly",
    intro: [
      "Park and garden waste comes in three different forms: woody pruning branches, dry leaves and wet, nitrogen-rich grass clippings. The woody part does not compost without shredding, and grass clippings compact quickly and become odorous when piled on their own. The plant is therefore designed to turn the different wastes into a balanced mix.",
      "Waste quantities change with the seasons: grass dominates in spring and summer, leaves in autumn and pruning waste in winter. Since municipal waste can also contain soil, stones and plastic bags, sorting is needed before shredding.",
      "In screening after composting and maturation, fine compost is separated. The woody oversize can be reused as structure material or marketed as mulch.",
    ],
    imageAlts: [
      "Compost plant where park and garden waste is loaded into the feed bunker by a loader",
      "Screening park and garden waste compost into big bags",
    ],
    processTitle: "Park and Garden Waste Composting Flow",
    processIntro: "The flow is adjusted to the seasonal ratios of woody, leaf and grass waste.",
    steps: [
      { title: "Reception and sorting", text: "Waste is separated by type; foreign matter such as stones, soil and bags is sorted out." },
      { title: "Shredding woody waste", text: "Pruning branches are shredded to a size suitable for composting." },
      { title: "Preparing the mix", text: "Woody, leaf and grass waste are mixed for moisture and carbon-nitrogen balance." },
      { title: "Composting", text: "The mix is aerated and composted." },
      { title: "Maturation", text: "Compost is matured until it becomes stable." },
      { title: "Screening: compost and mulch", text: "Fine compost is separated; woody oversize is used as mulch or structure material." },
    ],
    machinesTitle: "Equipment Used in a Park and Garden Waste Compost Plant",
    machineNotes: {
      shredderSystems: "Shredding pruning branches and woody waste.",
      hammerCrusher: "Reducing shredded woody waste to a finer fraction.",
      trommelScreen: "Separating mature compost into fine product and woody oversize.",
      compostDrum: "Controlled intensive composting phase of the mix.",
      beltConveyor: "Transfer between shredding, composting and screening areas.",
      bigBagFilling: "Filling screened compost or mulch into big bags.",
    },
    faqTitle: "Frequently Asked Questions About Park and Garden Waste Compost Plants",
    faqs: [
      { q: "Why shouldn't grass clippings be composted on their own?", a: "Grass is wet and rich in nitrogen; when piled alone it compacts, becomes anaerobic and smells. It needs to be mixed with woody and leaf waste." },
      { q: "Do pruning branches compost?", a: "Without shredding they compost very slowly. Shredded woody waste both composts and gives the mix structure and porosity." },
      { q: "What is the difference between mulch and compost?", a: "Mulch consists of coarse woody pieces used to cover the soil surface. Compost is a mature, fine-structured soil improver." },
      { q: "How is foreign matter in municipal waste removed?", a: "Sorting at reception, checks before shredding and separation in final screening are applied; stones and metals are removed in advance to protect the shredder." },
      { q: "Where is park and garden compost used?", a: "It can be used as a soil improver in municipal landscaping, parks and gardens, and for tree planting." },
    ],
    cta: {
      title: "Request a quote for your park and garden waste compost plant",
      description: "Share your waste types, seasonal quantities and target products, and we will define shredding and screening capacity together.",
    },
  },
};
