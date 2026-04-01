"use client";

import { useRef, useState } from "react";

type FertilizerFormState = {
  companyName: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  requestType: string;
  productionType: string;
  subProductType: string;
  multiProductNote: string;
  hourlyCapacity: string;
  batchCapacity: string;
  dailyTarget: string;
  rawMaterialSetup: string;
  automationLevel: string;
  packagingNeed: string;
  packagingOptions: string[];
  installationModel: string;
  projectStatus: string;
  message: string;
  consent: boolean;
};

const liquidOptions = ["Sıvı Organomineral", "Sıvı NPK", "Sıvı Amino Asit", "Diğer"];
const granularOptions = ["Granül Organomineral", "Granül NPK", "Diğer"];
const powderOptions = ["Toz Organomineral", "Toz NPK", "Diğer"];
const packagingChoices = [
  "Açık ağız torbalama",
  "Big bag dolum",
  "Paletleme",
  "Sıvı dolum şişeleme",
  "Şişe etiketleme",
  "Henüz net değil",
];

const initialFormState: FertilizerFormState = {
  companyName: "",
  fullName: "",
  phone: "",
  email: "",
  location: "",
  requestType: "Teklif Talebi",
  productionType: "Sıvı Gübre",
  subProductType: "Sıvı Organomineral",
  multiProductNote: "",
  hourlyCapacity: "",
  batchCapacity: "",
  dailyTarget: "",
  rawMaterialSetup: "Henüz net değil",
  automationLevel: "Henüz net değil",
  packagingNeed: "Henüz net değil",
  packagingOptions: [],
  installationModel: "Henüz net değil",
  projectStatus: "Yeni yatırım",
  message: "",
  consent: false,
};

function buildMessage(state: FertilizerFormState) {
  return [
    "Merhaba, Gübre Üretim Tesisleri için bilgi / teklif talep ediyorum.",
    "",
    `Firma Adı: ${state.companyName}`,
    `Ad Soyad: ${state.fullName}`,
    `Telefon: ${state.phone}`,
    `E-posta: ${state.email}`,
    state.location ? `Şehir / Ülke: ${state.location}` : "",
    `Talep Türü: ${state.requestType}`,
    `Gübre Üretim Türü: ${state.productionType}`,
    state.productionType === "Birden Fazla Ürün"
      ? `Alt Ürün / Ürün Kombinasyonu: ${state.multiProductNote || "Belirtilmedi"}`
      : `Alt Ürün Tipi: ${state.subProductType}`,
    state.productionType === "Sıvı Gübre" ? `Batch Kapasitesi: ${state.batchCapacity || "-"} ton/batch` : "",
    state.productionType === "Sıvı Gübre" || state.productionType === "Birden Fazla Ürün"
      ? `Günlük Üretim Hedefi: ${state.dailyTarget || "-"} ton/gün`
      : "",
    state.productionType !== "Sıvı Gübre" ? `Saatlik Kapasite: ${state.hourlyCapacity || "-"} ton/saat` : "",
    `Hammadde Yapısı: ${state.rawMaterialSetup}`,
    `Otomasyon Seviyesi: ${state.automationLevel}`,
    `Paketleme İhtiyacı: ${state.packagingNeed}`,
    state.packagingNeed === "Evet"
      ? `Paketleme Seçenekleri: ${state.packagingOptions.length ? state.packagingOptions.join(", ") : "Belirtilmedi"}`
      : "",
    `Kurulum Modeli: ${state.installationModel}`,
    `Proje Durumu: ${state.projectStatus}`,
    `Mesaj / Teknik Açıklama: ${state.message || "Belirtilmedi"}`,
    "",
    "Bu talebim için teknik değerlendirme ve dönüş rica ederim.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function FertilizerSectorForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FertilizerFormState>(initialFormState);

  const subProductOptions =
    formState.productionType === "Sıvı Gübre"
      ? liquidOptions
      : formState.productionType === "Granül Gübre"
        ? granularOptions
        : formState.productionType === "Toz Gübre"
          ? powderOptions
          : [];

  function setField<K extends keyof FertilizerFormState>(field: K, value: FertilizerFormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleProductionTypeChange(value: string) {
    setFormState((current) => ({
      ...current,
      productionType: value,
      subProductType:
        value === "Sıvı Gübre" ? liquidOptions[0] : value === "Granül Gübre" ? granularOptions[0] : value === "Toz Gübre" ? powderOptions[0] : "",
      multiProductNote: value === "Birden Fazla Ürün" ? current.multiProductNote : "",
    }));
  }

  function togglePackaging(option: string, checked: boolean) {
    setFormState((current) => ({
      ...current,
      packagingOptions: checked
        ? [...current.packagingOptions, option]
        : current.packagingOptions.filter((item) => item !== option),
    }));
  }

  function submitTo(target: "whatsapp" | "mail") {
    if (!formRef.current?.reportValidity() || !formState.consent) {
      return;
    }

    const message = buildMessage(formState);

    if (target === "whatsapp") {
      window.open(`https://wa.me/905380631163?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = `mailto:info@promakina.com.tr?subject=${encodeURIComponent("Gübre Üretim Tesisleri - Teklif / Teknik Talep")}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form ref={formRef} className="p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Firma Adı *</span><input required type="text" value={formState.companyName} onChange={(e) => setField("companyName", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Ad Soyad *</span><input required type="text" value={formState.fullName} onChange={(e) => setField("fullName", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Telefon *</span><input required type="tel" value={formState.phone} onChange={(e) => setField("phone", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">E-posta *</span><input required type="email" value={formState.email} onChange={(e) => setField("email", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Şehir / Ülke</span><input type="text" value={formState.location} onChange={(e) => setField("location", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" /></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Talep Türü *</span><select required value={formState.requestType} onChange={(e) => setField("requestType", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Teklif Talebi</option><option>Teknik Görüşme Talebi</option><option>Proje Değerlendirme</option><option>Mevcut Tesisi Revize Etmek İstiyorum</option></select></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Gübre Üretim Türü *</span><select required value={formState.productionType} onChange={(e) => handleProductionTypeChange(e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Sıvı Gübre</option><option>Granül Gübre</option><option>Toz Gübre</option><option>Birden Fazla Ürün</option></select></label>
        {formState.productionType !== "Birden Fazla Ürün" ? (
          <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Alt Ürün Tipi *</span><select required value={formState.subProductType} onChange={(e) => setField("subProductType", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500">{subProductOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        ) : (
          <label className="space-y-2 md:col-span-2"><span className="text-sm font-semibold text-slate-900">Alt Ürün Tipi / Çoklu Ürün Açıklaması *</span><textarea required rows={3} value={formState.multiProductNote} onChange={(e) => setField("multiProductNote", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" placeholder="Birden fazla ürün üretilecekse ürün kombinasyonunu yazabilirsiniz." /></label>
        )}
        {formState.productionType === "Sıvı Gübre" && <><label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Batch Kapasitesi *</span><div className="relative"><input required type="number" min="0" step="any" value={formState.batchCapacity} onChange={(e) => setField("batchCapacity", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-24 text-sm text-slate-900 outline-none transition focus:border-blue-500" /><span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">ton/batch</span></div></label><label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Günlük Üretim Hedefi</span><div className="relative"><input type="number" min="0" step="any" value={formState.dailyTarget} onChange={(e) => setField("dailyTarget", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-blue-500" /><span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">ton/gün</span></div></label></>}
        {(formState.productionType === "Granül Gübre" || formState.productionType === "Toz Gübre") && <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Saatlik Kapasite *</span><div className="relative"><input required type="number" min="0" step="any" value={formState.hourlyCapacity} onChange={(e) => setField("hourlyCapacity", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-blue-500" /><span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">ton/saat</span></div></label>}
        {formState.productionType === "Birden Fazla Ürün" && <><label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Saatlik Kapasite</span><div className="relative"><input type="number" min="0" step="any" value={formState.hourlyCapacity} onChange={(e) => setField("hourlyCapacity", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-blue-500" /><span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">ton/saat</span></div></label><label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Günlük Üretim Hedefi</span><div className="relative"><input type="number" min="0" step="any" value={formState.dailyTarget} onChange={(e) => setField("dailyTarget", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition focus:border-blue-500" /><span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-slate-500">ton/gün</span></div></label></>}
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Hammadde Yapısı *</span><select required value={formState.rawMaterialSetup} onChange={(e) => setField("rawMaterialSetup", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Hazır hammaddeler kullanılacak</option><option>Kendi hammadde hazırlama hattımız olacak</option><option>Henüz net değil</option></select></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Otomasyon Seviyesi *</span><select required value={formState.automationLevel} onChange={(e) => setField("automationLevel", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Yarı Otomatik</option><option>Tam Otomatik</option><option>Henüz net değil</option></select></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Paketleme İhtiyacı *</span><select required value={formState.packagingNeed} onChange={(e) => setFormState((current) => ({ ...current, packagingNeed: e.target.value, packagingOptions: e.target.value === "Evet" ? current.packagingOptions : [] }))} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Evet</option><option>Hayır</option><option>Henüz net değil</option></select></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Kurulum Modeli *</span><select required value={formState.installationModel} onChange={(e) => setField("installationModel", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Sadece Makine</option><option>Makine + Proses Danışmanlığı</option><option>Anahtar Teslim Tesis</option><option>Henüz net değil</option></select></label>
        <label className="space-y-2"><span className="text-sm font-semibold text-slate-900">Proje Durumu *</span><select required value={formState.projectStatus} onChange={(e) => setField("projectStatus", e.target.value)} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"><option>Yeni yatırım</option><option>Mevcut tesisi büyütme</option><option>Revizyon / modernizasyon</option><option>Fizibilite aşamasında</option></select></label>
      </div>

      {formState.packagingNeed === "Evet" && (
        <div className="mt-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Paketleme Seçenekleri</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {packagingChoices.map((option) => (
              <label key={option} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                <input type="checkbox" checked={formState.packagingOptions.includes(option)} onChange={(e) => togglePackaging(option, e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <label className="mt-5 block space-y-2"><span className="text-sm font-semibold text-slate-900">Mesaj / Teknik Açıklama</span><textarea rows={5} value={formState.message} onChange={(e) => setField("message", e.target.value)} className="w-full rounded-[28px] border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500" placeholder="Üretmek istediğiniz gübre türü, hedef kapasite, mevcut saha bilgisi ve özel ihtiyaçlarınızı yazabilirsiniz." /></label>
      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"><input required type="checkbox" checked={formState.consent} onChange={(e) => setField("consent", e.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500" /><span>İletişim bilgilerimin teklif ve teknik değerlendirme amacıyla kullanılmasını kabul ediyorum.</span></label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => submitTo("whatsapp")} className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700">WhatsApp’dan Gönder</button>
        <button type="button" onClick={() => submitTo("mail")} className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-700">Mail Gönder</button>
      </div>
    </form>
  );
}
