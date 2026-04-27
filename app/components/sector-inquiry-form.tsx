"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { sectorCards } from "./sector-subsectors-data";
import { trText } from "../lib/tr-text";

type SectorInquiryFormProps = {
  requestTargetTitle: string;
  initialSectorSlug?: string;
  initialProductSlug?: string;
};

type CommonState = {
  companyName: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  requestType: string;
  sectorSlug: string;
  productSlug: string;
  targetCapacity: string;
  projectStatus: string;
  message: string;
  consent: boolean;
};

type FieldDefinition = {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  options?: string[];
  placeholder?: string;
  unit?: string;
  readOnly?: boolean;
  span?: 1 | 2;
};

type CapacityMeta = {
  label: string;
  unit: string;
  placeholder?: string;
};

const requestTypeOptions = [
  "Teklif Talebi",
  "Teknik Görüşme Talebi",
  "Proje Değerlendirme",
  "Revizyon / Modernizasyon",
];

const projectStatusOptions = [
  "Yeni yatırım",
  "Mevcut tesis revizyonu",
  "Kapasite artırımı",
  "Fizibilite aşaması",
  "Henüz net değil",
];

const installationModelOptions = [
  "Sadece Makine",
  "Makine + Proses Danışmanlığı",
  "Anahtar Teslim Tesis",
  "Henüz net değil",
];

const automationLevelOptions = ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"];
const yesNoMaybeOptions = ["Evet", "Hayır", "Henüz net değil"];

const liquidFertilizerSlugs = new Set([
  "sivi-organomineral",
  "sivi-npk",
  "sivi-amino-asit",
  "organik-sivi-gubre",
  "organik-biyostimulan",
]);

const granuleFertilizerSlugs = new Set(["granul-organomineral", "granul-npk", "granul-kompost"]);
const powderFertilizerSlugs = new Set(["toz-organomineral", "toz-npk"]);

const inputClass =
  "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

function getSectorBySlug(slug: string) {
  return sectorCards.find((item) => item.slug === slug) ?? sectorCards[0];
}

function getProductLabel(sectorSlug: string, productSlug: string) {
  const sector = getSectorBySlug(sectorSlug);
  const product = sector.subLinks.find((item) => item.slug === productSlug) ?? sector.subLinks[0];
  return trText(product?.label ?? product?.title ?? "");
}

function getProductFormLabel(productSlug: string) {
  if (liquidFertilizerSlugs.has(productSlug)) return "Sıvı";
  if (granuleFertilizerSlugs.has(productSlug)) return "Granül";
  if (powderFertilizerSlugs.has(productSlug)) return "Toz";
  return "Proses Çözümü";
}

function getCapacityMeta(sectorSlug: string, productSlug: string, dynamicValues: Record<string, string>): CapacityMeta {
  if (sectorSlug === "gubre-ve-granulasyon-tesisleri") {
    if (liquidFertilizerSlugs.has(productSlug)) {
      return { label: "Batch Kapasitesi", unit: "ton/batch", placeholder: "Örn. 5" };
    }

    return { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 3" };
  }

  if (sectorSlug === "kompost-ve-organik-atik-tesisleri") {
    return { label: "Günlük Giriş Kapasitesi", unit: "ton/gün", placeholder: "Örn. 120" };
  }

  if (sectorSlug === "madencilik-ve-mineral-isleme") {
    return { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 80" };
  }

  if (sectorSlug === "kimya-ve-proses-endustrisi") {
    return dynamicValues.workingMode === "Sürekli"
      ? { label: "Sürekli Kapasite", unit: "ton/saat", placeholder: "Örn. 4" }
      : { label: "Batch Kapasitesi", unit: "ton/batch", placeholder: "Örn. 2" };
  }

  if (sectorSlug === "geri-donusum-ve-atik-yonetimi") {
    return { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 25" };
  }

  if (sectorSlug === "enerji-ve-biyogaz-sistemleri") {
    return { label: "Günlük Besleme Kapasitesi", unit: "ton/gün", placeholder: "Örn. 60" };
  }

  if (sectorSlug === "atik-su-camuru-ve-aritma-cozumleri") {
    return { label: "Günlük Giriş Kapasitesi", unit: "ton/gün", placeholder: "Örn. 40" };
  }

  return { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 12" };
}

function getDynamicFields(
  sectorSlug: string,
  productSlug: string,
  dynamicValues: Record<string, string>,
): FieldDefinition[] {
  if (sectorSlug === "gubre-ve-granulasyon-tesisleri") {
    return [
      {
        id: "productForm",
        label: "Ürün Formu",
        type: "text",
        placeholder: getProductFormLabel(productSlug),
        readOnly: true,
      },
      {
        id: "automationLevel",
        label: "Otomasyon Seviyesi",
        type: "select",
        options: automationLevelOptions,
      },
      {
        id: "packagingNeed",
        label: "Paketleme İhtiyacı",
        type: "select",
        options: yesNoMaybeOptions,
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: installationModelOptions,
      },
      {
        id: "recipeStructure",
        label: "Hedef Analiz / Reçete Yapısı",
        type: "text",
        placeholder: "Örn. 15-15-15 / organomineral / amino asit oranı",
        span: 2,
      },
    ];
  }

  if (sectorSlug === "kompost-ve-organik-atik-tesisleri") {
    return [
      {
        id: "wasteType",
        label: "Atık Türü",
        type: "select",
        options: ["Evsel Organik Atık", "Tarımsal Atık", "Hayvansal Atık", "Karışık Organik Atık"],
      },
      { id: "inputMoisture", label: "Giriş Nemi", type: "text", placeholder: "Örn. %45" },
      {
        id: "targetProduct",
        label: "Hedef Son Ürün",
        type: "select",
        options: ["Kompost", "Kurutulmuş Organik Ürün", "Elek Altı / Elek Üstü Ayrımı", "Henüz net değil"],
      },
      {
        id: "odorControlNeed",
        label: "Koku Kontrol İhtiyacı",
        type: "select",
        options: yesNoMaybeOptions,
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: installationModelOptions,
      },
    ];
  }

  if (sectorSlug === "madencilik-ve-mineral-isleme") {
    return [
      { id: "materialType", label: "Malzeme Türü", type: "text", placeholder: "Örn. kalker / cevher / agrega" },
      { id: "inputSize", label: "Giriş Boyutu", type: "text", placeholder: "Örn. 0-500 mm" },
      { id: "targetOutputSize", label: "Hedef Çıkış Boyutu", type: "text", placeholder: "Örn. 0-25 mm" },
      { id: "dryingNeed", label: "Kurutma Gerekli mi?", type: "select", options: yesNoMaybeOptions },
      { id: "dustControlNeed", label: "Toz Kontrol İhtiyacı", type: "select", options: yesNoMaybeOptions },
    ];
  }

  if (sectorSlug === "kimya-ve-proses-endustrisi") {
    return [
      {
        id: "workingMode",
        label: "Çalışma Şekli",
        type: "select",
        options: ["Batch", "Sürekli"],
      },
      {
        id: "thermalNeed",
        label: "Isıtma / Soğutma İhtiyacı",
        type: "select",
        options: ["Isıtma", "Soğutma", "Isıtma + Soğutma", "Yok", "Henüz net değil"],
      },
      {
        id: "pressureNeed",
        label: "Basınçlı Sistem Gerekli mi?",
        type: "select",
        options: yesNoMaybeOptions,
      },
      {
        id: "materialCompatibility",
        label: "Malzeme Uyumu",
        type: "text",
        placeholder: "Örn. AISI 304 / AISI 316 / özel alaşım",
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: installationModelOptions,
      },
    ];
  }

  if (sectorSlug === "geri-donusum-ve-atik-yonetimi") {
    return [
      { id: "wasteType", label: "Atık Türü", type: "text", placeholder: "Örn. plastik / belediye atığı / RDF" },
      { id: "inputSize", label: "Giriş Boyutu", type: "text", placeholder: "Örn. 0-800 mm" },
      { id: "targetOutputSize", label: "Hedef Çıkış Boyutu", type: "text", placeholder: "Örn. 0-60 mm" },
      {
        id: "plantType",
        label: "Sabit / Mobil Tesis",
        type: "select",
        options: ["Sabit", "Mobil", "Henüz net değil"],
      },
      { id: "dustControlNeed", label: "Toz Kontrol İhtiyacı", type: "select", options: yesNoMaybeOptions },
    ];
  }

  if (sectorSlug === "enerji-ve-biyogaz-sistemleri") {
    return [
      { id: "feedType", label: "Girdi Türü", type: "text", placeholder: "Örn. mısır silajı / organik atık / tavuk gübresi" },
      {
        id: "systemType",
        label: "Sistem Tipi",
        type: "select",
        options: ["Yeni yatırım", "Mevcut hat desteği", "Revizyon"],
      },
      {
        id: "automationLevel",
        label: "Otomasyon Seviyesi",
        type: "select",
        options: automationLevelOptions,
      },
      {
        id: "odorControlNeed",
        label: "Koku Kontrol İhtiyacı",
        type: "select",
        options: yesNoMaybeOptions,
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: installationModelOptions,
      },
    ];
  }

  if (sectorSlug === "atik-su-camuru-ve-aritma-cozumleri") {
    return [
      { id: "sludgeType", label: "Giriş Çamur Türü", type: "text", placeholder: "Örn. biyolojik / endüstriyel / karışık" },
      { id: "inputMoisture", label: "Giriş Nemi", type: "text", placeholder: "Örn. %78" },
      { id: "targetMoisture", label: "Hedef Çıkış Nemi", type: "text", placeholder: "Örn. %20" },
      {
        id: "targetProduct",
        label: "Son Ürün Hedefi",
        type: "select",
        options: ["Kurutulmuş ürün", "Bertaraf öncesi hacim azaltma", "Diğer"],
      },
      {
        id: "installationModel",
        label: "Kurulum Modeli",
        type: "select",
        options: installationModelOptions,
      },
    ];
  }

  return [
    { id: "storageNeed", label: "Depolama İhtiyacı", type: "select", options: yesNoMaybeOptions },
    { id: "dosingNeed", label: "Dozajlama Gerekli mi?", type: "select", options: yesNoMaybeOptions },
    { id: "packagingNeed", label: "Paketleme Gerekli mi?", type: "select", options: yesNoMaybeOptions },
    { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: automationLevelOptions },
    { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installationModelOptions },
  ];
}

function getFieldDefaultValue(field: FieldDefinition) {
  if (field.readOnly) return field.placeholder ?? "";
  if (field.type === "select") return field.options?.[0] ?? "";
  return "";
}

function getWrapperClass(span: FieldDefinition["span"] = 1) {
  return span === 2 ? "xl:col-span-2" : "";
}

export function SectorInquiryForm({
  requestTargetTitle,
  initialSectorSlug,
  initialProductSlug,
}: SectorInquiryFormProps) {
  const initialSector = getSectorBySlug(initialSectorSlug ?? sectorCards[0]?.slug ?? "");
  const initialProduct =
    initialSector.subLinks.find((item) => item.slug === initialProductSlug)?.slug ?? initialSector.subLinks[0]?.slug ?? "";

  const formRef = useRef<HTMLFormElement>(null);
  const [commonState, setCommonState] = useState<CommonState>({
    companyName: "",
    fullName: "",
    phone: "",
    email: "",
    location: "",
    requestType: requestTypeOptions[0],
    sectorSlug: initialSector.slug,
    productSlug: initialProduct,
    targetCapacity: "",
    projectStatus: projectStatusOptions[0],
    message: "",
    consent: false,
  });
  const [dynamicValues, setDynamicValues] = useState<Record<string, string>>({});

  const selectedSector = useMemo(() => getSectorBySlug(commonState.sectorSlug), [commonState.sectorSlug]);
  const productOptions = selectedSector.subLinks;

  useEffect(() => {
    if (!productOptions.some((item) => item.slug === commonState.productSlug)) {
      setCommonState((current) => ({
        ...current,
        productSlug: productOptions[0]?.slug ?? "",
      }));
    }
  }, [commonState.productSlug, productOptions]);

  const dynamicFields = useMemo(
    () => getDynamicFields(commonState.sectorSlug, commonState.productSlug, dynamicValues),
    [commonState.productSlug, commonState.sectorSlug, dynamicValues],
  );

  useEffect(() => {
    setDynamicValues((current) => {
      const next = Object.fromEntries(
        dynamicFields.map((field) => {
          const fallbackValue = getFieldDefaultValue(field);

          if (field.readOnly) {
            return [field.id, fallbackValue];
          }

          return [field.id, current[field.id] ?? fallbackValue];
        }),
      );

      const currentKeys = Object.keys(current);
      const nextKeys = Object.keys(next);

      const hasDifferentLength = currentKeys.length !== nextKeys.length;
      const hasDifferentValue = nextKeys.some((key) => current[key] !== next[key]);

      return hasDifferentLength || hasDifferentValue ? next : current;
    });
  }, [dynamicFields]);

  const capacityMeta = useMemo(
    () => getCapacityMeta(commonState.sectorSlug, commonState.productSlug, dynamicValues),
    [commonState.productSlug, commonState.sectorSlug, dynamicValues],
  );

  const sectorOptions = useMemo(
    () =>
      sectorCards.map((item) => ({
        value: item.slug,
        label: trText(item.title),
      })),
    [],
  );

  const messageBody = useMemo(() => {
    const sectorLabel = trText(selectedSector.title);
    const productLabel = getProductLabel(commonState.sectorSlug, commonState.productSlug);

    const rows = [
      `Merhaba, ${trText(requestTargetTitle)} için bilgi / teklif talep ediyorum.`,
      "",
      `Firma Adı: ${commonState.companyName}`,
      `Ad Soyad: ${commonState.fullName}`,
      `Telefon: ${commonState.phone}`,
      `E-posta: ${commonState.email}`,
      commonState.location ? `Şehir / Ülke: ${commonState.location}` : "",
      `Talep Türü: ${commonState.requestType}`,
      `Sektör: ${sectorLabel}`,
      `Ürün / Çözüm Grubu: ${productLabel}`,
      commonState.targetCapacity ? `${capacityMeta.label}: ${commonState.targetCapacity} ${capacityMeta.unit}` : `${capacityMeta.label}: -`,
      `Proje Durumu: ${commonState.projectStatus}`,
      ...dynamicFields.map((field) => {
        const value = dynamicValues[field.id];
        const suffix = field.unit && value ? ` ${field.unit}` : "";
        return `${field.label}: ${value || "-" }${suffix}`;
      }),
      `Mesaj / Teknik Açıklama: ${commonState.message || "Belirtilmedi"}`,
      "",
      "Bu talebim için teknik değerlendirme ve dönüş rica ederim.",
    ];

    return rows.filter(Boolean).join("\n");
  }, [capacityMeta.label, capacityMeta.unit, commonState, dynamicFields, dynamicValues, requestTargetTitle, selectedSector.title]);

  function submitTo(target: "whatsapp" | "mail") {
    if (!formRef.current?.reportValidity() || !commonState.consent) return;

    const subject = `${trText(requestTargetTitle)} - Teklif / Teknik Görüşme`;

    if (target === "whatsapp") {
      window.open(`https://wa.me/905380631163?text=${encodeURIComponent(messageBody)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:info@promakina.com.tr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
  }

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-6 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">TEKLİF VE TEKNİK GÖRÜŞME</p>
        <h2 className="mt-3 max-w-5xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          {trText(requestTargetTitle)} için teklif veya teknik görüşme talep edin
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Seçtiğiniz sektör, ürün, kapasite ve kurulum ihtiyacına göre size uygun proses, makina ve tesis çözümünü birlikte netleştirelim.
        </p>
      </div>

      <form ref={formRef} className="px-6 py-6 sm:px-8 sm:py-8">
        <div className="space-y-7">
          <section>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">İletişim Bilgileri</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Firma Adı *</span>
                <input
                  required
                  type="text"
                  value={commonState.companyName}
                  onChange={(event) => setCommonState((current) => ({ ...current, companyName: event.target.value }))}
                  className={inputClass}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Ad Soyad *</span>
                <input
                  required
                  type="text"
                  value={commonState.fullName}
                  onChange={(event) => setCommonState((current) => ({ ...current, fullName: event.target.value }))}
                  className={inputClass}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Telefon *</span>
                <input
                  required
                  type="tel"
                  value={commonState.phone}
                  onChange={(event) => setCommonState((current) => ({ ...current, phone: event.target.value }))}
                  className={inputClass}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">E-posta *</span>
                <input
                  required
                  type="email"
                  value={commonState.email}
                  onChange={(event) => setCommonState((current) => ({ ...current, email: event.target.value }))}
                  className={inputClass}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Şehir / Ülke</span>
                <input
                  type="text"
                  value={commonState.location}
                  onChange={(event) => setCommonState((current) => ({ ...current, location: event.target.value }))}
                  className={inputClass}
                />
              </label>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Talep ve Çözüm Kurgusu</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Talep Türü *</span>
                <select
                  required
                  value={commonState.requestType}
                  onChange={(event) => setCommonState((current) => ({ ...current, requestType: event.target.value }))}
                  className={inputClass}
                >
                  {requestTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Sektör *</span>
                <select
                  required
                  value={commonState.sectorSlug}
                  onChange={(event) =>
                    setCommonState((current) => ({
                      ...current,
                      sectorSlug: event.target.value,
                    }))
                  }
                  className={inputClass}
                >
                  {sectorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Ürün / Çözüm Grubu *</span>
                <select
                  required
                  value={commonState.productSlug}
                  onChange={(event) => setCommonState((current) => ({ ...current, productSlug: event.target.value }))}
                  className={inputClass}
                >
                  {productOptions.map((option) => (
                    <option key={option.slug} value={option.slug}>
                      {trText(option.label)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">{capacityMeta.label}</span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={commonState.targetCapacity}
                    onChange={(event) => setCommonState((current) => ({ ...current, targetCapacity: event.target.value }))}
                    placeholder={capacityMeta.placeholder}
                    className={`${inputClass} pr-24`}
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">
                    {capacityMeta.unit}
                  </span>
                </div>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-900">Proje Durumu *</span>
                <select
                  required
                  value={commonState.projectStatus}
                  onChange={(event) => setCommonState((current) => ({ ...current, projectStatus: event.target.value }))}
                  className={inputClass}
                >
                  {projectStatusOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Dinamik Teknik Alanlar</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {dynamicFields.map((field) => (
                <label key={field.id} className={`space-y-2 ${getWrapperClass(field.span)}`}>
                  <span className="text-sm font-semibold text-slate-900">{field.label}</span>
                  {field.type === "select" ? (
                    <select
                      value={dynamicValues[field.id] ?? ""}
                      onChange={(event) => setDynamicValues((current) => ({ ...current, [field.id]: event.target.value }))}
                      className={inputClass}
                    >
                      {(field.options ?? []).map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative">
                      <input
                        type={field.type === "number" ? "number" : "text"}
                        min={field.type === "number" ? "0" : undefined}
                        step={field.type === "number" ? "any" : undefined}
                        value={dynamicValues[field.id] ?? ""}
                        readOnly={field.readOnly}
                        onChange={(event) => setDynamicValues((current) => ({ ...current, [field.id]: event.target.value }))}
                        placeholder={field.placeholder}
                        className={`${inputClass} ${field.readOnly ? "cursor-default bg-slate-50 text-slate-600" : ""} ${
                          field.unit ? "pr-24" : ""
                        }`}
                      />
                      {field.unit ? (
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">
                          {field.unit}
                        </span>
                      ) : null}
                    </div>
                  )}
                </label>
              ))}
            </div>
          </section>

          <section>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-slate-900">Mesaj / Teknik Açıklama</span>
              <textarea
                rows={5}
                value={commonState.message}
                onChange={(event) => setCommonState((current) => ({ ...current, message: event.target.value }))}
                placeholder="Projenizle ilgili ürün tipi, hedef kapasite, mevcut saha bilgisi, özel proses ihtiyacı ve beklentilerinizi yazabilirsiniz."
                className="min-h-[144px] w-full rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </section>

          <section className="border-t border-slate-200 pt-5">
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              <input
                required
                type="checkbox"
                checked={commonState.consent}
                onChange={(event) => setCommonState((current) => ({ ...current, consent: event.target.checked }))}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
              />
              <span>İletişim bilgilerimin teklif ve teknik değerlendirme amacıyla kullanılmasını kabul ediyorum.</span>
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => submitTo("whatsapp")}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                WhatsApp'dan Gönder
              </button>
              <button
                type="button"
                onClick={() => submitTo("mail")}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700"
              >
                Mail Gönder
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
