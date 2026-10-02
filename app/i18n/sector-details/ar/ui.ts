import type { SectorDetailUi } from "../types";

const notSure = "لم يتحدد بعد";
const yesNo = ["نعم", "لا", notSure];
const installation = ["المعدات فقط", "المعدات + استشارات العمليات", "مصنع تسليم مفتاح", notSure];
const automation = ["نصف آلي", "آلي بالكامل", notSure];

export const arUi: SectorDetailUi = {
  homeLabel: "الرئيسية",
  sectorsLabel: "القطاعات",
  breadcrumbAria: "مسار التنقل",
  parentEyebrow: "القطاع الرئيسي",
  parentLabels: {
    fertilizer: "مصانع إنتاج الأسمدة",
    compost: "مصانع الكمبوست",
    energy: "أنظمة الطاقة والغاز الحيوي",
  },
  heroButtons: { quote: "اطلب عرض سعر", whatsapp: "تواصل عبر واتساب", call: "الاتصال هاتفياً" },
  relatedLabel: "حلول مصانع ذات صلة:",
  stepLabel: "المرحلة",
  machineLink: "عرض المعدة",
  form: {
    eyebrow: "عرض سعر واستشارة فنية",
    contactSection: "بيانات الاتصال",
    requestSection: "بيانات الطلب",
    technicalSection: "البيانات الفنية",
    company: "اسم الشركة",
    fullName: "الاسم الكامل",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "المدينة / الدولة",
    requestType: "نوع الطلب",
    requestTypes: ["طلب عرض سعر", "طلب استشارة فنية", "تقييم مشروع", "تجديد / تحديث"],
    sector: "القطاع",
    product: "المنتج / الحل",
    projectStatus: "حالة المشروع",
    projectStatuses: ["استثمار جديد", "تجديد مصنع قائم", "زيادة الطاقة الإنتاجية", "مرحلة دراسة الجدوى", notSure],
    message: "الرسالة / ملاحظات فنية",
    messagePlaceholder: "اذكر باختصار المواد الخام والمنتج المستهدف والطاقة الإنتاجية وظروف الموقع الحالية وتوقعاتك.",
    consent: "أوافق على استخدام بيانات الاتصال الخاصة بي لأغراض عرض السعر والتقييم الفني.",
    whatsapp: "إرسال عبر واتساب",
    mail: "إرسال بالبريد الإلكتروني",
    mailSubjectSuffix: "عرض سعر / استشارة فنية",
    messageHeading: "طلب عرض سعر فني جديد",
    pageLabel: "الصفحة",
  },
  profiles: {
    liquid: {
      capacity: { label: "سعة الدفعة", unit: "طن/دفعة", placeholder: "مثال: 5" },
      fields: [
        { id: "productType", label: "نوع المنتج", type: "select", options: ["محلول صافٍ", "معلق", notSure] },
        { id: "packaging", label: "التعبئة", type: "select", options: ["جالون / زجاجة", "حاوية IBC", "شحن سائب", notSure] },
        { id: "automationLevel", label: "مستوى الأتمتة", type: "select", options: automation },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
        { id: "recipe", label: "التركيبة / التحليل المستهدف", type: "text", placeholder: "مثال: قائمة المواد الخام والتحليل المستهدف", span: 2 },
      ],
    },
    granule: {
      capacity: { label: "الطاقة بالساعة", unit: "طن/ساعة", placeholder: "مثال: 3" },
      fields: [
        { id: "rawMaterials", label: "المواد الخام الرئيسية", type: "text", placeholder: "مثال: كمبوست، ليوناردايت، MAP" },
        { id: "inputMoisture", label: "رطوبة المواد الخام", type: "text", placeholder: "مثال: 35%" },
        { id: "granuleSize", label: "حجم الحبيبات المستهدف", type: "text", placeholder: "مثال: 2-4 مم" },
        { id: "packaging", label: "الحاجة إلى التعبئة", type: "select", options: yesNo },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
    powder: {
      capacity: { label: "الطاقة بالساعة", unit: "طن/ساعة", placeholder: "مثال: 2" },
      fields: [
        { id: "rawMaterials", label: "المواد الخام الرئيسية", type: "text", placeholder: "مثال: MAP، MKP، نترات البوتاسيوم" },
        { id: "componentCount", label: "عدد المكونات", type: "text", placeholder: "مثال: 6" },
        { id: "packagingType", label: "نوع العبوة", type: "select", options: ["أكياس صغيرة", "أكياس 25-50 كغ", "أكياس جامبو", notSure] },
        { id: "automationLevel", label: "مستوى الأتمتة", type: "select", options: automation },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
    compost: {
      capacity: { label: "كمية النفايات اليومية", unit: "طن/يوم", placeholder: "مثال: 50" },
      fields: [
        { id: "wasteDetail", label: "مكونات النفايات", type: "text", placeholder: "مصدر النفايات ومكوناتها" },
        { id: "inputMoisture", label: "رطوبة المدخلات", type: "text", placeholder: "مثال: 60%" },
        { id: "targetProduct", label: "المنتج النهائي المستهدف", type: "select", options: ["كمبوست مغربل", "سماد عضوي حبيبي", "محسن تربة", notSure] },
        { id: "odorControl", label: "هل يلزم التحكم في الروائح؟", type: "select", options: yesNo },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
    biogas: {
      capacity: { label: "كمية التغذية اليومية", unit: "طن/يوم", placeholder: "مثال: 60" },
      fields: [
        { id: "feedstock", label: "خليط المدخلات", type: "text", placeholder: "أنواع المدخلات ونسبها" },
        { id: "plantStatus", label: "حالة المنشأة", type: "select", options: ["منشأة جديدة", "خط إضافي لمنشأة قائمة", "تجديد", notSure] },
        { id: "scope", label: "نطاق الطلب", type: "select", options: ["المعالجة المسبقة والتغذية", "معالجة المخلفات الهاضمة", "كلاهما", notSure] },
        { id: "odorControl", label: "هل يلزم التحكم في الروائح؟", type: "select", options: yesNo },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
    biomass: {
      capacity: { label: "تحضير الوقود بالساعة", unit: "طن/ساعة", placeholder: "مثال: 5" },
      fields: [
        { id: "biomassType", label: "نوع الكتلة الحيوية", type: "text", placeholder: "مثال: رقائق الخشب، مخلفات التقليم، القش" },
        { id: "inputMoisture", label: "رطوبة المدخلات", type: "text", placeholder: "مثال: 45%" },
        { id: "targetMoisture", label: "رطوبة الوقود المستهدفة", type: "text", placeholder: "القيمة التي يطلبها مورد المرجل" },
        { id: "conversion", label: "وحدة تحويل الطاقة", type: "select", options: ["مرجل / بخار", "تغويز", "منشأة قائمة", notSure] },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
    biomethane: {
      capacity: { label: "تدفق الغاز الحيوي الخام", unit: "Nm³/ساعة", placeholder: "مثال: 500" },
      fields: [
        { id: "gasSource", label: "مصدر الغاز الحيوي", type: "text", placeholder: "مثال: منشأة زراعية، حمأة الصرف الصحي" },
        { id: "gasAnalysis", label: "هل يتوفر تحليل للغاز؟", type: "select", options: yesNo },
        { id: "endUse", label: "الاستخدام المستهدف", type: "select", options: ["الحقن في شبكة الغاز", "وقود مركبات (CNG/LNG)", "استخدام داخل الموقع", notSure] },
        { id: "scope", label: "نطاق الطلب", type: "select", options: ["المعالجة المسبقة والأنظمة المساعدة", "خط تنقية كامل", notSure] },
        { id: "installationModel", label: "نطاق التوريد", type: "select", options: installation },
      ],
    },
  },
};
