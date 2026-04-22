const exactReplacements: Array<[string, string]> = [
  ["İlgili Sekt?rler", "İlgili Sektörler"],
  ["Kimya ve Proses End?strisi", "Kimya ve Proses Endüstrisi"],
  ["G?bre ?Sretim Tesisleri", "Gübre Üretim Tesisleri"],
  ["Madencilik ve Mineral 0?xleme", "Madencilik ve Mineral İşleme"],
  ["Geri D?n??x?m ve At1k Y?netimi", "Geri Dönüşüm ve Atık Yönetimi"],
  ["At1k Su ?!amuru ve Ar1tma ?!?z?mleri", "Atık Su Çamuru ve Arıtma Çözümleri"],
  ["Yem, Toz ve D?kme Kat1 Malzeme 0?xleme Sistemleri", "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri"],
  ["Gübre ve Granülasyon Tesisleri", "Gübre Üretim Tesisleri"],
  ["MüÅŸteri GiriÅŸ Alanı", "Müşteri Giriş Alanı"],
  ["Otomatik Sistem Yorumları", "Otomatik Sistem Yorumları"],
  ["Sonuç Ekranı", "Sonuç Ekranı"],
  ["Teknik Görüşme", "Teknik Görüşme"],
  ["İlgili alt başlıklar", "İlgili alt başlıklar"],
  ["Detayı İncele", "Detayı İncele"],
  ["Tüm Çözüm Alanlarına Dön", "Tüm Çözüm Alanlarına Dön"],
  ["Tüm Sektörlere Dön", "Tüm Sektörlere Dön"],
  ["Seçiniz", "Seçiniz"],
  ["Hesaba veya standarda göre otomatik gelir", "Hesaba veya standarda göre otomatik gelir"],
  ["Bu alanı siz doldurun", "Bu alanı siz doldurun"],
  ["Bu alanı siz seçin", "Bu alanı siz seçin"],
  ["Kontroll? ve planlı kurulum süreci", "Kontrollü ve planlı kurulum süreci"],
  ["Daha d?ş?k hata riski ve daha yüksek verimlilik", "Daha düşük hata riski ve daha yüksek verimlilik"],
];

const fragmentReplacements: Array<[RegExp, string]> = [
  [/\u0013/g, ""],
  [/\u00bf/g, ""],
  [/\u00bd/g, ""],
  [/\u00a0/g, " "],
  [/0\?xleme/gi, "İşleme"],
  [/0\?x/gi, "İş"],
  [/At1k/g, "Atık"],
  [/at1k/g, "atık"],
  [/Ar1tma/g, "Arıtma"],
  [/ar1tma/g, "arıtma"],
  [/Kat1/g, "Katı"],
  [/kat1/g, "katı"],
  [/S1v1/g, "Sıvı"],
  [/s1v1/g, "sıvı"],
  [/\?retiminde/gi, "üretiminde"],
  [/\?retimi/gi, "üretimi"],
  [/\?retime/gi, "üretime"],
  [/\?retim/gi, "üretim"],
  [/\?r\?n\?n/gi, "ürünün"],
  [/\?r\?nleri/gi, "ürünleri"],
  [/\?r\?nlere/gi, "ürünlere"],
  [/\?r\?nler/gi, "ürünler"],
  [/\?r\?n/gi, "ürün"],
  [/\?\?z\?mleri/gi, "çözümleri"],
  [/\?z\?mleri/gi, "çözümleri"],
  [/\?\?z\?m/gi, "çözüm"],
  [/\?z\?m/gi, "çözüm"],
  [/\?zel/gi, "özel"],
  [/\?evresel/gi, "çevresel"],
  [/\?amuru/gi, "çamuru"],
  [/\?amur/gi, "çamur"],
  [/\?!amuru/gi, "Çamuru"],
  [/\?!eneli/gi, "Çeneli"],
  [/\?!al1\?xmalar1/gi, "Çalışmaları"],
  [/\?!al1\?xma/gi, "Çalışma"],
  [/Y\?netimi/g, "Yönetimi"],
  [/y\?netimi/g, "yönetimi"],
  [/dönüş\?m/gi, "dönüşüm"],
  [/Dönüş\?m/gi, "Dönüşüm"],
  [/dönüşx\?m/gi, "dönüşüm"],
  [/Dönüşx\?m/gi, "Dönüşüm"],
  [/d\?n\?\?m/gi, "dönüşüm"],
  [/d\?n\?\?/gi, "dönüş"],
  [/S\?re\?/g, "Süreç"],
  [/s\?re\?/g, "süreç"],
  [/T\?m/g, "Tüm"],
  [/t\?m/g, "tüm"],
  [/Y\?net/g, "Yönet"],
  [/y\?net/g, "yönet"],
  [/g\?bre/gi, "gübre"],
  [/m\?hendislik/gi, "mühendislik"],
  [/end\?strisi/gi, "endüstrisi"],
  [/end\?stri/gi, "endüstri"],
  [/s\?reci/gi, "süreci"],
  [/s\?reç/gi, "süreç"],
  [/s\?rec/gi, "süreç"],
  [/se\?imi/gi, "seçimi"],
  [/se\?im/gi, "seçim"],
  [/yerle\?imi/gi, "yerleşimi"],
  [/yerle\?im/gi, "yerleşim"],
  [/g\?nl\?k/gi, "günlük"],
  [/so\?utma/gi, "soğutma"],
  [/s\?cakl\?k/gi, "sıcaklık"],
  [/kontroll\?/gi, "kontrollü"],
  [/d\?ş\?k/gi, "düşük"],
  [/y\?ksek/gi, "yüksek"],
  [/gran\?lasyon/gi, "granülasyon"],
  [/gran\?l/gi, "granül"],
  [/d\?kme/gi, "dökme"],
  [/ta\?x1ma/gi, "taşıma"],
  [/ak1\?xlar1n1/gi, "akışlarını"],
  [/ak1\?xlar1/gi, "akışları"],
  [/ak1\?x1/gi, "akışı"],
  [/ak1\?x/gi, "akış"],
  [/ba\?xlantisi/gi, "bağlantısı"],
  [/ba\?xlanti/gi, "bağlantı"],
  [/dan1\?xmanl1k/gi, "danışmanlık"],
  [/kar1\?xt1r1c1l1/gi, "karıştırıcılı"],
  [/d\?ner/gi, "döner"],
  [/A\?1k a\?x1z/gi, "Açık ağız"],
  [/\?xi\?xeleme/gi, "şişeleme"],
  [/de\?xil/gi, "değil"],
  [/de\?Yil/gi, "değil"],
  [/de\?xerl/gi, "değerl"],
  [/de\?Yerl/gi, "değerl"],
  [/do\?xru/gi, "doğru"],
  [/do\?Yru/gi, "doğru"],
  [/ba\?Ytan/gi, "baştan"],
  [/ba\?Yli/gi, "bağlı"],
  [/ba\?Yar/gi, "başar"],
  [/\?Y/g, "ş"],
  [/sa\?Yl/gi, "sağl"],
  [/i\?Yleme/gi, "işleme"],
  [/i\?Ylen/gi, "işlen"],
  [/eri\?Yim/gi, "erişim"],
  [/olu\?Ytur/gi, "oluştur"],
  [/iyile\?Y/gi, "iyileş"],
  [/geli\?Ytir/gi, "geliştir"],
  [/d\?n\?Y/gi, "dönüş"],
  [/Arıtma \?!/g, "Arıtma Ç"],
  [/Ihtiya\?/g, "İhtiyaç"],
  [/ihtiya\?/g, "ihtiyaç"],
  [/kolayli\?Yi/gi, "kolaylığı"],
  [/standartla\?Yma/gi, "standartlaşma"],
  [/yerle\?Yim/gi, "yerleşim"],
  [/yerle\?Yimi/gi, "yerleşimi"],
];

const asciiWordMap: Record<string, string> = {
  agir: "ağır",
  agirlik: "ağırlık",
  akim: "akım",
  akis: "akış",
  akislari: "akışları",
  akislarini: "akışlarını",
  anlasilir: "anlaşılır",
  aritma: "arıtma",
  atik: "atık",
  atiklar: "atıklar",
  atiklarin: "atıkların",
  ayirma: "ayırma",
  bagimli: "bağımlı",
  bagli: "bağlı",
  baglanti: "bağlantı",
  baglantisi: "bağlantısı",
  bakim: "bakım",
  basarili: "başarılı",
  basari: "başarı",
  baslangic: "başlangıç",
  baslik: "başlık",
  butunlesik: "bütünleşik",
  buyuk: "büyük",
  calisir: "çalışır",
  calisma: "çalışma",
  camur: "çamur",
  camuru: "çamuru",
  cevresel: "çevresel",
  cikar: "çıkar",
  cikis: "çıkış",
  cok: "çok",
  cozum: "çözüm",
  cozumler: "çözümler",
  cozumleri: "çözümleri",
  danismanlik: "danışmanlık",
  dayanimli: "dayanımlı",
  deger: "değer",
  degerlendirme: "değerlendirme",
  degerlendirerek: "değerlendirerek",
  degil: "değil",
  degisir: "değişir",
  degisken: "değişken",
  dokme: "dökme",
  dogru: "doğru",
  donusum: "dönüşüm",
  dusuk: "düşük",
  endustri: "endüstri",
  endustrisi: "endüstrisi",
  erisim: "erişim",
  gecis: "geçiş",
  gelisim: "gelişim",
  gelistirme: "geliştirme",
  gercek: "gerçek",
  giris: "giriş",
  gorsel: "görsel",
  gorusme: "görüşme",
  govde: "gövde",
  granul: "granül",
  granulasyon: "granülasyon",
  guclendirme: "güçlendirme",
  gunluk: "günlük",
  gubre: "gübre",
  guvenlik: "güvenlik",
  guvenligi: "güvenliği",
  hazirlama: "hazırlama",
  hizli: "hızlı",
  imalati: "imalatı",
  icin: "için",
  ihtiyac: "ihtiyaç",
  iletisim: "iletişim",
  imkani: "imkânı",
  isleme: "işleme",
  isitma: "ısıtma",
  iyilestirme: "iyileştirme",
  karisim: "karışım",
  karistirma: "karıştırma",
  karistiricili: "karıştırıcılı",
  kisa: "kısa",
  kosullari: "koşulları",
  kosullarina: "koşullarına",
  kontrolu: "kontrolü",
  kontrollu: "kontrollü",
  kucuk: "küçük",
  muhendislik: "mühendislik",
  mumkun: "mümkün",
  olculerde: "ölçülerde",
  olculebilir: "ölçülebilir",
  olcu: "ölçü",
  olgunlastirma: "olgunlaştırma",
  olusturma: "oluşturma",
  olusturur: "oluşturur",
  oncesi: "öncesi",
  onemli: "önemli",
  onleyici: "önleyici",
  ongorulebilir: "öngörülebilir",
  omru: "ömrü",
  ozel: "özel",
  recete: "reçete",
  saglam: "sağlam",
  saglar: "sağlar",
  secenekleri: "seçenekleri",
  secim: "seçim",
  secimi: "seçimi",
  sektor: "sektör",
  sektorler: "sektörler",
  sicaklik: "sıcaklık",
  siniflandirma: "sınıflandırma",
  sivi: "sıvı",
  sogutma: "soğutma",
  surec: "süreç",
  sureci: "süreci",
  surekli: "sürekli",
  sureklilik: "süreklilik",
  surdurulebilir: "sürdürülebilir",
  tasarimi: "tasarımı",
  tasima: "taşıma",
  urun: "ürün",
  urune: "ürüne",
  urunu: "ürünü",
  urunun: "ürünün",
  urunler: "ürünler",
  uretim: "üretim",
  uretimi: "üretimi",
  yapilandirma: "yapılandırma",
  yapisi: "yapısı",
  yapisina: "yapısına",
  yardimci: "yardımcı",
  yatirim: "yatırım",
  yerlesim: "yerleşim",
  yerlesimi: "yerleşimi",
  yogunluk: "yoğunluk",
  yonelik: "yönelik",
  yonetim: "yönetim",
  yonetimi: "yönetimi",
  yorumlari: "yorumları",
  yuksek: "yüksek",
};

const mojibakeMarkerRegex = /[ÃÄÅÂ�]/g;

function applyCasePattern(source: string, target: string) {
  if (source.toLocaleUpperCase("tr-TR") === source) {
    return target.toLocaleUpperCase("tr-TR");
  }

  if (source[0] && source[0].toLocaleUpperCase("tr-TR") === source[0]) {
    return target.charAt(0).toLocaleUpperCase("tr-TR") + target.slice(1);
  }

  return target;
}

function countMojibakeMarkers(value: string) {
  return (value.match(mojibakeMarkerRegex) ?? []).length;
}

function decodeLatin1AsUtf8(value: string) {
  try {
    const bytes = Uint8Array.from(Array.from(value, (char) => char.charCodeAt(0) & 0xff));
    return new TextDecoder("utf-8").decode(bytes);
  } catch {
    return value;
  }
}

function normalizeMojibake(value: string) {
  let current = value;

  for (let index = 0; index < 3; index += 1) {
    if (!/[ÃÄÅÂ]/.test(current)) {
      break;
    }

    const candidate = decodeLatin1AsUtf8(current);
    if (candidate === current) {
      break;
    }

    if (countMojibakeMarkers(candidate) <= countMojibakeMarkers(current)) {
      current = candidate;
      continue;
    }

    break;
  }

  return current;
}

function normalizeAsciiWords(text: string) {
  return text.replace(/\b[A-Za-z]+\b/g, (token) => {
    const replacement = asciiWordMap[token.toLocaleLowerCase("tr-TR")];
    return replacement ? applyCasePattern(token, replacement) : token;
  });
}

export function trText(text: string): string {
  let value = text.normalize("NFC");

  value = normalizeMojibake(value);

  for (const [broken, fixed] of exactReplacements) {
    value = value.split(broken).join(fixed);
  }

  for (const [pattern, replacement] of fragmentReplacements) {
    value = value.replace(pattern, replacement);
  }

  value = normalizeMojibake(value);
  value = normalizeAsciiWords(value);

  return value
    .replace(/Â/g, "")
    .replace(/�/g, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ ?\n ?/g, "\n")
    .trim();
}
