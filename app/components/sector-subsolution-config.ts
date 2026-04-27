import type { SectorFormField } from "./sector-experience-config";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";
import { trText } from "../lib/tr-text";

type Card = { title: string; text: string };
type Faq = { question: string; answer: string };

export type SectorSubsolutionConfig = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  primaryEyebrow: string;
  primaryTitle: string;
  primaryDescription: string;
  primaryCards: Card[];
  offerEyebrow: string;
  offerTitle: string;
  offerCards: Card[];
  equipmentEyebrow: string;
  equipmentTitle: string;
  equipment: Card[];
  criticalEyebrow: string;
  criticalTitle: string;
  criticalTopics: Card[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];
  formTitle: string;
  formDescription: string;
  formFields: SectorFormField[];
  messagePlaceholder: string;
};

type Family = {
  primaryTitle: string;
  primaryDescription: string;
  primaryCards: Card[];
  offerCards: Card[];
  equipment: Card[];
  criticalTopics: Card[];
  faqAnswers: string[];
  formDescription: string;
  formFields: SectorFormField[];
  messagePlaceholder: string;
};

const sharedFields: SectorFormField[] = [
  { id: "capacity", label: "Kapasite", type: "text" },
  {
    id: "automationLevelSpecific",
    label: "Otomasyon Seviyesi",
    type: "select",
    options: ["Yari Otomatik", "Tam Otomatik", "Henuz net değil"],
  },
];

function buildFaqs(title: string, answers: string[]): Faq[] {
  return [
    { question: `${title} icin kapasite nasil belirlenir?`, answer: answers[0] },
    { question: `${title} mevcut bir hatta entegre edilebilir mi?`, answer: answers[1] },
    { question: `${title} icin otomasyon gerekli midir?`, answer: answers[2] },
    { question: `${title} icin makine secimi neden kritik gorulur?`, answer: answers[3] },
    { question: `${title} icin anahtar teslim kurulum yapiyor musunuz?`, answer: answers[4] },
  ];
}

function buildConfig(current: SectorSubsectorItem, family: Family): SectorSubsolutionConfig {
  return {
    heroBadge: "ALT ??z?m",
    heroTitle: current.title,
    heroDescription: current.description,
    primaryEyebrow: "Proses Mantigi",
    primaryTitle: family.primaryTitle,
    primaryDescription: family.primaryDescription,
    primaryCards: family.primaryCards,
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: `${current.title} icin sundugumuz cozumler`,
    offerCards: family.offerCards,
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: `${current.title} sürecinde kullanilan baslica makine ve ekipmanlar`,
    equipment: family.equipment,
    criticalEyebrow: "Kritik Basliklar",
    criticalTitle: `${current.title} sürecinde kritik olan konular`,
    criticalTopics: family.criticalTopics,
    faqEyebrow: "SSS",
    faqTitle: `${current.title} hakkinda sik sorulan sorular`,
    faqs: buildFaqs(current.title, family.faqAnswers),
    formTitle: `${current.title} icin teklif veya teknik gorusme talep edin`,
    formDescription: family.formDescription,
    formFields: family.formFields,
    messagePlaceholder: family.messagePlaceholder,
  };
}

const compostFamily: Family = {
  primaryTitle: "Kullanılan giris materyali ve proses mantigi",
  primaryDescription:
    "Organik atik cozumlerinde tesis kurgusu; giren materyalin nemi, lif yapisi, organik yogunlugu ve hedef son ürün yapisina gore belirlenir.",
  primaryCards: [
    { title: "Giris materyali", text: "Nem, lif boyu ve organik yogunluk tambur ve eleme secimini belirler." },
    { title: "On hazirlik", text: "Karistirma, parcalama ve kontroll? besleme hat verimini destekler." },
    { title: "Son ürün hedefi", text: "Kompost, kurutulmus ürün veya siniflanmis fraksiyona gore hat degisir." },
    { title: "Cevresel kontrol", text: "Koku, toz ve saha lojistigi ilk asamadan itibaren ele alinmalidir." },
  ],
  offerCards: [
    { title: "Atık tipine uygun proses", text: "Farkli organik girdiler icin doğru hat kurgusunu planliyoruz." },
    { title: "Tambur ve elek se?imi", text: "Olgunlastirma, kurutma ve siniflandirma adimlarini netlestiriyoruz." },
    { title: "Saha yerlesimi", text: "Besleme, stok ve son ürün akisini birlikte kurguluyoruz." },
    { title: "Cevresel kontrol", text: "Koku ve toz yonetimini tesisin ayrilmaz parcasi olarak planliyoruz." },
    { title: "Revizyon ve kapasite artisi", text: "Mevcut hatlarda darboğaz ve verim iyilestirmesi yapiyoruz." },
    { title: "Anahtar teslim kurulum", text: "Imalat, montaj ve devreye alma sürecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Besleme Bunkeri", text: "Organik girdilerin kontroll? hatta alinmasini saglar." },
    { title: "Hazirlama Konveyorleri", text: "On hazirlik ve tambur besleme akisini dengeler." },
    { title: "Karistirma Sistemleri", text: "Farkli fraksiyonlarin homojen sekilde birlesmesini destekler." },
    { title: "Olgunlastirma Tamburu", text: "Kompostun kontroll? ilerlemesini saglar." },
    { title: "Kurutma Tamburu", text: "Y?ksek nemli girdilerde hacim azaltma ve kurutma yapar." },
    { title: "Eleme Sistemleri", text: "Son ürün fraksiyonlarini ayirir." },
    { title: "Transfer Hatlari", text: "Hazirlama, tambur ve cikis noktalarini baglar." },
    { title: "Toz ve Koku kontrol?", text: "Cevresel performansi destekler." },
    { title: "Paketleme ve Son Hat", text: "Son ürünun torbalama ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Atık nem orani", text: "Tambur secimini ve kurutma ihtiyacini etkiler." },
    { title: "Karbon / azot dengesi", text: "Kompost kalitesi ve süreci icin belirleyicidir." },
    { title: "Koku kontrol?", text: "Saha kabulunu ve cevresel uyumu etkiler." },
    { title: "Kurutma verimi", text: "Enerji dengesiyle birlikte ele alinmalidir." },
    { title: "Son ürün homojenligi", text: "Pazarlanabilir kalite icin gereklidir." },
    { title: "Eleme kalitesi", text: "Ürün fraksiyonlarini ve verimi belirler." },
    { title: "Toz güvenligi", text: "Emis ve filtrasyon ihmal edilmemelidir." },
    { title: "Saha lojistigi", text: "Girdi ve cikis akislari dengeli planlanmalidir." },
  ],
  faqAnswers: [
    "Kapasite; atik tipi, nem yapisi ve gunluk kabul miktarina gore belirlenir.",
    "Evet, uygun saha ve ekipman kurgusuyla yeni ??z?mler mevcut hatlara eklenebilir.",
    "Otomasyon seviyesi besleme, tambur ve son hat surekliligine gore netlesir.",
    "Doğru tambur, elek ve transfer se?imi hem kaliteyi hem verimi belirler.",
    "Evet, proses tasarımı, imalat, montaj ve devreye alma dahil kurulum yapiyoruz.",
  ],
  formDescription:
    "Atık tipi, gunluk giris kapasitesi, hedef son ürün ve saha sartlarinizi paylasin; size uygun organik atik isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "wasteType", label: "Atık Turu", type: "select", options: ["Evsel Organik Atık", "Tarimsal Atık", "Hayvansal Atık", "Karışık Organik Atık"] },
    { id: "dailyInputCapacity", label: "Gunluk Giris Kapasitesi", type: "number", unit: "ton/gun" },
    { id: "targetOutput", label: "Hedef Son Ürün", type: "select", options: ["Kompost", "Kurutulmus Organik Ürün", "Elek Alti / Elek Üstü Ayrimi", "Henuz net değil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Atık kaynagi, kapasite, saha bilgisi ve hedef son ürünle ilgili teknik detaylari yazabilirsiniz.",
};

const miningFamily: Family = {
  primaryTitle: "Islenen malzeme yapisi ve proses mantigi",
  primaryDescription:
    "Madencilik ve mineral isleme cozumlerinde hat tasarımı; malzemenin sertligi, asindiriciligi, giris boyutu ve hedef cikis boyutuna gore sekillenir.",
  primaryCards: [
    { title: "Malzeme sertligi", text: "Kırıcı tipi ve sarf se?imi doğrudan sertlige baglidir." },
    { title: "Asindiricilik", text: "Asindirici yapilar bakım ve govde secimini etkiler." },
    { title: "Giris ve cikis boyutu", text: "Kademe kurgusu hedef tane boyutuna gore planlanir." },
    { title: "Kapasite dengesi", text: "Tum ekipmanlar ayni hat debisinde dengelenmelidir." },
  ],
  offerCards: [
    { title: "Proses tasarımı", text: "Kirma, eleme ve transfer akisini teknik olarak planliyoruz." },
    { title: "Kırıcı ve elek se?imi", text: "Malzeme ve kapasiteye uygun kombinasyonlari belirliyoruz." },
    { title: "hat yerle?imi", text: "Bunker, transfer ve cikis noktalarini saha lojistigine gore kuruyoruz." },
    { title: "Makine imalatı", text: "Projeye ?zel kırıcı, elek ve transfer ekipmanlari uretiyoruz." },
    { title: "Revizyon ve kapasite artisi", text: "Mevcut hatlarda darboğaz ve verim iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Saha kurulumu ve isletmeye alma sürecini yonetiyoruz." },
  ],
  equipment: [
    { title: "Primer Kırıcılar", text: "Iri boyutlu malzemelerin ilk kademe kucultulmesini saglar." },
    { title: "Sekonder Kırıcılar", text: "Hedef boyuta yaklasmak icin ikinci kademe kirma yapar." },
    { title: "Tersiyer Çözümler", text: "Ince fraksiyon ve kontroll? cikis boyutunu destekler." },
    { title: "Besleyiciler", text: "Kırıcı ve elek hatlarina kararlı malzeme besler." },
    { title: "Eleme Sistemleri", text: "Siniflandirma ve kalite kontrol? saglar." },
    { title: "Bunker Uniteleri", text: "Ara stok ve kontroll? cikis noktalari sunar." },
    { title: "Transfer Hatlari", text: "Kirma ve eleme noktalarini baglar." },
    { title: "Toz kontrol?", text: "Saha güvenligi ve cevresel uyumu destekler." },
    { title: "Yukleme Cikislari", text: "Son ürünun stoklama ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Malzeme sertligi", text: "Kırıcı se?imi ve sarf omrunu belirler." },
    { title: "Asindiricilik", text: "Govde ve sarf seciminde kritik rol oynar." },
    { title: "Tane boyutu", text: "Giris ve hedef cikis boyutu net tanimlanmalidir." },
    { title: "Kapasite dengesi", text: "Darboğaz olusmamasi icin butun hat ayni ritimde calismalidir." },
    { title: "Elek verimi", text: "Siniflandirma kalitesini doğrudan etkiler." },
    { title: "Toz kontrol?", text: "Özellikle ince ürün hatlarinda kritiktir." },
    { title: "Bakım erisimi", text: "Servis ve sarf degisimi kolay planlanmalidir." },
    { title: "Enerji verimliligi", text: "Doğru makine se?imi tuketimi azaltir." },
  ],
  faqAnswers: [
    "Kapasite; malzeme tipi, giris boyutu, hedef cikis ve ?al??ma saatine gore belirlenir.",
    "Evet, uygun ekipman secimiyle mevcut kirma-eleme hatlari revize edilebilir.",
    "Otomasyon seviyesi besleme dengesi ve cikis takibi icin büyük avantaj saglar.",
    "Yanlis kırıcı, elek veya transfer se?imi verimi dusurur ve bakım maliyetini artirir.",
    "Evet, proses tasarımı, ekipman imalatı, saha kurulumu ve devreye alma dahil ??z?m sunuyoruz.",
  ],
  formDescription:
    "Malzeme turu, saatlik kapasite, giris boyutu ve hedef cikis boyutunu paylasin; size uygun mineral isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "materialType", label: "Malzeme Turu", type: "text" },
    { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
    { id: "inputSize", label: "Giris Boyutu", type: "text" },
    { id: "targetOutputSize", label: "Hedef Cikis Boyutu", type: "text" },
    { id: "plantStatus", label: "Tesis Durumu", type: "select", options: ["Yeni", "Revizyon", "Kapasite Artisi"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Malzeme yapisi, kapasite ve hedef ürün boyutuyla ilgili detaylari yazabilirsiniz.",
};

const miningDryingCoolingFamily: Family = {
  primaryTitle: "Malzeme nemi, sıcaklık kontrolü ve son ürün kondisyonu",
  primaryDescription:
    "Maden kurutma ve soğutma çözümlerinde sistem kurgusu; giriş nemi, hedef çıkış nemi, sıcaklık toleransı ve son ürün akış davranışına göre belirlenir.",
  primaryCards: [
    { title: "Giriş nemi", text: "Kurutma tamburu, ısı kaynağı ve kapasite hesabı doğrudan giriş nemine göre şekillenir." },
    { title: "Hedef son ürün kondisyonu", text: "Depolama, eleme ve paketleme öncesi istenen nem ve sıcaklık seviyesi net tanımlanmalıdır." },
    { title: "Sıcaklık yönetimi", text: "Kurutma ve soğutma adımlarının dengeli kurulması ürün kalitesini ve ekipman ömrünü destekler." },
    { title: "Toz ve transfer dengesi", text: "Kurutma sonrası oluşan ince fraksiyonlar ve ürün akışı birlikte değerlendirilmelidir." },
  ],
  offerCards: [
    { title: "Kurutma prosesi tasarımı", text: "Malzeme yapısı, giriş nemi ve hedef kapasiteye göre kurutma akışını teknik olarak planlıyoruz." },
    { title: "Soğutma hattı kurgusu", text: "Kurutma sonrası ürünün güvenli depolama ve sınıflandırma için uygun sıcaklığa gelmesini sağlayan çözümler geliştiriyoruz." },
    { title: "Tambur ve yardımcı ekipman seçimi", text: "Kurutma tamburu, soğutma tamburu, besleme ve transfer ekipmanlarını prosese göre belirliyoruz." },
    { title: "Toz ve filtrasyon altyapısı", text: "Kurutma ve soğutma süreçlerinde oluşan tozu kontrol altına alan emiş ve filtrasyon sistemleri kuruyoruz." },
    { title: "Revizyon ve kapasite artırımı", text: "Mevcut kurutma veya soğutma hatlarında darboğaz analizi yaparak verim ve kapasite iyileştirmeleri sunuyoruz." },
    { title: "Kurulum ve devreye alma", text: "Saha kurulumu, sıcak devre testleri ve işletmeye alma süreçlerini kontrollü biçimde yönetiyoruz." },
  ],
  equipment: [
    { title: "Besleme ve Dozajlama Sistemleri", text: "Malzemenin kurutma hattına dengeli ve kontrollü şekilde verilmesini sağlar." },
    { title: "Kurutma Tamburu", text: "Mineral veya dökme katı hammaddede hedef çıkış nemine ulaşmak için kontrollü kurutma uygular." },
    { title: "Soğutma Tamburu", text: "Kurutma sonrası ürün sıcaklığını dengeleyerek depolama ve son hat performansını iyileştirir." },
    { title: "Brülör ve Sıcak Hava Sistemi", text: "Kurutma prosesinin ihtiyacına uygun ısı girdisini kontrollü şekilde üretir ve yönlendirir." },
    { title: "Eleme ve Sınıflandırma Sistemleri", text: "Kurutma sonrası ürün fraksiyonlarını ayırarak standardı destekler." },
    { title: "Konveyör ve Transfer Hatları", text: "Kurutma, soğutma ve stoklama noktaları arasında güvenli malzeme transferi sağlar." },
    { title: "Stok ve Çıkış Bunkerleri", text: "Soğutulmuş son ürünün ara stoklanması ve kontrollü çıkışı için tampon kapasite sunar." },
    { title: "Toz Toplama ve Filtrasyon", text: "Kurutma ve soğutma süreçlerinde oluşan ince tozu kontrol ederek saha güvenliğini destekler." },
    { title: "Kontrol ve Otomasyon Panosu", text: "Sıcaklık, debi ve ekipman senkronizasyonunu izleyerek proses kararlılığını artırır." },
  ],
  criticalTopics: [
    { title: "Giriş nemi", text: "Kurutma yükünü, enerji ihtiyacını ve tambur seçimini doğrudan belirler." },
    { title: "Hedef çıkış nemi", text: "Son ürün kalitesi ve depolama performansı için net biçimde tanımlanmalıdır." },
    { title: "Ürün sıcaklığı", text: "Yetersiz soğutma, son ürün akışını ve ekipman güvenliğini olumsuz etkileyebilir." },
    { title: "Kurutma verimi", text: "Isı kaynağı, tambur boyutu ve malzeme debisi dengeli kurgulanmalıdır." },
    { title: "Toz kontrolü", text: "Kurutma sonrası ince fraksiyon oluşumu emiş ve filtrasyon altyapısıyla birlikte yönetilmelidir." },
    { title: "Enerji tüketimi", text: "Kurutma ve soğutma sistemlerinin toplam enerji dengesi yatırım verimini doğrudan etkiler." },
    { title: "Akış ve topaklanma davranışı", text: "Son ürünün soğuma sonrası akışkanlığı transfer ve depolama tasarımını belirler." },
    { title: "Bakım erişimi", text: "Tambur, brülör ve filtre noktalarına güvenli bakım erişimi tasarımın parçası olmalıdır." },
  ],
  faqAnswers: [
    "Kapasite; malzeme tipi, giriş nemi, hedef çıkış nemi ve çalışma saatine göre belirlenir.",
    "Evet, uygun saha ve transfer altyapısı varsa mevcut hatlara kurutma veya soğutma kademeleri eklenebilir.",
    "Otomasyon; sıcaklık, debi ve ürün akışının kararlı yönetimi için önemli avantaj sağlar.",
    "Doğru kurutma tamburu, soğutma kademesi ve filtrasyon seçimi ürün kalitesi ile enerji verimini belirler.",
    "Evet, kurutma-soğutma hattı için proses tasarımı, ekipman imalatı, kurulum ve devreye alma dahil çözüm sunuyoruz.",
  ],
  formDescription:
    "Malzeme türü, saatlik kapasite, giriş nemi ve hedef çıkış kondisyonunu paylaşın; size uygun maden kurutma ve soğutma çözümünü birlikte netleştirelim.",
  formFields: [
    { id: "materialType", label: "Malzeme Türü", type: "text" },
    { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
    { id: "inputMoisture", label: "Giriş Nemi", type: "text" },
    { id: "targetMoisture", label: "Hedef Çıkış Nemi", type: "text" },
    { id: "coolingNeed", label: "Soğutma Gerekli mi?", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
    ...sharedFields,
  ],
  messagePlaceholder:
    "Malzeme yapısı, giriş nemi, hedef çıkış koşulu ve mevcut saha bilgileriyle ilgili detayları paylaşabilirsiniz.",
};

const chemistryFamily: Family = {
  primaryTitle: "Kullanılan kimyasal veya proses yapisi ve ekipman mantigi",
  primaryDescription:
    "Kimya ve proses cozumlerinde ekipman se?imi; ürünun viskozitesi, kimyasal uyumlulugu, basinc ve sicaklik gereksinimine gore belirlenir.",
  primaryCards: [
    { title: "Kimyasal uyumluluk", text: "Govde ve conta yapisi ürünun karakterine uygun secilmelidir." },
    { title: "Sicaklik ve basinc", text: "Isitma, sogutma veya basincli ?al??ma tasarımın temelidir." },
    { title: "Karistirma ve homojenlik", text: "Karistirici tipi hedef ürün kalitesini belirler." },
    { title: "Temizlik ve erisim", text: "Bakım ve ürün gecis kolayligi surekliligi destekler." },
  ],
  offerCards: [
    { title: "Proses tasarımı", text: "Karistirma, reaksiyon ve transfer adimlarini tek sistemde planliyoruz." },
    { title: "Ekipman se?imi", text: "Reaktor, tank ve dozajlama ekipmanlarini ürün yapisina gore belirliyoruz." },
    { title: "Otomasyon ve kontrol", text: "Sicaklik, basinc ve dozaj takibini süreçe entegre ediyoruz." },
    { title: "Saha yerlesimi", text: "Bakım erisimi ve güvenligi destekleyen yerle?im kuruyoruz." },
    { title: "Revizyon ve modernizasyon", text: "Mevcut kimya hatlarinda kapasite ve proses iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma sürecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Karistiricili Reaktorler", text: "Homojen karisim ve kontroll? reaksiyon sunar." },
    { title: "Basincli Reaktorler", text: "Basincli proseslerde güvenli ?al??ma saglar." },
    { title: "Cozundurma Tanklari", text: "Toz ve sivi hammaddelerin cozumdurulmesini destekler." },
    { title: "Sogutma Tanklari", text: "Ürün sicaklik dengesini korur." },
    { title: "Stok Tanklari", text: "Ara stoklama ve proses tamponlamasi yapar." },
    { title: "Dozajlama Sistemleri", text: "Kimyasal akislari kontroll? sekilde besler." },
    { title: "Transfer Hatlari", text: "Ürünun proses boyunca güvenli aktarimini saglar." },
    { title: "Yardimci Akis Ekipmanlari", text: "Akis kontrol? ve yonlendirme destegi verir." },
    { title: "Kontrol Panolari", text: "Batch ve süreç takibini yonetir." },
  ],
  criticalTopics: [
    { title: "Kimyasal uyumluluk", text: "Ekipman malzemesi proses icerigiyle uyumlu secilmelidir." },
    { title: "Basinc ve sicaklik", text: "Çalışma kosullari govde ve yardimci sistem secimini belirler." },
    { title: "Karisim homojenligi", text: "Doğru karistirma yapisi hedef kaliteyi korur." },
    { title: "Doğru hacim", text: "Tank ve reaktor hacmi batch planina gore secilmelidir." },
    { title: "Sizdirmazlik", text: "Hat güvenligi ve ürün kaybini onler." },
    { title: "Temizlik ve bakım", text: "Yikama kolayligi surekliligi destekler." },
    { title: "Otomasyon", text: "Kararlı ve izlenebilir proses icin gereklidir." },
    { title: "Is güvenligi", text: "Saha güvenligi ve koruma sistemleri birlikte dusunulmelidir." },
  ],
  faqAnswers: [
    "Kapasite; batch yapisi, ürün tipi ve reaksiyon suresine gore belirlenir.",
    "Evet, uygun tank ve transfer kurgusuyla yeni ekipmanlar mevcut hatta entegre edilebilir.",
    "Otomasyon kalite, güvenlik ve izlenebilirlik acisindan büyük onem tasir.",
    "Doğru reaktor, tank ve dozajlama se?imi hem kaliteyi hem proses güvenligini belirler.",
    "Evet, proses tasarımı, imalat, montaj ve devreye alma dahil entegre kurulum yapiyoruz.",
  ],
  formDescription:
    "Ürün veya kimyasal tipi, ?al??ma sekli, batch kapasitesi ve isitma-sogutma ihtiyacinizi paylasin; size uygun proses cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "productType", label: "Ürün / Kimyasal Turu", type: "text" },
    { id: "workingMode", label: "Çalışma Sekli", type: "select", options: ["Batch", "Surekli"] },
    { id: "batchCapacity", label: "Hedef Batch Kapasitesi", type: "number", unit: "ton/batch" },
    { id: "thermalNeed", label: "Isitma / Sogutma Ihtiyaci", type: "text" },
    { id: "pressureNeed", label: "Basincli Sistem Gerekli mi?", type: "select", options: ["Evet", "Hayır", "Henuz net değil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Kimyasal yapi, batch hedefi, sicaklik-basinc beklentisi ve saha bilgilerini yazabilirsiniz.",
};

const recyclingFamily: Family = {
  primaryTitle: "Islenen atik tipi ve proses mantigi",
  primaryDescription:
    "Geri d?n???m cozumlerinde proses kurgusu; atigin heterojen yapisi, yabanci madde riski ve hedef boyut kucultme seviyesine gore belirlenir.",
  primaryCards: [
    { title: "Atık heterojenligi", text: "Karışık akıslar ve degisken nem yapisi ?zel yaklasim gerektirir." },
    { title: "Boyut kucultme", text: "Primer ve sekonder kademe ihtiyaci hedef cikisa gore belirlenir." },
    { title: "Ayirma verimi", text: "Elek ve ayirma noktalarinin uyumu geri kazanımi etkiler." },
    { title: "Güvenlik", text: "Toz, gurultu ve yabanci madde riski tasarımın parcasidir." },
  ],
  offerCards: [
    { title: "Parcalama ve kirma se?imi", text: "Atık grubuna uygun shredder ve kırıcı cozumlerini belirliyoruz." },
    { title: "Ayirma ve eleme", text: "boyutland?rma ve siniflandirma adimlarini geri kazanım hedefine gore kuruyoruz." },
    { title: "Transfer ve besleme", text: "Bunker ve transfer hatlarini saha lojistigine uygun planliyoruz." },
    { title: "Toz ve cevresel kontrol", text: "Emis ve filtrasyonu sistemin ayrilmaz parcasi olarak kurguluyoruz." },
    { title: "Revizyon ve entegrasyon", text: "Mevcut hatlara yeni ekipman entegrasyonu ve kapasite artisi sagliyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve isletmeye alma süreçlerini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Shredder Sistemleri", text: "Heterojen akislarda ilk kademe parcalama yapar." },
    { title: "Primer Kırıcılar", text: "Büyük parcalarin kontroll? kucultulmesini saglar." },
    { title: "Sekonder Kırıcılar", text: "Hedef boyuta yaklasmak icin ikinci kademe isleme yapar." },
    { title: "Eleme Sistemleri", text: "Fraksiyon ayrimi ve geri kazanımi destekler." },
    { title: "Ayirma Ekipmanlari", text: "Yabanci madde ve farkli ürün gruplarini ayirir." },
    { title: "Besleme Hatlari", text: "Atık ak??lar?n? kararlı sekilde hatta verir." },
    { title: "Transfer Konveyorleri", text: "Butun proses noktalarini birbirine baglar." },
    { title: "Cevresel Kontrol", text: "Toz ve emisyonu kontrol altinda tutar." },
    { title: "Son Ürün Hazirlama", text: "Geri kazanilan ürünun stok ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Atık heterojenligi", text: "Degisken malzeme yapisi ekipman secimini belirler." },
    { title: "Yabanci madde riski", text: "Kırıcı ve shredder sistemlerinde koruma gerektirir." },
    { title: "Boyut kucultme kademesi", text: "Tek veya çok kademeli isleme hedef cikisa gore secilir." },
    { title: "Toz kontrol?", text: "Özellikle ince fraksiyonlarda kritik onemdedir." },
    { title: "Hat güvenligi", text: "Y?ksek torklu ekipmanlarda koruma eksiksiz olmalidir." },
    { title: "Bakım erisimi", text: "Sarf degisimi icin erisim kolayligi planlanmalidir." },
    { title: "Enerji tuketimi", text: "Doğru ekipman se?imi tuketimi azaltir." },
    { title: "Esnek proses", text: "Degisken akislara uyum saglayan yapi yatirim degerini artirir." },
  ],
  faqAnswers: [
    "Kapasite; atik tipi, giris boyutu ve hedef cikisa gore belirlenir.",
    "Evet, uygun on ayirma ve transfer altyapisi ile mevcut hatlar guclendirilebilir.",
    "Otomasyon; besleme dengesi ve proses güvenligi acisindan büyük avantaj saglar.",
    "Doğru parcalama, ayirma ve transfer se?imi geri kazanım verimini etkiler.",
    "Evet, muhendislikten saha devreye almaya kadar anahtar teslim ??z?m sunuyoruz.",
  ],
  formDescription:
    "Atık turu, kapasite, giris boyutu ve hedef cikis boyutunu paylasin; size uygun geri d?n???m cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "wasteType", label: "Atık Turu", type: "text" },
    { id: "capacity", label: "Kapasite", type: "text" },
    { id: "inputSize", label: "Giris Boyutu", type: "text" },
    { id: "targetOutputSize", label: "Hedef Cikis Boyutu", type: "text" },
    { id: "plantType", label: "Sabit Tesis / Mobil Tesis", type: "select", options: ["Sabit", "Mobil", "Henuz net değil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Atık tipi, saha yapisi ve hedef geri kazanım senaryosuyla ilgili teknik detaylari yazabilirsiniz.",
};

const biogasFamily: Family = {
  primaryTitle: "Girdi yapisi ve sistem yaklasimi",
  primaryDescription:
    "Enerji ve biyogaz cozumlerinde hat kurgusu; organik girdinin nemi, lif yapisi, akiskanligi ve besleme senaryosuna gore sekillenir.",
  primaryCards: [
    { title: "Girdi karakteri", text: "Yari kati, lifli veya degisken yapili girdiler farkli ??z?mler gerektirir." },
    { title: "Besleme surekliligi", text: "Duzenli ve kontroll? girdi ak??? kararlı performans icin kritiktir." },
    { title: "Dozaj ve transfer", text: "Depolama ve transfer ekipmanlarinin birbirini desteklemesi gerekir." },
    { title: "Dayanim ve bakım", text: "Yapiskan veya zor akan girdilerde dayaniklilik on plana cikar." },
  ],
  offerCards: [
    { title: "Girdi hazirlama sistemleri", text: "Organik girdileri prosese uygun hale getiren on isleme ??z?mleri sunuyoruz." },
    { title: "Besleme ve dozajlama", text: "Kararlı ve kontroll? besleme icin uygun bunker ve dozaj kurgusu yapiyoruz." },
    { title: "Yardimci akis ekipmanlari", text: "Akis kontrolunu ve surekliligi destekleyen ekipmanlari belirliyoruz." },
    { title: "Toz ve koku kontrol?", text: "Saha güvenligi icin emis ve filtrasyon altyapisini kuruyoruz." },
    { title: "Revizyon ve entegrasyon", text: "Mevcut enerji ve biyogaz hatlarina yeni ekipman entegrasyonu sagliyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma sürecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Girdi Bunkerleri", text: "Organik girdilerin kontroll? kabul ve stoklanmasini saglar." },
    { title: "Hazirlama Konveyorleri", text: "Besleme ve dozaj noktalarina dengeli transfer yapar." },
    { title: "Dozajlama Sistemleri", text: "Organik girdilerin belirlenen debide prosese verilmesini saglar." },
    { title: "Helezon Hatlari", text: "Yapiskan veya lifli malzemelerin transferini destekler." },
    { title: "Depolama Uniteleri", text: "Ara stok ve tamponlama imk?n? sunar." },
    { title: "Yardimci Akis Sistemleri", text: "Akis kontrol? ve proses yonlendirmesini destekler." },
    { title: "Toz ve Koku kontrol?", text: "Cevresel performansi ve saha konforunu korur." },
    { title: "Yan Ürün Hazirlama", text: "Cikis akislarinin kontroll? yonetimini tamamlar." },
    { title: "Kontrol Panolari", text: "Besleme ve süreç parametrelerinin izlenmesini saglar." },
  ],
  criticalTopics: [
    { title: "Girdi kararliligi", text: "Duzensiz girdi yapisi performansi dusurur." },
    { title: "Nem ve akiskanlik", text: "Bunker ve transfer sistemlerini belirler." },
    { title: "Besleme surekliligi", text: "Kesintisiz ve kararlı ak??? desteklemek gerekir." },
    { title: "Koku kontrol?", text: "Organik girdilerde koku yonetimi onemlidir." },
    { title: "Hat güvenligi", text: "Zorlayici akislarda ekipman koruma birlikte dusunulmelidir." },
    { title: "Otomasyon", text: "Süreç izleme ve dozaj kararliligi icin gereklidir." },
    { title: "Dayaniklilik", text: "Nemli ve asindirici yapida agir hizmet tipi se?im onemlidir." },
    { title: "Bakım planlamasi", text: "Bakım araliklari ve saha erisimi desteklenmelidir." },
  ],
  faqAnswers: [
    "Kapasite; girdi tipi, gunluk besleme plani ve süreç ihtiyacina gore belirlenir.",
    "Evet, uygun saha ve transfer altyapisi ile mevcut biyogaz hatlari guclendirilebilir.",
    "Otomasyon; besleme duzeni ve akış takibi icin büyük avantaj saglar.",
    "Doğru bunker, dozaj ve transfer se?imi surekliligi doğrudan etkiler.",
    "Evet, imalat, montaj ve devreye alma dahil entegre kurulum yapiyoruz.",
  ],
  formDescription:
    "Girdi turu, gunluk besleme kapasitesi ve sistem tipinizi paylasin; size uygun enerji ve biyogaz cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "feedType", label: "Girdi Turu", type: "text" },
    { id: "dailyFeedCapacity", label: "Gunluk Besleme Kapasitesi", type: "number", unit: "ton/gun" },
    { id: "systemType", label: "Sistem Tipi", type: "select", options: ["Yeni yatirim", "Mevcut hat destegi", "Revizyon"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Girdi tipi, gunluk besleme plani ve saha ihtiyaclariyla ilgili detaylari yazabilirsiniz.",
};

const sludgeFamily: Family = {
  primaryTitle: "Giris camuru ozellikleri ve proses mantigi",
  primaryDescription:
    "Atık su camuru cozumlerinde proses yaklasimi; giris camürünun nemi, akiskanligi, yapiskanligi ve hedef son ürün yapisina gore belirlenir.",
  primaryCards: [
    { title: "Giris nemi", text: "Kurutma sistemi ve enerji ihtiyacini belirler." },
    { title: "Akis ve yapiskanlik", text: "Taşıma, besleme ve bosaltma ekipmanlarini etkiler." },
    { title: "Hedef cikis yapisi", text: "Kurumus ürün veya hacim azaltma hedefine gore proses degisir." },
    { title: "Koku ve emisyon", text: "Cevresel uygunluk ilk tasarimdan itibaren ele alinmalidir." },
  ],
  offerCards: [
    { title: "Kurutma ve destek kurgusu", text: "Giris yapisina gore kurutma hattini ve yardimci ekipmanlari belirliyoruz." },
    { title: "Taşıma ve besleme sistemleri", text: "Çamur akisini kararlı hale getirecek ??z?mleri planliyoruz." },
    { title: "Enerji optimizasyonu", text: "Enerji tuketimi ve sureklilik dengesini birlikte ele aliyoruz." },
    { title: "Toz ve koku kontrol?", text: "Emisyon ve saha konforu icin kontrol altyapisi kuruyoruz." },
    { title: "Revizyon ve modernizasyon", text: "Mevcut aritma hatlarinda kapasite ve proses iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma sürecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Susuzlastirma Sistemleri", text: "Çamur hacmini azaltir ve sonraki adimlari destekler." },
    { title: "Kurutma Hatlari", text: "Hedef cikis nemine ulasmak icin kontroll? kurutma uygular." },
    { title: "Çamur Taşıma Hatlari", text: "Yapiskan akislari güvenli sekilde tasir." },
    { title: "Besleme Sistemleri", text: "Kurutma ve son ürün adimlarina kararlı besleme yapar." },
    { title: "Eleme ve Ayirma", text: "Fraksiyon ayrimi ve yabanci madde kontrol? saglar." },
    { title: "Depolama Uniteleri", text: "Ara stok ve tamponlama imk?n? sunar." },
    { title: "Toz ve Koku kontrol?", text: "Cevresel uyum ve saha güvenligini destekler." },
    { title: "Son Ürün Yönetimi", text: "Cikis, sevkiyat ve stoklama adimlarini tamamlar." },
    { title: "Kontrol Panolari", text: "Besleme ve proses parametrelerini izler." },
  ],
  criticalTopics: [
    { title: "Giris nemi", text: "Kurutma sistemi ve enerji ihtiyacinda belirleyicidir." },
    { title: "Hedef cikis nemi", text: "Son ürün beklentisine gore net tanimlanmalidir." },
    { title: "Koku kontrol?", text: "Çamur isleme sahalarinda kritik onemdedir." },
    { title: "Hat surekliligi", text: "Besleme ve kurutma akislari kararli olmali, kesinti olüstürmamalidir." },
    { title: "Enerji tuketimi", text: "Kurutma ve transfer sistemleri birlikte degerlendirilmelidir." },
    { title: "Asindiricilik", text: "Çamur karakteri bakım sikligi ve ekipman omrunu etkiler." },
    { title: "Depolama ve lojistik", text: "Girdi ve son ürün akisina uygun planlanmalidir." },
    { title: "Cevresel uyum", text: "Tasarımın temel parçalarindan biridir." },
  ],
  faqAnswers: [
    "Kapasite; giris camuru tipi, nem seviyesi ve hedef cikis yapisina gore belirlenir.",
    "Evet, mevcut aritma tesislerine kurutma, transfer ve yardimci ekipmanlar entegre edilebilir.",
    "Otomasyon; besleme ve kurutma dengesini korumak icin onemlidir.",
    "Doğru susuzlastirma, kurutma ve transfer ekipmani isletme verimini etkiler.",
    "Evet, proses tasarımı, imalat ve devreye alma dahil ??z?m sunuyoruz.",
  ],
  formDescription:
    "Giris camur tipi, gunluk miktar, hedef cikis nemi ve son ürün beklentinizi paylasin; size uygun camur isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "sludgeType", label: "Giris Çamur Turu", type: "text" },
    { id: "dailyInputAmount", label: "Gunluk Giris Miktari", type: "number", unit: "ton/gun" },
    { id: "inputMoisture", label: "Giris Nemi", type: "text" },
    { id: "targetMoisture", label: "Hedef Cikis Nemi", type: "text" },
    { id: "targetProduct", label: "Son Ürün Hedefi", type: "select", options: ["Kurutulmus ürün", "Bertaraf oncesi hacim azaltma", "Diğer"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Çamur tipi, nem orani, gunluk miktar ve saha bilgileri gibi teknik detaylari yazabilirsiniz.",
};

const bulkFamily: Family = {
  primaryTitle: "Kullanılan malzeme tipi ve akis mantigi",
  primaryDescription:
    "Yem, toz ve dokme kati malzeme cozumlerinde sistem yaklasimi; malzemenin akiskanligi, tane boyutu, yogunlugu ve koprulenme egilimine gore sekillenir.",
  primaryCards: [
    { title: "Akis davranisi", text: "Malzemenin ak??? bunker ve bosaltma kurgusunu belirler." },
    { title: "Dozaj hassasiyeti", text: "Recete doğrulugu gereken hatlarda kritik rol oynar." },
    { title: "Toz kontrol?", text: "Transfer ve paketleme noktalarinda doğru planlanmalidir." },
    { title: "Lojistik ve son hat", text: "Depolama, tasima ve son ürün adimlari tek akista dusunulmelidir." },
  ],
  offerCards: [
    { title: "Depolama ve besleme kurgusu", text: "Silo ve bunker ekipmanlarini malzeme davranisina gore planliyoruz." },
    { title: "Dozajlama sistemleri", text: "Toz ve dokme kati hatlarda hassas besleme altyapisi kuruyoruz." },
    { title: "Transfer hatlari", text: "Konveyor ve elevator altyapisini proses akisini destekleyecek sekilde tasarliyoruz." },
    { title: "Eleme ve siniflandirma", text: "Ürün standardini destekleyen siniflandirma altyapisi belirliyoruz." },
    { title: "Paketleme ve son hat", text: "Torbalama ve yukleme adimlarini tesis akisina entegre ediyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve entegrasyon sürecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Silo ve Bunkerler", text: "Ürünlerin güvenli depolanmasini ve tamponlanmasini saglar." },
    { title: "Besleme Sistemleri", text: "Ürünun hatta kararlı ve kontroll? sekilde verilmesini saglar." },
    { title: "Dozajlama Sistemleri", text: "Receteye uygun hassas tartim ve besleme yapar." },
    { title: "Dozaj Kantarları", text: "Doğru oranlarda tartim alir." },
    { title: "Konveyor ve Helezonlar", text: "Yatay transfer adimlarini tamamlar." },
    { title: "Elevator Sistemleri", text: "Dikey ürün transferi gereken noktalarda kullanilir." },
    { title: "Eleme ve Siniflandirma", text: "Fraksiyon ayrimi ve ürün standardi saglar." },
    { title: "Yukleme ve Bosaltma", text: "Silobas, kamyon ve cikis noktalarinda kontroll? akis sunar." },
    { title: "Paketleme ve Son Hat", text: "Torbalama, paletleme ve sevkiyat hazirligini tamamlar." },
  ],
  criticalTopics: [
    { title: "Akis davranisi", text: "Zor akan malzemeler icin uygun bunker kurgusu gerekir." },
    { title: "Toz kontrol?", text: "Tozlu transfer noktalarinda filtrasyon kritik onemdedir." },
    { title: "Dozaj hassasiyeti", text: "Recete doğrulugu doğru tartima baglidir." },
    { title: "Hat kapasite dengesi", text: "Tum ekipmanlar ayni ak??? desteklemelidir." },
    { title: "Depolama güvenligi", text: "Depolama hacmi ve bosaltma mantigi doğru planlanmalidir." },
    { title: "Recete doğrulugu", text: "Doğru dozaj ve karisim kalitesi son ürün standardini belirler." },
    { title: "Hijyen ve bakım", text: "Temizlik ve servis erisimi sureklilik icin onemlidir." },
    { title: "Son ürün lojistigi", text: "Paketleme ve sevkiyat adimlari tesis akisiyla uyumlu olmalidir." },
  ],
  faqAnswers: [
    "Kapasite; malzeme tipi, depolama ihtiyaci ve son hat senaryosuna gore belirlenir.",
    "Evet, mevcut silo, dozaj veya transfer hatlari guclendirilebilir.",
    "Otomasyon; recete takibi ve tartim doğrulugu icin büyük avantaj saglar.",
    "Doğru depolama, dozajlama ve tasima se?imi kararlı performans icin kritiktir.",
    "Evet, muhendislikten saha devreye almaya kadar entegre kurulum sunuyoruz.",
  ],
  formDescription:
    "Malzeme turu, hedef kapasite, depolama ve paketleme ihtiyacinizi paylasin; size uygun dokme kati malzeme isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "materialType", label: "Malzeme Turu", type: "text" },
    { id: "targetCapacity", label: "Hedef Kapasite", type: "text" },
    { id: "storageNeed", label: "Depolama Ihtiyaci", type: "select", options: ["Evet", "Hayır"] },
    { id: "dosingNeed", label: "Dozajlama Gerekli mi?", type: "select", options: ["Evet", "Hayır"] },
    { id: "packagingNeed", label: "Paketleme Gerekli mi?", type: "select", options: ["Evet", "Hayır"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Malzeme tipi, hedef kapasite ve son ürün cikisiyla ilgili teknik detaylari yazabilirsiniz.",
};

const families: Record<string, Family> = {
  "kompost-ve-organik-atik-tesisleri": compostFamily,
  "madencilik-ve-mineral-isleme": miningFamily,
  "kimya-ve-proses-endustrisi": chemistryFamily,
  "geri-donusum-ve-atik-yonetimi": recyclingFamily,
  "enerji-ve-biyogaz-sistemleri": biogasFamily,
  "atik-su-camuru-ve-aritma-cozumleri": sludgeFamily,
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": bulkFamily,
};

export function getSectorSubsolutionConfig(
  sector: SectorCardItem,
  current: SectorSubsectorItem,
): SectorSubsolutionConfig | null {
  if (
    sector.slug === "madencilik-ve-mineral-isleme" &&
    current.slug === "kurutma-ve-sogutma-cozumleri"
  ) {
    return normalizeTextTree(buildConfig(current, miningDryingCoolingFamily));
  }

  const family = families[sector.slug];
  return family ? normalizeTextTree(buildConfig(current, family)) : null;
}

function normalizeTextTree<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    if (key === "id") {
      return value;
    }

    return trText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextTree(item)) as T;
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};

    for (const [entryKey, entryValue] of Object.entries(value as Record<string, unknown>)) {
      output[entryKey] = normalizeTextTree(entryValue, entryKey);
    }

    return output as T;
  }

  return value;
}
