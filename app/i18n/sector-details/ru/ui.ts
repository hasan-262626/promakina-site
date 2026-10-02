import type { SectorDetailUi } from "../types";

const notSure = "Пока не определено";
const yesNo = ["Да", "Нет", notSure];
const installation = ["Только оборудование", "Оборудование + технологический консалтинг", "Завод под ключ", notSure];
const automation = ["Полуавтоматический", "Полностью автоматический", notSure];

export const ruUi: SectorDetailUi = {
  homeLabel: "Главная",
  sectorsLabel: "Отрасли",
  breadcrumbAria: "Навигационная цепочка",
  parentEyebrow: "Основная отрасль",
  parentLabels: {
    fertilizer: "Заводы удобрений",
    compost: "Компостные заводы",
    energy: "Энергетика и биогаз",
  },
  heroButtons: { quote: "Запросить КП", whatsapp: "Написать в WhatsApp", call: "Позвонить" },
  relatedLabel: "Связанные заводские решения:",
  stepLabel: "Этап",
  machineLink: "Подробнее об оборудовании",
  form: {
    eyebrow: "Коммерческое предложение и техническая консультация",
    contactSection: "Контактные данные",
    requestSection: "Данные запроса",
    technicalSection: "Технические данные",
    company: "Название компании",
    fullName: "Имя и фамилия",
    phone: "Телефон",
    email: "Электронная почта",
    location: "Город / страна",
    requestType: "Тип запроса",
    requestTypes: ["Запрос коммерческого предложения", "Техническая консультация", "Оценка проекта", "Реконструкция / модернизация"],
    sector: "Отрасль",
    product: "Продукт / решение",
    projectStatus: "Статус проекта",
    projectStatuses: ["Новая инвестиция", "Реконструкция действующего завода", "Увеличение мощности", "Стадия ТЭО", notSure],
    message: "Сообщение / технические пояснения",
    messagePlaceholder: "Кратко опишите сырье, целевой продукт, производительность, условия площадки и ваши ожидания.",
    consent: "Я согласен(на) на использование моих контактных данных для подготовки предложения и технической оценки.",
    whatsapp: "Отправить в WhatsApp",
    mail: "Отправить по e-mail",
    mailSubjectSuffix: "Коммерческое предложение / техническая консультация",
    messageHeading: "Новый технический запрос",
    pageLabel: "Страница",
  },
  profiles: {
    liquid: {
      capacity: { label: "Объем партии", unit: "т/партия", placeholder: "напр. 5" },
      fields: [
        { id: "productType", label: "Тип продукта", type: "select", options: ["Прозрачный раствор", "Суспензия", notSure] },
        { id: "packaging", label: "Упаковка / розлив", type: "select", options: ["Канистра / бутылка", "IBC", "Наливная отгрузка", notSure] },
        { id: "automationLevel", label: "Уровень автоматизации", type: "select", options: automation },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
        { id: "recipe", label: "Целевая рецептура / анализ", type: "text", placeholder: "напр. перечень сырья и целевой анализ", span: 2 },
      ],
    },
    granule: {
      capacity: { label: "Часовая производительность", unit: "т/ч", placeholder: "напр. 3" },
      fields: [
        { id: "rawMaterials", label: "Основное сырье", type: "text", placeholder: "напр. компост, леонардит, MAP" },
        { id: "inputMoisture", label: "Влажность сырья", type: "text", placeholder: "напр. 35%" },
        { id: "granuleSize", label: "Целевой размер гранул", type: "text", placeholder: "напр. 2-4 мм" },
        { id: "packaging", label: "Нужна фасовка", type: "select", options: yesNo },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
    powder: {
      capacity: { label: "Часовая производительность", unit: "т/ч", placeholder: "напр. 2" },
      fields: [
        { id: "rawMaterials", label: "Основное сырье", type: "text", placeholder: "напр. MAP, MKP, нитрат калия" },
        { id: "componentCount", label: "Количество компонентов", type: "text", placeholder: "напр. 6" },
        { id: "packagingType", label: "Тип упаковки", type: "select", options: ["Мелкие пакеты", "Мешки 25-50 кг", "Биг-бэг", notSure] },
        { id: "automationLevel", label: "Уровень автоматизации", type: "select", options: automation },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
    compost: {
      capacity: { label: "Суточный прием отходов", unit: "т/сут", placeholder: "напр. 50" },
      fields: [
        { id: "wasteDetail", label: "Состав отходов", type: "text", placeholder: "Источник и состав отходов" },
        { id: "inputMoisture", label: "Входная влажность", type: "text", placeholder: "напр. 60%" },
        { id: "targetProduct", label: "Целевой продукт", type: "select", options: ["Просеянный компост", "Гранулированное органическое удобрение", "Почвоулучшитель", notSure] },
        { id: "odorControl", label: "Нужен контроль запаха?", type: "select", options: yesNo },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
    biogas: {
      capacity: { label: "Суточная загрузка", unit: "т/сут", placeholder: "напр. 60" },
      fields: [
        { id: "feedstock", label: "Состав сырья", type: "text", placeholder: "Виды сырья и их доли" },
        { id: "plantStatus", label: "Статус установки", type: "select", options: ["Новая установка", "Дополнительная линия", "Реконструкция", notSure] },
        { id: "scope", label: "Объем запроса", type: "select", options: ["Предподготовка и загрузка", "Переработка дигестата", "Оба направления", notSure] },
        { id: "odorControl", label: "Нужен контроль запаха?", type: "select", options: yesNo },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
    biomass: {
      capacity: { label: "Подготовка топлива в час", unit: "т/ч", placeholder: "напр. 5" },
      fields: [
        { id: "biomassType", label: "Вид биомассы", type: "text", placeholder: "напр. щепа, обрезки, солома" },
        { id: "inputMoisture", label: "Входная влажность", type: "text", placeholder: "напр. 45%" },
        { id: "targetMoisture", label: "Целевая влажность топлива", type: "text", placeholder: "Значение, требуемое поставщиком котла" },
        { id: "conversion", label: "Энергетический блок", type: "select", options: ["Котел / пар", "Газификация", "Действующая установка", notSure] },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
    biomethane: {
      capacity: { label: "Расход сырого биогаза", unit: "нм³/ч", placeholder: "напр. 500" },
      fields: [
        { id: "gasSource", label: "Источник биогаза", type: "text", placeholder: "напр. сельхозустановка, осадок сточных вод" },
        { id: "gasAnalysis", label: "Есть анализ газа?", type: "select", options: yesNo },
        { id: "endUse", label: "Целевое использование", type: "select", options: ["Подача в газовую сеть", "Моторное топливо (КПГ/СПГ)", "Использование на площадке", notSure] },
        { id: "scope", label: "Объем запроса", type: "select", options: ["Предочистка и вспомогательные системы", "Полная линия очистки", notSure] },
        { id: "installationModel", label: "Объем поставки", type: "select", options: installation },
      ],
    },
  },
};
