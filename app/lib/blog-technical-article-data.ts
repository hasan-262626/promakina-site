export type BlogTechnicalRequiredRow = {
  label: string;
  purpose: string;
  request: string;
};

export type BlogTechnicalExampleRow = {
  label: string;
  value: string;
  comment: string;
};

export type BlogTechnicalDecisionRow = {
  criterion: string;
  description: string;
  importance: string;
  effect: string;
};

export type BlogTechnicalFactorCard = {
  title: string;
  description: string;
};

export type BlogTechnicalRelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type BlogTechnicalArticleData = {
  requiredDataTitle: string;
  requiredDataDescription: string;
  requiredDataRows: BlogTechnicalRequiredRow[];
  exampleTitle: string;
  exampleDescription: string;
  exampleRows: BlogTechnicalExampleRow[];
  decisionTableTitle: string;
  decisionTableDescription: string;
  decisionTableRows: BlogTechnicalDecisionRow[];
  factorCardsTitle: string;
  factorCardsDescription: string;
  factorCards: BlogTechnicalFactorCard[];
  relatedLinksTitle: string;
  relatedLinksDescription: string;
  relatedLinks: BlogTechnicalRelatedLink[];
};

const dryingData: BlogTechnicalArticleData = {
  requiredDataTitle: "Konu İçin Gerekli Teknik Veriler",
  requiredDataDescription:
    "Kurutma projelerinde yalnız ton/saat bilgisi yeterli değildir. Nem yükü, ürün davranışı ve gaz hattı birlikte okunmalıdır.",
  requiredDataRows: [
    { label: "GiriÅŸ kapasitesi", purpose: "Tamburun saatlik yaş ürün yükünü tanımlar.", request: "Ã–rn. 10 ton/saat" },
    { label: "Başlangıç nemi", purpose: "Su uçurma yükünü ve enerji ihtiyacını belirler.", request: "Ã–rn. %25" },
    { label: "Hedef çıkış nemi", purpose: "Residence time ve son ürün standardını etkiler.", request: "Ã–rn. %10" },
    { label: "Ürün yoğunluğu", purpose: "Tambur doluluğu ve hacimsel davranışı okumayı sağlar.", request: "Ã–rn. 0,85 t/m3" },
    { label: "Tane boyutu", purpose: "Isı transferi ve toz kaçışı riskini etkiler.", request: "Ã–rn. 0-6 mm" },
    { label: "Yakıt türü", purpose: "Brülör ve enerji modelini şekillendirir.", request: "Doğalgaz / LNG / sıcak gaz" },
    { label: "Hava debisi", purpose: "Fan ve filtre hattının taşıyacağı gaz yükünü tanımlar.", request: "Ön debi yaklaşımı" },
    { label: "Çalışma süresi", purpose: "Saatlik kapasite ile günlük üretim hedefini dengeler.", request: "Örn. 16 saat/gün" },
  ],
  exampleTitle: "Ã–rnek Teknik DeÄŸerlendirme",
  exampleDescription:
    "Aşağıdaki örnek, kurutma hattında kapasite ile nem yükü arasındaki ilişkinin nasıl okunduğunu gösteren ön mühendislik yaklaşımıdır.",
  exampleRows: [
    { label: "Besleme kapasitesi", value: "10 ton/saat", comment: "Tambura giren yaş ürün miktarı" },
    { label: "Başlangıç nemi", value: "%25", comment: "İlk su yükü" },
    { label: "Hedef çıkış nemi", value: "%10", comment: "Son ürün standardı" },
    { label: "Kuru madde", value: "7,5 ton/saat", comment: "Proses boyunca korunur" },
    { label: "Çıkış ürün miktarı", value: "8,33 ton/saat", comment: "Hedef neme göre tahmini değer" },
    { label: "Su uçurma yükü", value: "1,67 ton/saat", comment: "Brülör ve fan hattının ana girdisi" },
  ],
  decisionTableTitle: "Teknik DeÄŸerlendirme Ã–zeti",
  decisionTableDescription:
    "Kurutma tamburu tasarımında gövde ölçüsü kadar fan hattı, filtreleme, enerji ve ürün davranışı da birlikte değerlendirilmelidir.",
  decisionTableRows: [
    { criterion: "Su uçurma yükü", description: "Saatte uzaklaştırılacak su miktarıdır.", importance: "Isıl yük ve brülör hesabını belirler.", effect: "Düşük okunursa hat hedef neme ulaşamaz." },
    { criterion: "L/D oranı", description: "Tambur boyu ile çapı arasındaki ilişkidir.", importance: "Ön geometri kararına referans verir.", effect: "Yanlış oran enerji verimini düşürebilir." },
    { criterion: "Tutulma süresi", description: "Ürünün tambur içinde kalma süresidir.", importance: "Hedef nemin yakalanmasını belirler.", effect: "Yetersiz süre ürünü nemli bırakır." },
    { criterion: "Fan hattı", description: "Gaz akışını ve negatif basıncı yönetir.", importance: "Kurutma veriminin sahadaki karşılığıdır.", effect: "Zayıf hat kuruma hızını düşürür." },
    { criterion: "Siklon / filtre", description: "Tozlu gaz akışını temizler.", importance: "Emisyon ve ürün kaybını azaltır.", effect: "Yetersiz filtrasyon bakım yükü yaratır." },
    { criterion: "Brülör kapasitesi", description: "Gerekli ısı yükünü üretir.", importance: "Su uçurma yüküyle birlikte seçilmelidir.", effect: "Eksik kapasite proses dengesini bozar." },
  ],
  factorCardsTitle: "Kurutma Kararını Etkileyen Faktörler",
  factorCardsDescription:
    "Kurutma projelerinde ekipman seçimi yalnız geometriyle değil, ürün ve saha davranışıyla birlikte şekillenir.",
  factorCards: [
    { title: "Ürün yoğunluğu", description: "Hacimsel doluluk ve lifter davranışını değiştirir." },
    { title: "Yapışkanlık", description: "İç kanat seçimi ve sıcaklık kontrolünü daha kritik hale getirir." },
    { title: "GiriÅŸ nemi", description: "Residence time ve enerji yükünü doğrudan artırır." },
    { title: "Hedef çıkış nemi", description: "Son ürün standardı için daha uzun temas süresi gerekebilir." },
    { title: "Toz yükü", description: "Siklon ve filtre hattının boyutunu etkiler." },
    { title: "Saha yerleÅŸimi", description: "Tambur uzunluğu ve bakım erişimi fiziksel alana uymalıdır." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Kurutma tamburu, gaz hattı, toz toplama ve saha uygulamasını tamamlayan teknik sayfaları aşağıda bir arada bulabilirsiniz.",
  relatedLinks: [
    { title: "Kurutma Tamburu İmalatı", description: "Kurutma tamburu ve hat mühendisliği hizmet yaklaşımını inceleyin.", href: "/hizmetler/kurutma-tamburu-imalati" },
    { title: "Tambur Sistemleri", description: "Kurutma, granülasyon ve kompost tamburu ailelerini görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
    { title: "Kurutma Tamburları", description: "Ürün detay sayfası üzerinden kapasite ve ekipman yaklaşımını değerlendirin.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    { title: "Kurutma Tamburu Hesabı", description: "Programlar alanındaki ilgili hesaplama yaklaşımına gidin.", href: "/programlar/kurutma-tamburu-hesabi" },
    { title: "Silis Kumu Kurutma Tesisi", description: "Mineral ürünlerde kurutma ve toz toplama kurgusunu görün.", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
    { title: "Ã‡amur Kurutma Tesisi", description: "Yüksek nemli akışlarda kurutma ve koku kontrolü yaklaşımını inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
  ],
};

const screwData: BlogTechnicalArticleData = {
  requiredDataTitle: "Helezon İçin Gerekli Teknik Veriler",
  requiredDataDescription:
    "Helezon kapasitesi yalnız çapla belirlenmez; ürün yoğunluğu, eğim, hatve ve motor yükü birlikte değerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite hedefi", purpose: "Saatlik taşıma ihtiyacını tanımlar.", request: "Ã–rn. 12 ton/saat" },
    { label: "Ürün yoğunluğu", purpose: "Hacimsel doluluğu ve gerçek tonajı belirler.", request: "Ã–rn. 0,75 t/m3" },
    { label: "Hat uzunluÄŸu", purpose: "Sürtünme ve motor yükünü etkiler.", request: "Ã–rn. 8 metre" },
    { label: "Eğim açısı", purpose: "Kapasite kaybı ve geri kaçma riskini tanımlar.", request: "Ã–rn. 15Â°" },
    { label: "Hatve", purpose: "Ürünün bir devirde ilerleme miktarını belirler.", request: "Standart / artırılmış" },
    { label: "Devir", purpose: "Kapasite ile aşınma dengesini kurar.", request: "Ön rpm aralığı" },
    { label: "Doluluk oranı", purpose: "Kesitin ne kadarının güvenli taşımaya ayrıldığını gösterir.", request: "%15 - %45 aralığı" },
    { label: "Servis rejimi", purpose: "Motor ve redüktör seçimine güvenlik payı ekler.", request: "Sürekli / vardiyalı çalışma" },
  ],
  exampleTitle: "Örnek Ön Hesap Mantığı",
  exampleDescription:
    "Aşağıdaki örnek, çap-hatve-devir ve ürün yoğunluğu arasındaki ilişkiyi temel tasarım mantığıyla özetler.",
  exampleRows: [
    { label: "Ürün yoğunluğu", value: "0,75 t/m3", comment: "Hacimsel hesabın başlangıcı" },
    { label: "Kapasite", value: "12 ton/saat", comment: "Hedef taşıma debisi" },
    { label: "Helezon çapı", value: "323 mm", comment: "Ön seçim yaklaşımı" },
    { label: "Hatve", value: "323 mm", comment: "Standart tam hatve örneği" },
    { label: "Devir", value: "80 rpm", comment: "Güvenli hız yaklaşımı" },
    { label: "Motor gücü", value: "Ã–n hesap gerekir", comment: "Hat uzunluğu ve eğime göre netleşir" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Helezon hatlarında kapasite, motor gücü ve servis güvenliği aynı teknik çerçevede okunmalıdır.",
  decisionTableRows: [
    { criterion: "Ã‡ap", description: "Taşınan hacmin ana belirleyicisidir.", importance: "Kapasite güvenliğini belirler.", effect: "Küçük çap dar boğaz oluşturur." },
    { criterion: "Hatve", description: "Ürünün bir turda ne kadar ilerleyeceğini tanımlar.", importance: "Kapasite ve dozajlama dengesini etkiler.", effect: "Yanlış hatve düzensiz akış yaratır." },
    { criterion: "Devir", description: "Hacimsel taşıma hızını belirler.", importance: "Kapasite ve aşınma arasında denge kurar.", effect: "Aşırı devir tozlaşma ve titreşim doğurur." },
    { criterion: "EÄŸim", description: "Taşıma ekseninin yükselme oranıdır.", importance: "Etkin kapasiteyi düşürür.", effect: "Yüksek eğimde geriye kaçma artar." },
    { criterion: "Tork", description: "Motor ve redüktör yükünü tanımlar.", importance: "Tahrik seçiminin güvenliğini belirler.", effect: "Eksik tork kalkış sorununa yol açar." },
    { criterion: "Aşınma", description: "Ürün karakterine bağlı mekanik yıpranmadır.", importance: "Malzeme seçimini etkiler.", effect: "Yanlış malzeme bakım süresini kısaltır." },
  ],
  factorCardsTitle: "Helezon Performansını Etkileyen Faktörler",
  factorCardsDescription:
    "Taşıma hattının sahada kararlı çalışması için aşağıdaki başlıklar birlikte değerlendirilmelidir.",
  factorCards: [
    { title: "Ürün akışkanlığı", description: "Serbest akışlı ve yapışkan ürünlerde doluluk yaklaşımı değişir." },
    { title: "EÄŸim etkisi", description: "Yükselme arttıkça efektif kapasite düşer." },
    { title: "Nem", description: "Yapışma ve temizlenebilirlik gereksinimini büyütür." },
    { title: "Sürekli çalışma", description: "Servis faktörü ve motor güvenlik payını etkiler." },
    { title: "Aşındırıcılık", description: "Yaprak ve gövde malzeme seçimini belirler." },
    { title: "Besleme düzeni", description: "Düzensiz besleme tork dalgalanması ve kapasite kaybı yaratır." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Helezon ve taşıma hatlarını tamamlayan ekipman, program ve teknik sayfalara aşağıdan ulaşabilirsiniz.",
  relatedLinks: [
    { title: "Vidalı Helezonlar", description: "Helezon ürün ailesini makina kategorisinde inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
    { title: "Taşıma Ekipmanları", description: "Bant konveyör, elevatör ve zincirli hatlarla birlikte görün.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "Helezon Hesap Programı", description: "Kapasite ve ön mekanik seçim için program sayfasına gidin.", href: "/programlar/helezon-kapasite-hesabi" },
    { title: "Konveyör Hesabı", description: "Taşıma sistemlerini konveyör perspektifiyle karşılaştırın.", href: "/programlar/konveyor-kapasite-hesabi" },
    { title: "Bantlı Konveyörler", description: "Alternatif taşıma omurgalarını makina kategorisinde inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
    { title: "Zincirli Elevatörler", description: "Dikey taşıma hatları için ilgili ekipman ailesine bakın.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
  ],
};

const conveyorData: BlogTechnicalArticleData = {
  requiredDataTitle: "Konveyör Seçimi İçin Gerekli Veriler",
  requiredDataDescription:
    "Bantlı ve sürekli taşıma sistemlerinde hız, kesit, eğim ve ürün yoğunluğu birlikte değerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite", purpose: "Saatlik taşıma ihtiyacını belirler.", request: "Ã–rn. 40 ton/saat" },
    { label: "Ürün yoğunluğu", purpose: "Kesit hesabını ve yük miktarını etkiler.", request: "Ã–rn. 1,2 t/m3" },
    { label: "Bant geniÅŸliÄŸi", purpose: "Taşınacak malzeme kesitini tanımlar.", request: "Ön seçim aralığı" },
    { label: "Bant hızı", purpose: "Kapasite ve ürün stabilitesini etkiler.", request: "Ön m/sn yaklaşımı" },
    { label: "Taşıma açısı", purpose: "Geri kaçma ve kapasite kaybını tanımlar.", request: "Ã–rn. 18Â°" },
    { label: "Hat boyu", purpose: "Motor yükü ve gerdirme ihtiyacını belirler.", request: "Ã–rn. 22 metre" },
    { label: "Besleme ÅŸekli", purpose: "Yük dağılımını ve şasi yükünü etkiler.", request: "Merkez / tek taraf" },
    { label: "Çalışma rejimi", purpose: "Motor ve rulman güvenlik payını etkiler.", request: "Sürekli / partili" },
  ],
  exampleTitle: "Örnek Ön Seçim Yaklaşımı",
  exampleDescription:
    "Bantlı taşıma hatlarında kapasite ve bant hızı birlikte okunur; sadece tonaj verisi güvenli seçim için yeterli değildir.",
  exampleRows: [
    { label: "Kapasite", value: "40 ton/saat", comment: "Net taşıma hedefi" },
    { label: "Ürün yoğunluğu", value: "1,2 t/m3", comment: "Kesit hesabı için ana veri" },
    { label: "Bant geniÅŸliÄŸi", value: "650 mm", comment: "Ön seçim yaklaşımı" },
    { label: "Bant hızı", value: "1,4 m/sn", comment: "Güvenli akış aralığı" },
    { label: "Taşıma açısı", value: "18Â°", comment: "Geri kaçma kontrolü gerekir" },
    { label: "Motor gücü", value: "Hat boyuna göre netleşir", comment: "Sürtünme ve yük dağılımı ile okunur" },
  ],
  decisionTableTitle: "Konveyör Karar Matrisi",
  decisionTableDescription:
    "Konveyör hatlarında kapasite kadar ürün davranışı, yükleme düzeni ve uzunluk da belirleyicidir.",
  decisionTableRows: [
    { criterion: "Bant geniÅŸliÄŸi", description: "Kesit alanını belirler.", importance: "Kapasite için temel girdidir.", effect: "Yetersiz seçilirse taşma riski oluşur." },
    { criterion: "Bant hızı", description: "Malzemenin hareket hızıdır.", importance: "Kapasite ve ürün stabilitesini etkiler.", effect: "Aşırı hız savrulma yaratabilir." },
    { criterion: "Taşıma açısı", description: "Yükselme oranını tanımlar.", importance: "Kapasite kaybı ve bant seçimini etkiler.", effect: "Yüksek açıda geri kaçma olur." },
    { criterion: "Hat boyu", description: "Toplam taşıma mesafesidir.", importance: "Motor ve gerdirme ihtiyacını büyütür.", effect: "Uzun hatlarda enerji artar." },
    { criterion: "Yükleme düzeni", description: "Malzemenin banda giriş biçimidir.", importance: "Yük dağılımını etkiler.", effect: "Yanlış yükleme bant ömrünü düşürür." },
    { criterion: "Bakım erişimi", description: "Rulman, tambur ve şase servis imkanlarıdır.", importance: "Uzun vadeli işletme sürekliliği sağlar.", effect: "Zor erişim plansız duruşları artırır." },
  ],
  factorCardsTitle: "Konveyör Seçimini Etkileyen Faktörler",
  factorCardsDescription:
    "Taşıma hattının güvenli ve dengeli çalışması için ekipman seçiminde aşağıdaki başlıklar öne çıkar.",
  factorCards: [
    { title: "Ürün akışı", description: "Dökülme ve savrulma riski bant hızını etkiler." },
    { title: "Yükleme noktası", description: "Şase yükü ve bant ömrü üzerinde belirleyicidir." },
    { title: "Hat uzunluÄŸu", description: "Motor gücü ve gerdirme ihtiyacını artırır." },
    { title: "EÄŸim", description: "Kapalı taşıma veya cleat ihtiyacını gündeme getirir." },
    { title: "Toz oluÅŸumu", description: "Kapama ve filtreleme ihtiyaçlarını artırır." },
    { title: "Servis koÅŸulu", description: "Ağır hizmet uygulamalarında daha güçlü omurga gerekir." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Konveyör kapasitesi, taşıma hatları ve tamamlayıcı ekipman ailelerini aşağıdaki sayfalardan inceleyebilirsiniz.",
  relatedLinks: [
    { title: "Bantlı Konveyörler", description: "Bantlı taşıma ürün ailesini makina kategorisinde görün.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
    { title: "Taşıma Ekipmanları", description: "Konveyör, helezon ve elevatör sistemlerini birlikte değerlendirin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "Konveyör Hesap Programı", description: "Ön seçim ve kapasite yaklaşımı için program alanına gidin.", href: "/programlar/konveyor-kapasite-hesabi" },
    { title: "Helezon Hesap Programı", description: "Alternatif taşıma omurgasını helezon perspektifiyle görün.", href: "/programlar/helezon-kapasite-hesabi" },
    { title: "Zincirli Elevatörler", description: "Dikey taşıma çözümlerini ilgili makina grubunda inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
    { title: "İletişim", description: "Hat seçimi için teknik değerlendirme talep edin.", href: "/iletisim" },
  ],
};

const fertilizerData: BlogTechnicalArticleData = {
  requiredDataTitle: "Gübre Tesisi İçin Gerekli Veriler",
  requiredDataDescription:
    "Gübre yatırımlarında ürün formu, kapasite ve proses sırası aynı dosyada ele alınmalıdır.",
  requiredDataRows: [
    { label: "Ürün tipi", purpose: "Toz, granül veya sıvı hat mimarisini belirler.", request: "NPK / organomineral / granül" },
    { label: "Kapasite", purpose: "Tüm makine omurgasının ölçeğini belirler.", request: "Ã–rn. 5 ton/saat" },
    { label: "Hammadde yapısı", purpose: "Dozajlama ve karıştırma sistemini etkiler.", request: "Toz / nemli / lifli" },
    { label: "Nem seviyesi", purpose: "Kurutma ihtiyacını ve residence time yaklaşımını etkiler.", request: "GiriÅŸ ve hedef nem" },
    { label: "Granül boyutu", purpose: "Eleme ve kaplama kurgusunu belirler.", request: "Ã–rn. 2-4 mm" },
    { label: "Kurutma ihtiyaçı", purpose: "Tambur ve enerji modelini tanımlar.", request: "Var / yok" },
    { label: "Paketleme tipi", purpose: "Torbalama, big bag veya dökme çıkışı belirler.", request: "25 kg / 50 kg / big bag" },
    { label: "Çalışma rejimi", purpose: "Vardiya ve stok planını etkiler.", request: "Ã–rn. 2 vardiya" },
  ],
  exampleTitle: "Örnek Süreç Akışı",
  exampleDescription:
    "Gübre tesislerinde teknik değerlendirme, yalnız tek makine değil birbirini tamamlayan proses adımları üzerinden yapılmalıdır.",
  exampleRows: [
    { label: "Dozajlama", value: "Hammadde besleme", comment: "Reçete doğruluğunu başlatır" },
    { label: "Karıştırma", value: "Homojenizasyon", comment: "Ürün standardını belirler" },
    { label: "Granülasyon", value: "Åžekillendirme", comment: "Granül kalitesinin ana aşamasıdır" },
    { label: "Kurutma", value: "Nem düşürme", comment: "Dayanım ve depolama davranışını etkiler" },
    { label: "Eleme", value: "Sınıflandırma", comment: "Satılabilir fraksiyonu ayırır" },
    { label: "Paketleme", value: "Ticari çıkış", comment: "Son ürün sevkiyatını hazırlar" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Gübre hatlarında ekipman grupları birbirini besleyen tek bir proses omurgası olarak düşünülmelidir.",
  decisionTableRows: [
    { criterion: "Dozajlama", description: "Hammadde akışını reçeteye göre yönetir.", importance: "Ürün standardının temelidir.", effect: "Hassasiyet düşükse kalite dalgalanır." },
    { criterion: "Granülasyon", description: "Ürüne form kazandırır.", importance: "Granül dayanımını belirler.", effect: "Yanlış seçim kurutma yükünü artırır." },
    { criterion: "Kurutma", description: "Fazla nemi kontrollü biçimde uzaklaştırır.", importance: "Depolama ve paketleme davranışını etkiler.", effect: "Eksik kurutma ürün akışını bozar." },
    { criterion: "Eleme", description: "Uygun fraksiyonu ayırır.", importance: "Ticari standart için kritiktir.", effect: "Zayıf eleme geri dönüş oranını büyütür." },
    { criterion: "Kaplama", description: "Yüzey kalitesi ve ürün kararlılığını iyileştirir.", importance: "Premium son ürün hedeflerinde önemlidir.", effect: "Eksik kaplama tozlanmayı artırır." },
    { criterion: "Paketleme", description: "Son ürünün satışa hazır hale gelmesini sağlar.", importance: "Tesis ritmini son aÅŸamada belirler.", effect: "Zayıf hat tüm üretimi yavaşlatır." },
  ],
  factorCardsTitle: "Yatırımı Etkileyen Faktörler",
  factorCardsDescription:
    "Gübre tesisi tasarımında proses kadar ürün tipi ve operasyon modeli de belirleyicidir.",
  factorCards: [
    { title: "Ürün formu", description: "Granül, toz ve sıvı hatlar aynı omurgayla kurulmaz." },
    { title: "Hammadde davranışı", description: "Nemli veya yapışkan akışlar farklı dozajlama gerektirir." },
    { title: "Kurutma ihtiyaçı", description: "Enerji modeli ve tambur seçimini doğrudan etkiler." },
    { title: "Paketleme stratejisi", description: "Ticari çıkış şekli tüm hat ritmini belirler." },
    { title: "Saha akışı", description: "Makine yerleşimi bakım ve lojistikle uyumlu olmalıdır." },
    { title: "Ürün standardı", description: "Granül dayanımı ve nem kararlılığı son kullanıcıyı etkiler." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Gübre tesisi yatırımı, ekipman omurgası ve ilgili proses içeriklerini aşağıdaki sayfalardan birlikte inceleyebilirsiniz.",
  relatedLinks: [
    { title: "Gübre Tesisi Kurulumu", description: "Anahtar teslim hat yaklaşımımızı hizmet sayfasında görün.", href: "/hizmetler/gubre-tesisi-kurulumu" },
    { title: "Granül Gübre Üretim Tesisi", description: "Granül üretim hatları için özel hizmet sayfasına gidin.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    { title: "Organomineral Gübre Tesisi", description: "Organomineral projeleri için ilgili hizmet alanını inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
    { title: "Paketleme ve Dolum Sistemleri", description: "Son ürün hazırlama ekipman ailelerini makina tarafında görün.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Tambur Sistemleri", description: "Granülasyon, kurutma ve soğutma tamburu ailelerini inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    { title: "İletişim", description: "Projenize özel teknik değerlendirme ve teklif talep edin.", href: "/iletisim" },
  ],
};

const compostData: BlogTechnicalArticleData = {
  requiredDataTitle: "Kompost ve Organik Atık İçin Gerekli Veriler",
  requiredDataDescription:
    "Kompost ve organik atık projelerinde atık karakteri, nem dengesi ve çevresel kontrol en baştan birlikte düşünülmelidir.",
  requiredDataRows: [
    { label: "Atık türü", purpose: "Hangi proses ve makine grubunun kullanılacağını belirler.", request: "Evsel / hayvansal / tarımsal" },
    { label: "Günlük tonaj", purpose: "Kabul alanı ve ana ekipman kapasitesini tanımlar.", request: "Örn. 40 ton/gün" },
    { label: "GiriÅŸ nemi", purpose: "Karıştırma ve kurutma ihtiyacını belirler.", request: "Ã–rn. %55" },
    { label: "Hedef ürün nemi", purpose: "Son ürün kararlılığını ve eleme davranışını etkiler.", request: "Ã–rn. %25-%35" },
    { label: "Olgunlaştırma süresi", purpose: "Saha hacmi ve çevrim planını belirler.", request: "Örn. 21-45 gün" },
    { label: "Koku kontrolü", purpose: "Çevresel uyum ve hava hattı gereksinimini etkiler.", request: "Biyofiltre / fan hattı" },
    { label: "Yabancı madde oranı", purpose: "Ön ayırma ve parçalama ihtiyacını tanımlar.", request: "Plastik / cam / metal oranı" },
    { label: "Son ürün hedefi", purpose: "Eleme, paketleme ve stok yaklaşımını belirler.", request: "Dökme / torbalı ürün" },
  ],
  exampleTitle: "Örnek Süreç Değerlendirmesi",
  exampleDescription:
    "Kompost ve organik atık hatlarında süreç, yalnız ayrıştırma değil nem yönetimi ve olgunlaşma disiplini üzerinden okunmalıdır.",
  exampleRows: [
    { label: "Kabul", value: "Atık giriş kontrolü", comment: "Reçete kalitesinin başlangıcıdır" },
    { label: "Ön ayırma", value: "Yabancı madde çıkarma", comment: "Makine güvenliğini korur" },
    { label: "Parçalama / karıştırma", value: "Homojenizasyon", comment: "Biyolojik aktiviteyi dengeler" },
    { label: "Olgunlaştırma", value: "Süreç takibi", comment: "Sıcaklık ve nem kontrolü gerekir" },
    { label: "Eleme", value: "Son ürün hazırlığı", comment: "Satılabilir fraksiyonu ayırır" },
    { label: "Paketleme / stok", value: "Ticari çıkış", comment: "Operasyon modeline göre belirlenir" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Organik atık projelerinde biyolojik süreç, mekanik hazırlık ve çevresel kontrol aynı karara bağlıdır.",
  decisionTableRows: [
    { criterion: "Ön ayırma", description: "İstenmeyen fraksiyonları ayırır.", importance: "Makine güvenliğini korur.", effect: "Eksik ayırma bakım yükünü artırır." },
    { criterion: "Parçalama", description: "Malzemeyi homojenize eder.", importance: "Biyolojik aktiviteye hazırlık sağlar.", effect: "Aşırı parçalama ince fraksiyonu büyütür." },
    { criterion: "Nem yönetimi", description: "Süreçteki su dengesini kontrol eder.", importance: "Olgunlaşma hızını belirler.", effect: "Yanlış nem koku ve kalite sorunu yaratır." },
    { criterion: "Olgunlaştırma", description: "Kompostun kararlı hale gelmesini sağlar.", importance: "Son ürün kalitesinin temelidir.", effect: "Kısa süre ürün stabilitesini düşürür." },
    { criterion: "Eleme", description: "Fraksiyon ayrımı yapar.", importance: "Ticari ürün hazırlığını belirler.", effect: "Yetersiz eleme geri devir oranını artırır." },
    { criterion: "Koku kontrolü", description: "Fan ve filtre hattını yönetir.", importance: "Çevresel uyum için kritiktir.", effect: "Eksik kontrol saha kabulünü zorlaştırır." },
  ],
  factorCardsTitle: "Süreci Etkileyen Faktörler",
  factorCardsDescription:
    "Kompost ve organik atık hatlarında prosesin kararlı ilerlemesi için aşağıdaki başlıklar birlikte ele alınmalıdır.",
  factorCards: [
    { title: "Atık bileşimi", description: "Karbon/azot dengesi süreç hızını etkiler." },
    { title: "Nem seviyesi", description: "Biyolojik aktivite ve kurutma ihtiyaçı üzerinde belirleyicidir." },
    { title: "Yabancı madde", description: "Ön ayırma ve parçalayıcı seçimini şekillendirir." },
    { title: "Koku kontrolü", description: "Saha kabulü ve çevresel uyum açısından kritiktir." },
    { title: "Olgunlaşma süresi", description: "Alan ihtiyaçı ve stok planını büyütür." },
    { title: "Son ürün standardı", description: "Eleme ve paketleme ihtiyacını belirler." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Kompost, organik atık ve tamamlayıcı makina ailelerini aşağıdaki sayfalardan birlikte değerlendirebilirsiniz.",
  relatedLinks: [
    { title: "Kompost Tesisi Kurulumu", description: "Kompost projeleri için hizmet sayfamızı inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
    { title: "Kompost ve Organik Atık Tesisleri", description: "Sektör sayfasında uygulama alanlarını görün.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    { title: "Kompost Tamburu", description: "Tamburlu ön fermentasyon için ilgili ekipman sayfasına gidin.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
    { title: "Trommel Elekler", description: "Son ürün eleme ve fraksiyon ayırma ekipmanlarını inceleyin.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    { title: "Organik Atık Tesisi", description: "Atık hazırlama ve değerlendirme mantığını blog tarafında okuyun.", href: "/kutuphane/blog/organik-atik-tesisi" },
    { title: "İletişim", description: "Saha ve kapasite verilerinizle teknik görüşme talep edin.", href: "/iletisim" },
  ],
};

const biogasData: BlogTechnicalArticleData = {
  requiredDataTitle: "Biyogaz Ön İşlem İçin Gerekli Veriler",
  requiredDataDescription:
    "Biyogaz ön işlem hatlarında atık karakteri, besleme rejimi ve digestat yönetimi birlikte değerlendirilmelidir.",
  requiredDataRows: [
    { label: "Atık türü", purpose: "Parçalama ve ayırma ihtiyacını belirler.", request: "Gıda / tarımsal / hayvansal" },
    { label: "Tonaj", purpose: "Besleme omurgasının ölçeğini tanımlar.", request: "Örn. 30 ton/gün" },
    { label: "Kuru madde", purpose: "Pompalama ve karıştırma davranışını etkiler.", request: "Ã–rn. %18 KM" },
    { label: "Organik madde", purpose: "Gaz üretim potansiyelini okumayı sağlar.", request: "VS / OM oranı" },
    { label: "Besleme tipi", purpose: "Helezon, bunker veya pompa seçimini etkiler.", request: "Kesikli / sürekli" },
    { label: "Yabancı madde", purpose: "Ön ayırma gereksinimini artırır.", request: "Plastik / metal / taÅŸ" },
    { label: "Digestat miktarı", purpose: "Sonraki yönetim ve susuzlaştırma ihtiyacını belirler.", request: "Tahmini günlük çıkış" },
    { label: "Koku ve hijyen", purpose: "Saha yerleşimi ve çevresel kontrolü etkiler.", request: "Fan / filtre ihtiyaçı" },
  ],
  exampleTitle: "Örnek Süreç Akışı",
  exampleDescription:
    "Biyogaz ön işlem hattı; kabulden digestat yönetimine kadar mekanik ve biyolojik sürecin birlikte okunduğu bir hazırlık omurgasıdır.",
  exampleRows: [
    { label: "Kabul", value: "Atık giriş kontrolü", comment: "Hattın istikrarlı çalışması için gereklidir" },
    { label: "Parçalama", value: "Boyut küçültme", comment: "Reaktör beslemesini kolaylaştırır" },
    { label: "Ayırma", value: "Yabancı madde çıkarma", comment: "Makine ve reaktör güvenliğini korur" },
    { label: "Besleme", value: "Dengeli akış", comment: "Gaz üretim stabilitesini etkiler" },
    { label: "Gaz yönetimi", value: "Reaktör sonrası kontrol", comment: "Enerji kalitesini destekler" },
    { label: "Digestat", value: "Çıkış yönetimi", comment: "Son ürün veya bertaraf yaklaşımını belirler" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Biyogaz ön işlem hatlarında hazırlık kalitesi, reaktör veriminin sahadaki temel belirleyicisidir.",
  decisionTableRows: [
    { criterion: "Ön ayırma", description: "Yabancı maddeleri akıştan uzaklaştırır.", importance: "Reaktör ve ekipman güvenliğini korur.", effect: "Eksik ayırma arıza riskini artırır." },
    { criterion: "Parçalama", description: "Parçacık boyutunu uygun hale getirir.", importance: "Karıştırma ve pompajı kolaylaştırır.", effect: "Yanlış boyut verimi düşürür." },
    { criterion: "Besleme sistemi", description: "Malzemeyi dengeli reaktöre taşır.", importance: "Gaz üretim istikrarını etkiler.", effect: "Düzensiz besleme dalgalanma yaratır." },
    { criterion: "Karıştırma", description: "Farklı akışları homojenize eder.", importance: "Organik yük dengesini sağlar.", effect: "Yetersiz karışım reaktör performansını düşürür." },
    { criterion: "Digestat yönetimi", description: "Çıkış malzemesinin ayrılması ve taşınmasını kapsar.", importance: "Tesis çevrimini tamamlar.", effect: "İhmal edilirse depolama ve koku sorunu büyür." },
    { criterion: "Hijyen / koku", description: "Çevresel kontrol omurgasını ifade eder.", importance: "Saha kabulü için kritiktir.", effect: "Eksik kontrol operasyonu zorlaştırır." },
  ],
  factorCardsTitle: "Biyogaz Hattını Etkileyen Faktörler",
  factorCardsDescription:
    "Ön işlem kalitesi, reaktör performansı ve digestat yönetimi aynı teknik dosyada ele alınmalıdır.",
  factorCards: [
    { title: "Atık heterojenliği", description: "Besleme ve ayırma ekipmanını doğrudan etkiler." },
    { title: "Kuru madde", description: "Pompa, helezon ve karıştırıcı seçimini belirler." },
    { title: "Yabancı madde", description: "Parçalayıcı ve ayırıcı ihtiyacını büyütür." },
    { title: "Besleme ritmi", description: "Reaktör istikrarı için dengeli akış gerekir." },
    { title: "Digestat çıkışı", description: "Ayrıştırma ve kompostlaştırma kararını etkiler." },
    { title: "Ã‡evresel kontrol", description: "Koku ve hijyen yönetimi saha operasyonunu belirler." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Biyogaz, organik atık ve digestat yönetimini tamamlayan sayfaları aşağıdan inceleyebilirsiniz.",
  relatedLinks: [
    { title: "Enerji ve Biyogaz Sistemleri", description: "Sektör sayfasında biyogaz uygulamalarını görün.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
    { title: "Organik Atık Tesisi", description: "Biyogaz öncesi hazırlık akışını blog içeriğinde inceleyin.", href: "/kutuphane/blog/organik-atik-tesisi" },
    { title: "Kompost Tesisi Kurulumu", description: "Digestat ve organik çıkışların kompost tarafını değerlendirin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
    { title: "Taşıma Ekipmanları", description: "Besleme ve dozaj omurgasında kullanılan ekipman ailelerini görün.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "Bunker ve Besleme Sistemleri", description: "Atık kabul ve besleme noktalarını makina ailesinde inceleyin.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "İletişim", description: "Biyogaz ön işlem hattı için teknik değerlendirme talep edin.", href: "/iletisim" },
  ],
};

const liquidData: BlogTechnicalArticleData = {
  requiredDataTitle: "Sıvı Gübre ve Kimyasal Proses İçin Gerekli Veriler",
  requiredDataDescription:
    "Reaktör, tank ve dozaj sistemlerinde ürün formülü, viskozite ve hat güvenliği birlikte değerlendirilmelidir.",
  requiredDataRows: [
    { label: "Ürün formülü", purpose: "Reaktör ve karıştırma yaklaşımını belirler.", request: "NPK / organomineral / kimyasal karışım" },
    { label: "Kapasite", purpose: "Tank hacmi ve dolum hattı ölçeğini etkiler.", request: "Ã–rn. 5 m3/saat" },
    { label: "Viskozite", purpose: "Karıştırıcı ve pompa seçiminde belirleyicidir.", request: "Düşük / orta / yüksek" },
    { label: "Çözünme süresi", purpose: "Reaktör veya tankta tutulma süresini tanımlar.", request: "Dakika / saat" },
    { label: "Filtrasyon ihtiyaçı", purpose: "Dolum öncesi ürün temizliğini etkiler.", request: "Torba / kartuÅŸ / inline" },
    { label: "Dolum tipi", purpose: "Şişe, IBC veya tanker çıkışını belirler.", request: "Ambalaj tipi" },
    { label: "Malzeme uyumu", purpose: "Tank gövdesi ve hat malzemesini belirler.", request: "304 / 316 / kaplamalı" },
    { label: "Güvenlik", purpose: "Asit-baz veya özel kimyasallarda proses emniyetini tanımlar.", request: "ATEX / kimyasal uyum" },
  ],
  exampleTitle: "Örnek Süreç Değerlendirmesi",
  exampleDescription:
    "Sıvı gübre ve kimyasal proses hatlarında ürün hazırlama, filtrasyon ve dolum aynı proses disipliniyle ele alınmalıdır.",
  exampleRows: [
    { label: "Çözündürme", value: "Hammadde hazırlığı", comment: "Formülün ilk kararlı hale geldiği aşama" },
    { label: "Karıştırma", value: "Homojenizasyon", comment: "Ürün standardını korur" },
    { label: "Reaksiyon", value: "Kimyasal denge", comment: "Süre ve sıcaklık kontrolü gerekir" },
    { label: "Filtrasyon", value: "Partikül temizliği", comment: "Dolum kalitesini yükseltir" },
    { label: "Stoklama", value: "Ara tank yönetimi", comment: "Hat sürekliliğini destekler" },
    { label: "Dolum", value: "Son ürün çıkışı", comment: "Ticari sevkiyata hazırlar" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Sıvı üretim hatlarında tank, karıştırma, filtrasyon ve dolum kararları birbiriyle bağlantılıdır.",
  decisionTableRows: [
    { criterion: "Reaktör hacmi", description: "Ürünün reaksiyon veya çözünme hacmidir.", importance: "Hat kapasitesini belirler.", effect: "Yetersiz hacim bekleme süresini bozar." },
    { criterion: "Karıştırma tipi", description: "Homojenizasyon biçimini tanımlar.", importance: "Ürün standardı için kritiktir.", effect: "Yanlış karıştırma çökelmeye yol açar." },
    { criterion: "Malzeme seçimi", description: "Tank ve hat gövde malzemesidir.", importance: "Kimyasal uyumu belirler.", effect: "Yanlış malzeme korozyon doğurur." },
    { criterion: "Filtrasyon", description: "Dolum öncesi partikül kontrolüdür.", importance: "Son ürün kalitesini etkiler.", effect: "Yetersiz filtreleme dolum sorununa neden olur." },
    { criterion: "Dozajlama", description: "Katkı akışlarının hassas yönetimidir.", importance: "Formül doğruluğunu korur.", effect: "Hatalı dozaj ürün standardını bozar." },
    { criterion: "Dolum hattı", description: "Ambalaj çıkışını yönetir.", importance: "Ticari akışı belirler.", effect: "Zayıf dolum tüm hattı yavaşlatır." },
  ],
  factorCardsTitle: "Prosesi Etkileyen Faktörler",
  factorCardsDescription:
    "Sıvı gübre ve kimyasal hatlarda ürün davranışı kadar malzeme uyumu ve güvenlik de belirleyicidir.",
  factorCards: [
    { title: "Formül yoğunluğu", description: "Karıştırma ve pompa seçimini etkiler." },
    { title: "Kimyasal uyum", description: "Tank malzemesi ve conta seçimini belirler." },
    { title: "Filtrasyon ihtiyaçı", description: "Dolum kalitesi ve hat temizliÄŸini etkiler." },
    { title: "Sıcaklık", description: "Çözünme ve reaksiyon hızını değiştirir." },
    { title: "Ambalaj tipi", description: "Dolum hattı geometrisini belirler." },
    { title: "Bakım temizliği", description: "CIP veya manuel temizlik kurgusunu etkiler." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Sıvı gübre, kimyasal proses ve reaktör-tank sistemleriyle ilgili teknik sayfaları aşağıda bulabilirsiniz.",
  relatedLinks: [
    { title: "Sıvı Gübre Üretim Tesisi", description: "Sıvı üretim hatları için hizmet sayfamızı inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    { title: "Reaktörler ve Tanklar", description: "Makina kategorisinde proses tankı ve reaktör ailelerini görün.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
    { title: "Kimya ve Proses Endüstrisi", description: "Sektör sayfasında uygulama alanlarını değerlendirin.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    { title: "Paketleme ve Dolum Sistemleri", description: "Dolum ve etiketleme ekipmanlarını makina tarafında inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Organomineral Gübre Tesisi", description: "Sıvı ve hibrit proses kurguları için ilgili hizmeti görün.", href: "/hizmetler/organomineral-gubre-tesisi" },
    { title: "İletişim", description: "Reaktör ve hat kurgusu için teknik görüşme talep edin.", href: "/iletisim" },
  ],
};

const defaultTechnicalData: BlogTechnicalArticleData = {
  requiredDataTitle: "Konu İçin Gerekli Teknik Veriler",
  requiredDataDescription:
    "Makale konusu hangi ekipman veya prosesi ele alırsa alsın, sağlıklı karar için kapasite, ürün davranışı ve saha koşulları birlikte değerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite", purpose: "Ekipman ölçeğini belirler.", request: "Saatlik veya günlük hedef" },
    { label: "Ürün tipi", purpose: "Ekipman ve proses yaklaşımını etkiler.", request: "Toz / granül / sıvı" },
    { label: "YoÄŸunluk", purpose: "Hacimsel davranışı tanımlar.", request: "Yığın veya proses yoğunluğu" },
    { label: "Nem / sıcaklık", purpose: "Enerji ve proses ihtiyacını etkiler.", request: "Mevcut ve hedef deÄŸerler" },
    { label: "Saha koÅŸulu", purpose: "Yerleşim ve bakım erişimini belirler.", request: "Alan ve çalışma düzeni" },
    { label: "Çalışma rejimi", purpose: "Motor, tank veya hat güvenliğini etkiler.", request: "Sürekli / vardiyalı çalışma" },
  ],
  exampleTitle: "Ã–rnek Teknik DeÄŸerlendirme",
  exampleDescription:
    "Aşağıdaki örnek satırlar, teknik teklif öncesinde hangi karar başlıklarının birlikte okunması gerektiğini gösterir.",
  exampleRows: [
    { label: "Kapasite", value: "Hedef debi", comment: "Hat ölçeğinin başlangıç noktası" },
    { label: "Ürün davranışı", value: "Akış / nem / yoğunluk", comment: "Makine seçimini etkiler" },
    { label: "Proses adımı", value: "Hazırlık / ana işlem / çıkış", comment: "Akış sırasını belirler" },
    { label: "Enerji", value: "Elektrik / ısı / gaz", comment: "İşletme modelini etkiler" },
    { label: "Saha", value: "Yerleşim / bakım", comment: "UygulanabilirliÄŸi doÄŸrular" },
    { label: "Çıkış standardı", value: "Son ürün beklentisi", comment: "Kalite hedefini belirler" },
  ],
  decisionTableTitle: "Karar Matrisi",
  decisionTableDescription:
    "Ekipman ve tesis seçiminde yalnız tek bir parametreye bakmak yerine tüm teknik çerçeve birlikte okunmalıdır.",
  decisionTableRows: [
    { criterion: "Kapasite", description: "Saatlik veya günlük hedef üretimdir.", importance: "Ekipman ölçeğini belirler.", effect: "Yanlış okunursa dar boğaz oluşur." },
    { criterion: "Ürün davranışı", description: "Akış, nem ve yoğunluk bilgisidir.", importance: "Doğru ekipmanı seçtirir.", effect: "Hatalı varsayım bakım yükünü artırır." },
    { criterion: "Enerji", description: "Elektrik veya ısıl yük yaklaşımıdır.", importance: "İşletme modelini etkiler.", effect: "Eksik güç performansı düşürür." },
    { criterion: "YerleÅŸim", description: "Sahanın fiziksel koşullarıdır.", importance: "Montaj ve servis için kritiktir.", effect: "Sıkışık yerleşim bakım zorluğu yaratır." },
  ],
  factorCardsTitle: "Teknik Kararı Etkileyen Faktörler",
  factorCardsDescription:
    "Proses ve ekipman kararları, ürün karakteri ile saha koşullarının kesişiminde şekillenir.",
  factorCards: [
    { title: "Kapasite hedefi", description: "Tüm ekipman omurgasının temelidir." },
    { title: "Ürün tipi", description: "Makine yaklaşımını doğrudan etkiler." },
    { title: "Saha düzeni", description: "Uygulanabilir ve servis edilebilir tasarım sağlar." },
    { title: "Enerji modeli", description: "İşletme maliyetini ve ekipman tercihini etkiler." },
  ],
  relatedLinksTitle: "İlgili Teknik İçerikler",
  relatedLinksDescription:
    "Konuyu tamamlayan teknik sayfalar, hizmetler ve ekipman aileleri aşağıda yer alır.",
  relatedLinks: [
    { title: "Hizmetler", description: "Proje ve proses çözümlerini hizmet tarafında inceleyin.", href: "/hizmetler" },
    { title: "Makinalar & Ekipman", description: "Ekipman ailelerini kategori bazında görün.", href: "/makinalar-ekipman" },
    { title: "Sektörler", description: "Uygulama alanlarını sektör bazında değerlendirin.", href: "/sektorler" },
    { title: "Programlar", description: "Hesaplama ve ön seçim araçlarına gidin.", href: "/programlar" },
    { title: "Blog / Makaleler", description: "Diğer teknik içeriklere blog merkezinden ulaşın.", href: "/kutuphane/blog" },
    { title: "İletişim", description: "Teknik görüşme ve teklif talebi için iletişime geçin.", href: "/iletisim" },
  ],
};

const slugFamilies: Record<string, BlogTechnicalArticleData> = {
  "kurutma-tamburu-kapasite-hesabi": dryingData,
  "kurutma-tamburu-cap-boy-hesabi": dryingData,
  "rotary-dryer-design": dryingData,
  "tambur-kurutucu-nasil-calisir": dryingData,
  "kurutma-tamburu-nasil-calisir": dryingData,
  "kurutma-tamburu-hesaplama": dryingData,
  "kurutma-tamburu-nasil-hesaplanir": dryingData,
  "endustriyel-kurutma-sistemleri": dryingData,
  "camur-kurutma-sistemleri": dryingData,
  "camur-kurutma-sistemi": dryingData,
  "kurutma-tamburu-fan-secimi": dryingData,
  "kurutma-tamburu-brulor-secimi": dryingData,
  "maden-kurutma-tamburu": dryingData,
  "kum-kurutma-tesisi": dryingData,
  "tavuk-gubresi-kurutma": dryingData,
  "digestat-kurutma": dryingData,

  "helezon-konveyor-kapasite-hesabi": screwData,
  "helezon-kapasite-hesabi": screwData,
  "helezyon-konveyor-kapasite-hesabi": screwData,
  "helezon-motor-gucu-hesabi": screwData,
  "egimli-helezon-hesabi": screwData,
  "vidali-konveyor-hesabi": screwData,
  "vidali-konveyor-tasarimi": screwData,

  "konveyor-kapasite-hesabi": conveyorData,
  "bant-konveyor-kapasite-hesabi": conveyorData,
  "kovali-elevator-kapasite-hesabi": conveyorData,
  "zincirli-konveyor-secimi": conveyorData,

  "organomineral-gubre-tesisi-maliyeti": fertilizerData,
  "granul-gubre-uretim-sureci": fertilizerData,
  "granul-gubre-uretim-tesisi-nasil-kurulur": fertilizerData,
  "organomineral-gubre-uretimi": fertilizerData,
  "npk-gubre-uretimi": fertilizerData,
  "gubre-tesisi-kurulumu": fertilizerData,
  "gubre-uretim-hatti-nasil-kurulur": fertilizerData,
  "gubre-uretim-hatti": fertilizerData,
  "organomineral-gubre-tesisi-nasil-kurulur": fertilizerData,
  "tambur-granulator-kapasite-hesabi": fertilizerData,
  "tambur-granulator-calisma-prensibi": fertilizerData,
  "sogutma-tamburu-kapasite-hesabi": fertilizerData,
  "kaplama-tamburu-kullanim-alanlari": fertilizerData,

  "kompost-tesisi-nasil-kurulur": compostData,
  "kompost-tesisi-kurulumu": compostData,
  "kompost-tesisi-kapasite-hesabi": compostData,
  "kompost-kurutma-sistemi": compostData,
  "buyukbas-hayvan-gubresi-kompost": compostData,
  "organik-atik-isleme-tesisi": compostData,
  "organik-atik-tesisi": compostData,
  "kompost-uretim-sureci": compostData,

  "biyogaz-on-islem-sistemleri": biogasData,
  "biyogaz-on-islem": biogasData,
  "biyogaz-tesisi-kapasite-hesabi": biogasData,

  "sivi-gubre-tesisi-nasil-kurulur": liquidData,
  "sivi-gubre-uretim-tesisi": liquidData,
  "reaktor-ve-tank-secimi": liquidData,
  "sivi-dolum-hatti-secimi": liquidData,
  "toz-toplama-sistemi-secimi": defaultTechnicalData,
};

export function getBlogTechnicalArticleData(slug?: string): BlogTechnicalArticleData {
  if (!slug) {
    return defaultTechnicalData;
  }

  return slugFamilies[slug] ?? defaultTechnicalData;
}

