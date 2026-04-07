import type { SectorFormField } from "./sector-experience-config";
import type { SectorCardItem, SectorSubsectorItem } from "./sector-subsectors-data";

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
    options: ["Yari Otomatik", "Tam Otomatik", "Henuz net degil"],
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
    heroBadge: "ALT COZUM",
    heroTitle: current.title,
    heroDescription: current.description,
    primaryEyebrow: "Proses Mantigi",
    primaryTitle: family.primaryTitle,
    primaryDescription: family.primaryDescription,
    primaryCards: family.primaryCards,
    offerEyebrow: "Sunulan Cozumler",
    offerTitle: `${current.title} icin sundugumuz cozumler`,
    offerCards: family.offerCards,
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: `${current.title} surecinde kullanilan baslica makine ve ekipmanlar`,
    equipment: family.equipment,
    criticalEyebrow: "Kritik Basliklar",
    criticalTitle: `${current.title} surecinde kritik olan konular`,
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
  primaryTitle: "Kullanilan giris materyali ve proses mantigi",
  primaryDescription:
    "Organik atik cozumlerinde tesis kurgusu; giren materyalin nemi, lif yapisi, organik yogunlugu ve hedef son urun yapisina gore belirlenir.",
  primaryCards: [
    { title: "Giris materyali", text: "Nem, lif boyu ve organik yogunluk tambur ve eleme secimini belirler." },
    { title: "On hazirlik", text: "Karistirma, parcalama ve kontrollu besleme hat verimini destekler." },
    { title: "Son urun hedefi", text: "Kompost, kurutulmus urun veya siniflanmis fraksiyona gore hat degisir." },
    { title: "Cevresel kontrol", text: "Koku, toz ve saha lojistigi ilk asamadan itibaren ele alinmalidir." },
  ],
  offerCards: [
    { title: "Atik tipine uygun proses", text: "Farkli organik girdiler icin dogru hat kurgusunu planliyoruz." },
    { title: "Tambur ve elek secimi", text: "Olgunlastirma, kurutma ve siniflandirma adimlarini netlestiriyoruz." },
    { title: "Saha yerlesimi", text: "Besleme, stok ve son urun akisini birlikte kurguluyoruz." },
    { title: "Cevresel kontrol", text: "Koku ve toz yonetimini tesisin ayrilmaz parcasi olarak planliyoruz." },
    { title: "Revizyon ve kapasite artisi", text: "Mevcut hatlarda darboğaz ve verim iyilestirmesi yapiyoruz." },
    { title: "Anahtar teslim kurulum", text: "Imalat, montaj ve devreye alma surecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Besleme Bunkeri", text: "Organik girdilerin kontrollu hatta alinmasini saglar." },
    { title: "Hazirlama Konveyorleri", text: "On hazirlik ve tambur besleme akisini dengeler." },
    { title: "Karistirma Sistemleri", text: "Farkli fraksiyonlarin homojen sekilde birlesmesini destekler." },
    { title: "Olgunlastirma Tamburu", text: "Kompostun kontrollu ilerlemesini saglar." },
    { title: "Kurutma Tamburu", text: "Yuksek nemli girdilerde hacim azaltma ve kurutma yapar." },
    { title: "Eleme Sistemleri", text: "Son urun fraksiyonlarini ayirir." },
    { title: "Transfer Hatlari", text: "Hazirlama, tambur ve cikis noktalarini baglar." },
    { title: "Toz ve Koku Kontrolu", text: "Cevresel performansi destekler." },
    { title: "Paketleme ve Son Hat", text: "Son urunun torbalama ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Atik nem orani", text: "Tambur secimini ve kurutma ihtiyacini etkiler." },
    { title: "Karbon / azot dengesi", text: "Kompost kalitesi ve sureci icin belirleyicidir." },
    { title: "Koku kontrolu", text: "Saha kabulunu ve cevresel uyumu etkiler." },
    { title: "Kurutma verimi", text: "Enerji dengesiyle birlikte ele alinmalidir." },
    { title: "Son urun homojenligi", text: "Pazarlanabilir kalite icin gereklidir." },
    { title: "Eleme kalitesi", text: "Urun fraksiyonlarini ve verimi belirler." },
    { title: "Toz guvenligi", text: "Emis ve filtrasyon ihmal edilmemelidir." },
    { title: "Saha lojistigi", text: "Girdi ve cikis akislari dengeli planlanmalidir." },
  ],
  faqAnswers: [
    "Kapasite; atik tipi, nem yapisi ve gunluk kabul miktarina gore belirlenir.",
    "Evet, uygun saha ve ekipman kurgusuyla yeni cozumler mevcut hatlara eklenebilir.",
    "Otomasyon seviyesi besleme, tambur ve son hat surekliligine gore netlesir.",
    "Dogru tambur, elek ve transfer secimi hem kaliteyi hem verimi belirler.",
    "Evet, proses tasarimi, imalat, montaj ve devreye alma dahil kurulum yapiyoruz.",
  ],
  formDescription:
    "Atik tipi, gunluk giris kapasitesi, hedef son urun ve saha sartlarinizi paylasin; size uygun organik atik isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "wasteType", label: "Atik Turu", type: "select", options: ["Evsel Organik Atik", "Tarimsal Atik", "Hayvansal Atik", "Karışık Organik Atik"] },
    { id: "dailyInputCapacity", label: "Gunluk Giris Kapasitesi", type: "number", unit: "ton/gun" },
    { id: "targetOutput", label: "Hedef Son Urun", type: "select", options: ["Kompost", "Kurutulmus Organik Urun", "Elek Alti / Elek Ustu Ayrimi", "Henuz net degil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Atik kaynagi, kapasite, saha bilgisi ve hedef son urunle ilgili teknik detaylari yazabilirsiniz.",
};

const miningFamily: Family = {
  primaryTitle: "Islenen malzeme yapisi ve proses mantigi",
  primaryDescription:
    "Madencilik ve mineral isleme cozumlerinde hat tasarimi; malzemenin sertligi, asindiriciligi, giris boyutu ve hedef cikis boyutuna gore sekillenir.",
  primaryCards: [
    { title: "Malzeme sertligi", text: "Kirici tipi ve sarf secimi dogrudan sertlige baglidir." },
    { title: "Asindiricilik", text: "Asindirici yapilar bakim ve govde secimini etkiler." },
    { title: "Giris ve cikis boyutu", text: "Kademe kurgusu hedef tane boyutuna gore planlanir." },
    { title: "Kapasite dengesi", text: "Tum ekipmanlar ayni hat debisinde dengelenmelidir." },
  ],
  offerCards: [
    { title: "Proses tasarimi", text: "Kirma, eleme ve transfer akisini teknik olarak planliyoruz." },
    { title: "Kirici ve elek secimi", text: "Malzeme ve kapasiteye uygun kombinasyonlari belirliyoruz." },
    { title: "Hat yerlesimi", text: "Bunker, transfer ve cikis noktalarini saha lojistigine gore kuruyoruz." },
    { title: "Makine imalati", text: "Projeye ozel kirici, elek ve transfer ekipmanlari uretiyoruz." },
    { title: "Revizyon ve kapasite artisi", text: "Mevcut hatlarda darboğaz ve verim iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Saha kurulumu ve isletmeye alma surecini yonetiyoruz." },
  ],
  equipment: [
    { title: "Primer Kiricilar", text: "Iri boyutlu malzemelerin ilk kademe kucultulmesini saglar." },
    { title: "Sekonder Kiricilar", text: "Hedef boyuta yaklasmak icin ikinci kademe kirma yapar." },
    { title: "Tersiyer Cozumler", text: "Ince fraksiyon ve kontrollu cikis boyutunu destekler." },
    { title: "Besleyiciler", text: "Kirici ve elek hatlarina kararlı malzeme besler." },
    { title: "Eleme Sistemleri", text: "Siniflandirma ve kalite kontrolu saglar." },
    { title: "Bunker Uniteleri", text: "Ara stok ve kontrollu cikis noktalari sunar." },
    { title: "Transfer Hatlari", text: "Kirma ve eleme noktalarini baglar." },
    { title: "Toz Kontrolu", text: "Saha guvenligi ve cevresel uyumu destekler." },
    { title: "Yukleme Cikislari", text: "Son urunun stoklama ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Malzeme sertligi", text: "Kirici secimi ve sarf omrunu belirler." },
    { title: "Asindiricilik", text: "Govde ve sarf seciminde kritik rol oynar." },
    { title: "Tane boyutu", text: "Giris ve hedef cikis boyutu net tanimlanmalidir." },
    { title: "Kapasite dengesi", text: "Darboğaz olusmamasi icin butun hat ayni ritimde calismalidir." },
    { title: "Elek verimi", text: "Siniflandirma kalitesini dogrudan etkiler." },
    { title: "Toz kontrolu", text: "Ozellikle ince urun hatlarinda kritiktir." },
    { title: "Bakim erisimi", text: "Servis ve sarf degisimi kolay planlanmalidir." },
    { title: "Enerji verimliligi", text: "Dogru makine secimi tuketimi azaltir." },
  ],
  faqAnswers: [
    "Kapasite; malzeme tipi, giris boyutu, hedef cikis ve calisma saatine gore belirlenir.",
    "Evet, uygun ekipman secimiyle mevcut kirma-eleme hatlari revize edilebilir.",
    "Otomasyon seviyesi besleme dengesi ve cikis takibi icin buyuk avantaj saglar.",
    "Yanlis kirici, elek veya transfer secimi verimi dusurur ve bakim maliyetini artirir.",
    "Evet, proses tasarimi, ekipman imalati, saha kurulumu ve devreye alma dahil cozum sunuyoruz.",
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
  messagePlaceholder: "Malzeme yapisi, kapasite ve hedef urun boyutuyla ilgili detaylari yazabilirsiniz.",
};

const chemistryFamily: Family = {
  primaryTitle: "Kullanilan kimyasal veya proses yapisi ve ekipman mantigi",
  primaryDescription:
    "Kimya ve proses cozumlerinde ekipman secimi; urunun viskozitesi, kimyasal uyumlulugu, basinc ve sicaklik gereksinimine gore belirlenir.",
  primaryCards: [
    { title: "Kimyasal uyumluluk", text: "Govde ve conta yapisi urunun karakterine uygun secilmelidir." },
    { title: "Sicaklik ve basinc", text: "Isitma, sogutma veya basincli calisma tasarimin temelidir." },
    { title: "Karistirma ve homojenlik", text: "Karistirici tipi hedef urun kalitesini belirler." },
    { title: "Temizlik ve erisim", text: "Bakim ve urun gecis kolayligi surekliligi destekler." },
  ],
  offerCards: [
    { title: "Proses tasarimi", text: "Karistirma, reaksiyon ve transfer adimlarini tek sistemde planliyoruz." },
    { title: "Ekipman secimi", text: "Reaktor, tank ve dozajlama ekipmanlarini urun yapisina gore belirliyoruz." },
    { title: "Otomasyon ve kontrol", text: "Sicaklik, basinc ve dozaj takibini surece entegre ediyoruz." },
    { title: "Saha yerlesimi", text: "Bakim erisimi ve guvenligi destekleyen yerlesim kuruyoruz." },
    { title: "Revizyon ve modernizasyon", text: "Mevcut kimya hatlarinda kapasite ve proses iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma surecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Karistiricili Reaktorler", text: "Homojen karisim ve kontrollu reaksiyon sunar." },
    { title: "Basincli Reaktorler", text: "Basincli proseslerde guvenli calisma saglar." },
    { title: "Cozundurma Tanklari", text: "Toz ve sivi hammaddelerin cozumdurulmesini destekler." },
    { title: "Sogutma Tanklari", text: "Urun sicaklik dengesini korur." },
    { title: "Stok Tanklari", text: "Ara stoklama ve proses tamponlamasi yapar." },
    { title: "Dozajlama Sistemleri", text: "Kimyasal akislari kontrollu sekilde besler." },
    { title: "Transfer Hatlari", text: "Urunun proses boyunca guvenli aktarimini saglar." },
    { title: "Yardimci Akis Ekipmanlari", text: "Akis kontrolu ve yonlendirme destegi verir." },
    { title: "Kontrol Panolari", text: "Batch ve surec takibini yonetir." },
  ],
  criticalTopics: [
    { title: "Kimyasal uyumluluk", text: "Ekipman malzemesi proses icerigiyle uyumlu secilmelidir." },
    { title: "Basinc ve sicaklik", text: "Calisma kosullari govde ve yardimci sistem secimini belirler." },
    { title: "Karisim homojenligi", text: "Dogru karistirma yapisi hedef kaliteyi korur." },
    { title: "Dogru hacim", text: "Tank ve reaktor hacmi batch planina gore secilmelidir." },
    { title: "Sizdirmazlik", text: "Hat guvenligi ve urun kaybini onler." },
    { title: "Temizlik ve bakim", text: "Yikama kolayligi surekliligi destekler." },
    { title: "Otomasyon", text: "Kararlı ve izlenebilir proses icin gereklidir." },
    { title: "Is guvenligi", text: "Saha guvenligi ve koruma sistemleri birlikte dusunulmelidir." },
  ],
  faqAnswers: [
    "Kapasite; batch yapisi, urun tipi ve reaksiyon suresine gore belirlenir.",
    "Evet, uygun tank ve transfer kurgusuyla yeni ekipmanlar mevcut hatta entegre edilebilir.",
    "Otomasyon kalite, guvenlik ve izlenebilirlik acisindan buyuk onem tasir.",
    "Dogru reaktor, tank ve dozajlama secimi hem kaliteyi hem proses guvenligini belirler.",
    "Evet, proses tasarimi, imalat, montaj ve devreye alma dahil entegre kurulum yapiyoruz.",
  ],
  formDescription:
    "Urun veya kimyasal tipi, calisma sekli, batch kapasitesi ve isitma-sogutma ihtiyacinizi paylasin; size uygun proses cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "productType", label: "Urun / Kimyasal Turu", type: "text" },
    { id: "workingMode", label: "Calisma Sekli", type: "select", options: ["Batch", "Surekli"] },
    { id: "batchCapacity", label: "Hedef Batch Kapasitesi", type: "number", unit: "ton/batch" },
    { id: "thermalNeed", label: "Isitma / Sogutma Ihtiyaci", type: "text" },
    { id: "pressureNeed", label: "Basincli Sistem Gerekli mi?", type: "select", options: ["Evet", "Hayir", "Henuz net degil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Kimyasal yapi, batch hedefi, sicaklik-basinc beklentisi ve saha bilgilerini yazabilirsiniz.",
};

const recyclingFamily: Family = {
  primaryTitle: "Islenen atik tipi ve proses mantigi",
  primaryDescription:
    "Geri donusum cozumlerinde proses kurgusu; atigin heterojen yapisi, yabanci madde riski ve hedef boyut kucultme seviyesine gore belirlenir.",
  primaryCards: [
    { title: "Atik heterojenligi", text: "Karışık akıslar ve degisken nem yapisi ozel yaklasim gerektirir." },
    { title: "Boyut kucultme", text: "Primer ve sekonder kademe ihtiyaci hedef cikisa gore belirlenir." },
    { title: "Ayirma verimi", text: "Elek ve ayirma noktalarinin uyumu geri kazanimi etkiler." },
    { title: "Guvenlik", text: "Toz, gurultu ve yabanci madde riski tasarimin parcasidir." },
  ],
  offerCards: [
    { title: "Parcalama ve kirma secimi", text: "Atik grubuna uygun shredder ve kirici cozumlerini belirliyoruz." },
    { title: "Ayirma ve eleme", text: "Boyutlandirma ve siniflandirma adimlarini geri kazanım hedefine gore kuruyoruz." },
    { title: "Transfer ve besleme", text: "Bunker ve transfer hatlarini saha lojistigine uygun planliyoruz." },
    { title: "Toz ve cevresel kontrol", text: "Emis ve filtrasyonu sistemin ayrilmaz parcasi olarak kurguluyoruz." },
    { title: "Revizyon ve entegrasyon", text: "Mevcut hatlara yeni ekipman entegrasyonu ve kapasite artisi sagliyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve isletmeye alma sureclerini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Shredder Sistemleri", text: "Heterojen akislarda ilk kademe parcalama yapar." },
    { title: "Primer Kiricilar", text: "Buyuk parcalarin kontrollu kucultulmesini saglar." },
    { title: "Sekonder Kiricilar", text: "Hedef boyuta yaklasmak icin ikinci kademe isleme yapar." },
    { title: "Eleme Sistemleri", text: "Fraksiyon ayrimi ve geri kazanimi destekler." },
    { title: "Ayirma Ekipmanlari", text: "Yabanci madde ve farkli urun gruplarini ayirir." },
    { title: "Besleme Hatlari", text: "Atik akislarini kararlı sekilde hatta verir." },
    { title: "Transfer Konveyorleri", text: "Butun proses noktalarini birbirine baglar." },
    { title: "Cevresel Kontrol", text: "Toz ve emisyonu kontrol altinda tutar." },
    { title: "Son Urun Hazirlama", text: "Geri kazanilan urunun stok ve sevkiyatini tamamlar." },
  ],
  criticalTopics: [
    { title: "Atik heterojenligi", text: "Degisken malzeme yapisi ekipman secimini belirler." },
    { title: "Yabanci madde riski", text: "Kirici ve shredder sistemlerinde koruma gerektirir." },
    { title: "Boyut kucultme kademesi", text: "Tek veya cok kademeli isleme hedef cikisa gore secilir." },
    { title: "Toz kontrolu", text: "Ozellikle ince fraksiyonlarda kritik onemdedir." },
    { title: "Hat guvenligi", text: "Yuksek torklu ekipmanlarda koruma eksiksiz olmalidir." },
    { title: "Bakim erisimi", text: "Sarf degisimi icin erisim kolayligi planlanmalidir." },
    { title: "Enerji tuketimi", text: "Dogru ekipman secimi tuketimi azaltir." },
    { title: "Esnek proses", text: "Degisken akislara uyum saglayan yapi yatirim degerini artirir." },
  ],
  faqAnswers: [
    "Kapasite; atik tipi, giris boyutu ve hedef cikisa gore belirlenir.",
    "Evet, uygun on ayirma ve transfer altyapisi ile mevcut hatlar guclendirilebilir.",
    "Otomasyon; besleme dengesi ve proses guvenligi acisindan buyuk avantaj saglar.",
    "Dogru parcalama, ayirma ve transfer secimi geri kazanım verimini etkiler.",
    "Evet, muhendislikten saha devreye almaya kadar anahtar teslim cozum sunuyoruz.",
  ],
  formDescription:
    "Atik turu, kapasite, giris boyutu ve hedef cikis boyutunu paylasin; size uygun geri donusum cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "wasteType", label: "Atik Turu", type: "text" },
    { id: "capacity", label: "Kapasite", type: "text" },
    { id: "inputSize", label: "Giris Boyutu", type: "text" },
    { id: "targetOutputSize", label: "Hedef Cikis Boyutu", type: "text" },
    { id: "plantType", label: "Sabit Tesis / Mobil Tesis", type: "select", options: ["Sabit", "Mobil", "Henuz net degil"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Atik tipi, saha yapisi ve hedef geri kazanım senaryosuyla ilgili teknik detaylari yazabilirsiniz.",
};

const biogasFamily: Family = {
  primaryTitle: "Girdi yapisi ve sistem yaklasimi",
  primaryDescription:
    "Enerji ve biyogaz cozumlerinde hat kurgusu; organik girdinin nemi, lif yapisi, akiskanligi ve besleme senaryosuna gore sekillenir.",
  primaryCards: [
    { title: "Girdi karakteri", text: "Yari kati, lifli veya degisken yapili girdiler farkli cozumler gerektirir." },
    { title: "Besleme surekliligi", text: "Duzenli ve kontrollu girdi akisi kararlı performans icin kritiktir." },
    { title: "Dozaj ve transfer", text: "Depolama ve transfer ekipmanlarinin birbirini desteklemesi gerekir." },
    { title: "Dayanim ve bakim", text: "Yapiskan veya zor akan girdilerde dayaniklilik on plana cikar." },
  ],
  offerCards: [
    { title: "Girdi hazirlama sistemleri", text: "Organik girdileri prosese uygun hale getiren on isleme cozumleri sunuyoruz." },
    { title: "Besleme ve dozajlama", text: "Kararlı ve kontrollu besleme icin uygun bunker ve dozaj kurgusu yapiyoruz." },
    { title: "Yardimci akis ekipmanlari", text: "Akis kontrolunu ve surekliligi destekleyen ekipmanlari belirliyoruz." },
    { title: "Toz ve koku kontrolu", text: "Saha guvenligi icin emis ve filtrasyon altyapisini kuruyoruz." },
    { title: "Revizyon ve entegrasyon", text: "Mevcut enerji ve biyogaz hatlarina yeni ekipman entegrasyonu sagliyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma surecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Girdi Bunkerleri", text: "Organik girdilerin kontrollu kabul ve stoklanmasini saglar." },
    { title: "Hazirlama Konveyorleri", text: "Besleme ve dozaj noktalarina dengeli transfer yapar." },
    { title: "Dozajlama Sistemleri", text: "Organik girdilerin belirlenen debide prosese verilmesini saglar." },
    { title: "Helezon Hatlari", text: "Yapiskan veya lifli malzemelerin transferini destekler." },
    { title: "Depolama Uniteleri", text: "Ara stok ve tamponlama imkani sunar." },
    { title: "Yardimci Akis Sistemleri", text: "Akis kontrolu ve proses yonlendirmesini destekler." },
    { title: "Toz ve Koku Kontrolu", text: "Cevresel performansi ve saha konforunu korur." },
    { title: "Yan Urun Hazirlama", text: "Cikis akislarinin kontrollu yonetimini tamamlar." },
    { title: "Kontrol Panolari", text: "Besleme ve surec parametrelerinin izlenmesini saglar." },
  ],
  criticalTopics: [
    { title: "Girdi kararliligi", text: "Duzensiz girdi yapisi performansi dusurur." },
    { title: "Nem ve akiskanlik", text: "Bunker ve transfer sistemlerini belirler." },
    { title: "Besleme surekliligi", text: "Kesintisiz ve kararlı akisi desteklemek gerekir." },
    { title: "Koku kontrolu", text: "Organik girdilerde koku yonetimi onemlidir." },
    { title: "Hat guvenligi", text: "Zorlayici akislarda ekipman koruma birlikte dusunulmelidir." },
    { title: "Otomasyon", text: "Surec izleme ve dozaj kararliligi icin gereklidir." },
    { title: "Dayaniklilik", text: "Nemli ve asindirici yapida agir hizmet tipi secim onemlidir." },
    { title: "Bakim planlamasi", text: "Bakim araliklari ve saha erisimi desteklenmelidir." },
  ],
  faqAnswers: [
    "Kapasite; girdi tipi, gunluk besleme plani ve surec ihtiyacina gore belirlenir.",
    "Evet, uygun saha ve transfer altyapisi ile mevcut biyogaz hatlari guclendirilebilir.",
    "Otomasyon; besleme duzeni ve akış takibi icin buyuk avantaj saglar.",
    "Dogru bunker, dozaj ve transfer secimi surekliligi dogrudan etkiler.",
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
    "Atik su camuru cozumlerinde proses yaklasimi; giris camurunun nemi, akiskanligi, yapiskanligi ve hedef son urun yapisina gore belirlenir.",
  primaryCards: [
    { title: "Giris nemi", text: "Kurutma sistemi ve enerji ihtiyacini belirler." },
    { title: "Akis ve yapiskanlik", text: "Tasima, besleme ve bosaltma ekipmanlarini etkiler." },
    { title: "Hedef cikis yapisi", text: "Kurumus urun veya hacim azaltma hedefine gore proses degisir." },
    { title: "Koku ve emisyon", text: "Cevresel uygunluk ilk tasarimdan itibaren ele alinmalidir." },
  ],
  offerCards: [
    { title: "Kurutma ve destek kurgusu", text: "Giris yapisina gore kurutma hattini ve yardimci ekipmanlari belirliyoruz." },
    { title: "Tasima ve besleme sistemleri", text: "Camur akisini kararlı hale getirecek cozumleri planliyoruz." },
    { title: "Enerji optimizasyonu", text: "Enerji tuketimi ve sureklilik dengesini birlikte ele aliyoruz." },
    { title: "Toz ve koku kontrolu", text: "Emisyon ve saha konforu icin kontrol altyapisi kuruyoruz." },
    { title: "Revizyon ve modernizasyon", text: "Mevcut aritma hatlarinda kapasite ve proses iyilestirmesi yapiyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve devreye alma surecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Susuzlastirma Sistemleri", text: "Camur hacmini azaltir ve sonraki adimlari destekler." },
    { title: "Kurutma Hatlari", text: "Hedef cikis nemine ulasmak icin kontrollu kurutma uygular." },
    { title: "Camur Tasima Hatlari", text: "Yapiskan akislari guvenli sekilde tasir." },
    { title: "Besleme Sistemleri", text: "Kurutma ve son urun adimlarina kararlı besleme yapar." },
    { title: "Eleme ve Ayirma", text: "Fraksiyon ayrimi ve yabanci madde kontrolu saglar." },
    { title: "Depolama Uniteleri", text: "Ara stok ve tamponlama imkani sunar." },
    { title: "Toz ve Koku Kontrolu", text: "Cevresel uyum ve saha guvenligini destekler." },
    { title: "Son Urun Yonetimi", text: "Cikis, sevkiyat ve stoklama adimlarini tamamlar." },
    { title: "Kontrol Panolari", text: "Besleme ve proses parametrelerini izler." },
  ],
  criticalTopics: [
    { title: "Giris nemi", text: "Kurutma sistemi ve enerji ihtiyacinda belirleyicidir." },
    { title: "Hedef cikis nemi", text: "Son urun beklentisine gore net tanimlanmalidir." },
    { title: "Koku kontrolu", text: "Camur isleme sahalarinda kritik onemdedir." },
    { title: "Hat surekliligi", text: "Besleme ve kurutma akislari kararli olmali, kesinti olusturmamalidir." },
    { title: "Enerji tuketimi", text: "Kurutma ve transfer sistemleri birlikte degerlendirilmelidir." },
    { title: "Asindiricilik", text: "Camur karakteri bakim sikligi ve ekipman omrunu etkiler." },
    { title: "Depolama ve lojistik", text: "Girdi ve son urun akisina uygun planlanmalidir." },
    { title: "Cevresel uyum", text: "Tasarimin temel parçalarindan biridir." },
  ],
  faqAnswers: [
    "Kapasite; giris camuru tipi, nem seviyesi ve hedef cikis yapisina gore belirlenir.",
    "Evet, mevcut aritma tesislerine kurutma, transfer ve yardimci ekipmanlar entegre edilebilir.",
    "Otomasyon; besleme ve kurutma dengesini korumak icin onemlidir.",
    "Dogru susuzlastirma, kurutma ve transfer ekipmani isletme verimini etkiler.",
    "Evet, proses tasarimi, imalat ve devreye alma dahil cozum sunuyoruz.",
  ],
  formDescription:
    "Giris camur tipi, gunluk miktar, hedef cikis nemi ve son urun beklentinizi paylasin; size uygun camur isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "sludgeType", label: "Giris Camur Turu", type: "text" },
    { id: "dailyInputAmount", label: "Gunluk Giris Miktari", type: "number", unit: "ton/gun" },
    { id: "inputMoisture", label: "Giris Nemi", type: "text" },
    { id: "targetMoisture", label: "Hedef Cikis Nemi", type: "text" },
    { id: "targetProduct", label: "Son Urun Hedefi", type: "select", options: ["Kurutulmus urun", "Bertaraf oncesi hacim azaltma", "Diger"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Camur tipi, nem orani, gunluk miktar ve saha bilgileri gibi teknik detaylari yazabilirsiniz.",
};

const bulkFamily: Family = {
  primaryTitle: "Kullanilan malzeme tipi ve akis mantigi",
  primaryDescription:
    "Yem, toz ve dokme kati malzeme cozumlerinde sistem yaklasimi; malzemenin akiskanligi, tane boyutu, yogunlugu ve koprulenme egilimine gore sekillenir.",
  primaryCards: [
    { title: "Akis davranisi", text: "Malzemenin akisi bunker ve bosaltma kurgusunu belirler." },
    { title: "Dozaj hassasiyeti", text: "Recete dogrulugu gereken hatlarda kritik rol oynar." },
    { title: "Toz kontrolu", text: "Transfer ve paketleme noktalarinda dogru planlanmalidir." },
    { title: "Lojistik ve son hat", text: "Depolama, tasima ve son urun adimlari tek akista dusunulmelidir." },
  ],
  offerCards: [
    { title: "Depolama ve besleme kurgusu", text: "Silo ve bunker ekipmanlarini malzeme davranisina gore planliyoruz." },
    { title: "Dozajlama sistemleri", text: "Toz ve dokme kati hatlarda hassas besleme altyapisi kuruyoruz." },
    { title: "Transfer hatlari", text: "Konveyor ve elevator altyapisini proses akisini destekleyecek sekilde tasarliyoruz." },
    { title: "Eleme ve siniflandirma", text: "Urun standardini destekleyen siniflandirma altyapisi belirliyoruz." },
    { title: "Paketleme ve son hat", text: "Torbalama ve yukleme adimlarini tesis akisina entegre ediyoruz." },
    { title: "Kurulum ve devreye alma", text: "Montaj ve entegrasyon surecini tek merkezden yonetiyoruz." },
  ],
  equipment: [
    { title: "Silo ve Bunkerler", text: "Urunlerin guvenli depolanmasini ve tamponlanmasini saglar." },
    { title: "Besleme Sistemleri", text: "Urunun hatta kararlı ve kontrollu sekilde verilmesini saglar." },
    { title: "Dozajlama Sistemleri", text: "Receteye uygun hassas tartim ve besleme yapar." },
    { title: "Dozaj Kantarları", text: "Dogru oranlarda tartim alir." },
    { title: "Konveyor ve Helezonlar", text: "Yatay transfer adimlarini tamamlar." },
    { title: "Elevator Sistemleri", text: "Dikey urun transferi gereken noktalarda kullanilir." },
    { title: "Eleme ve Siniflandirma", text: "Fraksiyon ayrimi ve urun standardi saglar." },
    { title: "Yukleme ve Bosaltma", text: "Silobas, kamyon ve cikis noktalarinda kontrollu akis sunar." },
    { title: "Paketleme ve Son Hat", text: "Torbalama, paletleme ve sevkiyat hazirligini tamamlar." },
  ],
  criticalTopics: [
    { title: "Akis davranisi", text: "Zor akan malzemeler icin uygun bunker kurgusu gerekir." },
    { title: "Toz kontrolu", text: "Tozlu transfer noktalarinda filtrasyon kritik onemdedir." },
    { title: "Dozaj hassasiyeti", text: "Recete dogrulugu dogru tartima baglidir." },
    { title: "Hat kapasite dengesi", text: "Tum ekipmanlar ayni akisi desteklemelidir." },
    { title: "Depolama guvenligi", text: "Depolama hacmi ve bosaltma mantigi dogru planlanmalidir." },
    { title: "Recete dogrulugu", text: "Dogru dozaj ve karisim kalitesi son urun standardini belirler." },
    { title: "Hijyen ve bakim", text: "Temizlik ve servis erisimi sureklilik icin onemlidir." },
    { title: "Son urun lojistigi", text: "Paketleme ve sevkiyat adimlari tesis akisiyla uyumlu olmalidir." },
  ],
  faqAnswers: [
    "Kapasite; malzeme tipi, depolama ihtiyaci ve son hat senaryosuna gore belirlenir.",
    "Evet, mevcut silo, dozaj veya transfer hatlari guclendirilebilir.",
    "Otomasyon; recete takibi ve tartim dogrulugu icin buyuk avantaj saglar.",
    "Dogru depolama, dozajlama ve tasima secimi kararlı performans icin kritiktir.",
    "Evet, muhendislikten saha devreye almaya kadar entegre kurulum sunuyoruz.",
  ],
  formDescription:
    "Malzeme turu, hedef kapasite, depolama ve paketleme ihtiyacinizi paylasin; size uygun dokme kati malzeme isleme cozumunu birlikte netlestirelim.",
  formFields: [
    { id: "materialType", label: "Malzeme Turu", type: "text" },
    { id: "targetCapacity", label: "Hedef Kapasite", type: "text" },
    { id: "storageNeed", label: "Depolama Ihtiyaci", type: "select", options: ["Evet", "Hayir"] },
    { id: "dosingNeed", label: "Dozajlama Gerekli mi?", type: "select", options: ["Evet", "Hayir"] },
    { id: "packagingNeed", label: "Paketleme Gerekli mi?", type: "select", options: ["Evet", "Hayir"] },
    ...sharedFields,
  ],
  messagePlaceholder: "Malzeme tipi, hedef kapasite ve son urun cikisiyla ilgili teknik detaylari yazabilirsiniz.",
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
  const family = families[sector.slug];
  return family ? buildConfig(current, family) : null;
}
