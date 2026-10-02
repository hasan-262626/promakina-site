import type { SectorDetailUi } from "../types";

const notSure = "Not decided yet";
const yesNo = ["Yes", "No", notSure];
const installation = ["Machinery only", "Machinery + process consulting", "Turnkey plant", notSure];
const automation = ["Semi-automatic", "Fully automatic", notSure];

export const enUi: SectorDetailUi = {
  homeLabel: "Home",
  sectorsLabel: "Industries",
  breadcrumbAria: "Breadcrumb",
  parentEyebrow: "Main Industry",
  parentLabels: {
    fertilizer: "Fertilizer Production Plants",
    compost: "Compost & Organic Waste Plants",
    energy: "Energy & Biogas Systems",
  },
  heroButtons: { quote: "Get a Quote", whatsapp: "Chat on WhatsApp", call: "Call by Phone" },
  relatedLabel: "Related plant solutions:",
  stepLabel: "Step",
  machineLink: "View Machine",
  form: {
    eyebrow: "Quotation & Technical Consultation",
    contactSection: "Contact Details",
    requestSection: "Request Details",
    technicalSection: "Technical Details",
    company: "Company Name",
    fullName: "Full Name",
    phone: "Phone",
    email: "Email",
    location: "City / Country",
    requestType: "Request Type",
    requestTypes: ["Quotation request", "Technical consultation", "Project evaluation", "Revamp / modernization"],
    sector: "Industry",
    product: "Product / Solution",
    projectStatus: "Project Status",
    projectStatuses: ["New investment", "Existing plant revamp", "Capacity expansion", "Feasibility stage", notSure],
    message: "Message / Technical Notes",
    messagePlaceholder: "Briefly describe your raw materials, target product, capacity, current site conditions and expectations.",
    consent: "I agree that my contact details may be used for quotation and technical evaluation purposes.",
    whatsapp: "Send via WhatsApp",
    mail: "Send by Email",
    mailSubjectSuffix: "Quotation / Technical Consultation",
    messageHeading: "New Technical Quotation Request",
    pageLabel: "Page",
  },
  profiles: {
    liquid: {
      capacity: { label: "Batch Capacity", unit: "t/batch", placeholder: "e.g. 5" },
      fields: [
        { id: "productType", label: "Product Type", type: "select", options: ["Clear solution", "Suspension", notSure] },
        { id: "packaging", label: "Packaging / Filling", type: "select", options: ["Jerrycan / bottle", "IBC", "Bulk shipment", notSure] },
        { id: "automationLevel", label: "Automation Level", type: "select", options: automation },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
        { id: "recipe", label: "Target Recipe / Analysis", type: "text", placeholder: "e.g. raw material list and target analysis", span: 2 },
      ],
    },
    granule: {
      capacity: { label: "Hourly Capacity", unit: "t/h", placeholder: "e.g. 3" },
      fields: [
        { id: "rawMaterials", label: "Main Raw Materials", type: "text", placeholder: "e.g. compost, leonardite, MAP" },
        { id: "inputMoisture", label: "Raw Material Moisture", type: "text", placeholder: "e.g. 35%" },
        { id: "granuleSize", label: "Target Granule Size", type: "text", placeholder: "e.g. 2-4 mm" },
        { id: "packaging", label: "Packaging Required", type: "select", options: yesNo },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
    powder: {
      capacity: { label: "Hourly Capacity", unit: "t/h", placeholder: "e.g. 2" },
      fields: [
        { id: "rawMaterials", label: "Main Raw Materials", type: "text", placeholder: "e.g. MAP, MKP, potassium nitrate" },
        { id: "componentCount", label: "Number of Components", type: "text", placeholder: "e.g. 6" },
        { id: "packagingType", label: "Packaging Type", type: "select", options: ["Small bags", "25-50 kg bags", "Big bag", notSure] },
        { id: "automationLevel", label: "Automation Level", type: "select", options: automation },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
    compost: {
      capacity: { label: "Daily Waste Input", unit: "t/day", placeholder: "e.g. 50" },
      fields: [
        { id: "wasteDetail", label: "Waste Composition", type: "text", placeholder: "Source and composition of the waste" },
        { id: "inputMoisture", label: "Input Moisture", type: "text", placeholder: "e.g. 60%" },
        { id: "targetProduct", label: "Target End Product", type: "select", options: ["Screened compost", "Granular organic fertilizer", "Soil improver", notSure] },
        { id: "odorControl", label: "Odor Control Required?", type: "select", options: yesNo },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
    biogas: {
      capacity: { label: "Daily Feed Quantity", unit: "t/day", placeholder: "e.g. 60" },
      fields: [
        { id: "feedstock", label: "Feedstock Mix", type: "text", placeholder: "Feedstock types and ratios" },
        { id: "plantStatus", label: "Plant Status", type: "select", options: ["New plant", "Additional line for existing plant", "Revamp", notSure] },
        { id: "scope", label: "Requested Scope", type: "select", options: ["Pre-treatment and feeding", "Digestate processing", "Both", notSure] },
        { id: "odorControl", label: "Odor Control Required?", type: "select", options: yesNo },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
    biomass: {
      capacity: { label: "Hourly Fuel Preparation", unit: "t/h", placeholder: "e.g. 5" },
      fields: [
        { id: "biomassType", label: "Biomass Type", type: "text", placeholder: "e.g. wood chips, pruning waste, straw" },
        { id: "inputMoisture", label: "Input Moisture", type: "text", placeholder: "e.g. 45%" },
        { id: "targetMoisture", label: "Target Fuel Moisture", type: "text", placeholder: "Value required by the boiler supplier" },
        { id: "conversion", label: "Energy Conversion Unit", type: "select", options: ["Boiler / steam", "Gasification", "Existing plant", notSure] },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
    biomethane: {
      capacity: { label: "Raw Biogas Flow", unit: "Nm³/h", placeholder: "e.g. 500" },
      fields: [
        { id: "gasSource", label: "Biogas Source", type: "text", placeholder: "e.g. agricultural plant, sewage sludge" },
        { id: "gasAnalysis", label: "Gas Analysis Available?", type: "select", options: yesNo },
        { id: "endUse", label: "Intended Use", type: "select", options: ["Grid injection", "Vehicle fuel (CNG/LNG)", "On-site use", notSure] },
        { id: "scope", label: "Requested Scope", type: "select", options: ["Pre-treatment and auxiliary systems", "Complete upgrading line", notSure] },
        { id: "installationModel", label: "Scope of Supply", type: "select", options: installation },
      ],
    },
  },
};
