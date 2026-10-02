import type { SectorDetailUi } from "../types";

const notSure = "Henüz net değil";
const yesNo = ["Evet", "Hayır", notSure];
const installation = ["Sadece makine", "Makine + proses danışmanlığı", "Anahtar teslim tesis", notSure];
const automation = ["Yarı otomatik", "Tam otomatik", notSure];

export const trUi: SectorDetailUi = {
  homeLabel: "Ana Sayfa",
  sectorsLabel: "Sektörler",
  breadcrumbAria: "Sayfa konumu",
  parentEyebrow: "Ana Sektör",
  parentLabels: {
    fertilizer: "Gübre Üretim Tesisleri",
    compost: "Kompost ve Organik Atık Tesisleri",
    energy: "Enerji ve Biyogaz Sistemleri",
  },
  heroButtons: { quote: "Teklif Al", whatsapp: "WhatsApp ile Görüş", call: "Telefonla Ara" },
  relatedLabel: "İlgili tesis çözümleri:",
  stepLabel: "Adım",
  machineLink: "Makineyi İncele",
  form: {
    eyebrow: "Teklif ve Teknik Görüşme",
    contactSection: "İletişim Bilgileri",
    requestSection: "Talep Bilgileri",
    technicalSection: "Teknik Bilgiler",
    company: "Firma Adı",
    fullName: "Ad Soyad",
    phone: "Telefon",
    email: "E-posta",
    location: "Şehir / Ülke",
    requestType: "Talep Türü",
    requestTypes: ["Teklif talebi", "Teknik görüşme talebi", "Proje değerlendirme", "Revizyon / modernizasyon"],
    sector: "Sektör",
    product: "Ürün / Çözüm",
    projectStatus: "Proje Durumu",
    projectStatuses: ["Yeni yatırım", "Mevcut tesis revizyonu", "Kapasite artırımı", "Fizibilite aşaması", notSure],
    message: "Mesaj / Teknik Açıklama",
    messagePlaceholder:
      "Hammadde, hedef ürün, kapasite, mevcut saha durumu ve beklentilerinizi kısaca yazabilirsiniz.",
    consent: "İletişim bilgilerimin teklif ve teknik değerlendirme amacıyla kullanılmasını kabul ediyorum.",
    whatsapp: "WhatsApp'tan Gönder",
    mail: "E-posta Gönder",
    mailSubjectSuffix: "Teklif / Teknik Görüşme",
    messageHeading: "Yeni Teknik Teklif Talebi",
    pageLabel: "Sayfa",
  },
  profiles: {
    liquid: {
      capacity: { label: "Batch Kapasitesi", unit: "ton/batch", placeholder: "Örn. 5" },
      fields: [
        { id: "productType", label: "Ürün Tipi", type: "select", options: ["Berrak çözelti", "Süspansiyon", notSure] },
        { id: "packaging", label: "Ambalaj / Dolum", type: "select", options: ["Bidon / şişe", "IBC", "Dökme sevkiyat", notSure] },
        { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: automation },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
        { id: "recipe", label: "Hedef Reçete / Analiz", type: "text", placeholder: "Örn. hammadde listesi ve hedef analiz", span: 2 },
      ],
    },
    granule: {
      capacity: { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 3" },
      fields: [
        { id: "rawMaterials", label: "Ana Hammaddeler", type: "text", placeholder: "Örn. kompost, leonardit, MAP" },
        { id: "inputMoisture", label: "Hammadde Nemi", type: "text", placeholder: "Örn. %35" },
        { id: "granuleSize", label: "Hedef Granül Boyutu", type: "text", placeholder: "Örn. 2-4 mm" },
        { id: "packaging", label: "Paketleme İhtiyacı", type: "select", options: yesNo },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
    powder: {
      capacity: { label: "Saatlik Kapasite", unit: "ton/saat", placeholder: "Örn. 2" },
      fields: [
        { id: "rawMaterials", label: "Ana Hammaddeler", type: "text", placeholder: "Örn. MAP, MKP, potasyum nitrat" },
        { id: "componentCount", label: "Bileşen Sayısı", type: "text", placeholder: "Örn. 6" },
        { id: "packagingType", label: "Ambalaj Tipi", type: "select", options: ["Küçük torba", "25-50 kg torba", "Big bag", notSure] },
        { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: automation },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
    compost: {
      capacity: { label: "Günlük Atık Girişi", unit: "ton/gün", placeholder: "Örn. 50" },
      fields: [
        { id: "wasteDetail", label: "Atık İçeriği", type: "text", placeholder: "Atığın kaynağı ve bileşimi" },
        { id: "inputMoisture", label: "Giriş Nemi", type: "text", placeholder: "Örn. %60" },
        { id: "targetProduct", label: "Hedef Son Ürün", type: "select", options: ["Elenmiş kompost", "Granül organik gübre", "Toprak düzenleyici", notSure] },
        { id: "odorControl", label: "Koku Kontrolü Gerekli mi?", type: "select", options: yesNo },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
    biogas: {
      capacity: { label: "Günlük Besleme Miktarı", unit: "ton/gün", placeholder: "Örn. 60" },
      fields: [
        { id: "feedstock", label: "Girdi Karışımı", type: "text", placeholder: "Girdi türleri ve oranları" },
        { id: "plantStatus", label: "Tesis Durumu", type: "select", options: ["Yeni tesis", "Mevcut tesise ek hat", "Revizyon", notSure] },
        { id: "scope", label: "Talep Kapsamı", type: "select", options: ["Ön işlem ve besleme", "Digestat işleme", "Her ikisi", notSure] },
        { id: "odorControl", label: "Koku Kontrolü Gerekli mi?", type: "select", options: yesNo },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
    biomass: {
      capacity: { label: "Saatlik Yakıt Hazırlama", unit: "ton/saat", placeholder: "Örn. 5" },
      fields: [
        { id: "biomassType", label: "Biyokütle Türü", type: "text", placeholder: "Örn. odun yongası, budama atığı, sap" },
        { id: "inputMoisture", label: "Giriş Nemi", type: "text", placeholder: "Örn. %45" },
        { id: "targetMoisture", label: "Hedef Yakıt Nemi", type: "text", placeholder: "Kazan üreticisinin istediği değer" },
        { id: "conversion", label: "Enerji Dönüşüm Ünitesi", type: "select", options: ["Kazan / buhar", "Gazlaştırma", "Mevcut tesis", notSure] },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
    biomethane: {
      capacity: { label: "Ham Biyogaz Debisi", unit: "Nm³/saat", placeholder: "Örn. 500" },
      fields: [
        { id: "gasSource", label: "Biyogaz Kaynağı", type: "text", placeholder: "Örn. tarımsal tesis, arıtma çamuru" },
        { id: "gasAnalysis", label: "Gaz Analizi Mevcut mu?", type: "select", options: yesNo },
        { id: "endUse", label: "Hedef Kullanım", type: "select", options: ["Şebekeye verme", "Araç yakıtı (CNG/LNG)", "Tesis içi kullanım", notSure] },
        { id: "scope", label: "Talep Kapsamı", type: "select", options: ["Ön arıtma ve yardımcı sistemler", "Komple arıtma hattı", notSure] },
        { id: "installationModel", label: "Kurulum Modeli", type: "select", options: installation },
      ],
    },
  },
};
