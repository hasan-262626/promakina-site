import type { BlogTechnicalArticleData } from "./blog-technical-article-data";

/** Gübre makalelerine özgü teknik veri blokları (ortak gübre bloğu yerine). Kodla yönetilir. */
export const fertilizerTechnicalData: Record<string, BlogTechnicalArticleData> = {
  "npk-gubre-uretimi": {
    requiredDataTitle: "NPK Hattı İçin Gerekli Veriler",
    requiredDataDescription: "NPK hattında reçete, hammadde formu ve granülasyon yöntemi kurutma ve güvenlik kararlarını doğrudan belirler.",
    requiredDataRows: [
      { label: "Reçete ve besin oranları", purpose: "Hammadde listesini ve granülasyon yöntemini belirler.", request: "N-P-K oranları, ikincil ve iz elementler" },
      { label: "Hammadde formu", purpose: "Dozajlama ve bağlayıcı ihtiyacını belirler.", request: "Toz, granül, çözelti veya bulamaç" },
      { label: "Üre ve amonyum nitrat içeriği", purpose: "Kurutma sıcaklığı ve güvenlik değerlendirmesini belirler.", request: "Var / yok ve oranları" },
      { label: "Granülasyon yöntemi", purpose: "Granülatör çıkış nemi ve geri dönüş oranını belirler.", request: "Su, buhar veya bulamaç ile" },
      { label: "Granül boyutu ve dayanımı", purpose: "Eleme, soğutma ve kaplama kurgusunu belirler.", request: "Ticari fraksiyon ve kalite hedefi" },
      { label: "Reçete değişim sıklığı", purpose: "Hat esnekliği ve temizlik ihtiyacını belirler.", request: "Kampanya veya sürekli üretim" },
    ],
    exampleTitle: "Reçete Bileşenlerinin Hatta Etkisi",
    exampleDescription: "Aşağıdaki satırlar genel mühendislik değerlendirmesidir; her reçete için ayrıca doğrulanır.",
    exampleRows: [
      { label: "Üre", value: "Düşük sıcaklıkta yumuşama, yüksek nem çekme", comment: "Kurutma sıcaklığı sınırlanır, soğutma kritik olur" },
      { label: "Amonyum nitrat", value: "Isıl bozunma riski", comment: "Reçeteye özel güvenlik değerlendirmesi gerekir" },
      { label: "Fosfat kaynakları (DAP / MAP)", value: "Amonyak salınımı olabilir", comment: "Gaz hattı ve gerekirse gaz yıkama" },
      { label: "Potasyum klorür", value: "Korozyon; amonyum nitratla birlikte bozunma riskini artırabilir", comment: "Malzeme seçimi ve güvenlik değerlendirmesi" },
      { label: "İz elementler", value: "Düşük oranlı bileşen", comment: "Homojen dağılım için dozaj hassasiyeti" },
    ],
    decisionTableTitle: "NPK Hattında Teknik Kararlar",
    decisionTableDescription: "Reçete, granülasyon ve kurutma kararları birlikte verilir.",
    decisionTableRows: [
      { criterion: "Granülasyon yöntemi", description: "Su, buhar veya bulamaç", importance: "Granül yapısını belirler", effect: "Kurutucu yükü ve geri dönüş oranı değişir" },
      { criterion: "Geri dönüş oranı", description: "Elek altı ve kırılmış elek üstü", importance: "Granülasyon dengesini kurar", effect: "Kurutucu ve soğutucu toplam akışı büyür" },
      { criterion: "Kurutma sıcaklığı", description: "Reçeteye göre üst sınır", importance: "Granül kalitesi ve güvenlik", effect: "Aşılırsa erime, kabuklaşma veya bozunma riski" },
      { criterion: "Soğutma ve kaplama", description: "Depolama öncesi son işlem", importance: "Kekleşmeyi önler", effect: "Yetersizse depoda topaklanma" },
    ],
    factorCardsTitle: "NPK Hattında Kritik Faktörler",
    factorCardsDescription: "NPK'da kalite ve güvenlik reçeteden başlar.",
    factorCards: [
      { title: "Reçete esnekliği", description: "Farklı formüller arasında geçiş ve temizlik planı." },
      { title: "Granül dayanımı", description: "Taşıma ve depolamada tozlanmayı belirler." },
      { title: "Nem çekme", description: "Üre ve bazı tuzlarda kaplama ve soğutma ihtiyacını artırır." },
      { title: "Proses güvenliği", description: "Amonyum nitrat içeren reçetelerde ayrı değerlendirme." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "NPK hattını tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Granül Gübre Üretim Süreci", description: "Genel granül hat akışını okuyun.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Kurutma Rehberi", description: "Su hesabı, ürün sıcaklığı ve amonyum nitrat güvenliği.", href: "/kutuphane/blog/gubre-kurutma-tamburu" },
      { title: "Granülatör Tamburu", description: "Granülasyon ekipmanını ürün sayfasında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { title: "Granül NPK Gübre Tesisi", description: "Sektör çözümünü görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-npk" },
      { title: "İletişim", description: "Teknik görüşme ve teklif talebi için iletişime geçin.", href: "/iletisim" },
    ],
  },
};
